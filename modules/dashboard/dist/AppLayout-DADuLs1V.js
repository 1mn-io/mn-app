import { s as A } from "./index-DyOtnuyg.js";
import { u as E } from "./layout-ByIz18Cs.js";
import h from "./AppFooter-CPBZPUU_.js";
import { _ as S } from "./AppSidebar.vue_vue_type_script_setup_true_lang-DJhCdIDZ.js";
import { _ as z } from "./AppTopbar.vue_vue_type_script_setup_true_lang-DySBRxfy.js";
import { d as N, X as d, a0 as O, a3 as x, Y as B, U as F, a1 as f, a4 as m, a as s, a2 as P, m as V, K as _, L as y, E as W, p as q, F as H, H as b, W as I } from "./runtime-dom.esm-bundler-7m8Vyt41.js";
import { _ as R } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const T = { class: "layout-main-container" }, U = { class: "layout-main" }, $ = /* @__PURE__ */ N({
  __name: "AppLayout",
  props: {
    _p: {},
    __p: {}
  },
  setup(v) {
    const { layoutConfig: i, layoutState: t, isSidebarActive: g } = E(), a = d(null), r = v, l = d(window.innerWidth < 768), o = d(!0);
    I("sidebarOpen", o);
    const c = () => {
      l.value = window.innerWidth < 768, l.value ? o.value = !1 : o.value = !0;
    }, p = () => {
      o.value = !o.value;
    };
    O(() => {
      c(), window.addEventListener("resize", c);
    }), x(() => {
      window.removeEventListener("resize", c);
    }), B(g, (e) => {
      e ? w() : M();
    });
    const k = F(() => ({
      "layout-overlay": i.menuMode === "overlay",
      "layout-static": i.menuMode === "static",
      "layout-static-inactive": t.staticMenuDesktopInactive && i.menuMode === "static",
      "layout-overlay-active": t.overlayMenuActive,
      "layout-mobile-active": t.staticMenuMobileActive
    }));
    function w() {
      a.value || (a.value = (e) => {
        C(e) && (t.overlayMenuActive = !1, t.staticMenuMobileActive = !1, t.menuHoverActive = !1);
      }, document.addEventListener("click", a.value));
    }
    function M() {
      a.value && (document.removeEventListener("click", a), a.value = null);
    }
    function C(e) {
      const u = document.querySelector(".layout-sidebar"), n = document.querySelector(".layout-menu-button");
      return !(u.isSameNode(e.target) || u.contains(e.target) || n.isSameNode(e.target) || n.contains(e.target));
    }
    return (e, u) => {
      const n = W("router-view"), L = A;
      return b(), f(H, null, [
        m("div", {
          class: q([v._p.my.s_pfx, "layout-wrapper", k.value])
        }, [
          s(z, V(r, { onToggle: p }), null, 16),
          s(S, _(y(r)), null, 16),
          m("div", T, [
            m("div", U, [
              s(n, _(y(r)), null, 16)
            ]),
            s(h)
          ]),
          l.value && o.value ? (b(), f("div", {
            key: 0,
            class: "sidebar-mask",
            onClick: p
          })) : P("", !0)
        ], 2),
        s(L)
      ], 64);
    };
  }
}), Q = /* @__PURE__ */ R($, [["__scopeId", "data-v-d501f1f0"]]);
export {
  Q as default
};
