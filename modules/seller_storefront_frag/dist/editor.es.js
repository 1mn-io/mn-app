import { t as e } from "./hydrator-CLDAoMox.js";
import { t } from "./renderer-OmKG7QGn.js";
//#region src/shared/util/helper/index.ts
var n = async () => ({ f: { name: (e) => `${e.name}${e.id}` } }), r = async (r) => {
	let i = await n();
	return { set: async (n) => {
		let a = { r: "" }, o = n.data.curr || {
			id: r.f.uuid(),
			type: "text",
			data: { data: "" }
		}, s = await t({
			my: {},
			custom: {},
			f: {
				...r.f,
				name: (e) => i.f.name({
					id: o.id,
					name: e
				})
			}
		}), c = await e({
			my: {},
			custom: {},
			f: {
				...r.f,
				name: (e) => i.f.name({
					id: o.id,
					name: e
				})
			}
		}), l = await s.set({ data: { curr: o } });
		return setTimeout(async () => {
			let e = await c.set({ data: { curr: o } });
			((t) => {
				let n = document.createElement("style");
				n.innerHTML = `${e.style}`, t.appendChild(n);
			})(document.head);
		}, 200), a.r = l.r, ((e) => {
			let t = document.createElement("style");
			t.innerHTML = `${l.style}`, e.appendChild(t);
		})(document.head), a;
	} };
};
//#endregion
export { r as editor, r as index };
