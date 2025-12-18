import { B as $, s as A, i as B, a2 as we, V as ze, a3 as xe, a4 as ke, v as L, a1 as _, c as Ie, R as F, k as Ee, e as Le, Q as J, z as _e } from "./main-k5gsV9f8.js";
import { g as Q } from "./index-CgWm4MkX.js";
import { V as m, H as u, F as x, a2 as ie, G as g, J as P, Y as b, m as c, W as a, I as f, X as oe, a as l, $ as w, Z as q, p as S, a0 as d, ac as D, ad as R, E as C, L as H, ag as T } from "./runtime-dom.esm-bundler-CEAeiVlj.js";
import { s as Ce } from "./index-Nn0YTqA1.js";
import { s as qe } from "./index-nZPAy2d0.js";
import { s as Be } from "./index-CTgu2dIJ.js";
import { s as re } from "./index-80P-LDDT.js";
import { s as ae } from "./index-BApcQ-EC.js";
import { s as se } from "./index-B4LaqIEm.js";
import { s as De, a as Me, b as Ke } from "./index-CA-1QObp.js";
import { s as Ne } from "./index-IIoDJRDg.js";
import { s as le } from "./index-OpmlCAOc.js";
import { s as je } from "./index-BVbViMQc.js";
import { s as Oe } from "./index-D4aa0W3k.js";
import { s as He } from "./index-glD3efqJ.js";
import { s as Ue, a as Fe } from "./index-Qy7YOLF_.js";
import { s as Re } from "./index-1F8bg-R-.js";
var Ge = `
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
        border: 1px solid dt('splitter.border.color');
        background: dt('splitter.background');
        border-radius: dt('border.radius.md');
        color: dt('splitter.color');
    }

    .p-splitter-vertical {
        flex-direction: column;
    }

    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        background: dt('splitter.gutter.background');
    }

    .p-splitter-gutter-handle {
        border-radius: dt('splitter.handle.border.radius');
        background: dt('splitter.handle.background');
        transition:
            outline-color dt('splitter.transition.duration'),
            box-shadow dt('splitter.transition.duration');
        outline-color: transparent;
    }

    .p-splitter-gutter-handle:focus-visible {
        box-shadow: dt('splitter.handle.focus.ring.shadow');
        outline: dt('splitter.handle.focus.ring.width') dt('splitter.handle.focus.ring.style') dt('splitter.handle.focus.ring.color');
        outline-offset: dt('splitter.handle.focus.ring.offset');
    }

    .p-splitter-horizontal.p-splitter-resizing {
        cursor: col-resize;
        user-select: none;
    }

    .p-splitter-vertical.p-splitter-resizing {
        cursor: row-resize;
        user-select: none;
    }

    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: dt('splitter.handle.size');
        width: 100%;
    }

    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: dt('splitter.handle.size');
        height: 100%;
    }

    .p-splitter-horizontal > .p-splitter-gutter {
        cursor: col-resize;
    }

    .p-splitter-vertical > .p-splitter-gutter {
        cursor: row-resize;
    }

    .p-splitterpanel {
        flex-grow: 1;
        overflow: hidden;
    }

    .p-splitterpanel-nested {
        display: flex;
    }

    .p-splitterpanel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }
`, We = {
  root: function(t) {
    var n = t.props;
    return ["p-splitter p-component", "p-splitter-" + n.layout];
  },
  gutter: "p-splitter-gutter",
  gutterHandle: "p-splitter-gutter-handle"
}, Ve = $.extend({
  name: "splitter",
  style: Ge,
  classes: We
}), Xe = {
  name: "BaseSplitter",
  extends: A,
  props: {
    layout: {
      type: String,
      default: "horizontal"
    },
    gutterSize: {
      type: Number,
      default: 4
    },
    stateKey: {
      type: String,
      default: null
    },
    stateStorage: {
      type: String,
      default: "session"
    },
    step: {
      type: Number,
      default: 5
    }
  },
  style: Ve,
  provide: function() {
    return {
      $pcSplitter: this,
      $parentInstance: this
    };
  }
};
function k(e) {
  "@babel/helpers - typeof";
  return k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, k(e);
}
function Z(e, t, n) {
  return (t = Ye(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ye(e) {
  var t = Je(e, "string");
  return k(t) == "symbol" ? t : t + "";
}
function Je(e, t) {
  if (k(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (k(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ee(e) {
  return tt(e) || et(e) || Ze(e) || Qe();
}
function Qe() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ze(e, t) {
  if (e) {
    if (typeof e == "string") return U(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? U(e, t) : void 0;
  }
}
function et(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function tt(e) {
  if (Array.isArray(e)) return U(e);
}
function U(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var de = {
  name: "Splitter",
  extends: Xe,
  inheritAttrs: !1,
  emits: ["resizestart", "resizeend", "resize"],
  dragging: !1,
  mouseMoveListener: null,
  mouseUpListener: null,
  touchMoveListener: null,
  touchEndListener: null,
  size: null,
  gutterElement: null,
  startPos: null,
  prevPanelElement: null,
  nextPanelElement: null,
  nextPanelSize: null,
  prevPanelSize: null,
  panelSizes: null,
  prevPanelIndex: null,
  timer: null,
  data: function() {
    return {
      prevSize: null
    };
  },
  mounted: function() {
    this.initializePanels();
  },
  beforeUnmount: function() {
    this.clear(), this.unbindMouseListeners();
  },
  methods: {
    isSplitterPanel: function(t) {
      return t.type.name === "SplitterPanel";
    },
    initializePanels: function() {
      var t = this;
      if (this.panels && this.panels.length) {
        var n = !1;
        if (this.isStateful() && (n = this.restoreState()), !n) {
          var r = ee(this.$el.children).filter(function(i) {
            return i.getAttribute("data-pc-name") === "splitterpanel";
          }), s = [];
          this.panels.map(function(i, o) {
            var h = i.props && Ie(i.props.size) ? i.props.size : null, v = h ?? 100 / t.panels.length;
            s[o] = v, r[o].style.flexBasis = "calc(" + v + "% - " + (t.panels.length - 1) * t.gutterSize + "px)";
          }), this.panelSizes = s, this.prevSize = parseFloat(s[0]).toFixed(4);
        }
      }
    },
    onResizeStart: function(t, n, r) {
      this.gutterElement = t.currentTarget || t.target.parentElement, this.size = this.horizontal ? xe(this.$el) : ke(this.$el), r || (this.dragging = !0, this.startPos = this.layout === "horizontal" ? t.pageX || t.changedTouches[0].pageX : t.pageY || t.changedTouches[0].pageY), this.prevPanelElement = this.gutterElement.previousElementSibling, this.nextPanelElement = this.gutterElement.nextElementSibling, r ? (this.prevPanelSize = this.horizontal ? L(this.prevPanelElement, !0) : _(this.prevPanelElement, !0), this.nextPanelSize = this.horizontal ? L(this.nextPanelElement, !0) : _(this.nextPanelElement, !0)) : (this.prevPanelSize = 100 * (this.horizontal ? L(this.prevPanelElement, !0) : _(this.prevPanelElement, !0)) / this.size, this.nextPanelSize = 100 * (this.horizontal ? L(this.nextPanelElement, !0) : _(this.nextPanelElement, !0)) / this.size), this.prevPanelIndex = n, this.$emit("resizestart", {
        originalEvent: t,
        sizes: this.panelSizes
      }), this.$refs.gutter[n].setAttribute("data-p-gutter-resizing", !0), this.$el.setAttribute("data-p-resizing", !0);
    },
    onResize: function(t, n, r) {
      var s, i, o;
      r ? this.horizontal ? (i = 100 * (this.prevPanelSize + n) / this.size, o = 100 * (this.nextPanelSize - n) / this.size) : (i = 100 * (this.prevPanelSize - n) / this.size, o = 100 * (this.nextPanelSize + n) / this.size) : (this.horizontal ? ze(this.$el) ? s = (this.startPos - t.pageX) * 100 / this.size : s = (t.pageX - this.startPos) * 100 / this.size : s = (t.pageY - this.startPos) * 100 / this.size, i = this.prevPanelSize + s, o = this.nextPanelSize - s), this.validateResize(i, o) || (i = Math.min(Math.max(this.prevPanelMinSize, i), 100 - this.nextPanelMinSize), o = Math.min(Math.max(this.nextPanelMinSize, o), 100 - this.prevPanelMinSize)), this.prevPanelElement.style.flexBasis = "calc(" + i + "% - " + (this.panels.length - 1) * this.gutterSize + "px)", this.nextPanelElement.style.flexBasis = "calc(" + o + "% - " + (this.panels.length - 1) * this.gutterSize + "px)", this.panelSizes[this.prevPanelIndex] = i, this.panelSizes[this.prevPanelIndex + 1] = o, this.prevSize = parseFloat(i).toFixed(4), this.$emit("resize", {
        originalEvent: t,
        sizes: this.panelSizes
      });
    },
    onResizeEnd: function(t) {
      this.isStateful() && this.saveState(), this.$emit("resizeend", {
        originalEvent: t,
        sizes: this.panelSizes
      }), this.$refs.gutter.forEach(function(n) {
        return n.setAttribute("data-p-gutter-resizing", !1);
      }), this.$el.setAttribute("data-p-resizing", !1), this.clear();
    },
    repeat: function(t, n, r) {
      this.onResizeStart(t, n, !0), this.onResize(t, r, !0);
    },
    setTimer: function(t, n, r) {
      var s = this;
      this.timer || (this.timer = setInterval(function() {
        s.repeat(t, n, r);
      }, 40));
    },
    clearTimer: function() {
      this.timer && (clearInterval(this.timer), this.timer = null);
    },
    onGutterKeyUp: function() {
      this.clearTimer(), this.onResizeEnd();
    },
    onGutterKeyDown: function(t, n) {
      switch (t.code) {
        case "ArrowLeft": {
          this.layout === "horizontal" && this.setTimer(t, n, this.step * -1), t.preventDefault();
          break;
        }
        case "ArrowRight": {
          this.layout === "horizontal" && this.setTimer(t, n, this.step), t.preventDefault();
          break;
        }
        case "ArrowDown": {
          this.layout === "vertical" && this.setTimer(t, n, this.step * -1), t.preventDefault();
          break;
        }
        case "ArrowUp": {
          this.layout === "vertical" && this.setTimer(t, n, this.step), t.preventDefault();
          break;
        }
      }
    },
    onGutterMouseDown: function(t, n) {
      this.onResizeStart(t, n), this.bindMouseListeners();
    },
    onGutterTouchStart: function(t, n) {
      this.onResizeStart(t, n), this.bindTouchListeners(), t.preventDefault();
    },
    onGutterTouchMove: function(t) {
      this.onResize(t), t.preventDefault();
    },
    onGutterTouchEnd: function(t) {
      this.onResizeEnd(t), this.unbindTouchListeners(), t.preventDefault();
    },
    bindMouseListeners: function() {
      var t = this;
      this.mouseMoveListener || (this.mouseMoveListener = function(n) {
        return t.onResize(n);
      }, document.addEventListener("mousemove", this.mouseMoveListener)), this.mouseUpListener || (this.mouseUpListener = function(n) {
        t.onResizeEnd(n), t.unbindMouseListeners();
      }, document.addEventListener("mouseup", this.mouseUpListener));
    },
    bindTouchListeners: function() {
      var t = this;
      this.touchMoveListener || (this.touchMoveListener = function(n) {
        return t.onResize(n.changedTouches[0]);
      }, document.addEventListener("touchmove", this.touchMoveListener)), this.touchEndListener || (this.touchEndListener = function(n) {
        t.resizeEnd(n), t.unbindTouchListeners();
      }, document.addEventListener("touchend", this.touchEndListener));
    },
    validateResize: function(t, n) {
      return !(t > 100 || t < 0 || n > 100 || n < 0 || this.prevPanelMinSize > t || this.nextPanelMinSize > n);
    },
    unbindMouseListeners: function() {
      this.mouseMoveListener && (document.removeEventListener("mousemove", this.mouseMoveListener), this.mouseMoveListener = null), this.mouseUpListener && (document.removeEventListener("mouseup", this.mouseUpListener), this.mouseUpListener = null);
    },
    unbindTouchListeners: function() {
      this.touchMoveListener && (document.removeEventListener("touchmove", this.touchMoveListener), this.touchMoveListener = null), this.touchEndListener && (document.removeEventListener("touchend", this.touchEndListener), this.touchEndListener = null);
    },
    clear: function() {
      this.dragging = !1, this.size = null, this.startPos = null, this.prevPanelElement = null, this.nextPanelElement = null, this.prevPanelSize = null, this.nextPanelSize = null, this.gutterElement = null, this.prevPanelIndex = null;
    },
    isStateful: function() {
      return this.stateKey != null;
    },
    getStorage: function() {
      switch (this.stateStorage) {
        case "local":
          return window.localStorage;
        case "session":
          return window.sessionStorage;
        default:
          throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    },
    saveState: function() {
      we(this.panelSizes) && this.getStorage().setItem(this.stateKey, JSON.stringify(this.panelSizes));
    },
    restoreState: function() {
      var t = this, n = this.getStorage(), r = n.getItem(this.stateKey);
      if (r) {
        this.panelSizes = JSON.parse(r);
        var s = ee(this.$el.children).filter(function(i) {
          return i.getAttribute("data-pc-name") === "splitterpanel";
        });
        return s.forEach(function(i, o) {
          i.style.flexBasis = "calc(" + t.panelSizes[o] + "% - " + (t.panels.length - 1) * t.gutterSize + "px)";
        }), !0;
      }
      return !1;
    },
    resetState: function() {
      this.initializePanels();
    }
  },
  computed: {
    panels: function() {
      var t = this, n = [];
      return this.$slots.default().forEach(function(r) {
        t.isSplitterPanel(r) ? n.push(r) : r.children instanceof Array && r.children.forEach(function(s) {
          t.isSplitterPanel(s) && n.push(s);
        });
      }), n;
    },
    gutterStyle: function() {
      return this.horizontal ? {
        width: this.gutterSize + "px"
      } : {
        height: this.gutterSize + "px"
      };
    },
    horizontal: function() {
      return this.layout === "horizontal";
    },
    getPTOptions: function() {
      var t;
      return {
        context: {
          nested: (t = this.$parentInstance) === null || t === void 0 ? void 0 : t.nestedState
        }
      };
    },
    prevPanelMinSize: function() {
      var t = Q(this.panels[this.prevPanelIndex], "minSize");
      return this.panels[this.prevPanelIndex].props && t ? t : 0;
    },
    nextPanelMinSize: function() {
      var t = Q(this.panels[this.prevPanelIndex + 1], "minSize");
      return this.panels[this.prevPanelIndex + 1].props && t ? t : 0;
    },
    dataP: function() {
      var t;
      return B(Z(Z({}, this.layout, this.layout), "nested", ((t = this.$parentInstance) === null || t === void 0 ? void 0 : t.nestedState) != null));
    }
  }
}, nt = ["data-p"], it = ["onMousedown", "onTouchstart", "onTouchmove", "onTouchend", "data-p"], ot = ["aria-orientation", "aria-valuenow", "onKeydown", "data-p"];
function rt(e, t, n, r, s, i) {
  return u(), m("div", c({
    class: e.cx("root"),
    "data-p-resizing": !1,
    "data-p": i.dataP
  }, e.ptmi("root", i.getPTOptions)), [(u(!0), m(x, null, ie(i.panels, function(o, h) {
    return u(), m(x, {
      key: h
    }, [(u(), g(b(o), {
      tabindex: "-1"
    })), h !== i.panels.length - 1 ? (u(), m("div", c({
      key: 0,
      ref_for: !0,
      ref: "gutter",
      class: e.cx("gutter"),
      role: "separator",
      tabindex: "-1",
      onMousedown: function(p) {
        return i.onGutterMouseDown(p, h);
      },
      onTouchstart: function(p) {
        return i.onGutterTouchStart(p, h);
      },
      onTouchmove: function(p) {
        return i.onGutterTouchMove(p, h);
      },
      onTouchend: function(p) {
        return i.onGutterTouchEnd(p, h);
      },
      "data-p-gutter-resizing": !1,
      "data-p": i.dataP
    }, {
      ref_for: !0
    }, e.ptm("gutter")), [a("div", c({
      class: e.cx("gutterHandle"),
      tabindex: "0",
      style: [i.gutterStyle],
      "aria-orientation": e.layout,
      "aria-valuenow": s.prevSize,
      onKeyup: t[0] || (t[0] = function() {
        return i.onGutterKeyUp && i.onGutterKeyUp.apply(i, arguments);
      }),
      onKeydown: function(p) {
        return i.onGutterKeyDown(p, h);
      },
      "data-p": i.dataP
    }, {
      ref_for: !0
    }, e.ptm("gutterHandle")), null, 16, ot)], 16, it)) : P("", !0)], 64);
  }), 128))], 16, nt);
}
de.render = rt;
var at = {
  root: function(t) {
    var n = t.instance;
    return ["p-splitterpanel", {
      "p-splitterpanel-nested": n.isNested
    }];
  }
}, st = $.extend({
  name: "splitterpanel",
  classes: at
}), lt = {
  name: "BaseSplitterPanel",
  extends: A,
  props: {
    size: {
      type: Number,
      default: null
    },
    minSize: {
      type: Number,
      default: null
    }
  },
  style: st,
  provide: function() {
    return {
      $pcSplitterPanel: this,
      $parentInstance: this
    };
  }
}, ce = {
  name: "SplitterPanel",
  extends: lt,
  inheritAttrs: !1,
  data: function() {
    return {
      nestedState: null
    };
  },
  computed: {
    isNested: function() {
      var t = this;
      return this.$slots.default().some(function(n) {
        return t.nestedState = n.type.name === "Splitter" ? !0 : null, t.nestedState;
      });
    },
    getPTOptions: function() {
      return {
        context: {
          nested: this.isNested
        }
      };
    }
  }
};
function dt(e, t, n, r, s, i) {
  return u(), m("div", c({
    ref: "container",
    class: e.cx("root")
  }, e.ptmi("root", i.getPTOptions)), [f(e.$slots, "default")], 16);
}
ce.render = dt;
var ct = `
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-fieldset-content-wrapper {
        min-height: 0;
    }

    .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`, ut = {
  root: function(t) {
    var n = t.props;
    return ["p-fieldset p-component", {
      "p-fieldset-toggleable": n.toggleable
    }];
  },
  legend: "p-fieldset-legend",
  legendLabel: "p-fieldset-legend-label",
  toggleButton: "p-fieldset-toggle-button",
  toggleIcon: "p-fieldset-toggle-icon",
  contentContainer: "p-fieldset-content-container",
  contentWrapper: "p-fieldset-content-wrapper",
  content: "p-fieldset-content"
}, pt = $.extend({
  name: "fieldset",
  style: ct,
  classes: ut
}), ht = {
  name: "BaseFieldset",
  extends: A,
  props: {
    legend: String,
    toggleable: Boolean,
    collapsed: Boolean,
    toggleButtonProps: {
      type: null,
      default: null
    }
  },
  style: pt,
  provide: function() {
    return {
      $pcFieldset: this,
      $parentInstance: this
    };
  }
}, ue = {
  name: "Fieldset",
  extends: ht,
  inheritAttrs: !1,
  emits: ["update:collapsed", "toggle"],
  data: function() {
    return {
      d_collapsed: this.collapsed
    };
  },
  watch: {
    collapsed: function(t) {
      this.d_collapsed = t;
    }
  },
  methods: {
    toggle: function(t) {
      this.d_collapsed = !this.d_collapsed, this.$emit("update:collapsed", this.d_collapsed), this.$emit("toggle", {
        originalEvent: t,
        value: this.d_collapsed
      });
    },
    onKeyDown: function(t) {
      (t.code === "Enter" || t.code === "NumpadEnter" || t.code === "Space") && (this.toggle(t), t.preventDefault());
    }
  },
  computed: {
    buttonAriaLabel: function() {
      return this.toggleButtonProps && this.toggleButtonProps.ariaLabel ? this.toggleButtonProps.ariaLabel : this.legend;
    },
    dataP: function() {
      return B({
        toggleable: this.toggleable
      });
    }
  },
  directives: {
    ripple: F
  },
  components: {
    PlusIcon: ae,
    MinusIcon: re
  }
};
function I(e) {
  "@babel/helpers - typeof";
  return I = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, I(e);
}
function te(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? te(Object(n), !0).forEach(function(r) {
      ft(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ft(e, t, n) {
  return (t = mt(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function mt(e) {
  var t = gt(e, "string");
  return I(t) == "symbol" ? t : t + "";
}
function gt(e, t) {
  if (I(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (I(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vt = ["data-p"], bt = ["data-p"], yt = ["id"], Pt = ["id", "aria-controls", "aria-expanded", "aria-label"], $t = ["id", "aria-labelledby"];
function At(e, t, n, r, s, i) {
  var o = oe("ripple");
  return u(), m("fieldset", c({
    class: e.cx("root"),
    "data-p": i.dataP
  }, e.ptmi("root")), [a("legend", c({
    class: e.cx("legend"),
    "data-p": i.dataP
  }, e.ptm("legend")), [f(e.$slots, "legend", {
    toggleCallback: i.toggle
  }, function() {
    return [e.toggleable ? P("", !0) : (u(), m("span", c({
      key: 0,
      id: e.$id + "_header",
      class: e.cx("legendLabel")
    }, e.ptm("legendLabel")), q(e.legend), 17, yt)), e.toggleable ? w((u(), m("button", c({
      key: 1,
      id: e.$id + "_header",
      type: "button",
      "aria-controls": e.$id + "_content",
      "aria-expanded": !s.d_collapsed,
      "aria-label": i.buttonAriaLabel,
      class: e.cx("toggleButton"),
      onClick: t[0] || (t[0] = function() {
        return i.toggle && i.toggle.apply(i, arguments);
      }),
      onKeydown: t[1] || (t[1] = function() {
        return i.onKeyDown && i.onKeyDown.apply(i, arguments);
      })
    }, ne(ne({}, e.toggleButtonProps), e.ptm("toggleButton"))), [f(e.$slots, e.$slots.toggleicon ? "toggleicon" : "togglericon", {
      collapsed: s.d_collapsed,
      class: S(e.cx("toggleIcon"))
    }, function() {
      return [(u(), g(b(s.d_collapsed ? "PlusIcon" : "MinusIcon"), c({
        class: e.cx("toggleIcon")
      }, e.ptm("toggleIcon")), null, 16, ["class"]))];
    }), a("span", c({
      class: e.cx("legendLabel")
    }, e.ptm("legendLabel")), q(e.legend), 17)], 16, Pt)), [[o]]) : P("", !0)];
  })], 16, bt), l(R, c({
    name: "p-collapsible"
  }, e.ptm("transition")), {
    default: d(function() {
      return [w(a("div", c({
        id: e.$id + "_content",
        class: e.cx("contentContainer"),
        role: "region",
        "aria-labelledby": e.$id + "_header"
      }, e.ptm("contentContainer")), [a("div", c({
        class: e.cx("contentWrapper")
      }, e.ptm("contentWrapper")), [a("div", c({
        class: e.cx("content")
      }, e.ptm("content")), [f(e.$slots, "default")], 16)], 16)], 16, $t), [[D, !s.d_collapsed]])];
    }),
    _: 3
  }, 16)], 16, vt);
}
ue.render = At;
var St = `
    .p-panel {
        display: block;
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panel-content-wrapper {
        min-height: 0;
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`, Tt = {
  root: function(t) {
    var n = t.props;
    return ["p-panel p-component", {
      "p-panel-toggleable": n.toggleable
    }];
  },
  header: "p-panel-header",
  title: "p-panel-title",
  headerActions: "p-panel-header-actions",
  pcToggleButton: "p-panel-toggle-button",
  contentContainer: "p-panel-content-container",
  contentWrapper: "p-panel-content-wrapper",
  content: "p-panel-content",
  footer: "p-panel-footer"
}, wt = $.extend({
  name: "panel",
  style: St,
  classes: Tt
}), zt = {
  name: "BasePanel",
  extends: A,
  props: {
    header: String,
    toggleable: Boolean,
    collapsed: Boolean,
    toggleButtonProps: {
      type: Object,
      default: function() {
        return {
          severity: "secondary",
          text: !0,
          rounded: !0
        };
      }
    }
  },
  style: wt,
  provide: function() {
    return {
      $pcPanel: this,
      $parentInstance: this
    };
  }
}, pe = {
  name: "Panel",
  extends: zt,
  inheritAttrs: !1,
  emits: ["update:collapsed", "toggle"],
  data: function() {
    return {
      d_collapsed: this.collapsed
    };
  },
  watch: {
    collapsed: function(t) {
      this.d_collapsed = t;
    }
  },
  methods: {
    toggle: function(t) {
      this.d_collapsed = !this.d_collapsed, this.$emit("update:collapsed", this.d_collapsed), this.$emit("toggle", {
        originalEvent: t,
        value: this.d_collapsed
      });
    },
    onKeyDown: function(t) {
      (t.code === "Enter" || t.code === "NumpadEnter" || t.code === "Space") && (this.toggle(t), t.preventDefault());
    }
  },
  computed: {
    buttonAriaLabel: function() {
      return this.toggleButtonProps && this.toggleButtonProps.ariaLabel ? this.toggleButtonProps.ariaLabel : this.header;
    },
    dataP: function() {
      return B({
        toggleable: this.toggleable
      });
    }
  },
  components: {
    PlusIcon: ae,
    MinusIcon: re,
    Button: se
  },
  directives: {
    ripple: F
  }
}, xt = ["data-p"], kt = ["data-p"], It = ["id"], Et = ["id", "aria-labelledby"];
function Lt(e, t, n, r, s, i) {
  var o = C("Button");
  return u(), m("div", c({
    class: e.cx("root"),
    "data-p": i.dataP
  }, e.ptmi("root")), [a("div", c({
    class: e.cx("header"),
    "data-p": i.dataP
  }, e.ptm("header")), [f(e.$slots, "header", {
    id: e.$id + "_header",
    class: S(e.cx("title")),
    collapsed: s.d_collapsed
  }, function() {
    return [e.header ? (u(), m("span", c({
      key: 0,
      id: e.$id + "_header",
      class: e.cx("title")
    }, e.ptm("title")), q(e.header), 17, It)) : P("", !0)];
  }), a("div", c({
    class: e.cx("headerActions")
  }, e.ptm("headerActions")), [f(e.$slots, "icons"), e.toggleable ? f(e.$slots, "togglebutton", {
    key: 0,
    collapsed: s.d_collapsed,
    toggleCallback: function(v) {
      return i.toggle(v);
    },
    keydownCallback: function(v) {
      return i.onKeyDown(v);
    }
  }, function() {
    return [l(o, c({
      id: e.$id + "_header",
      class: e.cx("pcToggleButton"),
      "aria-label": i.buttonAriaLabel,
      "aria-controls": e.$id + "_content",
      "aria-expanded": !s.d_collapsed,
      unstyled: e.unstyled,
      onClick: t[0] || (t[0] = function(h) {
        return i.toggle(h);
      }),
      onKeydown: t[1] || (t[1] = function(h) {
        return i.onKeyDown(h);
      })
    }, e.toggleButtonProps, {
      pt: e.ptm("pcToggleButton")
    }), {
      icon: d(function(h) {
        return [f(e.$slots, e.$slots.toggleicon ? "toggleicon" : "togglericon", {
          collapsed: s.d_collapsed
        }, function() {
          return [(u(), g(b(s.d_collapsed ? "PlusIcon" : "MinusIcon"), c({
            class: h.class
          }, e.ptm("pcToggleButton").icon), null, 16, ["class"]))];
        })];
      }),
      _: 3
    }, 16, ["id", "class", "aria-label", "aria-controls", "aria-expanded", "unstyled", "pt"])];
  }) : P("", !0)], 16)], 16, kt), l(R, c({
    name: "p-collapsible"
  }, e.ptm("transition")), {
    default: d(function() {
      return [w(a("div", c({
        id: e.$id + "_content",
        class: e.cx("contentContainer"),
        role: "region",
        "aria-labelledby": e.$id + "_header"
      }, e.ptm("contentContainer")), [a("div", c({
        class: e.cx("contentWrapper")
      }, e.ptm("contentWrapper")), [a("div", c({
        class: e.cx("content")
      }, e.ptm("content")), [f(e.$slots, "default")], 16), e.$slots.footer ? (u(), m("div", c({
        key: 0,
        class: e.cx("footer")
      }, e.ptm("footer")), [f(e.$slots, "footer")], 16)) : P("", !0)], 16)], 16, Et), [[D, !s.d_collapsed]])];
    }),
    _: 3
  }, 16)], 16, xt);
}
pe.render = Lt;
var _t = {
  root: "p-tabpanels"
}, Ct = $.extend({
  name: "tabpanels",
  classes: _t
}), qt = {
  name: "BaseTabPanels",
  extends: A,
  props: {},
  style: Ct,
  provide: function() {
    return {
      $pcTabPanels: this,
      $parentInstance: this
    };
  }
}, he = {
  name: "TabPanels",
  extends: qt,
  inheritAttrs: !1
};
function Bt(e, t, n, r, s, i) {
  return u(), m("div", c({
    class: e.cx("root"),
    role: "presentation"
  }, e.ptmi("root")), [f(e.$slots, "default")], 16);
}
he.render = Bt;
var Dt = {
  root: function(t) {
    var n = t.instance;
    return ["p-tabpanel", {
      "p-tabpanel-active": n.active
    }];
  }
}, Mt = $.extend({
  name: "tabpanel",
  classes: Dt
}), Kt = {
  name: "BaseTabPanel",
  extends: A,
  props: {
    // in Tabs
    value: {
      type: [String, Number],
      default: void 0
    },
    as: {
      type: [String, Object],
      default: "DIV"
    },
    asChild: {
      type: Boolean,
      default: !1
    },
    // in TabView
    header: null,
    headerStyle: null,
    headerClass: null,
    headerProps: null,
    headerActionProps: null,
    contentStyle: null,
    contentClass: null,
    contentProps: null,
    disabled: Boolean
  },
  style: Mt,
  provide: function() {
    return {
      $pcTabPanel: this,
      $parentInstance: this
    };
  }
}, fe = {
  name: "TabPanel",
  extends: Kt,
  inheritAttrs: !1,
  inject: ["$pcTabs"],
  computed: {
    active: function() {
      var t;
      return Ee((t = this.$pcTabs) === null || t === void 0 ? void 0 : t.d_value, this.value);
    },
    id: function() {
      var t;
      return "".concat((t = this.$pcTabs) === null || t === void 0 ? void 0 : t.$id, "_tabpanel_").concat(this.value);
    },
    ariaLabelledby: function() {
      var t;
      return "".concat((t = this.$pcTabs) === null || t === void 0 ? void 0 : t.$id, "_tab_").concat(this.value);
    },
    attrs: function() {
      return c(this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    a11yAttrs: function() {
      var t;
      return {
        id: this.id,
        tabindex: (t = this.$pcTabs) === null || t === void 0 ? void 0 : t.tabindex,
        role: "tabpanel",
        "aria-labelledby": this.ariaLabelledby,
        "data-pc-name": "tabpanel",
        "data-p-active": this.active
      };
    },
    ptParams: function() {
      return {
        context: {
          active: this.active
        }
      };
    }
  }
};
function Nt(e, t, n, r, s, i) {
  var o, h;
  return i.$pcTabs ? (u(), m(x, {
    key: 1
  }, [e.asChild ? f(e.$slots, "default", {
    key: 1,
    class: S(e.cx("root")),
    active: i.active,
    a11yAttrs: i.a11yAttrs
  }) : (u(), m(x, {
    key: 0
  }, [!((o = i.$pcTabs) !== null && o !== void 0 && o.lazy) || i.active ? w((u(), g(b(e.as), c({
    key: 0,
    class: e.cx("root")
  }, i.attrs), {
    default: d(function() {
      return [f(e.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"])), [[D, (h = i.$pcTabs) !== null && h !== void 0 && h.lazy ? !0 : i.active]]) : P("", !0)], 64))], 64)) : f(e.$slots, "default", {
    key: 0
  });
}
fe.render = Nt;
var jt = {
  root: "p-accordioncontent",
  contentWrapper: "p-accordioncontent-wrapper",
  content: "p-accordioncontent-content"
}, Ot = $.extend({
  name: "accordioncontent",
  classes: jt
}), Ht = {
  name: "BaseAccordionContent",
  extends: A,
  props: {
    as: {
      type: [String, Object],
      default: "DIV"
    },
    asChild: {
      type: Boolean,
      default: !1
    }
  },
  style: Ot,
  provide: function() {
    return {
      $pcAccordionContent: this,
      $parentInstance: this
    };
  }
}, G = {
  name: "AccordionContent",
  extends: Ht,
  inheritAttrs: !1,
  inject: ["$pcAccordion", "$pcAccordionPanel"],
  computed: {
    id: function() {
      return "".concat(this.$pcAccordion.$id, "_accordioncontent_").concat(this.$pcAccordionPanel.value);
    },
    ariaLabelledby: function() {
      return "".concat(this.$pcAccordion.$id, "_accordionheader_").concat(this.$pcAccordionPanel.value);
    },
    attrs: function() {
      return c(this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    a11yAttrs: function() {
      return {
        id: this.id,
        role: "region",
        "aria-labelledby": this.ariaLabelledby,
        "data-pc-name": "accordioncontent",
        "data-p-active": this.$pcAccordionPanel.active
      };
    },
    ptParams: function() {
      return {
        context: {
          active: this.$pcAccordionPanel.active
        }
      };
    }
  }
};
function Ut(e, t, n, r, s, i) {
  return e.asChild ? f(e.$slots, "default", {
    key: 1,
    class: S(e.cx("root")),
    active: i.$pcAccordionPanel.active,
    a11yAttrs: i.a11yAttrs
  }) : (u(), g(R, c({
    key: 0,
    name: "p-collapsible"
  }, e.ptm("transition", i.ptParams)), {
    default: d(function() {
      return [!i.$pcAccordion.lazy || i.$pcAccordionPanel.active ? w((u(), g(b(e.as), c({
        key: 0,
        class: e.cx("root")
      }, i.attrs), {
        default: d(function() {
          return [a("div", c({
            class: e.cx("contentWrapper")
          }, e.ptm("contentWrapper", i.ptParams)), [a("div", c({
            class: e.cx("content")
          }, e.ptm("content", i.ptParams)), [f(e.$slots, "default")], 16)], 16)];
        }),
        _: 3
      }, 16, ["class"])), [[D, i.$pcAccordion.lazy ? !0 : i.$pcAccordionPanel.active]]) : P("", !0)];
    }),
    _: 3
  }, 16));
}
G.render = Ut;
var Ft = {
  root: "p-accordionheader",
  toggleicon: "p-accordionheader-toggle-icon"
}, Rt = $.extend({
  name: "accordionheader",
  classes: Ft
}), Gt = {
  name: "BaseAccordionHeader",
  extends: A,
  props: {
    as: {
      type: [String, Object],
      default: "BUTTON"
    },
    asChild: {
      type: Boolean,
      default: !1
    }
  },
  style: Rt,
  provide: function() {
    return {
      $pcAccordionHeader: this,
      $parentInstance: this
    };
  }
}, W = {
  name: "AccordionHeader",
  extends: Gt,
  inheritAttrs: !1,
  inject: ["$pcAccordion", "$pcAccordionPanel"],
  methods: {
    onFocus: function() {
      this.$pcAccordion.selectOnFocus && this.changeActiveValue();
    },
    onClick: function() {
      !this.$pcAccordion.selectOnFocus && this.changeActiveValue();
    },
    onKeydown: function(t) {
      switch (t.code) {
        case "ArrowDown":
          this.onArrowDownKey(t);
          break;
        case "ArrowUp":
          this.onArrowUpKey(t);
          break;
        case "Home":
          this.onHomeKey(t);
          break;
        case "End":
          this.onEndKey(t);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onEnterKey(t);
          break;
      }
    },
    onArrowDownKey: function(t) {
      var n = this.findNextPanel(this.findPanel(t.currentTarget));
      n ? this.changeFocusedPanel(t, n) : this.onHomeKey(t), t.preventDefault();
    },
    onArrowUpKey: function(t) {
      var n = this.findPrevPanel(this.findPanel(t.currentTarget));
      n ? this.changeFocusedPanel(t, n) : this.onEndKey(t), t.preventDefault();
    },
    onHomeKey: function(t) {
      var n = this.findFirstPanel();
      this.changeFocusedPanel(t, n), t.preventDefault();
    },
    onEndKey: function(t) {
      var n = this.findLastPanel();
      this.changeFocusedPanel(t, n), t.preventDefault();
    },
    onEnterKey: function(t) {
      this.changeActiveValue(), t.preventDefault();
    },
    findPanel: function(t) {
      return t?.closest('[data-pc-name="accordionpanel"]');
    },
    findHeader: function(t) {
      return _e(t, '[data-pc-name="accordionheader"]');
    },
    findNextPanel: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = n ? t : t.nextElementSibling;
      return r ? J(r, "data-p-disabled") ? this.findNextPanel(r) : this.findHeader(r) : null;
    },
    findPrevPanel: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = n ? t : t.previousElementSibling;
      return r ? J(r, "data-p-disabled") ? this.findPrevPanel(r) : this.findHeader(r) : null;
    },
    findFirstPanel: function() {
      return this.findNextPanel(this.$pcAccordion.$el.firstElementChild, !0);
    },
    findLastPanel: function() {
      return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild, !0);
    },
    changeActiveValue: function() {
      this.$pcAccordion.updateValue(this.$pcAccordionPanel.value);
    },
    changeFocusedPanel: function(t, n) {
      Le(this.findHeader(n));
    }
  },
  computed: {
    id: function() {
      return "".concat(this.$pcAccordion.$id, "_accordionheader_").concat(this.$pcAccordionPanel.value);
    },
    ariaControls: function() {
      return "".concat(this.$pcAccordion.$id, "_accordioncontent_").concat(this.$pcAccordionPanel.value);
    },
    attrs: function() {
      return c(this.asAttrs, this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    asAttrs: function() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.$pcAccordionPanel.disabled
      } : void 0;
    },
    a11yAttrs: function() {
      return {
        id: this.id,
        tabindex: this.$pcAccordion.tabindex,
        "aria-expanded": this.$pcAccordionPanel.active,
        "aria-controls": this.ariaControls,
        "data-pc-name": "accordionheader",
        "data-p-disabled": this.$pcAccordionPanel.disabled,
        "data-p-active": this.$pcAccordionPanel.active,
        onFocus: this.onFocus,
        onKeydown: this.onKeydown
      };
    },
    ptParams: function() {
      return {
        context: {
          active: this.$pcAccordionPanel.active
        }
      };
    },
    dataP: function() {
      return B({
        active: this.$pcAccordionPanel.active
      });
    }
  },
  components: {
    ChevronUpIcon: le,
    ChevronDownIcon: je
  },
  directives: {
    ripple: F
  }
};
function Wt(e, t, n, r, s, i) {
  var o = oe("ripple");
  return e.asChild ? f(e.$slots, "default", {
    key: 1,
    class: S(e.cx("root")),
    active: i.$pcAccordionPanel.active,
    a11yAttrs: i.a11yAttrs,
    onClick: i.onClick
  }) : w((u(), g(b(e.as), c({
    key: 0,
    "data-p": i.dataP,
    class: e.cx("root"),
    onClick: i.onClick
  }, i.attrs), {
    default: d(function() {
      return [f(e.$slots, "default", {
        active: i.$pcAccordionPanel.active
      }), f(e.$slots, "toggleicon", {
        active: i.$pcAccordionPanel.active,
        class: S(e.cx("toggleicon"))
      }, function() {
        return [i.$pcAccordionPanel.active ? (u(), g(b(i.$pcAccordion.$slots.collapseicon ? i.$pcAccordion.$slots.collapseicon : i.$pcAccordion.collapseIcon ? "span" : "ChevronUpIcon"), c({
          key: 0,
          class: [i.$pcAccordion.collapseIcon, e.cx("toggleicon")],
          "aria-hidden": "true"
        }, e.ptm("toggleicon", i.ptParams)), null, 16, ["class"])) : (u(), g(b(i.$pcAccordion.$slots.expandicon ? i.$pcAccordion.$slots.expandicon : i.$pcAccordion.expandIcon ? "span" : "ChevronDownIcon"), c({
          key: 1,
          class: [i.$pcAccordion.expandIcon, e.cx("toggleicon")],
          "aria-hidden": "true"
        }, e.ptm("toggleicon", i.ptParams)), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["data-p", "class", "onClick"])), [[o]]);
}
W.render = Wt;
var Vt = {
  root: function(t) {
    var n = t.instance, r = t.props;
    return ["p-accordionpanel", {
      "p-accordionpanel-active": n.active,
      "p-disabled": r.disabled
    }];
  }
}, Xt = $.extend({
  name: "accordionpanel",
  classes: Vt
}), Yt = {
  name: "BaseAccordionPanel",
  extends: A,
  props: {
    value: {
      type: [String, Number],
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "DIV"
    },
    asChild: {
      type: Boolean,
      default: !1
    }
  },
  style: Xt,
  provide: function() {
    return {
      $pcAccordionPanel: this,
      $parentInstance: this
    };
  }
}, V = {
  name: "AccordionPanel",
  extends: Yt,
  inheritAttrs: !1,
  inject: ["$pcAccordion"],
  computed: {
    active: function() {
      return this.$pcAccordion.isItemActive(this.value);
    },
    attrs: function() {
      return c(this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    a11yAttrs: function() {
      return {
        "data-pc-name": "accordionpanel",
        "data-p-disabled": this.disabled,
        "data-p-active": this.active
      };
    },
    ptParams: function() {
      return {
        context: {
          active: this.active
        }
      };
    }
  }
};
function Jt(e, t, n, r, s, i) {
  return e.asChild ? f(e.$slots, "default", {
    key: 1,
    class: S(e.cx("root")),
    active: i.active,
    a11yAttrs: i.a11yAttrs
  }) : (u(), g(b(e.as), c({
    key: 0,
    class: e.cx("root")
  }, i.attrs), {
    default: d(function() {
      return [f(e.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]));
}
V.render = Jt;
var Qt = `
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`, Zt = {
  root: "p-accordion p-component"
}, en = $.extend({
  name: "accordion",
  style: Qt,
  classes: Zt
}), tn = {
  name: "BaseAccordion",
  extends: A,
  props: {
    value: {
      type: [String, Number, Array],
      default: void 0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: 0
    },
    selectOnFocus: {
      type: Boolean,
      default: !1
    },
    expandIcon: {
      type: String,
      default: void 0
    },
    collapseIcon: {
      type: String,
      default: void 0
    },
    // @deprecated since v4.
    activeIndex: {
      type: [Number, Array],
      default: null
    }
  },
  style: en,
  provide: function() {
    return {
      $pcAccordion: this,
      $parentInstance: this
    };
  }
}, me = {
  name: "Accordion",
  extends: tn,
  inheritAttrs: !1,
  emits: ["update:value", "update:activeIndex", "tab-open", "tab-close", "tab-click"],
  data: function() {
    return {
      d_value: this.value
    };
  },
  watch: {
    value: function(t) {
      this.d_value = t;
    },
    activeIndex: {
      immediate: !0,
      handler: function(t) {
        this.hasAccordionTab && (this.d_value = this.multiple ? t?.map(String) : t?.toString());
      }
    }
  },
  methods: {
    isItemActive: function(t) {
      var n;
      return this.multiple ? (n = this.d_value) === null || n === void 0 ? void 0 : n.includes(t) : this.d_value === t;
    },
    updateValue: function(t) {
      var n, r = this.isItemActive(t);
      this.multiple ? r ? this.d_value = this.d_value.filter(function(s) {
        return s !== t;
      }) : this.d_value ? this.d_value.push(t) : this.d_value = [t] : this.d_value = r ? null : t, this.$emit("update:value", this.d_value), this.$emit("update:activeIndex", this.multiple ? (n = this.d_value) === null || n === void 0 ? void 0 : n.map(Number) : Number(this.d_value)), this.$emit(r ? "tab-close" : "tab-open", {
        originalEvent: void 0,
        index: Number(t)
      });
    },
    // @deprecated since v4. Use new structure instead.
    isAccordionTab: function(t) {
      return t.type.name === "AccordionTab";
    },
    getTabProp: function(t, n) {
      return t.props ? t.props[n] : void 0;
    },
    getKey: function(t, n) {
      return this.getTabProp(t, "header") || n;
    },
    getHeaderPT: function(t, n) {
      var r = this;
      return {
        root: c({
          onClick: function(i) {
            return r.onTabClick(i, n);
          }
        }, this.getTabProp(t, "headerProps"), this.getTabPT(t, "header", n)),
        toggleicon: c(this.getTabProp(t, "headeractionprops"), this.getTabPT(t, "headeraction", n))
      };
    },
    getContentPT: function(t, n) {
      return {
        root: c(this.getTabProp(t, "contentProps"), this.getTabPT(t, "toggleablecontent", n)),
        transition: this.getTabPT(t, "transition", n),
        content: this.getTabPT(t, "content", n)
      };
    },
    getTabPT: function(t, n, r) {
      var s = this.tabs.length, i = {
        props: t.props || {},
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index: r,
          count: s,
          first: r === 0,
          last: r === s - 1,
          active: this.isItemActive("".concat(r))
        }
      };
      return c(this.ptm("accordiontab.".concat(n), i), this.ptmo(this.getTabProp(t, "pt"), n, i));
    },
    onTabClick: function(t, n) {
      this.$emit("tab-click", {
        originalEvent: t,
        index: n
      });
    }
  },
  computed: {
    // @deprecated since v4.
    tabs: function() {
      var t = this;
      return this.$slots.default().reduce(function(n, r) {
        return t.isAccordionTab(r) ? n.push(r) : r.children && r.children instanceof Array && r.children.forEach(function(s) {
          t.isAccordionTab(s) && n.push(s);
        }), n;
      }, []);
    },
    hasAccordionTab: function() {
      return this.tabs.length;
    }
  },
  components: {
    AccordionPanel: V,
    AccordionHeader: W,
    AccordionContent: G,
    ChevronUpIcon: le,
    ChevronRightIcon: Ne
  }
};
function nn(e, t, n, r, s, i) {
  var o = C("AccordionHeader"), h = C("AccordionContent"), v = C("AccordionPanel");
  return u(), m("div", c({
    class: e.cx("root")
  }, e.ptmi("root")), [i.hasAccordionTab ? (u(!0), m(x, {
    key: 0
  }, ie(i.tabs, function(p, y) {
    return u(), g(v, {
      key: i.getKey(p, y),
      value: "".concat(y),
      pt: {
        root: i.getTabPT(p, "root", y)
      },
      disabled: i.getTabProp(p, "disabled")
    }, {
      default: d(function() {
        return [l(o, {
          class: S(i.getTabProp(p, "headerClass")),
          pt: i.getHeaderPT(p, y)
        }, {
          toggleicon: d(function(z) {
            return [z.active ? (u(), g(b(e.$slots.collapseicon ? e.$slots.collapseicon : e.collapseIcon ? "span" : "ChevronDownIcon"), c({
              key: 0,
              class: [e.collapseIcon, z.class],
              "aria-hidden": "true"
            }, {
              ref_for: !0
            }, i.getTabPT(p, "headericon", y)), null, 16, ["class"])) : (u(), g(b(e.$slots.expandicon ? e.$slots.expandicon : e.expandIcon ? "span" : "ChevronUpIcon"), c({
              key: 1,
              class: [e.expandIcon, z.class],
              "aria-hidden": "true"
            }, {
              ref_for: !0
            }, i.getTabPT(p, "headericon", y)), null, 16, ["class"]))];
          }),
          default: d(function() {
            return [p.children && p.children.headericon ? (u(), g(b(p.children.headericon), {
              key: 0,
              isTabActive: i.isItemActive("".concat(y)),
              active: i.isItemActive("".concat(y)),
              index: y
            }, null, 8, ["isTabActive", "active", "index"])) : P("", !0), p.props && p.props.header ? (u(), m("span", c({
              key: 1,
              ref_for: !0
            }, i.getTabPT(p, "headertitle", y)), q(p.props.header), 17)) : P("", !0), p.children && p.children.header ? (u(), g(b(p.children.header), {
              key: 2
            })) : P("", !0)];
          }),
          _: 2
        }, 1032, ["class", "pt"]), l(h, {
          pt: i.getContentPT(p, y)
        }, {
          default: d(function() {
            return [(u(), g(b(p)))];
          }),
          _: 2
        }, 1032, ["pt"])];
      }),
      _: 2
    }, 1032, ["value", "pt", "disabled"]);
  }), 128)) : f(e.$slots, "default", {
    key: 1
  })], 16);
}
me.render = nn;
const on = { class: "flex flex-col" }, rn = { class: "card" }, an = { class: "flex flex-col md:flex-row gap-8" }, sn = { class: "md:w-1/2" }, ln = { class: "card" }, dn = { class: "card" }, cn = { class: "md:w-1/2 mt-6 md:mt-0" }, un = { class: "card" }, pn = { class: "card" }, hn = { class: "flex items-center justify-between mb-0" }, fn = { class: "card mt-8" }, mn = { class: "flex flex-col md:flex-row" }, gn = { class: "w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5" }, vn = { class: "flex flex-col gap-2" }, bn = { class: "flex flex-col gap-2" }, yn = { class: "flex" }, Pn = { class: "w-full md:w-2/12" }, $n = { class: "w-full md:w-5/12 flex items-center justify-center py-5" }, An = { class: "card" }, jn = {
  __name: "PanelsDoc",
  setup(e) {
    const t = H([
      {
        label: "Save",
        icon: "pi pi-check"
      },
      {
        label: "Update",
        icon: "pi pi-upload"
      },
      {
        label: "Delete",
        icon: "pi pi-trash"
      },
      {
        label: "Home Page",
        icon: "pi pi-home"
      }
    ]), n = H([
      { label: "Save", icon: "pi pi-fw pi-check" },
      { label: "Update", icon: "pi pi-fw pi-refresh" },
      { label: "Delete", icon: "pi pi-fw pi-trash" }
    ]), r = H(null);
    function s() {
      r.value.toggle(event);
    }
    return (i, o) => {
      const h = se, v = Fe, p = Re, y = Ue, z = He, ge = Oe, M = W, K = G, N = V, ve = me, j = Me, be = De, O = fe, ye = he, Pe = Ke, $e = pe, Ae = ue, Se = Be, Te = qe, X = Ce, E = ce, Y = de;
      return u(), m("div", on, [
        a("div", rn, [
          o[1] || (o[1] = a("div", { class: "font-semibold text-xl mb-4" }, "Toolbar", -1)),
          l(ge, null, {
            start: d(() => [
              l(h, {
                icon: "pi pi-plus",
                class: "mr-2",
                severity: "secondary",
                text: ""
              }),
              l(h, {
                icon: "pi pi-print",
                class: "mr-2",
                severity: "secondary",
                text: ""
              }),
              l(h, {
                icon: "pi pi-upload",
                severity: "secondary",
                text: ""
              })
            ]),
            center: d(() => [
              l(y, null, {
                default: d(() => [
                  l(v, null, {
                    default: d(() => [...o[0] || (o[0] = [
                      a("i", { class: "pi pi-search" }, null, -1)
                    ])]),
                    _: 1
                  }),
                  l(p, { placeholder: "Search" })
                ]),
                _: 1
              })
            ]),
            end: d(() => [
              l(z, {
                label: "Save",
                model: t.value
              }, null, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        a("div", an, [
          a("div", sn, [
            a("div", ln, [
              o[8] || (o[8] = a("div", { class: "font-semibold text-xl mb-4" }, "Accordion", -1)),
              l(ve, { value: "0" }, {
                default: d(() => [
                  l(N, { value: "0" }, {
                    default: d(() => [
                      l(M, null, {
                        default: d(() => [...o[2] || (o[2] = [
                          T("Header I", -1)
                        ])]),
                        _: 1
                      }),
                      l(K, null, {
                        default: d(() => [...o[3] || (o[3] = [
                          a("p", { class: "m-0" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  l(N, { value: "1" }, {
                    default: d(() => [
                      l(M, null, {
                        default: d(() => [...o[4] || (o[4] = [
                          T("Header II", -1)
                        ])]),
                        _: 1
                      }),
                      l(K, null, {
                        default: d(() => [...o[5] || (o[5] = [
                          a("p", { class: "m-0" }, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  l(N, { value: "2" }, {
                    default: d(() => [
                      l(M, null, {
                        default: d(() => [...o[6] || (o[6] = [
                          T("Header III", -1)
                        ])]),
                        _: 1
                      }),
                      l(K, null, {
                        default: d(() => [...o[7] || (o[7] = [
                          a("p", { class: "m-0" }, " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            a("div", dn, [
              o[15] || (o[15] = a("div", { class: "font-semibold text-xl mb-4" }, "Tabs", -1)),
              l(Pe, { value: "0" }, {
                default: d(() => [
                  l(be, null, {
                    default: d(() => [
                      l(j, { value: "0" }, {
                        default: d(() => [...o[9] || (o[9] = [
                          T("Header I", -1)
                        ])]),
                        _: 1
                      }),
                      l(j, { value: "1" }, {
                        default: d(() => [...o[10] || (o[10] = [
                          T("Header II", -1)
                        ])]),
                        _: 1
                      }),
                      l(j, { value: "2" }, {
                        default: d(() => [...o[11] || (o[11] = [
                          T("Header III", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  l(ye, null, {
                    default: d(() => [
                      l(O, { value: "0" }, {
                        default: d(() => [...o[12] || (o[12] = [
                          a("p", { class: "m-0" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ", -1)
                        ])]),
                        _: 1
                      }),
                      l(O, { value: "1" }, {
                        default: d(() => [...o[13] || (o[13] = [
                          a("p", { class: "m-0" }, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ", -1)
                        ])]),
                        _: 1
                      }),
                      l(O, { value: "2" }, {
                        default: d(() => [...o[14] || (o[14] = [
                          a("p", { class: "m-0" }, " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          a("div", cn, [
            a("div", un, [
              o[17] || (o[17] = a("div", { class: "font-semibold text-xl mb-4" }, "Panel", -1)),
              l($e, {
                header: "Header",
                toggleable: !0
              }, {
                default: d(() => [...o[16] || (o[16] = [
                  a("p", { class: "leading-normal m-0" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ", -1)
                ])]),
                _: 1
              })
            ]),
            a("div", pn, [
              o[19] || (o[19] = a("div", { class: "font-semibold text-xl mb-4" }, "Fieldset", -1)),
              l(Ae, {
                legend: "Legend",
                toggleable: !0
              }, {
                default: d(() => [...o[18] || (o[18] = [
                  a("p", { class: "leading-normal m-0" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ", -1)
                ])]),
                _: 1
              })
            ]),
            l(Te, null, {
              title: d(() => [
                a("div", hn, [
                  o[20] || (o[20] = a("div", { class: "font-semibold text-xl mb-4" }, "Card", -1)),
                  l(h, {
                    icon: "pi pi-plus",
                    class: "p-button-text",
                    onClick: s
                  })
                ]),
                l(Se, {
                  id: "config_menu",
                  ref_key: "menuRef",
                  ref: r,
                  model: n.value,
                  popup: !0
                }, null, 8, ["model"])
              ]),
              content: d(() => [...o[21] || (o[21] = [
                a("p", { class: "leading-normal m-0" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        a("div", fn, [
          o[26] || (o[26] = a("div", { class: "font-semibold text-xl mb-4" }, "Divider", -1)),
          a("div", mn, [
            a("div", gn, [
              a("div", vn, [
                o[22] || (o[22] = a("label", { for: "username" }, "Username", -1)),
                l(p, {
                  id: "username",
                  type: "text"
                })
              ]),
              a("div", bn, [
                o[23] || (o[23] = a("label", { for: "password" }, "Password", -1)),
                l(p, {
                  id: "password",
                  type: "password"
                })
              ]),
              a("div", yn, [
                l(h, {
                  label: "Login",
                  icon: "pi pi-user",
                  class: "w-full max-w-[17.35rem] mx-auto"
                })
              ])
            ]),
            a("div", Pn, [
              l(X, {
                layout: "vertical",
                class: "hidden! md:flex!"
              }, {
                default: d(() => [...o[24] || (o[24] = [
                  a("b", null, "OR", -1)
                ])]),
                _: 1
              }),
              l(X, {
                layout: "horizontal",
                class: "flex! md:hidden!",
                align: "center"
              }, {
                default: d(() => [...o[25] || (o[25] = [
                  a("b", null, "OR", -1)
                ])]),
                _: 1
              })
            ]),
            a("div", $n, [
              l(h, {
                label: "Sign Up",
                icon: "pi pi-user-plus",
                severity: "success",
                class: "w-full max-w-[17.35rem] mx-auto"
              })
            ])
          ])
        ]),
        a("div", An, [
          o[30] || (o[30] = a("div", { class: "font-semibold text-xl mb-4" }, "Splitter", -1)),
          l(Y, {
            style: { height: "300px" },
            class: "mb-8"
          }, {
            default: d(() => [
              l(E, {
                size: 30,
                minSize: 10
              }, {
                default: d(() => [...o[27] || (o[27] = [
                  a("div", { className: "h-full flex items-center justify-center" }, "Panel 1", -1)
                ])]),
                _: 1
              }),
              l(E, { size: 70 }, {
                default: d(() => [
                  l(Y, { layout: "vertical" }, {
                    default: d(() => [
                      l(E, { size: 15 }, {
                        default: d(() => [...o[28] || (o[28] = [
                          a("div", { className: "h-full flex items-center justify-center" }, "Panel 2", -1)
                        ])]),
                        _: 1
                      }),
                      l(E, { size: 50 }, {
                        default: d(() => [...o[29] || (o[29] = [
                          a("div", { className: "h-full flex items-center justify-center" }, "Panel 3", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
export {
  jn as default
};
