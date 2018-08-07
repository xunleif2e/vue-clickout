(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueClickOut"] = factory();
	else
		root["vueClickOut"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickout", function() { return clickout; });
/**
  * vue-clickout
  * (c) 2018 shijianan
  * @license MIT
  */

var VueClickOut = {};

function isServer(vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer;
}

var clickout = {
  bind: function bind(el, _ref, vnode) {
    var value = _ref.value;

    function handler(e) {
      var isInside = el.contains(e.target);
      if (value && value.length) {
        // 判断点击区域是否是目标区域
        for (var i = 0; i < value.length; i++) {
          var inside = vnode.context.$refs[value[i]];
          if (!inside) {
            break;
          }
          if (inside.contains(e.target)) {
            // inside
            isInside = true;
            break;
          }
        }
      }
      if (!isInside) {
        var event = new Event('clickout');
        el.dispatchEvent(event);
      }
    }
    el.data = {
      handler: handler
    };
    !isServer(vnode) && document.addEventListener('click', handler);
  },
  unbind: function unbind(el, binding, vnode) {
    !isServer(vnode) && document.removeEventListener('click', el.data.handler);
    delete el.data;
  }
};
/**
 * Plugin API
 */
VueClickOut.install = function (Vue, options) {
  Vue.directive('clickout', clickout);
};

/**
 * 浏览器环境自动安装
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueClickOut);
}

/* harmony default export */ __webpack_exports__["default"] = (VueClickOut);


/***/ })
/******/ ]);
});