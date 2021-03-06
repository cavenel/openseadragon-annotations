(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("OpenSeadragon"), require("ClipperLib"));
	else if(typeof define === 'function' && define.amd)
		define(["OpenSeadragon", "ClipperLib"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("OpenSeadragon"), require("ClipperLib")) : factory(root["OpenSeadragon"], root["ClipperLib"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_27__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************************!*\
  !*** ./src/openseadragon-annotations.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _OpenSeadragon = __webpack_require__(/*! OpenSeadragon */ 1);
	
	var _OpenSeadragon2 = _interopRequireDefault(_OpenSeadragon);
	
	var _contextContext = __webpack_require__(/*! ./context/context */ 2);
	
	var _contextContext2 = _interopRequireDefault(_contextContext);
	
	var _annotationsAnnotations = __webpack_require__(/*! ./annotations/annotations */ 3);
	
	var _annotationsAnnotations2 = _interopRequireDefault(_annotationsAnnotations);
	
	var _stateState = __webpack_require__(/*! ./state/state */ 21);
	
	var _stateState2 = _interopRequireDefault(_stateState);
	
	var _stateFreehand = __webpack_require__(/*! ./state/freehand */ 22);
	
	var _stateFreehand2 = _interopRequireDefault(_stateFreehand);
	
	var _statePolygon = __webpack_require__(/*! ./state/polygon */ 23);
	
	var _statePolygon2 = _interopRequireDefault(_statePolygon);
	
	var _stateEdit = __webpack_require__(/*! ./state/edit */ 24);
	
	var _stateEdit2 = _interopRequireDefault(_stateEdit);
	
	var _controlsControls = __webpack_require__(/*! ./controls/controls */ 25);
	
	var _controlsControls2 = _interopRequireDefault(_controlsControls);
	
	var _overlayOverlay = __webpack_require__(/*! ./overlay/overlay */ 26);
	
	var _overlayOverlay2 = _interopRequireDefault(_overlayOverlay);
	
	exports['default'] = _OpenSeadragon2['default'].Viewer.prototype.initializeAnnotations = function () {
	    _contextContext2['default'].initialize().register('viewer', this).register('annotations', _annotationsAnnotations2['default']).register('controls', _controlsControls2['default']).register('overlay', _overlayOverlay2['default']).register('state', _stateState2['default']).register('freehand', _stateFreehand2['default']).register('polygon', _statePolygon2['default']).register('edit', _stateEdit2['default']).get('viewer', function (viewer) {
	        viewer.annotations = viewer.annotations || this.get('annotations');
	        viewer.addHandler('open', viewer.annotations.initialize.bind(viewer.annotations));
	    });
	    return this;
	};
	
	module.exports = exports['default'];

/***/ },
/* 1 */
/*!********************************!*\
  !*** external "OpenSeadragon" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/*!********************************!*\
  !*** ./src/context/context.js ***!
  \********************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = {
	
	    initialize: function initialize() {
	        this.maps = {};
	        return this;
	    },
	
	    register: function register(id, obj) {
	        this.maps[id] = obj;
	        return this;
	    },
	
	    get: function get(id, fn) {
	        var item = this.maps[id];
	        if (fn && typeof fn === 'function') {
	            fn.call(this, item);
	        }
	        return item;
	    }
	
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/*!****************************************!*\
  !*** ./src/annotations/annotations.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }
	
	var _contextInject = __webpack_require__(/*! ../context/inject */ 4);
	
	var _contextInject2 = _interopRequireDefault(_contextInject);
	
	var _imgFreehand_grouphoverPng = __webpack_require__(/*! ../../img/freehand_grouphover.png */ 5);
	
	var _imgFreehand_grouphoverPng2 = _interopRequireDefault(_imgFreehand_grouphoverPng);
	
	var _imgFreehand_hoverPng = __webpack_require__(/*! ../../img/freehand_hover.png */ 6);
	
	var _imgFreehand_hoverPng2 = _interopRequireDefault(_imgFreehand_hoverPng);
	
	var _imgFreehand_pressedPng = __webpack_require__(/*! ../../img/freehand_pressed.png */ 7);
	
	var _imgFreehand_pressedPng2 = _interopRequireDefault(_imgFreehand_pressedPng);
	
	var _imgFreehand_restPng = __webpack_require__(/*! ../../img/freehand_rest.png */ 8);
	
	var _imgFreehand_restPng2 = _interopRequireDefault(_imgFreehand_restPng);
	
	var _imgPolygon_grouphoverPng = __webpack_require__(/*! ../../img/polygon_grouphover.png */ 9);
	
	var _imgPolygon_grouphoverPng2 = _interopRequireDefault(_imgPolygon_grouphoverPng);
	
	var _imgPolygon_hoverPng = __webpack_require__(/*! ../../img/polygon_hover.png */ 10);
	
	var _imgPolygon_hoverPng2 = _interopRequireDefault(_imgPolygon_hoverPng);
	
	var _imgPolygon_pressedPng = __webpack_require__(/*! ../../img/polygon_pressed.png */ 11);
	
	var _imgPolygon_pressedPng2 = _interopRequireDefault(_imgPolygon_pressedPng);
	
	var _imgPolygon_restPng = __webpack_require__(/*! ../../img/polygon_rest.png */ 12);
	
	var _imgPolygon_restPng2 = _interopRequireDefault(_imgPolygon_restPng);
	
	var _imgMove_grouphoverPng = __webpack_require__(/*! ../../img/move_grouphover.png */ 13);
	
	var _imgMove_grouphoverPng2 = _interopRequireDefault(_imgMove_grouphoverPng);
	
	var _imgMove_hoverPng = __webpack_require__(/*! ../../img/move_hover.png */ 14);
	
	var _imgMove_hoverPng2 = _interopRequireDefault(_imgMove_hoverPng);
	
	var _imgMove_pressedPng = __webpack_require__(/*! ../../img/move_pressed.png */ 15);
	
	var _imgMove_pressedPng2 = _interopRequireDefault(_imgMove_pressedPng);
	
	var _imgMove_restPng = __webpack_require__(/*! ../../img/move_rest.png */ 16);
	
	var _imgMove_restPng2 = _interopRequireDefault(_imgMove_restPng);
	
	var _imgEdit_grouphoverPng = __webpack_require__(/*! ../../img/edit_grouphover.png */ 17);
	
	var _imgEdit_grouphoverPng2 = _interopRequireDefault(_imgEdit_grouphoverPng);
	
	var _imgEdit_hoverPng = __webpack_require__(/*! ../../img/edit_hover.png */ 18);
	
	var _imgEdit_hoverPng2 = _interopRequireDefault(_imgEdit_hoverPng);
	
	var _imgEdit_pressedPng = __webpack_require__(/*! ../../img/edit_pressed.png */ 19);
	
	var _imgEdit_pressedPng2 = _interopRequireDefault(_imgEdit_pressedPng);
	
	var _imgEdit_restPng = __webpack_require__(/*! ../../img/edit_rest.png */ 20);
	
	var _imgEdit_restPng2 = _interopRequireDefault(_imgEdit_restPng);
	
	exports['default'] = _createDecoratedObject([{
	    key: 'initialize',
	    decorators: [(0, _contextInject2['default'])('state', 'freehand', 'polygon', 'edit', 'controls', 'overlay')],
	    value: function initialize(state, freehand, polygon, edit, controls, overlay) {
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
	                name: 'freehand',
	                action: setState.bind(null, this, freehand),
	                srcRest: _imgFreehand_restPng2['default'],
	                srcGroup: _imgFreehand_grouphoverPng2['default'],
	                srcHover: _imgFreehand_hoverPng2['default'],
	                srcDown: _imgFreehand_pressedPng2['default']
	            }, {
	                name: 'polygon',
	                action: setState.bind(null, this, polygon),
	                srcRest: _imgPolygon_restPng2['default'],
	                srcGroup: _imgPolygon_grouphoverPng2['default'],
	                srcHover: _imgPolygon_hoverPng2['default'],
	                srcDown: _imgPolygon_pressedPng2['default']
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
	    }
	}, {
	    key: 'import',
	    value: function _import(data) {
	        this.overlay['import'](data);
	    }
	}, {
	    key: 'export',
	    value: function _export() {
	        return this.overlay['export']();
	    }
	}, {
	    key: 'reset',
	    value: function reset() {
	        return this.overlay.reset();
	    }
	}]);
	
	function setState(annotations, state) {
	    if (annotations.state) {
	        annotations.state.close();
	    }
	    annotations.state = Object.create(state).initialize();
	}
	module.exports = exports['default'];

/***/ },
/* 4 */
/*!*******************************!*\
  !*** ./src/context/inject.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _context = __webpack_require__(/*! ./context */ 2);
	
	var _context2 = _interopRequireDefault(_context);
	
	exports['default'] = function () {
	    for (var _len = arguments.length, dependencies = Array(_len), _key = 0; _key < _len; _key++) {
	        dependencies[_key] = arguments[_key];
	    }
	
	    return function (target, key, descriptor) {
	        return {
	            value: function initialize() {
	                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                    args[_key2] = arguments[_key2];
	                }
	
	                return descriptor.value.apply(this, dependencies.map(function (name) {
	                    return _context2['default'].get(name);
	                }).concat(args));
	            },
	            enumerable: true,
	            configurable: true,
	            writable: true
	        };
	    };
	};
	
	;
	module.exports = exports['default'];

