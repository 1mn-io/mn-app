// @__NO_SIDE_EFFECTS__
function Et(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ee = {}, yt = [], je = () => {
}, mr = () => !1, Zt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Sn = (e) => e.startsWith("onUpdate:"), fe = Object.assign, ls = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ki = Object.prototype.hasOwnProperty, X = (e, t) => Ki.call(e, t), L = Array.isArray, xt = (e) => zt(e) === "[object Map]", Qt = (e) => zt(e) === "[object Set]", Ms = (e) => zt(e) === "[object Date]", $ = (e) => typeof e == "function", re = (e) => typeof e == "string", Be = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", _r = (e) => (Z(e) || $(e)) && $(e.then) && $(e.catch), br = Object.prototype.toString, zt = (e) => br.call(e), Wi = (e) => zt(e).slice(8, -1), yr = (e) => zt(e) === "[object Object]", cs = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ht = /* @__PURE__ */ Et(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Tn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ki = /-\w/g, be = Tn(
  (e) => e.replace(ki, (t) => t.slice(1).toUpperCase())
), Gi = /\B([A-Z])/g, it = Tn(
  (e) => e.replace(Gi, "-$1").toLowerCase()
), Cn = Tn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dn = Tn(
  (e) => e ? `on${Cn(e)}` : ""
), Ve = (e, t) => !Object.is(e, t), an = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, xr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, wn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, qi = (e) => {
  const t = re(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Os;
const An = () => Os || (Os = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fs(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = re(s) ? Zi(s) : fs(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (re(e) || Z(e))
    return e;
}
const Ji = /;(?![^(]*\))/g, Yi = /:([^]+)/, Xi = /\/\*[^]*?\*\//g;
function Zi(e) {
  const t = {};
  return e.replace(Xi, "").split(Ji).forEach((n) => {
    if (n) {
      const s = n.split(Yi);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ic(e) {
  if (!e) return "";
  if (re(e)) return e;
  let t = "";
  for (const n in e) {
    const s = e[n];
    if (re(s) || typeof s == "number") {
      const r = n.startsWith("--") ? n : it(n);
      t += `${r}:${s};`;
    }
  }
  return t;
}
function us(e) {
  let t = "";
  if (re(e))
    t = e;
  else if (L(e))
    for (let n = 0; n < e.length; n++) {
      const s = us(e[n]);
      s && (t += s + " ");
    }
  else if (Z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Qi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", zi = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Nc = /* @__PURE__ */ Et(Qi), Lc = /* @__PURE__ */ Et(zi), vr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", eo = /* @__PURE__ */ Et(vr), Dc = /* @__PURE__ */ Et(
  vr + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function Sr(e) {
  return !!e || e === "";
}
const to = /[>/="'\u0009\u000a\u000c\u0020]/, Hn = {};
function Hc(e) {
  if (Hn.hasOwnProperty(e))
    return Hn[e];
  const t = to.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), Hn[e] = !t;
}
const $c = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function Vc(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const no = /["'&<>]/;
function jc(e) {
  const t = "" + e, n = no.exec(t);
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
const so = /^-?>|<!--|-->|--!>|<!-$/g;
function Bc(e) {
  return e.replace(so, "");
}
function ro(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = st(e[s], t[s]);
  return n;
}
function st(e, t) {
  if (e === t) return !0;
  let n = Ms(e), s = Ms(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Be(e), s = Be(t), n || s)
    return e === t;
  if (n = L(e), s = L(t), n || s)
    return n && s ? ro(e, t) : !1;
  if (n = Z(e), s = Z(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !st(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Tr(e, t) {
  return e.findIndex((n) => st(n, t));
}
const Cr = (e) => !!(e && e.__v_isRef === !0), io = (e) => re(e) ? e : e == null ? "" : L(e) || Z(e) && (e.toString === br || !$(e.toString)) ? Cr(e) ? io(e.value) : JSON.stringify(e, wr, 2) : String(e), wr = (e, t) => Cr(t) ? wr(e, t.value) : xt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[$n(s, i) + " =>"] = r, n),
    {}
  )
} : Qt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => $n(n))
} : Be(t) ? $n(t) : Z(t) && !L(t) && !yr(t) ? String(t) : t, $n = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Be(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Uc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let ue;
class oo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ue && (ue.active ? (this.parent = ue, this.index = (ue.scopes || (ue.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
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
      const n = ue;
      try {
        return ue = this, t();
      } finally {
        ue = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ue, ue = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ue === this)
        ue = this.prevScope;
      else {
        let t = ue;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
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
function lo() {
  return ue;
}
let ne;
const Vn = /* @__PURE__ */ new WeakSet();
class Ar {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ue && (ue.active ? ue.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Vn.has(this) && (Vn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Mr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ps(this), Or(this);
    const t = ne, n = Pe;
    ne = this, Pe = !0;
    try {
      return this.fn();
    } finally {
      Pr(this), ne = t, Pe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ds(t);
      this.deps = this.depsTail = void 0, Ps(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Vn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Yn(this) && this.run();
  }
  get dirty() {
    return Yn(this);
  }
}
let Er = 0, Lt, Dt;
function Mr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Dt, Dt = e;
    return;
  }
  e.next = Lt, Lt = e;
}
function as() {
  Er++;
}
function hs() {
  if (--Er > 0)
    return;
  if (Dt) {
    let t = Dt;
    for (Dt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Lt; ) {
    let t = Lt;
    for (Lt = void 0; t; ) {
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
function Or(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Pr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), ds(s), co(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Yn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Rr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Rr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Bt) || (e.globalVersion = Bt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Yn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ne, s = Pe;
  ne = e, Pe = !0;
  try {
    Or(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ve(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    ne = n, Pe = s, Pr(e), e.flags &= -3;
  }
}
function ds(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      ds(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function co(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Pe = !0;
const Fr = [];
function Ye() {
  Fr.push(Pe), Pe = !1;
}
function Xe() {
  const e = Fr.pop();
  Pe = e === void 0 ? !0 : e;
}
function Ps(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ne;
    ne = void 0;
    try {
      t();
    } finally {
      ne = n;
    }
  }
}
let Bt = 0;
class fo {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ps {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ne || !Pe || ne === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ne)
      n = this.activeLink = new fo(ne, this), ne.deps ? (n.prevDep = ne.depsTail, ne.depsTail.nextDep = n, ne.depsTail = n) : ne.deps = ne.depsTail = n, Ir(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ne.depsTail, n.nextDep = void 0, ne.depsTail.nextDep = n, ne.depsTail = n, ne.deps === n && (ne.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Bt++, this.notify(t);
  }
  notify(t) {
    as();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      hs();
    }
  }
}
function Ir(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Ir(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Xn = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ Symbol(
  ""
), Zn = /* @__PURE__ */ Symbol(
  ""
), Ut = /* @__PURE__ */ Symbol(
  ""
);
function ae(e, t, n) {
  if (Pe && ne) {
    let s = Xn.get(e);
    s || Xn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new ps()), r.map = s, r.key = n), r.track();
  }
}
function Ge(e, t, n, s, r, i) {
  const o = Xn.get(e);
  if (!o) {
    Bt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (as(), t === "clear")
    o.forEach(l);
  else {
    const c = L(e), h = c && cs(n);
    if (c && n === "length") {
      const u = Number(s);
      o.forEach((d, v) => {
        (v === "length" || v === Ut || !Be(v) && v >= u) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), h && l(o.get(Ut)), t) {
        case "add":
          c ? h && l(o.get("length")) : (l(o.get(dt)), xt(e) && l(o.get(Zn)));
          break;
        case "delete":
          c || (l(o.get(dt)), xt(e) && l(o.get(Zn)));
          break;
        case "set":
          xt(e) && l(o.get(dt));
          break;
      }
  }
  hs();
}
function mt(e) {
  const t = /* @__PURE__ */ Y(e);
  return t === e ? t : (ae(t, "iterate", Ut), /* @__PURE__ */ Me(e) ? t : t.map(Re));
}
function En(e) {
  return ae(e = /* @__PURE__ */ Y(e), "iterate", Ut), e;
}
function $e(e, t) {
  return /* @__PURE__ */ Ze(e) ? wt(/* @__PURE__ */ nt(e) ? Re(t) : t) : Re(t);
}
const uo = {
  __proto__: null,
  [Symbol.iterator]() {
    return jn(this, Symbol.iterator, (e) => $e(this, e));
  },
  concat(...e) {
    return mt(this).concat(
      ...e.map((t) => L(t) ? mt(t) : t)
    );
  },
  entries() {
    return jn(this, "entries", (e) => (e[1] = $e(this, e[1]), e));
  },
  every(e, t) {
    return Ue(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ue(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => $e(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ue(
      this,
      "find",
      e,
      t,
      (n) => $e(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ue(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ue(
      this,
      "findLast",
      e,
      t,
      (n) => $e(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ue(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ue(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Bn(this, "includes", e);
  },
  indexOf(...e) {
    return Bn(this, "indexOf", e);
  },
  join(e) {
    return mt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Bn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ue(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Pt(this, "pop");
  },
  push(...e) {
    return Pt(this, "push", e);
  },
  reduce(e, ...t) {
    return Rs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Rs(this, "reduceRight", e, t);
  },
  shift() {
    return Pt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ue(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Pt(this, "splice", e);
  },
  toReversed() {
    return mt(this).toReversed();
  },
  toSorted(e) {
    return mt(this).toSorted(e);
  },
  toSpliced(...e) {
    return mt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Pt(this, "unshift", e);
  },
  values() {
    return jn(this, "values", (e) => $e(this, e));
  }
};
function jn(e, t, n) {
  const s = En(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ Me(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const ao = Array.prototype;
function Ue(e, t, n, s, r, i) {
  const o = En(e), l = o !== e && !/* @__PURE__ */ Me(e), c = o[t];
  if (c !== ao[t]) {
    const d = c.apply(e, i);
    return l ? Re(d) : d;
  }
  let h = n;
  o !== e && (l ? h = function(d, v) {
    return n.call(this, $e(e, d), v, e);
  } : n.length > 2 && (h = function(d, v) {
    return n.call(this, d, v, e);
  }));
  const u = c.call(o, h, s);
  return l && r ? r(u) : u;
}
function Rs(e, t, n, s) {
  const r = En(e), i = r !== e && !/* @__PURE__ */ Me(e);
  let o = n, l = !1;
  r !== e && (i ? (l = s.length === 0, o = function(h, u, d) {
    return l && (l = !1, h = $e(e, h)), n.call(this, h, $e(e, u), d, e);
  }) : n.length > 3 && (o = function(h, u, d) {
    return n.call(this, h, u, d, e);
  }));
  const c = r[t](o, ...s);
  return l ? $e(e, c) : c;
}
function Bn(e, t, n) {
  const s = /* @__PURE__ */ Y(e);
  ae(s, "iterate", Ut);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ bs(n[0]) ? (n[0] = /* @__PURE__ */ Y(n[0]), s[t](...n)) : r;
}
function Pt(e, t, n = []) {
  Ye(), as();
  const s = (/* @__PURE__ */ Y(e))[t].apply(e, n);
  return hs(), Xe(), s;
}
const ho = /* @__PURE__ */ Et("__proto__,__v_isRef,__isVue"), Nr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Be)
);
function po(e) {
  Be(e) || (e = String(e));
  const t = /* @__PURE__ */ Y(this);
  return ae(t, "has", e), t.hasOwnProperty(e);
}
class Lr {
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
      return s === (r ? i ? Co : Vr : i ? $r : Hr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = L(t);
    if (!r) {
      let c;
      if (o && (c = uo[n]))
        return c;
      if (n === "hasOwnProperty")
        return po;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ge(t) ? t : s
    );
    if ((Be(n) ? Nr.has(n) : ho(n)) || (r || ae(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ ge(l)) {
      const c = o && cs(n) ? l : l.value;
      return r && Z(c) ? /* @__PURE__ */ zn(c) : c;
    }
    return Z(l) ? r ? /* @__PURE__ */ zn(l) : /* @__PURE__ */ ms(l) : l;
  }
}
class Dr extends Lr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = L(t) && cs(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ Ze(i);
      if (!/* @__PURE__ */ Me(s) && !/* @__PURE__ */ Ze(s) && (i = /* @__PURE__ */ Y(i), s = /* @__PURE__ */ Y(s)), !o && /* @__PURE__ */ ge(i) && !/* @__PURE__ */ ge(s))
        return h || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : X(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ge(t) ? t : r
    );
    return t === /* @__PURE__ */ Y(r) && (l ? Ve(s, i) && Ge(t, "set", n, s) : Ge(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = X(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Ge(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Be(n) || !Nr.has(n)) && ae(t, "has", n), s;
  }
  ownKeys(t) {
    return ae(
      t,
      "iterate",
      L(t) ? "length" : dt
    ), Reflect.ownKeys(t);
  }
}
class go extends Lr {
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
const mo = /* @__PURE__ */ new Dr(), _o = /* @__PURE__ */ new go(), bo = /* @__PURE__ */ new Dr(!0);
const Qn = (e) => e, rn = (e) => Reflect.getPrototypeOf(e);
function yo(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ Y(r), o = xt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = r[e](...s), u = n ? Qn : t ? wt : Re;
    return !t && ae(
      i,
      "iterate",
      c ? Zn : dt
    ), fe(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: d, done: v } = h.next();
          return v ? { value: d, done: v } : {
            value: l ? [u(d[0]), u(d[1])] : u(d),
            done: v
          };
        }
      }
    );
  };
}
function on(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function xo(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ Y(i), l = /* @__PURE__ */ Y(r);
      e || (Ve(r, l) && ae(o, "get", r), ae(o, "get", l));
      const { has: c } = rn(o), h = t ? Qn : e ? wt : Re;
      if (c.call(o, r))
        return h(i.get(r));
      if (c.call(o, l))
        return h(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ae(/* @__PURE__ */ Y(r), "iterate", dt), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ Y(i), l = /* @__PURE__ */ Y(r);
      return e || (Ve(r, l) && ae(o, "has", r), ae(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ Y(l), h = t ? Qn : e ? wt : Re;
      return !e && ae(c, "iterate", dt), l.forEach((u, d) => r.call(i, h(u), h(d), o));
    }
  };
  return fe(
    n,
    e ? {
      add: on("add"),
      set: on("set"),
      delete: on("delete"),
      clear: on("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ Y(this), o = rn(i), l = /* @__PURE__ */ Y(r), c = !t && !/* @__PURE__ */ Me(r) && !/* @__PURE__ */ Ze(r) ? l : r;
        return o.has.call(i, c) || Ve(r, c) && o.has.call(i, r) || Ve(l, c) && o.has.call(i, l) || (i.add(c), Ge(i, "add", c, c)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Me(i) && !/* @__PURE__ */ Ze(i) && (i = /* @__PURE__ */ Y(i));
        const o = /* @__PURE__ */ Y(this), { has: l, get: c } = rn(o);
        let h = l.call(o, r);
        h || (r = /* @__PURE__ */ Y(r), h = l.call(o, r));
        const u = c.call(o, r);
        return o.set(r, i), h ? Ve(i, u) && Ge(o, "set", r, i) : Ge(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ Y(this), { has: o, get: l } = rn(i);
        let c = o.call(i, r);
        c || (r = /* @__PURE__ */ Y(r), c = o.call(i, r)), l && l.call(i, r);
        const h = i.delete(r);
        return c && Ge(i, "delete", r, void 0), h;
      },
      clear() {
        const r = /* @__PURE__ */ Y(this), i = r.size !== 0, o = r.clear();
        return i && Ge(
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
    n[r] = yo(r, e, t);
  }), n;
}
function gs(e, t) {
  const n = xo(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    X(n, r) && r in s ? n : s,
    r,
    i
  );
}
const vo = {
  get: /* @__PURE__ */ gs(!1, !1)
}, So = {
  get: /* @__PURE__ */ gs(!1, !0)
}, To = {
  get: /* @__PURE__ */ gs(!0, !1)
};
const Hr = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), Vr = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new WeakMap();
function wo(e) {
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
function Ao(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : wo(Wi(e));
}
// @__NO_SIDE_EFFECTS__
function ms(e) {
  return /* @__PURE__ */ Ze(e) ? e : _s(
    e,
    !1,
    mo,
    vo,
    Hr
  );
}
// @__NO_SIDE_EFFECTS__
function Eo(e) {
  return _s(
    e,
    !1,
    bo,
    So,
    $r
  );
}
// @__NO_SIDE_EFFECTS__
function zn(e) {
  return _s(
    e,
    !0,
    _o,
    To,
    Vr
  );
}
function _s(e, t, n, s, r) {
  if (!Z(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Ao(e);
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
// @__NO_SIDE_EFFECTS__
function nt(e) {
  return /* @__PURE__ */ Ze(e) ? /* @__PURE__ */ nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Me(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function bs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Y(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Y(t) : e;
}
function Mo(e) {
  return !X(e, "__v_skip") && Object.isExtensible(e) && xr(e, "__v_skip", !0), e;
}
const Re = (e) => Z(e) ? /* @__PURE__ */ ms(e) : e, wt = (e) => Z(e) ? /* @__PURE__ */ zn(e) : e;
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Kc(e) {
  return jr(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Wc(e) {
  return jr(e, !0);
}
function jr(e, t) {
  return /* @__PURE__ */ ge(e) ? e : new Oo(e, t);
}
class Oo {
  constructor(t, n) {
    this.dep = new ps(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Y(t), this._value = n ? t : Re(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Me(t) || /* @__PURE__ */ Ze(t);
    t = s ? t : /* @__PURE__ */ Y(t), Ve(t, n) && (this._rawValue = t, this._value = s ? t : Re(t), this.dep.trigger());
  }
}
function Po(e) {
  return /* @__PURE__ */ ge(e) ? e.value : e;
}
const Ro = {
  get: (e, t, n) => t === "__v_raw" ? e : Po(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ ge(r) && !/* @__PURE__ */ ge(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Br(e) {
  return /* @__PURE__ */ nt(e) ? e : new Proxy(e, Ro);
}
class Fo {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ps(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Bt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ne !== this)
      return Mr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Rr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Io(e, t, n = !1) {
  let s, r;
  return $(e) ? s = e : (s = e.get, r = e.set), new Fo(s, r, n);
}
const ln = {}, gn = /* @__PURE__ */ new WeakMap();
let ut;
function No(e, t = !1, n = ut) {
  if (n) {
    let s = gn.get(n);
    s || gn.set(n, s = []), s.push(e);
  }
}
function Lo(e, t, n = ee) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = n, h = (m) => r ? m : /* @__PURE__ */ Me(m) || r === !1 || r === 0 ? qe(m, 1) : qe(m);
  let u, d, v, A, B = !1, N = !1;
  if (/* @__PURE__ */ ge(e) ? (d = () => e.value, B = /* @__PURE__ */ Me(e)) : /* @__PURE__ */ nt(e) ? (d = () => h(e), B = !0) : L(e) ? (N = !0, B = e.some((m) => /* @__PURE__ */ nt(m) || /* @__PURE__ */ Me(m)), d = () => e.map((m) => {
    if (/* @__PURE__ */ ge(m))
      return m.value;
    if (/* @__PURE__ */ nt(m))
      return h(m);
    if ($(m))
      return c ? c(m, 2) : m();
  })) : $(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
    if (v) {
      Ye();
      try {
        v();
      } finally {
        Xe();
      }
    }
    const m = ut;
    ut = u;
    try {
      return c ? c(e, 3, [A]) : e(A);
    } finally {
      ut = m;
    }
  } : d = je, t && r) {
    const m = d, M = r === !0 ? 1 / 0 : r;
    d = () => qe(m(), M);
  }
  const Q = lo(), q = () => {
    u.stop(), Q && Q.active && ls(Q.effects, u);
  };
  if (i && t) {
    const m = t;
    t = (...M) => {
      m(...M), q();
    };
  }
  let U = N ? new Array(e.length).fill(ln) : ln;
  const g = (m) => {
    if (!(!(u.flags & 1) || !u.dirty && !m))
      if (t) {
        const M = u.run();
        if (r || B || (N ? M.some((V, K) => Ve(V, U[K])) : Ve(M, U))) {
          v && v();
          const V = ut;
          ut = u;
          try {
            const K = [
              M,
              // pass undefined as the old value when it's changed for the first time
              U === ln ? void 0 : N && U[0] === ln ? [] : U,
              A
            ];
            U = M, c ? c(t, 3, K) : (
              // @ts-expect-error
              t(...K)
            );
          } finally {
            ut = V;
          }
        }
      } else
        u.run();
  };
  return l && l(g), u = new Ar(d), u.scheduler = o ? () => o(g, !1) : g, A = (m) => No(m, !1, u), v = u.onStop = () => {
    const m = gn.get(u);
    if (m) {
      if (c)
        c(m, 4);
      else
        for (const M of m) M();
      gn.delete(u);
    }
  }, t ? s ? g(!0) : U = u.run() : o ? o(g.bind(null, !0), !0) : u.run(), q.pause = u.pause.bind(u), q.resume = u.resume.bind(u), q.stop = q, q;
}
function qe(e, t = 1 / 0, n) {
  if (t <= 0 || !Z(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ge(e))
    qe(e.value, t, n);
  else if (L(e))
    for (let s = 0; s < e.length; s++)
      qe(e[s], t, n);
  else if (Qt(e) || xt(e))
    e.forEach((s) => {
      qe(s, t, n);
    });
  else if (yr(e)) {
    for (const s in e)
      qe(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && qe(e[s], t, n);
  }
  return e;
}
function en(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Mn(r, t, n);
  }
}
function Fe(e, t, n, s) {
  if ($(e)) {
    const r = en(e, t, n, s);
    return r && _r(r) && r.catch((i) => {
      Mn(i, t, n);
    }), r;
  }
  if (L(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Fe(e[i], t, n, s));
    return r;
  }
}
function Mn(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ee;
  if (t) {
    let l = t.parent;
    const c = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, c, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ye(), en(i, null, 10, [
        e,
        c,
        h
      ]), Xe();
      return;
    }
  }
  Do(e, n, r, s, o);
}
function Do(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const _e = [];
let Le = -1;
const vt = [];
let et = null, bt = 0;
const Ur = /* @__PURE__ */ Promise.resolve();
let mn = null;
function Kr(e) {
  const t = mn || Ur;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ho(e) {
  let t = Le + 1, n = _e.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = _e[s], i = Kt(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ys(e) {
  if (!(e.flags & 1)) {
    const t = Kt(e), n = _e[_e.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kt(n) ? _e.push(e) : _e.splice(Ho(t), 0, e), e.flags |= 1, Wr();
  }
}
function Wr() {
  mn || (mn = Ur.then(kr));
}
function $o(e) {
  L(e) ? vt.push(...e) : et && e.id === -1 ? et.splice(bt + 1, 0, e) : e.flags & 1 || (vt.push(e), e.flags |= 1), Wr();
}
function Fs(e, t, n = Le + 1) {
  for (; n < _e.length; n++) {
    const s = _e[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      _e.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function _n(e) {
  if (vt.length) {
    const t = [...new Set(vt)].sort(
      (n, s) => Kt(n) - Kt(s)
    );
    if (vt.length = 0, et) {
      et.push(...t);
      return;
    }
    for (et = t, bt = 0; bt < et.length; bt++) {
      const n = et[bt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    et = null, bt = 0;
  }
}
const Kt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function kr(e) {
  try {
    for (Le = 0; Le < _e.length; Le++) {
      const t = _e[Le];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), en(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Le < _e.length; Le++) {
      const t = _e[Le];
      t && (t.flags &= -2);
    }
    Le = -1, _e.length = 0, _n(), mn = null, (_e.length || vt.length) && kr();
  }
}
let Te = null, Gr = null;
function Wt(e) {
  const t = Te;
  return Te = e, Gr = e && e.type.__scopeId || null, t;
}
function Vo(e, t = Te, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && xn(-1);
    const i = Wt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Wt(i), s._d && xn(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function kc(e, t) {
  if (Te === null)
    return e;
  const n = Fn(Te), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = ee] = t[r];
    i && ($(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && qe(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function De(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[s];
    c && (Ye(), Fe(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Xe());
  }
}
function jo(e, t) {
  if (de) {
    let n = de.provides;
    const s = de.parent && de.parent.provides;
    s === n && (n = de.provides = Object.create(s)), n[e] = t;
  }
}
function hn(e, t, n = !1) {
  const s = Fi();
  if (s || Ct) {
    let r = Ct ? Ct._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(s && s.proxy) : t;
  }
}
const Bo = /* @__PURE__ */ Symbol.for("v-scx"), Uo = () => hn(Bo);
function Un(e, t, n) {
  return qr(e, t, n);
}
function qr(e, t, n = ee) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = fe({}, n), c = t && s || !t && i !== "post";
  let h;
  if (Jt) {
    if (i === "sync") {
      const A = Uo();
      h = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!c) {
      const A = () => {
      };
      return A.stop = je, A.resume = je, A.pause = je, A;
    }
  }
  const u = de;
  l.call = (A, B, N) => Fe(A, u, B, N);
  let d = !1;
  i === "post" ? l.scheduler = (A) => {
    ye(A, u && u.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (A, B) => {
    B ? A() : ys(A);
  }), l.augmentJob = (A) => {
    t && (A.flags |= 4), d && (A.flags |= 2, u && (A.id = u.uid, A.i = u));
  };
  const v = Lo(e, t, l);
  return Jt && (h ? h.push(v) : c && v()), v;
}
function Ko(e, t, n) {
  const s = this.proxy, r = re(e) ? e.includes(".") ? Jr(s, e) : () => s[e] : e.bind(s, s);
  let i;
  $(t) ? i = t : (i = t.handler, n = t);
  const o = tn(this), l = qr(r, i.bind(s), n);
  return o(), l;
}
function Jr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Wo = /* @__PURE__ */ Symbol("_vte"), Yr = (e) => e.__isTeleport, He = /* @__PURE__ */ Symbol("_leaveCb"), Rt = /* @__PURE__ */ Symbol("_enterCb");
function ko() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return si(() => {
    e.isMounted = !0;
  }), ri(() => {
    e.isUnmounting = !0;
  }), e;
}
const we = [Function, Array], Xr = {
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
}, Zr = (e) => {
  const t = e.subTree;
  return t.component ? Zr(t.component) : t;
}, Go = {
  name: "BaseTransition",
  props: Xr,
  setup(e, { slots: t }) {
    const n = Fi(), s = ko();
    return () => {
      const r = t.default && ei(t.default(), !0), i = r && r.length ? Qr(r) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? Vl() : void 0
      );
      if (!i)
        return;
      const o = /* @__PURE__ */ Y(e), { mode: l } = o;
      if (s.isLeaving)
        return Kn(i);
      const c = Is(i);
      if (!c)
        return Kn(i);
      let h = es(
        c,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => h = d
      );
      c.type !== he && kt(c, h);
      let u = n.subTree && Is(n.subTree);
      if (u && u.type !== he && !at(u, c) && Zr(n).type !== he) {
        let d = es(
          u,
          o,
          s,
          n
        );
        if (kt(u, d), l === "out-in" && c.type !== he)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, Kn(i);
        l === "in-out" && c.type !== he ? d.delayLeave = (v, A, B) => {
          const N = zr(
            s,
            u
          );
          N[String(u.key)] = u, v[He] = () => {
            A(), v[He] = void 0, delete h.delayedLeave, u = void 0;
          }, h.delayedLeave = () => {
            B(), delete h.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function Qr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== he) {
        t = n;
        break;
      }
  }
  return t;
}
const qo = Go;
function zr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function es(e, t, n, s, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: h,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: v,
    onLeave: A,
    onAfterLeave: B,
    onLeaveCancelled: N,
    onBeforeAppear: Q,
    onAppear: q,
    onAfterAppear: U,
    onAppearCancelled: g
  } = t, m = String(e.key), M = zr(n, e), V = (O, P) => {
    O && Fe(
      O,
      s,
      9,
      P
    );
  }, K = (O, P) => {
    const W = P[1];
    V(O, P), L(O) ? O.every((T) => T.length <= 1) && W() : O.length <= 1 && W();
  }, k = {
    mode: o,
    persisted: l,
    beforeEnter(O) {
      let P = c;
      if (!n.isMounted)
        if (i)
          P = Q || c;
        else
          return;
      O[He] && O[He](
        !0
        /* cancelled */
      );
      const W = M[m];
      W && at(e, W) && W.el[He] && W.el[He](), V(P, [O]);
    },
    enter(O) {
      if (M[m] === e) return;
      let P = h, W = u, T = d;
      if (!n.isMounted)
        if (i)
          P = q || h, W = U || u, T = g || d;
        else
          return;
      let j = !1;
      O[Rt] = (oe) => {
        j || (j = !0, oe ? V(T, [O]) : V(W, [O]), k.delayedLeave && k.delayedLeave(), O[Rt] = void 0);
      };
      const se = O[Rt].bind(null, !1);
      P ? K(P, [O, se]) : se();
    },
    leave(O, P) {
      const W = String(e.key);
      if (O[Rt] && O[Rt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return P();
      V(v, [O]);
      let T = !1;
      O[He] = (se) => {
        T || (T = !0, P(), se ? V(N, [O]) : V(B, [O]), O[He] = void 0, M[W] === e && delete M[W]);
      };
      const j = O[He].bind(null, !1);
      M[W] = e, A ? K(A, [O, j]) : j();
    },
    clone(O) {
      const P = es(
        O,
        t,
        n,
        s,
        r
      );
      return r && r(P), P;
    }
  };
  return k;
}
function Kn(e) {
  if (On(e))
    return e = rt(e), e.children = null, e;
}
function Is(e) {
  if (!On(e))
    return Yr(e.type) && e.children ? Qr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && $(n.default))
      return n.default();
  }
}
function kt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, kt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ei(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === Ee ? (o.patchFlag & 128 && r++, s = s.concat(
      ei(o.children, t, l)
    )) : (t || o.type !== he) && s.push(l != null ? rt(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Gc(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function ti(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ns(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const bn = /* @__PURE__ */ new WeakMap();
function St(e, t, n, s, r = !1) {
  if (L(e)) {
    e.forEach(
      (N, Q) => St(
        N,
        t && (L(t) ? t[Q] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Tt(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && St(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Fn(s.component) : s.el, o = r ? null : i, { i: l, r: c } = e, h = t && t.r, u = l.refs === ee ? l.refs = {} : l.refs, d = l.setupState, v = /* @__PURE__ */ Y(d), A = d === ee ? mr : (N) => Ns(u, N) ? !1 : X(v, N), B = (N, Q) => !(Q && Ns(u, Q));
  if (h != null && h !== c) {
    if (Ls(t), re(h))
      u[h] = null, A(h) && (d[h] = null);
    else if (/* @__PURE__ */ ge(h)) {
      const N = t;
      B(h, N.k) && (h.value = null), N.k && (u[N.k] = null);
    }
  }
  if ($(c))
    en(c, l, 12, [o, u]);
  else {
    const N = re(c), Q = /* @__PURE__ */ ge(c);
    if (N || Q) {
      const q = () => {
        if (e.f) {
          const U = N ? A(c) ? d[c] : u[c] : B() || !e.k ? c.value : u[e.k];
          if (r)
            L(U) && ls(U, i);
          else if (L(U))
            U.includes(i) || U.push(i);
          else if (N)
            u[c] = [i], A(c) && (d[c] = u[c]);
          else {
            const g = [i];
            B(c, e.k) && (c.value = g), e.k && (u[e.k] = g);
          }
        } else N ? (u[c] = o, A(c) && (d[c] = o)) : Q && (B(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const U = () => {
          q(), bn.delete(e);
        };
        U.id = -1, bn.set(e, U), ye(U, n);
      } else
        Ls(e), q();
    }
  }
}
function Ls(e) {
  const t = bn.get(e);
  t && (t.flags |= 8, bn.delete(e));
}
let Ds = !1;
const _t = () => {
  Ds || (console.error("Hydration completed but contains mismatches."), Ds = !0);
}, Jo = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Yo = (e) => e.namespaceURI.includes("MathML"), cn = (e) => {
  if (e.nodeType === 1) {
    if (Jo(e)) return "svg";
    if (Yo(e)) return "mathml";
  }
}, fn = (e) => e.nodeType === 8;
function Xo(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: s,
      createText: r,
      nextSibling: i,
      parentNode: o,
      remove: l,
      insert: c,
      createComment: h
    }
  } = e, u = (g, m) => {
    if (!m.hasChildNodes()) {
      n(null, g, m), _n(), m._vnode = g;
      return;
    }
    d(m.firstChild, g, null, null, null), _n(), m._vnode = g;
  }, d = (g, m, M, V, K, k = !1) => {
    k = k || !!m.dynamicChildren;
    const O = fn(g) && g.data === "[", P = () => N(
      g,
      m,
      M,
      V,
      K,
      O
    ), { type: W, ref: T, shapeFlag: j, patchFlag: se } = m;
    let oe = g.nodeType;
    m.el = g, se === -2 && (k = !1, m.dynamicChildren = null);
    let I = null;
    switch (W) {
      case pt:
        oe !== 3 ? m.children === "" ? (c(m.el = r(""), o(g), g), I = g) : I = P() : (g.data !== m.children && (_t(), g.data = m.children), I = i(g));
        break;
      case he:
        U(g) ? (I = i(g), q(
          m.el = g.content.firstChild,
          g,
          M
        )) : oe !== 8 || O ? I = P() : I = i(g);
        break;
      case $t:
        if (O && (g = i(g), oe = g.nodeType), oe === 1 || oe === 3) {
          I = g;
          const G = !m.children.length;
          for (let R = 0; R < m.staticCount; R++)
            G && (m.children += I.nodeType === 1 ? I.outerHTML : I.data), R === m.staticCount - 1 && (m.anchor = I), I = i(I);
          return O ? i(I) : I;
        } else
          P();
        break;
      case Ee:
        O ? I = B(
          g,
          m,
          M,
          V,
          K,
          k
        ) : I = P();
        break;
      default:
        if (j & 1)
          (oe !== 1 || m.type.toLowerCase() !== g.tagName.toLowerCase()) && !U(g) ? I = P() : I = v(
            g,
            m,
            M,
            V,
            K,
            k
          );
        else if (j & 6) {
          m.slotScopeIds = K;
          const G = o(g);
          if (O ? I = Q(g) : fn(g) && g.data === "teleport start" ? I = Q(g, g.data, "teleport end") : I = i(g), t(
            m,
            G,
            null,
            M,
            V,
            cn(G),
            k
          ), Tt(m) && !m.type.__asyncResolved) {
            let R;
            O ? (R = pe(Ee), R.anchor = I ? I.previousSibling : G.lastChild) : R = g.nodeType === 3 ? Pi("") : pe("div"), R.el = g, m.component.subTree = R;
          }
        } else j & 64 ? oe !== 8 ? I = P() : I = m.type.hydrate(
          g,
          m,
          M,
          V,
          K,
          k,
          e,
          A
        ) : j & 128 && (I = m.type.hydrate(
          g,
          m,
          M,
          V,
          cn(o(g)),
          K,
          k,
          e,
          d
        ));
    }
    return T != null && St(T, null, V, m), I;
  }, v = (g, m, M, V, K, k) => {
    k = k || !!m.dynamicChildren;
    const { type: O, props: P, patchFlag: W, shapeFlag: T, dirs: j, transition: se } = m, oe = O === "input" || O === "option";
    if (oe || W !== -1) {
      j && De(m, null, M, "created");
      let I = !1;
      if (U(g)) {
        I = vi(
          null,
          // no need check parentSuspense in hydration
          se
        ) && M && M.vnode.props && M.vnode.props.appear;
        const R = g.content.firstChild;
        if (I) {
          const ie = R.getAttribute("class");
          ie && (R.$cls = ie), se.beforeEnter(R);
        }
        q(R, g, M), m.el = g = R;
      }
      if (T & 16 && // skip if element has innerHTML / textContent
      !(P && (P.innerHTML || P.textContent))) {
        let R = A(
          g.firstChild,
          m,
          g,
          M,
          V,
          K,
          k
        );
        for (; R; ) {
          un(
            g,
            1
            /* CHILDREN */
          ) || _t();
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
`) && (un(
          g,
          0
          /* TEXT */
        ) || _t(), g.textContent = m.children);
      }
      if (P) {
        if (oe || !k || W & 48) {
          const R = g.tagName.includes("-");
          for (const ie in P)
            (oe && (ie.endsWith("value") || ie === "indeterminate") || Zt(ie) && !ht(ie) || // force hydrate v-bind with .prop modifiers
            ie[0] === "." || R && !ht(ie)) && s(g, ie, null, P[ie], void 0, M);
        } else if (P.onClick)
          s(
            g,
            "onClick",
            null,
            P.onClick,
            void 0,
            M
          );
        else if (W & 4 && /* @__PURE__ */ nt(P.style))
          for (const R in P.style) P.style[R];
      }
      let G;
      (G = P && P.onVnodeBeforeMount) && Ae(G, M, m), j && De(m, null, M, "beforeMount"), ((G = P && P.onVnodeMounted) || j || I) && Ai(() => {
        G && Ae(G, M, m), I && se.enter(g), j && De(m, null, M, "mounted");
      }, V);
    }
    return g.nextSibling;
  }, A = (g, m, M, V, K, k, O) => {
    O = O || !!m.dynamicChildren;
    const P = m.children, W = P.length;
    for (let T = 0; T < W; T++) {
      const j = O ? P[T] : P[T] = Se(P[T]), se = j.type === pt;
      g ? (se && !O && T + 1 < W && Se(P[T + 1]).type === pt && (c(
        r(
          g.data.slice(j.children.length)
        ),
        M,
        i(g)
      ), g.data = j.children), g = d(
        g,
        j,
        V,
        K,
        k,
        O
      )) : se && !j.children ? c(j.el = r(""), M) : (un(
        M,
        1
        /* CHILDREN */
      ) || _t(), n(
        null,
        j,
        M,
        null,
        V,
        K,
        cn(M),
        k
      ));
    }
    return g;
  }, B = (g, m, M, V, K, k) => {
    const { slotScopeIds: O } = m;
    O && (K = K ? K.concat(O) : O);
    const P = o(g), W = A(
      i(g),
      m,
      P,
      M,
      V,
      K,
      k
    );
    return W && fn(W) && W.data === "]" ? i(m.anchor = W) : (_t(), c(m.anchor = h("]"), P, W), W);
  }, N = (g, m, M, V, K, k) => {
    if (un(
      g.parentElement,
      1
      /* CHILDREN */
    ) || _t(), m.el = null, k) {
      const W = Q(g);
      for (; ; ) {
        const T = i(g);
        if (T && T !== W)
          l(T);
        else
          break;
      }
    }
    const O = i(g), P = o(g);
    return l(g), n(
      null,
      m,
      P,
      O,
      M,
      V,
      cn(P),
      K
    ), M && (M.vnode.el = m.el, ai(M, m.el)), O;
  }, Q = (g, m = "[", M = "]") => {
    let V = 0;
    for (; g; )
      if (g = i(g), g && fn(g) && (g.data === m && V++, g.data === M)) {
        if (V === 0)
          return i(g);
        V--;
      }
    return g;
  }, q = (g, m, M) => {
    const V = m.parentNode;
    V && V.replaceChild(g, m);
    let K = M;
    for (; K; )
      K.vnode.el === m && (K.vnode.el = K.subTree.el = g), K = K.parent;
  }, U = (g) => g.nodeType === 1 && g.tagName === "TEMPLATE";
  return [u, d];
}
const Hs = "data-allow-mismatch", Zo = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function un(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Hs); )
      e = e.parentElement;
  const n = e && e.getAttribute(Hs);
  if (n == null)
    return !1;
  if (n === "")
    return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(Zo[t]);
  }
}
An().requestIdleCallback;
An().cancelIdleCallback;
const Tt = (e) => !!e.type.__asyncLoader, On = (e) => e.type.__isKeepAlive;
function Qo(e, t) {
  ni(e, "a", t);
}
function zo(e, t) {
  ni(e, "da", t);
}
function ni(e, t, n = de) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Pn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      On(r.parent.vnode) && el(s, t, n, r), r = r.parent;
  }
}
function el(e, t, n, s) {
  const r = Pn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  ii(() => {
    ls(s[t], r);
  }, n);
}
function Pn(e, t, n = de, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ye();
      const l = tn(n), c = Fe(t, n, e, o);
      return l(), Xe(), c;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const Qe = (e) => (t, n = de) => {
  (!Jt || e === "sp") && Pn(e, (...s) => t(...s), n);
}, tl = Qe("bm"), si = Qe("m"), nl = Qe(
  "bu"
), sl = Qe("u"), ri = Qe(
  "bum"
), ii = Qe("um"), rl = Qe(
  "sp"
), il = Qe("rtg"), ol = Qe("rtc");
function ll(e, t = de) {
  Pn("ec", e, t);
}
const cl = "components";
function qc(e, t) {
  return ul(cl, e, !0, t) || e;
}
const fl = /* @__PURE__ */ Symbol.for("v-ndc");
function ul(e, t, n = !0, s = !1) {
  const r = Te || de;
  if (r) {
    const i = r.type;
    {
      const l = Gl(
        i,
        !1
      );
      if (l && (l === t || l === be(t) || l === Cn(be(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      $s(r[e] || i[e], t) || // global registration
      $s(r.appContext[e], t)
    );
    return !o && s ? i : o;
  }
}
function $s(e, t) {
  return e && (e[t] || e[be(t)] || e[Cn(be(t))]);
}
function Jc(e, t, n, s) {
  let r;
  const i = n, o = L(e);
  if (o || re(e)) {
    const l = o && /* @__PURE__ */ nt(e);
    let c = !1, h = !1;
    l && (c = !/* @__PURE__ */ Me(e), h = /* @__PURE__ */ Ze(e), e = En(e)), r = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(
        c ? h ? wt(Re(e[u])) : Re(e[u]) : e[u],
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
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, h = l.length; c < h; c++) {
        const u = l[c];
        r[c] = t(e[u], u, c, i);
      }
    }
  else
    r = [];
  return r;
}
const ts = (e) => e ? Ii(e) ? Fn(e) : ts(e.parent) : null, Ht = (
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
    $parent: (e) => ts(e.parent),
    $root: (e) => ts(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => li(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ys(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Kr.bind(e.proxy)),
    $watch: (e) => Ko.bind(e)
  })
), Wn = (e, t) => e !== ee && !e.__isScriptSetup && X(e, t), al = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: c } = e;
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
        if (Wn(s, t))
          return o[t] = 1, s[t];
        if (r !== ee && X(r, t))
          return o[t] = 2, r[t];
        if (X(i, t))
          return o[t] = 3, i[t];
        if (n !== ee && X(n, t))
          return o[t] = 4, n[t];
        ns && (o[t] = 0);
      }
    }
    const h = Ht[t];
    let u, d;
    if (h)
      return t === "$attrs" && ae(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ee && X(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = c.config.globalProperties, X(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Wn(r, t) ? (r[t] = n, !0) : s !== ee && X(s, t) ? (s[t] = n, !0) : X(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== ee && l[0] !== "$" && X(e, l) || Wn(t, l) || X(i, l) || X(s, l) || X(Ht, l) || X(r.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : X(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Vs(e) {
  return L(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ns = !0;
function hl(e) {
  const t = li(e), n = e.proxy, s = e.ctx;
  ns = !1, t.beforeCreate && js(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: h,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: v,
    beforeUpdate: A,
    updated: B,
    activated: N,
    deactivated: Q,
    beforeDestroy: q,
    beforeUnmount: U,
    destroyed: g,
    unmounted: m,
    render: M,
    renderTracked: V,
    renderTriggered: K,
    errorCaptured: k,
    serverPrefetch: O,
    // public API
    expose: P,
    inheritAttrs: W,
    // assets
    components: T,
    directives: j,
    filters: se
  } = t;
  if (h && dl(h, s, null), o)
    for (const G in o) {
      const R = o[G];
      $(R) && (s[G] = R.bind(n));
    }
  if (r) {
    const G = r.call(n, n);
    Z(G) && (e.data = /* @__PURE__ */ ms(G));
  }
  if (ns = !0, i)
    for (const G in i) {
      const R = i[G], ie = $(R) ? R.bind(n, n) : $(R.get) ? R.get.bind(n, n) : je, nn = !$(R) && $(R.set) ? R.set.bind(n) : je, ot = Jl({
        get: ie,
        set: nn
      });
      Object.defineProperty(s, G, {
        enumerable: !0,
        configurable: !0,
        get: () => ot.value,
        set: (Ie) => ot.value = Ie
      });
    }
  if (l)
    for (const G in l)
      oi(l[G], s, n, G);
  if (c) {
    const G = $(c) ? c.call(n) : c;
    Reflect.ownKeys(G).forEach((R) => {
      jo(R, G[R]);
    });
  }
  u && js(u, e, "c");
  function I(G, R) {
    L(R) ? R.forEach((ie) => G(ie.bind(n))) : R && G(R.bind(n));
  }
  if (I(tl, d), I(si, v), I(nl, A), I(sl, B), I(Qo, N), I(zo, Q), I(ll, k), I(ol, V), I(il, K), I(ri, U), I(ii, m), I(rl, O), L(P))
    if (P.length) {
      const G = e.exposed || (e.exposed = {});
      P.forEach((R) => {
        Object.defineProperty(G, R, {
          get: () => n[R],
          set: (ie) => n[R] = ie,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === je && (e.render = M), W != null && (e.inheritAttrs = W), T && (e.components = T), j && (e.directives = j), O && ti(e);
}
function dl(e, t, n = je) {
  L(e) && (e = ss(e));
  for (const s in e) {
    const r = e[s];
    let i;
    Z(r) ? "default" in r ? i = hn(
      r.from || s,
      r.default,
      !0
    ) : i = hn(r.from || s) : i = hn(r), /* @__PURE__ */ ge(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i;
  }
}
function js(e, t, n) {
  Fe(
    L(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function oi(e, t, n, s) {
  let r = s.includes(".") ? Jr(n, s) : () => n[s];
  if (re(e)) {
    const i = t[e];
    $(i) && Un(r, i);
  } else if ($(e))
    Un(r, e.bind(n));
  else if (Z(e))
    if (L(e))
      e.forEach((i) => oi(i, t, n, s));
    else {
      const i = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(i) && Un(r, i, e);
    }
}
function li(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (h) => yn(c, h, o, !0)
  ), yn(c, t, o)), Z(t) && i.set(t, c), c;
}
function yn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && yn(e, i, n, !0), r && r.forEach(
    (o) => yn(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = pl[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const pl = {
  data: Bs,
  props: Us,
  emits: Us,
  // objects
  methods: It,
  computed: It,
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
  components: It,
  directives: It,
  // watch
  watch: ml,
  // provide / inject
  provide: Bs,
  inject: gl
};
function Bs(e, t) {
  return t ? e ? function() {
    return fe(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function gl(e, t) {
  return It(ss(e), ss(t));
}
function ss(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function It(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Us(e, t) {
  return e ? L(e) && L(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    Vs(e),
    Vs(t ?? {})
  ) : t;
}
function ml(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = me(e[s], t[s]);
  return n;
}
function ci() {
  return {
    app: null,
    config: {
      isNativeTag: mr,
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
let _l = 0;
function bl(e, t) {
  return function(s, r = null) {
    $(s) || (s = fe({}, s)), r != null && !Z(r) && (r = null);
    const i = ci(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const h = i.app = {
      _uid: _l++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Xl,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return o.has(u) || (u && $(u.install) ? (o.add(u), u.install(h, ...d)) : $(u) && (o.add(u), u(h, ...d))), h;
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
        if (!c) {
          const A = h._ceVNode || pe(s, r);
          return A.appContext = i, v === !0 ? v = "svg" : v === !1 && (v = void 0), d && t ? t(A, u) : e(A, u, v), c = !0, h._container = u, u.__vue_app__ = h, Fn(A.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (Fe(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(u, d) {
        return i.provides[u] = d, h;
      },
      runWithContext(u) {
        const d = Ct;
        Ct = h;
        try {
          return u();
        } finally {
          Ct = d;
        }
      }
    };
    return h;
  };
}
let Ct = null;
const yl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${be(t)}Modifiers`] || e[`${it(t)}Modifiers`];
function xl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ee;
  let r = n;
  const i = t.startsWith("update:"), o = i && yl(s, t.slice(7));
  o && (o.trim && (r = n.map((u) => re(u) ? u.trim() : u)), o.number && (r = n.map(wn)));
  let l, c = s[l = Dn(t)] || // also try camelCase event handler (#2249)
  s[l = Dn(be(t))];
  !c && i && (c = s[l = Dn(it(t))]), c && Fe(
    c,
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
    e.emitted[l] = !0, Fe(
      h,
      e,
      6,
      r
    );
  }
}
const vl = /* @__PURE__ */ new WeakMap();
function fi(e, t, n = !1) {
  const s = n ? vl : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!$(e)) {
    const c = (h) => {
      const u = fi(h, t, !0);
      u && (l = !0, fe(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (Z(e) && s.set(e, null), null) : (L(i) ? i.forEach((c) => o[c] = null) : fe(o, i), Z(e) && s.set(e, o), o);
}
function Rn(e, t) {
  return !e || !Zt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), X(e, t[0].toLowerCase() + t.slice(1)) || X(e, it(t)) || X(e, t));
}
function dn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: h,
    renderCache: u,
    props: d,
    data: v,
    setupState: A,
    ctx: B,
    inheritAttrs: N
  } = e, Q = Wt(e);
  let q, U;
  try {
    if (n.shapeFlag & 4) {
      const m = r || s, M = m;
      q = Se(
        h.call(
          M,
          m,
          u,
          d,
          A,
          v,
          B
        )
      ), U = l;
    } else {
      const m = t;
      q = Se(
        m.length > 1 ? m(
          d,
          { attrs: l, slots: o, emit: c }
        ) : m(
          d,
          null
        )
      ), U = t.props ? l : Sl(l);
    }
  } catch (m) {
    Vt.length = 0, Mn(m, e, 1), q = pe(he);
  }
  let g = q;
  if (U && N !== !1) {
    const m = Object.keys(U), { shapeFlag: M } = g;
    m.length && M & 7 && (i && m.some(Sn) && (U = Tl(
      U,
      i
    )), g = rt(g, U, !1, !0));
  }
  return n.dirs && (g = rt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && kt(g, n.transition), q = g, Wt(Q), q;
}
const Sl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Zt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Tl = (e, t) => {
  const n = {};
  for (const s in e)
    (!Sn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Cl(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: c } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Ks(s, o, h) : !!o;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const v = u[d];
        if (ui(o, s, v) && !Rn(h, v))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Ks(s, o, h) : !0 : !!o;
  return !1;
}
function Ks(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (ui(t, e, i) && !Rn(n, i))
      return !0;
  }
  return !1;
}
function ui(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && Z(s) && Z(r) ? !st(s, r) : s !== r;
}
function ai({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const hi = {}, di = () => Object.create(hi), pi = (e) => Object.getPrototypeOf(e) === hi;
function wl(e, t, n, s = !1) {
  const r = {}, i = di();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), gi(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ Eo(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Al(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ Y(r), [c] = e.propsOptions;
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
        if (Rn(e.emitsOptions, v))
          continue;
        const A = t[v];
        if (c)
          if (X(i, v))
            A !== i[v] && (i[v] = A, h = !0);
          else {
            const B = be(v);
            r[B] = rs(
              c,
              l,
              B,
              A,
              e,
              !1
            );
          }
        else
          A !== i[v] && (i[v] = A, h = !0);
      }
    }
  } else {
    gi(e, t, r, i) && (h = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !X(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = it(d)) === d || !X(t, u))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = rs(
        c,
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
  h && Ge(e.attrs, "set", "");
}
function gi(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (ht(c))
        continue;
      const h = t[c];
      let u;
      r && X(r, u = be(c)) ? !i || !i.includes(u) ? n[u] = h : (l || (l = {}))[u] = h : Rn(e.emitsOptions, c) || (!(c in s) || h !== s[c]) && (s[c] = h, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ Y(n), h = l || ee;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = rs(
        r,
        c,
        d,
        h[d],
        e,
        !X(h, d)
      );
    }
  }
  return o;
}
function rs(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = X(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && $(c)) {
        const { propsDefaults: h } = r;
        if (n in h)
          s = h[n];
        else {
          const u = tn(r);
          s = h[n] = c.call(
            null,
            t
          ), u();
        }
      } else
        s = c;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === it(n)) && (s = !0));
  }
  return s;
}
const El = /* @__PURE__ */ new WeakMap();
function mi(e, t, n = !1) {
  const s = n ? El : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!$(e)) {
    const u = (d) => {
      c = !0;
      const [v, A] = mi(d, t, !0);
      fe(o, v), A && l.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !c)
    return Z(e) && s.set(e, yt), yt;
  if (L(i))
    for (let u = 0; u < i.length; u++) {
      const d = be(i[u]);
      Ws(d) && (o[d] = ee);
    }
  else if (i)
    for (const u in i) {
      const d = be(u);
      if (Ws(d)) {
        const v = i[u], A = o[d] = L(v) || $(v) ? { type: v } : fe({}, v), B = A.type;
        let N = !1, Q = !0;
        if (L(B))
          for (let q = 0; q < B.length; ++q) {
            const U = B[q], g = $(U) && U.name;
            if (g === "Boolean") {
              N = !0;
              break;
            } else g === "String" && (Q = !1);
          }
        else
          N = $(B) && B.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = N, A[
          1
          /* shouldCastTrue */
        ] = Q, (N || X(A, "default")) && l.push(d);
      }
    }
  const h = [o, l];
  return Z(e) && s.set(e, h), h;
}
function Ws(e) {
  return e[0] !== "$" && !ht(e);
}
const xs = (e) => e === "_" || e === "_ctx" || e === "$stable", vs = (e) => L(e) ? e.map(Se) : [Se(e)], Ml = (e, t, n) => {
  if (t._n)
    return t;
  const s = Vo((...r) => vs(t(...r)), n);
  return s._c = !1, s;
}, _i = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (xs(r)) continue;
    const i = e[r];
    if ($(i))
      t[r] = Ml(r, i, s);
    else if (i != null) {
      const o = vs(i);
      t[r] = () => o;
    }
  }
}, bi = (e, t) => {
  const n = vs(t);
  e.slots.default = () => n;
}, yi = (e, t, n) => {
  for (const s in t)
    (n || !xs(s)) && (e[s] = t[s]);
}, Ol = (e, t, n) => {
  const s = e.slots = di();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (yi(s, t, n), n && xr(s, "_", r, !0)) : _i(t, s);
  } else t && bi(e, t);
}, Pl = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = ee;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : yi(r, t, n) : (i = !t.$stable, _i(t, r)), o = t;
  } else t && (bi(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !xs(l) && o[l] == null && delete r[l];
}, ye = Ai;
function Rl(e) {
  return xi(e);
}
function Fl(e) {
  return xi(e, Xo);
}
function xi(e, t) {
  const n = An();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: h,
    setElementText: u,
    parentNode: d,
    nextSibling: v,
    setScopeId: A = je,
    insertStaticContent: B
  } = e, N = (f, a, p, x = null, _ = null, b = null, w = void 0, C = null, S = !!a.dynamicChildren) => {
    if (f === a)
      return;
    f && !at(f, a) && (x = sn(f), Ie(f, _, b, !0), f = null), a.patchFlag === -2 && (S = !1, a.dynamicChildren = null);
    const { type: y, ref: D, shapeFlag: E } = a;
    switch (y) {
      case pt:
        Q(f, a, p, x);
        break;
      case he:
        q(f, a, p, x);
        break;
      case $t:
        f == null && U(a, p, x, w);
        break;
      case Ee:
        T(
          f,
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
        E & 1 ? M(
          f,
          a,
          p,
          x,
          _,
          b,
          w,
          C,
          S
        ) : E & 6 ? j(
          f,
          a,
          p,
          x,
          _,
          b,
          w,
          C,
          S
        ) : (E & 64 || E & 128) && y.process(
          f,
          a,
          p,
          x,
          _,
          b,
          w,
          C,
          S,
          gt
        );
    }
    D != null && _ ? St(D, f && f.ref, b, a || f, !a) : D == null && f && f.ref != null && St(f.ref, null, b, f, !0);
  }, Q = (f, a, p, x) => {
    if (f == null)
      s(
        a.el = l(a.children),
        p,
        x
      );
    else {
      const _ = a.el = f.el;
      a.children !== f.children && h(_, a.children);
    }
  }, q = (f, a, p, x) => {
    f == null ? s(
      a.el = c(a.children || ""),
      p,
      x
    ) : a.el = f.el;
  }, U = (f, a, p, x) => {
    [f.el, f.anchor] = B(
      f.children,
      a,
      p,
      x,
      f.el,
      f.anchor
    );
  }, g = ({ el: f, anchor: a }, p, x) => {
    let _;
    for (; f && f !== a; )
      _ = v(f), s(f, p, x), f = _;
    s(a, p, x);
  }, m = ({ el: f, anchor: a }) => {
    let p;
    for (; f && f !== a; )
      p = v(f), r(f), f = p;
    r(a);
  }, M = (f, a, p, x, _, b, w, C, S) => {
    if (a.type === "svg" ? w = "svg" : a.type === "math" && (w = "mathml"), f == null)
      V(
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
      const y = f.el && f.el._isVueCE ? f.el : null;
      try {
        y && y._beginPatch(), O(
          f,
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
  }, V = (f, a, p, x, _, b, w, C) => {
    let S, y;
    const { props: D, shapeFlag: E, transition: F, dirs: H } = f;
    if (S = f.el = o(
      f.type,
      b,
      D && D.is,
      D
    ), E & 8 ? u(S, f.children) : E & 16 && k(
      f.children,
      S,
      null,
      x,
      _,
      kn(f, b),
      w,
      C
    ), H && De(f, null, x, "created"), K(S, f, f.scopeId, w, x), D) {
      for (const z in D)
        z !== "value" && !ht(z) && i(S, z, null, D[z], b, x);
      "value" in D && i(S, "value", null, D.value, b), (y = D.onVnodeBeforeMount) && Ae(y, x, f);
    }
    H && De(f, null, x, "beforeMount");
    const J = vi(_, F);
    J && F.beforeEnter(S), s(S, a, p), ((y = D && D.onVnodeMounted) || J || H) && ye(() => {
      y && Ae(y, x, f), J && F.enter(S), H && De(f, null, x, "mounted");
    }, _);
  }, K = (f, a, p, x, _) => {
    if (p && A(f, p), x)
      for (let b = 0; b < x.length; b++)
        A(f, x[b]);
    if (_) {
      let b = _.subTree;
      if (a === b || wi(b.type) && (b.ssContent === a || b.ssFallback === a)) {
        const w = _.vnode;
        K(
          f,
          w,
          w.scopeId,
          w.slotScopeIds,
          _.parent
        );
      }
    }
  }, k = (f, a, p, x, _, b, w, C, S = 0) => {
    for (let y = S; y < f.length; y++) {
      const D = f[y] = C ? ke(f[y]) : Se(f[y]);
      N(
        null,
        D,
        a,
        p,
        x,
        _,
        b,
        w,
        C
      );
    }
  }, O = (f, a, p, x, _, b, w) => {
    const C = a.el = f.el;
    let { patchFlag: S, dynamicChildren: y, dirs: D } = a;
    S |= f.patchFlag & 16;
    const E = f.props || ee, F = a.props || ee;
    let H;
    if (p && lt(p, !1), (H = F.onVnodeBeforeUpdate) && Ae(H, p, a, f), D && De(a, f, p, "beforeUpdate"), p && lt(p, !0), (E.innerHTML && F.innerHTML == null || E.textContent && F.textContent == null) && u(C, ""), y ? P(
      f.dynamicChildren,
      y,
      C,
      p,
      x,
      kn(a, _),
      b
    ) : w || R(
      f,
      a,
      C,
      null,
      p,
      x,
      kn(a, _),
      b,
      !1
    ), S > 0) {
      if (S & 16)
        W(C, E, F, p, _);
      else if (S & 2 && E.class !== F.class && i(C, "class", null, F.class, _), S & 4 && i(C, "style", E.style, F.style, _), S & 8) {
        const J = a.dynamicProps;
        for (let z = 0; z < J.length; z++) {
          const te = J[z], le = E[te], ce = F[te];
          (ce !== le || te === "value") && i(C, te, le, ce, _, p);
        }
      }
      S & 1 && f.children !== a.children && u(C, a.children);
    } else !w && y == null && W(C, E, F, p, _);
    ((H = F.onVnodeUpdated) || D) && ye(() => {
      H && Ae(H, p, a, f), D && De(a, f, p, "updated");
    }, x);
  }, P = (f, a, p, x, _, b, w) => {
    for (let C = 0; C < a.length; C++) {
      const S = f[C], y = a[C], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === Ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !at(S, y) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? d(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      N(
        S,
        y,
        D,
        null,
        x,
        _,
        b,
        w,
        !0
      );
    }
  }, W = (f, a, p, x, _) => {
    if (a !== p) {
      if (a !== ee)
        for (const b in a)
          !ht(b) && !(b in p) && i(
            f,
            b,
            a[b],
            null,
            _,
            x
          );
      for (const b in p) {
        if (ht(b)) continue;
        const w = p[b], C = a[b];
        w !== C && b !== "value" && i(f, b, C, w, _, x);
      }
      "value" in p && i(f, "value", a.value, p.value, _);
    }
  }, T = (f, a, p, x, _, b, w, C, S) => {
    const y = a.el = f ? f.el : l(""), D = a.anchor = f ? f.anchor : l("");
    let { patchFlag: E, dynamicChildren: F, slotScopeIds: H } = a;
    H && (C = C ? C.concat(H) : H), f == null ? (s(y, p, x), s(D, p, x), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      a.children || [],
      p,
      D,
      _,
      b,
      w,
      C,
      S
    )) : E > 0 && E & 64 && F && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === F.length ? (P(
      f.dynamicChildren,
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
    (a.key != null || _ && a === _.subTree) && Si(
      f,
      a,
      !0
      /* shallow */
    )) : R(
      f,
      a,
      p,
      D,
      _,
      b,
      w,
      C,
      S
    );
  }, j = (f, a, p, x, _, b, w, C, S) => {
    a.slotScopeIds = C, f == null ? a.shapeFlag & 512 ? _.ctx.activate(
      a,
      p,
      x,
      w,
      S
    ) : se(
      a,
      p,
      x,
      _,
      b,
      w,
      S
    ) : oe(f, a, S);
  }, se = (f, a, p, x, _, b, w) => {
    const C = f.component = Ri(
      f,
      x,
      _
    );
    if (On(f) && (C.ctx.renderer = gt), Ni(C, !1, w), C.asyncDep) {
      if (_ && _.registerDep(C, I, w), !f.el) {
        const S = C.subTree = pe(he);
        q(null, S, a, p), f.placeholder = S.el;
      }
    } else
      I(
        C,
        f,
        a,
        p,
        _,
        b,
        w
      );
  }, oe = (f, a, p) => {
    const x = a.component = f.component;
    if (Cl(f, a, p))
      if (x.asyncDep && !x.asyncResolved) {
        G(x, a, p);
        return;
      } else
        x.next = a, x.update();
    else
      a.el = f.el, x.vnode = a;
  }, I = (f, a, p, x, _, b, w) => {
    const C = () => {
      if (f.isMounted) {
        let { next: E, bu: F, u: H, parent: J, vnode: z } = f;
        {
          const xe = Ti(f);
          if (xe) {
            E && (E.el = z.el, G(f, E, w)), xe.asyncDep.then(() => {
              ye(() => {
                f.isUnmounted || y();
              }, _);
            });
            return;
          }
        }
        let te = E, le;
        lt(f, !1), E ? (E.el = z.el, G(f, E, w)) : E = z, F && an(F), (le = E.props && E.props.onVnodeBeforeUpdate) && Ae(le, J, E, z), lt(f, !0);
        const ce = dn(f), Oe = f.subTree;
        f.subTree = ce, N(
          Oe,
          ce,
          // parent may have changed if it's in a teleport
          d(Oe.el),
          // anchor may have changed if it's in a fragment
          sn(Oe),
          f,
          _,
          b
        ), E.el = ce.el, te === null && ai(f, ce.el), H && ye(H, _), (le = E.props && E.props.onVnodeUpdated) && ye(
          () => Ae(le, J, E, z),
          _
        );
      } else {
        let E;
        const { el: F, props: H } = a, { bm: J, m: z, parent: te, root: le, type: ce } = f, Oe = Tt(a);
        if (lt(f, !1), J && an(J), !Oe && (E = H && H.onVnodeBeforeMount) && Ae(E, te, a), lt(f, !0), F && Ln) {
          const xe = () => {
            f.subTree = dn(f), Ln(
              F,
              f.subTree,
              f,
              _,
              null
            );
          };
          Oe && ce.__asyncHydrate ? ce.__asyncHydrate(
            F,
            f,
            xe
          ) : xe();
        } else {
          le.ce && le.ce._hasShadowRoot() && le.ce._injectChildStyle(
            ce,
            f.parent ? f.parent.type : void 0
          );
          const xe = f.subTree = dn(f);
          N(
            null,
            xe,
            p,
            x,
            f,
            _,
            b
          ), a.el = xe.el;
        }
        if (z && ye(z, _), !Oe && (E = H && H.onVnodeMounted)) {
          const xe = a;
          ye(
            () => Ae(E, te, xe),
            _
          );
        }
        (a.shapeFlag & 256 || te && Tt(te.vnode) && te.vnode.shapeFlag & 256) && f.a && ye(f.a, _), f.isMounted = !0, a = p = x = null;
      }
    };
    f.scope.on();
    const S = f.effect = new Ar(C);
    f.scope.off();
    const y = f.update = S.run.bind(S), D = f.job = S.runIfDirty.bind(S);
    D.i = f, D.id = f.uid, S.scheduler = () => ys(D), lt(f, !0), y();
  }, G = (f, a, p) => {
    a.component = f;
    const x = f.vnode.props;
    f.vnode = a, f.next = null, Al(f, a.props, x, p), Pl(f, a.children, p), Ye(), Fs(f), Xe();
  }, R = (f, a, p, x, _, b, w, C, S = !1) => {
    const y = f && f.children, D = f ? f.shapeFlag : 0, E = a.children, { patchFlag: F, shapeFlag: H } = a;
    if (F > 0) {
      if (F & 128) {
        nn(
          y,
          E,
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
        ie(
          y,
          E,
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
    H & 8 ? (D & 16 && Mt(y, _, b), E !== y && u(p, E)) : D & 16 ? H & 16 ? nn(
      y,
      E,
      p,
      x,
      _,
      b,
      w,
      C,
      S
    ) : Mt(y, _, b, !0) : (D & 8 && u(p, ""), H & 16 && k(
      E,
      p,
      x,
      _,
      b,
      w,
      C,
      S
    ));
  }, ie = (f, a, p, x, _, b, w, C, S) => {
    f = f || yt, a = a || yt;
    const y = f.length, D = a.length, E = Math.min(y, D);
    let F;
    for (F = 0; F < E; F++) {
      const H = a[F] = S ? ke(a[F]) : Se(a[F]);
      N(
        f[F],
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
    y > D ? Mt(
      f,
      _,
      b,
      !0,
      !1,
      E
    ) : k(
      a,
      p,
      x,
      _,
      b,
      w,
      C,
      S,
      E
    );
  }, nn = (f, a, p, x, _, b, w, C, S) => {
    let y = 0;
    const D = a.length;
    let E = f.length - 1, F = D - 1;
    for (; y <= E && y <= F; ) {
      const H = f[y], J = a[y] = S ? ke(a[y]) : Se(a[y]);
      if (at(H, J))
        N(
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
    for (; y <= E && y <= F; ) {
      const H = f[E], J = a[F] = S ? ke(a[F]) : Se(a[F]);
      if (at(H, J))
        N(
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
      E--, F--;
    }
    if (y > E) {
      if (y <= F) {
        const H = F + 1, J = H < D ? a[H].el : x;
        for (; y <= F; )
          N(
            null,
            a[y] = S ? ke(a[y]) : Se(a[y]),
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
      for (; y <= E; )
        Ie(f[y], _, b, !0), y++;
    else {
      const H = y, J = y, z = /* @__PURE__ */ new Map();
      for (y = J; y <= F; y++) {
        const ve = a[y] = S ? ke(a[y]) : Se(a[y]);
        ve.key != null && z.set(ve.key, y);
      }
      let te, le = 0;
      const ce = F - J + 1;
      let Oe = !1, xe = 0;
      const Ot = new Array(ce);
      for (y = 0; y < ce; y++) Ot[y] = 0;
      for (y = H; y <= E; y++) {
        const ve = f[y];
        if (le >= ce) {
          Ie(ve, _, b, !0);
          continue;
        }
        let Ne;
        if (ve.key != null)
          Ne = z.get(ve.key);
        else
          for (te = J; te <= F; te++)
            if (Ot[te - J] === 0 && at(ve, a[te])) {
              Ne = te;
              break;
            }
        Ne === void 0 ? Ie(ve, _, b, !0) : (Ot[Ne - J] = y + 1, Ne >= xe ? xe = Ne : Oe = !0, N(
          ve,
          a[Ne],
          p,
          null,
          _,
          b,
          w,
          C,
          S
        ), le++);
      }
      const ws = Oe ? Il(Ot) : yt;
      for (te = ws.length - 1, y = ce - 1; y >= 0; y--) {
        const ve = J + y, Ne = a[ve], As = a[ve + 1], Es = ve + 1 < D ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          As.el || Ci(As)
        ) : x;
        Ot[y] === 0 ? N(
          null,
          Ne,
          p,
          Es,
          _,
          b,
          w,
          C,
          S
        ) : Oe && (te < 0 || y !== ws[te] ? ot(Ne, p, Es, 2) : te--);
      }
    }
  }, ot = (f, a, p, x, _ = null) => {
    const { el: b, type: w, transition: C, children: S, shapeFlag: y } = f;
    if (y & 6) {
      ot(f.component.subTree, a, p, x);
      return;
    }
    if (y & 128) {
      f.suspense.move(a, p, x);
      return;
    }
    if (y & 64) {
      w.move(f, a, p, gt);
      return;
    }
    if (w === Ee) {
      s(b, a, p);
      for (let E = 0; E < S.length; E++)
        ot(S[E], a, p, x);
      s(f.anchor, a, p);
      return;
    }
    if (w === $t) {
      g(f, a, p);
      return;
    }
    if (x !== 2 && y & 1 && C)
      if (x === 0)
        C.beforeEnter(b), s(b, a, p), ye(() => C.enter(b), _);
      else {
        const { leave: E, delayLeave: F, afterLeave: H } = C, J = () => {
          f.ctx.isUnmounted ? r(b) : s(b, a, p);
        }, z = () => {
          b._isLeaving && b[He](
            !0
            /* cancelled */
          ), E(b, () => {
            J(), H && H();
          });
        };
        F ? F(b, J, z) : z();
      }
    else
      s(b, a, p);
  }, Ie = (f, a, p, x = !1, _ = !1) => {
    const {
      type: b,
      props: w,
      ref: C,
      children: S,
      dynamicChildren: y,
      shapeFlag: D,
      patchFlag: E,
      dirs: F,
      cacheIndex: H,
      memo: J
    } = f;
    if (E === -2 && (_ = !1), C != null && (Ye(), St(C, null, p, f, !0), Xe()), H != null && (a.renderCache[H] = void 0), D & 256) {
      a.ctx.deactivate(f);
      return;
    }
    const z = D & 1 && F, te = !Tt(f);
    let le;
    if (te && (le = w && w.onVnodeBeforeUnmount) && Ae(le, a, f), D & 6)
      Ui(f.component, p, x);
    else {
      if (D & 128) {
        f.suspense.unmount(p, x);
        return;
      }
      z && De(f, null, a, "beforeUnmount"), D & 64 ? f.type.remove(
        f,
        a,
        p,
        gt,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Ee || E > 0 && E & 64) ? Mt(
        y,
        a,
        p,
        !1,
        !0
      ) : (b === Ee && E & 384 || !_ && D & 16) && Mt(S, a, p), x && Ts(f);
    }
    const ce = J != null && H == null;
    (te && (le = w && w.onVnodeUnmounted) || z || ce) && ye(() => {
      le && Ae(le, a, f), z && De(f, null, a, "unmounted"), ce && (f.el = null);
    }, p);
  }, Ts = (f) => {
    const { type: a, el: p, anchor: x, transition: _ } = f;
    if (a === Ee) {
      Bi(p, x);
      return;
    }
    if (a === $t) {
      m(f);
      return;
    }
    const b = () => {
      r(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (f.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: w, delayLeave: C } = _, S = () => w(p, b);
      C ? C(f.el, b, S) : S();
    } else
      b();
  }, Bi = (f, a) => {
    let p;
    for (; f !== a; )
      p = v(f), r(f), f = p;
    r(a);
  }, Ui = (f, a, p) => {
    const { bum: x, scope: _, job: b, subTree: w, um: C, m: S, a: y } = f;
    ks(S), ks(y), x && an(x), _.stop(), b && (b.flags |= 8, Ie(w, f, a, p)), C && ye(C, a), ye(() => {
      f.isUnmounted = !0;
    }, a);
  }, Mt = (f, a, p, x = !1, _ = !1, b = 0) => {
    for (let w = b; w < f.length; w++)
      Ie(f[w], a, p, x, _);
  }, sn = (f) => {
    if (f.shapeFlag & 6)
      return sn(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const a = v(f.anchor || f.el), p = a && a[Wo];
    return p ? v(p) : a;
  };
  let In = !1;
  const Cs = (f, a, p) => {
    let x;
    f == null ? a._vnode && (Ie(a._vnode, null, null, !0), x = a._vnode.component) : N(
      a._vnode || null,
      f,
      a,
      null,
      null,
      null,
      p
    ), a._vnode = f, In || (In = !0, Fs(x), _n(), In = !1);
  }, gt = {
    p: N,
    um: Ie,
    m: ot,
    r: Ts,
    mt: se,
    mc: k,
    pc: R,
    pbc: P,
    n: sn,
    o: e
  };
  let Nn, Ln;
  return t && ([Nn, Ln] = t(
    gt
  )), {
    render: Cs,
    hydrate: Nn,
    createApp: bl(Cs, Nn)
  };
}
function kn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function lt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function vi(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Si(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (L(s) && L(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = ke(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Si(o, l)), l.type === pt && (l.patchFlag === -1 && (l = r[i] = ke(l)), l.el = o.el), l.type === he && !l.el && (l.el = o.el);
    }
}
function Il(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
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
function Ti(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ti(t);
}
function ks(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ci(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ci(t.subTree) : null;
}
const wi = (e) => e.__isSuspense;
function Ai(e, t) {
  t && t.pendingBranch ? L(e) ? t.effects.push(...e) : t.effects.push(e) : $o(e);
}
const Ee = /* @__PURE__ */ Symbol.for("v-fgt"), pt = /* @__PURE__ */ Symbol.for("v-txt"), he = /* @__PURE__ */ Symbol.for("v-cmt"), $t = /* @__PURE__ */ Symbol.for("v-stc"), Vt = [];
let Ce = null;
function Nl(e = !1) {
  Vt.push(Ce = e ? null : []);
}
function Ll() {
  Vt.pop(), Ce = Vt[Vt.length - 1] || null;
}
let Gt = 1;
function xn(e, t = !1) {
  Gt += e, e < 0 && Ce && t && (Ce.hasOnce = !0);
}
function Ei(e) {
  return e.dynamicChildren = Gt > 0 ? Ce || yt : null, Ll(), Gt > 0 && Ce && Ce.push(e), e;
}
function Yc(e, t, n, s, r, i) {
  return Ei(
    Oi(
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
function Dl(e, t, n, s, r) {
  return Ei(
    pe(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function qt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function at(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Mi = ({ key: e }) => e ?? null, pn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || /* @__PURE__ */ ge(e) || $(e) ? { i: Te, r: e, k: t, f: !!n } : e : null);
function Oi(e, t = null, n = null, s = 0, r = null, i = e === Ee ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mi(t),
    ref: t && pn(t),
    scopeId: Gr,
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
    ctx: Te
  };
  return l ? (Ss(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= re(n) ? 8 : 16), Gt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ce.push(c), c;
}
const pe = Hl;
function Hl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === fl) && (e = he), qt(e)) {
    const l = rt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ss(l, n), Gt > 0 && !i && Ce && (l.shapeFlag & 6 ? Ce[Ce.indexOf(e)] = l : Ce.push(l)), l.patchFlag = -2, l;
  }
  if (ql(e) && (e = e.__vccOpts), t) {
    t = $l(t);
    let { class: l, style: c } = t;
    l && !re(l) && (t.class = us(l)), Z(c) && (/* @__PURE__ */ bs(c) && !L(c) && (c = fe({}, c)), t.style = fs(c));
  }
  const o = re(e) ? 1 : wi(e) ? 128 : Yr(e) ? 64 : Z(e) ? 4 : $(e) ? 2 : 0;
  return Oi(
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
function $l(e) {
  return e ? /* @__PURE__ */ bs(e) || pi(e) ? fe({}, e) : e : null;
}
function rt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e, h = t ? jl(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Mi(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? L(i) ? i.concat(pn(t)) : [i, pn(t)] : pn(t)
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
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && rt(e.ssContent),
    ssFallback: e.ssFallback && rt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && kt(
    u,
    c.clone(u)
  ), u;
}
function Pi(e = " ", t = 0) {
  return pe(pt, null, e, t);
}
function Xc(e, t) {
  const n = pe($t, null, e);
  return n.staticCount = t, n;
}
function Vl(e = "", t = !1) {
  return t ? (Nl(), Dl(he, null, e)) : pe(he, null, e);
}
function Se(e) {
  return e == null || typeof e == "boolean" ? pe(he) : L(e) ? pe(
    Ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qt(e) ? ke(e) : pe(pt, null, String(e));
}
function ke(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : rt(e);
}
function Ss(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (L(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ss(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !pi(t) ? t._ctx = Te : r === 3 && Te && (Te.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: Te }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Pi(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function jl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = us([t.class, s.class]));
      else if (r === "style")
        t.style = fs([t.style, s.style]);
      else if (Zt(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(L(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Sn(r) && (t[r] = o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ae(e, t, n, s = null) {
  Fe(e, t, 7, [
    n,
    s
  ]);
}
const Bl = ci();
let Ul = 0;
function Ri(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Bl, i = {
    uid: Ul++,
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
    scope: new oo(
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
    propsOptions: mi(s, r),
    emitsOptions: fi(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ee,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = xl.bind(null, i), e.ce && e.ce(i), i;
}
let de = null;
const Fi = () => de || Te;
let vn, is;
{
  const e = An(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  vn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => de = n
  ), is = t(
    "__VUE_SSR_SETTERS__",
    (n) => Jt = n
  );
}
const tn = (e) => {
  const t = de;
  return vn(e), e.scope.on(), () => {
    e.scope.off(), vn(t);
  };
}, Gs = () => {
  de && de.scope.off(), vn(null);
};
function Ii(e) {
  return e.vnode.shapeFlag & 4;
}
let Jt = !1;
function Ni(e, t = !1, n = !1) {
  t && is(t);
  const { props: s, children: r } = e.vnode, i = Ii(e);
  wl(e, s, i, t), Ol(e, r, n || t);
  const o = i ? Kl(e, t) : void 0;
  return t && is(!1), o;
}
function Kl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, al);
  const { setup: s } = n;
  if (s) {
    Ye();
    const r = e.setupContext = s.length > 1 ? kl(e) : null, i = tn(e), o = en(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = _r(o);
    if (Xe(), i(), (l || e.sp) && !Tt(e) && ti(e), l) {
      if (o.then(Gs, Gs), t)
        return o.then((c) => {
          qs(e, c);
        }).catch((c) => {
          Mn(c, e, 0);
        });
      e.asyncDep = o;
    } else
      qs(e, o);
  } else
    Li(e);
}
function qs(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) && (e.setupState = Br(t)), Li(e);
}
function Li(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || je);
  {
    const r = tn(e);
    Ye();
    try {
      hl(e);
    } finally {
      Xe(), r();
    }
  }
}
const Wl = {
  get(e, t) {
    return ae(e, "get", ""), e[t];
  }
};
function kl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Wl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Fn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Br(Mo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ht)
        return Ht[n](e);
    },
    has(t, n) {
      return n in t || n in Ht;
    }
  })) : e.proxy;
}
function Gl(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ql(e) {
  return $(e) && "__vccOpts" in e;
}
const Jl = (e, t) => /* @__PURE__ */ Io(e, t, Jt);
function Yl(e, t, n) {
  try {
    xn(-1);
    const s = arguments.length;
    return s === 2 ? Z(t) && !L(t) ? qt(t) ? pe(e, null, [t]) : pe(e, t) : pe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && qt(n) && (n = [n]), pe(e, t, n));
  } finally {
    xn(1);
  }
}
const Xl = "3.5.34", Zl = {
  createComponentInstance: Ri,
  setupComponent: Ni,
  renderComponentRoot: dn,
  setCurrentRenderingInstance: Wt,
  isVNode: qt,
  normalizeVNode: Se
}, Zc = Zl;
let os;
const Js = typeof window < "u" && window.trustedTypes;
if (Js)
  try {
    os = /* @__PURE__ */ Js.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Di = os ? (e) => os.createHTML(e) : (e) => e, Ql = "http://www.w3.org/2000/svg", zl = "http://www.w3.org/1998/Math/MathML", We = typeof document < "u" ? document : null, Ys = We && /* @__PURE__ */ We.createElement("template"), ec = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? We.createElementNS(Ql, e) : t === "mathml" ? We.createElementNS(zl, e) : n ? We.createElement(e, { is: n }) : We.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => We.createTextNode(e),
  createComment: (e) => We.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => We.querySelector(e),
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
      Ys.innerHTML = Di(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ys.content;
      if (s === "svg" || s === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
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
}, ze = "transition", Ft = "animation", Yt = /* @__PURE__ */ Symbol("_vtc"), Hi = {
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
}, tc = /* @__PURE__ */ fe(
  {},
  Xr,
  Hi
), nc = (e) => (e.displayName = "Transition", e.props = tc, e), Qc = /* @__PURE__ */ nc(
  (e, { slots: t }) => Yl(qo, sc(e), t)
), ct = (e, t = []) => {
  L(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Xs = (e) => e ? L(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function sc(e) {
  const t = {};
  for (const T in e)
    T in Hi || (t[T] = e[T]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = i,
    appearActiveClass: h = o,
    appearToClass: u = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: v = `${n}-leave-active`,
    leaveToClass: A = `${n}-leave-to`
  } = e, B = rc(r), N = B && B[0], Q = B && B[1], {
    onBeforeEnter: q,
    onEnter: U,
    onEnterCancelled: g,
    onLeave: m,
    onLeaveCancelled: M,
    onBeforeAppear: V = q,
    onAppear: K = U,
    onAppearCancelled: k = g
  } = t, O = (T, j, se, oe) => {
    T._enterCancelled = oe, ft(T, j ? u : l), ft(T, j ? h : o), se && se();
  }, P = (T, j) => {
    T._isLeaving = !1, ft(T, d), ft(T, A), ft(T, v), j && j();
  }, W = (T) => (j, se) => {
    const oe = T ? K : U, I = () => O(j, T, se);
    ct(oe, [j, I]), Zs(() => {
      ft(j, T ? c : i), Ke(j, T ? u : l), Xs(oe) || Qs(j, s, N, I);
    });
  };
  return fe(t, {
    onBeforeEnter(T) {
      ct(q, [T]), Ke(T, i), Ke(T, o);
    },
    onBeforeAppear(T) {
      ct(V, [T]), Ke(T, c), Ke(T, h);
    },
    onEnter: W(!1),
    onAppear: W(!0),
    onLeave(T, j) {
      T._isLeaving = !0;
      const se = () => P(T, j);
      Ke(T, d), T._enterCancelled ? (Ke(T, v), tr(T)) : (tr(T), Ke(T, v)), Zs(() => {
        T._isLeaving && (ft(T, d), Ke(T, A), Xs(m) || Qs(T, s, Q, se));
      }), ct(m, [T, se]);
    },
    onEnterCancelled(T) {
      O(T, !1, void 0, !0), ct(g, [T]);
    },
    onAppearCancelled(T) {
      O(T, !0, void 0, !0), ct(k, [T]);
    },
    onLeaveCancelled(T) {
      P(T), ct(M, [T]);
    }
  });
}
function rc(e) {
  if (e == null)
    return null;
  if (Z(e))
    return [Gn(e.enter), Gn(e.leave)];
  {
    const t = Gn(e);
    return [t, t];
  }
}
function Gn(e) {
  return qi(e);
}
function Ke(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Yt] || (e[Yt] = /* @__PURE__ */ new Set())).add(t);
}
function ft(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Yt];
  n && (n.delete(t), n.size || (e[Yt] = void 0));
}
function Zs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ic = 0;
function Qs(e, t, n, s) {
  const r = e._endId = ++ic, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: c } = oc(e, t);
  if (!o)
    return s();
  const h = o + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(h, v), i();
  }, v = (A) => {
    A.target === e && ++u >= c && d();
  };
  setTimeout(() => {
    u < c && d();
  }, l + 1), e.addEventListener(h, v);
}
function oc(e, t) {
  const n = window.getComputedStyle(e), s = (B) => (n[B] || "").split(", "), r = s(`${ze}Delay`), i = s(`${ze}Duration`), o = zs(r, i), l = s(`${Ft}Delay`), c = s(`${Ft}Duration`), h = zs(l, c);
  let u = null, d = 0, v = 0;
  t === ze ? o > 0 && (u = ze, d = o, v = i.length) : t === Ft ? h > 0 && (u = Ft, d = h, v = c.length) : (d = Math.max(o, h), u = d > 0 ? o > h ? ze : Ft : null, v = u ? u === ze ? i.length : c.length : 0);
  const A = u === ze && /\b(?:transform|all)(?:,|$)/.test(
    s(`${ze}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: v,
    hasTransform: A
  };
}
function zs(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => er(n) + er(e[s])));
}
function er(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function tr(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function lc(e, t, n) {
  const s = e[Yt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const nr = /* @__PURE__ */ Symbol("_vod"), cc = /* @__PURE__ */ Symbol("_vsh"), fc = /* @__PURE__ */ Symbol(""), uc = /(?:^|;)\s*display\s*:/;
function ac(e, t, n) {
  const s = e.style, r = re(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (re(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Nt(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Nt(s, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? dc(
        e,
        o,
        !re(t) && t ? t[o] : void 0,
        l
      ) || Nt(s, o, l) : Nt(s, o, "");
    }
  } else if (r) {
    if (t !== n) {
      const o = s[fc];
      o && (n += ";" + o), s.cssText = n, i = uc.test(n);
    }
  } else t && e.removeAttribute("style");
  nr in e && (e[nr] = i ? s.display : "", e[cc] && (s.display = "none"));
}
const sr = /\s*!important$/;
function Nt(e, t, n) {
  if (L(n))
    n.forEach((s) => Nt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = hc(e, t);
    sr.test(n) ? e.setProperty(
      it(s),
      n.replace(sr, ""),
      "important"
    ) : e[s] = n;
  }
}
const rr = ["Webkit", "Moz", "ms"], qn = {};
function hc(e, t) {
  const n = qn[t];
  if (n)
    return n;
  let s = be(t);
  if (s !== "filter" && s in e)
    return qn[t] = s;
  s = Cn(s);
  for (let r = 0; r < rr.length; r++) {
    const i = rr[r] + s;
    if (i in e)
      return qn[t] = i;
  }
  return t;
}
function dc(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && re(s) && n === s;
}
const ir = "http://www.w3.org/1999/xlink";
function or(e, t, n, s, r, i = eo(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ir, t.slice(6, t.length)) : e.setAttributeNS(ir, t, n) : n == null || i && !Sr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Be(n) ? String(n) : n
  );
}
function lr(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Di(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Sr(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function tt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function pc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const cr = /* @__PURE__ */ Symbol("_vei");
function gc(e, t, n, s, r = null) {
  const i = e[cr] || (e[cr] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, c] = mc(t);
    if (s) {
      const h = i[t] = yc(
        s,
        r
      );
      tt(e, l, h, c);
    } else o && (pc(e, l, o, c), i[t] = void 0);
  }
}
const fr = /(?:Once|Passive|Capture)$/;
function mc(e) {
  let t;
  if (fr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(fr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : it(e.slice(2)), t];
}
let Jn = 0;
const _c = /* @__PURE__ */ Promise.resolve(), bc = () => Jn || (_c.then(() => Jn = 0), Jn = Date.now());
function yc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Fe(
      xc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = bc(), n;
}
function xc(e, t) {
  if (L(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const ur = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, vc = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? lc(e, s, o) : t === "style" ? ac(e, n, s) : Zt(t) ? Sn(t) || gc(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Sc(e, t, s, o)) ? (lr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && or(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Tc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !re(s))) ? lr(e, be(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), or(e, t, s, o));
};
function Sc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ur(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ur(t) && re(n) ? !1 : t in e;
}
function Tc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = be(t);
  return Array.isArray(n) ? n.some((r) => be(r) === s) : Object.keys(n).some((r) => be(r) === s);
}
const At = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return L(t) ? (n) => an(t, n) : t;
};
function Cc(e) {
  e.target.composing = !0;
}
function ar(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Je = /* @__PURE__ */ Symbol("_assign");
function hr(e, t, n) {
  return t && (e = e.trim()), n && (e = wn(e)), e;
}
const wc = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Je] = At(r);
    const i = s || r.props && r.props.type === "number";
    tt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Je](hr(e.value, n, i));
    }), (n || i) && tt(e, "change", () => {
      e.value = hr(e.value, n, i);
    }), t || (tt(e, "compositionstart", Cc), tt(e, "compositionend", ar), tt(e, "change", ar));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[Je] = At(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? wn(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c);
  }
}, Ac = {}, Ec = {
  created(e, { value: t }, n) {
    e.checked = st(t, n.props.value), e[Je] = At(n), tt(e, "change", () => {
      e[Je](Xt(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[Je] = At(s), t !== n && (e.checked = st(t, s.props.value));
  }
}, zc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = Qt(t);
    tt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? wn(Xt(o)) : Xt(o)
      );
      e[Je](
        e.multiple ? r ? new Set(i) : i : i[0]
      ), e._assigning = !0, Kr(() => {
        e._assigning = !1;
      });
    }), e[Je] = At(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    dr(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Je] = At(n);
  },
  updated(e, { value: t }) {
    e._assigning || dr(e, t);
  }
};
function dr(e, t) {
  const n = e.multiple, s = L(t);
  if (!(n && !s && !Qt(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const o = e.options[r], l = Xt(o);
      if (n)
        if (s) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((h) => String(h) === String(l)) : o.selected = Tr(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (st(Xt(o), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Xt(e) {
  return "_value" in e ? e._value : e.value;
}
function Mc() {
  wc.getSSRProps = ({ value: e }) => ({ value: e }), Ec.getSSRProps = ({ value: e }, t) => {
    if (t.props && st(t.props.value, e))
      return { checked: !0 };
  }, Ac.getSSRProps = ({ value: e }, t) => {
    if (L(e)) {
      if (t.props && Tr(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (Qt(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const Oc = ["ctrl", "shift", "alt", "meta"], Pc = {
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
  exact: (e, t) => Oc.some((n) => e[`${n}Key`] && !t.includes(n))
}, ef = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = Pc[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, $i = /* @__PURE__ */ fe({ patchProp: vc }, ec);
let jt, pr = !1;
function Rc() {
  return jt || (jt = Rl($i));
}
function Fc() {
  return jt = pr ? jt : Fl($i), pr = !0, jt;
}
const tf = ((...e) => {
  const t = Rc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = ji(s);
    if (!r) return;
    const i = t._component;
    !$(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, Vi(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
}), nf = ((...e) => {
  const t = Fc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = ji(s);
    if (r)
      return n(r, !0, Vi(r));
  }, t;
});
function Vi(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ji(e) {
  return re(e) ? document.querySelector(e) : e;
}
let gr = !1;
const sf = () => {
  gr || (gr = !0, Mc());
};
export {
  Bo as $,
  Hc as A,
  Nc as B,
  he as C,
  re as D,
  Lc as E,
  Ee as F,
  Et as G,
  jl as H,
  Kr as I,
  us as J,
  Uc as K,
  fs as L,
  ri as M,
  je as N,
  si as O,
  ii as P,
  Nl as Q,
  $c as R,
  $t as S,
  pt as T,
  jo as U,
  ms as V,
  Kc as W,
  Jc as X,
  qc as Y,
  Eo as Z,
  Wc as _,
  Qc as a,
  Zc as a0,
  Ic as a1,
  io as a2,
  Po as a3,
  Ec as a4,
  zc as a5,
  wc as a6,
  Un as a7,
  Vo as a8,
  kc as a9,
  ef as aa,
  tf as b,
  Jl as c,
  Oi as d,
  Dl as e,
  Vl as f,
  Yc as g,
  nf as h,
  Xc as i,
  Pi as j,
  pe as k,
  Gc as l,
  jc as m,
  Bc as n,
  An as o,
  Yl as p,
  Sr as q,
  sf as r,
  hn as s,
  L as t,
  Dc as u,
  $ as v,
  Z as w,
  Zt as x,
  _r as y,
  Vc as z
};
