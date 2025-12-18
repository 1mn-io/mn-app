import { s as St } from "./index-B4LaqIEm.js";
import { B as P, s as me, R as Fe, a as ze, b as be, c as F, l as Ne, z as Ue, Y as ge, I as ve, v as Ge, D as ye, d as Te, x as R, S as je, e as V, f as It, L as Ct, g as xt, h as we, i as le, r as de, W as De, P as Lt, M as ue, k as Mt, p as X, j as Vt, m as Tt } from "./main-k5gsV9f8.js";
import { V as m, H as f, I as v, m as d, E as B, W as r, J as k, a as s, F as K, ag as A, Z as T, a2 as ae, p as C, G as j, Y as pe, a0 as g, ad as ke, ah as Dt, ae as Ye, X as Bt, q as Kt, $ as Rt, L as y, P as Et } from "./runtime-dom.esm-bundler-CEAeiVlj.js";
import { s as At } from "./index-DNLqWNHG.js";
import { O as Oe, C as Se } from "./index-CgWm4MkX.js";
import { s as Xe } from "./index-BVbViMQc.js";
import { s as We } from "./index-WCl9Quga.js";
import { s as Pt, N as Ht } from "./NodeService-JehtNNUN.js";
import { a as Ze, s as Je } from "./index-1F8bg-R-.js";
import { s as $t, a as Ft, b as zt } from "./index-w7YLIfv2.js";
import { a as Nt, s as Ut } from "./index-BqojmDQN.js";
import { s as Gt } from "./index-3R5wNWFB.js";
import { s as jt } from "./index-XM0_o1yp.js";
import { s as Yt } from "./index-v_LDAzD4.js";
import { s as Xt } from "./index-CPzAk7vp.js";
import { s as Wt } from "./index-BgtAwlhB.js";
import { s as Zt } from "./index-O4H-tR2N.js";
import { s as Jt } from "./index-DAVmcROl.js";
import { s as qt, a as Qt } from "./index-Qy7YOLF_.js";
var _t = `
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`, en = {
  root: "p-inputgroup"
}, tn = P.extend({
  name: "inputgroup",
  style: _t,
  classes: en
}), nn = {
  name: "BaseInputGroup",
  extends: me,
  style: tn,
  provide: function() {
    return {
      $pcInputGroup: this,
      $parentInstance: this
    };
  }
}, qe = {
  name: "InputGroup",
  extends: nn,
  inheritAttrs: !1
};
function on(t, e, n, i, l, o) {
  return f(), m("div", d({
    class: t.cx("root")
  }, t.ptmi("root")), [v(t.$slots, "default")], 16);
}
qe.render = on;
var ln = {
  root: "p-inputgroupaddon"
}, an = P.extend({
  name: "inputgroupaddon",
  classes: ln
}), rn = {
  name: "BaseInputGroupAddon",
  extends: me,
  style: an,
  provide: function() {
    return {
      $pcInputGroupAddon: this,
      $parentInstance: this
    };
  }
}, Qe = {
  name: "InputGroupAddon",
  extends: rn,
  inheritAttrs: !1
};
function sn(t, e, n, i, l, o) {
  return f(), m("div", d({
    class: t.cx("root")
  }, t.ptmi("root")), [v(t.$slots, "default")], 16);
}
Qe.render = sn;
var dn = `
    .p-treeselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('treeselect.background');
        border: 1px solid dt('treeselect.border.color');
        transition:
            background dt('treeselect.transition.duration'),
            color dt('treeselect.transition.duration'),
            border-color dt('treeselect.transition.duration'),
            outline-color dt('treeselect.transition.duration'),
            box-shadow dt('treeselect.transition.duration');
        border-radius: dt('treeselect.border.radius');
        outline-color: transparent;
        box-shadow: dt('treeselect.shadow');
    }

    .p-treeselect:not(.p-disabled):hover {
        border-color: dt('treeselect.hover.border.color');
    }

    .p-treeselect:not(.p-disabled).p-focus {
        border-color: dt('treeselect.focus.border.color');
        box-shadow: dt('treeselect.focus.ring.shadow');
        outline: dt('treeselect.focus.ring.width') dt('treeselect.focus.ring.style') dt('treeselect.focus.ring.color');
        outline-offset: dt('treeselect.focus.ring.offset');
    }

    .p-treeselect.p-variant-filled {
        background: dt('treeselect.filled.background');
    }

    .p-treeselect.p-variant-filled:not(.p-disabled):hover {
        background: dt('treeselect.filled.hover.background');
    }

    .p-treeselect.p-variant-filled.p-focus {
        background: dt('treeselect.filled.focus.background');
    }

    .p-treeselect.p-invalid {
        border-color: dt('treeselect.invalid.border.color');
    }

    .p-treeselect.p-disabled {
        opacity: 1;
        background: dt('treeselect.disabled.background');
    }

    .p-treeselect-clear-icon {
        align-self: center;
        color: dt('treeselect.clear.icon.color');
        inset-inline-end: dt('treeselect.dropdown.width');
    }

    .p-treeselect-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('treeselect.dropdown.color');
        width: dt('treeselect.dropdown.width');
        border-start-end-radius: dt('border.radius.md');
        border-end-end-radius: dt('border.radius.md');
    }

    .p-treeselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-treeselect-label {
        display: flex;
        align-items: center;
        gap: calc(dt('treeselect.padding.y') / 2);
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: dt('treeselect.padding.y') dt('treeselect.padding.x');
        color: dt('treeselect.color');
    }

    .p-treeselect-label.p-placeholder {
        color: dt('treeselect.placeholder.color');
    }

    .p-treeselect.p-invalid .p-treeselect-label.p-placeholder {
        color: dt('treeselect.invalid.placeholder.color');
    }

    .p-treeselect:has(.p-select-clear-icon) .p-treeselect-label {
        padding-inline-end: dt('treeselect.padding.x');
    }

    .p-treeselect.p-disabled .p-treeselect-label {
        color: dt('treeselect.disabled.color');
    }

    .p-treeselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-treeselect-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('treeselect.overlay.background');
        color: dt('treeselect.overlay.color');
        border: 1px solid dt('treeselect.overlay.border.color');
        border-radius: dt('treeselect.overlay.border.radius');
        box-shadow: dt('treeselect.overlay.shadow');
        overflow: hidden;
        min-width: 100%;
        will-change: transform;
    }

    .p-treeselect-tree-container {
        overflow: auto;
    }

    .p-treeselect-empty-message {
        padding: dt('treeselect.empty.message.padding');
        background: transparent;
    }

    .p-treeselect-fluid {
        display: flex;
    }

    .p-treeselect-overlay .p-tree {
        padding: dt('treeselect.tree.padding');
    }

    .p-treeselect-overlay .p-tree-loading {
        min-height: 3rem;
    }

    .p-treeselect-label .p-chip {
        padding-block-start: calc(dt('treeselect.padding.y') / 2);
        padding-block-end: calc(dt('treeselect.padding.y') / 2);
        border-radius: dt('treeselect.chip.border.radius');
    }

    .p-treeselect-label:has(.p-chip) {
        padding: calc(dt('treeselect.padding.y') / 2) calc(dt('treeselect.padding.x') / 2);
    }

    .p-treeselect-sm .p-treeselect-label {
        font-size: dt('treeselect.sm.font.size');
        padding-block: dt('treeselect.sm.padding.y');
        padding-inline: dt('treeselect.sm.padding.x');
    }

    .p-treeselect-sm .p-treeselect-dropdown .p-icon {
        font-size: dt('treeselect.sm.font.size');
        width: dt('treeselect.sm.font.size');
        height: dt('treeselect.sm.font.size');
    }

    .p-treeselect-lg .p-treeselect-label {
        font-size: dt('treeselect.lg.font.size');
        padding-block: dt('treeselect.lg.padding.y');
        padding-inline: dt('treeselect.lg.padding.x');
    }

    .p-treeselect-lg .p-treeselect-dropdown .p-icon {
        font-size: dt('treeselect.lg.font.size');
        width: dt('treeselect.lg.font.size');
        height: dt('treeselect.lg.font.size');
    }
`, un = {
  root: function(e) {
    var n = e.props;
    return {
      position: n.appendTo === "self" ? "relative" : void 0
    };
  }
}, cn = {
  root: function(e) {
    var n = e.instance, i = e.props;
    return ["p-treeselect p-component p-inputwrapper", {
      "p-treeselect-display-chip": i.display === "chip",
      "p-disabled": i.disabled,
      "p-invalid": n.$invalid,
      "p-focus": n.focused,
      "p-variant-filled": n.$variant === "filled",
      "p-inputwrapper-filled": n.$filled,
      "p-inputwrapper-focus": n.focused || n.overlayVisible,
      "p-treeselect-open": n.overlayVisible,
      "p-treeselect-fluid": n.$fluid,
      "p-treeselect-sm p-inputfield-sm": i.size === "small",
      "p-treeselect-lg p-inputfield-lg": i.size === "large"
    }];
  },
  labelContainer: "p-treeselect-label-container",
  label: function(e) {
    var n = e.instance, i = e.props;
    return ["p-treeselect-label", {
      "p-placeholder": n.label === i.placeholder,
      "p-treeselect-label-empty": !i.placeholder && n.emptyValue
    }];
  },
  clearIcon: "p-treeselect-clear-icon",
  chip: "p-treeselect-chip-item",
  pcChip: "p-treeselect-chip",
  dropdown: "p-treeselect-dropdown",
  dropdownIcon: "p-treeselect-dropdown-icon",
  panel: "p-treeselect-overlay p-component",
  treeContainer: "p-treeselect-tree-container",
  emptyMessage: "p-treeselect-empty-message"
}, pn = P.extend({
  name: "treeselect",
  style: dn,
  classes: cn,
  inlineStyles: un
}), fn = {
  name: "BaseTreeSelect",
  extends: Ze,
  props: {
    options: Array,
    scrollHeight: {
      type: String,
      default: "20rem"
    },
    placeholder: {
      type: String,
      default: null
    },
    tabindex: {
      type: Number,
      default: null
    },
    selectionMode: {
      type: String,
      default: "single"
    },
    selectedItemsLabel: {
      type: String,
      default: null
    },
    maxSelectedLabels: {
      type: Number,
      default: null
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    emptyMessage: {
      type: String,
      default: null
    },
    display: {
      type: String,
      default: "comma"
    },
    metaKeySelection: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    loadingMode: {
      type: String,
      default: "mask"
    },
    showClear: {
      type: Boolean,
      default: !1
    },
    clearIcon: {
      type: String,
      default: void 0
    },
    filter: {
      type: Boolean,
      default: !1
    },
    filterBy: {
      type: [String, Function],
      default: "label"
    },
    filterMode: {
      type: String,
      default: "lenient"
    },
    filterPlaceholder: {
      type: String,
      default: null
    },
    filterLocale: {
      type: String,
      default: void 0
    },
    inputId: {
      type: String,
      default: null
    },
    inputClass: {
      type: [String, Object],
      default: null
    },
    inputStyle: {
      type: Object,
      default: null
    },
    inputProps: {
      type: null,
      default: null
    },
    panelClass: {
      type: [String, Object],
      default: null
    },
    panelProps: {
      type: null,
      default: null
    },
    ariaLabelledby: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    },
    expandedKeys: {
      type: null,
      default: null
    }
  },
  style: pn,
  provide: function() {
    return {
      $pcTreeSelect: this,
      $parentInstance: this
    };
  }
};
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, W(t);
}
function ce(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = _e(t)) || e) {
      n && (t = n);
      var i = 0, l = function() {
      };
      return { s: l, n: function() {
        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
      }, e: function(p) {
        throw p;
      }, f: l };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, h = !0, c = !1;
  return { s: function() {
    n = n.call(t);
  }, n: function() {
    var p = n.next();
    return h = p.done, p;
  }, e: function(p) {
    c = !0, o = p;
  }, f: function() {
    try {
      h || n.return == null || n.return();
    } finally {
      if (c) throw o;
    }
  } };
}
function Be(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Ke(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Be(Object(n), !0).forEach(function(i) {
      hn(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Be(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function hn(t, e, n) {
  return (e = mn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function mn(t) {
  var e = bn(t, "string");
  return W(e) == "symbol" ? e : e + "";
}
function bn(t, e) {
  if (W(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(t, e);
    if (W(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function gn(t) {
  return wn(t) || yn(t) || _e(t) || vn();
}
function vn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _e(t, e) {
  if (t) {
    if (typeof t == "string") return fe(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fe(t, e) : void 0;
  }
}
function yn(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function wn(t) {
  if (Array.isArray(t)) return fe(t);
}
function fe(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
  return i;
}
var et = {
  name: "TreeSelect",
  extends: fn,
  inheritAttrs: !1,
  emits: ["before-show", "before-hide", "change", "show", "hide", "node-select", "node-unselect", "node-expand", "node-collapse", "focus", "blur", "update:expandedKeys"],
  inject: {
    $pcFluid: {
      default: null
    }
  },
  data: function() {
    return {
      focused: !1,
      overlayVisible: !1,
      d_expandedKeys: this.expandedKeys || {}
    };
  },
  watch: {
    modelValue: {
      handler: function() {
        this.selfChange || this.updateTreeState(), this.selfChange = !1;
      },
      immediate: !0
    },
    options: function() {
      this.updateTreeState();
    },
    expandedKeys: function(e) {
      this.d_expandedKeys = e;
    }
  },
  outsideClickListener: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  selfChange: !1,
  selfClick: !1,
  beforeUnmount: function() {
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.overlay && (R.clear(this.overlay), this.overlay = null);
  },
  mounted: function() {
    this.updateTreeState();
  },
  methods: {
    show: function() {
      this.$emit("before-show"), this.overlayVisible = !0;
    },
    hide: function() {
      this.$emit("before-hide"), this.overlayVisible = !1, this.$refs.focusInput.focus();
    },
    onFocus: function(e) {
      this.focused = !0, this.$emit("focus", e);
    },
    onBlur: function(e) {
      var n, i;
      this.focused = !1, this.$emit("blur", e), (n = (i = this.formField).onBlur) === null || n === void 0 || n.call(i);
    },
    onClick: function(e) {
      this.disabled || e.target.tagName === "INPUT" || e.target.getAttribute("data-pc-section") === "clearicon" || e.target.closest('[data-pc-section="clearicon"]') || (!this.overlay || !this.overlay.contains(e.target)) && (this.overlayVisible ? this.hide() : this.show(), V(this.$refs.focusInput));
    },
    onClearClick: function() {
      this.onSelectionChange(null);
    },
    onSelectionChange: function(e) {
      this.selfChange = !0, this.writeValue(e), this.$emit("change", e);
    },
    onNodeSelect: function(e) {
      this.$emit("node-select", e), this.selectionMode === "single" && this.hide();
    },
    onNodeUnselect: function(e) {
      this.$emit("node-unselect", e);
    },
    onNodeToggle: function(e) {
      this.d_expandedKeys = e, this.$emit("update:expandedKeys", this.d_expandedKeys);
    },
    getSelectedItemsLabel: function() {
      var e = /{(.*?)}/, n = this.selectedItemsLabel || this.$primevue.config.locale.selectionMessage;
      return e.test(n) ? n.replace(n.match(e)[0], Object.keys(this.d_value).length + "") : n;
    },
    onFirstHiddenFocus: function(e) {
      var n = e.relatedTarget === this.$refs.focusInput ? xt(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      V(n);
    },
    onLastHiddenFocus: function(e) {
      var n = e.relatedTarget === this.$refs.focusInput ? Ct(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      V(n);
    },
    onKeyDown: function(e) {
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "Space":
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(e);
          break;
        case "Escape":
          this.onEscapeKey(e);
          break;
        case "Tab":
          this.onTabKey(e);
          break;
      }
    },
    onArrowDownKey: function(e) {
      var n = this;
      this.overlayVisible || (this.show(), this.$nextTick(function() {
        var i = It(n.$refs.tree.$el, '[data-pc-section="treeitem"]'), l = gn(i).find(function(o) {
          return o.getAttribute("tabindex") === "0";
        });
        V(l);
      }), e.preventDefault());
    },
    onEnterKey: function(e) {
      this.overlayVisible ? this.hide() : this.onArrowDownKey(e), e.preventDefault();
    },
    onEscapeKey: function(e) {
      this.overlayVisible && (this.hide(), e.preventDefault());
    },
    onTabKey: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      n || this.overlayVisible && this.hasFocusableElements() && (V(this.$refs.firstHiddenFocusableElementOnOverlay), e.preventDefault());
    },
    hasFocusableElements: function() {
      return Te(this.overlay, ':not([data-p-hidden-focusable="true"])').length > 0;
    },
    onOverlayEnter: function(e) {
      R.set("overlay", e, this.$primevue.config.zIndex.overlay), je(e, {
        position: "absolute",
        top: "0"
      }), this.alignOverlay(), this.focus(), this.$attrSelector && e.setAttribute(this.$attrSelector, "");
    },
    onOverlayAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.scrollValueInView(), this.$emit("show");
    },
    onOverlayLeave: function() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.overlay = null;
    },
    onOverlayAfterLeave: function(e) {
      R.clear(e);
    },
    focus: function() {
      var e = Te(this.overlay);
      e && e.length > 0 && e[0].focus();
    },
    alignOverlay: function() {
      this.appendTo === "self" ? ve(this.overlay, this.$el) : (this.overlay.style.minWidth = Ge(this.$el) + "px", ye(this.overlay, this.$el));
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        e.overlayVisible && !e.selfClick && e.isOutsideClicked(n) && e.hide(), e.selfClick = !1;
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var e = this;
      this.scrollHandler || (this.scrollHandler = new Se(this.$refs.container, function() {
        e.overlayVisible && e.hide();
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function() {
        e.overlayVisible && !ge() && e.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    isOutsideClicked: function(e) {
      return !(this.$el.isSameNode(e.target) || this.$el.contains(e.target) || this.overlay && this.overlay.contains(e.target));
    },
    overlayRef: function(e) {
      this.overlay = e;
    },
    onOverlayClick: function(e) {
      Oe.emit("overlay-click", {
        originalEvent: e,
        target: this.$el
      }), this.selfClick = !0;
    },
    onOverlayKeydown: function(e) {
      e.code === "Escape" && this.hide();
    },
    fillNodeMap: function(e, n) {
      var i = this;
      n[e.key] = e, e.children && e.children.length > 0 && e.children.forEach(function(l) {
        return i.fillNodeMap(l, n);
      });
    },
    isSelected: function(e, n) {
      return this.selectionMode === "checkbox" ? n[e?.key] && n[e?.key].checked : n[e?.key];
    },
    updateTreeState: function() {
      var e = Ke({}, this.d_value);
      e && this.options && this.options.length > 0 && this.updateTreeBranchState(null, null, e);
    },
    updateTreeBranchState: function(e, n, i) {
      if (e) {
        if (this.isSelected(e, i) && (this.expandPath(n), delete i[e.key]), Object.keys(i).length && e.children) {
          var l = ce(e.children), o;
          try {
            for (l.s(); !(o = l.n()).done; ) {
              var h = o.value;
              n.push(e.key), this.updateTreeBranchState(h, n, i);
            }
          } catch (L) {
            l.e(L);
          } finally {
            l.f();
          }
        }
      } else {
        var c = ce(this.options), b;
        try {
          for (c.s(); !(b = c.n()).done; ) {
            var p = b.value;
            this.updateTreeBranchState(p, [], i);
          }
        } catch (L) {
          c.e(L);
        } finally {
          c.f();
        }
      }
    },
    expandPath: function(e) {
      if (e.length > 0) {
        var n = ce(e), i;
        try {
          for (n.s(); !(i = n.n()).done; ) {
            var l = i.value;
            this.d_expandedKeys[l] = !0;
          }
        } catch (o) {
          n.e(o);
        } finally {
          n.f();
        }
        this.d_expandedKeys = Ke({}, this.d_expandedKeys), this.$emit("update:expandedKeys", this.d_expandedKeys);
      }
    },
    scrollValueInView: function() {
      if (this.overlay) {
        var e = Ue(this.overlay, '[data-p-selected="true"]');
        e && e.scrollIntoView({
          block: "nearest",
          inline: "start"
        });
      }
    }
  },
  computed: {
    nodeMap: function() {
      var e, n = this, i = {};
      return (e = this.options) === null || e === void 0 || e.forEach(function(l) {
        return n.fillNodeMap(l, i);
      }), i;
    },
    selectedNodes: function() {
      var e = this, n = [];
      return this.d_value && this.options && this.options.length > 0 && Object.keys(this.d_value).forEach(function(i) {
        var l = e.nodeMap[i];
        e.isSelected(l, e.d_value) && n.push(l);
      }), n;
    },
    label: function() {
      var e = this.selectedNodes, n;
      return e.length ? F(this.maxSelectedLabels) && e.length > this.maxSelectedLabels ? n = this.getSelectedItemsLabel() : n = e.map(function(i) {
        return i.label;
      }).join(", ") : n = this.placeholder, n;
    },
    chipSelectedItems: function() {
      return F(this.maxSelectedLabels) && this.d_value && Object.keys(this.d_value).length > this.maxSelectedLabels;
    },
    emptyMessageText: function() {
      return this.emptyMessage || this.$primevue.config.locale.emptyMessage;
    },
    emptyValue: function() {
      return !this.$filled;
    },
    emptyOptions: function() {
      return !this.options || this.options.length === 0;
    },
    listId: function() {
      return this.$id + "_list";
    },
    hasFluid: function() {
      return Ne(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    isClearIconVisible: function() {
      return this.showClear && this.d_value != null && F(this.options) && !this.disabled && !this.loading;
    }
  },
  components: {
    TSTree: Pt,
    Chip: We,
    Portal: be,
    ChevronDownIcon: Xe,
    TimesIcon: ze
  },
  directives: {
    ripple: Fe
  }
};
function Z(t) {
  "@babel/helpers - typeof";
  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Z(t);
}
function Re(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function oe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Re(Object(n), !0).forEach(function(i) {
      kn(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Re(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function kn(t, e, n) {
  return (e = On(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function On(t) {
  var e = Sn(t, "string");
  return Z(e) == "symbol" ? e : e + "";
}
function Sn(t, e) {
  if (Z(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(t, e);
    if (Z(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var In = ["id", "disabled", "tabindex", "aria-labelledby", "aria-label", "aria-expanded", "aria-controls"], Cn = {
  key: 0
}, xn = ["aria-expanded"];
function Ln(t, e, n, i, l, o) {
  var h = B("Chip"), c = B("TSTree"), b = B("Portal");
  return f(), m("div", d({
    ref: "container",
    class: t.cx("root"),
    style: t.sx("root"),
    onClick: e[10] || (e[10] = function() {
      return o.onClick && o.onClick.apply(o, arguments);
    })
  }, t.ptmi("root")), [r("div", d({
    class: "p-hidden-accessible"
  }, t.ptm("hiddenInputContainer"), {
    "data-p-hidden-accessible": !0
  }), [r("input", d({
    ref: "focusInput",
    id: t.inputId,
    type: "text",
    role: "combobox",
    class: t.inputClass,
    style: t.inputStyle,
    readonly: "",
    disabled: t.disabled,
    tabindex: t.disabled ? -1 : t.tabindex,
    "aria-labelledby": t.ariaLabelledby,
    "aria-label": t.ariaLabel,
    "aria-haspopup": "tree",
    "aria-expanded": l.overlayVisible,
    "aria-controls": l.overlayVisible ? o.listId : void 0,
    onFocus: e[0] || (e[0] = function(p) {
      return o.onFocus(p);
    }),
    onBlur: e[1] || (e[1] = function(p) {
      return o.onBlur(p);
    }),
    onKeydown: e[2] || (e[2] = function(p) {
      return o.onKeyDown(p);
    })
  }, oe(oe({}, t.inputProps), t.ptm("hiddenInput"))), null, 16, In)], 16), r("div", d({
    class: t.cx("labelContainer")
  }, t.ptm("labelContainer")), [r("div", d({
    class: t.cx("label")
  }, t.ptm("label")), [v(t.$slots, "value", {
    value: o.selectedNodes,
    placeholder: t.placeholder
  }, function() {
    return [t.display === "comma" ? (f(), m(K, {
      key: 0
    }, [A(T(o.label || "empty"), 1)], 64)) : t.display === "chip" ? (f(), m(K, {
      key: 1
    }, [o.chipSelectedItems ? (f(), m("span", Cn, T(o.label), 1)) : (f(), m(K, {
      key: 1
    }, [(f(!0), m(K, null, ae(o.selectedNodes, function(p) {
      return f(), m("div", d({
        key: p.key,
        class: t.cx("chipItem")
      }, {
        ref_for: !0
      }, t.ptm("chipItem")), [s(h, {
        class: C(t.cx("pcChip")),
        label: p.label,
        unstyled: t.unstyled,
        pt: t.ptm("pcChip")
      }, null, 8, ["class", "label", "unstyled", "pt"])], 16);
    }), 128)), o.emptyValue ? (f(), m(K, {
      key: 0
    }, [A(T(t.placeholder || "empty"), 1)], 64)) : k("", !0)], 64))], 64)) : k("", !0)];
  })], 16)], 16), o.isClearIconVisible ? v(t.$slots, "clearicon", {
    key: 0,
    class: C(t.cx("clearIcon")),
    clearCallback: o.onClearClick
  }, function() {
    return [(f(), j(pe(t.clearIcon ? "i" : "TimesIcon"), d({
      ref: "clearIcon",
      class: [t.cx("clearIcon"), t.clearIcon],
      onClick: o.onClearClick
    }, t.ptm("clearIcon"), {
      "data-pc-section": "clearicon"
    }), null, 16, ["class", "onClick"]))];
  }) : k("", !0), r("div", d({
    class: t.cx("dropdown"),
    role: "button",
    "aria-haspopup": "tree",
    "aria-expanded": l.overlayVisible
  }, t.ptm("dropdown")), [v(t.$slots, t.$slots.dropdownicon ? "dropdownicon" : "triggericon", {
    class: C(t.cx("dropdownIcon"))
  }, function() {
    return [(f(), j(pe("ChevronDownIcon"), d({
      class: t.cx("dropdownIcon")
    }, t.ptm("dropdownIcon")), null, 16, ["class"]))];
  })], 16, xn), s(b, {
    appendTo: t.appendTo
  }, {
    default: g(function() {
      return [s(ke, d({
        name: "p-anchored-overlay",
        onEnter: o.onOverlayEnter,
        onAfterEnter: o.onOverlayAfterEnter,
        onLeave: o.onOverlayLeave,
        onAfterLeave: o.onOverlayAfterLeave
      }, t.ptm("transition")), {
        default: g(function() {
          return [l.overlayVisible ? (f(), m("div", d({
            key: 0,
            ref: o.overlayRef,
            onClick: e[8] || (e[8] = function() {
              return o.onOverlayClick && o.onOverlayClick.apply(o, arguments);
            }),
            class: [t.cx("panel"), t.panelClass],
            onKeydown: e[9] || (e[9] = function() {
              return o.onOverlayKeydown && o.onOverlayKeydown.apply(o, arguments);
            })
          }, oe(oe({}, t.panelProps), t.ptm("panel"))), [r("span", d({
            ref: "firstHiddenFocusableElementOnOverlay",
            role: "presentation",
            class: "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: e[3] || (e[3] = function() {
              return o.onFirstHiddenFocus && o.onFirstHiddenFocus.apply(o, arguments);
            })
          }, t.ptm("hiddenFirstFocusableEl"), {
            "data-p-hidden-accessible": !0,
            "data-p-hidden-focusable": !0
          }), null, 16), v(t.$slots, "header", {
            value: t.d_value,
            options: t.options
          }), r("div", d({
            class: t.cx("treeContainer"),
            style: {
              "max-height": t.scrollHeight
            }
          }, t.ptm("treeContainer")), [t.options && t.options.length > 0 ? (f(), j(c, {
            key: 0,
            ref: "tree",
            id: o.listId,
            value: t.options,
            selectionMode: t.selectionMode,
            loading: t.loading,
            loadingIcon: t.loadingIcon,
            loadingMode: t.loadingMode,
            filter: t.filter,
            filterBy: t.filterBy,
            filterMode: t.filterMode,
            filterPlaceholder: t.filterPlaceholder,
            filterLocale: t.filterLocale,
            "onUpdate:selectionKeys": o.onSelectionChange,
            selectionKeys: t.d_value,
            expandedKeys: l.d_expandedKeys,
            "onUpdate:expandedKeys": o.onNodeToggle,
            metaKeySelection: t.metaKeySelection,
            onNodeExpand: e[4] || (e[4] = function(p) {
              return t.$emit("node-expand", p);
            }),
            onNodeCollapse: e[5] || (e[5] = function(p) {
              return t.$emit("node-collapse", p);
            }),
            onNodeSelect: o.onNodeSelect,
            onNodeUnselect: o.onNodeUnselect,
            onClick: e[6] || (e[6] = Dt(function() {
            }, ["stop"])),
            level: 0,
            unstyled: t.unstyled,
            pt: t.ptm("pcTree")
          }, Ye({
            _: 2
          }, [t.$slots.option ? {
            name: "default",
            fn: g(function(p) {
              return [v(t.$slots, "option", {
                node: p.node,
                expanded: p.expanded,
                selected: p.selected
              })];
            }),
            key: "0"
          } : void 0, t.$slots.itemtoggleicon ? {
            name: "toggleicon",
            fn: g(function(p) {
              return [v(t.$slots, "itemtoggleicon", {
                node: p.node,
                expanded: p.expanded,
                class: C(p.class)
              })];
            }),
            key: "1"
          } : t.$slots.itemtogglericon ? {
            name: "togglericon",
            fn: g(function(p) {
              return [v(t.$slots, "itemtogglericon", {
                node: p.node,
                expanded: p.expanded,
                class: C(p.class)
              })];
            }),
            key: "2"
          } : void 0, t.$slots.itemcheckboxicon ? {
            name: "checkboxicon",
            fn: g(function(p) {
              return [v(t.$slots, "itemcheckboxicon", {
                checked: p.checked,
                partialChecked: p.partialChecked,
                class: C(p.class)
              })];
            }),
            key: "3"
          } : void 0]), 1032, ["id", "value", "selectionMode", "loading", "loadingIcon", "loadingMode", "filter", "filterBy", "filterMode", "filterPlaceholder", "filterLocale", "onUpdate:selectionKeys", "selectionKeys", "expandedKeys", "onUpdate:expandedKeys", "metaKeySelection", "onNodeSelect", "onNodeUnselect", "unstyled", "pt"])) : k("", !0), o.emptyOptions && !t.loading ? (f(), m("div", d({
            key: 1,
            class: t.cx("emptyMessage")
          }, t.ptm("emptyMessage")), [v(t.$slots, "empty", {}, function() {
            return [A(T(o.emptyMessageText), 1)];
          })], 16)) : k("", !0)], 16), v(t.$slots, "footer", {
            value: t.d_value,
            options: t.options
          }), r("span", d({
            ref: "lastHiddenFocusableElementOnOverlay",
            role: "presentation",
            class: "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: e[7] || (e[7] = function() {
              return o.onLastHiddenFocus && o.onLastHiddenFocus.apply(o, arguments);
            })
          }, t.ptm("hiddenLastFocusableEl"), {
            "data-p-hidden-accessible": !0,
            "data-p-hidden-focusable": !0
          }), null, 16)], 16)) : k("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16);
}
et.render = Ln;
var Mn = `
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`, Vn = {
  root: {
    position: "relative"
  }
}, Tn = {
  root: function(e) {
    var n = e.instance, i = e.props;
    return ["p-toggleswitch p-component", {
      "p-toggleswitch-checked": n.checked,
      "p-disabled": i.disabled,
      "p-invalid": n.$invalid
    }];
  },
  input: "p-toggleswitch-input",
  slider: "p-toggleswitch-slider",
  handle: "p-toggleswitch-handle"
}, Dn = P.extend({
  name: "toggleswitch",
  style: Mn,
  classes: Tn,
  inlineStyles: Vn
}), Bn = {
  name: "BaseToggleSwitch",
  extends: we,
  props: {
    trueValue: {
      type: null,
      default: !0
    },
    falseValue: {
      type: null,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    inputId: {
      type: String,
      default: null
    },
    inputClass: {
      type: [String, Object],
      default: null
    },
    inputStyle: {
      type: Object,
      default: null
    },
    ariaLabelledby: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  style: Dn,
  provide: function() {
    return {
      $pcToggleSwitch: this,
      $parentInstance: this
    };
  }
}, tt = {
  name: "ToggleSwitch",
  extends: Bn,
  inheritAttrs: !1,
  emits: ["change", "focus", "blur"],
  methods: {
    getPTOptions: function(e) {
      var n = e === "root" ? this.ptmi : this.ptm;
      return n(e, {
        context: {
          checked: this.checked,
          disabled: this.disabled
        }
      });
    },
    onChange: function(e) {
      if (!this.disabled && !this.readonly) {
        var n = this.checked ? this.falseValue : this.trueValue;
        this.writeValue(n, e), this.$emit("change", e);
      }
    },
    onFocus: function(e) {
      this.$emit("focus", e);
    },
    onBlur: function(e) {
      var n, i;
      this.$emit("blur", e), (n = (i = this.formField).onBlur) === null || n === void 0 || n.call(i, e);
    }
  },
  computed: {
    checked: function() {
      return this.d_value === this.trueValue;
    },
    dataP: function() {
      return le({
        checked: this.checked,
        disabled: this.disabled,
        invalid: this.$invalid
      });
    }
  }
}, Kn = ["data-p-checked", "data-p-disabled", "data-p"], Rn = ["id", "checked", "tabindex", "disabled", "readonly", "aria-checked", "aria-labelledby", "aria-label", "aria-invalid"], En = ["data-p"], An = ["data-p"];
function Pn(t, e, n, i, l, o) {
  return f(), m("div", d({
    class: t.cx("root"),
    style: t.sx("root")
  }, o.getPTOptions("root"), {
    "data-p-checked": o.checked,
    "data-p-disabled": t.disabled,
    "data-p": o.dataP
  }), [r("input", d({
    id: t.inputId,
    type: "checkbox",
    role: "switch",
    class: [t.cx("input"), t.inputClass],
    style: t.inputStyle,
    checked: o.checked,
    tabindex: t.tabindex,
    disabled: t.disabled,
    readonly: t.readonly,
    "aria-checked": o.checked,
    "aria-labelledby": t.ariaLabelledby,
    "aria-label": t.ariaLabel,
    "aria-invalid": t.invalid || void 0,
    onFocus: e[0] || (e[0] = function() {
      return o.onFocus && o.onFocus.apply(o, arguments);
    }),
    onBlur: e[1] || (e[1] = function() {
      return o.onBlur && o.onBlur.apply(o, arguments);
    }),
    onChange: e[2] || (e[2] = function() {
      return o.onChange && o.onChange.apply(o, arguments);
    })
  }, o.getPTOptions("input")), null, 16, Rn), r("div", d({
    class: t.cx("slider")
  }, o.getPTOptions("slider"), {
    "data-p": o.dataP
  }), [r("div", d({
    class: t.cx("handle")
  }, o.getPTOptions("handle"), {
    "data-p": o.dataP
  }), [v(t.$slots, "handle", {
    checked: o.checked
  })], 16, An)], 16, En)], 16, Kn);
}
tt.render = Pn;
var Hn = `
    .p-knob-range {
        fill: none;
        transition: stroke 0.1s ease-in;
    }

    .p-knob-value {
        animation-name: p-knob-dash-frame;
        animation-fill-mode: forwards;
        fill: none;
    }

    .p-knob-text {
        font-size: 1.3rem;
        text-align: center;
    }

    .p-knob svg {
        border-radius: 50%;
        outline-color: transparent;
        transition:
            background dt('knob.transition.duration'),
            color dt('knob.transition.duration'),
            outline-color dt('knob.transition.duration'),
            box-shadow dt('knob.transition.duration');
    }

    .p-knob svg:focus-visible {
        box-shadow: dt('knob.focus.ring.shadow');
        outline: dt('knob.focus.ring.width') dt('knob.focus.ring.style') dt('knob.focus.ring.color');
        outline-offset: dt('knob.focus.ring.offset');
    }

    @keyframes p-knob-dash-frame {
        100% {
            stroke-dashoffset: 0;
        }
    }
`, $n = {
  root: function(e) {
    var n = e.instance, i = e.props;
    return ["p-knob p-component", {
      "p-disabled": i.disabled,
      "p-invalid": n.$invalid
    }];
  },
  range: "p-knob-range",
  value: "p-knob-value",
  text: "p-knob-text"
}, Fn = P.extend({
  name: "knob",
  style: Hn,
  classes: $n
}), zn = {
  name: "BaseKnob",
  extends: we,
  props: {
    size: {
      type: Number,
      default: 100
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    valueColor: {
      type: String,
      default: function() {
        return de("knob.value.background").variable;
      }
    },
    rangeColor: {
      type: String,
      default: function() {
        return de("knob.range.background").variable;
      }
    },
    textColor: {
      type: String,
      default: function() {
        return de("knob.text.color").variable;
      }
    },
    strokeWidth: {
      type: Number,
      default: 14
    },
    showValue: {
      type: Boolean,
      default: !0
    },
    valueTemplate: {
      type: [String, Function],
      default: "{value}"
    },
    tabindex: {
      type: Number,
      default: 0
    },
    ariaLabelledby: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  style: Fn,
  provide: function() {
    return {
      $pcKnob: this,
      $parentInstance: this
    };
  }
}, G = 3.14159265358979, nt = {
  name: "Knob",
  extends: zn,
  inheritAttrs: !1,
  emits: ["change"],
  data: function() {
    return {
      radius: 40,
      midX: 50,
      midY: 50,
      minRadians: 4 * G / 3,
      maxRadians: -G / 3
    };
  },
  methods: {
    updateValueByOffset: function(e, n) {
      var i = e - this.size / 2, l = this.size / 2 - n, o = Math.atan2(l, i), h = -G / 2 - G / 6;
      this.updateModel(o, h);
    },
    updateModel: function(e, n) {
      var i;
      if (e > this.maxRadians) i = this.mapRange(e, this.minRadians, this.maxRadians, this.min, this.max);
      else if (e < n) i = this.mapRange(e + 2 * G, this.minRadians, this.maxRadians, this.min, this.max);
      else return;
      var l = Math.round((i - this.min) / this.step) * this.step + this.min;
      this.writeValue(l), this.$emit("change", l);
    },
    updateModelValue: function(e) {
      e > this.max ? this.writeValue(this.max) : e < this.min ? this.writeValue(this.min) : this.writeValue(e);
    },
    mapRange: function(e, n, i, l, o) {
      return (e - n) * (o - l) / (i - n) + l;
    },
    onClick: function(e) {
      !this.disabled && !this.readonly && this.updateValueByOffset(e.offsetX, e.offsetY);
    },
    onBlur: function(e) {
      var n, i;
      (n = (i = this.formField).onBlur) === null || n === void 0 || n.call(i, e);
    },
    onMouseDown: function(e) {
      !this.disabled && !this.readonly && (window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("mouseup", this.onMouseUp), e.preventDefault());
    },
    onMouseUp: function(e) {
      !this.disabled && !this.readonly && (window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("mouseup", this.onMouseUp), e.preventDefault());
    },
    onTouchStart: function(e) {
      !this.disabled && !this.readonly && (window.addEventListener("touchmove", this.onTouchMove), window.addEventListener("touchend", this.onTouchEnd), e.preventDefault());
    },
    onTouchEnd: function(e) {
      !this.disabled && !this.readonly && (window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd), e.preventDefault());
    },
    onMouseMove: function(e) {
      !this.disabled && !this.readonly && (this.updateValueByOffset(e.offsetX, e.offsetY), e.preventDefault());
    },
    onTouchMove: function(e) {
      if (!this.disabled && !this.readonly && e.touches.length == 1) {
        var n = this.$el.getBoundingClientRect(), i = e.targetTouches.item(0), l = i.clientX - n.left, o = i.clientY - n.top;
        this.updateValueByOffset(l, o);
      }
    },
    onKeyDown: function(e) {
      if (!this.disabled && !this.readonly)
        switch (e.code) {
          case "ArrowRight":
          case "ArrowUp": {
            e.preventDefault(), this.updateModelValue(this.d_value + this.step);
            break;
          }
          case "ArrowLeft":
          case "ArrowDown": {
            e.preventDefault(), this.updateModelValue(this.d_value - this.step);
            break;
          }
          case "Home": {
            e.preventDefault(), this.writeValue(this.min);
            break;
          }
          case "End": {
            e.preventDefault(), this.writeValue(this.max);
            break;
          }
          case "PageUp": {
            e.preventDefault(), this.updateModelValue(this.d_value + 10);
            break;
          }
          case "PageDown": {
            e.preventDefault(), this.updateModelValue(this.d_value - 10);
            break;
          }
        }
    }
  },
  computed: {
    rangePath: function() {
      return "M ".concat(this.minX, " ").concat(this.minY, " A ").concat(this.radius, " ").concat(this.radius, " 0 1 1 ").concat(this.maxX, " ").concat(this.maxY);
    },
    valuePath: function() {
      return "M ".concat(this.zeroX, " ").concat(this.zeroY, " A ").concat(this.radius, " ").concat(this.radius, " 0 ").concat(this.largeArc, " ").concat(this.sweep, " ").concat(this.valueX, " ").concat(this.valueY);
    },
    zeroRadians: function() {
      return this.min > 0 && this.max > 0 ? this.mapRange(this.min, this.min, this.max, this.minRadians, this.maxRadians) : this.mapRange(0, this.min, this.max, this.minRadians, this.maxRadians);
    },
    valueRadians: function() {
      return this.mapRange(this.d_value, this.min, this.max, this.minRadians, this.maxRadians);
    },
    minX: function() {
      return this.midX + Math.cos(this.minRadians) * this.radius;
    },
    minY: function() {
      return this.midY - Math.sin(this.minRadians) * this.radius;
    },
    maxX: function() {
      return this.midX + Math.cos(this.maxRadians) * this.radius;
    },
    maxY: function() {
      return this.midY - Math.sin(this.maxRadians) * this.radius;
    },
    zeroX: function() {
      return this.midX + Math.cos(this.zeroRadians) * this.radius;
    },
    zeroY: function() {
      return this.midY - Math.sin(this.zeroRadians) * this.radius;
    },
    valueX: function() {
      return this.midX + Math.cos(this.valueRadians) * this.radius;
    },
    valueY: function() {
      return this.midY - Math.sin(this.valueRadians) * this.radius;
    },
    largeArc: function() {
      return Math.abs(this.zeroRadians - this.valueRadians) < G ? 0 : 1;
    },
    sweep: function() {
      return this.valueRadians > this.zeroRadians ? 0 : 1;
    },
    valueToDisplay: function() {
      return typeof this.valueTemplate == "string" ? this.valueTemplate.replace(/{value}/g, this.d_value) : this.valueTemplate(this.d_value);
    }
  }
}, Nn = ["width", "height", "tabindex", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-labelledby", "aria-label"], Un = ["d", "stroke-width", "stroke"], Gn = ["d", "stroke-width", "stroke"], jn = ["fill"];
function Yn(t, e, n, i, l, o) {
  return f(), m("div", d({
    class: t.cx("root")
  }, t.ptmi("root")), [(f(), m("svg", d({
    viewBox: "0 0 100 100",
    role: "slider",
    width: t.size,
    height: t.size,
    tabindex: t.readonly || t.disabled ? -1 : t.tabindex,
    "aria-valuemin": t.min,
    "aria-valuemax": t.max,
    "aria-valuenow": t.d_value,
    "aria-labelledby": t.ariaLabelledby,
    "aria-label": t.ariaLabel,
    onClick: e[0] || (e[0] = function() {
      return o.onClick && o.onClick.apply(o, arguments);
    }),
    onBlur: e[1] || (e[1] = function() {
      return o.onBlur && o.onBlur.apply(o, arguments);
    }),
    onKeydown: e[2] || (e[2] = function() {
      return o.onKeyDown && o.onKeyDown.apply(o, arguments);
    }),
    onMousedown: e[3] || (e[3] = function() {
      return o.onMouseDown && o.onMouseDown.apply(o, arguments);
    }),
    onMouseup: e[4] || (e[4] = function() {
      return o.onMouseUp && o.onMouseUp.apply(o, arguments);
    }),
    onTouchstart: e[5] || (e[5] = function() {
      return o.onTouchStart && o.onTouchStart.apply(o, arguments);
    }),
    onTouchend: e[6] || (e[6] = function() {
      return o.onTouchEnd && o.onTouchEnd.apply(o, arguments);
    })
  }, t.ptm("svg")), [r("path", d({
    d: o.rangePath,
    "stroke-width": t.strokeWidth,
    stroke: t.rangeColor,
    class: t.cx("range")
  }, t.ptm("range")), null, 16, Un), r("path", d({
    d: o.valuePath,
    "stroke-width": t.strokeWidth,
    stroke: t.valueColor,
    class: t.cx("value")
  }, t.ptm("value")), null, 16, Gn), t.showValue ? (f(), m("text", d({
    key: 0,
    x: 50,
    y: 57,
    "text-anchor": "middle",
    fill: t.textColor,
    class: t.cx("text")
  }, t.ptm("text")), T(o.valueToDisplay), 17, jn)) : k("", !0)], 16, Nn))], 16);
}
nt.render = Yn;
var Xn = `
    .p-colorpicker {
        display: inline-block;
        position: relative;
    }

    .p-colorpicker-dragging {
        cursor: pointer;
    }

    .p-colorpicker-preview {
        width: dt('colorpicker.preview.width');
        height: dt('colorpicker.preview.height');
        padding: 0;
        border: 0 none;
        border-radius: dt('colorpicker.preview.border.radius');
        transition:
            background dt('colorpicker.transition.duration'),
            color dt('colorpicker.transition.duration'),
            border-color dt('colorpicker.transition.duration'),
            outline-color dt('colorpicker.transition.duration'),
            box-shadow dt('colorpicker.transition.duration');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-colorpicker-preview:enabled:focus-visible {
        border-color: dt('colorpicker.preview.focus.border.color');
        box-shadow: dt('colorpicker.preview.focus.ring.shadow');
        outline: dt('colorpicker.preview.focus.ring.width') dt('colorpicker.preview.focus.ring.style') dt('colorpicker.preview.focus.ring.color');
        outline-offset: dt('colorpicker.preview.focus.ring.offset');
    }

    .p-colorpicker-panel {
        background: dt('colorpicker.panel.background');
        border: 1px solid dt('colorpicker.panel.border.color');
        border-radius: dt('colorpicker.panel.border.radius');
        box-shadow: dt('colorpicker.panel.shadow');
        width: 193px;
        height: 166px;
        position: absolute;
        top: 0;
        left: 0;
    }

    .p-colorpicker-panel-inline {
        box-shadow: none;
        position: static;
    }

    .p-colorpicker-content {
        position: relative;
    }

    .p-colorpicker-color-selector {
        width: 150px;
        height: 150px;
        inset-block-start: 8px;
        inset-inline-start: 8px;
        position: absolute;
    }

    .p-colorpicker-color-background {
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    }

    .p-colorpicker-color-handle {
        position: absolute;
        inset-block-start: 0px;
        inset-inline-start: 150px;
        border-radius: 100%;
        width: 10px;
        height: 10px;
        border-width: 1px;
        border-style: solid;
        margin: -5px 0 0 -5px;
        cursor: pointer;
        opacity: 0.85;
        border-color: dt('colorpicker.handle.color');
    }

    .p-colorpicker-hue {
        width: 17px;
        height: 150px;
        inset-block-start: 8px;
        inset-inline-start: 167px;
        position: absolute;
        opacity: 0.85;
        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);
    }

    .p-colorpicker-hue-handle {
        position: absolute;
        inset-block-start: 150px;
        inset-inline-start: 0px;
        width: 21px;
        margin-inline-start: -2px;
        margin-block-start: -5px;
        height: 10px;
        border-width: 2px;
        border-style: solid;
        opacity: 0.85;
        cursor: pointer;
        border-color: dt('colorpicker.handle.color');
    }
`, Wn = {
  root: "p-colorpicker p-component",
  preview: function(e) {
    var n = e.props;
    return ["p-colorpicker-preview", {
      "p-disabled": n.disabled
    }];
  },
  panel: function(e) {
    var n = e.instance, i = e.props;
    return ["p-colorpicker-panel", {
      "p-colorpicker-panel-inline": i.inline,
      "p-disabled": i.disabled,
      "p-invalid": n.$invalid
    }];
  },
  colorSelector: "p-colorpicker-color-selector",
  colorBackground: "p-colorpicker-color-background",
  colorHandle: "p-colorpicker-color-handle",
  hue: "p-colorpicker-hue",
  hueHandle: "p-colorpicker-hue-handle"
}, Zn = P.extend({
  name: "colorpicker",
  style: Xn,
  classes: Wn
}), Jn = {
  name: "BaseColorPicker",
  extends: we,
  props: {
    defaultColor: {
      type: null,
      default: "ff0000"
    },
    inline: {
      type: Boolean,
      default: !1
    },
    format: {
      type: String,
      default: "hex"
    },
    tabindex: {
      type: String,
      default: null
    },
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    inputId: {
      type: String,
      default: null
    },
    panelClass: null,
    overlayClass: null
  },
  style: Zn,
  provide: function() {
    return {
      $pcColorPicker: this,
      $parentInstance: this
    };
  }
}, ot = {
  name: "ColorPicker",
  extends: Jn,
  inheritAttrs: !1,
  emits: ["change", "show", "hide"],
  data: function() {
    return {
      overlayVisible: !1
    };
  },
  hsbValue: null,
  localHue: null,
  outsideClickListener: null,
  documentMouseMoveListener: null,
  documentMouseUpListener: null,
  scrollHandler: null,
  resizeListener: null,
  hueDragging: null,
  colorDragging: null,
  selfUpdate: null,
  picker: null,
  colorSelector: null,
  colorHandle: null,
  hueView: null,
  hueHandle: null,
  watch: {
    modelValue: {
      immediate: !0,
      handler: function(e) {
        this.hsbValue = this.toHSB(e), this.selfUpdate ? this.selfUpdate = !1 : this.updateUI();
      }
    }
  },
  beforeUnmount: function() {
    this.unbindOutsideClickListener(), this.unbindDragListeners(), this.unbindResizeListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.picker && this.autoZIndex && R.clear(this.picker), this.clearRefs();
  },
  mounted: function() {
    this.updateUI();
  },
  methods: {
    pickColor: function(e) {
      var n = this.colorSelector.getBoundingClientRect(), i = n.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), l = n.left + document.body.scrollLeft, o = Math.floor(100 * Math.max(0, Math.min(150, (e.pageX || e.changedTouches[0].pageX) - l)) / 150), h = Math.floor(100 * (150 - Math.max(0, Math.min(150, (e.pageY || e.changedTouches[0].pageY) - i))) / 150);
      this.hsbValue = this.validateHSB({
        h: this.localHue,
        s: o,
        b: h
      }), this.selfUpdate = !0, this.updateColorHandle(), this.updateInput(), this.updateModel(e);
    },
    pickHue: function(e) {
      var n = this.hueView.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
      this.localHue = Math.floor(360 * (150 - Math.max(0, Math.min(150, (e.pageY || e.changedTouches[0].pageY) - n))) / 150), this.hsbValue = this.validateHSB({
        h: this.localHue,
        s: this.hsbValue.s,
        b: this.hsbValue.b
      }), this.selfUpdate = !0, this.updateColorSelector(), this.updateHue(), this.updateModel(e), this.updateInput();
    },
    updateModel: function(e) {
      var n = this.d_value;
      switch (this.format) {
        case "hex":
          n = this.HSBtoHEX(this.hsbValue);
          break;
        case "rgb":
          n = this.HSBtoRGB(this.hsbValue);
          break;
        case "hsb":
          n = this.hsbValue;
          break;
      }
      this.writeValue(n, e), this.$emit("change", {
        event: e,
        value: n
      });
    },
    updateColorSelector: function() {
      if (this.colorSelector) {
        var e = this.validateHSB({
          h: this.hsbValue.h,
          s: 100,
          b: 100
        });
        this.colorSelector.style.backgroundColor = "#" + this.HSBtoHEX(e);
      }
    },
    updateColorHandle: function() {
      this.colorHandle && (this.colorHandle.style.left = Math.floor(150 * this.hsbValue.s / 100) + "px", this.colorHandle.style.top = Math.floor(150 * (100 - this.hsbValue.b) / 100) + "px");
    },
    updateHue: function() {
      this.hueHandle && (this.hueHandle.style.top = Math.floor(150 - 150 * this.hsbValue.h / 360) + "px");
    },
    updateInput: function() {
      this.$refs.input && (this.$refs.input.style.backgroundColor = "#" + this.HSBtoHEX(this.hsbValue));
    },
    updateUI: function() {
      this.updateHue(), this.updateColorHandle(), this.updateInput(), this.updateColorSelector();
    },
    validateHSB: function(e) {
      return {
        h: Math.min(360, Math.max(0, e.h)),
        s: Math.min(100, Math.max(0, e.s)),
        b: Math.min(100, Math.max(0, e.b))
      };
    },
    validateRGB: function(e) {
      return {
        r: Math.min(255, Math.max(0, e.r)),
        g: Math.min(255, Math.max(0, e.g)),
        b: Math.min(255, Math.max(0, e.b))
      };
    },
    validateHEX: function(e) {
      var n = 6 - e.length;
      if (n > 0) {
        for (var i = [], l = 0; l < n; l++)
          i.push("0");
        i.push(e), e = i.join("");
      }
      return e;
    },
    HEXtoRGB: function(e) {
      var n = parseInt(e.indexOf("#") > -1 ? e.substring(1) : e, 16);
      return {
        r: n >> 16,
        g: (n & 65280) >> 8,
        b: n & 255
      };
    },
    HEXtoHSB: function(e) {
      return this.RGBtoHSB(this.HEXtoRGB(e));
    },
    RGBtoHSB: function(e) {
      var n = {
        h: 0,
        s: 0,
        b: 0
      }, i = Math.min(e.r, e.g, e.b), l = Math.max(e.r, e.g, e.b), o = l - i;
      return n.b = l, n.s = l !== 0 ? 255 * o / l : 0, n.s !== 0 ? e.r === l ? n.h = (e.g - e.b) / o : e.g === l ? n.h = 2 + (e.b - e.r) / o : n.h = 4 + (e.r - e.g) / o : n.h = -1, n.h *= 60, n.h < 0 && (n.h += 360), n.s *= 100 / 255, n.b *= 100 / 255, n;
    },
    HSBtoRGB: function(e) {
      var n = {
        r: null,
        g: null,
        b: null
      }, i = Math.round(e.h), l = Math.round(e.s * 255 / 100), o = Math.round(e.b * 255 / 100);
      if (l === 0)
        n = {
          r: o,
          g: o,
          b: o
        };
      else {
        var h = o, c = (255 - l) * o / 255, b = (h - c) * (i % 60) / 60;
        i === 360 && (i = 0), i < 60 ? (n.r = h, n.b = c, n.g = c + b) : i < 120 ? (n.g = h, n.b = c, n.r = h - b) : i < 180 ? (n.g = h, n.r = c, n.b = c + b) : i < 240 ? (n.b = h, n.r = c, n.g = h - b) : i < 300 ? (n.b = h, n.g = c, n.r = c + b) : i < 360 ? (n.r = h, n.g = c, n.b = h - b) : (n.r = 0, n.g = 0, n.b = 0);
      }
      return {
        r: Math.round(n.r),
        g: Math.round(n.g),
        b: Math.round(n.b)
      };
    },
    RGBtoHEX: function(e) {
      var n = [e.r.toString(16), e.g.toString(16), e.b.toString(16)];
      for (var i in n)
        n[i].length === 1 && (n[i] = "0" + n[i]);
      return n.join("");
    },
    HSBtoHEX: function(e) {
      return this.RGBtoHEX(this.HSBtoRGB(e));
    },
    toHSB: function(e) {
      var n;
      if (e)
        switch (this.format) {
          case "hex":
            n = this.HEXtoHSB(e);
            break;
          case "rgb":
            n = this.RGBtoHSB(e);
            break;
          case "hsb":
            n = e;
            break;
        }
      else
        n = this.HEXtoHSB(this.defaultColor);
      return n.s === 0 || n.b === 0 ? n.h = this.localHue : this.localHue = n.h, n;
    },
    onOverlayEnter: function(e) {
      this.updateUI(), this.alignOverlay(), this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.autoZIndex && R.set("overlay", e, this.baseZIndex + this.$primevue.config.zIndex.overlay), this.$attrSelector && e.setAttribute(this.$attrSelector, ""), this.$emit("show");
    },
    onOverlayLeave: function() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.clearRefs(), this.$emit("hide");
    },
    onOverlayAfterLeave: function(e) {
      this.autoZIndex && R.clear(e);
    },
    alignOverlay: function() {
      this.appendTo === "self" ? ve(this.picker, this.$refs.input) : ye(this.picker, this.$refs.input);
    },
    onInputClick: function() {
      this.disabled || (this.overlayVisible = !this.overlayVisible);
    },
    onInputKeydown: function(e) {
      switch (e.code) {
        case "Space":
          this.overlayVisible = !this.overlayVisible, e.preventDefault();
          break;
        case "Escape":
        case "Tab":
          this.overlayVisible = !1;
          break;
      }
    },
    onInputBlur: function(e) {
      var n, i;
      (n = (i = this.formField).onBlur) === null || n === void 0 || n.call(i);
    },
    onColorMousedown: function(e) {
      this.disabled || (this.bindDragListeners(), this.onColorDragStart(e));
    },
    onColorDragStart: function(e) {
      this.disabled || (this.colorDragging = !0, this.pickColor(e), this.$el.setAttribute("p-colorpicker-dragging", "true"), !this.isUnstyled && De(this.$el, "p-colorpicker-dragging"), e.preventDefault());
    },
    onDrag: function(e) {
      this.colorDragging && (this.pickColor(e), e.preventDefault()), this.hueDragging && (this.pickHue(e), e.preventDefault());
    },
    onDragEnd: function() {
      this.colorDragging = !1, this.hueDragging = !1, this.$el.setAttribute("p-colorpicker-dragging", "false"), !this.isUnstyled && Lt(this.$el, "p-colorpicker-dragging"), this.unbindDragListeners();
    },
    onHueMousedown: function(e) {
      this.disabled || (this.bindDragListeners(), this.onHueDragStart(e));
    },
    onHueDragStart: function(e) {
      this.disabled || (this.hueDragging = !0, this.pickHue(e), !this.isUnstyled && De(this.$el, "p-colorpicker-dragging"), e.preventDefault());
    },
    isInputClicked: function(e) {
      return this.$refs.input && this.$refs.input.isSameNode(e.target);
    },
    bindDragListeners: function() {
      this.bindDocumentMouseMoveListener(), this.bindDocumentMouseUpListener();
    },
    unbindDragListeners: function() {
      this.unbindDocumentMouseMoveListener(), this.unbindDocumentMouseUpListener();
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        e.overlayVisible && e.picker && !e.picker.contains(n.target) && !e.isInputClicked(n) && (e.overlayVisible = !1);
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var e = this;
      this.scrollHandler || (this.scrollHandler = new Se(this.$refs.container, function() {
        e.overlayVisible && (e.overlayVisible = !1);
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function() {
        e.overlayVisible && !ge() && (e.overlayVisible = !1);
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindDocumentMouseMoveListener: function() {
      this.documentMouseMoveListener || (this.documentMouseMoveListener = this.onDrag.bind(this), document.addEventListener("mousemove", this.documentMouseMoveListener));
    },
    unbindDocumentMouseMoveListener: function() {
      this.documentMouseMoveListener && (document.removeEventListener("mousemove", this.documentMouseMoveListener), this.documentMouseMoveListener = null);
    },
    bindDocumentMouseUpListener: function() {
      this.documentMouseUpListener || (this.documentMouseUpListener = this.onDragEnd.bind(this), document.addEventListener("mouseup", this.documentMouseUpListener));
    },
    unbindDocumentMouseUpListener: function() {
      this.documentMouseUpListener && (document.removeEventListener("mouseup", this.documentMouseUpListener), this.documentMouseUpListener = null);
    },
    pickerRef: function(e) {
      this.picker = e;
    },
    colorSelectorRef: function(e) {
      this.colorSelector = e;
    },
    colorHandleRef: function(e) {
      this.colorHandle = e;
    },
    hueViewRef: function(e) {
      this.hueView = e;
    },
    hueHandleRef: function(e) {
      this.hueHandle = e;
    },
    clearRefs: function() {
      this.picker = null, this.colorSelector = null, this.colorHandle = null, this.hueView = null, this.hueHandle = null;
    },
    onOverlayClick: function(e) {
      Oe.emit("overlay-click", {
        originalEvent: e,
        target: this.$el
      });
    }
  },
  components: {
    Portal: be
  }
};
function J(t) {
  "@babel/helpers - typeof";
  return J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, J(t);
}
function Ee(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Ae(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ee(Object(n), !0).forEach(function(i) {
      qn(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ee(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function qn(t, e, n) {
  return (e = Qn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Qn(t) {
  var e = _n(t, "string");
  return J(e) == "symbol" ? e : e + "";
}
function _n(t, e) {
  if (J(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(t, e);
    if (J(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var eo = ["id", "tabindex", "disabled"];
function to(t, e, n, i, l, o) {
  var h = B("Portal");
  return f(), m("div", d({
    ref: "container",
    class: t.cx("root")
  }, t.ptmi("root")), [t.inline ? k("", !0) : (f(), m("input", d({
    key: 0,
    ref: "input",
    id: t.inputId,
    type: "text",
    class: t.cx("preview"),
    readonly: "",
    tabindex: t.tabindex,
    disabled: t.disabled,
    onClick: e[0] || (e[0] = function() {
      return o.onInputClick && o.onInputClick.apply(o, arguments);
    }),
    onKeydown: e[1] || (e[1] = function() {
      return o.onInputKeydown && o.onInputKeydown.apply(o, arguments);
    }),
    onBlur: e[2] || (e[2] = function() {
      return o.onInputBlur && o.onInputBlur.apply(o, arguments);
    })
  }, t.ptm("preview")), null, 16, eo)), s(h, {
    appendTo: t.appendTo,
    disabled: t.inline
  }, {
    default: g(function() {
      return [s(ke, d({
        name: "p-anchored-overlay",
        onEnter: o.onOverlayEnter,
        onLeave: o.onOverlayLeave,
        onAfterLeave: o.onOverlayAfterLeave
      }, t.ptm("transition")), {
        default: g(function() {
          return [t.inline || l.overlayVisible ? (f(), m("div", d({
            key: 0,
            ref: o.pickerRef,
            class: [t.cx("panel"), t.panelClass, t.overlayClass],
            onClick: e[11] || (e[11] = function() {
              return o.onOverlayClick && o.onOverlayClick.apply(o, arguments);
            })
          }, Ae(Ae({}, t.ptm("panel")), t.ptm("overlay"))), [r("div", d({
            class: t.cx("content")
          }, t.ptm("content")), [r("div", d({
            ref: o.colorSelectorRef,
            class: t.cx("colorSelector"),
            onMousedown: e[3] || (e[3] = function(c) {
              return o.onColorMousedown(c);
            }),
            onTouchstart: e[4] || (e[4] = function(c) {
              return o.onColorDragStart(c);
            }),
            onTouchmove: e[5] || (e[5] = function(c) {
              return o.onDrag(c);
            }),
            onTouchend: e[6] || (e[6] = function(c) {
              return o.onDragEnd();
            })
          }, t.ptm("colorSelector")), [r("div", d({
            class: t.cx("colorBackground")
          }, t.ptm("colorBackground")), [r("div", d({
            ref: o.colorHandleRef,
            class: t.cx("colorHandle")
          }, t.ptm("colorHandle")), null, 16)], 16)], 16), r("div", d({
            ref: o.hueViewRef,
            class: t.cx("hue"),
            onMousedown: e[7] || (e[7] = function(c) {
              return o.onHueMousedown(c);
            }),
            onTouchstart: e[8] || (e[8] = function(c) {
              return o.onHueDragStart(c);
            }),
            onTouchmove: e[9] || (e[9] = function(c) {
              return o.onDrag(c);
            }),
            onTouchend: e[10] || (e[10] = function(c) {
              return o.onDragEnd();
            })
          }, t.ptm("hue")), [r("div", d({
            ref: o.hueHandleRef,
            class: t.cx("hueHandle")
          }, t.ptm("hueHandle")), null, 16)], 16)], 16)], 16)) : k("", !0)];
        }),
        _: 1
      }, 16, ["onEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 1
  }, 8, ["appendTo", "disabled"])], 16);
}
ot.render = to;
var no = `
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
        min-width: 100%;
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled):hover {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete-input-multiple.p-disabled {
        opacity: 1;
        background: dt('autocomplete.disabled.background');
        color: dt('autocomplete.disabled.color');
    }

    .p-autocomplete-input-multiple:not(.p-disabled):hover {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple:not(.p-disabled) {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled):hover {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled) {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-autocomplete-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));
    }

    .p-autocomplete:has(.p-autocomplete-clear-icon) .p-autocomplete-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputgroup .p-autocomplete-dropdown {
        border-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child:has(.p-autocomplete-dropdown) > .p-autocomplete-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child .p-autocomplete-dropdown {
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
    }
`, oo = {
  root: {
    position: "relative"
  }
}, io = {
  root: function(e) {
    var n = e.instance;
    return ["p-autocomplete p-component p-inputwrapper", {
      "p-invalid": n.$invalid,
      "p-focus": n.focused,
      "p-inputwrapper-filled": n.$filled || F(n.inputValue),
      "p-inputwrapper-focus": n.focused,
      "p-autocomplete-open": n.overlayVisible,
      "p-autocomplete-fluid": n.$fluid,
      "p-autocomplete-clearable": n.isClearIconVisible
    }];
  },
  pcInputText: "p-autocomplete-input",
  inputMultiple: function(e) {
    var n = e.instance, i = e.props;
    return ["p-autocomplete-input-multiple", {
      "p-variant-filled": n.$variant === "filled",
      "p-disabled": i.disabled
    }];
  },
  clearIcon: "p-autocomplete-clear-icon",
  chipItem: function(e) {
    var n = e.instance, i = e.i;
    return ["p-autocomplete-chip-item", {
      "p-focus": n.focusedMultipleOptionIndex === i
    }];
  },
  pcChip: "p-autocomplete-chip",
  chipIcon: "p-autocomplete-chip-icon",
  inputChip: "p-autocomplete-input-chip",
  loader: "p-autocomplete-loader",
  dropdown: "p-autocomplete-dropdown",
  overlay: "p-autocomplete-overlay p-component",
  listContainer: "p-autocomplete-list-container",
  list: "p-autocomplete-list",
  optionGroup: "p-autocomplete-option-group",
  option: function(e) {
    var n = e.instance, i = e.option, l = e.i, o = e.getItemOptions;
    return ["p-autocomplete-option", {
      "p-autocomplete-option-selected": n.isSelected(i),
      "p-focus": n.focusedOptionIndex === n.getOptionIndex(l, o),
      "p-disabled": n.isOptionDisabled(i)
    }];
  },
  emptyMessage: "p-autocomplete-empty-message"
}, lo = P.extend({
  name: "autocomplete",
  style: no,
  classes: io,
  inlineStyles: oo
}), ao = {
  name: "BaseAutoComplete",
  extends: Ze,
  props: {
    suggestions: {
      type: Array,
      default: null
    },
    optionLabel: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: {
      type: String,
      default: "14rem"
    },
    dropdown: {
      type: Boolean,
      default: !1
    },
    dropdownMode: {
      type: String,
      default: "blank"
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: null
    },
    dataKey: {
      type: String,
      default: null
    },
    minLength: {
      type: Number,
      default: 1
    },
    delay: {
      type: Number,
      default: 300
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    forceSelection: {
      type: Boolean,
      default: !1
    },
    completeOnFocus: {
      type: Boolean,
      default: !1
    },
    showClear: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String,
      default: null
    },
    inputStyle: {
      type: Object,
      default: null
    },
    inputClass: {
      type: [String, Object],
      default: null
    },
    panelStyle: {
      type: Object,
      default: null
    },
    panelClass: {
      type: [String, Object],
      default: null
    },
    overlayStyle: {
      type: Object,
      default: null
    },
    overlayClass: {
      type: [String, Object],
      default: null
    },
    dropdownIcon: {
      type: String,
      default: null
    },
    dropdownClass: {
      type: [String, Object],
      default: null
    },
    loader: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: null
    },
    removeTokenIcon: {
      type: String,
      default: null
    },
    chipIcon: {
      type: String,
      default: null
    },
    virtualScrollerOptions: {
      type: Object,
      default: null
    },
    autoOptionFocus: {
      type: Boolean,
      default: !1
    },
    selectOnFocus: {
      type: Boolean,
      default: !1
    },
    focusOnHover: {
      type: Boolean,
      default: !0
    },
    searchLocale: {
      type: String,
      default: void 0
    },
    searchMessage: {
      type: String,
      default: null
    },
    selectionMessage: {
      type: String,
      default: null
    },
    emptySelectionMessage: {
      type: String,
      default: null
    },
    emptySearchMessage: {
      type: String,
      default: null
    },
    showEmptyMessage: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    },
    typeahead: {
      type: Boolean,
      default: !0
    },
    ariaLabel: {
      type: String,
      default: null
    },
    ariaLabelledby: {
      type: String,
      default: null
    }
  },
  style: lo,
  provide: function() {
    return {
      $pcAutoComplete: this,
      $parentInstance: this
    };
  }
};
function Pe(t, e, n) {
  return (e = ro(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ro(t) {
  var e = so(t, "string");
  return Y(e) == "symbol" ? e : e + "";
}
function so(t, e) {
  if (Y(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(t, e);
    if (Y(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Y(t) {
  "@babel/helpers - typeof";
  return Y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Y(t);
}
function ie(t) {
  return fo(t) || po(t) || co(t) || uo();
}
function uo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function co(t, e) {
  if (t) {
    if (typeof t == "string") return he(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? he(t, e) : void 0;
  }
}
function po(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function fo(t) {
  if (Array.isArray(t)) return he(t);
}
function he(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
  return i;
}
var it = {
  name: "AutoComplete",
  extends: ao,
  inheritAttrs: !1,
  emits: ["change", "focus", "blur", "item-select", "item-unselect", "option-select", "option-unselect", "dropdown-click", "clear", "complete", "before-show", "before-hide", "show", "hide"],
  inject: {
    $pcFluid: {
      default: null
    }
  },
  outsideClickListener: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  virtualScroller: null,
  searchTimeout: null,
  dirty: !1,
  startRangeIndex: -1,
  data: function() {
    return {
      clicked: !1,
      focused: !1,
      focusedOptionIndex: -1,
      focusedMultipleOptionIndex: -1,
      overlayVisible: !1,
      searching: !1
    };
  },
  watch: {
    suggestions: function() {
      this.searching && (this.show(), this.focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, this.searching = !1, !this.showEmptyMessage && this.visibleOptions.length === 0 && this.hide()), this.autoUpdateModel();
    }
  },
  mounted: function() {
    this.autoUpdateModel();
  },
  updated: function() {
    this.overlayVisible && this.alignOverlay();
  },
  beforeUnmount: function() {
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.overlay && (R.clear(this.overlay), this.overlay = null);
  },
  methods: {
    getOptionIndex: function(e, n) {
      return this.virtualScrollerDisabled ? e : n && n(e).index;
    },
    getOptionLabel: function(e) {
      return this.optionLabel ? X(e, this.optionLabel) : e;
    },
    getOptionValue: function(e) {
      return e;
    },
    getOptionRenderKey: function(e, n) {
      return (this.dataKey ? X(e, this.dataKey) : this.getOptionLabel(e)) + "_" + n;
    },
    getPTOptions: function(e, n, i, l) {
      return this.ptm(l, {
        context: {
          option: e,
          index: i,
          selected: this.isSelected(e),
          focused: this.focusedOptionIndex === this.getOptionIndex(i, n),
          disabled: this.isOptionDisabled(e)
        }
      });
    },
    isOptionDisabled: function(e) {
      return this.optionDisabled ? X(e, this.optionDisabled) : !1;
    },
    isOptionGroup: function(e) {
      return this.optionGroupLabel && e.optionGroup && e.group;
    },
    getOptionGroupLabel: function(e) {
      return X(e, this.optionGroupLabel);
    },
    getOptionGroupChildren: function(e) {
      return X(e, this.optionGroupChildren);
    },
    getAriaPosInset: function(e) {
      var n = this;
      return (this.optionGroupLabel ? e - this.visibleOptions.slice(0, e).filter(function(i) {
        return n.isOptionGroup(i);
      }).length : e) + 1;
    },
    show: function(e) {
      this.$emit("before-show"), this.dirty = !0, this.overlayVisible = !0, this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, e && V(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    hide: function(e) {
      var n = this, i = function() {
        var o;
        n.$emit("before-hide"), n.dirty = e, n.overlayVisible = !1, n.clicked = !1, n.focusedOptionIndex = -1, e && V(n.multiple ? n.$refs.focusInput : (o = n.$refs.focusInput) === null || o === void 0 ? void 0 : o.$el);
      };
      setTimeout(function() {
        i();
      }, 0);
    },
    onFocus: function(e) {
      this.disabled || (!this.dirty && this.completeOnFocus && this.search(e, e.target.value, "focus"), this.dirty = !0, this.focused = !0, this.overlayVisible && (this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, this.scrollInView(this.focusedOptionIndex)), this.$emit("focus", e));
    },
    onBlur: function(e) {
      var n, i;
      this.dirty = !1, this.focused = !1, this.focusedOptionIndex = -1, this.$emit("blur", e), (n = (i = this.formField).onBlur) === null || n === void 0 || n.call(i);
    },
    onKeyDown: function(e) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(e);
          break;
        case "ArrowRight":
          this.onArrowRightKey(e);
          break;
        case "Home":
          this.onHomeKey(e);
          break;
        case "End":
          this.onEndKey(e);
          break;
        case "PageDown":
          this.onPageDownKey(e);
          break;
        case "PageUp":
          this.onPageUpKey(e);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(e);
          break;
        case "Space":
          this.onSpaceKey(e);
          break;
        case "Escape":
          this.onEscapeKey(e);
          break;
        case "Tab":
          this.onTabKey(e);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this.onShiftKey(e);
          break;
        case "Backspace":
          this.onBackspaceKey(e);
          break;
      }
      this.clicked = !1;
    },
    onInput: function(e) {
      var n = this;
      if (this.typeahead) {
        this.searchTimeout && clearTimeout(this.searchTimeout);
        var i = e.target.value;
        this.multiple || this.updateModel(e, i), i.length === 0 ? (this.searching = !1, this.hide(), this.$emit("clear")) : i.length >= this.minLength ? (this.focusedOptionIndex = -1, this.searchTimeout = setTimeout(function() {
          n.search(e, i, "input");
        }, this.delay)) : (this.searching = !1, this.hide());
      }
    },
    onChange: function(e) {
      var n = this;
      if (this.forceSelection) {
        var i = !1;
        if (this.visibleOptions && !this.multiple) {
          var l, o = this.multiple ? this.$refs.focusInput.value : (l = this.$refs.focusInput) === null || l === void 0 || (l = l.$el) === null || l === void 0 ? void 0 : l.value, h = this.visibleOptions.find(function(p) {
            return n.isOptionMatched(p, o || "");
          });
          h !== void 0 && (i = !0, !this.isSelected(h) && this.onOptionSelect(e, h));
        }
        if (!i) {
          if (this.multiple)
            this.$refs.focusInput.value = "";
          else {
            var c, b = (c = this.$refs.focusInput) === null || c === void 0 ? void 0 : c.$el;
            b && (b.value = "");
          }
          this.$emit("clear"), !this.multiple && this.updateModel(e, null);
        }
      }
    },
    onMultipleContainerFocus: function() {
      this.disabled || (this.focused = !0);
    },
    onMultipleContainerBlur: function() {
      this.focusedMultipleOptionIndex = -1, this.focused = !1;
    },
    onMultipleContainerKeyDown: function(e) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      switch (e.code) {
        case "ArrowLeft":
          this.onArrowLeftKeyOnMultiple(e);
          break;
        case "ArrowRight":
          this.onArrowRightKeyOnMultiple(e);
          break;
        case "Backspace":
          this.onBackspaceKeyOnMultiple(e);
          break;
      }
    },
    onContainerClick: function(e) {
      this.clicked = !0, !(this.disabled || this.searching || this.loading || this.isDropdownClicked(e)) && (!this.overlay || !this.overlay.contains(e.target)) && V(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    onDropdownClick: function(e) {
      var n = void 0;
      if (this.overlayVisible)
        this.hide(!0);
      else {
        var i = this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el;
        V(i), n = i.value, this.dropdownMode === "blank" ? this.search(e, "", "dropdown") : this.dropdownMode === "current" && this.search(e, n, "dropdown");
      }
      this.$emit("dropdown-click", {
        originalEvent: e,
        query: n
      });
    },
    onOptionSelect: function(e, n) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, l = this.getOptionValue(n);
      this.multiple ? (this.$refs.focusInput.value = "", this.isSelected(n) || this.updateModel(e, [].concat(ie(this.d_value || []), [l]))) : this.updateModel(e, l), this.$emit("item-select", {
        originalEvent: e,
        value: n
      }), this.$emit("option-select", {
        originalEvent: e,
        value: n
      }), i && this.hide(!0);
    },
    onOptionMouseMove: function(e, n) {
      this.focusOnHover && this.changeFocusedOptionIndex(e, n);
    },
    onOptionSelectRange: function(e) {
      var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
      if (i === -1 && (i = this.findNearestSelectedOptionIndex(l, !0)), l === -1 && (l = this.findNearestSelectedOptionIndex(i)), i !== -1 && l !== -1) {
        var o = Math.min(i, l), h = Math.max(i, l), c = this.visibleOptions.slice(o, h + 1).filter(function(b) {
          return n.isValidOption(b);
        }).filter(function(b) {
          return !n.isSelected(b);
        }).map(function(b) {
          return n.getOptionValue(b);
        });
        this.updateModel(e, [].concat(ie(this.d_value || []), ie(c)));
      }
    },
    onClearClick: function(e) {
      this.updateModel(e, null);
    },
    onOverlayClick: function(e) {
      Oe.emit("overlay-click", {
        originalEvent: e,
        target: this.$el
      });
    },
    onOverlayKeyDown: function(e) {
      e.code === "Escape" && this.onEscapeKey(e);
    },
    onArrowDownKey: function(e) {
      if (this.overlayVisible) {
        var n = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
        this.multiple && e.shiftKey && this.onOptionSelectRange(e, this.startRangeIndex, n), this.changeFocusedOptionIndex(e, n), e.preventDefault();
      }
    },
    onArrowUpKey: function(e) {
      if (this.overlayVisible)
        if (e.altKey)
          this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide(), e.preventDefault();
        else {
          var n = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
          this.multiple && e.shiftKey && this.onOptionSelectRange(e, n, this.startRangeIndex), this.changeFocusedOptionIndex(e, n), e.preventDefault();
        }
    },
    onArrowLeftKey: function(e) {
      var n = e.currentTarget;
      this.focusedOptionIndex = -1, this.multiple && (Ne(n.value) && this.$filled ? (V(this.$refs.multiContainer), this.focusedMultipleOptionIndex = this.d_value.length) : e.stopPropagation());
    },
    onArrowRightKey: function(e) {
      this.focusedOptionIndex = -1, this.multiple && e.stopPropagation();
    },
    onHomeKey: function(e) {
      var n = e.currentTarget, i = n.value.length, l = e.metaKey || e.ctrlKey, o = this.findFirstOptionIndex();
      this.multiple && e.shiftKey && l && this.onOptionSelectRange(e, o, this.startRangeIndex), n.setSelectionRange(0, e.shiftKey ? i : 0), this.focusedOptionIndex = -1, e.preventDefault();
    },
    onEndKey: function(e) {
      var n = e.currentTarget, i = n.value.length, l = e.metaKey || e.ctrlKey, o = this.findLastOptionIndex();
      this.multiple && e.shiftKey && l && this.onOptionSelectRange(e, this.startRangeIndex, o), n.setSelectionRange(e.shiftKey ? 0 : i, i), this.focusedOptionIndex = -1, e.preventDefault();
    },
    onPageUpKey: function(e) {
      this.scrollInView(0), e.preventDefault();
    },
    onPageDownKey: function(e) {
      this.scrollInView(this.visibleOptions.length - 1), e.preventDefault();
    },
    onEnterKey: function(e) {
      this.typeahead ? this.overlayVisible ? (this.focusedOptionIndex !== -1 && (this.multiple && e.shiftKey ? (this.onOptionSelectRange(e, this.focusedOptionIndex), e.preventDefault()) : this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex])), this.hide()) : (this.focusedOptionIndex = -1, this.onArrowDownKey(e)) : this.multiple && (e.target.value.trim() && (this.updateModel(e, [].concat(ie(this.d_value || []), [e.target.value.trim()])), this.$refs.focusInput.value = ""), e.preventDefault());
    },
    onSpaceKey: function(e) {
      !this.autoOptionFocus && this.focusedOptionIndex !== -1 && this.onEnterKey(e);
    },
    onEscapeKey: function(e) {
      this.overlayVisible && this.hide(!0), e.preventDefault();
    },
    onTabKey: function(e) {
      this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide();
    },
    onShiftKey: function() {
      this.startRangeIndex = this.focusedOptionIndex;
    },
    onBackspaceKey: function(e) {
      if (this.multiple) {
        if (F(this.d_value) && !this.$refs.focusInput.value) {
          var n = this.d_value[this.d_value.length - 1], i = this.d_value.slice(0, -1);
          this.writeValue(i, e), this.$emit("item-unselect", {
            originalEvent: e,
            value: n
          }), this.$emit("option-unselect", {
            originalEvent: e,
            value: n
          });
        }
        e.stopPropagation();
      }
    },
    onArrowLeftKeyOnMultiple: function() {
      this.focusedMultipleOptionIndex = this.focusedMultipleOptionIndex < 1 ? 0 : this.focusedMultipleOptionIndex - 1;
    },
    onArrowRightKeyOnMultiple: function() {
      this.focusedMultipleOptionIndex++, this.focusedMultipleOptionIndex > this.d_value.length - 1 && (this.focusedMultipleOptionIndex = -1, V(this.$refs.focusInput));
    },
    onBackspaceKeyOnMultiple: function(e) {
      this.focusedMultipleOptionIndex !== -1 && this.removeOption(e, this.focusedMultipleOptionIndex);
    },
    onOverlayEnter: function(e) {
      R.set("overlay", e, this.$primevue.config.zIndex.overlay), je(e, {
        position: "absolute",
        top: "0"
      }), this.alignOverlay(), this.$attrSelector && e.setAttribute(this.$attrSelector, "");
    },
    onOverlayAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onOverlayLeave: function() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.overlay = null;
    },
    onOverlayAfterLeave: function(e) {
      R.clear(e);
    },
    alignOverlay: function() {
      var e = this.multiple ? this.$refs.multiContainer : this.$refs.focusInput.$el;
      this.appendTo === "self" ? ve(this.overlay, e) : (this.overlay.style.minWidth = Ge(e) + "px", ye(this.overlay, e));
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        e.overlayVisible && e.overlay && e.isOutsideClicked(n) && e.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var e = this;
      this.scrollHandler || (this.scrollHandler = new Se(this.$refs.container, function() {
        e.overlayVisible && e.hide();
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function() {
        e.overlayVisible && !ge() && e.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    isOutsideClicked: function(e) {
      return !this.overlay.contains(e.target) && !this.isInputClicked(e) && !this.isDropdownClicked(e);
    },
    isInputClicked: function(e) {
      return this.multiple ? e.target === this.$refs.multiContainer || this.$refs.multiContainer.contains(e.target) : e.target === this.$refs.focusInput.$el;
    },
    isDropdownClicked: function(e) {
      return this.$refs.dropdownButton ? e.target === this.$refs.dropdownButton || this.$refs.dropdownButton.contains(e.target) : !1;
    },
    isOptionMatched: function(e, n) {
      var i;
      return this.isValidOption(e) && ((i = this.getOptionLabel(e)) === null || i === void 0 ? void 0 : i.toLocaleLowerCase(this.searchLocale)) === n.toLocaleLowerCase(this.searchLocale);
    },
    isValidOption: function(e) {
      return F(e) && !(this.isOptionDisabled(e) || this.isOptionGroup(e));
    },
    isValidSelectedOption: function(e) {
      return this.isValidOption(e) && this.isSelected(e);
    },
    isEquals: function(e, n) {
      return Mt(e, n, this.equalityKey);
    },
    isSelected: function(e) {
      var n = this, i = this.getOptionValue(e);
      return this.multiple ? (this.d_value || []).some(function(l) {
        return n.isEquals(l, i);
      }) : this.isEquals(this.d_value, this.getOptionValue(e));
    },
    findFirstOptionIndex: function() {
      var e = this;
      return this.visibleOptions.findIndex(function(n) {
        return e.isValidOption(n);
      });
    },
    findLastOptionIndex: function() {
      var e = this;
      return ue(this.visibleOptions, function(n) {
        return e.isValidOption(n);
      });
    },
    findNextOptionIndex: function(e) {
      var n = this, i = e < this.visibleOptions.length - 1 ? this.visibleOptions.slice(e + 1).findIndex(function(l) {
        return n.isValidOption(l);
      }) : -1;
      return i > -1 ? i + e + 1 : e;
    },
    findPrevOptionIndex: function(e) {
      var n = this, i = e > 0 ? ue(this.visibleOptions.slice(0, e), function(l) {
        return n.isValidOption(l);
      }) : -1;
      return i > -1 ? i : e;
    },
    findSelectedOptionIndex: function() {
      var e = this;
      return this.$filled ? this.visibleOptions.findIndex(function(n) {
        return e.isValidSelectedOption(n);
      }) : -1;
    },
    findFirstFocusedOptionIndex: function() {
      var e = this.findSelectedOptionIndex();
      return e < 0 ? this.findFirstOptionIndex() : e;
    },
    findLastFocusedOptionIndex: function() {
      var e = this.findSelectedOptionIndex();
      return e < 0 ? this.findLastOptionIndex() : e;
    },
    search: function(e, n, i) {
      n != null && (i === "input" && n.trim().length === 0 || (this.searching = !0, this.$emit("complete", {
        originalEvent: e,
        query: n
      })));
    },
    removeOption: function(e, n) {
      var i = this, l = this.d_value[n], o = this.d_value.filter(function(h, c) {
        return c !== n;
      }).map(function(h) {
        return i.getOptionValue(h);
      });
      this.updateModel(e, o), this.$emit("item-unselect", {
        originalEvent: e,
        value: l
      }), this.$emit("option-unselect", {
        originalEvent: e,
        value: l
      }), this.dirty = !0, V(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    changeFocusedOptionIndex: function(e, n) {
      this.focusedOptionIndex !== n && (this.focusedOptionIndex = n, this.scrollInView(), this.selectOnFocus && this.onOptionSelect(e, this.visibleOptions[n], !1));
    },
    scrollInView: function() {
      var e = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      this.$nextTick(function() {
        var i = n !== -1 ? "".concat(e.$id, "_").concat(n) : e.focusedOptionId, l = Ue(e.list, 'li[id="'.concat(i, '"]'));
        l ? l.scrollIntoView && l.scrollIntoView({
          block: "nearest",
          inline: "start"
        }) : e.virtualScrollerDisabled || e.virtualScroller && e.virtualScroller.scrollToIndex(n !== -1 ? n : e.focusedOptionIndex);
      });
    },
    autoUpdateModel: function() {
      this.selectOnFocus && this.autoOptionFocus && !this.$filled && (this.focusedOptionIndex = this.findFirstFocusedOptionIndex(), this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], !1));
    },
    updateModel: function(e, n) {
      this.writeValue(n, e), this.$emit("change", {
        originalEvent: e,
        value: n
      });
    },
    flatOptions: function(e) {
      var n = this;
      return (e || []).reduce(function(i, l, o) {
        i.push({
          optionGroup: l,
          group: !0,
          index: o
        });
        var h = n.getOptionGroupChildren(l);
        return h && h.forEach(function(c) {
          return i.push(c);
        }), i;
      }, []);
    },
    overlayRef: function(e) {
      this.overlay = e;
    },
    listRef: function(e, n) {
      this.list = e, n && n(e);
    },
    virtualScrollerRef: function(e) {
      this.virtualScroller = e;
    },
    findNextSelectedOptionIndex: function(e) {
      var n = this, i = this.$filled && e < this.visibleOptions.length - 1 ? this.visibleOptions.slice(e + 1).findIndex(function(l) {
        return n.isValidSelectedOption(l);
      }) : -1;
      return i > -1 ? i + e + 1 : -1;
    },
    findPrevSelectedOptionIndex: function(e) {
      var n = this, i = this.$filled && e > 0 ? ue(this.visibleOptions.slice(0, e), function(l) {
        return n.isValidSelectedOption(l);
      }) : -1;
      return i > -1 ? i : -1;
    },
    findNearestSelectedOptionIndex: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = -1;
      return this.$filled && (n ? (i = this.findPrevSelectedOptionIndex(e), i = i === -1 ? this.findNextSelectedOptionIndex(e) : i) : (i = this.findNextSelectedOptionIndex(e), i = i === -1 ? this.findPrevSelectedOptionIndex(e) : i)), i > -1 ? i : e;
    }
  },
  computed: {
    visibleOptions: function() {
      return this.optionGroupLabel ? this.flatOptions(this.suggestions) : this.suggestions || [];
    },
    inputValue: function() {
      if (this.$filled)
        if (Y(this.d_value) === "object") {
          var e = this.getOptionLabel(this.d_value);
          return e ?? this.d_value;
        } else
          return this.d_value;
      else
        return "";
    },
    // @deprecated use $filled instead.
    hasSelectedOption: function() {
      return this.$filled;
    },
    equalityKey: function() {
      return this.dataKey;
    },
    searchResultMessageText: function() {
      return F(this.visibleOptions) && this.overlayVisible ? this.searchMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptySearchMessageText;
    },
    searchMessageText: function() {
      return this.searchMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptySearchMessageText: function() {
      return this.emptySearchMessage || this.$primevue.config.locale.emptySearchMessage || "";
    },
    selectionMessageText: function() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText: function() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText: function() {
      return this.$filled ? this.selectionMessageText.replaceAll("{0}", this.multiple ? this.d_value.length : "1") : this.emptySelectionMessageText;
    },
    listAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : void 0;
    },
    focusedOptionId: function() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.$id, "_").concat(this.focusedOptionIndex) : null;
    },
    focusedMultipleOptionId: function() {
      return this.focusedMultipleOptionIndex !== -1 ? "".concat(this.$id, "_multiple_option_").concat(this.focusedMultipleOptionIndex) : null;
    },
    isClearIconVisible: function() {
      return this.showClear && this.$filled && !this.disabled && !this.loading;
    },
    ariaSetSize: function() {
      var e = this;
      return this.visibleOptions.filter(function(n) {
        return !e.isOptionGroup(n);
      }).length;
    },
    virtualScrollerDisabled: function() {
      return !this.virtualScrollerOptions;
    },
    panelId: function() {
      return this.$id + "_panel";
    },
    containerDataP: function() {
      return le({
        fluid: this.$fluid
      });
    },
    overlayDataP: function() {
      return le(Pe({}, "portal-" + this.appendTo, "portal-" + this.appendTo));
    },
    inputMultipleDataP: function() {
      return le(Pe({
        invalid: this.$invalid,
        disabled: this.disabled,
        focus: this.focused,
        fluid: this.$fluid,
        filled: this.$variant === "filled",
        empty: !this.$filled
      }, this.size, this.size));
    }
  },
  components: {
    InputText: Je,
    VirtualScroller: Nt,
    Portal: be,
    Chip: We,
    ChevronDownIcon: Xe,
    SpinnerIcon: Zt,
    TimesIcon: ze
  },
  directives: {
    ripple: Fe
  }
};
function q(t) {
  "@babel/helpers - typeof";
  return q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, q(t);
}
function He(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function $e(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? He(Object(n), !0).forEach(function(i) {
      ho(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : He(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function ho(t, e, n) {
  return (e = mo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function mo(t) {
  var e = bo(t, "string");
  return q(e) == "symbol" ? e : e + "";
}
function bo(t, e) {
  if (q(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(t, e);
    if (q(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var go = ["data-p"], vo = ["aria-activedescendant", "data-p-has-dropdown", "data-p"], yo = ["id", "aria-label", "aria-setsize", "aria-posinset"], wo = ["id", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"], ko = ["data-p-has-dropdown"], Oo = ["disabled", "aria-expanded", "aria-controls"], So = ["id", "data-p"], Io = ["id", "aria-label"], Co = ["id"], xo = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-selected", "data-p-focused", "data-p-disabled"];
function Lo(t, e, n, i, l, o) {
  var h = B("InputText"), c = B("TimesIcon"), b = B("Chip"), p = B("SpinnerIcon"), L = B("VirtualScroller"), E = B("Portal"), Q = Bt("ripple");
  return f(), m("div", d({
    ref: "container",
    class: t.cx("root"),
    style: t.sx("root"),
    onClick: e[11] || (e[11] = function() {
      return o.onContainerClick && o.onContainerClick.apply(o, arguments);
    }),
    "data-p": o.containerDataP
  }, t.ptmi("root")), [t.multiple ? k("", !0) : (f(), j(h, {
    key: 0,
    ref: "focusInput",
    id: t.inputId,
    type: "text",
    name: t.$formName,
    class: C([t.cx("pcInputText"), t.inputClass]),
    style: Kt(t.inputStyle),
    defaultValue: o.inputValue,
    placeholder: t.placeholder,
    tabindex: t.disabled ? -1 : t.tabindex,
    fluid: t.$fluid,
    disabled: t.disabled,
    size: t.size,
    invalid: t.invalid,
    variant: t.variant,
    autocomplete: "off",
    role: "combobox",
    "aria-label": t.ariaLabel,
    "aria-labelledby": t.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-expanded": l.overlayVisible,
    "aria-controls": l.overlayVisible ? o.panelId : void 0,
    "aria-activedescendant": l.focused ? o.focusedOptionId : void 0,
    onFocus: o.onFocus,
    onBlur: o.onBlur,
    onKeydown: o.onKeyDown,
    onInput: o.onInput,
    onChange: o.onChange,
    unstyled: t.unstyled,
    "data-p-has-dropdown": t.dropdown,
    pt: t.ptm("pcInputText")
  }, null, 8, ["id", "name", "class", "style", "defaultValue", "placeholder", "tabindex", "fluid", "disabled", "size", "invalid", "variant", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "onFocus", "onBlur", "onKeydown", "onInput", "onChange", "unstyled", "data-p-has-dropdown", "pt"])), o.isClearIconVisible ? v(t.$slots, "clearicon", {
    key: 1,
    class: C(t.cx("clearIcon")),
    clearCallback: o.onClearClick
  }, function() {
    return [s(c, d({
      class: [t.cx("clearIcon")],
      onClick: o.onClearClick
    }, t.ptm("clearIcon")), null, 16, ["class", "onClick"])];
  }) : k("", !0), t.multiple ? (f(), m("ul", d({
    key: 2,
    ref: "multiContainer",
    class: t.cx("inputMultiple"),
    tabindex: "-1",
    role: "listbox",
    "aria-orientation": "horizontal",
    "aria-activedescendant": l.focused ? o.focusedMultipleOptionId : void 0,
    onFocus: e[5] || (e[5] = function() {
      return o.onMultipleContainerFocus && o.onMultipleContainerFocus.apply(o, arguments);
    }),
    onBlur: e[6] || (e[6] = function() {
      return o.onMultipleContainerBlur && o.onMultipleContainerBlur.apply(o, arguments);
    }),
    onKeydown: e[7] || (e[7] = function() {
      return o.onMultipleContainerKeyDown && o.onMultipleContainerKeyDown.apply(o, arguments);
    }),
    "data-p-has-dropdown": t.dropdown,
    "data-p": o.inputMultipleDataP
  }, t.ptm("inputMultiple")), [(f(!0), m(K, null, ae(t.d_value, function(S, w) {
    return f(), m("li", d({
      key: "".concat(w, "_").concat(o.getOptionLabel(S)),
      id: t.$id + "_multiple_option_" + w,
      class: t.cx("chipItem", {
        i: w
      }),
      role: "option",
      "aria-label": o.getOptionLabel(S),
      "aria-selected": !0,
      "aria-setsize": t.d_value.length,
      "aria-posinset": w + 1
    }, {
      ref_for: !0
    }, t.ptm("chipItem")), [v(t.$slots, "chip", d({
      class: t.cx("pcChip"),
      value: S,
      index: w,
      removeCallback: function(x) {
        return o.removeOption(x, w);
      }
    }, {
      ref_for: !0
    }, t.ptm("pcChip")), function() {
      return [s(b, {
        class: C(t.cx("pcChip")),
        label: o.getOptionLabel(S),
        removeIcon: t.chipIcon || t.removeTokenIcon,
        removable: "",
        unstyled: t.unstyled,
        onRemove: function(x) {
          return o.removeOption(x, w);
        },
        "data-p-focused": l.focusedMultipleOptionIndex === w,
        pt: t.ptm("pcChip")
      }, {
        removeicon: g(function() {
          return [v(t.$slots, t.$slots.chipicon ? "chipicon" : "removetokenicon", {
            class: C(t.cx("chipIcon")),
            index: w,
            removeCallback: function(x) {
              return o.removeOption(x, w);
            }
          })];
        }),
        _: 2
      }, 1032, ["class", "label", "removeIcon", "unstyled", "onRemove", "data-p-focused", "pt"])];
    })], 16, yo);
  }), 128)), r("li", d({
    class: t.cx("inputChip"),
    role: "option"
  }, t.ptm("inputChip")), [r("input", d({
    ref: "focusInput",
    id: t.inputId,
    type: "text",
    style: t.inputStyle,
    class: t.inputClass,
    placeholder: t.placeholder,
    tabindex: t.disabled ? -1 : t.tabindex,
    disabled: t.disabled,
    autocomplete: "off",
    role: "combobox",
    "aria-label": t.ariaLabel,
    "aria-labelledby": t.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-expanded": l.overlayVisible,
    "aria-controls": t.$id + "_list",
    "aria-activedescendant": l.focused ? o.focusedOptionId : void 0,
    "aria-invalid": t.invalid || void 0,
    onFocus: e[0] || (e[0] = function() {
      return o.onFocus && o.onFocus.apply(o, arguments);
    }),
    onBlur: e[1] || (e[1] = function() {
      return o.onBlur && o.onBlur.apply(o, arguments);
    }),
    onKeydown: e[2] || (e[2] = function() {
      return o.onKeyDown && o.onKeyDown.apply(o, arguments);
    }),
    onInput: e[3] || (e[3] = function() {
      return o.onInput && o.onInput.apply(o, arguments);
    }),
    onChange: e[4] || (e[4] = function() {
      return o.onChange && o.onChange.apply(o, arguments);
    })
  }, t.ptm("input")), null, 16, wo)], 16)], 16, vo)) : k("", !0), l.searching || t.loading ? v(t.$slots, t.$slots.loader ? "loader" : "loadingicon", {
    key: 3,
    class: C(t.cx("loader"))
  }, function() {
    return [t.loader || t.loadingIcon ? (f(), m("i", d({
      key: 0,
      class: ["pi-spin", t.cx("loader"), t.loader, t.loadingIcon],
      "aria-hidden": "true",
      "data-p-has-dropdown": t.dropdown
    }, t.ptm("loader")), null, 16, ko)) : t.loading ? (f(), j(p, d({
      key: 1,
      class: t.cx("loader"),
      spin: "",
      "aria-hidden": "true",
      "data-p-has-dropdown": t.dropdown
    }, t.ptm("loader")), null, 16, ["class", "data-p-has-dropdown"])) : k("", !0)];
  }) : k("", !0), v(t.$slots, t.$slots.dropdown ? "dropdown" : "dropdownbutton", {
    toggleCallback: function(w) {
      return o.onDropdownClick(w);
    }
  }, function() {
    return [t.dropdown ? (f(), m("button", d({
      key: 0,
      ref: "dropdownButton",
      type: "button",
      class: [t.cx("dropdown"), t.dropdownClass],
      disabled: t.disabled,
      "aria-haspopup": "listbox",
      "aria-expanded": l.overlayVisible,
      "aria-controls": o.panelId,
      onClick: e[8] || (e[8] = function() {
        return o.onDropdownClick && o.onDropdownClick.apply(o, arguments);
      })
    }, t.ptm("dropdown")), [v(t.$slots, "dropdownicon", {
      class: C(t.dropdownIcon)
    }, function() {
      return [(f(), j(pe(t.dropdownIcon ? "span" : "ChevronDownIcon"), d({
        class: t.dropdownIcon
      }, t.ptm("dropdownIcon")), null, 16, ["class"]))];
    })], 16, Oo)) : k("", !0)];
  }), t.typeahead ? (f(), m("span", d({
    key: 4,
    role: "status",
    "aria-live": "polite",
    class: "p-hidden-accessible"
  }, t.ptm("hiddenSearchResult"), {
    "data-p-hidden-accessible": !0
  }), T(o.searchResultMessageText), 17)) : k("", !0), s(E, {
    appendTo: t.appendTo
  }, {
    default: g(function() {
      return [s(ke, d({
        name: "p-anchored-overlay",
        onEnter: o.onOverlayEnter,
        onAfterEnter: o.onOverlayAfterEnter,
        onLeave: o.onOverlayLeave,
        onAfterLeave: o.onOverlayAfterLeave
      }, t.ptm("transition")), {
        default: g(function() {
          return [l.overlayVisible ? (f(), m("div", d({
            key: 0,
            ref: o.overlayRef,
            id: o.panelId,
            class: [t.cx("overlay"), t.panelClass, t.overlayClass],
            style: $e($e({}, t.panelStyle), t.overlayStyle),
            onClick: e[9] || (e[9] = function() {
              return o.onOverlayClick && o.onOverlayClick.apply(o, arguments);
            }),
            onKeydown: e[10] || (e[10] = function() {
              return o.onOverlayKeyDown && o.onOverlayKeyDown.apply(o, arguments);
            }),
            "data-p": o.overlayDataP
          }, t.ptm("overlay")), [v(t.$slots, "header", {
            value: t.d_value,
            suggestions: o.visibleOptions
          }), r("div", d({
            class: t.cx("listContainer"),
            style: {
              "max-height": o.virtualScrollerDisabled ? t.scrollHeight : ""
            }
          }, t.ptm("listContainer")), [s(L, d({
            ref: o.virtualScrollerRef
          }, t.virtualScrollerOptions, {
            style: {
              height: t.scrollHeight
            },
            items: o.visibleOptions,
            tabindex: -1,
            disabled: o.virtualScrollerDisabled,
            pt: t.ptm("virtualScroller")
          }), Ye({
            content: g(function(S) {
              var w = S.styleClass, z = S.contentRef, x = S.items, M = S.getItemOptions, _ = S.contentStyle, H = S.itemSize;
              return [r("ul", d({
                ref: function(I) {
                  return o.listRef(I, z);
                },
                id: t.$id + "_list",
                class: [t.cx("list"), w],
                style: _,
                role: "listbox",
                "aria-label": o.listAriaLabel
              }, t.ptm("list")), [(f(!0), m(K, null, ae(x, function(O, I) {
                return f(), m(K, {
                  key: o.getOptionRenderKey(O, o.getOptionIndex(I, M))
                }, [o.isOptionGroup(O) ? (f(), m("li", d({
                  key: 0,
                  id: t.$id + "_" + o.getOptionIndex(I, M),
                  style: {
                    height: H ? H + "px" : void 0
                  },
                  class: t.cx("optionGroup"),
                  role: "option"
                }, {
                  ref_for: !0
                }, t.ptm("optionGroup")), [v(t.$slots, "optiongroup", {
                  option: O.optionGroup,
                  index: o.getOptionIndex(I, M)
                }, function() {
                  return [A(T(o.getOptionGroupLabel(O.optionGroup)), 1)];
                })], 16, Co)) : Rt((f(), m("li", d({
                  key: 1,
                  id: t.$id + "_" + o.getOptionIndex(I, M),
                  style: {
                    height: H ? H + "px" : void 0
                  },
                  class: t.cx("option", {
                    option: O,
                    i: I,
                    getItemOptions: M
                  }),
                  role: "option",
                  "aria-label": o.getOptionLabel(O),
                  "aria-selected": o.isSelected(O),
                  "aria-disabled": o.isOptionDisabled(O),
                  "aria-setsize": o.ariaSetSize,
                  "aria-posinset": o.getAriaPosInset(o.getOptionIndex(I, M)),
                  onClick: function(N) {
                    return o.onOptionSelect(N, O);
                  },
                  onMousemove: function(N) {
                    return o.onOptionMouseMove(N, o.getOptionIndex(I, M));
                  },
                  "data-p-selected": o.isSelected(O),
                  "data-p-focused": l.focusedOptionIndex === o.getOptionIndex(I, M),
                  "data-p-disabled": o.isOptionDisabled(O)
                }, {
                  ref_for: !0
                }, o.getPTOptions(O, M, I, "option")), [v(t.$slots, "option", {
                  option: O,
                  index: o.getOptionIndex(I, M)
                }, function() {
                  return [A(T(o.getOptionLabel(O)), 1)];
                })], 16, xo)), [[Q]])], 64);
              }), 128)), t.showEmptyMessage && (!x || x && x.length === 0) ? (f(), m("li", d({
                key: 0,
                class: t.cx("emptyMessage"),
                role: "option"
              }, t.ptm("emptyMessage")), [v(t.$slots, "empty", {}, function() {
                return [A(T(o.searchResultMessageText), 1)];
              })], 16)) : k("", !0)], 16, Io)];
            }),
            _: 2
          }, [t.$slots.loader ? {
            name: "loader",
            fn: g(function(S) {
              var w = S.options;
              return [v(t.$slots, "loader", {
                options: w
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["style", "items", "disabled", "pt"])], 16), v(t.$slots, "footer", {
            value: t.d_value,
            suggestions: o.visibleOptions
          }), r("span", d({
            role: "status",
            "aria-live": "polite",
            class: "p-hidden-accessible"
          }, t.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": !0
          }), T(o.selectedMessageText), 17)], 16, So)) : k("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16, go);
}
it.render = Lo;
var Mo = `
    .p-floatlabel {
        display: block;
        position: relative;
    }

    .p-floatlabel label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-weight: dt('floatlabel.font.weight');
        inset-inline-start: dt('floatlabel.position.x');
        color: dt('floatlabel.color');
        transition-duration: dt('floatlabel.transition.duration');
    }

    .p-floatlabel:has(.p-textarea) label {
        top: dt('floatlabel.position.y');
        transform: translateY(0);
    }

    .p-floatlabel:has(.p-inputicon:first-child) label {
        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label,
    .p-floatlabel:has(input[placeholder]) label,
    .p-floatlabel:has(textarea[placeholder]) label {
        top: dt('floatlabel.over.active.top');
        transform: translateY(0);
        font-size: dt('floatlabel.active.font.size');
        font-weight: dt('floatlabel.active.font.weight');
    }

    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        color: dt('floatlabel.active.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label {
        color: dt('floatlabel.focus.color');
    }

    .p-floatlabel-in .p-inputtext,
    .p-floatlabel-in .p-textarea,
    .p-floatlabel-in .p-select-label,
    .p-floatlabel-in .p-multiselect-label,
    .p-floatlabel-in .p-multiselect-label:has(.p-chip),
    .p-floatlabel-in .p-autocomplete-input-multiple,
    .p-floatlabel-in .p-cascadeselect-label,
    .p-floatlabel-in .p-treeselect-label {
        padding-block-start: dt('floatlabel.in.input.padding.top');
        padding-block-end: dt('floatlabel.in.input.padding.bottom');
    }

    .p-floatlabel-in:has(input:focus) label,
    .p-floatlabel-in:has(input.p-filled) label,
    .p-floatlabel-in:has(input:-webkit-autofill) label,
    .p-floatlabel-in:has(textarea:focus) label,
    .p-floatlabel-in:has(textarea.p-filled) label,
    .p-floatlabel-in:has(.p-inputwrapper-focus) label,
    .p-floatlabel-in:has(.p-inputwrapper-filled) label,
    .p-floatlabel-in:has(input[placeholder]) label,
    .p-floatlabel-in:has(textarea[placeholder]) label {
        top: dt('floatlabel.in.active.top');
    }

    .p-floatlabel-on:has(input:focus) label,
    .p-floatlabel-on:has(input.p-filled) label,
    .p-floatlabel-on:has(input:-webkit-autofill) label,
    .p-floatlabel-on:has(textarea:focus) label,
    .p-floatlabel-on:has(textarea.p-filled) label,
    .p-floatlabel-on:has(.p-inputwrapper-focus) label,
    .p-floatlabel-on:has(.p-inputwrapper-filled) label,
    .p-floatlabel-on:has(input[placeholder]) label,
    .p-floatlabel-on:has(textarea[placeholder]) label {
        top: 0;
        transform: translateY(-50%);
        border-radius: dt('floatlabel.on.border.radius');
        background: dt('floatlabel.on.active.background');
        padding: dt('floatlabel.on.active.padding');
    }

    .p-floatlabel:has([class^='p-'][class$='-fluid']) {
        width: 100%;
    }

    .p-floatlabel:has(.p-invalid) label {
        color: dt('floatlabel.invalid.color');
    }
`, Vo = {
  root: function(e) {
    var n = e.props;
    return ["p-floatlabel", {
      "p-floatlabel-over": n.variant === "over",
      "p-floatlabel-on": n.variant === "on",
      "p-floatlabel-in": n.variant === "in"
    }];
  }
}, To = P.extend({
  name: "floatlabel",
  style: Mo,
  classes: Vo
}), Do = {
  name: "BaseFloatLabel",
  extends: me,
  props: {
    variant: {
      type: String,
      default: "over"
    }
  },
  style: To,
  provide: function() {
    return {
      $pcFloatLabel: this,
      $parentInstance: this
    };
  }
}, lt = {
  name: "FloatLabel",
  extends: Do,
  inheritAttrs: !1
};
function Bo(t, e, n, i, l, o) {
  return f(), m("span", d({
    class: t.cx("root")
  }, t.ptmi("root")), [v(t.$slots, "default")], 16);
}
lt.render = Bo;
const Ko = {
  getData() {
    return [
      { name: "Afghanistan", code: "AF" },
      { name: "Albania", code: "AL" },
      { name: "Algeria", code: "DZ" },
      { name: "American Samoa", code: "AS" },
      { name: "Andorra", code: "AD" },
      { name: "Angola", code: "AO" },
      { name: "Anguilla", code: "AI" },
      { name: "Antarctica", code: "AQ" },
      { name: "Antigua and Barbuda", code: "AG" },
      { name: "Argentina", code: "AR" },
      { name: "Armenia", code: "AM" },
      { name: "Aruba", code: "AW" },
      { name: "Australia", code: "AU" },
      { name: "Austria", code: "AT" },
      { name: "Azerbaijan", code: "AZ" },
      { name: "Bahamas", code: "BS" },
      { name: "Bahrain", code: "BH" },
      { name: "Bangladesh", code: "BD" },
      { name: "Barbados", code: "BB" },
      { name: "Belarus", code: "BY" },
      { name: "Belgium", code: "BE" },
      { name: "Belize", code: "BZ" },
      { name: "Benin", code: "BJ" },
      { name: "Bermuda", code: "BM" },
      { name: "Bhutan", code: "BT" },
      { name: "Bolivia", code: "BO" },
      { name: "Bosnia and Herzegovina", code: "BA" },
      { name: "Botswana", code: "BW" },
      { name: "Bouvet Island", code: "BV" },
      { name: "Brazil", code: "BR" },
      { name: "British Indian Ocean Territory", code: "IO" },
      { name: "Brunei Darussalam", code: "BN" },
      { name: "Bulgaria", code: "BG" },
      { name: "Burkina Faso", code: "BF" },
      { name: "Burundi", code: "BI" },
      { name: "Cambodia", code: "KH" },
      { name: "Cameroon", code: "CM" },
      { name: "Canada", code: "CA" },
      { name: "Cape Verde", code: "CV" },
      { name: "Cayman Islands", code: "KY" },
      { name: "Central African Republic", code: "CF" },
      { name: "Chad", code: "TD" },
      { name: "Chile", code: "CL" },
      { name: "China", code: "CN" },
      { name: "Christmas Island", code: "CX" },
      { name: "Cocos (Keeling) Islands", code: "CC" },
      { name: "Colombia", code: "CO" },
      { name: "Comoros", code: "KM" },
      { name: "Congo", code: "CG" },
      { name: "Congo, The Democratic Republic of the", code: "CD" },
      { name: "Cook Islands", code: "CK" },
      { name: "Costa Rica", code: "CR" },
      { name: 'Cote D"Ivoire', code: "CI" },
      { name: "Croatia", code: "HR" },
      { name: "Cuba", code: "CU" },
      { name: "Cyprus", code: "CY" },
      { name: "Czech Republic", code: "CZ" },
      { name: "Denmark", code: "DK" },
      { name: "Djibouti", code: "DJ" },
      { name: "Dominica", code: "DM" },
      { name: "Dominican Republic", code: "DO" },
      { name: "Ecuador", code: "EC" },
      { name: "Egypt", code: "EG" },
      { name: "El Salvador", code: "SV" },
      { name: "Equatorial Guinea", code: "GQ" },
      { name: "Eritrea", code: "ER" },
      { name: "Estonia", code: "EE" },
      { name: "Ethiopia", code: "ET" },
      { name: "Falkland Islands (Malvinas)", code: "FK" },
      { name: "Faroe Islands", code: "FO" },
      { name: "Fiji", code: "FJ" },
      { name: "Finland", code: "FI" },
      { name: "France", code: "FR" },
      { name: "French Guiana", code: "GF" },
      { name: "French Polynesia", code: "PF" },
      { name: "French Southern Territories", code: "TF" },
      { name: "Gabon", code: "GA" },
      { name: "Gambia", code: "GM" },
      { name: "Georgia", code: "GE" },
      { name: "Germany", code: "DE" },
      { name: "Ghana", code: "GH" },
      { name: "Gibraltar", code: "GI" },
      { name: "Greece", code: "GR" },
      { name: "Greenland", code: "GL" },
      { name: "Grenada", code: "GD" },
      { name: "Guadeloupe", code: "GP" },
      { name: "Guam", code: "GU" },
      { name: "Guatemala", code: "GT" },
      { name: "Guernsey", code: "GG" },
      { name: "Guinea", code: "GN" },
      { name: "Guinea-Bissau", code: "GW" },
      { name: "Guyana", code: "GY" },
      { name: "Haiti", code: "HT" },
      { name: "Heard Island and Mcdonald Islands", code: "HM" },
      { name: "Holy See (Vatican City State)", code: "VA" },
      { name: "Honduras", code: "HN" },
      { name: "Hong Kong", code: "HK" },
      { name: "Hungary", code: "HU" },
      { name: "Iceland", code: "IS" },
      { name: "India", code: "IN" },
      { name: "Indonesia", code: "ID" },
      { name: "Iran, Islamic Republic Of", code: "IR" },
      { name: "Iraq", code: "IQ" },
      { name: "Ireland", code: "IE" },
      { name: "Isle of Man", code: "IM" },
      { name: "Israel", code: "IL" },
      { name: "Italy", code: "IT" },
      { name: "Jamaica", code: "JM" },
      { name: "Japan", code: "JP" },
      { name: "Jersey", code: "JE" },
      { name: "Jordan", code: "JO" },
      { name: "Kazakhstan", code: "KZ" },
      { name: "Kenya", code: "KE" },
      { name: "Kiribati", code: "KI" },
      { name: 'Korea, Democratic People"S Republic of', code: "KP" },
      { name: "Korea, Republic of", code: "KR" },
      { name: "Kuwait", code: "KW" },
      { name: "Kyrgyzstan", code: "KG" },
      { name: 'Lao People"S Democratic Republic', code: "LA" },
      { name: "Latvia", code: "LV" },
      { name: "Lebanon", code: "LB" },
      { name: "Lesotho", code: "LS" },
      { name: "Liberia", code: "LR" },
      { name: "Libyan Arab Jamahiriya", code: "LY" },
      { name: "Liechtenstein", code: "LI" },
      { name: "Lithuania", code: "LT" },
      { name: "Luxembourg", code: "LU" },
      { name: "Macao", code: "MO" },
      { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
      { name: "Madagascar", code: "MG" },
      { name: "Malawi", code: "MW" },
      { name: "Malaysia", code: "MY" },
      { name: "Maldives", code: "MV" },
      { name: "Mali", code: "ML" },
      { name: "Malta", code: "MT" },
      { name: "Marshall Islands", code: "MH" },
      { name: "Martinique", code: "MQ" },
      { name: "Mauritania", code: "MR" },
      { name: "Mauritius", code: "MU" },
      { name: "Mayotte", code: "YT" },
      { name: "Mexico", code: "MX" },
      { name: "Micronesia, Federated States of", code: "FM" },
      { name: "Moldova, Republic of", code: "MD" },
      { name: "Monaco", code: "MC" },
      { name: "Mongolia", code: "MN" },
      { name: "Montserrat", code: "MS" },
      { name: "Morocco", code: "MA" },
      { name: "Mozambique", code: "MZ" },
      { name: "Myanmar", code: "MM" },
      { name: "Namibia", code: "NA" },
      { name: "Nauru", code: "NR" },
      { name: "Nepal", code: "NP" },
      { name: "Netherlands", code: "NL" },
      { name: "Netherlands Antilles", code: "AN" },
      { name: "New Caledonia", code: "NC" },
      { name: "New Zealand", code: "NZ" },
      { name: "Nicaragua", code: "NI" },
      { name: "Niger", code: "NE" },
      { name: "Nigeria", code: "NG" },
      { name: "Niue", code: "NU" },
      { name: "Norfolk Island", code: "NF" },
      { name: "Northern Mariana Islands", code: "MP" },
      { name: "Norway", code: "NO" },
      { name: "Oman", code: "OM" },
      { name: "Pakistan", code: "PK" },
      { name: "Palau", code: "PW" },
      { name: "Palestinian Territory, Occupied", code: "PS" },
      { name: "Panama", code: "PA" },
      { name: "Papua New Guinea", code: "PG" },
      { name: "Paraguay", code: "PY" },
      { name: "Peru", code: "PE" },
      { name: "Philippines", code: "PH" },
      { name: "Pitcairn", code: "PN" },
      { name: "Poland", code: "PL" },
      { name: "Portugal", code: "PT" },
      { name: "Puerto Rico", code: "PR" },
      { name: "Qatar", code: "QA" },
      { name: "Reunion", code: "RE" },
      { name: "Romania", code: "RO" },
      { name: "Russian Federation", code: "RU" },
      { name: "RWANDA", code: "RW" },
      { name: "Saint Helena", code: "SH" },
      { name: "Saint Kitts and Nevis", code: "KN" },
      { name: "Saint Lucia", code: "LC" },
      { name: "Saint Pierre and Miquelon", code: "PM" },
      { name: "Saint Vincent and the Grenadines", code: "VC" },
      { name: "Samoa", code: "WS" },
      { name: "San Marino", code: "SM" },
      { name: "Sao Tome and Principe", code: "ST" },
      { name: "Saudi Arabia", code: "SA" },
      { name: "Senegal", code: "SN" },
      { name: "Serbia and Montenegro", code: "CS" },
      { name: "Seychelles", code: "SC" },
      { name: "Sierra Leone", code: "SL" },
      { name: "Singapore", code: "SG" },
      { name: "Slovakia", code: "SK" },
      { name: "Slovenia", code: "SI" },
      { name: "Solomon Islands", code: "SB" },
      { name: "Somalia", code: "SO" },
      { name: "South Africa", code: "ZA" },
      { name: "South Georgia and the South Sandwich Islands", code: "GS" },
      { name: "Spain", code: "ES" },
      { name: "Sri Lanka", code: "LK" },
      { name: "Sudan", code: "SD" },
      { name: "Suriname", code: "SR" },
      { name: "Svalbard and Jan Mayen", code: "SJ" },
      { name: "Swaziland", code: "SZ" },
      { name: "Sweden", code: "SE" },
      { name: "Switzerland", code: "CH" },
      { name: "Syrian Arab Republic", code: "SY" },
      { name: "Taiwan, Province of China", code: "TW" },
      { name: "Tajikistan", code: "TJ" },
      { name: "Tanzania, United Republic of", code: "TZ" },
      { name: "Thailand", code: "TH" },
      { name: "Timor-Leste", code: "TL" },
      { name: "Togo", code: "TG" },
      { name: "Tokelau", code: "TK" },
      { name: "Tonga", code: "TO" },
      { name: "Trinidad and Tobago", code: "TT" },
      { name: "Tunisia", code: "TN" },
      { name: "Turkey", code: "TR" },
      { name: "Turkmenistan", code: "TM" },
      { name: "Turks and Caicos Islands", code: "TC" },
      { name: "Tuvalu", code: "TV" },
      { name: "Uganda", code: "UG" },
      { name: "Ukraine", code: "UA" },
      { name: "United Arab Emirates", code: "AE" },
      { name: "United Kingdom", code: "GB" },
      { name: "United States", code: "US" },
      { name: "United States Minor Outlying Islands", code: "UM" },
      { name: "Uruguay", code: "UY" },
      { name: "Uzbekistan", code: "UZ" },
      { name: "Vanuatu", code: "VU" },
      { name: "Venezuela", code: "VE" },
      { name: "Viet Nam", code: "VN" },
      { name: "Virgin Islands, British", code: "VG" },
      { name: "Virgin Islands, U.S.", code: "VI" },
      { name: "Wallis and Futuna", code: "WF" },
      { name: "Western Sahara", code: "EH" },
      { name: "Yemen", code: "YE" },
      { name: "Zambia", code: "ZM" },
      { name: "Zimbabwe", code: "ZW" }
    ];
  },
  getCountries() {
    return Promise.resolve(this.getData());
  }
}, Ro = { class: "md:w-1/2" }, Eo = { class: "card flex flex-col gap-4" }, Ao = { class: "flex flex-col md:flex-row gap-4" }, Po = { class: "card flex flex-col gap-4" }, Ho = { class: "flex flex-row mt-6" }, $o = { class: "flex flex-col gap-4 w-1/2" }, Fo = { class: "flex flex-col gap-4 w-1/2" }, zo = { class: "md:w-1/2" }, No = { class: "card flex flex-col gap-4" }, Uo = { class: "flex flex-col md:flex-row gap-4" }, Go = { class: "flex items-center" }, jo = { class: "flex items-center" }, Yo = { class: "flex items-center" }, Xo = { class: "flex flex-col md:flex-row gap-4" }, Wo = { class: "flex items-center" }, Zo = { class: "flex items-center" }, Jo = { class: "flex items-center" }, qo = { class: "card flex flex-col gap-4" }, Qo = {
  key: 0,
  class: "p-1"
}, _o = { class: "flex items-center" }, ei = { class: "card flex flex-col gap-4" }, ti = { class: "card flex flex-col gap-4 w-full" }, ni = { class: "flex flex-col md:flex-row gap-4" }, oi = { class: "flex flex-col md:flex-row gap-4" }, Si = {
  __name: "InputDoc",
  setup(t) {
    const e = y(null), n = y(null), i = y(null), l = y([]), o = y(null), h = y(null), c = y(50), b = y(null), p = y("#1976D2"), L = y(null), E = y([]), Q = y(!1), S = y([
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ]), w = y(null), z = y([
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ]), x = y(null), M = y([
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Spain", code: "ES" },
      { name: "United States", code: "US" }
    ]), _ = y(null), H = y(!1), O = y(null), I = y([{ name: "Option 1" }, { name: "Option 2" }, { name: "Option 3" }]), ee = y(50), N = y(!1), Ie = y(null), Ce = y(null);
    Et(() => {
      Ko.getCountries().then(($) => n.value = $), Ht.getTreeNodes().then(($) => Ie.value = $);
    });
    function at($) {
      setTimeout(() => {
        $.query.trim().length ? l.value = n.value.filter((a) => a.name.toLowerCase().startsWith($.query.toLowerCase())) : l.value = [...n.value];
      }, 250);
    }
    return ($, a) => {
      const D = Je, xe = Qt, Le = qt, rt = lt, st = Jt, dt = it, ut = $t, Me = Wt, ct = Ft, pt = Xt, ft = ot, ht = nt, re = Yt, te = jt, mt = tt, bt = Gt, gt = Ut, vt = zt, yt = et, wt = Vt, kt = Tt, Ve = At, U = Qe, ne = qe, Ot = St;
      return f(), m(K, null, [
        s(Ve, { class: "flex flex-col md:flex-row gap-8" }, {
          default: g(() => [
            r("div", Ro, [
              r("div", Eo, [
                a[25] || (a[25] = r("div", { class: "font-semibold text-xl" }, "InputText", -1)),
                r("div", Ao, [
                  s(D, {
                    type: "text",
                    placeholder: "Default"
                  }),
                  s(D, {
                    type: "text",
                    placeholder: "Disabled",
                    disabled: !0
                  }),
                  s(D, {
                    type: "text",
                    placeholder: "Invalid",
                    invalid: ""
                  })
                ]),
                a[26] || (a[26] = r("div", { class: "font-semibold text-xl" }, "Icons", -1)),
                s(Le, null, {
                  default: g(() => [
                    s(xe, { class: "pi pi-user" }),
                    s(D, {
                      type: "text",
                      placeholder: "Username"
                    })
                  ]),
                  _: 1
                }),
                s(Le, { iconPosition: "left" }, {
                  default: g(() => [
                    s(D, {
                      type: "text",
                      placeholder: "Search"
                    }),
                    s(xe, { class: "pi pi-search" })
                  ]),
                  _: 1
                }),
                a[27] || (a[27] = r("div", { class: "font-semibold text-xl" }, "Float Label", -1)),
                s(rt, null, {
                  default: g(() => [
                    s(D, {
                      id: "username",
                      type: "text",
                      modelValue: e.value,
                      "onUpdate:modelValue": a[0] || (a[0] = (u) => e.value = u)
                    }, null, 8, ["modelValue"]),
                    a[24] || (a[24] = r("label", { for: "username" }, "Username", -1))
                  ]),
                  _: 1
                }),
                a[28] || (a[28] = r("div", { class: "font-semibold text-xl" }, "Textarea", -1)),
                s(st, {
                  placeholder: "Your Message",
                  autoResize: !0,
                  rows: "3",
                  cols: "30"
                }),
                a[29] || (a[29] = r("div", { class: "font-semibold text-xl" }, "AutoComplete", -1)),
                s(dt, {
                  modelValue: i.value,
                  "onUpdate:modelValue": a[1] || (a[1] = (u) => i.value = u),
                  suggestions: l.value,
                  optionLabel: "name",
                  placeholder: "Search",
                  dropdown: "",
                  multiple: "",
                  display: "chip",
                  onComplete: a[2] || (a[2] = (u) => at(u))
                }, null, 8, ["modelValue", "suggestions"]),
                a[30] || (a[30] = r("div", { class: "font-semibold text-xl" }, "DatePicker", -1)),
                s(ut, {
                  showIcon: !0,
                  showButtonBar: !0,
                  modelValue: o.value,
                  "onUpdate:modelValue": a[3] || (a[3] = (u) => o.value = u)
                }, null, 8, ["modelValue"]),
                a[31] || (a[31] = r("div", { class: "font-semibold text-xl" }, "InputNumber", -1)),
                s(Me, {
                  modelValue: h.value,
                  "onUpdate:modelValue": a[4] || (a[4] = (u) => h.value = u),
                  showButtons: "",
                  mode: "decimal"
                }, null, 8, ["modelValue"])
              ]),
              r("div", Po, [
                a[34] || (a[34] = r("div", { class: "font-semibold text-xl" }, "Slider", -1)),
                s(D, {
                  modelValue: c.value,
                  "onUpdate:modelValue": a[5] || (a[5] = (u) => c.value = u),
                  modelModifiers: { number: !0 }
                }, null, 8, ["modelValue"]),
                s(ct, {
                  modelValue: c.value,
                  "onUpdate:modelValue": a[6] || (a[6] = (u) => c.value = u)
                }, null, 8, ["modelValue"]),
                r("div", Ho, [
                  r("div", $o, [
                    a[32] || (a[32] = r("div", { class: "font-semibold text-xl" }, "Rating", -1)),
                    s(pt, {
                      modelValue: b.value,
                      "onUpdate:modelValue": a[7] || (a[7] = (u) => b.value = u)
                    }, null, 8, ["modelValue"])
                  ]),
                  r("div", Fo, [
                    a[33] || (a[33] = r("div", { class: "font-semibold text-xl" }, "ColorPicker", -1)),
                    s(ft, {
                      style: { width: "2rem" },
                      modelValue: p.value,
                      "onUpdate:modelValue": a[8] || (a[8] = (u) => p.value = u)
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                a[35] || (a[35] = r("div", { class: "font-semibold text-xl" }, "Knob", -1)),
                s(ht, {
                  modelValue: ee.value,
                  "onUpdate:modelValue": a[9] || (a[9] = (u) => ee.value = u),
                  step: 10,
                  min: -50,
                  max: 50,
                  valueTemplate: "{value}%"
                }, null, 8, ["modelValue"])
              ])
            ]),
            r("div", zo, [
              r("div", No, [
                a[42] || (a[42] = r("div", { class: "font-semibold text-xl" }, "RadioButton", -1)),
                r("div", Uo, [
                  r("div", Go, [
                    s(re, {
                      id: "option1",
                      name: "option",
                      value: "Chicago",
                      modelValue: L.value,
                      "onUpdate:modelValue": a[10] || (a[10] = (u) => L.value = u)
                    }, null, 8, ["modelValue"]),
                    a[36] || (a[36] = r("label", {
                      for: "option1",
                      class: "leading-none ml-2"
                    }, "Chicago", -1))
                  ]),
                  r("div", jo, [
                    s(re, {
                      id: "option2",
                      name: "option",
                      value: "Los Angeles",
                      modelValue: L.value,
                      "onUpdate:modelValue": a[11] || (a[11] = (u) => L.value = u)
                    }, null, 8, ["modelValue"]),
                    a[37] || (a[37] = r("label", {
                      for: "option2",
                      class: "leading-none ml-2"
                    }, "Los Angeles", -1))
                  ]),
                  r("div", Yo, [
                    s(re, {
                      id: "option3",
                      name: "option",
                      value: "New York",
                      modelValue: L.value,
                      "onUpdate:modelValue": a[12] || (a[12] = (u) => L.value = u)
                    }, null, 8, ["modelValue"]),
                    a[38] || (a[38] = r("label", {
                      for: "option3",
                      class: "leading-none ml-2"
                    }, "New York", -1))
                  ])
                ]),
                a[43] || (a[43] = r("div", { class: "font-semibold text-xl" }, "Checkbox", -1)),
                r("div", Xo, [
                  r("div", Wo, [
                    s(te, {
                      id: "checkOption1",
                      name: "option",
                      value: "Chicago",
                      modelValue: E.value,
                      "onUpdate:modelValue": a[13] || (a[13] = (u) => E.value = u)
                    }, null, 8, ["modelValue"]),
                    a[39] || (a[39] = r("label", {
                      for: "checkOption1",
                      class: "ml-2"
                    }, "Chicago", -1))
                  ]),
                  r("div", Zo, [
                    s(te, {
                      id: "checkOption2",
                      name: "option",
                      value: "Los Angeles",
                      modelValue: E.value,
                      "onUpdate:modelValue": a[14] || (a[14] = (u) => E.value = u)
                    }, null, 8, ["modelValue"]),
                    a[40] || (a[40] = r("label", {
                      for: "checkOption2",
                      class: "ml-2"
                    }, "Los Angeles", -1))
                  ]),
                  r("div", Jo, [
                    s(te, {
                      id: "checkOption3",
                      name: "option",
                      value: "New York",
                      modelValue: E.value,
                      "onUpdate:modelValue": a[15] || (a[15] = (u) => E.value = u)
                    }, null, 8, ["modelValue"]),
                    a[41] || (a[41] = r("label", {
                      for: "checkOption3",
                      class: "ml-2"
                    }, "New York", -1))
                  ])
                ]),
                a[44] || (a[44] = r("div", { class: "font-semibold text-xl" }, "ToggleSwitch", -1)),
                s(mt, {
                  modelValue: Q.value,
                  "onUpdate:modelValue": a[16] || (a[16] = (u) => Q.value = u)
                }, null, 8, ["modelValue"])
              ]),
              r("div", qo, [
                a[45] || (a[45] = r("div", { class: "font-semibold text-xl" }, "Listbox", -1)),
                s(bt, {
                  modelValue: w.value,
                  "onUpdate:modelValue": a[17] || (a[17] = (u) => w.value = u),
                  options: S.value,
                  optionLabel: "name",
                  filter: !0
                }, null, 8, ["modelValue", "options"]),
                a[46] || (a[46] = r("div", { class: "font-semibold text-xl" }, "Select", -1)),
                s(gt, {
                  modelValue: x.value,
                  "onUpdate:modelValue": a[18] || (a[18] = (u) => x.value = u),
                  options: z.value,
                  optionLabel: "name",
                  placeholder: "Select"
                }, null, 8, ["modelValue", "options"]),
                a[47] || (a[47] = r("div", { class: "font-semibold text-xl" }, "MultiSelect", -1)),
                s(vt, {
                  modelValue: _.value,
                  "onUpdate:modelValue": a[19] || (a[19] = (u) => _.value = u),
                  options: M.value,
                  optionLabel: "name",
                  placeholder: "Select Countries",
                  filter: !0
                }, {
                  value: g((u) => [
                    (f(!0), m(K, null, ae(u.value, (se) => (f(), m("div", {
                      class: "inline-flex items-center py-1 px-2 bg-primary text-primary-contrast rounded-border mr-2",
                      key: se.code
                    }, [
                      r("span", {
                        class: C("mr-2 flag flag-" + se.code.toLowerCase()),
                        style: { width: "18px", height: "12px" }
                      }, null, 2),
                      r("div", null, T(se.name), 1)
                    ]))), 128)),
                    !u.value || u.value.length === 0 ? (f(), m("div", Qo, "Select Countries")) : k("", !0)
                  ]),
                  option: g((u) => [
                    r("div", _o, [
                      r("span", {
                        class: C("mr-2 flag flag-" + u.option.code.toLowerCase()),
                        style: { width: "18px", height: "12px" }
                      }, null, 2),
                      r("div", null, T(u.option.name), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "options"]),
                a[48] || (a[48] = r("div", { class: "font-semibold text-xl" }, "TreeSelect", -1)),
                s(yt, {
                  modelValue: Ce.value,
                  "onUpdate:modelValue": a[20] || (a[20] = (u) => Ce.value = u),
                  options: Ie.value,
                  placeholder: "Select Item"
                }, null, 8, ["modelValue", "options"])
              ]),
              r("div", ei, [
                a[49] || (a[49] = r("div", { class: "font-semibold text-xl" }, "ToggleButton", -1)),
                s(wt, {
                  modelValue: H.value,
                  "onUpdate:modelValue": a[21] || (a[21] = (u) => H.value = u),
                  onLabel: "Yes",
                  offLabel: "No",
                  style: { width: "10em" }
                }, null, 8, ["modelValue"]),
                a[50] || (a[50] = r("div", { class: "font-semibold text-xl" }, "SelectButton", -1)),
                s(kt, {
                  modelValue: O.value,
                  "onUpdate:modelValue": a[22] || (a[22] = (u) => O.value = u),
                  options: I.value,
                  optionLabel: "name"
                }, null, 8, ["modelValue", "options"])
              ])
            ])
          ]),
          _: 1
        }),
        s(Ve, { class: "flex mt-8" }, {
          default: g(() => [
            r("div", ti, [
              a[56] || (a[56] = r("div", { class: "font-semibold text-xl" }, "InputGroup", -1)),
              r("div", ni, [
                s(ne, null, {
                  default: g(() => [
                    s(U, null, {
                      default: g(() => [...a[51] || (a[51] = [
                        r("i", { class: "pi pi-user" }, null, -1)
                      ])]),
                      _: 1
                    }),
                    s(D, { placeholder: "Username" })
                  ]),
                  _: 1
                }),
                s(ne, null, {
                  default: g(() => [
                    s(U, null, {
                      default: g(() => [...a[52] || (a[52] = [
                        r("i", { class: "pi pi-clock" }, null, -1)
                      ])]),
                      _: 1
                    }),
                    s(U, null, {
                      default: g(() => [...a[53] || (a[53] = [
                        r("i", { class: "pi pi-star-fill" }, null, -1)
                      ])]),
                      _: 1
                    }),
                    s(Me, { placeholder: "Price" }),
                    s(U, null, {
                      default: g(() => [...a[54] || (a[54] = [
                        A("$", -1)
                      ])]),
                      _: 1
                    }),
                    s(U, null, {
                      default: g(() => [...a[55] || (a[55] = [
                        A(".00", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              r("div", oi, [
                s(ne, null, {
                  default: g(() => [
                    s(Ot, { label: "Search" }),
                    s(D, { placeholder: "Keyword" })
                  ]),
                  _: 1
                }),
                s(ne, null, {
                  default: g(() => [
                    s(U, null, {
                      default: g(() => [
                        s(te, {
                          modelValue: N.value,
                          "onUpdate:modelValue": a[23] || (a[23] = (u) => N.value = u),
                          binary: !0
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    s(D, { placeholder: "Confirm" })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
export {
  Si as default
};
