import { B as h, l as B } from "./main-D_G-w7S7.js";
import { s as w } from "./index-DUlKYhAg.js";
import { s as v } from "./index-DPejeiSQ.js";
import { s as $ } from "./index--m7sf7hM.js";
import { s as S } from "./index-BAMK3x-S.js";
import { E as f, a1 as C, H as c, a, ad as m, I as o, a8 as s, p as r, a3 as D, m as i, G as k, J as I } from "./runtime-dom.esm-bundler-C71lIG0B.js";
var g = `
    .p-splitbutton {
        display: inline-flex;
        position: relative;
        border-radius: dt('splitbutton.border.radius');
    }

    .p-splitbutton-button.p-button {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
        border-inline-end: 0 none;
    }

    .p-splitbutton-button.p-button:focus-visible,
    .p-splitbutton-dropdown.p-button:focus-visible {
        z-index: 1;
    }

    .p-splitbutton-button.p-button:not(:disabled):hover,
    .p-splitbutton-button.p-button:not(:disabled):active {
        border-inline-end: 0 none;
    }

    .p-splitbutton-dropdown.p-button {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-splitbutton-fluid {
        display: flex;
    }

    .p-splitbutton-rounded .p-splitbutton-dropdown.p-button {
        border-start-end-radius: dt('splitbutton.rounded.border.radius');
        border-end-end-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-rounded .p-splitbutton-button.p-button {
        border-start-start-radius: dt('splitbutton.rounded.border.radius');
        border-end-start-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-raised {
        box-shadow: dt('splitbutton.raised.shadow');
    }
`, z = {
  root: function(t) {
    var d = t.instance, u = t.props;
    return ["p-splitbutton p-component", {
      "p-splitbutton-raised": u.raised,
      "p-splitbutton-rounded": u.rounded,
      "p-splitbutton-fluid": d.hasFluid
    }];
  },
  pcButton: "p-splitbutton-button",
  pcDropdown: "p-splitbutton-dropdown"
}, E = h.extend({
  name: "splitbutton",
  style: g,
  classes: z
}), V = {
  name: "BaseSplitButton",
  extends: S,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    model: {
      type: Array,
      default: null
    },
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    fluid: {
      type: Boolean,
      default: null
    },
    class: {
      type: null,
      default: null
    },
    style: {
      type: null,
      default: null
    },
    buttonProps: {
      type: null,
      default: null
    },
    menuButtonProps: {
      type: null,
      default: null
    },
    menuButtonIcon: {
      type: String,
      default: void 0
    },
    dropdownIcon: {
      type: String,
      default: void 0
    },
    severity: {
      type: String,
      default: null
    },
    raised: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    text: {
      type: Boolean,
      default: !1
    },
    outlined: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null
    },
    plain: {
      type: Boolean,
      default: !1
    }
  },
  style: E,
  provide: function() {
    return {
      $pcSplitButton: this,
      $parentInstance: this
    };
  }
}, Z = {
  name: "SplitButton",
  extends: V,
  inheritAttrs: !1,
  emits: ["click"],
  inject: {
    $pcFluid: {
      default: null
    }
  },
  data: function() {
    return {
      isExpanded: !1
    };
  },
  mounted: function() {
    var t = this;
    this.$watch("$refs.menu.visible", function(d) {
      t.isExpanded = d;
    });
  },
  methods: {
    onDropdownButtonClick: function(t) {
      t && t.preventDefault(), this.$refs.menu.toggle({
        currentTarget: this.$el,
        relatedTarget: this.$refs.button.$el
      }), this.isExpanded = this.$refs.menu.visible;
    },
    onDropdownKeydown: function(t) {
      (t.code === "ArrowDown" || t.code === "ArrowUp") && (this.onDropdownButtonClick(), t.preventDefault());
    },
    onDefaultButtonClick: function(t) {
      this.isExpanded && this.$refs.menu.hide(t), this.$emit("click", t);
    }
  },
  computed: {
    containerClass: function() {
      return [this.cx("root"), this.class];
    },
    hasFluid: function() {
      return B(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  },
  components: {
    PVSButton: v,
    PVSMenu: $,
    ChevronDownIcon: w
  }
}, T = ["data-p-severity"];
function F(n, t, d, u, p, l) {
  var b = f("PVSButton"), y = f("PVSMenu");
  return c(), C("div", i({
    class: l.containerClass,
    style: n.style
  }, n.ptmi("root"), {
    "data-p-severity": n.severity
  }), [a(b, i({
    type: "button",
    class: n.cx("pcButton"),
    label: n.label,
    disabled: n.disabled,
    severity: n.severity,
    text: n.text,
    icon: n.icon,
    outlined: n.outlined,
    size: n.size,
    fluid: n.fluid,
    "aria-label": n.label,
    onClick: l.onDefaultButtonClick
  }, n.buttonProps, {
    pt: n.ptm("pcButton"),
    unstyled: n.unstyled
  }), m({
    default: o(function() {
      return [s(n.$slots, "default")];
    }),
    _: 2
  }, [n.$slots.icon ? {
    name: "icon",
    fn: o(function(e) {
      return [s(n.$slots, "icon", {
        class: r(e.class)
      }, function() {
        return [D("span", i({
          class: [n.icon, e.class]
        }, n.ptm("pcButton").icon, {
          "data-pc-section": "buttonicon"
        }), null, 16)];
      })];
    }),
    key: "0"
  } : void 0]), 1040, ["class", "label", "disabled", "severity", "text", "icon", "outlined", "size", "fluid", "aria-label", "onClick", "pt", "unstyled"]), a(b, i({
    ref: "button",
    type: "button",
    class: n.cx("pcDropdown"),
    disabled: n.disabled,
    "aria-haspopup": "true",
    "aria-expanded": p.isExpanded,
    "aria-controls": p.isExpanded ? n.$id + "_overlay" : void 0,
    onClick: l.onDropdownButtonClick,
    onKeydown: l.onDropdownKeydown,
    severity: n.severity,
    text: n.text,
    outlined: n.outlined,
    size: n.size,
    unstyled: n.unstyled
  }, n.menuButtonProps, {
    pt: n.ptm("pcDropdown")
  }), {
    icon: o(function(e) {
      return [s(n.$slots, n.$slots.dropdownicon ? "dropdownicon" : "menubuttonicon", {
        class: r(e.class)
      }, function() {
        return [(c(), k(I(n.menuButtonIcon || n.dropdownIcon ? "span" : "ChevronDownIcon"), i({
          class: [n.dropdownIcon || n.menuButtonIcon, e.class]
        }, n.ptm("pcDropdown").icon, {
          "data-pc-section": "menubuttonicon"
        }), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["class", "disabled", "aria-expanded", "aria-controls", "onClick", "onKeydown", "severity", "text", "outlined", "size", "unstyled", "pt"]), a(y, {
    ref: "menu",
    id: n.$id + "_overlay",
    model: n.model,
    popup: !0,
    autoZIndex: n.autoZIndex,
    baseZIndex: n.baseZIndex,
    appendTo: n.appendTo,
    unstyled: n.unstyled,
    pt: n.ptm("pcMenu")
  }, m({
    _: 2
  }, [n.$slots.menuitemicon ? {
    name: "itemicon",
    fn: o(function(e) {
      return [s(n.$slots, "menuitemicon", {
        item: e.item,
        class: r(e.class)
      })];
    }),
    key: "0"
  } : void 0, n.$slots.item ? {
    name: "item",
    fn: o(function(e) {
      return [s(n.$slots, "item", {
        item: e.item,
        hasSubmenu: e.hasSubmenu,
        label: e.label,
        props: e.props
      })];
    }),
    key: "1"
  } : void 0]), 1032, ["id", "model", "autoZIndex", "baseZIndex", "appendTo", "unstyled", "pt"])], 16, T);
}
Z.render = F;
export {
  Z as s
};
