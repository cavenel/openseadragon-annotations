import OpenSeadragon from 'OpenSeadragon';
import state from './state';
import inject from '../context/inject';

export default OpenSeadragon.extend(Object.create(state), {

    @inject('overlay')
    initialize(overlay) {
        this.overlay = overlay;
        var mycursor = document.getElementById('mycursor');
        if (!mycursor) {
            mycursor = document.createElement('div');
            mycursor.id = 'mycursor';             // No setAttribute required
            //mycursor.className = 'someClass' // No setAttribute required, note it's "className" to avoid conflict with JavaScript reserved word
            document.body.appendChild(mycursor);
        }
        this._mouseenter = function () {
            if (this.overlay.diff) {
                document.getElementById("mycursor").style.backgroundimage = "url(\"/minus.png\")";
            } else {
                document.getElementById("mycursor").style.backgroundimage = "url(\"/plus.png\");";
            };
            document.getElementById("mycursor").style.display = "none";
        }.bind(this);
        this._mouseleave = function () {
            document.getElementById("mycursor").style.display = "none";
        };
        this._mouseTracker = function (e) {
            var x = e.offsetX==undefined?e.layerX:e.offsetX;
            var y = e.offsetY==undefined?e.layerY:e.offsetY;
            if (x>100 || y>100) {
                this.x = x / this.overlay.el.clientWidth * 100;
                this.y = y / this.overlay.el.clientHeight * 100;
            };
            document.getElementById("mycursor").style.left = e.clientX - 0;
            document.getElementById("mycursor").style.top = e.clientY - 0;
        }.bind(this);
        this._onMouseDown = function (e) {
            this.handleMouseDown(e.offsetX==undefined?e.layerX:e.offsetX, e.offsetY==undefined?e.layerY:e.offsetY);
            document.addEventListener("mouseup", this._onMouseUp, false);
            e.stopPropagation();
        }.bind(this);
        this._onMouseUp = function () {
            this.handleMouseUp();
            document.removeEventListener("mouseup", this._onMouseUp, false);
            //this.close();
        }.bind(this);
        if (0) { //if (detectIE()) {
            window.viewer.setMouseNavEnabled(false);
            window.viewer.element.addEventListener("mousedown", this._onMouseDown, false);
        } else {
            this.overlay.addHandler('mousedown', this._onMouseDown);
        };
        this.overlay.el.addEventListener('mousemove', this._mouseTracker, false);
        this.overlay.el.addEventListener('mouseenter', this._mouseenter, false);
        this.overlay.el.addEventListener('mouseleave', this._mouseleave, false);
        return this;
    },

    close() {
        this.overlay.svg.style.cursor = "default";
        this.overlay.el.removeEventListener('mousemove', this._mouseTracker);
        this.overlay.el.removeEventListener('mouseenter', this._mouseenter, false);
        this.overlay.el.removeEventListener('mouseleave', this._mouseleave, false);
        document.getElementById("mycursor").style.display = "none";
        if (0) { //if (detectIE()) {
            window.viewer.element.removeEventListener("mousedown", this._onMouseDown, false);
        } else {
            this.overlay.removeHandler('mousedown', this._onMouseDown);
        }
        document.removeEventListener("keydown", this._onMouseUp, false);
    },

    handleMouseDown(x, y) {
        if (!this._interval) {
            this.x = x / this.overlay.el.clientWidth * 100;
            this.y = y / this.overlay.el.clientHeight * 100;
            this.overlay.last_x = null;
            this.overlay.last_y = null;
            this.overlay.editPath(this.x, this.y);
            this._interval = window.setInterval((function () {
                this.overlay.editPath(this.x, this.y);
            }).bind(this), 25);
        }
        return this;
    },

    handleMouseUp() {
        this._interval = clearInterval(this._interval);
        return this;
    }

});