/***/ },
/* 5 */
/*!*************************************!*\
  !*** ./img/freehand_grouphover.png ***!
  \*************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUEwM0FBMUQ5NUNBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRkRERTMzMkVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRkRERTMzMUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhBOTkxNUEwRTIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiLz4gPC9yZGY6RGVzY3Jp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"

/***/ },
/* 6 */
/*!********************************!*\
  !*** ./img/freehand_hover.png ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUEwM0FBMUQ5NUNBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMUZEMjkyNUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMUZEMjkyNEVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhBOTkxNUEwRTIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiLz4gPC9yZGY6RGVzY3Jp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"

/***/ },
/* 7 */
/*!**********************************!*\
  !*** ./img/freehand_pressed.png ***!
  \**********************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUEwM0FBMUQ5NUNBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRkRERTMzQUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRkRERTMzOUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhBOTkxNUEwRTIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7DRAumAAAJpElEQVR42qyYa2wc1RWAz7137rx2dsdee+04zsY4CcTEhYYQ2tAqDYKEVg2qilRVCAmEStX+qOiDlF9tmhZ+9EekVqqoSqWKSqURVCoIUgSk5NGIV6DkgUMg2LEdx7G9G6+979e8bs9sZ814vaRq6WiPZnd25s43532GCCHg02wEt9Zj4hMW9Q+HxfO8pb2u6yD9Dzdu3pyEpPlbBOeJ4HsTSliWJVoBmntf/E36LyF8oSgs2De/kxCML/7qbngvy3Ljv3w+L5oAYfmPMG0gpEC4Lzt37ozs3r07gU9NHcchhw8fzh07dqwUADgodiBOIJ5pmg2omZkZ0QpDPslnQiBhCOW+++7r2rNnz+eTyeSQW6+smRk/3ymCxRLJdTmX8rkPP/xwbP/+/aeOHj2axcP1kCxB+UCjo6NLQJs2bWoPEwJhAYT8wAMPdD388MO3xXV519nXX908PzHWW7iSibiWK4hH8BoPmCKRSHe83D24PjV40xff+2hq5vXHH3/8n0eOHJnHNSooNRQrAPK1J06dOtUA2rp168cwTQ9njLWCKK+88sott9y85Z6TLz6z7fKZM9cUZhaYlSu7xHYERxSJgPBdllD8cEa5GaFqf9wzr7/+0jW33vnms8+/8Pd9+/adxrXKAVQ9DHT8+HGxY8eOj33Gtu2m7cKmUfCptq9f2//NI3/49ZfTZ0dj1XTeVR3PXsW5G1NUT2MUGAYFocE6rkPreYvU8jOslMldM7ZwpXvn9jsV+thj+t69e98ORR80nb1cLotlPlMsFiEWizW14oOoTz755Kbbv7T9O28eeOLrcyc/0kWu6nYxyenhsmcw7smUCk59E+FF/hf8CIRyiUtqlTop1+vEikgy3Li+Htn2lef/+NSBvx04cOAcrl0ItFQPHLzh1EuaqdfrEDKPHy3K8PDwF04efGpX+syoQfNVu0+WnQRX3AiXBKMUKGuQECIRQTRGqC5RSUU0SYBaVYWWr0J5vmDVz12QLe3ori1btkwhzOWQI4fDX9AmTK1Wa371j/Gnn356W2Hyg93pkfN9sFh2V3Pu9SqyMFTUh8wZKEiEArrCiKlxqSfClcEYVzZ28pGbN8bUDaas9kUkzdSIslj2jAvj3UmpsuP+++/fjOtHfc0HD03DN25sGKrhhCavXbv2lvQHZzbX57JuFyVeF95blTkhXKKAQmSJEE0hzFQo79EpgjD9OlM6DHFt+qIFR9U+jfcZlMVkxiQq2ETG7cnN3Lhx48brcP0IiubfJ5RACW2Nat9fHnrooTWlmYmbKrMpU6vZXpfEIaJwynBdpktMisqMmwpTEqqkrManXxeV9A2G9FJKkRfmHahUPCjkXDjdl9SkCEdNIk3J8sy5lLGK1jai+VeHYKSmU9MWkEYUYQK6rpieGhSLJdGBhw2ZER6RKJU8TzhVV1gl13NLniBlj0VtIfcQ8uIE4z6IbQvgnECsg8HnyukaZUB993I9QclsUfSR0iBuycBMTZiGZlrLQcNMWEd68xcvRSujF0SXpIESj5KG1/tRg1ai6KxSh0KUfoNqaJ5nzrvyfHoBLMsDWaaQ6JXhq73EqkxYmLw4OidhTqUE1lRB6Df0RRRF6fADJABpmmlFbWpoB+uMweplheYXwC7kSX5h1PPjt/v2u1aA/O6tjDw3U8FodEFRGPT163DPkGZVJwuufaXiZQ6/LLyaDfV0mUTiJtFFTXVdV20BIZ8EQ0qlkuhiHolGBNExo/GYRwkmt/KFVwlPxIim9VKqr2WPHpyRp6cKGIkOqKoEyYEYPHitZWWPn3Ur4ynPms8LymqC6pigO7FcRNFUkgOY5KBNxW9ftbPZbLUnotQjCU51rCSqiWerEpEwTLVknGobeumeF1Py5PgiVKs2aBqHwfVx+Mkd3KqMTrt2dg6rVUFIelUI2fWVyhgaRTc5KRnMLhQKdrv7tsI0MmEqlZpfN8BziT61P1IFqneg5btVjfeYdWUgQX70XFo5O3IZFjJl7NBkNE0P/Pa7/VZ9atqlTtpTjZLwGDZT8UYq092yBSJCSDShwEXby+HDlsLJrtmE0TYw3vvvvz+RqrBJNdlB5Cgjcpxi8SNU7pS0Hz43r/7+p5sBKwJI6JurVmvwl71D4GUucVKeUyWa17lWjchR25AN25A0C69FVzMZMdZ3kH98lJ3Eh80EZaCZgdvC+H84J06cSI3O1Ubs1YM5zTQIjxIid6C5I0CmLi7A9nsPwhvP3AVbtg7AS78cBjc9AV5umkA9g4mrQBivEoTA61wimwIfCEgsbpBib3/uhROzk2imTKiVaPY3y2DC7WJ9fHx85J05/o66IQkqJj1JRU0oFnQnog3TfPvRk/DnHyewwk4DsdLAaB4krQbccAEBQMbgldHXuEFAl2Uwh9bAn97OvpvJZGZDvU09rJ12PtNoF1977bUzjN12bNu91w7fyIprHCePl5TgwPcMrNB4F4HrVC4BcYpYMCsgNHxQ+d8uIAIv8Bz03KIE0e4eGNeTl3/z7NunFxcXJ/DfUgDUbEmXm+nuu+8Oa8ZXYW1qaur0/r9mDs33DWcjPAZSBQGsLGpiHpMRilgEJpVQI3XgugtSVIBkYFTofuYkwD0OppGA4uBw9hv7Th9C81zCdfMBTLPrW9LMEkwQ+02/8U+qTk5OXhi9MHX0B0+kDs5033DF0HpAzuK1RVzLKgHxqhi2FlY4zInYNlDW6CiA2Azkqg6muRZSq264cscjpw5Ozy6MYZtyEdfNBTDVQDPeitAOYERASgJ7ViYmJt7F/5zdj2Smf/X9a7+2a0P8enX+MreKWXBIFUQjh+Lpfh/sMuBCBxmzvUiusV8eY+e/9Ys3TuSLlfOY1UfxzIVAM+HGyl2at5qdHjY+gGkaRkZGwv2vn7Z1v//Aet3V2dl56+Ca6Gd//uD6m7YkSbKHl0yoIZCHiY3hJaoOlyvawplL9uzPnjj33rmJ/GQIYjHQSjHkwE5bmKGhoUYPPDY2Fh5ReFDQ/HJv+FBYgrs0TfsM7vv933dsjXf1dHIltVirH3prfgEfqITrZFGmA4Bi0GYWQ+apt4AshxkYGFgaqGZnZ1snBB4AaYGmmoJNJun097iOG9zMCc1JlZBU240qoRH4Y5je3t5l42Yul2sdZ3nQfyghkYPjLDTeuoEvWC0DnNUm6y4b2pZgcOxcMZRjX9xuvG2C8dCk2TprOy3jrRueJNuBLINRVXUZSFha3jjQNsM/bSkpXsvwf1WIFTAYLUsD+NXeBVzllciK6h9+JXI1iBUvcP4PG/m0C/xLgAEAOUflkeaJ7LUAAAAASUVORK5CYII="

/***/ },
/* 8 */
/*!*******************************!*\
  !*** ./img/freehand_rest.png ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUEwM0FBMUQ5NUNBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRUI0OEJGRUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRUI0OEJGREVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhBOTkxNUEwRTIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiLz4gPC9yZGY6RGVzY3Jp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"

/***/ },
/* 9 */
/*!************************************!*\
  !*** ./img/polygon_grouphover.png ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 10 */
