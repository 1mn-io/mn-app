import { B as N, _ as F, l as K, ax as c } from "./main-BQAWsb7p.js";
import { x as C } from "./index-C2FJQt9j.js";
import { s as U } from "./index-DqMIWRbA.js";
import { s as $ } from "./index-Cq_aB1oA.js";
import { s as A } from "./index-w7MH-sDb.js";
import { s as _ } from "./index-C-7bH9xK.js";
import { a1 as l, H as r, a3 as u, m as a, ae as H, G as d, J as b, a2 as j, F as z, a6 as E, K as W, a7 as X, E as O, I as M, a as J, ag as Y, a9 as q } from "./runtime-dom.esm-bundler-C71lIG0B.js";
import { s as Q } from "./index-GoqIfWV4.js";
import { s as x } from "./index-Dai3N0Ua.js";
import { R as tt, f as D } from "./index-BLujVrVi.js";
var et = `
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        margin: 0 0 1rem 0;
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
        min-height: 0;
        overflow: hidden;
        transition: padding 250ms ease-in;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: -25% 0 0 0;
        right: -25%;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        margin: -25% 0 0 auto;
        left: -25%;
        right: auto;
    }

    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }
    
    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }

    .p-toast-message-enter-active {
        animation: p-animate-toast-enter 300ms ease-out;
    }

    .p-toast-message-leave-active {
        animation: p-animate-toast-leave 250ms ease-in;
    }

    .p-toast-message-leave-to .p-toast-message-content {
        padding-top: 0;
        padding-bottom: 0;
    }

    @keyframes p-animate-toast-enter {
        from {
            opacity: 0;
            transform: scale(0.6);
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

     @keyframes p-animate-toast-leave {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            margin-bottom: 0;
            grid-template-rows: 0fr;
            transform: translateY(-100%) scale(0.6);
        }
    }
`;
function m(t) {
  "@babel/helpers - typeof";
  return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, m(t);
}
function h(t, e, o) {
  return (e = ot(e)) in t ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = o, t;
}
function ot(t) {
  var e = nt(t, "string");
  return m(e) == "symbol" ? e : e + "";
}
function nt(t, e) {
  if (m(t) != "object" || !t) return t;
  var o = t[Symbol.toPrimitive];
  if (o !== void 0) {
    var n = o.call(t, e);
    if (m(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var st = {
  root: function(e) {
    var o = e.position;
    return {
      position: "fixed",
      top: o === "top-right" || o === "top-left" || o === "top-center" ? "20px" : o === "center" ? "50%" : null,
      right: (o === "top-right" || o === "bottom-right") && "20px",
      bottom: (o === "bottom-left" || o === "bottom-right" || o === "bottom-center") && "20px",
      left: o === "top-left" || o === "bottom-left" ? "20px" : o === "center" || o === "top-center" || o === "bottom-center" ? "50%" : null
    };
  }
}, rt = {
  root: function(e) {
    var o = e.props;
    return ["p-toast p-component p-toast-" + o.position];
  },
  message: function(e) {
    var o = e.props;
    return ["p-toast-message", {
      "p-toast-message-info": o.message.severity === "info" || o.message.severity === void 0,
      "p-toast-message-warn": o.message.severity === "warn",
      "p-toast-message-error": o.message.severity === "error",
      "p-toast-message-success": o.message.severity === "success",
      "p-toast-message-secondary": o.message.severity === "secondary",
      "p-toast-message-contrast": o.message.severity === "contrast"
    }];
  },
  messageContent: "p-toast-message-content",
  messageIcon: function(e) {
    var o = e.props;
    return ["p-toast-message-icon", h(h(h(h({}, o.infoIcon, o.message.severity === "info"), o.warnIcon, o.message.severity === "warn"), o.errorIcon, o.message.severity === "error"), o.successIcon, o.message.severity === "success")];
  },
  messageText: "p-toast-message-text",
  summary: "p-toast-summary",
  detail: "p-toast-detail",
  closeButton: "p-toast-close-button",
  closeIcon: "p-toast-close-icon"
}, at = N.extend({
  name: "toast",
  style: et,
  classes: rt,
  inlineStyles: st
}), w = {
  name: "ExclamationTriangleIcon",
  extends: _
};
function it(t) {
  return dt(t) || ut(t) || ct(t) || lt();
}
function lt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ct(t, e) {
  if (t) {
    if (typeof t == "string") return S(t, e);
    var o = {}.toString.call(t).slice(8, -1);
    return o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set" ? Array.from(t) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? S(t, e) : void 0;
  }
}
function ut(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function dt(t) {
  if (Array.isArray(t)) return S(t);
}
function S(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var o = 0, n = Array(e); o < e; o++) n[o] = t[o];
  return n;
}
function mt(t, e, o, n, i, s) {
  return r(), l("svg", a({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), it(e[0] || (e[0] = [u("path", {
    d: "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",
    fill: "currentColor"
  }, null, -1), u("path", {
    d: "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",
    fill: "currentColor"
  }, null, -1), u("path", {
    d: "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
w.render = mt;
var I = {
  name: "InfoCircleIcon",
  extends: _
};
function ft(t) {
  return bt(t) || gt(t) || yt(t) || pt();
}
function pt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yt(t, e) {
  if (t) {
    if (typeof t == "string") return k(t, e);
    var o = {}.toString.call(t).slice(8, -1);
    return o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set" ? Array.from(t) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? k(t, e) : void 0;
  }
}
function gt(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function bt(t) {
  if (Array.isArray(t)) return k(t);
}
function k(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var o = 0, n = Array(e); o < e; o++) n[o] = t[o];
  return n;
}
function ht(t, e, o, n, i, s) {
  return r(), l("svg", a({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), ft(e[0] || (e[0] = [u("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
I.render = ht;
var vt = {
  name: "BaseToast",
  extends: $,
  props: {
    group: {
      type: String,
      default: null
    },
    position: {
      type: String,
      default: "top-right"
    },
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    breakpoints: {
      type: Object,
      default: null
    },
    closeIcon: {
      type: String,
      default: void 0
    },
    infoIcon: {
      type: String,
      default: void 0
    },
    warnIcon: {
      type: String,
      default: void 0
    },
    errorIcon: {
      type: String,
      default: void 0
    },
    successIcon: {
      type: String,
      default: void 0
    },
    closeButtonProps: {
      type: null,
      default: null
    },
    onMouseEnter: {
      type: Function,
      default: void 0
    },
    onMouseLeave: {
      type: Function,
      default: void 0
    },
    onClick: {
      type: Function,
      default: void 0
    }
  },
  style: at,
  provide: function() {
    return {
      $pcToast: this,
      $parentInstance: this
    };
  }
};
function f(t) {
  "@babel/helpers - typeof";
  return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, f(t);
}
function Ct(t, e, o) {
  return (e = wt(e)) in t ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = o, t;
}
function wt(t) {
  var e = St(t, "string");
  return f(e) == "symbol" ? e : e + "";
}
function St(t, e) {
  if (f(t) != "object" || !t) return t;
  var o = t[Symbol.toPrimitive];
  if (o !== void 0) {
    var n = o.call(t, e);
    if (f(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Z = {
  name: "ToastMessage",
  hostName: "Toast",
  extends: $,
  emits: ["close"],
  closeTimeout: null,
  createdAt: null,
  lifeRemaining: null,
  props: {
    message: {
      type: null,
      default: null
    },
    templates: {
      type: Object,
      default: null
    },
    closeIcon: {
      type: String,
      default: null
    },
    infoIcon: {
      type: String,
      default: null
    },
    warnIcon: {
      type: String,
      default: null
    },
    errorIcon: {
      type: String,
      default: null
    },
    successIcon: {
      type: String,
      default: null
    },
    closeButtonProps: {
      type: null,
      default: null
    },
    onMouseEnter: {
      type: Function,
      default: void 0
    },
    onMouseLeave: {
      type: Function,
      default: void 0
    },
    onClick: {
      type: Function,
      default: void 0
    }
  },
  mounted: function() {
    this.message.life && (this.lifeRemaining = this.message.life, this.startTimeout());
  },
  beforeUnmount: function() {
    this.clearCloseTimeout();
  },
  methods: {
    startTimeout: function() {
      var e = this;
      this.createdAt = (/* @__PURE__ */ new Date()).valueOf(), this.closeTimeout = setTimeout(function() {
        e.close({
          message: e.message,
          type: "life-end"
        });
      }, this.lifeRemaining);
    },
    close: function(e) {
      this.$emit("close", e);
    },
    onCloseClick: function() {
      this.clearCloseTimeout(), this.close({
        message: this.message,
        type: "close"
      });
    },
    clearCloseTimeout: function() {
      this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = null);
    },
    onMessageClick: function(e) {
      var o;
      (o = this.onClick) === null || o === void 0 || o.call(this, {
        originalEvent: e,
        message: this.message
      });
    },
    handleMouseEnter: function(e) {
      if (this.onMouseEnter) {
        if (this.onMouseEnter({
          originalEvent: e,
          message: this.message
        }), e.defaultPrevented)
          return;
        this.message.life && (this.lifeRemaining = this.createdAt + this.lifeRemaining - (/* @__PURE__ */ new Date()).valueOf(), this.createdAt = null, this.clearCloseTimeout());
      }
    },
    handleMouseLeave: function(e) {
      if (this.onMouseLeave) {
        if (this.onMouseLeave({
          originalEvent: e,
          message: this.message
        }), e.defaultPrevented)
          return;
        this.message.life && this.startTimeout();
      }
    }
  },
  computed: {
    iconComponent: function() {
      return {
        info: !this.infoIcon && I,
        success: !this.successIcon && A,
        warn: !this.warnIcon && w,
        error: !this.errorIcon && x
      }[this.message.severity];
    },
    closeAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    },
    dataP: function() {
      return D(Ct({}, this.message.severity, this.message.severity));
    }
  },
  components: {
    TimesIcon: Q,
    InfoCircleIcon: I,
    CheckIcon: A,
    ExclamationTriangleIcon: w,
    TimesCircleIcon: x
  },
  directives: {
    ripple: tt
  }
};
function p(t) {
  "@babel/helpers - typeof";
  return p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, p(t);
}
function L(t, e) {
  var o = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), o.push.apply(o, n);
  }
  return o;
}
function B(t) {
  for (var e = 1; e < arguments.length; e++) {
    var o = arguments[e] != null ? arguments[e] : {};
    e % 2 ? L(Object(o), !0).forEach(function(n) {
      It(t, n, o[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : L(Object(o)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
    });
  }
  return t;
}
function It(t, e, o) {
  return (e = kt(e)) in t ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = o, t;
}
function kt(t) {
  var e = Pt(t, "string");
  return p(e) == "symbol" ? e : e + "";
}
function Pt(t, e) {
  if (p(t) != "object" || !t) return t;
  var o = t[Symbol.toPrimitive];
  if (o !== void 0) {
    var n = o.call(t, e);
    if (p(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Tt = ["data-p"], At = ["data-p"], jt = ["data-p"], Et = ["data-p"], Ot = ["aria-label", "data-p"];
function Mt(t, e, o, n, i, s) {
  var v = H("ripple");
  return r(), l("div", a({
    class: [t.cx("message"), o.message.styleClass],
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    "data-p": s.dataP
  }, t.ptm("message"), {
    onClick: e[1] || (e[1] = function() {
      return s.onMessageClick && s.onMessageClick.apply(s, arguments);
    }),
    onMouseenter: e[2] || (e[2] = function() {
      return s.handleMouseEnter && s.handleMouseEnter.apply(s, arguments);
    }),
    onMouseleave: e[3] || (e[3] = function() {
      return s.handleMouseLeave && s.handleMouseLeave.apply(s, arguments);
    })
  }), [o.templates.container ? (r(), d(b(o.templates.container), {
    key: 0,
    message: o.message,
    closeCallback: s.onCloseClick
  }, null, 8, ["message", "closeCallback"])) : (r(), l("div", a({
    key: 1,
    class: [t.cx("messageContent"), o.message.contentStyleClass]
  }, t.ptm("messageContent")), [o.templates.message ? (r(), d(b(o.templates.message), {
    key: 1,
    message: o.message
  }, null, 8, ["message"])) : (r(), l(z, {
    key: 0
  }, [(r(), d(b(o.templates.messageicon ? o.templates.messageicon : o.templates.icon ? o.templates.icon : s.iconComponent && s.iconComponent.name ? s.iconComponent : "span"), a({
    class: t.cx("messageIcon")
  }, t.ptm("messageIcon")), null, 16, ["class"])), u("div", a({
    class: t.cx("messageText"),
    "data-p": s.dataP
  }, t.ptm("messageText")), [u("span", a({
    class: t.cx("summary"),
    "data-p": s.dataP
  }, t.ptm("summary")), E(o.message.summary), 17, jt), o.message.detail ? (r(), l("div", a({
    key: 0,
    class: t.cx("detail"),
    "data-p": s.dataP
  }, t.ptm("detail")), E(o.message.detail), 17, Et)) : j("", !0)], 16, At)], 64)), o.message.closable !== !1 ? (r(), l("div", W(a({
    key: 2
  }, t.ptm("buttonContainer"))), [X((r(), l("button", a({
    class: t.cx("closeButton"),
    type: "button",
    "aria-label": s.closeAriaLabel,
    onClick: e[0] || (e[0] = function() {
      return s.onCloseClick && s.onCloseClick.apply(s, arguments);
    }),
    autofocus: "",
    "data-p": s.dataP
  }, B(B({}, o.closeButtonProps), t.ptm("closeButton"))), [(r(), d(b(o.templates.closeicon || "TimesIcon"), a({
    class: [t.cx("closeIcon"), o.closeIcon]
  }, t.ptm("closeIcon")), null, 16, ["class"]))], 16, Ot)), [[v]])], 16)) : j("", !0)], 16))], 16, Tt);
}
Z.render = Mt;
function y(t) {
  "@babel/helpers - typeof";
  return y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, y(t);
}
function xt(t, e, o) {
  return (e = Lt(e)) in t ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = o, t;
}
function Lt(t) {
  var e = Bt(t, "string");
  return y(e) == "symbol" ? e : e + "";
}
function Bt(t, e) {
  if (y(t) != "object" || !t) return t;
  var o = t[Symbol.toPrimitive];
  if (o !== void 0) {
    var n = o.call(t, e);
    if (y(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Rt(t) {
  return Dt(t) || zt(t) || _t(t) || $t();
}
function $t() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _t(t, e) {
  if (t) {
    if (typeof t == "string") return P(t, e);
    var o = {}.toString.call(t).slice(8, -1);
    return o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set" ? Array.from(t) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? P(t, e) : void 0;
  }
}
function zt(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Dt(t) {
  if (Array.isArray(t)) return P(t);
}
function P(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var o = 0, n = Array(e); o < e; o++) n[o] = t[o];
  return n;
}
var Zt = 0, Vt = {
  name: "Toast",
  extends: vt,
  inheritAttrs: !1,
  emits: ["close", "life-end"],
  data: function() {
    return {
      messages: []
    };
  },
  styleElement: null,
  mounted: function() {
    c.on("add", this.onAdd), c.on("remove", this.onRemove), c.on("remove-group", this.onRemoveGroup), c.on("remove-all-groups", this.onRemoveAllGroups), this.breakpoints && this.createStyle();
  },
  beforeUnmount: function() {
    this.destroyStyle(), this.$refs.container && this.autoZIndex && C.clear(this.$refs.container), c.off("add", this.onAdd), c.off("remove", this.onRemove), c.off("remove-group", this.onRemoveGroup), c.off("remove-all-groups", this.onRemoveAllGroups);
  },
  methods: {
    add: function(e) {
      e.id == null && (e.id = Zt++), this.messages = [].concat(Rt(this.messages), [e]);
    },
    remove: function(e) {
      var o = this.messages.findIndex(function(n) {
        return n.id === e.message.id;
      });
      o !== -1 && (this.messages.splice(o, 1), this.$emit(e.type, {
        message: e.message
      }));
    },
    onAdd: function(e) {
      this.group == e.group && this.add(e);
    },
    onRemove: function(e) {
      this.remove({
        message: e,
        type: "close"
      });
    },
    onRemoveGroup: function(e) {
      this.group === e && (this.messages = []);
    },
    onRemoveAllGroups: function() {
      var e = this;
      this.messages.forEach(function(o) {
        return e.$emit("close", {
          message: o
        });
      }), this.messages = [];
    },
    onEnter: function() {
      this.autoZIndex && C.set("modal", this.$refs.container, this.baseZIndex || this.$primevue.config.zIndex.modal);
    },
    onLeave: function() {
      var e = this;
      this.$refs.container && this.autoZIndex && K(this.messages) && setTimeout(function() {
        C.clear(e.$refs.container);
      }, 200);
    },
    createStyle: function() {
      if (!this.styleElement && !this.isUnstyled) {
        var e;
        this.styleElement = document.createElement("style"), this.styleElement.type = "text/css", F(this.styleElement, "nonce", (e = this.$primevue) === null || e === void 0 || (e = e.config) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce), document.head.appendChild(this.styleElement);
        var o = "";
        for (var n in this.breakpoints) {
          var i = "";
          for (var s in this.breakpoints[n])
            i += s + ":" + this.breakpoints[n][s] + "!important;";
          o += `
                        @media screen and (max-width: `.concat(n, `) {
                            .p-toast[`).concat(this.$attrSelector, `] {
                                `).concat(i, `
                            }
                        }
                    `);
        }
        this.styleElement.innerHTML = o;
      }
    },
    destroyStyle: function() {
      this.styleElement && (document.head.removeChild(this.styleElement), this.styleElement = null);
    }
  },
  computed: {
    dataP: function() {
      return D(xt({}, this.position, this.position));
    }
  },
  components: {
    ToastMessage: Z,
    Portal: U
  }
};
function g(t) {
  "@babel/helpers - typeof";
  return g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, g(t);
}
function R(t, e) {
  var o = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), o.push.apply(o, n);
  }
  return o;
}
function Gt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var o = arguments[e] != null ? arguments[e] : {};
    e % 2 ? R(Object(o), !0).forEach(function(n) {
      Nt(t, n, o[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : R(Object(o)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
    });
  }
  return t;
}
function Nt(t, e, o) {
  return (e = Ft(e)) in t ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = o, t;
}
function Ft(t) {
  var e = Kt(t, "string");
  return g(e) == "symbol" ? e : e + "";
}
function Kt(t, e) {
  if (g(t) != "object" || !t) return t;
  var o = t[Symbol.toPrimitive];
  if (o !== void 0) {
    var n = o.call(t, e);
    if (g(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Ut = ["data-p"];
function Ht(t, e, o, n, i, s) {
  var v = O("ToastMessage"), V = O("Portal");
  return r(), d(V, null, {
    default: M(function() {
      return [u("div", a({
        ref: "container",
        class: t.cx("root"),
        style: t.sx("root", !0, {
          position: t.position
        }),
        "data-p": s.dataP
      }, t.ptmi("root")), [J(Y, a({
        name: "p-toast-message",
        tag: "div",
        onEnter: s.onEnter,
        onLeave: s.onLeave
      }, Gt({}, t.ptm("transition"))), {
        default: M(function() {
          return [(r(!0), l(z, null, q(i.messages, function(T) {
            return r(), d(v, {
              key: T.id,
              message: T,
              templates: t.$slots,
              closeIcon: t.closeIcon,
              infoIcon: t.infoIcon,
              warnIcon: t.warnIcon,
              errorIcon: t.errorIcon,
              successIcon: t.successIcon,
              closeButtonProps: t.closeButtonProps,
              onMouseEnter: t.onMouseEnter,
              onMouseLeave: t.onMouseLeave,
              onClick: t.onClick,
              unstyled: t.unstyled,
              onClose: e[0] || (e[0] = function(G) {
                return s.remove(G);
              }),
              pt: t.pt
            }, null, 8, ["message", "templates", "closeIcon", "infoIcon", "warnIcon", "errorIcon", "successIcon", "closeButtonProps", "onMouseEnter", "onMouseLeave", "onClick", "unstyled", "pt"]);
          }), 128))];
        }),
        _: 1
      }, 16, ["onEnter", "onLeave"])], 16, Ut)];
    }),
    _: 1
  });
}
Vt.render = Ht;
export {
  Vt as s
};
