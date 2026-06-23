import { X as g, aj as A, Y as B, E as k, a1 as u, H as i, a2 as m, G as v, a7 as f, p as c, a4 as r, I as x, a8 as S, ag as D, F as E, aa as L, ac as N } from "./runtime-dom.esm-bundler-7m8Vyt41.js";
import { u as j } from "./layout-ByIz18Cs.js";
import { u as F } from "./main-CqXdokfd.js";
const O = {
  key: 0,
  class: "layout-menuitem-root-text"
}, R = ["href", "target"], W = { class: "layout-menuitem-text" }, z = {
  key: 0,
  class: "pi pi-fw pi-angle-down layout-submenu-toggler"
}, G = { class: "layout-menuitem-text" }, H = {
  key: 0,
  class: "pi pi-fw pi-angle-down layout-submenu-toggler"
}, T = { class: "layout-submenu" }, q = {
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
    const h = F(), { layoutState: d, setActiveMenuItem: I, toggleMenu: M } = j(), s = e, o = g(!1), n = g(null);
    A(() => {
      n.value = s.parentItemKey ? s.parentItemKey + "-" + s.index : String(s.index);
      const t = d.activeMenuItem;
      o.value = t === n.value || t ? t.startsWith(n.value + "-") : !1;
    }), B(
      () => d.activeMenuItem,
      (t) => {
        o.value = t === n.value || t.startsWith(n.value + "-");
      }
    );
    function b(t, a) {
      if (a.disabled) {
        t.preventDefault();
        return;
      }
      (a.to || a.url) && (d.staticMenuMobileActive || d.overlayMenuActive) && M(), a.command && a.command({ originalEvent: t, item: a });
      const y = a.items ? o.value ? s.parentItemKey : n : n.value;
      I(y);
    }
    function K(t) {
      return h.path === t.to;
    }
    return (t, a) => {
      const y = k("router-link"), w = k("app-menu-item");
      return i(), u("li", {
        class: c({ "layout-root-menuitem": e.root, "active-menuitem": o.value })
      }, [
        e.root && e.item.visible !== !1 ? (i(), u("div", O, f(e.item.label), 1)) : m("", !0),
        (!e.item.to || e.item.items) && e.item.visible !== !1 ? (i(), u("a", {
          key: 1,
          href: e.item.url,
          onClick: a[0] || (a[0] = (l) => b(l, e.item, e.index)),
          class: c(e.item.class),
          target: e.item.target,
          tabindex: "0"
        }, [
          r("i", {
            class: c([e.item.icon, "layout-menuitem-icon"])
          }, null, 2),
          r("span", W, f(e.item.label), 1),
          e.item.items ? (i(), u("i", z)) : m("", !0)
        ], 10, R)) : m("", !0),
        e.item.to && !e.item.items && e.item.visible !== !1 ? (i(), v(y, {
          key: 2,
          onClick: a[1] || (a[1] = (l) => b(l, e.item, e.index)),
          class: c([e.item.class, { "active-route": K(e.item) }]),
          tabindex: "0",
          to: e.item.to
        }, {
          default: x(() => [
            r("i", {
              class: c([e.item.icon, "layout-menuitem-icon"])
            }, null, 2),
            r("span", G, f(e.item.label), 1),
            e.item.items ? (i(), u("i", H)) : m("", !0)
          ]),
          _: 1
        }, 8, ["class", "to"])) : m("", !0),
        e.item.items && e.item.visible !== !1 ? (i(), v(N, {
          key: 3,
          name: "layout-submenu"
        }, {
          default: x(() => [
            S(r("ul", T, [
              (i(!0), u(E, null, L(e.item.items, (l, C) => (i(), v(w, {
                key: l,
                index: C,
                item: l,
                parentItemKey: n.value,
                root: !1
              }, null, 8, ["index", "item", "parentItemKey"]))), 128))
            ], 512), [
              [D, e.root ? !0 : o.value]
            ])
          ]),
          _: 1
        })) : m("", !0)
      ], 2);
    };
  }
};
export {
  q as default
};
