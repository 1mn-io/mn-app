// @__NO_SIDE_EFFECTS__
function St(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const X = {}, ht = [], Ne = () => {
}, Zn = () => !1, Kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ys = (e) => e.startsWith("onUpdate:"), ie = Object.assign, Xs = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, mi = Object.prototype.hasOwnProperty, W = (e, t) => mi.call(e, t), R = Array.isArray, dt = (e) => Bt(e) === "[object Map]", lt = (e) => Bt(e) === "[object Set]", _n = (e) => Bt(e) === "[object Date]", N = (e) => typeof e == "function", se = (e) => typeof e == "string", Ve = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Qn = (e) => (q(e) || N(e)) && N(e.then) && N(e.catch), zn = Object.prototype.toString, Bt = (e) => zn.call(e), _i = (e) => Bt(e).slice(8, -1), er = (e) => Bt(e) === "[object Object]", Zs = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, nt = /* @__PURE__ */ St(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ds = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, bi = /-\w/g, Ae = ds(
  (e) => e.replace(bi, (t) => t.slice(1).toUpperCase())
), yi = /\B([A-Z])/g, ze = ds(
  (e) => e.replace(yi, "-$1").toLowerCase()
), tr = ds((e) => e.charAt(0).toUpperCase() + e.slice(1)), As = ds(
  (e) => e ? `on${tr(e)}` : ""
), He = (e, t) => !Object.is(e, t), es = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, sr = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, ps = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let bn;
const gs = () => bn || (bn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ms(e) {
  if (R(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = se(n) ? vi(n) : ms(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (se(e) || q(e))
    return e;
}
const xi = /;(?![^(]*\))/g, Si = /:([^]+)/, Ti = /\/\*[^]*?\*\//g;
function vi(e) {
  const t = {};
  return e.replace(Ti, "").split(xi).forEach((s) => {
    if (s) {
      const n = s.split(Si);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Xo(e) {
  if (!e) return "";
  if (se(e)) return e;
  let t = "";
  for (const s in e) {
    const n = e[s];
    if (se(n) || typeof n == "number") {
      const r = s.startsWith("--") ? s : ze(s);
      t += `${r}:${n};`;
    }
  }
  return t;
}
function _s(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (R(e))
    for (let s = 0; s < e.length; s++) {
      const n = _s(e[s]);
      n && (t += n + " ");
    }
  else if (q(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
function Zo(e) {
  if (!e) return null;
  let { class: t, style: s } = e;
  return t && !se(t) && (e.class = _s(t)), s && (e.style = ms(s)), e;
}
const wi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Ci = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Qo = /* @__PURE__ */ St(wi), zo = /* @__PURE__ */ St(Ci), nr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ei = /* @__PURE__ */ St(nr), ec = /* @__PURE__ */ St(
  nr + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function rr(e) {
  return !!e || e === "";
}
const Ai = /[>/="'\u0009\u000a\u000c\u0020]/, Ms = {};
function tc(e) {
  if (Ms.hasOwnProperty(e))
    return Ms[e];
  const t = Ai.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), Ms[e] = !t;
}
const sc = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function nc(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const Mi = /["'&<>]/;
function rc(e) {
  const t = "" + e, s = Mi.exec(t);
  if (!s)
    return t;
  let n = "", r, i, l = 0;
  for (i = s.index; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        r = "&quot;";
        break;
      case 38:
        r = "&amp;";
        break;
      case 39:
        r = "&#39;";
        break;
      case 60:
        r = "&lt;";
        break;
      case 62:
        r = "&gt;";
        break;
      default:
        continue;
    }
    l !== i && (n += t.slice(l, i)), l = i + 1, n += r;
  }
  return l !== i ? n + t.slice(l, i) : n;
}
const Pi = /^-?>|<!--|-->|--!>|<!-$/g;
function ic(e) {
  return e.replace(Pi, "");
}
function Oi(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = ot(e[n], t[n]);
  return s;
}
function ot(e, t) {
  if (e === t) return !0;
  let s = _n(e), n = _n(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ve(e), n = Ve(t), s || n)
    return e === t;
  if (s = R(e), n = R(t), s || n)
    return s && n ? Oi(e, t) : !1;
  if (s = q(e), n = q(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const l in e) {
      const o = e.hasOwnProperty(l), f = t.hasOwnProperty(l);
      if (o && !f || !o && f || !ot(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function bs(e, t) {
  return e.findIndex((s) => ot(s, t));
}
const ir = (e) => !!(e && e.__v_isRef === !0), Ri = (e) => se(e) ? e : e == null ? "" : R(e) || q(e) && (e.toString === zn || !N(e.toString)) ? ir(e) ? Ri(e.value) : JSON.stringify(e, lr, 2) : String(e), lr = (e, t) => ir(t) ? lr(e, t.value) : dt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[Ps(n, i) + " =>"] = r, s),
    {}
  )
} : lt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Ps(s))
} : Ve(t) ? Ps(t) : q(t) && !R(t) && !er(t) ? String(t) : t, Ps = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ve(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
function lc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let me;
class Fi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = me, !t && me && (this.index = (me.scopes || (me.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = me;
      try {
        return me = this, t();
      } finally {
        me = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = me, me = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (me = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ii() {
  return me;
}
let Q;
const Os = /* @__PURE__ */ new WeakSet();
class or {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, me && me.active && me.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Os.has(this) && (Os.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || fr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, yn(this), ur(this);
    const t = Q, s = Me;
    Q = this, Me = !0;
    try {
      return this.fn();
    } finally {
      ar(this), Q = t, Me = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        en(t);
      this.deps = this.depsTail = void 0, yn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Os.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ls(this) && this.run();
  }
  get dirty() {
    return Ls(this);
  }
}
let cr = 0, Mt, Pt;
function fr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pt, Pt = e;
    return;
  }
  e.next = Mt, Mt = e;
}
function Qs() {
  cr++;
}
function zs() {
  if (--cr > 0)
    return;
  if (Pt) {
    let t = Pt;
    for (Pt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Mt; ) {
    let t = Mt;
    for (Mt = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function ur(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ar(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), en(n), Di(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function Ls(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (hr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function hr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Dt) || (e.globalVersion = Dt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ls(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = Q, n = Me;
  Q = e, Me = !0;
  try {
    ur(e);
    const r = e.fn(e._value);
    (t.version === 0 || He(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Q = s, Me = n, ar(e), e.flags &= -3;
  }
}
function en(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      en(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Di(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Me = !0;
const dr = [];
function ke() {
  dr.push(Me), Me = !1;
}
function Ge() {
  const e = dr.pop();
  Me = e === void 0 ? !0 : e;
}
function yn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = Q;
    Q = void 0;
    try {
      t();
    } finally {
      Q = s;
    }
  }
}
let Dt = 0;
class Hi {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class tn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Q || !Me || Q === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Q)
      s = this.activeLink = new Hi(Q, this), Q.deps ? (s.prevDep = Q.depsTail, Q.depsTail.nextDep = s, Q.depsTail = s) : Q.deps = Q.depsTail = s, pr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = Q.depsTail, s.nextDep = void 0, Q.depsTail.nextDep = s, Q.depsTail = s, Q.deps === s && (Q.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Dt++, this.notify(t);
  }
  notify(t) {
    Qs();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      zs();
    }
  }
}
function pr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        pr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const js = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ Symbol(
  ""
), $s = /* @__PURE__ */ Symbol(
  ""
), Ht = /* @__PURE__ */ Symbol(
  ""
);
function oe(e, t, s) {
  if (Me && Q) {
    let n = js.get(e);
    n || js.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new tn()), r.map = n, r.key = s), r.track();
  }
}
function Ke(e, t, s, n, r, i) {
  const l = js.get(e);
  if (!l) {
    Dt++;
    return;
  }
  const o = (f) => {
    f && f.trigger();
  };
  if (Qs(), t === "clear")
    l.forEach(o);
  else {
    const f = R(e), h = f && Zs(s);
    if (f && s === "length") {
      const a = Number(n);
      l.forEach((g, C) => {
        (C === "length" || C === Ht || !Ve(C) && C >= a) && o(g);
      });
    } else
      switch ((s !== void 0 || l.has(void 0)) && o(l.get(s)), h && o(l.get(Ht)), t) {
        case "add":
          f ? h && o(l.get("length")) : (o(l.get(rt)), dt(e) && o(l.get($s)));
          break;
        case "delete":
          f || (o(l.get(rt)), dt(e) && o(l.get($s)));
          break;
        case "set":
          dt(e) && o(l.get(rt));
          break;
      }
  }
  zs();
}
function ft(e) {
  const t = /* @__PURE__ */ B(e);
  return t === e ? t : (oe(t, "iterate", Ht), /* @__PURE__ */ we(e) ? t : t.map(Pe));
}
function ys(e) {
  return oe(e = /* @__PURE__ */ B(e), "iterate", Ht), e;
}
function De(e, t) {
  return /* @__PURE__ */ qe(e) ? bt(/* @__PURE__ */ Qe(e) ? Pe(t) : t) : Pe(t);
}
const Ni = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rs(this, Symbol.iterator, (e) => De(this, e));
  },
  concat(...e) {
    return ft(this).concat(
      ...e.map((t) => R(t) ? ft(t) : t)
    );
  },
  entries() {
    return Rs(this, "entries", (e) => (e[1] = De(this, e[1]), e));
  },
  every(e, t) {
    return je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return je(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => De(this, n)),
      arguments
    );
  },
  find(e, t) {
    return je(
      this,
      "find",
      e,
      t,
      (s) => De(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return je(
      this,
      "findLast",
      e,
      t,
      (s) => De(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Fs(this, "includes", e);
  },
  indexOf(...e) {
    return Fs(this, "indexOf", e);
  },
  join(e) {
    return ft(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Fs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wt(this, "pop");
  },
  push(...e) {
    return wt(this, "push", e);
  },
  reduce(e, ...t) {
    return xn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return xn(this, "reduceRight", e, t);
  },
  shift() {
    return wt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wt(this, "splice", e);
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
    return wt(this, "unshift", e);
  },
  values() {
    return Rs(this, "values", (e) => De(this, e));
  }
};
function Rs(e, t, s) {
  const n = ys(e), r = n[t]();
  return n !== e && !/* @__PURE__ */ we(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const Vi = Array.prototype;
function je(e, t, s, n, r, i) {
  const l = ys(e), o = l !== e && !/* @__PURE__ */ we(e), f = l[t];
  if (f !== Vi[t]) {
    const g = f.apply(e, i);
    return o ? Pe(g) : g;
  }
  let h = s;
  l !== e && (o ? h = function(g, C) {
    return s.call(this, De(e, g), C, e);
  } : s.length > 2 && (h = function(g, C) {
    return s.call(this, g, C, e);
  }));
  const a = f.call(l, h, n);
  return o && r ? r(a) : a;
}
function xn(e, t, s, n) {
  const r = ys(e), i = r !== e && !/* @__PURE__ */ we(e);
  let l = s, o = !1;
  r !== e && (i ? (o = n.length === 0, l = function(h, a, g) {
    return o && (o = !1, h = De(e, h)), s.call(this, h, De(e, a), g, e);
  }) : s.length > 3 && (l = function(h, a, g) {
    return s.call(this, h, a, g, e);
  }));
  const f = r[t](l, ...n);
  return o ? De(e, f) : f;
}
function Fs(e, t, s) {
  const n = /* @__PURE__ */ B(e);
  oe(n, "iterate", Ht);
  const r = n[t](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ ln(s[0]) ? (s[0] = /* @__PURE__ */ B(s[0]), n[t](...s)) : r;
}
function wt(e, t, s = []) {
  ke(), Qs();
  const n = (/* @__PURE__ */ B(e))[t].apply(e, s);
  return zs(), Ge(), n;
}
const Li = /* @__PURE__ */ St("__proto__,__v_isRef,__isVue"), gr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ve)
);
function ji(e) {
  Ve(e) || (e = String(e));
  const t = /* @__PURE__ */ B(this);
  return oe(t, "has", e), t.hasOwnProperty(e);
}
class mr {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? Yi : xr : i ? yr : br).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const l = R(t);
    if (!r) {
      let f;
      if (l && (f = Ni[s]))
        return f;
      if (s === "hasOwnProperty")
        return ji;
    }
    const o = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ fe(t) ? t : n
    );
    if ((Ve(s) ? gr.has(s) : Li(s)) || (r || oe(t, "get", s), i))
      return o;
    if (/* @__PURE__ */ fe(o)) {
      const f = l && Zs(s) ? o : o.value;
      return r && q(f) ? /* @__PURE__ */ Ks(f) : f;
    }
    return q(o) ? r ? /* @__PURE__ */ Ks(o) : /* @__PURE__ */ nn(o) : o;
  }
}
class _r extends mr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const l = R(t) && Zs(s);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ qe(i);
      if (!/* @__PURE__ */ we(n) && !/* @__PURE__ */ qe(n) && (i = /* @__PURE__ */ B(i), n = /* @__PURE__ */ B(n)), !l && /* @__PURE__ */ fe(i) && !/* @__PURE__ */ fe(n))
        return h || (i.value = n), !0;
    }
    const o = l ? Number(s) < t.length : W(t, s), f = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ fe(t) ? t : r
    );
    return t === /* @__PURE__ */ B(r) && (o ? He(n, i) && Ke(t, "set", s, n) : Ke(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = W(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ke(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ve(s) || !gr.has(s)) && oe(t, "has", s), n;
  }
  ownKeys(t) {
    return oe(
      t,
      "iterate",
      R(t) ? "length" : rt
    ), Reflect.ownKeys(t);
  }
}
class $i extends mr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const Ui = /* @__PURE__ */ new _r(), Ki = /* @__PURE__ */ new $i(), Bi = /* @__PURE__ */ new _r(!0);
const Us = (e) => e, Jt = (e) => Reflect.getPrototypeOf(e);
function Wi(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ B(r), l = dt(i), o = e === "entries" || e === Symbol.iterator && l, f = e === "keys" && l, h = r[e](...n), a = s ? Us : t ? bt : Pe;
    return !t && oe(
      i,
      "iterate",
      f ? $s : rt
    ), ie(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: g, done: C } = h.next();
          return C ? { value: g, done: C } : {
            value: o ? [a(g[0]), a(g[1])] : a(g),
            done: C
          };
        }
      }
    );
  };
}
function Yt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ki(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ B(i), o = /* @__PURE__ */ B(r);
      e || (He(r, o) && oe(l, "get", r), oe(l, "get", o));
      const { has: f } = Jt(l), h = t ? Us : e ? bt : Pe;
      if (f.call(l, r))
        return h(i.get(r));
      if (f.call(l, o))
        return h(i.get(o));
      i !== l && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && oe(/* @__PURE__ */ B(r), "iterate", rt), r.size;
    },
    has(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ B(i), o = /* @__PURE__ */ B(r);
      return e || (He(r, o) && oe(l, "has", r), oe(l, "has", o)), r === o ? i.has(r) : i.has(r) || i.has(o);
    },
    forEach(r, i) {
      const l = this, o = l.__v_raw, f = /* @__PURE__ */ B(o), h = t ? Us : e ? bt : Pe;
      return !e && oe(f, "iterate", rt), o.forEach((a, g) => r.call(i, h(a), h(g), l));
    }
  };
  return ie(
    s,
    e ? {
      add: Yt("add"),
      set: Yt("set"),
      delete: Yt("delete"),
      clear: Yt("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ B(this), l = Jt(i), o = /* @__PURE__ */ B(r), f = !t && !/* @__PURE__ */ we(r) && !/* @__PURE__ */ qe(r) ? o : r;
        return l.has.call(i, f) || He(r, f) && l.has.call(i, r) || He(o, f) && l.has.call(i, o) || (i.add(f), Ke(i, "add", f, f)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ we(i) && !/* @__PURE__ */ qe(i) && (i = /* @__PURE__ */ B(i));
        const l = /* @__PURE__ */ B(this), { has: o, get: f } = Jt(l);
        let h = o.call(l, r);
        h || (r = /* @__PURE__ */ B(r), h = o.call(l, r));
        const a = f.call(l, r);
        return l.set(r, i), h ? He(i, a) && Ke(l, "set", r, i) : Ke(l, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ B(this), { has: l, get: o } = Jt(i);
        let f = l.call(i, r);
        f || (r = /* @__PURE__ */ B(r), f = l.call(i, r)), o && o.call(i, r);
        const h = i.delete(r);
        return f && Ke(i, "delete", r, void 0), h;
      },
      clear() {
        const r = /* @__PURE__ */ B(this), i = r.size !== 0, l = r.clear();
        return i && Ke(
          r,
          "clear",
          void 0,
          void 0
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    s[r] = Wi(r, e, t);
  }), s;
}
function sn(e, t) {
  const s = ki(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    W(s, r) && r in n ? s : n,
    r,
    i
  );
}
const Gi = {
  get: /* @__PURE__ */ sn(!1, !1)
}, qi = {
  get: /* @__PURE__ */ sn(!1, !0)
}, Ji = {
  get: /* @__PURE__ */ sn(!0, !1)
};
const br = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), Yi = /* @__PURE__ */ new WeakMap();
function Xi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Zi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Xi(_i(e));
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
  return /* @__PURE__ */ qe(e) ? e : rn(
    e,
    !1,
    Ui,
    Gi,
    br
  );
}
// @__NO_SIDE_EFFECTS__
function Qi(e) {
  return rn(
    e,
    !1,
    Bi,
    qi,
    yr
  );
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return rn(
    e,
    !0,
    Ki,
    Ji,
    xr
  );
}
function rn(e, t, s, n, r) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Zi(e);
  if (i === 0)
    return e;
  const l = r.get(e);
  if (l)
    return l;
  const o = new Proxy(
    e,
    i === 2 ? n : s
  );
  return r.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return /* @__PURE__ */ qe(e) ? /* @__PURE__ */ Qe(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ln(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ B(t) : e;
}
function zi(e) {
  return !W(e, "__v_skip") && Object.isExtensible(e) && sr(e, "__v_skip", !0), e;
}
const Pe = (e) => q(e) ? /* @__PURE__ */ nn(e) : e, bt = (e) => q(e) ? /* @__PURE__ */ Ks(e) : e;
// @__NO_SIDE_EFFECTS__
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function oc(e) {
  return el(e, !1);
}
function el(e, t) {
  return /* @__PURE__ */ fe(e) ? e : new tl(e, t);
}
class tl {
  constructor(t, s) {
    this.dep = new tn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ B(t), this._value = s ? t : Pe(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ we(t) || /* @__PURE__ */ qe(t);
    t = n ? t : /* @__PURE__ */ B(t), He(t, s) && (this._rawValue = t, this._value = n ? t : Pe(t), this.dep.trigger());
  }
}
function sl(e) {
  return /* @__PURE__ */ fe(e) ? e.value : e;
}
const nl = {
  get: (e, t, s) => t === "__v_raw" ? e : sl(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return /* @__PURE__ */ fe(r) && !/* @__PURE__ */ fe(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Sr(e) {
  return /* @__PURE__ */ Qe(e) ? e : new Proxy(e, nl);
}
class rl {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new tn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Dt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Q !== this)
      return fr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return hr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function il(e, t, s = !1) {
  let n, r;
  return N(e) ? n = e : (n = e.get, r = e.set), new rl(n, r, s);
}
const Xt = {}, is = /* @__PURE__ */ new WeakMap();
let st;
function ll(e, t = !1, s = st) {
  if (s) {
    let n = is.get(s);
    n || is.set(s, n = []), n.push(e);
  }
}
function ol(e, t, s = X) {
  const { immediate: n, deep: r, once: i, scheduler: l, augmentJob: o, call: f } = s, h = (m) => r ? m : /* @__PURE__ */ we(m) || r === !1 || r === 0 ? Be(m, 1) : Be(m);
  let a, g, C, E, K = !1, I = !1;
  if (/* @__PURE__ */ fe(e) ? (g = () => e.value, K = /* @__PURE__ */ we(e)) : /* @__PURE__ */ Qe(e) ? (g = () => h(e), K = !0) : R(e) ? (I = !0, K = e.some((m) => /* @__PURE__ */ Qe(m) || /* @__PURE__ */ we(m)), g = () => e.map((m) => {
    if (/* @__PURE__ */ fe(m))
      return m.value;
    if (/* @__PURE__ */ Qe(m))
      return h(m);
    if (N(m))
      return f ? f(m, 2) : m();
  })) : N(e) ? t ? g = f ? () => f(e, 2) : e : g = () => {
    if (C) {
      ke();
      try {
        C();
      } finally {
        Ge();
      }
    }
    const m = st;
    st = a;
    try {
      return f ? f(e, 3, [E]) : e(E);
    } finally {
      st = m;
    }
  } : g = Ne, t && r) {
    const m = g, A = r === !0 ? 1 / 0 : r;
    g = () => Be(m(), A);
  }
  const z = Ii(), Y = () => {
    a.stop(), z && z.active && Xs(z.effects, a);
  };
  if (i && t) {
    const m = t;
    t = (...A) => {
      m(...A), Y();
    };
  }
  let V = I ? new Array(e.length).fill(Xt) : Xt;
  const p = (m) => {
    if (!(!(a.flags & 1) || !a.dirty && !m))
      if (t) {
        const A = a.run();
        if (r || K || (I ? A.some((U, L) => He(U, V[L])) : He(A, V))) {
          C && C();
          const U = st;
          st = a;
          try {
            const L = [
              A,
              // pass undefined as the old value when it's changed for the first time
              V === Xt ? void 0 : I && V[0] === Xt ? [] : V,
              E
            ];
            V = A, f ? f(t, 3, L) : (
              // @ts-expect-error
              t(...L)
            );
          } finally {
            st = U;
          }
        }
      } else
        a.run();
  };
  return o && o(p), a = new or(g), a.scheduler = l ? () => l(p, !1) : p, E = (m) => ll(m, !1, a), C = a.onStop = () => {
    const m = is.get(a);
    if (m) {
      if (f)
        f(m, 4);
      else
        for (const A of m) A();
      is.delete(a);
    }
  }, t ? n ? p(!0) : V = a.run() : l ? l(p.bind(null, !0), !0) : a.run(), Y.pause = a.pause.bind(a), Y.resume = a.resume.bind(a), Y.stop = Y, Y;
}
function Be(e, t = 1 / 0, s) {
  if (t <= 0 || !q(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ fe(e))
    Be(e.value, t, s);
  else if (R(e))
    for (let n = 0; n < e.length; n++)
      Be(e[n], t, s);
  else if (lt(e) || dt(e))
    e.forEach((n) => {
      Be(n, t, s);
    });
  else if (er(e)) {
    for (const n in e)
      Be(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Be(e[n], t, s);
  }
  return e;
}
function Wt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    xs(r, t, s);
  }
}
function Le(e, t, s, n) {
  if (N(e)) {
    const r = Wt(e, t, s, n);
    return r && Qn(r) && r.catch((i) => {
      xs(i, t, s);
    }), r;
  }
  if (R(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Le(e[i], t, s, n));
    return r;
  }
}
function xs(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || X;
  if (t) {
    let o = t.parent;
    const f = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let g = 0; g < a.length; g++)
          if (a[g](e, f, h) === !1)
            return;
      }
      o = o.parent;
    }
    if (i) {
      ke(), Wt(i, null, 10, [
        e,
        f,
        h
      ]), Ge();
      return;
    }
  }
  cl(e, s, r, n, l);
}
function cl(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ae = [];
let Fe = -1;
const pt = [];
let Xe = null, at = 0;
const Tr = /* @__PURE__ */ Promise.resolve();
let ls = null;
function vr(e) {
  const t = ls || Tr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function fl(e) {
  let t = Fe + 1, s = ae.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = ae[n], i = Nt(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function on(e) {
  if (!(e.flags & 1)) {
    const t = Nt(e), s = ae[ae.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Nt(s) ? ae.push(e) : ae.splice(fl(t), 0, e), e.flags |= 1, wr();
  }
}
function wr() {
  ls || (ls = Tr.then(Cr));
}
function ul(e) {
  R(e) ? pt.push(...e) : Xe && e.id === -1 ? Xe.splice(at + 1, 0, e) : e.flags & 1 || (pt.push(e), e.flags |= 1), wr();
}
function Sn(e, t, s = Fe + 1) {
  for (; s < ae.length; s++) {
    const n = ae[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ae.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function os(e) {
  if (pt.length) {
    const t = [...new Set(pt)].sort(
      (s, n) => Nt(s) - Nt(n)
    );
    if (pt.length = 0, Xe) {
      Xe.push(...t);
      return;
    }
    for (Xe = t, at = 0; at < Xe.length; at++) {
      const s = Xe[at];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Xe = null, at = 0;
  }
}
const Nt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Cr(e) {
  try {
    for (Fe = 0; Fe < ae.length; Fe++) {
      const t = ae[Fe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Wt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Fe < ae.length; Fe++) {
      const t = ae[Fe];
      t && (t.flags &= -2);
    }
    Fe = -1, ae.length = 0, os(), ls = null, (ae.length || pt.length) && Cr();
  }
}
let ve = null, Er = null;
function Vt(e) {
  const t = ve;
  return ve = e, Er = e && e.type.__scopeId || null, t;
}
function al(e, t = ve, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && us(-1);
    const i = Vt(t);
    let l;
    try {
      l = e(...r);
    } finally {
      Vt(i), n._d && us(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function cc(e, t) {
  if (ve === null)
    return e;
  const s = vs(ve), n = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, l, o, f = X] = t[r];
    i && (N(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Be(l), n.push({
      dir: i,
      instance: s,
      value: l,
      oldValue: void 0,
      arg: o,
      modifiers: f
    }));
  }
  return e;
}
function Ie(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const o = r[l];
    i && (o.oldValue = i[l].value);
    let f = o.dir[n];
    f && (ke(), Le(f, s, 8, [
      e.el,
      o,
      e,
      t
    ]), Ge());
  }
}
function hl(e, t) {
  if (he) {
    let s = he.provides;
    const n = he.parent && he.parent.provides;
    n === s && (s = he.provides = Object.create(n)), s[e] = t;
  }
}
function ts(e, t, s = !1) {
  const n = po();
  if (n || _t) {
    let r = _t ? _t._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && N(t) ? t.call(n && n.proxy) : t;
  }
}
const dl = /* @__PURE__ */ Symbol.for("v-scx"), pl = () => ts(dl);
function Is(e, t, s) {
  return Ar(e, t, s);
}
function Ar(e, t, s = X) {
  const { immediate: n, deep: r, flush: i, once: l } = s, o = ie({}, s), f = t && n || !t && i !== "post";
  let h;
  if ($t) {
    if (i === "sync") {
      const E = pl();
      h = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!f) {
      const E = () => {
      };
      return E.stop = Ne, E.resume = Ne, E.pause = Ne, E;
    }
  }
  const a = he;
  o.call = (E, K, I) => Le(E, a, K, I);
  let g = !1;
  i === "post" ? o.scheduler = (E) => {
    ge(E, a && a.suspense);
  } : i !== "sync" && (g = !0, o.scheduler = (E, K) => {
    K ? E() : on(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), g && (E.flags |= 2, a && (E.id = a.uid, E.i = a));
  };
  const C = ol(e, t, o);
  return $t && (h ? h.push(C) : f && C()), C;
}
function gl(e, t, s) {
  const n = this.proxy, r = se(e) ? e.includes(".") ? Mr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  N(t) ? i = t : (i = t.handler, s = t);
  const l = kt(this), o = Ar(r, i.bind(n), s);
  return l(), o;
}
function Mr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const ml = /* @__PURE__ */ Symbol("_vte"), _l = (e) => e.__isTeleport, bl = /* @__PURE__ */ Symbol("_leaveCb");
function cn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, cn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function fc(e, t) {
  return N(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function Pr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Tn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const cs = /* @__PURE__ */ new WeakMap();
function gt(e, t, s, n, r = !1) {
  if (R(e)) {
    e.forEach(
      (I, z) => gt(
        I,
        t && (R(t) ? t[z] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (mt(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && gt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? vs(n.component) : n.el, l = r ? null : i, { i: o, r: f } = e, h = t && t.r, a = o.refs === X ? o.refs = {} : o.refs, g = o.setupState, C = /* @__PURE__ */ B(g), E = g === X ? Zn : (I) => Tn(a, I) ? !1 : W(C, I), K = (I, z) => !(z && Tn(a, z));
  if (h != null && h !== f) {
    if (vn(t), se(h))
      a[h] = null, E(h) && (g[h] = null);
    else if (/* @__PURE__ */ fe(h)) {
      const I = t;
      K(h, I.k) && (h.value = null), I.k && (a[I.k] = null);
    }
  }
  if (N(f))
    Wt(f, o, 12, [l, a]);
  else {
    const I = se(f), z = /* @__PURE__ */ fe(f);
    if (I || z) {
      const Y = () => {
        if (e.f) {
          const V = I ? E(f) ? g[f] : a[f] : K() || !e.k ? f.value : a[e.k];
          if (r)
            R(V) && Xs(V, i);
          else if (R(V))
            V.includes(i) || V.push(i);
          else if (I)
            a[f] = [i], E(f) && (g[f] = a[f]);
          else {
            const p = [i];
            K(f, e.k) && (f.value = p), e.k && (a[e.k] = p);
          }
        } else I ? (a[f] = l, E(f) && (g[f] = l)) : z && (K(f, e.k) && (f.value = l), e.k && (a[e.k] = l));
      };
      if (l) {
        const V = () => {
          Y(), cs.delete(e);
        };
        V.id = -1, cs.set(e, V), ge(V, s);
      } else
        vn(e), Y();
    }
  }
}
function vn(e) {
  const t = cs.get(e);
  t && (t.flags |= 8, cs.delete(e));
}
let wn = !1;
const ut = () => {
  wn || (console.error("Hydration completed but contains mismatches."), wn = !0);
}, yl = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", xl = (e) => e.namespaceURI.includes("MathML"), Zt = (e) => {
  if (e.nodeType === 1) {
    if (yl(e)) return "svg";
    if (xl(e)) return "mathml";
  }
}, Qt = (e) => e.nodeType === 8;
function Sl(e) {
  const {
    mt: t,
    p: s,
    o: {
      patchProp: n,
      createText: r,
      nextSibling: i,
      parentNode: l,
      remove: o,
      insert: f,
      createComment: h
    }
  } = e, a = (p, m) => {
    if (!m.hasChildNodes()) {
      s(null, p, m), os(), m._vnode = p;
      return;
    }
    g(m.firstChild, p, null, null, null), os(), m._vnode = p;
  }, g = (p, m, A, U, L, k = !1) => {
    k = k || !!m.dynamicChildren;
    const J = Qt(p) && p.data === "[", H = () => I(
      p,
      m,
      A,
      U,
      L,
      J
    ), { type: te, ref: ne, shapeFlag: re, patchFlag: Se } = m;
    let de = p.nodeType;
    m.el = p, Se === -2 && (k = !1, m.dynamicChildren = null);
    let F = null;
    switch (te) {
      case it:
        de !== 3 ? m.children === "" ? (f(m.el = r(""), l(p), p), F = p) : F = H() : (p.data !== m.children && (ut(), p.data = m.children), F = i(p));
        break;
      case Je:
        V(p) ? (F = i(p), Y(
          m.el = p.content.firstChild,
          p,
          A
        )) : de !== 8 || J ? F = H() : F = i(p);
        break;
      case Rt:
        if (J && (p = i(p), de = p.nodeType), de === 1 || de === 3) {
          F = p;
          const j = !m.children.length;
          for (let M = 0; M < m.staticCount; M++)
            j && (m.children += F.nodeType === 1 ? F.outerHTML : F.data), M === m.staticCount - 1 && (m.anchor = F), F = i(F);
          return J ? i(F) : F;
        } else
          H();
        break;
      case Ee:
        J ? F = K(
          p,
          m,
          A,
          U,
          L,
          k
        ) : F = H();
        break;
      default:
        if (re & 1)
          (de !== 1 || m.type.toLowerCase() !== p.tagName.toLowerCase()) && !V(p) ? F = H() : F = C(
            p,
            m,
            A,
            U,
            L,
            k
          );
        else if (re & 6) {
          m.slotScopeIds = L;
          const j = l(p);
          if (J ? F = z(p) : Qt(p) && p.data === "teleport start" ? F = z(p, p.data, "teleport end") : F = i(p), t(
            m,
            j,
            null,
            A,
            U,
            Zt(j),
            k
          ), mt(m) && !m.type.__asyncResolved) {
            let M;
            J ? (M = ce(Ee), M.anchor = F ? F.previousSibling : j.lastChild) : M = p.nodeType === 3 ? ni("") : ce("div"), M.el = p, m.component.subTree = M;
          }
        } else re & 64 ? de !== 8 ? F = H() : F = m.type.hydrate(
          p,
          m,
          A,
          U,
          L,
          k,
          e,
          E
        ) : re & 128 && (F = m.type.hydrate(
          p,
          m,
          A,
          U,
          Zt(l(p)),
          L,
          k,
          e,
          g
        ));
    }
    return ne != null && gt(ne, null, U, m), F;
  }, C = (p, m, A, U, L, k) => {
    k = k || !!m.dynamicChildren;
    const { type: J, props: H, patchFlag: te, shapeFlag: ne, dirs: re, transition: Se } = m, de = J === "input" || J === "option";
    if (de || te !== -1) {
      re && Ie(m, null, A, "created");
      let F = !1;
      if (V(p)) {
        F = Jr(
          null,
          // no need check parentSuspense in hydration
          Se
        ) && A && A.vnode.props && A.vnode.props.appear;
        const M = p.content.firstChild;
        if (F) {
          const ee = M.getAttribute("class");
          ee && (M.$cls = ee), Se.beforeEnter(M);
        }
        Y(M, p, A), m.el = p = M;
      }
      if (ne & 16 && // skip if element has innerHTML / textContent
      !(H && (H.innerHTML || H.textContent))) {
        let M = E(
          p.firstChild,
          m,
          p,
          A,
          U,
          L,
          k
        );
        for (; M; ) {
          zt(
            p,
            1
            /* CHILDREN */
          ) || ut();
          const ee = M;
          M = M.nextSibling, o(ee);
        }
      } else if (ne & 8) {
        let M = m.children;
        M[0] === `
` && (p.tagName === "PRE" || p.tagName === "TEXTAREA") && (M = M.slice(1));
        const { textContent: ee } = p;
        ee !== M && // innerHTML normalize \r\n or \r into a single \n in the DOM
        ee !== M.replace(/\r\n|\r/g, `
`) && (zt(
          p,
          0
          /* TEXT */
        ) || ut(), p.textContent = m.children);
      }
      if (H) {
        if (de || !k || te & 48) {
          const M = p.tagName.includes("-");
          for (const ee in H)
            (de && (ee.endsWith("value") || ee === "indeterminate") || Kt(ee) && !nt(ee) || // force hydrate v-bind with .prop modifiers
            ee[0] === "." || M && !nt(ee)) && n(p, ee, null, H[ee], void 0, A);
        } else if (H.onClick)
          n(
            p,
            "onClick",
            null,
            H.onClick,
            void 0,
            A
          );
        else if (te & 4 && /* @__PURE__ */ Qe(H.style))
          for (const M in H.style) H.style[M];
      }
      let j;
      (j = H && H.onVnodeBeforeMount) && Te(j, A, m), re && Ie(m, null, A, "beforeMount"), ((j = H && H.onVnodeMounted) || re || F) && zr(() => {
        j && Te(j, A, m), F && Se.enter(p), re && Ie(m, null, A, "mounted");
      }, U);
    }
    return p.nextSibling;
  }, E = (p, m, A, U, L, k, J) => {
    J = J || !!m.dynamicChildren;
    const H = m.children, te = H.length;
    for (let ne = 0; ne < te; ne++) {
      const re = J ? H[ne] : H[ne] = ye(H[ne]), Se = re.type === it;
      p ? (Se && !J && ne + 1 < te && ye(H[ne + 1]).type === it && (f(
        r(
          p.data.slice(re.children.length)
        ),
        A,
        i(p)
      ), p.data = re.children), p = g(
        p,
        re,
        U,
        L,
        k,
        J
      )) : Se && !re.children ? f(re.el = r(""), A) : (zt(
        A,
        1
        /* CHILDREN */
      ) || ut(), s(
        null,
        re,
        A,
        null,
        U,
        L,
        Zt(A),
        k
      ));
    }
    return p;
  }, K = (p, m, A, U, L, k) => {
    const { slotScopeIds: J } = m;
    J && (L = L ? L.concat(J) : J);
    const H = l(p), te = E(
      i(p),
      m,
      H,
      A,
      U,
      L,
      k
    );
    return te && Qt(te) && te.data === "]" ? i(m.anchor = te) : (ut(), f(m.anchor = h("]"), H, te), te);
  }, I = (p, m, A, U, L, k) => {
    if (zt(
      p.parentElement,
      1
      /* CHILDREN */
    ) || ut(), m.el = null, k) {
      const te = z(p);
      for (; ; ) {
        const ne = i(p);
        if (ne && ne !== te)
          o(ne);
        else
          break;
      }
    }
    const J = i(p), H = l(p);
    return o(p), s(
      null,
      m,
      H,
      J,
      A,
      U,
      Zt(H),
      L
    ), A && (A.vnode.el = m.el, Lr(A, m.el)), J;
  }, z = (p, m = "[", A = "]") => {
    let U = 0;
    for (; p; )
      if (p = i(p), p && Qt(p) && (p.data === m && U++, p.data === A)) {
        if (U === 0)
          return i(p);
        U--;
      }
    return p;
  }, Y = (p, m, A) => {
    const U = m.parentNode;
    U && U.replaceChild(p, m);
    let L = A;
    for (; L; )
      L.vnode.el === m && (L.vnode.el = L.subTree.el = p), L = L.parent;
  }, V = (p) => p.nodeType === 1 && p.tagName === "TEMPLATE";
  return [a, g];
}
const Cn = "data-allow-mismatch", Tl = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function zt(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Cn); )
      e = e.parentElement;
  const s = e && e.getAttribute(Cn);
  if (s == null)
    return !1;
  if (s === "")
    return !0;
  {
    const n = s.split(",");
    return t === 0 && n.includes("children") ? !0 : n.includes(Tl[t]);
  }
}
gs().requestIdleCallback;
gs().cancelIdleCallback;
const mt = (e) => !!e.type.__asyncLoader, Or = (e) => e.type.__isKeepAlive;
function vl(e, t) {
  Rr(e, "a", t);
}
function wl(e, t) {
  Rr(e, "da", t);
}
function Rr(e, t, s = he) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Ss(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      Or(r.parent.vnode) && Cl(n, t, s, r), r = r.parent;
  }
}
function Cl(e, t, s, n) {
  const r = Ss(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Fr(() => {
    Xs(n[t], r);
  }, s);
}
function Ss(e, t, s = he, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...l) => {
      ke();
      const o = kt(s), f = Le(t, s, e, l);
      return o(), Ge(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Ye = (e) => (t, s = he) => {
  (!$t || e === "sp") && Ss(e, (...n) => t(...n), s);
}, El = Ye("bm"), Al = Ye("m"), Ml = Ye(
  "bu"
), Pl = Ye("u"), Ol = Ye(
  "bum"
), Fr = Ye("um"), Rl = Ye(
  "sp"
), Fl = Ye("rtg"), Il = Ye("rtc");
function Dl(e, t = he) {
  Ss("ec", e, t);
}
const Hl = /* @__PURE__ */ Symbol.for("v-ndc");
function uc(e, t, s, n) {
  let r;
  const i = s, l = R(e);
  if (l || se(e)) {
    const o = l && /* @__PURE__ */ Qe(e);
    let f = !1, h = !1;
    o && (f = !/* @__PURE__ */ we(e), h = /* @__PURE__ */ qe(e), e = ys(e)), r = new Array(e.length);
    for (let a = 0, g = e.length; a < g; a++)
      r[a] = t(
        f ? h ? bt(Pe(e[a])) : Pe(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, i);
  } else if (q(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (o, f) => t(o, f, void 0, i)
      );
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let f = 0, h = o.length; f < h; f++) {
        const a = o[f];
        r[f] = t(e[a], a, f, i);
      }
    }
  else
    r = [];
  return r;
}
const Bs = (e) => e ? ii(e) ? vs(e) : Bs(e.parent) : null, Ot = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Bs(e.parent),
    $root: (e) => Bs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Dr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      on(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = vr.bind(e.proxy)),
    $watch: (e) => gl.bind(e)
  })
), Ds = (e, t) => e !== X && !e.__isScriptSetup && W(e, t), Nl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: l, type: o, appContext: f } = e;
    if (t[0] !== "$") {
      const C = l[t];
      if (C !== void 0)
        switch (C) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return i[t];
        }
      else {
        if (Ds(n, t))
          return l[t] = 1, n[t];
        if (r !== X && W(r, t))
          return l[t] = 2, r[t];
        if (W(i, t))
          return l[t] = 3, i[t];
        if (s !== X && W(s, t))
          return l[t] = 4, s[t];
        Ws && (l[t] = 0);
      }
    }
    const h = Ot[t];
    let a, g;
    if (h)
      return t === "$attrs" && oe(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (a = o.__cssModules) && (a = a[t])
    )
      return a;
    if (s !== X && W(s, t))
      return l[t] = 4, s[t];
    if (
      // global properties
      g = f.config.globalProperties, W(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return Ds(r, t) ? (r[t] = s, !0) : n !== X && W(n, t) ? (n[t] = s, !0) : W(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: l }
  }, o) {
    let f;
    return !!(s[o] || e !== X && o[0] !== "$" && W(e, o) || Ds(t, o) || W(i, o) || W(n, o) || W(Ot, o) || W(r.config.globalProperties, o) || (f = l.__cssModules) && f[o]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : W(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function En(e) {
  return R(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Ws = !0;
function Vl(e) {
  const t = Dr(e), s = e.proxy, n = e.ctx;
  Ws = !1, t.beforeCreate && An(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: l,
    watch: o,
    provide: f,
    inject: h,
    // lifecycle
    created: a,
    beforeMount: g,
    mounted: C,
    beforeUpdate: E,
    updated: K,
    activated: I,
    deactivated: z,
    beforeDestroy: Y,
    beforeUnmount: V,
    destroyed: p,
    unmounted: m,
    render: A,
    renderTracked: U,
    renderTriggered: L,
    errorCaptured: k,
    serverPrefetch: J,
    // public API
    expose: H,
    inheritAttrs: te,
    // assets
    components: ne,
    directives: re,
    filters: Se
  } = t;
  if (h && Ll(h, n, null), l)
    for (const j in l) {
      const M = l[j];
      N(M) && (n[j] = M.bind(s));
    }
  if (r) {
    const j = r.call(s, s);
    q(j) && (e.data = /* @__PURE__ */ nn(j));
  }
  if (Ws = !0, i)
    for (const j in i) {
      const M = i[j], ee = N(M) ? M.bind(s, s) : N(M.get) ? M.get.bind(s, s) : Ne, Gt = !N(M) && N(M.set) ? M.set.bind(s) : Ne, et = yo({
        get: ee,
        set: Gt
      });
      Object.defineProperty(n, j, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (Oe) => et.value = Oe
      });
    }
  if (o)
    for (const j in o)
      Ir(o[j], n, s, j);
  if (f) {
    const j = N(f) ? f.call(s) : f;
    Reflect.ownKeys(j).forEach((M) => {
      hl(M, j[M]);
    });
  }
  a && An(a, e, "c");
  function F(j, M) {
    R(M) ? M.forEach((ee) => j(ee.bind(s))) : M && j(M.bind(s));
  }
  if (F(El, g), F(Al, C), F(Ml, E), F(Pl, K), F(vl, I), F(wl, z), F(Dl, k), F(Il, U), F(Fl, L), F(Ol, V), F(Fr, m), F(Rl, J), R(H))
    if (H.length) {
      const j = e.exposed || (e.exposed = {});
      H.forEach((M) => {
        Object.defineProperty(j, M, {
          get: () => s[M],
          set: (ee) => s[M] = ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === Ne && (e.render = A), te != null && (e.inheritAttrs = te), ne && (e.components = ne), re && (e.directives = re), J && Pr(e);
}
function Ll(e, t, s = Ne) {
  R(e) && (e = ks(e));
  for (const n in e) {
    const r = e[n];
    let i;
    q(r) ? "default" in r ? i = ts(
      r.from || n,
      r.default,
      !0
    ) : i = ts(r.from || n) : i = ts(r), /* @__PURE__ */ fe(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[n] = i;
  }
}
function An(e, t, s) {
  Le(
    R(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Ir(e, t, s, n) {
  let r = n.includes(".") ? Mr(s, n) : () => s[n];
  if (se(e)) {
    const i = t[e];
    N(i) && Is(r, i);
  } else if (N(e))
    Is(r, e.bind(s));
  else if (q(e))
    if (R(e))
      e.forEach((i) => Ir(i, t, s, n));
    else {
      const i = N(e.handler) ? e.handler.bind(s) : t[e.handler];
      N(i) && Is(r, i, e);
    }
}
function Dr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, o = i.get(t);
  let f;
  return o ? f = o : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (h) => fs(f, h, l, !0)
  ), fs(f, t, l)), q(t) && i.set(t, f), f;
}
function fs(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && fs(e, i, s, !0), r && r.forEach(
    (l) => fs(e, l, s, !0)
  );
  for (const l in t)
    if (!(n && l === "expose")) {
      const o = jl[l] || s && s[l];
      e[l] = o ? o(e[l], t[l]) : t[l];
    }
  return e;
}
const jl = {
  data: Mn,
  props: Pn,
  emits: Pn,
  // objects
  methods: At,
  computed: At,
  // lifecycle
  beforeCreate: ue,
  created: ue,
  beforeMount: ue,
  mounted: ue,
  beforeUpdate: ue,
  updated: ue,
  beforeDestroy: ue,
  beforeUnmount: ue,
  destroyed: ue,
  unmounted: ue,
  activated: ue,
  deactivated: ue,
  errorCaptured: ue,
  serverPrefetch: ue,
  // assets
  components: At,
  directives: At,
  // watch
  watch: Ul,
  // provide / inject
  provide: Mn,
  inject: $l
};
function Mn(e, t) {
  return t ? e ? function() {
    return ie(
      N(e) ? e.call(this, this) : e,
      N(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function $l(e, t) {
  return At(ks(e), ks(t));
}
function ks(e) {
  if (R(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function At(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Pn(e, t) {
  return e ? R(e) && R(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    En(e),
    En(t ?? {})
  ) : t;
}
function Ul(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ie(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = ue(e[n], t[n]);
  return s;
}
function Hr() {
  return {
    app: null,
    config: {
      isNativeTag: Zn,
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
let Kl = 0;
function Bl(e, t) {
  return function(n, r = null) {
    N(n) || (n = ie({}, n)), r != null && !q(r) && (r = null);
    const i = Hr(), l = /* @__PURE__ */ new WeakSet(), o = [];
    let f = !1;
    const h = i.app = {
      _uid: Kl++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: xo,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...g) {
        return l.has(a) || (a && N(a.install) ? (l.add(a), a.install(h, ...g)) : N(a) && (l.add(a), a(h, ...g))), h;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), h;
      },
      component(a, g) {
        return g ? (i.components[a] = g, h) : i.components[a];
      },
      directive(a, g) {
        return g ? (i.directives[a] = g, h) : i.directives[a];
      },
      mount(a, g, C) {
        if (!f) {
          const E = h._ceVNode || ce(n, r);
          return E.appContext = i, C === !0 ? C = "svg" : C === !1 && (C = void 0), g && t ? t(E, a) : e(E, a, C), f = !0, h._container = a, a.__vue_app__ = h, vs(E.component);
        }
      },
      onUnmount(a) {
        o.push(a);
      },
      unmount() {
        f && (Le(
          o,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(a, g) {
        return i.provides[a] = g, h;
      },
      runWithContext(a) {
        const g = _t;
        _t = h;
        try {
          return a();
        } finally {
          _t = g;
        }
      }
    };
    return h;
  };
}
let _t = null;
const Wl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ae(t)}Modifiers`] || e[`${ze(t)}Modifiers`];
function kl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || X;
  let r = s;
  const i = t.startsWith("update:"), l = i && Wl(n, t.slice(7));
  l && (l.trim && (r = s.map((a) => se(a) ? a.trim() : a)), l.number && (r = s.map(ps)));
  let o, f = n[o = As(t)] || // also try camelCase event handler (#2249)
  n[o = As(Ae(t))];
  !f && i && (f = n[o = As(ze(t))]), f && Le(
    f,
    e,
    6,
    r
  );
  const h = n[o + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, Le(
      h,
      e,
      6,
      r
    );
  }
}
const Gl = /* @__PURE__ */ new WeakMap();
function Nr(e, t, s = !1) {
  const n = s ? Gl : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let l = {}, o = !1;
  if (!N(e)) {
    const f = (h) => {
      const a = Nr(h, t, !0);
      a && (o = !0, ie(l, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !o ? (q(e) && n.set(e, null), null) : (R(i) ? i.forEach((f) => l[f] = null) : ie(l, i), q(e) && n.set(e, l), l);
}
function Ts(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), W(e, t[0].toLowerCase() + t.slice(1)) || W(e, ze(t)) || W(e, t));
}
function ss(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: l,
    attrs: o,
    emit: f,
    render: h,
    renderCache: a,
    props: g,
    data: C,
    setupState: E,
    ctx: K,
    inheritAttrs: I
  } = e, z = Vt(e);
  let Y, V;
  try {
    if (s.shapeFlag & 4) {
      const m = r || n, A = m;
      Y = ye(
        h.call(
          A,
          m,
          a,
          g,
          E,
          C,
          K
        )
      ), V = o;
    } else {
      const m = t;
      Y = ye(
        m.length > 1 ? m(
          g,
          { attrs: o, slots: l, emit: f }
        ) : m(
          g,
          null
        )
      ), V = t.props ? o : ql(o);
    }
  } catch (m) {
    Ft.length = 0, xs(m, e, 1), Y = ce(Je);
  }
  let p = Y;
  if (V && I !== !1) {
    const m = Object.keys(V), { shapeFlag: A } = p;
    m.length && A & 7 && (i && m.some(Ys) && (V = Jl(
      V,
      i
    )), p = yt(p, V, !1, !0));
  }
  return s.dirs && (p = yt(p, null, !1, !0), p.dirs = p.dirs ? p.dirs.concat(s.dirs) : s.dirs), s.transition && cn(p, s.transition), Y = p, Vt(z), Y;
}
const ql = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Kt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Jl = (e, t) => {
  const s = {};
  for (const n in e)
    (!Ys(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Yl(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: l, children: o, patchFlag: f } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? On(n, l, h) : !!l;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let g = 0; g < a.length; g++) {
        const C = a[g];
        if (Vr(l, n, C) && !Ts(h, C))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : n === l ? !1 : n ? l ? On(n, l, h) : !0 : !!l;
  return !1;
}
function On(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (Vr(t, e, i) && !Ts(s, i))
      return !0;
  }
  return !1;
}
function Vr(e, t, s) {
  const n = e[s], r = t[s];
  return s === "style" && q(n) && q(r) ? !ot(n, r) : n !== r;
}
function Lr({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const jr = {}, $r = () => Object.create(jr), Ur = (e) => Object.getPrototypeOf(e) === jr;
function Xl(e, t, s, n = !1) {
  const r = {}, i = $r();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Kr(e, t, r, i);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  s ? e.props = n ? r : /* @__PURE__ */ Qi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Zl(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, o = /* @__PURE__ */ B(r), [f] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const a = e.vnode.dynamicProps;
      for (let g = 0; g < a.length; g++) {
        let C = a[g];
        if (Ts(e.emitsOptions, C))
          continue;
        const E = t[C];
        if (f)
          if (W(i, C))
            E !== i[C] && (i[C] = E, h = !0);
          else {
            const K = Ae(C);
            r[K] = Gs(
              f,
              o,
              K,
              E,
              e,
              !1
            );
          }
        else
          E !== i[C] && (i[C] = E, h = !0);
      }
    }
  } else {
    Kr(e, t, r, i) && (h = !0);
    let a;
    for (const g in o)
      (!t || // for camelCase
      !W(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = ze(g)) === g || !W(t, a))) && (f ? s && // for camelCase
      (s[g] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[g] = Gs(
        f,
        o,
        g,
        void 0,
        e,
        !0
      )) : delete r[g]);
    if (i !== o)
      for (const g in i)
        (!t || !W(t, g)) && (delete i[g], h = !0);
  }
  h && Ke(e.attrs, "set", "");
}
function Kr(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let l = !1, o;
  if (t)
    for (let f in t) {
      if (nt(f))
        continue;
      const h = t[f];
      let a;
      r && W(r, a = Ae(f)) ? !i || !i.includes(a) ? s[a] = h : (o || (o = {}))[a] = h : Ts(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, l = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ B(s), h = o || X;
    for (let a = 0; a < i.length; a++) {
      const g = i[a];
      s[g] = Gs(
        r,
        f,
        g,
        h[g],
        e,
        !W(h, g)
      );
    }
  }
  return l;
}
function Gs(e, t, s, n, r, i) {
  const l = e[s];
  if (l != null) {
    const o = W(l, "default");
    if (o && n === void 0) {
      const f = l.default;
      if (l.type !== Function && !l.skipFactory && N(f)) {
        const { propsDefaults: h } = r;
        if (s in h)
          n = h[s];
        else {
          const a = kt(r);
          n = h[s] = f.call(
            null,
            t
          ), a();
        }
      } else
        n = f;
      r.ce && r.ce._setProp(s, n);
    }
    l[
      0
      /* shouldCast */
    ] && (i && !o ? n = !1 : l[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === ze(s)) && (n = !0));
  }
  return n;
}
const Ql = /* @__PURE__ */ new WeakMap();
function Br(e, t, s = !1) {
  const n = s ? Ql : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, o = [];
  let f = !1;
  if (!N(e)) {
    const a = (g) => {
      f = !0;
      const [C, E] = Br(g, t, !0);
      ie(l, C), E && o.push(...E);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return q(e) && n.set(e, ht), ht;
  if (R(i))
    for (let a = 0; a < i.length; a++) {
      const g = Ae(i[a]);
      Rn(g) && (l[g] = X);
    }
  else if (i)
    for (const a in i) {
      const g = Ae(a);
      if (Rn(g)) {
        const C = i[a], E = l[g] = R(C) || N(C) ? { type: C } : ie({}, C), K = E.type;
        let I = !1, z = !0;
        if (R(K))
          for (let Y = 0; Y < K.length; ++Y) {
            const V = K[Y], p = N(V) && V.name;
            if (p === "Boolean") {
              I = !0;
              break;
            } else p === "String" && (z = !1);
          }
        else
          I = N(K) && K.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = I, E[
          1
          /* shouldCastTrue */
        ] = z, (I || W(E, "default")) && o.push(g);
      }
    }
  const h = [l, o];
  return q(e) && n.set(e, h), h;
}
function Rn(e) {
  return e[0] !== "$" && !nt(e);
}
const fn = (e) => e === "_" || e === "_ctx" || e === "$stable", un = (e) => R(e) ? e.map(ye) : [ye(e)], zl = (e, t, s) => {
  if (t._n)
    return t;
  const n = al((...r) => un(t(...r)), s);
  return n._c = !1, n;
}, Wr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (fn(r)) continue;
    const i = e[r];
    if (N(i))
      t[r] = zl(r, i, n);
    else if (i != null) {
      const l = un(i);
      t[r] = () => l;
    }
  }
}, kr = (e, t) => {
  const s = un(t);
  e.slots.default = () => s;
}, Gr = (e, t, s) => {
  for (const n in t)
    (s || !fn(n)) && (e[n] = t[n]);
}, eo = (e, t, s) => {
  const n = e.slots = $r();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Gr(n, t, s), s && sr(n, "_", r, !0)) : Wr(t, n);
  } else t && kr(e, t);
}, to = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, l = X;
  if (n.shapeFlag & 32) {
    const o = t._;
    o ? s && o === 1 ? i = !1 : Gr(r, t, s) : (i = !t.$stable, Wr(t, r)), l = t;
  } else t && (kr(e, t), l = { default: 1 });
  if (i)
    for (const o in r)
      !fn(o) && l[o] == null && delete r[o];
}, ge = zr;
function so(e) {
  return qr(e);
}
function no(e) {
  return qr(e, Sl);
}
function qr(e, t) {
  const s = gs();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: l,
    createText: o,
    createComment: f,
    setText: h,
    setElementText: a,
    parentNode: g,
    nextSibling: C,
    setScopeId: E = Ne,
    insertStaticContent: K
  } = e, I = (c, u, d, x = null, _ = null, b = null, v = void 0, T = null, S = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Ct(c, u) && (x = qt(c), Oe(c, _, b, !0), c = null), u.patchFlag === -2 && (S = !1, u.dynamicChildren = null);
    const { type: y, ref: O, shapeFlag: w } = u;
    switch (y) {
      case it:
        z(c, u, d, x);
        break;
      case Je:
        Y(c, u, d, x);
        break;
      case Rt:
        c == null && V(u, d, x, v);
        break;
      case Ee:
        ne(
          c,
          u,
          d,
          x,
          _,
          b,
          v,
          T,
          S
        );
        break;
      default:
        w & 1 ? A(
          c,
          u,
          d,
          x,
          _,
          b,
          v,
          T,
          S
        ) : w & 6 ? re(
          c,
          u,
          d,
          x,
          _,
          b,
          v,
          T,
          S
        ) : (w & 64 || w & 128) && y.process(
          c,
          u,
          d,
          x,
          _,
          b,
          v,
          T,
          S,
          ct
        );
    }
    O != null && _ ? gt(O, c && c.ref, b, u || c, !u) : O == null && c && c.ref != null && gt(c.ref, null, b, c, !0);
  }, z = (c, u, d, x) => {
    if (c == null)
      n(
        u.el = o(u.children),
        d,
        x
      );
    else {
      const _ = u.el = c.el;
      u.children !== c.children && h(_, u.children);
    }
  }, Y = (c, u, d, x) => {
    c == null ? n(
      u.el = f(u.children || ""),
      d,
      x
    ) : u.el = c.el;
  }, V = (c, u, d, x) => {
    [c.el, c.anchor] = K(
      c.children,
      u,
      d,
      x,
      c.el,
      c.anchor
    );
  }, p = ({ el: c, anchor: u }, d, x) => {
    let _;
    for (; c && c !== u; )
      _ = C(c), n(c, d, x), c = _;
    n(u, d, x);
  }, m = ({ el: c, anchor: u }) => {
    let d;
    for (; c && c !== u; )
      d = C(c), r(c), c = d;
    r(u);
  }, A = (c, u, d, x, _, b, v, T, S) => {
    if (u.type === "svg" ? v = "svg" : u.type === "math" && (v = "mathml"), c == null)
      U(
        u,
        d,
        x,
        _,
        b,
        v,
        T,
        S
      );
    else {
      const y = c.el && c.el._isVueCE ? c.el : null;
      try {
        y && y._beginPatch(), J(
          c,
          u,
          _,
          b,
          v,
          T,
          S
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, U = (c, u, d, x, _, b, v, T) => {
    let S, y;
    const { props: O, shapeFlag: w, transition: P, dirs: D } = c;
    if (S = c.el = l(
      c.type,
      b,
      O && O.is,
      O
    ), w & 8 ? a(S, c.children) : w & 16 && k(
      c.children,
      S,
      null,
      x,
      _,
      Hs(c, b),
      v,
      T
    ), D && Ie(c, null, x, "created"), L(S, c, c.scopeId, v, x), O) {
      for (const Z in O)
        Z !== "value" && !nt(Z) && i(S, Z, null, O[Z], b, x);
      "value" in O && i(S, "value", null, O.value, b), (y = O.onVnodeBeforeMount) && Te(y, x, c);
    }
    D && Ie(c, null, x, "beforeMount");
    const $ = Jr(_, P);
    $ && P.beforeEnter(S), n(S, u, d), ((y = O && O.onVnodeMounted) || $ || D) && ge(() => {
      y && Te(y, x, c), $ && P.enter(S), D && Ie(c, null, x, "mounted");
    }, _);
  }, L = (c, u, d, x, _) => {
    if (d && E(c, d), x)
      for (let b = 0; b < x.length; b++)
        E(c, x[b]);
    if (_) {
      let b = _.subTree;
      if (u === b || Qr(b.type) && (b.ssContent === u || b.ssFallback === u)) {
        const v = _.vnode;
        L(
          c,
          v,
          v.scopeId,
          v.slotScopeIds,
          _.parent
        );
      }
    }
  }, k = (c, u, d, x, _, b, v, T, S = 0) => {
    for (let y = S; y < c.length; y++) {
      const O = c[y] = T ? Ue(c[y]) : ye(c[y]);
      I(
        null,
        O,
        u,
        d,
        x,
        _,
        b,
        v,
        T
      );
    }
  }, J = (c, u, d, x, _, b, v) => {
    const T = u.el = c.el;
    let { patchFlag: S, dynamicChildren: y, dirs: O } = u;
    S |= c.patchFlag & 16;
    const w = c.props || X, P = u.props || X;
    let D;
    if (d && tt(d, !1), (D = P.onVnodeBeforeUpdate) && Te(D, d, u, c), O && Ie(u, c, d, "beforeUpdate"), d && tt(d, !0), (w.innerHTML && P.innerHTML == null || w.textContent && P.textContent == null) && a(T, ""), y ? H(
      c.dynamicChildren,
      y,
      T,
      d,
      x,
      Hs(u, _),
      b
    ) : v || M(
      c,
      u,
      T,
      null,
      d,
      x,
      Hs(u, _),
      b,
      !1
    ), S > 0) {
      if (S & 16)
        te(T, w, P, d, _);
      else if (S & 2 && w.class !== P.class && i(T, "class", null, P.class, _), S & 4 && i(T, "style", w.style, P.style, _), S & 8) {
        const $ = u.dynamicProps;
        for (let Z = 0; Z < $.length; Z++) {
          const G = $[Z], pe = w[G], le = P[G];
          (le !== pe || G === "value") && i(T, G, pe, le, _, d);
        }
      }
      S & 1 && c.children !== u.children && a(T, u.children);
    } else !v && y == null && te(T, w, P, d, _);
    ((D = P.onVnodeUpdated) || O) && ge(() => {
      D && Te(D, d, u, c), O && Ie(u, c, d, "updated");
    }, x);
  }, H = (c, u, d, x, _, b, v) => {
    for (let T = 0; T < u.length; T++) {
      const S = c[T], y = u[T], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === Ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ct(S, y) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? g(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      I(
        S,
        y,
        O,
        null,
        x,
        _,
        b,
        v,
        !0
      );
    }
  }, te = (c, u, d, x, _) => {
    if (u !== d) {
      if (u !== X)
        for (const b in u)
          !nt(b) && !(b in d) && i(
            c,
            b,
            u[b],
            null,
            _,
            x
          );
      for (const b in d) {
        if (nt(b)) continue;
        const v = d[b], T = u[b];
        v !== T && b !== "value" && i(c, b, T, v, _, x);
      }
      "value" in d && i(c, "value", u.value, d.value, _);
    }
  }, ne = (c, u, d, x, _, b, v, T, S) => {
    const y = u.el = c ? c.el : o(""), O = u.anchor = c ? c.anchor : o("");
    let { patchFlag: w, dynamicChildren: P, slotScopeIds: D } = u;
    D && (T = T ? T.concat(D) : D), c == null ? (n(y, d, x), n(O, d, x), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      d,
      O,
      _,
      b,
      v,
      T,
      S
    )) : w > 0 && w & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === P.length ? (H(
      c.dynamicChildren,
      P,
      d,
      _,
      b,
      v,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || _ && u === _.subTree) && Yr(
      c,
      u,
      !0
      /* shallow */
    )) : M(
      c,
      u,
      d,
      O,
      _,
      b,
      v,
      T,
      S
    );
  }, re = (c, u, d, x, _, b, v, T, S) => {
    u.slotScopeIds = T, c == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      d,
      x,
      v,
      S
    ) : Se(
      u,
      d,
      x,
      _,
      b,
      v,
      S
    ) : de(c, u, S);
  }, Se = (c, u, d, x, _, b, v) => {
    const T = c.component = ri(
      c,
      x,
      _
    );
    if (Or(c) && (T.ctx.renderer = ct), li(T, !1, v), T.asyncDep) {
      if (_ && _.registerDep(T, F, v), !c.el) {
        const S = T.subTree = ce(Je);
        Y(null, S, u, d), c.placeholder = S.el;
      }
    } else
      F(
        T,
        c,
        u,
        d,
        _,
        b,
        v
      );
  }, de = (c, u, d) => {
    const x = u.component = c.component;
    if (Yl(c, u, d))
      if (x.asyncDep && !x.asyncResolved) {
        j(x, u, d);
        return;
      } else
        x.next = u, x.update();
    else
      u.el = c.el, x.vnode = u;
  }, F = (c, u, d, x, _, b, v) => {
    const T = () => {
      if (c.isMounted) {
        let { next: w, bu: P, u: D, parent: $, vnode: Z } = c;
        {
          const _e = Xr(c);
          if (_e) {
            w && (w.el = Z.el, j(c, w, v)), _e.asyncDep.then(() => {
              ge(() => {
                c.isUnmounted || y();
              }, _);
            });
            return;
          }
        }
        let G = w, pe;
        tt(c, !1), w ? (w.el = Z.el, j(c, w, v)) : w = Z, P && es(P), (pe = w.props && w.props.onVnodeBeforeUpdate) && Te(pe, $, w, Z), tt(c, !0);
        const le = ss(c), Ce = c.subTree;
        c.subTree = le, I(
          Ce,
          le,
          // parent may have changed if it's in a teleport
          g(Ce.el),
          // anchor may have changed if it's in a fragment
          qt(Ce),
          c,
          _,
          b
        ), w.el = le.el, G === null && Lr(c, le.el), D && ge(D, _), (pe = w.props && w.props.onVnodeUpdated) && ge(
          () => Te(pe, $, w, Z),
          _
        );
      } else {
        let w;
        const { el: P, props: D } = u, { bm: $, m: Z, parent: G, root: pe, type: le } = c, Ce = mt(u);
        if (tt(c, !1), $ && es($), !Ce && (w = D && D.onVnodeBeforeMount) && Te(w, G, u), tt(c, !0), P && Es) {
          const _e = () => {
            c.subTree = ss(c), Es(
              P,
              c.subTree,
              c,
              _,
              null
            );
          };
          Ce && le.__asyncHydrate ? le.__asyncHydrate(
            P,
            c,
            _e
          ) : _e();
        } else {
          pe.ce && pe.ce._hasShadowRoot() && pe.ce._injectChildStyle(
            le,
            c.parent ? c.parent.type : void 0
          );
          const _e = c.subTree = ss(c);
          I(
            null,
            _e,
            d,
            x,
            c,
            _,
            b
          ), u.el = _e.el;
        }
        if (Z && ge(Z, _), !Ce && (w = D && D.onVnodeMounted)) {
          const _e = u;
          ge(
            () => Te(w, G, _e),
            _
          );
        }
        (u.shapeFlag & 256 || G && mt(G.vnode) && G.vnode.shapeFlag & 256) && c.a && ge(c.a, _), c.isMounted = !0, u = d = x = null;
      }
    };
    c.scope.on();
    const S = c.effect = new or(T);
    c.scope.off();
    const y = c.update = S.run.bind(S), O = c.job = S.runIfDirty.bind(S);
    O.i = c, O.id = c.uid, S.scheduler = () => on(O), tt(c, !0), y();
  }, j = (c, u, d) => {
    u.component = c;
    const x = c.vnode.props;
    c.vnode = u, c.next = null, Zl(c, u.props, x, d), to(c, u.children, d), ke(), Sn(c), Ge();
  }, M = (c, u, d, x, _, b, v, T, S = !1) => {
    const y = c && c.children, O = c ? c.shapeFlag : 0, w = u.children, { patchFlag: P, shapeFlag: D } = u;
    if (P > 0) {
      if (P & 128) {
        Gt(
          y,
          w,
          d,
          x,
          _,
          b,
          v,
          T,
          S
        );
        return;
      } else if (P & 256) {
        ee(
          y,
          w,
          d,
          x,
          _,
          b,
          v,
          T,
          S
        );
        return;
      }
    }
    D & 8 ? (O & 16 && Tt(y, _, b), w !== y && a(d, w)) : O & 16 ? D & 16 ? Gt(
      y,
      w,
      d,
      x,
      _,
      b,
      v,
      T,
      S
    ) : Tt(y, _, b, !0) : (O & 8 && a(d, ""), D & 16 && k(
      w,
      d,
      x,
      _,
      b,
      v,
      T,
      S
    ));
  }, ee = (c, u, d, x, _, b, v, T, S) => {
    c = c || ht, u = u || ht;
    const y = c.length, O = u.length, w = Math.min(y, O);
    let P;
    for (P = 0; P < w; P++) {
      const D = u[P] = S ? Ue(u[P]) : ye(u[P]);
      I(
        c[P],
        D,
        d,
        null,
        _,
        b,
        v,
        T,
        S
      );
    }
    y > O ? Tt(
      c,
      _,
      b,
      !0,
      !1,
      w
    ) : k(
      u,
      d,
      x,
      _,
      b,
      v,
      T,
      S,
      w
    );
  }, Gt = (c, u, d, x, _, b, v, T, S) => {
    let y = 0;
    const O = u.length;
    let w = c.length - 1, P = O - 1;
    for (; y <= w && y <= P; ) {
      const D = c[y], $ = u[y] = S ? Ue(u[y]) : ye(u[y]);
      if (Ct(D, $))
        I(
          D,
          $,
          d,
          null,
          _,
          b,
          v,
          T,
          S
        );
      else
        break;
      y++;
    }
    for (; y <= w && y <= P; ) {
      const D = c[w], $ = u[P] = S ? Ue(u[P]) : ye(u[P]);
      if (Ct(D, $))
        I(
          D,
          $,
          d,
          null,
          _,
          b,
          v,
          T,
          S
        );
      else
        break;
      w--, P--;
    }
    if (y > w) {
      if (y <= P) {
        const D = P + 1, $ = D < O ? u[D].el : x;
        for (; y <= P; )
          I(
            null,
            u[y] = S ? Ue(u[y]) : ye(u[y]),
            d,
            $,
            _,
            b,
            v,
            T,
            S
          ), y++;
      }
    } else if (y > P)
      for (; y <= w; )
        Oe(c[y], _, b, !0), y++;
    else {
      const D = y, $ = y, Z = /* @__PURE__ */ new Map();
      for (y = $; y <= P; y++) {
        const be = u[y] = S ? Ue(u[y]) : ye(u[y]);
        be.key != null && Z.set(be.key, y);
      }
      let G, pe = 0;
      const le = P - $ + 1;
      let Ce = !1, _e = 0;
      const vt = new Array(le);
      for (y = 0; y < le; y++) vt[y] = 0;
      for (y = D; y <= w; y++) {
        const be = c[y];
        if (pe >= le) {
          Oe(be, _, b, !0);
          continue;
        }
        let Re;
        if (be.key != null)
          Re = Z.get(be.key);
        else
          for (G = $; G <= P; G++)
            if (vt[G - $] === 0 && Ct(be, u[G])) {
              Re = G;
              break;
            }
        Re === void 0 ? Oe(be, _, b, !0) : (vt[Re - $] = y + 1, Re >= _e ? _e = Re : Ce = !0, I(
          be,
          u[Re],
          d,
          null,
          _,
          b,
          v,
          T,
          S
        ), pe++);
      }
      const pn = Ce ? ro(vt) : ht;
      for (G = pn.length - 1, y = le - 1; y >= 0; y--) {
        const be = $ + y, Re = u[be], gn = u[be + 1], mn = be + 1 < O ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          gn.el || Zr(gn)
        ) : x;
        vt[y] === 0 ? I(
          null,
          Re,
          d,
          mn,
          _,
          b,
          v,
          T,
          S
        ) : Ce && (G < 0 || y !== pn[G] ? et(Re, d, mn, 2) : G--);
      }
    }
  }, et = (c, u, d, x, _ = null) => {
    const { el: b, type: v, transition: T, children: S, shapeFlag: y } = c;
    if (y & 6) {
      et(c.component.subTree, u, d, x);
      return;
    }
    if (y & 128) {
      c.suspense.move(u, d, x);
      return;
    }
    if (y & 64) {
      v.move(c, u, d, ct);
      return;
    }
    if (v === Ee) {
      n(b, u, d);
      for (let w = 0; w < S.length; w++)
        et(S[w], u, d, x);
      n(c.anchor, u, d);
      return;
    }
    if (v === Rt) {
      p(c, u, d);
      return;
    }
    if (x !== 2 && y & 1 && T)
      if (x === 0)
        T.beforeEnter(b), n(b, u, d), ge(() => T.enter(b), _);
      else {
        const { leave: w, delayLeave: P, afterLeave: D } = T, $ = () => {
          c.ctx.isUnmounted ? r(b) : n(b, u, d);
        }, Z = () => {
          b._isLeaving && b[bl](
            !0
            /* cancelled */
          ), w(b, () => {
            $(), D && D();
          });
        };
        P ? P(b, $, Z) : Z();
      }
    else
      n(b, u, d);
  }, Oe = (c, u, d, x = !1, _ = !1) => {
    const {
      type: b,
      props: v,
      ref: T,
      children: S,
      dynamicChildren: y,
      shapeFlag: O,
      patchFlag: w,
      dirs: P,
      cacheIndex: D
    } = c;
    if (w === -2 && (_ = !1), T != null && (ke(), gt(T, null, d, c, !0), Ge()), D != null && (u.renderCache[D] = void 0), O & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const $ = O & 1 && P, Z = !mt(c);
    let G;
    if (Z && (G = v && v.onVnodeBeforeUnmount) && Te(G, u, c), O & 6)
      gi(c.component, d, x);
    else {
      if (O & 128) {
        c.suspense.unmount(d, x);
        return;
      }
      $ && Ie(c, null, u, "beforeUnmount"), O & 64 ? c.type.remove(
        c,
        u,
        d,
        ct,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Ee || w > 0 && w & 64) ? Tt(
        y,
        u,
        d,
        !1,
        !0
      ) : (b === Ee && w & 384 || !_ && O & 16) && Tt(S, u, d), x && hn(c);
    }
    (Z && (G = v && v.onVnodeUnmounted) || $) && ge(() => {
      G && Te(G, u, c), $ && Ie(c, null, u, "unmounted");
    }, d);
  }, hn = (c) => {
    const { type: u, el: d, anchor: x, transition: _ } = c;
    if (u === Ee) {
      pi(d, x);
      return;
    }
    if (u === Rt) {
      m(c);
      return;
    }
    const b = () => {
      r(d), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: v, delayLeave: T } = _, S = () => v(d, b);
      T ? T(c.el, b, S) : S();
    } else
      b();
  }, pi = (c, u) => {
    let d;
    for (; c !== u; )
      d = C(c), r(c), c = d;
    r(u);
  }, gi = (c, u, d) => {
    const { bum: x, scope: _, job: b, subTree: v, um: T, m: S, a: y } = c;
    Fn(S), Fn(y), x && es(x), _.stop(), b && (b.flags |= 8, Oe(v, c, u, d)), T && ge(T, u), ge(() => {
      c.isUnmounted = !0;
    }, u);
  }, Tt = (c, u, d, x = !1, _ = !1, b = 0) => {
    for (let v = b; v < c.length; v++)
      Oe(c[v], u, d, x, _);
  }, qt = (c) => {
    if (c.shapeFlag & 6)
      return qt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = C(c.anchor || c.el), d = u && u[ml];
    return d ? C(d) : u;
  };
  let ws = !1;
  const dn = (c, u, d) => {
    let x;
    c == null ? u._vnode && (Oe(u._vnode, null, null, !0), x = u._vnode.component) : I(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      d
    ), u._vnode = c, ws || (ws = !0, Sn(x), os(), ws = !1);
  }, ct = {
    p: I,
    um: Oe,
    m: et,
    r: hn,
    mt: Se,
    mc: k,
    pc: M,
    pbc: H,
    n: qt,
    o: e
  };
  let Cs, Es;
  return t && ([Cs, Es] = t(
    ct
  )), {
    render: dn,
    hydrate: Cs,
    createApp: Bl(dn, Cs)
  };
}
function Hs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function tt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Jr(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Yr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (R(n) && R(r))
    for (let i = 0; i < n.length; i++) {
      const l = n[i];
      let o = r[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[i] = Ue(r[i]), o.el = l.el), !s && o.patchFlag !== -2 && Yr(l, o)), o.type === it && (o.patchFlag === -1 && (o = r[i] = Ue(o)), o.el = l.el), o.type === Je && !o.el && (o.el = l.el);
    }
}
function ro(e) {
  const t = e.slice(), s = [0];
  let n, r, i, l, o;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const h = e[n];
    if (h !== 0) {
      if (r = s[s.length - 1], e[r] < h) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, l = s.length - 1; i < l; )
        o = i + l >> 1, e[s[o]] < h ? i = o + 1 : l = o;
      h < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, l = s[i - 1]; i-- > 0; )
    s[i] = l, l = t[l];
  return s;
}
function Xr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Xr(t);
}
function Fn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Zr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Zr(t.subTree) : null;
}
const Qr = (e) => e.__isSuspense;
function zr(e, t) {
  t && t.pendingBranch ? R(e) ? t.effects.push(...e) : t.effects.push(e) : ul(e);
}
const Ee = /* @__PURE__ */ Symbol.for("v-fgt"), it = /* @__PURE__ */ Symbol.for("v-txt"), Je = /* @__PURE__ */ Symbol.for("v-cmt"), Rt = /* @__PURE__ */ Symbol.for("v-stc"), Ft = [];
let xe = null;
function io(e = !1) {
  Ft.push(xe = e ? null : []);
}
function lo() {
  Ft.pop(), xe = Ft[Ft.length - 1] || null;
}
let Lt = 1;
function us(e, t = !1) {
  Lt += e, e < 0 && xe && t && (xe.hasOnce = !0);
}
function ei(e) {
  return e.dynamicChildren = Lt > 0 ? xe || ht : null, lo(), Lt > 0 && xe && xe.push(e), e;
}
function ac(e, t, s, n, r, i) {
  return ei(
    si(
      e,
      t,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function oo(e, t, s, n, r) {
  return ei(
    ce(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function jt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ti = ({ key: e }) => e ?? null, ns = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || /* @__PURE__ */ fe(e) || N(e) ? { i: ve, r: e, k: t, f: !!s } : e : null);
function si(e, t = null, s = null, n = 0, r = null, i = e === Ee ? 0 : 1, l = !1, o = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ti(t),
    ref: t && ns(t),
    scopeId: Er,
    slotScopeIds: null,
    children: s,
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
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ve
  };
  return o ? (an(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= se(s) ? 8 : 16), Lt > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && xe.push(f), f;
}
const ce = co;
function co(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Hl) && (e = Je), jt(e)) {
    const o = yt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && an(o, s), Lt > 0 && !i && xe && (o.shapeFlag & 6 ? xe[xe.indexOf(e)] = o : xe.push(o)), o.patchFlag = -2, o;
  }
  if (bo(e) && (e = e.__vccOpts), t) {
    t = fo(t);
    let { class: o, style: f } = t;
    o && !se(o) && (t.class = _s(o)), q(f) && (/* @__PURE__ */ ln(f) && !R(f) && (f = ie({}, f)), t.style = ms(f));
  }
  const l = se(e) ? 1 : Qr(e) ? 128 : _l(e) ? 64 : q(e) ? 4 : N(e) ? 2 : 0;
  return si(
    e,
    t,
    s,
    n,
    r,
    l,
    i,
    !0
  );
}
function fo(e) {
  return e ? /* @__PURE__ */ ln(e) || Ur(e) ? ie({}, e) : e : null;
}
function yt(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: l, children: o, transition: f } = e, h = t ? uo(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && ti(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? R(i) ? i.concat(ns(t)) : [i, ns(t)] : ns(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ee ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && yt(e.ssContent),
    ssFallback: e.ssFallback && yt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && cn(
    a,
    f.clone(a)
  ), a;
}
function ni(e = " ", t = 0) {
  return ce(it, null, e, t);
}
function hc(e, t) {
  const s = ce(Rt, null, e);
  return s.staticCount = t, s;
}
function dc(e = "", t = !1) {
  return t ? (io(), oo(Je, null, e)) : ce(Je, null, e);
}
function ye(e) {
  return e == null || typeof e == "boolean" ? ce(Je) : R(e) ? ce(
    Ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : jt(e) ? Ue(e) : ce(it, null, String(e));
}
function Ue(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : yt(e);
}
function an(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (R(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), an(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Ur(t) ? t._ctx = ve : r === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else N(t) ? (t = { default: t, _ctx: ve }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [ni(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function uo(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = _s([t.class, n.class]));
      else if (r === "style")
        t.style = ms([t.style, n.style]);
      else if (Kt(r)) {
        const i = t[r], l = n[r];
        l && i !== l && !(R(i) && i.includes(l)) && (t[r] = i ? [].concat(i, l) : l);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Te(e, t, s, n = null) {
  Le(e, t, 7, [
    s,
    n
  ]);
}
const ao = Hr();
let ho = 0;
function ri(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || ao, i = {
    uid: ho++,
    vnode: e,
    type: n,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Fi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Br(n, r),
    emitsOptions: Nr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = kl.bind(null, i), e.ce && e.ce(i), i;
}
let he = null;
const po = () => he || ve;
let as, qs;
{
  const e = gs(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((l) => l(i)) : r[0](i);
    };
  };
  as = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => he = s
  ), qs = t(
    "__VUE_SSR_SETTERS__",
    (s) => $t = s
  );
}
const kt = (e) => {
  const t = he;
  return as(e), e.scope.on(), () => {
    e.scope.off(), as(t);
  };
}, In = () => {
  he && he.scope.off(), as(null);
};
function ii(e) {
  return e.vnode.shapeFlag & 4;
}
let $t = !1;
function li(e, t = !1, s = !1) {
  t && qs(t);
  const { props: n, children: r } = e.vnode, i = ii(e);
  Xl(e, n, i, t), eo(e, r, s || t);
  const l = i ? go(e, t) : void 0;
  return t && qs(!1), l;
}
function go(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Nl);
  const { setup: n } = s;
  if (n) {
    ke();
    const r = e.setupContext = n.length > 1 ? _o(e) : null, i = kt(e), l = Wt(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = Qn(l);
    if (Ge(), i(), (o || e.sp) && !mt(e) && Pr(e), o) {
      if (l.then(In, In), t)
        return l.then((f) => {
          Dn(e, f);
        }).catch((f) => {
          xs(f, e, 0);
        });
      e.asyncDep = l;
    } else
      Dn(e, l);
  } else
    oi(e);
}
function Dn(e, t, s) {
  N(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = Sr(t)), oi(e);
}
function oi(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Ne);
  {
    const r = kt(e);
    ke();
    try {
      Vl(e);
    } finally {
      Ge(), r();
    }
  }
}
const mo = {
  get(e, t) {
    return oe(e, "get", ""), e[t];
  }
};
function _o(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, mo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Sr(zi(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Ot)
        return Ot[s](e);
    },
    has(t, s) {
      return s in t || s in Ot;
    }
  })) : e.proxy;
}
function bo(e) {
  return N(e) && "__vccOpts" in e;
}
const yo = (e, t) => /* @__PURE__ */ il(e, t, $t);
function pc(e, t, s) {
  try {
    us(-1);
    const n = arguments.length;
    return n === 2 ? q(t) && !R(t) ? jt(t) ? ce(e, null, [t]) : ce(e, t) : ce(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && jt(s) && (s = [s]), ce(e, t, s));
  } finally {
    us(1);
  }
}
const xo = "3.5.30", So = {
  createComponentInstance: ri,
  setupComponent: li,
  renderComponentRoot: ss,
  setCurrentRenderingInstance: Vt,
  isVNode: jt,
  normalizeVNode: ye
}, gc = So;
let Js;
const Hn = typeof window < "u" && window.trustedTypes;
if (Hn)
  try {
    Js = /* @__PURE__ */ Hn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ci = Js ? (e) => Js.createHTML(e) : (e) => e, To = "http://www.w3.org/2000/svg", vo = "http://www.w3.org/1998/Math/MathML", $e = typeof document < "u" ? document : null, Nn = $e && /* @__PURE__ */ $e.createElement("template"), wo = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? $e.createElementNS(To, e) : t === "mathml" ? $e.createElementNS(vo, e) : s ? $e.createElement(e, { is: s }) : $e.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => $e.createTextNode(e),
  createComment: (e) => $e.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => $e.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, i) {
    const l = s ? s.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Nn.innerHTML = ci(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Nn.content;
      if (n === "svg" || n === "mathml") {
        const f = o.firstChild;
        for (; f.firstChild; )
          o.appendChild(f.firstChild);
        o.removeChild(f);
      }
      t.insertBefore(o, s);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Co = /* @__PURE__ */ Symbol("_vtc");
function Eo(e, t, s) {
  const n = e[Co];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const hs = /* @__PURE__ */ Symbol("_vod"), fi = /* @__PURE__ */ Symbol("_vsh"), Ao = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[hs] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : Et(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), Et(e, !0), n.enter(e)) : n.leave(e, () => {
      Et(e, !1);
    }) : Et(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Et(e, t);
  }
};
function Et(e, t) {
  e.style.display = t ? e[hs] : "none", e[fi] = !t;
}
function Mo() {
  Ao.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Po = /* @__PURE__ */ Symbol(""), Oo = /(?:^|;)\s*display\s*:/;
function Ro(e, t, s) {
  const n = e.style, r = se(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (se(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          s[o] == null && rs(n, o, "");
        }
      else
        for (const l in t)
          s[l] == null && rs(n, l, "");
    for (const l in s)
      l === "display" && (i = !0), rs(n, l, s[l]);
  } else if (r) {
    if (t !== s) {
      const l = n[Po];
      l && (s += ";" + l), n.cssText = s, i = Oo.test(s);
    }
  } else t && e.removeAttribute("style");
  hs in e && (e[hs] = i ? n.display : "", e[fi] && (n.display = "none"));
}
const Vn = /\s*!important$/;
function rs(e, t, s) {
  if (R(s))
    s.forEach((n) => rs(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Fo(e, t);
    Vn.test(s) ? e.setProperty(
      ze(n),
      s.replace(Vn, ""),
      "important"
    ) : e[n] = s;
  }
}
const Ln = ["Webkit", "Moz", "ms"], Ns = {};
function Fo(e, t) {
  const s = Ns[t];
  if (s)
    return s;
  let n = Ae(t);
  if (n !== "filter" && n in e)
    return Ns[t] = n;
  n = tr(n);
  for (let r = 0; r < Ln.length; r++) {
    const i = Ln[r] + n;
    if (i in e)
      return Ns[t] = i;
  }
  return t;
}
const jn = "http://www.w3.org/1999/xlink";
function $n(e, t, s, n, r, i = Ei(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(jn, t.slice(6, t.length)) : e.setAttributeNS(jn, t, s) : s == null || i && !rr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ve(s) ? String(s) : s
  );
}
function Un(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? ci(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const o = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (o !== f || !("_value" in e)) && (e.value = f), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let l = !1;
  if (s === "" || s == null) {
    const o = typeof e[t];
    o === "boolean" ? s = rr(s) : s == null && o === "string" ? (s = "", l = !0) : o === "number" && (s = 0, l = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  l && e.removeAttribute(r || t);
}
function Ze(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Io(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Kn = /* @__PURE__ */ Symbol("_vei");
function Do(e, t, s, n, r = null) {
  const i = e[Kn] || (e[Kn] = {}), l = i[t];
  if (n && l)
    l.value = n;
  else {
    const [o, f] = Ho(t);
    if (n) {
      const h = i[t] = Lo(
        n,
        r
      );
      Ze(e, o, h, f);
    } else l && (Io(e, o, l, f), i[t] = void 0);
  }
}
const Bn = /(?:Once|Passive|Capture)$/;
function Ho(e) {
  let t;
  if (Bn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Bn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ze(e.slice(2)), t];
}
let Vs = 0;
const No = /* @__PURE__ */ Promise.resolve(), Vo = () => Vs || (No.then(() => Vs = 0), Vs = Date.now());
function Lo(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Le(
      jo(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Vo(), s;
}
function jo(e, t) {
  if (R(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const Wn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, $o = (e, t, s, n, r, i) => {
  const l = r === "svg";
  t === "class" ? Eo(e, n, l) : t === "style" ? Ro(e, s, n) : Kt(t) ? Ys(t) || Do(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Uo(e, t, n, l)) ? (Un(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && $n(e, t, n, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ko(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !se(n))) ? Un(e, Ae(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), $n(e, t, n, l));
};
function Uo(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wn(t) && N(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Wn(t) && se(s) ? !1 : t in e;
}
function Ko(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Ae(t);
  return Array.isArray(s) ? s.some((r) => Ae(r) === n) : Object.keys(s).some((r) => Ae(r) === n);
}
const xt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return R(t) ? (s) => es(t, s) : t;
};
function Bo(e) {
  e.target.composing = !0;
}
function kn(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const We = /* @__PURE__ */ Symbol("_assign");
function Gn(e, t, s) {
  return t && (e = e.trim()), s && (e = ps(e)), e;
}
const Wo = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, r) {
    e[We] = xt(r);
    const i = n || r.props && r.props.type === "number";
    Ze(e, t ? "change" : "input", (l) => {
      l.target.composing || e[We](Gn(e.value, s, i));
    }), (s || i) && Ze(e, "change", () => {
      e.value = Gn(e.value, s, i);
    }), t || (Ze(e, "compositionstart", Bo), Ze(e, "compositionend", kn), Ze(e, "change", kn));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: r, number: i } }, l) {
    if (e[We] = xt(l), e.composing) return;
    const o = (i || e.type === "number") && !/^0\d/.test(e.value) ? ps(e.value) : e.value, f = t ?? "";
    o !== f && (document.activeElement === e && e.type !== "range" && (n && t === s || r && e.value.trim() === f) || (e.value = f));
  }
}, ko = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, s) {
    e[We] = xt(s), Ze(e, "change", () => {
      const n = e._modelValue, r = Ut(e), i = e.checked, l = e[We];
      if (R(n)) {
        const o = bs(n, r), f = o !== -1;
        if (i && !f)
          l(n.concat(r));
        else if (!i && f) {
          const h = [...n];
          h.splice(o, 1), l(h);
        }
      } else if (lt(n)) {
        const o = new Set(n);
        i ? o.add(r) : o.delete(r), l(o);
      } else
        l(ui(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: qn,
  beforeUpdate(e, t, s) {
    e[We] = xt(s), qn(e, t, s);
  }
};
function qn(e, { value: t, oldValue: s }, n) {
  e._modelValue = t;
  let r;
  if (R(t))
    r = bs(t, n.props.value) > -1;
  else if (lt(t))
    r = t.has(n.props.value);
  else {
    if (t === s) return;
    r = ot(t, ui(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
const Go = {}, mc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: s } }, n) {
    const r = lt(t);
    Ze(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => s ? ps(Ut(l)) : Ut(l)
      );
      e[We](
        e.multiple ? r ? new Set(i) : i : i[0]
      ), e._assigning = !0, vr(() => {
        e._assigning = !1;
      });
    }), e[We] = xt(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Jn(e, t);
  },
  beforeUpdate(e, t, s) {
    e[We] = xt(s);
  },
  updated(e, { value: t }) {
    e._assigning || Jn(e, t);
  }
};
function Jn(e, t) {
  const s = e.multiple, n = R(t);
  if (!(s && !n && !lt(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const l = e.options[r], o = Ut(l);
      if (s)
        if (n) {
          const f = typeof o;
          f === "string" || f === "number" ? l.selected = t.some((h) => String(h) === String(o)) : l.selected = bs(t, o) > -1;
        } else
          l.selected = t.has(o);
      else if (ot(Ut(l), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ut(e) {
  return "_value" in e ? e._value : e.value;
}
function ui(e, t) {
  const s = t ? "_trueValue" : "_falseValue";
  return s in e ? e[s] : t;
}
function qo() {
  Wo.getSSRProps = ({ value: e }) => ({ value: e }), Go.getSSRProps = ({ value: e }, t) => {
    if (t.props && ot(t.props.value, e))
      return { checked: !0 };
  }, ko.getSSRProps = ({ value: e }, t) => {
    if (R(e)) {
      if (t.props && bs(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (lt(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const ai = /* @__PURE__ */ ie({ patchProp: $o }, wo);
let It, Yn = !1;
function Jo() {
  return It || (It = so(ai));
}
function Yo() {
  return It = Yn ? It : no(ai), Yn = !0, It;
}
const _c = ((...e) => {
  const t = Jo().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = di(n);
    if (!r) return;
    const i = t._component;
    !N(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const l = s(r, !1, hi(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
}), bc = ((...e) => {
  const t = Yo().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = di(n);
    if (r)
      return s(r, !0, hi(r));
  }, t;
});
function hi(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function di(e) {
  return se(e) ? document.querySelector(e) : e;
}
let Xn = !1;
const yc = () => {
  Xn || (Xn = !0, qo(), Mo());
};
export {
  lc as $,
  gs as A,
  dl as B,
  gc as C,
  Qn as D,
  N as E,
  Ee as F,
  se as G,
  Je as H,
  ic as I,
  rc as J,
  uo as K,
  zo as L,
  R as M,
  Ne as N,
  Kt as O,
  St as P,
  ms as Q,
  Xo as R,
  Rt as S,
  it as T,
  nc as U,
  Qo as V,
  sc as W,
  ec as X,
  rr as Y,
  tc as Z,
  q as _,
  ac as a,
  yc as a0,
  bc as a1,
  si as b,
  yo as c,
  fc as d,
  ce as e,
  hc as f,
  dc as g,
  pc as h,
  fe as i,
  uc as j,
  ko as k,
  Ao as l,
  ni as m,
  _s as n,
  io as o,
  mc as p,
  Al as q,
  oc as r,
  vr as s,
  Ri as t,
  sl as u,
  Wo as v,
  cc as w,
  Zo as x,
  fo as y,
  _c as z
};
