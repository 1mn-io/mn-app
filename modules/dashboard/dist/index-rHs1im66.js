import { w as ve, B as ye, s as ze, z as Oe, as as ne, a3 as q, a4 as Z, o as Fe, a as Ve, b as Me, R as Te, i as ee, c as te, q as Pe, M as he, k as Ae, d as Be, e as x, Y as Ke, I as Ee, v as xe, D as De, x as le, S as He, L as Re, g as je, at as Ge, J as Ne, p as G } from "./main-DmGEeWOh.js";
import { C as We, O as Ue } from "./index-D4csMdAS.js";
import { V as v, H as p, W as V, m as c, E as A, I, J as K, F as U, a2 as re, a as R, X as $e, ag as oe, Z as D, G as N, Y as pe, p as ie, a0 as W, ad as qe, _ as Ze, ae as Ye, $ as Je, ah as Xe } from "./runtime-dom.esm-bundler-CEAeiVlj.js";
import { s as Qe } from "./index-DFnj3uPo.js";
import { s as Ie } from "./index-4IqxQNQ3.js";
import { s as _e, a as et } from "./index-BX8nGF6u.js";
import { s as tt, a as it } from "./index-PGJZDOlW.js";
var Se = {
  name: "BlankIcon",
  extends: ve
};
function nt(t) {
  return rt(t) || ot(t) || lt(t) || st();
}
function st() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lt(t, e) {
  if (t) {
    if (typeof t == "string") return ae(t, e);
    var i = {}.toString.call(t).slice(8, -1);
    return i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set" ? Array.from(t) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ae(t, e) : void 0;
  }
}
function ot(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function rt(t) {
  if (Array.isArray(t)) return ae(t);
}
function ae(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var i = 0, s = Array(e); i < e; i++) s[i] = t[i];
  return s;
}
function at(t, e, i, s, l, n) {
  return p(), v("svg", c({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), nt(e[0] || (e[0] = [V("rect", {
    width: "1",
    height: "1",
    fill: "currentColor",
    "fill-opacity": "0"
  }, null, -1)])), 16);
}
Se.render = at;
var we = {
  name: "SearchIcon",
  extends: ve
};
function dt(t) {
  return pt(t) || ht(t) || ct(t) || ut();
}
function ut() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ct(t, e) {
  if (t) {
    if (typeof t == "string") return de(t, e);
    var i = {}.toString.call(t).slice(8, -1);
    return i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set" ? Array.from(t) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? de(t, e) : void 0;
  }
}
function ht(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function pt(t) {
  if (Array.isArray(t)) return de(t);
}
function de(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var i = 0, s = Array(e); i < e; i++) s[i] = t[i];
  return s;
}
function ft(t, e, i, s, l, n) {
  return p(), v("svg", c({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), dt(e[0] || (e[0] = [V("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
we.render = ft;
var mt = `
    .p-virtualscroller-loader {
        background: dt('virtualscroller.loader.mask.background');
        color: dt('virtualscroller.loader.mask.color');
    }

    .p-virtualscroller-loading-icon {
        font-size: dt('virtualscroller.loader.icon.size');
        width: dt('virtualscroller.loader.icon.size');
        height: dt('virtualscroller.loader.icon.size');
    }
`, gt = `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}

.p-virtualscroller .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    inset-block-start: 0;
    inset-inline-start: 0;
}
`, fe = ye.extend({
  name: "virtualscroller",
  css: gt,
  style: mt
}), bt = {
  name: "BaseVirtualScroller",
  extends: ze,
  props: {
    id: {
      type: String,
      default: null
    },
    style: null,
    class: null,
    items: {
      type: Array,
      default: null
    },
    itemSize: {
      type: [Number, Array],
      default: 0
    },
    scrollHeight: null,
    scrollWidth: null,
    orientation: {
      type: String,
      default: "vertical"
    },
    numToleratedItems: {
      type: Number,
      default: null
    },
    delay: {
      type: Number,
      default: 0
    },
    resizeDelay: {
      type: Number,
      default: 10
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loaderDisabled: {
      type: Boolean,
      default: !1
    },
    columns: {
      type: Array,
      default: null
    },
    loading: {
      type: Boolean,
      default: !1
    },
    showSpacer: {
      type: Boolean,
      default: !0
    },
    showLoader: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: 0
    },
    inline: {
      type: Boolean,
      default: !1
    },
    step: {
      type: Number,
      default: 0
    },
    appendOnly: {
      type: Boolean,
      default: !1
    },
    autoSize: {
      type: Boolean,
      default: !1
    }
  },
  style: fe,
  provide: function() {
    return {
      $pcVirtualScroller: this,
      $parentInstance: this
    };
  },
  beforeMount: function() {
    var e;
    fe.loadCSS({
      nonce: (e = this.$primevueConfig) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce
    });
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
function me(t, e) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function Y(t) {
  for (var e = 1; e < arguments.length; e++) {
    var i = arguments[e] != null ? arguments[e] : {};
    e % 2 ? me(Object(i), !0).forEach(function(s) {
      Le(t, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : me(Object(i)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return t;
}
function Le(t, e, i) {
  return (e = vt(e)) in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t;
}
function vt(t) {
  var e = yt(t, "string");
  return J(e) == "symbol" ? e : e + "";
}
function yt(t, e) {
  if (J(t) != "object" || !t) return t;
  var i = t[Symbol.toPrimitive];
  if (i !== void 0) {
    var s = i.call(t, e);
    if (J(s) != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Ce = {
  name: "VirtualScroller",
  extends: bt,
  inheritAttrs: !1,
  emits: ["update:numToleratedItems", "scroll", "scroll-index-change", "lazy-load"],
  data: function() {
    var e = this.isBoth();
    return {
      first: e ? {
        rows: 0,
        cols: 0
      } : 0,
      last: e ? {
        rows: 0,
        cols: 0
      } : 0,
      page: e ? {
        rows: 0,
        cols: 0
      } : 0,
      numItemsInViewport: e ? {
        rows: 0,
        cols: 0
      } : 0,
      lastScrollPos: e ? {
        top: 0,
        left: 0
      } : 0,
      d_numToleratedItems: this.numToleratedItems,
      d_loading: this.loading,
      loaderArr: [],
      spacerStyle: {},
      contentStyle: {}
    };
  },
  element: null,
  content: null,
  lastScrollPos: null,
  scrollTimeout: null,
  resizeTimeout: null,
  defaultWidth: 0,
  defaultHeight: 0,
  defaultContentWidth: 0,
  defaultContentHeight: 0,
  isRangeChanged: !1,
  lazyLoadState: {},
  resizeListener: null,
  resizeObserver: null,
  initialized: !1,
  watch: {
    numToleratedItems: function(e) {
      this.d_numToleratedItems = e;
    },
    loading: function(e, i) {
      this.lazy && e !== i && e !== this.d_loading && (this.d_loading = e);
    },
    items: {
      handler: function(e, i) {
        (!i || i.length !== (e || []).length) && (this.init(), this.calculateAutoSize());
      },
      deep: !0
    },
    itemSize: function() {
      this.init(), this.calculateAutoSize();
    },
    orientation: function() {
      this.lastScrollPos = this.isBoth() ? {
        top: 0,
        left: 0
      } : 0;
    },
    scrollHeight: function() {
      this.init(), this.calculateAutoSize();
    },
    scrollWidth: function() {
      this.init(), this.calculateAutoSize();
    }
  },
  mounted: function() {
    this.viewInit(), this.lastScrollPos = this.isBoth() ? {
      top: 0,
      left: 0
    } : 0, this.lazyLoadState = this.lazyLoadState || {};
  },
  updated: function() {
    !this.initialized && this.viewInit();
  },
  unmounted: function() {
    this.unbindResizeListener(), this.initialized = !1;
  },
  methods: {
    viewInit: function() {
      ne(this.element) && (this.setContentEl(this.content), this.init(), this.calculateAutoSize(), this.defaultWidth = q(this.element), this.defaultHeight = Z(this.element), this.defaultContentWidth = q(this.content), this.defaultContentHeight = Z(this.content), this.initialized = !0), this.element && this.bindResizeListener();
    },
    init: function() {
      this.disabled || (this.setSize(), this.calculateOptions(), this.setSpacerSize());
    },
    isVertical: function() {
      return this.orientation === "vertical";
    },
    isHorizontal: function() {
      return this.orientation === "horizontal";
    },
    isBoth: function() {
      return this.orientation === "both";
    },
    scrollTo: function(e) {
      this.element && this.element.scrollTo(e);
    },
    scrollToIndex: function(e) {
      var i = this, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto", l = this.isBoth(), n = this.isHorizontal(), o = l ? e.every(function(m) {
        return m > -1;
      }) : e > -1;
      if (o) {
        var a = this.first, d = this.element, u = d.scrollTop, r = u === void 0 ? 0 : u, h = d.scrollLeft, y = h === void 0 ? 0 : h, L = this.calculateNumItems(), O = L.numToleratedItems, w = this.getContentPosition(), g = this.itemSize, C = function() {
          var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, B = arguments.length > 1 ? arguments[1] : void 0;
          return b <= B ? 0 : b;
        }, k = function(b, B, T) {
          return b * B + T;
        }, z = function() {
          var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return i.scrollTo({
            left: b,
            top: B,
            behavior: s
          });
        }, f = l ? {
          rows: 0,
          cols: 0
        } : 0, E = !1, F = !1;
        l ? (f = {
          rows: C(e[0], O[0]),
          cols: C(e[1], O[1])
        }, z(k(f.cols, g[1], w.left), k(f.rows, g[0], w.top)), F = this.lastScrollPos.top !== r || this.lastScrollPos.left !== y, E = f.rows !== a.rows || f.cols !== a.cols) : (f = C(e, O), n ? z(k(f, g, w.left), r) : z(y, k(f, g, w.top)), F = this.lastScrollPos !== (n ? y : r), E = f !== a), this.isRangeChanged = E, F && (this.first = f);
      }
    },
    scrollInView: function(e, i) {
      var s = this, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
      if (i) {
        var n = this.isBoth(), o = this.isHorizontal(), a = n ? e.every(function(g) {
          return g > -1;
        }) : e > -1;
        if (a) {
          var d = this.getRenderedRange(), u = d.first, r = d.viewport, h = function() {
            var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return s.scrollTo({
              left: C,
              top: k,
              behavior: l
            });
          }, y = i === "to-start", L = i === "to-end";
          if (y) {
            if (n)
              r.first.rows - u.rows > e[0] ? h(r.first.cols * this.itemSize[1], (r.first.rows - 1) * this.itemSize[0]) : r.first.cols - u.cols > e[1] && h((r.first.cols - 1) * this.itemSize[1], r.first.rows * this.itemSize[0]);
            else if (r.first - u > e) {
              var O = (r.first - 1) * this.itemSize;
              o ? h(O, 0) : h(0, O);
            }
          } else if (L) {
            if (n)
              r.last.rows - u.rows <= e[0] + 1 ? h(r.first.cols * this.itemSize[1], (r.first.rows + 1) * this.itemSize[0]) : r.last.cols - u.cols <= e[1] + 1 && h((r.first.cols + 1) * this.itemSize[1], r.first.rows * this.itemSize[0]);
            else if (r.last - u <= e + 1) {
              var w = (r.first + 1) * this.itemSize;
              o ? h(w, 0) : h(0, w);
            }
          }
        }
      } else
        this.scrollToIndex(e, l);
    },
    getRenderedRange: function() {
      var e = function(h, y) {
        return Math.floor(h / (y || h));
      }, i = this.first, s = 0;
      if (this.element) {
        var l = this.isBoth(), n = this.isHorizontal(), o = this.element, a = o.scrollTop, d = o.scrollLeft;
        if (l)
          i = {
            rows: e(a, this.itemSize[0]),
            cols: e(d, this.itemSize[1])
          }, s = {
            rows: i.rows + this.numItemsInViewport.rows,
            cols: i.cols + this.numItemsInViewport.cols
          };
        else {
          var u = n ? d : a;
          i = e(u, this.itemSize), s = i + this.numItemsInViewport;
        }
      }
      return {
        first: this.first,
        last: this.last,
        viewport: {
          first: i,
          last: s
        }
      };
    },
    calculateNumItems: function() {
      var e = this.isBoth(), i = this.isHorizontal(), s = this.itemSize, l = this.getContentPosition(), n = this.element ? this.element.offsetWidth - l.left : 0, o = this.element ? this.element.offsetHeight - l.top : 0, a = function(y, L) {
        return Math.ceil(y / (L || y));
      }, d = function(y) {
        return Math.ceil(y / 2);
      }, u = e ? {
        rows: a(o, s[0]),
        cols: a(n, s[1])
      } : a(i ? n : o, s), r = this.d_numToleratedItems || (e ? [d(u.rows), d(u.cols)] : d(u));
      return {
        numItemsInViewport: u,
        numToleratedItems: r
      };
    },
    calculateOptions: function() {
      var e = this, i = this.isBoth(), s = this.first, l = this.calculateNumItems(), n = l.numItemsInViewport, o = l.numToleratedItems, a = function(r, h, y) {
        var L = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
        return e.getLast(r + h + (r < y ? 2 : 3) * y, L);
      }, d = i ? {
        rows: a(s.rows, n.rows, o[0]),
        cols: a(s.cols, n.cols, o[1], !0)
      } : a(s, n, o);
      this.last = d, this.numItemsInViewport = n, this.d_numToleratedItems = o, this.$emit("update:numToleratedItems", this.d_numToleratedItems), this.showLoader && (this.loaderArr = i ? Array.from({
        length: n.rows
      }).map(function() {
        return Array.from({
          length: n.cols
        });
      }) : Array.from({
        length: n
      })), this.lazy && Promise.resolve().then(function() {
        var u;
        e.lazyLoadState = {
          first: e.step ? i ? {
            rows: 0,
            cols: s.cols
          } : 0 : s,
          last: Math.min(e.step ? e.step : d, ((u = e.items) === null || u === void 0 ? void 0 : u.length) || 0)
        }, e.$emit("lazy-load", e.lazyLoadState);
      });
    },
    calculateAutoSize: function() {
      var e = this;
      this.autoSize && !this.d_loading && Promise.resolve().then(function() {
        if (e.content) {
          var i = e.isBoth(), s = e.isHorizontal(), l = e.isVertical();
          e.content.style.minHeight = e.content.style.minWidth = "auto", e.content.style.position = "relative", e.element.style.contain = "none";
          var n = [q(e.element), Z(e.element)], o = n[0], a = n[1];
          (i || s) && (e.element.style.width = o < e.defaultWidth ? o + "px" : e.scrollWidth || e.defaultWidth + "px"), (i || l) && (e.element.style.height = a < e.defaultHeight ? a + "px" : e.scrollHeight || e.defaultHeight + "px"), e.content.style.minHeight = e.content.style.minWidth = "", e.content.style.position = "", e.element.style.contain = "";
        }
      });
    },
    getLast: function() {
      var e, i, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, l = arguments.length > 1 ? arguments[1] : void 0;
      return this.items ? Math.min(l ? ((e = this.columns || this.items[0]) === null || e === void 0 ? void 0 : e.length) || 0 : ((i = this.items) === null || i === void 0 ? void 0 : i.length) || 0, s) : 0;
    },
    getContentPosition: function() {
      if (this.content) {
        var e = getComputedStyle(this.content), i = parseFloat(e.paddingLeft) + Math.max(parseFloat(e.left) || 0, 0), s = parseFloat(e.paddingRight) + Math.max(parseFloat(e.right) || 0, 0), l = parseFloat(e.paddingTop) + Math.max(parseFloat(e.top) || 0, 0), n = parseFloat(e.paddingBottom) + Math.max(parseFloat(e.bottom) || 0, 0);
        return {
          left: i,
          right: s,
          top: l,
          bottom: n,
          x: i + s,
          y: l + n
        };
      }
      return {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        x: 0,
        y: 0
      };
    },
    setSize: function() {
      var e = this;
      if (this.element) {
        var i = this.isBoth(), s = this.isHorizontal(), l = this.element.parentElement, n = this.scrollWidth || "".concat(this.element.offsetWidth || l.offsetWidth, "px"), o = this.scrollHeight || "".concat(this.element.offsetHeight || l.offsetHeight, "px"), a = function(u, r) {
          return e.element.style[u] = r;
        };
        i || s ? (a("height", o), a("width", n)) : a("height", o);
      }
    },
    setSpacerSize: function() {
      var e = this, i = this.items;
      if (i) {
        var s = this.isBoth(), l = this.isHorizontal(), n = this.getContentPosition(), o = function(d, u, r) {
          var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
          return e.spacerStyle = Y(Y({}, e.spacerStyle), Le({}, "".concat(d), (u || []).length * r + h + "px"));
        };
        s ? (o("height", i, this.itemSize[0], n.y), o("width", this.columns || i[1], this.itemSize[1], n.x)) : l ? o("width", this.columns || i, this.itemSize, n.x) : o("height", i, this.itemSize, n.y);
      }
    },
    setContentPosition: function(e) {
      var i = this;
      if (this.content && !this.appendOnly) {
        var s = this.isBoth(), l = this.isHorizontal(), n = e ? e.first : this.first, o = function(r, h) {
          return r * h;
        }, a = function() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return i.contentStyle = Y(Y({}, i.contentStyle), {
            transform: "translate3d(".concat(r, "px, ").concat(h, "px, 0)")
          });
        };
        if (s)
          a(o(n.cols, this.itemSize[1]), o(n.rows, this.itemSize[0]));
        else {
          var d = o(n, this.itemSize);
          l ? a(d, 0) : a(0, d);
        }
      }
    },
    onScrollPositionChange: function(e) {
      var i = this, s = e.target, l = this.isBoth(), n = this.isHorizontal(), o = this.getContentPosition(), a = function(S, M) {
        return S ? S > M ? S - M : S : 0;
      }, d = function(S, M) {
        return Math.floor(S / (M || S));
      }, u = function(S, M, $, Q, P, H) {
        return S <= P ? P : H ? $ - Q - P : M + P - 1;
      }, r = function(S, M, $, Q, P, H, _, ke) {
        if (S <= H) return 0;
        var se = Math.max(0, _ ? S < M ? $ : S - H : S > M ? $ : S - 2 * H), ce = i.getLast(se, ke);
        return se > ce ? ce - P : se;
      }, h = function(S, M, $, Q, P, H) {
        var _ = M + Q + 2 * P;
        return S >= P && (_ += P + 1), i.getLast(_, H);
      }, y = a(s.scrollTop, o.top), L = a(s.scrollLeft, o.left), O = l ? {
        rows: 0,
        cols: 0
      } : 0, w = this.last, g = !1, C = this.lastScrollPos;
      if (l) {
        var k = this.lastScrollPos.top <= y, z = this.lastScrollPos.left <= L;
        if (!this.appendOnly || this.appendOnly && (k || z)) {
          var f = {
            rows: d(y, this.itemSize[0]),
            cols: d(L, this.itemSize[1])
          }, E = {
            rows: u(f.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], k),
            cols: u(f.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], z)
          };
          O = {
            rows: r(f.rows, E.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], k),
            cols: r(f.cols, E.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], z, !0)
          }, w = {
            rows: h(f.rows, O.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
            cols: h(f.cols, O.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], !0)
          }, g = O.rows !== this.first.rows || w.rows !== this.last.rows || O.cols !== this.first.cols || w.cols !== this.last.cols || this.isRangeChanged, C = {
            top: y,
            left: L
          };
        }
      } else {
        var F = n ? L : y, m = this.lastScrollPos <= F;
        if (!this.appendOnly || this.appendOnly && m) {
          var b = d(F, this.itemSize), B = u(b, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, m);
          O = r(b, B, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, m), w = h(b, O, this.last, this.numItemsInViewport, this.d_numToleratedItems), g = O !== this.first || w !== this.last || this.isRangeChanged, C = F;
        }
      }
      return {
        first: O,
        last: w,
        isRangeChanged: g,
        scrollPos: C
      };
    },
    onScrollChange: function(e) {
      var i = this.onScrollPositionChange(e), s = i.first, l = i.last, n = i.isRangeChanged, o = i.scrollPos;
      if (n) {
        var a = {
          first: s,
          last: l
        };
        if (this.setContentPosition(a), this.first = s, this.last = l, this.lastScrollPos = o, this.$emit("scroll-index-change", a), this.lazy && this.isPageChanged(s)) {
          var d, u, r = {
            first: this.step ? Math.min(this.getPageByFirst(s) * this.step, (((d = this.items) === null || d === void 0 ? void 0 : d.length) || 0) - this.step) : s,
            last: Math.min(this.step ? (this.getPageByFirst(s) + 1) * this.step : l, ((u = this.items) === null || u === void 0 ? void 0 : u.length) || 0)
          }, h = this.lazyLoadState.first !== r.first || this.lazyLoadState.last !== r.last;
          h && this.$emit("lazy-load", r), this.lazyLoadState = r;
        }
      }
    },
    onScroll: function(e) {
      var i = this;
      if (this.$emit("scroll", e), this.delay) {
        if (this.scrollTimeout && clearTimeout(this.scrollTimeout), this.isPageChanged()) {
          if (!this.d_loading && this.showLoader) {
            var s = this.onScrollPositionChange(e), l = s.isRangeChanged, n = l || (this.step ? this.isPageChanged() : !1);
            n && (this.d_loading = !0);
          }
          this.scrollTimeout = setTimeout(function() {
            i.onScrollChange(e), i.d_loading && i.showLoader && (!i.lazy || i.loading === void 0) && (i.d_loading = !1, i.page = i.getPageByFirst());
          }, this.delay);
        }
      } else
        this.onScrollChange(e);
    },
    onResize: function() {
      var e = this;
      this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
        if (ne(e.element)) {
          var i = e.isBoth(), s = e.isVertical(), l = e.isHorizontal(), n = [q(e.element), Z(e.element)], o = n[0], a = n[1], d = o !== e.defaultWidth, u = a !== e.defaultHeight, r = i ? d || u : l ? d : s ? u : !1;
          r && (e.d_numToleratedItems = e.numToleratedItems, e.defaultWidth = o, e.defaultHeight = a, e.defaultContentWidth = q(e.content), e.defaultContentHeight = Z(e.content), e.init());
        }
      }, this.resizeDelay);
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = this.onResize.bind(this), window.addEventListener("resize", this.resizeListener), window.addEventListener("orientationchange", this.resizeListener), this.resizeObserver = new ResizeObserver(function() {
        e.onResize();
      }), this.resizeObserver.observe(this.element));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), window.removeEventListener("orientationchange", this.resizeListener), this.resizeListener = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
    },
    getOptions: function(e) {
      var i = (this.items || []).length, s = this.isBoth() ? this.first.rows + e : this.first + e;
      return {
        index: s,
        count: i,
        first: s === 0,
        last: s === i - 1,
        even: s % 2 === 0,
        odd: s % 2 !== 0
      };
    },
    getLoaderOptions: function(e, i) {
      var s = this.loaderArr.length;
      return Y({
        index: e,
        count: s,
        first: e === 0,
        last: e === s - 1,
        even: e % 2 === 0,
        odd: e % 2 !== 0
      }, i);
    },
    getPageByFirst: function(e) {
      return Math.floor(((e ?? this.first) + this.d_numToleratedItems * 4) / (this.step || 1));
    },
    isPageChanged: function(e) {
      return this.step && !this.lazy ? this.page !== this.getPageByFirst(e ?? this.first) : !0;
    },
    setContentEl: function(e) {
      this.content = e || this.content || Oe(this.element, '[data-pc-section="content"]');
    },
    elementRef: function(e) {
      this.element = e;
    },
    contentRef: function(e) {
      this.content = e;
    }
  },
  computed: {
    containerClass: function() {
      return ["p-virtualscroller", this.class, {
        "p-virtualscroller-inline": this.inline,
        "p-virtualscroller-both p-both-scroll": this.isBoth(),
        "p-virtualscroller-horizontal p-horizontal-scroll": this.isHorizontal()
      }];
    },
    contentClass: function() {
      return ["p-virtualscroller-content", {
        "p-virtualscroller-loading": this.d_loading
      }];
    },
    loaderClass: function() {
      return ["p-virtualscroller-loader", {
        "p-virtualscroller-loader-mask": !this.$slots.loader
      }];
    },
    loadedItems: function() {
      var e = this;
      return this.items && !this.d_loading ? this.isBoth() ? this.items.slice(this.appendOnly ? 0 : this.first.rows, this.last.rows).map(function(i) {
        return e.columns ? i : i.slice(e.appendOnly ? 0 : e.first.cols, e.last.cols);
      }) : this.isHorizontal() && this.columns ? this.items : this.items.slice(this.appendOnly ? 0 : this.first, this.last) : [];
    },
    loadedRows: function() {
      return this.d_loading ? this.loaderDisabled ? this.loaderArr : [] : this.loadedItems;
    },
    loadedColumns: function() {
      if (this.columns) {
        var e = this.isBoth(), i = this.isHorizontal();
        if (e || i)
          return this.d_loading && this.loaderDisabled ? e ? this.loaderArr[0] : this.loaderArr : this.columns.slice(e ? this.first.cols : this.first, e ? this.last.cols : this.last);
      }
      return this.columns;
    }
  },
  components: {
    SpinnerIcon: Ie
  }
}, Ot = ["tabindex"];
function It(t, e, i, s, l, n) {
  var o = A("SpinnerIcon");
  return t.disabled ? (p(), v(U, {
    key: 1
  }, [I(t.$slots, "default"), I(t.$slots, "content", {
    items: t.items,
    rows: t.items,
    columns: n.loadedColumns
  })], 64)) : (p(), v("div", c({
    key: 0,
    ref: n.elementRef,
    class: n.containerClass,
    tabindex: t.tabindex,
    style: t.style,
    onScroll: e[0] || (e[0] = function() {
      return n.onScroll && n.onScroll.apply(n, arguments);
    })
  }, t.ptmi("root")), [I(t.$slots, "content", {
    styleClass: n.contentClass,
    items: n.loadedItems,
    getItemOptions: n.getOptions,
    loading: l.d_loading,
    getLoaderOptions: n.getLoaderOptions,
    itemSize: t.itemSize,
    rows: n.loadedRows,
    columns: n.loadedColumns,
    contentRef: n.contentRef,
    spacerStyle: l.spacerStyle,
    contentStyle: l.contentStyle,
    vertical: n.isVertical(),
    horizontal: n.isHorizontal(),
    both: n.isBoth()
  }, function() {
    return [V("div", c({
      ref: n.contentRef,
      class: n.contentClass,
      style: l.contentStyle
    }, t.ptm("content")), [(p(!0), v(U, null, re(n.loadedItems, function(a, d) {
      return I(t.$slots, "item", {
        key: d,
        item: a,
        options: n.getOptions(d)
      });
    }), 128))], 16)];
  }), t.showSpacer ? (p(), v("div", c({
    key: 0,
    class: "p-virtualscroller-spacer",
    style: l.spacerStyle
  }, t.ptm("spacer")), null, 16)) : K("", !0), !t.loaderDisabled && t.showLoader && l.d_loading ? (p(), v("div", c({
    key: 1,
    class: n.loaderClass
  }, t.ptm("loader")), [t.$slots && t.$slots.loader ? (p(!0), v(U, {
    key: 0
  }, re(l.loaderArr, function(a, d) {
    return I(t.$slots, "loader", {
      key: d,
      options: n.getLoaderOptions(d, n.isBoth() && {
        numCols: t.d_numItemsInViewport.cols
      })
    });
  }), 128)) : K("", !0), I(t.$slots, "loadingicon", {}, function() {
    return [R(o, c({
      spin: "",
      class: "p-virtualscroller-loading-icon"
    }, t.ptm("loadingIcon")), null, 16)];
  })], 16)) : K("", !0)], 16, Ot));
}
Ce.render = It;
var St = `
    .p-select {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('select.background');
        border: 1px solid dt('select.border.color');
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            outline-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration');
        border-radius: dt('select.border.radius');
        outline-color: transparent;
        box-shadow: dt('select.shadow');
    }

    .p-select:not(.p-disabled):hover {
        border-color: dt('select.hover.border.color');
    }

    .p-select:not(.p-disabled).p-focus {
        border-color: dt('select.focus.border.color');
        box-shadow: dt('select.focus.ring.shadow');
        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');
        outline-offset: dt('select.focus.ring.offset');
    }

    .p-select.p-variant-filled {
        background: dt('select.filled.background');
    }

    .p-select.p-variant-filled:not(.p-disabled):hover {
        background: dt('select.filled.hover.background');
    }

    .p-select.p-variant-filled:not(.p-disabled).p-focus {
        background: dt('select.filled.focus.background');
    }

    .p-select.p-invalid {
        border-color: dt('select.invalid.border.color');
    }

    .p-select.p-disabled {
        opacity: 1;
        background: dt('select.disabled.background');
    }

    .p-select-clear-icon {
        align-self: center;
        color: dt('select.clear.icon.color');
        inset-inline-end: dt('select.dropdown.width');
    }

    .p-select-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('select.dropdown.color');
        width: dt('select.dropdown.width');
        border-start-end-radius: dt('select.border.radius');
        border-end-end-radius: dt('select.border.radius');
    }

    .p-select-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        padding: dt('select.padding.y') dt('select.padding.x');
        text-overflow: ellipsis;
        cursor: pointer;
        color: dt('select.color');
        background: transparent;
        border: 0 none;
        outline: 0 none;
        font-size: 1rem;
    }

    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.p-invalid .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }

    .p-select.p-disabled .p-select-label {
        color: dt('select.disabled.color');
    }

    .p-select-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-select-label {
        cursor: default;
    }

    .p-select-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('select.overlay.background');
        color: dt('select.overlay.color');
        border: 1px solid dt('select.overlay.border.color');
        border-radius: dt('select.overlay.border.radius');
        box-shadow: dt('select.overlay.shadow');
        min-width: 100%;
        transform-origin: inherit;
        will-change: transform;
    }

    .p-select-header {
        padding: dt('select.list.header.padding');
    }

    .p-select-filter {
        width: 100%;
    }

    .p-select-list-container {
        overflow: auto;
    }

    .p-select-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('select.option.group.padding');
        background: dt('select.option.group.background');
        color: dt('select.option.group.color');
        font-weight: dt('select.option.group.font.weight');
    }

    .p-select-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('select.list.padding');
        gap: dt('select.list.gap');
        display: flex;
        flex-direction: column;
    }

    .p-select-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('select.option.padding');
        border: 0 none;
        color: dt('select.option.color');
        background: transparent;
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration'),
            outline-color dt('select.transition.duration');
        border-radius: dt('select.option.border.radius');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled):hover {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option.p-select-option-selected {
        background: dt('select.option.selected.background');
        color: dt('select.option.selected.color');
    }

    .p-select-option.p-select-option-selected.p-focus {
        background: dt('select.option.selected.focus.background');
        color: dt('select.option.selected.focus.color');
    }
   
    .p-select-option-blank-icon {
        flex-shrink: 0;
    }

    .p-select-option-check-icon {
        position: relative;
        flex-shrink: 0;
        margin-inline-start: dt('select.checkmark.gutter.start');
        margin-inline-end: dt('select.checkmark.gutter.end');
        color: dt('select.checkmark.color');
    }

    .p-select-empty-message {
        padding: dt('select.empty.message.padding');
    }

    .p-select-fluid {
        display: flex;
        width: 100%;
    }

    .p-select-sm .p-select-label {
        font-size: dt('select.sm.font.size');
        padding-block: dt('select.sm.padding.y');
        padding-inline: dt('select.sm.padding.x');
    }

    .p-select-sm .p-select-dropdown .p-icon {
        font-size: dt('select.sm.font.size');
        width: dt('select.sm.font.size');
        height: dt('select.sm.font.size');
    }

    .p-select-lg .p-select-label {
        font-size: dt('select.lg.font.size');
        padding-block: dt('select.lg.padding.y');
        padding-inline: dt('select.lg.padding.x');
    }

    .p-select-lg .p-select-dropdown .p-icon {
        font-size: dt('select.lg.font.size');
        width: dt('select.lg.font.size');
        height: dt('select.lg.font.size');
    }

    .p-floatlabel-in .p-select-filter {
        padding-block-start: dt('select.padding.y');
        padding-block-end: dt('select.padding.y');
    }
`, wt = {
  root: function(e) {
    var i = e.instance, s = e.props, l = e.state;
    return ["p-select p-component p-inputwrapper", {
      "p-disabled": s.disabled,
      "p-invalid": i.$invalid,
      "p-variant-filled": i.$variant === "filled",
      "p-focus": l.focused,
      "p-inputwrapper-filled": i.$filled,
      "p-inputwrapper-focus": l.focused || l.overlayVisible,
      "p-select-open": l.overlayVisible,
      "p-select-fluid": i.$fluid,
      "p-select-sm p-inputfield-sm": s.size === "small",
      "p-select-lg p-inputfield-lg": s.size === "large"
    }];
  },
  label: function(e) {
    var i, s = e.instance, l = e.props;
    return ["p-select-label", {
      "p-placeholder": !l.editable && s.label === l.placeholder,
      "p-select-label-empty": !l.editable && !s.$slots.value && (s.label === "p-emptylabel" || ((i = s.label) === null || i === void 0 ? void 0 : i.length) === 0)
    }];
  },
  clearIcon: "p-select-clear-icon",
  dropdown: "p-select-dropdown",
  loadingicon: "p-select-loading-icon",
  dropdownIcon: "p-select-dropdown-icon",
  overlay: "p-select-overlay p-component",
  header: "p-select-header",
  pcFilter: "p-select-filter",
  listContainer: "p-select-list-container",
  list: "p-select-list",
  optionGroup: "p-select-option-group",
  optionGroupLabel: "p-select-option-group-label",
  option: function(e) {
    var i = e.instance, s = e.props, l = e.state, n = e.option, o = e.focusedOption;
    return ["p-select-option", {
      "p-select-option-selected": i.isSelected(n) && s.highlightOnSelect,
      "p-focus": l.focusedOptionIndex === o,
      "p-disabled": i.isOptionDisabled(n)
    }];
  },
  optionLabel: "p-select-option-label",
  optionCheckIcon: "p-select-option-check-icon",
  optionBlankIcon: "p-select-option-blank-icon",
  emptyMessage: "p-select-empty-message"
}, Lt = ye.extend({
  name: "select",
  style: St,
  classes: wt
}), Ct = {
  name: "BaseSelect",
  extends: it,
  props: {
    options: Array,
    optionLabel: [String, Function],
    optionValue: [String, Function],
    optionDisabled: [String, Function],
    optionGroupLabel: [String, Function],
    optionGroupChildren: [String, Function],
    scrollHeight: {
      type: String,
      default: "14rem"
    },
    filter: Boolean,
    filterPlaceholder: String,
    filterLocale: String,
    filterMatchMode: {
      type: String,
      default: "contains"
    },
    filterFields: {
      type: Array,
      default: null
    },
    editable: Boolean,
    placeholder: {
      type: String,
      default: null
    },
    dataKey: null,
    showClear: {
      type: Boolean,
      default: !1
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
    labelId: {
      type: String,
      default: null
    },
    labelClass: {
      type: [String, Object],
      default: null
    },
    labelStyle: {
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
    panelStyle: {
      type: Object,
      default: null
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    clearIcon: {
      type: String,
      default: void 0
    },
    dropdownIcon: {
      type: String,
      default: void 0
    },
    filterIcon: {
      type: String,
      default: void 0
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    resetFilterOnHide: {
      type: Boolean,
      default: !1
    },
    resetFilterOnClear: {
      type: Boolean,
      default: !1
    },
    virtualScrollerOptions: {
      type: Object,
      default: null
    },
    autoOptionFocus: {
      type: Boolean,
      default: !1
    },
    autoFilterFocus: {
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
    highlightOnSelect: {
      type: Boolean,
      default: !0
    },
    checkmark: {
      type: Boolean,
      default: !1
    },
    filterMessage: {
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
    emptyFilterMessage: {
      type: String,
      default: null
    },
    emptyMessage: {
      type: String,
      default: null
    },
    tabindex: {
      type: Number,
      default: 0
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
  style: Lt,
  provide: function() {
    return {
      $pcSelect: this,
      $parentInstance: this
    };
  }
};
function X(t) {
  "@babel/helpers - typeof";
  return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, X(t);
}
function kt(t) {
  return Mt(t) || Vt(t) || Ft(t) || zt();
}
function zt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ft(t, e) {
  if (t) {
    if (typeof t == "string") return ue(t, e);
    var i = {}.toString.call(t).slice(8, -1);
    return i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set" ? Array.from(t) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ue(t, e) : void 0;
  }
}
function Vt(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Mt(t) {
  if (Array.isArray(t)) return ue(t);
}
function ue(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var i = 0, s = Array(e); i < e; i++) s[i] = t[i];
  return s;
}
function ge(t, e) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function be(t) {
  for (var e = 1; e < arguments.length; e++) {
    var i = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ge(Object(i), !0).forEach(function(s) {
      j(t, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ge(Object(i)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return t;
}
function j(t, e, i) {
  return (e = Tt(e)) in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t;
}
function Tt(t) {
  var e = Pt(t, "string");
  return X(e) == "symbol" ? e : e + "";
}
function Pt(t, e) {
  if (X(t) != "object" || !t) return t;
  var i = t[Symbol.toPrimitive];
  if (i !== void 0) {
    var s = i.call(t, e);
    if (X(s) != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var At = {
  name: "Select",
  extends: Ct,
  inheritAttrs: !1,
  emits: ["change", "focus", "blur", "before-show", "before-hide", "show", "hide", "filter"],
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  labelClickListener: null,
  matchMediaOrientationListener: null,
  overlay: null,
  list: null,
  virtualScroller: null,
  searchTimeout: null,
  searchValue: null,
  isModelValueChanged: !1,
  data: function() {
    return {
      clicked: !1,
      focused: !1,
      focusedOptionIndex: -1,
      filterValue: null,
      overlayVisible: !1,
      queryOrientation: null
    };
  },
  watch: {
    modelValue: function() {
      this.isModelValueChanged = !0;
    },
    options: function() {
      this.autoUpdateModel();
    }
  },
  mounted: function() {
    this.autoUpdateModel(), this.bindLabelClickListener(), this.bindMatchMediaOrientationListener();
  },
  updated: function() {
    this.overlayVisible && this.isModelValueChanged && this.scrollInView(this.findSelectedOptionIndex()), this.isModelValueChanged = !1;
  },
  beforeUnmount: function() {
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindLabelClickListener(), this.unbindMatchMediaOrientationListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.overlay && (le.clear(this.overlay), this.overlay = null);
  },
  methods: {
    getOptionIndex: function(e, i) {
      return this.virtualScrollerDisabled ? e : i && i(e).index;
    },
    getOptionLabel: function(e) {
      return this.optionLabel ? G(e, this.optionLabel) : e;
    },
    getOptionValue: function(e) {
      return this.optionValue ? G(e, this.optionValue) : e;
    },
    getOptionRenderKey: function(e, i) {
      return (this.dataKey ? G(e, this.dataKey) : this.getOptionLabel(e)) + "_" + i;
    },
    getPTItemOptions: function(e, i, s, l) {
      return this.ptm(l, {
        context: {
          option: e,
          index: s,
          selected: this.isSelected(e),
          focused: this.focusedOptionIndex === this.getOptionIndex(s, i),
          disabled: this.isOptionDisabled(e)
        }
      });
    },
    isOptionDisabled: function(e) {
      return this.optionDisabled ? G(e, this.optionDisabled) : !1;
    },
    isOptionGroup: function(e) {
      return this.optionGroupLabel && e.optionGroup && e.group;
    },
    getOptionGroupLabel: function(e) {
      return G(e, this.optionGroupLabel);
    },
    getOptionGroupChildren: function(e) {
      return G(e, this.optionGroupChildren);
    },
    getAriaPosInset: function(e) {
      var i = this;
      return (this.optionGroupLabel ? e - this.visibleOptions.slice(0, e).filter(function(s) {
        return i.isOptionGroup(s);
      }).length : e) + 1;
    },
    show: function(e) {
      this.$emit("before-show"), this.overlayVisible = !0, this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex(), e && x(this.$refs.focusInput);
    },
    hide: function(e) {
      var i = this, s = function() {
        i.$emit("before-hide"), i.overlayVisible = !1, i.clicked = !1, i.focusedOptionIndex = -1, i.searchValue = "", i.resetFilterOnHide && (i.filterValue = null), e && x(i.$refs.focusInput);
      };
      setTimeout(function() {
        s();
      }, 0);
    },
    onFocus: function(e) {
      this.disabled || (this.focused = !0, this.overlayVisible && (this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex(), this.scrollInView(this.focusedOptionIndex)), this.$emit("focus", e));
    },
    onBlur: function(e) {
      var i = this;
      setTimeout(function() {
        var s, l;
        i.focused = !1, i.focusedOptionIndex = -1, i.searchValue = "", i.$emit("blur", e), (s = (l = i.formField).onBlur) === null || s === void 0 || s.call(l, e);
      }, 100);
    },
    onKeyDown: function(e) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      if (Ge())
        switch (e.code) {
          case "Backspace":
            this.onBackspaceKey(e, this.editable);
            break;
          case "Enter":
          case "NumpadDecimal":
            this.onEnterKey(e);
            break;
          default:
            e.preventDefault();
            return;
        }
      var i = e.metaKey || e.ctrlKey;
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e, this.editable);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(e, this.editable);
          break;
        case "Home":
          this.onHomeKey(e, this.editable);
          break;
        case "End":
          this.onEndKey(e, this.editable);
          break;
        case "PageDown":
          this.onPageDownKey(e);
          break;
        case "PageUp":
          this.onPageUpKey(e);
          break;
        case "Space":
          this.onSpaceKey(e, this.editable);
          break;
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
        case "Backspace":
          this.onBackspaceKey(e, this.editable);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !i && Ne(e.key) && (!this.overlayVisible && this.show(), !this.editable && this.searchOptions(e, e.key), this.filter && (this.filterValue = e.key));
          break;
      }
      this.clicked = !1;
    },
    onEditableInput: function(e) {
      var i = e.target.value;
      this.searchValue = "";
      var s = this.searchOptions(e, i);
      !s && (this.focusedOptionIndex = -1), this.updateModel(e, i), !this.overlayVisible && te(i) && this.show();
    },
    onContainerClick: function(e) {
      this.disabled || this.loading || e.target.tagName === "INPUT" || e.target.getAttribute("data-pc-section") === "clearicon" || e.target.closest('[data-pc-section="clearicon"]') || ((!this.overlay || !this.overlay.contains(e.target)) && (this.overlayVisible ? this.hide(!0) : this.show(!0)), this.clicked = !0);
    },
    onClearClick: function(e) {
      this.updateModel(e, null), this.resetFilterOnClear && (this.filterValue = null);
    },
    onFirstHiddenFocus: function(e) {
      var i = e.relatedTarget === this.$refs.focusInput ? je(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      x(i);
    },
    onLastHiddenFocus: function(e) {
      var i = e.relatedTarget === this.$refs.focusInput ? Re(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      x(i);
    },
    onOptionSelect: function(e, i) {
      var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, l = this.getOptionValue(i);
      this.updateModel(e, l), s && this.hide(!0);
    },
    onOptionMouseMove: function(e, i) {
      this.focusOnHover && this.changeFocusedOptionIndex(e, i);
    },
    onFilterChange: function(e) {
      var i = e.target.value;
      this.filterValue = i, this.focusedOptionIndex = -1, this.$emit("filter", {
        originalEvent: e,
        value: i
      }), !this.virtualScrollerDisabled && this.virtualScroller.scrollToIndex(0);
    },
    onFilterKeyDown: function(e) {
      if (!e.isComposing)
        switch (e.code) {
          case "ArrowDown":
            this.onArrowDownKey(e);
            break;
          case "ArrowUp":
            this.onArrowUpKey(e, !0);
            break;
          case "ArrowLeft":
          case "ArrowRight":
            this.onArrowLeftKey(e, !0);
            break;
          case "Home":
            this.onHomeKey(e, !0);
            break;
          case "End":
            this.onEndKey(e, !0);
            break;
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
    onFilterBlur: function() {
      this.focusedOptionIndex = -1;
    },
    onFilterUpdated: function() {
      this.overlayVisible && this.alignOverlay();
    },
    onOverlayClick: function(e) {
      Ue.emit("overlay-click", {
        originalEvent: e,
        target: this.$el
      });
    },
    onOverlayKeyDown: function(e) {
      e.code === "Escape" && this.onEscapeKey(e);
    },
    onArrowDownKey: function(e) {
      if (!this.overlayVisible)
        this.show(), this.editable && this.changeFocusedOptionIndex(e, this.findSelectedOptionIndex());
      else {
        var i = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
        this.changeFocusedOptionIndex(e, i);
      }
      e.preventDefault();
    },
    onArrowUpKey: function(e) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (e.altKey && !i)
        this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide(), e.preventDefault();
      else {
        var s = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(e, s), !this.overlayVisible && this.show(), e.preventDefault();
      }
    },
    onArrowLeftKey: function(e) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      i && (this.focusedOptionIndex = -1);
    },
    onHomeKey: function(e) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (i) {
        var s = e.currentTarget;
        e.shiftKey ? s.setSelectionRange(0, e.target.selectionStart) : (s.setSelectionRange(0, 0), this.focusedOptionIndex = -1);
      } else
        this.changeFocusedOptionIndex(e, this.findFirstOptionIndex()), !this.overlayVisible && this.show();
      e.preventDefault();
    },
    onEndKey: function(e) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (i) {
        var s = e.currentTarget;
        if (e.shiftKey)
          s.setSelectionRange(e.target.selectionStart, s.value.length);
        else {
          var l = s.value.length;
          s.setSelectionRange(l, l), this.focusedOptionIndex = -1;
        }
      } else
        this.changeFocusedOptionIndex(e, this.findLastOptionIndex()), !this.overlayVisible && this.show();
      e.preventDefault();
    },
    onPageUpKey: function(e) {
      this.scrollInView(0), e.preventDefault();
    },
    onPageDownKey: function(e) {
      this.scrollInView(this.visibleOptions.length - 1), e.preventDefault();
    },
    onEnterKey: function(e) {
      this.overlayVisible ? (this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.hide(!0)) : (this.focusedOptionIndex = -1, this.onArrowDownKey(e)), e.preventDefault();
    },
    onSpaceKey: function(e) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      !i && this.onEnterKey(e);
    },
    onEscapeKey: function(e) {
      this.overlayVisible && this.hide(!0), e.preventDefault(), e.stopPropagation();
    },
    onTabKey: function(e) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      i || (this.overlayVisible && this.hasFocusableElements() ? (x(this.$refs.firstHiddenFocusableElementOnOverlay), e.preventDefault()) : (this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide(this.filter)));
    },
    onBackspaceKey: function(e) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      i && !this.overlayVisible && this.show();
    },
    onOverlayEnter: function(e) {
      var i = this;
      le.set("overlay", e, this.$primevue.config.zIndex.overlay), He(e, {
        position: "absolute",
        top: "0"
      }), this.alignOverlay(), this.scrollInView(), this.$attrSelector && e.setAttribute(this.$attrSelector, ""), setTimeout(function() {
        i.autoFilterFocus && i.filter && x(i.$refs.filterInput.$el), i.autoUpdateModel();
      }, 1);
    },
    onOverlayAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onOverlayLeave: function() {
      var e = this;
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.autoFilterFocus && this.filter && !this.editable && this.$nextTick(function() {
        e.$refs.filterInput && x(e.$refs.filterInput.$el);
      }), this.$emit("hide"), this.overlay = null;
    },
    onOverlayAfterLeave: function(e) {
      le.clear(e);
    },
    alignOverlay: function() {
      this.appendTo === "self" ? Ee(this.overlay, this.$el) : this.overlay && (this.overlay.style.minWidth = xe(this.$el) + "px", De(this.overlay, this.$el));
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(i) {
        var s = i.composedPath();
        e.overlayVisible && e.overlay && !s.includes(e.$el) && !s.includes(e.overlay) && e.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var e = this;
      this.scrollHandler || (this.scrollHandler = new We(this.$refs.container, function() {
        e.overlayVisible && e.hide();
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function() {
        e.overlayVisible && !Ke() && e.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindLabelClickListener: function() {
      var e = this;
      if (!this.editable && !this.labelClickListener) {
        var i = document.querySelector('label[for="'.concat(this.labelId, '"]'));
        i && ne(i) && (this.labelClickListener = function() {
          x(e.$refs.focusInput);
        }, i.addEventListener("click", this.labelClickListener));
      }
    },
    unbindLabelClickListener: function() {
      if (this.labelClickListener) {
        var e = document.querySelector('label[for="'.concat(this.labelId, '"]'));
        e && ne(e) && e.removeEventListener("click", this.labelClickListener);
      }
    },
    bindMatchMediaOrientationListener: function() {
      var e = this;
      if (!this.matchMediaOrientationListener) {
        var i = matchMedia("(orientation: portrait)");
        this.queryOrientation = i, this.matchMediaOrientationListener = function() {
          e.alignOverlay();
        }, this.queryOrientation.addEventListener("change", this.matchMediaOrientationListener);
      }
    },
    unbindMatchMediaOrientationListener: function() {
      this.matchMediaOrientationListener && (this.queryOrientation.removeEventListener("change", this.matchMediaOrientationListener), this.queryOrientation = null, this.matchMediaOrientationListener = null);
    },
    hasFocusableElements: function() {
      return Be(this.overlay, ':not([data-p-hidden-focusable="true"])').length > 0;
    },
    isOptionExactMatched: function(e) {
      var i;
      return this.isValidOption(e) && typeof this.getOptionLabel(e) == "string" && ((i = this.getOptionLabel(e)) === null || i === void 0 ? void 0 : i.toLocaleLowerCase(this.filterLocale)) == this.searchValue.toLocaleLowerCase(this.filterLocale);
    },
    isOptionStartsWith: function(e) {
      var i;
      return this.isValidOption(e) && typeof this.getOptionLabel(e) == "string" && ((i = this.getOptionLabel(e)) === null || i === void 0 ? void 0 : i.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)));
    },
    isValidOption: function(e) {
      return te(e) && !(this.isOptionDisabled(e) || this.isOptionGroup(e));
    },
    isValidSelectedOption: function(e) {
      return this.isValidOption(e) && this.isSelected(e);
    },
    isSelected: function(e) {
      return Ae(this.d_value, this.getOptionValue(e), this.equalityKey);
    },
    findFirstOptionIndex: function() {
      var e = this;
      return this.visibleOptions.findIndex(function(i) {
        return e.isValidOption(i);
      });
    },
    findLastOptionIndex: function() {
      var e = this;
      return he(this.visibleOptions, function(i) {
        return e.isValidOption(i);
      });
    },
    findNextOptionIndex: function(e) {
      var i = this, s = e < this.visibleOptions.length - 1 ? this.visibleOptions.slice(e + 1).findIndex(function(l) {
        return i.isValidOption(l);
      }) : -1;
      return s > -1 ? s + e + 1 : e;
    },
    findPrevOptionIndex: function(e) {
      var i = this, s = e > 0 ? he(this.visibleOptions.slice(0, e), function(l) {
        return i.isValidOption(l);
      }) : -1;
      return s > -1 ? s : e;
    },
    findSelectedOptionIndex: function() {
      var e = this;
      return this.visibleOptions.findIndex(function(i) {
        return e.isValidSelectedOption(i);
      });
    },
    findFirstFocusedOptionIndex: function() {
      var e = this.findSelectedOptionIndex();
      return e < 0 ? this.findFirstOptionIndex() : e;
    },
    findLastFocusedOptionIndex: function() {
      var e = this.findSelectedOptionIndex();
      return e < 0 ? this.findLastOptionIndex() : e;
    },
    searchOptions: function(e, i) {
      var s = this;
      this.searchValue = (this.searchValue || "") + i;
      var l = -1, n = !1;
      return te(this.searchValue) && (l = this.visibleOptions.findIndex(function(o) {
        return s.isOptionExactMatched(o);
      }), l === -1 && (l = this.visibleOptions.findIndex(function(o) {
        return s.isOptionStartsWith(o);
      })), l !== -1 && (n = !0), l === -1 && this.focusedOptionIndex === -1 && (l = this.findFirstFocusedOptionIndex()), l !== -1 && this.changeFocusedOptionIndex(e, l)), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        s.searchValue = "", s.searchTimeout = null;
      }, 500), n;
    },
    changeFocusedOptionIndex: function(e, i) {
      this.focusedOptionIndex !== i && (this.focusedOptionIndex = i, this.scrollInView(), this.selectOnFocus && this.onOptionSelect(e, this.visibleOptions[i], !1));
    },
    scrollInView: function() {
      var e = this, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      this.$nextTick(function() {
        var s = i !== -1 ? "".concat(e.$id, "_").concat(i) : e.focusedOptionId, l = Oe(e.list, 'li[id="'.concat(s, '"]'));
        l ? l.scrollIntoView && l.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }) : e.virtualScrollerDisabled || e.virtualScroller && e.virtualScroller.scrollToIndex(i !== -1 ? i : e.focusedOptionIndex);
      });
    },
    autoUpdateModel: function() {
      this.autoOptionFocus && (this.focusedOptionIndex = this.findFirstFocusedOptionIndex()), this.selectOnFocus && this.autoOptionFocus && !this.$filled && this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], !1);
    },
    updateModel: function(e, i) {
      this.writeValue(i, e), this.$emit("change", {
        originalEvent: e,
        value: i
      });
    },
    flatOptions: function(e) {
      var i = this;
      return (e || []).reduce(function(s, l, n) {
        s.push({
          optionGroup: l,
          group: !0,
          index: n
        });
        var o = i.getOptionGroupChildren(l);
        return o && o.forEach(function(a) {
          return s.push(a);
        }), s;
      }, []);
    },
    overlayRef: function(e) {
      this.overlay = e;
    },
    listRef: function(e, i) {
      this.list = e, i && i(e);
    },
    virtualScrollerRef: function(e) {
      this.virtualScroller = e;
    }
  },
  computed: {
    visibleOptions: function() {
      var e = this, i = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      if (this.filterValue) {
        var s = Pe.filter(i, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        if (this.optionGroupLabel) {
          var l = this.options || [], n = [];
          return l.forEach(function(o) {
            var a = e.getOptionGroupChildren(o), d = a.filter(function(u) {
              return s.includes(u);
            });
            d.length > 0 && n.push(be(be({}, o), {}, j({}, typeof e.optionGroupChildren == "string" ? e.optionGroupChildren : "items", kt(d))));
          }), this.flatOptions(n);
        }
        return s;
      }
      return i;
    },
    // @deprecated use $filled instead
    hasSelectedOption: function() {
      return this.$filled;
    },
    label: function() {
      var e = this.findSelectedOptionIndex();
      return e !== -1 ? this.getOptionLabel(this.visibleOptions[e]) : this.placeholder || "p-emptylabel";
    },
    editableInputValue: function() {
      var e = this.findSelectedOptionIndex();
      return e !== -1 ? this.getOptionLabel(this.visibleOptions[e]) : this.d_value || "";
    },
    equalityKey: function() {
      return this.optionValue ? null : this.dataKey;
    },
    searchFields: function() {
      return this.filterFields || [this.optionLabel];
    },
    filterResultMessageText: function() {
      return te(this.visibleOptions) ? this.filterMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptyFilterMessageText;
    },
    filterMessageText: function() {
      return this.filterMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptyFilterMessageText: function() {
      return this.emptyFilterMessage || this.$primevue.config.locale.emptySearchMessage || this.$primevue.config.locale.emptyFilterMessage || "";
    },
    emptyMessageText: function() {
      return this.emptyMessage || this.$primevue.config.locale.emptyMessage || "";
    },
    selectionMessageText: function() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText: function() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText: function() {
      return this.$filled ? this.selectionMessageText.replaceAll("{0}", "1") : this.emptySelectionMessageText;
    },
    focusedOptionId: function() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.$id, "_").concat(this.focusedOptionIndex) : null;
    },
    ariaSetSize: function() {
      var e = this;
      return this.visibleOptions.filter(function(i) {
        return !e.isOptionGroup(i);
      }).length;
    },
    isClearIconVisible: function() {
      return this.showClear && this.d_value != null && !this.disabled && !this.loading;
    },
    virtualScrollerDisabled: function() {
      return !this.virtualScrollerOptions;
    },
    containerDataP: function() {
      return ee(j({
        invalid: this.$invalid,
        disabled: this.disabled,
        focus: this.focused,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    },
    labelDataP: function() {
      return ee(j(j({
        placeholder: !this.editable && this.label === this.placeholder,
        clearable: this.showClear,
        disabled: this.disabled,
        editable: this.editable
      }, this.size, this.size), "empty", !this.editable && !this.$slots.value && (this.label === "p-emptylabel" || this.label.length === 0)));
    },
    dropdownIconDataP: function() {
      return ee(j({}, this.size, this.size));
    },
    overlayDataP: function() {
      return ee(j({}, "portal-" + this.appendTo, "portal-" + this.appendTo));
    }
  },
  directives: {
    ripple: Te
  },
  components: {
    InputText: tt,
    VirtualScroller: Ce,
    Portal: Me,
    InputIcon: et,
    IconField: _e,
    TimesIcon: Ve,
    ChevronDownIcon: Qe,
    SpinnerIcon: Ie,
    SearchIcon: we,
    CheckIcon: Fe,
    BlankIcon: Se
  }
}, Bt = ["id", "data-p"], Kt = ["name", "id", "value", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid", "data-p"], Et = ["name", "id", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid", "aria-disabled", "data-p"], xt = ["data-p"], Dt = ["id"], Ht = ["id"], Rt = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onMousedown", "onMousemove", "data-p-selected", "data-p-focused", "data-p-disabled"];
function jt(t, e, i, s, l, n) {
  var o = A("SpinnerIcon"), a = A("InputText"), d = A("SearchIcon"), u = A("InputIcon"), r = A("IconField"), h = A("CheckIcon"), y = A("BlankIcon"), L = A("VirtualScroller"), O = A("Portal"), w = $e("ripple");
  return p(), v("div", c({
    ref: "container",
    id: t.$id,
    class: t.cx("root"),
    onClick: e[12] || (e[12] = function() {
      return n.onContainerClick && n.onContainerClick.apply(n, arguments);
    }),
    "data-p": n.containerDataP
  }, t.ptmi("root")), [t.editable ? (p(), v("input", c({
    key: 0,
    ref: "focusInput",
    name: t.name,
    id: t.labelId || t.inputId,
    type: "text",
    class: [t.cx("label"), t.inputClass, t.labelClass],
    style: [t.inputStyle, t.labelStyle],
    value: n.editableInputValue,
    placeholder: t.placeholder,
    tabindex: t.disabled ? -1 : t.tabindex,
    disabled: t.disabled,
    autocomplete: "off",
    role: "combobox",
    "aria-label": t.ariaLabel,
    "aria-labelledby": t.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-expanded": l.overlayVisible,
    "aria-controls": l.overlayVisible ? t.$id + "_list" : void 0,
    "aria-activedescendant": l.focused ? n.focusedOptionId : void 0,
    "aria-invalid": t.invalid || void 0,
    onFocus: e[0] || (e[0] = function() {
      return n.onFocus && n.onFocus.apply(n, arguments);
    }),
    onBlur: e[1] || (e[1] = function() {
      return n.onBlur && n.onBlur.apply(n, arguments);
    }),
    onKeydown: e[2] || (e[2] = function() {
      return n.onKeyDown && n.onKeyDown.apply(n, arguments);
    }),
    onInput: e[3] || (e[3] = function() {
      return n.onEditableInput && n.onEditableInput.apply(n, arguments);
    }),
    "data-p": n.labelDataP
  }, t.ptm("label")), null, 16, Kt)) : (p(), v("span", c({
    key: 1,
    ref: "focusInput",
    name: t.name,
    id: t.labelId || t.inputId,
    class: [t.cx("label"), t.inputClass, t.labelClass],
    style: [t.inputStyle, t.labelStyle],
    tabindex: t.disabled ? -1 : t.tabindex,
    role: "combobox",
    "aria-label": t.ariaLabel || (n.label === "p-emptylabel" ? void 0 : n.label),
    "aria-labelledby": t.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-expanded": l.overlayVisible,
    "aria-controls": t.$id + "_list",
    "aria-activedescendant": l.focused ? n.focusedOptionId : void 0,
    "aria-invalid": t.invalid || void 0,
    "aria-disabled": t.disabled,
    onFocus: e[4] || (e[4] = function() {
      return n.onFocus && n.onFocus.apply(n, arguments);
    }),
    onBlur: e[5] || (e[5] = function() {
      return n.onBlur && n.onBlur.apply(n, arguments);
    }),
    onKeydown: e[6] || (e[6] = function() {
      return n.onKeyDown && n.onKeyDown.apply(n, arguments);
    }),
    "data-p": n.labelDataP
  }, t.ptm("label")), [I(t.$slots, "value", {
    value: t.d_value,
    placeholder: t.placeholder
  }, function() {
    var g;
    return [oe(D(n.label === "p-emptylabel" ? " " : (g = n.label) !== null && g !== void 0 ? g : "empty"), 1)];
  })], 16, Et)), n.isClearIconVisible ? I(t.$slots, "clearicon", {
    key: 2,
    class: ie(t.cx("clearIcon")),
    clearCallback: n.onClearClick
  }, function() {
    return [(p(), N(pe(t.clearIcon ? "i" : "TimesIcon"), c({
      ref: "clearIcon",
      class: [t.cx("clearIcon"), t.clearIcon],
      onClick: n.onClearClick
    }, t.ptm("clearIcon"), {
      "data-pc-section": "clearicon"
    }), null, 16, ["class", "onClick"]))];
  }) : K("", !0), V("div", c({
    class: t.cx("dropdown")
  }, t.ptm("dropdown")), [t.loading ? I(t.$slots, "loadingicon", {
    key: 0,
    class: ie(t.cx("loadingIcon"))
  }, function() {
    return [t.loadingIcon ? (p(), v("span", c({
      key: 0,
      class: [t.cx("loadingIcon"), "pi-spin", t.loadingIcon],
      "aria-hidden": "true"
    }, t.ptm("loadingIcon")), null, 16)) : (p(), N(o, c({
      key: 1,
      class: t.cx("loadingIcon"),
      spin: "",
      "aria-hidden": "true"
    }, t.ptm("loadingIcon")), null, 16, ["class"]))];
  }) : I(t.$slots, "dropdownicon", {
    key: 1,
    class: ie(t.cx("dropdownIcon"))
  }, function() {
    return [(p(), N(pe(t.dropdownIcon ? "span" : "ChevronDownIcon"), c({
      class: [t.cx("dropdownIcon"), t.dropdownIcon],
      "aria-hidden": "true",
      "data-p": n.dropdownIconDataP
    }, t.ptm("dropdownIcon")), null, 16, ["class", "data-p"]))];
  })], 16), R(O, {
    appendTo: t.appendTo
  }, {
    default: W(function() {
      return [R(qe, c({
        name: "p-anchored-overlay",
        onEnter: n.onOverlayEnter,
        onAfterEnter: n.onOverlayAfterEnter,
        onLeave: n.onOverlayLeave,
        onAfterLeave: n.onOverlayAfterLeave
      }, t.ptm("transition")), {
        default: W(function() {
          return [l.overlayVisible ? (p(), v("div", c({
            key: 0,
            ref: n.overlayRef,
            class: [t.cx("overlay"), t.panelClass, t.overlayClass],
            style: [t.panelStyle, t.overlayStyle],
            onClick: e[10] || (e[10] = function() {
              return n.onOverlayClick && n.onOverlayClick.apply(n, arguments);
            }),
            onKeydown: e[11] || (e[11] = function() {
              return n.onOverlayKeyDown && n.onOverlayKeyDown.apply(n, arguments);
            }),
            "data-p": n.overlayDataP
          }, t.ptm("overlay")), [V("span", c({
            ref: "firstHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            class: "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: e[7] || (e[7] = function() {
              return n.onFirstHiddenFocus && n.onFirstHiddenFocus.apply(n, arguments);
            })
          }, t.ptm("hiddenFirstFocusableEl"), {
            "data-p-hidden-accessible": !0,
            "data-p-hidden-focusable": !0
          }), null, 16), I(t.$slots, "header", {
            value: t.d_value,
            options: n.visibleOptions
          }), t.filter ? (p(), v("div", c({
            key: 0,
            class: t.cx("header")
          }, t.ptm("header")), [R(r, {
            unstyled: t.unstyled,
            pt: t.ptm("pcFilterContainer")
          }, {
            default: W(function() {
              return [R(a, {
                ref: "filterInput",
                type: "text",
                value: l.filterValue,
                onVnodeMounted: n.onFilterUpdated,
                onVnodeUpdated: n.onFilterUpdated,
                class: ie(t.cx("pcFilter")),
                placeholder: t.filterPlaceholder,
                variant: t.variant,
                unstyled: t.unstyled,
                role: "searchbox",
                autocomplete: "off",
                "aria-owns": t.$id + "_list",
                "aria-activedescendant": n.focusedOptionId,
                onKeydown: n.onFilterKeyDown,
                onBlur: n.onFilterBlur,
                onInput: n.onFilterChange,
                pt: t.ptm("pcFilter"),
                formControl: {
                  novalidate: !0
                }
              }, null, 8, ["value", "onVnodeMounted", "onVnodeUpdated", "class", "placeholder", "variant", "unstyled", "aria-owns", "aria-activedescendant", "onKeydown", "onBlur", "onInput", "pt"]), R(u, {
                unstyled: t.unstyled,
                pt: t.ptm("pcFilterIconContainer")
              }, {
                default: W(function() {
                  return [I(t.$slots, "filtericon", {}, function() {
                    return [t.filterIcon ? (p(), v("span", c({
                      key: 0,
                      class: t.filterIcon
                    }, t.ptm("filterIcon")), null, 16)) : (p(), N(d, Ze(c({
                      key: 1
                    }, t.ptm("filterIcon"))), null, 16))];
                  })];
                }),
                _: 3
              }, 8, ["unstyled", "pt"])];
            }),
            _: 3
          }, 8, ["unstyled", "pt"]), V("span", c({
            role: "status",
            "aria-live": "polite",
            class: "p-hidden-accessible"
          }, t.ptm("hiddenFilterResult"), {
            "data-p-hidden-accessible": !0
          }), D(n.filterResultMessageText), 17)], 16)) : K("", !0), V("div", c({
            class: t.cx("listContainer"),
            style: {
              "max-height": n.virtualScrollerDisabled ? t.scrollHeight : ""
            }
          }, t.ptm("listContainer")), [R(L, c({
            ref: n.virtualScrollerRef
          }, t.virtualScrollerOptions, {
            items: n.visibleOptions,
            style: {
              height: t.scrollHeight
            },
            tabindex: -1,
            disabled: n.virtualScrollerDisabled,
            pt: t.ptm("virtualScroller")
          }), Ye({
            content: W(function(g) {
              var C = g.styleClass, k = g.contentRef, z = g.items, f = g.getItemOptions, E = g.contentStyle, F = g.itemSize;
              return [V("ul", c({
                ref: function(b) {
                  return n.listRef(b, k);
                },
                id: t.$id + "_list",
                class: [t.cx("list"), C],
                style: E,
                role: "listbox"
              }, t.ptm("list")), [(p(!0), v(U, null, re(z, function(m, b) {
                return p(), v(U, {
                  key: n.getOptionRenderKey(m, n.getOptionIndex(b, f))
                }, [n.isOptionGroup(m) ? (p(), v("li", c({
                  key: 0,
                  id: t.$id + "_" + n.getOptionIndex(b, f),
                  style: {
                    height: F ? F + "px" : void 0
                  },
                  class: t.cx("optionGroup"),
                  role: "option"
                }, {
                  ref_for: !0
                }, t.ptm("optionGroup")), [I(t.$slots, "optiongroup", {
                  option: m.optionGroup,
                  index: n.getOptionIndex(b, f)
                }, function() {
                  return [V("span", c({
                    class: t.cx("optionGroupLabel")
                  }, {
                    ref_for: !0
                  }, t.ptm("optionGroupLabel")), D(n.getOptionGroupLabel(m.optionGroup)), 17)];
                })], 16, Ht)) : Je((p(), v("li", c({
                  key: 1,
                  id: t.$id + "_" + n.getOptionIndex(b, f),
                  class: t.cx("option", {
                    option: m,
                    focusedOption: n.getOptionIndex(b, f)
                  }),
                  style: {
                    height: F ? F + "px" : void 0
                  },
                  role: "option",
                  "aria-label": n.getOptionLabel(m),
                  "aria-selected": n.isSelected(m),
                  "aria-disabled": n.isOptionDisabled(m),
                  "aria-setsize": n.ariaSetSize,
                  "aria-posinset": n.getAriaPosInset(n.getOptionIndex(b, f)),
                  onMousedown: function(T) {
                    return n.onOptionSelect(T, m);
                  },
                  onMousemove: function(T) {
                    return n.onOptionMouseMove(T, n.getOptionIndex(b, f));
                  },
                  onClick: e[8] || (e[8] = Xe(function() {
                  }, ["stop"])),
                  "data-p-selected": !t.checkmark && n.isSelected(m),
                  "data-p-focused": l.focusedOptionIndex === n.getOptionIndex(b, f),
                  "data-p-disabled": n.isOptionDisabled(m)
                }, {
                  ref_for: !0
                }, n.getPTItemOptions(m, f, b, "option")), [t.checkmark ? (p(), v(U, {
                  key: 0
                }, [n.isSelected(m) ? (p(), N(h, c({
                  key: 0,
                  class: t.cx("optionCheckIcon")
                }, {
                  ref_for: !0
                }, t.ptm("optionCheckIcon")), null, 16, ["class"])) : (p(), N(y, c({
                  key: 1,
                  class: t.cx("optionBlankIcon")
                }, {
                  ref_for: !0
                }, t.ptm("optionBlankIcon")), null, 16, ["class"]))], 64)) : K("", !0), I(t.$slots, "option", {
                  option: m,
                  selected: n.isSelected(m),
                  index: n.getOptionIndex(b, f)
                }, function() {
                  return [V("span", c({
                    class: t.cx("optionLabel")
                  }, {
                    ref_for: !0
                  }, t.ptm("optionLabel")), D(n.getOptionLabel(m)), 17)];
                })], 16, Rt)), [[w]])], 64);
              }), 128)), l.filterValue && (!z || z && z.length === 0) ? (p(), v("li", c({
                key: 0,
                class: t.cx("emptyMessage"),
                role: "option"
              }, t.ptm("emptyMessage"), {
                "data-p-hidden-accessible": !0
              }), [I(t.$slots, "emptyfilter", {}, function() {
                return [oe(D(n.emptyFilterMessageText), 1)];
              })], 16)) : !t.options || t.options && t.options.length === 0 ? (p(), v("li", c({
                key: 1,
                class: t.cx("emptyMessage"),
                role: "option"
              }, t.ptm("emptyMessage"), {
                "data-p-hidden-accessible": !0
              }), [I(t.$slots, "empty", {}, function() {
                return [oe(D(n.emptyMessageText), 1)];
              })], 16)) : K("", !0)], 16, Dt)];
            }),
            _: 2
          }, [t.$slots.loader ? {
            name: "loader",
            fn: W(function(g) {
              var C = g.options;
              return [I(t.$slots, "loader", {
                options: C
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["items", "style", "disabled", "pt"])], 16), I(t.$slots, "footer", {
            value: t.d_value,
            options: n.visibleOptions
          }), !t.options || t.options && t.options.length === 0 ? (p(), v("span", c({
            key: 1,
            role: "status",
            "aria-live": "polite",
            class: "p-hidden-accessible"
          }, t.ptm("hiddenEmptyMessage"), {
            "data-p-hidden-accessible": !0
          }), D(n.emptyMessageText), 17)) : K("", !0), V("span", c({
            role: "status",
            "aria-live": "polite",
            class: "p-hidden-accessible"
          }, t.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": !0
          }), D(n.selectedMessageText), 17), V("span", c({
            ref: "lastHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            class: "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: e[9] || (e[9] = function() {
              return n.onLastHiddenFocus && n.onLastHiddenFocus.apply(n, arguments);
            })
          }, t.ptm("hiddenLastFocusableEl"), {
            "data-p-hidden-accessible": !0,
            "data-p-hidden-focusable": !0
          }), null, 16)], 16, xt)) : K("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16, Bt);
}
At.render = jt;
export {
  Ce as a,
  we as b,
  Se as c,
  At as s
};
