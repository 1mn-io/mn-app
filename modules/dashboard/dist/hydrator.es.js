const { defineComponent: s, createApp: p } = window.Vue;
const _ = /* @__PURE__ */ s({
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
    await (await import("./main-HoJjMwWR.js").then((r) => r.ay)).index(e);
    const a = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
        }
      }
    }, c = document.getElementById(n.f.name("vue-root"));
    return o.mount(c), a;
  }
});
export {
  i as hydrator,
  i as index
};
