const { ref: g, onBeforeMount: A, watch: B, resolveComponent: k, createElementBlock: u, openBlock: n, normalizeClass: r, createCommentVNode: o, createBlock: f, toDisplayString: v, createElementVNode: d, withCtx: x, Transition: S, withDirectives: R, Fragment: D, renderList: E, vShow: N } = window.Vue;
import { u as L } from "./layout-BMOaP7ZW.js";
import { u as W } from "./main-HoJjMwWR.js";
const j = {
  key: 0,
  class: "layout-menuitem-root-text"
}, z = ["href", "target"], F = { class: "layout-menuitem-text" }, O = {
  key: 0,
  class: "pi pi-fw pi-angle-down layout-submenu-toggler"
}, P = { class: "layout-menuitem-text" }, T = {
  key: 0,
  class: "pi pi-fw pi-angle-down layout-submenu-toggler"
}, V = { class: "layout-submenu" }, J = {
  __name: "AppMenuItem",
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    },
    root: {
      type: Boolean,
      default: !0
    },
    parentItemKey: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const h = W(), { layoutState: y, setActiveMenuItem: I, toggleMenu: M } = L(), m = e, s = g(!1), l = g(null);
    A(() => {
      l.value = m.parentItemKey ? m.parentItemKey + "-" + m.index : String(m.index);
      const t = y.activeMenuItem;
      s.value = t === l.value || t ? t.startsWith(l.value + "-") : !1;
    }), B(
      () => y.activeMenuItem,
      (t) => {
        s.value = t === l.value || t.startsWith(l.value + "-");
      }
    );
    function b(t, i) {
      if (i.disabled) {
        t.preventDefault();
        return;
      }
      (i.to || i.url) && (y.staticMenuMobileActive || y.overlayMenuActive) && M(), i.command && i.command({ originalEvent: t, item: i });
      const c = i.items ? s.value ? m.parentItemKey : l : l.value;
      I(c);
    }
    function K(t) {
      const i = h.fullPath.split("?")[0], c = t.to ? t.to.split("?")[0] : t.to;
      return i === c;
    }
    return (t, i) => {
      const c = k("router-link"), w = k("app-menu-item", !0);
      return n(), u("li", {
        class: r({ "layout-root-menuitem": e.root, "active-menuitem": s.value })
      }, [
        e.root && e.item.visible !== !1 ? (n(), u("div", j, v(e.item.label), 1)) : o("", !0),
        (!e.item.to || e.item.items) && e.item.visible !== !1 ? (n(), u("a", {
          key: 1,
          href: e.item.url,
          onClick: i[0] || (i[0] = (a) => b(a, e.item, e.index)),
          class: r(e.item.class),
          target: e.item.target,
          tabindex: "0"
        }, [
          d("i", {
            class: r([e.item.icon, "layout-menuitem-icon"])
          }, null, 2),
          d("span", F, v(e.item.label), 1),
          e.item.items ? (n(), u("i", O)) : o("", !0)
        ], 10, z)) : o("", !0),
        e.item.to && !e.item.items && e.item.visible !== !1 ? (n(), f(c, {
          key: 2,
          onClick: i[1] || (i[1] = (a) => b(a, e.item, e.index)),
          class: r([e.item.class, { "active-route": K(e.item) }]),
          tabindex: "0",
          to: e.item.to
        }, {
          default: x(() => [
            d("i", {
              class: r([e.item.icon, "layout-menuitem-icon"])
            }, null, 2),
            d("span", P, v(e.item.label), 1),
            e.item.items ? (n(), u("i", T)) : o("", !0)
          ]),
          _: 1
        }, 8, ["class", "to"])) : o("", !0),
        e.item.items && e.item.visible !== !1 ? (n(), f(S, {
          key: 3,
          name: "layout-submenu"
        }, {
          default: x(() => [
            R(d("ul", V, [
              (n(!0), u(D, null, E(e.item.items, (a, C) => (n(), f(w, {
                key: a,
                index: C,
                item: a,
                parentItemKey: l.value,
                root: !1
              }, null, 8, ["index", "item", "parentItemKey"]))), 128))
            ], 512), [
              [N, e.root ? !0 : s.value]
            ])
          ]),
          _: 1
        })) : o("", !0)
      ], 2);
    };
  }
};
export {
  J as default
};
