// @__NO_SIDE_EFFECTS__
function gt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const Q = {}, ot = [], Re = () => {
}, $n = () => !1, It = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ds = (e) => e.startsWith("onUpdate:"), ce = Object.assign, Hs = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, ei = Object.prototype.hasOwnProperty, W = (e, t) => ei.call(e, t), I = Array.isArray, ct = (e) => Dt(e) === "[object Map]", Ns = (e) => Dt(e) === "[object Set]", cn = (e) => Dt(e) === "[object Date]", H = (e) => typeof e == "function", ne = (e) => typeof e == "string", Ie = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", Vn = (e) => (Z(e) || H(e)) && H(e.then) && H(e.catch), Un = Object.prototype.toString, Dt = (e) => Un.call(e), ti = (e) => Dt(e).slice(8, -1), Bn = (e) => Dt(e) === "[object Object]", Ls = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ft = /* @__PURE__ */ gt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ss = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, si = /-\w/g, ke = ss(
  (e) => e.replace(si, (t) => t.slice(1).toUpperCase())
), ni = /\B([A-Z])/g, Ye = ss(
  (e) => e.replace(ni, "-$1").toLowerCase()
), Kn = ss((e) => e.charAt(0).toUpperCase() + e.slice(1)), as = ss(
  (e) => e ? `on${Kn(e)}` : ""
), qe = (e, t) => !Object.is(e, t), hs = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Wn = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, ri = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let fn;
const ns = () => fn || (fn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function js(e) {
  if (I(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = ne(n) ? ci(n) : js(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ne(e) || Z(e))
    return e;
}
const ii = /;(?![^(]*\))/g, li = /:([^]+)/, oi = /\/\*[^]*?\*\//g;
function ci(e) {
  const t = {};
  return e.replace(oi, "").split(ii).forEach((s) => {
    if (s) {
      const n = s.split(li);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Io(e) {
  if (!e) return "";
  if (ne(e)) return e;
  let t = "";
  for (const s in e) {
    const n = e[s];
    if (ne(n) || typeof n == "number") {
      const r = s.startsWith("--") ? s : Ye(s);
      t += `${r}:${n};`;
    }
  }
  return t;
}
function $s(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (I(e))
    for (let s = 0; s < e.length; s++) {
      const n = $s(e[s]);
      n && (t += n + " ");
    }
  else if (Z(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const fi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ui = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Do = /* @__PURE__ */ gt(fi), Ho = /* @__PURE__ */ gt(ui), Gn = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ai = /* @__PURE__ */ gt(Gn), No = /* @__PURE__ */ gt(
  Gn + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function qn(e) {
  return !!e || e === "";
}
const hi = /[>/="'\u0009\u000a\u000c\u0020]/, ds = {};
function Lo(e) {
  if (ds.hasOwnProperty(e))
    return ds[e];
  const t = hi.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), ds[e] = !t;
}
const jo = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function $o(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const di = /["'&<>]/;
function Vo(e) {
  const t = "" + e, s = di.exec(t);
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
const pi = /^-?>|<!--|-->|--!>|<!-$/g;
function Uo(e) {
  return e.replace(pi, "");
}
function gi(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = rs(e[n], t[n]);
  return s;
}
function rs(e, t) {
  if (e === t) return !0;
  let s = cn(e), n = cn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ie(e), n = Ie(t), s || n)
    return e === t;
  if (s = I(e), n = I(t), s || n)
    return s && n ? gi(e, t) : !1;
  if (s = Z(e), n = Z(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const l in e) {
      const c = e.hasOwnProperty(l), f = t.hasOwnProperty(l);
      if (c && !f || !c && f || !rs(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function mi(e, t) {
  return e.findIndex((s) => rs(s, t));
}
const kn = (e) => !!(e && e.__v_isRef === !0), _i = (e) => ne(e) ? e : e == null ? "" : I(e) || Z(e) && (e.toString === Un || !H(e.toString)) ? kn(e) ? _i(e.value) : JSON.stringify(e, Jn, 2) : String(e), Jn = (e, t) => kn(t) ? Jn(e, t.value) : ct(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[ps(n, i) + " =>"] = r, s),
    {}
  )
} : Ns(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => ps(s))
} : Ie(t) ? ps(t) : Z(t) && !I(t) && !Bn(t) ? String(t) : t, ps = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ie(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
function Bo(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let pe;
class bi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = pe, !t && pe && (this.index = (pe.scopes || (pe.scopes = [])).push(
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
      const s = pe;
      try {
        return pe = this, t();
      } finally {
        pe = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = pe, pe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (pe = this.prevScope, this.prevScope = void 0);
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
function yi() {
  return pe;
}
let X;
const gs = /* @__PURE__ */ new WeakSet();
class Yn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pe && pe.active && pe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, gs.has(this) && (gs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Qn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, un(this), Zn(this);
    const t = X, s = Ce;
    X = this, Ce = !0;
    try {
      return this.fn();
    } finally {
      zn(this), X = t, Ce = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Bs(t);
      this.deps = this.depsTail = void 0, un(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? gs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    vs(this) && this.run();
  }
  get dirty() {
    return vs(this);
  }
}
let Xn = 0, St, Tt;
function Qn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Tt, Tt = e;
    return;
  }
  e.next = St, St = e;
}
function Vs() {
  Xn++;
}
function Us() {
  if (--Xn > 0)
    return;
  if (Tt) {
    let t = Tt;
    for (Tt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; St; ) {
    let t = St;
    for (St = void 0; t; ) {
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
function Zn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function zn(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Bs(n), xi(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function vs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (er(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function er(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Et) || (e.globalVersion = Et, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !vs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = X, n = Ce;
  X = e, Ce = !0;
  try {
    Zn(e);
    const r = e.fn(e._value);
    (t.version === 0 || qe(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    X = s, Ce = n, zn(e), e.flags &= -3;
  }
}
function Bs(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Bs(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function xi(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Ce = !0;
const tr = [];
function je() {
  tr.push(Ce), Ce = !1;
}
function $e() {
  const e = tr.pop();
  Ce = e === void 0 ? !0 : e;
}
function un(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = X;
    X = void 0;
    try {
      t();
    } finally {
      X = s;
    }
  }
}
let Et = 0;
class Si {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ks {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!X || !Ce || X === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== X)
      s = this.activeLink = new Si(X, this), X.deps ? (s.prevDep = X.depsTail, X.depsTail.nextDep = s, X.depsTail = s) : X.deps = X.depsTail = s, sr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = X.depsTail, s.nextDep = void 0, X.depsTail.nextDep = s, X.depsTail = s, X.deps === s && (X.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Et++, this.notify(t);
  }
  notify(t) {
    Vs();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Us();
    }
  }
}
function sr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        sr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Cs = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ Symbol(
  ""
), ws = /* @__PURE__ */ Symbol(
  ""
), At = /* @__PURE__ */ Symbol(
  ""
);
function le(e, t, s) {
  if (Ce && X) {
    let n = Cs.get(e);
    n || Cs.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new Ks()), r.map = n, r.key = s), r.track();
  }
}
function Le(e, t, s, n, r, i) {
  const l = Cs.get(e);
  if (!l) {
    Et++;
    return;
  }
  const c = (f) => {
    f && f.trigger();
  };
  if (Vs(), t === "clear")
    l.forEach(c);
  else {
    const f = I(e), p = f && Ls(s);
    if (f && s === "length") {
      const a = Number(n);
      l.forEach((m, w) => {
        (w === "length" || w === At || !Ie(w) && w >= a) && c(m);
      });
    } else
      switch ((s !== void 0 || l.has(void 0)) && c(l.get(s)), p && c(l.get(At)), t) {
        case "add":
          f ? p && c(l.get("length")) : (c(l.get(ze)), ct(e) && c(l.get(ws)));
          break;
        case "delete":
          f || (c(l.get(ze)), ct(e) && c(l.get(ws)));
          break;
        case "set":
          ct(e) && c(l.get(ze));
          break;
      }
  }
  Us();
}
function rt(e) {
  const t = K(e);
  return t === e ? t : (le(t, "iterate", At), we(e) ? t : t.map(Ve));
}
function Ws(e) {
  return le(e = K(e), "iterate", At), e;
}
function Be(e, t) {
  return Je(e) ? et(e) ? Mt(Ve(t)) : Mt(t) : Ve(t);
}
const Ti = {
  __proto__: null,
  [Symbol.iterator]() {
    return ms(this, Symbol.iterator, (e) => Be(this, e));
  },
  concat(...e) {
    return rt(this).concat(
      ...e.map((t) => I(t) ? rt(t) : t)
    );
  },
  entries() {
    return ms(this, "entries", (e) => (e[1] = Be(this, e[1]), e));
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
      (s) => s.map((n) => Be(this, n)),
      arguments
    );
  },
  find(e, t) {
    return He(
      this,
      "find",
      e,
      t,
      (s) => Be(this, s),
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
      (s) => Be(this, s),
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
    return _s(this, "includes", e);
  },
  indexOf(...e) {
    return _s(this, "indexOf", e);
  },
  join(e) {
    return rt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return _s(this, "lastIndexOf", e);
  },
  map(e, t) {
    return He(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return bt(this, "pop");
  },
  push(...e) {
    return bt(this, "push", e);
  },
  reduce(e, ...t) {
    return an(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return an(this, "reduceRight", e, t);
  },
  shift() {
    return bt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return He(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return bt(this, "splice", e);
  },
  toReversed() {
    return rt(this).toReversed();
  },
  toSorted(e) {
    return rt(this).toSorted(e);
  },
  toSpliced(...e) {
    return rt(this).toSpliced(...e);
  },
  unshift(...e) {
    return bt(this, "unshift", e);
  },
  values() {
    return ms(this, "values", (e) => Be(this, e));
  }
};
function ms(e, t, s) {
  const n = Ws(e), r = n[t]();
  return n !== e && !we(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const vi = Array.prototype;
function He(e, t, s, n, r, i) {
  const l = Ws(e), c = l !== e && !we(e), f = l[t];
  if (f !== vi[t]) {
    const m = f.apply(e, i);
    return c ? Ve(m) : m;
  }
  let p = s;
  l !== e && (c ? p = function(m, w) {
    return s.call(this, Be(e, m), w, e);
  } : s.length > 2 && (p = function(m, w) {
    return s.call(this, m, w, e);
  }));
  const a = f.call(l, p, n);
  return c && r ? r(a) : a;
}
function an(e, t, s, n) {
  const r = Ws(e);
  let i = s;
  return r !== e && (we(e) ? s.length > 3 && (i = function(l, c, f) {
    return s.call(this, l, c, f, e);
  }) : i = function(l, c, f) {
    return s.call(this, l, Be(e, c), f, e);
  }), r[t](i, ...n);
}
function _s(e, t, s) {
  const n = K(e);
  le(n, "iterate", At);
  const r = n[t](...s);
  return (r === -1 || r === !1) && Js(s[0]) ? (s[0] = K(s[0]), n[t](...s)) : r;
}
function bt(e, t, s = []) {
  je(), Vs();
  const n = K(e)[t].apply(e, s);
  return Us(), $e(), n;
}
const Ci = /* @__PURE__ */ gt("__proto__,__v_isRef,__isVue"), nr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ie)
);
function wi(e) {
  Ie(e) || (e = String(e));
  const t = K(this);
  return le(t, "has", e), t.hasOwnProperty(e);
}
class rr {
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
      return n === (r ? i ? Hi : cr : i ? or : lr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const l = I(t);
    if (!r) {
      let f;
      if (l && (f = Ti[s]))
        return f;
      if (s === "hasOwnProperty")
        return wi;
    }
    const c = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      oe(t) ? t : n
    );
    if ((Ie(s) ? nr.has(s) : Ci(s)) || (r || le(t, "get", s), i))
      return c;
    if (oe(c)) {
      const f = l && Ls(s) ? c : c.value;
      return r && Z(f) ? As(f) : f;
    }
    return Z(c) ? r ? As(c) : qs(c) : c;
  }
}
class ir extends rr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const l = I(t) && Ls(s);
    if (!this._isShallow) {
      const p = Je(i);
      if (!we(n) && !Je(n) && (i = K(i), n = K(n)), !l && oe(i) && !oe(n))
        return p || (i.value = n), !0;
    }
    const c = l ? Number(s) < t.length : W(t, s), f = Reflect.set(
      t,
      s,
      n,
      oe(t) ? t : r
    );
    return t === K(r) && (c ? qe(n, i) && Le(t, "set", s, n) : Le(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = W(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Le(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ie(s) || !nr.has(s)) && le(t, "has", s), n;
  }
  ownKeys(t) {
    return le(
      t,
      "iterate",
      I(t) ? "length" : ze
    ), Reflect.ownKeys(t);
  }
}
class Ei extends rr {
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
const Ai = /* @__PURE__ */ new ir(), Mi = /* @__PURE__ */ new Ei(), Oi = /* @__PURE__ */ new ir(!0);
const Es = (e) => e, $t = (e) => Reflect.getPrototypeOf(e);
function Pi(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = K(r), l = ct(i), c = e === "entries" || e === Symbol.iterator && l, f = e === "keys" && l, p = r[e](...n), a = s ? Es : t ? Mt : Ve;
    return !t && le(
      i,
      "iterate",
      f ? ws : ze
    ), {
      // iterator protocol
      next() {
        const { value: m, done: w } = p.next();
        return w ? { value: m, done: w } : {
          value: c ? [a(m[0]), a(m[1])] : a(m),
          done: w
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Vt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ri(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, l = K(i), c = K(r);
      e || (qe(r, c) && le(l, "get", r), le(l, "get", c));
      const { has: f } = $t(l), p = t ? Es : e ? Mt : Ve;
      if (f.call(l, r))
        return p(i.get(r));
      if (f.call(l, c))
        return p(i.get(c));
      i !== l && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && le(K(r), "iterate", ze), r.size;
    },
    has(r) {
      const i = this.__v_raw, l = K(i), c = K(r);
      return e || (qe(r, c) && le(l, "has", r), le(l, "has", c)), r === c ? i.has(r) : i.has(r) || i.has(c);
    },
    forEach(r, i) {
      const l = this, c = l.__v_raw, f = K(c), p = t ? Es : e ? Mt : Ve;
      return !e && le(f, "iterate", ze), c.forEach((a, m) => r.call(i, p(a), p(m), l));
    }
  };
  return ce(
    s,
    e ? {
      add: Vt("add"),
      set: Vt("set"),
      delete: Vt("delete"),
      clear: Vt("clear")
    } : {
      add(r) {
        !t && !we(r) && !Je(r) && (r = K(r));
        const i = K(this);
        return $t(i).has.call(i, r) || (i.add(r), Le(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !we(i) && !Je(i) && (i = K(i));
        const l = K(this), { has: c, get: f } = $t(l);
        let p = c.call(l, r);
        p || (r = K(r), p = c.call(l, r));
        const a = f.call(l, r);
        return l.set(r, i), p ? qe(i, a) && Le(l, "set", r, i) : Le(l, "add", r, i), this;
      },
      delete(r) {
        const i = K(this), { has: l, get: c } = $t(i);
        let f = l.call(i, r);
        f || (r = K(r), f = l.call(i, r)), c && c.call(i, r);
        const p = i.delete(r);
        return f && Le(i, "delete", r, void 0), p;
      },
      clear() {
        const r = K(this), i = r.size !== 0, l = r.clear();
        return i && Le(
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
    s[r] = Pi(r, e, t);
  }), s;
}
function Gs(e, t) {
  const s = Ri(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    W(s, r) && r in n ? s : n,
    r,
    i
  );
}
const Fi = {
  get: /* @__PURE__ */ Gs(!1, !1)
}, Ii = {
  get: /* @__PURE__ */ Gs(!1, !0)
}, Di = {
  get: /* @__PURE__ */ Gs(!0, !1)
};
const lr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), Hi = /* @__PURE__ */ new WeakMap();
function Ni(e) {
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
function Li(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ni(ti(e));
}
function qs(e) {
  return Je(e) ? e : ks(
    e,
    !1,
    Ai,
    Fi,
    lr
  );
}
function ji(e) {
  return ks(
    e,
    !1,
    Oi,
    Ii,
    or
  );
}
function As(e) {
  return ks(
    e,
    !0,
    Mi,
    Di,
    cr
  );
}
function ks(e, t, s, n, r) {
  if (!Z(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Li(e);
  if (i === 0)
    return e;
  const l = r.get(e);
  if (l)
    return l;
  const c = new Proxy(
    e,
    i === 2 ? n : s
  );
  return r.set(e, c), c;
}
function et(e) {
  return Je(e) ? et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Je(e) {
  return !!(e && e.__v_isReadonly);
}
function we(e) {
  return !!(e && e.__v_isShallow);
}
function Js(e) {
  return e ? !!e.__v_raw : !1;
}
function K(e) {
  const t = e && e.__v_raw;
  return t ? K(t) : e;
}
function $i(e) {
  return !W(e, "__v_skip") && Object.isExtensible(e) && Wn(e, "__v_skip", !0), e;
}
const Ve = (e) => Z(e) ? qs(e) : e, Mt = (e) => Z(e) ? As(e) : e;
function oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ko(e) {
  return Vi(e, !1);
}
function Vi(e, t) {
  return oe(e) ? e : new Ui(e, t);
}
class Ui {
  constructor(t, s) {
    this.dep = new Ks(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : K(t), this._value = s ? t : Ve(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || we(t) || Je(t);
    t = n ? t : K(t), qe(t, s) && (this._rawValue = t, this._value = n ? t : Ve(t), this.dep.trigger());
  }
}
function Bi(e) {
  return oe(e) ? e.value : e;
}
const Ki = {
  get: (e, t, s) => t === "__v_raw" ? e : Bi(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return oe(r) && !oe(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function fr(e) {
  return et(e) ? e : new Proxy(e, Ki);
}
class Wi {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Ks(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Et - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    X !== this)
      return Qn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return er(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Gi(e, t, s = !1) {
  let n, r;
  return H(e) ? n = e : (n = e.get, r = e.set), new Wi(n, r, s);
}
const Ut = {}, Xt = /* @__PURE__ */ new WeakMap();
let Ze;
function qi(e, t = !1, s = Ze) {
  if (s) {
    let n = Xt.get(s);
    n || Xt.set(s, n = []), n.push(e);
  }
}
function ki(e, t, s = Q) {
  const { immediate: n, deep: r, once: i, scheduler: l, augmentJob: c, call: f } = s, p = (g) => r ? g : we(g) || r === !1 || r === 0 ? Ge(g, 1) : Ge(g);
  let a, m, w, E, N = !1, j = !1;
  if (oe(e) ? (m = () => e.value, N = we(e)) : et(e) ? (m = () => p(e), N = !0) : I(e) ? (j = !0, N = e.some((g) => et(g) || we(g)), m = () => e.map((g) => {
    if (oe(g))
      return g.value;
    if (et(g))
      return p(g);
    if (H(g))
      return f ? f(g, 2) : g();
  })) : H(e) ? t ? m = f ? () => f(e, 2) : e : m = () => {
    if (w) {
      je();
      try {
        w();
      } finally {
        $e();
      }
    }
    const g = Ze;
    Ze = a;
    try {
      return f ? f(e, 3, [E]) : e(E);
    } finally {
      Ze = g;
    }
  } : m = Re, t && r) {
    const g = m, A = r === !0 ? 1 / 0 : r;
    m = () => Ge(g(), A);
  }
  const re = yi(), V = () => {
    a.stop(), re && re.active && Hs(re.effects, a);
  };
  if (i && t) {
    const g = t;
    t = (...A) => {
      g(...A), V();
    };
  }
  let G = j ? new Array(e.length).fill(Ut) : Ut;
  const d = (g) => {
    if (!(!(a.flags & 1) || !a.dirty && !g))
      if (t) {
        const A = a.run();
        if (r || N || (j ? A.some((B, L) => qe(B, G[L])) : qe(A, G))) {
          w && w();
          const B = Ze;
          Ze = a;
          try {
            const L = [
              A,
              // pass undefined as the old value when it's changed for the first time
              G === Ut ? void 0 : j && G[0] === Ut ? [] : G,
              E
            ];
            G = A, f ? f(t, 3, L) : (
              // @ts-expect-error
              t(...L)
            );
          } finally {
            Ze = B;
          }
        }
      } else
        a.run();
  };
  return c && c(d), a = new Yn(m), a.scheduler = l ? () => l(d, !1) : d, E = (g) => qi(g, !1, a), w = a.onStop = () => {
    const g = Xt.get(a);
    if (g) {
      if (f)
        f(g, 4);
      else
        for (const A of g) A();
      Xt.delete(a);
    }
  }, t ? n ? d(!0) : G = a.run() : l ? l(d.bind(null, !0), !0) : a.run(), V.pause = a.pause.bind(a), V.resume = a.resume.bind(a), V.stop = V, V;
}
function Ge(e, t = 1 / 0, s) {
  if (t <= 0 || !Z(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, oe(e))
    Ge(e.value, t, s);
  else if (I(e))
    for (let n = 0; n < e.length; n++)
      Ge(e[n], t, s);
  else if (Ns(e) || ct(e))
    e.forEach((n) => {
      Ge(n, t, s);
    });
  else if (Bn(e)) {
    for (const n in e)
      Ge(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ge(e[n], t, s);
  }
  return e;
}
function Ht(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    is(r, t, s);
  }
}
function De(e, t, s, n) {
  if (H(e)) {
    const r = Ht(e, t, s, n);
    return r && Vn(r) && r.catch((i) => {
      is(i, t, s);
    }), r;
  }
  if (I(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(De(e[i], t, s, n));
    return r;
  }
}
function is(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || Q;
  if (t) {
    let c = t.parent;
    const f = t.proxy, p = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; c; ) {
      const a = c.ec;
      if (a) {
        for (let m = 0; m < a.length; m++)
          if (a[m](e, f, p) === !1)
            return;
      }
      c = c.parent;
    }
    if (i) {
      je(), Ht(i, null, 10, [
        e,
        f,
        p
      ]), $e();
      return;
    }
  }
  Ji(e, s, r, n, l);
}
function Ji(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ue = [];
let Me = -1;
const ut = [];
let Ke = null, lt = 0;
const ur = /* @__PURE__ */ Promise.resolve();
let Qt = null;
function Yi(e) {
  const t = Qt || ur;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xi(e) {
  let t = Me + 1, s = ue.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = ue[n], i = Ot(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Ys(e) {
  if (!(e.flags & 1)) {
    const t = Ot(e), s = ue[ue.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ot(s) ? ue.push(e) : ue.splice(Xi(t), 0, e), e.flags |= 1, ar();
  }
}
function ar() {
  Qt || (Qt = ur.then(hr));
}
function Qi(e) {
  I(e) ? ut.push(...e) : Ke && e.id === -1 ? Ke.splice(lt + 1, 0, e) : e.flags & 1 || (ut.push(e), e.flags |= 1), ar();
}
function hn(e, t, s = Me + 1) {
  for (; s < ue.length; s++) {
    const n = ue[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ue.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Zt(e) {
  if (ut.length) {
    const t = [...new Set(ut)].sort(
      (s, n) => Ot(s) - Ot(n)
    );
    if (ut.length = 0, Ke) {
      Ke.push(...t);
      return;
    }
    for (Ke = t, lt = 0; lt < Ke.length; lt++) {
      const s = Ke[lt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ke = null, lt = 0;
  }
}
const Ot = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function hr(e) {
  try {
    for (Me = 0; Me < ue.length; Me++) {
      const t = ue[Me];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ht(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Me < ue.length; Me++) {
      const t = ue[Me];
      t && (t.flags &= -2);
    }
    Me = -1, ue.length = 0, Zt(), Qt = null, (ue.length || ut.length) && hr();
  }
}
let Pe = null, dr = null;
function Pt(e) {
  const t = Pe;
  return Pe = e, dr = e && e.type.__scopeId || null, t;
}
function Zi(e, t = Pe, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && vn(-1);
    const i = Pt(t);
    let l;
    try {
      l = e(...r);
    } finally {
      Pt(i), n._d && vn(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Oe(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const c = r[l];
    i && (c.oldValue = i[l].value);
    let f = c.dir[n];
    f && (je(), De(f, s, 8, [
      e.el,
      c,
      e,
      t
    ]), $e());
  }
}
function zi(e, t) {
  if (ae) {
    let s = ae.provides;
    const n = ae.parent && ae.parent.provides;
    n === s && (s = ae.provides = Object.create(n)), s[e] = t;
  }
}
function Gt(e, t, s = !1) {
  const n = Zl();
  if (n || dt) {
    let r = dt ? dt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && H(t) ? t.call(n && n.proxy) : t;
  }
}
const el = /* @__PURE__ */ Symbol.for("v-scx"), tl = () => Gt(el);
function bs(e, t, s) {
  return pr(e, t, s);
}
function pr(e, t, s = Q) {
  const { immediate: n, deep: r, flush: i, once: l } = s, c = ce({}, s), f = t && n || !t && i !== "post";
  let p;
  if (Ft) {
    if (i === "sync") {
      const E = tl();
      p = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!f) {
      const E = () => {
      };
      return E.stop = Re, E.resume = Re, E.pause = Re, E;
    }
  }
  const a = ae;
  c.call = (E, N, j) => De(E, a, N, j);
  let m = !1;
  i === "post" ? c.scheduler = (E) => {
    _e(E, a && a.suspense);
  } : i !== "sync" && (m = !0, c.scheduler = (E, N) => {
    N ? E() : Ys(E);
  }), c.augmentJob = (E) => {
    t && (E.flags |= 4), m && (E.flags |= 2, a && (E.id = a.uid, E.i = a));
  };
  const w = ki(e, t, c);
  return Ft && (p ? p.push(w) : f && w()), w;
}
function sl(e, t, s) {
  const n = this.proxy, r = ne(e) ? e.includes(".") ? gr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  H(t) ? i = t : (i = t.handler, s = t);
  const l = Nt(this), c = pr(r, i.bind(n), s);
  return l(), c;
}
function gr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const nl = /* @__PURE__ */ Symbol("_vte"), rl = (e) => e.__isTeleport, il = /* @__PURE__ */ Symbol("_leaveCb");
function Xs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Xs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Wo(e, t) {
  return H(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function mr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const zt = /* @__PURE__ */ new WeakMap();
function at(e, t, s, n, r = !1) {
  if (I(e)) {
    e.forEach(
      (N, j) => at(
        N,
        t && (I(t) ? t[j] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (ht(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && at(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? tn(n.component) : n.el, l = r ? null : i, { i: c, r: f } = e, p = t && t.r, a = c.refs === Q ? c.refs = {} : c.refs, m = c.setupState, w = K(m), E = m === Q ? $n : (N) => W(w, N);
  if (p != null && p !== f) {
    if (dn(t), ne(p))
      a[p] = null, E(p) && (m[p] = null);
    else if (oe(p)) {
      p.value = null;
      const N = t;
      N.k && (a[N.k] = null);
    }
  }
  if (H(f))
    Ht(f, c, 12, [l, a]);
  else {
    const N = ne(f), j = oe(f);
    if (N || j) {
      const re = () => {
        if (e.f) {
          const V = N ? E(f) ? m[f] : a[f] : f.value;
          if (r)
            I(V) && Hs(V, i);
          else if (I(V))
            V.includes(i) || V.push(i);
          else if (N)
            a[f] = [i], E(f) && (m[f] = a[f]);
          else {
            const G = [i];
            f.value = G, e.k && (a[e.k] = G);
          }
        } else N ? (a[f] = l, E(f) && (m[f] = l)) : j && (f.value = l, e.k && (a[e.k] = l));
      };
      if (l) {
        const V = () => {
          re(), zt.delete(e);
        };
        V.id = -1, zt.set(e, V), _e(V, s);
      } else
        dn(e), re();
    }
  }
}
function dn(e) {
  const t = zt.get(e);
  t && (t.flags |= 8, zt.delete(e));
}
let pn = !1;
const it = () => {
  pn || (console.error("Hydration completed but contains mismatches."), pn = !0);
}, ll = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", ol = (e) => e.namespaceURI.includes("MathML"), Bt = (e) => {
  if (e.nodeType === 1) {
    if (ll(e)) return "svg";
    if (ol(e)) return "mathml";
  }
}, Kt = (e) => e.nodeType === 8;
function cl(e) {
  const {
    mt: t,
    p: s,
    o: {
      patchProp: n,
      createText: r,
      nextSibling: i,
      parentNode: l,
      remove: c,
      insert: f,
      createComment: p
    }
  } = e, a = (d, g) => {
    if (!g.hasChildNodes()) {
      s(null, d, g), Zt(), g._vnode = d;
      return;
    }
    m(g.firstChild, d, null, null, null), Zt(), g._vnode = d;
  }, m = (d, g, A, B, L, q = !1) => {
    q = q || !!g.dynamicChildren;
    const J = Kt(d) && d.data === "[", D = () => j(
      d,
      g,
      A,
      B,
      L,
      J
    ), { type: z, ref: te, shapeFlag: se, patchFlag: xe } = g;
    let he = d.nodeType;
    g.el = d, xe === -2 && (q = !1, g.dynamicChildren = null);
    let R = null;
    switch (z) {
      case tt:
        he !== 3 ? g.children === "" ? (f(g.el = r(""), l(d), d), R = d) : R = D() : (d.data !== g.children && (it(), d.data = g.children), R = i(d));
        break;
      case st:
        G(d) ? (R = i(d), V(
          g.el = d.content.firstChild,
          d,
          A
        )) : he !== 8 || J ? R = D() : R = i(d);
        break;
      case kt:
        if (J && (d = i(d), he = d.nodeType), he === 1 || he === 3) {
          R = d;
          const $ = !g.children.length;
          for (let M = 0; M < g.staticCount; M++)
            $ && (g.children += R.nodeType === 1 ? R.outerHTML : R.data), M === g.staticCount - 1 && (g.anchor = R), R = i(R);
          return J ? i(R) : R;
        } else
          D();
        break;
      case Te:
        J ? R = N(
          d,
          g,
          A,
          B,
          L,
          q
        ) : R = D();
        break;
      default:
        if (se & 1)
          (he !== 1 || g.type.toLowerCase() !== d.tagName.toLowerCase()) && !G(d) ? R = D() : R = w(
            d,
            g,
            A,
            B,
            L,
            q
          );
        else if (se & 6) {
          g.slotScopeIds = L;
          const $ = l(d);
          if (J ? R = re(d) : Kt(d) && d.data === "teleport start" ? R = re(d, d.data, "teleport end") : R = i(d), t(
            g,
            $,
            null,
            A,
            B,
            Bt($),
            q
          ), ht(g) && !g.type.__asyncResolved) {
            let M;
            J ? (M = Fe(Te), M.anchor = R ? R.previousSibling : $.lastChild) : M = d.nodeType === 3 ? Kr("") : Fe("div"), M.el = d, g.component.subTree = M;
          }
        } else se & 64 ? he !== 8 ? R = D() : R = g.type.hydrate(
          d,
          g,
          A,
          B,
          L,
          q,
          e,
          E
        ) : se & 128 && (R = g.type.hydrate(
          d,
          g,
          A,
          B,
          Bt(l(d)),
          L,
          q,
          e,
          m
        ));
    }
    return te != null && at(te, null, B, g), R;
  }, w = (d, g, A, B, L, q) => {
    q = q || !!g.dynamicChildren;
    const { type: J, props: D, patchFlag: z, shapeFlag: te, dirs: se, transition: xe } = g, he = J === "input" || J === "option";
    if (he || z !== -1) {
      se && Oe(g, null, A, "created");
      let R = !1;
      if (G(d)) {
        R = Dr(
          null,
          // no need check parentSuspense in hydration
          xe
        ) && A && A.vnode.props && A.vnode.props.appear;
        const M = d.content.firstChild;
        if (R) {
          const ee = M.getAttribute("class");
          ee && (M.$cls = ee), xe.beforeEnter(M);
        }
        V(M, d, A), g.el = d = M;
      }
      if (te & 16 && // skip if element has innerHTML / textContent
      !(D && (D.innerHTML || D.textContent))) {
        let M = E(
          d.firstChild,
          g,
          d,
          A,
          B,
          L,
          q
        );
        for (; M; ) {
          Wt(
            d,
            1
            /* CHILDREN */
          ) || it();
          const ee = M;
          M = M.nextSibling, c(ee);
        }
      } else if (te & 8) {
        let M = g.children;
        M[0] === `
` && (d.tagName === "PRE" || d.tagName === "TEXTAREA") && (M = M.slice(1));
        const { textContent: ee } = d;
        ee !== M && // innerHTML normalize \r\n or \r into a single \n in the DOM
        ee !== M.replace(/\r\n|\r/g, `
`) && (Wt(
          d,
          0
          /* TEXT */
        ) || it(), d.textContent = g.children);
      }
      if (D) {
        if (he || !q || z & 48) {
          const M = d.tagName.includes("-");
          for (const ee in D)
            (he && (ee.endsWith("value") || ee === "indeterminate") || It(ee) && !ft(ee) || // force hydrate v-bind with .prop modifiers
            ee[0] === "." || M) && n(d, ee, null, D[ee], void 0, A);
        } else if (D.onClick)
          n(
            d,
            "onClick",
            null,
            D.onClick,
            void 0,
            A
          );
        else if (z & 4 && et(D.style))
          for (const M in D.style) D.style[M];
      }
      let $;
      ($ = D && D.onVnodeBeforeMount) && Se($, A, g), se && Oe(g, null, A, "beforeMount"), (($ = D && D.onVnodeMounted) || se || R) && $r(() => {
        $ && Se($, A, g), R && xe.enter(d), se && Oe(g, null, A, "mounted");
      }, B);
    }
    return d.nextSibling;
  }, E = (d, g, A, B, L, q, J) => {
    J = J || !!g.dynamicChildren;
    const D = g.children, z = D.length;
    for (let te = 0; te < z; te++) {
      const se = J ? D[te] : D[te] = be(D[te]), xe = se.type === tt;
      d ? (xe && !J && te + 1 < z && be(D[te + 1]).type === tt && (f(
        r(
          d.data.slice(se.children.length)
        ),
        A,
        i(d)
      ), d.data = se.children), d = m(
        d,
        se,
        B,
        L,
        q,
        J
      )) : xe && !se.children ? f(se.el = r(""), A) : (Wt(
        A,
        1
        /* CHILDREN */
      ) || it(), s(
        null,
        se,
        A,
        null,
        B,
        L,
        Bt(A),
        q
      ));
    }
    return d;
  }, N = (d, g, A, B, L, q) => {
    const { slotScopeIds: J } = g;
    J && (L = L ? L.concat(J) : J);
    const D = l(d), z = E(
      i(d),
      g,
      D,
      A,
      B,
      L,
      q
    );
    return z && Kt(z) && z.data === "]" ? i(g.anchor = z) : (it(), f(g.anchor = p("]"), D, z), z);
  }, j = (d, g, A, B, L, q) => {
    if (Wt(
      d.parentElement,
      1
      /* CHILDREN */
    ) || it(), g.el = null, q) {
      const z = re(d);
      for (; ; ) {
        const te = i(d);
        if (te && te !== z)
          c(te);
        else
          break;
      }
    }
    const J = i(d), D = l(d);
    return c(d), s(
      null,
      g,
      D,
      J,
      A,
      B,
      Bt(D),
      L
    ), A && (A.vnode.el = g.el, Cr(A, g.el)), J;
  }, re = (d, g = "[", A = "]") => {
    let B = 0;
    for (; d; )
      if (d = i(d), d && Kt(d) && (d.data === g && B++, d.data === A)) {
        if (B === 0)
          return i(d);
        B--;
      }
    return d;
  }, V = (d, g, A) => {
    const B = g.parentNode;
    B && B.replaceChild(d, g);
    let L = A;
    for (; L; )
      L.vnode.el === g && (L.vnode.el = L.subTree.el = d), L = L.parent;
  }, G = (d) => d.nodeType === 1 && d.tagName === "TEMPLATE";
  return [a, m];
}
const gn = "data-allow-mismatch", fl = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function Wt(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(gn); )
      e = e.parentElement;
  const s = e && e.getAttribute(gn);
  if (s == null)
    return !1;
  if (s === "")
    return !0;
  {
    const n = s.split(",");
    return t === 0 && n.includes("children") ? !0 : n.includes(fl[t]);
  }
}
ns().requestIdleCallback;
ns().cancelIdleCallback;
const ht = (e) => !!e.type.__asyncLoader, _r = (e) => e.type.__isKeepAlive;
function ul(e, t) {
  br(e, "a", t);
}
function al(e, t) {
  br(e, "da", t);
}
function br(e, t, s = ae) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ls(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      _r(r.parent.vnode) && hl(n, t, s, r), r = r.parent;
  }
}
function hl(e, t, s, n) {
  const r = ls(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  yr(() => {
    Hs(n[t], r);
  }, s);
}
function ls(e, t, s = ae, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...l) => {
      je();
      const c = Nt(s), f = De(t, s, e, l);
      return c(), $e(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Ue = (e) => (t, s = ae) => {
  (!Ft || e === "sp") && ls(e, (...n) => t(...n), s);
}, dl = Ue("bm"), pl = Ue("m"), gl = Ue(
  "bu"
), ml = Ue("u"), _l = Ue(
  "bum"
), yr = Ue("um"), bl = Ue(
  "sp"
), yl = Ue("rtg"), xl = Ue("rtc");
function Sl(e, t = ae) {
  ls("ec", e, t);
}
const Tl = /* @__PURE__ */ Symbol.for("v-ndc"), Ms = (e) => e ? Gr(e) ? tn(e) : Ms(e.parent) : null, vt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ms(e.parent),
    $root: (e) => Ms(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Sr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ys(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Yi.bind(e.proxy)),
    $watch: (e) => sl.bind(e)
  })
), ys = (e, t) => e !== Q && !e.__isScriptSetup && W(e, t), vl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: l, type: c, appContext: f } = e;
    if (t[0] !== "$") {
      const w = l[t];
      if (w !== void 0)
        switch (w) {
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
        if (ys(n, t))
          return l[t] = 1, n[t];
        if (r !== Q && W(r, t))
          return l[t] = 2, r[t];
        if (W(i, t))
          return l[t] = 3, i[t];
        if (s !== Q && W(s, t))
          return l[t] = 4, s[t];
        Os && (l[t] = 0);
      }
    }
    const p = vt[t];
    let a, m;
    if (p)
      return t === "$attrs" && le(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (a = c.__cssModules) && (a = a[t])
    )
      return a;
    if (s !== Q && W(s, t))
      return l[t] = 4, s[t];
    if (
      // global properties
      m = f.config.globalProperties, W(m, t)
    )
      return m[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return ys(r, t) ? (r[t] = s, !0) : n !== Q && W(n, t) ? (n[t] = s, !0) : W(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: l }
  }, c) {
    let f;
    return !!(s[c] || e !== Q && c[0] !== "$" && W(e, c) || ys(t, c) || W(i, c) || W(n, c) || W(vt, c) || W(r.config.globalProperties, c) || (f = l.__cssModules) && f[c]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : W(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function mn(e) {
  return I(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Os = !0;
function Cl(e) {
  const t = Sr(e), s = e.proxy, n = e.ctx;
  Os = !1, t.beforeCreate && _n(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: l,
    watch: c,
    provide: f,
    inject: p,
    // lifecycle
    created: a,
    beforeMount: m,
    mounted: w,
    beforeUpdate: E,
    updated: N,
    activated: j,
    deactivated: re,
    beforeDestroy: V,
    beforeUnmount: G,
    destroyed: d,
    unmounted: g,
    render: A,
    renderTracked: B,
    renderTriggered: L,
    errorCaptured: q,
    serverPrefetch: J,
    // public API
    expose: D,
    inheritAttrs: z,
    // assets
    components: te,
    directives: se,
    filters: xe
  } = t;
  if (p && wl(p, n, null), l)
    for (const $ in l) {
      const M = l[$];
      H(M) && (n[$] = M.bind(s));
    }
  if (r) {
    const $ = r.call(s, s);
    Z($) && (e.data = qs($));
  }
  if (Os = !0, i)
    for (const $ in i) {
      const M = i[$], ee = H(M) ? M.bind(s, s) : H(M.get) ? M.get.bind(s, s) : Re, Lt = !H(M) && H(M.set) ? M.set.bind(s) : Re, Xe = no({
        get: ee,
        set: Lt
      });
      Object.defineProperty(n, $, {
        enumerable: !0,
        configurable: !0,
        get: () => Xe.value,
        set: (Ee) => Xe.value = Ee
      });
    }
  if (c)
    for (const $ in c)
      xr(c[$], n, s, $);
  if (f) {
    const $ = H(f) ? f.call(s) : f;
    Reflect.ownKeys($).forEach((M) => {
      zi(M, $[M]);
    });
  }
  a && _n(a, e, "c");
  function R($, M) {
    I(M) ? M.forEach((ee) => $(ee.bind(s))) : M && $(M.bind(s));
  }
  if (R(dl, m), R(pl, w), R(gl, E), R(ml, N), R(ul, j), R(al, re), R(Sl, q), R(xl, B), R(yl, L), R(_l, G), R(yr, g), R(bl, J), I(D))
    if (D.length) {
      const $ = e.exposed || (e.exposed = {});
      D.forEach((M) => {
        Object.defineProperty($, M, {
          get: () => s[M],
          set: (ee) => s[M] = ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === Re && (e.render = A), z != null && (e.inheritAttrs = z), te && (e.components = te), se && (e.directives = se), J && mr(e);
}
function wl(e, t, s = Re) {
  I(e) && (e = Ps(e));
  for (const n in e) {
    const r = e[n];
    let i;
    Z(r) ? "default" in r ? i = Gt(
      r.from || n,
      r.default,
      !0
    ) : i = Gt(r.from || n) : i = Gt(r), oe(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[n] = i;
  }
}
function _n(e, t, s) {
  De(
    I(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function xr(e, t, s, n) {
  let r = n.includes(".") ? gr(s, n) : () => s[n];
  if (ne(e)) {
    const i = t[e];
    H(i) && bs(r, i);
  } else if (H(e))
    bs(r, e.bind(s));
  else if (Z(e))
    if (I(e))
      e.forEach((i) => xr(i, t, s, n));
    else {
      const i = H(e.handler) ? e.handler.bind(s) : t[e.handler];
      H(i) && bs(r, i, e);
    }
}
function Sr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, c = i.get(t);
  let f;
  return c ? f = c : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (p) => es(f, p, l, !0)
  ), es(f, t, l)), Z(t) && i.set(t, f), f;
}
function es(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && es(e, i, s, !0), r && r.forEach(
    (l) => es(e, l, s, !0)
  );
  for (const l in t)
    if (!(n && l === "expose")) {
      const c = El[l] || s && s[l];
      e[l] = c ? c(e[l], t[l]) : t[l];
    }
  return e;
}
const El = {
  data: bn,
  props: yn,
  emits: yn,
  // objects
  methods: xt,
  computed: xt,
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
  components: xt,
  directives: xt,
  // watch
  watch: Ml,
  // provide / inject
  provide: bn,
  inject: Al
};
function bn(e, t) {
  return t ? e ? function() {
    return ce(
      H(e) ? e.call(this, this) : e,
      H(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Al(e, t) {
  return xt(Ps(e), Ps(t));
}
function Ps(e) {
  if (I(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function xt(e, t) {
  return e ? ce(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function yn(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ce(
    /* @__PURE__ */ Object.create(null),
    mn(e),
    mn(t ?? {})
  ) : t;
}
function Ml(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ce(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = fe(e[n], t[n]);
  return s;
}
function Tr() {
  return {
    app: null,
    config: {
      isNativeTag: $n,
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
let Ol = 0;
function Pl(e, t) {
  return function(n, r = null) {
    H(n) || (n = ce({}, n)), r != null && !Z(r) && (r = null);
    const i = Tr(), l = /* @__PURE__ */ new WeakSet(), c = [];
    let f = !1;
    const p = i.app = {
      _uid: Ol++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: ro,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...m) {
        return l.has(a) || (a && H(a.install) ? (l.add(a), a.install(p, ...m)) : H(a) && (l.add(a), a(p, ...m))), p;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), p;
      },
      component(a, m) {
        return m ? (i.components[a] = m, p) : i.components[a];
      },
      directive(a, m) {
        return m ? (i.directives[a] = m, p) : i.directives[a];
      },
      mount(a, m, w) {
        if (!f) {
          const E = p._ceVNode || Fe(n, r);
          return E.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), m && t ? t(E, a) : e(E, a, w), f = !0, p._container = a, a.__vue_app__ = p, tn(E.component);
        }
      },
      onUnmount(a) {
        c.push(a);
      },
      unmount() {
        f && (De(
          c,
          p._instance,
          16
        ), e(null, p._container), delete p._container.__vue_app__);
      },
      provide(a, m) {
        return i.provides[a] = m, p;
      },
      runWithContext(a) {
        const m = dt;
        dt = p;
        try {
          return a();
        } finally {
          dt = m;
        }
      }
    };
    return p;
  };
}
let dt = null;
const Rl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ke(t)}Modifiers`] || e[`${Ye(t)}Modifiers`];
function Fl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Q;
  let r = s;
  const i = t.startsWith("update:"), l = i && Rl(n, t.slice(7));
  l && (l.trim && (r = s.map((a) => ne(a) ? a.trim() : a)), l.number && (r = s.map(ri)));
  let c, f = n[c = as(t)] || // also try camelCase event handler (#2249)
  n[c = as(ke(t))];
  !f && i && (f = n[c = as(Ye(t))]), f && De(
    f,
    e,
    6,
    r
  );
  const p = n[c + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, De(
      p,
      e,
      6,
      r
    );
  }
}
const Il = /* @__PURE__ */ new WeakMap();
function vr(e, t, s = !1) {
  const n = s ? Il : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let l = {}, c = !1;
  if (!H(e)) {
    const f = (p) => {
      const a = vr(p, t, !0);
      a && (c = !0, ce(l, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !c ? (Z(e) && n.set(e, null), null) : (I(i) ? i.forEach((f) => l[f] = null) : ce(l, i), Z(e) && n.set(e, l), l);
}
function os(e, t) {
  return !e || !It(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), W(e, t[0].toLowerCase() + t.slice(1)) || W(e, Ye(t)) || W(e, t));
}
function qt(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: l,
    attrs: c,
    emit: f,
    render: p,
    renderCache: a,
    props: m,
    data: w,
    setupState: E,
    ctx: N,
    inheritAttrs: j
  } = e, re = Pt(e);
  let V, G;
  try {
    if (s.shapeFlag & 4) {
      const g = r || n, A = g;
      V = be(
        p.call(
          A,
          g,
          a,
          m,
          E,
          w,
          N
        )
      ), G = c;
    } else {
      const g = t;
      V = be(
        g.length > 1 ? g(
          m,
          { attrs: c, slots: l, emit: f }
        ) : g(
          m,
          null
        )
      ), G = t.props ? c : Dl(c);
    }
  } catch (g) {
    Ct.length = 0, is(g, e, 1), V = Fe(st);
  }
  let d = V;
  if (G && j !== !1) {
    const g = Object.keys(G), { shapeFlag: A } = d;
    g.length && A & 7 && (i && g.some(Ds) && (G = Hl(
      G,
      i
    )), d = pt(d, G, !1, !0));
  }
  return s.dirs && (d = pt(d, null, !1, !0), d.dirs = d.dirs ? d.dirs.concat(s.dirs) : s.dirs), s.transition && Xs(d, s.transition), V = d, Pt(re), V;
}
const Dl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || It(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Hl = (e, t) => {
  const s = {};
  for (const n in e)
    (!Ds(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Nl(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: l, children: c, patchFlag: f } = t, p = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? xn(n, l, p) : !!l;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let m = 0; m < a.length; m++) {
        const w = a[m];
        if (l[w] !== n[w] && !os(p, w))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : n === l ? !1 : n ? l ? xn(n, l, p) : !0 : !!l;
  return !1;
}
function xn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !os(s, i))
      return !0;
  }
  return !1;
}
function Cr({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const wr = {}, Er = () => Object.create(wr), Ar = (e) => Object.getPrototypeOf(e) === wr;
function Ll(e, t, s, n = !1) {
  const r = {}, i = Er();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Mr(e, t, r, i);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  s ? e.props = n ? r : ji(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function jl(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, c = K(r), [f] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const a = e.vnode.dynamicProps;
      for (let m = 0; m < a.length; m++) {
        let w = a[m];
        if (os(e.emitsOptions, w))
          continue;
        const E = t[w];
        if (f)
          if (W(i, w))
            E !== i[w] && (i[w] = E, p = !0);
          else {
            const N = ke(w);
            r[N] = Rs(
              f,
              c,
              N,
              E,
              e,
              !1
            );
          }
        else
          E !== i[w] && (i[w] = E, p = !0);
      }
    }
  } else {
    Mr(e, t, r, i) && (p = !0);
    let a;
    for (const m in c)
      (!t || // for camelCase
      !W(t, m) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Ye(m)) === m || !W(t, a))) && (f ? s && // for camelCase
      (s[m] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[m] = Rs(
        f,
        c,
        m,
        void 0,
        e,
        !0
      )) : delete r[m]);
    if (i !== c)
      for (const m in i)
        (!t || !W(t, m)) && (delete i[m], p = !0);
  }
  p && Le(e.attrs, "set", "");
}
function Mr(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let l = !1, c;
  if (t)
    for (let f in t) {
      if (ft(f))
        continue;
      const p = t[f];
      let a;
      r && W(r, a = ke(f)) ? !i || !i.includes(a) ? s[a] = p : (c || (c = {}))[a] = p : os(e.emitsOptions, f) || (!(f in n) || p !== n[f]) && (n[f] = p, l = !0);
    }
  if (i) {
    const f = K(s), p = c || Q;
    for (let a = 0; a < i.length; a++) {
      const m = i[a];
      s[m] = Rs(
        r,
        f,
        m,
        p[m],
        e,
        !W(p, m)
      );
    }
  }
  return l;
}
function Rs(e, t, s, n, r, i) {
  const l = e[s];
  if (l != null) {
    const c = W(l, "default");
    if (c && n === void 0) {
      const f = l.default;
      if (l.type !== Function && !l.skipFactory && H(f)) {
        const { propsDefaults: p } = r;
        if (s in p)
          n = p[s];
        else {
          const a = Nt(r);
          n = p[s] = f.call(
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
    ] && (i && !c ? n = !1 : l[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Ye(s)) && (n = !0));
  }
  return n;
}
const $l = /* @__PURE__ */ new WeakMap();
function Or(e, t, s = !1) {
  const n = s ? $l : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, c = [];
  let f = !1;
  if (!H(e)) {
    const a = (m) => {
      f = !0;
      const [w, E] = Or(m, t, !0);
      ce(l, w), E && c.push(...E);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return Z(e) && n.set(e, ot), ot;
  if (I(i))
    for (let a = 0; a < i.length; a++) {
      const m = ke(i[a]);
      Sn(m) && (l[m] = Q);
    }
  else if (i)
    for (const a in i) {
      const m = ke(a);
      if (Sn(m)) {
        const w = i[a], E = l[m] = I(w) || H(w) ? { type: w } : ce({}, w), N = E.type;
        let j = !1, re = !0;
        if (I(N))
          for (let V = 0; V < N.length; ++V) {
            const G = N[V], d = H(G) && G.name;
            if (d === "Boolean") {
              j = !0;
              break;
            } else d === "String" && (re = !1);
          }
        else
          j = H(N) && N.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = j, E[
          1
          /* shouldCastTrue */
        ] = re, (j || W(E, "default")) && c.push(m);
      }
    }
  const p = [l, c];
  return Z(e) && n.set(e, p), p;
}
function Sn(e) {
  return e[0] !== "$" && !ft(e);
}
const Qs = (e) => e === "_" || e === "_ctx" || e === "$stable", Zs = (e) => I(e) ? e.map(be) : [be(e)], Vl = (e, t, s) => {
  if (t._n)
    return t;
  const n = Zi((...r) => Zs(t(...r)), s);
  return n._c = !1, n;
}, Pr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (Qs(r)) continue;
    const i = e[r];
    if (H(i))
      t[r] = Vl(r, i, n);
    else if (i != null) {
      const l = Zs(i);
      t[r] = () => l;
    }
  }
}, Rr = (e, t) => {
  const s = Zs(t);
  e.slots.default = () => s;
}, Fr = (e, t, s) => {
  for (const n in t)
    (s || !Qs(n)) && (e[n] = t[n]);
}, Ul = (e, t, s) => {
  const n = e.slots = Er();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Fr(n, t, s), s && Wn(n, "_", r, !0)) : Pr(t, n);
  } else t && Rr(e, t);
}, Bl = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, l = Q;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? s && c === 1 ? i = !1 : Fr(r, t, s) : (i = !t.$stable, Pr(t, r)), l = t;
  } else t && (Rr(e, t), l = { default: 1 });
  if (i)
    for (const c in r)
      !Qs(c) && l[c] == null && delete r[c];
}, _e = $r;
function Kl(e) {
  return Ir(e);
}
function Wl(e) {
  return Ir(e, cl);
}
function Ir(e, t) {
  const s = ns();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: l,
    createText: c,
    createComment: f,
    setText: p,
    setElementText: a,
    parentNode: m,
    nextSibling: w,
    setScopeId: E = Re,
    insertStaticContent: N
  } = e, j = (o, u, h, x = null, _ = null, b = null, v = void 0, T = null, S = !!u.dynamicChildren) => {
    if (o === u)
      return;
    o && !yt(o, u) && (x = jt(o), Ee(o, _, b, !0), o = null), u.patchFlag === -2 && (S = !1, u.dynamicChildren = null);
    const { type: y, ref: P, shapeFlag: C } = u;
    switch (y) {
      case tt:
        re(o, u, h, x);
        break;
      case st:
        V(o, u, h, x);
        break;
      case kt:
        o == null && G(u, h, x, v);
        break;
      case Te:
        te(
          o,
          u,
          h,
          x,
          _,
          b,
          v,
          T,
          S
        );
        break;
      default:
        C & 1 ? A(
          o,
          u,
          h,
          x,
          _,
          b,
          v,
          T,
          S
        ) : C & 6 ? se(
          o,
          u,
          h,
          x,
          _,
          b,
          v,
          T,
          S
        ) : (C & 64 || C & 128) && y.process(
          o,
          u,
          h,
          x,
          _,
          b,
          v,
          T,
          S,
          nt
        );
    }
    P != null && _ ? at(P, o && o.ref, b, u || o, !u) : P == null && o && o.ref != null && at(o.ref, null, b, o, !0);
  }, re = (o, u, h, x) => {
    if (o == null)
      n(
        u.el = c(u.children),
        h,
        x
      );
    else {
      const _ = u.el = o.el;
      u.children !== o.children && p(_, u.children);
    }
  }, V = (o, u, h, x) => {
    o == null ? n(
      u.el = f(u.children || ""),
      h,
      x
    ) : u.el = o.el;
  }, G = (o, u, h, x) => {
    [o.el, o.anchor] = N(
      o.children,
      u,
      h,
      x,
      o.el,
      o.anchor
    );
  }, d = ({ el: o, anchor: u }, h, x) => {
    let _;
    for (; o && o !== u; )
      _ = w(o), n(o, h, x), o = _;
    n(u, h, x);
  }, g = ({ el: o, anchor: u }) => {
    let h;
    for (; o && o !== u; )
      h = w(o), r(o), o = h;
    r(u);
  }, A = (o, u, h, x, _, b, v, T, S) => {
    if (u.type === "svg" ? v = "svg" : u.type === "math" && (v = "mathml"), o == null)
      B(
        u,
        h,
        x,
        _,
        b,
        v,
        T,
        S
      );
    else {
      const y = o.el && o.el._isVueCE ? o.el : null;
      try {
        y && y._beginPatch(), J(
          o,
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
  }, B = (o, u, h, x, _, b, v, T) => {
    let S, y;
    const { props: P, shapeFlag: C, transition: O, dirs: F } = o;
    if (S = o.el = l(
      o.type,
      b,
      P && P.is,
      P
    ), C & 8 ? a(S, o.children) : C & 16 && q(
      o.children,
      S,
      null,
      x,
      _,
      xs(o, b),
      v,
      T
    ), F && Oe(o, null, x, "created"), L(S, o, o.scopeId, v, x), P) {
      for (const Y in P)
        Y !== "value" && !ft(Y) && i(S, Y, null, P[Y], b, x);
      "value" in P && i(S, "value", null, P.value, b), (y = P.onVnodeBeforeMount) && Se(y, x, o);
    }
    F && Oe(o, null, x, "beforeMount");
    const U = Dr(_, O);
    U && O.beforeEnter(S), n(S, u, h), ((y = P && P.onVnodeMounted) || U || F) && _e(() => {
      y && Se(y, x, o), U && O.enter(S), F && Oe(o, null, x, "mounted");
    }, _);
  }, L = (o, u, h, x, _) => {
    if (h && E(o, h), x)
      for (let b = 0; b < x.length; b++)
        E(o, x[b]);
    if (_) {
      let b = _.subTree;
      if (u === b || jr(b.type) && (b.ssContent === u || b.ssFallback === u)) {
        const v = _.vnode;
        L(
          o,
          v,
          v.scopeId,
          v.slotScopeIds,
          _.parent
        );
      }
    }
  }, q = (o, u, h, x, _, b, v, T, S = 0) => {
    for (let y = S; y < o.length; y++) {
      const P = o[y] = T ? We(o[y]) : be(o[y]);
      j(
        null,
        P,
        u,
        h,
        x,
        _,
        b,
        v,
        T
      );
    }
  }, J = (o, u, h, x, _, b, v) => {
    const T = u.el = o.el;
    let { patchFlag: S, dynamicChildren: y, dirs: P } = u;
    S |= o.patchFlag & 16;
    const C = o.props || Q, O = u.props || Q;
    let F;
    if (h && Qe(h, !1), (F = O.onVnodeBeforeUpdate) && Se(F, h, u, o), P && Oe(u, o, h, "beforeUpdate"), h && Qe(h, !0), (C.innerHTML && O.innerHTML == null || C.textContent && O.textContent == null) && a(T, ""), y ? D(
      o.dynamicChildren,
      y,
      T,
      h,
      x,
      xs(u, _),
      b
    ) : v || M(
      o,
      u,
      T,
      null,
      h,
      x,
      xs(u, _),
      b,
      !1
    ), S > 0) {
      if (S & 16)
        z(T, C, O, h, _);
      else if (S & 2 && C.class !== O.class && i(T, "class", null, O.class, _), S & 4 && i(T, "style", C.style, O.style, _), S & 8) {
        const U = u.dynamicProps;
        for (let Y = 0; Y < U.length; Y++) {
          const k = U[Y], de = C[k], ie = O[k];
          (ie !== de || k === "value") && i(T, k, de, ie, _, h);
        }
      }
      S & 1 && o.children !== u.children && a(T, u.children);
    } else !v && y == null && z(T, C, O, h, _);
    ((F = O.onVnodeUpdated) || P) && _e(() => {
      F && Se(F, h, u, o), P && Oe(u, o, h, "updated");
    }, x);
  }, D = (o, u, h, x, _, b, v) => {
    for (let T = 0; T < u.length; T++) {
      const S = o[T], y = u[T], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !yt(S, y) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? m(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      j(
        S,
        y,
        P,
        null,
        x,
        _,
        b,
        v,
        !0
      );
    }
  }, z = (o, u, h, x, _) => {
    if (u !== h) {
      if (u !== Q)
        for (const b in u)
          !ft(b) && !(b in h) && i(
            o,
            b,
            u[b],
            null,
            _,
            x
          );
      for (const b in h) {
        if (ft(b)) continue;
        const v = h[b], T = u[b];
        v !== T && b !== "value" && i(o, b, T, v, _, x);
      }
      "value" in h && i(o, "value", u.value, h.value, _);
    }
  }, te = (o, u, h, x, _, b, v, T, S) => {
    const y = u.el = o ? o.el : c(""), P = u.anchor = o ? o.anchor : c("");
    let { patchFlag: C, dynamicChildren: O, slotScopeIds: F } = u;
    F && (T = T ? T.concat(F) : F), o == null ? (n(y, h, x), n(P, h, x), q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      P,
      _,
      b,
      v,
      T,
      S
    )) : C > 0 && C & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    o.dynamicChildren && o.dynamicChildren.length === O.length ? (D(
      o.dynamicChildren,
      O,
      h,
      _,
      b,
      v,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || _ && u === _.subTree) && Hr(
      o,
      u,
      !0
      /* shallow */
    )) : M(
      o,
      u,
      h,
      P,
      _,
      b,
      v,
      T,
      S
    );
  }, se = (o, u, h, x, _, b, v, T, S) => {
    u.slotScopeIds = T, o == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      h,
      x,
      v,
      S
    ) : xe(
      u,
      h,
      x,
      _,
      b,
      v,
      S
    ) : he(o, u, S);
  }, xe = (o, u, h, x, _, b, v) => {
    const T = o.component = Wr(
      o,
      x,
      _
    );
    if (_r(o) && (T.ctx.renderer = nt), qr(T, !1, v), T.asyncDep) {
      if (_ && _.registerDep(T, R, v), !o.el) {
        const S = T.subTree = Fe(st);
        V(null, S, u, h), o.placeholder = S.el;
      }
    } else
      R(
        T,
        o,
        u,
        h,
        _,
        b,
        v
      );
  }, he = (o, u, h) => {
    const x = u.component = o.component;
    if (Nl(o, u, h))
      if (x.asyncDep && !x.asyncResolved) {
        $(x, u, h);
        return;
      } else
        x.next = u, x.update();
    else
      u.el = o.el, x.vnode = u;
  }, R = (o, u, h, x, _, b, v) => {
    const T = () => {
      if (o.isMounted) {
        let { next: C, bu: O, u: F, parent: U, vnode: Y } = o;
        {
          const ge = Nr(o);
          if (ge) {
            C && (C.el = Y.el, $(o, C, v)), ge.asyncDep.then(() => {
              o.isUnmounted || T();
            });
            return;
          }
        }
        let k = C, de;
        Qe(o, !1), C ? (C.el = Y.el, $(o, C, v)) : C = Y, O && hs(O), (de = C.props && C.props.onVnodeBeforeUpdate) && Se(de, U, C, Y), Qe(o, !0);
        const ie = qt(o), ve = o.subTree;
        o.subTree = ie, j(
          ve,
          ie,
          // parent may have changed if it's in a teleport
          m(ve.el),
          // anchor may have changed if it's in a fragment
          jt(ve),
          o,
          _,
          b
        ), C.el = ie.el, k === null && Cr(o, ie.el), F && _e(F, _), (de = C.props && C.props.onVnodeUpdated) && _e(
          () => Se(de, U, C, Y),
          _
        );
      } else {
        let C;
        const { el: O, props: F } = u, { bm: U, m: Y, parent: k, root: de, type: ie } = o, ve = ht(u);
        if (Qe(o, !1), U && hs(U), !ve && (C = F && F.onVnodeBeforeMount) && Se(C, k, u), Qe(o, !0), O && us) {
          const ge = () => {
            o.subTree = qt(o), us(
              O,
              o.subTree,
              o,
              _,
              null
            );
          };
          ve && ie.__asyncHydrate ? ie.__asyncHydrate(
            O,
            o,
            ge
          ) : ge();
        } else {
          de.ce && // @ts-expect-error _def is private
          de.ce._def.shadowRoot !== !1 && de.ce._injectChildStyle(ie);
          const ge = o.subTree = qt(o);
          j(
            null,
            ge,
            h,
            x,
            o,
            _,
            b
          ), u.el = ge.el;
        }
        if (Y && _e(Y, _), !ve && (C = F && F.onVnodeMounted)) {
          const ge = u;
          _e(
            () => Se(C, k, ge),
            _
          );
        }
        (u.shapeFlag & 256 || k && ht(k.vnode) && k.vnode.shapeFlag & 256) && o.a && _e(o.a, _), o.isMounted = !0, u = h = x = null;
      }
    };
    o.scope.on();
    const S = o.effect = new Yn(T);
    o.scope.off();
    const y = o.update = S.run.bind(S), P = o.job = S.runIfDirty.bind(S);
    P.i = o, P.id = o.uid, S.scheduler = () => Ys(P), Qe(o, !0), y();
  }, $ = (o, u, h) => {
    u.component = o;
    const x = o.vnode.props;
    o.vnode = u, o.next = null, jl(o, u.props, x, h), Bl(o, u.children, h), je(), hn(o), $e();
  }, M = (o, u, h, x, _, b, v, T, S = !1) => {
    const y = o && o.children, P = o ? o.shapeFlag : 0, C = u.children, { patchFlag: O, shapeFlag: F } = u;
    if (O > 0) {
      if (O & 128) {
        Lt(
          y,
          C,
          h,
          x,
          _,
          b,
          v,
          T,
          S
        );
        return;
      } else if (O & 256) {
        ee(
          y,
          C,
          h,
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
    F & 8 ? (P & 16 && mt(y, _, b), C !== y && a(h, C)) : P & 16 ? F & 16 ? Lt(
      y,
      C,
      h,
      x,
      _,
      b,
      v,
      T,
      S
    ) : mt(y, _, b, !0) : (P & 8 && a(h, ""), F & 16 && q(
      C,
      h,
      x,
      _,
      b,
      v,
      T,
      S
    ));
  }, ee = (o, u, h, x, _, b, v, T, S) => {
    o = o || ot, u = u || ot;
    const y = o.length, P = u.length, C = Math.min(y, P);
    let O;
    for (O = 0; O < C; O++) {
      const F = u[O] = S ? We(u[O]) : be(u[O]);
      j(
        o[O],
        F,
        h,
        null,
        _,
        b,
        v,
        T,
        S
      );
    }
    y > P ? mt(
      o,
      _,
      b,
      !0,
      !1,
      C
    ) : q(
      u,
      h,
      x,
      _,
      b,
      v,
      T,
      S,
      C
    );
  }, Lt = (o, u, h, x, _, b, v, T, S) => {
    let y = 0;
    const P = u.length;
    let C = o.length - 1, O = P - 1;
    for (; y <= C && y <= O; ) {
      const F = o[y], U = u[y] = S ? We(u[y]) : be(u[y]);
      if (yt(F, U))
        j(
          F,
          U,
          h,
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
    for (; y <= C && y <= O; ) {
      const F = o[C], U = u[O] = S ? We(u[O]) : be(u[O]);
      if (yt(F, U))
        j(
          F,
          U,
          h,
          null,
          _,
          b,
          v,
          T,
          S
        );
      else
        break;
      C--, O--;
    }
    if (y > C) {
      if (y <= O) {
        const F = O + 1, U = F < P ? u[F].el : x;
        for (; y <= O; )
          j(
            null,
            u[y] = S ? We(u[y]) : be(u[y]),
            h,
            U,
            _,
            b,
            v,
            T,
            S
          ), y++;
      }
    } else if (y > O)
      for (; y <= C; )
        Ee(o[y], _, b, !0), y++;
    else {
      const F = y, U = y, Y = /* @__PURE__ */ new Map();
      for (y = U; y <= O; y++) {
        const me = u[y] = S ? We(u[y]) : be(u[y]);
        me.key != null && Y.set(me.key, y);
      }
      let k, de = 0;
      const ie = O - U + 1;
      let ve = !1, ge = 0;
      const _t = new Array(ie);
      for (y = 0; y < ie; y++) _t[y] = 0;
      for (y = F; y <= C; y++) {
        const me = o[y];
        if (de >= ie) {
          Ee(me, _, b, !0);
          continue;
        }
        let Ae;
        if (me.key != null)
          Ae = Y.get(me.key);
        else
          for (k = U; k <= O; k++)
            if (_t[k - U] === 0 && yt(me, u[k])) {
              Ae = k;
              break;
            }
        Ae === void 0 ? Ee(me, _, b, !0) : (_t[Ae - U] = y + 1, Ae >= ge ? ge = Ae : ve = !0, j(
          me,
          u[Ae],
          h,
          null,
          _,
          b,
          v,
          T,
          S
        ), de++);
      }
      const rn = ve ? Gl(_t) : ot;
      for (k = rn.length - 1, y = ie - 1; y >= 0; y--) {
        const me = U + y, Ae = u[me], ln = u[me + 1], on = me + 1 < P ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ln.el || Lr(ln)
        ) : x;
        _t[y] === 0 ? j(
          null,
          Ae,
          h,
          on,
          _,
          b,
          v,
          T,
          S
        ) : ve && (k < 0 || y !== rn[k] ? Xe(Ae, h, on, 2) : k--);
      }
    }
  }, Xe = (o, u, h, x, _ = null) => {
    const { el: b, type: v, transition: T, children: S, shapeFlag: y } = o;
    if (y & 6) {
      Xe(o.component.subTree, u, h, x);
      return;
    }
    if (y & 128) {
      o.suspense.move(u, h, x);
      return;
    }
    if (y & 64) {
      v.move(o, u, h, nt);
      return;
    }
    if (v === Te) {
      n(b, u, h);
      for (let C = 0; C < S.length; C++)
        Xe(S[C], u, h, x);
      n(o.anchor, u, h);
      return;
    }
    if (v === kt) {
      d(o, u, h);
      return;
    }
    if (x !== 2 && y & 1 && T)
      if (x === 0)
        T.beforeEnter(b), n(b, u, h), _e(() => T.enter(b), _);
      else {
        const { leave: C, delayLeave: O, afterLeave: F } = T, U = () => {
          o.ctx.isUnmounted ? r(b) : n(b, u, h);
        }, Y = () => {
          b._isLeaving && b[il](
            !0
            /* cancelled */
          ), C(b, () => {
            U(), F && F();
          });
        };
        O ? O(b, U, Y) : Y();
      }
    else
      n(b, u, h);
  }, Ee = (o, u, h, x = !1, _ = !1) => {
    const {
      type: b,
      props: v,
      ref: T,
      children: S,
      dynamicChildren: y,
      shapeFlag: P,
      patchFlag: C,
      dirs: O,
      cacheIndex: F
    } = o;
    if (C === -2 && (_ = !1), T != null && (je(), at(T, null, h, o, !0), $e()), F != null && (u.renderCache[F] = void 0), P & 256) {
      u.ctx.deactivate(o);
      return;
    }
    const U = P & 1 && O, Y = !ht(o);
    let k;
    if (Y && (k = v && v.onVnodeBeforeUnmount) && Se(k, u, o), P & 6)
      zr(o.component, h, x);
    else {
      if (P & 128) {
        o.suspense.unmount(h, x);
        return;
      }
      U && Oe(o, null, u, "beforeUnmount"), P & 64 ? o.type.remove(
        o,
        u,
        h,
        nt,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Te || C > 0 && C & 64) ? mt(
        y,
        u,
        h,
        !1,
        !0
      ) : (b === Te && C & 384 || !_ && P & 16) && mt(S, u, h), x && sn(o);
    }
    (Y && (k = v && v.onVnodeUnmounted) || U) && _e(() => {
      k && Se(k, u, o), U && Oe(o, null, u, "unmounted");
    }, h);
  }, sn = (o) => {
    const { type: u, el: h, anchor: x, transition: _ } = o;
    if (u === Te) {
      Zr(h, x);
      return;
    }
    if (u === kt) {
      g(o);
      return;
    }
    const b = () => {
      r(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (o.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: v, delayLeave: T } = _, S = () => v(h, b);
      T ? T(o.el, b, S) : S();
    } else
      b();
  }, Zr = (o, u) => {
    let h;
    for (; o !== u; )
      h = w(o), r(o), o = h;
    r(u);
  }, zr = (o, u, h) => {
    const { bum: x, scope: _, job: b, subTree: v, um: T, m: S, a: y } = o;
    Tn(S), Tn(y), x && hs(x), _.stop(), b && (b.flags |= 8, Ee(v, o, u, h)), T && _e(T, u), _e(() => {
      o.isUnmounted = !0;
    }, u);
  }, mt = (o, u, h, x = !1, _ = !1, b = 0) => {
    for (let v = b; v < o.length; v++)
      Ee(o[v], u, h, x, _);
  }, jt = (o) => {
    if (o.shapeFlag & 6)
      return jt(o.component.subTree);
    if (o.shapeFlag & 128)
      return o.suspense.next();
    const u = w(o.anchor || o.el), h = u && u[nl];
    return h ? w(h) : u;
  };
  let cs = !1;
  const nn = (o, u, h) => {
    let x;
    o == null ? u._vnode && (Ee(u._vnode, null, null, !0), x = u._vnode.component) : j(
      u._vnode || null,
      o,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = o, cs || (cs = !0, hn(x), Zt(), cs = !1);
  }, nt = {
    p: j,
    um: Ee,
    m: Xe,
    r: sn,
    mt: xe,
    mc: q,
    pc: M,
    pbc: D,
    n: jt,
    o: e
  };
  let fs, us;
  return t && ([fs, us] = t(
    nt
  )), {
    render: nn,
    hydrate: fs,
    createApp: Pl(nn, fs)
  };
}
function xs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Qe({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Dr(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Hr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (I(n) && I(r))
    for (let i = 0; i < n.length; i++) {
      const l = n[i];
      let c = r[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[i] = We(r[i]), c.el = l.el), !s && c.patchFlag !== -2 && Hr(l, c)), c.type === tt && (c.patchFlag !== -1 ? c.el = l.el : c.__elIndex = i + // take fragment start anchor into account
      (e.type === Te ? 1 : 0)), c.type === st && !c.el && (c.el = l.el);
    }
}
function Gl(e) {
  const t = e.slice(), s = [0];
  let n, r, i, l, c;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const p = e[n];
    if (p !== 0) {
      if (r = s[s.length - 1], e[r] < p) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, l = s.length - 1; i < l; )
        c = i + l >> 1, e[s[c]] < p ? i = c + 1 : l = c;
      p < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, l = s[i - 1]; i-- > 0; )
    s[i] = l, l = t[l];
  return s;
}
function Nr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Nr(t);
}
function Tn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Lr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Lr(t.subTree) : null;
}
const jr = (e) => e.__isSuspense;
function $r(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : Qi(e);
}
const Te = /* @__PURE__ */ Symbol.for("v-fgt"), tt = /* @__PURE__ */ Symbol.for("v-txt"), st = /* @__PURE__ */ Symbol.for("v-cmt"), kt = /* @__PURE__ */ Symbol.for("v-stc"), Ct = [];
let ye = null;
function Go(e = !1) {
  Ct.push(ye = e ? null : []);
}
function ql() {
  Ct.pop(), ye = Ct[Ct.length - 1] || null;
}
let Rt = 1;
function vn(e, t = !1) {
  Rt += e, e < 0 && ye && t && (ye.hasOnce = !0);
}
function Vr(e) {
  return e.dynamicChildren = Rt > 0 ? ye || ot : null, ql(), Rt > 0 && ye && ye.push(e), e;
}
function qo(e, t, s, n, r, i) {
  return Vr(
    Br(
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
function ko(e, t, s, n, r) {
  return Vr(
    Fe(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function zs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function yt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ur = ({ key: e }) => e ?? null, Jt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || oe(e) || H(e) ? { i: Pe, r: e, k: t, f: !!s } : e : null);
function Br(e, t = null, s = null, n = 0, r = null, i = e === Te ? 0 : 1, l = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ur(t),
    ref: t && Jt(t),
    scopeId: dr,
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
    ctx: Pe
  };
  return c ? (en(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= ne(s) ? 8 : 16), Rt > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ye.push(f), f;
}
const Fe = kl;
function kl(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Tl) && (e = st), zs(e)) {
    const c = pt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && en(c, s), Rt > 0 && !i && ye && (c.shapeFlag & 6 ? ye[ye.indexOf(e)] = c : ye.push(c)), c.patchFlag = -2, c;
  }
  if (so(e) && (e = e.__vccOpts), t) {
    t = Jl(t);
    let { class: c, style: f } = t;
    c && !ne(c) && (t.class = $s(c)), Z(f) && (Js(f) && !I(f) && (f = ce({}, f)), t.style = js(f));
  }
  const l = ne(e) ? 1 : jr(e) ? 128 : rl(e) ? 64 : Z(e) ? 4 : H(e) ? 2 : 0;
  return Br(
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
function Jl(e) {
  return e ? Js(e) || Ar(e) ? ce({}, e) : e : null;
}
function pt(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: l, children: c, transition: f } = e, p = t ? Yl(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && Ur(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? I(i) ? i.concat(Jt(t)) : [i, Jt(t)] : Jt(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Te ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && pt(e.ssContent),
    ssFallback: e.ssFallback && pt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && Xs(
    a,
    f.clone(a)
  ), a;
}
function Kr(e = " ", t = 0) {
  return Fe(tt, null, e, t);
}
function be(e) {
  return e == null || typeof e == "boolean" ? Fe(st) : I(e) ? Fe(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : zs(e) ? We(e) : Fe(tt, null, String(e));
}
function We(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : pt(e);
}
function en(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (I(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), en(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Ar(t) ? t._ctx = Pe : r === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else H(t) ? (t = { default: t, _ctx: Pe }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Kr(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Yl(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = $s([t.class, n.class]));
      else if (r === "style")
        t.style = js([t.style, n.style]);
      else if (It(r)) {
        const i = t[r], l = n[r];
        l && i !== l && !(I(i) && i.includes(l)) && (t[r] = i ? [].concat(i, l) : l);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Se(e, t, s, n = null) {
  De(e, t, 7, [
    s,
    n
  ]);
}
const Xl = Tr();
let Ql = 0;
function Wr(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Xl, i = {
    uid: Ql++,
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
    scope: new bi(
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
    propsOptions: Or(n, r),
    emitsOptions: vr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Fl.bind(null, i), e.ce && e.ce(i), i;
}
let ae = null;
const Zl = () => ae || Pe;
let ts, Fs;
{
  const e = ns(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((l) => l(i)) : r[0](i);
    };
  };
  ts = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ae = s
  ), Fs = t(
    "__VUE_SSR_SETTERS__",
    (s) => Ft = s
  );
}
const Nt = (e) => {
  const t = ae;
  return ts(e), e.scope.on(), () => {
    e.scope.off(), ts(t);
  };
}, Cn = () => {
  ae && ae.scope.off(), ts(null);
};
function Gr(e) {
  return e.vnode.shapeFlag & 4;
}
let Ft = !1;
function qr(e, t = !1, s = !1) {
  t && Fs(t);
  const { props: n, children: r } = e.vnode, i = Gr(e);
  Ll(e, n, i, t), Ul(e, r, s || t);
  const l = i ? zl(e, t) : void 0;
  return t && Fs(!1), l;
}
function zl(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, vl);
  const { setup: n } = s;
  if (n) {
    je();
    const r = e.setupContext = n.length > 1 ? to(e) : null, i = Nt(e), l = Ht(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), c = Vn(l);
    if ($e(), i(), (c || e.sp) && !ht(e) && mr(e), c) {
      if (l.then(Cn, Cn), t)
        return l.then((f) => {
          wn(e, f);
        }).catch((f) => {
          is(f, e, 0);
        });
      e.asyncDep = l;
    } else
      wn(e, l);
  } else
    kr(e);
}
function wn(e, t, s) {
  H(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) && (e.setupState = fr(t)), kr(e);
}
function kr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Re);
  {
    const r = Nt(e);
    je();
    try {
      Cl(e);
    } finally {
      $e(), r();
    }
  }
}
const eo = {
  get(e, t) {
    return le(e, "get", ""), e[t];
  }
};
function to(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, eo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function tn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fr($i(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in vt)
        return vt[s](e);
    },
    has(t, s) {
      return s in t || s in vt;
    }
  })) : e.proxy;
}
function so(e) {
  return H(e) && "__vccOpts" in e;
}
const no = (e, t) => Gi(e, t, Ft), ro = "3.5.26", io = {
  createComponentInstance: Wr,
  setupComponent: qr,
  renderComponentRoot: qt,
  setCurrentRenderingInstance: Pt,
  isVNode: zs,
  normalizeVNode: be
}, Jo = io;
let Is;
const En = typeof window < "u" && window.trustedTypes;
if (En)
  try {
    Is = /* @__PURE__ */ En.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Jr = Is ? (e) => Is.createHTML(e) : (e) => e, lo = "http://www.w3.org/2000/svg", oo = "http://www.w3.org/1998/Math/MathML", Ne = typeof document < "u" ? document : null, An = Ne && /* @__PURE__ */ Ne.createElement("template"), co = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Ne.createElementNS(lo, e) : t === "mathml" ? Ne.createElementNS(oo, e) : s ? Ne.createElement(e, { is: s }) : Ne.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Ne.createTextNode(e),
  createComment: (e) => Ne.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ne.querySelector(e),
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
      An.innerHTML = Jr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = An.content;
      if (n === "svg" || n === "mathml") {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      t.insertBefore(c, s);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, fo = /* @__PURE__ */ Symbol("_vtc");
function uo(e, t, s) {
  const n = e[fo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Mn = /* @__PURE__ */ Symbol("_vod"), ao = /* @__PURE__ */ Symbol("_vsh"), ho = /* @__PURE__ */ Symbol(""), po = /(?:^|;)\s*display\s*:/;
function go(e, t, s) {
  const n = e.style, r = ne(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (ne(t))
        for (const l of t.split(";")) {
          const c = l.slice(0, l.indexOf(":")).trim();
          s[c] == null && Yt(n, c, "");
        }
      else
        for (const l in t)
          s[l] == null && Yt(n, l, "");
    for (const l in s)
      l === "display" && (i = !0), Yt(n, l, s[l]);
  } else if (r) {
    if (t !== s) {
      const l = n[ho];
      l && (s += ";" + l), n.cssText = s, i = po.test(s);
    }
  } else t && e.removeAttribute("style");
  Mn in e && (e[Mn] = i ? n.display : "", e[ao] && (n.display = "none"));
}
const On = /\s*!important$/;
function Yt(e, t, s) {
  if (I(s))
    s.forEach((n) => Yt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = mo(e, t);
    On.test(s) ? e.setProperty(
      Ye(n),
      s.replace(On, ""),
      "important"
    ) : e[n] = s;
  }
}
const Pn = ["Webkit", "Moz", "ms"], Ss = {};
function mo(e, t) {
  const s = Ss[t];
  if (s)
    return s;
  let n = ke(t);
  if (n !== "filter" && n in e)
    return Ss[t] = n;
  n = Kn(n);
  for (let r = 0; r < Pn.length; r++) {
    const i = Pn[r] + n;
    if (i in e)
      return Ss[t] = i;
  }
  return t;
}
const Rn = "http://www.w3.org/1999/xlink";
function Fn(e, t, s, n, r, i = ai(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Rn, t.slice(6, t.length)) : e.setAttributeNS(Rn, t, s) : s == null || i && !qn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ie(s) ? String(s) : s
  );
}
function In(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Jr(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const c = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (c !== f || !("_value" in e)) && (e.value = f), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let l = !1;
  if (s === "" || s == null) {
    const c = typeof e[t];
    c === "boolean" ? s = qn(s) : s == null && c === "string" ? (s = "", l = !0) : c === "number" && (s = 0, l = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  l && e.removeAttribute(r || t);
}
function _o(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function bo(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Dn = /* @__PURE__ */ Symbol("_vei");
function yo(e, t, s, n, r = null) {
  const i = e[Dn] || (e[Dn] = {}), l = i[t];
  if (n && l)
    l.value = n;
  else {
    const [c, f] = xo(t);
    if (n) {
      const p = i[t] = vo(
        n,
        r
      );
      _o(e, c, p, f);
    } else l && (bo(e, c, l, f), i[t] = void 0);
  }
}
const Hn = /(?:Once|Passive|Capture)$/;
function xo(e) {
  let t;
  if (Hn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Hn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ye(e.slice(2)), t];
}
let Ts = 0;
const So = /* @__PURE__ */ Promise.resolve(), To = () => Ts || (So.then(() => Ts = 0), Ts = Date.now());
function vo(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    De(
      Co(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = To(), s;
}
function Co(e, t) {
  if (I(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const Nn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, wo = (e, t, s, n, r, i) => {
  const l = r === "svg";
  t === "class" ? uo(e, n, l) : t === "style" ? go(e, s, n) : It(t) ? Ds(t) || yo(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Eo(e, t, n, l)) ? (In(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fn(e, t, n, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ne(n)) ? In(e, ke(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Fn(e, t, n, l));
};
function Eo(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Nn(t) && H(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Nn(t) && ne(s) ? !1 : t in e;
}
const Ao = {}, Mo = {}, Oo = {};
function Po() {
  Ao.getSSRProps = ({ value: e }) => ({ value: e }), Oo.getSSRProps = ({ value: e }, t) => {
    if (t.props && rs(t.props.value, e))
      return { checked: !0 };
  }, Mo.getSSRProps = ({ value: e }, t) => {
    if (I(e)) {
      if (t.props && mi(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (Ns(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const Yr = /* @__PURE__ */ ce({ patchProp: wo }, co);
let wt, Ln = !1;
function Ro() {
  return wt || (wt = Kl(Yr));
}
function Fo() {
  return wt = Ln ? wt : Wl(Yr), Ln = !0, wt;
}
const Yo = ((...e) => {
  const t = Ro().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = Qr(n);
    if (!r) return;
    const i = t._component;
    !H(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const l = s(r, !1, Xr(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
}), Xo = ((...e) => {
  const t = Fo().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = Qr(n);
    if (r)
      return s(r, !0, Xr(r));
  }, t;
});
function Xr(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Qr(e) {
  return ne(e) ? document.querySelector(e) : e;
}
let jn = !1;
const Qo = () => {
  jn || (jn = !0, Po());
};
function Zo(e, t) {
  t === void 0 && (t = {});
  var s = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
    r.type = "text/css", s === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
  }
}
export {
  gt as A,
  It as B,
  st as C,
  js as D,
  Io as E,
  Te as F,
  $o as G,
  Do as H,
  jo as I,
  No as J,
  qn as K,
  Lo as L,
  Z as M,
  Re as N,
  Bo as O,
  Qo as P,
  Xo as Q,
  kt as S,
  tt as T,
  qo as a,
  Go as b,
  no as c,
  Wo as d,
  Br as e,
  ko as f,
  Yo as g,
  ns as h,
  Jo as i,
  Fe as j,
  el as k,
  Vn as l,
  H as m,
  $s as n,
  pl as o,
  ne as p,
  Uo as q,
  Ko as r,
  Zo as s,
  _i as t,
  Bi as u,
  Vo as v,
  bs as w,
  I as x,
  Yl as y,
  Ho as z
};
