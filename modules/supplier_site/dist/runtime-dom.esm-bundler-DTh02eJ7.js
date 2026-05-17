// @__NO_SIDE_EFFECTS__
function Tt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const te = {}, gt = [], He = () => {
}, lr = () => !1, Wt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Qs = (e) => e.startsWith("onUpdate:"), le = Object.assign, zs = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Ii = Object.prototype.hasOwnProperty, X = (e, t) => Ii.call(e, t), N = Array.isArray, mt = (e) => kt(e) === "[object Map]", en = (e) => kt(e) === "[object Set]", Tn = (e) => kt(e) === "[object Date]", j = (e) => typeof e == "function", ne = (e) => typeof e == "string", $e = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", cr = (e) => (Q(e) || j(e)) && j(e.then) && j(e.catch), fr = Object.prototype.toString, kt = (e) => fr.call(e), Li = (e) => kt(e).slice(8, -1), ur = (e) => kt(e) === "[object Object]", tn = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _t = /* @__PURE__ */ Tt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ps = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, Ni = /-\w/g, Ae = ps(
  (e) => e.replace(Ni, (t) => t.slice(1).toUpperCase())
), Di = /\B([A-Z])/g, st = ps(
  (e) => e.replace(Di, "-$1").toLowerCase()
), gs = ps((e) => e.charAt(0).toUpperCase() + e.slice(1)), ws = ps(
  (e) => e ? `on${gs(e)}` : ""
), ze = (e, t) => !Object.is(e, t), As = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, ar = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Hi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, $i = (e) => {
  const t = ne(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Cn;
const ms = () => Cn || (Cn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function sn(e) {
  if (N(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = ne(n) ? Ui(n) : sn(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ne(e) || Q(e))
    return e;
}
const ji = /;(?![^(]*\))/g, Vi = /:([^]+)/, Bi = /\/\*[^]*?\*\//g;
function Ui(e) {
  const t = {};
  return e.replace(Bi, "").split(ji).forEach((s) => {
    if (s) {
      const n = s.split(Vi);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function bc(e) {
  if (!e) return "";
  if (ne(e)) return e;
  let t = "";
  for (const s in e) {
    const n = e[s];
    if (ne(n) || typeof n == "number") {
      const r = s.startsWith("--") ? s : st(s);
      t += `${r}:${n};`;
    }
  }
  return t;
}
function nn(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (N(e))
    for (let s = 0; s < e.length; s++) {
      const n = nn(e[s]);
      n && (t += n + " ");
    }
  else if (Q(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Ki = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Wi = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", yc = /* @__PURE__ */ Tt(Ki), xc = /* @__PURE__ */ Tt(Wi), hr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ki = /* @__PURE__ */ Tt(hr), vc = /* @__PURE__ */ Tt(
  hr + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function dr(e) {
  return !!e || e === "";
}
const Gi = /[>/="'\u0009\u000a\u000c\u0020]/, Ms = {};
function Sc(e) {
  if (Ms.hasOwnProperty(e))
    return Ms[e];
  const t = Gi.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), Ms[e] = !t;
}
const Tc = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function Cc(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const qi = /["'&<>]/;
function Ec(e) {
  const t = "" + e, s = qi.exec(t);
  if (!s)
    return t;
  let n = "", r, i, o = 0;
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
    o !== i && (n += t.slice(o, i)), o = i + 1, n += r;
  }
  return o !== i ? n + t.slice(o, i) : n;
}
const Ji = /^-?>|<!--|-->|--!>|<!-$/g;
function wc(e) {
  return e.replace(Ji, "");
}
function Yi(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = _s(e[n], t[n]);
  return s;
}
function _s(e, t) {
  if (e === t) return !0;
  let s = Tn(e), n = Tn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = $e(e), n = $e(t), s || n)
    return e === t;
  if (s = N(e), n = N(t), s || n)
    return s && n ? Yi(e, t) : !1;
  if (s = Q(e), n = Q(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), f = t.hasOwnProperty(o);
      if (l && !f || !l && f || !_s(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Xi(e, t) {
  return e.findIndex((s) => _s(s, t));
}
const pr = (e) => !!(e && e.__v_isRef === !0), Zi = (e) => ne(e) ? e : e == null ? "" : N(e) || Q(e) && (e.toString === fr || !j(e.toString)) ? pr(e) ? Zi(e.value) : JSON.stringify(e, gr, 2) : String(e), gr = (e, t) => pr(t) ? gr(e, t.value) : mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[Os(n, i) + " =>"] = r, s),
    {}
  )
} : en(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Os(s))
} : $e(t) ? Os(t) : Q(t) && !N(t) && !ur(t) ? String(t) : t, Os = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    $e(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
function Ac(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let _e;
class Qi {
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
      const s = _e;
      try {
        return _e = this, t();
      } finally {
        _e = s;
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
function zi() {
  return _e;
}
let ee;
const Ps = /* @__PURE__ */ new WeakSet();
class mr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _e && _e.active && _e.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ps.has(this) && (Ps.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || br(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, En(this), yr(this);
    const t = ee, s = Pe;
    ee = this, Pe = !0;
    try {
      return this.fn();
    } finally {
      xr(this), ee = t, Pe = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ln(t);
      this.deps = this.depsTail = void 0, En(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ps.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Vs(this) && this.run();
  }
  get dirty() {
    return Vs(this);
  }
}
let _r = 0, Ot, Pt;
function br(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pt, Pt = e;
    return;
  }
  e.next = Ot, Ot = e;
}
function rn() {
  _r++;
}
function on() {
  if (--_r > 0)
    return;
  if (Pt) {
    let t = Pt;
    for (Pt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Ot; ) {
    let t = Ot;
    for (Ot = void 0; t; ) {
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
function yr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), ln(n), eo(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function Vs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (vr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function vr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Nt) || (e.globalVersion = Nt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Vs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = ee, n = Pe;
  ee = e, Pe = !0;
  try {
    yr(e);
    const r = e.fn(e._value);
    (t.version === 0 || ze(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    ee = s, Pe = n, xr(e), e.flags &= -3;
  }
}
function ln(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      ln(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function eo(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Pe = !0;
const Sr = [];
function We() {
  Sr.push(Pe), Pe = !1;
}
function ke() {
  const e = Sr.pop();
  Pe = e === void 0 ? !0 : e;
}
function En(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = ee;
    ee = void 0;
    try {
      t();
    } finally {
      ee = s;
    }
  }
}
let Nt = 0;
class to {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class cn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ee || !Pe || ee === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== ee)
      s = this.activeLink = new to(ee, this), ee.deps ? (s.prevDep = ee.depsTail, ee.depsTail.nextDep = s, ee.depsTail = s) : ee.deps = ee.depsTail = s, Tr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = ee.depsTail, s.nextDep = void 0, ee.depsTail.nextDep = s, ee.depsTail = s, ee.deps === s && (ee.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Nt++, this.notify(t);
  }
  notify(t) {
    rn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      on();
    }
  }
}
function Tr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Tr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Bs = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ Symbol(
  ""
), Us = /* @__PURE__ */ Symbol(
  ""
), Dt = /* @__PURE__ */ Symbol(
  ""
);
function fe(e, t, s) {
  if (Pe && ee) {
    let n = Bs.get(e);
    n || Bs.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new cn()), r.map = n, r.key = s), r.track();
  }
}
function Ke(e, t, s, n, r, i) {
  const o = Bs.get(e);
  if (!o) {
    Nt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (rn(), t === "clear")
    o.forEach(l);
  else {
    const f = N(e), h = f && tn(s);
    if (f && s === "length") {
      const u = Number(n);
      o.forEach((d, v) => {
        (v === "length" || v === Dt || !$e(v) && v >= u) && l(d);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), h && l(o.get(Dt)), t) {
        case "add":
          f ? h && l(o.get("length")) : (l(o.get(ft)), mt(e) && l(o.get(Us)));
          break;
        case "delete":
          f || (l(o.get(ft)), mt(e) && l(o.get(Us)));
          break;
        case "set":
          mt(e) && l(o.get(ft));
          break;
      }
  }
  on();
}
function ht(e) {
  const t = Y(e);
  return t === e ? t : (fe(t, "iterate", Dt), we(e) ? t : t.map(Re));
}
function bs(e) {
  return fe(e = Y(e), "iterate", Dt), e;
}
function Ye(e, t) {
  return Ge(e) ? et(e) ? St(Re(t)) : St(t) : Re(t);
}
const so = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rs(this, Symbol.iterator, (e) => Ye(this, e));
  },
  concat(...e) {
    return ht(this).concat(
      ...e.map((t) => N(t) ? ht(t) : t)
    );
  },
  entries() {
    return Rs(this, "entries", (e) => (e[1] = Ye(this, e[1]), e));
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
      (s) => s.map((n) => Ye(this, n)),
      arguments
    );
  },
  find(e, t) {
    return je(
      this,
      "find",
      e,
      t,
      (s) => Ye(this, s),
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
      (s) => Ye(this, s),
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
    return ht(this).join(e);
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
    return wn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return wn(this, "reduceRight", e, t);
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
    return ht(this).toReversed();
  },
  toSorted(e) {
    return ht(this).toSorted(e);
  },
  toSpliced(...e) {
    return ht(this).toSpliced(...e);
  },
  unshift(...e) {
    return wt(this, "unshift", e);
  },
  values() {
    return Rs(this, "values", (e) => Ye(this, e));
  }
};
function Rs(e, t, s) {
  const n = bs(e), r = n[t]();
  return n !== e && !we(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const no = Array.prototype;
function je(e, t, s, n, r, i) {
  const o = bs(e), l = o !== e && !we(e), f = o[t];
  if (f !== no[t]) {
    const d = f.apply(e, i);
    return l ? Re(d) : d;
  }
  let h = s;
  o !== e && (l ? h = function(d, v) {
    return s.call(this, Ye(e, d), v, e);
  } : s.length > 2 && (h = function(d, v) {
    return s.call(this, d, v, e);
  }));
  const u = f.call(o, h, n);
  return l && r ? r(u) : u;
}
function wn(e, t, s, n) {
  const r = bs(e);
  let i = s;
  return r !== e && (we(e) ? s.length > 3 && (i = function(o, l, f) {
    return s.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return s.call(this, o, Ye(e, l), f, e);
  }), r[t](i, ...n);
}
function Fs(e, t, s) {
  const n = Y(e);
  fe(n, "iterate", Dt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && hn(s[0]) ? (s[0] = Y(s[0]), n[t](...s)) : r;
}
function wt(e, t, s = []) {
  We(), rn();
  const n = Y(e)[t].apply(e, s);
  return on(), ke(), n;
}
const ro = /* @__PURE__ */ Tt("__proto__,__v_isRef,__isVue"), Cr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($e)
);
function io(e) {
  $e(e) || (e = String(e));
  const t = Y(this);
  return fe(t, "has", e), t.hasOwnProperty(e);
}
class Er {
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
      return n === (r ? i ? mo : Or : i ? Mr : Ar).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = N(t);
    if (!r) {
      let f;
      if (o && (f = so[s]))
        return f;
      if (s === "hasOwnProperty")
        return io;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      de(t) ? t : n
    );
    if (($e(s) ? Cr.has(s) : ro(s)) || (r || fe(t, "get", s), i))
      return l;
    if (de(l)) {
      const f = o && tn(s) ? l : l.value;
      return r && Q(f) ? Ws(f) : f;
    }
    return Q(l) ? r ? Ws(l) : un(l) : l;
  }
}
class wr extends Er {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const o = N(t) && tn(s);
    if (!this._isShallow) {
      const h = Ge(i);
      if (!we(n) && !Ge(n) && (i = Y(i), n = Y(n)), !o && de(i) && !de(n))
        return h || (i.value = n), !0;
    }
    const l = o ? Number(s) < t.length : X(t, s), f = Reflect.set(
      t,
      s,
      n,
      de(t) ? t : r
    );
    return t === Y(r) && (l ? ze(n, i) && Ke(t, "set", s, n) : Ke(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = X(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ke(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!$e(s) || !Cr.has(s)) && fe(t, "has", s), n;
  }
  ownKeys(t) {
    return fe(
      t,
      "iterate",
      N(t) ? "length" : ft
    ), Reflect.ownKeys(t);
  }
}
class oo extends Er {
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
const lo = /* @__PURE__ */ new wr(), co = /* @__PURE__ */ new oo(), fo = /* @__PURE__ */ new wr(!0);
const Ks = (e) => e, Xt = (e) => Reflect.getPrototypeOf(e);
function uo(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = Y(r), o = mt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, h = r[e](...n), u = s ? Ks : t ? St : Re;
    return !t && fe(
      i,
      "iterate",
      f ? Us : ft
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
function Zt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ao(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = Y(i), l = Y(r);
      e || (ze(r, l) && fe(o, "get", r), fe(o, "get", l));
      const { has: f } = Xt(o), h = t ? Ks : e ? St : Re;
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
      const o = this, l = o.__v_raw, f = Y(l), h = t ? Ks : e ? St : Re;
      return !e && fe(f, "iterate", ft), l.forEach((u, d) => r.call(i, h(u), h(d), o));
    }
  };
  return le(
    s,
    e ? {
      add: Zt("add"),
      set: Zt("set"),
      delete: Zt("delete"),
      clear: Zt("clear")
    } : {
      add(r) {
        !t && !we(r) && !Ge(r) && (r = Y(r));
        const i = Y(this);
        return Xt(i).has.call(i, r) || (i.add(r), Ke(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !we(i) && !Ge(i) && (i = Y(i));
        const o = Y(this), { has: l, get: f } = Xt(o);
        let h = l.call(o, r);
        h || (r = Y(r), h = l.call(o, r));
        const u = f.call(o, r);
        return o.set(r, i), h ? ze(i, u) && Ke(o, "set", r, i) : Ke(o, "add", r, i), this;
      },
      delete(r) {
        const i = Y(this), { has: o, get: l } = Xt(i);
        let f = o.call(i, r);
        f || (r = Y(r), f = o.call(i, r)), l && l.call(i, r);
        const h = i.delete(r);
        return f && Ke(i, "delete", r, void 0), h;
      },
      clear() {
        const r = Y(this), i = r.size !== 0, o = r.clear();
        return i && Ke(
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
    s[r] = uo(r, e, t);
  }), s;
}
function fn(e, t) {
  const s = ao(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    X(s, r) && r in n ? s : n,
    r,
    i
  );
}
const ho = {
  get: /* @__PURE__ */ fn(!1, !1)
}, po = {
  get: /* @__PURE__ */ fn(!1, !0)
}, go = {
  get: /* @__PURE__ */ fn(!0, !1)
};
const Ar = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), mo = /* @__PURE__ */ new WeakMap();
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _o(Li(e));
}
function un(e) {
  return Ge(e) ? e : an(
    e,
    !1,
    lo,
    ho,
    Ar
  );
}
function yo(e) {
  return an(
    e,
    !1,
    fo,
    po,
    Mr
  );
}
function Ws(e) {
  return an(
    e,
    !0,
    co,
    go,
    Or
  );
}
function an(e, t, s, n, r) {
  if (!Q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = bo(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    i === 2 ? n : s
  );
  return r.set(e, l), l;
}
function et(e) {
  return Ge(e) ? et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ge(e) {
  return !!(e && e.__v_isReadonly);
}
function we(e) {
  return !!(e && e.__v_isShallow);
}
function hn(e) {
  return e ? !!e.__v_raw : !1;
}
function Y(e) {
  const t = e && e.__v_raw;
  return t ? Y(t) : e;
}
function xo(e) {
  return !X(e, "__v_skip") && Object.isExtensible(e) && ar(e, "__v_skip", !0), e;
}
const Re = (e) => Q(e) ? un(e) : e, St = (e) => Q(e) ? Ws(e) : e;
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Mc(e) {
  return Pr(e, !1);
}
function Oc(e) {
  return Pr(e, !0);
}
function Pr(e, t) {
  return de(e) ? e : new vo(e, t);
}
class vo {
  constructor(t, s) {
    this.dep = new cn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : Y(t), this._value = s ? t : Re(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || we(t) || Ge(t);
    t = n ? t : Y(t), ze(t, s) && (this._rawValue = t, this._value = n ? t : Re(t), this.dep.trigger());
  }
}
function So(e) {
  return de(e) ? e.value : e;
}
const To = {
  get: (e, t, s) => t === "__v_raw" ? e : So(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return de(r) && !de(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Rr(e) {
  return et(e) ? e : new Proxy(e, To);
}
class Co {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new cn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Nt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ee !== this)
      return br(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return vr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Eo(e, t, s = !1) {
  let n, r;
  return j(e) ? n = e : (n = e.get, r = e.set), new Co(n, r, s);
}
const Qt = {}, ls = /* @__PURE__ */ new WeakMap();
let lt;
function wo(e, t = !1, s = lt) {
  if (s) {
    let n = ls.get(s);
    n || ls.set(s, n = []), n.push(e);
  }
}
function Ao(e, t, s = te) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = s, h = (m) => r ? m : we(m) || r === !1 || r === 0 ? Qe(m, 1) : Qe(m);
  let u, d, v, w, D = !1, B = !1;
  if (de(e) ? (d = () => e.value, D = we(e)) : et(e) ? (d = () => h(e), D = !0) : N(e) ? (B = !0, D = e.some((m) => et(m) || we(m)), d = () => e.map((m) => {
    if (de(m))
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
      return f ? f(e, 3, [w]) : e(w);
    } finally {
      lt = m;
    }
  } : d = He, t && r) {
    const m = d, M = r === !0 ? 1 / 0 : r;
    d = () => Qe(m(), M);
  }
  const re = zi(), W = () => {
    u.stop(), re && re.active && zs(re.effects, u);
  };
  if (i && t) {
    const m = t;
    t = (...M) => {
      m(...M), W();
    };
  }
  let q = B ? new Array(e.length).fill(Qt) : Qt;
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
              q === Qt ? void 0 : B && q[0] === Qt ? [] : q,
              w
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
  return l && l(g), u = new mr(d), u.scheduler = o ? () => o(g, !1) : g, w = (m) => wo(m, !1, u), v = u.onStop = () => {
    const m = ls.get(u);
    if (m) {
      if (f)
        f(m, 4);
      else
        for (const M of m) M();
      ls.delete(u);
    }
  }, t ? n ? g(!0) : q = u.run() : o ? o(g.bind(null, !0), !0) : u.run(), W.pause = u.pause.bind(u), W.resume = u.resume.bind(u), W.stop = W, W;
}
function Qe(e, t = 1 / 0, s) {
  if (t <= 0 || !Q(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, de(e))
    Qe(e.value, t, s);
  else if (N(e))
    for (let n = 0; n < e.length; n++)
      Qe(e[n], t, s);
  else if (en(e) || mt(e))
    e.forEach((n) => {
      Qe(n, t, s);
    });
  else if (ur(e)) {
    for (const n in e)
      Qe(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Qe(e[n], t, s);
  }
  return e;
}
function Gt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    ys(r, t, s);
  }
}
function Fe(e, t, s, n) {
  if (j(e)) {
    const r = Gt(e, t, s, n);
    return r && cr(r) && r.catch((i) => {
      ys(i, t, s);
    }), r;
  }
  if (N(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Fe(e[i], t, s, n));
    return r;
  }
}
function ys(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || te;
  if (t) {
    let l = t.parent;
    const f = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${s}`;
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
  Mo(e, s, r, n, o);
}
function Mo(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ge = [];
let Ne = -1;
const bt = [];
let Xe = null, pt = 0;
const Fr = /* @__PURE__ */ Promise.resolve();
let cs = null;
function Oo(e) {
  const t = cs || Fr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Po(e) {
  let t = Ne + 1, s = ge.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = ge[n], i = Ht(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function dn(e) {
  if (!(e.flags & 1)) {
    const t = Ht(e), s = ge[ge.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ht(s) ? ge.push(e) : ge.splice(Po(t), 0, e), e.flags |= 1, Ir();
  }
}
function Ir() {
  cs || (cs = Fr.then(Lr));
}
function Ro(e) {
  N(e) ? bt.push(...e) : Xe && e.id === -1 ? Xe.splice(pt + 1, 0, e) : e.flags & 1 || (bt.push(e), e.flags |= 1), Ir();
}
function An(e, t, s = Ne + 1) {
  for (; s < ge.length; s++) {
    const n = ge[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ge.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function fs(e) {
  if (bt.length) {
    const t = [...new Set(bt)].sort(
      (s, n) => Ht(s) - Ht(n)
    );
    if (bt.length = 0, Xe) {
      Xe.push(...t);
      return;
    }
    for (Xe = t, pt = 0; pt < Xe.length; pt++) {
      const s = Xe[pt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Xe = null, pt = 0;
  }
}
const Ht = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lr(e) {
  try {
    for (Ne = 0; Ne < ge.length; Ne++) {
      const t = ge[Ne];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Gt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ne < ge.length; Ne++) {
      const t = ge[Ne];
      t && (t.flags &= -2);
    }
    Ne = -1, ge.length = 0, fs(), cs = null, (ge.length || bt.length) && Lr();
  }
}
let Oe = null, Nr = null;
function $t(e) {
  const t = Oe;
  return Oe = e, Nr = e && e.type.__scopeId || null, t;
}
function Fo(e, t = Oe, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && hs(-1);
    const i = $t(t);
    let o;
    try {
      o = e(...r);
    } finally {
      $t(i), n._d && hs(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function De(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[n];
    f && (We(), Fe(f, s, 8, [
      e.el,
      l,
      e,
      t
    ]), ke());
  }
}
const Io = /* @__PURE__ */ Symbol("_vte"), Dr = (e) => e.__isTeleport, Ue = /* @__PURE__ */ Symbol("_leaveCb"), zt = /* @__PURE__ */ Symbol("_enterCb");
function Lo() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Wr(() => {
    e.isMounted = !0;
  }), kr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Te = [Function, Array], Hr = {
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
}, $r = (e) => {
  const t = e.subTree;
  return t.component ? $r(t.component) : t;
}, No = {
  name: "BaseTransition",
  props: Hr,
  setup(e, { slots: t }) {
    const s = Si(), n = Lo();
    return () => {
      const r = t.default && Br(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = jr(r), o = Y(e), { mode: l } = o;
      if (n.isLeaving)
        return Is(i);
      const f = Mn(i);
      if (!f)
        return Is(i);
      let h = ks(
        f,
        o,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (d) => h = d
      );
      f.type !== ue && jt(f, h);
      let u = s.subTree && Mn(s.subTree);
      if (u && u.type !== ue && !ct(u, f) && $r(s).type !== ue) {
        let d = ks(
          u,
          o,
          n,
          s
        );
        if (jt(u, d), l === "out-in" && f.type !== ue)
          return n.isLeaving = !0, d.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete d.afterLeave, u = void 0;
          }, Is(i);
        l === "in-out" && f.type !== ue ? d.delayLeave = (v, w, D) => {
          const B = Vr(
            n,
            u
          );
          B[String(u.key)] = u, v[Ue] = () => {
            w(), v[Ue] = void 0, delete h.delayedLeave, u = void 0;
          }, h.delayedLeave = () => {
            D(), delete h.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function jr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const s of e)
      if (s.type !== ue) {
        t = s;
        break;
      }
  }
  return t;
}
const Do = No;
function Vr(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function ks(e, t, s, n, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: f,
    onEnter: h,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: v,
    onLeave: w,
    onAfterLeave: D,
    onLeaveCancelled: B,
    onBeforeAppear: re,
    onAppear: W,
    onAfterAppear: q,
    onAppearCancelled: g
  } = t, m = String(e.key), M = Vr(s, e), $ = (P, O) => {
    P && Fe(
      P,
      n,
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
      if (!s.isMounted)
        if (i)
          O = re || f;
        else
          return;
      P[Ue] && P[Ue](
        !0
        /* cancelled */
      );
      const K = M[m];
      K && ct(e, K) && K.el[Ue] && K.el[Ue](), $(O, [P]);
    },
    enter(P) {
      let O = h, K = u, T = d;
      if (!s.isMounted)
        if (i)
          O = W || h, K = q || u, T = g || d;
        else
          return;
      let V = !1;
      const se = P[zt] = (oe) => {
        V || (V = !0, oe ? $(T, [P]) : $(K, [P]), k.delayedLeave && k.delayedLeave(), P[zt] = void 0);
      };
      O ? U(O, [P, se]) : se();
    },
    leave(P, O) {
      const K = String(e.key);
      if (P[zt] && P[zt](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return O();
      $(v, [P]);
      let T = !1;
      const V = P[Ue] = (se) => {
        T || (T = !0, O(), se ? $(B, [P]) : $(D, [P]), P[Ue] = void 0, M[K] === e && delete M[K]);
      };
      M[K] = e, w ? U(w, [P, V]) : V();
    },
    clone(P) {
      const O = ks(
        P,
        t,
        s,
        n,
        r
      );
      return r && r(O), O;
    }
  };
  return k;
}
function Is(e) {
  if (xs(e))
    return e = tt(e), e.children = null, e;
}
function Mn(e) {
  if (!xs(e))
    return Dr(e.type) && e.children ? jr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && j(s.default))
      return s.default();
  }
}
function jt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, jt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Br(e, t = !1, s) {
  let n = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = s == null ? o.key : String(s) + String(o.key != null ? o.key : i);
    o.type === Ee ? (o.patchFlag & 128 && r++, n = n.concat(
      Br(o.children, t, l)
    )) : (t || o.type !== ue) && n.push(l != null ? tt(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Pc(e, t) {
  return j(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ur(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const us = /* @__PURE__ */ new WeakMap();
function yt(e, t, s, n, r = !1) {
  if (N(e)) {
    e.forEach(
      (D, B) => yt(
        D,
        t && (N(t) ? t[B] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (xt(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && yt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? _n(n.component) : n.el, o = r ? null : i, { i: l, r: f } = e, h = t && t.r, u = l.refs === te ? l.refs = {} : l.refs, d = l.setupState, v = Y(d), w = d === te ? lr : (D) => X(v, D);
  if (h != null && h !== f) {
    if (On(t), ne(h))
      u[h] = null, w(h) && (d[h] = null);
    else if (de(h)) {
      h.value = null;
      const D = t;
      D.k && (u[D.k] = null);
    }
  }
  if (j(f))
    Gt(f, l, 12, [o, u]);
  else {
    const D = ne(f), B = de(f);
    if (D || B) {
      const re = () => {
        if (e.f) {
          const W = D ? w(f) ? d[f] : u[f] : f.value;
          if (r)
            N(W) && zs(W, i);
          else if (N(W))
            W.includes(i) || W.push(i);
          else if (D)
            u[f] = [i], w(f) && (d[f] = u[f]);
          else {
            const q = [i];
            f.value = q, e.k && (u[e.k] = q);
          }
        } else D ? (u[f] = o, w(f) && (d[f] = o)) : B && (f.value = o, e.k && (u[e.k] = o));
      };
      if (o) {
        const W = () => {
          re(), us.delete(e);
        };
        W.id = -1, us.set(e, W), xe(W, s);
      } else
        On(e), re();
    }
  }
}
function On(e) {
  const t = us.get(e);
  t && (t.flags |= 8, us.delete(e));
}
let Pn = !1;
const dt = () => {
  Pn || (console.error("Hydration completed but contains mismatches."), Pn = !0);
}, Ho = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", $o = (e) => e.namespaceURI.includes("MathML"), es = (e) => {
  if (e.nodeType === 1) {
    if (Ho(e)) return "svg";
    if ($o(e)) return "mathml";
  }
}, ts = (e) => e.nodeType === 8;
function jo(e) {
  const {
    mt: t,
    p: s,
    o: {
      patchProp: n,
      createText: r,
      nextSibling: i,
      parentNode: o,
      remove: l,
      insert: f,
      createComment: h
    }
  } = e, u = (g, m) => {
    if (!m.hasChildNodes()) {
      s(null, g, m), fs(), m._vnode = g;
      return;
    }
    d(m.firstChild, g, null, null, null), fs(), m._vnode = g;
  }, d = (g, m, M, $, U, k = !1) => {
    k = k || !!m.dynamicChildren;
    const P = ts(g) && g.data === "[", O = () => B(
      g,
      m,
      M,
      $,
      U,
      P
    ), { type: K, ref: T, shapeFlag: V, patchFlag: se } = m;
    let oe = g.nodeType;
    m.el = g, se === -2 && (k = !1, m.dynamicChildren = null);
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
      case Ft:
        if (P && (g = i(g), oe = g.nodeType), oe === 1 || oe === 3) {
          I = g;
          const G = !m.children.length;
          for (let R = 0; R < m.staticCount; R++)
            G && (m.children += I.nodeType === 1 ? I.outerHTML : I.data), R === m.staticCount - 1 && (m.anchor = I), I = i(I);
          return P ? i(I) : I;
        } else
          O();
        break;
      case Ee:
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
          if (P ? I = re(g) : ts(g) && g.data === "teleport start" ? I = re(g, g.data, "teleport end") : I = i(g), t(
            m,
            G,
            null,
            M,
            $,
            es(G),
            k
          ), xt(m) && !m.type.__asyncResolved) {
            let R;
            P ? (R = he(Ee), R.anchor = I ? I.previousSibling : G.lastChild) : R = g.nodeType === 3 ? xi("") : he("div"), R.el = g, m.component.subTree = R;
          }
        } else V & 64 ? oe !== 8 ? I = O() : I = m.type.hydrate(
          g,
          m,
          M,
          $,
          U,
          k,
          e,
          w
        ) : V & 128 && (I = m.type.hydrate(
          g,
          m,
          M,
          $,
          es(o(g)),
          U,
          k,
          e,
          d
        ));
    }
    return T != null && yt(T, null, $, m), I;
  }, v = (g, m, M, $, U, k) => {
    k = k || !!m.dynamicChildren;
    const { type: P, props: O, patchFlag: K, shapeFlag: T, dirs: V, transition: se } = m, oe = P === "input" || P === "option";
    if (oe || K !== -1) {
      V && De(m, null, M, "created");
      let I = !1;
      if (q(g)) {
        I = hi(
          null,
          // no need check parentSuspense in hydration
          se
        ) && M && M.vnode.props && M.vnode.props.appear;
        const R = g.content.firstChild;
        if (I) {
          const ie = R.getAttribute("class");
          ie && (R.$cls = ie), se.beforeEnter(R);
        }
        W(R, g, M), m.el = g = R;
      }
      if (T & 16 && // skip if element has innerHTML / textContent
      !(O && (O.innerHTML || O.textContent))) {
        let R = w(
          g.firstChild,
          m,
          g,
          M,
          $,
          U,
          k
        );
        for (; R; ) {
          ss(
            g,
            1
            /* CHILDREN */
          ) || dt();
          const ie = R;
          R = R.nextSibling, l(ie);
        }
      } else if (T & 8) {
        let R = m.children;
        R[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (R = R.slice(1));
        const { textContent: ie } = g;
        ie !== R && // innerHTML normalize \r\n or \r into a single \n in the DOM
        ie !== R.replace(/\r\n|\r/g, `
`) && (ss(
          g,
          0
          /* TEXT */
        ) || dt(), g.textContent = m.children);
      }
      if (O) {
        if (oe || !k || K & 48) {
          const R = g.tagName.includes("-");
          for (const ie in O)
            (oe && (ie.endsWith("value") || ie === "indeterminate") || Wt(ie) && !_t(ie) || // force hydrate v-bind with .prop modifiers
            ie[0] === "." || R) && n(g, ie, null, O[ie], void 0, M);
        } else if (O.onClick)
          n(
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
      (G = O && O.onVnodeBeforeMount) && Ce(G, M, m), V && De(m, null, M, "beforeMount"), ((G = O && O.onVnodeMounted) || V || I) && mi(() => {
        G && Ce(G, M, m), I && se.enter(g), V && De(m, null, M, "mounted");
      }, $);
    }
    return g.nextSibling;
  }, w = (g, m, M, $, U, k, P) => {
    P = P || !!m.dynamicChildren;
    const O = m.children, K = O.length;
    for (let T = 0; T < K; T++) {
      const V = P ? O[T] : O[T] = ve(O[T]), se = V.type === ut;
      g ? (se && !P && T + 1 < K && ve(O[T + 1]).type === ut && (f(
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
      )) : se && !V.children ? f(V.el = r(""), M) : (ss(
        M,
        1
        /* CHILDREN */
      ) || dt(), s(
        null,
        V,
        M,
        null,
        $,
        U,
        es(M),
        k
      ));
    }
    return g;
  }, D = (g, m, M, $, U, k) => {
    const { slotScopeIds: P } = m;
    P && (U = U ? U.concat(P) : P);
    const O = o(g), K = w(
      i(g),
      m,
      O,
      M,
      $,
      U,
      k
    );
    return K && ts(K) && K.data === "]" ? i(m.anchor = K) : (dt(), f(m.anchor = h("]"), O, K), K);
  }, B = (g, m, M, $, U, k) => {
    if (ss(
      g.parentElement,
      1
      /* CHILDREN */
    ) || dt(), m.el = null, k) {
      const K = re(g);
      for (; ; ) {
        const T = i(g);
        if (T && T !== K)
          l(T);
        else
          break;
      }
    }
    const P = i(g), O = o(g);
    return l(g), s(
      null,
      m,
      O,
      P,
      M,
      $,
      es(O),
      U
    ), M && (M.vnode.el = m.el, si(M, m.el)), P;
  }, re = (g, m = "[", M = "]") => {
    let $ = 0;
    for (; g; )
      if (g = i(g), g && ts(g) && (g.data === m && $++, g.data === M)) {
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
const Rn = "data-allow-mismatch", Vo = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function ss(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Rn); )
      e = e.parentElement;
  const s = e && e.getAttribute(Rn);
  if (s == null)
    return !1;
  if (s === "")
    return !0;
  {
    const n = s.split(",");
    return t === 0 && n.includes("children") ? !0 : n.includes(Vo[t]);
  }
}
ms().requestIdleCallback;
ms().cancelIdleCallback;
const xt = (e) => !!e.type.__asyncLoader, xs = (e) => e.type.__isKeepAlive;
function Bo(e, t) {
  Kr(e, "a", t);
}
function Uo(e, t) {
  Kr(e, "da", t);
}
function Kr(e, t, s = ae) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (vs(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      xs(r.parent.vnode) && Ko(n, t, s, r), r = r.parent;
  }
}
function Ko(e, t, s, n) {
  const r = vs(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Gr(() => {
    zs(n[t], r);
  }, s);
}
function vs(e, t, s = ae, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      We();
      const l = qt(s), f = Fe(t, s, e, o);
      return l(), ke(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const qe = (e) => (t, s = ae) => {
  (!Ut || e === "sp") && vs(e, (...n) => t(...n), s);
}, Wo = qe("bm"), Wr = qe("m"), ko = qe(
  "bu"
), Go = qe("u"), kr = qe(
  "bum"
), Gr = qe("um"), qo = qe(
  "sp"
), Jo = qe("rtg"), Yo = qe("rtc");
function Xo(e, t = ae) {
  vs("ec", e, t);
}
const qr = "components";
function Rc(e, t) {
  return Yr(qr, e, !0, t) || e;
}
const Jr = /* @__PURE__ */ Symbol.for("v-ndc");
function Fc(e) {
  return ne(e) ? Yr(qr, e, !1) || e : e || Jr;
}
function Yr(e, t, s = !0, n = !1) {
  const r = Oe || ae;
  if (r) {
    const i = r.type;
    {
      const l = Nl(
        i,
        !1
      );
      if (l && (l === t || l === Ae(t) || l === gs(Ae(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Fn(r[e] || i[e], t) || // global registration
      Fn(r.appContext[e], t)
    );
    return !o && n ? i : o;
  }
}
function Fn(e, t) {
  return e && (e[t] || e[Ae(t)] || e[gs(Ae(t))]);
}
function Ic(e, t, s, n) {
  let r;
  const i = s, o = N(e);
  if (o || ne(e)) {
    const l = o && et(e);
    let f = !1, h = !1;
    l && (f = !we(e), h = Ge(e), e = bs(e)), r = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(
        f ? h ? St(Re(e[u])) : Re(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (Q(e))
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
const Gs = (e) => e ? Ti(e) ? _n(e) : Gs(e.parent) : null, Rt = (
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
    $parent: (e) => Gs(e.parent),
    $root: (e) => Gs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      dn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Oo.bind(e.proxy)),
    $watch: (e) => cl.bind(e)
  })
), Ls = (e, t) => e !== te && !e.__isScriptSetup && X(e, t), Zo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
    if (t[0] !== "$") {
      const v = o[t];
      if (v !== void 0)
        switch (v) {
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
        if (Ls(n, t))
          return o[t] = 1, n[t];
        if (r !== te && X(r, t))
          return o[t] = 2, r[t];
        if (X(i, t))
          return o[t] = 3, i[t];
        if (s !== te && X(s, t))
          return o[t] = 4, s[t];
        qs && (o[t] = 0);
      }
    }
    const h = Rt[t];
    let u, d;
    if (h)
      return t === "$attrs" && fe(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (s !== te && X(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      d = f.config.globalProperties, X(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return Ls(r, t) ? (r[t] = s, !0) : n !== te && X(n, t) ? (n[t] = s, !0) : X(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let f;
    return !!(s[l] || e !== te && l[0] !== "$" && X(e, l) || Ls(t, l) || X(i, l) || X(n, l) || X(Rt, l) || X(r.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : X(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function In(e) {
  return N(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let qs = !0;
function Qo(e) {
  const t = Zr(e), s = e.proxy, n = e.ctx;
  qs = !1, t.beforeCreate && Ln(t.beforeCreate, e, "bc");
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
    beforeUpdate: w,
    updated: D,
    activated: B,
    deactivated: re,
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
    filters: se
  } = t;
  if (h && zo(h, n, null), o)
    for (const G in o) {
      const R = o[G];
      j(R) && (n[G] = R.bind(s));
    }
  if (r) {
    const G = r.call(s, s);
    Q(G) && (e.data = un(G));
  }
  if (qs = !0, i)
    for (const G in i) {
      const R = i[G], ie = j(R) ? R.bind(s, s) : j(R.get) ? R.get.bind(s, s) : He, Jt = !j(R) && j(R.set) ? R.set.bind(s) : He, nt = Hl({
        get: ie,
        set: Jt
      });
      Object.defineProperty(n, G, {
        enumerable: !0,
        configurable: !0,
        get: () => nt.value,
        set: (Ie) => nt.value = Ie
      });
    }
  if (l)
    for (const G in l)
      Xr(l[G], n, s, G);
  if (f) {
    const G = j(f) ? f.call(s) : f;
    Reflect.ownKeys(G).forEach((R) => {
      il(R, G[R]);
    });
  }
  u && Ln(u, e, "c");
  function I(G, R) {
    N(R) ? R.forEach((ie) => G(ie.bind(s))) : R && G(R.bind(s));
  }
  if (I(Wo, d), I(Wr, v), I(ko, w), I(Go, D), I(Bo, B), I(Uo, re), I(Xo, k), I(Yo, $), I(Jo, U), I(kr, q), I(Gr, m), I(qo, P), N(O))
    if (O.length) {
      const G = e.exposed || (e.exposed = {});
      O.forEach((R) => {
        Object.defineProperty(G, R, {
          get: () => s[R],
          set: (ie) => s[R] = ie,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === He && (e.render = M), K != null && (e.inheritAttrs = K), T && (e.components = T), V && (e.directives = V), P && Ur(e);
}
function zo(e, t, s = He) {
  N(e) && (e = Js(e));
  for (const n in e) {
    const r = e[n];
    let i;
    Q(r) ? "default" in r ? i = ns(
      r.from || n,
      r.default,
      !0
    ) : i = ns(r.from || n) : i = ns(r), de(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function Ln(e, t, s) {
  Fe(
    N(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Xr(e, t, s, n) {
  let r = n.includes(".") ? ei(s, n) : () => s[n];
  if (ne(e)) {
    const i = t[e];
    j(i) && Ns(r, i);
  } else if (j(e))
    Ns(r, e.bind(s));
  else if (Q(e))
    if (N(e))
      e.forEach((i) => Xr(i, t, s, n));
    else {
      const i = j(e.handler) ? e.handler.bind(s) : t[e.handler];
      j(i) && Ns(r, i, e);
    }
}
function Zr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (h) => as(f, h, o, !0)
  ), as(f, t, o)), Q(t) && i.set(t, f), f;
}
function as(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && as(e, i, s, !0), r && r.forEach(
    (o) => as(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = el[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const el = {
  data: Nn,
  props: Dn,
  emits: Dn,
  // objects
  methods: Mt,
  computed: Mt,
  // lifecycle
  beforeCreate: pe,
  created: pe,
  beforeMount: pe,
  mounted: pe,
  beforeUpdate: pe,
  updated: pe,
  beforeDestroy: pe,
  beforeUnmount: pe,
  destroyed: pe,
  unmounted: pe,
  activated: pe,
  deactivated: pe,
  errorCaptured: pe,
  serverPrefetch: pe,
  // assets
  components: Mt,
  directives: Mt,
  // watch
  watch: sl,
  // provide / inject
  provide: Nn,
  inject: tl
};
function Nn(e, t) {
  return t ? e ? function() {
    return le(
      j(e) ? e.call(this, this) : e,
      j(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function tl(e, t) {
  return Mt(Js(e), Js(t));
}
function Js(e) {
  if (N(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function pe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Mt(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Dn(e, t) {
  return e ? N(e) && N(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    In(e),
    In(t ?? {})
  ) : t;
}
function sl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = le(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = pe(e[n], t[n]);
  return s;
}
function Qr() {
  return {
    app: null,
    config: {
      isNativeTag: lr,
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
let nl = 0;
function rl(e, t) {
  return function(n, r = null) {
    j(n) || (n = le({}, n)), r != null && !Q(r) && (r = null);
    const i = Qr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const h = i.app = {
      _uid: nl++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: jl,
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
          const w = h._ceVNode || he(n, r);
          return w.appContext = i, v === !0 ? v = "svg" : v === !1 && (v = void 0), d && t ? t(w, u) : e(w, u, v), f = !0, h._container = u, u.__vue_app__ = h, _n(w.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        f && (Fe(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(u, d) {
        return i.provides[u] = d, h;
      },
      runWithContext(u) {
        const d = vt;
        vt = h;
        try {
          return u();
        } finally {
          vt = d;
        }
      }
    };
    return h;
  };
}
let vt = null;
function il(e, t) {
  if (ae) {
    let s = ae.provides;
    const n = ae.parent && ae.parent.provides;
    n === s && (s = ae.provides = Object.create(n)), s[e] = t;
  }
}
function ns(e, t, s = !1) {
  const n = Si();
  if (n || vt) {
    let r = vt ? vt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && j(t) ? t.call(n && n.proxy) : t;
  }
}
const ol = /* @__PURE__ */ Symbol.for("v-scx"), ll = () => ns(ol);
function Ns(e, t, s) {
  return zr(e, t, s);
}
function zr(e, t, s = te) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = le({}, s), f = t && n || !t && i !== "post";
  let h;
  if (Ut) {
    if (i === "sync") {
      const w = ll();
      h = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!f) {
      const w = () => {
      };
      return w.stop = He, w.resume = He, w.pause = He, w;
    }
  }
  const u = ae;
  l.call = (w, D, B) => Fe(w, u, D, B);
  let d = !1;
  i === "post" ? l.scheduler = (w) => {
    xe(w, u && u.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (w, D) => {
    D ? w() : dn(w);
  }), l.augmentJob = (w) => {
    t && (w.flags |= 4), d && (w.flags |= 2, u && (w.id = u.uid, w.i = u));
  };
  const v = Ao(e, t, l);
  return Ut && (h ? h.push(v) : f && v()), v;
}
function cl(e, t, s) {
  const n = this.proxy, r = ne(e) ? e.includes(".") ? ei(n, e) : () => n[e] : e.bind(n, n);
  let i;
  j(t) ? i = t : (i = t.handler, s = t);
  const o = qt(this), l = zr(r, i.bind(n), s);
  return o(), l;
}
function ei(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const fl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ae(t)}Modifiers`] || e[`${st(t)}Modifiers`];
function ul(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || te;
  let r = s;
  const i = t.startsWith("update:"), o = i && fl(n, t.slice(7));
  o && (o.trim && (r = s.map((u) => ne(u) ? u.trim() : u)), o.number && (r = s.map(Hi)));
  let l, f = n[l = ws(t)] || // also try camelCase event handler (#2249)
  n[l = ws(Ae(t))];
  !f && i && (f = n[l = ws(st(t))]), f && Fe(
    f,
    e,
    6,
    r
  );
  const h = n[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Fe(
      h,
      e,
      6,
      r
    );
  }
}
const al = /* @__PURE__ */ new WeakMap();
function ti(e, t, s = !1) {
  const n = s ? al : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!j(e)) {
    const f = (h) => {
      const u = ti(h, t, !0);
      u && (l = !0, le(o, u));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (Q(e) && n.set(e, null), null) : (N(i) ? i.forEach((f) => o[f] = null) : le(o, i), Q(e) && n.set(e, o), o);
}
function Ss(e, t) {
  return !e || !Wt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), X(e, t[0].toLowerCase() + t.slice(1)) || X(e, st(t)) || X(e, t));
}
function rs(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: f,
    render: h,
    renderCache: u,
    props: d,
    data: v,
    setupState: w,
    ctx: D,
    inheritAttrs: B
  } = e, re = $t(e);
  let W, q;
  try {
    if (s.shapeFlag & 4) {
      const m = r || n, M = m;
      W = ve(
        h.call(
          M,
          m,
          u,
          d,
          w,
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
      ), q = t.props ? l : hl(l);
    }
  } catch (m) {
    It.length = 0, ys(m, e, 1), W = he(ue);
  }
  let g = W;
  if (q && B !== !1) {
    const m = Object.keys(q), { shapeFlag: M } = g;
    m.length && M & 7 && (i && m.some(Qs) && (q = dl(
      q,
      i
    )), g = tt(g, q, !1, !0));
  }
  return s.dirs && (g = tt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(s.dirs) : s.dirs), s.transition && jt(g, s.transition), W = g, $t(re), W;
}
const hl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Wt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, dl = (e, t) => {
  const s = {};
  for (const n in e)
    (!Qs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function pl(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? Hn(n, o, h) : !!o;
    if (f & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const v = u[d];
        if (o[v] !== n[v] && !Ss(h, v))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? Hn(n, o, h) : !0 : !!o;
  return !1;
}
function Hn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !Ss(s, i))
      return !0;
  }
  return !1;
}
function si({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const ni = {}, ri = () => Object.create(ni), ii = (e) => Object.getPrototypeOf(e) === ni;
function gl(e, t, s, n = !1) {
  const r = {}, i = ri();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), oi(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : yo(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function ml(e, t, s, n) {
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
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let v = u[d];
        if (Ss(e.emitsOptions, v))
          continue;
        const w = t[v];
        if (f)
          if (X(i, v))
            w !== i[v] && (i[v] = w, h = !0);
          else {
            const D = Ae(v);
            r[D] = Ys(
              f,
              l,
              D,
              w,
              e,
              !1
            );
          }
        else
          w !== i[v] && (i[v] = w, h = !0);
      }
    }
  } else {
    oi(e, t, r, i) && (h = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !X(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = st(d)) === d || !X(t, u))) && (f ? s && // for camelCase
      (s[d] !== void 0 || // for kebab-case
      s[u] !== void 0) && (r[d] = Ys(
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
  h && Ke(e.attrs, "set", "");
}
function oi(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (_t(f))
        continue;
      const h = t[f];
      let u;
      r && X(r, u = Ae(f)) ? !i || !i.includes(u) ? s[u] = h : (l || (l = {}))[u] = h : Ss(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, o = !0);
    }
  if (i) {
    const f = Y(s), h = l || te;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      s[d] = Ys(
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
function Ys(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = X(o, "default");
    if (l && n === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && j(f)) {
        const { propsDefaults: h } = r;
        if (s in h)
          n = h[s];
        else {
          const u = qt(r);
          n = h[s] = f.call(
            null,
            t
          ), u();
        }
      } else
        n = f;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === st(s)) && (n = !0));
  }
  return n;
}
const _l = /* @__PURE__ */ new WeakMap();
function li(e, t, s = !1) {
  const n = s ? _l : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!j(e)) {
    const u = (d) => {
      f = !0;
      const [v, w] = li(d, t, !0);
      le(o, v), w && l.push(...w);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !f)
    return Q(e) && n.set(e, gt), gt;
  if (N(i))
    for (let u = 0; u < i.length; u++) {
      const d = Ae(i[u]);
      $n(d) && (o[d] = te);
    }
  else if (i)
    for (const u in i) {
      const d = Ae(u);
      if ($n(d)) {
        const v = i[u], w = o[d] = N(v) || j(v) ? { type: v } : le({}, v), D = w.type;
        let B = !1, re = !0;
        if (N(D))
          for (let W = 0; W < D.length; ++W) {
            const q = D[W], g = j(q) && q.name;
            if (g === "Boolean") {
              B = !0;
              break;
            } else g === "String" && (re = !1);
          }
        else
          B = j(D) && D.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = B, w[
          1
          /* shouldCastTrue */
        ] = re, (B || X(w, "default")) && l.push(d);
      }
    }
  const h = [o, l];
  return Q(e) && n.set(e, h), h;
}
function $n(e) {
  return e[0] !== "$" && !_t(e);
}
const pn = (e) => e === "_" || e === "_ctx" || e === "$stable", gn = (e) => N(e) ? e.map(ve) : [ve(e)], bl = (e, t, s) => {
  if (t._n)
    return t;
  const n = Fo((...r) => gn(t(...r)), s);
  return n._c = !1, n;
}, ci = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (pn(r)) continue;
    const i = e[r];
    if (j(i))
      t[r] = bl(r, i, n);
    else if (i != null) {
      const o = gn(i);
      t[r] = () => o;
    }
  }
}, fi = (e, t) => {
  const s = gn(t);
  e.slots.default = () => s;
}, ui = (e, t, s) => {
  for (const n in t)
    (s || !pn(n)) && (e[n] = t[n]);
}, yl = (e, t, s) => {
  const n = e.slots = ri();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (ui(n, t, s), s && ar(n, "_", r, !0)) : ci(t, n);
  } else t && fi(e, t);
}, xl = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = te;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : ui(r, t, s) : (i = !t.$stable, ci(t, r)), o = t;
  } else t && (fi(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !pn(l) && o[l] == null && delete r[l];
}, xe = mi;
function vl(e) {
  return ai(e);
}
function Sl(e) {
  return ai(e, jo);
}
function ai(e, t) {
  const s = ms();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: h,
    setElementText: u,
    parentNode: d,
    nextSibling: v,
    setScopeId: w = He,
    insertStaticContent: D
  } = e, B = (c, a, p, x = null, _ = null, b = null, E = void 0, C = null, S = !!a.dynamicChildren) => {
    if (c === a)
      return;
    c && !ct(c, a) && (x = Yt(c), Ie(c, _, b, !0), c = null), a.patchFlag === -2 && (S = !1, a.dynamicChildren = null);
    const { type: y, ref: L, shapeFlag: A } = a;
    switch (y) {
      case ut:
        re(c, a, p, x);
        break;
      case ue:
        W(c, a, p, x);
        break;
      case Ft:
        c == null && q(a, p, x, E);
        break;
      case Ee:
        T(
          c,
          a,
          p,
          x,
          _,
          b,
          E,
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
          E,
          C,
          S
        ) : A & 6 ? V(
          c,
          a,
          p,
          x,
          _,
          b,
          E,
          C,
          S
        ) : (A & 64 || A & 128) && y.process(
          c,
          a,
          p,
          x,
          _,
          b,
          E,
          C,
          S,
          at
        );
    }
    L != null && _ ? yt(L, c && c.ref, b, a || c, !a) : L == null && c && c.ref != null && yt(c.ref, null, b, c, !0);
  }, re = (c, a, p, x) => {
    if (c == null)
      n(
        a.el = l(a.children),
        p,
        x
      );
    else {
      const _ = a.el = c.el;
      a.children !== c.children && h(_, a.children);
    }
  }, W = (c, a, p, x) => {
    c == null ? n(
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
      _ = v(c), n(c, p, x), c = _;
    n(a, p, x);
  }, m = ({ el: c, anchor: a }) => {
    let p;
    for (; c && c !== a; )
      p = v(c), r(c), c = p;
    r(a);
  }, M = (c, a, p, x, _, b, E, C, S) => {
    if (a.type === "svg" ? E = "svg" : a.type === "math" && (E = "mathml"), c == null)
      $(
        a,
        p,
        x,
        _,
        b,
        E,
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
          E,
          C,
          S
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, $ = (c, a, p, x, _, b, E, C) => {
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
      Ds(c, b),
      E,
      C
    ), H && De(c, null, x, "created"), U(S, c, c.scopeId, E, x), L) {
      for (const z in L)
        z !== "value" && !_t(z) && i(S, z, null, L[z], b, x);
      "value" in L && i(S, "value", null, L.value, b), (y = L.onVnodeBeforeMount) && Ce(y, x, c);
    }
    H && De(c, null, x, "beforeMount");
    const J = hi(_, F);
    J && F.beforeEnter(S), n(S, a, p), ((y = L && L.onVnodeMounted) || J || H) && xe(() => {
      y && Ce(y, x, c), J && F.enter(S), H && De(c, null, x, "mounted");
    }, _);
  }, U = (c, a, p, x, _) => {
    if (p && w(c, p), x)
      for (let b = 0; b < x.length; b++)
        w(c, x[b]);
    if (_) {
      let b = _.subTree;
      if (a === b || gi(b.type) && (b.ssContent === a || b.ssFallback === a)) {
        const E = _.vnode;
        U(
          c,
          E,
          E.scopeId,
          E.slotScopeIds,
          _.parent
        );
      }
    }
  }, k = (c, a, p, x, _, b, E, C, S = 0) => {
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
        E,
        C
      );
    }
  }, P = (c, a, p, x, _, b, E) => {
    const C = a.el = c.el;
    let { patchFlag: S, dynamicChildren: y, dirs: L } = a;
    S |= c.patchFlag & 16;
    const A = c.props || te, F = a.props || te;
    let H;
    if (p && rt(p, !1), (H = F.onVnodeBeforeUpdate) && Ce(H, p, a, c), L && De(a, c, p, "beforeUpdate"), p && rt(p, !0), (A.innerHTML && F.innerHTML == null || A.textContent && F.textContent == null) && u(C, ""), y ? O(
      c.dynamicChildren,
      y,
      C,
      p,
      x,
      Ds(a, _),
      b
    ) : E || R(
      c,
      a,
      C,
      null,
      p,
      x,
      Ds(a, _),
      b,
      !1
    ), S > 0) {
      if (S & 16)
        K(C, A, F, p, _);
      else if (S & 2 && A.class !== F.class && i(C, "class", null, F.class, _), S & 4 && i(C, "style", A.style, F.style, _), S & 8) {
        const J = a.dynamicProps;
        for (let z = 0; z < J.length; z++) {
          const Z = J[z], me = A[Z], ce = F[Z];
          (ce !== me || Z === "value") && i(C, Z, me, ce, _, p);
        }
      }
      S & 1 && c.children !== a.children && u(C, a.children);
    } else !E && y == null && K(C, A, F, p, _);
    ((H = F.onVnodeUpdated) || L) && xe(() => {
      H && Ce(H, p, a, c), L && De(a, c, p, "updated");
    }, x);
  }, O = (c, a, p, x, _, b, E) => {
    for (let C = 0; C < a.length; C++) {
      const S = c[C], y = a[C], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === Ee || // - In the case of different nodes, there is going to be a replacement
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
        E,
        !0
      );
    }
  }, K = (c, a, p, x, _) => {
    if (a !== p) {
      if (a !== te)
        for (const b in a)
          !_t(b) && !(b in p) && i(
            c,
            b,
            a[b],
            null,
            _,
            x
          );
      for (const b in p) {
        if (_t(b)) continue;
        const E = p[b], C = a[b];
        E !== C && b !== "value" && i(c, b, C, E, _, x);
      }
      "value" in p && i(c, "value", a.value, p.value, _);
    }
  }, T = (c, a, p, x, _, b, E, C, S) => {
    const y = a.el = c ? c.el : l(""), L = a.anchor = c ? c.anchor : l("");
    let { patchFlag: A, dynamicChildren: F, slotScopeIds: H } = a;
    H && (C = C ? C.concat(H) : H), c == null ? (n(y, p, x), n(L, p, x), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      a.children || [],
      p,
      L,
      _,
      b,
      E,
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
      E,
      C
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (a.key != null || _ && a === _.subTree) && di(
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
      E,
      C,
      S
    );
  }, V = (c, a, p, x, _, b, E, C, S) => {
    a.slotScopeIds = C, c == null ? a.shapeFlag & 512 ? _.ctx.activate(
      a,
      p,
      x,
      E,
      S
    ) : se(
      a,
      p,
      x,
      _,
      b,
      E,
      S
    ) : oe(c, a, S);
  }, se = (c, a, p, x, _, b, E) => {
    const C = c.component = vi(
      c,
      x,
      _
    );
    if (xs(c) && (C.ctx.renderer = at), Ci(C, !1, E), C.asyncDep) {
      if (_ && _.registerDep(C, I, E), !c.el) {
        const S = C.subTree = he(ue);
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
        E
      );
  }, oe = (c, a, p) => {
    const x = a.component = c.component;
    if (pl(c, a, p))
      if (x.asyncDep && !x.asyncResolved) {
        G(x, a, p);
        return;
      } else
        x.next = a, x.update();
    else
      a.el = c.el, x.vnode = a;
  }, I = (c, a, p, x, _, b, E) => {
    const C = () => {
      if (c.isMounted) {
        let { next: A, bu: F, u: H, parent: J, vnode: z } = c;
        {
          const be = pi(c);
          if (be) {
            A && (A.el = z.el, G(c, A, E)), be.asyncDep.then(() => {
              c.isUnmounted || C();
            });
            return;
          }
        }
        let Z = A, me;
        rt(c, !1), A ? (A.el = z.el, G(c, A, E)) : A = z, F && As(F), (me = A.props && A.props.onVnodeBeforeUpdate) && Ce(me, J, A, z), rt(c, !0);
        const ce = rs(c), Me = c.subTree;
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
        ), A.el = ce.el, Z === null && si(c, ce.el), H && xe(H, _), (me = A.props && A.props.onVnodeUpdated) && xe(
          () => Ce(me, J, A, z),
          _
        );
      } else {
        let A;
        const { el: F, props: H } = a, { bm: J, m: z, parent: Z, root: me, type: ce } = c, Me = xt(a);
        if (rt(c, !1), J && As(J), !Me && (A = H && H.onVnodeBeforeMount) && Ce(A, Z, a), rt(c, !0), F && Es) {
          const be = () => {
            c.subTree = rs(c), Es(
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
          const be = c.subTree = rs(c);
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
        if (z && xe(z, _), !Me && (A = H && H.onVnodeMounted)) {
          const be = a;
          xe(
            () => Ce(A, Z, be),
            _
          );
        }
        (a.shapeFlag & 256 || Z && xt(Z.vnode) && Z.vnode.shapeFlag & 256) && c.a && xe(c.a, _), c.isMounted = !0, a = p = x = null;
      }
    };
    c.scope.on();
    const S = c.effect = new mr(C);
    c.scope.off();
    const y = c.update = S.run.bind(S), L = c.job = S.runIfDirty.bind(S);
    L.i = c, L.id = c.uid, S.scheduler = () => dn(L), rt(c, !0), y();
  }, G = (c, a, p) => {
    a.component = c;
    const x = c.vnode.props;
    c.vnode = a, c.next = null, ml(c, a.props, x, p), xl(c, a.children, p), We(), An(c), ke();
  }, R = (c, a, p, x, _, b, E, C, S = !1) => {
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
          E,
          C,
          S
        );
        return;
      } else if (F & 256) {
        ie(
          y,
          A,
          p,
          x,
          _,
          b,
          E,
          C,
          S
        );
        return;
      }
    }
    H & 8 ? (L & 16 && Ct(y, _, b), A !== y && u(p, A)) : L & 16 ? H & 16 ? Jt(
      y,
      A,
      p,
      x,
      _,
      b,
      E,
      C,
      S
    ) : Ct(y, _, b, !0) : (L & 8 && u(p, ""), H & 16 && k(
      A,
      p,
      x,
      _,
      b,
      E,
      C,
      S
    ));
  }, ie = (c, a, p, x, _, b, E, C, S) => {
    c = c || gt, a = a || gt;
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
        E,
        C,
        S
      );
    }
    y > L ? Ct(
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
      E,
      C,
      S,
      A
    );
  }, Jt = (c, a, p, x, _, b, E, C, S) => {
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
          E,
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
          E,
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
            E,
            C,
            S
          ), y++;
      }
    } else if (y > F)
      for (; y <= A; )
        Ie(c[y], _, b, !0), y++;
    else {
      const H = y, J = y, z = /* @__PURE__ */ new Map();
      for (y = J; y <= F; y++) {
        const ye = a[y] = S ? Ze(a[y]) : ve(a[y]);
        ye.key != null && z.set(ye.key, y);
      }
      let Z, me = 0;
      const ce = F - J + 1;
      let Me = !1, be = 0;
      const Et = new Array(ce);
      for (y = 0; y < ce; y++) Et[y] = 0;
      for (y = H; y <= A; y++) {
        const ye = c[y];
        if (me >= ce) {
          Ie(ye, _, b, !0);
          continue;
        }
        let Le;
        if (ye.key != null)
          Le = z.get(ye.key);
        else
          for (Z = J; Z <= F; Z++)
            if (Et[Z - J] === 0 && ct(ye, a[Z])) {
              Le = Z;
              break;
            }
        Le === void 0 ? Ie(ye, _, b, !0) : (Et[Le - J] = y + 1, Le >= be ? be = Le : Me = !0, B(
          ye,
          a[Le],
          p,
          null,
          _,
          b,
          E,
          C,
          S
        ), me++);
      }
      const xn = Me ? Tl(Et) : gt;
      for (Z = xn.length - 1, y = ce - 1; y >= 0; y--) {
        const ye = J + y, Le = a[ye], vn = a[ye + 1], Sn = ye + 1 < L ? (
          // #13559, fallback to el placeholder for unresolved async component
          vn.el || vn.placeholder
        ) : x;
        Et[y] === 0 ? B(
          null,
          Le,
          p,
          Sn,
          _,
          b,
          E,
          C,
          S
        ) : Me && (Z < 0 || y !== xn[Z] ? nt(Le, p, Sn, 2) : Z--);
      }
    }
  }, nt = (c, a, p, x, _ = null) => {
    const { el: b, type: E, transition: C, children: S, shapeFlag: y } = c;
    if (y & 6) {
      nt(c.component.subTree, a, p, x);
      return;
    }
    if (y & 128) {
      c.suspense.move(a, p, x);
      return;
    }
    if (y & 64) {
      E.move(c, a, p, at);
      return;
    }
    if (E === Ee) {
      n(b, a, p);
      for (let A = 0; A < S.length; A++)
        nt(S[A], a, p, x);
      n(c.anchor, a, p);
      return;
    }
    if (E === Ft) {
      g(c, a, p);
      return;
    }
    if (x !== 2 && y & 1 && C)
      if (x === 0)
        C.beforeEnter(b), n(b, a, p), xe(() => C.enter(b), _);
      else {
        const { leave: A, delayLeave: F, afterLeave: H } = C, J = () => {
          c.ctx.isUnmounted ? r(b) : n(b, a, p);
        }, z = () => {
          b._isLeaving && b[Ue](
            !0
            /* cancelled */
          ), A(b, () => {
            J(), H && H();
          });
        };
        F ? F(b, J, z) : z();
      }
    else
      n(b, a, p);
  }, Ie = (c, a, p, x = !1, _ = !1) => {
    const {
      type: b,
      props: E,
      ref: C,
      children: S,
      dynamicChildren: y,
      shapeFlag: L,
      patchFlag: A,
      dirs: F,
      cacheIndex: H
    } = c;
    if (A === -2 && (_ = !1), C != null && (We(), yt(C, null, p, c, !0), ke()), H != null && (a.renderCache[H] = void 0), L & 256) {
      a.ctx.deactivate(c);
      return;
    }
    const J = L & 1 && F, z = !xt(c);
    let Z;
    if (z && (Z = E && E.onVnodeBeforeUnmount) && Ce(Z, a, c), L & 6)
      Fi(c.component, p, x);
    else {
      if (L & 128) {
        c.suspense.unmount(p, x);
        return;
      }
      J && De(c, null, a, "beforeUnmount"), L & 64 ? c.type.remove(
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
      (b !== Ee || A > 0 && A & 64) ? Ct(
        y,
        a,
        p,
        !1,
        !0
      ) : (b === Ee && A & 384 || !_ && L & 16) && Ct(S, a, p), x && bn(c);
    }
    (z && (Z = E && E.onVnodeUnmounted) || J) && xe(() => {
      Z && Ce(Z, a, c), J && De(c, null, a, "unmounted");
    }, p);
  }, bn = (c) => {
    const { type: a, el: p, anchor: x, transition: _ } = c;
    if (a === Ee) {
      Ri(p, x);
      return;
    }
    if (a === Ft) {
      m(c);
      return;
    }
    const b = () => {
      r(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: E, delayLeave: C } = _, S = () => E(p, b);
      C ? C(c.el, b, S) : S();
    } else
      b();
  }, Ri = (c, a) => {
    let p;
    for (; c !== a; )
      p = v(c), r(c), c = p;
    r(a);
  }, Fi = (c, a, p) => {
    const { bum: x, scope: _, job: b, subTree: E, um: C, m: S, a: y } = c;
    jn(S), jn(y), x && As(x), _.stop(), b && (b.flags |= 8, Ie(E, c, a, p)), C && xe(C, a), xe(() => {
      c.isUnmounted = !0;
    }, a);
  }, Ct = (c, a, p, x = !1, _ = !1, b = 0) => {
    for (let E = b; E < c.length; E++)
      Ie(c[E], a, p, x, _);
  }, Yt = (c) => {
    if (c.shapeFlag & 6)
      return Yt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const a = v(c.anchor || c.el), p = a && a[Io];
    return p ? v(p) : a;
  };
  let Ts = !1;
  const yn = (c, a, p) => {
    c == null ? a._vnode && Ie(a._vnode, null, null, !0) : B(
      a._vnode || null,
      c,
      a,
      null,
      null,
      null,
      p
    ), a._vnode = c, Ts || (Ts = !0, An(), fs(), Ts = !1);
  }, at = {
    p: B,
    um: Ie,
    m: nt,
    r: bn,
    mt: se,
    mc: k,
    pc: R,
    pbc: O,
    n: Yt,
    o: e
  };
  let Cs, Es;
  return t && ([Cs, Es] = t(
    at
  )), {
    render: yn,
    hydrate: Cs,
    createApp: rl(yn, Cs)
  };
}
function Ds({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function rt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function hi(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function di(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (N(n) && N(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Ze(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && di(o, l)), l.type === ut && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = o.el), l.type === ue && !l.el && (l.el = o.el);
    }
}
function Tl(e) {
  const t = e.slice(), s = [0];
  let n, r, i, o, l;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const h = e[n];
    if (h !== 0) {
      if (r = s[s.length - 1], e[r] < h) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        l = i + o >> 1, e[s[l]] < h ? i = l + 1 : o = l;
      h < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = t[o];
  return s;
}
function pi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : pi(t);
}
function jn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const gi = (e) => e.__isSuspense;
function mi(e, t) {
  t && t.pendingBranch ? N(e) ? t.effects.push(...e) : t.effects.push(e) : Ro(e);
}
const Ee = /* @__PURE__ */ Symbol.for("v-fgt"), ut = /* @__PURE__ */ Symbol.for("v-txt"), ue = /* @__PURE__ */ Symbol.for("v-cmt"), Ft = /* @__PURE__ */ Symbol.for("v-stc"), It = [];
let Se = null;
function Cl(e = !1) {
  It.push(Se = e ? null : []);
}
function El() {
  It.pop(), Se = It[It.length - 1] || null;
}
let Vt = 1;
function hs(e, t = !1) {
  Vt += e, e < 0 && Se && t && (Se.hasOnce = !0);
}
function _i(e) {
  return e.dynamicChildren = Vt > 0 ? Se || gt : null, El(), Vt > 0 && Se && Se.push(e), e;
}
function Lc(e, t, s, n, r, i) {
  return _i(
    yi(
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
function wl(e, t, s, n, r) {
  return _i(
    he(
      e,
      t,
      s,
      n,
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
const bi = ({ key: e }) => e ?? null, is = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || de(e) || j(e) ? { i: Oe, r: e, k: t, f: !!s } : e : null);
function yi(e, t = null, s = null, n = 0, r = null, i = e === Ee ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bi(t),
    ref: t && is(t),
    scopeId: Nr,
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
    ctx: Oe
  };
  return l ? (mn(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= ne(s) ? 8 : 16), Vt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Se && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Se.push(f), f;
}
const he = Al;
function Al(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Jr) && (e = ue), Bt(e)) {
    const l = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && mn(l, s), Vt > 0 && !i && Se && (l.shapeFlag & 6 ? Se[Se.indexOf(e)] = l : Se.push(l)), l.patchFlag = -2, l;
  }
  if (Dl(e) && (e = e.__vccOpts), t) {
    t = Ml(t);
    let { class: l, style: f } = t;
    l && !ne(l) && (t.class = nn(l)), Q(f) && (hn(f) && !N(f) && (f = le({}, f)), t.style = sn(f));
  }
  const o = ne(e) ? 1 : gi(e) ? 128 : Dr(e) ? 64 : Q(e) ? 4 : j(e) ? 2 : 0;
  return yi(
    e,
    t,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function Ml(e) {
  return e ? hn(e) || ii(e) ? le({}, e) : e : null;
}
function tt(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, h = t ? Ol(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && bi(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? N(i) ? i.concat(is(t)) : [i, is(t)] : is(t)
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
    patchFlag: t && e.type !== Ee ? o === -1 ? 16 : o | 16 : o,
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
  return f && n && jt(
    u,
    f.clone(u)
  ), u;
}
function xi(e = " ", t = 0) {
  return he(ut, null, e, t);
}
function Nc(e, t) {
  const s = he(Ft, null, e);
  return s.staticCount = t, s;
}
function Dc(e = "", t = !1) {
  return t ? (Cl(), wl(ue, null, e)) : he(ue, null, e);
}
function ve(e) {
  return e == null || typeof e == "boolean" ? he(ue) : N(e) ? he(
    Ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Bt(e) ? Ze(e) : he(ut, null, String(e));
}
function Ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function mn(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (N(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), mn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !ii(t) ? t._ctx = Oe : r === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else j(t) ? (t = { default: t, _ctx: Oe }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [xi(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Ol(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = nn([t.class, n.class]));
      else if (r === "style")
        t.style = sn([t.style, n.style]);
      else if (Wt(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(N(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Ce(e, t, s, n = null) {
  Fe(e, t, 7, [
    s,
    n
  ]);
}
const Pl = Qr();
let Rl = 0;
function vi(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Pl, i = {
    uid: Rl++,
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
    scope: new Qi(
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
    propsOptions: li(n, r),
    emitsOptions: ti(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: te,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: te,
    data: te,
    props: te,
    attrs: te,
    slots: te,
    refs: te,
    setupState: te,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ul.bind(null, i), e.ce && e.ce(i), i;
}
let ae = null;
const Si = () => ae || Oe;
let ds, Xs;
{
  const e = ms(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  ds = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ae = s
  ), Xs = t(
    "__VUE_SSR_SETTERS__",
    (s) => Ut = s
  );
}
const qt = (e) => {
  const t = ae;
  return ds(e), e.scope.on(), () => {
    e.scope.off(), ds(t);
  };
}, Vn = () => {
  ae && ae.scope.off(), ds(null);
};
function Ti(e) {
  return e.vnode.shapeFlag & 4;
}
let Ut = !1;
function Ci(e, t = !1, s = !1) {
  t && Xs(t);
  const { props: n, children: r } = e.vnode, i = Ti(e);
  gl(e, n, i, t), yl(e, r, s || t);
  const o = i ? Fl(e, t) : void 0;
  return t && Xs(!1), o;
}
function Fl(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Zo);
  const { setup: n } = s;
  if (n) {
    We();
    const r = e.setupContext = n.length > 1 ? Ll(e) : null, i = qt(e), o = Gt(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = cr(o);
    if (ke(), i(), (l || e.sp) && !xt(e) && Ur(e), l) {
      if (o.then(Vn, Vn), t)
        return o.then((f) => {
          Bn(e, f);
        }).catch((f) => {
          ys(f, e, 0);
        });
      e.asyncDep = o;
    } else
      Bn(e, o);
  } else
    Ei(e);
}
function Bn(e, t, s) {
  j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) && (e.setupState = Rr(t)), Ei(e);
}
function Ei(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || He);
  {
    const r = qt(e);
    We();
    try {
      Qo(e);
    } finally {
      ke(), r();
    }
  }
}
const Il = {
  get(e, t) {
    return fe(e, "get", ""), e[t];
  }
};
function Ll(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Il),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function _n(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Rr(xo(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Rt)
        return Rt[s](e);
    },
    has(t, s) {
      return s in t || s in Rt;
    }
  })) : e.proxy;
}
function Nl(e, t = !0) {
  return j(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dl(e) {
  return j(e) && "__vccOpts" in e;
}
const Hl = (e, t) => Eo(e, t, Ut);
function $l(e, t, s) {
  try {
    hs(-1);
    const n = arguments.length;
    return n === 2 ? Q(t) && !N(t) ? Bt(t) ? he(e, null, [t]) : he(e, t) : he(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Bt(s) && (s = [s]), he(e, t, s));
  } finally {
    hs(1);
  }
}
const jl = "3.5.25", Vl = {
  createComponentInstance: vi,
  setupComponent: Ci,
  renderComponentRoot: rs,
  setCurrentRenderingInstance: $t,
  isVNode: Bt,
  normalizeVNode: ve
}, Hc = Vl;
let Zs;
const Un = typeof window < "u" && window.trustedTypes;
if (Un)
  try {
    Zs = /* @__PURE__ */ Un.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const wi = Zs ? (e) => Zs.createHTML(e) : (e) => e, Bl = "http://www.w3.org/2000/svg", Ul = "http://www.w3.org/1998/Math/MathML", Be = typeof document < "u" ? document : null, Kn = Be && /* @__PURE__ */ Be.createElement("template"), Kl = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Be.createElementNS(Bl, e) : t === "mathml" ? Be.createElementNS(Ul, e) : s ? Be.createElement(e, { is: s }) : Be.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
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
  insertStaticContent(e, t, s, n, r, i) {
    const o = s ? s.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Kn.innerHTML = wi(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Kn.content;
      if (n === "svg" || n === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Je = "transition", At = "animation", Kt = /* @__PURE__ */ Symbol("_vtc"), Ai = {
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
}, Wl = /* @__PURE__ */ le(
  {},
  Hr,
  Ai
), kl = (e) => (e.displayName = "Transition", e.props = Wl, e), $c = /* @__PURE__ */ kl(
  (e, { slots: t }) => $l(Do, Gl(e), t)
), it = (e, t = []) => {
  N(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Wn = (e) => e ? N(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Gl(e) {
  const t = {};
  for (const T in e)
    T in Ai || (t[T] = e[T]);
  if (e.css === !1)
    return t;
  const {
    name: s = "v",
    type: n,
    duration: r,
    enterFromClass: i = `${s}-enter-from`,
    enterActiveClass: o = `${s}-enter-active`,
    enterToClass: l = `${s}-enter-to`,
    appearFromClass: f = i,
    appearActiveClass: h = o,
    appearToClass: u = l,
    leaveFromClass: d = `${s}-leave-from`,
    leaveActiveClass: v = `${s}-leave-active`,
    leaveToClass: w = `${s}-leave-to`
  } = e, D = ql(r), B = D && D[0], re = D && D[1], {
    onBeforeEnter: W,
    onEnter: q,
    onEnterCancelled: g,
    onLeave: m,
    onLeaveCancelled: M,
    onBeforeAppear: $ = W,
    onAppear: U = q,
    onAppearCancelled: k = g
  } = t, P = (T, V, se, oe) => {
    T._enterCancelled = oe, ot(T, V ? u : l), ot(T, V ? h : o), se && se();
  }, O = (T, V) => {
    T._isLeaving = !1, ot(T, d), ot(T, w), ot(T, v), V && V();
  }, K = (T) => (V, se) => {
    const oe = T ? U : q, I = () => P(V, T, se);
    it(oe, [V, I]), kn(() => {
      ot(V, T ? f : i), Ve(V, T ? u : l), Wn(oe) || Gn(V, n, B, I);
    });
  };
  return le(t, {
    onBeforeEnter(T) {
      it(W, [T]), Ve(T, i), Ve(T, o);
    },
    onBeforeAppear(T) {
      it($, [T]), Ve(T, f), Ve(T, h);
    },
    onEnter: K(!1),
    onAppear: K(!0),
    onLeave(T, V) {
      T._isLeaving = !0;
      const se = () => O(T, V);
      Ve(T, d), T._enterCancelled ? (Ve(T, v), Yn(T)) : (Yn(T), Ve(T, v)), kn(() => {
        T._isLeaving && (ot(T, d), Ve(T, w), Wn(m) || Gn(T, n, re, se));
      }), it(m, [T, se]);
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
function ql(e) {
  if (e == null)
    return null;
  if (Q(e))
    return [Hs(e.enter), Hs(e.leave)];
  {
    const t = Hs(e);
    return [t, t];
  }
}
function Hs(e) {
  return $i(e);
}
function Ve(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[Kt] || (e[Kt] = /* @__PURE__ */ new Set())).add(t);
}
function ot(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[Kt];
  s && (s.delete(t), s.size || (e[Kt] = void 0));
}
function kn(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Jl = 0;
function Gn(e, t, s, n) {
  const r = e._endId = ++Jl, i = () => {
    r === e._endId && n();
  };
  if (s != null)
    return setTimeout(i, s);
  const { type: o, timeout: l, propCount: f } = Yl(e, t);
  if (!o)
    return n();
  const h = o + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(h, v), i();
  }, v = (w) => {
    w.target === e && ++u >= f && d();
  };
  setTimeout(() => {
    u < f && d();
  }, l + 1), e.addEventListener(h, v);
}
function Yl(e, t) {
  const s = window.getComputedStyle(e), n = (D) => (s[D] || "").split(", "), r = n(`${Je}Delay`), i = n(`${Je}Duration`), o = qn(r, i), l = n(`${At}Delay`), f = n(`${At}Duration`), h = qn(l, f);
  let u = null, d = 0, v = 0;
  t === Je ? o > 0 && (u = Je, d = o, v = i.length) : t === At ? h > 0 && (u = At, d = h, v = f.length) : (d = Math.max(o, h), u = d > 0 ? o > h ? Je : At : null, v = u ? u === Je ? i.length : f.length : 0);
  const w = u === Je && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Je}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: v,
    hasTransform: w
  };
}
function qn(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => Jn(s) + Jn(e[n])));
}
function Jn(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Yn(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Xl(e, t, s) {
  const n = e[Kt];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Xn = /* @__PURE__ */ Symbol("_vod"), Zl = /* @__PURE__ */ Symbol("_vsh"), Ql = /* @__PURE__ */ Symbol(""), zl = /(?:^|;)\s*display\s*:/;
function ec(e, t, s) {
  const n = e.style, r = ne(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (ne(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && os(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && os(n, o, "");
    for (const o in s)
      o === "display" && (i = !0), os(n, o, s[o]);
  } else if (r) {
    if (t !== s) {
      const o = n[Ql];
      o && (s += ";" + o), n.cssText = s, i = zl.test(s);
    }
  } else t && e.removeAttribute("style");
  Xn in e && (e[Xn] = i ? n.display : "", e[Zl] && (n.display = "none"));
}
const Zn = /\s*!important$/;
function os(e, t, s) {
  if (N(s))
    s.forEach((n) => os(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = tc(e, t);
    Zn.test(s) ? e.setProperty(
      st(n),
      s.replace(Zn, ""),
      "important"
    ) : e[n] = s;
  }
}
const Qn = ["Webkit", "Moz", "ms"], $s = {};
function tc(e, t) {
  const s = $s[t];
  if (s)
    return s;
  let n = Ae(t);
  if (n !== "filter" && n in e)
    return $s[t] = n;
  n = gs(n);
  for (let r = 0; r < Qn.length; r++) {
    const i = Qn[r] + n;
    if (i in e)
      return $s[t] = i;
  }
  return t;
}
const zn = "http://www.w3.org/1999/xlink";
function er(e, t, s, n, r, i = ki(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(zn, t.slice(6, t.length)) : e.setAttributeNS(zn, t, s) : s == null || i && !dr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : $e(s) ? String(s) : s
  );
}
function tr(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? wi(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== f || !("_value" in e)) && (e.value = f), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = dr(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function sc(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function nc(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const sr = /* @__PURE__ */ Symbol("_vei");
function rc(e, t, s, n, r = null) {
  const i = e[sr] || (e[sr] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, f] = ic(t);
    if (n) {
      const h = i[t] = cc(
        n,
        r
      );
      sc(e, l, h, f);
    } else o && (nc(e, l, o, f), i[t] = void 0);
  }
}
const nr = /(?:Once|Passive|Capture)$/;
function ic(e) {
  let t;
  if (nr.test(e)) {
    t = {};
    let n;
    for (; n = e.match(nr); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : st(e.slice(2)), t];
}
let js = 0;
const oc = /* @__PURE__ */ Promise.resolve(), lc = () => js || (oc.then(() => js = 0), js = Date.now());
function cc(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Fe(
      fc(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = lc(), s;
}
function fc(e, t) {
  if (N(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const rr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uc = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? Xl(e, n, o) : t === "style" ? ec(e, s, n) : Wt(t) ? Qs(t) || rc(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ac(e, t, n, o)) ? (tr(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && er(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ne(n)) ? tr(e, Ae(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), er(e, t, n, o));
};
function ac(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && rr(t) && j(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return rr(t) && ne(s) ? !1 : t in e;
}
const hc = {}, dc = {}, pc = {};
function gc() {
  hc.getSSRProps = ({ value: e }) => ({ value: e }), pc.getSSRProps = ({ value: e }, t) => {
    if (t.props && _s(t.props.value, e))
      return { checked: !0 };
  }, dc.getSSRProps = ({ value: e }, t) => {
    if (N(e)) {
      if (t.props && Xi(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (en(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const Mi = /* @__PURE__ */ le({ patchProp: uc }, Kl);
let Lt, ir = !1;
function mc() {
  return Lt || (Lt = vl(Mi));
}
function _c() {
  return Lt = ir ? Lt : Sl(Mi), ir = !0, Lt;
}
const jc = ((...e) => {
  const t = mc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = Pi(n);
    if (!r) return;
    const i = t._component;
    !j(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, Oi(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
}), Vc = ((...e) => {
  const t = _c().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = Pi(n);
    if (r)
      return s(r, !0, Oi(r));
  }, t;
});
function Oi(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Pi(e) {
  return ne(e) ? document.querySelector(e) : e;
}
let or = !1;
const Bc = () => {
  or || (or = !0, gc());
};
export {
  Fo as $,
  Ac as A,
  Bc as B,
  ue as C,
  Lc as D,
  Cl as E,
  Ee as F,
  Vc as G,
  Oc as H,
  So as I,
  yo as J,
  un as K,
  ns as L,
  Hl as M,
  He as N,
  $l as O,
  il as P,
  Mc as Q,
  Ns as R,
  Ft as S,
  ut as T,
  Oo as U,
  Rc as V,
  wl as W,
  Wr as X,
  Gr as Y,
  yi as Z,
  Dc as _,
  he as a,
  Ic as a0,
  Zi as a1,
  $c as a2,
  Nc as a3,
  Fc as a4,
  xi as a5,
  ol as b,
  jc as c,
  Pc as d,
  j as e,
  ne as f,
  ms as g,
  wc as h,
  cr as i,
  Ec as j,
  N as k,
  xc as l,
  Ol as m,
  Tt as n,
  Wt as o,
  nn as p,
  sn as q,
  bc as r,
  Hc as s,
  Cc as t,
  yc as u,
  Tc as v,
  vc as w,
  dr as x,
  Sc as y,
  Q as z
};
