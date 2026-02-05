// @__NO_SIDE_EFFECTS__
function bt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const Y = {}, ct = [], Ie = () => {
}, qn = () => !1, $t = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), qs = (e) => e.startsWith("onUpdate:"), fe = Object.assign, Js = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, hr = Object.prototype.hasOwnProperty, W = (e, t) => hr.call(e, t), P = Array.isArray, ft = (e) => Ut(e) === "[object Map]", nt = (e) => Ut(e) === "[object Set]", mn = (e) => Ut(e) === "[object Date]", H = (e) => typeof e == "function", te = (e) => typeof e == "string", De = (e) => typeof e == "symbol", X = (e) => e !== null && typeof e == "object", Jn = (e) => (X(e) || H(e)) && H(e.then) && H(e.catch), Yn = Object.prototype.toString, Ut = (e) => Yn.call(e), dr = (e) => Ut(e).slice(8, -1), Xn = (e) => Ut(e) === "[object Object]", Ys = (e) => te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ut = /* @__PURE__ */ bt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), hs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, pr = /-\w/g, Xe = hs(
  (e) => e.replace(pr, (t) => t.slice(1).toUpperCase())
), gr = /\B([A-Z])/g, Ze = hs(
  (e) => e.replace(gr, "-$1").toLowerCase()
), Zn = hs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Cs = hs(
  (e) => e ? `on${Zn(e)}` : ""
), Je = (e, t) => !Object.is(e, t), Qt = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Qn = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, zn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let _n;
const ds = () => _n || (_n = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ps(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = te(n) ? yr(n) : ps(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (te(e) || X(e))
    return e;
}
const mr = /;(?![^(]*\))/g, _r = /:([^]+)/, br = /\/\*[^]*?\*\//g;
function yr(e) {
  const t = {};
  return e.replace(br, "").split(mr).forEach((s) => {
    if (s) {
      const n = s.split(_r);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Wo(e) {
  if (!e) return "";
  if (te(e)) return e;
  let t = "";
  for (const s in e) {
    const n = e[s];
    if (te(n) || typeof n == "number") {
      const i = s.startsWith("--") ? s : Ze(s);
      t += `${i}:${n};`;
    }
  }
  return t;
}
function gs(e) {
  let t = "";
  if (te(e))
    t = e;
  else if (P(e))
    for (let s = 0; s < e.length; s++) {
      const n = gs(e[s]);
      n && (t += n + " ");
    }
  else if (X(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
function ko(e) {
  if (!e) return null;
  let { class: t, style: s } = e;
  return t && !te(t) && (e.class = gs(t)), s && (e.style = ps(s)), e;
}
const xr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Sr = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Go = /* @__PURE__ */ bt(xr), qo = /* @__PURE__ */ bt(Sr), ei = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Tr = /* @__PURE__ */ bt(ei), Jo = /* @__PURE__ */ bt(
  ei + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function ti(e) {
  return !!e || e === "";
}
const wr = /[>/="'\u0009\u000a\u000c\u0020]/, Es = {};
function Yo(e) {
  if (Es.hasOwnProperty(e))
    return Es[e];
  const t = wr.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), Es[e] = !t;
}
const Xo = {
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
const vr = /["'&<>]/;
function Qo(e) {
  const t = "" + e, s = vr.exec(t);
  if (!s)
    return t;
  let n = "", i, r, l = 0;
  for (r = s.index; r < t.length; r++) {
    switch (t.charCodeAt(r)) {
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
      default:
        continue;
    }
    l !== r && (n += t.slice(l, r)), l = r + 1, n += i;
  }
  return l !== r ? n + t.slice(l, r) : n;
}
const Cr = /^-?>|<!--|-->|--!>|<!-$/g;
function zo(e) {
  return e.replace(Cr, "");
}
function Er(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = yt(e[n], t[n]);
  return s;
}
function yt(e, t) {
  if (e === t) return !0;
  let s = mn(e), n = mn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = De(e), n = De(t), s || n)
    return e === t;
  if (s = P(e), n = P(t), s || n)
    return s && n ? Er(e, t) : !1;
  if (s = X(e), n = X(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const l in e) {
      const o = e.hasOwnProperty(l), f = t.hasOwnProperty(l);
      if (o && !f || !o && f || !yt(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ms(e, t) {
  return e.findIndex((s) => yt(s, t));
}
const si = (e) => !!(e && e.__v_isRef === !0), Ar = (e) => te(e) ? e : e == null ? "" : P(e) || X(e) && (e.toString === Yn || !H(e.toString)) ? si(e) ? Ar(e.value) : JSON.stringify(e, ni, 2) : String(e), ni = (e, t) => si(t) ? ni(e, t.value) : ft(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[As(n, r) + " =>"] = i, s),
    {}
  )
} : nt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => As(s))
} : De(t) ? As(t) : X(t) && !P(t) && !Xn(t) ? String(t) : t, As = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    De(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
function ec(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let ge;
class Mr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ge, !t && ge && (this.index = (ge.scopes || (ge.scopes = [])).push(
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
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Rr() {
  return ge;
}
let Q;
const Ms = /* @__PURE__ */ new WeakSet();
class ii {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ge && ge.active && ge.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || li(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, bn(this), oi(this);
    const t = Q, s = Ae;
    Q = this, Ae = !0;
    try {
      return this.fn();
    } finally {
      ci(this), Q = t, Ae = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Qs(t);
      this.deps = this.depsTail = void 0, bn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ms.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ns(this) && this.run();
  }
  get dirty() {
    return Ns(this);
  }
}
let ri = 0, Et, At;
function li(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = At, At = e;
    return;
  }
  e.next = Et, Et = e;
}
function Xs() {
  ri++;
}
function Zs() {
  if (--ri > 0)
    return;
  if (At) {
    let t = At;
    for (At = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Et; ) {
    let t = Et;
    for (Et = void 0; t; ) {
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
function oi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ci(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), Qs(n), Or(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function Ns(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (fi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function fi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ft) || (e.globalVersion = Ft, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ns(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = Q, n = Ae;
  Q = e, Ae = !0;
  try {
    oi(e);
    const i = e.fn(e._value);
    (t.version === 0 || Je(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Q = s, Ae = n, ci(e), e.flags &= -3;
  }
}
function Qs(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      Qs(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Or(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Ae = !0;
const ui = [];
function $e() {
  ui.push(Ae), Ae = !1;
}
function Ue() {
  const e = ui.pop();
  Ae = e === void 0 ? !0 : e;
}
function bn(e) {
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
let Ft = 0;
class Pr {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class zs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Q || !Ae || Q === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Q)
      s = this.activeLink = new Pr(Q, this), Q.deps ? (s.prevDep = Q.depsTail, Q.depsTail.nextDep = s, Q.depsTail = s) : Q.deps = Q.depsTail = s, ai(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = Q.depsTail, s.nextDep = void 0, Q.depsTail.nextDep = s, Q.depsTail = s, Q.deps === s && (Q.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Ft++, this.notify(t);
  }
  notify(t) {
    Xs();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Zs();
    }
  }
}
function ai(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        ai(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Ls = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ Symbol(
  ""
), js = /* @__PURE__ */ Symbol(
  ""
), It = /* @__PURE__ */ Symbol(
  ""
);
function le(e, t, s) {
  if (Ae && Q) {
    let n = Ls.get(e);
    n || Ls.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new zs()), i.map = n, i.key = s), i.track();
  }
}
function je(e, t, s, n, i, r) {
  const l = Ls.get(e);
  if (!l) {
    Ft++;
    return;
  }
  const o = (f) => {
    f && f.trigger();
  };
  if (Xs(), t === "clear")
    l.forEach(o);
  else {
    const f = P(e), d = f && Ys(s);
    if (f && s === "length") {
      const a = Number(n);
      l.forEach((m, C) => {
        (C === "length" || C === It || !De(C) && C >= a) && o(m);
      });
    } else
      switch ((s !== void 0 || l.has(void 0)) && o(l.get(s)), d && o(l.get(It)), t) {
        case "add":
          f ? d && o(l.get("length")) : (o(l.get(tt)), ft(e) && o(l.get(js)));
          break;
        case "delete":
          f || (o(l.get(tt)), ft(e) && o(l.get(js)));
          break;
        case "set":
          ft(e) && o(l.get(tt));
          break;
      }
  }
  Zs();
}
function rt(e) {
  const t = B(e);
  return t === e ? t : (le(t, "iterate", It), Ce(e) ? t : t.map(Me));
}
function _s(e) {
  return le(e = B(e), "iterate", It), e;
}
function ke(e, t) {
  return Ke(e) ? Ye(e) ? mt(Me(t)) : mt(t) : Me(t);
}
const Fr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rs(this, Symbol.iterator, (e) => ke(this, e));
  },
  concat(...e) {
    return rt(this).concat(
      ...e.map((t) => P(t) ? rt(t) : t)
    );
  },
  entries() {
    return Rs(this, "entries", (e) => (e[1] = ke(this, e[1]), e));
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
      (s) => s.map((n) => ke(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ne(
      this,
      "find",
      e,
      t,
      (s) => ke(this, s),
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
      (s) => ke(this, s),
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
    return Os(this, "includes", e);
  },
  indexOf(...e) {
    return Os(this, "indexOf", e);
  },
  join(e) {
    return rt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Os(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ne(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Tt(this, "pop");
  },
  push(...e) {
    return Tt(this, "push", e);
  },
  reduce(e, ...t) {
    return yn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return yn(this, "reduceRight", e, t);
  },
  shift() {
    return Tt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ne(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Tt(this, "splice", e);
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
    return Tt(this, "unshift", e);
  },
  values() {
    return Rs(this, "values", (e) => ke(this, e));
  }
};
function Rs(e, t, s) {
  const n = _s(e), i = n[t]();
  return n !== e && !Ce(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const Ir = Array.prototype;
function Ne(e, t, s, n, i, r) {
  const l = _s(e), o = l !== e && !Ce(e), f = l[t];
  if (f !== Ir[t]) {
    const m = f.apply(e, r);
    return o ? Me(m) : m;
  }
  let d = s;
  l !== e && (o ? d = function(m, C) {
    return s.call(this, ke(e, m), C, e);
  } : s.length > 2 && (d = function(m, C) {
    return s.call(this, m, C, e);
  }));
  const a = f.call(l, d, n);
  return o && i ? i(a) : a;
}
function yn(e, t, s, n) {
  const i = _s(e);
  let r = s;
  return i !== e && (Ce(e) ? s.length > 3 && (r = function(l, o, f) {
    return s.call(this, l, o, f, e);
  }) : r = function(l, o, f) {
    return s.call(this, l, ke(e, o), f, e);
  }), i[t](r, ...n);
}
function Os(e, t, s) {
  const n = B(e);
  le(n, "iterate", It);
  const i = n[t](...s);
  return (i === -1 || i === !1) && nn(s[0]) ? (s[0] = B(s[0]), n[t](...s)) : i;
}
function Tt(e, t, s = []) {
  $e(), Xs();
  const n = B(e)[t].apply(e, s);
  return Zs(), Ue(), n;
}
const Dr = /* @__PURE__ */ bt("__proto__,__v_isRef,__isVue"), hi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(De)
);
function Hr(e) {
  De(e) || (e = String(e));
  const t = B(this);
  return le(t, "has", e), t.hasOwnProperty(e);
}
class di {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (s === "__v_isReactive")
      return !i;
    if (s === "__v_isReadonly")
      return i;
    if (s === "__v_isShallow")
      return r;
    if (s === "__v_raw")
      return n === (i ? r ? kr : _i : r ? mi : gi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const l = P(t);
    if (!i) {
      let f;
      if (l && (f = Fr[s]))
        return f;
      if (s === "hasOwnProperty")
        return Hr;
    }
    const o = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ce(t) ? t : n
    );
    if ((De(s) ? hi.has(s) : Dr(s)) || (i || le(t, "get", s), r))
      return o;
    if (ce(o)) {
      const f = l && Ys(s) ? o : o.value;
      return i && X(f) ? $s(f) : f;
    }
    return X(o) ? i ? $s(o) : tn(o) : o;
  }
}
class pi extends di {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const l = P(t) && Ys(s);
    if (!this._isShallow) {
      const d = Ke(r);
      if (!Ce(n) && !Ke(n) && (r = B(r), n = B(n)), !l && ce(r) && !ce(n))
        return d || (r.value = n), !0;
    }
    const o = l ? Number(s) < t.length : W(t, s), f = Reflect.set(
      t,
      s,
      n,
      ce(t) ? t : i
    );
    return t === B(i) && (o ? Je(n, r) && je(t, "set", s, n) : je(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = W(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && je(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!De(s) || !hi.has(s)) && le(t, "has", s), n;
  }
  ownKeys(t) {
    return le(
      t,
      "iterate",
      P(t) ? "length" : tt
    ), Reflect.ownKeys(t);
  }
}
class Nr extends di {
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
const Lr = /* @__PURE__ */ new pi(), jr = /* @__PURE__ */ new Nr(), Vr = /* @__PURE__ */ new pi(!0);
const Vs = (e) => e, Gt = (e) => Reflect.getPrototypeOf(e);
function $r(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = B(i), l = ft(r), o = e === "entries" || e === Symbol.iterator && l, f = e === "keys" && l, d = i[e](...n), a = s ? Vs : t ? mt : Me;
    return !t && le(
      r,
      "iterate",
      f ? js : tt
    ), {
      // iterator protocol
      next() {
        const { value: m, done: C } = d.next();
        return C ? { value: m, done: C } : {
          value: o ? [a(m[0]), a(m[1])] : a(m),
          done: C
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function qt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ur(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, l = B(r), o = B(i);
      e || (Je(i, o) && le(l, "get", i), le(l, "get", o));
      const { has: f } = Gt(l), d = t ? Vs : e ? mt : Me;
      if (f.call(l, i))
        return d(r.get(i));
      if (f.call(l, o))
        return d(r.get(o));
      r !== l && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && le(B(i), "iterate", tt), i.size;
    },
    has(i) {
      const r = this.__v_raw, l = B(r), o = B(i);
      return e || (Je(i, o) && le(l, "has", i), le(l, "has", o)), i === o ? r.has(i) : r.has(i) || r.has(o);
    },
    forEach(i, r) {
      const l = this, o = l.__v_raw, f = B(o), d = t ? Vs : e ? mt : Me;
      return !e && le(f, "iterate", tt), o.forEach((a, m) => i.call(r, d(a), d(m), l));
    }
  };
  return fe(
    s,
    e ? {
      add: qt("add"),
      set: qt("set"),
      delete: qt("delete"),
      clear: qt("clear")
    } : {
      add(i) {
        !t && !Ce(i) && !Ke(i) && (i = B(i));
        const r = B(this);
        return Gt(r).has.call(r, i) || (r.add(i), je(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !Ce(r) && !Ke(r) && (r = B(r));
        const l = B(this), { has: o, get: f } = Gt(l);
        let d = o.call(l, i);
        d || (i = B(i), d = o.call(l, i));
        const a = f.call(l, i);
        return l.set(i, r), d ? Je(r, a) && je(l, "set", i, r) : je(l, "add", i, r), this;
      },
      delete(i) {
        const r = B(this), { has: l, get: o } = Gt(r);
        let f = l.call(r, i);
        f || (i = B(i), f = l.call(r, i)), o && o.call(r, i);
        const d = r.delete(i);
        return f && je(r, "delete", i, void 0), d;
      },
      clear() {
        const i = B(this), r = i.size !== 0, l = i.clear();
        return r && je(
          i,
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
  ].forEach((i) => {
    s[i] = $r(i, e, t);
  }), s;
}
function en(e, t) {
  const s = Ur(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    W(s, i) && i in n ? s : n,
    i,
    r
  );
}
const Kr = {
  get: /* @__PURE__ */ en(!1, !1)
}, Br = {
  get: /* @__PURE__ */ en(!1, !0)
}, Wr = {
  get: /* @__PURE__ */ en(!0, !1)
};
const gi = /* @__PURE__ */ new WeakMap(), mi = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap();
function Gr(e) {
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
function qr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Gr(dr(e));
}
function tn(e) {
  return Ke(e) ? e : sn(
    e,
    !1,
    Lr,
    Kr,
    gi
  );
}
function Jr(e) {
  return sn(
    e,
    !1,
    Vr,
    Br,
    mi
  );
}
function $s(e) {
  return sn(
    e,
    !0,
    jr,
    Wr,
    _i
  );
}
function sn(e, t, s, n, i) {
  if (!X(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = qr(e);
  if (r === 0)
    return e;
  const l = i.get(e);
  if (l)
    return l;
  const o = new Proxy(
    e,
    r === 2 ? n : s
  );
  return i.set(e, o), o;
}
function Ye(e) {
  return Ke(e) ? Ye(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ke(e) {
  return !!(e && e.__v_isReadonly);
}
function Ce(e) {
  return !!(e && e.__v_isShallow);
}
function nn(e) {
  return e ? !!e.__v_raw : !1;
}
function B(e) {
  const t = e && e.__v_raw;
  return t ? B(t) : e;
}
function Yr(e) {
  return !W(e, "__v_skip") && Object.isExtensible(e) && Qn(e, "__v_skip", !0), e;
}
const Me = (e) => X(e) ? tn(e) : e, mt = (e) => X(e) ? $s(e) : e;
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function tc(e) {
  return Xr(e, !1);
}
function Xr(e, t) {
  return ce(e) ? e : new Zr(e, t);
}
class Zr {
  constructor(t, s) {
    this.dep = new zs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : B(t), this._value = s ? t : Me(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || Ce(t) || Ke(t);
    t = n ? t : B(t), Je(t, s) && (this._rawValue = t, this._value = n ? t : Me(t), this.dep.trigger());
  }
}
function Qr(e) {
  return ce(e) ? e.value : e;
}
const zr = {
  get: (e, t, s) => t === "__v_raw" ? e : Qr(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return ce(i) && !ce(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function bi(e) {
  return Ye(e) ? e : new Proxy(e, zr);
}
class el {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new zs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ft - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Q !== this)
      return li(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return fi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function tl(e, t, s = !1) {
  let n, i;
  return H(e) ? n = e : (n = e.get, i = e.set), new el(n, i, s);
}
const Jt = {}, ns = /* @__PURE__ */ new WeakMap();
let et;
function sl(e, t = !1, s = et) {
  if (s) {
    let n = ns.get(s);
    n || ns.set(s, n = []), n.push(e);
  }
}
function nl(e, t, s = Y) {
  const { immediate: n, deep: i, once: r, scheduler: l, augmentJob: o, call: f } = s, d = (g) => i ? g : Ce(g) || i === !1 || i === 0 ? Ve(g, 1) : Ve(g);
  let a, m, C, E, N = !1, j = !1;
  if (ce(e) ? (m = () => e.value, N = Ce(e)) : Ye(e) ? (m = () => d(e), N = !0) : P(e) ? (j = !0, N = e.some((g) => Ye(g) || Ce(g)), m = () => e.map((g) => {
    if (ce(g))
      return g.value;
    if (Ye(g))
      return d(g);
    if (H(g))
      return f ? f(g, 2) : g();
  })) : H(e) ? t ? m = f ? () => f(e, 2) : e : m = () => {
    if (C) {
      $e();
      try {
        C();
      } finally {
        Ue();
      }
    }
    const g = et;
    et = a;
    try {
      return f ? f(e, 3, [E]) : e(E);
    } finally {
      et = g;
    }
  } : m = Ie, t && i) {
    const g = m, A = i === !0 ? 1 / 0 : i;
    m = () => Ve(g(), A);
  }
  const ie = Rr(), $ = () => {
    a.stop(), ie && ie.active && Js(ie.effects, a);
  };
  if (r && t) {
    const g = t;
    t = (...A) => {
      g(...A), $();
    };
  }
  let k = j ? new Array(e.length).fill(Jt) : Jt;
  const p = (g) => {
    if (!(!(a.flags & 1) || !a.dirty && !g))
      if (t) {
        const A = a.run();
        if (i || N || (j ? A.some((K, L) => Je(K, k[L])) : Je(A, k))) {
          C && C();
          const K = et;
          et = a;
          try {
            const L = [
              A,
              // pass undefined as the old value when it's changed for the first time
              k === Jt ? void 0 : j && k[0] === Jt ? [] : k,
              E
            ];
            k = A, f ? f(t, 3, L) : (
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
  return o && o(p), a = new ii(m), a.scheduler = l ? () => l(p, !1) : p, E = (g) => sl(g, !1, a), C = a.onStop = () => {
    const g = ns.get(a);
    if (g) {
      if (f)
        f(g, 4);
      else
        for (const A of g) A();
      ns.delete(a);
    }
  }, t ? n ? p(!0) : k = a.run() : l ? l(p.bind(null, !0), !0) : a.run(), $.pause = a.pause.bind(a), $.resume = a.resume.bind(a), $.stop = $, $;
}
function Ve(e, t = 1 / 0, s) {
  if (t <= 0 || !X(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, ce(e))
    Ve(e.value, t, s);
  else if (P(e))
    for (let n = 0; n < e.length; n++)
      Ve(e[n], t, s);
  else if (nt(e) || ft(e))
    e.forEach((n) => {
      Ve(n, t, s);
    });
  else if (Xn(e)) {
    for (const n in e)
      Ve(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ve(e[n], t, s);
  }
  return e;
}
function Kt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    bs(i, t, s);
  }
}
function He(e, t, s, n) {
  if (H(e)) {
    const i = Kt(e, t, s, n);
    return i && Jn(i) && i.catch((r) => {
      bs(r, t, s);
    }), i;
  }
  if (P(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(He(e[r], t, s, n));
    return i;
  }
}
function bs(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: l } = t && t.appContext.config || Y;
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
    if (r) {
      $e(), Kt(r, null, 10, [
        e,
        f,
        d
      ]), Ue();
      return;
    }
  }
  il(e, s, i, n, l);
}
function il(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ae = [];
let Pe = -1;
const at = [];
let Ge = null, ot = 0;
const yi = /* @__PURE__ */ Promise.resolve();
let is = null;
function xi(e) {
  const t = is || yi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rl(e) {
  let t = Pe + 1, s = ae.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = ae[n], r = Dt(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function rn(e) {
  if (!(e.flags & 1)) {
    const t = Dt(e), s = ae[ae.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Dt(s) ? ae.push(e) : ae.splice(rl(t), 0, e), e.flags |= 1, Si();
  }
}
function Si() {
  is || (is = yi.then(Ti));
}
function ll(e) {
  P(e) ? at.push(...e) : Ge && e.id === -1 ? Ge.splice(ot + 1, 0, e) : e.flags & 1 || (at.push(e), e.flags |= 1), Si();
}
function xn(e, t, s = Pe + 1) {
  for (; s < ae.length; s++) {
    const n = ae[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ae.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function rs(e) {
  if (at.length) {
    const t = [...new Set(at)].sort(
      (s, n) => Dt(s) - Dt(n)
    );
    if (at.length = 0, Ge) {
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
const Dt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ti(e) {
  try {
    for (Pe = 0; Pe < ae.length; Pe++) {
      const t = ae[Pe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Kt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Pe < ae.length; Pe++) {
      const t = ae[Pe];
      t && (t.flags &= -2);
    }
    Pe = -1, ae.length = 0, rs(), is = null, (ae.length || at.length) && Ti();
  }
}
let ve = null, wi = null;
function Ht(e) {
  const t = ve;
  return ve = e, wi = e && e.type.__scopeId || null, t;
}
function ol(e, t = ve, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && cs(-1);
    const r = Ht(t);
    let l;
    try {
      l = e(...i);
    } finally {
      Ht(r), n._d && cs(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function sc(e, t) {
  if (ve === null)
    return e;
  const s = Ss(ve), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, l, o, f = Y] = t[i];
    r && (H(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ve(l), n.push({
      dir: r,
      instance: s,
      value: l,
      oldValue: void 0,
      arg: o,
      modifiers: f
    }));
  }
  return e;
}
function Fe(e, t, s, n) {
  const i = e.dirs, r = t && t.dirs;
  for (let l = 0; l < i.length; l++) {
    const o = i[l];
    r && (o.oldValue = r[l].value);
    let f = o.dir[n];
    f && ($e(), He(f, s, 8, [
      e.el,
      o,
      e,
      t
    ]), Ue());
  }
}
function cl(e, t) {
  if (he) {
    let s = he.provides;
    const n = he.parent && he.parent.provides;
    n === s && (s = he.provides = Object.create(n)), s[e] = t;
  }
}
function zt(e, t, s = !1) {
  const n = fo();
  if (n || pt) {
    let i = pt ? pt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && H(t) ? t.call(n && n.proxy) : t;
  }
}
const fl = /* @__PURE__ */ Symbol.for("v-scx"), ul = () => zt(fl);
function Ps(e, t, s) {
  return vi(e, t, s);
}
function vi(e, t, s = Y) {
  const { immediate: n, deep: i, flush: r, once: l } = s, o = fe({}, s), f = t && n || !t && r !== "post";
  let d;
  if (jt) {
    if (r === "sync") {
      const E = ul();
      d = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!f) {
      const E = () => {
      };
      return E.stop = Ie, E.resume = Ie, E.pause = Ie, E;
    }
  }
  const a = he;
  o.call = (E, N, j) => He(E, a, N, j);
  let m = !1;
  r === "post" ? o.scheduler = (E) => {
    be(E, a && a.suspense);
  } : r !== "sync" && (m = !0, o.scheduler = (E, N) => {
    N ? E() : rn(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), m && (E.flags |= 2, a && (E.id = a.uid, E.i = a));
  };
  const C = nl(e, t, o);
  return jt && (d ? d.push(C) : f && C()), C;
}
function al(e, t, s) {
  const n = this.proxy, i = te(e) ? e.includes(".") ? Ci(n, e) : () => n[e] : e.bind(n, n);
  let r;
  H(t) ? r = t : (r = t.handler, s = t);
  const l = Bt(this), o = vi(i, r.bind(n), s);
  return l(), o;
}
function Ci(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const hl = /* @__PURE__ */ Symbol("_vte"), dl = (e) => e.__isTeleport, pl = /* @__PURE__ */ Symbol("_leaveCb");
function ln(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ln(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function nc(e, t) {
  return H(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ei(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ls = /* @__PURE__ */ new WeakMap();
function ht(e, t, s, n, i = !1) {
  if (P(e)) {
    e.forEach(
      (N, j) => ht(
        N,
        t && (P(t) ? t[j] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (dt(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && ht(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? Ss(n.component) : n.el, l = i ? null : r, { i: o, r: f } = e, d = t && t.r, a = o.refs === Y ? o.refs = {} : o.refs, m = o.setupState, C = B(m), E = m === Y ? qn : (N) => W(C, N);
  if (d != null && d !== f) {
    if (Sn(t), te(d))
      a[d] = null, E(d) && (m[d] = null);
    else if (ce(d)) {
      d.value = null;
      const N = t;
      N.k && (a[N.k] = null);
    }
  }
  if (H(f))
    Kt(f, o, 12, [l, a]);
  else {
    const N = te(f), j = ce(f);
    if (N || j) {
      const ie = () => {
        if (e.f) {
          const $ = N ? E(f) ? m[f] : a[f] : f.value;
          if (i)
            P($) && Js($, r);
          else if (P($))
            $.includes(r) || $.push(r);
          else if (N)
            a[f] = [r], E(f) && (m[f] = a[f]);
          else {
            const k = [r];
            f.value = k, e.k && (a[e.k] = k);
          }
        } else N ? (a[f] = l, E(f) && (m[f] = l)) : j && (f.value = l, e.k && (a[e.k] = l));
      };
      if (l) {
        const $ = () => {
          ie(), ls.delete(e);
        };
        $.id = -1, ls.set(e, $), be($, s);
      } else
        Sn(e), ie();
    }
  }
}
function Sn(e) {
  const t = ls.get(e);
  t && (t.flags |= 8, ls.delete(e));
}
let Tn = !1;
const lt = () => {
  Tn || (console.error("Hydration completed but contains mismatches."), Tn = !0);
}, gl = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", ml = (e) => e.namespaceURI.includes("MathML"), Yt = (e) => {
  if (e.nodeType === 1) {
    if (gl(e)) return "svg";
    if (ml(e)) return "mathml";
  }
}, Xt = (e) => e.nodeType === 8;
function _l(e) {
  const {
    mt: t,
    p: s,
    o: {
      patchProp: n,
      createText: i,
      nextSibling: r,
      parentNode: l,
      remove: o,
      insert: f,
      createComment: d
    }
  } = e, a = (p, g) => {
    if (!g.hasChildNodes()) {
      s(null, p, g), rs(), g._vnode = p;
      return;
    }
    m(g.firstChild, p, null, null, null), rs(), g._vnode = p;
  }, m = (p, g, A, K, L, G = !1) => {
    G = G || !!g.dynamicChildren;
    const J = Xt(p) && p.data === "[", D = () => j(
      p,
      g,
      A,
      K,
      L,
      J
    ), { type: z, ref: se, shapeFlag: ne, patchFlag: Se } = g;
    let de = p.nodeType;
    g.el = p, Se === -2 && (G = !1, g.dynamicChildren = null);
    let F = null;
    switch (z) {
      case st:
        de !== 3 ? g.children === "" ? (f(g.el = i(""), l(p), p), F = p) : F = D() : (p.data !== g.children && (lt(), p.data = g.children), F = r(p));
        break;
      case Be:
        k(p) ? (F = r(p), $(
          g.el = p.content.firstChild,
          p,
          A
        )) : de !== 8 || J ? F = D() : F = r(p);
        break;
      case Rt:
        if (J && (p = r(p), de = p.nodeType), de === 1 || de === 3) {
          F = p;
          const V = !g.children.length;
          for (let M = 0; M < g.staticCount; M++)
            V && (g.children += F.nodeType === 1 ? F.outerHTML : F.data), M === g.staticCount - 1 && (g.anchor = F), F = r(F);
          return J ? r(F) : F;
        } else
          D();
        break;
      case we:
        J ? F = N(
          p,
          g,
          A,
          K,
          L,
          G
        ) : F = D();
        break;
      default:
        if (ne & 1)
          (de !== 1 || g.type.toLowerCase() !== p.tagName.toLowerCase()) && !k(p) ? F = D() : F = C(
            p,
            g,
            A,
            K,
            L,
            G
          );
        else if (ne & 6) {
          g.slotScopeIds = L;
          const V = l(p);
          if (J ? F = ie(p) : Xt(p) && p.data === "teleport start" ? F = ie(p, p.data, "teleport end") : F = r(p), t(
            g,
            V,
            null,
            A,
            K,
            Yt(V),
            G
          ), dt(g) && !g.type.__asyncResolved) {
            let M;
            J ? (M = oe(we), M.anchor = F ? F.previousSibling : V.lastChild) : M = p.nodeType === 3 ? zi("") : oe("div"), M.el = p, g.component.subTree = M;
          }
        } else ne & 64 ? de !== 8 ? F = D() : F = g.type.hydrate(
          p,
          g,
          A,
          K,
          L,
          G,
          e,
          E
        ) : ne & 128 && (F = g.type.hydrate(
          p,
          g,
          A,
          K,
          Yt(l(p)),
          L,
          G,
          e,
          m
        ));
    }
    return se != null && ht(se, null, K, g), F;
  }, C = (p, g, A, K, L, G) => {
    G = G || !!g.dynamicChildren;
    const { type: J, props: D, patchFlag: z, shapeFlag: se, dirs: ne, transition: Se } = g, de = J === "input" || J === "option";
    if (de || z !== -1) {
      ne && Fe(g, null, A, "created");
      let F = !1;
      if (k(p)) {
        F = Wi(
          null,
          // no need check parentSuspense in hydration
          Se
        ) && A && A.vnode.props && A.vnode.props.appear;
        const M = p.content.firstChild;
        if (F) {
          const ee = M.getAttribute("class");
          ee && (M.$cls = ee), Se.beforeEnter(M);
        }
        $(M, p, A), g.el = p = M;
      }
      if (se & 16 && // skip if element has innerHTML / textContent
      !(D && (D.innerHTML || D.textContent))) {
        let M = E(
          p.firstChild,
          g,
          p,
          A,
          K,
          L,
          G
        );
        for (; M; ) {
          Zt(
            p,
            1
            /* CHILDREN */
          ) || lt();
          const ee = M;
          M = M.nextSibling, o(ee);
        }
      } else if (se & 8) {
        let M = g.children;
        M[0] === `
` && (p.tagName === "PRE" || p.tagName === "TEXTAREA") && (M = M.slice(1));
        const { textContent: ee } = p;
        ee !== M && // innerHTML normalize \r\n or \r into a single \n in the DOM
        ee !== M.replace(/\r\n|\r/g, `
`) && (Zt(
          p,
          0
          /* TEXT */
        ) || lt(), p.textContent = g.children);
      }
      if (D) {
        if (de || !G || z & 48) {
          const M = p.tagName.includes("-");
          for (const ee in D)
            (de && (ee.endsWith("value") || ee === "indeterminate") || $t(ee) && !ut(ee) || // force hydrate v-bind with .prop modifiers
            ee[0] === "." || M) && n(p, ee, null, D[ee], void 0, A);
        } else if (D.onClick)
          n(
            p,
            "onClick",
            null,
            D.onClick,
            void 0,
            A
          );
        else if (z & 4 && Ye(D.style))
          for (const M in D.style) D.style[M];
      }
      let V;
      (V = D && D.onVnodeBeforeMount) && Te(V, A, g), ne && Fe(g, null, A, "beforeMount"), ((V = D && D.onVnodeMounted) || ne || F) && Yi(() => {
        V && Te(V, A, g), F && Se.enter(p), ne && Fe(g, null, A, "mounted");
      }, K);
    }
    return p.nextSibling;
  }, E = (p, g, A, K, L, G, J) => {
    J = J || !!g.dynamicChildren;
    const D = g.children, z = D.length;
    for (let se = 0; se < z; se++) {
      const ne = J ? D[se] : D[se] = ye(D[se]), Se = ne.type === st;
      p ? (Se && !J && se + 1 < z && ye(D[se + 1]).type === st && (f(
        i(
          p.data.slice(ne.children.length)
        ),
        A,
        r(p)
      ), p.data = ne.children), p = m(
        p,
        ne,
        K,
        L,
        G,
        J
      )) : Se && !ne.children ? f(ne.el = i(""), A) : (Zt(
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
        Yt(A),
        G
      ));
    }
    return p;
  }, N = (p, g, A, K, L, G) => {
    const { slotScopeIds: J } = g;
    J && (L = L ? L.concat(J) : J);
    const D = l(p), z = E(
      r(p),
      g,
      D,
      A,
      K,
      L,
      G
    );
    return z && Xt(z) && z.data === "]" ? r(g.anchor = z) : (lt(), f(g.anchor = d("]"), D, z), z);
  }, j = (p, g, A, K, L, G) => {
    if (Zt(
      p.parentElement,
      1
      /* CHILDREN */
    ) || lt(), g.el = null, G) {
      const z = ie(p);
      for (; ; ) {
        const se = r(p);
        if (se && se !== z)
          o(se);
        else
          break;
      }
    }
    const J = r(p), D = l(p);
    return o(p), s(
      null,
      g,
      D,
      J,
      A,
      K,
      Yt(D),
      L
    ), A && (A.vnode.el = g.el, Di(A, g.el)), J;
  }, ie = (p, g = "[", A = "]") => {
    let K = 0;
    for (; p; )
      if (p = r(p), p && Xt(p) && (p.data === g && K++, p.data === A)) {
        if (K === 0)
          return r(p);
        K--;
      }
    return p;
  }, $ = (p, g, A) => {
    const K = g.parentNode;
    K && K.replaceChild(p, g);
    let L = A;
    for (; L; )
      L.vnode.el === g && (L.vnode.el = L.subTree.el = p), L = L.parent;
  }, k = (p) => p.nodeType === 1 && p.tagName === "TEMPLATE";
  return [a, m];
}
const wn = "data-allow-mismatch", bl = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function Zt(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(wn); )
      e = e.parentElement;
  const s = e && e.getAttribute(wn);
  if (s == null)
    return !1;
  if (s === "")
    return !0;
  {
    const n = s.split(",");
    return t === 0 && n.includes("children") ? !0 : n.includes(bl[t]);
  }
}
ds().requestIdleCallback;
ds().cancelIdleCallback;
const dt = (e) => !!e.type.__asyncLoader, Ai = (e) => e.type.__isKeepAlive;
function yl(e, t) {
  Mi(e, "a", t);
}
function xl(e, t) {
  Mi(e, "da", t);
}
function Mi(e, t, s = he) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ys(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      Ai(i.parent.vnode) && Sl(n, t, s, i), i = i.parent;
  }
}
function Sl(e, t, s, n) {
  const i = ys(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Ri(() => {
    Js(n[t], i);
  }, s);
}
function ys(e, t, s = he, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...l) => {
      $e();
      const o = Bt(s), f = He(t, s, e, l);
      return o(), Ue(), f;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const We = (e) => (t, s = he) => {
  (!jt || e === "sp") && ys(e, (...n) => t(...n), s);
}, Tl = We("bm"), wl = We("m"), vl = We(
  "bu"
), Cl = We("u"), El = We(
  "bum"
), Ri = We("um"), Al = We(
  "sp"
), Ml = We("rtg"), Rl = We("rtc");
function Ol(e, t = he) {
  ys("ec", e, t);
}
const Pl = /* @__PURE__ */ Symbol.for("v-ndc");
function ic(e, t, s, n) {
  let i;
  const r = s, l = P(e);
  if (l || te(e)) {
    const o = l && Ye(e);
    let f = !1, d = !1;
    o && (f = !Ce(e), d = Ke(e), e = _s(e)), i = new Array(e.length);
    for (let a = 0, m = e.length; a < m; a++)
      i[a] = t(
        f ? d ? mt(Me(e[a])) : Me(e[a]) : e[a],
        a,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let o = 0; o < e; o++)
      i[o] = t(o + 1, o, void 0, r);
  } else if (X(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (o, f) => t(o, f, void 0, r)
      );
    else {
      const o = Object.keys(e);
      i = new Array(o.length);
      for (let f = 0, d = o.length; f < d; f++) {
        const a = o[f];
        i[f] = t(e[a], a, f, r);
      }
    }
  else
    i = [];
  return i;
}
const Us = (e) => e ? tr(e) ? Ss(e) : Us(e.parent) : null, Mt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Us(e.parent),
    $root: (e) => Us(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Pi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      rn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xi.bind(e.proxy)),
    $watch: (e) => al.bind(e)
  })
), Fs = (e, t) => e !== Y && !e.__isScriptSetup && W(e, t), Fl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: r, accessCache: l, type: o, appContext: f } = e;
    if (t[0] !== "$") {
      const C = l[t];
      if (C !== void 0)
        switch (C) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return s[t];
          case 3:
            return r[t];
        }
      else {
        if (Fs(n, t))
          return l[t] = 1, n[t];
        if (i !== Y && W(i, t))
          return l[t] = 2, i[t];
        if (W(r, t))
          return l[t] = 3, r[t];
        if (s !== Y && W(s, t))
          return l[t] = 4, s[t];
        Ks && (l[t] = 0);
      }
    }
    const d = Mt[t];
    let a, m;
    if (d)
      return t === "$attrs" && le(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (a = o.__cssModules) && (a = a[t])
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
    const { data: n, setupState: i, ctx: r } = e;
    return Fs(i, t) ? (i[t] = s, !0) : n !== Y && W(n, t) ? (n[t] = s, !0) : W(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: l }
  }, o) {
    let f;
    return !!(s[o] || e !== Y && o[0] !== "$" && W(e, o) || Fs(t, o) || W(r, o) || W(n, o) || W(Mt, o) || W(i.config.globalProperties, o) || (f = l.__cssModules) && f[o]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : W(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function vn(e) {
  return P(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Ks = !0;
function Il(e) {
  const t = Pi(e), s = e.proxy, n = e.ctx;
  Ks = !1, t.beforeCreate && Cn(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: l,
    watch: o,
    provide: f,
    inject: d,
    // lifecycle
    created: a,
    beforeMount: m,
    mounted: C,
    beforeUpdate: E,
    updated: N,
    activated: j,
    deactivated: ie,
    beforeDestroy: $,
    beforeUnmount: k,
    destroyed: p,
    unmounted: g,
    render: A,
    renderTracked: K,
    renderTriggered: L,
    errorCaptured: G,
    serverPrefetch: J,
    // public API
    expose: D,
    inheritAttrs: z,
    // assets
    components: se,
    directives: ne,
    filters: Se
  } = t;
  if (d && Dl(d, n, null), l)
    for (const V in l) {
      const M = l[V];
      H(M) && (n[V] = M.bind(s));
    }
  if (i) {
    const V = i.call(s, s);
    X(V) && (e.data = tn(V));
  }
  if (Ks = !0, r)
    for (const V in r) {
      const M = r[V], ee = H(M) ? M.bind(s, s) : H(M.get) ? M.get.bind(s, s) : Ie, Wt = !H(M) && H(M.set) ? M.set.bind(s) : Ie, Qe = go({
        get: ee,
        set: Wt
      });
      Object.defineProperty(n, V, {
        enumerable: !0,
        configurable: !0,
        get: () => Qe.value,
        set: (Re) => Qe.value = Re
      });
    }
  if (o)
    for (const V in o)
      Oi(o[V], n, s, V);
  if (f) {
    const V = H(f) ? f.call(s) : f;
    Reflect.ownKeys(V).forEach((M) => {
      cl(M, V[M]);
    });
  }
  a && Cn(a, e, "c");
  function F(V, M) {
    P(M) ? M.forEach((ee) => V(ee.bind(s))) : M && V(M.bind(s));
  }
  if (F(Tl, m), F(wl, C), F(vl, E), F(Cl, N), F(yl, j), F(xl, ie), F(Ol, G), F(Rl, K), F(Ml, L), F(El, k), F(Ri, g), F(Al, J), P(D))
    if (D.length) {
      const V = e.exposed || (e.exposed = {});
      D.forEach((M) => {
        Object.defineProperty(V, M, {
          get: () => s[M],
          set: (ee) => s[M] = ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === Ie && (e.render = A), z != null && (e.inheritAttrs = z), se && (e.components = se), ne && (e.directives = ne), J && Ei(e);
}
function Dl(e, t, s = Ie) {
  P(e) && (e = Bs(e));
  for (const n in e) {
    const i = e[n];
    let r;
    X(i) ? "default" in i ? r = zt(
      i.from || n,
      i.default,
      !0
    ) : r = zt(i.from || n) : r = zt(i), ce(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (l) => r.value = l
    }) : t[n] = r;
  }
}
function Cn(e, t, s) {
  He(
    P(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Oi(e, t, s, n) {
  let i = n.includes(".") ? Ci(s, n) : () => s[n];
  if (te(e)) {
    const r = t[e];
    H(r) && Ps(i, r);
  } else if (H(e))
    Ps(i, e.bind(s));
  else if (X(e))
    if (P(e))
      e.forEach((r) => Oi(r, t, s, n));
    else {
      const r = H(e.handler) ? e.handler.bind(s) : t[e.handler];
      H(r) && Ps(i, r, e);
    }
}
function Pi(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: l }
  } = e.appContext, o = r.get(t);
  let f;
  return o ? f = o : !i.length && !s && !n ? f = t : (f = {}, i.length && i.forEach(
    (d) => os(f, d, l, !0)
  ), os(f, t, l)), X(t) && r.set(t, f), f;
}
function os(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && os(e, r, s, !0), i && i.forEach(
    (l) => os(e, l, s, !0)
  );
  for (const l in t)
    if (!(n && l === "expose")) {
      const o = Hl[l] || s && s[l];
      e[l] = o ? o(e[l], t[l]) : t[l];
    }
  return e;
}
const Hl = {
  data: En,
  props: An,
  emits: An,
  // objects
  methods: Ct,
  computed: Ct,
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
  components: Ct,
  directives: Ct,
  // watch
  watch: Ll,
  // provide / inject
  provide: En,
  inject: Nl
};
function En(e, t) {
  return t ? e ? function() {
    return fe(
      H(e) ? e.call(this, this) : e,
      H(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Nl(e, t) {
  return Ct(Bs(e), Bs(t));
}
function Bs(e) {
  if (P(e)) {
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
function Ct(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function An(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    vn(e),
    vn(t ?? {})
  ) : t;
}
function Ll(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = fe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = ue(e[n], t[n]);
  return s;
}
function Fi() {
  return {
    app: null,
    config: {
      isNativeTag: qn,
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
let jl = 0;
function Vl(e, t) {
  return function(n, i = null) {
    H(n) || (n = fe({}, n)), i != null && !X(i) && (i = null);
    const r = Fi(), l = /* @__PURE__ */ new WeakSet(), o = [];
    let f = !1;
    const d = r.app = {
      _uid: jl++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: mo,
      get config() {
        return r.config;
      },
      set config(a) {
      },
      use(a, ...m) {
        return l.has(a) || (a && H(a.install) ? (l.add(a), a.install(d, ...m)) : H(a) && (l.add(a), a(d, ...m))), d;
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), d;
      },
      component(a, m) {
        return m ? (r.components[a] = m, d) : r.components[a];
      },
      directive(a, m) {
        return m ? (r.directives[a] = m, d) : r.directives[a];
      },
      mount(a, m, C) {
        if (!f) {
          const E = d._ceVNode || oe(n, i);
          return E.appContext = r, C === !0 ? C = "svg" : C === !1 && (C = void 0), m && t ? t(E, a) : e(E, a, C), f = !0, d._container = a, a.__vue_app__ = d, Ss(E.component);
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
        return r.provides[a] = m, d;
      },
      runWithContext(a) {
        const m = pt;
        pt = d;
        try {
          return a();
        } finally {
          pt = m;
        }
      }
    };
    return d;
  };
}
let pt = null;
const $l = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Xe(t)}Modifiers`] || e[`${Ze(t)}Modifiers`];
function Ul(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Y;
  let i = s;
  const r = t.startsWith("update:"), l = r && $l(n, t.slice(7));
  l && (l.trim && (i = s.map((a) => te(a) ? a.trim() : a)), l.number && (i = s.map(zn)));
  let o, f = n[o = Cs(t)] || // also try camelCase event handler (#2249)
  n[o = Cs(Xe(t))];
  !f && r && (f = n[o = Cs(Ze(t))]), f && He(
    f,
    e,
    6,
    i
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
      i
    );
  }
}
const Kl = /* @__PURE__ */ new WeakMap();
function Ii(e, t, s = !1) {
  const n = s ? Kl : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let l = {}, o = !1;
  if (!H(e)) {
    const f = (d) => {
      const a = Ii(d, t, !0);
      a && (o = !0, fe(l, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !o ? (X(e) && n.set(e, null), null) : (P(r) ? r.forEach((f) => l[f] = null) : fe(l, r), X(e) && n.set(e, l), l);
}
function xs(e, t) {
  return !e || !$t(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), W(e, t[0].toLowerCase() + t.slice(1)) || W(e, Ze(t)) || W(e, t));
}
function es(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [r],
    slots: l,
    attrs: o,
    emit: f,
    render: d,
    renderCache: a,
    props: m,
    data: C,
    setupState: E,
    ctx: N,
    inheritAttrs: j
  } = e, ie = Ht(e);
  let $, k;
  try {
    if (s.shapeFlag & 4) {
      const g = i || n, A = g;
      $ = ye(
        d.call(
          A,
          g,
          a,
          m,
          E,
          C,
          N
        )
      ), k = o;
    } else {
      const g = t;
      $ = ye(
        g.length > 1 ? g(
          m,
          { attrs: o, slots: l, emit: f }
        ) : g(
          m,
          null
        )
      ), k = t.props ? o : Bl(o);
    }
  } catch (g) {
    Ot.length = 0, bs(g, e, 1), $ = oe(Be);
  }
  let p = $;
  if (k && j !== !1) {
    const g = Object.keys(k), { shapeFlag: A } = p;
    g.length && A & 7 && (r && g.some(qs) && (k = Wl(
      k,
      r
    )), p = _t(p, k, !1, !0));
  }
  return s.dirs && (p = _t(p, null, !1, !0), p.dirs = p.dirs ? p.dirs.concat(s.dirs) : s.dirs), s.transition && ln(p, s.transition), $ = p, Ht(ie), $;
}
const Bl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || $t(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Wl = (e, t) => {
  const s = {};
  for (const n in e)
    (!qs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function kl(e, t, s) {
  const { props: n, children: i, component: r } = e, { props: l, children: o, patchFlag: f } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? Mn(n, l, d) : !!l;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let m = 0; m < a.length; m++) {
        const C = a[m];
        if (l[C] !== n[C] && !xs(d, C))
          return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable) ? !0 : n === l ? !1 : n ? l ? Mn(n, l, d) : !0 : !!l;
  return !1;
}
function Mn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (t[r] !== e[r] && !xs(s, r))
      return !0;
  }
  return !1;
}
function Di({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Hi = {}, Ni = () => Object.create(Hi), Li = (e) => Object.getPrototypeOf(e) === Hi;
function Gl(e, t, s, n = !1) {
  const i = {}, r = Ni();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ji(e, t, i, r);
  for (const l in e.propsOptions[0])
    l in i || (i[l] = void 0);
  s ? e.props = n ? i : Jr(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function ql(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: l }
  } = e, o = B(i), [f] = e.propsOptions;
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
        let C = a[m];
        if (xs(e.emitsOptions, C))
          continue;
        const E = t[C];
        if (f)
          if (W(r, C))
            E !== r[C] && (r[C] = E, d = !0);
          else {
            const N = Xe(C);
            i[N] = Ws(
              f,
              o,
              N,
              E,
              e,
              !1
            );
          }
        else
          E !== r[C] && (r[C] = E, d = !0);
      }
    }
  } else {
    ji(e, t, i, r) && (d = !0);
    let a;
    for (const m in o)
      (!t || // for camelCase
      !W(t, m) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Ze(m)) === m || !W(t, a))) && (f ? s && // for camelCase
      (s[m] !== void 0 || // for kebab-case
      s[a] !== void 0) && (i[m] = Ws(
        f,
        o,
        m,
        void 0,
        e,
        !0
      )) : delete i[m]);
    if (r !== o)
      for (const m in r)
        (!t || !W(t, m)) && (delete r[m], d = !0);
  }
  d && je(e.attrs, "set", "");
}
function ji(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let l = !1, o;
  if (t)
    for (let f in t) {
      if (ut(f))
        continue;
      const d = t[f];
      let a;
      i && W(i, a = Xe(f)) ? !r || !r.includes(a) ? s[a] = d : (o || (o = {}))[a] = d : xs(e.emitsOptions, f) || (!(f in n) || d !== n[f]) && (n[f] = d, l = !0);
    }
  if (r) {
    const f = B(s), d = o || Y;
    for (let a = 0; a < r.length; a++) {
      const m = r[a];
      s[m] = Ws(
        i,
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
function Ws(e, t, s, n, i, r) {
  const l = e[s];
  if (l != null) {
    const o = W(l, "default");
    if (o && n === void 0) {
      const f = l.default;
      if (l.type !== Function && !l.skipFactory && H(f)) {
        const { propsDefaults: d } = i;
        if (s in d)
          n = d[s];
        else {
          const a = Bt(i);
          n = d[s] = f.call(
            null,
            t
          ), a();
        }
      } else
        n = f;
      i.ce && i.ce._setProp(s, n);
    }
    l[
      0
      /* shouldCast */
    ] && (r && !o ? n = !1 : l[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Ze(s)) && (n = !0));
  }
  return n;
}
const Jl = /* @__PURE__ */ new WeakMap();
function Vi(e, t, s = !1) {
  const n = s ? Jl : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, l = {}, o = [];
  let f = !1;
  if (!H(e)) {
    const a = (m) => {
      f = !0;
      const [C, E] = Vi(m, t, !0);
      fe(l, C), E && o.push(...E);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!r && !f)
    return X(e) && n.set(e, ct), ct;
  if (P(r))
    for (let a = 0; a < r.length; a++) {
      const m = Xe(r[a]);
      Rn(m) && (l[m] = Y);
    }
  else if (r)
    for (const a in r) {
      const m = Xe(a);
      if (Rn(m)) {
        const C = r[a], E = l[m] = P(C) || H(C) ? { type: C } : fe({}, C), N = E.type;
        let j = !1, ie = !0;
        if (P(N))
          for (let $ = 0; $ < N.length; ++$) {
            const k = N[$], p = H(k) && k.name;
            if (p === "Boolean") {
              j = !0;
              break;
            } else p === "String" && (ie = !1);
          }
        else
          j = H(N) && N.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = j, E[
          1
          /* shouldCastTrue */
        ] = ie, (j || W(E, "default")) && o.push(m);
      }
    }
  const d = [l, o];
  return X(e) && n.set(e, d), d;
}
function Rn(e) {
  return e[0] !== "$" && !ut(e);
}
const on = (e) => e === "_" || e === "_ctx" || e === "$stable", cn = (e) => P(e) ? e.map(ye) : [ye(e)], Yl = (e, t, s) => {
  if (t._n)
    return t;
  const n = ol((...i) => cn(t(...i)), s);
  return n._c = !1, n;
}, $i = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (on(i)) continue;
    const r = e[i];
    if (H(r))
      t[i] = Yl(i, r, n);
    else if (r != null) {
      const l = cn(r);
      t[i] = () => l;
    }
  }
}, Ui = (e, t) => {
  const s = cn(t);
  e.slots.default = () => s;
}, Ki = (e, t, s) => {
  for (const n in t)
    (s || !on(n)) && (e[n] = t[n]);
}, Xl = (e, t, s) => {
  const n = e.slots = Ni();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Ki(n, t, s), s && Qn(n, "_", i, !0)) : $i(t, n);
  } else t && Ui(e, t);
}, Zl = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, l = Y;
  if (n.shapeFlag & 32) {
    const o = t._;
    o ? s && o === 1 ? r = !1 : Ki(i, t, s) : (r = !t.$stable, $i(t, i)), l = t;
  } else t && (Ui(e, t), l = { default: 1 });
  if (r)
    for (const o in i)
      !on(o) && l[o] == null && delete i[o];
}, be = Yi;
function Ql(e) {
  return Bi(e);
}
function zl(e) {
  return Bi(e, _l);
}
function Bi(e, t) {
  const s = ds();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: r,
    createElement: l,
    createText: o,
    createComment: f,
    setText: d,
    setElementText: a,
    parentNode: m,
    nextSibling: C,
    setScopeId: E = Ie,
    insertStaticContent: N
  } = e, j = (c, u, h, x = null, _ = null, b = null, w = void 0, T = null, S = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !wt(c, u) && (x = kt(c), Re(c, _, b, !0), c = null), u.patchFlag === -2 && (S = !1, u.dynamicChildren = null);
    const { type: y, ref: O, shapeFlag: v } = u;
    switch (y) {
      case st:
        ie(c, u, h, x);
        break;
      case Be:
        $(c, u, h, x);
        break;
      case Rt:
        c == null && k(u, h, x, w);
        break;
      case we:
        se(
          c,
          u,
          h,
          x,
          _,
          b,
          w,
          T,
          S
        );
        break;
      default:
        v & 1 ? A(
          c,
          u,
          h,
          x,
          _,
          b,
          w,
          T,
          S
        ) : v & 6 ? ne(
          c,
          u,
          h,
          x,
          _,
          b,
          w,
          T,
          S
        ) : (v & 64 || v & 128) && y.process(
          c,
          u,
          h,
          x,
          _,
          b,
          w,
          T,
          S,
          it
        );
    }
    O != null && _ ? ht(O, c && c.ref, b, u || c, !u) : O == null && c && c.ref != null && ht(c.ref, null, b, c, !0);
  }, ie = (c, u, h, x) => {
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
  }, $ = (c, u, h, x) => {
    c == null ? n(
      u.el = f(u.children || ""),
      h,
      x
    ) : u.el = c.el;
  }, k = (c, u, h, x) => {
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
      _ = C(c), n(c, h, x), c = _;
    n(u, h, x);
  }, g = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = C(c), i(c), c = h;
    i(u);
  }, A = (c, u, h, x, _, b, w, T, S) => {
    if (u.type === "svg" ? w = "svg" : u.type === "math" && (w = "mathml"), c == null)
      K(
        u,
        h,
        x,
        _,
        b,
        w,
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
          w,
          T,
          S
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, K = (c, u, h, x, _, b, w, T) => {
    let S, y;
    const { props: O, shapeFlag: v, transition: R, dirs: I } = c;
    if (S = c.el = l(
      c.type,
      b,
      O && O.is,
      O
    ), v & 8 ? a(S, c.children) : v & 16 && G(
      c.children,
      S,
      null,
      x,
      _,
      Is(c, b),
      w,
      T
    ), I && Fe(c, null, x, "created"), L(S, c, c.scopeId, w, x), O) {
      for (const Z in O)
        Z !== "value" && !ut(Z) && r(S, Z, null, O[Z], b, x);
      "value" in O && r(S, "value", null, O.value, b), (y = O.onVnodeBeforeMount) && Te(y, x, c);
    }
    I && Fe(c, null, x, "beforeMount");
    const U = Wi(_, R);
    U && R.beforeEnter(S), n(S, u, h), ((y = O && O.onVnodeMounted) || U || I) && be(() => {
      y && Te(y, x, c), U && R.enter(S), I && Fe(c, null, x, "mounted");
    }, _);
  }, L = (c, u, h, x, _) => {
    if (h && E(c, h), x)
      for (let b = 0; b < x.length; b++)
        E(c, x[b]);
    if (_) {
      let b = _.subTree;
      if (u === b || Ji(b.type) && (b.ssContent === u || b.ssFallback === u)) {
        const w = _.vnode;
        L(
          c,
          w,
          w.scopeId,
          w.slotScopeIds,
          _.parent
        );
      }
    }
  }, G = (c, u, h, x, _, b, w, T, S = 0) => {
    for (let y = S; y < c.length; y++) {
      const O = c[y] = T ? qe(c[y]) : ye(c[y]);
      j(
        null,
        O,
        u,
        h,
        x,
        _,
        b,
        w,
        T
      );
    }
  }, J = (c, u, h, x, _, b, w) => {
    const T = u.el = c.el;
    let { patchFlag: S, dynamicChildren: y, dirs: O } = u;
    S |= c.patchFlag & 16;
    const v = c.props || Y, R = u.props || Y;
    let I;
    if (h && ze(h, !1), (I = R.onVnodeBeforeUpdate) && Te(I, h, u, c), O && Fe(u, c, h, "beforeUpdate"), h && ze(h, !0), (v.innerHTML && R.innerHTML == null || v.textContent && R.textContent == null) && a(T, ""), y ? D(
      c.dynamicChildren,
      y,
      T,
      h,
      x,
      Is(u, _),
      b
    ) : w || M(
      c,
      u,
      T,
      null,
      h,
      x,
      Is(u, _),
      b,
      !1
    ), S > 0) {
      if (S & 16)
        z(T, v, R, h, _);
      else if (S & 2 && v.class !== R.class && r(T, "class", null, R.class, _), S & 4 && r(T, "style", v.style, R.style, _), S & 8) {
        const U = u.dynamicProps;
        for (let Z = 0; Z < U.length; Z++) {
          const q = U[Z], pe = v[q], re = R[q];
          (re !== pe || q === "value") && r(T, q, pe, re, _, h);
        }
      }
      S & 1 && c.children !== u.children && a(T, u.children);
    } else !w && y == null && z(T, v, R, h, _);
    ((I = R.onVnodeUpdated) || O) && be(() => {
      I && Te(I, h, u, c), O && Fe(u, c, h, "updated");
    }, x);
  }, D = (c, u, h, x, _, b, w) => {
    for (let T = 0; T < u.length; T++) {
      const S = c[T], y = u[T], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !wt(S, y) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? m(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      j(
        S,
        y,
        O,
        null,
        x,
        _,
        b,
        w,
        !0
      );
    }
  }, z = (c, u, h, x, _) => {
    if (u !== h) {
      if (u !== Y)
        for (const b in u)
          !ut(b) && !(b in h) && r(
            c,
            b,
            u[b],
            null,
            _,
            x
          );
      for (const b in h) {
        if (ut(b)) continue;
        const w = h[b], T = u[b];
        w !== T && b !== "value" && r(c, b, T, w, _, x);
      }
      "value" in h && r(c, "value", u.value, h.value, _);
    }
  }, se = (c, u, h, x, _, b, w, T, S) => {
    const y = u.el = c ? c.el : o(""), O = u.anchor = c ? c.anchor : o("");
    let { patchFlag: v, dynamicChildren: R, slotScopeIds: I } = u;
    I && (T = T ? T.concat(I) : I), c == null ? (n(y, h, x), n(O, h, x), G(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      O,
      _,
      b,
      w,
      T,
      S
    )) : v > 0 && v & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === R.length ? (D(
      c.dynamicChildren,
      R,
      h,
      _,
      b,
      w,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || _ && u === _.subTree) && ki(
      c,
      u,
      !0
      /* shallow */
    )) : M(
      c,
      u,
      h,
      O,
      _,
      b,
      w,
      T,
      S
    );
  }, ne = (c, u, h, x, _, b, w, T, S) => {
    u.slotScopeIds = T, c == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      h,
      x,
      w,
      S
    ) : Se(
      u,
      h,
      x,
      _,
      b,
      w,
      S
    ) : de(c, u, S);
  }, Se = (c, u, h, x, _, b, w) => {
    const T = c.component = er(
      c,
      x,
      _
    );
    if (Ai(c) && (T.ctx.renderer = it), sr(T, !1, w), T.asyncDep) {
      if (_ && _.registerDep(T, F, w), !c.el) {
        const S = T.subTree = oe(Be);
        $(null, S, u, h), c.placeholder = S.el;
      }
    } else
      F(
        T,
        c,
        u,
        h,
        _,
        b,
        w
      );
  }, de = (c, u, h) => {
    const x = u.component = c.component;
    if (kl(c, u, h))
      if (x.asyncDep && !x.asyncResolved) {
        V(x, u, h);
        return;
      } else
        x.next = u, x.update();
    else
      u.el = c.el, x.vnode = u;
  }, F = (c, u, h, x, _, b, w) => {
    const T = () => {
      if (c.isMounted) {
        let { next: v, bu: R, u: I, parent: U, vnode: Z } = c;
        {
          const me = Gi(c);
          if (me) {
            v && (v.el = Z.el, V(c, v, w)), me.asyncDep.then(() => {
              c.isUnmounted || T();
            });
            return;
          }
        }
        let q = v, pe;
        ze(c, !1), v ? (v.el = Z.el, V(c, v, w)) : v = Z, R && Qt(R), (pe = v.props && v.props.onVnodeBeforeUpdate) && Te(pe, U, v, Z), ze(c, !0);
        const re = es(c), Ee = c.subTree;
        c.subTree = re, j(
          Ee,
          re,
          // parent may have changed if it's in a teleport
          m(Ee.el),
          // anchor may have changed if it's in a fragment
          kt(Ee),
          c,
          _,
          b
        ), v.el = re.el, q === null && Di(c, re.el), I && be(I, _), (pe = v.props && v.props.onVnodeUpdated) && be(
          () => Te(pe, U, v, Z),
          _
        );
      } else {
        let v;
        const { el: R, props: I } = u, { bm: U, m: Z, parent: q, root: pe, type: re } = c, Ee = dt(u);
        if (ze(c, !1), U && Qt(U), !Ee && (v = I && I.onVnodeBeforeMount) && Te(v, q, u), ze(c, !0), R && vs) {
          const me = () => {
            c.subTree = es(c), vs(
              R,
              c.subTree,
              c,
              _,
              null
            );
          };
          Ee && re.__asyncHydrate ? re.__asyncHydrate(
            R,
            c,
            me
          ) : me();
        } else {
          pe.ce && // @ts-expect-error _def is private
          pe.ce._def.shadowRoot !== !1 && pe.ce._injectChildStyle(re);
          const me = c.subTree = es(c);
          j(
            null,
            me,
            h,
            x,
            c,
            _,
            b
          ), u.el = me.el;
        }
        if (Z && be(Z, _), !Ee && (v = I && I.onVnodeMounted)) {
          const me = u;
          be(
            () => Te(v, q, me),
            _
          );
        }
        (u.shapeFlag & 256 || q && dt(q.vnode) && q.vnode.shapeFlag & 256) && c.a && be(c.a, _), c.isMounted = !0, u = h = x = null;
      }
    };
    c.scope.on();
    const S = c.effect = new ii(T);
    c.scope.off();
    const y = c.update = S.run.bind(S), O = c.job = S.runIfDirty.bind(S);
    O.i = c, O.id = c.uid, S.scheduler = () => rn(O), ze(c, !0), y();
  }, V = (c, u, h) => {
    u.component = c;
    const x = c.vnode.props;
    c.vnode = u, c.next = null, ql(c, u.props, x, h), Zl(c, u.children, h), $e(), xn(c), Ue();
  }, M = (c, u, h, x, _, b, w, T, S = !1) => {
    const y = c && c.children, O = c ? c.shapeFlag : 0, v = u.children, { patchFlag: R, shapeFlag: I } = u;
    if (R > 0) {
      if (R & 128) {
        Wt(
          y,
          v,
          h,
          x,
          _,
          b,
          w,
          T,
          S
        );
        return;
      } else if (R & 256) {
        ee(
          y,
          v,
          h,
          x,
          _,
          b,
          w,
          T,
          S
        );
        return;
      }
    }
    I & 8 ? (O & 16 && xt(y, _, b), v !== y && a(h, v)) : O & 16 ? I & 16 ? Wt(
      y,
      v,
      h,
      x,
      _,
      b,
      w,
      T,
      S
    ) : xt(y, _, b, !0) : (O & 8 && a(h, ""), I & 16 && G(
      v,
      h,
      x,
      _,
      b,
      w,
      T,
      S
    ));
  }, ee = (c, u, h, x, _, b, w, T, S) => {
    c = c || ct, u = u || ct;
    const y = c.length, O = u.length, v = Math.min(y, O);
    let R;
    for (R = 0; R < v; R++) {
      const I = u[R] = S ? qe(u[R]) : ye(u[R]);
      j(
        c[R],
        I,
        h,
        null,
        _,
        b,
        w,
        T,
        S
      );
    }
    y > O ? xt(
      c,
      _,
      b,
      !0,
      !1,
      v
    ) : G(
      u,
      h,
      x,
      _,
      b,
      w,
      T,
      S,
      v
    );
  }, Wt = (c, u, h, x, _, b, w, T, S) => {
    let y = 0;
    const O = u.length;
    let v = c.length - 1, R = O - 1;
    for (; y <= v && y <= R; ) {
      const I = c[y], U = u[y] = S ? qe(u[y]) : ye(u[y]);
      if (wt(I, U))
        j(
          I,
          U,
          h,
          null,
          _,
          b,
          w,
          T,
          S
        );
      else
        break;
      y++;
    }
    for (; y <= v && y <= R; ) {
      const I = c[v], U = u[R] = S ? qe(u[R]) : ye(u[R]);
      if (wt(I, U))
        j(
          I,
          U,
          h,
          null,
          _,
          b,
          w,
          T,
          S
        );
      else
        break;
      v--, R--;
    }
    if (y > v) {
      if (y <= R) {
        const I = R + 1, U = I < O ? u[I].el : x;
        for (; y <= R; )
          j(
            null,
            u[y] = S ? qe(u[y]) : ye(u[y]),
            h,
            U,
            _,
            b,
            w,
            T,
            S
          ), y++;
      }
    } else if (y > R)
      for (; y <= v; )
        Re(c[y], _, b, !0), y++;
    else {
      const I = y, U = y, Z = /* @__PURE__ */ new Map();
      for (y = U; y <= R; y++) {
        const _e = u[y] = S ? qe(u[y]) : ye(u[y]);
        _e.key != null && Z.set(_e.key, y);
      }
      let q, pe = 0;
      const re = R - U + 1;
      let Ee = !1, me = 0;
      const St = new Array(re);
      for (y = 0; y < re; y++) St[y] = 0;
      for (y = I; y <= v; y++) {
        const _e = c[y];
        if (pe >= re) {
          Re(_e, _, b, !0);
          continue;
        }
        let Oe;
        if (_e.key != null)
          Oe = Z.get(_e.key);
        else
          for (q = U; q <= R; q++)
            if (St[q - U] === 0 && wt(_e, u[q])) {
              Oe = q;
              break;
            }
        Oe === void 0 ? Re(_e, _, b, !0) : (St[Oe - U] = y + 1, Oe >= me ? me = Oe : Ee = !0, j(
          _e,
          u[Oe],
          h,
          null,
          _,
          b,
          w,
          T,
          S
        ), pe++);
      }
      const dn = Ee ? eo(St) : ct;
      for (q = dn.length - 1, y = re - 1; y >= 0; y--) {
        const _e = U + y, Oe = u[_e], pn = u[_e + 1], gn = _e + 1 < O ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          pn.el || qi(pn)
        ) : x;
        St[y] === 0 ? j(
          null,
          Oe,
          h,
          gn,
          _,
          b,
          w,
          T,
          S
        ) : Ee && (q < 0 || y !== dn[q] ? Qe(Oe, h, gn, 2) : q--);
      }
    }
  }, Qe = (c, u, h, x, _ = null) => {
    const { el: b, type: w, transition: T, children: S, shapeFlag: y } = c;
    if (y & 6) {
      Qe(c.component.subTree, u, h, x);
      return;
    }
    if (y & 128) {
      c.suspense.move(u, h, x);
      return;
    }
    if (y & 64) {
      w.move(c, u, h, it);
      return;
    }
    if (w === we) {
      n(b, u, h);
      for (let v = 0; v < S.length; v++)
        Qe(S[v], u, h, x);
      n(c.anchor, u, h);
      return;
    }
    if (w === Rt) {
      p(c, u, h);
      return;
    }
    if (x !== 2 && y & 1 && T)
      if (x === 0)
        T.beforeEnter(b), n(b, u, h), be(() => T.enter(b), _);
      else {
        const { leave: v, delayLeave: R, afterLeave: I } = T, U = () => {
          c.ctx.isUnmounted ? i(b) : n(b, u, h);
        }, Z = () => {
          b._isLeaving && b[pl](
            !0
            /* cancelled */
          ), v(b, () => {
            U(), I && I();
          });
        };
        R ? R(b, U, Z) : Z();
      }
    else
      n(b, u, h);
  }, Re = (c, u, h, x = !1, _ = !1) => {
    const {
      type: b,
      props: w,
      ref: T,
      children: S,
      dynamicChildren: y,
      shapeFlag: O,
      patchFlag: v,
      dirs: R,
      cacheIndex: I
    } = c;
    if (v === -2 && (_ = !1), T != null && ($e(), ht(T, null, h, c, !0), Ue()), I != null && (u.renderCache[I] = void 0), O & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const U = O & 1 && R, Z = !dt(c);
    let q;
    if (Z && (q = w && w.onVnodeBeforeUnmount) && Te(q, u, c), O & 6)
      ar(c.component, h, x);
    else {
      if (O & 128) {
        c.suspense.unmount(h, x);
        return;
      }
      U && Fe(c, null, u, "beforeUnmount"), O & 64 ? c.type.remove(
        c,
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
      (b !== we || v > 0 && v & 64) ? xt(
        y,
        u,
        h,
        !1,
        !0
      ) : (b === we && v & 384 || !_ && O & 16) && xt(S, u, h), x && an(c);
    }
    (Z && (q = w && w.onVnodeUnmounted) || U) && be(() => {
      q && Te(q, u, c), U && Fe(c, null, u, "unmounted");
    }, h);
  }, an = (c) => {
    const { type: u, el: h, anchor: x, transition: _ } = c;
    if (u === we) {
      ur(h, x);
      return;
    }
    if (u === Rt) {
      g(c);
      return;
    }
    const b = () => {
      i(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: w, delayLeave: T } = _, S = () => w(h, b);
      T ? T(c.el, b, S) : S();
    } else
      b();
  }, ur = (c, u) => {
    let h;
    for (; c !== u; )
      h = C(c), i(c), c = h;
    i(u);
  }, ar = (c, u, h) => {
    const { bum: x, scope: _, job: b, subTree: w, um: T, m: S, a: y } = c;
    On(S), On(y), x && Qt(x), _.stop(), b && (b.flags |= 8, Re(w, c, u, h)), T && be(T, u), be(() => {
      c.isUnmounted = !0;
    }, u);
  }, xt = (c, u, h, x = !1, _ = !1, b = 0) => {
    for (let w = b; w < c.length; w++)
      Re(c[w], u, h, x, _);
  }, kt = (c) => {
    if (c.shapeFlag & 6)
      return kt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = C(c.anchor || c.el), h = u && u[hl];
    return h ? C(h) : u;
  };
  let Ts = !1;
  const hn = (c, u, h) => {
    let x;
    c == null ? u._vnode && (Re(u._vnode, null, null, !0), x = u._vnode.component) : j(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, Ts || (Ts = !0, xn(x), rs(), Ts = !1);
  }, it = {
    p: j,
    um: Re,
    m: Qe,
    r: an,
    mt: Se,
    mc: G,
    pc: M,
    pbc: D,
    n: kt,
    o: e
  };
  let ws, vs;
  return t && ([ws, vs] = t(
    it
  )), {
    render: hn,
    hydrate: ws,
    createApp: Vl(hn, ws)
  };
}
function Is({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ze({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Wi(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ki(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (P(n) && P(i))
    for (let r = 0; r < n.length; r++) {
      const l = n[r];
      let o = i[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = i[r] = qe(i[r]), o.el = l.el), !s && o.patchFlag !== -2 && ki(l, o)), o.type === st && (o.patchFlag !== -1 ? o.el = l.el : o.__elIndex = r + // take fragment start anchor into account
      (e.type === we ? 1 : 0)), o.type === Be && !o.el && (o.el = l.el);
    }
}
function eo(e) {
  const t = e.slice(), s = [0];
  let n, i, r, l, o;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const d = e[n];
    if (d !== 0) {
      if (i = s[s.length - 1], e[i] < d) {
        t[n] = i, s.push(n);
        continue;
      }
      for (r = 0, l = s.length - 1; r < l; )
        o = r + l >> 1, e[s[o]] < d ? r = o + 1 : l = o;
      d < e[s[r]] && (r > 0 && (t[n] = s[r - 1]), s[r] = n);
    }
  }
  for (r = s.length, l = s[r - 1]; r-- > 0; )
    s[r] = l, l = t[l];
  return s;
}
function Gi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Gi(t);
}
function On(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function qi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? qi(t.subTree) : null;
}
const Ji = (e) => e.__isSuspense;
function Yi(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : ll(e);
}
const we = /* @__PURE__ */ Symbol.for("v-fgt"), st = /* @__PURE__ */ Symbol.for("v-txt"), Be = /* @__PURE__ */ Symbol.for("v-cmt"), Rt = /* @__PURE__ */ Symbol.for("v-stc"), Ot = [];
let xe = null;
function to(e = !1) {
  Ot.push(xe = e ? null : []);
}
function so() {
  Ot.pop(), xe = Ot[Ot.length - 1] || null;
}
let Nt = 1;
function cs(e, t = !1) {
  Nt += e, e < 0 && xe && t && (xe.hasOnce = !0);
}
function Xi(e) {
  return e.dynamicChildren = Nt > 0 ? xe || ct : null, so(), Nt > 0 && xe && xe.push(e), e;
}
function rc(e, t, s, n, i, r) {
  return Xi(
    Qi(
      e,
      t,
      s,
      n,
      i,
      r,
      !0
    )
  );
}
function no(e, t, s, n, i) {
  return Xi(
    oe(
      e,
      t,
      s,
      n,
      i,
      !0
    )
  );
}
function Lt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function wt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Zi = ({ key: e }) => e ?? null, ts = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? te(e) || ce(e) || H(e) ? { i: ve, r: e, k: t, f: !!s } : e : null);
function Qi(e, t = null, s = null, n = 0, i = null, r = e === we ? 0 : 1, l = !1, o = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zi(t),
    ref: t && ts(t),
    scopeId: wi,
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
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ve
  };
  return o ? (fn(f, s), r & 128 && e.normalize(f)) : s && (f.shapeFlag |= te(s) ? 8 : 16), Nt > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && xe.push(f), f;
}
const oe = io;
function io(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === Pl) && (e = Be), Lt(e)) {
    const o = _t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && fn(o, s), Nt > 0 && !r && xe && (o.shapeFlag & 6 ? xe[xe.indexOf(e)] = o : xe.push(o)), o.patchFlag = -2, o;
  }
  if (po(e) && (e = e.__vccOpts), t) {
    t = ro(t);
    let { class: o, style: f } = t;
    o && !te(o) && (t.class = gs(o)), X(f) && (nn(f) && !P(f) && (f = fe({}, f)), t.style = ps(f));
  }
  const l = te(e) ? 1 : Ji(e) ? 128 : dl(e) ? 64 : X(e) ? 4 : H(e) ? 2 : 0;
  return Qi(
    e,
    t,
    s,
    n,
    i,
    l,
    r,
    !0
  );
}
function ro(e) {
  return e ? nn(e) || Li(e) ? fe({}, e) : e : null;
}
function _t(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: l, children: o, transition: f } = e, d = t ? lo(i || {}, t) : i, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Zi(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? P(r) ? r.concat(ts(t)) : [r, ts(t)] : ts(t)
    ) : r,
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
    patchFlag: t && e.type !== we ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && _t(e.ssContent),
    ssFallback: e.ssFallback && _t(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && ln(
    a,
    f.clone(a)
  ), a;
}
function zi(e = " ", t = 0) {
  return oe(st, null, e, t);
}
function lc(e, t) {
  const s = oe(Rt, null, e);
  return s.staticCount = t, s;
}
function oc(e = "", t = !1) {
  return t ? (to(), no(Be, null, e)) : oe(Be, null, e);
}
function ye(e) {
  return e == null || typeof e == "boolean" ? oe(Be) : P(e) ? oe(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Lt(e) ? qe(e) : oe(st, null, String(e));
}
function qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _t(e);
}
function fn(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (P(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), fn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !Li(t) ? t._ctx = ve : i === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else H(t) ? (t = { default: t, _ctx: ve }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [zi(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function lo(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = gs([t.class, n.class]));
      else if (i === "style")
        t.style = ps([t.style, n.style]);
      else if ($t(i)) {
        const r = t[i], l = n[i];
        l && r !== l && !(P(r) && r.includes(l)) && (t[i] = r ? [].concat(r, l) : l);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Te(e, t, s, n = null) {
  He(e, t, 7, [
    s,
    n
  ]);
}
const oo = Fi();
let co = 0;
function er(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || oo, r = {
    uid: co++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Mr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Vi(n, i),
    emitsOptions: Ii(n, i),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Ul.bind(null, r), e.ce && e.ce(r), r;
}
let he = null;
const fo = () => he || ve;
let fs, ks;
{
  const e = ds(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((l) => l(r)) : i[0](r);
    };
  };
  fs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => he = s
  ), ks = t(
    "__VUE_SSR_SETTERS__",
    (s) => jt = s
  );
}
const Bt = (e) => {
  const t = he;
  return fs(e), e.scope.on(), () => {
    e.scope.off(), fs(t);
  };
}, Pn = () => {
  he && he.scope.off(), fs(null);
};
function tr(e) {
  return e.vnode.shapeFlag & 4;
}
let jt = !1;
function sr(e, t = !1, s = !1) {
  t && ks(t);
  const { props: n, children: i } = e.vnode, r = tr(e);
  Gl(e, n, r, t), Xl(e, i, s || t);
  const l = r ? uo(e, t) : void 0;
  return t && ks(!1), l;
}
function uo(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fl);
  const { setup: n } = s;
  if (n) {
    $e();
    const i = e.setupContext = n.length > 1 ? ho(e) : null, r = Bt(e), l = Kt(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), o = Jn(l);
    if (Ue(), r(), (o || e.sp) && !dt(e) && Ei(e), o) {
      if (l.then(Pn, Pn), t)
        return l.then((f) => {
          Fn(e, f);
        }).catch((f) => {
          bs(f, e, 0);
        });
      e.asyncDep = l;
    } else
      Fn(e, l);
  } else
    nr(e);
}
function Fn(e, t, s) {
  H(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : X(t) && (e.setupState = bi(t)), nr(e);
}
function nr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Ie);
  {
    const i = Bt(e);
    $e();
    try {
      Il(e);
    } finally {
      Ue(), i();
    }
  }
}
const ao = {
  get(e, t) {
    return le(e, "get", ""), e[t];
  }
};
function ho(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, ao),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ss(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bi(Yr(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Mt)
        return Mt[s](e);
    },
    has(t, s) {
      return s in t || s in Mt;
    }
  })) : e.proxy;
}
function po(e) {
  return H(e) && "__vccOpts" in e;
}
const go = (e, t) => tl(e, t, jt);
function cc(e, t, s) {
  try {
    cs(-1);
    const n = arguments.length;
    return n === 2 ? X(t) && !P(t) ? Lt(t) ? oe(e, null, [t]) : oe(e, t) : oe(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Lt(s) && (s = [s]), oe(e, t, s));
  } finally {
    cs(1);
  }
}
const mo = "3.5.26", _o = {
  createComponentInstance: er,
  setupComponent: sr,
  renderComponentRoot: es,
  setCurrentRenderingInstance: Ht,
  isVNode: Lt,
  normalizeVNode: ye
}, fc = _o;
let Gs;
const In = typeof window < "u" && window.trustedTypes;
if (In)
  try {
    Gs = /* @__PURE__ */ In.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ir = Gs ? (e) => Gs.createHTML(e) : (e) => e, bo = "http://www.w3.org/2000/svg", yo = "http://www.w3.org/1998/Math/MathML", Le = typeof document < "u" ? document : null, Dn = Le && /* @__PURE__ */ Le.createElement("template"), xo = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? Le.createElementNS(bo, e) : t === "mathml" ? Le.createElementNS(yo, e) : s ? Le.createElement(e, { is: s }) : Le.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
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
  insertStaticContent(e, t, s, n, i, r) {
    const l = s ? s.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), s), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      Dn.innerHTML = ir(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Dn.content;
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
}, So = /* @__PURE__ */ Symbol("_vtc");
function To(e, t, s) {
  const n = e[So];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const us = /* @__PURE__ */ Symbol("_vod"), rr = /* @__PURE__ */ Symbol("_vsh"), wo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[us] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : vt(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), vt(e, !0), n.enter(e)) : n.leave(e, () => {
      vt(e, !1);
    }) : vt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    vt(e, t);
  }
};
function vt(e, t) {
  e.style.display = t ? e[us] : "none", e[rr] = !t;
}
function vo() {
  wo.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Co = /* @__PURE__ */ Symbol(""), Eo = /(?:^|;)\s*display\s*:/;
function Ao(e, t, s) {
  const n = e.style, i = te(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (te(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          s[o] == null && ss(n, o, "");
        }
      else
        for (const l in t)
          s[l] == null && ss(n, l, "");
    for (const l in s)
      l === "display" && (r = !0), ss(n, l, s[l]);
  } else if (i) {
    if (t !== s) {
      const l = n[Co];
      l && (s += ";" + l), n.cssText = s, r = Eo.test(s);
    }
  } else t && e.removeAttribute("style");
  us in e && (e[us] = r ? n.display : "", e[rr] && (n.display = "none"));
}
const Hn = /\s*!important$/;
function ss(e, t, s) {
  if (P(s))
    s.forEach((n) => ss(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Mo(e, t);
    Hn.test(s) ? e.setProperty(
      Ze(n),
      s.replace(Hn, ""),
      "important"
    ) : e[n] = s;
  }
}
const Nn = ["Webkit", "Moz", "ms"], Ds = {};
function Mo(e, t) {
  const s = Ds[t];
  if (s)
    return s;
  let n = Xe(t);
  if (n !== "filter" && n in e)
    return Ds[t] = n;
  n = Zn(n);
  for (let i = 0; i < Nn.length; i++) {
    const r = Nn[i] + n;
    if (r in e)
      return Ds[t] = r;
  }
  return t;
}
const Ln = "http://www.w3.org/1999/xlink";
function jn(e, t, s, n, i, r = Tr(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Ln, t.slice(6, t.length)) : e.setAttributeNS(Ln, t, s) : s == null || r && !ti(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : De(s) ? String(s) : s
  );
}
function Vn(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? ir(s) : s);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const o = r === "OPTION" ? e.getAttribute("value") || "" : e.value, f = s == null ? (
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
    o === "boolean" ? s = ti(s) : s == null && o === "string" ? (s = "", l = !0) : o === "number" && (s = 0, l = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  l && e.removeAttribute(i || t);
}
function un(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Ro(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const $n = /* @__PURE__ */ Symbol("_vei");
function Oo(e, t, s, n, i = null) {
  const r = e[$n] || (e[$n] = {}), l = r[t];
  if (n && l)
    l.value = n;
  else {
    const [o, f] = Po(t);
    if (n) {
      const d = r[t] = Do(
        n,
        i
      );
      un(e, o, d, f);
    } else l && (Ro(e, o, l, f), r[t] = void 0);
  }
}
const Un = /(?:Once|Passive|Capture)$/;
function Po(e) {
  let t;
  if (Un.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Un); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ze(e.slice(2)), t];
}
let Hs = 0;
const Fo = /* @__PURE__ */ Promise.resolve(), Io = () => Hs || (Fo.then(() => Hs = 0), Hs = Date.now());
function Do(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    He(
      Ho(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Io(), s;
}
function Ho(e, t) {
  if (P(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const Kn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, No = (e, t, s, n, i, r) => {
  const l = i === "svg";
  t === "class" ? To(e, n, l) : t === "style" ? Ao(e, s, n) : $t(t) ? qs(t) || Oo(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Lo(e, t, n, l)) ? (Vn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && jn(e, t, n, l, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !te(n)) ? Vn(e, Xe(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), jn(e, t, n, l));
};
function Lo(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Kn(t) && H(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Kn(t) && te(s) ? !1 : t in e;
}
const as = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return P(t) ? (s) => Qt(t, s) : t;
}, gt = /* @__PURE__ */ Symbol("_assign"), jo = {}, Vo = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, s) {
    e[gt] = as(s), un(e, "change", () => {
      const n = e._modelValue, i = Vt(e), r = e.checked, l = e[gt];
      if (P(n)) {
        const o = ms(n, i), f = o !== -1;
        if (r && !f)
          l(n.concat(i));
        else if (!r && f) {
          const d = [...n];
          d.splice(o, 1), l(d);
        }
      } else if (nt(n)) {
        const o = new Set(n);
        r ? o.add(i) : o.delete(i), l(o);
      } else
        l(lr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Bn,
  beforeUpdate(e, t, s) {
    e[gt] = as(s), Bn(e, t, s);
  }
};
function Bn(e, { value: t, oldValue: s }, n) {
  e._modelValue = t;
  let i;
  if (P(t))
    i = ms(t, n.props.value) > -1;
  else if (nt(t))
    i = t.has(n.props.value);
  else {
    if (t === s) return;
    i = yt(t, lr(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const $o = {}, uc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: s } }, n) {
    const i = nt(t);
    un(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => s ? zn(Vt(l)) : Vt(l)
      );
      e[gt](
        e.multiple ? i ? new Set(r) : r : r[0]
      ), e._assigning = !0, xi(() => {
        e._assigning = !1;
      });
    }), e[gt] = as(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Wn(e, t);
  },
  beforeUpdate(e, t, s) {
    e[gt] = as(s);
  },
  updated(e, { value: t }) {
    e._assigning || Wn(e, t);
  }
};
function Wn(e, t) {
  const s = e.multiple, n = P(t);
  if (!(s && !n && !nt(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const l = e.options[i], o = Vt(l);
      if (s)
        if (n) {
          const f = typeof o;
          f === "string" || f === "number" ? l.selected = t.some((d) => String(d) === String(o)) : l.selected = ms(t, o) > -1;
        } else
          l.selected = t.has(o);
      else if (yt(Vt(l), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Vt(e) {
  return "_value" in e ? e._value : e.value;
}
function lr(e, t) {
  const s = t ? "_trueValue" : "_falseValue";
  return s in e ? e[s] : t;
}
function Uo() {
  jo.getSSRProps = ({ value: e }) => ({ value: e }), $o.getSSRProps = ({ value: e }, t) => {
    if (t.props && yt(t.props.value, e))
      return { checked: !0 };
  }, Vo.getSSRProps = ({ value: e }, t) => {
    if (P(e)) {
      if (t.props && ms(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (nt(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const or = /* @__PURE__ */ fe({ patchProp: No }, xo);
let Pt, kn = !1;
function Ko() {
  return Pt || (Pt = Ql(or));
}
function Bo() {
  return Pt = kn ? Pt : zl(or), kn = !0, Pt;
}
const ac = ((...e) => {
  const t = Ko().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = fr(n);
    if (!i) return;
    const r = t._component;
    !H(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const l = s(i, !1, cr(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), l;
  }, t;
}), hc = ((...e) => {
  const t = Bo().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = fr(n);
    if (i)
      return s(i, !0, cr(i));
  }, t;
});
function cr(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function fr(e) {
  return te(e) ? document.querySelector(e) : e;
}
let Gn = !1;
const dc = () => {
  Gn || (Gn = !0, Uo(), vo());
};
export {
  hc as $,
  fl as A,
  Jn as B,
  H as C,
  te as D,
  Be as E,
  we as F,
  zo as G,
  Qo as H,
  P as I,
  lo as J,
  qo as K,
  bt as L,
  $t as M,
  Ie as N,
  ps as O,
  Wo as P,
  Zo as Q,
  Go as R,
  Rt as S,
  st as T,
  Xo as U,
  Jo as V,
  ti as W,
  Yo as X,
  X as Y,
  ec as Z,
  dc as _,
  rc as a,
  Qi as b,
  go as c,
  nc as d,
  lc as e,
  oe as f,
  ic as g,
  cc as h,
  zi as i,
  oc as j,
  uc as k,
  wl as l,
  xi as m,
  gs as n,
  to as o,
  ko as p,
  ro as q,
  tc as r,
  wo as s,
  Ar as t,
  Qr as u,
  Vo as v,
  sc as w,
  ac as x,
  ds as y,
  fc as z
};
