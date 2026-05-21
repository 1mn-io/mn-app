import { s as r } from "./index-lKnV4MRg.js";
import { B as t } from "./main-HoJjMwWR.js";
const { createElementBlock: s, openBlock: o, mergeProps: a, renderSlot: i } = window.Vue;
var n = {
  root: "p-fluid"
}, l = t.extend({
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
  return o(), s("div", a({
    class: e.cx("root")
  }, e.ptmi("root")), [i(e.$slots, "default")], 16);
}
d.render = c;
export {
  d as s
};
