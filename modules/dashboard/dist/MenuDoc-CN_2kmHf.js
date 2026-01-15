import { B as z, s as b, n as O, z as x, l as F, V as oe, c as w, J as Y, k as H, Q as q, M as R, Y as te, o as qe, q as We, G as Ye, t as Xe, S as Ze, h as W, d as N } from "./main-BuXBcYFI.js";
import { s as de } from "./index-B-h2_nLl.js";
import { s as ne } from "./index-mbR0qGiO.js";
import { E as S, ae as X, a1 as d, H as c, F as L, a9 as D, a2 as I, m, a3 as f, a as v, a7 as _, G as y, J as P, p as A, a6 as T, I as K, af as pe, ab as Z, a8 as M, q as ie, K as fe, L as he, X as E, a5 as B } from "./runtime-dom.esm-bundler-C71lIG0B.js";
import { s as C } from "./index-YqnL2il-.js";
import { R as J, f as Je } from "./index-BRWhubL0.js";
import { x as V } from "./index-C2FJQt9j.js";
import { s as be } from "./index-D1RCZhIg.js";
import { s as Ie } from "./index-B0SPMiuI.js";
import { s as ae } from "./index-uUnpSRg3.js";
import { s as Qe } from "./index-DAWrjwha.js";
import { s as $e } from "./index-CcHoYxw3.js";
import { s as et } from "./index-CDqL7quk.js";
import { s as tt } from "./index-MjyVmUpG.js";
import { s as nt, a as it, b as at } from "./index-BpBRjvre.js";
import { s as rt, a as st } from "./index-CkKVOrJY.js";
import { s as ot } from "./index-BKwuUbG4.js";
var ut = `
    .p-panelmenu {
        display: flex;
        flex-direction: column;
        gap: dt('panelmenu.gap');
    }

    .p-panelmenu-panel {
        background: dt('panelmenu.panel.background');
        border-width: dt('panelmenu.panel.border.width');
        border-style: solid;
        border-color: dt('panelmenu.panel.border.color');
        color: dt('panelmenu.panel.color');
        border-radius: dt('panelmenu.panel.border.radius');
        padding: dt('panelmenu.panel.padding');
    }

    .p-panelmenu-panel:first-child {
        border-width: dt('panelmenu.panel.first.border.width');
        border-start-start-radius: dt('panelmenu.panel.first.top.border.radius');
        border-start-end-radius: dt('panelmenu.panel.first.top.border.radius');
    }

    .p-panelmenu-panel:last-child {
        border-width: dt('panelmenu.panel.last.border.width');
        border-end-start-radius: dt('panelmenu.panel.last.bottom.border.radius');
        border-end-end-radius: dt('panelmenu.panel.last.bottom.border.radius');
    }

    .p-panelmenu-header {
        outline: 0 none;
    }

    .p-panelmenu-header-content {
        border-radius: dt('panelmenu.item.border.radius');
        transition:
            background dt('panelmenu.transition.duration'),
            color dt('panelmenu.transition.duration'),
            outline-color dt('panelmenu.transition.duration'),
            box-shadow dt('panelmenu.transition.duration');
        outline-color: transparent;
        color: dt('panelmenu.item.color');
    }

    .p-panelmenu-header-link {
        display: flex;
        gap: dt('panelmenu.item.gap');
        padding: dt('panelmenu.item.padding');
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: relative;
        text-decoration: none;
        color: inherit;
    }

    .p-panelmenu-header-icon,
    .p-panelmenu-item-icon {
        color: dt('panelmenu.item.icon.color');
    }

    .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.color');
    }

    .p-panelmenu-submenu-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-submenu {
        margin: 0;
        padding: 0 0 0 dt('panelmenu.submenu.indent');
        outline: 0;
        list-style: none;
    }

    .p-panelmenu-submenu:dir(rtl) {
        padding: 0 dt('panelmenu.submenu.indent') 0 0;
    }

    .p-panelmenu-item-link {
        display: flex;
        gap: dt('panelmenu.item.gap');
        padding: dt('panelmenu.item.padding');
        align-items: center;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        position: relative;
        overflow: hidden;
    }

    .p-panelmenu-item-label {
        line-height: 1;
    }

    .p-panelmenu-item-content {
        border-radius: dt('panelmenu.item.border.radius');
        transition:
            background dt('panelmenu.transition.duration'),
            color dt('panelmenu.transition.duration'),
            outline-color dt('panelmenu.transition.duration'),
            box-shadow dt('panelmenu.transition.duration');
        color: dt('panelmenu.item.color');
        outline-color: transparent;
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panelmenu-content-wrapper {
        min-height: 0;
    }
`, lt = {
  root: "p-panelmenu p-component",
  panel: "p-panelmenu-panel",
  header: function(e) {
    var n = e.instance, a = e.item;
    return ["p-panelmenu-header", {
      "p-panelmenu-header-active": n.isItemActive(a) && !!a.items,
      "p-disabled": n.isItemDisabled(a)
    }];
  },
  headerContent: "p-panelmenu-header-content",
  headerLink: "p-panelmenu-header-link",
  headerIcon: "p-panelmenu-header-icon",
  headerLabel: "p-panelmenu-header-label",
  contentContainer: "p-panelmenu-content-container",
  contentWrapper: "p-panelmenu-content-wrapper",
  content: "p-panelmenu-content",
  rootList: "p-panelmenu-root-list",
  item: function(e) {
    var n = e.instance, a = e.processedItem;
    return ["p-panelmenu-item", {
      "p-focus": n.isItemFocused(a),
      "p-disabled": n.isItemDisabled(a)
    }];
  },
  itemContent: "p-panelmenu-item-content",
  itemLink: "p-panelmenu-item-link",
  itemIcon: "p-panelmenu-item-icon",
  itemLabel: "p-panelmenu-item-label",
  submenuIcon: "p-panelmenu-submenu-icon",
  submenu: "p-panelmenu-submenu",
  separator: "p-menuitem-separator"
}, mt = z.extend({
  name: "panelmenu",
  style: ut,
  classes: lt
}), ct = {
  name: "BasePanelMenu",
  extends: C,
  props: {
    model: {
      type: Array,
      default: null
    },
    expandedKeys: {
      type: Object,
      default: null
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  style: mt,
  provide: function() {
    return {
      $pcPanelMenu: this,
      $parentInstance: this
    };
  }
}, ge = {
  name: "PanelMenuSub",
  hostName: "PanelMenu",
  extends: C,
  emits: ["item-toggle", "item-mousemove"],
  props: {
    panelId: {
      type: String,
      default: null
    },
    focusedItemId: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: null
    },
    level: {
      type: Number,
      default: 0
    },
    templates: {
      type: Object,
      default: null
    },
    activeItemPath: {
      type: Object,
      default: null
    },
    tabindex: {
      type: Number,
      default: -1
    }
  },
  methods: {
    getItemId: function(e) {
      return "".concat(this.panelId, "_").concat(e.key);
    },
    getItemKey: function(e) {
      return this.getItemId(e);
    },
    getItemProp: function(e, n, a) {
      return e && e.item ? O(e.item[n], a) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    getPTOptions: function(e, n, a) {
      return this.ptm(e, {
        context: {
          item: n.item,
          index: a,
          active: this.isItemActive(n),
          focused: this.isItemFocused(n),
          disabled: this.isItemDisabled(n)
        }
      });
    },
    isItemActive: function(e) {
      return this.activeItemPath.some(function(n) {
        return n.key === e.key;
      });
    },
    isItemVisible: function(e) {
      return this.getItemProp(e, "visible") !== !1;
    },
    isItemDisabled: function(e) {
      return this.getItemProp(e, "disabled");
    },
    isItemFocused: function(e) {
      return this.focusedItemId === this.getItemId(e);
    },
    isItemGroup: function(e) {
      return b(e.items);
    },
    onItemClick: function(e, n) {
      this.getItemProp(n, "command", {
        originalEvent: e,
        item: n.item
      }), this.$emit("item-toggle", {
        processedItem: n,
        expanded: !this.isItemActive(n)
      });
    },
    onItemToggle: function(e) {
      this.$emit("item-toggle", e);
    },
    onItemMouseMove: function(e, n) {
      this.$emit("item-mousemove", {
        originalEvent: e,
        processedItem: n
      });
    },
    getAriaSetSize: function() {
      var e = this;
      return this.items.filter(function(n) {
        return e.isItemVisible(n) && !e.getItemProp(n, "separator");
      }).length;
    },
    getAriaPosInset: function(e) {
      var n = this;
      return e - this.items.slice(0, e).filter(function(a) {
        return n.isItemVisible(a) && n.getItemProp(a, "separator");
      }).length + 1;
    },
    getMenuItemProps: function(e, n) {
      return {
        action: m({
          class: this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions("itemLink", e, n)),
        icon: m({
          class: [this.cx("itemIcon"), this.getItemProp(e, "icon")]
        }, this.getPTOptions("itemIcon", e, n)),
        label: m({
          class: this.cx("itemLabel")
        }, this.getPTOptions("itemLabel", e, n)),
        submenuicon: m({
          class: this.cx("submenuIcon")
        }, this.getPTOptions("submenuicon", e, n))
      };
    }
  },
  components: {
    ChevronRightIcon: ne,
    ChevronDownIcon: de
  },
  directives: {
    ripple: J
  }
}, dt = ["tabindex"], pt = ["id", "aria-label", "aria-expanded", "aria-level", "aria-setsize", "aria-posinset", "data-p-focused", "data-p-disabled"], ft = ["onClick", "onMousemove"], ht = ["href", "target"];
function bt(t, e, n, a, s, i) {
  var u = S("PanelMenuSub", !0), l = X("ripple");
  return c(), d("ul", {
    class: A(t.cx("submenu")),
    tabindex: n.tabindex
  }, [(c(!0), d(L, null, D(n.items, function(r, o) {
    return c(), d(L, {
      key: i.getItemKey(r)
    }, [i.isItemVisible(r) && !i.getItemProp(r, "separator") ? (c(), d("li", m({
      key: 0,
      id: i.getItemId(r),
      class: [t.cx("item", {
        processedItem: r
      }), i.getItemProp(r, "class")],
      style: i.getItemProp(r, "style"),
      role: "treeitem",
      "aria-label": i.getItemLabel(r),
      "aria-expanded": i.isItemGroup(r) ? i.isItemActive(r) : void 0,
      "aria-level": n.level + 1,
      "aria-setsize": i.getAriaSetSize(),
      "aria-posinset": i.getAriaPosInset(o)
    }, {
      ref_for: !0
    }, i.getPTOptions("item", r, o), {
      "data-p-focused": i.isItemFocused(r),
      "data-p-disabled": i.isItemDisabled(r)
    }), [f("div", m({
      class: t.cx("itemContent"),
      onClick: function(h) {
        return i.onItemClick(h, r);
      },
      onMousemove: function(h) {
        return i.onItemMouseMove(h, r);
      }
    }, {
      ref_for: !0
    }, i.getPTOptions("itemContent", r, o)), [n.templates.item ? (c(), y(P(n.templates.item), {
      key: 1,
      item: r.item,
      root: !1,
      active: i.isItemActive(r),
      hasSubmenu: i.isItemGroup(r),
      label: i.getItemLabel(r),
      props: i.getMenuItemProps(r, o)
    }, null, 8, ["item", "active", "hasSubmenu", "label", "props"])) : _((c(), d("a", m({
      key: 0,
      href: i.getItemProp(r, "url"),
      class: t.cx("itemLink"),
      target: i.getItemProp(r, "target"),
      tabindex: "-1"
    }, {
      ref_for: !0
    }, i.getPTOptions("itemLink", r, o)), [i.isItemGroup(r) ? (c(), d(L, {
      key: 0
    }, [n.templates.submenuicon ? (c(), y(P(n.templates.submenuicon), m({
      key: 0,
      class: t.cx("submenuIcon"),
      active: i.isItemActive(r)
    }, {
      ref_for: !0
    }, i.getPTOptions("submenuIcon", r, o)), null, 16, ["class", "active"])) : (c(), y(P(i.isItemActive(r) ? "ChevronDownIcon" : "ChevronRightIcon"), m({
      key: 1,
      class: t.cx("submenuIcon")
    }, {
      ref_for: !0
    }, i.getPTOptions("submenuIcon", r, o)), null, 16, ["class"]))], 64)) : I("", !0), n.templates.itemicon ? (c(), y(P(n.templates.itemicon), {
      key: 1,
      item: r.item,
      class: A(t.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : i.getItemProp(r, "icon") ? (c(), d("span", m({
      key: 2,
      class: [t.cx("itemIcon"), i.getItemProp(r, "icon")]
    }, {
      ref_for: !0
    }, i.getPTOptions("itemIcon", r, o)), null, 16)) : I("", !0), f("span", m({
      class: t.cx("itemLabel")
    }, {
      ref_for: !0
    }, i.getPTOptions("itemLabel", r, o)), T(i.getItemLabel(r)), 17)], 16, ht)), [[l]])], 16, ft), v(Z, m({
      name: "p-collapsible"
    }, {
      ref_for: !0
    }, t.ptm("transition")), {
      default: K(function() {
        return [_(f("div", m({
          class: t.cx("contentContainer")
        }, {
          ref_for: !0
        }, t.ptm("contentContainer")), [f("div", m({
          class: t.cx("contentWrapper")
        }, {
          ref_for: !0
        }, t.ptm("contentWrapper")), [i.isItemVisible(r) && i.isItemGroup(r) ? (c(), y(u, m({
          key: 0,
          id: i.getItemId(r) + "_list",
          role: "group",
          panelId: n.panelId,
          focusedItemId: n.focusedItemId,
          items: r.items,
          level: n.level + 1,
          templates: n.templates,
          activeItemPath: n.activeItemPath,
          onItemToggle: i.onItemToggle,
          onItemMousemove: e[0] || (e[0] = function(p) {
            return t.$emit("item-mousemove", p);
          }),
          pt: t.pt,
          unstyled: t.unstyled
        }, {
          ref_for: !0
        }, t.ptm("submenu")), null, 16, ["id", "panelId", "focusedItemId", "items", "level", "templates", "activeItemPath", "onItemToggle", "pt", "unstyled"])) : I("", !0)], 16)], 16), [[pe, i.isItemActive(r)]])];
      }),
      _: 2
    }, 1040)], 16, pt)) : I("", !0), i.isItemVisible(r) && i.getItemProp(r, "separator") ? (c(), d("li", m({
      key: 1,
      style: i.getItemProp(r, "style"),
      class: [t.cx("separator"), i.getItemProp(r, "class")],
      role: "separator"
    }, {
      ref_for: !0
    }, t.ptm("separator")), null, 16)) : I("", !0)], 64);
  }), 128))], 10, dt);
}
ge.render = bt;
function It(t, e) {
  return kt(t) || yt(t, e) || vt(t, e) || gt();
}
function gt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vt(t, e) {
  if (t) {
    if (typeof t == "string") return ue(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ue(t, e) : void 0;
  }
}
function ue(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, a = Array(e); n < e; n++) a[n] = t[n];
  return a;
}
function yt(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var a, s, i, u, l = [], r = !0, o = !1;
    try {
      if (i = (n = n.call(t)).next, e !== 0) for (; !(r = (a = i.call(n)).done) && (l.push(a.value), l.length !== e); r = !0) ;
    } catch (p) {
      o = !0, s = p;
    } finally {
      try {
        if (!r && n.return != null && (u = n.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw s;
      }
    }
    return l;
  }
}
function kt(t) {
  if (Array.isArray(t)) return t;
}
var ve = {
  name: "PanelMenuList",
  hostName: "PanelMenu",
  extends: C,
  emits: ["item-toggle", "header-focus"],
  props: {
    panelId: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: null
    },
    templates: {
      type: Object,
      default: null
    },
    expandedKeys: {
      type: Object,
      default: null
    }
  },
  searchTimeout: null,
  searchValue: null,
  data: function() {
    return {
      focused: !1,
      focusedItem: null,
      activeItemPath: []
    };
  },
  watch: {
    expandedKeys: function(e) {
      this.autoUpdateActiveItemPath(e);
    }
  },
  created: function() {
    this.autoUpdateActiveItemPath(this.expandedKeys);
  },
  methods: {
    getItemProp: function(e, n) {
      return e && e.item ? O(e.item[n]) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    isItemVisible: function(e) {
      return this.getItemProp(e, "visible") !== !1;
    },
    isItemDisabled: function(e) {
      return this.getItemProp(e, "disabled");
    },
    isItemActive: function(e) {
      return this.activeItemPath.some(function(n) {
        return n.key === e.parentKey;
      });
    },
    isItemGroup: function(e) {
      return b(e.items);
    },
    onFocus: function(e) {
      this.focused = !0, this.focusedItem = this.focusedItem || (this.isElementInPanel(e, e.relatedTarget) ? this.findFirstItem() : this.findLastItem());
    },
    onBlur: function() {
      this.focused = !1, this.focusedItem = null, this.searchValue = "";
    },
    onKeyDown: function(e) {
      var n = e.metaKey || e.ctrlKey;
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(e);
          break;
        case "ArrowRight":
          this.onArrowRightKey(e);
          break;
        case "Home":
          this.onHomeKey(e);
          break;
        case "End":
          this.onEndKey(e);
          break;
        case "Space":
          this.onSpaceKey(e);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(e);
          break;
        case "Escape":
        case "Tab":
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !n && Y(e.key) && this.searchItems(e, e.key);
          break;
      }
    },
    onArrowDownKey: function(e) {
      var n = b(this.focusedItem) ? this.findNextItem(this.focusedItem) : this.findFirstItem();
      this.changeFocusedItem({
        originalEvent: e,
        processedItem: n,
        focusOnNext: !0
      }), e.preventDefault();
    },
    onArrowUpKey: function(e) {
      var n = b(this.focusedItem) ? this.findPrevItem(this.focusedItem) : this.findLastItem();
      this.changeFocusedItem({
        originalEvent: e,
        processedItem: n,
        selfCheck: !0
      }), e.preventDefault();
    },
    onArrowLeftKey: function(e) {
      var n = this;
      if (b(this.focusedItem)) {
        var a = this.activeItemPath.some(function(s) {
          return s.key === n.focusedItem.key;
        });
        a ? this.activeItemPath = this.activeItemPath.filter(function(s) {
          return s.key !== n.focusedItem.key;
        }) : this.focusedItem = b(this.focusedItem.parent) ? this.focusedItem.parent : this.focusedItem, e.preventDefault();
      }
    },
    onArrowRightKey: function(e) {
      var n = this;
      if (b(this.focusedItem)) {
        var a = this.isItemGroup(this.focusedItem);
        if (a) {
          var s = this.activeItemPath.some(function(i) {
            return i.key === n.focusedItem.key;
          });
          s ? this.onArrowDownKey(e) : (this.activeItemPath = this.activeItemPath.filter(function(i) {
            return i.parentKey !== n.focusedItem.parentKey;
          }), this.activeItemPath.push(this.focusedItem));
        }
        e.preventDefault();
      }
    },
    onHomeKey: function(e) {
      this.changeFocusedItem({
        originalEvent: e,
        processedItem: this.findFirstItem(),
        allowHeaderFocus: !1
      }), e.preventDefault();
    },
    onEndKey: function(e) {
      this.changeFocusedItem({
        originalEvent: e,
        processedItem: this.findLastItem(),
        focusOnNext: !0,
        allowHeaderFocus: !1
      }), e.preventDefault();
    },
    onEnterKey: function(e) {
      if (b(this.focusedItem)) {
        var n = x(this.$el, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), a = n && (x(n, '[data-pc-section="itemlink"]') || x(n, "a,button"));
        a ? a.click() : n && n.click();
      }
      e.preventDefault();
    },
    onSpaceKey: function(e) {
      this.onEnterKey(e);
    },
    onItemToggle: function(e) {
      var n = e.processedItem, a = e.expanded;
      this.expandedKeys ? this.$emit("item-toggle", {
        item: n.item,
        expanded: a
      }) : (this.activeItemPath = this.activeItemPath.filter(function(s) {
        return s.parentKey !== n.parentKey;
      }), a && this.activeItemPath.push(n)), this.focusedItem = n, w(this.$el);
    },
    onItemMouseMove: function(e) {
      this.focused && (this.focusedItem = e.processedItem);
    },
    isElementInPanel: function(e, n) {
      var a = e.currentTarget.closest('[data-pc-section="panel"]');
      return a && a.contains(n);
    },
    isItemMatched: function(e) {
      var n;
      return this.isValidItem(e) && ((n = this.getItemLabel(e)) === null || n === void 0 ? void 0 : n.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)));
    },
    isVisibleItem: function(e) {
      return !!e && (e.level === 0 || this.isItemActive(e)) && this.isItemVisible(e);
    },
    isValidItem: function(e) {
      return !!e && !this.isItemDisabled(e) && !this.getItemProp(e, "separator");
    },
    findFirstItem: function() {
      var e = this;
      return this.visibleItems.find(function(n) {
        return e.isValidItem(n);
      });
    },
    findLastItem: function() {
      var e = this;
      return oe(this.visibleItems, function(n) {
        return e.isValidItem(n);
      });
    },
    findNextItem: function(e) {
      var n = this, a = this.visibleItems.findIndex(function(i) {
        return i.key === e.key;
      }), s = a < this.visibleItems.length - 1 ? this.visibleItems.slice(a + 1).find(function(i) {
        return n.isValidItem(i);
      }) : void 0;
      return s || e;
    },
    findPrevItem: function(e) {
      var n = this, a = this.visibleItems.findIndex(function(i) {
        return i.key === e.key;
      }), s = a > 0 ? oe(this.visibleItems.slice(0, a), function(i) {
        return n.isValidItem(i);
      }) : void 0;
      return s || e;
    },
    searchItems: function(e, n) {
      var a = this;
      this.searchValue = (this.searchValue || "") + n;
      var s = null, i = !1;
      if (b(this.focusedItem)) {
        var u = this.visibleItems.findIndex(function(l) {
          return l.key === a.focusedItem.key;
        });
        s = this.visibleItems.slice(u).find(function(l) {
          return a.isItemMatched(l);
        }), s = F(s) ? this.visibleItems.slice(0, u).find(function(l) {
          return a.isItemMatched(l);
        }) : s;
      } else
        s = this.visibleItems.find(function(l) {
          return a.isItemMatched(l);
        });
      return b(s) && (i = !0), F(s) && F(this.focusedItem) && (s = this.findFirstItem()), b(s) && this.changeFocusedItem({
        originalEvent: e,
        processedItem: s,
        allowHeaderFocus: !1
      }), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        a.searchValue = "", a.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItem: function(e) {
      var n = e.originalEvent, a = e.processedItem, s = e.focusOnNext, i = e.selfCheck, u = e.allowHeaderFocus, l = u === void 0 ? !0 : u;
      b(this.focusedItem) && this.focusedItem.key !== a.key ? (this.focusedItem = a, this.scrollInView()) : l && this.$emit("header-focus", {
        originalEvent: n,
        focusOnNext: s,
        selfCheck: i
      });
    },
    scrollInView: function() {
      var e = x(this.$el, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
      e && e.scrollIntoView && e.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    autoUpdateActiveItemPath: function(e) {
      var n = this;
      this.activeItemPath = Object.entries(e || {}).reduce(function(a, s) {
        var i = It(s, 2), u = i[0], l = i[1];
        if (l) {
          var r = n.findProcessedItemByItemKey(u);
          r && a.push(r);
        }
        return a;
      }, []);
    },
    findProcessedItemByItemKey: function(e, n) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      if (n = n || a === 0 && this.processedItems, !n) return null;
      for (var s = 0; s < n.length; s++) {
        var i = n[s];
        if (this.getItemProp(i, "key") === e) return i;
        var u = this.findProcessedItemByItemKey(e, i.items, a + 1);
        if (u) return u;
      }
    },
    createProcessedItems: function(e) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", u = [];
      return e && e.forEach(function(l, r) {
        var o = (i !== "" ? i + "_" : "") + r, p = {
          item: l,
          index: r,
          level: a,
          key: o,
          parent: s,
          parentKey: i
        };
        p.items = n.createProcessedItems(l.items, a + 1, p, o), u.push(p);
      }), u;
    },
    flatItems: function(e) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return e && e.forEach(function(s) {
        n.isVisibleItem(s) && (a.push(s), n.flatItems(s.items, a));
      }), a;
    }
  },
  computed: {
    processedItems: function() {
      return this.createProcessedItems(this.items || []);
    },
    visibleItems: function() {
      return this.flatItems(this.processedItems);
    },
    focusedItemId: function() {
      return b(this.focusedItem) ? "".concat(this.panelId, "_").concat(this.focusedItem.key) : null;
    }
  },
  components: {
    PanelMenuSub: ge
  }
};
function xt(t, e, n, a, s, i) {
  var u = S("PanelMenuSub");
  return c(), y(u, m({
    id: n.panelId + "_list",
    class: t.cx("rootList"),
    role: "tree",
    tabindex: -1,
    "aria-activedescendant": s.focused ? i.focusedItemId : void 0,
    panelId: n.panelId,
    focusedItemId: s.focused ? i.focusedItemId : void 0,
    items: i.processedItems,
    templates: n.templates,
    activeItemPath: s.activeItemPath,
    onFocus: i.onFocus,
    onBlur: i.onBlur,
    onKeydown: i.onKeyDown,
    onItemToggle: i.onItemToggle,
    onItemMousemove: i.onItemMouseMove,
    pt: t.pt,
    unstyled: t.unstyled
  }, t.ptm("rootList")), null, 16, ["id", "class", "aria-activedescendant", "panelId", "focusedItemId", "items", "templates", "activeItemPath", "onFocus", "onBlur", "onKeydown", "onItemToggle", "onItemMousemove", "pt", "unstyled"]);
}
ve.render = xt;
function G(t) {
  "@babel/helpers - typeof";
  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, G(t);
}
function le(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Pt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? le(Object(n), !0).forEach(function(a) {
      wt(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function wt(t, e, n) {
  return (e = Lt(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Lt(t) {
  var e = Kt(t, "string");
  return G(e) == "symbol" ? e : e + "";
}
function Kt(t, e) {
  if (G(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(t, e);
    if (G(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ye = {
  name: "PanelMenu",
  extends: ct,
  inheritAttrs: !1,
  emits: ["update:expandedKeys", "panel-open", "panel-close"],
  data: function() {
    return {
      activeItem: null,
      activeItems: []
    };
  },
  methods: {
    getItemProp: function(e, n) {
      return e ? O(e[n]) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    getPTOptions: function(e, n, a) {
      return this.ptm(e, {
        context: {
          index: a,
          active: this.isItemActive(n),
          focused: this.isItemFocused(n),
          disabled: this.isItemDisabled(n)
        }
      });
    },
    isItemActive: function(e) {
      return this.expandedKeys ? this.expandedKeys[this.getItemProp(e, "key")] : this.multiple ? this.activeItems.some(function(n) {
        return H(e, n);
      }) : H(e, this.activeItem);
    },
    isItemVisible: function(e) {
      return this.getItemProp(e, "visible") !== !1;
    },
    isItemDisabled: function(e) {
      return this.getItemProp(e, "disabled");
    },
    isItemFocused: function(e) {
      return H(e, this.activeItem);
    },
    isItemGroup: function(e) {
      return b(e.items);
    },
    getPanelId: function(e) {
      return "".concat(this.$id, "_").concat(e);
    },
    getPanelKey: function(e) {
      return this.getPanelId(e);
    },
    getHeaderId: function(e) {
      return "".concat(this.getPanelId(e), "_header");
    },
    getContentId: function(e) {
      return "".concat(this.getPanelId(e), "_content");
    },
    onHeaderClick: function(e, n) {
      if (this.isItemDisabled(n)) {
        e.preventDefault();
        return;
      }
      n.command && n.command({
        originalEvent: e,
        item: n
      }), this.changeActiveItem(e, n), w(e.currentTarget);
    },
    onHeaderKeyDown: function(e, n) {
      switch (e.code) {
        case "ArrowDown":
          this.onHeaderArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onHeaderArrowUpKey(e);
          break;
        case "Home":
          this.onHeaderHomeKey(e);
          break;
        case "End":
          this.onHeaderEndKey(e);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onHeaderEnterKey(e, n);
          break;
      }
    },
    onHeaderArrowDownKey: function(e) {
      var n = q(e.currentTarget, "data-p-active") === !0 ? x(e.currentTarget.nextElementSibling, '[data-pc-section="rootlist"]') : null;
      n ? w(n) : this.updateFocusedHeader({
        originalEvent: e,
        focusOnNext: !0
      }), e.preventDefault();
    },
    onHeaderArrowUpKey: function(e) {
      var n = this.findPrevHeader(e.currentTarget.parentElement) || this.findLastHeader(), a = q(n, "data-p-active") === !0 ? x(n.nextElementSibling, '[data-pc-section="rootlist"]') : null;
      a ? w(a) : this.updateFocusedHeader({
        originalEvent: e,
        focusOnNext: !1
      }), e.preventDefault();
    },
    onHeaderHomeKey: function(e) {
      this.changeFocusedHeader(e, this.findFirstHeader()), e.preventDefault();
    },
    onHeaderEndKey: function(e) {
      this.changeFocusedHeader(e, this.findLastHeader()), e.preventDefault();
    },
    onHeaderEnterKey: function(e, n) {
      var a = x(e.currentTarget, '[data-pc-section="headerlink"]');
      a ? a.click() : this.onHeaderClick(e, n), e.preventDefault();
    },
    findNextHeader: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = n ? e : e.nextElementSibling, s = x(a, '[data-pc-section="header"]');
      return s ? q(s, "data-p-disabled") ? this.findNextHeader(s.parentElement) : s : null;
    },
    findPrevHeader: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = n ? e : e.previousElementSibling, s = x(a, '[data-pc-section="header"]');
      return s ? q(s, "data-p-disabled") ? this.findPrevHeader(s.parentElement) : s : null;
    },
    findFirstHeader: function() {
      return this.findNextHeader(this.$el.firstElementChild, !0);
    },
    findLastHeader: function() {
      return this.findPrevHeader(this.$el.lastElementChild, !0);
    },
    updateFocusedHeader: function(e) {
      var n = e.originalEvent, a = e.focusOnNext, s = e.selfCheck, i = n.currentTarget.closest('[data-pc-section="panel"]'), u = s ? x(i, '[data-pc-section="header"]') : a ? this.findNextHeader(i) : this.findPrevHeader(i);
      u ? this.changeFocusedHeader(n, u) : a ? this.onHeaderHomeKey(n) : this.onHeaderEndKey(n);
    },
    changeActiveItem: function(e, n) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      if (!this.isItemDisabled(n)) {
        var s = this.isItemActive(n), i = s ? "panel-close" : "panel-open";
        this.activeItem = a ? n : this.activeItem && H(n, this.activeItem) ? null : n, this.multiple && (this.activeItems.some(function(u) {
          return H(n, u);
        }) ? this.activeItems = this.activeItems.filter(function(u) {
          return !H(n, u);
        }) : this.activeItems.push(n)), this.changeExpandedKeys({
          item: n,
          expanded: !s
        }), this.$emit(i, {
          originalEvent: e,
          item: n
        });
      }
    },
    changeExpandedKeys: function(e) {
      var n = e.item, a = e.expanded, s = a === void 0 ? !1 : a;
      if (this.expandedKeys) {
        var i = Pt({}, this.expandedKeys);
        s ? i[n.key] = !0 : delete i[n.key], this.$emit("update:expandedKeys", i);
      }
    },
    changeFocusedHeader: function(e, n) {
      n && w(n);
    },
    getMenuItemProps: function(e, n) {
      return {
        icon: m({
          class: [this.cx("headerIcon"), this.getItemProp(e, "icon")]
        }, this.getPTOptions("headerIcon", e, n)),
        label: m({
          class: this.cx("headerLabel")
        }, this.getPTOptions("headerLabel", e, n))
      };
    }
  },
  components: {
    PanelMenuList: ve,
    ChevronRightIcon: ne,
    ChevronDownIcon: de
  }
}, Mt = ["id"], St = ["id", "tabindex", "aria-label", "aria-expanded", "aria-controls", "aria-disabled", "onClick", "onKeydown", "data-p-active", "data-p-disabled"], Ct = ["href"], At = ["id", "aria-labelledby"];
function Et(t, e, n, a, s, i) {
  var u = S("PanelMenuList");
  return c(), d("div", m({
    id: t.$id,
    class: t.cx("root")
  }, t.ptmi("root")), [(c(!0), d(L, null, D(t.model, function(l, r) {
    return c(), d(L, {
      key: i.getPanelKey(r)
    }, [i.isItemVisible(l) ? (c(), d("div", m({
      key: 0,
      style: i.getItemProp(l, "style"),
      class: [t.cx("panel"), i.getItemProp(l, "class")]
    }, {
      ref_for: !0
    }, t.ptm("panel")), [f("div", m({
      id: i.getHeaderId(r),
      class: [t.cx("header", {
        item: l
      }), i.getItemProp(l, "headerClass")],
      tabindex: i.isItemDisabled(l) ? -1 : t.tabindex,
      role: "button",
      "aria-label": i.getItemLabel(l),
      "aria-expanded": i.isItemActive(l),
      "aria-controls": i.getContentId(r),
      "aria-disabled": i.isItemDisabled(l),
      onClick: function(p) {
        return i.onHeaderClick(p, l);
      },
      onKeydown: function(p) {
        return i.onHeaderKeyDown(p, l);
      }
    }, {
      ref_for: !0
    }, i.getPTOptions("header", l, r), {
      "data-p-active": i.isItemActive(l),
      "data-p-disabled": i.isItemDisabled(l)
    }), [f("div", m({
      class: t.cx("headerContent")
    }, {
      ref_for: !0
    }, i.getPTOptions("headerContent", l, r)), [t.$slots.item ? (c(), y(P(t.$slots.item), {
      key: 1,
      item: l,
      root: !0,
      active: i.isItemActive(l),
      hasSubmenu: i.isItemGroup(l),
      label: i.getItemLabel(l),
      props: i.getMenuItemProps(l, r)
    }, null, 8, ["item", "active", "hasSubmenu", "label", "props"])) : (c(), d("a", m({
      key: 0,
      href: i.getItemProp(l, "url"),
      class: t.cx("headerLink"),
      tabindex: -1
    }, {
      ref_for: !0
    }, i.getPTOptions("headerLink", l, r)), [i.getItemProp(l, "items") ? M(t.$slots, "submenuicon", {
      key: 0,
      active: i.isItemActive(l)
    }, function() {
      return [(c(), y(P(i.isItemActive(l) ? "ChevronDownIcon" : "ChevronRightIcon"), m({
        class: t.cx("submenuIcon")
      }, {
        ref_for: !0
      }, i.getPTOptions("submenuIcon", l, r)), null, 16, ["class"]))];
    }) : I("", !0), t.$slots.headericon ? (c(), y(P(t.$slots.headericon), {
      key: 1,
      item: l,
      class: A([t.cx("headerIcon"), i.getItemProp(l, "icon")])
    }, null, 8, ["item", "class"])) : i.getItemProp(l, "icon") ? (c(), d("span", m({
      key: 2,
      class: [t.cx("headerIcon"), i.getItemProp(l, "icon")]
    }, {
      ref_for: !0
    }, i.getPTOptions("headerIcon", l, r)), null, 16)) : I("", !0), f("span", m({
      class: t.cx("headerLabel")
    }, {
      ref_for: !0
    }, i.getPTOptions("headerLabel", l, r)), T(i.getItemLabel(l)), 17)], 16, Ct))], 16)], 16, St), v(Z, m({
      name: "p-collapsible"
    }, {
      ref_for: !0
    }, t.ptm("transition")), {
      default: K(function() {
        return [_(f("div", m({
          id: i.getContentId(r),
          class: t.cx("contentContainer"),
          role: "region",
          "aria-labelledby": i.getHeaderId(r)
        }, {
          ref_for: !0
        }, t.ptm("contentContainer")), [f("div", m({
          class: t.cx("contentWrapper")
        }, {
          ref_for: !0
        }, t.ptm("contentWrapper")), [i.getItemProp(l, "items") ? (c(), d("div", m({
          key: 0,
          class: t.cx("content")
        }, {
          ref_for: !0
        }, t.ptm("content")), [v(u, {
          panelId: i.getPanelId(r),
          items: i.getItemProp(l, "items"),
          templates: t.$slots,
          expandedKeys: t.expandedKeys,
          onItemToggle: i.changeExpandedKeys,
          onHeaderFocus: i.updateFocusedHeader,
          pt: t.pt,
          unstyled: t.unstyled
        }, null, 8, ["panelId", "items", "templates", "expandedKeys", "onItemToggle", "onHeaderFocus", "pt", "unstyled"])], 16)) : I("", !0)], 16)], 16, At), [[pe, i.isItemActive(l)]])];
      }),
      _: 2
    }, 1040)], 16)) : I("", !0)], 64);
  }), 128))], 16, Mt);
}
ye.render = Et;
var Ft = `
    .p-megamenu {
        position: relative;
        display: flex;
        align-items: center;
        background: dt('megamenu.background');
        border: 1px solid dt('megamenu.border.color');
        border-radius: dt('megamenu.border.radius');
        color: dt('megamenu.color');
        gap: dt('megamenu.gap');
    }

    .p-megamenu-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: dt('megamenu.gap');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {
        border-radius: dt('megamenu.base.item.border.radius');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
        padding: dt('megamenu.base.item.padding');
    }

    .p-megamenu-item-content {
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration');
        border-radius: dt('megamenu.item.border.radius');
        color: dt('megamenu.item.color');
    }

    .p-megamenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('megamenu.item.padding');
        gap: dt('megamenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-megamenu-item-label {
        line-height: 1;
    }

    .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.color');
    }

    .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.color');
        font-size: dt('megamenu.submenu.icon.size');
        width: dt('megamenu.submenu.icon.size');
        height: dt('megamenu.submenu.icon.size');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content {
        color: dt('megamenu.item.active.color');
        background: dt('megamenu.item.active.background');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.active.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.active.color');
    }

    .p-megamenu-overlay {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
        left: 0;
        min-width: 100%;
        padding: dt('megamenu.overlay.padding');
        background: dt('megamenu.overlay.background');
        color: dt('megamenu.overlay.color');
        border: 1px solid dt('megamenu.overlay.border.color');
        border-radius: dt('megamenu.overlay.border.radius');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        list-style: none;
        padding: dt('megamenu.submenu.padding');
        min-width: 12.5rem;
        display: flex;
        flex-direction: column;
        gap: dt('megamenu.submenu.gap');
    }

    .p-megamenu-submenu-label {
        padding: dt('megamenu.submenu.label.padding');
        color: dt('megamenu.submenu.label.color');
        font-weight: dt('megamenu.submenu.label.font.weight');
        background: dt('megamenu.submenu.label.background');
    }

    .p-megamenu-separator {
        border-block-start: 1px solid dt('megamenu.separator.border.color');
    }

    .p-megamenu-horizontal {
        align-items: center;
        padding: dt('megamenu.horizontal.orientation.padding');
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: dt('megamenu.horizontal.orientation.gap');
    }

    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    .p-megamenu-horizontal .p-megamenu-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-vertical {
        display: inline-flex;
        min-width: 12.5rem;
        flex-direction: column;
        align-items: stretch;
        padding: dt('megamenu.vertical.orientation.padding');
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        align-items: stretch;
        flex-direction: column;
        gap: dt('megamenu.vertical.orientation.gap');
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 100%;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
        transform: rotate(180deg);
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: dt('megamenu.overlay.gap');
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }

    .p-megamenu-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('megamenu.mobile.button.size');
        height: dt('megamenu.mobile.button.size');
        position: relative;
        color: dt('megamenu.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('megamenu.mobile.button.border.radius');
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration'),
            outline-color dt('megamenu.transition.duration'),
            box-shadow dt('megamenu.transition.duration');
        outline-color: transparent;
    }

    .p-megamenu-button:hover {
        color: dt('megamenu.mobile.button.hover.color');
        background: dt('megamenu.mobile.button.hover.background');
    }

    .p-megamenu-button:focus-visible {
        box-shadow: dt('megamenu.mobile.button.focus.ring.shadow');
        outline: dt('megamenu.mobile.button.focus.ring.width') dt('megamenu.mobile.button.focus.ring.style') dt('megamenu.mobile.button.focus.ring.color');
        outline-offset: dt('megamenu.mobile.button.focus.ring.offset');
    }

    .p-megamenu-mobile {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-button {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-root-list {
        position: absolute;
        display: none;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        width: 100%;
        padding: dt('megamenu.submenu.padding');
        gap: dt('megamenu.submenu.gap');
        background: dt('megamenu.overlay.background');
        border: 1px solid dt('megamenu.overlay.border.color');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-mobile-active .p-megamenu-root-list {
        display: block;
    }

    .p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
        width: 100%;
        position: static;
    }

    .p-megamenu-mobile .p-megamenu-overlay {
        position: static;
        border: 0 none;
        border-radius: 0;
        box-shadow: none;
    }

    .p-megamenu-mobile .p-megamenu-grid {
        flex-wrap: wrap;
        overflow: auto;
        max-height: 90%;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        transform: rotate(-180deg);
    }
`, Ot = {
  rootList: function(e) {
    var n = e.props;
    return {
      "max-height": n.scrollHeight,
      overflow: "auto"
    };
  }
}, Dt = {
  root: function(e) {
    var n = e.instance;
    return ["p-megamenu p-component", {
      "p-megamenu-mobile": n.queryMatches,
      "p-megamenu-mobile-active": n.mobileActive,
      "p-megamenu-horizontal": n.horizontal,
      "p-megamenu-vertical": n.vertical
    }];
  },
  start: "p-megamenu-start",
  button: "p-megamenu-button",
  rootList: "p-megamenu-root-list",
  submenuLabel: function(e) {
    var n = e.instance, a = e.processedItem;
    return ["p-megamenu-submenu-label", {
      "p-disabled": n.isItemDisabled(a)
    }];
  },
  item: function(e) {
    var n = e.instance, a = e.processedItem;
    return ["p-megamenu-item", {
      "p-megamenu-item-active": n.isItemActive(a),
      "p-focus": n.isItemFocused(a),
      "p-disabled": n.isItemDisabled(a)
    }];
  },
  itemContent: "p-megamenu-item-content",
  itemLink: "p-megamenu-item-link",
  itemIcon: "p-megamenu-item-icon",
  itemLabel: "p-megamenu-item-label",
  submenuIcon: "p-megamenu-submenu-icon",
  overlay: "p-megamenu-overlay",
  grid: "p-megamenu-grid",
  column: function(e) {
    var n = e.instance, a = e.processedItem, s = n.isItemGroup(a) ? a.items.length : 0, i;
    if (n.$parentInstance.queryMatches) i = "p-megamenu-col-12";
    else
      switch (s) {
        case 2:
          i = "p-megamenu-col-6";
          break;
        case 3:
          i = "p-megamenu-col-4";
          break;
        case 4:
          i = "p-megamenu-col-3";
          break;
        case 6:
          i = "p-megamenu-col-2";
          break;
        default:
          i = "p-megamenu-col-12";
          break;
      }
    return i;
  },
  submenu: "p-megamenu-submenu",
  separator: "p-megamenu-separator",
  end: "p-megamenu-end"
}, Vt = z.extend({
  name: "megamenu",
  style: Ft,
  classes: Dt,
  inlineStyles: Ot
}), Tt = {
  name: "BaseMegaMenu",
  extends: C,
  props: {
    model: {
      type: Array,
      default: null
    },
    orientation: {
      type: String,
      default: "horizontal"
    },
    breakpoint: {
      type: String,
      default: "960px"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: 0
    },
    scrollHeight: {
      type: String,
      default: "20rem"
    },
    ariaLabelledby: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  style: Vt,
  provide: function() {
    return {
      $pcMegaMenu: this,
      $parentInstance: this
    };
  }
}, ke = {
  name: "MegaMenuSub",
  hostName: "MegaMenu",
  extends: C,
  emits: ["item-click", "item-mouseenter"],
  props: {
    menuId: {
      type: String,
      default: null
    },
    focusedItemId: {
      type: String,
      default: null
    },
    horizontal: {
      type: Boolean,
      default: !1
    },
    submenu: {
      type: Object,
      default: null
    },
    mobileActive: {
      type: Boolean,
      default: !1
    },
    items: {
      type: Array,
      default: null
    },
    level: {
      type: Number,
      default: 0
    },
    templates: {
      type: Object,
      default: null
    },
    activeItem: {
      type: Object,
      default: null
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getSubListId: function(e) {
      return "".concat(this.getItemId(e), "_list");
    },
    getSubListKey: function(e) {
      return this.getSubListId(e);
    },
    getItemId: function(e) {
      return "".concat(this.menuId, "_").concat(e.key);
    },
    getItemKey: function(e) {
      return this.getItemId(e);
    },
    getItemProp: function(e, n, a) {
      return e && e.item ? O(e.item[n], a) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    getPTOptions: function(e, n, a) {
      return this.ptm(a, {
        context: {
          item: e.item,
          index: n,
          active: this.isItemActive(e),
          focused: this.isItemFocused(e),
          disabled: this.isItemDisabled(e)
        }
      });
    },
    isItemActive: function(e) {
      return b(this.activeItem) ? this.activeItem.key === e.key : !1;
    },
    isItemVisible: function(e) {
      return this.getItemProp(e, "visible") !== !1;
    },
    isItemDisabled: function(e) {
      return this.getItemProp(e, "disabled");
    },
    isItemFocused: function(e) {
      return this.focusedItemId === this.getItemId(e);
    },
    isItemGroup: function(e) {
      return b(e.items);
    },
    onItemClick: function(e, n) {
      this.getItemProp(n, "command", {
        originalEvent: e,
        item: n.item
      }), this.$emit("item-click", {
        originalEvent: e,
        processedItem: n,
        isFocus: !0
      });
    },
    onItemMouseEnter: function(e, n) {
      this.$emit("item-mouseenter", {
        originalEvent: e,
        processedItem: n
      });
    },
    getAriaSetSize: function() {
      var e = this;
      return this.items.filter(function(n) {
        return e.isItemVisible(n) && !e.getItemProp(n, "separator");
      }).length;
    },
    getAriaPosInset: function(e) {
      var n = this;
      return e - this.items.slice(0, e).filter(function(a) {
        return n.isItemVisible(a) && n.getItemProp(a, "separator");
      }).length + 1;
    },
    getMenuItemProps: function(e, n) {
      return {
        action: m({
          class: this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions(e, n, "itemLink")),
        icon: m({
          class: [this.cx("itemIcon"), this.getItemProp(e, "icon")]
        }, this.getPTOptions(e, n, "itemIcon")),
        label: m({
          class: this.cx("label")
        }, this.getPTOptions(e, n, "label")),
        submenuicon: m({
          class: this.cx("submenuIcon")
        }, this.getPTOptions(e, n, "submenuIcon"))
      };
    }
  },
  components: {
    AngleRightIcon: ae,
    AngleDownIcon: Ie
  },
  directives: {
    ripple: J
  }
}, zt = ["tabindex"], Bt = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], Ht = ["onClick", "onMouseenter"], Rt = ["href", "target"], _t = ["id"];
function Nt(t, e, n, a, s, i) {
  var u = S("MegaMenuSub", !0), l = X("ripple");
  return c(), d("ul", m({
    class: n.level === 0 ? t.cx("rootList") : t.cx("submenu"),
    tabindex: n.tabindex
  }, n.level === 0 ? t.ptm("rootList") : t.ptm("submenu")), [n.submenu ? (c(), d("li", m({
    key: 0,
    class: [t.cx("submenuLabel", {
      submenu: n.submenu
    }), i.getItemProp(n.submenu, "class")],
    style: i.getItemProp(n.submenu, "style"),
    role: "presentation"
  }, t.ptm("submenuLabel")), T(i.getItemLabel(n.submenu)), 17)) : I("", !0), (c(!0), d(L, null, D(n.items, function(r, o) {
    return c(), d(L, {
      key: i.getItemKey(r)
    }, [i.isItemVisible(r) && !i.getItemProp(r, "separator") ? (c(), d("li", m({
      key: 0,
      id: i.getItemId(r),
      style: i.getItemProp(r, "style"),
      class: [t.cx("item", {
        processedItem: r
      }), i.getItemProp(r, "class")],
      role: "menuitem",
      "aria-label": i.getItemLabel(r),
      "aria-disabled": i.isItemDisabled(r) || void 0,
      "aria-expanded": i.isItemGroup(r) ? i.isItemActive(r) : void 0,
      "aria-haspopup": i.isItemGroup(r) && !i.getItemProp(r, "to") ? "menu" : void 0,
      "aria-level": n.level + 1,
      "aria-setsize": i.getAriaSetSize(),
      "aria-posinset": i.getAriaPosInset(o)
    }, {
      ref_for: !0
    }, i.getPTOptions(r, o, "item"), {
      "data-p-active": i.isItemActive(r),
      "data-p-focused": i.isItemFocused(r),
      "data-p-disabled": i.isItemDisabled(r)
    }), [f("div", m({
      class: t.cx("itemContent"),
      onClick: function(h) {
        return i.onItemClick(h, r);
      },
      onMouseenter: function(h) {
        return i.onItemMouseEnter(h, r);
      }
    }, {
      ref_for: !0
    }, i.getPTOptions(r, o, "itemContent")), [n.templates.item ? (c(), y(P(n.templates.item), {
      key: 1,
      item: r.item,
      hasSubmenu: i.isItemGroup(r),
      label: i.getItemLabel(r),
      props: i.getMenuItemProps(r, o)
    }, null, 8, ["item", "hasSubmenu", "label", "props"])) : _((c(), d("a", m({
      key: 0,
      href: i.getItemProp(r, "url"),
      class: t.cx("itemLink"),
      target: i.getItemProp(r, "target"),
      tabindex: "-1"
    }, {
      ref_for: !0
    }, i.getPTOptions(r, o, "itemLink")), [n.templates.itemicon ? (c(), y(P(n.templates.itemicon), {
      key: 0,
      item: r.item,
      class: A(t.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : i.getItemProp(r, "icon") ? (c(), d("span", m({
      key: 1,
      class: [t.cx("itemIcon"), i.getItemProp(r, "icon")]
    }, {
      ref_for: !0
    }, i.getPTOptions(r, o, "itemIcon")), null, 16)) : I("", !0), f("span", m({
      class: t.cx("itemLabel")
    }, {
      ref_for: !0
    }, i.getPTOptions(r, o, "itemLabel")), T(i.getItemLabel(r)), 17), i.isItemGroup(r) ? (c(), d(L, {
      key: 2
    }, [n.templates.submenuicon ? (c(), y(P(n.templates.submenuicon), m({
      key: 0,
      active: i.isItemActive(r),
      class: t.cx("submenuIcon")
    }, {
      ref_for: !0
    }, i.getPTOptions(r, o, "submenuIcon")), null, 16, ["active", "class"])) : (c(), y(P(n.horizontal || n.mobileActive ? "AngleDownIcon" : "AngleRightIcon"), m({
      key: 1,
      class: t.cx("submenuIcon")
    }, {
      ref_for: !0
    }, i.getPTOptions(r, o, "submenuIcon")), null, 16, ["class"]))], 64)) : I("", !0)], 16, Rt)), [[l]])], 16, Ht), i.isItemVisible(r) && i.isItemGroup(r) ? (c(), d("div", m({
      key: 0,
      class: t.cx("overlay")
    }, {
      ref_for: !0
    }, t.ptm("overlay")), [f("div", m({
      class: t.cx("grid")
    }, {
      ref_for: !0
    }, t.ptm("grid")), [(c(!0), d(L, null, D(r.items, function(p) {
      return c(), d("div", m({
        key: i.getItemKey(p),
        class: t.cx("column", {
          processedItem: r
        })
      }, {
        ref_for: !0
      }, t.ptm("column")), [(c(!0), d(L, null, D(p, function(h) {
        return c(), y(u, {
          key: i.getSubListKey(h),
          id: i.getSubListId(h),
          style: ie(t.sx("submenu", !0, {
            processedItem: r
          })),
          role: "menu",
          menuId: n.menuId,
          focusedItemId: n.focusedItemId,
          submenu: h,
          items: h.items,
          templates: n.templates,
          level: n.level + 1,
          mobileActive: n.mobileActive,
          pt: t.pt,
          unstyled: t.unstyled,
          onItemClick: e[0] || (e[0] = function(k) {
            return t.$emit("item-click", k);
          }),
          onItemMouseenter: e[1] || (e[1] = function(k) {
            return t.$emit("item-mouseenter", k);
          })
        }, null, 8, ["id", "style", "menuId", "focusedItemId", "submenu", "items", "templates", "level", "mobileActive", "pt", "unstyled"]);
      }), 128))], 16);
    }), 128))], 16)], 16)) : I("", !0)], 16, Bt)) : I("", !0), i.isItemVisible(r) && i.getItemProp(r, "separator") ? (c(), d("li", m({
      key: 1,
      id: i.getItemId(r),
      class: [t.cx("separator"), i.getItemProp(r, "class")],
      style: i.getItemProp(r, "style"),
      role: "separator"
    }, {
      ref_for: !0
    }, t.ptm("separator")), null, 16, _t)) : I("", !0)], 64);
  }), 128))], 16, zt);
}
ke.render = Nt;
var xe = {
  name: "MegaMenu",
  extends: Tt,
  inheritAttrs: !1,
  emits: ["focus", "blur"],
  outsideClickListener: null,
  resizeListener: null,
  matchMediaListener: null,
  container: null,
  menubar: null,
  searchTimeout: null,
  searchValue: null,
  data: function() {
    return {
      mobileActive: !1,
      focused: !1,
      focusedItemInfo: {
        index: -1,
        key: "",
        parentKey: ""
      },
      activeItem: null,
      dirty: !1,
      query: null,
      queryMatches: !1
    };
  },
  watch: {
    activeItem: function(e) {
      b(e) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : (this.unbindOutsideClickListener(), this.unbindResizeListener());
    }
  },
  mounted: function() {
    this.bindMatchMediaListener();
  },
  beforeUnmount: function() {
    this.mobileActive = !1, this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener();
  },
  methods: {
    getItemProp: function(e, n) {
      return e ? O(e[n]) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    isItemDisabled: function(e) {
      return this.getItemProp(e, "disabled");
    },
    isItemVisible: function(e) {
      return this.getItemProp(e, "visible") !== !1;
    },
    isItemGroup: function(e) {
      return b(this.getItemProp(e, "items"));
    },
    isItemSeparator: function(e) {
      return this.getItemProp(e, "separator");
    },
    getProccessedItemLabel: function(e) {
      return e ? this.getItemLabel(e.item) : void 0;
    },
    isProccessedItemGroup: function(e) {
      return e && b(e.items);
    },
    toggle: function(e) {
      var n = this;
      this.mobileActive ? (this.mobileActive = !1, V.clear(this.menubar), this.hide()) : (this.mobileActive = !0, V.set("menu", this.menubar, this.$primevue.config.zIndex.menu), setTimeout(function() {
        n.show();
      }, 1)), this.bindOutsideClickListener(), e.preventDefault();
    },
    show: function() {
      this.focusedItemInfo = {
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: ""
      }, w(this.menubar);
    },
    hide: function(e, n) {
      var a = this;
      this.mobileActive && (this.mobileActive = !1, setTimeout(function() {
        w(a.$refs.menubutton, {
          preventScroll: !0
        });
      }, 1)), this.activeItem = null, this.focusedItemInfo = {
        index: -1,
        key: "",
        parentKey: ""
      }, n && w(this.menubar), this.dirty = !1;
    },
    onFocus: function(e) {
      if (this.focused = !0, this.focusedItemInfo.index === -1) {
        var n = this.findFirstFocusedItemIndex(), a = this.findVisibleItem(n);
        this.focusedItemInfo = {
          index: n,
          key: a.key,
          parentKey: a.parentKey
        };
      }
      this.$emit("focus", e);
    },
    onBlur: function(e) {
      this.focused = !1, this.focusedItemInfo = {
        index: -1,
        key: "",
        parentKey: ""
      }, this.searchValue = "", this.dirty = !1, this.$emit("blur", e);
    },
    onKeyDown: function(e) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      var n = e.metaKey || e.ctrlKey;
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(e);
          break;
        case "ArrowRight":
          this.onArrowRightKey(e);
          break;
        case "Home":
          this.onHomeKey(e);
          break;
        case "End":
          this.onEndKey(e);
          break;
        case "Space":
          this.onSpaceKey(e);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(e);
          break;
        case "Escape":
          this.onEscapeKey(e);
          break;
        case "Tab":
          this.onTabKey(e);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !n && Y(e.key) && this.searchItems(e, e.key);
          break;
      }
    },
    onItemChange: function(e) {
      var n = e.processedItem, a = e.isFocus;
      if (!F(n)) {
        var s = n.index, i = n.key, u = n.parentKey, l = n.items, r = b(l);
        r && (this.activeItem = n), this.focusedItemInfo = {
          index: s,
          key: i,
          parentKey: u
        }, r && (this.dirty = !0), a && w(this.menubar);
      }
    },
    onItemClick: function(e) {
      var n = e.originalEvent, a = e.processedItem, s = this.isProccessedItemGroup(a), i = F(a.parent), u = this.isSelected(a);
      if (u) {
        var l = a.index, r = a.key, o = a.parentKey;
        this.activeItem = null, this.focusedItemInfo = {
          index: l,
          key: r,
          parentKey: o
        }, this.dirty = !i, this.mobileActive || w(this.menubar, {
          preventScroll: !0
        });
      } else
        s ? this.onItemChange(e) : this.hide(n);
    },
    onItemMouseEnter: function(e) {
      !this.mobileActive && this.dirty && this.onItemChange(e);
    },
    menuButtonClick: function(e) {
      this.toggle(e);
    },
    menuButtonKeydown: function(e) {
      (e.code === "Enter" || e.code === "NumpadEnter" || e.code === "Space") && this.menuButtonClick(e);
    },
    onArrowDownKey: function(e) {
      if (this.horizontal)
        if (b(this.activeItem) && this.activeItem.key === this.focusedItemInfo.key)
          this.focusedItemInfo = {
            index: -1,
            key: "",
            parentKey: this.activeItem.key
          };
        else {
          var n = this.findVisibleItem(this.focusedItemInfo.index), a = this.isProccessedItemGroup(n);
          a && (this.onItemChange({
            originalEvent: e,
            processedItem: n
          }), this.focusedItemInfo = {
            index: -1,
            key: n.key,
            parentKey: n.parentKey
          }, this.searchValue = "");
        }
      var s = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemInfo(e, s), e.preventDefault();
    },
    onArrowUpKey: function(e) {
      if (e.altKey && this.horizontal) {
        if (this.focusedItemInfo.index !== -1) {
          var n = this.findVisibleItem(this.focusedItemInfo.index), a = this.isProccessedItemGroup(n);
          !a && b(this.activeItem) && (this.focusedItemInfo.index === 0 ? (this.focusedItemInfo = {
            index: this.activeItem.index,
            key: this.activeItem.key,
            parentKey: this.activeItem.parentKey
          }, this.activeItem = null) : this.changeFocusedItemInfo(e, this.findFirstItemIndex()));
        }
        e.preventDefault();
      } else {
        var s = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemInfo(e, s), e.preventDefault();
      }
    },
    onArrowLeftKey: function(e) {
      var n = this.findVisibleItem(this.focusedItemInfo.index), a = this.isProccessedItemGroup(n);
      if (a) {
        if (this.horizontal) {
          var s = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
          this.changeFocusedItemInfo(e, s);
        }
      } else {
        this.vertical && b(this.activeItem) && n.columnIndex === 0 && (this.focusedItemInfo = {
          index: this.activeItem.index,
          key: this.activeItem.key,
          parentKey: this.activeItem.parentKey
        }, this.activeItem = null);
        var i = n.columnIndex - 1, u = this.visibleItems.findIndex(function(l) {
          return l.columnIndex === i;
        });
        u !== -1 && this.changeFocusedItemInfo(e, u);
      }
      e.preventDefault();
    },
    onArrowRightKey: function(e) {
      var n = this.findVisibleItem(this.focusedItemInfo.index), a = this.isProccessedItemGroup(n);
      if (a) {
        if (this.vertical)
          if (b(this.activeItem) && this.activeItem.key === n.key)
            this.focusedItemInfo = {
              index: -1,
              key: "",
              parentKey: this.activeItem.key
            };
          else {
            var s = this.findVisibleItem(this.focusedItemInfo.index), i = this.isProccessedItemGroup(s);
            i && (this.onItemChange({
              originalEvent: e,
              processedItem: s
            }), this.focusedItemInfo = {
              index: -1,
              key: s.key,
              parentKey: s.parentKey
            }, this.searchValue = "");
          }
        var u = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemInfo(e, u);
      } else {
        var l = n.columnIndex + 1, r = this.visibleItems.findIndex(function(o) {
          return o.columnIndex === l;
        });
        r !== -1 && this.changeFocusedItemInfo(e, r);
      }
      e.preventDefault();
    },
    onHomeKey: function(e) {
      this.changeFocusedItemInfo(e, this.findFirstItemIndex()), e.preventDefault();
    },
    onEndKey: function(e) {
      this.changeFocusedItemInfo(e, this.findLastItemIndex()), e.preventDefault();
    },
    onEnterKey: function(e) {
      if (this.focusedItemInfo.index !== -1) {
        var n = x(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), a = n && x(n, 'a[data-pc-section="itemlink"]');
        a ? a.click() : n && n.click();
        var s = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(s);
        !i && this.changeFocusedItemInfo(e, this.findFirstFocusedItemIndex());
      }
      e.preventDefault();
    },
    onSpaceKey: function(e) {
      this.onEnterKey(e);
    },
    onEscapeKey: function(e) {
      b(this.activeItem) && (this.focusedItemInfo = {
        index: this.activeItem.index,
        key: this.activeItem.key
      }, this.activeItem = null), e.preventDefault();
    },
    onTabKey: function(e) {
      if (this.focusedItemInfo.index !== -1) {
        var n = this.findVisibleItem(this.focusedItemInfo.index), a = this.isProccessedItemGroup(n);
        !a && this.onItemChange({
          originalEvent: e,
          processedItem: n
        });
      }
      this.hide();
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        var a = e.container && !e.container.contains(n.target), s = !(e.target && (e.target === n.target || e.target.contains(n.target)));
        a && s && e.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function(n) {
        te() || e.hide(n, !0), e.mobileActive = !1;
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindMatchMediaListener: function() {
      var e = this;
      if (!this.matchMediaListener) {
        var n = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = n, this.queryMatches = n.matches, this.matchMediaListener = function() {
          e.queryMatches = n.matches, e.mobileActive = !1;
        }, this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function() {
      this.matchMediaListener && (this.query.removeEventListener("change", this.matchMediaListener), this.matchMediaListener = null);
    },
    isItemMatched: function(e) {
      var n;
      return this.isValidItem(e) && ((n = this.getProccessedItemLabel(e)) === null || n === void 0 ? void 0 : n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    },
    isValidItem: function(e) {
      return !!e && !this.isItemDisabled(e.item) && !this.isItemSeparator(e.item) && this.isItemVisible(e.item);
    },
    isValidSelectedItem: function(e) {
      return this.isValidItem(e) && this.isSelected(e);
    },
    isSelected: function(e) {
      return b(this.activeItem) ? this.activeItem.key === e.key : !1;
    },
    findFirstItemIndex: function() {
      var e = this;
      return this.visibleItems.findIndex(function(n) {
        return e.isValidItem(n);
      });
    },
    findLastItemIndex: function() {
      var e = this;
      return R(this.visibleItems, function(n) {
        return e.isValidItem(n);
      });
    },
    findNextItemIndex: function(e) {
      var n = this, a = e < this.visibleItems.length - 1 ? this.visibleItems.slice(e + 1).findIndex(function(s) {
        return n.isValidItem(s);
      }) : -1;
      return a > -1 ? a + e + 1 : e;
    },
    findPrevItemIndex: function(e) {
      var n = this, a = e > 0 ? R(this.visibleItems.slice(0, e), function(s) {
        return n.isValidItem(s);
      }) : -1;
      return a > -1 ? a : e;
    },
    findSelectedItemIndex: function() {
      var e = this;
      return this.visibleItems.findIndex(function(n) {
        return e.isValidSelectedItem(n);
      });
    },
    findFirstFocusedItemIndex: function() {
      var e = this.findSelectedItemIndex();
      return e < 0 ? this.findFirstItemIndex() : e;
    },
    findLastFocusedItemIndex: function() {
      var e = this.findSelectedItemIndex();
      return e < 0 ? this.findLastItemIndex() : e;
    },
    findVisibleItem: function(e) {
      return b(this.visibleItems) ? this.visibleItems[e] : null;
    },
    searchItems: function(e, n) {
      var a = this;
      this.searchValue = (this.searchValue || "") + n;
      var s = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (s = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u) {
        return a.isItemMatched(u);
      }), s = s === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(u) {
        return a.isItemMatched(u);
      }) : s + this.focusedItemInfo.index) : s = this.visibleItems.findIndex(function(u) {
        return a.isItemMatched(u);
      }), s !== -1 && (i = !0), s === -1 && this.focusedItemInfo.index === -1 && (s = this.findFirstFocusedItemIndex()), s !== -1 && this.changeFocusedItemInfo(e, s), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        a.searchValue = "", a.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemInfo: function(e, n) {
      var a = this.findVisibleItem(n);
      this.focusedItemInfo.index = n, this.focusedItemInfo.key = b(a) ? a.key : "", this.scrollInView();
    },
    scrollInView: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, n = e !== -1 ? "".concat(this.$id, "_").concat(e) : this.focusedItemId, a;
      n === null && this.queryMatches ? a = this.$refs.menubutton : a = x(this.menubar, 'li[id="'.concat(n, '"]')), a && a.scrollIntoView && a.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: "smooth"
      });
    },
    createProcessedItems: function(e) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", u = arguments.length > 4 ? arguments[4] : void 0, l = [];
      return e && e.forEach(function(r, o) {
        var p = (i !== "" ? i + "_" : "") + (u !== void 0 ? u + "_" : "") + o, h = {
          item: r,
          index: o,
          level: a,
          key: p,
          parent: s,
          parentKey: i,
          columnIndex: u !== void 0 ? u : s.columnIndex !== void 0 ? s.columnIndex : o
        };
        h.items = a === 0 && r.items && r.items.length > 0 ? r.items.map(function(k, Q) {
          return n.createProcessedItems(k, a + 1, h, p, Q);
        }) : n.createProcessedItems(r.items, a + 1, h, p), l.push(h);
      }), l;
    },
    containerRef: function(e) {
      this.container = e;
    },
    menubarRef: function(e) {
      this.menubar = e ? e.$el : void 0;
    }
  },
  computed: {
    processedItems: function() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems: function() {
      var e = b(this.activeItem) ? this.activeItem : null;
      return e && e.key === this.focusedItemInfo.parentKey ? e.items.reduce(function(n, a) {
        return a.forEach(function(s) {
          s.items.forEach(function(i) {
            n.push(i);
          });
        }), n;
      }, []) : this.processedItems;
    },
    horizontal: function() {
      return this.orientation === "horizontal";
    },
    vertical: function() {
      return this.orientation === "vertical";
    },
    focusedItemId: function() {
      return b(this.focusedItemInfo.key) ? "".concat(this.$id, "_").concat(this.focusedItemInfo.key) : null;
    }
  },
  components: {
    MegaMenuSub: ke,
    BarsIcon: be
  }
}, Gt = ["id"], jt = ["aria-haspopup", "aria-expanded", "aria-controls", "aria-label"];
function Ut(t, e, n, a, s, i) {
  var u = S("BarsIcon"), l = S("MegaMenuSub");
  return c(), d("div", m({
    ref: i.containerRef,
    id: t.$id,
    class: t.cx("root")
  }, t.ptmi("root")), [t.$slots.start ? (c(), d("div", m({
    key: 0,
    class: t.cx("start")
  }, t.ptm("start")), [M(t.$slots, "start")], 16)) : I("", !0), M(t.$slots, t.$slots.button ? "button" : "menubutton", {
    id: t.$id,
    class: A(t.cx("button")),
    toggleCallback: function(o) {
      return i.menuButtonClick(o);
    }
  }, function() {
    var r;
    return [t.model && t.model.length > 0 ? (c(), d("a", m({
      key: 0,
      ref: "menubutton",
      role: "button",
      tabindex: "0",
      class: t.cx("button"),
      "aria-haspopup": !!(t.model.length && t.model.length > 0),
      "aria-expanded": s.mobileActive,
      "aria-controls": t.$id,
      "aria-label": (r = t.$primevue.config.locale.aria) === null || r === void 0 ? void 0 : r.navigation,
      onClick: e[0] || (e[0] = function(o) {
        return i.menuButtonClick(o);
      }),
      onKeydown: e[1] || (e[1] = function(o) {
        return i.menuButtonKeydown(o);
      })
    }, t.ptm("button")), [M(t.$slots, t.$slots.buttonicon ? "buttonicon" : "menubuttonicon", {}, function() {
      return [v(u, fe(he(t.ptm("buttonIcon"))), null, 16)];
    })], 16, jt)) : I("", !0)];
  }), v(l, {
    ref: i.menubarRef,
    id: t.$id + "_list",
    tabindex: t.disabled ? -1 : t.tabindex,
    role: "menubar",
    "aria-label": t.ariaLabel,
    "aria-labelledby": t.ariaLabelledby,
    "aria-disabled": t.disabled || void 0,
    "aria-orientation": t.orientation,
    "aria-activedescendant": s.focused ? i.focusedItemId : void 0,
    menuId: t.$id,
    focusedItemId: s.focused ? i.focusedItemId : void 0,
    items: i.processedItems,
    horizontal: i.horizontal,
    templates: t.$slots,
    activeItem: s.activeItem,
    mobileActive: s.mobileActive,
    level: 0,
    style: ie(t.sx("rootList")),
    pt: t.pt,
    unstyled: t.unstyled,
    onFocus: i.onFocus,
    onBlur: i.onBlur,
    onKeydown: i.onKeyDown,
    onItemClick: i.onItemClick,
    onItemMouseenter: i.onItemMouseEnter
  }, null, 8, ["id", "tabindex", "aria-label", "aria-labelledby", "aria-disabled", "aria-orientation", "aria-activedescendant", "menuId", "focusedItemId", "items", "horizontal", "templates", "activeItem", "mobileActive", "style", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter"]), t.$slots.end ? (c(), d("div", m({
    key: 1,
    class: t.cx("end")
  }, t.ptm("end")), [M(t.$slots, "end")], 16)) : I("", !0)], 16, Gt);
}
xe.render = Ut;
var qt = `
    .p-contextmenu {
        background: dt('contextmenu.background');
        color: dt('contextmenu.color');
        border: 1px solid dt('contextmenu.border.color');
        border-radius: dt('contextmenu.border.radius');
        box-shadow: dt('contextmenu.shadow');
        min-width: 12.5rem;
    }

    .p-contextmenu-root-list,
    .p-contextmenu-submenu {
        margin: 0;
        padding: dt('contextmenu.list.padding');
        list-style: none;
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('contextmenu.list.gap');
    }

    .p-contextmenu-submenu {
        position: absolute;
        display: flex;
        flex-direction: column;
        min-width: 100%;
        z-index: 1;
        background: dt('contextmenu.background');
        color: dt('contextmenu.color');
        border: 1px solid dt('contextmenu.border.color');
        border-radius: dt('contextmenu.border.radius');
        box-shadow: dt('contextmenu.shadow');
    }

    .p-contextmenu-item {
        position: relative;
    }

    .p-contextmenu-item-content {
        transition:
            background dt('contextmenu.transition.duration'),
            color dt('contextmenu.transition.duration');
        border-radius: dt('contextmenu.item.border.radius');
        color: dt('contextmenu.item.color');
    }

    .p-contextmenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('contextmenu.item.padding');
        gap: dt('contextmenu.item.gap');
        user-select: none;
    }

    .p-contextmenu-item-label {
        line-height: 1;
    }

    .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.color');
    }

    .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.color');
        margin-left: auto;
        font-size: dt('contextmenu.submenu.icon.size');
        width: dt('contextmenu.submenu.icon.size');
        height: dt('contextmenu.submenu.icon.size');
    }

    .p-contextmenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content {
        color: dt('contextmenu.item.focus.color');
        background: dt('contextmenu.item.focus.background');
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.focus.color');
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.focus.color');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
        color: dt('contextmenu.item.focus.color');
        background: dt('contextmenu.item.focus.background');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.focus.color');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.focus.color');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content {
        color: dt('contextmenu.item.active.color');
        background: dt('contextmenu.item.active.background');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.active.color');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.active.color');
    }

    .p-contextmenu-separator {
        border-block-start: 1px solid dt('contextmenu.separator.border.color');
    }

    .p-contextmenu-mobile .p-contextmenu-submenu {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-contextmenu-mobile .p-contextmenu-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-contextmenu-mobile .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        transform: rotate(-90deg);
    }
`, Wt = {
  root: function(e) {
    var n = e.instance;
    return ["p-contextmenu p-component", {
      "p-contextmenu-mobile": n.queryMatches
    }];
  },
  rootList: "p-contextmenu-root-list",
  item: function(e) {
    var n = e.instance, a = e.processedItem;
    return ["p-contextmenu-item", {
      "p-contextmenu-item-active": n.isItemActive(a),
      "p-focus": n.isItemFocused(a),
      "p-disabled": n.isItemDisabled(a)
    }];
  },
  itemContent: "p-contextmenu-item-content",
  itemLink: "p-contextmenu-item-link",
  itemIcon: "p-contextmenu-item-icon",
  itemLabel: "p-contextmenu-item-label",
  submenuIcon: "p-contextmenu-submenu-icon",
  submenu: "p-contextmenu-submenu",
  separator: "p-contextmenu-separator"
}, Yt = z.extend({
  name: "contextmenu",
  style: qt,
  classes: Wt
}), Xt = {
  name: "BaseContextMenu",
  extends: C,
  props: {
    model: {
      type: Array,
      default: null
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    global: {
      type: Boolean,
      default: !1
    },
    breakpoint: {
      type: String,
      default: "960px"
    },
    tabindex: {
      type: Number,
      default: 0
    },
    ariaLabelledby: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  style: Yt,
  provide: function() {
    return {
      $pcContextMenu: this,
      $parentInstance: this
    };
  }
}, Pe = {
  name: "ContextMenuSub",
  hostName: "ContextMenu",
  extends: C,
  emits: ["item-click", "item-mouseenter", "item-mousemove"],
  props: {
    items: {
      type: Array,
      default: null
    },
    menuId: {
      type: String,
      default: null
    },
    focusedItemId: {
      type: String,
      default: null
    },
    root: {
      type: Boolean,
      default: !1
    },
    visible: {
      type: Boolean,
      default: !1
    },
    level: {
      type: Number,
      default: 0
    },
    templates: {
      type: Object,
      default: null
    },
    activeItemPath: {
      type: Object,
      default: null
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getItemId: function(e) {
      return "".concat(this.menuId, "_").concat(e.key);
    },
    getItemKey: function(e) {
      return this.getItemId(e);
    },
    getItemProp: function(e, n, a) {
      return e && e.item ? O(e.item[n], a) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    getItemLabelId: function(e) {
      return "".concat(this.menuId, "_").concat(e.key, "_label");
    },
    getPTOptions: function(e, n, a) {
      return this.ptm(e, {
        context: {
          item: n.item,
          active: this.isItemActive(n),
          focused: this.isItemFocused(n),
          disabled: this.isItemDisabled(n),
          index: a
        }
      });
    },
    isItemActive: function(e) {
      return this.activeItemPath.some(function(n) {
        return n.key === e.key;
      });
    },
    isItemVisible: function(e) {
      return this.getItemProp(e, "visible") !== !1;
    },
    isItemDisabled: function(e) {
      return this.getItemProp(e, "disabled");
    },
    isItemFocused: function(e) {
      return this.focusedItemId === this.getItemId(e);
    },
    isItemGroup: function(e) {
      return b(e.items);
    },
    onItemClick: function(e, n) {
      this.getItemProp(n, "command", {
        originalEvent: e,
        item: n.item
      }), this.$emit("item-click", {
        originalEvent: e,
        processedItem: n,
        isFocus: !0
      });
    },
    onItemMouseEnter: function(e, n) {
      this.$emit("item-mouseenter", {
        originalEvent: e,
        processedItem: n
      });
    },
    onItemMouseMove: function(e, n) {
      this.$emit("item-mousemove", {
        originalEvent: e,
        processedItem: n,
        isFocus: !0
      });
    },
    getAriaSetSize: function() {
      var e = this;
      return this.items.filter(function(n) {
        return e.isItemVisible(n) && !e.getItemProp(n, "separator");
      }).length;
    },
    getAriaPosInset: function(e) {
      var n = this;
      return e - this.items.slice(0, e).filter(function(a) {
        return n.isItemVisible(a) && n.getItemProp(a, "separator");
      }).length + 1;
    },
    onEnter: function() {
      qe(this.$refs.container, this.level);
    },
    getMenuItemProps: function(e, n) {
      return {
        action: m({
          class: this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions("itemLink", e, n)),
        icon: m({
          class: [this.cx("itemIcon"), this.getItemProp(e, "icon")]
        }, this.getPTOptions("itemIcon", e, n)),
        label: m({
          class: this.cx("itemLabel")
        }, this.getPTOptions("itemLabel", e, n)),
        submenuicon: m({
          class: this.cx("submenuIcon")
        }, this.getPTOptions("submenuicon", e, n))
      };
    }
  },
  components: {
    AngleRightIcon: ae
  },
  directives: {
    ripple: J
  }
}, Zt = ["tabindex"], Jt = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], Qt = ["onClick", "onMouseenter", "onMousemove"], $t = ["href", "target"], en = ["id"], tn = ["id"];
function nn(t, e, n, a, s, i) {
  var u = S("AngleRightIcon"), l = S("ContextMenuSub", !0), r = X("ripple");
  return c(), y(Z, m({
    name: "p-anchored-overlay",
    onEnter: i.onEnter
  }, t.ptm("menu.transition")), {
    default: K(function() {
      return [n.root || n.visible ? (c(), d("ul", m({
        key: 0,
        ref: "container",
        tabindex: n.tabindex
      }, t.ptm("rootList")), [(c(!0), d(L, null, D(n.items, function(o, p) {
        return c(), d(L, {
          key: i.getItemKey(o)
        }, [i.isItemVisible(o) && !i.getItemProp(o, "separator") ? (c(), d("li", m({
          key: 0,
          id: i.getItemId(o),
          style: i.getItemProp(o, "style"),
          class: [t.cx("item", {
            processedItem: o
          }), i.getItemProp(o, "class")],
          role: "menuitem",
          "aria-label": i.getItemLabel(o),
          "aria-disabled": i.isItemDisabled(o) || void 0,
          "aria-expanded": i.isItemGroup(o) ? i.isItemActive(o) : void 0,
          "aria-haspopup": i.isItemGroup(o) && !i.getItemProp(o, "to") ? "menu" : void 0,
          "aria-level": n.level + 1,
          "aria-setsize": i.getAriaSetSize(),
          "aria-posinset": i.getAriaPosInset(p)
        }, {
          ref_for: !0
        }, i.getPTOptions("item", o, p), {
          "data-p-active": i.isItemActive(o),
          "data-p-focused": i.isItemFocused(o),
          "data-p-disabled": i.isItemDisabled(o)
        }), [f("div", m({
          class: t.cx("itemContent"),
          onClick: function(k) {
            return i.onItemClick(k, o);
          },
          onMouseenter: function(k) {
            return i.onItemMouseEnter(k, o);
          },
          onMousemove: function(k) {
            return i.onItemMouseMove(k, o);
          }
        }, {
          ref_for: !0
        }, i.getPTOptions("itemContent", o, p)), [n.templates.item ? (c(), y(P(n.templates.item), {
          key: 1,
          item: o.item,
          hasSubmenu: i.getItemProp(o, "items"),
          label: i.getItemLabel(o),
          props: i.getMenuItemProps(o, p)
        }, null, 8, ["item", "hasSubmenu", "label", "props"])) : _((c(), d("a", m({
          key: 0,
          href: i.getItemProp(o, "url"),
          class: t.cx("itemLink"),
          target: i.getItemProp(o, "target"),
          tabindex: "-1"
        }, {
          ref_for: !0
        }, i.getPTOptions("itemLink", o, p)), [n.templates.itemicon ? (c(), y(P(n.templates.itemicon), {
          key: 0,
          item: o.item,
          class: A(t.cx("itemIcon"))
        }, null, 8, ["item", "class"])) : i.getItemProp(o, "icon") ? (c(), d("span", m({
          key: 1,
          class: [t.cx("itemIcon"), i.getItemProp(o, "icon")]
        }, {
          ref_for: !0
        }, i.getPTOptions("itemIcon", o, p)), null, 16)) : I("", !0), f("span", m({
          id: i.getItemLabelId(o),
          class: t.cx("itemLabel")
        }, {
          ref_for: !0
        }, i.getPTOptions("itemLabel", o, p)), T(i.getItemLabel(o)), 17, en), i.getItemProp(o, "items") ? (c(), d(L, {
          key: 2
        }, [n.templates.submenuicon ? (c(), y(P(n.templates.submenuicon), {
          key: 0,
          active: i.isItemActive(o),
          class: A(t.cx("submenuIcon"))
        }, null, 8, ["active", "class"])) : (c(), y(u, m({
          key: 1,
          class: t.cx("submenuIcon")
        }, {
          ref_for: !0
        }, i.getPTOptions("submenuicon", o, p)), null, 16, ["class"]))], 64)) : I("", !0)], 16, $t)), [[r]])], 16, Qt), i.isItemVisible(o) && i.isItemGroup(o) ? (c(), y(l, m({
          key: 0,
          id: i.getItemId(o) + "_list",
          role: "menu",
          class: t.cx("submenu"),
          menuId: n.menuId,
          focusedItemId: n.focusedItemId,
          items: o.items,
          templates: n.templates,
          activeItemPath: n.activeItemPath,
          level: n.level + 1,
          visible: i.isItemActive(o) && i.isItemGroup(o),
          pt: t.pt,
          unstyled: t.unstyled,
          onItemClick: e[0] || (e[0] = function(h) {
            return t.$emit("item-click", h);
          }),
          onItemMouseenter: e[1] || (e[1] = function(h) {
            return t.$emit("item-mouseenter", h);
          }),
          onItemMousemove: e[2] || (e[2] = function(h) {
            return t.$emit("item-mousemove", h);
          }),
          "aria-labelledby": i.getItemLabelId(o)
        }, {
          ref_for: !0
        }, t.ptm("submenu")), null, 16, ["id", "class", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "level", "visible", "pt", "unstyled", "aria-labelledby"])) : I("", !0)], 16, Jt)) : I("", !0), i.isItemVisible(o) && i.getItemProp(o, "separator") ? (c(), d("li", m({
          key: 1,
          id: i.getItemId(o),
          style: i.getItemProp(o, "style"),
          class: [t.cx("separator"), i.getItemProp(o, "class")],
          role: "separator"
        }, {
          ref_for: !0
        }, t.ptm("separator")), null, 16, tn)) : I("", !0)], 64);
      }), 128))], 16, Zt)) : I("", !0)];
    }),
    _: 1
  }, 16, ["onEnter"]);
}
Pe.render = nn;
var we = {
  name: "ContextMenu",
  extends: Xt,
  inheritAttrs: !1,
  emits: ["focus", "blur", "show", "hide", "before-show", "before-hide"],
  target: null,
  outsideClickListener: null,
  resizeListener: null,
  documentContextMenuListener: null,
  matchMediaListener: null,
  pageX: null,
  pageY: null,
  container: null,
  list: null,
  data: function() {
    return {
      focused: !1,
      focusedItemInfo: {
        index: -1,
        level: 0,
        parentKey: ""
      },
      activeItemPath: [],
      visible: !1,
      submenuVisible: !1,
      query: null,
      queryMatches: !1
    };
  },
  watch: {
    activeItemPath: function(e) {
      b(e) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : this.visible || (this.unbindOutsideClickListener(), this.unbindResizeListener());
    }
  },
  mounted: function() {
    this.bindMatchMediaListener(), this.global && this.bindDocumentContextMenuListener();
  },
  beforeUnmount: function() {
    this.unbindResizeListener(), this.unbindOutsideClickListener(), this.unbindDocumentContextMenuListener(), this.unbindMatchMediaListener(), this.container && this.autoZIndex && V.clear(this.container), this.target = null, this.container = null;
  },
  methods: {
    getItemProp: function(e, n) {
      return e ? O(e[n]) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    isItemDisabled: function(e) {
      return this.getItemProp(e, "disabled");
    },
    isItemVisible: function(e) {
      return this.getItemProp(e, "visible") !== !1;
    },
    isItemGroup: function(e) {
      return b(this.getItemProp(e, "items"));
    },
    isItemSeparator: function(e) {
      return this.getItemProp(e, "separator");
    },
    getProccessedItemLabel: function(e) {
      return e ? this.getItemLabel(e.item) : void 0;
    },
    isProccessedItemGroup: function(e) {
      return e && b(e.items);
    },
    toggle: function(e) {
      this.visible ? this.hide() : this.show(e);
    },
    show: function(e) {
      this.$emit("before-show"), this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, w(this.list), this.pageX = e.pageX, this.pageY = e.pageY, this.visible ? this.position() : this.visible = !0, e.stopPropagation(), e.preventDefault();
    },
    hide: function() {
      this.$emit("before-hide"), this.visible = !1, this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      };
    },
    onFocus: function(e) {
      this.focused = !0, this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.$emit("focus", e);
    },
    onBlur: function(e) {
      this.focused = !1, this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.searchValue = "", this.$emit("blur", e);
    },
    onKeyDown: function(e) {
      var n = e.metaKey || e.ctrlKey;
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(e);
          break;
        case "ArrowRight":
          this.onArrowRightKey(e);
          break;
        case "Home":
          this.onHomeKey(e);
          break;
        case "End":
          this.onEndKey(e);
          break;
        case "Space":
          this.onSpaceKey(e);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(e);
          break;
        case "Escape":
          this.onEscapeKey(e);
          break;
        case "Tab":
          this.onTabKey(e);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !n && Y(e.key) && this.searchItems(e, e.key);
          break;
      }
    },
    onItemChange: function(e, n) {
      var a = e.processedItem, s = e.isFocus;
      if (!F(a)) {
        var i = a.index, u = a.key, l = a.level, r = a.parentKey, o = a.items, p = b(o), h = this.activeItemPath.filter(function(k) {
          return k.parentKey !== r && k.parentKey !== u;
        });
        p && (h.push(a), this.submenuVisible = !0), this.focusedItemInfo = {
          index: i,
          level: l,
          parentKey: r
        }, s && w(this.list), !(n === "hover" && this.queryMatches) && (this.activeItemPath = h);
      }
    },
    onItemClick: function(e) {
      var n = e.processedItem, a = this.isProccessedItemGroup(n), s = this.isSelected(n);
      if (s) {
        var i = n.index, u = n.key, l = n.level, r = n.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(o) {
          return u !== o.key && u.startsWith(o.key);
        }), this.focusedItemInfo = {
          index: i,
          level: l,
          parentKey: r
        }, w(this.list);
      } else
        a ? this.onItemChange(e) : this.hide();
    },
    onItemMouseEnter: function(e) {
      this.onItemChange(e, "hover");
    },
    onItemMouseMove: function(e) {
      this.focused && this.changeFocusedItemIndex(e, e.processedItem.index);
    },
    onArrowDownKey: function(e) {
      var n = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemIndex(e, n), e.preventDefault();
    },
    onArrowUpKey: function(e) {
      if (e.altKey) {
        if (this.focusedItemInfo.index !== -1) {
          var n = this.visibleItems[this.focusedItemInfo.index], a = this.isProccessedItemGroup(n);
          !a && this.onItemChange({
            originalEvent: e,
            processedItem: n
          });
        }
        this.popup && this.hide(), e.preventDefault();
      } else {
        var s = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(e, s), e.preventDefault();
      }
    },
    onArrowLeftKey: function(e) {
      var n = this, a = this.visibleItems[this.focusedItemInfo.index], s = this.activeItemPath.find(function(u) {
        return u.key === a.parentKey;
      }), i = F(a.parent);
      i || (this.focusedItemInfo = {
        index: -1,
        parentKey: s ? s.parentKey : ""
      }, this.searchValue = "", this.onArrowDownKey(e)), this.activeItemPath = this.activeItemPath.filter(function(u) {
        return u.parentKey !== n.focusedItemInfo.parentKey;
      }), e.preventDefault();
    },
    onArrowRightKey: function(e) {
      var n = this.visibleItems[this.focusedItemInfo.index], a = this.isProccessedItemGroup(n);
      a && (this.onItemChange({
        originalEvent: e,
        processedItem: n
      }), this.focusedItemInfo = {
        index: -1,
        parentKey: n.key
      }, this.searchValue = "", this.onArrowDownKey(e)), e.preventDefault();
    },
    onHomeKey: function(e) {
      this.changeFocusedItemIndex(e, this.findFirstItemIndex()), e.preventDefault();
    },
    onEndKey: function(e) {
      this.changeFocusedItemIndex(e, this.findLastItemIndex()), e.preventDefault();
    },
    onEnterKey: function(e) {
      if (this.focusedItemInfo.index !== -1) {
        var n = x(this.list, 'li[id="'.concat("".concat(this.focusedItemIdx), '"]')), a = n && x(n, '[data-pc-section="itemlink"]');
        a ? a.click() : n && n.click();
        var s = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(s);
        !i && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
      }
      e.preventDefault();
    },
    onSpaceKey: function(e) {
      this.onEnterKey(e);
    },
    onEscapeKey: function(e) {
      this.hide(), !this.popup && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex()), e.preventDefault();
    },
    onTabKey: function(e) {
      if (this.focusedItemInfo.index !== -1) {
        var n = this.visibleItems[this.focusedItemInfo.index], a = this.isProccessedItemGroup(n);
        !a && this.onItemChange({
          originalEvent: e,
          processedItem: n
        });
      }
      this.hide();
    },
    onEnter: function(e) {
      Ze(e, {
        position: "absolute"
      }), this.position(), this.autoZIndex && V.set("menu", e, this.baseZIndex + this.$primevue.config.zIndex.menu);
    },
    onAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindResizeListener(), this.$emit("show"), w(this.list);
    },
    onLeave: function() {
      this.$emit("hide"), this.container = null;
    },
    onAfterLeave: function(e) {
      this.autoZIndex && V.clear(e), this.unbindOutsideClickListener(), this.unbindResizeListener();
    },
    position: function() {
      var e = this.pageX + 1, n = this.pageY + 1, a = this.container.offsetParent ? this.container.offsetWidth : We(this.container), s = this.container.offsetParent ? this.container.offsetHeight : Ye(this.container), i = Xe(), u = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0, l = window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
      e + a - l > i.width && (e -= a), n + s - u > i.height && (n -= s), e < l && (e = l), n < u && (n = u), this.container.style.left = e + "px", this.container.style.top = n + "px";
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        var a = e.container && !e.container.contains(n.target), s = e.visible ? !(e.target && (e.target === n.target || e.target.contains(n.target))) : !0;
        a && s && e.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function() {
        e.visible && !te() && e.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindDocumentContextMenuListener: function() {
      var e = this;
      this.documentContextMenuListener || (this.documentContextMenuListener = function(n) {
        n.button === 2 && e.show(n);
      }, document.addEventListener("contextmenu", this.documentContextMenuListener));
    },
    unbindDocumentContextMenuListener: function() {
      this.documentContextMenuListener && (document.removeEventListener("contextmenu", this.documentContextMenuListener), this.documentContextMenuListener = null);
    },
    bindMatchMediaListener: function() {
      var e = this;
      if (!this.matchMediaListener) {
        var n = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = n, this.queryMatches = n.matches, this.matchMediaListener = function() {
          e.queryMatches = n.matches;
        }, this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function() {
      this.matchMediaListener && (this.query.removeEventListener("change", this.matchMediaListener), this.matchMediaListener = null);
    },
    isItemMatched: function(e) {
      var n;
      return this.isValidItem(e) && ((n = this.getProccessedItemLabel(e)) === null || n === void 0 ? void 0 : n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    },
    isValidItem: function(e) {
      return !!e && !this.isItemDisabled(e.item) && !this.isItemSeparator(e.item) && this.isItemVisible(e.item);
    },
    isValidSelectedItem: function(e) {
      return this.isValidItem(e) && this.isSelected(e);
    },
    isSelected: function(e) {
      return this.activeItemPath.some(function(n) {
        return n.key === e.key;
      });
    },
    findFirstItemIndex: function() {
      var e = this;
      return this.visibleItems.findIndex(function(n) {
        return e.isValidItem(n);
      });
    },
    findLastItemIndex: function() {
      var e = this;
      return R(this.visibleItems, function(n) {
        return e.isValidItem(n);
      });
    },
    findNextItemIndex: function(e) {
      var n = this, a = e < this.visibleItems.length - 1 ? this.visibleItems.slice(e + 1).findIndex(function(s) {
        return n.isValidItem(s);
      }) : -1;
      return a > -1 ? a + e + 1 : e;
    },
    findPrevItemIndex: function(e) {
      var n = this, a = e > 0 ? R(this.visibleItems.slice(0, e), function(s) {
        return n.isValidItem(s);
      }) : -1;
      return a > -1 ? a : e;
    },
    findSelectedItemIndex: function() {
      var e = this;
      return this.visibleItems.findIndex(function(n) {
        return e.isValidSelectedItem(n);
      });
    },
    findFirstFocusedItemIndex: function() {
      var e = this.findSelectedItemIndex();
      return e < 0 ? this.findFirstItemIndex() : e;
    },
    findLastFocusedItemIndex: function() {
      var e = this.findSelectedItemIndex();
      return e < 0 ? this.findLastItemIndex() : e;
    },
    searchItems: function(e, n) {
      var a = this;
      this.searchValue = (this.searchValue || "") + n;
      var s = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (s = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u) {
        return a.isItemMatched(u);
      }), s = s === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(u) {
        return a.isItemMatched(u);
      }) : s + this.focusedItemInfo.index) : s = this.visibleItems.findIndex(function(u) {
        return a.isItemMatched(u);
      }), s !== -1 && (i = !0), s === -1 && this.focusedItemInfo.index === -1 && (s = this.findFirstFocusedItemIndex()), s !== -1 && this.changeFocusedItemIndex(e, s), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        a.searchValue = "", a.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(e, n) {
      this.focusedItemInfo.index !== n && (this.focusedItemInfo.index = n, this.scrollInView());
    },
    scrollInView: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, n = e !== -1 ? "".concat(this.$id, "_").concat(e) : this.focusedItemIdx, a = x(this.list, 'li[id="'.concat(n, '"]'));
      a && a.scrollIntoView && a.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(e) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", u = [];
      return e && e.forEach(function(l, r) {
        var o = (i !== "" ? i + "_" : "") + r, p = {
          item: l,
          index: r,
          level: a,
          key: o,
          parent: s,
          parentKey: i
        };
        p.items = n.createProcessedItems(l.items, a + 1, p, o), u.push(p);
      }), u;
    },
    containerRef: function(e) {
      this.container = e;
    },
    listRef: function(e) {
      this.list = e ? e.$el : void 0;
    }
  },
  computed: {
    processedItems: function() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems: function() {
      var e = this, n = this.activeItemPath.find(function(a) {
        return a.key === e.focusedItemInfo.parentKey;
      });
      return n ? n.items : this.processedItems;
    },
    focusedItemIdx: function() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.$id).concat(b(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    ContextMenuSub: Pe,
    Portal: Qe
  }
};
function an(t, e, n, a, s, i) {
  var u = S("ContextMenuSub"), l = S("Portal");
  return c(), y(l, {
    appendTo: t.appendTo
  }, {
    default: K(function() {
      return [v(Z, m({
        name: "p-anchored-overlay",
        onEnter: i.onEnter,
        onAfterEnter: i.onAfterEnter,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave
      }, t.ptm("transition")), {
        default: K(function() {
          return [s.visible ? (c(), d("div", m({
            key: 0,
            ref: i.containerRef,
            class: t.cx("root")
          }, t.ptmi("root")), [v(u, {
            ref: i.listRef,
            id: t.$id + "_list",
            class: A(t.cx("rootList")),
            role: "menubar",
            root: !0,
            tabindex: t.tabindex,
            "aria-orientation": "vertical",
            "aria-activedescendant": s.focused ? i.focusedItemIdx : void 0,
            menuId: t.$id,
            focusedItemId: s.focused ? i.focusedItemIdx : void 0,
            items: i.processedItems,
            templates: t.$slots,
            activeItemPath: s.activeItemPath,
            "aria-labelledby": t.ariaLabelledby,
            "aria-label": t.ariaLabel,
            level: 0,
            visible: s.submenuVisible,
            pt: t.pt,
            unstyled: t.unstyled,
            onFocus: i.onFocus,
            onBlur: i.onBlur,
            onKeydown: i.onKeyDown,
            onItemClick: i.onItemClick,
            onItemMouseenter: i.onItemMouseEnter,
            onItemMousemove: i.onItemMouseMove
          }, null, 8, ["id", "class", "tabindex", "aria-activedescendant", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "aria-labelledby", "aria-label", "visible", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"])], 16)) : I("", !0)];
        }),
        _: 1
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 1
  }, 8, ["appendTo"]);
}
we.render = an;
var rn = `
    .p-steplist {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow-x: auto;
    }

    .p-step {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        gap: dt('stepper.step.gap');
        padding: dt('stepper.step.padding');
    }

    .p-step:last-of-type {
        flex: initial;
    }

    .p-step-header {
        border: 0 none;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration');
        border-radius: dt('stepper.step.header.border.radius');
        outline-color: transparent;
        background: transparent;
        padding: dt('stepper.step.header.padding');
        gap: dt('stepper.step.header.gap');
    }

    .p-step-header:focus-visible {
        box-shadow: dt('stepper.step.header.focus.ring.shadow');
        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');
        outline-offset: dt('stepper.step.header.focus.ring.offset');
    }

    .p-stepper.p-stepper-readonly .p-step {
        cursor: auto;
    }

    .p-step-title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        color: dt('stepper.step.title.color');
        font-weight: dt('stepper.step.title.font.weight');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        color: dt('stepper.step.number.color');
        border: 2px solid dt('stepper.step.number.border.color');
        background: dt('stepper.step.number.background');
        min-width: dt('stepper.step.number.size');
        height: dt('stepper.step.number.size');
        line-height: dt('stepper.step.number.size');
        font-size: dt('stepper.step.number.font.size');
        z-index: 1;
        border-radius: dt('stepper.step.number.border.radius');
        position: relative;
        font-weight: dt('stepper.step.number.font.weight');
    }

    .p-step-number::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('stepper.step.number.border.radius');
        box-shadow: dt('stepper.step.number.shadow');
    }

    .p-step-active .p-step-header {
        cursor: default;
    }

    .p-step-active .p-step-number {
        background: dt('stepper.step.number.active.background');
        border-color: dt('stepper.step.number.active.border.color');
        color: dt('stepper.step.number.active.color');
    }

    .p-step-active .p-step-title {
        color: dt('stepper.step.title.active.color');
    }

    .p-step:not(.p-disabled):focus-visible {
        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('focus.ring.offset');
    }

    .p-step:has(~ .p-step-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepper-separator {
        flex: 1 1 0;
        background: dt('stepper.separator.background');
        width: 100%;
        height: dt('stepper.separator.size');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-steppanels {
        padding: dt('stepper.steppanels.padding');
    }

    .p-steppanel {
        background: dt('stepper.steppanel.background');
        color: dt('stepper.steppanel.color');
    }

    .p-stepper:has(.p-stepitem) {
        display: flex;
        flex-direction: column;
    }

    .p-stepitem {
        display: flex;
        flex-direction: column;
        flex: initial;
    }

    .p-stepitem.p-stepitem-active {
        flex: 1 1 auto;
    }

    .p-stepitem .p-step {
        flex: initial;
    }
    
    .p-stepitem .p-steppanel {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-stepitem .p-steppanel-content-wrapper {
        display: flex;
        flex: 1 1 auto;
        min-height: 0;
    }
    .p-stepitem .p-steppanel-content {
        width: 100%;
        padding: dt('stepper.steppanel.padding');
        margin-inline-start: 1rem;
    }

    .p-stepitem .p-stepper-separator {
        flex: 0 0 auto;
        width: dt('stepper.separator.size');
        height: auto;
        margin: dt('stepper.separator.margin');
        position: relative;
        left: calc(-1 * dt('stepper.separator.size'));
    }

    .p-stepitem .p-stepper-separator:dir(rtl) {
        left: calc(-9 * dt('stepper.separator.size'));
    }

    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepitem:last-of-type .p-steppanel {
        padding-inline-start: dt('stepper.step.number.size');
    }
`, sn = {
  root: function(e) {
    var n = e.props;
    return ["p-stepper p-component", {
      "p-readonly": n.linear
    }];
  },
  separator: "p-stepper-separator"
}, on = z.extend({
  name: "stepper",
  style: rn,
  classes: sn
}), un = {
  name: "BaseStepper",
  extends: C,
  props: {
    value: {
      type: [String, Number],
      default: void 0
    },
    linear: {
      type: Boolean,
      default: !1
    }
  },
  style: on,
  provide: function() {
    return {
      $pcStepper: this,
      $parentInstance: this
    };
  }
}, Le = {
  name: "Stepper",
  extends: un,
  inheritAttrs: !1,
  emits: ["update:value"],
  data: function() {
    return {
      d_value: this.value
    };
  },
  watch: {
    value: function(e) {
      this.d_value = e;
    }
  },
  methods: {
    updateValue: function(e) {
      this.d_value !== e && (this.d_value = e, this.$emit("update:value", e));
    },
    isStepActive: function(e) {
      return this.d_value === e;
    },
    isStepDisabled: function() {
      return this.linear;
    }
  }
};
function ln(t, e, n, a, s, i) {
  return c(), d("div", m({
    class: t.cx("root"),
    role: "tablist"
  }, t.ptmi("root")), [t.$slots.start ? M(t.$slots, "start", {
    key: 0
  }) : I("", !0), M(t.$slots, "default"), t.$slots.end ? M(t.$slots, "end", {
    key: 1
  }) : I("", !0)], 16);
}
Le.render = ln;
var mn = {
  root: "p-steplist"
}, cn = z.extend({
  name: "steplist",
  classes: mn
}), dn = {
  name: "BaseStepList",
  extends: C,
  style: cn,
  provide: function() {
    return {
      $pcStepList: this,
      $parentInstance: this
    };
  }
}, Ke = {
  name: "StepList",
  extends: dn,
  inheritAttrs: !1
};
function pn(t, e, n, a, s, i) {
  return c(), d("div", m({
    class: t.cx("root")
  }, t.ptmi("root")), [M(t.$slots, "default")], 16);
}
Ke.render = pn;
var fn = {
  root: function(e) {
    var n = e.instance;
    return ["p-step", {
      "p-step-active": n.active,
      "p-disabled": n.isStepDisabled
    }];
  },
  header: "p-step-header",
  number: "p-step-number",
  title: "p-step-title"
}, hn = z.extend({
  name: "step",
  classes: fn
}), Me = {
  name: "StepperSeparator",
  hostName: "Stepper",
  extends: C,
  inject: {
    $pcStepper: {
      default: null
    }
  }
};
function bn(t, e, n, a, s, i) {
  return c(), d("span", m({
    class: t.cx("separator")
  }, t.ptmo(i.$pcStepper.pt, "separator")), null, 16);
}
Me.render = bn;
var In = {
  name: "BaseStep",
  extends: C,
  props: {
    value: {
      type: [String, Number],
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "DIV"
    }
  },
  style: hn,
  provide: function() {
    return {
      $pcStep: this,
      $parentInstance: this
    };
  }
}, Se = {
  name: "Step",
  extends: In,
  inheritAttrs: !1,
  inject: {
    $pcStepper: {
      default: null
    },
    $pcStepList: {
      default: null
    },
    $pcStepItem: {
      default: null
    }
  },
  data: function() {
    return {
      isSeparatorVisible: !1,
      isCompleted: !1
    };
  },
  mounted: function() {
    if (this.$el && this.$pcStepList) {
      var e = W(this.$el, N(this.$pcStepper.$el, '[data-pc-name="step"]')), n = W(x(this.$pcStepper.$el, '[data-pc-name="step"][data-p-active="true"]'), N(this.$pcStepper.$el, '[data-pc-name="step"]')), a = N(this.$pcStepper.$el, '[data-pc-name="step"]').length;
      this.isSeparatorVisible = e !== a - 1, this.isCompleted = e < n;
    }
  },
  updated: function() {
    var e = W(this.$el, N(this.$pcStepper.$el, '[data-pc-name="step"]')), n = W(x(this.$pcStepper.$el, '[data-pc-name="step"][data-p-active="true"]'), N(this.$pcStepper.$el, '[data-pc-name="step"]'));
    this.isCompleted = e < n;
  },
  methods: {
    getPTOptions: function(e) {
      var n = e === "root" ? this.ptmi : this.ptm;
      return n(e, {
        context: {
          active: this.active,
          disabled: this.isStepDisabled
        }
      });
    },
    onStepClick: function() {
      this.$pcStepper.updateValue(this.activeValue);
    }
  },
  computed: {
    active: function() {
      return this.$pcStepper.isStepActive(this.activeValue);
    },
    activeValue: function() {
      var e;
      return this.$pcStepItem ? (e = this.$pcStepItem) === null || e === void 0 ? void 0 : e.value : this.value;
    },
    isStepDisabled: function() {
      return !this.active && (this.$pcStepper.isStepDisabled() || this.disabled);
    },
    id: function() {
      var e;
      return "".concat((e = this.$pcStepper) === null || e === void 0 ? void 0 : e.$id, "_step_").concat(this.activeValue);
    },
    ariaControls: function() {
      var e;
      return "".concat((e = this.$pcStepper) === null || e === void 0 ? void 0 : e.$id, "_steppanel_").concat(this.activeValue);
    },
    a11yAttrs: function() {
      return {
        root: {
          role: "presentation",
          "aria-current": this.active ? "step" : void 0,
          "data-pc-name": "step",
          "data-pc-section": "root",
          "data-p-disabled": this.isStepDisabled,
          "data-p-active": this.active
        },
        header: {
          id: this.id,
          role: "tab",
          taindex: this.disabled ? -1 : void 0,
          "aria-controls": this.ariaControls,
          "data-pc-section": "header",
          disabled: this.isStepDisabled,
          onClick: this.onStepClick
        }
      };
    },
    dataP: function() {
      return Je({
        disabled: this.isStepDisabled,
        readonly: this.$pcStepper.linear,
        active: this.active,
        completed: this.isCompleted,
        vertical: this.$pcStepItem != null
      });
    }
  },
  components: {
    StepperSeparator: Me
  }
}, gn = ["id", "tabindex", "aria-controls", "disabled", "data-p"], vn = ["data-p"], yn = ["data-p"];
function kn(t, e, n, a, s, i) {
  var u = S("StepperSeparator");
  return t.asChild ? M(t.$slots, "default", {
    key: 1,
    class: A(t.cx("root")),
    active: i.active,
    value: t.value,
    a11yAttrs: i.a11yAttrs,
    activateCallback: i.onStepClick
  }) : (c(), y(P(t.as), m({
    key: 0,
    class: t.cx("root"),
    "aria-current": i.active ? "step" : void 0,
    role: "presentation",
    "data-p-active": i.active,
    "data-p-disabled": i.isStepDisabled,
    "data-p": i.dataP
  }, i.getPTOptions("root")), {
    default: K(function() {
      return [f("button", m({
        id: i.id,
        class: t.cx("header"),
        role: "tab",
        type: "button",
        tabindex: i.isStepDisabled ? -1 : void 0,
        "aria-controls": i.ariaControls,
        disabled: i.isStepDisabled,
        onClick: e[0] || (e[0] = function() {
          return i.onStepClick && i.onStepClick.apply(i, arguments);
        }),
        "data-p": i.dataP
      }, i.getPTOptions("header")), [f("span", m({
        class: t.cx("number"),
        "data-p": i.dataP
      }, i.getPTOptions("number")), T(i.activeValue), 17, vn), f("span", m({
        class: t.cx("title"),
        "data-p": i.dataP
      }, i.getPTOptions("title")), [M(t.$slots, "default")], 16, yn)], 16, gn), s.isSeparatorVisible ? (c(), y(u, {
        key: 0,
        "data-p": i.dataP
      }, null, 8, ["data-p"])) : I("", !0)];
    }),
    _: 3
  }, 16, ["class", "aria-current", "data-p-active", "data-p-disabled", "data-p"]));
}
Se.render = kn;
var xn = `
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
    }

    .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.color');
        transition: inherit;
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.hover.color');
    }
`, Pn = {
  root: "p-breadcrumb p-component",
  list: "p-breadcrumb-list",
  homeItem: "p-breadcrumb-home-item",
  separator: "p-breadcrumb-separator",
  separatorIcon: "p-breadcrumb-separator-icon",
  item: function(e) {
    var n = e.instance;
    return ["p-breadcrumb-item", {
      "p-disabled": n.disabled()
    }];
  },
  itemLink: "p-breadcrumb-item-link",
  itemIcon: "p-breadcrumb-item-icon",
  itemLabel: "p-breadcrumb-item-label"
}, wn = z.extend({
  name: "breadcrumb",
  style: xn,
  classes: Pn
}), Ln = {
  name: "BaseBreadcrumb",
  extends: C,
  props: {
    model: {
      type: Array,
      default: null
    },
    home: {
      type: null,
      default: null
    }
  },
  style: wn,
  provide: function() {
    return {
      $pcBreadcrumb: this,
      $parentInstance: this
    };
  }
}, Ce = {
  name: "BreadcrumbItem",
  hostName: "Breadcrumb",
  extends: C,
  props: {
    item: null,
    templates: null,
    index: null
  },
  methods: {
    onClick: function(e) {
      this.item.command && this.item.command({
        originalEvent: e,
        item: this.item
      });
    },
    visible: function() {
      return typeof this.item.visible == "function" ? this.item.visible() : this.item.visible !== !1;
    },
    disabled: function() {
      return typeof this.item.disabled == "function" ? this.item.disabled() : this.item.disabled;
    },
    label: function() {
      return typeof this.item.label == "function" ? this.item.label() : this.item.label;
    },
    isCurrentUrl: function() {
      var e = this.item, n = e.to, a = e.url, s = typeof window < "u" ? window.location.pathname : "";
      return n === s || a === s ? "page" : void 0;
    }
  },
  computed: {
    ptmOptions: function() {
      return {
        context: {
          item: this.item,
          index: this.index
        }
      };
    },
    getMenuItemProps: function() {
      var e = this;
      return {
        action: m({
          class: this.cx("itemLink"),
          "aria-current": this.isCurrentUrl(),
          onClick: function(a) {
            return e.onClick(a);
          }
        }, this.ptm("itemLink", this.ptmOptions)),
        icon: m({
          class: [this.cx("icon"), this.item.icon]
        }, this.ptm("icon", this.ptmOptions)),
        label: m({
          class: this.cx("label")
        }, this.ptm("label", this.ptmOptions))
      };
    }
  }
}, Kn = ["href", "target", "aria-current"];
function Mn(t, e, n, a, s, i) {
  return i.visible() ? (c(), d("li", m({
    key: 0,
    class: [t.cx("item"), n.item.class]
  }, t.ptm("item", i.ptmOptions)), [n.templates.item ? (c(), y(P(n.templates.item), {
    key: 1,
    item: n.item,
    label: i.label(),
    props: i.getMenuItemProps
  }, null, 8, ["item", "label", "props"])) : (c(), d("a", m({
    key: 0,
    href: n.item.url || "#",
    class: t.cx("itemLink"),
    target: n.item.target,
    "aria-current": i.isCurrentUrl(),
    onClick: e[0] || (e[0] = function() {
      return i.onClick && i.onClick.apply(i, arguments);
    })
  }, t.ptm("itemLink", i.ptmOptions)), [n.templates && n.templates.itemicon ? (c(), y(P(n.templates.itemicon), {
    key: 0,
    item: n.item,
    class: A(t.cx("itemIcon", i.ptmOptions))
  }, null, 8, ["item", "class"])) : n.item.icon ? (c(), d("span", m({
    key: 1,
    class: [t.cx("itemIcon"), n.item.icon]
  }, t.ptm("itemIcon", i.ptmOptions)), null, 16)) : I("", !0), n.item.label ? (c(), d("span", m({
    key: 2,
    class: t.cx("itemLabel")
  }, t.ptm("itemLabel", i.ptmOptions)), T(i.label()), 17)) : I("", !0)], 16, Kn))], 16)) : I("", !0);
}
Ce.render = Mn;
var Ae = {
  name: "Breadcrumb",
  extends: Ln,
  inheritAttrs: !1,
  components: {
    BreadcrumbItem: Ce,
    ChevronRightIcon: ne
  }
};
function Sn(t, e, n, a, s, i) {
  var u = S("BreadcrumbItem"), l = S("ChevronRightIcon");
  return c(), d("nav", m({
    class: t.cx("root")
  }, t.ptmi("root")), [f("ol", m({
    class: t.cx("list")
  }, t.ptm("list")), [t.home ? (c(), y(u, m({
    key: 0,
    item: t.home,
    class: t.cx("homeItem"),
    templates: t.$slots,
    pt: t.pt,
    unstyled: t.unstyled
  }, t.ptm("homeItem")), null, 16, ["item", "class", "templates", "pt", "unstyled"])) : I("", !0), (c(!0), d(L, null, D(t.model, function(r, o) {
    return c(), d(L, {
      key: r.label + "_" + o
    }, [t.home || o !== 0 ? (c(), d("li", m({
      key: 0,
      class: t.cx("separator")
    }, {
      ref_for: !0
    }, t.ptm("separator")), [M(t.$slots, "separator", {}, function() {
      return [v(l, m({
        "aria-hidden": "true",
        class: t.cx("separatorIcon")
      }, {
        ref_for: !0
      }, t.ptm("separatorIcon")), null, 16, ["class"])];
    })], 16)) : I("", !0), v(u, {
      item: r,
      index: o,
      templates: t.$slots,
      pt: t.pt,
      unstyled: t.unstyled
    }, null, 8, ["item", "index", "templates", "pt", "unstyled"])], 64);
  }), 128))], 16)], 16);
}
Ae.render = Sn;
var Cn = `
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`, An = {
  submenu: function(e) {
    var n = e.instance, a = e.processedItem;
    return {
      display: n.isItemActive(a) ? "flex" : "none"
    };
  }
}, En = {
  root: function(e) {
    var n = e.instance;
    return ["p-menubar p-component", {
      "p-menubar-mobile": n.queryMatches,
      "p-menubar-mobile-active": n.mobileActive
    }];
  },
  start: "p-menubar-start",
  button: "p-menubar-button",
  rootList: "p-menubar-root-list",
  item: function(e) {
    var n = e.instance, a = e.processedItem;
    return ["p-menubar-item", {
      "p-menubar-item-active": n.isItemActive(a),
      "p-focus": n.isItemFocused(a),
      "p-disabled": n.isItemDisabled(a)
    }];
  },
  itemContent: "p-menubar-item-content",
  itemLink: "p-menubar-item-link",
  itemIcon: "p-menubar-item-icon",
  itemLabel: "p-menubar-item-label",
  submenuIcon: "p-menubar-submenu-icon",
  submenu: "p-menubar-submenu",
  separator: "p-menubar-separator",
  end: "p-menubar-end"
}, Fn = z.extend({
  name: "menubar",
  style: Cn,
  classes: En,
  inlineStyles: An
}), On = {
  name: "BaseMenubar",
  extends: C,
  props: {
    model: {
      type: Array,
      default: null
    },
    buttonProps: {
      type: null,
      default: null
    },
    breakpoint: {
      type: String,
      default: "960px"
    },
    ariaLabelledby: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  style: Fn,
  provide: function() {
    return {
      $pcMenubar: this,
      $parentInstance: this
    };
  }
}, Ee = {
  name: "MenubarSub",
  hostName: "Menubar",
  extends: C,
  emits: ["item-mouseenter", "item-click", "item-mousemove"],
  props: {
    items: {
      type: Array,
      default: null
    },
    root: {
      type: Boolean,
      default: !1
    },
    popup: {
      type: Boolean,
      default: !1
    },
    mobileActive: {
      type: Boolean,
      default: !1
    },
    templates: {
      type: Object,
      default: null
    },
    level: {
      type: Number,
      default: 0
    },
    menuId: {
      type: String,
      default: null
    },
    focusedItemId: {
      type: String,
      default: null
    },
    activeItemPath: {
      type: Object,
      default: null
    }
  },
  list: null,
  methods: {
    getItemId: function(e) {
      return "".concat(this.menuId, "_").concat(e.key);
    },
    getItemKey: function(e) {
      return this.getItemId(e);
    },
    getItemProp: function(e, n, a) {
      return e && e.item ? O(e.item[n], a) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    getItemLabelId: function(e) {
      return "".concat(this.menuId, "_").concat(e.key, "_label");
    },
    getPTOptions: function(e, n, a) {
      return this.ptm(a, {
        context: {
          item: e.item,
          index: n,
          active: this.isItemActive(e),
          focused: this.isItemFocused(e),
          disabled: this.isItemDisabled(e),
          level: this.level
        }
      });
    },
    isItemActive: function(e) {
      return this.activeItemPath.some(function(n) {
        return n.key === e.key;
      });
    },
    isItemVisible: function(e) {
      return this.getItemProp(e, "visible") !== !1;
    },
    isItemDisabled: function(e) {
      return this.getItemProp(e, "disabled");
    },
    isItemFocused: function(e) {
      return this.focusedItemId === this.getItemId(e);
    },
    isItemGroup: function(e) {
      return b(e.items);
    },
    onItemClick: function(e, n) {
      this.getItemProp(n, "command", {
        originalEvent: e,
        item: n.item
      }), this.$emit("item-click", {
        originalEvent: e,
        processedItem: n,
        isFocus: !0
      });
    },
    onItemMouseEnter: function(e, n) {
      this.$emit("item-mouseenter", {
        originalEvent: e,
        processedItem: n
      });
    },
    onItemMouseMove: function(e, n) {
      this.$emit("item-mousemove", {
        originalEvent: e,
        processedItem: n
      });
    },
    getAriaPosInset: function(e) {
      return e - this.calculateAriaSetSize.slice(0, e).length + 1;
    },
    getMenuItemProps: function(e, n) {
      return {
        action: m({
          class: this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions(e, n, "itemLink")),
        icon: m({
          class: [this.cx("itemIcon"), this.getItemProp(e, "icon")]
        }, this.getPTOptions(e, n, "itemIcon")),
        label: m({
          class: this.cx("itemLabel")
        }, this.getPTOptions(e, n, "itemLabel")),
        submenuicon: m({
          class: this.cx("submenuIcon")
        }, this.getPTOptions(e, n, "submenuIcon"))
      };
    }
  },
  computed: {
    calculateAriaSetSize: function() {
      var e = this;
      return this.items.filter(function(n) {
        return e.isItemVisible(n) && e.getItemProp(n, "separator");
      });
    },
    getAriaSetSize: function() {
      var e = this;
      return this.items.filter(function(n) {
        return e.isItemVisible(n) && !e.getItemProp(n, "separator");
      }).length;
    }
  },
  components: {
    AngleRightIcon: ae,
    AngleDownIcon: Ie
  },
  directives: {
    ripple: J
  }
}, Dn = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], Vn = ["onClick", "onMouseenter", "onMousemove"], Tn = ["href", "target"], zn = ["id"], Bn = ["id"];
function Hn(t, e, n, a, s, i) {
  var u = S("MenubarSub", !0), l = X("ripple");
  return c(), d("ul", m({
    class: n.level === 0 ? t.cx("rootList") : t.cx("submenu")
  }, n.level === 0 ? t.ptm("rootList") : t.ptm("submenu")), [(c(!0), d(L, null, D(n.items, function(r, o) {
    return c(), d(L, {
      key: i.getItemKey(r)
    }, [i.isItemVisible(r) && !i.getItemProp(r, "separator") ? (c(), d("li", m({
      key: 0,
      id: i.getItemId(r),
      style: i.getItemProp(r, "style"),
      class: [t.cx("item", {
        processedItem: r
      }), i.getItemProp(r, "class")],
      role: "menuitem",
      "aria-label": i.getItemLabel(r),
      "aria-disabled": i.isItemDisabled(r) || void 0,
      "aria-expanded": i.isItemGroup(r) ? i.isItemActive(r) : void 0,
      "aria-haspopup": i.isItemGroup(r) && !i.getItemProp(r, "to") ? "menu" : void 0,
      "aria-setsize": i.getAriaSetSize,
      "aria-posinset": i.getAriaPosInset(o)
    }, {
      ref_for: !0
    }, i.getPTOptions(r, o, "item"), {
      "data-p-active": i.isItemActive(r),
      "data-p-focused": i.isItemFocused(r),
      "data-p-disabled": i.isItemDisabled(r)
    }), [f("div", m({
      class: t.cx("itemContent"),
      onClick: function(h) {
        return i.onItemClick(h, r);
      },
      onMouseenter: function(h) {
        return i.onItemMouseEnter(h, r);
      },
      onMousemove: function(h) {
        return i.onItemMouseMove(h, r);
      }
    }, {
      ref_for: !0
    }, i.getPTOptions(r, o, "itemContent")), [n.templates.item ? (c(), y(P(n.templates.item), {
      key: 1,
      item: r.item,
      root: n.root,
      hasSubmenu: i.getItemProp(r, "items"),
      label: i.getItemLabel(r),
      props: i.getMenuItemProps(r, o)
    }, null, 8, ["item", "root", "hasSubmenu", "label", "props"])) : _((c(), d("a", m({
      key: 0,
      href: i.getItemProp(r, "url"),
      class: t.cx("itemLink"),
      target: i.getItemProp(r, "target"),
      tabindex: "-1"
    }, {
      ref_for: !0
    }, i.getPTOptions(r, o, "itemLink")), [n.templates.itemicon ? (c(), y(P(n.templates.itemicon), {
      key: 0,
      item: r.item,
      class: A(t.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : i.getItemProp(r, "icon") ? (c(), d("span", m({
      key: 1,
      class: [t.cx("itemIcon"), i.getItemProp(r, "icon")]
    }, {
      ref_for: !0
    }, i.getPTOptions(r, o, "itemIcon")), null, 16)) : I("", !0), f("span", m({
      id: i.getItemLabelId(r),
      class: t.cx("itemLabel")
    }, {
      ref_for: !0
    }, i.getPTOptions(r, o, "itemLabel")), T(i.getItemLabel(r)), 17, zn), i.getItemProp(r, "items") ? (c(), d(L, {
      key: 2
    }, [n.templates.submenuicon ? (c(), y(P(n.templates.submenuicon), {
      key: 0,
      root: n.root,
      active: i.isItemActive(r),
      class: A(t.cx("submenuIcon"))
    }, null, 8, ["root", "active", "class"])) : (c(), y(P(n.root ? "AngleDownIcon" : "AngleRightIcon"), m({
      key: 1,
      class: t.cx("submenuIcon")
    }, {
      ref_for: !0
    }, i.getPTOptions(r, o, "submenuIcon")), null, 16, ["class"]))], 64)) : I("", !0)], 16, Tn)), [[l]])], 16, Vn), i.isItemVisible(r) && i.isItemGroup(r) ? (c(), y(u, {
      key: 0,
      id: i.getItemId(r) + "_list",
      menuId: n.menuId,
      role: "menu",
      style: ie(t.sx("submenu", !0, {
        processedItem: r
      })),
      focusedItemId: n.focusedItemId,
      items: r.items,
      mobileActive: n.mobileActive,
      activeItemPath: n.activeItemPath,
      templates: n.templates,
      level: n.level + 1,
      "aria-labelledby": i.getItemLabelId(r),
      pt: t.pt,
      unstyled: t.unstyled,
      onItemClick: e[0] || (e[0] = function(p) {
        return t.$emit("item-click", p);
      }),
      onItemMouseenter: e[1] || (e[1] = function(p) {
        return t.$emit("item-mouseenter", p);
      }),
      onItemMousemove: e[2] || (e[2] = function(p) {
        return t.$emit("item-mousemove", p);
      })
    }, null, 8, ["id", "menuId", "style", "focusedItemId", "items", "mobileActive", "activeItemPath", "templates", "level", "aria-labelledby", "pt", "unstyled"])) : I("", !0)], 16, Dn)) : I("", !0), i.isItemVisible(r) && i.getItemProp(r, "separator") ? (c(), d("li", m({
      key: 1,
      id: i.getItemId(r),
      class: [t.cx("separator"), i.getItemProp(r, "class")],
      style: i.getItemProp(r, "style"),
      role: "separator"
    }, {
      ref_for: !0
    }, t.ptm("separator")), null, 16, Bn)) : I("", !0)], 64);
  }), 128))], 16);
}
Ee.render = Hn;
var Fe = {
  name: "Menubar",
  extends: On,
  inheritAttrs: !1,
  emits: ["focus", "blur"],
  matchMediaListener: null,
  data: function() {
    return {
      mobileActive: !1,
      focused: !1,
      focusedItemInfo: {
        index: -1,
        level: 0,
        parentKey: ""
      },
      activeItemPath: [],
      dirty: !1,
      query: null,
      queryMatches: !1
    };
  },
  watch: {
    activeItemPath: function(e) {
      b(e) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : (this.unbindOutsideClickListener(), this.unbindResizeListener());
    }
  },
  outsideClickListener: null,
  container: null,
  menubar: null,
  mounted: function() {
    this.bindMatchMediaListener();
  },
  beforeUnmount: function() {
    this.mobileActive = !1, this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.container && V.clear(this.container), this.container = null;
  },
  methods: {
    getItemProp: function(e, n) {
      return e ? O(e[n]) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    isItemDisabled: function(e) {
      return this.getItemProp(e, "disabled");
    },
    isItemVisible: function(e) {
      return this.getItemProp(e, "visible") !== !1;
    },
    isItemGroup: function(e) {
      return b(this.getItemProp(e, "items"));
    },
    isItemSeparator: function(e) {
      return this.getItemProp(e, "separator");
    },
    getProccessedItemLabel: function(e) {
      return e ? this.getItemLabel(e.item) : void 0;
    },
    isProccessedItemGroup: function(e) {
      return e && b(e.items);
    },
    toggle: function(e) {
      var n = this;
      this.mobileActive ? (this.mobileActive = !1, V.clear(this.menubar), this.hide()) : (this.mobileActive = !0, V.set("menu", this.menubar, this.$primevue.config.zIndex.menu), setTimeout(function() {
        n.show();
      }, 1)), this.bindOutsideClickListener(), e.preventDefault();
    },
    show: function() {
      w(this.menubar);
    },
    hide: function(e, n) {
      var a = this;
      this.mobileActive && (this.mobileActive = !1, setTimeout(function() {
        w(a.$refs.menubutton);
      }, 0)), this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, n && w(this.menubar), this.dirty = !1;
    },
    onFocus: function(e) {
      this.focused = !0, this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: ""
      }, this.$emit("focus", e);
    },
    onBlur: function(e) {
      this.focused = !1, this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.searchValue = "", this.dirty = !1, this.$emit("blur", e);
    },
    onKeyDown: function(e) {
      var n = e.metaKey || e.ctrlKey;
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(e);
          break;
        case "ArrowRight":
          this.onArrowRightKey(e);
          break;
        case "Home":
          this.onHomeKey(e);
          break;
        case "End":
          this.onEndKey(e);
          break;
        case "Space":
          this.onSpaceKey(e);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(e);
          break;
        case "Escape":
          this.onEscapeKey(e);
          break;
        case "Tab":
          this.onTabKey(e);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !n && Y(e.key) && this.searchItems(e, e.key);
          break;
      }
    },
    onItemChange: function(e, n) {
      var a = e.processedItem, s = e.isFocus;
      if (!F(a)) {
        var i = a.index, u = a.key, l = a.level, r = a.parentKey, o = a.items, p = b(o), h = this.activeItemPath.filter(function(k) {
          return k.parentKey !== r && k.parentKey !== u;
        });
        p && h.push(a), this.focusedItemInfo = {
          index: i,
          level: l,
          parentKey: r
        }, p && (this.dirty = !0), s && w(this.menubar), !(n === "hover" && this.queryMatches) && (this.activeItemPath = h);
      }
    },
    onItemClick: function(e) {
      var n = e.originalEvent, a = e.processedItem, s = this.isProccessedItemGroup(a), i = F(a.parent), u = this.isSelected(a);
      if (u) {
        var l = a.index, r = a.key, o = a.level, p = a.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(k) {
          return r !== k.key && r.startsWith(k.key);
        }), this.focusedItemInfo = {
          index: l,
          level: o,
          parentKey: p
        }, this.dirty = !i, w(this.menubar);
      } else if (s)
        this.onItemChange(e);
      else {
        var h = i ? a : this.activeItemPath.find(function(k) {
          return k.parentKey === "";
        });
        this.hide(n), this.changeFocusedItemIndex(n, h ? h.index : -1), this.mobileActive = !1, w(this.menubar);
      }
    },
    onItemMouseEnter: function(e) {
      this.dirty && this.onItemChange(e, "hover");
    },
    onItemMouseMove: function(e) {
      this.focused && this.changeFocusedItemIndex(e, e.processedItem.index);
    },
    menuButtonClick: function(e) {
      this.toggle(e);
    },
    menuButtonKeydown: function(e) {
      (e.code === "Enter" || e.code === "NumpadEnter" || e.code === "Space") && this.menuButtonClick(e);
    },
    onArrowDownKey: function(e) {
      var n = this.visibleItems[this.focusedItemInfo.index], a = n ? F(n.parent) : null;
      if (a) {
        var s = this.isProccessedItemGroup(n);
        s && (this.onItemChange({
          originalEvent: e,
          processedItem: n
        }), this.focusedItemInfo = {
          index: -1,
          parentKey: n.key
        }, this.onArrowRightKey(e));
      } else {
        var i = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(e, i);
      }
      e.preventDefault();
    },
    onArrowUpKey: function(e) {
      var n = this, a = this.visibleItems[this.focusedItemInfo.index], s = F(a.parent);
      if (s) {
        var i = this.isProccessedItemGroup(a);
        if (i) {
          this.onItemChange({
            originalEvent: e,
            processedItem: a
          }), this.focusedItemInfo = {
            index: -1,
            parentKey: a.key
          };
          var u = this.findLastItemIndex();
          this.changeFocusedItemIndex(e, u);
        }
      } else {
        var l = this.activeItemPath.find(function(o) {
          return o.key === a.parentKey;
        });
        if (this.focusedItemInfo.index === 0)
          this.focusedItemInfo = {
            index: -1,
            parentKey: l ? l.parentKey : ""
          }, this.searchValue = "", this.onArrowLeftKey(e), this.activeItemPath = this.activeItemPath.filter(function(o) {
            return o.parentKey !== n.focusedItemInfo.parentKey;
          });
        else {
          var r = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
          this.changeFocusedItemIndex(e, r);
        }
      }
      e.preventDefault();
    },
    onArrowLeftKey: function(e) {
      var n = this, a = this.visibleItems[this.focusedItemInfo.index], s = a ? this.activeItemPath.find(function(u) {
        return u.key === a.parentKey;
      }) : null;
      if (s)
        this.onItemChange({
          originalEvent: e,
          processedItem: s
        }), this.activeItemPath = this.activeItemPath.filter(function(u) {
          return u.parentKey !== n.focusedItemInfo.parentKey;
        }), e.preventDefault();
      else {
        var i = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(e, i), e.preventDefault();
      }
    },
    onArrowRightKey: function(e) {
      var n = this.visibleItems[this.focusedItemInfo.index], a = n ? this.activeItemPath.find(function(u) {
        return u.key === n.parentKey;
      }) : null;
      if (a) {
        var s = this.isProccessedItemGroup(n);
        s && (this.onItemChange({
          originalEvent: e,
          processedItem: n
        }), this.focusedItemInfo = {
          index: -1,
          parentKey: n.key
        }, this.onArrowDownKey(e));
      } else {
        var i = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(e, i), e.preventDefault();
      }
    },
    onHomeKey: function(e) {
      this.changeFocusedItemIndex(e, this.findFirstItemIndex()), e.preventDefault();
    },
    onEndKey: function(e) {
      this.changeFocusedItemIndex(e, this.findLastItemIndex()), e.preventDefault();
    },
    onEnterKey: function(e) {
      if (this.focusedItemInfo.index !== -1) {
        var n = x(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), a = n && x(n, 'a[data-pc-section="itemlink"]');
        a ? a.click() : n && n.click();
        var s = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(s);
        !i && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
      }
      e.preventDefault();
    },
    onSpaceKey: function(e) {
      this.onEnterKey(e);
    },
    onEscapeKey: function(e) {
      if (this.focusedItemInfo.level !== 0) {
        var n = this.focusedItemInfo;
        this.hide(e, !1), this.focusedItemInfo = {
          index: Number(n.parentKey.split("_")[0]),
          level: 0,
          parentKey: ""
        };
      }
      e.preventDefault();
    },
    onTabKey: function(e) {
      if (this.focusedItemInfo.index !== -1) {
        var n = this.visibleItems[this.focusedItemInfo.index], a = this.isProccessedItemGroup(n);
        !a && this.onItemChange({
          originalEvent: e,
          processedItem: n
        });
      }
      this.hide();
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        var a = e.container && !e.container.contains(n.target), s = !(e.target && (e.target === n.target || e.target.contains(n.target)));
        a && s && e.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function(n) {
        te() || e.hide(n, !0), e.mobileActive = !1;
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindMatchMediaListener: function() {
      var e = this;
      if (!this.matchMediaListener) {
        var n = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = n, this.queryMatches = n.matches, this.matchMediaListener = function() {
          e.queryMatches = n.matches, e.mobileActive = !1;
        }, this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function() {
      this.matchMediaListener && (this.query.removeEventListener("change", this.matchMediaListener), this.matchMediaListener = null);
    },
    isItemMatched: function(e) {
      var n;
      return this.isValidItem(e) && ((n = this.getProccessedItemLabel(e)) === null || n === void 0 ? void 0 : n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    },
    isValidItem: function(e) {
      return !!e && !this.isItemDisabled(e.item) && !this.isItemSeparator(e.item) && this.isItemVisible(e.item);
    },
    isValidSelectedItem: function(e) {
      return this.isValidItem(e) && this.isSelected(e);
    },
    isSelected: function(e) {
      return this.activeItemPath.some(function(n) {
        return n.key === e.key;
      });
    },
    findFirstItemIndex: function() {
      var e = this;
      return this.visibleItems.findIndex(function(n) {
        return e.isValidItem(n);
      });
    },
    findLastItemIndex: function() {
      var e = this;
      return R(this.visibleItems, function(n) {
        return e.isValidItem(n);
      });
    },
    findNextItemIndex: function(e) {
      var n = this, a = e < this.visibleItems.length - 1 ? this.visibleItems.slice(e + 1).findIndex(function(s) {
        return n.isValidItem(s);
      }) : -1;
      return a > -1 ? a + e + 1 : e;
    },
    findPrevItemIndex: function(e) {
      var n = this, a = e > 0 ? R(this.visibleItems.slice(0, e), function(s) {
        return n.isValidItem(s);
      }) : -1;
      return a > -1 ? a : e;
    },
    findSelectedItemIndex: function() {
      var e = this;
      return this.visibleItems.findIndex(function(n) {
        return e.isValidSelectedItem(n);
      });
    },
    findFirstFocusedItemIndex: function() {
      var e = this.findSelectedItemIndex();
      return e < 0 ? this.findFirstItemIndex() : e;
    },
    findLastFocusedItemIndex: function() {
      var e = this.findSelectedItemIndex();
      return e < 0 ? this.findLastItemIndex() : e;
    },
    searchItems: function(e, n) {
      var a = this;
      this.searchValue = (this.searchValue || "") + n;
      var s = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (s = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u) {
        return a.isItemMatched(u);
      }), s = s === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(u) {
        return a.isItemMatched(u);
      }) : s + this.focusedItemInfo.index) : s = this.visibleItems.findIndex(function(u) {
        return a.isItemMatched(u);
      }), s !== -1 && (i = !0), s === -1 && this.focusedItemInfo.index === -1 && (s = this.findFirstFocusedItemIndex()), s !== -1 && this.changeFocusedItemIndex(e, s), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        a.searchValue = "", a.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(e, n) {
      this.focusedItemInfo.index !== n && (this.focusedItemInfo.index = n, this.scrollInView());
    },
    scrollInView: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, n = e !== -1 ? "".concat(this.$id, "_").concat(e) : this.focusedItemId, a = x(this.menubar, 'li[id="'.concat(n, '"]'));
      a && a.scrollIntoView && a.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(e) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", u = [];
      return e && e.forEach(function(l, r) {
        var o = (i !== "" ? i + "_" : "") + r, p = {
          item: l,
          index: r,
          level: a,
          key: o,
          parent: s,
          parentKey: i
        };
        p.items = n.createProcessedItems(l.items, a + 1, p, o), u.push(p);
      }), u;
    },
    containerRef: function(e) {
      this.container = e;
    },
    menubarRef: function(e) {
      this.menubar = e ? e.$el : void 0;
    }
  },
  computed: {
    processedItems: function() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems: function() {
      var e = this, n = this.activeItemPath.find(function(a) {
        return a.key === e.focusedItemInfo.parentKey;
      });
      return n ? n.items : this.processedItems;
    },
    focusedItemId: function() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.$id).concat(b(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    MenubarSub: Ee,
    BarsIcon: be
  }
};
function j(t) {
  "@babel/helpers - typeof";
  return j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, j(t);
}
function me(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function ce(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? me(Object(n), !0).forEach(function(a) {
      Rn(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function Rn(t, e, n) {
  return (e = _n(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function _n(t) {
  var e = Nn(t, "string");
  return j(e) == "symbol" ? e : e + "";
}
function Nn(t, e) {
  if (j(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(t, e);
    if (j(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Gn = ["aria-haspopup", "aria-expanded", "aria-controls", "aria-label"];
function jn(t, e, n, a, s, i) {
  var u = S("BarsIcon"), l = S("MenubarSub");
  return c(), d("div", m({
    ref: i.containerRef,
    class: t.cx("root")
  }, t.ptmi("root")), [t.$slots.start ? (c(), d("div", m({
    key: 0,
    class: t.cx("start")
  }, t.ptm("start")), [M(t.$slots, "start")], 16)) : I("", !0), M(t.$slots, t.$slots.button ? "button" : "menubutton", {
    id: t.$id,
    class: A(t.cx("button")),
    toggleCallback: function(o) {
      return i.menuButtonClick(o);
    }
  }, function() {
    var r;
    return [t.model && t.model.length > 0 ? (c(), d("a", m({
      key: 0,
      ref: "menubutton",
      role: "button",
      tabindex: "0",
      class: t.cx("button"),
      "aria-haspopup": !!(t.model.length && t.model.length > 0),
      "aria-expanded": s.mobileActive,
      "aria-controls": t.$id,
      "aria-label": (r = t.$primevue.config.locale.aria) === null || r === void 0 ? void 0 : r.navigation,
      onClick: e[0] || (e[0] = function(o) {
        return i.menuButtonClick(o);
      }),
      onKeydown: e[1] || (e[1] = function(o) {
        return i.menuButtonKeydown(o);
      })
    }, ce(ce({}, t.buttonProps), t.ptm("button"))), [M(t.$slots, t.$slots.buttonicon ? "buttonicon" : "menubuttonicon", {}, function() {
      return [v(u, fe(he(t.ptm("buttonicon"))), null, 16)];
    })], 16, Gn)) : I("", !0)];
  }), v(l, {
    ref: i.menubarRef,
    id: t.$id + "_list",
    role: "menubar",
    items: i.processedItems,
    templates: t.$slots,
    root: !0,
    mobileActive: s.mobileActive,
    tabindex: "0",
    "aria-activedescendant": s.focused ? i.focusedItemId : void 0,
    menuId: t.$id,
    focusedItemId: s.focused ? i.focusedItemId : void 0,
    activeItemPath: s.activeItemPath,
    level: 0,
    "aria-labelledby": t.ariaLabelledby,
    "aria-label": t.ariaLabel,
    pt: t.pt,
    unstyled: t.unstyled,
    onFocus: i.onFocus,
    onBlur: i.onBlur,
    onKeydown: i.onKeyDown,
    onItemClick: i.onItemClick,
    onItemMouseenter: i.onItemMouseEnter,
    onItemMousemove: i.onItemMouseMove
  }, null, 8, ["id", "items", "templates", "mobileActive", "aria-activedescendant", "menuId", "focusedItemId", "activeItemPath", "aria-labelledby", "aria-label", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), t.$slots.end ? (c(), d("div", m({
    key: 1,
    class: t.cx("end")
  }, t.ptm("end")), [M(t.$slots, "end")], 16)) : I("", !0)], 16);
}
Fe.render = jn;
const Un = { class: "card" }, qn = { class: "card" }, Wn = { class: "flex flex-col md:flex-row gap-8" }, Yn = { class: "md:w-1/2" }, Xn = { class: "card" }, Zn = { class: "md:w-1/2" }, Jn = { class: "card" }, Qn = { class: "flex flex-col md:flex-row gap-8 mt-6" }, $n = { class: "md:w-1/3" }, ei = { class: "card" }, ti = { class: "md:w-1/3" }, ni = { class: "card" }, ii = { class: "md:w-1/3" }, ai = { class: "card" }, ri = { class: "flex flex-col md:flex-row gap-8 mt-8" }, si = { class: "md:w-1/2" }, oi = { class: "card" }, ui = { class: "md:w-1/2" }, li = { class: "card" }, Mi = {
  __name: "MenuDoc",
  setup(t) {
    const e = E(null), n = E(null), a = E([
      {
        label: "Customers",
        icon: "pi pi-fw pi-table",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-user-plus",
            items: [
              {
                label: "Customer",
                icon: "pi pi-fw pi-plus"
              },
              {
                label: "Duplicate",
                icon: "pi pi-fw pi-copy"
              }
            ]
          },
          {
            label: "Edit",
            icon: "pi pi-fw pi-user-edit"
          }
        ]
      },
      {
        label: "Orders",
        icon: "pi pi-fw pi-shopping-cart",
        items: [
          {
            label: "View",
            icon: "pi pi-fw pi-list"
          },
          {
            label: "Search",
            icon: "pi pi-fw pi-search"
          }
        ]
      },
      {
        label: "Shipments",
        icon: "pi pi-fw pi-envelope",
        items: [
          {
            label: "Tracker",
            icon: "pi pi-fw pi-compass"
          },
          {
            label: "Map",
            icon: "pi pi-fw pi-map-marker"
          },
          {
            label: "Manage",
            icon: "pi pi-fw pi-pencil"
          }
        ]
      },
      {
        label: "Profile",
        icon: "pi pi-fw pi-user",
        items: [
          {
            label: "Settings",
            icon: "pi pi-fw pi-cog"
          },
          {
            label: "Billing",
            icon: "pi pi-fw pi-file"
          }
        ]
      },
      {
        label: "Quit",
        icon: "pi pi-fw pi-sign-out"
      }
    ]), s = E({ icon: "pi pi-home", to: "/" }), i = E([{ label: "Computer" }, { label: "Notebook" }, { label: "Accessories" }, { label: "Backpacks" }, { label: "Item" }]), u = E([
      {
        label: "Customers",
        icon: "pi pi-fw pi-table",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-user-plus",
            items: [
              {
                label: "Customer",
                icon: "pi pi-fw pi-plus"
              },
              {
                label: "Duplicate",
                icon: "pi pi-fw pi-copy"
              }
            ]
          },
          {
            label: "Edit",
            icon: "pi pi-fw pi-user-edit"
          }
        ]
      },
      {
        label: "Orders",
        icon: "pi pi-fw pi-shopping-cart",
        items: [
          {
            label: "View",
            icon: "pi pi-fw pi-list"
          },
          {
            label: "Search",
            icon: "pi pi-fw pi-search"
          }
        ]
      },
      {
        label: "Shipments",
        icon: "pi pi-fw pi-envelope",
        items: [
          {
            label: "Tracker",
            icon: "pi pi-fw pi-compass"
          },
          {
            label: "Map",
            icon: "pi pi-fw pi-map-marker"
          },
          {
            label: "Manage",
            icon: "pi pi-fw pi-pencil"
          }
        ]
      },
      {
        label: "Profile",
        icon: "pi pi-fw pi-user",
        items: [
          {
            label: "Settings",
            icon: "pi pi-fw pi-cog"
          },
          {
            label: "Billing",
            icon: "pi pi-fw pi-file"
          }
        ]
      },
      {
        separator: !0
      },
      {
        label: "Quit",
        icon: "pi pi-fw pi-sign-out"
      }
    ]), l = E([
      {
        label: "Save",
        icon: "pi pi-save"
      },
      {
        label: "Update",
        icon: "pi pi-refresh"
      },
      {
        label: "Delete",
        icon: "pi pi-trash"
      },
      {
        separator: !0
      },
      {
        label: "Home",
        icon: "pi pi-home"
      }
    ]), r = E([
      {
        label: "Customers",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-plus"
          },
          {
            label: "Edit",
            icon: "pi pi-fw pi-user-edit"
          }
        ]
      },
      {
        label: "Orders",
        items: [
          {
            label: "View",
            icon: "pi pi-fw pi-list"
          },
          {
            label: "Search",
            icon: "pi pi-fw pi-search"
          }
        ]
      }
    ]), o = E([
      {
        label: "Save",
        icon: "pi pi-save"
      },
      {
        label: "Update",
        icon: "pi pi-refresh"
      },
      {
        label: "Delete",
        icon: "pi pi-trash"
      },
      {
        separator: !0
      },
      {
        label: "Options",
        icon: "pi pi-cog"
      }
    ]), p = E([
      {
        label: "Fashion",
        icon: "pi pi-fw pi-tag",
        items: [
          [
            {
              label: "Woman",
              items: [{ label: "Woman Item" }, { label: "Woman Item" }, { label: "Woman Item" }]
            },
            {
              label: "Men",
              items: [{ label: "Men Item" }, { label: "Men Item" }, { label: "Men Item" }]
            }
          ],
          [
            {
              label: "Kids",
              items: [{ label: "Kids Item" }, { label: "Kids Item" }]
            },
            {
              label: "Luggage",
              items: [{ label: "Luggage Item" }, { label: "Luggage Item" }, { label: "Luggage Item" }]
            }
          ]
        ]
      },
      {
        label: "Electronics",
        icon: "pi pi-fw pi-desktop",
        items: [
          [
            {
              label: "Computer",
              items: [{ label: "Computer Item" }, { label: "Computer Item" }]
            },
            {
              label: "Camcorder",
              items: [{ label: "Camcorder Item" }, { label: "Camcorder Item" }, { label: "Camcorder Item" }]
            }
          ],
          [
            {
              label: "TV",
              items: [{ label: "TV Item" }, { label: "TV Item" }]
            },
            {
              label: "Audio",
              items: [{ label: "Audio Item" }, { label: "Audio Item" }, { label: "Audio Item" }]
            }
          ],
          [
            {
              label: "Sports.7",
              items: [{ label: "Sports.7.1" }, { label: "Sports.7.2" }]
            }
          ]
        ]
      },
      {
        label: "Furniture",
        icon: "pi pi-fw pi-image",
        items: [
          [
            {
              label: "Living Room",
              items: [{ label: "Living Room Item" }, { label: "Living Room Item" }]
            },
            {
              label: "Kitchen",
              items: [{ label: "Kitchen Item" }, { label: "Kitchen Item" }, { label: "Kitchen Item" }]
            }
          ],
          [
            {
              label: "Bedroom",
              items: [{ label: "Bedroom Item" }, { label: "Bedroom Item" }]
            },
            {
              label: "Outdoor",
              items: [{ label: "Outdoor Item" }, { label: "Outdoor Item" }, { label: "Outdoor Item" }]
            }
          ]
        ]
      },
      {
        label: "Sports",
        icon: "pi pi-fw pi-star",
        items: [
          [
            {
              label: "Basketball",
              items: [{ label: "Basketball Item" }, { label: "Basketball Item" }]
            },
            {
              label: "Football",
              items: [{ label: "Football Item" }, { label: "Football Item" }, { label: "Football Item" }]
            }
          ],
          [
            {
              label: "Tennis",
              items: [{ label: "Tennis Item" }, { label: "Tennis Item" }]
            }
          ]
        ]
      }
    ]), h = E([
      {
        label: "Customers",
        icon: "pi pi-fw pi-table",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-user-plus",
            items: [
              {
                label: "Customer",
                icon: "pi pi-fw pi-plus"
              },
              {
                label: "Duplicate",
                icon: "pi pi-fw pi-copy"
              }
            ]
          },
          {
            label: "Edit",
            icon: "pi pi-fw pi-user-edit"
          }
        ]
      },
      {
        label: "Orders",
        icon: "pi pi-fw pi-shopping-cart",
        items: [
          {
            label: "View",
            icon: "pi pi-fw pi-list"
          },
          {
            label: "Search",
            icon: "pi pi-fw pi-search"
          }
        ]
      },
      {
        label: "Shipments",
        icon: "pi pi-fw pi-envelope",
        items: [
          {
            label: "Tracker",
            icon: "pi pi-fw pi-compass"
          },
          {
            label: "Map",
            icon: "pi pi-fw pi-map-marker"
          },
          {
            label: "Manage",
            icon: "pi pi-fw pi-pencil"
          }
        ]
      },
      {
        label: "Profile",
        icon: "pi pi-fw pi-user",
        items: [
          {
            label: "Settings",
            icon: "pi pi-fw pi-cog"
          },
          {
            label: "Billing",
            icon: "pi pi-fw pi-file"
          }
        ]
      }
    ]);
    function k(U) {
      e.value.toggle(U);
    }
    function Q(U) {
      n.value.show(U);
    }
    return (U, g) => {
      const Oe = st, De = ot, Ve = rt, Te = Fe, ze = Ae, $ = Se, Be = Ke, He = Le, ee = at, Re = it, _e = nt, Ne = tt, re = et, Ge = $e, je = we, se = xe, Ue = ye;
      return c(), d(L, null, [
        f("div", Un, [
          g[0] || (g[0] = f("div", { class: "font-semibold text-xl mb-4" }, "Menubar", -1)),
          v(Te, { model: a.value }, {
            end: K(() => [
              v(Ve, { iconPosition: "left" }, {
                default: K(() => [
                  v(Oe, { class: "pi pi-search" }),
                  v(De, {
                    type: "text",
                    placeholder: "Search"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        f("div", qn, [
          g[1] || (g[1] = f("div", { class: "font-semibold text-xl mb-4" }, "Breadcrumb", -1)),
          v(ze, {
            home: s.value,
            model: i.value
          }, null, 8, ["home", "model"])
        ]),
        f("div", Wn, [
          f("div", Yn, [
            f("div", Xn, [
              g[5] || (g[5] = f("div", { class: "font-semibold text-xl mb-4" }, "Steps", -1)),
              v(He, { value: "1" }, {
                default: K(() => [
                  v(Be, null, {
                    default: K(() => [
                      v($, { value: "1" }, {
                        default: K(() => [...g[2] || (g[2] = [
                          B("Header I", -1)
                        ])]),
                        _: 1
                      }),
                      v($, { value: "2" }, {
                        default: K(() => [...g[3] || (g[3] = [
                          B("Header II", -1)
                        ])]),
                        _: 1
                      }),
                      v($, { value: "3" }, {
                        default: K(() => [...g[4] || (g[4] = [
                          B("Header III", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          f("div", Zn, [
            f("div", Jn, [
              g[9] || (g[9] = f("div", { class: "font-semibold text-xl mb-4" }, "TabMenu", -1)),
              v(_e, { value: "0" }, {
                default: K(() => [
                  v(Re, null, {
                    default: K(() => [
                      v(ee, { value: "0" }, {
                        default: K(() => [...g[6] || (g[6] = [
                          B("Header I", -1)
                        ])]),
                        _: 1
                      }),
                      v(ee, { value: "1" }, {
                        default: K(() => [...g[7] || (g[7] = [
                          B("Header II", -1)
                        ])]),
                        _: 1
                      }),
                      v(ee, { value: "2" }, {
                        default: K(() => [...g[8] || (g[8] = [
                          B("Header III", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ])
        ]),
        f("div", Qn, [
          f("div", $n, [
            f("div", ei, [
              g[10] || (g[10] = f("div", { class: "font-semibold text-xl mb-4" }, "Tiered Menu", -1)),
              v(Ne, { model: u.value }, null, 8, ["model"])
            ])
          ]),
          f("div", ti, [
            f("div", ni, [
              g[11] || (g[11] = f("div", { class: "font-semibold text-xl mb-4" }, "Plain Menu", -1)),
              v(re, { model: r.value }, null, 8, ["model"])
            ])
          ]),
          f("div", ii, [
            f("div", ai, [
              g[12] || (g[12] = f("div", { class: "font-semibold text-xl mb-4" }, "Overlay Menu", -1)),
              v(re, {
                ref_key: "menu",
                ref: e,
                model: l.value,
                popup: !0
              }, null, 8, ["model"]),
              v(Ge, {
                type: "button",
                label: "Options",
                icon: "pi pi-angle-down",
                onClick: k,
                style: { width: "auto" }
              })
            ]),
            f("div", {
              class: "card",
              onContextmenu: Q
            }, [
              g[13] || (g[13] = f("div", { class: "font-semibold text-xl mb-4" }, "Context Menu", -1)),
              g[14] || (g[14] = B(" Right click to display. ", -1)),
              v(je, {
                ref_key: "contextMenu",
                ref: n,
                model: o.value
              }, null, 8, ["model"])
            ], 32)
          ])
        ]),
        f("div", ri, [
          f("div", si, [
            f("div", oi, [
              g[15] || (g[15] = f("div", { class: "font-semibold text-xl mb-4" }, "MegaMenu | Horizontal", -1)),
              v(se, { model: p.value }, null, 8, ["model"]),
              g[16] || (g[16] = f("div", { class: "font-semibold text-xl mb-4 mt-8" }, "MegaMenu | Vertical", -1)),
              v(se, {
                model: p.value,
                orientation: "vertical"
              }, null, 8, ["model"])
            ])
          ]),
          f("div", ui, [
            f("div", li, [
              g[17] || (g[17] = f("div", { class: "font-semibold text-xl mb-4" }, "PanelMenu", -1)),
              v(Ue, { model: h.value }, null, 8, ["model"])
            ])
          ])
        ])
      ], 64);
    };
  }
};
export {
  Mi as default
};
