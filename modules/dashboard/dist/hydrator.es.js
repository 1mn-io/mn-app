import { d as c, c as p } from "./runtime-dom.esm-bundler-C71lIG0B.js";
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
    await (await import("./main-BQAWsb7p.js").then((r) => r.ay)).index(e);
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
