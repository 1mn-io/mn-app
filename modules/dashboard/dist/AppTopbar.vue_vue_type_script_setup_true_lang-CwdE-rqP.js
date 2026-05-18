import { S as v } from "./index-BobREUtY.js";
import { u as y } from "./layout-ByIz18Cs.js";
import m from "./AppConfigurator-BDoyR3ov.js";
import { d as _, a1 as s, a4 as o, a2 as C, a as u, P as a, I as g, E as f, a8 as c, a5 as h, p as k, H as e } from "./runtime-dom.esm-bundler-7m8Vyt41.js";
const x = "/logo.svg", A = { class: "layout-topbar" }, N = { class: "layout-topbar-logo-container" }, O = {
  key: 0,
  class: "layout-topbar-actions"
}, T = { class: "layout-config-menu" }, V = { class: "relative" }, B = {
  type: "button",
  class: "layout-topbar-action layout-topbar-action-highlight"
}, D = { class: "layout-topbar-menu-button layout-topbar-action" }, P = /* @__PURE__ */ _({
  __name: "AppTopbar",
  props: {
    _p: {},
    __p: {}
  },
  setup(d) {
    const { toggleMenu: l, toggleDarkMode: i, isDarkTheme: r } = y();
    return (M, t) => {
      const b = f("router-link"), p = v;
      return e(), s("div", A, [
        o("div", N, [
          o("button", {
            class: "layout-menu-button layout-topbar-action",
            onClick: t[0] || (t[0] = //@ts-ignore
            (...n) => a(l) && a(l)(...n))
          }, [...t[2] || (t[2] = [
            o("i", { class: "pi pi-bars" }, null, -1)
          ])]),
          u(b, {
            to: "/",
            class: "layout-topbar-logo"
          }, {
            default: g(() => [...t[3] || (t[3] = [
              o("img", {
                src: x,
                alt: "logo",
                class: "h-8"
              }, null, -1)
            ])]),
            _: 1
          })
        ]),
        d.__p.data.curr.data?.config?.off_h_right ? C("", !0) : (e(), s("div", O, [
          o("div", T, [
            o("button", {
              type: "button",
              class: "layout-topbar-action",
              onClick: t[1] || (t[1] = //@ts-ignore
              (...n) => a(i) && a(i)(...n))
            }, [
              o("i", {
                class: k(["pi", { "pi-moon": a(r), "pi-sun": !a(r) }])
              }, null, 2)
            ]),
            o("div", V, [
              c((e(), s("button", B, [...t[4] || (t[4] = [
                o("i", { class: "pi pi-palette" }, null, -1)
              ])])), [
                [p, { selector: "@next", enterFromClass: "hidden", enterActiveClass: "p-anchored-overlay-enter-active", leaveToClass: "hidden", leaveActiveClass: "p-anchored-overlay-leave-active", hideOnOutsideClick: !0 }]
              ]),
              u(m)
            ])
          ]),
          c((e(), s("button", D, [...t[5] || (t[5] = [
            o("i", { class: "pi pi-ellipsis-v" }, null, -1)
          ])])), [
            [p, { selector: "@next", enterFromClass: "hidden", enterActiveClass: "p-anchored-overlay-enter-active", leaveToClass: "hidden", leaveActiveClass: "p-anchored-overlay-leave-active", hideOnOutsideClick: !0 }]
          ]),
          t[6] || (t[6] = h('<div class="layout-topbar-menu hidden lg:block"><div class="layout-topbar-menu-content"><button type="button" class="layout-topbar-action"><i class="pi pi-calendar"></i><span>Calendar</span></button><button type="button" class="layout-topbar-action"><i class="pi pi-inbox"></i><span>Messages</span></button><button type="button" class="layout-topbar-action"><i class="pi pi-user"></i><span>Profile</span></button></div></div>', 1))
        ]))
      ]);
    };
  }
});
export {
  P as _
};
