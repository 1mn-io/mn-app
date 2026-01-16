import { U as u, R as k, d as L, X as h, Y as w, _ as D, $ as m, a as l, K as _, L as b, E as r, p as E, F as I, H as V } from "./runtime-dom.esm-bundler-DX3hrXra.js";
const n = k({
  preset: "Aura",
  primary: "emerald",
  surface: null,
  darkTheme: !1,
  menuMode: "static"
}), e = k({
  staticMenuDesktopInactive: !1,
  overlayMenuActive: !1,
  profileSidebarVisible: !1,
  configSidebarVisible: !1,
  staticMenuMobileActive: !1,
  menuHoverActive: !1,
  activeMenuItem: null
});
function N() {
  const p = (d) => {
    e.activeMenuItem = d.value || d;
  }, i = () => {
    if (!document.startViewTransition) {
      t();
      return;
    }
    document.startViewTransition(() => t(event));
  }, t = () => {
    n.darkTheme = !n.darkTheme, document.documentElement.classList.toggle("app-dark");
  }, f = () => {
    n.menuMode === "overlay" && (e.overlayMenuActive = !e.overlayMenuActive), window.innerWidth > 991 ? e.staticMenuDesktopInactive = !e.staticMenuDesktopInactive : e.staticMenuMobileActive = !e.staticMenuMobileActive;
  }, o = u(() => e.overlayMenuActive || e.staticMenuMobileActive), s = u(() => n.darkTheme), M = u(() => n.primary), y = u(() => n.surface);
  return {
    layoutConfig: n,
    layoutState: e,
    toggleMenu: f,
    isSidebarActive: o,
    isDarkTheme: s,
    getPrimary: M,
    getSurface: y,
    setActiveMenuItem: p,
    toggleDarkMode: i
  };
}
const x = { class: "layout-main-container" }, B = { class: "layout-main" }, O = /* @__PURE__ */ L({
  __name: "AppLayout",
  props: {
    _p: {},
    __p: {}
  },
  setup(p) {
    const { layoutConfig: i, layoutState: t, isSidebarActive: f } = N(), o = h(null), s = p;
    w(f, (a) => {
      a ? y() : d();
    });
    const M = u(() => ({
      "layout-overlay": i.menuMode === "overlay",
      "layout-static": i.menuMode === "static",
      "layout-static-inactive": t.staticMenuDesktopInactive && i.menuMode === "static",
      "layout-overlay-active": t.overlayMenuActive,
      "layout-mobile-active": t.staticMenuMobileActive
    }));
    function y() {
      o.value || (o.value = (a) => {
        g(a) && (t.overlayMenuActive = !1, t.staticMenuMobileActive = !1, t.menuHoverActive = !1);
      }, document.addEventListener("click", o.value));
    }
    function d() {
      o.value && (document.removeEventListener("click", o), o.value = null);
    }
    function g(a) {
      const c = document.querySelector(".layout-sidebar"), v = document.querySelector(".layout-menu-button");
      return !(c.isSameNode(a.target) || c.contains(a.target) || v.isSameNode(a.target) || v.contains(a.target));
    }
    return (a, c) => {
      const v = r("app-topbar"), A = r("app-sidebar"), S = r("router-view"), C = r("app-footer"), T = r("Toast");
      return V(), D(I, null, [
        m("div", {
          class: E(["layout-wrapper", M.value])
        }, [
          l(v, _(b(s)), null, 16),
          l(A, _(b(s)), null, 16),
          m("div", x, [
            m("div", B, [
              l(S, _(b(s)), null, 16)
            ]),
            l(C)
          ]),
          c[0] || (c[0] = m("div", { class: "layout-mask animate-fadein" }, null, -1))
        ], 2),
        l(T)
      ], 64);
    };
  }
});
export {
  O as default
};