/*!*******************************!*\
  !*** ./img/polygon_hover.png ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 11 */
/*!*********************************!*\
  !*** ./img/polygon_pressed.png ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 12 */
/*!******************************!*\
  !*** ./img/polygon_rest.png ***!
  \******************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 13 */
/*!*********************************!*\
  !*** ./img/move_grouphover.png ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUEwM0FBMUQ5NUNBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMUZEMjkyOUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMUZEMjkyOEVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhBOTkxNUEwRTIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiLz4gPC9yZGY6RGVzY3Jp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"

/***/ },
/* 14 */
/*!****************************!*\
  !*** ./img/move_hover.png ***!
  \****************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUEwM0FBMUQ5NUNBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMUZEMjkyMUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMUZEMjkyMEVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhBOTkxNUEwRTIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiLz4gPC9yZGY6RGVzY3Jp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"

/***/ },
/* 15 */
/*!******************************!*\
  !*** ./img/move_pressed.png ***!
  \******************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUEwM0FBMUQ5NUNBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRkRERTMzNkVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRkRERTMzNUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhBOTkxNUEwRTIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiLz4gPC9yZGY6RGVzY3Jp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"

/***/ },
/* 16 */
/*!***************************!*\
  !*** ./img/move_rest.png ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUEwM0FBMUQ5NUNBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRUI0OEJGQUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRUI0OEJGOUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhBOTkxNUEwRTIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiLz4gPC9yZGY6RGVzY3Jp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"

/***/ },
/* 17 */
/*!*********************************!*\
  !*** ./img/edit_grouphover.png ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUEwM0FBMUQ5NUNBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRkRERTMzMkVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRkRERTMzMUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhBOTkxNUEwRTIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiLz4gPC9yZGY6RGVzY3Jp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"

/***/ },
/* 18 */
/*!****************************!*\
  !*** ./img/edit_hover.png ***!
  \****************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUEwM0FBMUQ5NUNBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMUZEMjkyNUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMUZEMjkyNEVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhBOTkxNUEwRTIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiLz4gPC9yZGY6RGVzY3Jp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"

/***/ },
/* 19 */
/*!******************************!*\
  !*** ./img/edit_pressed.png ***!
  \******************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUEwM0FBMUQ5NUNBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRkRERTMzQUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRkRERTMzOUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhBOTkxNUEwRTIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiLz4gPC9yZGY6RGVzY3Jp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"

/***/ },
/* 20 */
/*!***************************!*\
  !*** ./img/edit_rest.png ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUEwM0FBMUQ5NUNBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRUI0OEJGRUVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRUI0OEJGREVGRDYxMUUzQTExNUI3MjM4QzI2QjRFRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhBOTkxNUEwRTIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFBMDNBQTFEOTVDQTUiLz4gPC9yZGY6RGVzY3Jp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"

/***/ },
/* 21 */
/*!****************************!*\
  !*** ./src/state/state.js ***!
  \****************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	
	    initialize: function initialize() {
	        return this;
	    },
	
	    close: function close() {},
	
	    handleMouseDown: function handleMouseDown() {
	        return this;
	    },
	
	    handleMouseUp: function handleMouseUp() {
	        return this;
	    }
	
	};
	module.exports = exports["default"];

/***/ },
/* 22 */
/*!*******************************!*\
  !*** ./src/state/freehand.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }
	
	var _OpenSeadragon = __webpack_require__(/*! OpenSeadragon */ 1);
	
	var _OpenSeadragon2 = _interopRequireDefault(_OpenSeadragon);
	
	var _state = __webpack_require__(/*! ./state */ 21);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _contextInject = __webpack_require__(/*! ../context/inject */ 4);
	
	var _contextInject2 = _interopRequireDefault(_contextInject);
	
	exports['default'] = _OpenSeadragon2['default'].extend(Object.create(_state2['default']), _createDecoratedObject([{
	    key: 'initialize',
	    decorators: [(0, _contextInject2['default'])('overlay')],
	    value: function initialize(overlay) {
	        function get_coord(e) {
	            var xpos = e.offsetX == undefined ? e.layerX : e.offsetX;
	            var ypos = e.offsetY == undefined ? e.layerY : e.offsetY;
	            return { x: xpos, y: ypos };
	        };
	        this.overlay = overlay;
	        this.overlay.svg.style.cursor = "url('./img/pen-cursor.cur'), default";
	        this._mouseTracker = (function (e) {
	            var x = e.offsetX == undefined ? e.layerX : e.offsetX;
	            var y = e.offsetY == undefined ? e.layerY : e.offsetY;
	            //if (x>100 || y>100) {
	            this.x = x / this.overlay.el.clientWidth * 100;
	            this.y = y / this.overlay.el.clientHeight * 100;
	            //}
	        }).bind(this);
	        this._onMouseDown = (function (e) {
	            var x = e.offsetX == undefined ? e.layerX : e.offsetX;
	            var y = e.offsetY == undefined ? e.layerY : e.offsetY;
	            //if (x>100 || y>100) {
	            this.x = x / this.overlay.el.clientWidth * 100;
	            this.y = y / this.overlay.el.clientHeight * 100;
	            //}
	            this.handleMouseDown();
	            document.addEventListener("mouseup", this._onMouseUp, false);
	            e.stopPropagation();
	        }).bind(this);
	        this._onMouseUp = (function () {
	            if (this.overlay.closed_curve) {
	                this.handleMouseUp();
	            } else {
	                this.overlay.drawing_up = true;
	            };
	            document.removeEventListener("mouseup", this._onMouseUp, false);
	        }).bind(this);
	        if (0) {
	            //(detectIE()) {
	            window.viewer.setMouseNavEnabled(false);
	            window.viewer.element.addEventListener("mousedown", this._onMouseDown, false);
	        } else {
	            this.overlay.addHandler('mousedown', this._onMouseDown);
	        };
	        return this;
	    }
	}, {
	    key: 'close',
	    value: function close() {
	        this.overlay.svg.style.cursor = "default";
	        if (0) {
	            //(detectIE()) {
	            window.viewer.element.removeEventListener("mousedown", this._onMouseDown, false);
	        } else {
	            this.overlay.removeHandler('mousedown', this._onMouseDown);
	        };
	    }
	}, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown() {
	        if (!this._interval) {
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
	    }
	}, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp() {
	        this.overlay.el.removeEventListener('mousemove', this._mouseTracker);
	        this._interval = clearInterval(this._interval);
	        var pathelm = this.overlay.svg.lastChild;
	        pathelm.setAttribute('d', this.overlay.last_path + ' z');
	        pathelm.setAttribute('fill', 'rgba(255,255,255,0.05)');
	        pathelm.setAttribute('stroke', 'black');
	        return this;
	    }
	}]));
	module.exports = exports['default'];

