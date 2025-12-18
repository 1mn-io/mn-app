import { u as n, ax as c, aB as r } from "./main-k5gsV9f8.js";
import { s as l } from "./index-B4LaqIEm.js";
import { V as d, H as p, a as e, W as u, a6 as s, $ as _ } from "./runtime-dom.esm-bundler-CEAeiVlj.js";
const m = { class: "fixed flex gap-4 top-8 right-8" }, f = { class: "relative" }, x = {
  __name: "FloatingConfigurator",
  setup(v) {
    const { toggleDarkMode: a, isDarkTheme: o } = n();
    return (h, C) => {
      const t = l, i = c;
      return p(), d("div", m, [
        e(t, {
          type: "button",
          onClick: s(a),
          rounded: "",
          icon: s(o) ? "pi pi-moon" : "pi pi-sun",
          severity: "secondary"
        }, null, 8, ["onClick", "icon"]),
        u("div", f, [
          _(e(t, {
            icon: "pi pi-palette",
            type: "button",
            rounded: ""
          }, null, 512), [
            [i, { selector: "@next", enterFromClass: "hidden", enterActiveClass: "animate-scalein", leaveToClass: "hidden", leaveActiveClass: "animate-fadeout", hideOnOutsideClick: !0 }]
          ]),
          e(r)
        ])
      ]);
    };
  }
};
export {
  x as _
};
