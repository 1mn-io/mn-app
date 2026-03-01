// @__NO_SIDE_EFFECTS__
function Ct(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const ee = {}, _t = [], He = () => {
}, Tr = () => !1, qt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), on = (e) => e.startsWith("onUpdate:"), le = Object.assign, ln = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, qi = Object.prototype.hasOwnProperty, Z = (e, t) => qi.call(e, t), j = Array.isArray, bt = (e) => Jt(e) === "[object Map]", cn = (e) => Jt(e) === "[object Set]", Fn = (e) => Jt(e) === "[object Date]", W = (e) => typeof e == "function", ie = (e) => typeof e == "string", $e = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", vr = (e) => (Q(e) || W(e)) && W(e.then) && W(e.catch), Sr = Object.prototype.toString, Jt = (e) => Sr.call(e), Ji = (e) => Jt(e).slice(8, -1), Cr = (e) => Jt(e) === "[object Object]", fn = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ft = /* @__PURE__ */ Ct(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), xs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, Yi = /-\w/g, et = xs(
  (e) => e.replace(Yi, (t) => t.slice(1).toUpperCase())
), Xi = /\B([A-Z])/g, st = xs(
  (e) => e.replace(Xi, "-$1").toLowerCase()
), Ar = xs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Fs = xs(
  (e) => e ? `on${Ar(e)}` : ""
), Qe = (e, t) => !Object.is(e, t), ls = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Er = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, un = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Zi = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Rn;
const Ts = () => Rn || (Rn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function an(e) {
  if (j(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = ie(n) ? to(n) : an(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ie(e) || Q(e))
    return e;
}
const Qi = /;(?![^(]*\))/g, zi = /:([^]+)/, eo = /\/\*[^]*?\*\//g;
function to(e) {
  const t = {};
  return e.replace(eo, "").split(Qi).forEach((s) => {
    if (s) {
      const n = s.split(zi);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ic(e) {
  if (!e) return "";
  if (ie(e)) return e;
  let t = "";
  for (const s in e) {
    const n = e[s];
    if (ie(n) || typeof n == "number") {
      const r = s.startsWith("--") ? s : st(s);
      t += `${r}:${n};`;
    }
  }
  return t;
}
function hn(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (j(e))
    for (let s = 0; s < e.length; s++) {
      const n = hn(e[s]);
      n && (t += n + " ");
    }
  else if (Q(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const so = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", no = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Dc = /* @__PURE__ */ Ct(so), Nc = /* @__PURE__ */ Ct(no), wr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ro = /* @__PURE__ */ Ct(wr), Hc = /* @__PURE__ */ Ct(
  wr + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function Mr(e) {
  return !!e || e === "";
}
const io = /[>/="'\u0009\u000a\u000c\u0020]/, Rs = {};
function $c(e) {
  if (Rs.hasOwnProperty(e))
    return Rs[e];
  const t = io.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), Rs[e] = !t;
}
const jc = {
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
const oo = /["'&<>]/;
function Bc(e) {
  const t = "" + e, s = oo.exec(t);
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
const lo = /^-?>|<!--|-->|--!>|<!-$/g;
function Uc(e) {
  return e.replace(lo, "");
}
function co(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Yt(e[n], t[n]);
  return s;
}
function Yt(e, t) {
  if (e === t) return !0;
  let s = Fn(e), n = Fn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = $e(e), n = $e(t), s || n)
    return e === t;
  if (s = j(e), n = j(t), s || n)
    return s && n ? co(e, t) : !1;
  if (s = Q(e), n = Q(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Yt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function fo(e, t) {
  return e.findIndex((s) => Yt(s, t));
}
const Or = (e) => !!(e && e.__v_isRef === !0), uo = (e) => ie(e) ? e : e == null ? "" : j(e) || Q(e) && (e.toString === Sr || !W(e.toString)) ? Or(e) ? uo(e.value) : JSON.stringify(e, Pr, 2) : String(e), Pr = (e, t) => Or(t) ? Pr(e, t.value) : bt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[Ls(n, i) + " =>"] = r, s),
    {}
  )
} : cn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Ls(s))
} : $e(t) ? Ls(t) : Q(t) && !j(t) && !Cr(t) ? String(t) : t, Ls = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    $e(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
function Kc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let be;
class ao {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = be, !t && be && (this.index = (be.scopes || (be.scopes = [])).push(
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
      const s = be;
      try {
        return be = this, t();
      } finally {
        be = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = be, be = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (be = this.prevScope, this.prevScope = void 0);
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
function ho() {
  return be;
}
let se;
const Is = /* @__PURE__ */ new WeakSet();
class Fr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, be && be.active && be.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Is.has(this) && (Is.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Lr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ln(this), Ir(this);
    const t = se, s = Oe;
    se = this, Oe = !0;
    try {
      return this.fn();
    } finally {
      Dr(this), se = t, Oe = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        gn(t);
      this.deps = this.depsTail = void 0, Ln(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Is.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ks(this) && this.run();
  }
  get dirty() {
    return ks(this);
  }
}
let Rr = 0, Ft, Rt;
function Lr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Rt, Rt = e;
    return;
  }
  e.next = Ft, Ft = e;
}
function dn() {
  Rr++;
}
function pn() {
  if (--Rr > 0)
    return;
  if (Rt) {
    let t = Rt;
    for (Rt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Ft; ) {
    let t = Ft;
    for (Ft = void 0; t; ) {
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
function Ir(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Dr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), gn(n), po(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function ks(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Nr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Nr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === $t) || (e.globalVersion = $t, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ks(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = se, n = Oe;
  se = e, Oe = !0;
  try {
    Ir(e);
    const r = e.fn(e._value);
    (t.version === 0 || Qe(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    se = s, Oe = n, Dr(e), e.flags &= -3;
  }
}
function gn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      gn(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function po(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Oe = !0;
const Hr = [];
function ke() {
  Hr.push(Oe), Oe = !1;
}
function Ge() {
  const e = Hr.pop();
  Oe = e === void 0 ? !0 : e;
}
function Ln(e) {
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
let $t = 0;
class go {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class mn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!se || !Oe || se === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== se)
      s = this.activeLink = new go(se, this), se.deps ? (s.prevDep = se.depsTail, se.depsTail.nextDep = s, se.depsTail = s) : se.deps = se.depsTail = s, $r(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = se.depsTail, s.nextDep = void 0, se.depsTail.nextDep = s, se.depsTail = s, se.deps === s && (se.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, $t++, this.notify(t);
  }
  notify(t) {
    dn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      pn();
    }
  }
}
function $r(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        $r(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Gs = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ Symbol(
  ""
), qs = /* @__PURE__ */ Symbol(
  ""
), jt = /* @__PURE__ */ Symbol(
  ""
);
function ue(e, t, s) {
  if (Oe && se) {
    let n = Gs.get(e);
    n || Gs.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new mn()), r.map = n, r.key = s), r.track();
  }
}
function Ke(e, t, s, n, r, i) {
  const o = Gs.get(e);
  if (!o) {
    $t++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (dn(), t === "clear")
    o.forEach(l);
  else {
    const c = j(e), h = c && fn(s);
    if (c && s === "length") {
      const u = Number(n);
      o.forEach((d, T) => {
        (T === "length" || T === jt || !$e(T) && T >= u) && l(d);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), h && l(o.get(jt)), t) {
        case "add":
          c ? h && l(o.get("length")) : (l(o.get(ut)), bt(e) && l(o.get(qs)));
          break;
        case "delete":
          c || (l(o.get(ut)), bt(e) && l(o.get(qs)));
          break;
        case "set":
          bt(e) && l(o.get(ut));
          break;
      }
  }
  pn();
}
function dt(e) {
  const t = /* @__PURE__ */ X(e);
  return t === e ? t : (ue(t, "iterate", jt), /* @__PURE__ */ we(e) ? t : t.map(Pe));
}
function vs(e) {
  return ue(e = /* @__PURE__ */ X(e), "iterate", jt), e;
}
function Xe(e, t) {
  return /* @__PURE__ */ qe(e) ? St(/* @__PURE__ */ ze(e) ? Pe(t) : t) : Pe(t);
}
const mo = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ds(this, Symbol.iterator, (e) => Xe(this, e));
  },
  concat(...e) {
    return dt(this).concat(
      ...e.map((t) => j(t) ? dt(t) : t)
    );
  },
  entries() {
    return Ds(this, "entries", (e) => (e[1] = Xe(this, e[1]), e));
  },
  every(e, t) {
    return je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return je(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Xe(this, n)),
      arguments
    );
  },
  find(e, t) {
    return je(
      this,
      "find",
      e,
      t,
      (s) => Xe(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return je(
      this,
      "findLast",
      e,
      t,
      (s) => Xe(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ns(this, "includes", e);
  },
  indexOf(...e) {
    return Ns(this, "indexOf", e);
  },
  join(e) {
    return dt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ns(this, "lastIndexOf", e);
  },
  map(e, t) {
    return je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wt(this, "pop");
  },
  push(...e) {
    return wt(this, "push", e);
  },
  reduce(e, ...t) {
    return In(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return In(this, "reduceRight", e, t);
  },
  shift() {
    return wt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wt(this, "splice", e);
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
    return wt(this, "unshift", e);
  },
  values() {
    return Ds(this, "values", (e) => Xe(this, e));
  }
};
function Ds(e, t, s) {
  const n = vs(e), r = n[t]();
  return n !== e && !/* @__PURE__ */ we(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const _o = Array.prototype;
function je(e, t, s, n, r, i) {
  const o = vs(e), l = o !== e && !/* @__PURE__ */ we(e), c = o[t];
  if (c !== _o[t]) {
    const d = c.apply(e, i);
    return l ? Pe(d) : d;
  }
  let h = s;
  o !== e && (l ? h = function(d, T) {
    return s.call(this, Xe(e, d), T, e);
  } : s.length > 2 && (h = function(d, T) {
    return s.call(this, d, T, e);
  }));
  const u = c.call(o, h, n);
  return l && r ? r(u) : u;
}
function In(e, t, s, n) {
  const r = vs(e);
  let i = s;
  return r !== e && (/* @__PURE__ */ we(e) ? s.length > 3 && (i = function(o, l, c) {
    return s.call(this, o, l, c, e);
  }) : i = function(o, l, c) {
    return s.call(this, o, Xe(e, l), c, e);
  }), r[t](i, ...n);
}
function Ns(e, t, s) {
  const n = /* @__PURE__ */ X(e);
  ue(n, "iterate", jt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ xn(s[0]) ? (s[0] = /* @__PURE__ */ X(s[0]), n[t](...s)) : r;
}
function wt(e, t, s = []) {
  ke(), dn();
  const n = (/* @__PURE__ */ X(e))[t].apply(e, s);
  return pn(), Ge(), n;
}
const bo = /* @__PURE__ */ Ct("__proto__,__v_isRef,__isVue"), jr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($e)
);
function yo(e) {
  $e(e) || (e = String(e));
  const t = /* @__PURE__ */ X(this);
  return ue(t, "has", e), t.hasOwnProperty(e);
}
class Vr {
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
      return n === (r ? i ? Oo : Wr : i ? Kr : Ur).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = j(t);
    if (!r) {
      let c;
      if (o && (c = mo[s]))
        return c;
      if (s === "hasOwnProperty")
        return yo;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ de(t) ? t : n
    );
    if (($e(s) ? jr.has(s) : bo(s)) || (r || ue(t, "get", s), i))
      return l;
    if (/* @__PURE__ */ de(l)) {
      const c = o && fn(s) ? l : l.value;
      return r && Q(c) ? /* @__PURE__ */ Ys(c) : c;
    }
    return Q(l) ? r ? /* @__PURE__ */ Ys(l) : /* @__PURE__ */ bn(l) : l;
  }
}
class Br extends Vr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const o = j(t) && fn(s);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ qe(i);
      if (!/* @__PURE__ */ we(n) && !/* @__PURE__ */ qe(n) && (i = /* @__PURE__ */ X(i), n = /* @__PURE__ */ X(n)), !o && /* @__PURE__ */ de(i) && !/* @__PURE__ */ de(n))
        return h || (i.value = n), !0;
    }
    const l = o ? Number(s) < t.length : Z(t, s), c = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ de(t) ? t : r
    );
    return t === /* @__PURE__ */ X(r) && (l ? Qe(n, i) && Ke(t, "set", s, n) : Ke(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = Z(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ke(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!$e(s) || !jr.has(s)) && ue(t, "has", s), n;
  }
  ownKeys(t) {
    return ue(
      t,
      "iterate",
      j(t) ? "length" : ut
    ), Reflect.ownKeys(t);
  }
}
class xo extends Vr {
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
const To = /* @__PURE__ */ new Br(), vo = /* @__PURE__ */ new xo(), So = /* @__PURE__ */ new Br(!0);
const Js = (e) => e, es = (e) => Reflect.getPrototypeOf(e);
function Co(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ X(r), o = bt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = r[e](...n), u = s ? Js : t ? St : Pe;
    return !t && ue(
      i,
      "iterate",
      c ? qs : ut
    ), le(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: d, done: T } = h.next();
          return T ? { value: d, done: T } : {
            value: l ? [u(d[0]), u(d[1])] : u(d),
            done: T
          };
        }
      }
    );
  };
}
function ts(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ao(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ X(i), l = /* @__PURE__ */ X(r);
      e || (Qe(r, l) && ue(o, "get", r), ue(o, "get", l));
      const { has: c } = es(o), h = t ? Js : e ? St : Pe;
      if (c.call(o, r))
        return h(i.get(r));
      if (c.call(o, l))
        return h(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ue(/* @__PURE__ */ X(r), "iterate", ut), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ X(i), l = /* @__PURE__ */ X(r);
      return e || (Qe(r, l) && ue(o, "has", r), ue(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ X(l), h = t ? Js : e ? St : Pe;
      return !e && ue(c, "iterate", ut), l.forEach((u, d) => r.call(i, h(u), h(d), o));
    }
  };
  return le(
    s,
    e ? {
      add: ts("add"),
      set: ts("set"),
      delete: ts("delete"),
      clear: ts("clear")
    } : {
      add(r) {
        !t && !/* @__PURE__ */ we(r) && !/* @__PURE__ */ qe(r) && (r = /* @__PURE__ */ X(r));
        const i = /* @__PURE__ */ X(this);
        return es(i).has.call(i, r) || (i.add(r), Ke(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ we(i) && !/* @__PURE__ */ qe(i) && (i = /* @__PURE__ */ X(i));
        const o = /* @__PURE__ */ X(this), { has: l, get: c } = es(o);
        let h = l.call(o, r);
        h || (r = /* @__PURE__ */ X(r), h = l.call(o, r));
        const u = c.call(o, r);
        return o.set(r, i), h ? Qe(i, u) && Ke(o, "set", r, i) : Ke(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ X(this), { has: o, get: l } = es(i);
        let c = o.call(i, r);
        c || (r = /* @__PURE__ */ X(r), c = o.call(i, r)), l && l.call(i, r);
        const h = i.delete(r);
        return c && Ke(i, "delete", r, void 0), h;
      },
      clear() {
        const r = /* @__PURE__ */ X(this), i = r.size !== 0, o = r.clear();
        return i && Ke(
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
    s[r] = Co(r, e, t);
  }), s;
}
function _n(e, t) {
  const s = Ao(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    Z(s, r) && r in n ? s : n,
    r,
    i
  );
}
const Eo = {
  get: /* @__PURE__ */ _n(!1, !1)
}, wo = {
  get: /* @__PURE__ */ _n(!1, !0)
}, Mo = {
  get: /* @__PURE__ */ _n(!0, !1)
};
const Ur = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap();
function Po(e) {
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
function Fo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Po(Ji(e));
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  return /* @__PURE__ */ qe(e) ? e : yn(
    e,
    !1,
    To,
    Eo,
    Ur
  );
}
// @__NO_SIDE_EFFECTS__
function Ro(e) {
  return yn(
    e,
    !1,
    So,
    wo,
    Kr
  );
}
// @__NO_SIDE_EFFECTS__
function Ys(e) {
  return yn(
    e,
    !0,
    vo,
    Mo,
    Wr
  );
}
function yn(e, t, s, n, r) {
  if (!Q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Fo(e);
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
function ze(e) {
  return /* @__PURE__ */ qe(e) ? /* @__PURE__ */ ze(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function xn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function X(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ X(t) : e;
}
function Lo(e) {
  return !Z(e, "__v_skip") && Object.isExtensible(e) && Er(e, "__v_skip", !0), e;
}
const Pe = (e) => Q(e) ? /* @__PURE__ */ bn(e) : e, St = (e) => Q(e) ? /* @__PURE__ */ Ys(e) : e;
// @__NO_SIDE_EFFECTS__
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Wc(e) {
  return Io(e, !1);
}
function Io(e, t) {
  return /* @__PURE__ */ de(e) ? e : new Do(e, t);
}
class Do {
  constructor(t, s) {
    this.dep = new mn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ X(t), this._value = s ? t : Pe(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ we(t) || /* @__PURE__ */ qe(t);
    t = n ? t : /* @__PURE__ */ X(t), Qe(t, s) && (this._rawValue = t, this._value = n ? t : Pe(t), this.dep.trigger());
  }
}
function No(e) {
  return /* @__PURE__ */ de(e) ? e.value : e;
}
const Ho = {
  get: (e, t, s) => t === "__v_raw" ? e : No(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return /* @__PURE__ */ de(r) && !/* @__PURE__ */ de(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function kr(e) {
  return /* @__PURE__ */ ze(e) ? e : new Proxy(e, Ho);
}
class $o {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new mn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = $t - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    se !== this)
      return Lr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Nr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function jo(e, t, s = !1) {
  let n, r;
  return W(e) ? n = e : (n = e.get, r = e.set), new $o(n, r, s);
}
const ss = {}, ds = /* @__PURE__ */ new WeakMap();
let lt;
function Vo(e, t = !1, s = lt) {
  if (s) {
    let n = ds.get(s);
    n || ds.set(s, n = []), n.push(e);
  }
}
function Bo(e, t, s = ee) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = s, h = (m) => r ? m : /* @__PURE__ */ we(m) || r === !1 || r === 0 ? We(m, 1) : We(m);
  let u, d, T, S, R = !1, F = !1;
  if (/* @__PURE__ */ de(e) ? (d = () => e.value, R = /* @__PURE__ */ we(e)) : /* @__PURE__ */ ze(e) ? (d = () => h(e), R = !0) : j(e) ? (F = !0, R = e.some((m) => /* @__PURE__ */ ze(m) || /* @__PURE__ */ we(m)), d = () => e.map((m) => {
    if (/* @__PURE__ */ de(m))
      return m.value;
    if (/* @__PURE__ */ ze(m))
      return h(m);
    if (W(m))
      return c ? c(m, 2) : m();
  })) : W(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
    if (T) {
      ke();
      try {
        T();
      } finally {
        Ge();
      }
    }
    const m = lt;
    lt = u;
    try {
      return c ? c(e, 3, [S]) : e(S);
    } finally {
      lt = m;
    }
  } : d = He, t && r) {
    const m = d, M = r === !0 ? 1 / 0 : r;
    d = () => We(m(), M);
  }
  const q = ho(), k = () => {
    u.stop(), q && q.active && ln(q.effects, u);
  };
  if (i && t) {
    const m = t;
    t = (...M) => {
      m(...M), k();
    };
  }
  let D = F ? new Array(e.length).fill(ss) : ss;
  const p = (m) => {
    if (!(!(u.flags & 1) || !u.dirty && !m))
      if (t) {
        const M = u.run();
        if (r || R || (F ? M.some((H, V) => Qe(H, D[V])) : Qe(M, D))) {
          T && T();
          const H = lt;
          lt = u;
          try {
            const V = [
              M,
              // pass undefined as the old value when it's changed for the first time
              D === ss ? void 0 : F && D[0] === ss ? [] : D,
              S
            ];
            D = M, c ? c(t, 3, V) : (
              // @ts-expect-error
              t(...V)
            );
          } finally {
            lt = H;
          }
        }
      } else
        u.run();
  };
  return l && l(p), u = new Fr(d), u.scheduler = o ? () => o(p, !1) : p, S = (m) => Vo(m, !1, u), T = u.onStop = () => {
    const m = ds.get(u);
    if (m) {
      if (c)
        c(m, 4);
      else
        for (const M of m) M();
      ds.delete(u);
    }
  }, t ? n ? p(!0) : D = u.run() : o ? o(p.bind(null, !0), !0) : u.run(), k.pause = u.pause.bind(u), k.resume = u.resume.bind(u), k.stop = k, k;
}
function We(e, t = 1 / 0, s) {
  if (t <= 0 || !Q(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ de(e))
    We(e.value, t, s);
  else if (j(e))
    for (let n = 0; n < e.length; n++)
      We(e[n], t, s);
  else if (cn(e) || bt(e))
    e.forEach((n) => {
      We(n, t, s);
    });
  else if (Cr(e)) {
    for (const n in e)
      We(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && We(e[n], t, s);
  }
  return e;
}
function Xt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    Ss(r, t, s);
  }
}
function Fe(e, t, s, n) {
  if (W(e)) {
    const r = Xt(e, t, s, n);
    return r && vr(r) && r.catch((i) => {
      Ss(i, t, s);
    }), r;
  }
  if (j(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Fe(e[i], t, s, n));
    return r;
  }
}
function Ss(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ee;
  if (t) {
    let l = t.parent;
    const c = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${s}`;
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
      ke(), Xt(i, null, 10, [
        e,
        c,
        h
      ]), Ge();
      return;
    }
  }
  Uo(e, s, r, n, o);
}
function Uo(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ge = [];
let Ie = -1;
const yt = [];
let Ze = null, gt = 0;
const Gr = /* @__PURE__ */ Promise.resolve();
let ps = null;
function Ko(e) {
  const t = ps || Gr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Wo(e) {
  let t = Ie + 1, s = ge.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = ge[n], i = Vt(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Tn(e) {
  if (!(e.flags & 1)) {
    const t = Vt(e), s = ge[ge.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Vt(s) ? ge.push(e) : ge.splice(Wo(t), 0, e), e.flags |= 1, qr();
  }
}
function qr() {
  ps || (ps = Gr.then(Jr));
}
function ko(e) {
  j(e) ? yt.push(...e) : Ze && e.id === -1 ? Ze.splice(gt + 1, 0, e) : e.flags & 1 || (yt.push(e), e.flags |= 1), qr();
}
function Dn(e, t, s = Ie + 1) {
  for (; s < ge.length; s++) {
    const n = ge[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ge.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function gs(e) {
  if (yt.length) {
    const t = [...new Set(yt)].sort(
      (s, n) => Vt(s) - Vt(n)
    );
    if (yt.length = 0, Ze) {
      Ze.push(...t);
      return;
    }
    for (Ze = t, gt = 0; gt < Ze.length; gt++) {
      const s = Ze[gt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ze = null, gt = 0;
  }
}
const Vt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Jr(e) {
  try {
    for (Ie = 0; Ie < ge.length; Ie++) {
      const t = ge[Ie];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Xt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ie < ge.length; Ie++) {
      const t = ge[Ie];
      t && (t.flags &= -2);
    }
    Ie = -1, ge.length = 0, gs(), ps = null, (ge.length || yt.length) && Jr();
  }
}
let Ee = null, Yr = null;
function Bt(e) {
  const t = Ee;
  return Ee = e, Yr = e && e.type.__scopeId || null, t;
}
function Go(e, t = Ee, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && bs(-1);
    const i = Bt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Bt(i), n._d && bs(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function kc(e, t) {
  if (Ee === null)
    return e;
  const s = ws(Ee), n = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = ee] = t[r];
    i && (W(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && We(o), n.push({
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
function De(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[n];
    c && (ke(), Fe(c, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Ge());
  }
}
function qo(e, t) {
  if (me) {
    let s = me.provides;
    const n = me.parent && me.parent.provides;
    n === s && (s = me.provides = Object.create(n)), s[e] = t;
  }
}
function cs(e, t, s = !1) {
  const n = Ni();
  if (n || vt) {
    let r = vt ? vt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && W(t) ? t.call(n && n.proxy) : t;
  }
}
const Jo = /* @__PURE__ */ Symbol.for("v-scx"), Yo = () => cs(Jo);
function Hs(e, t, s) {
  return Xr(e, t, s);
}
function Xr(e, t, s = ee) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = le({}, s), c = t && n || !t && i !== "post";
  let h;
  if (kt) {
    if (i === "sync") {
      const S = Yo();
      h = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!c) {
      const S = () => {
      };
      return S.stop = He, S.resume = He, S.pause = He, S;
    }
  }
  const u = me;
  l.call = (S, R, F) => Fe(S, u, R, F);
  let d = !1;
  i === "post" ? l.scheduler = (S) => {
    fe(S, u && u.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (S, R) => {
    R ? S() : Tn(S);
  }), l.augmentJob = (S) => {
    t && (S.flags |= 4), d && (S.flags |= 2, u && (S.id = u.uid, S.i = u));
  };
  const T = Bo(e, t, l);
  return kt && (h ? h.push(T) : c && T()), T;
}
function Xo(e, t, s) {
  const n = this.proxy, r = ie(e) ? e.includes(".") ? Zr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  W(t) ? i = t : (i = t.handler, s = t);
  const o = Zt(this), l = Xr(r, i.bind(n), s);
  return o(), l;
}
function Zr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const Qr = /* @__PURE__ */ Symbol("_vte"), zr = (e) => e.__isTeleport, Lt = (e) => e && (e.disabled || e.disabled === ""), Nn = (e) => e && (e.defer || e.defer === ""), Hn = (e) => typeof SVGElement < "u" && e instanceof SVGElement, $n = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Xs = (e, t) => {
  const s = e && e.to;
  return ie(s) ? t ? t(s) : null : s;
}, ei = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, r, i, o, l, c, h) {
    const {
      mc: u,
      pc: d,
      pbc: T,
      o: { insert: S, querySelector: R, createText: F, createComment: q }
    } = h, k = Lt(t.props);
    let { shapeFlag: D, children: p, dynamicChildren: m } = t;
    if (e == null) {
      const M = t.el = F(""), H = t.anchor = F("");
      S(M, s, n), S(H, s, n);
      const V = (E, O) => {
        D & 16 && u(
          p,
          E,
          O,
          r,
          i,
          o,
          l,
          c
        );
      }, K = () => {
        const E = t.target = Xs(t.props, R), O = Zs(E, t, F, S);
        E && (o !== "svg" && Hn(E) ? o = "svg" : o !== "mathml" && $n(E) && (o = "mathml"), r && r.isCE && (r.ce._teleportTargets || (r.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), k || (V(E, O), fs(t, !1)));
      };
      k && (V(s, H), fs(t, !0)), Nn(t.props) ? (t.el.__isMounted = !1, fe(() => {
        K(), delete t.el.__isMounted;
      }, i)) : K();
    } else {
      if (Nn(t.props) && e.el.__isMounted === !1) {
        fe(() => {
          ei.process(
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
      const M = t.anchor = e.anchor, H = t.target = e.target, V = t.targetAnchor = e.targetAnchor, K = Lt(e.props), E = K ? s : H, O = K ? M : V;
      if (o === "svg" || Hn(H) ? o = "svg" : (o === "mathml" || $n(H)) && (o = "mathml"), m ? (T(
        e.dynamicChildren,
        m,
        E,
        r,
        i,
        o,
        l
      ), Cn(e, t, !0)) : c || d(
        e,
        t,
        E,
        O,
        r,
        i,
        o,
        l,
        !1
      ), k)
        K ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ns(
          t,
          s,
          M,
          h,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const U = t.target = Xs(
          t.props,
          R
        );
        U && ns(
          t,
          U,
          null,
          h,
          0
        );
      } else K && ns(
        t,
        H,
        V,
        h,
        1
      );
      fs(t, k);
    }
  },
  remove(e, t, s, { um: n, o: { remove: r } }, i) {
    const {
      shapeFlag: o,
      children: l,
      anchor: c,
      targetStart: h,
      targetAnchor: u,
      target: d,
      props: T
    } = e;
    if (d && (r(h), r(u)), i && r(c), o & 16) {
      const S = i || !Lt(T);
      for (let R = 0; R < l.length; R++) {
        const F = l[R];
        n(
          F,
          t,
          s,
          S,
          !!F.dynamicChildren
        );
      }
    }
  },
  move: ns,
  hydrate: Zo
};
function ns(e, t, s, { o: { insert: n }, m: r }, i = 2) {
  i === 0 && n(e.targetAnchor, t, s);
  const { el: o, anchor: l, shapeFlag: c, children: h, props: u } = e, d = i === 2;
  if (d && n(o, t, s), (!d || Lt(u)) && c & 16)
    for (let T = 0; T < h.length; T++)
      r(
        h[T],
        t,
        s,
        2
      );
  d && n(l, t, s);
}
function Zo(e, t, s, n, r, i, {
  o: { nextSibling: o, parentNode: l, querySelector: c, insert: h, createText: u }
}, d) {
  function T(q, k) {
    let D = k;
    for (; D; ) {
      if (D && D.nodeType === 8) {
        if (D.data === "teleport start anchor")
          t.targetStart = D;
        else if (D.data === "teleport anchor") {
          t.targetAnchor = D, q._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      D = o(D);
    }
  }
  function S(q, k) {
    k.anchor = d(
      o(q),
      k,
      l(q),
      s,
      n,
      r,
      i
    );
  }
  const R = t.target = Xs(
    t.props,
    c
  ), F = Lt(t.props);
  if (R) {
    const q = R._lpa || R.firstChild;
    t.shapeFlag & 16 && (F ? (S(e, t), T(R, q), t.targetAnchor || Zs(
      R,
      t,
      u,
      h,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === R ? e : null
    )) : (t.anchor = o(e), T(R, q), t.targetAnchor || Zs(R, t, u, h), d(
      q && o(q),
      t,
      R,
      s,
      n,
      r,
      i
    ))), fs(t, F);
  } else F && t.shapeFlag & 16 && (S(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Gc = ei;
function fs(e, t) {
  const s = e.ctx;
  if (s && s.ut) {
    let n, r;
    for (t ? (n = e.el, r = e.anchor) : (n = e.targetStart, r = e.targetAnchor); n && n !== r; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid), n = n.nextSibling;
    s.ut();
  }
}
function Zs(e, t, s, n, r = null) {
  const i = t.targetStart = s(""), o = t.targetAnchor = s("");
  return i[Qr] = o, e && (n(i, e, r), n(o, e, r)), o;
}
const Ne = /* @__PURE__ */ Symbol("_leaveCb"), Mt = /* @__PURE__ */ Symbol("_enterCb");
function Qo() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ci(() => {
    e.isMounted = !0;
  }), fi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Se = [Function, Array], ti = {
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
}, si = (e) => {
  const t = e.subTree;
  return t.component ? si(t.component) : t;
}, zo = {
  name: "BaseTransition",
  props: ti,
  setup(e, { slots: t }) {
    const s = Ni(), n = Qo();
    return () => {
      const r = t.default && ii(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = ni(r), o = /* @__PURE__ */ X(e), { mode: l } = o;
      if (n.isLeaving)
        return $s(i);
      const c = jn(i);
      if (!c)
        return $s(i);
      let h = Qs(
        c,
        o,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (d) => h = d
      );
      c.type !== ae && Ut(c, h);
      let u = s.subTree && jn(s.subTree);
      if (u && u.type !== ae && !ct(u, c) && si(s).type !== ae) {
        let d = Qs(
          u,
          o,
          n,
          s
        );
        if (Ut(u, d), l === "out-in" && c.type !== ae)
          return n.isLeaving = !0, d.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete d.afterLeave, u = void 0;
          }, $s(i);
        l === "in-out" && c.type !== ae ? d.delayLeave = (T, S, R) => {
          const F = ri(
            n,
            u
          );
          F[String(u.key)] = u, T[Ne] = () => {
            S(), T[Ne] = void 0, delete h.delayedLeave, u = void 0;
          }, h.delayedLeave = () => {
            R(), delete h.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function ni(e) {
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
const el = zo;
function ri(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function Qs(e, t, s, n, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: h,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: T,
    onLeave: S,
    onAfterLeave: R,
    onLeaveCancelled: F,
    onBeforeAppear: q,
    onAppear: k,
    onAfterAppear: D,
    onAppearCancelled: p
  } = t, m = String(e.key), M = ri(s, e), H = (E, O) => {
    E && Fe(
      E,
      n,
      9,
      O
    );
  }, V = (E, O) => {
    const U = O[1];
    H(E, O), j(E) ? E.every((C) => C.length <= 1) && U() : E.length <= 1 && U();
  }, K = {
    mode: o,
    persisted: l,
    beforeEnter(E) {
      let O = c;
      if (!s.isMounted)
        if (i)
          O = q || c;
        else
          return;
      E[Ne] && E[Ne](
        !0
        /* cancelled */
      );
      const U = M[m];
      U && ct(e, U) && U.el[Ne] && U.el[Ne](), H(O, [E]);
    },
    enter(E) {
      if (M[m] === e) return;
      let O = h, U = u, C = d;
      if (!s.isMounted)
        if (i)
          O = k || h, U = D || u, C = p || d;
        else
          return;
      let G = !1;
      E[Mt] = (oe) => {
        G || (G = !0, oe ? H(C, [E]) : H(U, [E]), K.delayedLeave && K.delayedLeave(), E[Mt] = void 0);
      };
      const ne = E[Mt].bind(null, !1);
      O ? V(O, [E, ne]) : ne();
    },
    leave(E, O) {
      const U = String(e.key);
      if (E[Mt] && E[Mt](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return O();
      H(T, [E]);
      let C = !1;
      E[Ne] = (ne) => {
        C || (C = !0, O(), ne ? H(F, [E]) : H(R, [E]), E[Ne] = void 0, M[U] === e && delete M[U]);
      };
      const G = E[Ne].bind(null, !1);
      M[U] = e, S ? V(S, [E, G]) : G();
    },
    clone(E) {
      const O = Qs(
        E,
        t,
        s,
        n,
        r
      );
      return r && r(O), O;
    }
  };
  return K;
}
function $s(e) {
  if (Cs(e))
    return e = tt(e), e.children = null, e;
}
function jn(e) {
  if (!Cs(e))
    return zr(e.type) && e.children ? ni(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && W(s.default))
      return s.default();
  }
}
function Ut(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ut(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ii(e, t = !1, s) {
  let n = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = s == null ? o.key : String(s) + String(o.key != null ? o.key : i);
    o.type === Ae ? (o.patchFlag & 128 && r++, n = n.concat(
      ii(o.children, t, l)
    )) : (t || o.type !== ae) && n.push(l != null ? tt(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function qc(e, t) {
  return W(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function oi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Vn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const ms = /* @__PURE__ */ new WeakMap();
function xt(e, t, s, n, r = !1) {
  if (j(e)) {
    e.forEach(
      (F, q) => xt(
        F,
        t && (j(t) ? t[q] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (Tt(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && xt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? ws(n.component) : n.el, o = r ? null : i, { i: l, r: c } = e, h = t && t.r, u = l.refs === ee ? l.refs = {} : l.refs, d = l.setupState, T = /* @__PURE__ */ X(d), S = d === ee ? Tr : (F) => Vn(u, F) ? !1 : Z(T, F), R = (F, q) => !(q && Vn(u, q));
  if (h != null && h !== c) {
    if (Bn(t), ie(h))
      u[h] = null, S(h) && (d[h] = null);
    else if (/* @__PURE__ */ de(h)) {
      const F = t;
      R(h, F.k) && (h.value = null), F.k && (u[F.k] = null);
    }
  }
  if (W(c))
    Xt(c, l, 12, [o, u]);
  else {
    const F = ie(c), q = /* @__PURE__ */ de(c);
    if (F || q) {
      const k = () => {
        if (e.f) {
          const D = F ? S(c) ? d[c] : u[c] : R() || !e.k ? c.value : u[e.k];
          if (r)
            j(D) && ln(D, i);
          else if (j(D))
            D.includes(i) || D.push(i);
          else if (F)
            u[c] = [i], S(c) && (d[c] = u[c]);
          else {
            const p = [i];
            R(c, e.k) && (c.value = p), e.k && (u[e.k] = p);
          }
        } else F ? (u[c] = o, S(c) && (d[c] = o)) : q && (R(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const D = () => {
          k(), ms.delete(e);
        };
        D.id = -1, ms.set(e, D), fe(D, s);
      } else
        Bn(e), k();
    }
  }
}
function Bn(e) {
  const t = ms.get(e);
  t && (t.flags |= 8, ms.delete(e));
}
let Un = !1;
const pt = () => {
  Un || (console.error("Hydration completed but contains mismatches."), Un = !0);
}, tl = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", sl = (e) => e.namespaceURI.includes("MathML"), rs = (e) => {
  if (e.nodeType === 1) {
    if (tl(e)) return "svg";
    if (sl(e)) return "mathml";
  }
}, is = (e) => e.nodeType === 8;
function nl(e) {
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
  } = e, u = (p, m) => {
    if (!m.hasChildNodes()) {
      s(null, p, m), gs(), m._vnode = p;
      return;
    }
    d(m.firstChild, p, null, null, null), gs(), m._vnode = p;
  }, d = (p, m, M, H, V, K = !1) => {
    K = K || !!m.dynamicChildren;
    const E = is(p) && p.data === "[", O = () => F(
      p,
      m,
      M,
      H,
      V,
      E
    ), { type: U, ref: C, shapeFlag: G, patchFlag: ne } = m;
    let oe = p.nodeType;
    m.el = p, ne === -2 && (K = !1, m.dynamicChildren = null);
    let N = null;
    switch (U) {
      case at:
        oe !== 3 ? m.children === "" ? (c(m.el = r(""), o(p), p), N = p) : N = O() : (p.data !== m.children && (pt(), p.data = m.children), N = i(p));
        break;
      case ae:
        D(p) ? (N = i(p), k(
          m.el = p.content.firstChild,
          p,
          M
        )) : oe !== 8 || E ? N = O() : N = i(p);
        break;
      case Dt:
        if (E && (p = i(p), oe = p.nodeType), oe === 1 || oe === 3) {
          N = p;
          const J = !m.children.length;
          for (let L = 0; L < m.staticCount; L++)
            J && (m.children += N.nodeType === 1 ? N.outerHTML : N.data), L === m.staticCount - 1 && (m.anchor = N), N = i(N);
          return E ? i(N) : N;
        } else
          O();
        break;
      case Ae:
        E ? N = R(
          p,
          m,
          M,
          H,
          V,
          K
        ) : N = O();
        break;
      default:
        if (G & 1)
          (oe !== 1 || m.type.toLowerCase() !== p.tagName.toLowerCase()) && !D(p) ? N = O() : N = T(
            p,
            m,
            M,
            H,
            V,
            K
          );
        else if (G & 6) {
          m.slotScopeIds = V;
          const J = o(p);
          if (E ? N = q(p) : is(p) && p.data === "teleport start" ? N = q(p, p.data, "teleport end") : N = i(p), t(
            m,
            J,
            null,
            M,
            H,
            rs(J),
            K
          ), Tt(m) && !m.type.__asyncResolved) {
            let L;
            E ? (L = he(Ae), L.anchor = N ? N.previousSibling : J.lastChild) : L = p.nodeType === 3 ? Ii("") : he("div"), L.el = p, m.component.subTree = L;
          }
        } else G & 64 ? oe !== 8 ? N = O() : N = m.type.hydrate(
          p,
          m,
          M,
          H,
          V,
          K,
          e,
          S
        ) : G & 128 && (N = m.type.hydrate(
          p,
          m,
          M,
          H,
          rs(o(p)),
          V,
          K,
          e,
          d
        ));
    }
    return C != null && xt(C, null, H, m), N;
  }, T = (p, m, M, H, V, K) => {
    K = K || !!m.dynamicChildren;
    const { type: E, props: O, patchFlag: U, shapeFlag: C, dirs: G, transition: ne } = m, oe = E === "input" || E === "option";
    if (oe || U !== -1) {
      G && De(m, null, M, "created");
      let N = !1;
      if (D(p)) {
        N = Ei(
          null,
          // no need check parentSuspense in hydration
          ne
        ) && M && M.vnode.props && M.vnode.props.appear;
        const L = p.content.firstChild;
        if (N) {
          const re = L.getAttribute("class");
          re && (L.$cls = re), ne.beforeEnter(L);
        }
        k(L, p, M), m.el = p = L;
      }
      if (C & 16 && // skip if element has innerHTML / textContent
      !(O && (O.innerHTML || O.textContent))) {
        let L = S(
          p.firstChild,
          m,
          p,
          M,
          H,
          V,
          K
        );
        for (; L; ) {
          os(
            p,
            1
            /* CHILDREN */
          ) || pt();
          const re = L;
          L = L.nextSibling, l(re);
        }
      } else if (C & 8) {
        let L = m.children;
        L[0] === `
` && (p.tagName === "PRE" || p.tagName === "TEXTAREA") && (L = L.slice(1));
        const { textContent: re } = p;
        re !== L && // innerHTML normalize \r\n or \r into a single \n in the DOM
        re !== L.replace(/\r\n|\r/g, `
`) && (os(
          p,
          0
          /* TEXT */
        ) || pt(), p.textContent = m.children);
      }
      if (O) {
        if (oe || !K || U & 48) {
          const L = p.tagName.includes("-");
          for (const re in O)
            (oe && (re.endsWith("value") || re === "indeterminate") || qt(re) && !ft(re) || // force hydrate v-bind with .prop modifiers
            re[0] === "." || L && !ft(re)) && n(p, re, null, O[re], void 0, M);
        } else if (O.onClick)
          n(
            p,
            "onClick",
            null,
            O.onClick,
            void 0,
            M
          );
        else if (U & 4 && /* @__PURE__ */ ze(O.style))
          for (const L in O.style) O.style[L];
      }
      let J;
      (J = O && O.onVnodeBeforeMount) && Ce(J, M, m), G && De(m, null, M, "beforeMount"), ((J = O && O.onVnodeMounted) || G || N) && Pi(() => {
        J && Ce(J, M, m), N && ne.enter(p), G && De(m, null, M, "mounted");
      }, H);
    }
    return p.nextSibling;
  }, S = (p, m, M, H, V, K, E) => {
    E = E || !!m.dynamicChildren;
    const O = m.children, U = O.length;
    for (let C = 0; C < U; C++) {
      const G = E ? O[C] : O[C] = Te(O[C]), ne = G.type === at;
      p ? (ne && !E && C + 1 < U && Te(O[C + 1]).type === at && (c(
        r(
          p.data.slice(G.children.length)
        ),
        M,
        i(p)
      ), p.data = G.children), p = d(
        p,
        G,
        H,
        V,
        K,
        E
      )) : ne && !G.children ? c(G.el = r(""), M) : (os(
        M,
        1
        /* CHILDREN */
      ) || pt(), s(
        null,
        G,
        M,
        null,
        H,
        V,
        rs(M),
        K
      ));
    }
    return p;
  }, R = (p, m, M, H, V, K) => {
    const { slotScopeIds: E } = m;
    E && (V = V ? V.concat(E) : E);
    const O = o(p), U = S(
      i(p),
      m,
      O,
      M,
      H,
      V,
      K
    );
    return U && is(U) && U.data === "]" ? i(m.anchor = U) : (pt(), c(m.anchor = h("]"), O, U), U);
  }, F = (p, m, M, H, V, K) => {
    if (os(
      p.parentElement,
      1
      /* CHILDREN */
    ) || pt(), m.el = null, K) {
      const U = q(p);
      for (; ; ) {
        const C = i(p);
        if (C && C !== U)
          l(C);
        else
          break;
      }
    }
    const E = i(p), O = o(p);
    return l(p), s(
      null,
      m,
      O,
      E,
      M,
      H,
      rs(O),
      V
    ), M && (M.vnode.el = m.el, mi(M, m.el)), E;
  }, q = (p, m = "[", M = "]") => {
    let H = 0;
    for (; p; )
      if (p = i(p), p && is(p) && (p.data === m && H++, p.data === M)) {
        if (H === 0)
          return i(p);
        H--;
      }
    return p;
  }, k = (p, m, M) => {
    const H = m.parentNode;
    H && H.replaceChild(p, m);
    let V = M;
    for (; V; )
      V.vnode.el === m && (V.vnode.el = V.subTree.el = p), V = V.parent;
  }, D = (p) => p.nodeType === 1 && p.tagName === "TEMPLATE";
  return [u, d];
}
const Kn = "data-allow-mismatch", rl = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function os(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Kn); )
      e = e.parentElement;
  const s = e && e.getAttribute(Kn);
  if (s == null)
    return !1;
  if (s === "")
    return !0;
  {
    const n = s.split(",");
    return t === 0 && n.includes("children") ? !0 : n.includes(rl[t]);
  }
}
Ts().requestIdleCallback;
Ts().cancelIdleCallback;
const Tt = (e) => !!e.type.__asyncLoader, Cs = (e) => e.type.__isKeepAlive;
function il(e, t) {
  li(e, "a", t);
}
function ol(e, t) {
  li(e, "da", t);
}
function li(e, t, s = me) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (As(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      Cs(r.parent.vnode) && ll(n, t, s, r), r = r.parent;
  }
}
function ll(e, t, s, n) {
  const r = As(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ui(() => {
    ln(n[t], r);
  }, s);
}
function As(e, t, s = me, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      ke();
      const l = Zt(s), c = Fe(t, s, e, o);
      return l(), Ge(), c;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Je = (e) => (t, s = me) => {
  (!kt || e === "sp") && As(e, (...n) => t(...n), s);
}, cl = Je("bm"), ci = Je("m"), fl = Je(
  "bu"
), ul = Je("u"), fi = Je(
  "bum"
), ui = Je("um"), al = Je(
  "sp"
), hl = Je("rtg"), dl = Je("rtc");
function pl(e, t = me) {
  As("ec", e, t);
}
const gl = /* @__PURE__ */ Symbol.for("v-ndc");
function Jc(e, t, s, n) {
  let r;
  const i = s, o = j(e);
  if (o || ie(e)) {
    const l = o && /* @__PURE__ */ ze(e);
    let c = !1, h = !1;
    l && (c = !/* @__PURE__ */ we(e), h = /* @__PURE__ */ qe(e), e = vs(e)), r = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(
        c ? h ? St(Pe(e[u])) : Pe(e[u]) : e[u],
        u,
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
      for (let c = 0, h = l.length; c < h; c++) {
        const u = l[c];
        r[c] = t(e[u], u, c, i);
      }
    }
  else
    r = [];
  return r;
}
const zs = (e) => e ? Hi(e) ? ws(e) : zs(e.parent) : null, It = (
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
    $parent: (e) => zs(e.parent),
    $root: (e) => zs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => hi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Tn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ko.bind(e.proxy)),
    $watch: (e) => Xo.bind(e)
  })
), js = (e, t) => e !== ee && !e.__isScriptSetup && Z(e, t), ml = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const T = o[t];
      if (T !== void 0)
        switch (T) {
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
        if (js(n, t))
          return o[t] = 1, n[t];
        if (r !== ee && Z(r, t))
          return o[t] = 2, r[t];
        if (Z(i, t))
          return o[t] = 3, i[t];
        if (s !== ee && Z(s, t))
          return o[t] = 4, s[t];
        en && (o[t] = 0);
      }
    }
    const h = It[t];
    let u, d;
    if (h)
      return t === "$attrs" && ue(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
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
    return js(r, t) ? (r[t] = s, !0) : n !== ee && Z(n, t) ? (n[t] = s, !0) : Z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let c;
    return !!(s[l] || e !== ee && l[0] !== "$" && Z(e, l) || js(t, l) || Z(i, l) || Z(n, l) || Z(It, l) || Z(r.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : Z(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Wn(e) {
  return j(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let en = !0;
function _l(e) {
  const t = hi(e), s = e.proxy, n = e.ctx;
  en = !1, t.beforeCreate && kn(t.beforeCreate, e, "bc");
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
    mounted: T,
    beforeUpdate: S,
    updated: R,
    activated: F,
    deactivated: q,
    beforeDestroy: k,
    beforeUnmount: D,
    destroyed: p,
    unmounted: m,
    render: M,
    renderTracked: H,
    renderTriggered: V,
    errorCaptured: K,
    serverPrefetch: E,
    // public API
    expose: O,
    inheritAttrs: U,
    // assets
    components: C,
    directives: G,
    filters: ne
  } = t;
  if (h && bl(h, n, null), o)
    for (const J in o) {
      const L = o[J];
      W(L) && (n[J] = L.bind(s));
    }
  if (r) {
    const J = r.call(s, s);
    Q(J) && (e.data = /* @__PURE__ */ bn(J));
  }
  if (en = !0, i)
    for (const J in i) {
      const L = i[J], re = W(L) ? L.bind(s, s) : W(L.get) ? L.get.bind(s, s) : He, Qt = !W(L) && W(L.set) ? L.set.bind(s) : He, nt = Zl({
        get: re,
        set: Qt
      });
      Object.defineProperty(n, J, {
        enumerable: !0,
        configurable: !0,
        get: () => nt.value,
        set: (Re) => nt.value = Re
      });
    }
  if (l)
    for (const J in l)
      ai(l[J], n, s, J);
  if (c) {
    const J = W(c) ? c.call(s) : c;
    Reflect.ownKeys(J).forEach((L) => {
      qo(L, J[L]);
    });
  }
  u && kn(u, e, "c");
  function N(J, L) {
    j(L) ? L.forEach((re) => J(re.bind(s))) : L && J(L.bind(s));
  }
  if (N(cl, d), N(ci, T), N(fl, S), N(ul, R), N(il, F), N(ol, q), N(pl, K), N(dl, H), N(hl, V), N(fi, D), N(ui, m), N(al, E), j(O))
    if (O.length) {
      const J = e.exposed || (e.exposed = {});
      O.forEach((L) => {
        Object.defineProperty(J, L, {
          get: () => s[L],
          set: (re) => s[L] = re,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === He && (e.render = M), U != null && (e.inheritAttrs = U), C && (e.components = C), G && (e.directives = G), E && oi(e);
}
function bl(e, t, s = He) {
  j(e) && (e = tn(e));
  for (const n in e) {
    const r = e[n];
    let i;
    Q(r) ? "default" in r ? i = cs(
      r.from || n,
      r.default,
      !0
    ) : i = cs(r.from || n) : i = cs(r), /* @__PURE__ */ de(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function kn(e, t, s) {
  Fe(
    j(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function ai(e, t, s, n) {
  let r = n.includes(".") ? Zr(s, n) : () => s[n];
  if (ie(e)) {
    const i = t[e];
    W(i) && Hs(r, i);
  } else if (W(e))
    Hs(r, e.bind(s));
  else if (Q(e))
    if (j(e))
      e.forEach((i) => ai(i, t, s, n));
    else {
      const i = W(e.handler) ? e.handler.bind(s) : t[e.handler];
      W(i) && Hs(r, i, e);
    }
}
function hi(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !r.length && !s && !n ? c = t : (c = {}, r.length && r.forEach(
    (h) => _s(c, h, o, !0)
  ), _s(c, t, o)), Q(t) && i.set(t, c), c;
}
function _s(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && _s(e, i, s, !0), r && r.forEach(
    (o) => _s(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = yl[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const yl = {
  data: Gn,
  props: qn,
  emits: qn,
  // objects
  methods: Pt,
  computed: Pt,
  // lifecycle
  beforeCreate: pe,
  created: pe,
  beforeMount: pe,
  mounted: pe,
  beforeUpdate: pe,
  updated: pe,
  beforeDestroy: pe,
  beforeUnmount: pe,
  destroyed: pe,
  unmounted: pe,
  activated: pe,
  deactivated: pe,
  errorCaptured: pe,
  serverPrefetch: pe,
  // assets
  components: Pt,
  directives: Pt,
  // watch
  watch: Tl,
  // provide / inject
  provide: Gn,
  inject: xl
};
function Gn(e, t) {
  return t ? e ? function() {
    return le(
      W(e) ? e.call(this, this) : e,
      W(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function xl(e, t) {
  return Pt(tn(e), tn(t));
}
function tn(e) {
  if (j(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function pe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Pt(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function qn(e, t) {
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    Wn(e),
    Wn(t ?? {})
  ) : t;
}
function Tl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = le(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = pe(e[n], t[n]);
  return s;
}
function di() {
  return {
    app: null,
    config: {
      isNativeTag: Tr,
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
let vl = 0;
function Sl(e, t) {
  return function(n, r = null) {
    W(n) || (n = le({}, n)), r != null && !Q(r) && (r = null);
    const i = di(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const h = i.app = {
      _uid: vl++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: zl,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return o.has(u) || (u && W(u.install) ? (o.add(u), u.install(h, ...d)) : W(u) && (o.add(u), u(h, ...d))), h;
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
      mount(u, d, T) {
        if (!c) {
          const S = h._ceVNode || he(n, r);
          return S.appContext = i, T === !0 ? T = "svg" : T === !1 && (T = void 0), d && t ? t(S, u) : e(S, u, T), c = !0, h._container = u, u.__vue_app__ = h, ws(S.component);
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
        const d = vt;
        vt = h;
        try {
          return u();
        } finally {
          vt = d;
        }
      }
    };
    return h;
  };
}
let vt = null;
const Cl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${et(t)}Modifiers`] || e[`${st(t)}Modifiers`];
function Al(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ee;
  let r = s;
  const i = t.startsWith("update:"), o = i && Cl(n, t.slice(7));
  o && (o.trim && (r = s.map((u) => ie(u) ? u.trim() : u)), o.number && (r = s.map(un)));
  let l, c = n[l = Fs(t)] || // also try camelCase event handler (#2249)
  n[l = Fs(et(t))];
  !c && i && (c = n[l = Fs(st(t))]), c && Fe(
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
    e.emitted[l] = !0, Fe(
      h,
      e,
      6,
      r
    );
  }
}
const El = /* @__PURE__ */ new WeakMap();
function pi(e, t, s = !1) {
  const n = s ? El : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!W(e)) {
    const c = (h) => {
      const u = pi(h, t, !0);
      u && (l = !0, le(o, u));
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (Q(e) && n.set(e, null), null) : (j(i) ? i.forEach((c) => o[c] = null) : le(o, i), Q(e) && n.set(e, o), o);
}
function Es(e, t) {
  return !e || !qt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, st(t)) || Z(e, t));
}
function us(e) {
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
    renderCache: u,
    props: d,
    data: T,
    setupState: S,
    ctx: R,
    inheritAttrs: F
  } = e, q = Bt(e);
  let k, D;
  try {
    if (s.shapeFlag & 4) {
      const m = r || n, M = m;
      k = Te(
        h.call(
          M,
          m,
          u,
          d,
          S,
          T,
          R
        )
      ), D = l;
    } else {
      const m = t;
      k = Te(
        m.length > 1 ? m(
          d,
          { attrs: l, slots: o, emit: c }
        ) : m(
          d,
          null
        )
      ), D = t.props ? l : wl(l);
    }
  } catch (m) {
    Nt.length = 0, Ss(m, e, 1), k = he(ae);
  }
  let p = k;
  if (D && F !== !1) {
    const m = Object.keys(D), { shapeFlag: M } = p;
    m.length && M & 7 && (i && m.some(on) && (D = Ml(
      D,
      i
    )), p = tt(p, D, !1, !0));
  }
  return s.dirs && (p = tt(p, null, !1, !0), p.dirs = p.dirs ? p.dirs.concat(s.dirs) : s.dirs), s.transition && Ut(p, s.transition), k = p, Bt(q), k;
}
const wl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || qt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Ml = (e, t) => {
  const s = {};
  for (const n in e)
    (!on(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Ol(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: c } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? Jn(n, o, h) : !!o;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const T = u[d];
        if (gi(o, n, T) && !Es(h, T))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? Jn(n, o, h) : !0 : !!o;
  return !1;
}
function Jn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (gi(t, e, i) && !Es(s, i))
      return !0;
  }
  return !1;
}
function gi(e, t, s) {
  const n = e[s], r = t[s];
  return s === "style" && Q(n) && Q(r) ? !Yt(n, r) : n !== r;
}
function mi({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const _i = {}, bi = () => Object.create(_i), yi = (e) => Object.getPrototypeOf(e) === _i;
function Pl(e, t, s, n = !1) {
  const r = {}, i = bi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), xi(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : /* @__PURE__ */ Ro(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Fl(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ X(r), [c] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let T = u[d];
        if (Es(e.emitsOptions, T))
          continue;
        const S = t[T];
        if (c)
          if (Z(i, T))
            S !== i[T] && (i[T] = S, h = !0);
          else {
            const R = et(T);
            r[R] = sn(
              c,
              l,
              R,
              S,
              e,
              !1
            );
          }
        else
          S !== i[T] && (i[T] = S, h = !0);
      }
    }
  } else {
    xi(e, t, r, i) && (h = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !Z(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = st(d)) === d || !Z(t, u))) && (c ? s && // for camelCase
      (s[d] !== void 0 || // for kebab-case
      s[u] !== void 0) && (r[d] = sn(
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
  h && Ke(e.attrs, "set", "");
}
function xi(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (ft(c))
        continue;
      const h = t[c];
      let u;
      r && Z(r, u = et(c)) ? !i || !i.includes(u) ? s[u] = h : (l || (l = {}))[u] = h : Es(e.emitsOptions, c) || (!(c in n) || h !== n[c]) && (n[c] = h, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ X(s), h = l || ee;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      s[d] = sn(
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
function sn(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = Z(o, "default");
    if (l && n === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && W(c)) {
        const { propsDefaults: h } = r;
        if (s in h)
          n = h[s];
        else {
          const u = Zt(r);
          n = h[s] = c.call(
            null,
            t
          ), u();
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
    ] && (n === "" || n === st(s)) && (n = !0));
  }
  return n;
}
const Rl = /* @__PURE__ */ new WeakMap();
function Ti(e, t, s = !1) {
  const n = s ? Rl : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!W(e)) {
    const u = (d) => {
      c = !0;
      const [T, S] = Ti(d, t, !0);
      le(o, T), S && l.push(...S);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !c)
    return Q(e) && n.set(e, _t), _t;
  if (j(i))
    for (let u = 0; u < i.length; u++) {
      const d = et(i[u]);
      Yn(d) && (o[d] = ee);
    }
  else if (i)
    for (const u in i) {
      const d = et(u);
      if (Yn(d)) {
        const T = i[u], S = o[d] = j(T) || W(T) ? { type: T } : le({}, T), R = S.type;
        let F = !1, q = !0;
        if (j(R))
          for (let k = 0; k < R.length; ++k) {
            const D = R[k], p = W(D) && D.name;
            if (p === "Boolean") {
              F = !0;
              break;
            } else p === "String" && (q = !1);
          }
        else
          F = W(R) && R.name === "Boolean";
        S[
          0
          /* shouldCast */
        ] = F, S[
          1
          /* shouldCastTrue */
        ] = q, (F || Z(S, "default")) && l.push(d);
      }
    }
  const h = [o, l];
  return Q(e) && n.set(e, h), h;
}
function Yn(e) {
  return e[0] !== "$" && !ft(e);
}
const vn = (e) => e === "_" || e === "_ctx" || e === "$stable", Sn = (e) => j(e) ? e.map(Te) : [Te(e)], Ll = (e, t, s) => {
  if (t._n)
    return t;
  const n = Go((...r) => Sn(t(...r)), s);
  return n._c = !1, n;
}, vi = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (vn(r)) continue;
    const i = e[r];
    if (W(i))
      t[r] = Ll(r, i, n);
    else if (i != null) {
      const o = Sn(i);
      t[r] = () => o;
    }
  }
}, Si = (e, t) => {
  const s = Sn(t);
  e.slots.default = () => s;
}, Ci = (e, t, s) => {
  for (const n in t)
    (s || !vn(n)) && (e[n] = t[n]);
}, Il = (e, t, s) => {
  const n = e.slots = bi();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Ci(n, t, s), s && Er(n, "_", r, !0)) : vi(t, n);
  } else t && Si(e, t);
}, Dl = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = ee;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : Ci(r, t, s) : (i = !t.$stable, vi(t, r)), o = t;
  } else t && (Si(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !vn(l) && o[l] == null && delete r[l];
}, fe = Pi;
function Nl(e) {
  return Ai(e);
}
function Hl(e) {
  return Ai(e, nl);
}
function Ai(e, t) {
  const s = Ts();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: h,
    setElementText: u,
    parentNode: d,
    nextSibling: T,
    setScopeId: S = He,
    insertStaticContent: R
  } = e, F = (f, a, g, x = null, _ = null, b = null, w = void 0, A = null, v = !!a.dynamicChildren) => {
    if (f === a)
      return;
    f && !ct(f, a) && (x = zt(f), Re(f, _, b, !0), f = null), a.patchFlag === -2 && (v = !1, a.dynamicChildren = null);
    const { type: y, ref: $, shapeFlag: P } = a;
    switch (y) {
      case at:
        q(f, a, g, x);
        break;
      case ae:
        k(f, a, g, x);
        break;
      case Dt:
        f == null && D(a, g, x, w);
        break;
      case Ae:
        C(
          f,
          a,
          g,
          x,
          _,
          b,
          w,
          A,
          v
        );
        break;
      default:
        P & 1 ? M(
          f,
          a,
          g,
          x,
          _,
          b,
          w,
          A,
          v
        ) : P & 6 ? G(
          f,
          a,
          g,
          x,
          _,
          b,
          w,
          A,
          v
        ) : (P & 64 || P & 128) && y.process(
          f,
          a,
          g,
          x,
          _,
          b,
          w,
          A,
          v,
          ht
        );
    }
    $ != null && _ ? xt($, f && f.ref, b, a || f, !a) : $ == null && f && f.ref != null && xt(f.ref, null, b, f, !0);
  }, q = (f, a, g, x) => {
    if (f == null)
      n(
        a.el = l(a.children),
        g,
        x
      );
    else {
      const _ = a.el = f.el;
      a.children !== f.children && h(_, a.children);
    }
  }, k = (f, a, g, x) => {
    f == null ? n(
      a.el = c(a.children || ""),
      g,
      x
    ) : a.el = f.el;
  }, D = (f, a, g, x) => {
    [f.el, f.anchor] = R(
      f.children,
      a,
      g,
      x,
      f.el,
      f.anchor
    );
  }, p = ({ el: f, anchor: a }, g, x) => {
    let _;
    for (; f && f !== a; )
      _ = T(f), n(f, g, x), f = _;
    n(a, g, x);
  }, m = ({ el: f, anchor: a }) => {
    let g;
    for (; f && f !== a; )
      g = T(f), r(f), f = g;
    r(a);
  }, M = (f, a, g, x, _, b, w, A, v) => {
    if (a.type === "svg" ? w = "svg" : a.type === "math" && (w = "mathml"), f == null)
      H(
        a,
        g,
        x,
        _,
        b,
        w,
        A,
        v
      );
    else {
      const y = f.el && f.el._isVueCE ? f.el : null;
      try {
        y && y._beginPatch(), E(
          f,
          a,
          _,
          b,
          w,
          A,
          v
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, H = (f, a, g, x, _, b, w, A) => {
    let v, y;
    const { props: $, shapeFlag: P, transition: I, dirs: B } = f;
    if (v = f.el = o(
      f.type,
      b,
      $ && $.is,
      $
    ), P & 8 ? u(v, f.children) : P & 16 && K(
      f.children,
      v,
      null,
      x,
      _,
      Vs(f, b),
      w,
      A
    ), B && De(f, null, x, "created"), V(v, f, f.scopeId, w, x), $) {
      for (const te in $)
        te !== "value" && !ft(te) && i(v, te, null, $[te], b, x);
      "value" in $ && i(v, "value", null, $.value, b), (y = $.onVnodeBeforeMount) && Ce(y, x, f);
    }
    B && De(f, null, x, "beforeMount");
    const Y = Ei(_, I);
    Y && I.beforeEnter(v), n(v, a, g), ((y = $ && $.onVnodeMounted) || Y || B) && fe(() => {
      y && Ce(y, x, f), Y && I.enter(v), B && De(f, null, x, "mounted");
    }, _);
  }, V = (f, a, g, x, _) => {
    if (g && S(f, g), x)
      for (let b = 0; b < x.length; b++)
        S(f, x[b]);
    if (_) {
      let b = _.subTree;
      if (a === b || Oi(b.type) && (b.ssContent === a || b.ssFallback === a)) {
        const w = _.vnode;
        V(
          f,
          w,
          w.scopeId,
          w.slotScopeIds,
          _.parent
        );
      }
    }
  }, K = (f, a, g, x, _, b, w, A, v = 0) => {
    for (let y = v; y < f.length; y++) {
      const $ = f[y] = A ? Ue(f[y]) : Te(f[y]);
      F(
        null,
        $,
        a,
        g,
        x,
        _,
        b,
        w,
        A
      );
    }
  }, E = (f, a, g, x, _, b, w) => {
    const A = a.el = f.el;
    let { patchFlag: v, dynamicChildren: y, dirs: $ } = a;
    v |= f.patchFlag & 16;
    const P = f.props || ee, I = a.props || ee;
    let B;
    if (g && rt(g, !1), (B = I.onVnodeBeforeUpdate) && Ce(B, g, a, f), $ && De(a, f, g, "beforeUpdate"), g && rt(g, !0), (P.innerHTML && I.innerHTML == null || P.textContent && I.textContent == null) && u(A, ""), y ? O(
      f.dynamicChildren,
      y,
      A,
      g,
      x,
      Vs(a, _),
      b
    ) : w || L(
      f,
      a,
      A,
      null,
      g,
      x,
      Vs(a, _),
      b,
      !1
    ), v > 0) {
      if (v & 16)
        U(A, P, I, g, _);
      else if (v & 2 && P.class !== I.class && i(A, "class", null, I.class, _), v & 4 && i(A, "style", P.style, I.style, _), v & 8) {
        const Y = a.dynamicProps;
        for (let te = 0; te < Y.length; te++) {
          const z = Y[te], _e = P[z], ce = I[z];
          (ce !== _e || z === "value") && i(A, z, _e, ce, _, g);
        }
      }
      v & 1 && f.children !== a.children && u(A, a.children);
    } else !w && y == null && U(A, P, I, g, _);
    ((B = I.onVnodeUpdated) || $) && fe(() => {
      B && Ce(B, g, a, f), $ && De(a, f, g, "updated");
    }, x);
  }, O = (f, a, g, x, _, b, w) => {
    for (let A = 0; A < a.length; A++) {
      const v = f[A], y = a[A], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === Ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ct(v, y) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 198) ? d(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      F(
        v,
        y,
        $,
        null,
        x,
        _,
        b,
        w,
        !0
      );
    }
  }, U = (f, a, g, x, _) => {
    if (a !== g) {
      if (a !== ee)
        for (const b in a)
          !ft(b) && !(b in g) && i(
            f,
            b,
            a[b],
            null,
            _,
            x
          );
      for (const b in g) {
        if (ft(b)) continue;
        const w = g[b], A = a[b];
        w !== A && b !== "value" && i(f, b, A, w, _, x);
      }
      "value" in g && i(f, "value", a.value, g.value, _);
    }
  }, C = (f, a, g, x, _, b, w, A, v) => {
    const y = a.el = f ? f.el : l(""), $ = a.anchor = f ? f.anchor : l("");
    let { patchFlag: P, dynamicChildren: I, slotScopeIds: B } = a;
    B && (A = A ? A.concat(B) : B), f == null ? (n(y, g, x), n($, g, x), K(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      a.children || [],
      g,
      $,
      _,
      b,
      w,
      A,
      v
    )) : P > 0 && P & 64 && I && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === I.length ? (O(
      f.dynamicChildren,
      I,
      g,
      _,
      b,
      w,
      A
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (a.key != null || _ && a === _.subTree) && Cn(
      f,
      a,
      !0
      /* shallow */
    )) : L(
      f,
      a,
      g,
      $,
      _,
      b,
      w,
      A,
      v
    );
  }, G = (f, a, g, x, _, b, w, A, v) => {
    a.slotScopeIds = A, f == null ? a.shapeFlag & 512 ? _.ctx.activate(
      a,
      g,
      x,
      w,
      v
    ) : ne(
      a,
      g,
      x,
      _,
      b,
      w,
      v
    ) : oe(f, a, v);
  }, ne = (f, a, g, x, _, b, w) => {
    const A = f.component = Di(
      f,
      x,
      _
    );
    if (Cs(f) && (A.ctx.renderer = ht), $i(A, !1, w), A.asyncDep) {
      if (_ && _.registerDep(A, N, w), !f.el) {
        const v = A.subTree = he(ae);
        k(null, v, a, g), f.placeholder = v.el;
      }
    } else
      N(
        A,
        f,
        a,
        g,
        _,
        b,
        w
      );
  }, oe = (f, a, g) => {
    const x = a.component = f.component;
    if (Ol(f, a, g))
      if (x.asyncDep && !x.asyncResolved) {
        J(x, a, g);
        return;
      } else
        x.next = a, x.update();
    else
      a.el = f.el, x.vnode = a;
  }, N = (f, a, g, x, _, b, w) => {
    const A = () => {
      if (f.isMounted) {
        let { next: P, bu: I, u: B, parent: Y, vnode: te } = f;
        {
          const ye = wi(f);
          if (ye) {
            P && (P.el = te.el, J(f, P, w)), ye.asyncDep.then(() => {
              fe(() => {
                f.isUnmounted || y();
              }, _);
            });
            return;
          }
        }
        let z = P, _e;
        rt(f, !1), P ? (P.el = te.el, J(f, P, w)) : P = te, I && ls(I), (_e = P.props && P.props.onVnodeBeforeUpdate) && Ce(_e, Y, P, te), rt(f, !0);
        const ce = us(f), Me = f.subTree;
        f.subTree = ce, F(
          Me,
          ce,
          // parent may have changed if it's in a teleport
          d(Me.el),
          // anchor may have changed if it's in a fragment
          zt(Me),
          f,
          _,
          b
        ), P.el = ce.el, z === null && mi(f, ce.el), B && fe(B, _), (_e = P.props && P.props.onVnodeUpdated) && fe(
          () => Ce(_e, Y, P, te),
          _
        );
      } else {
        let P;
        const { el: I, props: B } = a, { bm: Y, m: te, parent: z, root: _e, type: ce } = f, Me = Tt(a);
        if (rt(f, !1), Y && ls(Y), !Me && (P = B && B.onVnodeBeforeMount) && Ce(P, z, a), rt(f, !0), I && Ps) {
          const ye = () => {
            f.subTree = us(f), Ps(
              I,
              f.subTree,
              f,
              _,
              null
            );
          };
          Me && ce.__asyncHydrate ? ce.__asyncHydrate(
            I,
            f,
            ye
          ) : ye();
        } else {
          _e.ce && _e.ce._hasShadowRoot() && _e.ce._injectChildStyle(ce);
          const ye = f.subTree = us(f);
          F(
            null,
            ye,
            g,
            x,
            f,
            _,
            b
          ), a.el = ye.el;
        }
        if (te && fe(te, _), !Me && (P = B && B.onVnodeMounted)) {
          const ye = a;
          fe(
            () => Ce(P, z, ye),
            _
          );
        }
        (a.shapeFlag & 256 || z && Tt(z.vnode) && z.vnode.shapeFlag & 256) && f.a && fe(f.a, _), f.isMounted = !0, a = g = x = null;
      }
    };
    f.scope.on();
    const v = f.effect = new Fr(A);
    f.scope.off();
    const y = f.update = v.run.bind(v), $ = f.job = v.runIfDirty.bind(v);
    $.i = f, $.id = f.uid, v.scheduler = () => Tn($), rt(f, !0), y();
  }, J = (f, a, g) => {
    a.component = f;
    const x = f.vnode.props;
    f.vnode = a, f.next = null, Fl(f, a.props, x, g), Dl(f, a.children, g), ke(), Dn(f), Ge();
  }, L = (f, a, g, x, _, b, w, A, v = !1) => {
    const y = f && f.children, $ = f ? f.shapeFlag : 0, P = a.children, { patchFlag: I, shapeFlag: B } = a;
    if (I > 0) {
      if (I & 128) {
        Qt(
          y,
          P,
          g,
          x,
          _,
          b,
          w,
          A,
          v
        );
        return;
      } else if (I & 256) {
        re(
          y,
          P,
          g,
          x,
          _,
          b,
          w,
          A,
          v
        );
        return;
      }
    }
    B & 8 ? ($ & 16 && At(y, _, b), P !== y && u(g, P)) : $ & 16 ? B & 16 ? Qt(
      y,
      P,
      g,
      x,
      _,
      b,
      w,
      A,
      v
    ) : At(y, _, b, !0) : ($ & 8 && u(g, ""), B & 16 && K(
      P,
      g,
      x,
      _,
      b,
      w,
      A,
      v
    ));
  }, re = (f, a, g, x, _, b, w, A, v) => {
    f = f || _t, a = a || _t;
    const y = f.length, $ = a.length, P = Math.min(y, $);
    let I;
    for (I = 0; I < P; I++) {
      const B = a[I] = v ? Ue(a[I]) : Te(a[I]);
      F(
        f[I],
        B,
        g,
        null,
        _,
        b,
        w,
        A,
        v
      );
    }
    y > $ ? At(
      f,
      _,
      b,
      !0,
      !1,
      P
    ) : K(
      a,
      g,
      x,
      _,
      b,
      w,
      A,
      v,
      P
    );
  }, Qt = (f, a, g, x, _, b, w, A, v) => {
    let y = 0;
    const $ = a.length;
    let P = f.length - 1, I = $ - 1;
    for (; y <= P && y <= I; ) {
      const B = f[y], Y = a[y] = v ? Ue(a[y]) : Te(a[y]);
      if (ct(B, Y))
        F(
          B,
          Y,
          g,
          null,
          _,
          b,
          w,
          A,
          v
        );
      else
        break;
      y++;
    }
    for (; y <= P && y <= I; ) {
      const B = f[P], Y = a[I] = v ? Ue(a[I]) : Te(a[I]);
      if (ct(B, Y))
        F(
          B,
          Y,
          g,
          null,
          _,
          b,
          w,
          A,
          v
        );
      else
        break;
      P--, I--;
    }
    if (y > P) {
      if (y <= I) {
        const B = I + 1, Y = B < $ ? a[B].el : x;
        for (; y <= I; )
          F(
            null,
            a[y] = v ? Ue(a[y]) : Te(a[y]),
            g,
            Y,
            _,
            b,
            w,
            A,
            v
          ), y++;
      }
    } else if (y > I)
      for (; y <= P; )
        Re(f[y], _, b, !0), y++;
    else {
      const B = y, Y = y, te = /* @__PURE__ */ new Map();
      for (y = Y; y <= I; y++) {
        const xe = a[y] = v ? Ue(a[y]) : Te(a[y]);
        xe.key != null && te.set(xe.key, y);
      }
      let z, _e = 0;
      const ce = I - Y + 1;
      let Me = !1, ye = 0;
      const Et = new Array(ce);
      for (y = 0; y < ce; y++) Et[y] = 0;
      for (y = B; y <= P; y++) {
        const xe = f[y];
        if (_e >= ce) {
          Re(xe, _, b, !0);
          continue;
        }
        let Le;
        if (xe.key != null)
          Le = te.get(xe.key);
        else
          for (z = Y; z <= I; z++)
            if (Et[z - Y] === 0 && ct(xe, a[z])) {
              Le = z;
              break;
            }
        Le === void 0 ? Re(xe, _, b, !0) : (Et[Le - Y] = y + 1, Le >= ye ? ye = Le : Me = !0, F(
          xe,
          a[Le],
          g,
          null,
          _,
          b,
          w,
          A,
          v
        ), _e++);
      }
      const Mn = Me ? $l(Et) : _t;
      for (z = Mn.length - 1, y = ce - 1; y >= 0; y--) {
        const xe = Y + y, Le = a[xe], On = a[xe + 1], Pn = xe + 1 < $ ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          On.el || Mi(On)
        ) : x;
        Et[y] === 0 ? F(
          null,
          Le,
          g,
          Pn,
          _,
          b,
          w,
          A,
          v
        ) : Me && (z < 0 || y !== Mn[z] ? nt(Le, g, Pn, 2) : z--);
      }
    }
  }, nt = (f, a, g, x, _ = null) => {
    const { el: b, type: w, transition: A, children: v, shapeFlag: y } = f;
    if (y & 6) {
      nt(f.component.subTree, a, g, x);
      return;
    }
    if (y & 128) {
      f.suspense.move(a, g, x);
      return;
    }
    if (y & 64) {
      w.move(f, a, g, ht);
      return;
    }
    if (w === Ae) {
      n(b, a, g);
      for (let P = 0; P < v.length; P++)
        nt(v[P], a, g, x);
      n(f.anchor, a, g);
      return;
    }
    if (w === Dt) {
      p(f, a, g);
      return;
    }
    if (x !== 2 && y & 1 && A)
      if (x === 0)
        A.beforeEnter(b), n(b, a, g), fe(() => A.enter(b), _);
      else {
        const { leave: P, delayLeave: I, afterLeave: B } = A, Y = () => {
          f.ctx.isUnmounted ? r(b) : n(b, a, g);
        }, te = () => {
          b._isLeaving && b[Ne](
            !0
            /* cancelled */
          ), P(b, () => {
            Y(), B && B();
          });
        };
        I ? I(b, Y, te) : te();
      }
    else
      n(b, a, g);
  }, Re = (f, a, g, x = !1, _ = !1) => {
    const {
      type: b,
      props: w,
      ref: A,
      children: v,
      dynamicChildren: y,
      shapeFlag: $,
      patchFlag: P,
      dirs: I,
      cacheIndex: B
    } = f;
    if (P === -2 && (_ = !1), A != null && (ke(), xt(A, null, g, f, !0), Ge()), B != null && (a.renderCache[B] = void 0), $ & 256) {
      a.ctx.deactivate(f);
      return;
    }
    const Y = $ & 1 && I, te = !Tt(f);
    let z;
    if (te && (z = w && w.onVnodeBeforeUnmount) && Ce(z, a, f), $ & 6)
      Gi(f.component, g, x);
    else {
      if ($ & 128) {
        f.suspense.unmount(g, x);
        return;
      }
      Y && De(f, null, a, "beforeUnmount"), $ & 64 ? f.type.remove(
        f,
        a,
        g,
        ht,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Ae || P > 0 && P & 64) ? At(
        y,
        a,
        g,
        !1,
        !0
      ) : (b === Ae && P & 384 || !_ && $ & 16) && At(v, a, g), x && En(f);
    }
    (te && (z = w && w.onVnodeUnmounted) || Y) && fe(() => {
      z && Ce(z, a, f), Y && De(f, null, a, "unmounted");
    }, g);
  }, En = (f) => {
    const { type: a, el: g, anchor: x, transition: _ } = f;
    if (a === Ae) {
      ki(g, x);
      return;
    }
    if (a === Dt) {
      m(f);
      return;
    }
    const b = () => {
      r(g), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (f.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: w, delayLeave: A } = _, v = () => w(g, b);
      A ? A(f.el, b, v) : v();
    } else
      b();
  }, ki = (f, a) => {
    let g;
    for (; f !== a; )
      g = T(f), r(f), f = g;
    r(a);
  }, Gi = (f, a, g) => {
    const { bum: x, scope: _, job: b, subTree: w, um: A, m: v, a: y } = f;
    Xn(v), Xn(y), x && ls(x), _.stop(), b && (b.flags |= 8, Re(w, f, a, g)), A && fe(A, a), fe(() => {
      f.isUnmounted = !0;
    }, a);
  }, At = (f, a, g, x = !1, _ = !1, b = 0) => {
    for (let w = b; w < f.length; w++)
      Re(f[w], a, g, x, _);
  }, zt = (f) => {
    if (f.shapeFlag & 6)
      return zt(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const a = T(f.anchor || f.el), g = a && a[Qr];
    return g ? T(g) : a;
  };
  let Ms = !1;
  const wn = (f, a, g) => {
    let x;
    f == null ? a._vnode && (Re(a._vnode, null, null, !0), x = a._vnode.component) : F(
      a._vnode || null,
      f,
      a,
      null,
      null,
      null,
      g
    ), a._vnode = f, Ms || (Ms = !0, Dn(x), gs(), Ms = !1);
  }, ht = {
    p: F,
    um: Re,
    m: nt,
    r: En,
    mt: ne,
    mc: K,
    pc: L,
    pbc: O,
    n: zt,
    o: e
  };
  let Os, Ps;
  return t && ([Os, Ps] = t(
    ht
  )), {
    render: wn,
    hydrate: Os,
    createApp: Sl(wn, Os)
  };
}
function Vs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function rt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ei(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Cn(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (j(n) && j(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Ue(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && Cn(o, l)), l.type === at && (l.patchFlag === -1 && (l = r[i] = Ue(l)), l.el = o.el), l.type === ae && !l.el && (l.el = o.el);
    }
}
function $l(e) {
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
function wi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : wi(t);
}
function Xn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Mi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Mi(t.subTree) : null;
}
const Oi = (e) => e.__isSuspense;
function Pi(e, t) {
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : ko(e);
}
const Ae = /* @__PURE__ */ Symbol.for("v-fgt"), at = /* @__PURE__ */ Symbol.for("v-txt"), ae = /* @__PURE__ */ Symbol.for("v-cmt"), Dt = /* @__PURE__ */ Symbol.for("v-stc"), Nt = [];
let ve = null;
function jl(e = !1) {
  Nt.push(ve = e ? null : []);
}
function Vl() {
  Nt.pop(), ve = Nt[Nt.length - 1] || null;
}
let Kt = 1;
function bs(e, t = !1) {
  Kt += e, e < 0 && ve && t && (ve.hasOnce = !0);
}
function Fi(e) {
  return e.dynamicChildren = Kt > 0 ? ve || _t : null, Vl(), Kt > 0 && ve && ve.push(e), e;
}
function Yc(e, t, s, n, r, i) {
  return Fi(
    Li(
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
function Bl(e, t, s, n, r) {
  return Fi(
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
function Wt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ri = ({ key: e }) => e ?? null, as = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || /* @__PURE__ */ de(e) || W(e) ? { i: Ee, r: e, k: t, f: !!s } : e : null);
function Li(e, t = null, s = null, n = 0, r = null, i = e === Ae ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ri(t),
    ref: t && as(t),
    scopeId: Yr,
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
    ctx: Ee
  };
  return l ? (An(c, s), i & 128 && e.normalize(c)) : s && (c.shapeFlag |= ie(s) ? 8 : 16), Kt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ve && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ve.push(c), c;
}
const he = Ul;
function Ul(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === gl) && (e = ae), Wt(e)) {
    const l = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && An(l, s), Kt > 0 && !i && ve && (l.shapeFlag & 6 ? ve[ve.indexOf(e)] = l : ve.push(l)), l.patchFlag = -2, l;
  }
  if (Xl(e) && (e = e.__vccOpts), t) {
    t = Kl(t);
    let { class: l, style: c } = t;
    l && !ie(l) && (t.class = hn(l)), Q(c) && (/* @__PURE__ */ xn(c) && !j(c) && (c = le({}, c)), t.style = an(c));
  }
  const o = ie(e) ? 1 : Oi(e) ? 128 : zr(e) ? 64 : Q(e) ? 4 : W(e) ? 2 : 0;
  return Li(
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
function Kl(e) {
  return e ? /* @__PURE__ */ xn(e) || yi(e) ? le({}, e) : e : null;
}
function tt(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e, h = t ? Wl(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Ri(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? j(i) ? i.concat(as(t)) : [i, as(t)] : as(t)
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
    patchFlag: t && e.type !== Ae ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && n && Ut(
    u,
    c.clone(u)
  ), u;
}
function Ii(e = " ", t = 0) {
  return he(at, null, e, t);
}
function Xc(e, t) {
  const s = he(Dt, null, e);
  return s.staticCount = t, s;
}
function Zc(e = "", t = !1) {
  return t ? (jl(), Bl(ae, null, e)) : he(ae, null, e);
}
function Te(e) {
  return e == null || typeof e == "boolean" ? he(ae) : j(e) ? he(
    Ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Wt(e) ? Ue(e) : he(at, null, String(e));
}
function Ue(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function An(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (j(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), An(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !yi(t) ? t._ctx = Ee : r === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else W(t) ? (t = { default: t, _ctx: Ee }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Ii(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Wl(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = hn([t.class, n.class]));
      else if (r === "style")
        t.style = an([t.style, n.style]);
      else if (qt(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(j(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Ce(e, t, s, n = null) {
  Fe(e, t, 7, [
    s,
    n
  ]);
}
const kl = di();
let Gl = 0;
function Di(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || kl, i = {
    uid: Gl++,
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
    scope: new ao(
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
    propsOptions: Ti(n, r),
    emitsOptions: pi(n, r),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Al.bind(null, i), e.ce && e.ce(i), i;
}
let me = null;
const Ni = () => me || Ee;
let ys, nn;
{
  const e = Ts(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  ys = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => me = s
  ), nn = t(
    "__VUE_SSR_SETTERS__",
    (s) => kt = s
  );
}
const Zt = (e) => {
  const t = me;
  return ys(e), e.scope.on(), () => {
    e.scope.off(), ys(t);
  };
}, Zn = () => {
  me && me.scope.off(), ys(null);
};
function Hi(e) {
  return e.vnode.shapeFlag & 4;
}
let kt = !1;
function $i(e, t = !1, s = !1) {
  t && nn(t);
  const { props: n, children: r } = e.vnode, i = Hi(e);
  Pl(e, n, i, t), Il(e, r, s || t);
  const o = i ? ql(e, t) : void 0;
  return t && nn(!1), o;
}
function ql(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ml);
  const { setup: n } = s;
  if (n) {
    ke();
    const r = e.setupContext = n.length > 1 ? Yl(e) : null, i = Zt(e), o = Xt(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = vr(o);
    if (Ge(), i(), (l || e.sp) && !Tt(e) && oi(e), l) {
      if (o.then(Zn, Zn), t)
        return o.then((c) => {
          Qn(e, c);
        }).catch((c) => {
          Ss(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Qn(e, o);
  } else
    ji(e);
}
function Qn(e, t, s) {
  W(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) && (e.setupState = kr(t)), ji(e);
}
function ji(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || He);
  {
    const r = Zt(e);
    ke();
    try {
      _l(e);
    } finally {
      Ge(), r();
    }
  }
}
const Jl = {
  get(e, t) {
    return ue(e, "get", ""), e[t];
  }
};
function Yl(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Jl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ws(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(kr(Lo(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in It)
        return It[s](e);
    },
    has(t, s) {
      return s in t || s in It;
    }
  })) : e.proxy;
}
function Xl(e) {
  return W(e) && "__vccOpts" in e;
}
const Zl = (e, t) => /* @__PURE__ */ jo(e, t, kt);
function Ql(e, t, s) {
  try {
    bs(-1);
    const n = arguments.length;
    return n === 2 ? Q(t) && !j(t) ? Wt(t) ? he(e, null, [t]) : he(e, t) : he(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Wt(s) && (s = [s]), he(e, t, s));
  } finally {
    bs(1);
  }
}
const zl = "3.5.29", ec = {
  createComponentInstance: Di,
  setupComponent: $i,
  renderComponentRoot: us,
  setCurrentRenderingInstance: Bt,
  isVNode: Wt,
  normalizeVNode: Te
}, Qc = ec;
let rn;
const zn = typeof window < "u" && window.trustedTypes;
if (zn)
  try {
    rn = /* @__PURE__ */ zn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Vi = rn ? (e) => rn.createHTML(e) : (e) => e, tc = "http://www.w3.org/2000/svg", sc = "http://www.w3.org/1998/Math/MathML", Be = typeof document < "u" ? document : null, er = Be && /* @__PURE__ */ Be.createElement("template"), nc = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Be.createElementNS(tc, e) : t === "mathml" ? Be.createElementNS(sc, e) : s ? Be.createElement(e, { is: s }) : Be.createElement(e);
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
      er.innerHTML = Vi(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = er.content;
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
}, Ye = "transition", Ot = "animation", Gt = /* @__PURE__ */ Symbol("_vtc"), Bi = {
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
}, rc = /* @__PURE__ */ le(
  {},
  ti,
  Bi
), ic = (e) => (e.displayName = "Transition", e.props = rc, e), zc = /* @__PURE__ */ ic(
  (e, { slots: t }) => Ql(el, oc(e), t)
), it = (e, t = []) => {
  j(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, tr = (e) => e ? j(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function oc(e) {
  const t = {};
  for (const C in e)
    C in Bi || (t[C] = e[C]);
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
    appearToClass: u = l,
    leaveFromClass: d = `${s}-leave-from`,
    leaveActiveClass: T = `${s}-leave-active`,
    leaveToClass: S = `${s}-leave-to`
  } = e, R = lc(r), F = R && R[0], q = R && R[1], {
    onBeforeEnter: k,
    onEnter: D,
    onEnterCancelled: p,
    onLeave: m,
    onLeaveCancelled: M,
    onBeforeAppear: H = k,
    onAppear: V = D,
    onAppearCancelled: K = p
  } = t, E = (C, G, ne, oe) => {
    C._enterCancelled = oe, ot(C, G ? u : l), ot(C, G ? h : o), ne && ne();
  }, O = (C, G) => {
    C._isLeaving = !1, ot(C, d), ot(C, S), ot(C, T), G && G();
  }, U = (C) => (G, ne) => {
    const oe = C ? V : D, N = () => E(G, C, ne);
    it(oe, [G, N]), sr(() => {
      ot(G, C ? c : i), Ve(G, C ? u : l), tr(oe) || nr(G, n, F, N);
    });
  };
  return le(t, {
    onBeforeEnter(C) {
      it(k, [C]), Ve(C, i), Ve(C, o);
    },
    onBeforeAppear(C) {
      it(H, [C]), Ve(C, c), Ve(C, h);
    },
    onEnter: U(!1),
    onAppear: U(!0),
    onLeave(C, G) {
      C._isLeaving = !0;
      const ne = () => O(C, G);
      Ve(C, d), C._enterCancelled ? (Ve(C, T), or(C)) : (or(C), Ve(C, T)), sr(() => {
        C._isLeaving && (ot(C, d), Ve(C, S), tr(m) || nr(C, n, q, ne));
      }), it(m, [C, ne]);
    },
    onEnterCancelled(C) {
      E(C, !1, void 0, !0), it(p, [C]);
    },
    onAppearCancelled(C) {
      E(C, !0, void 0, !0), it(K, [C]);
    },
    onLeaveCancelled(C) {
      O(C), it(M, [C]);
    }
  });
}
function lc(e) {
  if (e == null)
    return null;
  if (Q(e))
    return [Bs(e.enter), Bs(e.leave)];
  {
    const t = Bs(e);
    return [t, t];
  }
}
function Bs(e) {
  return Zi(e);
}
function Ve(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[Gt] || (e[Gt] = /* @__PURE__ */ new Set())).add(t);
}
function ot(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[Gt];
  s && (s.delete(t), s.size || (e[Gt] = void 0));
}
function sr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let cc = 0;
function nr(e, t, s, n) {
  const r = e._endId = ++cc, i = () => {
    r === e._endId && n();
  };
  if (s != null)
    return setTimeout(i, s);
  const { type: o, timeout: l, propCount: c } = fc(e, t);
  if (!o)
    return n();
  const h = o + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(h, T), i();
  }, T = (S) => {
    S.target === e && ++u >= c && d();
  };
  setTimeout(() => {
    u < c && d();
  }, l + 1), e.addEventListener(h, T);
}
function fc(e, t) {
  const s = window.getComputedStyle(e), n = (R) => (s[R] || "").split(", "), r = n(`${Ye}Delay`), i = n(`${Ye}Duration`), o = rr(r, i), l = n(`${Ot}Delay`), c = n(`${Ot}Duration`), h = rr(l, c);
  let u = null, d = 0, T = 0;
  t === Ye ? o > 0 && (u = Ye, d = o, T = i.length) : t === Ot ? h > 0 && (u = Ot, d = h, T = c.length) : (d = Math.max(o, h), u = d > 0 ? o > h ? Ye : Ot : null, T = u ? u === Ye ? i.length : c.length : 0);
  const S = u === Ye && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Ye}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: T,
    hasTransform: S
  };
}
function rr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => ir(s) + ir(e[n])));
}
function ir(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function or(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function uc(e, t, s) {
  const n = e[Gt];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const lr = /* @__PURE__ */ Symbol("_vod"), ac = /* @__PURE__ */ Symbol("_vsh"), hc = /* @__PURE__ */ Symbol(""), dc = /(?:^|;)\s*display\s*:/;
function pc(e, t, s) {
  const n = e.style, r = ie(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (ie(t))
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
      const o = n[hc];
      o && (s += ";" + o), n.cssText = s, i = dc.test(s);
    }
  } else t && e.removeAttribute("style");
  lr in e && (e[lr] = i ? n.display : "", e[ac] && (n.display = "none"));
}
const cr = /\s*!important$/;
function hs(e, t, s) {
  if (j(s))
    s.forEach((n) => hs(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = gc(e, t);
    cr.test(s) ? e.setProperty(
      st(n),
      s.replace(cr, ""),
      "important"
    ) : e[n] = s;
  }
}
const fr = ["Webkit", "Moz", "ms"], Us = {};
function gc(e, t) {
  const s = Us[t];
  if (s)
    return s;
  let n = et(t);
  if (n !== "filter" && n in e)
    return Us[t] = n;
  n = Ar(n);
  for (let r = 0; r < fr.length; r++) {
    const i = fr[r] + n;
    if (i in e)
      return Us[t] = i;
  }
  return t;
}
const ur = "http://www.w3.org/1999/xlink";
function ar(e, t, s, n, r, i = ro(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(ur, t.slice(6, t.length)) : e.setAttributeNS(ur, t, s) : s == null || i && !Mr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : $e(s) ? String(s) : s
  );
}
function hr(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Vi(s) : s);
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
    l === "boolean" ? s = Mr(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function mt(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function mc(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const dr = /* @__PURE__ */ Symbol("_vei");
function _c(e, t, s, n, r = null) {
  const i = e[dr] || (e[dr] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, c] = bc(t);
    if (n) {
      const h = i[t] = Tc(
        n,
        r
      );
      mt(e, l, h, c);
    } else o && (mc(e, l, o, c), i[t] = void 0);
  }
}
const pr = /(?:Once|Passive|Capture)$/;
function bc(e) {
  let t;
  if (pr.test(e)) {
    t = {};
    let n;
    for (; n = e.match(pr); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : st(e.slice(2)), t];
}
let Ks = 0;
const yc = /* @__PURE__ */ Promise.resolve(), xc = () => Ks || (yc.then(() => Ks = 0), Ks = Date.now());
function Tc(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Fe(
      vc(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = xc(), s;
}
function vc(e, t) {
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
const gr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Sc = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? uc(e, n, o) : t === "style" ? pc(e, s, n) : qt(t) ? on(t) || _c(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Cc(e, t, n, o)) ? (hr(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ar(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(n)) ? hr(e, et(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), ar(e, t, n, o));
};
function Cc(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && gr(t) && W(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return gr(t) && ie(s) ? !1 : t in e;
}
const mr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return j(t) ? (s) => ls(t, s) : t;
};
function Ac(e) {
  e.target.composing = !0;
}
function _r(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ws = /* @__PURE__ */ Symbol("_assign");
function br(e, t, s) {
  return t && (e = e.trim()), s && (e = un(e)), e;
}
const Ec = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, r) {
    e[Ws] = mr(r);
    const i = n || r.props && r.props.type === "number";
    mt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Ws](br(e.value, s, i));
    }), (s || i) && mt(e, "change", () => {
      e.value = br(e.value, s, i);
    }), t || (mt(e, "compositionstart", Ac), mt(e, "compositionend", _r), mt(e, "change", _r));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: r, number: i } }, o) {
    if (e[Ws] = mr(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? un(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (n && t === s || r && e.value.trim() === c) || (e.value = c));
  }
}, wc = {}, Mc = {};
function Oc() {
  Ec.getSSRProps = ({ value: e }) => ({ value: e }), Mc.getSSRProps = ({ value: e }, t) => {
    if (t.props && Yt(t.props.value, e))
      return { checked: !0 };
  }, wc.getSSRProps = ({ value: e }, t) => {
    if (j(e)) {
      if (t.props && fo(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (cn(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  };
}
const Pc = ["ctrl", "shift", "alt", "meta"], Fc = {
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
  exact: (e, t) => Pc.some((s) => e[`${s}Key`] && !t.includes(s))
}, ef = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = Fc[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, Ui = /* @__PURE__ */ le({ patchProp: Sc }, nc);
let Ht, yr = !1;
function Rc() {
  return Ht || (Ht = Nl(Ui));
}
function Lc() {
  return Ht = yr ? Ht : Hl(Ui), yr = !0, Ht;
}
const tf = ((...e) => {
  const t = Rc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = Wi(n);
    if (!r) return;
    const i = t._component;
    !W(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, Ki(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
}), sf = ((...e) => {
  const t = Lc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = Wi(n);
    if (r)
      return s(r, !0, Ki(r));
  }, t;
});
function Ki(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Wi(e) {
  return ie(e) ? document.querySelector(e) : e;
}
let xr = !1;
const nf = () => {
  xr || (xr = !0, Oc());
};
export {
  $c as $,
  ef as A,
  tf as B,
  Ts as C,
  Jo as D,
  Qc as E,
  Ae as F,
  vr as G,
  W as H,
  ie as I,
  ae as J,
  Uc as K,
  at as L,
  Bc as M,
  He as N,
  Nc as O,
  j as P,
  qt as Q,
  Ct as R,
  Dt as S,
  Gc as T,
  an as U,
  Ic as V,
  Vc as W,
  Dc as X,
  jc as Y,
  Hc as Z,
  Mr as _,
  Zc as a,
  Q as a0,
  Kc as a1,
  nf as a2,
  sf as a3,
  ci as b,
  Yc as c,
  qc as d,
  Li as e,
  Ii as f,
  Jc as g,
  Bl as h,
  cs as i,
  he as j,
  zc as k,
  Go as l,
  kc as m,
  hn as n,
  jl as o,
  Zl as p,
  bn as q,
  Wc as r,
  Ko as s,
  uo as t,
  No as u,
  Ec as v,
  Hs as w,
  ui as x,
  Wl as y,
  Xc as z
};
