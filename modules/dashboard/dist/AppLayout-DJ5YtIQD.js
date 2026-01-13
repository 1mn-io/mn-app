import { s as b } from "./index-DZYUdi8X.js";
import { u as k } from "./layout-Ck1jaogC.js";
import M from "./AppFooter-CPBZPUU_.js";
import { _ as C } from "./AppSidebar.vue_vue_type_script_setup_true_lang-uKs-HoCE.js";
import A from "./AppTopbar-D2dAivn1.js";
import { d as L, X as g, Y as E, U as S, a1 as w, a3 as n, a as s, K as c, L as u, E as N, p as B, F, H as O } from "./runtime-dom.esm-bundler-C71lIG0B.js";
const h = { class: "layout-main-container" }, q = { class: "layout-main" }, D = /* @__PURE__ */ L({
  __name: "AppLayout",
  props: {
    _p: {},
    __p: {}
  },
  setup(m) {
    const { layoutConfig: l, layoutState: t, isSidebarActive: d } = k(), a = g(null), r = m;
    E(d, (e) => {
      e ? v() : f();
    });
    const p = S(() => ({
      "layout-overlay": l.menuMode === "overlay",
      "layout-static": l.menuMode === "static",
      "layout-static-inactive": t.staticMenuDesktopInactive && l.menuMode === "static",
      "layout-overlay-active": t.overlayMenuActive,
      "layout-mobile-active": t.staticMenuMobileActive
    }));
    function v() {
      a.value || (a.value = (e) => {
        y(e) && (t.overlayMenuActive = !1, t.staticMenuMobileActive = !1, t.menuHoverActive = !1);
      }, document.addEventListener("click", a.value));
    }
    function f() {
      a.value && (document.removeEventListener("click", a), a.value = null);
    }
    function y(e) {
      const o = document.querySelector(".layout-sidebar"), i = document.querySelector(".layout-menu-button");
      return !(o.isSameNode(e.target) || o.contains(e.target) || i.isSameNode(e.target) || i.contains(e.target));
    }
    return (e, o) => {
      const i = N("router-view"), _ = b;
      return O(), w(F, null, [
        n("div", {
          class: B(["layout-wrapper", p.value])
        }, [
          s(A, c(u(r)), null, 16),
          s(C, c(u(r)), null, 16),
          n("div", h, [
            n("div", q, [
              s(i, c(u(r)), null, 16)
            ]),
            s(M)
          ]),
          o[0] || (o[0] = n("div", { class: "layout-mask animate-fadein" }, null, -1))
        ], 2),
        s(_)
      ], 64);
    };
  }
});
export {
  D as default
};