/***/ },
/* 23 */
/*!******************************!*\
  !*** ./src/state/polygon.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }
	
	var _OpenSeadragon = __webpack_require__(/*! OpenSeadragon */ 1);
	
	var _OpenSeadragon2 = _interopRequireDefault(_OpenSeadragon);
	
	var _state = __webpack_require__(/*! ./state */ 21);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _contextInject = __webpack_require__(/*! ../context/inject */ 4);
	
	var _contextInject2 = _interopRequireDefault(_contextInject);
	
	exports['default'] = _OpenSeadragon2['default'].extend(Object.create(_state2['default']), _createDecoratedObject([{
	    key: 'initialize',
	    decorators: [(0, _contextInject2['default'])('overlay')],
	    value: function initialize(overlay) {
	        function get_coord(e) {
	            if (e.offsetX == undefined) {
	                // this works for Firefox
	                var xpos = e.pageX - this.overlay.el.offset().left;
	                var ypos = e.pageY - this.overlay.el.offset().top;
	            } else {
	                // works in Google Chrome
	                var xpos = e.offsetX;
	                var ypos = e.offsetY;
	            }
	            return { x: xpos, y: ypos };
	        };
	        this.overlay = overlay;
	        this.overlay.svg.style.cursor = "url('./img/pen-cursor.cur'), default";
	        this._mouseTracker = (function (e) {
	            var coord = get_coord(e);
	            this.x = coord.x / this.overlay.el.clientWidth * 100;
	            this.y = coord.y / this.overlay.el.clientHeight * 100;
	        }).bind(this);
	        this._onMouseDown = (function (e) {
	            var coord = get_coord(e);
	            this.x = coord.x / this.overlay.el.clientWidth * 100;
	            this.y = coord.y / this.overlay.el.clientHeight * 100;
	            this.handleMouseDown();
	            this._onMouseUp(e);
	            e.stopPropagation();
	        }).bind(this);
	        this._onMouseUp = (function () {
	            if (this.overlay.closed_curve) {
	                this.handleMouseUp();
	            } else {
	                this.overlay.drawing_up = true;
	            };
	            document.removeEventListener("mouseup", this._onMouseUp, false);
	        }).bind(this);
	        if (0) {
	            //(detectIE()) {
	            window.viewer.setMouseNavEnabled(false);
	            window.viewer.element.addEventListener("mousedown", this._onMouseDown, false);
	        } else {
	            this.overlay.addHandler('mousedown', this._onMouseDown);
	        };
	        return this;
	    }
	}, {
	    key: 'close',
	    value: function close() {
	        this.overlay.svg.style.cursor = "default";
	        if (this._interval) {
	            this.overlay.drawing_up = false;
	            this.handleMouseUp();
	            document.removeEventListener("mouseup", this._onMouseUp, false);
	        }
	        if (0) {
	            //(detectIE()) {
	            window.viewer.element.removeEventListener("mousedown", this._onMouseDown, false);
	        } else {
	            this.overlay.removeHandler('mousedown', this._onMouseDown);
	        };
	    }
	}, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown() {
	        if (this.overlay.drawing_up) {
	            this.overlay.drawing_up = false;
	            this.overlay.updatePath(this.x, this.y);
	        } else {
	            this.overlay.first_x = this.x;
	            this.overlay.first_y = this.y;
	            this.overlay.startPath(this.x, this.y);
	            this.overlay.el.addEventListener('mousemove', this._mouseTracker, false);
	            this.overlay.updatePath(this.x, this.y);
	            this._interval = window.setInterval((function () {
	                this.overlay.updatePath(this.x, this.y);
	            }).bind(this), 25);
	        };
	    }
	}, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp() {
	        this.overlay.el.removeEventListener('mousemove', this._mouseTracker);
	        this._interval = clearInterval(this._interval);
	        var pathelm = this.overlay.svg.lastChild;
	        pathelm.setAttribute('d', this.overlay.last_path + ' z');
	        pathelm.setAttribute('fill', 'rgba(255,255,255,0.01)');
	        pathelm.setAttribute('stroke', 'black');
	        return this;
	    }
	}]));
	module.exports = exports['default'];

