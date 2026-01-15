import { s as t } from "./index-YqnL2il-.js";
import { B as e } from "./main-BuXBcYFI.js";
import { a1 as o, H as s, a8 as r, m as d } from "./runtime-dom.esm-bundler-C71lIG0B.js";
var f = `
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`, m = {
  root: "p-iconfield"
}, u = e.extend({
  name: "iconfield",
  style: f,
  classes: m
}), h = {
  name: "BaseIconField",
  extends: t,
  style: u,
  provide: function() {
    return {
      $pcIconField: this,
      $parentInstance: this
    };
  }
}, $ = {
  name: "IconField",
  extends: h,
  inheritAttrs: !1
};
function g(n, l, a, p, c, i) {
  return s(), o("div", d({
    class: n.cx("root")
  }, n.ptmi("root")), [r(n.$slots, "default")], 16);
}
$.render = g;
var v = {
  root: "p-inputicon"
}, x = e.extend({
  name: "inputicon",
  classes: v
}), z = {
  name: "BaseInputIcon",
  extends: t,
  style: x,
  props: {
    class: null
  },
  provide: function() {
    return {
      $pcInputIcon: this,
      $parentInstance: this
    };
  }
}, I = {
  name: "InputIcon",
  extends: z,
  inheritAttrs: !1,
  computed: {
    containerClass: function() {
      return [this.cx("root"), this.class];
    }
  }
};
function y(n, l, a, p, c, i) {
  return s(), o("span", d({
    class: i.containerClass
  }, n.ptmi("root"), {
    "aria-hidden": "true"
  }), [r(n.$slots, "default")], 16);
}
I.render = y;
export {
  I as a,
  $ as s
};
