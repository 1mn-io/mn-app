import { s as S } from "./index-YqnL2il-.js";
import { B as w, P as $, W as y, T as N, $ as O } from "./main-BuXBcYFI.js";
import { a1 as v, H as u, m as l, a3 as s, a8 as L, E as T, G as z, I as h, a2 as U, p as C, J as E, ab as W, a6 as G, a as n, X as J, a0 as Q, ah as Z, F as ee } from "./runtime-dom.esm-bundler-C71lIG0B.js";
import { f as F } from "./index-BRWhubL0.js";
import { s as te } from "./index-DMeM9mwo.js";
import { s as ne } from "./index-5k7f7MOL.js";
import { x as M } from "./index-C2FJQt9j.js";
import { s as re } from "./index-Dz5S7MlE.js";
import { s as R } from "./index-CcHoYxw3.js";
import { s as A } from "./index-C0qjFOhd.js";
import { s as ae } from "./index-DJ4dXopc.js";
var ie = `
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`, se = {
  root: {
    position: "relative"
  }
}, oe = {
  root: function(e) {
    var i = e.props;
    return ["p-skeleton p-component", {
      "p-skeleton-circle": i.shape === "circle",
      "p-skeleton-animation-none": i.animation === "none"
    }];
  }
}, le = w.extend({
  name: "skeleton",
  style: ie,
  classes: oe,
  inlineStyles: se
}), ce = {
  name: "BaseSkeleton",
  extends: S,
  props: {
    shape: {
      type: String,
      default: "rectangle"
    },
    size: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "1rem"
    },
    borderRadius: {
      type: String,
      default: null
    },
    animation: {
      type: String,
      default: "wave"
    }
  },
  style: le,
  provide: function() {
    return {
      $pcSkeleton: this,
      $parentInstance: this
    };
  }
};
function B(t) {
  "@babel/helpers - typeof";
  return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, B(t);
}
function ue(t, e, i) {
  return (e = de(e)) in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t;
}
function de(t) {
  var e = pe(t, "string");
  return B(e) == "symbol" ? e : e + "";
}
function pe(t, e) {
  if (B(t) != "object" || !t) return t;
  var i = t[Symbol.toPrimitive];
  if (i !== void 0) {
    var o = i.call(t, e);
    if (B(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var X = {
  name: "Skeleton",
  extends: ce,
  inheritAttrs: !1,
  computed: {
    containerStyle: function() {
      return this.size ? {
        width: this.size,
        height: this.size,
        borderRadius: this.borderRadius
      } : {
        width: this.width,
        height: this.height,
        borderRadius: this.borderRadius
      };
    },
    dataP: function() {
      return F(ue({}, this.shape, this.shape));
    }
  }
}, me = ["data-p"];
function fe(t, e, i, o, d, r) {
  return u(), v("div", l({
    class: t.cx("root"),
    style: [t.sx("root"), r.containerStyle],
    "aria-hidden": "true"
  }, t.ptmi("root"), {
    "data-p": r.dataP
  }), null, 16, me);
}
X.render = fe;
var ve = `
    .p-scrollpanel-content-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        float: left;
    }

    .p-scrollpanel-content {
        height: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        width: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        padding-inline: 0 calc(2 * dt('scrollpanel.bar.size'));
        padding-block: 0 calc(2 * dt('scrollpanel.bar.size'));
        position: relative;
        overflow: auto;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    .p-scrollpanel-content::-webkit-scrollbar {
        display: none;
    }

    .p-scrollpanel-bar {
        position: relative;
        border-radius: dt('scrollpanel.bar.border.radius');
        z-index: 2;
        cursor: pointer;
        opacity: 0;
        outline-color: transparent;
        background: dt('scrollpanel.bar.background');
        border: 0 none;
        transition:
            outline-color dt('scrollpanel.transition.duration'),
            opacity dt('scrollpanel.transition.duration');
    }

    .p-scrollpanel-bar:focus-visible {
        box-shadow: dt('scrollpanel.bar.focus.ring.shadow');
        outline: dt('scrollpanel.barfocus.ring.width') dt('scrollpanel.bar.focus.ring.style') dt('scrollpanel.bar.focus.ring.color');
        outline-offset: dt('scrollpanel.barfocus.ring.offset');
    }

    .p-scrollpanel-bar-y {
        width: dt('scrollpanel.bar.size');
        inset-block-start: 0;
    }

    .p-scrollpanel-bar-x {
        height: dt('scrollpanel.bar.size');
        inset-block-end: 0;
    }

    .p-scrollpanel-hidden {
        visibility: hidden;
    }

    .p-scrollpanel:hover .p-scrollpanel-bar,
    .p-scrollpanel:active .p-scrollpanel-bar {
        opacity: 1;
    }

    .p-scrollpanel-grabbed {
        user-select: none;
    }
`, he = {
  root: "p-scrollpanel p-component",
  contentContainer: "p-scrollpanel-content-container",
  content: "p-scrollpanel-content",
  barX: "p-scrollpanel-bar p-scrollpanel-bar-x",
  barY: "p-scrollpanel-bar p-scrollpanel-bar-y"
}, be = w.extend({
  name: "scrollpanel",
  style: ve,
  classes: he
}), ge = {
  name: "BaseScrollPanel",
  extends: S,
  props: {
    step: {
      type: Number,
      default: 5
    }
  },
  style: be,
  provide: function() {
    return {
      $pcScrollPanel: this,
      $parentInstance: this
    };
  }
}, I = {
  name: "ScrollPanel",
  extends: ge,
  inheritAttrs: !1,
  initialized: !1,
  documentResizeListener: null,
  documentMouseMoveListener: null,
  documentMouseUpListener: null,
  frame: null,
  scrollXRatio: null,
  scrollYRatio: null,
  isXBarClicked: !1,
  isYBarClicked: !1,
  lastPageX: null,
  lastPageY: null,
  timer: null,
  outsideClickListener: null,
  data: function() {
    return {
      orientation: "vertical",
      lastScrollTop: 0,
      lastScrollLeft: 0
    };
  },
  mounted: function() {
    this.$el.offsetParent && this.initialize();
  },
  updated: function() {
    !this.initialized && this.$el.offsetParent && this.initialize();
  },
  beforeUnmount: function() {
    this.unbindDocumentResizeListener(), this.frame && window.cancelAnimationFrame(this.frame);
  },
  methods: {
    initialize: function() {
      this.moveBar(), this.bindDocumentResizeListener(), this.calculateContainerHeight();
    },
    calculateContainerHeight: function() {
      var e = getComputedStyle(this.$el), i = getComputedStyle(this.$refs.xBar), o = N(this.$el) - parseInt(i.height, 10);
      e["max-height"] !== "none" && o === 0 && (this.$refs.content.offsetHeight + parseInt(i.height, 10) > parseInt(e["max-height"], 10) ? this.$el.style.height = e["max-height"] : this.$el.style.height = this.$refs.content.offsetHeight + parseFloat(e.paddingTop) + parseFloat(e.paddingBottom) + parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth) + "px");
    },
    moveBar: function() {
      var e = this;
      if (this.$refs.content) {
        var i = this.$refs.content.scrollWidth, o = this.$refs.content.clientWidth, d = (this.$el.clientHeight - this.$refs.xBar.clientHeight) * -1;
        this.scrollXRatio = o / i;
        var r = this.$refs.content.scrollHeight, a = this.$refs.content.clientHeight, g = (this.$el.clientWidth - this.$refs.yBar.clientWidth) * -1;
        this.scrollYRatio = a / r;
        var p = Math.max(this.scrollYRatio * 100, 10);
        this.frame = this.requestAnimationFrame(function() {
          e.$refs.xBar && (e.scrollXRatio >= 1 ? (e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden", "true"), !e.isUnstyled && y(e.$refs.xBar, "p-scrollpanel-hidden")) : (e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden", "false"), !e.isUnstyled && $(e.$refs.xBar, "p-scrollpanel-hidden"), e.$refs.xBar.style.cssText = "width:" + Math.max(e.scrollXRatio * 100, 10) + "%; inset-inline-start:" + Math.abs(e.$refs.content.scrollLeft) / i * 100 + "%;bottom:" + d + "px;")), e.$refs.yBar && (e.scrollYRatio >= 1 ? (e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden", "true"), !e.isUnstyled && y(e.$refs.yBar, "p-scrollpanel-hidden")) : (e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden", "false"), !e.isUnstyled && $(e.$refs.yBar, "p-scrollpanel-hidden"), e.$refs.yBar.style.cssText = "height:" + p + "%; top: calc(" + e.$refs.content.scrollTop / (r - a) * (100 - p) + "% - " + e.$refs.xBar.clientHeight + "px); inset-inline-end:" + g + "px;"));
        });
      }
    },
    onYBarMouseDown: function(e) {
      this.isYBarClicked = !0, this.$refs.yBar.focus(), this.lastPageY = e.pageY, this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed", "true"), !this.isUnstyled && y(this.$refs.yBar, "p-scrollpanel-grabbed"), document.body.setAttribute("data-p-scrollpanel-grabbed", "true"), !this.isUnstyled && y(document.body, "p-scrollpanel-grabbed"), this.bindDocumentMouseListeners(), e.preventDefault();
    },
    onXBarMouseDown: function(e) {
      this.isXBarClicked = !0, this.$refs.xBar.focus(), this.lastPageX = e.pageX, this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed", "false"), !this.isUnstyled && y(this.$refs.xBar, "p-scrollpanel-grabbed"), document.body.setAttribute("data-p-scrollpanel-grabbed", "false"), !this.isUnstyled && y(document.body, "p-scrollpanel-grabbed"), this.bindDocumentMouseListeners(), e.preventDefault();
    },
    onScroll: function(e) {
      this.lastScrollLeft !== e.target.scrollLeft ? (this.lastScrollLeft = e.target.scrollLeft, this.orientation = "horizontal") : this.lastScrollTop !== e.target.scrollTop && (this.lastScrollTop = e.target.scrollTop, this.orientation = "vertical"), this.moveBar();
    },
    onKeyDown: function(e) {
      if (this.orientation === "vertical")
        switch (e.code) {
          case "ArrowDown": {
            this.setTimer("scrollTop", this.step), e.preventDefault();
            break;
          }
          case "ArrowUp": {
            this.setTimer("scrollTop", this.step * -1), e.preventDefault();
            break;
          }
          case "ArrowLeft":
          case "ArrowRight": {
            e.preventDefault();
            break;
          }
        }
      else if (this.orientation === "horizontal")
        switch (e.code) {
          case "ArrowRight": {
            this.setTimer("scrollLeft", this.step), e.preventDefault();
            break;
          }
          case "ArrowLeft": {
            this.setTimer("scrollLeft", this.step * -1), e.preventDefault();
            break;
          }
          case "ArrowDown":
          case "ArrowUp": {
            e.preventDefault();
            break;
          }
        }
    },
    onKeyUp: function() {
      this.clearTimer();
    },
    repeat: function(e, i) {
      this.$refs.content[e] += i, this.moveBar();
    },
    setTimer: function(e, i) {
      var o = this;
      this.clearTimer(), this.timer = setTimeout(function() {
        o.repeat(e, i);
      }, 40);
    },
    clearTimer: function() {
      this.timer && clearTimeout(this.timer);
    },
    onDocumentMouseMove: function(e) {
      this.isXBarClicked ? this.onMouseMoveForXBar(e) : this.isYBarClicked ? this.onMouseMoveForYBar(e) : (this.onMouseMoveForXBar(e), this.onMouseMoveForYBar(e));
    },
    onMouseMoveForXBar: function(e) {
      var i = this, o = e.pageX - this.lastPageX;
      this.lastPageX = e.pageX, this.frame = this.requestAnimationFrame(function() {
        i.$refs.content.scrollLeft += o / i.scrollXRatio;
      });
    },
    onMouseMoveForYBar: function(e) {
      var i = this, o = e.pageY - this.lastPageY;
      this.lastPageY = e.pageY, this.frame = this.requestAnimationFrame(function() {
        i.$refs.content.scrollTop += o / i.scrollYRatio;
      });
    },
    onFocus: function(e) {
      this.$refs.xBar.isSameNode(e.target) ? this.orientation = "horizontal" : this.$refs.yBar.isSameNode(e.target) && (this.orientation = "vertical");
    },
    onBlur: function() {
      this.orientation === "horizontal" && (this.orientation = "vertical");
    },
    onDocumentMouseUp: function() {
      this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed", "false"), !this.isUnstyled && $(this.$refs.yBar, "p-scrollpanel-grabbed"), this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed", "false"), !this.isUnstyled && $(this.$refs.xBar, "p-scrollpanel-grabbed"), document.body.setAttribute("data-p-scrollpanel-grabbed", "false"), !this.isUnstyled && $(document.body, "p-scrollpanel-grabbed"), this.unbindDocumentMouseListeners(), this.isXBarClicked = !1, this.isYBarClicked = !1;
    },
    requestAnimationFrame: function(e) {
      var i = window.requestAnimationFrame || this.timeoutFrame;
      return i(e);
    },
    refresh: function() {
      this.moveBar();
    },
    scrollTop: function(e) {
      var i = this.$refs.content.scrollHeight - this.$refs.content.clientHeight;
      e = e > i ? i : e > 0 ? e : 0, this.$refs.content.scrollTop = e;
    },
    timeoutFrame: function(e) {
      setTimeout(e, 0);
    },
    bindDocumentMouseListeners: function() {
      var e = this;
      this.documentMouseMoveListener || (this.documentMouseMoveListener = function(i) {
        e.onDocumentMouseMove(i);
      }, document.addEventListener("mousemove", this.documentMouseMoveListener)), this.documentMouseUpListener || (this.documentMouseUpListener = function(i) {
        e.onDocumentMouseUp(i);
      }, document.addEventListener("mouseup", this.documentMouseUpListener));
    },
    unbindDocumentMouseListeners: function() {
      this.documentMouseMoveListener && (document.removeEventListener("mousemove", this.documentMouseMoveListener), this.documentMouseMoveListener = null), this.documentMouseUpListener && (document.removeEventListener("mouseup", this.documentMouseUpListener), this.documentMouseUpListener = null);
    },
    bindDocumentResizeListener: function() {
      var e = this;
      this.documentResizeListener || (this.documentResizeListener = function() {
        e.moveBar();
      }, window.addEventListener("resize", this.documentResizeListener));
    },
    unbindDocumentResizeListener: function() {
      this.documentResizeListener && (window.removeEventListener("resize", this.documentResizeListener), this.documentResizeListener = null);
    }
  },
  computed: {
    contentId: function() {
      return this.$id + "_content";
    }
  }
}, ye = ["id"], we = ["aria-controls", "aria-valuenow"], $e = ["aria-controls", "aria-valuenow"];
function Be(t, e, i, o, d, r) {
  return u(), v("div", l({
    class: t.cx("root")
  }, t.ptmi("root")), [s("div", l({
    class: t.cx("contentContainer")
  }, t.ptm("contentContainer")), [s("div", l({
    ref: "content",
    id: r.contentId,
    class: t.cx("content"),
    onScroll: e[0] || (e[0] = function() {
      return r.onScroll && r.onScroll.apply(r, arguments);
    }),
    onMouseenter: e[1] || (e[1] = function() {
      return r.moveBar && r.moveBar.apply(r, arguments);
    })
  }, t.ptm("content")), [L(t.$slots, "default")], 16, ye)], 16), s("div", l({
    ref: "xBar",
    class: t.cx("barx"),
    tabindex: "0",
    role: "scrollbar",
    "aria-orientation": "horizontal",
    "aria-controls": r.contentId,
    "aria-valuenow": d.lastScrollLeft,
    onMousedown: e[2] || (e[2] = function() {
      return r.onXBarMouseDown && r.onXBarMouseDown.apply(r, arguments);
    }),
    onKeydown: e[3] || (e[3] = function(a) {
      return r.onKeyDown(a);
    }),
    onKeyup: e[4] || (e[4] = function() {
      return r.onKeyUp && r.onKeyUp.apply(r, arguments);
    }),
    onFocus: e[5] || (e[5] = function() {
      return r.onFocus && r.onFocus.apply(r, arguments);
    }),
    onBlur: e[6] || (e[6] = function() {
      return r.onBlur && r.onBlur.apply(r, arguments);
    })
  }, t.ptm("barx"), {
    "data-pc-group-section": "bar"
  }), null, 16, we), s("div", l({
    ref: "yBar",
    class: t.cx("bary"),
    tabindex: "0",
    role: "scrollbar",
    "aria-orientation": "vertical",
    "aria-controls": r.contentId,
    "aria-valuenow": d.lastScrollTop,
    onMousedown: e[7] || (e[7] = function() {
      return r.onYBarMouseDown && r.onYBarMouseDown.apply(r, arguments);
    }),
    onKeydown: e[8] || (e[8] = function(a) {
      return r.onKeyDown(a);
    }),
    onKeyup: e[9] || (e[9] = function() {
      return r.onKeyUp && r.onKeyUp.apply(r, arguments);
    }),
    onFocus: e[10] || (e[10] = function() {
      return r.onFocus && r.onFocus.apply(r, arguments);
    })
  }, t.ptm("bary"), {
    "data-pc-group-section": "bar"
  }), null, 16, $e)], 16);
}
I.render = Be;
var xe = `
    .p-scrolltop.p-button {
        position: fixed !important;
        inset-block-end: 20px;
        inset-inline-end: 20px;
    }

    .p-scrolltop-sticky.p-button {
        position: sticky !important;
        display: flex;
        margin-inline-start: auto;
    }

    .p-scrolltop-enter-from {
        opacity: 0;
    }

    .p-scrolltop-enter-active {
        transition: opacity 300ms;
    }

    .p-scrolltop-leave-to {
        opacity: 0;
    }

    .p-scrolltop-leave-active {
        transition: opacity 300ms;
    }
`, Se = {
  root: function(e) {
    var i = e.props;
    return ["p-scrolltop", {
      "p-scrolltop-sticky": i.target !== "window"
    }];
  },
  icon: "p-scrolltop-icon"
}, Le = w.extend({
  name: "scrolltop",
  style: xe,
  classes: Se
}), ke = {
  name: "BaseScrollTop",
  extends: S,
  props: {
    target: {
      type: String,
      default: "window"
    },
    threshold: {
      type: Number,
      default: 400
    },
    icon: {
      type: String,
      default: void 0
    },
    behavior: {
      type: String,
      default: "smooth"
    },
    buttonProps: {
      type: Object,
      default: function() {
        return {
          rounded: !0
        };
      }
    }
  },
  style: Le,
  provide: function() {
    return {
      $pcScrollTop: this,
      $parentInstance: this
    };
  }
}, Y = {
  name: "ScrollTop",
  extends: ke,
  inheritAttrs: !1,
  scrollListener: null,
  container: null,
  data: function() {
    return {
      visible: !1
    };
  },
  mounted: function() {
    this.target === "window" ? this.bindDocumentScrollListener() : this.target === "parent" && this.bindParentScrollListener();
  },
  beforeUnmount: function() {
    this.target === "window" ? this.unbindDocumentScrollListener() : this.target === "parent" && this.unbindParentScrollListener(), this.container && (M.clear(this.container), this.overlay = null);
  },
  methods: {
    onClick: function() {
      var e = this.target === "window" ? window : this.$el.parentElement;
      e.scroll({
        top: 0,
        behavior: this.behavior
      });
    },
    checkVisibility: function(e) {
      e > this.threshold ? this.visible = !0 : this.visible = !1;
    },
    bindParentScrollListener: function() {
      var e = this;
      this.scrollListener = function() {
        e.checkVisibility(e.$el.parentElement.scrollTop);
      }, this.$el.parentElement.addEventListener("scroll", this.scrollListener);
    },
    bindDocumentScrollListener: function() {
      var e = this;
      this.scrollListener = function() {
        e.checkVisibility(O());
      }, window.addEventListener("scroll", this.scrollListener);
    },
    unbindParentScrollListener: function() {
      this.scrollListener && (this.$el.parentElement.removeEventListener("scroll", this.scrollListener), this.scrollListener = null);
    },
    unbindDocumentScrollListener: function() {
      this.scrollListener && (window.removeEventListener("scroll", this.scrollListener), this.scrollListener = null);
    },
    onEnter: function(e) {
      M.set("overlay", e, this.$primevue.config.zIndex.overlay);
    },
    onAfterLeave: function(e) {
      M.clear(e);
    },
    containerRef: function(e) {
      this.container = e ? e.$el : void 0;
    }
  },
  computed: {
    scrollTopAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.scrollTop : void 0;
    }
  },
  components: {
    ChevronUpIcon: re,
    Button: R
  }
};
function ze(t, e, i, o, d, r) {
  var a = T("Button");
  return u(), z(W, l({
    name: "p-scrolltop",
    appear: "",
    onEnter: r.onEnter,
    onAfterLeave: r.onAfterLeave
  }, t.ptm("transition")), {
    default: h(function() {
      return [d.visible ? (u(), z(a, l({
        key: 0,
        ref: r.containerRef,
        class: t.cx("root"),
        onClick: r.onClick,
        "aria-label": r.scrollTopAriaLabel,
        unstyled: t.unstyled
      }, t.buttonProps, {
        pt: t.ptm("root")
      }), {
        icon: h(function(g) {
          return [L(t.$slots, "icon", {
            class: C(t.cx("icon"))
          }, function() {
            return [(u(), z(E(t.icon ? "span" : "ChevronUpIcon"), l({
              class: [t.cx("icon"), t.icon, g.class]
            }, t.ptm("root").icon, {
              "data-pc-section": "icon"
            }), null, 16, ["class"]))];
          })];
        }),
        _: 3
      }, 16, ["class", "onClick", "aria-label", "unstyled", "pt"])) : U("", !0)];
    }),
    _: 3
  }, 16, ["onEnter", "onAfterLeave"]);
}
Y.render = ze;
var Me = {
  root: "p-avatar-group p-component"
}, Ae = w.extend({
  name: "avatargroup",
  classes: Me
}), Pe = {
  name: "BaseAvatarGroup",
  extends: S,
  style: Ae,
  provide: function() {
    return {
      $pcAvatarGroup: this,
      $parentInstance: this
    };
  }
}, q = {
  name: "AvatarGroup",
  extends: Pe,
  inheritAttrs: !1
};
function De(t, e, i, o, d, r) {
  return u(), v("div", l({
    class: t.cx("root")
  }, t.ptmi("root")), [L(t.$slots, "default")], 16);
}
q.render = De;
var Te = `
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`, Ue = {
  root: function(e) {
    var i = e.props;
    return ["p-avatar p-component", {
      "p-avatar-image": i.image != null,
      "p-avatar-circle": i.shape === "circle",
      "p-avatar-lg": i.size === "large",
      "p-avatar-xl": i.size === "xlarge"
    }];
  },
  label: "p-avatar-label",
  icon: "p-avatar-icon"
}, Ce = w.extend({
  name: "avatar",
  style: Te,
  classes: Ue
}), Ee = {
  name: "BaseAvatar",
  extends: S,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "normal"
    },
    shape: {
      type: String,
      default: "square"
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
  style: Ce,
  provide: function() {
    return {
      $pcAvatar: this,
      $parentInstance: this
    };
  }
};
function x(t) {
  "@babel/helpers - typeof";
  return x = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, x(t);
}
function D(t, e, i) {
  return (e = Fe(e)) in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t;
}
function Fe(t) {
  var e = Re(t, "string");
  return x(e) == "symbol" ? e : e + "";
}
function Re(t, e) {
  if (x(t) != "object" || !t) return t;
  var i = t[Symbol.toPrimitive];
  if (i !== void 0) {
    var o = i.call(t, e);
    if (x(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var K = {
  name: "Avatar",
  extends: Ee,
  inheritAttrs: !1,
  emits: ["error"],
  methods: {
    onError: function(e) {
      this.$emit("error", e);
    }
  },
  computed: {
    dataP: function() {
      return F(D(D({}, this.shape, this.shape), this.size, this.size));
    }
  }
}, Xe = ["aria-labelledby", "aria-label", "data-p"], Ie = ["data-p"], Ye = ["data-p"], qe = ["src", "alt", "data-p"];
function Ke(t, e, i, o, d, r) {
  return u(), v("div", l({
    class: t.cx("root"),
    "aria-labelledby": t.ariaLabelledby,
    "aria-label": t.ariaLabel
  }, t.ptmi("root"), {
    "data-p": r.dataP
  }), [L(t.$slots, "default", {}, function() {
    return [t.label ? (u(), v("span", l({
      key: 0,
      class: t.cx("label")
    }, t.ptm("label"), {
      "data-p": r.dataP
    }), G(t.label), 17, Ie)) : t.$slots.icon ? (u(), z(E(t.$slots.icon), {
      key: 1,
      class: C(t.cx("icon"))
    }, null, 8, ["class"])) : t.icon ? (u(), v("span", l({
      key: 2,
      class: [t.cx("icon"), t.icon]
    }, t.ptm("icon"), {
      "data-p": r.dataP
    }), null, 16, Ye)) : t.image ? (u(), v("img", l({
      key: 3,
      src: t.image,
      alt: t.ariaLabel,
      onError: e[0] || (e[0] = function() {
        return r.onError && r.onError.apply(r, arguments);
      })
    }, t.ptm("image"), {
      "data-p": r.dataP
    }), null, 16, qe)) : U("", !0)];
  })], 16, Xe);
}
K.render = Ke;
var _e = `
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`, je = {
  root: "p-overlaybadge"
}, He = w.extend({
  name: "overlaybadge",
  style: _e,
  classes: je
}), Ve = {
  name: "OverlayBadge",
  extends: A,
  style: He,
  provide: function() {
    return {
      $pcOverlayBadge: this,
      $parentInstance: this
    };
  }
}, _ = {
  name: "OverlayBadge",
  extends: Ve,
  inheritAttrs: !1,
  components: {
    Badge: A
  }
};
function Ne(t, e, i, o, d, r) {
  var a = T("Badge");
  return u(), v("div", l({
    class: t.cx("root")
  }, t.ptmi("root")), [L(t.$slots, "default"), n(a, l(t.$props, {
    pt: t.ptm("pcBadge")
  }), null, 16, ["pt"])], 16);
}
_.render = Ne;
const Oe = { class: "card" }, We = { class: "flex flex-col md:flex-row gap-4" }, Ge = { class: "md:w-1/2" }, Je = { class: "md:w-1/2" }, Qe = { class: "flex flex-col md:flex-row gap-8" }, Ze = { class: "md:w-1/2" }, et = { class: "card" }, tt = { class: "flex gap-2" }, nt = { class: "flex gap-6" }, rt = { class: "flex gap-2" }, at = { class: "flex items-start gap-2" }, it = { class: "card" }, st = { class: "card" }, ot = { class: "md:w-1/2" }, lt = { class: "card" }, ct = { class: "flex gap-2" }, ut = { class: "flex gap-2" }, dt = { class: "flex gap-2" }, pt = { class: "card" }, mt = { class: "flex items-center flex-col sm:flex-row" }, ft = { class: "flex items-center flex-col sm:flex-row" }, vt = { class: "flex items-center flex-col sm:flex-row" }, ht = { class: "card" }, bt = { class: "rounded-border border border-surface p-6" }, gt = { class: "flex mb-4" }, yt = { class: "flex justify-between mt-4" }, Dt = {
  __name: "MiscDoc",
  setup(t) {
    const e = J(0);
    let i = null;
    function o() {
      i = setInterval(() => {
        let r = e.value + Math.floor(Math.random() * 10) + 1;
        r >= 100 && (r = 100), e.value = r;
      }, 2e3);
    }
    function d() {
      clearInterval(i), i = null;
    }
    return Q(() => {
      o();
    }), Z(() => {
      d();
    }), (r, a) => {
      const g = ae, p = A, k = _, P = R, f = K, j = q, H = Y, V = I, c = ne, m = te, b = X;
      return u(), v(ee, null, [
        s("div", Oe, [
          a[0] || (a[0] = s("div", { class: "font-semibold text-xl mb-4" }, "ProgressBar", -1)),
          s("div", We, [
            s("div", Ge, [
              n(g, { value: e.value }, null, 8, ["value"])
            ]),
            s("div", Je, [
              n(g, {
                value: 50,
                showValue: !1
              })
            ])
          ])
        ]),
        s("div", Qe, [
          s("div", Ze, [
            s("div", et, [
              a[4] || (a[4] = s("div", { class: "font-semibold text-xl mb-4" }, "Badge", -1)),
              s("div", tt, [
                n(p, { value: 2 }),
                n(p, {
                  value: 8,
                  severity: "success"
                }),
                n(p, {
                  value: 4,
                  severity: "info"
                }),
                n(p, {
                  value: 12,
                  severity: "Warn"
                }),
                n(p, {
                  value: 3,
                  severity: "danger"
                })
              ]),
              a[5] || (a[5] = s("div", { class: "font-semibold my-4" }, "Overlay", -1)),
              s("div", nt, [
                n(k, { value: "2" }, {
                  default: h(() => [...a[1] || (a[1] = [
                    s("i", {
                      class: "pi pi-bell",
                      style: { "font-size": "2rem" }
                    }, null, -1)
                  ])]),
                  _: 1
                }),
                n(k, {
                  value: "4",
                  severity: "danger"
                }, {
                  default: h(() => [...a[2] || (a[2] = [
                    s("i", {
                      class: "pi pi-calendar",
                      style: { "font-size": "2rem" }
                    }, null, -1)
                  ])]),
                  _: 1
                }),
                n(k, { severity: "danger" }, {
                  default: h(() => [...a[3] || (a[3] = [
                    s("i", {
                      class: "pi pi-envelope",
                      style: { "font-size": "2rem" }
                    }, null, -1)
                  ])]),
                  _: 1
                })
              ]),
              a[6] || (a[6] = s("div", { class: "font-semibold my-4" }, "Button", -1)),
              s("div", rt, [
                n(P, {
                  label: "Emails",
                  badge: "8",
                  class: "mr-2"
                }),
                n(P, {
                  label: "Messages",
                  icon: "pi pi-users",
                  severity: "warn",
                  badge: "8",
                  badgeClass: "p-badge-danger"
                })
              ]),
              a[7] || (a[7] = s("div", { class: "font-semibold my-4" }, "Sizes", -1)),
              s("div", at, [
                n(p, { value: 2 }),
                n(p, {
                  value: 4,
                  size: "large",
                  severity: "warn"
                }),
                n(p, {
                  value: 6,
                  size: "xlarge",
                  severity: "success"
                })
              ])
            ]),
            s("div", it, [
              a[8] || (a[8] = s("div", { class: "font-semibold text-xl mb-4" }, "Avatar", -1)),
              a[9] || (a[9] = s("div", { class: "font-semibold mb-4" }, "Group", -1)),
              n(j, null, {
                default: h(() => [
                  n(f, {
                    image: "https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",
                    size: "large",
                    shape: "circle"
                  }),
                  n(f, {
                    image: "https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",
                    size: "large",
                    shape: "circle"
                  }),
                  n(f, {
                    image: "https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",
                    size: "large",
                    shape: "circle"
                  }),
                  n(f, {
                    image: "https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png",
                    size: "large",
                    shape: "circle"
                  }),
                  n(f, {
                    image: "https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png",
                    size: "large",
                    shape: "circle"
                  }),
                  n(f, {
                    label: "+2",
                    shape: "circle",
                    size: "large",
                    style: { "background-color": "#9c27b0", color: "#ffffff" }
                  })
                ]),
                _: 1
              }),
              a[10] || (a[10] = s("div", { class: "font-semibold my-4" }, "Label - Circle", -1)),
              n(f, {
                label: "P",
                class: "mr-2",
                size: "xlarge",
                shape: "circle"
              }),
              n(f, {
                label: "V",
                class: "mr-2",
                size: "large",
                style: { "background-color": "#2196F3", color: "#ffffff" },
                shape: "circle"
              }),
              n(f, {
                label: "U",
                class: "mr-2",
                style: { "background-color": "#9c27b0", color: "#ffffff" },
                shape: "circle"
              }),
              a[11] || (a[11] = s("div", { class: "font-semibold my-4" }, "Icon - Badge", -1)),
              n(k, {
                value: "4",
                severity: "danger",
                class: "inline-flex"
              }, {
                default: h(() => [
                  n(f, {
                    label: "U",
                    size: "xlarge"
                  })
                ]),
                _: 1
              })
            ]),
            s("div", st, [
              a[13] || (a[13] = s("div", { class: "font-semibold text-xl mb-4" }, "ScrollTop", -1)),
              n(V, { style: { width: "250px", height: "200px" } }, {
                default: h(() => [
                  a[12] || (a[12] = s("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ", -1)),
                  n(H, {
                    target: "parent",
                    threshold: 100,
                    icon: "pi pi-arrow-up"
                  })
                ]),
                _: 1
              })
            ])
          ]),
          s("div", ot, [
            s("div", lt, [
              a[14] || (a[14] = s("div", { class: "font-semibold text-xl mb-4" }, "Tag", -1)),
              a[15] || (a[15] = s("div", { class: "font-semibold mb-4" }, "Default", -1)),
              s("div", ct, [
                n(c, { value: "Primary" }),
                n(c, {
                  severity: "success",
                  value: "Success"
                }),
                n(c, {
                  severity: "info",
                  value: "Info"
                }),
                n(c, {
                  severity: "warn",
                  value: "Warn"
                }),
                n(c, {
                  severity: "danger",
                  value: "Danger"
                })
              ]),
              a[16] || (a[16] = s("div", { class: "font-semibold my-4" }, "Pills", -1)),
              s("div", ut, [
                n(c, {
                  value: "Primary",
                  rounded: !0
                }),
                n(c, {
                  severity: "success",
                  value: "Success",
                  rounded: !0
                }),
                n(c, {
                  severity: "info",
                  value: "Info",
                  rounded: !0
                }),
                n(c, {
                  severity: "warn",
                  value: "Warn",
                  rounded: !0
                }),
                n(c, {
                  severity: "danger",
                  value: "Danger",
                  rounded: !0
                })
              ]),
              a[17] || (a[17] = s("div", { class: "font-semibold my-4" }, "Icons", -1)),
              s("div", dt, [
                n(c, {
                  icon: "pi pi-user",
                  value: "Primary"
                }),
                n(c, {
                  icon: "pi pi-check",
                  severity: "success",
                  value: "Success"
                }),
                n(c, {
                  icon: "pi pi-info-circle",
                  severity: "info",
                  value: "Info"
                }),
                n(c, {
                  con: "pi pi-exclamation-triangle",
                  severity: "warn",
                  value: "Warn"
                }),
                n(c, {
                  icon: "pi pi-times",
                  severity: "danger",
                  value: "Danger"
                })
              ])
            ]),
            s("div", pt, [
              a[18] || (a[18] = s("div", { class: "font-semibold text-xl mb-4" }, "Chip", -1)),
              a[19] || (a[19] = s("div", { class: "font-semibold mb-4" }, "Basic", -1)),
              s("div", mt, [
                n(m, {
                  label: "Action",
                  class: "mr-2 mb-2"
                }),
                n(m, {
                  label: "Comedy",
                  class: "mr-2 mb-2"
                }),
                n(m, {
                  label: "Mystery",
                  class: "mr-2 mb-2"
                }),
                n(m, {
                  label: "Thriller",
                  removable: !0,
                  class: "mb-2"
                })
              ]),
              a[20] || (a[20] = s("div", { class: "font-semibold my-4" }, "Icon", -1)),
              s("div", ft, [
                n(m, {
                  label: "Apple",
                  icon: "pi pi-apple",
                  class: "mr-2 mb-2"
                }),
                n(m, {
                  label: "Facebook",
                  icon: "pi pi-facebook",
                  class: "mr-2 mb-2"
                }),
                n(m, {
                  label: "Google",
                  icon: "pi pi-google",
                  class: "mr-2 mb-2"
                }),
                n(m, {
                  label: "Microsoft",
                  icon: "pi pi-microsoft",
                  removable: !0,
                  class: "mb-2"
                })
              ]),
              a[21] || (a[21] = s("div", { class: "font-semibold my-4" }, "Image", -1)),
              s("div", vt, [
                n(m, {
                  label: "Amy Elsner",
                  image: "https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",
                  class: "mr-2 mb-2"
                }),
                n(m, {
                  label: "Asiya Javayant",
                  image: "https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",
                  class: "mr-2 mb-2"
                }),
                n(m, {
                  label: "Onyama Limba",
                  image: "https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",
                  class: "mr-2 mb-2"
                })
              ])
            ]),
            s("div", ht, [
              a[22] || (a[22] = s("div", { class: "font-semibold text-xl mb-4" }, "Skeleton", -1)),
              s("div", bt, [
                s("div", gt, [
                  n(b, {
                    shape: "circle",
                    size: "4rem",
                    class: "mr-2"
                  }),
                  s("div", null, [
                    n(b, {
                      width: "10rem",
                      class: "mb-2"
                    }),
                    n(b, {
                      width: "5rem",
                      class: "mb-2"
                    }),
                    n(b, { height: ".5rem" })
                  ])
                ]),
                n(b, {
                  width: "100%",
                  height: "150px"
                }),
                s("div", yt, [
                  n(b, {
                    width: "4rem",
                    height: "2rem"
                  }),
                  n(b, {
                    width: "4rem",
                    height: "2rem"
                  })
                ])
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
};
export {
  Dt as default
};
