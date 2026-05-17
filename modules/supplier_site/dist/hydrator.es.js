import { d as r, c as s } from "./runtime-dom.esm-bundler-DTh02eJ7.js";
const l = /* @__PURE__ */ r({
  __name: "index",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    return (async () => (t._p.my.emitter = t._p.f.new_emitter(), t._p.my.emitter.on("msg", async (e) => {
      console.log("_p.my.emitter.on", e);
    }), await t._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: t._p,
      _pp: t._pp
    }), t._p.f.listen("msg", async (e) => {
      console.log("_p.f.listen", e);
    }), setTimeout(async () => {
      await t._p.f.call("msg", {
        type: "on:change",
        _p: t._p,
        _pp: t._pp
      });
    }, 500)))(), (e, n) => null;
  }
}), y = async (t) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const a = s(l, {
      _p: t,
      _pp: e
    });
    await import("./main-B3409jZ1.js");
    const c = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          t.f.call("msg", {
            type: "change",
            _p: t,
            _pp: e,
            custom: {}
          });
        }
      }
    }, m = document.getElementById(t.f.name("vue-root"));
    return a.mount(m), c;
  }
});
export {
  y as hydrator,
  y as index
};
