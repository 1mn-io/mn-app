import { X as g, ai as A, Y as B, E as k, a1 as u, H as i, a2 as s, G as y, a6 as v, p as r, a3 as d, I as x, ab as S, a7 as R, F as D, a9 as E, af as N } from "./runtime-dom.esm-bundler-C71lIG0B.js";
import { u as F } from "./layout-Ck1jaogC.js";
import { u as L } from "./main-BQAWsb7p.js";
const W = {
  key: 0,
  class: "layout-menuitem-root-text"
}, j = ["href", "target"], z = { class: "layout-menuitem-text" }, G = {
  key: 0,
  class: "pi pi-fw pi-angle-down layout-submenu-toggler"
}, H = { class: "layout-menuitem-text" }, O = {
  key: 0,
  class: "pi pi-fw pi-angle-down layout-submenu-toggler"
}, P = { class: "layout-submenu" }, Y = {
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
    const h = L(), { layoutState: f, setActiveMenuItem: I, toggleMenu: M } = F(), o = e, m = g(!1), n = g(null);
    A(() => {
      n.value = o.parentItemKey ? o.parentItemKey + "-" + o.index : String(o.index);
      const t = f.activeMenuItem;
      m.value = t === n.value || t ? t.startsWith(n.value + "-") : !1;
    }), B(
      () => f.activeMenuItem,
      (t) => {
        m.value = t === n.value || t.startsWith(n.value + "-");
      }
    );
    function b(t, a) {
      if (a.disabled) {
        t.preventDefault();
        return;
      }
      (a.to || a.url) && (f.staticMenuMobileActive || f.overlayMenuActive) && M(), a.command && a.command({ originalEvent: t, item: a });
      const c = a.items ? m.value ? o.parentItemKey : n : n.value;
      I(c);
    }
    function K(t) {
      const a = h.fullPath.split("?")[0], c = t.to ? t.to.split("?")[0] : t.to;
      return a === c;
    }
    return (t, a) => {
      const c = k("router-link"), w = k("app-menu-item", !0);
      return i(), u("li", {
        class: r({ "layout-root-menuitem": e.root, "active-menuitem": m.value })
      }, [
        e.root && e.item.visible !== !1 ? (i(), u("div", W, v(e.item.label), 1)) : s("", !0),
        (!e.item.to || e.item.items) && e.item.visible !== !1 ? (i(), u("a", {
          key: 1,
          href: e.item.url,
          onClick: a[0] || (a[0] = (l) => b(l, e.item, e.index)),
          class: r(e.item.class),
          target: e.item.target,
          tabindex: "0"
        }, [
          d("i", {
            class: r([e.item.icon, "layout-menuitem-icon"])
          }, null, 2),
          d("span", z, v(e.item.label), 1),
          e.item.items ? (i(), u("i", G)) : s("", !0)
        ], 10, j)) : s("", !0),
        e.item.to && !e.item.items && e.item.visible !== !1 ? (i(), y(c, {
          key: 2,
          onClick: a[1] || (a[1] = (l) => b(l, e.item, e.index)),
          class: r([e.item.class, { "active-route": K(e.item) }]),
          tabindex: "0",
          to: e.item.to
        }, {
          default: x(() => [
            d("i", {
              class: r([e.item.icon, "layout-menuitem-icon"])
            }, null, 2),
            d("span", H, v(e.item.label), 1),
            e.item.items ? (i(), u("i", O)) : s("", !0)
          ]),
          _: 1
        }, 8, ["class", "to"])) : s("", !0),
        e.item.items && e.item.visible !== !1 ? (i(), y(S, {
          key: 3,
          name: "layout-submenu"
        }, {
          default: x(() => [
            R(d("ul", P, [
              (i(!0), u(D, null, E(e.item.items, (l, C) => (i(), y(w, {
                key: l,
                index: C,
                item: l,
                parentItemKey: n.value,
                root: !1
              }, null, 8, ["index", "item", "parentItemKey"]))), 128))
            ], 512), [
              [N, e.root ? !0 : m.value]
            ])
          ]),
          _: 1
        })) : s("", !0)
      ], 2);
    };
  }
};
export {
  Y as default
};
