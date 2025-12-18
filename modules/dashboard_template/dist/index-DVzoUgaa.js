import { B as s, s as r } from "./main-BRMl0FA-.js";
import { V as t, H as a, I as o, m as i } from "./runtime-dom.esm-bundler-CEAeiVlj.js";
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
function c(e, u, m, $, f, v) {
  return a(), t("div", i({
    class: e.cx("root")
  }, e.ptmi("root")), [o(e.$slots, "default")], 16);
}
d.render = c;
export {
  d as s
};
