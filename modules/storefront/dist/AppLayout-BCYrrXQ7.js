import { V as r, R as h, d as L, X as g, W as T, _ as D, $ as n, a as f, K as _, L as p, E, p as A, H as I } from "./runtime-dom.esm-bundler-TRF-LAC0.js";
import { _ as k } from "./CEWidget.vue_vue_type_script_setup_true_lang-D7YGUmIL.js";
import { u as V } from "./main-VkqYoFI_.js";
const s = h({
  preset: "Aura",
  primary: "emerald",
  surface: null,
  darkTheme: !1,
  menuMode: "static"
}), t = h({
  staticMenuDesktopInactive: !1,
  overlayMenuActive: !1,
  profileSidebarVisible: !1,
  configSidebarVisible: !1,
  staticMenuMobileActive: !1,
  menuHoverActive: !1,
  activeMenuItem: null
});
function x() {
  const e = (m) => {
    t.activeMenuItem = m.value || m;
  }, c = () => {
    if (!document.startViewTransition) {
      a();
      return;
    }
    document.startViewTransition(() => a(event));
  }, a = () => {
    s.darkTheme = !s.darkTheme, document.documentElement.classList.toggle("app-dark");
  }, y = () => {
    s.menuMode === "overlay" && (t.overlayMenuActive = !t.overlayMenuActive), window.innerWidth > 991 ? t.staticMenuDesktopInactive = !t.staticMenuDesktopInactive : t.staticMenuMobileActive = !t.staticMenuMobileActive;
  }, i = r(() => t.overlayMenuActive || t.staticMenuMobileActive), d = r(() => s.darkTheme), M = r(() => s.primary), b = r(() => s.surface);
  return {
    layoutConfig: s,
    layoutState: t,
    toggleMenu: y,
    isSidebarActive: i,
    isDarkTheme: d,
    getPrimary: M,
    getSurface: b,
    setActiveMenuItem: e,
    toggleDarkMode: c
  };
}
const z = { class: "fixed top-0 w-full z-100" }, N = { class: "layout-main-container" }, B = { class: "layout-main" }, H = { class: "w-full" }, O = { class: "fixed bottom-0 w-full z-100" }, W = /* @__PURE__ */ L({
  __name: "AppLayout",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const { layoutConfig: c, layoutState: a, isSidebarActive: y } = x(), i = g(null), d = V(), M = e, b = g({
      meta: d.meta
    });
    console.log(d.meta), T(y, (o) => {
      o ? w() : S();
    });
    const m = r(() => ({
      "layout-overlay": c.menuMode === "overlay",
      "layout-static": c.menuMode === "static",
      "layout-static-inactive": a.staticMenuDesktopInactive && c.menuMode === "static",
      "layout-overlay-active": a.overlayMenuActive,
      "layout-mobile-active": a.staticMenuMobileActive
    }));
    function w() {
      i.value || (i.value = (o) => {
        C(o) && (a.overlayMenuActive = !1, a.staticMenuMobileActive = !1, a.menuHoverActive = !1);
      }, document.addEventListener("click", i.value));
    }
    function S() {
      i.value && (document.removeEventListener("click", i), i.value = null);
    }
    function C(o) {
      const l = document.querySelector(".layout-sidebar"), v = document.querySelector(".layout-menu-button");
      return !(l.isSameNode(o.target) || l.contains(o.target) || v.isSameNode(o.target) || v.contains(o.target));
    }
    return (o, l) => {
      const v = E("router-view");
      return I(), D("div", {
        class: A(b.value.meta.layout.class)
      }, [
        n("div", {
          class: A(["layout-wrapper", m.value])
        }, [
          n("header", z, [
            f(k, _(p({
              _p: e._p,
              __p: e.__p,
              ce_file: e.__p.data.curr.data.component.l.find((u) => u.name == "header").ce_file
              //'https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/header_sf/dist/data.json'
            })), null, 16)
          ]),
          n("div", N, [
            n("div", B, [
              f(v, _(p(M)), null, 16)
            ]),
            n("footer", H, [
              f(k, _(p({
                _p: e._p,
                __p: e.__p,
                ce_file: e.__p.data.curr.data.component.l.find((u) => u.name == "footer").ce_file
                //'https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/header_sf/dist/data.json'
              })), null, 16)
            ]),
            n("nav", O, [
              f(k, _(p({
                _p: e._p,
                __p: e.__p,
                ce_file: e.__p.data.curr.data.component.l.find((u) => u.name == "bottom_nav").ce_file
                //'https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/header_sf/dist/data.json'
              })), null, 16)
            ])
          ]),
          l[0] || (l[0] = n("div", { class: "layout-mask animate-fadein" }, null, -1))
        ], 2)
      ], 2);
    };
  }
});
export {
  W as default
};
