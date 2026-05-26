import { X as g, aj as A, Y as B, E as k, a1 as u, H as i, a2 as s, G as f, a7 as v, p as r, a4 as d, I as x, a8 as S, ag as R, F as D, aa as E, ac as N } from "./runtime-dom.esm-bundler-7m8Vyt41.js";
import { u as j } from "./layout-ByIz18Cs.js";
import { u as F } from "./main--b4Xr_Kp.js";
const L = {
  key: 0,
  class: "layout-menuitem-root-text"
}, W = ["href", "target"], z = { class: "layout-menuitem-text" }, G = {
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
    const h = F(), { layoutState: y, setActiveMenuItem: I, toggleMenu: M } = j(), o = e, m = g(!1), n = g(null);
    A(() => {
      n.value = o.parentItemKey ? o.parentItemKey + "-" + o.index : String(o.index);
      const t = y.activeMenuItem;
      m.value = t === n.value || t ? t.startsWith(n.value + "-") : !1;
    }), B(
      () => y.activeMenuItem,
      (t) => {
        m.value = t === n.value || t.startsWith(n.value + "-");
      }
    );
    function b(t, a) {
      if (a.disabled) {
        t.preventDefault();
        return;
      }
      (a.to || a.url) && (y.staticMenuMobileActive || y.overlayMenuActive) && M(), a.command && a.command({ originalEvent: t, item: a });
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
        e.root && e.item.visible !== !1 ? (i(), u("div", L, v(e.item.label), 1)) : s("", !0),
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
        ], 10, W)) : s("", !0),
        e.item.to && !e.item.items && e.item.visible !== !1 ? (i(), f(c, {
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
        e.item.items && e.item.visible !== !1 ? (i(), f(N, {
          key: 3,
          name: "layout-submenu"
        }, {
          default: x(() => [
            S(d("ul", P, [
              (i(!0), u(D, null, E(e.item.items, (l, C) => (i(), f(w, {
                key: l,
                index: C,
                item: l,
                parentItemKey: n.value,
                root: !1
              }, null, 8, ["index", "item", "parentItemKey"]))), 128))
            ], 512), [
              [R, e.root ? !0 : m.value]
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
