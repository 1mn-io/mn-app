const { defineComponent: c, ref: _, createElementBlock: t, openBlock: e, Fragment: o, renderList: u, createBlock: l, createCommentVNode: n } = window.Vue;
import m from "./AppMenuItem-Bk5S5_gj.js";
const d = { class: "layout-menu" }, i = {
  key: 1,
  class: "menu-separator"
}, B = /* @__PURE__ */ c({
  __name: "AppMenu",
  props: {
    _p: {},
    __p: {}
  },
  setup(a) {
    const s = _(a.__p.data.curr.data.menu);
    return (k, x) => (e(), t("ul", d, [
      (e(!0), t(o, null, u(s.value, (r, p) => (e(), t(o, { key: r }, [
        r.separator ? n("", !0) : (e(), l(m, {
          key: 0,
          item: r,
          index: p
        }, null, 8, ["item", "index"])),
        r.separator ? (e(), t("li", i)) : n("", !0)
      ], 64))), 128))
    ]));
  }
});
export {
  B as _
};
