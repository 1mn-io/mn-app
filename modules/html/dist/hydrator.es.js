//#region src/hydrator/index.ts
var e = async (e) => ({ set: async (t) => (console.log(`--hydrator [${t.data.curr.type}]`), (async (n) => {
	e.my.emitter = e.f.new_emitter(), e.my.emitter.on("msg", async (e) => {
		console.log("_p.my.emitter.on", e);
	}), await e.my.emitter.emit("msg", {
		type: "change",
		_p: e,
		_pp: t
	}), e.f.listen("msg", async (e) => {
		console.log("_p.f.listen", e);
	}), setTimeout(async () => {
		await e.f.call("msg", {
			type: "change",
			_p: e,
			_pp: t
		});
	}, 500), e.f.call("msg", {
		type: "add",
		_p: e,
		_pp: t,
		custom: {},
		$d: t.data.curr.data,
		el: n
	});
})(document.getElementById(e.f.name("root"))), {
	r: "",
	style: "",
	evt: { change: () => {
		e.f.call("msg", {
			type: "change",
			_p: e,
			_pp: t,
			custom: {}
		});
	} }
}) });
//#endregion
export { e as hydrator, e as index };
