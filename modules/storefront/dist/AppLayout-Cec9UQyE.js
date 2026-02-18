import { V as r, R as h, d as L, X as g, W as T, _ as D, $ as n, a as _, K as y, L as p, E, p as A, q as I, H as V } from "./runtime-dom.esm-bundler-TRF-LAC0.js";
import { _ as k } from "./CEWidget.vue_vue_type_script_setup_true_lang-D7YGUmIL.js";
import { u as x } from "./main-JLMy85Dd.js";
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
function z() {
  const e = (v) => {
    t.activeMenuItem = v.value || v;
  }, l = () => {
    if (!document.startViewTransition) {
      a();
      return;
    }
    document.startViewTransition(() => a(event));
  }, a = () => {
    s.darkTheme = !s.darkTheme, document.documentElement.classList.toggle("app-dark");
  }, M = () => {
    s.menuMode === "overlay" && (t.overlayMenuActive = !t.overlayMenuActive), window.innerWidth > 991 ? t.staticMenuDesktopInactive = !t.staticMenuDesktopInactive : t.staticMenuMobileActive = !t.staticMenuMobileActive;
  }, i = r(() => t.overlayMenuActive || t.staticMenuMobileActive), d = r(() => s.darkTheme), b = r(() => s.primary), m = r(() => s.surface);
  return {
    layoutConfig: s,
    layoutState: t,
    toggleMenu: M,
    isSidebarActive: i,
    isDarkTheme: d,
    getPrimary: b,
    getSurface: m,
    setActiveMenuItem: e,
    toggleDarkMode: l
  };
}
const N = { class: "fixed top-0 w-full z-100" }, q = { class: "layout-main-container" }, B = { class: "layout-main" }, H = { class: "w-full" }, O = { class: "fixed bottom-0 w-full z-100" }, $ = /* @__PURE__ */ L({
  __name: "AppLayout",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const { layoutConfig: l, layoutState: a, isSidebarActive: M } = z(), i = g(null), d = x(), b = e, m = g({
      meta: d.meta
    });
    console.log(d.meta), T(M, (o) => {
      o ? S() : w();
    });
    const v = r(() => ({
      "layout-overlay": l.menuMode === "overlay",
      "layout-static": l.menuMode === "static",
      "layout-static-inactive": a.staticMenuDesktopInactive && l.menuMode === "static",
      "layout-overlay-active": a.overlayMenuActive,
      "layout-mobile-active": a.staticMenuMobileActive
    }));
    function S() {
      i.value || (i.value = (o) => {
        C(o) && (a.overlayMenuActive = !1, a.staticMenuMobileActive = !1, a.menuHoverActive = !1);
      }, document.addEventListener("click", i.value));
    }
    function w() {
      i.value && (document.removeEventListener("click", i), i.value = null);
    }
    function C(o) {
      const c = document.querySelector(".layout-sidebar"), f = document.querySelector(".layout-menu-button");
      return !(c.isSameNode(o.target) || c.contains(o.target) || f.isSameNode(o.target) || f.contains(o.target));
    }
    return (o, c) => {
      const f = E("router-view");
      return V(), D("div", {
        class: A(m.value.meta.layout.class),
        style: I(m.value.meta.layout.style)
      }, [
        n("div", {
          class: A(["layout-wrapper", v.value])
        }, [
          n("header", N, [
            _(k, y(p({
              _p: e._p,
              __p: e.__p,
              ce_file: e.__p.data.curr.data.component.l.find((u) => u.name == "header").ce_file
              //'https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/header_sf/dist/data.json'
            })), null, 16)
          ]),
          n("div", q, [
            n("div", B, [
              _(f, y(p(b)), null, 16)
            ]),
            n("footer", H, [
              _(k, y(p({
                _p: e._p,
                __p: e.__p,
                ce_file: e.__p.data.curr.data.component.l.find((u) => u.name == "footer").ce_file
                //'https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/header_sf/dist/data.json'
              })), null, 16)
            ]),
            n("nav", O, [
              _(k, y(p({
                _p: e._p,
                __p: e.__p,
                ce_file: e.__p.data.curr.data.component.l.find((u) => u.name == "bottom_nav").ce_file
                //'https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/header_sf/dist/data.json'
              })), null, 16)
            ])
          ]),
          c[0] || (c[0] = n("div", { class: "layout-mask animate-fadein" }, null, -1))
        ], 2)
      ], 6);
    };
  }
});
export {
  $ as default
};
