(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Hello World!', _utils2.default);

if (!_utils2.default.isDeviceMobile()) {
  console.log('not mobile');
} else {
  console.log('mobile device');
}

},{"./utils":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _arguments = arguments;
var utils = {
  debounce: function debounce(func, wait, immediate) {
    var timeout = void 0;
    return function () {
      var context = undefined,
          args = _arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },

  isDeviceMobile: function isDeviceMobile() {
    var isMobile = {
      Android: function Android() {
        return navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/mobile|Mobile/i);
      },
      BlackBerry: function BlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/BB10; Touch/);
      },
      iOS: function iOS() {
        return navigator.userAgent.match(/iPhone|iPod/i);
      },
      Opera: function Opera() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function Windows() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/webOS/i);
      },
      any: function any() {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
      }
    };

    return isMobile.any();
  }
};

exports.default = utils;

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
