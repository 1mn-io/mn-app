import { S as v } from "./index-D-xYARu7.js";
import { u as m } from "./layout-ByIz18Cs.js";
import y from "./AppConfigurator-DZ1VMfto.js";
import { d as _, a1 as a, a4 as o, a2 as g, a as p, I as C, E as f, a8 as u, a5 as h, P as s, p as k, H as e } from "./runtime-dom.esm-bundler-7m8Vyt41.js";
const x = "/logo.svg", A = { class: "layout-topbar" }, N = { class: "layout-topbar-logo-container" }, O = {
  key: 0,
  class: "layout-topbar-actions"
}, T = { class: "layout-config-menu" }, V = { class: "relative" }, B = {
  type: "button",
  class: "layout-topbar-action layout-topbar-action-highlight"
}, D = { class: "layout-topbar-menu-button layout-topbar-action" }, F = /* @__PURE__ */ _({
  __name: "AppTopbar",
  props: {
    _p: {},
    __p: {}
  },
  emits: ["toggle"],
  setup(c) {
    const { toggleDarkMode: n, isDarkTheme: l } = m();
    return (d, t) => {
      const b = f("router-link"), i = v;
      return e(), a("div", A, [
        o("div", N, [
          o("button", {
            class: "layout-menu-button layout-topbar-action",
            onClick: t[0] || (t[0] = (r) => d.$emit("toggle"))
          }, [...t[2] || (t[2] = [
            o("i", { class: "pi pi-bars" }, null, -1)
          ])]),
          p(b, {
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
        c.__p.data.curr.data?.config?.off_h_right ? g("", !0) : (e(), a("div", O, [
          o("div", T, [
            o("button", {
              type: "button",
              class: "layout-topbar-action",
              onClick: t[1] || (t[1] = //@ts-ignore
              (...r) => s(n) && s(n)(...r))
            }, [
              o("i", {
                class: k(["pi", { "pi-moon": s(l), "pi-sun": !s(l) }])
              }, null, 2)
            ]),
            o("div", V, [
              u((e(), a("button", B, [...t[4] || (t[4] = [
                o("i", { class: "pi pi-palette" }, null, -1)
              ])])), [
                [i, { selector: "@next", enterFromClass: "hidden", enterActiveClass: "p-anchored-overlay-enter-active", leaveToClass: "hidden", leaveActiveClass: "p-anchored-overlay-leave-active", hideOnOutsideClick: !0 }]
              ]),
              p(y)
            ])
          ]),
          u((e(), a("button", D, [...t[5] || (t[5] = [
            o("i", { class: "pi pi-ellipsis-v" }, null, -1)
          ])])), [
            [i, { selector: "@next", enterFromClass: "hidden", enterActiveClass: "p-anchored-overlay-enter-active", leaveToClass: "hidden", leaveActiveClass: "p-anchored-overlay-leave-active", hideOnOutsideClick: !0 }]
          ]),
          t[6] || (t[6] = h('<div class="layout-topbar-menu hidden lg:block"><div class="layout-topbar-menu-content"><button type="button" class="layout-topbar-action"><i class="pi pi-calendar"></i><span>Calendar</span></button><button type="button" class="layout-topbar-action"><i class="pi pi-inbox"></i><span>Messages</span></button><button type="button" class="layout-topbar-action"><i class="pi pi-user"></i><span>Profile</span></button></div></div>', 1))
        ]))
      ]);
    };
  }
});
export {
  F as _
};
