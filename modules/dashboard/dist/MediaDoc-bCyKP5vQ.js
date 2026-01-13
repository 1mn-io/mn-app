import { B as ae, d as b, z as B, Q as re, _ as pe, f as fe, g as ge, W as F, P as X, c as ve, m as Ne } from "./main-D_G-w7S7.js";
import { x as T } from "./index-C2FJQt9j.js";
import { F as be } from "./index-CL78q1g3.js";
import { s as ye } from "./index-iMqX-Zmx.js";
import { u as R, b as Ie } from "./index-BYEHnQEC.js";
import { s as V } from "./index-BAMK3x-S.js";
import { s as we } from "./index-BVtySscE.js";
import { R as H } from "./index-Lp1meMnh.js";
import { s as oe } from "./index-BIJOO1Qu.js";
import { s as le } from "./index-DdY8JBnT.js";
import { ae as E, a1 as d, H as s, a3 as c, a2 as m, a7 as x, m as l, G as f, J as I, F as k, a9 as L, E as C, a as v, I as S, ab as Ce, a8 as g, K as A, L as O, q as ze, p as Ee, a5 as Ke, a6 as Y, X as K, a0 as _e } from "./runtime-dom.esm-bundler-C71lIG0B.js";
import { s as Se } from "./index-DUlKYhAg.js";
import { s as ke } from "./index-C9pqwRap.js";
import { s as Me } from "./index-CrJ3tAxD.js";
import { s as U } from "./index-D4TuDGa1.js";
import { s as xe } from "./index-DPejeiSQ.js";
import { s as Re } from "./index-D2BYOCuM.js";
import { P as Fe } from "./ProductService-bZb9w0YO.js";
var He = `
    .p-galleria {
        overflow: hidden;
        border-style: solid;
        border-width: dt('galleria.border.width');
        border-color: dt('galleria.border.color');
        border-radius: dt('galleria.border.radius');
    }

    .p-galleria-content {
        display: flex;
        flex-direction: column;
    }

    .p-galleria-items-container {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .p-galleria-items {
        position: relative;
        display: flex;
        height: 100%;
    }

    .p-galleria-nav-button {
        position: absolute !important;
        top: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: dt('galleria.nav.button.background');
        color: dt('galleria.nav.button.color');
        width: dt('galleria.nav.button.size');
        height: dt('galleria.nav.button.size');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration'),
            box-shadow dt('galleria.transition.duration');
        margin: calc(-1 * calc(dt('galleria.nav.button.size')) / 2) dt('galleria.nav.button.gutter') 0 dt('galleria.nav.button.gutter');
        padding: 0;
        user-select: none;
        border: 0 none;
        cursor: pointer;
        outline-color: transparent;
    }

    .p-galleria-nav-button:not(.p-disabled):hover {
        background: dt('galleria.nav.button.hover.background');
        color: dt('galleria.nav.button.hover.color');
    }

    .p-galleria-nav-button:not(.p-disabled):focus-visible {
        box-shadow: dt('galleria.nav.button.focus.ring.shadow');
        outline: dt('galleria.nav.button.focus.ring.width') dt('galleria.nav.button.focus.ring.style') dt('galleria.nav.button.focus.ring.color');
        outline-offset: dt('galleria.nav.button.focus.ring.offset');
    }

    .p-galleria-next-icon,
    .p-galleria-prev-icon {
        font-size: dt('galleria.nav.icon.size');
        width: dt('galleria.nav.icon.size');
        height: dt('galleria.nav.icon.size');
    }

    .p-galleria-prev-button {
        border-radius: dt('galleria.nav.button.prev.border.radius');
        left: 0;
    }

    .p-galleria-next-button {
        border-radius: dt('galleria.nav.button.next.border.radius');
        right: 0;
    }

    .p-galleria-prev-button:dir(rtl) {
        left: auto;
        right: 0;
        transform: rotate(180deg);
    }

    .p-galleria-next-button:dir(rtl) {
        right: auto;
        left: 0;
        transform: rotate(180deg);
    }

    .p-galleria-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .p-galleria-hover-navigators .p-galleria-nav-button {
        pointer-events: none;
        opacity: 0;
        transition: opacity dt('galleria.transition.duration') ease-in-out;
    }

    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
        pointer-events: all;
        opacity: 1;
    }

    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
        pointer-events: none;
    }

    .p-galleria-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: dt('galleria.caption.background');
        color: dt('galleria.caption.color');
        padding: dt('galleria.caption.padding');
    }

    .p-galleria-thumbnails {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-shrink: 0;
    }

    .p-galleria-thumbnail-nav-button {
        align-self: center;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        margin: 0 dt('galleria.thumbnail.nav.button.gutter');
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
        background: transparent;
        color: dt('galleria.thumbnail.nav.button.color');
        width: dt('galleria.thumbnail.nav.button.size');
        height: dt('galleria.thumbnail.nav.button.size');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration');
        outline-color: transparent;
        border-radius: dt('galleria.thumbnail.nav.button.border.radius');
    }

    .p-galleria-thumbnail-nav-button:hover {
        background: dt('galleria.thumbnail.nav.button.hover.background');
        color: dt('galleria.thumbnail.nav.button.hover.color');
    }

    .p-galleria-thumbnail-nav-button:focus-visible {
        box-shadow: dt('galleria.thumbnail.nav.button.focus.ring.shadow');
        outline: dt('galleria.thumbnail.nav.button.focus.ring.width') dt('galleria.thumbnail.nav.button.focus.ring.style') dt('galleria.thumbnail.nav.button.focus.ring.color');
        outline-offset: dt('galleria.thumbnail.nav.button.focus.ring.offset');
    }

    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
        font-size: dt('galleria.thumbnail.nav.button.icon.size');
        width: dt('galleria.thumbnail.nav.button.icon.size');
        height: dt('galleria.thumbnail.nav.button.icon.size');
    }

    .p-galleria-thumbnails-content {
        display: flex;
        flex-direction: row;
        background: dt('galleria.thumbnails.content.background');
        padding: dt('galleria.thumbnails.content.padding');
    }

    .p-galleria-thumbnails-viewport {
        overflow: hidden;
        width: 100%;
    }

    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-galleria-thumbnail-items {
        display: flex;
    }

    .p-galleria-thumbnail-items:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-galleria-thumbnail-item {
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0.5;
    }

    .p-galleria-thumbnail {
        outline-color: transparent;
    }

    .p-galleria-thumbnail-item:hover {
        opacity: 1;
        transition: opacity 0.3s;
    }

    .p-galleria-thumbnail-item-current {
        opacity: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-content,
    .p-galleria-thumbnails-right .p-galleria-content {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-items-container,
    .p-galleria-thumbnails-right .p-galleria-items-container {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-items-container,
    .p-galleria-thumbnails-top .p-galleria-items-container {
        order: 2;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnails,
    .p-galleria-thumbnails-top .p-galleria-thumbnails {
        order: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnails-content,
    .p-galleria-thumbnails-right .p-galleria-thumbnails-content {
        flex-direction: column;
        flex-grow: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {
        flex-direction: column;
        height: 100%;
    }

    .p-galleria-indicator-list {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('galleria.indicator.list.padding');
        gap: dt('galleria.indicator.list.gap');
        margin: 0;
        list-style: none;
    }

    .p-galleria-indicator-button {
        display: inline-flex;
        align-items: center;
        background: dt('galleria.indicator.button.background');
        width: dt('galleria.indicator.button.width');
        height: dt('galleria.indicator.button.height');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration'),
            box-shadow dt('galleria.transition.duration');
        outline-color: transparent;
        border-radius: dt('galleria.indicator.button.border.radius');
        margin: 0;
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
    }

    .p-galleria-indicator-button:hover {
        background: dt('galleria.indicator.button.hover.background');
    }

    .p-galleria-indicator-button:focus-visible {
        box-shadow: dt('galleria.indicator.button.focus.ring.shadow');
        outline: dt('galleria.indicator.button.focus.ring.width') dt('galleria.indicator.button.focus.ring.style') dt('galleria.indicator.button.focus.ring.color');
        outline-offset: dt('galleria.indicator.button.focus.ring.offset');
    }

    .p-galleria-indicator-active .p-galleria-indicator-button {
        background: dt('galleria.indicator.button.active.background');
    }

    .p-galleria-indicators-left .p-galleria-items-container,
    .p-galleria-indicators-right .p-galleria-items-container {
        flex-direction: row;
        align-items: center;
    }

    .p-galleria-indicators-left .p-galleria-items,
    .p-galleria-indicators-top .p-galleria-items {
        order: 2;
    }

    .p-galleria-indicators-left .p-galleria-indicator-list,
    .p-galleria-indicators-top .p-galleria-indicator-list {
        order: 1;
    }

    .p-galleria-indicators-left .p-galleria-indicator-list,
    .p-galleria-indicators-right .p-galleria-indicator-list {
        flex-direction: column;
    }

    .p-galleria-inset-indicators .p-galleria-indicator-list {
        position: absolute;
        display: flex;
        z-index: 1;
        background: dt('galleria.inset.indicator.list.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-button {
        background: dt('galleria.inset.indicator.button.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-button:hover {
        background: dt('galleria.inset.indicator.button.hover.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
        background: dt('galleria.inset.indicator.button.active.background');
    }

    .p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
        top: 0;
        left: 0;
        width: 100%;
        align-items: flex-start;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
        right: 0;
        top: 0;
        height: 100%;
        align-items: flex-end;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: flex-end;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
        left: 0;
        top: 0;
        height: 100%;
        align-items: flex-start;
    }

    .p-galleria-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-galleria-close-button {
        position: absolute !important;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin: dt('galleria.close.button.gutter');
        background: dt('galleria.close.button.background');
        color: dt('galleria.close.button.color');
        width: dt('galleria.close.button.size');
        height: dt('galleria.close.button.size');
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
        border-radius: dt('galleria.close.button.border.radius');
        outline-color: transparent;
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration');
    }

    .p-galleria-close-icon {
        font-size: dt('galleria.close.button.icon.size');
        width: dt('galleria.close.button.icon.size');
        height: dt('galleria.close.button.icon.size');
    }

    .p-galleria-close-button:hover {
        background: dt('galleria.close.button.hover.background');
        color: dt('galleria.close.button.hover.color');
    }

    .p-galleria-close-button:focus-visible {
        box-shadow: dt('galleria.close.button.focus.ring.shadow');
        outline: dt('galleria.close.button.focus.ring.width') dt('galleria.close.button.focus.ring.style') dt('galleria.close.button.focus.ring.color');
        outline-offset: dt('galleria.close.button.focus.ring.offset');
    }

    .p-galleria-mask .p-galleria-nav-button {
        position: fixed;
        top: 50%;
    }

       .p-items-hidden .p-galleria-thumbnail-item {
        visibility: hidden;
    }

    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
        visibility: visible;
    }

    .p-galleria-enter-active {
        animation: p-animate-galleria-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-galleria-leave-active {
        animation: p-animate-galleria-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-galleria-enter-active .p-galleria-nav-button {
        opacity: 0;
    }

    @keyframes p-animate-galleria-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-galleria-leave {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`, Ue = {
  mask: "p-galleria-mask p-overlay-mask p-overlay-mask-enter-active",
  root: function(t) {
    var n = t.instance, a = n.$attrs.showThumbnails && n.getPositionClass("p-galleria-thumbnails", n.$attrs.thumbnailsPosition), r = n.$attrs.showIndicators && n.getPositionClass("p-galleria-indicators", n.$attrs.indicatorsPosition);
    return ["p-galleria p-component", {
      "p-galleria-fullscreen": n.$attrs.fullScreen,
      "p-galleria-inset-indicators": n.$attrs.showIndicatorsOnItem,
      "p-galleria-hover-navigators": n.$attrs.showItemNavigatorsOnHover && !n.$attrs.fullScreen
    }, a, r];
  },
  closeButton: "p-galleria-close-button",
  closeIcon: "p-galleria-close-icon",
  header: "p-galleria-header",
  content: "p-galleria-content",
  footer: "p-galleria-footer",
  itemsContainer: "p-galleria-items-container",
  items: "p-galleria-items",
  prevButton: function(t) {
    var n = t.instance;
    return ["p-galleria-prev-button p-galleria-nav-button", {
      "p-disabled": n.isNavBackwardDisabled
    }];
  },
  prevIcon: "p-galleria-prev-icon",
  item: "p-galleria-item",
  nextButton: function(t) {
    var n = t.instance;
    return ["p-galleria-next-button p-galleria-nav-button", {
      "p-disabled": n.isNavForwardDisabled
    }];
  },
  nextIcon: "p-galleria-next-icon",
  caption: "p-galleria-caption",
  indicatorList: "p-galleria-indicator-list",
  indicator: function(t) {
    var n = t.instance, a = t.index;
    return ["p-galleria-indicator", {
      "p-galleria-indicator-active": n.isIndicatorItemActive(a)
    }];
  },
  indicatorButton: "p-galleria-indicator-button",
  thumbnails: "p-galleria-thumbnails",
  thumbnailContent: "p-galleria-thumbnails-content",
  thumbnailPrevButton: function(t) {
    var n = t.instance;
    return ["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button", {
      "p-disabled": n.isNavBackwardDisabled
    }];
  },
  thumbnailPrevIcon: "p-galleria-thumbnail-prev-icon",
  thumbnailsViewport: "p-galleria-thumbnails-viewport",
  thumbnailItems: "p-galleria-thumbnail-items",
  thumbnailItem: function(t) {
    var n = t.instance, a = t.index, r = t.activeIndex;
    return ["p-galleria-thumbnail-item", {
      "p-galleria-thumbnail-item-current": r === a,
      "p-galleria-thumbnail-item-active": n.isItemActive(a),
      "p-galleria-thumbnail-item-start": n.firstItemAciveIndex() === a,
      "p-galleria-thumbnail-item-end": n.lastItemActiveIndex() === a
    }];
  },
  thumbnail: "p-galleria-thumbnail",
  thumbnailNextButton: function(t) {
    var n = t.instance;
    return ["p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button", {
      "p-disabled": n.isNavForwardDisabled
    }];
  },
  thumbnailNextIcon: "p-galleria-thumbnail-next-icon"
}, Ge = ae.extend({
  name: "galleria",
  style: He,
  classes: Ue
}), Ze = {
  name: "BaseGalleria",
  extends: V,
  props: {
    id: {
      type: String,
      default: null
    },
    value: {
      type: Array,
      default: null
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    fullScreen: {
      type: Boolean,
      default: !1
    },
    visible: {
      type: Boolean,
      default: !1
    },
    numVisible: {
      type: Number,
      default: 3
    },
    responsiveOptions: {
      type: Array,
      default: null
    },
    showItemNavigators: {
      type: Boolean,
      default: !1
    },
    showThumbnailNavigators: {
      type: Boolean,
      default: !0
    },
    showItemNavigatorsOnHover: {
      type: Boolean,
      default: !1
    },
    changeItemOnIndicatorHover: {
      type: Boolean,
      default: !1
    },
    circular: {
      type: Boolean,
      default: !1
    },
    autoPlay: {
      type: Boolean,
      default: !1
    },
    transitionInterval: {
      type: Number,
      default: 4e3
    },
    showThumbnails: {
      type: Boolean,
      default: !0
    },
    thumbnailsPosition: {
      type: String,
      default: "bottom"
    },
    verticalThumbnailViewPortHeight: {
      type: String,
      default: "300px"
    },
    showIndicators: {
      type: Boolean,
      default: !1
    },
    showIndicatorsOnItem: {
      type: Boolean,
      default: !1
    },
    indicatorsPosition: {
      type: String,
      default: "bottom"
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    maskClass: {
      type: String,
      default: null
    },
    containerStyle: {
      type: null,
      default: null
    },
    containerClass: {
      type: null,
      default: null
    },
    containerProps: {
      type: null,
      default: null
    },
    prevButtonProps: {
      type: null,
      default: null
    },
    nextButtonProps: {
      type: null,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    },
    ariaRoledescription: {
      type: String,
      default: null
    }
  },
  style: Ge,
  provide: function() {
    return {
      $pcGalleria: this,
      $parentInstance: this
    };
  }
};
function $(e) {
  return qe(e) || Ye(e) || Xe(e) || We();
}
function We() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xe(e, t) {
  if (e) {
    if (typeof e == "string") return q(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? q(e, t) : void 0;
  }
}
function Ye(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function qe(e) {
  if (Array.isArray(e)) return q(e);
}
function q(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
  return a;
}
var Ae = {
  name: "GalleriaItem",
  hostName: "Galleria",
  extends: V,
  emits: ["start-slideshow", "stop-slideshow", "update:activeIndex"],
  props: {
    circular: {
      type: Boolean,
      default: !1
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    value: {
      type: Array,
      default: null
    },
    showItemNavigators: {
      type: Boolean,
      default: !0
    },
    showIndicators: {
      type: Boolean,
      default: !0
    },
    slideShowActive: {
      type: Boolean,
      default: !0
    },
    changeItemOnIndicatorHover: {
      type: Boolean,
      default: !0
    },
    autoPlay: {
      type: Boolean,
      default: !1
    },
    templates: {
      type: null,
      default: null
    },
    id: {
      type: String,
      default: null
    }
  },
  mounted: function() {
    this.autoPlay && this.$emit("start-slideshow");
  },
  methods: {
    getIndicatorPTOptions: function(t) {
      return {
        context: {
          highlighted: this.activeIndex === t
        }
      };
    },
    next: function() {
      var t = this.activeIndex + 1, n = this.circular && this.value.length - 1 === this.activeIndex ? 0 : t;
      this.$emit("update:activeIndex", n);
    },
    prev: function() {
      var t = this.activeIndex !== 0 ? this.activeIndex - 1 : 0, n = this.circular && this.activeIndex === 0 ? this.value.length - 1 : t;
      this.$emit("update:activeIndex", n);
    },
    stopSlideShow: function() {
      this.slideShowActive && this.stopSlideShow && this.$emit("stop-slideshow");
    },
    navBackward: function(t) {
      this.stopSlideShow(), this.prev(), t && t.cancelable && t.preventDefault();
    },
    navForward: function(t) {
      this.stopSlideShow(), this.next(), t && t.cancelable && t.preventDefault();
    },
    onIndicatorClick: function(t) {
      this.stopSlideShow(), this.$emit("update:activeIndex", t);
    },
    onIndicatorMouseEnter: function(t) {
      this.changeItemOnIndicatorHover && (this.stopSlideShow(), this.$emit("update:activeIndex", t));
    },
    onIndicatorKeyDown: function(t, n) {
      switch (t.code) {
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.stopSlideShow(), this.$emit("update:activeIndex", n), t.preventDefault();
          break;
        case "ArrowRight":
          this.onRightKey();
          break;
        case "ArrowLeft":
          this.onLeftKey();
          break;
        case "Home":
          this.onHomeKey(), t.preventDefault();
          break;
        case "End":
          this.onEndKey(), t.preventDefault();
          break;
        case "Tab":
          this.onTabKey();
          break;
        case "ArrowDown":
        case "ArrowUp":
        case "PageUp":
        case "PageDown":
          t.preventDefault();
          break;
      }
    },
    onRightKey: function() {
      var t = $(b(this.$refs.indicatorContent, '[data-pc-section="indicator"]')), n = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(n, n + 1 === t.length ? t.length - 1 : n + 1);
    },
    onLeftKey: function() {
      var t = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(t, t - 1 <= 0 ? 0 : t - 1);
    },
    onHomeKey: function() {
      var t = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(t, 0);
    },
    onEndKey: function() {
      var t = $(b(this.$refs.indicatorContent, '[data-pc-section="indicator"]')), n = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(n, t.length - 1);
    },
    onTabKey: function() {
      var t = $(b(this.$refs.indicatorContent, '[data-pc-section="indicator"]')), n = t.findIndex(function(i) {
        return re(i, "data-p-active") === !0;
      }), a = B(this.$refs.indicatorContent, '[data-pc-section="indicator"] > [tabindex="0"]'), r = t.findIndex(function(i) {
        return i === a.parentElement;
      });
      t[r].children[0].tabIndex = "-1", t[n].children[0].tabIndex = "0";
    },
    findFocusedIndicatorIndex: function() {
      var t = $(b(this.$refs.indicatorContent, '[data-pc-section="indicator"]')), n = B(this.$refs.indicatorContent, '[data-pc-section="indicator"] > [tabindex="0"]');
      return t.findIndex(function(a) {
        return a === n.parentElement;
      });
    },
    changedFocusedIndicator: function(t, n) {
      var a = $(b(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      a[t].children[0].tabIndex = "-1", a[n].children[0].tabIndex = "0", a[n].children[0].focus();
    },
    isIndicatorItemActive: function(t) {
      return this.activeIndex === t;
    },
    ariaSlideNumber: function(t) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g, t) : void 0;
    },
    ariaPageLabel: function(t) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, t) : void 0;
    }
  },
  computed: {
    activeItem: function() {
      return this.value[this.activeIndex];
    },
    ariaSlideLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slide : void 0;
    },
    isNavBackwardDisabled: function() {
      return !this.circular && this.activeIndex === 0;
    },
    isNavForwardDisabled: function() {
      return !this.circular && this.activeIndex === this.value.length - 1;
    }
  },
  components: {
    ChevronLeftIcon: oe,
    ChevronRightIcon: le
  },
  directives: {
    ripple: H
  }
}, Je = ["disabled"], Qe = ["id", "aria-label", "aria-roledescription"], et = ["disabled"], tt = ["aria-label", "aria-selected", "aria-controls", "onClick", "onMouseenter", "onKeydown", "data-p-active"], nt = ["tabindex"];
function it(e, t, n, a, r, i) {
  var h = E("ripple");
  return s(), d("div", l({
    class: e.cx("itemsContainer")
  }, e.ptm("itemsContainer")), [c("div", l({
    class: e.cx("items")
  }, e.ptm("items")), [n.showItemNavigators ? x((s(), d("button", l({
    key: 0,
    type: "button",
    class: e.cx("prevButton"),
    onClick: t[0] || (t[0] = function(u) {
      return i.navBackward(u);
    }),
    disabled: i.isNavBackwardDisabled
  }, e.ptm("prevButton"), {
    "data-pc-group-section": "itemnavigator"
  }), [(s(), f(I(n.templates.previousitemicon || "ChevronLeftIcon"), l({
    class: e.cx("prevIcon")
  }, e.ptm("prevIcon")), null, 16, ["class"]))], 16, Je)), [[h]]) : m("", !0), c("div", l({
    id: n.id + "_item_" + n.activeIndex,
    class: e.cx("item"),
    role: "group",
    "aria-label": i.ariaSlideNumber(n.activeIndex + 1),
    "aria-roledescription": i.ariaSlideLabel
  }, e.ptm("item")), [n.templates.item ? (s(), f(I(n.templates.item), {
    key: 0,
    item: i.activeItem
  }, null, 8, ["item"])) : m("", !0)], 16, Qe), n.showItemNavigators ? x((s(), d("button", l({
    key: 1,
    type: "button",
    class: e.cx("nextButton"),
    onClick: t[1] || (t[1] = function(u) {
      return i.navForward(u);
    }),
    disabled: i.isNavForwardDisabled
  }, e.ptm("nextButton"), {
    "data-pc-group-section": "itemnavigator"
  }), [(s(), f(I(n.templates.nextitemicon || "ChevronRightIcon"), l({
    class: e.cx("nextIcon")
  }, e.ptm("nextIcon")), null, 16, ["class"]))], 16, et)), [[h]]) : m("", !0), n.templates.caption ? (s(), d("div", l({
    key: 2,
    class: e.cx("caption")
  }, e.ptm("caption")), [n.templates.caption ? (s(), f(I(n.templates.caption), {
    key: 0,
    item: i.activeItem
  }, null, 8, ["item"])) : m("", !0)], 16)) : m("", !0)], 16), n.showIndicators ? (s(), d("ul", l({
    key: 0,
    ref: "indicatorContent",
    class: e.cx("indicatorList")
  }, e.ptm("indicatorList")), [(s(!0), d(k, null, L(n.value, function(u, o) {
    return s(), d("li", l({
      key: "p-galleria-indicator-".concat(o),
      class: e.cx("indicator", {
        index: o
      }),
      "aria-label": i.ariaPageLabel(o + 1),
      "aria-selected": n.activeIndex === o,
      "aria-controls": n.id + "_item_" + o,
      onClick: function(y) {
        return i.onIndicatorClick(o);
      },
      onMouseenter: function(y) {
        return i.onIndicatorMouseEnter(o);
      },
      onKeydown: function(y) {
        return i.onIndicatorKeyDown(y, o);
      }
    }, {
      ref_for: !0
    }, e.ptm("indicator", i.getIndicatorPTOptions(o)), {
      "data-p-active": i.isIndicatorItemActive(o)
    }), [n.templates.indicator ? m("", !0) : (s(), d("button", l({
      key: 0,
      type: "button",
      tabindex: n.activeIndex === o ? "0" : "-1",
      class: e.cx("indicatorButton")
    }, {
      ref_for: !0
    }, e.ptm("indicatorButton", i.getIndicatorPTOptions(o))), null, 16, nt)), n.templates.indicator ? (s(), f(I(n.templates.indicator), {
      key: 1,
      index: o,
      activeIndex: n.activeIndex,
      tabindex: n.activeIndex === o ? "0" : "-1"
    }, null, 8, ["index", "activeIndex", "tabindex"])) : m("", !0)], 16, tt);
  }), 128))], 16)) : m("", !0)], 16);
}
Ae.render = it;
function W(e) {
  return lt(e) || ot(e) || rt(e) || at();
}
function at() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rt(e, t) {
  if (e) {
    if (typeof e == "string") return J(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? J(e, t) : void 0;
  }
}
function ot(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function lt(e) {
  if (Array.isArray(e)) return J(e);
}
function J(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
  return a;
}
var Pe = {
  name: "GalleriaThumbnails",
  hostName: "Galleria",
  extends: V,
  emits: ["stop-slideshow", "update:activeIndex"],
  props: {
    containerId: {
      type: String,
      default: null
    },
    value: {
      type: Array,
      default: null
    },
    numVisible: {
      type: Number,
      default: 3
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    isVertical: {
      type: Boolean,
      default: !1
    },
    slideShowActive: {
      type: Boolean,
      default: !1
    },
    circular: {
      type: Boolean,
      default: !1
    },
    responsiveOptions: {
      type: Array,
      default: null
    },
    contentHeight: {
      type: String,
      default: "300px"
    },
    showThumbnailNavigators: {
      type: Boolean,
      default: !0
    },
    templates: {
      type: null,
      default: null
    },
    prevButtonProps: {
      type: null,
      default: null
    },
    nextButtonProps: {
      type: null,
      default: null
    }
  },
  startPos: null,
  thumbnailsStyle: null,
  sortedResponsiveOptions: null,
  data: function() {
    return {
      d_numVisible: this.numVisible,
      d_oldNumVisible: this.numVisible,
      d_activeIndex: this.activeIndex,
      d_oldActiveItemIndex: this.activeIndex,
      totalShiftedItems: 0,
      page: 0
    };
  },
  watch: {
    numVisible: function(t, n) {
      this.d_numVisible = t, this.d_oldNumVisible = n;
    },
    activeIndex: function(t, n) {
      this.d_activeIndex = t, this.d_oldActiveItemIndex = n;
    }
  },
  mounted: function() {
    this.createStyle(), this.calculatePosition(), this.responsiveOptions && this.bindDocumentListeners();
  },
  updated: function() {
    var t = this.totalShiftedItems;
    (this.d_oldNumVisible !== this.d_numVisible || this.d_oldActiveItemIndex !== this.d_activeIndex) && (this.d_activeIndex <= this.getMedianItemIndex() ? t = 0 : this.value.length - this.d_numVisible + this.getMedianItemIndex() < this.d_activeIndex ? t = this.d_numVisible - this.value.length : this.value.length - this.d_numVisible < this.d_activeIndex && this.d_numVisible % 2 === 0 ? t = this.d_activeIndex * -1 + this.getMedianItemIndex() + 1 : t = this.d_activeIndex * -1 + this.getMedianItemIndex(), t !== this.totalShiftedItems && (this.totalShiftedItems = t), this.$refs.itemsContainer.style.transform = this.isVertical ? "translate3d(0, ".concat(t * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(t * (100 / this.d_numVisible), "%, 0, 0)"), this.d_oldActiveItemIndex !== this.d_activeIndex && (document.body.setAttribute("data-p-items-hidden", "false"), !this.isUnstyled && X(this.$refs.itemsContainer, "p-items-hidden"), this.$refs.itemsContainer.style.transition = "transform 500ms ease 0s"), this.d_oldActiveItemIndex = this.d_activeIndex, this.d_oldNumVisible = this.d_numVisible);
  },
  beforeUnmount: function() {
    this.responsiveOptions && this.unbindDocumentListeners(), this.thumbnailsStyle && this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
  },
  methods: {
    step: function(t) {
      var n = this.totalShiftedItems + t;
      t < 0 && -1 * n + this.d_numVisible > this.value.length - 1 ? n = this.d_numVisible - this.value.length : t > 0 && n > 0 && (n = 0), this.circular && (t < 0 && this.value.length - 1 === this.d_activeIndex ? n = 0 : t > 0 && this.d_activeIndex === 0 && (n = this.d_numVisible - this.value.length)), this.$refs.itemsContainer && (document.body.setAttribute("data-p-items-hidden", "false"), !this.isUnstyled && X(this.$refs.itemsContainer, "p-items-hidden"), this.$refs.itemsContainer.style.transform = this.isVertical ? "translate3d(0, ".concat(n * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(n * (100 / this.d_numVisible), "%, 0, 0)"), this.$refs.itemsContainer.style.transition = "transform 500ms ease 0s"), this.totalShiftedItems = n;
    },
    stopSlideShow: function() {
      this.slideShowActive && this.stopSlideShow && this.$emit("stop-slideshow");
    },
    getMedianItemIndex: function() {
      var t = Math.floor(this.d_numVisible / 2);
      return this.d_numVisible % 2 ? t : t - 1;
    },
    navBackward: function(t) {
      this.stopSlideShow();
      var n = this.d_activeIndex !== 0 ? this.d_activeIndex - 1 : 0, a = n + this.totalShiftedItems;
      this.d_numVisible - a - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular) && this.step(1);
      var r = this.circular && this.d_activeIndex === 0 ? this.value.length - 1 : n;
      this.$emit("update:activeIndex", r), t.cancelable && t.preventDefault();
    },
    navForward: function(t) {
      this.stopSlideShow();
      var n = this.d_activeIndex === this.value.length - 1 ? this.value.length - 1 : this.d_activeIndex + 1;
      n + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular) && this.step(-1);
      var a = this.circular && this.value.length - 1 === this.d_activeIndex ? 0 : n;
      this.$emit("update:activeIndex", a), t.cancelable && t.preventDefault();
    },
    onItemClick: function(t) {
      this.stopSlideShow();
      var n = t;
      if (n !== this.d_activeIndex) {
        var a = n + this.totalShiftedItems, r = 0;
        n < this.d_activeIndex ? (r = this.d_numVisible - a - 1 - this.getMedianItemIndex(), r > 0 && -1 * this.totalShiftedItems !== 0 && this.step(r)) : (r = this.getMedianItemIndex() - a, r < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 && this.step(r)), this.$emit("update:activeIndex", n);
      }
    },
    onThumbnailKeydown: function(t, n) {
      switch ((t.code === "Enter" || t.code === "NumpadEnter" || t.code === "Space") && (this.onItemClick(n), t.preventDefault()), t.code) {
        case "ArrowRight":
          this.onRightKey();
          break;
        case "ArrowLeft":
          this.onLeftKey();
          break;
        case "Home":
          this.onHomeKey(), t.preventDefault();
          break;
        case "End":
          this.onEndKey(), t.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
          t.preventDefault();
          break;
        case "Tab":
          this.onTabKey();
          break;
      }
    },
    onRightKey: function() {
      var t = b(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]'), n = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(n, n + 1 === t.length ? t.length - 1 : n + 1);
    },
    onLeftKey: function() {
      var t = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(t, t - 1 <= 0 ? 0 : t - 1);
    },
    onHomeKey: function() {
      var t = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(t, 0);
    },
    onEndKey: function() {
      var t = b(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]'), n = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(n, t.length - 1);
    },
    onTabKey: function() {
      var t = W(b(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]')), n = t.findIndex(function(i) {
        return re(i, "data-p-active") === !0;
      }), a = B(this.$refs.itemsContainer, '[tabindex="0"]'), r = t.findIndex(function(i) {
        return i === a.parentElement;
      });
      t[r].children[0].tabIndex = "-1", t[n].children[0].tabIndex = "0";
    },
    findFocusedIndicatorIndex: function() {
      var t = W(b(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]')), n = B(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"] > [tabindex="0"]');
      return t.findIndex(function(a) {
        return a === n.parentElement;
      });
    },
    changedFocusedIndicator: function(t, n) {
      var a = b(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]');
      a[t].children[0].tabIndex = "-1", a[n].children[0].tabIndex = "0", a[n].children[0].focus();
    },
    onTransitionEnd: function(t) {
      this.$refs.itemsContainer && t.propertyName === "transform" && (document.body.setAttribute("data-p-items-hidden", "true"), !this.isUnstyled && F(this.$refs.itemsContainer, "p-items-hidden"), this.$refs.itemsContainer.style.transition = "");
    },
    onTouchStart: function(t) {
      var n = t.changedTouches[0];
      this.startPos = {
        x: n.pageX,
        y: n.pageY
      };
    },
    onTouchMove: function(t) {
      t.cancelable && t.preventDefault();
    },
    onTouchEnd: function(t) {
      var n = t.changedTouches[0];
      this.isVertical ? this.changePageOnTouch(t, n.pageY - this.startPos.y) : this.changePageOnTouch(t, n.pageX - this.startPos.x);
    },
    changePageOnTouch: function(t, n) {
      var a = 10;
      Math.abs(n) < a || (n < 0 ? this.navForward(t) : this.navBackward(t));
    },
    getTotalPageNumber: function() {
      return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
    },
    createStyle: function() {
      if (!this.thumbnailsStyle) {
        var t;
        this.thumbnailsStyle = document.createElement("style"), this.thumbnailsStyle.type = "text/css", pe(this.thumbnailsStyle, "nonce", (t = this.$primevue) === null || t === void 0 || (t = t.config) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce), document.body.appendChild(this.thumbnailsStyle);
      }
      var n = `
                #`.concat(this.containerId, ` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100 / this.d_numVisible, `%
                }
            `);
      if (this.responsiveOptions && !this.isUnstyled) {
        this.sortedResponsiveOptions = W(this.responsiveOptions);
        var a = fe();
        this.sortedResponsiveOptions.sort(function(h, u) {
          var o = h.breakpoint, p = u.breakpoint;
          return ge(o, p, -1, a);
        });
        for (var r = 0; r < this.sortedResponsiveOptions.length; r++) {
          var i = this.sortedResponsiveOptions[r];
          n += `
                        @media screen and (max-width: `.concat(i.breakpoint, `) {
                            #`).concat(this.containerId, ` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100 / i.numVisible, `%
                            }
                        }
                    `);
        }
      }
      this.thumbnailsStyle.innerHTML = n;
    },
    calculatePosition: function() {
      if (this.$refs.itemsContainer && this.sortedResponsiveOptions) {
        for (var t = window.innerWidth, n = {
          numVisible: this.numVisible
        }, a = 0; a < this.sortedResponsiveOptions.length; a++) {
          var r = this.sortedResponsiveOptions[a];
          parseInt(r.breakpoint, 10) >= t && (n = r);
        }
        this.d_numVisible !== n.numVisible && (this.d_numVisible = n.numVisible);
      }
    },
    bindDocumentListeners: function() {
      var t = this;
      this.documentResizeListener || (this.documentResizeListener = function() {
        t.calculatePosition();
      }, window.addEventListener("resize", this.documentResizeListener));
    },
    unbindDocumentListeners: function() {
      this.documentResizeListener && (window.removeEventListener("resize", this.documentResizeListener), this.documentResizeListener = null);
    },
    firstItemAciveIndex: function() {
      return this.totalShiftedItems * -1;
    },
    lastItemActiveIndex: function() {
      return this.firstItemAciveIndex() + this.d_numVisible - 1;
    },
    isItemActive: function(t) {
      return this.firstItemAciveIndex() <= t && this.lastItemActiveIndex() >= t;
    },
    ariaPageLabel: function(t) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, t) : void 0;
    }
  },
  computed: {
    ariaPrevButtonLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.prevPageLabel : void 0;
    },
    ariaNextButtonLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.nextPageLabel : void 0;
    },
    isNavBackwardDisabled: function() {
      return !this.circular && this.d_activeIndex === 0 || this.value.length <= this.d_numVisible;
    },
    isNavForwardDisabled: function() {
      return !this.circular && this.d_activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
    }
  },
  components: {
    ChevronLeftIcon: oe,
    ChevronRightIcon: le,
    ChevronUpIcon: ke,
    ChevronDownIcon: Se
  },
  directives: {
    ripple: H
  }
};
function j(e) {
  "@babel/helpers - typeof";
  return j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, j(e);
}
function se(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? se(Object(n), !0).forEach(function(a) {
      st(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function st(e, t, n) {
  return (t = ut(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ut(e) {
  var t = ct(e, "string");
  return j(t) == "symbol" ? t : t + "";
}
function ct(e, t) {
  if (j(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t);
    if (j(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var dt = ["disabled", "aria-label"], mt = ["data-p-active", "aria-selected", "aria-controls", "onKeydown", "data-p-galleria-thumbnail-item-current", "data-p-galleria-thumbnail-item-active", "data-p-galleria-thumbnail-item-start", "data-p-galleria-thumbnail-item-end"], ht = ["tabindex", "aria-label", "aria-current", "onClick"], pt = ["disabled", "aria-label"];
function ft(e, t, n, a, r, i) {
  var h = E("ripple");
  return s(), d("div", l({
    class: e.cx("thumbnails")
  }, e.ptm("thumbnails")), [c("div", l({
    class: e.cx("thumbnailContent")
  }, e.ptm("thumbnailContent")), [n.showThumbnailNavigators ? x((s(), d("button", l({
    key: 0,
    class: e.cx("thumbnailPrevButton"),
    disabled: i.isNavBackwardDisabled,
    type: "button",
    "aria-label": i.ariaPrevButtonLabel,
    onClick: t[0] || (t[0] = function(u) {
      return i.navBackward(u);
    })
  }, _(_({}, n.prevButtonProps), e.ptm("thumbnailPrevButton")), {
    "data-pc-group-section": "thumbnailnavigator"
  }), [(s(), f(I(n.templates.previousthumbnailicon || (n.isVertical ? "ChevronUpIcon" : "ChevronLeftIcon")), l({
    class: e.cx("thumbnailPrevIcon")
  }, e.ptm("thumbnailPrevIcon")), null, 16, ["class"]))], 16, dt)), [[h]]) : m("", !0), c("div", l({
    class: e.cx("thumbnailsViewport"),
    style: {
      height: n.isVertical ? n.contentHeight : ""
    }
  }, e.ptm("thumbnailsViewport")), [c("div", l({
    ref: "itemsContainer",
    class: e.cx("thumbnailItems"),
    role: "tablist",
    onTransitionend: t[1] || (t[1] = function(u) {
      return i.onTransitionEnd(u);
    }),
    onTouchstart: t[2] || (t[2] = function(u) {
      return i.onTouchStart(u);
    }),
    onTouchmove: t[3] || (t[3] = function(u) {
      return i.onTouchMove(u);
    }),
    onTouchend: t[4] || (t[4] = function(u) {
      return i.onTouchEnd(u);
    })
  }, e.ptm("thumbnailItems")), [(s(!0), d(k, null, L(n.value, function(u, o) {
    return s(), d("div", l({
      key: "p-galleria-thumbnail-item-".concat(o),
      class: e.cx("thumbnailItem", {
        index: o,
        activeIndex: n.activeIndex
      }),
      role: "tab",
      "data-p-active": n.activeIndex === o,
      "aria-selected": n.activeIndex === o,
      "aria-controls": n.containerId + "_item_" + o,
      onKeydown: function(y) {
        return i.onThumbnailKeydown(y, o);
      }
    }, {
      ref_for: !0
    }, e.ptm("thumbnailItem"), {
      "data-p-galleria-thumbnail-item-current": n.activeIndex === o,
      "data-p-galleria-thumbnail-item-active": i.isItemActive(o),
      "data-p-galleria-thumbnail-item-start": i.firstItemAciveIndex() === o,
      "data-p-galleria-thumbnail-item-end": i.lastItemActiveIndex() === o
    }), [c("div", l({
      class: e.cx("thumbnail"),
      tabindex: n.activeIndex === o ? "0" : "-1",
      "aria-label": i.ariaPageLabel(o + 1),
      "aria-current": n.activeIndex === o ? "page" : void 0,
      onClick: function(y) {
        return i.onItemClick(o);
      }
    }, {
      ref_for: !0
    }, e.ptm("thumbnail")), [n.templates.thumbnail ? (s(), f(I(n.templates.thumbnail), {
      key: 0,
      item: u
    }, null, 8, ["item"])) : m("", !0)], 16, ht)], 16, mt);
  }), 128))], 16)], 16), n.showThumbnailNavigators ? x((s(), d("button", l({
    key: 1,
    class: e.cx("thumbnailNextButton"),
    disabled: i.isNavForwardDisabled,
    type: "button",
    "aria-label": i.ariaNextButtonLabel,
    onClick: t[5] || (t[5] = function(u) {
      return i.navForward(u);
    })
  }, _(_({}, n.nextButtonProps), e.ptm("thumbnailNextButton")), {
    "data-pc-group-section": "thumbnailnavigator"
  }), [(s(), f(I(n.templates.nextthumbnailicon || (n.isVertical ? "ChevronDownIcon" : "ChevronRightIcon")), l({
    class: e.cx("thumbnailNextIcon")
  }, e.ptm("thumbnailNextIcon")), null, 16, ["class"]))], 16, pt)), [[h]]) : m("", !0)], 16)], 16);
}
Pe.render = ft;
function D(e) {
  "@babel/helpers - typeof";
  return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, D(e);
}
function ue(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ue(Object(n), !0).forEach(function(a) {
      gt(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ue(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function gt(e, t, n) {
  return (t = vt(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function vt(e) {
  var t = bt(e, "string");
  return D(t) == "symbol" ? t : t + "";
}
function bt(e, t) {
  if (D(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t);
    if (D(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Le = {
  name: "GalleriaContent",
  hostName: "Galleria",
  extends: V,
  inheritAttrs: !1,
  interval: null,
  emits: ["activeitem-change", "mask-hide"],
  data: function() {
    return {
      activeIndex: this.$attrs.activeIndex,
      numVisible: this.$attrs.numVisible,
      slideShowActive: !1
    };
  },
  watch: {
    "$attrs.value": function(t) {
      t && t.length < this.numVisible && (this.numVisible = t.length);
    },
    "$attrs.activeIndex": function(t) {
      this.activeIndex = t;
    },
    "$attrs.numVisible": function(t) {
      this.numVisible = t;
    },
    "$attrs.autoPlay": function(t) {
      t ? this.startSlideShow() : this.stopSlideShow();
    }
  },
  updated: function() {
    this.$emit("activeitem-change", this.activeIndex);
  },
  beforeUnmount: function() {
    this.slideShowActive && this.stopSlideShow();
  },
  methods: {
    getPTOptions: function(t) {
      return this.ptm(t, {
        props: ce(ce({}, this.$attrs), {}, {
          pt: this.pt,
          unstyled: this.unstyled
        })
      });
    },
    isAutoPlayActive: function() {
      return this.slideShowActive;
    },
    startSlideShow: function() {
      var t = this;
      this.interval = setInterval(function() {
        var n = t.$attrs.circular && t.$attrs.value.length - 1 === t.activeIndex ? 0 : t.activeIndex + 1;
        t.activeIndex = n;
      }, this.$attrs.transitionInterval), this.slideShowActive = !0;
    },
    stopSlideShow: function() {
      this.interval && clearInterval(this.interval), this.slideShowActive = !1;
    },
    getPositionClass: function(t, n) {
      var a = ["top", "left", "bottom", "right"], r = a.find(function(i) {
        return i === n;
      });
      return r ? "".concat(t, "-").concat(r) : "";
    },
    isVertical: function() {
      return this.$attrs.thumbnailsPosition === "left" || this.$attrs.thumbnailsPosition === "right";
    }
  },
  computed: {
    closeAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  components: {
    GalleriaItem: Ae,
    GalleriaThumbnails: Pe,
    TimesIcon: we
  },
  directives: {
    ripple: H
  }
};
function N(e) {
  "@babel/helpers - typeof";
  return N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, N(e);
}
function de(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? de(Object(n), !0).forEach(function(a) {
      yt(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function yt(e, t, n) {
  return (t = It(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function It(e) {
  var t = wt(e, "string");
  return N(t) == "symbol" ? t : t + "";
}
function wt(e, t) {
  if (N(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t);
    if (N(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ct = ["id", "aria-label", "aria-roledescription"], St = ["aria-label"], kt = ["aria-live"];
function xt(e, t, n, a, r, i) {
  var h = C("GalleriaItem"), u = C("GalleriaThumbnails"), o = E("ripple");
  return e.$attrs.value && e.$attrs.value.length > 0 ? (s(), d("div", l({
    key: 0,
    id: e.$id,
    role: "region",
    class: [e.cx("root"), e.$attrs.containerClass],
    style: e.$attrs.containerStyle,
    "aria-label": e.$attrs.ariaLabel,
    "aria-roledescription": e.$attrs.ariaRoledescription
  }, me(me({}, e.$attrs.containerProps), i.getPTOptions("root"))), [e.$attrs.fullScreen ? x((s(), d("button", l({
    key: 0,
    autofocus: "",
    type: "button",
    class: e.cx("closeButton"),
    "aria-label": i.closeAriaLabel,
    onClick: t[0] || (t[0] = function(p) {
      return e.$emit("mask-hide");
    })
  }, i.getPTOptions("closeButton")), [(s(), f(I(e.$attrs.templates.closeicon || "TimesIcon"), l({
    class: e.cx("closeIcon")
  }, i.getPTOptions("closeIcon")), null, 16, ["class"]))], 16, St)), [[o]]) : m("", !0), e.$attrs.templates && e.$attrs.templates.header ? (s(), d("div", l({
    key: 1,
    class: e.cx("header")
  }, i.getPTOptions("header")), [(s(), f(I(e.$attrs.templates.header)))], 16)) : m("", !0), c("div", l({
    class: e.cx("content"),
    "aria-live": e.$attrs.autoPlay ? "polite" : "off"
  }, i.getPTOptions("content")), [v(h, {
    id: e.$id,
    activeIndex: r.activeIndex,
    "onUpdate:activeIndex": t[1] || (t[1] = function(p) {
      return r.activeIndex = p;
    }),
    slideShowActive: r.slideShowActive,
    "onUpdate:slideShowActive": t[2] || (t[2] = function(p) {
      return r.slideShowActive = p;
    }),
    value: e.$attrs.value,
    circular: e.$attrs.circular,
    templates: e.$attrs.templates,
    showIndicators: e.$attrs.showIndicators,
    changeItemOnIndicatorHover: e.$attrs.changeItemOnIndicatorHover,
    showItemNavigators: e.$attrs.showItemNavigators,
    autoPlay: e.$attrs.autoPlay,
    onStartSlideshow: i.startSlideShow,
    onStopSlideshow: i.stopSlideShow,
    pt: e.pt,
    unstyled: e.unstyled
  }, null, 8, ["id", "activeIndex", "slideShowActive", "value", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "showItemNavigators", "autoPlay", "onStartSlideshow", "onStopSlideshow", "pt", "unstyled"]), e.$attrs.showThumbnails ? (s(), f(u, {
    key: 0,
    activeIndex: r.activeIndex,
    "onUpdate:activeIndex": t[3] || (t[3] = function(p) {
      return r.activeIndex = p;
    }),
    slideShowActive: r.slideShowActive,
    "onUpdate:slideShowActive": t[4] || (t[4] = function(p) {
      return r.slideShowActive = p;
    }),
    containerId: e.$id,
    value: e.$attrs.value,
    templates: e.$attrs.templates,
    numVisible: r.numVisible,
    responsiveOptions: e.$attrs.responsiveOptions,
    circular: e.$attrs.circular,
    isVertical: i.isVertical(),
    contentHeight: e.$attrs.verticalThumbnailViewPortHeight,
    showThumbnailNavigators: e.$attrs.showThumbnailNavigators,
    prevButtonProps: e.$attrs.prevButtonProps,
    nextButtonProps: e.$attrs.nextButtonProps,
    onStopSlideshow: i.stopSlideShow,
    pt: e.pt,
    unstyled: e.unstyled
  }, null, 8, ["activeIndex", "slideShowActive", "containerId", "value", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "prevButtonProps", "nextButtonProps", "onStopSlideshow", "pt", "unstyled"])) : m("", !0)], 16, kt), e.$attrs.templates && e.$attrs.templates.footer ? (s(), d("div", l({
    key: 2,
    class: e.cx("footer")
  }, i.getPTOptions("footer")), [(s(), f(I(e.$attrs.templates.footer)))], 16)) : m("", !0)], 16, Ct)) : m("", !0);
}
Le.render = xt;
var Te = {
  name: "Galleria",
  extends: Ze,
  inheritAttrs: !1,
  emits: ["update:activeIndex", "update:visible"],
  container: null,
  mask: null,
  documentKeydownListener: null,
  data: function() {
    return {
      containerVisible: this.visible,
      target: null
    };
  },
  updated: function() {
    this.fullScreen && this.visible && (this.containerVisible = this.visible);
  },
  beforeUnmount: function() {
    this.fullScreen && R(), this.mask = null, this.container && (T.clear(this.container), this.container = null);
  },
  methods: {
    onBeforeEnter: function(t) {
      T.set("modal", t, this.baseZIndex || this.$primevue.config.zIndex.modal);
    },
    onEnter: function(t) {
      this.target = document.activeElement, this.mask.style.zIndex = String(parseInt(t.style.zIndex, 10) - 1), Ie(), this.focus(), this.bindGlobalListeners();
    },
    onBeforeLeave: function() {
      !this.isUnstyled && F(this.mask, "p-overlay-mask-leave-active");
    },
    onLeave: function() {
      ve(this.target), this.target = null;
    },
    onAfterLeave: function(t) {
      T.clear(t), this.containerVisible = !1, R(), this.unbindGlobalListeners();
    },
    onActiveItemChange: function(t) {
      this.activeIndex !== t && this.$emit("update:activeIndex", t);
    },
    maskHide: function() {
      this.$emit("update:visible", !1);
    },
    containerRef: function(t) {
      this.container = t;
    },
    maskRef: function(t) {
      this.mask = t;
    },
    onKeyDown: function(t) {
      t.code === "Escape" && this.maskHide();
    },
    bindDocumentKeyDownListener: function() {
      this.documentKeydownListener || (this.documentKeydownListener = this.onKeyDown.bind(this), window.document.addEventListener("keydown", this.documentKeydownListener));
    },
    unbindDocumentKeyDownListener: function() {
      this.documentKeydownListener && (window.document.removeEventListener("keydown", this.documentKeydownListener), this.documentKeydownListener = null);
    },
    bindGlobalListeners: function() {
      this.fullScreen && this.bindDocumentKeyDownListener();
    },
    unbindGlobalListeners: function() {
      this.fullScreen && this.unbindDocumentKeyDownListener();
    },
    focus: function() {
      var t = this.container.$el.querySelector("[autofocus]");
      t && t.focus();
    }
  },
  components: {
    GalleriaContent: Le,
    Portal: ye
  },
  directives: {
    focustrap: be
  }
}, At = ["aria-modal"];
function Pt(e, t, n, a, r, i) {
  var h = C("GalleriaContent"), u = C("Portal"), o = E("focustrap");
  return e.fullScreen ? (s(), f(u, {
    key: 0
  }, {
    default: S(function() {
      return [r.containerVisible ? (s(), d("div", l({
        key: 0,
        ref: i.maskRef,
        class: [e.cx("mask"), e.maskClass],
        role: "dialog",
        "aria-modal": e.fullScreen ? "true" : void 0
      }, e.ptm("mask")), [v(Ce, l({
        name: "p-galleria",
        onBeforeEnter: i.onBeforeEnter,
        onEnter: i.onEnter,
        onBeforeLeave: i.onBeforeLeave,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave,
        appear: ""
      }, e.ptm("transition")), {
        default: S(function() {
          return [e.visible ? x((s(), f(h, l({
            key: 0,
            ref: i.containerRef,
            onMaskHide: i.maskHide,
            templates: e.$slots,
            onActiveitemChange: i.onActiveItemChange,
            pt: e.pt,
            unstyled: e.unstyled
          }, e.$props), null, 16, ["onMaskHide", "templates", "onActiveitemChange", "pt", "unstyled"])), [[o]]) : m("", !0)];
        }),
        _: 1
      }, 16, ["onBeforeEnter", "onEnter", "onBeforeLeave", "onLeave", "onAfterLeave"])], 16, At)) : m("", !0)];
    }),
    _: 1
  })) : (s(), f(h, l({
    key: 1,
    templates: e.$slots,
    onActiveitemChange: i.onActiveItemChange,
    pt: e.pt,
    unstyled: e.unstyled
  }, e.$props), null, 16, ["templates", "onActiveitemChange", "pt", "unstyled"]));
}
Te.render = Pt;
var Be = {
  name: "RefreshIcon",
  extends: U
};
function Lt(e) {
  return Ot(e) || Vt(e) || Bt(e) || Tt();
}
function Tt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bt(e, t) {
  if (e) {
    if (typeof e == "string") return Q(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Q(e, t) : void 0;
  }
}
function Vt(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ot(e) {
  if (Array.isArray(e)) return Q(e);
}
function Q(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function $t(e, t, n, a, r, i) {
  return s(), d("svg", l({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Lt(t[0] || (t[0] = [c("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
Be.render = $t;
var Ve = {
  name: "SearchMinusIcon",
  extends: U
};
function jt(e) {
  return Et(e) || zt(e) || Nt(e) || Dt();
}
function Dt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nt(e, t) {
  if (e) {
    if (typeof e == "string") return ee(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ee(e, t) : void 0;
  }
}
function zt(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Et(e) {
  if (Array.isArray(e)) return ee(e);
}
function ee(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function Kt(e, t, n, a, r, i) {
  return s(), d("svg", l({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), jt(t[0] || (t[0] = [c("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
Ve.render = Kt;
var Oe = {
  name: "SearchPlusIcon",
  extends: U
};
function _t(e) {
  return Ht(e) || Ft(e) || Rt(e) || Mt();
}
function Mt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rt(e, t) {
  if (e) {
    if (typeof e == "string") return te(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? te(e, t) : void 0;
  }
}
function Ft(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ht(e) {
  if (Array.isArray(e)) return te(e);
}
function te(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function Ut(e, t, n, a, r, i) {
  return s(), d("svg", l({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), _t(t[0] || (t[0] = [c("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
Oe.render = Ut;
var $e = {
  name: "UndoIcon",
  extends: U
};
function Gt(e) {
  return Yt(e) || Xt(e) || Wt(e) || Zt();
}
function Zt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wt(e, t) {
  if (e) {
    if (typeof e == "string") return ne(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ne(e, t) : void 0;
  }
}
function Xt(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Yt(e) {
  if (Array.isArray(e)) return ne(e);
}
function ne(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function qt(e, t, n, a, r, i) {
  return s(), d("svg", l({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Gt(t[0] || (t[0] = [c("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
$e.render = qt;
var Jt = `
    .p-image-mask {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-image-preview {
        position: relative;
        display: inline-flex;
        line-height: 0;
    }

    .p-image-preview-mask {
        position: absolute;
        inset-inline-start: 0;
        inset-block-start: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        border: 0 none;
        padding: 0;
        cursor: pointer;
        background: transparent;
        color: dt('image.preview.mask.color');
        transition: background dt('image.transition.duration');
    }

    .p-image-preview:hover > .p-image-preview-mask,
    .p-image-preview-mask:focus-visible {
        opacity: 1;
        cursor: pointer;
        background: dt('image.preview.mask.background');
        outline: 0 none;
    }

    .p-image-preview-icon {
        font-size: dt('image.preview.icon.size');
        width: dt('image.preview.icon.size');
        height: dt('image.preview.icon.size');
    }

    .p-image-toolbar {
        position: absolute;
        inset-block-start: dt('image.toolbar.position.top');
        inset-inline-end: dt('image.toolbar.position.right');
        inset-inline-start: dt('image.toolbar.position.left');
        inset-block-end: dt('image.toolbar.position.bottom');
        display: flex;
        z-index: 1;
        padding: dt('image.toolbar.padding');
        background: dt('image.toolbar.background');
        backdrop-filter: blur(dt('image.toolbar.blur'));
        border-color: dt('image.toolbar.border.color');
        border-style: solid;
        border-width: dt('image.toolbar.border.width');
        border-radius: dt('image.toolbar.border.radius');
        gap: dt('image.toolbar.gap');
    }

    .p-image-action {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: dt('image.action.color');
        background: transparent;
        width: dt('image.action.size');
        height: dt('image.action.size');
        margin: 0;
        padding: 0;
        border: 0 none;
        cursor: pointer;
        user-select: none;
        border-radius: dt('image.action.border.radius');
        outline-color: transparent;
        transition:
            background dt('image.transition.duration'),
            color dt('image.transition.duration'),
            outline-color dt('image.transition.duration'),
            box-shadow dt('image.transition.duration');
    }

    .p-image-action:hover {
        color: dt('image.action.hover.color');
        background: dt('image.action.hover.background');
    }

    .p-image-action:focus-visible {
        box-shadow: dt('image.action.focus.ring.shadow');
        outline: dt('image.action.focus.ring.width') dt('image.action.focus.ring.style') dt('image.action.focus.ring.color');
        outline-offset: dt('image.action.focus.ring.offset');
    }

    .p-image-action .p-icon {
        font-size: dt('image.action.icon.size');
        width: dt('image.action.icon.size');
        height: dt('image.action.icon.size');
    }

    .p-image-action.p-disabled {
        pointer-events: auto;
    }

    .p-image-original {
        max-width: 100vw;
        max-height: 100vh;
        transition: transform 300ms;
    }

    .p-image-original-enter-active {
        animation: p-animate-image-original-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-image-original-leave-active {
        animation: p-animate-image-original-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-image-original-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-image-original-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`, Qt = {
  root: function(t) {
    var n = t.props;
    return ["p-image p-component", {
      "p-image-preview": n.preview
    }];
  },
  previewMask: "p-image-preview-mask",
  previewIcon: "p-image-preview-icon",
  mask: "p-image-mask p-overlay-mask p-overlay-mask-enter-active",
  toolbar: "p-image-toolbar",
  rotateRightButton: "p-image-action p-image-rotate-right-button",
  rotateLeftButton: "p-image-action p-image-rotate-left-button",
  zoomOutButton: function(t) {
    var n = t.instance;
    return ["p-image-action p-image-zoom-out-button", {
      "p-disabled": n.isZoomOutDisabled
    }];
  },
  zoomInButton: function(t) {
    var n = t.instance;
    return ["p-image-action p-image-zoom-in-button", {
      "p-disabled": n.isZoomInDisabled
    }];
  },
  closeButton: "p-image-action p-image-close-button",
  original: "p-image-original"
}, en = ae.extend({
  name: "image",
  style: Jt,
  classes: Qt
}), tn = {
  name: "BaseImage",
  extends: V,
  props: {
    preview: {
      type: Boolean,
      default: !1
    },
    class: {
      type: null,
      default: null
    },
    style: {
      type: null,
      default: null
    },
    imageStyle: {
      type: null,
      default: null
    },
    imageClass: {
      type: null,
      default: null
    },
    previewButtonProps: {
      type: null,
      default: null
    },
    indicatorIcon: {
      type: String,
      default: void 0
    },
    previewIcon: {
      type: String,
      default: void 0
    },
    zoomInDisabled: {
      type: Boolean,
      default: !1
    },
    zoomOutDisabled: {
      type: Boolean,
      default: !1
    }
  },
  style: en,
  provide: function() {
    return {
      $pcImage: this,
      $parentInstance: this
    };
  }
}, je = {
  name: "Image",
  extends: tn,
  inheritAttrs: !1,
  emits: ["show", "hide", "error"],
  mask: null,
  data: function() {
    return {
      maskVisible: !1,
      previewVisible: !1,
      rotate: 0,
      scale: 1
    };
  },
  beforeUnmount: function() {
    this.mask && T.clear(this.container);
  },
  methods: {
    maskRef: function(t) {
      this.mask = t;
    },
    toolbarRef: function(t) {
      this.toolbarRef = t;
    },
    onImageClick: function() {
      var t = this;
      this.preview && (Ie(), this.maskVisible = !0, setTimeout(function() {
        t.previewVisible = !0;
      }, 25));
    },
    onPreviewImageClick: function() {
      this.previewClick = !0;
    },
    onMaskClick: function(t) {
      var n = Ne(t.target, "data-pc-section-group", "action") || t.target.closest('[data-pc-section-group="action"]');
      !this.previewClick && !n && (this.previewVisible = !1, this.rotate = 0, this.scale = 1), this.previewClick = !1;
    },
    onMaskKeydown: function(t) {
      var n = this;
      t.code === "Escape" && (this.hidePreview(), setTimeout(function() {
        ve(n.$refs.previewButton);
      }, 200), t.preventDefault());
    },
    onError: function() {
      this.$emit("error");
    },
    rotateRight: function() {
      this.rotate += 90, this.previewClick = !0;
    },
    rotateLeft: function() {
      this.rotate -= 90, this.previewClick = !0;
    },
    zoomIn: function() {
      this.scale = this.scale + 0.1, this.previewClick = !0;
    },
    zoomOut: function() {
      this.scale = this.scale - 0.1, this.previewClick = !0;
    },
    onBeforeEnter: function() {
      T.set("modal", this.mask, this.$primevue.config.zIndex.modal);
    },
    onEnter: function() {
      this.focus(), this.$emit("show");
    },
    onBeforeLeave: function() {
      !this.isUnstyled && F(this.mask, "p-overlay-mask-leave-active");
    },
    onLeave: function() {
      R(), this.$emit("hide");
    },
    onAfterLeave: function(t) {
      T.clear(t), this.maskVisible = !1;
    },
    focus: function() {
      var t = this.mask.querySelector("[autofocus]");
      t && t.focus();
    },
    hidePreview: function() {
      this.previewVisible = !1, this.rotate = 0, this.scale = 1, R();
    }
  },
  computed: {
    containerClass: function() {
      return [this.cx("root"), this.class];
    },
    rotateClass: function() {
      return "p-image-preview-rotate-" + this.rotate;
    },
    imagePreviewStyle: function() {
      return {
        transform: "rotate(" + this.rotate + "deg) scale(" + this.scale + ")"
      };
    },
    isZoomInDisabled: function() {
      return this.zoomInDisabled || this.scale >= 1.5;
    },
    isZoomOutDisabled: function() {
      return this.zoomOutDisabled || this.scale <= 0.5;
    },
    rightAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.rotateRight : void 0;
    },
    leftAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.rotateLeft : void 0;
    },
    zoomInAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.zoomIn : void 0;
    },
    zoomOutAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.zoomOut : void 0;
    },
    zoomImageAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.zoomImage : void 0;
    },
    closeAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  components: {
    Portal: ye,
    EyeIcon: Me,
    RefreshIcon: Be,
    UndoIcon: $e,
    SearchMinusIcon: Ve,
    SearchPlusIcon: Oe,
    TimesIcon: we
  },
  directives: {
    focustrap: be
  }
};
function z(e) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, z(e);
}
function he(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? he(Object(n), !0).forEach(function(a) {
      nn(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function nn(e, t, n) {
  return (t = an(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function an(e) {
  var t = rn(e, "string");
  return z(t) == "symbol" ? t : t + "";
}
function rn(e, t) {
  if (z(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t);
    if (z(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var on = ["aria-label"], ln = ["aria-modal"], sn = ["aria-label"], un = ["aria-label"], cn = ["disabled", "aria-label"], dn = ["disabled", "aria-label"], mn = ["aria-label"], hn = ["src"];
function pn(e, t, n, a, r, i) {
  var h = C("RefreshIcon"), u = C("UndoIcon"), o = C("SearchMinusIcon"), p = C("SearchPlusIcon"), y = C("TimesIcon"), G = C("Portal"), Z = E("focustrap");
  return s(), d("span", l({
    class: i.containerClass,
    style: e.style
  }, e.ptmi("root")), [g(e.$slots, "image", {
    errorCallback: i.onError
  }, function() {
    return [c("img", l({
      style: e.imageStyle,
      class: e.imageClass,
      onError: t[0] || (t[0] = function() {
        return i.onError && i.onError.apply(i, arguments);
      })
    }, M(M({}, e.$attrs), e.ptm("image"))), null, 16)];
  }), e.preview ? (s(), d("button", l({
    key: 0,
    ref: "previewButton",
    "aria-label": i.zoomImageAriaLabel,
    type: "button",
    class: e.cx("previewMask"),
    onClick: t[1] || (t[1] = function() {
      return i.onImageClick && i.onImageClick.apply(i, arguments);
    })
  }, M(M({}, e.previewButtonProps), e.ptm("previewMask"))), [g(e.$slots, e.$slots.previewicon ? "previewicon" : "indicatoricon", {}, function() {
    return [(s(), f(I(e.previewIcon || e.indicatorIcon ? "i" : "EyeIcon"), l({
      class: [e.cx("previewIcon"), e.previewIcon]
    }, e.ptm("previewIcon")), null, 16, ["class"]))];
  })], 16, on)) : m("", !0), v(G, null, {
    default: S(function() {
      return [r.maskVisible ? x((s(), d("div", l({
        key: 0,
        ref: i.maskRef,
        role: "dialog",
        class: e.cx("mask"),
        "aria-modal": r.maskVisible,
        onClick: t[8] || (t[8] = function() {
          return i.onMaskClick && i.onMaskClick.apply(i, arguments);
        }),
        onKeydown: t[9] || (t[9] = function() {
          return i.onMaskKeydown && i.onMaskKeydown.apply(i, arguments);
        })
      }, e.ptm("mask")), [c("div", l({
        class: e.cx("toolbar")
      }, e.ptm("toolbar")), [c("button", l({
        class: e.cx("rotateRightButton"),
        onClick: t[2] || (t[2] = function() {
          return i.rotateRight && i.rotateRight.apply(i, arguments);
        }),
        type: "button",
        "aria-label": i.rightAriaLabel
      }, e.ptm("rotateRightButton"), {
        "data-pc-group-section": "action"
      }), [g(e.$slots, "refresh", {}, function() {
        return [v(h, A(O(e.ptm("rotateRightIcon"))), null, 16)];
      })], 16, sn), c("button", l({
        class: e.cx("rotateLeftButton"),
        onClick: t[3] || (t[3] = function() {
          return i.rotateLeft && i.rotateLeft.apply(i, arguments);
        }),
        type: "button",
        "aria-label": i.leftAriaLabel
      }, e.ptm("rotateLeftButton"), {
        "data-pc-group-section": "action"
      }), [g(e.$slots, "undo", {}, function() {
        return [v(u, A(O(e.ptm("rotateLeftIcon"))), null, 16)];
      })], 16, un), c("button", l({
        class: e.cx("zoomOutButton"),
        onClick: t[4] || (t[4] = function() {
          return i.zoomOut && i.zoomOut.apply(i, arguments);
        }),
        type: "button",
        disabled: i.isZoomOutDisabled,
        "aria-label": i.zoomOutAriaLabel
      }, e.ptm("zoomOutButton"), {
        "data-pc-group-section": "action"
      }), [g(e.$slots, "zoomout", {}, function() {
        return [v(o, A(O(e.ptm("zoomOutIcon"))), null, 16)];
      })], 16, cn), c("button", l({
        class: e.cx("zoomInButton"),
        onClick: t[5] || (t[5] = function() {
          return i.zoomIn && i.zoomIn.apply(i, arguments);
        }),
        type: "button",
        disabled: i.isZoomInDisabled,
        "aria-label": i.zoomInAriaLabel
      }, e.ptm("zoomInButton"), {
        "data-pc-group-section": "action"
      }), [g(e.$slots, "zoomin", {}, function() {
        return [v(p, A(O(e.ptm("zoomInIcon"))), null, 16)];
      })], 16, dn), c("button", l({
        class: e.cx("closeButton"),
        type: "button",
        onClick: t[6] || (t[6] = function() {
          return i.hidePreview && i.hidePreview.apply(i, arguments);
        }),
        "aria-label": i.closeAriaLabel,
        autofocus: ""
      }, e.ptm("closeButton"), {
        "data-pc-group-section": "action"
      }), [g(e.$slots, "close", {}, function() {
        return [v(y, A(O(e.ptm("closeIcon"))), null, 16)];
      })], 16, mn)], 16), v(Ce, l({
        name: "p-image-original",
        onBeforeEnter: i.onBeforeEnter,
        onEnter: i.onEnter,
        onLeave: i.onLeave,
        onBeforeLeave: i.onBeforeLeave,
        onAfterLeave: i.onAfterLeave
      }, e.ptm("transition")), {
        default: S(function() {
          return [r.previewVisible ? (s(), d("div", A(l({
            key: 0
          }, e.ptm("originalContainer"))), [g(e.$slots, e.$slots.original ? "original" : "preview", {
            class: Ee(e.cx("original")),
            style: ze(i.imagePreviewStyle),
            previewCallback: i.onPreviewImageClick
          }, function() {
            return [c("img", l({
              src: e.$attrs.src,
              class: e.cx("original"),
              style: i.imagePreviewStyle,
              onClick: t[7] || (t[7] = function() {
                return i.onPreviewImageClick && i.onPreviewImageClick.apply(i, arguments);
              })
            }, e.ptm("original")), null, 16, hn)];
          })], 16)) : m("", !0)];
        }),
        _: 3
      }, 16, ["onBeforeEnter", "onEnter", "onLeave", "onBeforeLeave", "onAfterLeave"])], 16, ln)), [[Z]]) : m("", !0)];
    }),
    _: 3
  })], 16);
}
je.render = pn;
var fn = `
    .p-carousel {
        display: flex;
        flex-direction: column;
    }

    .p-carousel-content-container {
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

    .p-carousel-content {
        display: flex;
        flex-direction: row;
        gap: dt('carousel.content.gap');
    }

    .p-carousel-content:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-carousel-viewport {
        overflow: hidden;
        width: 100%;
    }

    .p-carousel-item-list {
        display: flex;
        flex-direction: row;
    }

    .p-carousel-item-list:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-carousel-prev-button,
    .p-carousel-next-button {
        align-self: center;
        flex-shrink: 0;
    }

    .p-carousel-indicator-list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        padding: dt('carousel.indicator.list.padding');
        gap: dt('carousel.indicator.list.gap');
        margin: 0;
        list-style: none;
    }

    .p-carousel-indicator-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('carousel.indicator.background');
        width: dt('carousel.indicator.width');
        height: dt('carousel.indicator.height');
        border: 0 none;
        transition:
            background dt('carousel.transition.duration'),
            color dt('carousel.transition.duration'),
            outline-color dt('carousel.transition.duration'),
            box-shadow dt('carousel.transition.duration');
        outline-color: transparent;
        border-radius: dt('carousel.indicator.border.radius');
        padding: 0;
        margin: 0;
        user-select: none;
        cursor: pointer;
    }

    .p-carousel-indicator-button:focus-visible {
        box-shadow: dt('carousel.indicator.focus.ring.shadow');
        outline: dt('carousel.indicator.focus.ring.width') dt('carousel.indicator.focus.ring.style') dt('carousel.indicator.focus.ring.color');
        outline-offset: dt('carousel.indicator.focus.ring.offset');
    }

    .p-carousel-indicator-button:hover {
        background: dt('carousel.indicator.hover.background');
    }

    .p-carousel-indicator-active .p-carousel-indicator-button {
        background: dt('carousel.indicator.active.background');
    }

    .p-carousel-vertical .p-carousel-content {
        flex-direction: column;
    }

    .p-carousel-vertical .p-carousel-item-list {
        flex-direction: column;
        height: 100%;
    }

    .p-items-hidden .p-carousel-item {
        visibility: hidden;
    }

    .p-items-hidden .p-carousel-item.p-carousel-item-active {
        visibility: visible;
    }
`, gn = {
  root: function(t) {
    var n = t.instance;
    return ["p-carousel p-component", {
      "p-carousel-vertical": n.isVertical(),
      "p-carousel-horizontal": !n.isVertical()
    }];
  },
  header: "p-carousel-header",
  contentContainer: "p-carousel-content-container",
  content: "p-carousel-content",
  pcPrevButton: function(t) {
    var n = t.instance;
    return ["p-carousel-prev-button", {
      "p-disabled": n.backwardIsDisabled
    }];
  },
  viewport: "p-carousel-viewport",
  itemList: "p-carousel-item-list",
  itemClone: function(t) {
    var n = t.index, a = t.value, r = t.totalShiftedItems, i = t.d_numVisible;
    return ["p-carousel-item p-carousel-item-clone", {
      "p-carousel-item-active": r * -1 === a.length + i,
      "p-carousel-item-start": n === 0,
      "p-carousel-item-end": a.slice(-1 * i).length - 1 === n
    }];
  },
  item: function(t) {
    var n = t.instance, a = t.index;
    return ["p-carousel-item", {
      "p-carousel-item-active": n.firstIndex() <= a && n.lastIndex() >= a,
      "p-carousel-item-start": n.firstIndex() === a,
      "p-carousel-item-end": n.lastIndex() === a
    }];
  },
  pcNextButton: function(t) {
    var n = t.instance;
    return ["p-carousel-next-button", {
      "p-disabled": n.forwardIsDisabled
    }];
  },
  indicatorList: "p-carousel-indicator-list",
  indicator: function(t) {
    var n = t.instance, a = t.index;
    return ["p-carousel-indicator", {
      "p-carousel-indicator-active": n.d_page === a
    }];
  },
  indicatorButton: "p-carousel-indicator-button",
  footer: "p-carousel-footer"
}, vn = ae.extend({
  name: "carousel",
  style: fn,
  classes: gn
}), bn = {
  name: "BaseCarousel",
  extends: V,
  props: {
    value: null,
    page: {
      type: Number,
      default: 0
    },
    numVisible: {
      type: Number,
      default: 1
    },
    numScroll: {
      type: Number,
      default: 1
    },
    responsiveOptions: Array,
    orientation: {
      type: String,
      default: "horizontal"
    },
    verticalViewPortHeight: {
      type: String,
      default: "300px"
    },
    contentClass: String,
    containerClass: String,
    indicatorsContentClass: String,
    circular: {
      type: Boolean,
      default: !1
    },
    autoplayInterval: {
      type: Number,
      default: 0
    },
    showNavigators: {
      type: Boolean,
      default: !0
    },
    showIndicators: {
      type: Boolean,
      default: !0
    },
    prevButtonProps: {
      type: Object,
      default: function() {
        return {
          severity: "secondary",
          text: !0,
          rounded: !0
        };
      }
    },
    nextButtonProps: {
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
  style: vn,
  provide: function() {
    return {
      $pcCarousel: this,
      $parentInstance: this
    };
  }
};
function P(e) {
  return Cn(e) || wn(e) || In(e) || yn();
}
function yn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function In(e, t) {
  if (e) {
    if (typeof e == "string") return ie(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ie(e, t) : void 0;
  }
}
function wn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Cn(e) {
  if (Array.isArray(e)) return ie(e);
}
function ie(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
  return a;
}
var De = {
  name: "Carousel",
  extends: bn,
  inheritAttrs: !1,
  emits: ["update:page"],
  isRemainingItemsAdded: !1,
  data: function() {
    return {
      remainingItems: 0,
      d_numVisible: this.numVisible,
      d_numScroll: this.numScroll,
      d_oldNumScroll: 0,
      d_oldNumVisible: 0,
      d_oldValue: null,
      d_page: this.page,
      totalShiftedItems: this.page * this.numScroll * -1,
      allowAutoplay: !!this.autoplayInterval,
      d_circular: this.circular || this.allowAutoplay,
      swipeThreshold: 20
    };
  },
  watch: {
    page: function(t) {
      t > this.d_page ? this.navForward({}, t) : t < this.d_page && this.navBackward({}, t), this.d_page = t;
    },
    circular: function(t) {
      this.d_circular = t;
    },
    numVisible: function(t, n) {
      this.d_numVisible = t, this.d_oldNumVisible = n;
    },
    numScroll: function(t, n) {
      this.d_oldNumScroll = n, this.d_numScroll = t;
    },
    value: function(t) {
      this.d_oldValue = t;
    }
  },
  mounted: function() {
    var t = !1;
    if (this.createStyle(), this.calculatePosition(), this.responsiveOptions && this.bindDocumentListeners(), this.isCircular()) {
      var n = this.totalShiftedItems;
      this.d_page === 0 ? n = -1 * this.d_numVisible : n === 0 && (n = -1 * this.value.length, this.remainingItems > 0 && (this.isRemainingItemsAdded = !0)), n !== this.totalShiftedItems && (this.totalShiftedItems = n, t = !0);
    }
    !t && this.isAutoplay() && this.startAutoplay();
  },
  updated: function() {
    if (!this.empty) {
      var t = this.isCircular(), n = !1, a = this.totalShiftedItems;
      if (this.autoplayInterval && this.stopAutoplay(), this.d_oldNumScroll !== this.d_numScroll || this.d_oldNumVisible !== this.d_numVisible || this.d_oldValue.length !== this.value.length) {
        this.remainingItems = (this.value.length - this.d_numVisible) % this.d_numScroll;
        var r = this.d_page;
        this.totalIndicators !== 0 && r >= this.totalIndicators && (r = this.totalIndicators - 1, this.$emit("update:page", r), this.d_page = r, n = !0), a = r * this.d_numScroll * -1, t && (a -= this.d_numVisible), r === this.totalIndicators - 1 && this.remainingItems > 0 ? (a += -1 * this.remainingItems + this.d_numScroll, this.isRemainingItemsAdded = !0) : this.isRemainingItemsAdded = !1, a !== this.totalShiftedItems && (this.totalShiftedItems = a, n = !0), this.d_oldNumScroll = this.d_numScroll, this.d_oldNumVisible = this.d_numVisible, this.d_oldValue = this.value, this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(a * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(a * (100 / this.d_numVisible), "%, 0, 0)");
      }
      t && (this.d_page === 0 ? a = -1 * this.d_numVisible : a === 0 && (a = -1 * this.value.length, this.remainingItems > 0 && (this.isRemainingItemsAdded = !0)), a !== this.totalShiftedItems && (this.totalShiftedItems = a, n = !0)), !n && this.isAutoplay() && this.startAutoplay();
    }
  },
  beforeUnmount: function() {
    this.responsiveOptions && this.unbindDocumentListeners(), this.autoplayInterval && this.stopAutoplay();
  },
  methods: {
    getIndicatorPTOptions: function(t, n) {
      return this.ptm(t, {
        context: {
          highlighted: n === this.d_page
        }
      });
    },
    getItemPTOptions: function(t, n) {
      return this.ptm(t, {
        context: {
          index: n,
          active: this.firstIndex() <= n && this.lastIndex() >= n,
          start: this.firstIndex() === n,
          end: this.lastIndex() === n
        }
      });
    },
    step: function(t, n) {
      var a = this.totalShiftedItems, r = this.isCircular();
      if (n != null)
        a = this.d_numScroll * n * -1, r && (a -= this.d_numVisible), this.isRemainingItemsAdded = !1;
      else {
        a += this.d_numScroll * t, this.isRemainingItemsAdded && (a += this.remainingItems - this.d_numScroll * t, this.isRemainingItemsAdded = !1);
        var i = r ? a + this.d_numVisible : a;
        n = Math.abs(Math.floor(i / this.d_numScroll));
      }
      r && this.d_page === this.totalIndicators - 1 && t === -1 ? (a = -1 * (this.value.length + this.d_numVisible), n = 0) : r && this.d_page === 0 && t === 1 ? (a = 0, n = this.totalIndicators - 1) : n === this.totalIndicators - 1 && this.remainingItems > 0 && (a += this.remainingItems * -1 - this.d_numScroll * t, this.isRemainingItemsAdded = !0), this.$refs.itemsContainer && (!this.isUnstyled && X(this.$refs.itemsContainer, "p-items-hidden"), this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(a * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(a * (100 / this.d_numVisible), "%, 0, 0)"), this.$refs.itemsContainer.style.transition = "transform 500ms ease 0s"), this.totalShiftedItems = a, this.$emit("update:page", n), this.d_page = n;
    },
    calculatePosition: function() {
      if (this.$refs.itemsContainer && this.responsiveOptions) {
        for (var t = window.innerWidth, n = {
          numVisible: this.numVisible,
          numScroll: this.numScroll
        }, a = 0; a < this.responsiveOptions.length; a++) {
          var r = this.responsiveOptions[a];
          parseInt(r.breakpoint, 10) >= t && (n = r);
        }
        if (this.d_numScroll !== n.numScroll) {
          var i = this.d_page;
          i = parseInt(i * this.d_numScroll / n.numScroll), this.totalShiftedItems = n.numScroll * i * -1, this.isCircular() && (this.totalShiftedItems -= n.numVisible), this.d_numScroll = n.numScroll, this.$emit("update:page", i), this.d_page = i;
        }
        this.d_numVisible !== n.numVisible && (this.d_numVisible = n.numVisible);
      }
    },
    navBackward: function(t, n) {
      (this.d_circular || this.d_page !== 0) && this.step(1, n), this.allowAutoplay = !1, t.cancelable && t.preventDefault();
    },
    navForward: function(t, n) {
      (this.d_circular || this.d_page < this.totalIndicators - 1) && this.step(-1, n), this.allowAutoplay = !1, t.cancelable && t.preventDefault();
    },
    onIndicatorClick: function(t, n) {
      var a = this.d_page;
      n > a ? this.navForward(t, n) : n < a && this.navBackward(t, n);
    },
    onTransitionEnd: function() {
      this.$refs.itemsContainer && (!this.isUnstyled && F(this.$refs.itemsContainer, "p-items-hidden"), this.$refs.itemsContainer.style.transition = "", (this.d_page === 0 || this.d_page === this.totalIndicators - 1) && this.isCircular() && (this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(this.totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(this.totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)")));
    },
    onTouchStart: function(t) {
      var n = t.changedTouches[0];
      this.startPos = {
        x: n.pageX,
        y: n.pageY
      };
    },
    onTouchMove: function(t) {
      var n = t.changedTouches[0], a = this.isVertical() ? n.pageY - this.startPos.y : n.pageX - this.startPos.x;
      Math.abs(a) > this.swipeThreshold && t.cancelable && t.preventDefault();
    },
    onTouchEnd: function(t) {
      var n = t.changedTouches[0];
      this.isVertical() ? this.changePageOnTouch(t, n.pageY - this.startPos.y) : this.changePageOnTouch(t, n.pageX - this.startPos.x);
    },
    changePageOnTouch: function(t, n) {
      Math.abs(n) > this.swipeThreshold && (n < 0 ? this.navForward(t) : this.navBackward(t));
    },
    onIndicatorKeydown: function(t) {
      switch (t.code) {
        case "ArrowRight":
          this.onRightKey();
          break;
        case "ArrowLeft":
          this.onLeftKey();
          break;
        case "Home":
          this.onHomeKey(), t.preventDefault();
          break;
        case "End":
          this.onEndKey(), t.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
        case "PageUp":
        case "PageDown":
          t.preventDefault();
          break;
        case "Tab":
          this.onTabKey();
          break;
      }
    },
    onRightKey: function() {
      var t = P(b(this.$refs.indicatorContent, '[data-pc-section="indicator"]')), n = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(n, n + 1 === t.length ? t.length - 1 : n + 1);
    },
    onLeftKey: function() {
      var t = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(t, t - 1 <= 0 ? 0 : t - 1);
    },
    onHomeKey: function() {
      var t = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(t, 0);
    },
    onEndKey: function() {
      var t = P(b(this.$refs.indicatorContent, '[data-pc-section="indicator"]')), n = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(n, t.length - 1);
    },
    onTabKey: function() {
      var t = P(b(this.$refs.indicatorContent, '[data-pc-section="indicator"]')), n = t.findIndex(function(i) {
        return re(i, "data-p-active") === !0;
      }), a = B(this.$refs.indicatorContent, '[data-pc-section="indicator"] > button[tabindex="0"]'), r = t.findIndex(function(i) {
        return i === a.parentElement;
      });
      t[r].children[0].tabIndex = "-1", t[n].children[0].tabIndex = "0";
    },
    findFocusedIndicatorIndex: function() {
      var t = P(b(this.$refs.indicatorContent, '[data-pc-section="indicator"]')), n = B(this.$refs.indicatorContent, '[data-pc-section="indicator"] > button[tabindex="0"]');
      return t.findIndex(function(a) {
        return a === n.parentElement;
      });
    },
    changedFocusedIndicator: function(t, n) {
      var a = P(b(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      a[t].children[0].tabIndex = "-1", a[n].children[0].tabIndex = "0", a[n].children[0].focus();
    },
    bindDocumentListeners: function() {
      var t = this;
      this.documentResizeListener || (this.documentResizeListener = function(n) {
        t.calculatePosition(n);
      }, window.addEventListener("resize", this.documentResizeListener));
    },
    unbindDocumentListeners: function() {
      this.documentResizeListener && (window.removeEventListener("resize", this.documentResizeListener), this.documentResizeListener = null);
    },
    startAutoplay: function() {
      var t = this;
      this.interval = setInterval(function() {
        t.d_page === t.totalIndicators - 1 ? t.step(-1, 0) : t.step(-1, t.d_page + 1);
      }, this.autoplayInterval);
    },
    stopAutoplay: function() {
      this.interval && clearInterval(this.interval);
    },
    createStyle: function() {
      if (!this.carouselStyle) {
        var t;
        this.carouselStyle = document.createElement("style"), this.carouselStyle.type = "text/css", pe(this.carouselStyle, "nonce", (t = this.$primevue) === null || t === void 0 || (t = t.config) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce), document.body.appendChild(this.carouselStyle);
      }
      var n = `
                .p-carousel[`.concat(this.$attrSelector, `] .p-carousel-item {
                    flex: 1 0 `).concat(100 / this.d_numVisible, `%
                }
            `);
      if (this.responsiveOptions && !this.isUnstyled) {
        var a = P(this.responsiveOptions), r = fe();
        a.sort(function(u, o) {
          var p = u.breakpoint, y = o.breakpoint;
          return ge(p, y, -1, r);
        });
        for (var i = 0; i < a.length; i++) {
          var h = a[i];
          n += `
                        @media screen and (max-width: `.concat(h.breakpoint, `) {
                            .p-carousel[`).concat(this.$attrSelector, `] .p-carousel-item {
                                flex: 1 0 `).concat(100 / h.numVisible, `%
                            }
                        }
                    `);
        }
      }
      this.carouselStyle.innerHTML = n;
    },
    isVertical: function() {
      return this.orientation === "vertical";
    },
    hasValidItemCount: function() {
      return this.value && this.value.length > this.d_numVisible;
    },
    isCircular: function() {
      return this.hasValidItemCount() && this.d_circular;
    },
    isAutoplay: function() {
      return this.hasValidItemCount() && this.autoplayInterval && this.allowAutoplay;
    },
    firstIndex: function() {
      return this.isCircular() ? -1 * (this.totalShiftedItems + this.d_numVisible) : this.totalShiftedItems * -1;
    },
    lastIndex: function() {
      return this.firstIndex() + this.d_numVisible - 1;
    },
    ariaSlideNumber: function(t) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g, t) : void 0;
    },
    ariaPageLabel: function(t) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, t) : void 0;
    }
  },
  computed: {
    totalIndicators: function() {
      return this.value ? Math.max(Math.ceil((this.value.length - this.d_numVisible) / this.d_numScroll) + 1, 0) : 0;
    },
    backwardIsDisabled: function() {
      return this.value && (!this.circular || this.value.length < this.d_numVisible) && this.d_page === 0;
    },
    forwardIsDisabled: function() {
      return this.value && (!this.circular || this.value.length < this.d_numVisible) && (this.d_page === this.totalIndicators - 1 || this.totalIndicators === 0);
    },
    ariaSlideLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slide : void 0;
    },
    ariaPrevButtonLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.prevPageLabel : void 0;
    },
    ariaNextButtonLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.nextPageLabel : void 0;
    },
    empty: function() {
      return !this.value || this.value.length === 0;
    },
    emptyMessageText: function() {
      var t;
      return ((t = this.$primevue.config) === null || t === void 0 || (t = t.locale) === null || t === void 0 ? void 0 : t.emptyMessage) || "";
    }
  },
  components: {
    Button: xe,
    ChevronRightIcon: le,
    ChevronDownIcon: Se,
    ChevronLeftIcon: oe,
    ChevronUpIcon: ke
  },
  directives: {
    ripple: H
  }
}, Sn = ["aria-live"], kn = ["data-p-carousel-item-active", "data-p-carousel-item-start", "data-p-carousel-item-end"], xn = ["aria-hidden", "aria-label", "aria-roledescription", "data-p-carousel-item-active", "data-p-carousel-item-start", "data-p-carousel-item-end"], An = ["data-p-active"], Pn = ["tabindex", "aria-label", "aria-current", "onClick"];
function Ln(e, t, n, a, r, i) {
  var h = C("Button");
  return s(), d("div", l({
    class: e.cx("root"),
    role: "region"
  }, e.ptmi("root")), [e.$slots.header ? (s(), d("div", l({
    key: 0,
    class: e.cx("header")
  }, e.ptm("header")), [g(e.$slots, "header")], 16)) : m("", !0), i.empty ? g(e.$slots, "empty", {
    key: 2
  }, function() {
    return [Ke(Y(i.emptyMessageText), 1)];
  }) : (s(), d("div", l({
    key: 1,
    class: [e.cx("contentContainer"), e.containerClass]
  }, e.ptm("contentContainer")), [c("div", l({
    class: [e.cx("content"), e.contentClass],
    "aria-live": r.allowAutoplay ? "polite" : "off"
  }, e.ptm("content")), [e.showNavigators ? (s(), f(h, l({
    key: 0,
    class: e.cx("pcPrevButton"),
    disabled: i.backwardIsDisabled,
    "aria-label": i.ariaPrevButtonLabel,
    unstyled: e.unstyled,
    onClick: i.navBackward
  }, e.prevButtonProps, {
    pt: e.ptm("pcPrevButton"),
    "data-pc-group-section": "navigator"
  }), {
    icon: S(function(u) {
      return [g(e.$slots, "previcon", {}, function() {
        return [(s(), f(I(i.isVertical() ? "ChevronUpIcon" : "ChevronLeftIcon"), l({
          class: u.icon
        }, e.ptm("pcPrevButton").icon), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["class", "disabled", "aria-label", "unstyled", "onClick", "pt"])) : m("", !0), c("div", l({
    class: e.cx("viewport"),
    style: [{
      height: i.isVertical() ? e.verticalViewPortHeight : "auto"
    }],
    onTouchend: t[1] || (t[1] = function() {
      return i.onTouchEnd && i.onTouchEnd.apply(i, arguments);
    }),
    onTouchstart: t[2] || (t[2] = function() {
      return i.onTouchStart && i.onTouchStart.apply(i, arguments);
    }),
    onTouchmove: t[3] || (t[3] = function() {
      return i.onTouchMove && i.onTouchMove.apply(i, arguments);
    })
  }, e.ptm("viewport")), [c("div", l({
    ref: "itemsContainer",
    class: e.cx("itemList"),
    onTransitionend: t[0] || (t[0] = function() {
      return i.onTransitionEnd && i.onTransitionEnd.apply(i, arguments);
    })
  }, e.ptm("itemList")), [i.isCircular() ? (s(!0), d(k, {
    key: 0
  }, L(e.value.slice(-1 * r.d_numVisible), function(u, o) {
    return s(), d("div", l({
      key: o + "_scloned",
      class: e.cx("itemClone", {
        index: o,
        value: e.value,
        totalShiftedItems: r.totalShiftedItems,
        d_numVisible: r.d_numVisible
      })
    }, {
      ref_for: !0
    }, e.ptm("itemClone"), {
      "data-p-carousel-item-active": r.totalShiftedItems * -1 === e.value.length + r.d_numVisible,
      "data-p-carousel-item-start": o === 0,
      "data-p-carousel-item-end": e.value.slice(-1 * r.d_numVisible).length - 1 === o
    }), [g(e.$slots, "item", {
      data: u,
      index: o
    })], 16, kn);
  }), 128)) : m("", !0), (s(!0), d(k, null, L(e.value, function(u, o) {
    return s(), d("div", l({
      key: o,
      class: e.cx("item", {
        index: o
      }),
      role: "group",
      "aria-hidden": i.firstIndex() > o || i.lastIndex() < o ? !0 : void 0,
      "aria-label": i.ariaSlideNumber(o),
      "aria-roledescription": i.ariaSlideLabel
    }, {
      ref_for: !0
    }, i.getItemPTOptions("item", o), {
      "data-p-carousel-item-active": i.firstIndex() <= o && i.lastIndex() >= o,
      "data-p-carousel-item-start": i.firstIndex() === o,
      "data-p-carousel-item-end": i.lastIndex() === o
    }), [g(e.$slots, "item", {
      data: u,
      index: o
    })], 16, xn);
  }), 128)), i.isCircular() ? (s(!0), d(k, {
    key: 1
  }, L(e.value.slice(0, r.d_numVisible), function(u, o) {
    return s(), d("div", l({
      key: o + "_fcloned",
      class: e.cx("itemClone", {
        index: o,
        value: e.value,
        totalShiftedItems: r.totalShiftedItems,
        d_numVisible: r.d_numVisible
      })
    }, {
      ref_for: !0
    }, e.ptm("itemClone")), [g(e.$slots, "item", {
      data: u,
      index: o
    })], 16);
  }), 128)) : m("", !0)], 16)], 16), e.showNavigators ? (s(), f(h, l({
    key: 1,
    class: e.cx("pcNextButton"),
    disabled: i.forwardIsDisabled,
    "aria-label": i.ariaNextButtonLabel,
    unstyled: e.unstyled,
    onClick: i.navForward
  }, e.nextButtonProps, {
    pt: e.ptm("pcNextButton"),
    "data-pc-group-section": "navigator"
  }), {
    icon: S(function(u) {
      return [g(e.$slots, "nexticon", {}, function() {
        return [(s(), f(I(i.isVertical() ? "ChevronDownIcon" : "ChevronRightIcon"), l({
          class: u.class
        }, e.ptm("pcNextButton").icon), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["class", "disabled", "aria-label", "unstyled", "onClick", "pt"])) : m("", !0)], 16, Sn), i.totalIndicators >= 0 && e.showIndicators ? (s(), d("ul", l({
    key: 0,
    ref: "indicatorContent",
    class: [e.cx("indicatorList"), e.indicatorsContentClass],
    onKeydown: t[4] || (t[4] = function() {
      return i.onIndicatorKeydown && i.onIndicatorKeydown.apply(i, arguments);
    })
  }, e.ptm("indicatorList")), [(s(!0), d(k, null, L(i.totalIndicators, function(u, o) {
    return s(), d("li", l({
      key: "p-carousel-indicator-" + o.toString(),
      class: e.cx("indicator", {
        index: o
      })
    }, {
      ref_for: !0
    }, i.getIndicatorPTOptions("indicator", o), {
      "data-p-active": r.d_page === o
    }), [c("button", l({
      class: e.cx("indicatorButton"),
      type: "button",
      tabindex: r.d_page === o ? "0" : "-1",
      "aria-label": i.ariaPageLabel(o + 1),
      "aria-current": r.d_page === o ? "page" : void 0,
      onClick: function(y) {
        return i.onIndicatorClick(y, o);
      }
    }, {
      ref_for: !0
    }, i.getIndicatorPTOptions("indicatorButton", o)), null, 16, Pn)], 16, An);
  }), 128))], 16)) : m("", !0)], 16)), e.$slots.footer ? (s(), d("div", l({
    key: 3,
    class: e.cx("footer")
  }, e.ptm("footer")), [g(e.$slots, "footer")], 16)) : m("", !0)], 16);
}
De.render = Ln;
const Tn = {
  getData() {
    return [
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg",
        alt: "Description for Image 1",
        title: "Title 1"
      },
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg",
        alt: "Description for Image 2",
        title: "Title 2"
      },
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria3s.jpg",
        alt: "Description for Image 3",
        title: "Title 3"
      },
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria4s.jpg",
        alt: "Description for Image 4",
        title: "Title 4"
      },
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria5s.jpg",
        alt: "Description for Image 5",
        title: "Title 5"
      },
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria6.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria6s.jpg",
        alt: "Description for Image 6",
        title: "Title 6"
      },
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria7s.jpg",
        alt: "Description for Image 7",
        title: "Title 7"
      },
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria8.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria8s.jpg",
        alt: "Description for Image 8",
        title: "Title 8"
      },
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria9.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria9s.jpg",
        alt: "Description for Image 9",
        title: "Title 9"
      },
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria10s.jpg",
        alt: "Description for Image 10",
        title: "Title 10"
      },
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria11s.jpg",
        alt: "Description for Image 11",
        title: "Title 11"
      },
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria12s.jpg",
        alt: "Description for Image 12",
        title: "Title 12"
      },
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria13.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria13s.jpg",
        alt: "Description for Image 13",
        title: "Title 13"
      },
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria14.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria14s.jpg",
        alt: "Description for Image 14",
        title: "Title 14"
      },
      {
        itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria15.jpg",
        thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria15s.jpg",
        alt: "Description for Image 15",
        title: "Title 15"
      }
    ];
  },
  getImages() {
    return Promise.resolve(this.getData());
  }
}, Bn = { class: "card" }, Vn = { class: "border border-surface-200 dark:border-surface-700 rounded m-2 p-4" }, On = { class: "mb-4" }, $n = { class: "relative mx-auto" }, jn = ["src", "alt"], Dn = {
  class: "dark:bg-surface-900 absolute rounded-border",
  style: { left: "5px", top: "5px" }
}, Nn = { class: "mb-4 font-medium" }, zn = { class: "flex justify-between items-center" }, En = { class: "mt-0 font-semibold text-xl" }, Kn = { class: "card" }, _n = { class: "card" }, Mn = ["src", "alt"], Rn = ["src", "alt"], li = {
  __name: "MediaDoc",
  setup(e) {
    const t = K([]), n = K([]), a = K([
      {
        breakpoint: "1024px",
        numVisible: 5
      },
      {
        breakpoint: "960px",
        numVisible: 4
      },
      {
        breakpoint: "768px",
        numVisible: 3
      },
      {
        breakpoint: "560px",
        numVisible: 1
      }
    ]), r = K([
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1
      }
    ]);
    _e(() => {
      Fe.getProductsSmall().then((h) => t.value = h), Tn.getImages().then((h) => n.value = h);
    });
    function i(h) {
      switch (h) {
        case "INSTOCK":
          return "success";
        case "LOWSTOCK":
          return "warning";
        case "OUTOFSTOCK":
          return "danger";
        default:
          return null;
      }
    }
    return (h, u) => {
      const o = Re, p = xe, y = De, G = je, Z = Te;
      return s(), d(k, null, [
        c("div", Bn, [
          u[0] || (u[0] = c("div", { class: "font-semibold text-xl mb-4" }, "Carousel", -1)),
          v(y, {
            value: t.value,
            numVisible: 3,
            numScroll: 3,
            responsiveOptions: r.value
          }, {
            item: S((w) => [
              c("div", Vn, [
                c("div", On, [
                  c("div", $n, [
                    c("img", {
                      src: "https://primefaces.org/cdn/primevue/images/product/" + w.data.image,
                      alt: w.data.name,
                      class: "w-full rounded"
                    }, null, 8, jn),
                    c("div", Dn, [
                      v(o, {
                        value: w.data.inventoryStatus,
                        severity: i(w.data.inventoryStatus)
                      }, null, 8, ["value", "severity"])
                    ])
                  ])
                ]),
                c("div", Nn, Y(w.data.name), 1),
                c("div", zn, [
                  c("div", En, "$" + Y(w.data.price), 1),
                  c("span", null, [
                    v(p, {
                      icon: "pi pi-heart",
                      severity: "secondary",
                      outlined: ""
                    }),
                    v(p, {
                      icon: "pi pi-shopping-cart",
                      class: "ml-2"
                    })
                  ])
                ])
              ])
            ]),
            _: 1
          }, 8, ["value", "responsiveOptions"])
        ]),
        c("div", Kn, [
          u[1] || (u[1] = c("div", { class: "font-semibold text-xl mb-4" }, "Image", -1)),
          v(G, {
            src: "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
            alt: "Image",
            width: "250"
          })
        ]),
        c("div", _n, [
          u[2] || (u[2] = c("div", { class: "font-semibold text-xl mb-4" }, "Galleria", -1)),
          v(Z, {
            value: n.value,
            responsiveOptions: a.value,
            numVisible: 5,
            containerStyle: "max-width: 640px"
          }, {
            item: S((w) => [
              c("img", {
                src: w.item.itemImageSrc,
                alt: w.item.alt,
                style: { width: "100%" }
              }, null, 8, Mn)
            ]),
            thumbnail: S((w) => [
              c("img", {
                src: w.item.thumbnailImageSrc,
                alt: w.item.alt
              }, null, 8, Rn)
            ]),
            _: 1
          }, 8, ["value", "responsiveOptions"])
        ])
      ], 64);
    };
  }
};
export {
  li as default
};
