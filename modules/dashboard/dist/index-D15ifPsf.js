import { s as t } from "./index-YqnL2il-.js";
import { B as n } from "./main-BuXBcYFI.js";
import { a1 as s, H as l, a3 as a, a8 as o, m as e } from "./runtime-dom.esm-bundler-C71lIG0B.js";
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
}, i = n.extend({
  name: "toolbar",
  style: d,
  classes: p
}), b = {
  name: "BaseToolbar",
  extends: t,
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
function y(r, u, v, f, $, g) {
  return l(), s("div", e({
    class: r.cx("root"),
    role: "toolbar",
    "aria-labelledby": r.ariaLabelledby
  }, r.ptmi("root")), [a("div", e({
    class: r.cx("start")
  }, r.ptm("start")), [o(r.$slots, "start")], 16), a("div", e({
    class: r.cx("center")
  }, r.ptm("center")), [o(r.$slots, "center")], 16), a("div", e({
    class: r.cx("end")
  }, r.ptm("end")), [o(r.$slots, "end")], 16)], 16, m);
}
c.render = y;
export {
  c as s
};
