import inject from '../context/inject';

import freehandGroupHover from '../../img/freehand_grouphover.png';
import freehandHover from '../../img/freehand_hover.png';
import freehandPressed from '../../img/freehand_pressed.png';
import freehandRest from '../../img/freehand_rest.png';

import polygonGroupHover from '../../img/polygon_grouphover.png';
import polygonHover from '../../img/polygon_hover.png';
import polygonPressed from '../../img/polygon_pressed.png';
import polygonRest from '../../img/polygon_rest.png';

import moveGroupHover from '../../img/move_grouphover.png';
import moveHover from '../../img/move_hover.png';
import movePressed from '../../img/move_pressed.png';
import moveRest from '../../img/move_rest.png';

import editGroupHover from '../../img/edit_grouphover.png';
import editHover from '../../img/edit_hover.png';
import editPressed from '../../img/edit_pressed.png';
import editRest from '../../img/edit_rest.png';

export default {

    @inject('state', 'freehand', 'polygon', 'edit', 'controls', 'overlay')
    initialize(state, freehand, polygon, edit, controls, overlay) {
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
                name: 'freehand',
                action: setState.bind(null, this, freehand),
                srcRest: freehandRest,
                srcGroup: freehandGroupHover,
                srcHover: freehandHover,
                srcDown: freehandPressed
            }, {
                name: 'polygon',
                action: setState.bind(null, this, polygon),
                srcRest: polygonRest,
                srcGroup: polygonGroupHover,
                srcHover: polygonHover,
                srcDown: polygonPressed
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
