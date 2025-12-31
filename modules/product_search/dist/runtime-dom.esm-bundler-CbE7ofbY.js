// @__NO_SIDE_EFFECTS__
function Ct(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const z = {}, mt = [], De = () => {
}, ar = () => !1, Wt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ts = (e) => e.startsWith("onUpdate:"), le = Object.assign, ns = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Li = Object.prototype.hasOwnProperty, X = (e, t) => Li.call(e, t), N = Array.isArray, _t = (e) => kt(e) === "[object Map]", ss = (e) => kt(e) === "[object Set]", ws = (e) => kt(e) === "[object Date]", j = (e) => typeof e == "function", ie = (e) => typeof e == "string", He = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", hr = (e) => (Z(e) || j(e)) && j(e.then) && j(e.catch), dr = Object.prototype.toString, kt = (e) => dr.call(e), Ni = (e) => kt(e).slice(8, -1), pr = (e) => kt(e) === "[object Object]", rs = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, bt = /* @__PURE__ */ Ct(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), _n = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Di = /-\w/g, tt = _n(
  (e) => e.replace(Di, (t) => t.slice(1).toUpperCase())
), Hi = /\B([A-Z])/g, qe = _n(
  (e) => e.replace(Hi, "-$1").toLowerCase()
), gr = _n((e) => e.charAt(0).toUpperCase() + e.slice(1)), On = _n(
  (e) => e ? `on${gr(e)}` : ""
), ze = (e, t) => !Object.is(e, t), sn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, mr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, is = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, $i = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Es;
const bn = () => Es || (Es = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function os(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ie(s) ? Ui(s) : os(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ie(e) || Z(e))
    return e;
}
const ji = /;(?![^(]*\))/g, Vi = /:([^]+)/, Bi = /\/\*[^]*?\*\//g;
function Ui(e) {
  const t = {};
  return e.replace(Bi, "").split(ji).forEach((n) => {
    if (n) {
      const s = n.split(Vi);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function xc(e) {
  if (!e) return "";
  if (ie(e)) return e;
  let t = "";
  for (const n in e) {
    const s = e[n];
    if (ie(s) || typeof s == "number") {
      const r = n.startsWith("--") ? n : qe(n);
      t += `${r}:${s};`;
    }
  }
  return t;
}
function ls(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (N(e))
    for (let n = 0; n < e.length; n++) {
      const s = ls(e[n]);
      s && (t += s + " ");
    }
  else if (Z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ki = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Wi = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", vc = /* @__PURE__ */ Ct(Ki), Sc = /* @__PURE__ */ Ct(Wi), _r = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ki = /* @__PURE__ */ Ct(_r), Tc = /* @__PURE__ */ Ct(
  _r + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function br(e) {
  return !!e || e === "";
}
const Gi = /[>/="'\u0009\u000a\u000c\u0020]/, Pn = {};
function Cc(e) {
  if (Pn.hasOwnProperty(e))
    return Pn[e];
  const t = Gi.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), Pn[e] = !t;
}
const wc = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function Ec(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const qi = /["'&<>]/;
function Ac(e) {
  const t = "" + e, n = qi.exec(t);
  if (!n)
    return t;
  let s = "", r, i, o = 0;
  for (i = n.index; i < t.length; i++) {
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
    o !== i && (s += t.slice(o, i)), o = i + 1, s += r;
  }
  return o !== i ? s + t.slice(o, i) : s;
}
const Ji = /^-?>|<!--|-->|--!>|<!-$/g;
function Mc(e) {
  return e.replace(Ji, "");
}
function Yi(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = yn(e[s], t[s]);
  return n;
}
function yn(e, t) {
  if (e === t) return !0;
  let n = ws(e), s = ws(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = He(e), s = He(t), n || s)
    return e === t;
  if (n = N(e), s = N(t), n || s)
    return n && s ? Yi(e, t) : !1;
  if (n = Z(e), s = Z(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), f = t.hasOwnProperty(o);
      if (l && !f || !l && f || !yn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Xi(e, t) {
  return e.findIndex((n) => yn(n, t));
}
const yr = (e) => !!(e && e.__v_isRef === !0), Qi = (e) => ie(e) ? e : e == null ? "" : N(e) || Z(e) && (e.toString === dr || !j(e.toString)) ? yr(e) ? Qi(e.value) : JSON.stringify(e, xr, 2) : String(e), xr = (e, t) => yr(t) ? xr(e, t.value) : _t(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Rn(s, i) + " =>"] = r, n),
    {}
  )
} : ss(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Rn(n))
} : He(t) ? Rn(t) : Z(t) && !N(t) && !pr(t) ? String(t) : t, Rn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    He(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Oc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let _e;
class Zi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = _e, !t && _e && (this.index = (_e.scopes || (_e.scopes = [])).push(
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
      const n = _e;
      try {
        return _e = this, t();
      } finally {
        _e = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = _e, _e = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (_e = this.prevScope, this.prevScope = void 0);
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
function zi() {
  return _e;
}
let te;
const Fn = /* @__PURE__ */ new WeakSet();
class vr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _e && _e.active && _e.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Fn.has(this) && (Fn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Tr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, As(this), Cr(this);
    const t = te, n = Oe;
    te = this, Oe = !0;
    try {
      return this.fn();
    } finally {
      wr(this), te = t, Oe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        us(t);
      this.deps = this.depsTail = void 0, As(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Fn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Kn(this) && this.run();
  }
  get dirty() {
    return Kn(this);
  }
}
let Sr = 0, Pt, Rt;
function Tr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Rt, Rt = e;
    return;
  }
  e.next = Pt, Pt = e;
}
function cs() {
  Sr++;
}
function fs() {
  if (--Sr > 0)
    return;
  if (Rt) {
    let t = Rt;
    for (Rt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Pt; ) {
    let t = Pt;
    for (Pt = void 0; t; ) {
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
function Cr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function wr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), us(s), eo(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Kn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Er(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Er(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Nt) || (e.globalVersion = Nt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Kn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = te, s = Oe;
  te = e, Oe = !0;
  try {
    Cr(e);
    const r = e.fn(e._value);
    (t.version === 0 || ze(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    te = n, Oe = s, wr(e), e.flags &= -3;
  }
}
function us(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      us(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function eo(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Oe = !0;
const Ar = [];
function We() {
  Ar.push(Oe), Oe = !1;
}
function ke() {
  const e = Ar.pop();
  Oe = e === void 0 ? !0 : e;
}
function As(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = te;
    te = void 0;
    try {
      t();
    } finally {
      te = n;
    }
  }
}
let Nt = 0;
class to {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class as {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!te || !Oe || te === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== te)
      n = this.activeLink = new to(te, this), te.deps ? (n.prevDep = te.depsTail, te.depsTail.nextDep = n, te.depsTail = n) : te.deps = te.depsTail = n, Mr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = te.depsTail, n.nextDep = void 0, te.depsTail.nextDep = n, te.depsTail = n, te.deps === n && (te.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Nt++, this.notify(t);
  }
  notify(t) {
    cs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      fs();
    }
  }
}
function Mr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Mr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Wn = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ Symbol(
  ""
), kn = /* @__PURE__ */ Symbol(
  ""
), Dt = /* @__PURE__ */ Symbol(
  ""
);
function fe(e, t, n) {
  if (Oe && te) {
    let s = Wn.get(e);
    s || Wn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new as()), r.map = s, r.key = n), r.track();
  }
}
function Ue(e, t, n, s, r, i) {
  const o = Wn.get(e);
  if (!o) {
    Nt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (cs(), t === "clear")
    o.forEach(l);
  else {
    const f = N(e), h = f && rs(n);
    if (f && n === "length") {
      const u = Number(s);
      o.forEach((d, v) => {
        (v === "length" || v === Dt || !He(v) && v >= u) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), h && l(o.get(Dt)), t) {
        case "add":
          f ? h && l(o.get("length")) : (l(o.get(ft)), _t(e) && l(o.get(kn)));
          break;
        case "delete":
          f || (l(o.get(ft)), _t(e) && l(o.get(kn)));
          break;
        case "set":
          _t(e) && l(o.get(ft));
          break;
      }
  }
  fs();
}
function ht(e) {
  const t = Y(e);
  return t === e ? t : (fe(t, "iterate", Dt), Ae(e) ? t : t.map(Pe));
}
function xn(e) {
  return fe(e = Y(e), "iterate", Dt), e;
}
function Xe(e, t) {
  return Ge(e) ? et(e) ? Tt(Pe(t)) : Tt(t) : Pe(t);
}
const no = {
  __proto__: null,
  [Symbol.iterator]() {
    return In(this, Symbol.iterator, (e) => Xe(this, e));
  },
  concat(...e) {
    return ht(this).concat(
      ...e.map((t) => N(t) ? ht(t) : t)
    );
  },
  entries() {
    return In(this, "entries", (e) => (e[1] = Xe(this, e[1]), e));
  },
  every(e, t) {
    return $e(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return $e(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Xe(this, s)),
      arguments
    );
  },
  find(e, t) {
    return $e(
      this,
      "find",
      e,
      t,
      (n) => Xe(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return $e(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return $e(
      this,
      "findLast",
      e,
      t,
      (n) => Xe(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return $e(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return $e(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ln(this, "includes", e);
  },
  indexOf(...e) {
    return Ln(this, "indexOf", e);
  },
  join(e) {
    return ht(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ln(this, "lastIndexOf", e);
  },
  map(e, t) {
    return $e(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return At(this, "pop");
  },
  push(...e) {
    return At(this, "push", e);
  },
  reduce(e, ...t) {
    return Ms(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ms(this, "reduceRight", e, t);
  },
  shift() {
    return At(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return $e(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return At(this, "splice", e);
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
    return At(this, "unshift", e);
  },
  values() {
    return In(this, "values", (e) => Xe(this, e));
  }
};
function In(e, t, n) {
  const s = xn(e), r = s[t]();
  return s !== e && !Ae(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const so = Array.prototype;
function $e(e, t, n, s, r, i) {
  const o = xn(e), l = o !== e && !Ae(e), f = o[t];
  if (f !== so[t]) {
    const d = f.apply(e, i);
    return l ? Pe(d) : d;
  }
  let h = n;
  o !== e && (l ? h = function(d, v) {
    return n.call(this, Xe(e, d), v, e);
  } : n.length > 2 && (h = function(d, v) {
    return n.call(this, d, v, e);
  }));
  const u = f.call(o, h, s);
  return l && r ? r(u) : u;
}
function Ms(e, t, n, s) {
  const r = xn(e);
  let i = n;
  return r !== e && (Ae(e) ? n.length > 3 && (i = function(o, l, f) {
    return n.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return n.call(this, o, Xe(e, l), f, e);
  }), r[t](i, ...s);
}
function Ln(e, t, n) {
  const s = Y(e);
  fe(s, "iterate", Dt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && gs(n[0]) ? (n[0] = Y(n[0]), s[t](...n)) : r;
}
function At(e, t, n = []) {
  We(), cs();
  const s = Y(e)[t].apply(e, n);
  return fs(), ke(), s;
}
const ro = /* @__PURE__ */ Ct("__proto__,__v_isRef,__isVue"), Or = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(He)
);
function io(e) {
  He(e) || (e = String(e));
  const t = Y(this);
  return fe(t, "has", e), t.hasOwnProperty(e);
}
class Pr {
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
      return s === (r ? i ? mo : Lr : i ? Ir : Fr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = N(t);
    if (!r) {
      let f;
      if (o && (f = no[n]))
        return f;
      if (n === "hasOwnProperty")
        return io;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ae(t) ? t : s
    );
    if ((He(n) ? Or.has(n) : ro(n)) || (r || fe(t, "get", n), i))
      return l;
    if (ae(l)) {
      const f = o && rs(n) ? l : l.value;
      return r && Z(f) ? qn(f) : f;
    }
    return Z(l) ? r ? qn(l) : ds(l) : l;
  }
}
class Rr extends Pr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = N(t) && rs(n);
    if (!this._isShallow) {
      const h = Ge(i);
      if (!Ae(s) && !Ge(s) && (i = Y(i), s = Y(s)), !o && ae(i) && !ae(s))
        return h || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : X(t, n), f = Reflect.set(
      t,
      n,
      s,
      ae(t) ? t : r
    );
    return t === Y(r) && (l ? ze(s, i) && Ue(t, "set", n, s) : Ue(t, "add", n, s)), f;
  }
  deleteProperty(t, n) {
    const s = X(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Ue(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!He(n) || !Or.has(n)) && fe(t, "has", n), s;
  }
  ownKeys(t) {
    return fe(
      t,
      "iterate",
      N(t) ? "length" : ft
    ), Reflect.ownKeys(t);
  }
}
class oo extends Pr {
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
const lo = /* @__PURE__ */ new Rr(), co = /* @__PURE__ */ new oo(), fo = /* @__PURE__ */ new Rr(!0);
const Gn = (e) => e, Xt = (e) => Reflect.getPrototypeOf(e);
function uo(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = Y(r), o = _t(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, h = r[e](...s), u = n ? Gn : t ? Tt : Pe;
    return !t && fe(
      i,
      "iterate",
      f ? kn : ft
    ), {
      // iterator protocol
      next() {
        const { value: d, done: v } = h.next();
        return v ? { value: d, done: v } : {
          value: l ? [u(d[0]), u(d[1])] : u(d),
          done: v
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Qt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ao(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = Y(i), l = Y(r);
      e || (ze(r, l) && fe(o, "get", r), fe(o, "get", l));
      const { has: f } = Xt(o), h = t ? Gn : e ? Tt : Pe;
      if (f.call(o, r))
        return h(i.get(r));
      if (f.call(o, l))
        return h(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && fe(Y(r), "iterate", ft), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = Y(i), l = Y(r);
      return e || (ze(r, l) && fe(o, "has", r), fe(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, f = Y(l), h = t ? Gn : e ? Tt : Pe;
      return !e && fe(f, "iterate", ft), l.forEach((u, d) => r.call(i, h(u), h(d), o));
    }
  };
  return le(
    n,
    e ? {
      add: Qt("add"),
      set: Qt("set"),
      delete: Qt("delete"),
      clear: Qt("clear")
    } : {
      add(r) {
        !t && !Ae(r) && !Ge(r) && (r = Y(r));
        const i = Y(this);
        return Xt(i).has.call(i, r) || (i.add(r), Ue(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !Ae(i) && !Ge(i) && (i = Y(i));
        const o = Y(this), { has: l, get: f } = Xt(o);
        let h = l.call(o, r);
        h || (r = Y(r), h = l.call(o, r));
        const u = f.call(o, r);
        return o.set(r, i), h ? ze(i, u) && Ue(o, "set", r, i) : Ue(o, "add", r, i), this;
      },
      delete(r) {
        const i = Y(this), { has: o, get: l } = Xt(i);
        let f = o.call(i, r);
        f || (r = Y(r), f = o.call(i, r)), l && l.call(i, r);
        const h = i.delete(r);
        return f && Ue(i, "delete", r, void 0), h;
      },
      clear() {
        const r = Y(this), i = r.size !== 0, o = r.clear();
        return i && Ue(
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
    n[r] = uo(r, e, t);
  }), n;
}
function hs(e, t) {
  const n = ao(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    X(n, r) && r in s ? n : s,
    r,
    i
  );
}
const ho = {
  get: /* @__PURE__ */ hs(!1, !1)
}, po = {
  get: /* @__PURE__ */ hs(!1, !0)
}, go = {
  get: /* @__PURE__ */ hs(!0, !1)
};
const Fr = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), mo = /* @__PURE__ */ new WeakMap();
function _o(e) {
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
function bo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _o(Ni(e));
}
function ds(e) {
  return Ge(e) ? e : ps(
    e,
    !1,
    lo,
    ho,
    Fr
  );
}
function yo(e) {
  return ps(
    e,
    !1,
    fo,
    po,
    Ir
  );
}
function qn(e) {
  return ps(
    e,
    !0,
    co,
    go,
    Lr
  );
}
function ps(e, t, n, s, r) {
  if (!Z(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = bo(e);
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
function et(e) {
  return Ge(e) ? et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ge(e) {
  return !!(e && e.__v_isReadonly);
}
function Ae(e) {
  return !!(e && e.__v_isShallow);
}
function gs(e) {
  return e ? !!e.__v_raw : !1;
}
function Y(e) {
  const t = e && e.__v_raw;
  return t ? Y(t) : e;
}
function xo(e) {
  return !X(e, "__v_skip") && Object.isExtensible(e) && mr(e, "__v_skip", !0), e;
}
const Pe = (e) => Z(e) ? ds(e) : e, Tt = (e) => Z(e) ? qn(e) : e;
function ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Pc(e) {
  return vo(e, !1);
}
function vo(e, t) {
  return ae(e) ? e : new So(e, t);
}
class So {
  constructor(t, n) {
    this.dep = new as(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Y(t), this._value = n ? t : Pe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Ae(t) || Ge(t);
    t = s ? t : Y(t), ze(t, n) && (this._rawValue = t, this._value = s ? t : Pe(t), this.dep.trigger());
  }
}
function To(e) {
  return ae(e) ? e.value : e;
}
const Co = {
  get: (e, t, n) => t === "__v_raw" ? e : To(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ae(r) && !ae(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Nr(e) {
  return et(e) ? e : new Proxy(e, Co);
}
class wo {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new as(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Nt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    te !== this)
      return Tr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Er(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Eo(e, t, n = !1) {
  let s, r;
  return j(e) ? s = e : (s = e.get, r = e.set), new wo(s, r, n);
}
const Zt = {}, un = /* @__PURE__ */ new WeakMap();
let lt;
function Ao(e, t = !1, n = lt) {
  if (n) {
    let s = un.get(n);
    s || un.set(n, s = []), s.push(e);
  }
}
function Mo(e, t, n = z) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = n, h = (m) => r ? m : Ae(m) || r === !1 || r === 0 ? Ke(m, 1) : Ke(m);
  let u, d, v, E, D = !1, B = !1;
  if (ae(e) ? (d = () => e.value, D = Ae(e)) : et(e) ? (d = () => h(e), D = !0) : N(e) ? (B = !0, D = e.some((m) => et(m) || Ae(m)), d = () => e.map((m) => {
    if (ae(m))
      return m.value;
    if (et(m))
      return h(m);
    if (j(m))
      return f ? f(m, 2) : m();
  })) : j(e) ? t ? d = f ? () => f(e, 2) : e : d = () => {
    if (v) {
      We();
      try {
        v();
      } finally {
        ke();
      }
    }
    const m = lt;
    lt = u;
    try {
      return f ? f(e, 3, [E]) : e(E);
    } finally {
      lt = m;
    }
  } : d = De, t && r) {
    const m = d, M = r === !0 ? 1 / 0 : r;
    d = () => Ke(m(), M);
  }
  const se = zi(), W = () => {
    u.stop(), se && se.active && ns(se.effects, u);
  };
  if (i && t) {
    const m = t;
    t = (...M) => {
      m(...M), W();
    };
  }
  let q = B ? new Array(e.length).fill(Zt) : Zt;
  const g = (m) => {
    if (!(!(u.flags & 1) || !u.dirty && !m))
      if (t) {
        const M = u.run();
        if (r || D || (B ? M.some(($, U) => ze($, q[U])) : ze(M, q))) {
          v && v();
          const $ = lt;
          lt = u;
          try {
            const U = [
              M,
              // pass undefined as the old value when it's changed for the first time
              q === Zt ? void 0 : B && q[0] === Zt ? [] : q,
              E
            ];
            q = M, f ? f(t, 3, U) : (
              // @ts-expect-error
              t(...U)
            );
          } finally {
            lt = $;
          }
        }
      } else
        u.run();
  };
  return l && l(g), u = new vr(d), u.scheduler = o ? () => o(g, !1) : g, E = (m) => Ao(m, !1, u), v = u.onStop = () => {
    const m = un.get(u);
    if (m) {
      if (f)
        f(m, 4);
      else
        for (const M of m) M();
      un.delete(u);
    }
  }, t ? s ? g(!0) : q = u.run() : o ? o(g.bind(null, !0), !0) : u.run(), W.pause = u.pause.bind(u), W.resume = u.resume.bind(u), W.stop = W, W;
}
function Ke(e, t = 1 / 0, n) {
  if (t <= 0 || !Z(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, ae(e))
    Ke(e.value, t, n);
  else if (N(e))
    for (let s = 0; s < e.length; s++)
      Ke(e[s], t, n);
  else if (ss(e) || _t(e))
    e.forEach((s) => {
      Ke(s, t, n);
    });
  else if (pr(e)) {
    for (const s in e)
      Ke(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ke(e[s], t, n);
  }
  return e;
}
function Gt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    vn(r, t, n);
  }
}
function Re(e, t, n, s) {
  if (j(e)) {
    const r = Gt(e, t, n, s);
    return r && hr(r) && r.catch((i) => {
      vn(i, t, n);
    }), r;
  }
  if (N(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Re(e[i], t, n, s));
    return r;
  }
}
function vn(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || z;
  if (t) {
    let l = t.parent;
    const f = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, f, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      We(), Gt(i, null, 10, [
        e,
        f,
        h
      ]), ke();
      return;
    }
  }
  Oo(e, n, r, s, o);
}
function Oo(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const de = [];
let Le = -1;
const yt = [];
let Qe = null, pt = 0;
const Dr = /* @__PURE__ */ Promise.resolve();
let an = null;
function Po(e) {
  const t = an || Dr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ro(e) {
  let t = Le + 1, n = de.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = de[s], i = Ht(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ms(e) {
  if (!(e.flags & 1)) {
    const t = Ht(e), n = de[de.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ht(n) ? de.push(e) : de.splice(Ro(t), 0, e), e.flags |= 1, Hr();
  }
}
function Hr() {
  an || (an = Dr.then($r));
}
function Fo(e) {
  N(e) ? yt.push(...e) : Qe && e.id === -1 ? Qe.splice(pt + 1, 0, e) : e.flags & 1 || (yt.push(e), e.flags |= 1), Hr();
}
function Os(e, t, n = Le + 1) {
  for (; n < de.length; n++) {
    const s = de[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      de.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function hn(e) {
  if (yt.length) {
    const t = [...new Set(yt)].sort(
      (n, s) => Ht(n) - Ht(s)
    );
    if (yt.length = 0, Qe) {
      Qe.push(...t);
      return;
    }
    for (Qe = t, pt = 0; pt < Qe.length; pt++) {
      const n = Qe[pt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Qe = null, pt = 0;
  }
}
const Ht = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $r(e) {
  try {
    for (Le = 0; Le < de.length; Le++) {
      const t = de[Le];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Gt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Le < de.length; Le++) {
      const t = de[Le];
      t && (t.flags &= -2);
    }
    Le = -1, de.length = 0, hn(), an = null, (de.length || yt.length) && $r();
  }
}
let Ee = null, jr = null;
function $t(e) {
  const t = Ee;
  return Ee = e, jr = e && e.type.__scopeId || null, t;
}
function Io(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && gn(-1);
    const i = $t(t);
    let o;
    try {
      o = e(...r);
    } finally {
      $t(i), s._d && gn(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Rc(e, t) {
  if (Ee === null)
    return e;
  const n = wn(Ee), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, f = z] = t[r];
    i && (j(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ke(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: f
    }));
  }
  return e;
}
function Ne(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[s];
    f && (We(), Re(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ke());
  }
}
const Lo = /* @__PURE__ */ Symbol("_vte"), Vr = (e) => e.__isTeleport, Be = /* @__PURE__ */ Symbol("_leaveCb"), zt = /* @__PURE__ */ Symbol("_enterCb");
function No() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Jr(() => {
    e.isMounted = !0;
  }), Yr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Te = [Function, Array], Br = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Te,
  onEnter: Te,
  onAfterEnter: Te,
  onEnterCancelled: Te,
  // leave
  onBeforeLeave: Te,
  onLeave: Te,
  onAfterLeave: Te,
  onLeaveCancelled: Te,
  // appear
  onBeforeAppear: Te,
  onAppear: Te,
  onAfterAppear: Te,
  onAppearCancelled: Te
}, Ur = (e) => {
  const t = e.subTree;
  return t.component ? Ur(t.component) : t;
}, Do = {
  name: "BaseTransition",
  props: Br,
  setup(e, { slots: t }) {
    const n = Ti(), s = No();
    return () => {
      const r = t.default && kr(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = Kr(r), o = Y(e), { mode: l } = o;
      if (s.isLeaving)
        return Nn(i);
      const f = Ps(i);
      if (!f)
        return Nn(i);
      let h = Jn(
        f,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => h = d
      );
      f.type !== ue && jt(f, h);
      let u = n.subTree && Ps(n.subTree);
      if (u && u.type !== ue && !ct(u, f) && Ur(n).type !== ue) {
        let d = Jn(
          u,
          o,
          s,
          n
        );
        if (jt(u, d), l === "out-in" && f.type !== ue)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, Nn(i);
        l === "in-out" && f.type !== ue ? d.delayLeave = (v, E, D) => {
          const B = Wr(
            s,
            u
          );
          B[String(u.key)] = u, v[Be] = () => {
            E(), v[Be] = void 0, delete h.delayedLeave, u = void 0;
          }, h.delayedLeave = () => {
            D(), delete h.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function Kr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ue) {
        t = n;
        break;
      }
  }
  return t;
}
const Ho = Do;
function Wr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Jn(e, t, n, s, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: f,
    onEnter: h,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: v,
    onLeave: E,
    onAfterLeave: D,
    onLeaveCancelled: B,
    onBeforeAppear: se,
    onAppear: W,
    onAfterAppear: q,
    onAppearCancelled: g
  } = t, m = String(e.key), M = Wr(n, e), $ = (P, O) => {
    P && Re(
      P,
      s,
      9,
      O
    );
  }, U = (P, O) => {
    const K = O[1];
    $(P, O), N(P) ? P.every((T) => T.length <= 1) && K() : P.length <= 1 && K();
  }, k = {
    mode: o,
    persisted: l,
    beforeEnter(P) {
      let O = f;
      if (!n.isMounted)
        if (i)
          O = se || f;
        else
          return;
      P[Be] && P[Be](
        !0
        /* cancelled */
      );
      const K = M[m];
      K && ct(e, K) && K.el[Be] && K.el[Be](), $(O, [P]);
    },
    enter(P) {
      let O = h, K = u, T = d;
      if (!n.isMounted)
        if (i)
          O = W || h, K = q || u, T = g || d;
        else
          return;
      let V = !1;
      const ne = P[zt] = (oe) => {
        V || (V = !0, oe ? $(T, [P]) : $(K, [P]), k.delayedLeave && k.delayedLeave(), P[zt] = void 0);
      };
      O ? U(O, [P, ne]) : ne();
    },
    leave(P, O) {
      const K = String(e.key);
      if (P[zt] && P[zt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return O();
      $(v, [P]);
      let T = !1;
      const V = P[Be] = (ne) => {
        T || (T = !0, O(), ne ? $(B, [P]) : $(D, [P]), P[Be] = void 0, M[K] === e && delete M[K]);
      };
      M[K] = e, E ? U(E, [P, V]) : V();
    },
    clone(P) {
      const O = Jn(
        P,
        t,
        n,
        s,
        r
      );
      return r && r(O), O;
    }
  };
  return k;
}
function Nn(e) {
  if (Sn(e))
    return e = nt(e), e.children = null, e;
}
function Ps(e) {
  if (!Sn(e))
    return Vr(e.type) && e.children ? Kr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && j(n.default))
      return n.default();
  }
}
function jt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, jt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function kr(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === we ? (o.patchFlag & 128 && r++, s = s.concat(
      kr(o.children, t, l)
    )) : (t || o.type !== ue) && s.push(l != null ? nt(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Fc(e, t) {
  return j(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function Gr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const dn = /* @__PURE__ */ new WeakMap();
function xt(e, t, n, s, r = !1) {
  if (N(e)) {
    e.forEach(
      (D, B) => xt(
        D,
        t && (N(t) ? t[B] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (vt(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && xt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? wn(s.component) : s.el, o = r ? null : i, { i: l, r: f } = e, h = t && t.r, u = l.refs === z ? l.refs = {} : l.refs, d = l.setupState, v = Y(d), E = d === z ? ar : (D) => X(v, D);
  if (h != null && h !== f) {
    if (Rs(t), ie(h))
      u[h] = null, E(h) && (d[h] = null);
    else if (ae(h)) {
      h.value = null;
      const D = t;
      D.k && (u[D.k] = null);
    }
  }
  if (j(f))
    Gt(f, l, 12, [o, u]);
  else {
    const D = ie(f), B = ae(f);
    if (D || B) {
      const se = () => {
        if (e.f) {
          const W = D ? E(f) ? d[f] : u[f] : f.value;
          if (r)
            N(W) && ns(W, i);
          else if (N(W))
            W.includes(i) || W.push(i);
          else if (D)
            u[f] = [i], E(f) && (d[f] = u[f]);
          else {
            const q = [i];
            f.value = q, e.k && (u[e.k] = q);
          }
        } else D ? (u[f] = o, E(f) && (d[f] = o)) : B && (f.value = o, e.k && (u[e.k] = o));
      };
      if (o) {
        const W = () => {
          se(), dn.delete(e);
        };
        W.id = -1, dn.set(e, W), xe(W, n);
      } else
        Rs(e), se();
    }
  }
}
function Rs(e) {
  const t = dn.get(e);
  t && (t.flags |= 8, dn.delete(e));
}
let Fs = !1;
const dt = () => {
  Fs || (console.error("Hydration completed but contains mismatches."), Fs = !0);
}, $o = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", jo = (e) => e.namespaceURI.includes("MathML"), en = (e) => {
  if (e.nodeType === 1) {
    if ($o(e)) return "svg";
    if (jo(e)) return "mathml";
  }
}, tn = (e) => e.nodeType === 8;
function Vo(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: s,
      createText: r,
      nextSibling: i,
      parentNode: o,
      remove: l,
      insert: f,
      createComment: h
    }
  } = e, u = (g, m) => {
    if (!m.hasChildNodes()) {
      n(null, g, m), hn(), m._vnode = g;
      return;
    }
    d(m.firstChild, g, null, null, null), hn(), m._vnode = g;
  }, d = (g, m, M, $, U, k = !1) => {
    k = k || !!m.dynamicChildren;
    const P = tn(g) && g.data === "[", O = () => B(
      g,
      m,
      M,
      $,
      U,
      P
    ), { type: K, ref: T, shapeFlag: V, patchFlag: ne } = m;
    let oe = g.nodeType;
    m.el = g, ne === -2 && (k = !1, m.dynamicChildren = null);
    let I = null;
    switch (K) {
      case ut:
        oe !== 3 ? m.children === "" ? (f(m.el = r(""), o(g), g), I = g) : I = O() : (g.data !== m.children && (dt(), g.data = m.children), I = i(g));
        break;
      case ue:
        q(g) ? (I = i(g), W(
          m.el = g.content.firstChild,
          g,
          M
        )) : oe !== 8 || P ? I = O() : I = i(g);
        break;
      case ln:
        if (P && (g = i(g), oe = g.nodeType), oe === 1 || oe === 3) {
          I = g;
          const G = !m.children.length;
          for (let R = 0; R < m.staticCount; R++)
            G && (m.children += I.nodeType === 1 ? I.outerHTML : I.data), R === m.staticCount - 1 && (m.anchor = I), I = i(I);
          return P ? i(I) : I;
        } else
          O();
        break;
      case we:
        P ? I = D(
          g,
          m,
          M,
          $,
          U,
          k
        ) : I = O();
        break;
      default:
        if (V & 1)
          (oe !== 1 || m.type.toLowerCase() !== g.tagName.toLowerCase()) && !q(g) ? I = O() : I = v(
            g,
            m,
            M,
            $,
            U,
            k
          );
        else if (V & 6) {
          m.slotScopeIds = U;
          const G = o(g);
          if (P ? I = se(g) : tn(g) && g.data === "teleport start" ? I = se(g, g.data, "teleport end") : I = i(g), t(
            m,
            G,
            null,
            M,
            $,
            en(G),
            k
          ), vt(m) && !m.type.__asyncResolved) {
            let R;
            P ? (R = ge(we), R.anchor = I ? I.previousSibling : G.lastChild) : R = g.nodeType === 3 ? vi("") : ge("div"), R.el = g, m.component.subTree = R;
          }
        } else V & 64 ? oe !== 8 ? I = O() : I = m.type.hydrate(
          g,
          m,
          M,
          $,
          U,
          k,
          e,
          E
        ) : V & 128 && (I = m.type.hydrate(
          g,
          m,
          M,
          $,
          en(o(g)),
          U,
          k,
          e,
          d
        ));
    }
    return T != null && xt(T, null, $, m), I;
  }, v = (g, m, M, $, U, k) => {
    k = k || !!m.dynamicChildren;
    const { type: P, props: O, patchFlag: K, shapeFlag: T, dirs: V, transition: ne } = m, oe = P === "input" || P === "option";
    if (oe || K !== -1) {
      V && Ne(m, null, M, "created");
      let I = !1;
      if (q(g)) {
        I = di(
          null,
          // no need check parentSuspense in hydration
          ne
        ) && M && M.vnode.props && M.vnode.props.appear;
        const R = g.content.firstChild;
        if (I) {
          const re = R.getAttribute("class");
          re && (R.$cls = re), ne.beforeEnter(R);
        }
        W(R, g, M), m.el = g = R;
      }
      if (T & 16 && // skip if element has innerHTML / textContent
      !(O && (O.innerHTML || O.textContent))) {
        let R = E(
          g.firstChild,
          m,
          g,
          M,
          $,
          U,
          k
        );
        for (; R; ) {
          nn(
            g,
            1
            /* CHILDREN */
          ) || dt();
          const re = R;
          R = R.nextSibling, l(re);
        }
      } else if (T & 8) {
        let R = m.children;
        R[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (R = R.slice(1));
        const { textContent: re } = g;
        re !== R && // innerHTML normalize \r\n or \r into a single \n in the DOM
        re !== R.replace(/\r\n|\r/g, `
`) && (nn(
          g,
          0
          /* TEXT */
        ) || dt(), g.textContent = m.children);
      }
      if (O) {
        if (oe || !k || K & 48) {
          const R = g.tagName.includes("-");
          for (const re in O)
            (oe && (re.endsWith("value") || re === "indeterminate") || Wt(re) && !bt(re) || // force hydrate v-bind with .prop modifiers
            re[0] === "." || R) && s(g, re, null, O[re], void 0, M);
        } else if (O.onClick)
          s(
            g,
            "onClick",
            null,
            O.onClick,
            void 0,
            M
          );
        else if (K & 4 && et(O.style))
          for (const R in O.style) O.style[R];
      }
      let G;
      (G = O && O.onVnodeBeforeMount) && Ce(G, M, m), V && Ne(m, null, M, "beforeMount"), ((G = O && O.onVnodeMounted) || V || I) && _i(() => {
        G && Ce(G, M, m), I && ne.enter(g), V && Ne(m, null, M, "mounted");
      }, $);
    }
    return g.nextSibling;
  }, E = (g, m, M, $, U, k, P) => {
    P = P || !!m.dynamicChildren;
    const O = m.children, K = O.length;
    for (let T = 0; T < K; T++) {
      const V = P ? O[T] : O[T] = ve(O[T]), ne = V.type === ut;
      g ? (ne && !P && T + 1 < K && ve(O[T + 1]).type === ut && (f(
        r(
          g.data.slice(V.children.length)
        ),
        M,
        i(g)
      ), g.data = V.children), g = d(
        g,
        V,
        $,
        U,
        k,
        P
      )) : ne && !V.children ? f(V.el = r(""), M) : (nn(
        M,
        1
        /* CHILDREN */
      ) || dt(), n(
        null,
        V,
        M,
        null,
        $,
        U,
        en(M),
        k
      ));
    }
    return g;
  }, D = (g, m, M, $, U, k) => {
    const { slotScopeIds: P } = m;
    P && (U = U ? U.concat(P) : P);
    const O = o(g), K = E(
      i(g),
      m,
      O,
      M,
      $,
      U,
      k
    );
    return K && tn(K) && K.data === "]" ? i(m.anchor = K) : (dt(), f(m.anchor = h("]"), O, K), K);
  }, B = (g, m, M, $, U, k) => {
    if (nn(
      g.parentElement,
      1
      /* CHILDREN */
    ) || dt(), m.el = null, k) {
      const K = se(g);
      for (; ; ) {
        const T = i(g);
        if (T && T !== K)
          l(T);
        else
          break;
      }
    }
    const P = i(g), O = o(g);
    return l(g), n(
      null,
      m,
      O,
      P,
      M,
      $,
      en(O),
      U
    ), M && (M.vnode.el = m.el, si(M, m.el)), P;
  }, se = (g, m = "[", M = "]") => {
    let $ = 0;
    for (; g; )
      if (g = i(g), g && tn(g) && (g.data === m && $++, g.data === M)) {
        if ($ === 0)
          return i(g);
        $--;
      }
    return g;
  }, W = (g, m, M) => {
    const $ = m.parentNode;
    $ && $.replaceChild(g, m);
    let U = M;
    for (; U; )
      U.vnode.el === m && (U.vnode.el = U.subTree.el = g), U = U.parent;
  }, q = (g) => g.nodeType === 1 && g.tagName === "TEMPLATE";
  return [u, d];
}
const Is = "data-allow-mismatch", Bo = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function nn(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Is); )
      e = e.parentElement;
  const n = e && e.getAttribute(Is);
  if (n == null)
    return !1;
  if (n === "")
    return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(Bo[t]);
  }
}
bn().requestIdleCallback;
bn().cancelIdleCallback;
const vt = (e) => !!e.type.__asyncLoader, Sn = (e) => e.type.__isKeepAlive;
function Uo(e, t) {
  qr(e, "a", t);
}
function Ko(e, t) {
  qr(e, "da", t);
}
function qr(e, t, n = pe) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Tn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Sn(r.parent.vnode) && Wo(s, t, n, r), r = r.parent;
  }
}
function Wo(e, t, n, s) {
  const r = Tn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Xr(() => {
    ns(s[t], r);
  }, n);
}
function Tn(e, t, n = pe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      We();
      const l = qt(n), f = Re(t, n, e, o);
      return l(), ke(), f;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const Je = (e) => (t, n = pe) => {
  (!Ut || e === "sp") && Tn(e, (...s) => t(...s), n);
}, ko = Je("bm"), Jr = Je("m"), Go = Je(
  "bu"
), qo = Je("u"), Yr = Je(
  "bum"
), Xr = Je("um"), Jo = Je(
  "sp"
), Yo = Je("rtg"), Xo = Je("rtc");
function Qo(e, t = pe) {
  Tn("ec", e, t);
}
const Zo = /* @__PURE__ */ Symbol.for("v-ndc");
function Ic(e, t, n, s) {
  let r;
  const i = n, o = N(e);
  if (o || ie(e)) {
    const l = o && et(e);
    let f = !1, h = !1;
    l && (f = !Ae(e), h = Ge(e), e = xn(e)), r = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(
        f ? h ? Tt(Pe(e[u])) : Pe(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (Z(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, f) => t(l, f, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let f = 0, h = l.length; f < h; f++) {
        const u = l[f];
        r[f] = t(e[u], u, f, i);
      }
    }
  else
    r = [];
  return r;
}
const Yn = (e) => e ? Ci(e) ? wn(e) : Yn(e.parent) : null, Ft = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ le(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Yn(e.parent),
    $root: (e) => Yn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ms(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Po.bind(e.proxy)),
    $watch: (e) => ul.bind(e)
  })
), Dn = (e, t) => e !== z && !e.__isScriptSetup && X(e, t), zo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
    if (t[0] !== "$") {
      const v = o[t];
      if (v !== void 0)
        switch (v) {
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
        if (Dn(s, t))
          return o[t] = 1, s[t];
        if (r !== z && X(r, t))
          return o[t] = 2, r[t];
        if (X(i, t))
          return o[t] = 3, i[t];
        if (n !== z && X(n, t))
          return o[t] = 4, n[t];
        Xn && (o[t] = 0);
      }
    }
    const h = Ft[t];
    let u, d;
    if (h)
      return t === "$attrs" && fe(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== z && X(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = f.config.globalProperties, X(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Dn(r, t) ? (r[t] = n, !0) : s !== z && X(s, t) ? (s[t] = n, !0) : X(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let f;
    return !!(n[l] || e !== z && l[0] !== "$" && X(e, l) || Dn(t, l) || X(i, l) || X(s, l) || X(Ft, l) || X(r.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : X(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ls(e) {
  return N(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Xn = !0;
function el(e) {
  const t = Zr(e), n = e.proxy, s = e.ctx;
  Xn = !1, t.beforeCreate && Ns(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: h,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: v,
    beforeUpdate: E,
    updated: D,
    activated: B,
    deactivated: se,
    beforeDestroy: W,
    beforeUnmount: q,
    destroyed: g,
    unmounted: m,
    render: M,
    renderTracked: $,
    renderTriggered: U,
    errorCaptured: k,
    serverPrefetch: P,
    // public API
    expose: O,
    inheritAttrs: K,
    // assets
    components: T,
    directives: V,
    filters: ne
  } = t;
  if (h && tl(h, s, null), o)
    for (const G in o) {
      const R = o[G];
      j(R) && (s[G] = R.bind(n));
    }
  if (r) {
    const G = r.call(n, n);
    Z(G) && (e.data = ds(G));
  }
  if (Xn = !0, i)
    for (const G in i) {
      const R = i[G], re = j(R) ? R.bind(n, n) : j(R.get) ? R.get.bind(n, n) : De, Jt = !j(R) && j(R.set) ? R.set.bind(n) : De, st = $l({
        get: re,
        set: Jt
      });
      Object.defineProperty(s, G, {
        enumerable: !0,
        configurable: !0,
        get: () => st.value,
        set: (Fe) => st.value = Fe
      });
    }
  if (l)
    for (const G in l)
      Qr(l[G], s, n, G);
  if (f) {
    const G = j(f) ? f.call(n) : f;
    Reflect.ownKeys(G).forEach((R) => {
      ll(R, G[R]);
    });
  }
  u && Ns(u, e, "c");
  function I(G, R) {
    N(R) ? R.forEach((re) => G(re.bind(n))) : R && G(R.bind(n));
  }
  if (I(ko, d), I(Jr, v), I(Go, E), I(qo, D), I(Uo, B), I(Ko, se), I(Qo, k), I(Xo, $), I(Yo, U), I(Yr, q), I(Xr, m), I(Jo, P), N(O))
    if (O.length) {
      const G = e.exposed || (e.exposed = {});
      O.forEach((R) => {
        Object.defineProperty(G, R, {
          get: () => n[R],
          set: (re) => n[R] = re,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === De && (e.render = M), K != null && (e.inheritAttrs = K), T && (e.components = T), V && (e.directives = V), P && Gr(e);
}
function tl(e, t, n = De) {
  N(e) && (e = Qn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    Z(r) ? "default" in r ? i = rn(
      r.from || s,
      r.default,
      !0
    ) : i = rn(r.from || s) : i = rn(r), ae(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i;
  }
}
function Ns(e, t, n) {
  Re(
    N(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Qr(e, t, n, s) {
  let r = s.includes(".") ? ti(n, s) : () => n[s];
  if (ie(e)) {
    const i = t[e];
    j(i) && Hn(r, i);
  } else if (j(e))
    Hn(r, e.bind(n));
  else if (Z(e))
    if (N(e))
      e.forEach((i) => Qr(i, t, n, s));
    else {
      const i = j(e.handler) ? e.handler.bind(n) : t[e.handler];
      j(i) && Hn(r, i, e);
    }
}
function Zr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !n && !s ? f = t : (f = {}, r.length && r.forEach(
    (h) => pn(f, h, o, !0)
  ), pn(f, t, o)), Z(t) && i.set(t, f), f;
}
function pn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && pn(e, i, n, !0), r && r.forEach(
    (o) => pn(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = nl[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const nl = {
  data: Ds,
  props: Hs,
  emits: Hs,
  // objects
  methods: Ot,
  computed: Ot,
  // lifecycle
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  // assets
  components: Ot,
  directives: Ot,
  // watch
  watch: rl,
  // provide / inject
  provide: Ds,
  inject: sl
};
function Ds(e, t) {
  return t ? e ? function() {
    return le(
      j(e) ? e.call(this, this) : e,
      j(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function sl(e, t) {
  return Ot(Qn(e), Qn(t));
}
function Qn(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ot(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Hs(e, t) {
  return e ? N(e) && N(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    Ls(e),
    Ls(t ?? {})
  ) : t;
}
function rl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = he(e[s], t[s]);
  return n;
}
function zr() {
  return {
    app: null,
    config: {
      isNativeTag: ar,
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
let il = 0;
function ol(e, t) {
  return function(s, r = null) {
    j(s) || (s = le({}, s)), r != null && !Z(r) && (r = null);
    const i = zr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const h = i.app = {
      _uid: il++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Vl,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return o.has(u) || (u && j(u.install) ? (o.add(u), u.install(h, ...d)) : j(u) && (o.add(u), u(h, ...d))), h;
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), h;
      },
      component(u, d) {
        return d ? (i.components[u] = d, h) : i.components[u];
      },
      directive(u, d) {
        return d ? (i.directives[u] = d, h) : i.directives[u];
      },
      mount(u, d, v) {
        if (!f) {
          const E = h._ceVNode || ge(s, r);
          return E.appContext = i, v === !0 ? v = "svg" : v === !1 && (v = void 0), d && t ? t(E, u) : e(E, u, v), f = !0, h._container = u, u.__vue_app__ = h, wn(E.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        f && (Re(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(u, d) {
        return i.provides[u] = d, h;
      },
      runWithContext(u) {
        const d = St;
        St = h;
        try {
          return u();
        } finally {
          St = d;
        }
      }
    };
    return h;
  };
}
let St = null;
function ll(e, t) {
  if (pe) {
    let n = pe.provides;
    const s = pe.parent && pe.parent.provides;
    s === n && (n = pe.provides = Object.create(s)), n[e] = t;
  }
}
function rn(e, t, n = !1) {
  const s = Ti();
  if (s || St) {
    let r = St ? St._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && j(t) ? t.call(s && s.proxy) : t;
  }
}
const cl = /* @__PURE__ */ Symbol.for("v-scx"), fl = () => rn(cl);
function Hn(e, t, n) {
  return ei(e, t, n);
}
function ei(e, t, n = z) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = le({}, n), f = t && s || !t && i !== "post";
  let h;
  if (Ut) {
    if (i === "sync") {
      const E = fl();
      h = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!f) {
      const E = () => {
      };
      return E.stop = De, E.resume = De, E.pause = De, E;
    }
  }
  const u = pe;
  l.call = (E, D, B) => Re(E, u, D, B);
  let d = !1;
  i === "post" ? l.scheduler = (E) => {
    xe(E, u && u.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (E, D) => {
    D ? E() : ms(E);
  }), l.augmentJob = (E) => {
    t && (E.flags |= 4), d && (E.flags |= 2, u && (E.id = u.uid, E.i = u));
  };
  const v = Mo(e, t, l);
  return Ut && (h ? h.push(v) : f && v()), v;
}
function ul(e, t, n) {
  const s = this.proxy, r = ie(e) ? e.includes(".") ? ti(s, e) : () => s[e] : e.bind(s, s);
  let i;
  j(t) ? i = t : (i = t.handler, n = t);
  const o = qt(this), l = ei(r, i.bind(s), n);
  return o(), l;
}
function ti(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const al = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${tt(t)}Modifiers`] || e[`${qe(t)}Modifiers`];
function hl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || z;
  let r = n;
  const i = t.startsWith("update:"), o = i && al(s, t.slice(7));
  o && (o.trim && (r = n.map((u) => ie(u) ? u.trim() : u)), o.number && (r = n.map(is)));
  let l, f = s[l = On(t)] || // also try camelCase event handler (#2249)
  s[l = On(tt(t))];
  !f && i && (f = s[l = On(qe(t))]), f && Re(
    f,
    e,
    6,
    r
  );
  const h = s[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Re(
      h,
      e,
      6,
      r
    );
  }
}
const dl = /* @__PURE__ */ new WeakMap();
function ni(e, t, n = !1) {
  const s = n ? dl : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!j(e)) {
    const f = (h) => {
      const u = ni(h, t, !0);
      u && (l = !0, le(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (Z(e) && s.set(e, null), null) : (N(i) ? i.forEach((f) => o[f] = null) : le(o, i), Z(e) && s.set(e, o), o);
}
function Cn(e, t) {
  return !e || !Wt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), X(e, t[0].toLowerCase() + t.slice(1)) || X(e, qe(t)) || X(e, t));
}
function on(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: f,
    render: h,
    renderCache: u,
    props: d,
    data: v,
    setupState: E,
    ctx: D,
    inheritAttrs: B
  } = e, se = $t(e);
  let W, q;
  try {
    if (n.shapeFlag & 4) {
      const m = r || s, M = m;
      W = ve(
        h.call(
          M,
          m,
          u,
          d,
          E,
          v,
          D
        )
      ), q = l;
    } else {
      const m = t;
      W = ve(
        m.length > 1 ? m(
          d,
          { attrs: l, slots: o, emit: f }
        ) : m(
          d,
          null
        )
      ), q = t.props ? l : pl(l);
    }
  } catch (m) {
    It.length = 0, vn(m, e, 1), W = ge(ue);
  }
  let g = W;
  if (q && B !== !1) {
    const m = Object.keys(q), { shapeFlag: M } = g;
    m.length && M & 7 && (i && m.some(ts) && (q = gl(
      q,
      i
    )), g = nt(g, q, !1, !0));
  }
  return n.dirs && (g = nt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && jt(g, n.transition), W = g, $t(se), W;
}
const pl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Wt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, gl = (e, t) => {
  const n = {};
  for (const s in e)
    (!ts(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function ml(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return s ? $s(s, o, h) : !!o;
    if (f & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const v = u[d];
        if (o[v] !== s[v] && !Cn(h, v))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? $s(s, o, h) : !0 : !!o;
  return !1;
}
function $s(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !Cn(n, i))
      return !0;
  }
  return !1;
}
function si({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ri = {}, ii = () => Object.create(ri), oi = (e) => Object.getPrototypeOf(e) === ri;
function _l(e, t, n, s = !1) {
  const r = {}, i = ii();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), li(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : yo(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function bl(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = Y(r), [f] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let v = u[d];
        if (Cn(e.emitsOptions, v))
          continue;
        const E = t[v];
        if (f)
          if (X(i, v))
            E !== i[v] && (i[v] = E, h = !0);
          else {
            const D = tt(v);
            r[D] = Zn(
              f,
              l,
              D,
              E,
              e,
              !1
            );
          }
        else
          E !== i[v] && (i[v] = E, h = !0);
      }
    }
  } else {
    li(e, t, r, i) && (h = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !X(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = qe(d)) === d || !X(t, u))) && (f ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = Zn(
        f,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (i !== l)
      for (const d in i)
        (!t || !X(t, d)) && (delete i[d], h = !0);
  }
  h && Ue(e.attrs, "set", "");
}
function li(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (bt(f))
        continue;
      const h = t[f];
      let u;
      r && X(r, u = tt(f)) ? !i || !i.includes(u) ? n[u] = h : (l || (l = {}))[u] = h : Cn(e.emitsOptions, f) || (!(f in s) || h !== s[f]) && (s[f] = h, o = !0);
    }
  if (i) {
    const f = Y(n), h = l || z;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = Zn(
        r,
        f,
        d,
        h[d],
        e,
        !X(h, d)
      );
    }
  }
  return o;
}
function Zn(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = X(o, "default");
    if (l && s === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && j(f)) {
        const { propsDefaults: h } = r;
        if (n in h)
          s = h[n];
        else {
          const u = qt(r);
          s = h[n] = f.call(
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
    ] && (s === "" || s === qe(n)) && (s = !0));
  }
  return s;
}
const yl = /* @__PURE__ */ new WeakMap();
function ci(e, t, n = !1) {
  const s = n ? yl : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!j(e)) {
    const u = (d) => {
      f = !0;
      const [v, E] = ci(d, t, !0);
      le(o, v), E && l.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !f)
    return Z(e) && s.set(e, mt), mt;
  if (N(i))
    for (let u = 0; u < i.length; u++) {
      const d = tt(i[u]);
      js(d) && (o[d] = z);
    }
  else if (i)
    for (const u in i) {
      const d = tt(u);
      if (js(d)) {
        const v = i[u], E = o[d] = N(v) || j(v) ? { type: v } : le({}, v), D = E.type;
        let B = !1, se = !0;
        if (N(D))
          for (let W = 0; W < D.length; ++W) {
            const q = D[W], g = j(q) && q.name;
            if (g === "Boolean") {
              B = !0;
              break;
            } else g === "String" && (se = !1);
          }
        else
          B = j(D) && D.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = B, E[
          1
          /* shouldCastTrue */
        ] = se, (B || X(E, "default")) && l.push(d);
      }
    }
  const h = [o, l];
  return Z(e) && s.set(e, h), h;
}
function js(e) {
  return e[0] !== "$" && !bt(e);
}
const _s = (e) => e === "_" || e === "_ctx" || e === "$stable", bs = (e) => N(e) ? e.map(ve) : [ve(e)], xl = (e, t, n) => {
  if (t._n)
    return t;
  const s = Io((...r) => bs(t(...r)), n);
  return s._c = !1, s;
}, fi = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (_s(r)) continue;
    const i = e[r];
    if (j(i))
      t[r] = xl(r, i, s);
    else if (i != null) {
      const o = bs(i);
      t[r] = () => o;
    }
  }
}, ui = (e, t) => {
  const n = bs(t);
  e.slots.default = () => n;
}, ai = (e, t, n) => {
  for (const s in t)
    (n || !_s(s)) && (e[s] = t[s]);
}, vl = (e, t, n) => {
  const s = e.slots = ii();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (ai(s, t, n), n && mr(s, "_", r, !0)) : fi(t, s);
  } else t && ui(e, t);
}, Sl = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = z;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : ai(r, t, n) : (i = !t.$stable, fi(t, r)), o = t;
  } else t && (ui(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !_s(l) && o[l] == null && delete r[l];
}, xe = _i;
function Tl(e) {
  return hi(e);
}
function Cl(e) {
  return hi(e, Vo);
}
function hi(e, t) {
  const n = bn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: h,
    setElementText: u,
    parentNode: d,
    nextSibling: v,
    setScopeId: E = De,
    insertStaticContent: D
  } = e, B = (c, a, p, x = null, _ = null, b = null, w = void 0, C = null, S = !!a.dynamicChildren) => {
    if (c === a)
      return;
    c && !ct(c, a) && (x = Yt(c), Fe(c, _, b, !0), c = null), a.patchFlag === -2 && (S = !1, a.dynamicChildren = null);
    const { type: y, ref: L, shapeFlag: A } = a;
    switch (y) {
      case ut:
        se(c, a, p, x);
        break;
      case ue:
        W(c, a, p, x);
        break;
      case ln:
        c == null && q(a, p, x, w);
        break;
      case we:
        T(
          c,
          a,
          p,
          x,
          _,
          b,
          w,
          C,
          S
        );
        break;
      default:
        A & 1 ? M(
          c,
          a,
          p,
          x,
          _,
          b,
          w,
          C,
          S
        ) : A & 6 ? V(
          c,
          a,
          p,
          x,
          _,
          b,
          w,
          C,
          S
        ) : (A & 64 || A & 128) && y.process(
          c,
          a,
          p,
          x,
          _,
          b,
          w,
          C,
          S,
          at
        );
    }
    L != null && _ ? xt(L, c && c.ref, b, a || c, !a) : L == null && c && c.ref != null && xt(c.ref, null, b, c, !0);
  }, se = (c, a, p, x) => {
    if (c == null)
      s(
        a.el = l(a.children),
        p,
        x
      );
    else {
      const _ = a.el = c.el;
      a.children !== c.children && h(_, a.children);
    }
  }, W = (c, a, p, x) => {
    c == null ? s(
      a.el = f(a.children || ""),
      p,
      x
    ) : a.el = c.el;
  }, q = (c, a, p, x) => {
    [c.el, c.anchor] = D(
      c.children,
      a,
      p,
      x,
      c.el,
      c.anchor
    );
  }, g = ({ el: c, anchor: a }, p, x) => {
    let _;
    for (; c && c !== a; )
      _ = v(c), s(c, p, x), c = _;
    s(a, p, x);
  }, m = ({ el: c, anchor: a }) => {
    let p;
    for (; c && c !== a; )
      p = v(c), r(c), c = p;
    r(a);
  }, M = (c, a, p, x, _, b, w, C, S) => {
    if (a.type === "svg" ? w = "svg" : a.type === "math" && (w = "mathml"), c == null)
      $(
        a,
        p,
        x,
        _,
        b,
        w,
        C,
        S
      );
    else {
      const y = c.el && c.el._isVueCE ? c.el : null;
      try {
        y && y._beginPatch(), P(
          c,
          a,
          _,
          b,
          w,
          C,
          S
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, $ = (c, a, p, x, _, b, w, C) => {
    let S, y;
    const { props: L, shapeFlag: A, transition: F, dirs: H } = c;
    if (S = c.el = o(
      c.type,
      b,
      L && L.is,
      L
    ), A & 8 ? u(S, c.children) : A & 16 && k(
      c.children,
      S,
      null,
      x,
      _,
      $n(c, b),
      w,
      C
    ), H && Ne(c, null, x, "created"), U(S, c, c.scopeId, w, x), L) {
      for (const ee in L)
        ee !== "value" && !bt(ee) && i(S, ee, null, L[ee], b, x);
      "value" in L && i(S, "value", null, L.value, b), (y = L.onVnodeBeforeMount) && Ce(y, x, c);
    }
    H && Ne(c, null, x, "beforeMount");
    const J = di(_, F);
    J && F.beforeEnter(S), s(S, a, p), ((y = L && L.onVnodeMounted) || J || H) && xe(() => {
      y && Ce(y, x, c), J && F.enter(S), H && Ne(c, null, x, "mounted");
    }, _);
  }, U = (c, a, p, x, _) => {
    if (p && E(c, p), x)
      for (let b = 0; b < x.length; b++)
        E(c, x[b]);
    if (_) {
      let b = _.subTree;
      if (a === b || mi(b.type) && (b.ssContent === a || b.ssFallback === a)) {
        const w = _.vnode;
        U(
          c,
          w,
          w.scopeId,
          w.slotScopeIds,
          _.parent
        );
      }
    }
  }, k = (c, a, p, x, _, b, w, C, S = 0) => {
    for (let y = S; y < c.length; y++) {
      const L = c[y] = C ? Ze(c[y]) : ve(c[y]);
      B(
        null,
        L,
        a,
        p,
        x,
        _,
        b,
        w,
        C
      );
    }
  }, P = (c, a, p, x, _, b, w) => {
    const C = a.el = c.el;
    let { patchFlag: S, dynamicChildren: y, dirs: L } = a;
    S |= c.patchFlag & 16;
    const A = c.props || z, F = a.props || z;
    let H;
    if (p && rt(p, !1), (H = F.onVnodeBeforeUpdate) && Ce(H, p, a, c), L && Ne(a, c, p, "beforeUpdate"), p && rt(p, !0), (A.innerHTML && F.innerHTML == null || A.textContent && F.textContent == null) && u(C, ""), y ? O(
      c.dynamicChildren,
      y,
      C,
      p,
      x,
      $n(a, _),
      b
    ) : w || R(
      c,
      a,
      C,
      null,
      p,
      x,
      $n(a, _),
      b,
      !1
    ), S > 0) {
      if (S & 16)
        K(C, A, F, p, _);
      else if (S & 2 && A.class !== F.class && i(C, "class", null, F.class, _), S & 4 && i(C, "style", A.style, F.style, _), S & 8) {
        const J = a.dynamicProps;
        for (let ee = 0; ee < J.length; ee++) {
          const Q = J[ee], me = A[Q], ce = F[Q];
          (ce !== me || Q === "value") && i(C, Q, me, ce, _, p);
        }
      }
      S & 1 && c.children !== a.children && u(C, a.children);
    } else !w && y == null && K(C, A, F, p, _);
    ((H = F.onVnodeUpdated) || L) && xe(() => {
      H && Ce(H, p, a, c), L && Ne(a, c, p, "updated");
    }, x);
  }, O = (c, a, p, x, _, b, w) => {
    for (let C = 0; C < a.length; C++) {
      const S = c[C], y = a[C], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ct(S, y) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? d(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      B(
        S,
        y,
        L,
        null,
        x,
        _,
        b,
        w,
        !0
      );
    }
  }, K = (c, a, p, x, _) => {
    if (a !== p) {
      if (a !== z)
        for (const b in a)
          !bt(b) && !(b in p) && i(
            c,
            b,
            a[b],
            null,
            _,
            x
          );
      for (const b in p) {
        if (bt(b)) continue;
        const w = p[b], C = a[b];
        w !== C && b !== "value" && i(c, b, C, w, _, x);
      }
      "value" in p && i(c, "value", a.value, p.value, _);
    }
  }, T = (c, a, p, x, _, b, w, C, S) => {
    const y = a.el = c ? c.el : l(""), L = a.anchor = c ? c.anchor : l("");
    let { patchFlag: A, dynamicChildren: F, slotScopeIds: H } = a;
    H && (C = C ? C.concat(H) : H), c == null ? (s(y, p, x), s(L, p, x), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      a.children || [],
      p,
      L,
      _,
      b,
      w,
      C,
      S
    )) : A > 0 && A & 64 && F && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (O(
      c.dynamicChildren,
      F,
      p,
      _,
      b,
      w,
      C
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (a.key != null || _ && a === _.subTree) && pi(
      c,
      a,
      !0
      /* shallow */
    )) : R(
      c,
      a,
      p,
      L,
      _,
      b,
      w,
      C,
      S
    );
  }, V = (c, a, p, x, _, b, w, C, S) => {
    a.slotScopeIds = C, c == null ? a.shapeFlag & 512 ? _.ctx.activate(
      a,
      p,
      x,
      w,
      S
    ) : ne(
      a,
      p,
      x,
      _,
      b,
      w,
      S
    ) : oe(c, a, S);
  }, ne = (c, a, p, x, _, b, w) => {
    const C = c.component = Si(
      c,
      x,
      _
    );
    if (Sn(c) && (C.ctx.renderer = at), wi(C, !1, w), C.asyncDep) {
      if (_ && _.registerDep(C, I, w), !c.el) {
        const S = C.subTree = ge(ue);
        W(null, S, a, p), c.placeholder = S.el;
      }
    } else
      I(
        C,
        c,
        a,
        p,
        _,
        b,
        w
      );
  }, oe = (c, a, p) => {
    const x = a.component = c.component;
    if (ml(c, a, p))
      if (x.asyncDep && !x.asyncResolved) {
        G(x, a, p);
        return;
      } else
        x.next = a, x.update();
    else
      a.el = c.el, x.vnode = a;
  }, I = (c, a, p, x, _, b, w) => {
    const C = () => {
      if (c.isMounted) {
        let { next: A, bu: F, u: H, parent: J, vnode: ee } = c;
        {
          const be = gi(c);
          if (be) {
            A && (A.el = ee.el, G(c, A, w)), be.asyncDep.then(() => {
              c.isUnmounted || C();
            });
            return;
          }
        }
        let Q = A, me;
        rt(c, !1), A ? (A.el = ee.el, G(c, A, w)) : A = ee, F && sn(F), (me = A.props && A.props.onVnodeBeforeUpdate) && Ce(me, J, A, ee), rt(c, !0);
        const ce = on(c), Me = c.subTree;
        c.subTree = ce, B(
          Me,
          ce,
          // parent may have changed if it's in a teleport
          d(Me.el),
          // anchor may have changed if it's in a fragment
          Yt(Me),
          c,
          _,
          b
        ), A.el = ce.el, Q === null && si(c, ce.el), H && xe(H, _), (me = A.props && A.props.onVnodeUpdated) && xe(
          () => Ce(me, J, A, ee),
          _
        );
      } else {
        let A;
        const { el: F, props: H } = a, { bm: J, m: ee, parent: Q, root: me, type: ce } = c, Me = vt(a);
        if (rt(c, !1), J && sn(J), !Me && (A = H && H.onVnodeBeforeMount) && Ce(A, Q, a), rt(c, !0), F && Mn) {
          const be = () => {
            c.subTree = on(c), Mn(
              F,
              c.subTree,
              c,
              _,
              null
            );
          };
          Me && ce.__asyncHydrate ? ce.__asyncHydrate(
            F,
            c,
            be
          ) : be();
        } else {
          me.ce && // @ts-expect-error _def is private
          me.ce._def.shadowRoot !== !1 && me.ce._injectChildStyle(ce);
          const be = c.subTree = on(c);
          B(
            null,
            be,
            p,
            x,
            c,
            _,
            b
          ), a.el = be.el;
        }
        if (ee && xe(ee, _), !Me && (A = H && H.onVnodeMounted)) {
          const be = a;
          xe(
            () => Ce(A, Q, be),
            _
          );
        }
        (a.shapeFlag & 256 || Q && vt(Q.vnode) && Q.vnode.shapeFlag & 256) && c.a && xe(c.a, _), c.isMounted = !0, a = p = x = null;
      }
    };
    c.scope.on();
    const S = c.effect = new vr(C);
    c.scope.off();
    const y = c.update = S.run.bind(S), L = c.job = S.runIfDirty.bind(S);
    L.i = c, L.id = c.uid, S.scheduler = () => ms(L), rt(c, !0), y();
  }, G = (c, a, p) => {
    a.component = c;
    const x = c.vnode.props;
    c.vnode = a, c.next = null, bl(c, a.props, x, p), Sl(c, a.children, p), We(), Os(c), ke();
  }, R = (c, a, p, x, _, b, w, C, S = !1) => {
    const y = c && c.children, L = c ? c.shapeFlag : 0, A = a.children, { patchFlag: F, shapeFlag: H } = a;
    if (F > 0) {
      if (F & 128) {
        Jt(
          y,
          A,
          p,
          x,
          _,
          b,
          w,
          C,
          S
        );
        return;
      } else if (F & 256) {
        re(
          y,
          A,
          p,
          x,
          _,
          b,
          w,
          C,
          S
        );
        return;
      }
    }
    H & 8 ? (L & 16 && wt(y, _, b), A !== y && u(p, A)) : L & 16 ? H & 16 ? Jt(
      y,
      A,
      p,
      x,
      _,
      b,
      w,
      C,
      S
    ) : wt(y, _, b, !0) : (L & 8 && u(p, ""), H & 16 && k(
      A,
      p,
      x,
      _,
      b,
      w,
      C,
      S
    ));
  }, re = (c, a, p, x, _, b, w, C, S) => {
    c = c || mt, a = a || mt;
    const y = c.length, L = a.length, A = Math.min(y, L);
    let F;
    for (F = 0; F < A; F++) {
      const H = a[F] = S ? Ze(a[F]) : ve(a[F]);
      B(
        c[F],
        H,
        p,
        null,
        _,
        b,
        w,
        C,
        S
      );
    }
    y > L ? wt(
      c,
      _,
      b,
      !0,
      !1,
      A
    ) : k(
      a,
      p,
      x,
      _,
      b,
      w,
      C,
      S,
      A
    );
  }, Jt = (c, a, p, x, _, b, w, C, S) => {
    let y = 0;
    const L = a.length;
    let A = c.length - 1, F = L - 1;
    for (; y <= A && y <= F; ) {
      const H = c[y], J = a[y] = S ? Ze(a[y]) : ve(a[y]);
      if (ct(H, J))
        B(
          H,
          J,
          p,
          null,
          _,
          b,
          w,
          C,
          S
        );
      else
        break;
      y++;
    }
    for (; y <= A && y <= F; ) {
      const H = c[A], J = a[F] = S ? Ze(a[F]) : ve(a[F]);
      if (ct(H, J))
        B(
          H,
          J,
          p,
          null,
          _,
          b,
          w,
          C,
          S
        );
      else
        break;
      A--, F--;
    }
    if (y > A) {
      if (y <= F) {
        const H = F + 1, J = H < L ? a[H].el : x;
        for (; y <= F; )
          B(
            null,
            a[y] = S ? Ze(a[y]) : ve(a[y]),
            p,
            J,
            _,
            b,
            w,
            C,
            S
          ), y++;
      }
    } else if (y > F)
      for (; y <= A; )
        Fe(c[y], _, b, !0), y++;
    else {
      const H = y, J = y, ee = /* @__PURE__ */ new Map();
      for (y = J; y <= F; y++) {
        const ye = a[y] = S ? Ze(a[y]) : ve(a[y]);
        ye.key != null && ee.set(ye.key, y);
      }
      let Q, me = 0;
      const ce = F - J + 1;
      let Me = !1, be = 0;
      const Et = new Array(ce);
      for (y = 0; y < ce; y++) Et[y] = 0;
      for (y = H; y <= A; y++) {
        const ye = c[y];
        if (me >= ce) {
          Fe(ye, _, b, !0);
          continue;
        }
        let Ie;
        if (ye.key != null)
          Ie = ee.get(ye.key);
        else
          for (Q = J; Q <= F; Q++)
            if (Et[Q - J] === 0 && ct(ye, a[Q])) {
              Ie = Q;
              break;
            }
        Ie === void 0 ? Fe(ye, _, b, !0) : (Et[Ie - J] = y + 1, Ie >= be ? be = Ie : Me = !0, B(
          ye,
          a[Ie],
          p,
          null,
          _,
          b,
          w,
          C,
          S
        ), me++);
      }
      const Ss = Me ? wl(Et) : mt;
      for (Q = Ss.length - 1, y = ce - 1; y >= 0; y--) {
        const ye = J + y, Ie = a[ye], Ts = a[ye + 1], Cs = ye + 1 < L ? (
          // #13559, fallback to el placeholder for unresolved async component
          Ts.el || Ts.placeholder
        ) : x;
        Et[y] === 0 ? B(
          null,
          Ie,
          p,
          Cs,
          _,
          b,
          w,
          C,
          S
        ) : Me && (Q < 0 || y !== Ss[Q] ? st(Ie, p, Cs, 2) : Q--);
      }
    }
  }, st = (c, a, p, x, _ = null) => {
    const { el: b, type: w, transition: C, children: S, shapeFlag: y } = c;
    if (y & 6) {
      st(c.component.subTree, a, p, x);
      return;
    }
    if (y & 128) {
      c.suspense.move(a, p, x);
      return;
    }
    if (y & 64) {
      w.move(c, a, p, at);
      return;
    }
    if (w === we) {
      s(b, a, p);
      for (let A = 0; A < S.length; A++)
        st(S[A], a, p, x);
      s(c.anchor, a, p);
      return;
    }
    if (w === ln) {
      g(c, a, p);
      return;
    }
    if (x !== 2 && y & 1 && C)
      if (x === 0)
        C.beforeEnter(b), s(b, a, p), xe(() => C.enter(b), _);
      else {
        const { leave: A, delayLeave: F, afterLeave: H } = C, J = () => {
          c.ctx.isUnmounted ? r(b) : s(b, a, p);
        }, ee = () => {
          b._isLeaving && b[Be](
            !0
            /* cancelled */
          ), A(b, () => {
            J(), H && H();
          });
        };
        F ? F(b, J, ee) : ee();
      }
    else
      s(b, a, p);
  }, Fe = (c, a, p, x = !1, _ = !1) => {
    const {
      type: b,
      props: w,
      ref: C,
      children: S,
      dynamicChildren: y,
      shapeFlag: L,
      patchFlag: A,
      dirs: F,
      cacheIndex: H
    } = c;
    if (A === -2 && (_ = !1), C != null && (We(), xt(C, null, p, c, !0), ke()), H != null && (a.renderCache[H] = void 0), L & 256) {
      a.ctx.deactivate(c);
      return;
    }
    const J = L & 1 && F, ee = !vt(c);
    let Q;
    if (ee && (Q = w && w.onVnodeBeforeUnmount) && Ce(Q, a, c), L & 6)
      Ii(c.component, p, x);
    else {
      if (L & 128) {
        c.suspense.unmount(p, x);
        return;
      }
      J && Ne(c, null, a, "beforeUnmount"), L & 64 ? c.type.remove(
        c,
        a,
        p,
        at,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== we || A > 0 && A & 64) ? wt(
        y,
        a,
        p,
        !1,
        !0
      ) : (b === we && A & 384 || !_ && L & 16) && wt(S, a, p), x && xs(c);
    }
    (ee && (Q = w && w.onVnodeUnmounted) || J) && xe(() => {
      Q && Ce(Q, a, c), J && Ne(c, null, a, "unmounted");
    }, p);
  }, xs = (c) => {
    const { type: a, el: p, anchor: x, transition: _ } = c;
    if (a === we) {
      Fi(p, x);
      return;
    }
    if (a === ln) {
      m(c);
      return;
    }
    const b = () => {
      r(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: w, delayLeave: C } = _, S = () => w(p, b);
      C ? C(c.el, b, S) : S();
    } else
      b();
  }, Fi = (c, a) => {
    let p;
    for (; c !== a; )
      p = v(c), r(c), c = p;
    r(a);
  }, Ii = (c, a, p) => {
    const { bum: x, scope: _, job: b, subTree: w, um: C, m: S, a: y } = c;
    Vs(S), Vs(y), x && sn(x), _.stop(), b && (b.flags |= 8, Fe(w, c, a, p)), C && xe(C, a), xe(() => {
      c.isUnmounted = !0;
    }, a);
  }, wt = (c, a, p, x = !1, _ = !1, b = 0) => {
    for (let w = b; w < c.length; w++)
      Fe(c[w], a, p, x, _);
  }, Yt = (c) => {
    if (c.shapeFlag & 6)
      return Yt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const a = v(c.anchor || c.el), p = a && a[Lo];
    return p ? v(p) : a;
  };
  let En = !1;
  const vs = (c, a, p) => {
    c == null ? a._vnode && Fe(a._vnode, null, null, !0) : B(
      a._vnode || null,
      c,
      a,
      null,
      null,
      null,
      p
    ), a._vnode = c, En || (En = !0, Os(), hn(), En = !1);
  }, at = {
    p: B,
    um: Fe,
    m: st,
    r: xs,
    mt: ne,
    mc: k,
    pc: R,
    pbc: O,
    n: Yt,
    o: e
  };
  let An, Mn;
  return t && ([An, Mn] = t(
    at
  )), {
    render: vs,
    hydrate: An,
    createApp: ol(vs, An)
  };
}
function $n({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function rt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function di(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function pi(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (N(s) && N(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Ze(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && pi(o, l)), l.type === ut && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = o.el), l.type === ue && !l.el && (l.el = o.el);
    }
}
function wl(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const h = e[s];
    if (h !== 0) {
      if (r = n[n.length - 1], e[r] < h) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < h ? i = l + 1 : o = l;
      h < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function gi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : gi(t);
}
function Vs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const mi = (e) => e.__isSuspense;
function _i(e, t) {
  t && t.pendingBranch ? N(e) ? t.effects.push(...e) : t.effects.push(e) : Fo(e);
}
const we = /* @__PURE__ */ Symbol.for("v-fgt"), ut = /* @__PURE__ */ Symbol.for("v-txt"), ue = /* @__PURE__ */ Symbol.for("v-cmt"), ln = /* @__PURE__ */ Symbol.for("v-stc"), It = [];
let Se = null;
function El(e = !1) {
  It.push(Se = e ? null : []);
}
function Al() {
  It.pop(), Se = It[It.length - 1] || null;
}
let Vt = 1;
function gn(e, t = !1) {
  Vt += e, e < 0 && Se && t && (Se.hasOnce = !0);
}
function bi(e) {
  return e.dynamicChildren = Vt > 0 ? Se || mt : null, Al(), Vt > 0 && Se && Se.push(e), e;
}
function Lc(e, t, n, s, r, i) {
  return bi(
    xi(
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
function Ml(e, t, n, s, r) {
  return bi(
    ge(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Bt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const yi = ({ key: e }) => e ?? null, cn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || ae(e) || j(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function xi(e, t = null, n = null, s = 0, r = null, i = e === we ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yi(t),
    ref: t && cn(t),
    scopeId: jr,
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
    ctx: Ee
  };
  return l ? (ys(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= ie(n) ? 8 : 16), Vt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Se && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Se.push(f), f;
}
const ge = Ol;
function Ol(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === Zo) && (e = ue), Bt(e)) {
    const l = nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ys(l, n), Vt > 0 && !i && Se && (l.shapeFlag & 6 ? Se[Se.indexOf(e)] = l : Se.push(l)), l.patchFlag = -2, l;
  }
  if (Hl(e) && (e = e.__vccOpts), t) {
    t = Pl(t);
    let { class: l, style: f } = t;
    l && !ie(l) && (t.class = ls(l)), Z(f) && (gs(f) && !N(f) && (f = le({}, f)), t.style = os(f));
  }
  const o = ie(e) ? 1 : mi(e) ? 128 : Vr(e) ? 64 : Z(e) ? 4 : j(e) ? 2 : 0;
  return xi(
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
function Pl(e) {
  return e ? gs(e) || oi(e) ? le({}, e) : e : null;
}
function nt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, h = t ? Rl(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && yi(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? N(i) ? i.concat(cn(t)) : [i, cn(t)] : cn(t)
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
    patchFlag: t && e.type !== we ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && nt(e.ssContent),
    ssFallback: e.ssFallback && nt(e.ssFallback),
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
function vi(e = " ", t = 0) {
  return ge(ut, null, e, t);
}
function Nc(e = "", t = !1) {
  return t ? (El(), Ml(ue, null, e)) : ge(ue, null, e);
}
function ve(e) {
  return e == null || typeof e == "boolean" ? ge(ue) : N(e) ? ge(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Bt(e) ? Ze(e) : ge(ut, null, String(e));
}
function Ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : nt(e);
}
function ys(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (N(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), ys(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !oi(t) ? t._ctx = Ee : r === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else j(t) ? (t = { default: t, _ctx: Ee }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [vi(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Rl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = ls([t.class, s.class]));
      else if (r === "style")
        t.style = os([t.style, s.style]);
      else if (Wt(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(N(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ce(e, t, n, s = null) {
  Re(e, t, 7, [
    n,
    s
  ]);
}
const Fl = zr();
let Il = 0;
function Si(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Fl, i = {
    uid: Il++,
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
    scope: new Zi(
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
    propsOptions: ci(s, r),
    emitsOptions: ni(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: z,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: z,
    data: z,
    props: z,
    attrs: z,
    slots: z,
    refs: z,
    setupState: z,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = hl.bind(null, i), e.ce && e.ce(i), i;
}
let pe = null;
const Ti = () => pe || Ee;
let mn, zn;
{
  const e = bn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  mn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => pe = n
  ), zn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ut = n
  );
}
const qt = (e) => {
  const t = pe;
  return mn(e), e.scope.on(), () => {
    e.scope.off(), mn(t);
  };
}, Bs = () => {
  pe && pe.scope.off(), mn(null);
};
function Ci(e) {
  return e.vnode.shapeFlag & 4;
}
let Ut = !1;
function wi(e, t = !1, n = !1) {
  t && zn(t);
  const { props: s, children: r } = e.vnode, i = Ci(e);
  _l(e, s, i, t), vl(e, r, n || t);
  const o = i ? Ll(e, t) : void 0;
  return t && zn(!1), o;
}
function Ll(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, zo);
  const { setup: s } = n;
  if (s) {
    We();
    const r = e.setupContext = s.length > 1 ? Dl(e) : null, i = qt(e), o = Gt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = hr(o);
    if (ke(), i(), (l || e.sp) && !vt(e) && Gr(e), l) {
      if (o.then(Bs, Bs), t)
        return o.then((f) => {
          Us(e, f);
        }).catch((f) => {
          vn(f, e, 0);
        });
      e.asyncDep = o;
    } else
      Us(e, o);
  } else
    Ei(e);
}
function Us(e, t, n) {
  j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) && (e.setupState = Nr(t)), Ei(e);
}
function Ei(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || De);
  {
    const r = qt(e);
    We();
    try {
      el(e);
    } finally {
      ke(), r();
    }
  }
}
const Nl = {
  get(e, t) {
    return fe(e, "get", ""), e[t];
  }
};
function Dl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Nl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function wn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Nr(xo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ft)
        return Ft[n](e);
    },
    has(t, n) {
      return n in t || n in Ft;
    }
  })) : e.proxy;
}
function Hl(e) {
  return j(e) && "__vccOpts" in e;
}
const $l = (e, t) => Eo(e, t, Ut);
function jl(e, t, n) {
  try {
    gn(-1);
    const s = arguments.length;
    return s === 2 ? Z(t) && !N(t) ? Bt(t) ? ge(e, null, [t]) : ge(e, t) : ge(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Bt(n) && (n = [n]), ge(e, t, n));
  } finally {
    gn(1);
  }
}
const Vl = "3.5.25", Bl = {
  createComponentInstance: Si,
  setupComponent: wi,
  renderComponentRoot: on,
  setCurrentRenderingInstance: $t,
  isVNode: Bt,
  normalizeVNode: ve
}, Dc = Bl;
let es;
const Ks = typeof window < "u" && window.trustedTypes;
if (Ks)
  try {
    es = /* @__PURE__ */ Ks.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ai = es ? (e) => es.createHTML(e) : (e) => e, Ul = "http://www.w3.org/2000/svg", Kl = "http://www.w3.org/1998/Math/MathML", Ve = typeof document < "u" ? document : null, Ws = Ve && /* @__PURE__ */ Ve.createElement("template"), Wl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Ve.createElementNS(Ul, e) : t === "mathml" ? Ve.createElementNS(Kl, e) : n ? Ve.createElement(e, { is: n }) : Ve.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Ve.createTextNode(e),
  createComment: (e) => Ve.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ve.querySelector(e),
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
      Ws.innerHTML = Ai(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ws.content;
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
}, Ye = "transition", Mt = "animation", Kt = /* @__PURE__ */ Symbol("_vtc"), Mi = {
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
}, kl = /* @__PURE__ */ le(
  {},
  Br,
  Mi
), Gl = (e) => (e.displayName = "Transition", e.props = kl, e), Hc = /* @__PURE__ */ Gl(
  (e, { slots: t }) => jl(Ho, ql(e), t)
), it = (e, t = []) => {
  N(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ks = (e) => e ? N(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ql(e) {
  const t = {};
  for (const T in e)
    T in Mi || (t[T] = e[T]);
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
    appearActiveClass: h = o,
    appearToClass: u = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: v = `${n}-leave-active`,
    leaveToClass: E = `${n}-leave-to`
  } = e, D = Jl(r), B = D && D[0], se = D && D[1], {
    onBeforeEnter: W,
    onEnter: q,
    onEnterCancelled: g,
    onLeave: m,
    onLeaveCancelled: M,
    onBeforeAppear: $ = W,
    onAppear: U = q,
    onAppearCancelled: k = g
  } = t, P = (T, V, ne, oe) => {
    T._enterCancelled = oe, ot(T, V ? u : l), ot(T, V ? h : o), ne && ne();
  }, O = (T, V) => {
    T._isLeaving = !1, ot(T, d), ot(T, E), ot(T, v), V && V();
  }, K = (T) => (V, ne) => {
    const oe = T ? U : q, I = () => P(V, T, ne);
    it(oe, [V, I]), Gs(() => {
      ot(V, T ? f : i), je(V, T ? u : l), ks(oe) || qs(V, s, B, I);
    });
  };
  return le(t, {
    onBeforeEnter(T) {
      it(W, [T]), je(T, i), je(T, o);
    },
    onBeforeAppear(T) {
      it($, [T]), je(T, f), je(T, h);
    },
    onEnter: K(!1),
    onAppear: K(!0),
    onLeave(T, V) {
      T._isLeaving = !0;
      const ne = () => O(T, V);
      je(T, d), T._enterCancelled ? (je(T, v), Xs(T)) : (Xs(T), je(T, v)), Gs(() => {
        T._isLeaving && (ot(T, d), je(T, E), ks(m) || qs(T, s, se, ne));
      }), it(m, [T, ne]);
    },
    onEnterCancelled(T) {
      P(T, !1, void 0, !0), it(g, [T]);
    },
    onAppearCancelled(T) {
      P(T, !0, void 0, !0), it(k, [T]);
    },
    onLeaveCancelled(T) {
      O(T), it(M, [T]);
    }
  });
}
function Jl(e) {
  if (e == null)
    return null;
  if (Z(e))
    return [jn(e.enter), jn(e.leave)];
  {
    const t = jn(e);
    return [t, t];
  }
}
function jn(e) {
  return $i(e);
}
function je(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Kt] || (e[Kt] = /* @__PURE__ */ new Set())).add(t);
}
function ot(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Kt];
  n && (n.delete(t), n.size || (e[Kt] = void 0));
}
function Gs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Yl = 0;
function qs(e, t, n, s) {
  const r = e._endId = ++Yl, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: f } = Xl(e, t);
  if (!o)
    return s();
  const h = o + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(h, v), i();
  }, v = (E) => {
    E.target === e && ++u >= f && d();
  };
  setTimeout(() => {
    u < f && d();
  }, l + 1), e.addEventListener(h, v);
}
function Xl(e, t) {
  const n = window.getComputedStyle(e), s = (D) => (n[D] || "").split(", "), r = s(`${Ye}Delay`), i = s(`${Ye}Duration`), o = Js(r, i), l = s(`${Mt}Delay`), f = s(`${Mt}Duration`), h = Js(l, f);
  let u = null, d = 0, v = 0;
  t === Ye ? o > 0 && (u = Ye, d = o, v = i.length) : t === Mt ? h > 0 && (u = Mt, d = h, v = f.length) : (d = Math.max(o, h), u = d > 0 ? o > h ? Ye : Mt : null, v = u ? u === Ye ? i.length : f.length : 0);
  const E = u === Ye && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Ye}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: v,
    hasTransform: E
  };
}
function Js(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Ys(n) + Ys(e[s])));
}
function Ys(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Xs(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ql(e, t, n) {
  const s = e[Kt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Qs = /* @__PURE__ */ Symbol("_vod"), Zl = /* @__PURE__ */ Symbol("_vsh"), zl = /* @__PURE__ */ Symbol(""), ec = /(?:^|;)\s*display\s*:/;
function tc(e, t, n) {
  const s = e.style, r = ie(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ie(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && fn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && fn(s, o, "");
    for (const o in n)
      o === "display" && (i = !0), fn(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[zl];
      o && (n += ";" + o), s.cssText = n, i = ec.test(n);
    }
  } else t && e.removeAttribute("style");
  Qs in e && (e[Qs] = i ? s.display : "", e[Zl] && (s.display = "none"));
}
const Zs = /\s*!important$/;
function fn(e, t, n) {
  if (N(n))
    n.forEach((s) => fn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = nc(e, t);
    Zs.test(n) ? e.setProperty(
      qe(s),
      n.replace(Zs, ""),
      "important"
    ) : e[s] = n;
  }
}
const zs = ["Webkit", "Moz", "ms"], Vn = {};
function nc(e, t) {
  const n = Vn[t];
  if (n)
    return n;
  let s = tt(t);
  if (s !== "filter" && s in e)
    return Vn[t] = s;
  s = gr(s);
  for (let r = 0; r < zs.length; r++) {
    const i = zs[r] + s;
    if (i in e)
      return Vn[t] = i;
  }
  return t;
}
const er = "http://www.w3.org/1999/xlink";
function tr(e, t, n, s, r, i = ki(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(er, t.slice(6, t.length)) : e.setAttributeNS(er, t, n) : n == null || i && !br(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : He(n) ? String(n) : n
  );
}
function nr(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ai(n) : n);
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
    l === "boolean" ? n = br(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function gt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function sc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const sr = /* @__PURE__ */ Symbol("_vei");
function rc(e, t, n, s, r = null) {
  const i = e[sr] || (e[sr] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, f] = ic(t);
    if (s) {
      const h = i[t] = cc(
        s,
        r
      );
      gt(e, l, h, f);
    } else o && (sc(e, l, o, f), i[t] = void 0);
  }
}
const rr = /(?:Once|Passive|Capture)$/;
function ic(e) {
  let t;
  if (rr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(rr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : qe(e.slice(2)), t];
}
let Bn = 0;
const oc = /* @__PURE__ */ Promise.resolve(), lc = () => Bn || (oc.then(() => Bn = 0), Bn = Date.now());
function cc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Re(
      fc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = lc(), n;
}
function fc(e, t) {
  if (N(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const ir = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uc = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? Ql(e, s, o) : t === "style" ? tc(e, n, s) : Wt(t) ? ts(t) || rc(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ac(e, t, s, o)) ? (nr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && tr(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(s)) ? nr(e, tt(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), tr(e, t, s, o));
};
function ac(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ir(t) && j(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ir(t) && ie(n) ? !1 : t in e;
}
const or = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return N(t) ? (n) => sn(t, n) : t;
};
function hc(e) {
  e.target.composing = !0;
}
function lr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Un = /* @__PURE__ */ Symbol("_assign");
function cr(e, t, n) {
  return t && (e = e.trim()), n && (e = is(e)), e;
}
const dc = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Un] = or(r);
    const i = s || r.props && r.props.type === "number";
    gt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Un](cr(e.value, n, i));
    }), (n || i) && gt(e, "change", () => {
      e.value = cr(e.value, n, i);
    }), t || (gt(e, "compositionstart", hc), gt(e, "compositionend", lr), gt(e, "change", lr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[Un] = or(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? is(e.value) : e.value, f = t ?? "";
    l !== f && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === f) || (e.value = f));
  }
}, pc = {}, gc = {};
function mc() {
  dc.getSSRProps = ({ value: e }) => ({ value: e }), gc.getSSRProps = ({ value: e }, t) => {
    if (t.props && yn(t.props.value, e))
      return { checked: !0 };
  }, pc.getSSRProps = ({ value: e }, t) => {
    if (N(e)) {
      if (t.props && Xi(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (ss(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const _c = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, $c = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = ((r) => {
    if (!("key" in r))
      return;
    const i = qe(r.key);
    if (t.some(
      (o) => o === i || _c[o] === i
    ))
      return e(r);
  }));
}, Oi = /* @__PURE__ */ le({ patchProp: uc }, Wl);
let Lt, fr = !1;
function bc() {
  return Lt || (Lt = Tl(Oi));
}
function yc() {
  return Lt = fr ? Lt : Cl(Oi), fr = !0, Lt;
}
const jc = ((...e) => {
  const t = bc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Ri(s);
    if (!r) return;
    const i = t._component;
    !j(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, Pi(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
}), Vc = ((...e) => {
  const t = yc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Ri(s);
    if (r)
      return n(r, !0, Pi(r));
  }, t;
});
function Pi(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ri(e) {
  return ie(e) ? document.querySelector(e) : e;
}
let ur = !1;
const Bc = () => {
  ur || (ur = !0, mc());
};
export {
  Mc as A,
  ut as B,
  ue as C,
  Ac as D,
  N as E,
  we as F,
  Rl as G,
  Sc as H,
  Ct as I,
  Wt as J,
  os as K,
  xc as L,
  Ec as M,
  De as N,
  vc as O,
  wc as P,
  Tc as Q,
  br as R,
  ln as S,
  Hc as T,
  Cc as U,
  Z as V,
  Oc as W,
  Bc as X,
  Vc as Y,
  Xr as a,
  Lc as b,
  $l as c,
  Fc as d,
  El as e,
  xi as f,
  ge as g,
  Nc as h,
  vi as i,
  Ic as j,
  $c as k,
  Io as l,
  Ml as m,
  ls as n,
  Jr as o,
  jc as p,
  bn as q,
  Pc as r,
  Dc as s,
  Qi as t,
  cl as u,
  dc as v,
  Rc as w,
  hr as x,
  j as y,
  ie as z
};
