import OpenSeadragon from 'OpenSeadragon';
import ClipperLib from 'ClipperLib';
import inject from '../context/inject';

export default OpenSeadragon.extend(new OpenSeadragon.EventSource(), {

    @inject('viewer')
    initialize(viewer) {
        this.viewer = viewer;
        this.el = createOverlay();
        this.svg = appendSVG(this.el);
        this.viewer.addHandler('animation', function (target) {
            if (target.eventSource.viewport) {
                var paths = document.getElementsByClassName("osd-annotations_path");
                for (var i = 0; i < paths.length; ++i) {
                    var item = paths[i];
                    item.setAttribute('stroke-width', 0.05/(target.eventSource.viewport.getZoom(true) / target.eventSource.viewport.getMaxZoom()));
                };
            }
        });
        this.el.addEventListener('mousedown', this.raiseEvent.bind(this, 'mousedown'), false);
        this.el.addEventListener('mouseup', this.raiseEvent.bind(this, 'mouseup'), false);
        this.viewer.addOverlay(this.el, createOpenSeadragonRect(this.viewer));
        return this;
    },

    export() {
        var serializer = new XMLSerializer();
        var data = serializer.serializeToString(this.svg);
        return data;
    },

    import(data) {
        var svg = document.importNode(data, true); // surprisingly optional in these browsers
        this.el.innerHTML = '';
        this.el.appendChild(svg);
        this.svg = this.el.firstChild;
    },

    reset() {
        this.el.innerHTML = '';
        this.svg = appendSVG(this.el);
    },

    startPath(x, y) {
        var path = createPath(x, y);
        //path.addEventListener("click", click_path, false);
        this.svg.appendChild(path);
    },

    updatePath(x, y) {
        if (x == this.last_x && y == this.last_y)
            return;
        var dist = (x - this.first_x) *(x - this.first_x) + (y - this.first_y) *(y - this.first_y);
        var path = this.svg.lastChild;
        if (Math.sqrt(dist)*this.viewer.viewport.getZoom(true) / this.viewer.viewport.getMaxZoom() < Math.sqrt(0.2) && path.getTotalLength()*this.viewer.viewport.getZoom(true) / this.viewer.viewport.getMaxZoom() > Math.sqrt(0.5)) {
            this.closed_curve=true;
            path.setAttribute('stroke', 'red');
        } else {
            this.closed_curve=false;
            path.setAttribute('stroke', 'black');
        }
        path.setAttribute('fill', 'rgba(255,255,255,0.5)');
        if (this.drawing_up){
            if (this.last_path == undefined)
                this.last_path = path.getAttribute('d');
            path.setAttribute('d', this.last_path + ' L' + x + ' ' + y);
        } else {
            path.setAttribute('d', path.getAttribute('d') + ' L' + x + ' ' + y);
            this.last_path = path.getAttribute('d');
            this.last_x = x;
            this.last_y = y;
        }
    },

    editPath(x, y) {
        if (x == this.last_x && y == this.last_y)
            return;
        function paths2string(paths, scale) {
            var svgpath = "", i, j;
            for (i = 0; i < paths.length; i++) {
                for (j = 0; j < paths[i].length; j++){
                    if (!j) svgpath += "M";
                else svgpath += "L";
                    svgpath += (paths[i][j].X / scale) + " " + (paths[i][j].Y / scale);
                }
                svgpath += " Z";
            }
            if (svgpath=="") svgpath = "M0,0";
            return svgpath;
        }
        var path = this.svg.lastChild;
        var commands = path.getAttribute('d').trim().split("M");
        commands.shift();
        var pointArrays = commands.map(function (l){
            l = l.trim();
            var commands_ = l.split("L");
            return commands_.map(function (d){
                d = d.trim();
                var pointsArray = d.slice(0, d.length).split(' ');
                return { X: parseFloat(pointsArray[0]), Y: parseFloat(pointsArray[1]) };
            });
        });
        if (pointArrays.length == 1) {
            pointArrays.push([]);
        }
        //pointArrays.push(pointArrays[0]);
        var scale = 500;
        var subj_paths = pointArrays;
        var clip_paths = [];
        var radius = this.viewer.viewport.viewerElementToViewportCoordinates(new OpenSeadragon.Point(30/5., 30/5.));
        var radius_ = this.viewer.viewport.viewerElementToViewportCoordinates(new OpenSeadragon.Point(0, 0));
        radius.x = scale*(radius.x - radius_.x);
        radius.y = scale*(radius.y - radius_.y) * this.viewer.source.aspectRatio;
        var steps = 20;
        for (var i = 0; i < steps; i++) {
            clip_paths.push({ X: x + radius.x * Math.cos(2 * Math.PI * i / steps), Y: y + radius.y * Math.sin(2 * Math.PI * i / steps) });
        }
        var clip_paths = [clip_paths, []];
        ClipperLib.JS.ScaleUpPaths(subj_paths, scale);
        ClipperLib.JS.ScaleUpPaths(clip_paths, scale);
        var cpr = new ClipperLib.Clipper();
        cpr.AddPaths(subj_paths, ClipperLib.PolyType.ptSubject, true);
        cpr.AddPaths(clip_paths, ClipperLib.PolyType.ptClip, true);
        var solution_paths = new ClipperLib.Paths();
        if (this.diff) {
            cpr.Execute(ClipperLib.ClipType.ctDifference, solution_paths);
        } else {
            cpr.Execute(ClipperLib.ClipType.ctUnion, solution_paths);
        }
        if (this.last_x != null) {
            var a = radius.x;
            var b = radius.y;
            // m is the slope from x,y to last_x, last_y
            var m   = (y - this.last_y) / (x - this.last_x);
            // p_x, p_y and -p_x, -p_y are coordinates of the intersections between ellipse and tangents of slope m.
            if (m==Infinity || m==-Infinity) {
                var p_x = a;
                var p_y = 0;
            } else {
                var p_x = (-a*a*m) / Math.sqrt(a*a*m*m+b*b);
                var p_y = (b*b) / Math.sqrt(a*a*m*m+b*b);
            };
            var rect_paths = [];
            rect_paths.push({ X: x + p_x, Y: y + p_y });
            rect_paths.push({ X: x - p_x, Y: y - p_y });
            rect_paths.push({ X: this.last_x - p_x, Y: this.last_y - p_y });
            rect_paths.push({ X: this.last_x + p_x, Y: this.last_y + p_y });
            var rect_paths = [rect_paths, []];
            var cpr = new ClipperLib.Clipper();
            ClipperLib.JS.ScaleUpPaths(rect_paths, scale);
            cpr.AddPaths(solution_paths, ClipperLib.PolyType.ptSubject, true);
            cpr.AddPaths(rect_paths, ClipperLib.PolyType.ptClip, true);
            if (this.diff) {
                cpr.Execute(ClipperLib.ClipType.ctDifference, solution_paths);
            } else {
                cpr.Execute(ClipperLib.ClipType.ctUnion, solution_paths);
            }
        }
        this.last_x = x;
        this.last_y = y;
        path.setAttribute('d', paths2string(solution_paths, scale));
    }
});

function createOverlay() {
    var div = document.createElement('div');
    div.className = 'overlay';
    return div;
}

function appendSVG(el) {
    var svg = createSVG();
    el.appendChild(svg);
    return svg;
}
/*
function click_path (e) {
    console.log(e);
    e.stopPropagation();
    e.preventDefaultAction = true;
    e.preventDefault();
}
*/
function createPath(x, y) {
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('class', 'osd-annotations_path');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', 'black');
    path.setAttribute('stroke-width', '0.5');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('d', 'M' + x + ' ' + y);
    return path;
}

function createSVG() {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('version', '1.1');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.style.cursor = 'default';
    svg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
    svg.setAttribute('xmlns:xlink', "http://www.w3.org/1999/xlink");
    return svg;
}

function createOpenSeadragonRect(viewer) {
    var width = viewer.viewport.homeBounds.width;
    var height = viewer.viewport.homeBounds.height;
    return new OpenSeadragon.Rect(0, 0, width, height);
}
