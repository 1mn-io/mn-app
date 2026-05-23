import { S as r } from "./index-ClqZITZP.js";
import { s as a } from "./index-Bbb9yBUj.js";
const { createElementBlock: c, openBlock: l, createVNode: e, createElementVNode: p, unref: o, withDirectives: d } = window.Vue;
import m from "./AppConfigurator-BOJ2d7Oc.js";
import { u } from "./layout-BMOaP7ZW.js";
const _ = { class: "fixed flex gap-4 top-8 right-8" }, f = { class: "relative" }, D = {
  __name: "FloatingConfigurator",
  setup(v) {
    const { toggleDarkMode: i, isDarkTheme: s } = u();
    return (h, C) => {
      const t = a, n = r;
      return l(), c("div", _, [
        e(t, {
          type: "button",
          onClick: o(i),
          rounded: "",
          icon: o(s) ? "pi pi-moon" : "pi pi-sun",
          severity: "secondary"
        }, null, 8, ["onClick", "icon"]),
        p("div", f, [
          d(e(t, {
            icon: "pi pi-palette",
            type: "button",
            rounded: ""
          }, null, 512), [
            [n, { selector: "@next", enterFromClass: "hidden", enterActiveClass: "animate-scalein", leaveToClass: "hidden", leaveActiveClass: "animate-fadeout", hideOnOutsideClick: !0 }]
          ]),
          e(m)
        ])
      ]);
    };
  }
};
export {
  D as _
};
