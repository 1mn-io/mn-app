// @__NO_SIDE_EFFECTS__
function Mt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const se = {}, Tt = [], Ke = () => {
}, Nr = () => !1, zt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Os = (e) => e.startsWith("onUpdate:"), ce = Object.assign, Sn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, fo = Object.prototype.hasOwnProperty, Z = (e, t) => fo.call(e, t), j = Array.isArray, St = (e) => Pt(e) === "[object Map]", Cn = (e) => Pt(e) === "[object Set]", Yn = (e) => Pt(e) === "[object Date]", ao = (e) => Pt(e) === "[object RegExp]", G = (e) => typeof e == "function", z = (e) => typeof e == "string", Oe = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", Lr = (e) => (Q(e) || G(e)) && G(e.then) && G(e.catch), Dr = Object.prototype.toString, Pt = (e) => Dr.call(e), uo = (e) => Pt(e).slice(8, -1), Hr = (e) => Pt(e) === "[object Object]", vn = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, dt = /* @__PURE__ */ Mt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, ho = /-\w/g, Te = Rs(
  (e) => e.replace(ho, (t) => t.slice(1).toUpperCase())
), po = /\B([A-Z])/g, ze = Rs(
  (e) => e.replace(po, "-$1").toLowerCase()
), Is = Rs((e) => e.charAt(0).toUpperCase() + e.slice(1)), ps = Rs(
  (e) => e ? `on${Is(e)}` : ""
), Be = (e, t) => !Object.is(e, t), jt = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, $r = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, go = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, mo = (e) => {
  const t = z(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Xn;
const Ns = () => Xn || (Xn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ls(e) {
  if (j(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = z(n) ? xo(n) : Ls(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (z(e) || Q(e))
    return e;
}
const yo = /;(?![^(]*\))/g, _o = /:([^]+)/, bo = /\/\*[^]*?\*\//g;
function xo(e) {
  const t = {};
  return e.replace(bo, "").split(yo).forEach((s) => {
    if (s) {
      const n = s.split(_o);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function of(e) {
  if (!e) return "";
  if (z(e)) return e;
  let t = "";
  for (const s in e) {
    const n = e[s];
    if (z(n) || typeof n == "number") {
      const r = s.startsWith("--") ? s : ze(s);
      t += `${r}:${n};`;
    }
  }
  return t;
}
function Ds(e) {
  let t = "";
  if (z(e))
    t = e;
  else if (j(e))
    for (let s = 0; s < e.length; s++) {
      const n = Ds(e[s]);
      n && (t += n + " ");
    }
  else if (Q(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
function lf(e) {
  if (!e) return null;
  let { class: t, style: s } = e;
  return t && !z(t) && (e.class = Ds(t)), s && (e.style = Ls(s)), e;
}
const To = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", So = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", cf = /* @__PURE__ */ Mt(To), ff = /* @__PURE__ */ Mt(So), Vr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Co = /* @__PURE__ */ Mt(Vr), af = /* @__PURE__ */ Mt(
  Vr + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function jr(e) {
  return !!e || e === "";
}
const vo = /[>/="'\u0009\u000a\u000c\u0020]/, Gs = {};
function uf(e) {
  if (Gs.hasOwnProperty(e))
    return Gs[e];
  const t = vo.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), Gs[e] = !t;
}
const hf = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function df(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const wo = /["'&<>]/;
function pf(e) {
  const t = "" + e, s = wo.exec(t);
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
const Ao = /^-?>|<!--|-->|--!>|<!-$/g;
function gf(e) {
  return e.replace(Ao, "");
}
function Eo(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = es(e[n], t[n]);
  return s;
}
function es(e, t) {
  if (e === t) return !0;
  let s = Yn(e), n = Yn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Oe(e), n = Oe(t), s || n)
    return e === t;
  if (s = j(e), n = j(t), s || n)
    return s && n ? Eo(e, t) : !1;
  if (s = Q(e), n = Q(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !es(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Mo(e, t) {
  return e.findIndex((s) => es(s, t));
}
const Br = (e) => !!(e && e.__v_isRef === !0), Po = (e) => z(e) ? e : e == null ? "" : j(e) || Q(e) && (e.toString === Dr || !G(e.toString)) ? Br(e) ? Po(e.value) : JSON.stringify(e, Kr, 2) : String(e), Kr = (e, t) => Br(t) ? Kr(e, t.value) : St(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[qs(n, i) + " =>"] = r, s),
    {}
  )
} : Cn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => qs(s))
} : Oe(t) ? qs(t) : Q(t) && !j(t) && !Hr(t) ? String(t) : t, qs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Oe(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
function mf(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let he;
class Fo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && he && (he.active ? (this.parent = he, this.index = (he.scopes || (he.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
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
      const s = he;
      try {
        return he = this, t();
      } finally {
        he = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = he, he = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (he === this)
        he = this.prevScope;
      else {
        let t = he;
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
function Oo() {
  return he;
}
let re;
const Js = /* @__PURE__ */ new WeakSet();
class kr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, he && (he.active ? he.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Js.has(this) && (Js.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Wr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Zn(this), Gr(this);
    const t = re, s = Fe;
    re = this, Fe = !0;
    try {
      return this.fn();
    } finally {
      qr(this), re = t, Fe = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        En(t);
      this.deps = this.depsTail = void 0, Zn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Js.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    rn(this) && this.run();
  }
  get dirty() {
    return rn(this);
  }
}
let Ur = 0, Bt, Kt;
function Wr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Kt, Kt = e;
    return;
  }
  e.next = Bt, Bt = e;
}
function wn() {
  Ur++;
}
function An() {
  if (--Ur > 0)
    return;
  if (Kt) {
    let t = Kt;
    for (Kt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Bt; ) {
    let t = Bt;
    for (Bt = void 0; t; ) {
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
function Gr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function qr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), En(n), Ro(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function rn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Jr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Jr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Gt) || (e.globalVersion = Gt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !rn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = re, n = Fe;
  re = e, Fe = !0;
  try {
    Gr(e);
    const r = e.fn(e._value);
    (t.version === 0 || Be(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    re = s, Fe = n, qr(e), e.flags &= -3;
  }
}
function En(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      En(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Ro(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Fe = !0;
const Yr = [];
function Ye() {
  Yr.push(Fe), Fe = !1;
}
function Xe() {
  const e = Yr.pop();
  Fe = e === void 0 ? !0 : e;
}
function Zn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = re;
    re = void 0;
    try {
      t();
    } finally {
      re = s;
    }
  }
}
let Gt = 0;
class Io {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Mn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!re || !Fe || re === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== re)
      s = this.activeLink = new Io(re, this), re.deps ? (s.prevDep = re.depsTail, re.depsTail.nextDep = s, re.depsTail = s) : re.deps = re.depsTail = s, Xr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = re.depsTail, s.nextDep = void 0, re.depsTail.nextDep = s, re.depsTail = s, re.deps === s && (re.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Gt++, this.notify(t);
  }
  notify(t) {
    wn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      An();
    }
  }
}
function Xr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Xr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const on = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ Symbol(
  ""
), ln = /* @__PURE__ */ Symbol(
  ""
), qt = /* @__PURE__ */ Symbol(
  ""
);
function ge(e, t, s) {
  if (Fe && re) {
    let n = on.get(e);
    n || on.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new Mn()), r.map = n, r.key = s), r.track();
  }
}
function Ge(e, t, s, n, r, i) {
  const o = on.get(e);
  if (!o) {
    Gt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (wn(), t === "clear")
    o.forEach(l);
  else {
    const c = j(e), u = c && vn(s);
    if (c && s === "length") {
      const a = Number(n);
      o.forEach((g, _) => {
        (_ === "length" || _ === qt || !Oe(_) && _ >= a) && l(g);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), u && l(o.get(qt)), t) {
        case "add":
          c ? u && l(o.get("length")) : (l(o.get(pt)), St(e) && l(o.get(ln)));
          break;
        case "delete":
          c || (l(o.get(pt)), St(e) && l(o.get(ln)));
          break;
        case "set":
          St(e) && l(o.get(pt));
          break;
      }
  }
  An();
}
function _t(e) {
  const t = /* @__PURE__ */ X(e);
  return t === e ? t : (ge(t, "iterate", qt), /* @__PURE__ */ Me(e) ? t : t.map(Re));
}
function Hs(e) {
  return ge(e = /* @__PURE__ */ X(e), "iterate", qt), e;
}
function je(e, t) {
  return /* @__PURE__ */ Ze(e) ? At(/* @__PURE__ */ ot(e) ? Re(t) : t) : Re(t);
}
const No = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ys(this, Symbol.iterator, (e) => je(this, e));
  },
  concat(...e) {
    return _t(this).concat(
      ...e.map((t) => j(t) ? _t(t) : t)
    );
  },
  entries() {
    return Ys(this, "entries", (e) => (e[1] = je(this, e[1]), e));
  },
  every(e, t) {
    return ke(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ke(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => je(this, n)),
      arguments
    );
  },
  find(e, t) {
    return ke(
      this,
      "find",
      e,
      t,
      (s) => je(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return ke(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ke(
      this,
      "findLast",
      e,
      t,
      (s) => je(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ke(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ke(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Xs(this, "includes", e);
  },
  indexOf(...e) {
    return Xs(this, "indexOf", e);
  },
  join(e) {
    return _t(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Xs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ke(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Rt(this, "pop");
  },
  push(...e) {
    return Rt(this, "push", e);
  },
  reduce(e, ...t) {
    return Qn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Qn(this, "reduceRight", e, t);
  },
  shift() {
    return Rt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ke(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Rt(this, "splice", e);
  },
  toReversed() {
    return _t(this).toReversed();
  },
  toSorted(e) {
    return _t(this).toSorted(e);
  },
  toSpliced(...e) {
    return _t(this).toSpliced(...e);
  },
  unshift(...e) {
    return Rt(this, "unshift", e);
  },
  values() {
    return Ys(this, "values", (e) => je(this, e));
  }
};
function Ys(e, t, s) {
  const n = Hs(e), r = n[t]();
  return n !== e && !/* @__PURE__ */ Me(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const Lo = Array.prototype;
function ke(e, t, s, n, r, i) {
  const o = Hs(e), l = o !== e && !/* @__PURE__ */ Me(e), c = o[t];
  if (c !== Lo[t]) {
    const g = c.apply(e, i);
    return l ? Re(g) : g;
  }
  let u = s;
  o !== e && (l ? u = function(g, _) {
    return s.call(this, je(e, g), _, e);
  } : s.length > 2 && (u = function(g, _) {
    return s.call(this, g, _, e);
  }));
  const a = c.call(o, u, n);
  return l && r ? r(a) : a;
}
function Qn(e, t, s, n) {
  const r = Hs(e), i = r !== e && !/* @__PURE__ */ Me(e);
  let o = s, l = !1;
  r !== e && (i ? (l = n.length === 0, o = function(u, a, g) {
    return l && (l = !1, u = je(e, u)), s.call(this, u, je(e, a), g, e);
  }) : s.length > 3 && (o = function(u, a, g) {
    return s.call(this, u, a, g, e);
  }));
  const c = r[t](o, ...n);
  return l ? je(e, c) : c;
}
function Xs(e, t, s) {
  const n = /* @__PURE__ */ X(e);
  ge(n, "iterate", qt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ Rn(s[0]) ? (s[0] = /* @__PURE__ */ X(s[0]), n[t](...s)) : r;
}
function Rt(e, t, s = []) {
  Ye(), wn();
  const n = (/* @__PURE__ */ X(e))[t].apply(e, s);
  return An(), Xe(), n;
}
const Do = /* @__PURE__ */ Mt("__proto__,__v_isRef,__isVue"), Zr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Oe)
);
function Ho(e) {
  Oe(e) || (e = String(e));
  const t = /* @__PURE__ */ X(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
class Qr {
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
      return n === (r ? i ? qo : si : i ? ti : ei).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = j(t);
    if (!r) {
      let c;
      if (o && (c = No[s]))
        return c;
      if (s === "hasOwnProperty")
        return Ho;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ _e(t) ? t : n
    );
    if ((Oe(s) ? Zr.has(s) : Do(s)) || (r || ge(t, "get", s), i))
      return l;
    if (/* @__PURE__ */ _e(l)) {
      const c = o && vn(s) ? l : l.value;
      return r && Q(c) ? /* @__PURE__ */ fn(c) : c;
    }
    return Q(l) ? r ? /* @__PURE__ */ fn(l) : /* @__PURE__ */ Fn(l) : l;
  }
}
class zr extends Qr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const o = j(t) && vn(s);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ Ze(i);
      if (!/* @__PURE__ */ Me(n) && !/* @__PURE__ */ Ze(n) && (i = /* @__PURE__ */ X(i), n = /* @__PURE__ */ X(n)), !o && /* @__PURE__ */ _e(i) && !/* @__PURE__ */ _e(n))
        return u || (i.value = n), !0;
    }
    const l = o ? Number(s) < t.length : Z(t, s), c = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ _e(t) ? t : r
    );
    return t === /* @__PURE__ */ X(r) && (l ? Be(n, i) && Ge(t, "set", s, n) : Ge(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = Z(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ge(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Oe(s) || !Zr.has(s)) && ge(t, "has", s), n;
  }
  ownKeys(t) {
    return ge(
      t,
      "iterate",
      j(t) ? "length" : pt
    ), Reflect.ownKeys(t);
  }
}
class $o extends Qr {
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
const Vo = /* @__PURE__ */ new zr(), jo = /* @__PURE__ */ new $o(), Bo = /* @__PURE__ */ new zr(!0);
const cn = (e) => e, os = (e) => Reflect.getPrototypeOf(e);
function Ko(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ X(r), o = St(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = r[e](...n), a = s ? cn : t ? At : Re;
    return !t && ge(
      i,
      "iterate",
      c ? ln : pt
    ), ce(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: g, done: _ } = u.next();
          return _ ? { value: g, done: _ } : {
            value: l ? [a(g[0]), a(g[1])] : a(g),
            done: _
          };
        }
      }
    );
  };
}
function ls(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ko(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ X(i), l = /* @__PURE__ */ X(r);
      e || (Be(r, l) && ge(o, "get", r), ge(o, "get", l));
      const { has: c } = os(o), u = t ? cn : e ? At : Re;
      if (c.call(o, r))
        return u(i.get(r));
      if (c.call(o, l))
        return u(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ge(/* @__PURE__ */ X(r), "iterate", pt), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ X(i), l = /* @__PURE__ */ X(r);
      return e || (Be(r, l) && ge(o, "has", r), ge(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ X(l), u = t ? cn : e ? At : Re;
      return !e && ge(c, "iterate", pt), l.forEach((a, g) => r.call(i, u(a), u(g), o));
    }
  };
  return ce(
    s,
    e ? {
      add: ls("add"),
      set: ls("set"),
      delete: ls("delete"),
      clear: ls("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ X(this), o = os(i), l = /* @__PURE__ */ X(r), c = !t && !/* @__PURE__ */ Me(r) && !/* @__PURE__ */ Ze(r) ? l : r;
        return o.has.call(i, c) || Be(r, c) && o.has.call(i, r) || Be(l, c) && o.has.call(i, l) || (i.add(c), Ge(i, "add", c, c)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Me(i) && !/* @__PURE__ */ Ze(i) && (i = /* @__PURE__ */ X(i));
        const o = /* @__PURE__ */ X(this), { has: l, get: c } = os(o);
        let u = l.call(o, r);
        u || (r = /* @__PURE__ */ X(r), u = l.call(o, r));
        const a = c.call(o, r);
        return o.set(r, i), u ? Be(i, a) && Ge(o, "set", r, i) : Ge(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ X(this), { has: o, get: l } = os(i);
        let c = o.call(i, r);
        c || (r = /* @__PURE__ */ X(r), c = o.call(i, r)), l && l.call(i, r);
        const u = i.delete(r);
        return c && Ge(i, "delete", r, void 0), u;
      },
      clear() {
        const r = /* @__PURE__ */ X(this), i = r.size !== 0, o = r.clear();
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
    s[r] = Ko(r, e, t);
  }), s;
}
function Pn(e, t) {
  const s = ko(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    Z(s, r) && r in n ? s : n,
    r,
    i
  );
}
const Uo = {
  get: /* @__PURE__ */ Pn(!1, !1)
}, Wo = {
  get: /* @__PURE__ */ Pn(!1, !0)
}, Go = {
  get: /* @__PURE__ */ Pn(!0, !1)
};
const ei = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), qo = /* @__PURE__ */ new WeakMap();
function Jo(e) {
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
function Yo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Jo(uo(e));
}
// @__NO_SIDE_EFFECTS__
function Fn(e) {
  return /* @__PURE__ */ Ze(e) ? e : On(
    e,
    !1,
    Vo,
    Uo,
    ei
  );
}
// @__NO_SIDE_EFFECTS__
function Xo(e) {
  return On(
    e,
    !1,
    Bo,
    Wo,
    ti
  );
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
  return On(
    e,
    !0,
    jo,
    Go,
    si
  );
}
function On(e, t, s, n, r) {
  if (!Q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Yo(e);
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
// @__NO_SIDE_EFFECTS__
function ot(e) {
  return /* @__PURE__ */ Ze(e) ? /* @__PURE__ */ ot(e.__v_raw) : !!(e && e.__v_isReactive);
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
function Rn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function X(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ X(t) : e;
}
function Zo(e) {
  return !Z(e, "__v_skip") && Object.isExtensible(e) && $r(e, "__v_skip", !0), e;
}
const Re = (e) => Q(e) ? /* @__PURE__ */ Fn(e) : e, At = (e) => Q(e) ? /* @__PURE__ */ fn(e) : e;
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function yf(e) {
  return Qo(e, !1);
}
function Qo(e, t) {
  return /* @__PURE__ */ _e(e) ? e : new zo(e, t);
}
class zo {
  constructor(t, s) {
    this.dep = new Mn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ X(t), this._value = s ? t : Re(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Me(t) || /* @__PURE__ */ Ze(t);
    t = n ? t : /* @__PURE__ */ X(t), Be(t, s) && (this._rawValue = t, this._value = n ? t : Re(t), this.dep.trigger());
  }
}
function el(e) {
  return /* @__PURE__ */ _e(e) ? e.value : e;
}
const tl = {
  get: (e, t, s) => t === "__v_raw" ? e : el(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return /* @__PURE__ */ _e(r) && !/* @__PURE__ */ _e(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function ni(e) {
  return /* @__PURE__ */ ot(e) ? e : new Proxy(e, tl);
}
class sl {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Mn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Gt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    re !== this)
      return Wr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Jr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function nl(e, t, s = !1) {
  let n, r;
  return G(e) ? n = e : (n = e.get, r = e.set), new sl(n, r, s);
}
const cs = {}, xs = /* @__PURE__ */ new WeakMap();
let ut;
function rl(e, t = !1, s = ut) {
  if (s) {
    let n = xs.get(s);
    n || xs.set(s, n = []), n.push(e);
  }
}
function il(e, t, s = se) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = s, u = (p) => r ? p : /* @__PURE__ */ Me(p) || r === !1 || r === 0 ? qe(p, 1) : qe(p);
  let a, g, _, C, N = !1, I = !1;
  if (/* @__PURE__ */ _e(e) ? (g = () => e.value, N = /* @__PURE__ */ Me(e)) : /* @__PURE__ */ ot(e) ? (g = () => u(e), N = !0) : j(e) ? (I = !0, N = e.some((p) => /* @__PURE__ */ ot(p) || /* @__PURE__ */ Me(p)), g = () => e.map((p) => {
    if (/* @__PURE__ */ _e(p))
      return p.value;
    if (/* @__PURE__ */ ot(p))
      return u(p);
    if (G(p))
      return c ? c(p, 2) : p();
  })) : G(e) ? t ? g = c ? () => c(e, 2) : e : g = () => {
    if (_) {
      Ye();
      try {
        _();
      } finally {
        Xe();
      }
    }
    const p = ut;
    ut = a;
    try {
      return c ? c(e, 3, [C]) : e(C);
    } finally {
      ut = p;
    }
  } : g = Ke, t && r) {
    const p = g, A = r === !0 ? 1 / 0 : r;
    g = () => qe(p(), A);
  }
  const k = Oo(), q = () => {
    a.stop(), k && k.active && Sn(k.effects, a);
  };
  if (i && t) {
    const p = t;
    t = (...A) => {
      p(...A), q();
    };
  }
  let S = I ? new Array(e.length).fill(cs) : cs;
  const d = (p) => {
    if (!(!(a.flags & 1) || !a.dirty && !p))
      if (t) {
        const A = a.run();
        if (r || N || (I ? A.some((D, P) => Be(D, S[P])) : Be(A, S))) {
          _ && _();
          const D = ut;
          ut = a;
          try {
            const P = [
              A,
              // pass undefined as the old value when it's changed for the first time
              S === cs ? void 0 : I && S[0] === cs ? [] : S,
              C
            ];
            S = A, c ? c(t, 3, P) : (
              // @ts-expect-error
              t(...P)
            );
          } finally {
            ut = D;
          }
        }
      } else
        a.run();
  };
  return l && l(d), a = new kr(g), a.scheduler = o ? () => o(d, !1) : d, C = (p) => rl(p, !1, a), _ = a.onStop = () => {
    const p = xs.get(a);
    if (p) {
      if (c)
        c(p, 4);
      else
        for (const A of p) A();
      xs.delete(a);
    }
  }, t ? n ? d(!0) : S = a.run() : o ? o(d.bind(null, !0), !0) : a.run(), q.pause = a.pause.bind(a), q.resume = a.resume.bind(a), q.stop = q, q;
}
function qe(e, t = 1 / 0, s) {
  if (t <= 0 || !Q(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ _e(e))
    qe(e.value, t, s);
  else if (j(e))
    for (let n = 0; n < e.length; n++)
      qe(e[n], t, s);
  else if (Cn(e) || St(e))
    e.forEach((n) => {
      qe(n, t, s);
    });
  else if (Hr(e)) {
    for (const n in e)
      qe(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && qe(e[n], t, s);
  }
  return e;
}
function ts(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    $s(r, t, s);
  }
}
function Ie(e, t, s, n) {
  if (G(e)) {
    const r = ts(e, t, s, n);
    return r && Lr(r) && r.catch((i) => {
      $s(i, t, s);
    }), r;
  }
  if (j(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Ie(e[i], t, s, n));
    return r;
  }
}
function $s(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || se;
  if (t) {
    let l = t.parent;
    const c = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let g = 0; g < a.length; g++)
          if (a[g](e, c, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ye(), ts(i, null, 10, [
        e,
        c,
        u
      ]), Xe();
      return;
    }
  }
  ol(e, s, r, n, o);
}
function ol(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const xe = [];
let He = -1;
const Ct = [];
let rt = null, xt = 0;
const ri = /* @__PURE__ */ Promise.resolve();
let Ts = null;
function ll(e) {
  const t = Ts || ri;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function cl(e) {
  let t = He + 1, s = xe.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = xe[n], i = Jt(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function In(e) {
  if (!(e.flags & 1)) {
    const t = Jt(e), s = xe[xe.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jt(s) ? xe.push(e) : xe.splice(cl(t), 0, e), e.flags |= 1, ii();
  }
}
function ii() {
  Ts || (Ts = ri.then(oi));
}
function fl(e) {
  j(e) ? Ct.push(...e) : rt && e.id === -1 ? rt.splice(xt + 1, 0, e) : e.flags & 1 || (Ct.push(e), e.flags |= 1), ii();
}
function zn(e, t, s = He + 1) {
  for (; s < xe.length; s++) {
    const n = xe[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      xe.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ss(e) {
  if (Ct.length) {
    const t = [...new Set(Ct)].sort(
      (s, n) => Jt(s) - Jt(n)
    );
    if (Ct.length = 0, rt) {
      rt.push(...t);
      return;
    }
    for (rt = t, xt = 0; xt < rt.length; xt++) {
      const s = rt[xt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    rt = null, xt = 0;
  }
}
const Jt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function oi(e) {
  try {
    for (He = 0; He < xe.length; He++) {
      const t = xe[He];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ts(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; He < xe.length; He++) {
      const t = xe[He];
      t && (t.flags &= -2);
    }
    He = -1, xe.length = 0, Ss(), Ts = null, (xe.length || Ct.length) && oi();
  }
}
let de = null, li = null;
function Yt(e) {
  const t = de;
  return de = e, li = e && e.type.__scopeId || null, t;
}
function al(e, t = de, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && Es(-1);
    const i = Yt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Yt(i), n._d && Es(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function _f(e, t) {
  if (de === null)
    return e;
  const s = Ks(de), n = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = se] = t[r];
    i && (G(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && qe(o), n.push({
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
    c && (Ye(), Ie(c, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Xe());
  }
}
function ul(e, t) {
  if (ye) {
    let s = ye.provides;
    const n = ye.parent && ye.parent.provides;
    n === s && (s = ye.provides = Object.create(n)), s[e] = t;
  }
}
function gs(e, t, s = !1) {
  const n = ss();
  if (n || wt) {
    let r = wt ? wt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && G(t) ? t.call(n && n.proxy) : t;
  }
}
const hl = /* @__PURE__ */ Symbol.for("v-scx"), dl = () => gs(hl);
function ms(e, t, s) {
  return ci(e, t, s);
}
function ci(e, t, s = se) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = ce({}, s), c = t && n || !t && i !== "post";
  let u;
  if (Qt) {
    if (i === "sync") {
      const C = dl();
      u = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!c) {
      const C = () => {
      };
      return C.stop = Ke, C.resume = Ke, C.pause = Ke, C;
    }
  }
  const a = ye;
  l.call = (C, N, I) => Ie(C, a, N, I);
  let g = !1;
  i === "post" ? l.scheduler = (C) => {
    ae(C, a && a.suspense);
  } : i !== "sync" && (g = !0, l.scheduler = (C, N) => {
    N ? C() : In(C);
  }), l.augmentJob = (C) => {
    t && (C.flags |= 4), g && (C.flags |= 2, a && (C.id = a.uid, C.i = a));
  };
  const _ = il(e, t, l);
  return Qt && (u ? u.push(_) : c && _()), _;
}
function pl(e, t, s) {
  const n = this.proxy, r = z(e) ? e.includes(".") ? fi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  G(t) ? i = t : (i = t.handler, s = t);
  const o = ns(this), l = ci(r, i.bind(n), s);
  return o(), l;
}
function fi(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const st = /* @__PURE__ */ new WeakMap(), ai = /* @__PURE__ */ Symbol("_vte"), ui = (e) => e.__isTeleport, ht = (e) => e && (e.disabled || e.disabled === ""), gl = (e) => e && (e.defer || e.defer === ""), er = (e) => typeof SVGElement < "u" && e instanceof SVGElement, tr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, an = (e, t) => {
  const s = e && e.to;
  return z(s) ? t ? t(s) : null : s;
}, ml = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, r, i, o, l, c, u) {
    const {
      mc: a,
      pc: g,
      pbc: _,
      o: { insert: C, querySelector: N, createText: I, createComment: k, parentNode: q }
    } = u, S = ht(t.props);
    let { dynamicChildren: d } = t;
    const p = (P, $, v) => {
      P.shapeFlag & 16 && a(
        P.children,
        $,
        v,
        r,
        i,
        o,
        l,
        c
      );
    }, A = (P = t) => {
      const $ = ht(P.props), v = P.target = an(P.props, N), F = un(v, P, I, C);
      v && (o !== "svg" && er(v) ? o = "svg" : o !== "mathml" && tr(v) && (o = "mathml"), r && r.isCE && (r.ce._teleportTargets || (r.ce._teleportTargets = /* @__PURE__ */ new Set())).add(v), $ || (p(P, v, F), Dt(P, !1)));
    }, D = (P) => {
      const $ = () => {
        if (st.get(P) === $) {
          if (st.delete(P), ht(P.props)) {
            const v = q(P.el) || s;
            p(P, v, P.anchor), Dt(P, !0);
          }
          A(P);
        }
      };
      st.set(P, $), ae($, i);
    };
    if (e == null) {
      const P = t.el = I(""), $ = t.anchor = I("");
      if (C(P, s, n), C($, s, n), gl(t.props) || i && i.pendingBranch) {
        D(t);
        return;
      }
      S && (p(t, s, $), Dt(t, !0)), A();
    } else {
      t.el = e.el;
      const P = t.anchor = e.anchor, $ = st.get(e);
      if ($) {
        $.flags |= 8, st.delete(e), D(t);
        return;
      }
      t.targetStart = e.targetStart;
      const v = t.target = e.target, F = t.targetAnchor = e.targetAnchor, B = ht(e.props), w = B ? s : v, W = B ? P : F;
      if (o === "svg" || er(v) ? o = "svg" : (o === "mathml" || tr(v)) && (o = "mathml"), d ? (_(
        e.dynamicChildren,
        d,
        w,
        r,
        i,
        o,
        l
      ), Kn(e, t, !0)) : c || g(
        e,
        t,
        w,
        W,
        r,
        i,
        o,
        l,
        !1
      ), S)
        B ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : fs(
          t,
          s,
          P,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ee = t.target = an(
          t.props,
          N
        );
        ee && fs(
          t,
          ee,
          null,
          u,
          0
        );
      } else B && fs(
        t,
        v,
        F,
        u,
        1
      );
      Dt(t, S);
    }
  },
  remove(e, t, s, { um: n, o: { remove: r } }, i) {
    const {
      shapeFlag: o,
      children: l,
      anchor: c,
      targetStart: u,
      targetAnchor: a,
      target: g,
      props: _
    } = e;
    let C = i || !ht(_);
    const N = st.get(e);
    if (N && (N.flags |= 8, st.delete(e), C = !1), g && (r(u), r(a)), i && r(c), o & 16)
      for (let I = 0; I < l.length; I++) {
        const k = l[I];
        n(
          k,
          t,
          s,
          C,
          !!k.dynamicChildren
        );
      }
  },
  move: fs,
  hydrate: yl
};
function fs(e, t, s, { o: { insert: n }, m: r }, i = 2) {
  i === 0 && n(e.targetAnchor, t, s);
  const { el: o, anchor: l, shapeFlag: c, children: u, props: a } = e, g = i === 2;
  if (g && n(o, t, s), !st.has(e) && (!g || ht(a)) && c & 16)
    for (let _ = 0; _ < u.length; _++)
      r(
        u[_],
        t,
        s,
        2
      );
  g && n(l, t, s);
}
function yl(e, t, s, n, r, i, {
  o: { nextSibling: o, parentNode: l, querySelector: c, insert: u, createText: a }
}, g) {
  function _(k, q) {
    let S = q;
    for (; S; ) {
      if (S && S.nodeType === 8) {
        if (S.data === "teleport start anchor")
          t.targetStart = S;
        else if (S.data === "teleport anchor") {
          t.targetAnchor = S, k._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      S = o(S);
    }
  }
  function C(k, q) {
    q.anchor = g(
      o(k),
      q,
      l(k),
      s,
      n,
      r,
      i
    );
  }
  const N = t.target = an(
    t.props,
    c
  ), I = ht(t.props);
  if (N) {
    const k = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (I ? (C(e, t), _(N, k), t.targetAnchor || un(
      N,
      t,
      a,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === N ? e : null
    )) : (t.anchor = o(e), _(N, k), t.targetAnchor || un(N, t, a, u), g(
      k && o(k),
      t,
      N,
      s,
      n,
      r,
      i
    ))), Dt(t, I);
  } else I && t.shapeFlag & 16 && (C(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const bf = ml;
function Dt(e, t) {
  const s = e.ctx;
  if (s && s.ut) {
    let n, r;
    for (t ? (n = e.el, r = e.anchor) : (n = e.targetStart, r = e.targetAnchor); n && n !== r; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid), n = n.nextSibling;
    s.ut();
  }
}
function un(e, t, s, n, r = null) {
  const i = t.targetStart = s(""), o = t.targetAnchor = s("");
  return i[ai] = o, e && (n(i, e, r), n(o, e, r)), o;
}
const Ve = /* @__PURE__ */ Symbol("_leaveCb"), It = /* @__PURE__ */ Symbol("_enterCb");
function hi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ln(() => {
    e.isMounted = !0;
  }), Hn(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ee = [Function, Array], di = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ee,
  onEnter: Ee,
  onAfterEnter: Ee,
  onEnterCancelled: Ee,
  // leave
  onBeforeLeave: Ee,
  onLeave: Ee,
  onAfterLeave: Ee,
  onLeaveCancelled: Ee,
  // appear
  onBeforeAppear: Ee,
  onAppear: Ee,
  onAfterAppear: Ee,
  onAppearCancelled: Ee
}, pi = (e) => {
  const t = e.subTree;
  return t.component ? pi(t.component) : t;
}, _l = {
  name: "BaseTransition",
  props: di,
  setup(e, { slots: t }) {
    const s = ss(), n = hi();
    return () => {
      const r = t.default && Nn(t.default(), !0), i = r && r.length ? gi(r) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? lc() : void 0
      );
      if (!i)
        return;
      const o = /* @__PURE__ */ X(e), { mode: l } = o;
      if (n.isLeaving)
        return Zs(i);
      const c = sr(i);
      if (!c)
        return Zs(i);
      let u = Xt(
        c,
        o,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (g) => u = g
      );
      c.type !== ue && lt(c, u);
      let a = s.subTree && sr(s.subTree);
      if (a && a.type !== ue && !it(a, c) && pi(s).type !== ue) {
        let g = Xt(
          a,
          o,
          n,
          s
        );
        if (lt(a, g), l === "out-in" && c.type !== ue)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete g.afterLeave, a = void 0;
          }, Zs(i);
        l === "in-out" && c.type !== ue ? g.delayLeave = (_, C, N) => {
          const I = mi(
            n,
            a
          );
          I[String(a.key)] = a, _[Ve] = () => {
            C(), _[Ve] = void 0, delete u.delayedLeave, a = void 0;
          }, u.delayedLeave = () => {
            N(), delete u.delayedLeave, a = void 0;
          };
        } : a = void 0;
      } else a && (a = void 0);
      return i;
    };
  }
};
function gi(e) {
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
const bl = _l;
function mi(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function Xt(e, t, s, n, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: u,
    onAfterEnter: a,
    onEnterCancelled: g,
    onBeforeLeave: _,
    onLeave: C,
    onAfterLeave: N,
    onLeaveCancelled: I,
    onBeforeAppear: k,
    onAppear: q,
    onAfterAppear: S,
    onAppearCancelled: d
  } = t, p = String(e.key), A = mi(s, e), D = (v, F) => {
    v && Ie(
      v,
      n,
      9,
      F
    );
  }, P = (v, F) => {
    const B = F[1];
    D(v, F), j(v) ? v.every((w) => w.length <= 1) && B() : v.length <= 1 && B();
  }, $ = {
    mode: o,
    persisted: l,
    beforeEnter(v) {
      let F = c;
      if (!s.isMounted)
        if (i)
          F = k || c;
        else
          return;
      v[Ve] && v[Ve](
        !0
        /* cancelled */
      );
      const B = A[p];
      B && it(e, B) && B.el[Ve] && B.el[Ve](), D(F, [v]);
    },
    enter(v) {
      if (A[p] === e) return;
      let F = u, B = a, w = g;
      if (!s.isMounted)
        if (i)
          F = q || u, B = S || a, w = d || g;
        else
          return;
      let W = !1;
      v[It] = (oe) => {
        W || (W = !0, oe ? D(w, [v]) : D(B, [v]), $.delayedLeave && $.delayedLeave(), v[It] = void 0);
      };
      const ee = v[It].bind(null, !1);
      F ? P(F, [v, ee]) : ee();
    },
    leave(v, F) {
      const B = String(e.key);
      if (v[It] && v[It](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return F();
      D(_, [v]);
      let w = !1;
      v[Ve] = (ee) => {
        w || (w = !0, F(), ee ? D(I, [v]) : D(N, [v]), v[Ve] = void 0, A[B] === e && delete A[B]);
      };
      const W = v[Ve].bind(null, !1);
      A[B] = e, C ? P(C, [v, W]) : W();
    },
    clone(v) {
      const F = Xt(
        v,
        t,
        s,
        n,
        r
      );
      return r && r(F), F;
    }
  };
  return $;
}
function Zs(e) {
  if (Vs(e))
    return e = Qe(e), e.children = null, e;
}
function sr(e) {
  if (!Vs(e))
    return ui(e.type) && e.children ? gi(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && G(s.default))
      return s.default();
  }
}
function lt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, lt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Nn(e, t = !1, s) {
  let n = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = s == null ? o.key : String(s) + String(o.key != null ? o.key : i);
    o.type === me ? (o.patchFlag & 128 && r++, n = n.concat(
      Nn(o.children, t, l)
    )) : (t || o.type !== ue) && n.push(l != null ? Qe(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function xf(e, t) {
  return G(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function Tf() {
  const e = ss();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function yi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function nr(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Cs = /* @__PURE__ */ new WeakMap();
function vt(e, t, s, n, r = !1) {
  if (j(e)) {
    e.forEach(
      (I, k) => vt(
        I,
        t && (j(t) ? t[k] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (Je(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && vt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Ks(n.component) : n.el, o = r ? null : i, { i: l, r: c } = e, u = t && t.r, a = l.refs === se ? l.refs = {} : l.refs, g = l.setupState, _ = /* @__PURE__ */ X(g), C = g === se ? Nr : (I) => nr(a, I) ? !1 : Z(_, I), N = (I, k) => !(k && nr(a, k));
  if (u != null && u !== c) {
    if (rr(t), z(u))
      a[u] = null, C(u) && (g[u] = null);
    else if (/* @__PURE__ */ _e(u)) {
      const I = t;
      N(u, I.k) && (u.value = null), I.k && (a[I.k] = null);
    }
  }
  if (G(c))
    ts(c, l, 12, [o, a]);
  else {
    const I = z(c), k = /* @__PURE__ */ _e(c);
    if (I || k) {
      const q = () => {
        if (e.f) {
          const S = I ? C(c) ? g[c] : a[c] : N() || !e.k ? c.value : a[e.k];
          if (r)
            j(S) && Sn(S, i);
          else if (j(S))
            S.includes(i) || S.push(i);
          else if (I)
            a[c] = [i], C(c) && (g[c] = a[c]);
          else {
            const d = [i];
            N(c, e.k) && (c.value = d), e.k && (a[e.k] = d);
          }
        } else I ? (a[c] = o, C(c) && (g[c] = o)) : k && (N(c, e.k) && (c.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const S = () => {
          q(), Cs.delete(e);
        };
        S.id = -1, Cs.set(e, S), ae(S, s);
      } else
        rr(e), q();
    }
  }
}
function rr(e) {
  const t = Cs.get(e);
  t && (t.flags |= 8, Cs.delete(e));
}
let ir = !1;
const bt = () => {
  ir || (console.error("Hydration completed but contains mismatches."), ir = !0);
}, xl = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Tl = (e) => e.namespaceURI.includes("MathML"), as = (e) => {
  if (e.nodeType === 1) {
    if (xl(e)) return "svg";
    if (Tl(e)) return "mathml";
  }
}, us = (e) => e.nodeType === 8;
function Sl(e) {
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
      createComment: u
    }
  } = e, a = (d, p) => {
    if (!p.hasChildNodes()) {
      s(null, d, p), Ss(), p._vnode = d;
      return;
    }
    g(p.firstChild, d, null, null, null), Ss(), p._vnode = d;
  }, g = (d, p, A, D, P, $ = !1) => {
    $ = $ || !!p.dynamicChildren;
    const v = us(d) && d.data === "[", F = () => I(
      d,
      p,
      A,
      D,
      P,
      v
    ), { type: B, ref: w, shapeFlag: W, patchFlag: ee } = p;
    let oe = d.nodeType;
    p.el = d, ee === -2 && ($ = !1, p.dynamicChildren = null);
    let V = null;
    switch (B) {
      case gt:
        oe !== 3 ? p.children === "" ? (c(p.el = r(""), o(d), d), V = d) : V = F() : (d.data !== p.children && (bt(), d.data = p.children), V = i(d));
        break;
      case ue:
        S(d) ? (V = i(d), q(
          p.el = d.content.firstChild,
          d,
          A
        )) : oe !== 8 || v ? V = F() : V = i(d);
        break;
      case _s:
        if (v && (d = i(d), oe = d.nodeType), oe === 1 || oe === 3) {
          V = d;
          const J = !p.children.length;
          for (let L = 0; L < p.staticCount; L++)
            J && (p.children += V.nodeType === 1 ? V.outerHTML : V.data), L === p.staticCount - 1 && (p.anchor = V), V = i(V);
          return v ? i(V) : V;
        } else
          F();
        break;
      case me:
        v ? V = N(
          d,
          p,
          A,
          D,
          P,
          $
        ) : V = F();
        break;
      default:
        if (W & 1)
          (oe !== 1 || p.type.toLowerCase() !== d.tagName.toLowerCase()) && !S(d) ? V = F() : V = _(
            d,
            p,
            A,
            D,
            P,
            $
          );
        else if (W & 6) {
          p.slotScopeIds = P;
          const J = o(d);
          if (v ? V = k(d) : us(d) && d.data === "teleport start" ? V = k(d, d.data, "teleport end") : V = i(d), t(
            p,
            J,
            null,
            A,
            D,
            as(J),
            $
          ), Je(p) && !p.type.__asyncResolved) {
            let L;
            v ? (L = pe(me), L.anchor = V ? V.previousSibling : J.lastChild) : L = d.nodeType === 3 ? Ui("") : pe("div"), L.el = d, p.component.subTree = L;
          }
        } else W & 64 ? oe !== 8 ? V = F() : V = p.type.hydrate(
          d,
          p,
          A,
          D,
          P,
          $,
          e,
          C
        ) : W & 128 && (V = p.type.hydrate(
          d,
          p,
          A,
          D,
          as(o(d)),
          P,
          $,
          e,
          g
        ));
    }
    return w != null && vt(w, null, D, p), V;
  }, _ = (d, p, A, D, P, $) => {
    $ = $ || !!p.dynamicChildren;
    const { type: v, props: F, patchFlag: B, shapeFlag: w, dirs: W, transition: ee } = p, oe = v === "input" || v === "option";
    if (oe || B !== -1) {
      W && $e(p, null, A, "created");
      let V = !1;
      if (S(d)) {
        V = Hi(
          null,
          // no need check parentSuspense in hydration
          ee
        ) && A && A.vnode.props && A.vnode.props.appear;
        const L = d.content.firstChild;
        if (V) {
          const ie = L.getAttribute("class");
          ie && (L.$cls = ie), ee.beforeEnter(L);
        }
        q(L, d, A), p.el = d = L;
      }
      if (w & 16 && // skip if element has innerHTML / textContent
      !(F && (F.innerHTML || F.textContent))) {
        let L = C(
          d.firstChild,
          p,
          d,
          A,
          D,
          P,
          $
        );
        for (; L; ) {
          hs(
            d,
            1
            /* CHILDREN */
          ) || bt();
          const ie = L;
          L = L.nextSibling, l(ie);
        }
      } else if (w & 8) {
        let L = p.children;
        L[0] === `
` && (d.tagName === "PRE" || d.tagName === "TEXTAREA") && (L = L.slice(1));
        const { textContent: ie } = d;
        ie !== L && // innerHTML normalize \r\n or \r into a single \n in the DOM
        ie !== L.replace(/\r\n|\r/g, `
`) && (hs(
          d,
          0
          /* TEXT */
        ) || bt(), d.textContent = p.children);
      }
      if (F) {
        if (oe || !$ || B & 48) {
          const L = d.tagName.includes("-");
          for (const ie in F)
            (oe && (ie.endsWith("value") || ie === "indeterminate") || zt(ie) && !dt(ie) || // force hydrate v-bind with .prop modifiers
            ie[0] === "." || L && !dt(ie)) && n(d, ie, null, F[ie], void 0, A);
        } else if (F.onClick)
          n(
            d,
            "onClick",
            null,
            F.onClick,
            void 0,
            A
          );
        else if (B & 4 && /* @__PURE__ */ ot(F.style))
          for (const L in F.style) F.style[L];
      }
      let J;
      (J = F && F.onVnodeBeforeMount) && Se(J, A, p), W && $e(p, null, A, "beforeMount"), ((J = F && F.onVnodeMounted) || W || V) && ji(() => {
        J && Se(J, A, p), V && ee.enter(d), W && $e(p, null, A, "mounted");
      }, D);
    }
    return d.nextSibling;
  }, C = (d, p, A, D, P, $, v) => {
    v = v || !!p.dynamicChildren;
    const F = p.children, B = F.length;
    for (let w = 0; w < B; w++) {
      const W = v ? F[w] : F[w] = we(F[w]), ee = W.type === gt;
      d ? (ee && !v && w + 1 < B && we(F[w + 1]).type === gt && (c(
        r(
          d.data.slice(W.children.length)
        ),
        A,
        i(d)
      ), d.data = W.children), d = g(
        d,
        W,
        D,
        P,
        $,
        v
      )) : ee && !W.children ? c(W.el = r(""), A) : (hs(
        A,
        1
        /* CHILDREN */
      ) || bt(), s(
        null,
        W,
        A,
        null,
        D,
        P,
        as(A),
        $
      ));
    }
    return d;
  }, N = (d, p, A, D, P, $) => {
    const { slotScopeIds: v } = p;
    v && (P = P ? P.concat(v) : v);
    const F = o(d), B = C(
      i(d),
      p,
      F,
      A,
      D,
      P,
      $
    );
    return B && us(B) && B.data === "]" ? i(p.anchor = B) : (bt(), c(p.anchor = u("]"), F, B), B);
  }, I = (d, p, A, D, P, $) => {
    if (hs(
      d.parentElement,
      1
      /* CHILDREN */
    ) || bt(), p.el = null, $) {
      const B = k(d);
      for (; ; ) {
        const w = i(d);
        if (w && w !== B)
          l(w);
        else
          break;
      }
    }
    const v = i(d), F = o(d);
    return l(d), s(
      null,
      p,
      F,
      v,
      A,
      D,
      as(F),
      P
    ), A && (A.vnode.el = p.el, Ei(A, p.el)), v;
  }, k = (d, p = "[", A = "]") => {
    let D = 0;
    for (; d; )
      if (d = i(d), d && us(d) && (d.data === p && D++, d.data === A)) {
        if (D === 0)
          return i(d);
        D--;
      }
    return d;
  }, q = (d, p, A) => {
    const D = p.parentNode;
    D && D.replaceChild(d, p);
    let P = A;
    for (; P; )
      P.vnode.el === p && (P.vnode.el = P.subTree.el = d), P = P.parent;
  }, S = (d) => d.nodeType === 1 && d.tagName === "TEMPLATE";
  return [a, g];
}
const or = "data-allow-mismatch", Cl = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function hs(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(or); )
      e = e.parentElement;
  const s = e && e.getAttribute(or);
  if (s == null)
    return !1;
  if (s === "")
    return !0;
  {
    const n = s.split(",");
    return t === 0 && n.includes("children") ? !0 : n.includes(Cl[t]);
  }
}
Ns().requestIdleCallback;
Ns().cancelIdleCallback;
const Je = (e) => !!e.type.__asyncLoader, Vs = (e) => e.type.__isKeepAlive, vl = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(e, { slots: t }) {
    const s = ss(), n = s.ctx;
    if (!n.renderer)
      return () => {
        const S = t.default && t.default();
        return S && S.length === 1 ? S[0] : S;
      };
    const r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    let o = null;
    const l = s.suspense, {
      renderer: {
        p: c,
        m: u,
        um: a,
        o: { createElement: g }
      }
    } = n, _ = g("div");
    n.activate = (S, d, p, A, D) => {
      const P = S.component;
      u(S, d, p, 0, l), c(
        P.vnode,
        S,
        d,
        p,
        P,
        l,
        A,
        S.slotScopeIds,
        D
      ), ae(() => {
        P.isDeactivated = !1, P.a && jt(P.a);
        const $ = S.props && S.props.onVnodeMounted;
        $ && Se($, P.parent, S);
      }, l);
    }, n.deactivate = (S) => {
      const d = S.component;
      ws(d.m), ws(d.a), u(S, _, null, 1, l), ae(() => {
        d.da && jt(d.da);
        const p = S.props && S.props.onVnodeUnmounted;
        p && Se(p, d.parent, S), d.isDeactivated = !0;
      }, l);
    };
    function C(S) {
      Qs(S), a(S, s, l, !0);
    }
    function N(S) {
      r.forEach((d, p) => {
        const A = bn(
          Je(d) ? d.type.__asyncResolved || {} : d.type
        );
        A && !S(A) && I(p);
      });
    }
    function I(S) {
      const d = r.get(S);
      d && (!o || !it(d, o)) ? C(d) : o && Qs(o), r.delete(S), i.delete(S);
    }
    ms(
      () => [e.include, e.exclude],
      ([S, d]) => {
        S && N((p) => Ht(S, p)), d && N((p) => !Ht(d, p));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let k = null;
    const q = () => {
      k != null && (As(s.subTree.type) ? ae(() => {
        r.set(k, ds(s.subTree));
      }, s.subTree.suspense) : r.set(k, ds(s.subTree)));
    };
    return Ln(q), Dn(q), Hn(() => {
      r.forEach((S) => {
        const { subTree: d, suspense: p } = s, A = ds(d);
        if (S.type === A.type && S.key === A.key) {
          Qs(A);
          const D = A.component.da;
          D && ae(D, p);
          return;
        }
        C(S);
      });
    }), () => {
      if (k = null, !t.default)
        return o = null;
      const S = t.default(), d = S[0];
      if (S.length > 1)
        return o = null, S;
      if (!mt(d) || !(d.shapeFlag & 4) && !(d.shapeFlag & 128))
        return o = null, d;
      let p = ds(d);
      if (p.type === ue)
        return o = null, p;
      const A = p.type, D = bn(
        Je(p) ? p.type.__asyncResolved || {} : A
      ), { include: P, exclude: $, max: v } = e;
      if (P && (!D || !Ht(P, D)) || $ && D && Ht($, D))
        return p.shapeFlag &= -257, o = p, d;
      const F = p.key == null ? A : p.key, B = r.get(F);
      return p.el && (p = Qe(p), d.shapeFlag & 128 && (d.ssContent = p)), k = F, B ? (p.el = B.el, p.component = B.component, p.transition && lt(p, p.transition), p.shapeFlag |= 512, i.delete(F), i.add(F)) : (i.add(F), v && i.size > parseInt(v, 10) && I(i.values().next().value)), p.shapeFlag |= 256, o = p, As(d.type) ? d : p;
    };
  }
}, Sf = vl;
function Ht(e, t) {
  return j(e) ? e.some((s) => Ht(s, t)) : z(e) ? e.split(",").includes(t) : ao(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function wl(e, t) {
  _i(e, "a", t);
}
function Al(e, t) {
  _i(e, "da", t);
}
function _i(e, t, s = ye) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (js(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      Vs(r.parent.vnode) && El(n, t, s, r), r = r.parent;
  }
}
function El(e, t, s, n) {
  const r = js(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  bi(() => {
    Sn(n[t], r);
  }, s);
}
function Qs(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function ds(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function js(e, t, s = ye, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ye();
      const l = ns(s), c = Ie(t, s, e, o);
      return l(), Xe(), c;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const et = (e) => (t, s = ye) => {
  (!Qt || e === "sp") && js(e, (...n) => t(...n), s);
}, Ml = et("bm"), Ln = et("m"), Pl = et(
  "bu"
), Dn = et("u"), Hn = et(
  "bum"
), bi = et("um"), Fl = et(
  "sp"
), Ol = et("rtg"), Rl = et("rtc");
function Il(e, t = ye) {
  js("ec", e, t);
}
const $n = "components", Nl = "directives";
function Cf(e, t) {
  return Vn($n, e, !0, t) || e;
}
const xi = /* @__PURE__ */ Symbol.for("v-ndc");
function vf(e) {
  return z(e) ? Vn($n, e, !1) || e : e || xi;
}
function wf(e) {
  return Vn(Nl, e);
}
function Vn(e, t, s = !0, n = !1) {
  const r = de || ye;
  if (r) {
    const i = r.type;
    if (e === $n) {
      const l = bn(
        i,
        !1
      );
      if (l && (l === t || l === Te(t) || l === Is(Te(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      lr(r[e] || i[e], t) || // global registration
      lr(r.appContext[e], t)
    );
    return !o && n ? i : o;
  }
}
function lr(e, t) {
  return e && (e[t] || e[Te(t)] || e[Is(Te(t))]);
}
function Af(e, t, s, n) {
  let r;
  const i = s, o = j(e);
  if (o || z(e)) {
    const l = o && /* @__PURE__ */ ot(e);
    let c = !1, u = !1;
    l && (c = !/* @__PURE__ */ Me(e), u = /* @__PURE__ */ Ze(e), e = Hs(e)), r = new Array(e.length);
    for (let a = 0, g = e.length; a < g; a++)
      r[a] = t(
        c ? u ? At(Re(e[a])) : Re(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (Q(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, u = l.length; c < u; c++) {
        const a = l[c];
        r[c] = t(e[a], a, c, i);
      }
    }
  else
    r = [];
  return r;
}
function Ef(e, t) {
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    if (j(n))
      for (let r = 0; r < n.length; r++)
        e[n[r].name] = n[r].fn;
    else n && (e[n.name] = n.key ? (...r) => {
      const i = n.fn(...r);
      return i && (i.key = n.key), i;
    } : n.fn);
  }
  return e;
}
function Mf(e, t, s = {}, n, r) {
  if (de.ce || de.parent && Je(de.parent) && de.parent.ce) {
    const u = Object.keys(s).length > 0;
    return t !== "default" && (s.name = t), mn(), yn(
      me,
      null,
      [pe("slot", s, n && n())],
      u ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), mn();
  const o = i && Ti(i(s)), l = s.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, c = yn(
    me,
    {
      key: (l && !Oe(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && n ? "_fb" : "")
    },
    o || (n ? n() : []),
    o && e._ === 1 ? 64 : -2
  );
  return c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), i && i._c && (i._d = !0), c;
}
function Ti(e) {
  return e.some((t) => mt(t) ? !(t.type === ue || t.type === me && !Ti(t.children)) : !0) ? e : null;
}
function Pf(e, t) {
  const s = {};
  for (const n in e)
    s[/[A-Z]/.test(n) ? `on:${n}` : ps(n)] = e[n];
  return s;
}
const hn = (e) => e ? Gi(e) ? Ks(e) : hn(e.parent) : null, kt = (
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
    $parent: (e) => hn(e.parent),
    $root: (e) => hn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ci(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      In(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ll.bind(e.proxy)),
    $watch: (e) => pl.bind(e)
  })
), zs = (e, t) => e !== se && !e.__isScriptSetup && Z(e, t), Ll = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const _ = o[t];
      if (_ !== void 0)
        switch (_) {
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
        if (zs(n, t))
          return o[t] = 1, n[t];
        if (r !== se && Z(r, t))
          return o[t] = 2, r[t];
        if (Z(i, t))
          return o[t] = 3, i[t];
        if (s !== se && Z(s, t))
          return o[t] = 4, s[t];
        dn && (o[t] = 0);
      }
    }
    const u = kt[t];
    let a, g;
    if (u)
      return t === "$attrs" && ge(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (s !== se && Z(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      g = c.config.globalProperties, Z(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return zs(r, t) ? (r[t] = s, !0) : n !== se && Z(n, t) ? (n[t] = s, !0) : Z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let c;
    return !!(s[l] || e !== se && l[0] !== "$" && Z(e, l) || zs(t, l) || Z(i, l) || Z(n, l) || Z(kt, l) || Z(r.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : Z(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function cr(e) {
  return j(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let dn = !0;
function Dl(e) {
  const t = Ci(e), s = e.proxy, n = e.ctx;
  dn = !1, t.beforeCreate && fr(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: u,
    // lifecycle
    created: a,
    beforeMount: g,
    mounted: _,
    beforeUpdate: C,
    updated: N,
    activated: I,
    deactivated: k,
    beforeDestroy: q,
    beforeUnmount: S,
    destroyed: d,
    unmounted: p,
    render: A,
    renderTracked: D,
    renderTriggered: P,
    errorCaptured: $,
    serverPrefetch: v,
    // public API
    expose: F,
    inheritAttrs: B,
    // assets
    components: w,
    directives: W,
    filters: ee
  } = t;
  if (u && Hl(u, n, null), o)
    for (const J in o) {
      const L = o[J];
      G(L) && (n[J] = L.bind(s));
    }
  if (r) {
    const J = r.call(s, s);
    Q(J) && (e.data = /* @__PURE__ */ Fn(J));
  }
  if (dn = !0, i)
    for (const J in i) {
      const L = i[J], ie = G(L) ? L.bind(s, s) : G(L.get) ? L.get.bind(s, s) : Ke, rs = !G(L) && G(L.set) ? L.set.bind(s) : Ke, ct = gc({
        get: ie,
        set: rs
      });
      Object.defineProperty(n, J, {
        enumerable: !0,
        configurable: !0,
        get: () => ct.value,
        set: (Ne) => ct.value = Ne
      });
    }
  if (l)
    for (const J in l)
      Si(l[J], n, s, J);
  if (c) {
    const J = G(c) ? c.call(s) : c;
    Reflect.ownKeys(J).forEach((L) => {
      ul(L, J[L]);
    });
  }
  a && fr(a, e, "c");
  function V(J, L) {
    j(L) ? L.forEach((ie) => J(ie.bind(s))) : L && J(L.bind(s));
  }
  if (V(Ml, g), V(Ln, _), V(Pl, C), V(Dn, N), V(wl, I), V(Al, k), V(Il, $), V(Rl, D), V(Ol, P), V(Hn, S), V(bi, p), V(Fl, v), j(F))
    if (F.length) {
      const J = e.exposed || (e.exposed = {});
      F.forEach((L) => {
        Object.defineProperty(J, L, {
          get: () => s[L],
          set: (ie) => s[L] = ie,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === Ke && (e.render = A), B != null && (e.inheritAttrs = B), w && (e.components = w), W && (e.directives = W), v && yi(e);
}
function Hl(e, t, s = Ke) {
  j(e) && (e = pn(e));
  for (const n in e) {
    const r = e[n];
    let i;
    Q(r) ? "default" in r ? i = gs(
      r.from || n,
      r.default,
      !0
    ) : i = gs(r.from || n) : i = gs(r), /* @__PURE__ */ _e(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function fr(e, t, s) {
  Ie(
    j(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Si(e, t, s, n) {
  let r = n.includes(".") ? fi(s, n) : () => s[n];
  if (z(e)) {
    const i = t[e];
    G(i) && ms(r, i);
  } else if (G(e))
    ms(r, e.bind(s));
  else if (Q(e))
    if (j(e))
      e.forEach((i) => Si(i, t, s, n));
    else {
      const i = G(e.handler) ? e.handler.bind(s) : t[e.handler];
      G(i) && ms(r, i, e);
    }
}
function Ci(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !r.length && !s && !n ? c = t : (c = {}, r.length && r.forEach(
    (u) => vs(c, u, o, !0)
  ), vs(c, t, o)), Q(t) && i.set(t, c), c;
}
function vs(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && vs(e, i, s, !0), r && r.forEach(
    (o) => vs(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = $l[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const $l = {
  data: ar,
  props: ur,
  emits: ur,
  // objects
  methods: $t,
  computed: $t,
  // lifecycle
  beforeCreate: be,
  created: be,
  beforeMount: be,
  mounted: be,
  beforeUpdate: be,
  updated: be,
  beforeDestroy: be,
  beforeUnmount: be,
  destroyed: be,
  unmounted: be,
  activated: be,
  deactivated: be,
  errorCaptured: be,
  serverPrefetch: be,
  // assets
  components: $t,
  directives: $t,
  // watch
  watch: jl,
  // provide / inject
  provide: ar,
  inject: Vl
};
function ar(e, t) {
  return t ? e ? function() {
    return ce(
      G(e) ? e.call(this, this) : e,
      G(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Vl(e, t) {
  return $t(pn(e), pn(t));
}
function pn(e) {
  if (j(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function $t(e, t) {
  return e ? ce(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ur(e, t) {
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ce(
    /* @__PURE__ */ Object.create(null),
    cr(e),
    cr(t ?? {})
  ) : t;
}
function jl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ce(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = be(e[n], t[n]);
  return s;
}
function vi() {
  return {
    app: null,
    config: {
      isNativeTag: Nr,
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
let Bl = 0;
function Kl(e, t) {
  return function(n, r = null) {
    G(n) || (n = ce({}, n)), r != null && !Q(r) && (r = null);
    const i = vi(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const u = i.app = {
      _uid: Bl++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: yc,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...g) {
        return o.has(a) || (a && G(a.install) ? (o.add(a), a.install(u, ...g)) : G(a) && (o.add(a), a(u, ...g))), u;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), u;
      },
      component(a, g) {
        return g ? (i.components[a] = g, u) : i.components[a];
      },
      directive(a, g) {
        return g ? (i.directives[a] = g, u) : i.directives[a];
      },
      mount(a, g, _) {
        if (!c) {
          const C = u._ceVNode || pe(n, r);
          return C.appContext = i, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), g && t ? t(C, a) : e(C, a, _), c = !0, u._container = a, a.__vue_app__ = u, Ks(C.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        c && (Ie(
          l,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, g) {
        return i.provides[a] = g, u;
      },
      runWithContext(a) {
        const g = wt;
        wt = u;
        try {
          return a();
        } finally {
          wt = g;
        }
      }
    };
    return u;
  };
}
let wt = null;
const kl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Te(t)}Modifiers`] || e[`${ze(t)}Modifiers`];
function Ul(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || se;
  let r = s;
  const i = t.startsWith("update:"), o = i && kl(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => z(a) ? a.trim() : a)), o.number && (r = s.map(go)));
  let l, c = n[l = ps(t)] || // also try camelCase event handler (#2249)
  n[l = ps(Te(t))];
  !c && i && (c = n[l = ps(ze(t))]), c && Ie(
    c,
    e,
    6,
    r
  );
  const u = n[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ie(
      u,
      e,
      6,
      r
    );
  }
}
const Wl = /* @__PURE__ */ new WeakMap();
function wi(e, t, s = !1) {
  const n = s ? Wl : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!G(e)) {
    const c = (u) => {
      const a = wi(u, t, !0);
      a && (l = !0, ce(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (Q(e) && n.set(e, null), null) : (j(i) ? i.forEach((c) => o[c] = null) : ce(o, i), Q(e) && n.set(e, o), o);
}
function Bs(e, t) {
  return !e || !zt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, ze(t)) || Z(e, t));
}
function ys(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: u,
    renderCache: a,
    props: g,
    data: _,
    setupState: C,
    ctx: N,
    inheritAttrs: I
  } = e, k = Yt(e);
  let q, S;
  try {
    if (s.shapeFlag & 4) {
      const p = r || n, A = p;
      q = we(
        u.call(
          A,
          p,
          a,
          g,
          C,
          _,
          N
        )
      ), S = l;
    } else {
      const p = t;
      q = we(
        p.length > 1 ? p(
          g,
          { attrs: l, slots: o, emit: c }
        ) : p(
          g,
          null
        )
      ), S = t.props ? l : Gl(l);
    }
  } catch (p) {
    Ut.length = 0, $s(p, e, 1), q = pe(ue);
  }
  let d = q;
  if (S && I !== !1) {
    const p = Object.keys(S), { shapeFlag: A } = d;
    p.length && A & 7 && (i && p.some(Os) && (S = ql(
      S,
      i
    )), d = Qe(d, S, !1, !0));
  }
  return s.dirs && (d = Qe(d, null, !1, !0), d.dirs = d.dirs ? d.dirs.concat(s.dirs) : s.dirs), s.transition && lt(d, s.transition), q = d, Yt(k), q;
}
const Gl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || zt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, ql = (e, t) => {
  const s = {};
  for (const n in e)
    (!Os(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Jl(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: c } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? hr(n, o, u) : !!o;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let g = 0; g < a.length; g++) {
        const _ = a[g];
        if (Ai(o, n, _) && !Bs(u, _))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? hr(n, o, u) : !0 : !!o;
  return !1;
}
function hr(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (Ai(t, e, i) && !Bs(s, i))
      return !0;
  }
  return !1;
}
function Ai(e, t, s) {
  const n = e[s], r = t[s];
  return s === "style" && Q(n) && Q(r) ? !es(n, r) : n !== r;
}
function Ei({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = n, e = r), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Mi = {}, Pi = () => Object.create(Mi), Fi = (e) => Object.getPrototypeOf(e) === Mi;
function Yl(e, t, s, n = !1) {
  const r = {}, i = Pi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Oi(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : /* @__PURE__ */ Xo(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Xl(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ X(r), [c] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let g = 0; g < a.length; g++) {
        let _ = a[g];
        if (Bs(e.emitsOptions, _))
          continue;
        const C = t[_];
        if (c)
          if (Z(i, _))
            C !== i[_] && (i[_] = C, u = !0);
          else {
            const N = Te(_);
            r[N] = gn(
              c,
              l,
              N,
              C,
              e,
              !1
            );
          }
        else
          C !== i[_] && (i[_] = C, u = !0);
      }
    }
  } else {
    Oi(e, t, r, i) && (u = !0);
    let a;
    for (const g in l)
      (!t || // for camelCase
      !Z(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = ze(g)) === g || !Z(t, a))) && (c ? s && // for camelCase
      (s[g] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[g] = gn(
        c,
        l,
        g,
        void 0,
        e,
        !0
      )) : delete r[g]);
    if (i !== l)
      for (const g in i)
        (!t || !Z(t, g)) && (delete i[g], u = !0);
  }
  u && Ge(e.attrs, "set", "");
}
function Oi(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (dt(c))
        continue;
      const u = t[c];
      let a;
      r && Z(r, a = Te(c)) ? !i || !i.includes(a) ? s[a] = u : (l || (l = {}))[a] = u : Bs(e.emitsOptions, c) || (!(c in n) || u !== n[c]) && (n[c] = u, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ X(s), u = l || se;
    for (let a = 0; a < i.length; a++) {
      const g = i[a];
      s[g] = gn(
        r,
        c,
        g,
        u[g],
        e,
        !Z(u, g)
      );
    }
  }
  return o;
}
function gn(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = Z(o, "default");
    if (l && n === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && G(c)) {
        const { propsDefaults: u } = r;
        if (s in u)
          n = u[s];
        else {
          const a = ns(r);
          n = u[s] = c.call(
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
    ] && (n === "" || n === ze(s)) && (n = !0));
  }
  return n;
}
const Zl = /* @__PURE__ */ new WeakMap();
function Ri(e, t, s = !1) {
  const n = s ? Zl : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!G(e)) {
    const a = (g) => {
      c = !0;
      const [_, C] = Ri(g, t, !0);
      ce(o, _), C && l.push(...C);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !c)
    return Q(e) && n.set(e, Tt), Tt;
  if (j(i))
    for (let a = 0; a < i.length; a++) {
      const g = Te(i[a]);
      dr(g) && (o[g] = se);
    }
  else if (i)
    for (const a in i) {
      const g = Te(a);
      if (dr(g)) {
        const _ = i[a], C = o[g] = j(_) || G(_) ? { type: _ } : ce({}, _), N = C.type;
        let I = !1, k = !0;
        if (j(N))
          for (let q = 0; q < N.length; ++q) {
            const S = N[q], d = G(S) && S.name;
            if (d === "Boolean") {
              I = !0;
              break;
            } else d === "String" && (k = !1);
          }
        else
          I = G(N) && N.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = I, C[
          1
          /* shouldCastTrue */
        ] = k, (I || Z(C, "default")) && l.push(g);
      }
    }
  const u = [o, l];
  return Q(e) && n.set(e, u), u;
}
function dr(e) {
  return e[0] !== "$" && !dt(e);
}
const jn = (e) => e === "_" || e === "_ctx" || e === "$stable", Bn = (e) => j(e) ? e.map(we) : [we(e)], Ql = (e, t, s) => {
  if (t._n)
    return t;
  const n = al((...r) => Bn(t(...r)), s);
  return n._c = !1, n;
}, Ii = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (jn(r)) continue;
    const i = e[r];
    if (G(i))
      t[r] = Ql(r, i, n);
    else if (i != null) {
      const o = Bn(i);
      t[r] = () => o;
    }
  }
}, Ni = (e, t) => {
  const s = Bn(t);
  e.slots.default = () => s;
}, Li = (e, t, s) => {
  for (const n in t)
    (s || !jn(n)) && (e[n] = t[n]);
}, zl = (e, t, s) => {
  const n = e.slots = Pi();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Li(n, t, s), s && $r(n, "_", r, !0)) : Ii(t, n);
  } else t && Ni(e, t);
}, ec = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = se;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : Li(r, t, s) : (i = !t.$stable, Ii(t, r)), o = t;
  } else t && (Ni(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !jn(l) && o[l] == null && delete r[l];
}, ae = ji;
function tc(e) {
  return Di(e);
}
function sc(e) {
  return Di(e, Sl);
}
function Di(e, t) {
  const s = Ns();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: u,
    setElementText: a,
    parentNode: g,
    nextSibling: _,
    setScopeId: C = Ke,
    insertStaticContent: N
  } = e, I = (f, h, m, T = null, y = null, b = null, O = void 0, M = null, E = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !it(f, h) && (T = is(f), Ne(f, y, b, !0), f = null), h.patchFlag === -2 && (E = !1, h.dynamicChildren = null);
    const { type: x, ref: K, shapeFlag: R } = h;
    switch (x) {
      case gt:
        k(f, h, m, T);
        break;
      case ue:
        q(f, h, m, T);
        break;
      case _s:
        f == null && S(h, m, T, O);
        break;
      case me:
        w(
          f,
          h,
          m,
          T,
          y,
          b,
          O,
          M,
          E
        );
        break;
      default:
        R & 1 ? A(
          f,
          h,
          m,
          T,
          y,
          b,
          O,
          M,
          E
        ) : R & 6 ? W(
          f,
          h,
          m,
          T,
          y,
          b,
          O,
          M,
          E
        ) : (R & 64 || R & 128) && x.process(
          f,
          h,
          m,
          T,
          y,
          b,
          O,
          M,
          E,
          yt
        );
    }
    K != null && y ? vt(K, f && f.ref, b, h || f, !h) : K == null && f && f.ref != null && vt(f.ref, null, b, f, !0);
  }, k = (f, h, m, T) => {
    if (f == null)
      n(
        h.el = l(h.children),
        m,
        T
      );
    else {
      const y = h.el = f.el;
      h.children !== f.children && u(y, h.children);
    }
  }, q = (f, h, m, T) => {
    f == null ? n(
      h.el = c(h.children || ""),
      m,
      T
    ) : h.el = f.el;
  }, S = (f, h, m, T) => {
    [f.el, f.anchor] = N(
      f.children,
      h,
      m,
      T,
      f.el,
      f.anchor
    );
  }, d = ({ el: f, anchor: h }, m, T) => {
    let y;
    for (; f && f !== h; )
      y = _(f), n(f, m, T), f = y;
    n(h, m, T);
  }, p = ({ el: f, anchor: h }) => {
    let m;
    for (; f && f !== h; )
      m = _(f), r(f), f = m;
    r(h);
  }, A = (f, h, m, T, y, b, O, M, E) => {
    if (h.type === "svg" ? O = "svg" : h.type === "math" && (O = "mathml"), f == null)
      D(
        h,
        m,
        T,
        y,
        b,
        O,
        M,
        E
      );
    else {
      const x = f.el && f.el._isVueCE ? f.el : null;
      try {
        x && x._beginPatch(), v(
          f,
          h,
          y,
          b,
          O,
          M,
          E
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, D = (f, h, m, T, y, b, O, M) => {
    let E, x;
    const { props: K, shapeFlag: R, transition: H, dirs: U } = f;
    if (E = f.el = o(
      f.type,
      b,
      K && K.is,
      K
    ), R & 8 ? a(E, f.children) : R & 16 && $(
      f.children,
      E,
      null,
      T,
      y,
      en(f, b),
      O,
      M
    ), U && $e(f, null, T, "created"), P(E, f, f.scopeId, O, T), K) {
      for (const te in K)
        te !== "value" && !dt(te) && i(E, te, null, K[te], b, T);
      "value" in K && i(E, "value", null, K.value, b), (x = K.onVnodeBeforeMount) && Se(x, T, f);
    }
    U && $e(f, null, T, "beforeMount");
    const Y = Hi(y, H);
    Y && H.beforeEnter(E), n(E, h, m), ((x = K && K.onVnodeMounted) || Y || U) && ae(() => {
      x && Se(x, T, f), Y && H.enter(E), U && $e(f, null, T, "mounted");
    }, y);
  }, P = (f, h, m, T, y) => {
    if (m && C(f, m), T)
      for (let b = 0; b < T.length; b++)
        C(f, T[b]);
    if (y) {
      let b = y.subTree;
      if (h === b || As(b.type) && (b.ssContent === h || b.ssFallback === h)) {
        const O = y.vnode;
        P(
          f,
          O,
          O.scopeId,
          O.slotScopeIds,
          y.parent
        );
      }
    }
  }, $ = (f, h, m, T, y, b, O, M, E = 0) => {
    for (let x = E; x < f.length; x++) {
      const K = f[x] = M ? We(f[x]) : we(f[x]);
      I(
        null,
        K,
        h,
        m,
        T,
        y,
        b,
        O,
        M
      );
    }
  }, v = (f, h, m, T, y, b, O) => {
    const M = h.el = f.el;
    let { patchFlag: E, dynamicChildren: x, dirs: K } = h;
    E |= f.patchFlag & 16;
    const R = f.props || se, H = h.props || se;
    let U;
    if (m && ft(m, !1), (U = H.onVnodeBeforeUpdate) && Se(U, m, h, f), K && $e(h, f, m, "beforeUpdate"), m && ft(m, !0), (R.innerHTML && H.innerHTML == null || R.textContent && H.textContent == null) && a(M, ""), x ? F(
      f.dynamicChildren,
      x,
      M,
      m,
      T,
      en(h, y),
      b
    ) : O || L(
      f,
      h,
      M,
      null,
      m,
      T,
      en(h, y),
      b,
      !1
    ), E > 0) {
      if (E & 16)
        B(M, R, H, m, y);
      else if (E & 2 && R.class !== H.class && i(M, "class", null, H.class, y), E & 4 && i(M, "style", R.style, H.style, y), E & 8) {
        const Y = h.dynamicProps;
        for (let te = 0; te < Y.length; te++) {
          const ne = Y[te], le = R[ne], fe = H[ne];
          (fe !== le || ne === "value") && i(M, ne, le, fe, y, m);
        }
      }
      E & 1 && f.children !== h.children && a(M, h.children);
    } else !O && x == null && B(M, R, H, m, y);
    ((U = H.onVnodeUpdated) || K) && ae(() => {
      U && Se(U, m, h, f), K && $e(h, f, m, "updated");
    }, T);
  }, F = (f, h, m, T, y, b, O) => {
    for (let M = 0; M < h.length; M++) {
      const E = f[M], x = h[M], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === me || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !it(E, x) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 198) ? g(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      I(
        E,
        x,
        K,
        null,
        T,
        y,
        b,
        O,
        !0
      );
    }
  }, B = (f, h, m, T, y) => {
    if (h !== m) {
      if (h !== se)
        for (const b in h)
          !dt(b) && !(b in m) && i(
            f,
            b,
            h[b],
            null,
            y,
            T
          );
      for (const b in m) {
        if (dt(b)) continue;
        const O = m[b], M = h[b];
        O !== M && b !== "value" && i(f, b, M, O, y, T);
      }
      "value" in m && i(f, "value", h.value, m.value, y);
    }
  }, w = (f, h, m, T, y, b, O, M, E) => {
    const x = h.el = f ? f.el : l(""), K = h.anchor = f ? f.anchor : l("");
    let { patchFlag: R, dynamicChildren: H, slotScopeIds: U } = h;
    U && (M = M ? M.concat(U) : U), f == null ? (n(x, m, T), n(K, m, T), $(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      m,
      K,
      y,
      b,
      O,
      M,
      E
    )) : R > 0 && R & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === H.length ? (F(
      f.dynamicChildren,
      H,
      m,
      y,
      b,
      O,
      M
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || y && h === y.subTree) && Kn(
      f,
      h,
      !0
      /* shallow */
    )) : L(
      f,
      h,
      m,
      K,
      y,
      b,
      O,
      M,
      E
    );
  }, W = (f, h, m, T, y, b, O, M, E) => {
    h.slotScopeIds = M, f == null ? h.shapeFlag & 512 ? y.ctx.activate(
      h,
      m,
      T,
      O,
      E
    ) : ee(
      h,
      m,
      T,
      y,
      b,
      O,
      E
    ) : oe(f, h, E);
  }, ee = (f, h, m, T, y, b, O) => {
    const M = f.component = Wi(
      f,
      T,
      y
    );
    if (Vs(f) && (M.ctx.renderer = yt), qi(M, !1, O), M.asyncDep) {
      if (y && y.registerDep(M, V, O), !f.el) {
        const E = M.subTree = pe(ue);
        q(null, E, h, m), f.placeholder = E.el;
      }
    } else
      V(
        M,
        f,
        h,
        m,
        y,
        b,
        O
      );
  }, oe = (f, h, m) => {
    const T = h.component = f.component;
    if (Jl(f, h, m))
      if (T.asyncDep && !T.asyncResolved) {
        J(T, h, m);
        return;
      } else
        T.next = h, T.update();
    else
      h.el = f.el, T.vnode = h;
  }, V = (f, h, m, T, y, b, O) => {
    const M = () => {
      if (f.isMounted) {
        let { next: R, bu: H, u: U, parent: Y, vnode: te } = f;
        {
          const Ce = $i(f);
          if (Ce) {
            R && (R.el = te.el, J(f, R, O)), Ce.asyncDep.then(() => {
              ae(() => {
                f.isUnmounted || x();
              }, y);
            });
            return;
          }
        }
        let ne = R, le;
        ft(f, !1), R ? (R.el = te.el, J(f, R, O)) : R = te, H && jt(H), (le = R.props && R.props.onVnodeBeforeUpdate) && Se(le, Y, R, te), ft(f, !0);
        const fe = ys(f), Pe = f.subTree;
        f.subTree = fe, I(
          Pe,
          fe,
          // parent may have changed if it's in a teleport
          g(Pe.el),
          // anchor may have changed if it's in a fragment
          is(Pe),
          f,
          y,
          b
        ), R.el = fe.el, ne === null && Ei(f, fe.el), U && ae(U, y), (le = R.props && R.props.onVnodeUpdated) && ae(
          () => Se(le, Y, R, te),
          y
        );
      } else {
        let R;
        const { el: H, props: U } = h, { bm: Y, m: te, parent: ne, root: le, type: fe } = f, Pe = Je(h);
        if (ft(f, !1), Y && jt(Y), !Pe && (R = U && U.onVnodeBeforeMount) && Se(R, ne, h), ft(f, !0), H && Ws) {
          const Ce = () => {
            f.subTree = ys(f), Ws(
              H,
              f.subTree,
              f,
              y,
              null
            );
          };
          Pe && fe.__asyncHydrate ? fe.__asyncHydrate(
            H,
            f,
            Ce
          ) : Ce();
        } else {
          le.ce && le.ce._hasShadowRoot() && le.ce._injectChildStyle(
            fe,
            f.parent ? f.parent.type : void 0
          );
          const Ce = f.subTree = ys(f);
          I(
            null,
            Ce,
            m,
            T,
            f,
            y,
            b
          ), h.el = Ce.el;
        }
        if (te && ae(te, y), !Pe && (R = U && U.onVnodeMounted)) {
          const Ce = h;
          ae(
            () => Se(R, ne, Ce),
            y
          );
        }
        (h.shapeFlag & 256 || ne && Je(ne.vnode) && ne.vnode.shapeFlag & 256) && f.a && ae(f.a, y), f.isMounted = !0, h = m = T = null;
      }
    };
    f.scope.on();
    const E = f.effect = new kr(M);
    f.scope.off();
    const x = f.update = E.run.bind(E), K = f.job = E.runIfDirty.bind(E);
    K.i = f, K.id = f.uid, E.scheduler = () => In(K), ft(f, !0), x();
  }, J = (f, h, m) => {
    h.component = f;
    const T = f.vnode.props;
    f.vnode = h, f.next = null, Xl(f, h.props, T, m), ec(f, h.children, m), Ye(), zn(f), Xe();
  }, L = (f, h, m, T, y, b, O, M, E = !1) => {
    const x = f && f.children, K = f ? f.shapeFlag : 0, R = h.children, { patchFlag: H, shapeFlag: U } = h;
    if (H > 0) {
      if (H & 128) {
        rs(
          x,
          R,
          m,
          T,
          y,
          b,
          O,
          M,
          E
        );
        return;
      } else if (H & 256) {
        ie(
          x,
          R,
          m,
          T,
          y,
          b,
          O,
          M,
          E
        );
        return;
      }
    }
    U & 8 ? (K & 16 && Ft(x, y, b), R !== x && a(m, R)) : K & 16 ? U & 16 ? rs(
      x,
      R,
      m,
      T,
      y,
      b,
      O,
      M,
      E
    ) : Ft(x, y, b, !0) : (K & 8 && a(m, ""), U & 16 && $(
      R,
      m,
      T,
      y,
      b,
      O,
      M,
      E
    ));
  }, ie = (f, h, m, T, y, b, O, M, E) => {
    f = f || Tt, h = h || Tt;
    const x = f.length, K = h.length, R = Math.min(x, K);
    let H;
    for (H = 0; H < R; H++) {
      const U = h[H] = E ? We(h[H]) : we(h[H]);
      I(
        f[H],
        U,
        m,
        null,
        y,
        b,
        O,
        M,
        E
      );
    }
    x > K ? Ft(
      f,
      y,
      b,
      !0,
      !1,
      R
    ) : $(
      h,
      m,
      T,
      y,
      b,
      O,
      M,
      E,
      R
    );
  }, rs = (f, h, m, T, y, b, O, M, E) => {
    let x = 0;
    const K = h.length;
    let R = f.length - 1, H = K - 1;
    for (; x <= R && x <= H; ) {
      const U = f[x], Y = h[x] = E ? We(h[x]) : we(h[x]);
      if (it(U, Y))
        I(
          U,
          Y,
          m,
          null,
          y,
          b,
          O,
          M,
          E
        );
      else
        break;
      x++;
    }
    for (; x <= R && x <= H; ) {
      const U = f[R], Y = h[H] = E ? We(h[H]) : we(h[H]);
      if (it(U, Y))
        I(
          U,
          Y,
          m,
          null,
          y,
          b,
          O,
          M,
          E
        );
      else
        break;
      R--, H--;
    }
    if (x > R) {
      if (x <= H) {
        const U = H + 1, Y = U < K ? h[U].el : T;
        for (; x <= H; )
          I(
            null,
            h[x] = E ? We(h[x]) : we(h[x]),
            m,
            Y,
            y,
            b,
            O,
            M,
            E
          ), x++;
      }
    } else if (x > H)
      for (; x <= R; )
        Ne(f[x], y, b, !0), x++;
    else {
      const U = x, Y = x, te = /* @__PURE__ */ new Map();
      for (x = Y; x <= H; x++) {
        const ve = h[x] = E ? We(h[x]) : we(h[x]);
        ve.key != null && te.set(ve.key, x);
      }
      let ne, le = 0;
      const fe = H - Y + 1;
      let Pe = !1, Ce = 0;
      const Ot = new Array(fe);
      for (x = 0; x < fe; x++) Ot[x] = 0;
      for (x = U; x <= R; x++) {
        const ve = f[x];
        if (le >= fe) {
          Ne(ve, y, b, !0);
          continue;
        }
        let Le;
        if (ve.key != null)
          Le = te.get(ve.key);
        else
          for (ne = Y; ne <= H; ne++)
            if (Ot[ne - Y] === 0 && it(ve, h[ne])) {
              Le = ne;
              break;
            }
        Le === void 0 ? Ne(ve, y, b, !0) : (Ot[Le - Y] = x + 1, Le >= Ce ? Ce = Le : Pe = !0, I(
          ve,
          h[Le],
          m,
          null,
          y,
          b,
          O,
          M,
          E
        ), le++);
      }
      const Gn = Pe ? nc(Ot) : Tt;
      for (ne = Gn.length - 1, x = fe - 1; x >= 0; x--) {
        const ve = Y + x, Le = h[ve], qn = h[ve + 1], Jn = ve + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          qn.el || Vi(qn)
        ) : T;
        Ot[x] === 0 ? I(
          null,
          Le,
          m,
          Jn,
          y,
          b,
          O,
          M,
          E
        ) : Pe && (ne < 0 || x !== Gn[ne] ? ct(Le, m, Jn, 2) : ne--);
      }
    }
  }, ct = (f, h, m, T, y = null) => {
    const { el: b, type: O, transition: M, children: E, shapeFlag: x } = f;
    if (x & 6) {
      ct(f.component.subTree, h, m, T);
      return;
    }
    if (x & 128) {
      f.suspense.move(h, m, T);
      return;
    }
    if (x & 64) {
      O.move(f, h, m, yt);
      return;
    }
    if (O === me) {
      n(b, h, m);
      for (let R = 0; R < E.length; R++)
        ct(E[R], h, m, T);
      n(f.anchor, h, m);
      return;
    }
    if (O === _s) {
      d(f, h, m);
      return;
    }
    if (T !== 2 && x & 1 && M)
      if (T === 0)
        M.beforeEnter(b), n(b, h, m), ae(() => M.enter(b), y);
      else {
        const { leave: R, delayLeave: H, afterLeave: U } = M, Y = () => {
          f.ctx.isUnmounted ? r(b) : n(b, h, m);
        }, te = () => {
          b._isLeaving && b[Ve](
            !0
            /* cancelled */
          ), R(b, () => {
            Y(), U && U();
          });
        };
        H ? H(b, Y, te) : te();
      }
    else
      n(b, h, m);
  }, Ne = (f, h, m, T = !1, y = !1) => {
    const {
      type: b,
      props: O,
      ref: M,
      children: E,
      dynamicChildren: x,
      shapeFlag: K,
      patchFlag: R,
      dirs: H,
      cacheIndex: U,
      memo: Y
    } = f;
    if (R === -2 && (y = !1), M != null && (Ye(), vt(M, null, m, f, !0), Xe()), U != null && (h.renderCache[U] = void 0), K & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const te = K & 1 && H, ne = !Je(f);
    let le;
    if (ne && (le = O && O.onVnodeBeforeUnmount) && Se(le, h, f), K & 6)
      co(f.component, m, T);
    else {
      if (K & 128) {
        f.suspense.unmount(m, T);
        return;
      }
      te && $e(f, null, h, "beforeUnmount"), K & 64 ? f.type.remove(
        f,
        h,
        m,
        yt,
        T
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== me || R > 0 && R & 64) ? Ft(
        x,
        h,
        m,
        !1,
        !0
      ) : (b === me && R & 384 || !y && K & 16) && Ft(E, h, m), T && Un(f);
    }
    const fe = Y != null && U == null;
    (ne && (le = O && O.onVnodeUnmounted) || te || fe) && ae(() => {
      le && Se(le, h, f), te && $e(f, null, h, "unmounted"), fe && (f.el = null);
    }, m);
  }, Un = (f) => {
    const { type: h, el: m, anchor: T, transition: y } = f;
    if (h === me) {
      lo(m, T);
      return;
    }
    if (h === _s) {
      p(f);
      return;
    }
    const b = () => {
      r(m), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (f.shapeFlag & 1 && y && !y.persisted) {
      const { leave: O, delayLeave: M } = y, E = () => O(m, b);
      M ? M(f.el, b, E) : E();
    } else
      b();
  }, lo = (f, h) => {
    let m;
    for (; f !== h; )
      m = _(f), r(f), f = m;
    r(h);
  }, co = (f, h, m) => {
    const { bum: T, scope: y, job: b, subTree: O, um: M, m: E, a: x } = f;
    ws(E), ws(x), T && jt(T), y.stop(), b && (b.flags |= 8, Ne(O, f, h, m)), M && ae(M, h), ae(() => {
      f.isUnmounted = !0;
    }, h);
  }, Ft = (f, h, m, T = !1, y = !1, b = 0) => {
    for (let O = b; O < f.length; O++)
      Ne(f[O], h, m, T, y);
  }, is = (f) => {
    if (f.shapeFlag & 6)
      return is(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = _(f.anchor || f.el), m = h && h[ai];
    return m ? _(m) : h;
  };
  let ks = !1;
  const Wn = (f, h, m) => {
    let T;
    f == null ? h._vnode && (Ne(h._vnode, null, null, !0), T = h._vnode.component) : I(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      m
    ), h._vnode = f, ks || (ks = !0, zn(T), Ss(), ks = !1);
  }, yt = {
    p: I,
    um: Ne,
    m: ct,
    r: Un,
    mt: ee,
    mc: $,
    pc: L,
    pbc: F,
    n: is,
    o: e
  };
  let Us, Ws;
  return t && ([Us, Ws] = t(
    yt
  )), {
    render: Wn,
    hydrate: Us,
    createApp: Kl(Wn, Us)
  };
}
function en({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ft({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Hi(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Kn(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (j(n) && j(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = We(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && Kn(o, l)), l.type === gt && (l.patchFlag === -1 && (l = r[i] = We(l)), l.el = o.el), l.type === ue && !l.el && (l.el = o.el);
    }
}
function nc(e) {
  const t = e.slice(), s = [0];
  let n, r, i, o, l;
  const c = e.length;
  for (n = 0; n < c; n++) {
    const u = e[n];
    if (u !== 0) {
      if (r = s[s.length - 1], e[r] < u) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        l = i + o >> 1, e[s[l]] < u ? i = l + 1 : o = l;
      u < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = t[o];
  return s;
}
function $i(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : $i(t);
}
function ws(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Vi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Vi(t.subTree) : null;
}
const As = (e) => e.__isSuspense;
function ji(e, t) {
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : fl(e);
}
const me = /* @__PURE__ */ Symbol.for("v-fgt"), gt = /* @__PURE__ */ Symbol.for("v-txt"), ue = /* @__PURE__ */ Symbol.for("v-cmt"), _s = /* @__PURE__ */ Symbol.for("v-stc"), Ut = [];
let Ae = null;
function mn(e = !1) {
  Ut.push(Ae = e ? null : []);
}
function rc() {
  Ut.pop(), Ae = Ut[Ut.length - 1] || null;
}
let Zt = 1;
function Es(e, t = !1) {
  Zt += e, e < 0 && Ae && t && (Ae.hasOnce = !0);
}
function Bi(e) {
  return e.dynamicChildren = Zt > 0 ? Ae || Tt : null, rc(), Zt > 0 && Ae && Ae.push(e), e;
}
function Ff(e, t, s, n, r, i) {
  return Bi(
    ki(
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
function yn(e, t, s, n, r) {
  return Bi(
    pe(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function mt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function it(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ki = ({ key: e }) => e ?? null, bs = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? z(e) || /* @__PURE__ */ _e(e) || G(e) ? { i: de, r: e, k: t, f: !!s } : e : null);
function ki(e, t = null, s = null, n = 0, r = null, i = e === me ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ki(t),
    ref: t && bs(t),
    scopeId: li,
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
    ctx: de
  };
  return l ? (kn(c, s), i & 128 && e.normalize(c)) : s && (c.shapeFlag |= z(s) ? 8 : 16), Zt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ae && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ae.push(c), c;
}
const pe = ic;
function ic(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === xi) && (e = ue), mt(e)) {
    const l = Qe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && kn(l, s), Zt > 0 && !i && Ae && (l.shapeFlag & 6 ? Ae[Ae.indexOf(e)] = l : Ae.push(l)), l.patchFlag = -2, l;
  }
  if (pc(e) && (e = e.__vccOpts), t) {
    t = oc(t);
    let { class: l, style: c } = t;
    l && !z(l) && (t.class = Ds(l)), Q(c) && (/* @__PURE__ */ Rn(c) && !j(c) && (c = ce({}, c)), t.style = Ls(c));
  }
  const o = z(e) ? 1 : As(e) ? 128 : ui(e) ? 64 : Q(e) ? 4 : G(e) ? 2 : 0;
  return ki(
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
function oc(e) {
  return e ? /* @__PURE__ */ Rn(e) || Fi(e) ? ce({}, e) : e : null;
}
function Qe(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e, u = t ? cc(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Ki(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? j(i) ? i.concat(bs(t)) : [i, bs(t)] : bs(t)
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
    patchFlag: t && e.type !== me ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Qe(e.ssContent),
    ssFallback: e.ssFallback && Qe(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && n && lt(
    a,
    c.clone(a)
  ), a;
}
function Ui(e = " ", t = 0) {
  return pe(gt, null, e, t);
}
function lc(e = "", t = !1) {
  return t ? (mn(), yn(ue, null, e)) : pe(ue, null, e);
}
function we(e) {
  return e == null || typeof e == "boolean" ? pe(ue) : j(e) ? pe(
    me,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : mt(e) ? We(e) : pe(gt, null, String(e));
}
function We(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qe(e);
}
function kn(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (j(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), kn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Fi(t) ? t._ctx = de : r === 3 && de && (de.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else G(t) ? (t = { default: t, _ctx: de }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Ui(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function cc(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Ds([t.class, n.class]));
      else if (r === "style")
        t.style = Ls([t.style, n.style]);
      else if (zt(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(j(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Os(r) && (t[r] = o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Se(e, t, s, n = null) {
  Ie(e, t, 7, [
    s,
    n
  ]);
}
const fc = vi();
let ac = 0;
function Wi(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || fc, i = {
    uid: ac++,
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
    scope: new Fo(
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
    propsOptions: Ri(n, r),
    emitsOptions: wi(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: se,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: se,
    data: se,
    props: se,
    attrs: se,
    slots: se,
    refs: se,
    setupState: se,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Ul.bind(null, i), e.ce && e.ce(i), i;
}
let ye = null;
const ss = () => ye || de;
let Ms, _n;
{
  const e = Ns(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Ms = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ye = s
  ), _n = t(
    "__VUE_SSR_SETTERS__",
    (s) => Qt = s
  );
}
const ns = (e) => {
  const t = ye;
  return Ms(e), e.scope.on(), () => {
    e.scope.off(), Ms(t);
  };
}, pr = () => {
  ye && ye.scope.off(), Ms(null);
};
function Gi(e) {
  return e.vnode.shapeFlag & 4;
}
let Qt = !1;
function qi(e, t = !1, s = !1) {
  t && _n(t);
  const { props: n, children: r } = e.vnode, i = Gi(e);
  Yl(e, n, i, t), zl(e, r, s || t);
  const o = i ? uc(e, t) : void 0;
  return t && _n(!1), o;
}
function uc(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ll);
  const { setup: n } = s;
  if (n) {
    Ye();
    const r = e.setupContext = n.length > 1 ? dc(e) : null, i = ns(e), o = ts(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Lr(o);
    if (Xe(), i(), (l || e.sp) && !Je(e) && yi(e), l) {
      if (o.then(pr, pr), t)
        return o.then((c) => {
          gr(e, c);
        }).catch((c) => {
          $s(c, e, 0);
        });
      e.asyncDep = o;
    } else
      gr(e, o);
  } else
    Ji(e);
}
function gr(e, t, s) {
  G(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) && (e.setupState = ni(t)), Ji(e);
}
function Ji(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Ke);
  {
    const r = ns(e);
    Ye();
    try {
      Dl(e);
    } finally {
      Xe(), r();
    }
  }
}
const hc = {
  get(e, t) {
    return ge(e, "get", ""), e[t];
  }
};
function dc(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, hc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ks(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ni(Zo(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in kt)
        return kt[s](e);
    },
    has(t, s) {
      return s in t || s in kt;
    }
  })) : e.proxy;
}
function bn(e, t = !0) {
  return G(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function pc(e) {
  return G(e) && "__vccOpts" in e;
}
const gc = (e, t) => /* @__PURE__ */ nl(e, t, Qt);
function mc(e, t, s) {
  try {
    Es(-1);
    const n = arguments.length;
    return n === 2 ? Q(t) && !j(t) ? mt(t) ? pe(e, null, [t]) : pe(e, t) : pe(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && mt(s) && (s = [s]), pe(e, t, s));
  } finally {
    Es(1);
  }
}
const yc = "3.5.34", _c = {
  createComponentInstance: Wi,
  setupComponent: qi,
  renderComponentRoot: ys,
  setCurrentRenderingInstance: Yt,
  isVNode: mt,
  normalizeVNode: we
}, Of = _c;
let xn;
const mr = typeof window < "u" && window.trustedTypes;
if (mr)
  try {
    xn = /* @__PURE__ */ mr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Yi = xn ? (e) => xn.createHTML(e) : (e) => e, bc = "http://www.w3.org/2000/svg", xc = "http://www.w3.org/1998/Math/MathML", Ue = typeof document < "u" ? document : null, yr = Ue && /* @__PURE__ */ Ue.createElement("template"), Tc = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Ue.createElementNS(bc, e) : t === "mathml" ? Ue.createElementNS(xc, e) : s ? Ue.createElement(e, { is: s }) : Ue.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Ue.createTextNode(e),
  createComment: (e) => Ue.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ue.querySelector(e),
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
      yr.innerHTML = Yi(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = yr.content;
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
}, tt = "transition", Nt = "animation", Et = /* @__PURE__ */ Symbol("_vtc"), Xi = {
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
}, Zi = /* @__PURE__ */ ce(
  {},
  di,
  Xi
), Sc = (e) => (e.displayName = "Transition", e.props = Zi, e), Rf = /* @__PURE__ */ Sc(
  (e, { slots: t }) => mc(bl, Qi(e), t)
), at = (e, t = []) => {
  j(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, _r = (e) => e ? j(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Qi(e) {
  const t = {};
  for (const w in e)
    w in Xi || (t[w] = e[w]);
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
    appearActiveClass: u = o,
    appearToClass: a = l,
    leaveFromClass: g = `${s}-leave-from`,
    leaveActiveClass: _ = `${s}-leave-active`,
    leaveToClass: C = `${s}-leave-to`
  } = e, N = Cc(r), I = N && N[0], k = N && N[1], {
    onBeforeEnter: q,
    onEnter: S,
    onEnterCancelled: d,
    onLeave: p,
    onLeaveCancelled: A,
    onBeforeAppear: D = q,
    onAppear: P = S,
    onAppearCancelled: $ = d
  } = t, v = (w, W, ee, oe) => {
    w._enterCancelled = oe, nt(w, W ? a : l), nt(w, W ? u : o), ee && ee();
  }, F = (w, W) => {
    w._isLeaving = !1, nt(w, g), nt(w, C), nt(w, _), W && W();
  }, B = (w) => (W, ee) => {
    const oe = w ? P : S, V = () => v(W, w, ee);
    at(oe, [W, V]), br(() => {
      nt(W, w ? c : i), De(W, w ? a : l), _r(oe) || xr(W, n, I, V);
    });
  };
  return ce(t, {
    onBeforeEnter(w) {
      at(q, [w]), De(w, i), De(w, o);
    },
    onBeforeAppear(w) {
      at(D, [w]), De(w, c), De(w, u);
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(w, W) {
      w._isLeaving = !0;
      const ee = () => F(w, W);
      De(w, g), w._enterCancelled ? (De(w, _), Tn(w)) : (Tn(w), De(w, _)), br(() => {
        w._isLeaving && (nt(w, g), De(w, C), _r(p) || xr(w, n, k, ee));
      }), at(p, [w, ee]);
    },
    onEnterCancelled(w) {
      v(w, !1, void 0, !0), at(d, [w]);
    },
    onAppearCancelled(w) {
      v(w, !0, void 0, !0), at($, [w]);
    },
    onLeaveCancelled(w) {
      F(w), at(A, [w]);
    }
  });
}
function Cc(e) {
  if (e == null)
    return null;
  if (Q(e))
    return [tn(e.enter), tn(e.leave)];
  {
    const t = tn(e);
    return [t, t];
  }
}
function tn(e) {
  return mo(e);
}
function De(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[Et] || (e[Et] = /* @__PURE__ */ new Set())).add(t);
}
function nt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[Et];
  s && (s.delete(t), s.size || (e[Et] = void 0));
}
function br(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let vc = 0;
function xr(e, t, s, n) {
  const r = e._endId = ++vc, i = () => {
    r === e._endId && n();
  };
  if (s != null)
    return setTimeout(i, s);
  const { type: o, timeout: l, propCount: c } = zi(e, t);
  if (!o)
    return n();
  const u = o + "end";
  let a = 0;
  const g = () => {
    e.removeEventListener(u, _), i();
  }, _ = (C) => {
    C.target === e && ++a >= c && g();
  };
  setTimeout(() => {
    a < c && g();
  }, l + 1), e.addEventListener(u, _);
}
function zi(e, t) {
  const s = window.getComputedStyle(e), n = (N) => (s[N] || "").split(", "), r = n(`${tt}Delay`), i = n(`${tt}Duration`), o = Tr(r, i), l = n(`${Nt}Delay`), c = n(`${Nt}Duration`), u = Tr(l, c);
  let a = null, g = 0, _ = 0;
  t === tt ? o > 0 && (a = tt, g = o, _ = i.length) : t === Nt ? u > 0 && (a = Nt, g = u, _ = c.length) : (g = Math.max(o, u), a = g > 0 ? o > u ? tt : Nt : null, _ = a ? a === tt ? i.length : c.length : 0);
  const C = a === tt && /\b(?:transform|all)(?:,|$)/.test(
    n(`${tt}Property`).toString()
  );
  return {
    type: a,
    timeout: g,
    propCount: _,
    hasTransform: C
  };
}
function Tr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => Sr(s) + Sr(e[n])));
}
function Sr(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Tn(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function wc(e, t, s) {
  const n = e[Et];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Ps = /* @__PURE__ */ Symbol("_vod"), eo = /* @__PURE__ */ Symbol("_vsh"), Ac = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[Ps] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : Lt(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), Lt(e, !0), n.enter(e)) : n.leave(e, () => {
      Lt(e, !1);
    }) : Lt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Lt(e, t);
  }
};
function Lt(e, t) {
  e.style.display = t ? e[Ps] : "none", e[eo] = !t;
}
function Ec() {
  Ac.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Mc = /* @__PURE__ */ Symbol(""), Pc = /(?:^|;)\s*display\s*:/;
function Fc(e, t, s) {
  const n = e.style, r = z(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (z(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Vt(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Vt(n, o, "");
    for (const o in s) {
      o === "display" && (i = !0);
      const l = s[o];
      l != null ? Rc(
        e,
        o,
        !z(t) && t ? t[o] : void 0,
        l
      ) || Vt(n, o, l) : Vt(n, o, "");
    }
  } else if (r) {
    if (t !== s) {
      const o = n[Mc];
      o && (s += ";" + o), n.cssText = s, i = Pc.test(s);
    }
  } else t && e.removeAttribute("style");
  Ps in e && (e[Ps] = i ? n.display : "", e[eo] && (n.display = "none"));
}
const Cr = /\s*!important$/;
function Vt(e, t, s) {
  if (j(s))
    s.forEach((n) => Vt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Oc(e, t);
    Cr.test(s) ? e.setProperty(
      ze(n),
      s.replace(Cr, ""),
      "important"
    ) : e[n] = s;
  }
}
const vr = ["Webkit", "Moz", "ms"], sn = {};
function Oc(e, t) {
  const s = sn[t];
  if (s)
    return s;
  let n = Te(t);
  if (n !== "filter" && n in e)
    return sn[t] = n;
  n = Is(n);
  for (let r = 0; r < vr.length; r++) {
    const i = vr[r] + n;
    if (i in e)
      return sn[t] = i;
  }
  return t;
}
function Rc(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && z(n) && s === n;
}
const wr = "http://www.w3.org/1999/xlink";
function Ar(e, t, s, n, r, i = Co(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(wr, t.slice(6, t.length)) : e.setAttributeNS(wr, t, s) : s == null || i && !jr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Oe(s) ? String(s) : s
  );
}
function Er(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Yi(s) : s);
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
    l === "boolean" ? s = jr(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function Ic(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Nc(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Mr = /* @__PURE__ */ Symbol("_vei");
function Lc(e, t, s, n, r = null) {
  const i = e[Mr] || (e[Mr] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, c] = Dc(t);
    if (n) {
      const u = i[t] = Vc(
        n,
        r
      );
      Ic(e, l, u, c);
    } else o && (Nc(e, l, o, c), i[t] = void 0);
  }
}
const Pr = /(?:Once|Passive|Capture)$/;
function Dc(e) {
  let t;
  if (Pr.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Pr); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ze(e.slice(2)), t];
}
let nn = 0;
const Hc = /* @__PURE__ */ Promise.resolve(), $c = () => nn || (Hc.then(() => nn = 0), nn = Date.now());
function Vc(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Ie(
      jc(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = $c(), s;
}
function jc(e, t) {
  if (j(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const Fr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Bc = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? wc(e, n, o) : t === "style" ? Fc(e, s, n) : zt(t) ? Os(t) || Lc(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kc(e, t, n, o)) ? (Er(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ar(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (kc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !z(n))) ? Er(e, Te(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ar(e, t, n, o));
};
function Kc(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Fr(t) && G(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Fr(t) && z(s) ? !1 : t in e;
}
function kc(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Te(t);
  return Array.isArray(s) ? s.some((r) => Te(r) === n) : Object.keys(s).some((r) => Te(r) === n);
}
const to = /* @__PURE__ */ new WeakMap(), so = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ Symbol("_moveCb"), Or = /* @__PURE__ */ Symbol("_enterCb"), Uc = (e) => (delete e.props.mode, e), Wc = /* @__PURE__ */ Uc({
  name: "TransitionGroup",
  props: /* @__PURE__ */ ce({}, Zi, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const s = ss(), n = hi();
    let r, i;
    return Dn(() => {
      if (!r.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!Yc(
        r[0].el,
        s.vnode.el,
        o
      )) {
        r = [];
        return;
      }
      r.forEach(Gc), r.forEach(qc);
      const l = r.filter(Jc);
      Tn(s.vnode.el), l.forEach((c) => {
        const u = c.el, a = u.style;
        De(u, o), a.transform = a.webkitTransform = a.transitionDuration = "";
        const g = u[Fs] = (_) => {
          _ && _.target !== u || (!_ || _.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", g), u[Fs] = null, nt(u, o));
        };
        u.addEventListener("transitionend", g);
      }), r = [];
    }), () => {
      const o = /* @__PURE__ */ X(e), l = Qi(o);
      let c = o.tag || me;
      if (r = [], i)
        for (let u = 0; u < i.length; u++) {
          const a = i[u];
          a.el && a.el instanceof Element && (r.push(a), lt(
            a,
            Xt(
              a,
              l,
              n,
              s
            )
          ), to.set(a, no(a.el)));
        }
      i = t.default ? Nn(t.default()) : [];
      for (let u = 0; u < i.length; u++) {
        const a = i[u];
        a.key != null && lt(
          a,
          Xt(a, l, n, s)
        );
      }
      return pe(c, null, i);
    };
  }
}), If = Wc;
function Gc(e) {
  const t = e.el;
  t[Fs] && t[Fs](), t[Or] && t[Or]();
}
function qc(e) {
  so.set(e, no(e.el));
}
function Jc(e) {
  const t = to.get(e), s = so.get(e), n = t.left - s.left, r = t.top - s.top;
  if (n || r) {
    const i = e.el, o = i.style, l = i.getBoundingClientRect();
    let c = 1, u = 1;
    return i.offsetWidth && (c = l.width / i.offsetWidth), i.offsetHeight && (u = l.height / i.offsetHeight), (!Number.isFinite(c) || c === 0) && (c = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(c - 1) < 0.01 && (c = 1), Math.abs(u - 1) < 0.01 && (u = 1), o.transform = o.webkitTransform = `translate(${n / c}px,${r / u}px)`, o.transitionDuration = "0s", e;
  }
}
function no(e) {
  const t = e.getBoundingClientRect();
  return {
    left: t.left,
    top: t.top
  };
}
function Yc(e, t, s) {
  const n = e.cloneNode(), r = e[Et];
  r && r.forEach((l) => {
    l.split(/\s+/).forEach((c) => c && n.classList.remove(c));
  }), s.split(/\s+/).forEach((l) => l && n.classList.add(l)), n.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(n);
  const { hasTransform: o } = zi(n);
  return i.removeChild(n), o;
}
const Xc = {}, Zc = {}, Qc = {};
function zc() {
  Xc.getSSRProps = ({ value: e }) => ({ value: e }), Qc.getSSRProps = ({ value: e }, t) => {
    if (t.props && es(t.props.value, e))
      return { checked: !0 };
  }, Zc.getSSRProps = ({ value: e }, t) => {
    if (j(e)) {
      if (t.props && Mo(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (Cn(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const ef = ["ctrl", "shift", "alt", "meta"], tf = {
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
  exact: (e, t) => ef.some((s) => e[`${s}Key`] && !t.includes(s))
}, Nf = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = tf[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, sf = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Lf = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = ((r) => {
    if (!("key" in r))
      return;
    const i = ze(r.key);
    if (t.some(
      (o) => o === i || sf[o] === i
    ))
      return e(r);
  }));
}, ro = /* @__PURE__ */ ce({ patchProp: Bc }, Tc);
let Wt, Rr = !1;
function nf() {
  return Wt || (Wt = tc(ro));
}
function rf() {
  return Wt = Rr ? Wt : sc(ro), Rr = !0, Wt;
}
const Df = ((...e) => {
  const t = nf().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = oo(n);
    if (!r) return;
    const i = t._component;
    !G(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, io(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
}), Hf = ((...e) => {
  const t = rf().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = oo(n);
    if (r)
      return s(r, !0, io(r));
  }, t;
});
function io(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function oo(e) {
  return z(e) ? document.querySelector(e) : e;
}
let Ir = !1;
const $f = () => {
  Ir || (Ir = !0, zc(), Ec());
};
export {
  Mf as $,
  Lr as A,
  df as B,
  ue as C,
  uf as D,
  cf as E,
  me as F,
  z as G,
  ff as H,
  Mt as I,
  cc as J,
  Sf as K,
  ll as L,
  Ds as M,
  Ke as N,
  mf as O,
  lf as P,
  Ls as Q,
  Ln as R,
  _s as S,
  bf as T,
  bi as U,
  mn as V,
  hf as W,
  Fn as X,
  fn as Y,
  yf as Z,
  Af as _,
  gt as a,
  Cf as a0,
  wf as a1,
  vf as a2,
  hl as a3,
  Of as a4,
  of as a5,
  Po as a6,
  Pf as a7,
  el as a8,
  Tf as a9,
  Ac as aa,
  ms as ab,
  al as ac,
  _f as ad,
  Lf as ae,
  Nf as af,
  Rf as b,
  If as c,
  gc as d,
  Df as e,
  ki as f,
  yn as g,
  lc as h,
  Ff as i,
  Hf as j,
  Ef as k,
  Ui as l,
  pe as m,
  xf as n,
  pf as o,
  gf as p,
  ss as q,
  Ns as r,
  jr as s,
  $f as t,
  gs as u,
  j as v,
  af as w,
  G as x,
  Q as y,
  zt as z
};
