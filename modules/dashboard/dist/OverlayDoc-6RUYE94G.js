import { B as M, R as _e, z as se, v as O, C as _, t as F, P as Ae, W as U, w as Be, $ as De, U as V, x as Te, y as Re, Y as Z, Q as A, l as ae, A as R, c as B, D as ce, E as I, r as pe, _ as ze, H as He, S as Pe, a as je, N as Ke } from "./main-BQAWsb7p.js";
import { B as Ie, s as K, f as Me, R as Ue } from "./index-BLujVrVi.js";
import { x as k } from "./index-C2FJQt9j.js";
import { C as Y, O as z } from "./index-BUd9L3q2.js";
import { s as G } from "./index-DiD6QwsT.js";
import { F as J } from "./index-BXmaT7po.js";
import { s as Q } from "./index-DqMIWRbA.js";
import { s as X } from "./index-Cq_aB1oA.js";
import { E as H, ae as ee, G as D, H as h, I as f, a, ab as te, m, a7 as P, a2 as S, a1 as w, a8 as g, F as fe, a3 as l, J as N, p as me, a6 as ne, ad as le, X as L, a0 as qe, a5 as Fe } from "./runtime-dom.esm-bundler-C71lIG0B.js";
import { s as Ve } from "./index-GoqIfWV4.js";
import { u as We, b as Ne } from "./index-DAZmPku1.js";
import { s as Ze } from "./index-Cu1r2TBO.js";
import { s as Ye } from "./index-C4coGOho.js";
import { s as Ge } from "./index-EudqbkvZ.js";
import { s as Je } from "./index-iDGkFzAn.js";
import { P as Qe } from "./ProductService-bZb9w0YO.js";
var Xe = `
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`, et = {
  root: "p-tooltip p-component",
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
}, tt = M.extend({
  name: "tooltip-directive",
  style: Xe,
  classes: et
}), nt = Ie.extend({
  style: tt
});
function it(t, e) {
  return at(t) || st(t, e) || rt(t, e) || ot();
}
function ot() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rt(t, e) {
  if (t) {
    if (typeof t == "string") return de(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? de(t, e) : void 0;
  }
}
function de(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
  return i;
}
function st(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var i, r, o, d, v = [], p = !0, c = !1;
    try {
      if (o = (n = n.call(t)).next, e !== 0) for (; !(p = (i = o.call(n)).done) && (v.push(i.value), v.length !== e); p = !0) ;
    } catch (b) {
      c = !0, r = b;
    } finally {
      try {
        if (!p && n.return != null && (d = n.return(), Object(d) !== d)) return;
      } finally {
        if (c) throw r;
      }
    }
    return v;
  }
}
function at(t) {
  if (Array.isArray(t)) return t;
}
function ue(t, e, n) {
  return (e = lt(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function lt(t) {
  var e = dt(t, "string");
  return x(e) == "symbol" ? e : e + "";
}
function dt(t, e) {
  if (x(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(t, e);
    if (x(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function x(t) {
  "@babel/helpers - typeof";
  return x = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, x(t);
}
var ut = nt.extend("tooltip", {
  beforeMount: function(e, n) {
    var i, r = this.getTarget(e);
    if (r.$_ptooltipModifiers = this.getModifiers(n), n.value) {
      if (typeof n.value == "string")
        r.$_ptooltipValue = n.value, r.$_ptooltipDisabled = !1, r.$_ptooltipEscape = !0, r.$_ptooltipClass = null, r.$_ptooltipFitContent = !0, r.$_ptooltipIdAttr = K("pv_id") + "_tooltip", r.$_ptooltipShowDelay = 0, r.$_ptooltipHideDelay = 0, r.$_ptooltipAutoHide = !0;
      else if (x(n.value) === "object" && n.value) {
        if (ae(n.value.value) || n.value.value.trim() === "") return;
        r.$_ptooltipValue = n.value.value, r.$_ptooltipDisabled = !!n.value.disabled === n.value.disabled ? n.value.disabled : !1, r.$_ptooltipEscape = !!n.value.escape === n.value.escape ? n.value.escape : !0, r.$_ptooltipClass = n.value.class || "", r.$_ptooltipFitContent = !!n.value.fitContent === n.value.fitContent ? n.value.fitContent : !0, r.$_ptooltipIdAttr = n.value.id || K("pv_id") + "_tooltip", r.$_ptooltipShowDelay = n.value.showDelay || 0, r.$_ptooltipHideDelay = n.value.hideDelay || 0, r.$_ptooltipAutoHide = !!n.value.autoHide === n.value.autoHide ? n.value.autoHide : !0;
      }
    } else return;
    r.$_ptooltipZIndex = (i = n.instance.$primevue) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.zIndex) === null || i === void 0 ? void 0 : i.tooltip, this.bindEvents(r, n), e.setAttribute("data-pd-tooltip", !0);
  },
  updated: function(e, n) {
    var i = this.getTarget(e);
    if (i.$_ptooltipModifiers = this.getModifiers(n), this.unbindEvents(i), !!n.value) {
      if (typeof n.value == "string")
        i.$_ptooltipValue = n.value, i.$_ptooltipDisabled = !1, i.$_ptooltipEscape = !0, i.$_ptooltipClass = null, i.$_ptooltipIdAttr = i.$_ptooltipIdAttr || K("pv_id") + "_tooltip", i.$_ptooltipShowDelay = 0, i.$_ptooltipHideDelay = 0, i.$_ptooltipAutoHide = !0, this.bindEvents(i, n);
      else if (x(n.value) === "object" && n.value)
        if (ae(n.value.value) || n.value.value.trim() === "") {
          this.unbindEvents(i, n);
          return;
        } else
          i.$_ptooltipValue = n.value.value, i.$_ptooltipDisabled = !!n.value.disabled === n.value.disabled ? n.value.disabled : !1, i.$_ptooltipEscape = !!n.value.escape === n.value.escape ? n.value.escape : !0, i.$_ptooltipClass = n.value.class || "", i.$_ptooltipFitContent = !!n.value.fitContent === n.value.fitContent ? n.value.fitContent : !0, i.$_ptooltipIdAttr = n.value.id || i.$_ptooltipIdAttr || K("pv_id") + "_tooltip", i.$_ptooltipShowDelay = n.value.showDelay || 0, i.$_ptooltipHideDelay = n.value.hideDelay || 0, i.$_ptooltipAutoHide = !!n.value.autoHide === n.value.autoHide ? n.value.autoHide : !0, this.bindEvents(i, n);
    }
  },
  unmounted: function(e, n) {
    var i = this.getTarget(e);
    this.hide(e, 0), this.remove(i), this.unbindEvents(i, n), i.$_ptooltipScrollHandler && (i.$_ptooltipScrollHandler.destroy(), i.$_ptooltipScrollHandler = null);
  },
  timer: void 0,
  methods: {
    bindEvents: function(e, n) {
      var i = this, r = e.$_ptooltipModifiers;
      r.focus ? (e.$_ptooltipFocusEvent = function(o) {
        return i.onFocus(o, n);
      }, e.$_ptooltipBlurEvent = this.onBlur.bind(this), e.addEventListener("focus", e.$_ptooltipFocusEvent), e.addEventListener("blur", e.$_ptooltipBlurEvent)) : (e.$_ptooltipMouseEnterEvent = function(o) {
        return i.onMouseEnter(o, n);
      }, e.$_ptooltipMouseLeaveEvent = this.onMouseLeave.bind(this), e.$_ptooltipClickEvent = this.onClick.bind(this), e.addEventListener("mouseenter", e.$_ptooltipMouseEnterEvent), e.addEventListener("mouseleave", e.$_ptooltipMouseLeaveEvent), e.addEventListener("click", e.$_ptooltipClickEvent)), e.$_ptooltipKeydownEvent = this.onKeydown.bind(this), e.addEventListener("keydown", e.$_ptooltipKeydownEvent), e.$_pWindowResizeEvent = this.onWindowResize.bind(this, e);
    },
    unbindEvents: function(e) {
      var n = e.$_ptooltipModifiers;
      n.focus ? (e.removeEventListener("focus", e.$_ptooltipFocusEvent), e.$_ptooltipFocusEvent = null, e.removeEventListener("blur", e.$_ptooltipBlurEvent), e.$_ptooltipBlurEvent = null) : (e.removeEventListener("mouseenter", e.$_ptooltipMouseEnterEvent), e.$_ptooltipMouseEnterEvent = null, e.removeEventListener("mouseleave", e.$_ptooltipMouseLeaveEvent), e.$_ptooltipMouseLeaveEvent = null, e.removeEventListener("click", e.$_ptooltipClickEvent), e.$_ptooltipClickEvent = null), e.removeEventListener("keydown", e.$_ptooltipKeydownEvent), window.removeEventListener("resize", e.$_pWindowResizeEvent), e.$_ptooltipId && this.remove(e);
    },
    bindScrollListener: function(e) {
      var n = this;
      e.$_ptooltipScrollHandler || (e.$_ptooltipScrollHandler = new Y(e, function() {
        n.hide(e);
      })), e.$_ptooltipScrollHandler.bindScrollListener();
    },
    unbindScrollListener: function(e) {
      e.$_ptooltipScrollHandler && e.$_ptooltipScrollHandler.unbindScrollListener();
    },
    onMouseEnter: function(e, n) {
      var i = e.currentTarget, r = i.$_ptooltipShowDelay;
      this.show(i, n, r);
    },
    onMouseLeave: function(e) {
      var n = e.currentTarget, i = n.$_ptooltipHideDelay, r = n.$_ptooltipAutoHide;
      if (r)
        this.hide(n, i);
      else {
        var o = A(e.target, "data-pc-name") === "tooltip" || A(e.target, "data-pc-section") === "arrow" || A(e.target, "data-pc-section") === "text" || A(e.relatedTarget, "data-pc-name") === "tooltip" || A(e.relatedTarget, "data-pc-section") === "arrow" || A(e.relatedTarget, "data-pc-section") === "text";
        !o && this.hide(n, i);
      }
    },
    onFocus: function(e, n) {
      var i = e.currentTarget, r = i.$_ptooltipShowDelay;
      this.show(i, n, r);
    },
    onBlur: function(e) {
      var n = e.currentTarget, i = n.$_ptooltipHideDelay;
      this.hide(n, i);
    },
    onClick: function(e) {
      var n = e.currentTarget, i = n.$_ptooltipHideDelay;
      this.hide(n, i);
    },
    onKeydown: function(e) {
      var n = e.currentTarget, i = n.$_ptooltipHideDelay;
      e.code === "Escape" && this.hide(e.currentTarget, i);
    },
    onWindowResize: function(e) {
      Z() || this.hide(e), window.removeEventListener("resize", e.$_pWindowResizeEvent);
    },
    tooltipActions: function(e, n) {
      if (!(e.$_ptooltipDisabled || !Te(e) || !e.$_ptooltipPendingShow)) {
        e.$_ptooltipPendingShow = !1;
        var i = this.create(e, n);
        this.align(e), !this.isUnstyled() && Re(i, 250);
        var r = this;
        window.addEventListener("resize", e.$_pWindowResizeEvent), i.addEventListener("mouseleave", function o() {
          r.hide(e), i.removeEventListener("mouseleave", o), e.removeEventListener("mouseenter", e.$_ptooltipMouseEnterEvent), setTimeout(function() {
            return e.addEventListener("mouseenter", e.$_ptooltipMouseEnterEvent);
          }, 50);
        }), this.bindScrollListener(e), k.set("tooltip", i, e.$_ptooltipZIndex);
      }
    },
    show: function(e, n, i) {
      var r = this;
      i !== void 0 ? (this.timer = setTimeout(function() {
        return r.tooltipActions(e, n);
      }, i), e.$_ptooltipPendingShow = !0) : (this.tooltipActions(e, n), e.$_ptooltipPendingShow = !1);
    },
    tooltipRemoval: function(e) {
      this.remove(e), this.unbindScrollListener(e), window.removeEventListener("resize", e.$_pWindowResizeEvent);
    },
    hide: function(e, n) {
      var i = this;
      clearTimeout(this.timer), e.$_ptooltipPendingShow = !1, n !== void 0 ? setTimeout(function() {
        return i.tooltipRemoval(e);
      }, n) : this.tooltipRemoval(e);
    },
    getTooltipElement: function(e) {
      return document.getElementById(e.$_ptooltipId);
    },
    getArrowElement: function(e) {
      var n = this.getTooltipElement(e);
      return se(n, '[data-pc-section="arrow"]');
    },
    create: function(e) {
      var n = e.$_ptooltipModifiers, i = V("div", {
        class: !this.isUnstyled() && this.cx("arrow"),
        "p-bind": this.ptm("arrow", {
          context: n
        })
      }), r = V("div", {
        class: !this.isUnstyled() && this.cx("text"),
        "p-bind": this.ptm("text", {
          context: n
        })
      });
      e.$_ptooltipEscape ? (r.innerHTML = "", r.appendChild(document.createTextNode(e.$_ptooltipValue))) : r.innerHTML = e.$_ptooltipValue;
      var o = V("div", ue(ue({
        id: e.$_ptooltipIdAttr,
        role: "tooltip",
        style: {
          display: "inline-block",
          width: e.$_ptooltipFitContent ? "fit-content" : void 0,
          pointerEvents: !this.isUnstyled() && e.$_ptooltipAutoHide && "none"
        },
        class: [!this.isUnstyled() && this.cx("root"), e.$_ptooltipClass]
      }, this.$attrSelector, ""), "p-bind", this.ptm("root", {
        context: n
      })), i, r);
      return document.body.appendChild(o), e.$_ptooltipId = o.id, this.$el = o, o;
    },
    remove: function(e) {
      if (e) {
        var n = this.getTooltipElement(e);
        n && n.parentElement && (k.clear(n), document.body.removeChild(n)), e.$_ptooltipId = null;
      }
    },
    align: function(e) {
      var n = e.$_ptooltipModifiers;
      n.top ? (this.alignTop(e), this.isOutOfBounds(e) && (this.alignBottom(e), this.isOutOfBounds(e) && this.alignTop(e))) : n.left ? (this.alignLeft(e), this.isOutOfBounds(e) && (this.alignRight(e), this.isOutOfBounds(e) && (this.alignTop(e), this.isOutOfBounds(e) && (this.alignBottom(e), this.isOutOfBounds(e) && this.alignLeft(e))))) : n.bottom ? (this.alignBottom(e), this.isOutOfBounds(e) && (this.alignTop(e), this.isOutOfBounds(e) && this.alignBottom(e))) : (this.alignRight(e), this.isOutOfBounds(e) && (this.alignLeft(e), this.isOutOfBounds(e) && (this.alignTop(e), this.isOutOfBounds(e) && (this.alignBottom(e), this.isOutOfBounds(e) && this.alignRight(e)))));
    },
    getHostOffset: function(e) {
      var n = e.getBoundingClientRect(), i = n.left + Be(), r = n.top + De();
      return {
        left: i,
        top: r
      };
    },
    alignRight: function(e) {
      this.preAlign(e, "right");
      var n = this.getTooltipElement(e), i = this.getArrowElement(e), r = this.getHostOffset(e), o = r.left + O(e), d = r.top + (_(e) - _(n)) / 2;
      n.style.left = o + "px", n.style.top = d + "px", i.style.top = "50%", i.style.right = null, i.style.bottom = null, i.style.left = "0";
    },
    alignLeft: function(e) {
      this.preAlign(e, "left");
      var n = this.getTooltipElement(e), i = this.getArrowElement(e), r = this.getHostOffset(e), o = r.left - O(n), d = r.top + (_(e) - _(n)) / 2;
      n.style.left = o + "px", n.style.top = d + "px", i.style.top = "50%", i.style.right = "0", i.style.bottom = null, i.style.left = null;
    },
    alignTop: function(e) {
      this.preAlign(e, "top");
      var n = this.getTooltipElement(e), i = this.getArrowElement(e), r = O(n), o = O(e), d = F(), v = d.width, p = this.getHostOffset(e), c = p.left + (o - r) / 2, b = p.top - _(n);
      c < 0 ? c = 0 : c + r > v && (c = Math.floor(p.left + o - r)), n.style.left = c + "px", n.style.top = b + "px";
      var C = p.left - this.getHostOffset(n).left + o / 2;
      i.style.top = null, i.style.right = null, i.style.bottom = "0", i.style.left = C + "px";
    },
    alignBottom: function(e) {
      this.preAlign(e, "bottom");
      var n = this.getTooltipElement(e), i = this.getArrowElement(e), r = O(n), o = O(e), d = F(), v = d.width, p = this.getHostOffset(e), c = p.left + (o - r) / 2, b = p.top + _(e);
      c < 0 ? c = 0 : c + r > v && (c = Math.floor(p.left + o - r)), n.style.left = c + "px", n.style.top = b + "px";
      var C = p.left - this.getHostOffset(n).left + o / 2;
      i.style.top = "0", i.style.right = null, i.style.bottom = null, i.style.left = C + "px";
    },
    preAlign: function(e, n) {
      var i = this.getTooltipElement(e);
      i.style.left = "-999px", i.style.top = "-999px", Ae(i, "p-tooltip-".concat(i.$_ptooltipPosition)), !this.isUnstyled() && U(i, "p-tooltip-".concat(n)), i.$_ptooltipPosition = n, i.setAttribute("data-p-position", n);
    },
    isOutOfBounds: function(e) {
      var n = this.getTooltipElement(e), i = n.getBoundingClientRect(), r = i.top, o = i.left, d = O(n), v = _(n), p = F();
      return o + d > p.width || o < 0 || r < 0 || r + v > p.height;
    },
    getTarget: function(e) {
      var n;
      return _e(e, "p-inputwrapper") && (n = se(e, "input")) !== null && n !== void 0 ? n : e;
    },
    getModifiers: function(e) {
      return e.modifiers && Object.keys(e.modifiers).length ? e.modifiers : e.arg && x(e.arg) === "object" ? Object.entries(e.arg).reduce(function(n, i) {
        var r = it(i, 2), o = r[0], d = r[1];
        return (o === "event" || o === "position") && (n[d] = !0), n;
      }, {}) : {};
    }
  }
}), ct = `
    .p-confirmpopup {
        position: absolute;
        margin-top: dt('confirmpopup.gutter');
        top: 0;
        left: 0;
        background: dt('confirmpopup.background');
        color: dt('confirmpopup.color');
        border: 1px solid dt('confirmpopup.border.color');
        border-radius: dt('confirmpopup.border.radius');
        box-shadow: dt('confirmpopup.shadow');
        will-change: transform;
    }

    .p-confirmpopup-content {
        display: flex;
        align-items: center;
        padding: dt('confirmpopup.content.padding');
        gap: dt('confirmpopup.content.gap');
    }

    .p-confirmpopup-icon {
        font-size: dt('confirmpopup.icon.size');
        width: dt('confirmpopup.icon.size');
        height: dt('confirmpopup.icon.size');
        color: dt('confirmpopup.icon.color');
    }

    .p-confirmpopup-footer {
        display: flex;
        justify-content: flex-end;
        gap: dt('confirmpopup.footer.gap');
        padding: dt('confirmpopup.footer.padding');
    }

    .p-confirmpopup-footer button {
        width: auto;
    }

    .p-confirmpopup-footer button:last-child {
        margin: 0;
    }

    .p-confirmpopup-flipped {
        margin-block-start: calc(dt('confirmpopup.gutter') * -1);
        margin-block-end: dt('confirmpopup.gutter');
    }

    .p-confirmpopup:after,
    .p-confirmpopup:before {
        bottom: 100%;
        left: calc(dt('confirmpopup.arrow.offset') + dt('confirmpopup.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-confirmpopup:after {
        border-width: calc(dt('confirmpopup.gutter') - 2px);
        margin-left: calc(-1 * (dt('confirmpopup.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.background');
    }

    .p-confirmpopup:before {
        border-width: dt('confirmpopup.gutter');
        margin-left: calc(-1 * dt('confirmpopup.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.border.color');
    }

    .p-confirmpopup-flipped:after,
    .p-confirmpopup-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-confirmpopup-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.background');
    }

    .p-confirmpopup-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.border.color');
    }
`, pt = {
  root: "p-confirmpopup p-component",
  content: "p-confirmpopup-content",
  icon: "p-confirmpopup-icon",
  message: "p-confirmpopup-message",
  footer: "p-confirmpopup-footer",
  pcRejectButton: "p-confirmpopup-reject-button",
  pcAcceptButton: "p-confirmpopup-accept-button"
}, ft = M.extend({
  name: "confirmpopup",
  style: ct,
  classes: pt
}), mt = {
  name: "BaseConfirmPopup",
  extends: X,
  props: {
    group: String
  },
  style: ft,
  provide: function() {
    return {
      $pcConfirmPopup: this,
      $parentInstance: this
    };
  }
}, ve = {
  name: "ConfirmPopup",
  extends: mt,
  inheritAttrs: !1,
  data: function() {
    return {
      visible: !1,
      confirmation: null,
      autoFocusAccept: null,
      autoFocusReject: null,
      target: null
    };
  },
  target: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  container: null,
  confirmListener: null,
  closeListener: null,
  mounted: function() {
    var e = this;
    this.confirmListener = function(n) {
      n && n.group === e.group && (e.confirmation = n, e.target = n.target, e.confirmation.onShow && e.confirmation.onShow(), e.visible = !0);
    }, this.closeListener = function() {
      e.visible = !1, e.confirmation = null;
    }, R.on("confirm", this.confirmListener), R.on("close", this.closeListener);
  },
  beforeUnmount: function() {
    R.off("confirm", this.confirmListener), R.off("close", this.closeListener), this.unbindOutsideClickListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.unbindResizeListener(), this.container && (k.clear(this.container), this.container = null), this.target = null, this.confirmation = null;
  },
  methods: {
    accept: function() {
      this.confirmation.accept && this.confirmation.accept(), this.visible = !1;
    },
    reject: function() {
      this.confirmation.reject && this.confirmation.reject(), this.visible = !1;
    },
    onHide: function() {
      this.confirmation.onHide && this.confirmation.onHide(), this.visible = !1;
    },
    onAcceptKeydown: function(e) {
      (e.code === "Space" || e.code === "Enter" || e.code === "NumpadEnter") && (this.accept(), B(this.target), e.preventDefault());
    },
    onRejectKeydown: function(e) {
      (e.code === "Space" || e.code === "Enter" || e.code === "NumpadEnter") && (this.reject(), B(this.target), e.preventDefault());
    },
    onEnter: function(e) {
      this.autoFocusAccept = this.confirmation.defaultFocus === void 0 || this.confirmation.defaultFocus === "accept", this.autoFocusReject = this.confirmation.defaultFocus === "reject", this.target = this.target || document.activeElement, this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), k.set("overlay", e, this.$primevue.config.zIndex.overlay);
    },
    onAfterEnter: function() {
      this.focus();
    },
    onLeave: function() {
      this.autoFocusAccept = null, this.autoFocusReject = null, B(this.target), this.target = null, this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener();
    },
    onAfterLeave: function(e) {
      k.clear(e);
    },
    alignOverlay: function() {
      ce(this.container, this.target, !1);
      var e = I(this.container), n = I(this.target), i = 0;
      e.left < n.left && (i = n.left - e.left), this.container.style.setProperty(pe("confirmpopup.arrow.left").name, "".concat(i, "px")), e.top < n.top && (this.container.setAttribute("data-p-confirmpopup-flipped", "true"), !this.isUnstyled && U(this.container, "p-confirmpopup-flipped"));
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        e.visible && e.container && !e.container.contains(n.target) && !e.isTargetClicked(n) ? (e.confirmation.onHide && e.confirmation.onHide(), e.visible = !1) : e.alignOverlay();
      }, document.addEventListener("click", this.outsideClickListener));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var e = this;
      this.scrollHandler || (this.scrollHandler = new Y(this.target, function() {
        e.visible && (e.visible = !1);
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function() {
        e.visible && !Z() && (e.visible = !1);
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    focus: function() {
      var e = this.container.querySelector("[autofocus]");
      e && e.focus({
        preventScroll: !0
      });
    },
    isTargetClicked: function(e) {
      return this.target && (this.target === e.target || this.target.contains(e.target));
    },
    containerRef: function(e) {
      this.container = e;
    },
    onOverlayClick: function(e) {
      z.emit("overlay-click", {
        originalEvent: e,
        target: this.target
      });
    },
    onOverlayKeydown: function(e) {
      e.code === "Escape" && (R.emit("close", this.closeListener), B(this.target));
    }
  },
  computed: {
    message: function() {
      return this.confirmation ? this.confirmation.message : null;
    },
    acceptLabel: function() {
      if (this.confirmation) {
        var e, n = this.confirmation;
        return n.acceptLabel || ((e = n.acceptProps) === null || e === void 0 ? void 0 : e.label) || this.$primevue.config.locale.accept;
      }
      return this.$primevue.config.locale.accept;
    },
    rejectLabel: function() {
      if (this.confirmation) {
        var e, n = this.confirmation;
        return n.rejectLabel || ((e = n.rejectProps) === null || e === void 0 ? void 0 : e.label) || this.$primevue.config.locale.reject;
      }
      return this.$primevue.config.locale.reject;
    },
    acceptIcon: function() {
      var e;
      return this.confirmation ? this.confirmation.acceptIcon : (e = this.confirmation) !== null && e !== void 0 && e.acceptProps ? this.confirmation.acceptProps.icon : null;
    },
    rejectIcon: function() {
      var e;
      return this.confirmation ? this.confirmation.rejectIcon : (e = this.confirmation) !== null && e !== void 0 && e.rejectProps ? this.confirmation.rejectProps.icon : null;
    }
  },
  components: {
    Button: G,
    Portal: Q
  },
  directives: {
    focustrap: J
  }
}, vt = ["aria-modal"];
function ht(t, e, n, i, r, o) {
  var d = H("Button"), v = H("Portal"), p = ee("focustrap");
  return h(), D(v, null, {
    default: f(function() {
      return [a(te, m({
        name: "p-anchored-overlay",
        onEnter: o.onEnter,
        onAfterEnter: o.onAfterEnter,
        onLeave: o.onLeave,
        onAfterLeave: o.onAfterLeave
      }, t.ptm("transition")), {
        default: f(function() {
          var c, b, C;
          return [r.visible ? P((h(), w("div", m({
            key: 0,
            ref: o.containerRef,
            role: "alertdialog",
            class: t.cx("root"),
            "aria-modal": r.visible,
            onClick: e[2] || (e[2] = function() {
              return o.onOverlayClick && o.onOverlayClick.apply(o, arguments);
            }),
            onKeydown: e[3] || (e[3] = function() {
              return o.onOverlayKeydown && o.onOverlayKeydown.apply(o, arguments);
            })
          }, t.ptmi("root")), [t.$slots.container ? g(t.$slots, "container", {
            key: 0,
            message: r.confirmation,
            acceptCallback: o.accept,
            rejectCallback: o.reject
          }) : (h(), w(fe, {
            key: 1
          }, [t.$slots.message ? (h(), D(N(t.$slots.message), {
            key: 1,
            message: r.confirmation
          }, null, 8, ["message"])) : (h(), w("div", m({
            key: 0,
            class: t.cx("content")
          }, t.ptm("content")), [g(t.$slots, "icon", {}, function() {
            return [t.$slots.icon ? (h(), D(N(t.$slots.icon), {
              key: 0,
              class: me(t.cx("icon"))
            }, null, 8, ["class"])) : r.confirmation.icon ? (h(), w("span", m({
              key: 1,
              class: [r.confirmation.icon, t.cx("icon")]
            }, t.ptm("icon")), null, 16)) : S("", !0)];
          }), l("span", m({
            class: t.cx("message")
          }, t.ptm("message")), ne(r.confirmation.message), 17)], 16)), l("div", m({
            class: t.cx("footer")
          }, t.ptm("footer")), [a(d, m({
            class: [t.cx("pcRejectButton"), r.confirmation.rejectClass],
            autofocus: r.autoFocusReject,
            unstyled: t.unstyled,
            size: ((c = r.confirmation.rejectProps) === null || c === void 0 ? void 0 : c.size) || "small",
            text: ((b = r.confirmation.rejectProps) === null || b === void 0 ? void 0 : b.text) || !1,
            onClick: e[0] || (e[0] = function(E) {
              return o.reject();
            }),
            onKeydown: o.onRejectKeydown
          }, r.confirmation.rejectProps, {
            label: o.rejectLabel,
            pt: t.ptm("pcRejectButton")
          }), le({
            _: 2
          }, [o.rejectIcon || t.$slots.rejecticon ? {
            name: "icon",
            fn: f(function(E) {
              return [g(t.$slots, "rejecticon", {}, function() {
                return [l("span", m({
                  class: [o.rejectIcon, E.class]
                }, t.ptm("pcRejectButton").icon, {
                  "data-pc-section": "rejectbuttonicon"
                }), null, 16)];
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["class", "autofocus", "unstyled", "size", "text", "onKeydown", "label", "pt"]), a(d, m({
            class: [t.cx("pcAcceptButton"), r.confirmation.acceptClass],
            autofocus: r.autoFocusAccept,
            unstyled: t.unstyled,
            size: ((C = r.confirmation.acceptProps) === null || C === void 0 ? void 0 : C.size) || "small",
            onClick: e[1] || (e[1] = function(E) {
              return o.accept();
            }),
            onKeydown: o.onAcceptKeydown
          }, r.confirmation.acceptProps, {
            label: o.acceptLabel,
            pt: t.ptm("pcAcceptButton")
          }), le({
            _: 2
          }, [o.acceptIcon || t.$slots.accepticon ? {
            name: "icon",
            fn: f(function(E) {
              return [g(t.$slots, "accepticon", {}, function() {
                return [l("span", m({
                  class: [o.acceptIcon, E.class]
                }, t.ptm("pcAcceptButton").icon, {
                  "data-pc-section": "acceptbuttonicon"
                }), null, 16)];
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["class", "autofocus", "unstyled", "size", "onKeydown", "label", "pt"])], 16)], 64))], 16, vt)), [[p]]) : S("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  });
}
ve.render = ht;
var bt = `
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border-style: solid;
        border-color: dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-active {
        animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-left .p-drawer-leave-active {
        animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-right .p-drawer-enter-active {
        animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-right .p-drawer-leave-active {
        animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-top .p-drawer-enter-active {
        animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-top .p-drawer-leave-active {
        animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-bottom .p-drawer-enter-active {
        animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-bottom .p-drawer-leave-active {
        animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-full .p-drawer-enter-active {
        animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-full .p-drawer-leave-active {
        animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    
    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }

    @keyframes p-animate-drawer-enter-left {
        from {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-left {
        to {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-right {
        from {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-right {
        to {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-top {
        from {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-top {
        to {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-bottom {
        from {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-bottom {
        to {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-full {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-drawer-leave-full {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`, yt = {
  mask: function(e) {
    var n = e.position, i = e.modal;
    return {
      position: "fixed",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      display: "flex",
      justifyContent: n === "left" ? "flex-start" : n === "right" ? "flex-end" : "center",
      alignItems: n === "top" ? "flex-start" : n === "bottom" ? "flex-end" : "center",
      pointerEvents: i ? "auto" : "none"
    };
  },
  root: {
    pointerEvents: "auto"
  }
}, gt = {
  mask: function(e) {
    var n = e.instance, i = e.props, r = ["left", "right", "top", "bottom"], o = r.find(function(d) {
      return d === i.position;
    });
    return ["p-drawer-mask", {
      "p-overlay-mask p-overlay-mask-enter-active": i.modal,
      "p-drawer-open": n.containerVisible,
      "p-drawer-full": n.fullScreen
    }, o ? "p-drawer-".concat(o) : ""];
  },
  root: function(e) {
    var n = e.instance;
    return ["p-drawer p-component", {
      "p-drawer-full": n.fullScreen
    }];
  },
  header: "p-drawer-header",
  title: "p-drawer-title",
  pcCloseButton: "p-drawer-close-button",
  content: "p-drawer-content",
  footer: "p-drawer-footer"
}, wt = M.extend({
  name: "drawer",
  style: bt,
  classes: gt,
  inlineStyles: yt
}), Lt = {
  name: "BaseDrawer",
  extends: X,
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: "left"
    },
    header: {
      type: null,
      default: null
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    dismissable: {
      type: Boolean,
      default: !0
    },
    showCloseIcon: {
      type: Boolean,
      default: !0
    },
    closeButtonProps: {
      type: Object,
      default: function() {
        return {
          severity: "secondary",
          text: !0,
          rounded: !0
        };
      }
    },
    closeIcon: {
      type: String,
      default: void 0
    },
    modal: {
      type: Boolean,
      default: !0
    },
    blockScroll: {
      type: Boolean,
      default: !1
    },
    closeOnEscape: {
      type: Boolean,
      default: !0
    }
  },
  style: wt,
  provide: function() {
    return {
      $pcDrawer: this,
      $parentInstance: this
    };
  }
};
function j(t) {
  "@babel/helpers - typeof";
  return j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, j(t);
}
function W(t, e, n) {
  return (e = kt(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function kt(t) {
  var e = Ct(t, "string");
  return j(e) == "symbol" ? e : e + "";
}
function Ct(t, e) {
  if (j(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(t, e);
    if (j(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var he = {
  name: "Drawer",
  extends: Lt,
  inheritAttrs: !1,
  emits: ["update:visible", "show", "after-show", "hide", "after-hide", "before-hide"],
  data: function() {
    return {
      containerVisible: this.visible
    };
  },
  container: null,
  mask: null,
  content: null,
  headerContainer: null,
  footerContainer: null,
  closeButton: null,
  outsideClickListener: null,
  documentKeydownListener: null,
  watch: {
    dismissable: function(e) {
      e && !this.modal ? this.bindOutsideClickListener() : this.unbindOutsideClickListener();
    }
  },
  updated: function() {
    this.visible && (this.containerVisible = this.visible);
  },
  beforeUnmount: function() {
    this.disableDocumentSettings(), this.mask && this.autoZIndex && k.clear(this.mask), this.container = null, this.mask = null;
  },
  methods: {
    hide: function() {
      this.$emit("update:visible", !1);
    },
    onEnter: function() {
      this.$emit("show"), this.focus(), this.bindDocumentKeyDownListener(), this.autoZIndex && k.set("modal", this.mask, this.baseZIndex || this.$primevue.config.zIndex.modal);
    },
    onAfterEnter: function() {
      this.enableDocumentSettings(), this.$emit("after-show");
    },
    onBeforeLeave: function() {
      this.modal && !this.isUnstyled && U(this.mask, "p-overlay-mask-leave-active"), this.$emit("before-hide");
    },
    onLeave: function() {
      this.$emit("hide");
    },
    onAfterLeave: function() {
      this.autoZIndex && k.clear(this.mask), this.unbindDocumentKeyDownListener(), this.containerVisible = !1, this.disableDocumentSettings(), this.$emit("after-hide");
    },
    onMaskClick: function(e) {
      this.dismissable && this.modal && this.mask === e.target && this.hide();
    },
    focus: function() {
      var e = function(r) {
        return r && r.querySelector("[autofocus]");
      }, n = this.$slots.header && e(this.headerContainer);
      n || (n = this.$slots.default && e(this.container), n || (n = this.$slots.footer && e(this.footerContainer), n || (n = this.closeButton))), n && B(n);
    },
    enableDocumentSettings: function() {
      this.dismissable && !this.modal && this.bindOutsideClickListener(), this.blockScroll && Ne();
    },
    disableDocumentSettings: function() {
      this.unbindOutsideClickListener(), this.blockScroll && We();
    },
    onKeydown: function(e) {
      e.code === "Escape" && this.closeOnEscape && this.hide();
    },
    containerRef: function(e) {
      this.container = e;
    },
    maskRef: function(e) {
      this.mask = e;
    },
    contentRef: function(e) {
      this.content = e;
    },
    headerContainerRef: function(e) {
      this.headerContainer = e;
    },
    footerContainerRef: function(e) {
      this.footerContainer = e;
    },
    closeButtonRef: function(e) {
      this.closeButton = e ? e.$el : void 0;
    },
    bindDocumentKeyDownListener: function() {
      this.documentKeydownListener || (this.documentKeydownListener = this.onKeydown, document.addEventListener("keydown", this.documentKeydownListener));
    },
    unbindDocumentKeyDownListener: function() {
      this.documentKeydownListener && (document.removeEventListener("keydown", this.documentKeydownListener), this.documentKeydownListener = null);
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        e.isOutsideClicked(n) && e.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    isOutsideClicked: function(e) {
      return this.container && !this.container.contains(e.target);
    }
  },
  computed: {
    fullScreen: function() {
      return this.position === "full";
    },
    closeAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    },
    dataP: function() {
      return Me(W(W(W({
        "full-screen": this.position === "full"
      }, this.position, this.position), "open", this.containerVisible), "modal", this.modal));
    }
  },
  directives: {
    focustrap: J
  },
  components: {
    Button: G,
    Portal: Q,
    TimesIcon: Ve
  }
}, Et = ["data-p"], $t = ["role", "aria-modal", "data-p"];
function St(t, e, n, i, r, o) {
  var d = H("Button"), v = H("Portal"), p = ee("focustrap");
  return h(), D(v, null, {
    default: f(function() {
      return [r.containerVisible ? (h(), w("div", m({
        key: 0,
        ref: o.maskRef,
        onMousedown: e[0] || (e[0] = function() {
          return o.onMaskClick && o.onMaskClick.apply(o, arguments);
        }),
        class: t.cx("mask"),
        style: t.sx("mask", !0, {
          position: t.position,
          modal: t.modal
        }),
        "data-p": o.dataP
      }, t.ptm("mask")), [a(te, m({
        name: "p-drawer",
        onEnter: o.onEnter,
        onAfterEnter: o.onAfterEnter,
        onBeforeLeave: o.onBeforeLeave,
        onLeave: o.onLeave,
        onAfterLeave: o.onAfterLeave,
        appear: ""
      }, t.ptm("transition")), {
        default: f(function() {
          return [t.visible ? P((h(), w("div", m({
            key: 0,
            ref: o.containerRef,
            class: t.cx("root"),
            style: t.sx("root"),
            role: t.modal ? "dialog" : "complementary",
            "aria-modal": t.modal ? !0 : void 0,
            "data-p": o.dataP
          }, t.ptmi("root")), [t.$slots.container ? g(t.$slots, "container", {
            key: 0,
            closeCallback: o.hide
          }) : (h(), w(fe, {
            key: 1
          }, [l("div", m({
            ref: o.headerContainerRef,
            class: t.cx("header")
          }, t.ptm("header")), [g(t.$slots, "header", {
            class: me(t.cx("title"))
          }, function() {
            return [t.header ? (h(), w("div", m({
              key: 0,
              class: t.cx("title")
            }, t.ptm("title")), ne(t.header), 17)) : S("", !0)];
          }), t.showCloseIcon ? g(t.$slots, "closebutton", {
            key: 0,
            closeCallback: o.hide
          }, function() {
            return [a(d, m({
              ref: o.closeButtonRef,
              type: "button",
              class: t.cx("pcCloseButton"),
              "aria-label": o.closeAriaLabel,
              unstyled: t.unstyled,
              onClick: o.hide
            }, t.closeButtonProps, {
              pt: t.ptm("pcCloseButton"),
              "data-pc-group-section": "iconcontainer"
            }), {
              icon: f(function(c) {
                return [g(t.$slots, "closeicon", {}, function() {
                  return [(h(), D(N(t.closeIcon ? "span" : "TimesIcon"), m({
                    class: [t.closeIcon, c.class]
                  }, t.ptm("pcCloseButton").icon), null, 16, ["class"]))];
                })];
              }),
              _: 3
            }, 16, ["class", "aria-label", "unstyled", "onClick", "pt"])];
          }) : S("", !0)], 16), l("div", m({
            ref: o.contentRef,
            class: t.cx("content")
          }, t.ptm("content")), [g(t.$slots, "default")], 16), t.$slots.footer ? (h(), w("div", m({
            key: 0,
            ref: o.footerContainerRef,
            class: t.cx("footer")
          }, t.ptm("footer")), [g(t.$slots, "footer")], 16)) : S("", !0)], 64))], 16, $t)), [[p]]) : S("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave"])], 16, Et)) : S("", !0)];
    }),
    _: 3
  });
}
he.render = St;
var xt = `
    .p-popover {
        margin-block-start: dt('popover.gutter');
        background: dt('popover.background');
        color: dt('popover.color');
        border: 1px solid dt('popover.border.color');
        border-radius: dt('popover.border.radius');
        box-shadow: dt('popover.shadow');
        will-change: transform;
    }

    .p-popover-content {
        padding: dt('popover.content.padding');
    }

    .p-popover-flipped {
        margin-block-start: calc(dt('popover.gutter') * -1);
        margin-block-end: dt('popover.gutter');
    }

    .p-popover:after,
    .p-popover:before {
        bottom: 100%;
        left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-popover:after {
        border-width: calc(dt('popover.gutter') - 2px);
        margin-left: calc(-1 * (dt('popover.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.background');
    }

    .p-popover:before {
        border-width: dt('popover.gutter');
        margin-left: calc(-1 * dt('popover.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.border.color');
    }

    .p-popover-flipped:after,
    .p-popover-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-popover.p-popover-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('popover.background');
    }

    .p-popover.p-popover-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('popover.border.color');
    }
`, Ot = {
  root: "p-popover p-component",
  content: "p-popover-content"
}, _t = M.extend({
  name: "popover",
  style: xt,
  classes: Ot
}), At = {
  name: "BasePopover",
  extends: X,
  props: {
    dismissable: {
      type: Boolean,
      default: !0
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    breakpoints: {
      type: Object,
      default: null
    },
    closeOnEscape: {
      type: Boolean,
      default: !0
    }
  },
  style: _t,
  provide: function() {
    return {
      $pcPopover: this,
      $parentInstance: this
    };
  }
}, be = {
  name: "Popover",
  extends: At,
  inheritAttrs: !1,
  emits: ["show", "hide"],
  data: function() {
    return {
      visible: !1
    };
  },
  watch: {
    dismissable: {
      immediate: !0,
      handler: function(e) {
        e ? this.bindOutsideClickListener() : this.unbindOutsideClickListener();
      }
    }
  },
  selfClick: !1,
  target: null,
  eventTarget: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  container: null,
  styleElement: null,
  overlayEventListener: null,
  documentKeydownListener: null,
  beforeUnmount: function() {
    this.dismissable && this.unbindOutsideClickListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.destroyStyle(), this.unbindResizeListener(), this.target = null, this.container && this.autoZIndex && k.clear(this.container), this.overlayEventListener && (z.off("overlay-click", this.overlayEventListener), this.overlayEventListener = null), this.container = null;
  },
  mounted: function() {
    this.breakpoints && this.createStyle();
  },
  methods: {
    toggle: function(e, n) {
      this.visible ? this.hide() : this.show(e, n);
    },
    show: function(e, n) {
      this.visible = !0, this.eventTarget = e.currentTarget, this.target = n || e.currentTarget;
    },
    hide: function() {
      this.visible = !1;
    },
    onContentClick: function() {
      this.selfClick = !0;
    },
    onEnter: function(e) {
      var n = this;
      Pe(e, {
        position: "absolute",
        top: "0"
      }), this.alignOverlay(), this.dismissable && this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.autoZIndex && k.set("overlay", e, this.baseZIndex + this.$primevue.config.zIndex.overlay), this.overlayEventListener = function(i) {
        n.container.contains(i.target) && (n.selfClick = !0);
      }, this.focus(), z.on("overlay-click", this.overlayEventListener), this.$emit("show"), this.closeOnEscape && this.bindDocumentKeyDownListener();
    },
    onLeave: function() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.unbindDocumentKeyDownListener(), z.off("overlay-click", this.overlayEventListener), this.overlayEventListener = null, this.$emit("hide");
    },
    onAfterLeave: function(e) {
      this.autoZIndex && k.clear(e);
    },
    alignOverlay: function() {
      ce(this.container, this.target, !1);
      var e = I(this.container), n = I(this.target), i = 0;
      e.left < n.left && (i = n.left - e.left), this.container.style.setProperty(pe("popover.arrow.left").name, "".concat(i, "px")), e.top < n.top && (this.container.setAttribute("data-p-popover-flipped", "true"), !this.isUnstyled && U(this.container, "p-popover-flipped"));
    },
    onContentKeydown: function(e) {
      e.code === "Escape" && this.closeOnEscape && (this.hide(), B(this.target));
    },
    onButtonKeydown: function(e) {
      switch (e.code) {
        case "ArrowDown":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowRight":
          e.preventDefault();
      }
    },
    focus: function() {
      var e = this.container.querySelector("[autofocus]");
      e && e.focus();
    },
    onKeyDown: function(e) {
      e.code === "Escape" && this.closeOnEscape && (this.visible = !1);
    },
    bindDocumentKeyDownListener: function() {
      this.documentKeydownListener || (this.documentKeydownListener = this.onKeyDown.bind(this), window.document.addEventListener("keydown", this.documentKeydownListener));
    },
    unbindDocumentKeyDownListener: function() {
      this.documentKeydownListener && (window.document.removeEventListener("keydown", this.documentKeydownListener), this.documentKeydownListener = null);
    },
    bindOutsideClickListener: function() {
      var e = this;
      !this.outsideClickListener && He() && (this.outsideClickListener = function(n) {
        e.visible && !e.selfClick && !e.isTargetClicked(n) && (e.visible = !1), e.selfClick = !1;
      }, document.addEventListener("click", this.outsideClickListener));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener), this.outsideClickListener = null, this.selfClick = !1);
    },
    bindScrollListener: function() {
      var e = this;
      this.scrollHandler || (this.scrollHandler = new Y(this.target, function() {
        e.visible && (e.visible = !1);
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function() {
        e.visible && !Z() && (e.visible = !1);
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    isTargetClicked: function(e) {
      return this.eventTarget && (this.eventTarget === e.target || this.eventTarget.contains(e.target));
    },
    containerRef: function(e) {
      this.container = e;
    },
    createStyle: function() {
      if (!this.styleElement && !this.isUnstyled) {
        var e;
        this.styleElement = document.createElement("style"), this.styleElement.type = "text/css", ze(this.styleElement, "nonce", (e = this.$primevue) === null || e === void 0 || (e = e.config) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce), document.head.appendChild(this.styleElement);
        var n = "";
        for (var i in this.breakpoints)
          n += `
                        @media screen and (max-width: `.concat(i, `) {
                            .p-popover[`).concat(this.$attrSelector, `] {
                                width: `).concat(this.breakpoints[i], ` !important;
                            }
                        }
                    `);
        this.styleElement.innerHTML = n;
      }
    },
    destroyStyle: function() {
      this.styleElement && (document.head.removeChild(this.styleElement), this.styleElement = null);
    },
    onOverlayClick: function(e) {
      z.emit("overlay-click", {
        originalEvent: e,
        target: this.target
      });
    }
  },
  directives: {
    focustrap: J,
    ripple: Ue
  },
  components: {
    Portal: Q
  }
}, Bt = ["aria-modal"];
function Dt(t, e, n, i, r, o) {
  var d = H("Portal"), v = ee("focustrap");
  return h(), D(d, {
    appendTo: t.appendTo
  }, {
    default: f(function() {
      return [a(te, m({
        name: "p-anchored-overlay",
        onEnter: o.onEnter,
        onLeave: o.onLeave,
        onAfterLeave: o.onAfterLeave
      }, t.ptm("transition")), {
        default: f(function() {
          return [r.visible ? P((h(), w("div", m({
            key: 0,
            ref: o.containerRef,
            role: "dialog",
            "aria-modal": r.visible,
            onClick: e[3] || (e[3] = function() {
              return o.onOverlayClick && o.onOverlayClick.apply(o, arguments);
            }),
            class: t.cx("root")
          }, t.ptmi("root")), [t.$slots.container ? g(t.$slots, "container", {
            key: 0,
            closeCallback: o.hide,
            keydownCallback: function(c) {
              return o.onButtonKeydown(c);
            }
          }) : (h(), w("div", m({
            key: 1,
            class: t.cx("content"),
            onClick: e[0] || (e[0] = function() {
              return o.onContentClick && o.onContentClick.apply(o, arguments);
            }),
            onMousedown: e[1] || (e[1] = function() {
              return o.onContentClick && o.onContentClick.apply(o, arguments);
            }),
            onKeydown: e[2] || (e[2] = function() {
              return o.onContentKeydown && o.onContentKeydown.apply(o, arguments);
            })
          }, t.ptm("content")), [g(t.$slots, "default")], 16))], 16, Bt)), [[v]]) : S("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"]);
}
be.render = Dt;
const Tt = { class: "flex flex-col md:flex-row gap-8" }, Rt = { class: "md:w-1/2" }, zt = { class: "card" }, Ht = { class: "card" }, Pt = { class: "flex flex-wrap gap-2" }, jt = ["src", "alt"], Kt = { class: "card" }, It = { class: "inline-flex gap-4" }, Mt = { class: "md:w-1/2" }, Ut = { class: "card" }, qt = { class: "card" }, Ft = { class: "card" }, ln = {
  __name: "OverlayDoc",
  setup(t) {
    const e = L(!1), n = L(!1), i = L(!1), r = L(!1), o = L(!1), d = L(!1), v = L(!1), p = L(null), c = L(null), b = L(null), C = L(null), E = je(), ye = Ke();
    qe(() => {
      Qe.getProductsSmall().then(($) => p.value = $);
    });
    function ge() {
      e.value = !0;
    }
    function we() {
      e.value = !1;
    }
    function Le() {
      n.value = !0;
    }
    function ie() {
      n.value = !1;
    }
    function ke($) {
      b.value.toggle($);
    }
    function Ce($) {
      b.value.hide(), E.add({ severity: "info", summary: "Product Selected", detail: $.data.name, life: 3e3 });
    }
    function Ee($) {
      ye.require({
        target: $.target,
        message: "Are you sure you want to proceed?",
        icon: "pi pi-exclamation-triangle",
        rejectProps: {
          label: "Cancel",
          severity: "secondary",
          outlined: !0
        },
        acceptProps: {
          label: "Save"
        },
        accept: () => {
          E.add({ severity: "info", summary: "Confirmed", detail: "You have accepted", life: 3e3 });
        },
        reject: () => {
          E.add({ severity: "info", summary: "Rejected", detail: "You have rejected", life: 3e3 });
        }
      });
    }
    return ($, s) => {
      const y = G, oe = Je, q = Ge, $e = Ye, Se = be, xe = Ze, T = he, Oe = ve, re = ut;
      return h(), w("div", Tt, [
        l("div", Rt, [
          l("div", zt, [
            s[15] || (s[15] = l("div", { class: "font-semibold text-xl mb-4" }, "Dialog", -1)),
            a(oe, {
              header: "Dialog",
              visible: e.value,
              "onUpdate:visible": s[0] || (s[0] = (u) => e.value = u),
              breakpoints: { "960px": "75vw" },
              style: { width: "30vw" },
              modal: !0
            }, {
              footer: f(() => [
                a(y, {
                  label: "Save",
                  onClick: we
                })
              ]),
              default: f(() => [
                s[14] || (s[14] = l("p", { class: "leading-normal m-0" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ", -1))
              ]),
              _: 1
            }, 8, ["visible"]),
            a(y, {
              label: "Show",
              style: { width: "auto" },
              onClick: ge
            })
          ]),
          l("div", Ht, [
            s[16] || (s[16] = l("div", { class: "font-semibold text-xl mb-4" }, "Popover", -1)),
            l("div", Pt, [
              a(y, {
                type: "button",
                label: "Show",
                onClick: ke
              }),
              a(Se, {
                ref_key: "op",
                ref: b,
                id: "overlay_panel",
                style: { width: "450px" }
              }, {
                default: f(() => [
                  a($e, {
                    selection: c.value,
                    "onUpdate:selection": s[1] || (s[1] = (u) => c.value = u),
                    value: p.value,
                    selectionMode: "single",
                    paginator: !0,
                    rows: 5,
                    onRowSelect: Ce
                  }, {
                    default: f(() => [
                      a(q, {
                        field: "name",
                        header: "Name",
                        sortable: "",
                        style: { "min-width": "12rem" }
                      }),
                      a(q, { header: "Image" }, {
                        body: f((u) => [
                          l("img", {
                            src: `https://primefaces.org/cdn/primevue/images/product/${u.data.image}`,
                            alt: u.data.image,
                            class: "w-16 shadow-sm"
                          }, null, 8, jt)
                        ]),
                        _: 1
                      }),
                      a(q, {
                        field: "price",
                        header: "Price",
                        sortable: "",
                        style: { "min-width": "8rem" }
                      }, {
                        body: f((u) => [
                          Fe(" $ " + ne(u.data.price), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["selection", "value"])
                ]),
                _: 1
              }, 512)
            ])
          ]),
          l("div", Kt, [
            s[17] || (s[17] = l("div", { class: "font-semibold text-xl mb-4" }, "Tooltip", -1)),
            l("div", It, [
              P(a(xe, {
                type: "text",
                placeholder: "Username"
              }, null, 512), [
                [re, "Your username"]
              ]),
              P(a(y, {
                type: "button",
                label: "Save"
              }, null, 512), [
                [re, "Click to proceed"]
              ])
            ])
          ])
        ]),
        l("div", Mt, [
          l("div", Ut, [
            s[23] || (s[23] = l("div", { class: "font-semibold text-xl mb-4" }, "Drawer", -1)),
            a(T, {
              visible: i.value,
              "onUpdate:visible": s[2] || (s[2] = (u) => i.value = u),
              header: "Drawer"
            }, {
              default: f(() => [...s[18] || (s[18] = [
                l("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", -1)
              ])]),
              _: 1
            }, 8, ["visible"]),
            a(T, {
              visible: r.value,
              "onUpdate:visible": s[3] || (s[3] = (u) => r.value = u),
              header: "Drawer",
              position: "right"
            }, {
              default: f(() => [...s[19] || (s[19] = [
                l("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", -1)
              ])]),
              _: 1
            }, 8, ["visible"]),
            a(T, {
              visible: o.value,
              "onUpdate:visible": s[4] || (s[4] = (u) => o.value = u),
              header: "Drawer",
              position: "top"
            }, {
              default: f(() => [...s[20] || (s[20] = [
                l("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", -1)
              ])]),
              _: 1
            }, 8, ["visible"]),
            a(T, {
              visible: d.value,
              "onUpdate:visible": s[5] || (s[5] = (u) => d.value = u),
              header: "Drawer",
              position: "bottom"
            }, {
              default: f(() => [...s[21] || (s[21] = [
                l("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", -1)
              ])]),
              _: 1
            }, 8, ["visible"]),
            a(T, {
              visible: v.value,
              "onUpdate:visible": s[6] || (s[6] = (u) => v.value = u),
              header: "Drawer",
              position: "full"
            }, {
              default: f(() => [...s[22] || (s[22] = [
                l("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", -1)
              ])]),
              _: 1
            }, 8, ["visible"]),
            a(y, {
              icon: "pi pi-arrow-right",
              onClick: s[7] || (s[7] = (u) => i.value = !0),
              style: { "margin-right": "0.25em" }
            }),
            a(y, {
              icon: "pi pi-arrow-left",
              onClick: s[8] || (s[8] = (u) => r.value = !0),
              style: { "margin-right": "0.25em" }
            }),
            a(y, {
              icon: "pi pi-arrow-down",
              onClick: s[9] || (s[9] = (u) => o.value = !0),
              style: { "margin-right": "0.25em" }
            }),
            a(y, {
              icon: "pi pi-arrow-up",
              onClick: s[10] || (s[10] = (u) => d.value = !0),
              style: { "margin-right": "0.25em" }
            }),
            a(y, {
              icon: "pi pi-external-link",
              onClick: s[11] || (s[11] = (u) => v.value = !0)
            })
          ]),
          l("div", qt, [
            s[24] || (s[24] = l("div", { class: "font-semibold text-xl mb-4" }, "ConfirmPopup", -1)),
            a(Oe),
            a(y, {
              ref_key: "popup",
              ref: C,
              onClick: s[12] || (s[12] = (u) => Ee(u)),
              icon: "pi pi-check",
              label: "Confirm",
              class: "mr-2"
            }, null, 512)
          ]),
          l("div", Ft, [
            s[26] || (s[26] = l("div", { class: "font-semibold text-xl mb-4" }, "ConfirmDialog", -1)),
            a(y, {
              label: "Delete",
              icon: "pi pi-trash",
              severity: "danger",
              style: { width: "auto" },
              onClick: Le
            }),
            a(oe, {
              header: "Confirmation",
              visible: n.value,
              "onUpdate:visible": s[13] || (s[13] = (u) => n.value = u),
              style: { width: "350px" },
              modal: !0
            }, {
              footer: f(() => [
                a(y, {
                  label: "No",
                  icon: "pi pi-times",
                  onClick: ie,
                  text: "",
                  severity: "secondary"
                }),
                a(y, {
                  label: "Yes",
                  icon: "pi pi-check",
                  onClick: ie,
                  severity: "danger",
                  outlined: "",
                  autofocus: ""
                })
              ]),
              default: f(() => [
                s[25] || (s[25] = l("div", { class: "flex items-center justify-center" }, [
                  l("i", {
                    class: "pi pi-exclamation-triangle mr-4",
                    style: { "font-size": "2rem" }
                  }),
                  l("span", null, "Are you sure you want to proceed?")
                ], -1))
              ]),
              _: 1
            }, 8, ["visible"])
          ])
        ])
      ]);
    };
  }
};
export {
  ln as default
};
