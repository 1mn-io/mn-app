import { U as a, R as o } from "./runtime-dom.esm-bundler-C71lIG0B.js";
const t = o({
  preset: "Aura",
  primary: "emerald",
  surface: null,
  darkTheme: !1,
  menuMode: "static"
}), e = o({
  staticMenuDesktopInactive: !1,
  overlayMenuActive: !1,
  profileSidebarVisible: !1,
  configSidebarVisible: !1,
  staticMenuMobileActive: !1,
  menuHoverActive: !1,
  activeMenuItem: null
});
function d() {
  const s = (n) => {
    e.activeMenuItem = n.value || n;
  }, c = () => {
    if (!document.startViewTransition) {
      i();
      return;
    }
    document.startViewTransition(() => i(event));
  }, i = () => {
    t.darkTheme = !t.darkTheme, document.documentElement.classList.toggle("app-dark");
  }, r = () => {
    t.menuMode === "overlay" && (e.overlayMenuActive = !e.overlayMenuActive), window.innerWidth > 991 ? e.staticMenuDesktopInactive = !e.staticMenuDesktopInactive : e.staticMenuMobileActive = !e.staticMenuMobileActive;
  }, u = a(() => e.overlayMenuActive || e.staticMenuMobileActive), l = a(() => t.darkTheme), v = a(() => t.primary), M = a(() => t.surface);
  return {
    layoutConfig: t,
    layoutState: e,
    toggleMenu: r,
    isSidebarActive: u,
    isDarkTheme: l,
    getPrimary: v,
    getSurface: M,
    setActiveMenuItem: s,
    toggleDarkMode: c
  };
}
export {
  d as u
};
