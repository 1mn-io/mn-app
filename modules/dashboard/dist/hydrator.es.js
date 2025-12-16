import { defineComponent as p, createApp as a } from "vue";
const u = /* @__PURE__ */ p({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(t) {
    return (n, e) => null;
  }
}), l = async (t) => ({
  set: async (n, e) => {
    console.log(`--hydrator [${n.data.curr.type}]`);
    const r = a(u, {
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
    }, c = document.getElementById(t.f.name("vue-root"));
    return r.mount(c), o;
  }
});
export {
  l as hydrator,
  l as index
};
