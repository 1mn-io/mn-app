import { V as r, R as A, d as h, W as w, _ as S, $ as c, a as v, K as f, L as _, E as C, p as L, H as T, X as D } from "./runtime-dom.esm-bundler-TRF-LAC0.js";
import { _ as k } from "./CEWidget.vue_vue_type_script_setup_true_lang-D7YGUmIL.js";
const o = A({
  preset: "Aura",
  primary: "emerald",
  surface: null,
  darkTheme: !1,
  menuMode: "static"
}), t = A({
  staticMenuDesktopInactive: !1,
  overlayMenuActive: !1,
  profileSidebarVisible: !1,
  configSidebarVisible: !1,
  staticMenuMobileActive: !1,
  menuHoverActive: !1,
  activeMenuItem: null
});
function E() {
  const e = (d) => {
    t.activeMenuItem = d.value || d;
  }, s = () => {
    if (!document.startViewTransition) {
      a();
      return;
    }
    document.startViewTransition(() => a(event));
  }, a = () => {
    o.darkTheme = !o.darkTheme, document.documentElement.classList.toggle("app-dark");
  }, p = () => {
    o.menuMode === "overlay" && (t.overlayMenuActive = !t.overlayMenuActive), window.innerWidth > 991 ? t.staticMenuDesktopInactive = !t.staticMenuDesktopInactive : t.staticMenuMobileActive = !t.staticMenuMobileActive;
  }, n = r(() => t.overlayMenuActive || t.staticMenuMobileActive), M = r(() => o.darkTheme), y = r(() => o.primary), b = r(() => o.surface);
  return {
    layoutConfig: o,
    layoutState: t,
    toggleMenu: p,
    isSidebarActive: n,
    isDarkTheme: M,
    getPrimary: y,
    getSurface: b,
    setActiveMenuItem: e,
    toggleDarkMode: s
  };
}
const I = { class: "fixed top-0 w-full z-100" }, V = { class: "layout-main-container" }, x = { class: "layout-main" }, z = { class: "w-full" }, N = { class: "fixed bottom-0 w-full z-100" }, O = /* @__PURE__ */ h({
  __name: "AppLayout",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const { layoutConfig: s, layoutState: a, isSidebarActive: p } = E(), n = D(null), M = e;
    w(p, (i) => {
      i ? b() : d();
    });
    const y = r(() => ({
      "layout-overlay": s.menuMode === "overlay",
      "layout-static": s.menuMode === "static",
      "layout-static-inactive": a.staticMenuDesktopInactive && s.menuMode === "static",
      "layout-overlay-active": a.overlayMenuActive,
      "layout-mobile-active": a.staticMenuMobileActive
    }));
    function b() {
      n.value || (n.value = (i) => {
        g(i) && (a.overlayMenuActive = !1, a.staticMenuMobileActive = !1, a.menuHoverActive = !1);
      }, document.addEventListener("click", n.value));
    }
    function d() {
      n.value && (document.removeEventListener("click", n), n.value = null);
    }
    function g(i) {
      const l = document.querySelector(".layout-sidebar"), m = document.querySelector(".layout-menu-button");
      return !(l.isSameNode(i.target) || l.contains(i.target) || m.isSameNode(i.target) || m.contains(i.target));
    }
    return (i, l) => {
      const m = C("router-view");
      return T(), S("div", {
        class: L(["layout-wrapper", y.value])
      }, [
        c("header", I, [
          v(k, f(_({
            _p: e._p,
            __p: e.__p,
            ce_file: e.__p.data.curr.data.component.l.find((u) => u.name == "header").ce_file
            //'https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/header_sf/dist/data.json'
          })), null, 16)
        ]),
        c("div", V, [
          c("div", x, [
            v(m, f(_(M)), null, 16)
          ]),
          c("footer", z, [
            v(k, f(_({
              _p: e._p,
              __p: e.__p,
              ce_file: e.__p.data.curr.data.component.l.find((u) => u.name == "footer").ce_file
              //'https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/header_sf/dist/data.json'
            })), null, 16)
          ]),
          c("nav", N, [
            v(k, f(_({
              _p: e._p,
              __p: e.__p,
              ce_file: e.__p.data.curr.data.component.l.find((u) => u.name == "bottom_nav").ce_file
              //'https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/header_sf/dist/data.json'
            })), null, 16)
          ])
        ]),
        l[0] || (l[0] = c("div", { class: "layout-mask animate-fadein" }, null, -1))
      ], 2);
    };
  }
});
export {
  O as default
};
