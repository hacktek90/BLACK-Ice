function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { c as _c } from "react/compiler-runtime";
import React, { useState, useEffect } from 'react';

// --- 1. TYPES & INTERFACES ---

// Interface for the Landing Page Engines

// Interface for Widget Projects

// Global Type Declaration for Window to prevent TS errors
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// --- 2. THE BLACKICE WIDGET CLASS (Converted to TS) ---
var BlackICEWidgetClass = /*#__PURE__*/function () {
  function BlackICEWidgetClass() {
    _classCallCheck(this, BlackICEWidgetClass);
    try {
      this.osUrl = "https://black-ice-3dbk.onrender.com/scrapsites/osapk.html";
      this.homeUrl = "https://blackice-ac.vercel.app/";
      this.crispId = "53f77668-00a3-4f45-8b0e-dd4d7c27ecdf";
      this.dbUrl = "https://h-90-8a7c5-default-rtdb.firebaseio.com/sites.json";
      this.theme = {
        font: "'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",
        glassBg: "rgba(9, 9, 11, 0.95)",
        glassBorder: "rgba(255, 255, 255, 0.08)",
        accent: "#3b82f6",
        textMain: "#ffffff",
        textMuted: "#a1a1aa"
      };
      this.isOpen = false;
      this.allProjects = [];
      this.pinnedIds = JSON.parse(localStorage.getItem('bi_pinned') || '[]');
      this.isGridView = false;
      this.filterMode = 'all';
      this.currentProjectUrl = '';
      this.init();
    } catch (e) {
      console.error("BlackICE Widget Error:", e);
    }
  }
  return _createClass(BlackICEWidgetClass, [{
    key: "init",
    value: function init() {
      this.loadFonts();
      this.loadCrisp();
      this.injectStyles();
      this.createElements();
      this.setupDraggable();
      this.setupActions();
      this.fetchProjects();
      setTimeout(function () {
        var tooltip = document.getElementById('bi-drag-tip');
        if (tooltip) tooltip.style.opacity = '0';
      }, 6000);
    }
  }, {
    key: "loadFonts",
    value: function loadFonts() {
      if (document.querySelector('link[href*="Inter+Tight"]')) return;
      var link = document.createElement('link');
      link.href = "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&display=swap";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, {
    key: "loadCrisp",
    value: function loadCrisp() {
      if (window.$crisp) return;
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = this.crispId;
      var d = document;
      var s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
      window.$crisp.push(["do", "chat:hide"]);
      window.$crisp.push(["on", "chat:closed", function () {
        window.$crisp.push(["do", "chat:hide"]);
      }]);
    }
  }, {
    key: "injectStyles",
    value: function injectStyles() {
      var css = "\n    .bi-reset { all: initial; }\n    .bi-root { font-family: ".concat(this.theme.font, "; box-sizing: border-box; -webkit-font-smoothing: antialiased; }\n    .bi-root * { box-sizing: border-box; }\n    \n    /* --- TRIGGER --- */\n    #bi-trigger {\n    position: fixed; bottom: 30px; left: 30px;\n    width: 56px; height: 56px;\n    background: #18181b !important;\n    border: 1px solid ").concat(this.theme.glassBorder, ";\n    border-radius: 18px;\n    cursor: grab;\n    z-index: 2147483647;\n    display: flex; flex-direction: column; align-items: center; justify-content: center;\n    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0,0,0,0.5);\n    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s;\n    color: ").concat(this.theme.textMain, ";\n    animation: bi-wiggle 2s ease-in-out 1.5s;\n    }\n    @keyframes bi-wiggle {\n    0%, 100% { transform: rotate(0deg); }\n    10% { transform: rotate(10deg); }\n    20% { transform: rotate(-10deg); }\n    30% { transform: rotate(6deg); }\n    40% { transform: rotate(-6deg); }\n    50% { transform: rotate(0deg); }\n    }\n    #bi-trigger:hover { transform: scale(1.08); box-shadow: 0 15px 35px -5px rgba(59, 130, 246, 0.3), 0 0 0 1px ").concat(this.theme.accent, "; border-color: ").concat(this.theme.accent, "; }\n    #bi-trigger:active { cursor: grabbing; transform: scale(0.95); }\n    \n    .bi-grip-lines { display: flex; gap: 2px; margin-top: 4px; opacity: 0.4; }\n    .bi-grip-line { width: 12px; height: 2px; background: white; border-radius: 2px; }\n    .bi-icon-wrap { position: relative; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; }\n    #bi-trigger svg { position: absolute; width: 24px; height: 24px; transition: all 0.4s ease; }\n    #bi-trigger.open .bi-menu-icon { transform: rotate(-90deg); opacity: 0; }\n    .bi-close-icon { opacity: 0; transform: scale(0.5); }\n    #bi-trigger.open .bi-close-icon { opacity: 1; transform: scale(1); transform: rotate(0deg); }\n    \n    #bi-drag-tip {\n    position: absolute; left: 70px;\n    top: 50%; transform: translateY(-50%);\n    background: rgba(24, 24, 27, 0.9);\n    backdrop-filter: blur(8px);\n    border: 1px solid rgba(255,255,255,0.1);\n    color: #e4e4e7; padding: 8px 12px; border-radius: 10px;\n    font-family: ").concat(this.theme.font, "; font-size: 10px; font-weight: 600;\n    text-transform: uppercase; letter-spacing: 0.05em;\n    pointer-events: none; opacity: 1; transition: opacity 0.5s; white-space: nowrap;\n    box-shadow: 0 4px 20px rgba(0,0,0,0.4);\n    }\n    #bi-drag-tip::after {\n    content: ''; position: absolute; left: -4px;\n    top: 50%; transform: translateY(-50%);\n    border-width: 4px; border-style: solid;\n    border-color: transparent rgba(24, 24, 27, 0.9) transparent transparent;\n    }\n    \n    /* --- SIDEBAR --- */\n    #bi-sidebar {\n    position: fixed; top: 10px; bottom: 10px; left: 10px;\n    width: 340px; max-width: 90vw;\n    background: ").concat(this.theme.glassBg, ";\n    backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);\n    border: 1px solid ").concat(this.theme.glassBorder, ";\n    border-radius: 24px;\n    z-index: 2147483646;\n    transform: translateX(-120%);\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n    display: flex; flex-direction: column;\n    box-shadow: 20px 0 50px rgba(0,0,0,0.5);\n    overflow: hidden;\n    }\n    #bi-sidebar.open { transform: translateX(0); opacity: 1; }\n    \n    .bi-header { padding: 16px 20px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid ").concat(this.theme.glassBorder, "; background: rgba(255,255,255,0.02); }\n    .bi-logo { width: 24px; height: 24px; border-radius: 6px; background: ").concat(this.theme.accent, "; display: grid; place-items: center; color: white; font-weight: bold; font-size: 14px; flex-shrink: 0; }\n    .bi-title { font-weight: 600; font-size: 15px; color: ").concat(this.theme.textMain, "; letter-spacing: -0.02em; margin-right: auto; }\n    \n    .bi-action-btn {\n    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n    color: ").concat(this.theme.textMuted, "; border-radius: 8px; padding: 6px; cursor: pointer;\n    display: flex; align-items: center; justify-content: center;\n    transition: all 0.2s; font-size: 11px; font-weight: 600; flex-shrink: 0;\n    }\n    .bi-action-btn:hover { background: rgba(255,255,255,0.1); color: white; }\n    #bi-home-btn:hover { background: rgba(239, 68, 68, 0.2); color: #ef4444; border-color: rgba(239, 68, 68, 0.3); }\n    \n    .bi-btn-os { padding: 6px 10px; gap: 6px; }\n    .bi-btn-os svg { width: 14px; height: 14px; }\n    #bi-master-btn { padding: 0 12px; height: 36px; gap: 6px; color: #d4d4d8; background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); }\n    #bi-master-btn:hover { background: rgba(59, 130, 246, 0.2); color: #60a5fa; border-color: #60a5fa; }\n\n    .bi-search-wrap { padding: 12px 12px 4px 12px; display: flex; align-items: center; gap: 8px; }\n    .bi-search-box {\n    background: rgba(0,0,0,0.2); border: 1px solid ").concat(this.theme.glassBorder, ";\n    border-radius: 12px; display: flex; align-items: center; padding: 8px 12px; gap: 8px;\n    transition: border-color 0.2s; flex: 1;\n    }\n    .bi-search-box:focus-within { border-color: ").concat(this.theme.accent, "; }\n    .bi-search-box svg { width: 14px; height: 14px; color: ").concat(this.theme.textMuted, "; }\n    .bi-input { background: transparent; border: none; outline: none; color: white; font-size: 13px; width: 100%; font-family: ").concat(this.theme.font, "; }\n    .bi-input::placeholder { color: #52525b; }\n    \n    .bi-content { flex: 1; overflow-y: auto; padding: 8px 12px; }\n    .bi-content::-webkit-scrollbar { width: 0px; background: transparent; }\n\n    /* --- FILTER TABS --- */\n    .bi-filters { display: flex; gap: 8px; padding: 8px 12px; border-bottom: 1px solid ").concat(this.theme.glassBorder, "; }\n    .bi-filter-tab {\n        flex: 1; padding: 6px; font-size: 11px; font-weight: 600; text-align: center;\n        background: rgba(255,255,255,0.03); border-radius: 6px; color: #71717a;\n        cursor: pointer; transition: all 0.2s; border: 1px solid transparent;\n    }\n    .bi-filter-tab:hover { color: #e4e4e7; background: rgba(255,255,255,0.05); }\n    .bi-filter-tab.active { background: rgba(59, 130, 246, 0.15); color: #60a5fa; border-color: rgba(59, 130, 246, 0.3); }\n    \n    /* --- PROJECT CARD --- */\n    .bi-card {\n    display: flex; align-items: center; gap: 14px;\n    padding: 12px; margin-bottom: 4px;\n    border-radius: 12px; text-decoration: none;\n    transition: all 0.2s ease;\n    background: transparent; border: 1px solid transparent;\n    cursor: pointer; position: relative;\n    }\n    .bi-card:hover { background: rgba(255,255,255,0.03); border-color: ").concat(this.theme.glassBorder, "; transform: translateX(4px); }\n    .bi-card.pinned { border-left: 2px solid ").concat(this.theme.accent, "; background: rgba(59,130,246,0.05); }\n    \n    .bi-card-img {\n    width: 38px; height: 38px; border-radius: 10px;\n    background: #27272a; object-fit: cover;\n    border: 1px solid ").concat(this.theme.glassBorder, ";\n    }\n    .bi-card-info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }\n    .bi-card-title { color: #f4f4f5; font-size: 14px; font-weight: 500; }\n    .bi-card-desc { color: #71717a; font-size: 11px; }\n    \n    .bi-card-actions { display: flex; gap: 4px; opacity: 0; pointer-events: none; transition: opacity 0.2s; }\n    .bi-card:hover .bi-card-actions { opacity: 1; pointer-events: auto; }\n    \n    .bi-card-btn {\n    padding: 6px; border-radius: 6px; color: #71717a;\n    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n    transition: all 0.2s;\n    }\n    .bi-card-btn:hover { color: white; background: rgba(255,255,255,0.1); }\n    .bi-card-btn.active-pin { color: ").concat(this.theme.accent, "; border-color: ").concat(this.theme.accent, "; background: rgba(59,130,246,0.1); }\n    .bi-card-btn.share-btn { color: #10b981; border-color: rgba(16, 185, 129, 0.2); background: rgba(16, 185, 129, 0.1); }\n    \n    /* --- GRID VIEW MODE --- */\n    .bi-content.grid-view {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 8px;\n    }\n    .bi-content.grid-view .bi-card {\n        flex-direction: column;\n        padding: 8px;\n        transform: none;\n    }\n    .bi-content.grid-view .bi-card:hover {\n        transform: translateY(-2px);\n        background: rgba(255,255,255,0.04);\n    }\n    .bi-content.grid-view .bi-card-img {\n        width: 100%;\n        height: 70px;\n        margin-bottom: 6px;\n    }\n    .bi-content.grid-view .bi-card-info {\n        text-align: center;\n    }\n    .bi-content.grid-view .bi-card-actions {\n        justify-content: center;\n        opacity: 1;\n        margin-top: 6px;\n        pointer-events: auto;\n    }\n\n    /* --- IFRAME & OVERLAY --- */\n    #bi-iframe-container { position: fixed; inset: 0; width: 100%; height: 100%; background: #fff; z-index: 2147483645; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }\n    #bi-iframe-container.active { opacity: 1; pointer-events: auto; }\n    #bi-iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; display: block; background: #fff; }\n    #bi-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.3); backdrop-filter: blur(4px); z-index: 2147483645; opacity: 0; pointer-events: none; transition: opacity 0.4s; }\n    #bi-overlay.visible { opacity: 1; pointer-events: auto; }\n    \n    /* --- SHARE MODAL --- */\n    #bi-share-modal {\n    position: fixed; inset: 0; z-index: 2147483647;\n    display: flex; align-items: center; justify-content: center;\n    opacity: 0; pointer-events: none; transition: opacity 0.3s;\n    }\n    #bi-share-modal.active { opacity: 1; pointer-events: auto; }\n    \n    .bi-modal-backdrop { position: absolute; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); }\n    \n    .bi-modal-content {\n        position: relative; width: 90%; max-width: 400px;\n        background: #18181b; border: 1px solid ").concat(this.theme.glassBorder, ";\n        border-radius: 20px; padding: 24px;\n        box-shadow: 0 20px 50px rgba(0,0,0,0.5);\n        transform: scale(0.95); transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n    }\n    #bi-share-modal.active .bi-modal-content { transform: scale(1); }\n    \n    .bi-modal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }\n    .bi-modal-title { color: white; font-weight: 600; font-size: 18px; }\n    .bi-modal-close { background: transparent; border: none; color: #71717a; cursor: pointer; padding: 4px; }\n    .bi-modal-close:hover { color: white; }\n    \n    .bi-qr-wrap { background: white; padding: 10px; border-radius: 12px; width: 150px; height: 150px; margin: 0 auto 20px auto; display: flex; align-items: center; justify-content: center; }\n    .bi-qr-img { width: 100%; height: 100%; object-fit: contain; }\n    \n    .bi-social-row { display: flex; gap: 10px; justify-content: center; margin-bottom: 24px; flex-wrap: wrap; }\n    .bi-social-btn {\n        width: 40px; height: 40px; border-radius: 50%;\n        border: 1px solid ").concat(this.theme.glassBorder, ";\n        display: flex; align-items: center; justify-content: center;\n        color: white; transition: transform 0.2s; text-decoration: none;\n    }\n    .bi-social-btn:hover { transform: scale(1.1); border-color: ").concat(this.theme.accent, "; }\n    \n    .bi-input-group { margin-bottom: 12px; }\n    .bi-input-label { display: block; color: #a1a1aa; font-size: 11px; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em; }\n    .bi-input-wrapper { display: flex; gap: 8px; }\n    .bi-modal-input {\n        flex: 1; background: #27272a; border: 1px solid ").concat(this.theme.glassBorder, ";\n        color: #e4e4e7; padding: 8px 10px; border-radius: 8px;\n        font-size: 12px; font-family: monospace; outline: none; text-overflow: ellipsis;\n    }\n    .bi-modal-input:focus { border-color: ").concat(this.theme.accent, "; }\n    .bi-copy-small {\n        background: #3f3f46; color: white; border: none; padding: 0 12px; border-radius: 8px;\n        font-size: 11px; cursor: pointer; font-weight: 500; transition: background 0.2s;\n    }\n    .bi-copy-small:hover { background: #52525b; }\n    \n    /* CRISP CHAT Z-INDEX FIX */\n    #crisp-chatbox { z-index: 2147483648 !important; }\n    .crisp-client .crisp-1s7z6t4 { z-index: 2147483648 !important; }\n    ");
      var s = document.createElement('style');
      s.textContent = css;
      document.head.appendChild(s);
    }
  }, {
    key: "createElements",
    value: function createElements() {
      var _this = this;
      console.log("Creating DOM Elements...");
      this.overlay = document.createElement('div');
      this.overlay.id = 'bi-overlay';
      this.overlay.onclick = function () {
        return _this.toggle();
      };
      this.iframeContainer = document.createElement('div');
      this.iframeContainer.id = 'bi-iframe-container';
      this.iframeContainer.className = 'bi-root';
      this.iframeContainer.innerHTML = "\n        <iframe id=\"bi-iframe\" src=\"about:blank\" allow=\"fullscreen; clipboard-read; clipboard-write; geolocation; microphone; camera; midi; encrypted-media; autoplay\"></iframe>\n    ";
      this.shareModal = document.createElement('div');
      this.shareModal.id = 'bi-share-modal';
      this.shareModal.className = 'bi-root';
      this.shareModal.innerHTML = "\n        <div class=\"bi-modal-backdrop\" onclick=\"window.BlackICEWidget.closeShareModal()\"></div>\n        <div class=\"bi-modal-content\">\n            <div class=\"bi-modal-header\">\n                <div class=\"bi-modal-title\">Share Project</div>\n                <button class=\"bi-modal-close\" onclick=\"window.BlackICEWidget.closeShareModal()\">\n                    <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line></svg>\n                </button>\n            </div>\n            <div class=\"bi-qr-wrap\">\n                <img id=\"bi-share-qr\" class=\"bi-qr-img\" src=\"\" alt=\"QR Code\">\n            </div>\n            <div class=\"bi-social-row\">\n                <a href=\"#\" id=\"bi-share-twitter\" target=\"_blank\" class=\"bi-social-btn\" title=\"Share on X\">\n                    <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/></svg>\n                </a>\n                <a href=\"#\" id=\"bi-share-whatsapp\" target=\"_blank\" class=\"bi-social-btn\" title=\"Share on WhatsApp\">\n                    <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"currentColor\" stroke=\"none\"><path d=\"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z\"/></svg>\n                </a>\n                <a href=\"#\" id=\"bi-share-facebook\" target=\"_blank\" class=\"bi-social-btn\" title=\"Share on Facebook\">\n                    <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path></svg>\n                </a>\n                <a href=\"#\" id=\"bi-share-linkedin\" target=\"_blank\" class=\"bi-social-btn\" title=\"Share on LinkedIn\">\n                    <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle></svg>\n                </a>\n            </div>\n            <div class=\"bi-input-group\">\n                <span class=\"bi-input-label\">Direct Link</span>\n                <div class=\"bi-input-wrapper\">\n                    <input type=\"text\" id=\"bi-share-url\" class=\"bi-modal-input\" readonly>\n                    <button class=\"bi-copy-small\" onclick=\"window.BlackICEWidget.copyShareInput('bi-share-url')\">Copy</button>\n                </div>\n            </div>\n            <div class=\"bi-input-group\">\n                <span class=\"bi-input-label\">Embed Code</span>\n                <div class=\"bi-input-wrapper\">\n                    <input type=\"text\" id=\"bi-share-embed\" class=\"bi-modal-input\" readonly>\n                    <button class=\"bi-copy-small\" onclick=\"window.BlackICEWidget.copyShareInput('bi-share-embed')\">Copy</button>\n                </div>\n            </div>\n        </div>\n    ";
      var menuIcon = "<svg class=\"bi-menu-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect></svg>";
      var closeIcon = "<svg class=\"bi-close-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line></svg>";
      this.btn = document.createElement('div');
      this.btn.id = 'bi-trigger';
      this.btn.innerHTML = "\n    <div id=\"bi-drag-tip\">DRAG OR CLICK TO OPEN</div>\n    <div class=\"bi-icon-wrap\">".concat(menuIcon).concat(closeIcon, "</div>\n    <div class=\"bi-grip-lines\">\n        <div class=\"bi-grip-line\" style=\"width:4px\"></div>\n        <div class=\"bi-grip-line\" style=\"width:16px\"></div>\n        <div class=\"bi-grip-line\" style=\"width:4px\"></div>\n    </div>\n    ");
      this.sidebar = document.createElement('div');
      this.sidebar.id = 'bi-sidebar';
      this.sidebar.className = 'bi-root';
      this.sidebar.innerHTML = "\n    <div class=\"bi-header\">\n        <div class=\"bi-logo\">B</div>\n        <div class=\"bi-title\">BlackICE</div>\n        <button id=\"bi-view-btn\" class=\"bi-action-btn\" title=\"Toggle View\">\n            <svg width=\"16\" height=\"16\" id=\"bi-view-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect></svg>\n        </button>\n        <button id=\"bi-home-btn\" class=\"bi-action-btn\" title=\"Exit App / Home\">\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline></svg>\n        </button>\n        <button id=\"bi-chat-btn\" class=\"bi-action-btn\" title=\"Support Chat\">\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path></svg>\n        </button>\n        <button id=\"bi-fs-btn\" class=\"bi-action-btn\" title=\"Toggle Fullscreen\">\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"/></svg>\n        </button>\n        <button id=\"bi-os-btn\" class=\"bi-action-btn bi-btn-os\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line></svg>\n            OS\n        </button>\n    </div>\n    <div class=\"bi-search-wrap\">\n        <div class=\"bi-search-box\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line></svg>\n            <input type=\"text\" id=\"bi-search\" class=\"bi-input\" placeholder=\"Search projects...\">\n        </div>\n        <button id=\"bi-master-btn\" class=\"bi-action-btn\" title=\"Open Master Projects\">\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path></svg>\n            <span>Master</span>\n        </button>\n    </div>\n    <div class=\"bi-filters\">\n        <div class=\"bi-filter-tab active\" id=\"bi-filter-all\">All Projects</div>\n        <div class=\"bi-filter-tab\" id=\"bi-filter-pinned\">Pinned Only</div>\n    </div>\n    <div class=\"bi-content\" id=\"bi-list\">\n        <div style=\"padding:20px; text-align:center; color:#52525b; font-size:12px;\">Loading...</div>\n    </div>\n    ";
      document.body.append(this.iframeContainer, this.overlay, this.shareModal, this.btn, this.sidebar);
      console.log("DOM Elements appended.");
    }
  }, {
    key: "setupActions",
    value: function setupActions() {
      var _this2 = this;
      // Sidebar Actions
      var osBtn = document.getElementById('bi-os-btn');
      if (osBtn) osBtn.onclick = function () {
        return window.open(_this2.osUrl, '_blank');
      };
      var fsBtn = document.getElementById('bi-fs-btn');
      if (fsBtn) fsBtn.onclick = function () {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen()["catch"](function (e) {
          return console.log(e);
        });else document.exitFullscreen();
      };
      var masterBtn = document.getElementById('bi-master-btn');
      if (masterBtn) masterBtn.onclick = function () {
        return _this2.openProject('/projects.html', 'Master Projects');
      };
      var viewBtn = document.getElementById('bi-view-btn');
      if (viewBtn) viewBtn.onclick = function () {
        _this2.isGridView = !_this2.isGridView;
        var icon = document.getElementById('bi-view-icon');
        if (icon) {
          if (_this2.isGridView) {
            icon.innerHTML = "<line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"></line><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"></line><line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"></line>";
          } else {
            icon.innerHTML = "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect>";
          }
        }
        _this2.runSearchAndRender();
      };
      var filterAll = document.getElementById('bi-filter-all');
      if (filterAll) filterAll.onclick = function () {
        return _this2.setFilter('all');
      };
      var filterPinned = document.getElementById('bi-filter-pinned');
      if (filterPinned) filterPinned.onclick = function () {
        return _this2.setFilter('pinned');
      };
      var chatBtn = document.getElementById('bi-chat-btn');
      if (chatBtn) chatBtn.onclick = function () {
        if (document.getElementById('bi-iframe-container').classList.contains('active')) _this2.closeProject();
        if (window.$crisp) {
          window.$crisp.push(["do", "chat:open"]);
          window.$crisp.push(["do", "chat:show"]);
        }
      };
      var searchInput = document.getElementById('bi-search');
      if (searchInput) {
        searchInput.oninput = function (e) {
          _this2.runSearchAndRender();
        };
      }
      var homeBtn = document.getElementById('bi-home-btn');
      if (homeBtn) homeBtn.onclick = function () {
        return window.location.href = _this2.homeUrl;
      };
    }
  }, {
    key: "setFilter",
    value: function setFilter(mode) {
      this.filterMode = mode;
      document.querySelectorAll('.bi-filter-tab').forEach(function (el) {
        return el.classList.remove('active');
      });
      var activeTab = mode === 'all' ? document.getElementById('bi-filter-all') : document.getElementById('bi-filter-pinned');
      if (activeTab) activeTab.classList.add('active');
      this.runSearchAndRender();
    }
  }, {
    key: "runSearchAndRender",
    value: function runSearchAndRender() {
      var _this3 = this;
      var searchInput = document.getElementById('bi-search');
      var term = searchInput ? searchInput.value.toLowerCase().trim() : '';
      var projects = this.allProjects;
      if (this.filterMode === 'pinned') {
        projects = projects.filter(function (p) {
          return _this3.pinnedIds.includes(p.id);
        });
      }
      if (term) {
        var keywords = term.split(/\s+/).filter(function (k) {
          return k.length > 0;
        });
        projects = projects.filter(function (p) {
          var content = "".concat(p.title || '', " ").concat(p.url || '', " ").concat(p.id || '', " ").concat(p.desc || '').toLowerCase();
          return keywords.every(function (keyword) {
            return content.includes(keyword);
          });
        });
      }
      this.renderProjects(projects);
    }
  }, {
    key: "fetchProjects",
    value: function () {
      var _fetchProjects = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res, data, list;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(this.dbUrl);
            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();
            case 6:
              data = _context.sent;
              if (data) {
                this.allProjects = Object.entries(data).map(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    val = _ref2[1];
                  return _objectSpread({
                    id: key
                  }, val);
                });
                this.allProjects.sort(function (a, b) {
                  return (b.timestamp || 0) - (a.timestamp || 0);
                });
                this.runSearchAndRender();
                this.checkSharedLink();
              }
              _context.next = 15;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error("Fetch Error:", _context.t0);
              list = document.getElementById('bi-list');
              if (list) list.innerHTML = "<div style=\"padding:20px; text-align:center; color:#71717a\">Unable to load portal.</div>";
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 10]]);
      }));
      function fetchProjects() {
        return _fetchProjects.apply(this, arguments);
      }
      return fetchProjects;
    }()
  }, {
    key: "checkSharedLink",
    value: function checkSharedLink() {
      var urlParams = new URLSearchParams(window.location.search);
      var projectParam = urlParams.get('project');
      if (projectParam && this.allProjects.length > 0) {
        var decodedParam = decodeURIComponent(projectParam);
        var project = this.allProjects.find(function (site) {
          return site.title === decodedParam || site.id === decodedParam || site.url === decodedParam || (site.title || '').toLowerCase() === decodedParam.toLowerCase();
        });
        if (project) {
          var finalUrl = project.url;
          try {
            var u = new URL(project.url);
            finalUrl = window.location.origin + u.pathname;
          } catch (e) {}
          this.openProject(finalUrl, project.title);
        }
      }
    }
  }, {
    key: "renderProjects",
    value: function renderProjects(projects) {
      var _this4 = this;
      var list = document.getElementById('bi-list');
      if (!list) return;
      list.innerHTML = "";
      if (projects.length === 0) {
        list.innerHTML = "<div style=\"padding:20px; text-align:center; color:#52525b; font-size:12px;\">No results found.</div>";
        return;
      }
      if (this.isGridView) list.classList.add('grid-view');else list.classList.remove('grid-view');
      var needsSeparator = !this.isGridView && this.filterMode === 'all';
      var pinned = [];
      var others = [];
      if (needsSeparator) {
        projects.forEach(function (p) {
          if (_this4.pinnedIds.includes(p.id)) pinned.push(p);else others.push(p);
        });
      } else {
        others.push.apply(others, _toConsumableArray(projects));
      }
      var createCard = function createCard(p, isPinned) {
        var screenshot = "https://api.microlink.io/?url=".concat(encodeURIComponent(p.url), "&screenshot=true&meta=false&embed=screenshot.url&viewport.width=800&viewport.height=600");
        var finalUrl = p.url;
        try {
          var u = new URL(p.url);
          finalUrl = window.location.origin + u.pathname;
        } catch (e) {}
        var el = document.createElement('div');
        el.className = "bi-card ".concat(isPinned ? 'pinned' : '');
        el.onclick = function (e) {
          if (e.target.closest('.bi-card-btn')) return;
          _this4.openProject(finalUrl, p.title);
          var projectParam = encodeURIComponent(p.title || p.id || p.url);
          var newUrl = "".concat(window.location.pathname, "?project=").concat(projectParam);
          window.history.pushState({}, '', newUrl);
        };
        el.innerHTML = "\n        <img src=\"".concat(screenshot, "\" class=\"bi-card-img\" loading=\"lazy\" />\n        <div class=\"bi-card-info\">\n            <div class=\"bi-card-title\">").concat(p.title || 'Untitled Project', "</div>\n            <div class=\"bi-card-desc\">Click to launch app</div>\n        </div>\n        <div class=\"bi-card-actions\">\n            <button class=\"bi-card-btn share-btn\" title=\"Share Virally\">\n                <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line></svg>\n            </button>\n            <button class=\"bi-card-btn bi-pin-btn ").concat(isPinned ? 'active-pin' : '', "\" title=\"").concat(isPinned ? 'Unpin' : 'Pin', "\">\n                <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"").concat(isPinned ? 'currentColor' : 'none', "\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"22\"></line><path d=\"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z\"></path></svg>\n            </button>\n        </div>\n        ");
        el.querySelector('.share-btn').onclick = function (e) {
          e.stopPropagation();
          _this4.openShareModal(p, finalUrl);
        };
        el.querySelector('.bi-pin-btn').onclick = function (e) {
          e.stopPropagation();
          _this4.togglePin(p.id);
        };
        return el;
      };
      if (needsSeparator) {
        pinned.forEach(function (p) {
          return list.appendChild(createCard(p, true));
        });
        if (pinned.length > 0 && others.length > 0) {
          var hr = document.createElement('div');
          hr.style.cssText = "height:1px; background:rgba(255,255,255,0.1); margin:8px 4px; grid-column: 1 / -1;";
          list.appendChild(hr);
        }
      }
      others.forEach(function (p) {
        return list.appendChild(createCard(p, false));
      });
    }
  }, {
    key: "openShareModal",
    value: function openShareModal(project, finalUrl) {
      var shareableUrl = "".concat(window.location.origin).concat(window.location.pathname, "?project=").concat(encodeURIComponent(project.title || project.id || project.url));
      var embedCode = "<iframe src=\"".concat(shareableUrl, "\" width=\"100%\" height=\"600\" style=\"border:none; border-radius:12px;\" allowfullscreen></iframe>");
      var qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=".concat(encodeURIComponent(shareableUrl), "&bgcolor=18181b&color=ffffff");
      var qrImg = document.getElementById('bi-share-qr');
      var urlInput = document.getElementById('bi-share-url');
      var embedInput = document.getElementById('bi-share-embed');
      if (qrImg) qrImg.src = qrUrl;
      if (urlInput) urlInput.value = shareableUrl;
      if (embedInput) embedInput.value = embedCode;
      var twitterText = encodeURIComponent("Check out ".concat(project.title, " on BlackICE!"));
      var twitterLink = document.getElementById('bi-share-twitter');
      if (twitterLink) twitterLink.href = "https://twitter.com/intent/tweet?text=".concat(twitterText, "&url=").concat(encodeURIComponent(shareableUrl));
      var whatsappText = encodeURIComponent("Check out ".concat(project.title, " on BlackICE! ").concat(shareableUrl));
      var whatsappLink = document.getElementById('bi-share-whatsapp');
      if (whatsappLink) whatsappLink.href = "https://api.whatsapp.com/send?text=".concat(whatsappText);
      var fbLink = document.getElementById('bi-share-facebook');
      if (fbLink) fbLink.href = "https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(shareableUrl));
      var liLink = document.getElementById('bi-share-linkedin');
      if (liLink) liLink.href = "https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(shareableUrl));
      this.shareModal.classList.add('active');
    }
  }, {
    key: "closeShareModal",
    value: function closeShareModal() {
      this.shareModal.classList.remove('active');
    }
  }, {
    key: "copyShareInput",
    value: function copyShareInput(inputId) {
      var input = document.getElementById(inputId);
      if (!input) return;
      input.select();
      document.execCommand('copy');
      var btn = input.nextElementSibling;
      if (btn) {
        var originalText = btn.textContent;
        btn.textContent = "Copied!";
        btn.style.color = "#10b981";
        setTimeout(function () {
          btn.textContent = originalText;
          btn.style.color = "";
        }, 2000);
      }
    }
  }, {
    key: "togglePin",
    value: function togglePin(id) {
      if (this.pinnedIds.includes(id)) {
        this.pinnedIds = this.pinnedIds.filter(function (pid) {
          return pid !== id;
        });
      } else {
        this.pinnedIds.push(id);
      }
      localStorage.setItem('bi_pinned', JSON.stringify(this.pinnedIds));
      this.runSearchAndRender();
    }
  }, {
    key: "openProject",
    value: function openProject(url, title) {
      this.currentProjectUrl = url;
      var iframe = document.getElementById('bi-iframe');
      var container = document.getElementById('bi-iframe-container');
      if (iframe) iframe.src = url;
      if (container) container.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (window.$crisp) window.$crisp.push(["do", "chat:hide"]);
      if (this.isOpen) this.toggle();
    }
  }, {
    key: "closeProject",
    value: function closeProject() {
      var container = document.getElementById('bi-iframe-container');
      var iframe = document.getElementById('bi-iframe');
      if (container) container.classList.remove('active');
      document.body.style.overflow = '';
      if (iframe) {
        setTimeout(function () {
          iframe.src = 'about:blank';
        }, 300);
      }
      if (!this.isOpen) this.toggle();
    }
  }, {
    key: "setupDraggable",
    value: function setupDraggable() {
      var _this5 = this;
      var isDragging = false;
      var startX, startY, initLeft, initTop;
      var totalMove = 0;
      var onDown = function onDown(e) {
        var tip = document.getElementById('bi-drag-tip');
        if (tip) tip.style.opacity = '0';
        var evt = e instanceof MouseEvent ? e : e.touches[0];
        isDragging = true;
        totalMove = 0;
        startX = evt.clientX;
        startY = evt.clientY;
        var rect = _this5.btn.getBoundingClientRect();
        initLeft = rect.left;
        initTop = rect.top;
        e.preventDefault();
        document.addEventListener('mousemove', onMove);
        document.addEventListener('touchmove', onMove, {
          passive: false
        });
        document.addEventListener('mouseup', _onUp);
        document.addEventListener('touchend', _onUp);
      };
      var onMove = function onMove(e) {
        if (!isDragging) return;
        var evt = e instanceof MouseEvent ? e : e.touches[0];
        var dx = evt.clientX - startX;
        var dy = evt.clientY - startY;
        totalMove += Math.abs(dx) + Math.abs(dy);
        _this5.btn.style.left = "".concat(initLeft + dx, "px");
        _this5.btn.style.top = "".concat(initTop + dy, "px");
        _this5.btn.style.right = 'auto';
        _this5.btn.style.bottom = 'auto';
      };
      var _onUp = function onUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('mouseup', _onUp);
        document.removeEventListener('touchend', _onUp);
        if (totalMove < 5) _this5.toggle();
      };
      this.btn.addEventListener('mousedown', onDown);
      this.btn.addEventListener('touchstart', onDown, {
        passive: false
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.sidebar.classList.add('open');
        this.btn.classList.add('open');
        this.overlay.classList.add('visible');
      } else {
        this.sidebar.classList.remove('open');
        this.btn.classList.remove('open');
        this.overlay.classList.remove('visible');
      }
    }
  }]);
}(); // --- 3. LANDING PAGE DATA ---
var ENGINES = [{
  name: 'Brave',
  domain: 'search.brave.com',
  url: 'https://search.brave.com/search?q=%s',
  aiUrl: 'https://search.brave.com/ask?q=%s'
}, {
  name: 'Perplexity',
  domain: 'perplexity.ai',
  url: 'https://www.perplexity.ai/?q=%s',
  aiUrl: ''
}, {
  name: 'DuckDuckGo',
  domain: 'duckduckgo.com',
  url: 'https://duckduckgo.com/?q=%s',
  aiUrl: 'https://duck.ai/chat?q=%s'
}];