/***/ },
/* 24 */
/*!***************************!*\
  !*** ./src/state/edit.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }
	
	var _OpenSeadragon = __webpack_require__(/*! OpenSeadragon */ 1);
	
	var _OpenSeadragon2 = _interopRequireDefault(_OpenSeadragon);
	
	var _state = __webpack_require__(/*! ./state */ 21);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _contextInject = __webpack_require__(/*! ../context/inject */ 4);
	
	var _contextInject2 = _interopRequireDefault(_contextInject);
	
	exports['default'] = _OpenSeadragon2['default'].extend(Object.create(_state2['default']), _createDecoratedObject([{
	    key: 'initialize',
	    decorators: [(0, _contextInject2['default'])('overlay')],
	    value: function initialize(overlay) {
	        this.overlay = overlay;
	        var mycursor = document.getElementById('mycursor');
	        if (!mycursor) {
	            mycursor = document.createElement('div');
	            mycursor.id = 'mycursor'; // No setAttribute required
	            //mycursor.className = 'someClass' // No setAttribute required, note it's "className" to avoid conflict with JavaScript reserved word
	            document.body.appendChild(mycursor);
	        }
	        this._mouseenter = (function () {
	            if (this.overlay.diff) {
	                document.getElementById("mycursor").style.backgroundimage = "url(\"/minus.png\")";
	            } else {
	                document.getElementById("mycursor").style.backgroundimage = "url(\"/plus.png\");";
	            };
	            document.getElementById("mycursor").style.display = "none";
	        }).bind(this);
	        this._mouseleave = function () {
	            document.getElementById("mycursor").style.display = "none";
	        };
	        this._mouseTracker = (function (e) {
	            var x = e.offsetX == undefined ? e.layerX : e.offsetX;
	            var y = e.offsetY == undefined ? e.layerY : e.offsetY;
	            if (x > 100 || y > 100) {
	                this.x = x / this.overlay.el.clientWidth * 100;
	                this.y = y / this.overlay.el.clientHeight * 100;
	            };
	            document.getElementById("mycursor").style.left = e.clientX - 0;
	            document.getElementById("mycursor").style.top = e.clientY - 0;
	        }).bind(this);
	        this._onMouseDown = (function (e) {
	            this.handleMouseDown(e.offsetX == undefined ? e.layerX : e.offsetX, e.offsetY == undefined ? e.layerY : e.offsetY);
	            document.addEventListener("mouseup", this._onMouseUp, false);
	            e.stopPropagation();
	        }).bind(this);
	        this._onMouseUp = (function () {
	            this.handleMouseUp();
	            document.removeEventListener("mouseup", this._onMouseUp, false);
	            //this.close();
	        }).bind(this);
	        if (0) {
	            //if (detectIE()) {
	            window.viewer.setMouseNavEnabled(false);
	            window.viewer.element.addEventListener("mousedown", this._onMouseDown, false);
	        } else {
	            this.overlay.addHandler('mousedown', this._onMouseDown);
	        };
	        this.overlay.el.addEventListener('mousemove', this._mouseTracker, false);
	        this.overlay.el.addEventListener('mouseenter', this._mouseenter, false);
	        this.overlay.el.addEventListener('mouseleave', this._mouseleave, false);
	        return this;
	    }
	}, {
	    key: 'close',
	    value: function close() {
	        this.overlay.svg.style.cursor = "default";
	        this.overlay.el.removeEventListener('mousemove', this._mouseTracker);
	        this.overlay.el.removeEventListener('mouseenter', this._mouseenter, false);
	        this.overlay.el.removeEventListener('mouseleave', this._mouseleave, false);
	        document.getElementById("mycursor").style.display = "none";
	        if (0) {
	            //if (detectIE()) {
	            window.viewer.element.removeEventListener("mousedown", this._onMouseDown, false);
	        } else {
	            this.overlay.removeHandler('mousedown', this._onMouseDown);
	        }
	        document.removeEventListener("keydown", this._onMouseUp, false);
	    }
	}, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown(x, y) {
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
	    }
	}, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp() {
	        this._interval = clearInterval(this._interval);
	        return this;
	    }
	}]));
	module.exports = exports['default'];

