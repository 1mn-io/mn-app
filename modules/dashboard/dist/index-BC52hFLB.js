import { s as r } from "./index-YqnL2il-.js";
import { B as s } from "./main-BuXBcYFI.js";
import { a1 as t, H as a, a8 as o, m as i } from "./runtime-dom.esm-bundler-C71lIG0B.js";
var n = {
  root: "p-fluid"
}, l = s.extend({
  name: "fluid",
  classes: n
}), p = {
  name: "BaseFluid",
  extends: r,
  style: l,
  provide: function() {
    return {
      $pcFluid: this,
      $parentInstance: this
    };
  }
}, d = {
  name: "Fluid",
  extends: p,
  inheritAttrs: !1
};
function c(e, m, u, f, $, v) {
  return a(), t("div", i({
    class: e.cx("root")
  }, e.ptmi("root")), [o(e.$slots, "default")], 16);
}
d.render = c;
export {
  d as s
};
