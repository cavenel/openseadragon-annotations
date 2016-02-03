import inject from '../context/inject';

import drawGroupHover from '../../img/draw_grouphover.png';
import drawHover from '../../img/draw_hover.png';
import drawPressed from '../../img/draw_pressed.png';
import drawRest from '../../img/draw_rest.png';

import moveGroupHover from '../../img/move_grouphover.png';
import moveHover from '../../img/move_hover.png';
import movePressed from '../../img/move_pressed.png';
import moveRest from '../../img/move_rest.png';

import editGroupHover from '../../img/edit_grouphover.png';
import editHover from '../../img/edit_hover.png';
import editPressed from '../../img/edit_pressed.png';
import editRest from '../../img/edit_rest.png';

export default {

    @inject('state', 'draw',  'edit', 'controls', 'overlay')
    initialize(state, draw, edit, controls, overlay) {
        this.overlay = overlay.initialize();
        this.state = Object.create(state).initialize();
        this.controls = controls.initialize({
            controls: [{
                name: 'move',
                action: setState.bind(null, this, state),
                srcRest: _imgMove_restPng2['default'],
                srcGroup: _imgMove_grouphoverPng2['default'],
                srcHover: _imgMove_hoverPng2['default'],
                srcDown: _imgMove_pressedPng2['default']
            }, {
                name: 'draw',
                action: setState.bind(null, this, draw),
                srcRest: _imgDraw_restPng2['default'],
                srcGroup: _imgDraw_grouphoverPng2['default'],
                srcHover: _imgDraw_hoverPng2['default'],
                srcDown: _imgDraw_pressedPng2['default']
            }, {
                name: 'edit',
                action: setState.bind(null, this, edit),
                srcRest: _imgEdit_restPng2['default'],
                srcGroup: _imgEdit_grouphoverPng2['default'],
                srcHover: _imgEdit_hoverPng2['default'],
                srcDown: _imgEdit_pressedPng2['default']
            }]
        }).activate('move');
        return this;
    },

    import(data) {
        this.overlay.import(data);
    },

    export() {
        return this.overlay.export();
    },

    reset() {
        return this.overlay.reset();
    }


};

function setState(annotations, state) {
    if (annotations.state) { annotations.state.close(); }
    annotations.state = Object.create(state).initialize();
}
