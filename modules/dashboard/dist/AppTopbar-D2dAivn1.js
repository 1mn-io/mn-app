import { S as b } from "./index-9Dk0IPqp.js";
import { u as v } from "./layout-Ck1jaogC.js";
import y from "./AppConfigurator-CwBtuo82.js";
import { E as m, a1 as e, H as l, a3 as o, a as u, P as s, I as _, a7 as c, a4 as C, p as g } from "./runtime-dom.esm-bundler-C71lIG0B.js";
const h = "/logo.svg", f = { class: "layout-topbar" }, k = { class: "layout-topbar-logo-container" }, x = { class: "layout-topbar-actions" }, A = { class: "layout-config-menu" }, O = { class: "relative" }, T = {
  type: "button",
  class: "layout-topbar-action layout-topbar-action-highlight"
}, B = { class: "layout-topbar-menu-button layout-topbar-action" }, E = {
  __name: "AppTopbar",
  setup(D) {
    const { toggleMenu: n, toggleDarkMode: i, isDarkTheme: r } = v();
    return (M, t) => {
      const d = m("router-link"), p = b;
      return l(), e("div", f, [
        o("div", k, [
          o("button", {
            class: "layout-menu-button layout-topbar-action",
            onClick: t[0] || (t[0] = (...a) => s(n) && s(n)(...a))
          }, [...t[2] || (t[2] = [
            o("i", { class: "pi pi-bars" }, null, -1)
          ])]),
          u(d, {
            to: "/",
            class: "layout-topbar-logo"
          }, {
            default: _(() => [...t[3] || (t[3] = [
              o("img", {
                src: h,
                alt: "logo",
                class: "h-8"
              }, null, -1)
            ])]),
            _: 1
          })
        ]),
        o("div", x, [
          o("div", A, [
            o("button", {
              type: "button",
              class: "layout-topbar-action",
              onClick: t[1] || (t[1] = (...a) => s(i) && s(i)(...a))
            }, [
              o("i", {
                class: g(["pi", { "pi-moon": s(r), "pi-sun": !s(r) }])
              }, null, 2)
            ]),
            o("div", O, [
              c((l(), e("button", T, [...t[4] || (t[4] = [
                o("i", { class: "pi pi-palette" }, null, -1)
              ])])), [
                [p, { selector: "@next", enterFromClass: "hidden", enterActiveClass: "p-anchored-overlay-enter-active", leaveToClass: "hidden", leaveActiveClass: "p-anchored-overlay-leave-active", hideOnOutsideClick: !0 }]
              ]),
              u(y)
            ])
          ]),
          c((l(), e("button", B, [...t[5] || (t[5] = [
            o("i", { class: "pi pi-ellipsis-v" }, null, -1)
          ])])), [
            [p, { selector: "@next", enterFromClass: "hidden", enterActiveClass: "p-anchored-overlay-enter-active", leaveToClass: "hidden", leaveActiveClass: "p-anchored-overlay-leave-active", hideOnOutsideClick: !0 }]
          ]),
          t[6] || (t[6] = C('<div class="layout-topbar-menu hidden lg:block"><div class="layout-topbar-menu-content"><button type="button" class="layout-topbar-action"><i class="pi pi-calendar"></i><span>Calendar</span></button><button type="button" class="layout-topbar-action"><i class="pi pi-inbox"></i><span>Messages</span></button><button type="button" class="layout-topbar-action"><i class="pi pi-user"></i><span>Profile</span></button></div></div>', 1))
        ])
      ]);
    };
  }
};
export {
  E as default
};
