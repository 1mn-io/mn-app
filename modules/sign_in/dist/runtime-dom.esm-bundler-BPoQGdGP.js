// @__NO_SIDE_EFFECTS__
function Et(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ee = {}, _t = [], $e = () => {
}, dr = () => !1, Jt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), xn = (e) => e.startsWith("onUpdate:"), ce = Object.assign, ts = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ji = Object.prototype.hasOwnProperty, X = (e, t) => ji.call(e, t), D = Array.isArray, bt = (e) => Xt(e) === "[object Map]", Yt = (e) => Xt(e) === "[object Set]", ws = (e) => Xt(e) === "[object Date]", j = (e) => typeof e == "function", ie = (e) => typeof e == "string", Ve = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", pr = (e) => (Z(e) || j(e)) && j(e.then) && j(e.catch), gr = Object.prototype.toString, Xt = (e) => gr.call(e), Bi = (e) => Xt(e).slice(8, -1), mr = (e) => Xt(e) === "[object Object]", ns = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, lt = /* @__PURE__ */ Et(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Ki = /-\w/g, Ae = vn(
  (e) => e.replace(Ki, (t) => t.slice(1).toUpperCase())
), Ui = /\B([A-Z])/g, tt = vn(
  (e) => e.replace(Ui, "-$1").toLowerCase()
), _r = vn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pn = vn(
  (e) => e ? `on${_r(e)}` : ""
), He = (e, t) => !Object.is(e, t), cn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, br = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, ss = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Wi = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let As;
const Cn = () => As || (As = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function rs(e) {
  if (D(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ie(s) ? Ji(s) : rs(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ie(e) || Z(e))
    return e;
}
const ki = /;(?![^(]*\))/g, Gi = /:([^]+)/, qi = /\/\*[^]*?\*\//g;
function Ji(e) {
  const t = {};
  return e.replace(qi, "").split(ki).forEach((n) => {
    if (n) {
      const s = n.split(Gi);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Fc(e) {
  if (!e) return "";
  if (ie(e)) return e;
  let t = "";
  for (const n in e) {
    const s = e[n];
    if (ie(s) || typeof s == "number") {
      const r = n.startsWith("--") ? n : tt(n);
      t += `${r}:${s};`;
    }
  }
  return t;
}
function is(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (D(e))
    for (let n = 0; n < e.length; n++) {
      const s = is(e[n]);
      s && (t += s + " ");
    }
  else if (Z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Yi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Xi = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Ic = /* @__PURE__ */ Et(Yi), Nc = /* @__PURE__ */ Et(Xi), yr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qi = /* @__PURE__ */ Et(yr), Dc = /* @__PURE__ */ Et(
  yr + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function xr(e) {
  return !!e || e === "";
}
const Zi = /[>/="'\u0009\u000a\u000c\u0020]/, Rn = {};
function Lc(e) {
  if (Rn.hasOwnProperty(e))
    return Rn[e];
  const t = Zi.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), Rn[e] = !t;
}
const Hc = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function $c(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const zi = /["'&<>]/;
function Vc(e) {
  const t = "" + e, n = zi.exec(t);
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
const eo = /^-?>|<!--|-->|--!>|<!-$/g;
function jc(e) {
  return e.replace(eo, "");
}
function to(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = wt(e[s], t[s]);
  return n;
}
function wt(e, t) {
  if (e === t) return !0;
  let n = ws(e), s = ws(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ve(e), s = Ve(t), n || s)
    return e === t;
  if (n = D(e), s = D(t), n || s)
    return n && s ? to(e, t) : !1;
  if (n = Z(e), s = Z(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), f = t.hasOwnProperty(o);
      if (l && !f || !l && f || !wt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function os(e, t) {
  return e.findIndex((n) => wt(n, t));
}
const vr = (e) => !!(e && e.__v_isRef === !0), no = (e) => ie(e) ? e : e == null ? "" : D(e) || Z(e) && (e.toString === gr || !j(e.toString)) ? vr(e) ? no(e.value) : JSON.stringify(e, Cr, 2) : String(e), Cr = (e, t) => vr(t) ? Cr(e, t.value) : bt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Fn(s, i) + " =>"] = r, n),
    {}
  )
} : Yt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fn(n))
} : Ve(t) ? Fn(t) : Z(t) && !D(t) && !mr(t) ? String(t) : t, Fn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ve(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Bc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let ue;
class so {
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
function ro() {
  return ue;
}
let ne;
const In = /* @__PURE__ */ new WeakSet();
class Sr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ue && (ue.active ? ue.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, In.has(this) && (In.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Er(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ms(this), wr(this);
    const t = ne, n = Me;
    ne = this, Me = !0;
    try {
      return this.fn();
    } finally {
      Ar(this), ne = t, Me = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        fs(t);
      this.deps = this.depsTail = void 0, Ms(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? In.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Kn(this) && this.run();
  }
  get dirty() {
    return Kn(this);
  }
}
let Tr = 0, Nt, Dt;
function Er(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Dt, Dt = e;
    return;
  }
  e.next = Nt, Nt = e;
}
function ls() {
  Tr++;
}
function cs() {
  if (--Tr > 0)
    return;
  if (Dt) {
    let t = Dt;
    for (Dt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Nt; ) {
    let t = Nt;
    for (Nt = void 0; t; ) {
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
function wr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ar(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), fs(s), io(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Kn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Mr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Mr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === jt) || (e.globalVersion = jt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Kn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ne, s = Me;
  ne = e, Me = !0;
  try {
    wr(e);
    const r = e.fn(e._value);
    (t.version === 0 || He(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    ne = n, Me = s, Ar(e), e.flags &= -3;
  }
}
function fs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      fs(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function io(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Me = !0;
const Or = [];
function Ge() {
  Or.push(Me), Me = !1;
}
function qe() {
  const e = Or.pop();
  Me = e === void 0 ? !0 : e;
}
function Ms(e) {
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
let jt = 0;
class oo {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class us {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ne || !Me || ne === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ne)
      n = this.activeLink = new oo(ne, this), ne.deps ? (n.prevDep = ne.depsTail, ne.depsTail.nextDep = n, ne.depsTail = n) : ne.deps = ne.depsTail = n, Pr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ne.depsTail, n.nextDep = void 0, ne.depsTail.nextDep = n, ne.depsTail = n, ne.deps === n && (ne.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, jt++, this.notify(t);
  }
  notify(t) {
    ls();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      cs();
    }
  }
}
function Pr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Pr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Un = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ Symbol(
  ""
), Wn = /* @__PURE__ */ Symbol(
  ""
), Bt = /* @__PURE__ */ Symbol(
  ""
);
function ae(e, t, n) {
  if (Me && ne) {
    let s = Un.get(e);
    s || Un.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new us()), r.map = s, r.key = n), r.track();
  }
}
function We(e, t, n, s, r, i) {
  const o = Un.get(e);
  if (!o) {
    jt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (ls(), t === "clear")
    o.forEach(l);
  else {
    const f = D(e), h = f && ns(n);
    if (f && n === "length") {
      const u = Number(s);
      o.forEach((d, v) => {
        (v === "length" || v === Bt || !Ve(v) && v >= u) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), h && l(o.get(Bt)), t) {
        case "add":
          f ? h && l(o.get("length")) : (l(o.get(ct)), bt(e) && l(o.get(Wn)));
          break;
        case "delete":
          f || (l(o.get(ct)), bt(e) && l(o.get(Wn)));
          break;
        case "set":
          bt(e) && l(o.get(ct));
          break;
      }
  }
  cs();
}
function dt(e) {
  const t = /* @__PURE__ */ Y(e);
  return t === e ? t : (ae(t, "iterate", Bt), /* @__PURE__ */ Oe(e) ? t : t.map(Je));
}
function as(e) {
  return ae(e = /* @__PURE__ */ Y(e), "iterate", Bt), e;
}
function Le(e, t) {
  return /* @__PURE__ */ et(e) ? Kt(/* @__PURE__ */ ft(e) ? Je(t) : t) : Je(t);
}
const lo = {
  __proto__: null,
  [Symbol.iterator]() {
    return Nn(this, Symbol.iterator, (e) => Le(this, e));
  },
  concat(...e) {
    return dt(this).concat(
      ...e.map((t) => D(t) ? dt(t) : t)
    );
  },
  entries() {
    return Nn(this, "entries", (e) => (e[1] = Le(this, e[1]), e));
  },
  every(e, t) {
    return Be(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Be(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Le(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Be(
      this,
      "find",
      e,
      t,
      (n) => Le(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Be(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Be(
      this,
      "findLast",
      e,
      t,
      (n) => Le(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Be(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Be(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Dn(this, "includes", e);
  },
  indexOf(...e) {
    return Dn(this, "indexOf", e);
  },
  join(e) {
    return dt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Dn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Be(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ot(this, "pop");
  },
  push(...e) {
    return Ot(this, "push", e);
  },
  reduce(e, ...t) {
    return Os(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Os(this, "reduceRight", e, t);
  },
  shift() {
    return Ot(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Be(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ot(this, "splice", e);
  },
  toReversed() {
    return dt(this).toReversed();
  },
  toSorted(e) {
    return dt(this).toSorted(e);
  },
  toSpliced(...e) {
    return dt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ot(this, "unshift", e);
  },
  values() {
    return Nn(this, "values", (e) => Le(this, e));
  }
};
function Nn(e, t, n) {
  const s = as(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ Oe(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const co = Array.prototype;
function Be(e, t, n, s, r, i) {
  const o = as(e), l = o !== e && !/* @__PURE__ */ Oe(e), f = o[t];
  if (f !== co[t]) {
    const d = f.apply(e, i);
    return l ? Je(d) : d;
  }
  let h = n;
  o !== e && (l ? h = function(d, v) {
    return n.call(this, Le(e, d), v, e);
  } : n.length > 2 && (h = function(d, v) {
    return n.call(this, d, v, e);
  }));
  const u = f.call(o, h, s);
  return l && r ? r(u) : u;
}
function Os(e, t, n, s) {
  const r = as(e), i = r !== e && !/* @__PURE__ */ Oe(e);
  let o = n, l = !1;
  r !== e && (i ? (l = s.length === 0, o = function(h, u, d) {
    return l && (l = !1, h = Le(e, h)), n.call(this, h, Le(e, u), d, e);
  }) : n.length > 3 && (o = function(h, u, d) {
    return n.call(this, h, u, d, e);
  }));
  const f = r[t](o, ...s);
  return l ? Le(e, f) : f;
}
function Dn(e, t, n) {
  const s = /* @__PURE__ */ Y(e);
  ae(s, "iterate", Bt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ gs(n[0]) ? (n[0] = /* @__PURE__ */ Y(n[0]), s[t](...n)) : r;
}
function Ot(e, t, n = []) {
  Ge(), ls();
  const s = (/* @__PURE__ */ Y(e))[t].apply(e, n);
  return cs(), qe(), s;
}
const fo = /* @__PURE__ */ Et("__proto__,__v_isRef,__isVue"), Rr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ve)
);
function uo(e) {
  Ve(e) || (e = String(e));
  const t = /* @__PURE__ */ Y(this);
  return ae(t, "has", e), t.hasOwnProperty(e);
}
class Fr {
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
      return s === (r ? i ? vo : Lr : i ? Dr : Nr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = D(t);
    if (!r) {
      let f;
      if (o && (f = lo[n]))
        return f;
      if (n === "hasOwnProperty")
        return uo;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ he(t) ? t : s
    );
    if ((Ve(n) ? Rr.has(n) : fo(n)) || (r || ae(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ he(l)) {
      const f = o && ns(n) ? l : l.value;
      return r && Z(f) ? /* @__PURE__ */ Gn(f) : f;
    }
    return Z(l) ? r ? /* @__PURE__ */ Gn(l) : /* @__PURE__ */ ds(l) : l;
  }
}
class Ir extends Fr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = D(t) && ns(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ et(i);
      if (!/* @__PURE__ */ Oe(s) && !/* @__PURE__ */ et(s) && (i = /* @__PURE__ */ Y(i), s = /* @__PURE__ */ Y(s)), !o && /* @__PURE__ */ he(i) && !/* @__PURE__ */ he(s))
        return h || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : X(t, n), f = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ he(t) ? t : r
    );
    return t === /* @__PURE__ */ Y(r) && (l ? He(s, i) && We(t, "set", n, s) : We(t, "add", n, s)), f;
  }
  deleteProperty(t, n) {
    const s = X(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && We(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ve(n) || !Rr.has(n)) && ae(t, "has", n), s;
  }
  ownKeys(t) {
    return ae(
      t,
      "iterate",
      D(t) ? "length" : ct
    ), Reflect.ownKeys(t);
  }
}
class ao extends Fr {
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
const ho = /* @__PURE__ */ new Ir(), po = /* @__PURE__ */ new ao(), go = /* @__PURE__ */ new Ir(!0);
const kn = (e) => e, tn = (e) => Reflect.getPrototypeOf(e);
function mo(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ Y(r), o = bt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, h = r[e](...s), u = n ? kn : t ? Kt : Je;
    return !t && ae(
      i,
      "iterate",
      f ? Wn : ct
    ), ce(
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
function nn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _o(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ Y(i), l = /* @__PURE__ */ Y(r);
      e || (He(r, l) && ae(o, "get", r), ae(o, "get", l));
      const { has: f } = tn(o), h = t ? kn : e ? Kt : Je;
      if (f.call(o, r))
        return h(i.get(r));
      if (f.call(o, l))
        return h(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ae(/* @__PURE__ */ Y(r), "iterate", ct), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ Y(i), l = /* @__PURE__ */ Y(r);
      return e || (He(r, l) && ae(o, "has", r), ae(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, f = /* @__PURE__ */ Y(l), h = t ? kn : e ? Kt : Je;
      return !e && ae(f, "iterate", ct), l.forEach((u, d) => r.call(i, h(u), h(d), o));
    }
  };
  return ce(
    n,
    e ? {
      add: nn("add"),
      set: nn("set"),
      delete: nn("delete"),
      clear: nn("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ Y(this), o = tn(i), l = /* @__PURE__ */ Y(r), f = !t && !/* @__PURE__ */ Oe(r) && !/* @__PURE__ */ et(r) ? l : r;
        return o.has.call(i, f) || He(r, f) && o.has.call(i, r) || He(l, f) && o.has.call(i, l) || (i.add(f), We(i, "add", f, f)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Oe(i) && !/* @__PURE__ */ et(i) && (i = /* @__PURE__ */ Y(i));
        const o = /* @__PURE__ */ Y(this), { has: l, get: f } = tn(o);
        let h = l.call(o, r);
        h || (r = /* @__PURE__ */ Y(r), h = l.call(o, r));
        const u = f.call(o, r);
        return o.set(r, i), h ? He(i, u) && We(o, "set", r, i) : We(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ Y(this), { has: o, get: l } = tn(i);
        let f = o.call(i, r);
        f || (r = /* @__PURE__ */ Y(r), f = o.call(i, r)), l && l.call(i, r);
        const h = i.delete(r);
        return f && We(i, "delete", r, void 0), h;
      },
      clear() {
        const r = /* @__PURE__ */ Y(this), i = r.size !== 0, o = r.clear();
        return i && We(
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
    n[r] = mo(r, e, t);
  }), n;
}
function hs(e, t) {
  const n = _o(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    X(n, r) && r in s ? n : s,
    r,
    i
  );
}
const bo = {
  get: /* @__PURE__ */ hs(!1, !1)
}, yo = {
  get: /* @__PURE__ */ hs(!1, !0)
}, xo = {
  get: /* @__PURE__ */ hs(!0, !1)
};
const Nr = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), vo = /* @__PURE__ */ new WeakMap();
function Co(e) {
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
function So(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Co(Bi(e));
}
// @__NO_SIDE_EFFECTS__
function ds(e) {
  return /* @__PURE__ */ et(e) ? e : ps(
    e,
    !1,
    ho,
    bo,
    Nr
  );
}
// @__NO_SIDE_EFFECTS__
function To(e) {
  return ps(
    e,
    !1,
    go,
    yo,
    Dr
  );
}
// @__NO_SIDE_EFFECTS__
function Gn(e) {
  return ps(
    e,
    !0,
    po,
    xo,
    Lr
  );
}
function ps(e, t, n, s, r) {
  if (!Z(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = So(e);
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
function ft(e) {
  return /* @__PURE__ */ et(e) ? /* @__PURE__ */ ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function et(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function gs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Y(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Y(t) : e;
}
function Eo(e) {
  return !X(e, "__v_skip") && Object.isExtensible(e) && br(e, "__v_skip", !0), e;
}
const Je = (e) => Z(e) ? /* @__PURE__ */ ds(e) : e, Kt = (e) => Z(e) ? /* @__PURE__ */ Gn(e) : e;
// @__NO_SIDE_EFFECTS__
function he(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Kc(e) {
  return wo(e, !1);
}
function wo(e, t) {
  return /* @__PURE__ */ he(e) ? e : new Ao(e, t);
}
class Ao {
  constructor(t, n) {
    this.dep = new us(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Y(t), this._value = n ? t : Je(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Oe(t) || /* @__PURE__ */ et(t);
    t = s ? t : /* @__PURE__ */ Y(t), He(t, n) && (this._rawValue = t, this._value = s ? t : Je(t), this.dep.trigger());
  }
}
function Mo(e) {
  return /* @__PURE__ */ he(e) ? e.value : e;
}
const Oo = {
  get: (e, t, n) => t === "__v_raw" ? e : Mo(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ he(r) && !/* @__PURE__ */ he(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Hr(e) {
  return /* @__PURE__ */ ft(e) ? e : new Proxy(e, Oo);
}
class Po {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new us(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = jt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ne !== this)
      return Er(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Mr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ro(e, t, n = !1) {
  let s, r;
  return j(e) ? s = e : (s = e.get, r = e.set), new Po(s, r, n);
}
const sn = {}, hn = /* @__PURE__ */ new WeakMap();
let it;
function Fo(e, t = !1, n = it) {
  if (n) {
    let s = hn.get(n);
    s || hn.set(n, s = []), s.push(e);
  }
}
function Io(e, t, n = ee) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = n, h = (m) => r ? m : /* @__PURE__ */ Oe(m) || r === !1 || r === 0 ? ke(m, 1) : ke(m);
  let u, d, v, w, W = !1, L = !1;
  if (/* @__PURE__ */ he(e) ? (d = () => e.value, W = /* @__PURE__ */ Oe(e)) : /* @__PURE__ */ ft(e) ? (d = () => h(e), W = !0) : D(e) ? (L = !0, W = e.some((m) => /* @__PURE__ */ ft(m) || /* @__PURE__ */ Oe(m)), d = () => e.map((m) => {
    if (/* @__PURE__ */ he(m))
      return m.value;
    if (/* @__PURE__ */ ft(m))
      return h(m);
    if (j(m))
      return f ? f(m, 2) : m();
  })) : j(e) ? t ? d = f ? () => f(e, 2) : e : d = () => {
    if (v) {
      Ge();
      try {
        v();
      } finally {
        qe();
      }
    }
    const m = it;
    it = u;
    try {
      return f ? f(e, 3, [w]) : e(w);
    } finally {
      it = m;
    }
  } : d = $e, t && r) {
    const m = d, M = r === !0 ? 1 / 0 : r;
    d = () => ke(m(), M);
  }
  const Q = ro(), q = () => {
    u.stop(), Q && Q.active && ts(Q.effects, u);
  };
  if (i && t) {
    const m = t;
    t = (...M) => {
      m(...M), q();
    };
  }
  let B = L ? new Array(e.length).fill(sn) : sn;
  const g = (m) => {
    if (!(!(u.flags & 1) || !u.dirty && !m))
      if (t) {
        const M = u.run();
        if (r || W || (L ? M.some(($, K) => He($, B[K])) : He(M, B))) {
          v && v();
          const $ = it;
          it = u;
          try {
            const K = [
              M,
              // pass undefined as the old value when it's changed for the first time
              B === sn ? void 0 : L && B[0] === sn ? [] : B,
              w
            ];
            B = M, f ? f(t, 3, K) : (
              // @ts-expect-error
              t(...K)
            );
          } finally {
            it = $;
          }
        }
      } else
        u.run();
  };
  return l && l(g), u = new Sr(d), u.scheduler = o ? () => o(g, !1) : g, w = (m) => Fo(m, !1, u), v = u.onStop = () => {
    const m = hn.get(u);
    if (m) {
      if (f)
        f(m, 4);
      else
        for (const M of m) M();
      hn.delete(u);
    }
  }, t ? s ? g(!0) : B = u.run() : o ? o(g.bind(null, !0), !0) : u.run(), q.pause = u.pause.bind(u), q.resume = u.resume.bind(u), q.stop = q, q;
}
function ke(e, t = 1 / 0, n) {
  if (t <= 0 || !Z(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ he(e))
    ke(e.value, t, n);
  else if (D(e))
    for (let s = 0; s < e.length; s++)
      ke(e[s], t, n);
  else if (Yt(e) || bt(e))
    e.forEach((s) => {
      ke(s, t, n);
    });
  else if (mr(e)) {
    for (const s in e)
      ke(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ke(e[s], t, n);
  }
  return e;
}
function Qt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Sn(r, t, n);
  }
}
function Pe(e, t, n, s) {
  if (j(e)) {
    const r = Qt(e, t, n, s);
    return r && pr(r) && r.catch((i) => {
      Sn(i, t, n);
    }), r;
  }
  if (D(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Pe(e[i], t, n, s));
    return r;
  }
}
function Sn(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ee;
  if (t) {
    let l = t.parent;
    const f = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
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
      Ge(), Qt(i, null, 10, [
        e,
        f,
        h
      ]), qe();
      return;
    }
  }
  No(e, n, r, s, o);
}
function No(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const pe = [];
let Ne = -1;
const yt = [];
let ze = null, gt = 0;
const $r = /* @__PURE__ */ Promise.resolve();
let dn = null;
function Do(e) {
  const t = dn || $r;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Lo(e) {
  let t = Ne + 1, n = pe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = pe[s], i = Ut(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ms(e) {
  if (!(e.flags & 1)) {
    const t = Ut(e), n = pe[pe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ut(n) ? pe.push(e) : pe.splice(Lo(t), 0, e), e.flags |= 1, Vr();
  }
}
function Vr() {
  dn || (dn = $r.then(jr));
}
function Ho(e) {
  D(e) ? yt.push(...e) : ze && e.id === -1 ? ze.splice(gt + 1, 0, e) : e.flags & 1 || (yt.push(e), e.flags |= 1), Vr();
}
function Ps(e, t, n = Ne + 1) {
  for (; n < pe.length; n++) {
    const s = pe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      pe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function pn(e) {
  if (yt.length) {
    const t = [...new Set(yt)].sort(
      (n, s) => Ut(n) - Ut(s)
    );
    if (yt.length = 0, ze) {
      ze.push(...t);
      return;
    }
    for (ze = t, gt = 0; gt < ze.length; gt++) {
      const n = ze[gt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ze = null, gt = 0;
  }
}
const Ut = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function jr(e) {
  try {
    for (Ne = 0; Ne < pe.length; Ne++) {
      const t = pe[Ne];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Qt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ne < pe.length; Ne++) {
      const t = pe[Ne];
      t && (t.flags &= -2);
    }
    Ne = -1, pe.length = 0, pn(), dn = null, (pe.length || yt.length) && jr();
  }
}
let Ee = null, Br = null;
function Wt(e) {
  const t = Ee;
  return Ee = e, Br = e && e.type.__scopeId || null, t;
}
function $o(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Ks(-1);
    const i = Wt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Wt(i), s._d && Ks(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Uc(e, t) {
  if (Ee === null)
    return e;
  const n = wn(Ee), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, f = ee] = t[r];
    i && (j(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ke(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: f
    }));
  }
  return e;
}
function De(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[s];
    f && (Ge(), Pe(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), qe());
  }
}
function Vo(e, t) {
  if (ge) {
    let n = ge.provides;
    const s = ge.parent && ge.parent.provides;
    s === n && (n = ge.provides = Object.create(s)), n[e] = t;
  }
}
function fn(e, t, n = !1) {
  const s = Ti();
  if (s || Ct) {
    let r = Ct ? Ct._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && j(t) ? t.call(s && s.proxy) : t;
  }
}
const jo = /* @__PURE__ */ Symbol.for("v-scx"), Bo = () => fn(jo);
function Ln(e, t, n) {
  return Kr(e, t, n);
}
function Kr(e, t, n = ee) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = ce({}, n), f = t && s || !t && i !== "post";
  let h;
  if (qt) {
    if (i === "sync") {
      const w = Bo();
      h = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!f) {
      const w = () => {
      };
      return w.stop = $e, w.resume = $e, w.pause = $e, w;
    }
  }
  const u = ge;
  l.call = (w, W, L) => Pe(w, u, W, L);
  let d = !1;
  i === "post" ? l.scheduler = (w) => {
    me(w, u && u.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (w, W) => {
    W ? w() : ms(w);
  }), l.augmentJob = (w) => {
    t && (w.flags |= 4), d && (w.flags |= 2, u && (w.id = u.uid, w.i = u));
  };
  const v = Io(e, t, l);
  return qt && (h ? h.push(v) : f && v()), v;
}
function Ko(e, t, n) {
  const s = this.proxy, r = ie(e) ? e.includes(".") ? Ur(s, e) : () => s[e] : e.bind(s, s);
  let i;
  j(t) ? i = t : (i = t.handler, n = t);
  const o = Zt(this), l = Kr(r, i.bind(s), n);
  return o(), l;
}
function Ur(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Uo = /* @__PURE__ */ Symbol("_vte"), Wo = (e) => e.__isTeleport, Qe = /* @__PURE__ */ Symbol("_leaveCb"), Pt = /* @__PURE__ */ Symbol("_enterCb");
function ko() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Jr(() => {
    e.isMounted = !0;
  }), Xr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Se = [Function, Array], Go = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Se,
  onEnter: Se,
  onAfterEnter: Se,
  onEnterCancelled: Se,
  // leave
  onBeforeLeave: Se,
  onLeave: Se,
  onAfterLeave: Se,
  onLeaveCancelled: Se,
  // appear
  onBeforeAppear: Se,
  onAppear: Se,
  onAfterAppear: Se,
  onAppearCancelled: Se
};
function qo(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function qn(e, t, n, s, r) {
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
    onAfterLeave: W,
    onLeaveCancelled: L,
    onBeforeAppear: Q,
    onAppear: q,
    onAfterAppear: B,
    onAppearCancelled: g
  } = t, m = String(e.key), M = qo(n, e), $ = (O, P) => {
    O && Pe(
      O,
      s,
      9,
      P
    );
  }, K = (O, P) => {
    const U = P[1];
    $(O, P), D(O) ? O.every((S) => S.length <= 1) && U() : O.length <= 1 && U();
  }, k = {
    mode: o,
    persisted: l,
    beforeEnter(O) {
      let P = f;
      if (!n.isMounted)
        if (i)
          P = Q || f;
        else
          return;
      O[Qe] && O[Qe](
        !0
        /* cancelled */
      );
      const U = M[m];
      U && mt(e, U) && U.el[Qe] && U.el[Qe](), $(P, [O]);
    },
    enter(O) {
      if (M[m] === e) return;
      let P = h, U = u, S = d;
      if (!n.isMounted)
        if (i)
          P = q || h, U = B || u, S = g || d;
        else
          return;
      let V = !1;
      O[Pt] = (oe) => {
        V || (V = !0, oe ? $(S, [O]) : $(U, [O]), k.delayedLeave && k.delayedLeave(), O[Pt] = void 0);
      };
      const se = O[Pt].bind(null, !1);
      P ? K(P, [O, se]) : se();
    },
    leave(O, P) {
      const U = String(e.key);
      if (O[Pt] && O[Pt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return P();
      $(v, [O]);
      let S = !1;
      O[Qe] = (se) => {
        S || (S = !0, P(), se ? $(L, [O]) : $(W, [O]), O[Qe] = void 0, M[U] === e && delete M[U]);
      };
      const V = O[Qe].bind(null, !1);
      M[U] = e, w ? K(w, [O, V]) : V();
    },
    clone(O) {
      return qn(
        O,
        t,
        n,
        s
      );
    }
  };
  return k;
}
function kt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, kt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Wr(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === ye ? (o.patchFlag & 128 && r++, s = s.concat(
      Wr(o.children, t, l)
    )) : (t || o.type !== je) && s.push(l != null ? at(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Wc(e, t) {
  return j(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function kr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Rs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const gn = /* @__PURE__ */ new WeakMap();
function xt(e, t, n, s, r = !1) {
  if (D(e)) {
    e.forEach(
      (L, Q) => xt(
        L,
        t && (D(t) ? t[Q] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (vt(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && xt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? wn(s.component) : s.el, o = r ? null : i, { i: l, r: f } = e, h = t && t.r, u = l.refs === ee ? l.refs = {} : l.refs, d = l.setupState, v = /* @__PURE__ */ Y(d), w = d === ee ? dr : (L) => Rs(u, L) ? !1 : X(v, L), W = (L, Q) => !(Q && Rs(u, Q));
  if (h != null && h !== f) {
    if (Fs(t), ie(h))
      u[h] = null, w(h) && (d[h] = null);
    else if (/* @__PURE__ */ he(h)) {
      const L = t;
      W(h, L.k) && (h.value = null), L.k && (u[L.k] = null);
    }
  }
  if (j(f))
    Qt(f, l, 12, [o, u]);
  else {
    const L = ie(f), Q = /* @__PURE__ */ he(f);
    if (L || Q) {
      const q = () => {
        if (e.f) {
          const B = L ? w(f) ? d[f] : u[f] : W() || !e.k ? f.value : u[e.k];
          if (r)
            D(B) && ts(B, i);
          else if (D(B))
            B.includes(i) || B.push(i);
          else if (L)
            u[f] = [i], w(f) && (d[f] = u[f]);
          else {
            const g = [i];
            W(f, e.k) && (f.value = g), e.k && (u[e.k] = g);
          }
        } else L ? (u[f] = o, w(f) && (d[f] = o)) : Q && (W(f, e.k) && (f.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const B = () => {
          q(), gn.delete(e);
        };
        B.id = -1, gn.set(e, B), me(B, n);
      } else
        Fs(e), q();
    }
  }
}
function Fs(e) {
  const t = gn.get(e);
  t && (t.flags |= 8, gn.delete(e));
}
let Is = !1;
const pt = () => {
  Is || (console.error("Hydration completed but contains mismatches."), Is = !0);
}, Jo = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Yo = (e) => e.namespaceURI.includes("MathML"), rn = (e) => {
  if (e.nodeType === 1) {
    if (Jo(e)) return "svg";
    if (Yo(e)) return "mathml";
  }
}, on = (e) => e.nodeType === 8;
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
      insert: f,
      createComment: h
    }
  } = e, u = (g, m) => {
    if (!m.hasChildNodes()) {
      n(null, g, m), pn(), m._vnode = g;
      return;
    }
    d(m.firstChild, g, null, null, null), pn(), m._vnode = g;
  }, d = (g, m, M, $, K, k = !1) => {
    k = k || !!m.dynamicChildren;
    const O = on(g) && g.data === "[", P = () => L(
      g,
      m,
      M,
      $,
      K,
      O
    ), { type: U, ref: S, shapeFlag: V, patchFlag: se } = m;
    let oe = g.nodeType;
    m.el = g, se === -2 && (k = !1, m.dynamicChildren = null);
    let I = null;
    switch (U) {
      case ut:
        oe !== 3 ? m.children === "" ? (f(m.el = r(""), o(g), g), I = g) : I = P() : (g.data !== m.children && (pt(), g.data = m.children), I = i(g));
        break;
      case je:
        B(g) ? (I = i(g), q(
          m.el = g.content.firstChild,
          g,
          M
        )) : oe !== 8 || O ? I = P() : I = i(g);
        break;
      case Ht:
        if (O && (g = i(g), oe = g.nodeType), oe === 1 || oe === 3) {
          I = g;
          const G = !m.children.length;
          for (let R = 0; R < m.staticCount; R++)
            G && (m.children += I.nodeType === 1 ? I.outerHTML : I.data), R === m.staticCount - 1 && (m.anchor = I), I = i(I);
          return O ? i(I) : I;
        } else
          P();
        break;
      case ye:
        O ? I = W(
          g,
          m,
          M,
          $,
          K,
          k
        ) : I = P();
        break;
      default:
        if (V & 1)
          (oe !== 1 || m.type.toLowerCase() !== g.tagName.toLowerCase()) && !B(g) ? I = P() : I = v(
            g,
            m,
            M,
            $,
            K,
            k
          );
        else if (V & 6) {
          m.slotScopeIds = K;
          const G = o(g);
          if (O ? I = Q(g) : on(g) && g.data === "teleport start" ? I = Q(g, g.data, "teleport end") : I = i(g), t(
            m,
            G,
            null,
            M,
            $,
            rn(G),
            k
          ), vt(m) && !m.type.__asyncResolved) {
            let R;
            O ? (R = Ce(ye), R.anchor = I ? I.previousSibling : G.lastChild) : R = g.nodeType === 3 ? Ci("") : Ce("div"), R.el = g, m.component.subTree = R;
          }
        } else V & 64 ? oe !== 8 ? I = P() : I = m.type.hydrate(
          g,
          m,
          M,
          $,
          K,
          k,
          e,
          w
        ) : V & 128 && (I = m.type.hydrate(
          g,
          m,
          M,
          $,
          rn(o(g)),
          K,
          k,
          e,
          d
        ));
    }
    return S != null && xt(S, null, $, m), I;
  }, v = (g, m, M, $, K, k) => {
    k = k || !!m.dynamicChildren;
    const { type: O, props: P, patchFlag: U, shapeFlag: S, dirs: V, transition: se } = m, oe = O === "input" || O === "option";
    if (oe || U !== -1) {
      V && De(m, null, M, "created");
      let I = !1;
      if (B(g)) {
        I = di(
          null,
          // no need check parentSuspense in hydration
          se
        ) && M && M.vnode.props && M.vnode.props.appear;
        const R = g.content.firstChild;
        if (I) {
          const re = R.getAttribute("class");
          re && (R.$cls = re), se.beforeEnter(R);
        }
        q(R, g, M), m.el = g = R;
      }
      if (S & 16 && // skip if element has innerHTML / textContent
      !(P && (P.innerHTML || P.textContent))) {
        let R = w(
          g.firstChild,
          m,
          g,
          M,
          $,
          K,
          k
        );
        for (; R; ) {
          ln(
            g,
            1
            /* CHILDREN */
          ) || pt();
          const re = R;
          R = R.nextSibling, l(re);
        }
      } else if (S & 8) {
        let R = m.children;
        R[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (R = R.slice(1));
        const { textContent: re } = g;
        re !== R && // innerHTML normalize \r\n or \r into a single \n in the DOM
        re !== R.replace(/\r\n|\r/g, `
`) && (ln(
          g,
          0
          /* TEXT */
        ) || pt(), g.textContent = m.children);
      }
      if (P) {
        if (oe || !k || U & 48) {
          const R = g.tagName.includes("-");
          for (const re in P)
            (oe && (re.endsWith("value") || re === "indeterminate") || Jt(re) && !lt(re) || // force hydrate v-bind with .prop modifiers
            re[0] === "." || R && !lt(re)) && s(g, re, null, P[re], void 0, M);
        } else if (P.onClick)
          s(
            g,
            "onClick",
            null,
            P.onClick,
            void 0,
            M
          );
        else if (U & 4 && /* @__PURE__ */ ft(P.style))
          for (const R in P.style) P.style[R];
      }
      let G;
      (G = P && P.onVnodeBeforeMount) && Te(G, M, m), V && De(m, null, M, "beforeMount"), ((G = P && P.onVnodeMounted) || V || I) && bi(() => {
        G && Te(G, M, m), I && se.enter(g), V && De(m, null, M, "mounted");
      }, $);
    }
    return g.nextSibling;
  }, w = (g, m, M, $, K, k, O) => {
    O = O || !!m.dynamicChildren;
    const P = m.children, U = P.length;
    for (let S = 0; S < U; S++) {
      const V = O ? P[S] : P[S] = xe(P[S]), se = V.type === ut;
      g ? (se && !O && S + 1 < U && xe(P[S + 1]).type === ut && (f(
        r(
          g.data.slice(V.children.length)
        ),
        M,
        i(g)
      ), g.data = V.children), g = d(
        g,
        V,
        $,
        K,
        k,
        O
      )) : se && !V.children ? f(V.el = r(""), M) : (ln(
        M,
        1
        /* CHILDREN */
      ) || pt(), n(
        null,
        V,
        M,
        null,
        $,
        K,
        rn(M),
        k
      ));
    }
    return g;
  }, W = (g, m, M, $, K, k) => {
    const { slotScopeIds: O } = m;
    O && (K = K ? K.concat(O) : O);
    const P = o(g), U = w(
      i(g),
      m,
      P,
      M,
      $,
      K,
      k
    );
    return U && on(U) && U.data === "]" ? i(m.anchor = U) : (pt(), f(m.anchor = h("]"), P, U), U);
  }, L = (g, m, M, $, K, k) => {
    if (ln(
      g.parentElement,
      1
      /* CHILDREN */
    ) || pt(), m.el = null, k) {
      const U = Q(g);
      for (; ; ) {
        const S = i(g);
        if (S && S !== U)
          l(S);
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
      $,
      rn(P),
      K
    ), M && (M.vnode.el = m.el, si(M, m.el)), O;
  }, Q = (g, m = "[", M = "]") => {
    let $ = 0;
    for (; g; )
      if (g = i(g), g && on(g) && (g.data === m && $++, g.data === M)) {
        if ($ === 0)
          return i(g);
        $--;
      }
    return g;
  }, q = (g, m, M) => {
    const $ = m.parentNode;
    $ && $.replaceChild(g, m);
    let K = M;
    for (; K; )
      K.vnode.el === m && (K.vnode.el = K.subTree.el = g), K = K.parent;
  }, B = (g) => g.nodeType === 1 && g.tagName === "TEMPLATE";
  return [u, d];
}
const Ns = "data-allow-mismatch", Qo = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function ln(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Ns); )
      e = e.parentElement;
  const n = e && e.getAttribute(Ns);
  if (n == null)
    return !1;
  if (n === "")
    return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(Qo[t]);
  }
}
Cn().requestIdleCallback;
Cn().cancelIdleCallback;
const vt = (e) => !!e.type.__asyncLoader, Gr = (e) => e.type.__isKeepAlive;
function Zo(e, t) {
  qr(e, "a", t);
}
function zo(e, t) {
  qr(e, "da", t);
}
function qr(e, t, n = ge) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Tn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Gr(r.parent.vnode) && el(s, t, n, r), r = r.parent;
  }
}
function el(e, t, n, s) {
  const r = Tn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Qr(() => {
    ts(s[t], r);
  }, n);
}
function Tn(e, t, n = ge, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ge();
      const l = Zt(n), f = Pe(t, n, e, o);
      return l(), qe(), f;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const Ye = (e) => (t, n = ge) => {
  (!qt || e === "sp") && Tn(e, (...s) => t(...s), n);
}, tl = Ye("bm"), Jr = Ye("m"), nl = Ye(
  "bu"
), Yr = Ye("u"), Xr = Ye(
  "bum"
), Qr = Ye("um"), sl = Ye(
  "sp"
), rl = Ye("rtg"), il = Ye("rtc");
function ol(e, t = ge) {
  Tn("ec", e, t);
}
const ll = /* @__PURE__ */ Symbol.for("v-ndc"), Jn = (e) => e ? Ei(e) ? wn(e) : Jn(e.parent) : null, Lt = (
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
    $parent: (e) => Jn(e.parent),
    $root: (e) => Jn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => zr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ms(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Do.bind(e.proxy)),
    $watch: (e) => Ko.bind(e)
  })
), Hn = (e, t) => e !== ee && !e.__isScriptSetup && X(e, t), cl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
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
        if (Hn(s, t))
          return o[t] = 1, s[t];
        if (r !== ee && X(r, t))
          return o[t] = 2, r[t];
        if (X(i, t))
          return o[t] = 3, i[t];
        if (n !== ee && X(n, t))
          return o[t] = 4, n[t];
        Yn && (o[t] = 0);
      }
    }
    const h = Lt[t];
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
      d = f.config.globalProperties, X(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Hn(r, t) ? (r[t] = n, !0) : s !== ee && X(s, t) ? (s[t] = n, !0) : X(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let f;
    return !!(n[l] || e !== ee && l[0] !== "$" && X(e, l) || Hn(t, l) || X(i, l) || X(s, l) || X(Lt, l) || X(r.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : X(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ds(e) {
  return D(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Yn = !0;
function fl(e) {
  const t = zr(e), n = e.proxy, s = e.ctx;
  Yn = !1, t.beforeCreate && Ls(t.beforeCreate, e, "bc");
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
    updated: W,
    activated: L,
    deactivated: Q,
    beforeDestroy: q,
    beforeUnmount: B,
    destroyed: g,
    unmounted: m,
    render: M,
    renderTracked: $,
    renderTriggered: K,
    errorCaptured: k,
    serverPrefetch: O,
    // public API
    expose: P,
    inheritAttrs: U,
    // assets
    components: S,
    directives: V,
    filters: se
  } = t;
  if (h && ul(h, s, null), o)
    for (const G in o) {
      const R = o[G];
      j(R) && (s[G] = R.bind(n));
    }
  if (r) {
    const G = r.call(n, n);
    Z(G) && (e.data = /* @__PURE__ */ ds(G));
  }
  if (Yn = !0, i)
    for (const G in i) {
      const R = i[G], re = j(R) ? R.bind(n, n) : j(R.get) ? R.get.bind(n, n) : $e, zt = !j(R) && j(R.set) ? R.set.bind(n) : $e, nt = Ul({
        get: re,
        set: zt
      });
      Object.defineProperty(s, G, {
        enumerable: !0,
        configurable: !0,
        get: () => nt.value,
        set: (Re) => nt.value = Re
      });
    }
  if (l)
    for (const G in l)
      Zr(l[G], s, n, G);
  if (f) {
    const G = j(f) ? f.call(n) : f;
    Reflect.ownKeys(G).forEach((R) => {
      Vo(R, G[R]);
    });
  }
  u && Ls(u, e, "c");
  function I(G, R) {
    D(R) ? R.forEach((re) => G(re.bind(n))) : R && G(R.bind(n));
  }
  if (I(tl, d), I(Jr, v), I(nl, w), I(Yr, W), I(Zo, L), I(zo, Q), I(ol, k), I(il, $), I(rl, K), I(Xr, B), I(Qr, m), I(sl, O), D(P))
    if (P.length) {
      const G = e.exposed || (e.exposed = {});
      P.forEach((R) => {
        Object.defineProperty(G, R, {
          get: () => n[R],
          set: (re) => n[R] = re,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === $e && (e.render = M), U != null && (e.inheritAttrs = U), S && (e.components = S), V && (e.directives = V), O && kr(e);
}
function ul(e, t, n = $e) {
  D(e) && (e = Xn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    Z(r) ? "default" in r ? i = fn(
      r.from || s,
      r.default,
      !0
    ) : i = fn(r.from || s) : i = fn(r), /* @__PURE__ */ he(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i;
  }
}
function Ls(e, t, n) {
  Pe(
    D(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Zr(e, t, n, s) {
  let r = s.includes(".") ? Ur(n, s) : () => n[s];
  if (ie(e)) {
    const i = t[e];
    j(i) && Ln(r, i);
  } else if (j(e))
    Ln(r, e.bind(n));
  else if (Z(e))
    if (D(e))
      e.forEach((i) => Zr(i, t, n, s));
    else {
      const i = j(e.handler) ? e.handler.bind(n) : t[e.handler];
      j(i) && Ln(r, i, e);
    }
}
function zr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !n && !s ? f = t : (f = {}, r.length && r.forEach(
    (h) => mn(f, h, o, !0)
  ), mn(f, t, o)), Z(t) && i.set(t, f), f;
}
function mn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && mn(e, i, n, !0), r && r.forEach(
    (o) => mn(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = al[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const al = {
  data: Hs,
  props: $s,
  emits: $s,
  // objects
  methods: Ft,
  computed: Ft,
  // lifecycle
  beforeCreate: de,
  created: de,
  beforeMount: de,
  mounted: de,
  beforeUpdate: de,
  updated: de,
  beforeDestroy: de,
  beforeUnmount: de,
  destroyed: de,
  unmounted: de,
  activated: de,
  deactivated: de,
  errorCaptured: de,
  serverPrefetch: de,
  // assets
  components: Ft,
  directives: Ft,
  // watch
  watch: dl,
  // provide / inject
  provide: Hs,
  inject: hl
};
function Hs(e, t) {
  return t ? e ? function() {
    return ce(
      j(e) ? e.call(this, this) : e,
      j(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function hl(e, t) {
  return Ft(Xn(e), Xn(t));
}
function Xn(e) {
  if (D(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function de(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ft(e, t) {
  return e ? ce(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function $s(e, t) {
  return e ? D(e) && D(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ce(
    /* @__PURE__ */ Object.create(null),
    Ds(e),
    Ds(t ?? {})
  ) : t;
}
function dl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ce(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = de(e[s], t[s]);
  return n;
}
function ei() {
  return {
    app: null,
    config: {
      isNativeTag: dr,
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
let pl = 0;
function gl(e, t) {
  return function(s, r = null) {
    j(s) || (s = ce({}, s)), r != null && !Z(r) && (r = null);
    const i = ei(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const h = i.app = {
      _uid: pl++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Wl,
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
          const w = h._ceVNode || Ce(s, r);
          return w.appContext = i, v === !0 ? v = "svg" : v === !1 && (v = void 0), d && t ? t(w, u) : e(w, u, v), f = !0, h._container = u, u.__vue_app__ = h, wn(w.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        f && (Pe(
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
const ml = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ae(t)}Modifiers`] || e[`${tt(t)}Modifiers`];
function _l(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ee;
  let r = n;
  const i = t.startsWith("update:"), o = i && ml(s, t.slice(7));
  o && (o.trim && (r = n.map((u) => ie(u) ? u.trim() : u)), o.number && (r = n.map(ss)));
  let l, f = s[l = Pn(t)] || // also try camelCase event handler (#2249)
  s[l = Pn(Ae(t))];
  !f && i && (f = s[l = Pn(tt(t))]), f && Pe(
    f,
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
    e.emitted[l] = !0, Pe(
      h,
      e,
      6,
      r
    );
  }
}
const bl = /* @__PURE__ */ new WeakMap();
function ti(e, t, n = !1) {
  const s = n ? bl : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!j(e)) {
    const f = (h) => {
      const u = ti(h, t, !0);
      u && (l = !0, ce(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (Z(e) && s.set(e, null), null) : (D(i) ? i.forEach((f) => o[f] = null) : ce(o, i), Z(e) && s.set(e, o), o);
}
function En(e, t) {
  return !e || !Jt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), X(e, t[0].toLowerCase() + t.slice(1)) || X(e, tt(t)) || X(e, t));
}
function un(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
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
    ctx: W,
    inheritAttrs: L
  } = e, Q = Wt(e);
  let q, B;
  try {
    if (n.shapeFlag & 4) {
      const m = r || s, M = m;
      q = xe(
        h.call(
          M,
          m,
          u,
          d,
          w,
          v,
          W
        )
      ), B = l;
    } else {
      const m = t;
      q = xe(
        m.length > 1 ? m(
          d,
          { attrs: l, slots: o, emit: f }
        ) : m(
          d,
          null
        )
      ), B = t.props ? l : yl(l);
    }
  } catch (m) {
    $t.length = 0, Sn(m, e, 1), q = Ce(je);
  }
  let g = q;
  if (B && L !== !1) {
    const m = Object.keys(B), { shapeFlag: M } = g;
    m.length && M & 7 && (i && m.some(xn) && (B = xl(
      B,
      i
    )), g = at(g, B, !1, !0));
  }
  return n.dirs && (g = at(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && kt(g, n.transition), q = g, Wt(Q), q;
}
const yl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Jt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, xl = (e, t) => {
  const n = {};
  for (const s in e)
    (!xn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function vl(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return s ? Vs(s, o, h) : !!o;
    if (f & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const v = u[d];
        if (ni(o, s, v) && !En(h, v))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Vs(s, o, h) : !0 : !!o;
  return !1;
}
function Vs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (ni(t, e, i) && !En(n, i))
      return !0;
  }
  return !1;
}
function ni(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && Z(s) && Z(r) ? !wt(s, r) : s !== r;
}
function si({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const ri = {}, ii = () => Object.create(ri), oi = (e) => Object.getPrototypeOf(e) === ri;
function Cl(e, t, n, s = !1) {
  const r = {}, i = ii();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), li(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ To(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Sl(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ Y(r), [f] = e.propsOptions;
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
        if (En(e.emitsOptions, v))
          continue;
        const w = t[v];
        if (f)
          if (X(i, v))
            w !== i[v] && (i[v] = w, h = !0);
          else {
            const W = Ae(v);
            r[W] = Qn(
              f,
              l,
              W,
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
    li(e, t, r, i) && (h = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !X(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = tt(d)) === d || !X(t, u))) && (f ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = Qn(
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
  h && We(e.attrs, "set", "");
}
function li(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (lt(f))
        continue;
      const h = t[f];
      let u;
      r && X(r, u = Ae(f)) ? !i || !i.includes(u) ? n[u] = h : (l || (l = {}))[u] = h : En(e.emitsOptions, f) || (!(f in s) || h !== s[f]) && (s[f] = h, o = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ Y(n), h = l || ee;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = Qn(
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
function Qn(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = X(o, "default");
    if (l && s === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && j(f)) {
        const { propsDefaults: h } = r;
        if (n in h)
          s = h[n];
        else {
          const u = Zt(r);
          s = h[n] = f.call(
            null,
            t
          ), u();
        }
      } else
        s = f;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === tt(n)) && (s = !0));
  }
  return s;
}
const Tl = /* @__PURE__ */ new WeakMap();
function ci(e, t, n = !1) {
  const s = n ? Tl : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!j(e)) {
    const u = (d) => {
      f = !0;
      const [v, w] = ci(d, t, !0);
      ce(o, v), w && l.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !f)
    return Z(e) && s.set(e, _t), _t;
  if (D(i))
    for (let u = 0; u < i.length; u++) {
      const d = Ae(i[u]);
      js(d) && (o[d] = ee);
    }
  else if (i)
    for (const u in i) {
      const d = Ae(u);
      if (js(d)) {
        const v = i[u], w = o[d] = D(v) || j(v) ? { type: v } : ce({}, v), W = w.type;
        let L = !1, Q = !0;
        if (D(W))
          for (let q = 0; q < W.length; ++q) {
            const B = W[q], g = j(B) && B.name;
            if (g === "Boolean") {
              L = !0;
              break;
            } else g === "String" && (Q = !1);
          }
        else
          L = j(W) && W.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = L, w[
          1
          /* shouldCastTrue */
        ] = Q, (L || X(w, "default")) && l.push(d);
      }
    }
  const h = [o, l];
  return Z(e) && s.set(e, h), h;
}
function js(e) {
  return e[0] !== "$" && !lt(e);
}
const _s = (e) => e === "_" || e === "_ctx" || e === "$stable", bs = (e) => D(e) ? e.map(xe) : [xe(e)], El = (e, t, n) => {
  if (t._n)
    return t;
  const s = $o((...r) => bs(t(...r)), n);
  return s._c = !1, s;
}, fi = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (_s(r)) continue;
    const i = e[r];
    if (j(i))
      t[r] = El(r, i, s);
    else if (i != null) {
      const o = bs(i);
      t[r] = () => o;
    }
  }
}, ui = (e, t) => {
  const n = bs(t);
  e.slots.default = () => n;
}, ai = (e, t, n) => {
  for (const s in t)
    (n || !_s(s)) && (e[s] = t[s]);
}, wl = (e, t, n) => {
  const s = e.slots = ii();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (ai(s, t, n), n && br(s, "_", r, !0)) : fi(t, s);
  } else t && ui(e, t);
}, Al = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = ee;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : ai(r, t, n) : (i = !t.$stable, fi(t, r)), o = t;
  } else t && (ui(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !_s(l) && o[l] == null && delete r[l];
}, me = bi;
function Ml(e) {
  return hi(e);
}
function Ol(e) {
  return hi(e, Xo);
}
function hi(e, t) {
  const n = Cn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: h,
    setElementText: u,
    parentNode: d,
    nextSibling: v,
    setScopeId: w = $e,
    insertStaticContent: W
  } = e, L = (c, a, p, x = null, _ = null, b = null, E = void 0, T = null, C = !!a.dynamicChildren) => {
    if (c === a)
      return;
    c && !mt(c, a) && (x = en(c), Re(c, _, b, !0), c = null), a.patchFlag === -2 && (C = !1, a.dynamicChildren = null);
    const { type: y, ref: N, shapeFlag: A } = a;
    switch (y) {
      case ut:
        Q(c, a, p, x);
        break;
      case je:
        q(c, a, p, x);
        break;
      case Ht:
        c == null && B(a, p, x, E);
        break;
      case ye:
        S(
          c,
          a,
          p,
          x,
          _,
          b,
          E,
          T,
          C
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
          T,
          C
        ) : A & 6 ? V(
          c,
          a,
          p,
          x,
          _,
          b,
          E,
          T,
          C
        ) : (A & 64 || A & 128) && y.process(
          c,
          a,
          p,
          x,
          _,
          b,
          E,
          T,
          C,
          ht
        );
    }
    N != null && _ ? xt(N, c && c.ref, b, a || c, !a) : N == null && c && c.ref != null && xt(c.ref, null, b, c, !0);
  }, Q = (c, a, p, x) => {
    if (c == null)
      s(
        a.el = l(a.children),
        p,
        x
      );
    else {
      const _ = a.el = c.el;
      a.children !== c.children && h(_, a.children);
    }
  }, q = (c, a, p, x) => {
    c == null ? s(
      a.el = f(a.children || ""),
      p,
      x
    ) : a.el = c.el;
  }, B = (c, a, p, x) => {
    [c.el, c.anchor] = W(
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
      _ = v(c), s(c, p, x), c = _;
    s(a, p, x);
  }, m = ({ el: c, anchor: a }) => {
    let p;
    for (; c && c !== a; )
      p = v(c), r(c), c = p;
    r(a);
  }, M = (c, a, p, x, _, b, E, T, C) => {
    if (a.type === "svg" ? E = "svg" : a.type === "math" && (E = "mathml"), c == null)
      $(
        a,
        p,
        x,
        _,
        b,
        E,
        T,
        C
      );
    else {
      const y = c.el && c.el._isVueCE ? c.el : null;
      try {
        y && y._beginPatch(), O(
          c,
          a,
          _,
          b,
          E,
          T,
          C
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, $ = (c, a, p, x, _, b, E, T) => {
    let C, y;
    const { props: N, shapeFlag: A, transition: F, dirs: H } = c;
    if (C = c.el = o(
      c.type,
      b,
      N && N.is,
      N
    ), A & 8 ? u(C, c.children) : A & 16 && k(
      c.children,
      C,
      null,
      x,
      _,
      $n(c, b),
      E,
      T
    ), H && De(c, null, x, "created"), K(C, c, c.scopeId, E, x), N) {
      for (const z in N)
        z !== "value" && !lt(z) && i(C, z, null, N[z], b, x);
      "value" in N && i(C, "value", null, N.value, b), (y = N.onVnodeBeforeMount) && Te(y, x, c);
    }
    H && De(c, null, x, "beforeMount");
    const J = di(_, F);
    J && F.beforeEnter(C), s(C, a, p), ((y = N && N.onVnodeMounted) || J || H) && me(() => {
      y && Te(y, x, c), J && F.enter(C), H && De(c, null, x, "mounted");
    }, _);
  }, K = (c, a, p, x, _) => {
    if (p && w(c, p), x)
      for (let b = 0; b < x.length; b++)
        w(c, x[b]);
    if (_) {
      let b = _.subTree;
      if (a === b || _i(b.type) && (b.ssContent === a || b.ssFallback === a)) {
        const E = _.vnode;
        K(
          c,
          E,
          E.scopeId,
          E.slotScopeIds,
          _.parent
        );
      }
    }
  }, k = (c, a, p, x, _, b, E, T, C = 0) => {
    for (let y = C; y < c.length; y++) {
      const N = c[y] = T ? Ue(c[y]) : xe(c[y]);
      L(
        null,
        N,
        a,
        p,
        x,
        _,
        b,
        E,
        T
      );
    }
  }, O = (c, a, p, x, _, b, E) => {
    const T = a.el = c.el;
    let { patchFlag: C, dynamicChildren: y, dirs: N } = a;
    C |= c.patchFlag & 16;
    const A = c.props || ee, F = a.props || ee;
    let H;
    if (p && st(p, !1), (H = F.onVnodeBeforeUpdate) && Te(H, p, a, c), N && De(a, c, p, "beforeUpdate"), p && st(p, !0), (A.innerHTML && F.innerHTML == null || A.textContent && F.textContent == null) && u(T, ""), y ? P(
      c.dynamicChildren,
      y,
      T,
      p,
      x,
      $n(a, _),
      b
    ) : E || R(
      c,
      a,
      T,
      null,
      p,
      x,
      $n(a, _),
      b,
      !1
    ), C > 0) {
      if (C & 16)
        U(T, A, F, p, _);
      else if (C & 2 && A.class !== F.class && i(T, "class", null, F.class, _), C & 4 && i(T, "style", A.style, F.style, _), C & 8) {
        const J = a.dynamicProps;
        for (let z = 0; z < J.length; z++) {
          const te = J[z], le = A[te], fe = F[te];
          (fe !== le || te === "value") && i(T, te, le, fe, _, p);
        }
      }
      C & 1 && c.children !== a.children && u(T, a.children);
    } else !E && y == null && U(T, A, F, p, _);
    ((H = F.onVnodeUpdated) || N) && me(() => {
      H && Te(H, p, a, c), N && De(a, c, p, "updated");
    }, x);
  }, P = (c, a, p, x, _, b, E) => {
    for (let T = 0; T < a.length; T++) {
      const C = c[T], y = a[T], N = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !mt(C, y) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? d(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      L(
        C,
        y,
        N,
        null,
        x,
        _,
        b,
        E,
        !0
      );
    }
  }, U = (c, a, p, x, _) => {
    if (a !== p) {
      if (a !== ee)
        for (const b in a)
          !lt(b) && !(b in p) && i(
            c,
            b,
            a[b],
            null,
            _,
            x
          );
      for (const b in p) {
        if (lt(b)) continue;
        const E = p[b], T = a[b];
        E !== T && b !== "value" && i(c, b, T, E, _, x);
      }
      "value" in p && i(c, "value", a.value, p.value, _);
    }
  }, S = (c, a, p, x, _, b, E, T, C) => {
    const y = a.el = c ? c.el : l(""), N = a.anchor = c ? c.anchor : l("");
    let { patchFlag: A, dynamicChildren: F, slotScopeIds: H } = a;
    H && (T = T ? T.concat(H) : H), c == null ? (s(y, p, x), s(N, p, x), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      a.children || [],
      p,
      N,
      _,
      b,
      E,
      T,
      C
    )) : A > 0 && A & 64 && F && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === F.length ? (P(
      c.dynamicChildren,
      F,
      p,
      _,
      b,
      E,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (a.key != null || _ && a === _.subTree) && pi(
      c,
      a,
      !0
      /* shallow */
    )) : R(
      c,
      a,
      p,
      N,
      _,
      b,
      E,
      T,
      C
    );
  }, V = (c, a, p, x, _, b, E, T, C) => {
    a.slotScopeIds = T, c == null ? a.shapeFlag & 512 ? _.ctx.activate(
      a,
      p,
      x,
      E,
      C
    ) : se(
      a,
      p,
      x,
      _,
      b,
      E,
      C
    ) : oe(c, a, C);
  }, se = (c, a, p, x, _, b, E) => {
    const T = c.component = Si(
      c,
      x,
      _
    );
    if (Gr(c) && (T.ctx.renderer = ht), wi(T, !1, E), T.asyncDep) {
      if (_ && _.registerDep(T, I, E), !c.el) {
        const C = T.subTree = Ce(je);
        q(null, C, a, p), c.placeholder = C.el;
      }
    } else
      I(
        T,
        c,
        a,
        p,
        _,
        b,
        E
      );
  }, oe = (c, a, p) => {
    const x = a.component = c.component;
    if (vl(c, a, p))
      if (x.asyncDep && !x.asyncResolved) {
        G(x, a, p);
        return;
      } else
        x.next = a, x.update();
    else
      a.el = c.el, x.vnode = a;
  }, I = (c, a, p, x, _, b, E) => {
    const T = () => {
      if (c.isMounted) {
        let { next: A, bu: F, u: H, parent: J, vnode: z } = c;
        {
          const _e = gi(c);
          if (_e) {
            A && (A.el = z.el, G(c, A, E)), _e.asyncDep.then(() => {
              me(() => {
                c.isUnmounted || y();
              }, _);
            });
            return;
          }
        }
        let te = A, le;
        st(c, !1), A ? (A.el = z.el, G(c, A, E)) : A = z, F && cn(F), (le = A.props && A.props.onVnodeBeforeUpdate) && Te(le, J, A, z), st(c, !0);
        const fe = un(c), we = c.subTree;
        c.subTree = fe, L(
          we,
          fe,
          // parent may have changed if it's in a teleport
          d(we.el),
          // anchor may have changed if it's in a fragment
          en(we),
          c,
          _,
          b
        ), A.el = fe.el, te === null && si(c, fe.el), H && me(H, _), (le = A.props && A.props.onVnodeUpdated) && me(
          () => Te(le, J, A, z),
          _
        );
      } else {
        let A;
        const { el: F, props: H } = a, { bm: J, m: z, parent: te, root: le, type: fe } = c, we = vt(a);
        if (st(c, !1), J && cn(J), !we && (A = H && H.onVnodeBeforeMount) && Te(A, te, a), st(c, !0), F && On) {
          const _e = () => {
            c.subTree = un(c), On(
              F,
              c.subTree,
              c,
              _,
              null
            );
          };
          we && fe.__asyncHydrate ? fe.__asyncHydrate(
            F,
            c,
            _e
          ) : _e();
        } else {
          le.ce && le.ce._hasShadowRoot() && le.ce._injectChildStyle(
            fe,
            c.parent ? c.parent.type : void 0
          );
          const _e = c.subTree = un(c);
          L(
            null,
            _e,
            p,
            x,
            c,
            _,
            b
          ), a.el = _e.el;
        }
        if (z && me(z, _), !we && (A = H && H.onVnodeMounted)) {
          const _e = a;
          me(
            () => Te(A, te, _e),
            _
          );
        }
        (a.shapeFlag & 256 || te && vt(te.vnode) && te.vnode.shapeFlag & 256) && c.a && me(c.a, _), c.isMounted = !0, a = p = x = null;
      }
    };
    c.scope.on();
    const C = c.effect = new Sr(T);
    c.scope.off();
    const y = c.update = C.run.bind(C), N = c.job = C.runIfDirty.bind(C);
    N.i = c, N.id = c.uid, C.scheduler = () => ms(N), st(c, !0), y();
  }, G = (c, a, p) => {
    a.component = c;
    const x = c.vnode.props;
    c.vnode = a, c.next = null, Sl(c, a.props, x, p), Al(c, a.children, p), Ge(), Ps(c), qe();
  }, R = (c, a, p, x, _, b, E, T, C = !1) => {
    const y = c && c.children, N = c ? c.shapeFlag : 0, A = a.children, { patchFlag: F, shapeFlag: H } = a;
    if (F > 0) {
      if (F & 128) {
        zt(
          y,
          A,
          p,
          x,
          _,
          b,
          E,
          T,
          C
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
          T,
          C
        );
        return;
      }
    }
    H & 8 ? (N & 16 && At(y, _, b), A !== y && u(p, A)) : N & 16 ? H & 16 ? zt(
      y,
      A,
      p,
      x,
      _,
      b,
      E,
      T,
      C
    ) : At(y, _, b, !0) : (N & 8 && u(p, ""), H & 16 && k(
      A,
      p,
      x,
      _,
      b,
      E,
      T,
      C
    ));
  }, re = (c, a, p, x, _, b, E, T, C) => {
    c = c || _t, a = a || _t;
    const y = c.length, N = a.length, A = Math.min(y, N);
    let F;
    for (F = 0; F < A; F++) {
      const H = a[F] = C ? Ue(a[F]) : xe(a[F]);
      L(
        c[F],
        H,
        p,
        null,
        _,
        b,
        E,
        T,
        C
      );
    }
    y > N ? At(
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
      T,
      C,
      A
    );
  }, zt = (c, a, p, x, _, b, E, T, C) => {
    let y = 0;
    const N = a.length;
    let A = c.length - 1, F = N - 1;
    for (; y <= A && y <= F; ) {
      const H = c[y], J = a[y] = C ? Ue(a[y]) : xe(a[y]);
      if (mt(H, J))
        L(
          H,
          J,
          p,
          null,
          _,
          b,
          E,
          T,
          C
        );
      else
        break;
      y++;
    }
    for (; y <= A && y <= F; ) {
      const H = c[A], J = a[F] = C ? Ue(a[F]) : xe(a[F]);
      if (mt(H, J))
        L(
          H,
          J,
          p,
          null,
          _,
          b,
          E,
          T,
          C
        );
      else
        break;
      A--, F--;
    }
    if (y > A) {
      if (y <= F) {
        const H = F + 1, J = H < N ? a[H].el : x;
        for (; y <= F; )
          L(
            null,
            a[y] = C ? Ue(a[y]) : xe(a[y]),
            p,
            J,
            _,
            b,
            E,
            T,
            C
          ), y++;
      }
    } else if (y > F)
      for (; y <= A; )
        Re(c[y], _, b, !0), y++;
    else {
      const H = y, J = y, z = /* @__PURE__ */ new Map();
      for (y = J; y <= F; y++) {
        const be = a[y] = C ? Ue(a[y]) : xe(a[y]);
        be.key != null && z.set(be.key, y);
      }
      let te, le = 0;
      const fe = F - J + 1;
      let we = !1, _e = 0;
      const Mt = new Array(fe);
      for (y = 0; y < fe; y++) Mt[y] = 0;
      for (y = H; y <= A; y++) {
        const be = c[y];
        if (le >= fe) {
          Re(be, _, b, !0);
          continue;
        }
        let Fe;
        if (be.key != null)
          Fe = z.get(be.key);
        else
          for (te = J; te <= F; te++)
            if (Mt[te - J] === 0 && mt(be, a[te])) {
              Fe = te;
              break;
            }
        Fe === void 0 ? Re(be, _, b, !0) : (Mt[Fe - J] = y + 1, Fe >= _e ? _e = Fe : we = !0, L(
          be,
          a[Fe],
          p,
          null,
          _,
          b,
          E,
          T,
          C
        ), le++);
      }
      const Ss = we ? Pl(Mt) : _t;
      for (te = Ss.length - 1, y = fe - 1; y >= 0; y--) {
        const be = J + y, Fe = a[be], Ts = a[be + 1], Es = be + 1 < N ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ts.el || mi(Ts)
        ) : x;
        Mt[y] === 0 ? L(
          null,
          Fe,
          p,
          Es,
          _,
          b,
          E,
          T,
          C
        ) : we && (te < 0 || y !== Ss[te] ? nt(Fe, p, Es, 2) : te--);
      }
    }
  }, nt = (c, a, p, x, _ = null) => {
    const { el: b, type: E, transition: T, children: C, shapeFlag: y } = c;
    if (y & 6) {
      nt(c.component.subTree, a, p, x);
      return;
    }
    if (y & 128) {
      c.suspense.move(a, p, x);
      return;
    }
    if (y & 64) {
      E.move(c, a, p, ht);
      return;
    }
    if (E === ye) {
      s(b, a, p);
      for (let A = 0; A < C.length; A++)
        nt(C[A], a, p, x);
      s(c.anchor, a, p);
      return;
    }
    if (E === Ht) {
      g(c, a, p);
      return;
    }
    if (x !== 2 && y & 1 && T)
      if (x === 0)
        T.beforeEnter(b), s(b, a, p), me(() => T.enter(b), _);
      else {
        const { leave: A, delayLeave: F, afterLeave: H } = T, J = () => {
          c.ctx.isUnmounted ? r(b) : s(b, a, p);
        }, z = () => {
          b._isLeaving && b[Qe](
            !0
            /* cancelled */
          ), A(b, () => {
            J(), H && H();
          });
        };
        F ? F(b, J, z) : z();
      }
    else
      s(b, a, p);
  }, Re = (c, a, p, x = !1, _ = !1) => {
    const {
      type: b,
      props: E,
      ref: T,
      children: C,
      dynamicChildren: y,
      shapeFlag: N,
      patchFlag: A,
      dirs: F,
      cacheIndex: H,
      memo: J
    } = c;
    if (A === -2 && (_ = !1), T != null && (Ge(), xt(T, null, p, c, !0), qe()), H != null && (a.renderCache[H] = void 0), N & 256) {
      a.ctx.deactivate(c);
      return;
    }
    const z = N & 1 && F, te = !vt(c);
    let le;
    if (te && (le = E && E.onVnodeBeforeUnmount) && Te(le, a, c), N & 6)
      Vi(c.component, p, x);
    else {
      if (N & 128) {
        c.suspense.unmount(p, x);
        return;
      }
      z && De(c, null, a, "beforeUnmount"), N & 64 ? c.type.remove(
        c,
        a,
        p,
        ht,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== ye || A > 0 && A & 64) ? At(
        y,
        a,
        p,
        !1,
        !0
      ) : (b === ye && A & 384 || !_ && N & 16) && At(C, a, p), x && vs(c);
    }
    const fe = J != null && H == null;
    (te && (le = E && E.onVnodeUnmounted) || z || fe) && me(() => {
      le && Te(le, a, c), z && De(c, null, a, "unmounted"), fe && (c.el = null);
    }, p);
  }, vs = (c) => {
    const { type: a, el: p, anchor: x, transition: _ } = c;
    if (a === ye) {
      $i(p, x);
      return;
    }
    if (a === Ht) {
      m(c);
      return;
    }
    const b = () => {
      r(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: E, delayLeave: T } = _, C = () => E(p, b);
      T ? T(c.el, b, C) : C();
    } else
      b();
  }, $i = (c, a) => {
    let p;
    for (; c !== a; )
      p = v(c), r(c), c = p;
    r(a);
  }, Vi = (c, a, p) => {
    const { bum: x, scope: _, job: b, subTree: E, um: T, m: C, a: y } = c;
    Bs(C), Bs(y), x && cn(x), _.stop(), b && (b.flags |= 8, Re(E, c, a, p)), T && me(T, a), me(() => {
      c.isUnmounted = !0;
    }, a);
  }, At = (c, a, p, x = !1, _ = !1, b = 0) => {
    for (let E = b; E < c.length; E++)
      Re(c[E], a, p, x, _);
  }, en = (c) => {
    if (c.shapeFlag & 6)
      return en(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const a = v(c.anchor || c.el), p = a && a[Uo];
    return p ? v(p) : a;
  };
  let An = !1;
  const Cs = (c, a, p) => {
    let x;
    c == null ? a._vnode && (Re(a._vnode, null, null, !0), x = a._vnode.component) : L(
      a._vnode || null,
      c,
      a,
      null,
      null,
      null,
      p
    ), a._vnode = c, An || (An = !0, Ps(x), pn(), An = !1);
  }, ht = {
    p: L,
    um: Re,
    m: nt,
    r: vs,
    mt: se,
    mc: k,
    pc: R,
    pbc: P,
    n: en,
    o: e
  };
  let Mn, On;
  return t && ([Mn, On] = t(
    ht
  )), {
    render: Cs,
    hydrate: Mn,
    createApp: gl(Cs, Mn)
  };
}
function $n({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function st({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function di(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function pi(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (D(s) && D(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Ue(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && pi(o, l)), l.type === ut && (l.patchFlag === -1 && (l = r[i] = Ue(l)), l.el = o.el), l.type === je && !l.el && (l.el = o.el);
    }
}
function Pl(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const f = e.length;
  for (s = 0; s < f; s++) {
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
function gi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : gi(t);
}
function Bs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function mi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? mi(t.subTree) : null;
}
const _i = (e) => e.__isSuspense;
function bi(e, t) {
  t && t.pendingBranch ? D(e) ? t.effects.push(...e) : t.effects.push(e) : Ho(e);
}
const ye = /* @__PURE__ */ Symbol.for("v-fgt"), ut = /* @__PURE__ */ Symbol.for("v-txt"), je = /* @__PURE__ */ Symbol.for("v-cmt"), Ht = /* @__PURE__ */ Symbol.for("v-stc"), $t = [];
let ve = null;
function Rl(e = !1) {
  $t.push(ve = e ? null : []);
}
function Fl() {
  $t.pop(), ve = $t[$t.length - 1] || null;
}
let Gt = 1;
function Ks(e, t = !1) {
  Gt += e, e < 0 && ve && t && (ve.hasOnce = !0);
}
function yi(e) {
  return e.dynamicChildren = Gt > 0 ? ve || _t : null, Fl(), Gt > 0 && ve && ve.push(e), e;
}
function kc(e, t, n, s, r, i) {
  return yi(
    vi(
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
function Il(e, t, n, s, r) {
  return yi(
    Ce(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function ys(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function mt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const xi = ({ key: e }) => e ?? null, an = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || /* @__PURE__ */ he(e) || j(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function vi(e, t = null, n = null, s = 0, r = null, i = e === ye ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xi(t),
    ref: t && an(t),
    scopeId: Br,
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
    ctx: Ee
  };
  return l ? (xs(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= ie(n) ? 8 : 16), Gt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ve && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ve.push(f), f;
}
const Ce = Nl;
function Nl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === ll) && (e = je), ys(e)) {
    const l = at(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && xs(l, n), Gt > 0 && !i && ve && (l.shapeFlag & 6 ? ve[ve.indexOf(e)] = l : ve.push(l)), l.patchFlag = -2, l;
  }
  if (Kl(e) && (e = e.__vccOpts), t) {
    t = Dl(t);
    let { class: l, style: f } = t;
    l && !ie(l) && (t.class = is(l)), Z(f) && (/* @__PURE__ */ gs(f) && !D(f) && (f = ce({}, f)), t.style = rs(f));
  }
  const o = ie(e) ? 1 : _i(e) ? 128 : Wo(e) ? 64 : Z(e) ? 4 : j(e) ? 2 : 0;
  return vi(
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
function Dl(e) {
  return e ? /* @__PURE__ */ gs(e) || oi(e) ? ce({}, e) : e : null;
}
function at(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, h = t ? Ll(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && xi(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? D(i) ? i.concat(an(t)) : [i, an(t)] : an(t)
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
    patchFlag: t && e.type !== ye ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && at(e.ssContent),
    ssFallback: e.ssFallback && at(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && s && kt(
    u,
    f.clone(u)
  ), u;
}
function Ci(e = " ", t = 0) {
  return Ce(ut, null, e, t);
}
function Gc(e, t) {
  const n = Ce(Ht, null, e);
  return n.staticCount = t, n;
}
function qc(e = "", t = !1) {
  return t ? (Rl(), Il(je, null, e)) : Ce(je, null, e);
}
function xe(e) {
  return e == null || typeof e == "boolean" ? Ce(je) : D(e) ? Ce(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ys(e) ? Ue(e) : Ce(ut, null, String(e));
}
function Ue(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : at(e);
}
function xs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (D(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), xs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !oi(t) ? t._ctx = Ee : r === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else j(t) ? (t = { default: t, _ctx: Ee }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Ci(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ll(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = is([t.class, s.class]));
      else if (r === "style")
        t.style = rs([t.style, s.style]);
      else if (Jt(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(D(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !xn(r) && (t[r] = o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Te(e, t, n, s = null) {
  Pe(e, t, 7, [
    n,
    s
  ]);
}
const Hl = ei();
let $l = 0;
function Si(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Hl, i = {
    uid: $l++,
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
    scope: new so(
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
    propsOptions: ci(s, r),
    emitsOptions: ti(s, r),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = _l.bind(null, i), e.ce && e.ce(i), i;
}
let ge = null;
const Ti = () => ge || Ee;
let _n, Zn;
{
  const e = Cn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  _n = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ge = n
  ), Zn = t(
    "__VUE_SSR_SETTERS__",
    (n) => qt = n
  );
}
const Zt = (e) => {
  const t = ge;
  return _n(e), e.scope.on(), () => {
    e.scope.off(), _n(t);
  };
}, Us = () => {
  ge && ge.scope.off(), _n(null);
};
function Ei(e) {
  return e.vnode.shapeFlag & 4;
}
let qt = !1;
function wi(e, t = !1, n = !1) {
  t && Zn(t);
  const { props: s, children: r } = e.vnode, i = Ei(e);
  Cl(e, s, i, t), wl(e, r, n || t);
  const o = i ? Vl(e, t) : void 0;
  return t && Zn(!1), o;
}
function Vl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, cl);
  const { setup: s } = n;
  if (s) {
    Ge();
    const r = e.setupContext = s.length > 1 ? Bl(e) : null, i = Zt(e), o = Qt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = pr(o);
    if (qe(), i(), (l || e.sp) && !vt(e) && kr(e), l) {
      if (o.then(Us, Us), t)
        return o.then((f) => {
          Ws(e, f);
        }).catch((f) => {
          Sn(f, e, 0);
        });
      e.asyncDep = o;
    } else
      Ws(e, o);
  } else
    Ai(e);
}
function Ws(e, t, n) {
  j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) && (e.setupState = Hr(t)), Ai(e);
}
function Ai(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || $e);
  {
    const r = Zt(e);
    Ge();
    try {
      fl(e);
    } finally {
      qe(), r();
    }
  }
}
const jl = {
  get(e, t) {
    return ae(e, "get", ""), e[t];
  }
};
function Bl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, jl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function wn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Hr(Eo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Lt)
        return Lt[n](e);
    },
    has(t, n) {
      return n in t || n in Lt;
    }
  })) : e.proxy;
}
function Kl(e) {
  return j(e) && "__vccOpts" in e;
}
const Ul = (e, t) => /* @__PURE__ */ Ro(e, t, qt), Wl = "3.5.34", kl = {
  createComponentInstance: Si,
  setupComponent: wi,
  renderComponentRoot: un,
  setCurrentRenderingInstance: Wt,
  isVNode: ys,
  normalizeVNode: xe
}, Jc = kl;
let zn;
const ks = typeof window < "u" && window.trustedTypes;
if (ks)
  try {
    zn = /* @__PURE__ */ ks.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Mi = zn ? (e) => zn.createHTML(e) : (e) => e, Gl = "http://www.w3.org/2000/svg", ql = "http://www.w3.org/1998/Math/MathML", Ke = typeof document < "u" ? document : null, Gs = Ke && /* @__PURE__ */ Ke.createElement("template"), Jl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Ke.createElementNS(Gl, e) : t === "mathml" ? Ke.createElementNS(ql, e) : n ? Ke.createElement(e, { is: n }) : Ke.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Ke.createTextNode(e),
  createComment: (e) => Ke.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ke.querySelector(e),
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
      Gs.innerHTML = Mi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Gs.content;
      if (s === "svg" || s === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
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
}, Xe = "transition", Rt = "animation", Tt = /* @__PURE__ */ Symbol("_vtc"), Oi = {
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
}, Yl = /* @__PURE__ */ ce(
  {},
  Go,
  Oi
), rt = (e, t = []) => {
  D(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, qs = (e) => e ? D(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Xl(e) {
  const t = {};
  for (const S in e)
    S in Oi || (t[S] = e[S]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: f = i,
    appearActiveClass: h = o,
    appearToClass: u = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: v = `${n}-leave-active`,
    leaveToClass: w = `${n}-leave-to`
  } = e, W = Ql(r), L = W && W[0], Q = W && W[1], {
    onBeforeEnter: q,
    onEnter: B,
    onEnterCancelled: g,
    onLeave: m,
    onLeaveCancelled: M,
    onBeforeAppear: $ = q,
    onAppear: K = B,
    onAppearCancelled: k = g
  } = t, O = (S, V, se, oe) => {
    S._enterCancelled = oe, Ze(S, V ? u : l), Ze(S, V ? h : o), se && se();
  }, P = (S, V) => {
    S._isLeaving = !1, Ze(S, d), Ze(S, w), Ze(S, v), V && V();
  }, U = (S) => (V, se) => {
    const oe = S ? K : B, I = () => O(V, S, se);
    rt(oe, [V, I]), Js(() => {
      Ze(V, S ? f : i), Ie(V, S ? u : l), qs(oe) || Ys(V, s, L, I);
    });
  };
  return ce(t, {
    onBeforeEnter(S) {
      rt(q, [S]), Ie(S, i), Ie(S, o);
    },
    onBeforeAppear(S) {
      rt($, [S]), Ie(S, f), Ie(S, h);
    },
    onEnter: U(!1),
    onAppear: U(!0),
    onLeave(S, V) {
      S._isLeaving = !0;
      const se = () => P(S, V);
      Ie(S, d), S._enterCancelled ? (Ie(S, v), es(S)) : (es(S), Ie(S, v)), Js(() => {
        S._isLeaving && (Ze(S, d), Ie(S, w), qs(m) || Ys(S, s, Q, se));
      }), rt(m, [S, se]);
    },
    onEnterCancelled(S) {
      O(S, !1, void 0, !0), rt(g, [S]);
    },
    onAppearCancelled(S) {
      O(S, !0, void 0, !0), rt(k, [S]);
    },
    onLeaveCancelled(S) {
      P(S), rt(M, [S]);
    }
  });
}
function Ql(e) {
  if (e == null)
    return null;
  if (Z(e))
    return [Vn(e.enter), Vn(e.leave)];
  {
    const t = Vn(e);
    return [t, t];
  }
}
function Vn(e) {
  return Wi(e);
}
function Ie(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Tt] || (e[Tt] = /* @__PURE__ */ new Set())).add(t);
}
function Ze(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Tt];
  n && (n.delete(t), n.size || (e[Tt] = void 0));
}
function Js(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Zl = 0;
function Ys(e, t, n, s) {
  const r = e._endId = ++Zl, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: f } = Pi(e, t);
  if (!o)
    return s();
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
function Pi(e, t) {
  const n = window.getComputedStyle(e), s = (W) => (n[W] || "").split(", "), r = s(`${Xe}Delay`), i = s(`${Xe}Duration`), o = Xs(r, i), l = s(`${Rt}Delay`), f = s(`${Rt}Duration`), h = Xs(l, f);
  let u = null, d = 0, v = 0;
  t === Xe ? o > 0 && (u = Xe, d = o, v = i.length) : t === Rt ? h > 0 && (u = Rt, d = h, v = f.length) : (d = Math.max(o, h), u = d > 0 ? o > h ? Xe : Rt : null, v = u ? u === Xe ? i.length : f.length : 0);
  const w = u === Xe && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Xe}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: v,
    hasTransform: w
  };
}
function Xs(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Qs(n) + Qs(e[s])));
}
function Qs(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function es(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function zl(e, t, n) {
  const s = e[Tt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Zs = /* @__PURE__ */ Symbol("_vod"), ec = /* @__PURE__ */ Symbol("_vsh"), tc = /* @__PURE__ */ Symbol(""), nc = /(?:^|;)\s*display\s*:/;
function sc(e, t, n) {
  const s = e.style, r = ie(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ie(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && It(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && It(s, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? ic(
        e,
        o,
        !ie(t) && t ? t[o] : void 0,
        l
      ) || It(s, o, l) : It(s, o, "");
    }
  } else if (r) {
    if (t !== n) {
      const o = s[tc];
      o && (n += ";" + o), s.cssText = n, i = nc.test(n);
    }
  } else t && e.removeAttribute("style");
  Zs in e && (e[Zs] = i ? s.display : "", e[ec] && (s.display = "none"));
}
const zs = /\s*!important$/;
function It(e, t, n) {
  if (D(n))
    n.forEach((s) => It(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = rc(e, t);
    zs.test(n) ? e.setProperty(
      tt(s),
      n.replace(zs, ""),
      "important"
    ) : e[s] = n;
  }
}
const er = ["Webkit", "Moz", "ms"], jn = {};
function rc(e, t) {
  const n = jn[t];
  if (n)
    return n;
  let s = Ae(t);
  if (s !== "filter" && s in e)
    return jn[t] = s;
  s = _r(s);
  for (let r = 0; r < er.length; r++) {
    const i = er[r] + s;
    if (i in e)
      return jn[t] = i;
  }
  return t;
}
function ic(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ie(s) && n === s;
}
const tr = "http://www.w3.org/1999/xlink";
function nr(e, t, n, s, r, i = Qi(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(tr, t.slice(6, t.length)) : e.setAttributeNS(tr, t, n) : n == null || i && !xr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ve(n) ? String(n) : n
  );
}
function sr(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Mi(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = xr(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function ot(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function oc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const rr = /* @__PURE__ */ Symbol("_vei");
function lc(e, t, n, s, r = null) {
  const i = e[rr] || (e[rr] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, f] = cc(t);
    if (s) {
      const h = i[t] = ac(
        s,
        r
      );
      ot(e, l, h, f);
    } else o && (oc(e, l, o, f), i[t] = void 0);
  }
}
const ir = /(?:Once|Passive|Capture)$/;
function cc(e) {
  let t;
  if (ir.test(e)) {
    t = {};
    let s;
    for (; s = e.match(ir); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : tt(e.slice(2)), t];
}
let Bn = 0;
const fc = /* @__PURE__ */ Promise.resolve(), uc = () => Bn || (fc.then(() => Bn = 0), Bn = Date.now());
function ac(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Pe(
      hc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = uc(), n;
}
function hc(e, t) {
  if (D(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const or = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dc = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? zl(e, s, o) : t === "style" ? sc(e, n, s) : Jt(t) ? xn(t) || lc(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : pc(e, t, s, o)) ? (sr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && nr(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (gc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ie(s))) ? sr(e, Ae(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), nr(e, t, s, o));
};
function pc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && or(t) && j(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return or(t) && ie(n) ? !1 : t in e;
}
function gc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ae(t);
  return Array.isArray(n) ? n.some((r) => Ae(r) === s) : Object.keys(n).some((r) => Ae(r) === s);
}
const Ri = /* @__PURE__ */ new WeakMap(), Fi = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ Symbol("_moveCb"), lr = /* @__PURE__ */ Symbol("_enterCb"), mc = (e) => (delete e.props.mode, e), _c = /* @__PURE__ */ mc({
  name: "TransitionGroup",
  props: /* @__PURE__ */ ce({}, Yl, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Ti(), s = ko();
    let r, i;
    return Yr(() => {
      if (!r.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!vc(
        r[0].el,
        n.vnode.el,
        o
      )) {
        r = [];
        return;
      }
      r.forEach(bc), r.forEach(yc);
      const l = r.filter(xc);
      es(n.vnode.el), l.forEach((f) => {
        const h = f.el, u = h.style;
        Ie(h, o), u.transform = u.webkitTransform = u.transitionDuration = "";
        const d = h[bn] = (v) => {
          v && v.target !== h || (!v || v.propertyName.endsWith("transform")) && (h.removeEventListener("transitionend", d), h[bn] = null, Ze(h, o));
        };
        h.addEventListener("transitionend", d);
      }), r = [];
    }), () => {
      const o = /* @__PURE__ */ Y(e), l = Xl(o);
      let f = o.tag || ye;
      if (r = [], i)
        for (let h = 0; h < i.length; h++) {
          const u = i[h];
          u.el && u.el instanceof Element && (r.push(u), kt(
            u,
            qn(
              u,
              l,
              s,
              n
            )
          ), Ri.set(u, Ii(u.el)));
        }
      i = t.default ? Wr(t.default()) : [];
      for (let h = 0; h < i.length; h++) {
        const u = i[h];
        u.key != null && kt(
          u,
          qn(u, l, s, n)
        );
      }
      return Ce(f, null, i);
    };
  }
}), Yc = _c;
function bc(e) {
  const t = e.el;
  t[bn] && t[bn](), t[lr] && t[lr]();
}
function yc(e) {
  Fi.set(e, Ii(e.el));
}
function xc(e) {
  const t = Ri.get(e), n = Fi.get(e), s = t.left - n.left, r = t.top - n.top;
  if (s || r) {
    const i = e.el, o = i.style, l = i.getBoundingClientRect();
    let f = 1, h = 1;
    return i.offsetWidth && (f = l.width / i.offsetWidth), i.offsetHeight && (h = l.height / i.offsetHeight), (!Number.isFinite(f) || f === 0) && (f = 1), (!Number.isFinite(h) || h === 0) && (h = 1), Math.abs(f - 1) < 0.01 && (f = 1), Math.abs(h - 1) < 0.01 && (h = 1), o.transform = o.webkitTransform = `translate(${s / f}px,${r / h}px)`, o.transitionDuration = "0s", e;
  }
}
function Ii(e) {
  const t = e.getBoundingClientRect();
  return {
    left: t.left,
    top: t.top
  };
}
function vc(e, t, n) {
  const s = e.cloneNode(), r = e[Tt];
  r && r.forEach((l) => {
    l.split(/\s+/).forEach((f) => f && s.classList.remove(f));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(s);
  const { hasTransform: o } = Pi(s);
  return i.removeChild(s), o;
}
const yn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return D(t) ? (n) => cn(t, n) : t;
};
function Cc(e) {
  e.target.composing = !0;
}
function cr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const St = /* @__PURE__ */ Symbol("_assign");
function fr(e, t, n) {
  return t && (e = e.trim()), n && (e = ss(e)), e;
}
const Sc = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[St] = yn(r);
    const i = s || r.props && r.props.type === "number";
    ot(e, t ? "change" : "input", (o) => {
      o.target.composing || e[St](fr(e.value, n, i));
    }), (n || i) && ot(e, "change", () => {
      e.value = fr(e.value, n, i);
    }), t || (ot(e, "compositionstart", Cc), ot(e, "compositionend", cr), ot(e, "change", cr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[St] = yn(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? ss(e.value) : e.value, f = t ?? "";
    if (l === f)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === f) || (e.value = f);
  }
}, Tc = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[St] = yn(n), ot(e, "change", () => {
      const s = e._modelValue, r = wc(e), i = e.checked, o = e[St];
      if (D(s)) {
        const l = os(s, r), f = l !== -1;
        if (i && !f)
          o(s.concat(r));
        else if (!i && f) {
          const h = [...s];
          h.splice(l, 1), o(h);
        }
      } else if (Yt(s)) {
        const l = new Set(s);
        i ? l.add(r) : l.delete(r), o(l);
      } else
        o(Ni(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ur,
  beforeUpdate(e, t, n) {
    e[St] = yn(n), ur(e, t, n);
  }
};
function ur(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let r;
  if (D(t))
    r = os(t, s.props.value) > -1;
  else if (Yt(t))
    r = t.has(s.props.value);
  else {
    if (t === n) return;
    r = wt(t, Ni(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
const Ec = {};
function wc(e) {
  return "_value" in e ? e._value : e.value;
}
function Ni(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
function Ac() {
  Sc.getSSRProps = ({ value: e }) => ({ value: e }), Ec.getSSRProps = ({ value: e }, t) => {
    if (t.props && wt(t.props.value, e))
      return { checked: !0 };
  }, Tc.getSSRProps = ({ value: e }, t) => {
    if (D(e)) {
      if (t.props && os(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (Yt(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const Mc = ["ctrl", "shift", "alt", "meta"], Oc = {
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
  exact: (e, t) => Mc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Xc = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = Oc[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, Di = /* @__PURE__ */ ce({ patchProp: dc }, Jl);
let Vt, ar = !1;
function Pc() {
  return Vt || (Vt = Ml(Di));
}
function Rc() {
  return Vt = ar ? Vt : Ol(Di), ar = !0, Vt;
}
const Qc = ((...e) => {
  const t = Pc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Hi(s);
    if (!r) return;
    const i = t._component;
    !j(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, Li(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
}), Zc = ((...e) => {
  const t = Rc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Hi(s);
    if (r)
      return n(r, !0, Li(r));
  }, t;
});
function Li(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Hi(e) {
  return ie(e) ? document.querySelector(e) : e;
}
let hr = !1;
const zc = () => {
  hr || (hr = !0, Ac());
};
export {
  ie as A,
  Nc as B,
  je as C,
  Et as D,
  Ll as E,
  ye as F,
  is as G,
  Bc as H,
  rs as I,
  Rl as J,
  Hc as K,
  ds as L,
  Kc as M,
  $e as N,
  jo as O,
  Jc as P,
  Fc as Q,
  no as R,
  Ht as S,
  ut as T,
  Tc as U,
  Sc as V,
  $o as W,
  Uc as X,
  Xc as Y,
  Yc as a,
  Qc as b,
  Ul as c,
  vi as d,
  Il as e,
  qc as f,
  kc as g,
  Zc as h,
  Gc as i,
  Ci as j,
  Ce as k,
  Wc as l,
  Vc as m,
  jc as n,
  Cn as o,
  xr as p,
  zc as q,
  D as r,
  Dc as s,
  j as t,
  Z as u,
  Jt as v,
  pr as w,
  $c as x,
  Lc as y,
  Ic as z
};
