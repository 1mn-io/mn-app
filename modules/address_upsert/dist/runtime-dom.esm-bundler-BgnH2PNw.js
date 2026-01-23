// @__NO_SIDE_EFFECTS__
function _t(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const Y = {}, ft = [], Ie = () => {
}, kn = () => !1, Ht = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bs = (e) => e.startsWith("onUpdate:"), ie = Object.assign, Ws = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, ui = Object.prototype.hasOwnProperty, W = (e, t) => ui.call(e, t), I = Array.isArray, ut = (e) => Lt(e) === "[object Map]", Nt = (e) => Lt(e) === "[object Set]", dn = (e) => Lt(e) === "[object Date]", H = (e) => typeof e == "function", ne = (e) => typeof e == "string", Fe = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", Jn = (e) => (Z(e) || H(e)) && H(e.then) && H(e.catch), Yn = Object.prototype.toString, Lt = (e) => Yn.call(e), ai = (e) => Lt(e).slice(8, -1), Xn = (e) => Lt(e) === "[object Object]", Gs = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tt = /* @__PURE__ */ _t(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), fs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, hi = /-\w/g, Je = fs(
  (e) => e.replace(hi, (t) => t.slice(1).toUpperCase())
), di = /\B([A-Z])/g, Xe = fs(
  (e) => e.replace(di, "-$1").toLowerCase()
), Qn = fs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ss = fs(
  (e) => e ? `on${Qn(e)}` : ""
), ke = (e, t) => !Object.is(e, t), Yt = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Zn = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, us = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let pn;
const as = () => pn || (pn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function hs(e) {
  if (I(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = ne(n) ? _i(n) : hs(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ne(e) || Z(e))
    return e;
}
const pi = /;(?![^(]*\))/g, gi = /:([^]+)/, mi = /\/\*[^]*?\*\//g;
function _i(e) {
  const t = {};
  return e.replace(mi, "").split(pi).forEach((s) => {
    if (s) {
      const n = s.split(gi);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ko(e) {
  if (!e) return "";
  if (ne(e)) return e;
  let t = "";
  for (const s in e) {
    const n = e[s];
    if (ne(n) || typeof n == "number") {
      const r = s.startsWith("--") ? s : Xe(s);
      t += `${r}:${n};`;
    }
  }
  return t;
}
function ds(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (I(e))
    for (let s = 0; s < e.length; s++) {
      const n = ds(e[s]);
      n && (t += n + " ");
    }
  else if (Z(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
function Bo(e) {
  if (!e) return null;
  let { class: t, style: s } = e;
  return t && !ne(t) && (e.class = ds(t)), s && (e.style = hs(s)), e;
}
const bi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", yi = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Wo = /* @__PURE__ */ _t(bi), Go = /* @__PURE__ */ _t(yi), zn = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xi = /* @__PURE__ */ _t(zn), qo = /* @__PURE__ */ _t(
  zn + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function er(e) {
  return !!e || e === "";
}
const Si = /[>/="'\u0009\u000a\u000c\u0020]/, Ts = {};
function ko(e) {
  if (Ts.hasOwnProperty(e))
    return Ts[e];
  const t = Si.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), Ts[e] = !t;
}
const Jo = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function Yo(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const Ti = /["'&<>]/;
function Xo(e) {
  const t = "" + e, s = Ti.exec(t);
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
const vi = /^-?>|<!--|-->|--!>|<!-$/g;
function Qo(e) {
  return e.replace(vi, "");
}
function Ci(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = jt(e[n], t[n]);
  return s;
}
function jt(e, t) {
  if (e === t) return !0;
  let s = dn(e), n = dn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Fe(e), n = Fe(t), s || n)
    return e === t;
  if (s = I(e), n = I(t), s || n)
    return s && n ? Ci(e, t) : !1;
  if (s = Z(e), n = Z(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const l in e) {
      const c = e.hasOwnProperty(l), f = t.hasOwnProperty(l);
      if (c && !f || !c && f || !jt(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function tr(e, t) {
  return e.findIndex((s) => jt(s, t));
}
const sr = (e) => !!(e && e.__v_isRef === !0), wi = (e) => ne(e) ? e : e == null ? "" : I(e) || Z(e) && (e.toString === Yn || !H(e.toString)) ? sr(e) ? wi(e.value) : JSON.stringify(e, nr, 2) : String(e), nr = (e, t) => sr(t) ? nr(e, t.value) : ut(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[vs(n, i) + " =>"] = r, s),
    {}
  )
} : Nt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => vs(s))
} : Fe(t) ? vs(t) : Z(t) && !I(t) && !Xn(t) ? String(t) : t, vs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Fe(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
function Zo(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let pe;
class Ei {
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
function Ai() {
  return pe;
}
let Q;
const Cs = /* @__PURE__ */ new WeakSet();
class rr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pe && pe.active && pe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Cs.has(this) && (Cs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || lr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, gn(this), or(this);
    const t = Q, s = we;
    Q = this, we = !0;
    try {
      return this.fn();
    } finally {
      cr(this), Q = t, we = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Js(t);
      this.deps = this.depsTail = void 0, gn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Cs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Is(this) && this.run();
  }
  get dirty() {
    return Is(this);
  }
}
let ir = 0, vt, Ct;
function lr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ct, Ct = e;
    return;
  }
  e.next = vt, vt = e;
}
function qs() {
  ir++;
}
function ks() {
  if (--ir > 0)
    return;
  if (Ct) {
    let t = Ct;
    for (Ct = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; vt; ) {
    let t = vt;
    for (vt = void 0; t; ) {
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
function or(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function cr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Js(n), Mi(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function Is(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (fr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function fr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Mt) || (e.globalVersion = Mt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Is(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = Q, n = we;
  Q = e, we = !0;
  try {
    or(e);
    const r = e.fn(e._value);
    (t.version === 0 || ke(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Q = s, we = n, cr(e), e.flags &= -3;
  }
}
function Js(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Js(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Mi(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let we = !0;
const ur = [];
function $e() {
  ur.push(we), we = !1;
}
function Ve() {
  const e = ur.pop();
  we = e === void 0 ? !0 : e;
}
function gn(e) {
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
let Mt = 0;
class Oi {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ys {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Q || !we || Q === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Q)
      s = this.activeLink = new Oi(Q, this), Q.deps ? (s.prevDep = Q.depsTail, Q.depsTail.nextDep = s, Q.depsTail = s) : Q.deps = Q.depsTail = s, ar(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = Q.depsTail, s.nextDep = void 0, Q.depsTail.nextDep = s, Q.depsTail = s, Q.deps === s && (Q.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Mt++, this.notify(t);
  }
  notify(t) {
    qs();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      ks();
    }
  }
}
function ar(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        ar(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Fs = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ Symbol(
  ""
), Ds = /* @__PURE__ */ Symbol(
  ""
), Ot = /* @__PURE__ */ Symbol(
  ""
);
function oe(e, t, s) {
  if (we && Q) {
    let n = Fs.get(e);
    n || Fs.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new Ys()), r.map = n, r.key = s), r.track();
  }
}
function Le(e, t, s, n, r, i) {
  const l = Fs.get(e);
  if (!l) {
    Mt++;
    return;
  }
  const c = (f) => {
    f && f.trigger();
  };
  if (qs(), t === "clear")
    l.forEach(c);
  else {
    const f = I(e), p = f && Gs(s);
    if (f && s === "length") {
      const a = Number(n);
      l.forEach((m, w) => {
        (w === "length" || w === Ot || !Fe(w) && w >= a) && c(m);
      });
    } else
      switch ((s !== void 0 || l.has(void 0)) && c(l.get(s)), p && c(l.get(Ot)), t) {
        case "add":
          f ? p && c(l.get("length")) : (c(l.get(st)), ut(e) && c(l.get(Ds)));
          break;
        case "delete":
          f || (c(l.get(st)), ut(e) && c(l.get(Ds)));
          break;
        case "set":
          ut(e) && c(l.get(st));
          break;
      }
  }
  ks();
}
function lt(e) {
  const t = /* @__PURE__ */ B(e);
  return t === e ? t : (oe(t, "iterate", Ot), /* @__PURE__ */ Ee(e) ? t : t.map(Ue));
}
function Xs(e) {
  return oe(e = /* @__PURE__ */ B(e), "iterate", Ot), e;
}
function We(e, t) {
  return /* @__PURE__ */ Ye(e) ? Pt(/* @__PURE__ */ nt(e) ? Ue(t) : t) : Ue(t);
}
const Pi = {
  __proto__: null,
  [Symbol.iterator]() {
    return ws(this, Symbol.iterator, (e) => We(this, e));
  },
  concat(...e) {
    return lt(this).concat(
      ...e.map((t) => I(t) ? lt(t) : t)
    );
  },
  entries() {
    return ws(this, "entries", (e) => (e[1] = We(this, e[1]), e));
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
      (s) => s.map((n) => We(this, n)),
      arguments
    );
  },
  find(e, t) {
    return He(
      this,
      "find",
      e,
      t,
      (s) => We(this, s),
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
      (s) => We(this, s),
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
    return Es(this, "includes", e);
  },
  indexOf(...e) {
    return Es(this, "indexOf", e);
  },
  join(e) {
    return lt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Es(this, "lastIndexOf", e);
  },
  map(e, t) {
    return He(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xt(this, "pop");
  },
  push(...e) {
    return xt(this, "push", e);
  },
  reduce(e, ...t) {
    return mn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return mn(this, "reduceRight", e, t);
  },
  shift() {
    return xt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return He(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xt(this, "splice", e);
  },
  toReversed() {
    return lt(this).toReversed();
  },
  toSorted(e) {
    return lt(this).toSorted(e);
  },
  toSpliced(...e) {
    return lt(this).toSpliced(...e);
  },
  unshift(...e) {
    return xt(this, "unshift", e);
  },
  values() {
    return ws(this, "values", (e) => We(this, e));
  }
};
function ws(e, t, s) {
  const n = Xs(e), r = n[t]();
  return n !== e && !/* @__PURE__ */ Ee(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const Ri = Array.prototype;
function He(e, t, s, n, r, i) {
  const l = Xs(e), c = l !== e && !/* @__PURE__ */ Ee(e), f = l[t];
  if (f !== Ri[t]) {
    const m = f.apply(e, i);
    return c ? Ue(m) : m;
  }
  let p = s;
  l !== e && (c ? p = function(m, w) {
    return s.call(this, We(e, m), w, e);
  } : s.length > 2 && (p = function(m, w) {
    return s.call(this, m, w, e);
  }));
  const a = f.call(l, p, n);
  return c && r ? r(a) : a;
}
function mn(e, t, s, n) {
  const r = Xs(e);
  let i = s;
  return r !== e && (/* @__PURE__ */ Ee(e) ? s.length > 3 && (i = function(l, c, f) {
    return s.call(this, l, c, f, e);
  }) : i = function(l, c, f) {
    return s.call(this, l, We(e, c), f, e);
  }), r[t](i, ...n);
}
function Es(e, t, s) {
  const n = /* @__PURE__ */ B(e);
  oe(n, "iterate", Ot);
  const r = n[t](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ en(s[0]) ? (s[0] = /* @__PURE__ */ B(s[0]), n[t](...s)) : r;
}
function xt(e, t, s = []) {
  $e(), qs();
  const n = (/* @__PURE__ */ B(e))[t].apply(e, s);
  return ks(), Ve(), n;
}
const Ii = /* @__PURE__ */ _t("__proto__,__v_isRef,__isVue"), hr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Fe)
);
function Fi(e) {
  Fe(e) || (e = String(e));
  const t = /* @__PURE__ */ B(this);
  return oe(t, "has", e), t.hasOwnProperty(e);
}
class dr {
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
      return n === (r ? i ? Bi : _r : i ? mr : gr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const l = I(t);
    if (!r) {
      let f;
      if (l && (f = Pi[s]))
        return f;
      if (s === "hasOwnProperty")
        return Fi;
    }
    const c = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ce(t) ? t : n
    );
    if ((Fe(s) ? hr.has(s) : Ii(s)) || (r || oe(t, "get", s), i))
      return c;
    if (/* @__PURE__ */ ce(c)) {
      const f = l && Gs(s) ? c : c.value;
      return r && Z(f) ? /* @__PURE__ */ Ns(f) : f;
    }
    return Z(c) ? r ? /* @__PURE__ */ Ns(c) : /* @__PURE__ */ Zs(c) : c;
  }
}
class pr extends dr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const l = I(t) && Gs(s);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ Ye(i);
      if (!/* @__PURE__ */ Ee(n) && !/* @__PURE__ */ Ye(n) && (i = /* @__PURE__ */ B(i), n = /* @__PURE__ */ B(n)), !l && /* @__PURE__ */ ce(i) && !/* @__PURE__ */ ce(n))
        return p || (i.value = n), !0;
    }
    const c = l ? Number(s) < t.length : W(t, s), f = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ ce(t) ? t : r
    );
    return t === /* @__PURE__ */ B(r) && (c ? ke(n, i) && Le(t, "set", s, n) : Le(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = W(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Le(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Fe(s) || !hr.has(s)) && oe(t, "has", s), n;
  }
  ownKeys(t) {
    return oe(
      t,
      "iterate",
      I(t) ? "length" : st
    ), Reflect.ownKeys(t);
  }
}
class Di extends dr {
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
const Hi = /* @__PURE__ */ new pr(), Ni = /* @__PURE__ */ new Di(), Li = /* @__PURE__ */ new pr(!0);
const Hs = (e) => e, Bt = (e) => Reflect.getPrototypeOf(e);
function ji(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ B(r), l = ut(i), c = e === "entries" || e === Symbol.iterator && l, f = e === "keys" && l, p = r[e](...n), a = s ? Hs : t ? Pt : Ue;
    return !t && oe(
      i,
      "iterate",
      f ? Ds : st
    ), ie(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: m, done: w } = p.next();
          return w ? { value: m, done: w } : {
            value: c ? [a(m[0]), a(m[1])] : a(m),
            done: w
          };
        }
      }
    );
  };
}
function Wt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $i(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ B(i), c = /* @__PURE__ */ B(r);
      e || (ke(r, c) && oe(l, "get", r), oe(l, "get", c));
      const { has: f } = Bt(l), p = t ? Hs : e ? Pt : Ue;
      if (f.call(l, r))
        return p(i.get(r));
      if (f.call(l, c))
        return p(i.get(c));
      i !== l && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && oe(/* @__PURE__ */ B(r), "iterate", st), r.size;
    },
    has(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ B(i), c = /* @__PURE__ */ B(r);
      return e || (ke(r, c) && oe(l, "has", r), oe(l, "has", c)), r === c ? i.has(r) : i.has(r) || i.has(c);
    },
    forEach(r, i) {
      const l = this, c = l.__v_raw, f = /* @__PURE__ */ B(c), p = t ? Hs : e ? Pt : Ue;
      return !e && oe(f, "iterate", st), c.forEach((a, m) => r.call(i, p(a), p(m), l));
    }
  };
  return ie(
    s,
    e ? {
      add: Wt("add"),
      set: Wt("set"),
      delete: Wt("delete"),
      clear: Wt("clear")
    } : {
      add(r) {
        !t && !/* @__PURE__ */ Ee(r) && !/* @__PURE__ */ Ye(r) && (r = /* @__PURE__ */ B(r));
        const i = /* @__PURE__ */ B(this);
        return Bt(i).has.call(i, r) || (i.add(r), Le(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Ee(i) && !/* @__PURE__ */ Ye(i) && (i = /* @__PURE__ */ B(i));
        const l = /* @__PURE__ */ B(this), { has: c, get: f } = Bt(l);
        let p = c.call(l, r);
        p || (r = /* @__PURE__ */ B(r), p = c.call(l, r));
        const a = f.call(l, r);
        return l.set(r, i), p ? ke(i, a) && Le(l, "set", r, i) : Le(l, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ B(this), { has: l, get: c } = Bt(i);
        let f = l.call(i, r);
        f || (r = /* @__PURE__ */ B(r), f = l.call(i, r)), c && c.call(i, r);
        const p = i.delete(r);
        return f && Le(i, "delete", r, void 0), p;
      },
      clear() {
        const r = /* @__PURE__ */ B(this), i = r.size !== 0, l = r.clear();
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
    s[r] = ji(r, e, t);
  }), s;
}
function Qs(e, t) {
  const s = $i(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    W(s, r) && r in n ? s : n,
    r,
    i
  );
}
const Vi = {
  get: /* @__PURE__ */ Qs(!1, !1)
}, Ui = {
  get: /* @__PURE__ */ Qs(!1, !0)
}, Ki = {
  get: /* @__PURE__ */ Qs(!0, !1)
};
const gr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), Bi = /* @__PURE__ */ new WeakMap();
function Wi(e) {
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
function Gi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Wi(ai(e));
}
// @__NO_SIDE_EFFECTS__
function Zs(e) {
  return /* @__PURE__ */ Ye(e) ? e : zs(
    e,
    !1,
    Hi,
    Vi,
    gr
  );
}
// @__NO_SIDE_EFFECTS__
function qi(e) {
  return zs(
    e,
    !1,
    Li,
    Ui,
    mr
  );
}
// @__NO_SIDE_EFFECTS__
function Ns(e) {
  return zs(
    e,
    !0,
    Ni,
    Ki,
    _r
  );
}
function zs(e, t, s, n, r) {
  if (!Z(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Gi(e);
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
// @__NO_SIDE_EFFECTS__
function nt(e) {
  return /* @__PURE__ */ Ye(e) ? /* @__PURE__ */ nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ B(t) : e;
}
function ki(e) {
  return !W(e, "__v_skip") && Object.isExtensible(e) && Zn(e, "__v_skip", !0), e;
}
const Ue = (e) => Z(e) ? /* @__PURE__ */ Zs(e) : e, Pt = (e) => Z(e) ? /* @__PURE__ */ Ns(e) : e;
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function zo(e) {
  return Ji(e, !1);
}
function Ji(e, t) {
  return /* @__PURE__ */ ce(e) ? e : new Yi(e, t);
}
class Yi {
  constructor(t, s) {
    this.dep = new Ys(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ B(t), this._value = s ? t : Ue(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ee(t) || /* @__PURE__ */ Ye(t);
    t = n ? t : /* @__PURE__ */ B(t), ke(t, s) && (this._rawValue = t, this._value = n ? t : Ue(t), this.dep.trigger());
  }
}
function Xi(e) {
  return /* @__PURE__ */ ce(e) ? e.value : e;
}
const Qi = {
  get: (e, t, s) => t === "__v_raw" ? e : Xi(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return /* @__PURE__ */ ce(r) && !/* @__PURE__ */ ce(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function br(e) {
  return /* @__PURE__ */ nt(e) ? e : new Proxy(e, Qi);
}
class Zi {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Ys(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Mt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Q !== this)
      return lr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return fr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function zi(e, t, s = !1) {
  let n, r;
  return H(e) ? n = e : (n = e.get, r = e.set), new Zi(n, r, s);
}
const Gt = {}, ts = /* @__PURE__ */ new WeakMap();
let ze;
function el(e, t = !1, s = ze) {
  if (s) {
    let n = ts.get(s);
    n || ts.set(s, n = []), n.push(e);
  }
}
function tl(e, t, s = Y) {
  const { immediate: n, deep: r, once: i, scheduler: l, augmentJob: c, call: f } = s, p = (g) => r ? g : /* @__PURE__ */ Ee(g) || r === !1 || r === 0 ? je(g, 1) : je(g);
  let a, m, w, E, N = !1, j = !1;
  if (/* @__PURE__ */ ce(e) ? (m = () => e.value, N = /* @__PURE__ */ Ee(e)) : /* @__PURE__ */ nt(e) ? (m = () => p(e), N = !0) : I(e) ? (j = !0, N = e.some((g) => /* @__PURE__ */ nt(g) || /* @__PURE__ */ Ee(g)), m = () => e.map((g) => {
    if (/* @__PURE__ */ ce(g))
      return g.value;
    if (/* @__PURE__ */ nt(g))
      return p(g);
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
    const g = ze;
    ze = a;
    try {
      return f ? f(e, 3, [E]) : e(E);
    } finally {
      ze = g;
    }
  } : m = Ie, t && r) {
    const g = m, A = r === !0 ? 1 / 0 : r;
    m = () => je(g(), A);
  }
  const re = Ai(), V = () => {
    a.stop(), re && re.active && Ws(re.effects, a);
  };
  if (i && t) {
    const g = t;
    t = (...A) => {
      g(...A), V();
    };
  }
  let G = j ? new Array(e.length).fill(Gt) : Gt;
  const d = (g) => {
    if (!(!(a.flags & 1) || !a.dirty && !g))
      if (t) {
        const A = a.run();
        if (r || N || (j ? A.some((K, L) => ke(K, G[L])) : ke(A, G))) {
          w && w();
          const K = ze;
          ze = a;
          try {
            const L = [
              A,
              // pass undefined as the old value when it's changed for the first time
              G === Gt ? void 0 : j && G[0] === Gt ? [] : G,
              E
            ];
            G = A, f ? f(t, 3, L) : (
              // @ts-expect-error
              t(...L)
            );
          } finally {
            ze = K;
          }
        }
      } else
        a.run();
  };
  return c && c(d), a = new rr(m), a.scheduler = l ? () => l(d, !1) : d, E = (g) => el(g, !1, a), w = a.onStop = () => {
    const g = ts.get(a);
    if (g) {
      if (f)
        f(g, 4);
      else
        for (const A of g) A();
      ts.delete(a);
    }
  }, t ? n ? d(!0) : G = a.run() : l ? l(d.bind(null, !0), !0) : a.run(), V.pause = a.pause.bind(a), V.resume = a.resume.bind(a), V.stop = V, V;
}
function je(e, t = 1 / 0, s) {
  if (t <= 0 || !Z(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ ce(e))
    je(e.value, t, s);
  else if (I(e))
    for (let n = 0; n < e.length; n++)
      je(e[n], t, s);
  else if (Nt(e) || ut(e))
    e.forEach((n) => {
      je(n, t, s);
    });
  else if (Xn(e)) {
    for (const n in e)
      je(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && je(e[n], t, s);
  }
  return e;
}
function $t(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    ps(r, t, s);
  }
}
function De(e, t, s, n) {
  if (H(e)) {
    const r = $t(e, t, s, n);
    return r && Jn(r) && r.catch((i) => {
      ps(i, t, s);
    }), r;
  }
  if (I(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(De(e[i], t, s, n));
    return r;
  }
}
function ps(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || Y;
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
      $e(), $t(i, null, 10, [
        e,
        f,
        p
      ]), Ve();
      return;
    }
  }
  sl(e, s, r, n, l);
}
function sl(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ue = [];
let Pe = -1;
const at = [];
let Ge = null, ct = 0;
const yr = /* @__PURE__ */ Promise.resolve();
let ss = null;
function xr(e) {
  const t = ss || yr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function nl(e) {
  let t = Pe + 1, s = ue.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = ue[n], i = Rt(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function tn(e) {
  if (!(e.flags & 1)) {
    const t = Rt(e), s = ue[ue.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Rt(s) ? ue.push(e) : ue.splice(nl(t), 0, e), e.flags |= 1, Sr();
  }
}
function Sr() {
  ss || (ss = yr.then(Tr));
}
function rl(e) {
  I(e) ? at.push(...e) : Ge && e.id === -1 ? Ge.splice(ct + 1, 0, e) : e.flags & 1 || (at.push(e), e.flags |= 1), Sr();
}
function _n(e, t, s = Pe + 1) {
  for (; s < ue.length; s++) {
    const n = ue[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ue.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ns(e) {
  if (at.length) {
    const t = [...new Set(at)].sort(
      (s, n) => Rt(s) - Rt(n)
    );
    if (at.length = 0, Ge) {
      Ge.push(...t);
      return;
    }
    for (Ge = t, ct = 0; ct < Ge.length; ct++) {
      const s = Ge[ct];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ge = null, ct = 0;
  }
}
const Rt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Tr(e) {
  try {
    for (Pe = 0; Pe < ue.length; Pe++) {
      const t = ue[Pe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), $t(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Pe < ue.length; Pe++) {
      const t = ue[Pe];
      t && (t.flags &= -2);
    }
    Pe = -1, ue.length = 0, ns(), ss = null, (ue.length || at.length) && Tr();
  }
}
let ve = null, vr = null;
function It(e) {
  const t = ve;
  return ve = e, vr = e && e.type.__scopeId || null, t;
}
function il(e, t = ve, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && Mn(-1);
    const i = It(t);
    let l;
    try {
      l = e(...r);
    } finally {
      It(i), n._d && Mn(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ec(e, t) {
  if (ve === null)
    return e;
  const s = _s(ve), n = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, l, c, f = Y] = t[r];
    i && (H(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && je(l), n.push({
      dir: i,
      instance: s,
      value: l,
      oldValue: void 0,
      arg: c,
      modifiers: f
    }));
  }
  return e;
}
function Re(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const c = r[l];
    i && (c.oldValue = i[l].value);
    let f = c.dir[n];
    f && ($e(), De(f, s, 8, [
      e.el,
      c,
      e,
      t
    ]), Ve());
  }
}
function ll(e, t) {
  if (ae) {
    let s = ae.provides;
    const n = ae.parent && ae.parent.provides;
    n === s && (s = ae.provides = Object.create(n)), s[e] = t;
  }
}
function Xt(e, t, s = !1) {
  const n = oo();
  if (n || pt) {
    let r = pt ? pt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && H(t) ? t.call(n && n.proxy) : t;
  }
}
const ol = /* @__PURE__ */ Symbol.for("v-scx"), cl = () => Xt(ol);
function As(e, t, s) {
  return Cr(e, t, s);
}
function Cr(e, t, s = Y) {
  const { immediate: n, deep: r, flush: i, once: l } = s, c = ie({}, s), f = t && n || !t && i !== "post";
  let p;
  if (Dt) {
    if (i === "sync") {
      const E = cl();
      p = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!f) {
      const E = () => {
      };
      return E.stop = Ie, E.resume = Ie, E.pause = Ie, E;
    }
  }
  const a = ae;
  c.call = (E, N, j) => De(E, a, N, j);
  let m = !1;
  i === "post" ? c.scheduler = (E) => {
    _e(E, a && a.suspense);
  } : i !== "sync" && (m = !0, c.scheduler = (E, N) => {
    N ? E() : tn(E);
  }), c.augmentJob = (E) => {
    t && (E.flags |= 4), m && (E.flags |= 2, a && (E.id = a.uid, E.i = a));
  };
  const w = tl(e, t, c);
  return Dt && (p ? p.push(w) : f && w()), w;
}
function fl(e, t, s) {
  const n = this.proxy, r = ne(e) ? e.includes(".") ? wr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  H(t) ? i = t : (i = t.handler, s = t);
  const l = Vt(this), c = Cr(r, i.bind(n), s);
  return l(), c;
}
function wr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const ul = /* @__PURE__ */ Symbol("_vte"), al = (e) => e.__isTeleport, hl = /* @__PURE__ */ Symbol("_leaveCb");
function sn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, sn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function tc(e, t) {
  return H(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function Er(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const rs = /* @__PURE__ */ new WeakMap();
function ht(e, t, s, n, r = !1) {
  if (I(e)) {
    e.forEach(
      (N, j) => ht(
        N,
        t && (I(t) ? t[j] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (dt(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && ht(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? _s(n.component) : n.el, l = r ? null : i, { i: c, r: f } = e, p = t && t.r, a = c.refs === Y ? c.refs = {} : c.refs, m = c.setupState, w = /* @__PURE__ */ B(m), E = m === Y ? kn : (N) => W(w, N);
  if (p != null && p !== f) {
    if (bn(t), ne(p))
      a[p] = null, E(p) && (m[p] = null);
    else if (/* @__PURE__ */ ce(p)) {
      p.value = null;
      const N = t;
      N.k && (a[N.k] = null);
    }
  }
  if (H(f))
    $t(f, c, 12, [l, a]);
  else {
    const N = ne(f), j = /* @__PURE__ */ ce(f);
    if (N || j) {
      const re = () => {
        if (e.f) {
          const V = N ? E(f) ? m[f] : a[f] : f.value;
          if (r)
            I(V) && Ws(V, i);
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
          re(), rs.delete(e);
        };
        V.id = -1, rs.set(e, V), _e(V, s);
      } else
        bn(e), re();
    }
  }
}
function bn(e) {
  const t = rs.get(e);
  t && (t.flags |= 8, rs.delete(e));
}
let yn = !1;
const ot = () => {
  yn || (console.error("Hydration completed but contains mismatches."), yn = !0);
}, dl = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", pl = (e) => e.namespaceURI.includes("MathML"), qt = (e) => {
  if (e.nodeType === 1) {
    if (dl(e)) return "svg";
    if (pl(e)) return "mathml";
  }
}, kt = (e) => e.nodeType === 8;
function gl(e) {
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
      s(null, d, g), ns(), g._vnode = d;
      return;
    }
    m(g.firstChild, d, null, null, null), ns(), g._vnode = d;
  }, m = (d, g, A, K, L, q = !1) => {
    q = q || !!g.dynamicChildren;
    const J = kt(d) && d.data === "[", D = () => j(
      d,
      g,
      A,
      K,
      L,
      J
    ), { type: ee, ref: te, shapeFlag: se, patchFlag: xe } = g;
    let he = d.nodeType;
    g.el = d, xe === -2 && (q = !1, g.dynamicChildren = null);
    let R = null;
    switch (ee) {
      case rt:
        he !== 3 ? g.children === "" ? (f(g.el = r(""), l(d), d), R = d) : R = D() : (d.data !== g.children && (ot(), d.data = g.children), R = i(d));
        break;
      case Ke:
        G(d) ? (R = i(d), V(
          g.el = d.content.firstChild,
          d,
          A
        )) : he !== 8 || J ? R = D() : R = i(d);
        break;
      case Zt:
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
          K,
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
            K,
            L,
            q
          );
        else if (se & 6) {
          g.slotScopeIds = L;
          const $ = l(d);
          if (J ? R = re(d) : kt(d) && d.data === "teleport start" ? R = re(d, d.data, "teleport end") : R = i(d), t(
            g,
            $,
            null,
            A,
            K,
            qt($),
            q
          ), dt(g) && !g.type.__asyncResolved) {
            let M;
            J ? (M = Ae(Te), M.anchor = R ? R.previousSibling : $.lastChild) : M = d.nodeType === 3 ? zr("") : Ae("div"), M.el = d, g.component.subTree = M;
          }
        } else se & 64 ? he !== 8 ? R = D() : R = g.type.hydrate(
          d,
          g,
          A,
          K,
          L,
          q,
          e,
          E
        ) : se & 128 && (R = g.type.hydrate(
          d,
          g,
          A,
          K,
          qt(l(d)),
          L,
          q,
          e,
          m
        ));
    }
    return te != null && ht(te, null, K, g), R;
  }, w = (d, g, A, K, L, q) => {
    q = q || !!g.dynamicChildren;
    const { type: J, props: D, patchFlag: ee, shapeFlag: te, dirs: se, transition: xe } = g, he = J === "input" || J === "option";
    if (he || ee !== -1) {
      se && Re(g, null, A, "created");
      let R = !1;
      if (G(d)) {
        R = Wr(
          null,
          // no need check parentSuspense in hydration
          xe
        ) && A && A.vnode.props && A.vnode.props.appear;
        const M = d.content.firstChild;
        if (R) {
          const z = M.getAttribute("class");
          z && (M.$cls = z), xe.beforeEnter(M);
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
          K,
          L,
          q
        );
        for (; M; ) {
          Jt(
            d,
            1
            /* CHILDREN */
          ) || ot();
          const z = M;
          M = M.nextSibling, c(z);
        }
      } else if (te & 8) {
        let M = g.children;
        M[0] === `
` && (d.tagName === "PRE" || d.tagName === "TEXTAREA") && (M = M.slice(1));
        const { textContent: z } = d;
        z !== M && // innerHTML normalize \r\n or \r into a single \n in the DOM
        z !== M.replace(/\r\n|\r/g, `
`) && (Jt(
          d,
          0
          /* TEXT */
        ) || ot(), d.textContent = g.children);
      }
      if (D) {
        if (he || !q || ee & 48) {
          const M = d.tagName.includes("-");
          for (const z in D)
            (he && (z.endsWith("value") || z === "indeterminate") || Ht(z) && !tt(z) || // force hydrate v-bind with .prop modifiers
            z[0] === "." || M && !tt(z)) && n(d, z, null, D[z], void 0, A);
        } else if (D.onClick)
          n(
            d,
            "onClick",
            null,
            D.onClick,
            void 0,
            A
          );
        else if (ee & 4 && /* @__PURE__ */ nt(D.style))
          for (const M in D.style) D.style[M];
      }
      let $;
      ($ = D && D.onVnodeBeforeMount) && Se($, A, g), se && Re(g, null, A, "beforeMount"), (($ = D && D.onVnodeMounted) || se || R) && Yr(() => {
        $ && Se($, A, g), R && xe.enter(d), se && Re(g, null, A, "mounted");
      }, K);
    }
    return d.nextSibling;
  }, E = (d, g, A, K, L, q, J) => {
    J = J || !!g.dynamicChildren;
    const D = g.children, ee = D.length;
    for (let te = 0; te < ee; te++) {
      const se = J ? D[te] : D[te] = be(D[te]), xe = se.type === rt;
      d ? (xe && !J && te + 1 < ee && be(D[te + 1]).type === rt && (f(
        r(
          d.data.slice(se.children.length)
        ),
        A,
        i(d)
      ), d.data = se.children), d = m(
        d,
        se,
        K,
        L,
        q,
        J
      )) : xe && !se.children ? f(se.el = r(""), A) : (Jt(
        A,
        1
        /* CHILDREN */
      ) || ot(), s(
        null,
        se,
        A,
        null,
        K,
        L,
        qt(A),
        q
      ));
    }
    return d;
  }, N = (d, g, A, K, L, q) => {
    const { slotScopeIds: J } = g;
    J && (L = L ? L.concat(J) : J);
    const D = l(d), ee = E(
      i(d),
      g,
      D,
      A,
      K,
      L,
      q
    );
    return ee && kt(ee) && ee.data === "]" ? i(g.anchor = ee) : (ot(), f(g.anchor = p("]"), D, ee), ee);
  }, j = (d, g, A, K, L, q) => {
    if (Jt(
      d.parentElement,
      1
      /* CHILDREN */
    ) || ot(), g.el = null, q) {
      const ee = re(d);
      for (; ; ) {
        const te = i(d);
        if (te && te !== ee)
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
      K,
      qt(D),
      L
    ), A && (A.vnode.el = g.el, Dr(A, g.el)), J;
  }, re = (d, g = "[", A = "]") => {
    let K = 0;
    for (; d; )
      if (d = i(d), d && kt(d) && (d.data === g && K++, d.data === A)) {
        if (K === 0)
          return i(d);
        K--;
      }
    return d;
  }, V = (d, g, A) => {
    const K = g.parentNode;
    K && K.replaceChild(d, g);
    let L = A;
    for (; L; )
      L.vnode.el === g && (L.vnode.el = L.subTree.el = d), L = L.parent;
  }, G = (d) => d.nodeType === 1 && d.tagName === "TEMPLATE";
  return [a, m];
}
const xn = "data-allow-mismatch", ml = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function Jt(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(xn); )
      e = e.parentElement;
  const s = e && e.getAttribute(xn);
  if (s == null)
    return !1;
  if (s === "")
    return !0;
  {
    const n = s.split(",");
    return t === 0 && n.includes("children") ? !0 : n.includes(ml[t]);
  }
}
as().requestIdleCallback;
as().cancelIdleCallback;
const dt = (e) => !!e.type.__asyncLoader, Ar = (e) => e.type.__isKeepAlive;
function _l(e, t) {
  Mr(e, "a", t);
}
function bl(e, t) {
  Mr(e, "da", t);
}
function Mr(e, t, s = ae) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (gs(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      Ar(r.parent.vnode) && yl(n, t, s, r), r = r.parent;
  }
}
function yl(e, t, s, n) {
  const r = gs(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Or(() => {
    Ws(n[t], r);
  }, s);
}
function gs(e, t, s = ae, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...l) => {
      $e();
      const c = Vt(s), f = De(t, s, e, l);
      return c(), Ve(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Be = (e) => (t, s = ae) => {
  (!Dt || e === "sp") && gs(e, (...n) => t(...n), s);
}, xl = Be("bm"), Sl = Be("m"), Tl = Be(
  "bu"
), vl = Be("u"), Cl = Be(
  "bum"
), Or = Be("um"), wl = Be(
  "sp"
), El = Be("rtg"), Al = Be("rtc");
function Ml(e, t = ae) {
  gs("ec", e, t);
}
const Ol = /* @__PURE__ */ Symbol.for("v-ndc"), Ls = (e) => e ? ti(e) ? _s(e) : Ls(e.parent) : null, wt = (
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
    $parent: (e) => Ls(e.parent),
    $root: (e) => Ls(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Rr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      tn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xr.bind(e.proxy)),
    $watch: (e) => fl.bind(e)
  })
), Ms = (e, t) => e !== Y && !e.__isScriptSetup && W(e, t), Pl = {
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
        if (Ms(n, t))
          return l[t] = 1, n[t];
        if (r !== Y && W(r, t))
          return l[t] = 2, r[t];
        if (W(i, t))
          return l[t] = 3, i[t];
        if (s !== Y && W(s, t))
          return l[t] = 4, s[t];
        js && (l[t] = 0);
      }
    }
    const p = wt[t];
    let a, m;
    if (p)
      return t === "$attrs" && oe(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (a = c.__cssModules) && (a = a[t])
    )
      return a;
    if (s !== Y && W(s, t))
      return l[t] = 4, s[t];
    if (
      // global properties
      m = f.config.globalProperties, W(m, t)
    )
      return m[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return Ms(r, t) ? (r[t] = s, !0) : n !== Y && W(n, t) ? (n[t] = s, !0) : W(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: l }
  }, c) {
    let f;
    return !!(s[c] || e !== Y && c[0] !== "$" && W(e, c) || Ms(t, c) || W(i, c) || W(n, c) || W(wt, c) || W(r.config.globalProperties, c) || (f = l.__cssModules) && f[c]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : W(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Sn(e) {
  return I(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let js = !0;
function Rl(e) {
  const t = Rr(e), s = e.proxy, n = e.ctx;
  js = !1, t.beforeCreate && Tn(t.beforeCreate, e, "bc");
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
    renderTracked: K,
    renderTriggered: L,
    errorCaptured: q,
    serverPrefetch: J,
    // public API
    expose: D,
    inheritAttrs: ee,
    // assets
    components: te,
    directives: se,
    filters: xe
  } = t;
  if (p && Il(p, n, null), l)
    for (const $ in l) {
      const M = l[$];
      H(M) && (n[$] = M.bind(s));
    }
  if (r) {
    const $ = r.call(s, s);
    Z($) && (e.data = /* @__PURE__ */ Zs($));
  }
  if (js = !0, i)
    for (const $ in i) {
      const M = i[$], z = H(M) ? M.bind(s, s) : H(M.get) ? M.get.bind(s, s) : Ie, Ut = !H(M) && H(M.set) ? M.set.bind(s) : Ie, Qe = ho({
        get: z,
        set: Ut
      });
      Object.defineProperty(n, $, {
        enumerable: !0,
        configurable: !0,
        get: () => Qe.value,
        set: (Me) => Qe.value = Me
      });
    }
  if (c)
    for (const $ in c)
      Pr(c[$], n, s, $);
  if (f) {
    const $ = H(f) ? f.call(s) : f;
    Reflect.ownKeys($).forEach((M) => {
      ll(M, $[M]);
    });
  }
  a && Tn(a, e, "c");
  function R($, M) {
    I(M) ? M.forEach((z) => $(z.bind(s))) : M && $(M.bind(s));
  }
  if (R(xl, m), R(Sl, w), R(Tl, E), R(vl, N), R(_l, j), R(bl, re), R(Ml, q), R(Al, K), R(El, L), R(Cl, G), R(Or, g), R(wl, J), I(D))
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
  A && e.render === Ie && (e.render = A), ee != null && (e.inheritAttrs = ee), te && (e.components = te), se && (e.directives = se), J && Er(e);
}
function Il(e, t, s = Ie) {
  I(e) && (e = $s(e));
  for (const n in e) {
    const r = e[n];
    let i;
    Z(r) ? "default" in r ? i = Xt(
      r.from || n,
      r.default,
      !0
    ) : i = Xt(r.from || n) : i = Xt(r), /* @__PURE__ */ ce(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[n] = i;
  }
}
function Tn(e, t, s) {
  De(
    I(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Pr(e, t, s, n) {
  let r = n.includes(".") ? wr(s, n) : () => s[n];
  if (ne(e)) {
    const i = t[e];
    H(i) && As(r, i);
  } else if (H(e))
    As(r, e.bind(s));
  else if (Z(e))
    if (I(e))
      e.forEach((i) => Pr(i, t, s, n));
    else {
      const i = H(e.handler) ? e.handler.bind(s) : t[e.handler];
      H(i) && As(r, i, e);
    }
}
function Rr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, c = i.get(t);
  let f;
  return c ? f = c : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (p) => is(f, p, l, !0)
  ), is(f, t, l)), Z(t) && i.set(t, f), f;
}
function is(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && is(e, i, s, !0), r && r.forEach(
    (l) => is(e, l, s, !0)
  );
  for (const l in t)
    if (!(n && l === "expose")) {
      const c = Fl[l] || s && s[l];
      e[l] = c ? c(e[l], t[l]) : t[l];
    }
  return e;
}
const Fl = {
  data: vn,
  props: Cn,
  emits: Cn,
  // objects
  methods: Tt,
  computed: Tt,
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
  components: Tt,
  directives: Tt,
  // watch
  watch: Hl,
  // provide / inject
  provide: vn,
  inject: Dl
};
function vn(e, t) {
  return t ? e ? function() {
    return ie(
      H(e) ? e.call(this, this) : e,
      H(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Dl(e, t) {
  return Tt($s(e), $s(t));
}
function $s(e) {
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
function Tt(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Cn(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    Sn(e),
    Sn(t ?? {})
  ) : t;
}
function Hl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ie(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = fe(e[n], t[n]);
  return s;
}
function Ir() {
  return {
    app: null,
    config: {
      isNativeTag: kn,
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
let Nl = 0;
function Ll(e, t) {
  return function(n, r = null) {
    H(n) || (n = ie({}, n)), r != null && !Z(r) && (r = null);
    const i = Ir(), l = /* @__PURE__ */ new WeakSet(), c = [];
    let f = !1;
    const p = i.app = {
      _uid: Nl++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: po,
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
          const E = p._ceVNode || Ae(n, r);
          return E.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), m && t ? t(E, a) : e(E, a, w), f = !0, p._container = a, a.__vue_app__ = p, _s(E.component);
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
        const m = pt;
        pt = p;
        try {
          return a();
        } finally {
          pt = m;
        }
      }
    };
    return p;
  };
}
let pt = null;
const jl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Je(t)}Modifiers`] || e[`${Xe(t)}Modifiers`];
function $l(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Y;
  let r = s;
  const i = t.startsWith("update:"), l = i && jl(n, t.slice(7));
  l && (l.trim && (r = s.map((a) => ne(a) ? a.trim() : a)), l.number && (r = s.map(us)));
  let c, f = n[c = Ss(t)] || // also try camelCase event handler (#2249)
  n[c = Ss(Je(t))];
  !f && i && (f = n[c = Ss(Xe(t))]), f && De(
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
const Vl = /* @__PURE__ */ new WeakMap();
function Fr(e, t, s = !1) {
  const n = s ? Vl : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let l = {}, c = !1;
  if (!H(e)) {
    const f = (p) => {
      const a = Fr(p, t, !0);
      a && (c = !0, ie(l, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !c ? (Z(e) && n.set(e, null), null) : (I(i) ? i.forEach((f) => l[f] = null) : ie(l, i), Z(e) && n.set(e, l), l);
}
function ms(e, t) {
  return !e || !Ht(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), W(e, t[0].toLowerCase() + t.slice(1)) || W(e, Xe(t)) || W(e, t));
}
function Qt(e) {
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
  } = e, re = It(e);
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
      ), G = t.props ? c : Ul(c);
    }
  } catch (g) {
    Et.length = 0, ps(g, e, 1), V = Ae(Ke);
  }
  let d = V;
  if (G && j !== !1) {
    const g = Object.keys(G), { shapeFlag: A } = d;
    g.length && A & 7 && (i && g.some(Bs) && (G = Kl(
      G,
      i
    )), d = mt(d, G, !1, !0));
  }
  return s.dirs && (d = mt(d, null, !1, !0), d.dirs = d.dirs ? d.dirs.concat(s.dirs) : s.dirs), s.transition && sn(d, s.transition), V = d, It(re), V;
}
const Ul = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Ht(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Kl = (e, t) => {
  const s = {};
  for (const n in e)
    (!Bs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Bl(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: l, children: c, patchFlag: f } = t, p = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? wn(n, l, p) : !!l;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let m = 0; m < a.length; m++) {
        const w = a[m];
        if (l[w] !== n[w] && !ms(p, w))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : n === l ? !1 : n ? l ? wn(n, l, p) : !0 : !!l;
  return !1;
}
function wn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !ms(s, i))
      return !0;
  }
  return !1;
}
function Dr({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Hr = {}, Nr = () => Object.create(Hr), Lr = (e) => Object.getPrototypeOf(e) === Hr;
function Wl(e, t, s, n = !1) {
  const r = {}, i = Nr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), jr(e, t, r, i);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  s ? e.props = n ? r : /* @__PURE__ */ qi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Gl(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, c = /* @__PURE__ */ B(r), [f] = e.propsOptions;
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
        if (ms(e.emitsOptions, w))
          continue;
        const E = t[w];
        if (f)
          if (W(i, w))
            E !== i[w] && (i[w] = E, p = !0);
          else {
            const N = Je(w);
            r[N] = Vs(
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
    jr(e, t, r, i) && (p = !0);
    let a;
    for (const m in c)
      (!t || // for camelCase
      !W(t, m) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Xe(m)) === m || !W(t, a))) && (f ? s && // for camelCase
      (s[m] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[m] = Vs(
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
function jr(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let l = !1, c;
  if (t)
    for (let f in t) {
      if (tt(f))
        continue;
      const p = t[f];
      let a;
      r && W(r, a = Je(f)) ? !i || !i.includes(a) ? s[a] = p : (c || (c = {}))[a] = p : ms(e.emitsOptions, f) || (!(f in n) || p !== n[f]) && (n[f] = p, l = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ B(s), p = c || Y;
    for (let a = 0; a < i.length; a++) {
      const m = i[a];
      s[m] = Vs(
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
function Vs(e, t, s, n, r, i) {
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
          const a = Vt(r);
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
    ] && (n === "" || n === Xe(s)) && (n = !0));
  }
  return n;
}
const ql = /* @__PURE__ */ new WeakMap();
function $r(e, t, s = !1) {
  const n = s ? ql : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, c = [];
  let f = !1;
  if (!H(e)) {
    const a = (m) => {
      f = !0;
      const [w, E] = $r(m, t, !0);
      ie(l, w), E && c.push(...E);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return Z(e) && n.set(e, ft), ft;
  if (I(i))
    for (let a = 0; a < i.length; a++) {
      const m = Je(i[a]);
      En(m) && (l[m] = Y);
    }
  else if (i)
    for (const a in i) {
      const m = Je(a);
      if (En(m)) {
        const w = i[a], E = l[m] = I(w) || H(w) ? { type: w } : ie({}, w), N = E.type;
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
function En(e) {
  return e[0] !== "$" && !tt(e);
}
const nn = (e) => e === "_" || e === "_ctx" || e === "$stable", rn = (e) => I(e) ? e.map(be) : [be(e)], kl = (e, t, s) => {
  if (t._n)
    return t;
  const n = il((...r) => rn(t(...r)), s);
  return n._c = !1, n;
}, Vr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (nn(r)) continue;
    const i = e[r];
    if (H(i))
      t[r] = kl(r, i, n);
    else if (i != null) {
      const l = rn(i);
      t[r] = () => l;
    }
  }
}, Ur = (e, t) => {
  const s = rn(t);
  e.slots.default = () => s;
}, Kr = (e, t, s) => {
  for (const n in t)
    (s || !nn(n)) && (e[n] = t[n]);
}, Jl = (e, t, s) => {
  const n = e.slots = Nr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Kr(n, t, s), s && Zn(n, "_", r, !0)) : Vr(t, n);
  } else t && Ur(e, t);
}, Yl = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, l = Y;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? s && c === 1 ? i = !1 : Kr(r, t, s) : (i = !t.$stable, Vr(t, r)), l = t;
  } else t && (Ur(e, t), l = { default: 1 });
  if (i)
    for (const c in r)
      !nn(c) && l[c] == null && delete r[c];
}, _e = Yr;
function Xl(e) {
  return Br(e);
}
function Ql(e) {
  return Br(e, gl);
}
function Br(e, t) {
  const s = as();
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
    setScopeId: E = Ie,
    insertStaticContent: N
  } = e, j = (o, u, h, x = null, _ = null, b = null, v = void 0, T = null, S = !!u.dynamicChildren) => {
    if (o === u)
      return;
    o && !St(o, u) && (x = Kt(o), Me(o, _, b, !0), o = null), u.patchFlag === -2 && (S = !1, u.dynamicChildren = null);
    const { type: y, ref: P, shapeFlag: C } = u;
    switch (y) {
      case rt:
        re(o, u, h, x);
        break;
      case Ke:
        V(o, u, h, x);
        break;
      case Zt:
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
          it
        );
    }
    P != null && _ ? ht(P, o && o.ref, b, u || o, !u) : P == null && o && o.ref != null && ht(o.ref, null, b, o, !0);
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
  }, K = (o, u, h, x, _, b, v, T) => {
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
      Os(o, b),
      v,
      T
    ), F && Re(o, null, x, "created"), L(S, o, o.scopeId, v, x), P) {
      for (const X in P)
        X !== "value" && !tt(X) && i(S, X, null, P[X], b, x);
      "value" in P && i(S, "value", null, P.value, b), (y = P.onVnodeBeforeMount) && Se(y, x, o);
    }
    F && Re(o, null, x, "beforeMount");
    const U = Wr(_, O);
    U && O.beforeEnter(S), n(S, u, h), ((y = P && P.onVnodeMounted) || U || F) && _e(() => {
      y && Se(y, x, o), U && O.enter(S), F && Re(o, null, x, "mounted");
    }, _);
  }, L = (o, u, h, x, _) => {
    if (h && E(o, h), x)
      for (let b = 0; b < x.length; b++)
        E(o, x[b]);
    if (_) {
      let b = _.subTree;
      if (u === b || Jr(b.type) && (b.ssContent === u || b.ssFallback === u)) {
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
      const P = o[y] = T ? qe(o[y]) : be(o[y]);
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
    const C = o.props || Y, O = u.props || Y;
    let F;
    if (h && Ze(h, !1), (F = O.onVnodeBeforeUpdate) && Se(F, h, u, o), P && Re(u, o, h, "beforeUpdate"), h && Ze(h, !0), (C.innerHTML && O.innerHTML == null || C.textContent && O.textContent == null) && a(T, ""), y ? D(
      o.dynamicChildren,
      y,
      T,
      h,
      x,
      Os(u, _),
      b
    ) : v || M(
      o,
      u,
      T,
      null,
      h,
      x,
      Os(u, _),
      b,
      !1
    ), S > 0) {
      if (S & 16)
        ee(T, C, O, h, _);
      else if (S & 2 && C.class !== O.class && i(T, "class", null, O.class, _), S & 4 && i(T, "style", C.style, O.style, _), S & 8) {
        const U = u.dynamicProps;
        for (let X = 0; X < U.length; X++) {
          const k = U[X], de = C[k], le = O[k];
          (le !== de || k === "value") && i(T, k, de, le, _, h);
        }
      }
      S & 1 && o.children !== u.children && a(T, u.children);
    } else !v && y == null && ee(T, C, O, h, _);
    ((F = O.onVnodeUpdated) || P) && _e(() => {
      F && Se(F, h, u, o), P && Re(u, o, h, "updated");
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
        !St(S, y) || // - In the case of a component, it could contain anything.
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
  }, ee = (o, u, h, x, _) => {
    if (u !== h) {
      if (u !== Y)
        for (const b in u)
          !tt(b) && !(b in h) && i(
            o,
            b,
            u[b],
            null,
            _,
            x
          );
      for (const b in h) {
        if (tt(b)) continue;
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
    (u.key != null || _ && u === _.subTree) && Gr(
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
    const T = o.component = ei(
      o,
      x,
      _
    );
    if (Ar(o) && (T.ctx.renderer = it), si(T, !1, v), T.asyncDep) {
      if (_ && _.registerDep(T, R, v), !o.el) {
        const S = T.subTree = Ae(Ke);
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
    if (Bl(o, u, h))
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
        let { next: C, bu: O, u: F, parent: U, vnode: X } = o;
        {
          const ge = qr(o);
          if (ge) {
            C && (C.el = X.el, $(o, C, v)), ge.asyncDep.then(() => {
              o.isUnmounted || T();
            });
            return;
          }
        }
        let k = C, de;
        Ze(o, !1), C ? (C.el = X.el, $(o, C, v)) : C = X, O && Yt(O), (de = C.props && C.props.onVnodeBeforeUpdate) && Se(de, U, C, X), Ze(o, !0);
        const le = Qt(o), Ce = o.subTree;
        o.subTree = le, j(
          Ce,
          le,
          // parent may have changed if it's in a teleport
          m(Ce.el),
          // anchor may have changed if it's in a fragment
          Kt(Ce),
          o,
          _,
          b
        ), C.el = le.el, k === null && Dr(o, le.el), F && _e(F, _), (de = C.props && C.props.onVnodeUpdated) && _e(
          () => Se(de, U, C, X),
          _
        );
      } else {
        let C;
        const { el: O, props: F } = u, { bm: U, m: X, parent: k, root: de, type: le } = o, Ce = dt(u);
        if (Ze(o, !1), U && Yt(U), !Ce && (C = F && F.onVnodeBeforeMount) && Se(C, k, u), Ze(o, !0), O && xs) {
          const ge = () => {
            o.subTree = Qt(o), xs(
              O,
              o.subTree,
              o,
              _,
              null
            );
          };
          Ce && le.__asyncHydrate ? le.__asyncHydrate(
            O,
            o,
            ge
          ) : ge();
        } else {
          de.ce && // @ts-expect-error _def is private
          de.ce._def.shadowRoot !== !1 && de.ce._injectChildStyle(le);
          const ge = o.subTree = Qt(o);
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
        if (X && _e(X, _), !Ce && (C = F && F.onVnodeMounted)) {
          const ge = u;
          _e(
            () => Se(C, k, ge),
            _
          );
        }
        (u.shapeFlag & 256 || k && dt(k.vnode) && k.vnode.shapeFlag & 256) && o.a && _e(o.a, _), o.isMounted = !0, u = h = x = null;
      }
    };
    o.scope.on();
    const S = o.effect = new rr(T);
    o.scope.off();
    const y = o.update = S.run.bind(S), P = o.job = S.runIfDirty.bind(S);
    P.i = o, P.id = o.uid, S.scheduler = () => tn(P), Ze(o, !0), y();
  }, $ = (o, u, h) => {
    u.component = o;
    const x = o.vnode.props;
    o.vnode = u, o.next = null, Gl(o, u.props, x, h), Yl(o, u.children, h), $e(), _n(o), Ve();
  }, M = (o, u, h, x, _, b, v, T, S = !1) => {
    const y = o && o.children, P = o ? o.shapeFlag : 0, C = u.children, { patchFlag: O, shapeFlag: F } = u;
    if (O > 0) {
      if (O & 128) {
        Ut(
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
    F & 8 ? (P & 16 && bt(y, _, b), C !== y && a(h, C)) : P & 16 ? F & 16 ? Ut(
      y,
      C,
      h,
      x,
      _,
      b,
      v,
      T,
      S
    ) : bt(y, _, b, !0) : (P & 8 && a(h, ""), F & 16 && q(
      C,
      h,
      x,
      _,
      b,
      v,
      T,
      S
    ));
  }, z = (o, u, h, x, _, b, v, T, S) => {
    o = o || ft, u = u || ft;
    const y = o.length, P = u.length, C = Math.min(y, P);
    let O;
    for (O = 0; O < C; O++) {
      const F = u[O] = S ? qe(u[O]) : be(u[O]);
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
    y > P ? bt(
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
  }, Ut = (o, u, h, x, _, b, v, T, S) => {
    let y = 0;
    const P = u.length;
    let C = o.length - 1, O = P - 1;
    for (; y <= C && y <= O; ) {
      const F = o[y], U = u[y] = S ? qe(u[y]) : be(u[y]);
      if (St(F, U))
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
      const F = o[C], U = u[O] = S ? qe(u[O]) : be(u[O]);
      if (St(F, U))
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
            u[y] = S ? qe(u[y]) : be(u[y]),
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
        Me(o[y], _, b, !0), y++;
    else {
      const F = y, U = y, X = /* @__PURE__ */ new Map();
      for (y = U; y <= O; y++) {
        const me = u[y] = S ? qe(u[y]) : be(u[y]);
        me.key != null && X.set(me.key, y);
      }
      let k, de = 0;
      const le = O - U + 1;
      let Ce = !1, ge = 0;
      const yt = new Array(le);
      for (y = 0; y < le; y++) yt[y] = 0;
      for (y = F; y <= C; y++) {
        const me = o[y];
        if (de >= le) {
          Me(me, _, b, !0);
          continue;
        }
        let Oe;
        if (me.key != null)
          Oe = X.get(me.key);
        else
          for (k = U; k <= O; k++)
            if (yt[k - U] === 0 && St(me, u[k])) {
              Oe = k;
              break;
            }
        Oe === void 0 ? Me(me, _, b, !0) : (yt[Oe - U] = y + 1, Oe >= ge ? ge = Oe : Ce = !0, j(
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
      const un = Ce ? Zl(yt) : ft;
      for (k = un.length - 1, y = le - 1; y >= 0; y--) {
        const me = U + y, Oe = u[me], an = u[me + 1], hn = me + 1 < P ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          an.el || kr(an)
        ) : x;
        yt[y] === 0 ? j(
          null,
          Oe,
          h,
          hn,
          _,
          b,
          v,
          T,
          S
        ) : Ce && (k < 0 || y !== un[k] ? Qe(Oe, h, hn, 2) : k--);
      }
    }
  }, Qe = (o, u, h, x, _ = null) => {
    const { el: b, type: v, transition: T, children: S, shapeFlag: y } = o;
    if (y & 6) {
      Qe(o.component.subTree, u, h, x);
      return;
    }
    if (y & 128) {
      o.suspense.move(u, h, x);
      return;
    }
    if (y & 64) {
      v.move(o, u, h, it);
      return;
    }
    if (v === Te) {
      n(b, u, h);
      for (let C = 0; C < S.length; C++)
        Qe(S[C], u, h, x);
      n(o.anchor, u, h);
      return;
    }
    if (v === Zt) {
      d(o, u, h);
      return;
    }
    if (x !== 2 && y & 1 && T)
      if (x === 0)
        T.beforeEnter(b), n(b, u, h), _e(() => T.enter(b), _);
      else {
        const { leave: C, delayLeave: O, afterLeave: F } = T, U = () => {
          o.ctx.isUnmounted ? r(b) : n(b, u, h);
        }, X = () => {
          b._isLeaving && b[hl](
            !0
            /* cancelled */
          ), C(b, () => {
            U(), F && F();
          });
        };
        O ? O(b, U, X) : X();
      }
    else
      n(b, u, h);
  }, Me = (o, u, h, x = !1, _ = !1) => {
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
    if (C === -2 && (_ = !1), T != null && ($e(), ht(T, null, h, o, !0), Ve()), F != null && (u.renderCache[F] = void 0), P & 256) {
      u.ctx.deactivate(o);
      return;
    }
    const U = P & 1 && O, X = !dt(o);
    let k;
    if (X && (k = v && v.onVnodeBeforeUnmount) && Se(k, u, o), P & 6)
      fi(o.component, h, x);
    else {
      if (P & 128) {
        o.suspense.unmount(h, x);
        return;
      }
      U && Re(o, null, u, "beforeUnmount"), P & 64 ? o.type.remove(
        o,
        u,
        h,
        it,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Te || C > 0 && C & 64) ? bt(
        y,
        u,
        h,
        !1,
        !0
      ) : (b === Te && C & 384 || !_ && P & 16) && bt(S, u, h), x && cn(o);
    }
    (X && (k = v && v.onVnodeUnmounted) || U) && _e(() => {
      k && Se(k, u, o), U && Re(o, null, u, "unmounted");
    }, h);
  }, cn = (o) => {
    const { type: u, el: h, anchor: x, transition: _ } = o;
    if (u === Te) {
      ci(h, x);
      return;
    }
    if (u === Zt) {
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
  }, ci = (o, u) => {
    let h;
    for (; o !== u; )
      h = w(o), r(o), o = h;
    r(u);
  }, fi = (o, u, h) => {
    const { bum: x, scope: _, job: b, subTree: v, um: T, m: S, a: y } = o;
    An(S), An(y), x && Yt(x), _.stop(), b && (b.flags |= 8, Me(v, o, u, h)), T && _e(T, u), _e(() => {
      o.isUnmounted = !0;
    }, u);
  }, bt = (o, u, h, x = !1, _ = !1, b = 0) => {
    for (let v = b; v < o.length; v++)
      Me(o[v], u, h, x, _);
  }, Kt = (o) => {
    if (o.shapeFlag & 6)
      return Kt(o.component.subTree);
    if (o.shapeFlag & 128)
      return o.suspense.next();
    const u = w(o.anchor || o.el), h = u && u[ul];
    return h ? w(h) : u;
  };
  let bs = !1;
  const fn = (o, u, h) => {
    let x;
    o == null ? u._vnode && (Me(u._vnode, null, null, !0), x = u._vnode.component) : j(
      u._vnode || null,
      o,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = o, bs || (bs = !0, _n(x), ns(), bs = !1);
  }, it = {
    p: j,
    um: Me,
    m: Qe,
    r: cn,
    mt: xe,
    mc: q,
    pc: M,
    pbc: D,
    n: Kt,
    o: e
  };
  let ys, xs;
  return t && ([ys, xs] = t(
    it
  )), {
    render: fn,
    hydrate: ys,
    createApp: Ll(fn, ys)
  };
}
function Os({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Ze({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Wr(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Gr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (I(n) && I(r))
    for (let i = 0; i < n.length; i++) {
      const l = n[i];
      let c = r[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[i] = qe(r[i]), c.el = l.el), !s && c.patchFlag !== -2 && Gr(l, c)), c.type === rt && (c.patchFlag !== -1 ? c.el = l.el : c.__elIndex = i + // take fragment start anchor into account
      (e.type === Te ? 1 : 0)), c.type === Ke && !c.el && (c.el = l.el);
    }
}
function Zl(e) {
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
function qr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : qr(t);
}
function An(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function kr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? kr(t.subTree) : null;
}
const Jr = (e) => e.__isSuspense;
function Yr(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : rl(e);
}
const Te = /* @__PURE__ */ Symbol.for("v-fgt"), rt = /* @__PURE__ */ Symbol.for("v-txt"), Ke = /* @__PURE__ */ Symbol.for("v-cmt"), Zt = /* @__PURE__ */ Symbol.for("v-stc"), Et = [];
let ye = null;
function zl(e = !1) {
  Et.push(ye = e ? null : []);
}
function eo() {
  Et.pop(), ye = Et[Et.length - 1] || null;
}
let Ft = 1;
function Mn(e, t = !1) {
  Ft += e, e < 0 && ye && t && (ye.hasOnce = !0);
}
function Xr(e) {
  return e.dynamicChildren = Ft > 0 ? ye || ft : null, eo(), Ft > 0 && ye && ye.push(e), e;
}
function sc(e, t, s, n, r, i) {
  return Xr(
    Zr(
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
function to(e, t, s, n, r) {
  return Xr(
    Ae(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function ln(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function St(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Qr = ({ key: e }) => e ?? null, zt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || /* @__PURE__ */ ce(e) || H(e) ? { i: ve, r: e, k: t, f: !!s } : e : null);
function Zr(e, t = null, s = null, n = 0, r = null, i = e === Te ? 0 : 1, l = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Qr(t),
    ref: t && zt(t),
    scopeId: vr,
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
  return c ? (on(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= ne(s) ? 8 : 16), Ft > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ye.push(f), f;
}
const Ae = so;
function so(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Ol) && (e = Ke), ln(e)) {
    const c = mt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && on(c, s), Ft > 0 && !i && ye && (c.shapeFlag & 6 ? ye[ye.indexOf(e)] = c : ye.push(c)), c.patchFlag = -2, c;
  }
  if (ao(e) && (e = e.__vccOpts), t) {
    t = no(t);
    let { class: c, style: f } = t;
    c && !ne(c) && (t.class = ds(c)), Z(f) && (/* @__PURE__ */ en(f) && !I(f) && (f = ie({}, f)), t.style = hs(f));
  }
  const l = ne(e) ? 1 : Jr(e) ? 128 : al(e) ? 64 : Z(e) ? 4 : H(e) ? 2 : 0;
  return Zr(
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
function no(e) {
  return e ? /* @__PURE__ */ en(e) || Lr(e) ? ie({}, e) : e : null;
}
function mt(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: l, children: c, transition: f } = e, p = t ? ro(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && Qr(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? I(i) ? i.concat(zt(t)) : [i, zt(t)] : zt(t)
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
    ssContent: e.ssContent && mt(e.ssContent),
    ssFallback: e.ssFallback && mt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && sn(
    a,
    f.clone(a)
  ), a;
}
function zr(e = " ", t = 0) {
  return Ae(rt, null, e, t);
}
function nc(e = "", t = !1) {
  return t ? (zl(), to(Ke, null, e)) : Ae(Ke, null, e);
}
function be(e) {
  return e == null || typeof e == "boolean" ? Ae(Ke) : I(e) ? Ae(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ln(e) ? qe(e) : Ae(rt, null, String(e));
}
function qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : mt(e);
}
function on(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (I(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), on(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Lr(t) ? t._ctx = ve : r === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else H(t) ? (t = { default: t, _ctx: ve }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [zr(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function ro(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = ds([t.class, n.class]));
      else if (r === "style")
        t.style = hs([t.style, n.style]);
      else if (Ht(r)) {
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
const io = Ir();
let lo = 0;
function ei(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || io, i = {
    uid: lo++,
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
    scope: new Ei(
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
    propsOptions: $r(n, r),
    emitsOptions: Fr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Y,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Y,
    data: Y,
    props: Y,
    attrs: Y,
    slots: Y,
    refs: Y,
    setupState: Y,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = $l.bind(null, i), e.ce && e.ce(i), i;
}
let ae = null;
const oo = () => ae || ve;
let ls, Us;
{
  const e = as(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((l) => l(i)) : r[0](i);
    };
  };
  ls = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ae = s
  ), Us = t(
    "__VUE_SSR_SETTERS__",
    (s) => Dt = s
  );
}
const Vt = (e) => {
  const t = ae;
  return ls(e), e.scope.on(), () => {
    e.scope.off(), ls(t);
  };
}, On = () => {
  ae && ae.scope.off(), ls(null);
};
function ti(e) {
  return e.vnode.shapeFlag & 4;
}
let Dt = !1;
function si(e, t = !1, s = !1) {
  t && Us(t);
  const { props: n, children: r } = e.vnode, i = ti(e);
  Wl(e, n, i, t), Jl(e, r, s || t);
  const l = i ? co(e, t) : void 0;
  return t && Us(!1), l;
}
function co(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Pl);
  const { setup: n } = s;
  if (n) {
    $e();
    const r = e.setupContext = n.length > 1 ? uo(e) : null, i = Vt(e), l = $t(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), c = Jn(l);
    if (Ve(), i(), (c || e.sp) && !dt(e) && Er(e), c) {
      if (l.then(On, On), t)
        return l.then((f) => {
          Pn(e, f);
        }).catch((f) => {
          ps(f, e, 0);
        });
      e.asyncDep = l;
    } else
      Pn(e, l);
  } else
    ni(e);
}
function Pn(e, t, s) {
  H(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) && (e.setupState = br(t)), ni(e);
}
function ni(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Ie);
  {
    const r = Vt(e);
    $e();
    try {
      Rl(e);
    } finally {
      Ve(), r();
    }
  }
}
const fo = {
  get(e, t) {
    return oe(e, "get", ""), e[t];
  }
};
function uo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, fo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function _s(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(br(ki(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in wt)
        return wt[s](e);
    },
    has(t, s) {
      return s in t || s in wt;
    }
  })) : e.proxy;
}
function ao(e) {
  return H(e) && "__vccOpts" in e;
}
const ho = (e, t) => /* @__PURE__ */ zi(e, t, Dt), po = "3.5.27", go = {
  createComponentInstance: ei,
  setupComponent: si,
  renderComponentRoot: Qt,
  setCurrentRenderingInstance: It,
  isVNode: ln,
  normalizeVNode: be
}, rc = go;
let Ks;
const Rn = typeof window < "u" && window.trustedTypes;
if (Rn)
  try {
    Ks = /* @__PURE__ */ Rn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ri = Ks ? (e) => Ks.createHTML(e) : (e) => e, mo = "http://www.w3.org/2000/svg", _o = "http://www.w3.org/1998/Math/MathML", Ne = typeof document < "u" ? document : null, In = Ne && /* @__PURE__ */ Ne.createElement("template"), bo = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Ne.createElementNS(mo, e) : t === "mathml" ? Ne.createElementNS(_o, e) : s ? Ne.createElement(e, { is: s }) : Ne.createElement(e);
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
      In.innerHTML = ri(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = In.content;
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
}, yo = /* @__PURE__ */ Symbol("_vtc");
function xo(e, t, s) {
  const n = e[yo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Fn = /* @__PURE__ */ Symbol("_vod"), So = /* @__PURE__ */ Symbol("_vsh"), To = /* @__PURE__ */ Symbol(""), vo = /(?:^|;)\s*display\s*:/;
function Co(e, t, s) {
  const n = e.style, r = ne(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (ne(t))
        for (const l of t.split(";")) {
          const c = l.slice(0, l.indexOf(":")).trim();
          s[c] == null && es(n, c, "");
        }
      else
        for (const l in t)
          s[l] == null && es(n, l, "");
    for (const l in s)
      l === "display" && (i = !0), es(n, l, s[l]);
  } else if (r) {
    if (t !== s) {
      const l = n[To];
      l && (s += ";" + l), n.cssText = s, i = vo.test(s);
    }
  } else t && e.removeAttribute("style");
  Fn in e && (e[Fn] = i ? n.display : "", e[So] && (n.display = "none"));
}
const Dn = /\s*!important$/;
function es(e, t, s) {
  if (I(s))
    s.forEach((n) => es(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = wo(e, t);
    Dn.test(s) ? e.setProperty(
      Xe(n),
      s.replace(Dn, ""),
      "important"
    ) : e[n] = s;
  }
}
const Hn = ["Webkit", "Moz", "ms"], Ps = {};
function wo(e, t) {
  const s = Ps[t];
  if (s)
    return s;
  let n = Je(t);
  if (n !== "filter" && n in e)
    return Ps[t] = n;
  n = Qn(n);
  for (let r = 0; r < Hn.length; r++) {
    const i = Hn[r] + n;
    if (i in e)
      return Ps[t] = i;
  }
  return t;
}
const Nn = "http://www.w3.org/1999/xlink";
function Ln(e, t, s, n, r, i = xi(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Nn, t.slice(6, t.length)) : e.setAttributeNS(Nn, t, s) : s == null || i && !er(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Fe(s) ? String(s) : s
  );
}
function jn(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? ri(s) : s);
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
    c === "boolean" ? s = er(s) : s == null && c === "string" ? (s = "", l = !0) : c === "number" && (s = 0, l = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  l && e.removeAttribute(r || t);
}
function et(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Eo(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const $n = /* @__PURE__ */ Symbol("_vei");
function Ao(e, t, s, n, r = null) {
  const i = e[$n] || (e[$n] = {}), l = i[t];
  if (n && l)
    l.value = n;
  else {
    const [c, f] = Mo(t);
    if (n) {
      const p = i[t] = Ro(
        n,
        r
      );
      et(e, c, p, f);
    } else l && (Eo(e, c, l, f), i[t] = void 0);
  }
}
const Vn = /(?:Once|Passive|Capture)$/;
function Mo(e) {
  let t;
  if (Vn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Vn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xe(e.slice(2)), t];
}
let Rs = 0;
const Oo = /* @__PURE__ */ Promise.resolve(), Po = () => Rs || (Oo.then(() => Rs = 0), Rs = Date.now());
function Ro(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    De(
      Io(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Po(), s;
}
function Io(e, t) {
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
const Un = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Fo = (e, t, s, n, r, i) => {
  const l = r === "svg";
  t === "class" ? xo(e, n, l) : t === "style" ? Co(e, s, n) : Ht(t) ? Bs(t) || Ao(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Do(e, t, n, l)) ? (jn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ln(e, t, n, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ne(n)) ? jn(e, Je(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ln(e, t, n, l));
};
function Do(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Un(t) && H(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Un(t) && ne(s) ? !1 : t in e;
}
const os = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (s) => Yt(t, s) : t;
};
function Ho(e) {
  e.target.composing = !0;
}
function Kn(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const gt = /* @__PURE__ */ Symbol("_assign");
function Bn(e, t, s) {
  return t && (e = e.trim()), s && (e = us(e)), e;
}
const No = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, r) {
    e[gt] = os(r);
    const i = n || r.props && r.props.type === "number";
    et(e, t ? "change" : "input", (l) => {
      l.target.composing || e[gt](Bn(e.value, s, i));
    }), (s || i) && et(e, "change", () => {
      e.value = Bn(e.value, s, i);
    }), t || (et(e, "compositionstart", Ho), et(e, "compositionend", Kn), et(e, "change", Kn));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: r, number: i } }, l) {
    if (e[gt] = os(l), e.composing) return;
    const c = (i || e.type === "number") && !/^0\d/.test(e.value) ? us(e.value) : e.value, f = t ?? "";
    c !== f && (document.activeElement === e && e.type !== "range" && (n && t === s || r && e.value.trim() === f) || (e.value = f));
  }
}, Lo = {}, jo = {}, ic = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: s } }, n) {
    const r = Nt(t);
    et(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => s ? us(cs(l)) : cs(l)
      );
      e[gt](
        e.multiple ? r ? new Set(i) : i : i[0]
      ), e._assigning = !0, xr(() => {
        e._assigning = !1;
      });
    }), e[gt] = os(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Wn(e, t);
  },
  beforeUpdate(e, t, s) {
    e[gt] = os(s);
  },
  updated(e, { value: t }) {
    e._assigning || Wn(e, t);
  }
};
function Wn(e, t) {
  const s = e.multiple, n = I(t);
  if (!(s && !n && !Nt(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const l = e.options[r], c = cs(l);
      if (s)
        if (n) {
          const f = typeof c;
          f === "string" || f === "number" ? l.selected = t.some((p) => String(p) === String(c)) : l.selected = tr(t, c) > -1;
        } else
          l.selected = t.has(c);
      else if (jt(cs(l), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function cs(e) {
  return "_value" in e ? e._value : e.value;
}
function $o() {
  No.getSSRProps = ({ value: e }) => ({ value: e }), jo.getSSRProps = ({ value: e }, t) => {
    if (t.props && jt(t.props.value, e))
      return { checked: !0 };
  }, Lo.getSSRProps = ({ value: e }, t) => {
    if (I(e)) {
      if (t.props && tr(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (Nt(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const ii = /* @__PURE__ */ ie({ patchProp: Fo }, bo);
let At, Gn = !1;
function Vo() {
  return At || (At = Xl(ii));
}
function Uo() {
  return At = Gn ? At : Ql(ii), Gn = !0, At;
}
const lc = ((...e) => {
  const t = Vo().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = oi(n);
    if (!r) return;
    const i = t._component;
    !H(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const l = s(r, !1, li(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
}), oc = ((...e) => {
  const t = Uo().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = oi(n);
    if (r)
      return s(r, !0, li(r));
  }, t;
});
function li(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function oi(e) {
  return ne(e) ? document.querySelector(e) : e;
}
let qn = !1;
const cc = () => {
  qn || (qn = !0, $o());
};
export {
  I as A,
  Ht as B,
  Ke as C,
  _t as D,
  ds as E,
  Te as F,
  hs as G,
  Ko as H,
  Yo as I,
  Wo as J,
  Jo as K,
  qo as L,
  er as M,
  Ie as N,
  ko as O,
  Z as P,
  Zo as Q,
  cc as R,
  Zt as S,
  rt as T,
  oc as U,
  Zs as a,
  Zr as b,
  sc as c,
  tc as d,
  ic as e,
  Ae as f,
  no as g,
  nc as h,
  lc as i,
  as as j,
  rc as k,
  Jn as l,
  H as m,
  Bo as n,
  zl as o,
  ne as p,
  Qo as q,
  zo as r,
  ol as s,
  wi as t,
  Xi as u,
  No as v,
  ec as w,
  Xo as x,
  ro as y,
  Go as z
};
