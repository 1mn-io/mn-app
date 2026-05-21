import { S as v } from "./index-ClqZITZP.js";
const { defineComponent: m, resolveComponent: y, createElementBlock: s, openBlock: a, createElementVNode: o, createCommentVNode: _, createVNode: u, unref: e, withCtx: C, withDirectives: c, createStaticVNode: g, normalizeClass: f } = window.Vue;
import { u as h } from "./layout-BMOaP7ZW.js";
import k from "./AppConfigurator-BOJ2d7Oc.js";
const x = "/logo.svg", A = { class: "layout-topbar" }, N = { class: "layout-topbar-logo-container" }, O = {
  key: 0,
  class: "layout-topbar-actions"
}, T = { class: "layout-config-menu" }, V = { class: "relative" }, D = {
  type: "button",
  class: "layout-topbar-action layout-topbar-action-highlight"
}, M = { class: "layout-topbar-menu-button layout-topbar-action" }, z = /* @__PURE__ */ m({
  __name: "AppTopbar",
  props: {
    _p: {},
    __p: {}
  },
  setup(d) {
    const { toggleMenu: l, toggleDarkMode: i, isDarkTheme: r } = h();
    return (S, t) => {
      const b = y("router-link"), p = v;
      return a(), s("div", A, [
        o("div", N, [
          o("button", {
            class: "layout-menu-button layout-topbar-action",
            onClick: t[0] || (t[0] = //@ts-ignore
            (...n) => e(l) && e(l)(...n))
          }, [...t[2] || (t[2] = [
            o("i", { class: "pi pi-bars" }, null, -1)
          ])]),
          u(b, {
            to: "/",
            class: "layout-topbar-logo"
          }, {
            default: C(() => [...t[3] || (t[3] = [
              o("img", {
                src: x,
                alt: "logo",
                class: "h-8"
              }, null, -1)
            ])]),
            _: 1
          })
        ]),
        d.__p.data.curr.data?.config?.off_h_right ? _("", !0) : (a(), s("div", O, [
          o("div", T, [
            o("button", {
              type: "button",
              class: "layout-topbar-action",
              onClick: t[1] || (t[1] = //@ts-ignore
              (...n) => e(i) && e(i)(...n))
            }, [
              o("i", {
                class: f(["pi", { "pi-moon": e(r), "pi-sun": !e(r) }])
              }, null, 2)
            ]),
            o("div", V, [
              c((a(), s("button", D, [...t[4] || (t[4] = [
                o("i", { class: "pi pi-palette" }, null, -1)
              ])])), [
                [p, { selector: "@next", enterFromClass: "hidden", enterActiveClass: "p-anchored-overlay-enter-active", leaveToClass: "hidden", leaveActiveClass: "p-anchored-overlay-leave-active", hideOnOutsideClick: !0 }]
              ]),
              u(k)
            ])
          ]),
          c((a(), s("button", M, [...t[5] || (t[5] = [
            o("i", { class: "pi pi-ellipsis-v" }, null, -1)
          ])])), [
            [p, { selector: "@next", enterFromClass: "hidden", enterActiveClass: "p-anchored-overlay-enter-active", leaveToClass: "hidden", leaveActiveClass: "p-anchored-overlay-leave-active", hideOnOutsideClick: !0 }]
          ]),
          t[6] || (t[6] = g('<div class="layout-topbar-menu hidden lg:block"><div class="layout-topbar-menu-content"><button type="button" class="layout-topbar-action"><i class="pi pi-calendar"></i><span>Calendar</span></button><button type="button" class="layout-topbar-action"><i class="pi pi-inbox"></i><span>Messages</span></button><button type="button" class="layout-topbar-action"><i class="pi pi-user"></i><span>Profile</span></button></div></div>', 1))
        ]))
      ]);
    };
  }
});
export {
  z as _
};
