import { d as a, c as p } from "./vue.runtime.esm-bundler-xjh7zPY5.js";
const u = /* @__PURE__ */ a({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(t) {
    return (n, e) => null;
  }
}), d = async (t) => ({
  set: async (n, e) => {
    console.log(`--hydrator [${n.data.curr.type}]`);
    const r = p(u, {
      _p: t,
      _$p: n,
      _$cb: e
    }), o = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          e?.change({ _$p: n });
        }
      }
    }, s = document.getElementById(t.f.name("vue-root"));
    return r.mount(s), o;
  }
});
export {
  d as hydrator,
  d as index
};
