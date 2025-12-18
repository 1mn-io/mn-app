import { B as t, s as n } from "./main-k5gsV9f8.js";
import { V as s, H as l, W as a, I as o, m as r } from "./runtime-dom.esm-bundler-CEAeiVlj.js";
var d = `
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`, p = {
  root: "p-toolbar p-component",
  start: "p-toolbar-start",
  center: "p-toolbar-center",
  end: "p-toolbar-end"
}, i = t.extend({
  name: "toolbar",
  style: d,
  classes: p
}), b = {
  name: "BaseToolbar",
  extends: n,
  props: {
    ariaLabelledby: {
      type: String,
      default: null
    }
  },
  style: i,
  provide: function() {
    return {
      $pcToolbar: this,
      $parentInstance: this
    };
  }
}, c = {
  name: "Toolbar",
  extends: b,
  inheritAttrs: !1
}, m = ["aria-labelledby"];
function y(e, u, v, $, f, g) {
  return l(), s("div", r({
    class: e.cx("root"),
    role: "toolbar",
    "aria-labelledby": e.ariaLabelledby
  }, e.ptmi("root")), [a("div", r({
    class: e.cx("start")
  }, e.ptm("start")), [o(e.$slots, "start")], 16), a("div", r({
    class: e.cx("center")
  }, e.ptm("center")), [o(e.$slots, "center")], 16), a("div", r({
    class: e.cx("end")
  }, e.ptm("end")), [o(e.$slots, "end")], 16)], 16, m);
}
c.render = y;
export {
  c as s
};
