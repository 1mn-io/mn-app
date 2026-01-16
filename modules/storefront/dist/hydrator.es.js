import { d as c, c as p } from "./runtime-dom.esm-bundler-DX3hrXra.js";
const _ = /* @__PURE__ */ c({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(n) {
    return (t, e) => null;
  }
}), i = async (n) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const e = {
      _p: n,
      _$p: t
    }, o = p(_, e);
    await (await import("./main-C5JrDKuQ.js").then((r) => r.m)).index(e);
    const a = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
        }
      }
    }, s = document.getElementById(n.f.name("vue-root"));
    return o.mount(s), a;
  }
});
export {
  i as hydrator,
  i as index
};
