const { createElementBlock: o, openBlock: r, createElementVNode: e } = window.Vue;
import { _ as s } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const c = {}, n = { className: "card" };
function a(m, t) {
  return r(), o("div", n, [...t[0] || (t[0] = [
    e("div", { class: "font-semibold text-xl mb-4" }, "Empty Page", -1),
    e("p", null, "Use this page to start from scratch and place your custom content.", -1)
  ])]);
}
const p = /* @__PURE__ */ s(c, [["render", a]]);
export {
  p as default
};