/***/ },
/* 25 */
/*!**********************************!*\
  !*** ./src/controls/controls.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }
	
	var _OpenSeadragon = __webpack_require__(/*! OpenSeadragon */ 1);
	
	var _OpenSeadragon2 = _interopRequireDefault(_OpenSeadragon);
	
	var _contextInject = __webpack_require__(/*! ../context/inject */ 4);
	
	var _contextInject2 = _interopRequireDefault(_contextInject);
	
	exports['default'] = _OpenSeadragon2['default'].extend(new _OpenSeadragon2['default'].EventSource(), _createDecoratedObject([{
	    key: 'initialize',
	    decorators: [(0, _contextInject2['default'])('viewer')],
	    value: function initialize(viewer, options) {
	        var options = options || {};
	        this.list = {};
	        this.viewer = viewer;
	        if (options.controls) {
	            options.controls.forEach(this.add.bind(this));
	        }
	        return this;
	    }
	}, {
	    key: 'add',
	    value: function add(options) {
	        this.set(options).addHandler('click', options.action);
	        this.get(options.name).addHandler('click', (function () {
	            for (var button in this.list) {
	                this.list[button].imgDown.style.visibility = button === options.name ? 'visible' : 'hidden';
	            }
	        }).bind(this));
	        this.viewer.addControl(this.get(options.name).element, {
	            anchor: _OpenSeadragon2['default'].ControlAnchor.BOTTOM_LEFT
	        });
	        return this;
	    }
	}, {
	    key: 'activate',
	    value: function activate(name) {
	        this.list[name].imgDown.style.visibility = 'visible';
	        return this;
	    }
	}, {
	    key: 'set',
	    value: function set(options) {
	        this.list[options.name] = new _OpenSeadragon2['default'].Button({
	            tooltip: options.name[0].toUpperCase() + options.name.substr(1),
	            srcRest: options.srcRest,
	            srcGroup: options.srcGroup,
	            srcHover: options.srcHover,
	            srcDown: options.srcDown,
	            onClick: this.raiseEvent.bind(this, 'click', name)
	        });
	        return this.list[options.name];
	    }
	}, {
	    key: 'get',
	    value: function get(name) {
	        return this.list[name];
	    }
	}, {
	    key: 'all',
	    value: function all() {
	        var controls = [];
	        for (var name in this.list) {
	            controls.push(this.list[name]);
	        }
	        return controls;
	    }
	}]));
	module.exports = exports['default'];

