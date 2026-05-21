import { s as b } from "./index-C23oADQq.js";
const { defineComponent: k, ref: M, watch: C, computed: A, resolveComponent: g, createElementBlock: L, openBlock: E, Fragment: S, createElementVNode: s, createVNode: n, normalizeClass: w, normalizeProps: c, guardReactiveProps: u } = window.Vue;
import { u as N } from "./layout-BMOaP7ZW.js";
import O from "./AppFooter-CPBZPUU_.js";
import { _ as h } from "./AppSidebar.vue_vue_type_script_setup_true_lang-fw8gh8_W.js";
import { _ as q } from "./AppTopbar.vue_vue_type_script_setup_true_lang-dYsq8vm4.js";
const x = { class: "layout-main-container" }, z = { class: "layout-main" }, H = /* @__PURE__ */ k({
  __name: "AppLayout",
  props: {
    _p: {},
    __p: {}
  },
  setup(m) {
    const { layoutConfig: l, layoutState: t, isSidebarActive: d } = N(), o = M(null), r = m;
    C(d, (e) => {
      e ? v() : f();
    });
    const p = A(() => ({
      "layout-overlay": l.menuMode === "overlay",
      "layout-static": l.menuMode === "static",
      "layout-static-inactive": t.staticMenuDesktopInactive && l.menuMode === "static",
      "layout-overlay-active": t.overlayMenuActive,
      "layout-mobile-active": t.staticMenuMobileActive
    }));
    function v() {
      o.value || (o.value = (e) => {
        y(e) && (t.overlayMenuActive = !1, t.staticMenuMobileActive = !1, t.menuHoverActive = !1);
      }, document.addEventListener("click", o.value));
    }
    function f() {
      o.value && (document.removeEventListener("click", o), o.value = null);
    }
    function y(e) {
      const a = document.querySelector(".layout-sidebar"), i = document.querySelector(".layout-menu-button");
      return !(a.isSameNode(e.target) || a.contains(e.target) || i.isSameNode(e.target) || i.contains(e.target));
    }
    return (e, a) => {
      const i = g("router-view"), _ = b;
      return E(), L(S, null, [
        s("div", {
          class: w(["layout-wrapper", p.value])
        }, [
          n(q, c(u(r)), null, 16),
          n(h, c(u(r)), null, 16),
          s("div", x, [
            s("div", z, [
              n(i, c(u(r)), null, 16)
            ]),
            n(O)
          ]),
          a[0] || (a[0] = s("div", { class: "layout-mask animate-fadein" }, null, -1))
        ], 2),
        n(_)
      ], 64);
    };
  }
});
export {
  H as default
};
