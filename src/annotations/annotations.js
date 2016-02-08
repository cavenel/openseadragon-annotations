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
                srcRest: moveRest,
                srcGroup: moveGroupHover,
                srcHover: moveHover,
                srcDown: movePressed
            }, {
                name: 'draw',
                action: setState.bind(null, this, draw),
                srcRest: drawRest,
                srcGroup: drawGroupHover,
                srcHover: drawHover,
                srcDown: drawPressed
            }, {
                name: 'edit',
                action: setState.bind(null, this, edit),
                srcRest: editRest,
                srcGroup: editGroupHover,
                srcHover: editHover,
                srcDown: editPressed
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
