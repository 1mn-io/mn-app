// @__NO_SIDE_EFFECTS__
function St(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const te = {}, gt = [], Ne = () => {
}, ir = () => !1, Kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xs = (e) => e.startsWith("onUpdate:"), le = Object.assign, Qs = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Oi = Object.prototype.hasOwnProperty, X = (e, t) => Oi.call(e, t), D = Array.isArray, mt = (e) => Wt(e) === "[object Map]", Zs = (e) => Wt(e) === "[object Set]", Sn = (e) => Wt(e) === "[object Date]", B = (e) => typeof e == "function", ie = (e) => typeof e == "string", De = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", or = (e) => (Z(e) || B(e)) && B(e.then) && B(e.catch), lr = Object.prototype.toString, Wt = (e) => lr.call(e), Pi = (e) => Wt(e).slice(8, -1), cr = (e) => Wt(e) === "[object Object]", zs = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _t = /* @__PURE__ */ St(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ps = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, Ri = /-\w/g, Ze = ps(
  (e) => e.replace(Ri, (t) => t.slice(1).toUpperCase())
), Fi = /\B([A-Z])/g, tt = ps(
  (e) => e.replace(Fi, "-$1").toLowerCase()
), fr = ps((e) => e.charAt(0).toUpperCase() + e.slice(1)), Cs = ps(
  (e) => e ? `on${fr(e)}` : ""
), Qe = (e, t) => !Object.is(e, t), Es = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, ur = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Ii = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Li = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Tn;
const gs = () => Tn || (Tn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function en(e) {
  if (D(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = ie(n) ? $i(n) : en(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ie(e) || Z(e))
    return e;
}
const Ni = /;(?![^(]*\))/g, Di = /:([^]+)/, Hi = /\/\*[^]*?\*\//g;
function $i(e) {
  const t = {};
  return e.replace(Hi, "").split(Ni).forEach((s) => {
    if (s) {
      const n = s.split(Di);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function gc(e) {
  if (!e) return "";
  if (ie(e)) return e;
  let t = "";
  for (const s in e) {
    const n = e[s];
    if (ie(n) || typeof n == "number") {
      const r = s.startsWith("--") ? s : tt(s);
      t += `${r}:${n};`;
    }
  }
  return t;
}
function tn(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (D(e))
    for (let s = 0; s < e.length; s++) {
      const n = tn(e[s]);
      n && (t += n + " ");
    }
  else if (Z(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const ji = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Bi = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", mc = /* @__PURE__ */ St(ji), _c = /* @__PURE__ */ St(Bi), ar = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Vi = /* @__PURE__ */ St(ar), bc = /* @__PURE__ */ St(
  ar + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function hr(e) {
  return !!e || e === "";
}
const Ui = /[>/="'\u0009\u000a\u000c\u0020]/, ws = {};
function yc(e) {
  if (ws.hasOwnProperty(e))
    return ws[e];
  const t = Ui.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), ws[e] = !t;
}
const xc = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function vc(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const Ki = /["'&<>]/;
function Sc(e) {
  const t = "" + e, s = Ki.exec(t);
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
const Wi = /^-?>|<!--|-->|--!>|<!-$/g;
function Tc(e) {
  return e.replace(Wi, "");
}
function ki(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = ms(e[n], t[n]);
  return s;
}
function ms(e, t) {
  if (e === t) return !0;
  let s = Sn(e), n = Sn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = De(e), n = De(t), s || n)
    return e === t;
  if (s = D(e), n = D(t), s || n)
    return s && n ? ki(e, t) : !1;
  if (s = Z(e), n = Z(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), f = t.hasOwnProperty(o);
      if (l && !f || !l && f || !ms(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Gi(e, t) {
  return e.findIndex((s) => ms(s, t));
}
const dr = (e) => !!(e && e.__v_isRef === !0), qi = (e) => ie(e) ? e : e == null ? "" : D(e) || Z(e) && (e.toString === lr || !B(e.toString)) ? dr(e) ? qi(e.value) : JSON.stringify(e, pr, 2) : String(e), pr = (e, t) => dr(t) ? pr(e, t.value) : mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[As(n, i) + " =>"] = r, s),
    {}
  )
} : Zs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => As(s))
} : De(t) ? As(t) : Z(t) && !D(t) && !cr(t) ? String(t) : t, As = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    De(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
function Cc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let _e;
class Ji {
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
function Yi() {
  return _e;
}
let ee;
const Ms = /* @__PURE__ */ new WeakSet();
class gr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _e && _e.active && _e.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ms.has(this) && (Ms.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _r(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Cn(this), br(this);
    const t = ee, s = Ae;
    ee = this, Ae = !0;
    try {
      return this.fn();
    } finally {
      yr(this), ee = t, Ae = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        rn(t);
      this.deps = this.depsTail = void 0, Cn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ms.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $s(this) && this.run();
  }
  get dirty() {
    return $s(this);
  }
}
let mr = 0, Mt, Ot;
function _r(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ot, Ot = e;
    return;
  }
  e.next = Mt, Mt = e;
}
function sn() {
  mr++;
}
function nn() {
  if (--mr > 0)
    return;
  if (Ot) {
    let t = Ot;
    for (Ot = void 0; t; ) {
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
function br(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function yr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), rn(n), Xi(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function $s(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (xr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function xr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === It) || (e.globalVersion = It, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !$s(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = ee, n = Ae;
  ee = e, Ae = !0;
  try {
    br(e);
    const r = e.fn(e._value);
    (t.version === 0 || Qe(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    ee = s, Ae = n, yr(e), e.flags &= -3;
  }
}
function rn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      rn(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Xi(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Ae = !0;
const vr = [];
function Ue() {
  vr.push(Ae), Ae = !1;
}
function Ke() {
  const e = vr.pop();
  Ae = e === void 0 ? !0 : e;
}
function Cn(e) {
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
let It = 0;
class Qi {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class on {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ee || !Ae || ee === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== ee)
      s = this.activeLink = new Qi(ee, this), ee.deps ? (s.prevDep = ee.depsTail, ee.depsTail.nextDep = s, ee.depsTail = s) : ee.deps = ee.depsTail = s, Sr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = ee.depsTail, s.nextDep = void 0, ee.depsTail.nextDep = s, ee.depsTail = s, ee.deps === s && (ee.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, It++, this.notify(t);
  }
  notify(t) {
    sn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      nn();
    }
  }
}
function Sr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Sr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const js = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ Symbol(
  ""
), Bs = /* @__PURE__ */ Symbol(
  ""
), Lt = /* @__PURE__ */ Symbol(
  ""
);
function fe(e, t, s) {
  if (Ae && ee) {
    let n = js.get(e);
    n || js.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new on()), r.map = n, r.key = s), r.track();
  }
}
function Ve(e, t, s, n, r, i) {
  const o = js.get(e);
  if (!o) {
    It++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (sn(), t === "clear")
    o.forEach(l);
  else {
    const f = D(e), h = f && zs(s);
    if (f && s === "length") {
      const a = Number(n);
      o.forEach((d, v) => {
        (v === "length" || v === Lt || !De(v) && v >= a) && l(d);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), h && l(o.get(Lt)), t) {
        case "add":
          f ? h && l(o.get("length")) : (l(o.get(ct)), mt(e) && l(o.get(Bs)));
          break;
        case "delete":
          f || (l(o.get(ct)), mt(e) && l(o.get(Bs)));
          break;
        case "set":
          mt(e) && l(o.get(ct));
          break;
      }
  }
  nn();
}
function ht(e) {
  const t = Y(e);
  return t === e ? t : (fe(t, "iterate", Lt), Me(e) ? t : t.map(We));
}
function ln(e) {
  return fe(e = Y(e), "iterate", Lt), e;
}
function qe(e, t) {
  return ze(e) ? ft(e) ? Nt(We(t)) : Nt(t) : We(t);
}
const Zi = {
  __proto__: null,
  [Symbol.iterator]() {
    return Os(this, Symbol.iterator, (e) => qe(this, e));
  },
  concat(...e) {
    return ht(this).concat(
      ...e.map((t) => D(t) ? ht(t) : t)
    );
  },
  entries() {
    return Os(this, "entries", (e) => (e[1] = qe(this, e[1]), e));
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
      (s) => s.map((n) => qe(this, n)),
      arguments
    );
  },
  find(e, t) {
    return He(
      this,
      "find",
      e,
      t,
      (s) => qe(this, s),
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
      (s) => qe(this, s),
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
    return Ps(this, "includes", e);
  },
  indexOf(...e) {
    return Ps(this, "indexOf", e);
  },
  join(e) {
    return ht(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ps(this, "lastIndexOf", e);
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
    return En(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return En(this, "reduceRight", e, t);
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
    return ht(this).toReversed();
  },
  toSorted(e) {
    return ht(this).toSorted(e);
  },
  toSpliced(...e) {
    return ht(this).toSpliced(...e);
  },
  unshift(...e) {
    return Et(this, "unshift", e);
  },
  values() {
    return Os(this, "values", (e) => qe(this, e));
  }
};
function Os(e, t, s) {
  const n = ln(e), r = n[t]();
  return n !== e && !Me(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const zi = Array.prototype;
function He(e, t, s, n, r, i) {
  const o = ln(e), l = o !== e && !Me(e), f = o[t];
  if (f !== zi[t]) {
    const d = f.apply(e, i);
    return l ? We(d) : d;
  }
  let h = s;
  o !== e && (l ? h = function(d, v) {
    return s.call(this, qe(e, d), v, e);
  } : s.length > 2 && (h = function(d, v) {
    return s.call(this, d, v, e);
  }));
  const a = f.call(o, h, n);
  return l && r ? r(a) : a;
}
function En(e, t, s, n) {
  const r = ln(e);
  let i = s;
  return r !== e && (Me(e) ? s.length > 3 && (i = function(o, l, f) {
    return s.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return s.call(this, o, qe(e, l), f, e);
  }), r[t](i, ...n);
}
function Ps(e, t, s) {
  const n = Y(e);
  fe(n, "iterate", Lt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && an(s[0]) ? (s[0] = Y(s[0]), n[t](...s)) : r;
}
function Et(e, t, s = []) {
  Ue(), sn();
  const n = Y(e)[t].apply(e, s);
  return nn(), Ke(), n;
}
const eo = /* @__PURE__ */ St("__proto__,__v_isRef,__isVue"), Tr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(De)
);
function to(e) {
  De(e) || (e = String(e));
  const t = Y(this);
  return fe(t, "has", e), t.hasOwnProperty(e);
}
class Cr {
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
      return n === (r ? i ? ao : Mr : i ? Ar : wr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = D(t);
    if (!r) {
      let f;
      if (o && (f = Zi[s]))
        return f;
      if (s === "hasOwnProperty")
        return to;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ae(t) ? t : n
    );
    if ((De(s) ? Tr.has(s) : eo(s)) || (r || fe(t, "get", s), i))
      return l;
    if (ae(l)) {
      const f = o && zs(s) ? l : l.value;
      return r && Z(f) ? Us(f) : f;
    }
    return Z(l) ? r ? Us(l) : fn(l) : l;
  }
}
class Er extends Cr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const o = D(t) && zs(s);
    if (!this._isShallow) {
      const h = ze(i);
      if (!Me(n) && !ze(n) && (i = Y(i), n = Y(n)), !o && ae(i) && !ae(n))
        return h || (i.value = n), !0;
    }
    const l = o ? Number(s) < t.length : X(t, s), f = Reflect.set(
      t,
      s,
      n,
      ae(t) ? t : r
    );
    return t === Y(r) && (l ? Qe(n, i) && Ve(t, "set", s, n) : Ve(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = X(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ve(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!De(s) || !Tr.has(s)) && fe(t, "has", s), n;
  }
  ownKeys(t) {
    return fe(
      t,
      "iterate",
      D(t) ? "length" : ct
    ), Reflect.ownKeys(t);
  }
}
class so extends Cr {
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
const no = /* @__PURE__ */ new Er(), ro = /* @__PURE__ */ new so(), io = /* @__PURE__ */ new Er(!0);
const Vs = (e) => e, Yt = (e) => Reflect.getPrototypeOf(e);
function oo(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = Y(r), o = mt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, h = r[e](...n), a = s ? Vs : t ? Nt : We;
    return !t && fe(
      i,
      "iterate",
      f ? Bs : ct
    ), {
      // iterator protocol
      next() {
        const { value: d, done: v } = h.next();
        return v ? { value: d, done: v } : {
          value: l ? [a(d[0]), a(d[1])] : a(d),
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
function Xt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function lo(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = Y(i), l = Y(r);
      e || (Qe(r, l) && fe(o, "get", r), fe(o, "get", l));
      const { has: f } = Yt(o), h = t ? Vs : e ? Nt : We;
      if (f.call(o, r))
        return h(i.get(r));
      if (f.call(o, l))
        return h(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && fe(Y(r), "iterate", ct), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = Y(i), l = Y(r);
      return e || (Qe(r, l) && fe(o, "has", r), fe(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, f = Y(l), h = t ? Vs : e ? Nt : We;
      return !e && fe(f, "iterate", ct), l.forEach((a, d) => r.call(i, h(a), h(d), o));
    }
  };
  return le(
    s,
    e ? {
      add: Xt("add"),
      set: Xt("set"),
      delete: Xt("delete"),
      clear: Xt("clear")
    } : {
      add(r) {
        !t && !Me(r) && !ze(r) && (r = Y(r));
        const i = Y(this);
        return Yt(i).has.call(i, r) || (i.add(r), Ve(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !Me(i) && !ze(i) && (i = Y(i));
        const o = Y(this), { has: l, get: f } = Yt(o);
        let h = l.call(o, r);
        h || (r = Y(r), h = l.call(o, r));
        const a = f.call(o, r);
        return o.set(r, i), h ? Qe(i, a) && Ve(o, "set", r, i) : Ve(o, "add", r, i), this;
      },
      delete(r) {
        const i = Y(this), { has: o, get: l } = Yt(i);
        let f = o.call(i, r);
        f || (r = Y(r), f = o.call(i, r)), l && l.call(i, r);
        const h = i.delete(r);
        return f && Ve(i, "delete", r, void 0), h;
      },
      clear() {
        const r = Y(this), i = r.size !== 0, o = r.clear();
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
    s[r] = oo(r, e, t);
  }), s;
}
function cn(e, t) {
  const s = lo(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    X(s, r) && r in n ? s : n,
    r,
    i
  );
}
const co = {
  get: /* @__PURE__ */ cn(!1, !1)
}, fo = {
  get: /* @__PURE__ */ cn(!1, !0)
}, uo = {
  get: /* @__PURE__ */ cn(!0, !1)
};
const wr = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), ao = /* @__PURE__ */ new WeakMap();
function ho(e) {
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
function po(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ho(Pi(e));
}
function fn(e) {
  return ze(e) ? e : un(
    e,
    !1,
    no,
    co,
    wr
  );
}
function go(e) {
  return un(
    e,
    !1,
    io,
    fo,
    Ar
  );
}
function Us(e) {
  return un(
    e,
    !0,
    ro,
    uo,
    Mr
  );
}
function un(e, t, s, n, r) {
  if (!Z(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = po(e);
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
function ft(e) {
  return ze(e) ? ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ze(e) {
  return !!(e && e.__v_isReadonly);
}
function Me(e) {
  return !!(e && e.__v_isShallow);
}
function an(e) {
  return e ? !!e.__v_raw : !1;
}
function Y(e) {
  const t = e && e.__v_raw;
  return t ? Y(t) : e;
}
function mo(e) {
  return !X(e, "__v_skip") && Object.isExtensible(e) && ur(e, "__v_skip", !0), e;
}
const We = (e) => Z(e) ? fn(e) : e, Nt = (e) => Z(e) ? Us(e) : e;
function ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ec(e) {
  return _o(e, !1);
}
function _o(e, t) {
  return ae(e) ? e : new bo(e, t);
}
class bo {
  constructor(t, s) {
    this.dep = new on(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : Y(t), this._value = s ? t : We(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || Me(t) || ze(t);
    t = n ? t : Y(t), Qe(t, s) && (this._rawValue = t, this._value = n ? t : We(t), this.dep.trigger());
  }
}
function yo(e) {
  return ae(e) ? e.value : e;
}
const xo = {
  get: (e, t, s) => t === "__v_raw" ? e : yo(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return ae(r) && !ae(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Or(e) {
  return ft(e) ? e : new Proxy(e, xo);
}
class vo {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new on(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = It - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ee !== this)
      return _r(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return xr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function So(e, t, s = !1) {
  let n, r;
  return B(e) ? n = e : (n = e.get, r = e.set), new vo(n, r, s);
}
const Qt = {}, ls = /* @__PURE__ */ new WeakMap();
let ot;
function To(e, t = !1, s = ot) {
  if (s) {
    let n = ls.get(s);
    n || ls.set(s, n = []), n.push(e);
  }
}
function Co(e, t, s = te) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = s, h = (m) => r ? m : Me(m) || r === !1 || r === 0 ? Xe(m, 1) : Xe(m);
  let a, d, v, w, N = !1, V = !1;
  if (ae(e) ? (d = () => e.value, N = Me(e)) : ft(e) ? (d = () => h(e), N = !0) : D(e) ? (V = !0, N = e.some((m) => ft(m) || Me(m)), d = () => e.map((m) => {
    if (ae(m))
      return m.value;
    if (ft(m))
      return h(m);
    if (B(m))
      return f ? f(m, 2) : m();
  })) : B(e) ? t ? d = f ? () => f(e, 2) : e : d = () => {
    if (v) {
      Ue();
      try {
        v();
      } finally {
        Ke();
      }
    }
    const m = ot;
    ot = a;
    try {
      return f ? f(e, 3, [w]) : e(w);
    } finally {
      ot = m;
    }
  } : d = Ne, t && r) {
    const m = d, M = r === !0 ? 1 / 0 : r;
    d = () => Xe(m(), M);
  }
  const ne = Yi(), W = () => {
    a.stop(), ne && ne.active && Qs(ne.effects, a);
  };
  if (i && t) {
    const m = t;
    t = (...M) => {
      m(...M), W();
    };
  }
  let q = V ? new Array(e.length).fill(Qt) : Qt;
  const g = (m) => {
    if (!(!(a.flags & 1) || !a.dirty && !m))
      if (t) {
        const M = a.run();
        if (r || N || (V ? M.some(($, U) => Qe($, q[U])) : Qe(M, q))) {
          v && v();
          const $ = ot;
          ot = a;
          try {
            const U = [
              M,
              // pass undefined as the old value when it's changed for the first time
              q === Qt ? void 0 : V && q[0] === Qt ? [] : q,
              w
            ];
            q = M, f ? f(t, 3, U) : (
              // @ts-expect-error
              t(...U)
            );
          } finally {
            ot = $;
          }
        }
      } else
        a.run();
  };
  return l && l(g), a = new gr(d), a.scheduler = o ? () => o(g, !1) : g, w = (m) => To(m, !1, a), v = a.onStop = () => {
    const m = ls.get(a);
    if (m) {
      if (f)
        f(m, 4);
      else
        for (const M of m) M();
      ls.delete(a);
    }
  }, t ? n ? g(!0) : q = a.run() : o ? o(g.bind(null, !0), !0) : a.run(), W.pause = a.pause.bind(a), W.resume = a.resume.bind(a), W.stop = W, W;
}
function Xe(e, t = 1 / 0, s) {
  if (t <= 0 || !Z(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, ae(e))
    Xe(e.value, t, s);
  else if (D(e))
    for (let n = 0; n < e.length; n++)
      Xe(e[n], t, s);
  else if (Zs(e) || mt(e))
    e.forEach((n) => {
      Xe(n, t, s);
    });
  else if (cr(e)) {
    for (const n in e)
      Xe(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Xe(e[n], t, s);
  }
  return e;
}
function kt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    _s(r, t, s);
  }
}
function Oe(e, t, s, n) {
  if (B(e)) {
    const r = kt(e, t, s, n);
    return r && or(r) && r.catch((i) => {
      _s(i, t, s);
    }), r;
  }
  if (D(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Oe(e[i], t, s, n));
    return r;
  }
}
function _s(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || te;
  if (t) {
    let l = t.parent;
    const f = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, f, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ue(), kt(i, null, 10, [
        e,
        f,
        h
      ]), Ke();
      return;
    }
  }
  Eo(e, s, r, n, o);
}
function Eo(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const de = [];
let Fe = -1;
const bt = [];
let Je = null, pt = 0;
const Pr = /* @__PURE__ */ Promise.resolve();
let cs = null;
function wo(e) {
  const t = cs || Pr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ao(e) {
  let t = Fe + 1, s = de.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = de[n], i = Dt(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function hn(e) {
  if (!(e.flags & 1)) {
    const t = Dt(e), s = de[de.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Dt(s) ? de.push(e) : de.splice(Ao(t), 0, e), e.flags |= 1, Rr();
  }
}
function Rr() {
  cs || (cs = Pr.then(Fr));
}
function Mo(e) {
  D(e) ? bt.push(...e) : Je && e.id === -1 ? Je.splice(pt + 1, 0, e) : e.flags & 1 || (bt.push(e), e.flags |= 1), Rr();
}
function wn(e, t, s = Fe + 1) {
  for (; s < de.length; s++) {
    const n = de[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      de.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function fs(e) {
  if (bt.length) {
    const t = [...new Set(bt)].sort(
      (s, n) => Dt(s) - Dt(n)
    );
    if (bt.length = 0, Je) {
      Je.push(...t);
      return;
    }
    for (Je = t, pt = 0; pt < Je.length; pt++) {
      const s = Je[pt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Je = null, pt = 0;
  }
}
const Dt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Fr(e) {
  try {
    for (Fe = 0; Fe < de.length; Fe++) {
      const t = de[Fe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), kt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Fe < de.length; Fe++) {
      const t = de[Fe];
      t && (t.flags &= -2);
    }
    Fe = -1, de.length = 0, fs(), cs = null, (de.length || bt.length) && Fr();
  }
}
let Le = null, Ir = null;
function Ht(e) {
  const t = Le;
  return Le = e, Ir = e && e.type.__scopeId || null, t;
}
function Oo(e, t = Le, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && hs(-1);
    const i = Ht(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Ht(i), n._d && hs(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ie(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[n];
    f && (Ue(), Oe(f, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Ke());
  }
}
function Po(e, t) {
  if (pe) {
    let s = pe.provides;
    const n = pe.parent && pe.parent.provides;
    n === s && (s = pe.provides = Object.create(n)), s[e] = t;
  }
}
function ss(e, t, s = !1) {
  const n = bi();
  if (n || vt) {
    let r = vt ? vt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && B(t) ? t.call(n && n.proxy) : t;
  }
}
const Ro = /* @__PURE__ */ Symbol.for("v-scx"), Fo = () => ss(Ro);
function Rs(e, t, s) {
  return Lr(e, t, s);
}
function Lr(e, t, s = te) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = le({}, s), f = t && n || !t && i !== "post";
  let h;
  if (Vt) {
    if (i === "sync") {
      const w = Fo();
      h = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!f) {
      const w = () => {
      };
      return w.stop = Ne, w.resume = Ne, w.pause = Ne, w;
    }
  }
  const a = pe;
  l.call = (w, N, V) => Oe(w, a, N, V);
  let d = !1;
  i === "post" ? l.scheduler = (w) => {
    xe(w, a && a.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (w, N) => {
    N ? w() : hn(w);
  }), l.augmentJob = (w) => {
    t && (w.flags |= 4), d && (w.flags |= 2, a && (w.id = a.uid, w.i = a));
  };
  const v = Co(e, t, l);
  return Vt && (h ? h.push(v) : f && v()), v;
}
function Io(e, t, s) {
  const n = this.proxy, r = ie(e) ? e.includes(".") ? Nr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  B(t) ? i = t : (i = t.handler, s = t);
  const o = Gt(this), l = Lr(r, i.bind(n), s);
  return o(), l;
}
function Nr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const Lo = /* @__PURE__ */ Symbol("_vte"), Dr = (e) => e.__isTeleport, Be = /* @__PURE__ */ Symbol("_leaveCb"), Zt = /* @__PURE__ */ Symbol("_enterCb");
function No() {
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
const Ce = [Function, Array], Hr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ce,
  onEnter: Ce,
  onAfterEnter: Ce,
  onEnterCancelled: Ce,
  // leave
  onBeforeLeave: Ce,
  onLeave: Ce,
  onAfterLeave: Ce,
  onLeaveCancelled: Ce,
  // appear
  onBeforeAppear: Ce,
  onAppear: Ce,
  onAfterAppear: Ce,
  onAppearCancelled: Ce
}, $r = (e) => {
  const t = e.subTree;
  return t.component ? $r(t.component) : t;
}, Do = {
  name: "BaseTransition",
  props: Hr,
  setup(e, { slots: t }) {
    const s = bi(), n = No();
    return () => {
      const r = t.default && Vr(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = jr(r), o = Y(e), { mode: l } = o;
      if (n.isLeaving)
        return Fs(i);
      const f = An(i);
      if (!f)
        return Fs(i);
      let h = Ks(
        f,
        o,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (d) => h = d
      );
      f.type !== ue && $t(f, h);
      let a = s.subTree && An(s.subTree);
      if (a && a.type !== ue && !lt(a, f) && $r(s).type !== ue) {
        let d = Ks(
          a,
          o,
          n,
          s
        );
        if ($t(a, d), l === "out-in" && f.type !== ue)
          return n.isLeaving = !0, d.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete d.afterLeave, a = void 0;
          }, Fs(i);
        l === "in-out" && f.type !== ue ? d.delayLeave = (v, w, N) => {
          const V = Br(
            n,
            a
          );
          V[String(a.key)] = a, v[Be] = () => {
            w(), v[Be] = void 0, delete h.delayedLeave, a = void 0;
          }, h.delayedLeave = () => {
            N(), delete h.delayedLeave, a = void 0;
          };
        } : a = void 0;
      } else a && (a = void 0);
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
const Ho = Do;
function Br(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function Ks(e, t, s, n, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: f,
    onEnter: h,
    onAfterEnter: a,
    onEnterCancelled: d,
    onBeforeLeave: v,
    onLeave: w,
    onAfterLeave: N,
    onLeaveCancelled: V,
    onBeforeAppear: ne,
    onAppear: W,
    onAfterAppear: q,
    onAppearCancelled: g
  } = t, m = String(e.key), M = Br(s, e), $ = (P, O) => {
    P && Oe(
      P,
      n,
      9,
      O
    );
  }, U = (P, O) => {
    const K = O[1];
    $(P, O), D(P) ? P.every((T) => T.length <= 1) && K() : P.length <= 1 && K();
  }, k = {
    mode: o,
    persisted: l,
    beforeEnter(P) {
      let O = f;
      if (!s.isMounted)
        if (i)
          O = ne || f;
        else
          return;
      P[Be] && P[Be](
        !0
        /* cancelled */
      );
      const K = M[m];
      K && lt(e, K) && K.el[Be] && K.el[Be](), $(O, [P]);
    },
    enter(P) {
      let O = h, K = a, T = d;
      if (!s.isMounted)
        if (i)
          O = W || h, K = q || a, T = g || d;
        else
          return;
      let j = !1;
      const se = P[Zt] = (oe) => {
        j || (j = !0, oe ? $(T, [P]) : $(K, [P]), k.delayedLeave && k.delayedLeave(), P[Zt] = void 0);
      };
      O ? U(O, [P, se]) : se();
    },
    leave(P, O) {
      const K = String(e.key);
      if (P[Zt] && P[Zt](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return O();
      $(v, [P]);
      let T = !1;
      const j = P[Be] = (se) => {
        T || (T = !0, O(), se ? $(V, [P]) : $(N, [P]), P[Be] = void 0, M[K] === e && delete M[K]);
      };
      M[K] = e, w ? U(w, [P, j]) : j();
    },
    clone(P) {
      const O = Ks(
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
function Fs(e) {
  if (bs(e))
    return e = et(e), e.children = null, e;
}
function An(e) {
  if (!bs(e))
    return Dr(e.type) && e.children ? jr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && B(s.default))
      return s.default();
  }
}
function $t(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, $t(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Vr(e, t = !1, s) {
  let n = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = s == null ? o.key : String(s) + String(o.key != null ? o.key : i);
    o.type === ve ? (o.patchFlag & 128 && r++, n = n.concat(
      Vr(o.children, t, l)
    )) : (t || o.type !== ue) && n.push(l != null ? et(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function wc(e, t) {
  return B(e) ? (
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
  if (D(e)) {
    e.forEach(
      (N, V) => yt(
        N,
        t && (D(t) ? t[V] : t),
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
  const i = n.shapeFlag & 4 ? mn(n.component) : n.el, o = r ? null : i, { i: l, r: f } = e, h = t && t.r, a = l.refs === te ? l.refs = {} : l.refs, d = l.setupState, v = Y(d), w = d === te ? ir : (N) => X(v, N);
  if (h != null && h !== f) {
    if (Mn(t), ie(h))
      a[h] = null, w(h) && (d[h] = null);
    else if (ae(h)) {
      h.value = null;
      const N = t;
      N.k && (a[N.k] = null);
    }
  }
  if (B(f))
    kt(f, l, 12, [o, a]);
  else {
    const N = ie(f), V = ae(f);
    if (N || V) {
      const ne = () => {
        if (e.f) {
          const W = N ? w(f) ? d[f] : a[f] : f.value;
          if (r)
            D(W) && Qs(W, i);
          else if (D(W))
            W.includes(i) || W.push(i);
          else if (N)
            a[f] = [i], w(f) && (d[f] = a[f]);
          else {
            const q = [i];
            f.value = q, e.k && (a[e.k] = q);
          }
        } else N ? (a[f] = o, w(f) && (d[f] = o)) : V && (f.value = o, e.k && (a[e.k] = o));
      };
      if (o) {
        const W = () => {
          ne(), us.delete(e);
        };
        W.id = -1, us.set(e, W), xe(W, s);
      } else
        Mn(e), ne();
    }
  }
}
function Mn(e) {
  const t = us.get(e);
  t && (t.flags |= 8, us.delete(e));
}
let On = !1;
const dt = () => {
  On || (console.error("Hydration completed but contains mismatches."), On = !0);
}, $o = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", jo = (e) => e.namespaceURI.includes("MathML"), zt = (e) => {
  if (e.nodeType === 1) {
    if ($o(e)) return "svg";
    if (jo(e)) return "mathml";
  }
}, es = (e) => e.nodeType === 8;
function Bo(e) {
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
  } = e, a = (g, m) => {
    if (!m.hasChildNodes()) {
      s(null, g, m), fs(), m._vnode = g;
      return;
    }
    d(m.firstChild, g, null, null, null), fs(), m._vnode = g;
  }, d = (g, m, M, $, U, k = !1) => {
    k = k || !!m.dynamicChildren;
    const P = es(g) && g.data === "[", O = () => V(
      g,
      m,
      M,
      $,
      U,
      P
    ), { type: K, ref: T, shapeFlag: j, patchFlag: se } = m;
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
      case rs:
        if (P && (g = i(g), oe = g.nodeType), oe === 1 || oe === 3) {
          I = g;
          const G = !m.children.length;
          for (let R = 0; R < m.staticCount; R++)
            G && (m.children += I.nodeType === 1 ? I.outerHTML : I.data), R === m.staticCount - 1 && (m.anchor = I), I = i(I);
          return P ? i(I) : I;
        } else
          O();
        break;
      case ve:
        P ? I = N(
          g,
          m,
          M,
          $,
          U,
          k
        ) : I = O();
        break;
      default:
        if (j & 1)
          (oe !== 1 || m.type.toLowerCase() !== g.tagName.toLowerCase()) && !q(g) ? I = O() : I = v(
            g,
            m,
            M,
            $,
            U,
            k
          );
        else if (j & 6) {
          m.slotScopeIds = U;
          const G = o(g);
          if (P ? I = ne(g) : es(g) && g.data === "teleport start" ? I = ne(g, g.data, "teleport end") : I = i(g), t(
            m,
            G,
            null,
            M,
            $,
            zt(G),
            k
          ), xt(m) && !m.type.__asyncResolved) {
            let R;
            P ? (R = ge(ve), R.anchor = I ? I.previousSibling : G.lastChild) : R = g.nodeType === 3 ? mi("") : ge("div"), R.el = g, m.component.subTree = R;
          }
        } else j & 64 ? oe !== 8 ? I = O() : I = m.type.hydrate(
          g,
          m,
          M,
          $,
          U,
          k,
          e,
          w
        ) : j & 128 && (I = m.type.hydrate(
          g,
          m,
          M,
          $,
          zt(o(g)),
          U,
          k,
          e,
          d
        ));
    }
    return T != null && yt(T, null, $, m), I;
  }, v = (g, m, M, $, U, k) => {
    k = k || !!m.dynamicChildren;
    const { type: P, props: O, patchFlag: K, shapeFlag: T, dirs: j, transition: se } = m, oe = P === "input" || P === "option";
    if (oe || K !== -1) {
      j && Ie(m, null, M, "created");
      let I = !1;
      if (q(g)) {
        I = li(
          null,
          // no need check parentSuspense in hydration
          se
        ) && M && M.vnode.props && M.vnode.props.appear;
        const R = g.content.firstChild;
        if (I) {
          const re = R.getAttribute("class");
          re && (R.$cls = re), se.beforeEnter(R);
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
          ts(
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
`) && (ts(
          g,
          0
          /* TEXT */
        ) || dt(), g.textContent = m.children);
      }
      if (O) {
        if (oe || !k || K & 48) {
          const R = g.tagName.includes("-");
          for (const re in O)
            (oe && (re.endsWith("value") || re === "indeterminate") || Kt(re) && !_t(re) || // force hydrate v-bind with .prop modifiers
            re[0] === "." || R) && n(g, re, null, O[re], void 0, M);
        } else if (O.onClick)
          n(
            g,
            "onClick",
            null,
            O.onClick,
            void 0,
            M
          );
        else if (K & 4 && ft(O.style))
          for (const R in O.style) O.style[R];
      }
      let G;
      (G = O && O.onVnodeBeforeMount) && Ee(G, M, m), j && Ie(m, null, M, "beforeMount"), ((G = O && O.onVnodeMounted) || j || I) && hi(() => {
        G && Ee(G, M, m), I && se.enter(g), j && Ie(m, null, M, "mounted");
      }, $);
    }
    return g.nextSibling;
  }, w = (g, m, M, $, U, k, P) => {
    P = P || !!m.dynamicChildren;
    const O = m.children, K = O.length;
    for (let T = 0; T < K; T++) {
      const j = P ? O[T] : O[T] = Se(O[T]), se = j.type === ut;
      g ? (se && !P && T + 1 < K && Se(O[T + 1]).type === ut && (f(
        r(
          g.data.slice(j.children.length)
        ),
        M,
        i(g)
      ), g.data = j.children), g = d(
        g,
        j,
        $,
        U,
        k,
        P
      )) : se && !j.children ? f(j.el = r(""), M) : (ts(
        M,
        1
        /* CHILDREN */
      ) || dt(), s(
        null,
        j,
        M,
        null,
        $,
        U,
        zt(M),
        k
      ));
    }
    return g;
  }, N = (g, m, M, $, U, k) => {
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
    return K && es(K) && K.data === "]" ? i(m.anchor = K) : (dt(), f(m.anchor = h("]"), O, K), K);
  }, V = (g, m, M, $, U, k) => {
    if (ts(
      g.parentElement,
      1
      /* CHILDREN */
    ) || dt(), m.el = null, k) {
      const K = ne(g);
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
      zt(O),
      U
    ), M && (M.vnode.el = m.el, Qr(M, m.el)), P;
  }, ne = (g, m = "[", M = "]") => {
    let $ = 0;
    for (; g; )
      if (g = i(g), g && es(g) && (g.data === m && $++, g.data === M)) {
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
  return [a, d];
}
const Pn = "data-allow-mismatch", Vo = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function ts(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Pn); )
      e = e.parentElement;
  const s = e && e.getAttribute(Pn);
  if (s == null)
    return !1;
  if (s === "")
    return !0;
  {
    const n = s.split(",");
    return t === 0 && n.includes("children") ? !0 : n.includes(Vo[t]);
  }
}
gs().requestIdleCallback;
gs().cancelIdleCallback;
const xt = (e) => !!e.type.__asyncLoader, bs = (e) => e.type.__isKeepAlive;
function Uo(e, t) {
  Kr(e, "a", t);
}
function Ko(e, t) {
  Kr(e, "da", t);
}
function Kr(e, t, s = pe) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ys(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      bs(r.parent.vnode) && Wo(n, t, s, r), r = r.parent;
  }
}
function Wo(e, t, s, n) {
  const r = ys(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Gr(() => {
    Qs(n[t], r);
  }, s);
}
function ys(e, t, s = pe, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ue();
      const l = Gt(s), f = Oe(t, s, e, o);
      return l(), Ke(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const ke = (e) => (t, s = pe) => {
  (!Vt || e === "sp") && ys(e, (...n) => t(...n), s);
}, ko = ke("bm"), Wr = ke("m"), Go = ke(
  "bu"
), qo = ke("u"), kr = ke(
  "bum"
), Gr = ke("um"), Jo = ke(
  "sp"
), Yo = ke("rtg"), Xo = ke("rtc");
function Qo(e, t = pe) {
  ys("ec", e, t);
}
const Zo = /* @__PURE__ */ Symbol.for("v-ndc"), Ws = (e) => e ? yi(e) ? mn(e) : Ws(e.parent) : null, Pt = (
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
    $parent: (e) => Ws(e.parent),
    $root: (e) => Ws(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Jr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      hn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = wo.bind(e.proxy)),
    $watch: (e) => Io.bind(e)
  })
), Is = (e, t) => e !== te && !e.__isScriptSetup && X(e, t), zo = {
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
        if (Is(n, t))
          return o[t] = 1, n[t];
        if (r !== te && X(r, t))
          return o[t] = 2, r[t];
        if (X(i, t))
          return o[t] = 3, i[t];
        if (s !== te && X(s, t))
          return o[t] = 4, s[t];
        ks && (o[t] = 0);
      }
    }
    const h = Pt[t];
    let a, d;
    if (h)
      return t === "$attrs" && fe(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
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
    return Is(r, t) ? (r[t] = s, !0) : n !== te && X(n, t) ? (n[t] = s, !0) : X(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let f;
    return !!(s[l] || e !== te && l[0] !== "$" && X(e, l) || Is(t, l) || X(i, l) || X(n, l) || X(Pt, l) || X(r.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : X(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Rn(e) {
  return D(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let ks = !0;
function el(e) {
  const t = Jr(e), s = e.proxy, n = e.ctx;
  ks = !1, t.beforeCreate && Fn(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: h,
    // lifecycle
    created: a,
    beforeMount: d,
    mounted: v,
    beforeUpdate: w,
    updated: N,
    activated: V,
    deactivated: ne,
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
    directives: j,
    filters: se
  } = t;
  if (h && tl(h, n, null), o)
    for (const G in o) {
      const R = o[G];
      B(R) && (n[G] = R.bind(s));
    }
  if (r) {
    const G = r.call(s, s);
    Z(G) && (e.data = fn(G));
  }
  if (ks = !0, i)
    for (const G in i) {
      const R = i[G], re = B(R) ? R.bind(s, s) : B(R.get) ? R.get.bind(s, s) : Ne, qt = !B(R) && B(R.set) ? R.set.bind(s) : Ne, st = Ll({
        get: re,
        set: qt
      });
      Object.defineProperty(n, G, {
        enumerable: !0,
        configurable: !0,
        get: () => st.value,
        set: (Pe) => st.value = Pe
      });
    }
  if (l)
    for (const G in l)
      qr(l[G], n, s, G);
  if (f) {
    const G = B(f) ? f.call(s) : f;
    Reflect.ownKeys(G).forEach((R) => {
      Po(R, G[R]);
    });
  }
  a && Fn(a, e, "c");
  function I(G, R) {
    D(R) ? R.forEach((re) => G(re.bind(s))) : R && G(R.bind(s));
  }
  if (I(ko, d), I(Wr, v), I(Go, w), I(qo, N), I(Uo, V), I(Ko, ne), I(Qo, k), I(Xo, $), I(Yo, U), I(kr, q), I(Gr, m), I(Jo, P), D(O))
    if (O.length) {
      const G = e.exposed || (e.exposed = {});
      O.forEach((R) => {
        Object.defineProperty(G, R, {
          get: () => s[R],
          set: (re) => s[R] = re,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === Ne && (e.render = M), K != null && (e.inheritAttrs = K), T && (e.components = T), j && (e.directives = j), P && Ur(e);
}
function tl(e, t, s = Ne) {
  D(e) && (e = Gs(e));
  for (const n in e) {
    const r = e[n];
    let i;
    Z(r) ? "default" in r ? i = ss(
      r.from || n,
      r.default,
      !0
    ) : i = ss(r.from || n) : i = ss(r), ae(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function Fn(e, t, s) {
  Oe(
    D(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function qr(e, t, s, n) {
  let r = n.includes(".") ? Nr(s, n) : () => s[n];
  if (ie(e)) {
    const i = t[e];
    B(i) && Rs(r, i);
  } else if (B(e))
    Rs(r, e.bind(s));
  else if (Z(e))
    if (D(e))
      e.forEach((i) => qr(i, t, s, n));
    else {
      const i = B(e.handler) ? e.handler.bind(s) : t[e.handler];
      B(i) && Rs(r, i, e);
    }
}
function Jr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (h) => as(f, h, o, !0)
  ), as(f, t, o)), Z(t) && i.set(t, f), f;
}
function as(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && as(e, i, s, !0), r && r.forEach(
    (o) => as(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = sl[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const sl = {
  data: In,
  props: Ln,
  emits: Ln,
  // objects
  methods: At,
  computed: At,
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
  components: At,
  directives: At,
  // watch
  watch: rl,
  // provide / inject
  provide: In,
  inject: nl
};
function In(e, t) {
  return t ? e ? function() {
    return le(
      B(e) ? e.call(this, this) : e,
      B(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function nl(e, t) {
  return At(Gs(e), Gs(t));
}
function Gs(e) {
  if (D(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function At(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ln(e, t) {
  return e ? D(e) && D(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    Rn(e),
    Rn(t ?? {})
  ) : t;
}
function rl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = le(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = he(e[n], t[n]);
  return s;
}
function Yr() {
  return {
    app: null,
    config: {
      isNativeTag: ir,
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
  return function(n, r = null) {
    B(n) || (n = le({}, n)), r != null && !Z(r) && (r = null);
    const i = Yr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const h = i.app = {
      _uid: il++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Dl,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return o.has(a) || (a && B(a.install) ? (o.add(a), a.install(h, ...d)) : B(a) && (o.add(a), a(h, ...d))), h;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), h;
      },
      component(a, d) {
        return d ? (i.components[a] = d, h) : i.components[a];
      },
      directive(a, d) {
        return d ? (i.directives[a] = d, h) : i.directives[a];
      },
      mount(a, d, v) {
        if (!f) {
          const w = h._ceVNode || ge(n, r);
          return w.appContext = i, v === !0 ? v = "svg" : v === !1 && (v = void 0), d && t ? t(w, a) : e(w, a, v), f = !0, h._container = a, a.__vue_app__ = h, mn(w.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        f && (Oe(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(a, d) {
        return i.provides[a] = d, h;
      },
      runWithContext(a) {
        const d = vt;
        vt = h;
        try {
          return a();
        } finally {
          vt = d;
        }
      }
    };
    return h;
  };
}
let vt = null;
const ll = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ze(t)}Modifiers`] || e[`${tt(t)}Modifiers`];
function cl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || te;
  let r = s;
  const i = t.startsWith("update:"), o = i && ll(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => ie(a) ? a.trim() : a)), o.number && (r = s.map(Ii)));
  let l, f = n[l = Cs(t)] || // also try camelCase event handler (#2249)
  n[l = Cs(Ze(t))];
  !f && i && (f = n[l = Cs(tt(t))]), f && Oe(
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
    e.emitted[l] = !0, Oe(
      h,
      e,
      6,
      r
    );
  }
}
const fl = /* @__PURE__ */ new WeakMap();
function Xr(e, t, s = !1) {
  const n = s ? fl : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!B(e)) {
    const f = (h) => {
      const a = Xr(h, t, !0);
      a && (l = !0, le(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (Z(e) && n.set(e, null), null) : (D(i) ? i.forEach((f) => o[f] = null) : le(o, i), Z(e) && n.set(e, o), o);
}
function xs(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), X(e, t[0].toLowerCase() + t.slice(1)) || X(e, tt(t)) || X(e, t));
}
function ns(e) {
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
    renderCache: a,
    props: d,
    data: v,
    setupState: w,
    ctx: N,
    inheritAttrs: V
  } = e, ne = Ht(e);
  let W, q;
  try {
    if (s.shapeFlag & 4) {
      const m = r || n, M = m;
      W = Se(
        h.call(
          M,
          m,
          a,
          d,
          w,
          v,
          N
        )
      ), q = l;
    } else {
      const m = t;
      W = Se(
        m.length > 1 ? m(
          d,
          { attrs: l, slots: o, emit: f }
        ) : m(
          d,
          null
        )
      ), q = t.props ? l : ul(l);
    }
  } catch (m) {
    Rt.length = 0, _s(m, e, 1), W = ge(ue);
  }
  let g = W;
  if (q && V !== !1) {
    const m = Object.keys(q), { shapeFlag: M } = g;
    m.length && M & 7 && (i && m.some(Xs) && (q = al(
      q,
      i
    )), g = et(g, q, !1, !0));
  }
  return s.dirs && (g = et(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(s.dirs) : s.dirs), s.transition && $t(g, s.transition), W = g, Ht(ne), W;
}
const ul = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Kt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, al = (e, t) => {
  const s = {};
  for (const n in e)
    (!Xs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function hl(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? Nn(n, o, h) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        const v = a[d];
        if (o[v] !== n[v] && !xs(h, v))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? Nn(n, o, h) : !0 : !!o;
  return !1;
}
function Nn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !xs(s, i))
      return !0;
  }
  return !1;
}
function Qr({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Zr = {}, zr = () => Object.create(Zr), ei = (e) => Object.getPrototypeOf(e) === Zr;
function dl(e, t, s, n = !1) {
  const r = {}, i = zr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ti(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : go(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function pl(e, t, s, n) {
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
      const a = e.vnode.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        let v = a[d];
        if (xs(e.emitsOptions, v))
          continue;
        const w = t[v];
        if (f)
          if (X(i, v))
            w !== i[v] && (i[v] = w, h = !0);
          else {
            const N = Ze(v);
            r[N] = qs(
              f,
              l,
              N,
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
    ti(e, t, r, i) && (h = !0);
    let a;
    for (const d in l)
      (!t || // for camelCase
      !X(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = tt(d)) === d || !X(t, a))) && (f ? s && // for camelCase
      (s[d] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[d] = qs(
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
  h && Ve(e.attrs, "set", "");
}
function ti(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (_t(f))
        continue;
      const h = t[f];
      let a;
      r && X(r, a = Ze(f)) ? !i || !i.includes(a) ? s[a] = h : (l || (l = {}))[a] = h : xs(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, o = !0);
    }
  if (i) {
    const f = Y(s), h = l || te;
    for (let a = 0; a < i.length; a++) {
      const d = i[a];
      s[d] = qs(
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
function qs(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = X(o, "default");
    if (l && n === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && B(f)) {
        const { propsDefaults: h } = r;
        if (s in h)
          n = h[s];
        else {
          const a = Gt(r);
          n = h[s] = f.call(
            null,
            t
          ), a();
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
    ] && (n === "" || n === tt(s)) && (n = !0));
  }
  return n;
}
const gl = /* @__PURE__ */ new WeakMap();
function si(e, t, s = !1) {
  const n = s ? gl : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!B(e)) {
    const a = (d) => {
      f = !0;
      const [v, w] = si(d, t, !0);
      le(o, v), w && l.push(...w);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return Z(e) && n.set(e, gt), gt;
  if (D(i))
    for (let a = 0; a < i.length; a++) {
      const d = Ze(i[a]);
      Dn(d) && (o[d] = te);
    }
  else if (i)
    for (const a in i) {
      const d = Ze(a);
      if (Dn(d)) {
        const v = i[a], w = o[d] = D(v) || B(v) ? { type: v } : le({}, v), N = w.type;
        let V = !1, ne = !0;
        if (D(N))
          for (let W = 0; W < N.length; ++W) {
            const q = N[W], g = B(q) && q.name;
            if (g === "Boolean") {
              V = !0;
              break;
            } else g === "String" && (ne = !1);
          }
        else
          V = B(N) && N.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = V, w[
          1
          /* shouldCastTrue */
        ] = ne, (V || X(w, "default")) && l.push(d);
      }
    }
  const h = [o, l];
  return Z(e) && n.set(e, h), h;
}
function Dn(e) {
  return e[0] !== "$" && !_t(e);
}
const dn = (e) => e === "_" || e === "_ctx" || e === "$stable", pn = (e) => D(e) ? e.map(Se) : [Se(e)], ml = (e, t, s) => {
  if (t._n)
    return t;
  const n = Oo((...r) => pn(t(...r)), s);
  return n._c = !1, n;
}, ni = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (dn(r)) continue;
    const i = e[r];
    if (B(i))
      t[r] = ml(r, i, n);
    else if (i != null) {
      const o = pn(i);
      t[r] = () => o;
    }
  }
}, ri = (e, t) => {
  const s = pn(t);
  e.slots.default = () => s;
}, ii = (e, t, s) => {
  for (const n in t)
    (s || !dn(n)) && (e[n] = t[n]);
}, _l = (e, t, s) => {
  const n = e.slots = zr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (ii(n, t, s), s && ur(n, "_", r, !0)) : ni(t, n);
  } else t && ri(e, t);
}, bl = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = te;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : ii(r, t, s) : (i = !t.$stable, ni(t, r)), o = t;
  } else t && (ri(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !dn(l) && o[l] == null && delete r[l];
}, xe = hi;
function yl(e) {
  return oi(e);
}
function xl(e) {
  return oi(e, Bo);
}
function oi(e, t) {
  const s = gs();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: h,
    setElementText: a,
    parentNode: d,
    nextSibling: v,
    setScopeId: w = Ne,
    insertStaticContent: N
  } = e, V = (c, u, p, x = null, _ = null, b = null, E = void 0, C = null, S = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !lt(c, u) && (x = Jt(c), Pe(c, _, b, !0), c = null), u.patchFlag === -2 && (S = !1, u.dynamicChildren = null);
    const { type: y, ref: L, shapeFlag: A } = u;
    switch (y) {
      case ut:
        ne(c, u, p, x);
        break;
      case ue:
        W(c, u, p, x);
        break;
      case rs:
        c == null && q(u, p, x, E);
        break;
      case ve:
        T(
          c,
          u,
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
          u,
          p,
          x,
          _,
          b,
          E,
          C,
          S
        ) : A & 6 ? j(
          c,
          u,
          p,
          x,
          _,
          b,
          E,
          C,
          S
        ) : (A & 64 || A & 128) && y.process(
          c,
          u,
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
    L != null && _ ? yt(L, c && c.ref, b, u || c, !u) : L == null && c && c.ref != null && yt(c.ref, null, b, c, !0);
  }, ne = (c, u, p, x) => {
    if (c == null)
      n(
        u.el = l(u.children),
        p,
        x
      );
    else {
      const _ = u.el = c.el;
      u.children !== c.children && h(_, u.children);
    }
  }, W = (c, u, p, x) => {
    c == null ? n(
      u.el = f(u.children || ""),
      p,
      x
    ) : u.el = c.el;
  }, q = (c, u, p, x) => {
    [c.el, c.anchor] = N(
      c.children,
      u,
      p,
      x,
      c.el,
      c.anchor
    );
  }, g = ({ el: c, anchor: u }, p, x) => {
    let _;
    for (; c && c !== u; )
      _ = v(c), n(c, p, x), c = _;
    n(u, p, x);
  }, m = ({ el: c, anchor: u }) => {
    let p;
    for (; c && c !== u; )
      p = v(c), r(c), c = p;
    r(u);
  }, M = (c, u, p, x, _, b, E, C, S) => {
    if (u.type === "svg" ? E = "svg" : u.type === "math" && (E = "mathml"), c == null)
      $(
        u,
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
          u,
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
  }, $ = (c, u, p, x, _, b, E, C) => {
    let S, y;
    const { props: L, shapeFlag: A, transition: F, dirs: H } = c;
    if (S = c.el = o(
      c.type,
      b,
      L && L.is,
      L
    ), A & 8 ? a(S, c.children) : A & 16 && k(
      c.children,
      S,
      null,
      x,
      _,
      Ls(c, b),
      E,
      C
    ), H && Ie(c, null, x, "created"), U(S, c, c.scopeId, E, x), L) {
      for (const z in L)
        z !== "value" && !_t(z) && i(S, z, null, L[z], b, x);
      "value" in L && i(S, "value", null, L.value, b), (y = L.onVnodeBeforeMount) && Ee(y, x, c);
    }
    H && Ie(c, null, x, "beforeMount");
    const J = li(_, F);
    J && F.beforeEnter(S), n(S, u, p), ((y = L && L.onVnodeMounted) || J || H) && xe(() => {
      y && Ee(y, x, c), J && F.enter(S), H && Ie(c, null, x, "mounted");
    }, _);
  }, U = (c, u, p, x, _) => {
    if (p && w(c, p), x)
      for (let b = 0; b < x.length; b++)
        w(c, x[b]);
    if (_) {
      let b = _.subTree;
      if (u === b || ai(b.type) && (b.ssContent === u || b.ssFallback === u)) {
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
  }, k = (c, u, p, x, _, b, E, C, S = 0) => {
    for (let y = S; y < c.length; y++) {
      const L = c[y] = C ? Ye(c[y]) : Se(c[y]);
      V(
        null,
        L,
        u,
        p,
        x,
        _,
        b,
        E,
        C
      );
    }
  }, P = (c, u, p, x, _, b, E) => {
    const C = u.el = c.el;
    let { patchFlag: S, dynamicChildren: y, dirs: L } = u;
    S |= c.patchFlag & 16;
    const A = c.props || te, F = u.props || te;
    let H;
    if (p && nt(p, !1), (H = F.onVnodeBeforeUpdate) && Ee(H, p, u, c), L && Ie(u, c, p, "beforeUpdate"), p && nt(p, !0), (A.innerHTML && F.innerHTML == null || A.textContent && F.textContent == null) && a(C, ""), y ? O(
      c.dynamicChildren,
      y,
      C,
      p,
      x,
      Ls(u, _),
      b
    ) : E || R(
      c,
      u,
      C,
      null,
      p,
      x,
      Ls(u, _),
      b,
      !1
    ), S > 0) {
      if (S & 16)
        K(C, A, F, p, _);
      else if (S & 2 && A.class !== F.class && i(C, "class", null, F.class, _), S & 4 && i(C, "style", A.style, F.style, _), S & 8) {
        const J = u.dynamicProps;
        for (let z = 0; z < J.length; z++) {
          const Q = J[z], me = A[Q], ce = F[Q];
          (ce !== me || Q === "value") && i(C, Q, me, ce, _, p);
        }
      }
      S & 1 && c.children !== u.children && a(C, u.children);
    } else !E && y == null && K(C, A, F, p, _);
    ((H = F.onVnodeUpdated) || L) && xe(() => {
      H && Ee(H, p, u, c), L && Ie(u, c, p, "updated");
    }, x);
  }, O = (c, u, p, x, _, b, E) => {
    for (let C = 0; C < u.length; C++) {
      const S = c[C], y = u[C], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !lt(S, y) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? d(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      V(
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
  }, K = (c, u, p, x, _) => {
    if (u !== p) {
      if (u !== te)
        for (const b in u)
          !_t(b) && !(b in p) && i(
            c,
            b,
            u[b],
            null,
            _,
            x
          );
      for (const b in p) {
        if (_t(b)) continue;
        const E = p[b], C = u[b];
        E !== C && b !== "value" && i(c, b, C, E, _, x);
      }
      "value" in p && i(c, "value", u.value, p.value, _);
    }
  }, T = (c, u, p, x, _, b, E, C, S) => {
    const y = u.el = c ? c.el : l(""), L = u.anchor = c ? c.anchor : l("");
    let { patchFlag: A, dynamicChildren: F, slotScopeIds: H } = u;
    H && (C = C ? C.concat(H) : H), c == null ? (n(y, p, x), n(L, p, x), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      p,
      L,
      _,
      b,
      E,
      C,
      S
    )) : A > 0 && A & 64 && F && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === F.length ? (O(
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
    (u.key != null || _ && u === _.subTree) && ci(
      c,
      u,
      !0
      /* shallow */
    )) : R(
      c,
      u,
      p,
      L,
      _,
      b,
      E,
      C,
      S
    );
  }, j = (c, u, p, x, _, b, E, C, S) => {
    u.slotScopeIds = C, c == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      p,
      x,
      E,
      S
    ) : se(
      u,
      p,
      x,
      _,
      b,
      E,
      S
    ) : oe(c, u, S);
  }, se = (c, u, p, x, _, b, E) => {
    const C = c.component = _i(
      c,
      x,
      _
    );
    if (bs(c) && (C.ctx.renderer = at), xi(C, !1, E), C.asyncDep) {
      if (_ && _.registerDep(C, I, E), !c.el) {
        const S = C.subTree = ge(ue);
        W(null, S, u, p), c.placeholder = S.el;
      }
    } else
      I(
        C,
        c,
        u,
        p,
        _,
        b,
        E
      );
  }, oe = (c, u, p) => {
    const x = u.component = c.component;
    if (hl(c, u, p))
      if (x.asyncDep && !x.asyncResolved) {
        G(x, u, p);
        return;
      } else
        x.next = u, x.update();
    else
      u.el = c.el, x.vnode = u;
  }, I = (c, u, p, x, _, b, E) => {
    const C = () => {
      if (c.isMounted) {
        let { next: A, bu: F, u: H, parent: J, vnode: z } = c;
        {
          const be = fi(c);
          if (be) {
            A && (A.el = z.el, G(c, A, E)), be.asyncDep.then(() => {
              c.isUnmounted || C();
            });
            return;
          }
        }
        let Q = A, me;
        nt(c, !1), A ? (A.el = z.el, G(c, A, E)) : A = z, F && Es(F), (me = A.props && A.props.onVnodeBeforeUpdate) && Ee(me, J, A, z), nt(c, !0);
        const ce = ns(c), we = c.subTree;
        c.subTree = ce, V(
          we,
          ce,
          // parent may have changed if it's in a teleport
          d(we.el),
          // anchor may have changed if it's in a fragment
          Jt(we),
          c,
          _,
          b
        ), A.el = ce.el, Q === null && Qr(c, ce.el), H && xe(H, _), (me = A.props && A.props.onVnodeUpdated) && xe(
          () => Ee(me, J, A, z),
          _
        );
      } else {
        let A;
        const { el: F, props: H } = u, { bm: J, m: z, parent: Q, root: me, type: ce } = c, we = xt(u);
        if (nt(c, !1), J && Es(J), !we && (A = H && H.onVnodeBeforeMount) && Ee(A, Q, u), nt(c, !0), F && Ts) {
          const be = () => {
            c.subTree = ns(c), Ts(
              F,
              c.subTree,
              c,
              _,
              null
            );
          };
          we && ce.__asyncHydrate ? ce.__asyncHydrate(
            F,
            c,
            be
          ) : be();
        } else {
          me.ce && // @ts-expect-error _def is private
          me.ce._def.shadowRoot !== !1 && me.ce._injectChildStyle(ce);
          const be = c.subTree = ns(c);
          V(
            null,
            be,
            p,
            x,
            c,
            _,
            b
          ), u.el = be.el;
        }
        if (z && xe(z, _), !we && (A = H && H.onVnodeMounted)) {
          const be = u;
          xe(
            () => Ee(A, Q, be),
            _
          );
        }
        (u.shapeFlag & 256 || Q && xt(Q.vnode) && Q.vnode.shapeFlag & 256) && c.a && xe(c.a, _), c.isMounted = !0, u = p = x = null;
      }
    };
    c.scope.on();
    const S = c.effect = new gr(C);
    c.scope.off();
    const y = c.update = S.run.bind(S), L = c.job = S.runIfDirty.bind(S);
    L.i = c, L.id = c.uid, S.scheduler = () => hn(L), nt(c, !0), y();
  }, G = (c, u, p) => {
    u.component = c;
    const x = c.vnode.props;
    c.vnode = u, c.next = null, pl(c, u.props, x, p), bl(c, u.children, p), Ue(), wn(c), Ke();
  }, R = (c, u, p, x, _, b, E, C, S = !1) => {
    const y = c && c.children, L = c ? c.shapeFlag : 0, A = u.children, { patchFlag: F, shapeFlag: H } = u;
    if (F > 0) {
      if (F & 128) {
        qt(
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
        re(
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
    H & 8 ? (L & 16 && Tt(y, _, b), A !== y && a(p, A)) : L & 16 ? H & 16 ? qt(
      y,
      A,
      p,
      x,
      _,
      b,
      E,
      C,
      S
    ) : Tt(y, _, b, !0) : (L & 8 && a(p, ""), H & 16 && k(
      A,
      p,
      x,
      _,
      b,
      E,
      C,
      S
    ));
  }, re = (c, u, p, x, _, b, E, C, S) => {
    c = c || gt, u = u || gt;
    const y = c.length, L = u.length, A = Math.min(y, L);
    let F;
    for (F = 0; F < A; F++) {
      const H = u[F] = S ? Ye(u[F]) : Se(u[F]);
      V(
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
    y > L ? Tt(
      c,
      _,
      b,
      !0,
      !1,
      A
    ) : k(
      u,
      p,
      x,
      _,
      b,
      E,
      C,
      S,
      A
    );
  }, qt = (c, u, p, x, _, b, E, C, S) => {
    let y = 0;
    const L = u.length;
    let A = c.length - 1, F = L - 1;
    for (; y <= A && y <= F; ) {
      const H = c[y], J = u[y] = S ? Ye(u[y]) : Se(u[y]);
      if (lt(H, J))
        V(
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
      const H = c[A], J = u[F] = S ? Ye(u[F]) : Se(u[F]);
      if (lt(H, J))
        V(
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
        const H = F + 1, J = H < L ? u[H].el : x;
        for (; y <= F; )
          V(
            null,
            u[y] = S ? Ye(u[y]) : Se(u[y]),
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
        Pe(c[y], _, b, !0), y++;
    else {
      const H = y, J = y, z = /* @__PURE__ */ new Map();
      for (y = J; y <= F; y++) {
        const ye = u[y] = S ? Ye(u[y]) : Se(u[y]);
        ye.key != null && z.set(ye.key, y);
      }
      let Q, me = 0;
      const ce = F - J + 1;
      let we = !1, be = 0;
      const Ct = new Array(ce);
      for (y = 0; y < ce; y++) Ct[y] = 0;
      for (y = H; y <= A; y++) {
        const ye = c[y];
        if (me >= ce) {
          Pe(ye, _, b, !0);
          continue;
        }
        let Re;
        if (ye.key != null)
          Re = z.get(ye.key);
        else
          for (Q = J; Q <= F; Q++)
            if (Ct[Q - J] === 0 && lt(ye, u[Q])) {
              Re = Q;
              break;
            }
        Re === void 0 ? Pe(ye, _, b, !0) : (Ct[Re - J] = y + 1, Re >= be ? be = Re : we = !0, V(
          ye,
          u[Re],
          p,
          null,
          _,
          b,
          E,
          C,
          S
        ), me++);
      }
      const yn = we ? vl(Ct) : gt;
      for (Q = yn.length - 1, y = ce - 1; y >= 0; y--) {
        const ye = J + y, Re = u[ye], xn = u[ye + 1], vn = ye + 1 < L ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          xn.el || ui(xn)
        ) : x;
        Ct[y] === 0 ? V(
          null,
          Re,
          p,
          vn,
          _,
          b,
          E,
          C,
          S
        ) : we && (Q < 0 || y !== yn[Q] ? st(Re, p, vn, 2) : Q--);
      }
    }
  }, st = (c, u, p, x, _ = null) => {
    const { el: b, type: E, transition: C, children: S, shapeFlag: y } = c;
    if (y & 6) {
      st(c.component.subTree, u, p, x);
      return;
    }
    if (y & 128) {
      c.suspense.move(u, p, x);
      return;
    }
    if (y & 64) {
      E.move(c, u, p, at);
      return;
    }
    if (E === ve) {
      n(b, u, p);
      for (let A = 0; A < S.length; A++)
        st(S[A], u, p, x);
      n(c.anchor, u, p);
      return;
    }
    if (E === rs) {
      g(c, u, p);
      return;
    }
    if (x !== 2 && y & 1 && C)
      if (x === 0)
        C.beforeEnter(b), n(b, u, p), xe(() => C.enter(b), _);
      else {
        const { leave: A, delayLeave: F, afterLeave: H } = C, J = () => {
          c.ctx.isUnmounted ? r(b) : n(b, u, p);
        }, z = () => {
          b._isLeaving && b[Be](
            !0
            /* cancelled */
          ), A(b, () => {
            J(), H && H();
          });
        };
        F ? F(b, J, z) : z();
      }
    else
      n(b, u, p);
  }, Pe = (c, u, p, x = !1, _ = !1) => {
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
    if (A === -2 && (_ = !1), C != null && (Ue(), yt(C, null, p, c, !0), Ke()), H != null && (u.renderCache[H] = void 0), L & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const J = L & 1 && F, z = !xt(c);
    let Q;
    if (z && (Q = E && E.onVnodeBeforeUnmount) && Ee(Q, u, c), L & 6)
      Mi(c.component, p, x);
    else {
      if (L & 128) {
        c.suspense.unmount(p, x);
        return;
      }
      J && Ie(c, null, u, "beforeUnmount"), L & 64 ? c.type.remove(
        c,
        u,
        p,
        at,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== ve || A > 0 && A & 64) ? Tt(
        y,
        u,
        p,
        !1,
        !0
      ) : (b === ve && A & 384 || !_ && L & 16) && Tt(S, u, p), x && _n(c);
    }
    (z && (Q = E && E.onVnodeUnmounted) || J) && xe(() => {
      Q && Ee(Q, u, c), J && Ie(c, null, u, "unmounted");
    }, p);
  }, _n = (c) => {
    const { type: u, el: p, anchor: x, transition: _ } = c;
    if (u === ve) {
      Ai(p, x);
      return;
    }
    if (u === rs) {
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
  }, Ai = (c, u) => {
    let p;
    for (; c !== u; )
      p = v(c), r(c), c = p;
    r(u);
  }, Mi = (c, u, p) => {
    const { bum: x, scope: _, job: b, subTree: E, um: C, m: S, a: y } = c;
    Hn(S), Hn(y), x && Es(x), _.stop(), b && (b.flags |= 8, Pe(E, c, u, p)), C && xe(C, u), xe(() => {
      c.isUnmounted = !0;
    }, u);
  }, Tt = (c, u, p, x = !1, _ = !1, b = 0) => {
    for (let E = b; E < c.length; E++)
      Pe(c[E], u, p, x, _);
  }, Jt = (c) => {
    if (c.shapeFlag & 6)
      return Jt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = v(c.anchor || c.el), p = u && u[Lo];
    return p ? v(p) : u;
  };
  let vs = !1;
  const bn = (c, u, p) => {
    let x;
    c == null ? u._vnode && (Pe(u._vnode, null, null, !0), x = u._vnode.component) : V(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      p
    ), u._vnode = c, vs || (vs = !0, wn(x), fs(), vs = !1);
  }, at = {
    p: V,
    um: Pe,
    m: st,
    r: _n,
    mt: se,
    mc: k,
    pc: R,
    pbc: O,
    n: Jt,
    o: e
  };
  let Ss, Ts;
  return t && ([Ss, Ts] = t(
    at
  )), {
    render: bn,
    hydrate: Ss,
    createApp: ol(bn, Ss)
  };
}
function Ls({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function nt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function li(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ci(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (D(n) && D(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Ye(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && ci(o, l)), l.type === ut && (l.patchFlag !== -1 ? l.el = o.el : l.__elIndex = i + // take fragment start anchor into account
      (e.type === ve ? 1 : 0)), l.type === ue && !l.el && (l.el = o.el);
    }
}
function vl(e) {
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
function fi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : fi(t);
}
function Hn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ui(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ui(t.subTree) : null;
}
const ai = (e) => e.__isSuspense;
function hi(e, t) {
  t && t.pendingBranch ? D(e) ? t.effects.push(...e) : t.effects.push(e) : Mo(e);
}
const ve = /* @__PURE__ */ Symbol.for("v-fgt"), ut = /* @__PURE__ */ Symbol.for("v-txt"), ue = /* @__PURE__ */ Symbol.for("v-cmt"), rs = /* @__PURE__ */ Symbol.for("v-stc"), Rt = [];
let Te = null;
function Sl(e = !1) {
  Rt.push(Te = e ? null : []);
}
function Tl() {
  Rt.pop(), Te = Rt[Rt.length - 1] || null;
}
let jt = 1;
function hs(e, t = !1) {
  jt += e, e < 0 && Te && t && (Te.hasOnce = !0);
}
function di(e) {
  return e.dynamicChildren = jt > 0 ? Te || gt : null, Tl(), jt > 0 && Te && Te.push(e), e;
}
function Ac(e, t, s, n, r, i) {
  return di(
    gi(
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
function Cl(e, t, s, n, r) {
  return di(
    ge(
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
function lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const pi = ({ key: e }) => e ?? null, is = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || ae(e) || B(e) ? { i: Le, r: e, k: t, f: !!s } : e : null);
function gi(e, t = null, s = null, n = 0, r = null, i = e === ve ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && pi(t),
    ref: t && is(t),
    scopeId: Ir,
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
    ctx: Le
  };
  return l ? (gn(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= ie(s) ? 8 : 16), jt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Te && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Te.push(f), f;
}
const ge = El;
function El(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Zo) && (e = ue), Bt(e)) {
    const l = et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && gn(l, s), jt > 0 && !i && Te && (l.shapeFlag & 6 ? Te[Te.indexOf(e)] = l : Te.push(l)), l.patchFlag = -2, l;
  }
  if (Il(e) && (e = e.__vccOpts), t) {
    t = wl(t);
    let { class: l, style: f } = t;
    l && !ie(l) && (t.class = tn(l)), Z(f) && (an(f) && !D(f) && (f = le({}, f)), t.style = en(f));
  }
  const o = ie(e) ? 1 : ai(e) ? 128 : Dr(e) ? 64 : Z(e) ? 4 : B(e) ? 2 : 0;
  return gi(
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
function wl(e) {
  return e ? an(e) || ei(e) ? le({}, e) : e : null;
}
function et(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, h = t ? Al(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && pi(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? D(i) ? i.concat(is(t)) : [i, is(t)] : is(t)
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
    patchFlag: t && e.type !== ve ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && et(e.ssContent),
    ssFallback: e.ssFallback && et(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && $t(
    a,
    f.clone(a)
  ), a;
}
function mi(e = " ", t = 0) {
  return ge(ut, null, e, t);
}
function Mc(e = "", t = !1) {
  return t ? (Sl(), Cl(ue, null, e)) : ge(ue, null, e);
}
function Se(e) {
  return e == null || typeof e == "boolean" ? ge(ue) : D(e) ? ge(
    ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Bt(e) ? Ye(e) : ge(ut, null, String(e));
}
function Ye(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : et(e);
}
function gn(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (D(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), gn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !ei(t) ? t._ctx = Le : r === 3 && Le && (Le.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else B(t) ? (t = { default: t, _ctx: Le }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [mi(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Al(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = tn([t.class, n.class]));
      else if (r === "style")
        t.style = en([t.style, n.style]);
      else if (Kt(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(D(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Ee(e, t, s, n = null) {
  Oe(e, t, 7, [
    s,
    n
  ]);
}
const Ml = Yr();
let Ol = 0;
function _i(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Ml, i = {
    uid: Ol++,
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
    scope: new Ji(
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
    propsOptions: si(n, r),
    emitsOptions: Xr(n, r),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = cl.bind(null, i), e.ce && e.ce(i), i;
}
let pe = null;
const bi = () => pe || Le;
let ds, Js;
{
  const e = gs(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  ds = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => pe = s
  ), Js = t(
    "__VUE_SSR_SETTERS__",
    (s) => Vt = s
  );
}
const Gt = (e) => {
  const t = pe;
  return ds(e), e.scope.on(), () => {
    e.scope.off(), ds(t);
  };
}, $n = () => {
  pe && pe.scope.off(), ds(null);
};
function yi(e) {
  return e.vnode.shapeFlag & 4;
}
let Vt = !1;
function xi(e, t = !1, s = !1) {
  t && Js(t);
  const { props: n, children: r } = e.vnode, i = yi(e);
  dl(e, n, i, t), _l(e, r, s || t);
  const o = i ? Pl(e, t) : void 0;
  return t && Js(!1), o;
}
function Pl(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, zo);
  const { setup: n } = s;
  if (n) {
    Ue();
    const r = e.setupContext = n.length > 1 ? Fl(e) : null, i = Gt(e), o = kt(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = or(o);
    if (Ke(), i(), (l || e.sp) && !xt(e) && Ur(e), l) {
      if (o.then($n, $n), t)
        return o.then((f) => {
          jn(e, f);
        }).catch((f) => {
          _s(f, e, 0);
        });
      e.asyncDep = o;
    } else
      jn(e, o);
  } else
    vi(e);
}
function jn(e, t, s) {
  B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) && (e.setupState = Or(t)), vi(e);
}
function vi(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Ne);
  {
    const r = Gt(e);
    Ue();
    try {
      el(e);
    } finally {
      Ke(), r();
    }
  }
}
const Rl = {
  get(e, t) {
    return fe(e, "get", ""), e[t];
  }
};
function Fl(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Rl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function mn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Or(mo(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Pt)
        return Pt[s](e);
    },
    has(t, s) {
      return s in t || s in Pt;
    }
  })) : e.proxy;
}
function Il(e) {
  return B(e) && "__vccOpts" in e;
}
const Ll = (e, t) => So(e, t, Vt);
function Nl(e, t, s) {
  try {
    hs(-1);
    const n = arguments.length;
    return n === 2 ? Z(t) && !D(t) ? Bt(t) ? ge(e, null, [t]) : ge(e, t) : ge(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Bt(s) && (s = [s]), ge(e, t, s));
  } finally {
    hs(1);
  }
}
const Dl = "3.5.26", Hl = {
  createComponentInstance: _i,
  setupComponent: xi,
  renderComponentRoot: ns,
  setCurrentRenderingInstance: Ht,
  isVNode: Bt,
  normalizeVNode: Se
}, Oc = Hl;
let Ys;
const Bn = typeof window < "u" && window.trustedTypes;
if (Bn)
  try {
    Ys = /* @__PURE__ */ Bn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Si = Ys ? (e) => Ys.createHTML(e) : (e) => e, $l = "http://www.w3.org/2000/svg", jl = "http://www.w3.org/1998/Math/MathML", je = typeof document < "u" ? document : null, Vn = je && /* @__PURE__ */ je.createElement("template"), Bl = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? je.createElementNS($l, e) : t === "mathml" ? je.createElementNS(jl, e) : s ? je.createElement(e, { is: s }) : je.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => je.createTextNode(e),
  createComment: (e) => je.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => je.querySelector(e),
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
      Vn.innerHTML = Si(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Vn.content;
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
}, Ge = "transition", wt = "animation", Ut = /* @__PURE__ */ Symbol("_vtc"), Ti = {
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
}, Vl = /* @__PURE__ */ le(
  {},
  Hr,
  Ti
), Ul = (e) => (e.displayName = "Transition", e.props = Vl, e), Pc = /* @__PURE__ */ Ul(
  (e, { slots: t }) => Nl(Ho, Kl(e), t)
), rt = (e, t = []) => {
  D(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Un = (e) => e ? D(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Kl(e) {
  const t = {};
  for (const T in e)
    T in Ti || (t[T] = e[T]);
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
    appearToClass: a = l,
    leaveFromClass: d = `${s}-leave-from`,
    leaveActiveClass: v = `${s}-leave-active`,
    leaveToClass: w = `${s}-leave-to`
  } = e, N = Wl(r), V = N && N[0], ne = N && N[1], {
    onBeforeEnter: W,
    onEnter: q,
    onEnterCancelled: g,
    onLeave: m,
    onLeaveCancelled: M,
    onBeforeAppear: $ = W,
    onAppear: U = q,
    onAppearCancelled: k = g
  } = t, P = (T, j, se, oe) => {
    T._enterCancelled = oe, it(T, j ? a : l), it(T, j ? h : o), se && se();
  }, O = (T, j) => {
    T._isLeaving = !1, it(T, d), it(T, w), it(T, v), j && j();
  }, K = (T) => (j, se) => {
    const oe = T ? U : q, I = () => P(j, T, se);
    rt(oe, [j, I]), Kn(() => {
      it(j, T ? f : i), $e(j, T ? a : l), Un(oe) || Wn(j, n, V, I);
    });
  };
  return le(t, {
    onBeforeEnter(T) {
      rt(W, [T]), $e(T, i), $e(T, o);
    },
    onBeforeAppear(T) {
      rt($, [T]), $e(T, f), $e(T, h);
    },
    onEnter: K(!1),
    onAppear: K(!0),
    onLeave(T, j) {
      T._isLeaving = !0;
      const se = () => O(T, j);
      $e(T, d), T._enterCancelled ? ($e(T, v), qn(T)) : (qn(T), $e(T, v)), Kn(() => {
        T._isLeaving && (it(T, d), $e(T, w), Un(m) || Wn(T, n, ne, se));
      }), rt(m, [T, se]);
    },
    onEnterCancelled(T) {
      P(T, !1, void 0, !0), rt(g, [T]);
    },
    onAppearCancelled(T) {
      P(T, !0, void 0, !0), rt(k, [T]);
    },
    onLeaveCancelled(T) {
      O(T), rt(M, [T]);
    }
  });
}
function Wl(e) {
  if (e == null)
    return null;
  if (Z(e))
    return [Ns(e.enter), Ns(e.leave)];
  {
    const t = Ns(e);
    return [t, t];
  }
}
function Ns(e) {
  return Li(e);
}
function $e(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[Ut] || (e[Ut] = /* @__PURE__ */ new Set())).add(t);
}
function it(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[Ut];
  s && (s.delete(t), s.size || (e[Ut] = void 0));
}
function Kn(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let kl = 0;
function Wn(e, t, s, n) {
  const r = e._endId = ++kl, i = () => {
    r === e._endId && n();
  };
  if (s != null)
    return setTimeout(i, s);
  const { type: o, timeout: l, propCount: f } = Gl(e, t);
  if (!o)
    return n();
  const h = o + "end";
  let a = 0;
  const d = () => {
    e.removeEventListener(h, v), i();
  }, v = (w) => {
    w.target === e && ++a >= f && d();
  };
  setTimeout(() => {
    a < f && d();
  }, l + 1), e.addEventListener(h, v);
}
function Gl(e, t) {
  const s = window.getComputedStyle(e), n = (N) => (s[N] || "").split(", "), r = n(`${Ge}Delay`), i = n(`${Ge}Duration`), o = kn(r, i), l = n(`${wt}Delay`), f = n(`${wt}Duration`), h = kn(l, f);
  let a = null, d = 0, v = 0;
  t === Ge ? o > 0 && (a = Ge, d = o, v = i.length) : t === wt ? h > 0 && (a = wt, d = h, v = f.length) : (d = Math.max(o, h), a = d > 0 ? o > h ? Ge : wt : null, v = a ? a === Ge ? i.length : f.length : 0);
  const w = a === Ge && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Ge}Property`).toString()
  );
  return {
    type: a,
    timeout: d,
    propCount: v,
    hasTransform: w
  };
}
function kn(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => Gn(s) + Gn(e[n])));
}
function Gn(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function qn(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function ql(e, t, s) {
  const n = e[Ut];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Jn = /* @__PURE__ */ Symbol("_vod"), Jl = /* @__PURE__ */ Symbol("_vsh"), Yl = /* @__PURE__ */ Symbol(""), Xl = /(?:^|;)\s*display\s*:/;
function Ql(e, t, s) {
  const n = e.style, r = ie(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (ie(t))
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
      const o = n[Yl];
      o && (s += ";" + o), n.cssText = s, i = Xl.test(s);
    }
  } else t && e.removeAttribute("style");
  Jn in e && (e[Jn] = i ? n.display : "", e[Jl] && (n.display = "none"));
}
const Yn = /\s*!important$/;
function os(e, t, s) {
  if (D(s))
    s.forEach((n) => os(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Zl(e, t);
    Yn.test(s) ? e.setProperty(
      tt(n),
      s.replace(Yn, ""),
      "important"
    ) : e[n] = s;
  }
}
const Xn = ["Webkit", "Moz", "ms"], Ds = {};
function Zl(e, t) {
  const s = Ds[t];
  if (s)
    return s;
  let n = Ze(t);
  if (n !== "filter" && n in e)
    return Ds[t] = n;
  n = fr(n);
  for (let r = 0; r < Xn.length; r++) {
    const i = Xn[r] + n;
    if (i in e)
      return Ds[t] = i;
  }
  return t;
}
const Qn = "http://www.w3.org/1999/xlink";
function Zn(e, t, s, n, r, i = Vi(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Qn, t.slice(6, t.length)) : e.setAttributeNS(Qn, t, s) : s == null || i && !hr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : De(s) ? String(s) : s
  );
}
function zn(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Si(s) : s);
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
    l === "boolean" ? s = hr(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function zl(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function ec(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const er = /* @__PURE__ */ Symbol("_vei");
function tc(e, t, s, n, r = null) {
  const i = e[er] || (e[er] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, f] = sc(t);
    if (n) {
      const h = i[t] = ic(
        n,
        r
      );
      zl(e, l, h, f);
    } else o && (ec(e, l, o, f), i[t] = void 0);
  }
}
const tr = /(?:Once|Passive|Capture)$/;
function sc(e) {
  let t;
  if (tr.test(e)) {
    t = {};
    let n;
    for (; n = e.match(tr); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : tt(e.slice(2)), t];
}
let Hs = 0;
const nc = /* @__PURE__ */ Promise.resolve(), rc = () => Hs || (nc.then(() => Hs = 0), Hs = Date.now());
function ic(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Oe(
      oc(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = rc(), s;
}
function oc(e, t) {
  if (D(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, lc = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? ql(e, n, o) : t === "style" ? Ql(e, s, n) : Kt(t) ? Xs(t) || tc(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : cc(e, t, n, o)) ? (zn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Zn(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(n)) ? zn(e, Ze(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Zn(e, t, n, o));
};
function cc(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && sr(t) && B(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return sr(t) && ie(s) ? !1 : t in e;
}
const fc = {}, uc = {}, ac = {};
function hc() {
  fc.getSSRProps = ({ value: e }) => ({ value: e }), ac.getSSRProps = ({ value: e }, t) => {
    if (t.props && ms(t.props.value, e))
      return { checked: !0 };
  }, uc.getSSRProps = ({ value: e }, t) => {
    if (D(e)) {
      if (t.props && Gi(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (Zs(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const Ci = /* @__PURE__ */ le({ patchProp: lc }, Bl);
let Ft, nr = !1;
function dc() {
  return Ft || (Ft = yl(Ci));
}
function pc() {
  return Ft = nr ? Ft : xl(Ci), nr = !0, Ft;
}
const Rc = ((...e) => {
  const t = dc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = wi(n);
    if (!r) return;
    const i = t._component;
    !B(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, Ei(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
}), Fc = ((...e) => {
  const t = pc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = wi(n);
    if (r)
      return s(r, !0, Ei(r));
  }, t;
});
function Ei(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function wi(e) {
  return ie(e) ? document.querySelector(e) : e;
}
let rr = !1;
const Ic = () => {
  rr || (rr = !0, hc());
};
export {
  _c as A,
  St as B,
  ue as C,
  Kt as D,
  en as E,
  ve as F,
  gc as G,
  vc as H,
  mc as I,
  xc as J,
  bc as K,
  hr as L,
  yc as M,
  Ne as N,
  Z as O,
  Cc as P,
  Ic as Q,
  Fc as R,
  rs as S,
  Pc as T,
  fn as a,
  Sl as b,
  Ac as c,
  wc as d,
  gi as e,
  ge as f,
  Mc as g,
  tn as h,
  Oo as i,
  Rc as j,
  gs as k,
  Ro as l,
  or as m,
  wo as n,
  Wr as o,
  B as p,
  ie as q,
  Ec as r,
  Oc as s,
  qi as t,
  Tc as u,
  ut as v,
  Rs as w,
  Sc as x,
  D as y,
  Al as z
};
