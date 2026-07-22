import "./style-BB7kB583.js";
const { createElementBlock: e, createElementVNode: t, createSSRApp: n, defineComponent: r, openBlock: i, toDisplayString: a } = window.Vue;
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function o(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var s = {}, c = [], l = () => {}, u = () => !1, d = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), f = (e) => e.startsWith("onUpdate:"), p = Object.assign, m = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, h = Object.prototype.hasOwnProperty, g = (e, t) => h.call(e, t), _ = Array.isArray, v = (e) => E(e) === "[object Map]", y = (e) => E(e) === "[object Set]", b = (e) => E(e) === "[object Date]", x = (e) => typeof e == "function", S = (e) => typeof e == "string", C = (e) => typeof e == "symbol", w = (e) => typeof e == "object" && !!e, T = (e) => (w(e) || x(e)) && x(e.then) && x(e.catch), ee = Object.prototype.toString, E = (e) => ee.call(e), te = (e) => E(e).slice(8, -1), ne = (e) => E(e) === "[object Object]", re = (e) => S(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ie = /* @__PURE__ */ o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ae = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, oe = /-\w/g, D = ae((e) => e.replace(oe, (e) => e.slice(1).toUpperCase())), O = /\B([A-Z])/g, k = ae((e) => e.replace(O, "-$1").toLowerCase()), se = ae((e) => e.charAt(0).toUpperCase() + e.slice(1)), ce = ae((e) => e ? `on${se(e)}` : ""), A = (e, t) => !Object.is(e, t), le = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ue = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, de = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, fe, pe = () => fe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function me(e) {
	if (_(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = S(r) ? ve(r) : me(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (S(e) || w(e)) return e;
}
var he = /;(?![^(]*\))/g, ge = /:([^]+)/, _e = /\/\*[^]*?\*\//g;
function ve(e) {
	let t = {};
	return e.replace(_e, "").split(he).forEach((e) => {
		if (e) {
			let n = e.split(ge);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function ye(e) {
	if (!e) return "";
	if (S(e)) return e;
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (S(r) || typeof r == "number") {
			let e = n.startsWith("--") ? n : k(n);
			t += `${e}:${r};`;
		}
	}
	return t;
}
function be(e) {
	let t = "";
	if (S(e)) t = e;
	else if (_(e)) for (let n = 0; n < e.length; n++) {
		let r = be(e[n]);
		r && (t += r + " ");
	}
	else if (w(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var xe = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Se = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Ce = /* @__PURE__ */ o(xe), we = /* @__PURE__ */ o(Se), Te = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ee = /* @__PURE__ */ o(Te), De = /* @__PURE__ */ o(Te + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
function Oe(e) {
	return !!e || e === "";
}
var ke = /[>/="'\u0009\u000a\u000c\u0020]/, Ae = {};
function je(e) {
	if (Ae.hasOwnProperty(e)) return Ae[e];
	let t = ke.test(e);
	return t && console.error(`unsafe attribute name: ${e}`), Ae[e] = !t;
}
var Me = {
	acceptCharset: "accept-charset",
	className: "class",
	htmlFor: "for",
	httpEquiv: "http-equiv"
};
function Ne(e) {
	if (e == null) return !1;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean";
}
var Pe = /["'&<>]/;
function j(e) {
	let t = "" + e, n = Pe.exec(t);
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
var Fe = /^(?:-?>)+|<!--|-->|--!>|<!-$/g;
function Ie(e) {
	let t;
	do
		t = e, e = e.replace(Fe, "");
	while (e !== t);
	return e;
}
function Le(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = M(e[r], t[r]);
	return n;
}
function M(e, t) {
	if (e === t) return !0;
	let n = b(e), r = b(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = C(e), r = C(t), n || r) return e === t;
	if (n = _(e), r = _(t), n || r) return n && r ? Le(e, t) : !1;
	if (n = w(e), r = w(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !M(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function Re(e, t) {
	return e.findIndex((e) => M(e, t));
}
function ze(e) {
	return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
//#endregion
//#region node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var N, Be = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && N && (N.active ? (this.parent = N, this.index = (N.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = N;
			try {
				return N = this, e();
			} finally {
				N = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = N, N = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (N === this) N = this.prevScope;
			else {
				let e = N;
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
function Ve() {
	return N;
}
var P, He = /* @__PURE__ */ new WeakSet(), Ue = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, N && (N.active ? N.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, He.has(this) && (He.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, at(this), Xe(this);
		let e = P, t = F;
		P = this, F = !0;
		try {
			return this.fn();
		} finally {
			Ze(this), P = e, F = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) et(e);
			this.deps = this.depsTail = void 0, at(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? He.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Qe(this) && this.run();
	}
	get dirty() {
		return Qe(this);
	}
}, We = 0, Ge, Ke;
function qe(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ke, Ke = e;
		return;
	}
	e.next = Ge, Ge = e;
}
function Je() {
	We++;
}
function Ye() {
	if (--We > 0) return;
	if (Ke) {
		let e = Ke;
		for (Ke = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ge;) {
		let t = Ge;
		for (Ge = void 0; t;) {
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
function Xe(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ze(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), et(r), tt(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Qe(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && ($e(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function $e(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ot) || (e.globalVersion = ot, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Qe(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = P, r = F;
	P = e, F = !0;
	try {
		Xe(e);
		let n = e.fn(e._value);
		(t.version === 0 || A(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		P = n, F = r, Ze(e), e.flags &= -3;
	}
}
function et(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) et(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function tt(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var F = !0, nt = [];
function rt() {
	nt.push(F), F = !1;
}
function it() {
	let e = nt.pop();
	F = e === void 0 || e;
}
function at(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = P;
		P = void 0;
		try {
			t();
		} finally {
			P = e;
		}
	}
}
var ot = 0, st = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, ct = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!P || !F || P === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== P) t = this.activeLink = new st(P, this), P.deps ? (t.prevDep = P.depsTail, P.depsTail.nextDep = t, P.depsTail = t) : P.deps = P.depsTail = t, lt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = P.depsTail, t.nextDep = void 0, P.depsTail.nextDep = t, P.depsTail = t, P.deps === t && (P.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, ot++, this.notify(e);
	}
	notify(e) {
		Je();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ye();
		}
	}
};
function lt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) lt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var ut = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ Symbol(""), ft = /* @__PURE__ */ Symbol(""), pt = /* @__PURE__ */ Symbol("");
function I(e, t, n) {
	if (F && P) {
		let t = ut.get(e);
		t || ut.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new ct()), r.map = t, r.key = n), r.track();
	}
}
function mt(e, t, n, r, i, a) {
	let o = ut.get(e);
	if (!o) {
		ot++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Je(), t === "clear") o.forEach(s);
	else {
		let i = _(e), a = i && re(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === pt || !C(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(pt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(dt)), v(e) && s(o.get(ft)));
				break;
			case "delete":
				i || (s(o.get(dt)), v(e) && s(o.get(ft)));
				break;
			case "set":
				v(e) && s(o.get(dt));
				break;
		}
	}
	Ye();
}
function ht(e) {
	let t = /* @__PURE__ */ B(e);
	return t === e ? t : (I(t, "iterate", pt), /* @__PURE__ */ z(e) ? t : t.map(en));
}
function gt(e) {
	return I(e = /* @__PURE__ */ B(e), "iterate", pt), e;
}
function L(e, t) {
	return /* @__PURE__ */ Zt(e) ? tn(/* @__PURE__ */ Xt(e) ? en(t) : t) : en(t);
}
var _t = {
	__proto__: null,
	[Symbol.iterator]() {
		return vt(this, Symbol.iterator, (e) => L(this, e));
	},
	concat(...e) {
		return ht(this).concat(...e.map((e) => _(e) ? ht(e) : e));
	},
	entries() {
		return vt(this, "entries", (e) => (e[1] = L(this, e[1]), e));
	},
	every(e, t) {
		return R(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return R(this, "filter", e, t, (e) => e.map((e) => L(this, e)), arguments);
	},
	find(e, t) {
		return R(this, "find", e, t, (e) => L(this, e), arguments);
	},
	findIndex(e, t) {
		return R(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return R(this, "findLast", e, t, (e) => L(this, e), arguments);
	},
	findLastIndex(e, t) {
		return R(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return R(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return xt(this, "includes", e);
	},
	indexOf(...e) {
		return xt(this, "indexOf", e);
	},
	join(e) {
		return ht(this).join(e);
	},
	lastIndexOf(...e) {
		return xt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return R(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return St(this, "pop");
	},
	push(...e) {
		return St(this, "push", e);
	},
	reduce(e, ...t) {
		return bt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return bt(this, "reduceRight", e, t);
	},
	shift() {
		return St(this, "shift");
	},
	some(e, t) {
		return R(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return St(this, "splice", e);
	},
	toReversed() {
		return ht(this).toReversed();
	},
	toSorted(e) {
		return ht(this).toSorted(e);
	},
	toSpliced(...e) {
		return ht(this).toSpliced(...e);
	},
	unshift(...e) {
		return St(this, "unshift", e);
	},
	values() {
		return vt(this, "values", (e) => L(this, e));
	}
};
function vt(e, t, n) {
	let r = gt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ z(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var yt = Array.prototype;
function R(e, t, n, r, i, a) {
	let o = gt(e), s = o !== e && !/* @__PURE__ */ z(e), c = o[t];
	if (c !== yt[t]) {
		let t = c.apply(e, a);
		return s ? en(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, L(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function bt(e, t, n, r) {
	let i = gt(e), a = i !== e && !/* @__PURE__ */ z(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = L(e, t)), n.call(this, t, L(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? L(e, c) : c;
}
function xt(e, t, n) {
	let r = /* @__PURE__ */ B(e);
	I(r, "iterate", pt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Qt(n[0]) ? (n[0] = /* @__PURE__ */ B(n[0]), r[t](...n)) : i;
}
function St(e, t, n = []) {
	rt(), Je();
	let r = (/* @__PURE__ */ B(e))[t].apply(e, n);
	return Ye(), it(), r;
}
var Ct = /* @__PURE__ */ o("__proto__,__v_isRef,__isVue"), wt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(C));
function Tt(e) {
	C(e) || (e = String(e));
	let t = /* @__PURE__ */ B(this);
	return I(t, "has", e), t.hasOwnProperty(e);
}
var Et = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Wt : Ut : i ? Ht : Vt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = _(e);
		if (!r) {
			let e;
			if (a && (e = _t[t])) return e;
			if (t === "hasOwnProperty") return Tt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ V(e) ? e : n);
		if ((C(t) ? wt.has(t) : Ct(t)) || (r || I(e, "get", t), i)) return o;
		if (/* @__PURE__ */ V(o)) {
			let e = a && re(t) ? o : o.value;
			return r && w(e) ? /* @__PURE__ */ Jt(e) : e;
		}
		return w(o) ? r ? /* @__PURE__ */ Jt(o) : /* @__PURE__ */ Kt(o) : o;
	}
}, Dt = class extends Et {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = _(e) && re(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Zt(i);
			if (!/* @__PURE__ */ z(n) && !/* @__PURE__ */ Zt(n) && (i = /* @__PURE__ */ B(i), n = /* @__PURE__ */ B(n)), !a && /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : g(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ V(e) ? e : r);
		return e === /* @__PURE__ */ B(r) && s && (o ? A(n, i) && mt(e, "set", t, n, i) : mt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = g(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && mt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!C(t) || !wt.has(t)) && I(e, "has", t), n;
	}
	ownKeys(e) {
		return I(e, "iterate", _(e) ? "length" : dt), Reflect.ownKeys(e);
	}
}, Ot = class extends Et {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, kt = /* @__PURE__ */ new Dt(), At = /* @__PURE__ */ new Ot(), jt = /* @__PURE__ */ new Dt(!0), Mt = (e) => e, Nt = (e) => Reflect.getPrototypeOf(e);
function Pt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ B(i), o = v(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? Mt : t ? tn : en;
		return !t && I(a, "iterate", c ? ft : dt), p(Object.create(l), { next() {
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
function Ft(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function It(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ B(r), a = /* @__PURE__ */ B(n);
			e || (A(n, a) && I(i, "get", n), I(i, "get", a));
			let { has: o } = Nt(i), s = t ? Mt : e ? tn : en;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && I(/* @__PURE__ */ B(t), "iterate", dt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ B(n), i = /* @__PURE__ */ B(t);
			return e || (A(t, i) && I(r, "has", t), I(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ B(a), s = t ? Mt : e ? tn : en;
			return !e && I(o, "iterate", dt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return p(n, e ? {
		add: Ft("add"),
		set: Ft("set"),
		delete: Ft("delete"),
		clear: Ft("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ B(this), r = Nt(n), i = /* @__PURE__ */ B(e), a = !t && !/* @__PURE__ */ z(e) && !/* @__PURE__ */ Zt(e) ? i : e;
			return r.has.call(n, a) || A(e, a) && r.has.call(n, e) || A(i, a) && r.has.call(n, i) || (n.add(a), mt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ z(n) && !/* @__PURE__ */ Zt(n) && (n = /* @__PURE__ */ B(n));
			let r = /* @__PURE__ */ B(this), { has: i, get: a } = Nt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ B(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? A(n, s) && mt(r, "set", e, n, s) : mt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ B(this), { has: n, get: r } = Nt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ B(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && mt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ B(this), t = e.size !== 0, n = e.clear();
			return t && mt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Pt(r, e, t);
	}), n;
}
function Lt(e, t) {
	let n = It(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(g(n, r) && r in t ? n : t, r, i);
}
var Rt = { get: /* @__PURE__ */ Lt(!1, !1) }, zt = { get: /* @__PURE__ */ Lt(!1, !0) }, Bt = { get: /* @__PURE__ */ Lt(!0, !1) }, Vt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap();
function Gt(e) {
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
function Kt(e) {
	return /* @__PURE__ */ Zt(e) ? e : Yt(e, !1, kt, Rt, Vt);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return Yt(e, !1, jt, zt, Ht);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return Yt(e, !0, At, Bt, Ut);
}
function Yt(e, t, n, r, i) {
	if (!w(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Gt(te(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return /* @__PURE__ */ Zt(e) ? /* @__PURE__ */ Xt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function z(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ B(t) : e;
}
function $t(e) {
	return !g(e, "__v_skip") && Object.isExtensible(e) && ue(e, "__v_skip", !0), e;
}
var en = (e) => w(e) ? /* @__PURE__ */ Kt(e) : e, tn = (e) => w(e) ? /* @__PURE__ */ Jt(e) : e;
// @__NO_SIDE_EFFECTS__
function V(e) {
	return e ? e.__v_isRef === !0 : !1;
}
function nn(e) {
	return /* @__PURE__ */ V(e) ? e.value : e;
}
var rn = {
	get: (e, t, n) => t === "__v_raw" ? e : nn(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function an(e) {
	return /* @__PURE__ */ Xt(e) ? e : new Proxy(e, rn);
}
var on = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new ct(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ot - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && P !== this) return qe(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return $e(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function sn(e, t, n = !1) {
	let r, i;
	return x(e) ? r = e : (r = e.get, i = e.set), new on(r, i, n);
}
var cn = {}, ln = /* @__PURE__ */ new WeakMap(), un = void 0;
function dn(e, t = !1, n = un) {
	if (n) {
		let t = ln.get(n);
		t || ln.set(n, t = []), t.push(e);
	}
}
function fn(e, t, n = s) {
	let { immediate: r, deep: i, once: a, scheduler: o, augmentJob: c, call: u } = n, d = (e) => i ? e : /* @__PURE__ */ z(e) || i === !1 || i === 0 ? pn(e, 1) : pn(e), f, p, h, g, v = !1, y = !1;
	if (/* @__PURE__ */ V(e) ? (p = () => e.value, v = /* @__PURE__ */ z(e)) : /* @__PURE__ */ Xt(e) ? (p = () => d(e), v = !0) : _(e) ? (y = !0, v = e.some((e) => /* @__PURE__ */ Xt(e) || /* @__PURE__ */ z(e)), p = () => e.map((e) => {
		if (/* @__PURE__ */ V(e)) return e.value;
		if (/* @__PURE__ */ Xt(e)) return d(e);
		if (x(e)) return u ? u(e, 2) : e();
	})) : p = x(e) ? t ? u ? () => u(e, 2) : e : () => {
		if (h) {
			rt();
			try {
				h();
			} finally {
				it();
			}
		}
		let t = un;
		un = f;
		try {
			return u ? u(e, 3, [g]) : e(g);
		} finally {
			un = t;
		}
	} : l, t && i) {
		let e = p, t = i === !0 ? Infinity : i;
		p = () => pn(e(), t);
	}
	let b = Ve(), S = () => {
		f.stop(), b && b.active && m(b.effects, f);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = y ? Array(e.length).fill(cn) : cn, w = (e) => {
		if (!(!(f.flags & 1) || !f.dirty && !e)) if (t) {
			let n = f.run();
			if (e || i || v || (y ? n.some((e, t) => A(e, C[t])) : A(n, C))) {
				h && h();
				let e = un;
				un = f;
				try {
					let e = [
						n,
						C === cn ? void 0 : y && C[0] === cn ? [] : C,
						g
					];
					C = n, u ? u(t, 3, e) : t(...e);
				} finally {
					un = e;
				}
			}
		} else f.run();
	};
	return c && c(w), f = new Ue(p), f.scheduler = o ? () => o(w, !1) : w, g = (e) => dn(e, !1, f), h = f.onStop = () => {
		let e = ln.get(f);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			ln.delete(f);
		}
	}, t ? r ? w(!0) : C = f.run() : o ? o(w.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function pn(e, t = Infinity, n) {
	if (t <= 0 || !w(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ V(e)) pn(e.value, t, n);
	else if (_(e)) for (let r = 0; r < e.length; r++) pn(e[r], t, n);
	else if (y(e) || v(e)) e.forEach((e) => {
		pn(e, t, n);
	});
	else if (ne(e)) {
		for (let r in e) pn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && pn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var mn = [];
function hn(e) {
	mn.push(e);
}
function gn() {
	mn.pop();
}
function _n(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		vn(e, t, n);
	}
}
function H(e, t, n, r) {
	if (x(e)) {
		let i = _n(e, t, n, r);
		return i && T(i) && i.catch((e) => {
			vn(e, t, n);
		}), i;
	}
	if (_(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(H(e[a], t, n, r));
		return i;
	}
}
function vn(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || s;
	if (t) {
		let r = t.parent, i = t.proxy, o = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, o) === !1) return;
			}
			r = r.parent;
		}
		if (a) {
			rt(), _n(a, null, 10, [
				e,
				i,
				o
			]), it();
			return;
		}
	}
	yn(e, n, i, r, o);
}
function yn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var U = [], W = -1, bn = [], xn = null, Sn = 0, Cn = /* @__PURE__ */ Promise.resolve(), wn = null;
function Tn(e) {
	let t = wn || Cn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function En(e) {
	let t = W + 1, n = U.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = U[r], a = Mn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Dn(e) {
	if (!(e.flags & 1)) {
		let t = Mn(e), n = U[U.length - 1];
		!n || !(e.flags & 2) && t >= Mn(n) ? U.push(e) : U.splice(En(t), 0, e), e.flags |= 1, On();
	}
}
function On() {
	wn ||= Cn.then(Nn);
}
function kn(e) {
	_(e) ? bn.push(...e) : xn && e.id === -1 ? xn.splice(Sn + 1, 0, e) : e.flags & 1 || (bn.push(e), e.flags |= 1), On();
}
function An(e, t, n = W + 1) {
	for (; n < U.length; n++) {
		let t = U[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			U.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function jn(e) {
	if (bn.length) {
		let e = [...new Set(bn)].sort((e, t) => Mn(e) - Mn(t));
		if (bn.length = 0, xn) {
			xn.push(...e);
			return;
		}
		for (xn = e, Sn = 0; Sn < xn.length; Sn++) {
			let e = xn[Sn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		xn = null, Sn = 0;
	}
}
var Mn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Nn(e) {
	try {
		for (W = 0; W < U.length; W++) {
			let e = U[W];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), _n(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; W < U.length; W++) {
			let e = U[W];
			e && (e.flags &= -2);
		}
		W = -1, U.length = 0, jn(e), wn = null, (U.length || bn.length) && Nn(e);
	}
}
var G = null, Pn = null;
function Fn(e) {
	let t = G;
	return G = e, Pn = e && e.type.__scopeId || null, t;
}
function In(e, t = G, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && zi(-1);
		let i = Fn(t), a = Fi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Fi.length; e > a; e--) Li();
			Fn(i), r._d && zi(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ln(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (rt(), H(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), it());
	}
}
function Rn(e, t) {
	if (Q) {
		let n = Q.provides, r = Q.parent && Q.parent.provides;
		r === n && (n = Q.provides = Object.create(r)), n[e] = t;
	}
}
function zn(e, t, n = !1) {
	let r = ta();
	if (r || Ur) {
		let i = Ur ? Ur._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && x(t) ? t.call(r && r.proxy) : t;
	}
}
var Bn = /* @__PURE__ */ Symbol.for("v-scx"), Vn = () => zn(Bn);
function Hn(e, t, n) {
	return Un(e, t, n);
}
function Un(e, t, n = s) {
	let { immediate: r, deep: i, flush: a, once: o } = n, c = p({}, n), u = t && r || !t && a !== "post", d;
	if (sa) {
		if (a === "sync") {
			let e = Vn();
			d = e.__watcherHandles ||= [];
		} else if (!u) {
			let e = () => {};
			return e.stop = l, e.resume = l, e.pause = l, e;
		}
	}
	let f = Q;
	c.call = (e, t, n) => H(e, f, t, n);
	let m = !1;
	a === "post" ? c.scheduler = (e) => {
		q(e, f && f.suspense);
	} : a !== "sync" && (m = !0, c.scheduler = (e, t) => {
		t ? e() : Dn(e);
	}), c.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, f && (e.id = f.uid, e.i = f));
	};
	let h = fn(e, t, c);
	return sa && (d ? d.push(h) : u && h()), h;
}
function Wn(e, t, n) {
	let r = this.proxy, i = S(e) ? e.includes(".") ? Gn(r, e) : () => r[e] : e.bind(r, r), a;
	x(t) ? a = t : (a = t.handler, n = t);
	let o = ia(this), s = Un(i, a.bind(r), n);
	return o(), s;
}
function Gn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Kn = /* @__PURE__ */ Symbol("_vte"), qn = (e) => e.__isTeleport, Jn = /* @__PURE__ */ Symbol("_leaveCb");
function Yn(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, Yn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Xn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Zn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Qn = /* @__PURE__ */ new WeakMap();
function $n(e, t, n, r, i = !1) {
	if (_(e)) {
		e.forEach((e, a) => $n(e, t && (_(t) ? t[a] : t), n, r, i));
		return;
	}
	if (tr(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && $n(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? ga(r.component) : r.el, o = i ? null : a, { i: c, r: l } = e, d = t && t.r, f = c.refs === s ? c.refs = {} : c.refs, p = c.setupState, h = /* @__PURE__ */ B(p), v = p === s ? u : (e) => !Zn(f, e) && g(h, e), y = (e, t) => !(t && Zn(f, t));
	if (d != null && d !== l) {
		if (er(t), S(d)) f[d] = null, v(d) && (p[d] = null);
		else if (/* @__PURE__ */ V(d)) {
			let e = t;
			y(d, e.k) && (d.value = null), e.k && (f[e.k] = null);
		}
	}
	if (x(l)) _n(l, c, 12, [o, f]);
	else {
		let t = S(l), r = /* @__PURE__ */ V(l);
		if (t || r) {
			let s = () => {
				if (e.f) {
					let n = t ? v(l) ? p[l] : f[l] : y(l) || !e.k ? l.value : f[e.k];
					if (i) _(n) && m(n, a);
					else if (_(n)) n.includes(a) || n.push(a);
					else if (t) f[l] = [a], v(l) && (p[l] = f[l]);
					else {
						let t = [a];
						y(l, e.k) && (l.value = t), e.k && (f[e.k] = t);
					}
				} else t ? (f[l] = o, v(l) && (p[l] = o)) : r && (y(l, e.k) && (l.value = o), e.k && (f[e.k] = o));
			};
			if (o) {
				let t = () => {
					s(), Qn.delete(e);
				};
				t.id = -1, Qn.set(e, t), q(t, n);
			} else er(e), s();
		}
	}
}
function er(e) {
	let t = Qn.get(e);
	t && (t.flags |= 8, Qn.delete(e));
}
pe().requestIdleCallback, pe().cancelIdleCallback;
var tr = (e) => !!e.type.__asyncLoader, nr = (e) => e.type.__isKeepAlive;
function rr(e, t) {
	ar(e, "a", t);
}
function ir(e, t) {
	ar(e, "da", t);
}
function ar(e, t, n = Q) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (sr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) nr(e.parent.vnode) && or(r, t, n, e), e = e.parent;
	}
}
function or(e, t, n, r) {
	let i = sr(t, e, r, !0);
	mr(() => {
		m(r[t], i);
	}, n);
}
function sr(e, t, n = Q, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			rt();
			let i = ia(n), a = H(t, n, e, r);
			return i(), it(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var cr = (e) => (t, n = Q) => {
	(!sa || e === "sp") && sr(e, (...e) => t(...e), n);
}, lr = cr("bm"), ur = cr("m"), dr = cr("bu"), fr = cr("u"), pr = cr("bum"), mr = cr("um"), hr = cr("sp"), gr = cr("rtg"), _r = cr("rtc");
function vr(e, t = Q) {
	sr("ec", e, t);
}
var yr = /* @__PURE__ */ Symbol.for("v-ndc");
function br(e) {
	return e.some((e) => !Bi(e) || !(e.type === Ni || e.type === J && !br(e.children))) ? e : null;
}
var xr = (e) => e ? oa(e) ? ga(e) : xr(e.parent) : null, Sr = /* @__PURE__ */ p(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => xr(e.parent),
	$root: (e) => xr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => jr(e),
	$forceUpdate: (e) => e.f ||= () => {
		Dn(e.update);
	},
	$nextTick: (e) => e.n ||= Tn.bind(e.proxy),
	$watch: (e) => Wn.bind(e)
}), Cr = (e, t) => e !== s && !e.__isScriptSetup && g(e, t), wr = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: r, data: i, props: a, accessCache: o, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = o[t];
			if (e !== void 0) switch (e) {
				case 1: return r[t];
				case 2: return i[t];
				case 4: return n[t];
				case 3: return a[t];
			}
			else if (Cr(r, t)) return o[t] = 1, r[t];
			else if (i !== s && g(i, t)) return o[t] = 2, i[t];
			else if (g(a, t)) return o[t] = 3, a[t];
			else if (n !== s && g(n, t)) return o[t] = 4, n[t];
			else Er && (o[t] = 0);
		}
		let u = Sr[t], d, f;
		if (u) return t === "$attrs" && I(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== s && g(n, t)) return o[t] = 4, n[t];
		if (f = l.config.globalProperties, g(f, t)) return f[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return Cr(i, t) ? (i[t] = n, !0) : r !== s && g(r, t) ? (r[t] = n, !0) : g(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, c) {
		let l;
		return !!(n[c] || e !== s && c[0] !== "$" && g(e, c) || Cr(t, c) || g(a, c) || g(r, c) || g(Sr, c) || g(i.config.globalProperties, c) || (l = o.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? g(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Tr(e) {
	return _(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Er = !0;
function Dr(e) {
	let t = jr(e), n = e.proxy, r = e.ctx;
	Er = !1, t.beforeCreate && kr(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: s, provide: c, inject: u, created: d, beforeMount: f, mounted: p, beforeUpdate: m, updated: h, activated: g, deactivated: v, beforeDestroy: y, beforeUnmount: b, destroyed: S, unmounted: C, render: T, renderTracked: ee, renderTriggered: E, errorCaptured: te, serverPrefetch: ne, expose: re, inheritAttrs: ie, components: ae, directives: oe, filters: D } = t;
	if (u && Or(u, r, null), o) for (let e in o) {
		let t = o[e];
		x(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		w(t) && (e.data = /* @__PURE__ */ Kt(t));
	}
	if (Er = !0, a) for (let e in a) {
		let t = a[e], i = va({
			get: x(t) ? t.bind(n, n) : x(t.get) ? t.get.bind(n, n) : l,
			set: !x(t) && x(t.set) ? t.set.bind(n) : l
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (s) for (let e in s) Ar(s[e], r, n, e);
	if (c) {
		let e = x(c) ? c.call(n) : c;
		Reflect.ownKeys(e).forEach((t) => {
			Rn(t, e[t]);
		});
	}
	d && kr(d, e, "c");
	function O(e, t) {
		_(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (O(lr, f), O(ur, p), O(dr, m), O(fr, h), O(rr, g), O(ir, v), O(vr, te), O(_r, ee), O(gr, E), O(pr, b), O(mr, C), O(hr, ne), _(re)) if (re.length) {
		let t = e.exposed ||= {};
		re.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	T && e.render === l && (e.render = T), ie != null && (e.inheritAttrs = ie), ae && (e.components = ae), oe && (e.directives = oe), ne && Xn(e);
}
function Or(e, t, n = l) {
	_(e) && (e = Ir(e));
	for (let n in e) {
		let r = e[n], i;
		i = w(r) ? "default" in r ? zn(r.from || n, r.default, !0) : zn(r.from || n) : zn(r), /* @__PURE__ */ V(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function kr(e, t, n) {
	H(_(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ar(e, t, n, r) {
	let i = r.includes(".") ? Gn(n, r) : () => n[r];
	if (S(e)) {
		let n = t[e];
		x(n) && Hn(i, n);
	} else if (x(e)) Hn(i, e.bind(n));
	else if (w(e)) if (_(e)) e.forEach((e) => Ar(e, t, n, r));
	else {
		let r = x(e.handler) ? e.handler.bind(n) : t[e.handler];
		x(r) && Hn(i, r, e);
	}
}
function jr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Mr(c, e, o, !0)), Mr(c, t, o)), w(t) && a.set(t, c), c;
}
function Mr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Mr(e, a, n, !0), i && i.forEach((t) => Mr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Nr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Nr = {
	data: Pr,
	props: Rr,
	emits: Rr,
	methods: Lr,
	computed: Lr,
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
	components: Lr,
	directives: Lr,
	watch: zr,
	provide: Pr,
	inject: Fr
};
function Pr(e, t) {
	return t ? e ? function() {
		return p(x(e) ? e.call(this, this) : e, x(t) ? t.call(this, this) : t);
	} : t : e;
}
function Fr(e, t) {
	return Lr(Ir(e), Ir(t));
}
function Ir(e) {
	if (_(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function K(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Lr(e, t) {
	return e ? p(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Rr(e, t) {
	return e ? _(e) && _(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : p(/* @__PURE__ */ Object.create(null), Tr(e), Tr(t ?? {})) : t;
}
function zr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = p(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = K(e[r], t[r]);
	return n;
}
function Br() {
	return {
		app: null,
		config: {
			isNativeTag: u,
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
var Vr = 0;
function Hr(e, t) {
	return function(n, r = null) {
		x(n) || (n = p({}, n)), r != null && !w(r) && (r = null);
		let i = Br(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Vr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: ya,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && x(e.install) ? (a.add(e), e.install(c, ...t)) : x(e) && (a.add(e), e(c, ...t))), c;
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
					let u = c._ceVNode || Gi(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, ga(u.component);
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
				let t = Ur;
				Ur = c;
				try {
					return e();
				} finally {
					Ur = t;
				}
			}
		};
		return c;
	};
}
var Ur = null, Wr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${D(t)}Modifiers`] || e[`${k(t)}Modifiers`];
function Gr(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || s, i = n, a = t.startsWith("update:"), o = a && Wr(r, t.slice(7));
	o && (o.trim && (i = n.map((e) => S(e) ? e.trim() : e)), o.number && (i = n.map(de)));
	let c, l = r[c = ce(t)] || r[c = ce(D(t))];
	!l && a && (l = r[c = ce(k(t))]), l && H(l, e, 6, i);
	let u = r[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, H(u, e, 6, i);
	}
}
var Kr = /* @__PURE__ */ new WeakMap();
function qr(e, t, n = !1) {
	let r = n ? Kr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!x(e)) {
		let r = (e) => {
			let n = qr(e, t, !0);
			n && (s = !0, p(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (w(e) && r.set(e, null), null) : (_(a) ? a.forEach((e) => o[e] = null) : p(o, a), w(e) && r.set(e, o), o);
}
function Jr(e, t) {
	return !e || !d(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), g(e, t[0].toLowerCase() + t.slice(1)) || g(e, k(t)) || g(e, t));
}
function Yr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Fn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Y(l.call(t, e, u, d, m, p, h)), y = s;
		} else {
			let e = t;
			v = Y(e.length > 1 ? e(d, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(d, null)), y = t.props ? s : Xr(s);
		}
	} catch (t) {
		Fi.length = 0, vn(t, e, 1), v = Gi(Ni);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(f) && (y = Zr(y, a)), b = Ji(b, y, !1, !0));
	}
	return n.dirs && (b = Ji(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Yn(b, n.transition), v = b, Fn(_), v;
}
var Xr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || d(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Zr = (e, t) => {
	let n = {};
	for (let r in e) (!f(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Qr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? $r(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (ei(o, r, n) && !Jr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || $r(r, o, l) : !!o;
	return !1;
}
function $r(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (ei(t, e, a) && !Jr(n, a)) return !0;
	}
	return !1;
}
function ei(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && w(r) && w(i) ? !M(r, i) : r !== i;
}
function ti({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ni = {}, ri = () => Object.create(ni), ii = (e) => Object.getPrototypeOf(e) === ni;
function ai(e, t, n, r = !1) {
	let i = {}, a = ri();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), si(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ qt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function oi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ B(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Jr(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (g(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = D(o);
					i[t] = ci(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		si(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !g(t, a) && ((r = k(a)) === a || !g(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = ci(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !g(t, e)) && (delete a[e], l = !0);
	}
	l && mt(e.attrs, "set", "");
}
function si(e, t, n, r) {
	let [i, a] = e.propsOptions, o = !1, c;
	if (t) for (let s in t) {
		if (ie(s)) continue;
		let l = t[s], u;
		i && g(i, u = D(s)) ? !a || !a.includes(u) ? n[u] = l : (c ||= {})[u] = l : Jr(e.emitsOptions, s) || (!(s in r) || l !== r[s]) && (r[s] = l, o = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ B(n), r = c || s;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = ci(i, t, s, r[s], e, !g(r, s));
		}
	}
	return o;
}
function ci(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = g(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && x(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = ia(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === k(n)) && (r = !0));
	}
	return r;
}
var li = /* @__PURE__ */ new WeakMap();
function ui(e, t, n = !1) {
	let r = n ? li : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, o = {}, l = [], u = !1;
	if (!x(e)) {
		let r = (e) => {
			u = !0;
			let [n, r] = ui(e, t, !0);
			p(o, n), r && l.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !u) return w(e) && r.set(e, c), c;
	if (_(a)) for (let e = 0; e < a.length; e++) {
		let t = D(a[e]);
		di(t) && (o[t] = s);
	}
	else if (a) for (let e in a) {
		let t = D(e);
		if (di(t)) {
			let n = a[e], r = o[t] = _(n) || x(n) ? { type: n } : p({}, n), i = r.type, s = !1, c = !0;
			if (_(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = x(t) && t.name;
				if (n === "Boolean") {
					s = !0;
					break;
				} else n === "String" && (c = !1);
			}
			else s = x(i) && i.name === "Boolean";
			r[0] = s, r[1] = c, (s || g(r, "default")) && l.push(t);
		}
	}
	let d = [o, l];
	return w(e) && r.set(e, d), d;
}
function di(e) {
	return e[0] !== "$" && !ie(e);
}
var fi = (e) => e === "_" || e === "_ctx" || e === "$stable", pi = (e) => _(e) ? e.map(Y) : [Y(e)], mi = (e, t, n) => {
	if (t._n) return t;
	let r = In((...e) => pi(t(...e)), n);
	return r._c = !1, r;
}, hi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (fi(n)) continue;
		let i = e[n];
		if (x(i)) t[n] = mi(n, i, r);
		else if (i != null) {
			let e = pi(i);
			t[n] = () => e;
		}
	}
}, gi = (e, t) => {
	let n = pi(t);
	e.slots.default = () => n;
}, _i = (e, t, n) => {
	for (let r in t) (n || !fi(r)) && (e[r] = t[r]);
}, vi = (e, t, n) => {
	let r = e.slots = ri();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (_i(r, t, n), n && ue(r, "_", e, !0)) : hi(t, r);
	} else t && gi(e, t);
}, yi = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, o = s;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : _i(i, t, n) : (a = !t.$stable, hi(t, i)), o = t;
	} else t && (gi(e, t), o = { default: 1 });
	if (a) for (let e in i) !fi(e) && o[e] == null && delete i[e];
}, q = ji;
function bi(e) {
	return xi(e);
}
function xi(e, t) {
	let n = pe();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: o, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = l, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Vi(e, t) && (r = ve(e), fe(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Mi:
				y(e, t, n, r);
				break;
			case Ni:
				b(e, t, n, r);
				break;
			case Pi:
				e ?? x(t, n, r, o);
				break;
			case J:
				ae(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? oe(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, xe);
		}
		u != null && i ? $n(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && $n(e.ref, null, a, e, !0);
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
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) T(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), te(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, T = (e, t, n, i, s, c, l, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = o(e.type, c, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && E(e.children, d, null, i, s, Si(e, c), l, u), _ && Ln(e, null, i, "created"), ee(d, e, e.scopeId, l, i), m) {
			for (let e in m) e !== "value" && !ie(e) && a(d, e, null, m[e], c, i);
			"value" in m && a(d, "value", null, m.value, c), (f = m.onVnodeBeforeMount) && Z(f, i, e);
		}
		_ && Ln(e, null, i, "beforeMount");
		let v = wi(s, g);
		v && g.beforeEnter(d), r(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && q(() => {
			try {
				f && Z(f, i, e), v && g.enter(d), _ && Ln(e, null, i, "mounted");
			} finally {}
		}, s);
	}, ee = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Ai(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ee(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, E = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? X(e[l]) : Y(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, te = (e, t, n, r, i, o, c) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || s, h = t.props || s, g;
		if (n && Ci(n, !1), (g = h.onVnodeBeforeUpdate) && Z(g, n, t, e), f && Ln(t, e, n, "beforeUpdate"), n && Ci(n, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, c = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ne(e.dynamicChildren, d, l, n, r, Si(t, i), o) : c || ce(e, t, l, null, n, r, Si(t, i), o, !1), u > 0) {
			if (u & 16) re(l, m, h, n, i);
			else if (u & 2 && m.class !== h.class && a(l, "class", null, h.class, i), u & 4 && a(l, "style", m.style, h.style, i), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], o = m[r], s = h[r];
					(s !== o || r === "value") && a(l, r, o, s, i, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !c && d == null && re(l, m, h, n, i);
		((g = h.onVnodeUpdated) || f) && q(() => {
			g && Z(g, n, t, e), f && Ln(t, e, n, "updated");
		}, r);
	}, ne = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el && (c.type === J || !Vi(c, l) || c.shapeFlag & 198) ? m(c.el) : n;
			v(c, l, u, null, r, i, a, o, !0);
		}
	}, re = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== s) for (let o in t) !ie(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (ie(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, ae = (e, t, n, i, a, o, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), E(t.children || [], n, f, a, o, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ne(e.dynamicChildren, m, n, a, o, s, c), (t.key != null || a && t === a.subTree) && Ti(e, t, !0)) : ce(e, t, n, f, a, o, s, c, l);
	}, oe = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : D(t, n, r, i, a, o, c) : O(e, t, c);
	}, D = (e, t, n, r, i, a, o) => {
		let s = e.component = ea(e, r, i);
		if (nr(e) && (s.ctx.renderer = xe), ca(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, k, o), !e.el) {
				let r = s.subTree = Gi(Ni);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else k(s, e, t, n, i, a, o);
	}, O = (e, t, n) => {
		let r = t.component = e.component;
		if (Qr(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			se(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, k = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Di(e);
					if (n) {
						t && (t.el = c.el, se(e, t, o)), n.asyncDep.then(() => {
							q(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Ci(e, !1), t ? (t.el = c.el, se(e, t, o)) : t = c, n && le(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Z(d, s, t, c), Ci(e, !0);
				let f = Yr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), ve(p), e, i, a), t.el = f.el, u === null && ti(e, f.el), r && q(r, i), (d = t.props && t.props.onVnodeUpdated) && q(() => Z(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = tr(t);
				if (Ci(e, !1), l && le(l), !m && (o = c && c.onVnodeBeforeMount) && Z(o, d, t), Ci(e, !0), s && Ce) {
					let t = () => {
						e.subTree = Yr(e), Ce(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Yr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && q(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					q(() => Z(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && tr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && q(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ue(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Dn(u), Ci(e, !0), l();
	}, se = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, oi(e, t.props, r, n), yi(e, t.children, n), rt(), An(e), it();
	}, ce = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				ue(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				A(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && _e(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? ue(l, d, n, r, i, a, o, s, c) : _e(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && E(d, n, r, i, a, o, s, c));
	}, A = (e, t, n, r, i, a, o, s, l) => {
		e ||= c, t ||= c;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? X(t[p]) : Y(t[p]);
			v(e[p], r, n, null, i, a, o, s, l);
		}
		u > d ? _e(e, i, a, !0, !1, f) : E(t, n, r, i, a, o, s, l, f);
	}, ue = (e, t, n, r, i, a, o, s, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], c = t[u] = l ? X(t[u]) : Y(t[u]);
			if (Vi(r, c)) v(r, c, n, null, i, a, o, s, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], c = t[p] = l ? X(t[p]) : Y(t[p]);
			if (Vi(r, c)) v(r, c, n, null, i, a, o, s, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, c = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? X(t[u]) : Y(t[u]), n, c, i, a, o, s, l), u++;
			}
		} else if (u > p) for (; u <= f;) fe(e[u], i, a, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? X(t[u]) : Y(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					fe(r, i, a, !0);
					continue;
				}
				let c;
				if (r.key != null) c = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Vi(r, t[_])) {
					c = _;
					break;
				}
				c === void 0 ? fe(r, i, a, !0) : (C[c - h] = u + 1, c >= S ? S = c : x = !0, v(r, t[c], n, null, i, a, o, s, l), y++);
			}
			let w = x ? Ei(C) : c;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, c = t[e], f = t[e + 1], p = e + 1 < d ? f.el || ki(f) : r;
				C[u] === 0 ? v(null, c, n, p, i, a, o, s, l) : x && (_ < 0 || u !== w[_] ? de(c, n, p, 2) : _--);
			}
		}
	}, de = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			de(e.component.subTree, t, n, a);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, a);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, xe);
			return;
		}
		if (c === J) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) de(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === Pi) {
			S(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) if (a === 0) l.persisted && !s[Jn] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), q(() => l.enter(s), o));
		else {
			let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? i(s) : r(s, t, n);
			}, d = () => {
				let e = s._isLeaving || !!s[Jn];
				s._isLeaving && s[Jn](!0), l.persisted && !e ? u() : a(s, () => {
					u(), c && c();
				});
			};
			o ? o(s, u, d) : d();
		}
		else r(s, t, n);
	}, fe = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (rt(), $n(s, null, n, e, !0), it()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !tr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Z(_, t, e), u & 6) ge(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Ln(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, xe, r) : l && !l.hasOnce && (a !== J || d > 0 && d & 64) ? _e(l, t, n, !1, !0) : (a === J && d & 384 || !i && u & 16) && _e(c, t, n), r && me(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && q(() => {
			_ && Z(_, t, e), h && Ln(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, me = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === J) {
			he(n, r);
			return;
		}
		if (t === Pi) {
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
	}, he = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), i(e), e = n;
		i(t);
	}, ge = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Oi(c), Oi(l), r && le(r), i.stop(), a && (a.flags |= 8, fe(o, e, t, n)), s && q(s, t), q(() => {
			e.isUnmounted = !0;
		}, t);
	}, _e = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) fe(e[o], t, n, r, i);
	}, ve = (e) => {
		if (e.shapeFlag & 6) return ve(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Kn];
		return n ? h(n) : t;
	}, ye = !1, be = (e, t, n) => {
		let r;
		e == null ? t._vnode && (fe(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, ye ||= (ye = !0, An(r), jn(), !1);
	}, xe = {
		p: v,
		um: fe,
		m: de,
		r: me,
		mt: D,
		mc: E,
		pc: ce,
		pbc: ne,
		n: ve,
		o: e
	}, Se, Ce;
	return t && ([Se, Ce] = t(xe)), {
		render: be,
		hydrate: Se,
		createApp: Hr(be, Se)
	};
}
function Si({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ci({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ti(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (_(r) && _(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = X(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ti(t, a)), a.type === Mi && (a.patchFlag === -1 && (a = i[e] = X(a)), a.el = t.el), a.type === Ni && !a.el && (a.el = t.el);
	}
}
function Ei(e) {
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
function Di(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Di(t);
}
function Oi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ki(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? ki(t.subTree) : null;
}
var Ai = (e) => e.__isSuspense;
function ji(e, t) {
	t && t.pendingBranch ? _(e) ? t.effects.push(...e) : t.effects.push(e) : kn(e);
}
var J = /* @__PURE__ */ Symbol.for("v-fgt"), Mi = /* @__PURE__ */ Symbol.for("v-txt"), Ni = /* @__PURE__ */ Symbol.for("v-cmt"), Pi = /* @__PURE__ */ Symbol.for("v-stc"), Fi = [], Ii = null;
function Li() {
	Fi.pop(), Ii = Fi[Fi.length - 1] || null;
}
var Ri = 1;
function zi(e, t = !1) {
	Ri += e, e < 0 && Ii && t && (Ii.hasOnce = !0);
}
function Bi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Vi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Hi = ({ key: e }) => e ?? null, Ui = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : S(e) || /* @__PURE__ */ V(e) || x(e) ? {
	i: G,
	r: e,
	k: t,
	f: !!n
} : e);
function Wi(e, t = null, n = null, r = 0, i = null, a = e === J ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Hi(t),
		ref: t && Ui(t),
		scopeId: Pn,
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
	return s ? (Xi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= S(n) ? 8 : 16), Ri > 0 && !o && Ii && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Ii.push(c), c;
}
var Gi = Ki;
function Ki(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === yr) && (e = Ni), Bi(e)) {
		let r = Ji(e, t, !0);
		return n && Xi(r, n), Ri > 0 && !a && Ii && (r.shapeFlag & 6 ? Ii[Ii.indexOf(e)] = r : Ii.push(r)), r.patchFlag = -2, r;
	}
	if (_a(e) && (e = e.__vccOpts), t) {
		t = qi(t);
		let { class: e, style: n } = t;
		e && !S(e) && (t.class = be(e)), w(n) && (/* @__PURE__ */ Qt(n) && !_(n) && (n = p({}, n)), t.style = me(n));
	}
	let o = S(e) ? 1 : Ai(e) ? 128 : qn(e) ? 64 : w(e) ? 4 : x(e) ? 2 : 0;
	return Wi(e, t, n, r, i, o, a, !0);
}
function qi(e) {
	return e ? /* @__PURE__ */ Qt(e) || ii(e) ? p({}, e) : e : null;
}
function Ji(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Zi(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Hi(l),
		ref: t && t.ref ? n && a ? _(a) ? a.concat(Ui(t)) : [a, Ui(t)] : Ui(t) : a,
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
		ssContent: e.ssContent && Ji(e.ssContent),
		ssFallback: e.ssFallback && Ji(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && Yn(u, c.clone(u)), u;
}
function Yi(e = " ", t = 0) {
	return Gi(Mi, null, e, t);
}
function Y(e) {
	return e == null || typeof e == "boolean" ? Gi(Ni) : _(e) ? Gi(J, null, e.slice()) : Bi(e) ? X(e) : Gi(Mi, null, String(e));
}
function X(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ji(e);
}
function Xi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (_(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Xi(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !ii(t) ? t._ctx = G : r === 3 && G && (G.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else if (x(t)) {
		if (r & 65) {
			Xi(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: G
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Yi(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Zi(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = be([t.class, r.class]));
		else if (e === "style") t.style = me([t.style, r.style]);
		else if (d(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(_(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !f(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Z(e, t, n, r = null) {
	H(e, t, 7, [n, r]);
}
var Qi = Br(), $i = 0;
function ea(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || Qi, a = {
		uid: $i++,
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
		scope: new Be(!0),
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
		propsOptions: ui(r, i),
		emitsOptions: qr(r, i),
		emit: null,
		emitted: null,
		propsDefaults: s,
		inheritAttrs: r.inheritAttrs,
		ctx: s,
		data: s,
		props: s,
		attrs: s,
		slots: s,
		refs: s,
		setupState: s,
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Gr.bind(null, a), e.ce && e.ce(a), a;
}
var Q = null, ta = () => Q || G, na, ra;
{
	let e = pe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	na = t("__VUE_INSTANCE_SETTERS__", (e) => Q = e), ra = t("__VUE_SSR_SETTERS__", (e) => sa = e);
}
var ia = (e) => {
	let t = Q;
	return na(e), e.scope.on(), () => {
		e.scope.off(), na(t);
	};
}, aa = () => {
	Q && Q.scope.off(), na(null);
};
function oa(e) {
	return e.vnode.shapeFlag & 4;
}
var sa = !1;
function ca(e, t = !1, n = !1) {
	t && ra(t);
	let { props: r, children: i } = e.vnode, a = oa(e);
	ai(e, r, a, t), vi(e, i, n || t);
	let o = a ? la(e, t) : void 0;
	return t && ra(!1), o;
}
function la(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, wr);
	let { setup: r } = n;
	if (r) {
		rt();
		let n = e.setupContext = r.length > 1 ? ha(e) : null, i = ia(e), a = _n(r, e, 0, [e.props, n]), o = T(a);
		if (it(), i(), (o || e.sp) && !tr(e) && Xn(e), o) {
			if (a.then(aa, aa), t) return a.then((n) => {
				ua(e, n, t);
			}).catch((t) => {
				vn(t, e, 0);
			});
			e.asyncDep = a;
		} else ua(e, a, t);
	} else pa(e, t);
}
function ua(e, t, n) {
	x(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : w(t) && (e.setupState = an(t)), pa(e, n);
}
var da, fa;
function pa(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && da && !r.render) {
			let t = r.template || jr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = da(t, p(p({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || l, fa && fa(e);
	}
	{
		let t = ia(e);
		rt();
		try {
			Dr(e);
		} finally {
			it(), t();
		}
	}
}
var ma = { get(e, t) {
	return I(e, "get", ""), e[t];
} };
function ha(e) {
	return {
		attrs: new Proxy(e.attrs, ma),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function ga(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(an($t(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Sr) return Sr[n](e);
		},
		has(e, t) {
			return t in e || t in Sr;
		}
	}) : e.proxy;
}
function _a(e) {
	return x(e) && "__vccOpts" in e;
}
var va = (e, t) => /* @__PURE__ */ sn(e, t, sa), ya = "3.5.40", ba = l, xa = {
	createComponentInstance: ea,
	setupComponent: ca,
	renderComponentRoot: Yr,
	setCurrentRenderingInstance: Fn,
	isVNode: Bi,
	normalizeVNode: Y,
	getComponentPublicInstance: ga,
	ensureValidVNode: br,
	pushWarningContext: hn,
	popWarningContext: gn
}, Sa = void 0, Ca = typeof window < "u" && window.trustedTypes;
if (Ca) try {
	Sa = /* @__PURE__ */ Ca.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var wa = Sa ? (e) => Sa.createHTML(e) : (e) => e, Ta = "http://www.w3.org/2000/svg", Ea = "http://www.w3.org/1998/Math/MathML", Da = typeof document < "u" ? document : null, Oa = Da && /* @__PURE__ */ Da.createElement("template"), ka = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Da.createElementNS(Ta, e) : t === "mathml" ? Da.createElementNS(Ea, e) : n ? Da.createElement(e, { is: n }) : Da.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Da.createTextNode(e),
	createComment: (e) => Da.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Da.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Oa.innerHTML = wa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Oa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Aa = /* @__PURE__ */ Symbol("_vtc");
function ja(e, t, n) {
	let r = e[Aa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ma = /* @__PURE__ */ Symbol("_vod"), Na = /* @__PURE__ */ Symbol("_vsh"), Pa = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Ma] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Fa(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Fa(e, !0), r.enter(e)) : r.leave(e, () => {
			Fa(e, !1);
		}) : Fa(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Fa(e, t);
	}
};
function Fa(e, t) {
	e.style.display = t ? e[Ma] : "none", e[Na] = !t;
}
function Ia() {
	Pa.getSSRProps = ({ value: e }) => {
		if (!e) return { style: { display: "none" } };
	};
}
var La = /* @__PURE__ */ Symbol(""), Ra = /(?:^|;)\s*display\s*:/;
function za(e, t, n) {
	let r = e.style, i = S(n), a = !1;
	if (n && !i) {
		if (t) if (S(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Va(r, t, "");
		}
		else for (let e in t) n[e] ?? Va(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Va(r, i, "") : Ga(e, i, !S(t) && t ? t[i] : void 0, o) || Va(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[La];
			e && (n += ";" + e), r.cssText = n, a = Ra.test(n);
		}
	} else t && e.removeAttribute("style");
	Ma in e && (e[Ma] = a ? r.display : "", e[Na] && (r.display = "none"));
}
var Ba = /\s*!important$/;
function Va(e, t, n) {
	if (_(n)) n.forEach((n) => Va(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Wa(e, t);
		Ba.test(n) ? e.setProperty(k(r), n.replace(Ba, ""), "important") : e[r] = n;
	}
}
var Ha = [
	"Webkit",
	"Moz",
	"ms"
], Ua = {};
function Wa(e, t) {
	let n = Ua[t];
	if (n) return n;
	let r = D(t);
	if (r !== "filter" && r in e) return Ua[t] = r;
	r = se(r);
	for (let n = 0; n < Ha.length; n++) {
		let i = Ha[n] + r;
		if (i in e) return Ua[t] = i;
	}
	return t;
}
function Ga(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && S(r) && n === r;
}
var Ka = "http://www.w3.org/1999/xlink";
function qa(e, t, n, r, i, a = Ee(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ka, t.slice(6, t.length)) : e.setAttributeNS(Ka, t, n) : n == null || a && !Oe(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : C(n) ? String(n) : n);
}
function Ja(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? wa(n) : n);
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
		r === "boolean" ? n = Oe(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Ya(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Xa(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Za = /* @__PURE__ */ Symbol("_vei");
function Qa(e, t, n, r, i = null) {
	let a = e[Za] || (e[Za] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = to(t);
		r ? Ya(e, n, a[t] = ao(r, i), s) : o && (Xa(e, n, o, s), a[t] = void 0);
	}
}
var $a = /(Once|Passive|Capture)$/, eo = /^on:?(?:Once|Passive|Capture)$/;
function to(e) {
	let t, n;
	for (; (n = e.match($a)) && !eo.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : k(e.slice(2)), t];
}
var no = 0, ro = /* @__PURE__ */ Promise.resolve(), io = () => no ||= (ro.then(() => no = 0), Date.now());
function ao(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (_(r)) {
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
	return n.value = e, n.attached = io(), n;
}
var oo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, so = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? ja(e, r, o) : t === "style" ? za(e, n, r) : d(t) ? f(t) || Qa(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : co(e, t, r, o)) ? (Ja(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qa(e, t, r, o, a, t !== "value")) : e._isVueCE && (lo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !S(r))) ? Ja(e, D(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), qa(e, t, r, o));
};
function co(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && oo(t) && x(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return oo(t) && S(n) ? !1 : t in e;
}
function lo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = D(t);
	return Array.isArray(n) ? n.some((e) => D(e) === r) : Object.keys(n).some((e) => D(e) === r);
}
var uo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return _(t) ? (e) => le(t, e) : t;
};
function fo(e) {
	e.target.composing = !0;
}
function po(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var $ = /* @__PURE__ */ Symbol("_assign");
function mo(e, t, n) {
	return t && (e = e.trim()), n && (e = de(e)), e;
}
var ho = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[$] = uo(i);
		let a = r || i.props && i.props.type === "number";
		Ya(e, t ? "change" : "input", (t) => {
			t.target.composing || e[$](mo(e.value, n, a));
		}), (n || a) && Ya(e, "change", () => {
			e.value = mo(e.value, n, a);
		}), t || (Ya(e, "compositionstart", fo), Ya(e, "compositionend", po), Ya(e, "change", po));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[$] = uo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? de(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, go = {
	deep: !0,
	created(e, t, n) {
		e[$] = uo(n), Ya(e, "change", () => {
			let t = e._modelValue, n = xo(e), r = e.checked, i = e[$];
			if (_(t)) {
				let e = Re(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (y(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(So(e, r));
		});
	},
	mounted: _o,
	beforeUpdate(e, t, n) {
		e[$] = uo(n), _o(e, t, n);
	}
};
function _o(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (_(t)) i = Re(t, r.props.value) > -1;
	else if (y(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = M(t, So(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var vo = {
	created(e, { value: t }, n) {
		e.checked = M(t, n.props.value), e[$] = uo(n), Ya(e, "change", () => {
			e[$](xo(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[$] = uo(r), t !== n && (e.checked = M(t, r.props.value));
	}
}, yo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Ya(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? de(xo(e)) : xo(e));
			e[$](e.multiple ? y(e._modelValue) ? new Set(t) : t : t[0]), e._assigning = !0, Tn(() => {
				e._assigning = !1;
			});
		}), e[$] = uo(r);
	},
	mounted(e, { value: t }) {
		bo(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[$] = uo(n);
	},
	updated(e, { value: t }) {
		e._assigning || bo(e, t);
	}
};
function bo(e, t) {
	let n = e.multiple, r = _(t);
	if (!(n && !r && !y(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = xo(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Re(t, o) > -1;
			} else a.selected = t.has(o);
			else if (M(xo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function xo(e) {
	return "_value" in e ? e._value : e.value;
}
function So(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Co = {
	created(e, t, n) {
		To(e, t, n, null, "created");
	},
	mounted(e, t, n) {
		To(e, t, n, null, "mounted");
	},
	beforeUpdate(e, t, n, r) {
		To(e, t, n, r, "beforeUpdate");
	},
	updated(e, t, n, r) {
		To(e, t, n, r, "updated");
	}
};
function wo(e, t) {
	switch (e) {
		case "SELECT": return yo;
		case "TEXTAREA": return ho;
		default: switch (t) {
			case "checkbox": return go;
			case "radio": return vo;
			default: return ho;
		}
	}
}
function To(e, t, n, r, i) {
	let a = wo(e.tagName, n.props && n.props.type)[i];
	a && a(e, t, n, r);
}
function Eo() {
	ho.getSSRProps = ({ value: e }) => ({ value: e }), vo.getSSRProps = ({ value: e }, t) => {
		if (t.props && M(t.props.value, e)) return { checked: !0 };
	}, go.getSSRProps = ({ value: e }, t) => {
		if (_(e)) {
			if (t.props && Re(e, t.props.value) > -1) return { checked: !0 };
		} else if (y(e)) {
			if (t.props && e.has(t.props.value)) return { checked: !0 };
		} else if (e) return { checked: !0 };
	}, Co.getSSRProps = (e, t) => {
		if (typeof t.type != "string") return;
		let n = wo(t.type.toUpperCase(), t.props && t.props.type);
		if (n.getSSRProps) return n.getSSRProps(e, t);
	};
}
var Do = /* @__PURE__ */ p({ patchProp: so }, ka), Oo;
function ko() {
	return Oo ||= bi(Do);
}
var Ao = ((...e) => {
	let t = ko().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Mo(e);
		if (!r) return;
		let i = t._component;
		!x(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, jo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function jo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Mo(e) {
	return S(e) ? document.querySelector(e) : e;
}
var No = !1, Po = () => {
	No || (No = !0, Eo(), Ia());
}, Fo = /* @__PURE__ */ o(",key,ref,innerHTML,textContent,ref_key,ref_for");
function Io(e, t) {
	let n = "";
	for (let r in e) {
		if (Fo(r) || d(r) || t === "textarea" && r === "value" || r.startsWith(".")) continue;
		let i = e[r];
		r.startsWith("^") && (r = r.slice(1)), r === "class" ? n += ` class="${Ro(i)}"` : r === "style" ? n += ` style="${zo(i)}"` : r === "className" ? i != null && (n += ` class="${j(String(i))}"`) : n += Lo(r, i, t);
	}
	return n;
}
function Lo(e, t, n) {
	if (!Ne(t)) return "";
	let r = n && (n.indexOf("-") > 0 || Ce(n)) ? e : Me[e] || e.toLowerCase();
	return De(r) ? Oe(t) ? ` ${r}` : "" : je(r) ? t === "" ? ` ${r}` : ` ${r}="${j(t)}"` : (console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r}`), "");
}
function Ro(e) {
	return j(be(e));
}
function zo(e) {
	return e ? S(e) ? j(e) : j(ye(me(Bo(e)))) : "";
}
function Bo(e) {
	if (!_(e) && w(e)) {
		let t = {};
		for (let n in e) n.startsWith(":--") ? t[n.slice(1)] = ze(e[n]) : t[n] = e[n];
		return t;
	}
	return e;
}
var { ensureValidVNode: Vo } = xa;
function Ho(e, t, n, r, i) {
	e("<!--teleport start-->");
	let a = i.appContext.provides[Bn], o = a.__teleportBuffers ||= {}, s = o[n] || (o[n] = []), c = s.length, l;
	if (r) t(e), l = "<!--teleport start anchor--><!--teleport anchor-->";
	else {
		let { getBuffer: e, push: n } = Zo();
		n("<!--teleport start anchor-->"), t(n), n("<!--teleport anchor-->"), l = e();
	}
	s.splice(c, 0, l), (T(l) || _(l) && l.hasAsync) && (s.hasAsync = !0), e("<!--teleport end-->");
}
function Uo(e, t) {
	throw Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.");
}
var { createComponentInstance: Wo, setCurrentRenderingInstance: Go, setupComponent: Ko, renderComponentRoot: qo, normalizeVNode: Jo, pushWarningContext: Yo, popWarningContext: Xo } = xa;
function Zo() {
	let e = !1, t = [];
	return {
		getBuffer() {
			return t;
		},
		push(n) {
			let r = S(n);
			if (e && r) {
				t[t.length - 1] += n;
				return;
			}
			t.push(n), e = r, (T(n) || _(n) && n.hasAsync) && (t.hasAsync = !0);
		}
	};
}
function Qo(e, t = null, n) {
	let r = e.component = Wo(e, t, null), i = Ko(r, !0), a = T(i), o = r.sp;
	if (a || o) return Promise.resolve(i).then(() => {
		if (a && (o = r.sp), o) return Promise.all(o.map((e) => e.call(r.proxy)));
	}).catch(l).then(() => $o(r, n));
	try {
		return $o(r, n);
	} catch (e) {
		return Promise.reject(e);
	}
}
function $o(e, t) {
	let n = e.type, { getBuffer: r, push: i } = Zo();
	if (x(n)) {
		let r = qo(e);
		if (!n.props) for (let t in e.attrs) t.startsWith("data-v-") && ((r.props ||= {})[t] = "");
		es(i, e.subTree = r, e, t);
	} else {
		(!e.render || e.render === l) && !e.ssrRender && !n.ssrRender && S(n.template) && (n.ssrRender = Uo(n.template));
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
			let s = Go(e);
			try {
				r(e.proxy, i, e, n, e.props, e.setupState, e.data, e.ctx);
			} catch (t) {
				vn(t, e, 1);
			} finally {
				Go(s);
			}
		} else e.render && e.render !== l ? es(i, e.subTree = qo(e), e, t) : (ba(`Component ${n.name || n.__file || "<Anonymous>"} is missing template or render function.`), i("<!---->"));
	}
	return r();
}
function es(e, t, n, r) {
	let { type: i, shapeFlag: a, children: o, dirs: s, props: c } = t;
	switch (s && (t.props = rs(t, c, s)), i) {
		case Mi:
			e(j(o));
			break;
		case Ni:
			e(o ? `<!--${Ie(o)}-->` : "<!---->");
			break;
		case Pi:
			e(o);
			break;
		case J:
			t.slotScopeIds && (r = (r ? r + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), ts(e, o, n, r), e("<!--]-->");
			break;
		default: a & 1 ? ns(e, t, n, r) : a & 6 ? e(Qo(t, n, r)) : a & 64 ? is(e, t, n, r) : a & 128 ? es(e, t.ssContent, n, r) : ba("[@vue/server-renderer] Invalid VNode type:", i, `(${typeof i})`);
	}
}
function ts(e, t, n, r) {
	for (let i = 0; i < t.length; i++) es(e, Jo(t[i]), n, r);
}
function ns(e, t, n, r) {
	let i = t.type, { props: a, children: o, shapeFlag: s, scopeId: c } = t, l = `<${i}`;
	a && (l += Io(a, i));
	let u = [], d = (e) => {
		e && (!a || !g(a, e)) && !u.includes(e) && (l += ` ${e}`, u.push(e));
	};
	c && d(c);
	let f = n, p = t;
	for (; f && p === f.subTree;) p = f.vnode, p.scopeId && d(p.scopeId), f = f.parent;
	if (r) {
		let e = r.trim().split(" ");
		for (let t = 0; t < e.length; t++) d(e[t]);
	}
	if (e(l + ">"), !we(i)) {
		let t = !1;
		a && (a.innerHTML ? (t = !0, e(a.innerHTML)) : a.textContent ? (t = !0, e(j(a.textContent))) : i === "textarea" && a.value && (t = !0, e(j(a.value)))), t || (s & 8 ? e(j(o)) : s & 16 && ts(e, o, n, r)), e(`</${i}>`);
	}
}
function rs(e, t, n) {
	let r = [];
	for (let t = 0; t < n.length; t++) {
		let i = n[t], { dir: { getSSRProps: a } } = i;
		if (a) {
			let t = a(i, e);
			t && r.push(t);
		}
	}
	return Zi(t || {}, ...r);
}
function is(e, t, n, r) {
	let i = t.props && t.props.to, a = t.props && t.props.disabled;
	if (!i) return a || ba("[@vue/server-renderer] Teleport is missing target prop."), [];
	if (!S(i)) return ba("[@vue/server-renderer] Teleport target must be a query selector string."), [];
	Ho(e, (e) => {
		ts(e, t.children, n, r);
	}, i, a || a === "", n);
}
var { isVNode: as } = xa;
function os(e, t, n) {
	if (!e.hasAsync) return t + cs(e);
	let r = t;
	for (let t = n; t < e.length; t += 1) {
		let n = e[t];
		if (S(n)) {
			r += n;
			continue;
		}
		if (T(n)) return n.then((n) => (e[t] = n, os(e, r, t)));
		let i = os(n, r, 0);
		if (T(i)) return i.then((n) => (e[t] = n, os(e, "", t)));
		r = i;
	}
	return r;
}
function ss(e) {
	return os(e, "", 0);
}
function cs(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		S(r) ? t += r : t += cs(r);
	}
	return t;
}
async function ls(e, t = {}) {
	if (as(e)) return ls(Ao({ render: () => e }), t);
	let n = Gi(e._component, e._props);
	n.appContext = e._context, e.provide(Bn, t);
	let r = await ss(await Qo(n));
	if (await us(t), t.__watcherHandles) for (let e of t.__watcherHandles) e();
	return r;
}
async function us(e) {
	if (e.__teleportBuffers) {
		e.teleports = e.teleports || {};
		for (let t in e.__teleportBuffers) e.teleports[t] = await ss(e.__teleportBuffers[t]);
	}
}
var { isVNode: ds } = xa;
Po();
//#endregion
//#region src/renderer/index.vue?vue&type=script&setup=true&lang.ts
var fs = ["id"], ps = { class: "p-5" }, ms = /* @__PURE__ */ r({
	__name: "index",
	props: {
		_p: {},
		_pp: {}
	},
	setup(n) {
		return (r, o) => (i(), e("div", {
			id: n._p.f.name("root"),
			class: "box"
		}, [t("p", ps, a(n._pp.data.curr.data.data), 1)], 8, fs));
	}
}), hs = async (e) => ({ set: async (t) => (console.log(`--renderer [${t.data.curr.type}]`), {
	r: `
                 <div>
                    ${await ls(n(ms, {
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
export { hs as t };
