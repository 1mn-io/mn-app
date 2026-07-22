import "./style-BB7kB583.js";
const { createElementBlock: e, createSSRApp: t, defineComponent: n, openBlock: r } = window.Vue;
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function i(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var a = {}, o = [], s = () => {}, c = () => !1, l = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), u = (e) => e.startsWith("onUpdate:"), d = Object.assign, f = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, p = Object.prototype.hasOwnProperty, m = (e, t) => p.call(e, t), h = Array.isArray, g = (e) => ee(e) === "[object Map]", _ = (e) => ee(e) === "[object Set]", v = (e) => ee(e) === "[object Date]", y = (e) => typeof e == "function", b = (e) => typeof e == "string", x = (e) => typeof e == "symbol", S = (e) => typeof e == "object" && !!e, C = (e) => (S(e) || y(e)) && y(e.then) && y(e.catch), w = Object.prototype.toString, ee = (e) => w.call(e), te = (e) => ee(e).slice(8, -1), ne = (e) => ee(e) === "[object Object]", re = (e) => b(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ie = /* @__PURE__ */ i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), T = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ae = /-\w/g, E = T((e) => e.replace(ae, (e) => e.slice(1).toUpperCase())), oe = /\B([A-Z])/g, D = T((e) => e.replace(oe, "-$1").toLowerCase()), O = T((e) => e.charAt(0).toUpperCase() + e.slice(1)), se = T((e) => e ? `on${O(e)}` : ""), k = (e, t) => !Object.is(e, t), ce = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, le = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ue = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, de, fe = () => de ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function pe(e) {
	if (h(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = b(r) ? _e(r) : pe(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (b(e) || S(e)) return e;
}
var me = /;(?![^(]*\))/g, he = /:([^]+)/, ge = /\/\*[^]*?\*\//g;
function _e(e) {
	let t = {};
	return e.replace(ge, "").split(me).forEach((e) => {
		if (e) {
			let n = e.split(he);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function ve(e) {
	if (!e) return "";
	if (b(e)) return e;
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (b(r) || typeof r == "number") {
			let e = n.startsWith("--") ? n : D(n);
			t += `${e}:${r};`;
		}
	}
	return t;
}
function ye(e) {
	let t = "";
	if (b(e)) t = e;
	else if (h(e)) for (let n = 0; n < e.length; n++) {
		let r = ye(e[n]);
		r && (t += r + " ");
	}
	else if (S(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var be = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", xe = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Se = /* @__PURE__ */ i(be), Ce = /* @__PURE__ */ i(xe), we = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Te = /* @__PURE__ */ i(we), Ee = /* @__PURE__ */ i(we + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
function De(e) {
	return !!e || e === "";
}
var Oe = /[>/="'\u0009\u000a\u000c\u0020]/, ke = {};
function Ae(e) {
	if (ke.hasOwnProperty(e)) return ke[e];
	let t = Oe.test(e);
	return t && console.error(`unsafe attribute name: ${e}`), ke[e] = !t;
}
var je = {
	acceptCharset: "accept-charset",
	className: "class",
	htmlFor: "for",
	httpEquiv: "http-equiv"
};
function Me(e) {
	if (e == null) return !1;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean";
}
var Ne = /["'&<>]/;
function A(e) {
	let t = "" + e, n = Ne.exec(t);
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
var Pe = /^(?:-?>)+|<!--|-->|--!>|<!-$/g;
function Fe(e) {
	let t;
	do
		t = e, e = e.replace(Pe, "");
	while (e !== t);
	return e;
}
function Ie(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = j(e[r], t[r]);
	return n;
}
function j(e, t) {
	if (e === t) return !0;
	let n = v(e), r = v(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = x(e), r = x(t), n || r) return e === t;
	if (n = h(e), r = h(t), n || r) return n && r ? Ie(e, t) : !1;
	if (n = S(e), r = S(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !j(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function Le(e, t) {
	return e.findIndex((e) => j(e, t));
}
function Re(e) {
	return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
//#endregion
//#region node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var M, ze = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && M && (M.active ? (this.parent = M, this.index = (M.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = M;
			try {
				return M = this, e();
			} finally {
				M = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = M, M = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (M === this) M = this.prevScope;
			else {
				let e = M;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Be() {
	return M;
}
var N, Ve = /* @__PURE__ */ new WeakSet(), He = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, M && (M.active ? M.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ve.has(this) && (Ve.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ke(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, nt(this), Ye(this);
		let e = N, t = P;
		N = this, P = !0;
		try {
			return this.fn();
		} finally {
			Xe(this), N = e, P = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) $e(e);
			this.deps = this.depsTail = void 0, nt(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ve.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ze(this) && this.run();
	}
	get dirty() {
		return Ze(this);
	}
}, Ue = 0, We, Ge;
function Ke(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ge, Ge = e;
		return;
	}
	e.next = We, We = e;
}
function qe() {
	Ue++;
}
function Je() {
	if (--Ue > 0) return;
	if (Ge) {
		let e = Ge;
		for (Ge = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; We;) {
		let t = We;
		for (We = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Ye(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Xe(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), $e(r), et(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ze(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Qe(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Qe(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === rt) || (e.globalVersion = rt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ze(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = N, r = P;
	N = e, P = !0;
	try {
		Ye(e);
		let n = e.fn(e._value);
		(t.version === 0 || k(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		N = n, P = r, Xe(e), e.flags &= -3;
	}
}
function $e(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) $e(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function et(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var P = !0, tt = [];
function F() {
	tt.push(P), P = !1;
}
function I() {
	let e = tt.pop();
	P = e === void 0 || e;
}
function nt(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = N;
		N = void 0;
		try {
			t();
		} finally {
			N = e;
		}
	}
}
var rt = 0, it = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, at = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!N || !P || N === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== N) t = this.activeLink = new it(N, this), N.deps ? (t.prevDep = N.depsTail, N.depsTail.nextDep = t, N.depsTail = t) : N.deps = N.depsTail = t, ot(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = N.depsTail, t.nextDep = void 0, N.depsTail.nextDep = t, N.depsTail = t, N.deps === t && (N.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, rt++, this.notify(e);
	}
	notify(e) {
		qe();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Je();
		}
	}
};
function ot(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) ot(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var st = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ Symbol(""), lt = /* @__PURE__ */ Symbol(""), ut = /* @__PURE__ */ Symbol("");
function L(e, t, n) {
	if (P && N) {
		let t = st.get(e);
		t || st.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new at()), r.map = t, r.key = n), r.track();
	}
}
function dt(e, t, n, r, i, a) {
	let o = st.get(e);
	if (!o) {
		rt++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (qe(), t === "clear") o.forEach(s);
	else {
		let i = h(e), a = i && re(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ut || !x(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ut)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(ct)), g(e) && s(o.get(lt)));
				break;
			case "delete":
				i || (s(o.get(ct)), g(e) && s(o.get(lt)));
				break;
			case "set":
				g(e) && s(o.get(ct));
				break;
		}
	}
	Je();
}
function ft(e) {
	let t = /* @__PURE__ */ B(e);
	return t === e ? t : (L(t, "iterate", ut), /* @__PURE__ */ z(e) ? t : t.map(Qt));
}
function pt(e) {
	return L(e = /* @__PURE__ */ B(e), "iterate", ut), e;
}
function R(e, t) {
	return /* @__PURE__ */ Yt(e) ? $t(/* @__PURE__ */ Jt(e) ? Qt(t) : t) : Qt(t);
}
var mt = {
	__proto__: null,
	[Symbol.iterator]() {
		return ht(this, Symbol.iterator, (e) => R(this, e));
	},
	concat(...e) {
		return ft(this).concat(...e.map((e) => h(e) ? ft(e) : e));
	},
	entries() {
		return ht(this, "entries", (e) => (e[1] = R(this, e[1]), e));
	},
	every(e, t) {
		return _t(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return _t(this, "filter", e, t, (e) => e.map((e) => R(this, e)), arguments);
	},
	find(e, t) {
		return _t(this, "find", e, t, (e) => R(this, e), arguments);
	},
	findIndex(e, t) {
		return _t(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return _t(this, "findLast", e, t, (e) => R(this, e), arguments);
	},
	findLastIndex(e, t) {
		return _t(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return _t(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return yt(this, "includes", e);
	},
	indexOf(...e) {
		return yt(this, "indexOf", e);
	},
	join(e) {
		return ft(this).join(e);
	},
	lastIndexOf(...e) {
		return yt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return _t(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return bt(this, "pop");
	},
	push(...e) {
		return bt(this, "push", e);
	},
	reduce(e, ...t) {
		return vt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return vt(this, "reduceRight", e, t);
	},
	shift() {
		return bt(this, "shift");
	},
	some(e, t) {
		return _t(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return bt(this, "splice", e);
	},
	toReversed() {
		return ft(this).toReversed();
	},
	toSorted(e) {
		return ft(this).toSorted(e);
	},
	toSpliced(...e) {
		return ft(this).toSpliced(...e);
	},
	unshift(...e) {
		return bt(this, "unshift", e);
	},
	values() {
		return ht(this, "values", (e) => R(this, e));
	}
};
function ht(e, t, n) {
	let r = pt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ z(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var gt = Array.prototype;
function _t(e, t, n, r, i, a) {
	let o = pt(e), s = o !== e && !/* @__PURE__ */ z(e), c = o[t];
	if (c !== gt[t]) {
		let t = c.apply(e, a);
		return s ? Qt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, R(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function vt(e, t, n, r) {
	let i = pt(e), a = i !== e && !/* @__PURE__ */ z(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = R(e, t)), n.call(this, t, R(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? R(e, c) : c;
}
function yt(e, t, n) {
	let r = /* @__PURE__ */ B(e);
	L(r, "iterate", ut);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Xt(n[0]) ? (n[0] = /* @__PURE__ */ B(n[0]), r[t](...n)) : i;
}
function bt(e, t, n = []) {
	F(), qe();
	let r = (/* @__PURE__ */ B(e))[t].apply(e, n);
	return Je(), I(), r;
}
var xt = /* @__PURE__ */ i("__proto__,__v_isRef,__isVue"), St = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(x));
function Ct(e) {
	x(e) || (e = String(e));
	let t = /* @__PURE__ */ B(this);
	return L(t, "has", e), t.hasOwnProperty(e);
}
var wt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Ht : Vt : i ? Bt : zt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = h(e);
		if (!r) {
			let e;
			if (a && (e = mt[t])) return e;
			if (t === "hasOwnProperty") return Ct;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ V(e) ? e : n);
		if ((x(t) ? St.has(t) : xt(t)) || (r || L(e, "get", t), i)) return o;
		if (/* @__PURE__ */ V(o)) {
			let e = a && re(t) ? o : o.value;
			return r && S(e) ? /* @__PURE__ */ Kt(e) : e;
		}
		return S(o) ? r ? /* @__PURE__ */ Kt(o) : /* @__PURE__ */ Wt(o) : o;
	}
}, Tt = class extends wt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = h(e) && re(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Yt(i);
			if (!/* @__PURE__ */ z(n) && !/* @__PURE__ */ Yt(n) && (i = /* @__PURE__ */ B(i), n = /* @__PURE__ */ B(n)), !a && /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : m(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ V(e) ? e : r);
		return e === /* @__PURE__ */ B(r) && s && (o ? k(n, i) && dt(e, "set", t, n, i) : dt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = m(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && dt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!x(t) || !St.has(t)) && L(e, "has", t), n;
	}
	ownKeys(e) {
		return L(e, "iterate", h(e) ? "length" : ct), Reflect.ownKeys(e);
	}
}, Et = class extends wt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Dt = /* @__PURE__ */ new Tt(), Ot = /* @__PURE__ */ new Et(), kt = /* @__PURE__ */ new Tt(!0), At = (e) => e, jt = (e) => Reflect.getPrototypeOf(e);
function Mt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ B(i), o = g(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? At : t ? $t : Qt;
		return !t && L(a, "iterate", c ? lt : ct), d(Object.create(l), { next() {
			let { value: e, done: t } = l.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [u(e[0]), u(e[1])] : u(e),
				done: t
			};
		} });
	};
}
function Nt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Pt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ B(r), a = /* @__PURE__ */ B(n);
			e || (k(n, a) && L(i, "get", n), L(i, "get", a));
			let { has: o } = jt(i), s = t ? At : e ? $t : Qt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && L(/* @__PURE__ */ B(t), "iterate", ct), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ B(n), i = /* @__PURE__ */ B(t);
			return e || (k(t, i) && L(r, "has", t), L(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ B(a), s = t ? At : e ? $t : Qt;
			return !e && L(o, "iterate", ct), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return d(n, e ? {
		add: Nt("add"),
		set: Nt("set"),
		delete: Nt("delete"),
		clear: Nt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ B(this), r = jt(n), i = /* @__PURE__ */ B(e), a = !t && !/* @__PURE__ */ z(e) && !/* @__PURE__ */ Yt(e) ? i : e;
			return r.has.call(n, a) || k(e, a) && r.has.call(n, e) || k(i, a) && r.has.call(n, i) || (n.add(a), dt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ z(n) && !/* @__PURE__ */ Yt(n) && (n = /* @__PURE__ */ B(n));
			let r = /* @__PURE__ */ B(this), { has: i, get: a } = jt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ B(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? k(n, s) && dt(r, "set", e, n, s) : dt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ B(this), { has: n, get: r } = jt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ B(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && dt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ B(this), t = e.size !== 0, n = e.clear();
			return t && dt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Mt(r, e, t);
	}), n;
}
function Ft(e, t) {
	let n = Pt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(m(n, r) && r in t ? n : t, r, i);
}
var It = { get: /* @__PURE__ */ Ft(!1, !1) }, Lt = { get: /* @__PURE__ */ Ft(!1, !0) }, Rt = { get: /* @__PURE__ */ Ft(!0, !1) }, zt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap();
function Ut(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return /* @__PURE__ */ Yt(e) ? e : qt(e, !1, Dt, It, zt);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return qt(e, !1, kt, Lt, Bt);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return qt(e, !0, Ot, Rt, Vt);
}
function qt(e, t, n, r, i) {
	if (!S(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ut(te(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return /* @__PURE__ */ Yt(e) ? /* @__PURE__ */ Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function z(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ B(t) : e;
}
function Zt(e) {
	return !m(e, "__v_skip") && Object.isExtensible(e) && le(e, "__v_skip", !0), e;
}
var Qt = (e) => S(e) ? /* @__PURE__ */ Wt(e) : e, $t = (e) => S(e) ? /* @__PURE__ */ Kt(e) : e;
// @__NO_SIDE_EFFECTS__
function V(e) {
	return e ? e.__v_isRef === !0 : !1;
}
function en(e) {
	return /* @__PURE__ */ V(e) ? e.value : e;
}
var tn = {
	get: (e, t, n) => t === "__v_raw" ? e : en(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function nn(e) {
	return /* @__PURE__ */ Jt(e) ? e : new Proxy(e, tn);
}
var rn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new at(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = rt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && N !== this) return Ke(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Qe(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function an(e, t, n = !1) {
	let r, i;
	return y(e) ? r = e : (r = e.get, i = e.set), new rn(r, i, n);
}
var on = {}, sn = /* @__PURE__ */ new WeakMap(), cn = void 0;
function ln(e, t = !1, n = cn) {
	if (n) {
		let t = sn.get(n);
		t || sn.set(n, t = []), t.push(e);
	}
}
function un(e, t, n = a) {
	let { immediate: r, deep: i, once: o, scheduler: c, augmentJob: l, call: u } = n, d = (e) => i ? e : /* @__PURE__ */ z(e) || i === !1 || i === 0 ? dn(e, 1) : dn(e), p, m, g, _, v = !1, b = !1;
	if (/* @__PURE__ */ V(e) ? (m = () => e.value, v = /* @__PURE__ */ z(e)) : /* @__PURE__ */ Jt(e) ? (m = () => d(e), v = !0) : h(e) ? (b = !0, v = e.some((e) => /* @__PURE__ */ Jt(e) || /* @__PURE__ */ z(e)), m = () => e.map((e) => {
		if (/* @__PURE__ */ V(e)) return e.value;
		if (/* @__PURE__ */ Jt(e)) return d(e);
		if (y(e)) return u ? u(e, 2) : e();
	})) : m = y(e) ? t ? u ? () => u(e, 2) : e : () => {
		if (g) {
			F();
			try {
				g();
			} finally {
				I();
			}
		}
		let t = cn;
		cn = p;
		try {
			return u ? u(e, 3, [_]) : e(_);
		} finally {
			cn = t;
		}
	} : s, t && i) {
		let e = m, t = i === !0 ? Infinity : i;
		m = () => dn(e(), t);
	}
	let x = Be(), S = () => {
		p.stop(), x && x.active && f(x.effects, p);
	};
	if (o && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = b ? Array(e.length).fill(on) : on, w = (e) => {
		if (!(!(p.flags & 1) || !p.dirty && !e)) if (t) {
			let n = p.run();
			if (e || i || v || (b ? n.some((e, t) => k(e, C[t])) : k(n, C))) {
				g && g();
				let e = cn;
				cn = p;
				try {
					let e = [
						n,
						C === on ? void 0 : b && C[0] === on ? [] : C,
						_
					];
					C = n, u ? u(t, 3, e) : t(...e);
				} finally {
					cn = e;
				}
			}
		} else p.run();
	};
	return l && l(w), p = new He(m), p.scheduler = c ? () => c(w, !1) : w, _ = (e) => ln(e, !1, p), g = p.onStop = () => {
		let e = sn.get(p);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			sn.delete(p);
		}
	}, t ? r ? w(!0) : C = p.run() : c ? c(w.bind(null, !0), !0) : p.run(), S.pause = p.pause.bind(p), S.resume = p.resume.bind(p), S.stop = S, S;
}
function dn(e, t = Infinity, n) {
	if (t <= 0 || !S(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ V(e)) dn(e.value, t, n);
	else if (h(e)) for (let r = 0; r < e.length; r++) dn(e[r], t, n);
	else if (_(e) || g(e)) e.forEach((e) => {
		dn(e, t, n);
	});
	else if (ne(e)) {
		for (let r in e) dn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && dn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var fn = [];
function pn(e) {
	fn.push(e);
}
function mn() {
	fn.pop();
}
function hn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		gn(e, t, n);
	}
}
function H(e, t, n, r) {
	if (y(e)) {
		let i = hn(e, t, n, r);
		return i && C(i) && i.catch((e) => {
			gn(e, t, n);
		}), i;
	}
	if (h(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(H(e[a], t, n, r));
		return i;
	}
}
function gn(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || a;
	if (t) {
		let r = t.parent, i = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, a) === !1) return;
			}
			r = r.parent;
		}
		if (o) {
			F(), hn(o, null, 10, [
				e,
				i,
				a
			]), I();
			return;
		}
	}
	_n(e, n, i, r, s);
}
function _n(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var U = [], W = -1, vn = [], yn = null, bn = 0, xn = /* @__PURE__ */ Promise.resolve(), Sn = null;
function Cn(e) {
	let t = Sn || xn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function wn(e) {
	let t = W + 1, n = U.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = U[r], a = An(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Tn(e) {
	if (!(e.flags & 1)) {
		let t = An(e), n = U[U.length - 1];
		!n || !(e.flags & 2) && t >= An(n) ? U.push(e) : U.splice(wn(t), 0, e), e.flags |= 1, En();
	}
}
function En() {
	Sn ||= xn.then(jn);
}
function Dn(e) {
	h(e) ? vn.push(...e) : yn && e.id === -1 ? yn.splice(bn + 1, 0, e) : e.flags & 1 || (vn.push(e), e.flags |= 1), En();
}
function On(e, t, n = W + 1) {
	for (; n < U.length; n++) {
		let t = U[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			U.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function kn(e) {
	if (vn.length) {
		let e = [...new Set(vn)].sort((e, t) => An(e) - An(t));
		if (vn.length = 0, yn) {
			yn.push(...e);
			return;
		}
		for (yn = e, bn = 0; bn < yn.length; bn++) {
			let e = yn[bn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		yn = null, bn = 0;
	}
}
var An = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function jn(e) {
	try {
		for (W = 0; W < U.length; W++) {
			let e = U[W];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), hn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; W < U.length; W++) {
			let e = U[W];
			e && (e.flags &= -2);
		}
		W = -1, U.length = 0, kn(e), Sn = null, (U.length || vn.length) && jn(e);
	}
}
var G = null, Mn = null;
function Nn(e) {
	let t = G;
	return G = e, Mn = e && e.type.__scopeId || null, t;
}
function Pn(e, t = G, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Li(-1);
		let i = Nn(t), a = Ni.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Ni.length; e > a; e--) Fi();
			Nn(i), r._d && Li(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Fn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (F(), H(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), I());
	}
}
function In(e, t) {
	if (Z) {
		let n = Z.provides, r = Z.parent && Z.parent.provides;
		r === n && (n = Z.provides = Object.create(r)), n[e] = t;
	}
}
function Ln(e, t, n = !1) {
	let r = ea();
	if (r || Vr) {
		let i = Vr ? Vr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && y(t) ? t.call(r && r.proxy) : t;
	}
}
var Rn = /* @__PURE__ */ Symbol.for("v-scx"), zn = () => Ln(Rn);
function Bn(e, t, n) {
	return Vn(e, t, n);
}
function Vn(e, t, n = a) {
	let { immediate: r, deep: i, flush: o, once: c } = n, l = d({}, n), u = t && r || !t && o !== "post", f;
	if (oa) {
		if (o === "sync") {
			let e = zn();
			f = e.__watcherHandles ||= [];
		} else if (!u) {
			let e = () => {};
			return e.stop = s, e.resume = s, e.pause = s, e;
		}
	}
	let p = Z;
	l.call = (e, t, n) => H(e, p, t, n);
	let m = !1;
	o === "post" ? l.scheduler = (e) => {
		q(e, p && p.suspense);
	} : o !== "sync" && (m = !0, l.scheduler = (e, t) => {
		t ? e() : Tn(e);
	}), l.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = un(e, t, l);
	return oa && (f ? f.push(h) : u && h()), h;
}
function Hn(e, t, n) {
	let r = this.proxy, i = b(e) ? e.includes(".") ? Un(r, e) : () => r[e] : e.bind(r, r), a;
	y(t) ? a = t : (a = t.handler, n = t);
	let o = ra(this), s = Vn(i, a.bind(r), n);
	return o(), s;
}
function Un(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Wn = /* @__PURE__ */ Symbol("_vte"), Gn = (e) => e.__isTeleport, Kn = /* @__PURE__ */ Symbol("_leaveCb");
function qn(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, qn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Jn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Yn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Xn = /* @__PURE__ */ new WeakMap();
function Zn(e, t, n, r, i = !1) {
	if (h(e)) {
		e.forEach((e, a) => Zn(e, t && (h(t) ? t[a] : t), n, r, i));
		return;
	}
	if ($n(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Zn(e, t, n, r.component.subTree);
		return;
	}
	let o = r.shapeFlag & 4 ? ha(r.component) : r.el, s = i ? null : o, { i: l, r: u } = e, d = t && t.r, p = l.refs === a ? l.refs = {} : l.refs, g = l.setupState, _ = /* @__PURE__ */ B(g), v = g === a ? c : (e) => !Yn(p, e) && m(_, e), x = (e, t) => !(t && Yn(p, t));
	if (d != null && d !== u) {
		if (Qn(t), b(d)) p[d] = null, v(d) && (g[d] = null);
		else if (/* @__PURE__ */ V(d)) {
			let e = t;
			x(d, e.k) && (d.value = null), e.k && (p[e.k] = null);
		}
	}
	if (y(u)) hn(u, l, 12, [s, p]);
	else {
		let t = b(u), r = /* @__PURE__ */ V(u);
		if (t || r) {
			let a = () => {
				if (e.f) {
					let n = t ? v(u) ? g[u] : p[u] : x(u) || !e.k ? u.value : p[e.k];
					if (i) h(n) && f(n, o);
					else if (h(n)) n.includes(o) || n.push(o);
					else if (t) p[u] = [o], v(u) && (g[u] = p[u]);
					else {
						let t = [o];
						x(u, e.k) && (u.value = t), e.k && (p[e.k] = t);
					}
				} else t ? (p[u] = s, v(u) && (g[u] = s)) : r && (x(u, e.k) && (u.value = s), e.k && (p[e.k] = s));
			};
			if (s) {
				let t = () => {
					a(), Xn.delete(e);
				};
				t.id = -1, Xn.set(e, t), q(t, n);
			} else Qn(e), a();
		}
	}
}
function Qn(e) {
	let t = Xn.get(e);
	t && (t.flags |= 8, Xn.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var $n = (e) => !!e.type.__asyncLoader, er = (e) => e.type.__isKeepAlive;
function tr(e, t) {
	rr(e, "a", t);
}
function nr(e, t) {
	rr(e, "da", t);
}
function rr(e, t, n = Z) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (ar(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) er(e.parent.vnode) && ir(r, t, n, e), e = e.parent;
	}
}
function ir(e, t, n, r) {
	let i = ar(t, e, r, !0);
	fr(() => {
		f(r[t], i);
	}, n);
}
function ar(e, t, n = Z, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			F();
			let i = ra(n), a = H(t, n, e, r);
			return i(), I(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var or = (e) => (t, n = Z) => {
	(!oa || e === "sp") && ar(e, (...e) => t(...e), n);
}, sr = or("bm"), cr = or("m"), lr = or("bu"), ur = or("u"), dr = or("bum"), fr = or("um"), pr = or("sp"), mr = or("rtg"), hr = or("rtc");
function gr(e, t = Z) {
	ar("ec", e, t);
}
var _r = /* @__PURE__ */ Symbol.for("v-ndc");
function vr(e) {
	return e.some((e) => !Ri(e) || !(e.type === ji || e.type === J && !vr(e.children))) ? e : null;
}
var yr = (e) => e ? aa(e) ? ha(e) : yr(e.parent) : null, br = /* @__PURE__ */ d(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => yr(e.parent),
	$root: (e) => yr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => kr(e),
	$forceUpdate: (e) => e.f ||= () => {
		Tn(e.update);
	},
	$nextTick: (e) => e.n ||= Cn.bind(e.proxy),
	$watch: (e) => Hn.bind(e)
}), xr = (e, t) => e !== a && !e.__isScriptSetup && m(e, t), Sr = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: r, data: i, props: o, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return r[t];
				case 2: return i[t];
				case 4: return n[t];
				case 3: return o[t];
			}
			else if (xr(r, t)) return s[t] = 1, r[t];
			else if (i !== a && m(i, t)) return s[t] = 2, i[t];
			else if (m(o, t)) return s[t] = 3, o[t];
			else if (n !== a && m(n, t)) return s[t] = 4, n[t];
			else wr && (s[t] = 0);
		}
		let u = br[t], d, f;
		if (u) return t === "$attrs" && L(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== a && m(n, t)) return s[t] = 4, n[t];
		if (f = l.config.globalProperties, m(f, t)) return f[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: o } = e;
		return xr(i, t) ? (i[t] = n, !0) : r !== a && m(r, t) ? (r[t] = n, !0) : m(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== a && c[0] !== "$" && m(e, c) || xr(t, c) || m(o, c) || m(r, c) || m(br, c) || m(i.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? m(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Cr(e) {
	return h(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var wr = !0;
function Tr(e) {
	let t = kr(e), n = e.proxy, r = e.ctx;
	wr = !1, t.beforeCreate && Dr(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: p, beforeUpdate: m, updated: g, activated: _, deactivated: v, beforeDestroy: b, beforeUnmount: x, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: re, serverPrefetch: ie, expose: T, inheritAttrs: ae, components: E, directives: oe, filters: D } = t;
	if (u && Er(u, r, null), o) for (let e in o) {
		let t = o[e];
		y(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		S(t) && (e.data = /* @__PURE__ */ Wt(t));
	}
	if (wr = !0, a) for (let e in a) {
		let t = a[e], i = _a({
			get: y(t) ? t.bind(n, n) : y(t.get) ? t.get.bind(n, n) : s,
			set: !y(t) && y(t.set) ? t.set.bind(n) : s
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (c) for (let e in c) Or(c[e], r, n, e);
	if (l) {
		let e = y(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			In(t, e[t]);
		});
	}
	d && Dr(d, e, "c");
	function O(e, t) {
		h(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (O(sr, f), O(cr, p), O(lr, m), O(ur, g), O(tr, _), O(nr, v), O(gr, re), O(hr, te), O(mr, ne), O(dr, x), O(fr, w), O(pr, ie), h(T)) if (T.length) {
		let t = e.exposed ||= {};
		T.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === s && (e.render = ee), ae != null && (e.inheritAttrs = ae), E && (e.components = E), oe && (e.directives = oe), ie && Jn(e);
}
function Er(e, t, n = s) {
	h(e) && (e = Pr(e));
	for (let n in e) {
		let r = e[n], i;
		i = S(r) ? "default" in r ? Ln(r.from || n, r.default, !0) : Ln(r.from || n) : Ln(r), /* @__PURE__ */ V(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Dr(e, t, n) {
	H(h(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Or(e, t, n, r) {
	let i = r.includes(".") ? Un(n, r) : () => n[r];
	if (b(e)) {
		let n = t[e];
		y(n) && Bn(i, n);
	} else if (y(e)) Bn(i, e.bind(n));
	else if (S(e)) if (h(e)) e.forEach((e) => Or(e, t, n, r));
	else {
		let r = y(e.handler) ? e.handler.bind(n) : t[e.handler];
		y(r) && Bn(i, r, e);
	}
}
function kr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Ar(c, e, o, !0)), Ar(c, t, o)), S(t) && a.set(t, c), c;
}
function Ar(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Ar(e, a, n, !0), i && i.forEach((t) => Ar(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = jr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var jr = {
	data: Mr,
	props: Ir,
	emits: Ir,
	methods: Fr,
	computed: Fr,
	beforeCreate: K,
	created: K,
	beforeMount: K,
	mounted: K,
	beforeUpdate: K,
	updated: K,
	beforeDestroy: K,
	beforeUnmount: K,
	destroyed: K,
	unmounted: K,
	activated: K,
	deactivated: K,
	errorCaptured: K,
	serverPrefetch: K,
	components: Fr,
	directives: Fr,
	watch: Lr,
	provide: Mr,
	inject: Nr
};
function Mr(e, t) {
	return t ? e ? function() {
		return d(y(e) ? e.call(this, this) : e, y(t) ? t.call(this, this) : t);
	} : t : e;
}
function Nr(e, t) {
	return Fr(Pr(e), Pr(t));
}
function Pr(e) {
	if (h(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function K(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Fr(e, t) {
	return e ? d(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ir(e, t) {
	return e ? h(e) && h(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : d(/* @__PURE__ */ Object.create(null), Cr(e), Cr(t ?? {})) : t;
}
function Lr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = d(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = K(e[r], t[r]);
	return n;
}
function Rr() {
	return {
		app: null,
		config: {
			isNativeTag: c,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var zr = 0;
function Br(e, t) {
	return function(n, r = null) {
		y(n) || (n = d({}, n)), r != null && !S(r) && (r = null);
		let i = Rr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: zr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: va,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && y(e.install) ? (a.add(e), e.install(c, ...t)) : y(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || Ui(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, ha(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (H(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Vr;
				Vr = c;
				try {
					return e();
				} finally {
					Vr = t;
				}
			}
		};
		return c;
	};
}
var Vr = null, Hr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${D(t)}Modifiers`];
function Ur(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || a, i = n, o = t.startsWith("update:"), s = o && Hr(r, t.slice(7));
	s && (s.trim && (i = n.map((e) => b(e) ? e.trim() : e)), s.number && (i = n.map(ue)));
	let c, l = r[c = se(t)] || r[c = se(E(t))];
	!l && o && (l = r[c = se(D(t))]), l && H(l, e, 6, i);
	let u = r[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, H(u, e, 6, i);
	}
}
var Wr = /* @__PURE__ */ new WeakMap();
function Gr(e, t, n = !1) {
	let r = n ? Wr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!y(e)) {
		let r = (e) => {
			let n = Gr(e, t, !0);
			n && (s = !0, d(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (S(e) && r.set(e, null), null) : (h(a) ? a.forEach((e) => o[e] = null) : d(o, a), S(e) && r.set(e, o), o);
}
function Kr(e, t) {
	return !e || !l(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), m(e, t[0].toLowerCase() + t.slice(1)) || m(e, D(t)) || m(e, t));
}
function qr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Nn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Y(l.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = Y(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(f, null)), y = t.props ? s : Jr(s);
		}
	} catch (t) {
		Ni.length = 0, gn(t, e, 1), v = Ui(ji);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(u) && (y = Yr(y, a)), b = Ki(b, y, !1, !0));
	}
	return n.dirs && (b = Ki(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && qn(b, n.transition), v = b, Nn(_), v;
}
var Jr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || l(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Yr = (e, t) => {
	let n = {};
	for (let r in e) (!u(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Xr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Zr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Qr(o, r, n) && !Kr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Zr(r, o, l) : !!o;
	return !1;
}
function Zr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Qr(t, e, a) && !Kr(n, a)) return !0;
	}
	return !1;
}
function Qr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && S(r) && S(i) ? !j(r, i) : r !== i;
}
function $r({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ei = {}, ti = () => Object.create(ei), ni = (e) => Object.getPrototypeOf(e) === ei;
function ri(e, t, n, r = !1) {
	let i = {}, a = ti();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ai(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Gt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function ii(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ B(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Kr(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (m(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = E(o);
					i[t] = oi(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		ai(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !m(t, a) && ((r = D(a)) === a || !m(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = oi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !m(t, e)) && (delete a[e], l = !0);
	}
	l && dt(e.attrs, "set", "");
}
function ai(e, t, n, r) {
	let [i, o] = e.propsOptions, s = !1, c;
	if (t) for (let a in t) {
		if (ie(a)) continue;
		let l = t[a], u;
		i && m(i, u = E(a)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : Kr(e.emitsOptions, a) || (!(a in r) || l !== r[a]) && (r[a] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ B(n), r = c || a;
		for (let a = 0; a < o.length; a++) {
			let s = o[a];
			n[s] = oi(i, t, s, r[s], e, !m(r, s));
		}
	}
	return s;
}
function oi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = m(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && y(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = ra(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === D(n)) && (r = !0));
	}
	return r;
}
var si = /* @__PURE__ */ new WeakMap();
function ci(e, t, n = !1) {
	let r = n ? si : t.propsCache, i = r.get(e);
	if (i) return i;
	let s = e.props, c = {}, l = [], u = !1;
	if (!y(e)) {
		let r = (e) => {
			u = !0;
			let [n, r] = ci(e, t, !0);
			d(c, n), r && l.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !u) return S(e) && r.set(e, o), o;
	if (h(s)) for (let e = 0; e < s.length; e++) {
		let t = E(s[e]);
		li(t) && (c[t] = a);
	}
	else if (s) for (let e in s) {
		let t = E(e);
		if (li(t)) {
			let n = s[e], r = c[t] = h(n) || y(n) ? { type: n } : d({}, n), i = r.type, a = !1, o = !0;
			if (h(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = y(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				} else n === "String" && (o = !1);
			}
			else a = y(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || m(r, "default")) && l.push(t);
		}
	}
	let f = [c, l];
	return S(e) && r.set(e, f), f;
}
function li(e) {
	return e[0] !== "$" && !ie(e);
}
var ui = (e) => e === "_" || e === "_ctx" || e === "$stable", di = (e) => h(e) ? e.map(Y) : [Y(e)], fi = (e, t, n) => {
	if (t._n) return t;
	let r = Pn((...e) => di(t(...e)), n);
	return r._c = !1, r;
}, pi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (ui(n)) continue;
		let i = e[n];
		if (y(i)) t[n] = fi(n, i, r);
		else if (i != null) {
			let e = di(i);
			t[n] = () => e;
		}
	}
}, mi = (e, t) => {
	let n = di(t);
	e.slots.default = () => n;
}, hi = (e, t, n) => {
	for (let r in t) (n || !ui(r)) && (e[r] = t[r]);
}, gi = (e, t, n) => {
	let r = e.slots = ti();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (hi(r, t, n), n && le(r, "_", e, !0)) : pi(t, r);
	} else t && mi(e, t);
}, _i = (e, t, n) => {
	let { vnode: r, slots: i } = e, o = !0, s = a;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : hi(i, t, n) : (o = !t.$stable, pi(t, i)), s = t;
	} else t && (mi(e, t), s = { default: 1 });
	if (o) for (let e in i) !ui(e) && s[e] == null && delete i[e];
}, q = ki;
function vi(e) {
	return yi(e);
}
function yi(e, t) {
	let n = fe();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = s, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !zi(e, t) && (r = ye(e), me(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Ai:
				y(e, t, n, r);
				break;
			case ji:
				b(e, t, n, r);
				break;
			case Mi:
				e ?? x(t, n, r, o);
				break;
			case J:
				E(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? oe(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Se);
		}
		u != null && i ? Zn(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Zn(e.ref, null, a, e, !0);
	}, y = (e, t, n, i) => {
		if (e == null) r(t.el = u(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, i) => {
		e == null ? r(t.el = d(t.children || ""), n, i) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = h(e), r(e, n, i), e = a;
		r(t, n, i);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), i(e), e = n;
		i(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ee(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), re(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ee = (e, t, n, i, a, o, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, o, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ne(e.children, d, null, i, a, bi(e, o), s, u), _ && Fn(e, null, i, "created"), te(d, e, e.scopeId, s, i), m) {
			for (let e in m) e !== "value" && !ie(e) && c(d, e, null, m[e], o, i);
			"value" in m && c(d, "value", null, m.value, o), (f = m.onVnodeBeforeMount) && X(f, i, e);
		}
		_ && Fn(e, null, i, "beforeMount");
		let v = Si(a, g);
		v && g.beforeEnter(d), r(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && q(() => {
			try {
				f && X(f, i, e), v && g.enter(d), _ && Fn(e, null, i, "mounted");
			} finally {}
		}, a);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Oi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ne = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Ji(e[l]) : Y(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, re = (e, t, n, r, i, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || a, h = t.props || a, g;
		if (n && xi(n, !1), (g = h.onVnodeBeforeUpdate) && X(g, n, t, e), f && Fn(t, e, n, "beforeUpdate"), n && xi(n, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? T(e.dynamicChildren, d, l, n, r, bi(t, i), o) : s || le(e, t, l, null, n, r, bi(t, i), o, !1), u > 0) {
			if (u & 16) ae(l, m, h, n, i);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, i), u & 4 && c(l, "style", m.style, h.style, i), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], a = m[r], o = h[r];
					(o !== a || r === "value") && c(l, r, a, o, i, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && ae(l, m, h, n, i);
		((g = h.onVnodeUpdated) || f) && q(() => {
			g && X(g, n, t, e), f && Fn(t, e, n, "updated");
		}, r);
	}, T = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el && (c.type === J || !zi(c, l) || c.shapeFlag & 198) ? m(c.el) : n;
			v(c, l, u, null, r, i, a, o, !0);
		}
	}, ae = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== a) for (let a in t) !ie(a) && !(a in n) && c(e, a, t[a], null, i, r);
			for (let a in n) {
				if (ie(a)) continue;
				let o = n[a], s = t[a];
				o !== s && a !== "value" && c(e, a, s, o, i, r);
			}
			"value" in n && c(e, "value", t.value, n.value, i);
		}
	}, E = (e, t, n, i, a, o, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), ne(t.children || [], n, f, a, o, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (T(e.dynamicChildren, m, n, a, o, s, c), (t.key != null || a && t === a.subTree) && Ci(e, t, !0)) : le(e, t, n, f, a, o, s, c, l);
	}, oe = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : D(t, n, r, i, a, o, c) : O(e, t, c);
	}, D = (e, t, n, r, i, a, o) => {
		let s = e.component = $i(e, r, i);
		if (er(e) && (s.ctx.renderer = Se), sa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, se, o), !e.el) {
				let r = s.subTree = Ui(ji);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else se(s, e, t, n, i, a, o);
	}, O = (e, t, n) => {
		let r = t.component = e.component;
		if (Xr(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			k(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, se = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ti(e);
					if (n) {
						t && (t.el = c.el, k(e, t, o)), n.asyncDep.then(() => {
							q(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				xi(e, !1), t ? (t.el = c.el, k(e, t, o)) : t = c, n && ce(n), (d = t.props && t.props.onVnodeBeforeUpdate) && X(d, s, t, c), xi(e, !0);
				let f = qr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), ye(p), e, i, a), t.el = f.el, u === null && $r(e, f.el), r && q(r, i), (d = t.props && t.props.onVnodeUpdated) && q(() => X(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = $n(t);
				if (xi(e, !1), l && ce(l), !m && (o = c && c.onVnodeBeforeMount) && X(o, d, t), xi(e, !0), s && we) {
					let t = () => {
						e.subTree = qr(e), we(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = qr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && q(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					q(() => X(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && $n(d.vnode) && d.vnode.shapeFlag & 256) && e.a && q(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new He(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Tn(u), xi(e, !0), l();
	}, k = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ii(e, t.props, r, n), _i(e, t.children, n), F(), On(e), I();
	}, le = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				de(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				ue(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ve(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? de(l, d, n, r, i, a, o, s, c) : ve(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && ne(d, n, r, i, a, o, s, c));
	}, ue = (e, t, n, r, i, a, s, c, l) => {
		e ||= o, t ||= o;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? Ji(t[p]) : Y(t[p]);
			v(e[p], r, n, null, i, a, s, c, l);
		}
		u > d ? ve(e, i, a, !0, !1, f) : ne(t, n, r, i, a, s, c, l, f);
	}, de = (e, t, n, r, i, a, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], o = t[u] = l ? Ji(t[u]) : Y(t[u]);
			if (zi(r, o)) v(r, o, n, null, i, a, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], o = t[p] = l ? Ji(t[p]) : Y(t[p]);
			if (zi(r, o)) v(r, o, n, null, i, a, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, o = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? Ji(t[u]) : Y(t[u]), n, o, i, a, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) me(e[u], i, a, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Ji(t[u]) : Y(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					me(r, i, a, !0);
					continue;
				}
				let o;
				if (r.key != null) o = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && zi(r, t[_])) {
					o = _;
					break;
				}
				o === void 0 ? me(r, i, a, !0) : (C[o - h] = u + 1, o >= S ? S = o : x = !0, v(r, t[o], n, null, i, a, s, c, l), y++);
			}
			let w = x ? wi(C) : o;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, o = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Di(f) : r;
				C[u] === 0 ? v(null, o, n, p, i, a, s, c, l) : x && (_ < 0 || u !== w[_] ? pe(o, n, p, 2) : _--);
			}
		}
	}, pe = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			pe(e.component.subTree, t, n, a);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, a);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, Se);
			return;
		}
		if (c === J) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) pe(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === Mi) {
			S(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) if (a === 0) l.persisted && !s[Kn] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), q(() => l.enter(s), o));
		else {
			let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? i(s) : r(s, t, n);
			}, d = () => {
				let e = s._isLeaving || !!s[Kn];
				s._isLeaving && s[Kn](!0), l.persisted && !e ? u() : a(s, () => {
					u(), c && c();
				});
			};
			o ? o(s, u, d) : d();
		}
		else r(s, t, n);
	}, me = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (F(), Zn(s, null, n, e, !0), I()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !$n(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && X(_, t, e), u & 6) _e(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Fn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== J || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === J && d & 384 || !i && u & 16) && ve(c, t, n), r && he(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && q(() => {
			_ && X(_, t, e), h && Fn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, he = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === J) {
			ge(n, r);
			return;
		}
		if (t === Mi) {
			C(e);
			return;
		}
		let o = () => {
			i(n), a && !a.persisted && a.afterLeave && a.afterLeave();
		};
		if (e.shapeFlag & 1 && a && !a.persisted) {
			let { leave: t, delayLeave: r } = a, i = () => t(n, o);
			r ? r(e.el, o, i) : i();
		} else o();
	}, ge = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), i(e), e = n;
		i(t);
	}, _e = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Ei(c), Ei(l), r && ce(r), i.stop(), a && (a.flags |= 8, me(o, e, t, n)), s && q(s, t), q(() => {
			e.isUnmounted = !0;
		}, t);
	}, ve = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) me(e[o], t, n, r, i);
	}, ye = (e) => {
		if (e.shapeFlag & 6) return ye(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Wn];
		return n ? h(n) : t;
	}, be = !1, xe = (e, t, n) => {
		let r;
		e == null ? t._vnode && (me(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, be ||= (be = !0, On(r), kn(), !1);
	}, Se = {
		p: v,
		um: me,
		m: pe,
		r: he,
		mt: D,
		mc: ne,
		pc: le,
		pbc: T,
		n: ye,
		o: e
	}, Ce, we;
	return t && ([Ce, we] = t(Se)), {
		render: xe,
		hydrate: Ce,
		createApp: Br(xe, Ce)
	};
}
function bi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function xi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Si(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ci(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (h(r) && h(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Ji(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ci(t, a)), a.type === Ai && (a.patchFlag === -1 && (a = i[e] = Ji(a)), a.el = t.el), a.type === ji && !a.el && (a.el = t.el);
	}
}
function wi(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Ti(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ti(t);
}
function Ei(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Di(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Di(t.subTree) : null;
}
var Oi = (e) => e.__isSuspense;
function ki(e, t) {
	t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : Dn(e);
}
var J = /* @__PURE__ */ Symbol.for("v-fgt"), Ai = /* @__PURE__ */ Symbol.for("v-txt"), ji = /* @__PURE__ */ Symbol.for("v-cmt"), Mi = /* @__PURE__ */ Symbol.for("v-stc"), Ni = [], Pi = null;
function Fi() {
	Ni.pop(), Pi = Ni[Ni.length - 1] || null;
}
var Ii = 1;
function Li(e, t = !1) {
	Ii += e, e < 0 && Pi && t && (Pi.hasOnce = !0);
}
function Ri(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function zi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Bi = ({ key: e }) => e ?? null, Vi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : b(e) || /* @__PURE__ */ V(e) || y(e) ? {
	i: G,
	r: e,
	k: t,
	f: !!n
} : e);
function Hi(e, t = null, n = null, r = 0, i = null, a = e === J ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Bi(t),
		ref: t && Vi(t),
		scopeId: Mn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: G
	};
	return s ? (Yi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= b(n) ? 8 : 16), Ii > 0 && !o && Pi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Pi.push(c), c;
}
var Ui = Wi;
function Wi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === _r) && (e = ji), Ri(e)) {
		let r = Ki(e, t, !0);
		return n && Yi(r, n), Ii > 0 && !a && Pi && (r.shapeFlag & 6 ? Pi[Pi.indexOf(e)] = r : Pi.push(r)), r.patchFlag = -2, r;
	}
	if (ga(e) && (e = e.__vccOpts), t) {
		t = Gi(t);
		let { class: e, style: n } = t;
		e && !b(e) && (t.class = ye(e)), S(n) && (/* @__PURE__ */ Xt(n) && !h(n) && (n = d({}, n)), t.style = pe(n));
	}
	let o = b(e) ? 1 : Oi(e) ? 128 : Gn(e) ? 64 : S(e) ? 4 : y(e) ? 2 : 0;
	return Hi(e, t, n, r, i, o, a, !0);
}
function Gi(e) {
	return e ? /* @__PURE__ */ Xt(e) || ni(e) ? d({}, e) : e : null;
}
function Ki(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Xi(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Bi(l),
		ref: t && t.ref ? n && a ? h(a) ? a.concat(Vi(t)) : [a, Vi(t)] : Vi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== J ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ki(e.ssContent),
		ssFallback: e.ssFallback && Ki(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && qn(u, c.clone(u)), u;
}
function qi(e = " ", t = 0) {
	return Ui(Ai, null, e, t);
}
function Y(e) {
	return e == null || typeof e == "boolean" ? Ui(ji) : h(e) ? Ui(J, null, e.slice()) : Ri(e) ? Ji(e) : Ui(Ai, null, String(e));
}
function Ji(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ki(e);
}
function Yi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (h(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Yi(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !ni(t) ? t._ctx = G : r === 3 && G && (G.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else if (y(t)) {
		if (r & 65) {
			Yi(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: G
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [qi(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Xi(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = ye([t.class, r.class]));
		else if (e === "style") t.style = pe([t.style, r.style]);
		else if (l(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(h(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !u(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function X(e, t, n, r = null) {
	H(e, t, 7, [n, r]);
}
var Zi = Rr(), Qi = 0;
function $i(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || Zi, o = {
		uid: Qi++,
		vnode: e,
		type: r,
		parent: t,
		appContext: i,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new ze(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(i.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: ci(r, i),
		emitsOptions: Gr(r, i),
		emit: null,
		emitted: null,
		propsDefaults: a,
		inheritAttrs: r.inheritAttrs,
		ctx: a,
		data: a,
		props: a,
		attrs: a,
		slots: a,
		refs: a,
		setupState: a,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ur.bind(null, o), e.ce && e.ce(o), o;
}
var Z = null, ea = () => Z || G, ta, na;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ta = t("__VUE_INSTANCE_SETTERS__", (e) => Z = e), na = t("__VUE_SSR_SETTERS__", (e) => oa = e);
}
var ra = (e) => {
	let t = Z;
	return ta(e), e.scope.on(), () => {
		e.scope.off(), ta(t);
	};
}, ia = () => {
	Z && Z.scope.off(), ta(null);
};
function aa(e) {
	return e.vnode.shapeFlag & 4;
}
var oa = !1;
function sa(e, t = !1, n = !1) {
	t && na(t);
	let { props: r, children: i } = e.vnode, a = aa(e);
	ri(e, r, a, t), gi(e, i, n || t);
	let o = a ? ca(e, t) : void 0;
	return t && na(!1), o;
}
function ca(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Sr);
	let { setup: r } = n;
	if (r) {
		F();
		let n = e.setupContext = r.length > 1 ? ma(e) : null, i = ra(e), a = hn(r, e, 0, [e.props, n]), o = C(a);
		if (I(), i(), (o || e.sp) && !$n(e) && Jn(e), o) {
			if (a.then(ia, ia), t) return a.then((n) => {
				la(e, n, t);
			}).catch((t) => {
				gn(t, e, 0);
			});
			e.asyncDep = a;
		} else la(e, a, t);
	} else fa(e, t);
}
function la(e, t, n) {
	y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : S(t) && (e.setupState = nn(t)), fa(e, n);
}
var ua, da;
function fa(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && ua && !r.render) {
			let t = r.template || kr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = ua(t, d(d({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || s, da && da(e);
	}
	{
		let t = ra(e);
		F();
		try {
			Tr(e);
		} finally {
			I(), t();
		}
	}
}
var pa = { get(e, t) {
	return L(e, "get", ""), e[t];
} };
function ma(e) {
	return {
		attrs: new Proxy(e.attrs, pa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function ha(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(nn(Zt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in br) return br[n](e);
		},
		has(e, t) {
			return t in e || t in br;
		}
	}) : e.proxy;
}
function ga(e) {
	return y(e) && "__vccOpts" in e;
}
var _a = (e, t) => /* @__PURE__ */ an(e, t, oa), va = "3.5.40", ya = s, ba = {
	createComponentInstance: $i,
	setupComponent: sa,
	renderComponentRoot: qr,
	setCurrentRenderingInstance: Nn,
	isVNode: Ri,
	normalizeVNode: Y,
	getComponentPublicInstance: ha,
	ensureValidVNode: vr,
	pushWarningContext: pn,
	popWarningContext: mn
}, xa = void 0, Sa = typeof window < "u" && window.trustedTypes;
if (Sa) try {
	xa = /* @__PURE__ */ Sa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ca = xa ? (e) => xa.createHTML(e) : (e) => e, wa = "http://www.w3.org/2000/svg", Ta = "http://www.w3.org/1998/Math/MathML", Ea = typeof document < "u" ? document : null, Da = Ea && /* @__PURE__ */ Ea.createElement("template"), Oa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ea.createElementNS(wa, e) : t === "mathml" ? Ea.createElementNS(Ta, e) : n ? Ea.createElement(e, { is: n }) : Ea.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ea.createTextNode(e),
	createComment: (e) => Ea.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ea.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Da.innerHTML = Ca(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Da.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, ka = /* @__PURE__ */ Symbol("_vtc");
function Aa(e, t, n) {
	let r = e[ka];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var ja = /* @__PURE__ */ Symbol("_vod"), Ma = /* @__PURE__ */ Symbol("_vsh"), Na = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[ja] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Pa(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Pa(e, !0), r.enter(e)) : r.leave(e, () => {
			Pa(e, !1);
		}) : Pa(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Pa(e, t);
	}
};
function Pa(e, t) {
	e.style.display = t ? e[ja] : "none", e[Ma] = !t;
}
function Fa() {
	Na.getSSRProps = ({ value: e }) => {
		if (!e) return { style: { display: "none" } };
	};
}
var Ia = /* @__PURE__ */ Symbol(""), La = /(?:^|;)\s*display\s*:/;
function Ra(e, t, n) {
	let r = e.style, i = b(n), a = !1;
	if (n && !i) {
		if (t) if (b(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Ba(r, t, "");
		}
		else for (let e in t) n[e] ?? Ba(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ba(r, i, "") : Wa(e, i, !b(t) && t ? t[i] : void 0, o) || Ba(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ia];
			e && (n += ";" + e), r.cssText = n, a = La.test(n);
		}
	} else t && e.removeAttribute("style");
	ja in e && (e[ja] = a ? r.display : "", e[Ma] && (r.display = "none"));
}
var za = /\s*!important$/;
function Ba(e, t, n) {
	if (h(n)) n.forEach((n) => Ba(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Ua(e, t);
		za.test(n) ? e.setProperty(D(r), n.replace(za, ""), "important") : e[r] = n;
	}
}
var Va = [
	"Webkit",
	"Moz",
	"ms"
], Ha = {};
function Ua(e, t) {
	let n = Ha[t];
	if (n) return n;
	let r = E(t);
	if (r !== "filter" && r in e) return Ha[t] = r;
	r = O(r);
	for (let n = 0; n < Va.length; n++) {
		let i = Va[n] + r;
		if (i in e) return Ha[t] = i;
	}
	return t;
}
function Wa(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && b(r) && n === r;
}
var Ga = "http://www.w3.org/1999/xlink";
function Ka(e, t, n, r, i, a = Te(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ga, t.slice(6, t.length)) : e.setAttributeNS(Ga, t, n) : n == null || a && !De(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : x(n) ? String(n) : n);
}
function qa(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ca(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = De(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Q(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ja(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Ya = /* @__PURE__ */ Symbol("_vei");
function Xa(e, t, n, r, i = null) {
	let a = e[Ya] || (e[Ya] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = $a(t);
		r ? Q(e, n, a[t] = ro(r, i), s) : o && (Ja(e, n, o, s), a[t] = void 0);
	}
}
var Za = /(Once|Passive|Capture)$/, Qa = /^on:?(?:Once|Passive|Capture)$/;
function $a(e) {
	let t, n;
	for (; (n = e.match(Za)) && !Qa.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : D(e.slice(2)), t];
}
var eo = 0, to = /* @__PURE__ */ Promise.resolve(), no = () => eo ||= (to.then(() => eo = 0), Date.now());
function ro(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (h(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && H(e, t, 5, a);
			}
		} else H(r, t, 5, [e]);
	};
	return n.value = e, n.attached = no(), n;
}
var io = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ao = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Aa(e, r, o) : t === "style" ? Ra(e, n, r) : l(t) ? u(t) || Xa(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : oo(e, t, r, o)) ? (qa(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ka(e, t, r, o, a, t !== "value")) : e._isVueCE && (so(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !b(r))) ? qa(e, E(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ka(e, t, r, o));
};
function oo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && io(t) && y(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return io(t) && b(n) ? !1 : t in e;
}
function so(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = E(t);
	return Array.isArray(n) ? n.some((e) => E(e) === r) : Object.keys(n).some((e) => E(e) === r);
}
var co = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return h(t) ? (e) => ce(t, e) : t;
};
function lo(e) {
	e.target.composing = !0;
}
function uo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var $ = /* @__PURE__ */ Symbol("_assign");
function fo(e, t, n) {
	return t && (e = e.trim()), n && (e = ue(e)), e;
}
var po = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[$] = co(i);
		let a = r || i.props && i.props.type === "number";
		Q(e, t ? "change" : "input", (t) => {
			t.target.composing || e[$](fo(e.value, n, a));
		}), (n || a) && Q(e, "change", () => {
			e.value = fo(e.value, n, a);
		}), t || (Q(e, "compositionstart", lo), Q(e, "compositionend", uo), Q(e, "change", uo));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[$] = co(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, mo = {
	deep: !0,
	created(e, t, n) {
		e[$] = co(n), Q(e, "change", () => {
			let t = e._modelValue, n = yo(e), r = e.checked, i = e[$];
			if (h(t)) {
				let e = Le(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (_(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(bo(e, r));
		});
	},
	mounted: ho,
	beforeUpdate(e, t, n) {
		e[$] = co(n), ho(e, t, n);
	}
};
function ho(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (h(t)) i = Le(t, r.props.value) > -1;
	else if (_(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = j(t, bo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var go = {
	created(e, { value: t }, n) {
		e.checked = j(t, n.props.value), e[$] = co(n), Q(e, "change", () => {
			e[$](yo(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[$] = co(r), t !== n && (e.checked = j(t, r.props.value));
	}
}, _o = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Q(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ue(yo(e)) : yo(e));
			e[$](e.multiple ? _(e._modelValue) ? new Set(t) : t : t[0]), e._assigning = !0, Cn(() => {
				e._assigning = !1;
			});
		}), e[$] = co(r);
	},
	mounted(e, { value: t }) {
		vo(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[$] = co(n);
	},
	updated(e, { value: t }) {
		e._assigning || vo(e, t);
	}
};
function vo(e, t) {
	let n = e.multiple, r = h(t);
	if (!(n && !r && !_(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = yo(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Le(t, o) > -1;
			} else a.selected = t.has(o);
			else if (j(yo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function yo(e) {
	return "_value" in e ? e._value : e.value;
}
function bo(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var xo = {
	created(e, t, n) {
		Co(e, t, n, null, "created");
	},
	mounted(e, t, n) {
		Co(e, t, n, null, "mounted");
	},
	beforeUpdate(e, t, n, r) {
		Co(e, t, n, r, "beforeUpdate");
	},
	updated(e, t, n, r) {
		Co(e, t, n, r, "updated");
	}
};
function So(e, t) {
	switch (e) {
		case "SELECT": return _o;
		case "TEXTAREA": return po;
		default: switch (t) {
			case "checkbox": return mo;
			case "radio": return go;
			default: return po;
		}
	}
}
function Co(e, t, n, r, i) {
	let a = So(e.tagName, n.props && n.props.type)[i];
	a && a(e, t, n, r);
}
function wo() {
	po.getSSRProps = ({ value: e }) => ({ value: e }), go.getSSRProps = ({ value: e }, t) => {
		if (t.props && j(t.props.value, e)) return { checked: !0 };
	}, mo.getSSRProps = ({ value: e }, t) => {
		if (h(e)) {
			if (t.props && Le(e, t.props.value) > -1) return { checked: !0 };
		} else if (_(e)) {
			if (t.props && e.has(t.props.value)) return { checked: !0 };
		} else if (e) return { checked: !0 };
	}, xo.getSSRProps = (e, t) => {
		if (typeof t.type != "string") return;
		let n = So(t.type.toUpperCase(), t.props && t.props.type);
		if (n.getSSRProps) return n.getSSRProps(e, t);
	};
}
var To = /* @__PURE__ */ d({ patchProp: ao }, Oa), Eo;
function Do() {
	return Eo ||= vi(To);
}
var Oo = ((...e) => {
	let t = Do().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Ao(e);
		if (!r) return;
		let i = t._component;
		!y(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, ko(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function ko(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Ao(e) {
	return b(e) ? document.querySelector(e) : e;
}
var jo = !1, Mo = () => {
	jo || (jo = !0, wo(), Fa());
}, No = /* @__PURE__ */ i(",key,ref,innerHTML,textContent,ref_key,ref_for");
function Po(e, t) {
	let n = "";
	for (let r in e) {
		if (No(r) || l(r) || t === "textarea" && r === "value" || r.startsWith(".")) continue;
		let i = e[r];
		r.startsWith("^") && (r = r.slice(1)), r === "class" ? n += ` class="${Io(i)}"` : r === "style" ? n += ` style="${Lo(i)}"` : r === "className" ? i != null && (n += ` class="${A(String(i))}"`) : n += Fo(r, i, t);
	}
	return n;
}
function Fo(e, t, n) {
	if (!Me(t)) return "";
	let r = n && (n.indexOf("-") > 0 || Se(n)) ? e : je[e] || e.toLowerCase();
	return Ee(r) ? De(t) ? ` ${r}` : "" : Ae(r) ? t === "" ? ` ${r}` : ` ${r}="${A(t)}"` : (console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r}`), "");
}
function Io(e) {
	return A(ye(e));
}
function Lo(e) {
	return e ? b(e) ? A(e) : A(ve(pe(Ro(e)))) : "";
}
function Ro(e) {
	if (!h(e) && S(e)) {
		let t = {};
		for (let n in e) n.startsWith(":--") ? t[n.slice(1)] = Re(e[n]) : t[n] = e[n];
		return t;
	}
	return e;
}
var { ensureValidVNode: zo } = ba;
function Bo(e, t, n, r, i) {
	e("<!--teleport start-->");
	let a = i.appContext.provides[Rn], o = a.__teleportBuffers ||= {}, s = o[n] || (o[n] = []), c = s.length, l;
	if (r) t(e), l = "<!--teleport start anchor--><!--teleport anchor-->";
	else {
		let { getBuffer: e, push: n } = Yo();
		n("<!--teleport start anchor-->"), t(n), n("<!--teleport anchor-->"), l = e();
	}
	s.splice(c, 0, l), (C(l) || h(l) && l.hasAsync) && (s.hasAsync = !0), e("<!--teleport end-->");
}
function Vo(e, t) {
	throw Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.");
}
var { createComponentInstance: Ho, setCurrentRenderingInstance: Uo, setupComponent: Wo, renderComponentRoot: Go, normalizeVNode: Ko, pushWarningContext: qo, popWarningContext: Jo } = ba;
function Yo() {
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
			t.push(n), e = r, (C(n) || h(n) && n.hasAsync) && (t.hasAsync = !0);
		}
	};
}
function Xo(e, t = null, n) {
	let r = e.component = Ho(e, t, null), i = Wo(r, !0), a = C(i), o = r.sp;
	if (a || o) return Promise.resolve(i).then(() => {
		if (a && (o = r.sp), o) return Promise.all(o.map((e) => e.call(r.proxy)));
	}).catch(s).then(() => Zo(r, n));
	try {
		return Zo(r, n);
	} catch (e) {
		return Promise.reject(e);
	}
}
function Zo(e, t) {
	let n = e.type, { getBuffer: r, push: i } = Yo();
	if (y(n)) {
		let r = Go(e);
		if (!n.props) for (let t in e.attrs) t.startsWith("data-v-") && ((r.props ||= {})[t] = "");
		Qo(i, e.subTree = r, e, t);
	} else {
		(!e.render || e.render === s) && !e.ssrRender && !n.ssrRender && b(n.template) && (n.ssrRender = Vo(n.template));
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
			let s = Uo(e);
			try {
				r(e.proxy, i, e, n, e.props, e.setupState, e.data, e.ctx);
			} catch (t) {
				gn(t, e, 1);
			} finally {
				Uo(s);
			}
		} else e.render && e.render !== s ? Qo(i, e.subTree = Go(e), e, t) : (ya(`Component ${n.name || n.__file || "<Anonymous>"} is missing template or render function.`), i("<!---->"));
	}
	return r();
}
function Qo(e, t, n, r) {
	let { type: i, shapeFlag: a, children: o, dirs: s, props: c } = t;
	switch (s && (t.props = ts(t, c, s)), i) {
		case Ai:
			e(A(o));
			break;
		case ji:
			e(o ? `<!--${Fe(o)}-->` : "<!---->");
			break;
		case Mi:
			e(o);
			break;
		case J:
			t.slotScopeIds && (r = (r ? r + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), $o(e, o, n, r), e("<!--]-->");
			break;
		default: a & 1 ? es(e, t, n, r) : a & 6 ? e(Xo(t, n, r)) : a & 64 ? ns(e, t, n, r) : a & 128 ? Qo(e, t.ssContent, n, r) : ya("[@vue/server-renderer] Invalid VNode type:", i, `(${typeof i})`);
	}
}
function $o(e, t, n, r) {
	for (let i = 0; i < t.length; i++) Qo(e, Ko(t[i]), n, r);
}
function es(e, t, n, r) {
	let i = t.type, { props: a, children: o, shapeFlag: s, scopeId: c } = t, l = `<${i}`;
	a && (l += Po(a, i));
	let u = [], d = (e) => {
		e && (!a || !m(a, e)) && !u.includes(e) && (l += ` ${e}`, u.push(e));
	};
	c && d(c);
	let f = n, p = t;
	for (; f && p === f.subTree;) p = f.vnode, p.scopeId && d(p.scopeId), f = f.parent;
	if (r) {
		let e = r.trim().split(" ");
		for (let t = 0; t < e.length; t++) d(e[t]);
	}
	if (e(l + ">"), !Ce(i)) {
		let t = !1;
		a && (a.innerHTML ? (t = !0, e(a.innerHTML)) : a.textContent ? (t = !0, e(A(a.textContent))) : i === "textarea" && a.value && (t = !0, e(A(a.value)))), t || (s & 8 ? e(A(o)) : s & 16 && $o(e, o, n, r)), e(`</${i}>`);
	}
}
function ts(e, t, n) {
	let r = [];
	for (let t = 0; t < n.length; t++) {
		let i = n[t], { dir: { getSSRProps: a } } = i;
		if (a) {
			let t = a(i, e);
			t && r.push(t);
		}
	}
	return Xi(t || {}, ...r);
}
function ns(e, t, n, r) {
	let i = t.props && t.props.to, a = t.props && t.props.disabled;
	if (!i) return a || ya("[@vue/server-renderer] Teleport is missing target prop."), [];
	if (!b(i)) return ya("[@vue/server-renderer] Teleport target must be a query selector string."), [];
	Bo(e, (e) => {
		$o(e, t.children, n, r);
	}, i, a || a === "", n);
}
var { isVNode: rs } = ba;
function is(e, t, n) {
	if (!e.hasAsync) return t + os(e);
	let r = t;
	for (let t = n; t < e.length; t += 1) {
		let n = e[t];
		if (b(n)) {
			r += n;
			continue;
		}
		if (C(n)) return n.then((n) => (e[t] = n, is(e, r, t)));
		let i = is(n, r, 0);
		if (C(i)) return i.then((n) => (e[t] = n, is(e, "", t)));
		r = i;
	}
	return r;
}
function as(e) {
	return is(e, "", 0);
}
function os(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		b(r) ? t += r : t += os(r);
	}
	return t;
}
async function ss(e, t = {}) {
	if (rs(e)) return ss(Oo({ render: () => e }), t);
	let n = Ui(e._component, e._props);
	n.appContext = e._context, e.provide(Rn, t);
	let r = await as(await Xo(n));
	if (await cs(t), t.__watcherHandles) for (let e of t.__watcherHandles) e();
	return r;
}
async function cs(e) {
	if (e.__teleportBuffers) {
		e.teleports = e.teleports || {};
		for (let t in e.__teleportBuffers) e.teleports[t] = await as(e.__teleportBuffers[t]);
	}
}
var { isVNode: ls } = ba;
Mo();
//#endregion
//#region src/renderer/index.vue?vue&type=script&setup=true&lang.ts
var us = ["id"], ds = /* @__PURE__ */ n({
	__name: "index",
	props: {
		_p: {},
		_pp: {}
	},
	setup(t) {
		return (n, i) => (r(), e("div", {
			id: t._p.f.name("root"),
			class: "box"
		}, null, 8, us));
	}
}), fs = async (e) => ({ set: async (n) => (console.log(`--renderer [${n.data.curr.type}]`), {
	r: `
                 <div>
                    ${await ss(t(ds, {
		_p: e,
		_pp: n
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
export { fs as t };
