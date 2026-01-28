const c = async (t) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const s = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          t.f.call("msg", {
            type: "change",
            _p: t,
            _$p: e,
            custom: {}
          });
        }
      }
    }, r = document.getElementById(t.f.name("root"));
    return (async (n) => {
      t.my.emitter = t.f.new_emitter(), t.my.emitter.on("msg", async (a) => {
        console.log("_p.my.emitter.on", a);
      }), await t.my.emitter.emit("msg", {
        type: "change",
        _p: t,
        _$p: e
      }), t.f.listen("msg", async (a) => {
        console.log("_p.f.listen", a);
      }), setTimeout(async () => {
        await t.f.call("msg", {
          type: "change",
          _p: t,
          _$p: e
        });
      }, 500), t.f.call("msg", {
        type: "add",
        _p: t,
        _$p: e,
        custom: {},
        //set..
        $d: e.data.curr.data,
        el: n
      });
    })(r), s;
  }
});
export {
  c as hydrator,
  c as index
};
