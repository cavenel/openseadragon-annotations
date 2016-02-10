import OpenSeadragon from 'OpenSeadragon';
import state from './state';
import inject from '../context/inject';

export default OpenSeadragon.extend(Object.create(state), {

    @inject('overlay')
    initialize(overlay) {
        this.overlay = overlay;
        this.overlay.svg.style.cursor = "url('./img/pen-cursor.cur'), default";
        this._mouseTracker = function (e) {
            var x = e.offsetX==undefined?e.layerX:e.offsetX;
            var y = e.offsetY==undefined?e.layerY:e.offsetY;
            if (x>100 || y>100) {
                this.x = x / this.overlay.el.clientWidth * 100;
                this.y = y / this.overlay.el.clientHeight * 100;
            }
        }.bind(this);
        this._onMouseDown = function (e) {
            this.handleMouseDown(e.offsetX==undefined?e.layerX:e.offsetX, e.offsetY==undefined?e.layerY:e.offsetY);
            document.addEventListener("mouseup", this._onMouseUp, false);
            e.stopPropagation();
        }.bind(this);
        this._onMouseUp = (function () {
            if (this.overlay.closed_curve) {
                this.handleMouseUp();
            } else {
                this.overlay.drawing_up = true;
            };
            document.removeEventListener("mouseup", this._onMouseUp, false);
        }).bind(this);
        if (0) {//(detectIE()) {
            window.viewer.setMouseNavEnabled(false);
            window.viewer.element.addEventListener("mousedown", this._onMouseDown, false);
        } else {
            this.overlay.addHandler('mousedown', this._onMouseDown);
        };
        return this;
    },

    close() {
        this.overlay.svg.style.cursor = "default";
        if (0) {//(detectIE()) {
            window.viewer.element.removeEventListener("mousedown", this._onMouseDown, false);
        } else {
            this.overlay.removeHandler('mousedown', this._onMouseDown);
        };
    },

    handleMouseDown(x, y) {
        this.x = x / this.overlay.el.clientWidth * 100;
        this.y = y / this.overlay.el.clientHeight * 100;
        if (! this._interval) {
            this.overlay.first_x = this.x;
            this.overlay.first_y = this.y;
            this.overlay.startPath(this.x, this.y);
            this.overlay.el.addEventListener('mousemove', this._mouseTracker, false);
            this.overlay.updatePath(this.x, this.y);
            this._interval = window.setInterval((function () {
                this.overlay.updatePath(this.x, this.y);
            }).bind(this), 25);
        }
        if (this.overlay.drawing_up) {
            this.overlay.drawing_up = false;
            this.overlay.updatePath(this.x, this.y);
        };
    },

    handleMouseUp() {
        this.overlay.el.removeEventListener('mousemove', this._mouseTracker);
        this._interval = clearInterval(this._interval);
        var pathelm = this.overlay.svg.lastChild;
        pathelm.setAttribute('d',  this.overlay.last_path + ' z');
        pathelm.setAttribute('fill', 'rgba(255,255,255,0.05)');
        pathelm.setAttribute('stroke', 'black');
        return this;
    }

});
