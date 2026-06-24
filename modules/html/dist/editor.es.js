import { hydrator as e } from "./hydrator.es.js";
import { index as t } from "./renderer.es.js";
//#region src/shared/util/helper/index.ts
var n = async () => ({ f: { name: (e) => `${e.name}${e.id}` } }), r = () => ({ set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
	let t = Math.random() * 16 | 0;
	return (e == "x" ? t : t & 3 | 8).toString(16);
}) }), i = async (i) => {
	let a = await n();
	return { set: async (n) => {
		let o = { r: "" }, s = n.data.curr || {
			id: r().set(),
			type: "text",
			data: { data: "" }
		}, c = await t({
			my: {},
			custom: {},
			f: {
				...i.f,
				name: (e) => a.f.name({
					id: s.id,
					name: e
				})
			}
		}), l = await e({
			my: {},
			custom: {},
			f: {
				...i.f,
				name: (e) => a.f.name({
					id: s.id,
					name: e
				})
			}
		}), u = await c.set({ data: { curr: s } });
		return setTimeout(async () => {
			let e = await l.set({ data: { curr: s } });
			((t) => {
				let n = document.createElement("style");
				n.innerHTML = `${e.style}`, t.appendChild(n);
			})(document.head);
		}, 200), o.r = u.r, ((e) => {
			let t = document.createElement("style");
			t.innerHTML = `${u.style}`, e.appendChild(t);
		})(document.head), o;
	} };
};
//#endregion
export { i as editor, i as index };
