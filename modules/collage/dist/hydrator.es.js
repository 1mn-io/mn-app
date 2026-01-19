// @__NO_SIDE_EFFECTS__
function Yn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const J = {}, _t = [], $e = () => {
}, tr = () => !1, un = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xn = (e) => e.startsWith("onUpdate:"), ne = Object.assign, Zn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, bi = Object.prototype.hasOwnProperty, V = (e, t) => bi.call(e, t), R = Array.isArray, bt = (e) => an(e) === "[object Map]", nr = (e) => an(e) === "[object Set]", L = (e) => typeof e == "function", ee = (e) => typeof e == "string", nt = (e) => typeof e == "symbol", Y = (e) => e !== null && typeof e == "object", sr = (e) => (Y(e) || L(e)) && L(e.then) && L(e.catch), rr = Object.prototype.toString, an = (e) => rr.call(e), yi = (e) => an(e).slice(8, -1), ir = (e) => an(e) === "[object Object]", Qn = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, It = /* @__PURE__ */ Yn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), dn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, vi = /-\w/g, et = dn(
  (e) => e.replace(vi, (t) => t.slice(1).toUpperCase())
), xi = /\B([A-Z])/g, pt = dn(
  (e) => e.replace(xi, "-$1").toLowerCase()
), or = dn((e) => e.charAt(0).toUpperCase() + e.slice(1)), xn = dn(
  (e) => e ? `on${or(e)}` : ""
), Qe = (e, t) => !Object.is(e, t), wn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, lr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, wi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Si = (e) => {
  const t = ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let vs;
const hn = () => vs || (vs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function xt(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ee(s) ? Ai(s) : xt(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ee(e) || Y(e))
    return e;
}
const Ci = /;(?![^(]*\))/g, Ti = /:([^]+)/, Ei = /\/\*[^]*?\*\//g;
function Ai(e) {
  const t = {};
  return e.replace(Ei, "").split(Ci).forEach((n) => {
    if (n) {
      const s = n.split(Ti);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ze(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if (R(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ze(e[n]);
      s && (t += s + " ");
    }
  else if (Y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Mi(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !ee(t) && (e.class = Ze(t)), n && (e.style = xt(n)), e;
}
const Ii = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Oi = /* @__PURE__ */ Yn(Ii);
function cr(e) {
  return !!e || e === "";
}
const fr = (e) => !!(e && e.__v_isRef === !0), Dn = (e) => ee(e) ? e : e == null ? "" : R(e) || Y(e) && (e.toString === rr || !L(e.toString)) ? fr(e) ? Dn(e.value) : JSON.stringify(e, ur, 2) : String(e), ur = (e, t) => fr(t) ? ur(e, t.value) : bt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Sn(s, i) + " =>"] = r, n),
    {}
  )
} : nr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Sn(n))
} : nt(t) ? Sn(t) : Y(t) && !R(t) && !ir(t) ? String(t) : t, Sn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let me;
class Pi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = me, !t && me && (this.index = (me.scopes || (me.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = me;
      try {
        return me = this, t();
      } finally {
        me = n;
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
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
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
function Ri() {
  return me;
}
let G;
const Cn = /* @__PURE__ */ new WeakSet();
class ar {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, me && me.active && me.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Cn.has(this) && (Cn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || hr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xs(this), pr(this);
    const t = G, n = Te;
    G = this, Te = !0;
    try {
      return this.fn();
    } finally {
      gr(this), G = t, Te = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ns(t);
      this.deps = this.depsTail = void 0, xs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Cn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $n(this) && this.run();
  }
  get dirty() {
    return $n(this);
  }
}
let dr = 0, Ot, Pt;
function hr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pt, Pt = e;
    return;
  }
  e.next = Ot, Ot = e;
}
function es() {
  dr++;
}
function ts() {
  if (--dr > 0)
    return;
  if (Pt) {
    let t = Pt;
    for (Pt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ot; ) {
    let t = Ot;
    for (Ot = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function pr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function gr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), ns(s), Fi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function $n(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (mr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function mr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === $t) || (e.globalVersion = $t, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !$n(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = G, s = Te;
  G = e, Te = !0;
  try {
    pr(e);
    const r = e.fn(e._value);
    (t.version === 0 || Qe(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    G = n, Te = s, gr(e), e.flags &= -3;
  }
}
function ns(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      ns(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Fi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Te = !0;
const _r = [];
function Ue() {
  _r.push(Te), Te = !1;
}
function Ke() {
  const e = _r.pop();
  Te = e === void 0 ? !0 : e;
}
function xs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = G;
    G = void 0;
    try {
      t();
    } finally {
      G = n;
    }
  }
}
let $t = 0;
class Li {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ss {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!G || !Te || G === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== G)
      n = this.activeLink = new Li(G, this), G.deps ? (n.prevDep = G.depsTail, G.depsTail.nextDep = n, G.depsTail = n) : G.deps = G.depsTail = n, br(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = G.depsTail, n.nextDep = void 0, G.depsTail.nextDep = n, G.depsTail = n, G.deps === n && (G.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, $t++, this.notify(t);
  }
  notify(t) {
    es();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ts();
    }
  }
}
function br(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        br(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Nn = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ Symbol(
  ""
), Hn = /* @__PURE__ */ Symbol(
  ""
), Nt = /* @__PURE__ */ Symbol(
  ""
);
function le(e, t, n) {
  if (Te && G) {
    let s = Nn.get(e);
    s || Nn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new ss()), r.map = s, r.key = n), r.track();
  }
}
function Ve(e, t, n, s, r, i) {
  const o = Nn.get(e);
  if (!o) {
    $t++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (es(), t === "clear")
    o.forEach(l);
  else {
    const f = R(e), d = f && Qn(n);
    if (f && n === "length") {
      const u = Number(s);
      o.forEach((h, y) => {
        (y === "length" || y === Nt || !nt(y) && y >= u) && l(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(Nt)), t) {
        case "add":
          f ? d && l(o.get("length")) : (l(o.get(dt)), bt(e) && l(o.get(Hn)));
          break;
        case "delete":
          f || (l(o.get(dt)), bt(e) && l(o.get(Hn)));
          break;
        case "set":
          bt(e) && l(o.get(dt));
          break;
      }
  }
  ts();
}
function gt(e) {
  const t = /* @__PURE__ */ k(e);
  return t === e ? t : (le(t, "iterate", Nt), /* @__PURE__ */ Se(e) ? t : t.map(Ee));
}
function pn(e) {
  return le(e = /* @__PURE__ */ k(e), "iterate", Nt), e;
}
function Ge(e, t) {
  return /* @__PURE__ */ We(e) ? wt(/* @__PURE__ */ ht(e) ? Ee(t) : t) : Ee(t);
}
const Di = {
  __proto__: null,
  [Symbol.iterator]() {
    return Tn(this, Symbol.iterator, (e) => Ge(this, e));
  },
  concat(...e) {
    return gt(this).concat(
      ...e.map((t) => R(t) ? gt(t) : t)
    );
  },
  entries() {
    return Tn(this, "entries", (e) => (e[1] = Ge(this, e[1]), e));
  },
  every(e, t) {
    return He(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return He(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Ge(this, s)),
      arguments
    );
  },
  find(e, t) {
    return He(
      this,
      "find",
      e,
      t,
      (n) => Ge(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return He(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return He(
      this,
      "findLast",
      e,
      t,
      (n) => Ge(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return He(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return He(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return En(this, "includes", e);
  },
  indexOf(...e) {
    return En(this, "indexOf", e);
  },
  join(e) {
    return gt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return En(this, "lastIndexOf", e);
  },
  map(e, t) {
    return He(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Et(this, "pop");
  },
  push(...e) {
    return Et(this, "push", e);
  },
  reduce(e, ...t) {
    return ws(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ws(this, "reduceRight", e, t);
  },
  shift() {
    return Et(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return He(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Et(this, "splice", e);
  },
  toReversed() {
    return gt(this).toReversed();
  },
  toSorted(e) {
    return gt(this).toSorted(e);
  },
  toSpliced(...e) {
    return gt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Et(this, "unshift", e);
  },
  values() {
    return Tn(this, "values", (e) => Ge(this, e));
  }
};
function Tn(e, t, n) {
  const s = pn(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ Se(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const $i = Array.prototype;
function He(e, t, n, s, r, i) {
  const o = pn(e), l = o !== e && !/* @__PURE__ */ Se(e), f = o[t];
  if (f !== $i[t]) {
    const h = f.apply(e, i);
    return l ? Ee(h) : h;
  }
  let d = n;
  o !== e && (l ? d = function(h, y) {
    return n.call(this, Ge(e, h), y, e);
  } : n.length > 2 && (d = function(h, y) {
    return n.call(this, h, y, e);
  }));
  const u = f.call(o, d, s);
  return l && r ? r(u) : u;
}
function ws(e, t, n, s) {
  const r = pn(e);
  let i = n;
  return r !== e && (/* @__PURE__ */ Se(e) ? n.length > 3 && (i = function(o, l, f) {
    return n.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return n.call(this, o, Ge(e, l), f, e);
  }), r[t](i, ...s);
}
function En(e, t, n) {
  const s = /* @__PURE__ */ k(e);
  le(s, "iterate", Nt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ ls(n[0]) ? (n[0] = /* @__PURE__ */ k(n[0]), s[t](...n)) : r;
}
function Et(e, t, n = []) {
  Ue(), es();
  const s = (/* @__PURE__ */ k(e))[t].apply(e, n);
  return ts(), Ke(), s;
}
const Ni = /* @__PURE__ */ Yn("__proto__,__v_isRef,__isVue"), yr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(nt)
);
function Hi(e) {
  nt(e) || (e = String(e));
  const t = /* @__PURE__ */ k(this);
  return le(t, "has", e), t.hasOwnProperty(e);
}
class vr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? Gi : Cr : i ? Sr : wr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = R(t);
    if (!r) {
      let f;
      if (o && (f = Di[n]))
        return f;
      if (n === "hasOwnProperty")
        return Hi;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ce(t) ? t : s
    );
    if ((nt(n) ? yr.has(n) : Ni(n)) || (r || le(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ ce(l)) {
      const f = o && Qn(n) ? l : l.value;
      return r && Y(f) ? /* @__PURE__ */ Bn(f) : f;
    }
    return Y(l) ? r ? /* @__PURE__ */ Bn(l) : /* @__PURE__ */ is(l) : l;
  }
}
class xr extends vr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = R(t) && Qn(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ We(i);
      if (!/* @__PURE__ */ Se(s) && !/* @__PURE__ */ We(s) && (i = /* @__PURE__ */ k(i), s = /* @__PURE__ */ k(s)), !o && /* @__PURE__ */ ce(i) && !/* @__PURE__ */ ce(s))
        return d || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : V(t, n), f = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ce(t) ? t : r
    );
    return t === /* @__PURE__ */ k(r) && (l ? Qe(s, i) && Ve(t, "set", n, s) : Ve(t, "add", n, s)), f;
  }
  deleteProperty(t, n) {
    const s = V(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Ve(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!nt(n) || !yr.has(n)) && le(t, "has", n), s;
  }
  ownKeys(t) {
    return le(
      t,
      "iterate",
      R(t) ? "length" : dt
    ), Reflect.ownKeys(t);
  }
}
class ji extends vr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Bi = /* @__PURE__ */ new xr(), ki = /* @__PURE__ */ new ji(), Vi = /* @__PURE__ */ new xr(!0);
const jn = (e) => e, zt = (e) => Reflect.getPrototypeOf(e);
function Ui(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ k(r), o = bt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, d = r[e](...s), u = n ? jn : t ? wt : Ee;
    return !t && le(
      i,
      "iterate",
      f ? Hn : dt
    ), ne(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: y } = d.next();
          return y ? { value: h, done: y } : {
            value: l ? [u(h[0]), u(h[1])] : u(h),
            done: y
          };
        }
      }
    );
  };
}
function Gt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ki(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ k(i), l = /* @__PURE__ */ k(r);
      e || (Qe(r, l) && le(o, "get", r), le(o, "get", l));
      const { has: f } = zt(o), d = t ? jn : e ? wt : Ee;
      if (f.call(o, r))
        return d(i.get(r));
      if (f.call(o, l))
        return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && le(/* @__PURE__ */ k(r), "iterate", dt), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ k(i), l = /* @__PURE__ */ k(r);
      return e || (Qe(r, l) && le(o, "has", r), le(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, f = /* @__PURE__ */ k(l), d = t ? jn : e ? wt : Ee;
      return !e && le(f, "iterate", dt), l.forEach((u, h) => r.call(i, d(u), d(h), o));
    }
  };
  return ne(
    n,
    e ? {
      add: Gt("add"),
      set: Gt("set"),
      delete: Gt("delete"),
      clear: Gt("clear")
    } : {
      add(r) {
        !t && !/* @__PURE__ */ Se(r) && !/* @__PURE__ */ We(r) && (r = /* @__PURE__ */ k(r));
        const i = /* @__PURE__ */ k(this);
        return zt(i).has.call(i, r) || (i.add(r), Ve(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Se(i) && !/* @__PURE__ */ We(i) && (i = /* @__PURE__ */ k(i));
        const o = /* @__PURE__ */ k(this), { has: l, get: f } = zt(o);
        let d = l.call(o, r);
        d || (r = /* @__PURE__ */ k(r), d = l.call(o, r));
        const u = f.call(o, r);
        return o.set(r, i), d ? Qe(i, u) && Ve(o, "set", r, i) : Ve(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ k(this), { has: o, get: l } = zt(i);
        let f = o.call(i, r);
        f || (r = /* @__PURE__ */ k(r), f = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return f && Ve(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ k(this), i = r.size !== 0, o = r.clear();
        return i && Ve(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Ui(r, e, t);
  }), n;
}
function rs(e, t) {
  const n = Ki(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    V(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Wi = {
  get: /* @__PURE__ */ rs(!1, !1)
}, qi = {
  get: /* @__PURE__ */ rs(!1, !0)
}, zi = {
  get: /* @__PURE__ */ rs(!0, !1)
};
const wr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), Gi = /* @__PURE__ */ new WeakMap();
function Ji(e) {
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
function Yi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ji(yi(e));
}
// @__NO_SIDE_EFFECTS__
function is(e) {
  return /* @__PURE__ */ We(e) ? e : os(
    e,
    !1,
    Bi,
    Wi,
    wr
  );
}
// @__NO_SIDE_EFFECTS__
function Xi(e) {
  return os(
    e,
    !1,
    Vi,
    qi,
    Sr
  );
}
// @__NO_SIDE_EFFECTS__
function Bn(e) {
  return os(
    e,
    !0,
    ki,
    zi,
    Cr
  );
}
function os(e, t, n, s, r) {
  if (!Y(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Yi(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  return /* @__PURE__ */ We(e) ? /* @__PURE__ */ ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Se(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ls(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function k(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ k(t) : e;
}
function Zi(e) {
  return !V(e, "__v_skip") && Object.isExtensible(e) && lr(e, "__v_skip", !0), e;
}
const Ee = (e) => Y(e) ? /* @__PURE__ */ is(e) : e, wt = (e) => Y(e) ? /* @__PURE__ */ Bn(e) : e;
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  return Qi(e, !1);
}
function Qi(e, t) {
  return /* @__PURE__ */ ce(e) ? e : new eo(e, t);
}
class eo {
  constructor(t, n) {
    this.dep = new ss(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ k(t), this._value = n ? t : Ee(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Se(t) || /* @__PURE__ */ We(t);
    t = s ? t : /* @__PURE__ */ k(t), Qe(t, n) && (this._rawValue = t, this._value = s ? t : Ee(t), this.dep.trigger());
  }
}
function kn(e) {
  return /* @__PURE__ */ ce(e) ? e.value : e;
}
const to = {
  get: (e, t, n) => t === "__v_raw" ? e : kn(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ ce(r) && !/* @__PURE__ */ ce(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Tr(e) {
  return /* @__PURE__ */ ht(e) ? e : new Proxy(e, to);
}
class no {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ss(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = $t - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    G !== this)
      return hr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return mr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function so(e, t, n = !1) {
  let s, r;
  return L(e) ? s = e : (s = e.get, r = e.set), new no(s, r, n);
}
const Jt = {}, tn = /* @__PURE__ */ new WeakMap();
let ut;
function ro(e, t = !1, n = ut) {
  if (n) {
    let s = tn.get(n);
    s || tn.set(n, s = []), s.push(e);
  }
}
function io(e, t, n = J) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = n, d = (M) => r ? M : /* @__PURE__ */ Se(M) || r === !1 || r === 0 ? Xe(M, 1) : Xe(M);
  let u, h, y, w, O = !1, D = !1;
  if (/* @__PURE__ */ ce(e) ? (h = () => e.value, O = /* @__PURE__ */ Se(e)) : /* @__PURE__ */ ht(e) ? (h = () => d(e), O = !0) : R(e) ? (D = !0, O = e.some((M) => /* @__PURE__ */ ht(M) || /* @__PURE__ */ Se(M)), h = () => e.map((M) => {
    if (/* @__PURE__ */ ce(M))
      return M.value;
    if (/* @__PURE__ */ ht(M))
      return d(M);
    if (L(M))
      return f ? f(M, 2) : M();
  })) : L(e) ? t ? h = f ? () => f(e, 2) : e : h = () => {
    if (y) {
      Ue();
      try {
        y();
      } finally {
        Ke();
      }
    }
    const M = ut;
    ut = u;
    try {
      return f ? f(e, 3, [w]) : e(w);
    } finally {
      ut = M;
    }
  } : h = $e, t && r) {
    const M = h, W = r === !0 ? 1 / 0 : r;
    h = () => Xe(M(), W);
  }
  const Q = Ri(), $ = () => {
    u.stop(), Q && Q.active && Zn(Q.effects, u);
  };
  if (i && t) {
    const M = t;
    t = (...W) => {
      M(...W), $();
    };
  }
  let j = D ? new Array(e.length).fill(Jt) : Jt;
  const B = (M) => {
    if (!(!(u.flags & 1) || !u.dirty && !M))
      if (t) {
        const W = u.run();
        if (r || O || (D ? W.some((te, ie) => Qe(te, j[ie])) : Qe(W, j))) {
          y && y();
          const te = ut;
          ut = u;
          try {
            const ie = [
              W,
              // pass undefined as the old value when it's changed for the first time
              j === Jt ? void 0 : D && j[0] === Jt ? [] : j,
              w
            ];
            j = W, f ? f(t, 3, ie) : (
              // @ts-expect-error
              t(...ie)
            );
          } finally {
            ut = te;
          }
        }
      } else
        u.run();
  };
  return l && l(B), u = new ar(h), u.scheduler = o ? () => o(B, !1) : B, w = (M) => ro(M, !1, u), y = u.onStop = () => {
    const M = tn.get(u);
    if (M) {
      if (f)
        f(M, 4);
      else
        for (const W of M) W();
      tn.delete(u);
    }
  }, t ? s ? B(!0) : j = u.run() : o ? o(B.bind(null, !0), !0) : u.run(), $.pause = u.pause.bind(u), $.resume = u.resume.bind(u), $.stop = $, $;
}
function Xe(e, t = 1 / 0, n) {
  if (t <= 0 || !Y(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ce(e))
    Xe(e.value, t, n);
  else if (R(e))
    for (let s = 0; s < e.length; s++)
      Xe(e[s], t, n);
  else if (nr(e) || bt(e))
    e.forEach((s) => {
      Xe(s, t, n);
    });
  else if (ir(e)) {
    for (const s in e)
      Xe(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Xe(e[s], t, n);
  }
  return e;
}
function Ut(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    gn(r, t, n);
  }
}
function Ae(e, t, n, s) {
  if (L(e)) {
    const r = Ut(e, t, n, s);
    return r && sr(r) && r.catch((i) => {
      gn(i, t, n);
    }), r;
  }
  if (R(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Ae(e[i], t, n, s));
    return r;
  }
}
function gn(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || J;
  if (t) {
    let l = t.parent;
    const f = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, f, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ue(), Ut(i, null, 10, [
        e,
        f,
        d
      ]), Ke();
      return;
    }
  }
  oo(e, n, r, s, o);
}
function oo(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ue = [];
let Fe = -1;
const yt = [];
let Je = null, mt = 0;
const Er = /* @__PURE__ */ Promise.resolve();
let nn = null;
function Ar(e) {
  const t = nn || Er;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function lo(e) {
  let t = Fe + 1, n = ue.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ue[s], i = Ht(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function cs(e) {
  if (!(e.flags & 1)) {
    const t = Ht(e), n = ue[ue.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ht(n) ? ue.push(e) : ue.splice(lo(t), 0, e), e.flags |= 1, Mr();
  }
}
function Mr() {
  nn || (nn = Er.then(Or));
}
function co(e) {
  R(e) ? yt.push(...e) : Je && e.id === -1 ? Je.splice(mt + 1, 0, e) : e.flags & 1 || (yt.push(e), e.flags |= 1), Mr();
}
function Ss(e, t, n = Fe + 1) {
  for (; n < ue.length; n++) {
    const s = ue[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ue.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ir(e) {
  if (yt.length) {
    const t = [...new Set(yt)].sort(
      (n, s) => Ht(n) - Ht(s)
    );
    if (yt.length = 0, Je) {
      Je.push(...t);
      return;
    }
    for (Je = t, mt = 0; mt < Je.length; mt++) {
      const n = Je[mt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Je = null, mt = 0;
  }
}
const Ht = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Or(e) {
  try {
    for (Fe = 0; Fe < ue.length; Fe++) {
      const t = ue[Fe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ut(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Fe < ue.length; Fe++) {
      const t = ue[Fe];
      t && (t.flags &= -2);
    }
    Fe = -1, ue.length = 0, Ir(), nn = null, (ue.length || yt.length) && Or();
  }
}
let De = null, Pr = null;
function sn(e) {
  const t = De;
  return De = e, Pr = e && e.type.__scopeId || null, t;
}
function Rr(e, t = De, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && ln(-1);
    const i = sn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      sn(i), s._d && ln(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ot(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[s];
    f && (Ue(), Ae(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ke());
  }
}
function fo(e, t) {
  if (de) {
    let n = de.provides;
    const s = de.parent && de.parent.provides;
    s === n && (n = de.provides = Object.create(s)), n[e] = t;
  }
}
function Xt(e, t, n = !1) {
  const s = ai();
  if (s || vt) {
    let r = vt ? vt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(s && s.proxy) : t;
  }
}
const uo = /* @__PURE__ */ Symbol.for("v-scx"), ao = () => Xt(uo);
function An(e, t, n) {
  return Fr(e, t, n);
}
function Fr(e, t, n = J) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = ne({}, n), f = t && s || !t && i !== "post";
  let d;
  if (kt) {
    if (i === "sync") {
      const w = ao();
      d = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!f) {
      const w = () => {
      };
      return w.stop = $e, w.resume = $e, w.pause = $e, w;
    }
  }
  const u = de;
  l.call = (w, O, D) => Ae(w, u, O, D);
  let h = !1;
  i === "post" ? l.scheduler = (w) => {
    ye(w, u && u.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (w, O) => {
    O ? w() : cs(w);
  }), l.augmentJob = (w) => {
    t && (w.flags |= 4), h && (w.flags |= 2, u && (w.id = u.uid, w.i = u));
  };
  const y = io(e, t, l);
  return kt && (d ? d.push(y) : f && y()), y;
}
function ho(e, t, n) {
  const s = this.proxy, r = ee(e) ? e.includes(".") ? Lr(s, e) : () => s[e] : e.bind(s, s);
  let i;
  L(t) ? i = t : (i = t.handler, n = t);
  const o = Kt(this), l = Fr(r, i.bind(s), n);
  return o(), l;
}
function Lr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const po = /* @__PURE__ */ Symbol("_vte"), Dr = (e) => e.__isTeleport, ke = /* @__PURE__ */ Symbol("_leaveCb"), Yt = /* @__PURE__ */ Symbol("_enterCb");
function go() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return fs(() => {
    e.isMounted = !0;
  }), Kr(() => {
    e.isUnmounting = !0;
  }), e;
}
const we = [Function, Array], $r = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: we,
  onEnter: we,
  onAfterEnter: we,
  onEnterCancelled: we,
  // leave
  onBeforeLeave: we,
  onLeave: we,
  onAfterLeave: we,
  onLeaveCancelled: we,
  // appear
  onBeforeAppear: we,
  onAppear: we,
  onAfterAppear: we,
  onAppearCancelled: we
}, Nr = (e) => {
  const t = e.subTree;
  return t.component ? Nr(t.component) : t;
}, mo = {
  name: "BaseTransition",
  props: $r,
  setup(e, { slots: t }) {
    const n = ai(), s = go();
    return () => {
      const r = t.default && Br(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = Hr(r), o = /* @__PURE__ */ k(e), { mode: l } = o;
      if (s.isLeaving)
        return Mn(i);
      const f = Cs(i);
      if (!f)
        return Mn(i);
      let d = Vn(
        f,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      f.type !== ae && jt(f, d);
      let u = n.subTree && Cs(n.subTree);
      if (u && u.type !== ae && !at(u, f) && Nr(n).type !== ae) {
        let h = Vn(
          u,
          o,
          s,
          n
        );
        if (jt(u, h), l === "out-in" && f.type !== ae)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, Mn(i);
        l === "in-out" && f.type !== ae ? h.delayLeave = (y, w, O) => {
          const D = jr(
            s,
            u
          );
          D[String(u.key)] = u, y[ke] = () => {
            w(), y[ke] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            O(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function Hr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ae) {
        t = n;
        break;
      }
  }
  return t;
}
const _o = mo;
function jr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Vn(e, t, n, s, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: f,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: y,
    onLeave: w,
    onAfterLeave: O,
    onLeaveCancelled: D,
    onBeforeAppear: Q,
    onAppear: $,
    onAfterAppear: j,
    onAppearCancelled: B
  } = t, M = String(e.key), W = jr(n, e), te = (E, P) => {
    E && Ae(
      E,
      s,
      9,
      P
    );
  }, ie = (E, P) => {
    const U = P[1];
    te(E, P), R(E) ? E.every((C) => C.length <= 1) && U() : E.length <= 1 && U();
  }, N = {
    mode: o,
    persisted: l,
    beforeEnter(E) {
      let P = f;
      if (!n.isMounted)
        if (i)
          P = Q || f;
        else
          return;
      E[ke] && E[ke](
        !0
        /* cancelled */
      );
      const U = W[M];
      U && at(e, U) && U.el[ke] && U.el[ke](), te(P, [E]);
    },
    enter(E) {
      let P = d, U = u, C = h;
      if (!n.isMounted)
        if (i)
          P = $ || d, U = j || u, C = B || h;
        else
          return;
      let X = !1;
      const oe = E[Yt] = (Ne) => {
        X || (X = !0, Ne ? te(C, [E]) : te(U, [E]), N.delayedLeave && N.delayedLeave(), E[Yt] = void 0);
      };
      P ? ie(P, [E, oe]) : oe();
    },
    leave(E, P) {
      const U = String(e.key);
      if (E[Yt] && E[Yt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return P();
      te(y, [E]);
      let C = !1;
      const X = E[ke] = (oe) => {
        C || (C = !0, P(), oe ? te(D, [E]) : te(O, [E]), E[ke] = void 0, W[U] === e && delete W[U]);
      };
      W[U] = e, w ? ie(w, [E, X]) : X();
    },
    clone(E) {
      const P = Vn(
        E,
        t,
        n,
        s,
        r
      );
      return r && r(P), P;
    }
  };
  return N;
}
function Mn(e) {
  if (mn(e))
    return e = tt(e), e.children = null, e;
}
function Cs(e) {
  if (!mn(e))
    return Dr(e.type) && e.children ? Hr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && L(n.default))
      return n.default();
  }
}
function jt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, jt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Br(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === _e ? (o.patchFlag & 128 && r++, s = s.concat(
      Br(o.children, t, l)
    )) : (t || o.type !== ae) && s.push(l != null ? tt(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function kr(e, t) {
  return L(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ne({ name: e.name }, t, { setup: e })
  ) : e;
}
function Vr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const rn = /* @__PURE__ */ new WeakMap();
function Rt(e, t, n, s, r = !1) {
  if (R(e)) {
    e.forEach(
      (O, D) => Rt(
        O,
        t && (R(t) ? t[D] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Ft(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Rt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? ps(s.component) : s.el, o = r ? null : i, { i: l, r: f } = e, d = t && t.r, u = l.refs === J ? l.refs = {} : l.refs, h = l.setupState, y = /* @__PURE__ */ k(h), w = h === J ? tr : (O) => V(y, O);
  if (d != null && d !== f) {
    if (Ts(t), ee(d))
      u[d] = null, w(d) && (h[d] = null);
    else if (/* @__PURE__ */ ce(d)) {
      d.value = null;
      const O = t;
      O.k && (u[O.k] = null);
    }
  }
  if (L(f))
    Ut(f, l, 12, [o, u]);
  else {
    const O = ee(f), D = /* @__PURE__ */ ce(f);
    if (O || D) {
      const Q = () => {
        if (e.f) {
          const $ = O ? w(f) ? h[f] : u[f] : f.value;
          if (r)
            R($) && Zn($, i);
          else if (R($))
            $.includes(i) || $.push(i);
          else if (O)
            u[f] = [i], w(f) && (h[f] = u[f]);
          else {
            const j = [i];
            f.value = j, e.k && (u[e.k] = j);
          }
        } else O ? (u[f] = o, w(f) && (h[f] = o)) : D && (f.value = o, e.k && (u[e.k] = o));
      };
      if (o) {
        const $ = () => {
          Q(), rn.delete(e);
        };
        $.id = -1, rn.set(e, $), ye($, n);
      } else
        Ts(e), Q();
    }
  }
}
function Ts(e) {
  const t = rn.get(e);
  t && (t.flags |= 8, rn.delete(e));
}
hn().requestIdleCallback;
hn().cancelIdleCallback;
const Ft = (e) => !!e.type.__asyncLoader, mn = (e) => e.type.__isKeepAlive;
function bo(e, t) {
  Ur(e, "a", t);
}
function yo(e, t) {
  Ur(e, "da", t);
}
function Ur(e, t, n = de) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (_n(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      mn(r.parent.vnode) && vo(s, t, n, r), r = r.parent;
  }
}
function vo(e, t, n, s) {
  const r = _n(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  us(() => {
    Zn(s[t], r);
  }, n);
}
function _n(e, t, n = de, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ue();
      const l = Kt(n), f = Ae(t, n, e, o);
      return l(), Ke(), f;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const qe = (e) => (t, n = de) => {
  (!kt || e === "sp") && _n(e, (...s) => t(...s), n);
}, xo = qe("bm"), fs = qe("m"), wo = qe(
  "bu"
), So = qe("u"), Kr = qe(
  "bum"
), us = qe("um"), Co = qe(
  "sp"
), To = qe("rtg"), Eo = qe("rtc");
function Ao(e, t = de) {
  _n("ec", e, t);
}
const Mo = /* @__PURE__ */ Symbol.for("v-ndc");
function In(e, t, n, s) {
  let r;
  const i = n, o = R(e);
  if (o || ee(e)) {
    const l = o && /* @__PURE__ */ ht(e);
    let f = !1, d = !1;
    l && (f = !/* @__PURE__ */ Se(e), d = /* @__PURE__ */ We(e), e = pn(e)), r = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      r[u] = t(
        f ? d ? wt(Ee(e[u])) : Ee(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (Y(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, f) => t(l, f, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let f = 0, d = l.length; f < d; f++) {
        const u = l[f];
        r[f] = t(e[u], u, f, i);
      }
    }
  else
    r = [];
  return r;
}
const Un = (e) => e ? di(e) ? ps(e) : Un(e.parent) : null, Lt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ne(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Un(e.parent),
    $root: (e) => Un(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => qr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      cs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ar.bind(e.proxy)),
    $watch: (e) => ho.bind(e)
  })
), On = (e, t) => e !== J && !e.__isScriptSetup && V(e, t), Io = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
    if (t[0] !== "$") {
      const y = o[t];
      if (y !== void 0)
        switch (y) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (On(s, t))
          return o[t] = 1, s[t];
        if (r !== J && V(r, t))
          return o[t] = 2, r[t];
        if (V(i, t))
          return o[t] = 3, i[t];
        if (n !== J && V(n, t))
          return o[t] = 4, n[t];
        Kn && (o[t] = 0);
      }
    }
    const d = Lt[t];
    let u, h;
    if (d)
      return t === "$attrs" && le(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== J && V(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = f.config.globalProperties, V(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return On(r, t) ? (r[t] = n, !0) : s !== J && V(s, t) ? (s[t] = n, !0) : V(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let f;
    return !!(n[l] || e !== J && l[0] !== "$" && V(e, l) || On(t, l) || V(i, l) || V(s, l) || V(Lt, l) || V(r.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : V(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Es(e) {
  return R(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Kn = !0;
function Oo(e) {
  const t = qr(e), n = e.proxy, s = e.ctx;
  Kn = !1, t.beforeCreate && As(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: y,
    beforeUpdate: w,
    updated: O,
    activated: D,
    deactivated: Q,
    beforeDestroy: $,
    beforeUnmount: j,
    destroyed: B,
    unmounted: M,
    render: W,
    renderTracked: te,
    renderTriggered: ie,
    errorCaptured: N,
    serverPrefetch: E,
    // public API
    expose: P,
    inheritAttrs: U,
    // assets
    components: C,
    directives: X,
    filters: oe
  } = t;
  if (d && Po(d, s, null), o)
    for (const Z in o) {
      const q = o[Z];
      L(q) && (s[Z] = q.bind(n));
    }
  if (r) {
    const Z = r.call(n, n);
    Y(Z) && (e.data = /* @__PURE__ */ is(Z));
  }
  if (Kn = !0, i)
    for (const Z in i) {
      const q = i[Z], st = L(q) ? q.bind(n, n) : L(q.get) ? q.get.bind(n, n) : $e, Wt = !L(q) && L(q.set) ? q.set.bind(n) : $e, rt = Gn({
        get: st,
        set: Wt
      });
      Object.defineProperty(s, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => rt.value,
        set: (Me) => rt.value = Me
      });
    }
  if (l)
    for (const Z in l)
      Wr(l[Z], s, n, Z);
  if (f) {
    const Z = L(f) ? f.call(n) : f;
    Reflect.ownKeys(Z).forEach((q) => {
      fo(q, Z[q]);
    });
  }
  u && As(u, e, "c");
  function se(Z, q) {
    R(q) ? q.forEach((st) => Z(st.bind(n))) : q && Z(q.bind(n));
  }
  if (se(xo, h), se(fs, y), se(wo, w), se(So, O), se(bo, D), se(yo, Q), se(Ao, N), se(Eo, te), se(To, ie), se(Kr, j), se(us, M), se(Co, E), R(P))
    if (P.length) {
      const Z = e.exposed || (e.exposed = {});
      P.forEach((q) => {
        Object.defineProperty(Z, q, {
          get: () => n[q],
          set: (st) => n[q] = st,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  W && e.render === $e && (e.render = W), U != null && (e.inheritAttrs = U), C && (e.components = C), X && (e.directives = X), E && Vr(e);
}
function Po(e, t, n = $e) {
  R(e) && (e = Wn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    Y(r) ? "default" in r ? i = Xt(
      r.from || s,
      r.default,
      !0
    ) : i = Xt(r.from || s) : i = Xt(r), /* @__PURE__ */ ce(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i;
  }
}
function As(e, t, n) {
  Ae(
    R(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Wr(e, t, n, s) {
  let r = s.includes(".") ? Lr(n, s) : () => n[s];
  if (ee(e)) {
    const i = t[e];
    L(i) && An(r, i);
  } else if (L(e))
    An(r, e.bind(n));
  else if (Y(e))
    if (R(e))
      e.forEach((i) => Wr(i, t, n, s));
    else {
      const i = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(i) && An(r, i, e);
    }
}
function qr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !n && !s ? f = t : (f = {}, r.length && r.forEach(
    (d) => on(f, d, o, !0)
  ), on(f, t, o)), Y(t) && i.set(t, f), f;
}
function on(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && on(e, i, n, !0), r && r.forEach(
    (o) => on(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Ro[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Ro = {
  data: Ms,
  props: Is,
  emits: Is,
  // objects
  methods: Mt,
  computed: Mt,
  // lifecycle
  beforeCreate: fe,
  created: fe,
  beforeMount: fe,
  mounted: fe,
  beforeUpdate: fe,
  updated: fe,
  beforeDestroy: fe,
  beforeUnmount: fe,
  destroyed: fe,
  unmounted: fe,
  activated: fe,
  deactivated: fe,
  errorCaptured: fe,
  serverPrefetch: fe,
  // assets
  components: Mt,
  directives: Mt,
  // watch
  watch: Lo,
  // provide / inject
  provide: Ms,
  inject: Fo
};
function Ms(e, t) {
  return t ? e ? function() {
    return ne(
      L(e) ? e.call(this, this) : e,
      L(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Fo(e, t) {
  return Mt(Wn(e), Wn(t));
}
function Wn(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Mt(e, t) {
  return e ? ne(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Is(e, t) {
  return e ? R(e) && R(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ne(
    /* @__PURE__ */ Object.create(null),
    Es(e),
    Es(t ?? {})
  ) : t;
}
function Lo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ne(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = fe(e[s], t[s]);
  return n;
}
function zr() {
  return {
    app: null,
    config: {
      isNativeTag: tr,
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
let Do = 0;
function $o(e, t) {
  return function(s, r = null) {
    L(s) || (s = ne({}, s)), r != null && !Y(r) && (r = null);
    const i = zr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const d = i.app = {
      _uid: Do++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: gl,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return o.has(u) || (u && L(u.install) ? (o.add(u), u.install(d, ...h)) : L(u) && (o.add(u), u(d, ...h))), d;
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), d;
      },
      component(u, h) {
        return h ? (i.components[u] = h, d) : i.components[u];
      },
      directive(u, h) {
        return h ? (i.directives[u] = h, d) : i.directives[u];
      },
      mount(u, h, y) {
        if (!f) {
          const w = d._ceVNode || he(s, r);
          return w.appContext = i, y === !0 ? y = "svg" : y === !1 && (y = void 0), e(w, u, y), f = !0, d._container = u, u.__vue_app__ = d, ps(w.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        f && (Ae(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return i.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = vt;
        vt = d;
        try {
          return u();
        } finally {
          vt = h;
        }
      }
    };
    return d;
  };
}
let vt = null;
const No = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${et(t)}Modifiers`] || e[`${pt(t)}Modifiers`];
function Ho(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || J;
  let r = n;
  const i = t.startsWith("update:"), o = i && No(s, t.slice(7));
  o && (o.trim && (r = n.map((u) => ee(u) ? u.trim() : u)), o.number && (r = n.map(wi)));
  let l, f = s[l = xn(t)] || // also try camelCase event handler (#2249)
  s[l = xn(et(t))];
  !f && i && (f = s[l = xn(pt(t))]), f && Ae(
    f,
    e,
    6,
    r
  );
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ae(
      d,
      e,
      6,
      r
    );
  }
}
const jo = /* @__PURE__ */ new WeakMap();
function Gr(e, t, n = !1) {
  const s = n ? jo : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!L(e)) {
    const f = (d) => {
      const u = Gr(d, t, !0);
      u && (l = !0, ne(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (Y(e) && s.set(e, null), null) : (R(i) ? i.forEach((f) => o[f] = null) : ne(o, i), Y(e) && s.set(e, o), o);
}
function bn(e, t) {
  return !e || !un(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), V(e, t[0].toLowerCase() + t.slice(1)) || V(e, pt(t)) || V(e, t));
}
function Os(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: f,
    render: d,
    renderCache: u,
    props: h,
    data: y,
    setupState: w,
    ctx: O,
    inheritAttrs: D
  } = e, Q = sn(e);
  let $, j;
  try {
    if (n.shapeFlag & 4) {
      const M = r || s, W = M;
      $ = Le(
        d.call(
          W,
          M,
          u,
          h,
          w,
          y,
          O
        )
      ), j = l;
    } else {
      const M = t;
      $ = Le(
        M.length > 1 ? M(
          h,
          { attrs: l, slots: o, emit: f }
        ) : M(
          h,
          null
        )
      ), j = t.props ? l : Bo(l);
    }
  } catch (M) {
    Dt.length = 0, gn(M, e, 1), $ = he(ae);
  }
  let B = $;
  if (j && D !== !1) {
    const M = Object.keys(j), { shapeFlag: W } = B;
    M.length && W & 7 && (i && M.some(Xn) && (j = ko(
      j,
      i
    )), B = tt(B, j, !1, !0));
  }
  return n.dirs && (B = tt(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && jt(B, n.transition), $ = B, sn(Q), $;
}
const Bo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || un(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ko = (e, t) => {
  const n = {};
  for (const s in e)
    (!Xn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Vo(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return s ? Ps(s, o, d) : !!o;
    if (f & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const y = u[h];
        if (o[y] !== s[y] && !bn(d, y))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Ps(s, o, d) : !0 : !!o;
  return !1;
}
function Ps(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !bn(n, i))
      return !0;
  }
  return !1;
}
function Uo({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Jr = {}, Yr = () => Object.create(Jr), Xr = (e) => Object.getPrototypeOf(e) === Jr;
function Ko(e, t, n, s = !1) {
  const r = {}, i = Yr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Zr(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ Xi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Wo(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ k(r), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let y = u[h];
        if (bn(e.emitsOptions, y))
          continue;
        const w = t[y];
        if (f)
          if (V(i, y))
            w !== i[y] && (i[y] = w, d = !0);
          else {
            const O = et(y);
            r[O] = qn(
              f,
              l,
              O,
              w,
              e,
              !1
            );
          }
        else
          w !== i[y] && (i[y] = w, d = !0);
      }
    }
  } else {
    Zr(e, t, r, i) && (d = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !V(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = pt(h)) === h || !V(t, u))) && (f ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[h] = qn(
        f,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete r[h]);
    if (i !== l)
      for (const h in i)
        (!t || !V(t, h)) && (delete i[h], d = !0);
  }
  d && Ve(e.attrs, "set", "");
}
function Zr(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (It(f))
        continue;
      const d = t[f];
      let u;
      r && V(r, u = et(f)) ? !i || !i.includes(u) ? n[u] = d : (l || (l = {}))[u] = d : bn(e.emitsOptions, f) || (!(f in s) || d !== s[f]) && (s[f] = d, o = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ k(n), d = l || J;
    for (let u = 0; u < i.length; u++) {
      const h = i[u];
      n[h] = qn(
        r,
        f,
        h,
        d[h],
        e,
        !V(d, h)
      );
    }
  }
  return o;
}
function qn(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = V(o, "default");
    if (l && s === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && L(f)) {
        const { propsDefaults: d } = r;
        if (n in d)
          s = d[n];
        else {
          const u = Kt(r);
          s = d[n] = f.call(
            null,
            t
          ), u();
        }
      } else
        s = f;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === pt(n)) && (s = !0));
  }
  return s;
}
const qo = /* @__PURE__ */ new WeakMap();
function Qr(e, t, n = !1) {
  const s = n ? qo : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!L(e)) {
    const u = (h) => {
      f = !0;
      const [y, w] = Qr(h, t, !0);
      ne(o, y), w && l.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !f)
    return Y(e) && s.set(e, _t), _t;
  if (R(i))
    for (let u = 0; u < i.length; u++) {
      const h = et(i[u]);
      Rs(h) && (o[h] = J);
    }
  else if (i)
    for (const u in i) {
      const h = et(u);
      if (Rs(h)) {
        const y = i[u], w = o[h] = R(y) || L(y) ? { type: y } : ne({}, y), O = w.type;
        let D = !1, Q = !0;
        if (R(O))
          for (let $ = 0; $ < O.length; ++$) {
            const j = O[$], B = L(j) && j.name;
            if (B === "Boolean") {
              D = !0;
              break;
            } else B === "String" && (Q = !1);
          }
        else
          D = L(O) && O.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = D, w[
          1
          /* shouldCastTrue */
        ] = Q, (D || V(w, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return Y(e) && s.set(e, d), d;
}
function Rs(e) {
  return e[0] !== "$" && !It(e);
}
const as = (e) => e === "_" || e === "_ctx" || e === "$stable", ds = (e) => R(e) ? e.map(Le) : [Le(e)], zo = (e, t, n) => {
  if (t._n)
    return t;
  const s = Rr((...r) => ds(t(...r)), n);
  return s._c = !1, s;
}, ei = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (as(r)) continue;
    const i = e[r];
    if (L(i))
      t[r] = zo(r, i, s);
    else if (i != null) {
      const o = ds(i);
      t[r] = () => o;
    }
  }
}, ti = (e, t) => {
  const n = ds(t);
  e.slots.default = () => n;
}, ni = (e, t, n) => {
  for (const s in t)
    (n || !as(s)) && (e[s] = t[s]);
}, Go = (e, t, n) => {
  const s = e.slots = Yr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (ni(s, t, n), n && lr(s, "_", r, !0)) : ei(t, s);
  } else t && ti(e, t);
}, Jo = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = J;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : ni(r, t, n) : (i = !t.$stable, ei(t, r)), o = t;
  } else t && (ti(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !as(l) && o[l] == null && delete r[l];
}, ye = el;
function Yo(e) {
  return Xo(e);
}
function Xo(e, t) {
  const n = hn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: d,
    setElementText: u,
    parentNode: h,
    nextSibling: y,
    setScopeId: w = $e,
    insertStaticContent: O
  } = e, D = (c, a, p, b = null, g = null, m = null, S = void 0, x = null, v = !!a.dynamicChildren) => {
    if (c === a)
      return;
    c && !at(c, a) && (b = qt(c), Me(c, g, m, !0), c = null), a.patchFlag === -2 && (v = !1, a.dynamicChildren = null);
    const { type: _, ref: I, shapeFlag: T } = a;
    switch (_) {
      case yn:
        Q(c, a, p, b);
        break;
      case ae:
        $(c, a, p, b);
        break;
      case Zt:
        c == null && j(a, p, b, S);
        break;
      case _e:
        C(
          c,
          a,
          p,
          b,
          g,
          m,
          S,
          x,
          v
        );
        break;
      default:
        T & 1 ? W(
          c,
          a,
          p,
          b,
          g,
          m,
          S,
          x,
          v
        ) : T & 6 ? X(
          c,
          a,
          p,
          b,
          g,
          m,
          S,
          x,
          v
        ) : (T & 64 || T & 128) && _.process(
          c,
          a,
          p,
          b,
          g,
          m,
          S,
          x,
          v,
          Ct
        );
    }
    I != null && g ? Rt(I, c && c.ref, m, a || c, !a) : I == null && c && c.ref != null && Rt(c.ref, null, m, c, !0);
  }, Q = (c, a, p, b) => {
    if (c == null)
      s(
        a.el = l(a.children),
        p,
        b
      );
    else {
      const g = a.el = c.el;
      a.children !== c.children && d(g, a.children);
    }
  }, $ = (c, a, p, b) => {
    c == null ? s(
      a.el = f(a.children || ""),
      p,
      b
    ) : a.el = c.el;
  }, j = (c, a, p, b) => {
    [c.el, c.anchor] = O(
      c.children,
      a,
      p,
      b,
      c.el,
      c.anchor
    );
  }, B = ({ el: c, anchor: a }, p, b) => {
    let g;
    for (; c && c !== a; )
      g = y(c), s(c, p, b), c = g;
    s(a, p, b);
  }, M = ({ el: c, anchor: a }) => {
    let p;
    for (; c && c !== a; )
      p = y(c), r(c), c = p;
    r(a);
  }, W = (c, a, p, b, g, m, S, x, v) => {
    if (a.type === "svg" ? S = "svg" : a.type === "math" && (S = "mathml"), c == null)
      te(
        a,
        p,
        b,
        g,
        m,
        S,
        x,
        v
      );
    else {
      const _ = c.el && c.el._isVueCE ? c.el : null;
      try {
        _ && _._beginPatch(), E(
          c,
          a,
          g,
          m,
          S,
          x,
          v
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, te = (c, a, p, b, g, m, S, x) => {
    let v, _;
    const { props: I, shapeFlag: T, transition: A, dirs: F } = c;
    if (v = c.el = o(
      c.type,
      m,
      I && I.is,
      I
    ), T & 8 ? u(v, c.children) : T & 16 && N(
      c.children,
      v,
      null,
      b,
      g,
      Pn(c, m),
      S,
      x
    ), F && ot(c, null, b, "created"), ie(v, c, c.scopeId, S, b), I) {
      for (const z in I)
        z !== "value" && !It(z) && i(v, z, null, I[z], m, b);
      "value" in I && i(v, "value", null, I.value, m), (_ = I.onVnodeBeforeMount) && Re(_, b, c);
    }
    F && ot(c, null, b, "beforeMount");
    const H = Zo(g, A);
    H && A.beforeEnter(v), s(v, a, p), ((_ = I && I.onVnodeMounted) || H || F) && ye(() => {
      _ && Re(_, b, c), H && A.enter(v), F && ot(c, null, b, "mounted");
    }, g);
  }, ie = (c, a, p, b, g) => {
    if (p && w(c, p), b)
      for (let m = 0; m < b.length; m++)
        w(c, b[m]);
    if (g) {
      let m = g.subTree;
      if (a === m || oi(m.type) && (m.ssContent === a || m.ssFallback === a)) {
        const S = g.vnode;
        ie(
          c,
          S,
          S.scopeId,
          S.slotScopeIds,
          g.parent
        );
      }
    }
  }, N = (c, a, p, b, g, m, S, x, v = 0) => {
    for (let _ = v; _ < c.length; _++) {
      const I = c[_] = x ? Ye(c[_]) : Le(c[_]);
      D(
        null,
        I,
        a,
        p,
        b,
        g,
        m,
        S,
        x
      );
    }
  }, E = (c, a, p, b, g, m, S) => {
    const x = a.el = c.el;
    let { patchFlag: v, dynamicChildren: _, dirs: I } = a;
    v |= c.patchFlag & 16;
    const T = c.props || J, A = a.props || J;
    let F;
    if (p && lt(p, !1), (F = A.onVnodeBeforeUpdate) && Re(F, p, a, c), I && ot(a, c, p, "beforeUpdate"), p && lt(p, !0), (T.innerHTML && A.innerHTML == null || T.textContent && A.textContent == null) && u(x, ""), _ ? P(
      c.dynamicChildren,
      _,
      x,
      p,
      b,
      Pn(a, g),
      m
    ) : S || q(
      c,
      a,
      x,
      null,
      p,
      b,
      Pn(a, g),
      m,
      !1
    ), v > 0) {
      if (v & 16)
        U(x, T, A, p, g);
      else if (v & 2 && T.class !== A.class && i(x, "class", null, A.class, g), v & 4 && i(x, "style", T.style, A.style, g), v & 8) {
        const H = a.dynamicProps;
        for (let z = 0; z < H.length; z++) {
          const K = H[z], pe = T[K], ge = A[K];
          (ge !== pe || K === "value") && i(x, K, pe, ge, g, p);
        }
      }
      v & 1 && c.children !== a.children && u(x, a.children);
    } else !S && _ == null && U(x, T, A, p, g);
    ((F = A.onVnodeUpdated) || I) && ye(() => {
      F && Re(F, p, a, c), I && ot(a, c, p, "updated");
    }, b);
  }, P = (c, a, p, b, g, m, S) => {
    for (let x = 0; x < a.length; x++) {
      const v = c[x], _ = a[x], I = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !at(v, _) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 198) ? h(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      D(
        v,
        _,
        I,
        null,
        b,
        g,
        m,
        S,
        !0
      );
    }
  }, U = (c, a, p, b, g) => {
    if (a !== p) {
      if (a !== J)
        for (const m in a)
          !It(m) && !(m in p) && i(
            c,
            m,
            a[m],
            null,
            g,
            b
          );
      for (const m in p) {
        if (It(m)) continue;
        const S = p[m], x = a[m];
        S !== x && m !== "value" && i(c, m, x, S, g, b);
      }
      "value" in p && i(c, "value", a.value, p.value, g);
    }
  }, C = (c, a, p, b, g, m, S, x, v) => {
    const _ = a.el = c ? c.el : l(""), I = a.anchor = c ? c.anchor : l("");
    let { patchFlag: T, dynamicChildren: A, slotScopeIds: F } = a;
    F && (x = x ? x.concat(F) : F), c == null ? (s(_, p, b), s(I, p, b), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      a.children || [],
      p,
      I,
      g,
      m,
      S,
      x,
      v
    )) : T > 0 && T & 64 && A && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === A.length ? (P(
      c.dynamicChildren,
      A,
      p,
      g,
      m,
      S,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (a.key != null || g && a === g.subTree) && si(
      c,
      a,
      !0
      /* shallow */
    )) : q(
      c,
      a,
      p,
      I,
      g,
      m,
      S,
      x,
      v
    );
  }, X = (c, a, p, b, g, m, S, x, v) => {
    a.slotScopeIds = x, c == null ? a.shapeFlag & 512 ? g.ctx.activate(
      a,
      p,
      b,
      S,
      v
    ) : oe(
      a,
      p,
      b,
      g,
      m,
      S,
      v
    ) : Ne(c, a, v);
  }, oe = (c, a, p, b, g, m, S) => {
    const x = c.component = cl(
      c,
      b,
      g
    );
    if (mn(c) && (x.ctx.renderer = Ct), fl(x, !1, S), x.asyncDep) {
      if (g && g.registerDep(x, se, S), !c.el) {
        const v = x.subTree = he(ae);
        $(null, v, a, p), c.placeholder = v.el;
      }
    } else
      se(
        x,
        c,
        a,
        p,
        g,
        m,
        S
      );
  }, Ne = (c, a, p) => {
    const b = a.component = c.component;
    if (Vo(c, a, p))
      if (b.asyncDep && !b.asyncResolved) {
        Z(b, a, p);
        return;
      } else
        b.next = a, b.update();
    else
      a.el = c.el, b.vnode = a;
  }, se = (c, a, p, b, g, m, S) => {
    const x = () => {
      if (c.isMounted) {
        let { next: T, bu: A, u: F, parent: H, vnode: z } = c;
        {
          const Oe = ri(c);
          if (Oe) {
            T && (T.el = z.el, Z(c, T, S)), Oe.asyncDep.then(() => {
              c.isUnmounted || x();
            });
            return;
          }
        }
        let K = T, pe;
        lt(c, !1), T ? (T.el = z.el, Z(c, T, S)) : T = z, A && wn(A), (pe = T.props && T.props.onVnodeBeforeUpdate) && Re(pe, H, T, z), lt(c, !0);
        const ge = Os(c), Ie = c.subTree;
        c.subTree = ge, D(
          Ie,
          ge,
          // parent may have changed if it's in a teleport
          h(Ie.el),
          // anchor may have changed if it's in a fragment
          qt(Ie),
          c,
          g,
          m
        ), T.el = ge.el, K === null && Uo(c, ge.el), F && ye(F, g), (pe = T.props && T.props.onVnodeUpdated) && ye(
          () => Re(pe, H, T, z),
          g
        );
      } else {
        let T;
        const { el: A, props: F } = a, { bm: H, m: z, parent: K, root: pe, type: ge } = c, Ie = Ft(a);
        lt(c, !1), H && wn(H), !Ie && (T = F && F.onVnodeBeforeMount) && Re(T, K, a), lt(c, !0);
        {
          pe.ce && // @ts-expect-error _def is private
          pe.ce._def.shadowRoot !== !1 && pe.ce._injectChildStyle(ge);
          const Oe = c.subTree = Os(c);
          D(
            null,
            Oe,
            p,
            b,
            c,
            g,
            m
          ), a.el = Oe.el;
        }
        if (z && ye(z, g), !Ie && (T = F && F.onVnodeMounted)) {
          const Oe = a;
          ye(
            () => Re(T, K, Oe),
            g
          );
        }
        (a.shapeFlag & 256 || K && Ft(K.vnode) && K.vnode.shapeFlag & 256) && c.a && ye(c.a, g), c.isMounted = !0, a = p = b = null;
      }
    };
    c.scope.on();
    const v = c.effect = new ar(x);
    c.scope.off();
    const _ = c.update = v.run.bind(v), I = c.job = v.runIfDirty.bind(v);
    I.i = c, I.id = c.uid, v.scheduler = () => cs(I), lt(c, !0), _();
  }, Z = (c, a, p) => {
    a.component = c;
    const b = c.vnode.props;
    c.vnode = a, c.next = null, Wo(c, a.props, b, p), Jo(c, a.children, p), Ue(), Ss(c), Ke();
  }, q = (c, a, p, b, g, m, S, x, v = !1) => {
    const _ = c && c.children, I = c ? c.shapeFlag : 0, T = a.children, { patchFlag: A, shapeFlag: F } = a;
    if (A > 0) {
      if (A & 128) {
        Wt(
          _,
          T,
          p,
          b,
          g,
          m,
          S,
          x,
          v
        );
        return;
      } else if (A & 256) {
        st(
          _,
          T,
          p,
          b,
          g,
          m,
          S,
          x,
          v
        );
        return;
      }
    }
    F & 8 ? (I & 16 && St(_, g, m), T !== _ && u(p, T)) : I & 16 ? F & 16 ? Wt(
      _,
      T,
      p,
      b,
      g,
      m,
      S,
      x,
      v
    ) : St(_, g, m, !0) : (I & 8 && u(p, ""), F & 16 && N(
      T,
      p,
      b,
      g,
      m,
      S,
      x,
      v
    ));
  }, st = (c, a, p, b, g, m, S, x, v) => {
    c = c || _t, a = a || _t;
    const _ = c.length, I = a.length, T = Math.min(_, I);
    let A;
    for (A = 0; A < T; A++) {
      const F = a[A] = v ? Ye(a[A]) : Le(a[A]);
      D(
        c[A],
        F,
        p,
        null,
        g,
        m,
        S,
        x,
        v
      );
    }
    _ > I ? St(
      c,
      g,
      m,
      !0,
      !1,
      T
    ) : N(
      a,
      p,
      b,
      g,
      m,
      S,
      x,
      v,
      T
    );
  }, Wt = (c, a, p, b, g, m, S, x, v) => {
    let _ = 0;
    const I = a.length;
    let T = c.length - 1, A = I - 1;
    for (; _ <= T && _ <= A; ) {
      const F = c[_], H = a[_] = v ? Ye(a[_]) : Le(a[_]);
      if (at(F, H))
        D(
          F,
          H,
          p,
          null,
          g,
          m,
          S,
          x,
          v
        );
      else
        break;
      _++;
    }
    for (; _ <= T && _ <= A; ) {
      const F = c[T], H = a[A] = v ? Ye(a[A]) : Le(a[A]);
      if (at(F, H))
        D(
          F,
          H,
          p,
          null,
          g,
          m,
          S,
          x,
          v
        );
      else
        break;
      T--, A--;
    }
    if (_ > T) {
      if (_ <= A) {
        const F = A + 1, H = F < I ? a[F].el : b;
        for (; _ <= A; )
          D(
            null,
            a[_] = v ? Ye(a[_]) : Le(a[_]),
            p,
            H,
            g,
            m,
            S,
            x,
            v
          ), _++;
      }
    } else if (_ > A)
      for (; _ <= T; )
        Me(c[_], g, m, !0), _++;
    else {
      const F = _, H = _, z = /* @__PURE__ */ new Map();
      for (_ = H; _ <= A; _++) {
        const be = a[_] = v ? Ye(a[_]) : Le(a[_]);
        be.key != null && z.set(be.key, _);
      }
      let K, pe = 0;
      const ge = A - H + 1;
      let Ie = !1, Oe = 0;
      const Tt = new Array(ge);
      for (_ = 0; _ < ge; _++) Tt[_] = 0;
      for (_ = F; _ <= T; _++) {
        const be = c[_];
        if (pe >= ge) {
          Me(be, g, m, !0);
          continue;
        }
        let Pe;
        if (be.key != null)
          Pe = z.get(be.key);
        else
          for (K = H; K <= A; K++)
            if (Tt[K - H] === 0 && at(be, a[K])) {
              Pe = K;
              break;
            }
        Pe === void 0 ? Me(be, g, m, !0) : (Tt[Pe - H] = _ + 1, Pe >= Oe ? Oe = Pe : Ie = !0, D(
          be,
          a[Pe],
          p,
          null,
          g,
          m,
          S,
          x,
          v
        ), pe++);
      }
      const _s = Ie ? Qo(Tt) : _t;
      for (K = _s.length - 1, _ = ge - 1; _ >= 0; _--) {
        const be = H + _, Pe = a[be], bs = a[be + 1], ys = be + 1 < I ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          bs.el || ii(bs)
        ) : b;
        Tt[_] === 0 ? D(
          null,
          Pe,
          p,
          ys,
          g,
          m,
          S,
          x,
          v
        ) : Ie && (K < 0 || _ !== _s[K] ? rt(Pe, p, ys, 2) : K--);
      }
    }
  }, rt = (c, a, p, b, g = null) => {
    const { el: m, type: S, transition: x, children: v, shapeFlag: _ } = c;
    if (_ & 6) {
      rt(c.component.subTree, a, p, b);
      return;
    }
    if (_ & 128) {
      c.suspense.move(a, p, b);
      return;
    }
    if (_ & 64) {
      S.move(c, a, p, Ct);
      return;
    }
    if (S === _e) {
      s(m, a, p);
      for (let T = 0; T < v.length; T++)
        rt(v[T], a, p, b);
      s(c.anchor, a, p);
      return;
    }
    if (S === Zt) {
      B(c, a, p);
      return;
    }
    if (b !== 2 && _ & 1 && x)
      if (b === 0)
        x.beforeEnter(m), s(m, a, p), ye(() => x.enter(m), g);
      else {
        const { leave: T, delayLeave: A, afterLeave: F } = x, H = () => {
          c.ctx.isUnmounted ? r(m) : s(m, a, p);
        }, z = () => {
          m._isLeaving && m[ke](
            !0
            /* cancelled */
          ), T(m, () => {
            H(), F && F();
          });
        };
        A ? A(m, H, z) : z();
      }
    else
      s(m, a, p);
  }, Me = (c, a, p, b = !1, g = !1) => {
    const {
      type: m,
      props: S,
      ref: x,
      children: v,
      dynamicChildren: _,
      shapeFlag: I,
      patchFlag: T,
      dirs: A,
      cacheIndex: F
    } = c;
    if (T === -2 && (g = !1), x != null && (Ue(), Rt(x, null, p, c, !0), Ke()), F != null && (a.renderCache[F] = void 0), I & 256) {
      a.ctx.deactivate(c);
      return;
    }
    const H = I & 1 && A, z = !Ft(c);
    let K;
    if (z && (K = S && S.onVnodeBeforeUnmount) && Re(K, a, c), I & 6)
      _i(c.component, p, b);
    else {
      if (I & 128) {
        c.suspense.unmount(p, b);
        return;
      }
      H && ot(c, null, a, "beforeUnmount"), I & 64 ? c.type.remove(
        c,
        a,
        p,
        Ct,
        b
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== _e || T > 0 && T & 64) ? St(
        _,
        a,
        p,
        !1,
        !0
      ) : (m === _e && T & 384 || !g && I & 16) && St(v, a, p), b && gs(c);
    }
    (z && (K = S && S.onVnodeUnmounted) || H) && ye(() => {
      K && Re(K, a, c), H && ot(c, null, a, "unmounted");
    }, p);
  }, gs = (c) => {
    const { type: a, el: p, anchor: b, transition: g } = c;
    if (a === _e) {
      mi(p, b);
      return;
    }
    if (a === Zt) {
      M(c);
      return;
    }
    const m = () => {
      r(p), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: S, delayLeave: x } = g, v = () => S(p, m);
      x ? x(c.el, m, v) : v();
    } else
      m();
  }, mi = (c, a) => {
    let p;
    for (; c !== a; )
      p = y(c), r(c), c = p;
    r(a);
  }, _i = (c, a, p) => {
    const { bum: b, scope: g, job: m, subTree: S, um: x, m: v, a: _ } = c;
    Fs(v), Fs(_), b && wn(b), g.stop(), m && (m.flags |= 8, Me(S, c, a, p)), x && ye(x, a), ye(() => {
      c.isUnmounted = !0;
    }, a);
  }, St = (c, a, p, b = !1, g = !1, m = 0) => {
    for (let S = m; S < c.length; S++)
      Me(c[S], a, p, b, g);
  }, qt = (c) => {
    if (c.shapeFlag & 6)
      return qt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const a = y(c.anchor || c.el), p = a && a[po];
    return p ? y(p) : a;
  };
  let vn = !1;
  const ms = (c, a, p) => {
    let b;
    c == null ? a._vnode && (Me(a._vnode, null, null, !0), b = a._vnode.component) : D(
      a._vnode || null,
      c,
      a,
      null,
      null,
      null,
      p
    ), a._vnode = c, vn || (vn = !0, Ss(b), Ir(), vn = !1);
  }, Ct = {
    p: D,
    um: Me,
    m: rt,
    r: gs,
    mt: oe,
    mc: N,
    pc: q,
    pbc: P,
    n: qt,
    o: e
  };
  return {
    render: ms,
    hydrate: void 0,
    createApp: $o(ms)
  };
}
function Pn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function lt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Zo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function si(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (R(s) && R(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Ye(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && si(o, l)), l.type === yn && (l.patchFlag !== -1 ? l.el = o.el : l.__elIndex = i + // take fragment start anchor into account
      (e.type === _e ? 1 : 0)), l.type === ae && !l.el && (l.el = o.el);
    }
}
function Qo(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < d ? i = l + 1 : o = l;
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function ri(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ri(t);
}
function Fs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ii(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ii(t.subTree) : null;
}
const oi = (e) => e.__isSuspense;
function el(e, t) {
  t && t.pendingBranch ? R(e) ? t.effects.push(...e) : t.effects.push(e) : co(e);
}
const _e = /* @__PURE__ */ Symbol.for("v-fgt"), yn = /* @__PURE__ */ Symbol.for("v-txt"), ae = /* @__PURE__ */ Symbol.for("v-cmt"), Zt = /* @__PURE__ */ Symbol.for("v-stc"), Dt = [];
let xe = null;
function ve(e = !1) {
  Dt.push(xe = e ? null : []);
}
function tl() {
  Dt.pop(), xe = Dt[Dt.length - 1] || null;
}
let Bt = 1;
function ln(e, t = !1) {
  Bt += e, e < 0 && xe && t && (xe.hasOnce = !0);
}
function li(e) {
  return e.dynamicChildren = Bt > 0 ? xe || _t : null, tl(), Bt > 0 && xe && xe.push(e), e;
}
function Ce(e, t, n, s, r, i) {
  return li(
    re(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function ci(e, t, n, s, r) {
  return li(
    he(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function cn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function at(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fi = ({ key: e }) => e ?? null, Qt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ee(e) || /* @__PURE__ */ ce(e) || L(e) ? { i: De, r: e, k: t, f: !!n } : e : null);
function re(e, t = null, n = null, s = 0, r = null, i = e === _e ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fi(t),
    ref: t && Qt(t),
    scopeId: Pr,
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
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: De
  };
  return l ? (hs(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= ee(n) ? 8 : 16), Bt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && xe.push(f), f;
}
const he = nl;
function nl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === Mo) && (e = ae), cn(e)) {
    const l = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && hs(l, n), Bt > 0 && !i && xe && (l.shapeFlag & 6 ? xe[xe.indexOf(e)] = l : xe.push(l)), l.patchFlag = -2, l;
  }
  if (hl(e) && (e = e.__vccOpts), t) {
    t = ui(t);
    let { class: l, style: f } = t;
    l && !ee(l) && (t.class = Ze(l)), Y(f) && (/* @__PURE__ */ ls(f) && !R(f) && (f = ne({}, f)), t.style = xt(f));
  }
  const o = ee(e) ? 1 : oi(e) ? 128 : Dr(e) ? 64 : Y(e) ? 4 : L(e) ? 2 : 0;
  return re(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function ui(e) {
  return e ? /* @__PURE__ */ ls(e) || Xr(e) ? ne({}, e) : e : null;
}
function tt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, d = t ? il(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && fi(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? R(i) ? i.concat(Qt(t)) : [i, Qt(t)] : Qt(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== _e ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && s && jt(
    u,
    f.clone(u)
  ), u;
}
function sl(e = " ", t = 0) {
  return he(yn, null, e, t);
}
function rl(e, t) {
  const n = he(Zt, null, e);
  return n.staticCount = t, n;
}
function Ls(e = "", t = !1) {
  return t ? (ve(), ci(ae, null, e)) : he(ae, null, e);
}
function Le(e) {
  return e == null || typeof e == "boolean" ? he(ae) : R(e) ? he(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : cn(e) ? Ye(e) : he(yn, null, String(e));
}
function Ye(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function hs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (R(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), hs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Xr(t) ? t._ctx = De : r === 3 && De && (De.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else L(t) ? (t = { default: t, _ctx: De }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [sl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function il(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Ze([t.class, s.class]));
      else if (r === "style")
        t.style = xt([t.style, s.style]);
      else if (un(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(R(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Re(e, t, n, s = null) {
  Ae(e, t, 7, [
    n,
    s
  ]);
}
const ol = zr();
let ll = 0;
function cl(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || ol, i = {
    uid: ll++,
    vnode: e,
    type: s,
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
    scope: new Pi(
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
    propsOptions: Qr(s, r),
    emitsOptions: Gr(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: J,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: J,
    data: J,
    props: J,
    attrs: J,
    slots: J,
    refs: J,
    setupState: J,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Ho.bind(null, i), e.ce && e.ce(i), i;
}
let de = null;
const ai = () => de || De;
let fn, zn;
{
  const e = hn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  fn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => de = n
  ), zn = t(
    "__VUE_SSR_SETTERS__",
    (n) => kt = n
  );
}
const Kt = (e) => {
  const t = de;
  return fn(e), e.scope.on(), () => {
    e.scope.off(), fn(t);
  };
}, Ds = () => {
  de && de.scope.off(), fn(null);
};
function di(e) {
  return e.vnode.shapeFlag & 4;
}
let kt = !1;
function fl(e, t = !1, n = !1) {
  t && zn(t);
  const { props: s, children: r } = e.vnode, i = di(e);
  Ko(e, s, i, t), Go(e, r, n || t);
  const o = i ? ul(e, t) : void 0;
  return t && zn(!1), o;
}
function ul(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Io);
  const { setup: s } = n;
  if (s) {
    Ue();
    const r = e.setupContext = s.length > 1 ? dl(e) : null, i = Kt(e), o = Ut(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = sr(o);
    if (Ke(), i(), (l || e.sp) && !Ft(e) && Vr(e), l) {
      if (o.then(Ds, Ds), t)
        return o.then((f) => {
          $s(e, f);
        }).catch((f) => {
          gn(f, e, 0);
        });
      e.asyncDep = o;
    } else
      $s(e, o);
  } else
    hi(e);
}
function $s(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) && (e.setupState = Tr(t)), hi(e);
}
function hi(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || $e);
  {
    const r = Kt(e);
    Ue();
    try {
      Oo(e);
    } finally {
      Ke(), r();
    }
  }
}
const al = {
  get(e, t) {
    return le(e, "get", ""), e[t];
  }
};
function dl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, al),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ps(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Tr(Zi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Lt)
        return Lt[n](e);
    },
    has(t, n) {
      return n in t || n in Lt;
    }
  })) : e.proxy;
}
function hl(e) {
  return L(e) && "__vccOpts" in e;
}
const Gn = (e, t) => /* @__PURE__ */ so(e, t, kt);
function pl(e, t, n) {
  try {
    ln(-1);
    const s = arguments.length;
    return s === 2 ? Y(t) && !R(t) ? cn(t) ? he(e, null, [t]) : he(e, t) : he(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && cn(n) && (n = [n]), he(e, t, n));
  } finally {
    ln(1);
  }
}
const gl = "3.5.27";
let Jn;
const Ns = typeof window < "u" && window.trustedTypes;
if (Ns)
  try {
    Jn = /* @__PURE__ */ Ns.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const pi = Jn ? (e) => Jn.createHTML(e) : (e) => e, ml = "http://www.w3.org/2000/svg", _l = "http://www.w3.org/1998/Math/MathML", Be = typeof document < "u" ? document : null, Hs = Be && /* @__PURE__ */ Be.createElement("template"), bl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Be.createElementNS(ml, e) : t === "mathml" ? Be.createElementNS(_l, e) : n ? Be.createElement(e, { is: n }) : Be.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Be.createTextNode(e),
  createComment: (e) => Be.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Be.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Hs.innerHTML = pi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Hs.content;
      if (s === "svg" || s === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ze = "transition", At = "animation", Vt = /* @__PURE__ */ Symbol("_vtc"), gi = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, yl = /* @__PURE__ */ ne(
  {},
  $r,
  gi
), vl = (e) => (e.displayName = "Transition", e.props = yl, e), xl = /* @__PURE__ */ vl(
  (e, { slots: t }) => pl(_o, wl(e), t)
), ct = (e, t = []) => {
  R(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, js = (e) => e ? R(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function wl(e) {
  const t = {};
  for (const C in e)
    C in gi || (t[C] = e[C]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: f = i,
    appearActiveClass: d = o,
    appearToClass: u = l,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: y = `${n}-leave-active`,
    leaveToClass: w = `${n}-leave-to`
  } = e, O = Sl(r), D = O && O[0], Q = O && O[1], {
    onBeforeEnter: $,
    onEnter: j,
    onEnterCancelled: B,
    onLeave: M,
    onLeaveCancelled: W,
    onBeforeAppear: te = $,
    onAppear: ie = j,
    onAppearCancelled: N = B
  } = t, E = (C, X, oe, Ne) => {
    C._enterCancelled = Ne, ft(C, X ? u : l), ft(C, X ? d : o), oe && oe();
  }, P = (C, X) => {
    C._isLeaving = !1, ft(C, h), ft(C, w), ft(C, y), X && X();
  }, U = (C) => (X, oe) => {
    const Ne = C ? ie : j, se = () => E(X, C, oe);
    ct(Ne, [X, se]), Bs(() => {
      ft(X, C ? f : i), je(X, C ? u : l), js(Ne) || ks(X, s, D, se);
    });
  };
  return ne(t, {
    onBeforeEnter(C) {
      ct($, [C]), je(C, i), je(C, o);
    },
    onBeforeAppear(C) {
      ct(te, [C]), je(C, f), je(C, d);
    },
    onEnter: U(!1),
    onAppear: U(!0),
    onLeave(C, X) {
      C._isLeaving = !0;
      const oe = () => P(C, X);
      je(C, h), C._enterCancelled ? (je(C, y), Ks(C)) : (Ks(C), je(C, y)), Bs(() => {
        C._isLeaving && (ft(C, h), je(C, w), js(M) || ks(C, s, Q, oe));
      }), ct(M, [C, oe]);
    },
    onEnterCancelled(C) {
      E(C, !1, void 0, !0), ct(B, [C]);
    },
    onAppearCancelled(C) {
      E(C, !0, void 0, !0), ct(N, [C]);
    },
    onLeaveCancelled(C) {
      P(C), ct(W, [C]);
    }
  });
}
function Sl(e) {
  if (e == null)
    return null;
  if (Y(e))
    return [Rn(e.enter), Rn(e.leave)];
  {
    const t = Rn(e);
    return [t, t];
  }
}
function Rn(e) {
  return Si(e);
}
function je(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Vt] || (e[Vt] = /* @__PURE__ */ new Set())).add(t);
}
function ft(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Vt];
  n && (n.delete(t), n.size || (e[Vt] = void 0));
}
function Bs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Cl = 0;
function ks(e, t, n, s) {
  const r = e._endId = ++Cl, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: f } = Tl(e, t);
  if (!o)
    return s();
  const d = o + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(d, y), i();
  }, y = (w) => {
    w.target === e && ++u >= f && h();
  };
  setTimeout(() => {
    u < f && h();
  }, l + 1), e.addEventListener(d, y);
}
function Tl(e, t) {
  const n = window.getComputedStyle(e), s = (O) => (n[O] || "").split(", "), r = s(`${ze}Delay`), i = s(`${ze}Duration`), o = Vs(r, i), l = s(`${At}Delay`), f = s(`${At}Duration`), d = Vs(l, f);
  let u = null, h = 0, y = 0;
  t === ze ? o > 0 && (u = ze, h = o, y = i.length) : t === At ? d > 0 && (u = At, h = d, y = f.length) : (h = Math.max(o, d), u = h > 0 ? o > d ? ze : At : null, y = u ? u === ze ? i.length : f.length : 0);
  const w = u === ze && /\b(?:transform|all)(?:,|$)/.test(
    s(`${ze}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: y,
    hasTransform: w
  };
}
function Vs(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Us(n) + Us(e[s])));
}
function Us(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ks(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function El(e, t, n) {
  const s = e[Vt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ws = /* @__PURE__ */ Symbol("_vod"), Al = /* @__PURE__ */ Symbol("_vsh"), Ml = /* @__PURE__ */ Symbol(""), Il = /(?:^|;)\s*display\s*:/;
function Ol(e, t, n) {
  const s = e.style, r = ee(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ee(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && en(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && en(s, o, "");
    for (const o in n)
      o === "display" && (i = !0), en(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[Ml];
      o && (n += ";" + o), s.cssText = n, i = Il.test(n);
    }
  } else t && e.removeAttribute("style");
  Ws in e && (e[Ws] = i ? s.display : "", e[Al] && (s.display = "none"));
}
const qs = /\s*!important$/;
function en(e, t, n) {
  if (R(n))
    n.forEach((s) => en(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Pl(e, t);
    qs.test(n) ? e.setProperty(
      pt(s),
      n.replace(qs, ""),
      "important"
    ) : e[s] = n;
  }
}
const zs = ["Webkit", "Moz", "ms"], Fn = {};
function Pl(e, t) {
  const n = Fn[t];
  if (n)
    return n;
  let s = et(t);
  if (s !== "filter" && s in e)
    return Fn[t] = s;
  s = or(s);
  for (let r = 0; r < zs.length; r++) {
    const i = zs[r] + s;
    if (i in e)
      return Fn[t] = i;
  }
  return t;
}
const Gs = "http://www.w3.org/1999/xlink";
function Js(e, t, n, s, r, i = Oi(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Gs, t.slice(6, t.length)) : e.setAttributeNS(Gs, t, n) : n == null || i && !cr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : nt(n) ? String(n) : n
  );
}
function Ys(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? pi(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = cr(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function Rl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Fl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Xs = /* @__PURE__ */ Symbol("_vei");
function Ll(e, t, n, s, r = null) {
  const i = e[Xs] || (e[Xs] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, f] = Dl(t);
    if (s) {
      const d = i[t] = Hl(
        s,
        r
      );
      Rl(e, l, d, f);
    } else o && (Fl(e, l, o, f), i[t] = void 0);
  }
}
const Zs = /(?:Once|Passive|Capture)$/;
function Dl(e) {
  let t;
  if (Zs.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Zs); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : pt(e.slice(2)), t];
}
let Ln = 0;
const $l = /* @__PURE__ */ Promise.resolve(), Nl = () => Ln || ($l.then(() => Ln = 0), Ln = Date.now());
function Hl(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ae(
      jl(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Nl(), n;
}
function jl(e, t) {
  if (R(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const Qs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Bl = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? El(e, s, o) : t === "style" ? Ol(e, n, s) : un(t) ? Xn(t) || Ll(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : kl(e, t, s, o)) ? (Ys(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Js(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ee(s)) ? Ys(e, et(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Js(e, t, s, o));
};
function kl(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qs(t) && L(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Qs(t) && ee(n) ? !1 : t in e;
}
const Vl = ["ctrl", "shift", "alt", "meta"], Ul = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Vl.some((n) => e[`${n}Key`] && !t.includes(n))
}, Kl = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = Ul[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, Wl = /* @__PURE__ */ ne({ patchProp: Bl }, bl);
let er;
function ql() {
  return er || (er = Yo(Wl));
}
const zl = ((...e) => {
  const t = ql().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Jl(s);
    if (!r) return;
    const i = t._component;
    !L(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, Gl(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function Gl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Jl(e) {
  return ee(e) ? document.querySelector(e) : e;
}
const Yl = ["id"], Xl = { class: "p-5 w-full flex justify-center" }, Zl = ["src"], Ql = { class: "max-w-[1800px] mx-auto flex flex-col items-center gap-5 pointer-events-auto" }, ec = {
  class: "font-serif text-4xl tracking-widest select-none",
  "data-ce": '[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'
}, tc = { class: "flex gap-2 bg-black/5 dark:bg-white/5 p-1.5 rounded-full max-w-full overflow-x-auto no-scrollbar" }, nc = ["onClick"], sc = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, rc = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, ic = { class: "max-w-[1800px] mx-auto px-[8px] md:px-[40px] pb-24" }, oc = {
  key: 0,
  class: "masonry-columns"
}, lc = ["onClick"], cc = ["src"], fc = {
  key: 1,
  class: "masonry-columns"
}, uc = /* @__PURE__ */ kr({
  __name: "collage",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const t = e, n = {
      _p: t._p,
      _$p: t.__p
    }, { _$p: s } = n, r = [
      { id: "1", id_str: "1534528741775-53994a69daeb", category: "portrait" },
      { id: "2", id_str: "1506794778202-cad84cf45f1d", category: "portrait" },
      { id: "3", id_str: "1529139574466-a302d2052574", category: "fashion" },
      { id: "4", id_str: "1494790108377-be9c29b29330", category: "portrait" },
      { id: "5", id_str: "1512353087810-25dfcd100962", category: "art" },
      { id: "6", id_str: "1539109136881-3be0616acf4b", category: "fashion" },
      { id: "7", id_str: "1542291026-7eec264c27ff", category: "product" },
      { id: "8", id_str: "1600607686527-6fb886090705", category: "product" },
      { id: "9", id_str: "1505740420928-5e560c06d30e", category: "product" },
      { id: "10", id_str: "1469334031218-e382a71b716b", category: "fashion" },
      { id: "11", id_str: "1581044777550-4cfa60707c03", category: "fashion" },
      { id: "12", id_str: "1483985988355-763728e1935b", category: "fashion" },
      { id: "13", id_str: "1522075469751-3a6694fb2f61", category: "portrait" },
      { id: "14", id_str: "1515378960530-7c0da6231fb1", category: "tech" },
      { id: "15", id_str: "1550745165-9bc0b252726f", category: "tech" }
    ], i = n._p.f.name("collage-root"), o = /* @__PURE__ */ it([]), l = /* @__PURE__ */ it(!1), f = /* @__PURE__ */ it("all"), d = /* @__PURE__ */ it(!1), u = /* @__PURE__ */ it(null), h = /* @__PURE__ */ it(null), y = /* @__PURE__ */ it(n._$p.data.curr.data.theme || "light"), w = Gn(() => y.value === "dark"), O = () => {
      const N = document.getElementById(i), E = y.value === "dark" ? "light" : "dark";
      (async () => {
        try {
          await n._p.f.set_theme({ name: E, el_id: N.id }), n._$p.data.curr.data.theme = E, y.value = E, document.documentElement.setAttribute("data-theme", E);
        } catch (P) {
          console.error("Theme toggle failed:", P);
        }
      })();
    }, D = (N) => N.sort(() => Math.random() - 0.5), Q = (N) => D([...N]).map((P) => {
      const U = Math.random();
      let C = 500;
      return U < 0.2 ? C = 350 : U < 0.5 ? C = 500 : U < 0.8 ? C = 750 : C = 950, C += Math.floor(Math.random() * 40 - 20), {
        id: `${P.id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        src: `https://images.unsplash.com/photo-${P.id_str}?w=500&h=${C}&fit=crop&q=80`,
        fullSrc: `https://images.unsplash.com/photo-${P.id_str}?w=1200&q=90`,
        category: P.category,
        aspect: 500 / C
      };
    }), $ = Gn(() => f.value === "all" ? o.value : o.value.filter((N) => N.category === f.value)), j = () => {
      setTimeout(() => {
        const N = Q(r);
        o.value.push(...N);
      }, 500);
    };
    let B;
    const M = () => {
      B = new IntersectionObserver((N) => {
        N[0].isIntersecting && l.value && j();
      }, { rootMargin: "600px" }), u.value && B.observe(u.value);
    }, W = (N) => {
      f.value !== N && (f.value = N, window.scrollTo({ top: 0, behavior: "smooth" }));
    }, te = (N) => {
      h.value = N, document.body.style.overflow = "hidden";
    }, ie = () => {
      h.value = null, document.body.style.overflow = "";
    };
    return fs(() => {
      const N = document.getElementById(i);
      N && n._p.f.set_theme && n._p.f.set_theme({ name: y.value, el_id: N.id }), window.addEventListener("scroll", () => {
        d.value = window.scrollY > 50;
      }), o.value = Q(r), setTimeout(async () => {
        l.value = !0, await Ar(), M();
      }, 400);
    }), us(() => {
      B && B.disconnect();
    }), (N, E) => (ve(), Ce("div", {
      id: kn(i),
      class: Ze(["gallery-root min-h-screen font-sans transition-colors duration-500 overflow-x-hidden", w.value ? "bg-[#0a0a0a] text-white" : "bg-[#f0f0f0] text-gray-900"]),
      "data-ce": '[{"k":"t-light-class","v":"bg-[#f0f0f0] text-gray-900"},{"k":"t-dark-class","v":"bg-[#0a0a0a] text-white"}]'
    }, [
      he(xl, { name: "fade-zoom" }, {
        default: Rr(() => [
          h.value ? (ve(), Ce("div", {
            key: 0,
            class: "fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm",
            onClick: ie
          }, [
            re("div", Xl, [
              re("img", {
                src: h.value.fullSrc,
                class: "max-w-[95vw] max-h-[95vh] rounded shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-zoomIn",
                onClick: E[0] || (E[0] = Kl(() => {
                }, ["stop"]))
              }, null, 8, Zl)
            ])
          ])) : Ls("", !0)
        ]),
        _: 1
      }),
      re("header", {
        class: Ze(["sticky top-0 z-50 py-10 transition-all duration-300 pointer-events-none mb-2.5", { "bg-black/85 backdrop-blur-md py-5 border-b border-white/5": d.value && w.value, "bg-white/85 backdrop-blur-md py-5 border-b border-black/5": d.value && !w.value }])
      }, [
        re("div", Ql, [
          re("div", ec, Dn(kn(s).data.curr.data.foo?.txt || "MUSE"), 1),
          re("nav", tc, [
            (ve(), Ce(_e, null, In(["all", "fashion", "portrait", "product", "tech", "art"], (P) => re("button", {
              key: P,
              onClick: (U) => W(P),
              class: Ze(["px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap", [
                f.value === P ? w.value ? "bg-[#333] text-white shadow-lg" : "bg-white text-black shadow-lg" : w.value ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"
              ]])
            }, Dn(P), 11, nc)), 64)),
            re("button", {
              onClick: O,
              class: Ze(["px-3 py-2 rounded-full transition-all duration-300 flex items-center justify-center ml-2 border-l border-white/10 pl-4", w.value ? "text-yellow-400 hover:bg-white/10" : "text-slate-600 hover:bg-black/5"])
            }, [
              w.value ? (ve(), Ce("svg", sc, [...E[1] || (E[1] = [
                rl('<circle cx="12" cy="12" r="5" data-v-f679bc76></circle><line x1="12" y1="1" x2="12" y2="3" data-v-f679bc76></line><line x1="12" y1="21" x2="12" y2="23" data-v-f679bc76></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-f679bc76></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-f679bc76></line><line x1="1" y1="12" x2="3" y2="12" data-v-f679bc76></line><line x1="21" y1="12" x2="23" y2="12" data-v-f679bc76></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-f679bc76></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-f679bc76></line>', 9)
              ])])) : (ve(), Ce("svg", rc, [...E[2] || (E[2] = [
                re("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
              ])]))
            ], 2)
          ])
        ])
      ], 2),
      re("main", ic, [
        l.value ? (ve(), Ce("div", oc, [
          (ve(!0), Ce(_e, null, In($.value, (P) => (ve(), Ce("div", {
            key: P.id,
            class: "masonry-item mb-4 relative cursor-zoom-in break-inside-avoid opacity-0 translate-y-8 animate-floatUp",
            onClick: (U) => te(P)
          }, [
            re("div", {
              class: "w-full relative rounded-xl overflow-hidden bg-[#151515]",
              style: xt({ paddingBottom: 1 / P.aspect * 100 + "%" })
            }, [
              re("img", {
                src: P.src,
                class: "absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105",
                loading: "lazy"
              }, null, 8, cc),
              E[3] || (E[3] = re("div", { class: "absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" }, null, -1))
            ], 4)
          ], 8, lc))), 128))
        ])) : (ve(), Ce("div", fc, [
          (ve(), Ce(_e, null, In(12, (P) => re("div", {
            key: P,
            class: "mb-4 break-inside-avoid"
          }, [
            re("div", {
              class: "w-full bg-[#1a1a1a] rounded-xl animate-pulse",
              style: xt({ paddingBottom: [150, 100, 70, 180][P % 4] + "%" })
            }, null, 4)
          ])), 64))
        ])),
        l.value ? (ve(), Ce("div", {
          key: 2,
          ref_key: "footerRef",
          ref: u,
          class: "py-10 flex justify-center"
        }, [...E[4] || (E[4] = [
          re("div", { class: "w-6 h-6 border-2 border-white/10 border-t-white rounded-full animate-spin" }, null, -1)
        ])], 512)) : Ls("", !0)
      ])
    ], 10, Yl));
  }
}), ac = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, dc = /* @__PURE__ */ ac(uc, [["__scopeId", "data-v-f679bc76"]]), hc = /* @__PURE__ */ kr({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (t, n) => (ve(), ci(dc, Mi(ui({
      _p: e._p,
      __p: e._$p
    })), null, 16));
  }
}), gc = async (e) => ({
  set: async (t, n) => {
    const s = document.getElementById(
      e.f.name("vue-root")
    );
    return s ? (zl(hc, {
      _p: e,
      _$p: t,
      _$cb: n
    }).mount(s), {
      r: "",
      style: "",
      evt: {
        change: () => {
          n?.change({ _$p: t });
        }
      }
    }) : (console.error("vue-root not found"), { r: "", style: "" });
  }
});
export {
  gc as hydrator,
  gc as index
};