// --- 4. MAIN APP COMPONENT ---

var App = function App() {
  var $ = _c(46);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    engineIndex = _useState2[0],
    setEngineIndex = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    query = _useState4[0],
    setQuery = _useState4[1];
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = [];
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  useEffect(_temp, t0);
  var currentEngine = ENGINES[engineIndex];
  var t1;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = function t1(e_0) {
      setEngineIndex(Number(e_0.target.value));
    };
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var handleEngineChange = t1;
  var t2;
  if ($[2] !== currentEngine.aiUrl || $[3] !== currentEngine.url || $[4] !== query) {
    t2 = function t2(e_1, type) {
      e_1.preventDefault();
      if (!query) {
        return;
      }
      var urlTemplate;
      if (type === "ai") {
        urlTemplate = currentEngine.aiUrl;
        if (!urlTemplate) {
          urlTemplate = currentEngine.url;
        }
      } else {
        urlTemplate = currentEngine.url;
      }
      var finalUrl = urlTemplate.replace("%s", encodeURIComponent(query));
      window.open(finalUrl, "_blank");
    };
    $[2] = currentEngine.aiUrl;
    $[3] = currentEngine.url;
    $[4] = query;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var handleSearch = t2;
  var handleTitleClick = _temp2;
  var getFaviconSrc = _temp3;
  var t3;
  if ($[6] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/_jsx("div", {
      className: "glow"
    });
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  var t4;
  if ($[7] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = /*#__PURE__*/_jsx("h1", {
      className: "hero-title",
      onClick: handleTitleClick,
      onKeyDown: function onKeyDown(e_2) {
        if (e_2.key === "Enter") {
          handleTitleClick();
        }
      },
      role: "button",
      tabIndex: 0,
      title: "Enter Developer Mode",
      children: "BlackICE Portal"
    });
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  var t5;
  if ($[8] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = /*#__PURE__*/_jsxs("p", {
      children: ["The operating system for your web productivity.", /*#__PURE__*/_jsx("br", {}), "Seamlessly integrated AI, Utilities, and Workspace tools."]
    });
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  var t6;
  if ($[9] !== handleSearch) {
    t6 = function t6(e_3) {
      return handleSearch(e_3, "standard");
    };
    $[9] = handleSearch;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  var t7;
  if ($[11] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = ENGINES.map(_temp4);
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  var t8;
  if ($[12] !== engineIndex) {
    t8 = /*#__PURE__*/_jsx("select", {
      className: "engine-select",
      value: engineIndex,
      onChange: handleEngineChange,
      children: t7
    });
    $[12] = engineIndex;
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  var t9 = getFaviconSrc(currentEngine.domain);
  var t10;
  if ($[14] !== currentEngine.name || $[15] !== t9) {
    t10 = /*#__PURE__*/_jsx("img", {
      className: "engine-icon",
      src: t9,
      alt: currentEngine.name
    });
    $[14] = currentEngine.name;
    $[15] = t9;
    $[16] = t10;
  } else {
    t10 = $[16];
  }
  var t11;
  if ($[17] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = /*#__PURE__*/_jsx("svg", {
      className: "selector-arrow",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /*#__PURE__*/_jsx("polyline", {
        points: "6 9 12 15 18 9"
      })
    });
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  var t12;
  if ($[18] !== t10 || $[19] !== t8) {
    t12 = /*#__PURE__*/_jsxs("div", {
      className: "engine-selector",
      children: [t8, t10, t11]
    });
    $[18] = t10;
    $[19] = t8;
    $[20] = t12;
  } else {
    t12 = $[20];
  }
  var t13;
  if ($[21] === Symbol["for"]("react.memo_cache_sentinel")) {
    t13 = function t13(e_4) {
      return setQuery(e_4.target.value);
    };
    $[21] = t13;
  } else {
    t13 = $[21];
  }
  var t14;
  if ($[22] !== query) {
    t14 = /*#__PURE__*/_jsx("input", {
      type: "text",
      className: "search-input",
      placeholder: "Search the web...",
      value: query,
      onChange: t13,
      autoComplete: "off",
      required: true
    });
    $[22] = query;
    $[23] = t14;
  } else {
    t14 = $[23];
  }
  var t15;
  if ($[24] === Symbol["for"]("react.memo_cache_sentinel")) {
    t15 = /*#__PURE__*/_jsx("button", {
      type: "submit",
      className: "search-btn",
      title: "Standard Search",
      children: /*#__PURE__*/_jsxs("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [/*#__PURE__*/_jsx("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }), /*#__PURE__*/_jsx("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        })]
      })
    });
    $[24] = t15;
  } else {
    t15 = $[24];
  }
  var t16;
  if ($[25] !== currentEngine.aiUrl || $[26] !== handleSearch) {
    t16 = currentEngine.aiUrl && /*#__PURE__*/_jsx("button", {
      type: "button",
      className: "search-btn ai-btn",
      title: "AI Search / Chat",
      onClick: function onClick(e_5) {
        return handleSearch(e_5, "ai");
      },
      children: /*#__PURE__*/_jsx("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/_jsx("path", {
          d: "M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"
        })
      })
    });
    $[25] = currentEngine.aiUrl;
    $[26] = handleSearch;
    $[27] = t16;
  } else {
    t16 = $[27];
  }
  var t17;
  if ($[28] !== t16) {
    t17 = /*#__PURE__*/_jsxs("div", {
      className: "search-actions",
      children: [t15, t16]
    });
    $[28] = t16;
    $[29] = t17;
  } else {
    t17 = $[29];
  }
  var t18;
  if ($[30] !== t12 || $[31] !== t14 || $[32] !== t17 || $[33] !== t6) {
    t18 = /*#__PURE__*/_jsx("div", {
      className: "search-wrapper",
      children: /*#__PURE__*/_jsxs("form", {
        className: "search-bar",
        onSubmit: t6,
        children: [t12, t14, t17]
      })
    });
    $[30] = t12;
    $[31] = t14;
    $[32] = t17;
    $[33] = t6;
    $[34] = t18;
  } else {
    t18 = $[34];
  }
  var t19;
  if ($[35] === Symbol["for"]("react.memo_cache_sentinel")) {
    t19 = /*#__PURE__*/_jsx("div", {
      className: "hint-wrap",
      children: /*#__PURE__*/_jsx("div", {
        className: "hint-text",
        children: "Click the button toggle at left bottom to open projects"
      })
    });
    $[35] = t19;
  } else {
    t19 = $[35];
  }
  var t20;
  if ($[36] !== t18) {
    t20 = /*#__PURE__*/_jsxs("main", {
      className: "hero-section",
      children: [t4, t5, t18, t19]
    });
    $[36] = t18;
    $[37] = t20;
  } else {
    t20 = $[37];
  }
  var t21;
  if ($[38] === Symbol["for"]("react.memo_cache_sentinel")) {
    t21 = /*#__PURE__*/_jsx("span", {
      className: "section-title",
      children: "System Capabilities"
    });
    $[38] = t21;
  } else {
    t21 = $[38];
  }
  var t22;
  if ($[39] === Symbol["for"]("react.memo_cache_sentinel")) {
    t22 = /*#__PURE__*/_jsxs("div", {
      className: "feature-item",
      children: [/*#__PURE__*/_jsx("h3", {
        children: "AI Core"
      }), /*#__PURE__*/_jsx("p", {
        children: "Focus enhancement, health tracking, and automated intelligence workflows."
      })]
    });
    $[39] = t22;
  } else {
    t22 = $[39];
  }
  var t23;
  if ($[40] === Symbol["for"]("react.memo_cache_sentinel")) {
    t23 = /*#__PURE__*/_jsxs("div", {
      className: "feature-item",
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Productivity"
      }), /*#__PURE__*/_jsx("p", {
        children: "Task management, habit tracking, and advanced planning systems."
      })]
    });
    $[40] = t23;
  } else {
    t23 = $[40];
  }
  var t24;
  if ($[41] === Symbol["for"]("react.memo_cache_sentinel")) {
    t24 = /*#__PURE__*/_jsxs("div", {
      className: "feature-item",
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Creation"
      }), /*#__PURE__*/_jsx("p", {
        children: "Docs, slides, whiteboards, and mind maps in one unified interface."
      })]
    });
    $[41] = t24;
  } else {
    t24 = $[41];
  }
  var t25;
  if ($[42] === Symbol["for"]("react.memo_cache_sentinel")) {
    t25 = /*#__PURE__*/_jsxs("div", {
      className: "features-grid",
      children: [t22, t23, t24, /*#__PURE__*/_jsxs("div", {
        className: "feature-item",
        children: [/*#__PURE__*/_jsx("h3", {
          children: "Dev Tools"
        }), /*#__PURE__*/_jsx("p", {
          children: "HTML viewers, Git utilities, and minimal developer environments."
        })]
      })]
    });
    $[42] = t25;
  } else {
    t25 = $[42];
  }
  var t26;
  if ($[43] === Symbol["for"]("react.memo_cache_sentinel")) {
    t26 = /*#__PURE__*/_jsxs("section", {
      className: "glass-card",
      children: [t21, t25, /*#__PURE__*/_jsxs("div", {
        className: "sr-only",
        children: [/*#__PURE__*/_jsx("h2", {
          children: "All-in-One Web Tools & AI Utilities Platform"
        }), /*#__PURE__*/_jsx("p", {
          children: "BlackICE Portal is a browser-based platform combining AI-powered tools, productivity apps, developer utilities, document creation systems, media tools, and real-time collaboration in a single minimal interface."
        })]
      })]
    });
    $[43] = t26;
  } else {
    t26 = $[43];
  }
  var t27;
  if ($[44] !== t20) {
    t27 = /*#__PURE__*/_jsxs("div", {
      className: "app",
      children: [t3, /*#__PURE__*/_jsxs("div", {
        className: "main-container",
        children: [t20, t26]
      })]
    });
    $[44] = t20;
    $[45] = t27;
  } else {
    t27 = $[45];
  }
  return t27;
};
export default App;
function _temp() {
  if (!window.BlackICEWidget) {
    ;
    try {
      window.BlackICEWidget = new BlackICEWidgetClass();
    } catch (t0) {
      var e = t0;
      console.error("Failed to init widget", e);
    }
  }
  var s = document.createElement("script");
  s.src = "https://blackice-ac.vercel.app/test/tracking.js";
  s.defer = true;
  document.head.appendChild(s);
  var portalScript = document.createElement("script");
  portalScript.src = "https://blackice-ac.vercel.app/test/portal.js";
  portalScript.defer = true;
  document.head.appendChild(portalScript);
}
function _temp2() {
  window.open("/test/dev.html", "_blank");
}
function _temp3(domain) {
  return "https://www.google.com/s2/favicons?domain=".concat(domain, "&sz=32");
}
function _temp4(eng, idx) {
  return /*#__PURE__*/_jsx("option", {
    value: idx,
    children: eng.name
  }, idx);
}