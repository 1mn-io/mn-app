// @__NO_SIDE_EFFECTS__
function Et(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const ee = {}, _t = [], je = () => {
}, Cr = () => !1, qt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), dn = (e) => e.startsWith("onUpdate:"), le = Object.assign, pn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, ro = Object.prototype.hasOwnProperty, Z = (e, t) => ro.call(e, t), $ = Array.isArray, yt = (e) => Jt(e) === "[object Map]", gn = (e) => Jt(e) === "[object Set]", $n = (e) => Jt(e) === "[object Date]", U = (e) => typeof e == "function", ne = (e) => typeof e == "string", Re = (e) => typeof e == "symbol", z = (e) => e !== null && typeof e == "object", wr = (e) => (z(e) || U(e)) && U(e.then) && U(e.catch), Er = Object.prototype.toString, Jt = (e) => Er.call(e), io = (e) => Jt(e).slice(8, -1), Ar = (e) => Jt(e) === "[object Object]", mn = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, bt = /* @__PURE__ */ Et(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, oo = /-\w/g, Me = vs(
  (e) => e.replace(oo, (t) => t.slice(1).toUpperCase())
), lo = /\B([A-Z])/g, Je = vs(
  (e) => e.replace(lo, "-$1").toLowerCase()
), Ss = vs((e) => e.charAt(0).toUpperCase() + e.slice(1)), ls = vs(
  (e) => e ? `on${Ss(e)}` : ""
), tt = (e, t) => !Object.is(e, t), $s = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Mr = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, co = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, fo = (e) => {
  const t = ne(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let jn;
const Cs = () => jn || (jn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ws(e) {
  if ($(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = ne(n) ? po(n) : ws(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ne(e) || z(e))
    return e;
}
const ao = /;(?![^(]*\))/g, uo = /:([^]+)/, ho = /\/\*[^]*?\*\//g;
function po(e) {
  const t = {};
  return e.replace(ho, "").split(ao).forEach((s) => {
    if (s) {
      const n = s.split(uo);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function qc(e) {
  if (!e) return "";
  if (ne(e)) return e;
  let t = "";
  for (const s in e) {
    const n = e[s];
    if (ne(n) || typeof n == "number") {
      const r = s.startsWith("--") ? s : Je(s);
      t += `${r}:${n};`;
    }
  }
  return t;
}
function Es(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if ($(e))
    for (let s = 0; s < e.length; s++) {
      const n = Es(e[s]);
      n && (t += n + " ");
    }
  else if (z(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
function Jc(e) {
  if (!e) return null;
  let { class: t, style: s } = e;
  return t && !ne(t) && (e.class = Es(t)), s && (e.style = ws(s)), e;
}
const go = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", mo = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Yc = /* @__PURE__ */ Et(go), Xc = /* @__PURE__ */ Et(mo), Pr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _o = /* @__PURE__ */ Et(Pr), Zc = /* @__PURE__ */ Et(
  Pr + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function Or(e) {
  return !!e || e === "";
}
const yo = /[>/="'\u0009\u000a\u000c\u0020]/, js = {};
function Qc(e) {
  if (js.hasOwnProperty(e))
    return js[e];
  const t = yo.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), js[e] = !t;
}
const zc = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function ef(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const bo = /["'&<>]/;
function tf(e) {
  const t = "" + e, s = bo.exec(t);
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
const xo = /^-?>|<!--|-->|--!>|<!-$/g;
function sf(e) {
  return e.replace(xo, "");
}
function To(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = As(e[n], t[n]);
  return s;
}
function As(e, t) {
  if (e === t) return !0;
  let s = $n(e), n = $n(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Re(e), n = Re(t), s || n)
    return e === t;
  if (s = $(e), n = $(t), s || n)
    return s && n ? To(e, t) : !1;
  if (s = z(e), n = z(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !As(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function vo(e, t) {
  return e.findIndex((s) => As(s, t));
}
const Rr = (e) => !!(e && e.__v_isRef === !0), So = (e) => ne(e) ? e : e == null ? "" : $(e) || z(e) && (e.toString === Er || !U(e.toString)) ? Rr(e) ? So(e.value) : JSON.stringify(e, Fr, 2) : String(e), Fr = (e, t) => Rr(t) ? Fr(e, t.value) : yt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[Vs(n, i) + " =>"] = r, s),
    {}
  )
} : gn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Vs(s))
} : Re(t) ? Vs(t) : z(t) && !$(t) && !Ar(t) ? String(t) : t, Vs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Re(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
function nf(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let xe;
class Co {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = xe, !t && xe && (this.index = (xe.scopes || (xe.scopes = [])).push(
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
      const s = xe;
      try {
        return xe = this, t();
      } finally {
        xe = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = xe, xe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (xe = this.prevScope, this.prevScope = void 0);
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
function wo() {
  return xe;
}
let se;
const Bs = /* @__PURE__ */ new WeakSet();
class Ir {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, xe && xe.active && xe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Bs.has(this) && (Bs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Nr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Vn(this), Dr(this);
    const t = se, s = Oe;
    se = this, Oe = !0;
    try {
      return this.fn();
    } finally {
      Hr(this), se = t, Oe = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        bn(t);
      this.deps = this.depsTail = void 0, Vn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Bs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Zs(this) && this.run();
  }
  get dirty() {
    return Zs(this);
  }
}
let Lr = 0, It, Lt;
function Nr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Lt, Lt = e;
    return;
  }
  e.next = It, It = e;
}
function _n() {
  Lr++;
}
function yn() {
  if (--Lr > 0)
    return;
  if (Lt) {
    let t = Lt;
    for (Lt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; It; ) {
    let t = It;
    for (It = void 0; t; ) {
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
function Dr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Hr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), bn(n), Eo(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function Zs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($r(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $r(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Vt) || (e.globalVersion = Vt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Zs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = se, n = Oe;
  se = e, Oe = !0;
  try {
    Dr(e);
    const r = e.fn(e._value);
    (t.version === 0 || tt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    se = s, Oe = n, Hr(e), e.flags &= -3;
  }
}
function bn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      bn(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Eo(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Oe = !0;
const jr = [];
function We() {
  jr.push(Oe), Oe = !1;
}
function Ge() {
  const e = jr.pop();
  Oe = e === void 0 ? !0 : e;
}
function Vn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = se;
    se = void 0;
    try {
      t();
    } finally {
      se = s;
    }
  }
}
let Vt = 0;
class Ao {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class xn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!se || !Oe || se === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== se)
      s = this.activeLink = new Ao(se, this), se.deps ? (s.prevDep = se.depsTail, se.depsTail.nextDep = s, se.depsTail = s) : se.deps = se.depsTail = s, Vr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = se.depsTail, s.nextDep = void 0, se.depsTail.nextDep = s, se.depsTail = s, se.deps === s && (se.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Vt++, this.notify(t);
  }
  notify(t) {
    _n();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      yn();
    }
  }
}
function Vr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Vr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Qs = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ Symbol(
  ""
), zs = /* @__PURE__ */ Symbol(
  ""
), Bt = /* @__PURE__ */ Symbol(
  ""
);
function de(e, t, s) {
  if (Oe && se) {
    let n = Qs.get(e);
    n || Qs.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new xn()), r.map = n, r.key = s), r.track();
  }
}
function Ue(e, t, s, n, r, i) {
  const o = Qs.get(e);
  if (!o) {
    Vt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (_n(), t === "clear")
    o.forEach(l);
  else {
    const c = $(e), h = c && mn(s);
    if (c && s === "length") {
      const a = Number(n);
      o.forEach((d, y) => {
        (y === "length" || y === Bt || !Re(y) && y >= a) && l(d);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), h && l(o.get(Bt)), t) {
        case "add":
          c ? h && l(o.get("length")) : (l(o.get(ft)), yt(e) && l(o.get(zs)));
          break;
        case "delete":
          c || (l(o.get(ft)), yt(e) && l(o.get(zs)));
          break;
        case "set":
          yt(e) && l(o.get(ft));
          break;
      }
  }
  yn();
}
function pt(e) {
  const t = X(e);
  return t === e ? t : (de(t, "iterate", Bt), Ae(e) ? t : t.map(Fe));
}
function Ms(e) {
  return de(e = X(e), "iterate", Bt), e;
}
function Qe(e, t) {
  return qe(e) ? st(e) ? St(Fe(t)) : St(t) : Fe(t);
}
const Mo = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ks(this, Symbol.iterator, (e) => Qe(this, e));
  },
  concat(...e) {
    return pt(this).concat(
      ...e.map((t) => $(t) ? pt(t) : t)
    );
  },
  entries() {
    return Ks(this, "entries", (e) => (e[1] = Qe(this, e[1]), e));
  },
  every(e, t) {
    return Ve(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ve(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Qe(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ve(
      this,
      "find",
      e,
      t,
      (s) => Qe(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return Ve(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ve(
      this,
      "findLast",
      e,
      t,
      (s) => Qe(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ve(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ve(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Us(this, "includes", e);
  },
  indexOf(...e) {
    return Us(this, "indexOf", e);
  },
  join(e) {
    return pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Us(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ve(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Pt(this, "pop");
  },
  push(...e) {
    return Pt(this, "push", e);
  },
  reduce(e, ...t) {
    return Bn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Bn(this, "reduceRight", e, t);
  },
  shift() {
    return Pt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ve(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Pt(this, "splice", e);
  },
  toReversed() {
    return pt(this).toReversed();
  },
  toSorted(e) {
    return pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Pt(this, "unshift", e);
  },
  values() {
    return Ks(this, "values", (e) => Qe(this, e));
  }
};
function Ks(e, t, s) {
  const n = Ms(e), r = n[t]();
  return n !== e && !Ae(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const Po = Array.prototype;
function Ve(e, t, s, n, r, i) {
  const o = Ms(e), l = o !== e && !Ae(e), c = o[t];
  if (c !== Po[t]) {
    const d = c.apply(e, i);
    return l ? Fe(d) : d;
  }
  let h = s;
  o !== e && (l ? h = function(d, y) {
    return s.call(this, Qe(e, d), y, e);
  } : s.length > 2 && (h = function(d, y) {
    return s.call(this, d, y, e);
  }));
  const a = c.call(o, h, n);
  return l && r ? r(a) : a;
}
function Bn(e, t, s, n) {
  const r = Ms(e);
  let i = s;
  return r !== e && (Ae(e) ? s.length > 3 && (i = function(o, l, c) {
    return s.call(this, o, l, c, e);
  }) : i = function(o, l, c) {
    return s.call(this, o, Qe(e, l), c, e);
  }), r[t](i, ...n);
}
function Us(e, t, s) {
  const n = X(e);
  de(n, "iterate", Bt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && Cn(s[0]) ? (s[0] = X(s[0]), n[t](...s)) : r;
}
function Pt(e, t, s = []) {
  We(), _n();
  const n = X(e)[t].apply(e, s);
  return yn(), Ge(), n;
}
const Oo = /* @__PURE__ */ Et("__proto__,__v_isRef,__isVue"), Br = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Re)
);
function Ro(e) {
  Re(e) || (e = String(e));
  const t = X(this);
  return de(t, "has", e), t.hasOwnProperty(e);
}
class Kr {
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
      return n === (r ? i ? Bo : Gr : i ? Wr : kr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = $(t);
    if (!r) {
      let c;
      if (o && (c = Mo[s]))
        return c;
      if (s === "hasOwnProperty")
        return Ro;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ge(t) ? t : n
    );
    if ((Re(s) ? Br.has(s) : Oo(s)) || (r || de(t, "get", s), i))
      return l;
    if (ge(l)) {
      const c = o && mn(s) ? l : l.value;
      return r && z(c) ? tn(c) : c;
    }
    return z(l) ? r ? tn(l) : vn(l) : l;
  }
}
class Ur extends Kr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const o = $(t) && mn(s);
    if (!this._isShallow) {
      const h = qe(i);
      if (!Ae(n) && !qe(n) && (i = X(i), n = X(n)), !o && ge(i) && !ge(n))
        return h || (i.value = n), !0;
    }
    const l = o ? Number(s) < t.length : Z(t, s), c = Reflect.set(
      t,
      s,
      n,
      ge(t) ? t : r
    );
    return t === X(r) && (l ? tt(n, i) && Ue(t, "set", s, n) : Ue(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = Z(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ue(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Re(s) || !Br.has(s)) && de(t, "has", s), n;
  }
  ownKeys(t) {
    return de(
      t,
      "iterate",
      $(t) ? "length" : ft
    ), Reflect.ownKeys(t);
  }
}
class Fo extends Kr {
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
const Io = /* @__PURE__ */ new Ur(), Lo = /* @__PURE__ */ new Fo(), No = /* @__PURE__ */ new Ur(!0);
const en = (e) => e, zt = (e) => Reflect.getPrototypeOf(e);
function Do(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = X(r), o = yt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = r[e](...n), a = s ? en : t ? St : Fe;
    return !t && de(
      i,
      "iterate",
      c ? zs : ft
    ), {
      // iterator protocol
      next() {
        const { value: d, done: y } = h.next();
        return y ? { value: d, done: y } : {
          value: l ? [a(d[0]), a(d[1])] : a(d),
          done: y
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function es(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ho(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = X(i), l = X(r);
      e || (tt(r, l) && de(o, "get", r), de(o, "get", l));
      const { has: c } = zt(o), h = t ? en : e ? St : Fe;
      if (c.call(o, r))
        return h(i.get(r));
      if (c.call(o, l))
        return h(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && de(X(r), "iterate", ft), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = X(i), l = X(r);
      return e || (tt(r, l) && de(o, "has", r), de(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, c = X(l), h = t ? en : e ? St : Fe;
      return !e && de(c, "iterate", ft), l.forEach((a, d) => r.call(i, h(a), h(d), o));
    }
  };
  return le(
    s,
    e ? {
      add: es("add"),
      set: es("set"),
      delete: es("delete"),
      clear: es("clear")
    } : {
      add(r) {
        !t && !Ae(r) && !qe(r) && (r = X(r));
        const i = X(this);
        return zt(i).has.call(i, r) || (i.add(r), Ue(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !Ae(i) && !qe(i) && (i = X(i));
        const o = X(this), { has: l, get: c } = zt(o);
        let h = l.call(o, r);
        h || (r = X(r), h = l.call(o, r));
        const a = c.call(o, r);
        return o.set(r, i), h ? tt(i, a) && Ue(o, "set", r, i) : Ue(o, "add", r, i), this;
      },
      delete(r) {
        const i = X(this), { has: o, get: l } = zt(i);
        let c = o.call(i, r);
        c || (r = X(r), c = o.call(i, r)), l && l.call(i, r);
        const h = i.delete(r);
        return c && Ue(i, "delete", r, void 0), h;
      },
      clear() {
        const r = X(this), i = r.size !== 0, o = r.clear();
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
    s[r] = Do(r, e, t);
  }), s;
}
function Tn(e, t) {
  const s = Ho(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    Z(s, r) && r in n ? s : n,
    r,
    i
  );
}
const $o = {
  get: /* @__PURE__ */ Tn(!1, !1)
}, jo = {
  get: /* @__PURE__ */ Tn(!1, !0)
}, Vo = {
  get: /* @__PURE__ */ Tn(!0, !1)
};
const kr = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Bo = /* @__PURE__ */ new WeakMap();
function Ko(e) {
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
function Uo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ko(io(e));
}
function vn(e) {
  return qe(e) ? e : Sn(
    e,
    !1,
    Io,
    $o,
    kr
  );
}
function ko(e) {
  return Sn(
    e,
    !1,
    No,
    jo,
    Wr
  );
}
function tn(e) {
  return Sn(
    e,
    !0,
    Lo,
    Vo,
    Gr
  );
}
function Sn(e, t, s, n, r) {
  if (!z(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Uo(e);
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
function st(e) {
  return qe(e) ? st(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qe(e) {
  return !!(e && e.__v_isReadonly);
}
function Ae(e) {
  return !!(e && e.__v_isShallow);
}
function Cn(e) {
  return e ? !!e.__v_raw : !1;
}
function X(e) {
  const t = e && e.__v_raw;
  return t ? X(t) : e;
}
function Wo(e) {
  return !Z(e, "__v_skip") && Object.isExtensible(e) && Mr(e, "__v_skip", !0), e;
}
const Fe = (e) => z(e) ? vn(e) : e, St = (e) => z(e) ? tn(e) : e;
function ge(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function rf(e) {
  return qr(e, !1);
}
function of(e) {
  return qr(e, !0);
}
function qr(e, t) {
  return ge(e) ? e : new Go(e, t);
}
class Go {
  constructor(t, s) {
    this.dep = new xn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : X(t), this._value = s ? t : Fe(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || Ae(t) || qe(t);
    t = n ? t : X(t), tt(t, s) && (this._rawValue = t, this._value = n ? t : Fe(t), this.dep.trigger());
  }
}
function qo(e) {
  return ge(e) ? e.value : e;
}
const Jo = {
  get: (e, t, s) => t === "__v_raw" ? e : qo(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return ge(r) && !ge(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Jr(e) {
  return st(e) ? e : new Proxy(e, Jo);
}
class Yo {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new xn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Vt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    se !== this)
      return Nr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return $r(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Xo(e, t, s = !1) {
  let n, r;
  return U(e) ? n = e : (n = e.get, r = e.set), new Yo(n, r, s);
}
const ts = {}, ds = /* @__PURE__ */ new WeakMap();
let lt;
function Zo(e, t = !1, s = lt) {
  if (s) {
    let n = ds.get(s);
    n || ds.set(s, n = []), n.push(e);
  }
}
function Qo(e, t, s = ee) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = s, h = (m) => r ? m : Ae(m) || r === !1 || r === 0 ? ke(m, 1) : ke(m);
  let a, d, y, v, R = !1, F = !1;
  if (ge(e) ? (d = () => e.value, R = Ae(e)) : st(e) ? (d = () => h(e), R = !0) : $(e) ? (F = !0, R = e.some((m) => st(m) || Ae(m)), d = () => e.map((m) => {
    if (ge(m))
      return m.value;
    if (st(m))
      return h(m);
    if (U(m))
      return c ? c(m, 2) : m();
  })) : U(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
    if (y) {
      We();
      try {
        y();
      } finally {
        Ge();
      }
    }
    const m = lt;
    lt = a;
    try {
      return c ? c(e, 3, [v]) : e(v);
    } finally {
      lt = m;
    }
  } : d = je, t && r) {
    const m = d, M = r === !0 ? 1 / 0 : r;
    d = () => ke(m(), M);
  }
  const G = wo(), V = () => {
    a.stop(), G && G.active && pn(G.effects, a);
  };
  if (i && t) {
    const m = t;
    t = (...M) => {
      m(...M), V();
    };
  }
  let q = F ? new Array(e.length).fill(ts) : ts;
  const g = (m) => {
    if (!(!(a.flags & 1) || !a.dirty && !m))
      if (t) {
        const M = a.run();
        if (r || R || (F ? M.some((D, j) => tt(D, q[j])) : tt(M, q))) {
          y && y();
          const D = lt;
          lt = a;
          try {
            const j = [
              M,
              // pass undefined as the old value when it's changed for the first time
              q === ts ? void 0 : F && q[0] === ts ? [] : q,
              v
            ];
            q = M, c ? c(t, 3, j) : (
              // @ts-expect-error
              t(...j)
            );
          } finally {
            lt = D;
          }
        }
      } else
        a.run();
  };
  return l && l(g), a = new Ir(d), a.scheduler = o ? () => o(g, !1) : g, v = (m) => Zo(m, !1, a), y = a.onStop = () => {
    const m = ds.get(a);
    if (m) {
      if (c)
        c(m, 4);
      else
        for (const M of m) M();
      ds.delete(a);
    }
  }, t ? n ? g(!0) : q = a.run() : o ? o(g.bind(null, !0), !0) : a.run(), V.pause = a.pause.bind(a), V.resume = a.resume.bind(a), V.stop = V, V;
}
function ke(e, t = 1 / 0, s) {
  if (t <= 0 || !z(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, ge(e))
    ke(e.value, t, s);
  else if ($(e))
    for (let n = 0; n < e.length; n++)
      ke(e[n], t, s);
  else if (gn(e) || yt(e))
    e.forEach((n) => {
      ke(n, t, s);
    });
  else if (Ar(e)) {
    for (const n in e)
      ke(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && ke(e[n], t, s);
  }
  return e;
}
function Yt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    Ps(r, t, s);
  }
}
function Ie(e, t, s, n) {
  if (U(e)) {
    const r = Yt(e, t, s, n);
    return r && wr(r) && r.catch((i) => {
      Ps(i, t, s);
    }), r;
  }
  if ($(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Ie(e[i], t, s, n));
    return r;
  }
}
function Ps(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ee;
  if (t) {
    let l = t.parent;
    const c = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, c, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      We(), Yt(i, null, 10, [
        e,
        c,
        h
      ]), Ge();
      return;
    }
  }
  zo(e, s, r, n, o);
}
function zo(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ye = [];
let He = -1;
const xt = [];
let ze = null, mt = 0;
const Yr = /* @__PURE__ */ Promise.resolve();
let ps = null;
function el(e) {
  const t = ps || Yr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function tl(e) {
  let t = He + 1, s = ye.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = ye[n], i = Kt(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function wn(e) {
  if (!(e.flags & 1)) {
    const t = Kt(e), s = ye[ye.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kt(s) ? ye.push(e) : ye.splice(tl(t), 0, e), e.flags |= 1, Xr();
  }
}
function Xr() {
  ps || (ps = Yr.then(Zr));
}
function sl(e) {
  $(e) ? xt.push(...e) : ze && e.id === -1 ? ze.splice(mt + 1, 0, e) : e.flags & 1 || (xt.push(e), e.flags |= 1), Xr();
}
function Kn(e, t, s = He + 1) {
  for (; s < ye.length; s++) {
    const n = ye[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ye.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function gs(e) {
  if (xt.length) {
    const t = [...new Set(xt)].sort(
      (s, n) => Kt(s) - Kt(n)
    );
    if (xt.length = 0, ze) {
      ze.push(...t);
      return;
    }
    for (ze = t, mt = 0; mt < ze.length; mt++) {
      const s = ze[mt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    ze = null, mt = 0;
  }
}
const Kt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Zr(e) {
  try {
    for (He = 0; He < ye.length; He++) {
      const t = ye[He];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Yt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; He < ye.length; He++) {
      const t = ye[He];
      t && (t.flags &= -2);
    }
    He = -1, ye.length = 0, gs(), ps = null, (ye.length || xt.length) && Zr();
  }
}
let ue = null, Qr = null;
function Ut(e) {
  const t = ue;
  return ue = e, Qr = e && e.type.__scopeId || null, t;
}
function nl(e, t = ue, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && ys(-1);
    const i = Ut(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Ut(i), n._d && ys(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function lf(e, t) {
  if (ue === null)
    return e;
  const s = Ls(ue), n = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = ee] = t[r];
    i && (U(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ke(o), n.push({
      dir: i,
      instance: s,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function $e(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[n];
    c && (We(), Ie(c, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Ge());
  }
}
function rl(e, t) {
  if (pe) {
    let s = pe.provides;
    const n = pe.parent && pe.parent.provides;
    n === s && (s = pe.provides = Object.create(n)), s[e] = t;
  }
}
function cs(e, t, s = !1) {
  const n = Is();
  if (n || vt) {
    let r = vt ? vt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && U(t) ? t.call(n && n.proxy) : t;
  }
}
const il = /* @__PURE__ */ Symbol.for("v-scx"), ol = () => cs(il);
function ks(e, t, s) {
  return zr(e, t, s);
}
function zr(e, t, s = ee) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = le({}, s), c = t && n || !t && i !== "post";
  let h;
  if (Gt) {
    if (i === "sync") {
      const v = ol();
      h = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!c) {
      const v = () => {
      };
      return v.stop = je, v.resume = je, v.pause = je, v;
    }
  }
  const a = pe;
  l.call = (v, R, F) => Ie(v, a, R, F);
  let d = !1;
  i === "post" ? l.scheduler = (v) => {
    _e(v, a && a.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (v, R) => {
    R ? v() : wn(v);
  }), l.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, a && (v.id = a.uid, v.i = a));
  };
  const y = Qo(e, t, l);
  return Gt && (h ? h.push(y) : c && y()), y;
}
function ll(e, t, s) {
  const n = this.proxy, r = ne(e) ? e.includes(".") ? ei(n, e) : () => n[e] : e.bind(n, n);
  let i;
  U(t) ? i = t : (i = t.handler, s = t);
  const o = Xt(this), l = zr(r, i.bind(n), s);
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
const ti = /* @__PURE__ */ Symbol("_vte"), si = (e) => e.__isTeleport, Nt = (e) => e && (e.disabled || e.disabled === ""), Un = (e) => e && (e.defer || e.defer === ""), kn = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Wn = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, sn = (e, t) => {
  const s = e && e.to;
  return ne(s) ? t ? t(s) : null : s;
}, ni = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, r, i, o, l, c, h) {
    const {
      mc: a,
      pc: d,
      pbc: y,
      o: { insert: v, querySelector: R, createText: F, createComment: G }
    } = h, V = Nt(t.props);
    let { shapeFlag: q, children: g, dynamicChildren: m } = t;
    if (e == null) {
      const M = t.el = F(""), D = t.anchor = F("");
      v(M, s, n), v(D, s, n);
      const j = (E, P) => {
        q & 16 && a(
          g,
          E,
          P,
          r,
          i,
          o,
          l,
          c
        );
      }, k = () => {
        const E = t.target = sn(t.props, R), P = ri(E, t, F, v);
        E && (o !== "svg" && kn(E) ? o = "svg" : o !== "mathml" && Wn(E) && (o = "mathml"), r && r.isCE && (r.ce._teleportTargets || (r.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), V || (j(E, P), fs(t, !1)));
      };
      V && (j(s, D), fs(t, !0)), Un(t.props) ? (t.el.__isMounted = !1, _e(() => {
        k(), delete t.el.__isMounted;
      }, i)) : k();
    } else {
      if (Un(t.props) && e.el.__isMounted === !1) {
        _e(() => {
          ni.process(
            e,
            t,
            s,
            n,
            r,
            i,
            o,
            l,
            c,
            h
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const M = t.anchor = e.anchor, D = t.target = e.target, j = t.targetAnchor = e.targetAnchor, k = Nt(e.props), E = k ? s : D, P = k ? M : j;
      if (o === "svg" || kn(D) ? o = "svg" : (o === "mathml" || Wn(D)) && (o = "mathml"), m ? (y(
        e.dynamicChildren,
        m,
        E,
        r,
        i,
        o,
        l
      ), Rn(e, t, !0)) : c || d(
        e,
        t,
        E,
        P,
        r,
        i,
        o,
        l,
        !1
      ), V)
        k ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ss(
          t,
          s,
          M,
          h,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const K = t.target = sn(
          t.props,
          R
        );
        K && ss(
          t,
          K,
          null,
          h,
          0
        );
      } else k && ss(
        t,
        D,
        j,
        h,
        1
      );
      fs(t, V);
    }
  },
  remove(e, t, s, { um: n, o: { remove: r } }, i) {
    const {
      shapeFlag: o,
      children: l,
      anchor: c,
      targetStart: h,
      targetAnchor: a,
      target: d,
      props: y
    } = e;
    if (d && (r(h), r(a)), i && r(c), o & 16) {
      const v = i || !Nt(y);
      for (let R = 0; R < l.length; R++) {
        const F = l[R];
        n(
          F,
          t,
          s,
          v,
          !!F.dynamicChildren
        );
      }
    }
  },
  move: ss,
  hydrate: cl
};
function ss(e, t, s, { o: { insert: n }, m: r }, i = 2) {
  i === 0 && n(e.targetAnchor, t, s);
  const { el: o, anchor: l, shapeFlag: c, children: h, props: a } = e, d = i === 2;
  if (d && n(o, t, s), (!d || Nt(a)) && c & 16)
    for (let y = 0; y < h.length; y++)
      r(
        h[y],
        t,
        s,
        2
      );
  d && n(l, t, s);
}
function cl(e, t, s, n, r, i, {
  o: { nextSibling: o, parentNode: l, querySelector: c, insert: h, createText: a }
}, d) {
  function y(F, G, V, q) {
    G.anchor = d(
      o(F),
      G,
      l(F),
      s,
      n,
      r,
      i
    ), G.targetStart = V, G.targetAnchor = q;
  }
  const v = t.target = sn(
    t.props,
    c
  ), R = Nt(t.props);
  if (v) {
    const F = v._lpa || v.firstChild;
    if (t.shapeFlag & 16)
      if (R)
        y(
          e,
          t,
          F,
          F && o(F)
        );
      else {
        t.anchor = o(e);
        let G = F;
        for (; G; ) {
          if (G && G.nodeType === 8) {
            if (G.data === "teleport start anchor")
              t.targetStart = G;
            else if (G.data === "teleport anchor") {
              t.targetAnchor = G, v._lpa = t.targetAnchor && o(t.targetAnchor);
              break;
            }
          }
          G = o(G);
        }
        t.targetAnchor || ri(v, t, a, h), d(
          F && o(F),
          t,
          v,
          s,
          n,
          r,
          i
        );
      }
    fs(t, R);
  } else R && t.shapeFlag & 16 && y(e, t, e, o(e));
  return t.anchor && o(t.anchor);
}
const cf = ni;
function fs(e, t) {
  const s = e.ctx;
  if (s && s.ut) {
    let n, r;
    for (t ? (n = e.el, r = e.anchor) : (n = e.targetStart, r = e.targetAnchor); n && n !== r; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid), n = n.nextSibling;
    s.ut();
  }
}
function ri(e, t, s, n) {
  const r = t.targetStart = s(""), i = t.targetAnchor = s("");
  return r[ti] = i, e && (n(r, e), n(i, e)), i;
}
const Ke = /* @__PURE__ */ Symbol("_leaveCb"), ns = /* @__PURE__ */ Symbol("_enterCb");
function ii() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return hi(() => {
    e.isMounted = !0;
  }), pi(() => {
    e.isUnmounting = !0;
  }), e;
}
const we = [Function, Array], oi = {
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
}, li = (e) => {
  const t = e.subTree;
  return t.component ? li(t.component) : t;
}, fl = {
  name: "BaseTransition",
  props: oi,
  setup(e, { slots: t }) {
    const s = Is(), n = ii();
    return () => {
      const r = t.default && En(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = ci(r), o = X(e), { mode: l } = o;
      if (n.isLeaving)
        return Ws(i);
      const c = Gn(i);
      if (!c)
        return Ws(i);
      let h = kt(
        c,
        o,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (d) => h = d
      );
      c.type !== ae && ht(c, h);
      let a = s.subTree && Gn(s.subTree);
      if (a && a.type !== ae && !ct(a, c) && li(s).type !== ae) {
        let d = kt(
          a,
          o,
          n,
          s
        );
        if (ht(a, d), l === "out-in" && c.type !== ae)
          return n.isLeaving = !0, d.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete d.afterLeave, a = void 0;
          }, Ws(i);
        l === "in-out" && c.type !== ae ? d.delayLeave = (y, v, R) => {
          const F = fi(
            n,
            a
          );
          F[String(a.key)] = a, y[Ke] = () => {
            v(), y[Ke] = void 0, delete h.delayedLeave, a = void 0;
          }, h.delayedLeave = () => {
            R(), delete h.delayedLeave, a = void 0;
          };
        } : a = void 0;
      } else a && (a = void 0);
      return i;
    };
  }
};
function ci(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const s of e)
      if (s.type !== ae) {
        t = s;
        break;
      }
  }
  return t;
}
const al = fl;
function fi(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function kt(e, t, s, n, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: h,
    onAfterEnter: a,
    onEnterCancelled: d,
    onBeforeLeave: y,
    onLeave: v,
    onAfterLeave: R,
    onLeaveCancelled: F,
    onBeforeAppear: G,
    onAppear: V,
    onAfterAppear: q,
    onAppearCancelled: g
  } = t, m = String(e.key), M = fi(s, e), D = (E, P) => {
    E && Ie(
      E,
      n,
      9,
      P
    );
  }, j = (E, P) => {
    const K = P[1];
    D(E, P), $(E) ? E.every((C) => C.length <= 1) && K() : E.length <= 1 && K();
  }, k = {
    mode: o,
    persisted: l,
    beforeEnter(E) {
      let P = c;
      if (!s.isMounted)
        if (i)
          P = G || c;
        else
          return;
      E[Ke] && E[Ke](
        !0
        /* cancelled */
      );
      const K = M[m];
      K && ct(e, K) && K.el[Ke] && K.el[Ke](), D(P, [E]);
    },
    enter(E) {
      let P = h, K = a, C = d;
      if (!s.isMounted)
        if (i)
          P = V || h, K = q || a, C = g || d;
        else
          return;
      let W = !1;
      const re = E[ns] = (oe) => {
        W || (W = !0, oe ? D(C, [E]) : D(K, [E]), k.delayedLeave && k.delayedLeave(), E[ns] = void 0);
      };
      P ? j(P, [E, re]) : re();
    },
    leave(E, P) {
      const K = String(e.key);
      if (E[ns] && E[ns](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return P();
      D(y, [E]);
      let C = !1;
      const W = E[Ke] = (re) => {
        C || (C = !0, P(), re ? D(F, [E]) : D(R, [E]), E[Ke] = void 0, M[K] === e && delete M[K]);
      };
      M[K] = e, v ? j(v, [E, W]) : W();
    },
    clone(E) {
      const P = kt(
        E,
        t,
        s,
        n,
        r
      );
      return r && r(P), P;
    }
  };
  return k;
}
function Ws(e) {
  if (Os(e))
    return e = nt(e), e.children = null, e;
}
function Gn(e) {
  if (!Os(e))
    return si(e.type) && e.children ? ci(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && U(s.default))
      return s.default();
  }
}
function ht(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ht(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function En(e, t = !1, s) {
  let n = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = s == null ? o.key : String(s) + String(o.key != null ? o.key : i);
    o.type === fe ? (o.patchFlag & 128 && r++, n = n.concat(
      En(o.children, t, l)
    )) : (t || o.type !== ae) && n.push(l != null ? nt(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function ff(e, t) {
  return U(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function af() {
  const e = Is();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function ai(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ms = /* @__PURE__ */ new WeakMap();
function Tt(e, t, s, n, r = !1) {
  if ($(e)) {
    e.forEach(
      (R, F) => Tt(
        R,
        t && ($(t) ? t[F] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (at(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Tt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Ls(n.component) : n.el, o = r ? null : i, { i: l, r: c } = e, h = t && t.r, a = l.refs === ee ? l.refs = {} : l.refs, d = l.setupState, y = X(d), v = d === ee ? Cr : (R) => Z(y, R);
  if (h != null && h !== c) {
    if (qn(t), ne(h))
      a[h] = null, v(h) && (d[h] = null);
    else if (ge(h)) {
      h.value = null;
      const R = t;
      R.k && (a[R.k] = null);
    }
  }
  if (U(c))
    Yt(c, l, 12, [o, a]);
  else {
    const R = ne(c), F = ge(c);
    if (R || F) {
      const G = () => {
        if (e.f) {
          const V = R ? v(c) ? d[c] : a[c] : c.value;
          if (r)
            $(V) && pn(V, i);
          else if ($(V))
            V.includes(i) || V.push(i);
          else if (R)
            a[c] = [i], v(c) && (d[c] = a[c]);
          else {
            const q = [i];
            c.value = q, e.k && (a[e.k] = q);
          }
        } else R ? (a[c] = o, v(c) && (d[c] = o)) : F && (c.value = o, e.k && (a[e.k] = o));
      };
      if (o) {
        const V = () => {
          G(), ms.delete(e);
        };
        V.id = -1, ms.set(e, V), _e(V, s);
      } else
        qn(e), G();
    }
  }
}
function qn(e) {
  const t = ms.get(e);
  t && (t.flags |= 8, ms.delete(e));
}
let Jn = !1;
const gt = () => {
  Jn || (console.error("Hydration completed but contains mismatches."), Jn = !0);
}, ul = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", hl = (e) => e.namespaceURI.includes("MathML"), rs = (e) => {
  if (e.nodeType === 1) {
    if (ul(e)) return "svg";
    if (hl(e)) return "mathml";
  }
}, is = (e) => e.nodeType === 8;
function dl(e) {
  const {
    mt: t,
    p: s,
    o: {
      patchProp: n,
      createText: r,
      nextSibling: i,
      parentNode: o,
      remove: l,
      insert: c,
      createComment: h
    }
  } = e, a = (g, m) => {
    if (!m.hasChildNodes()) {
      s(null, g, m), gs(), m._vnode = g;
      return;
    }
    d(m.firstChild, g, null, null, null), gs(), m._vnode = g;
  }, d = (g, m, M, D, j, k = !1) => {
    k = k || !!m.dynamicChildren;
    const E = is(g) && g.data === "[", P = () => F(
      g,
      m,
      M,
      D,
      j,
      E
    ), { type: K, ref: C, shapeFlag: W, patchFlag: re } = m;
    let oe = g.nodeType;
    m.el = g, re === -2 && (k = !1, m.dynamicChildren = null);
    let N = null;
    switch (K) {
      case ut:
        oe !== 3 ? m.children === "" ? (c(m.el = r(""), o(g), g), N = g) : N = P() : (g.data !== m.children && (gt(), g.data = m.children), N = i(g));
        break;
      case ae:
        q(g) ? (N = i(g), V(
          m.el = g.content.firstChild,
          g,
          M
        )) : oe !== 8 || E ? N = P() : N = i(g);
        break;
      case Ht:
        if (E && (g = i(g), oe = g.nodeType), oe === 1 || oe === 3) {
          N = g;
          const J = !m.children.length;
          for (let I = 0; I < m.staticCount; I++)
            J && (m.children += N.nodeType === 1 ? N.outerHTML : N.data), I === m.staticCount - 1 && (m.anchor = N), N = i(N);
          return E ? i(N) : N;
        } else
          P();
        break;
      case fe:
        E ? N = R(
          g,
          m,
          M,
          D,
          j,
          k
        ) : N = P();
        break;
      default:
        if (W & 1)
          (oe !== 1 || m.type.toLowerCase() !== g.tagName.toLowerCase()) && !q(g) ? N = P() : N = y(
            g,
            m,
            M,
            D,
            j,
            k
          );
        else if (W & 6) {
          m.slotScopeIds = j;
          const J = o(g);
          if (E ? N = G(g) : is(g) && g.data === "teleport start" ? N = G(g, g.data, "teleport end") : N = i(g), t(
            m,
            J,
            null,
            M,
            D,
            rs(J),
            k
          ), at(m) && !m.type.__asyncResolved) {
            let I;
            E ? (I = ce(fe), I.anchor = N ? N.previousSibling : J.lastChild) : I = g.nodeType === 3 ? Vi("") : ce("div"), I.el = g, m.component.subTree = I;
          }
        } else W & 64 ? oe !== 8 ? N = P() : N = m.type.hydrate(
          g,
          m,
          M,
          D,
          j,
          k,
          e,
          v
        ) : W & 128 && (N = m.type.hydrate(
          g,
          m,
          M,
          D,
          rs(o(g)),
          j,
          k,
          e,
          d
        ));
    }
    return C != null && Tt(C, null, D, m), N;
  }, y = (g, m, M, D, j, k) => {
    k = k || !!m.dynamicChildren;
    const { type: E, props: P, patchFlag: K, shapeFlag: C, dirs: W, transition: re } = m, oe = E === "input" || E === "option";
    if (oe || K !== -1) {
      W && $e(m, null, M, "created");
      let N = !1;
      if (q(g)) {
        N = Fi(
          null,
          // no need check parentSuspense in hydration
          re
        ) && M && M.vnode.props && M.vnode.props.appear;
        const I = g.content.firstChild;
        if (N) {
          const ie = I.getAttribute("class");
          ie && (I.$cls = ie), re.beforeEnter(I);
        }
        V(I, g, M), m.el = g = I;
      }
      if (C & 16 && // skip if element has innerHTML / textContent
      !(P && (P.innerHTML || P.textContent))) {
        let I = v(
          g.firstChild,
          m,
          g,
          M,
          D,
          j,
          k
        );
        for (; I; ) {
          os(
            g,
            1
            /* CHILDREN */
          ) || gt();
          const ie = I;
          I = I.nextSibling, l(ie);
        }
      } else if (C & 8) {
        let I = m.children;
        I[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (I = I.slice(1));
        const { textContent: ie } = g;
        ie !== I && // innerHTML normalize \r\n or \r into a single \n in the DOM
        ie !== I.replace(/\r\n|\r/g, `
`) && (os(
          g,
          0
          /* TEXT */
        ) || gt(), g.textContent = m.children);
      }
      if (P) {
        if (oe || !k || K & 48) {
          const I = g.tagName.includes("-");
          for (const ie in P)
            (oe && (ie.endsWith("value") || ie === "indeterminate") || qt(ie) && !bt(ie) || // force hydrate v-bind with .prop modifiers
            ie[0] === "." || I) && n(g, ie, null, P[ie], void 0, M);
        } else if (P.onClick)
          n(
            g,
            "onClick",
            null,
            P.onClick,
            void 0,
            M
          );
        else if (K & 4 && st(P.style))
          for (const I in P.style) P.style[I];
      }
      let J;
      (J = P && P.onVnodeBeforeMount) && Ee(J, M, m), W && $e(m, null, M, "beforeMount"), ((J = P && P.onVnodeMounted) || W || N) && Di(() => {
        J && Ee(J, M, m), N && re.enter(g), W && $e(m, null, M, "mounted");
      }, D);
    }
    return g.nextSibling;
  }, v = (g, m, M, D, j, k, E) => {
    E = E || !!m.dynamicChildren;
    const P = m.children, K = P.length;
    for (let C = 0; C < K; C++) {
      const W = E ? P[C] : P[C] = Se(P[C]), re = W.type === ut;
      g ? (re && !E && C + 1 < K && Se(P[C + 1]).type === ut && (c(
        r(
          g.data.slice(W.children.length)
        ),
        M,
        i(g)
      ), g.data = W.children), g = d(
        g,
        W,
        D,
        j,
        k,
        E
      )) : re && !W.children ? c(W.el = r(""), M) : (os(
        M,
        1
        /* CHILDREN */
      ) || gt(), s(
        null,
        W,
        M,
        null,
        D,
        j,
        rs(M),
        k
      ));
    }
    return g;
  }, R = (g, m, M, D, j, k) => {
    const { slotScopeIds: E } = m;
    E && (j = j ? j.concat(E) : E);
    const P = o(g), K = v(
      i(g),
      m,
      P,
      M,
      D,
      j,
      k
    );
    return K && is(K) && K.data === "]" ? i(m.anchor = K) : (gt(), c(m.anchor = h("]"), P, K), K);
  }, F = (g, m, M, D, j, k) => {
    if (os(
      g.parentElement,
      1
      /* CHILDREN */
    ) || gt(), m.el = null, k) {
      const K = G(g);
      for (; ; ) {
        const C = i(g);
        if (C && C !== K)
          l(C);
        else
          break;
      }
    }
    const E = i(g), P = o(g);
    return l(g), s(
      null,
      m,
      P,
      E,
      M,
      D,
      rs(P),
      j
    ), M && (M.vnode.el = m.el, vi(M, m.el)), E;
  }, G = (g, m = "[", M = "]") => {
    let D = 0;
    for (; g; )
      if (g = i(g), g && is(g) && (g.data === m && D++, g.data === M)) {
        if (D === 0)
          return i(g);
        D--;
      }
    return g;
  }, V = (g, m, M) => {
    const D = m.parentNode;
    D && D.replaceChild(g, m);
    let j = M;
    for (; j; )
      j.vnode.el === m && (j.vnode.el = j.subTree.el = g), j = j.parent;
  }, q = (g) => g.nodeType === 1 && g.tagName === "TEMPLATE";
  return [a, d];
}
const Yn = "data-allow-mismatch", pl = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function os(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Yn); )
      e = e.parentElement;
  const s = e && e.getAttribute(Yn);
  if (s == null)
    return !1;
  if (s === "")
    return !0;
  {
    const n = s.split(",");
    return t === 0 && n.includes("children") ? !0 : n.includes(pl[t]);
  }
}
Cs().requestIdleCallback;
Cs().cancelIdleCallback;
const at = (e) => !!e.type.__asyncLoader, Os = (e) => e.type.__isKeepAlive;
function gl(e, t) {
  ui(e, "a", t);
}
function ml(e, t) {
  ui(e, "da", t);
}
function ui(e, t, s = pe) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Rs(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      Os(r.parent.vnode) && _l(n, t, s, r), r = r.parent;
  }
}
function _l(e, t, s, n) {
  const r = Rs(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  gi(() => {
    pn(n[t], r);
  }, s);
}
function Rs(e, t, s = pe, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      We();
      const l = Xt(s), c = Ie(t, s, e, o);
      return l(), Ge(), c;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Ye = (e) => (t, s = pe) => {
  (!Gt || e === "sp") && Rs(e, (...n) => t(...n), s);
}, yl = Ye("bm"), hi = Ye("m"), bl = Ye(
  "bu"
), di = Ye("u"), pi = Ye(
  "bum"
), gi = Ye("um"), xl = Ye(
  "sp"
), Tl = Ye("rtg"), vl = Ye("rtc");
function Sl(e, t = pe) {
  Rs("ec", e, t);
}
const An = "components", Cl = "directives";
function uf(e, t) {
  return Mn(An, e, !0, t) || e;
}
const mi = /* @__PURE__ */ Symbol.for("v-ndc");
function hf(e) {
  return ne(e) ? Mn(An, e, !1) || e : e || mi;
}
function df(e) {
  return Mn(Cl, e);
}
function Mn(e, t, s = !0, n = !1) {
  const r = ue || pe;
  if (r) {
    const i = r.type;
    if (e === An) {
      const l = nc(
        i,
        !1
      );
      if (l && (l === t || l === Me(t) || l === Ss(Me(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Xn(r[e] || i[e], t) || // global registration
      Xn(r.appContext[e], t)
    );
    return !o && n ? i : o;
  }
}
function Xn(e, t) {
  return e && (e[t] || e[Me(t)] || e[Ss(Me(t))]);
}
function pf(e, t, s, n) {
  let r;
  const i = s, o = $(e);
  if (o || ne(e)) {
    const l = o && st(e);
    let c = !1, h = !1;
    l && (c = !Ae(e), h = qe(e), e = Ms(e)), r = new Array(e.length);
    for (let a = 0, d = e.length; a < d; a++)
      r[a] = t(
        c ? h ? St(Fe(e[a])) : Fe(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (z(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, h = l.length; c < h; c++) {
        const a = l[c];
        r[c] = t(e[a], a, c, i);
      }
    }
  else
    r = [];
  return r;
}
function gf(e, t) {
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    if ($(n))
      for (let r = 0; r < n.length; r++)
        e[n[r].name] = n[r].fn;
    else n && (e[n.name] = n.key ? (...r) => {
      const i = n.fn(...r);
      return i && (i.key = n.key), i;
    } : n.fn);
  }
  return e;
}
function mf(e, t, s = {}, n, r) {
  if (ue.ce || ue.parent && at(ue.parent) && ue.parent.ce) {
    const h = Object.keys(s).length > 0;
    return t !== "default" && (s.name = t), cn(), fn(
      fe,
      null,
      [ce("slot", s, n && n())],
      h ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), cn();
  const o = i && _i(i(s)), l = s.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, c = fn(
    fe,
    {
      key: (l && !Re(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && n ? "_fb" : "")
    },
    o || (n ? n() : []),
    o && e._ === 1 ? 64 : -2
  );
  return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), i && i._c && (i._d = !0), c;
}
function _i(e) {
  return e.some((t) => Ct(t) ? !(t.type === ae || t.type === fe && !_i(t.children)) : !0) ? e : null;
}
function _f(e, t) {
  const s = {};
  for (const n in e)
    s[/[A-Z]/.test(n) ? `on:${n}` : ls(n)] = e[n];
  return s;
}
const nn = (e) => e ? Ki(e) ? Ls(e) : nn(e.parent) : null, Dt = (
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
    $parent: (e) => nn(e.parent),
    $root: (e) => nn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => bi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      wn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = el.bind(e.proxy)),
    $watch: (e) => ll.bind(e)
  })
), Gs = (e, t) => e !== ee && !e.__isScriptSetup && Z(e, t), wl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const y = o[t];
      if (y !== void 0)
        switch (y) {
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
        if (Gs(n, t))
          return o[t] = 1, n[t];
        if (r !== ee && Z(r, t))
          return o[t] = 2, r[t];
        if (Z(i, t))
          return o[t] = 3, i[t];
        if (s !== ee && Z(s, t))
          return o[t] = 4, s[t];
        rn && (o[t] = 0);
      }
    }
    const h = Dt[t];
    let a, d;
    if (h)
      return t === "$attrs" && de(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (s !== ee && Z(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      d = c.config.globalProperties, Z(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return Gs(r, t) ? (r[t] = s, !0) : n !== ee && Z(n, t) ? (n[t] = s, !0) : Z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let c;
    return !!(s[l] || e !== ee && l[0] !== "$" && Z(e, l) || Gs(t, l) || Z(i, l) || Z(n, l) || Z(Dt, l) || Z(r.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : Z(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Zn(e) {
  return $(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let rn = !0;
function El(e) {
  const t = bi(e), s = e.proxy, n = e.ctx;
  rn = !1, t.beforeCreate && Qn(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: h,
    // lifecycle
    created: a,
    beforeMount: d,
    mounted: y,
    beforeUpdate: v,
    updated: R,
    activated: F,
    deactivated: G,
    beforeDestroy: V,
    beforeUnmount: q,
    destroyed: g,
    unmounted: m,
    render: M,
    renderTracked: D,
    renderTriggered: j,
    errorCaptured: k,
    serverPrefetch: E,
    // public API
    expose: P,
    inheritAttrs: K,
    // assets
    components: C,
    directives: W,
    filters: re
  } = t;
  if (h && Al(h, n, null), o)
    for (const J in o) {
      const I = o[J];
      U(I) && (n[J] = I.bind(s));
    }
  if (r) {
    const J = r.call(s, s);
    z(J) && (e.data = vn(J));
  }
  if (rn = !0, i)
    for (const J in i) {
      const I = i[J], ie = U(I) ? I.bind(s, s) : U(I.get) ? I.get.bind(s, s) : je, Zt = !U(I) && U(I.set) ? I.set.bind(s) : je, rt = ic({
        get: ie,
        set: Zt
      });
      Object.defineProperty(n, J, {
        enumerable: !0,
        configurable: !0,
        get: () => rt.value,
        set: (Le) => rt.value = Le
      });
    }
  if (l)
    for (const J in l)
      yi(l[J], n, s, J);
  if (c) {
    const J = U(c) ? c.call(s) : c;
    Reflect.ownKeys(J).forEach((I) => {
      rl(I, J[I]);
    });
  }
  a && Qn(a, e, "c");
  function N(J, I) {
    $(I) ? I.forEach((ie) => J(ie.bind(s))) : I && J(I.bind(s));
  }
  if (N(yl, d), N(hi, y), N(bl, v), N(di, R), N(gl, F), N(ml, G), N(Sl, k), N(vl, D), N(Tl, j), N(pi, q), N(gi, m), N(xl, E), $(P))
    if (P.length) {
      const J = e.exposed || (e.exposed = {});
      P.forEach((I) => {
        Object.defineProperty(J, I, {
          get: () => s[I],
          set: (ie) => s[I] = ie,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === je && (e.render = M), K != null && (e.inheritAttrs = K), C && (e.components = C), W && (e.directives = W), E && ai(e);
}
function Al(e, t, s = je) {
  $(e) && (e = on(e));
  for (const n in e) {
    const r = e[n];
    let i;
    z(r) ? "default" in r ? i = cs(
      r.from || n,
      r.default,
      !0
    ) : i = cs(r.from || n) : i = cs(r), ge(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function Qn(e, t, s) {
  Ie(
    $(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function yi(e, t, s, n) {
  let r = n.includes(".") ? ei(s, n) : () => s[n];
  if (ne(e)) {
    const i = t[e];
    U(i) && ks(r, i);
  } else if (U(e))
    ks(r, e.bind(s));
  else if (z(e))
    if ($(e))
      e.forEach((i) => yi(i, t, s, n));
    else {
      const i = U(e.handler) ? e.handler.bind(s) : t[e.handler];
      U(i) && ks(r, i, e);
    }
}
function bi(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !r.length && !s && !n ? c = t : (c = {}, r.length && r.forEach(
    (h) => _s(c, h, o, !0)
  ), _s(c, t, o)), z(t) && i.set(t, c), c;
}
function _s(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && _s(e, i, s, !0), r && r.forEach(
    (o) => _s(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = Ml[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Ml = {
  data: zn,
  props: er,
  emits: er,
  // objects
  methods: Ft,
  computed: Ft,
  // lifecycle
  beforeCreate: me,
  created: me,
  beforeMount: me,
  mounted: me,
  beforeUpdate: me,
  updated: me,
  beforeDestroy: me,
  beforeUnmount: me,
  destroyed: me,
  unmounted: me,
  activated: me,
  deactivated: me,
  errorCaptured: me,
  serverPrefetch: me,
  // assets
  components: Ft,
  directives: Ft,
  // watch
  watch: Ol,
  // provide / inject
  provide: zn,
  inject: Pl
};
function zn(e, t) {
  return t ? e ? function() {
    return le(
      U(e) ? e.call(this, this) : e,
      U(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Pl(e, t) {
  return Ft(on(e), on(t));
}
function on(e) {
  if ($(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ft(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function er(e, t) {
  return e ? $(e) && $(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    Zn(e),
    Zn(t ?? {})
  ) : t;
}
function Ol(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = le(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = me(e[n], t[n]);
  return s;
}
function xi() {
  return {
    app: null,
    config: {
      isNativeTag: Cr,
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
let Rl = 0;
function Fl(e, t) {
  return function(n, r = null) {
    U(n) || (n = le({}, n)), r != null && !z(r) && (r = null);
    const i = xi(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const h = i.app = {
      _uid: Rl++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: lc,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return o.has(a) || (a && U(a.install) ? (o.add(a), a.install(h, ...d)) : U(a) && (o.add(a), a(h, ...d))), h;
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
      mount(a, d, y) {
        if (!c) {
          const v = h._ceVNode || ce(n, r);
          return v.appContext = i, y === !0 ? y = "svg" : y === !1 && (y = void 0), d && t ? t(v, a) : e(v, a, y), c = !0, h._container = a, a.__vue_app__ = h, Ls(v.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        c && (Ie(
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
const Il = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Me(t)}Modifiers`] || e[`${Je(t)}Modifiers`];
function Ll(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ee;
  let r = s;
  const i = t.startsWith("update:"), o = i && Il(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => ne(a) ? a.trim() : a)), o.number && (r = s.map(co)));
  let l, c = n[l = ls(t)] || // also try camelCase event handler (#2249)
  n[l = ls(Me(t))];
  !c && i && (c = n[l = ls(Je(t))]), c && Ie(
    c,
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
    e.emitted[l] = !0, Ie(
      h,
      e,
      6,
      r
    );
  }
}
const Nl = /* @__PURE__ */ new WeakMap();
function Ti(e, t, s = !1) {
  const n = s ? Nl : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!U(e)) {
    const c = (h) => {
      const a = Ti(h, t, !0);
      a && (l = !0, le(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (z(e) && n.set(e, null), null) : ($(i) ? i.forEach((c) => o[c] = null) : le(o, i), z(e) && n.set(e, o), o);
}
function Fs(e, t) {
  return !e || !qt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, Je(t)) || Z(e, t));
}
function as(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: h,
    renderCache: a,
    props: d,
    data: y,
    setupState: v,
    ctx: R,
    inheritAttrs: F
  } = e, G = Ut(e);
  let V, q;
  try {
    if (s.shapeFlag & 4) {
      const m = r || n, M = m;
      V = Se(
        h.call(
          M,
          m,
          a,
          d,
          v,
          y,
          R
        )
      ), q = l;
    } else {
      const m = t;
      V = Se(
        m.length > 1 ? m(
          d,
          { attrs: l, slots: o, emit: c }
        ) : m(
          d,
          null
        )
      ), q = t.props ? l : Dl(l);
    }
  } catch (m) {
    $t.length = 0, Ps(m, e, 1), V = ce(ae);
  }
  let g = V;
  if (q && F !== !1) {
    const m = Object.keys(q), { shapeFlag: M } = g;
    m.length && M & 7 && (i && m.some(dn) && (q = Hl(
      q,
      i
    )), g = nt(g, q, !1, !0));
  }
  return s.dirs && (g = nt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(s.dirs) : s.dirs), s.transition && ht(g, s.transition), V = g, Ut(G), V;
}
const Dl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || qt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Hl = (e, t) => {
  const s = {};
  for (const n in e)
    (!dn(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function $l(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: c } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? tr(n, o, h) : !!o;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        const y = a[d];
        if (o[y] !== n[y] && !Fs(h, y))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? tr(n, o, h) : !0 : !!o;
  return !1;
}
function tr(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !Fs(s, i))
      return !0;
  }
  return !1;
}
function vi({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Si = {}, Ci = () => Object.create(Si), wi = (e) => Object.getPrototypeOf(e) === Si;
function jl(e, t, s, n = !1) {
  const r = {}, i = Ci();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ei(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : ko(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Vl(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = X(r), [c] = e.propsOptions;
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
        let y = a[d];
        if (Fs(e.emitsOptions, y))
          continue;
        const v = t[y];
        if (c)
          if (Z(i, y))
            v !== i[y] && (i[y] = v, h = !0);
          else {
            const R = Me(y);
            r[R] = ln(
              c,
              l,
              R,
              v,
              e,
              !1
            );
          }
        else
          v !== i[y] && (i[y] = v, h = !0);
      }
    }
  } else {
    Ei(e, t, r, i) && (h = !0);
    let a;
    for (const d in l)
      (!t || // for camelCase
      !Z(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Je(d)) === d || !Z(t, a))) && (c ? s && // for camelCase
      (s[d] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[d] = ln(
        c,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (i !== l)
      for (const d in i)
        (!t || !Z(t, d)) && (delete i[d], h = !0);
  }
  h && Ue(e.attrs, "set", "");
}
function Ei(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (bt(c))
        continue;
      const h = t[c];
      let a;
      r && Z(r, a = Me(c)) ? !i || !i.includes(a) ? s[a] = h : (l || (l = {}))[a] = h : Fs(e.emitsOptions, c) || (!(c in n) || h !== n[c]) && (n[c] = h, o = !0);
    }
  if (i) {
    const c = X(s), h = l || ee;
    for (let a = 0; a < i.length; a++) {
      const d = i[a];
      s[d] = ln(
        r,
        c,
        d,
        h[d],
        e,
        !Z(h, d)
      );
    }
  }
  return o;
}
function ln(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = Z(o, "default");
    if (l && n === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && U(c)) {
        const { propsDefaults: h } = r;
        if (s in h)
          n = h[s];
        else {
          const a = Xt(r);
          n = h[s] = c.call(
            null,
            t
          ), a();
        }
      } else
        n = c;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Je(s)) && (n = !0));
  }
  return n;
}
const Bl = /* @__PURE__ */ new WeakMap();
function Ai(e, t, s = !1) {
  const n = s ? Bl : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!U(e)) {
    const a = (d) => {
      c = !0;
      const [y, v] = Ai(d, t, !0);
      le(o, y), v && l.push(...v);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !c)
    return z(e) && n.set(e, _t), _t;
  if ($(i))
    for (let a = 0; a < i.length; a++) {
      const d = Me(i[a]);
      sr(d) && (o[d] = ee);
    }
  else if (i)
    for (const a in i) {
      const d = Me(a);
      if (sr(d)) {
        const y = i[a], v = o[d] = $(y) || U(y) ? { type: y } : le({}, y), R = v.type;
        let F = !1, G = !0;
        if ($(R))
          for (let V = 0; V < R.length; ++V) {
            const q = R[V], g = U(q) && q.name;
            if (g === "Boolean") {
              F = !0;
              break;
            } else g === "String" && (G = !1);
          }
        else
          F = U(R) && R.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = F, v[
          1
          /* shouldCastTrue */
        ] = G, (F || Z(v, "default")) && l.push(d);
      }
    }
  const h = [o, l];
  return z(e) && n.set(e, h), h;
}
function sr(e) {
  return e[0] !== "$" && !bt(e);
}
const Pn = (e) => e === "_" || e === "_ctx" || e === "$stable", On = (e) => $(e) ? e.map(Se) : [Se(e)], Kl = (e, t, s) => {
  if (t._n)
    return t;
  const n = nl((...r) => On(t(...r)), s);
  return n._c = !1, n;
}, Mi = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (Pn(r)) continue;
    const i = e[r];
    if (U(i))
      t[r] = Kl(r, i, n);
    else if (i != null) {
      const o = On(i);
      t[r] = () => o;
    }
  }
}, Pi = (e, t) => {
  const s = On(t);
  e.slots.default = () => s;
}, Oi = (e, t, s) => {
  for (const n in t)
    (s || !Pn(n)) && (e[n] = t[n]);
}, Ul = (e, t, s) => {
  const n = e.slots = Ci();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Oi(n, t, s), s && Mr(n, "_", r, !0)) : Mi(t, n);
  } else t && Pi(e, t);
}, kl = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = ee;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : Oi(r, t, s) : (i = !t.$stable, Mi(t, r)), o = t;
  } else t && (Pi(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Pn(l) && o[l] == null && delete r[l];
}, _e = Di;
function Wl(e) {
  return Ri(e);
}
function Gl(e) {
  return Ri(e, dl);
}
function Ri(e, t) {
  const s = Cs();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: h,
    setElementText: a,
    parentNode: d,
    nextSibling: y,
    setScopeId: v = je,
    insertStaticContent: R
  } = e, F = (f, u, p, T = null, _ = null, b = null, A = void 0, w = null, S = !!u.dynamicChildren) => {
    if (f === u)
      return;
    f && !ct(f, u) && (T = Qt(f), Le(f, _, b, !0), f = null), u.patchFlag === -2 && (S = !1, u.dynamicChildren = null);
    const { type: x, ref: H, shapeFlag: O } = u;
    switch (x) {
      case ut:
        G(f, u, p, T);
        break;
      case ae:
        V(f, u, p, T);
        break;
      case Ht:
        f == null && q(u, p, T, A);
        break;
      case fe:
        C(
          f,
          u,
          p,
          T,
          _,
          b,
          A,
          w,
          S
        );
        break;
      default:
        O & 1 ? M(
          f,
          u,
          p,
          T,
          _,
          b,
          A,
          w,
          S
        ) : O & 6 ? W(
          f,
          u,
          p,
          T,
          _,
          b,
          A,
          w,
          S
        ) : (O & 64 || O & 128) && x.process(
          f,
          u,
          p,
          T,
          _,
          b,
          A,
          w,
          S,
          dt
        );
    }
    H != null && _ ? Tt(H, f && f.ref, b, u || f, !u) : H == null && f && f.ref != null && Tt(f.ref, null, b, f, !0);
  }, G = (f, u, p, T) => {
    if (f == null)
      n(
        u.el = l(u.children),
        p,
        T
      );
    else {
      const _ = u.el = f.el;
      u.children !== f.children && h(_, u.children);
    }
  }, V = (f, u, p, T) => {
    f == null ? n(
      u.el = c(u.children || ""),
      p,
      T
    ) : u.el = f.el;
  }, q = (f, u, p, T) => {
    [f.el, f.anchor] = R(
      f.children,
      u,
      p,
      T,
      f.el,
      f.anchor
    );
  }, g = ({ el: f, anchor: u }, p, T) => {
    let _;
    for (; f && f !== u; )
      _ = y(f), n(f, p, T), f = _;
    n(u, p, T);
  }, m = ({ el: f, anchor: u }) => {
    let p;
    for (; f && f !== u; )
      p = y(f), r(f), f = p;
    r(u);
  }, M = (f, u, p, T, _, b, A, w, S) => {
    if (u.type === "svg" ? A = "svg" : u.type === "math" && (A = "mathml"), f == null)
      D(
        u,
        p,
        T,
        _,
        b,
        A,
        w,
        S
      );
    else {
      const x = f.el && f.el._isVueCE ? f.el : null;
      try {
        x && x._beginPatch(), E(
          f,
          u,
          _,
          b,
          A,
          w,
          S
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, D = (f, u, p, T, _, b, A, w) => {
    let S, x;
    const { props: H, shapeFlag: O, transition: L, dirs: B } = f;
    if (S = f.el = o(
      f.type,
      b,
      H && H.is,
      H
    ), O & 8 ? a(S, f.children) : O & 16 && k(
      f.children,
      S,
      null,
      T,
      _,
      qs(f, b),
      A,
      w
    ), B && $e(f, null, T, "created"), j(S, f, f.scopeId, A, T), H) {
      for (const te in H)
        te !== "value" && !bt(te) && i(S, te, null, H[te], b, T);
      "value" in H && i(S, "value", null, H.value, b), (x = H.onVnodeBeforeMount) && Ee(x, T, f);
    }
    B && $e(f, null, T, "beforeMount");
    const Y = Fi(_, L);
    Y && L.beforeEnter(S), n(S, u, p), ((x = H && H.onVnodeMounted) || Y || B) && _e(() => {
      x && Ee(x, T, f), Y && L.enter(S), B && $e(f, null, T, "mounted");
    }, _);
  }, j = (f, u, p, T, _) => {
    if (p && v(f, p), T)
      for (let b = 0; b < T.length; b++)
        v(f, T[b]);
    if (_) {
      let b = _.subTree;
      if (u === b || Ni(b.type) && (b.ssContent === u || b.ssFallback === u)) {
        const A = _.vnode;
        j(
          f,
          A,
          A.scopeId,
          A.slotScopeIds,
          _.parent
        );
      }
    }
  }, k = (f, u, p, T, _, b, A, w, S = 0) => {
    for (let x = S; x < f.length; x++) {
      const H = f[x] = w ? et(f[x]) : Se(f[x]);
      F(
        null,
        H,
        u,
        p,
        T,
        _,
        b,
        A,
        w
      );
    }
  }, E = (f, u, p, T, _, b, A) => {
    const w = u.el = f.el;
    let { patchFlag: S, dynamicChildren: x, dirs: H } = u;
    S |= f.patchFlag & 16;
    const O = f.props || ee, L = u.props || ee;
    let B;
    if (p && it(p, !1), (B = L.onVnodeBeforeUpdate) && Ee(B, p, u, f), H && $e(u, f, p, "beforeUpdate"), p && it(p, !0), (O.innerHTML && L.innerHTML == null || O.textContent && L.textContent == null) && a(w, ""), x ? P(
      f.dynamicChildren,
      x,
      w,
      p,
      T,
      qs(u, _),
      b
    ) : A || I(
      f,
      u,
      w,
      null,
      p,
      T,
      qs(u, _),
      b,
      !1
    ), S > 0) {
      if (S & 16)
        K(w, O, L, p, _);
      else if (S & 2 && O.class !== L.class && i(w, "class", null, L.class, _), S & 4 && i(w, "style", O.style, L.style, _), S & 8) {
        const Y = u.dynamicProps;
        for (let te = 0; te < Y.length; te++) {
          const Q = Y[te], be = O[Q], he = L[Q];
          (he !== be || Q === "value") && i(w, Q, be, he, _, p);
        }
      }
      S & 1 && f.children !== u.children && a(w, u.children);
    } else !A && x == null && K(w, O, L, p, _);
    ((B = L.onVnodeUpdated) || H) && _e(() => {
      B && Ee(B, p, u, f), H && $e(u, f, p, "updated");
    }, T);
  }, P = (f, u, p, T, _, b, A) => {
    for (let w = 0; w < u.length; w++) {
      const S = f[w], x = u[w], H = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === fe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ct(S, x) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? d(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      F(
        S,
        x,
        H,
        null,
        T,
        _,
        b,
        A,
        !0
      );
    }
  }, K = (f, u, p, T, _) => {
    if (u !== p) {
      if (u !== ee)
        for (const b in u)
          !bt(b) && !(b in p) && i(
            f,
            b,
            u[b],
            null,
            _,
            T
          );
      for (const b in p) {
        if (bt(b)) continue;
        const A = p[b], w = u[b];
        A !== w && b !== "value" && i(f, b, w, A, _, T);
      }
      "value" in p && i(f, "value", u.value, p.value, _);
    }
  }, C = (f, u, p, T, _, b, A, w, S) => {
    const x = u.el = f ? f.el : l(""), H = u.anchor = f ? f.anchor : l("");
    let { patchFlag: O, dynamicChildren: L, slotScopeIds: B } = u;
    B && (w = w ? w.concat(B) : B), f == null ? (n(x, p, T), n(H, p, T), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      p,
      H,
      _,
      b,
      A,
      w,
      S
    )) : O > 0 && O & 64 && L && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === L.length ? (P(
      f.dynamicChildren,
      L,
      p,
      _,
      b,
      A,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || _ && u === _.subTree) && Rn(
      f,
      u,
      !0
      /* shallow */
    )) : I(
      f,
      u,
      p,
      H,
      _,
      b,
      A,
      w,
      S
    );
  }, W = (f, u, p, T, _, b, A, w, S) => {
    u.slotScopeIds = w, f == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      p,
      T,
      A,
      S
    ) : re(
      u,
      p,
      T,
      _,
      b,
      A,
      S
    ) : oe(f, u, S);
  }, re = (f, u, p, T, _, b, A) => {
    const w = f.component = Bi(
      f,
      T,
      _
    );
    if (Os(f) && (w.ctx.renderer = dt), Ui(w, !1, A), w.asyncDep) {
      if (_ && _.registerDep(w, N, A), !f.el) {
        const S = w.subTree = ce(ae);
        V(null, S, u, p), f.placeholder = S.el;
      }
    } else
      N(
        w,
        f,
        u,
        p,
        _,
        b,
        A
      );
  }, oe = (f, u, p) => {
    const T = u.component = f.component;
    if ($l(f, u, p))
      if (T.asyncDep && !T.asyncResolved) {
        J(T, u, p);
        return;
      } else
        T.next = u, T.update();
    else
      u.el = f.el, T.vnode = u;
  }, N = (f, u, p, T, _, b, A) => {
    const w = () => {
      if (f.isMounted) {
        let { next: O, bu: L, u: B, parent: Y, vnode: te } = f;
        {
          const Te = Ii(f);
          if (Te) {
            O && (O.el = te.el, J(f, O, A)), Te.asyncDep.then(() => {
              f.isUnmounted || w();
            });
            return;
          }
        }
        let Q = O, be;
        it(f, !1), O ? (O.el = te.el, J(f, O, A)) : O = te, L && $s(L), (be = O.props && O.props.onVnodeBeforeUpdate) && Ee(be, Y, O, te), it(f, !0);
        const he = as(f), Pe = f.subTree;
        f.subTree = he, F(
          Pe,
          he,
          // parent may have changed if it's in a teleport
          d(Pe.el),
          // anchor may have changed if it's in a fragment
          Qt(Pe),
          f,
          _,
          b
        ), O.el = he.el, Q === null && vi(f, he.el), B && _e(B, _), (be = O.props && O.props.onVnodeUpdated) && _e(
          () => Ee(be, Y, O, te),
          _
        );
      } else {
        let O;
        const { el: L, props: B } = u, { bm: Y, m: te, parent: Q, root: be, type: he } = f, Pe = at(u);
        if (it(f, !1), Y && $s(Y), !Pe && (O = B && B.onVnodeBeforeMount) && Ee(O, Q, u), it(f, !0), L && Hs) {
          const Te = () => {
            f.subTree = as(f), Hs(
              L,
              f.subTree,
              f,
              _,
              null
            );
          };
          Pe && he.__asyncHydrate ? he.__asyncHydrate(
            L,
            f,
            Te
          ) : Te();
        } else {
          be.ce && // @ts-expect-error _def is private
          be.ce._def.shadowRoot !== !1 && be.ce._injectChildStyle(he);
          const Te = f.subTree = as(f);
          F(
            null,
            Te,
            p,
            T,
            f,
            _,
            b
          ), u.el = Te.el;
        }
        if (te && _e(te, _), !Pe && (O = B && B.onVnodeMounted)) {
          const Te = u;
          _e(
            () => Ee(O, Q, Te),
            _
          );
        }
        (u.shapeFlag & 256 || Q && at(Q.vnode) && Q.vnode.shapeFlag & 256) && f.a && _e(f.a, _), f.isMounted = !0, u = p = T = null;
      }
    };
    f.scope.on();
    const S = f.effect = new Ir(w);
    f.scope.off();
    const x = f.update = S.run.bind(S), H = f.job = S.runIfDirty.bind(S);
    H.i = f, H.id = f.uid, S.scheduler = () => wn(H), it(f, !0), x();
  }, J = (f, u, p) => {
    u.component = f;
    const T = f.vnode.props;
    f.vnode = u, f.next = null, Vl(f, u.props, T, p), kl(f, u.children, p), We(), Kn(f), Ge();
  }, I = (f, u, p, T, _, b, A, w, S = !1) => {
    const x = f && f.children, H = f ? f.shapeFlag : 0, O = u.children, { patchFlag: L, shapeFlag: B } = u;
    if (L > 0) {
      if (L & 128) {
        Zt(
          x,
          O,
          p,
          T,
          _,
          b,
          A,
          w,
          S
        );
        return;
      } else if (L & 256) {
        ie(
          x,
          O,
          p,
          T,
          _,
          b,
          A,
          w,
          S
        );
        return;
      }
    }
    B & 8 ? (H & 16 && At(x, _, b), O !== x && a(p, O)) : H & 16 ? B & 16 ? Zt(
      x,
      O,
      p,
      T,
      _,
      b,
      A,
      w,
      S
    ) : At(x, _, b, !0) : (H & 8 && a(p, ""), B & 16 && k(
      O,
      p,
      T,
      _,
      b,
      A,
      w,
      S
    ));
  }, ie = (f, u, p, T, _, b, A, w, S) => {
    f = f || _t, u = u || _t;
    const x = f.length, H = u.length, O = Math.min(x, H);
    let L;
    for (L = 0; L < O; L++) {
      const B = u[L] = S ? et(u[L]) : Se(u[L]);
      F(
        f[L],
        B,
        p,
        null,
        _,
        b,
        A,
        w,
        S
      );
    }
    x > H ? At(
      f,
      _,
      b,
      !0,
      !1,
      O
    ) : k(
      u,
      p,
      T,
      _,
      b,
      A,
      w,
      S,
      O
    );
  }, Zt = (f, u, p, T, _, b, A, w, S) => {
    let x = 0;
    const H = u.length;
    let O = f.length - 1, L = H - 1;
    for (; x <= O && x <= L; ) {
      const B = f[x], Y = u[x] = S ? et(u[x]) : Se(u[x]);
      if (ct(B, Y))
        F(
          B,
          Y,
          p,
          null,
          _,
          b,
          A,
          w,
          S
        );
      else
        break;
      x++;
    }
    for (; x <= O && x <= L; ) {
      const B = f[O], Y = u[L] = S ? et(u[L]) : Se(u[L]);
      if (ct(B, Y))
        F(
          B,
          Y,
          p,
          null,
          _,
          b,
          A,
          w,
          S
        );
      else
        break;
      O--, L--;
    }
    if (x > O) {
      if (x <= L) {
        const B = L + 1, Y = B < H ? u[B].el : T;
        for (; x <= L; )
          F(
            null,
            u[x] = S ? et(u[x]) : Se(u[x]),
            p,
            Y,
            _,
            b,
            A,
            w,
            S
          ), x++;
      }
    } else if (x > L)
      for (; x <= O; )
        Le(f[x], _, b, !0), x++;
    else {
      const B = x, Y = x, te = /* @__PURE__ */ new Map();
      for (x = Y; x <= L; x++) {
        const ve = u[x] = S ? et(u[x]) : Se(u[x]);
        ve.key != null && te.set(ve.key, x);
      }
      let Q, be = 0;
      const he = L - Y + 1;
      let Pe = !1, Te = 0;
      const Mt = new Array(he);
      for (x = 0; x < he; x++) Mt[x] = 0;
      for (x = B; x <= O; x++) {
        const ve = f[x];
        if (be >= he) {
          Le(ve, _, b, !0);
          continue;
        }
        let Ne;
        if (ve.key != null)
          Ne = te.get(ve.key);
        else
          for (Q = Y; Q <= L; Q++)
            if (Mt[Q - Y] === 0 && ct(ve, u[Q])) {
              Ne = Q;
              break;
            }
        Ne === void 0 ? Le(ve, _, b, !0) : (Mt[Ne - Y] = x + 1, Ne >= Te ? Te = Ne : Pe = !0, F(
          ve,
          u[Ne],
          p,
          null,
          _,
          b,
          A,
          w,
          S
        ), be++);
      }
      const Nn = Pe ? ql(Mt) : _t;
      for (Q = Nn.length - 1, x = he - 1; x >= 0; x--) {
        const ve = Y + x, Ne = u[ve], Dn = u[ve + 1], Hn = ve + 1 < H ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Dn.el || Li(Dn)
        ) : T;
        Mt[x] === 0 ? F(
          null,
          Ne,
          p,
          Hn,
          _,
          b,
          A,
          w,
          S
        ) : Pe && (Q < 0 || x !== Nn[Q] ? rt(Ne, p, Hn, 2) : Q--);
      }
    }
  }, rt = (f, u, p, T, _ = null) => {
    const { el: b, type: A, transition: w, children: S, shapeFlag: x } = f;
    if (x & 6) {
      rt(f.component.subTree, u, p, T);
      return;
    }
    if (x & 128) {
      f.suspense.move(u, p, T);
      return;
    }
    if (x & 64) {
      A.move(f, u, p, dt);
      return;
    }
    if (A === fe) {
      n(b, u, p);
      for (let O = 0; O < S.length; O++)
        rt(S[O], u, p, T);
      n(f.anchor, u, p);
      return;
    }
    if (A === Ht) {
      g(f, u, p);
      return;
    }
    if (T !== 2 && x & 1 && w)
      if (T === 0)
        w.beforeEnter(b), n(b, u, p), _e(() => w.enter(b), _);
      else {
        const { leave: O, delayLeave: L, afterLeave: B } = w, Y = () => {
          f.ctx.isUnmounted ? r(b) : n(b, u, p);
        }, te = () => {
          b._isLeaving && b[Ke](
            !0
            /* cancelled */
          ), O(b, () => {
            Y(), B && B();
          });
        };
        L ? L(b, Y, te) : te();
      }
    else
      n(b, u, p);
  }, Le = (f, u, p, T = !1, _ = !1) => {
    const {
      type: b,
      props: A,
      ref: w,
      children: S,
      dynamicChildren: x,
      shapeFlag: H,
      patchFlag: O,
      dirs: L,
      cacheIndex: B
    } = f;
    if (O === -2 && (_ = !1), w != null && (We(), Tt(w, null, p, f, !0), Ge()), B != null && (u.renderCache[B] = void 0), H & 256) {
      u.ctx.deactivate(f);
      return;
    }
    const Y = H & 1 && L, te = !at(f);
    let Q;
    if (te && (Q = A && A.onVnodeBeforeUnmount) && Ee(Q, u, f), H & 6)
      no(f.component, p, T);
    else {
      if (H & 128) {
        f.suspense.unmount(p, T);
        return;
      }
      Y && $e(f, null, u, "beforeUnmount"), H & 64 ? f.type.remove(
        f,
        u,
        p,
        dt,
        T
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== fe || O > 0 && O & 64) ? At(
        x,
        u,
        p,
        !1,
        !0
      ) : (b === fe && O & 384 || !_ && H & 16) && At(S, u, p), T && In(f);
    }
    (te && (Q = A && A.onVnodeUnmounted) || Y) && _e(() => {
      Q && Ee(Q, u, f), Y && $e(f, null, u, "unmounted");
    }, p);
  }, In = (f) => {
    const { type: u, el: p, anchor: T, transition: _ } = f;
    if (u === fe) {
      so(p, T);
      return;
    }
    if (u === Ht) {
      m(f);
      return;
    }
    const b = () => {
      r(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (f.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: A, delayLeave: w } = _, S = () => A(p, b);
      w ? w(f.el, b, S) : S();
    } else
      b();
  }, so = (f, u) => {
    let p;
    for (; f !== u; )
      p = y(f), r(f), f = p;
    r(u);
  }, no = (f, u, p) => {
    const { bum: T, scope: _, job: b, subTree: A, um: w, m: S, a: x } = f;
    nr(S), nr(x), T && $s(T), _.stop(), b && (b.flags |= 8, Le(A, f, u, p)), w && _e(w, u), _e(() => {
      f.isUnmounted = !0;
    }, u);
  }, At = (f, u, p, T = !1, _ = !1, b = 0) => {
    for (let A = b; A < f.length; A++)
      Le(f[A], u, p, T, _);
  }, Qt = (f) => {
    if (f.shapeFlag & 6)
      return Qt(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const u = y(f.anchor || f.el), p = u && u[ti];
    return p ? y(p) : u;
  };
  let Ns = !1;
  const Ln = (f, u, p) => {
    let T;
    f == null ? u._vnode && (Le(u._vnode, null, null, !0), T = u._vnode.component) : F(
      u._vnode || null,
      f,
      u,
      null,
      null,
      null,
      p
    ), u._vnode = f, Ns || (Ns = !0, Kn(T), gs(), Ns = !1);
  }, dt = {
    p: F,
    um: Le,
    m: rt,
    r: In,
    mt: re,
    mc: k,
    pc: I,
    pbc: P,
    n: Qt,
    o: e
  };
  let Ds, Hs;
  return t && ([Ds, Hs] = t(
    dt
  )), {
    render: Ln,
    hydrate: Ds,
    createApp: Fl(Ln, Ds)
  };
}
function qs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function it({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Fi(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Rn(e, t, s = !1) {
  const n = e.children, r = t.children;
  if ($(n) && $(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = et(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && Rn(o, l)), l.type === ut && (l.patchFlag !== -1 ? l.el = o.el : l.__elIndex = i + // take fragment start anchor into account
      (e.type === fe ? 1 : 0)), l.type === ae && !l.el && (l.el = o.el);
    }
}
function ql(e) {
  const t = e.slice(), s = [0];
  let n, r, i, o, l;
  const c = e.length;
  for (n = 0; n < c; n++) {
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
function Ii(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ii(t);
}
function nr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Li(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Li(t.subTree) : null;
}
const Ni = (e) => e.__isSuspense;
function Di(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : sl(e);
}
const fe = /* @__PURE__ */ Symbol.for("v-fgt"), ut = /* @__PURE__ */ Symbol.for("v-txt"), ae = /* @__PURE__ */ Symbol.for("v-cmt"), Ht = /* @__PURE__ */ Symbol.for("v-stc"), $t = [];
let Ce = null;
function cn(e = !1) {
  $t.push(Ce = e ? null : []);
}
function Jl() {
  $t.pop(), Ce = $t[$t.length - 1] || null;
}
let Wt = 1;
function ys(e, t = !1) {
  Wt += e, e < 0 && Ce && t && (Ce.hasOnce = !0);
}
function Hi(e) {
  return e.dynamicChildren = Wt > 0 ? Ce || _t : null, Jl(), Wt > 0 && Ce && Ce.push(e), e;
}
function yf(e, t, s, n, r, i) {
  return Hi(
    ji(
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
function fn(e, t, s, n, r) {
  return Hi(
    ce(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function Ct(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const $i = ({ key: e }) => e ?? null, us = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || ge(e) || U(e) ? { i: ue, r: e, k: t, f: !!s } : e : null);
function ji(e, t = null, s = null, n = 0, r = null, i = e === fe ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $i(t),
    ref: t && us(t),
    scopeId: Qr,
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
    ctx: ue
  };
  return l ? (Fn(c, s), i & 128 && e.normalize(c)) : s && (c.shapeFlag |= ne(s) ? 8 : 16), Wt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ce.push(c), c;
}
const ce = Yl;
function Yl(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === mi) && (e = ae), Ct(e)) {
    const l = nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Fn(l, s), Wt > 0 && !i && Ce && (l.shapeFlag & 6 ? Ce[Ce.indexOf(e)] = l : Ce.push(l)), l.patchFlag = -2, l;
  }
  if (rc(e) && (e = e.__vccOpts), t) {
    t = Xl(t);
    let { class: l, style: c } = t;
    l && !ne(l) && (t.class = Es(l)), z(c) && (Cn(c) && !$(c) && (c = le({}, c)), t.style = ws(c));
  }
  const o = ne(e) ? 1 : Ni(e) ? 128 : si(e) ? 64 : z(e) ? 4 : U(e) ? 2 : 0;
  return ji(
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
function Xl(e) {
  return e ? Cn(e) || wi(e) ? le({}, e) : e : null;
}
function nt(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e, h = t ? Zl(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && $i(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? $(i) ? i.concat(us(t)) : [i, us(t)] : us(t)
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
    patchFlag: t && e.type !== fe ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && nt(e.ssContent),
    ssFallback: e.ssFallback && nt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && n && ht(
    a,
    c.clone(a)
  ), a;
}
function Vi(e = " ", t = 0) {
  return ce(ut, null, e, t);
}
function bf(e, t) {
  const s = ce(Ht, null, e);
  return s.staticCount = t, s;
}
function xf(e = "", t = !1) {
  return t ? (cn(), fn(ae, null, e)) : ce(ae, null, e);
}
function Se(e) {
  return e == null || typeof e == "boolean" ? ce(ae) : $(e) ? ce(
    fe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ct(e) ? et(e) : ce(ut, null, String(e));
}
function et(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : nt(e);
}
function Fn(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if ($(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Fn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !wi(t) ? t._ctx = ue : r === 3 && ue && (ue.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else U(t) ? (t = { default: t, _ctx: ue }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Vi(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Zl(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Es([t.class, n.class]));
      else if (r === "style")
        t.style = ws([t.style, n.style]);
      else if (qt(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !($(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Ee(e, t, s, n = null) {
  Ie(e, t, 7, [
    s,
    n
  ]);
}
const Ql = xi();
let zl = 0;
function Bi(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Ql, i = {
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
    scope: new Co(
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
    propsOptions: Ai(n, r),
    emitsOptions: Ti(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ee,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ee,
    data: ee,
    props: ee,
    attrs: ee,
    slots: ee,
    refs: ee,
    setupState: ee,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Ll.bind(null, i), e.ce && e.ce(i), i;
}
let pe = null;
const Is = () => pe || ue;
let bs, an;
{
  const e = Cs(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  bs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => pe = s
  ), an = t(
    "__VUE_SSR_SETTERS__",
    (s) => Gt = s
  );
}
const Xt = (e) => {
  const t = pe;
  return bs(e), e.scope.on(), () => {
    e.scope.off(), bs(t);
  };
}, rr = () => {
  pe && pe.scope.off(), bs(null);
};
function Ki(e) {
  return e.vnode.shapeFlag & 4;
}
let Gt = !1;
function Ui(e, t = !1, s = !1) {
  t && an(t);
  const { props: n, children: r } = e.vnode, i = Ki(e);
  jl(e, n, i, t), Ul(e, r, s || t);
  const o = i ? ec(e, t) : void 0;
  return t && an(!1), o;
}
function ec(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, wl);
  const { setup: n } = s;
  if (n) {
    We();
    const r = e.setupContext = n.length > 1 ? sc(e) : null, i = Xt(e), o = Yt(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = wr(o);
    if (Ge(), i(), (l || e.sp) && !at(e) && ai(e), l) {
      if (o.then(rr, rr), t)
        return o.then((c) => {
          ir(e, c);
        }).catch((c) => {
          Ps(c, e, 0);
        });
      e.asyncDep = o;
    } else
      ir(e, o);
  } else
    ki(e);
}
function ir(e, t, s) {
  U(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : z(t) && (e.setupState = Jr(t)), ki(e);
}
function ki(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || je);
  {
    const r = Xt(e);
    We();
    try {
      El(e);
    } finally {
      Ge(), r();
    }
  }
}
const tc = {
  get(e, t) {
    return de(e, "get", ""), e[t];
  }
};
function sc(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, tc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ls(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Jr(Wo(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Dt)
        return Dt[s](e);
    },
    has(t, s) {
      return s in t || s in Dt;
    }
  })) : e.proxy;
}
function nc(e, t = !0) {
  return U(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function rc(e) {
  return U(e) && "__vccOpts" in e;
}
const ic = (e, t) => Xo(e, t, Gt);
function oc(e, t, s) {
  try {
    ys(-1);
    const n = arguments.length;
    return n === 2 ? z(t) && !$(t) ? Ct(t) ? ce(e, null, [t]) : ce(e, t) : ce(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Ct(s) && (s = [s]), ce(e, t, s));
  } finally {
    ys(1);
  }
}
const lc = "3.5.26", cc = {
  createComponentInstance: Bi,
  setupComponent: Ui,
  renderComponentRoot: as,
  setCurrentRenderingInstance: Ut,
  isVNode: Ct,
  normalizeVNode: Se
}, Tf = cc;
let un;
const or = typeof window < "u" && window.trustedTypes;
if (or)
  try {
    un = /* @__PURE__ */ or.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Wi = un ? (e) => un.createHTML(e) : (e) => e, fc = "http://www.w3.org/2000/svg", ac = "http://www.w3.org/1998/Math/MathML", Be = typeof document < "u" ? document : null, lr = Be && /* @__PURE__ */ Be.createElement("template"), uc = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Be.createElementNS(fc, e) : t === "mathml" ? Be.createElementNS(ac, e) : s ? Be.createElement(e, { is: s }) : Be.createElement(e);
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
      lr.innerHTML = Wi(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = lr.content;
      if (n === "svg" || n === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
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
}, Xe = "transition", Ot = "animation", wt = /* @__PURE__ */ Symbol("_vtc"), Gi = {
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
}, qi = /* @__PURE__ */ le(
  {},
  oi,
  Gi
), hc = (e) => (e.displayName = "Transition", e.props = qi, e), vf = /* @__PURE__ */ hc(
  (e, { slots: t }) => oc(al, Ji(e), t)
), ot = (e, t = []) => {
  $(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, cr = (e) => e ? $(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ji(e) {
  const t = {};
  for (const C in e)
    C in Gi || (t[C] = e[C]);
  if (e.css === !1)
    return t;
  const {
    name: s = "v",
    type: n,
    duration: r,
    enterFromClass: i = `${s}-enter-from`,
    enterActiveClass: o = `${s}-enter-active`,
    enterToClass: l = `${s}-enter-to`,
    appearFromClass: c = i,
    appearActiveClass: h = o,
    appearToClass: a = l,
    leaveFromClass: d = `${s}-leave-from`,
    leaveActiveClass: y = `${s}-leave-active`,
    leaveToClass: v = `${s}-leave-to`
  } = e, R = dc(r), F = R && R[0], G = R && R[1], {
    onBeforeEnter: V,
    onEnter: q,
    onEnterCancelled: g,
    onLeave: m,
    onLeaveCancelled: M,
    onBeforeAppear: D = V,
    onAppear: j = q,
    onAppearCancelled: k = g
  } = t, E = (C, W, re, oe) => {
    C._enterCancelled = oe, Ze(C, W ? a : l), Ze(C, W ? h : o), re && re();
  }, P = (C, W) => {
    C._isLeaving = !1, Ze(C, d), Ze(C, v), Ze(C, y), W && W();
  }, K = (C) => (W, re) => {
    const oe = C ? j : q, N = () => E(W, C, re);
    ot(oe, [W, N]), fr(() => {
      Ze(W, C ? c : i), De(W, C ? a : l), cr(oe) || ar(W, n, F, N);
    });
  };
  return le(t, {
    onBeforeEnter(C) {
      ot(V, [C]), De(C, i), De(C, o);
    },
    onBeforeAppear(C) {
      ot(D, [C]), De(C, c), De(C, h);
    },
    onEnter: K(!1),
    onAppear: K(!0),
    onLeave(C, W) {
      C._isLeaving = !0;
      const re = () => P(C, W);
      De(C, d), C._enterCancelled ? (De(C, y), hn(C)) : (hn(C), De(C, y)), fr(() => {
        C._isLeaving && (Ze(C, d), De(C, v), cr(m) || ar(C, n, G, re));
      }), ot(m, [C, re]);
    },
    onEnterCancelled(C) {
      E(C, !1, void 0, !0), ot(g, [C]);
    },
    onAppearCancelled(C) {
      E(C, !0, void 0, !0), ot(k, [C]);
    },
    onLeaveCancelled(C) {
      P(C), ot(M, [C]);
    }
  });
}
function dc(e) {
  if (e == null)
    return null;
  if (z(e))
    return [Js(e.enter), Js(e.leave)];
  {
    const t = Js(e);
    return [t, t];
  }
}
function Js(e) {
  return fo(e);
}
function De(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[wt] || (e[wt] = /* @__PURE__ */ new Set())).add(t);
}
function Ze(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[wt];
  s && (s.delete(t), s.size || (e[wt] = void 0));
}
function fr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let pc = 0;
function ar(e, t, s, n) {
  const r = e._endId = ++pc, i = () => {
    r === e._endId && n();
  };
  if (s != null)
    return setTimeout(i, s);
  const { type: o, timeout: l, propCount: c } = Yi(e, t);
  if (!o)
    return n();
  const h = o + "end";
  let a = 0;
  const d = () => {
    e.removeEventListener(h, y), i();
  }, y = (v) => {
    v.target === e && ++a >= c && d();
  };
  setTimeout(() => {
    a < c && d();
  }, l + 1), e.addEventListener(h, y);
}
function Yi(e, t) {
  const s = window.getComputedStyle(e), n = (R) => (s[R] || "").split(", "), r = n(`${Xe}Delay`), i = n(`${Xe}Duration`), o = ur(r, i), l = n(`${Ot}Delay`), c = n(`${Ot}Duration`), h = ur(l, c);
  let a = null, d = 0, y = 0;
  t === Xe ? o > 0 && (a = Xe, d = o, y = i.length) : t === Ot ? h > 0 && (a = Ot, d = h, y = c.length) : (d = Math.max(o, h), a = d > 0 ? o > h ? Xe : Ot : null, y = a ? a === Xe ? i.length : c.length : 0);
  const v = a === Xe && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Xe}Property`).toString()
  );
  return {
    type: a,
    timeout: d,
    propCount: y,
    hasTransform: v
  };
}
function ur(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => hr(s) + hr(e[n])));
}
function hr(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function hn(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function gc(e, t, s) {
  const n = e[wt];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const xs = /* @__PURE__ */ Symbol("_vod"), Xi = /* @__PURE__ */ Symbol("_vsh"), mc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[xs] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : Rt(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), Rt(e, !0), n.enter(e)) : n.leave(e, () => {
      Rt(e, !1);
    }) : Rt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Rt(e, t);
  }
};
function Rt(e, t) {
  e.style.display = t ? e[xs] : "none", e[Xi] = !t;
}
function _c() {
  mc.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const yc = /* @__PURE__ */ Symbol(""), bc = /(?:^|;)\s*display\s*:/;
function xc(e, t, s) {
  const n = e.style, r = ne(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (ne(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && hs(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && hs(n, o, "");
    for (const o in s)
      o === "display" && (i = !0), hs(n, o, s[o]);
  } else if (r) {
    if (t !== s) {
      const o = n[yc];
      o && (s += ";" + o), n.cssText = s, i = bc.test(s);
    }
  } else t && e.removeAttribute("style");
  xs in e && (e[xs] = i ? n.display : "", e[Xi] && (n.display = "none"));
}
const dr = /\s*!important$/;
function hs(e, t, s) {
  if ($(s))
    s.forEach((n) => hs(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Tc(e, t);
    dr.test(s) ? e.setProperty(
      Je(n),
      s.replace(dr, ""),
      "important"
    ) : e[n] = s;
  }
}
const pr = ["Webkit", "Moz", "ms"], Ys = {};
function Tc(e, t) {
  const s = Ys[t];
  if (s)
    return s;
  let n = Me(t);
  if (n !== "filter" && n in e)
    return Ys[t] = n;
  n = Ss(n);
  for (let r = 0; r < pr.length; r++) {
    const i = pr[r] + n;
    if (i in e)
      return Ys[t] = i;
  }
  return t;
}
const gr = "http://www.w3.org/1999/xlink";
function mr(e, t, s, n, r, i = _o(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(gr, t.slice(6, t.length)) : e.setAttributeNS(gr, t, s) : s == null || i && !Or(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Re(s) ? String(s) : s
  );
}
function _r(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Wi(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== c || !("_value" in e)) && (e.value = c), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = Or(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function vc(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Sc(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const yr = /* @__PURE__ */ Symbol("_vei");
function Cc(e, t, s, n, r = null) {
  const i = e[yr] || (e[yr] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, c] = wc(t);
    if (n) {
      const h = i[t] = Mc(
        n,
        r
      );
      vc(e, l, h, c);
    } else o && (Sc(e, l, o, c), i[t] = void 0);
  }
}
const br = /(?:Once|Passive|Capture)$/;
function wc(e) {
  let t;
  if (br.test(e)) {
    t = {};
    let n;
    for (; n = e.match(br); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Je(e.slice(2)), t];
}
let Xs = 0;
const Ec = /* @__PURE__ */ Promise.resolve(), Ac = () => Xs || (Ec.then(() => Xs = 0), Xs = Date.now());
function Mc(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Ie(
      Pc(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Ac(), s;
}
function Pc(e, t) {
  if ($(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const xr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Oc = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? gc(e, n, o) : t === "style" ? xc(e, s, n) : qt(t) ? dn(t) || Cc(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Rc(e, t, n, o)) ? (_r(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && mr(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ne(n)) ? _r(e, Me(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), mr(e, t, n, o));
};
function Rc(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && xr(t) && U(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return xr(t) && ne(s) ? !1 : t in e;
}
const Zi = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), Ts = /* @__PURE__ */ Symbol("_moveCb"), Tr = /* @__PURE__ */ Symbol("_enterCb"), Fc = (e) => (delete e.props.mode, e), Ic = /* @__PURE__ */ Fc({
  name: "TransitionGroup",
  props: /* @__PURE__ */ le({}, qi, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const s = Is(), n = ii();
    let r, i;
    return di(() => {
      if (!r.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!Hc(
        r[0].el,
        s.vnode.el,
        o
      )) {
        r = [];
        return;
      }
      r.forEach(Lc), r.forEach(Nc);
      const l = r.filter(Dc);
      hn(s.vnode.el), l.forEach((c) => {
        const h = c.el, a = h.style;
        De(h, o), a.transform = a.webkitTransform = a.transitionDuration = "";
        const d = h[Ts] = (y) => {
          y && y.target !== h || (!y || y.propertyName.endsWith("transform")) && (h.removeEventListener("transitionend", d), h[Ts] = null, Ze(h, o));
        };
        h.addEventListener("transitionend", d);
      }), r = [];
    }), () => {
      const o = X(e), l = Ji(o);
      let c = o.tag || fe;
      if (r = [], i)
        for (let h = 0; h < i.length; h++) {
          const a = i[h];
          a.el && a.el instanceof Element && (r.push(a), ht(
            a,
            kt(
              a,
              l,
              n,
              s
            )
          ), Zi.set(a, {
            left: a.el.offsetLeft,
            top: a.el.offsetTop
          }));
        }
      i = t.default ? En(t.default()) : [];
      for (let h = 0; h < i.length; h++) {
        const a = i[h];
        a.key != null && ht(
          a,
          kt(a, l, n, s)
        );
      }
      return ce(c, null, i);
    };
  }
}), Sf = Ic;
function Lc(e) {
  const t = e.el;
  t[Ts] && t[Ts](), t[Tr] && t[Tr]();
}
function Nc(e) {
  Qi.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Dc(e) {
  const t = Zi.get(e), s = Qi.get(e), n = t.left - s.left, r = t.top - s.top;
  if (n || r) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${r}px)`, i.transitionDuration = "0s", e;
  }
}
function Hc(e, t, s) {
  const n = e.cloneNode(), r = e[wt];
  r && r.forEach((l) => {
    l.split(/\s+/).forEach((c) => c && n.classList.remove(c));
  }), s.split(/\s+/).forEach((l) => l && n.classList.add(l)), n.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(n);
  const { hasTransform: o } = Yi(n);
  return i.removeChild(n), o;
}
const $c = {}, jc = {}, Vc = {};
function Bc() {
  $c.getSSRProps = ({ value: e }) => ({ value: e }), Vc.getSSRProps = ({ value: e }, t) => {
    if (t.props && As(t.props.value, e))
      return { checked: !0 };
  }, jc.getSSRProps = ({ value: e }, t) => {
    if ($(e)) {
      if (t.props && vo(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (gn(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const Kc = ["ctrl", "shift", "alt", "meta"], Uc = {
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
  exact: (e, t) => Kc.some((s) => e[`${s}Key`] && !t.includes(s))
}, Cf = (e, t) => {
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = Uc[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, kc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, wf = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = ((r) => {
    if (!("key" in r))
      return;
    const i = Je(r.key);
    if (t.some(
      (o) => o === i || kc[o] === i
    ))
      return e(r);
  }));
}, zi = /* @__PURE__ */ le({ patchProp: Oc }, uc);
let jt, vr = !1;
function Wc() {
  return jt || (jt = Wl(zi));
}
function Gc() {
  return jt = vr ? jt : Gl(zi), vr = !0, jt;
}
const Ef = ((...e) => {
  const t = Wc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = to(n);
    if (!r) return;
    const i = t._component;
    !U(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, eo(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
}), Af = ((...e) => {
  const t = Gc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = to(n);
    if (r)
      return s(r, !0, eo(r));
  }, t;
});
function eo(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function to(e) {
  return ne(e) ? document.querySelector(e) : e;
}
let Sr = !1;
const Mf = () => {
  Sr || (Sr = !0, Bc(), _c());
};
export {
  Is as $,
  nf as A,
  Mf as B,
  ae as C,
  Af as D,
  uf as E,
  fe as F,
  fn as G,
  cn as H,
  nl as I,
  hf as J,
  Jc as K,
  Xl as L,
  of as M,
  je as N,
  cs as O,
  qo as P,
  ko as Q,
  vn as R,
  Ht as S,
  ut as T,
  ic as U,
  oc as V,
  rl as W,
  rf as X,
  ks as Y,
  el as Z,
  tn as _,
  ce as a,
  hi as a0,
  yf as a1,
  xf as a2,
  ji as a3,
  bf as a4,
  Vi as a5,
  So as a6,
  lf as a7,
  mf as a8,
  pf as a9,
  wf as aa,
  vf as ab,
  Cf as ac,
  gf as ad,
  df as ae,
  mc as af,
  Sf as ag,
  pi as ah,
  yl as ai,
  _f as aj,
  cf as ak,
  af as al,
  il as b,
  Ef as c,
  ff as d,
  U as e,
  ne as f,
  Cs as g,
  sf as h,
  wr as i,
  tf as j,
  $ as k,
  Xc as l,
  Zl as m,
  Et as n,
  qt as o,
  Es as p,
  ws as q,
  qc as r,
  Tf as s,
  ef as t,
  Yc as u,
  zc as v,
  Zc as w,
  Or as x,
  Qc as y,
  z
};
