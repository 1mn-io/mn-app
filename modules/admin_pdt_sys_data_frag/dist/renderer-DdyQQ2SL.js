import "./style-cvuBsSb1.js";
const { Comment: e, Fragment: t, Static: n, Text: r, createApp: i, createElementBlock: a, createSSRApp: o, createVNode: s, defineComponent: c, initDirectivesForSSR: l, mergeProps: u, openBlock: d, ssrContextKey: f, ssrUtils: p, warn: m } = window.Vue;
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function h(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var g = () => {}, ee = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), _ = Object.prototype.hasOwnProperty, te = (e, t) => _.call(e, t), v = Array.isArray, y = (e) => typeof e == "function", b = (e) => typeof e == "string", x = (e) => typeof e == "object" && !!e, S = (e) => (x(e) || y(e)) && y(e.then) && y(e.catch), C = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ne = /\B([A-Z])/g, re = C((e) => e.replace(ne, "-$1").toLowerCase()), ie, ae = () => ie ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function w(e) {
	if (v(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = b(r) ? le(r) : w(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (b(e) || x(e)) return e;
}
var oe = /;(?![^(]*\))/g, se = /:([^]+)/, ce = /\/\*[^]*?\*\//g;
function le(e) {
	let t = {};
	return e.replace(ce, "").split(oe).forEach((e) => {
		if (e) {
			let n = e.split(se);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function ue(e) {
	if (!e) return "";
	if (b(e)) return e;
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (b(r) || typeof r == "number") {
			let e = n.startsWith("--") ? n : re(n);
			t += `${e}:${r};`;
		}
	}
	return t;
}
function T(e) {
	let t = "";
	if (b(e)) t = e;
	else if (v(e)) for (let n = 0; n < e.length; n++) {
		let r = T(e[n]);
		r && (t += r + " ");
	}
	else if (x(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var de = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", fe = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", E = /* @__PURE__ */ h(de), D = /* @__PURE__ */ h(fe), O = /* @__PURE__ */ h("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
function k(e) {
	return !!e || e === "";
}
var A = /[>/="'\u0009\u000a\u000c\u0020]/, j = {};
function M(e) {
	if (j.hasOwnProperty(e)) return j[e];
	let t = A.test(e);
	return t && console.error(`unsafe attribute name: ${e}`), j[e] = !t;
}
var N = {
	acceptCharset: "accept-charset",
	className: "class",
	htmlFor: "for",
	httpEquiv: "http-equiv"
};
function P(e) {
	if (e == null) return !1;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean";
}
var F = /["'&<>]/;
function I(e) {
	let t = "" + e, n = F.exec(t);
	if (!n) return t;
	let r = "", i, a, o = 0;
	for (a = n.index; a < t.length; a++) {
		switch (t.charCodeAt(a)) {
			case 34:
				i = "&quot;";
				break;
			case 38:
				i = "&amp;";
				break;
			case 39:
				i = "&#39;";
				break;
			case 60:
				i = "&lt;";
				break;
			case 62:
				i = "&gt;";
				break;
			default: continue;
		}
		o !== a && (r += t.slice(o, a)), o = a + 1, r += i;
	}
	return o === a ? r : r + t.slice(o, a);
}
var L = /^-?>|<!--|-->|--!>|<!-$/g;
function R(e) {
	return e.replace(L, "");
}
function z(e) {
	return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
//#endregion
//#region node_modules/@vue/server-renderer/dist/server-renderer.esm-bundler.js
var B = /* @__PURE__ */ h(",key,ref,innerHTML,textContent,ref_key,ref_for");
function V(e, t) {
	let n = "";
	for (let r in e) {
		if (B(r) || ee(r) || t === "textarea" && r === "value" || r.startsWith(".")) continue;
		let i = e[r];
		r.startsWith("^") && (r = r.slice(1)), r === "class" ? n += ` class="${me(i)}"` : r === "style" ? n += ` style="${he(i)}"` : r === "className" ? i != null && (n += ` class="${I(String(i))}"`) : n += pe(r, i, t);
	}
	return n;
}
function pe(e, t, n) {
	if (!P(t)) return "";
	let r = n && (n.indexOf("-") > 0 || E(n)) ? e : N[e] || e.toLowerCase();
	return O(r) ? k(t) ? ` ${r}` : "" : M(r) ? t === "" ? ` ${r}` : ` ${r}="${I(t)}"` : (console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r}`), "");
}
function me(e) {
	return I(T(e));
}
function he(e) {
	return e ? b(e) ? I(e) : I(ue(w(ge(e)))) : "";
}
function ge(e) {
	if (!v(e) && x(e)) {
		let t = {};
		for (let n in e) n.startsWith(":--") ? t[n.slice(1)] = z(e[n]) : t[n] = e[n];
		return t;
	}
	return e;
}
var { ensureValidVNode: _e } = p;
function ve(e, t, n, r, i) {
	e("<!--teleport start-->");
	let a = i.appContext.provides[f], o = a.__teleportBuffers ||= {}, s = o[n] || (o[n] = []), c = s.length, l;
	if (r) t(e), l = "<!--teleport start anchor--><!--teleport anchor-->";
	else {
		let { getBuffer: e, push: n } = W();
		n("<!--teleport start anchor-->"), t(n), n("<!--teleport anchor-->"), l = e();
	}
	s.splice(c, 0, l), (S(l) || v(l) && l.hasAsync) && (s.hasAsync = !0), e("<!--teleport end-->");
}
{
	let e = ae(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	t("__VUE_INSTANCE_SETTERS__", (e) => e), t("__VUE_SSR_SETTERS__", (e) => e);
}
function ye(e, t) {
	throw Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.");
}
var { createComponentInstance: be, setCurrentRenderingInstance: H, setupComponent: xe, renderComponentRoot: U, normalizeVNode: Se, pushWarningContext: Ce, popWarningContext: we } = p;
function W() {
	let e = !1, t = [];
	return {
		getBuffer() {
			return t;
		},
		push(n) {
			let r = b(n);
			if (e && r) {
				t[t.length - 1] += n;
				return;
			}
			t.push(n), e = r, (S(n) || v(n) && n.hasAsync) && (t.hasAsync = !0);
		}
	};
}
function G(e, t = null, n) {
	let r = e.component = be(e, t, null), i = xe(r, !0), a = S(i), o = r.sp;
	return a || o ? Promise.resolve(i).then(() => {
		if (a && (o = r.sp), o) return Promise.all(o.map((e) => e.call(r.proxy)));
	}).catch(g).then(() => K(r, n)) : K(r, n);
}
function K(e, t) {
	let n = e.type, { getBuffer: r, push: i } = W();
	if (y(n)) {
		let r = U(e);
		if (!n.props) for (let t in e.attrs) t.startsWith("data-v-") && ((r.props ||= {})[t] = "");
		q(i, e.subTree = r, e, t);
	} else {
		(!e.render || e.render === g) && !e.ssrRender && !n.ssrRender && b(n.template) && (n.ssrRender = ye(n.template));
		let r = e.ssrRender || n.ssrRender;
		if (r) {
			let n = e.inheritAttrs === !1 ? void 0 : e.attrs, a = !1, o = e;
			for (;;) {
				let e = o.vnode.scopeId;
				e && (a ||= (n = { ...n }, !0), n[e] = "");
				let t = o.parent;
				if (t && t.subTree && t.subTree === o.vnode) o = t;
				else break;
			}
			if (t) {
				a || (n = { ...n });
				let e = t.trim().split(" ");
				for (let t = 0; t < e.length; t++) n[e[t]] = "";
			}
			let s = H(e);
			try {
				r(e.proxy, i, e, n, e.props, e.setupState, e.data, e.ctx);
			} finally {
				H(s);
			}
		} else e.render && e.render !== g ? q(i, e.subTree = U(e), e, t) : (m(`Component ${n.name || n.__file || "<Anonymous>"} is missing template or render function.`), i("<!---->"));
	}
	return r();
}
function q(i, a, o, s) {
	let { type: c, shapeFlag: l, children: u, dirs: d, props: f } = a;
	switch (d && (a.props = Ee(a, f, d)), c) {
		case r:
			i(I(u));
			break;
		case e:
			i(u ? `<!--${R(u)}-->` : "<!---->");
			break;
		case n:
			i(u);
			break;
		case t:
			a.slotScopeIds && (s = (s ? s + " " : "") + a.slotScopeIds.join(" ")), i("<!--[-->"), J(i, u, o, s), i("<!--]-->");
			break;
		default: l & 1 ? Te(i, a, o, s) : l & 6 ? i(G(a, o, s)) : l & 64 ? De(i, a, o, s) : l & 128 ? q(i, a.ssContent, o, s) : m("[@vue/server-renderer] Invalid VNode type:", c, `(${typeof c})`);
	}
}
function J(e, t, n, r) {
	for (let i = 0; i < t.length; i++) q(e, Se(t[i]), n, r);
}
function Te(e, t, n, r) {
	let i = t.type, { props: a, children: o, shapeFlag: s, scopeId: c } = t, l = `<${i}`;
	a && (l += V(a, i));
	let u = [], d = (e) => {
		e && (!a || !te(a, e)) && !u.includes(e) && (l += ` ${e}`, u.push(e));
	};
	c && d(c);
	let f = n, p = t;
	for (; f && p === f.subTree;) p = f.vnode, p.scopeId && d(p.scopeId), f = f.parent;
	if (r) {
		let e = r.trim().split(" ");
		for (let t = 0; t < e.length; t++) d(e[t]);
	}
	if (e(l + ">"), !D(i)) {
		let t = !1;
		a && (a.innerHTML ? (t = !0, e(a.innerHTML)) : a.textContent ? (t = !0, e(I(a.textContent))) : i === "textarea" && a.value && (t = !0, e(I(a.value)))), t || (s & 8 ? e(I(o)) : s & 16 && J(e, o, n, r)), e(`</${i}>`);
	}
}
function Ee(e, t, n) {
	let r = [];
	for (let t = 0; t < n.length; t++) {
		let i = n[t], { dir: { getSSRProps: a } } = i;
		if (a) {
			let t = a(i, e);
			t && r.push(t);
		}
	}
	return u(t || {}, ...r);
}
function De(e, t, n, r) {
	let i = t.props && t.props.to, a = t.props && t.props.disabled;
	if (!i) return a || m("[@vue/server-renderer] Teleport is missing target prop."), [];
	if (!b(i)) return m("[@vue/server-renderer] Teleport target must be a query selector string."), [];
	ve(e, (e) => {
		J(e, t.children, n, r);
	}, i, a || a === "", n);
}
var { isVNode: Y } = p;
function X(e, t, n) {
	if (!e.hasAsync) return t + Q(e);
	let r = t;
	for (let t = n; t < e.length; t += 1) {
		let n = e[t];
		if (b(n)) {
			r += n;
			continue;
		}
		if (S(n)) return n.then((n) => (e[t] = n, X(e, r, t)));
		let i = X(n, r, 0);
		if (S(i)) return i.then((n) => (e[t] = n, X(e, "", t)));
		r = i;
	}
	return r;
}
function Z(e) {
	return X(e, "", 0);
}
function Q(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		b(r) ? t += r : t += Q(r);
	}
	return t;
}
async function $(e, t = {}) {
	if (Y(e)) return $(i({ render: () => e }), t);
	let n = s(e._component, e._props);
	n.appContext = e._context, e.provide(f, t);
	let r = await Z(await G(n));
	if (await Oe(t), t.__watcherHandles) for (let e of t.__watcherHandles) e();
	return r;
}
async function Oe(e) {
	if (e.__teleportBuffers) {
		e.teleports = e.teleports || {};
		for (let t in e.__teleportBuffers) e.teleports[t] = await Z(e.__teleportBuffers[t]);
	}
}
var { isVNode: ke } = p;
l();
//#endregion
//#region src/renderer/index.vue?vue&type=script&setup=true&lang.ts
var Ae = ["id"], je = /* @__PURE__ */ c({
	__name: "index",
	props: {
		_p: {},
		_pp: {}
	},
	setup(e) {
		return (t, n) => (d(), a("div", {
			id: e._p.f.name("root"),
			class: "box"
		}, null, 8, Ae));
	}
}), Me = async (e) => ({ set: async (t) => (console.log(`--renderer [${t.data.curr.type}]`), {
	r: `
                 <div>
                    ${await $(o(je, {
		_p: e,
		_pp: t
	}))}
                    <div id="${e.f.name("vue-root")}"></div>
                  </div>
                `,
	style: (() => {
		let t = "";
		return t = `
                .${e.f.name("text")} {
                   background: transparent;
                }
                `, t;
	})()
}) });
//#endregion
export { Me as t };
