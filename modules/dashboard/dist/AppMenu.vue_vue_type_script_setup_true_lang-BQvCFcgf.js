import c from "./AppMenuItem-BeOsUZu8.js";
import { d as _, X as u, a1 as r, F as s, a9 as l, H as e, G as m, a2 as t } from "./runtime-dom.esm-bundler-C71lIG0B.js";
const d = { class: "layout-menu" }, i = {
  key: 1,
  class: "menu-separator"
}, B = /* @__PURE__ */ _({
  __name: "AppMenu",
  props: {
    _p: {},
    __p: {}
  },
  setup(o) {
    const n = u(o.__p.data.curr.data.menu);
    return (k, x) => (e(), r("ul", d, [
      (e(!0), r(s, null, l(n.value, (a, p) => (e(), r(s, { key: a }, [
        a.separator ? t("", !0) : (e(), m(c, {
          key: 0,
          item: a,
          index: p
        }, null, 8, ["item", "index"])),
        a.separator ? (e(), r("li", i)) : t("", !0)
      ], 64))), 128))
    ]));
  }
});
export {
  B as _
};
