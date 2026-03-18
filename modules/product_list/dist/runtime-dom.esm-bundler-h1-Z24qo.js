// @__NO_SIDE_EFFECTS__
function _t(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const X = {}, ft = [], He = () => {
}, Gn = () => !1, Nt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ls = (e) => e.startsWith("onUpdate:"), ie = Object.assign, $s = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, ci = Object.prototype.hasOwnProperty, W = (e, t) => ci.call(e, t), F = Array.isArray, ut = (e) => Ht(e) === "[object Map]", Vs = (e) => Ht(e) === "[object Set]", an = (e) => Ht(e) === "[object Date]", H = (e) => typeof e == "function", re = (e) => typeof e == "string", je = (e) => typeof e == "symbol", J = (e) => e !== null && typeof e == "object", qn = (e) => (J(e) || H(e)) && H(e.then) && H(e.catch), Jn = Object.prototype.toString, Ht = (e) => Jn.call(e), fi = (e) => Ht(e).slice(8, -1), Yn = (e) => Ht(e) === "[object Object]", Ks = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tt = /* @__PURE__ */ _t(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), is = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, ui = /-\w/g, Ae = is(
  (e) => e.replace(ui, (t) => t.slice(1).toUpperCase())
), ai = /\B([A-Z])/g, Je = is(
  (e) => e.replace(ai, "-$1").toLowerCase()
), Xn = is((e) => e.charAt(0).toUpperCase() + e.slice(1)), gs = is(
  (e) => e ? `on${Xn(e)}` : ""
), Ne = (e, t) => !Object.is(e, t), Jt = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Qn = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Us = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let hn;
const ls = () => hn || (hn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bs(e) {
  if (F(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = re(n) ? gi(n) : Bs(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (re(e) || J(e))
    return e;
}
const hi = /;(?![^(]*\))/g, di = /:([^]+)/, pi = /\/\*[^]*?\*\//g;
function gi(e) {
  const t = {};
  return e.replace(pi, "").split(hi).forEach((s) => {
    if (s) {
      const n = s.split(di);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Go(e) {
  if (!e) return "";
  if (re(e)) return e;
  let t = "";
  for (const s in e) {
    const n = e[s];
    if (re(n) || typeof n == "number") {
      const r = s.startsWith("--") ? s : Je(s);
      t += `${r}:${n};`;
    }
  }
  return t;
}
function Ws(e) {
  let t = "";
  if (re(e))
    t = e;
  else if (F(e))
    for (let s = 0; s < e.length; s++) {
      const n = Ws(e[s]);
      n && (t += n + " ");
    }
  else if (J(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const mi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", _i = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", qo = /* @__PURE__ */ _t(mi), Jo = /* @__PURE__ */ _t(_i), Zn = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", bi = /* @__PURE__ */ _t(Zn), Yo = /* @__PURE__ */ _t(
  Zn + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function zn(e) {
  return !!e || e === "";
}
const yi = /[>/="'\u0009\u000a\u000c\u0020]/, ms = {};
function Xo(e) {
  if (ms.hasOwnProperty(e))
    return ms[e];
  const t = yi.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), ms[e] = !t;
}
const Qo = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function Zo(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const xi = /["'&<>]/;
function zo(e) {
  const t = "" + e, s = xi.exec(t);
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
const Si = /^-?>|<!--|-->|--!>|<!-$/g;
function ec(e) {
  return e.replace(Si, "");
}
function vi(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = jt(e[n], t[n]);
  return s;
}
function jt(e, t) {
  if (e === t) return !0;
  let s = an(e), n = an(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = je(e), n = je(t), s || n)
    return e === t;
  if (s = F(e), n = F(t), s || n)
    return s && n ? vi(e, t) : !1;
  if (s = J(e), n = J(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const l in e) {
      const o = e.hasOwnProperty(l), f = t.hasOwnProperty(l);
      if (o && !f || !o && f || !jt(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ti(e, t) {
  return e.findIndex((s) => jt(s, t));
}
const er = (e) => !!(e && e.__v_isRef === !0), wi = (e) => re(e) ? e : e == null ? "" : F(e) || J(e) && (e.toString === Jn || !H(e.toString)) ? er(e) ? wi(e.value) : JSON.stringify(e, tr, 2) : String(e), tr = (e, t) => er(t) ? tr(e, t.value) : ut(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[_s(n, i) + " =>"] = r, s),
    {}
  )
} : Vs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => _s(s))
} : je(t) ? _s(t) : J(t) && !F(t) && !Yn(t) ? String(t) : t, _s = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    je(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
function tc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let ge;
class Ci {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = ge, !t && ge && (this.index = (ge.scopes || (ge.scopes = [])).push(
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
      const s = ge;
      try {
        return ge = this, t();
      } finally {
        ge = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ge, ge = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ge = this.prevScope, this.prevScope = void 0);
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
function Ei() {
  return ge;
}
let Z;
const bs = /* @__PURE__ */ new WeakSet();
class sr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ge && ge.active && ge.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, bs.has(this) && (bs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || rr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, dn(this), ir(this);
    const t = Z, s = Me;
    Z = this, Me = !0;
    try {
      return this.fn();
    } finally {
      lr(this), Z = t, Me = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        qs(t);
      this.deps = this.depsTail = void 0, dn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? bs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    As(this) && this.run();
  }
  get dirty() {
    return As(this);
  }
}
let nr = 0, Tt, wt;
function rr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = wt, wt = e;
    return;
  }
  e.next = Tt, Tt = e;
}
function ks() {
  nr++;
}
function Gs() {
  if (--nr > 0)
    return;
  if (wt) {
    let t = wt;
    for (wt = void 0; t; ) {
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
function ir(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function lr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), qs(n), Ai(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function As(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (or(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function or(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ot) || (e.globalVersion = Ot, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !As(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = Z, n = Me;
  Z = e, Me = !0;
  try {
    ir(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ne(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Z = s, Me = n, lr(e), e.flags &= -3;
  }
}
function qs(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      qs(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Ai(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Me = !0;
const cr = [];
function We() {
  cr.push(Me), Me = !1;
}
function ke() {
  const e = cr.pop();
  Me = e === void 0 ? !0 : e;
}
function dn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = Z;
    Z = void 0;
    try {
      t();
    } finally {
      Z = s;
    }
  }
}
let Ot = 0;
class Mi {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Js {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Z || !Me || Z === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Z)
      s = this.activeLink = new Mi(Z, this), Z.deps ? (s.prevDep = Z.depsTail, Z.depsTail.nextDep = s, Z.depsTail = s) : Z.deps = Z.depsTail = s, fr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = Z.depsTail, s.nextDep = void 0, Z.depsTail.nextDep = s, Z.depsTail = s, Z.deps === s && (Z.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Ot++, this.notify(t);
  }
  notify(t) {
    ks();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Gs();
    }
  }
}
function fr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        fr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Ms = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ Symbol(
  ""
), Os = /* @__PURE__ */ Symbol(
  ""
), Pt = /* @__PURE__ */ Symbol(
  ""
);
function oe(e, t, s) {
  if (Me && Z) {
    let n = Ms.get(e);
    n || Ms.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new Js()), r.map = n, r.key = s), r.track();
  }
}
function Ue(e, t, s, n, r, i) {
  const l = Ms.get(e);
  if (!l) {
    Ot++;
    return;
  }
  const o = (f) => {
    f && f.trigger();
  };
  if (ks(), t === "clear")
    l.forEach(o);
  else {
    const f = F(e), h = f && Ks(s);
    if (f && s === "length") {
      const a = Number(n);
      l.forEach((g, C) => {
        (C === "length" || C === Pt || !je(C) && C >= a) && o(g);
      });
    } else
      switch ((s !== void 0 || l.has(void 0)) && o(l.get(s)), h && o(l.get(Pt)), t) {
        case "add":
          f ? h && o(l.get("length")) : (o(l.get(st)), ut(e) && o(l.get(Os)));
          break;
        case "delete":
          f || (o(l.get(st)), ut(e) && o(l.get(Os)));
          break;
        case "set":
          ut(e) && o(l.get(st));
          break;
      }
  }
  Gs();
}
function it(e) {
  const t = /* @__PURE__ */ B(e);
  return t === e ? t : (oe(t, "iterate", Pt), /* @__PURE__ */ Te(e) ? t : t.map(Oe));
}
function os(e) {
  return oe(e = /* @__PURE__ */ B(e), "iterate", Pt), e;
}
function De(e, t) {
  return /* @__PURE__ */ Ge(e) ? gt(/* @__PURE__ */ Qe(e) ? Oe(t) : t) : Oe(t);
}
const Oi = {
  __proto__: null,
  [Symbol.iterator]() {
    return ys(this, Symbol.iterator, (e) => De(this, e));
  },
  concat(...e) {
    return it(this).concat(
      ...e.map((t) => F(t) ? it(t) : t)
    );
  },
  entries() {
    return ys(this, "entries", (e) => (e[1] = De(this, e[1]), e));
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
      (s) => s.map((n) => De(this, n)),
      arguments
    );
  },
  find(e, t) {
    return $e(
      this,
      "find",
      e,
      t,
      (s) => De(this, s),
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
      (s) => De(this, s),
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
    return xs(this, "includes", e);
  },
  indexOf(...e) {
    return xs(this, "indexOf", e);
  },
  join(e) {
    return it(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return xs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return $e(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xt(this, "pop");
  },
  push(...e) {
    return xt(this, "push", e);
  },
  reduce(e, ...t) {
    return pn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return pn(this, "reduceRight", e, t);
  },
  shift() {
    return xt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return $e(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xt(this, "splice", e);
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
    return xt(this, "unshift", e);
  },
  values() {
    return ys(this, "values", (e) => De(this, e));
  }
};
function ys(e, t, s) {
  const n = os(e), r = n[t]();
  return n !== e && !/* @__PURE__ */ Te(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const Pi = Array.prototype;
function $e(e, t, s, n, r, i) {
  const l = os(e), o = l !== e && !/* @__PURE__ */ Te(e), f = l[t];
  if (f !== Pi[t]) {
    const g = f.apply(e, i);
    return o ? Oe(g) : g;
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
function pn(e, t, s, n) {
  const r = os(e), i = r !== e && !/* @__PURE__ */ Te(e);
  let l = s, o = !1;
  r !== e && (i ? (o = n.length === 0, l = function(h, a, g) {
    return o && (o = !1, h = De(e, h)), s.call(this, h, De(e, a), g, e);
  }) : s.length > 3 && (l = function(h, a, g) {
    return s.call(this, h, a, g, e);
  }));
  const f = r[t](l, ...n);
  return o ? De(e, f) : f;
}
function xs(e, t, s) {
  const n = /* @__PURE__ */ B(e);
  oe(n, "iterate", Pt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ Zs(s[0]) ? (s[0] = /* @__PURE__ */ B(s[0]), n[t](...s)) : r;
}
function xt(e, t, s = []) {
  We(), ks();
  const n = (/* @__PURE__ */ B(e))[t].apply(e, s);
  return Gs(), ke(), n;
}
const Ri = /* @__PURE__ */ _t("__proto__,__v_isRef,__isVue"), ur = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(je)
);
function Fi(e) {
  je(e) || (e = String(e));
  const t = /* @__PURE__ */ B(this);
  return oe(t, "has", e), t.hasOwnProperty(e);
}
class ar {
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
      return n === (r ? i ? Ui : gr : i ? pr : dr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const l = F(t);
    if (!r) {
      let f;
      if (l && (f = Oi[s]))
        return f;
      if (s === "hasOwnProperty")
        return Fi;
    }
    const o = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ce(t) ? t : n
    );
    if ((je(s) ? ur.has(s) : Ri(s)) || (r || oe(t, "get", s), i))
      return o;
    if (/* @__PURE__ */ ce(o)) {
      const f = l && Ks(s) ? o : o.value;
      return r && J(f) ? /* @__PURE__ */ Rs(f) : f;
    }
    return J(o) ? r ? /* @__PURE__ */ Rs(o) : /* @__PURE__ */ Xs(o) : o;
  }
}
class hr extends ar {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const l = F(t) && Ks(s);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ Ge(i);
      if (!/* @__PURE__ */ Te(n) && !/* @__PURE__ */ Ge(n) && (i = /* @__PURE__ */ B(i), n = /* @__PURE__ */ B(n)), !l && /* @__PURE__ */ ce(i) && !/* @__PURE__ */ ce(n))
        return h || (i.value = n), !0;
    }
    const o = l ? Number(s) < t.length : W(t, s), f = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ ce(t) ? t : r
    );
    return t === /* @__PURE__ */ B(r) && (o ? Ne(n, i) && Ue(t, "set", s, n) : Ue(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = W(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ue(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!je(s) || !ur.has(s)) && oe(t, "has", s), n;
  }
  ownKeys(t) {
    return oe(
      t,
      "iterate",
      F(t) ? "length" : st
    ), Reflect.ownKeys(t);
  }
}
class Ii extends ar {
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
const Di = /* @__PURE__ */ new hr(), Ni = /* @__PURE__ */ new Ii(), Hi = /* @__PURE__ */ new hr(!0);
const Ps = (e) => e, Ut = (e) => Reflect.getPrototypeOf(e);
function ji(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ B(r), l = ut(i), o = e === "entries" || e === Symbol.iterator && l, f = e === "keys" && l, h = r[e](...n), a = s ? Ps : t ? gt : Oe;
    return !t && oe(
      i,
      "iterate",
      f ? Os : st
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
function Bt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Li(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ B(i), o = /* @__PURE__ */ B(r);
      e || (Ne(r, o) && oe(l, "get", r), oe(l, "get", o));
      const { has: f } = Ut(l), h = t ? Ps : e ? gt : Oe;
      if (f.call(l, r))
        return h(i.get(r));
      if (f.call(l, o))
        return h(i.get(o));
      i !== l && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && oe(/* @__PURE__ */ B(r), "iterate", st), r.size;
    },
    has(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ B(i), o = /* @__PURE__ */ B(r);
      return e || (Ne(r, o) && oe(l, "has", r), oe(l, "has", o)), r === o ? i.has(r) : i.has(r) || i.has(o);
    },
    forEach(r, i) {
      const l = this, o = l.__v_raw, f = /* @__PURE__ */ B(o), h = t ? Ps : e ? gt : Oe;
      return !e && oe(f, "iterate", st), o.forEach((a, g) => r.call(i, h(a), h(g), l));
    }
  };
  return ie(
    s,
    e ? {
      add: Bt("add"),
      set: Bt("set"),
      delete: Bt("delete"),
      clear: Bt("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ B(this), l = Ut(i), o = /* @__PURE__ */ B(r), f = !t && !/* @__PURE__ */ Te(r) && !/* @__PURE__ */ Ge(r) ? o : r;
        return l.has.call(i, f) || Ne(r, f) && l.has.call(i, r) || Ne(o, f) && l.has.call(i, o) || (i.add(f), Ue(i, "add", f, f)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Te(i) && !/* @__PURE__ */ Ge(i) && (i = /* @__PURE__ */ B(i));
        const l = /* @__PURE__ */ B(this), { has: o, get: f } = Ut(l);
        let h = o.call(l, r);
        h || (r = /* @__PURE__ */ B(r), h = o.call(l, r));
        const a = f.call(l, r);
        return l.set(r, i), h ? Ne(i, a) && Ue(l, "set", r, i) : Ue(l, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ B(this), { has: l, get: o } = Ut(i);
        let f = l.call(i, r);
        f || (r = /* @__PURE__ */ B(r), f = l.call(i, r)), o && o.call(i, r);
        const h = i.delete(r);
        return f && Ue(i, "delete", r, void 0), h;
      },
      clear() {
        const r = /* @__PURE__ */ B(this), i = r.size !== 0, l = r.clear();
        return i && Ue(
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
function Ys(e, t) {
  const s = Li(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    W(s, r) && r in n ? s : n,
    r,
    i
  );
}
const $i = {
  get: /* @__PURE__ */ Ys(!1, !1)
}, Vi = {
  get: /* @__PURE__ */ Ys(!1, !0)
}, Ki = {
  get: /* @__PURE__ */ Ys(!0, !1)
};
const dr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap();
function Bi(e) {
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
function Wi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Bi(fi(e));
}
// @__NO_SIDE_EFFECTS__
function Xs(e) {
  return /* @__PURE__ */ Ge(e) ? e : Qs(
    e,
    !1,
    Di,
    $i,
    dr
  );
}
// @__NO_SIDE_EFFECTS__
function ki(e) {
  return Qs(
    e,
    !1,
    Hi,
    Vi,
    pr
  );
}
// @__NO_SIDE_EFFECTS__
function Rs(e) {
  return Qs(
    e,
    !0,
    Ni,
    Ki,
    gr
  );
}
function Qs(e, t, s, n, r) {
  if (!J(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Wi(e);
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
  return /* @__PURE__ */ Ge(e) ? /* @__PURE__ */ Qe(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ B(t) : e;
}
function Gi(e) {
  return !W(e, "__v_skip") && Object.isExtensible(e) && Qn(e, "__v_skip", !0), e;
}
const Oe = (e) => J(e) ? /* @__PURE__ */ Xs(e) : e, gt = (e) => J(e) ? /* @__PURE__ */ Rs(e) : e;
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function sc(e) {
  return qi(e, !1);
}
function qi(e, t) {
  return /* @__PURE__ */ ce(e) ? e : new Ji(e, t);
}
class Ji {
  constructor(t, s) {
    this.dep = new Js(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ B(t), this._value = s ? t : Oe(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Te(t) || /* @__PURE__ */ Ge(t);
    t = n ? t : /* @__PURE__ */ B(t), Ne(t, s) && (this._rawValue = t, this._value = n ? t : Oe(t), this.dep.trigger());
  }
}
function Yi(e) {
  return /* @__PURE__ */ ce(e) ? e.value : e;
}
const Xi = {
  get: (e, t, s) => t === "__v_raw" ? e : Yi(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return /* @__PURE__ */ ce(r) && !/* @__PURE__ */ ce(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function mr(e) {
  return /* @__PURE__ */ Qe(e) ? e : new Proxy(e, Xi);
}
class Qi {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Js(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ot - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Z !== this)
      return rr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return or(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Zi(e, t, s = !1) {
  let n, r;
  return H(e) ? n = e : (n = e.get, r = e.set), new Qi(n, r, s);
}
const Wt = {}, zt = /* @__PURE__ */ new WeakMap();
let et;
function zi(e, t = !1, s = et) {
  if (s) {
    let n = zt.get(s);
    n || zt.set(s, n = []), n.push(e);
  }
}
function el(e, t, s = X) {
  const { immediate: n, deep: r, once: i, scheduler: l, augmentJob: o, call: f } = s, h = (m) => r ? m : /* @__PURE__ */ Te(m) || r === !1 || r === 0 ? Be(m, 1) : Be(m);
  let a, g, C, E, U = !1, I = !1;
  if (/* @__PURE__ */ ce(e) ? (g = () => e.value, U = /* @__PURE__ */ Te(e)) : /* @__PURE__ */ Qe(e) ? (g = () => h(e), U = !0) : F(e) ? (I = !0, U = e.some((m) => /* @__PURE__ */ Qe(m) || /* @__PURE__ */ Te(m)), g = () => e.map((m) => {
    if (/* @__PURE__ */ ce(m))
      return m.value;
    if (/* @__PURE__ */ Qe(m))
      return h(m);
    if (H(m))
      return f ? f(m, 2) : m();
  })) : H(e) ? t ? g = f ? () => f(e, 2) : e : g = () => {
    if (C) {
      We();
      try {
        C();
      } finally {
        ke();
      }
    }
    const m = et;
    et = a;
    try {
      return f ? f(e, 3, [E]) : e(E);
    } finally {
      et = m;
    }
  } : g = He, t && r) {
    const m = g, A = r === !0 ? 1 / 0 : r;
    g = () => Be(m(), A);
  }
  const z = Ei(), Y = () => {
    a.stop(), z && z.active && $s(z.effects, a);
  };
  if (i && t) {
    const m = t;
    t = (...A) => {
      m(...A), Y();
    };
  }
  let j = I ? new Array(e.length).fill(Wt) : Wt;
  const p = (m) => {
    if (!(!(a.flags & 1) || !a.dirty && !m))
      if (t) {
        const A = a.run();
        if (r || U || (I ? A.some((K, L) => Ne(K, j[L])) : Ne(A, j))) {
          C && C();
          const K = et;
          et = a;
          try {
            const L = [
              A,
              // pass undefined as the old value when it's changed for the first time
              j === Wt ? void 0 : I && j[0] === Wt ? [] : j,
              E
            ];
            j = A, f ? f(t, 3, L) : (
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
  return o && o(p), a = new sr(g), a.scheduler = l ? () => l(p, !1) : p, E = (m) => zi(m, !1, a), C = a.onStop = () => {
    const m = zt.get(a);
    if (m) {
      if (f)
        f(m, 4);
      else
        for (const A of m) A();
      zt.delete(a);
    }
  }, t ? n ? p(!0) : j = a.run() : l ? l(p.bind(null, !0), !0) : a.run(), Y.pause = a.pause.bind(a), Y.resume = a.resume.bind(a), Y.stop = Y, Y;
}
function Be(e, t = 1 / 0, s) {
  if (t <= 0 || !J(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ ce(e))
    Be(e.value, t, s);
  else if (F(e))
    for (let n = 0; n < e.length; n++)
      Be(e[n], t, s);
  else if (Vs(e) || ut(e))
    e.forEach((n) => {
      Be(n, t, s);
    });
  else if (Yn(e)) {
    for (const n in e)
      Be(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Be(e[n], t, s);
  }
  return e;
}
function Lt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    cs(r, t, s);
  }
}
function Le(e, t, s, n) {
  if (H(e)) {
    const r = Lt(e, t, s, n);
    return r && qn(r) && r.catch((i) => {
      cs(i, t, s);
    }), r;
  }
  if (F(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Le(e[i], t, s, n));
    return r;
  }
}
function cs(e, t, s, n = !0) {
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
      We(), Lt(i, null, 10, [
        e,
        f,
        h
      ]), ke();
      return;
    }
  }
  tl(e, s, r, n, l);
}
function tl(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ue = [];
let Fe = -1;
const at = [];
let Xe = null, ot = 0;
const _r = /* @__PURE__ */ Promise.resolve();
let es = null;
function sl(e) {
  const t = es || _r;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function nl(e) {
  let t = Fe + 1, s = ue.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = ue[n], i = Rt(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function zs(e) {
  if (!(e.flags & 1)) {
    const t = Rt(e), s = ue[ue.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Rt(s) ? ue.push(e) : ue.splice(nl(t), 0, e), e.flags |= 1, br();
  }
}
function br() {
  es || (es = _r.then(yr));
}
function rl(e) {
  F(e) ? at.push(...e) : Xe && e.id === -1 ? Xe.splice(ot + 1, 0, e) : e.flags & 1 || (at.push(e), e.flags |= 1), br();
}
function gn(e, t, s = Fe + 1) {
  for (; s < ue.length; s++) {
    const n = ue[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ue.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ts(e) {
  if (at.length) {
    const t = [...new Set(at)].sort(
      (s, n) => Rt(s) - Rt(n)
    );
    if (at.length = 0, Xe) {
      Xe.push(...t);
      return;
    }
    for (Xe = t, ot = 0; ot < Xe.length; ot++) {
      const s = Xe[ot];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Xe = null, ot = 0;
  }
}
const Rt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function yr(e) {
  try {
    for (Fe = 0; Fe < ue.length; Fe++) {
      const t = ue[Fe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Lt(
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
    Fe = -1, ue.length = 0, ts(), es = null, (ue.length || at.length) && yr();
  }
}
let ve = null, xr = null;
function Ft(e) {
  const t = ve;
  return ve = e, xr = e && e.type.__scopeId || null, t;
}
function il(e, t = ve, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && An(-1);
    const i = Ft(t);
    let l;
    try {
      l = e(...r);
    } finally {
      Ft(i), n._d && An(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function nc(e, t) {
  if (ve === null)
    return e;
  const s = as(ve), n = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, l, o, f = X] = t[r];
    i && (H(i) && (i = {
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
    f && (We(), Le(f, s, 8, [
      e.el,
      o,
      e,
      t
    ]), ke());
  }
}
function ll(e, t) {
  if (ae) {
    let s = ae.provides;
    const n = ae.parent && ae.parent.provides;
    n === s && (s = ae.provides = Object.create(n)), s[e] = t;
  }
}
function Yt(e, t, s = !1) {
  const n = oo();
  if (n || pt) {
    let r = pt ? pt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && H(t) ? t.call(n && n.proxy) : t;
  }
}
const ol = /* @__PURE__ */ Symbol.for("v-scx"), cl = () => Yt(ol);
function Ss(e, t, s) {
  return Sr(e, t, s);
}
function Sr(e, t, s = X) {
  const { immediate: n, deep: r, flush: i, once: l } = s, o = ie({}, s), f = t && n || !t && i !== "post";
  let h;
  if (Dt) {
    if (i === "sync") {
      const E = cl();
      h = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!f) {
      const E = () => {
      };
      return E.stop = He, E.resume = He, E.pause = He, E;
    }
  }
  const a = ae;
  o.call = (E, U, I) => Le(E, a, U, I);
  let g = !1;
  i === "post" ? o.scheduler = (E) => {
    pe(E, a && a.suspense);
  } : i !== "sync" && (g = !0, o.scheduler = (E, U) => {
    U ? E() : zs(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), g && (E.flags |= 2, a && (E.id = a.uid, E.i = a));
  };
  const C = el(e, t, o);
  return Dt && (h ? h.push(C) : f && C()), C;
}
function fl(e, t, s) {
  const n = this.proxy, r = re(e) ? e.includes(".") ? vr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  H(t) ? i = t : (i = t.handler, s = t);
  const l = $t(this), o = Sr(r, i.bind(n), s);
  return l(), o;
}
function vr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const ul = /* @__PURE__ */ Symbol("_vte"), al = (e) => e.__isTeleport, hl = /* @__PURE__ */ Symbol("_leaveCb");
function en(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, en(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function rc(e, t) {
  return H(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function Tr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function mn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const ss = /* @__PURE__ */ new WeakMap();
function ht(e, t, s, n, r = !1) {
  if (F(e)) {
    e.forEach(
      (I, z) => ht(
        I,
        t && (F(t) ? t[z] : t),
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
  const i = n.shapeFlag & 4 ? as(n.component) : n.el, l = r ? null : i, { i: o, r: f } = e, h = t && t.r, a = o.refs === X ? o.refs = {} : o.refs, g = o.setupState, C = /* @__PURE__ */ B(g), E = g === X ? Gn : (I) => mn(a, I) ? !1 : W(C, I), U = (I, z) => !(z && mn(a, z));
  if (h != null && h !== f) {
    if (_n(t), re(h))
      a[h] = null, E(h) && (g[h] = null);
    else if (/* @__PURE__ */ ce(h)) {
      const I = t;
      U(h, I.k) && (h.value = null), I.k && (a[I.k] = null);
    }
  }
  if (H(f))
    Lt(f, o, 12, [l, a]);
  else {
    const I = re(f), z = /* @__PURE__ */ ce(f);
    if (I || z) {
      const Y = () => {
        if (e.f) {
          const j = I ? E(f) ? g[f] : a[f] : U() || !e.k ? f.value : a[e.k];
          if (r)
            F(j) && $s(j, i);
          else if (F(j))
            j.includes(i) || j.push(i);
          else if (I)
            a[f] = [i], E(f) && (g[f] = a[f]);
          else {
            const p = [i];
            U(f, e.k) && (f.value = p), e.k && (a[e.k] = p);
          }
        } else I ? (a[f] = l, E(f) && (g[f] = l)) : z && (U(f, e.k) && (f.value = l), e.k && (a[e.k] = l));
      };
      if (l) {
        const j = () => {
          Y(), ss.delete(e);
        };
        j.id = -1, ss.set(e, j), pe(j, s);
      } else
        _n(e), Y();
    }
  }
}
function _n(e) {
  const t = ss.get(e);
  t && (t.flags |= 8, ss.delete(e));
}
let bn = !1;
const lt = () => {
  bn || (console.error("Hydration completed but contains mismatches."), bn = !0);
}, dl = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", pl = (e) => e.namespaceURI.includes("MathML"), kt = (e) => {
  if (e.nodeType === 1) {
    if (dl(e)) return "svg";
    if (pl(e)) return "mathml";
  }
}, Gt = (e) => e.nodeType === 8;
function gl(e) {
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
      s(null, p, m), ts(), m._vnode = p;
      return;
    }
    g(m.firstChild, p, null, null, null), ts(), m._vnode = p;
  }, g = (p, m, A, K, L, k = !1) => {
    k = k || !!m.dynamicChildren;
    const q = Gt(p) && p.data === "[", N = () => I(
      p,
      m,
      A,
      K,
      L,
      q
    ), { type: te, ref: se, shapeFlag: ne, patchFlag: xe } = m;
    let he = p.nodeType;
    m.el = p, xe === -2 && (k = !1, m.dynamicChildren = null);
    let R = null;
    switch (te) {
      case nt:
        he !== 3 ? m.children === "" ? (f(m.el = r(""), l(p), p), R = p) : R = N() : (p.data !== m.children && (lt(), p.data = m.children), R = i(p));
        break;
      case qe:
        j(p) ? (R = i(p), Y(
          m.el = p.content.firstChild,
          p,
          A
        )) : he !== 8 || q ? R = N() : R = i(p);
        break;
      case Et:
        if (q && (p = i(p), he = p.nodeType), he === 1 || he === 3) {
          R = p;
          const $ = !m.children.length;
          for (let M = 0; M < m.staticCount; M++)
            $ && (m.children += R.nodeType === 1 ? R.outerHTML : R.data), M === m.staticCount - 1 && (m.anchor = R), R = i(R);
          return q ? i(R) : R;
        } else
          N();
        break;
      case Ee:
        q ? R = U(
          p,
          m,
          A,
          K,
          L,
          k
        ) : R = N();
        break;
      default:
        if (ne & 1)
          (he !== 1 || m.type.toLowerCase() !== p.tagName.toLowerCase()) && !j(p) ? R = N() : R = C(
            p,
            m,
            A,
            K,
            L,
            k
          );
        else if (ne & 6) {
          m.slotScopeIds = L;
          const $ = l(p);
          if (q ? R = z(p) : Gt(p) && p.data === "teleport start" ? R = z(p, p.data, "teleport end") : R = i(p), t(
            m,
            $,
            null,
            A,
            K,
            kt($),
            k
          ), dt(m) && !m.type.__asyncResolved) {
            let M;
            q ? (M = we(Ee), M.anchor = R ? R.previousSibling : $.lastChild) : M = p.nodeType === 3 ? Qr("") : we("div"), M.el = p, m.component.subTree = M;
          }
        } else ne & 64 ? he !== 8 ? R = N() : R = m.type.hydrate(
          p,
          m,
          A,
          K,
          L,
          k,
          e,
          E
        ) : ne & 128 && (R = m.type.hydrate(
          p,
          m,
          A,
          K,
          kt(l(p)),
          L,
          k,
          e,
          g
        ));
    }
    return se != null && ht(se, null, K, m), R;
  }, C = (p, m, A, K, L, k) => {
    k = k || !!m.dynamicChildren;
    const { type: q, props: N, patchFlag: te, shapeFlag: se, dirs: ne, transition: xe } = m, he = q === "input" || q === "option";
    if (he || te !== -1) {
      ne && Ie(m, null, A, "created");
      let R = !1;
      if (j(p)) {
        R = Ur(
          null,
          // no need check parentSuspense in hydration
          xe
        ) && A && A.vnode.props && A.vnode.props.appear;
        const M = p.content.firstChild;
        if (R) {
          const ee = M.getAttribute("class");
          ee && (M.$cls = ee), xe.beforeEnter(M);
        }
        Y(M, p, A), m.el = p = M;
      }
      if (se & 16 && // skip if element has innerHTML / textContent
      !(N && (N.innerHTML || N.textContent))) {
        let M = E(
          p.firstChild,
          m,
          p,
          A,
          K,
          L,
          k
        );
        for (; M; ) {
          qt(
            p,
            1
            /* CHILDREN */
          ) || lt();
          const ee = M;
          M = M.nextSibling, o(ee);
        }
      } else if (se & 8) {
        let M = m.children;
        M[0] === `
` && (p.tagName === "PRE" || p.tagName === "TEXTAREA") && (M = M.slice(1));
        const { textContent: ee } = p;
        ee !== M && // innerHTML normalize \r\n or \r into a single \n in the DOM
        ee !== M.replace(/\r\n|\r/g, `
`) && (qt(
          p,
          0
          /* TEXT */
        ) || lt(), p.textContent = m.children);
      }
      if (N) {
        if (he || !k || te & 48) {
          const M = p.tagName.includes("-");
          for (const ee in N)
            (he && (ee.endsWith("value") || ee === "indeterminate") || Nt(ee) && !tt(ee) || // force hydrate v-bind with .prop modifiers
            ee[0] === "." || M && !tt(ee)) && n(p, ee, null, N[ee], void 0, A);
        } else if (N.onClick)
          n(
            p,
            "onClick",
            null,
            N.onClick,
            void 0,
            A
          );
        else if (te & 4 && /* @__PURE__ */ Qe(N.style))
          for (const M in N.style) N.style[M];
      }
      let $;
      ($ = N && N.onVnodeBeforeMount) && Se($, A, m), ne && Ie(m, null, A, "beforeMount"), (($ = N && N.onVnodeMounted) || ne || R) && qr(() => {
        $ && Se($, A, m), R && xe.enter(p), ne && Ie(m, null, A, "mounted");
      }, K);
    }
    return p.nextSibling;
  }, E = (p, m, A, K, L, k, q) => {
    q = q || !!m.dynamicChildren;
    const N = m.children, te = N.length;
    for (let se = 0; se < te; se++) {
      const ne = q ? N[se] : N[se] = be(N[se]), xe = ne.type === nt;
      p ? (xe && !q && se + 1 < te && be(N[se + 1]).type === nt && (f(
        r(
          p.data.slice(ne.children.length)
        ),
        A,
        i(p)
      ), p.data = ne.children), p = g(
        p,
        ne,
        K,
        L,
        k,
        q
      )) : xe && !ne.children ? f(ne.el = r(""), A) : (qt(
        A,
        1
        /* CHILDREN */
      ) || lt(), s(
        null,
        ne,
        A,
        null,
        K,
        L,
        kt(A),
        k
      ));
    }
    return p;
  }, U = (p, m, A, K, L, k) => {
    const { slotScopeIds: q } = m;
    q && (L = L ? L.concat(q) : q);
    const N = l(p), te = E(
      i(p),
      m,
      N,
      A,
      K,
      L,
      k
    );
    return te && Gt(te) && te.data === "]" ? i(m.anchor = te) : (lt(), f(m.anchor = h("]"), N, te), te);
  }, I = (p, m, A, K, L, k) => {
    if (qt(
      p.parentElement,
      1
      /* CHILDREN */
    ) || lt(), m.el = null, k) {
      const te = z(p);
      for (; ; ) {
        const se = i(p);
        if (se && se !== te)
          o(se);
        else
          break;
      }
    }
    const q = i(p), N = l(p);
    return o(p), s(
      null,
      m,
      N,
      q,
      A,
      K,
      kt(N),
      L
    ), A && (A.vnode.el = m.el, Fr(A, m.el)), q;
  }, z = (p, m = "[", A = "]") => {
    let K = 0;
    for (; p; )
      if (p = i(p), p && Gt(p) && (p.data === m && K++, p.data === A)) {
        if (K === 0)
          return i(p);
        K--;
      }
    return p;
  }, Y = (p, m, A) => {
    const K = m.parentNode;
    K && K.replaceChild(p, m);
    let L = A;
    for (; L; )
      L.vnode.el === m && (L.vnode.el = L.subTree.el = p), L = L.parent;
  }, j = (p) => p.nodeType === 1 && p.tagName === "TEMPLATE";
  return [a, g];
}
const yn = "data-allow-mismatch", ml = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function qt(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(yn); )
      e = e.parentElement;
  const s = e && e.getAttribute(yn);
  if (s == null)
    return !1;
  if (s === "")
    return !0;
  {
    const n = s.split(",");
    return t === 0 && n.includes("children") ? !0 : n.includes(ml[t]);
  }
}
ls().requestIdleCallback;
ls().cancelIdleCallback;
const dt = (e) => !!e.type.__asyncLoader, wr = (e) => e.type.__isKeepAlive;
function _l(e, t) {
  Cr(e, "a", t);
}
function bl(e, t) {
  Cr(e, "da", t);
}
function Cr(e, t, s = ae) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (fs(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      wr(r.parent.vnode) && yl(n, t, s, r), r = r.parent;
  }
}
function yl(e, t, s, n) {
  const r = fs(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Er(() => {
    $s(n[t], r);
  }, s);
}
function fs(e, t, s = ae, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...l) => {
      We();
      const o = $t(s), f = Le(t, s, e, l);
      return o(), ke(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Ye = (e) => (t, s = ae) => {
  (!Dt || e === "sp") && fs(e, (...n) => t(...n), s);
}, xl = Ye("bm"), Sl = Ye("m"), vl = Ye(
  "bu"
), Tl = Ye("u"), wl = Ye(
  "bum"
), Er = Ye("um"), Cl = Ye(
  "sp"
), El = Ye("rtg"), Al = Ye("rtc");
function Ml(e, t = ae) {
  fs("ec", e, t);
}
const Ol = /* @__PURE__ */ Symbol.for("v-ndc");
function ic(e, t, s, n) {
  let r;
  const i = s, l = F(e);
  if (l || re(e)) {
    const o = l && /* @__PURE__ */ Qe(e);
    let f = !1, h = !1;
    o && (f = !/* @__PURE__ */ Te(e), h = /* @__PURE__ */ Ge(e), e = os(e)), r = new Array(e.length);
    for (let a = 0, g = e.length; a < g; a++)
      r[a] = t(
        f ? h ? gt(Oe(e[a])) : Oe(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, i);
  } else if (J(e))
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
const Fs = (e) => e ? zr(e) ? as(e) : Fs(e.parent) : null, Ct = (
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
    $parent: (e) => Fs(e.parent),
    $root: (e) => Fs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Mr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      zs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = sl.bind(e.proxy)),
    $watch: (e) => fl.bind(e)
  })
), vs = (e, t) => e !== X && !e.__isScriptSetup && W(e, t), Pl = {
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
        if (vs(n, t))
          return l[t] = 1, n[t];
        if (r !== X && W(r, t))
          return l[t] = 2, r[t];
        if (W(i, t))
          return l[t] = 3, i[t];
        if (s !== X && W(s, t))
          return l[t] = 4, s[t];
        Is && (l[t] = 0);
      }
    }
    const h = Ct[t];
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
    return vs(r, t) ? (r[t] = s, !0) : n !== X && W(n, t) ? (n[t] = s, !0) : W(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: l }
  }, o) {
    let f;
    return !!(s[o] || e !== X && o[0] !== "$" && W(e, o) || vs(t, o) || W(i, o) || W(n, o) || W(Ct, o) || W(r.config.globalProperties, o) || (f = l.__cssModules) && f[o]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : W(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function xn(e) {
  return F(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Is = !0;
function Rl(e) {
  const t = Mr(e), s = e.proxy, n = e.ctx;
  Is = !1, t.beforeCreate && Sn(t.beforeCreate, e, "bc");
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
    updated: U,
    activated: I,
    deactivated: z,
    beforeDestroy: Y,
    beforeUnmount: j,
    destroyed: p,
    unmounted: m,
    render: A,
    renderTracked: K,
    renderTriggered: L,
    errorCaptured: k,
    serverPrefetch: q,
    // public API
    expose: N,
    inheritAttrs: te,
    // assets
    components: se,
    directives: ne,
    filters: xe
  } = t;
  if (h && Fl(h, n, null), l)
    for (const $ in l) {
      const M = l[$];
      H(M) && (n[$] = M.bind(s));
    }
  if (r) {
    const $ = r.call(s, s);
    J($) && (e.data = /* @__PURE__ */ Xs($));
  }
  if (Is = !0, i)
    for (const $ in i) {
      const M = i[$], ee = H(M) ? M.bind(s, s) : H(M.get) ? M.get.bind(s, s) : He, Vt = !H(M) && H(M.set) ? M.set.bind(s) : He, Ze = ho({
        get: ee,
        set: Vt
      });
      Object.defineProperty(n, $, {
        enumerable: !0,
        configurable: !0,
        get: () => Ze.value,
        set: (Pe) => Ze.value = Pe
      });
    }
  if (o)
    for (const $ in o)
      Ar(o[$], n, s, $);
  if (f) {
    const $ = H(f) ? f.call(s) : f;
    Reflect.ownKeys($).forEach((M) => {
      ll(M, $[M]);
    });
  }
  a && Sn(a, e, "c");
  function R($, M) {
    F(M) ? M.forEach((ee) => $(ee.bind(s))) : M && $(M.bind(s));
  }
  if (R(xl, g), R(Sl, C), R(vl, E), R(Tl, U), R(_l, I), R(bl, z), R(Ml, k), R(Al, K), R(El, L), R(wl, j), R(Er, m), R(Cl, q), F(N))
    if (N.length) {
      const $ = e.exposed || (e.exposed = {});
      N.forEach((M) => {
        Object.defineProperty($, M, {
          get: () => s[M],
          set: (ee) => s[M] = ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === He && (e.render = A), te != null && (e.inheritAttrs = te), se && (e.components = se), ne && (e.directives = ne), q && Tr(e);
}
function Fl(e, t, s = He) {
  F(e) && (e = Ds(e));
  for (const n in e) {
    const r = e[n];
    let i;
    J(r) ? "default" in r ? i = Yt(
      r.from || n,
      r.default,
      !0
    ) : i = Yt(r.from || n) : i = Yt(r), /* @__PURE__ */ ce(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[n] = i;
  }
}
function Sn(e, t, s) {
  Le(
    F(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Ar(e, t, s, n) {
  let r = n.includes(".") ? vr(s, n) : () => s[n];
  if (re(e)) {
    const i = t[e];
    H(i) && Ss(r, i);
  } else if (H(e))
    Ss(r, e.bind(s));
  else if (J(e))
    if (F(e))
      e.forEach((i) => Ar(i, t, s, n));
    else {
      const i = H(e.handler) ? e.handler.bind(s) : t[e.handler];
      H(i) && Ss(r, i, e);
    }
}
function Mr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, o = i.get(t);
  let f;
  return o ? f = o : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (h) => ns(f, h, l, !0)
  ), ns(f, t, l)), J(t) && i.set(t, f), f;
}
function ns(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && ns(e, i, s, !0), r && r.forEach(
    (l) => ns(e, l, s, !0)
  );
  for (const l in t)
    if (!(n && l === "expose")) {
      const o = Il[l] || s && s[l];
      e[l] = o ? o(e[l], t[l]) : t[l];
    }
  return e;
}
const Il = {
  data: vn,
  props: Tn,
  emits: Tn,
  // objects
  methods: vt,
  computed: vt,
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
  components: vt,
  directives: vt,
  // watch
  watch: Nl,
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
  return vt(Ds(e), Ds(t));
}
function Ds(e) {
  if (F(e)) {
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
function vt(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Tn(e, t) {
  return e ? F(e) && F(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    xn(e),
    xn(t ?? {})
  ) : t;
}
function Nl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ie(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = fe(e[n], t[n]);
  return s;
}
function Or() {
  return {
    app: null,
    config: {
      isNativeTag: Gn,
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
let Hl = 0;
function jl(e, t) {
  return function(n, r = null) {
    H(n) || (n = ie({}, n)), r != null && !J(r) && (r = null);
    const i = Or(), l = /* @__PURE__ */ new WeakSet(), o = [];
    let f = !1;
    const h = i.app = {
      _uid: Hl++,
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
      use(a, ...g) {
        return l.has(a) || (a && H(a.install) ? (l.add(a), a.install(h, ...g)) : H(a) && (l.add(a), a(h, ...g))), h;
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
          const E = h._ceVNode || we(n, r);
          return E.appContext = i, C === !0 ? C = "svg" : C === !1 && (C = void 0), g && t ? t(E, a) : e(E, a, C), f = !0, h._container = a, a.__vue_app__ = h, as(E.component);
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
        const g = pt;
        pt = h;
        try {
          return a();
        } finally {
          pt = g;
        }
      }
    };
    return h;
  };
}
let pt = null;
const Ll = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ae(t)}Modifiers`] || e[`${Je(t)}Modifiers`];
function $l(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || X;
  let r = s;
  const i = t.startsWith("update:"), l = i && Ll(n, t.slice(7));
  l && (l.trim && (r = s.map((a) => re(a) ? a.trim() : a)), l.number && (r = s.map(Us)));
  let o, f = n[o = gs(t)] || // also try camelCase event handler (#2249)
  n[o = gs(Ae(t))];
  !f && i && (f = n[o = gs(Je(t))]), f && Le(
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
const Vl = /* @__PURE__ */ new WeakMap();
function Pr(e, t, s = !1) {
  const n = s ? Vl : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let l = {}, o = !1;
  if (!H(e)) {
    const f = (h) => {
      const a = Pr(h, t, !0);
      a && (o = !0, ie(l, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !o ? (J(e) && n.set(e, null), null) : (F(i) ? i.forEach((f) => l[f] = null) : ie(l, i), J(e) && n.set(e, l), l);
}
function us(e, t) {
  return !e || !Nt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), W(e, t[0].toLowerCase() + t.slice(1)) || W(e, Je(t)) || W(e, t));
}
function Xt(e) {
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
    ctx: U,
    inheritAttrs: I
  } = e, z = Ft(e);
  let Y, j;
  try {
    if (s.shapeFlag & 4) {
      const m = r || n, A = m;
      Y = be(
        h.call(
          A,
          m,
          a,
          g,
          E,
          C,
          U
        )
      ), j = o;
    } else {
      const m = t;
      Y = be(
        m.length > 1 ? m(
          g,
          { attrs: o, slots: l, emit: f }
        ) : m(
          g,
          null
        )
      ), j = t.props ? o : Kl(o);
    }
  } catch (m) {
    At.length = 0, cs(m, e, 1), Y = we(qe);
  }
  let p = Y;
  if (j && I !== !1) {
    const m = Object.keys(j), { shapeFlag: A } = p;
    m.length && A & 7 && (i && m.some(Ls) && (j = Ul(
      j,
      i
    )), p = mt(p, j, !1, !0));
  }
  return s.dirs && (p = mt(p, null, !1, !0), p.dirs = p.dirs ? p.dirs.concat(s.dirs) : s.dirs), s.transition && en(p, s.transition), Y = p, Ft(z), Y;
}
const Kl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Nt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Ul = (e, t) => {
  const s = {};
  for (const n in e)
    (!Ls(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Bl(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: l, children: o, patchFlag: f } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? wn(n, l, h) : !!l;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let g = 0; g < a.length; g++) {
        const C = a[g];
        if (Rr(l, n, C) && !us(h, C))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : n === l ? !1 : n ? l ? wn(n, l, h) : !0 : !!l;
  return !1;
}
function wn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (Rr(t, e, i) && !us(s, i))
      return !0;
  }
  return !1;
}
function Rr(e, t, s) {
  const n = e[s], r = t[s];
  return s === "style" && J(n) && J(r) ? !jt(n, r) : n !== r;
}
function Fr({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Ir = {}, Dr = () => Object.create(Ir), Nr = (e) => Object.getPrototypeOf(e) === Ir;
function Wl(e, t, s, n = !1) {
  const r = {}, i = Dr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Hr(e, t, r, i);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  s ? e.props = n ? r : /* @__PURE__ */ ki(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function kl(e, t, s, n) {
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
        if (us(e.emitsOptions, C))
          continue;
        const E = t[C];
        if (f)
          if (W(i, C))
            E !== i[C] && (i[C] = E, h = !0);
          else {
            const U = Ae(C);
            r[U] = Ns(
              f,
              o,
              U,
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
    Hr(e, t, r, i) && (h = !0);
    let a;
    for (const g in o)
      (!t || // for camelCase
      !W(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Je(g)) === g || !W(t, a))) && (f ? s && // for camelCase
      (s[g] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[g] = Ns(
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
  h && Ue(e.attrs, "set", "");
}
function Hr(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let l = !1, o;
  if (t)
    for (let f in t) {
      if (tt(f))
        continue;
      const h = t[f];
      let a;
      r && W(r, a = Ae(f)) ? !i || !i.includes(a) ? s[a] = h : (o || (o = {}))[a] = h : us(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, l = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ B(s), h = o || X;
    for (let a = 0; a < i.length; a++) {
      const g = i[a];
      s[g] = Ns(
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
function Ns(e, t, s, n, r, i) {
  const l = e[s];
  if (l != null) {
    const o = W(l, "default");
    if (o && n === void 0) {
      const f = l.default;
      if (l.type !== Function && !l.skipFactory && H(f)) {
        const { propsDefaults: h } = r;
        if (s in h)
          n = h[s];
        else {
          const a = $t(r);
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
    ] && (n === "" || n === Je(s)) && (n = !0));
  }
  return n;
}
const Gl = /* @__PURE__ */ new WeakMap();
function jr(e, t, s = !1) {
  const n = s ? Gl : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, o = [];
  let f = !1;
  if (!H(e)) {
    const a = (g) => {
      f = !0;
      const [C, E] = jr(g, t, !0);
      ie(l, C), E && o.push(...E);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return J(e) && n.set(e, ft), ft;
  if (F(i))
    for (let a = 0; a < i.length; a++) {
      const g = Ae(i[a]);
      Cn(g) && (l[g] = X);
    }
  else if (i)
    for (const a in i) {
      const g = Ae(a);
      if (Cn(g)) {
        const C = i[a], E = l[g] = F(C) || H(C) ? { type: C } : ie({}, C), U = E.type;
        let I = !1, z = !0;
        if (F(U))
          for (let Y = 0; Y < U.length; ++Y) {
            const j = U[Y], p = H(j) && j.name;
            if (p === "Boolean") {
              I = !0;
              break;
            } else p === "String" && (z = !1);
          }
        else
          I = H(U) && U.name === "Boolean";
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
  return J(e) && n.set(e, h), h;
}
function Cn(e) {
  return e[0] !== "$" && !tt(e);
}
const tn = (e) => e === "_" || e === "_ctx" || e === "$stable", sn = (e) => F(e) ? e.map(be) : [be(e)], ql = (e, t, s) => {
  if (t._n)
    return t;
  const n = il((...r) => sn(t(...r)), s);
  return n._c = !1, n;
}, Lr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (tn(r)) continue;
    const i = e[r];
    if (H(i))
      t[r] = ql(r, i, n);
    else if (i != null) {
      const l = sn(i);
      t[r] = () => l;
    }
  }
}, $r = (e, t) => {
  const s = sn(t);
  e.slots.default = () => s;
}, Vr = (e, t, s) => {
  for (const n in t)
    (s || !tn(n)) && (e[n] = t[n]);
}, Jl = (e, t, s) => {
  const n = e.slots = Dr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Vr(n, t, s), s && Qn(n, "_", r, !0)) : Lr(t, n);
  } else t && $r(e, t);
}, Yl = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, l = X;
  if (n.shapeFlag & 32) {
    const o = t._;
    o ? s && o === 1 ? i = !1 : Vr(r, t, s) : (i = !t.$stable, Lr(t, r)), l = t;
  } else t && ($r(e, t), l = { default: 1 });
  if (i)
    for (const o in r)
      !tn(o) && l[o] == null && delete r[o];
}, pe = qr;
function Xl(e) {
  return Kr(e);
}
function Ql(e) {
  return Kr(e, gl);
}
function Kr(e, t) {
  const s = ls();
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
    setScopeId: E = He,
    insertStaticContent: U
  } = e, I = (c, u, d, x = null, _ = null, b = null, T = void 0, v = null, S = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !St(c, u) && (x = Kt(c), Pe(c, _, b, !0), c = null), u.patchFlag === -2 && (S = !1, u.dynamicChildren = null);
    const { type: y, ref: P, shapeFlag: w } = u;
    switch (y) {
      case nt:
        z(c, u, d, x);
        break;
      case qe:
        Y(c, u, d, x);
        break;
      case Et:
        c == null && j(u, d, x, T);
        break;
      case Ee:
        se(
          c,
          u,
          d,
          x,
          _,
          b,
          T,
          v,
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
          T,
          v,
          S
        ) : w & 6 ? ne(
          c,
          u,
          d,
          x,
          _,
          b,
          T,
          v,
          S
        ) : (w & 64 || w & 128) && y.process(
          c,
          u,
          d,
          x,
          _,
          b,
          T,
          v,
          S,
          rt
        );
    }
    P != null && _ ? ht(P, c && c.ref, b, u || c, !u) : P == null && c && c.ref != null && ht(c.ref, null, b, c, !0);
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
  }, j = (c, u, d, x) => {
    [c.el, c.anchor] = U(
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
  }, A = (c, u, d, x, _, b, T, v, S) => {
    if (u.type === "svg" ? T = "svg" : u.type === "math" && (T = "mathml"), c == null)
      K(
        u,
        d,
        x,
        _,
        b,
        T,
        v,
        S
      );
    else {
      const y = c.el && c.el._isVueCE ? c.el : null;
      try {
        y && y._beginPatch(), q(
          c,
          u,
          _,
          b,
          T,
          v,
          S
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, K = (c, u, d, x, _, b, T, v) => {
    let S, y;
    const { props: P, shapeFlag: w, transition: O, dirs: D } = c;
    if (S = c.el = l(
      c.type,
      b,
      P && P.is,
      P
    ), w & 8 ? a(S, c.children) : w & 16 && k(
      c.children,
      S,
      null,
      x,
      _,
      Ts(c, b),
      T,
      v
    ), D && Ie(c, null, x, "created"), L(S, c, c.scopeId, T, x), P) {
      for (const Q in P)
        Q !== "value" && !tt(Q) && i(S, Q, null, P[Q], b, x);
      "value" in P && i(S, "value", null, P.value, b), (y = P.onVnodeBeforeMount) && Se(y, x, c);
    }
    D && Ie(c, null, x, "beforeMount");
    const V = Ur(_, O);
    V && O.beforeEnter(S), n(S, u, d), ((y = P && P.onVnodeMounted) || V || D) && pe(() => {
      y && Se(y, x, c), V && O.enter(S), D && Ie(c, null, x, "mounted");
    }, _);
  }, L = (c, u, d, x, _) => {
    if (d && E(c, d), x)
      for (let b = 0; b < x.length; b++)
        E(c, x[b]);
    if (_) {
      let b = _.subTree;
      if (u === b || Gr(b.type) && (b.ssContent === u || b.ssFallback === u)) {
        const T = _.vnode;
        L(
          c,
          T,
          T.scopeId,
          T.slotScopeIds,
          _.parent
        );
      }
    }
  }, k = (c, u, d, x, _, b, T, v, S = 0) => {
    for (let y = S; y < c.length; y++) {
      const P = c[y] = v ? Ke(c[y]) : be(c[y]);
      I(
        null,
        P,
        u,
        d,
        x,
        _,
        b,
        T,
        v
      );
    }
  }, q = (c, u, d, x, _, b, T) => {
    const v = u.el = c.el;
    let { patchFlag: S, dynamicChildren: y, dirs: P } = u;
    S |= c.patchFlag & 16;
    const w = c.props || X, O = u.props || X;
    let D;
    if (d && ze(d, !1), (D = O.onVnodeBeforeUpdate) && Se(D, d, u, c), P && Ie(u, c, d, "beforeUpdate"), d && ze(d, !0), (w.innerHTML && O.innerHTML == null || w.textContent && O.textContent == null) && a(v, ""), y ? N(
      c.dynamicChildren,
      y,
      v,
      d,
      x,
      Ts(u, _),
      b
    ) : T || M(
      c,
      u,
      v,
      null,
      d,
      x,
      Ts(u, _),
      b,
      !1
    ), S > 0) {
      if (S & 16)
        te(v, w, O, d, _);
      else if (S & 2 && w.class !== O.class && i(v, "class", null, O.class, _), S & 4 && i(v, "style", w.style, O.style, _), S & 8) {
        const V = u.dynamicProps;
        for (let Q = 0; Q < V.length; Q++) {
          const G = V[Q], de = w[G], le = O[G];
          (le !== de || G === "value") && i(v, G, de, le, _, d);
        }
      }
      S & 1 && c.children !== u.children && a(v, u.children);
    } else !T && y == null && te(v, w, O, d, _);
    ((D = O.onVnodeUpdated) || P) && pe(() => {
      D && Se(D, d, u, c), P && Ie(u, c, d, "updated");
    }, x);
  }, N = (c, u, d, x, _, b, T) => {
    for (let v = 0; v < u.length; v++) {
      const S = c[v], y = u[v], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === Ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !St(S, y) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? g(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      I(
        S,
        y,
        P,
        null,
        x,
        _,
        b,
        T,
        !0
      );
    }
  }, te = (c, u, d, x, _) => {
    if (u !== d) {
      if (u !== X)
        for (const b in u)
          !tt(b) && !(b in d) && i(
            c,
            b,
            u[b],
            null,
            _,
            x
          );
      for (const b in d) {
        if (tt(b)) continue;
        const T = d[b], v = u[b];
        T !== v && b !== "value" && i(c, b, v, T, _, x);
      }
      "value" in d && i(c, "value", u.value, d.value, _);
    }
  }, se = (c, u, d, x, _, b, T, v, S) => {
    const y = u.el = c ? c.el : o(""), P = u.anchor = c ? c.anchor : o("");
    let { patchFlag: w, dynamicChildren: O, slotScopeIds: D } = u;
    D && (v = v ? v.concat(D) : D), c == null ? (n(y, d, x), n(P, d, x), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      d,
      P,
      _,
      b,
      T,
      v,
      S
    )) : w > 0 && w & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === O.length ? (N(
      c.dynamicChildren,
      O,
      d,
      _,
      b,
      T,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || _ && u === _.subTree) && Br(
      c,
      u,
      !0
      /* shallow */
    )) : M(
      c,
      u,
      d,
      P,
      _,
      b,
      T,
      v,
      S
    );
  }, ne = (c, u, d, x, _, b, T, v, S) => {
    u.slotScopeIds = v, c == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      d,
      x,
      T,
      S
    ) : xe(
      u,
      d,
      x,
      _,
      b,
      T,
      S
    ) : he(c, u, S);
  }, xe = (c, u, d, x, _, b, T) => {
    const v = c.component = Zr(
      c,
      x,
      _
    );
    if (wr(c) && (v.ctx.renderer = rt), ei(v, !1, T), v.asyncDep) {
      if (_ && _.registerDep(v, R, T), !c.el) {
        const S = v.subTree = we(qe);
        Y(null, S, u, d), c.placeholder = S.el;
      }
    } else
      R(
        v,
        c,
        u,
        d,
        _,
        b,
        T
      );
  }, he = (c, u, d) => {
    const x = u.component = c.component;
    if (Bl(c, u, d))
      if (x.asyncDep && !x.asyncResolved) {
        $(x, u, d);
        return;
      } else
        x.next = u, x.update();
    else
      u.el = c.el, x.vnode = u;
  }, R = (c, u, d, x, _, b, T) => {
    const v = () => {
      if (c.isMounted) {
        let { next: w, bu: O, u: D, parent: V, vnode: Q } = c;
        {
          const me = Wr(c);
          if (me) {
            w && (w.el = Q.el, $(c, w, T)), me.asyncDep.then(() => {
              pe(() => {
                c.isUnmounted || y();
              }, _);
            });
            return;
          }
        }
        let G = w, de;
        ze(c, !1), w ? (w.el = Q.el, $(c, w, T)) : w = Q, O && Jt(O), (de = w.props && w.props.onVnodeBeforeUpdate) && Se(de, V, w, Q), ze(c, !0);
        const le = Xt(c), Ce = c.subTree;
        c.subTree = le, I(
          Ce,
          le,
          // parent may have changed if it's in a teleport
          g(Ce.el),
          // anchor may have changed if it's in a fragment
          Kt(Ce),
          c,
          _,
          b
        ), w.el = le.el, G === null && Fr(c, le.el), D && pe(D, _), (de = w.props && w.props.onVnodeUpdated) && pe(
          () => Se(de, V, w, Q),
          _
        );
      } else {
        let w;
        const { el: O, props: D } = u, { bm: V, m: Q, parent: G, root: de, type: le } = c, Ce = dt(u);
        if (ze(c, !1), V && Jt(V), !Ce && (w = D && D.onVnodeBeforeMount) && Se(w, G, u), ze(c, !0), O && ps) {
          const me = () => {
            c.subTree = Xt(c), ps(
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
            me
          ) : me();
        } else {
          de.ce && de.ce._hasShadowRoot() && de.ce._injectChildStyle(
            le,
            c.parent ? c.parent.type : void 0
          );
          const me = c.subTree = Xt(c);
          I(
            null,
            me,
            d,
            x,
            c,
            _,
            b
          ), u.el = me.el;
        }
        if (Q && pe(Q, _), !Ce && (w = D && D.onVnodeMounted)) {
          const me = u;
          pe(
            () => Se(w, G, me),
            _
          );
        }
        (u.shapeFlag & 256 || G && dt(G.vnode) && G.vnode.shapeFlag & 256) && c.a && pe(c.a, _), c.isMounted = !0, u = d = x = null;
      }
    };
    c.scope.on();
    const S = c.effect = new sr(v);
    c.scope.off();
    const y = c.update = S.run.bind(S), P = c.job = S.runIfDirty.bind(S);
    P.i = c, P.id = c.uid, S.scheduler = () => zs(P), ze(c, !0), y();
  }, $ = (c, u, d) => {
    u.component = c;
    const x = c.vnode.props;
    c.vnode = u, c.next = null, kl(c, u.props, x, d), Yl(c, u.children, d), We(), gn(c), ke();
  }, M = (c, u, d, x, _, b, T, v, S = !1) => {
    const y = c && c.children, P = c ? c.shapeFlag : 0, w = u.children, { patchFlag: O, shapeFlag: D } = u;
    if (O > 0) {
      if (O & 128) {
        Vt(
          y,
          w,
          d,
          x,
          _,
          b,
          T,
          v,
          S
        );
        return;
      } else if (O & 256) {
        ee(
          y,
          w,
          d,
          x,
          _,
          b,
          T,
          v,
          S
        );
        return;
      }
    }
    D & 8 ? (P & 16 && bt(y, _, b), w !== y && a(d, w)) : P & 16 ? D & 16 ? Vt(
      y,
      w,
      d,
      x,
      _,
      b,
      T,
      v,
      S
    ) : bt(y, _, b, !0) : (P & 8 && a(d, ""), D & 16 && k(
      w,
      d,
      x,
      _,
      b,
      T,
      v,
      S
    ));
  }, ee = (c, u, d, x, _, b, T, v, S) => {
    c = c || ft, u = u || ft;
    const y = c.length, P = u.length, w = Math.min(y, P);
    let O;
    for (O = 0; O < w; O++) {
      const D = u[O] = S ? Ke(u[O]) : be(u[O]);
      I(
        c[O],
        D,
        d,
        null,
        _,
        b,
        T,
        v,
        S
      );
    }
    y > P ? bt(
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
      T,
      v,
      S,
      w
    );
  }, Vt = (c, u, d, x, _, b, T, v, S) => {
    let y = 0;
    const P = u.length;
    let w = c.length - 1, O = P - 1;
    for (; y <= w && y <= O; ) {
      const D = c[y], V = u[y] = S ? Ke(u[y]) : be(u[y]);
      if (St(D, V))
        I(
          D,
          V,
          d,
          null,
          _,
          b,
          T,
          v,
          S
        );
      else
        break;
      y++;
    }
    for (; y <= w && y <= O; ) {
      const D = c[w], V = u[O] = S ? Ke(u[O]) : be(u[O]);
      if (St(D, V))
        I(
          D,
          V,
          d,
          null,
          _,
          b,
          T,
          v,
          S
        );
      else
        break;
      w--, O--;
    }
    if (y > w) {
      if (y <= O) {
        const D = O + 1, V = D < P ? u[D].el : x;
        for (; y <= O; )
          I(
            null,
            u[y] = S ? Ke(u[y]) : be(u[y]),
            d,
            V,
            _,
            b,
            T,
            v,
            S
          ), y++;
      }
    } else if (y > O)
      for (; y <= w; )
        Pe(c[y], _, b, !0), y++;
    else {
      const D = y, V = y, Q = /* @__PURE__ */ new Map();
      for (y = V; y <= O; y++) {
        const _e = u[y] = S ? Ke(u[y]) : be(u[y]);
        _e.key != null && Q.set(_e.key, y);
      }
      let G, de = 0;
      const le = O - V + 1;
      let Ce = !1, me = 0;
      const yt = new Array(le);
      for (y = 0; y < le; y++) yt[y] = 0;
      for (y = D; y <= w; y++) {
        const _e = c[y];
        if (de >= le) {
          Pe(_e, _, b, !0);
          continue;
        }
        let Re;
        if (_e.key != null)
          Re = Q.get(_e.key);
        else
          for (G = V; G <= O; G++)
            if (yt[G - V] === 0 && St(_e, u[G])) {
              Re = G;
              break;
            }
        Re === void 0 ? Pe(_e, _, b, !0) : (yt[Re - V] = y + 1, Re >= me ? me = Re : Ce = !0, I(
          _e,
          u[Re],
          d,
          null,
          _,
          b,
          T,
          v,
          S
        ), de++);
      }
      const cn = Ce ? Zl(yt) : ft;
      for (G = cn.length - 1, y = le - 1; y >= 0; y--) {
        const _e = V + y, Re = u[_e], fn = u[_e + 1], un = _e + 1 < P ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          fn.el || kr(fn)
        ) : x;
        yt[y] === 0 ? I(
          null,
          Re,
          d,
          un,
          _,
          b,
          T,
          v,
          S
        ) : Ce && (G < 0 || y !== cn[G] ? Ze(Re, d, un, 2) : G--);
      }
    }
  }, Ze = (c, u, d, x, _ = null) => {
    const { el: b, type: T, transition: v, children: S, shapeFlag: y } = c;
    if (y & 6) {
      Ze(c.component.subTree, u, d, x);
      return;
    }
    if (y & 128) {
      c.suspense.move(u, d, x);
      return;
    }
    if (y & 64) {
      T.move(c, u, d, rt);
      return;
    }
    if (T === Ee) {
      n(b, u, d);
      for (let w = 0; w < S.length; w++)
        Ze(S[w], u, d, x);
      n(c.anchor, u, d);
      return;
    }
    if (T === Et) {
      p(c, u, d);
      return;
    }
    if (x !== 2 && y & 1 && v)
      if (x === 0)
        v.beforeEnter(b), n(b, u, d), pe(() => v.enter(b), _);
      else {
        const { leave: w, delayLeave: O, afterLeave: D } = v, V = () => {
          c.ctx.isUnmounted ? r(b) : n(b, u, d);
        }, Q = () => {
          b._isLeaving && b[hl](
            !0
            /* cancelled */
          ), w(b, () => {
            V(), D && D();
          });
        };
        O ? O(b, V, Q) : Q();
      }
    else
      n(b, u, d);
  }, Pe = (c, u, d, x = !1, _ = !1) => {
    const {
      type: b,
      props: T,
      ref: v,
      children: S,
      dynamicChildren: y,
      shapeFlag: P,
      patchFlag: w,
      dirs: O,
      cacheIndex: D
    } = c;
    if (w === -2 && (_ = !1), v != null && (We(), ht(v, null, d, c, !0), ke()), D != null && (u.renderCache[D] = void 0), P & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const V = P & 1 && O, Q = !dt(c);
    let G;
    if (Q && (G = T && T.onVnodeBeforeUnmount) && Se(G, u, c), P & 6)
      oi(c.component, d, x);
    else {
      if (P & 128) {
        c.suspense.unmount(d, x);
        return;
      }
      V && Ie(c, null, u, "beforeUnmount"), P & 64 ? c.type.remove(
        c,
        u,
        d,
        rt,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Ee || w > 0 && w & 64) ? bt(
        y,
        u,
        d,
        !1,
        !0
      ) : (b === Ee && w & 384 || !_ && P & 16) && bt(S, u, d), x && ln(c);
    }
    (Q && (G = T && T.onVnodeUnmounted) || V) && pe(() => {
      G && Se(G, u, c), V && Ie(c, null, u, "unmounted");
    }, d);
  }, ln = (c) => {
    const { type: u, el: d, anchor: x, transition: _ } = c;
    if (u === Ee) {
      li(d, x);
      return;
    }
    if (u === Et) {
      m(c);
      return;
    }
    const b = () => {
      r(d), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: T, delayLeave: v } = _, S = () => T(d, b);
      v ? v(c.el, b, S) : S();
    } else
      b();
  }, li = (c, u) => {
    let d;
    for (; c !== u; )
      d = C(c), r(c), c = d;
    r(u);
  }, oi = (c, u, d) => {
    const { bum: x, scope: _, job: b, subTree: T, um: v, m: S, a: y } = c;
    En(S), En(y), x && Jt(x), _.stop(), b && (b.flags |= 8, Pe(T, c, u, d)), v && pe(v, u), pe(() => {
      c.isUnmounted = !0;
    }, u);
  }, bt = (c, u, d, x = !1, _ = !1, b = 0) => {
    for (let T = b; T < c.length; T++)
      Pe(c[T], u, d, x, _);
  }, Kt = (c) => {
    if (c.shapeFlag & 6)
      return Kt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = C(c.anchor || c.el), d = u && u[ul];
    return d ? C(d) : u;
  };
  let hs = !1;
  const on = (c, u, d) => {
    let x;
    c == null ? u._vnode && (Pe(u._vnode, null, null, !0), x = u._vnode.component) : I(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      d
    ), u._vnode = c, hs || (hs = !0, gn(x), ts(), hs = !1);
  }, rt = {
    p: I,
    um: Pe,
    m: Ze,
    r: ln,
    mt: xe,
    mc: k,
    pc: M,
    pbc: N,
    n: Kt,
    o: e
  };
  let ds, ps;
  return t && ([ds, ps] = t(
    rt
  )), {
    render: on,
    hydrate: ds,
    createApp: jl(on, ds)
  };
}
function Ts({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ze({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ur(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Br(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (F(n) && F(r))
    for (let i = 0; i < n.length; i++) {
      const l = n[i];
      let o = r[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[i] = Ke(r[i]), o.el = l.el), !s && o.patchFlag !== -2 && Br(l, o)), o.type === nt && (o.patchFlag === -1 && (o = r[i] = Ke(o)), o.el = l.el), o.type === qe && !o.el && (o.el = l.el);
    }
}
function Zl(e) {
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
function Wr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Wr(t);
}
function En(e) {
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
const Gr = (e) => e.__isSuspense;
function qr(e, t) {
  t && t.pendingBranch ? F(e) ? t.effects.push(...e) : t.effects.push(e) : rl(e);
}
const Ee = /* @__PURE__ */ Symbol.for("v-fgt"), nt = /* @__PURE__ */ Symbol.for("v-txt"), qe = /* @__PURE__ */ Symbol.for("v-cmt"), Et = /* @__PURE__ */ Symbol.for("v-stc"), At = [];
let ye = null;
function zl(e = !1) {
  At.push(ye = e ? null : []);
}
function eo() {
  At.pop(), ye = At[At.length - 1] || null;
}
let It = 1;
function An(e, t = !1) {
  It += e, e < 0 && ye && t && (ye.hasOnce = !0);
}
function Jr(e) {
  return e.dynamicChildren = It > 0 ? ye || ft : null, eo(), It > 0 && ye && ye.push(e), e;
}
function lc(e, t, s, n, r, i) {
  return Jr(
    Xr(
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
  return Jr(
    we(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function nn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function St(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Yr = ({ key: e }) => e ?? null, Qt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || /* @__PURE__ */ ce(e) || H(e) ? { i: ve, r: e, k: t, f: !!s } : e : null);
function Xr(e, t = null, s = null, n = 0, r = null, i = e === Ee ? 0 : 1, l = !1, o = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Yr(t),
    ref: t && Qt(t),
    scopeId: xr,
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
  return o ? (rn(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= re(s) ? 8 : 16), It > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ye.push(f), f;
}
const we = so;
function so(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Ol) && (e = qe), nn(e)) {
    const o = mt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && rn(o, s), It > 0 && !i && ye && (o.shapeFlag & 6 ? ye[ye.indexOf(e)] = o : ye.push(o)), o.patchFlag = -2, o;
  }
  if (ao(e) && (e = e.__vccOpts), t) {
    t = no(t);
    let { class: o, style: f } = t;
    o && !re(o) && (t.class = Ws(o)), J(f) && (/* @__PURE__ */ Zs(f) && !F(f) && (f = ie({}, f)), t.style = Bs(f));
  }
  const l = re(e) ? 1 : Gr(e) ? 128 : al(e) ? 64 : J(e) ? 4 : H(e) ? 2 : 0;
  return Xr(
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
  return e ? /* @__PURE__ */ Zs(e) || Nr(e) ? ie({}, e) : e : null;
}
function mt(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: l, children: o, transition: f } = e, h = t ? ro(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Yr(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? F(i) ? i.concat(Qt(t)) : [i, Qt(t)] : Qt(t)
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
    ssContent: e.ssContent && mt(e.ssContent),
    ssFallback: e.ssFallback && mt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && en(
    a,
    f.clone(a)
  ), a;
}
function Qr(e = " ", t = 0) {
  return we(nt, null, e, t);
}
function oc(e, t) {
  const s = we(Et, null, e);
  return s.staticCount = t, s;
}
function cc(e = "", t = !1) {
  return t ? (zl(), to(qe, null, e)) : we(qe, null, e);
}
function be(e) {
  return e == null || typeof e == "boolean" ? we(qe) : F(e) ? we(
    Ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : nn(e) ? Ke(e) : we(nt, null, String(e));
}
function Ke(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : mt(e);
}
function rn(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (F(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), rn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Nr(t) ? t._ctx = ve : r === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else H(t) ? (t = { default: t, _ctx: ve }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Qr(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function ro(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Ws([t.class, n.class]));
      else if (r === "style")
        t.style = Bs([t.style, n.style]);
      else if (Nt(r)) {
        const i = t[r], l = n[r];
        l && i !== l && !(F(i) && i.includes(l)) && (t[r] = i ? [].concat(i, l) : l);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Se(e, t, s, n = null) {
  Le(e, t, 7, [
    s,
    n
  ]);
}
const io = Or();
let lo = 0;
function Zr(e, t, s) {
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
    scope: new Ci(
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
    propsOptions: jr(n, r),
    emitsOptions: Pr(n, r),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = $l.bind(null, i), e.ce && e.ce(i), i;
}
let ae = null;
const oo = () => ae || ve;
let rs, Hs;
{
  const e = ls(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((l) => l(i)) : r[0](i);
    };
  };
  rs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ae = s
  ), Hs = t(
    "__VUE_SSR_SETTERS__",
    (s) => Dt = s
  );
}
const $t = (e) => {
  const t = ae;
  return rs(e), e.scope.on(), () => {
    e.scope.off(), rs(t);
  };
}, Mn = () => {
  ae && ae.scope.off(), rs(null);
};
function zr(e) {
  return e.vnode.shapeFlag & 4;
}
let Dt = !1;
function ei(e, t = !1, s = !1) {
  t && Hs(t);
  const { props: n, children: r } = e.vnode, i = zr(e);
  Wl(e, n, i, t), Jl(e, r, s || t);
  const l = i ? co(e, t) : void 0;
  return t && Hs(!1), l;
}
function co(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Pl);
  const { setup: n } = s;
  if (n) {
    We();
    const r = e.setupContext = n.length > 1 ? uo(e) : null, i = $t(e), l = Lt(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = qn(l);
    if (ke(), i(), (o || e.sp) && !dt(e) && Tr(e), o) {
      if (l.then(Mn, Mn), t)
        return l.then((f) => {
          On(e, f);
        }).catch((f) => {
          cs(f, e, 0);
        });
      e.asyncDep = l;
    } else
      On(e, l);
  } else
    ti(e);
}
function On(e, t, s) {
  H(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : J(t) && (e.setupState = mr(t)), ti(e);
}
function ti(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || He);
  {
    const r = $t(e);
    We();
    try {
      Rl(e);
    } finally {
      ke(), r();
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
function as(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(mr(Gi(e.exposed)), {
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
function ao(e) {
  return H(e) && "__vccOpts" in e;
}
const ho = (e, t) => /* @__PURE__ */ Zi(e, t, Dt), po = "3.5.30", go = {
  createComponentInstance: Zr,
  setupComponent: ei,
  renderComponentRoot: Xt,
  setCurrentRenderingInstance: Ft,
  isVNode: nn,
  normalizeVNode: be
}, fc = go;
let js;
const Pn = typeof window < "u" && window.trustedTypes;
if (Pn)
  try {
    js = /* @__PURE__ */ Pn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const si = js ? (e) => js.createHTML(e) : (e) => e, mo = "http://www.w3.org/2000/svg", _o = "http://www.w3.org/1998/Math/MathML", Ve = typeof document < "u" ? document : null, Rn = Ve && /* @__PURE__ */ Ve.createElement("template"), bo = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Ve.createElementNS(mo, e) : t === "mathml" ? Ve.createElementNS(_o, e) : s ? Ve.createElement(e, { is: s }) : Ve.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
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
  insertStaticContent(e, t, s, n, r, i) {
    const l = s ? s.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Rn.innerHTML = si(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Rn.content;
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
}, yo = /* @__PURE__ */ Symbol("_vtc");
function xo(e, t, s) {
  const n = e[yo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Fn = /* @__PURE__ */ Symbol("_vod"), So = /* @__PURE__ */ Symbol("_vsh"), vo = /* @__PURE__ */ Symbol(""), To = /(?:^|;)\s*display\s*:/;
function wo(e, t, s) {
  const n = e.style, r = re(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (re(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          s[o] == null && Zt(n, o, "");
        }
      else
        for (const l in t)
          s[l] == null && Zt(n, l, "");
    for (const l in s)
      l === "display" && (i = !0), Zt(n, l, s[l]);
  } else if (r) {
    if (t !== s) {
      const l = n[vo];
      l && (s += ";" + l), n.cssText = s, i = To.test(s);
    }
  } else t && e.removeAttribute("style");
  Fn in e && (e[Fn] = i ? n.display : "", e[So] && (n.display = "none"));
}
const In = /\s*!important$/;
function Zt(e, t, s) {
  if (F(s))
    s.forEach((n) => Zt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Co(e, t);
    In.test(s) ? e.setProperty(
      Je(n),
      s.replace(In, ""),
      "important"
    ) : e[n] = s;
  }
}
const Dn = ["Webkit", "Moz", "ms"], ws = {};
function Co(e, t) {
  const s = ws[t];
  if (s)
    return s;
  let n = Ae(t);
  if (n !== "filter" && n in e)
    return ws[t] = n;
  n = Xn(n);
  for (let r = 0; r < Dn.length; r++) {
    const i = Dn[r] + n;
    if (i in e)
      return ws[t] = i;
  }
  return t;
}
const Nn = "http://www.w3.org/1999/xlink";
function Hn(e, t, s, n, r, i = bi(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Nn, t.slice(6, t.length)) : e.setAttributeNS(Nn, t, s) : s == null || i && !zn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : je(s) ? String(s) : s
  );
}
function jn(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? si(s) : s);
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
    o === "boolean" ? s = zn(s) : s == null && o === "string" ? (s = "", l = !0) : o === "number" && (s = 0, l = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  l && e.removeAttribute(r || t);
}
function ct(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Eo(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Ln = /* @__PURE__ */ Symbol("_vei");
function Ao(e, t, s, n, r = null) {
  const i = e[Ln] || (e[Ln] = {}), l = i[t];
  if (n && l)
    l.value = n;
  else {
    const [o, f] = Mo(t);
    if (n) {
      const h = i[t] = Ro(
        n,
        r
      );
      ct(e, o, h, f);
    } else l && (Eo(e, o, l, f), i[t] = void 0);
  }
}
const $n = /(?:Once|Passive|Capture)$/;
function Mo(e) {
  let t;
  if ($n.test(e)) {
    t = {};
    let n;
    for (; n = e.match($n); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Je(e.slice(2)), t];
}
let Cs = 0;
const Oo = /* @__PURE__ */ Promise.resolve(), Po = () => Cs || (Oo.then(() => Cs = 0), Cs = Date.now());
function Ro(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Le(
      Fo(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Po(), s;
}
function Fo(e, t) {
  if (F(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const Vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Io = (e, t, s, n, r, i) => {
  const l = r === "svg";
  t === "class" ? xo(e, n, l) : t === "style" ? wo(e, s, n) : Nt(t) ? Ls(t) || Ao(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Do(e, t, n, l)) ? (jn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Hn(e, t, n, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (No(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !re(n))) ? jn(e, Ae(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Hn(e, t, n, l));
};
function Do(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vn(t) && H(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Vn(t) && re(s) ? !1 : t in e;
}
function No(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Ae(t);
  return Array.isArray(s) ? s.some((r) => Ae(r) === n) : Object.keys(s).some((r) => Ae(r) === n);
}
const Kn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return F(t) ? (s) => Jt(t, s) : t;
};
function Ho(e) {
  e.target.composing = !0;
}
function Un(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Es = /* @__PURE__ */ Symbol("_assign");
function Bn(e, t, s) {
  return t && (e = e.trim()), s && (e = Us(e)), e;
}
const jo = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, r) {
    e[Es] = Kn(r);
    const i = n || r.props && r.props.type === "number";
    ct(e, t ? "change" : "input", (l) => {
      l.target.composing || e[Es](Bn(e.value, s, i));
    }), (s || i) && ct(e, "change", () => {
      e.value = Bn(e.value, s, i);
    }), t || (ct(e, "compositionstart", Ho), ct(e, "compositionend", Un), ct(e, "change", Un));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: r, number: i } }, l) {
    if (e[Es] = Kn(l), e.composing) return;
    const o = (i || e.type === "number") && !/^0\d/.test(e.value) ? Us(e.value) : e.value, f = t ?? "";
    o !== f && (document.activeElement === e && e.type !== "range" && (n && t === s || r && e.value.trim() === f) || (e.value = f));
  }
}, Lo = {}, $o = {};
function Vo() {
  jo.getSSRProps = ({ value: e }) => ({ value: e }), $o.getSSRProps = ({ value: e }, t) => {
    if (t.props && jt(t.props.value, e))
      return { checked: !0 };
  }, Lo.getSSRProps = ({ value: e }, t) => {
    if (F(e)) {
      if (t.props && Ti(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (Vs(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const Ko = ["ctrl", "shift", "alt", "meta"], Uo = {
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
  exact: (e, t) => Ko.some((s) => e[`${s}Key`] && !t.includes(s))
}, uc = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = ((r, ...i) => {
    for (let l = 0; l < t.length; l++) {
      const o = Uo[t[l]];
      if (o && o(r, t)) return;
    }
    return e(r, ...i);
  }));
}, Bo = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ac = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = ((r) => {
    if (!("key" in r))
      return;
    const i = Je(r.key);
    if (t.some(
      (l) => l === i || Bo[l] === i
    ))
      return e(r);
  }));
}, ni = /* @__PURE__ */ ie({ patchProp: Io }, bo);
let Mt, Wn = !1;
function Wo() {
  return Mt || (Mt = Xl(ni));
}
function ko() {
  return Mt = Wn ? Mt : Ql(ni), Wn = !0, Mt;
}
const hc = ((...e) => {
  const t = Wo().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = ii(n);
    if (!r) return;
    const i = t._component;
    !H(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const l = s(r, !1, ri(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
}), dc = ((...e) => {
  const t = ko().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = ii(n);
    if (r)
      return s(r, !0, ri(r));
  }, t;
});
function ri(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ii(e) {
  return re(e) ? document.querySelector(e) : e;
}
let kn = !1;
const pc = () => {
  kn || (kn = !0, Vo());
};
export {
  ec as A,
  zo as B,
  qe as C,
  Jo as D,
  F as E,
  Ee as F,
  Nt as G,
  _t as H,
  Ws as I,
  Bs as J,
  Go as K,
  Zo as L,
  qo as M,
  He as N,
  Qo as O,
  Yo as P,
  zn as Q,
  Xo as R,
  Et as S,
  nt as T,
  J as U,
  tc as V,
  pc as W,
  dc as X,
  cc as a,
  Sl as b,
  lc as c,
  rc as d,
  Er as e,
  Xr as f,
  ac as g,
  oc as h,
  Yt as i,
  ic as j,
  we as k,
  uc as l,
  ro as m,
  to as n,
  zl as o,
  hc as p,
  ls as q,
  sc as r,
  ol as s,
  wi as t,
  fc as u,
  jo as v,
  nc as w,
  qn as x,
  H as y,
  re as z
};