/***/ },
/* 26 */
/*!********************************!*\
  !*** ./src/overlay/overlay.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }
	
	var _OpenSeadragon = __webpack_require__(/*! OpenSeadragon */ 1);
	
	var _OpenSeadragon2 = _interopRequireDefault(_OpenSeadragon);
	
	var _ClipperLib = __webpack_require__(/*! ClipperLib */ 27);
	
	var _ClipperLib2 = _interopRequireDefault(_ClipperLib);
	
	var _contextInject = __webpack_require__(/*! ../context/inject */ 4);
	
	var _contextInject2 = _interopRequireDefault(_contextInject);
	
	exports['default'] = _OpenSeadragon2['default'].extend(new _OpenSeadragon2['default'].EventSource(), _createDecoratedObject([{
	    key: 'initialize',
	    decorators: [(0, _contextInject2['default'])('viewer')],
	    value: function initialize(viewer) {
	        this.viewer = viewer;
	        this.el = createOverlay();
	        this.svg = appendSVG(this.el);
	        this.viewer.addHandler('animation', function (target) {
	            if (target.eventSource.viewport) {
	                var paths = document.getElementsByClassName("osd-annotations_path");
	                for (var i = 0; i < paths.length; ++i) {
	                    var item = paths[i];
	                    item.setAttribute('stroke-width', 0.05 / (target.eventSource.viewport.getZoom(true) / target.eventSource.viewport.getMaxZoom()));
	                };
	            }
	        });
	        this.el.addEventListener('mousedown', this.raiseEvent.bind(this, 'mousedown'), false);
	        this.el.addEventListener('mouseup', this.raiseEvent.bind(this, 'mouseup'), false);
	        this.viewer.addOverlay(this.el, createOpenSeadragonRect(this.viewer));
	        return this;
	    }
	}, {
	    key: 'export',
	    value: function _export() {
	        var serializer = new XMLSerializer();
	        var data = serializer.serializeToString(this.svg);
	        return data;
	    }
	}, {
	    key: 'import',
	    value: function _import(data) {
	        var svg = document.importNode(data, true); // surprisingly optional in these browsers
	        this.el.innerHTML = '';
	        this.el.appendChild(svg);
	        this.svg = this.el.firstChild;
	    }
	}, {
	    key: 'reset',
	    value: function reset() {
	        this.el.innerHTML = '';
	        this.svg = appendSVG(this.el);
	    }
	}, {
	    key: 'startPath',
	    value: function startPath(x, y) {
	        var path = createPath(x, y);
	        //path.addEventListener("click", click_path, false);
	        this.svg.appendChild(path);
	    }
	}, {
	    key: 'updatePath',
	    value: function updatePath(x, y) {
	        if (x == this.last_x && y == this.last_y) return;
	        var dist = (x - this.first_x) * (x - this.first_x) + (y - this.first_y) * (y - this.first_y);
	        var path = this.svg.lastChild;
	        if (Math.sqrt(dist) * this.viewer.viewport.getZoom(true) / this.viewer.viewport.getMaxZoom() < Math.sqrt(0.2) && path.getTotalLength() * this.viewer.viewport.getZoom(true) / this.viewer.viewport.getMaxZoom() > Math.sqrt(0.5)) {
	            this.closed_curve = true;
	            path.setAttribute('stroke', 'red');
	        } else {
	            this.closed_curve = false;
	            path.setAttribute('stroke', 'black');
	        }
	        path.setAttribute('fill', 'rgba(255,255,255,0.5)');
	        if (this.drawing_up) {
	            if (this.last_path == undefined) this.last_path = path.getAttribute('d');
	            path.setAttribute('d', this.last_path + ' L' + x + ' ' + y);
	        } else {
	            path.setAttribute('d', path.getAttribute('d') + ' L' + x + ' ' + y);
	            this.last_path = path.getAttribute('d');
	            this.last_x = x;
	            this.last_y = y;
	        }
	    }
	}, {
	    key: 'editPath',
	    value: function editPath(x, y) {
	        if (x == this.last_x && y == this.last_y) return;
	        function paths2string(paths, scale) {
	            var svgpath = "",
	                i,
	                j;
	            for (i = 0; i < paths.length; i++) {
	                for (j = 0; j < paths[i].length; j++) {
	                    if (!j) svgpath += "M";else svgpath += "L";
	                    svgpath += paths[i][j].X / scale + " " + paths[i][j].Y / scale;
	                }
	                svgpath += " Z";
	            }
	            if (svgpath == "") svgpath = "M0,0";
	            return svgpath;
	        }
	        var path = this.svg.lastChild;
	        var commands = path.getAttribute('d').trim().split("M");
	        commands.shift();
	        var pointArrays = commands.map(function (l) {
	            l = l.trim();
	            var commands_ = l.split("L");
	            return commands_.map(function (d) {
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
	        var radius = this.viewer.viewport.viewerElementToViewportCoordinates(new _OpenSeadragon2['default'].Point(30 / 5., 30 / 5.));
	        var radius_ = this.viewer.viewport.viewerElementToViewportCoordinates(new _OpenSeadragon2['default'].Point(0, 0));
	        radius.x = scale * (radius.x - radius_.x);
	        radius.y = scale * (radius.y - radius_.y) * this.viewer.source.aspectRatio;
	        var steps = 20;
	        for (var i = 0; i < steps; i++) {
	            clip_paths.push({ X: x + radius.x * Math.cos(2 * Math.PI * i / steps), Y: y + radius.y * Math.sin(2 * Math.PI * i / steps) });
	        }
	        var clip_paths = [clip_paths, []];
	        _ClipperLib2['default'].JS.ScaleUpPaths(subj_paths, scale);
	        _ClipperLib2['default'].JS.ScaleUpPaths(clip_paths, scale);
	        var cpr = new _ClipperLib2['default'].Clipper();
	        cpr.AddPaths(subj_paths, _ClipperLib2['default'].PolyType.ptSubject, true);
	        cpr.AddPaths(clip_paths, _ClipperLib2['default'].PolyType.ptClip, true);
	        var solution_paths = new _ClipperLib2['default'].Paths();
	        if (this.diff) {
	            cpr.Execute(_ClipperLib2['default'].ClipType.ctDifference, solution_paths);
	        } else {
	            cpr.Execute(_ClipperLib2['default'].ClipType.ctUnion, solution_paths);
	        }
	        if (this.last_x != null) {
	            var a = radius.x;
	            var b = radius.y;
	            // m is the slope from x,y to last_x, last_y
	            var m = (y - this.last_y) / (x - this.last_x);
	            // p_x, p_y and -p_x, -p_y are coordinates of the intersections between ellipse and tangents of slope m.
	            if (m == Infinity || m == -Infinity) {
	                var p_x = a;
	                var p_y = 0;
	            } else {
	                var p_x = -a * a * m / Math.sqrt(a * a * m * m + b * b);
	                var p_y = b * b / Math.sqrt(a * a * m * m + b * b);
	            };
	            var rect_paths = [];
	            rect_paths.push({ X: x + p_x, Y: y + p_y });
	            rect_paths.push({ X: x - p_x, Y: y - p_y });
	            rect_paths.push({ X: this.last_x - p_x, Y: this.last_y - p_y });
	            rect_paths.push({ X: this.last_x + p_x, Y: this.last_y + p_y });
	            var rect_paths = [rect_paths, []];
	            var cpr = new _ClipperLib2['default'].Clipper();
	            _ClipperLib2['default'].JS.ScaleUpPaths(rect_paths, scale);
	            cpr.AddPaths(solution_paths, _ClipperLib2['default'].PolyType.ptSubject, true);
	            cpr.AddPaths(rect_paths, _ClipperLib2['default'].PolyType.ptClip, true);
	            if (this.diff) {
	                cpr.Execute(_ClipperLib2['default'].ClipType.ctDifference, solution_paths);
	            } else {
	                cpr.Execute(_ClipperLib2['default'].ClipType.ctUnion, solution_paths);
	            }
	        }
	        this.last_x = x;
	        this.last_y = y;
	        path.setAttribute('d', paths2string(solution_paths, scale));
	    }
	}]));
	
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
	    path.setAttribute('pointer-events', "none");
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
	    return new _OpenSeadragon2['default'].Rect(0, 0, width, height);
	}
	module.exports = exports['default'];

/***/ },
/* 27 */
/*!*****************************!*\
  !*** external "ClipperLib" ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=openseadragon-annotations.js.map