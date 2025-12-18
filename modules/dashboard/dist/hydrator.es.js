import { d as c, c as p } from "./runtime-dom.esm-bundler-CEAeiVlj.js";
const u = /* @__PURE__ */ c({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(n) {
    return (t, e) => null;
  }
}), d = async (n) => ({
  set: async (t, e) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const o = p(u, {
      _p: n,
      _$p: t,
      _$cb: e
    });
    await import("./main-DmGEeWOh.js").then((r) => r.aC);
    const a = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          e?.change({ _$p: t });
        }
      }
    }, s = document.getElementById(n.f.name("vue-root"));
    return o.mount(s), a;
  }
});
export {
  d as hydrator,
  d as index
};
