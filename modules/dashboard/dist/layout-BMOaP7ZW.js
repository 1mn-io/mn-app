const { computed: i, reactive: o } = window.Vue;
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
  const c = (n) => {
    e.activeMenuItem = n.value || n;
  }, s = () => {
    if (!document.startViewTransition) {
      a();
      return;
    }
    document.startViewTransition(() => a(event));
  }, a = () => {
    t.darkTheme = !t.darkTheme, document.documentElement.classList.toggle("app-dark");
  }, r = () => {
    t.menuMode === "overlay" && (e.overlayMenuActive = !e.overlayMenuActive), window.innerWidth > 991 ? e.staticMenuDesktopInactive = !e.staticMenuDesktopInactive : e.staticMenuMobileActive = !e.staticMenuMobileActive;
  }, u = i(() => e.overlayMenuActive || e.staticMenuMobileActive), l = i(() => t.darkTheme), v = i(() => t.primary), M = i(() => t.surface);
  return {
    layoutConfig: t,
    layoutState: e,
    toggleMenu: r,
    isSidebarActive: u,
    isDarkTheme: l,
    getPrimary: v,
    getSurface: M,
    setActiveMenuItem: c,
    toggleDarkMode: s
  };
}
export {
  d as u
};
