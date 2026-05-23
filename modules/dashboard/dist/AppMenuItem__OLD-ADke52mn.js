const { ref: g, onBeforeMount: A, watch: B, resolveComponent: k, createElementBlock: u, openBlock: n, normalizeClass: c, createCommentVNode: m, createBlock: v, toDisplayString: f, createElementVNode: r, withCtx: x, Transition: S, withDirectives: D, Fragment: E, renderList: L, vShow: N } = window.Vue;
import { u as O } from "./layout-BMOaP7ZW.js";
import { u as R } from "./main-HoJjMwWR.js";
const W = {
  key: 0,
  class: "layout-menuitem-root-text"
}, j = ["href", "target"], z = { class: "layout-menuitem-text" }, F = {
  key: 0,
  class: "pi pi-fw pi-angle-down layout-submenu-toggler"
}, T = { class: "layout-menuitem-text" }, V = {
  key: 0,
  class: "pi pi-fw pi-angle-down layout-submenu-toggler"
}, q = { class: "layout-submenu" }, P = {
  __name: "AppMenuItem__OLD",
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
    const h = R(), { layoutState: d, setActiveMenuItem: I, toggleMenu: M } = O(), o = e, s = g(!1), a = g(null);
    A(() => {
      a.value = o.parentItemKey ? o.parentItemKey + "-" + o.index : String(o.index);
      const t = d.activeMenuItem;
      s.value = t === a.value || t ? t.startsWith(a.value + "-") : !1;
    }), B(
      () => d.activeMenuItem,
      (t) => {
        s.value = t === a.value || t.startsWith(a.value + "-");
      }
    );
    function b(t, i) {
      if (i.disabled) {
        t.preventDefault();
        return;
      }
      (i.to || i.url) && (d.staticMenuMobileActive || d.overlayMenuActive) && M(), i.command && i.command({ originalEvent: t, item: i });
      const y = i.items ? s.value ? o.parentItemKey : a : a.value;
      I(y);
    }
    function K(t) {
      return h.path === t.to;
    }
    return (t, i) => {
      const y = k("router-link"), w = k("app-menu-item");
      return n(), u("li", {
        class: c({ "layout-root-menuitem": e.root, "active-menuitem": s.value })
      }, [
        e.root && e.item.visible !== !1 ? (n(), u("div", W, f(e.item.label), 1)) : m("", !0),
        (!e.item.to || e.item.items) && e.item.visible !== !1 ? (n(), u("a", {
          key: 1,
          href: e.item.url,
          onClick: i[0] || (i[0] = (l) => b(l, e.item, e.index)),
          class: c(e.item.class),
          target: e.item.target,
          tabindex: "0"
        }, [
          r("i", {
            class: c([e.item.icon, "layout-menuitem-icon"])
          }, null, 2),
          r("span", z, f(e.item.label), 1),
          e.item.items ? (n(), u("i", F)) : m("", !0)
        ], 10, j)) : m("", !0),
        e.item.to && !e.item.items && e.item.visible !== !1 ? (n(), v(y, {
          key: 2,
          onClick: i[1] || (i[1] = (l) => b(l, e.item, e.index)),
          class: c([e.item.class, { "active-route": K(e.item) }]),
          tabindex: "0",
          to: e.item.to
        }, {
          default: x(() => [
            r("i", {
              class: c([e.item.icon, "layout-menuitem-icon"])
            }, null, 2),
            r("span", T, f(e.item.label), 1),
            e.item.items ? (n(), u("i", V)) : m("", !0)
          ]),
          _: 1
        }, 8, ["class", "to"])) : m("", !0),
        e.item.items && e.item.visible !== !1 ? (n(), v(S, {
          key: 3,
          name: "layout-submenu"
        }, {
          default: x(() => [
            D(r("ul", q, [
              (n(!0), u(E, null, L(e.item.items, (l, C) => (n(), v(w, {
                key: l,
                index: C,
                item: l,
                parentItemKey: a.value,
                root: !1
              }, null, 8, ["index", "item", "parentItemKey"]))), 128))
            ], 512), [
              [N, e.root ? !0 : s.value]
            ])
          ]),
          _: 1
        })) : m("", !0)
      ], 2);
    };
  }
};
export {
  P as default
};
