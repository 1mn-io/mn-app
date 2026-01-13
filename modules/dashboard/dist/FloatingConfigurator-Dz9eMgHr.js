import { S as n } from "./index-9Dk0IPqp.js";
import { s as r } from "./index-DPejeiSQ.js";
import c from "./AppConfigurator-CwBtuo82.js";
import { u as l } from "./layout-Ck1jaogC.js";
import { a1 as p, H as d, a as e, a3 as m, P as o, a7 as u } from "./runtime-dom.esm-bundler-C71lIG0B.js";
const _ = { class: "fixed flex gap-4 top-8 right-8" }, f = { class: "relative" }, D = {
  __name: "FloatingConfigurator",
  setup(v) {
    const { toggleDarkMode: s, isDarkTheme: a } = l();
    return (h, C) => {
      const t = r, i = n;
      return d(), p("div", _, [
        e(t, {
          type: "button",
          onClick: o(s),
          rounded: "",
          icon: o(a) ? "pi pi-moon" : "pi pi-sun",
          severity: "secondary"
        }, null, 8, ["onClick", "icon"]),
        m("div", f, [
          u(e(t, {
            icon: "pi pi-palette",
            type: "button",
            rounded: ""
          }, null, 512), [
            [i, { selector: "@next", enterFromClass: "hidden", enterActiveClass: "animate-scalein", leaveToClass: "hidden", leaveActiveClass: "animate-fadeout", hideOnOutsideClick: !0 }]
          ]),
          e(c)
        ])
      ]);
    };
  }
};
export {
  D as _
};
