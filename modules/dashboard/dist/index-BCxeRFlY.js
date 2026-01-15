import { B as u, as as a, j as v, W as t, P as c, R as r } from "./main-BuXBcYFI.js";
import { B as _ } from "./index-BRWhubL0.js";
var m = u.extend({
  name: "styleclass-directive"
}), f = _.extend({
  style: m
}), p = f.extend("styleclass", {
  mounted: function(e, l) {
    e.setAttribute("data-pd-styleclass", !0), this.bind(e, l);
  },
  unmounted: function(e) {
    this.unbind(e);
  },
  methods: {
    bind: function(e, l) {
      var s = this, i = a(l.value.selector, e);
      this.$el = i, e.$_pstyleclass_clicklistener = function() {
        l.value.toggleClass ? r(i, l.value.toggleClass) ? c(i, l.value.toggleClass) : t(i, l.value.toggleClass) : i.offsetParent === null ? s.enter(i, e, l) : s.leave(i, l);
      }, e.addEventListener("click", e.$_pstyleclass_clicklistener);
    },
    unbind: function(e) {
      e.$_pstyleclass_clicklistener && (e.removeEventListener("click", e.$_pstyleclass_clicklistener), e.$_pstyleclass_clicklistener = null), this.unbindResizeListener(e), this.unbindDocumentListener(e);
    },
    enter: function(e, l, s) {
      s.value.enterActiveClass ? e.$_pstyleclass_enter_animating || (e.$_pstyleclass_enter_animating = !0, s.value.enterActiveClass.includes("slidedown") && (e.style.height = "0px", c(e, s.value.hiddenClass || s.value.enterFromClass), e.style.maxHeight = e.scrollHeight + "px", t(e, s.value.hiddenClass || s.value.enterActiveClass), e.style.height = ""), t(e, s.value.enterActiveClass), s.value.enterFromClass && c(e, s.value.enterFromClass), e.$p_styleclass_enterlistener = function() {
        c(e, s.value.enterActiveClass), s.value.enterToClass && t(e, s.value.enterToClass), e.removeEventListener("animationend", e.$p_styleclass_enterlistener), e.removeEventListener("animationcancel", e.$p_styleclass_entercancellistener), s.value.enterActiveClass.includes("slidedown") && (e.style.maxHeight = ""), e.$_pstyleclass_enter_animating = !1;
      }, e.$p_styleclass_entercancellistener = function() {
        e.removeEventListener("animationcancel", e.$p_styleclass_entercancellistener), e.$_pstyleclass_enter_animating = !1;
      }, e.addEventListener("animationend", e.$p_styleclass_enterlistener), e.addEventListener("animationcancel", e.$p_styleclass_entercancellistener)) : (s.value.enterFromClass && c(e, s.value.enterFromClass), s.value.enterToClass && t(e, s.value.enterToClass)), s.value.hideOnOutsideClick && this.bindDocumentListener(e, l, s), s.value.hideOnResize && this.bindResizeListener(e, l, s);
    },
    leave: function(e, l) {
      l.value.leaveActiveClass ? e.$_pstyleclass_leave_animating || (e.$_pstyleclass_leave_animating = !0, t(e, l.value.leaveActiveClass), l.value.leaveFromClass && c(e, l.value.leaveFromClass), e.$p_styleclass_leavelistener = function() {
        c(e, l.value.leaveActiveClass), l.value.leaveToClass && t(e, l.value.leaveToClass), e.removeEventListener("animationend", e.$p_styleclass_leavelistener), e.removeEventListener("animationcancel", e.$p_styleclass_leavecancellistener), e.$_pstyleclass_leave_animating = !1;
      }, e.$p_styleclass_leavecancellistener = function() {
        e.removeEventListener("animationcancel", e.$p_styleclass_leavecancellistener), e.$_pstyleclass_leave_animating = !1;
      }, e.addEventListener("animationend", e.$p_styleclass_leavelistener), e.addEventListener("animationcancel", e.$p_styleclass_leavecancellistener)) : (l.value.leaveFromClass && c(e, l.value.leaveFromClass), l.value.leaveToClass && t(e, l.value.leaveToClass)), l.value.hideOnOutsideClick && this.unbindDocumentListener(e), l.value.hideOnResize && this.unbindResizeListener(e);
    },
    bindDocumentListener: function(e, l, s) {
      var i = this;
      e.$p_styleclass_documentlistener || (e.$p_styleclass_documentlistener = function(o) {
        !i.isVisible(e) || getComputedStyle(e).getPropertyValue("position") === "static" ? i.unbindDocumentListener(e) : i.isOutsideClick(o, e, l) && i.leave(e, s);
      }, e.ownerDocument.addEventListener("click", e.$p_styleclass_documentlistener));
    },
    unbindDocumentListener: function(e) {
      e.$p_styleclass_documentlistener && (e.ownerDocument.removeEventListener("click", e.$p_styleclass_documentlistener), e.$p_styleclass_documentlistener = null);
    },
    bindResizeListener: function(e, l, s) {
      var i;
      e.$p_styleclass_resizeselector = a((i = s.value.resizeSelector) !== null && i !== void 0 ? i : "window"), v(e.$p_styleclass_resizeselector) ? this.bindElementResizeListener(e, s) : this.bindWindowResizeListener(e, s);
    },
    unbindResizeListener: function(e) {
      this.unbindWindowResizeListener(e), this.unbindElementResizeListener(e);
    },
    bindWindowResizeListener: function(e, l) {
      var s = this;
      e.$p_styleclass_windowresizelistener || (e.$p_styleclass_windowresizelistener = function() {
        s.isVisible(e) ? s.leave(e, l) : s.unbindWindowResizeListener(e);
      }, e.ownerDocument.defaultView.addEventListener("resize", e.$p_styleclass_windowresizelistener));
    },
    unbindWindowResizeListener: function(e) {
      e.$p_styleclass_windowresizelistener && (e.ownerDocument.defaultView.removeEventListener("resize", e.$p_styleclass_windowresizelistener), e.$p_styleclass_windowresizelistener = null);
    },
    bindElementResizeListener: function(e, l) {
      var s = this;
      if (!e.$p_styleclass_resizeobserver && e.$p_styleclass_resizeselector) {
        var i = !0;
        e.$p_styleclass_resizeobserver = new ResizeObserver(function() {
          if (i) {
            i = !1;
            return;
          }
          s.isVisible(e) && s.leave(e, l);
        }), e.$p_styleclass_resizeobserver.observe(e.$p_styleclass_resizeselector);
      }
    },
    unbindElementResizeListener: function(e) {
      e.$p_styleclass_resizeobserver && (e.$p_styleclass_resizeobserver.disconnect(), e.$p_styleclass_resizeobserver = null);
    },
    isVisible: function(e) {
      return e.offsetParent !== null;
    },
    isOutsideClick: function(e, l, s) {
      return !s.isSameNode(e.target) && !s.contains(e.target) && !l.contains(e.target);
    }
  }
});
export {
  p as S
};
