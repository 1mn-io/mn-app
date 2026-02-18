// @__NO_SIDE_EFFECTS__
function mt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const Q = {}, ct = [], Ie = () => {
}, $n = () => !1, It = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Hs = (e) => e.startsWith("onUpdate:"), ie = Object.assign, Ns = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, ei = Object.prototype.hasOwnProperty, W = (e, t) => ei.call(e, t), I = Array.isArray, ft = (e) => Dt(e) === "[object Map]", Ls = (e) => Dt(e) === "[object Set]", cn = (e) => Dt(e) === "[object Date]", H = (e) => typeof e == "function", ne = (e) => typeof e == "string", De = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", Vn = (e) => (Z(e) || H(e)) && H(e.then) && H(e.catch), Un = Object.prototype.toString, Dt = (e) => Un.call(e), ti = (e) => Dt(e).slice(8, -1), Kn = (e) => Dt(e) === "[object Object]", js = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tt = /* @__PURE__ */ mt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ss = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, si = /-\w/g, Xe = ss(
  (e) => e.replace(si, (t) => t.slice(1).toUpperCase())
), ni = /\B([A-Z])/g, Qe = ss(
  (e) => e.replace(ni, "-$1").toLowerCase()
), Bn = ss((e) => e.charAt(0).toUpperCase() + e.slice(1)), hs = ss(
  (e) => e ? `on${Bn(e)}` : ""
), Je = (e, t) => !Object.is(e, t), ds = (e, ...t) => {
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
function $s(e) {
  if (I(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = ne(n) ? ci(n) : $s(n);
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
function Ho(e) {
  if (!e) return "";
  if (ne(e)) return e;
  let t = "";
  for (const s in e) {
    const n = e[s];
    if (ne(n) || typeof n == "number") {
      const r = s.startsWith("--") ? s : Qe(s);
      t += `${r}:${n};`;
    }
  }
  return t;
}
function Vs(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (I(e))
    for (let s = 0; s < e.length; s++) {
      const n = Vs(e[s]);
      n && (t += n + " ");
    }
  else if (Z(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const fi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ui = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", No = /* @__PURE__ */ mt(fi), Lo = /* @__PURE__ */ mt(ui), Gn = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ai = /* @__PURE__ */ mt(Gn), jo = /* @__PURE__ */ mt(
  Gn + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function kn(e) {
  return !!e || e === "";
}
const hi = /[>/="'\u0009\u000a\u000c\u0020]/, ps = {};
function $o(e) {
  if (ps.hasOwnProperty(e))
    return ps[e];
  const t = hi.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), ps[e] = !t;
}
const Vo = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function Uo(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const di = /["'&<>]/;
function Ko(e) {
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
function Bo(e) {
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
  if (s = De(e), n = De(t), s || n)
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
      const o = e.hasOwnProperty(l), f = t.hasOwnProperty(l);
      if (o && !f || !o && f || !rs(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function mi(e, t) {
  return e.findIndex((s) => rs(s, t));
}
const qn = (e) => !!(e && e.__v_isRef === !0), _i = (e) => ne(e) ? e : e == null ? "" : I(e) || Z(e) && (e.toString === Un || !H(e.toString)) ? qn(e) ? _i(e.value) : JSON.stringify(e, Jn, 2) : String(e), Jn = (e, t) => qn(t) ? Jn(e, t.value) : ft(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[gs(n, i) + " =>"] = r, s),
    {}
  )
} : Ls(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => gs(s))
} : De(t) ? gs(t) : Z(t) && !I(t) && !Kn(t) ? String(t) : t, gs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    De(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
function Wo(e) {
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
const ms = /* @__PURE__ */ new WeakSet();
class Yn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pe && pe.active && pe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ms.has(this) && (ms.delete(this), this.trigger()));
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
    const t = X, s = we;
    X = this, we = !0;
    try {
      return this.fn();
    } finally {
      zn(this), X = t, we = s, this.flags &= -3;
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
    this.flags & 64 ? ms.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Cs(this) && this.run();
  }
  get dirty() {
    return Cs(this);
  }
}
let Xn = 0, Tt, vt;
function Qn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = vt, vt = e;
    return;
  }
  e.next = Tt, Tt = e;
}
function Us() {
  Xn++;
}
function Ks() {
  if (--Xn > 0)
    return;
  if (vt) {
    let t = vt;
    for (vt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Tt; ) {
    let t = Tt;
    for (Tt = void 0; t; ) {
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
function Cs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (er(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function er(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === At) || (e.globalVersion = At, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Cs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = X, n = we;
  X = e, we = !0;
  try {
    Zn(e);
    const r = e.fn(e._value);
    (t.version === 0 || Je(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    X = s, we = n, zn(e), e.flags &= -3;
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
let we = !0;
const tr = [];
function $e() {
  tr.push(we), we = !1;
}
function Ve() {
  const e = tr.pop();
  we = e === void 0 ? !0 : e;
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
let At = 0;
class Si {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ws {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!X || !we || X === this.computed)
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
    this.version++, At++, this.notify(t);
  }
  notify(t) {
    Us();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Ks();
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
const ws = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ Symbol(
  ""
), Es = /* @__PURE__ */ Symbol(
  ""
), Mt = /* @__PURE__ */ Symbol(
  ""
);
function oe(e, t, s) {
  if (we && X) {
    let n = ws.get(e);
    n || ws.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new Ws()), r.map = n, r.key = s), r.track();
  }
}
function je(e, t, s, n, r, i) {
  const l = ws.get(e);
  if (!l) {
    At++;
    return;
  }
  const o = (f) => {
    f && f.trigger();
  };
  if (Us(), t === "clear")
    l.forEach(o);
  else {
    const f = I(e), d = f && js(s);
    if (f && s === "length") {
      const a = Number(n);
      l.forEach((m, w) => {
        (w === "length" || w === Mt || !De(w) && w >= a) && o(m);
      });
    } else
      switch ((s !== void 0 || l.has(void 0)) && o(l.get(s)), d && o(l.get(Mt)), t) {
        case "add":
          f ? d && o(l.get("length")) : (o(l.get(st)), ft(e) && o(l.get(Es)));
          break;
        case "delete":
          f || (o(l.get(st)), ft(e) && o(l.get(Es)));
          break;
        case "set":
          ft(e) && o(l.get(st));
          break;
      }
  }
  Ks();
}
function it(e) {
  const t = /* @__PURE__ */ B(e);
  return t === e ? t : (oe(t, "iterate", Mt), /* @__PURE__ */ ve(e) ? t : t.map(Ae));
}
function is(e) {
  return oe(e = /* @__PURE__ */ B(e), "iterate", Mt), e;
}
function We(e, t) {
  return /* @__PURE__ */ Ue(e) ? pt(/* @__PURE__ */ Ye(e) ? Ae(t) : t) : Ae(t);
}
const Ti = {
  __proto__: null,
  [Symbol.iterator]() {
    return _s(this, Symbol.iterator, (e) => We(this, e));
  },
  concat(...e) {
    return it(this).concat(
      ...e.map((t) => I(t) ? it(t) : t)
    );
  },
  entries() {
    return _s(this, "entries", (e) => (e[1] = We(this, e[1]), e));
  },
  every(e, t) {
    return Ne(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ne(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => We(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ne(
      this,
      "find",
      e,
      t,
      (s) => We(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return Ne(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ne(
      this,
      "findLast",
      e,
      t,
      (s) => We(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ne(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ne(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return bs(this, "includes", e);
  },
  indexOf(...e) {
    return bs(this, "indexOf", e);
  },
  join(e) {
    return it(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return bs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ne(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return yt(this, "pop");
  },
  push(...e) {
    return yt(this, "push", e);
  },
  reduce(e, ...t) {
    return an(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return an(this, "reduceRight", e, t);
  },
  shift() {
    return yt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ne(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return yt(this, "splice", e);
  },
  toReversed() {
    return it(this).toReversed();
  },
  toSorted(e) {
    return it(this).toSorted(e);
  },
  toSpliced(...e) {
    return it(this).toSpliced(...e);
  },
  unshift(...e) {
    return yt(this, "unshift", e);
  },
  values() {
    return _s(this, "values", (e) => We(this, e));
  }
};
function _s(e, t, s) {
  const n = is(e), r = n[t]();
  return n !== e && !/* @__PURE__ */ ve(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const vi = Array.prototype;
function Ne(e, t, s, n, r, i) {
  const l = is(e), o = l !== e && !/* @__PURE__ */ ve(e), f = l[t];
  if (f !== vi[t]) {
    const m = f.apply(e, i);
    return o ? Ae(m) : m;
  }
  let d = s;
  l !== e && (o ? d = function(m, w) {
    return s.call(this, We(e, m), w, e);
  } : s.length > 2 && (d = function(m, w) {
    return s.call(this, m, w, e);
  }));
  const a = f.call(l, d, n);
  return o && r ? r(a) : a;
}
function an(e, t, s, n) {
  const r = is(e);
  let i = s;
  return r !== e && (/* @__PURE__ */ ve(e) ? s.length > 3 && (i = function(l, o, f) {
    return s.call(this, l, o, f, e);
  }) : i = function(l, o, f) {
    return s.call(this, l, We(e, o), f, e);
  }), r[t](i, ...n);
}
function bs(e, t, s) {
  const n = /* @__PURE__ */ B(e);
  oe(n, "iterate", Mt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ Js(s[0]) ? (s[0] = /* @__PURE__ */ B(s[0]), n[t](...s)) : r;
}
function yt(e, t, s = []) {
  $e(), Us();
  const n = (/* @__PURE__ */ B(e))[t].apply(e, s);
  return Ks(), Ve(), n;
}
const Ci = /* @__PURE__ */ mt("__proto__,__v_isRef,__isVue"), nr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(De)
);
function wi(e) {
  De(e) || (e = String(e));
  const t = /* @__PURE__ */ B(this);
  return oe(t, "has", e), t.hasOwnProperty(e);
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
    const o = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ce(t) ? t : n
    );
    if ((De(s) ? nr.has(s) : Ci(s)) || (r || oe(t, "get", s), i))
      return o;
    if (/* @__PURE__ */ ce(o)) {
      const f = l && js(s) ? o : o.value;
      return r && Z(f) ? /* @__PURE__ */ Ms(f) : f;
    }
    return Z(o) ? r ? /* @__PURE__ */ Ms(o) : /* @__PURE__ */ ks(o) : o;
  }
}
class ir extends rr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const l = I(t) && js(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Ue(i);
      if (!/* @__PURE__ */ ve(n) && !/* @__PURE__ */ Ue(n) && (i = /* @__PURE__ */ B(i), n = /* @__PURE__ */ B(n)), !l && /* @__PURE__ */ ce(i) && !/* @__PURE__ */ ce(n))
        return d || (i.value = n), !0;
    }
    const o = l ? Number(s) < t.length : W(t, s), f = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ ce(t) ? t : r
    );
    return t === /* @__PURE__ */ B(r) && (o ? Je(n, i) && je(t, "set", s, n) : je(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = W(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && je(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!De(s) || !nr.has(s)) && oe(t, "has", s), n;
  }
  ownKeys(t) {
    return oe(
      t,
      "iterate",
      I(t) ? "length" : st
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
const As = (e) => e, $t = (e) => Reflect.getPrototypeOf(e);
function Ri(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ B(r), l = ft(i), o = e === "entries" || e === Symbol.iterator && l, f = e === "keys" && l, d = r[e](...n), a = s ? As : t ? pt : Ae;
    return !t && oe(
      i,
      "iterate",
      f ? Es : st
    ), ie(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: m, done: w } = d.next();
          return w ? { value: m, done: w } : {
            value: o ? [a(m[0]), a(m[1])] : a(m),
            done: w
          };
        }
      }
    );
  };
}
function Vt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Pi(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ B(i), o = /* @__PURE__ */ B(r);
      e || (Je(r, o) && oe(l, "get", r), oe(l, "get", o));
      const { has: f } = $t(l), d = t ? As : e ? pt : Ae;
      if (f.call(l, r))
        return d(i.get(r));
      if (f.call(l, o))
        return d(i.get(o));
      i !== l && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && oe(/* @__PURE__ */ B(r), "iterate", st), r.size;
    },
    has(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ B(i), o = /* @__PURE__ */ B(r);
      return e || (Je(r, o) && oe(l, "has", r), oe(l, "has", o)), r === o ? i.has(r) : i.has(r) || i.has(o);
    },
    forEach(r, i) {
      const l = this, o = l.__v_raw, f = /* @__PURE__ */ B(o), d = t ? As : e ? pt : Ae;
      return !e && oe(f, "iterate", st), o.forEach((a, m) => r.call(i, d(a), d(m), l));
    }
  };
  return ie(
    s,
    e ? {
      add: Vt("add"),
      set: Vt("set"),
      delete: Vt("delete"),
      clear: Vt("clear")
    } : {
      add(r) {
        !t && !/* @__PURE__ */ ve(r) && !/* @__PURE__ */ Ue(r) && (r = /* @__PURE__ */ B(r));
        const i = /* @__PURE__ */ B(this);
        return $t(i).has.call(i, r) || (i.add(r), je(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ ve(i) && !/* @__PURE__ */ Ue(i) && (i = /* @__PURE__ */ B(i));
        const l = /* @__PURE__ */ B(this), { has: o, get: f } = $t(l);
        let d = o.call(l, r);
        d || (r = /* @__PURE__ */ B(r), d = o.call(l, r));
        const a = f.call(l, r);
        return l.set(r, i), d ? Je(i, a) && je(l, "set", r, i) : je(l, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ B(this), { has: l, get: o } = $t(i);
        let f = l.call(i, r);
        f || (r = /* @__PURE__ */ B(r), f = l.call(i, r)), o && o.call(i, r);
        const d = i.delete(r);
        return f && je(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ B(this), i = r.size !== 0, l = r.clear();
        return i && je(
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
    s[r] = Ri(r, e, t);
  }), s;
}
function Gs(e, t) {
  const s = Pi(e, t);
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
// @__NO_SIDE_EFFECTS__
function ks(e) {
  return /* @__PURE__ */ Ue(e) ? e : qs(
    e,
    !1,
    Ai,
    Fi,
    lr
  );
}
// @__NO_SIDE_EFFECTS__
function ji(e) {
  return qs(
    e,
    !1,
    Oi,
    Ii,
    or
  );
}
// @__NO_SIDE_EFFECTS__
function Ms(e) {
  return qs(
    e,
    !0,
    Mi,
    Di,
    cr
  );
}
function qs(e, t, s, n, r) {
  if (!Z(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Li(e);
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
function Ye(e) {
  return /* @__PURE__ */ Ue(e) ? /* @__PURE__ */ Ye(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Js(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ B(t) : e;
}
function $i(e) {
  return !W(e, "__v_skip") && Object.isExtensible(e) && Wn(e, "__v_skip", !0), e;
}
const Ae = (e) => Z(e) ? /* @__PURE__ */ ks(e) : e, pt = (e) => Z(e) ? /* @__PURE__ */ Ms(e) : e;
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Go(e) {
  return Vi(e, !1);
}
function Vi(e, t) {
  return /* @__PURE__ */ ce(e) ? e : new Ui(e, t);
}
class Ui {
  constructor(t, s) {
    this.dep = new Ws(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ B(t), this._value = s ? t : Ae(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ ve(t) || /* @__PURE__ */ Ue(t);
    t = n ? t : /* @__PURE__ */ B(t), Je(t, s) && (this._rawValue = t, this._value = n ? t : Ae(t), this.dep.trigger());
  }
}
function Ki(e) {
  return /* @__PURE__ */ ce(e) ? e.value : e;
}
const Bi = {
  get: (e, t, s) => t === "__v_raw" ? e : Ki(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return /* @__PURE__ */ ce(r) && !/* @__PURE__ */ ce(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function fr(e) {
  return /* @__PURE__ */ Ye(e) ? e : new Proxy(e, Bi);
}
class Wi {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Ws(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = At - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
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
// @__NO_SIDE_EFFECTS__
function Gi(e, t, s = !1) {
  let n, r;
  return H(e) ? n = e : (n = e.get, r = e.set), new Wi(n, r, s);
}
const Ut = {}, Xt = /* @__PURE__ */ new WeakMap();
let et;
function ki(e, t = !1, s = et) {
  if (s) {
    let n = Xt.get(s);
    n || Xt.set(s, n = []), n.push(e);
  }
}
function qi(e, t, s = Q) {
  const { immediate: n, deep: r, once: i, scheduler: l, augmentJob: o, call: f } = s, d = (g) => r ? g : /* @__PURE__ */ ve(g) || r === !1 || r === 0 ? qe(g, 1) : qe(g);
  let a, m, w, E, N = !1, j = !1;
  if (/* @__PURE__ */ ce(e) ? (m = () => e.value, N = /* @__PURE__ */ ve(e)) : /* @__PURE__ */ Ye(e) ? (m = () => d(e), N = !0) : I(e) ? (j = !0, N = e.some((g) => /* @__PURE__ */ Ye(g) || /* @__PURE__ */ ve(g)), m = () => e.map((g) => {
    if (/* @__PURE__ */ ce(g))
      return g.value;
    if (/* @__PURE__ */ Ye(g))
      return d(g);
    if (H(g))
      return f ? f(g, 2) : g();
  })) : H(e) ? t ? m = f ? () => f(e, 2) : e : m = () => {
    if (w) {
      $e();
      try {
        w();
      } finally {
        Ve();
      }
    }
    const g = et;
    et = a;
    try {
      return f ? f(e, 3, [E]) : e(E);
    } finally {
      et = g;
    }
  } : m = Ie, t && r) {
    const g = m, A = r === !0 ? 1 / 0 : r;
    m = () => qe(g(), A);
  }
  const re = yi(), V = () => {
    a.stop(), re && re.active && Ns(re.effects, a);
  };
  if (i && t) {
    const g = t;
    t = (...A) => {
      g(...A), V();
    };
  }
  let G = j ? new Array(e.length).fill(Ut) : Ut;
  const p = (g) => {
    if (!(!(a.flags & 1) || !a.dirty && !g))
      if (t) {
        const A = a.run();
        if (r || N || (j ? A.some((K, L) => Je(K, G[L])) : Je(A, G))) {
          w && w();
          const K = et;
          et = a;
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
            et = K;
          }
        }
      } else
        a.run();
  };
  return o && o(p), a = new Yn(m), a.scheduler = l ? () => l(p, !1) : p, E = (g) => ki(g, !1, a), w = a.onStop = () => {
    const g = Xt.get(a);
    if (g) {
      if (f)
        f(g, 4);
      else
        for (const A of g) A();
      Xt.delete(a);
    }
  }, t ? n ? p(!0) : G = a.run() : l ? l(p.bind(null, !0), !0) : a.run(), V.pause = a.pause.bind(a), V.resume = a.resume.bind(a), V.stop = V, V;
}
function qe(e, t = 1 / 0, s) {
  if (t <= 0 || !Z(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ ce(e))
    qe(e.value, t, s);
  else if (I(e))
    for (let n = 0; n < e.length; n++)
      qe(e[n], t, s);
  else if (Ls(e) || ft(e))
    e.forEach((n) => {
      qe(n, t, s);
    });
  else if (Kn(e)) {
    for (const n in e)
      qe(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && qe(e[n], t, s);
  }
  return e;
}
function Ht(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    ls(r, t, s);
  }
}
function He(e, t, s, n) {
  if (H(e)) {
    const r = Ht(e, t, s, n);
    return r && Vn(r) && r.catch((i) => {
      ls(i, t, s);
    }), r;
  }
  if (I(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(He(e[i], t, s, n));
    return r;
  }
}
function ls(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || Q;
  if (t) {
    let o = t.parent;
    const f = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let m = 0; m < a.length; m++)
          if (a[m](e, f, d) === !1)
            return;
      }
      o = o.parent;
    }
    if (i) {
      $e(), Ht(i, null, 10, [
        e,
        f,
        d
      ]), Ve();
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
let Re = -1;
const ut = [];
let Ge = null, ot = 0;
const ur = /* @__PURE__ */ Promise.resolve();
let Qt = null;
function Yi(e) {
  const t = Qt || ur;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xi(e) {
  let t = Re + 1, s = ue.length;
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
  I(e) ? ut.push(...e) : Ge && e.id === -1 ? Ge.splice(ot + 1, 0, e) : e.flags & 1 || (ut.push(e), e.flags |= 1), ar();
}
function hn(e, t, s = Re + 1) {
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
    if (ut.length = 0, Ge) {
      Ge.push(...t);
      return;
    }
    for (Ge = t, ot = 0; ot < Ge.length; ot++) {
      const s = Ge[ot];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ge = null, ot = 0;
  }
}
const Ot = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function hr(e) {
  try {
    for (Re = 0; Re < ue.length; Re++) {
      const t = ue[Re];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ht(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Re < ue.length; Re++) {
      const t = ue[Re];
      t && (t.flags &= -2);
    }
    Re = -1, ue.length = 0, Zt(), Qt = null, (ue.length || ut.length) && hr();
  }
}
let Fe = null, dr = null;
function Rt(e) {
  const t = Fe;
  return Fe = e, dr = e && e.type.__scopeId || null, t;
}
function Zi(e, t = Fe, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && vn(-1);
    const i = Rt(t);
    let l;
    try {
      l = e(...r);
    } finally {
      Rt(i), n._d && vn(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Pe(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const o = r[l];
    i && (o.oldValue = i[l].value);
    let f = o.dir[n];
    f && ($e(), He(f, s, 8, [
      e.el,
      o,
      e,
      t
    ]), Ve());
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
  const n = eo();
  if (n || dt) {
    let r = dt ? dt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && H(t) ? t.call(n && n.proxy) : t;
  }
}
const el = /* @__PURE__ */ Symbol.for("v-scx"), tl = () => Gt(el);
function ys(e, t, s) {
  return pr(e, t, s);
}
function pr(e, t, s = Q) {
  const { immediate: n, deep: r, flush: i, once: l } = s, o = ie({}, s), f = t && n || !t && i !== "post";
  let d;
  if (Ft) {
    if (i === "sync") {
      const E = tl();
      d = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!f) {
      const E = () => {
      };
      return E.stop = Ie, E.resume = Ie, E.pause = Ie, E;
    }
  }
  const a = ae;
  o.call = (E, N, j) => He(E, a, N, j);
  let m = !1;
  i === "post" ? o.scheduler = (E) => {
    _e(E, a && a.suspense);
  } : i !== "sync" && (m = !0, o.scheduler = (E, N) => {
    N ? E() : Ys(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), m && (E.flags |= 2, a && (E.id = a.uid, E.i = a));
  };
  const w = qi(e, t, o);
  return Ft && (d ? d.push(w) : f && w()), w;
}
function sl(e, t, s) {
  const n = this.proxy, r = ne(e) ? e.includes(".") ? gr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  H(t) ? i = t : (i = t.handler, s = t);
  const l = Nt(this), o = pr(r, i.bind(n), s);
  return l(), o;
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
function ko(e, t) {
  return H(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ie({ name: e.name }, t, { setup: e })
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
  const i = n.shapeFlag & 4 ? tn(n.component) : n.el, l = r ? null : i, { i: o, r: f } = e, d = t && t.r, a = o.refs === Q ? o.refs = {} : o.refs, m = o.setupState, w = /* @__PURE__ */ B(m), E = m === Q ? $n : (N) => W(w, N);
  if (d != null && d !== f) {
    if (dn(t), ne(d))
      a[d] = null, E(d) && (m[d] = null);
    else if (/* @__PURE__ */ ce(d)) {
      d.value = null;
      const N = t;
      N.k && (a[N.k] = null);
    }
  }
  if (H(f))
    Ht(f, o, 12, [l, a]);
  else {
    const N = ne(f), j = /* @__PURE__ */ ce(f);
    if (N || j) {
      const re = () => {
        if (e.f) {
          const V = N ? E(f) ? m[f] : a[f] : f.value;
          if (r)
            I(V) && Ns(V, i);
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
const lt = () => {
  pn || (console.error("Hydration completed but contains mismatches."), pn = !0);
}, ll = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", ol = (e) => e.namespaceURI.includes("MathML"), Kt = (e) => {
  if (e.nodeType === 1) {
    if (ll(e)) return "svg";
    if (ol(e)) return "mathml";
  }
}, Bt = (e) => e.nodeType === 8;
function cl(e) {
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
      createComment: d
    }
  } = e, a = (p, g) => {
    if (!g.hasChildNodes()) {
      s(null, p, g), Zt(), g._vnode = p;
      return;
    }
    m(g.firstChild, p, null, null, null), Zt(), g._vnode = p;
  }, m = (p, g, A, K, L, k = !1) => {
    k = k || !!g.dynamicChildren;
    const J = Bt(p) && p.data === "[", D = () => j(
      p,
      g,
      A,
      K,
      L,
      J
    ), { type: ee, ref: te, shapeFlag: se, patchFlag: xe } = g;
    let he = p.nodeType;
    g.el = p, xe === -2 && (k = !1, g.dynamicChildren = null);
    let P = null;
    switch (ee) {
      case nt:
        he !== 3 ? g.children === "" ? (f(g.el = r(""), l(p), p), P = p) : P = D() : (p.data !== g.children && (lt(), p.data = g.children), P = i(p));
        break;
      case Ke:
        G(p) ? (P = i(p), V(
          g.el = p.content.firstChild,
          p,
          A
        )) : he !== 8 || J ? P = D() : P = i(p);
        break;
      case qt:
        if (J && (p = i(p), he = p.nodeType), he === 1 || he === 3) {
          P = p;
          const $ = !g.children.length;
          for (let M = 0; M < g.staticCount; M++)
            $ && (g.children += P.nodeType === 1 ? P.outerHTML : P.data), M === g.staticCount - 1 && (g.anchor = P), P = i(P);
          return J ? i(P) : P;
        } else
          D();
        break;
      case Te:
        J ? P = N(
          p,
          g,
          A,
          K,
          L,
          k
        ) : P = D();
        break;
      default:
        if (se & 1)
          (he !== 1 || g.type.toLowerCase() !== p.tagName.toLowerCase()) && !G(p) ? P = D() : P = w(
            p,
            g,
            A,
            K,
            L,
            k
          );
        else if (se & 6) {
          g.slotScopeIds = L;
          const $ = l(p);
          if (J ? P = re(p) : Bt(p) && p.data === "teleport start" ? P = re(p, p.data, "teleport end") : P = i(p), t(
            g,
            $,
            null,
            A,
            K,
            Kt($),
            k
          ), ht(g) && !g.type.__asyncResolved) {
            let M;
            J ? (M = Ee(Te), M.anchor = P ? P.previousSibling : $.lastChild) : M = p.nodeType === 3 ? Br("") : Ee("div"), M.el = p, g.component.subTree = M;
          }
        } else se & 64 ? he !== 8 ? P = D() : P = g.type.hydrate(
          p,
          g,
          A,
          K,
          L,
          k,
          e,
          E
        ) : se & 128 && (P = g.type.hydrate(
          p,
          g,
          A,
          K,
          Kt(l(p)),
          L,
          k,
          e,
          m
        ));
    }
    return te != null && at(te, null, K, g), P;
  }, w = (p, g, A, K, L, k) => {
    k = k || !!g.dynamicChildren;
    const { type: J, props: D, patchFlag: ee, shapeFlag: te, dirs: se, transition: xe } = g, he = J === "input" || J === "option";
    if (he || ee !== -1) {
      se && Pe(g, null, A, "created");
      let P = !1;
      if (G(p)) {
        P = Dr(
          null,
          // no need check parentSuspense in hydration
          xe
        ) && A && A.vnode.props && A.vnode.props.appear;
        const M = p.content.firstChild;
        if (P) {
          const z = M.getAttribute("class");
          z && (M.$cls = z), xe.beforeEnter(M);
        }
        V(M, p, A), g.el = p = M;
      }
      if (te & 16 && // skip if element has innerHTML / textContent
      !(D && (D.innerHTML || D.textContent))) {
        let M = E(
          p.firstChild,
          g,
          p,
          A,
          K,
          L,
          k
        );
        for (; M; ) {
          Wt(
            p,
            1
            /* CHILDREN */
          ) || lt();
          const z = M;
          M = M.nextSibling, o(z);
        }
      } else if (te & 8) {
        let M = g.children;
        M[0] === `
` && (p.tagName === "PRE" || p.tagName === "TEXTAREA") && (M = M.slice(1));
        const { textContent: z } = p;
        z !== M && // innerHTML normalize \r\n or \r into a single \n in the DOM
        z !== M.replace(/\r\n|\r/g, `
`) && (Wt(
          p,
          0
          /* TEXT */
        ) || lt(), p.textContent = g.children);
      }
      if (D) {
        if (he || !k || ee & 48) {
          const M = p.tagName.includes("-");
          for (const z in D)
            (he && (z.endsWith("value") || z === "indeterminate") || It(z) && !tt(z) || // force hydrate v-bind with .prop modifiers
            z[0] === "." || M && !tt(z)) && n(p, z, null, D[z], void 0, A);
        } else if (D.onClick)
          n(
            p,
            "onClick",
            null,
            D.onClick,
            void 0,
            A
          );
        else if (ee & 4 && /* @__PURE__ */ Ye(D.style))
          for (const M in D.style) D.style[M];
      }
      let $;
      ($ = D && D.onVnodeBeforeMount) && Se($, A, g), se && Pe(g, null, A, "beforeMount"), (($ = D && D.onVnodeMounted) || se || P) && $r(() => {
        $ && Se($, A, g), P && xe.enter(p), se && Pe(g, null, A, "mounted");
      }, K);
    }
    return p.nextSibling;
  }, E = (p, g, A, K, L, k, J) => {
    J = J || !!g.dynamicChildren;
    const D = g.children, ee = D.length;
    for (let te = 0; te < ee; te++) {
      const se = J ? D[te] : D[te] = be(D[te]), xe = se.type === nt;
      p ? (xe && !J && te + 1 < ee && be(D[te + 1]).type === nt && (f(
        r(
          p.data.slice(se.children.length)
        ),
        A,
        i(p)
      ), p.data = se.children), p = m(
        p,
        se,
        K,
        L,
        k,
        J
      )) : xe && !se.children ? f(se.el = r(""), A) : (Wt(
        A,
        1
        /* CHILDREN */
      ) || lt(), s(
        null,
        se,
        A,
        null,
        K,
        L,
        Kt(A),
        k
      ));
    }
    return p;
  }, N = (p, g, A, K, L, k) => {
    const { slotScopeIds: J } = g;
    J && (L = L ? L.concat(J) : J);
    const D = l(p), ee = E(
      i(p),
      g,
      D,
      A,
      K,
      L,
      k
    );
    return ee && Bt(ee) && ee.data === "]" ? i(g.anchor = ee) : (lt(), f(g.anchor = d("]"), D, ee), ee);
  }, j = (p, g, A, K, L, k) => {
    if (Wt(
      p.parentElement,
      1
      /* CHILDREN */
    ) || lt(), g.el = null, k) {
      const ee = re(p);
      for (; ; ) {
        const te = i(p);
        if (te && te !== ee)
          o(te);
        else
          break;
      }
    }
    const J = i(p), D = l(p);
    return o(p), s(
      null,
      g,
      D,
      J,
      A,
      K,
      Kt(D),
      L
    ), A && (A.vnode.el = g.el, Cr(A, g.el)), J;
  }, re = (p, g = "[", A = "]") => {
    let K = 0;
    for (; p; )
      if (p = i(p), p && Bt(p) && (p.data === g && K++, p.data === A)) {
        if (K === 0)
          return i(p);
        K--;
      }
    return p;
  }, V = (p, g, A) => {
    const K = g.parentNode;
    K && K.replaceChild(p, g);
    let L = A;
    for (; L; )
      L.vnode.el === g && (L.vnode.el = L.subTree.el = p), L = L.parent;
  }, G = (p) => p.nodeType === 1 && p.tagName === "TEMPLATE";
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
  if (os(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      _r(r.parent.vnode) && hl(n, t, s, r), r = r.parent;
  }
}
function hl(e, t, s, n) {
  const r = os(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  yr(() => {
    Ns(n[t], r);
  }, s);
}
function os(e, t, s = ae, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...l) => {
      $e();
      const o = Nt(s), f = He(t, s, e, l);
      return o(), Ve(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Be = (e) => (t, s = ae) => {
  (!Ft || e === "sp") && os(e, (...n) => t(...n), s);
}, dl = Be("bm"), pl = Be("m"), gl = Be(
  "bu"
), ml = Be("u"), _l = Be(
  "bum"
), yr = Be("um"), bl = Be(
  "sp"
), yl = Be("rtg"), xl = Be("rtc");
function Sl(e, t = ae) {
  os("ec", e, t);
}
const Tl = /* @__PURE__ */ Symbol.for("v-ndc");
function qo(e, t, s, n) {
  let r;
  const i = s, l = I(e);
  if (l || ne(e)) {
    const o = l && /* @__PURE__ */ Ye(e);
    let f = !1, d = !1;
    o && (f = !/* @__PURE__ */ ve(e), d = /* @__PURE__ */ Ue(e), e = is(e)), r = new Array(e.length);
    for (let a = 0, m = e.length; a < m; a++)
      r[a] = t(
        f ? d ? pt(Ae(e[a])) : Ae(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, i);
  } else if (Z(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (o, f) => t(o, f, void 0, i)
      );
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let f = 0, d = o.length; f < d; f++) {
        const a = o[f];
        r[f] = t(e[a], a, f, i);
      }
    }
  else
    r = [];
  return r;
}
const Os = (e) => e ? Gr(e) ? tn(e) : Os(e.parent) : null, Ct = (
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
    $parent: (e) => Os(e.parent),
    $root: (e) => Os(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Sr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ys(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Yi.bind(e.proxy)),
    $watch: (e) => sl.bind(e)
  })
), xs = (e, t) => e !== Q && !e.__isScriptSetup && W(e, t), vl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: l, type: o, appContext: f } = e;
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
        if (xs(n, t))
          return l[t] = 1, n[t];
        if (r !== Q && W(r, t))
          return l[t] = 2, r[t];
        if (W(i, t))
          return l[t] = 3, i[t];
        if (s !== Q && W(s, t))
          return l[t] = 4, s[t];
        Rs && (l[t] = 0);
      }
    }
    const d = Ct[t];
    let a, m;
    if (d)
      return t === "$attrs" && oe(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (a = o.__cssModules) && (a = a[t])
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
    return xs(r, t) ? (r[t] = s, !0) : n !== Q && W(n, t) ? (n[t] = s, !0) : W(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: l }
  }, o) {
    let f;
    return !!(s[o] || e !== Q && o[0] !== "$" && W(e, o) || xs(t, o) || W(i, o) || W(n, o) || W(Ct, o) || W(r.config.globalProperties, o) || (f = l.__cssModules) && f[o]);
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
let Rs = !0;
function Cl(e) {
  const t = Sr(e), s = e.proxy, n = e.ctx;
  Rs = !1, t.beforeCreate && _n(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: l,
    watch: o,
    provide: f,
    inject: d,
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
    destroyed: p,
    unmounted: g,
    render: A,
    renderTracked: K,
    renderTriggered: L,
    errorCaptured: k,
    serverPrefetch: J,
    // public API
    expose: D,
    inheritAttrs: ee,
    // assets
    components: te,
    directives: se,
    filters: xe
  } = t;
  if (d && wl(d, n, null), l)
    for (const $ in l) {
      const M = l[$];
      H(M) && (n[$] = M.bind(s));
    }
  if (r) {
    const $ = r.call(s, s);
    Z($) && (e.data = /* @__PURE__ */ ks($));
  }
  if (Rs = !0, i)
    for (const $ in i) {
      const M = i[$], z = H(M) ? M.bind(s, s) : H(M.get) ? M.get.bind(s, s) : Ie, Lt = !H(M) && H(M.set) ? M.set.bind(s) : Ie, Ze = io({
        get: z,
        set: Lt
      });
      Object.defineProperty(n, $, {
        enumerable: !0,
        configurable: !0,
        get: () => Ze.value,
        set: (Me) => Ze.value = Me
      });
    }
  if (o)
    for (const $ in o)
      xr(o[$], n, s, $);
  if (f) {
    const $ = H(f) ? f.call(s) : f;
    Reflect.ownKeys($).forEach((M) => {
      zi(M, $[M]);
    });
  }
  a && _n(a, e, "c");
  function P($, M) {
    I(M) ? M.forEach((z) => $(z.bind(s))) : M && $(M.bind(s));
  }
  if (P(dl, m), P(pl, w), P(gl, E), P(ml, N), P(ul, j), P(al, re), P(Sl, k), P(xl, K), P(yl, L), P(_l, G), P(yr, g), P(bl, J), I(D))
    if (D.length) {
      const $ = e.exposed || (e.exposed = {});
      D.forEach((M) => {
        Object.defineProperty($, M, {
          get: () => s[M],
          set: (z) => s[M] = z,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === Ie && (e.render = A), ee != null && (e.inheritAttrs = ee), te && (e.components = te), se && (e.directives = se), J && mr(e);
}
function wl(e, t, s = Ie) {
  I(e) && (e = Ps(e));
  for (const n in e) {
    const r = e[n];
    let i;
    Z(r) ? "default" in r ? i = Gt(
      r.from || n,
      r.default,
      !0
    ) : i = Gt(r.from || n) : i = Gt(r), /* @__PURE__ */ ce(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[n] = i;
  }
}
function _n(e, t, s) {
  He(
    I(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function xr(e, t, s, n) {
  let r = n.includes(".") ? gr(s, n) : () => s[n];
  if (ne(e)) {
    const i = t[e];
    H(i) && ys(r, i);
  } else if (H(e))
    ys(r, e.bind(s));
  else if (Z(e))
    if (I(e))
      e.forEach((i) => xr(i, t, s, n));
    else {
      const i = H(e.handler) ? e.handler.bind(s) : t[e.handler];
      H(i) && ys(r, i, e);
    }
}
function Sr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, o = i.get(t);
  let f;
  return o ? f = o : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (d) => es(f, d, l, !0)
  ), es(f, t, l)), Z(t) && i.set(t, f), f;
}
function es(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && es(e, i, s, !0), r && r.forEach(
    (l) => es(e, l, s, !0)
  );
  for (const l in t)
    if (!(n && l === "expose")) {
      const o = El[l] || s && s[l];
      e[l] = o ? o(e[l], t[l]) : t[l];
    }
  return e;
}
const El = {
  data: bn,
  props: yn,
  emits: yn,
  // objects
  methods: St,
  computed: St,
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
  components: St,
  directives: St,
  // watch
  watch: Ml,
  // provide / inject
  provide: bn,
  inject: Al
};
function bn(e, t) {
  return t ? e ? function() {
    return ie(
      H(e) ? e.call(this, this) : e,
      H(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Al(e, t) {
  return St(Ps(e), Ps(t));
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
function St(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function yn(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    mn(e),
    mn(t ?? {})
  ) : t;
}
function Ml(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ie(/* @__PURE__ */ Object.create(null), e);
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
function Rl(e, t) {
  return function(n, r = null) {
    H(n) || (n = ie({}, n)), r != null && !Z(r) && (r = null);
    const i = Tr(), l = /* @__PURE__ */ new WeakSet(), o = [];
    let f = !1;
    const d = i.app = {
      _uid: Ol++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: lo,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...m) {
        return l.has(a) || (a && H(a.install) ? (l.add(a), a.install(d, ...m)) : H(a) && (l.add(a), a(d, ...m))), d;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), d;
      },
      component(a, m) {
        return m ? (i.components[a] = m, d) : i.components[a];
      },
      directive(a, m) {
        return m ? (i.directives[a] = m, d) : i.directives[a];
      },
      mount(a, m, w) {
        if (!f) {
          const E = d._ceVNode || Ee(n, r);
          return E.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), m && t ? t(E, a) : e(E, a, w), f = !0, d._container = a, a.__vue_app__ = d, tn(E.component);
        }
      },
      onUnmount(a) {
        o.push(a);
      },
      unmount() {
        f && (He(
          o,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(a, m) {
        return i.provides[a] = m, d;
      },
      runWithContext(a) {
        const m = dt;
        dt = d;
        try {
          return a();
        } finally {
          dt = m;
        }
      }
    };
    return d;
  };
}
let dt = null;
const Pl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Xe(t)}Modifiers`] || e[`${Qe(t)}Modifiers`];
function Fl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Q;
  let r = s;
  const i = t.startsWith("update:"), l = i && Pl(n, t.slice(7));
  l && (l.trim && (r = s.map((a) => ne(a) ? a.trim() : a)), l.number && (r = s.map(ri)));
  let o, f = n[o = hs(t)] || // also try camelCase event handler (#2249)
  n[o = hs(Xe(t))];
  !f && i && (f = n[o = hs(Qe(t))]), f && He(
    f,
    e,
    6,
    r
  );
  const d = n[o + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, He(
      d,
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
  let l = {}, o = !1;
  if (!H(e)) {
    const f = (d) => {
      const a = vr(d, t, !0);
      a && (o = !0, ie(l, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !o ? (Z(e) && n.set(e, null), null) : (I(i) ? i.forEach((f) => l[f] = null) : ie(l, i), Z(e) && n.set(e, l), l);
}
function cs(e, t) {
  return !e || !It(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), W(e, t[0].toLowerCase() + t.slice(1)) || W(e, Qe(t)) || W(e, t));
}
function kt(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: l,
    attrs: o,
    emit: f,
    render: d,
    renderCache: a,
    props: m,
    data: w,
    setupState: E,
    ctx: N,
    inheritAttrs: j
  } = e, re = Rt(e);
  let V, G;
  try {
    if (s.shapeFlag & 4) {
      const g = r || n, A = g;
      V = be(
        d.call(
          A,
          g,
          a,
          m,
          E,
          w,
          N
        )
      ), G = o;
    } else {
      const g = t;
      V = be(
        g.length > 1 ? g(
          m,
          { attrs: o, slots: l, emit: f }
        ) : g(
          m,
          null
        )
      ), G = t.props ? o : Dl(o);
    }
  } catch (g) {
    wt.length = 0, ls(g, e, 1), V = Ee(Ke);
  }
  let p = V;
  if (G && j !== !1) {
    const g = Object.keys(G), { shapeFlag: A } = p;
    g.length && A & 7 && (i && g.some(Hs) && (G = Hl(
      G,
      i
    )), p = gt(p, G, !1, !0));
  }
  return s.dirs && (p = gt(p, null, !1, !0), p.dirs = p.dirs ? p.dirs.concat(s.dirs) : s.dirs), s.transition && Xs(p, s.transition), V = p, Rt(re), V;
}
const Dl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || It(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Hl = (e, t) => {
  const s = {};
  for (const n in e)
    (!Hs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Nl(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: l, children: o, patchFlag: f } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? xn(n, l, d) : !!l;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let m = 0; m < a.length; m++) {
        const w = a[m];
        if (l[w] !== n[w] && !cs(d, w))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : n === l ? !1 : n ? l ? xn(n, l, d) : !0 : !!l;
  return !1;
}
function xn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !cs(s, i))
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
  s ? e.props = n ? r : /* @__PURE__ */ ji(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function jl(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, o = /* @__PURE__ */ B(r), [f] = e.propsOptions;
  let d = !1;
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
        if (cs(e.emitsOptions, w))
          continue;
        const E = t[w];
        if (f)
          if (W(i, w))
            E !== i[w] && (i[w] = E, d = !0);
          else {
            const N = Xe(w);
            r[N] = Fs(
              f,
              o,
              N,
              E,
              e,
              !1
            );
          }
        else
          E !== i[w] && (i[w] = E, d = !0);
      }
    }
  } else {
    Mr(e, t, r, i) && (d = !0);
    let a;
    for (const m in o)
      (!t || // for camelCase
      !W(t, m) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Qe(m)) === m || !W(t, a))) && (f ? s && // for camelCase
      (s[m] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[m] = Fs(
        f,
        o,
        m,
        void 0,
        e,
        !0
      )) : delete r[m]);
    if (i !== o)
      for (const m in i)
        (!t || !W(t, m)) && (delete i[m], d = !0);
  }
  d && je(e.attrs, "set", "");
}
function Mr(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let l = !1, o;
  if (t)
    for (let f in t) {
      if (tt(f))
        continue;
      const d = t[f];
      let a;
      r && W(r, a = Xe(f)) ? !i || !i.includes(a) ? s[a] = d : (o || (o = {}))[a] = d : cs(e.emitsOptions, f) || (!(f in n) || d !== n[f]) && (n[f] = d, l = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ B(s), d = o || Q;
    for (let a = 0; a < i.length; a++) {
      const m = i[a];
      s[m] = Fs(
        r,
        f,
        m,
        d[m],
        e,
        !W(d, m)
      );
    }
  }
  return l;
}
function Fs(e, t, s, n, r, i) {
  const l = e[s];
  if (l != null) {
    const o = W(l, "default");
    if (o && n === void 0) {
      const f = l.default;
      if (l.type !== Function && !l.skipFactory && H(f)) {
        const { propsDefaults: d } = r;
        if (s in d)
          n = d[s];
        else {
          const a = Nt(r);
          n = d[s] = f.call(
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
    ] && (n === "" || n === Qe(s)) && (n = !0));
  }
  return n;
}
const $l = /* @__PURE__ */ new WeakMap();
function Or(e, t, s = !1) {
  const n = s ? $l : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, o = [];
  let f = !1;
  if (!H(e)) {
    const a = (m) => {
      f = !0;
      const [w, E] = Or(m, t, !0);
      ie(l, w), E && o.push(...E);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return Z(e) && n.set(e, ct), ct;
  if (I(i))
    for (let a = 0; a < i.length; a++) {
      const m = Xe(i[a]);
      Sn(m) && (l[m] = Q);
    }
  else if (i)
    for (const a in i) {
      const m = Xe(a);
      if (Sn(m)) {
        const w = i[a], E = l[m] = I(w) || H(w) ? { type: w } : ie({}, w), N = E.type;
        let j = !1, re = !0;
        if (I(N))
          for (let V = 0; V < N.length; ++V) {
            const G = N[V], p = H(G) && G.name;
            if (p === "Boolean") {
              j = !0;
              break;
            } else p === "String" && (re = !1);
          }
        else
          j = H(N) && N.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = j, E[
          1
          /* shouldCastTrue */
        ] = re, (j || W(E, "default")) && o.push(m);
      }
    }
  const d = [l, o];
  return Z(e) && n.set(e, d), d;
}
function Sn(e) {
  return e[0] !== "$" && !tt(e);
}
const Qs = (e) => e === "_" || e === "_ctx" || e === "$stable", Zs = (e) => I(e) ? e.map(be) : [be(e)], Vl = (e, t, s) => {
  if (t._n)
    return t;
  const n = Zi((...r) => Zs(t(...r)), s);
  return n._c = !1, n;
}, Rr = (e, t, s) => {
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
}, Pr = (e, t) => {
  const s = Zs(t);
  e.slots.default = () => s;
}, Fr = (e, t, s) => {
  for (const n in t)
    (s || !Qs(n)) && (e[n] = t[n]);
}, Ul = (e, t, s) => {
  const n = e.slots = Er();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Fr(n, t, s), s && Wn(n, "_", r, !0)) : Rr(t, n);
  } else t && Pr(e, t);
}, Kl = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, l = Q;
  if (n.shapeFlag & 32) {
    const o = t._;
    o ? s && o === 1 ? i = !1 : Fr(r, t, s) : (i = !t.$stable, Rr(t, r)), l = t;
  } else t && (Pr(e, t), l = { default: 1 });
  if (i)
    for (const o in r)
      !Qs(o) && l[o] == null && delete r[o];
}, _e = $r;
function Bl(e) {
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
    createText: o,
    createComment: f,
    setText: d,
    setElementText: a,
    parentNode: m,
    nextSibling: w,
    setScopeId: E = Ie,
    insertStaticContent: N
  } = e, j = (c, u, h, x = null, _ = null, b = null, v = void 0, T = null, S = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !xt(c, u) && (x = jt(c), Me(c, _, b, !0), c = null), u.patchFlag === -2 && (S = !1, u.dynamicChildren = null);
    const { type: y, ref: R, shapeFlag: C } = u;
    switch (y) {
      case nt:
        re(c, u, h, x);
        break;
      case Ke:
        V(c, u, h, x);
        break;
      case qt:
        c == null && G(u, h, x, v);
        break;
      case Te:
        te(
          c,
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
          c,
          u,
          h,
          x,
          _,
          b,
          v,
          T,
          S
        ) : C & 6 ? se(
          c,
          u,
          h,
          x,
          _,
          b,
          v,
          T,
          S
        ) : (C & 64 || C & 128) && y.process(
          c,
          u,
          h,
          x,
          _,
          b,
          v,
          T,
          S,
          rt
        );
    }
    R != null && _ ? at(R, c && c.ref, b, u || c, !u) : R == null && c && c.ref != null && at(c.ref, null, b, c, !0);
  }, re = (c, u, h, x) => {
    if (c == null)
      n(
        u.el = o(u.children),
        h,
        x
      );
    else {
      const _ = u.el = c.el;
      u.children !== c.children && d(_, u.children);
    }
  }, V = (c, u, h, x) => {
    c == null ? n(
      u.el = f(u.children || ""),
      h,
      x
    ) : u.el = c.el;
  }, G = (c, u, h, x) => {
    [c.el, c.anchor] = N(
      c.children,
      u,
      h,
      x,
      c.el,
      c.anchor
    );
  }, p = ({ el: c, anchor: u }, h, x) => {
    let _;
    for (; c && c !== u; )
      _ = w(c), n(c, h, x), c = _;
    n(u, h, x);
  }, g = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = w(c), r(c), c = h;
    r(u);
  }, A = (c, u, h, x, _, b, v, T, S) => {
    if (u.type === "svg" ? v = "svg" : u.type === "math" && (v = "mathml"), c == null)
      K(
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
  }, K = (c, u, h, x, _, b, v, T) => {
    let S, y;
    const { props: R, shapeFlag: C, transition: O, dirs: F } = c;
    if (S = c.el = l(
      c.type,
      b,
      R && R.is,
      R
    ), C & 8 ? a(S, c.children) : C & 16 && k(
      c.children,
      S,
      null,
      x,
      _,
      Ss(c, b),
      v,
      T
    ), F && Pe(c, null, x, "created"), L(S, c, c.scopeId, v, x), R) {
      for (const Y in R)
        Y !== "value" && !tt(Y) && i(S, Y, null, R[Y], b, x);
      "value" in R && i(S, "value", null, R.value, b), (y = R.onVnodeBeforeMount) && Se(y, x, c);
    }
    F && Pe(c, null, x, "beforeMount");
    const U = Dr(_, O);
    U && O.beforeEnter(S), n(S, u, h), ((y = R && R.onVnodeMounted) || U || F) && _e(() => {
      y && Se(y, x, c), U && O.enter(S), F && Pe(c, null, x, "mounted");
    }, _);
  }, L = (c, u, h, x, _) => {
    if (h && E(c, h), x)
      for (let b = 0; b < x.length; b++)
        E(c, x[b]);
    if (_) {
      let b = _.subTree;
      if (u === b || jr(b.type) && (b.ssContent === u || b.ssFallback === u)) {
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
  }, k = (c, u, h, x, _, b, v, T, S = 0) => {
    for (let y = S; y < c.length; y++) {
      const R = c[y] = T ? ke(c[y]) : be(c[y]);
      j(
        null,
        R,
        u,
        h,
        x,
        _,
        b,
        v,
        T
      );
    }
  }, J = (c, u, h, x, _, b, v) => {
    const T = u.el = c.el;
    let { patchFlag: S, dynamicChildren: y, dirs: R } = u;
    S |= c.patchFlag & 16;
    const C = c.props || Q, O = u.props || Q;
    let F;
    if (h && ze(h, !1), (F = O.onVnodeBeforeUpdate) && Se(F, h, u, c), R && Pe(u, c, h, "beforeUpdate"), h && ze(h, !0), (C.innerHTML && O.innerHTML == null || C.textContent && O.textContent == null) && a(T, ""), y ? D(
      c.dynamicChildren,
      y,
      T,
      h,
      x,
      Ss(u, _),
      b
    ) : v || M(
      c,
      u,
      T,
      null,
      h,
      x,
      Ss(u, _),
      b,
      !1
    ), S > 0) {
      if (S & 16)
        ee(T, C, O, h, _);
      else if (S & 2 && C.class !== O.class && i(T, "class", null, O.class, _), S & 4 && i(T, "style", C.style, O.style, _), S & 8) {
        const U = u.dynamicProps;
        for (let Y = 0; Y < U.length; Y++) {
          const q = U[Y], de = C[q], le = O[q];
          (le !== de || q === "value") && i(T, q, de, le, _, h);
        }
      }
      S & 1 && c.children !== u.children && a(T, u.children);
    } else !v && y == null && ee(T, C, O, h, _);
    ((F = O.onVnodeUpdated) || R) && _e(() => {
      F && Se(F, h, u, c), R && Pe(u, c, h, "updated");
    }, x);
  }, D = (c, u, h, x, _, b, v) => {
    for (let T = 0; T < u.length; T++) {
      const S = c[T], y = u[T], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xt(S, y) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? m(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      j(
        S,
        y,
        R,
        null,
        x,
        _,
        b,
        v,
        !0
      );
    }
  }, ee = (c, u, h, x, _) => {
    if (u !== h) {
      if (u !== Q)
        for (const b in u)
          !tt(b) && !(b in h) && i(
            c,
            b,
            u[b],
            null,
            _,
            x
          );
      for (const b in h) {
        if (tt(b)) continue;
        const v = h[b], T = u[b];
        v !== T && b !== "value" && i(c, b, T, v, _, x);
      }
      "value" in h && i(c, "value", u.value, h.value, _);
    }
  }, te = (c, u, h, x, _, b, v, T, S) => {
    const y = u.el = c ? c.el : o(""), R = u.anchor = c ? c.anchor : o("");
    let { patchFlag: C, dynamicChildren: O, slotScopeIds: F } = u;
    F && (T = T ? T.concat(F) : F), c == null ? (n(y, h, x), n(R, h, x), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      R,
      _,
      b,
      v,
      T,
      S
    )) : C > 0 && C & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === O.length ? (D(
      c.dynamicChildren,
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
      c,
      u,
      !0
      /* shallow */
    )) : M(
      c,
      u,
      h,
      R,
      _,
      b,
      v,
      T,
      S
    );
  }, se = (c, u, h, x, _, b, v, T, S) => {
    u.slotScopeIds = T, c == null ? u.shapeFlag & 512 ? _.ctx.activate(
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
    ) : he(c, u, S);
  }, xe = (c, u, h, x, _, b, v) => {
    const T = c.component = Wr(
      c,
      x,
      _
    );
    if (_r(c) && (T.ctx.renderer = rt), kr(T, !1, v), T.asyncDep) {
      if (_ && _.registerDep(T, P, v), !c.el) {
        const S = T.subTree = Ee(Ke);
        V(null, S, u, h), c.placeholder = S.el;
      }
    } else
      P(
        T,
        c,
        u,
        h,
        _,
        b,
        v
      );
  }, he = (c, u, h) => {
    const x = u.component = c.component;
    if (Nl(c, u, h))
      if (x.asyncDep && !x.asyncResolved) {
        $(x, u, h);
        return;
      } else
        x.next = u, x.update();
    else
      u.el = c.el, x.vnode = u;
  }, P = (c, u, h, x, _, b, v) => {
    const T = () => {
      if (c.isMounted) {
        let { next: C, bu: O, u: F, parent: U, vnode: Y } = c;
        {
          const ge = Nr(c);
          if (ge) {
            C && (C.el = Y.el, $(c, C, v)), ge.asyncDep.then(() => {
              c.isUnmounted || T();
            });
            return;
          }
        }
        let q = C, de;
        ze(c, !1), C ? (C.el = Y.el, $(c, C, v)) : C = Y, O && ds(O), (de = C.props && C.props.onVnodeBeforeUpdate) && Se(de, U, C, Y), ze(c, !0);
        const le = kt(c), Ce = c.subTree;
        c.subTree = le, j(
          Ce,
          le,
          // parent may have changed if it's in a teleport
          m(Ce.el),
          // anchor may have changed if it's in a fragment
          jt(Ce),
          c,
          _,
          b
        ), C.el = le.el, q === null && Cr(c, le.el), F && _e(F, _), (de = C.props && C.props.onVnodeUpdated) && _e(
          () => Se(de, U, C, Y),
          _
        );
      } else {
        let C;
        const { el: O, props: F } = u, { bm: U, m: Y, parent: q, root: de, type: le } = c, Ce = ht(u);
        if (ze(c, !1), U && ds(U), !Ce && (C = F && F.onVnodeBeforeMount) && Se(C, q, u), ze(c, !0), O && as) {
          const ge = () => {
            c.subTree = kt(c), as(
              O,
              c.subTree,
              c,
              _,
              null
            );
          };
          Ce && le.__asyncHydrate ? le.__asyncHydrate(
            O,
            c,
            ge
          ) : ge();
        } else {
          de.ce && // @ts-expect-error _def is private
          de.ce._def.shadowRoot !== !1 && de.ce._injectChildStyle(le);
          const ge = c.subTree = kt(c);
          j(
            null,
            ge,
            h,
            x,
            c,
            _,
            b
          ), u.el = ge.el;
        }
        if (Y && _e(Y, _), !Ce && (C = F && F.onVnodeMounted)) {
          const ge = u;
          _e(
            () => Se(C, q, ge),
            _
          );
        }
        (u.shapeFlag & 256 || q && ht(q.vnode) && q.vnode.shapeFlag & 256) && c.a && _e(c.a, _), c.isMounted = !0, u = h = x = null;
      }
    };
    c.scope.on();
    const S = c.effect = new Yn(T);
    c.scope.off();
    const y = c.update = S.run.bind(S), R = c.job = S.runIfDirty.bind(S);
    R.i = c, R.id = c.uid, S.scheduler = () => Ys(R), ze(c, !0), y();
  }, $ = (c, u, h) => {
    u.component = c;
    const x = c.vnode.props;
    c.vnode = u, c.next = null, jl(c, u.props, x, h), Kl(c, u.children, h), $e(), hn(c), Ve();
  }, M = (c, u, h, x, _, b, v, T, S = !1) => {
    const y = c && c.children, R = c ? c.shapeFlag : 0, C = u.children, { patchFlag: O, shapeFlag: F } = u;
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
        z(
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
    F & 8 ? (R & 16 && _t(y, _, b), C !== y && a(h, C)) : R & 16 ? F & 16 ? Lt(
      y,
      C,
      h,
      x,
      _,
      b,
      v,
      T,
      S
    ) : _t(y, _, b, !0) : (R & 8 && a(h, ""), F & 16 && k(
      C,
      h,
      x,
      _,
      b,
      v,
      T,
      S
    ));
  }, z = (c, u, h, x, _, b, v, T, S) => {
    c = c || ct, u = u || ct;
    const y = c.length, R = u.length, C = Math.min(y, R);
    let O;
    for (O = 0; O < C; O++) {
      const F = u[O] = S ? ke(u[O]) : be(u[O]);
      j(
        c[O],
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
    y > R ? _t(
      c,
      _,
      b,
      !0,
      !1,
      C
    ) : k(
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
  }, Lt = (c, u, h, x, _, b, v, T, S) => {
    let y = 0;
    const R = u.length;
    let C = c.length - 1, O = R - 1;
    for (; y <= C && y <= O; ) {
      const F = c[y], U = u[y] = S ? ke(u[y]) : be(u[y]);
      if (xt(F, U))
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
      const F = c[C], U = u[O] = S ? ke(u[O]) : be(u[O]);
      if (xt(F, U))
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
        const F = O + 1, U = F < R ? u[F].el : x;
        for (; y <= O; )
          j(
            null,
            u[y] = S ? ke(u[y]) : be(u[y]),
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
        Me(c[y], _, b, !0), y++;
    else {
      const F = y, U = y, Y = /* @__PURE__ */ new Map();
      for (y = U; y <= O; y++) {
        const me = u[y] = S ? ke(u[y]) : be(u[y]);
        me.key != null && Y.set(me.key, y);
      }
      let q, de = 0;
      const le = O - U + 1;
      let Ce = !1, ge = 0;
      const bt = new Array(le);
      for (y = 0; y < le; y++) bt[y] = 0;
      for (y = F; y <= C; y++) {
        const me = c[y];
        if (de >= le) {
          Me(me, _, b, !0);
          continue;
        }
        let Oe;
        if (me.key != null)
          Oe = Y.get(me.key);
        else
          for (q = U; q <= O; q++)
            if (bt[q - U] === 0 && xt(me, u[q])) {
              Oe = q;
              break;
            }
        Oe === void 0 ? Me(me, _, b, !0) : (bt[Oe - U] = y + 1, Oe >= ge ? ge = Oe : Ce = !0, j(
          me,
          u[Oe],
          h,
          null,
          _,
          b,
          v,
          T,
          S
        ), de++);
      }
      const rn = Ce ? Gl(bt) : ct;
      for (q = rn.length - 1, y = le - 1; y >= 0; y--) {
        const me = U + y, Oe = u[me], ln = u[me + 1], on = me + 1 < R ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ln.el || Lr(ln)
        ) : x;
        bt[y] === 0 ? j(
          null,
          Oe,
          h,
          on,
          _,
          b,
          v,
          T,
          S
        ) : Ce && (q < 0 || y !== rn[q] ? Ze(Oe, h, on, 2) : q--);
      }
    }
  }, Ze = (c, u, h, x, _ = null) => {
    const { el: b, type: v, transition: T, children: S, shapeFlag: y } = c;
    if (y & 6) {
      Ze(c.component.subTree, u, h, x);
      return;
    }
    if (y & 128) {
      c.suspense.move(u, h, x);
      return;
    }
    if (y & 64) {
      v.move(c, u, h, rt);
      return;
    }
    if (v === Te) {
      n(b, u, h);
      for (let C = 0; C < S.length; C++)
        Ze(S[C], u, h, x);
      n(c.anchor, u, h);
      return;
    }
    if (v === qt) {
      p(c, u, h);
      return;
    }
    if (x !== 2 && y & 1 && T)
      if (x === 0)
        T.beforeEnter(b), n(b, u, h), _e(() => T.enter(b), _);
      else {
        const { leave: C, delayLeave: O, afterLeave: F } = T, U = () => {
          c.ctx.isUnmounted ? r(b) : n(b, u, h);
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
  }, Me = (c, u, h, x = !1, _ = !1) => {
    const {
      type: b,
      props: v,
      ref: T,
      children: S,
      dynamicChildren: y,
      shapeFlag: R,
      patchFlag: C,
      dirs: O,
      cacheIndex: F
    } = c;
    if (C === -2 && (_ = !1), T != null && ($e(), at(T, null, h, c, !0), Ve()), F != null && (u.renderCache[F] = void 0), R & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const U = R & 1 && O, Y = !ht(c);
    let q;
    if (Y && (q = v && v.onVnodeBeforeUnmount) && Se(q, u, c), R & 6)
      zr(c.component, h, x);
    else {
      if (R & 128) {
        c.suspense.unmount(h, x);
        return;
      }
      U && Pe(c, null, u, "beforeUnmount"), R & 64 ? c.type.remove(
        c,
        u,
        h,
        rt,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Te || C > 0 && C & 64) ? _t(
        y,
        u,
        h,
        !1,
        !0
      ) : (b === Te && C & 384 || !_ && R & 16) && _t(S, u, h), x && sn(c);
    }
    (Y && (q = v && v.onVnodeUnmounted) || U) && _e(() => {
      q && Se(q, u, c), U && Pe(c, null, u, "unmounted");
    }, h);
  }, sn = (c) => {
    const { type: u, el: h, anchor: x, transition: _ } = c;
    if (u === Te) {
      Zr(h, x);
      return;
    }
    if (u === qt) {
      g(c);
      return;
    }
    const b = () => {
      r(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: v, delayLeave: T } = _, S = () => v(h, b);
      T ? T(c.el, b, S) : S();
    } else
      b();
  }, Zr = (c, u) => {
    let h;
    for (; c !== u; )
      h = w(c), r(c), c = h;
    r(u);
  }, zr = (c, u, h) => {
    const { bum: x, scope: _, job: b, subTree: v, um: T, m: S, a: y } = c;
    Tn(S), Tn(y), x && ds(x), _.stop(), b && (b.flags |= 8, Me(v, c, u, h)), T && _e(T, u), _e(() => {
      c.isUnmounted = !0;
    }, u);
  }, _t = (c, u, h, x = !1, _ = !1, b = 0) => {
    for (let v = b; v < c.length; v++)
      Me(c[v], u, h, x, _);
  }, jt = (c) => {
    if (c.shapeFlag & 6)
      return jt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = w(c.anchor || c.el), h = u && u[nl];
    return h ? w(h) : u;
  };
  let fs = !1;
  const nn = (c, u, h) => {
    let x;
    c == null ? u._vnode && (Me(u._vnode, null, null, !0), x = u._vnode.component) : j(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, fs || (fs = !0, hn(x), Zt(), fs = !1);
  }, rt = {
    p: j,
    um: Me,
    m: Ze,
    r: sn,
    mt: xe,
    mc: k,
    pc: M,
    pbc: D,
    n: jt,
    o: e
  };
  let us, as;
  return t && ([us, as] = t(
    rt
  )), {
    render: nn,
    hydrate: us,
    createApp: Rl(nn, us)
  };
}
function Ss({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ze({ effect: e, job: t }, s) {
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
      let o = r[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[i] = ke(r[i]), o.el = l.el), !s && o.patchFlag !== -2 && Hr(l, o)), o.type === nt && (o.patchFlag !== -1 ? o.el = l.el : o.__elIndex = i + // take fragment start anchor into account
      (e.type === Te ? 1 : 0)), o.type === Ke && !o.el && (o.el = l.el);
    }
}
function Gl(e) {
  const t = e.slice(), s = [0];
  let n, r, i, l, o;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const d = e[n];
    if (d !== 0) {
      if (r = s[s.length - 1], e[r] < d) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, l = s.length - 1; i < l; )
        o = i + l >> 1, e[s[o]] < d ? i = o + 1 : l = o;
      d < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
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
const Te = /* @__PURE__ */ Symbol.for("v-fgt"), nt = /* @__PURE__ */ Symbol.for("v-txt"), Ke = /* @__PURE__ */ Symbol.for("v-cmt"), qt = /* @__PURE__ */ Symbol.for("v-stc"), wt = [];
let ye = null;
function kl(e = !1) {
  wt.push(ye = e ? null : []);
}
function ql() {
  wt.pop(), ye = wt[wt.length - 1] || null;
}
let Pt = 1;
function vn(e, t = !1) {
  Pt += e, e < 0 && ye && t && (ye.hasOnce = !0);
}
function Vr(e) {
  return e.dynamicChildren = Pt > 0 ? ye || ct : null, ql(), Pt > 0 && ye && ye.push(e), e;
}
function Jo(e, t, s, n, r, i) {
  return Vr(
    Kr(
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
function Jl(e, t, s, n, r) {
  return Vr(
    Ee(
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
function xt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ur = ({ key: e }) => e ?? null, Jt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || /* @__PURE__ */ ce(e) || H(e) ? { i: Fe, r: e, k: t, f: !!s } : e : null);
function Kr(e, t = null, s = null, n = 0, r = null, i = e === Te ? 0 : 1, l = !1, o = !1) {
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
    ctx: Fe
  };
  return o ? (en(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= ne(s) ? 8 : 16), Pt > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ye.push(f), f;
}
const Ee = Yl;
function Yl(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Tl) && (e = Ke), zs(e)) {
    const o = gt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && en(o, s), Pt > 0 && !i && ye && (o.shapeFlag & 6 ? ye[ye.indexOf(e)] = o : ye.push(o)), o.patchFlag = -2, o;
  }
  if (ro(e) && (e = e.__vccOpts), t) {
    t = Xl(t);
    let { class: o, style: f } = t;
    o && !ne(o) && (t.class = Vs(o)), Z(f) && (/* @__PURE__ */ Js(f) && !I(f) && (f = ie({}, f)), t.style = $s(f));
  }
  const l = ne(e) ? 1 : jr(e) ? 128 : rl(e) ? 64 : Z(e) ? 4 : H(e) ? 2 : 0;
  return Kr(
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
function Xl(e) {
  return e ? /* @__PURE__ */ Js(e) || Ar(e) ? ie({}, e) : e : null;
}
function gt(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: l, children: o, transition: f } = e, d = t ? Ql(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ur(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? I(i) ? i.concat(Jt(t)) : [i, Jt(t)] : Jt(t)
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
    ssContent: e.ssContent && gt(e.ssContent),
    ssFallback: e.ssFallback && gt(e.ssFallback),
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
function Br(e = " ", t = 0) {
  return Ee(nt, null, e, t);
}
function Yo(e = "", t = !1) {
  return t ? (kl(), Jl(Ke, null, e)) : Ee(Ke, null, e);
}
function be(e) {
  return e == null || typeof e == "boolean" ? Ee(Ke) : I(e) ? Ee(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : zs(e) ? ke(e) : Ee(nt, null, String(e));
}
function ke(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : gt(e);
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
      !r && !Ar(t) ? t._ctx = Fe : r === 3 && Fe && (Fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else H(t) ? (t = { default: t, _ctx: Fe }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Br(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Ql(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Vs([t.class, n.class]));
      else if (r === "style")
        t.style = $s([t.style, n.style]);
      else if (It(r)) {
        const i = t[r], l = n[r];
        l && i !== l && !(I(i) && i.includes(l)) && (t[r] = i ? [].concat(i, l) : l);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Se(e, t, s, n = null) {
  He(e, t, 7, [
    s,
    n
  ]);
}
const Zl = Tr();
let zl = 0;
function Wr(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Zl, i = {
    uid: zl++,
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
const eo = () => ae || Fe;
let ts, Is;
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
  ), Is = t(
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
function kr(e, t = !1, s = !1) {
  t && Is(t);
  const { props: n, children: r } = e.vnode, i = Gr(e);
  Ll(e, n, i, t), Ul(e, r, s || t);
  const l = i ? to(e, t) : void 0;
  return t && Is(!1), l;
}
function to(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, vl);
  const { setup: n } = s;
  if (n) {
    $e();
    const r = e.setupContext = n.length > 1 ? no(e) : null, i = Nt(e), l = Ht(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = Vn(l);
    if (Ve(), i(), (o || e.sp) && !ht(e) && mr(e), o) {
      if (l.then(Cn, Cn), t)
        return l.then((f) => {
          wn(e, f);
        }).catch((f) => {
          ls(f, e, 0);
        });
      e.asyncDep = l;
    } else
      wn(e, l);
  } else
    qr(e);
}
function wn(e, t, s) {
  H(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) && (e.setupState = fr(t)), qr(e);
}
function qr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Ie);
  {
    const r = Nt(e);
    $e();
    try {
      Cl(e);
    } finally {
      Ve(), r();
    }
  }
}
const so = {
  get(e, t) {
    return oe(e, "get", ""), e[t];
  }
};
function no(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, so),
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
      if (s in Ct)
        return Ct[s](e);
    },
    has(t, s) {
      return s in t || s in Ct;
    }
  })) : e.proxy;
}
function ro(e) {
  return H(e) && "__vccOpts" in e;
}
const io = (e, t) => /* @__PURE__ */ Gi(e, t, Ft), lo = "3.5.27", oo = {
  createComponentInstance: Wr,
  setupComponent: kr,
  renderComponentRoot: kt,
  setCurrentRenderingInstance: Rt,
  isVNode: zs,
  normalizeVNode: be
}, Xo = oo;
let Ds;
const En = typeof window < "u" && window.trustedTypes;
if (En)
  try {
    Ds = /* @__PURE__ */ En.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Jr = Ds ? (e) => Ds.createHTML(e) : (e) => e, co = "http://www.w3.org/2000/svg", fo = "http://www.w3.org/1998/Math/MathML", Le = typeof document < "u" ? document : null, An = Le && /* @__PURE__ */ Le.createElement("template"), uo = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Le.createElementNS(co, e) : t === "mathml" ? Le.createElementNS(fo, e) : s ? Le.createElement(e, { is: s }) : Le.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Le.createTextNode(e),
  createComment: (e) => Le.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Le.querySelector(e),
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
      const o = An.content;
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
}, ao = /* @__PURE__ */ Symbol("_vtc");
function ho(e, t, s) {
  const n = e[ao];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Mn = /* @__PURE__ */ Symbol("_vod"), po = /* @__PURE__ */ Symbol("_vsh"), go = /* @__PURE__ */ Symbol(""), mo = /(?:^|;)\s*display\s*:/;
function _o(e, t, s) {
  const n = e.style, r = ne(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (ne(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          s[o] == null && Yt(n, o, "");
        }
      else
        for (const l in t)
          s[l] == null && Yt(n, l, "");
    for (const l in s)
      l === "display" && (i = !0), Yt(n, l, s[l]);
  } else if (r) {
    if (t !== s) {
      const l = n[go];
      l && (s += ";" + l), n.cssText = s, i = mo.test(s);
    }
  } else t && e.removeAttribute("style");
  Mn in e && (e[Mn] = i ? n.display : "", e[po] && (n.display = "none"));
}
const On = /\s*!important$/;
function Yt(e, t, s) {
  if (I(s))
    s.forEach((n) => Yt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = bo(e, t);
    On.test(s) ? e.setProperty(
      Qe(n),
      s.replace(On, ""),
      "important"
    ) : e[n] = s;
  }
}
const Rn = ["Webkit", "Moz", "ms"], Ts = {};
function bo(e, t) {
  const s = Ts[t];
  if (s)
    return s;
  let n = Xe(t);
  if (n !== "filter" && n in e)
    return Ts[t] = n;
  n = Bn(n);
  for (let r = 0; r < Rn.length; r++) {
    const i = Rn[r] + n;
    if (i in e)
      return Ts[t] = i;
  }
  return t;
}
const Pn = "http://www.w3.org/1999/xlink";
function Fn(e, t, s, n, r, i = ai(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Pn, t.slice(6, t.length)) : e.setAttributeNS(Pn, t, s) : s == null || i && !kn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : De(s) ? String(s) : s
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
    o === "boolean" ? s = kn(s) : s == null && o === "string" ? (s = "", l = !0) : o === "number" && (s = 0, l = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  l && e.removeAttribute(r || t);
}
function yo(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function xo(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Dn = /* @__PURE__ */ Symbol("_vei");
function So(e, t, s, n, r = null) {
  const i = e[Dn] || (e[Dn] = {}), l = i[t];
  if (n && l)
    l.value = n;
  else {
    const [o, f] = To(t);
    if (n) {
      const d = i[t] = wo(
        n,
        r
      );
      yo(e, o, d, f);
    } else l && (xo(e, o, l, f), i[t] = void 0);
  }
}
const Hn = /(?:Once|Passive|Capture)$/;
function To(e) {
  let t;
  if (Hn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Hn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Qe(e.slice(2)), t];
}
let vs = 0;
const vo = /* @__PURE__ */ Promise.resolve(), Co = () => vs || (vo.then(() => vs = 0), vs = Date.now());
function wo(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    He(
      Eo(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Co(), s;
}
function Eo(e, t) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ao = (e, t, s, n, r, i) => {
  const l = r === "svg";
  t === "class" ? ho(e, n, l) : t === "style" ? _o(e, s, n) : It(t) ? Hs(t) || So(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Mo(e, t, n, l)) ? (In(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fn(e, t, n, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ne(n)) ? In(e, Xe(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Fn(e, t, n, l));
};
function Mo(e, t, s, n) {
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
const Oo = {}, Ro = {}, Po = {};
function Fo() {
  Oo.getSSRProps = ({ value: e }) => ({ value: e }), Po.getSSRProps = ({ value: e }, t) => {
    if (t.props && rs(t.props.value, e))
      return { checked: !0 };
  }, Ro.getSSRProps = ({ value: e }, t) => {
    if (I(e)) {
      if (t.props && mi(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (Ls(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const Yr = /* @__PURE__ */ ie({ patchProp: Ao }, uo);
let Et, Ln = !1;
function Io() {
  return Et || (Et = Bl(Yr));
}
function Do() {
  return Et = Ln ? Et : Wl(Yr), Ln = !0, Et;
}
const Qo = ((...e) => {
  const t = Io().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = Qr(n);
    if (!r) return;
    const i = t._component;
    !H(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const l = s(r, !1, Xr(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
}), Zo = ((...e) => {
  const t = Do().createApp(...e), { mount: s } = t;
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
const zo = () => {
  jn || (jn = !0, Fo());
};
export {
  I as A,
  Ql as B,
  Ke as C,
  Lo as D,
  mt as E,
  Te as F,
  It as G,
  Ho as H,
  Uo as I,
  No as J,
  Vo as K,
  jo as L,
  kn as M,
  Ie as N,
  $o as O,
  Z as P,
  Wo as Q,
  zo as R,
  qt as S,
  nt as T,
  Zo as U,
  yr as a,
  kl as b,
  Jo as c,
  ko as d,
  Kr as e,
  io as f,
  $s as g,
  Go as h,
  Yo as i,
  Br as j,
  Jl as k,
  Qo as l,
  ns as m,
  Vs as n,
  pl as o,
  Ee as p,
  el as q,
  qo as r,
  Xo as s,
  _i as t,
  Ki as u,
  Vn as v,
  H as w,
  ne as x,
  Bo as y,
  Ko as z
};
