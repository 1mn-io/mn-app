// @__NO_SIDE_EFFECTS__
function _t(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const Q = {}, ot = [], De = () => {
}, Kn = () => !1, Dt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Vs = (e) => e.startsWith("onUpdate:"), ce = Object.assign, Us = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, si = Object.prototype.hasOwnProperty, W = (e, t) => si.call(e, t), F = Array.isArray, ft = (e) => Nt(e) === "[object Map]", Ks = (e) => Nt(e) === "[object Set]", an = (e) => Nt(e) === "[object Date]", D = (e) => typeof e == "function", ne = (e) => typeof e == "string", Ne = (e) => typeof e == "symbol", Y = (e) => e !== null && typeof e == "object", Bn = (e) => (Y(e) || D(e)) && D(e.then) && D(e.catch), Wn = Object.prototype.toString, Nt = (e) => Wn.call(e), ni = (e) => Nt(e).slice(8, -1), kn = (e) => Nt(e) === "[object Object]", is = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ct = /* @__PURE__ */ _t(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ls = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, ri = /-\w/g, Ce = ls(
  (e) => e.replace(ri, (t) => t.slice(1).toUpperCase())
), ii = /\B([A-Z])/g, Ze = ls(
  (e) => e.replace(ii, "-$1").toLowerCase()
), os = ls((e) => e.charAt(0).toUpperCase() + e.slice(1)), bs = ls(
  (e) => e ? `on${os(e)}` : ""
), Ye = (e, t) => !Object.is(e, t), ys = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Gn = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, li = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let hn;
const fs = () => hn || (hn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bs(e) {
  if (F(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = ne(n) ? ui(n) : Bs(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ne(e) || Y(e))
    return e;
}
const oi = /;(?![^(]*\))/g, fi = /:([^]+)/, ci = /\/\*[^]*?\*\//g;
function ui(e) {
  const t = {};
  return e.replace(ci, "").split(oi).forEach((s) => {
    if (s) {
      const n = s.split(fi);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Wo(e) {
  if (!e) return "";
  if (ne(e)) return e;
  let t = "";
  for (const s in e) {
    const n = e[s];
    if (ne(n) || typeof n == "number") {
      const r = s.startsWith("--") ? s : Ze(s);
      t += `${r}:${n};`;
    }
  }
  return t;
}
function Ws(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (F(e))
    for (let s = 0; s < e.length; s++) {
      const n = Ws(e[s]);
      n && (t += n + " ");
    }
  else if (Y(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const ai = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", hi = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", ko = /* @__PURE__ */ _t(ai), Go = /* @__PURE__ */ _t(hi), qn = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", di = /* @__PURE__ */ _t(qn), qo = /* @__PURE__ */ _t(
  qn + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function Jn(e) {
  return !!e || e === "";
}
const pi = /[>/="'\u0009\u000a\u000c\u0020]/, xs = {};
function Jo(e) {
  if (xs.hasOwnProperty(e))
    return xs[e];
  const t = pi.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), xs[e] = !t;
}
const Yo = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function Xo(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const gi = /["'&<>]/;
function Zo(e) {
  const t = "" + e, s = gi.exec(t);
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
const _i = /^-?>|<!--|-->|--!>|<!-$/g;
function Qo(e) {
  return e.replace(_i, "");
}
function mi(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = cs(e[n], t[n]);
  return s;
}
function cs(e, t) {
  if (e === t) return !0;
  let s = an(e), n = an(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ne(e), n = Ne(t), s || n)
    return e === t;
  if (s = F(e), n = F(t), s || n)
    return s && n ? mi(e, t) : !1;
  if (s = Y(e), n = Y(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const l in e) {
      const o = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
      if (o && !c || !o && c || !cs(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function bi(e, t) {
  return e.findIndex((s) => cs(s, t));
}
const Yn = (e) => !!(e && e.__v_isRef === !0), yi = (e) => ne(e) ? e : e == null ? "" : F(e) || Y(e) && (e.toString === Wn || !D(e.toString)) ? Yn(e) ? yi(e.value) : JSON.stringify(e, Xn, 2) : String(e), Xn = (e, t) => Yn(t) ? Xn(e, t.value) : ft(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[vs(n, i) + " =>"] = r, s),
    {}
  )
} : Ks(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => vs(s))
} : Ne(t) ? vs(t) : Y(t) && !F(t) && !kn(t) ? String(t) : t, vs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ne(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
function zo(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let ge;
class xi {
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
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function vi() {
  return ge;
}
let Z;
const Ss = /* @__PURE__ */ new WeakSet();
class Zn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ge && ge.active && ge.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ss.has(this) && (Ss.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || zn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, dn(this), er(this);
    const t = Z, s = Me;
    Z = this, Me = !0;
    try {
      return this.fn();
    } finally {
      tr(this), Z = t, Me = s, this.flags &= -3;
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
    this.flags & 64 ? Ss.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Os(this) && this.run();
  }
  get dirty() {
    return Os(this);
  }
}
let Qn = 0, St, Tt;
function zn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Tt, Tt = e;
    return;
  }
  e.next = St, St = e;
}
function ks() {
  Qn++;
}
function Gs() {
  if (--Qn > 0)
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
function er(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function tr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), qs(n), Si(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function Os(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (sr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function sr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === At) || (e.globalVersion = At, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Os(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = Z, n = Me;
  Z = e, Me = !0;
  try {
    er(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ye(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Z = s, Me = n, tr(e), e.flags &= -3;
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
function Si(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Me = !0;
const nr = [];
function Ve() {
  nr.push(Me), Me = !1;
}
function Ue() {
  const e = nr.pop();
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
let At = 0;
class Ti {
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
      s = this.activeLink = new Ti(Z, this), Z.deps ? (s.prevDep = Z.depsTail, Z.depsTail.nextDep = s, Z.depsTail = s) : Z.deps = Z.depsTail = s, rr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = Z.depsTail, s.nextDep = void 0, Z.depsTail.nextDep = s, Z.depsTail = s, Z.deps === s && (Z.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, At++, this.notify(t);
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
function rr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        rr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Zt = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ Symbol(
  ""
), Ps = /* @__PURE__ */ Symbol(
  ""
), Mt = /* @__PURE__ */ Symbol(
  ""
);
function oe(e, t, s) {
  if (Me && Z) {
    let n = Zt.get(e);
    n || Zt.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new Js()), r.map = n, r.key = s), r.track();
  }
}
function $e(e, t, s, n, r, i) {
  const l = Zt.get(e);
  if (!l) {
    At++;
    return;
  }
  const o = (c) => {
    c && c.trigger();
  };
  if (ks(), t === "clear")
    l.forEach(o);
  else {
    const c = F(e), d = c && is(s);
    if (c && s === "length") {
      const a = Number(n);
      l.forEach((_, C) => {
        (C === "length" || C === Mt || !Ne(C) && C >= a) && o(_);
      });
    } else
      switch ((s !== void 0 || l.has(void 0)) && o(l.get(s)), d && o(l.get(Mt)), t) {
        case "add":
          c ? d && o(l.get("length")) : (o(l.get(tt)), ft(e) && o(l.get(Ps)));
          break;
        case "delete":
          c || (o(l.get(tt)), ft(e) && o(l.get(Ps)));
          break;
        case "set":
          ft(e) && o(l.get(tt));
          break;
      }
  }
  Gs();
}
function wi(e, t) {
  const s = Zt.get(e);
  return s && s.get(t);
}
function rt(e) {
  const t = B(e);
  return t === e ? t : (oe(t, "iterate", Mt), ve(e) ? t : t.map(Re));
}
function us(e) {
  return oe(e = B(e), "iterate", Mt), e;
}
function ke(e, t) {
  return Ke(e) ? Xe(e) ? pt(Re(t)) : pt(t) : Re(t);
}
const Ci = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ts(this, Symbol.iterator, (e) => ke(this, e));
  },
  concat(...e) {
    return rt(this).concat(
      ...e.map((t) => F(t) ? rt(t) : t)
    );
  },
  entries() {
    return Ts(this, "entries", (e) => (e[1] = ke(this, e[1]), e));
  },
  every(e, t) {
    return Le(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Le(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => ke(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Le(
      this,
      "find",
      e,
      t,
      (s) => ke(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return Le(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Le(
      this,
      "findLast",
      e,
      t,
      (s) => ke(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Le(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Le(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ws(this, "includes", e);
  },
  indexOf(...e) {
    return ws(this, "indexOf", e);
  },
  join(e) {
    return rt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ws(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Le(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return yt(this, "pop");
  },
  push(...e) {
    return yt(this, "push", e);
  },
  reduce(e, ...t) {
    return pn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return pn(this, "reduceRight", e, t);
  },
  shift() {
    return yt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Le(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return yt(this, "splice", e);
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
    return yt(this, "unshift", e);
  },
  values() {
    return Ts(this, "values", (e) => ke(this, e));
  }
};
function Ts(e, t, s) {
  const n = us(e), r = n[t]();
  return n !== e && !ve(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const Ei = Array.prototype;
function Le(e, t, s, n, r, i) {
  const l = us(e), o = l !== e && !ve(e), c = l[t];
  if (c !== Ei[t]) {
    const _ = c.apply(e, i);
    return o ? Re(_) : _;
  }
  let d = s;
  l !== e && (o ? d = function(_, C) {
    return s.call(this, ke(e, _), C, e);
  } : s.length > 2 && (d = function(_, C) {
    return s.call(this, _, C, e);
  }));
  const a = c.call(l, d, n);
  return o && r ? r(a) : a;
}
function pn(e, t, s, n) {
  const r = us(e);
  let i = s;
  return r !== e && (ve(e) ? s.length > 3 && (i = function(l, o, c) {
    return s.call(this, l, o, c, e);
  }) : i = function(l, o, c) {
    return s.call(this, l, ke(e, o), c, e);
  }), r[t](i, ...n);
}
function ws(e, t, s) {
  const n = B(e);
  oe(n, "iterate", Mt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && as(s[0]) ? (s[0] = B(s[0]), n[t](...s)) : r;
}
function yt(e, t, s = []) {
  Ve(), ks();
  const n = B(e)[t].apply(e, s);
  return Gs(), Ue(), n;
}
const Ai = /* @__PURE__ */ _t("__proto__,__v_isRef,__isVue"), ir = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ne)
);
function Mi(e) {
  Ne(e) || (e = String(e));
  const t = B(this);
  return oe(t, "has", e), t.hasOwnProperty(e);
}
class lr {
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
      return n === (r ? i ? ji : ur : i ? cr : fr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const l = F(t);
    if (!r) {
      let c;
      if (l && (c = Ci[s]))
        return c;
      if (s === "hasOwnProperty")
        return Mi;
    }
    const o = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ie(t) ? t : n
    );
    if ((Ne(s) ? ir.has(s) : Ai(s)) || (r || oe(t, "get", s), i))
      return o;
    if (ie(o)) {
      const c = l && is(s) ? o : o.value;
      return r && Y(c) ? Is(c) : c;
    }
    return Y(o) ? r ? Is(o) : Xs(o) : o;
  }
}
class or extends lr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const l = F(t) && is(s);
    if (!this._isShallow) {
      const d = Ke(i);
      if (!ve(n) && !Ke(n) && (i = B(i), n = B(n)), !l && ie(i) && !ie(n))
        return d || (i.value = n), !0;
    }
    const o = l ? Number(s) < t.length : W(t, s), c = Reflect.set(
      t,
      s,
      n,
      ie(t) ? t : r
    );
    return t === B(r) && (o ? Ye(n, i) && $e(t, "set", s, n) : $e(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = W(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && $e(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ne(s) || !ir.has(s)) && oe(t, "has", s), n;
  }
  ownKeys(t) {
    return oe(
      t,
      "iterate",
      F(t) ? "length" : tt
    ), Reflect.ownKeys(t);
  }
}
class Ri extends lr {
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
const Oi = /* @__PURE__ */ new or(), Pi = /* @__PURE__ */ new Ri(), Fi = /* @__PURE__ */ new or(!0);
const Fs = (e) => e, Vt = (e) => Reflect.getPrototypeOf(e);
function Ii(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = B(r), l = ft(i), o = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, d = r[e](...n), a = s ? Fs : t ? pt : Re;
    return !t && oe(
      i,
      "iterate",
      c ? Ps : tt
    ), {
      // iterator protocol
      next() {
        const { value: _, done: C } = d.next();
        return C ? { value: _, done: C } : {
          value: o ? [a(_[0]), a(_[1])] : a(_),
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
function Ut(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Di(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, l = B(i), o = B(r);
      e || (Ye(r, o) && oe(l, "get", r), oe(l, "get", o));
      const { has: c } = Vt(l), d = t ? Fs : e ? pt : Re;
      if (c.call(l, r))
        return d(i.get(r));
      if (c.call(l, o))
        return d(i.get(o));
      i !== l && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && oe(B(r), "iterate", tt), r.size;
    },
    has(r) {
      const i = this.__v_raw, l = B(i), o = B(r);
      return e || (Ye(r, o) && oe(l, "has", r), oe(l, "has", o)), r === o ? i.has(r) : i.has(r) || i.has(o);
    },
    forEach(r, i) {
      const l = this, o = l.__v_raw, c = B(o), d = t ? Fs : e ? pt : Re;
      return !e && oe(c, "iterate", tt), o.forEach((a, _) => r.call(i, d(a), d(_), l));
    }
  };
  return ce(
    s,
    e ? {
      add: Ut("add"),
      set: Ut("set"),
      delete: Ut("delete"),
      clear: Ut("clear")
    } : {
      add(r) {
        !t && !ve(r) && !Ke(r) && (r = B(r));
        const i = B(this);
        return Vt(i).has.call(i, r) || (i.add(r), $e(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !ve(i) && !Ke(i) && (i = B(i));
        const l = B(this), { has: o, get: c } = Vt(l);
        let d = o.call(l, r);
        d || (r = B(r), d = o.call(l, r));
        const a = c.call(l, r);
        return l.set(r, i), d ? Ye(i, a) && $e(l, "set", r, i) : $e(l, "add", r, i), this;
      },
      delete(r) {
        const i = B(this), { has: l, get: o } = Vt(i);
        let c = l.call(i, r);
        c || (r = B(r), c = l.call(i, r)), o && o.call(i, r);
        const d = i.delete(r);
        return c && $e(i, "delete", r, void 0), d;
      },
      clear() {
        const r = B(this), i = r.size !== 0, l = r.clear();
        return i && $e(
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
    s[r] = Ii(r, e, t);
  }), s;
}
function Ys(e, t) {
  const s = Di(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    W(s, r) && r in n ? s : n,
    r,
    i
  );
}
const Ni = {
  get: /* @__PURE__ */ Ys(!1, !1)
}, Hi = {
  get: /* @__PURE__ */ Ys(!1, !0)
}, Li = {
  get: /* @__PURE__ */ Ys(!0, !1)
};
const fr = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakMap(), ji = /* @__PURE__ */ new WeakMap();
function $i(e) {
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
function Vi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $i(ni(e));
}
function Xs(e) {
  return Ke(e) ? e : Zs(
    e,
    !1,
    Oi,
    Ni,
    fr
  );
}
function Ui(e) {
  return Zs(
    e,
    !1,
    Fi,
    Hi,
    cr
  );
}
function Is(e) {
  return Zs(
    e,
    !0,
    Pi,
    Li,
    ur
  );
}
function Zs(e, t, s, n, r) {
  if (!Y(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Vi(e);
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
function Xe(e) {
  return Ke(e) ? Xe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ke(e) {
  return !!(e && e.__v_isReadonly);
}
function ve(e) {
  return !!(e && e.__v_isShallow);
}
function as(e) {
  return e ? !!e.__v_raw : !1;
}
function B(e) {
  const t = e && e.__v_raw;
  return t ? B(t) : e;
}
function Ki(e) {
  return !W(e, "__v_skip") && Object.isExtensible(e) && Gn(e, "__v_skip", !0), e;
}
const Re = (e) => Y(e) ? Xs(e) : e, pt = (e) => Y(e) ? Is(e) : e;
function ie(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Bi(e) {
  return Wi(e, !1);
}
function Wi(e, t) {
  return ie(e) ? e : new ki(e, t);
}
class ki {
  constructor(t, s) {
    this.dep = new Js(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : B(t), this._value = s ? t : Re(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || ve(t) || Ke(t);
    t = n ? t : B(t), Ye(t, s) && (this._rawValue = t, this._value = n ? t : Re(t), this.dep.trigger());
  }
}
function ef(e) {
  e.dep && e.dep.trigger();
}
function ar(e) {
  return ie(e) ? e.value : e;
}
const Gi = {
  get: (e, t, s) => t === "__v_raw" ? e : ar(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return ie(r) && !ie(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function hr(e) {
  return Xe(e) ? e : new Proxy(e, Gi);
}
class qi {
  constructor(t, s, n) {
    this._object = t, this._key = s, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._raw = B(t);
    let r = !0, i = t;
    if (!F(t) || !is(String(s)))
      do
        r = !as(i) || ve(i);
      while (r && (i = i.__v_raw));
    this._shallow = r;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = ar(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && ie(this._raw[this._key])) {
      const s = this._object[this._key];
      if (ie(s)) {
        s.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return wi(this._raw, this._key);
  }
}
class Ji {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function tf(e, t, s) {
  return ie(e) ? e : D(e) ? new Ji(e) : Y(e) && arguments.length > 1 ? Yi(e, t, s) : Bi(e);
}
function Yi(e, t, s) {
  return new qi(e, t, s);
}
class Xi {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Js(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = At - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Z !== this)
      return zn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return sr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Zi(e, t, s = !1) {
  let n, r;
  return D(e) ? n = e : (n = e.get, r = e.set), new Xi(n, r, s);
}
const Kt = {}, Qt = /* @__PURE__ */ new WeakMap();
let et;
function Qi(e, t = !1, s = et) {
  if (s) {
    let n = Qt.get(s);
    n || Qt.set(s, n = []), n.push(e);
  }
}
function zi(e, t, s = Q) {
  const { immediate: n, deep: r, once: i, scheduler: l, augmentJob: o, call: c } = s, d = (g) => r ? g : ve(g) || r === !1 || r === 0 ? Je(g, 1) : Je(g);
  let a, _, C, E, H = !1, j = !1;
  if (ie(e) ? (_ = () => e.value, H = ve(e)) : Xe(e) ? (_ = () => d(e), H = !0) : F(e) ? (j = !0, H = e.some((g) => Xe(g) || ve(g)), _ = () => e.map((g) => {
    if (ie(g))
      return g.value;
    if (Xe(g))
      return d(g);
    if (D(g))
      return c ? c(g, 2) : g();
  })) : D(e) ? t ? _ = c ? () => c(e, 2) : e : _ = () => {
    if (C) {
      Ve();
      try {
        C();
      } finally {
        Ue();
      }
    }
    const g = et;
    et = a;
    try {
      return c ? c(e, 3, [E]) : e(E);
    } finally {
      et = g;
    }
  } : _ = De, t && r) {
    const g = _, A = r === !0 ? 1 / 0 : r;
    _ = () => Je(g(), A);
  }
  const re = vi(), V = () => {
    a.stop(), re && re.active && Us(re.effects, a);
  };
  if (i && t) {
    const g = t;
    t = (...A) => {
      g(...A), V();
    };
  }
  let k = j ? new Array(e.length).fill(Kt) : Kt;
  const p = (g) => {
    if (!(!(a.flags & 1) || !a.dirty && !g))
      if (t) {
        const A = a.run();
        if (r || H || (j ? A.some((K, L) => Ye(K, k[L])) : Ye(A, k))) {
          C && C();
          const K = et;
          et = a;
          try {
            const L = [
              A,
              // pass undefined as the old value when it's changed for the first time
              k === Kt ? void 0 : j && k[0] === Kt ? [] : k,
              E
            ];
            k = A, c ? c(t, 3, L) : (
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
  return o && o(p), a = new Zn(_), a.scheduler = l ? () => l(p, !1) : p, E = (g) => Qi(g, !1, a), C = a.onStop = () => {
    const g = Qt.get(a);
    if (g) {
      if (c)
        c(g, 4);
      else
        for (const A of g) A();
      Qt.delete(a);
    }
  }, t ? n ? p(!0) : k = a.run() : l ? l(p.bind(null, !0), !0) : a.run(), V.pause = a.pause.bind(a), V.resume = a.resume.bind(a), V.stop = V, V;
}
function Je(e, t = 1 / 0, s) {
  if (t <= 0 || !Y(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, ie(e))
    Je(e.value, t, s);
  else if (F(e))
    for (let n = 0; n < e.length; n++)
      Je(e[n], t, s);
  else if (Ks(e) || ft(e))
    e.forEach((n) => {
      Je(n, t, s);
    });
  else if (kn(e)) {
    for (const n in e)
      Je(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Je(e[n], t, s);
  }
  return e;
}
function Ht(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    hs(r, t, s);
  }
}
function He(e, t, s, n) {
  if (D(e)) {
    const r = Ht(e, t, s, n);
    return r && Bn(r) && r.catch((i) => {
      hs(i, t, s);
    }), r;
  }
  if (F(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(He(e[i], t, s, n));
    return r;
  }
}
function hs(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || Q;
  if (t) {
    let o = t.parent;
    const c = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let _ = 0; _ < a.length; _++)
          if (a[_](e, c, d) === !1)
            return;
      }
      o = o.parent;
    }
    if (i) {
      Ve(), Ht(i, null, 10, [
        e,
        c,
        d
      ]), Ue();
      return;
    }
  }
  el(e, s, r, n, l);
}
function el(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ae = [];
let Fe = -1;
const ut = [];
let Ge = null, lt = 0;
const dr = /* @__PURE__ */ Promise.resolve();
let zt = null;
function tl(e) {
  const t = zt || dr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sl(e) {
  let t = Fe + 1, s = ae.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = ae[n], i = Rt(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Qs(e) {
  if (!(e.flags & 1)) {
    const t = Rt(e), s = ae[ae.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Rt(s) ? ae.push(e) : ae.splice(sl(t), 0, e), e.flags |= 1, pr();
  }
}
function pr() {
  zt || (zt = dr.then(gr));
}
function nl(e) {
  F(e) ? ut.push(...e) : Ge && e.id === -1 ? Ge.splice(lt + 1, 0, e) : e.flags & 1 || (ut.push(e), e.flags |= 1), pr();
}
function gn(e, t, s = Fe + 1) {
  for (; s < ae.length; s++) {
    const n = ae[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ae.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function es(e) {
  if (ut.length) {
    const t = [...new Set(ut)].sort(
      (s, n) => Rt(s) - Rt(n)
    );
    if (ut.length = 0, Ge) {
      Ge.push(...t);
      return;
    }
    for (Ge = t, lt = 0; lt < Ge.length; lt++) {
      const s = Ge[lt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ge = null, lt = 0;
  }
}
const Rt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function gr(e) {
  try {
    for (Fe = 0; Fe < ae.length; Fe++) {
      const t = ae[Fe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ht(
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
    Fe = -1, ae.length = 0, es(), zt = null, (ae.length || ut.length) && gr();
  }
}
let Ae = null, _r = null;
function Ot(e) {
  const t = Ae;
  return Ae = e, _r = e && e.type.__scopeId || null, t;
}
function rl(e, t = Ae, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && ns(-1);
    const i = Ot(t);
    let l;
    try {
      l = e(...r);
    } finally {
      Ot(i), n._d && ns(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ie(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const o = r[l];
    i && (o.oldValue = i[l].value);
    let c = o.dir[n];
    c && (Ve(), He(c, s, 8, [
      e.el,
      o,
      e,
      t
    ]), Ue());
  }
}
function il(e, t) {
  if (fe) {
    let s = fe.provides;
    const n = fe.parent && fe.parent.provides;
    n === s && (s = fe.provides = Object.create(n)), s[e] = t;
  }
}
function Gt(e, t, s = !1) {
  const n = fo();
  if (n || dt) {
    let r = dt ? dt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && D(t) ? t.call(n && n.proxy) : t;
  }
}
const ll = /* @__PURE__ */ Symbol.for("v-scx"), ol = () => Gt(ll);
function sf(e, t) {
  return zs(e, null, t);
}
function Cs(e, t, s) {
  return zs(e, t, s);
}
function zs(e, t, s = Q) {
  const { immediate: n, deep: r, flush: i, once: l } = s, o = ce({}, s), c = t && n || !t && i !== "post";
  let d;
  if (It) {
    if (i === "sync") {
      const E = ol();
      d = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!c) {
      const E = () => {
      };
      return E.stop = De, E.resume = De, E.pause = De, E;
    }
  }
  const a = fe;
  o.call = (E, H, j) => He(E, a, H, j);
  let _ = !1;
  i === "post" ? o.scheduler = (E) => {
    be(E, a && a.suspense);
  } : i !== "sync" && (_ = !0, o.scheduler = (E, H) => {
    H ? E() : Qs(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), _ && (E.flags |= 2, a && (E.id = a.uid, E.i = a));
  };
  const C = zi(e, t, o);
  return It && (d ? d.push(C) : c && C()), C;
}
function fl(e, t, s) {
  const n = this.proxy, r = ne(e) ? e.includes(".") ? mr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  D(t) ? i = t : (i = t.handler, s = t);
  const l = Lt(this), o = zs(r, i.bind(n), s);
  return l(), o;
}
function mr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const cl = /* @__PURE__ */ Symbol("_vte"), ul = (e) => e.__isTeleport, al = /* @__PURE__ */ Symbol("_leaveCb");
function en(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, en(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function nf(e, t) {
  return D(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function br(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ts = /* @__PURE__ */ new WeakMap();
function at(e, t, s, n, r = !1) {
  if (F(e)) {
    e.forEach(
      (H, j) => at(
        H,
        t && (F(t) ? t[j] : t),
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
  const i = n.shapeFlag & 4 ? rn(n.component) : n.el, l = r ? null : i, { i: o, r: c } = e, d = t && t.r, a = o.refs === Q ? o.refs = {} : o.refs, _ = o.setupState, C = B(_), E = _ === Q ? Kn : (H) => W(C, H);
  if (d != null && d !== c) {
    if (_n(t), ne(d))
      a[d] = null, E(d) && (_[d] = null);
    else if (ie(d)) {
      d.value = null;
      const H = t;
      H.k && (a[H.k] = null);
    }
  }
  if (D(c))
    Ht(c, o, 12, [l, a]);
  else {
    const H = ne(c), j = ie(c);
    if (H || j) {
      const re = () => {
        if (e.f) {
          const V = H ? E(c) ? _[c] : a[c] : c.value;
          if (r)
            F(V) && Us(V, i);
          else if (F(V))
            V.includes(i) || V.push(i);
          else if (H)
            a[c] = [i], E(c) && (_[c] = a[c]);
          else {
            const k = [i];
            c.value = k, e.k && (a[e.k] = k);
          }
        } else H ? (a[c] = l, E(c) && (_[c] = l)) : j && (c.value = l, e.k && (a[e.k] = l));
      };
      if (l) {
        const V = () => {
          re(), ts.delete(e);
        };
        V.id = -1, ts.set(e, V), be(V, s);
      } else
        _n(e), re();
    }
  }
}
function _n(e) {
  const t = ts.get(e);
  t && (t.flags |= 8, ts.delete(e));
}
let mn = !1;
const it = () => {
  mn || (console.error("Hydration completed but contains mismatches."), mn = !0);
}, hl = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", dl = (e) => e.namespaceURI.includes("MathML"), Bt = (e) => {
  if (e.nodeType === 1) {
    if (hl(e)) return "svg";
    if (dl(e)) return "mathml";
  }
}, Wt = (e) => e.nodeType === 8;
function pl(e) {
  const {
    mt: t,
    p: s,
    o: {
      patchProp: n,
      createText: r,
      nextSibling: i,
      parentNode: l,
      remove: o,
      insert: c,
      createComment: d
    }
  } = e, a = (p, g) => {
    if (!g.hasChildNodes()) {
      s(null, p, g), es(), g._vnode = p;
      return;
    }
    _(g.firstChild, p, null, null, null), es(), g._vnode = p;
  }, _ = (p, g, A, K, L, G = !1) => {
    G = G || !!g.dynamicChildren;
    const J = Wt(p) && p.data === "[", N = () => j(
      p,
      g,
      A,
      K,
      L,
      J
    ), { type: z, ref: te, shapeFlag: se, patchFlag: Se } = g;
    let de = p.nodeType;
    g.el = p, Se === -2 && (G = !1, g.dynamicChildren = null);
    let P = null;
    switch (z) {
      case st:
        de !== 3 ? g.children === "" ? (c(g.el = r(""), l(p), p), P = p) : P = N() : (p.data !== g.children && (it(), p.data = g.children), P = i(p));
        break;
      case Be:
        k(p) ? (P = i(p), V(
          g.el = p.content.firstChild,
          p,
          A
        )) : de !== 8 || J ? P = N() : P = i(p);
        break;
      case Jt:
        if (J && (p = i(p), de = p.nodeType), de === 1 || de === 3) {
          P = p;
          const $ = !g.children.length;
          for (let M = 0; M < g.staticCount; M++)
            $ && (g.children += P.nodeType === 1 ? P.outerHTML : P.data), M === g.staticCount - 1 && (g.anchor = P), P = i(P);
          return J ? i(P) : P;
        } else
          N();
        break;
      case we:
        J ? P = H(
          p,
          g,
          A,
          K,
          L,
          G
        ) : P = N();
        break;
      default:
        if (se & 1)
          (de !== 1 || g.type.toLowerCase() !== p.tagName.toLowerCase()) && !k(p) ? P = N() : P = C(
            p,
            g,
            A,
            K,
            L,
            G
          );
        else if (se & 6) {
          g.slotScopeIds = L;
          const $ = l(p);
          if (J ? P = re(p) : Wt(p) && p.data === "teleport start" ? P = re(p, p.data, "teleport end") : P = i(p), t(
            g,
            $,
            null,
            A,
            K,
            Bt($),
            G
          ), ht(g) && !g.type.__asyncResolved) {
            let M;
            J ? (M = he(we), M.anchor = P ? P.previousSibling : $.lastChild) : M = p.nodeType === 3 ? kr("") : he("div"), M.el = p, g.component.subTree = M;
          }
        } else se & 64 ? de !== 8 ? P = N() : P = g.type.hydrate(
          p,
          g,
          A,
          K,
          L,
          G,
          e,
          E
        ) : se & 128 && (P = g.type.hydrate(
          p,
          g,
          A,
          K,
          Bt(l(p)),
          L,
          G,
          e,
          _
        ));
    }
    return te != null && at(te, null, K, g), P;
  }, C = (p, g, A, K, L, G) => {
    G = G || !!g.dynamicChildren;
    const { type: J, props: N, patchFlag: z, shapeFlag: te, dirs: se, transition: Se } = g, de = J === "input" || J === "option";
    if (de || z !== -1) {
      se && Ie(g, null, A, "created");
      let P = !1;
      if (k(p)) {
        P = Hr(
          null,
          // no need check parentSuspense in hydration
          Se
        ) && A && A.vnode.props && A.vnode.props.appear;
        const M = p.content.firstChild;
        if (P) {
          const ee = M.getAttribute("class");
          ee && (M.$cls = ee), Se.beforeEnter(M);
        }
        V(M, p, A), g.el = p = M;
      }
      if (te & 16 && // skip if element has innerHTML / textContent
      !(N && (N.innerHTML || N.textContent))) {
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
          kt(
            p,
            1
            /* CHILDREN */
          ) || it();
          const ee = M;
          M = M.nextSibling, o(ee);
        }
      } else if (te & 8) {
        let M = g.children;
        M[0] === `
` && (p.tagName === "PRE" || p.tagName === "TEXTAREA") && (M = M.slice(1));
        const { textContent: ee } = p;
        ee !== M && // innerHTML normalize \r\n or \r into a single \n in the DOM
        ee !== M.replace(/\r\n|\r/g, `
`) && (kt(
          p,
          0
          /* TEXT */
        ) || it(), p.textContent = g.children);
      }
      if (N) {
        if (de || !G || z & 48) {
          const M = p.tagName.includes("-");
          for (const ee in N)
            (de && (ee.endsWith("value") || ee === "indeterminate") || Dt(ee) && !ct(ee) || // force hydrate v-bind with .prop modifiers
            ee[0] === "." || M) && n(p, ee, null, N[ee], void 0, A);
        } else if (N.onClick)
          n(
            p,
            "onClick",
            null,
            N.onClick,
            void 0,
            A
          );
        else if (z & 4 && Xe(N.style))
          for (const M in N.style) N.style[M];
      }
      let $;
      ($ = N && N.onVnodeBeforeMount) && Te($, A, g), se && Ie(g, null, A, "beforeMount"), (($ = N && N.onVnodeMounted) || se || P) && Ur(() => {
        $ && Te($, A, g), P && Se.enter(p), se && Ie(g, null, A, "mounted");
      }, K);
    }
    return p.nextSibling;
  }, E = (p, g, A, K, L, G, J) => {
    J = J || !!g.dynamicChildren;
    const N = g.children, z = N.length;
    for (let te = 0; te < z; te++) {
      const se = J ? N[te] : N[te] = ye(N[te]), Se = se.type === st;
      p ? (Se && !J && te + 1 < z && ye(N[te + 1]).type === st && (c(
        r(
          p.data.slice(se.children.length)
        ),
        A,
        i(p)
      ), p.data = se.children), p = _(
        p,
        se,
        K,
        L,
        G,
        J
      )) : Se && !se.children ? c(se.el = r(""), A) : (kt(
        A,
        1
        /* CHILDREN */
      ) || it(), s(
        null,
        se,
        A,
        null,
        K,
        L,
        Bt(A),
        G
      ));
    }
    return p;
  }, H = (p, g, A, K, L, G) => {
    const { slotScopeIds: J } = g;
    J && (L = L ? L.concat(J) : J);
    const N = l(p), z = E(
      i(p),
      g,
      N,
      A,
      K,
      L,
      G
    );
    return z && Wt(z) && z.data === "]" ? i(g.anchor = z) : (it(), c(g.anchor = d("]"), N, z), z);
  }, j = (p, g, A, K, L, G) => {
    if (kt(
      p.parentElement,
      1
      /* CHILDREN */
    ) || it(), g.el = null, G) {
      const z = re(p);
      for (; ; ) {
        const te = i(p);
        if (te && te !== z)
          o(te);
        else
          break;
      }
    }
    const J = i(p), N = l(p);
    return o(p), s(
      null,
      g,
      N,
      J,
      A,
      K,
      Bt(N),
      L
    ), A && (A.vnode.el = g.el, Er(A, g.el)), J;
  }, re = (p, g = "[", A = "]") => {
    let K = 0;
    for (; p; )
      if (p = i(p), p && Wt(p) && (p.data === g && K++, p.data === A)) {
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
  }, k = (p) => p.nodeType === 1 && p.tagName === "TEMPLATE";
  return [a, _];
}
const bn = "data-allow-mismatch", gl = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function kt(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(bn); )
      e = e.parentElement;
  const s = e && e.getAttribute(bn);
  if (s == null)
    return !1;
  if (s === "")
    return !0;
  {
    const n = s.split(",");
    return t === 0 && n.includes("children") ? !0 : n.includes(gl[t]);
  }
}
fs().requestIdleCallback;
fs().cancelIdleCallback;
const ht = (e) => !!e.type.__asyncLoader, yr = (e) => e.type.__isKeepAlive;
function _l(e, t) {
  xr(e, "a", t);
}
function ml(e, t) {
  xr(e, "da", t);
}
function xr(e, t, s = fe) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ds(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      yr(r.parent.vnode) && bl(n, t, s, r), r = r.parent;
  }
}
function bl(e, t, s, n) {
  const r = ds(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  vr(() => {
    Us(n[t], r);
  }, s);
}
function ds(e, t, s = fe, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...l) => {
      Ve();
      const o = Lt(s), c = He(t, s, e, l);
      return o(), Ue(), c;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const We = (e) => (t, s = fe) => {
  (!It || e === "sp") && ds(e, (...n) => t(...n), s);
}, yl = We("bm"), xl = We("m"), vl = We(
  "bu"
), Sl = We("u"), Tl = We(
  "bum"
), vr = We("um"), wl = We(
  "sp"
), Cl = We("rtg"), El = We("rtc");
function Al(e, t = fe) {
  ds("ec", e, t);
}
const Ml = "components";
function rf(e, t) {
  return Ol(Ml, e, !0, t) || e;
}
const Rl = /* @__PURE__ */ Symbol.for("v-ndc");
function Ol(e, t, s = !0, n = !1) {
  const r = Ae || fe;
  if (r) {
    const i = r.type;
    {
      const o = ho(
        i,
        !1
      );
      if (o && (o === t || o === Ce(t) || o === os(Ce(t))))
        return i;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      yn(r[e] || i[e], t) || // global registration
      yn(r.appContext[e], t)
    );
    return !l && n ? i : l;
  }
}
function yn(e, t) {
  return e && (e[t] || e[Ce(t)] || e[os(Ce(t))]);
}
function lf(e, t, s, n) {
  let r;
  const i = s, l = F(e);
  if (l || ne(e)) {
    const o = l && Xe(e);
    let c = !1, d = !1;
    o && (c = !ve(e), d = Ke(e), e = us(e)), r = new Array(e.length);
    for (let a = 0, _ = e.length; a < _; a++)
      r[a] = t(
        c ? d ? pt(Re(e[a])) : Re(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, i);
  } else if (Y(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (o, c) => t(o, c, void 0, i)
      );
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let c = 0, d = o.length; c < d; c++) {
        const a = o[c];
        r[c] = t(e[a], a, c, i);
      }
    }
  else
    r = [];
  return r;
}
const Ds = (e) => e ? qr(e) ? rn(e) : Ds(e.parent) : null, wt = (
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
    $parent: (e) => Ds(e.parent),
    $root: (e) => Ds(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Tr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = tl.bind(e.proxy)),
    $watch: (e) => fl.bind(e)
  })
), Es = (e, t) => e !== Q && !e.__isScriptSetup && W(e, t), Pl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: l, type: o, appContext: c } = e;
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
        if (Es(n, t))
          return l[t] = 1, n[t];
        if (r !== Q && W(r, t))
          return l[t] = 2, r[t];
        if (W(i, t))
          return l[t] = 3, i[t];
        if (s !== Q && W(s, t))
          return l[t] = 4, s[t];
        Ns && (l[t] = 0);
      }
    }
    const d = wt[t];
    let a, _;
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
      _ = c.config.globalProperties, W(_, t)
    )
      return _[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return Es(r, t) ? (r[t] = s, !0) : n !== Q && W(n, t) ? (n[t] = s, !0) : W(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: l }
  }, o) {
    let c;
    return !!(s[o] || e !== Q && o[0] !== "$" && W(e, o) || Es(t, o) || W(i, o) || W(n, o) || W(wt, o) || W(r.config.globalProperties, o) || (c = l.__cssModules) && c[o]);
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
let Ns = !0;
function Fl(e) {
  const t = Tr(e), s = e.proxy, n = e.ctx;
  Ns = !1, t.beforeCreate && vn(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: l,
    watch: o,
    provide: c,
    inject: d,
    // lifecycle
    created: a,
    beforeMount: _,
    mounted: C,
    beforeUpdate: E,
    updated: H,
    activated: j,
    deactivated: re,
    beforeDestroy: V,
    beforeUnmount: k,
    destroyed: p,
    unmounted: g,
    render: A,
    renderTracked: K,
    renderTriggered: L,
    errorCaptured: G,
    serverPrefetch: J,
    // public API
    expose: N,
    inheritAttrs: z,
    // assets
    components: te,
    directives: se,
    filters: Se
  } = t;
  if (d && Il(d, n, null), l)
    for (const $ in l) {
      const M = l[$];
      D(M) && (n[$] = M.bind(s));
    }
  if (r) {
    const $ = r.call(s, s);
    Y($) && (e.data = Xs($));
  }
  if (Ns = !0, i)
    for (const $ in i) {
      const M = i[$], ee = D(M) ? M.bind(s, s) : D(M.get) ? M.get.bind(s, s) : De, jt = !D(M) && D(M.set) ? M.set.bind(s) : De, Qe = go({
        get: ee,
        set: jt
      });
      Object.defineProperty(n, $, {
        enumerable: !0,
        configurable: !0,
        get: () => Qe.value,
        set: (Oe) => Qe.value = Oe
      });
    }
  if (o)
    for (const $ in o)
      Sr(o[$], n, s, $);
  if (c) {
    const $ = D(c) ? c.call(s) : c;
    Reflect.ownKeys($).forEach((M) => {
      il(M, $[M]);
    });
  }
  a && vn(a, e, "c");
  function P($, M) {
    F(M) ? M.forEach((ee) => $(ee.bind(s))) : M && $(M.bind(s));
  }
  if (P(yl, _), P(xl, C), P(vl, E), P(Sl, H), P(_l, j), P(ml, re), P(Al, G), P(El, K), P(Cl, L), P(Tl, k), P(vr, g), P(wl, J), F(N))
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
  A && e.render === De && (e.render = A), z != null && (e.inheritAttrs = z), te && (e.components = te), se && (e.directives = se), J && br(e);
}
function Il(e, t, s = De) {
  F(e) && (e = Hs(e));
  for (const n in e) {
    const r = e[n];
    let i;
    Y(r) ? "default" in r ? i = Gt(
      r.from || n,
      r.default,
      !0
    ) : i = Gt(r.from || n) : i = Gt(r), ie(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[n] = i;
  }
}
function vn(e, t, s) {
  He(
    F(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Sr(e, t, s, n) {
  let r = n.includes(".") ? mr(s, n) : () => s[n];
  if (ne(e)) {
    const i = t[e];
    D(i) && Cs(r, i);
  } else if (D(e))
    Cs(r, e.bind(s));
  else if (Y(e))
    if (F(e))
      e.forEach((i) => Sr(i, t, s, n));
    else {
      const i = D(e.handler) ? e.handler.bind(s) : t[e.handler];
      D(i) && Cs(r, i, e);
    }
}
function Tr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, o = i.get(t);
  let c;
  return o ? c = o : !r.length && !s && !n ? c = t : (c = {}, r.length && r.forEach(
    (d) => ss(c, d, l, !0)
  ), ss(c, t, l)), Y(t) && i.set(t, c), c;
}
function ss(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && ss(e, i, s, !0), r && r.forEach(
    (l) => ss(e, l, s, !0)
  );
  for (const l in t)
    if (!(n && l === "expose")) {
      const o = Dl[l] || s && s[l];
      e[l] = o ? o(e[l], t[l]) : t[l];
    }
  return e;
}
const Dl = {
  data: Sn,
  props: Tn,
  emits: Tn,
  // objects
  methods: vt,
  computed: vt,
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
  components: vt,
  directives: vt,
  // watch
  watch: Hl,
  // provide / inject
  provide: Sn,
  inject: Nl
};
function Sn(e, t) {
  return t ? e ? function() {
    return ce(
      D(e) ? e.call(this, this) : e,
      D(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Nl(e, t) {
  return vt(Hs(e), Hs(t));
}
function Hs(e) {
  if (F(e)) {
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
function vt(e, t) {
  return e ? ce(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Tn(e, t) {
  return e ? F(e) && F(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ce(
    /* @__PURE__ */ Object.create(null),
    xn(e),
    xn(t ?? {})
  ) : t;
}
function Hl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ce(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = ue(e[n], t[n]);
  return s;
}
function wr() {
  return {
    app: null,
    config: {
      isNativeTag: Kn,
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
let Ll = 0;
function jl(e, t) {
  return function(n, r = null) {
    D(n) || (n = ce({}, n)), r != null && !Y(r) && (r = null);
    const i = wr(), l = /* @__PURE__ */ new WeakSet(), o = [];
    let c = !1;
    const d = i.app = {
      _uid: Ll++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: _o,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ..._) {
        return l.has(a) || (a && D(a.install) ? (l.add(a), a.install(d, ..._)) : D(a) && (l.add(a), a(d, ..._))), d;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), d;
      },
      component(a, _) {
        return _ ? (i.components[a] = _, d) : i.components[a];
      },
      directive(a, _) {
        return _ ? (i.directives[a] = _, d) : i.directives[a];
      },
      mount(a, _, C) {
        if (!c) {
          const E = d._ceVNode || he(n, r);
          return E.appContext = i, C === !0 ? C = "svg" : C === !1 && (C = void 0), _ && t ? t(E, a) : e(E, a, C), c = !0, d._container = a, a.__vue_app__ = d, rn(E.component);
        }
      },
      onUnmount(a) {
        o.push(a);
      },
      unmount() {
        c && (He(
          o,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(a, _) {
        return i.provides[a] = _, d;
      },
      runWithContext(a) {
        const _ = dt;
        dt = d;
        try {
          return a();
        } finally {
          dt = _;
        }
      }
    };
    return d;
  };
}
let dt = null;
const $l = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ce(t)}Modifiers`] || e[`${Ze(t)}Modifiers`];
function Vl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Q;
  let r = s;
  const i = t.startsWith("update:"), l = i && $l(n, t.slice(7));
  l && (l.trim && (r = s.map((a) => ne(a) ? a.trim() : a)), l.number && (r = s.map(li)));
  let o, c = n[o = bs(t)] || // also try camelCase event handler (#2249)
  n[o = bs(Ce(t))];
  !c && i && (c = n[o = bs(Ze(t))]), c && He(
    c,
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
const Ul = /* @__PURE__ */ new WeakMap();
function Cr(e, t, s = !1) {
  const n = s ? Ul : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let l = {}, o = !1;
  if (!D(e)) {
    const c = (d) => {
      const a = Cr(d, t, !0);
      a && (o = !0, ce(l, a));
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !o ? (Y(e) && n.set(e, null), null) : (F(i) ? i.forEach((c) => l[c] = null) : ce(l, i), Y(e) && n.set(e, l), l);
}
function ps(e, t) {
  return !e || !Dt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), W(e, t[0].toLowerCase() + t.slice(1)) || W(e, Ze(t)) || W(e, t));
}
function qt(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: l,
    attrs: o,
    emit: c,
    render: d,
    renderCache: a,
    props: _,
    data: C,
    setupState: E,
    ctx: H,
    inheritAttrs: j
  } = e, re = Ot(e);
  let V, k;
  try {
    if (s.shapeFlag & 4) {
      const g = r || n, A = g;
      V = ye(
        d.call(
          A,
          g,
          a,
          _,
          E,
          C,
          H
        )
      ), k = o;
    } else {
      const g = t;
      V = ye(
        g.length > 1 ? g(
          _,
          { attrs: o, slots: l, emit: c }
        ) : g(
          _,
          null
        )
      ), k = t.props ? o : Kl(o);
    }
  } catch (g) {
    Ct.length = 0, hs(g, e, 1), V = he(Be);
  }
  let p = V;
  if (k && j !== !1) {
    const g = Object.keys(k), { shapeFlag: A } = p;
    g.length && A & 7 && (i && g.some(Vs) && (k = Bl(
      k,
      i
    )), p = gt(p, k, !1, !0));
  }
  return s.dirs && (p = gt(p, null, !1, !0), p.dirs = p.dirs ? p.dirs.concat(s.dirs) : s.dirs), s.transition && en(p, s.transition), V = p, Ot(re), V;
}
const Kl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Dt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Bl = (e, t) => {
  const s = {};
  for (const n in e)
    (!Vs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Wl(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: l, children: o, patchFlag: c } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? wn(n, l, d) : !!l;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let _ = 0; _ < a.length; _++) {
        const C = a[_];
        if (l[C] !== n[C] && !ps(d, C))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : n === l ? !1 : n ? l ? wn(n, l, d) : !0 : !!l;
  return !1;
}
function wn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !ps(s, i))
      return !0;
  }
  return !1;
}
function Er({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Ar = {}, Mr = () => Object.create(Ar), Rr = (e) => Object.getPrototypeOf(e) === Ar;
function kl(e, t, s, n = !1) {
  const r = {}, i = Mr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Or(e, t, r, i);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  s ? e.props = n ? r : Ui(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Gl(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, o = B(r), [c] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const a = e.vnode.dynamicProps;
      for (let _ = 0; _ < a.length; _++) {
        let C = a[_];
        if (ps(e.emitsOptions, C))
          continue;
        const E = t[C];
        if (c)
          if (W(i, C))
            E !== i[C] && (i[C] = E, d = !0);
          else {
            const H = Ce(C);
            r[H] = Ls(
              c,
              o,
              H,
              E,
              e,
              !1
            );
          }
        else
          E !== i[C] && (i[C] = E, d = !0);
      }
    }
  } else {
    Or(e, t, r, i) && (d = !0);
    let a;
    for (const _ in o)
      (!t || // for camelCase
      !W(t, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Ze(_)) === _ || !W(t, a))) && (c ? s && // for camelCase
      (s[_] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[_] = Ls(
        c,
        o,
        _,
        void 0,
        e,
        !0
      )) : delete r[_]);
    if (i !== o)
      for (const _ in i)
        (!t || !W(t, _)) && (delete i[_], d = !0);
  }
  d && $e(e.attrs, "set", "");
}
function Or(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let l = !1, o;
  if (t)
    for (let c in t) {
      if (ct(c))
        continue;
      const d = t[c];
      let a;
      r && W(r, a = Ce(c)) ? !i || !i.includes(a) ? s[a] = d : (o || (o = {}))[a] = d : ps(e.emitsOptions, c) || (!(c in n) || d !== n[c]) && (n[c] = d, l = !0);
    }
  if (i) {
    const c = B(s), d = o || Q;
    for (let a = 0; a < i.length; a++) {
      const _ = i[a];
      s[_] = Ls(
        r,
        c,
        _,
        d[_],
        e,
        !W(d, _)
      );
    }
  }
  return l;
}
function Ls(e, t, s, n, r, i) {
  const l = e[s];
  if (l != null) {
    const o = W(l, "default");
    if (o && n === void 0) {
      const c = l.default;
      if (l.type !== Function && !l.skipFactory && D(c)) {
        const { propsDefaults: d } = r;
        if (s in d)
          n = d[s];
        else {
          const a = Lt(r);
          n = d[s] = c.call(
            null,
            t
          ), a();
        }
      } else
        n = c;
      r.ce && r.ce._setProp(s, n);
    }
    l[
      0
      /* shouldCast */
    ] && (i && !o ? n = !1 : l[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Ze(s)) && (n = !0));
  }
  return n;
}
const ql = /* @__PURE__ */ new WeakMap();
function Pr(e, t, s = !1) {
  const n = s ? ql : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, o = [];
  let c = !1;
  if (!D(e)) {
    const a = (_) => {
      c = !0;
      const [C, E] = Pr(_, t, !0);
      ce(l, C), E && o.push(...E);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !c)
    return Y(e) && n.set(e, ot), ot;
  if (F(i))
    for (let a = 0; a < i.length; a++) {
      const _ = Ce(i[a]);
      Cn(_) && (l[_] = Q);
    }
  else if (i)
    for (const a in i) {
      const _ = Ce(a);
      if (Cn(_)) {
        const C = i[a], E = l[_] = F(C) || D(C) ? { type: C } : ce({}, C), H = E.type;
        let j = !1, re = !0;
        if (F(H))
          for (let V = 0; V < H.length; ++V) {
            const k = H[V], p = D(k) && k.name;
            if (p === "Boolean") {
              j = !0;
              break;
            } else p === "String" && (re = !1);
          }
        else
          j = D(H) && H.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = j, E[
          1
          /* shouldCastTrue */
        ] = re, (j || W(E, "default")) && o.push(_);
      }
    }
  const d = [l, o];
  return Y(e) && n.set(e, d), d;
}
function Cn(e) {
  return e[0] !== "$" && !ct(e);
}
const tn = (e) => e === "_" || e === "_ctx" || e === "$stable", sn = (e) => F(e) ? e.map(ye) : [ye(e)], Jl = (e, t, s) => {
  if (t._n)
    return t;
  const n = rl((...r) => sn(t(...r)), s);
  return n._c = !1, n;
}, Fr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (tn(r)) continue;
    const i = e[r];
    if (D(i))
      t[r] = Jl(r, i, n);
    else if (i != null) {
      const l = sn(i);
      t[r] = () => l;
    }
  }
}, Ir = (e, t) => {
  const s = sn(t);
  e.slots.default = () => s;
}, Dr = (e, t, s) => {
  for (const n in t)
    (s || !tn(n)) && (e[n] = t[n]);
}, Yl = (e, t, s) => {
  const n = e.slots = Mr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Dr(n, t, s), s && Gn(n, "_", r, !0)) : Fr(t, n);
  } else t && Ir(e, t);
}, Xl = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, l = Q;
  if (n.shapeFlag & 32) {
    const o = t._;
    o ? s && o === 1 ? i = !1 : Dr(r, t, s) : (i = !t.$stable, Fr(t, r)), l = t;
  } else t && (Ir(e, t), l = { default: 1 });
  if (i)
    for (const o in r)
      !tn(o) && l[o] == null && delete r[o];
}, be = Ur;
function Zl(e) {
  return Nr(e);
}
function Ql(e) {
  return Nr(e, pl);
}
function Nr(e, t) {
  const s = fs();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: l,
    createText: o,
    createComment: c,
    setText: d,
    setElementText: a,
    parentNode: _,
    nextSibling: C,
    setScopeId: E = De,
    insertStaticContent: H
  } = e, j = (f, u, h, x = null, m = null, b = null, T = void 0, S = null, v = !!u.dynamicChildren) => {
    if (f === u)
      return;
    f && !xt(f, u) && (x = $t(f), Oe(f, m, b, !0), f = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: y, ref: O, shapeFlag: w } = u;
    switch (y) {
      case st:
        re(f, u, h, x);
        break;
      case Be:
        V(f, u, h, x);
        break;
      case Jt:
        f == null && k(u, h, x, T);
        break;
      case we:
        te(
          f,
          u,
          h,
          x,
          m,
          b,
          T,
          S,
          v
        );
        break;
      default:
        w & 1 ? A(
          f,
          u,
          h,
          x,
          m,
          b,
          T,
          S,
          v
        ) : w & 6 ? se(
          f,
          u,
          h,
          x,
          m,
          b,
          T,
          S,
          v
        ) : (w & 64 || w & 128) && y.process(
          f,
          u,
          h,
          x,
          m,
          b,
          T,
          S,
          v,
          nt
        );
    }
    O != null && m ? at(O, f && f.ref, b, u || f, !u) : O == null && f && f.ref != null && at(f.ref, null, b, f, !0);
  }, re = (f, u, h, x) => {
    if (f == null)
      n(
        u.el = o(u.children),
        h,
        x
      );
    else {
      const m = u.el = f.el;
      u.children !== f.children && d(m, u.children);
    }
  }, V = (f, u, h, x) => {
    f == null ? n(
      u.el = c(u.children || ""),
      h,
      x
    ) : u.el = f.el;
  }, k = (f, u, h, x) => {
    [f.el, f.anchor] = H(
      f.children,
      u,
      h,
      x,
      f.el,
      f.anchor
    );
  }, p = ({ el: f, anchor: u }, h, x) => {
    let m;
    for (; f && f !== u; )
      m = C(f), n(f, h, x), f = m;
    n(u, h, x);
  }, g = ({ el: f, anchor: u }) => {
    let h;
    for (; f && f !== u; )
      h = C(f), r(f), f = h;
    r(u);
  }, A = (f, u, h, x, m, b, T, S, v) => {
    if (u.type === "svg" ? T = "svg" : u.type === "math" && (T = "mathml"), f == null)
      K(
        u,
        h,
        x,
        m,
        b,
        T,
        S,
        v
      );
    else {
      const y = f.el && f.el._isVueCE ? f.el : null;
      try {
        y && y._beginPatch(), J(
          f,
          u,
          m,
          b,
          T,
          S,
          v
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, K = (f, u, h, x, m, b, T, S) => {
    let v, y;
    const { props: O, shapeFlag: w, transition: R, dirs: I } = f;
    if (v = f.el = l(
      f.type,
      b,
      O && O.is,
      O
    ), w & 8 ? a(v, f.children) : w & 16 && G(
      f.children,
      v,
      null,
      x,
      m,
      As(f, b),
      T,
      S
    ), I && Ie(f, null, x, "created"), L(v, f, f.scopeId, T, x), O) {
      for (const X in O)
        X !== "value" && !ct(X) && i(v, X, null, O[X], b, x);
      "value" in O && i(v, "value", null, O.value, b), (y = O.onVnodeBeforeMount) && Te(y, x, f);
    }
    I && Ie(f, null, x, "beforeMount");
    const U = Hr(m, R);
    U && R.beforeEnter(v), n(v, u, h), ((y = O && O.onVnodeMounted) || U || I) && be(() => {
      y && Te(y, x, f), U && R.enter(v), I && Ie(f, null, x, "mounted");
    }, m);
  }, L = (f, u, h, x, m) => {
    if (h && E(f, h), x)
      for (let b = 0; b < x.length; b++)
        E(f, x[b]);
    if (m) {
      let b = m.subTree;
      if (u === b || Vr(b.type) && (b.ssContent === u || b.ssFallback === u)) {
        const T = m.vnode;
        L(
          f,
          T,
          T.scopeId,
          T.slotScopeIds,
          m.parent
        );
      }
    }
  }, G = (f, u, h, x, m, b, T, S, v = 0) => {
    for (let y = v; y < f.length; y++) {
      const O = f[y] = S ? qe(f[y]) : ye(f[y]);
      j(
        null,
        O,
        u,
        h,
        x,
        m,
        b,
        T,
        S
      );
    }
  }, J = (f, u, h, x, m, b, T) => {
    const S = u.el = f.el;
    let { patchFlag: v, dynamicChildren: y, dirs: O } = u;
    v |= f.patchFlag & 16;
    const w = f.props || Q, R = u.props || Q;
    let I;
    if (h && ze(h, !1), (I = R.onVnodeBeforeUpdate) && Te(I, h, u, f), O && Ie(u, f, h, "beforeUpdate"), h && ze(h, !0), (w.innerHTML && R.innerHTML == null || w.textContent && R.textContent == null) && a(S, ""), y ? N(
      f.dynamicChildren,
      y,
      S,
      h,
      x,
      As(u, m),
      b
    ) : T || M(
      f,
      u,
      S,
      null,
      h,
      x,
      As(u, m),
      b,
      !1
    ), v > 0) {
      if (v & 16)
        z(S, w, R, h, m);
      else if (v & 2 && w.class !== R.class && i(S, "class", null, R.class, m), v & 4 && i(S, "style", w.style, R.style, m), v & 8) {
        const U = u.dynamicProps;
        for (let X = 0; X < U.length; X++) {
          const q = U[X], pe = w[q], le = R[q];
          (le !== pe || q === "value") && i(S, q, pe, le, m, h);
        }
      }
      v & 1 && f.children !== u.children && a(S, u.children);
    } else !T && y == null && z(S, w, R, h, m);
    ((I = R.onVnodeUpdated) || O) && be(() => {
      I && Te(I, h, u, f), O && Ie(u, f, h, "updated");
    }, x);
  }, N = (f, u, h, x, m, b, T) => {
    for (let S = 0; S < u.length; S++) {
      const v = f[S], y = u[S], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xt(v, y) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 198) ? _(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      j(
        v,
        y,
        O,
        null,
        x,
        m,
        b,
        T,
        !0
      );
    }
  }, z = (f, u, h, x, m) => {
    if (u !== h) {
      if (u !== Q)
        for (const b in u)
          !ct(b) && !(b in h) && i(
            f,
            b,
            u[b],
            null,
            m,
            x
          );
      for (const b in h) {
        if (ct(b)) continue;
        const T = h[b], S = u[b];
        T !== S && b !== "value" && i(f, b, S, T, m, x);
      }
      "value" in h && i(f, "value", u.value, h.value, m);
    }
  }, te = (f, u, h, x, m, b, T, S, v) => {
    const y = u.el = f ? f.el : o(""), O = u.anchor = f ? f.anchor : o("");
    let { patchFlag: w, dynamicChildren: R, slotScopeIds: I } = u;
    I && (S = S ? S.concat(I) : I), f == null ? (n(y, h, x), n(O, h, x), G(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      O,
      m,
      b,
      T,
      S,
      v
    )) : w > 0 && w & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === R.length ? (N(
      f.dynamicChildren,
      R,
      h,
      m,
      b,
      T,
      S
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || m && u === m.subTree) && Lr(
      f,
      u,
      !0
      /* shallow */
    )) : M(
      f,
      u,
      h,
      O,
      m,
      b,
      T,
      S,
      v
    );
  }, se = (f, u, h, x, m, b, T, S, v) => {
    u.slotScopeIds = S, f == null ? u.shapeFlag & 512 ? m.ctx.activate(
      u,
      h,
      x,
      T,
      v
    ) : Se(
      u,
      h,
      x,
      m,
      b,
      T,
      v
    ) : de(f, u, v);
  }, Se = (f, u, h, x, m, b, T) => {
    const S = f.component = Gr(
      f,
      x,
      m
    );
    if (yr(f) && (S.ctx.renderer = nt), Jr(S, !1, T), S.asyncDep) {
      if (m && m.registerDep(S, P, T), !f.el) {
        const v = S.subTree = he(Be);
        V(null, v, u, h), f.placeholder = v.el;
      }
    } else
      P(
        S,
        f,
        u,
        h,
        m,
        b,
        T
      );
  }, de = (f, u, h) => {
    const x = u.component = f.component;
    if (Wl(f, u, h))
      if (x.asyncDep && !x.asyncResolved) {
        $(x, u, h);
        return;
      } else
        x.next = u, x.update();
    else
      u.el = f.el, x.vnode = u;
  }, P = (f, u, h, x, m, b, T) => {
    const S = () => {
      if (f.isMounted) {
        let { next: w, bu: R, u: I, parent: U, vnode: X } = f;
        {
          const _e = jr(f);
          if (_e) {
            w && (w.el = X.el, $(f, w, T)), _e.asyncDep.then(() => {
              f.isUnmounted || S();
            });
            return;
          }
        }
        let q = w, pe;
        ze(f, !1), w ? (w.el = X.el, $(f, w, T)) : w = X, R && ys(R), (pe = w.props && w.props.onVnodeBeforeUpdate) && Te(pe, U, w, X), ze(f, !0);
        const le = qt(f), Ee = f.subTree;
        f.subTree = le, j(
          Ee,
          le,
          // parent may have changed if it's in a teleport
          _(Ee.el),
          // anchor may have changed if it's in a fragment
          $t(Ee),
          f,
          m,
          b
        ), w.el = le.el, q === null && Er(f, le.el), I && be(I, m), (pe = w.props && w.props.onVnodeUpdated) && be(
          () => Te(pe, U, w, X),
          m
        );
      } else {
        let w;
        const { el: R, props: I } = u, { bm: U, m: X, parent: q, root: pe, type: le } = f, Ee = ht(u);
        if (ze(f, !1), U && ys(U), !Ee && (w = I && I.onVnodeBeforeMount) && Te(w, q, u), ze(f, !0), R && ms) {
          const _e = () => {
            f.subTree = qt(f), ms(
              R,
              f.subTree,
              f,
              m,
              null
            );
          };
          Ee && le.__asyncHydrate ? le.__asyncHydrate(
            R,
            f,
            _e
          ) : _e();
        } else {
          pe.ce && // @ts-expect-error _def is private
          pe.ce._def.shadowRoot !== !1 && pe.ce._injectChildStyle(le);
          const _e = f.subTree = qt(f);
          j(
            null,
            _e,
            h,
            x,
            f,
            m,
            b
          ), u.el = _e.el;
        }
        if (X && be(X, m), !Ee && (w = I && I.onVnodeMounted)) {
          const _e = u;
          be(
            () => Te(w, q, _e),
            m
          );
        }
        (u.shapeFlag & 256 || q && ht(q.vnode) && q.vnode.shapeFlag & 256) && f.a && be(f.a, m), f.isMounted = !0, u = h = x = null;
      }
    };
    f.scope.on();
    const v = f.effect = new Zn(S);
    f.scope.off();
    const y = f.update = v.run.bind(v), O = f.job = v.runIfDirty.bind(v);
    O.i = f, O.id = f.uid, v.scheduler = () => Qs(O), ze(f, !0), y();
  }, $ = (f, u, h) => {
    u.component = f;
    const x = f.vnode.props;
    f.vnode = u, f.next = null, Gl(f, u.props, x, h), Xl(f, u.children, h), Ve(), gn(f), Ue();
  }, M = (f, u, h, x, m, b, T, S, v = !1) => {
    const y = f && f.children, O = f ? f.shapeFlag : 0, w = u.children, { patchFlag: R, shapeFlag: I } = u;
    if (R > 0) {
      if (R & 128) {
        jt(
          y,
          w,
          h,
          x,
          m,
          b,
          T,
          S,
          v
        );
        return;
      } else if (R & 256) {
        ee(
          y,
          w,
          h,
          x,
          m,
          b,
          T,
          S,
          v
        );
        return;
      }
    }
    I & 8 ? (O & 16 && mt(y, m, b), w !== y && a(h, w)) : O & 16 ? I & 16 ? jt(
      y,
      w,
      h,
      x,
      m,
      b,
      T,
      S,
      v
    ) : mt(y, m, b, !0) : (O & 8 && a(h, ""), I & 16 && G(
      w,
      h,
      x,
      m,
      b,
      T,
      S,
      v
    ));
  }, ee = (f, u, h, x, m, b, T, S, v) => {
    f = f || ot, u = u || ot;
    const y = f.length, O = u.length, w = Math.min(y, O);
    let R;
    for (R = 0; R < w; R++) {
      const I = u[R] = v ? qe(u[R]) : ye(u[R]);
      j(
        f[R],
        I,
        h,
        null,
        m,
        b,
        T,
        S,
        v
      );
    }
    y > O ? mt(
      f,
      m,
      b,
      !0,
      !1,
      w
    ) : G(
      u,
      h,
      x,
      m,
      b,
      T,
      S,
      v,
      w
    );
  }, jt = (f, u, h, x, m, b, T, S, v) => {
    let y = 0;
    const O = u.length;
    let w = f.length - 1, R = O - 1;
    for (; y <= w && y <= R; ) {
      const I = f[y], U = u[y] = v ? qe(u[y]) : ye(u[y]);
      if (xt(I, U))
        j(
          I,
          U,
          h,
          null,
          m,
          b,
          T,
          S,
          v
        );
      else
        break;
      y++;
    }
    for (; y <= w && y <= R; ) {
      const I = f[w], U = u[R] = v ? qe(u[R]) : ye(u[R]);
      if (xt(I, U))
        j(
          I,
          U,
          h,
          null,
          m,
          b,
          T,
          S,
          v
        );
      else
        break;
      w--, R--;
    }
    if (y > w) {
      if (y <= R) {
        const I = R + 1, U = I < O ? u[I].el : x;
        for (; y <= R; )
          j(
            null,
            u[y] = v ? qe(u[y]) : ye(u[y]),
            h,
            U,
            m,
            b,
            T,
            S,
            v
          ), y++;
      }
    } else if (y > R)
      for (; y <= w; )
        Oe(f[y], m, b, !0), y++;
    else {
      const I = y, U = y, X = /* @__PURE__ */ new Map();
      for (y = U; y <= R; y++) {
        const me = u[y] = v ? qe(u[y]) : ye(u[y]);
        me.key != null && X.set(me.key, y);
      }
      let q, pe = 0;
      const le = R - U + 1;
      let Ee = !1, _e = 0;
      const bt = new Array(le);
      for (y = 0; y < le; y++) bt[y] = 0;
      for (y = I; y <= w; y++) {
        const me = f[y];
        if (pe >= le) {
          Oe(me, m, b, !0);
          continue;
        }
        let Pe;
        if (me.key != null)
          Pe = X.get(me.key);
        else
          for (q = U; q <= R; q++)
            if (bt[q - U] === 0 && xt(me, u[q])) {
              Pe = q;
              break;
            }
        Pe === void 0 ? Oe(me, m, b, !0) : (bt[Pe - U] = y + 1, Pe >= _e ? _e = Pe : Ee = !0, j(
          me,
          u[Pe],
          h,
          null,
          m,
          b,
          T,
          S,
          v
        ), pe++);
      }
      const fn = Ee ? zl(bt) : ot;
      for (q = fn.length - 1, y = le - 1; y >= 0; y--) {
        const me = U + y, Pe = u[me], cn = u[me + 1], un = me + 1 < O ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          cn.el || $r(cn)
        ) : x;
        bt[y] === 0 ? j(
          null,
          Pe,
          h,
          un,
          m,
          b,
          T,
          S,
          v
        ) : Ee && (q < 0 || y !== fn[q] ? Qe(Pe, h, un, 2) : q--);
      }
    }
  }, Qe = (f, u, h, x, m = null) => {
    const { el: b, type: T, transition: S, children: v, shapeFlag: y } = f;
    if (y & 6) {
      Qe(f.component.subTree, u, h, x);
      return;
    }
    if (y & 128) {
      f.suspense.move(u, h, x);
      return;
    }
    if (y & 64) {
      T.move(f, u, h, nt);
      return;
    }
    if (T === we) {
      n(b, u, h);
      for (let w = 0; w < v.length; w++)
        Qe(v[w], u, h, x);
      n(f.anchor, u, h);
      return;
    }
    if (T === Jt) {
      p(f, u, h);
      return;
    }
    if (x !== 2 && y & 1 && S)
      if (x === 0)
        S.beforeEnter(b), n(b, u, h), be(() => S.enter(b), m);
      else {
        const { leave: w, delayLeave: R, afterLeave: I } = S, U = () => {
          f.ctx.isUnmounted ? r(b) : n(b, u, h);
        }, X = () => {
          b._isLeaving && b[al](
            !0
            /* cancelled */
          ), w(b, () => {
            U(), I && I();
          });
        };
        R ? R(b, U, X) : X();
      }
    else
      n(b, u, h);
  }, Oe = (f, u, h, x = !1, m = !1) => {
    const {
      type: b,
      props: T,
      ref: S,
      children: v,
      dynamicChildren: y,
      shapeFlag: O,
      patchFlag: w,
      dirs: R,
      cacheIndex: I
    } = f;
    if (w === -2 && (m = !1), S != null && (Ve(), at(S, null, h, f, !0), Ue()), I != null && (u.renderCache[I] = void 0), O & 256) {
      u.ctx.deactivate(f);
      return;
    }
    const U = O & 1 && R, X = !ht(f);
    let q;
    if (X && (q = T && T.onVnodeBeforeUnmount) && Te(q, u, f), O & 6)
      ti(f.component, h, x);
    else {
      if (O & 128) {
        f.suspense.unmount(h, x);
        return;
      }
      U && Ie(f, null, u, "beforeUnmount"), O & 64 ? f.type.remove(
        f,
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
      (b !== we || w > 0 && w & 64) ? mt(
        y,
        u,
        h,
        !1,
        !0
      ) : (b === we && w & 384 || !m && O & 16) && mt(v, u, h), x && ln(f);
    }
    (X && (q = T && T.onVnodeUnmounted) || U) && be(() => {
      q && Te(q, u, f), U && Ie(f, null, u, "unmounted");
    }, h);
  }, ln = (f) => {
    const { type: u, el: h, anchor: x, transition: m } = f;
    if (u === we) {
      ei(h, x);
      return;
    }
    if (u === Jt) {
      g(f);
      return;
    }
    const b = () => {
      r(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (f.shapeFlag & 1 && m && !m.persisted) {
      const { leave: T, delayLeave: S } = m, v = () => T(h, b);
      S ? S(f.el, b, v) : v();
    } else
      b();
  }, ei = (f, u) => {
    let h;
    for (; f !== u; )
      h = C(f), r(f), f = h;
    r(u);
  }, ti = (f, u, h) => {
    const { bum: x, scope: m, job: b, subTree: T, um: S, m: v, a: y } = f;
    En(v), En(y), x && ys(x), m.stop(), b && (b.flags |= 8, Oe(T, f, u, h)), S && be(S, u), be(() => {
      f.isUnmounted = !0;
    }, u);
  }, mt = (f, u, h, x = !1, m = !1, b = 0) => {
    for (let T = b; T < f.length; T++)
      Oe(f[T], u, h, x, m);
  }, $t = (f) => {
    if (f.shapeFlag & 6)
      return $t(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const u = C(f.anchor || f.el), h = u && u[cl];
    return h ? C(h) : u;
  };
  let gs = !1;
  const on = (f, u, h) => {
    let x;
    f == null ? u._vnode && (Oe(u._vnode, null, null, !0), x = u._vnode.component) : j(
      u._vnode || null,
      f,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = f, gs || (gs = !0, gn(x), es(), gs = !1);
  }, nt = {
    p: j,
    um: Oe,
    m: Qe,
    r: ln,
    mt: Se,
    mc: G,
    pc: M,
    pbc: N,
    n: $t,
    o: e
  };
  let _s, ms;
  return t && ([_s, ms] = t(
    nt
  )), {
    render: on,
    hydrate: _s,
    createApp: jl(on, _s)
  };
}
function As({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ze({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Hr(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Lr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (F(n) && F(r))
    for (let i = 0; i < n.length; i++) {
      const l = n[i];
      let o = r[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[i] = qe(r[i]), o.el = l.el), !s && o.patchFlag !== -2 && Lr(l, o)), o.type === st && (o.patchFlag !== -1 ? o.el = l.el : o.__elIndex = i + // take fragment start anchor into account
      (e.type === we ? 1 : 0)), o.type === Be && !o.el && (o.el = l.el);
    }
}
function zl(e) {
  const t = e.slice(), s = [0];
  let n, r, i, l, o;
  const c = e.length;
  for (n = 0; n < c; n++) {
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
function jr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : jr(t);
}
function En(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function $r(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? $r(t.subTree) : null;
}
const Vr = (e) => e.__isSuspense;
function Ur(e, t) {
  t && t.pendingBranch ? F(e) ? t.effects.push(...e) : t.effects.push(e) : nl(e);
}
const we = /* @__PURE__ */ Symbol.for("v-fgt"), st = /* @__PURE__ */ Symbol.for("v-txt"), Be = /* @__PURE__ */ Symbol.for("v-cmt"), Jt = /* @__PURE__ */ Symbol.for("v-stc"), Ct = [];
let xe = null;
function eo(e = !1) {
  Ct.push(xe = e ? null : []);
}
function to() {
  Ct.pop(), xe = Ct[Ct.length - 1] || null;
}
let Pt = 1;
function ns(e, t = !1) {
  Pt += e, e < 0 && xe && t && (xe.hasOnce = !0);
}
function Kr(e) {
  return e.dynamicChildren = Pt > 0 ? xe || ot : null, to(), Pt > 0 && xe && xe.push(e), e;
}
function of(e, t, s, n, r, i) {
  return Kr(
    Wr(
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
function so(e, t, s, n, r) {
  return Kr(
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
function Ft(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Br = ({ key: e }) => e ?? null, Yt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || ie(e) || D(e) ? { i: Ae, r: e, k: t, f: !!s } : e : null);
function Wr(e, t = null, s = null, n = 0, r = null, i = e === we ? 0 : 1, l = !1, o = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Br(t),
    ref: t && Yt(t),
    scopeId: _r,
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
    ctx: Ae
  };
  return o ? (nn(c, s), i & 128 && e.normalize(c)) : s && (c.shapeFlag |= ne(s) ? 8 : 16), Pt > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && xe.push(c), c;
}
const he = no;
function no(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Rl) && (e = Be), Ft(e)) {
    const o = gt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && nn(o, s), Pt > 0 && !i && xe && (o.shapeFlag & 6 ? xe[xe.indexOf(e)] = o : xe.push(o)), o.patchFlag = -2, o;
  }
  if (po(e) && (e = e.__vccOpts), t) {
    t = ro(t);
    let { class: o, style: c } = t;
    o && !ne(o) && (t.class = Ws(o)), Y(c) && (as(c) && !F(c) && (c = ce({}, c)), t.style = Bs(c));
  }
  const l = ne(e) ? 1 : Vr(e) ? 128 : ul(e) ? 64 : Y(e) ? 4 : D(e) ? 2 : 0;
  return Wr(
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
function ro(e) {
  return e ? as(e) || Rr(e) ? ce({}, e) : e : null;
}
function gt(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: l, children: o, transition: c } = e, d = t ? io(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Br(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? F(i) ? i.concat(Yt(t)) : [i, Yt(t)] : Yt(t)
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
    patchFlag: t && e.type !== we ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
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
  return c && n && en(
    a,
    c.clone(a)
  ), a;
}
function kr(e = " ", t = 0) {
  return he(st, null, e, t);
}
function ff(e = "", t = !1) {
  return t ? (eo(), so(Be, null, e)) : he(Be, null, e);
}
function ye(e) {
  return e == null || typeof e == "boolean" ? he(Be) : F(e) ? he(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ft(e) ? qe(e) : he(st, null, String(e));
}
function qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : gt(e);
}
function nn(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (F(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), nn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Rr(t) ? t._ctx = Ae : r === 3 && Ae && (Ae.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else D(t) ? (t = { default: t, _ctx: Ae }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [kr(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function io(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Ws([t.class, n.class]));
      else if (r === "style")
        t.style = Bs([t.style, n.style]);
      else if (Dt(r)) {
        const i = t[r], l = n[r];
        l && i !== l && !(F(i) && i.includes(l)) && (t[r] = i ? [].concat(i, l) : l);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Te(e, t, s, n = null) {
  He(e, t, 7, [
    s,
    n
  ]);
}
const lo = wr();
let oo = 0;
function Gr(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || lo, i = {
    uid: oo++,
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
    scope: new xi(
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
    propsOptions: Pr(n, r),
    emitsOptions: Cr(n, r),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Vl.bind(null, i), e.ce && e.ce(i), i;
}
let fe = null;
const fo = () => fe || Ae;
let rs, js;
{
  const e = fs(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((l) => l(i)) : r[0](i);
    };
  };
  rs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => fe = s
  ), js = t(
    "__VUE_SSR_SETTERS__",
    (s) => It = s
  );
}
const Lt = (e) => {
  const t = fe;
  return rs(e), e.scope.on(), () => {
    e.scope.off(), rs(t);
  };
}, An = () => {
  fe && fe.scope.off(), rs(null);
};
function qr(e) {
  return e.vnode.shapeFlag & 4;
}
let It = !1;
function Jr(e, t = !1, s = !1) {
  t && js(t);
  const { props: n, children: r } = e.vnode, i = qr(e);
  kl(e, n, i, t), Yl(e, r, s || t);
  const l = i ? co(e, t) : void 0;
  return t && js(!1), l;
}
function co(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Pl);
  const { setup: n } = s;
  if (n) {
    Ve();
    const r = e.setupContext = n.length > 1 ? ao(e) : null, i = Lt(e), l = Ht(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = Bn(l);
    if (Ue(), i(), (o || e.sp) && !ht(e) && br(e), o) {
      if (l.then(An, An), t)
        return l.then((c) => {
          Mn(e, c);
        }).catch((c) => {
          hs(c, e, 0);
        });
      e.asyncDep = l;
    } else
      Mn(e, l);
  } else
    Yr(e);
}
function Mn(e, t, s) {
  D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) && (e.setupState = hr(t)), Yr(e);
}
function Yr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || De);
  {
    const r = Lt(e);
    Ve();
    try {
      Fl(e);
    } finally {
      Ue(), r();
    }
  }
}
const uo = {
  get(e, t) {
    return oe(e, "get", ""), e[t];
  }
};
function ao(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, uo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function rn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(hr(Ki(e.exposed)), {
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
function ho(e, t = !0) {
  return D(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function po(e) {
  return D(e) && "__vccOpts" in e;
}
const go = (e, t) => Zi(e, t, It);
function cf(e, t, s) {
  try {
    ns(-1);
    const n = arguments.length;
    return n === 2 ? Y(t) && !F(t) ? Ft(t) ? he(e, null, [t]) : he(e, t) : he(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Ft(s) && (s = [s]), he(e, t, s));
  } finally {
    ns(1);
  }
}
const _o = "3.5.26", mo = {
  createComponentInstance: Gr,
  setupComponent: Jr,
  renderComponentRoot: qt,
  setCurrentRenderingInstance: Ot,
  isVNode: Ft,
  normalizeVNode: ye
}, uf = mo;
let $s;
const Rn = typeof window < "u" && window.trustedTypes;
if (Rn)
  try {
    $s = /* @__PURE__ */ Rn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Xr = $s ? (e) => $s.createHTML(e) : (e) => e, bo = "http://www.w3.org/2000/svg", yo = "http://www.w3.org/1998/Math/MathML", je = typeof document < "u" ? document : null, On = je && /* @__PURE__ */ je.createElement("template"), xo = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? je.createElementNS(bo, e) : t === "mathml" ? je.createElementNS(yo, e) : s ? je.createElement(e, { is: s }) : je.createElement(e);
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
    const l = s ? s.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      On.innerHTML = Xr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const o = On.content;
      if (n === "svg" || n === "mathml") {
        const c = o.firstChild;
        for (; c.firstChild; )
          o.appendChild(c.firstChild);
        o.removeChild(c);
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
}, vo = /* @__PURE__ */ Symbol("_vtc");
function So(e, t, s) {
  const n = e[vo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Pn = /* @__PURE__ */ Symbol("_vod"), To = /* @__PURE__ */ Symbol("_vsh"), wo = /* @__PURE__ */ Symbol(""), Co = /(?:^|;)\s*display\s*:/;
function Eo(e, t, s) {
  const n = e.style, r = ne(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (ne(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          s[o] == null && Xt(n, o, "");
        }
      else
        for (const l in t)
          s[l] == null && Xt(n, l, "");
    for (const l in s)
      l === "display" && (i = !0), Xt(n, l, s[l]);
  } else if (r) {
    if (t !== s) {
      const l = n[wo];
      l && (s += ";" + l), n.cssText = s, i = Co.test(s);
    }
  } else t && e.removeAttribute("style");
  Pn in e && (e[Pn] = i ? n.display : "", e[To] && (n.display = "none"));
}
const Fn = /\s*!important$/;
function Xt(e, t, s) {
  if (F(s))
    s.forEach((n) => Xt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Ao(e, t);
    Fn.test(s) ? e.setProperty(
      Ze(n),
      s.replace(Fn, ""),
      "important"
    ) : e[n] = s;
  }
}
const In = ["Webkit", "Moz", "ms"], Ms = {};
function Ao(e, t) {
  const s = Ms[t];
  if (s)
    return s;
  let n = Ce(t);
  if (n !== "filter" && n in e)
    return Ms[t] = n;
  n = os(n);
  for (let r = 0; r < In.length; r++) {
    const i = In[r] + n;
    if (i in e)
      return Ms[t] = i;
  }
  return t;
}
const Dn = "http://www.w3.org/1999/xlink";
function Nn(e, t, s, n, r, i = di(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Dn, t.slice(6, t.length)) : e.setAttributeNS(Dn, t, s) : s == null || i && !Jn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ne(s) ? String(s) : s
  );
}
function Hn(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Xr(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const o = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (o !== c || !("_value" in e)) && (e.value = c), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let l = !1;
  if (s === "" || s == null) {
    const o = typeof e[t];
    o === "boolean" ? s = Jn(s) : s == null && o === "string" ? (s = "", l = !0) : o === "number" && (s = 0, l = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  l && e.removeAttribute(r || t);
}
function Mo(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Ro(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Ln = /* @__PURE__ */ Symbol("_vei");
function Oo(e, t, s, n, r = null) {
  const i = e[Ln] || (e[Ln] = {}), l = i[t];
  if (n && l)
    l.value = n;
  else {
    const [o, c] = Po(t);
    if (n) {
      const d = i[t] = Do(
        n,
        r
      );
      Mo(e, o, d, c);
    } else l && (Ro(e, o, l, c), i[t] = void 0);
  }
}
const jn = /(?:Once|Passive|Capture)$/;
function Po(e) {
  let t;
  if (jn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(jn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ze(e.slice(2)), t];
}
let Rs = 0;
const Fo = /* @__PURE__ */ Promise.resolve(), Io = () => Rs || (Fo.then(() => Rs = 0), Rs = Date.now());
function Do(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    He(
      No(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Io(), s;
}
function No(e, t) {
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
const $n = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ho = (e, t, s, n, r, i) => {
  const l = r === "svg";
  t === "class" ? So(e, n, l) : t === "style" ? Eo(e, s, n) : Dt(t) ? Vs(t) || Oo(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Lo(e, t, n, l)) ? (Hn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Nn(e, t, n, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ne(n)) ? Hn(e, Ce(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Nn(e, t, n, l));
};
function Lo(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $n(t) && D(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return $n(t) && ne(s) ? !1 : t in e;
}
const jo = {}, $o = {}, Vo = {};
function Uo() {
  jo.getSSRProps = ({ value: e }) => ({ value: e }), Vo.getSSRProps = ({ value: e }, t) => {
    if (t.props && cs(t.props.value, e))
      return { checked: !0 };
  }, $o.getSSRProps = ({ value: e }, t) => {
    if (F(e)) {
      if (t.props && bi(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (Ks(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const Zr = /* @__PURE__ */ ce({ patchProp: Ho }, xo);
let Et, Vn = !1;
function Ko() {
  return Et || (Et = Zl(Zr));
}
function Bo() {
  return Et = Vn ? Et : Ql(Zr), Vn = !0, Et;
}
const af = ((...e) => {
  const t = Ko().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = zr(n);
    if (!r) return;
    const i = t._component;
    !D(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const l = s(r, !1, Qr(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
}), hf = ((...e) => {
  const t = Bo().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = zr(n);
    if (r)
      return s(r, !0, Qr(r));
  }, t;
});
function Qr(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function zr(e) {
  return ne(e) ? document.querySelector(e) : e;
}
let Un = !1;
const df = () => {
  Un || (Un = !0, Uo());
};
export {
  Xo as $,
  of as A,
  lf as B,
  Ws as C,
  he as D,
  io as E,
  we as F,
  ff as G,
  yi as H,
  af as I,
  fs as J,
  uf as K,
  ll as L,
  Bn as M,
  De as N,
  D as O,
  ne as P,
  Be as Q,
  Qo as R,
  Jt as S,
  st as T,
  Zo as U,
  F as V,
  Go as W,
  _t as X,
  Dt as Y,
  Bs as Z,
  Wo as _,
  sf as a,
  ko as a0,
  Yo as a1,
  qo as a2,
  Jn as a3,
  Jo as a4,
  Y as a5,
  zo as a6,
  df as a7,
  hf as a8,
  vr as b,
  go as c,
  nf as d,
  Tl as e,
  kr as f,
  fo as g,
  cf as h,
  Gt as i,
  rf as j,
  Xs as k,
  ie as l,
  Ki as m,
  tl as n,
  xl as o,
  ef as p,
  Xe as q,
  Bi as r,
  il as s,
  tf as t,
  so as u,
  eo as v,
  Cs as w,
  ar as x,
  rl as y,
  Wr as z
};
