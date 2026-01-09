import { d as Xn, m as Ls, w as Mr, a as tt, o as As, b as Eu, h as Xo, r as ke, i as nn, g as Jo, c as Lt, t as Mu, e as Ou, f as Pu, j as Fu, k as Ir, l as Qo, n as Vu, p as on, q as ia, s as Nu, u as tl, v as er, x as ho, y as Bu, z as gt, A as Cn, F as Ru, B as Hu, C as Wu, D as la, E as Ku, G as pa, H as go, I as ju } from "./runtime-dom.esm-bundler-D-e5HISe.js";
var Yu = typeof window < "u", rl = [
  "__key",
  "__init",
  "__shim",
  "__original",
  "__index",
  "__prevKey"
];
function vr() {
  return Math.random().toString(36).substring(2, 15);
}
function Zu(e, t) {
  return [...e instanceof Set ? e : new Set(e)];
}
function G(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function W(e, t, r = !0, n = ["__key"]) {
  if (e === t) return !0;
  if (typeof t == "object" && typeof e == "object") {
    if (e instanceof Map || e instanceof Set) return !1;
    if (e instanceof Date && t instanceof Date)
      return e.getTime() === t.getTime();
    if (e instanceof RegExp && t instanceof RegExp)
      return Uu(e, t);
    if (e === null || t === null || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const o of n)
      if ((o in e || o in t) && e[o] !== t[o]) return !1;
    for (const o in e)
      if (!(o in t) || e[o] !== t[o] && !r || r && !W(e[o], t[o], r, n)) return !1;
    return !0;
  }
  return !1;
}
function Uu(e, t) {
  return e.source === t.source && e.flags.split("").sort().join("") === t.flags.split("").sort().join("");
}
function Be(e) {
  const t = typeof e;
  if (t === "number") return !1;
  if (e === void 0) return !0;
  if (t === "string")
    return e === "";
  if (t === "object") {
    if (e === null) return !0;
    for (const r in e) return !1;
    return !(e instanceof RegExp || e instanceof Date);
  }
  return !1;
}
function qu(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function zu(e) {
  const t = `^${qu(e)}$`, r = {
    MM: "(0[1-9]|1[012])",
    M: "([1-9]|1[012])",
    DD: "([012][0-9]|3[01])",
    D: "([012]?[0-9]|3[01])",
    YYYY: "\\d{4}",
    YY: "\\d{2}"
  }, n = Object.keys(r);
  return new RegExp(
    n.reduce((o, s) => o.replace(s, r[s]), t)
  );
}
function Mt(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function tr(e) {
  return Mt(e) || Array.isArray(e);
}
function bt(e) {
  if (Mt(e) === !1 || e.__FKNode__ || e.__POJO__ === !1) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(Mt(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1);
}
var xt = /* @__NO_SIDE_EFFECTS__ */ (e, t, r = !1, n = !1) => {
  if (t === null) return null;
  const o = {};
  if (typeof t == "string") return t;
  for (const s in e)
    if (G(t, s) && (t[s] !== void 0 || !n)) {
      if (r && Array.isArray(e[s]) && Array.isArray(t[s])) {
        o[s] = e[s].concat(t[s]);
        continue;
      }
      if (t[s] === void 0)
        continue;
      bt(e[s]) && bt(t[s]) ? o[s] = /* @__PURE__ */ xt(
        e[s],
        t[s],
        r,
        n
      ) : o[s] = t[s];
    } else
      o[s] = e[s];
  for (const s in t)
    !G(o, s) && t[s] !== void 0 && (o[s] = t[s]);
  return o;
};
function Gu(e) {
  if (e[0] !== '"' && e[0] !== "'" || e[0] !== e[e.length - 1]) return !1;
  const t = e[0];
  for (let r = 1; r < e.length; r++)
    if (e[r] === t && (r === 1 || e[r - 1] !== "\\") && r !== e.length - 1)
      return !1;
  return !0;
}
function Xu(e) {
  if (!e.length) return "";
  let t = "", r = "";
  for (let n = 0; n < e.length; n++) {
    const o = e.charAt(n);
    (o !== "\\" || r === "\\") && (t += o), r = o;
  }
  return t;
}
function Wt(...e) {
  return e.reduce((t, r) => {
    const { value: n, name: o, modelValue: s, config: a, plugins: i, ...l } = r;
    return Object.assign(t, l);
  }, {});
}
function Ju(e) {
  const t = [];
  let r = "", n = 0, o = "", s = "";
  for (let a = 0; a < e.length; a++) {
    const i = e.charAt(a);
    i === o && s !== "\\" ? o = "" : (i === "'" || i === '"') && !o && s !== "\\" ? o = i : i === "(" && !o ? n++ : i === ")" && !o && n--, i === "," && !o && n === 0 ? (t.push(r), r = "") : (i !== " " || o) && (r += i), s = i;
  }
  return r && t.push(r), t;
}
function ua(e, t) {
  const r = {}, n = t.filter((s) => s instanceof RegExp), o = new Set(t);
  for (const s in e)
    !o.has(s) && !n.some((a) => a.test(s)) && (r[s] = e[s]);
  return r;
}
function ca(e, t) {
  const r = {}, n = t.filter((o) => o instanceof RegExp);
  return t.forEach((o) => {
    o instanceof RegExp || (r[o] = e[o]);
  }), Object.keys(e).forEach((o) => {
    n.some((s) => s.test(o)) && (r[o] = e[o]);
  }), r;
}
function rr(e) {
  return e.replace(
    /-([a-z0-9])/gi,
    (t, r) => r.toUpperCase()
  );
}
function nl(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (t, r, n) => r + "-" + n.toLowerCase()
  ).replace(" ", "-").toLowerCase();
}
function es(e, t = rl) {
  if (e !== null && typeof e == "object") {
    let r;
    if (Array.isArray(e) ? r = [...e] : bt(e) && (r = { ...e }), r)
      return ec(e, r, t), r;
  }
  return e;
}
function wt(e, t = rl) {
  if (e === null || e instanceof RegExp || e instanceof Date || e instanceof Map || e instanceof Set || typeof File == "function" && e instanceof File)
    return e;
  let r;
  Array.isArray(e) ? r = e.map((n) => typeof n == "object" ? wt(n, t) : n) : r = Object.keys(e).reduce((n, o) => (n[o] = typeof e[o] == "object" ? wt(e[o], t) : e[o], n), {});
  for (const n of t)
    n in e && Object.defineProperty(r, n, {
      enumerable: !1,
      value: e[n]
    });
  return r;
}
function We(e) {
  return typeof e == "object" ? wt(e) : e;
}
function Qu(e, t) {
  if (!e || typeof e != "object") return null;
  const r = t.split(".");
  let n = e;
  for (const o in r) {
    const s = r[o];
    if (G(n, s) && (n = n[s]), +o === r.length - 1) return n;
    if (!n || typeof n != "object") return null;
  }
  return null;
}
function H(e) {
  return e !== void 0 && e !== "false" && e !== !1 ? !0 : void 0;
}
function ir(e) {
  return Object.isFrozen(e) ? e : Object.defineProperty(e, "__init", {
    enumerable: !1,
    value: !0
  });
}
function Ts(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, " ").trim().replace(/\s+/g, "-");
}
function ec(e, t, r) {
  for (const n of r)
    n in e && Object.defineProperty(t, n, {
      enumerable: !1,
      value: e[n]
    });
  return t;
}
function fe(e, t, r) {
  if (!Yu) return;
  r || (r = document);
  const n = r.getElementById(e);
  if (n) return t(n);
  const o = new MutationObserver(() => {
    const s = r?.getElementById(e);
    s && (o?.disconnect(), t(s));
  });
  o.observe(r, { childList: !0, subtree: !0 });
}
function tc(e) {
  let t = !1;
  return ((...r) => {
    if (!t)
      return t = !0, queueMicrotask(() => t = !1), e(...r);
  });
}
function rc(e) {
  if (!(e === "false" || e === !1))
    return !0;
}
function Is() {
  const e = [];
  let t = 0;
  const r = (o) => e.push(o), n = (o) => {
    const s = e[t];
    return typeof s == "function" ? s(o, (a) => (t++, n(a))) : (t = 0, o);
  };
  return r.dispatch = n, r.unshift = (o) => e.unshift(o), r.remove = (o) => {
    const s = e.indexOf(o);
    s > -1 && e.splice(s, 1);
  }, r;
}
function ol() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  let r;
  const n = (o, s) => {
    if (r) {
      r.set(s.name, [o, s]);
      return;
    }
    e.has(s.name) && e.get(s.name).forEach((a) => {
      (s.origin === o || a.modifiers.includes("deep")) && a.listener(s);
    }), s.bubble && o.bubble(s);
  };
  return n.flush = () => {
    e.clear(), t.clear(), r?.clear();
  }, n.on = (o, s, a = "push") => {
    const [i, ...l] = o.split("."), p = s.receipt || vr(), u = {
      modifiers: l,
      event: i,
      listener: s,
      receipt: p
    };
    return e.has(i) ? e.get(i)[a](u) : e.set(i, [u]), t.has(p) ? t.get(p)[a](i) : t.set(p, [i]), p;
  }, n.off = (o) => {
    t.has(o) && (t.get(o)?.forEach((s) => {
      const a = e.get(s);
      Array.isArray(a) && e.set(
        s,
        a.filter((i) => i.receipt !== o)
      );
    }), t.delete(o));
  }, n.pause = (o) => {
    r || (r = /* @__PURE__ */ new Map()), o && o.walk((s) => s._e.pause());
  }, n.play = (o) => {
    if (!r) return;
    const s = r;
    r = void 0, s.forEach(([a, i]) => n(a, i)), o && o.walk((a) => a._e.play());
  }, n;
}
function nc(e, t, r, n, o = !0, s) {
  return t._e(e, {
    payload: n,
    name: r,
    bubble: o,
    origin: e,
    meta: s
  }), e;
}
function oc(e, t, r) {
  return Gr(e.parent) && e.parent._e(e.parent, r), e;
}
function sc(e, t, r, n, o) {
  return t._e.on(r, n, o);
}
function ac(e, t, r) {
  return t._e.off(r), e;
}
var Es = Is();
Es((e, t) => (e.message || (e.message = `E${e.code}`), t(e)));
var Ms = Is();
Ms((e, t) => {
  e.message || (e.message = `W${e.code}`);
  const r = t(e);
  return console && typeof console.warn == "function" && console.warn(r.message), r;
});
function _t(e, t = {}) {
  Ms.dispatch({ code: e, data: t });
}
function Ae(e, t = {}) {
  throw Error(Es.dispatch({ code: e, data: t }).message);
}
function ye(e, t) {
  return {
    blocking: !1,
    key: vr(),
    meta: {},
    type: "state",
    visible: !0,
    ...e
  };
}
var da = {
  apply: dc,
  set: lc,
  remove: sl,
  filter: uc,
  reduce: cc,
  release: hc,
  touch: pc
};
function ic(e = !1) {
  const t = {};
  let r, n = e, o = [];
  const s = /* @__PURE__ */ new Map();
  let a;
  const i = new Proxy(t, {
    get(...l) {
      const [p, u] = l;
      return u === "buffer" ? n : u === "_b" ? o : u === "_m" ? s : u === "_r" ? a : G(da, u) ? da[u].bind(
        null,
        t,
        i,
        r
      ) : Reflect.get(...l);
    },
    set(l, p, u) {
      return p === "_n" ? (r = u, a === "__n" && al(r, i), !0) : p === "_b" ? (o = u, !0) : p === "buffer" ? (n = u, !0) : p === "_r" ? (a = u, !0) : (Ae(101, r), !1);
    }
  });
  return i;
}
function lc(e, t, r, n) {
  if (t.buffer)
    return t._b.push([[n]]), t;
  if (e[n.key] !== n) {
    if (typeof n.value == "string" && n.meta.localize !== !1) {
      const s = n.value;
      n.value = r.t(n), n.value !== s && (n.meta.locale = r.props.locale);
    }
    const o = `message-${G(e, n.key) ? "updated" : "added"}`;
    e[n.key] = Object.freeze(
      r.hook.message.dispatch(n)
    ), r.emit(o, n);
  }
  return t;
}
function pc(e, t) {
  for (const r in e) {
    const n = { ...e[r] };
    t.set(n);
  }
}
function sl(e, t, r, n) {
  if (G(e, n)) {
    const o = e[n];
    delete e[n], r.emit("message-removed", o);
  }
  return t.buffer === !0 && (t._b = t._b.filter((o) => (o[0] = o[0].filter((s) => s.key !== n), o[1] || o[0].length))), t;
}
function uc(e, t, r, n, o) {
  for (const s in e) {
    const a = e[s];
    (!o || a.type === o) && !n(a) && sl(e, t, r, s);
  }
}
function cc(e, t, r, n, o) {
  for (const s in e) {
    const a = e[s];
    o = n(o, a);
  }
  return o;
}
function dc(e, t, r, n, o) {
  if (Array.isArray(n)) {
    if (t.buffer) {
      t._b.push([n, o]);
      return;
    }
    const s = new Set(
      n.map((a) => (t.set(a), a.key))
    );
    typeof o == "string" ? t.filter(
      (a) => a.type !== o || s.has(a.key)
    ) : typeof o == "function" && t.filter((a) => !o(a) || s.has(a.key));
  } else
    for (const s in n) {
      const a = r.at(s);
      a ? a.store.apply(n[s], o) : mc(r, t, s, n[s], o);
    }
}
function fc(e, ...t) {
  const r = `${e.name}-set`, n = (o) => /* @__PURE__ */ ye({
    key: Ts(o),
    type: "error",
    value: o,
    meta: { source: r, autoClear: !0 }
  });
  return t.filter((o) => !!o).map((o) => {
    if (typeof o == "string" && (o = [o]), Array.isArray(o))
      return o.map((s) => n(s));
    {
      const s = {};
      for (const a in o)
        Array.isArray(o[a]) ? s[a] = o[a].map(
          (i) => n(i)
        ) : s[a] = [n(o[a])];
      return s;
    }
  });
}
function mc(e, t, r, n, o) {
  const s = t._m;
  s.has(r) || s.set(r, []), t._r || (t._r = al(e, t)), s.get(r)?.push([n, o]);
}
function al(e, t) {
  return e.on(
    "child.deep",
    ({ payload: r }) => {
      t._m.forEach((n, o) => {
        e.at(o) === r && (n.forEach(([s, a]) => {
          r.store.apply(s, a);
        }), t._m.delete(o));
      }), t._m.size === 0 && t._r && (e.off(t._r), t._r = void 0);
    }
  );
}
function hc(e, t) {
  t.buffer = !1, t._b.forEach(([r, n]) => t.apply(r, n)), t._b = [];
}
function gc() {
  const e = {};
  let t;
  return {
    count: (...r) => vc(t, e, ...r),
    init(r) {
      t = r, r.on("message-added.deep", fa(e, 1)), r.on("message-removed.deep", fa(e, -1));
    },
    merge: (r) => ma(t, e, r),
    settled(r) {
      return G(e, r) ? e[r].promise : Promise.resolve();
    },
    unmerge: (r) => ma(t, e, r, !0),
    value(r) {
      return G(e, r) ? e[r].count : 0;
    }
  };
}
function vc(e, t, r, n, o = 0) {
  if (n = $c(n || r), !G(t, r)) {
    const s = {
      condition: n,
      count: 0,
      name: r,
      node: e,
      promise: Promise.resolve(),
      resolve: () => {
      }
      // eslint-disable-line @typescript-eslint/no-empty-function
    };
    t[r] = s, o = e.store.reduce(
      (a, i) => a + s.condition(i) * 1,
      o
    ), e.each((a) => {
      a.ledger.count(s.name, s.condition), o += a.ledger.value(s.name);
    });
  }
  return il(t[r], o).promise;
}
function $c(e) {
  return typeof e == "function" ? e : (t) => t.type === e;
}
function il(e, t) {
  const r = e.count, n = e.count + t;
  return e.count = n, r === 0 && n !== 0 ? (e.node.emit(`unsettled:${e.name}`, e.count, !1), e.promise = new Promise((o) => e.resolve = o)) : r !== 0 && n === 0 && (e.node.emit(`settled:${e.name}`, e.count, !1), e.resolve()), e.node.emit(`count:${e.name}`, e.count, !1), e;
}
function fa(e, t) {
  return (r) => {
    for (const n in e) {
      const o = e[n];
      o.condition(r.payload) && il(o, t);
    }
  };
}
function ma(e, t, r, n = !1) {
  const o = e;
  for (const s in t) {
    const a = t[s].condition;
    n || r.ledger.count(s, a);
    const i = r.ledger.value(s) * (n ? -1 : 1);
    if (e) {
      do
        e.ledger.count(s, a, i), e = e.parent;
      while (e);
      e = o;
    }
  }
}
var Os = /* @__PURE__ */ new Map(), yn = /* @__PURE__ */ new Map(), Ps = ol();
function yc(e) {
  e.props.id && (Os.set(e.props.id, e), yn.set(e, e.props.id), Ps(e, {
    payload: e,
    name: e.props.id,
    bubble: !1,
    origin: e
  }));
}
function bc(e) {
  if (yn.has(e)) {
    const t = yn.get(e);
    yn.delete(e), Os.delete(t), Ps(e, {
      payload: null,
      name: t,
      bubble: !1,
      origin: e
    });
  }
}
function zr(e) {
  return Os.get(e);
}
function xc(e, t) {
  return Ps.on(e, t);
}
function ts(e, t, r) {
  let n = !0;
  return t in e.config._t ? n = !1 : e.emit(`config:${t}`, r, !1), t in e.props || (e.emit("prop", { prop: t, value: r }), e.emit(`prop:${t}`, r)), n;
}
function wc(e = {}) {
  const t = /* @__PURE__ */ new Set(), r = {
    ...e,
    _add: (o) => t.add(o),
    _rm: (o) => t.delete(o)
  };
  return new Proxy(r, {
    set(o, s, a, i) {
      return typeof s == "string" && t.forEach((l) => ts(l, s, a)), Reflect.set(o, s, a, i);
    }
  });
}
function ll(e, t) {
  const r = (t || document).getElementById(e);
  if (r instanceof HTMLFormElement) {
    const n = new Event("submit", { cancelable: !0, bubbles: !0 });
    r.dispatchEvent(n);
    return;
  }
  _t(151, e);
}
function _c(e) {
  const t = (r) => {
    for (const n in r.store) {
      const o = r.store[n];
      o.type === "error" || o.type === "ui" && n === "incomplete" ? r.store.remove(n) : o.type === "state" && r.store.set({ ...o, value: !1 });
    }
  };
  t(e), e.walk(t);
}
function pl(e, t) {
  const r = typeof e == "string" ? zr(e) : e;
  if (r) {
    const n = (a) => {
      const i = We(a.props.initial);
      return i !== void 0 ? i : a.type === "group" ? {} : a.type === "list" ? [] : void 0;
    };
    r._e.pause(r);
    const o = We(t);
    return t && !Be(t) && (r.props.initial = tr(o) ? ir(o) : o, r.props._init = r.props.initial), r.input(n(r), !1), r.walk((a) => {
      a.type === "list" && a.sync || a.input(n(a), !1);
    }), r.input(
      Be(o) && o ? o : n(r),
      !1
    ), r.type !== "input" && t && !Be(t) && tr(t) && r.walk((a) => {
      a.props.initial = tr(a.value) ? ir(a.value) : a.value, a.props._init = a.props.initial;
    }), r._e.play(r), _c(r), r.emit("reset", r), r;
  }
  _t(152, e);
}
var kc = {
  delimiter: ".",
  delay: 0,
  locale: "en",
  rootClasses: (e) => ({ [`formkit-${nl(e)}`]: !0 })
}, ul = /* @__PURE__ */ Symbol("index"), rs = /* @__PURE__ */ Symbol("removed"), ns = /* @__PURE__ */ Symbol("moved"), cl = /* @__PURE__ */ Symbol("inserted");
function Sc(e) {
  return e.type === "list" && Array.isArray(e._value);
}
function Gr(e) {
  return e && typeof e == "object" && e.__FKNode__ === !0;
}
var bn = (e, t, r) => {
  Ae(102, [e, r]);
}, Dc = {
  _c: ae(Uc, bn, !1),
  add: ae(Bc),
  addProps: ae(Nc),
  address: ae(zc, bn, !1),
  at: ae(Gc),
  bubble: ae(oc),
  clearErrors: ae(sd),
  calm: ae(Pc),
  config: ae(!1),
  define: ae(Vc),
  disturb: ae(Oc),
  destroy: ae(Fc),
  extend: ae(id),
  hydrate: ae(Ec),
  index: ae(Zc, Yc, !1),
  input: ae(ml),
  each: ae(Wc),
  emit: ae(nc),
  find: ae(Jc),
  on: ae(sc),
  off: ae(ac),
  parent: ae(!1, Rc),
  plugins: ae(!1),
  remove: ae(Hc),
  root: ae(ed, bn, !1),
  reset: ae(nd),
  resetConfig: ae(jc),
  setErrors: ae(od),
  submit: ae(rd),
  t: ae(td),
  use: ae(Fs),
  name: ae(qc, !1, !1),
  walk: ae(Kc)
};
function Cc() {
  return new Map(Object.entries(Dc));
}
function ae(e, t, r = !0) {
  return {
    get: e ? (n, o) => r ? (...s) => e(n, o, ...s) : e(n, o) : !1,
    set: t !== void 0 ? t : bn.bind(null)
  };
}
function Lc() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(e, {
    get(t, r) {
      return e.has(r) || e.set(r, Is()), e.get(r);
    }
  });
}
var dl = 0, Ac = 0;
function Tc(e) {
  return e.parent?.type === "list" ? ul : e.name || `${e.props?.type || "input"}_${++dl}`;
}
function fl(e) {
  return e.type === "group" ? ir(
    e.value && typeof e.value == "object" && !Array.isArray(e.value) ? e.value : {}
  ) : e.type === "list" ? ir(Array.isArray(e.value) ? e.value : []) : e.value;
}
function ml(e, t, r, n = !0) {
  return t._value = Ic(e, e.hook.input.dispatch(r)), e.emit("input", t._value), e.isCreated && e.type === "input" && W(t._value, t.value) && !e.props.mergeStrategy ? (e.emit("commitRaw", t.value), t.settled) : (t.isSettled && e.disturb(), n ? (t._tmo && clearTimeout(t._tmo), t._tmo = setTimeout(
    Ln,
    e.props.delay,
    e,
    t
  )) : Ln(e, t), t.settled);
}
function Ic(e, t) {
  switch (e.type) {
    // Inputs are allowed to have any type
    case "input":
      break;
    case "group":
      (!t || typeof t != "object") && Ae(107, [e, t]);
      break;
    case "list":
      Array.isArray(t) || Ae(108, [e, t]);
      break;
  }
  return t;
}
function Ln(e, t, r = !0, n = !0) {
  t._value = t.value = e.hook.commit.dispatch(t._value), e.type !== "input" && n && e.hydrate(), e.emit("commitRaw", t.value), e.emit("commit", t.value), r && e.calm();
}
function hl(e, { name: t, value: r, from: n }) {
  if (!Object.isFrozen(e._value)) {
    if (Sc(e)) {
      const o = r === rs ? [] : r === ns && typeof n == "number" ? e._value.splice(n, 1) : [r];
      e._value.splice(
        t,
        r === ns || n === cl ? 0 : 1,
        ...o
      );
      return;
    }
    r !== rs ? e._value[t] = r : delete e._value[t];
  }
}
function Ec(e, t) {
  const r = t._value;
  return e.type === "list" && e.sync && Mc(e, t), t.children.forEach((n) => {
    if (typeof r == "object")
      if (n.name in r) {
        const o = n.type !== "input" || r[n.name] && typeof r[n.name] == "object" ? ir(r[n.name]) : r[n.name];
        if (!n.isSettled || (!tr(o) || n.props.mergeStrategy) && W(o, n._value))
          return;
        n.input(o, !1);
      } else
        (e.type !== "list" || typeof n.name == "number") && hl(t, { name: n.name, value: n.value }), r.__init || (n.type === "group" ? n.input({}, !1) : n.type === "list" ? n.input([], !1) : n.input(void 0, !1));
  }), e;
}
function Mc(e, t) {
  const r = e._value;
  if (!Array.isArray(r)) return;
  const n = [], o = new Set(t.children), s = /* @__PURE__ */ new Map();
  r.forEach((i, l) => {
    if (t.children[l] && t.children[l]._value === i)
      n.push(t.children[l]), o.delete(t.children[l]);
    else {
      n.push(null);
      const p = s.get(i) || [];
      p.push(l), s.set(i, p);
    }
  }), o.size && s.size && o.forEach((i) => {
    if (s.has(i._value)) {
      const l = s.get(i._value), p = l.shift();
      n[p] = i, o.delete(i), l.length || s.delete(i._value);
    }
  });
  const a = [];
  for (let i = 0; i < n.length; i++)
    n[i] === null && a.push(i);
  for (; o.size && a.length; ) {
    const i = o.values().next().value, l = a.shift();
    if (l === void 0 || i === void 0) break;
    n[l] = i, o.delete(i);
  }
  a.forEach((i) => {
    n[i] = cd({ value: r[i] });
  }), o.size && o.forEach((i) => {
    if (!("__FKP" in i)) {
      const l = i._c.parent;
      if (!l || dd(l)) return;
      l.ledger.unmerge(i), i._c.parent = null, i.destroy();
    }
  }), t.children = n;
}
function Oc(e, t) {
  return t._d <= 0 && (t.isSettled = !1, e.emit("settled", !1, !1), t.settled = new Promise((r) => {
    t._resolve = r;
  }), e.parent && e.parent?.disturb()), t._d++, e;
}
function Pc(e, t, r) {
  if (r !== void 0 && e.type !== "input") {
    hl(t, r);
    const n = !!(e.config.mergeStrategy && e.config.mergeStrategy[r.name]);
    return Ln(e, t, !0, n);
  }
  t._d > 0 && t._d--, t._d === 0 && (t.isSettled = !0, e.emit("settled", !0, !1), e.parent && e.parent?.calm({ name: e.name, value: t.value }), t._resolve && t._resolve(t.value));
}
function Fc(e, t) {
  e.emit("destroying", e), e.store.filter(() => !1), e.parent && e.parent.remove(e), bc(e), e.emit("destroyed", e), t._e.flush(), t._value = t.value = void 0;
  for (const r in t.context)
    delete t.context[r];
  t.plugins.clear(), t.context = null;
}
function Vc(e, t, r) {
  t.type = r.type;
  const n = wt(r);
  e.props.__propDefs = gl(
    e.props.__propDefs ?? [],
    n?.props || []
  ), n.props = e.props.__propDefs, t.props.definition = n, t.value = t._value = fl({
    type: e.type,
    value: t.value
  }), r.forceTypeProp && (e.props.type && (e.props.originalType = e.props.type), t.props.type = r.forceTypeProp), r.family && (t.props.family = r.family), r.features && r.features.forEach((o) => o(e)), r.props && e.addProps(r.props), e.emit("defined", r);
}
function Nc(e, t, r) {
  const n = Array.isArray(r) ? r : Object.keys(r), o = Array.isArray(r) ? {} : n.reduce((a, i) => ("default" in r[i] && (a[i] = r[i].default), a), {});
  if (e.props.attrs) {
    const a = { ...e.props.attrs };
    e.props._emit = !1;
    for (const l in a) {
      const p = rr(l);
      n.includes(p) && (e.props[p] = a[l], delete a[l]);
    }
    Array.isArray(r) || n.forEach((l) => {
      "default" in r[l] && e.props[l] === void 0 && (e.props[l] = o[l]);
    });
    const i = We(t._value);
    e.props.initial = e.type !== "input" ? ir(i) : i, e.props._emit = !0, e.props.attrs = a;
  }
  const s = gl(e.props.__propDefs ?? [], r);
  return e.props.definition && (e.props.definition.props = s), e.props.__propDefs = s, e.emit("added-props", r), e;
}
function os(e) {
  return Array.isArray(e) ? e.reduce((t, r) => (t[r] = {}, t), {}) : e;
}
function gl(e, t) {
  return Array.isArray(e) && Array.isArray(t) ? e.concat(t) : xt(os(e), os(t));
}
function Bc(e, t, r, n) {
  if (e.type === "input" && Ae(100, e), r.parent && r.parent !== e && r.parent.remove(r), !t.children.includes(r)) {
    if (n !== void 0 && e.type === "list") {
      const o = t.children[n];
      o && "__FKP" in o ? (r._c.uid = o.uid, t.children.splice(n, 1, r)) : t.children.splice(n, 0, r), Array.isArray(e.value) && e.value.length < t.children.length && e.disturb().calm({
        name: n,
        value: r.value,
        from: cl
      });
    } else
      t.children.push(r);
    r.isSettled || e.disturb();
  }
  if (r.parent !== e) {
    if (r.parent = e, r.parent !== e)
      return e.remove(r), r.parent.add(r), e;
  } else
    r.use(e.plugins);
  return Ln(e, t, !1), e.ledger.merge(r), e.emit("child", r), e;
}
function Rc(e, t, r, n) {
  return Gr(n) ? (e.parent && e.parent !== n && e.parent.remove(e), t.parent = n, e.resetConfig(), n.children.includes(e) ? e.use(n.plugins) : n.add(e), !0) : n === null ? (t.parent = null, !0) : !1;
}
function Hc(e, t, r) {
  const n = t.children.indexOf(r);
  if (n !== -1) {
    r.isSettled && e.disturb(), t.children.splice(n, 1);
    let o = H(r.props.preserve), s = r.parent;
    for (; o === void 0 && s; )
      o = H(s.props.preserve), s = s.parent;
    o ? e.calm() : e.calm({
      name: e.type === "list" ? n : r.name,
      value: rs
    }), r.parent = null, r.config._rmn = r;
  }
  return e.ledger.unmerge(r), e.emit("childRemoved", r), e;
}
function Wc(e, t, r) {
  t.children.forEach((n) => !("__FKP" in n) && r(n));
}
function Kc(e, t, r, n = !1, o = !1) {
  t.children.some((s) => {
    if ("__FKP" in s) return !1;
    const a = r(s);
    return n && a === !1 ? !0 : o && a === !1 ? !1 : s.walk(r, n, o);
  });
}
function jc(e, t) {
  const r = e.parent || void 0;
  t.config = vl(e.config._t, r), e.walk((n) => n.resetConfig());
}
function Fs(e, t, r, n = !0, o = !0) {
  return Array.isArray(r) || r instanceof Set ? (r.forEach((s) => Fs(e, t, s)), e) : (t.plugins.has(r) || (o && typeof r.library == "function" && r.library(e), n && r(e) !== !1 && (t.plugins.add(r), e.children.forEach((s) => s.use(r)))), e);
}
function Yc(e, t, r, n) {
  if (Gr(e.parent)) {
    const o = e.parent.children, s = n >= o.length ? o.length - 1 : n < 0 ? 0 : n, a = o.indexOf(e);
    return a === -1 ? !1 : (o.splice(a, 1), o.splice(s, 0, e), e.parent.children = o, e.parent.type === "list" && e.parent.disturb().calm({ name: s, value: ns, from: a }), !0);
  }
  return !1;
}
function Zc(e) {
  if (e.parent) {
    const t = [...e.parent.children].indexOf(e);
    return t === -1 ? e.parent.children.length : t;
  }
  return -1;
}
function Uc(e, t) {
  return t;
}
function qc(e, t) {
  return e.parent?.type === "list" ? e.index : t.name !== ul ? t.name : e.index;
}
function zc(e, t) {
  return t.parent ? t.parent.address.concat([e.name]) : [e.name];
}
function Gc(e, t, r) {
  const n = typeof r == "string" ? r.split(e.config.delimiter) : r;
  if (!n.length) return;
  const o = n[0];
  let s = e.parent;
  for (s || (String(n[0]) === String(e.name) && n.shift(), s = e), o === "$parent" && n.shift(); s && n.length; ) {
    const a = n.shift();
    switch (a) {
      case "$root":
        s = e.root;
        break;
      case "$parent":
        s = s.parent;
        break;
      case "$self":
        s = e;
        break;
      default:
        s = s.children.find(
          (i) => !("__FKP" in i) && String(i.name) === String(a)
        ) || Xc(s, a);
    }
  }
  return s || void 0;
}
function Xc(e, t) {
  const r = String(t).match(/^(find)\((.*)\)$/);
  if (r) {
    const [, n, o] = r, s = o.split(",").map((a) => a.trim());
    return n === "find" ? e.find(s[0], s[1]) : void 0;
  }
}
function Jc(e, t, r, n) {
  return Qc(e, r, n);
}
function Qc(e, t, r = "name") {
  const n = typeof r == "string" ? (s) => s[r] == t : r, o = [e];
  for (; o.length; ) {
    const s = o.shift();
    if (!("__FKP" in s)) {
      if (n(s, t)) return s;
      o.push(...s.children);
    }
  }
}
function ed(e) {
  let t = e;
  for (; t.parent; )
    t = t.parent;
  return t;
}
function vl(e = {}, t) {
  let r;
  return new Proxy(e, {
    get(...n) {
      const o = n[1];
      if (o === "_t") return e;
      const s = Reflect.get(...n);
      if (s !== void 0) return s;
      if (t) {
        const a = t.config[o];
        if (a !== void 0) return a;
      }
      if (e.rootConfig && typeof o == "string") {
        const a = e.rootConfig[o];
        if (a !== void 0) return a;
      }
      return o === "delay" && r?.type === "input" ? 20 : kc[o];
    },
    set(...n) {
      const o = n[1], s = n[2];
      if (o === "_n")
        return r = s, e.rootConfig && e.rootConfig._add(r), !0;
      if (o === "_rmn")
        return e.rootConfig && e.rootConfig._rm(r), r = void 0, !0;
      if (!W(e[o], s, !1)) {
        const a = Reflect.set(...n);
        return r && (r.emit(`config:${o}`, s, !1), ts(r, o, s), r.walk((i) => ts(i, o, s), !1, !0)), a;
      }
      return !0;
    }
  });
}
function td(e, t, r, n = "ui") {
  const o = typeof r == "string" ? { key: r, value: r, type: n } : r, s = e.hook.text.dispatch(o);
  return e.emit("text", s, !1), s.value;
}
function rd(e) {
  const t = e.name;
  do {
    if (e.props.isForm === !0) break;
    e.parent || Ae(106, t), e = e.parent;
  } while (e);
  e.props.id && ll(e.props.id, e.props.__root);
}
function nd(e, t, r) {
  return pl(e, r);
}
function od(e, t, r, n) {
  const o = `${e.name}-set`, s = e.hook.setErrors.dispatch({ localErrors: r, childErrors: n });
  return fc(e, s.localErrors, s.childErrors).forEach(
    (a) => {
      e.store.apply(a, (i) => i.meta.source === o);
    }
  ), e;
}
function sd(e, t, r = !0, n) {
  return e.store.filter((o) => !(n === void 0 || o.meta.source === n), "error"), r && (n = n || `${e.name}-set`, e.walk((o) => {
    o.store.filter((s) => !(s.type === "error" && s.meta && s.meta.source === n));
  })), e;
}
function ad(e) {
  const t = {
    initial: typeof e == "object" ? We(e) : e
  };
  let r, n = !0, o = {};
  return new Proxy(t, {
    get(...s) {
      const [a, i] = s;
      let l;
      G(t, i) ? (l = Reflect.get(...s), o[i]?.boolean && (l = rc(l))) : r && typeof i == "string" && r.config[i] !== void 0 ? (l = r.config[i], i === "mergeStrategy" && r?.type === "input" && Mt(l) && r.name in l && (l = l[r.name])) : l = o[i]?.default;
      const p = o[i]?.getter;
      return o[i]?.boolean && (l = !!l), p ? p(l, r) : l;
    },
    set(s, a, i, l) {
      if (a === "_n")
        return r = i, !0;
      if (a === "_emit")
        return n = i, !0;
      let { prop: p, value: u } = r.hook.prop.dispatch({
        prop: a,
        value: i
      });
      const c = o[p]?.setter;
      if (u = c ? c(u, r) : u, !W(t[p], u, !1) || typeof u == "object") {
        const f = Reflect.set(s, p, u, l);
        return p === "__propDefs" && (o = os(u)), n && (r.emit("prop", { prop: p, value: u }), typeof p == "string" && r.emit(`prop:${p}`, u)), f;
      }
      return !0;
    }
  });
}
function id(e, t, r, n) {
  return t.traps.set(r, n), e;
}
function ld(e, t) {
  if (e.props.definition) return e.define(e.props.definition);
  for (const r of t) {
    if (e.props.definition) return;
    typeof r.library == "function" && r.library(e);
  }
}
function pd(e) {
  const t = fl(e), r = vl(e.config || {}, e.parent);
  return {
    _d: 0,
    _e: ol(),
    uid: /* @__PURE__ */ Symbol(),
    _resolve: !1,
    _tmo: !1,
    _value: t,
    children: Zu(e.children || []),
    config: r,
    hook: Lc(),
    isCreated: !1,
    isSettled: !0,
    ledger: gc(),
    name: Tc(e),
    parent: e.parent || null,
    plugins: /* @__PURE__ */ new Set(),
    props: ad(t),
    settled: Promise.resolve(t),
    store: ic(!0),
    sync: e.sync || !1,
    traps: Cc(),
    type: e.type || "input",
    value: t
  };
}
function ud(e, t) {
  const r = t.props?.id;
  if (r || delete t.props?.id, e.ledger.init(e.store._n = e.props._n = e.config._n = e), e.props._emit = !1, Object.assign(
    e.props,
    r ? {} : { id: `input_${Ac++}` },
    t.props ?? {}
  ), e.props._emit = !0, ld(
    e,
    /* @__PURE__ */ new Set([
      ...t.plugins || [],
      ...e.parent ? e.parent.plugins : []
    ])
  ), t.plugins)
    for (const n of t.plugins)
      Fs(e, e._c, n, !0, !1);
  return e.each((n) => e.add(n)), e.parent && e.parent.add(e, t.index), e.type === "input" && e.children.length && Ae(100, e), ml(e, e._c, e._value, !1), e.store.release(), r && yc(e), e.emit("created", e), e.isCreated = !0, e;
}
function cd(e) {
  return {
    __FKP: !0,
    uid: /* @__PURE__ */ Symbol(),
    name: e?.name ?? `p_${dl++}`,
    value: e?.value ?? null,
    _value: e?.value ?? null,
    type: e?.type ?? "input",
    props: {},
    use: () => {
    },
    input(t) {
      return this._value = t, this.value = t, Promise.resolve();
    },
    isSettled: !0
  };
}
function dd(e) {
  return "__FKP" in e;
}
function fd(e) {
  const t = e || {}, r = pd(t), n = new Proxy(r, {
    get(...o) {
      const [, s] = o;
      if (s === "__FKNode__") return !0;
      const a = r.traps.get(s);
      return a && a.get ? a.get(n, r) : Reflect.get(...o);
    },
    set(...o) {
      const [, s, a] = o, i = r.traps.get(s);
      return i && i.set ? i.set(n, r, s, a) : Reflect.set(...o);
    }
  });
  return ud(n, t);
}
function Ot(e) {
  return typeof e != "string" && G(e, "$el");
}
function Rr(e) {
  return typeof e != "string" && G(e, "$cmp");
}
function qt(e) {
  return !e || typeof e == "string" ? !1 : G(e, "if") && G(e, "then");
}
function md(e) {
  return typeof e != "string" && "$formkit" in e;
}
function hd(e) {
  if (typeof e == "string")
    return {
      $el: "text",
      children: e
    };
  if (md(e)) {
    const {
      $formkit: t,
      for: r,
      if: n,
      children: o,
      bind: s,
      ...a
    } = e;
    return Object.assign(
      {
        $cmp: "FormKit",
        props: { ...a, type: t }
      },
      n ? { if: n } : {},
      r ? { for: r } : {},
      o ? { children: o } : {},
      s ? { bind: s } : {}
    );
  }
  return e;
}
function He(e) {
  let t;
  const r = /* @__PURE__ */ new Set(), n = function(y, m) {
    return typeof y == "function" ? y(m) : y;
  }, o = [
    {
      "&&": (h, y, m) => n(h, m) && n(y, m),
      "||": (h, y, m) => n(h, m) || n(y, m)
    },
    {
      "===": (h, y, m) => n(h, m) === n(y, m),
      "!==": (h, y, m) => n(h, m) !== n(y, m),
      "==": (h, y, m) => n(h, m) == n(y, m),
      "!=": (h, y, m) => n(h, m) != n(y, m),
      ">=": (h, y, m) => n(h, m) >= n(y, m),
      "<=": (h, y, m) => n(h, m) <= n(y, m),
      ">": (h, y, m) => n(h, m) > n(y, m),
      "<": (h, y, m) => n(h, m) < n(y, m)
    },
    {
      "+": (h, y, m) => n(h, m) + n(y, m),
      "-": (h, y, m) => n(h, m) - n(y, m)
    },
    {
      "*": (h, y, m) => n(h, m) * n(y, m),
      "/": (h, y, m) => n(h, m) / n(y, m),
      "%": (h, y, m) => n(h, m) % n(y, m)
    }
  ], s = o.reduce((h, y) => h.concat(Object.keys(y)), []), a = new Set(s.map((h) => h.charAt(0)));
  function i(h, y, m, S) {
    const g = h.filter((_) => _.startsWith(y));
    return g.length ? g.find((_) => S.length >= m + _.length && S.substring(m, m + _.length) === _ ? _ : !1) : !1;
  }
  function l(h, y, m = 1) {
    let S = m ? y.substring(h + 1).trim() : y.substring(0, h).trim();
    if (!S.length) return -1;
    if (!m) {
      const _ = S.split("").reverse(), C = _.findIndex((k) => a.has(k));
      S = _.slice(C).join("");
    }
    const g = S[0];
    return o.findIndex((_) => {
      const C = Object.keys(_);
      return !!i(C, g, 0, S);
    });
  }
  function p(h, y) {
    let m = "";
    const S = y.length;
    let g = 0;
    for (let _ = h; _ < S; _++) {
      const C = y.charAt(_);
      if (C === "(")
        g++;
      else if (C === ")")
        g--;
      else if (g === 0 && C === " ")
        continue;
      if (g === 0 && i(s, C, _, y))
        return [m, _ - 1];
      m += C;
    }
    return [m, y.length - 1];
  }
  function u(h, y = 0) {
    const m = o[y], S = h.length, g = Object.keys(m);
    let _ = 0, C = !1, k = null, D = "", w = null, L, x = "", b = "", v = "", T = "", V = 0;
    const U = (J, Z) => {
      J ? v += Z : D += Z;
    };
    for (let J = 0; J < S; J++)
      if (x = b, b = h.charAt(J), (b === "'" || b === '"') && x !== "\\" && (_ === 0 && !C || _ && !T)) {
        _ ? T = b : C = b, U(_, b);
        continue;
      } else if (C && (b !== C || x === "\\") || T && (b !== T || x === "\\")) {
        U(_, b);
        continue;
      } else if (C === b) {
        C = !1, U(_, b);
        continue;
      } else if (T === b) {
        T = !1, U(_, b);
        continue;
      } else {
        if (b === " ")
          continue;
        if (b === "(")
          _ === 0 ? V = J : v += b, _++;
        else if (b === ")")
          if (_--, _ === 0) {
            const Z = typeof D == "string" && D.startsWith("$") ? D : void 0, pe = Z && h.charAt(J + 1) === ".";
            let he = "";
            pe && ([he, J] = p(J + 2, h));
            const De = k ? y : l(V, h, 0), ee = l(J, h);
            De === -1 && ee === -1 ? (D = c(v, -1, Z, he), typeof D == "string" && (D = v)) : k && (De >= ee || ee === -1) && y === De ? (w = k.bind(null, c(v, -1, Z, he)), k = null, D = "") : ee > De && y === ee ? D = c(v, -1, Z, he) : D += `(${v})${pe ? `.${he}` : ""}`, v = "";
          } else
            v += b;
        else if (_ === 0 && (L = i(g, b, J, h))) {
          J === 0 && Ae(103, [L, h]), J += L.length - 1, J === h.length - 1 && Ae(104, [L, h]), k ? D && (w = k.bind(null, c(D, y)), k = m[L].bind(null, w), D = "") : w ? (k = m[L].bind(null, c(w, y)), w = null) : (k = m[L].bind(null, c(D, y)), D = "");
          continue;
        } else
          U(_, b);
      }
    return D && k && (k = k.bind(null, c(D, y))), k = !k && w ? w : k, !k && D && (k = (J, Z) => typeof J == "function" ? J(Z) : J, k = k.bind(null, c(D, y))), !k && !D && Ae(105, h), k;
  }
  function c(h, y, m, S) {
    if (m) {
      const g = c(m, o.length);
      let _, C = S ? He(`$${S}`) : !1;
      if (typeof g == "function") {
        const k = Ju(String(h)).map(
          (D) => c(D, -1)
        );
        return (D) => {
          const w = g(D);
          return typeof w != "function" ? (_t(150, m), w) : (_ = w(
            ...k.map(
              (L) => typeof L == "function" ? L(D) : L
            )
          ), C && (C = C.provide((L) => {
            const x = t(L);
            return L.reduce(
              (v, T) => {
                if (T === S || S?.startsWith(`${T}(`)) {
                  const U = Qu(_, T);
                  v[T] = () => U;
                } else
                  v[T] = x[T];
                return v;
              },
              {}
            );
          })), C ? C() : _);
        };
      }
    } else if (typeof h == "string") {
      if (h === "true") return !0;
      if (h === "false") return !1;
      if (h === "undefined") return;
      if (Gu(h))
        return Xu(h.substring(1, h.length - 1));
      if (!isNaN(+h)) return Number(h);
      if (y < o.length - 1)
        return u(h, y + 1);
      if (h.startsWith("$")) {
        const g = h.substring(1);
        return r.add(g), function(C) {
          return g in C ? C[g]() : void 0;
        };
      }
      return h;
    }
    return h;
  }
  const f = u(
    e.startsWith("$:") ? e.substring(2) : e
  ), d = Array.from(r);
  function $(h) {
    return t = h, Object.assign(
      // @ts-ignore - @rollup/plugin-typescript doesn't like this
      f.bind(null, h(d)),
      { provide: $ }
    );
  }
  return Object.assign(f, {
    provide: $
  });
}
function xn(e, t, r) {
  return r ? typeof r == "string" ? r.split(" ").reduce(
    (o, s) => Object.assign(o, { [s]: !0 }),
    {}
  ) : typeof r == "function" ? xn(
    e,
    t,
    r(t, e)
  ) : r : {};
}
function gd(e, t, ...r) {
  const n = r.reduce((o, s) => {
    if (!s) return vo(o);
    const { $reset: a, ...i } = s;
    return vo(a ? i : Object.assign(o, i));
  }, {});
  return Object.keys(
    e.hook.classes.dispatch({ property: t, classes: n }).classes
  ).filter((o) => n[o]).join(" ") || null;
}
function vo(e) {
  const t = "$remove:";
  let r = !1;
  const n = Object.keys(e).filter((o) => (e[o] && o.startsWith(t) && (r = !0), e[o]));
  return n.length > 1 && r && n.filter((s) => s.startsWith(t)).map((s) => {
    const a = s.substring(t.length);
    e[a] = !1, e[s] = !1;
  }), e;
}
function vd(e, t, r) {
  const n = zr(e);
  n ? n.setErrors(t, r) : _t(651, e);
}
function $d(e, t = !0) {
  const r = zr(e);
  r ? r.clearErrors(t) : _t(652, e);
}
var An = "1.7.2", $l = /* @__PURE__ */ new WeakSet();
function Jn(e, t) {
  const r = t || Object.assign(/* @__PURE__ */ new Map(), { active: !1 }), n = /* @__PURE__ */ new Map(), o = function(u) {
    r.active && (r.has(e) || r.set(e, /* @__PURE__ */ new Set()), r.get(e)?.add(u));
  }, s = function(u) {
    return new Proxy(u, {
      get(...c) {
        return typeof c[1] == "string" && o(`prop:${c[1]}`), Reflect.get(...c);
      }
    });
  }, a = function(u) {
    return new Proxy(u, {
      get(...c) {
        return c[1] === "value" ? (f) => (o(`count:${f}`), u.value(f)) : Reflect.get(...c);
      }
    });
  }, i = function(u, c) {
    return Gr(u) ? Jn(u, r) : (c === "value" && o("commit"), c === "_value" && o("input"), c === "props" ? s(u) : c === "ledger" ? a(u) : (c === "children" && (o("child"), o("childRemoved")), u));
  }, {
    proxy: l,
    revoke: p
  } = Proxy.revocable(e, {
    get(...u) {
      switch (u[1]) {
        case "_node":
          return e;
        case "deps":
          return r;
        case "watch":
          return (f, d, $) => xl(l, f, d, $);
        case "observe":
          return () => {
            const f = new Map(r);
            return r.clear(), r.active = !0, f;
          };
        case "stopObserve":
          return () => {
            const f = new Map(r);
            return r.active = !1, f;
          };
        case "receipts":
          return n;
        case "kill":
          return () => {
            bl(n), $l.add(u[2]), p();
          };
      }
      const c = Reflect.get(...u);
      return typeof c == "function" ? (...f) => {
        const d = c(...f);
        return i(d, u[1]);
      } : i(c, u[1]);
    }
  });
  return l;
}
function yl(e, [t, r], n, o) {
  t.forEach((s, a) => {
    s.forEach((i) => {
      e.receipts.has(a) || e.receipts.set(a, {});
      const l = e.receipts.get(a) ?? {};
      l[i] = l[i] ?? [], l[i].push(a.on(i, n, o)), e.receipts.set(a, l);
    });
  }), r.forEach((s, a) => {
    s.forEach((i) => {
      if (e.receipts.has(a)) {
        const l = e.receipts.get(a);
        l && G(l, i) && (l[i].map(a.off), delete l[i], e.receipts.set(a, l));
      }
    });
  });
}
function bl(e) {
  e.forEach((t, r) => {
    for (const n in t)
      t[n].map(r.off);
  }), e.clear();
}
function xl(e, t, r, n) {
  const o = (i) => {
    const l = e.stopObserve();
    yl(
      e,
      wl(s, l),
      () => xl(e, t, r, n),
      n
    ), r && r(i);
  }, s = new Map(e.deps);
  e.observe();
  const a = t(e);
  a instanceof Promise ? a.then((i) => o(i)) : o(a);
}
function wl(e, t) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  return t.forEach((o, s) => {
    if (!e.has(s))
      r.set(s, o);
    else {
      const a = /* @__PURE__ */ new Set(), i = e.get(s);
      o.forEach(
        (l) => !i?.has(l) && a.add(l)
      ), r.set(s, a);
    }
  }), e.forEach((o, s) => {
    if (!t.has(s))
      n.set(s, o);
    else {
      const a = /* @__PURE__ */ new Set(), i = t.get(s);
      o.forEach(
        (l) => !i?.has(l) && a.add(l)
      ), n.set(s, a);
    }
  }), [r, n];
}
function Vs(e) {
  return $l.has(e);
}
var _l = function({ value: t }) {
  return ["yes", "on", "1", 1, !0, "true"].includes(t);
};
_l.skipEmpty = !1;
var yd = _l, bd = function({ value: e }, t = !1) {
  const r = Date.parse(t || /* @__PURE__ */ new Date()), n = Date.parse(String(e));
  return isNaN(n) ? !1 : n > r;
}, xd = bd, wd = function({ value: e }, t = !1) {
  const r = Date.parse(t || /* @__PURE__ */ new Date()), n = Date.parse(String(e));
  return isNaN(n) ? !1 : n > r || n === r;
}, _d = wd, kd = function(e, t) {
  if (!t) return !1;
  const r = Date.parse(String(e.value)), n = Date.parse(String(e.at(t)?.value));
  return isNaN(n) ? !0 : isNaN(r) ? !1 : r > n;
}, Sd = kd, Dd = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("^\\p{L}+$", "u"),
    latin: /^[a-z]+$/i
  }, n = G(r, t) ? t : "default";
  return r[n].test(String(e));
}, Cd = Dd, Ld = function({ value: e }, t = "default") {
  const r = {
    default: /^[\p{L} ]+$/u,
    latin: /^[a-z ]+$/i
  }, n = G(r, t) ? t : "default";
  return r[n].test(String(e));
}, Ad = Ld, Td = function({ value: e }, t = "default") {
  const r = {
    default: /^[0-9\p{L}]+$/u,
    latin: /^[0-9a-z]+$/i
  }, n = G(r, t) ? t : "default";
  return r[n].test(String(e));
}, Id = Td, Ed = function({ value: e }, t = !1) {
  const r = Date.parse(t || /* @__PURE__ */ new Date()), n = Date.parse(String(e));
  return isNaN(n) ? !1 : n < r;
}, Md = Ed, Od = function(e, t) {
  if (!t) return !1;
  const r = Date.parse(String(e.value)), n = Date.parse(String(e.at(t)?.value));
  return isNaN(n) ? !0 : isNaN(r) ? !1 : r < n;
}, Pd = Od, Fd = function({ value: e }, t = !1) {
  const r = Date.parse(t || /* @__PURE__ */ new Date()), n = Date.parse(String(e));
  return isNaN(n) ? !1 : n < r || n === r;
}, Vd = Fd, Nd = function({ value: t }, r, n) {
  if (!isNaN(t) && !isNaN(r) && !isNaN(n)) {
    const o = 1 * t;
    r = Number(r), n = Number(n);
    const [s, a] = r <= n ? [r, n] : [n, r];
    return o >= 1 * s && o <= 1 * a;
  }
  return !1;
}, Bd = Nd, ha = /(_confirm(?:ed)?)$/, Rd = function(t, r, n = "loose") {
  r || (r = ha.test(t.name) ? t.name.replace(ha, "") : `${t.name}_confirm`);
  const o = t.at(r)?.value;
  return n === "strict" ? t.value === o : t.value == o;
}, Hd = Rd, Wd = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("\\p{L}", "u"),
    latin: /[a-z]/i
  }, n = G(r, t) ? t : "default";
  return r[n].test(String(e));
}, Kd = Wd, jd = function({ value: e }, t = "default") {
  const r = {
    default: /[\p{L} ]/u,
    latin: /[a-z ]/i
  }, n = G(r, t) ? t : "default";
  return r[n].test(String(e));
}, Yd = jd, Zd = function({ value: e }, t = "default") {
  const r = {
    default: /[0-9\p{L}]/u,
    latin: /[0-9a-z]/i
  }, n = G(r, t) ? t : "default";
  return r[n].test(String(e));
}, Ud = Zd, qd = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("\\p{Ll}", "u"),
    latin: /[a-z]/
  }, n = G(r, t) ? t : "default";
  return r[n].test(String(e));
}, zd = qd, Gd = function({ value: t }) {
  return /[0-9]/.test(String(t));
}, Xd = Gd, Jd = function({ value: e }) {
  return /[!-/:-@[-`{-~]/.test(String(e));
}, Qd = Jd, ef = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("\\p{Lu}", "u"),
    latin: /[A-Z]/
  }, n = G(r, t) ? t : "default";
  return r[n].test(String(e));
}, tf = ef, rf = function({ value: t }, r, n) {
  r = r instanceof Date ? r.getTime() : Date.parse(r), n = n instanceof Date ? n.getTime() : Date.parse(n);
  const o = t instanceof Date ? t.getTime() : Date.parse(String(t));
  if (r && isNaN(n))
    n = r, r = Date.now();
  else if (r === void 0 || o === void 0)
    return !1;
  return o >= r && o <= n;
}, nf = rf, of = function({ value: t }, r) {
  return r && typeof r == "string" ? zu(r).test(String(t)) : !isNaN(Date.parse(String(t)));
}, sf = of, af = function({ value: t }) {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(t));
}, lf = af, pf = function({ value: t }, ...r) {
  return typeof t == "string" && r.length ? r.some((n) => t.endsWith(n)) : typeof t == "string" && r.length === 0;
}, uf = pf, cf = function({ value: t }, ...r) {
  return r.some((n) => typeof n == "object" ? W(n, t) : n == t);
}, df = cf, ff = function({ value: t }, r = 0, n = 1 / 0) {
  r = parseInt(r), n = isNaN(parseInt(n)) ? 1 / 0 : parseInt(n);
  const o = r <= n ? r : n, s = n >= r ? n : r;
  if (typeof t == "string" || Array.isArray(t))
    return t.length >= o && t.length <= s;
  if (t && typeof t == "object") {
    const a = Object.keys(t).length;
    return a >= o && a <= s;
  }
  return !1;
}, mf = ff, hf = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("^\\p{Ll}+$", "u"),
    allow_non_alpha: /^[0-9\p{Ll}!-/:-@[-`{-~]+$/u,
    allow_numeric: /^[0-9\p{Ll}]+$/u,
    allow_numeric_dashes: /^[0-9\p{Ll}-]+$/u,
    latin: /^[a-z]+$/
  }, n = G(r, t) ? t : "default";
  return r[n].test(String(e));
}, gf = hf, vf = function({ value: t }, ...r) {
  return r.some((n) => (typeof n == "string" && n.substr(0, 1) === "/" && n.substr(-1) === "/" && (n = new RegExp(n.substr(1, n.length - 2))), n instanceof RegExp ? n.test(String(t)) : n === t));
}, $f = vf, yf = function({ value: t }, r = 10) {
  return Array.isArray(t) ? t.length <= r : Number(t) <= Number(r);
}, bf = yf, xf = function({ value: t }, r = 1) {
  return Array.isArray(t) ? t.length >= r : Number(t) >= Number(r);
}, wf = xf, _f = function({ value: t }, ...r) {
  return !r.some((n) => typeof n == "object" ? W(n, t) : n === t);
}, kf = _f, Sf = function({ value: t }) {
  return !isNaN(t);
}, Df = Sf, kl = function(e, ...t) {
  return Be(e.value) ? t.map((n) => e.at(n)?.value).some((n) => !Be(n)) : !0;
};
kl.skipEmpty = !1;
var Cf = kl, Sl = function({ value: t }, r = "default") {
  return r === "trim" && typeof t == "string" ? !Be(t.trim()) : !Be(t);
};
Sl.skipEmpty = !1;
var Lf = Sl, Af = function({ value: t }, ...r) {
  return typeof t == "string" && r.length ? r.some((n) => t.startsWith(n)) : typeof t == "string" && r.length === 0;
}, Tf = Af, If = function({ value: e }) {
  return /^[!-/:-@[-`{-~]+$/.test(String(e));
}, Ef = If, Mf = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("^\\p{Lu}+$", "u"),
    latin: /^[A-Z]+$/
  }, n = G(r, t) ? t : "default";
  return r[n].test(String(e));
}, Of = Mf, Pf = function({ value: t }, ...r) {
  try {
    const n = r.length ? r : ["http:", "https:"], o = new URL(String(t));
    return n.includes(o.protocol);
  } catch {
    return !1;
  }
}, Ff = Pf;
const Vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  accepted: yd,
  alpha: Cd,
  alpha_spaces: Ad,
  alphanumeric: Id,
  between: Bd,
  confirm: Hd,
  contains_alpha: Kd,
  contains_alpha_spaces: Yd,
  contains_alphanumeric: Ud,
  contains_lowercase: zd,
  contains_numeric: Xd,
  contains_symbol: Qd,
  contains_uppercase: tf,
  date_after: xd,
  date_after_node: Sd,
  date_after_or_equal: _d,
  date_before: Md,
  date_before_node: Pd,
  date_before_or_equal: Vd,
  date_between: nf,
  date_format: sf,
  email: lf,
  ends_with: uf,
  is: df,
  length: mf,
  lowercase: gf,
  matches: $f,
  max: bf,
  min: wf,
  not: kf,
  number: Df,
  require_one: Cf,
  required: Lf,
  starts_with: Tf,
  symbol: Ef,
  uppercase: Of,
  url: Ff
}, Symbol.toStringTag, { value: "Module" }));
var ss = /* @__PURE__ */ ye({
  type: "state",
  blocking: !0,
  visible: !1,
  value: !0,
  key: "validating"
});
function Nf(e = {}) {
  return function(r) {
    let n = We(r.props.validationRules || {}), o = { ...e, ...n };
    const s = { input: vr(), rerun: null, isPassing: !0 };
    let a = We(r.props.validation);
    r.on("prop:validation", ({ payload: l }) => i(l, n)), r.on(
      "prop:validationRules",
      ({ payload: l }) => i(a, l)
    );
    function i(l, p) {
      W(Object.keys(n || {}), Object.keys(p || {})) && W(a, l) || (n = We(p), a = We(l), o = { ...e, ...n }, r.props.parsedRules?.forEach((u) => {
        Dl(u), bl(u.observer.receipts), u.observer.kill();
      }), r.store.filter(() => !1, "validation"), r.props.parsedRules = va(l, o, r), s.isPassing = !0, as(r, r.props.parsedRules, s));
    }
    r.props.parsedRules = va(a, o, r), as(r, r.props.parsedRules, s);
  };
}
function as(e, t, r) {
  Vs(e) || (r.input = vr(), e.store.set(
    /* @__PURE__ */ ye({
      key: "failing",
      value: !r.isPassing,
      visible: !1
    })
  ), r.isPassing = !0, e.store.filter((n) => !n.meta.removeImmediately, "validation"), t.forEach(
    (n) => n.debounce && clearTimeout(n.timer)
  ), t.length && (e.store.set(ss), is(0, t, r, !1, () => {
    e.store.remove(ss.key), e.store.set(
      /* @__PURE__ */ ye({
        key: "failing",
        value: !r.isPassing,
        visible: !1
      })
    );
  })));
}
function is(e, t, r, n, o) {
  const s = t[e];
  if (!s) return o();
  const a = s.observer;
  if (Vs(a)) return;
  const i = r.input;
  s.state = null;
  function l(p, u) {
    if (r.input !== i) return;
    r.isPassing = r.isPassing && !!u, s.queued = !1;
    const c = a.stopObserve(), f = wl(s.deps, c);
    if (yl(
      a,
      f,
      function() {
        try {
          a.store.set(ss);
        } catch {
        }
        s.queued = !0, r.rerun && clearTimeout(r.rerun), r.rerun = setTimeout(
          as,
          0,
          a,
          t,
          r
        );
      },
      "unshift"
      // We want these listeners to run before other events are emitted so the 'state.validating' will be reliable.
    ), s.deps = c, s.state = u, u === !1 ? Rf(s, n || p) : Dl(s), t.length > e + 1) {
      const d = t[e + 1];
      (u || d.force || !d.skipEmpty) && d.state === null && (d.queued = !0), is(e + 1, t, r, n || p, o);
    } else
      o();
  }
  (!Be(a.value) || !s.skipEmpty) && (r.isPassing || s.force) ? s.queued ? Bf(s, a, (p) => {
    p instanceof Promise ? p.then((u) => l(!0, u)) : l(!1, p);
  }) : is(e + 1, t, r, n, o) : Be(a.value) && s.skipEmpty && r.isPassing ? (a.observe(), a.value, l(!1, r.isPassing)) : l(!1, null);
}
function Bf(e, t, r) {
  e.debounce ? e.timer = setTimeout(() => {
    t.observe(), r(e.rule(t, ...e.args));
  }, e.debounce) : (t.observe(), r(e.rule(t, ...e.args)));
}
function Dl(e) {
  const t = `rule_${e.name}`;
  e.messageObserver && (e.messageObserver = e.messageObserver.kill()), G(e.observer.store, t) && e.observer.store.remove(t);
}
function Rf(e, t) {
  const r = e.observer;
  Vs(r) || (e.messageObserver || (e.messageObserver = Jn(r._node)), e.messageObserver.watch(
    (n) => Wf(
      n,
      e
    ),
    (n) => {
      const o = Hf(r, e, n), s = /* @__PURE__ */ ye({
        blocking: e.blocking,
        key: `rule_${e.name}`,
        meta: {
          /**
           * Use this key instead of the message root key to produce i18n validation
           * messages.
           */
          messageKey: e.name,
          /**
           * For messages that were created *by or after* a debounced or async
           * validation rule — we make note of it so we can immediately remove them
           * as soon as the next commit happens.
           */
          removeImmediately: t,
          /**
           * Determines if this message should be passed to localization.
           */
          localize: !o,
          /**
           * The arguments that will be passed to the validation rules
           */
          i18nArgs: n
        },
        type: "validation",
        value: o || "This field is not valid."
      });
      r.store.set(s);
    }
  ));
}
function Hf(e, t, r) {
  const n = e.props.validationMessages && G(e.props.validationMessages, t.name) ? e.props.validationMessages[t.name] : void 0;
  return typeof n == "function" ? n(...r) : n;
}
function Wf(e, t) {
  return [
    {
      node: e,
      name: Cl(e),
      args: t.args
    }
  ];
}
function Cl(e) {
  return typeof e.props.validationLabel == "function" ? e.props.validationLabel(e) : e.props.validationLabel || e.props.label || e.props.name || String(e.name);
}
var Ll = "(?:[\\*+?()0-9]+)", Al = "[a-zA-Z][a-zA-Z0-9_]+", Kf = new RegExp(
  `^(${Ll}?${Al})(?:\\:(.*)+)?$`,
  "i"
), jf = new RegExp(`^(${Ll})(${Al})$`, "i"), Yf = /([\*+?]+)?(\(\d+\))([\*+?]+)?/, ga = /\(\d+\)/, Zf = {
  blocking: !0,
  debounce: 0,
  force: !1,
  skipEmpty: !0,
  name: ""
};
function va(e, t, r) {
  return e ? (typeof e == "string" ? Uf(e) : wt(e)).reduce((o, s) => {
    let a = s.shift();
    const i = {};
    if (typeof a == "string") {
      const [l, p] = zf(a);
      G(t, l) && (a = t[l], Object.assign(i, p));
    }
    return typeof a == "function" && o.push({
      observer: Jn(r),
      rule: a,
      args: s,
      timer: 0,
      state: null,
      queued: !0,
      deps: /* @__PURE__ */ new Map(),
      ...Zf,
      ...Gf(i, a)
    }), o;
  }, []) : [];
}
function Uf(e) {
  return e.split("|").reduce((t, r) => {
    const n = qf(r);
    return n && t.push(n), t;
  }, []);
}
function qf(e) {
  const t = e.trim();
  if (t) {
    const r = t.match(Kf);
    if (r && typeof r[1] == "string") {
      const n = r[1].trim(), o = r[2] && typeof r[2] == "string" ? r[2].split(",").map((s) => s.trim()) : [];
      return [n, ...o];
    }
  }
  return !1;
}
function zf(e) {
  const t = e.match(jf);
  if (!t)
    return [e, { name: e }];
  const r = {
    "*": { force: !0 },
    "+": { skipEmpty: !1 },
    "?": { blocking: !1 }
  }, [, n, o] = t, s = ga.test(n) ? n.match(Yf) || [] : [, n];
  return [
    o,
    [s[1], s[2], s[3]].reduce(
      (a, i) => (i && (ga.test(i) ? a.debounce = parseInt(i.substr(1, i.length - 1)) : i.split("").forEach(
        (l) => G(r, l) && Object.assign(a, r[l])
      )), a),
      { name: o }
    )
  ];
}
function Gf(e, t) {
  return e.name || (e.name = t.ruleName || t.name), ["skipEmpty", "force", "debounce", "blocking"].reduce(
    (r, n) => (G(t, n) && !G(r, n) && Object.assign(r, {
      [n]: t[n]
    }), r),
    e
  );
}
function oe(e) {
  return e[0].toUpperCase() + e.substr(1);
}
function $a(e, t = "or") {
  return e.reduce((r, n, o) => (r += n, o <= e.length - 2 && e.length > 2 && (r += ", "), o === e.length - 2 && (r += `${e.length === 2 ? " " : ""}${t} `), r), "");
}
function sn(e) {
  const t = typeof e == "string" ? new Date(Date.parse(e)) : e;
  return t instanceof Date ? new Intl.DateTimeFormat(void 0, {
    dateStyle: "medium",
    timeZone: "UTC"
  }).format(t) : "(unknown)";
}
function Xf(e, t) {
  return Number(e) >= Number(t) ? [t, e] : [e, t];
}
var Jf = {
  /**
   * Shown on a button for adding additional items.
   */
  add: "Add",
  /**
   * Shown when a button to remove items is visible.
   */
  remove: "Remove",
  /**
   * Shown when there are multiple items to remove at the same time.
   */
  removeAll: "Remove all",
  /**
   * Shown when all fields are not filled out correctly.
   */
  incomplete: "Sorry, not all fields are filled out correctly.",
  /**
   * Shown in a button inside a form to submit the form.
   */
  submit: "Submit",
  /**
   * Shown when no files are selected.
   */
  noFiles: "No file chosen",
  /**
   * Shown on buttons that move fields up in a list.
   */
  moveUp: "Move up",
  /**
   * Shown on buttons that move fields down in a list.
   */
  moveDown: "Move down",
  /**
   * Shown when something is actively loading.
   */
  isLoading: "Loading...",
  /**
   * Shown when there is more to load.
   */
  loadMore: "Load more",
  /**
   * Show on buttons that navigate state forward
   */
  next: "Next",
  /**
   * Show on buttons that navigate state backward
   */
  prev: "Previous",
  /**
   * Shown when adding all values.
   */
  addAllValues: "Add all values",
  /**
   * Shown when adding selected values.
   */
  addSelectedValues: "Add selected values",
  /**
   * Shown when removing all values.
   */
  removeAllValues: "Remove all values",
  /**
   * Shown when removing selected values.
   */
  removeSelectedValues: "Remove selected values",
  /**
   * Shown when there is a date to choose.
   */
  chooseDate: "Choose date",
  /**
   * Shown when there is a date to change.
   */
  changeDate: "Change date",
  /**
   * Shown above error summaries when someone attempts to submit a form with
   * errors and the developer has implemented `<FormKitSummary />`.
   */
  summaryHeader: "There were errors in your form.",
  /*
   * Shown when there is something to close
   */
  close: "Close",
  /**
   * Shown when there is something to open.
   */
  open: "Open"
}, Qf = {
  /**
   * The value is not an accepted value.
   * @see {@link https://formkit.com/essentials/validation#accepted}
   */
  accepted({ name: e }) {
    return `Please accept the ${e}.`;
  },
  /**
   * The date is not after
   * @see {@link https://formkit.com/essentials/validation#date-after}
   */
  date_after({ name: e, args: t }) {
    return Array.isArray(t) && t.length ? `${oe(e)} must be after ${sn(t[0])}.` : `${oe(e)} must be in the future.`;
  },
  /**
   * The value is not a letter.
   * @see {@link https://formkit.com/essentials/validation#alpha}
   */
  alpha({ name: e }) {
    return `${oe(e)} can only contain alphabetical characters.`;
  },
  /**
   * The value is not alphanumeric
   * @see {@link https://formkit.com/essentials/validation#alphanumeric}
   */
  alphanumeric({ name: e }) {
    return `${oe(e)} can only contain letters and numbers.`;
  },
  /**
   * The value is not letter and/or spaces
   * @see {@link https://formkit.com/essentials/validation#alpha-spaces}
   */
  alpha_spaces({ name: e }) {
    return `${oe(e)} can only contain letters and spaces.`;
  },
  /**
   * The value have no letter.
   * @see {@link https://formkit.com/essentials/validation#contains_alpha}
   */
  contains_alpha({ name: e }) {
    return `${oe(e)} must contain alphabetical characters.`;
  },
  /**
   * The value have no alphanumeric
   * @see {@link https://formkit.com/essentials/validation#contains_alphanumeric}
   */
  contains_alphanumeric({ name: e }) {
    return `${oe(e)} must contain letters or numbers.`;
  },
  /**
   * The value have no letter and/or spaces
   * @see {@link https://formkit.com/essentials/validation#contains_alpha-spaces}
   */
  contains_alpha_spaces({ name: e }) {
    return `${oe(e)} must contain letters or spaces.`;
  },
  /**
   * The value have no symbol
   * @see {@link https://formkit.com/essentials/validation#contains_symbol}
   */
  contains_symbol({ name: e }) {
    return `${oe(e)} must contain a symbol.`;
  },
  /**
   * The value have no uppercase
   * @see {@link https://formkit.com/essentials/validation#contains_uppercase}
   */
  contains_uppercase({ name: e }) {
    return `${oe(e)} must contain an uppercase letter.`;
  },
  /**
   * The value have no lowercase
   * @see {@link https://formkit.com/essentials/validation#contains_lowercase}
   */
  contains_lowercase({ name: e }) {
    return `${oe(e)} must contain a lowercase letter.`;
  },
  /**
   *  The value have no numeric
   * @see {@link https://formkit.com/essentials/validation#contains_numeric}
   */
  contains_numeric({ name: e }) {
    return `${oe(e)} must contain numbers.`;
  },
  /**
   * The value is not symbol
   * @see {@link https://formkit.com/essentials/validation#symbol}
   */
  symbol({ name: e }) {
    return `${oe(e)} must be a symbol.`;
  },
  /**
   * The value is not uppercase
   * @see {@link https://formkit.com/essentials/validation#uppercase}
   */
  uppercase({ name: e }) {
    return `${oe(e)} can only contain uppercase letters.`;
  },
  /**
   * The value is not lowercase
   * @see {@link https://formkit.com/essentials/validation#lowercase}
   */
  lowercase({ name: e, args: t }) {
    let r = "";
    return Array.isArray(t) && t.length && (t[0] === "allow_non_alpha" && (r = ", numbers and symbols"), t[0] === "allow_numeric" && (r = " and numbers"), t[0] === "allow_numeric_dashes" && (r = ", numbers and dashes")), `${oe(e)} can only contain lowercase letters${r}.`;
  },
  /**
   * The date is not before
   * @see {@link https://formkit.com/essentials/validation#date-before}
   */
  date_before({ name: e, args: t }) {
    return Array.isArray(t) && t.length ? `${oe(e)} must be before ${sn(t[0])}.` : `${oe(e)} must be in the past.`;
  },
  /**
   * The value is not between two numbers
   * @see {@link https://formkit.com/essentials/validation#between}
   */
  between({ name: e, args: t }) {
    if (isNaN(t[0]) || isNaN(t[1]))
      return "This field was configured incorrectly and can’t be submitted.";
    const [r, n] = Xf(t[0], t[1]);
    return `${oe(e)} must be between ${r} and ${n}.`;
  },
  /**
   * The confirmation field does not match
   * @see {@link https://formkit.com/essentials/validation#confirm}
   */
  confirm({ name: e }) {
    return `${oe(e)} does not match.`;
  },
  /**
   * The value is not a valid date
   * @see {@link https://formkit.com/essentials/validation#date-format}
   */
  date_format({ name: e, args: t }) {
    return Array.isArray(t) && t.length ? `${oe(e)} is not a valid date, please use the format ${t[0]}` : "This field was configured incorrectly and can’t be submitted";
  },
  /**
   * Is not within expected date range
   * @see {@link https://formkit.com/essentials/validation#date-between}
   */
  date_between({ name: e, args: t }) {
    return `${oe(e)} must be between ${sn(t[0])} and ${sn(t[1])}`;
  },
  /**
   * Shown when the user-provided value is not a valid email address.
   * @see {@link https://formkit.com/essentials/validation#email}
   */
  email: "Please enter a valid email address.",
  /**
   * Does not end with the specified value
   * @see {@link https://formkit.com/essentials/validation#ends-with}
   */
  ends_with({ name: e, args: t }) {
    return `${oe(e)} doesn’t end with ${$a(t)}.`;
  },
  /**
   * Is not an allowed value
   * @see {@link https://formkit.com/essentials/validation#is}
   */
  is({ name: e }) {
    return `${oe(e)} is not an allowed value.`;
  },
  /**
   * Does not match specified length
   * @see {@link https://formkit.com/essentials/validation#length}
   */
  length({ name: e, args: [t = 0, r = 1 / 0] }) {
    const n = Math.min(t, r), o = Math.max(t, r);
    return n == 1 && o === 1 / 0 ? `${oe(e)} must be at least one character.` : n == 0 && o ? `${oe(e)} must be less than or equal to ${o} characters.` : n === o ? `${oe(e)} should be ${o} characters long.` : n && o === 1 / 0 ? `${oe(e)} must be greater than or equal to ${n} characters.` : `${oe(e)} must be between ${n} and ${o} characters.`;
  },
  /**
   * Value is not a match
   * @see {@link https://formkit.com/essentials/validation#matches}
   */
  matches({ name: e }) {
    return `${oe(e)} is not an allowed value.`;
  },
  /**
   * Exceeds maximum allowed value
   * @see {@link https://formkit.com/essentials/validation#max}
   */
  max({ name: e, node: { value: t }, args: r }) {
    return Array.isArray(t) ? `Cannot have more than ${r[0]} ${e}.` : `${oe(e)} must be no more than ${r[0]}.`;
  },
  /**
   * The (field-level) value does not match specified mime type
   * @see {@link https://formkit.com/essentials/validation#mime}
   */
  mime({ name: e, args: t }) {
    return t[0] ? `${oe(e)} must be of the type: ${t[0]}` : "No file formats allowed.";
  },
  /**
   * Does not fulfill minimum allowed value
   * @see {@link https://formkit.com/essentials/validation#min}
   */
  min({ name: e, node: { value: t }, args: r }) {
    return Array.isArray(t) ? `Cannot have fewer than ${r[0]} ${e}.` : `${oe(e)} must be at least ${r[0]}.`;
  },
  /**
   * Is not an allowed value
   * @see {@link https://formkit.com/essentials/validation#not}
   */
  not({ name: e, node: { value: t } }) {
    return `“${t}” is not an allowed ${e}.`;
  },
  /**
   *  Is not a number
   * @see {@link https://formkit.com/essentials/validation#number}
   */
  number({ name: e }) {
    return `${oe(e)} must be a number.`;
  },
  /**
   * Require one field.
   * @see {@link https://formkit.com/essentials/validation#require-one}
   */
  require_one: ({ name: e, node: t, args: r }) => {
    const n = r.map((o) => {
      const s = t.at(o);
      return s ? Cl(s) : !1;
    }).filter((o) => !!o);
    return n.unshift(e), `${n.join(" or ")} is required.`;
  },
  /**
   * Required field.
   * @see {@link https://formkit.com/essentials/validation#required}
   */
  required({ name: e }) {
    return `${oe(e)} is required.`;
  },
  /**
   * Does not start with specified value
   * @see {@link https://formkit.com/essentials/validation#starts-with}
   */
  starts_with({ name: e, args: t }) {
    return `${oe(e)} doesn’t start with ${$a(t)}.`;
  },
  /**
   * Is not a url
   * @see {@link https://formkit.com/essentials/validation#url}
   */
  url() {
    return "Please enter a valid URL.";
  },
  /**
   * Shown when the date is invalid.
   */
  invalidDate: "The selected date is invalid."
}, em = { ui: Jf, validation: Qf }, ya = /* @__PURE__ */ new Set();
function tm(e) {
  return function(r) {
    ya.add(r), r.on("destroying", () => ya.delete(r));
    let n = ba(r.config.locale, e), o = n ? e[n] : {};
    r.on("prop:locale", ({ payload: s }) => {
      n = ba(s, e), o = n ? e[n] : {}, r.store.touch();
    }), r.on("prop:label", () => r.store.touch()), r.on("prop:validationLabel", () => r.store.touch()), r.hook.text((s, a) => {
      const i = s.meta?.messageKey || s.key;
      if (G(o, s.type) && G(o[s.type], i)) {
        const l = o[s.type][i];
        typeof l == "function" ? s.value = Array.isArray(s.meta?.i18nArgs) ? l(...s.meta.i18nArgs) : l(s) : s.value = l;
      }
      return a(s);
    });
  };
}
function ba(e, t) {
  if (G(t, e))
    return e;
  const [r] = e.split("-");
  if (G(t, r))
    return r;
  for (const n in t)
    return n;
  return !1;
}
function rm(...e) {
  const t = e.reduce(
    (n, o) => xt(n, o),
    {}
  ), r = () => {
  };
  return r.library = function(n) {
    const o = rr(n.props.type);
    G(t, o) && n.define(t[o]);
  }, r;
}
var nm = [
  "classes",
  "config",
  "delay",
  "errors",
  "id",
  "index",
  "inputErrors",
  "library",
  "modelValue",
  "onUpdate:modelValue",
  "name",
  "number",
  "parent",
  "plugins",
  "sectionsSchema",
  "type",
  "validation",
  "validationLabel",
  "validationMessages",
  "validationRules",
  // Runtime event props:
  "onInput",
  "onInputRaw",
  "onUpdate:modelValue",
  "onNode",
  "onSubmit",
  "onSubmitInvalid",
  "onSubmitRaw"
];
function Qn(e) {
  return e && typeof e == "object" && "group" in e && Array.isArray(e.options);
}
function Tn(e, t = { count: 1 }) {
  return Array.isArray(e) ? e.map(
    (r) => {
      if (typeof r == "string" || typeof r == "number")
        return {
          label: String(r),
          value: String(r)
        };
      if (typeof r == "object") {
        if ("group" in r)
          return r.options = Tn(r.options || [], t), r;
        "value" in r && typeof r.value != "string" && Object.assign(r, {
          value: `__mask_${t.count++}`,
          __original: r.value
        });
      }
      return r;
    }
  ) : Object.keys(e).map((r) => ({
    label: e[r],
    value: r
  }));
}
function Pt(e, t, r = !1) {
  if (Array.isArray(e)) {
    for (const n of e)
      if (!(typeof n != "object" && n)) {
        if (Qn(n)) {
          const o = Pt(n.options, t, !0);
          if (o !== void 0)
            return o;
        } else if (t == n.value)
          return "__original" in n ? n.__original : n.value;
      }
  }
  return r ? void 0 : t;
}
function lr(e, t) {
  return e === null && t === void 0 || e === void 0 && t === null ? !1 : e == t ? !0 : bt(e) && bt(t) ? W(e, t) : !1;
}
function mt(e) {
  e.hook.prop((t, r) => {
    var n;
    return t.prop === "options" && (typeof t.value == "function" ? (e.props.optionsLoader = t.value, t.value = []) : ((n = e.props)._normalizeCounter ?? (n._normalizeCounter = { count: 1 }), t.value = Tn(t.value, e.props._normalizeCounter))), r(t);
  });
}
// @__NO_SIDE_EFFECTS__
function z(e, t, r = !1) {
  return (...n) => {
    const o = (s) => {
      const a = !t || typeof t == "string" ? { $el: t } : t();
      return (Ot(a) || Rr(a)) && (a.meta ? a.meta.section = e : a.meta = { section: e }, n.length && !a.children && (a.children = [
        ...n.map(
          (i) => typeof i == "function" ? i(s) : i
        )
      ]), Ot(a) && (a.attrs = {
        class: `$classes.${e}`,
        ...a.attrs || {}
      })), {
        if: `$slots.${e}`,
        then: `$slots.${e}`,
        else: e in s ? /* @__PURE__ */ It(a, s[e]) : a
      };
    };
    return o._s = e, r ? /* @__PURE__ */ om(o) : o;
  };
}
// @__NO_SIDE_EFFECTS__
function om(e) {
  return (t) => [e(t)];
}
function Hr(e) {
  return !!(e && typeof e == "object" && ("$el" in e || "$cmp" in e || "$formkit" in e));
}
// @__NO_SIDE_EFFECTS__
function It(e, t = {}) {
  return typeof e == "string" ? Hr(t) || typeof t == "string" ? t : e : Array.isArray(e) ? Hr(t) ? t : e : xt(e, t);
}
var sm = /* @__PURE__ */ z("actions", () => ({
  $el: "div",
  if: "$actions"
})), In = /* @__PURE__ */ z("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "$type",
    name: "$node.props.altName || $node.name",
    disabled: "$option.attrs.disabled || $disabled",
    onInput: "$handlers.toggleChecked",
    checked: "$fns.eq($_value, $onValue)",
    onBlur: "$handlers.blur",
    value: "$: true",
    id: "$id",
    "aria-describedby": {
      if: "$options.length",
      then: {
        if: "$option.help",
        then: '$: "help-" + $option.attrs.id',
        else: void 0
      },
      else: {
        if: "$help",
        then: '$: "help-" + $id',
        else: void 0
      }
    }
  }
})), Tl = /* @__PURE__ */ z("optionHelp", () => ({
  $el: "div",
  if: "$option.help",
  attrs: {
    id: '$: "help-" + $option.attrs.id'
  }
})), En = /* @__PURE__ */ z("inner", "span"), Mn = /* @__PURE__ */ z("label", "span"), Il = /* @__PURE__ */ z("option", () => ({
  $el: "li",
  for: ["option", "$options"],
  attrs: {
    "data-disabled": "$option.attrs.disabled || $disabled || undefined"
  }
})), El = /* @__PURE__ */ z("options", "ul"), On = /* @__PURE__ */ z("wrapper", () => ({
  $el: "label",
  attrs: {
    "data-disabled": {
      if: "$options.length",
      then: void 0,
      else: "$disabled || undefined"
    },
    "data-checked": {
      if: "$options == undefined",
      then: "$fns.eq($_value, $onValue) || undefined",
      else: "$fns.isChecked($option.value) || undefined"
    }
  }
})), am = /* @__PURE__ */ z("input", () => ({
  $el: "button",
  bind: "$attrs",
  attrs: {
    type: "$type",
    disabled: "$disabled",
    name: "$node.name",
    id: "$id"
  }
})), im = /* @__PURE__ */ z("default", null), Pn = /* @__PURE__ */ z("decorator", () => ({
  $el: "span",
  attrs: {
    "aria-hidden": "true"
  }
})), Ml = /* @__PURE__ */ z("fieldset", () => ({
  $el: "fieldset",
  attrs: {
    id: "$id",
    "aria-describedby": {
      if: "$help",
      then: '$: "help-" + $id',
      else: void 0
    }
  }
})), lm = /* @__PURE__ */ z("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "file",
    disabled: "$disabled",
    name: "$node.name",
    onChange: "$handlers.files",
    onBlur: "$handlers.blur",
    id: "$id",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  }
})), pm = /* @__PURE__ */ z("fileItem", () => ({
  $el: "li",
  for: ["file", "$value"]
})), um = /* @__PURE__ */ z("fileList", () => ({
  $el: "ul",
  if: "$value.length",
  attrs: {
    "data-has-multiple": "$_hasMultipleFiles"
  }
})), cm = /* @__PURE__ */ z("fileName", () => ({
  $el: "span",
  attrs: {
    class: "$classes.fileName"
  }
})), xa = /* @__PURE__ */ z("fileRemove", () => ({
  $el: "button",
  attrs: {
    type: "button",
    onClick: "$handlers.resetFiles"
  }
})), dm = /* @__PURE__ */ z("form", () => ({
  $el: "form",
  bind: "$attrs",
  meta: {
    autoAnimate: !0
  },
  attrs: {
    id: "$id",
    name: "$node.name",
    onSubmit: "$handlers.submit",
    "data-loading": "$state.loading || undefined"
  }
})), Ns = /* @__PURE__ */ z("wrapper", null, !0), ut = /* @__PURE__ */ z("help", () => ({
  $el: "div",
  if: "$help",
  attrs: {
    id: '$: "help-" + $id'
  }
})), $e = (e, t) => (/* @__PURE__ */ z(`${e}Icon`, () => {
  const r = `_raw${e.charAt(0).toUpperCase()}${e.slice(1)}Icon`;
  return {
    if: `$${e}Icon && $${r}`,
    $el: `${t || "span"}`,
    attrs: {
      class: `$classes.${e}Icon + " " + $classes.icon`,
      innerHTML: `$${r}`,
      onClick: `$handlers.iconClick(${e})`,
      role: `$fns.iconRole(${e})`,
      tabindex: `$fns.iconRole(${e}) === "button" && "0" || undefined`,
      for: {
        if: `${t === "label"}`,
        then: "$id"
      }
    }
  };
}))(), eo = /* @__PURE__ */ z("inner", "div"), to = /* @__PURE__ */ z("label", () => ({
  $el: "label",
  if: "$label",
  attrs: {
    for: "$id"
  }
})), Ol = /* @__PURE__ */ z("legend", () => ({
  $el: "legend",
  if: "$label"
})), kt = /* @__PURE__ */ z("message", () => ({
  $el: "li",
  for: ["message", "$messages"],
  attrs: {
    key: "$message.key",
    id: "$id + '-' + $message.key",
    "data-message-type": "$message.type"
  }
})), St = /* @__PURE__ */ z("messages", () => ({
  $el: "ul",
  if: "$defaultMessagePlacement && $fns.length($messages)"
})), fm = /* @__PURE__ */ z("noFiles", () => ({
  $el: "span",
  if: "$value == null || $value.length == 0"
})), mm = /* @__PURE__ */ z("optGroup", () => ({
  $el: "optgroup",
  bind: "$option.attrs",
  attrs: {
    label: "$option.group"
  }
})), wa = /* @__PURE__ */ z("option", () => ({
  $el: "option",
  bind: "$option.attrs",
  attrs: {
    class: "$classes.option",
    value: "$option.value",
    selected: "$fns.isSelected($option)"
  }
})), _a = /* @__PURE__ */ z("options", () => ({
  $el: null,
  if: "$options.length",
  for: ["option", "$option.options || $options"]
})), Nt = /* @__PURE__ */ z("outer", () => ({
  $el: "div",
  meta: {
    autoAnimate: !0
  },
  attrs: {
    key: "$id",
    "data-family": "$family || undefined",
    "data-type": "$type",
    "data-multiple": '$attrs.multiple || ($type != "select" && $options != undefined) || undefined',
    "data-has-multiple": "$_hasMultipleFiles",
    "data-disabled": '$: ($disabled !== "false" && $disabled) || undefined',
    "data-empty": "$state.empty || undefined",
    "data-complete": "$state.complete || undefined",
    "data-invalid": "$state.invalid || undefined",
    "data-errors": "$state.errors || undefined",
    "data-submitted": "$state.submitted || undefined",
    "data-prefix-icon": "$_rawPrefixIcon !== undefined || undefined",
    "data-suffix-icon": "$_rawSuffixIcon !== undefined || undefined",
    "data-prefix-icon-click": "$onPrefixIconClick !== undefined || undefined",
    "data-suffix-icon-click": "$onSuffixIconClick !== undefined || undefined"
  }
})), ct = /* @__PURE__ */ z("prefix", null), hm = /* @__PURE__ */ z("input", () => ({
  $el: "select",
  bind: "$attrs",
  attrs: {
    id: "$id",
    "data-placeholder": "$fns.showPlaceholder($_value, $placeholder)",
    disabled: "$disabled",
    class: "$classes.input",
    name: "$node.name",
    onChange: "$handlers.onChange",
    onInput: "$handlers.selectInput",
    onBlur: "$handlers.blur",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  }
})), gm = /* @__PURE__ */ z("submit", () => ({
  $cmp: "FormKit",
  bind: "$submitAttrs",
  props: {
    type: "submit",
    label: "$submitLabel"
  }
})), dt = /* @__PURE__ */ z("suffix", null), Pl = /* @__PURE__ */ z("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "$type",
    disabled: "$disabled",
    name: "$node.name",
    onInput: "$handlers.DOMInput",
    onBlur: "$handlers.blur",
    value: "$_value",
    id: "$id",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  }
})), vm = /* @__PURE__ */ z("input", () => ({
  $el: "textarea",
  bind: "$attrs",
  attrs: {
    disabled: "$disabled",
    name: "$node.name",
    onInput: "$handlers.DOMInput",
    onBlur: "$handlers.blur",
    value: "$_value",
    id: "$id",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  },
  children: "$initialValue"
})), Xr = /* @__PURE__ */ z("wrapper", "div"), $m = 0;
function Fl(e) {
  (e.type === "group" || e.type === "list") && e.plugins.add(ym);
}
function ym(e) {
  e.props.type === "radio" && (e.addProps(["altName"]), e.props.altName = `${e.name}_${$m++}`);
}
function Vl(e) {
  return function(t, r) {
    return t.prop === "options" && Array.isArray(t.value) && (t.value = t.value.map((n) => n.attrs?.id ? n : xt(n, {
      attrs: {
        id: `${e.props.id}-option-${Ts(String(n.value))}`
      }
    })), e.props.type === "checkbox" && !Array.isArray(e.value) && (e.isCreated ? e.input([], !1) : e.on("created", () => {
      Array.isArray(e.value) || e.input([], !1);
    }))), r(t);
  };
}
function bm(e, t) {
  const r = t.target;
  if (r instanceof HTMLInputElement) {
    const n = Array.isArray(e.props.options) ? Pt(e.props.options, r.value) : r.value;
    Array.isArray(e.props.options) && e.props.options.length ? Array.isArray(e._value) ? e._value.some((o) => lr(n, o)) ? e.input(
      e._value.filter(
        (o) => !lr(n, o)
      )
    ) : e.input([...e._value, n]) : e.input([n]) : r.checked ? e.input(e.props.onValue) : e.input(e.props.offValue);
  }
}
function xm(e, t) {
  return e.context?.value, e.context?._value, Array.isArray(e._value) ? e._value.some(
    (r) => lr(Pt(e.props.options, t), r)
  ) : !1;
}
function wm(e) {
  e.on("created", () => {
    e.context?.handlers && (e.context.handlers.toggleChecked = bm.bind(null, e)), e.context?.fns && (e.context.fns.isChecked = xm.bind(null, e)), G(e.props, "onValue") || (e.props.onValue = !0), G(e.props, "offValue") || (e.props.offValue = !1);
  }), e.hook.prop(Vl(e));
}
function te(e, t) {
  return (r) => {
    r.props[`${e}Icon`] === void 0 && (r.props[`${e}Icon`] = t.startsWith("<svg") ? t : `default:${t}`);
  };
}
function ro(e) {
  e.on("created", () => {
    "disabled" in e.props && (e.props.disabled = H(e.props.disabled), e.config.disabled = H(e.props.disabled));
  }), e.hook.prop(({ prop: t, value: r }, n) => (r = t === "disabled" ? H(r) : r, n({ prop: t, value: r }))), e.on("prop:disabled", ({ payload: t }) => {
    e.config.disabled = H(t);
  });
}
function ie(e, t) {
  return (r) => {
    r.store.set(
      /* @__PURE__ */ ye({
        key: e,
        type: "ui",
        value: t || e,
        meta: {
          localize: !0,
          i18nArgs: [r]
        }
      })
    );
  };
}
var $o = typeof window < "u";
function Nl(e) {
  e.target instanceof HTMLElement && e.target.hasAttribute("data-file-hover") && e.target.removeAttribute("data-file-hover");
}
function ka(e, t) {
  t.target instanceof HTMLInputElement ? e === "dragover" && t.target.setAttribute("data-file-hover", "true") : t.preventDefault(), e === "drop" && Nl(t);
}
function _m(e) {
  ie("noFiles", "Select file")(e), ie("removeAll", "Remove all")(e), ie("remove")(e), e.addProps(["_hasMultipleFiles"]), $o && (window._FormKit_File_Drop || (window.addEventListener(
    "dragover",
    ka.bind(null, "dragover")
  ), window.addEventListener("drop", ka.bind(null, "drop")), window.addEventListener("dragleave", Nl), window._FormKit_File_Drop = !0)), e.hook.input((t, r) => r(Array.isArray(t) ? t : [])), e.on("input", ({ payload: t }) => {
    e.props._hasMultipleFiles = Array.isArray(t) && t.length > 1 ? !0 : void 0;
  }), e.on("reset", () => {
    if (e.props.id && $o) {
      const t = document.getElementById(e.props.id);
      t && (t.value = "");
    }
  }), e.on("created", () => {
    Array.isArray(e.value) || e.input([], !1), e.context && (e.context.handlers.resetFiles = (t) => {
      if (t.preventDefault(), e.input([]), e.props.id && $o) {
        const r = document.getElementById(e.props.id);
        r && (r.value = ""), r?.focus();
      }
    }, e.context.handlers.files = (t) => {
      const r = [];
      if (t.target instanceof HTMLInputElement && t.target.files) {
        for (let n = 0; n < t.target.files.length; n++) {
          let o;
          (o = t.target.files.item(n)) && r.push({ name: o.name, file: o });
        }
        e.input(r);
      }
      e.context && (e.context.files = r), typeof e.props.attrs?.onChange == "function" && e.props.attrs?.onChange(t);
    });
  });
}
var Sa = /* @__PURE__ */ ye({
  key: "loading",
  value: !0,
  visible: !1
});
async function km(e, t) {
  const r = Math.random();
  if (e.props._submitNonce = r, t.preventDefault(), await e.settled, e.ledger.value("validating") && (e.store.set(Sa), await e.ledger.settled("validating"), e.store.remove("loading"), e.props._submitNonce !== r))
    return;
  const n = (o) => o.store.set(
    /* @__PURE__ */ ye({
      key: "submitted",
      value: !0,
      visible: !1
    })
  );
  if (e.walk(n), n(e), e.emit("submit-raw"), typeof e.props.onSubmitRaw == "function" && e.props.onSubmitRaw(t, e), e.ledger.value("blocking"))
    typeof e.props.onSubmitInvalid == "function" && e.props.onSubmitInvalid(e), e.props.incompleteMessage !== !1 && Bl(e);
  else if (typeof e.props.onSubmit == "function") {
    const o = e.props.onSubmit(
      e.hook.submit.dispatch(wt(e.value)),
      e
    );
    if (o instanceof Promise) {
      const s = e.props.disabled === void 0 && e.props.submitBehavior !== "live";
      s && (e.props.disabled = !0), e.store.set(Sa), await o, s && (e.props.disabled = !1), e.store.remove("loading");
    }
  } else
    t.target instanceof HTMLFormElement && t.target.submit();
}
function Bl(e) {
  e.store.set(
    /* @__PURE__ */ ye({
      blocking: !1,
      key: "incomplete",
      meta: {
        localize: e.props.incompleteMessage === void 0,
        i18nArgs: [{ node: e }],
        showAsMessage: !0
      },
      type: "ui",
      value: e.props.incompleteMessage || "Form incomplete."
    })
  );
}
function Sm(e) {
  var t;
  e.props.isForm = !0, e.ledger.count("validating", (r) => r.key === "validating"), (t = e.props).submitAttrs ?? (t.submitAttrs = {
    disabled: e.props.disabled
  }), e.on("prop:disabled", ({ payload: r }) => {
    e.props.submitAttrs = { ...e.props.submitAttrs, disabled: r };
  }), e.on("created", () => {
    e.context?.handlers && (e.context.handlers.submit = km.bind(null, e)), G(e.props, "actions") || (e.props.actions = !0);
  }), e.on("prop:incompleteMessage", () => {
    e.store.incomplete && Bl(e);
  }), e.on("settled:blocking", () => e.store.remove("incomplete"));
}
function Dm(e) {
  e.props.ignore === void 0 && (e.props.ignore = !0, e.parent = null);
}
function Cm(e) {
  e.on("created", () => {
    e.context && (e.context.initialValue = e.value || "");
  });
}
function Rl(e) {
  if (typeof e.props.number > "u") return;
  const t = ["number", "range", "hidden"].includes(e.props.type);
  e.hook.input((r, n) => {
    if (r === "") return n(void 0);
    const o = e.props.number === "integer" ? parseInt(r) : parseFloat(r);
    return Number.isFinite(o) ? n(o) : n(t ? void 0 : r);
  });
}
function Lm(e, t) {
  t.target instanceof HTMLInputElement && e.input(Pt(e.props.options, t.target.value));
}
function Am(e, t) {
  return e.context?.value, e.context?._value, lr(Pt(e.props.options, t), e._value);
}
function Tm(e) {
  e.on("created", () => {
    Array.isArray(e.props.options) || _t(350, {
      node: e,
      inputType: "radio"
    }), e.context?.handlers && (e.context.handlers.toggleChecked = Lm.bind(null, e)), e.context?.fns && (e.context.fns.isChecked = Am.bind(null, e));
  }), e.hook.prop(Vl(e));
}
function Im(e, t) {
  if (Qn(t)) return !1;
  e.context && e.context.value;
  const r = "__original" in t ? t.__original : t.value;
  return Array.isArray(e._value) ? e._value.some((n) => lr(n, r)) : (e._value === void 0 || e._value === null && !Hl(e.props.options, null)) && t.attrs && t.attrs["data-is-placeholder"] ? !0 : lr(r, e._value);
}
function Hl(e, t) {
  return e.some((r) => Qn(r) ? Hl(r.options, t) : ("__original" in r ? r.__original : r.value) === t);
}
async function Em(e, t) {
  typeof e.props.attrs?.onChange == "function" && (await new Promise((r) => setTimeout(r, 0)), await e.settled, e.props.attrs.onChange(t));
}
function Mm(e, t) {
  const r = t.target, n = r.hasAttribute("multiple") ? Array.from(r.selectedOptions).map(
    (o) => Pt(e.props.options, o.value)
  ) : Pt(e.props.options, r.value);
  e.input(n);
}
function Da(e, t) {
  return e.some(
    (r) => r.attrs && r.attrs["data-is-placeholder"]
  ) ? e : [
    {
      label: t,
      value: "",
      attrs: {
        hidden: !0,
        disabled: !0,
        "data-is-placeholder": "true"
      }
    },
    ...e
  ];
}
function Wl(e) {
  const t = e.length > 0 ? e[0] : void 0;
  if (t)
    return Qn(t) ? Wl(t.options) : "__original" in t ? t.__original : t.value;
}
function Om(e) {
  e.on("created", () => {
    const t = H(e.props.attrs?.multiple);
    !t && e.props.placeholder && Array.isArray(e.props.options) && (e.hook.prop(({ prop: r, value: n }, o) => (r === "options" && (n = Da(n, e.props.placeholder)), o({ prop: r, value: n }))), e.props.options = Da(
      e.props.options,
      e.props.placeholder
    )), t ? e.value === void 0 && e.input([], !1) : e.context && !e.context.options && (e.props.attrs = Object.assign({}, e.props.attrs, {
      value: e._value
    }), e.on("input", ({ payload: r }) => {
      e.props.attrs = Object.assign({}, e.props.attrs, {
        value: r
      });
    })), e.context?.handlers && (e.context.handlers.selectInput = Mm.bind(null, e), e.context.handlers.onChange = Em.bind(null, e)), e.context?.fns && (e.context.fns.isSelected = Im.bind(null, e), e.context.fns.showPlaceholder = (r, n) => {
      if (!Array.isArray(e.props.options)) return !1;
      const o = e.props.options.some(
        (s) => {
          if (s.attrs && "data-is-placeholder" in s.attrs)
            return !1;
          const a = "__original" in s ? s.__original : s.value;
          return W(r, a);
        }
      );
      return n && !o ? !0 : void 0;
    });
  }), e.hook.input((t, r) => (!e.props.placeholder && t === void 0 && Array.isArray(e.props?.options) && e.props.options.length && !H(e.props?.attrs?.multiple) && (t = Wl(e.props.options)), r(t)));
}
// @__NO_SIDE_EFFECTS__
function Wr(e) {
  return !!(qt(e) && e.if && e.if.startsWith("$slots.") && typeof e.then == "string" && e.then.startsWith("$slots.") && "else" in e);
}
// @__NO_SIDE_EFFECTS__
function ot(e, t, r) {
  const n = (o) => {
    const s = t(o);
    if (r || Hr(s) && "if" in s || /* @__PURE__ */ Wr(s)) {
      const a = {
        if: e,
        then: s
      };
      return r && (a.else = r(o)), a;
    } else /* @__PURE__ */ Wr(s) ? Object.assign(s.else, { if: e }) : Hr(s) && Object.assign(s, { if: e });
    return s;
  };
  return n._s = vr(), n;
}
// @__NO_SIDE_EFFECTS__
function nr(e, t) {
  const r = (n) => {
    const o = e({});
    return /* @__PURE__ */ Wr(o) ? (Array.isArray(o.else) || (o.else = /* @__PURE__ */ It(
      /* @__PURE__ */ It(o.else, t),
      e._s ? n[e._s] : {}
    )), o) : /* @__PURE__ */ It(
      /* @__PURE__ */ It(o, t),
      e._s ? n[e._s] : {}
    );
  };
  return r._s = e._s, r;
}
var Ca = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Nt(
    /* @__PURE__ */ St(/* @__PURE__ */ kt("$message.value")),
    /* @__PURE__ */ Xr(
      /* @__PURE__ */ am(
        /* @__PURE__ */ $e("prefix"),
        /* @__PURE__ */ ct(),
        /* @__PURE__ */ im("$label || $ui.submit.value"),
        /* @__PURE__ */ dt(),
        /* @__PURE__ */ $e("suffix")
      )
    ),
    /* @__PURE__ */ ut("$help")
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "button",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [ie("submit"), Dm],
  /**
   * A key to use for memoizing the schema. This is used to prevent the schema
   * from needing to be stringified when performing a memo lookup.
   */
  schemaMemoKey: "h6st4epl3j8"
}, Pm = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Nt(
    /* @__PURE__ */ ot(
      "$options == undefined",
      /**
       * Single checkbox structure.
       */
      /* @__PURE__ */ On(
        /* @__PURE__ */ En(/* @__PURE__ */ ct(), /* @__PURE__ */ In(), /* @__PURE__ */ Pn(/* @__PURE__ */ $e("decorator")), /* @__PURE__ */ dt()),
        /* @__PURE__ */ nr(/* @__PURE__ */ Mn("$label"), {
          if: "$label"
        })
      ),
      /**
       * Multi checkbox structure.
       */
      /* @__PURE__ */ Ml(
        /* @__PURE__ */ Ol("$label"),
        /* @__PURE__ */ ut("$help"),
        /* @__PURE__ */ El(
          /* @__PURE__ */ Il(
            /* @__PURE__ */ On(
              /* @__PURE__ */ En(
                /* @__PURE__ */ ct(),
                /* @__PURE__ */ nr(/* @__PURE__ */ In(), {
                  bind: "$option.attrs",
                  attrs: {
                    id: "$option.attrs.id",
                    value: "$option.value",
                    checked: "$fns.isChecked($option.value)"
                  }
                }),
                /* @__PURE__ */ Pn(/* @__PURE__ */ $e("decorator")),
                /* @__PURE__ */ dt()
              ),
              /* @__PURE__ */ nr(/* @__PURE__ */ Mn("$option.label"), {
                if: "$option.label"
              })
            ),
            /* @__PURE__ */ Tl("$option.help")
          )
        )
      )
    ),
    // Help text only goes under the input when it is a single.
    /* @__PURE__ */ ot("$options == undefined && $help", /* @__PURE__ */ ut("$help")),
    /* @__PURE__ */ St(/* @__PURE__ */ kt("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "box",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["options", "onValue", "offValue", "optionsLoader"],
  /**
   * Additional features that should be added to your input
   */
  features: [
    mt,
    wm,
    te("decorator", "checkboxDecorator")
  ],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "qje02tb3gu8"
}, Fm = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Nt(
    /* @__PURE__ */ Xr(
      /* @__PURE__ */ to("$label"),
      /* @__PURE__ */ eo(
        /* @__PURE__ */ $e("prefix", "label"),
        /* @__PURE__ */ ct(),
        /* @__PURE__ */ lm(),
        /* @__PURE__ */ um(
          /* @__PURE__ */ pm(
            /* @__PURE__ */ $e("fileItem"),
            /* @__PURE__ */ cm("$file.name"),
            /* @__PURE__ */ ot(
              "$value.length === 1",
              /* @__PURE__ */ xa(
                /* @__PURE__ */ $e("fileRemove"),
                '$ui.remove.value + " " + $file.name'
              )
            )
          )
        ),
        /* @__PURE__ */ ot("$value.length > 1", /* @__PURE__ */ xa("$ui.removeAll.value")),
        /* @__PURE__ */ fm(/* @__PURE__ */ $e("noFiles"), "$ui.noFiles.value"),
        /* @__PURE__ */ dt(),
        /* @__PURE__ */ $e("suffix")
      )
    ),
    /* @__PURE__ */ ut("$help"),
    /* @__PURE__ */ St(/* @__PURE__ */ kt("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "text",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [
    _m,
    te("fileItem", "fileItem"),
    te("fileRemove", "fileRemove"),
    te("noFiles", "noFiles")
  ],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "9kqc4852fv8"
}, Vm = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ dm(
    "$slots.default",
    /* @__PURE__ */ St(/* @__PURE__ */ kt("$message.value")),
    /* @__PURE__ */ sm(/* @__PURE__ */ gm())
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "group",
  /**
   * An array of extra props to accept for this input.
   */
  props: [
    "actions",
    "submit",
    "submitLabel",
    "submitAttrs",
    "submitBehavior",
    "incompleteMessage"
  ],
  /**
   * Additional features that should be added to your input
   */
  features: [Sm, ro],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "5bg016redjo"
}, Nm = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Ns("$slots.default"),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "group",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [ro, Fl]
}, Bm = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Pl(),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [Rl]
}, Rm = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Ns("$slots.default"),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "list",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["sync", "dynamic"],
  /**
   * Additional features that should be added to your input
   */
  features: [ro, Fl]
}, Hm = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Ns(),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: []
}, Wm = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Nt(
    /* @__PURE__ */ ot(
      "$options == undefined",
      /**
       * Single radio structure.
       */
      /* @__PURE__ */ On(
        /* @__PURE__ */ En(/* @__PURE__ */ ct(), /* @__PURE__ */ In(), /* @__PURE__ */ Pn(/* @__PURE__ */ $e("decorator")), /* @__PURE__ */ dt()),
        /* @__PURE__ */ nr(/* @__PURE__ */ Mn("$label"), {
          if: "$label"
        })
      ),
      /**
       * Multi radio structure.
       */
      /* @__PURE__ */ Ml(
        /* @__PURE__ */ Ol("$label"),
        /* @__PURE__ */ ut("$help"),
        /* @__PURE__ */ El(
          /* @__PURE__ */ Il(
            /* @__PURE__ */ On(
              /* @__PURE__ */ En(
                /* @__PURE__ */ ct(),
                /* @__PURE__ */ nr(/* @__PURE__ */ In(), {
                  bind: "$option.attrs",
                  attrs: {
                    id: "$option.attrs.id",
                    value: "$option.value",
                    checked: "$fns.isChecked($option.value)"
                  }
                }),
                /* @__PURE__ */ Pn(/* @__PURE__ */ $e("decorator")),
                /* @__PURE__ */ dt()
              ),
              /* @__PURE__ */ nr(/* @__PURE__ */ Mn("$option.label"), {
                if: "$option.label"
              })
            ),
            /* @__PURE__ */ Tl("$option.help")
          )
        )
      )
    ),
    // Help text only goes under the input when it is a single.
    /* @__PURE__ */ ot("$options == undefined && $help", /* @__PURE__ */ ut("$help")),
    /* @__PURE__ */ St(/* @__PURE__ */ kt("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "box",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["options", "onValue", "offValue", "optionsLoader"],
  /**
   * Additional features that should be added to your input
   */
  features: [mt, Tm, te("decorator", "radioDecorator")],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "qje02tb3gu8"
}, Km = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Nt(
    /* @__PURE__ */ Xr(
      /* @__PURE__ */ to("$label"),
      /* @__PURE__ */ eo(
        /* @__PURE__ */ $e("prefix"),
        /* @__PURE__ */ ct(),
        /* @__PURE__ */ hm(
          /* @__PURE__ */ ot(
            "$slots.default",
            () => "$slots.default",
            /* @__PURE__ */ _a(
              /* @__PURE__ */ ot(
                "$option.group",
                /* @__PURE__ */ mm(/* @__PURE__ */ _a(/* @__PURE__ */ wa("$option.label"))),
                /* @__PURE__ */ wa("$option.label")
              )
            )
          )
        ),
        /* @__PURE__ */ ot("$attrs.multiple !== undefined", () => "", /* @__PURE__ */ $e("select")),
        /* @__PURE__ */ dt(),
        /* @__PURE__ */ $e("suffix")
      )
    ),
    /* @__PURE__ */ ut("$help"),
    /* @__PURE__ */ St(/* @__PURE__ */ kt("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["options", "placeholder", "optionsLoader"],
  /**
   * Additional features that should be added to your input
   */
  features: [mt, Om, te("select", "select")],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "cb119h43krg"
}, jm = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Nt(
    /* @__PURE__ */ Xr(
      /* @__PURE__ */ to("$label"),
      /* @__PURE__ */ eo(
        /* @__PURE__ */ $e("prefix", "label"),
        /* @__PURE__ */ ct(),
        /* @__PURE__ */ vm(),
        /* @__PURE__ */ dt(),
        /* @__PURE__ */ $e("suffix")
      )
    ),
    /* @__PURE__ */ ut("$help"),
    /* @__PURE__ */ St(/* @__PURE__ */ kt("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [Cm],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "b1n0td79m9g"
}, Le = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Nt(
    /* @__PURE__ */ Xr(
      /* @__PURE__ */ to("$label"),
      /* @__PURE__ */ eo(
        /* @__PURE__ */ $e("prefix", "label"),
        /* @__PURE__ */ ct(),
        /* @__PURE__ */ Pl(),
        /* @__PURE__ */ dt(),
        /* @__PURE__ */ $e("suffix")
      )
    ),
    /* @__PURE__ */ ut("$help"),
    /* @__PURE__ */ St(/* @__PURE__ */ kt("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "text",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [Rl],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "c3cc4kflsg"
}, Ym = {
  button: Ca,
  submit: Ca,
  checkbox: Pm,
  file: Fm,
  form: Vm,
  group: Nm,
  hidden: Bm,
  list: Rm,
  meta: Hm,
  radio: Wm,
  select: Km,
  textarea: jm,
  text: Le,
  color: Le,
  date: Le,
  datetimeLocal: Le,
  email: Le,
  month: Le,
  number: Le,
  password: Le,
  search: Le,
  tel: Le,
  time: Le,
  url: Le,
  week: Le,
  range: Le
}, Kr = void 0, Kt = null, Fn, Kl = !1, Er = !1, Zm = /* @__PURE__ */ new Promise((e) => {
  Fn = () => {
    Kl = !0, e();
  };
}), st = typeof window < "u" && typeof fetch < "u";
Kr = st ? /* @__PURE__ */ getComputedStyle(document.documentElement) : void 0;
var Jt = {}, yo = {};
function Um(e, t, r, n) {
  t && Object.assign(Jt, t), st && !Er && Kr?.getPropertyValue("--formkit-theme") ? (Fn(), Er = !0) : e && !Er && st ? qm(e) : !Er && st && Fn();
  const o = function(a) {
    a.addProps(["iconLoader", "iconLoaderUrl"]), a.props.iconHandler = La(
      a.props?.iconLoader ? a.props.iconLoader : n,
      a.props?.iconLoaderUrl ? a.props.iconLoaderUrl : r
    ), Xm(a, a.props.iconHandler), a.on("created", () => {
      a?.context?.handlers && (a.context.handlers.iconClick = (i) => {
        const l = `on${i.charAt(0).toUpperCase()}${i.slice(1)}IconClick`, p = a.props[l];
        if (p && typeof p == "function")
          return (u) => p(a, u);
      }), a?.context?.fns && (a.context.fns.iconRole = (i) => {
        const l = `on${i.charAt(0).toUpperCase()}${i.slice(1)}IconClick`;
        return typeof a.props[l] == "function" ? "button" : null;
      });
    });
  };
  return o.iconHandler = La(n, r), o;
}
function qm(e) {
  if (!(!e || !st || typeof getComputedStyle != "function") && (Er = !0, Kt = document.getElementById("formkit-theme"), e && // if we have a window object
  st && // we don't have an existing theme OR the theme being set up is different
  (!Kr?.getPropertyValue("--formkit-theme") && !Kt || Kt?.getAttribute("data-theme") && Kt?.getAttribute("data-theme") !== e))) {
    const r = `https://cdn.jsdelivr.net/npm/@formkit/themes@${An.startsWith("__") ? "latest" : An}/dist/${e}/theme.css`, n = document.createElement("link");
    n.type = "text/css", n.rel = "stylesheet", n.id = "formkit-theme", n.setAttribute("data-theme", e), n.onload = () => {
      Kr = getComputedStyle(document.documentElement), Fn();
    }, document.head.appendChild(n), n.href = r, Kt && Kt.remove();
  }
}
function La(e, t) {
  return (r) => {
    if (typeof r != "string") return;
    if (r.startsWith("<svg"))
      return r;
    const n = r.startsWith("default:");
    r = n ? r.split(":")[1] : r;
    const o = r in Jt;
    let s;
    if (o)
      return Jt[r];
    if (!yo[r]) {
      if (s = zm(r), s = st && typeof s > "u" ? Promise.resolve(s) : s, s instanceof Promise)
        yo[r] = s.then((a) => !a && typeof r == "string" && !n ? s = typeof e == "function" ? e(r) : Gm(r, t) : a).then((a) => (typeof r == "string" && (Jt[n ? `default:${r}` : r] = a), a));
      else if (typeof s == "string")
        return Jt[n ? `default:${r}` : r] = s, s;
    }
    return yo[r];
  };
}
function zm(e) {
  if (st)
    return Kl ? Aa(e) : Zm.then(() => Aa(e));
}
function Aa(e) {
  const t = Kr?.getPropertyValue(`--fk-icon-${e}`);
  if (t) {
    const r = atob(t);
    if (r.startsWith("<svg"))
      return Jt[e] = r, r;
  }
}
function Gm(e, t) {
  const r = An.startsWith("__") ? "latest" : An, n = typeof t == "function" ? t(e) : `https://cdn.jsdelivr.net/npm/@formkit/icons@${r}/dist/icons/${e}.svg`;
  if (st)
    return fetch(`${n}`).then(async (o) => {
      const s = await o.text();
      if (s.startsWith("<svg"))
        return s;
    }).catch((o) => {
      console.error(o);
    });
}
function Xm(e, t) {
  const r = /^[a-zA-Z-]+(?:-icon|Icon)$/;
  Object.keys(e.props).filter((o) => r.test(o)).forEach((o) => Jm(e, t, o));
}
function Jm(e, t, r) {
  const n = e.props[r], o = t(n), s = `_raw${r.charAt(0).toUpperCase()}${r.slice(1)}`, a = `on${r.charAt(0).toUpperCase()}${r.slice(1)}Click`;
  if (e.addProps([s, a]), e.on(`prop:${r}`, Qm), o instanceof Promise)
    return o.then((i) => {
      e.props[s] = i;
    });
  e.props[s] = o;
}
function Qm(e) {
  const t = e.origin, r = e.payload, n = t?.props?.iconHandler, o = e.name.split(":")[1], s = `_raw${o.charAt(0).toUpperCase()}${o.slice(1)}`;
  if (n && typeof n == "function") {
    const a = n(r);
    if (a instanceof Promise)
      return a.then((i) => {
        t.props[s] = i;
      });
    t.props[s] = a;
  }
}
var Ta = {
  /**
   * FormKit errors:
   */
  100: ({ data: e }) => `Only groups, lists, and forms can have children (${e.name}).`,
  101: ({ data: e }) => `You cannot directly modify the store (${e.name}). See: https://formkit.com/advanced/core#message-store`,
  102: ({
    data: [e, t]
  }) => `You cannot directly assign node.${t} (${e.name})`,
  103: ({ data: [e] }) => `Schema expressions cannot start with an operator (${e})`,
  104: ({ data: [e, t] }) => `Schema expressions cannot end with an operator (${e} in "${t}")`,
  105: ({ data: e }) => `Invalid schema expression: ${e}`,
  106: ({ data: e }) => `Cannot submit because (${e}) is not in a form.`,
  107: ({ data: [e, t] }) => `Cannot set ${e.name} to non object value: ${t}`,
  108: ({ data: [e, t] }) => `Cannot set ${e.name} to non array value: ${t}`,
  /**
   * Input specific errors:
   */
  300: ({ data: [e] }) => `Cannot set behavior prop to overscroll (on ${e.name} input) when options prop is a function.`,
  /**
   * FormKit vue errors:
   */
  600: ({ data: e }) => `Unknown input type${typeof e.props.type == "string" ? ' "' + e.props.type + '"' : ""} ("${e.name}")`,
  601: ({ data: e }) => `Input definition${typeof e.props.type == "string" ? ' "' + e.props.type + '"' : ""} is missing a schema or component property (${e.name}).`
}, Ia = {
  /**
   * Core warnings:
   */
  150: ({ data: e }) => `Schema function "${e}()" is not a valid function.`,
  151: ({ data: e }) => `No form element with id: ${e}`,
  152: ({ data: e }) => `No input element with id: ${e}`,
  /**
   * Input specific warnings:
   */
  350: ({
    data: { node: e, inputType: t }
  }) => `Invalid options prop for ${e.name} input (${t}). See https://formkit.com/inputs/${t}`,
  /**
   * Vue warnings:
   */
  650: 'Schema "$get()" must use the id of an input to access.',
  651: ({ data: e }) => `Cannot setErrors() on "${e}" because no such id exists.`,
  652: ({ data: e }) => `Cannot clearErrors() on "${e}" because no such id exists.`,
  /**
   * Deprecation warnings:
   */
  800: ({ data: e }) => `${e} is deprecated.`
}, eh = (e, t) => {
  if (e.code in Ta) {
    const r = Ta[e.code];
    e.message = typeof r == "function" ? r(e) : r;
  }
  return t(e);
}, Ea = !1;
function th() {
  Ea || (Es(eh), Ms(rh), Ea = !0);
}
var rh = (e, t) => {
  if (e.code in Ia) {
    const r = Ia[e.code];
    e.message = typeof r == "function" ? r(e) : r;
  }
  return t(e);
}, nh = Object.defineProperty, oh = Object.getOwnPropertyNames, jl = (e, t) => function() {
  return e && (t = (0, e[oh(e)[0]])(e = 0)), t;
}, sh = (e, t) => {
  for (var r in t)
    nh(e, r, { get: t[r], enumerable: !0 });
}, Ma, Yl, Zl = jl({
  "packages/vue/src/bindings.ts"() {
    Ma = function(t) {
      t.ledger.count("blocking", (v) => v.blocking);
      const r = ke(!t.ledger.value("blocking"));
      t.ledger.count("errors", (v) => v.type === "error");
      const n = ke(!!t.ledger.value("errors"));
      let o = !1;
      Vu(() => {
        o = !0;
      });
      const s = Ir(
        t.store.reduce((v, T) => (T.visible && (v[T.key] = T), v), {})
      ), a = ke(
        t.props.validationVisibility || (t.props.type === "checkbox" ? "dirty" : "blur")
      );
      t.on("prop:validationVisibility", ({ payload: v }) => {
        a.value = v;
      });
      const i = ke(a.value === "live"), l = ke(!1), p = (v) => {
        l.value = (v ?? []).some(
          (T) => T.name === "required"
        );
      };
      p(t.props.parsedRules), t.on("prop:parsedRules", ({ payload: v }) => p(v));
      const u = ke(t.children.map((v) => v.uid)), c = Lt(() => {
        if (!D.state) return !1;
        if (D.state.submitted) return !0;
        if (!i.value && !D.state.settled)
          return !1;
        switch (a.value) {
          case "live":
            return !0;
          case "blur":
            return D.state.blurred;
          case "dirty":
            return D.state.dirty;
          default:
            return !1;
        }
      }), f = Lt(() => D.state.failing && c.value), d = Lt(() => D && $.value ? r.value && !n.value : D.state.dirty && !Be(D.value)), $ = ke(
        Array.isArray(t.props.parsedRules) && t.props.parsedRules.length > 0
      );
      t.on("prop:parsedRules", ({ payload: v }) => {
        $.value = Array.isArray(v) && v.length > 0;
      });
      const h = Lt(() => {
        const v = {};
        for (const T in s) {
          const V = s[T];
          (V.type !== "validation" || c.value) && (v[T] = V);
        }
        return v;
      }), y = Ir(
        t.store.reduce((v, T) => (T.type === "ui" && T.visible && (v[T.key] = T), v), {})
      ), m = Lt(() => !D.state.failing), S = Ir({}), g = new Proxy(S, {
        get(...v) {
          if (!t) return "";
          const [T, V] = v;
          let U = Reflect.get(...v);
          return !U && typeof V == "string" && !G(T, V) && !V.startsWith("__v") && Jn(t).watch((Z) => {
            const pe = typeof Z.config.rootClasses == "function" ? Z.config.rootClasses(V, Z) : {}, he = Z.config.classes ? xn(V, Z, Z.config.classes[V]) : {}, De = xn(
              V,
              Z,
              Z.props[`_${V}Class`]
            ), ee = xn(
              V,
              Z,
              Z.props[`${V}Class`]
            );
            U = gd(
              Z,
              V,
              pe,
              he,
              De,
              ee
            ), T[V] = U ?? "";
          }), U;
        }
      });
      t.on("prop:rootClasses", () => {
        const v = Object.keys(S);
        for (const T of v)
          delete S[T];
      });
      const _ = Lt(() => {
        if (!t) return;
        const v = [];
        D.help && v.push(`help-${t.props.id}`);
        for (const T in h.value)
          v.push(`${t.props.id}-${T}`);
        return v.length ? v.join(" ") : void 0;
      }), C = ke(t.value), k = ke(t.value), D = Ir({
        _value: k,
        attrs: t.props.attrs,
        disabled: t.props.disabled,
        describedBy: _,
        fns: {
          length: (v) => Object.keys(v).length,
          number: (v) => Number(v),
          string: (v) => String(v),
          json: (v) => JSON.stringify(v),
          eq: W
        },
        handlers: {
          blur: (v) => {
            t && (t.store.set(
              /* @__PURE__ */ ye({ key: "blurred", visible: !1, value: !0 })
            ), typeof t.props.attrs.onBlur == "function" && t.props.attrs.onBlur(v));
          },
          touch: () => {
            const v = D.dirtyBehavior === "compare";
            if (t.store.dirty?.value && !v) return;
            const T = !W(t.props._init, t._value);
            !T && !v || t.store.set(
              /* @__PURE__ */ ye({ key: "dirty", visible: !1, value: T })
            );
          },
          DOMInput: (v) => {
            t.input(v.target.value), t.emit("dom-input-event", v);
          }
        },
        help: t.props.help,
        id: t.props.id,
        items: u,
        label: t.props.label,
        messages: h,
        didMount: !1,
        node: Ls(t),
        options: t.props.options,
        defaultMessagePlacement: !0,
        slots: t.props.__slots,
        state: {
          blurred: !1,
          complete: d,
          dirty: !1,
          empty: Be(C),
          submitted: !1,
          settled: t.isSettled,
          valid: r,
          invalid: f,
          errors: n,
          rules: $,
          validationVisible: c,
          required: l,
          failing: !1,
          passing: m
        },
        type: t.props.type,
        family: t.props.family,
        ui: y,
        value: C,
        classes: g
      });
      t.on("created", () => {
        W(D.value, t.value) || (k.value = t.value, C.value = t.value, on(C), on(k)), (async () => (await t.settled, t && (t.props._init = We(t.value))))();
      }), t.on("mounted", () => {
        D.didMount = !0;
      }), t.on("settled", ({ payload: v }) => {
        D.state.settled = v;
      });
      function w(v) {
        (Array.isArray(v) ? v : Object.keys(v)).forEach((V) => {
          V = rr(V), G(D, V) || (D[V] = t.props[V]), t.on(`prop:${V}`, ({ payload: U }) => {
            D[V] = U;
          });
        });
      }
      w((() => {
        const v = [
          "__root",
          "help",
          "label",
          "disabled",
          "options",
          "type",
          "attrs",
          "preserve",
          "preserveErrors",
          "id",
          "dirtyBehavior"
        ], T = /^[a-zA-Z-]+(?:-icon|Icon)$/, V = Object.keys(t.props).filter((U) => T.test(U));
        return v.concat(V);
      })());
      function x(v) {
        v.props && w(v.props);
      }
      t.props.definition && x(t.props.definition), t.on("added-props", ({ payload: v }) => w(v)), t.on("input", ({ payload: v }) => {
        t.type !== "input" && !Qo(v) && !ia(v) ? k.value = es(v) : (k.value = v, on(k));
      }), t.on("commitRaw", ({ payload: v }) => {
        t.type !== "input" && !Qo(v) && !ia(v) ? C.value = k.value = es(v) : (C.value = k.value = v, on(C)), t.emit("modelUpdated");
      }), t.on("commit", ({ payload: v }) => {
        if ((!D.state.dirty || D.dirtyBehavior === "compare") && t.isCreated && o)
          if (!t.store.validating?.value)
            D.handlers.touch();
          else {
            const T = t.on("message-removed", ({ payload: V }) => {
              V.key === "validating" && (D.handlers.touch(), t.off(T));
            });
          }
        d && t.type === "input" && n.value && !H(t.props.preserveErrors) && t.store.filter(
          (T) => !(T.type === "error" && T.meta?.autoClear === !0)
        ), t.type === "list" && t.sync && (u.value = t.children.map((T) => T.uid)), D.state.empty = Be(v);
      });
      const b = async (v) => {
        v.type === "ui" && v.visible && !v.meta.showAsMessage ? y[v.key] = v : v.visible ? s[v.key] = v : v.type === "state" && (D.state[v.key] = !!v.value);
      };
      t.on("message-added", (v) => b(v.payload)), t.on("message-updated", (v) => b(v.payload)), t.on("message-removed", ({ payload: v }) => {
        delete y[v.key], delete s[v.key], delete D.state[v.key];
      }), t.on("settled:blocking", () => {
        r.value = !0;
      }), t.on("unsettled:blocking", () => {
        r.value = !1;
      }), t.on("settled:errors", () => {
        n.value = !1;
      }), t.on("unsettled:errors", () => {
        n.value = !0;
      }), Mr(c, (v) => {
        v && (i.value = !0);
      }), t.context = D, t.emit("context", t, !1), t.on("destroyed", () => {
        t.context = void 0, t = null;
      });
    }, Yl = Ma;
  }
}), ah = {};
sh(ah, {
  defaultConfig: () => Bs
});
var Bs, ih = jl({
  "packages/vue/src/defaultConfig.ts"() {
    Zl(), Bs = (e = {}) => {
      th();
      const {
        rules: t = {},
        locales: r = {},
        inputs: n = {},
        messages: o = {},
        locale: s = void 0,
        theme: a = void 0,
        iconLoaderUrl: i = void 0,
        iconLoader: l = void 0,
        icons: p = {},
        ...u
      } = e, c = Nf({
        ...Vf,
        ...t || {}
      }), f = tm(
        xt({ en: em, ...r || {} }, o)
      ), d = rm(Ym, n), $ = Um(a, p, i, l);
      return xt(
        {
          plugins: [d, $, Yl, f, c],
          ...s ? { config: { locale: s } } : {}
        },
        u || {},
        !0
      );
    };
  }
}), lh = typeof window > "u", bo = /* @__PURE__ */ new Map();
function ph(e, t) {
  !lh || !e || (bo.has(e) || bo.set(e, /* @__PURE__ */ new Set()), bo.get(e)?.add(t));
}
var Ul = typeof window > "u", Or = {}, or = {}, _e, Ne = /* @__PURE__ */ new WeakMap(), uh = "__raw__", ch = /[a-zA-Z0-9\-][cC]lass$/;
function dh(e, t) {
  const r = ke(null);
  if (e === "get") {
    const o = {};
    return r.value = fh.bind(null, o), r;
  }
  const n = e.split(".");
  return tt(() => {
    r.value = Rs(
      Qo(t) ? t.value : t,
      n
    );
  }), r;
}
function Rs(e, t) {
  if (Array.isArray(e)) {
    for (const o of e) {
      const s = o !== !1 && Rs(o, t);
      if (s !== void 0) return s;
    }
    return;
  }
  let r, n = e;
  for (const o in t) {
    const s = t[o];
    if (typeof n != "object" || n === null) {
      r = void 0;
      break;
    }
    const a = n[s];
    if (Number(o) === t.length - 1 && a !== void 0) {
      r = typeof a == "function" ? a.bind(n) : a;
      break;
    }
    n = a;
  }
  return r;
}
function fh(e, t) {
  if (typeof t != "string") return _t(650);
  if (t in e || (e[t] = ke(void 0)), e[t].value === void 0) {
    e[t].value = null;
    const r = zr(t);
    r && (e[t].value = r.context), xc(t, ({ payload: n }) => {
      e[t].value = Gr(n) ? n.context : n;
    });
  }
  return e[t].value;
}
function Oa(e, t, r) {
  function n(d, $) {
    const h = c(He($.if), { if: !0 }), y = p(d, $.then), m = $.else ? p(d, $.else) : null;
    return [h, y, m];
  }
  function o(d, $) {
    const h = c(He(d.if));
    let y = () => $, m = () => $;
    return typeof d.then == "object" ? m = s(d.then, void 0) : typeof d.then == "string" && d.then?.startsWith("$") ? m = c(He(d.then)) : m = () => d.then, G(d, "else") && (typeof d.else == "object" ? y = s(d.else) : typeof d.else == "string" && d.else?.startsWith("$") ? y = c(He(d.else)) : y = () => d.else), () => h() ? m() : y();
  }
  function s(d, $, h = {}) {
    const y = new Set(Object.keys(d || {})), m = $ ? c(He($)) : () => ({}), S = [
      (g) => {
        const _ = m();
        for (const C in _)
          y.has(C) || (g[C] = _[C]);
      }
    ];
    if (d) {
      if (qt(d))
        return o(
          d,
          h
        );
      for (let g in d) {
        const _ = d[g];
        let C;
        const k = typeof _ == "string";
        g.startsWith(uh) ? (g = g.substring(7), C = () => _) : k && _.startsWith("$") && _.length > 1 && !(_.startsWith("$reset") && ch.test(g)) ? C = c(He(_)) : typeof _ == "object" && qt(_) ? C = o(_, void 0) : typeof _ == "object" && bt(_) ? C = s(_) : C = () => _, S.push((D) => {
          D[g] = C();
        });
      }
    }
    return () => {
      const g = Array.isArray(d) ? [] : {};
      return S.forEach((_) => _(g)), g;
    };
  }
  function a(d, $) {
    let h = null, y = () => null, m = !1, S = null, g = null, _ = null, C = !1;
    const k = hd($);
    if (Ot(k) ? (h = k.$el, y = k.$el !== "text" ? s(k.attrs, k.bind) : () => null) : Rr(k) ? (typeof k.$cmp == "string" ? G(d, k.$cmp) ? h = d[k.$cmp] : (h = k.$cmp, C = !0) : h = k.$cmp, y = s(k.props, k.bind)) : qt(k) && ([m, S, g] = n(d, k)), !qt(k) && "if" in k ? m = c(He(k.if)) : !qt(k) && h === null && (m = () => !0), "children" in k && k.children)
      if (typeof k.children == "string")
        if (k.children.startsWith("$slots."))
          h = h === "text" ? "slot" : h, S = c(He(k.children));
        else if (k.children.startsWith("$") && k.children.length > 1) {
          const D = c(He(k.children));
          S = () => String(D());
        } else
          S = () => String(k.children);
      else if (Array.isArray(k.children))
        S = p(d, k.children);
      else {
        const [D, w, L] = n(d, k.children);
        S = (x) => D && D() ? w && w(x) : L && L(x);
      }
    if (Rr(k))
      if (S) {
        const D = S;
        S = (w) => ({
          default(L, x, b) {
            const v = _e;
            x && (_e = x);
            const T = b?.length || 0;
            if (b)
              for (let U = b.length - 1; U >= 0; U--)
                Ne.get(_e)?.unshift(b[U]);
            w && Ne.get(_e)?.unshift(w), L && Ne.get(_e)?.unshift(L);
            const V = D(w);
            L && Ne.get(_e)?.shift(), w && Ne.get(_e)?.shift();
            for (let U = 0; U < T; U++)
              Ne.get(_e)?.shift();
            return _e = v, V;
          }
        }), S.slot = !0;
      } else
        S = () => ({});
    if ("for" in k && k.for) {
      const D = k.for.length === 3 ? k.for[2] : k.for[1];
      _ = [
        typeof D == "string" && D.startsWith("$") ? c(He(D)) : () => D,
        k.for[0],
        k.for.length === 3 ? String(k.for[1]) : null
      ];
    }
    return [m, h, y, S, g, _, C];
  }
  function i(d, $) {
    const h = d($), y = _e, m = Ne.get(y)?.slice() || [];
    return Object.keys(h).reduce((S, g) => {
      const _ = h && h[g];
      return S[g] = (C) => _ && _(C, y, m) || null, S;
    }, {});
  }
  function l(d, $) {
    const [h, y, m, S, g, _, C] = a(d, $);
    let k = ((D) => {
      if (h && y === null && S)
        return h() ? S(D) : g && g(D);
      if (y && (!h || h())) {
        if (y === "text" && S)
          return Pu(String(S()));
        if (y === "slot" && S) return S(D);
        const w = C ? Fu(y) : y, L = S?.slot ? i(S, D) : null;
        return Xo(
          w,
          m(),
          L || (S ? S(D) : [])
        );
      }
      return typeof g == "function" ? g(D) : g;
    });
    if (_) {
      const D = k, [w, L, x] = _;
      k = (() => {
        const b = w(), v = Number.isFinite(b) ? Array(Number(b)).fill(0).map((J, Z) => Z) : b, T = [];
        if (typeof v != "object") return null;
        const V = Ne.get(_e) || [], U = Array.isArray(v);
        for (const J in v) {
          if (U && J in Array.prototype) continue;
          const Z = Object.defineProperty(
            {
              ...V.reduce(
                (pe, he) => pe.__idata ? { ...pe, ...he } : he,
                {}
              ),
              [L]: v[J],
              ...x !== null ? { [x]: U ? Number(J) : J } : {}
            },
            "__idata",
            { enumerable: !1, value: !0 }
          );
          V.unshift(Z), T.push(D.bind(null, Z)()), V.shift();
        }
        return T;
      });
    }
    return k;
  }
  function p(d, $) {
    if (Array.isArray($)) {
      const y = $.map(l.bind(null, d));
      return (m) => y.map((S) => S(m));
    }
    const h = l(d, $);
    return (y) => h(y);
  }
  const u = [];
  function c(d, $ = {}) {
    const h = /* @__PURE__ */ new WeakMap();
    return u.push((y, m) => {
      h.set(
        m,
        d.provide((S) => y(S, $))
      );
    }), () => h.get(_e)();
  }
  function f(d, $) {
    r ?? (r = zl(t));
    const [h, y] = G(Or, r) ? Or[r] : [p(e, t), u];
    return Ul || (or[r] ?? (or[r] = 0), or[r]++, Or[r] = [h, y]), y.forEach((m) => {
      m(d, $);
    }), () => (_e = $, h());
  }
  return f;
}
function ql(e, t) {
  const r = Ne.get(_e) || [];
  let n;
  return r.length && (n = Rs(r, e.split("."))), n === void 0 ? t : n;
}
function mh(e, t) {
  return new Proxy(e, {
    get(...r) {
      let n;
      const o = r[1];
      if (typeof o == "string") {
        const s = _e;
        _e = t, n = ql(o, void 0), _e = s;
      }
      return n !== void 0 ? n : Reflect.get(...r);
    }
  });
}
function Pa(e, t, r) {
  return e(
    (n, o = {}) => n.reduce((s, a) => {
      if (a.startsWith("slots.")) {
        const i = a.substring(6), l = () => t.slots && G(t.slots, i) && typeof t.slots[i] == "function";
        if (o.if)
          s[a] = l;
        else if (t.slots) {
          const p = mh(t, r);
          s[a] = () => l() ? t.slots[i](p) : null;
        }
      } else {
        const i = dh(a, t);
        s[a] = () => ql(a, i.value);
      }
      return s;
    }, {}),
    r
  );
}
function Fa(e, t, r) {
  if (t ?? (t = zl(e)), or[t]--, or[t] === 0) {
    delete or[t];
    const [, n] = Or[t];
    delete Or[t], n.length = 0;
  }
  Ne.delete(r);
}
function zl(e) {
  return JSON.stringify(e, (t, r) => typeof r == "function" ? r.toString() : r);
}
var Gl = /* @__PURE__ */ Xn({
  name: "FormKitSchema",
  props: {
    schema: {
      type: [Array, Object],
      required: !0
    },
    data: {
      type: Object,
      default: () => ({})
    },
    library: {
      type: Object,
      default: () => ({})
    },
    memoKey: {
      type: String,
      required: !1
    }
  },
  emits: ["mounted"],
  setup(e, t) {
    const r = Jo();
    let n = {};
    Ne.set(n, []);
    const o = { FormKit: Ls(Pr), ...e.library };
    let s = Oa(o, e.schema, e.memoKey), a, i;
    Ul || Mr(
      () => e.schema,
      (p, u) => {
        const c = n;
        n = {}, Ne.set(n, []), s = Oa(o, e.schema, e.memoKey), a = Pa(s, i, n), p === u && (r?.proxy?.$forceUpdate)(), Fa(e.schema, e.memoKey, c);
      },
      { deep: !0 }
    ), tt(() => {
      i = Object.assign(Ir(e.data ?? {}), {
        slots: t.slots
      }), t.slots, a = Pa(s, i, n);
    });
    function l() {
      Fa(e.schema, e.memoKey, n), i && (i.node && i.node.destroy(), i.slots = null, i = null), a = null;
    }
    return As(() => t.emit("mounted")), Eu(l), ph(Jo()?.appContext.app, l), () => a ? a() : null;
  }
}), hh = Gl, gh = typeof window > "u", Va = /* @__PURE__ */ Symbol("FormKitParent"), vh = /* @__PURE__ */ Symbol("FormKitComponentCallback");
function $h(e, t) {
  const r = Dh(e, t);
  if (r.props.definition || Ae(600, r), r.props.definition.component)
    return () => Xo(
      r.props.definition?.component,
      {
        context: r.context
      },
      { ...t.slots }
    );
  const n = ke([]);
  let o = r.props.definition.schemaMemoKey;
  const s = () => {
    const p = r.props?.definition?.schema;
    p || Ae(601, r), typeof p == "function" ? (n.value = p({ ...e.sectionsSchema || {} }), (o && e.sectionsSchema || "memoKey" in p && typeof p.memoKey == "string") && (o = (o ?? p?.memoKey) + JSON.stringify(e.sectionsSchema))) : n.value = p;
  };
  s(), gh || r.on("schema", () => {
    o += "♻️", s();
  }), t.emit("node", r);
  const a = r.props.definition.library, i = {
    FormKit: Ls(Xl),
    ...a,
    ...e.library ?? {}
  };
  function l() {
    r.emit("mounted");
  }
  return t.expose({ node: r }), () => Xo(
    Gl,
    {
      schema: n.value,
      data: r.context,
      onMounted: l,
      library: i,
      memoKey: o
    },
    { ...t.slots }
  );
}
var Xl = /* @__PURE__ */ Xn(
  $h,
  {
    props: nm,
    inheritAttrs: !1
  }
), Pr = Xl, yh = /* @__PURE__ */ Symbol();
function Na(e) {
  if (typeof window < "u" && globalThis.__FORMKIT_CONFIGS__) {
    const t = globalThis.__FORMKIT_CONFIGS__.indexOf(e);
    t !== -1 && globalThis.__FORMKIT_CONFIGS__.splice(t, 1);
  }
}
function bh(e, t) {
  return e.component(t.alias || "FormKit", Pr).component(t.schemaAlias || "FormKitSchema", hh), {
    get: zr,
    setLocale: (r) => {
      t.config?.rootConfig && (t.config.rootConfig.locale = r);
    },
    clearErrors: $d,
    setErrors: vd,
    submit: ll,
    reset: pl
  };
}
var Jl = /* @__PURE__ */ Symbol.for("FormKitOptions"), xh = /* @__PURE__ */ Symbol.for("FormKitConfig"), wh = {
  install(e, t) {
    const r = Object.assign(
      {
        alias: "FormKit",
        schemaAlias: "FormKitSchema"
      },
      typeof t == "function" ? t() : t
    ), n = wc(r.config || {});
    r.config = { rootConfig: n }, e.config.globalProperties.$formkit = bh(e, r), e.provide(Jl, r), e.provide(xh, n), typeof window < "u" && (globalThis.__FORMKIT_CONFIGS__ = (globalThis.__FORMKIT_CONFIGS__ || []).concat([n]));
    const o = e;
    if (typeof o.onUnmount == "function")
      o.onUnmount(() => {
        Na(n);
      });
    else {
      const s = e.unmount.bind(e);
      e.unmount = () => (Na(n), s());
    }
  }
}, _h = typeof window < "u", xo = [
  // Boolean props
  "ignore",
  "disabled",
  "preserve",
  // String props
  "help",
  "label",
  /^preserve(-e|E)rrors/,
  /^[a-z]+(?:-visibility|Visibility|-behavior|Behavior)$/,
  /^[a-zA-Z-]+(?:-class|Class)$/,
  "prefixIcon",
  "suffixIcon",
  /^[a-zA-Z-]+(?:-icon|Icon)$/
], kh = ["disabled", "ignore", "preserve"];
function Ba(e, t) {
  t.classes && Object.keys(t.classes).forEach(
    (r) => {
      typeof r == "string" && (e.props[`_${r}Class`] = t.classes[r], tr(t.classes[r]) && r === "inner" && Object.values(t.classes[r]));
    }
  );
}
function Sh(e) {
  return e ? ["Submit", "SubmitRaw", "SubmitInvalid"].reduce(
    (r, n) => {
      const o = `on${n}`;
      return o in e && typeof e[o] == "function" && (r[o] = e[o]), r;
    },
    {}
  ) : {};
}
function Dh(e, t, r = {}) {
  const n = Object.assign({}, nn(Jl) || {}, r), o = nn(yh, ke(_h ? document : void 0)), s = nn(vh, () => {
  }), a = Jo(), i = Sh(a?.vnode.props), l = ["modelValue", "model-value"].some(
    (k) => k in (a?.vnode.props ?? {})
  );
  let p = !1;
  As(() => {
    p = !0;
  });
  const u = e.modelValue !== void 0 ? e.modelValue : We(t.attrs.value);
  function c() {
    const k = {
      ...Wt(e),
      ...i,
      type: e.type ?? "text",
      __root: o.value,
      __slots: t.slots
    }, D = ua(Wt(t.attrs), xo);
    D.key || (D.key = vr()), k.attrs = D;
    const w = ca(Wt(t.attrs), xo);
    for (const x in w)
      kh.includes(x) && w[x] === "" && (w[x] = !0), k[rr(x)] = w[x];
    const L = { props: {} };
    return Ba(L, e), Object.assign(k, L.props), typeof k.type != "string" && (k.definition = k.type, delete k.type), k;
  }
  const f = c(), d = f.ignore ? null : e.parent || nn(Va, null), $ = fd(
    xt(
      n || {},
      {
        name: e.name || void 0,
        value: u,
        parent: d,
        plugins: (n.plugins || []).concat(e.plugins ?? []),
        config: e.config || {},
        props: f,
        index: e.index,
        sync: !!H(t.attrs.sync || t.attrs.dynamic)
      },
      !1,
      !0
    )
  );
  s($), $.props.definition || Ae(600, $);
  const h = ke(
    new Set(
      Array.isArray($.props.__propDefs) ? $.props.__propDefs : Object.keys($.props.__propDefs ?? {})
    )
  );
  $.on(
    "added-props",
    ({ payload: k }) => {
      (Array.isArray(k) ? k : Object.keys(k ?? {})).forEach((w) => h.value.add(w));
    }
  );
  const y = Lt(
    () => xo.concat([...h.value]).reduce((k, D) => (typeof D == "string" ? (k.push(rr(D)), k.push(nl(D))) : k.push(D), k), [])
  );
  tt(() => Ba($, e));
  const m = Wt(e);
  for (const k in m)
    Mr(
      () => e[k],
      () => {
        e[k] !== void 0 && ($.props[k] = e[k]);
      }
    );
  tt(() => {
    $.props.__root = o.value;
  });
  const S = /* @__PURE__ */ new Set(), g = Wt(t.attrs);
  tt(() => {
    _(ca(g, y.value));
  });
  function _(k) {
    S.forEach((D) => {
      D(), S.delete(D);
    });
    for (const D in k) {
      const w = rr(D);
      S.add(
        Mr(
          () => t.attrs[D],
          () => {
            $.props[w] = t.attrs[D];
          }
        )
      );
    }
  }
  if (tt(() => {
    const k = ua(Wt(t.attrs), y.value);
    "multiple" in k && (k.multiple = H(k.multiple)), typeof k.onBlur == "function" && (k.onBlur = tc(k.onBlur)), $.props.attrs = Object.assign({}, $.props.attrs || {}, k);
  }), tt(() => {
    const k = (e.errors ?? []).map(
      (D) => /* @__PURE__ */ ye({
        key: Ts(D),
        type: "error",
        value: D,
        meta: { source: "prop" }
      })
    );
    $.store.apply(
      k,
      (D) => D.type === "error" && D.meta.source === "prop"
    );
  }), $.type !== "input") {
    const k = `${$.name}-prop`;
    tt(() => {
      const D = e.inputErrors ?? {}, w = Object.keys(D);
      w.length || $.clearErrors(!0, k);
      const L = w.reduce((x, b) => {
        let v = D[b];
        return typeof v == "string" && (v = [v]), Array.isArray(v) && (x[b] = v.map(
          (T) => /* @__PURE__ */ ye({
            key: T,
            type: "error",
            value: T,
            meta: { source: k }
          })
        )), x;
      }, {});
      $.store.apply(
        L,
        (x) => x.type === "error" && x.meta.source === k
      );
    });
  }
  tt(() => Object.assign($.config, e.config)), $.type !== "input" && Nu(Va, $);
  let C;
  return $.on("modelUpdated", () => {
    t.emit("inputRaw", $.context?.value, $), p && t.emit("input", $.context?.value, $), l && $.context && (C = We($.value), t.emit("update:modelValue", es($.value)));
  }), l && (Mr(
    Mu(e, "modelValue"),
    (k) => {
      W(C, k) || $.input(k, !1);
    },
    { deep: !0 }
  ), $.value !== u && $.emit("modelUpdated")), Ou(() => $.destroy()), $;
}
var Ch = /* @__PURE__ */ z("messages", () => ({
  $el: "ul",
  if: "$fns.length($messages)"
})), Lh = /* @__PURE__ */ z("message", () => ({
  $el: "li",
  for: ["message", "$messages"],
  attrs: {
    key: "$message.key",
    id: "$id + '-' + $message.key",
    "data-message-type": "$message.type"
  }
}));
Ch(Lh("$message.value"));
var Ah = /* @__PURE__ */ z("summary", () => ({
  $el: "div",
  attrs: {
    "aria-live": "polite"
  }
})), Th = /* @__PURE__ */ z("summaryInner", () => ({
  $el: "div",
  if: "$summaries.length && $showSummaries"
})), Ih = /* @__PURE__ */ z("messages", () => ({
  $el: "ul",
  if: "$summaries.length && $showSummaries"
})), Eh = /* @__PURE__ */ z("message", () => ({
  $el: "li",
  for: ["summary", "$summaries"],
  attrs: {
    key: "$summary.key",
    "data-message-type": "$summary.type"
  }
})), Mh = /* @__PURE__ */ z("summaryHeader", () => ({
  $el: "h2",
  attrs: {
    id: "$id"
  }
})), Oh = /* @__PURE__ */ z("messageLink", () => ({
  $el: "a",
  attrs: {
    id: "$summary.key",
    href: '$: "#" + $summary.id',
    onClick: "$jumpLink"
  }
}));
Ah(
  Th(
    Mh("$summaryHeader"),
    Ih(Eh(Oh("$summary.message")))
  )
);
ih();
Zl();
const Ph = { class: "grid grid-cols-12 gap-x-8 gap-y-7" }, Fh = { class: "mt-10 flex justify-end" }, Vh = /* @__PURE__ */ Xn({
  __name: "DynamicForm",
  props: {
    fields: {}
  },
  emits: ["form-submit"],
  setup(e, { emit: t }) {
    const r = t, n = (p) => {
      r("form-submit", p);
    }, o = {
      outer: "w-full",
      wrapper: "flex flex-col gap-1.5",
      label: "text-xs font-medium text-gray-700 dark:text-gray-100 tracking-wide",
      help: "text-xs text-gray-500 dark:text-gray-100",
      input: `
    w-full rounded-lg
    bg-white dark:bg-[#111113]
    text-gray-900 dark:!text-gray-100
    placeholder:text-gray-400 dark:placeholder:text-gray-500
    border border-gray-300/60 dark:border-white/10
    px-3 py-2.5 text-sm
    transition-all duration-200
    focus:outline-none
    focus:border-gray-400 dark:focus:border-white/30
    focus:ring-1 focus:ring-gray-300/50 dark:focus:ring-white/10
  `
    }, s = {
      ...o,
      input: `
    w-full rounded-lg
    bg-white dark:bg-[#111113]
    text-gray-900 dark:!text-gray-100
    border border-gray-300/60 dark:border-white/10
    pl-3 pr-9 py-2.5 text-sm
    transition-all duration-200
    focus:outline-none
    focus:border-gray-400 dark:focus:border-white/30
    focus:ring-1 focus:ring-gray-300/50 dark:focus:ring-white/10
  `
    }, a = {
      outer: "w-full",
      fieldset: "rounded-lg border border-gray-300/60 dark:border-white/10 px-4 py-3",
      legend: "text-xs font-medium text-gray-700 dark:text-gray-300 mb-3",
      options: "flex flex-col gap-3",
      option: "flex items-center gap-2",
      input: "text-gray-900 dark:text-gray-100 focus:ring-1 focus:ring-gray-400",
      label: "text-sm text-gray-700 dark:text-gray-300",
      help: "text-xs text-gray-500 dark:text-gray-400 mt-2"
    }, i = {
      input: `
    inline-flex items-center justify-center
    rounded-lg
    bg-gray-900 dark:bg-white
    text-white dark:text-black
    px-8 py-3
    text-sm font-medium
    transition-all duration-200
    hover:opacity-90
    focus:outline-none
    focus:ring-2 focus:ring-gray-400/40 dark:focus:ring-white/20
  `
    }, l = (p) => ["textarea", "radio", "checkbox"].includes(p.type) || p.columns === 12 ? "col-span-12" : p.columns === 6 ? "col-span-12 md:col-span-6" : p.columns === 4 ? "col-span-12 md:col-span-4" : "col-span-12 md:col-span-6";
    return (p, u) => (er(), tl(ho(Pr), {
      id: "formkit-form",
      type: "form",
      onSubmit: n,
      actions: !1
    }, {
      default: Bu(() => [
        gt("div", Ph, [
          (er(!0), Cn(Ru, null, Hu(e.fields, (c, f) => (er(), Cn("div", {
            key: c.name,
            class: Wu(l(c))
          }, [
            la(ho(Pr), Ku({ ref_for: !0 }, {
              ...c,
              id: `field-${f}`,
              label: c.label ? `${f + 1}. ${c.label}` : void 0
            }, {
              classes: c.type === "radio" ? a : c.type === "autocomplete" ? s : o
            }), null, 16, ["classes"])
          ], 2))), 128))
        ]),
        gt("div", Fh, [
          la(ho(Pr), {
            type: "submit",
            label: "Submit",
            classes: i
          })
        ])
      ]),
      _: 1
    }));
  }
}), Nh = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, Bh = /* @__PURE__ */ Nh(Vh, [["__scopeId", "data-v-77dd645f"]]), Rh = { class: "min-h-screen bg-gray-50 dark:bg-[#0b0b0e] px-4 sm:px-6 py-1 transition-colors duration-300" }, Hh = { class: "mx-auto max-w-5xl" }, Wh = { class: "flex items-center justify-end py-4" }, Kh = {
  key: 0,
  class: "text-center space-y-1 mb-4"
}, jh = { class: "text-2xl font-medium text-gray-900 dark:text-gray-100" }, Yh = { class: "text-sm text-gray-500 dark:text-gray-400" }, Zh = { class: "rounded-xl bg-white dark:bg-[#141416] border border-gray-200/70 dark:border-white/10 p-6 sm:p-8 shadow-sm" }, Uh = /* @__PURE__ */ Xn({
  __name: "index",
  props: {
    schema: {},
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = e, r = ke(t.schema?.theme === "dark"), n = () => {
      document.documentElement.classList.toggle("dark", r.value);
    };
    t._p.f.listen("msg", async (a) => {
      a.type === "theme_update" && n();
    });
    const o = () => {
      const a = r.value ? "light" : "dark";
      t._p.f.call("msg", {
        _p: t._p,
        _$p: t._$p,
        type: "ui_toggle_theme",
        custom: { theme: a }
      });
    };
    As(() => {
      n();
    });
    const s = (a) => {
      t._p.f.call("msg", {
        _p: t._p,
        _$p: t._$p,
        type: "form_submit",
        custom: { payload: a }
      });
    };
    return (a, i) => (er(), Cn("main", Rh, [
      gt("div", Hh, [
        gt("div", Wh, [
          gt("button", {
            onClick: o,
            class: "px-3 py-1.5 text-xs rounded-md border border-gray-300/70 dark:border-white/10 bg-white dark:bg-[#141416] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition"
          }, go(r.value ? "Dark mode" : "Light mode"), 1)
        ]),
        t.schema ? (er(), Cn("header", Kh, [
          gt("h1", jh, go(t.schema.title), 1),
          gt("p", Yh, go(t.schema.subtitle), 1)
        ])) : pa("", !0),
        gt("section", Zh, [
          t.schema?.fields ? (er(), tl(Bh, {
            key: 0,
            fields: t.schema.fields,
            onFormSubmit: s
          }, null, 8, ["fields"])) : pa("", !0)
        ])
      ])
    ]));
  }
});
function qh(e, t) {
  var r = !1;
  return function(...n) {
    r || (e.call(null, ...n), r = !0, setTimeout(function() {
      r = !1;
    }, t));
  };
}
function Ql(e) {
  return e.split(" ").filter((t) => t);
}
var zh = typeof window < "u";
function Re(e, t, r = !1) {
  if (!t)
    return;
  const n = Ql(t);
  if (n.length && !n.includes("longTouch"))
    for (const o of e) {
      if (!Jr(o) || !ze.has(o)) {
        o.classList.add(...n);
        continue;
      }
      const s = [], a = ze.get(o);
      if (a) {
        for (const i of n)
          o.classList.contains(i) ? o.classList.contains(i) && r === !1 && s.push(i) : o.classList.add(i);
        a.privateClasses = s, ze.set(o, a);
      }
    }
}
function pr(e, t) {
  if (!t)
    return;
  const r = Ql(t);
  if (r.length)
    for (const n of e) {
      if (!Jr(n)) {
        n.classList.remove(...r);
        continue;
      }
      const o = ze.get(n);
      if (o)
        for (const s of r)
          o.privateClasses.includes(s) || n.classList.remove(s);
    }
}
function ep(e) {
  let t = e.parentNode;
  for (; t !== null && t.nodeType === 1 && t instanceof HTMLElement; ) {
    const n = window.getComputedStyle(t).getPropertyValue("overflow");
    if (n === "scroll" || n === "auto")
      return t;
    t = t.parentNode;
  }
  return document.documentElement;
}
function Gh(e) {
  if (!(e.e instanceof TouchEvent))
    return;
  const t = e.e.touches[0].clientX, r = e.e.touches[0].clientY;
  let n = document.elementFromPoint(t, r);
  if (!Jr(n))
    return;
  let o, s = !0;
  for (; n && s; ) {
    if (ze.has(n) || Fe.has(n)) {
      s = !1, o = Fe.has(n);
      break;
    }
    n = n.parentNode;
  }
  if (o) {
    const a = Fe.get(n);
    return a ? {
      parent: {
        el: n,
        data: a
      }
    } : void 0;
  } else {
    const a = ze.get(n);
    if (!a)
      return;
    const i = Fe.get(n.parentNode);
    return i ? {
      node: {
        el: n,
        data: a
      },
      parent: {
        el: n.parentNode,
        data: i
      }
    } : void 0;
  }
}
function Jr(e) {
  return e instanceof HTMLElement && e.parentNode instanceof HTMLElement;
}
function tp(e, t) {
  const r = new AbortController();
  for (const n in t) {
    const o = t[n];
    e.addEventListener(n, o, {
      signal: r.signal,
      passive: !1
    });
  }
  return r;
}
function Hs(e, t, r = !1) {
  const n = window.getComputedStyle(e), o = [
    "position",
    "z-index",
    "top",
    "left",
    "x",
    "pointer-events",
    "y",
    "transform-origin",
    "filter",
    "-webkit-text-fill-color"
  ];
  for (const s of Array.from(n))
    r === !1 && s && o.includes(s) || t.style.setProperty(
      s,
      n.getPropertyValue(s),
      n.getPropertyPriority(s)
    );
  for (const s of Array.from(e.children)) {
    if (!Jr(s))
      continue;
    const a = t.children[Array.from(e.children).indexOf(s)];
    Hs(s, a, r);
  }
}
function Bt(e) {
  return e instanceof DragEvent ? { x: e.clientX, y: e.clientY } : { x: e.touches[0].clientX, y: e.touches[0].clientY };
}
var qe = {
  selectedNodes: Array(),
  activeNode: void 0,
  isTouch: !1
};
function Ra(e = {}) {
  return (t) => {
    const r = Fe.get(t);
    if (!r)
      return;
    const n = {
      ...r.config,
      multiDragConfig: e
    };
    return {
      setup() {
        n.handleDragstart = e.multiHandleDragstart || eg, n.handleTouchstart = e.multiHandleTouchstart || rg, n.handleEnd = e.multiHandleEnd || Jh, n.reapplyDragClasses = e.multiReapplyDragClasses || Xh, r.config = n, n.multiDragConfig.plugins?.forEach((o) => {
          o(t)?.tearDown?.();
        }), n.multiDragConfig.plugins?.forEach((o) => {
          o(t)?.setup?.();
        });
      },
      tearDownNodeRemap(o) {
        n.multiDragConfig?.plugins?.forEach((s) => {
          s(o.parent)?.tearDownNodeRemap?.(o);
        });
      },
      tearDownNode(o) {
        n.multiDragConfig?.plugins?.forEach((s) => {
          s(o.parent)?.tearDownNode?.(o);
        });
      },
      setupNodeRemap(o) {
        n.multiDragConfig?.plugins?.forEach((s) => {
          s(o.parent)?.setupNodeRemap?.(o);
        });
      },
      setupNode(o) {
        n.multiDragConfig?.plugins?.forEach((s) => {
          s(o.parent)?.setupNode?.(o);
        });
      }
    };
  };
}
function Xh(e, t) {
  if (!N)
    return;
  const r = "touchedNode" in N ? t.config.multiDragConfig.touchDropZoneClass : t.config.multiDragConfig.dropZoneClass;
  N.draggedNodes.map((o) => o.el).includes(e) && Re([e], r, !0);
}
function Jh(e) {
  !N || N && "touchedNode" in N && "touchMoving" in N && !N.touchMoving || (fp(e, N), Qh(e, N), op());
}
function Qh(e, t) {
  const r = e.targetData.parent.data.config.multiDragConfig, n = e.targetData.parent.data.config.selectionsConfig?.selectedClass, o = t && "touchedNode" in t;
  n && pr(
    qe.selectedNodes.map((a) => a.el),
    n
  ), qe.selectedNodes = [], qe.activeNode = void 0;
  const s = o ? r.selectionDropZoneClass : r.touchSelectionDraggingClass;
  pr(
    t.draggedNodes.map((a) => a.el),
    s
  );
}
function eg(e) {
  e.e instanceof DragEvent && tg({
    e: e.e,
    targetData: e.targetData
  });
}
function tg(e) {
  const t = up(e);
  qe.isTouch = !1;
  const r = e.targetData.parent.data.config.multiDragConfig, n = e.targetData.parent.data.getValues(
    e.targetData.parent.el
  );
  let o = qe.selectedNodes.length ? qe.selectedNodes.map((a) => a.data.value) : r.selections && r.selections(n, e.targetData.parent.el);
  if (o === void 0)
    return;
  if (!o.includes(e.targetData.node.data.value)) {
    o = [e.targetData.node.data.value, ...o];
    const a = e.targetData.parent.data.config.selectionsConfig;
    Re([e.targetData.node.el], a?.selectedClass, !0), qe.selectedNodes.push(e.targetData.node);
  }
  const s = e.targetData.node.el.style.zIndex;
  if (t.originalZIndex = s, e.targetData.node.el.style.zIndex = "9999", Array.isArray(o) && o.length) {
    const a = e.targetData.node.el.getBoundingClientRect(), [i, l] = [
      e.e.clientX - a.left,
      e.e.clientY - a.top
    ];
    np(rp(e, o, t, i, l));
  } else {
    const a = e.targetData.parent.data.config;
    pp(
      t.draggedNode.el,
      a.draggingClass,
      a.dropZoneClass
    );
  }
}
function rg(e) {
  e.e instanceof TouchEvent && ng({
    e: e.e,
    targetData: e.targetData
  });
}
function ng(e) {
  const t = mp(e);
  qe.isTouch = !0, qe.activeNode = e.targetData.node;
  const r = e.targetData.parent.data.config.multiDragConfig, n = e.targetData.parent.data.getValues(
    e.targetData.parent.el
  );
  let o = [];
  e.targetData.parent.data.config.selectionsConfig ? o = qe.selectedNodes.map((a) => a.data.value) : o = r.selections && r.selections(n, e.targetData.parent.el), o = [e.targetData.node.data.value, ...o];
  const s = e.targetData.parent.data.config.selectionsConfig;
  Re([e.targetData.node.el], s?.selectedClass, !0), Array.isArray(o) && o.length ? np(
    rp(
      e,
      o,
      t,
      t.touchStartLeft,
      t.touchStartTop
    )
  ) : gp(e, t), vp(e, t);
}
function rp(e, t, r, n, o) {
  for (const i of e.targetData.parent.data.enabledNodes)
    i.el !== r.draggedNode.el && t.includes(i.data.value) && r.draggedNodes.push(i);
  const s = e.targetData.parent.data.config.multiDragConfig, a = r.draggedNodes.map((i) => {
    const l = i.el.cloneNode(!0);
    return Hs(i.el, l, !0), e.e instanceof DragEvent && Re([l], s.draggingClass), l;
  });
  return setTimeout(() => {
    e.e instanceof DragEvent && Re(
      r.draggedNodes.map((i) => i.el),
      s.dropZoneClass
    );
  }), r.clonedDraggedEls = a, { data: e, state: r, x: n, y: o };
}
function np({
  data: e,
  state: t,
  x: r,
  y: n
}) {
  const o = document.createElement("div");
  for (const a of t.clonedDraggedEls)
    a instanceof HTMLElement && (a.style.pointerEvents = "none"), o.append(a);
  const { width: s } = t.draggedNode.el.getBoundingClientRect();
  o.style.cssText = `
        display: flex;
        flex-direction: column;
        width: ${s}px;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        left: -9999px
      `, document.body.append(o), e.e instanceof DragEvent ? (e.e.dataTransfer?.setDragImage(o, r, n), setTimeout(() => {
    o.remove();
  })) : "touchedNode" in t && (t.touchedNode = o);
}
var Ha = [
  {
    transform: "translateY(100%)"
  },
  {
    transform: "translateY(0)"
  }
], Wa = [
  {
    transform: "translateY(-100%)"
  },
  {
    transform: "translateY(0)"
  }
], wo = [
  {
    transform: "translateX(100%)"
  },
  {
    transform: "translateX(0)"
  }
], _o = [
  {
    transform: "translateX(-100%)"
  },
  {
    transform: "translateX(0)"
  }
];
function no(e = {}) {
  return (t) => {
    const r = Fe.get(t);
    if (r)
      return {
        setup() {
          r.config.remapFinished = () => {
          }, document.head.querySelector("[data-drag-and-drop]");
        },
        setupNodeRemap(n) {
          if (!N)
            return;
          const o = e.duration || 150;
          if (n.nodeData.value === N.draggedNode.data.value) {
            switch (N.incomingDirection) {
              case "below":
                Ze(n.node, Ha, o);
                break;
              case "above":
                Ze(n.node, Wa, o);
                break;
              case "left":
                Ze(n.node, _o, o);
                break;
              case "right":
                Ze(n.node, wo, o);
                break;
            }
            return;
          }
          if (!N.affectedNodes.map((u) => u.data.value).includes(n.nodeData.value))
            return;
          const s = n.node.getBoundingClientRect(), a = N.affectedNodes.findIndex(
            (u) => u.data.value === n.nodeData.value
          ), l = N.draggedNode.data.index >= N.targetIndex;
          let p;
          if (l ? p = N.affectedNodes[a + 1] ? N.affectedNodes[a + 1] : N.affectedNodes[a - 1] : p = N.affectedNodes[a - 1] ? N.affectedNodes[a - 1] : N.affectedNodes[a + 1], p) {
            const u = Math.abs(
              s.x - p.el.getBoundingClientRect().x
            ), c = Math.abs(
              s.y - p.el.getBoundingClientRect().y
            );
            u > c && l ? Ze(n.node, _o, o) : u > c && !l && Ze(n.node, wo, o);
          } else
            switch (N.incomingDirection) {
              case "below":
                Ze(n.node, Wa, o);
                break;
              case "above":
                Ze(n.node, Ha, o);
                break;
              case "left":
                Ze(n.node, wo, o);
                break;
              case "right":
                Ze(n.node, _o, o);
                break;
            }
        }
      };
  };
}
function Ze(e, t, r) {
  N && (N.preventEnter = !0, e.animate(t, {
    duration: r
  }), setTimeout(() => {
    N && (N.swappedNodeValue = void 0, N.remapJustFinished = !0, N.lastTargetValue = void 0, N.preventEnter = !1);
  }, r));
}
var Ka = {
  up: [0, -1],
  down: [0, 1],
  left: [-1, 0],
  right: [1, 0]
}, ze = /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ new WeakMap(), N = void 0;
function op() {
  N = void 0;
}
function sp(e) {
  return N = {
    ascendingDirection: !1,
    incomingDirection: void 0,
    enterCount: 0,
    targetIndex: 0,
    affectedNodes: [],
    lastValue: void 0,
    activeNode: void 0,
    lastTargetValue: void 0,
    remapJustFinished: !1,
    preventEnter: !1,
    clonedDraggedEls: [],
    swappedNodeValue: !1,
    originalZIndex: void 0,
    ...e
  }, N;
}
function og(e, t) {
  return N = {
    ...e,
    ...t
  }, N;
}
function ap(e) {
  const { x: t, y: r } = Bt(e.e);
  return {
    coordinates: {
      x: t,
      y: r
    },
    draggedNode: {
      el: e.targetData.node.el,
      data: e.targetData.node.data
    },
    draggedNodes: [
      {
        el: e.targetData.node.el,
        data: e.targetData.node.data
      }
    ],
    initialIndex: e.targetData.node.data.index,
    initialParent: {
      el: e.targetData.parent.el,
      data: e.targetData.parent.data
    },
    lastParent: {
      el: e.targetData.parent.el,
      data: e.targetData.parent.data
    },
    scrollParent: ep(e.targetData.node.el)
  };
}
function sg(e, t) {
  const r = ip(e), o = [
    ...ls(
      t.targetData.parent.el,
      t.targetData.parent.data
    ).filter((s) => !r.includes(s))
  ];
  o.splice(t.targetData.node.data.index, 0, ...r), e.lastTargetValue = t.targetData.node.data.value, ps(t.targetData.parent.el, t.targetData.parent.data, [
    ...o
  ]);
}
function ls(e, t) {
  return [...t.getValues(e)];
}
function ps(e, t, r) {
  t.setValues(r, e);
}
function ip(e) {
  return [...e.draggedNodes.map((t) => t.data.value)];
}
function ve({
  parent: e,
  getValues: t,
  setValues: r,
  config: n = {}
}) {
  if (!zh)
    return;
  document.addEventListener("dragover", (s) => {
    if (s.preventDefault(), N) {
      N.remapJustFinished = !1, N.lastTargetValue = void 0;
      const { x: a, y: i } = Bt(s);
      N.coordinates.y = i, N.coordinates.x = a, oo();
    }
  }), ag(e);
  const o = {
    getValues: t,
    setValues: r,
    config: {
      handleDragstart: Vn,
      handleDragoverNode: Dg,
      handleDragoverParent: Cg,
      handleEnd: Nn,
      handleTouchstart: Bn,
      handleTouchmove: $p,
      handleTouchOverNode: dg,
      handleTouchOverParent: Lg,
      performSort: sg,
      performTransfer: Eg,
      root: document,
      setupNode: fg,
      setupNodeRemap: dp,
      reapplyDragClasses: mg,
      tearDownNode: gg,
      tearDownNodeRemap: hg,
      remapFinished: pg,
      scrollBehavior: {
        x: 0.8,
        y: 0.8
      },
      threshold: {
        horizontal: 0,
        vertical: 0
      },
      ...n
    },
    enabledNodes: [],
    abortControllers: {}
  };
  ig(e, o), n.plugins?.forEach((s) => {
    s(e)?.tearDown?.();
  }), n.plugins?.forEach((s) => {
    s(e)?.setup?.();
  }), lp(e, !0);
}
function ag(e) {
  const t = Fe.get(e);
  t && t.abortControllers.mainParent && t.abortControllers.mainParent.abort();
}
function ig(e, t) {
  new MutationObserver(lg).observe(e, { childList: !0 }), Fe.set(e, t), t.abortControllers.mainParent = tp(e, {
    dragover: Mg(
      qh(t.config.handleDragoverParent, 10)
    ),
    touchOverParent: t.config.handleTouchOverParent
  });
}
function lg(e) {
  const t = e[0].target;
  t instanceof HTMLElement && lp(t);
}
function lp(e, t) {
  const r = Fe.get(e);
  if (!r)
    return;
  const n = [], o = r.config;
  for (let i = 0; i < e.children.length; i++) {
    const l = e.children[i];
    if (!Jr(l))
      continue;
    const p = ze.get(l);
    (t || !p) && o.tearDownNode({ node: l, parent: e, nodeData: p, parentData: r }), !o.disabled && (!o.draggable || o.draggable && o.draggable(l)) && n.push(l);
  }
  if (n.length !== r.getValues(e).length && !o.disabled) {
    console.warn(
      "The number of enabled nodes does not match the number of values."
    );
    return;
  }
  const s = r.getValues(e), a = [];
  for (let i = 0; i < n.length; i++) {
    const l = n[i], p = ze.get(l), u = Object.assign(
      p ?? {
        privateClasses: [],
        abortControllers: {}
      },
      {
        value: s[i],
        index: i
      }
    );
    if (N && u.value === N.draggedNode.data.value && (N.draggedNode.data = u, N.draggedNode.el = l), N && N.draggedNodes.map((f) => f.data.value).includes(u.value)) {
      const f = N.draggedNodes.find(
        (d) => d.data.value === u.value
      );
      f && (f.el = l);
    }
    a.push({
      el: l,
      data: u
    });
    const c = {
      node: l,
      parent: e,
      parentData: r,
      nodeData: u
    };
    (t || !p) && o.setupNode(c), dp(c);
  }
  Fe.set(e, { ...r, enabledNodes: a }), o.remapFinished(r);
}
function pg() {
  N && (N.preventEnter = !1, N.swappedNodeValue = void 0, N.remapJustFinished = !0);
}
function Vn(e) {
  e.e instanceof DragEvent && cg({
    e: e.e,
    targetData: e.targetData
  });
}
function pp(e, t, r) {
  Re([e], t), setTimeout(() => {
    pr([e], t), Re([e], r);
  });
}
function up(e) {
  const t = sp(ap(e));
  return e.e.stopPropagation(), e.e.dataTransfer && (e.e.dataTransfer.dropEffect = "move", e.e.dataTransfer.effectAllowed = "move", e.e.dataTransfer.setDragImage(
    e.targetData.node.el,
    e.e.offsetX,
    e.e.offsetY
  )), t;
}
function cp(e) {
  if (!(e.e instanceof DragEvent) && !(e.e instanceof TouchEvent))
    return !1;
  const t = e.targetData.parent.data.config;
  if (!t.dragHandle)
    return !0;
  const r = e.targetData.node.el.querySelectorAll(
    t.dragHandle
  );
  if (!r)
    return !1;
  const n = Bt(e.e), o = t.root.elementFromPoint(
    n.x,
    n.y
  );
  if (!o)
    return !1;
  for (const s of Array.from(r))
    if (o === s || s.contains(o))
      return !0;
  return !1;
}
function ug(e) {
  if (!cp(e))
    return;
  const t = mp(e);
  gp(e, t), vp(e, t);
}
function cg(e) {
  if (!cp(e)) {
    e.e.preventDefault();
    return;
  }
  const t = e.targetData.parent.data.config, r = up(e), n = e.targetData.node.el.style.zIndex;
  r.originalZIndex = n, e.targetData.node.el.style.zIndex = "9999", pp(
    r.draggedNode.el,
    t.draggingClass,
    t.dropZoneClass
  );
}
function dg(e) {
  N && (e.detail.targetData.parent.el === N.lastParent.el ? bp(e.detail, N) : so(e.detail, N));
}
function fg(e) {
  const t = e.parentData.config;
  e.node.draggable = !0, e.nodeData.abortControllers.mainNode = tp(e.node, {
    dragstart: jt(t.handleDragstart),
    dragover: jt(t.handleDragoverNode),
    dragend: jt(t.handleEnd),
    touchstart: jt(t.handleTouchstart),
    touchmove: jt(t.handleTouchmove),
    touchend: jt(t.handleEnd),
    touchOverNode: t.handleTouchOverNode
  }), t.reapplyDragClasses(e.node, e.parentData), e.parentData.config.plugins?.forEach((r) => {
    r(e.parent)?.setupNode?.(e);
  });
}
function dp(e) {
  ze.set(e.node, e.nodeData), e.parentData.config.plugins?.forEach((t) => {
    t(e.parent)?.setupNodeRemap?.(e);
  });
}
function mg(e, t) {
  if (!N)
    return;
  const r = "touchedNode" in N ? t.config.touchDropZoneClass : t.config.dropZoneClass;
  N.draggedNode.el === e && Re([e], r, !0);
}
function hg(e) {
  e.parentData.config.plugins?.forEach((t) => {
    t(e.parent)?.tearDownNodeRemap?.(e);
  });
}
function gg(e) {
  e.parentData.config.plugins?.forEach((t) => {
    t(e.parent)?.tearDownNode?.(e);
  }), e.node.draggable = !1, e.nodeData?.abortControllers?.mainNode && e.nodeData?.abortControllers?.mainNode.abort();
}
function Nn(e) {
  N && (fp(e, N), op());
}
function fp(e, t) {
  document.removeEventListener("contextmenu", hp), "longTouchTimeout" in t && t.longTouchTimeout && clearTimeout(t.longTouchTimeout);
  const r = Fe.get(t.initialParent.el)?.config, o = "touchedNode" in t ? r?.touchDropZoneClass : r?.dropZoneClass;
  t.originalZIndex !== void 0 && (t.draggedNode.el.style.zIndex = t.originalZIndex), Re(
    t.draggedNodes.map((s) => s.el),
    o,
    !0
  ), pr(
    t.draggedNodes.map((s) => s.el),
    o
  ), r?.longTouchClass && pr(
    t.draggedNodes.map((s) => s.el),
    t.initialParent.data?.config?.longTouchClass
  ), "touchedNode" in t && t.touchedNode?.remove();
}
function Bn(e) {
  e.e instanceof TouchEvent && ug({
    e: e.e,
    targetData: e.targetData
  });
}
function mp(e) {
  e.e.stopPropagation();
  const t = e.targetData.node.el.cloneNode(!0), r = e.targetData.node.el.getBoundingClientRect();
  return og(sp(ap(e)), {
    coordinates: {
      x: e.e.touches[0].clientX,
      y: e.e.touches[0].clientY
    },
    scrollParent: ep(e.targetData.node.el),
    touchStartLeft: e.e.touches[0].clientX - r.left,
    touchStartTop: e.e.touches[0].clientY - r.top,
    touchedNode: t,
    touchMoving: !1
  });
}
function hp(e) {
  e.preventDefault();
}
function gp(e, t) {
  t.touchedNodeDisplay = t.touchedNode.style.display;
  const r = e.targetData.node.el.getBoundingClientRect();
  t.touchedNode.style.cssText = `
            width: ${r.width}px;
            position: fixed;
            pointer-events: none;
            top: -9999px;
            z-index: 999999;
            display: none;
          `, document.body.append(t.touchedNode), Hs(e.targetData.node.el, t.touchedNode), t.touchedNode.style.display = "none", document.addEventListener("contextmenu", hp);
}
function vp(e, t) {
  const r = e.targetData.parent.data.config;
  r.longTouch && (t.longTouchTimeout = setTimeout(() => {
    t && (t.longTouch = !0, r.longTouchClass && e.e.cancelable && Re(
      t.draggedNodes.map((n) => n.el),
      r.longTouchClass
    ), e.e.preventDefault());
  }, r.longTouchTimeout || 200));
}
function $p(e) {
  !N || !("touchedNode" in N) || Sg(e, N);
}
function vg(e, t) {
  t.longTouchClass && pr(
    e.draggedNodes.map((r) => r.el),
    t?.longTouchClass
  ), t.touchDraggingClass && Re([e.touchedNode], t.touchDraggingClass), t.touchDropZoneClass && Re(
    e.draggedNodes.map((r) => r.el),
    t.touchDropZoneClass
  );
}
function $g(e) {
  if (!e || !e.scrollParent)
    return;
  const { x: t, y: r, width: n, height: o } = e.scrollParent.getBoundingClientRect(), {
    x: s,
    y: a,
    scrollOutside: i
  } = e.lastParent.data.config.scrollBehavior;
  return {
    state: e,
    xThresh: s,
    yThresh: a,
    scrollOutside: i,
    scrollParent: e.scrollParent,
    x: t,
    y: r,
    width: n,
    height: o
  };
}
function yg(e) {
  const t = $g(N);
  if (t)
    switch (e) {
      case "down":
        return _g(t.state, t);
      case "up":
        return wg(t.state, t);
      case "right":
        return bg(t.state, t);
      case "left":
        return xg(t.state, t);
    }
}
function bg(e, t) {
  const r = t.scrollParent.clientWidth + t.x - e.coordinates.x;
  if (!(!t.scrollOutside && r < 0) && r < (1 - t.xThresh) * t.scrollParent.clientWidth && !(t.scrollParent.scrollLeft + t.scrollParent.clientWidth >= t.scrollParent.scrollWidth))
    return e;
}
function xg(e, t) {
  const r = t.scrollParent.clientWidth + t.x - e.coordinates.x;
  if (!(!t.scrollOutside && r > t.scrollParent.clientWidth) && r > t.xThresh * t.scrollParent.clientWidth && t.scrollParent.scrollLeft !== 0)
    return e;
}
function wg(e, t) {
  const r = t.scrollParent.clientHeight + t.y - e.coordinates.y;
  if (!(!t.scrollOutside && r > t.scrollParent.clientHeight) && r > t.yThresh * t.scrollParent.clientHeight && t.scrollParent.scrollTop !== 0)
    return e;
}
function _g(e, t) {
  const r = t.scrollParent.clientHeight + t.y - e.coordinates.y;
  if (!(!t.scrollOutside && r < 0) && r < (1 - t.yThresh) * t.scrollParent.clientHeight && !(t.scrollParent.scrollTop + t.scrollParent.clientHeight >= t.scrollParent.scrollHeight))
    return e;
}
function kg(e, t) {
  t.touchMoving = !0, t.touchedNode.style.display = t.touchedNodeDisplay || "";
  const { x: r, y: n } = Bt(e.e);
  t.coordinates.y = n, t.coordinates.x = r;
  const o = t.touchStartLeft ?? 0, s = t.touchStartTop ?? 0;
  t.touchedNode.style.left = `${r - o}px`, t.touchedNode.style.top = `${n - s}px`, vg(t, e.targetData.parent.data.config);
}
function Sg(e, t) {
  if (e.targetData.parent.data.config.longTouch && !t.longTouch) {
    clearTimeout(t.longTouchTimeout);
    return;
  }
  e.e.cancelable && e.e.preventDefault(), kg(e, t), oo();
  const n = Gh(e);
  if (!n)
    return;
  const o = {
    e: e.e,
    targetData: n
  };
  "node" in n ? n.node.el.dispatchEvent(
    new CustomEvent("touchOverNode", {
      detail: o
    })
  ) : n.parent.el.dispatchEvent(
    new CustomEvent("touchOverParent", {
      detail: o
    })
  );
}
function oo() {
  for (const e of Object.keys(Ka)) {
    const [t, r] = Ka[e];
    yp(e, t, r);
  }
}
function yp(e, t, r) {
  const n = yg(e);
  n && (n.scrollParent.scrollBy(t, r), setTimeout(
    () => {
      yp(e, t, r);
    },
    "touchedNode" in n ? 10 : 100
  ));
}
function Dg(e) {
  if (!N)
    return;
  const { x: t, y: r } = Bt(e.e);
  N.coordinates.y = r, N.coordinates.x = t, oo(), Tg(e, N);
}
function Cg(e) {
  if (!N)
    return;
  const { x: t, y: r } = Bt(e.e);
  N.coordinates.y = r, N.coordinates.x = t, oo(), so(e, N);
}
function Lg(e) {
  N && so(e.detail, N);
}
function Ag(e, t) {
  if (e.targetData.parent.el === t.lastParent.el)
    return !1;
  const r = e.targetData.parent.data.config;
  if (r.dropZone === !1)
    return !1;
  const n = t.initialParent.data.config;
  return r.accepts ? r.accepts(
    e.targetData.parent,
    t.initialParent,
    t.lastParent,
    t
  ) : !(!r.group || r.group !== n.group);
}
function Tg(e, t) {
  e.e.preventDefault(), e.e.stopPropagation(), e.targetData.parent.el === t.lastParent?.el ? bp(e, t) : so(e, t);
}
function Ig(e, t, r, n) {
  if (t.remapJustFinished)
    return t.remapJustFinished = !1, t.lastTargetValue = e.targetData.node.data.value, !1;
  if (t.lastTargetValue === e.targetData.node.data.value || t.draggedNodes.map((c) => c.el).includes(e.targetData.node.el) || t.preventEnter || t.swappedNodeValue === e.targetData.node.data.value || e.targetData.parent.el !== t.lastParent?.el || e.targetData.parent.data.config.sortable === !1)
    return !1;
  const o = e.targetData.node.el.getBoundingClientRect(), s = t.draggedNode.el.getBoundingClientRect(), a = o.y - s.y, i = o.x - s.x;
  let l;
  const p = t.draggedNode.data.index > e.targetData.node.data.index ? [e.targetData.node.data.index, t.draggedNode.data.index] : [t.draggedNode.data.index, e.targetData.node.data.index];
  t.targetIndex = e.targetData.node.data.index, t.affectedNodes = e.targetData.parent.data.enabledNodes.filter(
    (c) => p[0] <= c.data.index && c.data.index <= p[1] && c.el !== t.draggedNode.el
  ), Math.abs(a) > Math.abs(i) ? l = a > 0 ? "above" : "below" : l = i > 0 ? "left" : "right";
  const u = t.lastParent.data.config.threshold;
  switch (l) {
    case "left":
      if (r > o.x + o.width * u.horizontal)
        return t.incomingDirection = "left", !0;
      break;
    case "right":
      if (r < o.x + o.width * (1 - u.horizontal))
        return t.incomingDirection = "right", !0;
      break;
    case "above":
      if (n > o.y + o.height * u.vertical)
        return t.incomingDirection = "above", !0;
      break;
    case "below":
      if (n < o.y + o.height * (1 - u.vertical))
        return t.incomingDirection = "below", !0;
      break;
  }
  return !1;
}
function bp(e, t) {
  const { x: r, y: n } = Bt(e.e);
  Ig(e, t, r, n) && (t.swappedNodeValue = e.targetData.node.data.value, t.preventEnter = !0, e.targetData.parent.data.config.performSort(t, e));
}
function jt(e) {
  function t(r) {
    const n = ze.get(r), o = r.parentNode || N?.lastParent?.el;
    if (!n)
      return;
    const s = Fe.get(o);
    if (s)
      return {
        node: {
          el: r,
          data: n
        },
        parent: {
          el: o,
          data: s
        }
      };
  }
  return (r) => {
    const n = t(r.currentTarget);
    if (n)
      return e({
        e: r,
        targetData: n
      });
  };
}
function Eg(e, t) {
  const r = ip(e), n = ls(
    e.lastParent.el,
    e.lastParent.data
  ).filter((i) => !r.includes(i)), o = ls(
    t.targetData.parent.el,
    t.targetData.parent.data
  ), s = e.initialParent.el === t.targetData.parent.el && t.targetData.parent.data.config.sortable === !1;
  let a;
  "node" in t.targetData ? (s ? a = e.initialIndex : t.targetData.parent.data.config.sortable === !1 ? a = t.targetData.parent.data.enabledNodes.length : a = t.targetData.node.data.index, o.splice(a, 0, ...r)) : (a = s ? e.initialIndex : t.targetData.parent.data.enabledNodes.length, o.splice(a, 0, ...r)), ps(e.lastParent.el, e.lastParent.data, n), ps(
    t.targetData.parent.el,
    t.targetData.parent.data,
    o
  );
}
function so(e, t) {
  Ag(e, t) && (e.targetData.parent.data.config.performTransfer(t, e), t.lastParent = e.targetData.parent);
}
function Mg(e) {
  function t(r) {
    const n = Fe.get(r);
    if (n)
      return {
        parent: {
          el: r,
          data: n
        }
      };
  }
  return (r) => {
    const n = t(r.currentTarget);
    if (n)
      return e({
        e: r,
        targetData: n
      });
  };
}
var xp = /^([0-9]{4})-([0-1][0-9])(?:-([0-3][0-9]))?(?:[T ]?([0-2][0-9])(?::([0-5][0-9]))?(?::([0-5][0-9]))?)?(?:\.[0-9]+)?(Z|(?:\+|\-)[0-9]{2}:?[0-9]{2}(?::?[0-9]{2})?)?$/;
function Og(e) {
  const t = e.match(xp);
  if (t) {
    const r = Number(t[2]);
    if (r < 1 || r > 12) return !1;
    if (typeof t[3] !== void 0) {
      const n = Number(t[3]);
      if (n < 1 || n > 31) return !1;
    }
    if (typeof t[4] !== void 0) {
      const n = Number(t[4]);
      if (n < 0 || n > 23) return !1;
    }
    return !0;
  }
  return !1;
}
function Pg(e) {
  const t = e.match(xp);
  return t && typeof t[4] > "u" ? e += "T00:00:00" : e;
}
function ue(e) {
  if (e || (e = /* @__PURE__ */ new Date()), e instanceof Date)
    return new Date(e);
  if (e = e.trim(), Og(e))
    return new Date(Pg(e));
  throw new Error(`Non ISO 8601 compliant date (${e}).`);
}
function sr(e, t = 1) {
  const r = ue(e);
  return r.setDate(r.getDate() + t), r;
}
function Rn(e) {
  const t = ue(e);
  return t.setDate(1), t.setMonth(t.getMonth() + 1), t.setDate(0), t;
}
function Qr(e) {
  return Rn(e).getDate();
}
function vt(e, t = 1, r = !1) {
  const n = ue(e), o = n.getDate();
  if (r || n.setDate(1), n.setMonth(n.getMonth() + t), !r) {
    const s = Qr(n);
    n.setDate(s < o ? s : o);
  }
  return n;
}
function zt(e, t = 1, r = !1) {
  const n = ue(e), o = n.getDate();
  if (r || n.setDate(1), n.setFullYear(n.getFullYear() + t), !r) {
    const s = Qr(n);
    n.setDate(s < o ? s : o);
  }
  return n;
}
var Ws = "1999-03-04T02:05:01.000Z", ko = /* @__PURE__ */ new Map(), Ks = [
  ["YYYY", { year: "numeric" }],
  ["YY", { year: "2-digit" }],
  ["MMMM", { month: "long" }],
  ["MMM", { month: "short" }],
  ["MM", { month: "2-digit" }],
  ["M", { month: "numeric" }],
  ["DD", { day: "2-digit" }],
  ["D", { day: "numeric" }],
  ["dddd", { weekday: "long" }],
  ["ddd", { weekday: "short" }],
  ["d", { weekday: "narrow" }],
  ["mm", { minute: "2-digit" }],
  ["m", { minute: "numeric" }],
  ["ss", { second: "2-digit" }],
  ["s", { second: "numeric" }],
  ["ZZ", { timeZoneName: "long" }],
  ["Z", { timeZoneName: "short" }]
], js = [
  ["HH", { hour: "2-digit" }],
  ["H", { hour: "numeric" }]
], Ys = [
  ["hh", { hour: "2-digit" }],
  ["h", { hour: "numeric" }],
  ["a", { dayPeriod: "narrow" }],
  ["A", { dayPeriod: "narrow" }]
], Zs = [
  ["SSS", { fractionalSecond: "3-digit" }]
], Hn = {
  DD: 2,
  HH: 2,
  MM: 2,
  YY: 2,
  YYYY: 4,
  hh: 2,
  mm: 2,
  ss: 2
};
function Us(e) {
  if (/^[+-]\d{2}:\d{2}:\d{2}/.test(e))
    return 9;
  if (/^[+-]\d{6}/.test(e))
    return 8;
  if (/^[+-]\d{2}:\d{2}/.test(e))
    return 6;
  if (/^[+-]\d{4}/.test(e))
    return 5;
  throw new Error("Invalid offset format");
}
var Fg = ["MMMM", "MMM", "dddd", "ddd"], ce = /* @__PURE__ */ new Map(
  /* @__PURE__ */ [...Ks, ...js, ...Ys, ...Zs].map((e) => [e[0], e])
), ja = /* @__PURE__ */ new Map(), wp = ["full", "long", "medium", "short"], Oe = (e) => String(e).padStart(2, "0"), an = (e) => String(e).padStart(2, "0");
function at(e) {
  return e.type === "literal" && (e.value = e.value.normalize("NFKC")), e;
}
function Vg(e, t, r, n = !1, o = null) {
  const s = Ng(e, t, r, n), a = ue(e);
  function i({ partName: l, partValue: p, token: u }) {
    if (l === "literal") return p;
    const c = s[l];
    if (l === "hour" && u === "H")
      return c.replace(/^0/, "") || "0";
    if (["mm", "ss", "MM"].includes(u) && c.length === 1)
      return `0${c}`;
    if (l === "dayPeriod") {
      const f = Qt(a.getUTCHours() < 12 ? "am" : "pm", r);
      return u === "A" ? f.toUpperCase() : f.toLowerCase();
    }
    return l === "fractionalSecond" ? String(a.getUTCMilliseconds()).padStart(3, "0") : l === "timeZoneName" ? o ?? Bg(-1 * a.getTimezoneOffset(), u) : c;
  }
  return t.map((l) => ({
    ...l,
    value: i(l)
  }));
}
function Ng(e, t, r, n = !1) {
  const o = ue(e), s = t.filter((u) => u.hour12), a = t.filter((u) => !u.hour12), i = [], l = [];
  function p(u, c = !1) {
    const f = `${r}-u-hc-${c ? "h12" : "h23"}`;
    if (i.push(
      ...new Intl.DateTimeFormat(
        f,
        u.reduce(
          (d, $) => $.partName === "literal" ? d : (n && Fg.includes($.token) && l.push($), Object.assign(d, $.option)),
          { timeZone: "UTC" }
        )
      ).formatToParts(o).map(at)
    ), n && l.length)
      for (const d of l) {
        let $ = [];
        switch (d.token) {
          case "MMMM":
            $ = new Intl.DateTimeFormat(f, {
              dateStyle: "long",
              timeZone: "UTC"
            }).formatToParts(o).map(at);
            break;
          case "MMM":
            $ = new Intl.DateTimeFormat(f, {
              dateStyle: "medium",
              timeZone: "UTC"
            }).formatToParts(o).map(at);
            break;
        }
        const h = $.find((m) => m.type === d.partName), y = i.findIndex((m) => m.type === d.partName);
        h && y > -1 && (i[y] = h);
      }
  }
  return s.length && p(s, !0), a.length && p(a), i.reduce((u, c) => (u[c.type] = c.value, u), {});
}
function _p(e, t = "Z") {
  const r = e < 0 ? "-" : "+", n = Math.abs(e), o = String(Math.floor(n / 3600)).padStart(2, "0"), s = String(Math.floor(n % 3600 / 60)).padStart(2, "0"), a = Math.round(n % 60);
  return t === "ZZ" ? a === 0 ? `${r}${o}${s}` : `${r}${o}${s}${String(a).padStart(2, "0")}` : a === 0 ? `${r}${o}:${s}` : `${r}${o}:${s}:${String(a).padStart(2, "0")}`;
}
function Bg(e, t = "Z") {
  return _p(e * 60, t);
}
function kp(e, t) {
  Sp(e, t);
  const r = e.match(/([+-])([0-3][0-9]):?([0-5][0-9])(?::?([0-5][0-9]))?/), [n, o, s, a, i = "0"] = r, l = Number(s) * 3600 + Number(a) * 60 + Number(i);
  return o === "+" ? l : -l;
}
function Sp(e, t = "Z") {
  if (!((n) => {
    switch (n) {
      case "Z":
        return /^([+-])[0-3][0-9]:[0-5][0-9](?::[0-5][0-9])?$/.test(e);
      case "ZZ":
        return /^([+-])[0-3][0-9][0-5][0-9](?:[0-5][0-9])?$/.test(e);
    }
  })(t)) throw new Error(`Invalid offset: ${e}`);
  return e;
}
function Rg(e) {
  return Ks.concat(js).concat(Ys).concat(Zs).sort((t, r) => t[0].length > r[0].length ? 1 : -1).reduce((t, r) => t.replace(r[0], `\\${r[0]}`), e);
}
function Hg(e) {
  return ["numeric", "2-digit"].includes(e.partValue);
}
function Wg(e) {
  let t;
  for (const r of e) {
    if (r.partName === "literal" && !isNaN(parseFloat(r.partValue)))
      throw new Error(`Numbers in format (${r.partValue}).`);
    if (t && t.partName !== "literal" && r.partName !== "literal" && !(t.token in Hn) && !(r.token in Hn) && !(Hg(t) && r.token.toLowerCase() === "a") && t.token !== "SSS")
      throw new Error(`Illegal adjacent tokens (${t.token}, ${r.token})`);
    t = r;
  }
  return e;
}
function Kg(e) {
  return typeof e == "string" ? e.includes("ZZ") ? "ZZ" : "Z" : "time" in e && e.time === "full" ? "Z" : "ZZ";
}
function Qt(e, t) {
  const r = ja.get(t);
  if (r && r[e]) return r[e];
  const n = new Date(Ws);
  n.setUTCHours(e === "am" ? 5 : 20);
  const s = new Intl.DateTimeFormat(t, {
    timeStyle: "full",
    timeZone: "UTC",
    hour12: !0
  }).formatToParts(n).map(at).find((a) => a.type === "dayPeriod");
  if (s) {
    const a = r || {};
    return ja.set(
      t,
      Object.assign(a, { [e]: s.value })
    ), s.value;
  }
  return e;
}
function Dp(e, t = "+00:00") {
  const r = ue(e), n = Us(t), s = kp(t, n === 5 || n === 8 ? "ZZ" : "Z");
  return new Date(r.getTime() + s * 1e3);
}
function Cp() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function Ya(e, t) {
  const r = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: t,
    hourCycle: "h23"
  }).formatToParts(e).map(at), n = {};
  return r.forEach((o) => {
    n[o.type] = o.value;
  }), /* @__PURE__ */ new Date(
    `${n.year}-${n.month}-${n.day}T${n.hour}:${n.minute}:${n.second}Z`
  );
}
function jr(e, t = "UTC", r = "device", n = "Z") {
  var o;
  r = r === "device" ? (o = Cp()) != null ? o : "utc" : r;
  const s = ue(e), a = Ya(s, t), i = Ya(s, r), l = Math.round((i.getTime() - a.getTime()) / 1e3);
  return _p(l, n);
}
function jg(e) {
  const t = ue(e);
  return Math.round(
    (new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5
  );
}
function Yg(e) {
  const t = ue(e);
  return t.setHours(0, 0, 0, 0), t;
}
function ur(e, t) {
  if (wp.includes(e) || typeof e == "object")
    return Zg(e, t);
  let r = e, n = 0;
  const o = (u) => {
    if (u[2] || (u[2] = new RegExp(`(.)?(${u[0]})`, "g")), u[2].test(r)) {
      let c = 0;
      return r = r.replace(u[2], (f, d, $) => d === "\\" ? $ : `${typeof d == "string" ? d : ""}{!${c++ ? n : n++}!}`), !!c;
    }
    return !1;
  };
  function s(u) {
    const c = u.map((d) => d.partName), f = new Set(c);
    if (c.length > f.size)
      throw new Error("Cannot reuse format tokens.");
    return u;
  }
  function a(u, [c, f, d]) {
    const $ = Object.keys(f)[0], h = f[$];
    return {
      option: f,
      partName: $,
      partValue: h,
      token: c,
      pattern: d,
      hour12: u
    };
  }
  const i = Ks.filter(o).concat(js.filter(o)).concat(Zs.filter(o)).map(a.bind(null, !1)), l = s(
    i.concat(
      Ys.filter(o).map(a.bind(null, !0))
    )
  ), p = /^\{!(\d+)!\}$/;
  return r.split(/(\{!\d+!\})/).map((u) => {
    const c = u.match(p);
    return c ? l[Number(c[1])] : {
      option: { literal: u },
      partName: "literal",
      partValue: u,
      token: u,
      pattern: new RegExp(""),
      hour12: !1
    };
  }).filter((u) => !(u.partName === "literal" && u.partValue === ""));
}
function Zg(e, t) {
  const r = {
    timeZone: "UTC"
  };
  typeof e == "string" ? r.dateStyle = e : ("date" in e && (r.dateStyle = e.date), "time" in e && (r.timeStyle = e.time));
  const n = new Intl.DateTimeFormat(t, r), o = n.formatToParts(new Date(Ws)).map(at), a = n.formatToParts(/* @__PURE__ */ new Date("1999-04-05T23:05:01.000Z")).map(at).find((l) => l.type === "hour"), i = a && a.value === "23" ? 24 : 12;
  return o.map((l) => {
    const p = l.type, u = Ug(
      l.type,
      l.value,
      t,
      l.type === "hour" ? i : void 0,
      r
    );
    if (u === void 0) return;
    const c = u[1][p];
    if (c)
      return u[2] || (u[2] = new RegExp(`${u[0]}`, "g")), {
        option: { [p]: c },
        partName: p,
        partValue: c,
        token: u[0],
        pattern: u[2],
        hour12: i === 12
      };
  }).filter((l) => !!l);
}
function Ug(e, t, r, n, o) {
  const s = t.length, a = !isNaN(Number(t));
  let i;
  switch (e) {
    case "year":
      return s === 2 ? ce.get("YY") : ce.get("YYYY");
    case "month":
      return a ? s === 1 ? ce.get("M") : ce.get("MM") : (i = Za(r, e, t), i === "long" ? ce.get("MMMM") : ce.get("MMM"));
    case "day":
      return s === 1 ? ce.get("D") : ce.get("DD");
    case "weekday":
      switch (i = Za(r, e, t), i) {
        case "narrow":
          return ce.get("d");
        case "short":
          return ce.get("ddd");
        default:
          return ce.get("dddd");
      }
    case "hour":
      return n === 12 ? s === 1 ? ce.get("h") : ce.get("hh") : s === 1 ? ce.get("H") : ce.get("HH");
    case "minute":
      return s === 1 ? ce.get("m") : ce.get("mm");
    case "second":
      return s === 1 ? ce.get("s") : ce.get("ss");
    case "dayPeriod":
      return /^[A-Z]+$/u.test(t) ? ce.get("A") : ce.get("a");
    case "literal":
      return [t, { literal: t }, new RegExp("")];
    case "timeZoneName":
      return o.timeStyle === "full" ? ce.get("Z") : ce.get("ZZ");
    default:
      return;
  }
}
function Za(e, t, r) {
  if (!ko.has(e)) {
    const o = new Date(Ws), s = [3, 8, 9, 7, 6, 4, 3], a = ["weekday", "month", "dayPeriod"], i = ["long", "short", "narrow"], l = {};
    for (let p = 0; p < 12; p++) {
      o.setMonth(0 + p), p in s && o.setDate(s[p]), o.setUTCHours(8 + p);
      for (const u of i) {
        const c = new Intl.DateTimeFormat(
          e,
          a.reduce(
            (f, d) => Object.assign(f, { [d]: u }),
            { hour12: !0, timeZone: "UTC" }
          )
        ).formatToParts(o).map(at);
        if (u === "long" || u === "short") {
          const d = new Intl.DateTimeFormat(e, {
            dateStyle: u === "short" ? "medium" : "long",
            timeZone: "UTC"
          }).formatToParts(o).map(at).find(
            (h) => h.type === "month"
          ), $ = c.findIndex((h) => h.type === "month");
          $ > -1 && d && (c[$] = d);
        }
        c.forEach((f) => {
          if (f.type === "literal") return;
          const d = f.type;
          l[d] = Object.assign(l[d] || {}, {
            [f.value]: u
          });
        });
      }
    }
    ko.set(e, l);
  }
  const n = ko.get(e);
  return n ? n[t][r] : void 0;
}
function Gt(e, t = "+00:00") {
  const r = t.slice(0, 1) === "+";
  return Dp(
    e,
    t.replace(r ? "+" : "-", r ? "-" : "+")
  );
}
function qg() {
  return Intl.DateTimeFormat().resolvedOptions().locale;
}
function Pe(e, t = "long", r = "device", n = !1, o) {
  let s, a;
  return typeof e == "object" && !(e instanceof Date) && ({
    date: e,
    format: t,
    locale: r,
    genitive: n,
    partFilter: o,
    tz: s
  } = e), t === "ISO8601" ? ue(e).toISOString() : (s && (a = jr(e, "utc", s, Kg(t))), s ?? (s = Cp()), s?.toLowerCase() !== "utc" && (e = Gt(
    e,
    jr(e, s, "utc")
  )), (!r || r === "device") && (r = qg()), Vg(
    e,
    ur(t, r).filter(o ?? (() => !0)),
    r,
    n,
    a
  ).map((i) => i.value).join(""));
}
function qs(e, t = "en", r = !1, n = () => !0) {
  return ur(e, t).filter(n).reduce(
    (o, s) => o += r && s.partName === "literal" ? Rg(s.token) : s.token,
    ""
  ).normalize("NFKC");
}
function zg(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear(), r = t % 100, n = Math.floor(t / 100), o = Number(e);
  return (n + (o > r + 20 ? -1 : 0)) * 100 + o;
}
function Ua(e) {
  const t = ue(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Gg(e) {
  const t = ue(e);
  return (new Date(t.getFullYear() + 1, 0, 0).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5;
}
function wr(e, t, r = 7) {
  let n, o;
  const s = ue(e);
  switch (r) {
    case "month":
      o = s.getDate(), n = Qr(s) - s.getDate();
      break;
    case "week":
      o = s.getDay() + 1, n = 6 - s.getDay();
      break;
    case "year":
      const a = Gg(s), i = jg(s);
      o = i, n = a - i;
      break;
    default:
      n = o = r;
  }
  for (let a = 0; a <= n || a < o; a++) {
    if (a <= n) {
      const i = sr(s, a);
      if (t(i)) return i;
    }
    if (a && a <= o) {
      const i = sr(s, -a);
      if (t(i)) return i;
    }
  }
  return null;
}
function ao(e, t = "en", r = !1) {
  const n = (o, s) => Array(o).fill("").map((a, i) => `${s(i)}`);
  if (e === "M") return n(12, (o) => o + 1);
  if (e === "MM")
    return n(12, (o) => {
      const s = o + 1;
      return s < 10 ? `0${s}` : s;
    });
  if (e.startsWith("M"))
    return ao("MM").map(
      (o) => Pe(`2000-${o}-05`, e, t, r)
    );
  if (e.startsWith("d"))
    return n(7, (o) => `0${o + 2}`).map(
      (o) => Pe(`2022-10-${o}`, e, t)
    );
  if (e === "a")
    return [Qt("am", t).toLowerCase(), Qt("pm", t).toLowerCase()];
  if (e === "A")
    return [Qt("am", t).toUpperCase(), Qt("pm", t).toUpperCase()];
  if (e.startsWith("Y")) {
    const o = (/* @__PURE__ */ new Date()).getFullYear();
    return n(120, (s) => s + 1).reduce(
      (s, a) => (a !== "120" && s.push(Pe(`${o + Number(a)}-06-06`, e, t)), s.unshift(Pe(`${o - Number(a)}-06-06`, e, t)), s),
      [Pe(`${o}-06-06`, e, t)]
    );
  }
  return e.startsWith("D") ? n(31, (o) => `${e === "DD" && o < 9 ? "0" : ""}${o + 1}`) : e.startsWith("H") ? n(24, (o) => `${e === "HH" && o < 10 ? "0" : ""}${o}`) : e.startsWith("h") ? n(12, (o) => `${e === "hh" && o < 9 ? "0" : ""}${o + 1}`) : e.startsWith("m") || e.startsWith("s") ? n(60, (o) => `${e.length > 1 && o < 10 ? "0" : ""}${o}`) : [];
}
function At(e, t = "ISO8601", r = "device") {
  let n = () => !0, o, s = "backward";
  if (typeof e == "object" ? {
    date: o,
    format: t = "ISO8601",
    locale: r = "device",
    dateOverflow: s = "backward",
    partFilter: n = () => !0
  } = e : o = e, !o) throw new Error("parse() requires a date string.");
  const a = () => {
    throw new Error(
      `Date (${o}) does not match format (${qs(t, r)})`
    );
  };
  if (t === "ISO8601") return ue(o);
  const i = wp.includes(t) || typeof t == "object", l = Wg(ur(t, r).filter(n));
  if (!l.length) throw new Error("parse() requires a pattern.");
  let p;
  try {
    p = Lp(o, l);
  } catch {
    return a();
  }
  const u = /* @__PURE__ */ new Date(), c = /* @__PURE__ */ new Map([
    ["YYYY", u.getFullYear()],
    ["MM", u.getMonth() + 1],
    ["DD", u.getDate()],
    ["HH", 0],
    ["mm", 0],
    ["ss", 0],
    ["SSS", 0]
  ]);
  let f = null, d = "";
  p.forEach((x) => {
    if (x.partName === "literal") return;
    if (x.token === x.value) return a();
    const b = Number(x.value);
    if (x.token === "SSS") {
      const v = x.value.padEnd(3, "0").slice(0, 3);
      c.set("SSS", Number(v));
    } else if (c.has(x.token))
      c.set(x.token, b);
    else if (x.token === "YY")
      c.set("YYYY", zg(x.value));
    else {
      const v = x.token;
      if (v.startsWith("d"))
        return;
      if (v === "D")
        c.set("DD", b);
      else if (v === "H" || v.startsWith("h"))
        c.set("HH", b);
      else if (v === "M")
        c.set("MM", b);
      else if (v === "a" || v === "A")
        f = x.value.toLowerCase() === Qt("am", r).toLowerCase();
      else if (v === "Z" || v === "ZZ")
        d = Sp(x.value, v);
      else {
        const V = ao(v, r, i).indexOf(x.value);
        if (V !== -1)
          switch (v) {
            case "MMM":
            case "MMMM":
              c.set("MM", V + 1);
              break;
          }
      }
    }
  });
  let $ = c.get("HH") || 0;
  f === !1 ? ($ += $ === 12 ? 0 : 12, c.set("HH", $ === 24 ? 0 : $)) : f === !0 && $ === 12 && c.set("HH", 0), c.set("MM", (c.get("MM") || 1) - 1);
  let [h, y, m, S, g, _, C] = Array.from(c.values());
  const k = Qr(/* @__PURE__ */ new Date(`${an(h)}-${Oe(y + 1)}-10`));
  if (k < m && s === "throw")
    throw new Error(`Invalid date ${an(h)}-${Oe(y + 1)}-${Oe(m)}`);
  m = s === "backward" ? Math.min(m, k) : m;
  const D = String(C).padStart(3, "0");
  if (d) {
    const x = `${an(h)}-${Oe(y + 1)}-${Oe(m)}T${Oe(S)}:${Oe(g)}:${Oe(_)}.${D}Z`, b = new Date(x);
    if (!isFinite(+b)) return a();
    const v = Us(d), V = kp(d, v === 5 || v === 8 ? "ZZ" : "Z");
    return new Date(b.getTime() - V * 1e3);
  }
  const w = `${an(h)}-${Oe(y + 1)}-${Oe(m)}T${Oe(S)}:${Oe(g)}:${Oe(_)}.${D}`, L = new Date(w);
  return isFinite(+L) ? L : a();
}
function Lp(e, t) {
  let r = 0;
  const n = (i) => [
    i[r++],
    i[r]
  ];
  let o = 0;
  const s = [];
  let a;
  do {
    const [i, l] = n(t);
    a = l;
    let p = 1;
    if (i.partName === "literal")
      p = i.partValue.length;
    else if (i.partName === "timeZoneName")
      p = Us(e.substring(o));
    else if (i.token === "SSS") {
      let u = o;
      for (; u < e.length && /\d/.test(e.charAt(u)); )
        u++;
      p = u - o;
    } else if (i.token in Hn)
      p = Hn[i.token];
    else if (l)
      if (l.partName === "literal") {
        if (p = e.indexOf(l.partValue, o) - o, p < 0) throw new Error();
      } else if (l.partName === "dayPeriod") {
        for (let u = 1; u <= 4; u++)
          if (isNaN(Number(e.charAt(o + u)))) {
            p = u;
            break;
          }
      } else {
        const u = e.substring(o).search(/\d/);
        u !== -1 && (p = o + u);
      }
    else
      p = e.length;
    s.push({ ...i, value: e.substring(o, o + p) }), o += p;
  } while (a);
  return s;
}
function Ap(e, t) {
  const r = ue(e), n = ue(t);
  return r.getDate() === n.getDate() && r.getMonth() === n.getMonth() && r.getFullYear() === n.getFullYear();
}
function Tp(e, t = 0) {
  const r = ue(e);
  let n = t - r.getDay();
  return n > 0 && (n = n - 7), r.setDate(r.getDate() + n), r.setHours(0, 0, 0, 0), r;
}
function Xg(e, t = 0) {
  const r = Tp(e, t);
  return r.setDate(r.getDate() + 6), r.setHours(23, 59, 59, 999), r;
}
function Jg(e, t) {
  const r = ue(e), n = ue(t);
  return +r < +n;
}
function Qg(e, t) {
  const r = ue(e), n = ue(t);
  return +r > +n;
}
const qa = [988, 24029, 396, 13078, 980], ev = 18806588, tv = 502357, rv = 16217489;
let Yt = 189024;
const nv = /^[0-9a-f]+$/, Te = typeof window < "u", us = yt(32, (e) => e).map(() => {
  Yt |= 0, Yt = Yt + 1831565813 | 0;
  let e = Yt ^ Yt >>> 15 | Yt;
  return e = e + e ^ e >>> 427 | e ^ e, ((e ^ e >>> 14) >>> 0) / 4294967296;
}), So = Te ? setTimeout : () => 0, Do = {}, nt = (e) => e.toString(32), za = (e) => `${nt(us[e]).substring(2)}.${nt(qa[e % (qa.length - 1)])}`, ln = {}, _r = {}, io = /* @__PURE__ */ new Set(["", null, void 0]);
function ov(e, t) {
  e in ln || (ln[e] = { timer: 0, inputs: /* @__PURE__ */ new Set() });
  const r = ln[e];
  clearTimeout(r.timer), r.inputs.add(t), r.timer = So(() => {
    Do[e] || (Do[e] = So(() => io.add(e), 2e3)), (function(n) {
      if (Te) {
        window.addEventListener([30548127325, 27022924, 34729821653783].map(nt).join("y"), (p) => {
          if (p.disposition === "report") return;
          const u = new URL(p.blockedURI).hostname;
          us.some((c, f) => za(f) === u) && (Ga(n), console.warn("[FormKit]: Enterprise license required for restrictive CSP."));
        });
        let o = 0;
        const s = nt(ev), a = "://", i = (/* @__PURE__ */ new Date()).getDate(), l = async () => {
          const p = Array.from(ln[n].inputs), u = p.filter((c) => !(_r[n] && _r[n].has(c))).join("");
          if (((c) => {
            clearTimeout(Do[c]);
          })(n), u) {
            o++;
            try {
              const c = await window[nt(rv)](`${s}${a}${za((i + o) % us.length)}/${(function(d) {
                const $ = Math.round(9 * Math.random());
                let h = "";
                for (let y = 0; y < d.length; y++) {
                  let m = d.charCodeAt(y);
                  m >= 48 && m <= 57 ? m = 48 + (m + $) % 58 % 48 : m >= 97 && m <= 122 && (m = 97 + (m + $) % 123 % 97), h += String.fromCharCode(m);
                }
                return `${$}${h}`;
              })(`${n.substring(3)}x${u}`)}`), f = await c.json();
              if (f[nt(tv)]) return Ga(n, f.schema);
              if (c.ok) return _r[n] || (_r[n] = /* @__PURE__ */ new Set()), void p.forEach((d) => _r[n].add(d));
            } catch {
            }
            o < 2 && So(l, 1e4 * Math.random());
          }
        };
        l();
      }
    })(e);
  }, 500);
}
function Ga(e, t) {
  io.add(e), (function(r, n) {
    Fr[r] && Fr[r].forEach((o) => o(n));
  })(e, t);
}
function Co(e, t, r) {
  if (ov(t, r), !t) throw new Error("FormKitNoKey");
  return io.has(t) ? null : e;
}
function yt(e, t) {
  return new Array(e).fill("").map((r, n) => t(n));
}
const Fr = {}, sv = () => ({ $el: "div", attrs: { key: "$id", "data-type": "$type", "data-family": "$family", "data-multiple": "$attrs.multiple || $multiple || undefined", "data-disabled": "$disabled || $disabledInternally || undefined", "data-empty": "$state.empty || undefined", "data-complete": "$state.complete || undefined", "data-invalid": "$state.invalid || undefined", "data-errors": "$state.errors || undefined", "data-submitted": "$state.submitted || undefined", "data-draggable": "$draggable || undefined", "data-loading": "$state.loading || undefined", "data-overscroll": '$behavior === "overscroll" && true || undefined', "data-id": "$id", "data-inline": "$inline || undefined", "data-is-max": "$max && $value && $value.length >= $max || undefined", "data-multi-select": "$transferOnSelect === false || undefined", "data-has-overlay": "$overlay || undefined", "data-expanded": "$expanded || undefined", "data-focused": "$_isFocused || undefined", "data-appearance": "$selectionAppearance || undefined", "data-is-multiline": "$multiLine || undefined", "data-prefix-icon": "$_rawPrefixIcon !== undefined || undefined", "data-suffix-icon": "$_rawSuffixIcon !== undefined || undefined", "data-prefix-icon-click": "$onPrefixIconClick !== undefined || undefined", "data-suffix-icon-click": "$onSuffixIconClick !== undefined || undefined" } }), av = () => ({ $el: "div", attrs: { id: '$id + "_inner"' } }), iv = () => ({ if: "$label", $el: "label", attrs: { for: "$id", id: "$id + '_label'" } }), lv = () => ({ $el: "ul", if: "$defaultMessagePlacement && $fns.length($messages)" }), pv = () => ({ $el: "li", for: ["message", "$messages"], attrs: { key: "$message.key", id: "$id + '-' + $message.key", "data-message-type": "$message.type" } }), uv = () => ({ $el: "div", if: "$help", attrs: { id: '$: "help-" + $id' } }), Xa = () => ({ $el: null }), wn = (e, t) => () => $e(e, t), cv = () => ({ $el: "span", if: '$part.type === "placeholder" && $part.value' }), dv = () => ({ $el: "span", if: '$part.type === "literal" && $part.value' }), fv = () => ({ $el: "span", if: '$part.type === "char" && $part.value' }), mv = () => ({ $el: "span", if: '$part.type === "enum" && $part.value' }), hv = () => ({ $el: "div", if: "$overlay", attrs: { id: '$id + "_overlay"', class: "$classes.overlay", style: "$_overlayStyles", onClick: "$_isPlaceholder && $handlers.overlayClick" } }), gv = () => ({ $el: "div", attrs: { id: '$id + "_overlay_inner"', class: "$classes.overlayInner", style: "$_overlayInnerStyles" } }), vv = () => ({ $el: null, for: ["part", "$_overlayParts"] });
function $v(e, t, r, n) {
  return (...o) => (s) => (a) => {
    const i = (function(l, p, u, c, f, d) {
      const $ = d[u], h = typeof c == "function" ? c() : { $el: c }, y = f.map((S) => typeof S == "string" ? S : S(p)(d));
      let m = y.length && h ? /* @__PURE__ */ It(h, { children: y }) : h;
      if (m = /* @__PURE__ */ It(m, $), typeof m == "object") {
        let S = m;
        if ((Ot(m) || Rr(m)) && (m.meta = { ...m.meta || {}, section: u, node: c }), Ot(m)) {
          const { $el: g, ..._ } = m;
          _.attrs ? "class" in _.attrs || "if" in _.attrs || (_.attrs = { class: `$classes.${u}`, ..._.attrs }) : _.attrs = { class: `$classes.${u}` }, S = pn(p, u, Object.defineProperty(_, "$el", { enumerable: !1, get: Co.bind(null, g, p, l) }));
        } else if (Rr(m)) {
          const { $cmp: g, ..._ } = m;
          S = pn(p, u, Object.defineProperty(_, "$cmp", { enumerable: !1, get: Co.bind(null, g, p, l) }));
        } else if ("$formkit" in m) {
          m.outerClass = `$classes.${u}`;
          const { $formkit: g, ..._ } = m;
          S = pn(p, u, Object.defineProperty(_, "$formkit", { enumerable: !1, get: Co.bind(null, g, p, l) }));
        }
        return S;
      }
      return pn(p, u, m);
    })(e, s, t, r, o, a);
    return n && Mt(i) && (i.memo = e + JSON.stringify(a)), n ? [i] : i;
  };
}
function pn(e, t, r) {
  const n = (o) => e ? o || `$slots.${t}` : null;
  return Object.defineProperties({}, { if: { enumerable: !1, get: n }, then: { enumerable: !1, get: n }, else: { enumerable: !1, get: n.bind(null, r) } });
}
function Ee(e) {
  return (t, r, n = !1) => $v(e, t, r, n);
}
function Me(e) {
  return { outer: e("outer", sv, !0), wrapper: e("wrapper", "div", !1), inner: e("inner", av, !1), icon: wn, label: e("label", iv, !1), prefix: e("prefix", Xa, !1), suffix: e("suffix", Xa, !1), help: e("help", uv, !1), messages: e("messages", lv, !1), message: e("message", pv, !1) };
}
function Ip(e) {
  return { overlayPlaceholder: e("overlayPlaceholder", cv), overlayLiteral: e("overlayLiteral", dv), overlayChar: e("overlayChar", fv), overlayEnum: e("overlayEnum", mv), overlay: e("overlay", hv), overlayParts: e("overlayParts", vv), overlayInner: e("overlayInner", gv) };
}
function R(e, t, r) {
  return (n) => (o) => {
    const s = typeof t == "string" ? t : t(n)(o);
    return r ? { if: e, then: s, else: typeof r == "string" ? r : r(n)(o) } : (/* @__PURE__ */ Wr(s) ? Object.assign(s.else, { if: e }) : Hr(s) && Object.assign(s, { if: e }), s);
  };
}
function zs(e) {
  const t = e("dropdownWrapper", () => ({ $el: "div", attrs: { id: '$id + "_popover"', popover: { if: "$usePopover", then: "$popover", else: void 0 }, "data-is-wrapper": !0, style: "$dropdownWrapperStyles", onScroll: "$handlers.scroll" } })), r = e("listbox", () => ({ $el: "ul", if: "$expanded || $setForceExpanded", attrs: { style: "$listboxStyles", id: '$id + "_listbox"', role: "listbox", "aria-activedescendant": "$activeDescendant", "aria-labelledby": '$id + "_label"' } })), n = e("listitem", () => ({ $el: "li", bind: "$option.attrs", attrs: { id: '$id + "_listitem_" + $index', "data-disabled": "$option.attrs.disabled", "data-value": "$option.value", key: "$option.value", onClick: "$handlers.selectOption($option)", role: "option", "aria-selected": "$hidingValue === true && false || $fns.isSelected($option)", "data-is-active": "$fns.isActive($option)", tabindex: "-1" } })), o = e("loadMore", () => ({ $el: "li", if: "$state.loading || $state.hasNextPage", attrs: { id: '$id + "_load_more"', key: "loadMore", role: "option", onClick: "$handlers.selectOption($loadMoreOption)", "aria-selected": "false", "data-is-active": "$fns.isActive($loadMoreOption)", tabindex: "-1" } })), s = e("loadMoreInner", "span"), a = e("emptyMessage", () => ({ $el: "li", if: "$showEmptyMessage && $state.loading !== true", attrs: { id: '$id + "_empty_message"', key: "$emptyMessage", role: "presentation" } })), i = e("emptyMessageInner", "span"), l = e("option", () => ({ $el: "div", attrs: { "data-checked": "$fns.isSelected($option)" } })), p = e("listitems", () => ({ $el: null, if: "$options.length", for: ["option", "index", "$option.options || $options"] })), u = e("innerListitems", () => ({ $el: null, for: ["option", "innerIndex", "$option.options"] })), c = e("listitemGroup", () => ({ $el: "li", attrs: { "aria-label": "$option.group", role: "group", onClick: "$handlers.listitemGroupClick", tabindex: "-1" } })), f = e("groupLabel", "span"), d = e("groupList", () => ({ $el: "ul", attrs: { role: "group" } }));
  return () => {
    return t(r(a(i("$emptyMessage")), p(R("$option.group", c(f("$option.group"), d(u(($ = () => ({ id: '$id + "_listitem_" + $index + "_" + $innerIndex' }), h = n(R("$fns.isSelected($option)", wn("selected")), l("$option.label")), (y) => {
      const m = (S) => {
        const g = h(y)(S), _ = typeof $ == "function" ? $(y) : $;
        return tr(_) && (/* @__PURE__ */ Wr(g) && Ot(g.else) ? g.else.attrs = { ...g.else.attrs, ..._ } : Ot(g) && (g.attrs = { ...g.attrs, ..._ })), g;
      };
      return m._s = h._s, m;
    })))), n(R("$fns.isSelected($option)", wn("selected")), l("$option.label")))), o(R("$state.loading && $optionLoadingCounter === 0 || $state.hasNextPage", s(R("$state.loading", wn("loader")), "$state.loading && $ui.isLoading.value || $ui.loadMore.value")))));
    var $, h;
  };
}
const be = /* @__PURE__ */ Ee("dd"), { outer: yv, wrapper: bv, inner: xv, icon: Zt, label: wv, prefix: _v, suffix: kv, help: Sv, messages: Dv, message: Cv } = /* @__PURE__ */ Me(be), Lv = be("selector", () => ({ $el: "button", bind: "$attrs", attrs: { id: "$id", type: "button", onClick: "$handlers.click", onBlur: "$handlers.blur", onFocus: "$handlers.focus", onKeydown: "$handlers.keydown", tabindex: "0", name: "$node.name", disabled: "$disabled || $disabledInternally || undefined", "aria-haspopup": "listbox", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined', "aria-describedBy": "$describedBy" } })), Av = be("selectionWrapper", () => ({ if: "$option || $state.loading", $el: "div" })), Tv = be("selection", () => ({ $el: "div" })), Iv = be("placeholder", () => ({ $el: "div", attrs: { key: "placeholder", "data-is-placeholder": "true", "aria-hidden": '$placeholder === undefined && "true" || undefined', style: { opacity: '$placeholder === undefined && "0" || undefined', "pointer-events": '$placeholder === undefined && "none" || undefined' } } })), Lo = be("optionLoading", "span"), Ev = be("option", () => ({ $el: "div" })), Ja = be("removeSelection", () => ({ $el: "div", attrs: { id: '$selectionAppearance === "tags" && $id + "_remove_selection_" + $index || $id + "_remove_selection"', tabindex: "-1", type: "button", key: "$value", "aria-label": "$ui.remove.value", onClick: '$handlers.removeSelection && $handlers.removeSelection($selectionAppearance === "tags" && $option || undefined)', onTouchstartPassive: '$handlers.removeSelection && $handlers.removeSelection($selectionAppearance === "tags" && $option || undefined)', "aria-controls": "$id" } })), Mv = be("selectionsWrapper", () => ({ $el: "div", attrs: { id: '$id + "_selections_wrapper"' } })), Ov = be("selections", () => ({ $el: "div", attrs: { "aria-live": "polite", "aria-hidden": '$lastVisibleIndex && "true" || undefined', "data-test": "$lastVisibleIndex", id: '$id + "_selections"' } })), Pv = be("truncationCount", () => ({ $el: "div", attrs: { id: '$id + "_truncation_count"' } })), Fv = be("selectionsItem", () => ({ $el: "div", for: ["selectionLabel", "index", "$formattedSelections"], attrs: { id: '$id + "_selections_item_" + $index', "data-check": "$selectionLabel", key: "$selectionLabel", "aria-hidden": '$lastVisibleIndex && $index > $lastVisibleIndex && "true" || undefined', style: { visibility: '$lastVisibleIndex && $index > $lastVisibleIndex && "hidden" || undefined' } }, children: '$selectionLabel || ""' })), Vv = be("tagWrapper", () => ({ $el: "span", for: ["option", "index", "$selections"], attrs: { id: '$id + "_tag-wrapper_" + $index', key: "$option.value", "data-value": "$option.value", tabindex: "-1", onClick: "$handlers.tagClick && $handlers.tagClick($option)", onKeydown: "$handlers.selectorTagKeydownHandler($option)", onFocus: "$handlers.tagFocus && $handlers.tagFocus($option)", onBlur: "$handlers.tagBlur && $handlers.tagBlur($option)", "data-is-tag": "true", "data-active-selection": "$fns.isActiveSelection && $fns.isActiveSelection($activeSelectionValue, $option)" } })), Nv = be("tag", () => ({ $el: "div", attrs: { id: '$id + "_tag_" + $index', role: "button", tabindex: "-1" } })), Bv = be("tagLabel", () => ({ $el: "span" })), Rv = be("tagsWrapper", () => ({ $el: "span", attrs: { id: '$id + "_tags_wrapper"', "aria-live": "polite" } })), Hv = be("tags", () => ({ $el: "span", attrs: { id: '$id + "_selections"' } })), Wv = be("tagLoading", "span"), Kv = /* @__PURE__ */ zs(be);
function Qa(e) {
  return Mt(e) && "value" in e && "label" in e;
}
function Wn(e) {
  return e ? e.reduce((t, r) => {
    var n;
    return ((n = t.at(-1)) === null || n === void 0 ? void 0 : n.type) === r.type ? t.at(-1).value += r.value : t.push({ type: r.type, value: r.value }), t;
  }, []) : [];
}
function Ft() {
  var e, t, r;
  const n = ((e = document.activeElement) === null || e === void 0 ? void 0 : e.tagName.toLowerCase()) || "";
  if (customElements.get(n)) {
    const o = (r = (t = document.activeElement) === null || t === void 0 ? void 0 : t.shadowRoot) === null || r === void 0 ? void 0 : r.activeElement;
    if (o) return o;
  }
  return document.activeElement;
}
function F(e) {
  return "__original" in e ? e.__original : e.value;
}
const kr = /* @__PURE__ */ new WeakMap(), rt = { mutationObservers: 0, resizeObservers: 0, documentListeners: /* @__PURE__ */ new Map() };
function $r(e, t) {
  kr.has(e) || (kr.set(e, /* @__PURE__ */ new Set()), e.on("destroyed", () => {
    const n = kr.get(e);
    n && (n.forEach((o) => {
      try {
        o();
      } catch {
      }
    }), n.clear(), kr.delete(e));
  }));
  const r = kr.get(e);
  return r.add(t), () => {
    r.delete(t);
  };
}
function Gs(e, t) {
  const r = new MutationObserver(t);
  return rt.mutationObservers++, $r(e, () => {
    r.disconnect(), rt.mutationObservers--;
  }), r;
}
function Ep(e, t) {
  const r = new ResizeObserver(t);
  return rt.resizeObservers++, $r(e, () => {
    r.disconnect(), rt.resizeObservers--;
  }), r;
}
function Mp(e, t, r, n) {
  let o = null;
  const s = () => {
    o && o();
  };
  return $r(e, s), { add: () => {
    if (!o) {
      document.addEventListener(t, r, n);
      const a = rt.documentListeners.get(t) || 0;
      rt.documentListeners.set(t, a + 1), o = () => {
        document.removeEventListener(t, r, n);
        const i = rt.documentListeners.get(t) || 1;
        i <= 1 ? rt.documentListeners.delete(t) : rt.documentListeners.set(t, i - 1), o = null;
      };
    }
  }, remove: s };
}
const Op = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakSet();
async function Ke(e, t, r = !1, n = !1) {
  if (typeof e.props.optionsLoader == "function") {
    e.props.search = t, clearTimeout(un.get(e));
    const o = t ? e.props.debounce : 0;
    o === 0 ? Kn(e, n) : ((function(s) {
      ei.has(s) || (ei.add(s), $r(s, () => {
        const a = un.get(s);
        a && (clearTimeout(a), un.delete(s));
      }));
    })(e), un.set(e, setTimeout(() => {
      e.props.page = 1, Kn(e, n);
    }, o)));
  } else if (Array.isArray(e.props.options)) {
    const o = JSON.parse(JSON.stringify(e.props.initialOptions));
    e.props.options = [...o.filter((s) => {
      if ("options" in s) {
        const a = s.options = [...s.options].filter((i) => e.props.filter(i, t ?? "", e));
        return a.length > 0 && { ...s, options: a };
      }
      return e.props.filter(s, t ?? "", e);
    })];
  }
}
function Kn(e, t) {
  e.props.allowAppendOptions = t, cr(e);
}
const Pp = /* @__PURE__ */ ye({ key: "loading", type: "state", value: !0, visible: !1 }), Yr = /* @__PURE__ */ ye({ key: "loading", type: "state", value: !1, visible: !1 });
function jv(e, t) {
  if (e.props.allowAppendOptions) return e.props.allowAppendOptions = !1, (function(n, o) {
    const s = Tn(o);
    n.props.appendingOptions = !0, n.props.activeValue = F(s[0]), n.props.options = n.props.options.concat(s);
  })(e, t);
  const r = Tn(t);
  e.props.options = r, e.props.options.length || (e.store.set(Yr), e.store.set(ye({ key: "hasNextPage", type: "state", value: !1, visible: !1 }))), Op.set(e, e.props.searchValue);
}
const Fp = /* @__PURE__ */ new WeakMap();
function Vp(e, t, r) {
  if (e.store.set(Pp), e.props.optionLoadingCounter++, e.props.multiple && e.props.selectionAppearance !== "truncate") {
    let a;
    a = bt(t) ? { label: "Loading...", value: String(t) } : { label: String(t), value: t }, e.props.optionLoaderValues.includes(a.value) || e.props.optionLoaderValues.push(a.value), e.props.type !== "transferlist" && e.props.multiple && e.props.selectionAppearance !== "text-input" && !e.props.selections.includes(a) && (e.props.selections = [...e.props.selections, a]);
  }
  const n = e.props.optionLoader(t, r), o = (a) => typeof a == "string" ? { label: a, value: t } : Qa(a) ? a : Mt(a) ? Object.assign({ label: String(t), value: t }, a) : { label: String(t), value: t }, s = (a) => {
    const i = e.props.memoOptions.findIndex((l) => W(F(l), F(a)));
    return i === -1 ? e.props.memoOptions = [...e.props.memoOptions, a] : e.props.memoOptions[i] = a, a;
  };
  return n instanceof Promise ? n.then((a) => {
    if (typeof a == "string" || Qa(a)) return s(o(a));
  }).finally(() => {
    e.props.optionLoaderValues = e.props.optionLoaderValues.filter((a) => a !== t), e.props.optionLoadingCounter--;
  }) : (e.props.optionLoaderValues = e.props.optionLoaderValues.filter((a) => a !== t), e.props.optionLoadingCounter--, s(o(n)));
}
function cr(e) {
  e.store.set(Pp), e.props.optionsLoadingCounter++, e.store.set(ye({ key: "hasNextPage", type: "state", value: !1, visible: !1 }));
  const t = e.props.nonceKey && e.props[e.props.nonceKey], r = e.props.optionsLoader(e.context, Fp.get(e)), n = jv.bind(null, e), o = r instanceof Promise ? r.then((...s) => {
    e.props.nonceKey !== void 0 && t !== e.props[e.props.nonceKey] || n(...s);
  }) : (n(r), e.props.optionsLoadingCounter--);
  if (o instanceof Promise) return o.finally(() => {
    e.props.optionsLoadingCounter--;
  });
}
function Np(e, t) {
  e.props.page++, Fp.set(e, t), e.store.set(ye({ key: "hasNextPage", type: "state", value: !0, visible: !1 }));
}
const yr = /* @__PURE__ */ Symbol(), Xs = (e) => {
  const t = ((o) => {
    const s = [...o.props.allOptions, ...o.props.initialOptions];
    return [...o.props.memoOptions || [], ...s];
  })(e), r = e.props.inputStd || [], n = [];
  for (const o of r) {
    let s, a = t.find((i) => W(F(i), o));
    s = bt(o) ? void 0 : Array.isArray(o) ? o.join(", ") : o, a || (a = { value: o, label: s, isPlaceholder: !1, noOptionFound: !0 }), n.push(a);
  }
  return n;
};
function lo(e, t) {
  if (e.props.optionRemoved = !0, t) {
    const r = (e.props.inputStd || []).filter((n) => !W(F(t), n));
    e.input(r);
  } else e.input(void 0);
  e.props.openOnRemove && !e.props.expanded && e.isCreated && (e.props.expanded = !0), setTimeout(() => {
    var r;
    return e.emit("selectRange", [(r = e.props.highlightedRange) === null || r === void 0 ? void 0 : r.option]);
  }, 20);
}
async function cn(e) {
  const t = Xs(e);
  e.props.resetSearchOnCommit && e.props.optionsLoader === "function" && (e.props.searchValue = ""), e.props.selections = [...t];
  const r = [...t, ...e.props.memoOptions];
  e.props.memoOptions = [...new Set(r)], (function(n) {
    var o, s;
    n.props.firstCommit ? n.props.firstCommit = !1 : Te && n.isCreated && (n.props.optionRemoved ? n.props.optionRemoved = !1 : (n.props.expanded && n.props.closeOnSelect && (n.props.expanded = !1), n.props.userAction && (n.props.openOnFocus && (n.props.skipOpen = !0), n.props.userAction.type !== "tagDelete" && ((s = (o = n.props.__root) === null || o === void 0 ? void 0 : o.getElementById(`${n.props.id}`)) === null || s === void 0 || s.focus()), n.props.userAction = void 0)));
  })(e);
}
function Js(e) {
  var t, r;
  if (e.props.allOptions && e.props.allOptions.length) if (!((t = e.props.highlightedRange) === null || t === void 0) && t.option.value) e.props.activeValue = F(e.props.highlightedRange.option);
  else {
    if (e.props.activeSelectionValue) {
      const n = e.props.allOptions.find((o) => W(F(o), e.props.activeSelectionValue));
      if (n) return void (e.props.activeValue = n.value);
    }
    if (e.props.reloadOnCommit) e.props.activeValue = F(e.props.allOptions[0]);
    else {
      if (e.props.searchValue && !e.props.appendingOptions) e.props.activeValue = F(e.props.allOptions[0]);
      else if (e.props.inputStd.length > 0 && !e.props.multiple || e.props.multiple && (!((r = e.context) === null || r === void 0) && r.state.dirty)) e.props.selections[e.props.selections.length - 1] ? e.props.activeValue = F(e.props.selections[e.props.selections.length - 1]) : e.props.activeValue = F(e.props.allOptions[0]);
      else {
        if (e.props.appendingOptions) return void (e.props.appendingOptions = !1);
        e.props.activeValue = F((function(n) {
          return n.props.allOptions.find((o) => {
            var s;
            return !(!((s = o.attrs) === null || s === void 0) && s.disabled);
          });
        })(e));
      }
      e.props.appendingOptions && (e.props.appendingOptions = !1);
    }
  }
}
function cs(e) {
  return e.reduce((t, r) => (r.options ? t.push(...cs(r.options)) : t.push(r), t), []);
}
function Qs(e, t) {
  var r, n;
  !((r = t.attrs) === null || r === void 0) && r.disabled || (F(t) !== yr ? (e.props.option = t, e.props.maxReached && !ds(e, t) || (e.input(Bp(e, F(t))), ds(e, t) && e.props.closeOnSelect && (e.props.expanded = !1))) : (n = e.context) === null || n === void 0 || n.handlers.loadMore(!0));
}
function Bp(e, t) {
  if (e.props.multiple) {
    const r = Array.isArray(e.value) ? e.value : [];
    for (const n of r) if (W(n, t)) return e.props.optionRemoved = !0, r.filter((o) => !W(o, t));
    return [...r, t];
  }
  return W(t, e.value) && e.props.deselect ? void (e.props.optionRemoved = !0) : t;
}
function Yv(e, t) {
  return W(e.props.activeValue, F(t)) || void 0;
}
function ds(e, t) {
  if (e.props.multiple) {
    if (!Array.isArray(e.value)) return !1;
    for (const r of e.value) if (W(r, F(t))) return !0;
    return !1;
  }
  return W(e.value, F(t));
}
function ti(e) {
  var t, r;
  if (!e.props.usePopover || e.props.behavior === "overscroll") return;
  const n = e.props.invertPopover ? e.props.popoverCoordinates.y - e.props.popoverCoordinates.height - e.props.popoverOffset - e.props.popoverAncestorCoordinates.height : e.props.popoverCoordinates.y + e.props.popoverOffset;
  e.props.dropdownWrapperStyles = { ...e.props.dropdownWrapperStyles, minWidth: 0, width: "100%", maxWidth: ((r = (t = e.props) === null || t === void 0 ? void 0 : t.popoverAncestorCoordinates) === null || r === void 0 ? void 0 : r.width) + "px", top: n + "px", bottom: "unset", left: e.props.popoverCoordinates.x + "px", margin: 0, padding: 0 };
}
function Zv(e) {
  e.props.firstCommit = !0;
  let t = null;
  e.on("commit", () => {
    if (e.props.inputStd.length === 0 && e.isCreated) return (function(r) {
      var n, o;
      r.props.selections = [], r.props.userAction && (r.props.userAction = void 0, r.props.openOnFocus && (r.props.skipOpen = !0), (o = (n = r.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${r.props.id}`)) === null || o === void 0 || o.focus()), r.props.optionRemoved = !1;
    })(e), void (t = e.props.inputStd);
    if (e.props.inputStd.length && typeof e.props.optionsLoader == "function" && e.props.options.length === 0 && typeof e.props.optionLoader != "function" && e.props.optionsLoadingCounter === 0) {
      e.props.optionsLoaded = !0;
      const r = cr(e);
      r instanceof Promise && r.then(() => {
        cn(e);
      });
    }
    typeof e.props.optionLoader != "function" || e.props.optionRemoved || (function(r, n) {
      if (r === n) return !0;
      if (r == null || n == null || r.length !== n.length) return !1;
      for (let o = 0; o < r.length; ++o) if (r[o] !== n[o]) return !1;
      return !0;
    })(t, e.props.inputStd) ? e.props.optionsLoadingCounter === 0 && cn(e) : (t = e.props.inputStd, (async function(r) {
      const n = Xs(r);
      if ((r.props.inputStd.length > 1 ? r.props.inputStd.filter((s) => !r.props.memoOptions.find((a) => W(F(a), s))) : r.props.inputStd).forEach((s) => {
        Vp(r, s, Array.isArray(n) && n.find((a) => W(F(a), s) && !a.noOptionFound));
      }), r.props.optionLoadingCounter) {
        const s = r.on("prop:optionLoadingCounter", () => {
          cn(r), r.props.optionLoadingCounter || r.off(s);
        });
      } else cn(r);
    })(e));
  });
}
const Sr = /* @__PURE__ */ new WeakSet();
function Uv(e) {
  if (!Te) return;
  e.props.positionListBox = (function(a, i) {
    var l, p;
    let u = null;
    if (a.props.activeDescendant && (u = a.props.options.filter((d) => {
      var $;
      return !(!(($ = d.attrs) === null || $ === void 0) && $.disabled);
    }).findIndex((d) => W(a.value, F(d))), u === -1 && (u = null), !((l = a.props.__root) === null || l === void 0) && l.getElementById(a.props.activeDescendant) && ri(a)), typeof window > "u") return u;
    const c = i.getBoundingClientRect(), f = (p = a.props.__root) === null || p === void 0 ? void 0 : p.getElementById(`${a.props.id}`);
    if (f) {
      const d = f.getBoundingClientRect();
      d.top + d.height + c.height > window.innerHeight && d.top + d.height > c.height ? (a.props.invertPopover = !0, a.props.usePopover || (a.props.dropdownWrapperStyles = { ...a.props.dropdownWrapperStyles, top: "auto", bottom: "100%" })) : a.props.usePopover || (a.props.dropdownWrapperStyles = { ...a.props.dropdownWrapperStyles, bottom: "auto", top: "100%" });
    }
    return u;
  }).bind(null, e), e.props.styleWrapper = qv.bind(null), e.on("mounted", () => {
    fe(`${e.props.id}_popover`, n.bind(null, e), e.props.__root);
  });
  const t = Mp(e, "mousemove", (a) => {
    var i;
    e.props.mouseX = a.clientX, e.props.mouseY = a.clientY;
    const l = (i = e.props.__root) === null || i === void 0 ? void 0 : i.getElementById(`${e.props.id}_popover`);
    if (l) {
      const p = l.getBoundingClientRect();
      a.clientX > p.x && a.clientX < p.x + p.width && a.clientY > p.y && a.clientY < p.y + p.height && (e.props.trackHover = !0);
    }
  }), r = () => {
    e.props.ignoreScroll ? e.props.ignoreScroll = !1 : e.props.trackHover = !0;
  };
  function n(a, i) {
    a.props.behavior !== "overscroll" && getComputedStyle(i).maxHeight === "none" && (a.props.dropdownWrapperStyles = { ...a.props.dropdownWrapperStyles, maxHeight: "400px" });
    const l = Ep(a, () => {
      a.props.styleWrapper(), a.props.positionListBox(i);
    });
    Gs(a, (u) => {
      const c = u[0].target;
      if (a.props.behavior !== "overscroll" || c.id === `${a.props.id}_popover`) {
        const f = a.props.positionListBox(i);
        Sr.delete(a), o(a, f), l.observe(i);
      }
    }).observe(i, { childList: !0, subtree: !0 });
  }
  function o(a, i) {
    var l;
    if (!a.props.expanded || !a.props.options || !a.props.options.length || Sr.has(a)) return;
    const p = a.props.options.reduce((c, f, d) => {
      var $, h, y;
      if (!(($ = f.attrs) === null || $ === void 0) && $.disabled) return c;
      if ("group" in f && (!((h = f.options) === null || h === void 0) && h.length)) return f.options.forEach((S, g) => {
        var _;
        const C = (_ = a.props.__root) === null || _ === void 0 ? void 0 : _.getElementById(`${a.props.id}_listitem_${d}_${g}`);
        C && c.push([C, S]);
      }), c;
      const m = (y = a.props.__root) === null || y === void 0 ? void 0 : y.getElementById(`${a.props.id}_listitem_${d}`);
      return m && c.push([m, f]), c;
    }, []), u = (l = a.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${a.props.id}_load_more`);
    u && p.push([u, a.props.loadMoreOption]), Sr.add(a), p.length && s(a, p, i);
  }
  function s(a, i, l) {
    var p, u, c, f;
    const d = (p = a.props.__root) === null || p === void 0 ? void 0 : p.getElementById(`${a.props.id}_popover`);
    if (a.props.trackHover) {
      const $ = d ? d.getBoundingClientRect() : { top: 0, bottom: 0 };
      if (l = null, a.props.mouseY > $.top && a.props.mouseY < $.bottom) {
        let h = l || 0, y = l;
        const m = (S, g) => {
          var _;
          const C = g[0], { y: k, height: D, x: w, width: L } = C.getBoundingClientRect();
          if (a.props.mouseX > w && a.props.mouseX < w + L && a.props.mouseY > k && a.props.mouseY < k + D) {
            l = S;
            const x = g[1];
            return x && !(!((_ = x.attrs) === null || _ === void 0) && _.disabled) ? a.props.activeValue = F(x) : a.props.activeValue = void 0, !0;
          }
          return !1;
        };
        do {
          if (h !== null && m(h, i[h]) || y !== null && m(y, i[y])) break;
          h !== null && (h++, h > i.length - 1 && (h = null)), y !== null && (y--, y < 0 && (y = null));
        } while (h !== null || y !== null);
      }
      l === null && (a.props.activeValue = void 0);
    }
    a.props.trackHover || ri(a), a.props.expanded ? (d && a.props.loadOnScroll && !(!((u = a.store.loading) === null || u === void 0) && u.value) && (!((c = a.store.hasNextPage) === null || c === void 0) && c.value) && d.scrollTop + d.offsetHeight > d.scrollHeight - 200 && ((f = a.context) === null || f === void 0 || f.handlers.loadMore(!0)), Sr.has(a) ? requestAnimationFrame(s.bind(null, a, i, l)) : o(a, l)) : Sr.delete(a);
  }
  e.on("prop:trackHover", ({ payload: a }) => {
    var i, l, p;
    Te && (a ? (p = (l = e.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${e.props.id}_popover`)) === null || p === void 0 || p.removeEventListener("scroll", r) : (i = e.props.__root) === null || i === void 0 || i.getElementById(`${e.props.id}_popover`));
  }), e.on("prop:expanded", ({ payload: a }) => {
    e.props.dropdownWrapperStyles = { ...e.props.dropdownWrapperStyles, zIndex: a || e.props.forceExpanded ? "999" : "-1", pointerEvents: a ? "auto" : "none" }, a ? (t.add(), e.props.styleWrapper(), Js(e)) : t.remove();
  }), e.on("prop:trackHover", ({ payload: a }) => {
    var i, l;
    Te && (a ? (l = document.getElementById(`${e.props.id}_popover`)) === null || l === void 0 || l.removeEventListener("scroll", r) : (i = document.getElementById(`${e.props.id}_popover`)) === null || i === void 0 || i.addEventListener("scroll", r));
  }), e.on("prop:activeValue", ({ payload: a }) => {
    if (a === yr) return void (e.props.activeDescendant = `${e.props.id}_load_more`);
    let i, l = -1;
    for (let p = 0; p < e.props.options.length; p++) {
      if ("group" in e.props.options[p]) {
        for (let u = 0; u < e.props.options[p].options.length; u++) if (W(F(e.props.options[p].options[u]), a)) {
          l = u, i = p;
          break;
        }
      }
      if (W(F(e.props.options[p]), a)) {
        l = p;
        break;
      }
    }
    e.props.activeDescendant = l < 0 ? void 0 : i === void 0 ? `${e.props.id}_listitem_${l}` : `${e.props.id}_listitem_${i}_${l}`;
  });
}
function ri(e) {
  var t, r;
  if (!Te) return;
  const n = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_popover`), o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.activeDescendant);
  if (!n || !o) return;
  const { y: s, height: a } = o.getBoundingClientRect(), { y: i, height: l } = n.getBoundingClientRect();
  s < i ? (e.props.ignoreScroll = !0, n.scrollTop = o.offsetTop) : s + a > i + l && (e.props.ignoreScroll = !0, n.scrollTop = o.offsetTop + a - l);
}
function qv() {
}
const fs = /* @__PURE__ */ new WeakMap();
function zv(e) {
  e.on("created", () => {
    if (!e.context || !Te) return;
    e.context.fns.isActive = Yv.bind(null, e), e.context.fns.isSelected = (r) => ds(e, r), e.context.fns.hasOptionLoaderValue = (r) => {
      for (const n of e.props.optionLoaderValues) if (W(F(r), n)) return !0;
      return !1;
    }, e.context.handlers.listitemGroupClick = o$, e.context.handlers.selectOption = (r) => (n) => s$.call(null, e, r, n), e.context.handlers.loadMore = Kn.bind(null, e), e.context.handlers.removeSelection = (r) => (n) => ni(e, r, n), e.context.handlers.tagTouchstart = (r) => (n) => ni(e, r, n), e.context.handlers.selectionClick = (r) => e.props.multiple ? Qv.bind(null, e, r) : Jv.bind(null, e), e.context.handlers.selectionBlur = () => e$.bind(null, e), e.context.fns.isActiveSelection = (r, n) => W(r, F(n)), e.context.handlers.tagClick = (r) => t$.bind(null, e, r), e.context.handlers.tagFocus = (r) => r$.bind(null, e, r), e.context.handlers.tagBlur = () => n$.bind(null, e);
    const t = e.context.handlers.blur;
    e.context.handlers.blur = (function(r, n) {
      var o;
      if (n && n.relatedTarget instanceof HTMLElement) {
        const s = (o = r.props.__root) === null || o === void 0 ? void 0 : o.getElementById(r.props.id + "_inner");
        if (s instanceof HTMLElement && s.contains(n.relatedTarget)) return;
      }
      t(), (function(s) {
        s.props.disabled || (s.props.expanded = !1, s.props.activeSelectionValue = void 0, s.emit("blur"));
      })(r);
    }).bind(null, e), e.context.handlers.touchmove = Gv.bind(null, e), e.context.handlers.touchend = Xv.bind(null, e);
  });
}
function Gv(e, t) {
  var r;
  const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`);
  if (n instanceof HTMLInputElement) {
    const o = fs.get(e);
    if (o) {
      const [s, a] = o, i = t.touches[0].clientX - a;
      n.scrollLeft = s - i;
    } else fs.set(e, [n.scrollLeft, t.changedTouches[0].clientX]);
  }
}
function Xv(e) {
  fs.delete(e);
}
function Jv(e, t) {
  e.props.disabled || ((!e.props.expanded && e.props.openOnClick || e.props.openOnFocus) && (e.props.expanded = !0), t.currentTarget instanceof HTMLElement && t.currentTarget.focus());
}
function Qv(e, t, r) {
  r.currentTarget instanceof HTMLElement && (W(e.props.activeSelectionValue, F(t)) ? e.props.activeSelectionValue = void 0 : (e.props.activeSelectionValue = F(t), r.currentTarget.focus()));
}
function e$(e, t) {
  var r;
  if (t.relatedTarget instanceof HTMLElement) {
    const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.id + "_inner");
    if (n instanceof HTMLElement && n.contains(t.relatedTarget)) return;
  }
  e.props.activeSelectionValue = void 0;
}
function t$(e, t, r) {
  r.stopPropagation(), e.props.disabled || (e.props.justFocused ? e.props.justFocused = !1 : r.currentTarget instanceof HTMLElement && (W(e.props.activeSelectionValue, F(t)) ? e.props.activeSelectionValue = void 0 : (e.props.activeSelectionValue = F(t), r.currentTarget.focus())));
}
function r$(e, t, r) {
  r.stopPropagation(), e.props.disabled || r.currentTarget instanceof HTMLElement && (e.props.activeSelectionValue = F(t), e.props.justFocused = !0);
}
function n$(e, t) {
  var r;
  if (t.relatedTarget instanceof HTMLElement) {
    const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.id + "_inner");
    if (n instanceof HTMLElement && n.contains(t.relatedTarget)) return;
  }
  e.props.activeSelectionValue = void 0;
}
function ni(e, t, r) {
  r && r.stopPropagation(), e.props.disabled || (e.props.userAction = { type: "handleRemoveSelection" }, lo(e, t));
}
function o$(e) {
  e.stopPropagation();
}
function s$(e, t, r) {
  r.stopPropagation(), e.props.disabled || (e.props.userAction = { type: "handleListitemClick" }, Qs(e, t));
}
function ea(e, t, r, n) {
  (function(o) {
    o.addProps(["options", "expanded", "placeholder", "multiple", "selections", "activeValue", "activeDescendant", "forceExpanded", "optionLoader", "showEmptyMessage", "emptyMessage", "option", "listboxStyles", "invertPopover", "dropdownWrapperStyles", "optionsLoader", "loadMoreOption", "hasNextPage", "page", "behavior", "selectionRemovable", "openOnRemove", "clearOnClick", "openOnClick", "hideOnOpen", "closeOnSelect", "openOnFocus", "selectionAppearance", "optionsAppearance", "filter", "inputText", "formattedSelections", "lastVisibleIndex", "optionLoaderValues", "disabledInternally", "isLoadingOption", "isLoadingOptions", "thereIsAnOptionSelected", "formattedSelections", "activeSelections", "allowNewValues", "inputStd", "isSingleOption", "max", "disableDragAndDrop", "clearSearchOnOpen", "firstSelectionLabel", "memoOptions", "loadOnCreated", "alwaysLoadOnOpen", "showFormattedSelections", "truncationCount", "reloadOnCommit", "activeSelectionValue", "setForceExpanded", "option", "loadOnScroll", "optionsLoadingCounter", "optionLoadingCounter", "draggable", "deselect"]), o.props.deselect === void 0 ? o.props.deselect = !0 : o.props.deselect = H(o.props.deselect), o.props.option = {}, o.props.expanded = !1, o.props.inputStd = [], o.props.draggable === void 0 ? o.props.draggable = !0 : o.props.draggable === "false" && (o.props.draggable = !1), o.props.options || (_t(350, { node: o, inputType: o.props.type }), o.props.options = []), "disabled" in o.props && (o.props.disabled = H(o.props.disabled)), o.props.allOptions = cs(o.props.options), o.props.selections = [], o.props.memoOptions = [], o.props.invertPopover = !1, o.props.dropdownWrapperStyles = { position: "absolute", top: "100%", overflow: "auto", minWidth: "100%" }, o.props.decrementCount = 0, o.props.page = 1, o.props.loadMoreOption = { label: "Load more", value: yr }, o.props.loadOptions = cr, o.props.listboxStyles = {}, o.props.optionsLoadingCounter = 0, o.props.optionLoadingCounter = 0, o.props.searchable = H(o.props.searchable), o.props.loadOnScroll = H(o.props.loadOnScroll), o.props.multiple = H(o.props.multiple) || !1, o.props.type === "taglist" && (o.props.multiple = !0), o.props.openOnFocus = H(o.props.openOnFocus), o.props.openOnRemove = o.props.openOnRemove !== void 0 && H(o.props.openOnRemove), o.props.hasNextPage = Np.bind(null, o), o.props.initialOptions = [...o.props.options], o.props.optionLoaderValues = [], o.props.loadOnCreated = H(o.props.loadOnCreated), o.props.max && typeof o.props.max != "number" ? o.props.max = parseInt(o.props.max) : o.props.max && !o.props.multiple && (o.props.max = void 0), o.on("mounted", () => ti(o)), o.on("prop:popoverCoordinates", () => setTimeout(() => {
      ti(o);
    }, 10));
  })(n), n.props.multiple ? (function(o) {
    o.hook.input((s, a) => (o.props.highlightedRange && !o.props.optionRemoved && (s.splice(o.props.highlightedRange.index, 1, F(o.props.option)), s = s.filter((i) => i !== void 0)), o.props.inputStd = s && Array.isArray(s) ? [...new Set(s)] : [], a(s === void 0 ? void 0 : [...o.props.inputStd])));
  })(n) : (function(o) {
    o.hook.input((s, a) => (o.props.inputStd = s === void 0 || s === "" || s === null ? [] : [s], a(s)));
  })(n), e(n), Zv(n), (function(o) {
    o.on("created", () => {
      o.context && (o.props.trackHover = !0, o.props.disabled !== void 0 || o.props.optionsLoader || !o.props.options || o.props.options.length || o.props.emptyMessage !== void 0 || o.props.allowNewValues || o.props.inputStd.length !== 0 || (o.props.disabledInternally = !0), Uv(o), o.props.loadOnCreated && !o.props.optionsLoaded && o.props.optionsLoader ? cr(o) : o.props.optionsLoaded && (o.props.optionsLoaded = !1), o.props.forceExpanded = H(o.props.forceExpanded), o.props.forceExpanded && (o.props.dropdownWrapperStyles = { ...o.props.dropdownWrapperStyles, zIndex: "999", pointerEvents: "auto" }, setTimeout(() => {
        o.props.setForceExpanded = !0;
      }, 100)));
    });
  })(n), zv(n), t(n), (function(o) {
    const s = Mp(o, "click", () => {
      o.props.activeSelectionValue = void 0, o.props.expanded = !1;
    });
    o.on("prop:selections", ({ payload: a }) => {
      o.props.max && (o.props.maxReached = a.length >= o.props.max);
    }), o.on("prop:maxReached", ({ payload: a }) => {
      a && (o.props.expanded = !1);
    }), o.on("prop:optionsLoadingCounter", ({ payload: a }) => {
      a === 0 && (o.props.emptyMessage && (o.props.showEmptyMessage = !o.props.options.length), o.props.optionLoadingCounter === 0 && o.store.set(Yr));
    }), o.on("prop:optionLoadingCounter", ({ payload: a }) => {
      a === 0 && o.props.optionsLoadingCounter === 0 && o.store.set(Yr);
    }), o.on("prop:disabled", ({ payload: a }) => {
      a && (o.props.expanded = !1);
    }), o.on("prop:options", ({ payload: a }) => {
      o.props.allOptions = cs(o.props.options), o.props.emptyMessage && typeof o.props.optionsLoader != "function" && (o.props.showEmptyMessage = !a.length), a.length ? o.props.disabledInternally = !1 : a.length || o.props.optionsLoader || o.props.emptyMessage !== void 0 || o.props.allowNewValues || o.props.inputStd.length !== 0 || o.props.searchValue || (o.props.disabledInternally = !0), Js(o);
    }), o.on("prop:expanded", ({ payload: a }) => {
      var i;
      if (Te) if (o.props.alwaysLoadOnOpen && (o.props.page = 1), a) {
        if (o.props.trackHover = !1, o.props.options && !o.props.options.length && typeof o.props.optionsLoader != "function" && o.props.emptyMessage && (o.props.showEmptyMessage = !0), setTimeout(() => s.add(), 10), o.props.selectionAppearance === "text-input" && o.props.multiple) return;
        const l = (i = o.props.__root) === null || i === void 0 ? void 0 : i.getElementById(`${o.props.id}`);
        l instanceof HTMLInputElement && (l.focus(), o.props.searchExpand || (l.value = "", l.value = o.props.inputText));
      } else s.remove(), o.props.trackHover = !1, o.props.showEmptyMessage = !1;
    });
  })(n), r(n);
}
function a$(e) {
  e.props.closeOnSelect === void 0 ? e.props.closeOnSelect = !e.props.multiple : e.props.closeOnSelect = H(e.props.closeOnSelect), (e.props.multiple && e.props.selectionAppearance === void 0 || e.props.selectionAppearance === "truncate") && (e.props.selectionAppearance = "truncate", e.props.formattedSelections = []), e.props.multiple ? e.props.selectionRemovable = !1 : e.props.selectionRemovable = H(e.props.selectionRemovable);
}
function Rp(e) {
  var t, r;
  e.props.searchValue || (r = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_tag-wrapper_${e.props.selections.length - 1}`)) === null || r === void 0 || r.focus();
}
function Hp(e, t, r) {
  var n, o, s;
  if (r.preventDefault(), e.props.trackHover = !1, e.props.expanded) {
    const a = e.props.allOptions.reduce((l, p) => {
      var u;
      return !((u = p?.attrs) === null || u === void 0) && u.disabled || l.push(F(p)), l;
    }, []);
    !((n = e.store.hasNextPage) === null || n === void 0) && n.value && a.push(yr);
    let i = -1;
    e.props.activeValue && (i = a.findIndex((l) => W(l, e.props.activeValue))), i === -1 && a.length ? e.props.activeValue = a[0] : t === "ArrowDown" && a.length > i + 1 ? e.props.activeValue = a[i + 1] : t === "ArrowUp" && i > 0 ? e.props.activeValue = a[i - 1] : t === "ArrowUp" && i === 0 && ((s = (o = e.props.__root) === null || o === void 0 ? void 0 : o.getElementById(`${e.props.id}_tag-wrapper_${e.props.selections.length - 1}`)) === null || s === void 0 || s.focus(), e.props.expanded = !1);
  } else e.props.expanded || t !== "ArrowDown" || (e.props.expanded = !0);
}
function Wp(e, t) {
  var r, n, o;
  if ((e.props.type === "taglist" || e.props.selectionAppearance === "tags") && e.props.inputStd.length && !e.props.inputText) {
    if (t === "ArrowLeft") return e.props.selections.length && ((n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_tag-wrapper_${e.props.selections.length - 1}`)) === null || n === void 0 || n.focus(), e.props.selections[e.props.selections.length - 1] ? e.props.activeSelectionValue = F(e.props.selections[e.props.selections.length - 1]) : e.props.activeSelectionValue = void 0), void (e.props.expanded = !1);
    t === "ArrowRight" && ((o = document.getElementById(`${e.props.id}_tag-wrapper_0`)) === null || o === void 0 || o.focus(), e.props.selections[0] ? e.props.activeSelectionValue = F(e.props.selections[0]) : e.props.activeSelectionValue = void 0), e.props.expanded = !1;
  }
}
function Kp(e) {
  var t, r;
  e.props.expanded = !0, (r = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}`)) === null || r === void 0 || r.focus();
}
function jp(e, t, r, n = !0) {
  var o, s, a, i, l, p, u;
  const c = r.key;
  if (r.altKey) {
    const f = Ft(), d = e.props.selections.findIndex((h) => W(F(h), F(t))), $ = [...e.props.selections];
    r.key === "ArrowRight" ? d < e.props.selections.length - 1 && ($.splice(d, 1), $.splice(d + 1, 0, t)) : r.key === "ArrowLeft" && d > 0 && ($.splice(d, 1), $.splice(d - 1, 0, t)), e.props.activeSelectionValue = F(t), e.input([...$.map(F)]), setTimeout(() => {
      f instanceof HTMLElement && f.focus();
    }, 100);
  } else {
    const f = e.props.selections.findIndex((h) => W(F(h), F(t)));
    if (f === -1) return;
    const d = c === "ArrowRight" ? f + 1 : f - 1;
    if (d >= e.props.selections.length) {
      if (!n) return e.props.expanded = !0, e.props.activeSelectionValue = void 0, void ((s = (o = e.props.__root) === null || o === void 0 ? void 0 : o.getElementById(`${e.props.id}`)) === null || s === void 0 || s.focus());
      (i = (a = e.props.__root) === null || a === void 0 ? void 0 : a.getElementById(`${e.props.id}`)) === null || i === void 0 || i.focus();
    } else if (d < 0 && f === 0) (p = (l = e.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${e.props.id}`)) === null || p === void 0 || p.focus();
    else if (d < 0) return;
    const $ = (u = e.props.__root) === null || u === void 0 ? void 0 : u.getElementById(`${e.props.id}_tag-wrapper_${d}`);
    $ && $.focus(), e.props.selections[d] ? e.props.activeSelectionValue = F(e.props.selections[d]) : e.props.activeSelectionValue = void 0;
  }
}
function Yp(e, t, r) {
  var n;
  if (!(r.currentTarget instanceof HTMLElement) || e.props.searchValue) return;
  const o = e.props.selections.findIndex((i) => W(F(i), F(t)));
  if (o === -1) return;
  const s = e.props.selections[o + 1] ? o + 1 : o - 1, a = (n = e.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${e.props.id}_tag-wrapper_${s}`);
  a && a.focus(), e.props.userAction = { type: "tagDelete" }, lo(e, t);
}
function Zp(e, t) {
  var r;
  if (t.preventDefault(), e.props.allowNewValues && e.props.searchValue && e.input(Bp(e, e.props.searchValue)), e.props.expanded) {
    if (e.props.activeValue === yr) return void ((r = e.context) === null || r === void 0 || r.handlers.loadMore(!0));
    const n = e.props.allOptions.find((o) => W(F(o), e.props.activeValue));
    if (!n) return;
    Qs(e, n);
  } else e.props.expanded = !0;
}
function Up(e) {
  e.props.expanded && (e.props.expanded = !1);
}
function i$(e, t, r) {
  if (r.stopPropagation(), !e.props.disabled)
    switch (r.key) {
      case "ArrowDown":
        Kp(e);
        break;
      case "ArrowRight":
      case "ArrowLeft":
        jp(e, t, r, !1);
        break;
      case "Delete":
      case "Backspace":
        Yp(e, t, r);
    }
}
function l$(e, t, r) {
  if (!e.props.disabled)
    switch (r.key) {
      case "ArrowUp":
      case "ArrowDown":
        (function(n, o, s) {
          var a, i, l, p;
          s.preventDefault();
          const u = s.key, c = n.props.selections.findIndex(($) => W(F($), F(o)));
          if (c === -1) return;
          const f = u === "ArrowDown" ? c + 1 : c - 1;
          if (f < 0 && ((i = (a = n.props.__root) === null || a === void 0 ? void 0 : a.getElementById(`${n.props.id}`)) === null || i === void 0 || i.focus()), f < 0 || f >= n.props.selections.length) return;
          const d = (l = n.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${n.props.id}_selection_wrapper_${f}`);
          d && d.focus(), n.props.activeSelectionValue = ((p = n.props.selections[f]) === null || p === void 0 ? void 0 : p.value) || void 0;
        })(e, t, r);
        break;
      case "Enter":
        break;
      case "Tab":
        (function(n, o, s) {
          var a, i, l, p;
          if (o) {
            const u = n.props.selections.findIndex((d) => W(F(d), F(o)));
            if (u === -1) return;
            const c = s.shiftKey ? u - 1 : u + 1;
            if (c >= n.props.selections.length) return;
            if (c < 0) return void ((i = (a = n.props.__root) === null || a === void 0 ? void 0 : a.getElementById(`${n.props.id}`)) === null || i === void 0 || i.focus());
            const f = (l = n.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${n.props.id}_selection_wrapper_${c}`);
            f && f.focus(), n.props.activeSelectionValue = ((p = n.props.selections[c]) === null || p === void 0 ? void 0 : p.value) || void 0;
          }
        })(e, t, r);
        break;
      case "Delete":
      case "Backspace":
        (function(n, o) {
          var s;
          if (o) {
            const a = n.props.selections.findIndex((p) => W(F(p), F(o)));
            if (a === -1) return;
            const i = n.props.selections[a + 1] ? a + 1 : a - 1, l = (s = n.props.__root) === null || s === void 0 ? void 0 : s.getElementById(`${n.props.id}_selection_wrapper_${i}`);
            l && l.focus(), n.props.selections[i] ? n.props.activeSelectionValue = F(n.props.selections[i]) : n.props.activeSelectionValue = void 0;
          }
          o && n.props.selections.length !== 1 || (n.props.userAction = { type: "selectionDelete" }), lo(n, o);
        })(e, t);
    }
}
function p$(e, t) {
  if (e.props.disabled || !(t.currentTarget instanceof HTMLElement) || e.props.id !== t.currentTarget.id) return;
  const r = t.key;
  switch (r) {
    case "Tab":
      (function(n) {
        n.props.expanded && (n.props.expanded = !1);
      })(e);
      break;
    case "ArrowUp":
    case "ArrowDown":
      Hp(e, r, t);
      break;
    case "ArrowLeft":
    case "ArrowRight":
      Wp(e, r);
      break;
    case "Enter":
      Zp(e, t);
      break;
    case "Escape":
      Up(e);
      break;
    case "Delete":
    case "Backspace":
      Rp(e);
      break;
    default:
      e.emit("unusedKeydown", t);
  }
}
function u$(e, t) {
  if (e.props.disabled || !(t.currentTarget instanceof HTMLElement) || e.props.id !== t.currentTarget.id) return;
  const r = t.key;
  switch (r) {
    case "Tab":
      (function(n, o) {
        var s, a, i;
        n.props.expanded = !1, n.props.multiple && n.props.selections.length && n.props.type === "autocomplete" && n.props.selectionAppearance === "option" && (o.preventDefault(), (a = (s = n.props.__root) === null || s === void 0 ? void 0 : s.getElementById(`${n.props.id}_selection_wrapper_0`)) === null || a === void 0 || a.focus(), n.props.activeSelectionValue = ((i = n.props.selections[0]) === null || i === void 0 ? void 0 : i.value) || void 0);
      })(e, t);
      break;
    case "ArrowUp":
    case "ArrowDown":
      Hp(e, r, t);
      break;
    case "ArrowRight":
    case "ArrowLeft":
      Wp(e, r);
      break;
    case "Enter":
      Zp(e, t);
      break;
    case "Escape":
      Up(e);
      break;
    case "Delete":
    case "Backspace":
      Rp(e);
  }
}
function c$(e) {
  e.props.alwaysLoadOnOpen = e.props.alwaysLoadOnOpen !== void 0 && H(e.props.alwaysLoadOnOpen), e.on("created", () => {
    e.context && (e.context.handlers.click = d$.bind(null, e), e.context.handlers.focus = f$.bind(null, e), e.context.handlers.keydown = p$.bind(null, e), e.context.handlers.selectorTagKeydownHandler = (t) => i$.bind(null, e, t));
  });
}
function d$(e, t) {
  var r;
  if (t.stopPropagation(), t.detail === 0 || e.props.disabled) return;
  e.props.attrs.onClick && e.props.attrs.onClick(t);
  const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`);
  e.props.justOpened ? e.props.justOpened = !1 : e.props.expanded ? e.props.expanded = !1 : (n && t.pointerType !== "mouse" ? (e.props.mouseX = -1, e.props.mouseY = -1) : (e.props.mouseX = t.clientX, e.props.mouseY = t.clientY), e.props.expanded = !0, n?.focus());
}
function f$(e) {
  e.props.disabled || (e.props.attrs.onFocus && e.props.attrs.onFocus(), e.props.skipOpen ? e.props.skipOpen = !1 : e.props.openOnFocus && (e.props.justOpened = !0, e.props.expanded = !0));
}
function m$(e) {
  let t, r = "";
  e.on("unusedKeydown", ({ payload: n }) => {
    if (!n.isComposing && [...n.key].length === 1) {
      if (!r && n.key === " ") return void (function(s, a) {
        var i;
        if (a.preventDefault(), s.props.expanded) {
          if (s.props.activeValue === yr) return void ((i = s.context) === null || i === void 0 || i.handlers.loadMore());
          const l = s.props.allOptions.find((p) => W(F(p), s.props.activeValue));
          if (!l) return;
          Qs(s, l);
        } else s.props.expanded = !0;
      })(e, n);
      e.props.expanded = !0, clearTimeout(t), r += n.key;
      const o = e.props.allOptions.find((s) => s.label.toLowerCase().startsWith(r.toLowerCase()));
      o && (e.props.activeValue = F(o)), t = setTimeout(() => {
        r = "";
      }, 400);
    }
  });
}
function oi(e) {
  jn(e), e.on("prop:selections", () => {
    e.props.skipFormatSelections = !1, jn(e);
  }), Te && fe(`${e.props.id}_selections`, h$.bind(null, e), e.props.__root);
}
function jn(e) {
  e.isCreated && (e.props.selections.length && e.props.lastVisibleIndex && e.props.selections.length - e.props.lastVisibleIndex > 1 ? e.props.truncationCount = "+ " + (e.props.selections.length - e.props.lastVisibleIndex - 1).toString() : e.props.truncationCount = void 0, e.props.formattedSelections = e.props.selections.map((t, r) => e.props.lastVisibleIndex && r === e.props.lastVisibleIndex && r !== 0 ? e.props.lastTruncatedElText && r === e.props.selections.length - 1 ? e.props.lastTruncatedElText : r === e.props.selections.length - 1 ? t.label : t.label + "..." : r === e.props.selections.length - 1 ? t.label : t.label + ", "));
}
function si(e) {
  var t, r;
  if (!Te || !e.context) return;
  const n = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_selections`);
  if (!(n instanceof HTMLElement)) return;
  const o = n.parentNode;
  if (!(o instanceof HTMLElement)) return;
  let s = n.getBoundingClientRect().width;
  const a = 0.98 * o.getBoundingClientRect().width, i = Array.prototype.slice.call(n.children), l = [...e.props.selections];
  if (s > a) {
    const p = [];
    let u = 0;
    for (let c = 0; c < l.length; c++) p.push([l[c], i[c]]);
    for (let c = p.length - 1; c >= 0; c--) {
      const f = p[c];
      if (!(f[1] instanceof HTMLElement)) return;
      u += f[1].getBoundingClientRect().width + parseFloat(window.getComputedStyle(f[1]).marginRight) + parseFloat(window.getComputedStyle(f[1]).marginLeft);
      const d = s - u;
      if (a > d) {
        const $ = f[0].label;
        e.props.skipFormatSelections = !0, f[1].textContent = $;
        let h = !1;
        for (let y = $.length; y >= 0; y--) {
          if (e.props.skipFormatSelections = !0, f[1].textContent = $.slice(0, y).trim() + "...", d + f[1].getBoundingClientRect().width < a) {
            if (y < 4) {
              e.props.lastVisibleIndex = c - 1, e.props.lastTruncatedElText = null;
              break;
            }
            if (e.props.lastVisibleIndex = c, e.props.lastTruncatedElText && f[1].textContent.slice(0, 4) === e.props.lastTruncatedElText.slice(0, 4)) break;
            e.props.lastTruncatedElText = (r = f[1]) === null || r === void 0 ? void 0 : r.textContent;
            break;
          }
          y === 0 && (h = !0);
        }
        f[1].textContent = e.props.lastTruncatedElText && !h && c !== 0 ? e.props.lastTruncatedElText : $, e.props.lastVisibleIndex === null && (e.props.lastVisibleIndex = c === 0 ? 0 : c - 1, e.props.lastTruncatedElText = null), setTimeout(() => {
          jn(e);
        });
        break;
      }
    }
  } else e.props.lastTruncatedElText = null, e.props.lastVisibleIndex = null, jn(e);
}
function h$(e, t) {
  const r = new ResizeObserver(() => {
    e.props.selections && e.props.selections.length !== 0 && (e.props.skipFormatSelections ? e.props.skipFormatSelections = !1 : si(e));
  }), n = new ResizeObserver(() => {
    si(e);
  });
  r.observe(t), t.parentNode instanceof Element && n.observe(t.parentNode);
}
const g$ = { position: "fixed", top: 0, bottom: 0, right: 0, left: 0, pointerEvents: "none", zIndex: -1, overflowY: "auto", "-webkit-overflow-scrolling": "auto" }, Ao = { position: "fixed", overflow: "hidden", height: "100%", width: "100%" }, To = { overflow: "hidden", height: "100%" }, ai = {}, ii = {};
let Io = 0;
function v$(e) {
  var t, r;
  if (typeof window > "u") return;
  const n = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_popover`), o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`);
  if (!o || !n) return;
  const s = n.style.paddingTop, a = n.style.paddingBottom, i = n.style.paddingLeft;
  n.style.paddingTop = "0", n.style.paddingBottom = "0", n.style.paddingLeft = "0";
  const l = o.getBoundingClientRect(), p = n.getBoundingClientRect(), u = Math.round(l.top - p.top) + "px", c = Math.round(l.left - p.left - 5) + "px", f = Math.max(Math.round(Math.min(p.height - p.top, window.innerHeight) - (l.top + l.height)), 0) + "px";
  n.style.paddingTop = s, n.style.paddingBottom = a, n.style.paddingLeft = i, e.props.dropdownWrapperStyles = { ...e.props.dropdownWrapperStyles, paddingTop: u, paddingLeft: c, paddingBottom: f }, e.props.listboxStyles = { ...e.props.listboxStyles, minWidth: e.props.behavior === "overscroll" ? `min(${l.width + "px"}, calc(100vw - 4em))` : l.width + "px", maxWidth: "calc(100vw - 4em)" };
}
function $$(e, t) {
  var r, n;
  let o = null;
  if (e.props.activeDescendant) {
    const s = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.activeDescendant);
    if (!s) return o;
    e.props.ignoreScroll = !0;
    const a = (n = e.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${e.props.id}_listbox`);
    if (!a) return o;
    const i = t.getBoundingClientRect(), l = a.getBoundingClientRect(), p = parseInt(getComputedStyle(t).paddingTop), u = parseInt(getComputedStyle(t).paddingBottom), c = s.offsetTop - p, f = Math.max(c - p, 0), d = Math.max(t.scrollHeight - u - c - i.height, 0), $ = l.height - f - d;
    t.scrollTop = c;
    const h = () => {
      t.scrollTop = d > 0 ? d < p ? t.scrollHeight : p : f < u ? 0 : c - u;
    }, y = Math.min(150, l.height);
    f > 0 && d > 0 || f === 0 && d === 0 || $ > y ? t.scrollTop = c : h(), t.clientHeight / 2 < t.scrollTop && (o = e.props.options.filter((m) => {
      var S;
      return !(!((S = m.attrs) === null || S === void 0) && S.disabled);
    }).findIndex((m) => W(e.value, F(m)))), o === -1 && (o = null);
  }
  return o;
}
function y$(e) {
  e.addProps(["behavior"]), e.on("created", () => {
    e.props.behavior === "overscroll" && (typeof e.props.optionsLoader == "function" && Ae(300, [e]), e.props.dropdownWrapperStyles = wt(g$), e.props.listboxStyles = { display: "inline-block" }, e.props.styleWrapper = v$.bind(null, e), e.props.positionListBox = $$.bind(null, e));
  }), e.on("prop:expanded", ({ payload: t }) => {
    e.props.behavior === "overscroll" && (t ? (function() {
      Io = document.documentElement.scrollTop;
      for (const r in Ao) ii[r] = document.documentElement.style[r], document.documentElement.style[r] = Ao[r];
      for (const r in To) ai[r] = document.body.style[r], document.body.style[r] = To[r];
      document.body.scrollTop = Io;
    })() : (function() {
      for (const r in Ao) document.documentElement.style[r] = ii[r];
      for (const r in To) document.body.style[r] = ai[r];
      document.body.scrollTop = 0, document.documentElement.scrollTop = Io;
    })());
  });
}
function qp(e) {
  e.addProps(["multiLine"]), e.on("created", () => {
    Te && (e.props.multiLineHeight = void 0, fe(`${e.props.id}_selections`, b$.bind(null, e), e.props.__root));
  });
}
function b$(e) {
  var t;
  const r = Ep(e, (o) => {
    for (const s of o) {
      const { height: a } = s.contentRect;
      e.props.selectionsHeight !== a && (e.props.selectionsHeight = a), x$(e, s.target);
    }
  }), n = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_selections`);
  n && r.observe(n);
}
function x$(e, t) {
  var r;
  const n = t.querySelectorAll(`[id^="${e.props.id}_tag-wrapper"`);
  let o, s = [];
  if (e.props.type === "taglist") {
    const i = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`);
    if (!i) return;
    s = [i, ...Array.from(n)];
  } else s = Array.from(n);
  if (!n) return;
  let a = !1;
  for (const i of s) if (o === void 0) o = i.getBoundingClientRect();
  else {
    const l = i.getBoundingClientRect();
    if (o.top >= l.top + l.height / 5 || o.top <= l.top - l.height / 5) {
      a = !0, e.props.multiLine = !0;
      break;
    }
  }
  a || (e.props.multiLine = !1);
}
function w$(e) {
  if (e.on("created", () => {
    e.context && m$(e);
  }), e.props.multiple || (function(t) {
    t.on("prop:selections", ({ payload: r }) => {
      var n;
      t.props.firstSelectionLabel = ((n = r[0]) === null || n === void 0 ? void 0 : n.label) || "", t.props.option = r[0];
    });
  })(e), e.props.selectionAppearance === "truncate" && (e.props.lastVisibleIndex = null, oi(e), e.on("prop:selections", () => {
    oi(e);
  })), e.props.selectionAppearance === "tags" && qp(e), e.props.multiple && e.props.selectionAppearance === "tags") {
    let t = function() {
      return Array.isArray(e.value) ? e.value : [];
    }, r = function(n, o) {
      e.input(n);
    };
    e.on("created", () => {
      e.props.disabled && (e.props.draggable = !1), fe(`${e.props.id}_selections`, (n) => {
        if (e.context && n instanceof HTMLElement) {
          const o = { threshold: { horizontal: 0.25, vertical: 0 }, plugins: [no()], draggingClass: e.context.classes.dragging, dropZoneClass: e.context.classes.dropZone, disabled: !e.props.draggable, root: e.props.__root, touchDraggingClass: e.context.classes.touchDragging, touchDropZoneClass: e.context.classes.touchDropZone, draggable: (s) => s.hasAttribute("data-is-tag") };
          ve({ parent: n, getValues: t, setValues: r, config: o }), e.on("prop:disabled", ({ payload: s }) => {
            o.disabled = s, ve({ parent: n, getValues: t, setValues: r, config: o });
          }), e.on("prop:draggable", ({ payload: s }) => {
            o.disabled = !s, ve({ parent: n, getValues: t, setValues: r, config: o });
          });
        }
      }, e.props.__root);
    });
  }
  e.on("prop:expanded", ({ payload: t }) => {
    t && e.props.optionsLoader && typeof e.props.optionsLoader == "function" && (!e.props.options.length || e.props.alwaysLoadOnOpen) && (e.props.options = [], cr(e));
  }), e.props.behavior === "overscroll" && y$(e);
}
const _$ = (e, t) => {
  let r = null, n = null, o = null;
  return function(...s) {
    const a = this;
    r ? (n = s, o = a) : (e.apply(a, s), r = window.setTimeout(() => {
      r = null, n !== null && o !== null && (e.apply(o, n), n = null, o = null);
    }, t));
  };
};
function en(e) {
  if (e.addProps(["popover", "popoverOffset", "usePopover", "popoverCoordinates", "popoverAncestorCoordinates"]), e.props.popover = H(e.props.popover) ? "manual" : void 0, e.type !== "input" || e.props.behavior === "overscroll") return;
  let t = null, r = null, n = [], o = null;
  if (e.props.popoverOffset = H(e.props.popoverOffset) ? parseInt(e.props.popoverOffset) : 0, !e.props.popover) return;
  if (typeof document > "u" || !("popover" in HTMLElement.prototype)) return void (typeof window < "u" && console.warn('FormKit: Popover API is not supported in this browser — input panels will be rendered with fallback CSS positioning. This could result in inaccessible inputs due to parent containers using "overflow: hidden" or z-index conflicts.'));
  const s = () => {
    e.props.invertPopover = !1, document.removeEventListener("resize", o), document.removeEventListener("scroll", o), n.forEach((l) => {
      l.removeEventListener("scroll", o);
    });
  };
  function a() {
    const { x: l, y: p, width: u, height: c } = (function(f, d) {
      if (!f || !d) return { x: 0, y: 0 };
      const { left: $, top: h, width: y, height: m } = d.getBoundingClientRect();
      return { x: $ + window.scrollX, y: h + m + window.scrollY, width: y, height: m };
    })(t, r);
    e.props.popoverAncestorCoordinates = { x: l, y: p, width: u, height: c }, e.props.popoverCoordinates = { x: l, y: p, width: u, height: 0 };
  }
  function i(l) {
    t && document.body.contains(t) && (l ? (t?.showPopover(), setTimeout(() => {
      e.props.popoverCoordinates.height = t?.offsetHeight || 0;
    }, 5)) : t.matches(":popover-open") && (t.hidePopover(), e.props.popoverCoordinates.height = 0));
  }
  e.on("mounted", () => {
    e.context && (e.props.usePopover = !0, e.props.popoverCoordinates = { x: 0, y: 0, width: 0, height: 0 }, e.props.popoverAncestorCoordinates = { x: 0, y: 0, width: 0, height: 0 });
  }), e.on("destroyed", () => {
    s();
  }), e.on("prop:inputText", () => {
    e.context && (a(), i(!0));
  }), e.on("prop:expanded", ({ payload: l }) => {
    var p;
    e.context && (l === !1 ? s() : fe(`${(p = e.context) === null || p === void 0 ? void 0 : p.id}_popover`, () => {
      if (!e.context) return;
      t = document.querySelector(`[id="${e.context.id}_popover"][popover]`) || document.querySelector(`[id="${e.context.id}_popover"] [popover]`), r || (r = (function(c) {
        if (!c) return null;
        let f = c.parentElement;
        for (; f && window.getComputedStyle(f).position === "static"; ) f = f.parentElement;
        return f;
      })(t)), a(), i(l), o = _$(() => {
        e.context && (a(), i(l));
      }, 10), document.addEventListener("resize", o), document.addEventListener("scroll", o), n = [];
      let u = t?.parentElement;
      for (; u; ) u.scrollHeight > u.clientHeight && n.push(u), u = u.parentElement;
      n.forEach((c) => {
        c.addEventListener("scroll", o);
      });
    }));
  });
}
const k$ = { schema: /* @__PURE__ */ yv(/* @__PURE__ */ bv(/* @__PURE__ */ wv("$label"), /* @__PURE__ */ xv(/* @__PURE__ */ Zt("prefix"), /* @__PURE__ */ _v(), /* @__PURE__ */ Lv(/* @__PURE__ */ R("$inputStd.length === 0 && $state.loading !== true", /* @__PURE__ */ Iv('$placeholder || "placeholder"'), /* @__PURE__ */ R("$multiple !== true", /* @__PURE__ */ Av(/* @__PURE__ */ R("$state.loading && $selections.length === 0", /* @__PURE__ */ Lo("$ui.isLoading.value"), /* @__PURE__ */ Tv(/* @__PURE__ */ Ev("$option.label")))), /* @__PURE__ */ R('$multiple && $selectionAppearance === "truncate"', /* @__PURE__ */ Mv(/* @__PURE__ */ Ov(/* @__PURE__ */ R("$state.loading && $selections.length === 0", /* @__PURE__ */ Lo("$ui.isLoading.value"), /* @__PURE__ */ Fv()))), /* @__PURE__ */ R('$multiple && $selectionAppearance === "tags"', /* @__PURE__ */ Rv(/* @__PURE__ */ Hv(/* @__PURE__ */ R("$state.loading && $isLoadingOption !== true && $selections.length === 0", /* @__PURE__ */ Lo("$ui.isLoading.value"), /* @__PURE__ */ Vv(/* @__PURE__ */ Nv(/* @__PURE__ */ R("$state.loading && $fns.hasOptionLoaderValue($option) || $option.label === undefined", /* @__PURE__ */ Wv("$ui.isLoading.value"), /* @__PURE__ */ Bv("$option.label")), /* @__PURE__ */ Ja(/* @__PURE__ */ Zt("close"))))))))))), /* @__PURE__ */ R("$truncationCount && $state.loading !== true", /* @__PURE__ */ Pv("$truncationCount")), /* @__PURE__ */ R("$state.loading", /* @__PURE__ */ Zt("loader")), /* @__PURE__ */ R("$inputStd.length !== 0 && $selectionRemovable", /* @__PURE__ */ Ja(/* @__PURE__ */ Zt("close")), /* @__PURE__ */ Zt("select"))), /* @__PURE__ */ Kv(), /* @__PURE__ */ kv(), /* @__PURE__ */ Zt("suffix"))), /* @__PURE__ */ Sv("$help"), /* @__PURE__ */ Dv(/* @__PURE__ */ Cv("$message.value"))), type: "input", family: "dropdown", props: [], features: [
  /* @__PURE__ */ te("select", "select"),
  /* @__PURE__ */ te("close", "close"),
  /* @__PURE__ */ te("selected", "check"),
  /* @__PURE__ */ te("loader", "spinner"),
  /* @__PURE__ */ ie("isLoading"),
  /* @__PURE__ */ ie("loadMore"),
  /* @__PURE__ */ ie("remove"),
  mt,
  /* @__PURE__ */ ea.bind(null, a$, c$, w$),
  en
] }, ht = /* @__PURE__ */ Ee("tg"), { outer: S$, wrapper: D$, prefix: C$, suffix: L$, help: A$, messages: T$, message: I$, icon: E$ } = /* @__PURE__ */ Me(ht), M$ = ht("input", () => ({ $el: "input", bind: "$attrs", attrs: { type: "checkbox", id: "$id", value: "$value", name: "$node.name", checked: "$checked", onInput: "$handlers.toggles", onBlur: "$handlers.blur", disabled: "$disabled" } })), O$ = ht("label", () => ({ if: "($label && $onValueLabel === undefined && $offValueLabel === undefined) || ($valueLabelDisplay === inner) && $altLabelPosition !== true", $el: "label", attrs: { for: "$id" }, children: "$label" })), P$ = ht("altLabel", () => ({ $el: "label", if: "($label && ($onValueLabel || $offValueLabel) && $valueLabelDisplay !== hidden && $valueLabelDisplay !== inner) || $altLabelPosition === true", attrs: { for: "$id", "data-label-alt": "true", style: { color: { if: "$checked", then: "$valueLabelColorOn", else: "$valueLabelColorOff" } } }, children: "$label" })), F$ = ht("innerLabel", () => ({ $el: "div", if: "$valueLabelDisplay === inner && ($checked && $onValueLabel || $offValueLabel)", attrs: { style: { color: { if: "$checked", then: "$valueLabelColorOn", else: "$valueLabelColorOff" } } }, children: { if: "$checked", then: "$onValueLabel", else: "$offValueLabel" } })), V$ = ht("valueLabel", () => ({ $el: "label", if: "$valueLabelDisplay !== hidden && $valueLabelDisplay !== inner && (($checked === true && $onValueLabel) || ($checked === false && $offValueLabel))", attrs: { for: "$id" }, children: { if: "$checked && $onValueLabel", then: "$onValueLabel", else: { if: "$offValueLabel", then: "$offValueLabel" } } })), N$ = ht("inner", () => ({ $el: "label", attrs: { for: "$id", id: "$id + '_label'" } })), B$ = ht("track", () => ({ $el: "div", attrs: { style: { backgroundColor: { if: "$checked", then: "$trackColorOn", else: "$trackColorOff" } } } })), R$ = ht("thumb", () => ({ $el: "div", attrs: { style: { color: { if: "$checked", then: "$iconColorOn", else: "$iconColorOff" }, backgroundColor: { if: "$checked", then: "$thumbColorOn", else: "$thumbColorOff" } } } })), H$ = () => R$(R("$slots.default", "$slots.default", E$("thumb"))), W$ = { schema: /* @__PURE__ */ S$(/* @__PURE__ */ D$(/* @__PURE__ */ P$(), /* @__PURE__ */ N$(/* @__PURE__ */ C$(), /* @__PURE__ */ M$(), /* @__PURE__ */ B$(/* @__PURE__ */ F$(), /* @__PURE__ */ H$()), /* @__PURE__ */ L$()), /* @__PURE__ */ V$(), /* @__PURE__ */ O$()), /* @__PURE__ */ A$("$help"), /* @__PURE__ */ T$(/* @__PURE__ */ I$("$message.value"))), type: "input", props: ["checked", "thumbColorOff", "thumbColorOn", "iconColorOff", "iconColorOn", "valueLabelColorOff", "valueLabelColorOn", "offValue", "offValueLabel", "onValue", "onValueLabel", "thumbIcon", "trackColorOff", "trackColorOn", "valueLabelDisplay", "altLabelPosition"], features: [function(e) {
  function t(r, n) {
    n.target instanceof HTMLInputElement && (r.input(n.target.checked ? r.props.onValue : r.props.offValue), r.props.checked = n.target.checked);
  }
  e.on("created", () => {
    "disabled" in e.props && (e.props.disabled = H(e.props.disabled)), e.props.altLabelPosition = H(e.props.altLabelPosition), e.props.offValue === void 0 && (e.props.offValue = !1), e.props.onValue === void 0 && (e.props.onValue = !0), e.props.checked = W(e.value, e.props.onValue), e.context && (e.context.handlers.toggles = t.bind(null, e));
  }), e.on("commit", ({ payload: r }) => {
    e.props.checked = W(r, e.props.onValue);
  });
}] }, me = /* @__PURE__ */ Ee("rp"), { outer: K$, inner: j$, prefix: Y$, suffix: Z$, help: U$, messages: q$, message: z$, icon: Dr } = /* @__PURE__ */ Me(me), G$ = me("empty", () => ({ $el: "div" })), X$ = me("insertControl", () => ({ $el: "button", attrs: { disabled: "$value.length >= $max", onClick: "$fns.createInsert($index)", type: "button" } })), J$ = me("addButton", () => ({ $formkit: "button", bind: "$addAttrs", if: "$addButton", disabled: "$value.length >= $max", onClick: "$fns.createAppend()", type: "button" })), Q$ = me("removeControl", () => ({ $el: "button", attrs: { disabled: "$value.length <= $min", onClick: "$fns.createRemover($index)", type: "button" } })), e0 = me("items", () => ({ $el: "ul", meta: { autoAnimate: !0 }, attrs: { role: "list", id: '$id + "_items"' } })), t0 = me("item", () => ({ $el: "li", for: ["item", "index", "$items"], attrs: { role: "listitem", key: "$item", "data-index": "$index" } })), r0 = me("downControl", () => ({ $el: "button", attrs: { disabled: "$index >= $value.length - 1", onClick: "$fns.createShift($index, 1)", type: "button" } })), n0 = me("upControl", () => ({ $el: "button", attrs: { disabled: "$index <= 0", onClick: "$fns.createShift($index, -1)", type: "button" } })), o0 = me("content", "div"), s0 = me("fieldset", () => ({ $el: "fieldset", attrs: { id: "$id" } })), a0 = me("legend", () => ({ $el: "legend", if: "$label" })), i0 = me("group", () => ({ $formkit: "group", index: "$index" })), l0 = me("controls", () => ({ $el: "ul", if: "$removeControl || $insertControl || $upControl || $downControl" })), p0 = me("remove", () => ({ $el: "li", if: "$removeControl" })), u0 = me("insert", () => ({ $el: "li", if: "$insertControl" })), c0 = me("up", () => ({ $el: "li", if: "$upControl" })), d0 = me("down", () => ({ $el: "li", if: "$downControl" })), dn = me("controlLabel", "span"), f0 = me("dragHandleWrapper", () => ({ if: "$draggable", $el: "div" })), m0 = me("dragHandle", () => ({ $el: "div", attrs: { id: '$id + "_drag_handle"' } }));
function h0(e) {
  var t, r, n, o, s, a, i, l, p, u, c, f, d, $;
  if ((t = (l = e.props).removeControl) !== null && t !== void 0 || (l.removeControl = !0), (r = (p = e.props).upControl) !== null && r !== void 0 || (p.upControl = !0), (n = (u = e.props).downControl) !== null && n !== void 0 || (u.downControl = !0), (o = (c = e.props).insertControl) !== null && o !== void 0 || (c.insertControl = !1), (s = (f = e.props).addButton) !== null && s !== void 0 || (f.addButton = !0), (a = (d = e.props).addLabel) !== null && a !== void 0 || (d.addLabel = !1), (i = ($ = e.props).addAttrs) !== null && i !== void 0 || ($.addAttrs = {}), e.props.draggable = H(e.props.draggable), e.props.min = e.props.min !== void 0 ? Number(e.props.min) : 1, e.props.max = e.props.max !== void 0 ? Number(e.props.max) : 1 / 0, e.props.min > e.props.max) throw Error("Repeater: min must be less than max");
  if (Array.isArray(e.value)) if (e.value.length < e.props.min) {
    const h = yt(e.props.min - e.value.length, () => ({}));
    e.input(e.value.concat(h), !1);
  } else e.value.length > e.props.max && e.input(e.value.slice(0, e.props.max), !1);
  else e.input(yt(e.props.min, () => ({})), !1);
  e.context && (function(h, y) {
    y.createShift = (m, S) => () => {
      const g = h._value;
      g.splice(m + S, 0, g.splice(m, 1)[0]), h.input(g, !1);
    }, y.createInsert = (m) => () => {
      const S = h._value;
      S.splice(m + 1, 0, {}), h.input(S, !1);
    }, y.createAppend = () => () => {
      const m = h._value;
      m.push({}), h.input(m, !1);
    }, y.createRemover = (m) => () => {
      const S = h._value;
      S.splice(m, 1), h.input(S, !1);
    };
  })(e, e.context.fns);
}
function li(e, t) {
  var r;
  if (!t.context) return;
  const n = (r = t.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${t.props.id}_inner`), o = n?.hasAttribute("data-auto-animate"), s = { group: t.props.id, dragHandle: `#${t.props.id}_drag_handle`, draggingClass: t.context.classes.dragging, dropZoneClass: t.context.classes.dropZone, root: t.props.__root, disabled: !t.props.draggable, plugins: o ? [] : [no({ duration: 100 })], touchDraggingClass: t.context.classes.touchDragging, touchDropZoneClass: t.context.classes.touchDropZone, draggable: (l) => l.tagName === "LI" };
  function a() {
    return Array.isArray(t.value) ? t.value : [];
  }
  function i(l) {
    t.input(l);
  }
  ve({ parent: e, getValues: a, setValues: i, config: s }), t.on("prop:disabled", ({ payload: l }) => {
    s.disabled = l, ve({ parent: e, getValues: a, setValues: i, config: s });
  }), t.on("prop:draggable", ({ payload: l }) => {
    s.disabled = !l, ve({ parent: e, getValues: a, setValues: i, config: s });
  });
}
const g0 = { schema: /* @__PURE__ */ K$(/* @__PURE__ */ s0(/* @__PURE__ */ a0("$label"), /* @__PURE__ */ U$("$help"), /* @__PURE__ */ j$(/* @__PURE__ */ Y$(), /* @__PURE__ */ R("$value.length === 0", /* @__PURE__ */ R("$slots.empty", /* @__PURE__ */ G$()), /* @__PURE__ */ e0(/* @__PURE__ */ t0(/* @__PURE__ */ f0(/* @__PURE__ */ m0(/* @__PURE__ */ Dr("dragHandle"))), /* @__PURE__ */ o0(/* @__PURE__ */ i0("$slots.default")), /* @__PURE__ */ l0(/* @__PURE__ */ c0(/* @__PURE__ */ n0(/* @__PURE__ */ dn("$ui.moveUp.value"), /* @__PURE__ */ Dr("moveUp"))), /* @__PURE__ */ p0(/* @__PURE__ */ Q$(/* @__PURE__ */ dn("$ui.remove.value"), /* @__PURE__ */ Dr("remove"))), /* @__PURE__ */ u0(/* @__PURE__ */ X$(/* @__PURE__ */ dn("$ui.add.value"), /* @__PURE__ */ Dr("add"))), /* @__PURE__ */ d0(/* @__PURE__ */ r0(/* @__PURE__ */ dn("$ui.moveDown.value"), /* @__PURE__ */ Dr("moveDown"))))), /* @__PURE__ */ Z$()))), /* @__PURE__ */ J$('$addLabel || ($ui.add.value + " " + ($label || ""))')), /* @__PURE__ */ q$(/* @__PURE__ */ z$("$message.value"))), type: "list", props: ["min", "max", "total", "upControl", "downControl", "removeControl", "insertControl", "addLabel", "addButton", "addAttrs", "draggable"], features: [
  function(e) {
    e._c.sync = !0, e.on("created", h0.bind(null, e)), e.on("mounted", () => {
      fe(`${e.props.id}_items`, (t) => {
        if (t instanceof HTMLElement) {
          let r = function(n) {
            for (const o of n) for (const s of Array.from(o.addedNodes)) if (s instanceof HTMLElement && s.id === `${e.props.id}_items`) return void li(s, e);
          };
          li(t, e), Gs(e, r).observe(t.parentNode, { childList: !0 });
        }
      }, e.props.__root);
    });
  },
  ro,
  /* @__PURE__ */ ie("remove"),
  /* @__PURE__ */ ie("add"),
  /* @__PURE__ */ ie("moveUp"),
  /* @__PURE__ */ ie("moveDown"),
  /* @__PURE__ */ te("dragHandle", "dragHandle"),
  /* @__PURE__ */ te("remove", "trash"),
  /* @__PURE__ */ te("add", "add"),
  /* @__PURE__ */ te("moveUp", "arrowUp"),
  /* @__PURE__ */ te("moveDown", "arrowDown")
] }, ms = /* @__PURE__ */ new WeakMap();
function tn(e, t) {
  const r = { onItems: [], offItems: [] }, n = t || Number(e.value || 0);
  for (let o = 0; o < e.props.max; o++) if (o < n && o + 1 >= n) {
    const s = e.props.rightToLeft ? 100 - 100 * (n - o) : 100 * (n - o);
    r.onItems.push(s + "%"), r.offItems.push(100 - s + "%");
  } else o < n ? (r.offItems.push("0%"), r.onItems.push("100%")) : o >= n && (r.offItems.push("100%"), r.onItems.push("0%"));
  e.props.itemsToPercentages = r;
}
function v0(e, t) {
  var r;
  (r = e.context) === null || r === void 0 || r.handlers.blur(t);
}
function $0(e, t) {
  const { x: r, y: n } = Gp(t);
  let o = document.elementFromPoint(r, n);
  const s = Array.from(document.querySelectorAll(`#${e.props.id}_items_wrapper > .formkit-ratingItem`));
  let a = !0;
  for (; o && a; ) {
    if (s.includes(o)) {
      a = !1;
      break;
    }
    o = o.parentNode;
  }
  if (!a) {
    const i = s.indexOf(o);
    if (e.props.step === 1) return void e.input(i + 1, !1);
  }
}
function y0(e, t, r) {
  e.props.disabled || (r.preventDefault(), e.props.hoverHighlight = !0, e.props.touchStarted = !0, e.props.step !== 1 ? po(e, t, r) : e.input(t + 1, !1));
}
function zp(e, t) {
  if (!e.props.dragStarted) return;
  t.preventDefault(), e.props.hoverHighlight = !1, e.props.dragStarted = !1, tn(e);
  const r = ms.get(e);
  r && (r.abort(), ms.delete(e));
}
function b0(e, t, r) {
  if (e.props.hoverHighlight || e.props.disabled) return;
  r.preventDefault(), e.props.hoverHighlight = !0, e.props.dragStarted = !0;
  const n = new AbortController();
  document.addEventListener("mouseup", (o) => zp(e, o), { signal: n.signal }), ms.set(e, n), e.props.step === 1 ? e.input(t + 1, !1) : po(e, t, r);
}
function x0(e, t) {
  var r, n;
  if (document.activeElement === t.currentTarget) {
    if (t.key === "ArrowRight" || t.key === "ArrowDown") {
      e.props.arrow = 1;
      const o = e.value ? hs(e.value + 1 * e.props.step, e.props.step) : e.props.min + 1 * e.props.step, s = (r = e.props.__root) === null || r === void 0 ? void 0 : r.querySelector(e.value ? `#${e.props.id}_inner input[value="${o}"]` : "#" + (e.props.id + "_0_0"));
      e.props.preventFocus = !0, s && s instanceof HTMLInputElement && s.focus(), e.props.preventFocus = !1, e.input(Number(o));
    } else if (t.key === "ArrowLeft" || t.key === "ArrowUp") {
      e.props.arrow = -1;
      const o = e.value ? hs(e.value - 1 * e.props.step, e.props.step) : e.props.max, s = (n = e.props.__root) === null || n === void 0 ? void 0 : n.querySelector(`#${e.props.id}_inner input[value="${o}"]`);
      e.props.preventFocus = !0, s && s instanceof HTMLInputElement && s.focus(), e.props.preventFocus = !0, e.input(Number(o)), e.props.preventFocus = !1;
    }
  }
}
function w0(e, t) {
  if (!e.props.preventFocus) {
    if (e.props.preventFocus = !0, setTimeout(() => {
      e.props.preventFocus = !1;
    }, 50), t.relatedTarget instanceof HTMLElement && t.relatedTarget.id === e.props.id + "_items_wrapper") e.props.arrow > 0 ? setTimeout(() => {
      var r, n;
      (n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.id + "_0_0")) === null || n === void 0 || n.focus();
    }) : e.props.arrow < 0 && setTimeout(() => {
      var r, n;
      (n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.id + `_${e.props.max - 1}_${e.props.stepsPerValue - 1}`)) === null || n === void 0 || n.focus();
    });
    else if (t.target instanceof HTMLInputElement) {
      if (Number(t.target.value) === e.props.step && e.value === e.props.max || Number(t.target.value) === e.props.max && e.value === e.props.step) {
        const r = document.getElementById(e.props.id + "_items_wrapper");
        return r?.focus(), void e.input(0);
      }
      e.input(Number(t.target.value));
    }
  }
}
function _0(e, t, r) {
  e.props.hoverHighlight && (e.props.disabled || (e.props.step === 1 ? (tn(e, t + 1), e.props.dragStarted && e.input(t + 1, !1)) : po(e, t, r, !!e.props.dragStarted)));
}
function k0(e) {
  tn(e);
}
function S0(e, t, r) {
  if (!e.props.disabled && r.type !== "touchstart" && (r.preventDefault(), (r.clientX !== 0 || r.clientY !== 0) && r.currentTarget instanceof HTMLElement)) return e.props.step === 1 ? e.props.deselect && Number(e.value) === t + 1 ? void e.input(0) : void e.input(t + 1) : void po(e, t, r);
}
function Gp(e) {
  return e instanceof MouseEvent ? { x: e.clientX, y: e.clientY } : { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
}
function po(e, t, r, n = !0) {
  if (!(r.currentTarget instanceof HTMLElement)) return;
  const { x: o } = Gp(r), s = r.currentTarget.getBoundingClientRect();
  let a = hs((o - s.x) / s.width + t, e.props.step);
  a = a > e.props.min ? a : e.props.min, a = a < e.props.max ? a : e.props.max, !e.props.deselect || a !== Number(e.value) || e.props.dragStarted ? n ? e.input(a, !1) : tn(e, a) : e.input(0);
}
function hs(e, t) {
  t || (t = 1);
  const r = 1 / t;
  return Math.ceil(e * r) / r;
}
const je = /* @__PURE__ */ Ee("rt"), { outer: D0, wrapper: C0, inner: L0, label: A0, prefix: T0, suffix: I0, help: E0, messages: M0, message: O0, icon: Yn } = /* @__PURE__ */ Me(je), P0 = je("itemsWrapper", () => ({ $el: "span", attrs: { style: { "flex-direction": '$rightToLeft && "row-reverse" || undefined' }, tabindex: "$value !== undefined && $value !== 0 && '-1' || '0'", id: "$id + _items_wrapper", onKeydown: "$handlers.handleWrapperKeydown", "data-disabled": "$disabled", onBlur: "$handlers.handleWrapperBlur", onMouseleave: "$hoverHighlight && $handlers.handleMouseleave" } })), F0 = je("ratingItem", () => ({ for: ["item", "index", "$max"], $el: "span", attrs: { id: '$id + "_item_" + $index', onClick: "$handlers.handleItemClick($item)", draggable: "$hoverHighlight !== true && && $disabled !== true && true", onMousemove: "$handlers.handleMousemove($item)", onDragstart: "$handlers.handleDragstart($item)", onDragend: "$handlers.handleDragend", onTouchstartPassive: "$handlers.handleTouchstart($item)", onTouchmovePassive: "$handlers.handleTouchmove" } })), V0 = je("template", () => ({ for: ["increment", "stepIndex", "$stepsPerValue"], $el: null })), N0 = je("itemLabel", () => ({ $el: "label", attrs: { id: '$id + "_label_" + $index + "_" + $stepIndex', for: '$id + "_" + $index + "_" + $stepIndex', "data-checked": '$value === $fns.getValue($item, $increment) && "true" || "false"', style: { width: '$fns.showLabel($fns.getValue($item, $increment), $stepIndex, $item) && "100%" || "0%"' } } })), B0 = je("itemLabelInner", () => ({ $el: "span", children: "$fns.getValue($item, $increment)" })), R0 = je("input", () => ({ $el: "input", attrs: { type: "radio", value: "$fns.getValue($item, $increment)", id: '$id + "_" + $index + "_" + $stepIndex', onFocus: "$handlers.handleFocus", tabindex: '$value === $fns.getValue($item, $increment) && "0" || "-1"', disabled: "$disabled", name: "$id", "data-value": "$fns.getValue($item, $increment)", checked: "$value === $fns.getValue($item, $increment) && true", onKeydown: "$handlers.handleKeydown($fns.getValue($item, $increment))" } })), H0 = je("onItemRow", () => ({ $el: "span", attrs: { style: { width: "$fns.getPercentage($itemsToPercentages, $item)", display: "flex", position: "relative", overflow: "hidden", top: "0", left: "0", bottom: "0" } } })), W0 = je("offItemRow", () => ({ $el: "span", attrs: { style: { width: "$fns.getPercentage($itemsToPercentages, $item, false)", display: "flex", "flex-direction": "row-reverse", position: "absolute", zIndex: "$offItemStyles && 100", overflow: "hidden", top: "0", right: "0" } } })), K0 = je("onItemWrapper", () => ({ $el: "div", attrs: { style: { color: "$onColor" } } })), j0 = je("offItemWrapper", () => ({ $el: "div", attrs: { style: { color: "$offColor" } } })), Y0 = () => R("$slots.onItem", () => () => "$slots.onItem", R("$slots.default", () => () => "$slots.default", Yn("rating"))), Z0 = () => R("$slots.offItem", () => () => "$slots.offItem", R("$slots.default", () => () => "$slots.default", Yn("rating"))), U0 = { schema: /* @__PURE__ */ D0(/* @__PURE__ */ C0(/* @__PURE__ */ A0("$label"), /* @__PURE__ */ L0(/* @__PURE__ */ Yn("prefix"), /* @__PURE__ */ T0(), /* @__PURE__ */ P0(/* @__PURE__ */ F0(/* @__PURE__ */ V0(/* @__PURE__ */ N0(/* @__PURE__ */ H0(/* @__PURE__ */ K0(/* @__PURE__ */ Y0())), /* @__PURE__ */ W0(/* @__PURE__ */ j0(/* @__PURE__ */ Z0())), /* @__PURE__ */ B0()), /* @__PURE__ */ R0()))), /* @__PURE__ */ I0(), /* @__PURE__ */ Yn("suffix"))), /* @__PURE__ */ E0("$help"), /* @__PURE__ */ M0(/* @__PURE__ */ O0("$message.value"))), type: "input", props: [], features: [function(e) {
  function t(r) {
    setTimeout(() => {
      const n = Array.from(document.querySelectorAll(`#${r.props.id}_items_wrapper > .formkit-ratingItem`));
      for (let o = 0; o < n.length; o++) {
        const s = n[o].querySelectorAll(".formkit-onItemWrapper"), a = n[o].querySelectorAll(".formkit-offItemWrapper");
        for (let i = 0; i < s.length; i++) s[i].style.flex = `0 0 ${n[o].getBoundingClientRect().width}px`;
        for (let i = 0; i < a.length; i++) a[i].style.flex = `0 0 ${n[o].getBoundingClientRect().width}px`;
      }
    });
  }
  e.addProps(["max", "step", "stepsPerValue", "itemsToPercentages", "rightToLeft", "onItemStyles", "offItemStyles", "hoverHighlight", "deselect", "disabled", "wrapperWidth", "onColor", "offColor"]), e.props.hoverHighlight !== !1 && e.props.hoverHighlight !== "false" && (e.props.hoverHighlight = !0), e.props.deselect = H(e.props.deselect), e.props.max = Number(e.props.max) || 5, e.props.min = Number(e.props.min) || 0, e.props.step = Number(e.props.step) || 1, e.props.numberOfSteps = e.props.max / e.props.step, e.props.lastIndex = 1 / e.props.step - 1, e.props.itemsToPercentages = {}, "disabled" in e.props && (e.props.disabled = H(e.props.disabled)), e.props.rightToLeft ? (e.props.onItemStyles = void 0, e.props.offItemStyles = { position: "absolute", top: "0", left: "0", overflow: "hidden", height: "100%", zIndex: 100 }) : e.props.onItemStyles = { position: "absolute", top: "0", left: "0", overflow: "hidden", height: "100%" }, e.props.stepsPerValue = 1 / e.props.step, e.hook.input((r, n) => {
    if (r === null || r === "" || isNaN(r)) return n(r);
    const o = Number(r), s = Number(e.props.min), a = Number(e.props.max);
    return o > a ? n(a) : e.props.min && o <= s ? n(s) : n(o);
  }), e.on("commit", ({ payload: r }) => {
    const n = Number(r || 0);
    tn(e, n);
  }), e.on("created", () => {
    e.context && (fe(`${e.props.id}_items_wrapper`, () => {
      t(e), (function(r) {
        var n;
        const o = (n = r.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${r.props.id}_items_wrapper`);
        o && new ResizeObserver(() => {
          t(r);
        }).observe(o);
      })(e), setTimeout(() => t(e), 100);
    }, e.props.__root), e.context.fns.getPercentage = (r, n, o = !0) => (o ? r.onItems : r.offItems)[n], e.context.fns.getValue = (r, n) => r + Number((n * e.props.step + e.props.step).toFixed(1)), e.context.fns.showLabel = (r, n) => {
      const o = Number(e.value || 0);
      return o === 0 && n === 0 || o && r === o || r > o && n === 0 || o > r && n === e.props.lastIndex;
    }, e.context.handlers.handleFocus = (r) => w0.call(null, e, r), e.context.handlers.handleWrapperKeydown = (r) => x0.call(null, e, r), e.context.handlers.handleWrapperBlur = (r) => v0.call(null, e, r), e.context.handlers.handleItemClick = (r) => (n) => S0.call(null, e, r, n), e.context.handlers.handleMousemove = (r) => (n) => _0.call(null, e, r, n), e.context.handlers.handleMouseleave = () => k0.call(null, e), e.context.handlers.handleDragstart = (r) => (n) => b0.call(null, e, r, n), e.context.handlers.handleMouseup = (r) => zp.call(null, e, r), e.context.handlers.handleTouchstart = (r) => (n) => y0.call(null, e, r, n), e.context.handlers.handleTouchmove = (r) => $0.call(null, e, r), e.context.handlers.handleKeydown = (r) => (n) => (function(o, s, a) {
      const i = Number(o.value);
      o.props.deselect && a.key === " " && i === s ? o.input(0) : a.key === " " && o.input(s);
    })(e, r, n));
  });
}, /* @__PURE__ */ te("rating", "star")] }, Xe = /* @__PURE__ */ Ee("ac"), { outer: q0, wrapper: z0, inner: G0, icon: et, label: X0, prefix: J0, suffix: Q0, help: ey, messages: ty, message: ry } = /* @__PURE__ */ Me(Xe), ny = Xe("input", () => ({ $el: "input", bind: "$attrs", attrs: { id: "$id", type: "text", onClick: "$handlers.click", onBlur: "$handlers.blur", onKeydown: "$handlers.keydown", onInput: "$handlers.input", onFocus: "$handlers.focus", value: "$inputText || undefined", name: "$node.name", placeholder: "$state.loading && $ui.isLoading.value || $placeholder || undefined", tabindex: '$disabled && "-1" || 0', role: "combobox", autocomplete: '$attrs.autocomplete || "off"', autocapitalize: "none", readonly: "$attrs.readonly || $state.loading || $multiple && $max && $value && $value.length >= $max && $hasHighlightedRange !== true || undefined", "data-selection-appearance": "$selectionAppearance", disabled: "$disabled || $disabledInternally || undefined", onTouchmovePassive: "$handlers.touchmove", onTouchstartPassive: "$handlers.touchmove", onTouchend: "$handlers.touchend", "aria-autocomplete": "list", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined', "aria-describedBy": "$describedBy", "aria-activedescendant": "$expanded && $activeDescendant || undefined", "aria-required": "$state.required || undefined" } })), pi = Xe("listboxButton", () => ({ $el: "div", attrs: { style: "$visibilityStyles", id: '$id + "_listbox_button"', role: "button", "aria-label": "$expanded && $ui.close.value || $ui.open.value", onClick: "$handlers.toggleListbox", onKeydown: "$handlers.toggleListboxKeydown", tabindex: '$disabled && "-1" || 0', "aria-haspopup": "true", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined', "aria-disabled": "$disabled || $state.loading || undefined", "data-disabled": "$disabled || $disabledInternally || undefined" } })), ui = Xe("selectionWrapper", () => ({ for: ["option", "index", "$selections"], $el: "div", attrs: { id: '$id + "_selection_wrapper_" + $index', key: "$option.value", "data-value": "$option.value", tabindex: '$disabled && "-1" || 0', onKeydown: "$handlers.selectionKeydown && $handlers.selectionKeydown($multiple && $option || undefined)", onClick: "$handlers.selectionClick && $handlers.selectionClick($multiple && $option || undefined)", onFocus: "$handlers.selectionFocus && $handlers.selectionFocus($multiple && $option || undefined)", onBlur: "$handlers.selectionBlur && $handlers.selectionBlur($multiple && $option || undefined)", "data-is-selection": "true", "data-active-selection": "$fns.isActiveSelection && $fns.isActiveSelection($activeSelectionValue, $option)" } })), ci = Xe("selection", () => ({ $el: "div", attrs: { id: '$id + "_selection_" + $index' } })), di = Xe("selections", () => ({ $el: "div", attrs: { "aria-live": "polite", id: '$id + "_selections"' } })), Eo = Xe("removeSelection", () => ({ $el: "button", attrs: { id: '$selectionAppearance === "option" && $multiple && $id + "_remove_selection_" + $index || $id + "_remove_selection"', tabindex: "0", title: "$ui.remove.value", type: "button", "aria-label": "$ui.remove.value", onClick: "$handlers.removeSelection && $handlers.removeSelection($multiple && $option || undefined)", onTouchend: "$handlers.removeSelection && $handlers.removeSelection($multiple && $option || undefined)", "aria-controls": "$id" } })), fi = Xe("optionLoading", "span"), mi = Xe("option", () => ({ $el: "div", if: "$value !== undefined" })), oy = /* @__PURE__ */ zs(Xe);
function sy(e) {
  e.props.selectionAppearance !== "option" || e.props.multiple || e.props.selectionRemovable === !1 || e.props.selectionRemovable === "false" || (e.props.selectionRemovable = !0), e.props.multiple || (e.props.clearSearchOnOpen = H(e.props.clearSearchOnOpen)), e.props.selectionRemovable = H(e.props.selectionRemovable), e.props.openOnClick = H(e.props.openOnClick), e.props.selectionAppearance !== "option" || e.props.multiple || (e.props.isSingleOption = !0), e.props.closeOnSelect === void 0 && (e.props.closeOnSelect = !0), e.props.selectionAppearance === void 0 && (e.props.selectionAppearance = "text-input"), e.props.closeOnSelect === void 0 && (e.props.closeOnSelect = !0), e.props.closeOnSelect ? e.props.resetSearchOnCommit = !1 : e.props.resetSearchOnCommit === void 0 && (e.props.resetSearchOnCommit = e.props.multiple), e.props.allowNewValues = H(e.props.allowNewValues);
}
function Xp(e) {
  e.addProps(["inputText", "selectionAppearance", "searchValue", "openOnClick", "filteredOptions", "search", "debounce", "showInput", "visibilityStyles", "selectionStyles", "multiple", "filter", "hasHighlightedRange", "clearOnClick", "debounce"]), e.props.debounce === void 0 ? e.props.debounce = 200 : e.props.debounce = parseInt(e.props.debounce), e.props.nonceKey = "searchValue", e.props.searchValue = "", e.props.inputText = "", e.props.filterOptions = Ke.bind(null, e), e.props.reloadOnCommit = H(e.props.reloadOnCommit), e.props.alwaysLoadOnOpen === void 0 ? e.props.alwaysLoadOnOpen = !0 : e.props.alwaysLoadOnOpen = H(e.props.alwaysLoadOnOpen), typeof e.props.filter != "function" && (e.props.filter = (t, r) => t.label.toLowerCase().includes(r.toLowerCase())), e.on("created", () => {
    e.context && Te && (e.context.handlers.focus = hi.bind(null, e), e.context.handlers.input = ay.bind(null, e), e.context.handlers.focus = hi.bind(null, e), e.context.handlers.click = iy.bind(null, e), e.context.handlers.toggleListbox = Jp.bind(null, e), e.context.handlers.toggleListboxKeydown = ly.bind(null, e), e.context.handlers.keydown = u$.bind(null, e), e.context.handlers.selectionKeydown = (t) => (r) => l$(e, t, r), e.context.handlers.searchInputTagKeydown = (t) => (r) => (function(n, o, s) {
      if (s.stopPropagation(), !n.props.disabled)
        switch (s.key) {
          case "ArrowDown":
            Kp(n);
            break;
          case "ArrowRight":
          case "ArrowLeft":
            jp(n, o, s);
            break;
          case "Delete":
          case "Backspace":
            Yp(n, o, s);
        }
    })(e, t, r), e.on("prop:options", ({ payload: t }) => {
      if ((e.props.initialOptions.length === 0 && typeof e.props.optionsLoader != "function" || !e.props.searchValue && t.length) && (e.props.initialOptions = [...t]), e.props.selections && e.props.selections.length && t.length) for (let r = 0; r < e.props.selections.length; r++) {
        const n = e.props.selections[r], o = t.find((s) => F(s) === n.value);
        o && (e.props.selections[r] = o);
      }
    }));
  }), e.on("prop:expanded", ({ payload: t }) => {
    t || Op.delete(e);
  });
}
function ay(e, t) {
  if (e.props.disabled) return;
  const r = t.target;
  e.props.inputText = r.value, e.emit("handleSearchInput", r.value), e.props.searchValue && Ke(e, e.props.searchValue, !0);
}
function iy(e, t) {
  t.stopPropagation(), e.props.disabled || e.props.disabledInternally || (e.props.attrs.onClick && e.props.attrs.onClick(t), (!e.props.expanded && e.props.openOnClick || e.props.openOnFocus) && (e.props.expanded = !0));
}
function hi(e) {
  e.props.disabled || e.props.disabledInternally || (e.props.attrs.onFocus && e.props.attrs.onFocus(), e.props.activeSelectionValue = void 0, e.props.skipOpen ? e.props.skipOpen = !1 : e.props.openOnFocus && (e.props.expanded = !0));
}
function Jp(e) {
  var t, r, n;
  e.props.disabled || e.props.disabledInternally || !((t = e.context) === null || t === void 0) && t.state.loading || (e.props.expanded = !e.props.expanded, e.props.openOnFocus || (n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`)) === null || n === void 0 || n.focus());
}
function ly(e, t) {
  t.key !== "Enter" && t.key !== " " || (t.preventDefault(), t.stopPropagation(), Jp(e));
}
const gi = /* @__PURE__ */ new WeakMap(), _n = typeof window < "u", Mo = /* @__PURE__ */ new WeakMap();
let vi = !1;
function py(e) {
  e.props.searchValue = null, e.on("commit", () => {
    e.props.searchValue = null, e.props.highlightedRange || $i(e);
  }), e.on("created", () => {
    if (!e.context || !_n) return;
    e.on("handleSearchInput", ({ payload: s }) => {
      s === "" ? (e.props.searchValue = null, e.input([])) : s && e.props.inputStd.length === 0 ? e.props.searchValue = s : s && e.props.inputStd.length > 0 && (e.props.searchValue = (function(a) {
        var i;
        const l = fn(a);
        if (a.props.highlightedRange) {
          const [p, u] = yi(a, l);
          return a.props.inputText.slice(p, u);
        }
        return a.props.inputText.slice(((i = l[l.length - 1]) === null || i === void 0 ? void 0 : i.end) + 2);
      })(e)), !e.props.expanded && s ? e.props.expanded = !0 : !s && e.props.expanded && (e.props.expanded = !1);
    }), (function(s) {
      fe(`${s.props.id}`, (a) => {
        a instanceof HTMLInputElement && Mo.set(a, s);
      }, s.props.__root), _n && !vi && (vi = !0, document.addEventListener("selectionchange", () => {
        const a = Ft();
        if (a instanceof HTMLInputElement && Mo.has(a)) {
          const i = Mo.get(a);
          i && (function(l) {
            clearTimeout(gi.get(l)), gi.set(l, setTimeout(() => {
              var p, u, c, f;
              const d = (p = l.props.__root) === null || p === void 0 ? void 0 : p.getElementById(`${l.props.id}`);
              if (d instanceof HTMLInputElement) {
                const $ = fn(l), h = $.findIndex((m) => d.selectionStart !== null ? d.selectionStart >= m.start && d.selectionStart <= m.end : d.selectionEnd !== null && d.selectionEnd >= m.start && d.selectionEnd <= m.end), y = (u = $[$.length - 1]) === null || u === void 0 ? void 0 : u.end;
                if (d.selectionStart === 0 && d.selectionEnd === ((c = l.props.inputText) === null || c === void 0 ? void 0 : c.length)) return;
                if (typeof l.props.searchValue == "string" && l.props.highlightedRange) {
                  if ($.length) {
                    const m = l.props.highlightedRange, [S, g] = yi(l, $);
                    if (d.selectionEnd !== null && (d.selectionEnd < S || d.selectionEnd > g)) {
                      const _ = m.end - m.start - (g - S), C = d.selectionEnd;
                      l.props.inputText = l.props.option.label, l.props.highlightedRange = void 0, l.props.searchValue = null, d.value = l.props.inputText, d.selectionStart = d.selectionEnd = C + (C > S ? _ : 0);
                    }
                  }
                } else if (h >= 0 && d.selectionStart !== null && (y !== ((f = l.props.inputText) === null || f === void 0 ? void 0 : f.length) || d.selectionStart < y)) {
                  const m = $[h], S = l.props.inputText.substr(0, y), g = m.start + (m.index > 0 ? 1 : 0), _ = m.end + ($.length - 1 > m.index ? -1 : 0);
                  S !== l.props.inputText && (l.props.inputText = S, d.value = S), l.props.highlightedRange = m, d.selectionStart = g, d.selectionEnd = _;
                } else l.props.highlightedRange = void 0, $i(l);
                if (d.selectionStart !== null && d.selectionStart >= y && l.props.inputText.substring(y, y + 2) !== ", ") {
                  let m = l.props.inputText.substring(0, y);
                  m = l.props.multiple && l.props.max && Array.isArray(l.props.inputStd) && l.props.inputStd.length >= l.props.max ? m : `${m},`, l.props.inputText = `${m} ${l.props.inputText.substring(y).replace(/^[,\s]{1,2}/, "")}`;
                }
              }
            }, 5));
          })(i);
        }
      }));
    })(e);
    const n = e.context.handlers.keydown;
    e.context.handlers.keydown = (s) => {
      n(s), (function(a, i) {
        var l, p, u, c;
        if (["ArrowRight", "ArrowLeft"].includes(i.key) && i.target instanceof HTMLInputElement && i.target.selectionEnd !== null && i.target.selectionStart !== null) {
          if (i.target.selectionStart === 0 && i.target.selectionEnd === ((l = a.props.inputText) === null || l === void 0 ? void 0 : l.length)) i.key === "ArrowLeft" ? t(0) : t(-1);
          else if (!a.props.searchValue) {
            a.props.searchValue = null;
            const f = fn(a), d = (p = f[f.length - 1]) === null || p === void 0 ? void 0 : p.end;
            i.target.selectionStart < d && (i.target.selectionStart = Math.max(0, i.key === "ArrowLeft" ? i.target.selectionStart - 2 : i.target.selectionEnd + 2));
          }
        } else if (["Delete", "Backspace"].includes(i.key)) a.props.highlightedRange && !a.props.searchValue ? (lo(a, a.props.highlightedRange.option), a.props.inputStd.length === 0 && (a.props.highlightedRange = void 0)) : i.target instanceof HTMLInputElement && (a.props.searchValue = null, t(-1, !0) && i.preventDefault());
        else if (i.target instanceof HTMLInputElement && i.target.selectionStart === 0 && i.target.selectionEnd === ((u = a.props.inputText) === null || u === void 0 ? void 0 : u.length) && (!((c = a.props.inputText) === null || c === void 0) && c.length) && a.props.selections.length === 0) i.preventDefault();
        else if (i.key === "Tab") return;
        i.key === "ArrowLeft" && t(-1, !0) && i.preventDefault();
      })(e, s);
    };
    const o = e.context.handlers.focus;
    e.context.handlers.focus = (s) => {
      o(e, s);
      const a = new Event("selectionchange");
      document.dispatchEvent(a);
    }, e.on("blur", () => {
      e.props.selections.length ? (e.props.inputText = e.props.selections.map((s) => s.label).join(", "), e.props.searchValue = null) : e.props.selections.length || (e.props.inputText = "", e.props.searchValue = "");
    });
  }), e.on("prop:expanded", ({ payload: n }) => {
    n || e.props.inputStd.length ? n && (e.props.options.length && !e.props.alwaysLoadOnOpen || (e.props.options = [], Ke(e, e.props.searchValue))) : (e.props.searchValue = "", e.props.inputText = "");
  }), e.on("prop:selections", () => {
    var n;
    const o = [...e.props.selections].map((a) => a.label).join(", ");
    let s = "";
    if (_n && e.isCreated) {
      const a = (n = e.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${e.props.id}`);
      if (Ft() === a && Array.isArray(e._value) && e._value.length) {
        if (e.props.max && e._value.length >= Number(e.props.max)) return;
        s = ", ";
      }
    }
    e.props.inputText = `${o}${s}`, e.props.reloadOnCommit && (e.props.searchValue = "", Ke(e, e.props.searchValue));
  });
  const t = (n, o = !1) => {
    var s, a;
    const i = (s = e.props.__root) === null || s === void 0 ? void 0 : s.getElementById(`${e.props.id}`);
    if (!(i instanceof HTMLInputElement)) return !1;
    const l = fn(e), p = n >= 0 ? n : l.length - 1;
    if (l[p] === void 0) return !1;
    const u = (a = l[p]) === null || a === void 0 ? void 0 : a.end;
    return i.selectionStart !== null && (!o || i.selectionStart >= u && i.selectionStart <= u + 2) && (i.selectionStart = l[p].start + (p > 0 ? 1 : 0), i.selectionEnd = l[p].end + (p < l.length - 1 ? -1 : 0), !0);
  };
  let r;
  e.on("selectRange", ({ payload: n }) => t(...n)), e.on("prop:highlightedRange", ({ payload: n }) => {
    e.props.hasHighlightedRange = !!n, n && e.props.expanded && r !== n.option && (r = n.option, Js(e));
  });
}
function $i(e) {
  var t;
  if (!_n) return;
  const r = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}`);
  r && r.scrollTo({ left: r.scrollWidth, behavior: "smooth" });
}
function yi(e, t) {
  var r;
  const n = e.props.highlightedRange, o = n.index, s = n.start + (o ? 1 : 0), a = t.length - 1 > o ? t[t.length - 1].end - t[o + 1].start : 0;
  return [s, ((r = e.props.inputText) === null || r === void 0 ? void 0 : r.length) - a + (t.length - 1 > n.index ? -1 : 0)];
}
function fn(e) {
  const t = Xs(e);
  return Array.isArray(t) && t.length ? t.reduce((r, n, o) => {
    var s;
    const a = ((s = r[o - 1]) === null || s === void 0 ? void 0 : s.end) || 0;
    let i = 0;
    return t.length - 1 !== o && i++, o !== 0 && i++, r.push({ option: n, index: o, start: a, end: a + n.label.length + i }), r;
  }, []) : [];
}
function Qp(e) {
  (function(t) {
    t.on("prop:expanded", ({ payload: r }) => {
      r ? (t.props.searchValue = "", t.props.options.length && !t.props.alwaysLoadOnOpen || (t.props.options = [], Ke(t, t.props.searchValue, !0))) : (t.props.searchValue = "", t.props.inputText = "");
    });
  })(e), (function(t) {
    t.on("handleSearchInput", ({ payload: r }) => {
      r && !t.props.expanded ? (t.props.searchExpand = !0, t.props.expanded = !0) : !r && t.props.expanded && (t.props.expanded = !1), t.props.searchValue = t.props.inputText;
    });
  })(e), (function(t) {
    t.on("prop:selections", () => {
      t.isCreated && (t.props.inputText = "", t.props.searchValue = "", t.props.optionRemoved || t.props.reloadOnCommit && Ke(t, t.props.searchValue, !0));
    });
  })(e);
}
function uy(e) {
  (function(t) {
    function r(o) {
      o.props.inputStd.length === 0 ? (o.props.inputText = "", o.props.searchValue = "") : (o.props.inputText = o.props.selections[0].label, o.props.searchValue = o.props.selections[0].label);
    }
    function n(o) {
      o.props.clearSearchOnOpen && !o.props.searchExpand && (o.props.inputText = "", o.props.searchValue = ""), o.props.searchValue = o.props.inputText, o.props.options.length && !o.props.alwaysLoadOnOpen || (o.props.options = [], Ke(o, o.props.searchValue, !0)), o.props.searchExpand && (o.props.searchExpand = !1);
    }
    t.on("prop:expanded", ({ payload: o }) => {
      o ? n(t) : r(t);
    });
  })(e), (function(t) {
    t.on("handleSearchInput", ({ payload: r }) => {
      r === "" ? (t.props.inputStd.length === 0 && (t.props.expanded = !1), t.input(void 0)) : r && !t.props.expanded && (t.props.searchExpand = !0, t.props.expanded = !0), t.props.searchValue = t.props.inputText;
    });
  })(e), (function(t) {
    t.on("prop:selections", ({ payload: r }) => {
      t.props.inputText = r.length ? r[0].label : "", t.props.searchValue = r.length ? r[0].label : "", t.isCreated && t.props.expanded && r.length === 0 && Ke(t, t.props.searchValue, !0);
    });
  })(e);
}
function cy(e) {
  if (e.props.multiple) if (e.props.multiple && e.props.selectionAppearance === "option") {
    let t = function() {
      return Array.isArray(e.value) ? e.value : [];
    }, r = function(n) {
      e.input(n);
    };
    Qp(e), e.on("created", () => {
      e.props.disabled && (e.props.draggable = !1), fe(`${e.props.id}_selections`, (n) => {
        if (n instanceof HTMLElement && e.context) {
          const o = { draggingClass: e.context.classes.dragging, dropZoneClass: e.context.classes.dropZone, root: e.props.__root, disabled: !e.props.draggable, plugins: [no()], touchDraggingClass: e.context.classes.touchDragging, touchDropZoneClass: e.context.classes.touchDropZone, draggable: (s) => s.hasAttribute("data-is-selection") };
          ve({ parent: n, getValues: t, setValues: r, config: o }), e.on("prop:disabled", ({ payload: s }) => {
            o.disabled = s, ve({ parent: n, getValues: t, setValues: r, config: o });
          }), e.on("prop:draggable", ({ payload: s }) => {
            o.disabled = !s, ve({ parent: n, getValues: t, setValues: r, config: o });
          });
        }
      }, e.props.__root);
    });
  } else e.props.multiple && e.props.selectionAppearance === "text-input" && py(e);
  else uy(e);
}
const dy = { schema: /* @__PURE__ */ q0(/* @__PURE__ */ z0(/* @__PURE__ */ X0("$label"), /* @__PURE__ */ G0(/* @__PURE__ */ et("prefix"), /* @__PURE__ */ J0(), /* @__PURE__ */ ny(), /* @__PURE__ */ R("$multiple !== true && $selectionAppearance === option && $expanded === false", /* @__PURE__ */ di(/* @__PURE__ */ ui(/* @__PURE__ */ ci(/* @__PURE__ */ mi(/* @__PURE__ */ R("$state.loading", /* @__PURE__ */ fi("$ui.isLoading.value"), "$option.label"))), /* @__PURE__ */ R("$state.loading && $isSingleOption !== true && $optionLoaderValues.includes($option.value)", /* @__PURE__ */ et("loader")), /* @__PURE__ */ R("$selectionRemovable && $isSingleOption", /* @__PURE__ */ Eo(/* @__PURE__ */ et("close")))))), /* @__PURE__ */ R("$state.loading && ($isSingleOption !== true || $selections.length === 0)", /* @__PURE__ */ et("loader")), /* @__PURE__ */ R('$selectionRemovable && $selectionAppearance === "text-input" && $selections.length > 0', /* @__PURE__ */ Eo(/* @__PURE__ */ et("close")), /* @__PURE__ */ R('$selectionAppearance === "text-input" || ($selectionAppearance === "option" && $multiple)', /* @__PURE__ */ pi(/* @__PURE__ */ et("select")))), /* @__PURE__ */ R("$isSingleOption && ($inputStd.length === 0 || $selectionRemovable === undefined || ($expanded) || $state.loading || $optionLoaderValues.length > 0)", /* @__PURE__ */ pi(/* @__PURE__ */ et("select"))), /* @__PURE__ */ oy(), /* @__PURE__ */ Q0(), /* @__PURE__ */ et("suffix")), /* @__PURE__ */ R("$multiple && $selectionAppearance === option", /* @__PURE__ */ di(/* @__PURE__ */ ui(/* @__PURE__ */ ci(/* @__PURE__ */ mi(/* @__PURE__ */ R("$state.loading && $fns.hasOptionLoaderValue($option)", /* @__PURE__ */ fi("$ui.isLoading.value"), "$option.label"))), /* @__PURE__ */ Eo(/* @__PURE__ */ et("close")))))), /* @__PURE__ */ ey("$help"), /* @__PURE__ */ ty(/* @__PURE__ */ ry("$message.value"))), type: "input", family: "dropdown", props: [], features: [
  /* @__PURE__ */ te("select", "select"),
  /* @__PURE__ */ te("close", "close"),
  /* @__PURE__ */ te("selected", "check"),
  /* @__PURE__ */ te("loader", "spinner"),
  /* @__PURE__ */ ie("isLoading"),
  /* @__PURE__ */ ie("loadMore"),
  /* @__PURE__ */ ie("remove"),
  /* @__PURE__ */ ie("open"),
  /* @__PURE__ */ ie("close"),
  mt,
  /* @__PURE__ */ ea.bind(null, sy, Xp, cy),
  en
] }, se = /* @__PURE__ */ Ee("dp"), { outer: fy, wrapper: my, inner: hy, icon: Dt, label: gy, prefix: vy, suffix: $y, help: yy, messages: by, message: xy } = /* @__PURE__ */ Me(se), wy = se("input", () => ({ $el: "input", bind: "$attrs", attrs: { name: "$node.name", id: "$id", onKeydown: "$handlers.inputKeydown", value: "$inputText", onInput: "$handlers.dateInput", onClick: "$pickerOnly && $handlers.open", onBlur: "$handlers._blur", onFocus: "$handlers.focus", readonly: "$pickerOnly || $expanded", disabled: "$disabled" } })), _y = se("panelWrapper", () => ({ $el: "div", if: "$expanded", attrs: { id: '$id + "_popover"', role: "dialog", onBlur: "$handlers._blurOut()", tabindex: "-1", popover: "$popover", "aria-modal": "true", "aria-label": "Choose date", "data-panel": "$panel", style: { if: "$usePopover", then: { margin: 0, top: '$popoverCoordinates.y + "px"', left: '$popoverCoordinates.x + "px"', width: '$popoverCoordinates.width + "px"' } } } })), ky = se("next", () => ({ $el: "button", if: "$showPagination", attrs: { id: "$id + _next_button", type: "button", onClick: "$handlers.next" } })), Sy = se("nextLabel", "span"), Dy = se("prev", () => ({ $el: "button", if: "$showPagination", attrs: { id: "$id + _prev_button", type: "button", onClick: "$handlers.prev" } })), Cy = se("prevLabel", "span"), Ly = se("calendar", () => ({ if: '$panel === "day"', $el: "table", for: ["month", "$calendar"], attrs: { key: '$fns.format($month.monthDay, "YYYY-MM")' } })), Ay = se("calendarWeeks", () => ({ $el: "tbody" })), Ty = se("calendarHeader", () => ({ $el: "thead" })), Iy = se("weekDays", () => ({ $el: "tr" })), Ey = se("weekDay", () => ({ $el: "th", for: ["day", "$month.weeks.0"], attrs: { "aria-label": '$fns.format($day, "dddd")' } })), My = se("week", () => ({ $el: "tr", for: ["week", "weekIndex", "$month.weeks"] })), Oy = se("dayCell", () => ({ $el: "td", for: ["day", "dayIndex", "$week"], attrs: { key: "$day", onClick: "$handlers.setDate($day)", onKeydown: "$handlers.keyDown", onMouseenter: "$handlers.mouseEnter($day)", onMouseleave: "$handlers.mouseLeave", onBlur: "$handlers._blurOut(day)", tabindex: '$fns.sameDay($day) && "0" || "-1"', "data-is-extra": "$fns.notInMonth($month.monthDay, $day)", "data-disabled": "$fns.isDisabled($day)", "aria-selected": "$selectedWeek === $weekIndex && $selectedDay === $dayIndex", "aria-label": '$fns.format($day, "long")' } })), Py = se("day", "div"), Fy = se("openButton", () => ({ $el: "div", attrs: { style: "$visibilityStyles", id: '$id + "_listbox_button"', type: "div", role: "button", onClick: "$handlers.open", onKeydown: "$handlers.openKeydown", tabIndex: '$pickerOnly && "-1" || "0"', "data-disabled": "$disabled", "aria-disabled": "$disabled", "aria-label": '$value && ($ui.changeDate.value + ", " + $inputText) || $ui.chooseDate.value', "aria-haspopup": "true", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined' } })), Vy = se("years", () => ({ if: '$panel === "year"', $el: "ul", attrs: { id: '$id + "_years"' } })), Ny = se("year", () => ({ for: ["year", "yearIndex", "$years"], $el: "li", attrs: { key: '$: "year" + $fns.format($year, "YYYY")', onClick: "$handlers.setDate($year)", onKeydown: "$handlers.keyDown", onMouseenter: "$handlers.mouseEnter($year)", onMouseleave: "$handlers.mouseLeave", onBlur: "$handlers._blurOut(year)", tabindex: '$fns.sameYear($year) && "0" || "-1"', "aria-selected": "$selectedYear === $yearIndex", "data-disabled": "$fns.isDisabledYear($year)", "aria-label": "$fns.format($year, $yearFormat)" } })), By = se("months", () => ({ if: '$panel === "month"', $el: "ul" })), Ry = se("month", () => ({ $el: "li", for: ["month", "index", "$months"], attrs: { key: "$month", onClick: "$handlers.setDate($month)", onKeydown: "$handlers.keyDown", onMouseenter: "$handlers.mouseEnter($month)", onMouseleave: "$handlers.mouseLeave", onBlur: "$handlers._blurOut(month)", tabindex: '$fns.sameMonth($month) && "0" || "-1"', "aria-selected": "$selectedMonth === $index", "data-disabled": "$fns.isDisabledMonth($month)" } })), Hy = se("panelHeader", () => ({ $el: "header", attrs: { "aria-live": "polite" } })), Wy = se("yearsHeader", () => ({ $el: "div", if: '$panel === "year"' })), Ky = se("monthsHeader", () => ({ $el: "div", if: '$panel === "month"' })), jy = se("daysHeader", () => ({ $el: "div", if: '$panel === "day"' })), Yy = se("timeHeader", () => ({ $el: "div", if: '$panel === "time"' })), Oo = se("yearButton", () => ({ $el: "button", attrs: { type: "button", id: "$id + _year_button", onClick: "$handlers.jumpTo(year)" }, children: "$fns.format($renderedDate, $yearFormat)" })), bi = se("monthButton", () => ({ $el: "button", attrs: { type: "button", id: "$id + _month_button", onClick: "$handlers.jumpTo(month)" }, children: "$fns.format($renderedDate, $monthButtonFormat)" })), Zy = se("dayButton", () => ({ $el: "button", attrs: { type: "button", id: "$id + _day_button", onClick: "$handlers.jumpTo(day)", tabindex: "2" }, children: "$fns.format($renderedDate, $dayButtonFormat)" })), Uy = se("removeSelection", () => ({ $el: "button", if: "$clearable && $_value", attrs: { id: '$id + "_remove_selection"', type: "button", onClick: "$handlers.clear", "aria-controls": "$id" } })), qy = se("time", () => ({ $el: "div", if: '$panel === "time"' })), zy = se("timeInput", () => ({ $el: "input", attrs: { type: "time", value: "$localTime", onInput: "$handlers.localTime", onKeydown: "$handlers.keyDown", spellcheck: "false", onBlur: "$handlers._blurOut(time)" } })), Gy = se("panelClose", () => ({ $el: "button", if: "$showPanelClose && ($inline === undefined || $inline === false)", attrs: { type: "button", class: "$classes.panelClose", onClick: "$handlers.closePanel", tabindex: -1, "aria-label": "$ui.close.value" } })), { overlayPlaceholder: Xy, overlayLiteral: Jy, overlayChar: Qy, overlayEnum: eb, overlay: tb, overlayParts: rb, overlayInner: nb } = /* @__PURE__ */ Ip(se), ob = se("panel", "div"), it = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakSet(), sb = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ new WeakSet(), $t = /* @__PURE__ */ new WeakMap(), Zn = /[\uD800-\uDBFF]/, Tt = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), Vr = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakSet(), br = /* @__PURE__ */ new WeakMap(), co = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap();
let vs = !1;
const xi = () => {
  vs = !0, setTimeout(() => {
    vs = !1;
  }, 500);
}, ab = { "#": { type: "char", pattern: /\d/, token: "#", placeholder: "_", selectDirection: "right" }, a: { type: "char", pattern: /[a-zA-Z]/, token: "a", placeholder: "_", selectDirection: "left" }, h: { type: "char", pattern: /[0-9a-fA-F]/, token: "h", placeholder: "_", selectDirection: "left" }, "*": { type: "char", pattern: /./, token: "*", placeholder: "_", selectDirection: "left" } }, wi = /* @__PURE__ */ new WeakMap(), Zr = typeof window < "u";
let Sn = !1, _i = !1;
function ib() {
  Zr && !_i && (_i = !0, document.addEventListener("selectionchange", () => {
    const e = Ft();
    if (!(e instanceof HTMLInputElement)) return;
    if (Et.has(e)) return (function(r) {
      const n = Et.get(r);
      if (n) {
        const [o, s] = n, [a, i] = Ie(r), l = i.indexOf(o);
        if (l === -1) return void Et.delete(r);
        const p = a[l], u = [p[0] + s[0], p[1], "none"];
        Vt(Ge(r), u) || Un(r, u);
      }
    })(e);
    if ($t.get(e) !== "select") return;
    const t = Ge(e);
    if (!Vt(t, wi.get(e))) {
      if (wi.set(e, t), fr.has(e)) return fr.delete(e);
      e.dispatchEvent(new CustomEvent("selection", { detail: Ge(e) }));
    }
  }));
}
function ta(e, t, r) {
  var n;
  if (ib(), it.has(e)) return;
  it.set(e, []), t.reverse && ar.add(e), t.prefix && br.set(e, t.prefix), t.suffix && co.set(e, t.suffix), tu(e, t.pattern, t.partOverrides, t.explicitParts);
  const o = uo.get(e), s = o?.some((p) => ft(p)), a = o?.some((p) => (function(u) {
    return !!u && u.type === "group" && Array.isArray(u.parts);
  })(p));
  if (s && a) throw new Error("Cannot use enums and groups in the same mask.");
  const i = s ? "select" : (n = t.mode) !== null && n !== void 0 ? n : "shift";
  if (a && i === "select") throw new Error("Cannot use groups in select mode.");
  (t.placeholder || i === "select") && gs.add(e), $t.set(e, i), t.onChange && Vr.set(e, t.onChange);
  let l = !1;
  e.addEventListener("beforeinput", (p) => {
    if (Sn || p.inputType === "insertLineBreak") return;
    if (p.inputType.startsWith("history")) return (function($, h) {
      $.addEventListener("input", (y) => {
        var m;
        y.preventDefault(), y.stopImmediatePropagation();
        const S = it.get($);
        if (S?.length) {
          const g = ((m = dr.get($)) !== null && m !== void 0 ? m : S.length - 1) + (h.endsWith("Undo") ? -1 : 1), _ = S[g];
          if (!_) return;
          nu($, _), $.setSelectionRange(..._.selectionAfter), dr.set($, g), Vr.has($) && Vr.get($)(_, $);
        }
      }, { once: !0 });
    })(e, p.inputType);
    p.preventDefault(), l = !0;
    const u = (c = p.inputType).startsWith("insert") ? "insert" : !!c.startsWith("delete") && (c === "deleteContentForward" ? "deleteContentForward" : "deleteContentBackward");
    var c;
    const f = Ge(e), d = e.value;
    u && Ur(e, { type: u, selectionBefore: f, data: p.data, valueBefore: d, suffix: t.suffix, prefix: t.prefix });
  }), e.addEventListener("input", (p) => {
    l = !1, "data" in p || !l && r && (r.input(e.value, !1), r.props._maskValue = e.value);
  }), i === "select" && e.addEventListener("keydown", (p) => {
    switch (p.key) {
      case "ArrowRight":
        return p.preventDefault(), No(e);
      case "ArrowLeft":
        return p.preventDefault(), No(e, -1);
      case "ArrowUp":
        return void (Ei(e, 1) && p.preventDefault());
      case "ArrowDown":
        return void (Ei(e, -1) && p.preventDefault());
      case "Tab":
        return vs ? void p.preventDefault() : void (No(e, p.shiftKey ? -1 : 1) && p.preventDefault());
    }
  }), e.addEventListener("focus", () => (function(p) {
    var u;
    const c = gs.has(p), f = $t.get(p);
    if (c) {
      let d = null, $ = null, h = !1;
      const y = f === "shift" ? 0 : 1, m = p.value;
      ys(p, { data: m, selectionBefore: [0, 0, "none"] }, f === "shift" ? "" : m, (g, _) => (d === null && _.type === "char" && (d = g.pos - y), (lt(_) || ft(_)) && g.value.endsWith(_.placeholder) ? ($ = g.pos - y, !1) : (_.type === "char" && (h = !0), !0)));
      const S = (u = $ ?? (h ? m.length : d)) !== null && u !== void 0 ? u : null;
      if (S !== null) {
        let g = [S, S, "none"];
        if ($t.get(p) === "select") {
          const [_] = Ie(p), C = pt(p, g);
          C !== void 0 && C in _ && (g = _[C]);
        }
        return (function(_, C, k = 50) {
          Tt.set(_, Nr(_, C));
          const D = async () => {
            if (!Zr || Ft() !== _) return;
            $t.get(_) === "select" && (await new Promise((L) => setTimeout(L, 10)), (function(L) {
              let x = Ge(L);
              if (x[0] === x[1] && x[0] === 0 || L.value.length === x[1] && x[0] === 0) return;
              x = $s(L, x);
              const [b] = Ie(L), v = pt(L, x), T = x[0];
              v !== void 0 && b.some((V) => T >= V[0] && T < V[1]) && Tt.set(L, Nr(L, b[v]));
            })(_));
            const w = Tt.get(_);
            w && _.setSelectionRange(...w);
          };
          D(), document.addEventListener("selectionchange", D), setTimeout(() => {
            document.removeEventListener("selectionchange", D), Tt.delete(_);
          }, k);
        })(p, g);
      }
    }
  })(e)), e.addEventListener("selection", (p) => (function(u, c) {
    if (Tt.get(u)) return;
    cu(u), c = $s(u, c);
    const [f] = Ie(u), d = pt(u, c), $ = d !== void 0 && Nr(u, f[d]);
    $ && !Vt(c, $) && Un(u, $, !0);
  })(e, p.detail)), Ur(e, { type: "insert", selectionBefore: [0, 0, "forward"], data: e.value, valueBefore: "", suffix: t.suffix, prefix: t.prefix });
}
function ki(e) {
  var t, r;
  if (Et.has(e)) return;
  const n = (t = it.get(e)) !== null && t !== void 0 ? t : [], o = n[(r = dr.get(e)) !== null && r !== void 0 ? r : n.length - 1];
  if (o) {
    const s = o.selectionAfter, [a, i] = Ie(e, o.valueAfter), l = pt(e, s, [a, i]);
    if (l !== void 0 && l in a) {
      const p = i[l], u = a[l], c = [s[0] - u[0], s[1] - u[0], "none"];
      Et.set(e, [p, c]);
    }
  }
}
function Si(e) {
  Et.delete(e);
}
function Di(e, t, r) {
  const n = typeof e == "string" || !it.has(e), o = typeof e == "string" ? eu(e) : e;
  if (n) t.prefix && br.set(o, t.prefix), t.suffix && co.set(o, t.suffix), o.value = ra(o, o.value), ta(o, t, r);
  else {
    const s = na(o), a = o.value;
    o.value = "", Ur(o, { type: "insert", selectionBefore: [0, s ? s.valueAfter.length : 0, "none"], valueBefore: s ? s.valueAfter : "", data: a, suffix: t.suffix, prefix: t.prefix });
  }
  return o.value;
}
function eu(e) {
  return { value: e, selectionStart: 0, selectionEnd: 0, scrollWidth: 0, clientWidth: 0, addEventListener: () => {
  }, dispatchEvent: () => {
  }, setSelectionRange: () => {
  } };
}
function tu(e, t, r, n, o) {
  o = e && ar.has(e) || o;
  const s = (n ?? (function(f) {
    const d = Object.values(ab);
    if (!f) return d;
    const $ = { ...f }, h = [];
    for (const m of d) if (!mr(m)) {
      if ("token" in m && m.token in f) {
        const S = { ...m, ...f[m.token] };
        Ci(S) && h.push(S), delete $[m.token];
        continue;
      }
      h.push(m);
    }
    const y = Object.values($);
    for (const m of y) Ci(m) ? h.push(m) : console.warn(`Invalid ${m.type} token`, m);
    return h;
  })(r)).sort((f, d) => {
    const $ = "token" in f ? f.token.length : -1, h = "token" in d ? d.token.length : -1;
    return $ === h ? 0 : $ > h ? -1 : 1;
  });
  let a = [];
  [t, a] = (function(f, d, $, h) {
    let y, m = 0, S = "", g = "", _ = "";
    const C = [];
    for (; S = Se(f); ) S === d && y !== h ? (m++, m > 1 && (_ += S)) : S === $ && m && y !== h ? (m--, m === 0 ? (g += `{$${C.length}}`, C.push(_), _ = "") : _ += S) : m ? _ += S : y !== h || S !== d && S !== $ ? g += S : g = `${g.substring(0, g.length - 1)}${S}`, y = S, f = f.substring(S.length);
    return [g, C];
  })(t, "{", "}", "\\");
  const i = a.length;
  t = s.reduce((f, d, $) => "token" in d ? f.replaceAll(`\\${d.token}`, "{“!”}").replaceAll(d.token, `{$${i + $}}`).replaceAll("{“!”}", d.token) : f, t);
  const l = (function(f, d, $) {
    return f.reduce((h, y) => {
      const [m, S] = (function(C) {
        const [k, ...D] = C.split("|"), w = D.reduce((L, x) => {
          const [b, v = !0] = x.split(":");
          return Object.assign(L, { [b]: v });
        }, {});
        return [k, w];
      })(y);
      let g = tu(null, m, void 0, d, $);
      g = g.map((C) => {
        const k = { ...C };
        if (k.type === "char" && S.placeholder) k.placeholder = S.placeholder;
        else if (k.type === "enum") throw new Error("Groups cannot contain enums.");
        return k;
      });
      const _ = { type: "group", parts: g, ...S };
      return h.push(_), h;
    }, []);
  })(a, s, o).concat(s), p = /\{\$\d+\}/g, u = t.match(p), c = t.split(p).reduce((f, d, $) => {
    if (d && (d = d.replaceAll("\\", ""), f.push({ type: "literal", value: o ? [...d].reverse().join("") : d })), u && u[$]) {
      const h = u[$], y = Number(h.substring(2, h.length - 1));
      !isNaN(y) && l[y] && f.push(l[y]);
    }
    return f;
  }, []);
  return o && c.reverse(), e && uo.set(e, c), c;
}
function Ci(e) {
  return !!e && (mr(e) || lt(e) || ft(e));
}
function lt(e) {
  return !!e && e.type === "char" && e.pattern instanceof RegExp && ru(e);
}
function ft(e) {
  return !!e && e.type === "enum" && Array.isArray(e.values) && ru(e);
}
function ru(e) {
  return !!e && "placeholder" in e && "token" in e;
}
function mr(e) {
  return !!e && e.type === "literal" && typeof e.value == "string";
}
function Vt(e, t) {
  return e === t || e !== void 0 && t !== void 0 && e[0] === t[0] && e[1] === t[1];
}
function Ge(e) {
  var t, r;
  return [(t = e.selectionStart) !== null && t !== void 0 ? t : e.value.length, (r = e.selectionEnd) !== null && r !== void 0 ? r : e.value.length, "none"];
}
function Ur(e, t) {
  var r;
  ar.has(e) && Mi(t);
  let n = !1;
  switch (kn.set(e, "playing"), t.type) {
    case "insert":
      n = (function(o, s) {
        let a = Li(s);
        const i = s.selectionBefore, l = (function(u, c) {
          var f, d, $;
          if ($t.get(u) === "select") {
            const [h, y] = Ie(u), m = h.findIndex((g) => Vt(g, c.selectionBefore)), S = (f = y[m]) !== null && f !== void 0 ? f : null;
            if (lt(S)) {
              const g = c.selectionBefore, _ = g[1] - g[0], C = c.valueBefore.substring(g[0], g[1]), k = S.selectDirection === "left", D = su(C, S), w = k ? 0 : (function(x, b, v) {
                if (!x) return 0;
                let T = "";
                for (; x.length; ) {
                  const V = Se(x);
                  x = x.substring(V.length), b.pattern.test(V) && (T += V);
                }
                return Math.min(Math.max(T.length, 1), v);
              })(c.data, S, _);
              if (D.length >= _) return k || (c.insertPos = g[1] - w), ((d = S.selectFill) !== null && d !== void 0 ? d : S.placeholder).repeat(_);
              const L = (($ = S.selectFill) !== null && $ !== void 0 ? $ : S.placeholder).repeat(_ - D.length - (k ? 0 : w));
              return c.insertPos = k ? g[0] + D.length : g[1] - w, S.selectDirection === "left" ? `${D}${L}` : `${L}${D}${S.placeholder}`;
            }
            if (ft(S)) {
              const g = c.selectionBefore;
              return c.valueBefore.substring(g[0], g[1]);
            }
          }
          return "";
        })(o, s);
        a = `${a.substring(0, i[0])}${l}${a.substring(i[1])}`;
        const p = ys(o, s, a);
        return sb.set(o, p.endPos), { ...s, valueAfter: p.value, selectionAfter: ub(o, p), unmasked: p.unmasked, complete: p.complete, meta: p.meta };
      })(e, t);
      break;
    case "deleteContentBackward":
    case "deleteContentForward":
      n = (function(o, s) {
        const a = Li(s), i = s.selectionBefore, l = ar.has(o);
        let p = i[0], u = i[1];
        p === u && (s.type !== "deleteContentBackward" || l ? u += Dn(a, p) : p -= Dn(a, p, "backward"));
        const c = $t.get(o);
        let f = "";
        if (c === "select") {
          const [h, y] = Ie(o), m = pt(o, [p, u, "none"]);
          if (m !== void 0) {
            const S = y[m], g = h[m];
            lt(S) ? f = S.placeholder.repeat(u - p) : ft(S) && ([f, p] = Vt(g, Ge(o)) ? [S.placeholder, p] : (function(_, C, k, D) {
              const w = D.valueBefore, L = Dn(w, D.selectionBefore[0], "backward"), x = Math.max(k[0], D.selectionBefore[0] - L), b = w.substring(k[0], x), v = rn(C.values, b);
              let T = v?.substring(b.length);
              return v && !T && iu(C.values, v) && (T = v), [T ?? C.placeholder, T ? x : k[0]];
            })(0, S, g, s));
          }
        }
        const d = `${a.substring(0, p)}${f}${a.substring(u)}`, $ = ys(o, s, d);
        return { ...s, valueAfter: $.value, selectionAfter: mb(o, $, s, p), unmasked: $.unmasked, complete: $.complete, meta: $.meta };
      })(e, t);
  }
  if (ar.has(e) && n && Mi(n), n && (function(o, s) {
    s.prefix && (s.valueAfter = s.prefix + s.valueAfter, s.selectionAfter = Nr(o, s.selectionAfter)), s.suffix && (s.valueAfter += s.suffix);
  })(e, n), n && (function(o) {
    return o.valueBefore !== o.valueAfter || o.selectionBefore[0] !== o.selectionAfter[0] || o.selectionBefore[1] !== o.selectionAfter[1];
  })(n)) {
    Vr.has(e) && Vo.set(e, () => {
      Vo.delete(e), n && Vr.get(e)(n, e);
    }), kn.set(e, "beforeCallback");
    let o = (r = it.get(e)) !== null && r !== void 0 ? r : [];
    const s = dr.get(e);
    s && (o = o.slice(0, s), dr.delete(e)), o.push(n), it.set(e, o), Zr && Ft() === e && typeof document.execCommand == "function" && !Sn ? (Un(e, [0, e.value.length, "forward"], !0), Sn = !0, document.execCommand("insertText", void 0, n.valueAfter), Sn = !1) : nu(e, n), Zr && Ft() === e && Un(e, n.selectionAfter);
    const a = Vo.get(e);
    a && a(), cu(e);
  }
  kn.set(e, "complete");
}
function ra(e, t) {
  var r, n;
  const o = (r = br.get(e)) !== null && r !== void 0 ? r : "", s = (n = co.get(e)) !== null && n !== void 0 ? n : "";
  return o && t.startsWith(o) && (t = t.substring(o.length)), s && t.endsWith(s) && (t = t.substring(0, t.length - s.length)), t;
}
function Nr(e, t) {
  const r = br.get(e), n = [...t];
  return r && (n[0] += r.length, n[1] += r.length), n;
}
function $s(e, t) {
  const r = br.get(e), n = [...t];
  return r && (n[0] -= r.length, n[1] -= r.length), n;
}
function Li(e) {
  let t = e.valueBefore;
  const r = e.selectionBefore;
  if (e.suffix && t.endsWith(e.suffix) && (t = t.substring(0, t.length - e.suffix.length), e.valueBefore = t, r[0] >= t.length && (r[0] = t.length), r[1] >= t.length && (r[1] = t.length)), e.prefix && t.startsWith(e.prefix)) {
    const n = e.prefix.length;
    t = t.substring(n), e.valueBefore = t, r[0] = Math.max(r[0] - n, 0), r[1] = Math.max(r[1] - n, 0);
  }
  return t;
}
function Un(e, t, r = !1) {
  r && (fr.add(e), setTimeout(() => fr.delete(e), 5)), Tt.get(e) && Tt.set(e, t), e.setSelectionRange(...t);
}
function nu(e, t, r = "After") {
  if (e.value = t[`value${r}`], Zr) {
    const n = new InputEvent("input", { inputType: t.type === "insert" ? "insertText" : t.type, data: t.data });
    e.dispatchEvent(n);
  }
}
function Se(e) {
  if (e == null) return "";
  const t = Zn.test(e.charAt(0)) && Zn.test(e.charAt(1)) ? 2 : 1;
  return e.substring(0, t);
}
function Dn(e, t, r = "forward") {
  if (r === "backward") return t === 0 ? 0 : t === 1 ? 1 : Zn.test(e.charAt(t)) && Zn.test(e.charAt(t - 1)) ? 2 : 1;
  const n = e.length - t;
  return n === 0 ? 0 : n === 1 ? 1 : Se(e.substring(t)).length;
}
function ou(e, t) {
  const r = Se(e.data), n = r.length;
  if (e.value += r, e.pos += n, typeof e.data == "string" && (e.data = e.data.substring(n), e.data.length || (e.endPos = e.pos)), t) return t.substring(n);
}
function Ai(e) {
  const t = Se(e.buffer), r = t.length;
  e.value += t, e.pos += r, e.buffer = e.buffer.substring(r);
}
function lb(e, t) {
  const r = Se(t), n = r.length;
  return e.value += r, e.pos += n, t.substring(n);
}
function pb(e, t) {
  for (; t.buffer; ) {
    const r = Se(t.buffer);
    if (e.pattern.test(r) || t.placeholder && e.placeholder === r) return void (t.mode !== "replace" && t.mode !== "select" || (t.buffer = t.buffer.substring(r.length)));
    t.buffer = t.buffer.substring(r.length);
  }
}
function Ti(e, t) {
  const r = e.values.concat([e.placeholder]).map((n) => n.toLowerCase()).sort((n, o) => n.length > o.length ? -1 : 1);
  for (; t.buffer; ) {
    const n = t.buffer.toLowerCase(), o = r.find((s) => n.startsWith(s));
    if (o) {
      const s = t.buffer.substring(0, o.length);
      return t.buffer = t.buffer.substring(o.length), s;
    }
    t.buffer = t.buffer.substring(Dn(t.buffer, 0));
  }
  return null;
}
function su(e, t) {
  let r = e.replaceAll(t.placeholder, "");
  const n = t.selectDirection === "left";
  if (t.selectFill) {
    const s = new RegExp(`${n ? "" : "^"}${o = t.selectFill, o.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")}+${n ? "$" : ""}`);
    r = r.replace(s, "");
  }
  var o;
  return r;
}
function ub(e, t) {
  let r = [t.endPos, t.endPos, "forward"];
  if (t.mode !== "select") return r;
  const n = Ge(e);
  r = [n[0], t.endPos, "none"];
  const [o, s] = Ie(e, t.value), a = pt(e, r, [o, s]);
  if (a === void 0 || !(a in o) || !(a in s)) return r;
  const i = o[a], l = s[a], p = t.value.slice(i[0], i[1]);
  if (lt(l) && su(p, l).length === p.length && a < o.length - 1) return xi(), o[a + 1];
  if (ft(l) && t.insertPos >= i[0] && t.insertPos <= i[1]) {
    if (t.cycle) return i;
    const u = (function(f, d, $) {
      if (f.originalData === null) return 0;
      const h = f.insertPos >= d ? f.value.substring(d, f.insertPos) : "", y = `${h}${f.originalData}`, m = rn($.values, y);
      return m ? au(y, m).length - h.length : 0;
    })(t, i[0], l);
    if (t.insertPos + u === i[1]) return iu(l.values, p) ? [i[1], i[1], "forward"] : (xi(), o[a + 1] ? o[a + 1] : o[a]);
    const c = [t.insertPos + u, i[1], "none"];
    return Vt(c, n) || (fr.add(e), setTimeout(() => fr.delete(e), 5)), c;
  }
  return i;
}
function ys(e, t, r, n) {
  var o, s;
  const a = (o = uo.get(e)) !== null && o !== void 0 ? o : [], i = { pos: 0, insertPos: (s = t.insertPos) !== null && s !== void 0 ? s : t.selectionBefore[0], range: t.selectionBefore, chars: 0, placeholder: gs.has(e), buffer: r, data: t.data, originalData: t.data, value: "", mode: $t.get(e) || "replace", endPos: t.selectionBefore[0], rangeParts: Ie(e), unmasked: "", complete: !0, cycle: t.cycle, meta: [] };
  return bs(a, i, void 0, n), i;
}
function bs(e, t, r, n) {
  var o, s;
  const a = { ...t };
  r?.placeholder && (t.placeholder = !0);
  const i = r?.repeat && ((o = r.nextPart) === null || o === void 0 ? void 0 : o.type) === "literal" ? r.nextPart.value : null;
  let l = 0;
  const p = e.reduce((c, f) => c + (f.type === "char" ? 1 : 0), 0), u = t.chars;
  for (const c of e) {
    const f = e[l + 1];
    switch (c.type) {
      case "literal":
        db(c, t, e.at(-1) === c);
        break;
      case "char":
        fb(c, t, i);
        break;
      case "enum":
        cb(c, t);
        break;
      case "group":
        const $ = { repeat: (s = c.repeat) !== null && s !== void 0 && s, nextPart: f, repeats: 0, placeholder: !!c.placeholder };
        bs(c.parts, t, $, n);
    }
    if (n && n(t, c) === !1)
      break;
    const d = mr(f) && l + 2 === e.length && u !== t.chars;
    if (!(t.buffer || t.data || t.placeholder || d)) break;
    l++;
  }
  if (t.chars < p && (t.complete = !1), r) {
    const c = t.chars - u, f = c === p, d = !(!t.data || i && t.data.startsWith(i) && t.insertPos <= t.pos), $ = !(t.buffer && i && t.buffer.startsWith(i) && t.insertPos >= t.pos + i.length) && (t.buffer || d);
    if (r.repeat && $ && f) return r.repeats++, bs(e, t, r, n);
    if (!f) {
      t.complete = !1;
      const h = e.reverse().find((y) => y.type === "literal");
      e.reverse(), mr(h) && t.value.endsWith(h.value) && (t.value = t.value.substring(0, t.value.length - h.value.length), t.pos = t.value.length);
    }
    p > 1 && c < p && c !== 0 && t.insertPos <= t.pos ? t.data = "" : r.repeat && !f && r.repeats && Object.assign(t, a);
  }
  t.placeholder = a.placeholder;
}
function cb(e, t) {
  const [r, n] = t.rangeParts, o = r[n.indexOf(e)];
  if (o && (t.insertPos <= t.pos || t.insertPos >= o[0] && t.insertPos <= o[1]) && t.data) {
    const s = t.buffer.substring(0, t.insertPos - t.pos), a = `${s}${t.data}`, i = rn(e.values.concat([e.placeholder]), a);
    if (i) {
      const l = au(a, i);
      return t.data = t.data.substring(l.length), t.value += i, i !== e.placeholder ? t.unmasked += i : t.complete = !1, t.meta.push({ type: i !== e.placeholder ? "enum" : "placeholder", value: i }), s ? t.buffer = t.buffer.substring(s.length) : Ti(e, t), t.endPos = t.pos + l.length, void (t.pos = t.value.length);
    }
    t.data = "";
  }
  if (t.buffer) {
    const s = Ti(e, t);
    if (s) return t.value += s, s !== e.placeholder ? t.unmasked += s : t.complete = !1, t.meta.push({ type: s !== e.placeholder ? "enum" : "placeholder", value: s }), void (t.pos = t.value.length);
  }
  t.complete = !1, t.value += e.placeholder, t.meta.push({ type: "placeholder", value: e.placeholder }), t.pos = t.value.length;
}
function db(e, t, r) {
  let n = e.value;
  if (t.data === "" && !t.buffer && !t.placeholder && !r) return;
  let o = !1;
  for (; n; ) {
    const s = t.insertPos <= t.pos ? Se(t.data) : "", a = Se(n);
    if (s === a) n = ou(t, n), t.meta.push({ type: "literal", value: a }), o = !0;
    else if (!o || t.data || t.data === null || t.placeholder || r) n = lb(t, n), t.meta.push({ type: "literal", value: a });
    else if (o && !t.data) break;
    t.buffer.startsWith(a) && (t.buffer = t.buffer.substring(a.length));
  }
  t.data === null && !t.buffer && t.insertPos <= t.pos && !t.placeholder && (t.value = t.value.substring(0, t.value.length - e.value.length), t.pos = t.endPos = t.value.length);
}
function fb(e, t, r) {
  var n;
  let o = !0;
  if (t.insertPos <= t.pos) for (; !((n = t.data) === null || n === void 0) && n.length; ) {
    const s = Se(t.data);
    if (e.pattern.test(s)) return ou(t), t.meta.push({ type: "char", value: s }), t.chars++, t.unmasked += s, void pb(e, t);
    if (typeof t.data == "string") {
      if (r && t.data.startsWith(r)) {
        o = !1;
        break;
      }
      t.data = t.data.substring(s.length);
    }
  }
  for (; o && t.buffer; ) {
    const s = Se(t.buffer);
    if (e.pattern.test(s)) return t.chars++, t.unmasked += s, Ai(t), void t.meta.push({ type: "char", value: s });
    if (t.placeholder && s === e.placeholder) return Ai(t), void t.meta.push({ type: "placeholder", value: s });
    if (typeof t.buffer == "string") {
      if (r && t.buffer.startsWith(r)) {
        t.buffer = t.buffer.substring(r.length);
        break;
      }
      t.buffer = t.buffer.substring(s.length);
    }
  }
  t.placeholder ? (t.value += e.placeholder, t.meta.push({ type: "placeholder", value: e.placeholder })) : t.endPos = t.pos;
}
function mb(e, t, r, n) {
  const o = [n, n, "none"];
  if (t.mode === "select") {
    const s = Ie(e), a = pt(e, o, s), [i, l] = Ie(e, t.value), p = a !== void 0 && Ii(r.valueBefore, s[0][a], s[1][a]);
    if (a !== void 0 && a in i)
      return p ? i.slice(a).every((c, f) => Ii(t.value, c, l[a + f])) && i[a - 1] ? i[a - 1] : i[a] : [n, i[a][1], "none"];
  }
  return o;
}
function Ii(e, t, r) {
  if (mr(r)) return !1;
  if (lt(r)) {
    let n = t[0];
    for (; n < t[1]; ) {
      const o = Se(e.substring(n));
      if (o !== r.placeholder) return !1;
      n += o.length;
    }
  }
  return !ft(r) || e.substring(t[0], t[1]) === r.placeholder;
}
function au(e, t) {
  let r = "";
  do {
    const n = Se(e).toLowerCase(), o = Se(t).toLowerCase();
    if (n !== o) break;
    r += n, e = e.substring(n.length), t = t.substring(o.length);
  } while (e.length && t.length);
  return r;
}
function Ie(e, t) {
  const r = uo.get(e);
  if (!r) return [[], []];
  if (Po.has(e)) return Po.get(e);
  const n = t ?? ra(e, e.value), o = [], s = [];
  let a = null, i = null, l = 0, p = !0;
  for (const c of r) if (mr(c)) a = c, i !== null && (o.push([i, l, "none"]), i = null), l += c.value.length;
  else {
    if (lt(a) && lt(c) && c.token === a.token) l++;
    else if (lt(c)) i === null ? (i = l, s.push(c)) : (o.push([i, l, "none"]), i = l, s.push(c)), l++;
    else if (ft(c)) {
      i && o.push([i, l, "none"]), lu(c) || (p = !1);
      const f = hb(n, c, l);
      i = null, o.push([l, l + f, "none"]), s.push(c), l += f;
    }
    a = c;
  }
  i !== null && o.push([i, l, "none"]);
  const u = [[...o], [...s]];
  return p && !t && Po.set(e, u), u;
}
function hb(e, t, r) {
  if (lu(t)) return t.values[0].length;
  const n = e.slice(r), o = rn(t.values.concat([t.placeholder]), n);
  return o ? o.length : 0;
}
function rn(e, t, r = null, n) {
  var o;
  if (t.length === 0) return r;
  if (!n) {
    const p = e.find((u) => u.toLowerCase() === t.toLowerCase());
    if (p) return p;
  }
  const s = Se(t.toLowerCase()), a = `${n ?? ""}${s}`, i = e.filter((p) => p.toLowerCase().startsWith(a)), l = i.find((p) => p.toLowerCase() === a);
  return l && (r = l), i.length === 0 ? r : i.length === 1 ? i[0] : (i.length > 1 && (r = i[0]), (o = rn(i, t.substring(s.length), r, a)) !== null && o !== void 0 ? o : i[0]);
}
function iu(e, t) {
  return t = t.toLowerCase(), e.some((r) => (r = r.toLowerCase()).startsWith(t.toLocaleLowerCase()) && r !== t);
}
function lu(e) {
  if (!Fo.has(e) && Array.isArray(e.values) && e.values.length > 0) {
    const t = e.values[0].length;
    if (e.placeholder.length !== t) return !1;
    Fo.set(e, e.values.every((r) => r.length === t));
  }
  return Fo.get(e);
}
function No(e, t = 1) {
  const [r] = Ie(e), n = pt(e, $s(e, Ge(e)));
  return n !== void 0 && r[n + t] !== void 0 && (e.setSelectionRange(...Nr(e, r[n + t])), !0);
}
function Ei(e, t = 1) {
  const [r, n] = Ie(e), o = pt(e, Ge(e));
  if (o !== void 0 && o in n) {
    const s = n[o];
    if (ft(s)) {
      const a = r[o], i = e.value.slice(a[0], a[1]);
      let l = null, p = s.values.indexOf(i);
      const u = s.values.length - 1;
      if (p !== -1) {
        const c = p + t;
        p = c < 0 ? u : c > u ? 0 : c, l = s.values[p];
      } else i === s.placeholder && (l = t > 0 ? s.values[0] : s.values[u]);
      if (l !== null) {
        const c = { selectionBefore: a, insertPos: a[0], type: "insert", data: l, valueBefore: e.value, cycle: !0 };
        return setTimeout(() => Ur(e, c), 0), !0;
      }
    }
  }
  return !1;
}
function pu(e, t) {
  if (!e.length) return -1;
  if (e.length === 1) return e[0];
  const r = e.length / 2, n = Number.isInteger(r) ? r : Math.floor(r), o = Math.abs(t - e[n - 1]) < Math.abs(t - e[n]) ? [0, n] : [n];
  return pu(e.slice(...o), t);
}
function pt(e, t, r) {
  const [n] = r ?? Ie(e), o = n.findIndex((l) => l[0] !== l[1] && (!!Vt(l, t) || t[1] > l[0] && t[1] < l[1]));
  if (o !== -1) return o;
  const [s, a] = n.reduce((l, p, u) => (l[0].add(p[0]), l[0].add(p[1]), l[1][p[0]] = u, l[1][p[1]] = u, l), [/* @__PURE__ */ new Set(), {}]), i = pu([...s], t[0] === 0 && t[1] === e.value.length ? 0 : t[1]);
  return i in a ? a[i] : void 0;
}
function na(e) {
  var t, r;
  const n = (t = it.get(e)) !== null && t !== void 0 ? t : [];
  return n[(r = dr.get(e)) !== null && r !== void 0 ? r : n.length - 1];
}
function uu(e, t = !1) {
  const r = na(e);
  return r && (r.complete || t) ? ar.has(e) ? [...r.unmasked].reverse().join("") : r.unmasked : t ? "" : null;
}
function xs(e) {
  var t;
  const r = na(e);
  return (t = r?.meta) !== null && t !== void 0 ? t : null;
}
function Mi(e) {
  const t = (n) => [...n].reverse().join(""), r = (n, o) => [o - n[1], o - n[0], n[2]];
  e.data && (e.data = t(e.data)), e.valueBefore = t(e.valueBefore), "valueAfter" in e && (e.valueAfter = t(e.valueAfter)), "selectionAfter" in e && (e.selectionAfter = r(e.selectionBefore, e.valueAfter.length)), e.selectionBefore = r(e.selectionBefore, e.valueBefore.length);
}
function cu(e) {
  if (e.scrollWidth > e.clientWidth && e.selectionStart !== null && e.selectionEnd !== null) {
    const t = e.selectionStart / e.value.length, r = e.selectionEnd / e.value.length;
    e.scrollLeft = r > 0.9 ? e.scrollWidth : t * e.scrollWidth - 20, e.dispatchEvent(new CustomEvent("input-scroll", { bubbles: !1, detail: e.scrollLeft }));
  }
}
const Oi = typeof window < "u", ws = /* @__PURE__ */ new WeakSet(), Bo = /* @__PURE__ */ new WeakSet(), Pi = /* @__PURE__ */ new WeakSet(), qn = /* @__PURE__ */ new WeakMap(), du = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakSet(), _s = /* @__PURE__ */ new WeakSet();
function fu(e) {
  e.props.selectedMonth = e.props.selectedYear = e.props.selectedDay = e.props.selectedWeek = void 0;
}
function mu(e) {
  var t, r, n;
  e.props.selectedMonth = e.props.months.findIndex((o) => gu(o, e.props.activeDate)), e.props.selectedYear = e.props.years.findIndex((o) => hu(o, e.props.activeDate));
  for (let o = 0; o < ((t = e.props.calendar[0]) === null || t === void 0 ? void 0 : t.weeks.length); o++) for (let s = 0; s < ((r = e.props.calendar[0]) === null || r === void 0 ? void 0 : r.weeks[o].length); s++) {
    const a = (n = e.props.calendar[0]) === null || n === void 0 ? void 0 : n.weeks[o][s];
    if (Ap(a, e.props.activeDate)) {
      e.props.selectedWeek = o, e.props.selectedDay = s;
      break;
    }
  }
}
function Br(e) {
  return e.partName !== "timeZoneName";
}
function hu(e, t) {
  return t instanceof Date && e.getFullYear() === t.getFullYear();
}
function gu(e, t) {
  return t instanceof Date && e.getMonth() === t.getMonth();
}
function Ho(e) {
  e.props.skipBuildCalendar || fu(e), e.props.selectedIndex = e.props.calendar = yt(e.props.showMonths, (t) => t).map((t) => (function(r, n) {
    const o = [], s = ue(n);
    s.setDate(1);
    let a = Tp(s, r.props.weekStart);
    a.setHours(s.getHours(), s.getMinutes(), s.getSeconds());
    const i = Xg(Rn(n), r.props.weekStart);
    let l = [];
    do
      l.push(a), l.length === 7 && (o.push(l), l = []), a = sr(a);
    while (a.getTime() <= i.getTime());
    return { monthDay: s, weeks: o };
  })(e, vt(e.props.renderedDate, t))), e.props.years = (function(t) {
    const r = Number(Pe(t.props.renderedDate, "YYYY")), n = r - r % 10;
    return t.props.decade = `${n} - ${n + 9}`, yt(10, (o) => zt(t.props.renderedDate, n + o - r));
  })(e), e.props.months = (function(t) {
    const r = ue(t.props.renderedDate);
    return r.setMonth(0), yt(12, (n) => vt(r, n));
  })(e), e.props.skipBuildCalendar ? e.props.skipBuildCalendar = !1 : e.value && mu(e);
}
function gb(e, t) {
  var r;
  t.target && t.target instanceof Element && (t.target.closest(`#${e.props.id}_popover`) || !(!((r = e.props.__root) === null || r === void 0) && r.contains(t.target))) || (e.props.expanded = !1);
}
function Ct(e, t) {
  if (!t) return e.props.inputText = "", /* @__PURE__ */ new Date();
  const r = t instanceof Date ? t : At(t, e.props.valueFormat, e.props.valueLocale);
  return e.props.inputText = e.props.formatDate(r, e.props.format, e.props.locale, !1, Br), r;
}
function Fi(e) {
  return Array.isArray(e.props.sequence) ? wt(e.props.sequence) : ["day"];
}
function Cr(e, t, r = !0) {
  var n, o;
  if (e._value === t) return;
  if (t == null) return e.input(t, r);
  e.props.offset = e.props.timezone ? jr(t, e.props.timezone) : "+0000";
  const s = Dp(t, (n = (o = e.props).offset) !== null && n !== void 0 ? n : o.offset = "+0000");
  e.input(Pe(s, e.props.valueFormat, e.props.valueLocale, !1), r);
}
function Wo(e, t) {
  var r;
  const n = ["prev_button", "month_button", "day_button", "year_button", "next_button"].find((s) => {
    var a;
    return (a = e.props.__root) === null || a === void 0 ? void 0 : a.getElementById(`${e.props.id}_${s}`);
  }), o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_${n}`);
  o instanceof HTMLElement && (t.preventDefault(), o.focus());
}
function vb(e, t) {
  let r = "";
  if (!(t instanceof HTMLInputElement) || e.props.pickerOnly) return;
  qn.set(e, t);
  const n = (i) => {
    e.props.expanded && i.target instanceof HTMLElement && i.target.closest(`#${e.props.id}_popover`) ? _s.add(e) : _s.delete(e);
  }, o = e.props.__root;
  o && (o.addEventListener("click", n), $r(e, () => o.removeEventListener("click", n))), e.on("prop:inputText", ({ payload: i }) => {
    i !== t.value && (kn.get(t) === "beforeCallback" && (r = t.value), ki(t), t.selectionStart = 0, t.selectionEnd = t.value.length, (function(l, p) {
      var u, c;
      if (!it.has(l)) return;
      const f = (u = br.get(l)) !== null && u !== void 0 ? u : "", d = (c = co.get(l)) !== null && c !== void 0 ? c : "";
      Ur(l, { type: "insert", selectionBefore: Ge(l), data: p, valueBefore: l.value, suffix: d, prefix: f });
    })(t, i), t.value = i, setTimeout(() => Si(t), 10));
  });
  const [s, a] = $b(e);
  ta(t, { pattern: s, explicitParts: a, onChange: ({ valueAfter: i }) => {
    if (vu(e), ws.has(e)) return ws.delete(e);
    r && r === i ? r = "" : (ki(t), e.props.inputText = i, setTimeout(() => Si(t), 10));
  } }, e);
}
function vu(e) {
  var t, r;
  if (e.props.overlay) {
    const n = qn.get(e);
    !n || !(!((t = e.props.attrs) === null || t === void 0) && t.placeholder) || e._value || uu(n, !0) || e.props._isFocused || e.props.activeDate && e.props.expanded ? n && (e.props._isPlaceholder = !1, e.props._overlayParts = Wn(xs(n))) : (e.props._isPlaceholder = !0, e.props._overlayParts = [{ type: "placeholder", value: (r = e.props.attrs) === null || r === void 0 ? void 0 : r.placeholder }]);
  }
}
function $b(e) {
  const t = e.props.locale, r = ["full", "long", "medium", "short"].includes(e.props.format) || typeof e.props.format == "object", n = ur(e.props.format, t);
  return [qs(e.props.format, t, !0, Br), n.reduce((o, s) => {
    if (s.partName === "literal") return o;
    let a = ao(s.token, t, r);
    if (s.token === "YYYY" && e.props.minDate && e.props.maxDate) {
      const l = e.props.minDate.getFullYear();
      a = yt(e.props.maxDate.getFullYear() - l + 1, (p) => String(l + p));
    }
    const i = { type: "enum", token: s.token, values: a, placeholder: s.token === "A" ? "A/P" : s.token, selectDirection: "left" };
    return o.push(i), s.token.startsWith("D") && du.set(e, a), o;
  }, [])];
}
function yb(e, t) {
  return !t || !(!e.props.minDate || !Jg(t, e.props.minDate)) || !(!e.props.maxDate || !Qg(t, e.props.maxDate)) || void 0;
}
function bb(e) {
  return typeof e.props.validationLabel == "function" ? e.props.validationLabel(e) : e.props.validationLabel || e.props.label || e.props.name || String(e.name);
}
const xb = typeof window < "u", Vi = /* @__PURE__ */ new WeakMap();
function wb(e, t) {
  var r, n;
  if (t instanceof HTMLInputElement && !Vi.get(e) && xb) {
    const o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_overlay`), s = (n = e.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${e.props.id}_overlay_inner`);
    if (o && t && s) {
      Vi.set(e, o);
      const a = getComputedStyle(t).color;
      t.style.color = "transparent", t.style.caretColor = a;
      const i = new ResizeObserver(() => {
        var p;
        const u = getComputedStyle(t), c = t.getBoundingClientRect(), f = (p = t.parentElement) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
        e.props._overlayStyles = { ...e.props._overlayStyles, width: u.width, height: u.height, boxSizing: u.boxSizing, padding: u.padding, margin: u.margin, fontSize: u.fontSize, lineHeight: u.lineHeight, top: c.top - (f?.top || c.top) + "px", left: c.left - (f?.left || c.left) + "px" };
      });
      i.observe(t);
      const l = (p) => {
        s.scrollLeft = p.detail;
      };
      t.addEventListener("input-scroll", l), e.on("destroyed", () => {
        t.removeEventListener("input-scroll", l), i.disconnect();
      });
    }
  }
}
function $u(e) {
  e.addProps(["_overlayStyles", "_overlayParts", "_overlayInnerStyles", "_isPlaceholder"]), e.props._overlayParts = [], e.props._overlayStyles = { position: "absolute", top: "0", left: "0", pointerEvents: e.props._isPlaceholder ? "auto" : "none" }, e.props._overlayInnerStyles = { overflow: "hidden", whiteSpace: "nowrap", paddingRight: "20px" }, e.on("created", () => {
    e.props.overlay = H(e.props.overlay), e.props.pickerOnly = H(e.props.pickerOnly), e.props.overlay = e.props.pickerOnly ? void 0 : e.props.overlay, e.props.overlay && fe(`${e.props.id}`, wb.bind(null, e), e.props.__root);
  }), e.on("prop:_isPlaceholder", () => {
    e.props._overlayStyles = { ...e.props._overlayStyles, pointerEvents: e.props._isPlaceholder ? "auto" : "none" };
  });
}
const _b = { schema: /* @__PURE__ */ fy(/* @__PURE__ */ my(/* @__PURE__ */ gy("$label"), /* @__PURE__ */ hy(/* @__PURE__ */ Dt("prefix"), /* @__PURE__ */ vy(), /* @__PURE__ */ tb(/* @__PURE__ */ nb(/* @__PURE__ */ rb(/* @__PURE__ */ Xy("$part.value"), /* @__PURE__ */ Jy("$part.value"), /* @__PURE__ */ Qy("$part.value"), /* @__PURE__ */ eb("$part.value")))), /* @__PURE__ */ wy(), /* @__PURE__ */ _y(/* @__PURE__ */ Hy(/* @__PURE__ */ Dy(/* @__PURE__ */ Cy("$ui.prev.value"), /* @__PURE__ */ Dt("prev")), /* @__PURE__ */ Wy("$decade"), /* @__PURE__ */ Ky(/* @__PURE__ */ Oo()), /* @__PURE__ */ jy(/* @__PURE__ */ bi(), /* @__PURE__ */ Oo()), /* @__PURE__ */ Yy(/* @__PURE__ */ bi(), /* @__PURE__ */ Zy(), /* @__PURE__ */ Oo()), /* @__PURE__ */ ky(/* @__PURE__ */ Sy("$ui.next.value"), /* @__PURE__ */ Dt("next")), /* @__PURE__ */ Gy(/* @__PURE__ */ Dt("close"))), /* @__PURE__ */ ob(/* @__PURE__ */ Vy(/* @__PURE__ */ Ny("$fns.format($year, $yearFormat)")), /* @__PURE__ */ By(/* @__PURE__ */ Ry("$fns.format($month, $monthFormat)")), /* @__PURE__ */ Ly(/* @__PURE__ */ Ty(/* @__PURE__ */ Iy(/* @__PURE__ */ Ey("$fns.format($day, $weekdayFormat)"))), /* @__PURE__ */ Ay(/* @__PURE__ */ My(/* @__PURE__ */ Oy(/* @__PURE__ */ Py("$fns.format($day, $dateFormat)"))))), /* @__PURE__ */ qy(/* @__PURE__ */ zy()))), /* @__PURE__ */ Uy(/* @__PURE__ */ Dt("clear")), /* @__PURE__ */ Fy(/* @__PURE__ */ Dt("calendar")), /* @__PURE__ */ $y(), /* @__PURE__ */ Dt("suffix"))), /* @__PURE__ */ yy("$help"), /* @__PURE__ */ by(/* @__PURE__ */ xy("$message.value"))), type: "input", family: "text", props: ["dateFormat", "dayButtonFormat", "format", "monthButtonFormat", "monthFormat", "overlay", "pickerOnly", "showMonths", "showPagination", "weekStart", "weekdayFormat", "yearFormat", "years"], features: [
  $u,
  function(e) {
    var t, r, n, o, s, a, i, l, p, u, c, f, d, $, h, y, m, S, g, _, C, k;
    e.addProps(["_isDisabled", "_isFocused", "activeDate", "calendar", "clearable", "disabled", "decade", "disabledDays", "expanded", "inputText", "localTime", "maxDate", "maxScan", "minDate", "months", "offset", "paginatedPanels", "panel", "pickerOnly", "renderedDate", "sequence", "timezone", "valueFormat", "valueLocale", "showPanelClose", "selectedDay", "selectedWeek", "selectedMonth", "selectedYear"]), e.hook.prop((w, L) => (w.prop === "expanded" && e.props.disabled && (w.value = !1), w.prop === "weekStart" && (w.value = Number(w.value || 0)), w.prop === "showMonths" && (w.value = Number(w.value || 1)), w.prop === "maxScan" && (w.value = Number(w.value || 7)), w.prop === "timezone" && (typeof e._value == "string" || e._value instanceof Date) && (e.props.offset = jr(e._value, w.value)), L(w))), e.props._isFocused = !1, e.props._isPlaceholder = !1, (t = (f = e.props).valueFormat) !== null && t !== void 0 || (f.valueFormat = "ISO8601"), (r = (d = e.props).weekdayFormat) !== null && r !== void 0 || (d.weekdayFormat = "d"), (n = ($ = e.props).monthFormat) !== null && n !== void 0 || ($.monthFormat = "MMM"), (o = (h = e.props).monthButtonFormat) !== null && o !== void 0 || (h.monthButtonFormat = "MMMM"), (s = (y = e.props).dayButtonFormat) !== null && s !== void 0 || (y.dayButtonFormat = "D"), (a = (m = e.props).dateFormat) !== null && a !== void 0 || (m.dateFormat = "D"), (i = (S = e.props).yearFormat) !== null && i !== void 0 || (S.yearFormat = "YYYY"), (l = (g = e.props).paginatedPanels) !== null && l !== void 0 || (g.paginatedPanels = ["day", "year"]), (p = (_ = e.props).valueLocale) !== null && p !== void 0 || (_.valueLocale = e.props.locale), (u = (C = e.props).format) !== null && u !== void 0 || (C.format = "long"), e.props.panels = Fi(e), e.props.pickerOnly = H(e.props.pickerOnly), "disabled" in e.props && (e.props.disabled = H(e.props.disabled)), "clearable" in e.props && (e.props.clearable = H(e.props.clearable)), (c = (k = e.props).maxScan) !== null && c !== void 0 || (k.maxScan = 7), e.props._isDisabled = typeof e.props.disabledDays == "function" ? e.props.disabledDays.bind(null, e) : yb.bind(null, e), e.props.calendar = [], e.props.inputText = "", e.props.showMonths = e.props.showMonths || 1, typeof e.props.format == "function" ? (e.props.formatDate = e.props.format, e.props.format = null) : e.props.formatDate = Pe, Ho(e), e.on("mounted", () => {
      fe(`${e.props.id}`, vb.bind(null, e), e.props.__root);
    }), e.on("created", () => {
      if ((function(w) {
        const L = w._value;
        let x = /* @__PURE__ */ new Date();
        if (L instanceof Date) x = ue(L);
        else if (typeof L == "string") try {
          const v = At(L, w.props.valueFormat, w.props.valueLocale);
          x = ue(v);
        } catch {
          console.warn(`Date (${L}) does not match format (${qs(w.props.valueFormat, w.props.valueLocale)})`), x = void 0;
        }
        else L || (x = void 0);
        if (w.props.offset = w.props.timezone ? jr(x || /* @__PURE__ */ new Date(), w.props.timezone) : "+0000", w.props.minDate) {
          const v = typeof w.props.minDate == "string" ? At(w.props.minDate) : w.props.minDate;
          w.props.minDate = Gt(v, w.props.offset);
        }
        if (w.props.maxDate) {
          const v = typeof w.props.maxDate == "string" ? At(w.props.maxDate) : w.props.maxDate;
          w.props.maxDate = Gt(v, w.props.offset);
        }
        x = x && Gt(x, w.props.offset), x && Cr(w, x, !1);
        let b = x || /* @__PURE__ */ new Date();
        w.props.minDate && b < w.props.minDate ? b = w.props.minDate : w.props.maxDate && b > w.props.maxDate && (b = w.props.maxDate), w.props.renderedDate = b, w.props.activeDate = b, w.props.localTime = x && Pe(x, "HH:mm") || "12:00";
      })(e), e.context) {
        const w = {};
        let L;
        e.context.fns.format = (x, b) => {
          if (w[b] && w[b][x.toString()]) return w[b][x.toString()];
          const v = Pe(x, b, e.props.locale || "en", !1, Br);
          return w[b] ? w[b][x.toString()] = v : w[b] = { [x.toString()]: v }, v;
        }, e.context.fns.isDisabled = e.props._isDisabled, e.context.fns.isDisabledMonth = (x) => !wr(x, (b) => !e.props._isDisabled(b), "month"), e.context.fns.isDisabledYear = (x) => !wr(x, (b) => !e.props._isDisabled(b), "year"), e.context.handlers._blur = (x) => {
          var b, v;
          e.props._isFocused = !1, typeof ((b = e.context) === null || b === void 0 ? void 0 : b.handlers.blur) == "function" && ((v = e.context) === null || v === void 0 || v.handlers.blur(x));
        }, e.context.handlers.closePanel = () => {
          e.props.expanded = !1;
        }, e.context.handlers._blurOut = (x) => (b) => {
          var v;
          b.preventDefault(), e.props.keydown ? e.props.keydown = !1 : x && x !== e.props.panel || e.props.pickerOnly && b.relatedTarget instanceof Element && (b.relatedTarget === document.getElementById(`${e.props.id}_inner`) || b.relatedTarget.closest(`#${e.props.id}_inner`)) || b.relatedTarget && b.relatedTarget instanceof Element && (b.relatedTarget.closest(`#${e.props.id}_popover`) || !(!((v = e.props.__root) === null || v === void 0) && v.contains(b.relatedTarget)) || b.relatedTarget.id === `${e.props.id}_popover`) || (e.props.expanded = !1);
        }, e.context.handlers.overlayClick = () => {
          const x = qn.get(e);
          x && (x.focus(), e.props._isPlaceholder = !1);
        }, e.context.handlers.focus = () => {
          e.props.pickerOnly || (e.props._isFocused = !0, e.props.pickerOnly && !Bo.has(e) && (Pi.add(e), e.props.expanded = !0, setTimeout(() => Pi.delete(e), 200)));
        }, e.context.handlers.clear = () => {
          var x, b;
          Cr(e, void 0, !0), Ct(e, void 0);
          const v = (b = (x = e.props) === null || x === void 0 ? void 0 : x.__root) === null || b === void 0 ? void 0 : b.getElementById(`${e.props.id}`);
          v instanceof HTMLInputElement && (v.focus(), setTimeout(() => {
            v.setSelectionRange(0, 0);
          }, 50));
        }, e.context.handlers.dateInput = (x) => {
          var b;
          if (Ro.has(e)) return Ro.delete(e);
          if (x.target instanceof HTMLInputElement && !e.props.expanded) try {
            let v = At({ date: x.target.value, format: e.props.format, locale: e.props.locale, partFilter: Br });
            if ((function(T) {
              return ur(T.props.format, T.props.locale).some((V) => V.partName === "weekday");
            })(e) && e.props.activeDate instanceof Date && e.props.activeDate.getTime() === v.getTime() && !Et.get(x.target) && Pe(v, e.props.format, e.props.locale, !1, Br) !== x.target.value) {
              const T = ao("dddd", e.props.locale), V = ur(e.props.format, e.props.locale), U = (b = Lp(x.target.value, V).find((Z) => Z.token === "dddd")) === null || b === void 0 ? void 0 : b.value, J = Pe(v, "dddd", e.props.locale);
              if (U && T.includes(U) && J !== U) {
                let Z = T.indexOf(U) - T.indexOf(J);
                Z = Z < -1 ? 7 + Z : Z, v = sr(v, Z), ws.add(e);
              }
            }
            Cr(e, v);
          } catch {
            Cr(e, void 0);
          }
        }, e.context.handlers.open = () => {
          e.props.expanded = !0;
        }, e.context.handlers.next = () => {
          switch (e.props.panel) {
            case "year":
              return void (e.props.renderedDate = zt(e.props.renderedDate, 10));
            case "day":
              return void (e.props.renderedDate = vt(e.props.renderedDate, 1));
          }
        }, e.context.handlers.prev = () => {
          switch (e.props.panel) {
            case "year":
              return void (e.props.renderedDate = zt(e.props.renderedDate, -10));
            case "day":
              return void (e.props.renderedDate = vt(e.props.renderedDate, -1));
          }
        }, e.context.handlers.setDate = (x) => () => {
          e.props.panel !== "month" && e.props.panel !== "year" || !e.props.activeDate || (x = e.props.activeDate), e.emit("dateSelected", x);
        }, e.context.handlers.localTime = (x) => {
          const b = x.target;
          if (!b.value) return;
          const [v, T] = b.value.split(":");
          e.props.localTime = b.value, e.props.activeDate.setHours(v, T), Ct(e, e.props.activeDate);
        }, e.context.handlers.keyDown = (x) => {
          switch (e.props.keydown = !0, e.props.panel) {
            case "day":
              return e.emit("calendarKeydown", x);
            case "year":
              return e.emit("yearKeydown", x);
            case "month":
              return e.emit("monthKeydown", x);
            case "time":
              return e.emit("timeKeydown", x);
            default:
              return;
          }
        }, e.context.handlers.inputKeydown = (x) => {
          e.emit("keydown", x);
        }, e.context.handlers.openKeydown = (x) => {
          x.key !== "Enter" && x.key !== "Space" || (e.props.expanded = !0);
        }, e.context.handlers.mouseEnter = (x) => (b) => {
          if (clearTimeout(L), b.target instanceof HTMLElement && b.target.getAttribute("tabindex") === "-1" && b.target.getAttribute("data-is-extra") !== "true") if (e.props.panel === "month" || e.props.panel === "year") {
            const v = wr(x, () => !0, e.props.panel);
            v && (e.props.activeDate = v);
          } else e.props.activeDate = x;
        }, e.context.handlers.mouseLeave = () => {
          clearTimeout(L), L = setTimeout(() => {
          }, 100);
        }, e.context.handlers.jumpTo = (x) => () => {
          e.props.panels.unshift(e.props.panel), e.props.panel = x;
        }, e.context.fns.sameDay = (x) => (function(b, v) {
          return v instanceof Date && Ap(b, v);
        })(x, e.props.activeDate), e.context.fns.sameMonth = (x) => gu(x, e.props.activeDate), e.context.fns.sameYear = (x) => hu(x, e.props.activeDate), e.context.fns.notInMonth = (x, b) => {
          const v = Yg(b).getTime();
          return v < Ua(x).getTime() || v > Rn(x).getTime() || void 0;
        };
      }
    });
    const D = gb.bind(null, e);
    $r(e, () => {
      document.removeEventListener("click", D);
    }), e.on("prop:panel", ({ payload: w }) => {
      e.props.showPagination = e.props.paginatedPanels.includes(w);
    }), e.on("dateSelected", ({ payload: w }) => {
      var L, x;
      Array.isArray(e.props.panels) && e.props.panels.length ? e.props.panel = e.props.panels.shift() : (e.props.expanded = !1, (x = (L = e.props.__root) === null || L === void 0 ? void 0 : L.getElementById(`${e.props.id}`)) === null || x === void 0 || x.focus()), w && e.props._isDisabled(w) || Cr(e, w);
    }), e.on("input", ({ payload: w }) => {
      if (w === void 0 && !e.props._isFocused) return void Ct(e, void 0);
      const L = /* @__PURE__ */ new Date(), x = w ? Ct(e, Gt(typeof w == "string" ? At(w, e.props.valueFormat, e.props.valueLocale) : w, e.props.offset)) : L;
      e.props.activeDate = !w && e.props.activeDate ? e.props.activeDate : x, e.props.renderedDate = !w && e.props.renderedDate ? e.props.renderedDate : x, e.props.localTime = Pe(x, "HH:mm"), (function(b) {
        const v = du.get(b);
        if (b._value && v) {
          const T = Qr(b.props.activeDate);
          if (v.length > T) v.splice(T, v.length - T);
          else if (v.length < T) for (let V = v.length + 1; V <= T; V++) v.push(String(V));
        }
      })(e);
    }), e.on("prop:renderedDate", Ho.bind(null, e)), e.on("prop:expanded", ({ payload: w }) => {
      if (w) {
        if (_s.delete(e), e.props.panels = Fi(e), e.props.panel = e.props.panels.shift(), window.innerWidth <= 430 && !window.matchMedia("(hover: hover)").matches ? e.props.showPanelClose = !0 : e.props.showPanelClose = !1, e.props.panel === "day") {
          const L = e.props.activeDate;
          e.props.activeDate = wr(e.props.activeDate, (x) => !e.props._isDisabled(x), "month") || L;
        }
        Ho(e), fe(`${e.props.id}_popover`, (L) => {
          const x = L.querySelector('[tabindex="0"]');
          x && setTimeout(() => {
            x.focus(), (function(b, v) {
              const T = Gs(b, (U) => {
                for (const J of U) J.type === "attributes" && J.target instanceof HTMLElement && J.target.getAttribute("tabindex") === "0" ? J.target.focus() : J.addedNodes.length && J.addedNodes.forEach((Z) => {
                  var pe;
                  if (Z instanceof HTMLElement && Z.getAttribute("tabindex") === "0") Z.focus();
                  else if (Z instanceof HTMLElement && Z.querySelector('[tabindex="0"]')) {
                    const he = Z.querySelector('[tabindex="0"]');
                    he instanceof HTMLElement && he.focus();
                  } else Z instanceof HTMLElement && Z.querySelector('input[type="time"]') && ((pe = Z.querySelector('input[type="time"]')) === null || pe === void 0 || pe.focus());
                });
              });
              T.observe(v, { attributes: !0, attributeFilter: ["tabindex"], childList: !0, subtree: !0 });
              const V = b.on("prop:expanded", ({ payload: U }) => {
                U || (b.off(V), T.disconnect());
              });
            })(e, L);
          }, 0);
        }, e.props.__root), Oi && setTimeout(() => {
          document.addEventListener("click", D);
        }, 10);
      } else {
        if (e.props.activeDate = e.props.renderedDate, e.props.panel === "time") e.emit("dateSelected", e.props.activeDate);
        else if (e._value) {
          Ro.add(e);
          const L = typeof e._value == "string" ? At(e._value, e.props.valueFormat, e.props.valueLocale) : e._value;
          Ct(e, Gt(L, e.props.offset));
        } else Ct(e, void 0);
        Oi && (Bo.add(e), document.removeEventListener("click", D), setTimeout(() => Bo.delete(e), 50));
      }
    }), e.on("prop:activeDate", ({ payload: w }) => {
      if (Array.isArray(e.props.calendar) && e.props.calendar.length) {
        if (e.props.panel === "day") {
          const L = e.props.calendar, x = Ua(e.props.renderedDate), b = Rn(vt(e.props.renderedDate, L.length - 1));
          w.getTime() < x.getTime() ? e.props.renderedDate = vt(e.props.renderedDate, -1) : w.getTime() > b.getTime() && (e.props.renderedDate = vt(e.props.renderedDate));
        } else if (e.props.panel === "year") {
          const L = e.props.years, x = L[0].getFullYear(), b = L[L.length - 1].getFullYear(), v = e.props.activeDate.getFullYear();
          v > b ? e.props.renderedDate = zt(e.props.renderedDate, 10) : v < x ? e.props.renderedDate = zt(e.props.renderedDate, -10) : (e.props.skipBuildCalendar = !0, e.props.renderedDate = w);
        }
      }
      e.props.expanded && Ct(e, e.props.activeDate);
    }), e.on("keydown", ({ payload: w }) => {
      switch (w.key) {
        case "ArrowDown":
        case "ArrowUp":
        case " ":
          w.preventDefault(), e.props.pickerOnly && (e.props.expanded = !0);
          break;
        case "Enter":
        case "Return":
          e.props.expanded || (e.props.expanded = !0);
          break;
        case "Escape":
          e.props.expanded = !1;
      }
    }), e.on("calendarKeydown", ({ payload: w }) => {
      w.preventDefault();
      let L = null, x = 0;
      switch (w.key) {
        case "ArrowRight":
          x = 1;
          break;
        case "ArrowLeft":
          x = -1;
          break;
        case "ArrowDown":
          x = 7;
          break;
        case "ArrowUp":
          x = -7;
          break;
        case "Return":
        case "Enter":
          e.emit("dateSelected", e.props.activeDate);
          break;
        case "Tab":
          w.shiftKey || Wo(e, w);
          break;
        case "Escape":
          e.props.expanded = !1;
      }
      if (x && (w.preventDefault(), L = sr(e.props.activeDate, x)), L && !e.props._isDisabled(L)) e.props.activeDate = L;
      else if (L && e.props._isDisabled(L)) {
        const b = x > 0 ? 1 : -1;
        yt(Number(e.props.maxScan), (v) => b * v).some((v) => {
          const T = sr(L, v);
          return !e.props._isDisabled(T) && (e.props.activeDate = T, !0);
        });
      }
    }), e.on("yearKeydown", ({ payload: w }) => {
      let L = 0;
      switch (w.key) {
        case "ArrowDown":
          L = 5;
          break;
        case "ArrowRight":
          L = 1;
          break;
        case "ArrowUp":
          L = -5;
          break;
        case "ArrowLeft":
          L = -1;
          break;
        case "Tab":
          w.shiftKey || Wo(e, w);
          break;
        case "Return":
        case "Enter":
          e.emit("dateSelected", e.props.activeDate);
          break;
        case "Escape":
          e.props.expanded = !1;
      }
      const x = e.props.activeDate.getFullYear() + L - e.props.renderedDate.getFullYear();
      e.props.activeDate = zt(e.props.renderedDate, x);
    }), e.on("monthKeydown", ({ payload: w }) => {
      let L = 0;
      switch (w.key) {
        case "ArrowDown":
          L = 3;
          break;
        case "ArrowRight":
          L = 1;
          break;
        case "ArrowLeft":
          L = -1;
          break;
        case "ArrowUp":
          L = -3;
          break;
        case "Tab":
          w.shiftKey || Wo(e, w);
          break;
        case "Return":
        case "Enter":
          e.emit("dateSelected", e.props.activeDate);
          break;
        case "Escape":
          e.props.expanded = !1;
      }
      L && w.preventDefault();
      let x = (e.props.activeDate.getMonth() + L) % 12;
      x = x < 0 ? 12 + x : x;
      const b = x - e.props.renderedDate.getMonth();
      let v = vt(e.props.renderedDate, b);
      if (e.props._isDisabled(v)) {
        const T = wr(v, (V) => !e.props._isDisabled(V), "month");
        T && (v = T);
      }
      e.props.activeDate = v;
    }), e.on("timeKeydown", ({ payload: w }) => {
      switch (w.key) {
        case "Return":
        case "Enter":
          w.preventDefault(), e.emit("dateSelected", e.props.activeDate);
      }
    }), e.on("prop:_isFocused", () => {
      qn.get(e) && vu(e);
    }), e.on("commit", ({ payload: w }) => {
      if (w ? mu(e) : fu(e), e.props.activeDate && e.props._isDisabled(e.props.activeDate)) {
        const L = ye({ blocking: !0, key: "rule_invalidDate", meta: { messageKey: "invalidDate", removeImmediately: !1, localize: !0, i18nArgs: [{ node: e, name: bb(e), args: [] }] }, type: "validation", value: "The selected date is invalid." });
        e.store.set(L);
      } else e.store.remove("rule_invalidDate");
    });
  },
  en,
  /* @__PURE__ */ ie("next"),
  /* @__PURE__ */ ie("prev"),
  /* @__PURE__ */ ie("changeDate"),
  /* @__PURE__ */ ie("chooseDate"),
  /* @__PURE__ */ te("close", "close"),
  /* @__PURE__ */ te("next", "right"),
  /* @__PURE__ */ te("clear", "close"),
  /* @__PURE__ */ te("prev", "left"),
  /* @__PURE__ */ te("calendar", "date")
] }, Je = /* @__PURE__ */ Ee("tl"), { outer: kb, wrapper: Sb, inner: Db, icon: Lr, label: Cb, prefix: Lb, suffix: Ab, help: Tb, messages: Ib, message: Eb } = /* @__PURE__ */ Me(Je), Mb = Je("input", () => ({ $el: "input", bind: "$attrs", attrs: { id: "$id", type: "text", onClick: "$handlers.click", onBlur: "$handlers.blur", onKeydown: "$handlers.keydown", onInput: "$handlers.input", onFocus: "$handlers.focus", value: "$inputText", name: "$node.name", tabindex: "0", placeholder: "$state.loading && $inputStd.length === 0 && $ui.isLoading.value || $placeholder || undefined", role: "combobox", autocomplete: "off", autocapitalize: "none", readonly: "$attrs.readonly || $isLoadingOption || undefined || $multiple && $max && $value && $value.length >= $max", disabled: "$disabled || $disabledInternally || undefined", "aria-autocomplete": "list", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined', "aria-describedBy": "$describedBy", "aria-activedescendant": "$expanded && $activeDescendant || undefined", "aria-required": "$state.required || undefined" } })), Ob = Je("listboxButton", () => ({ $el: "button", attrs: { style: "$visibilityStyles", id: '$id + "_listbox_button"', type: "button", onClick: "$handlers.toggleListbox", tabindex: "-1", "aria-label": "$expanded && $ui.close.value || $ui.open.value", disabled: "$disabled || undefined", "aria-haspopup": "true", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined' } })), Pb = Je("tagWrapper", () => ({ $el: "span", for: ["option", "index", "$selections"], attrs: { id: '$id + "_tag-wrapper_" + $index', key: "$option.value", "data-value": "$option.value", tabindex: "-1", onClick: "$handlers.tagClick && $handlers.tagClick($option)", onFocus: "$handlers.tagFocus && $handlers.tagFocus($option)", onBlur: "$handlers.tagBlur && $handlers.tagBlur($option)", onKeydown: "$handlers.searchInputTagKeydown && $handlers.searchInputTagKeydown($option)", "data-is-tag": "true", "data-active-selection": "$fns.isActiveSelection && $fns.isActiveSelection($activeSelectionValue, $option)" } })), Fb = Je("tag", () => ({ $el: "div", attrs: { id: '$id + "_tag_" + $index', role: "button" } })), Vb = Je("removeSelection", () => ({ $el: "button", if: "$selections.length > 0", attrs: { id: '$id + "_remove_selection_" + $index', tabindex: "-1", "aria-label": "$ui.remove.value", type: "button", onClick: "$handlers.removeSelection && $handlers.removeSelection($option)", onTouchstartPassive: "$handlers.removeSelection && $handlers.removeSelection($option)", "aria-controls": "$id" } })), Nb = Je("tagLabel", () => ({ $el: "span" })), Bb = Je("tags", () => ({ $el: "div", attrs: { id: '$id + "_selections"', "aria-live": "polite" } })), Rb = Je("tagLoading", "span"), Hb = /* @__PURE__ */ zs(Je);
function Wb(e) {
  e.props.multiple = !0, e.props.openOnClick = H(e.props.openOnClick), e.props.closeOnSelect === void 0 && (e.props.closeOnSelect = !0), e.props.closeOnSelect ? e.props.resetSearchOnCommit = !1 : e.props.resetSearchOnCommit === void 0 && (e.props.resetSearchOnCommit = e.props.multiple), e.props.allowNewValues = H(e.props.allowNewValues);
}
function Kb(e) {
  Qp(e), qp(e), e.on("created", () => {
    function t() {
      return Array.isArray(e.value) ? e.value : [];
    }
    function r(n) {
      e.input(n);
    }
    e.props.disabled && (e.props.draggable = !1), fe(`${e.props.id}_selections`, (n) => {
      if (n instanceof HTMLElement) {
        if (!e.context) return;
        const o = { draggingClass: e.context.classes.dragging, dropZoneClass: e.context.classes.dropZone, disabled: !e.props.draggable, threshold: { horizontal: 0.25, vertical: 0 }, plugins: [no()], root: e.props.__root, touchDraggingClass: e.context.classes.touchDragging, touchDropZoneClass: e.context.classes.touchDropZone, draggable: (s) => s.hasAttribute("data-is-tag"), handleEnd(s) {
          e.props.activeSelectionValue = void 0, Nn(s);
        }, handleDragstart(s) {
          e.props.activeSelectionValue = void 0, Vn(s);
        }, handleTouchstart(s) {
          e.props.activeSelectionValue = void 0, Bn(s);
        } };
        ve({ parent: n, getValues: t, setValues: r, config: o }), e.on("prop:disabled", ({ payload: s }) => {
          o.disabled = s, ve({ parent: n, getValues: t, setValues: r, config: o });
        }), e.on("prop:draggable", ({ payload: s }) => {
          o.disabled = !s, ve({ parent: n, getValues: t, setValues: r, config: o });
        });
      }
    }, e.props.__root);
  });
}
const jb = { schema: /* @__PURE__ */ kb(/* @__PURE__ */ Sb(/* @__PURE__ */ Cb("$label"), /* @__PURE__ */ Db(/* @__PURE__ */ Lr("prefix"), /* @__PURE__ */ Lb(), /* @__PURE__ */ Bb(/* @__PURE__ */ Pb(/* @__PURE__ */ Fb(/* @__PURE__ */ R("$state.loading && $fns.hasOptionLoaderValue && $fns.hasOptionLoaderValue($option) || $option.label === undefined", /* @__PURE__ */ Rb("$ui.isLoading.value"), /* @__PURE__ */ Nb("$option.label")), /* @__PURE__ */ Vb(/* @__PURE__ */ Lr("close")))), /* @__PURE__ */ Mb()), /* @__PURE__ */ R("$state.loading", /* @__PURE__ */ Lr("loader")), /* @__PURE__ */ Ob(/* @__PURE__ */ Lr("select")), /* @__PURE__ */ Hb(), /* @__PURE__ */ Ab(), /* @__PURE__ */ Lr("suffix"))), /* @__PURE__ */ Tb("$help"), /* @__PURE__ */ Ib(/* @__PURE__ */ Eb("$message.value"))), type: "input", family: "dropdown", props: [], features: [
  mt,
  /* @__PURE__ */ ea.bind(null, Wb, Xp, Kb),
  /* @__PURE__ */ te("select", "select"),
  /* @__PURE__ */ te("close", "close"),
  /* @__PURE__ */ te("selected", "check"),
  /* @__PURE__ */ te("loader", "spinner"),
  /* @__PURE__ */ ie("isLoading"),
  /* @__PURE__ */ ie("loadMore"),
  /* @__PURE__ */ ie("remove"),
  /* @__PURE__ */ ie("open"),
  /* @__PURE__ */ ie("close"),
  en
] }, oa = /* @__PURE__ */ Ee("mk"), { outer: Yb, wrapper: Zb, inner: Ub, label: qb, prefix: zb, suffix: Gb, help: Xb, messages: Jb, message: Qb, icon: Ni } = /* @__PURE__ */ Me(oa), { overlayPlaceholder: ex, overlayLiteral: tx, overlayChar: rx, overlayEnum: nx, overlay: ox, overlayParts: sx, overlayInner: ax } = /* @__PURE__ */ Ip(oa), ix = oa("input", () => ({ $el: "input", bind: "$attrs", attrs: { type: "text", disabled: "$disabled", name: "$node.name", onBlur: "$handlers.blur", onInput: "$handlers.DOMInput", value: "$_maskValue", placeholder: "$placeholder", id: "$id", "aria-describedby": "$describedBy" } })), ks = /* @__PURE__ */ new WeakMap(), Ss = /* @__PURE__ */ new WeakMap(), Bi = /* @__PURE__ */ new WeakMap();
function lx(e, t) {
  if (!(t instanceof HTMLInputElement)) throw new Error(`Masks can only be applied to an HTMLInputElement (id: ${t.id}).`);
  Ss.set(e, t), ta(t, { ...ks.get(e), onChange: ({ valueAfter: r, meta: n }) => {
    e.props._maskValue = r, e.input({ maskValue: r }), e.props._overlayParts = Wn(n);
  } }, e);
}
const px = { schema: /* @__PURE__ */ Yb(/* @__PURE__ */ Zb(/* @__PURE__ */ qb("$label"), /* @__PURE__ */ Ub(/* @__PURE__ */ Ni("prefix"), /* @__PURE__ */ zb(), /* @__PURE__ */ ox(/* @__PURE__ */ ax(/* @__PURE__ */ sx(/* @__PURE__ */ ex("$part.value"), /* @__PURE__ */ tx("$part.value"), /* @__PURE__ */ rx("$part.value"), /* @__PURE__ */ nx("$part.value")))), /* @__PURE__ */ ix(), /* @__PURE__ */ Gb(), /* @__PURE__ */ Ni("suffix"))), /* @__PURE__ */ Xb("$help"), /* @__PURE__ */ Jb(/* @__PURE__ */ Qb("$message.value"))), type: "input", props: ["allowIncomplete", "mask", "mode", "tokens", "showMask", "unmaskValue", "prefix", "suffix", "reverse", "overlay"], family: "text", features: [$u, function(e) {
  e.addProps(["_maskValue", "_overlayParts"]), e.on("created", () => {
    var t, r, n, o, s;
    const a = eu(typeof e._value == "string" ? e._value : "");
    Ss.set(e, a), Bi.set(e, a), e.props.allowIncomplete = H(e.props.allowIncomplete), e.props.overlay = H(e.props.overlay);
    const i = !(e.props.showMask !== void 0 && !H(e.props.showMask));
    e.props.unmaskValue = H(e.props.unmaskValue), e.hook.prop((p, u) => (p.prop === "unmaskValue" && (p.value = H(p)), u(p)));
    const l = { placeholder: i, pattern: (t = e.props.mask) !== null && t !== void 0 ? t : "", mode: (r = e.props.mode) !== null && r !== void 0 ? r : "shift", partOverrides: (n = e.props.tokens) !== null && n !== void 0 ? n : {}, prefix: (o = e.props.prefix) !== null && o !== void 0 ? o : void 0, suffix: (s = e.props.suffix) !== null && s !== void 0 ? s : void 0, reverse: H(e.props.reverse) };
    ks.set(e, l), e.hook.input((p, u) => {
      const c = (function(f, d) {
        const $ = Ss.get(f), h = typeof d == "object" && "maskValue" in d;
        d = typeof d == "string" ? d : h ? d.maskValue : "";
        const y = Bi.get(f);
        y.value = ra(y, d);
        const m = Di(y, ks.get(f)), S = uu(y, f.props.allowIncomplete);
        return d === $.value ? f.props.unmaskValue ? S ?? "" : S === null ? "" : typeof d == "string" ? d : "" : d === "" && $.value !== "" && !f.props.allowIncomplete ? ($.value = m, f.props._maskValue = m, f.props._overlayParts = Wn(xs(y) || []), d) : (h || m === f.props._maskValue || ($.value = m, f.props._maskValue = m, f.props._overlayParts = Wn(xs(y) || [])), S === null ? "" : f.props.unmaskValue ? S : m);
      })(e, p);
      return u(c);
    }), e.props._maskValue = Di(a, l, e), e.input(e.props._maskValue, !1), e.context && (e.context.handlers.DOMInput = (p) => {
      e.emit("dom-input-event", p);
    }), fe(`${e.props.id}`, lx.bind(null, e), e.props.__root);
  });
}] }, ne = /* @__PURE__ */ Ee("tf"), { outer: ux, wrapper: cx, icon: Ue, help: dx, messages: fx, message: mx } = /* @__PURE__ */ Me(ne), hx = ne("fieldset", () => ({ $el: "fieldset", attrs: { id: '$id + "_fieldset"', role: "presentation", "aria-describedby": { if: "$help", then: '$: "help-" + $id', else: void 0 } } })), gx = ne("legend", () => ({ if: "$label", $el: "legend" })), vx = ne("source", () => ({ $el: "div", attrs: { id: '$id + "_source"', class: '$classes.transferlist + " " + $classes.source' } })), $x = ne("sourceHeader", () => ({ $el: "div", attrs: { id: '$id + "_source_header"', role: "presentation", class: '$classes.transferlistHeader + " " + $classes.sourceHeader' } })), yx = ne("sourceHeaderLabel", () => ({ if: "$sourceLabel", $el: "label", attrs: { id: '$id + "_source_header_label"', for: '$id + "_source_search_input"', class: '$classes.transferlistHeaderLabel + " " + $classes.sourceHeaderLabel' }, children: "$sourceLabel || $label" })), bx = ne("sourceHeaderItemCount", () => ({ $el: "span", attrs: { id: '$id + "_source_header_item_count"', role: "presentation", "aria-label": '$sourceOptions.length " items"', class: '$classes.transferlistHeaderItemCount + " " + $classes.sourceHeaderItemCount' } })), xx = ne("targetHeaderLabel", () => ({ if: "$targetLabel", $el: "label", attrs: { id: '$id + "_target_header_label"', for: '$id + "_target_search_input"', class: '$classes.transferlistHeaderLabel + " " + $classes.targetHeaderLabel' }, children: "$targetLabel || $label" })), wx = ne("targetHeaderItemCount", () => ({ $el: "span", attrs: { id: '$id + "_target_header_item_count"', role: "presentation", "aria-label": '$targetOptions.length + " items"', class: '$classes.transferlistHeaderItemCount + " " + $classes.targetHeaderItemCount' }, children: "$targetOptions.length" })), _x = ne("sourceControls", () => ({ $el: "div", if: "$searchable", attrs: { id: '$id + "_source_controls"', class: '$classes.transferlistControls + " " + $classes.sourceControls' } })), kx = ne("sourceSearch", () => ({ if: "$searchable", $el: "div", attrs: { id: '$id + "_source_search"', class: '$classes.transferlistSearch + " " + $classes.sourceSearch' } })), Sx = ne("sourceSearchInput", () => ({ $el: "input", attrs: { id: '$id + "_source_search_input"', type: "text", placeholder: "$placeholder", onInput: "$handlers.onSearch", value: "$inputText", onKeydown: "$handlers.sourceSearchKeydown", disabled: "$disabled", "aria-label": "Search", role: "searchbox", autocomplete: "off", class: '$classes.transferlistSearchInput + " " + $classes.sourceSearchInput', onFocus: "$handlers.sourceSearchFocus", onBlur: "$handlers.sourceSearchBlur" } })), Dx = ne("targetSearch", () => ({ if: "$targetSearchable", $el: "div", attrs: { id: '$id + "_target_search"', class: '$classes.transferlistSearch + " " + $classes.targetSearch' } })), Cx = ne("targetSearchInput", () => ({ $el: "input", attrs: { id: '$id + "_target_search_input"', type: "text", placeholder: "$placeholder", onInput: "$handlers.onTargetSearch", value: "$targetInputText", onKeydown: "$handlers.targetSearchKeydown", disabled: "$disabled", "aria-label": "Search", role: "searchbox", autocomplete: "off", class: '$classes.transferlistSearchInput + " " + $classes.targetSearchInput', onFocus: "$handlers.targetSearchFocus", onBlur: "$handlers.targetSearchBlur" } })), Lx = ne("targetControls", () => ({ $el: "div", if: "$targetSearchable", attrs: { id: '$id + "_target_controls"', class: '$classes.transferlistControls + " " + $classes.targetControls' } })), Ax = ne("sourceSearchClear", () => ({ $el: "button", if: '$inputText !== ""', attrs: { id: '$id + "_source_search_clear"', type: "button", onClick: "$handlers.clearSearch", "aria-label": "Clear Source Search", class: '$classes.transferlistSearchClear + " " + $classes.sourceSearchClear' } })), Tx = ne("targetSearchClear", () => ({ $el: "button", if: '$targetInputText !== ""', attrs: { id: '$id + "_target_search_clear"', type: "button", onClick: "$handlers.clearTargetSearch", "aria-label": "Clear Target Search", class: '$classes.transferlistSearchClear + " " + $classes.targetSearchClear' } })), Ix = ne("sourceListItems", () => ({ $el: "ul", attrs: { id: '$id + "_source_list_items"', "aria-activedescendant": "$activeDescendant", onMouseenter: "$handlers.onMouseenter(true)", onMouseout: "$handlers.onMouseleave(true)", role: "listbox", "aria-multiselectable": "true", "aria-roledescription": "List of options to choose from.", class: '$classes.transferlistListItems + " " + $classes.sourceListItems', onKeydown: "$handlers.sourceListKeydown", tabindex: "$searchable || $sourceOptions.length === 0 && -1 || 0", onFocus: "$handlers.sourceListFocused", onBlur: "$handlers.sourceListBlurred", "aria-label": "Source list" } })), Ex = ne("sourceListItem", () => ({ for: ["option", "index", "$sourceOptions"], $el: "li", attrs: { id: '$id + "_source_list_item_" + $index', "data-value": "$option.value", "aria-selected": "$transferOnSelect === false && $fns.isSelected($option, $selectedSourceItems)", "data-is-active": "$fns.isActive($option, $activeValue)", "data-disabled": "$option.attrs.disabled", role: "option", onClick: "$handlers.listitemClick($option, true)", onTouchstartPassive: "$handlers.listitemTouchstart($option, true)", onTouchmovePassive: "$handlers.listitemTouchmove($option, true)", onTouchend: "$handlers.listitemTouchend($option, true)", key: "$option.value", class: '$classes.transferlistListItem + " " + $classes.sourceListItem' } })), Mx = ne("sourceOption", () => ({ $el: "div", attrs: { "data-checked": "$fns.isSelected($option, $selectedSourceItems)", class: '$classes.transferlistOption + " " + $classes.sourceOption' } })), Ox = ne("sourceLoadMore", () => ({ $el: "li", if: "$state.loading || $state.hasNextPage", attrs: { id: '$id + "_source_load_more"', key: "loadMore", onClick: "$handlers.listitemClick($loadMoreOption)", "aria-selected": "false", "data-is-active": "$fns.isActive($loadMoreOption)", tabindex: "-1" } })), Px = ne("loadMoreInner", "span"), Fx = ne("target", () => ({ $el: "div", attrs: { id: '$id + "_target"', class: '$classes.transferlist + " " + $classes.target' } })), Vx = ne("targetHeader", () => ({ $el: "div", attrs: { id: '$id + "_target_header"', role: "presentation", class: '$classes.transferlistHeader + " " + $classes.targetHeader' } })), Nx = ne("targetListItems", () => ({ $el: "ul", attrs: { id: "$id", "aria-activedescendant": "$activeDescendant", onMouseenter: "$handlers.onMouseenter(false)", onMouseout: "$handlers.onMouseleave(false)", role: "listbox", class: '$classes.transferlistListItems + " " + $classes.targetListItems', tabindex: "$targetOptions.length === 0 && -1 || 0", onKeydown: "$handlers.targetListKeydown", onFocus: "$handlers.targetListFocused", onBlur: "$handlers.targetListBlurred", "aria-label": "Target list" } })), Bx = ne("targetListItem", () => ({ for: ["option", "index", "$targetOptions"], $el: "li", attrs: { id: '$id + "_target_list_item_" + $index', "data-disabled": "$option.attrs.disabled", "data-value": "$option.value", "aria-selected": "$transferOnSelect === false && $fns.isSelected($option, $selectedTargetItems)", "data-is-active": "$fns.isActive($option, $activeValue)", role: "option", onClick: "$handlers.listitemClick($option, false)", onTouchstartPassive: "$handlers.listitemTouchstart($option, false)", onTouchmovePassive: "$handlers.listitemTouchmove($option, false)", onTouchend: "$handlers.listitemTouchend($option, false)", key: "$option.value", class: '$classes.transferlistListItem + " " + $classes.targetListItem' } })), Rx = ne("targetOption", () => ({ $el: "div", attrs: { id: '$id + "_target_list_item_" + $index + "_option"', "data-checked": "$fns.isSelected($option, $selectedTargetItems)", class: '$classes.transferlistOption + " " + $classes.targetOption' } })), Hx = ne("transferControls", () => ({ $el: "div", attrs: { id: '$id + "_transfer_controls"' } })), Wx = ne("transferButtonForward", () => ({ if: "$transferOnSelect !== true", $el: "button", attrs: { id: '$id + "_transfer_button_forward"', type: "button", disabled: "$selectedSourceItems.length === 0 || $disabled || ($max && $value && $value.length >= $max)", onClick: "$handlers.transferForward", "aria-label": "$ui.addSelectedValues.value", title: "$ui.addSelectedValues.value", class: '$classes.transferlistButton + " " + $classes.transferButtonForward' } })), Kx = ne("transferButtonForwardAll", () => ({ $el: "button", attrs: { id: '$id + "_transfer_button_forward_all"', type: "button", disabled: "$sourceOptions.length === 0 || $disabled || ($max && $value && $value.length >= $max)", onClick: "$handlers.transferForwardAll", "aria-label": "$ui.addAllValues.value", title: "$ui.addAllValues.value", onFocus: "$handlers.transferForwardAllFocused", class: '$classes.transferlistButton + " " + $classes.transferButtonForwardAll' } })), jx = ne("transferButtonBackward", () => ({ if: "$transferOnSelect !== true", $el: "button", attrs: { id: '$id + "_transfer_button_backward"', onClick: "$handlers.transferBackward", type: "button", disabled: "$selectedTargetItems.length === 0 || $targetOptions.length === 0 || $disabled", "aria-label": "$ui.removeSelectedValues.value", title: "$ui.removeSelectedValues.value", class: '$classes.transferlistButton + " " + $classes.transferButtonBackward' } })), Yx = ne("transferButtonBackwardAll", () => ({ $el: "button", attrs: { id: '$id + "_transfer_button_backward_all"', onClick: "$handlers.transferBackwardAll", type: "button", disabled: "$targetOptions.length === 0 || $disabled", "aria-label": "$ui.removeAllValues.value", title: "$ui.removeAllValues.value", class: '$classes.transferlistButton + " " + $classes.transferButtonBackwardAll' } })), mn = ne("controlLabel", "span"), Zx = ne("sourceEmptyMessage", () => ({ $el: "li", if: "$showSourceEmptyMessage && $sourceEmptyMessage && $state.loading !== true", attrs: { id: '$id + "_source_empty_message"', key: "$sourceEmptyMessage", role: "presentation" } })), Ux = ne("targetEmptyMessage", () => ({ $el: "li", if: "$showTargetEmptyMessage && $targetEmptyMessage", attrs: { id: '$id + "_empty_message"', key: "$emptyMessage", role: "presentation" } })), Ri = ne("emptyMessageInner", "span"), hr = /* @__PURE__ */ Symbol(), gr = /* @__PURE__ */ new WeakSet(), qr = /* @__PURE__ */ new WeakSet();
function sa(e, t, r, n) {
  if (!(e.props.disabled || (e.props.isSourceOption = r, e.props.isSourceOption && Array.isArray(e.value) && e.value.length >= e.props.max))) if (r) {
    if (e.props.selectedSourceItems.includes(t)) return e.props.selectedSourceItems = e.props.selectedSourceItems.filter((o) => o !== t), e.props.activeValue = void 0, void (e.props.activeDescendant = void 0);
    e.props.selectedTargetItems = [], e.props.selectedSourceItems = [...e.props.selectedSourceItems, t];
  } else {
    if (e.props.selectedTargetItems.includes(t)) return void (e.props.selectedTargetItems = e.props.selectedTargetItems.filter((o) => o !== t));
    e.props.selectedSourceItems = [], e.props.selectedTargetItems = [...e.props.selectedTargetItems, t];
  }
}
function zn(e, t) {
  if (e.props.sourceListOrigin = !0, e.props.maxReached) return;
  if (t) {
    const n = Array.isArray(e.value) ? [...e.value, t] : [t];
    return void e.input(n);
  }
  const r = e.props.selectedSourceItems.map((n) => F(n));
  Array.isArray(e.value) ? e.input([...e.value, ...r]) : e.input(r), e.props.selectedSourceItems = [];
}
function Gn(e, t) {
  if (e.props.sourceListOrigin = !1, t) {
    const n = Array.isArray(e.value) ? e.value.filter((o) => !W(o, t)) : [];
    return void e.input(n);
  }
  const r = e.props.selectedTargetItems.map((n) => F(n));
  if (Array.isArray(e.value)) {
    const n = e.value.filter((o) => !r.includes(o));
    e.input(n);
  }
  e.props.selectedTargetItems = [];
}
function yu(e) {
  var t, r;
  if (e.props.activeValue === hr) {
    const o = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_source_load_more`);
    return void (o && o.scrollIntoView({ block: "nearest", inline: "start" }));
  }
  const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.activeDescendant);
  n && n.scrollIntoView({ block: "nearest", inline: "start" });
}
function hn(e) {
  var t;
  if (Array.isArray(e.value)) {
    const r = [];
    let n = [...e.props.options];
    e.value.forEach((o) => {
      const s = e.props.memoOptions.find((a) => W(F(a), o));
      if (s && !s.noOptionFound)
        r.push(s), e.props.options.findIndex((i) => W(F(i), o)) !== -1 && (n = n.filter((i) => !W(F(i), o)));
      else {
        const a = n.find((i) => W(F(i), o));
        a ? (r.push(a), n = n.filter((i) => !W(F(i), o))) : r.push({ label: String(o), value: o, noOptionFound: !0 });
      }
    }), e.props.targetOptions = e.props.targetInputText ? r.filter((o) => e.props.filter(o, e.props.targetInputText, e)) : r, e.props.sourceOptions = n;
  } else e.props.sourceOptions = [...e.props.options], e.props.targetOptions = [];
  if (e.props.skipSetActiveValue) return void (e.props.skipSetActiveValue = !1);
  !((t = e.props.__root) === null || t === void 0) && t.getElementById(e.props.id + "_source_list_items") && bu(e);
}
function bu(e) {
  var t, r, n, o, s, a, i, l, p;
  if (e.props.isDragging) return;
  if (e.props.targetSearchActive) {
    if (((r = (t = e.props.__root) === null || t === void 0 ? void 0 : t.activeElement) === null || r === void 0 ? void 0 : r.id) === `${e.props.id}_target_search_input`) {
      const f = e.props.targetOptions.find((d) => {
        var $;
        return !(!(($ = d.attrs) === null || $ === void 0) && $.disabled);
      });
      return f ? void (e.props.activeValue = F(f)) : void (e.props.activeValue = void 0);
    }
    return;
  }
  if (e.props.sourceSearchActive) {
    if (((o = (n = e.props.__root) === null || n === void 0 ? void 0 : n.activeElement) === null || o === void 0 ? void 0 : o.id) === `${e.props.id}_source_search_input`) {
      const f = e.props.sourceOptions.find((d) => {
        var $;
        return !(!(($ = d.attrs) === null || $ === void 0) && $.disabled);
      });
      return f ? void (e.props.activeValue = F(f)) : void (e.props.activeValue = void 0);
    }
    e.props.sourceSearchActive = !1;
  }
  if (e.props.transferOnSelect === !1) return void (e.props.activeValue = void 0);
  const u = e.props.sourceListOrigin ? e.props.sourceOptions : e.props.targetOptions;
  let c = !1;
  for (let f = e.props.activeIndex; f <= u.length; f++) if (!(!((s = u.attrs) === null || s === void 0) && s.disabled) && u[f]) {
    c = !0, e.props.activeValue = F(u[f]);
    break;
  }
  if (!c && u.length) {
    for (let f = e.props.activeIndex; f >= 0; f--) if (!(!((a = u.attrs) === null || a === void 0) && a.disabled) && u[f]) return c = !0, void (e.props.activeValue = F(u[f]));
  }
  if (!c) {
    let f;
    f = e.props.sourceListOrigin ? (p = e.props.__root) === null || p === void 0 ? void 0 : p.getElementById(`${e.props.id}`) : e.props.searchable ? (i = e.props.__root) === null || i === void 0 ? void 0 : i.getElementById(`${e.props.id}_source_search_input`) : (l = e.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${e.props.id}_source_list_items`), f && f.focus();
  }
}
function xu(e, t) {
  return (t ? e.props.sourceOptions : e.props.targetOptions).find((r) => {
    var n;
    return !(!((n = r.attrs) === null || n === void 0) && n.disabled);
  });
}
function qx(e) {
  Array.isArray(e.value) && e.value.forEach(async (t) => {
    Vp(e, t, (function(r, n) {
      return [...r.props.options, ...r.props.memoOptions].find((s) => W(F(s), n));
    })(e, t));
  });
}
function zx(e) {
  e.context && (e.context.handlers.loadMore = Kn.bind(null, e), e.context.fns.getSourceItemCount = (t) => e.props.transferOnSelect === !1 && t.length ? t.length + "/" + e.props.sourceOptions.length : e.props.sourceOptions.length, e.context.fns.getTargetItemCount = (t) => e.props.transferOnSelect === !1 && t.length ? t.length + "/" + e.props.targetOptions.length : e.props.targetOptions.length, e.context.fns.isActive = (t, r) => {
    if (!e.props.isDragging && !e.props.touchStarted) return W(r, F(t)) || void 0;
  }, e.context.fns.isSelected = (t, r) => !!r && !!Array.isArray(r) && r.includes(t), e.context.fns.optionLoading = (t) => e.props.optionLoaderValues.includes(F(t)), e.context.handlers.clearSearch = () => {
    (function(t) {
      var r;
      t.props.sourceSearchActive = !1, t.props.inputText = "", Ke(t, "", !0);
      const n = (r = t.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${t.props.id}_source_search_input`);
      n && n.focus();
    })(e);
  }, e.context.handlers.clearTargetSearch = () => {
    (function(t) {
      var r;
      t.props.targetSearchActive = !1, t.props.targetInputText = "";
      const n = [.../* @__PURE__ */ new Set([...t.props.options, ...t.props.memoOptions])], o = [];
      for (const a of t.value) {
        const i = n.find((l) => F(l) === a);
        i && o.push(i);
      }
      t.props.targetOptions = o;
      const s = (r = t.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${t.props.id}_target_search_input`);
      s && s.focus();
    })(e);
  }, e.context.handlers.sourceSearchBlur = (t) => {
    setTimeout(() => {
      var r;
      if (t.relatedTarget && t.relatedTarget instanceof HTMLElement && (t.relatedTarget.id === `${e.props.id}_source_list_items` || t.relatedTarget.id === `${e.props.id}`)) {
        const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_source_search_input`);
        if (!n) return;
        n.focus();
      } else e.props.activeValue = void 0;
    });
  }, e.context.handlers.targetSearchBlur = (t) => {
    setTimeout(() => {
      var r;
      if (t.relatedTarget && t.relatedTarget instanceof HTMLElement && (t.relatedTarget.id === `${e.props.id}_source_list_items` || t.relatedTarget.id === `${e.props.id}`)) {
        const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_target_search_input`);
        if (!n) return;
        n.focus();
      } else e.props.activeValue = void 0;
    });
  }, e.context.handlers.listitemClick = (t, r) => (n) => {
    Hi(e, t, r);
  }, e.context.handlers.transferForward = zn.bind(null, e, void 0), e.context.handlers.transferForwardAll = () => {
    let t;
    if (e.props.maxReached) return;
    const r = e.props.sourceOptions.map((n) => F(n));
    t = Array.isArray(e.value) ? [...e.value, ...r] : [...r], e.input(t), e.props.selectedSourceItems = [];
  }, e.context.handlers.transferBackward = Gn.bind(null, e, void 0), e.context.handlers.transferBackwardAll = () => {
    Array.isArray(e.value) && (e.input([]), e.props.selectedTargetItems = []);
  }, e.context.handlers.onSearch = (t) => {
    (function(r, n) {
      r.props.sourceSearchActive = !0;
      const o = n.target;
      r.props.inputText = o.value, Ke(r, o.value, !0);
    })(e, t);
  }, e.context.handlers.onTargetSearch = (t) => {
    (function(r, n) {
      r.props.targetSearchActive = !0;
      const o = n.target;
      r.props.targetInputText = o.value;
      const s = [.../* @__PURE__ */ new Set([...r.props.memoOptions, ...r.props.options])], a = [];
      for (const l of r.value) {
        const p = s.find((u) => F(u) === l);
        p && a.push(p);
      }
      const i = [...new Map([...r.props.targetOptions, ...a].map((l) => [JSON.stringify(l), l])).values()];
      r.props.targetOptions = i.filter((l) => r.props.filter(l, o.value, r)), r.props.targetOptions.length === 0 ? r.props.showTargetEmptyMessage = !0 : r.props.showTargetEmptyMessage = !1, bu(r);
    })(e, t);
  }, e.context.handlers.onMouseenter = (t) => (r) => {
    r.type !== "touchstart" && (t ? e.props.mouseOnSource = !0 : e.props.mouseOnTarget = !0);
  }, e.context.handlers.onMouseleave = (t) => (r) => {
    var n;
    if (r.type === "touchend") return;
    const o = (n = e.props.__root) === null || n === void 0 ? void 0 : n.getElementById(t ? `${e.props.id}_source_list_items` : `${e.props.id}`);
    o && (o.contains(r.relatedTarget) || (e.props.trackHover = !1, e.props.activeValue = void 0, e.props.activeDescendant = void 0, e.props.activeIndex = void 0, t ? e.props.mouseOnSource = !1 : e.props.mouseOnTarget = !1));
  }, e.context.handlers.listitemClick = (t, r) => (n) => {
    n instanceof MouseEvent && e.props.touchStarted || Hi(e, t, r);
  }, e.context.handlers.listitemTouchstart = () => () => {
    (function(t) {
      t.props.touchStarted = !0;
    })(e);
  }, e.context.handlers.listitemTouchend = (t, r) => (n) => {
    (function(o, s, a) {
      if (o.props.touchMoved) return o.props.touchMoved = !1, void (o.props.touchStarted = !1);
      const i = F(s);
      o.props.activeIndex = o.props.sourceOptions.findIndex((l) => F(l) === i), o.props.transferOnSelect ? a ? zn(o, i) : Gn(o, i) : sa(o, s, a);
    })(e, t, r);
  }, e.context.handlers.listitemTouchmove = () => (t) => {
    (function(r) {
      r.props.touchMoved = !0;
    })(e);
  }, e.context.handlers.sourceSearchFocus = (t) => {
    gn(e, !0);
  }, e.context.handlers.targetSearchFocus = (t) => {
    gn(e, !1);
  }, e.context.handlers.sourceListFocused = (t) => {
    gn(e, !0);
  }, e.context.handlers.targetListFocused = () => {
    gn(e, !1);
  }, e.context.handlers.sourceListBlurred = (t) => {
    e.props.activeValue = void 0;
  }, e.context.handlers.targetListBlurred = (t) => {
    e.props.activeValue = void 0;
  }, e.context.handlers.sourceListKeydown = (t) => {
    vn(e, t, !0);
  }, e.context.handlers.targetListKeydown = (t) => {
    vn(e, t, !1);
  }, e.context.handlers.sourceSearchKeydown = (t) => {
    vn(e, t, !0);
  }, e.context.handlers.targetSearchKeydown = (t) => {
    vn(e, t, !1);
  });
}
function Hi(e, t, r, n) {
  var o;
  if (F(t) === hr) return void ((o = e.context) === null || o === void 0 || o.handlers.loadMore(!0));
  const s = F(t);
  e.props.activeIndex = e.props.sourceOptions.findIndex((a) => W(F(a), s)), e.props.transferOnSelect ? r ? zn(e, s) : Gn(e, s) : sa(e, t, r);
}
function gn(e, t) {
  const r = xu(e, t);
  r && (e.props.sourceListOrigin = t, e.props.activeValue = F(r));
}
function vn(e, t, r) {
  if (t.key === "ArrowDown" || t.key === "ArrowUp") (function(n, o, s) {
    var a, i, l;
    n.preventDefault();
    const p = s ? o.props.sourceOptions : o.props.targetOptions, u = p.reduce((f, d) => {
      var $;
      return !(($ = d?.attrs) === null || $ === void 0) && $.disabled || f.push(F(d)), f;
    }, []);
    !((a = o.store.hasNextPage) === null || a === void 0) && a.value && u.push(hr);
    const c = u.indexOf(o.props.activeValue);
    if (n.key === "ArrowUp" && c !== 0) for (let f = c - 1; f >= 0; f--) {
      o.props.sourceListOrigin = s, o.props.activeValue = u[c - 1];
      break;
    }
    else if (n.key === "ArrowDown" && c !== u.length - 1) {
      for (let f = c + 1; f < u.length; f++) if (!(!((l = (i = p[f]) === null || i === void 0 ? void 0 : i.attrs) === null || l === void 0) && l.disabled)) {
        o.props.sourceListOrigin = s, o.props.activeValue = u[f];
        break;
      }
    }
    yu(o);
  })(t, e, r);
  else if (t.key === "ArrowRight" || t.key === "ArrowLeft") {
    if (t.key === "ArrowLeft" && r || t.key === "ArrowRight" && !r) return;
    (function(n, o, s) {
      o.props.searchable || (n.preventDefault(), (function(a, i) {
        var l, p, u;
        if (xu(a, !i)) if (i) {
          const c = (l = a.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${a.props.id}`);
          c && c.focus();
        } else if (a.props.searchable) {
          const c = (p = a.props.__root) === null || p === void 0 ? void 0 : p.getElementById(`${a.props.id}_source_search_input`);
          c && c.focus();
        } else {
          const c = (u = a.props.__root) === null || u === void 0 ? void 0 : u.getElementById(`${a.props.id}_source_list_items`);
          c && c.focus();
        }
      })(o, s));
    })(t, e, r);
  } else t.key === "Enter" && (function(n, o, s) {
    var a;
    if (n.preventDefault(), !o.props.activeValue) return;
    if (o.props.activeValue === hr) return void ((a = o.context) === null || a === void 0 || a.handlers.loadMore(!0));
    const i = s ? o.props.sourceOptions : o.props.targetOptions, l = i.findIndex((u) => F(u) === o.props.activeValue);
    o.props.activeIndex = l;
    const p = i[l];
    p && (o.props.transferOnSelect ? s ? zn(o, F(p)) : Gn(o, F(p)) : sa(o, p, s));
  })(t, e, r);
}
function Gx(e) {
  e.on("created", () => {
    if (typeof e.props.optionsLoader == "function" && (e.props.skipSetActiveValue = !0, cr(e)), zx(e), e.props.disabled && (e.props.draggable = !1), Te) {
      fe(e.props.id + "_source_list_items", (r) => {
        r instanceof HTMLElement && (function(n, o) {
          if (!n.context) return;
          function s() {
            return n.props.sourceOptions.map((l) => F(l));
          }
          function a() {
            return [];
          }
          const i = { longTouch: !0, draggingClass: n.context.classes.dragging, dropZoneClass: n.context.classes.dropZone, group: n.props.id, root: n.props.__root || document, disabled: !n.props.draggable || n.props.maxReached, touchDraggingClass: n.context.classes.touchDragging, touchDropZoneClass: n.context.classes.touchDropZone, selectionDraggingClass: n.context.classes.selectionDragging, selectionDropZoneClass: n.context.classes.selectionDropZone, touchSelectionDraggingClass: n.context.classes.touchSelectionDragging, touchSelectionDropZoneClass: n.context.classes.touchSelectionDropZone, longTouchClass: n.context.classes.longTouch, handleTouchmove(l) {
            n.props.selectedSourceItems = [], $p(l);
          }, draggable: (l) => l.getAttribute("role") === "option" };
          i.plugins = [Ra({ handleDragstart(l) {
            n.props.isDragging = !0, n.props.trackHover = !1, n.props.activeValue = void 0, n.props.activeDescendant = void 0, Vn(l);
          }, handleEnd(l) {
            Nn(l), n.props.isDragging = !1, n.props.activeValue = void 0, n.props.activeDescendant = void 0, n.props.activeDescendant = void 0, n.props.isDragging = !1, n.props.selectedTargetItems = [], n.props.selectedSourceItems = [];
          }, handleTouchstart(l) {
            n.props.isDragging = !0, n.props.trackHover = !1, n.props.activeValue = void 0, n.props.activeDescendant = void 0, n.props.mouseOnSource = !1, n.props.mouseOnTarget = !1, Bn(l);
          }, selections: () => n.props.selectedSourceItems.map((l) => F(l)) })], ve({ parent: o, getValues: s, setValues: a, config: i }), n.on("prop:disabled", ({ payload: l }) => {
            i.disabled = l, ve({ parent: o, getValues: s, setValues: a, config: i });
          }), n.on("prop:draggable", ({ payload: l }) => {
            i.disabled = !l, ve({ parent: o, getValues: s, setValues: a, config: i });
          }), n.on("prop:maxReached", ({ payload: l }) => {
            i.disabled = l, ve({ parent: o, getValues: s, setValues: a, config: i });
          });
        })(e, r);
      }, e.props.__root), fe(`${e.props.id}`, (r) => {
        r instanceof HTMLElement && (function(n, o) {
          if (!n.context) return;
          function s() {
            return n.props.targetOptions.map((l) => F(l));
          }
          function a(l, p) {
            n.props.sourceListOrigin = !0, n.input(l);
          }
          const i = { longTouch: !0, root: n.props.__root, group: n.props.id, disabled: !n.props.draggable, draggingClass: n.context.classes.dragging, dropZoneClass: n.context.classes.dropZone, touchDraggingClass: n.context.classes.touchDragging, touchDropZoneClass: n.context.classes.touchDropZone, selectionDraggingClass: n.context.classes.selectionDragging, selectionDropZoneClass: n.context.classes.selectionDropZone, touchSelectionDraggingClass: n.context.classes.touchSelectionDragging, touchSelectionDropZoneClass: n.context.classes.touchSelectionDropZone, longTouchClass: n.context.classes.longTouch, draggable: (l) => l.getAttribute("role") === "option", plugins: [] };
          i.plugins = [Ra({ handleDragstart(l) {
            n.props.isDragging = !0, n.props.trackHover = !1, n.props.activeValue = void 0, Vn(l);
          }, handleEnd(l) {
            Nn(l), n.props.selectedTargetItems = [], n.props.selectedSourceItems = [], n.props.activeValue = void 0, n.props.trackHover = !0, n.props.isDragging = !1;
          }, handleTouchstart(l) {
            n.props.trackHover = !1, n.props.activeValue = void 0, n.props.isDragging = !0, n.props.activeDescendant = void 0, Bn(l);
          }, selections: () => n.props.selectedTargetItems.map((l) => F(l)) })], ve({ parent: o, getValues: s, setValues: a, config: i }), n.on("prop:disabled", ({ payload: l }) => {
            i.disabled = l, ve({ parent: o, getValues: s, setValues: a, config: i });
          }), n.on("prop:draggable", ({ payload: l }) => {
            i.disabled = !l, ve({ parent: o, getValues: s, setValues: a, config: i });
          });
        })(e, r);
      }, e.props.__root);
      const t = (r) => {
        var n;
        if (e.props.isDragging) return;
        e.props.mouseX = r.clientX, e.props.mouseY = r.clientY;
        const o = e.props.mouseOnSource ? `${e.props.id}_source_list_items` : `${e.props.id}`, s = (n = e.props.__root) === null || n === void 0 ? void 0 : n.getElementById(o);
        if (s) {
          const a = s.getBoundingClientRect();
          r.clientX > a.x && r.clientX < a.x + a.width && r.clientY > a.y && r.clientY < a.y + a.height && (e.props.trackHover = !0);
        }
      };
      document.addEventListener("mousemove", t);
    }
  });
}
function Ds(e, t) {
  var r;
  let n = null, o = "", s = [];
  if (e.props.mouseOnSource) {
    if (n = gr.has(e), o = `${e.props.id}_source_list_item`, s = [...e.props.sourceOptions], !s || !s.length || n) return s = [], o = "", void (n = null);
  } else if (e.props.mouseOnTarget && (n = qr.has(e), o = `${e.props.id}_target_list_item`, s = [...e.props.targetOptions], !s || !s.length || n)) return s = [], o = "", void (n = null);
  const a = s.reduce((l, p, u) => {
    var c, f;
    if (!((c = p.attrs) === null || c === void 0) && c.disabled) return l;
    const d = (f = e.props.__root) === null || f === void 0 ? void 0 : f.getElementById(o + `_${u}`);
    return d && l.push([d, p]), l;
  }, []), i = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_load_more`);
  i && a.push([i, e.props.loadMoreOption]), e.props.mouseOnSource && gr.add(e), e.props.mouseOnTarget && qr.add(e), a.length && wu(e, a, null, t);
}
function wu(e, t, r, n) {
  const o = n ? n.getBoundingClientRect() : { top: 0, bottom: 0 };
  if (r = null, e.props.trackHover) {
    if (e.props.mouseY > o.top && e.props.mouseY < o.bottom) {
      let s = r || 0, a = r;
      const i = (l, p) => {
        var u;
        const c = p[0], { y: f, height: d, x: $, width: h } = c.getBoundingClientRect();
        if (e.props.mouseX > $ && e.props.mouseX < $ + h && e.props.mouseY > f && e.props.mouseY < f + d) {
          r = l;
          const y = p[1];
          return e.props.activeValue = y && !(!((u = y.attrs) === null || u === void 0) && u.disabled) ? F(y) : void 0, !0;
        }
        return !1;
      };
      do {
        if (s !== null && i(s, t[s]) || a !== null && i(a, t[a])) break;
        s !== null && (s++, s > t.length - 1 && (s = null)), a !== null && (a--, a < 0 && (a = null));
      } while (s !== null || a !== null);
    }
  } else yu(e);
  e.props.mouseOnSource || e.props.mouseOnTarget ? e.props.mouseOnSource && gr.has(e) || e.props.mouseOnTarget && qr.has(e) ? requestAnimationFrame(wu.bind(null, e, t, r, n)) : Ds(e, n) : (gr.delete(e), qr.delete(e));
}
const Xx = { schema: /* @__PURE__ */ ux(/* @__PURE__ */ hx(/* @__PURE__ */ gx("$label"), /* @__PURE__ */ dx("$help"), /* @__PURE__ */ cx(/* @__PURE__ */ vx(/* @__PURE__ */ $x(/* @__PURE__ */ yx(), /* @__PURE__ */ bx(/* @__PURE__ */ R("$optionsLoadingCounter > 0", /* @__PURE__ */ Ue("loader"), "$fns.getSourceItemCount($selectedSourceItems)"))), /* @__PURE__ */ _x(/* @__PURE__ */ kx(/* @__PURE__ */ Sx(), /* @__PURE__ */ Ax(/* @__PURE__ */ Ue("close")))), /* @__PURE__ */ Ix(/* @__PURE__ */ Zx(/* @__PURE__ */ Ri("$sourceEmptyMessage")), /* @__PURE__ */ Ex(/* @__PURE__ */ R("$transferOnSelect !== true && $fns.isSelected($option, $selectedSourceItems)", /* @__PURE__ */ Ue("selected")), /* @__PURE__ */ Mx("$option.label")), /* @__PURE__ */ Ox(/* @__PURE__ */ R("$state.loading && $optionLoadingCounter === 0 || $state.hasNextPage", /* @__PURE__ */ Px(/* @__PURE__ */ R("$state.loading", /* @__PURE__ */ Ue("loader")), "$state.loading && $ui.isLoading.value || $ui.loadMore.value"))))), /* @__PURE__ */ Hx(/* @__PURE__ */ Kx(/* @__PURE__ */ mn("$ui.addAllValues.value"), /* @__PURE__ */ Ue("fastForward")), /* @__PURE__ */ Wx(/* @__PURE__ */ mn("$ui.addSelectedValues.value"), /* @__PURE__ */ Ue("moveRight")), /* @__PURE__ */ jx(/* @__PURE__ */ mn("$ui.removeSelectedValues.value"), /* @__PURE__ */ Ue("moveLeft")), /* @__PURE__ */ Yx(/* @__PURE__ */ mn("$ui.removeAllValues.value"), /* @__PURE__ */ Ue("rewind"))), /* @__PURE__ */ Fx(/* @__PURE__ */ Vx(/* @__PURE__ */ xx(), /* @__PURE__ */ wx("$fns.getTargetItemCount($selectedTargetItems)")), /* @__PURE__ */ Lx(/* @__PURE__ */ Dx(/* @__PURE__ */ Cx(), /* @__PURE__ */ Tx(/* @__PURE__ */ Ue("close")))), /* @__PURE__ */ Nx(/* @__PURE__ */ Ux(/* @__PURE__ */ R("$state.loading !== true", /* @__PURE__ */ Ri("$targetEmptyMessage"))), /* @__PURE__ */ Bx(/* @__PURE__ */ R("$transferOnSelect !== true && $fns.isSelected($option, $selectedTargetItems)", /* @__PURE__ */ Ue("selected")), /* @__PURE__ */ Rx(/* @__PURE__ */ R("$fns.optionLoading($option, $optionLoaderValues)", "$ui.isLoading.value", "$option.label")))))), /* @__PURE__ */ fx(/* @__PURE__ */ mx("$message.value")))), type: "input", props: [], features: [
  /* @__PURE__ */ te("moveRight", "right"),
  /* @__PURE__ */ te("moveLeft", "left"),
  /* @__PURE__ */ te("fastForward", "fastForward"),
  /* @__PURE__ */ te("rewind", "rewind"),
  /* @__PURE__ */ te("close", "close"),
  /* @__PURE__ */ te("loader", "spinner"),
  /* @__PURE__ */ te("selected", "check"),
  /* @__PURE__ */ ie("isLoading"),
  /* @__PURE__ */ ie("loadMore"),
  /* @__PURE__ */ ie("addAllValues"),
  /* @__PURE__ */ ie("addSelectedValues"),
  /* @__PURE__ */ ie("removeSelectedValues"),
  /* @__PURE__ */ ie("removeAllValues"),
  mt,
  function(e) {
    (function(t) {
      t.addProps(["search", "options", "selectedItems", "activeValue", "activeIndex", "activeDescendant", "targetOptions", "sourceOptions", "optionLoader", "isLoadingOptions", "filterOptions", "inputText", "hasNextPage", "page", "targetLoading", "searchable", "sourceLabel", "targetLabel", "transferOnSelect", "disabled", "placeholder", "filter", "showSourceEmptyMessage", "showTargetEmptyMessage", "sourceEmptyMessage", "targetEmptyMessage", "clearOnSelect", "max", "maxReached", "debounce", "sourceListActive", "optionLoaderValues", "optionLoadingCounter", "optionsLoadingCounter", "memoOptions", "optionsLoaded", "selectedSourceItems", "selectedTargetItems", "draggable", "loadMore", "loadMoreOption", "targetSearchable", "targetInputText"]), t.props.loadMoreOption = { label: "Load more", value: hr }, t.props.draggable === void 0 ? t.props.draggable = !0 : t.props.draggable === "false" && (t.props.draggable = !1), t.props.optionsLoaderValues = [], t.props.selectedSourceItems = [], t.props.selectedTargetItems = [], t.props.optionsLoaded = void 0, t.props.memoOptions = [], t.props.multiple = !0, t.props.debounce = t.props.debounce ? parseInt(t.props.debounce) : 200, t.props.optionLoaderValues = [], t.props.optionsLoadingCounter = 0, t.props.optionLoadingCounter = 0, t.props.page = 1, t.props.hasNextPage = Np.bind(null, t), t.props.options ? t.props.options = [...t.props.options] : t.props.options = [], t.props.sourceOptions = [], t.props.targetOptions = [], "disabled" in t.props && (t.props.disabled = H(t.props.disabled)), t.props.searchable = H(t.props.searchable), t.props.searchable && (t.props.inputText = ""), t.props.targetSearchable = H(t.props.targetSearchable), t.props.targetSearchable && (t.props.targetInputText = ""), t.props.clearOnSelect = H(t.props.clearOnSelect), t.props.transferOnSelect === void 0 ? t.props.transferOnSelect = !0 : t.props.transferOnSelect === "false" && (t.props.transferOnSelect = !1), t.props.targetOptions.length && (t.props.targetOptionValues = t.props.targetOptions.map((r) => F(r))), t.props.initialOptions = [...t.props.options], t.props.max && (t.props.max = parseInt(t.props.max)), t.props.sourceListOrigin = void 0, typeof t.props.filter != "function" && (t.props.filter = (r, n) => r.label.toLowerCase().includes(n.toLowerCase()));
    })(e), (function(t) {
      t.on("commit", async ({ payload: r }) => {
        t.props.activeValue = void 0, t.props.max && (t.props.maxReached = r.length >= t.props.max), t.props.clearOnSelect && t.props.inputText && (t.props.reFilter = !0, t.props.inputText = ""), t.props.memoOptions = [.../* @__PURE__ */ new Set([...t.props.targetOptions, ...t.props.memoOptions])], t.props.searchable && t.props.reFilter && !t.props.initialLoad ? (Ke(t, t.props.inputText), t.props.reFilter = !1) : t.props.initialLoad || (t.isCreated || (t.props.skipSetActiveValue = !0), hn(t)), typeof t.props.optionLoader == "function" ? qx(t) : t.props.initialLoad || (t.props.memoOptions = [.../* @__PURE__ */ new Set([...t.props.targetOptions, ...t.props.memoOptions])]);
      });
    })(e), Gx(e), (function(t) {
      t.on("prop:options", () => {
        t.props.appendingOptions && (t.props.skipSetActiveValue = !0, t.props.appendingOptions = !1), hn(t);
      }), t.on("prop:memoOptions", () => {
        t.props.skipSetActiveValue = !0, hn(t);
      }), t.on("prop:sourceOptions", () => {
        t.props.sourceOptions.length === 0 ? t.props.showSourceEmptyMessage = !0 : t.props.showSourceEmptyMessage = !1, gr.delete(t);
      }), t.on("prop:targetOptions", () => {
        t.props.targetOptions.length === 0 ? t.props.showTargetEmptyMessage = !0 : t.props.showTargetEmptyMessage = !1;
      }), t.on("prop:activeValue", ({ payload: r }) => {
        if (t.props.isDragging) return void (t.props.activeDescendant = void 0);
        if (r === hr) return void (t.props.activeDescendant = `${t.props.id}_load_more`);
        const n = (t.props.sourceListOrigin ? t.props.sourceOptions : t.props.targetOptions).findIndex((o) => W(F(o), r));
        n >= 0 && t.props.sourceListOrigin ? t.props.activeDescendant = `${t.props.id}_source_list_item_${n}` : t.props.activeDescendant = n >= 0 ? `${t.props.id}_target_list_item_${n}` : void 0;
      }), t.on("prop:mouseOnSource", ({ payload: r }) => {
        var n;
        if (r && t.props.disabled !== !0 && !t.props.isDragging) {
          const o = (n = t.props.__root) === null || n === void 0 ? void 0 : n.getElementById(t.props.id + "_source_list_items");
          if (!o) return;
          t.props.mouseOnTarget = !1, t.props.sourceListOrigin = !0, gr.delete(t), Ds(t, o);
        }
      }), t.on("prop:mouseOnTarget", ({ payload: r }) => {
        var n;
        if (r && t.props.disabled !== !0 && !t.props.isDragging) {
          const o = (n = t.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${t.props.id}`);
          if (!o) return;
          t.props.mouseOnSource = !1, t.props.sourceListOrigin = !1, qr.delete(t), Ds(t, o);
        }
      }), t.on("prop:optionsLoadingCounter", ({ payload: r }) => {
        r === 0 && t.props.optionLoadingCounter === 0 && t.store.set(Yr);
      }), t.on("prop:optionLoadingCounter", ({ payload: r }) => {
        r === 0 && t.props.optionsLoadingCounter === 0 && (t.store.set(Yr), t.props.skipSetActiveValue = !0, hn(t));
      });
    })(e);
  }
] }, de = /* @__PURE__ */ Ee("sl"), { outer: Jx, wrapper: Qx, icon: Wi, prefix: ew, suffix: tw, help: rw, messages: nw, message: ow } = /* @__PURE__ */ Me(de), sw = de("label", () => ({ if: "$label", $el: "label", attrs: { id: "$id + '_label'" } })), aw = de("chart", () => ({ $el: "div", if: "$chart" })), iw = de("chartBar", () => ({ $el: "div", for: ["bar", "index", "$chart"], attrs: { "data-active": { if: "$isMulti", then: { if: "$_value.0 < $_value.1", then: "$bar.at >= $_value.0 && $bar.at <= $_value.1", else: "$bar.at >= $_value.1 && $bar.at <= $_value.0" }, else: "$bar.at <= $_value" }, style: { left: '$bar.at / ($max - $min) * 100 + "%"', width: '$: "calc(" + (100 / $chart.length) + "% - 2px)"', height: { if: "$largestBar", then: '$bar.value / $largestBar * 100 + "%"' } } } })), lw = de("sliderInner", () => ({ $el: "div", attrs: { "data-has-mark-labels": "$markLabels && $marks.length > 0" } })), pw = de("track", () => ({ $el: "div", attrs: { id: "$: 'track-' + $id", onClick: "$handlers.clickTrack" } })), uw = de("trackWrapper", () => ({ $el: "div" })), cw = de("trackInner", () => ({ $el: "div" })), dw = de("fill", () => ({ $el: "div", attrs: { style: "$fillStyles" } })), fw = de("linkedValues", () => ({ $el: "div" })), Ki = de("maxValue", () => ({ $formkit: "number", bind: "$computedMaxInputAttrs", ignore: !0, number: !0, value: { if: "$isMulti", then: "$_value.1", else: "$_value" }, tabindex: { if: "$disabled", then: -1 }, onNode: "$handlers.maxNode", onBlur: "$handlers.inputBlur" })), mw = de("minValue", () => ({ $formkit: "number", if: "$isMulti", bind: "$computedMinInputAttrs", ignore: !0, number: !0, value: { if: "$isMulti", then: "$_value.0", else: "$_value" }, tabindex: { if: "$disabled", then: -1 }, onNode: "$handlers.minNode", onBlur: "$handlers.inputBlur" })), hw = de("marks", () => ({ $el: "div", if: "$marks" })), gw = de("mark", () => ({ $el: "span", for: ["step", "index", "$marks"], attrs: { "data-active": { if: "$isMulti", then: { if: "$_value.0 < $_value.1", then: "$step.at >= $_value.0 && $step.at <= $_value.1", else: "$step.at >= $_value.1 && $step.at <= $_value.0" }, else: "$step.at <= $_value" }, class: { if: "$step.class", then: '$: $classes.mark + " " + $step.class', else: "$classes.mark" }, style: { left: '$: $fns.calculateMarkPosition($step.at) + "%"' } } })), vw = de("markLabel", () => ({ $el: "span", if: "$markLabels", children: { if: "$step.label !== undefined", then: "$step.label", else: "" }, attrs: { class: '$: $classes.markLabel + " " + $step.labelClass' } })), $w = de("handles", () => ({ $el: "ul" })), yw = de("handleMax", () => ({ $el: "li", attrs: { "data-active": "$dragging", "data-is-target": '$lastHandleInteraction === "max"', "data-handle": "max", "data-show-tooltip": "$tooltip", class: "$: 'formkit-handle ' + $classes.handle + ' ' + $classes.handleMax", onFocus: "$handlers.focus", onClick: "$handlers.clickHandle", onMousedown: "$handlers.startDrag", onTouchstartPassive: "$handlers.startDrag", style: "$maxHandleStyles", tabindex: { if: "$disabled", then: -1, else: 0 }, onBlur: "$handlers.blur", onKeydown: "$handlers.keydown" } })), bw = de("handleMin", () => ({ $el: "li", if: "$isMulti", attrs: { "data-active": "$dragging", "data-is-target": '$lastHandleInteraction === "min"', "data-handle": "min", "data-show-tooltip": "$tooltip", class: "$: $classes.handle + ' ' + $classes.handleMin", onFocus: "$handlers.focus", onClick: "$handlers.clickHandle", onMousedown: "$handlers.startDrag", onTouchstartPassive: "$handlers.startDrag", style: "$minHandleStyles", tabindex: { if: "$disabled", then: -1, else: 0 }, onBlur: "$handlers.blur", onKeydown: "$handlers.keydown" } })), xw = de("handleMinInner", () => ({ $el: "div", attrs: { class: '$: $classes.handleInner + " " + $classes.handleMinInner' } })), ww = de("handleMaxInner", () => ({ $el: "div", attrs: { class: '$: $classes.handleInner + " " + $classes.handleMaxInner' } })), _w = de("tooltipMax", () => ({ $el: "div", if: '$tooltip === true || $tooltip === "auto"', children: { if: "$isMulti", then: { if: "$_value.0 < $_value.1", then: '$tooltipFormat($_value.1, "max")', else: '$tooltipFormat($_value.0, "max")' }, else: '$tooltipFormat($_value, "max")' }, attrs: { class: "$classes.tooltip + ' ' + $classes.tooltipMax" } })), kw = de("tooltipMin", () => ({ $el: "div", if: '$isMulti && ($tooltip === true || $tooltip === "auto")', children: { if: "$_value.0 < $_value.1", then: '$tooltipFormat($_value.0, "min")', else: '$tooltipFormat($_value.1, "min")' }, attrs: { class: "$classes.tooltip + ' ' + $classes.tooltipMin" } })), Sw = { schema: /* @__PURE__ */ Jx(/* @__PURE__ */ Qx(/* @__PURE__ */ sw("$label"), /* @__PURE__ */ rw("$help"), /* @__PURE__ */ lw(/* @__PURE__ */ Wi("prefix"), /* @__PURE__ */ ew(), /* @__PURE__ */ pw(/* @__PURE__ */ aw(/* @__PURE__ */ iw()), /* @__PURE__ */ uw(/* @__PURE__ */ cw(/* @__PURE__ */ dw(), /* @__PURE__ */ hw(/* @__PURE__ */ gw(/* @__PURE__ */ vw())), /* @__PURE__ */ $w(/* @__PURE__ */ bw(/* @__PURE__ */ kw(), /* @__PURE__ */ xw()), /* @__PURE__ */ yw(/* @__PURE__ */ _w(), /* @__PURE__ */ ww()))))), /* @__PURE__ */ tw(), /* @__PURE__ */ Wi("suffix"), /* @__PURE__ */ R("$showInput && $isMulti === false", /* @__PURE__ */ Ki())), /* @__PURE__ */ R("$showInput && $isMulti", /* @__PURE__ */ fw(/* @__PURE__ */ mw(), /* @__PURE__ */ Ki())), /* @__PURE__ */ nw(/* @__PURE__ */ ow("$message.value")))), type: "input", family: "", props: ["min", "max", "step", "showInput", "tooltip", "tooltipFormat", "inputAttrs", "maxInputAttrs", "minInputAttrs", "marks", "markLabels", "snapToMarks", "chart", "scalingFunction", "intervals"], features: [function(e) {
  let t, r, n;
  e.addProps(["isMulti", "maxHandleStyles", "minHandleStyles", "fillStyles", "decimals", "dragging", "lastHandleInteraction", "largestBar", "computedMaxInputAttrs", "computedMinInputAttrs"]);
  const o = { linear: { forward: (g) => g, reverse: (g) => g }, log: { forward: (g, _ = e.props.min, C = e.props.max) => C * Math.pow(g / C, 1.5), reverse: (g, _ = e.props.min, C = e.props.max) => C * Math.pow(g / C, 1 / 1.5) } };
  let s = !1;
  function a() {
    const g = document.activeElement;
    if (g instanceof HTMLInputElement) {
      const _ = g.value;
      g.value = "", g.value = _;
    }
  }
  function i(g) {
    if (!g) return;
    const _ = { disabled: g.props.disabled, min: typeof g.props.min == "number" ? g.props.min : 0, max: typeof g.props.max == "number" ? g.props.max : void 0, step: g.props.step || 1 };
    g.props.minInputAttrs = Object.assign(g.props.minInputAttrs || {}, _), g.props.maxInputAttrs = Object.assign(g.props.maxInputAttrs || {}, _), g.props.inputAttrs = g.props.inputAttrs && typeof g.props.inputAttrs == "object" ? Object.assign(g.props.inputAttrs, _) : _, g.props.computedMaxInputAttrs = g.props.maxInputAttrs && typeof g.props.maxInputAttrs == "object" ? Object.assign({}, g.props.inputAttrs, g.props.maxInputAttrs) : g.props.inputAttrs, g.props.computedMinInputAttrs = g.props.minInputAttrs && typeof g.props.minInputAttrs == "object" ? Object.assign({}, g.props.inputAttrs, g.props.minInputAttrs) : g.props.inputAttrs;
  }
  function l(g) {
    const { min: _, max: C, intervals: k } = e.props;
    if (g = Math.min(Math.max(g, 0), 100), !k || k.length === 0) {
      S();
      const w = _ + g / 100 * (C - _);
      return e.props.scalingFunction.reverse(w, _, C);
    }
    const D = u(k, _, C);
    for (let w = 0; w < D.length; w++) {
      const { value: L, step: x, left: b, width: v, stepsInInterval: T } = D[w];
      if (g >= b && g <= b + v) {
        const V = L + (g - b) / v * T * x, U = V % x;
        return h(U < x / 2 ? V - U : V + (x - U));
      }
    }
    return g > 100 ? C : g < 0 ? _ : void 0;
  }
  function p(g, _ = e.props.min, C = e.props.max) {
    const k = e.props.intervals;
    if (!k || k.length === 0)
      return S(), (e.props.scalingFunction.forward(g, _, C) - _) / (C - _) * 100;
    const D = u(k, _, C);
    for (let w = 0; w < D.length; w++) {
      const { value: L, step: x, left: b, width: v, stepsInInterval: T } = D[w], V = w < D.length - 1 ? D[w + 1].value : C;
      if (g >= L && g <= V)
        return 100 * ((b + (g - L) / x / T * v) / 100);
    }
    return 100;
  }
  function u(g, _ = e.props.min, C = e.props.max) {
    (g = [...g]).sort((w, L) => w.value - L.value), g[0].value !== _ && g.unshift({ value: _, step: e.props.step });
    let k = 0;
    for (let w = 0; w < g.length; w++) {
      const L = g[w].value, x = ((w < g.length - 1 ? g[w + 1].value : C) - L) / g[w].step;
      k += x;
    }
    let D = 0;
    return g.map((w, L) => {
      const x = w.value, b = ((L < g.length - 1 ? g[L + 1].value : C) - x) / w.step, v = D / k * 100;
      return D += b, { value: w.value, step: w.step, left: v, width: b / k * 100, stepsInInterval: b, totalSteps: k };
    });
  }
  function c() {
    const g = parseFloat(`${e.props.min}`), _ = parseFloat(`${e.props.max}`);
    let C, k = 0;
    if (Array.isArray(e._value)) {
      const D = [...e._value].sort(f);
      k = parseFloat(`${D[0]}`), C = parseFloat(`${D[1]}`);
    } else C = parseFloat(`${e._value}`);
    e.props.maxHandleStyles = { left: `${p(C, g, _)}%` }, e.props.isMulti && Array.isArray(e._value) ? (e.props.minHandleStyles = { left: `${p(k, g, _)}%` }, e.props.fillStyles = { left: `${p(k, g, _)}%`, width: p(C, g, _) - p(k, g, _) + "%" }) : e.props.fillStyles = { left: "0%", width: `${p(C, g, _)}%` };
  }
  function f(g, _) {
    return parseFloat(`${g}`) - parseFloat(`${_}`);
  }
  function d(g, _ = !0) {
    if (e.props.disabled) return;
    let C;
    if (g === void 0) {
      if (e.props.isMulti) e.input([y(e.props.min), y(e.props.max)]);
      else {
        const D = e.props.min + (e.props.max - e.props.min) / 2;
        e.input(y(D));
      }
      return void c();
    }
    if (e.props.isMulti && Array.isArray(e._value) && !Array.isArray(g)) {
      const D = e.props.lastHandleInteraction === "min" ? 0 : 1, w = [...e._value];
      w[D] = g;
      const [L, x] = w;
      if (L >= x) {
        const b = t?.querySelector(`[data-handle="${e.props.lastHandleInteraction === "min" ? "max" : "min"}"]`);
        b?.focus();
      }
      C = y([...w].sort(f));
    } else Array.isArray(g) ? C = y(g) : (C = y(g), C = isNaN(C) ? e.props.min : C);
    e.props.snapToMarks && (C = m(C));
    const k = y($(C));
    _ && e.input(k), c();
  }
  function $(g) {
    return e.props.isMulti && Array.isArray(g) ? [$(g[0]), $(g[1])] : (g = isNaN(g) ? e.props.min : g, Math.min(Math.max(parseFloat(`${g}`), e.props.min), e.props.max));
  }
  function h(g) {
    return parseFloat(g.toFixed(e.props.decimals));
  }
  function y(g) {
    if (e.props.snapToMarks) return g;
    if (!e.props.intervals) return Array.isArray(g) ? g.map((C) => h(Math.round(C / e.props.step) * e.props.step)) : h(Math.round(g / e.props.step) * e.props.step);
    const _ = u(e.props.intervals);
    if (Array.isArray(g)) return g.map((C) => {
      const k = _.find((D, w) => {
        var L;
        return C >= D.value && C < (((L = _[w + 1]) === null || L === void 0 ? void 0 : L.value) || e.props.max);
      });
      return k ? h(k.value + Math.round((C - k.value) / k.step) * k.step) : C;
    });
    {
      const C = _.find((k, D) => {
        var w;
        return g >= k.value && g < (((w = _[D + 1]) === null || w === void 0 ? void 0 : w.value) || e.props.max);
      });
      return C ? h(C.value + Math.round((g - C.value) / C.step) * C.step) : g;
    }
  }
  function m(g) {
    if (Array.isArray(g)) return g[0] = m(g[0]), g[1] = m(g[1]), g;
    {
      const _ = e.props.marks;
      return _.reduce((k, D) => Math.abs(D.at - g) < Math.abs(k.at - g) ? D : k, _[0]).at;
    }
  }
  function S() {
    s || (H(e.props.scalingFunction) ? typeof e.props.scalingFunction == "string" ? e.props.scalingFunction = o[e.props.scalingFunction] || o.linear : typeof e.props.scalingFunction == "object" && (e.props.scalingFunction = { ...o.linear, ...e.props.scalingFunction }) : e.props.scalingFunction = o.linear, s = !0);
  }
  e.props.maxHandleStyles = { left: "0%" }, e.props.fillStyles = { left: "0%", width: "0%" }, e.props.isMulti = !1, e.props.step = 1, e.props.min = 0, e.props.max = 100, e.props.tooltipFormat = typeof e.props.tooltipFormat == "function" ? e.props.tooltipFormat : (g, _) => {
    if (_) return g;
  }, e.props.largestBar = 0, "disabled" in e.props && (e.props.disabled = H(e.props.disabled)), e.on("created", () => {
    var g;
    S(), e.props.isMulti = Array.isArray(e.value), e.props.step = parseFloat(`${e.props.step}`), e.props.decimals = ((g = e.props.step.toString().split(".")[1]) === null || g === void 0 ? void 0 : g.length) || 0, e.props.min = e.props.min ? parseFloat(`${e.props.min}`) : 0, e.props.max = e.props.max ? parseFloat(`${e.props.max}`) : 100;
    const _ = H(e.props.tooltip);
    e.props.tooltip = e.props.tooltip === void 0 ? "auto" : _;
    const C = H(e.props.marks);
    if (e.props.marks = !!C && (Array.isArray(e.props.marks) ? e.props.marks : (function() {
      const { min: w, max: L, step: x } = e.props, b = [];
      for (let v = w; v <= L; v += x) b.push({ at: v, label: v });
      return b;
    })()), e.props.markLabels = H(e.props.markLabels), e.props.snapToMarks = H(e.props.snapToMarks), e.props.showInput = H(e.props.showInput), e.props.largestBar = e.props.chart ? e.props.chart.reduce((w, L) => L.value > w ? L.value : w, 0) : e.props.largestBar, i(e), fe(`track-${e.props.id}`, () => {
      var w;
      t = (w = e.props.__root) === null || w === void 0 ? void 0 : w.getElementById(`track-${e.props.id}`), d(e.value, !1), c();
    }, e.props.__root), e.context) {
      let w = 0, L = "";
      const x = e.context.handlers.blur;
      e.context.handlers.blur = (b) => {
        x(b), e.emit("blur");
      }, e.context.handlers.clickTrack = (b) => {
        if (!t) return;
        e.props.dragging = !1;
        const { left: v, width: T } = t.getBoundingClientRect(), V = (b.clientX - v) / T;
        if (e.props.isMulti && Array.isArray(e.value)) {
          const [U, J] = e.value, Z = Math.abs(U - V * e.props.max) < Math.abs(J - V * e.props.max) ? "min" : "max", pe = Z === "min" ? 0 : 1;
          e.props.lastHandleInteraction = Z, e.value[pe] = l(100 * V), d(e._value);
        } else d(l(100 * V));
      }, e.context.handlers.focus = (b) => {
        if (!t) return;
        const v = b.target.dataset.handle;
        v && (e.props.lastHandleInteraction = v);
      }, e.context.handlers.clickHandle = (b) => {
        b.stopPropagation(), e.props.attrs.onClick && e.props.attrs.onClick(b), e.props.dragging = !1, d(e._value);
      }, e.context.handlers.startDrag = (b) => {
        if (!t) return;
        e.props.dragging = !0;
        const v = b.type === "touchstart", T = v ? "touchmove" : "mousemove", V = v ? "touchend" : "mouseup";
        e.props.lastHandleInteraction = b.target.dataset.handle || e.props.lastHandleInteraction, document.addEventListener(T, D, { passive: !1 }), document.addEventListener(V, () => {
          e.context && (e.props.dragging = !1, document.removeEventListener(T, D), v && b.target instanceof HTMLElement && b.target.blur());
        });
      }, e.context.handlers.keydown = (b) => {
        if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "-"].includes(b.key)) {
          b.preventDefault(), clearTimeout(w), L += b.key;
          const v = L === "-" ? -1 : 1;
          w = window.setTimeout(() => {
            L !== "-" && d(parseFloat(L) * v), L = "";
          }, 350);
        }
        if (["ArrowLeft", "ArrowDown", "ArrowRight", "ArrowUp", "PageUp", "PageDown", "Home", "End"].includes(b.key)) {
          b.preventDefault();
          const v = e.props.lastHandleInteraction === "min" ? 0 : 1, T = Array.isArray(e._value) ? e._value[v] : e._value, V = (function(U, J) {
            if (!e.props.intervals) return e.props.step;
            const Z = u(e.props.intervals);
            if (U >= e.props.max) return Z[Z.length - 1].step;
            let pe = Z.find((he, De) => {
              var ee;
              return U >= he.value && U < (((ee = Z[De + 1]) === null || ee === void 0 ? void 0 : ee.value) || e.props.max);
            });
            return pe ? (J === -1 && U - pe.step < pe.value && (pe = Z[Z.indexOf(pe) - 1] || pe), pe.step) : e.props.step;
          })(T, ["ArrowLeft", "ArrowDown", "PageDown"].includes(b.key) ? -1 : 1);
          if (e.props.marks && e.props.snapToMarks) {
            const U = m(T), J = e.props.marks.find((De) => De.at === U), Z = e.props.marks.indexOf(J), pe = ["ArrowLeft", "ArrowDown"].includes(b.key) ? -1 : 1, he = Math.min(Math.max(0, Z + pe), e.props.marks.length - 1);
            return void d(e.props.marks[he].at);
          }
          if (b.metaKey) return void (b.key === "ArrowLeft" || b.key === "ArrowDown" ? d(e.props.min) : d(e.props.max));
          if (b.key === "Home") return void d(e.props.min);
          if (b.key === "End") return void d(e.props.max);
          ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(b.key) && d(T + (b.shiftKey ? 10 * V : V) * (["ArrowLeft", "ArrowDown"].includes(b.key) ? -1 : 1)), b.key === "PageUp" ? d(T + 10 * V) : b.key === "PageDown" && d(T - 10 * V);
        }
      }, e.context.handlers.maxNode = (b) => {
        n = b, b.hook.commit((v, T) => W(b.value, v) ? T(v) : (`${b.value}`.includes(".") && !`${v}`.includes(".") && a(), e.props.isMulti && Array.isArray(e._value) ? d([e._value[0], v]) : d(v), T($(v))));
      }, e.context.handlers.minNode = (b) => {
        r = b, b.hook.commit((v, T) => W(b.value, v) ? T(v) : (`${b.value}`.includes(".") && !`${v}`.includes(".") && a(), e.props.isMulti && Array.isArray(e._value) ? d([v, e._value[1]]) : d(v), T($(v))));
      }, e.context.handlers.inputBlur = () => {
        e.props.isMulti && Array.isArray(e._value) && d([...e._value].sort(f));
      }, e.context.fns.calculateMarkPosition = (b) => p(b, e.props.min, e.props.max);
    }
    let k;
    function D(w) {
      var L;
      if (!t || !e.props.dragging) return;
      w.preventDefault();
      const x = w.clientX || ((L = w.touches) === null || L === void 0 ? void 0 : L.length) && w.touches[0].clientX, { left: b, width: v } = t.getBoundingClientRect(), T = y(l((x - b) / v * 100));
      k !== T && (k = T, d(T));
    }
    d(e.value);
  }), e.on("input", ({ payload: g }) => {
    Array.isArray(e.value) && Array.isArray(g) ? e.value[0] === g[0] && e.value[1] === g[1] || d(g, !1) : e.value !== g && d(g, !1), (function() {
      if (e.props.isMulti && Array.isArray(e._value)) {
        const [_, C] = [...e._value];
        r && r.input(h(_)), n && n.input(h(C));
      } else n && n.input(e._value);
    })();
  }), e.on("prop:max", () => {
    e.props.max = e.props.max ? parseFloat(`${e.props.max}`) : 100, d(e.value), i(e);
  }), e.on("prop:min", () => {
    e.props.min = e.props.min ? parseFloat(`${e.props.min}`) : 0, d(e.value), i(e);
  });
}] }, le = /* @__PURE__ */ Ee("cp"), { outer: Dw, wrapper: Cw, inner: Lw, label: Aw, prefix: Tw, suffix: Iw, help: ji, messages: Ew, message: Mw, icon: Ar } = /* @__PURE__ */ Me(le), Ow = le("swatchPreview", () => ({ $el: "div", attrs: { id: "$id", class: "$classes.swatchPreview", tabindex: { if: "$disabled", then: -1, else: 0 }, onClick: "$handlers.inputPreviewClick", onFocusout: "$handlers.inputPreviewFocusout", onKeydown: "$handlers.inputPreviewKeydown", role: "button", "aria-valuetext": '$: "Current color: " + $value' } })), Pw = le("valueString", () => ({ $el: "span", attrs: { class: "$classes.valueString" }, children: { if: '$format === "hex"', then: "$hex", else: { if: '$format === "rgba"', then: "$rgbaString", else: { if: '$format === "hsla"', then: "$hslaString", else: "" } } } })), Fw = le("panel", () => ({ $el: "div", attrs: { id: '$: $id + "_popover"', class: "$classes.panel", onKeydown: "$handlers.panelKeydown", "aria-role": { if: "$layout === popover", then: "dialog" }, "aria-modal": { if: "$layout === popover", then: "true" }, "aria-label": "$label", popover: "$popover", style: { if: "$usePopover", then: { margin: 0, top: '$popoverCoordinates.y + "px"', left: '$popoverCoordinates.x + "px"' }, else: { position: { if: "$inline === undefined || $inline === false", then: "absolute" } } } } })), Vw = le("panelClose", () => ({ $el: "button", attrs: { type: "button", class: "$classes.panelClose", onClick: "$handlers.closePanel", tabindex: { if: "$showPanelClose", then: -1, else: 0 }, onKeydown: "$handlers.panelCloseKeydown", "aria-label": "$ui.close.value" } })), Nw = le("controlGroup", () => ({ $el: "div", attrs: { class: "$classes.controlGroup", "data-eye-dropper": "$hasNativeEyeDropper && $eyeDropper", role: "group" } })), Bw = le("LS", () => ({ $el: "div", attrs: { class: "$classes.LS" } })), Rw = le("canvasLS", () => ({ $el: "canvas", attrs: { id: '$: "canvas-ls-" + $id', class: '$classes.canvas + " " + $classes.canvasLS', width: 256, height: 256, "aria-hidden": "true" } })), Hw = le("controlLS", () => ({ $el: "div", attrs: { tabindex: { if: "$disabled", then: -1, else: 0 }, class: '$classes.control + " " + $classes.controlLS', onKeydown: "$handlers.lsKeydown", style: { left: '$controlLSPosition.x + "%"', top: '$controlLSPosition.y + "%"', backgroundColor: '$: "hsl(" + $hsla.h + "deg, " + ($hsla.s / 255) * 100 + "%, " + ($hsla.l / 255) * 100 + "%)"' }, role: "slider", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuetext": '$: "Lightness: " + $hslaPercent.l + "%, Saturation: " + $hslaPercent.s + "%"' } })), Ww = le("hue", () => ({ $el: "div", attrs: { class: "$classes.hue" } })), Kw = le("canvasHue", () => ({ $el: "canvas", attrs: { id: '$: "canvas-hue-" + $id', class: '$classes.canvas + " " + $classes.canvasHue', width: 256, height: 10, "aria-hidden": "true" } })), jw = le("controlHue", () => ({ $el: "div", attrs: { tabindex: { if: "$disabled", then: -1, else: 0 }, onKeydown: "$handlers.hueControlKeydown", class: '$classes.control + " " + $classes.controlHue', style: { left: '$: "min(max(" + (($hsla.h / 360) * 100) + "%, 3px), calc(100% - 3px))"', backgroundColor: '$: "hsl(" + $hsla.h + "deg, 100%, 50%)"' }, role: "slider", "aria-valuemin": 0, "aria-valuemax": 360, "aria-valuenow": "$h" } })), Yw = le("alpha", () => ({ $el: "div", attrs: { class: "$classes.alpha", style: { opacity: { if: "$alpha", then: "1", else: "0.5" }, cursor: { if: "$alpha", then: "", else: "not-allowed" }, filter: { if: "$alpha", then: "", else: "grayscale(1)" } } } })), Zw = le("canvasAlpha", () => ({ $el: "canvas", attrs: { id: '$: "canvas-alpha-" + $id', class: '$classes.canvas + " " + $classes.canvasAlpha', width: 256, height: 10, "aria-hidden": "true", style: { pointerEvents: { if: "$alpha", then: "auto", else: "none" } } } })), Uw = le("controlAlpha", () => ({ $el: "div", attrs: { tabindex: { if: "$disabled || $alpha === undefined", then: -1, else: 0 }, onKeydown: "$handlers.alphaControlKeydown", class: '$classes.control + " " + $classes.controlAlpha', style: { left: '$: "min(max(" + ($hsla.a * 100) + "%, 3px), calc(100% - 3px))"', backgroundImage: '$: "linear-gradient(to right, hsla(" + $hsla.h + "deg, " + ($hsla.s / 255) * 100 + "%, " + ($hsla.l / 255) * 100 + "%, " + $hsla.a + "), hsla(" + $hsla.h + "deg, " + ($hsla.s / 255) * 100 + "%, " + ($hsla.l / 255) * 100 + "%, " + $hsla.a + ")), linear-gradient(to right, white, white)"', pointerEvents: { if: "$alpha", then: "auto", else: "none" } }, role: "slider", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": "$hsla.a" } })), qw = le("preview", () => ({ $el: "div", attrs: { class: "$classes.preview" } })), zw = le("canvasPreview", () => ({ $el: "canvas", attrs: { id: '$: "canvas-preview-" + $id', class: '$classes.canvas + " " + $classes.canvasPreview', width: 33, height: 33, "aria-hidden": "true" } })), Gw = le("canvasSwatchPreview", () => ({ $el: "div", attrs: { class: "$classes.canvasSwatchPreviewWrapper" }, children: [{ $el: "canvas", attrs: { id: '$: "canvas-swatch-preview-" + $id', class: '$classes.canvas + " " + $classes.canvasSwatchPreview', width: 33, height: 33, "aria-hidden": "true" } }] })), Xw = le("eyeDropper", () => ({ $el: "div", attrs: { tabindex: { if: "$disabled", then: -1, else: 0 }, role: "button", onKeydown: "$handlers.eyeDropperKeydown", id: '$: "eye-dropper-" + $id', class: "$classes.eyeDropper" } })), Jw = le("formatField", () => ({ $el: "div", attrs: { class: "$classes.formatField" } })), Qw = le("colorInputGroup", () => ({ $el: "div", attrs: { class: "$classes.colorInputGroup", "aria-role": "group" } })), e1 = le("hexField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.hexFieldGroup' }, children: [{ $el: "input", attrs: { onInput: "$handlers.hexInput", onKeydown: "$handlers.hexKeydown", onFocus: "$handlers.hexFocus", onBlur: "$handlers.hexBlur", id: '$: "hex-" + $id', tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", class: '$classes.colorField + " " + $classes.hexField', value: "$hex", autocomplete: "off" } }, { $el: "label", children: "HEX", attrs: { for: '$: "hex-" + $id', class: "$classes.fieldLabel" } }] })), t1 = le("rField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.rFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "r-" + $id', onInput: '$handlers.rangeLimitInput("rgba", 0, 255)', onKeydown: '$handlers.rangeLimitKeydown("rgba", 0, 255, 1)', type: "number", class: '$classes.colorField + " " + $classes.rField', min: 0, max: 255, step: 1, tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$rgba.r", autocomplete: "off" } }, { $el: "label", children: "R", attrs: { for: '$: "r-" + $id', class: "$classes.fieldLabel" } }] })), r1 = le("gField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.gFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "g-" + $id', onInput: '$handlers.rangeLimitInput("rgba", 0, 255)', onKeydown: '$handlers.rangeLimitKeydown("rgba", 0, 255, 1)', type: "number", class: '$classes.colorField + " " + $classes.gField', min: 0, max: 255, step: 1, tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$rgba.g", autocomplete: "off" } }, { $el: "label", children: "G", attrs: { for: '$: "g-" + $id', class: "$classes.fieldLabel" } }] })), n1 = le("bField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.bFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "b-" + $id', onInput: '$handlers.rangeLimitInput("rgba", 0, 255)', onKeydown: '$handlers.rangeLimitKeydown("rgba", 0, 255, 1)', type: "number", class: '$classes.colorField + " " + $classes.bField', min: 0, max: 255, step: 1, tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$rgba.b", autocomplete: "off" } }, { $el: "label", children: "B", attrs: { for: '$: "b-" + $id', class: "$classes.fieldLabel" } }] })), o1 = le("aField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.aFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "a-" + $id', onInput: '$handlers.rangeLimitInput("alpha", 0, 1)', onKeydown: '$handlers.rangeLimitKeydown("alpha", 0, 1, 0.01)', type: "text", class: '$classes.colorField + " " + $classes.aField', value: "$rgba.a", tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled || $alpha === undefined", autocomplete: "off", style: { opacity: { if: "$alpha", then: "1", else: "0.33" }, cursor: { if: "$alpha", then: void 0, else: "not-allowed" } }, "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": "$rgba.a" } }, { $el: "label", children: "A", attrs: { for: '$: "a-" + $id', class: "$classes.fieldLabel", style: { opacity: { if: "$alpha", then: "1", else: "0.33" } } } }] })), s1 = le("hField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.hFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "h-" + $id', onInput: '$handlers.rangeLimitInput("hsla", 0, 360)', onKeydown: '$handlers.rangeLimitKeydown("hsla", 0, 360, 1)', type: "text", class: '$classes.colorField + " " + $classes.hField', tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$hslaPercent.h", autocomplete: "off", "aria-valuemin": 0, "aria-valuemax": 360, "aria-valuenow": "$hsla.h" } }, { $el: "label", children: "H", attrs: { for: '$: "h-" + $id', class: "$classes.fieldLabel" } }] })), a1 = le("sField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.sFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "s-" + $id', onInput: '$handlers.rangeLimitInput("hsla", 0, 100)', onKeydown: '$handlers.rangeLimitKeydown("hsla", 0, 100, 1)', type: "text", class: '$classes.colorField + " " + $classes.sField', tabindex: { if: "$disabled", then: -1, else: 0 }, value: "$hslaPercent.s", autocomplete: "off", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": "$hsla.s" } }, { $el: "label", children: "S", attrs: { for: '$: "s-" + $id', class: "$classes.fieldLabel" } }] })), i1 = le("lField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.lFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "l-" + $id', onInput: '$handlers.rangeLimitInput("hsla", 0, 100)', onKeydown: '$handlers.rangeLimitKeydown("hsla", 0, 100, 1)', type: "text", class: '$classes.colorField + " " + $classes.lField', tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$hslaPercent.l", autocomplete: "off", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": "$hsla.l" } }, { $el: "label", children: "L", attrs: { for: '$: "l-" + $id', class: "$classes.fieldLabel" } }] })), l1 = le("formatSwitcher", () => ({ $el: "div", attrs: { class: "$classes.formatSwitcher", onClick: "$handlers.toggleFormat", tabindex: { if: "$disabled", then: -1, else: 0 }, onKeydown: "$handlers.formatSwitcherKeydown", role: "button", "aria-label": "$ui.next.value" } })), p1 = le("swatches", () => ({ $el: "div", attrs: { id: '$: "swatches-" + $id', class: "$classes.swatches", "data-keyboard-nav": "$swatchIsUsingKeyboardNav" } })), u1 = le("swatch", () => ({ $el: "div", for: ["swatch", "index", "$options"], if: "$swatch", attrs: { if: "$swatch.group", then: { class: "$classes.swatchGroup" }, else: { class: "$classes.swatch", title: "$swatch.label" } }, children: { if: "$swatch.group", then: [{ $el: "span", attrs: { class: "$classes.swatchGroupLabel" }, children: "$swatch.group" }, { $el: "div", for: ["groupSwatch", "swatchIndex", "$swatch.options"], attrs: { class: "$classes.swatch", title: "$groupSwatch.label" }, children: [{ $el: "canvas", attrs: { class: "$classes.swatchCanvas", width: 21, height: 21, onClick: "$handlers.swatchClick", onKeydown: "$handlers.swatchKeydown", tabindex: { if: "$: ($focusedSwatch === $fns.anyToHsvaString($groupSwatch.value, 0))", then: { if: "$disabled", then: -1, else: 0 }, else: -1 }, key: '$groupSwatch.label + "-" + $groupSwatch.value', "data-color": "$fns.anyToHsvaString($groupSwatch.value, 0)", "data-color-precise": "$fns.anyToHsvaString($groupSwatch.value, 2)", "data-group": "$index", "data-label": "$swatch.label", role: "button", "aria-label": "$swatch.label" } }] }], else: { $el: "canvas", attrs: { class: "$classes.swatchCanvas", width: 21, height: 21, onClick: "$handlers.swatchClick", onKeydown: "$handlers.swatchKeydown", tabindex: { if: "$: ($focusedSwatch === $fns.anyToHsvaString($swatch.value, 0))", then: { if: "$disabled", then: -1, else: 0 }, else: -1 }, key: '$swatch.label + "-" + $swatch.value', "data-color": "$fns.anyToHsvaString($swatch.value, 0)", "data-color-precise": "$fns.anyToHsvaString($swatch.value, 2)", "data-group": 0, "data-label": "$swatch.label", role: "button", "aria-label": "$swatch.label" } } } })), _u = /rgba?\((\d+%?)\s*(?:,?\s*|\s+)(\d+%?)\s*(?:,?\s*|\s+)(\d+%?)(?:\s*(?:,?\s*|\s+|\/\s*)(\d*(?:\.\d+)?%?))?\)/i, ku = /^hsla?\((\d{1,3}deg|[\d.]+)\s*,?\s*([\d.]+%)\s*,?\s*([\d.]+%)(?:\s*,?\s*([\d.]+%?))?\)$/i;
function re(e, t) {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}
function Cs(e) {
  const [t, r, n, o] = (function(s) {
    s = s.replace("#", ""), s.length === 3 && (s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2]);
    const a = parseInt(s.slice(0, 2), 16), i = parseInt(s.slice(2, 4), 16), l = parseInt(s.slice(4, 6), 16), p = s.length >= 8 ? parseInt(s.slice(6, 8), 16) / 255 : 1;
    return (function(u, c, f, d = 1) {
      const $ = u / 255, h = c / 255, y = f / 255, m = Math.max($, h, y), S = Math.min($, h, y);
      let g, _ = 0;
      const C = (m + S) / 2;
      if (m === S) _ = g = 0;
      else {
        const k = m - S;
        switch (g = C > 0.5 ? k / (2 - m - S) : k / (m + S), m) {
          case $:
            _ = (h - y) / k + (h < y ? 6 : 0);
            break;
          case h:
            _ = (y - $) / k + 2;
            break;
          case y:
            _ = ($ - h) / k + 4;
        }
        _ *= 60;
      }
      return [_, 255 * g, 255 * C, d];
    })(a, i, l, p);
  })(e);
  return [...aa(t, r, n, o)];
}
function Yi(e, t, r, n = 1) {
  const o = t / 100, s = r / 100, a = (2 - o) * s / 2;
  return a !== 0 && (a === 1 || (t = a < 0.5 ? o * s / (2 * a) : o * s / (2 - 2 * a))), [e, re(255 * t, 2), re(255 * a, 2), n];
}
function aa(e, t, r, n = 1) {
  const o = re(t / 255, 4), s = re(r / 255, 4);
  if (s === 1) return [e, 0, 100, n];
  const a = re(s + o * Math.min(s, 1 - s), 4);
  let i = t / 2.55;
  return a !== 0 && (i = s !== 1 && s !== 0 ? 2 * (a - s) / a * 100 : t / 2.55), [e, re(i, 2), re(100 * a, 2), n];
}
function Su(e, t, r, n = 1) {
  const o = r / 100, s = o * (t / 100), a = s * (1 - Math.abs(e / 60 % 2 - 1)), i = o - s;
  let l = 0, p = 0, u = 0;
  return [l, p, u] = e < 60 ? [s, a, 0] : e < 120 ? [a, s, 0] : e < 180 ? [0, s, a] : e < 240 ? [0, a, s] : e < 300 ? [a, 0, s] : [s, 0, a], l = Math.round(255 * (l + i)), p = Math.round(255 * (p + i)), u = Math.round(255 * (u + i)), [Math.min(Math.max(l, 0), 255), Math.min(Math.max(p, 0), 255), Math.min(Math.max(u, 0), 255), n];
}
function Du(e, t, r, n = 1) {
  const o = e / 255, s = t / 255, a = r / 255, i = Math.max(o, s, a), l = Math.min(o, s, a);
  let p = 0;
  const u = i, c = i - l, f = i === 0 ? 0 : c / i;
  if (i !== l) {
    switch (i) {
      case o:
        p = (s - a) / c + (s < a ? 6 : 0);
        break;
      case s:
        p = (a - o) / c + 2;
        break;
      case a:
        p = (o - s) / c + 4;
    }
    p /= 6;
  }
  return [360 * p, 100 * f, 100 * u, n];
}
function c1(e, t, r, n = 1) {
  const [o, s, a, i] = Su(e, t, r, n);
  return (function(l, p, u, c = 1) {
    const f = ($) => Math.round($).toString(16).padStart(2, "0").toUpperCase(), d = (function($) {
      return Math.round(255 * $).toString(16).padStart(2, "0").toUpperCase();
    })(c);
    return "#" + f(l) + f(p) + f(u) + `${d === "FF" ? "" : d}`;
  })(o, s, a, i);
}
function Xt(e) {
  return /^(#?)([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(e);
}
function Ko(e) {
  if (e) {
    if (Xt(e)) return Cs(e);
    if (e.startsWith("rgb")) {
      const t = e.match(_u);
      if (!t) return [0, 0, 0, 1];
      const r = (n) => n.endsWith("%") ? Math.round(2.55 * Number(n.slice(0, -1))) : Number(n);
      return Du(r(t[1]), r(t[2]), r(t[3]), t[4] ? t[4].endsWith("%") ? Number(t[4].slice(0, -1)) / 100 : Number(t[4]) : 1);
    }
    if (e.startsWith("hsl")) {
      const t = e.match(ku);
      if (!t) return [0, 0, 0, 1];
      const r = Number(t[1].replace("deg", "").trim()), n = Number(t[2].slice(0, -1)) / 100, o = Number(t[3].slice(0, -1)) / 100, s = t[4] ? t[4].endsWith("%") ? Number(t[4].slice(0, -1)) / 100 : Number(t[4]) : 1;
      return aa(r, re(255 * n, 2), re(255 * o, 2), s);
    }
  }
}
function Zi(e) {
  const [t, r, n, o] = e.split("-").map((s) => Number(s));
  return [t, r, n, o];
}
function Ut(e, t = 150, r = !0) {
  let n = null, o = !0;
  return (...s) => {
    const a = () => {
      e(...s), n = null;
    };
    r && o && (o = !1, a()), n || (n = setTimeout(a, t));
  };
}
function Tr(e) {
  return e !== !1 && e !== "false";
}
function d1(e) {
  return e.tabIndex >= 0 && !e.disabled && e.offsetParent !== null;
}
const Ui = { "canvas-ls": "LS", "canvas-hue": "Hue", "canvas-alpha": "Alpha" }, f1 = { schema: /* @__PURE__ */ Dw(/* @__PURE__ */ Cw(/* @__PURE__ */ Aw("$label"), /* @__PURE__ */ R("$inline && $help", /* @__PURE__ */ ji("$help")), /* @__PURE__ */ Lw(/* @__PURE__ */ R("($inline === undefined || $inline === false) && $prefixIcon !== undefined", /* @__PURE__ */ Ar("prefix", "label")), /* @__PURE__ */ R("$inline === undefined || $inline === false", /* @__PURE__ */ Tw()), /* @__PURE__ */ R("$inline === undefined || $inline === false", /* @__PURE__ */ Ow(/* @__PURE__ */ Gw(), /* @__PURE__ */ R("$showValue", /* @__PURE__ */ Pw()))), /* @__PURE__ */ R("$inline || $expanded)", /* @__PURE__ */ Fw(/* @__PURE__ */ R("$showPanelClose && ($inline === undefined || $inline === false)", /* @__PURE__ */ Vw(/* @__PURE__ */ Ar("close"))), /* @__PURE__ */ R("$panelControls", /* @__PURE__ */ Nw(/* @__PURE__ */ Bw(/* @__PURE__ */ Rw(), /* @__PURE__ */ Hw()), /* @__PURE__ */ qw(/* @__PURE__ */ zw()), /* @__PURE__ */ Ww(/* @__PURE__ */ Kw(), /* @__PURE__ */ jw()), /* @__PURE__ */ Yw(/* @__PURE__ */ Zw(), /* @__PURE__ */ Uw()), /* @__PURE__ */ R("$eyeDropper && $hasNativeEyeDropper", /* @__PURE__ */ Xw(/* @__PURE__ */ Ar("eyeDropper"))))), /* @__PURE__ */ R("$panelFormat", /* @__PURE__ */ Jw(/* @__PURE__ */ Qw(/* @__PURE__ */ R('$panelActiveFormat === "hex"', /* @__PURE__ */ e1()), /* @__PURE__ */ R('$panelActiveFormat === "rgba"', /* @__PURE__ */ t1()), /* @__PURE__ */ R('$panelActiveFormat === "rgba"', /* @__PURE__ */ r1()), /* @__PURE__ */ R('$panelActiveFormat === "rgba"', /* @__PURE__ */ n1()), /* @__PURE__ */ R('$panelActiveFormat === "hsla"', /* @__PURE__ */ s1()), /* @__PURE__ */ R('$panelActiveFormat === "hsla"', /* @__PURE__ */ a1()), /* @__PURE__ */ R('$panelActiveFormat === "hsla"', /* @__PURE__ */ i1()), /* @__PURE__ */ R('$panelActiveFormat === "rgba" || $panelActiveFormat === "hsla"', /* @__PURE__ */ o1())), /* @__PURE__ */ l1(/* @__PURE__ */ Ar("switch")))), /* @__PURE__ */ R("$options", /* @__PURE__ */ p1(/* @__PURE__ */ u1())))), /* @__PURE__ */ R("$inline === undefined || $inline === false", /* @__PURE__ */ Iw()), /* @__PURE__ */ R("($inline === undefined || $inline === false) && $suffixIcon !== undefined", /* @__PURE__ */ Ar("suffix"))), /* @__PURE__ */ R("$: ($inline === undefined || $inline === false) && $help", /* @__PURE__ */ ji("$help"))), /* @__PURE__ */ Ew(/* @__PURE__ */ Mw("$message.value"))), type: "input", family: "text", props: ["disbaled", "format", "valueFormat", "alpha", "panelControls", "panelFormat", "eyeDropper", "inline", "options", "showValue", "closeOnSelect", "allowPaste"], features: [
  function(e) {
    let t, r = null, n = null, o = null, s = null, a = null, i = null, l = null, p = 0;
    const u = ["hex", "rgba", "hsla"], c = Ut(function() {
      if (!n) return;
      const M = n.getContext("2d");
      if (!M) return;
      const { width: B, height: A } = n, E = e.props.h || 0;
      M.fillStyle = `hsl(${E}, 100%, 50%)`, M.fillRect(0, 0, B, A);
      const I = M.createLinearGradient(0, 0, B, 0);
      I.addColorStop(0, "rgba(255, 255, 255, 1)"), I.addColorStop(1, "rgba(255, 255, 255, 0)"), M.fillStyle = I, M.fillRect(0, 0, B, A);
      const O = M.createLinearGradient(0, 0, 0, A);
      O.addColorStop(0, "rgba(0,0,0,0)"), O.addColorStop(1, "rgba(0,0,0,1)"), M.fillStyle = O, M.fillRect(0, 0, B, A);
    }, 2), f = Ut(function() {
      if (!s) return;
      const M = s.getContext("2d");
      if (!M) return;
      const B = Math.round(s.width), A = Math.round(s.height);
      M.clearRect(0, 0, B, A), pe(s, A / 2);
      const E = e.props.rgba.r || 0, I = e.props.rgba.g || 0, O = e.props.rgba.b || 0, P = M.createLinearGradient(0, 0, B, 0);
      P.addColorStop(0, `rgba(${E}, ${I}, ${O}, 0)`), P.addColorStop(1, `rgba(${E}, ${I}, ${O}, 1)`), M.fillStyle = P, M.fillRect(0, 0, B, A);
    }, 2), d = Ut(b, 2), $ = Ut(v, 2), h = Ut(ee, 2), y = Ut(he, 10, !1);
    function m(M) {
      var B, A;
      if (!e.context || !e.props.allowPaste || e.props.disabled) return;
      const E = (B = e.props.__root) === null || B === void 0 ? void 0 : B.activeElement;
      if (r && r.contains(E)) {
        const I = (A = M.clipboardData) === null || A === void 0 ? void 0 : A.getData("text");
        if (!I || E.tagName === "INPUT" && !Xt(I) && !_u.test(I) && !ku.test(I)) return;
        (Xt(I) || I.startsWith("hsl") || I.startsWith("rgb")) && (e.props.hexInputFocused && (e.props.hexInputFocused = !1, setTimeout(() => {
          e.props.hexInputFocused = !0;
        }, 10)), M.preventDefault(), S(I));
      }
    }
    function S(M) {
      var B;
      if (!M) return;
      const A = Ko(M);
      if (A) {
        const [E, I, O, P] = A;
        M !== "undefined" && (typeof E != "number" || isNaN(E) || typeof I != "number" || isNaN(I) || typeof O != "number" || isNaN(O) || typeof P != "number" || isNaN(P) || re(E, 2) === e.props.h && re(I, 2) === e.props.s && re(O, 2) === e.props.v && re(P, 2) === e.props.a) || (e.props.alpha && (e.props.a = re(P, 2)), ee(E, I, O));
      } else {
        const E = (B = e.props.options) === null || B === void 0 ? void 0 : B.find((I) => {
          var O;
          return ((O = I.label) === null || O === void 0 ? void 0 : O.toLowerCase()) === M.toLowerCase();
        });
        if (E && E.value) {
          const I = Ko(E.value);
          if (I) {
            const [O, P, Y, K] = I;
            e.props.alpha && (e.props.a = re(K, 2)), ee(O, P, Y);
          } else ee(e.props.h, e.props.s, e.props.v);
        } else ee(e.props.h, e.props.s, e.props.v);
      }
    }
    function g(M) {
      if (!e.context || !l) return;
      const B = l[M];
      B && (e.props.focusedSwatch = B.dataset.color);
    }
    function _(M, B) {
      new ResizeObserver(() => {
        const A = M.getBoundingClientRect();
        M.width = Math.round(A.width), M.height = Math.round(A.height), B(M);
      }).observe(M);
    }
    function C() {
      e.context && e.props.eyeDropper && (e.context.hasNativeEyeDropper = !(typeof window > "u" || !window.EyeDropper), fe(`eye-dropper-${e.props.id}`, () => {
        var M;
        const B = new window.EyeDropper(), A = (M = e.props.__root) === null || M === void 0 ? void 0 : M.getElementById(`eye-dropper-${e.props.id}`);
        A?.addEventListener("click", async () => {
          const E = await B.open();
          if (!E.sRGBHex) return;
          const [I, O, P] = Cs(E.sRGBHex);
          e.props.alpha && (e.props.a = 1), ee(I, O, P);
        });
      }, e.props.__root));
    }
    function k() {
      D("canvas-ls", (M) => {
        n = M;
      }, c, U), D("canvas-hue", (M) => {
        o = M;
      }, x, J), D("canvas-alpha", (M) => {
        s = M;
      }, f, Z), w(`canvas-preview-${e.props.id}`, (M) => {
        a = M, b();
      }, d), w(`canvas-swatch-preview-${e.props.id}`, (M) => {
        i = M, v();
      }, $), L();
    }
    function D(M, B, A, E) {
      let I = !1;
      const O = () => {
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", K), document.removeEventListener("touchmove", Y), document.removeEventListener("touchend", j);
      }, P = (Q) => {
        Q.buttons === 1 && t && E(Q);
      }, Y = (Q) => {
        t && E(Q);
      }, K = () => {
        t = void 0, O();
      }, j = () => {
        t = void 0, O();
      };
      w(`${M}-${e.props.id}`, (Q) => {
        const X = Q.nextElementSibling;
        B(Q), A(), (function(q, xe) {
          const Ve = (we) => {
            q && (we.preventDefault(), xe(we));
          };
          q?.addEventListener("mousedown", Ve), q?.addEventListener("touchstart", Ve);
        })(Q, E), I || (function(q, xe) {
          I = !0, q.addEventListener("blur", () => {
            q.removeAttribute("data-prevent-focus-style");
          }), xe.addEventListener("touchend", () => {
            q.removeAttribute("data-prevent-focus-style"), q.blur();
          }), q.addEventListener("keydown", (Ve) => {
            ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(Ve.key) && q.removeAttribute("data-prevent-focus-style");
          });
        })(X, Q), Q.addEventListener("mousedown", (q) => {
          X.focus(), X.setAttribute("data-prevent-focus-style", "true"), t = Ui[M], E(q), document.addEventListener("mousemove", P), document.addEventListener("mouseup", K);
        }), Q.addEventListener("touchstart", () => {
          X.setAttribute("data-prevent-focus-style", "true"), X.focus(), t = Ui[M], document.addEventListener("touchmove", Y), document.addEventListener("touchend", j);
        });
      }, A);
    }
    function w(M, B, A) {
      fe(M, () => {
        var E;
        const I = (E = e.props.__root) === null || E === void 0 ? void 0 : E.getElementById(M);
        I && (B(I), A && _(I, A));
      }, e.props.__root);
    }
    function L() {
      fe(`swatches-${e.props.id}`, () => {
        var M, B, A;
        l = Array.from(((M = e.props.__root) === null || M === void 0 ? void 0 : M.querySelectorAll(`#swatches-${e.props.id} canvas`)) || []), l.forEach((E) => {
          _(E, T);
        }), e.props.focusedSwatch = (A = (B = l[0]) === null || B === void 0 ? void 0 : B.dataset) === null || A === void 0 ? void 0 : A.color, he();
      }, e.props.__root);
    }
    function x() {
      if (!o) return;
      const M = o.getContext("2d");
      if (!M) return;
      const B = o.width, A = o.height;
      for (let E = 0; E < B; E++) {
        const I = Math.floor(E / B * 360);
        M.fillStyle = `hsl(${I}, 100%, 50%)`, M.fillRect(E, 0, 1, A);
      }
    }
    function b() {
      if (!a) return;
      const M = a.getContext("2d");
      if (!M) return;
      pe(a, a.width / 3);
      const { r: B, g: A, b: E, a: I } = e.props.rgba;
      M.fillStyle = `rgba(${B}, ${A}, ${E}, ${I})`, M.fillRect(0, 0, a.width, a.height);
    }
    function v() {
      if (!i) return;
      const M = i.getContext("2d");
      if (!M) return;
      pe(i, i.height / 2);
      const { r: B, g: A, b: E, a: I } = e.props.rgba;
      M.fillStyle = `rgba(${B}, ${A}, ${E}, ${I})`, M.fillRect(0, 0, i.width, i.height);
    }
    function T(M) {
      if (!M) return;
      const B = M.getContext("2d");
      if (!B) return;
      pe(M, M.width / 2);
      const A = M.dataset.colorPrecise;
      if (!A) return;
      const [E, I, O, P] = Zi(A), [Y, K, j, Q] = Yi(E, I, O, P);
      B.fillStyle = `hsla(${Y}, ${K / 255 * 100}%, ${j / 255 * 100}%, ${Q})`, B.fillRect(0, 0, Math.round(M.width), Math.round(M.height));
    }
    function V(M, B, A) {
      let E = null;
      const I = (j) => {
        E !== null && cancelAnimationFrame(E), E = requestAnimationFrame(() => {
          if (!B) return;
          const Q = B.getBoundingClientRect();
          let X, q;
          "touches" in j ? (X = j.touches[0].clientX - Q.left, q = j.touches[0].clientY - Q.top) : (X = j.clientX - Q.left, q = j.clientY - Q.top), X = Math.min(Math.max(X, 0), Q.width), q = Math.min(Math.max(q, 0), Q.height), A(X, q);
        });
      };
      I(M);
      const O = (j) => {
        j.preventDefault(), I(j);
      }, P = (j) => {
        j.preventDefault(), I(j);
      }, Y = () => {
        t = void 0, document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", Y);
      }, K = () => {
        t = void 0, document.removeEventListener("touchmove", P), document.removeEventListener("touchend", K);
      };
      "touches" in M ? (document.addEventListener("touchmove", P), document.addEventListener("touchend", K)) : (document.addEventListener("mousemove", O), document.addEventListener("mouseup", Y));
    }
    function U(M) {
      V(M, n, (B, A) => {
        const E = B / n.width * 100, I = 100 - A / n.height * 100;
        h(e.props.hue, E, I);
      });
    }
    function J(M) {
      V(M, o, (B, A) => {
        if (!o) return;
        const E = o.width, I = Math.floor(B / E * 360);
        e.props.h = I, h(e.props.h, e.props.s, e.props.v);
      });
    }
    function Z(M) {
      e.props.alpha && V(M, s, (B, A) => {
        const E = B / s.width * 100 / 100;
        e.props.a = E, h(e.props.hue, e.props.s, e.props.v);
      });
    }
    function pe(M, B) {
      const A = M.getContext("2d");
      if (!A) return;
      const E = Math.ceil(M.height / B), I = Math.ceil(M.width / B);
      for (let O = 0; O < E; O++) for (let P = 0; P < I; P++) A.fillStyle = (O + P) % 2 == 1 ? "#FFFFFF" : "#CCCCCC", A.fillRect(P * B, O * B, B, B);
    }
    function he() {
      var M, B;
      if (!e.context || !e.props.options || !l) return;
      const { h: A, s: E, v: I, a: O } = e.props, P = (function(j, Q, X, q = 1) {
        const xe = X === 0 ? 0 : Q;
        return `${re(X === 0 || X === 100 && Q === 0 ? 0 : j, 0)}-${re(xe, 0)}-${re(X, 0)}-${re(q, 2)}`;
      })(A, E, I, O);
      let Y = !1, K = !1;
      l.forEach((j) => {
        const Q = j.dataset.color;
        if (!Q) return;
        const [X, q, xe, Ve] = Q.split("-");
        xe === "0" && I === 0 && Ve === `${O}` && (K = !0);
        const we = j.parentElement;
        K || Q === P ? (we.dataset.active = "true", j.ariaSelected = "true", K = !1, !Y && l && (g(l.indexOf(j)), Y = !0)) : (delete we.dataset.active, j.ariaSelected = "false");
      }), Y || (e.props.focusedSwatch = (B = (M = l[0]) === null || M === void 0 ? void 0 : M.dataset) === null || B === void 0 ? void 0 : B.color);
    }
    function De(M) {
      M = M.replace("#", ""), e.props.hexInputFocused || M.length !== 3 || (M = M[0] + M[0] + M[1] + M[1] + M[2] + M[2]), M = `#${M = M.toUpperCase()}`, e.props.hex = M.slice(0, 9);
    }
    function ee(M, B, A, E = !1) {
      e.props.h = M === void 0 || isNaN(M) ? e.props.h : re(Math.max(Math.min(M, 360), 0), 2), e.props.s = B === void 0 || isNaN(B) ? e.props.s : re(Math.max(Math.min(B, 100), 0), 2), e.props.v = A === void 0 || isNaN(A) ? e.props.v : re(Math.max(Math.min(A, 100), 0), 2);
      const { h: I, s: O, v: P, a: Y } = e.props, [K, j, Q] = Yi(I, O, P), [X, q, xe] = Su(I, O, P), Ve = e.props.hexInputFocused ? e.props.hex : c1(I, O, P, Y), we = re(Y, 2);
      e.props.hsla = { h: I, s: j, l: Q, a: we }, e.props.hslaPercent = { h: re(I, 0), s: P === 100 && O === 0 ? 0 : re(P === 0 ? j / 255 : Math.max(Math.min(j / 255 * 100, 100), 0), 0), l: re(Math.max(Math.min(e.props.hsla.l / 255 * 100, 100), 0), 0), a: we }, e.props.hslaString = `hsla(${e.props.hslaPercent.h}, ${e.props.hslaPercent.s}%, ${e.props.hslaPercent.l}%, ${we})`, e.props.hslaStringPrecise = `hsla(${I}, ${re(P === 0 ? j / 255 : j / 255 * 100, 2)}%, ${re(Q / 255 * 100, 2)}%, ${we})`, e.props.rgba = { r: X, g: q, b: xe, a: we }, e.props.rgbaString = `rgba(${X}, ${q}, ${xe}, ${we})`, De(Ve), setTimeout(() => {
        var Ce;
        fo(), (function() {
          const Ye = e.props.s, Ht = 100 - e.props.v;
          e.props.controlLSPosition = { x: Ye, y: Ht };
        })(), y(), r || typeof window > "u" || (r = (Ce = e.props.__root) === null || Ce === void 0 ? void 0 : Ce.querySelector(`[data-id="${e.props.id}"]`));
      }, 0);
      const ge = e.props.valueFormat ? e.props.valueFormat : e.props.format;
      E || (ge === "hex" ? e.input(e.props.hex) : ge === "rgba" ? e.input(e.props.rgbaString) : ge === "hsla" && e.input(e.props.hslaStringPrecise));
    }
    function fo() {
      c(), f(), d(), $();
    }
    e.addProps(["expanded", "h", "s", "v", "a", "hsla", "hslaPercent", "hslaString", "hslaStringPrecise", "rgba", "rgbaString", "hex", "controlLSPosition", "panelActiveFormat", "hexInputFocused", "hasNativeEyeDropper", "focusedSwatch", "swatchIsUsingKeyboardNav", "showPanelClose"]), e.props.h = e.props.h || void 0, e.props.s = e.props.s || void 0, e.props.v = e.props.v || void 0, e.props.a = e.props.a || 1, e.props.controlLSPosition = e.props.controlLSPosition || { x: 0, y: 0 }, e.props.switchIcon = e.props.switchIcon || '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.2 179.7L154.4 66.2c1.4-1.3 3.5-2.2 5.6-2.2s4.2 .8 5.6 2.2L285.8 179.7c1.4 1.3 2.2 3.2 2.2 5.2c0 3.9-3.2 7.1-7.1 7.1H39.1c-3.9 0-7.1-3.2-7.1-7.1c0-2 .8-3.8 2.2-5.2zm-22-23.3C4.4 163.8 0 174.1 0 184.9C0 206.5 17.5 224 39.1 224H280.9c21.6 0 39.1-17.5 39.1-39.1c0-10.8-4.4-21.1-12.3-28.4L187.6 42.9C180.1 35.9 170.2 32 160 32s-20.1 3.9-27.6 10.9L12.3 156.4zm22 175.9c-1.4-1.3-2.2-3.2-2.2-5.2c0-3.9 3.2-7.1 7.1-7.1H280.9c3.9 0 7.1 3.2 7.1 7.1c0 2-.8 3.8-2.2 5.2L165.6 445.8c-1.4 1.3-3.5 2.2-5.6 2.2s-4.2-.8-5.6-2.2L34.2 332.3zm-22 23.3L132.4 469.1c7.4 7 17.4 10.9 27.6 10.9s20.1-3.9 27.6-10.9L307.7 355.6c7.8-7.4 12.3-17.7 12.3-28.5c0-21.6-17.5-39.1-39.1-39.1H39.1C17.5 288 0 305.5 0 327.1c0 10.8 4.4 21.1 12.3 28.5z"/></svg>', e.props.hexInputFocused = !1, e.props.swatchIsUsingKeyboardNav = !1, e.on("destroying", () => {
      e.context && typeof document < "u" && document.removeEventListener("paste", m);
    }), e.on("created", () => {
      var M, B;
      e.context && (typeof window < "u" && document.addEventListener("paste", m), e.props.expanded = !1, e.props.panelActiveFormat = e.props.format || u[0], e.props.panelControls = Tr(e.props.panelControls), e.props.eyeDropper = Tr(e.props.eyeDropper), e.props.panelFormat = Tr(e.props.panelFormat), e.props.showValue = Tr(e.props.showValue), e.props.allowPaste = Tr(e.props.allowPaste), e.props.inline = H(e.props.inline), e.props.disabled = H(e.props.disabled), e.props.format = e.props.format || "hex", e.props.alpha = H((B = (M = e.props) === null || M === void 0 ? void 0 : M.alpha) === null || B === void 0 || B), e.props.valueFormat = e.props.valueFormat || e.props.format, e.props.closeOnSelect = H(e.props.closeOnSelect), e.props.focusedSwatch = void 0, e.value === void 0 || e.value === "" || e.value === null ? (e.props.rgba = { r: 0, g: 0, b: 0 }, ee(0, 0, 0, !0)) : S(`${e.value}`), e.on("input", ({ payload: A }) => {
        r && e.props.__root !== void 0 && !r.contains(e.props.__root.activeElement) && S(A);
      }), setTimeout(() => {
        C();
      }, 5), k(), e.on("prop:expanded", () => {
        var A;
        e.props.expanded ? (C(), k(), L(), document.addEventListener("keydown", E), window.innerWidth <= 430 && !window.matchMedia("(hover: hover)").matches ? e.props.showPanelClose = !0 : e.props.showPanelClose = !1, setTimeout(() => {
          var I;
          const O = (I = e.props.__root) === null || I === void 0 ? void 0 : I.querySelector(`[data-id="${e.props.id}"] *:not(.formkit-swatch-preview)[tabindex="0"]`);
          O && O.focus();
        }, 0)) : (document.removeEventListener("keydown", E), ((A = e.props.__root) === null || A === void 0 ? void 0 : A.querySelector(`[data-id="${e.props.id}"] *[tabindex="0"]`)).focus());
        function E(I) {
          I.key === "Escape" && (I.preventDefault(), e.props.expanded = !1);
        }
      }), e.context.fns.anyToHsvaString = (A, E) => {
        const I = Ko(A);
        if (!I) return "0-0-0-1";
        let [O, P, Y, K] = I;
        return E === 0 && (O = Y === 0 || Y === 100 && P === 0 ? 0 : O), `${re(O, E)}-${re(P, E)}-${re(Y, E)}-${re(K, 2)}`;
      }, e.context.handlers.inputPreviewClick = (A) => {
        e.props.expanded = !e.props.expanded;
      }, e.context.handlers.inputPreviewFocusout = (A) => {
        var E, I, O;
        const P = (E = e.props.__root) === null || E === void 0 ? void 0 : E.querySelector(`[data-id="${e.props.id}"] .formkit-inner`), Y = A.relatedTarget;
        if (P.contains(Y)) {
          let K = function(j) {
            var Q, X;
            P.contains(j.target) || (e.props.expanded = !1, (Q = e.props.__root) === null || Q === void 0 || Q.removeEventListener("mousedown", K), (X = e.props.__root) === null || X === void 0 || X.removeEventListener("touchstart", K));
          };
          (I = e.props.__root) === null || I === void 0 || I.addEventListener("mousedown", K), (O = e.props.__root) === null || O === void 0 || O.addEventListener("touchstart", K);
        } else e.props.expanded = !1;
      }, e.context.handlers.inputPreviewKeydown = (A) => {
        A.key === "Escape" && (A.preventDefault(), e.props.expanded = !1), A.key !== "Enter" && A.key !== " " || (A.preventDefault(), e.props.expanded = !e.props.expanded);
      }, e.context.handlers.closePanel = () => {
        e.props.expanded = !1;
      }, e.context.handlers.panelCloseKeydown = (A) => {
        A.key !== "Enter" && A.key !== " " || (A.preventDefault(), e.props.expanded = !1);
      }, e.context.handlers.toggleFormat = (A = 1) => {
        A = typeof A == "number" ? A : 1;
        const E = (u.indexOf(e.props.panelActiveFormat) + A + u.length) % u.length;
        e.props.panelActiveFormat = u[E];
      }, e.context.handlers.panelKeydown = (A) => {
        var E, I, O;
        if (A.key === "Tab" && e.props.expanded) {
          A.preventDefault();
          const P = Array.from(((E = e.props.__root) === null || E === void 0 ? void 0 : E.querySelectorAll(`[data-id="${e.props.id}"] *:not(.formkit-swatch-preview)[tabindex="0"]`)) || []).filter(d1), Y = P.indexOf(!((I = e.props.__root) === null || I === void 0) && I.activeElement ? (O = e.props.__root) === null || O === void 0 ? void 0 : O.activeElement : e.props.__root);
          let K;
          K = A.shiftKey ? (Y - 1 + P.length) % P.length : (Y + 1) % P.length, P[K].focus();
        }
      }, e.context.handlers.lsKeydown = (A) => {
        if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(A.key)) {
          A.preventDefault();
          const { h: E, s: I, v: O } = e.props, P = A.shiftKey ? 10 : 1;
          switch (A.key) {
            case "ArrowLeft":
              ee(E, I - P, O);
              break;
            case "ArrowRight":
              ee(E, I + P, O);
              break;
            case "ArrowUp":
              ee(E, I, O + P);
              break;
            case "ArrowDown":
              ee(E, I, O - P);
              break;
            case "PageUp":
              ee(E, I, O + 10);
              break;
            case "PageDown":
              ee(E, I, O - 10);
              break;
            case "Home":
              ee(E, I - 10, O);
              break;
            case "End":
              ee(E, I + 10, O);
          }
          fo();
        }
      }, e.context.handlers.hueControlKeydown = (A) => {
        if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(A.key)) {
          A.preventDefault();
          const { h: E, s: I, v: O } = e.props, P = A.shiftKey ? 10 : 1;
          switch (A.key) {
            case "ArrowLeft":
            case "ArrowDown":
              ee(E - P, I, O);
              break;
            case "ArrowRight":
            case "ArrowUp":
              ee(E + P, I, O);
              break;
            case "PageUp":
              ee(E + 10, I, O);
              break;
            case "PageDown":
              ee(E - 10, I, O);
              break;
            case "Home":
              ee(0, I, O);
              break;
            case "End":
              ee(360, I, O);
          }
          fo();
        }
      }, e.context.handlers.alphaControlKeydown = (A) => {
        if (e.props.alpha && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(A.key)) {
          A.preventDefault();
          const { h: E, s: I, v: O, a: P } = e.props, Y = A.shiftKey ? 0.1 : 0.01;
          switch (A.key) {
            case "ArrowLeft":
            case "ArrowDown":
              e.props.a = re(Math.min(Math.max(P - Y, 0), 1), 2);
              break;
            case "ArrowRight":
            case "ArrowUp":
              e.props.a = re(Math.min(Math.max(P + Y, 0), 1), 2);
              break;
            case "PageUp":
              e.props.a = re(Math.min(Math.max(P + 0.1, 0), 1), 2);
              break;
            case "PageDown":
              e.props.a = re(Math.min(Math.max(P - 0.1, 0), 1), 2);
              break;
            case "Home":
              e.props.a = 0;
              break;
            case "End":
              e.props.a = 1;
          }
          ee(E, I, O);
        }
      }, e.context.handlers.eyeDropperKeydown = (A) => {
        var E;
        if (A.key === "Enter" || A.key === " ") {
          A.preventDefault();
          const I = (E = e.props.__root) === null || E === void 0 ? void 0 : E.getElementById(`eye-dropper-${e.props.id}`);
          I?.click();
        }
      }, e.context.handlers.formatSwitcherKeydown = (A) => {
        e.context && (A.key !== "Enter" && A.key !== " " && A.key !== "ArrowDown" || (A.preventDefault(), e.context.handlers.toggleFormat()), A.key === "ArrowUp" && (A.preventDefault(), e.context.handlers.toggleFormat(-1)));
      }, e.context.handlers.hexInput = (A) => {
        const E = A.target, I = E.value.startsWith("#") ? 9 : 8, O = E.value.slice(0, I);
        if (E.value = e.props.alpha ? O : O.slice(0, 7), Xt(O)) {
          const [P, Y, K, j] = Cs(O);
          e.props.alpha && (e.props.a = j), De(O), ee(P, Y, K);
        }
      }, e.context.handlers.hexKeydown = (A) => {
        const E = A.target, I = E.value;
        let O = "";
        if (!Xt(I)) return;
        const P = I.startsWith("#") ? I.slice(1) : I, Y = P.length === 8, K = Y ? P.substring(0, 6) : P, j = Y ? P.substring(6, 8) : "", Q = A.shiftKey ? 10 : 1, X = 16777215;
        let q;
        if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(A.key)) switch (A.preventDefault(), A.key) {
          case "ArrowUp":
            q = (parseInt(K, 16) + Q) % 16777216;
            break;
          case "ArrowDown":
            q = (parseInt(K, 16) - Q + X + 1) % 16777216;
            break;
          case "PageUp":
            q = (parseInt(K, 16) + 10) % 16777216;
            break;
          case "PageDown":
            q = (parseInt(K, 16) - 10 + X + 1) % 16777216;
            break;
          case "Home":
            q = 0;
            break;
          case "End":
            q = X;
        }
        q !== void 0 && (O = q.toString(16).padStart(6, "0").toUpperCase()), O && (E.value = Y ? `#${O}${j}` : `#${O}`), e.context && e.context.handlers.hexInput(A);
      }, e.context.handlers.hexFocus = () => {
        e.context && (e.props.hexInputFocused = !0);
      }, e.context.handlers.hexBlur = (A) => {
        if (!e.context) return;
        e.props.hexInputFocused = !1;
        const E = A.target.value;
        Xt(E) && De(E);
      }, e.context.handlers.rangeLimitInput = (A, E, I, O) => (P) => {
        const Y = O || P;
        if (!Y || !e.context) return;
        const K = Y.target;
        if (K.value.endsWith(".")) return;
        const j = Math.max(Math.min(Number(K.value), I), E);
        K.value = `${j}`;
        const Q = K.id;
        if (A === "hsla") {
          switch (Q) {
            case `h-${e.props.id}`:
              e.props.h = j;
              break;
            case `s-${e.props.id}`:
              e.props.hslaPercent.s = j;
              break;
            case `l-${e.props.id}`:
              e.props.hslaPercent.l = j;
          }
          const [X, q, xe] = aa(e.props.h, 2.55 * e.props.hslaPercent.s, 2.55 * e.props.hslaPercent.l);
          ee(X, q, xe);
        } else if (A === "rgba") {
          switch (Q) {
            case `r-${e.props.id}`:
              e.props.rgba.r = j;
              break;
            case `g-${e.props.id}`:
              e.props.rgba.g = j;
              break;
            case `b-${e.props.id}`:
              e.props.rgba.b = j;
          }
          const [X, q, xe] = Du(e.props.rgba.r, e.props.rgba.g, e.props.rgba.b);
          ee(X, q, xe);
        } else A == "alpha" && e.props.alpha && (e.props.a = j, ee());
      }, e.context.handlers.rangeLimitKeydown = (A, E, I, O) => (P) => {
        if (e.context)
          if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", "Backspace", "Tab", "Enter"].includes(P.key) || P.metaKey || !/[a-zA-Z!@#$%^&*()_+={}\[\]:;"'<,>?\/|\\`~]/g.test(P.key)) {
            if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(P.key)) {
              const Y = P.target, K = Number(Y.value), j = P.shiftKey ? 10 * O : O;
              switch (P.key) {
                case "ArrowUp":
                  P.preventDefault(), Y.value = `${Math.min(K + j, I)}`;
                  break;
                case "ArrowDown":
                  P.preventDefault(), Y.value = `${Math.max(K - j, E)}`;
                  break;
                case "PageUp":
                  P.preventDefault(), Y.value = `${Math.min(K + 10 * O, I)}`;
                  break;
                case "PageDown":
                  P.preventDefault(), Y.value = `${Math.max(K - 10 * O, E)}`;
                  break;
                case "Home":
                  P.preventDefault(), Y.value = `${E}`;
                  break;
                case "End":
                  P.preventDefault(), Y.value = `${I}`;
              }
              e.context.handlers.rangeLimitInput(A, E, I, P)();
            }
          } else P.preventDefault();
      }, e.context.handlers.swatchClick = (A) => {
        const E = A.target;
        if (E.dataset.colorPrecise) {
          const [I, O, P, Y] = Zi(E.dataset.colorPrecise);
          e.props.alpha && (e.props.a = Y), ee(I, O, P), e.props.closeOnSelect && (e.props.expanded = !1);
        }
        e.context && A.type !== "keydown" && e.context.handlers.swatchKeydown(A);
      }, e.context.handlers.swatchKeydown = (A) => {
        var E, I, O, P;
        if (!e.context || !l || !l.length) return;
        const Y = l.indexOf(A.currentTarget);
        let K = null;
        const j = (function(ge) {
          var Ce;
          if (!ge.length) return 0;
          const Ye = (Ce = ge[0].parentElement) === null || Ce === void 0 ? void 0 : Ce.parentElement;
          if (!Ye) return 0;
          const Ht = Ye.getBoundingClientRect().width, xr = ge[0].parentElement;
          if (!xr) return 0;
          const mo = xr.getBoundingClientRect(), Qe = window.getComputedStyle(xr), Tu = parseFloat(Qe.marginLeft) + parseFloat(Qe.marginRight), Iu = mo.width + Tu;
          return Math.floor(Ht / Iu);
        })(l), Q = l.length;
        let X = 0, q = Q, xe = !1;
        const Ve = l[Y].dataset.group;
        if (Ve !== void 0) {
          const ge = l.filter((Ce) => Ce.dataset.group === Ve);
          X = l.indexOf(ge[0]), q = l.indexOf(ge[ge.length - 1]);
        }
        const we = (Y - X) % j;
        if (!A.key || A.key === "Tab") return A.key || (e.props.swatchIsUsingKeyboardNav = !1, p = we, g(Y)), A.key === "Tab" && (e.props.swatchIsUsingKeyboardNav = !1), void l.forEach((ge) => {
          delete ge.parentElement.dataset.focused;
        });
        if (A.key === "Enter" || A.key === " ") return A.preventDefault(), p = we, e.context.handlers.swatchClick(A), void g(Y);
        switch (A.key !== "ArrowUp" && A.key !== "ArrowDown" && A.key !== "ArrowLeft" && A.key !== "ArrowRight" || (e.props.swatchIsUsingKeyboardNav = !0, A.preventDefault()), A.key) {
          case "ArrowUp":
            K = Math.max(Y - j, Y - (j - (p - we))), xe = !0;
            break;
          case "ArrowDown":
            K = Math.max(Y + j, Y + (j + (p - we))), xe = !0;
            break;
          case "ArrowLeft":
            K = Y - 1, p = (K - X) % j;
            break;
          case "ArrowRight":
            K = Y + 1, p = (K - X) % j;
        }
        if (xe && K !== null && (K < X || K > q)) {
          let ge;
          ge = K < X ? (I = (E = l[X - 1]) === null || E === void 0 ? void 0 : E.dataset) === null || I === void 0 ? void 0 : I.group : (P = (O = l[q + 1]) === null || O === void 0 ? void 0 : O.dataset) === null || P === void 0 ? void 0 : P.group;
          const Ce = l.filter((Qe) => Qe.dataset.group === Ve), Ye = l.filter((Qe) => Qe.dataset.group === ge), Ht = (Y - X) % j, xr = Ce.length % j || j, mo = Y >= X + Ce.length - xr;
          if (K < X) {
            const Qe = Ye.length % j || j;
            K = X - Qe + Math.min(Math.max(Ht, p), Qe - 1);
          } else K > q && (K = mo ? Math.min(q + Math.max(Ht, p) + 1, l.indexOf(Ye[Ye.length - 1])) : Math.min(K, q));
        }
        if (K !== null && K >= 0 && K < Q) {
          g(K), l.forEach((Ye) => {
            delete Ye.parentElement.dataset.focused;
          });
          const ge = l[K], Ce = ge.parentElement;
          ge.focus(), Ce.dataset.focused = "true";
        }
      });
    });
  },
  en,
  mt,
  /* @__PURE__ */ te("eyeDropper", "color"),
  /* @__PURE__ */ te("close", "close"),
  /* @__PURE__ */ ie("close"),
  /* @__PURE__ */ ie("next")
] }, Rt = /* @__PURE__ */ Ee("tb"), { outer: m1, wrapper: qi, prefix: h1, suffix: g1, help: v1, messages: $1, message: y1, icon: zi } = /* @__PURE__ */ Me(Rt), Gi = Rt("label", () => ({ if: "$label", $el: "label", attrs: { id: "$id + '_label'" } })), b1 = Rt("singleToggle", () => ({ bind: "$attrs", $el: "button", attrs: { id: "$id", type: "button", "aria-label": "$label", "aria-pressed": "$fns.isChecked($onValue, $value)", onClick: "$handlers.toggleValue()", disabled: "$disabled", class: "$classes.input", onBlur: "$handlers.blur" } })), x1 = Rt("multiToggle", () => ({ bind: "$attrs", $el: "button", attrs: { type: "button", id: "$id+'_'+$index", "aria-label": "$label", "aria-pressed": "$fns.isChecked($option, $value)", onClick: "$handlers.toggleValue($option)", class: "$classes.input", title: "$option.help", disabled: "$disabled || $option.disabled", onBlur: "$handlers.blur" } })), $n = Rt("inputInner", () => ({ bind: "$attrs", $el: "span" })), w1 = Rt("options", () => ({ $el: "ul", attrs: { id: "$id", "data-vertical": '$vertical && "true" || "false"', "aria-labelledby": "$id" } })), _1 = Rt("option", () => ({ $el: "li", for: ["option", "index", "$options"], attrs: { key: "$option.value", "data-index": "$index" } }));
function Xi(e, t) {
  return t = t?.hasOwnProperty("__original") ? t?.__original : t?.value, e.props.multiple ? !!Array.isArray(e.value) && e.value.filter((r) => W(r, t)).length > 0 : t !== void 0 ? W(e.value, t) : (e.props._isChecked = W(e.value, e.props.onValue), e.props._isChecked);
}
const k1 = { schema: /* @__PURE__ */ m1(/* @__PURE__ */ R("$options", /* @__PURE__ */ qi(/* @__PURE__ */ Gi("$label"), /* @__PURE__ */ w1(/* @__PURE__ */ _1(/* @__PURE__ */ x1(/* @__PURE__ */ R("$fns.isChecked($option) === true", /* @__PURE__ */ $n("$slots.default || $slots.on || $option.onLabel || $option.label"), /* @__PURE__ */ $n("$slots.default || $slots.off || $option.offLabel || $option.label")))))), /* @__PURE__ */ qi(/* @__PURE__ */ R("$label && ($slots.default || $slots.on || $onLabel)", /* @__PURE__ */ Gi("$label")), /* @__PURE__ */ b1(/* @__PURE__ */ zi("prefix"), /* @__PURE__ */ h1(), /* @__PURE__ */ R("$_isChecked === true", /* @__PURE__ */ $n("$slots.default || $slots.on || $onLabel || $label"), /* @__PURE__ */ $n("$slots.default || $slots.off || $offLabel || $label")), /* @__PURE__ */ g1(), /* @__PURE__ */ zi("suffix")))), /* @__PURE__ */ v1("$help"), /* @__PURE__ */ $1(/* @__PURE__ */ y1("$message.value"))), type: "input", family: "button", props: ["options"], features: [function(e) {
  var t, r, n, o;
  e.addProps(["enforced", "multiple", "offLabel", "offValue", "disabled", "onLabel", "onValue", "vertical", "_isChecked"]), e.props._isChecked = !1, e.props.enforced = H(e.props.enforced), e.props.multiple = H(e.props.multiple), e.props.vertical = H(e.props.vertical), "disabled" in e.props && (e.props.disabled = H(e.props.disabled)), (t = (n = e.props).onValue) !== null && t !== void 0 || (n.onValue = !0), (r = (o = e.props).offValue) !== null && r !== void 0 || (o.offValue = !1), e.on("created", () => {
    var s;
    e.props._isChecked = Xi(e, null), e.props.options && e.props.multiple && e.input((s = e.value) !== null && s !== void 0 ? s : [], !1), e.context && (e.context.fns.isChecked = (a) => Xi(e, a), e.context.handlers.toggleValue = (a) => (i) => (function(l, p, u) {
      if (u.preventDefault(), p = p && F(p), l.props.options) if (l.props.multiple) {
        const c = Array.isArray(l.value) ? [...l.value] : [], f = c.findIndex((d) => W(d, p));
        f > -1 && (!l.props.enforced || c.length > 1) ? c.splice(f, 1) : f === -1 && c.push(p), l.input(c);
      } else W(l.value, p) && !l.props.enforced ? l.input(void 0) : l.input(p);
      else l.input(W(l.value, l.props.onValue) ? l.props.offValue : l.props.onValue);
    })(e, a, i));
  });
}, mt] }, Cu = /* @__PURE__ */ Ee("ut"), { outer: S1, inner: D1, wrapper: C1, label: L1, prefix: A1, suffix: T1, help: I1, messages: E1, message: M1, icon: Ji } = /* @__PURE__ */ Me(Cu), O1 = Cu("input", () => ({ $el: "input", bind: "$attrs", attrs: { name: "$node.name", autocomplete: "$attrs.autocomplete || off", id: "$id", onChange: "$handlers.handleInput", onBlur: "$handlers.unitBlur", onInput: "$handlers.handleInput", onKeydown: "$handlers.handleKeyDown", onBeforeinput: "$handlers.handleBeforeInput", readonly: "$readonly", inputmode: "decimal", placeholder: "$placeholder || $unitParts.unit", disabled: "$disabled", "data-unit": "$unit", "data-currency": "$currency", "data-display-locale": "$displayLocale", "data-value-locale": "$valueLocale", "data-decimals": "$decimals", "data-trailing": "$trailingZeros", "data-numeric-value": "$_numericValue", "data-align": "$_valueAlignAuto", "aria-required": "$state.required || undefined" } })), jo = { meter: { kilometer: 1e-3, meter: 1, centimeter: 100, millimeter: 1e3, mile: 621371e-9, yard: 1.09361, foot: 3.28084, inch: 39.3701, "mile-scandinavian": 1e-4 }, kilometer: { kilometer: 1, meter: 1e3, centimeter: 1e5, millimeter: 1e6, mile: 0.621371, yard: 1093.61, foot: 3280.84, inch: 39370.1, "mile-scandinavian": 10 }, centimeter: { kilometer: 1e-5, meter: 0.01, centimeter: 1, millimeter: 10, mile: 62137e-10, yard: 0.0109361, foot: 0.0328084, inch: 0.393701, "mile-scandinavian": 1e-6 }, millimeter: { kilometer: 1e-6, meter: 1e-3, centimeter: 0.1, millimeter: 1, mile: 621371e-12, yard: 109361e-8, foot: 328084e-8, inch: 0.0393701, "mile-scandinavian": 1e-7 }, mile: { kilometer: 1.60934, meter: 1609.34, centimeter: 160934, millimeter: 1609340, mile: 1, yard: 1760, foot: 5280, inch: 63360, "mile-scandinavian": 0.160934 }, yard: { kilometer: 9144e-7, meter: 0.9144, centimeter: 91.44, millimeter: 914.4, mile: 568182e-9, yard: 1, foot: 3, inch: 36, "mile-scandinavian": 9144e-8 }, foot: { kilometer: 3048e-7, meter: 0.3048, centimeter: 30.48, millimeter: 304.8, mile: 189394e-9, yard: 0.333333, foot: 1, inch: 12, "mile-scandinavian": 3048e-8 }, inch: { kilometer: 254e-7, meter: 0.0254, centimeter: 2.54, millimeter: 25.4, mile: 15783e-9, yard: 0.0277778, foot: 0.0833333, inch: 1, "mile-scandinavian": 254e-8 }, "mile-scandinavian": { kilometer: 10, meter: 1e4, centimeter: 1e6, millimeter: 1e7, mile: 6.21371, yard: 10936.1, foot: 32808.4, inch: 393701, "mile-scandinavian": 1 } }, Yo = { celsius: { celsius: (e) => e, fahrenheit: (e) => 1.8 * e + 32 }, fahrenheit: { celsius: (e) => 5 / 9 * (e - 32), fahrenheit: (e) => e } }, Zo = { acre: { acre: 1, hectare: 0.404686 }, hectare: { acre: 2.47105, hectare: 1 } }, Uo = { gram: { gram: 1, kilogram: 1e-3, ounce: 0.035274, pound: 220462e-8 }, kilogram: { gram: 1e3, kilogram: 1, ounce: 35.274, pound: 2.20462 }, ounce: { gram: 28.3495, kilogram: 0.0283495, ounce: 1, pound: 0.0625 }, pound: { gram: 453.592, kilogram: 0.453592, ounce: 16, pound: 1 }, stone: { gram: 6350.29, kilogram: 6.35029, ounce: 224, pound: 14, stone: 1 } }, qo = { liter: { liter: 1, milliliter: 1e3, gallon: 0.264172, "fluid-ounce": 33.814 }, milliliter: { liter: 1e-3, milliliter: 1, gallon: 264172e-9, "fluid-ounce": 0.033814 }, gallon: { liter: 3.78541, milliliter: 3785.41, gallon: 1, "fluid-ounce": 128 }, "fluid-ounce": { liter: 0.0295735, milliliter: 29.5735, gallon: 78125e-7, "fluid-ounce": 1 } }, zo = { day: { day: 1, hour: 24, microsecond: 864e8, millisecond: 864e5, minute: 1440, month: 0.0328767, nanosecond: 864e14, second: 86400, week: 0.142857, year: 273973e-8 }, hour: { day: 0.0416667, hour: 1, microsecond: 36e8, millisecond: 36e5, minute: 60, month: 136986e-8, nanosecond: 36e11, second: 3600, week: 595238e-8, year: 114155e-9 }, microsecond: { day: 115741e-19, hour: 277778e-18, microsecond: 1, millisecond: 1e-3, minute: 166667e-13, month: 380517e-24, nanosecond: 1e3, second: 1e-6, week: 165344e-20, year: 3171e-20 }, millisecond: { day: 115741e-13, hour: 277778e-12, microsecond: 1e3, millisecond: 1, minute: 166667e-10, month: 380517e-19, nanosecond: 1e6, second: 1e-3, week: 165344e-16, year: 3171e-16 }, minute: { day: 694444e-9, hour: 0.0166667, microsecond: 6e7, millisecond: 6e4, minute: 1, month: 228311e-10, nanosecond: 6e10, second: 60, week: 992063e-10, year: 190132e-11 }, month: { day: 30.4368, hour: 730.484, microsecond: 2628e12, millisecond: 2628e9, minute: 43800, month: 1, nanosecond: 2628e15, second: 2628e6, week: 4.34524, year: 0.0833333 }, nanosecond: { day: 115741e-25, hour: 277778e-24, microsecond: 1e-3, millisecond: 1e-6, minute: 166667e-19, month: 380517e-28, nanosecond: 1, second: 1e-9, week: 165344e-26, year: 3171e-26 }, second: { day: 115741e-10, hour: 277778e-9, microsecond: 1e6, millisecond: 1e3, minute: 0.0166667, month: 380517e-16, nanosecond: 1e9, second: 1, week: 165344e-13, year: 3171e-13 }, week: { day: 7, hour: 168, microsecond: 6048e11, millisecond: 6048e8, minute: 10080, month: 0.230137, nanosecond: 6048e14, second: 604800, week: 1, year: 0.0191781 }, year: { day: 365, hour: 8760, microsecond: 3154e13, millisecond: 3154e10, minute: 525600, month: 12, nanosecond: 3154e16, second: 3154e4, week: 52.1429, year: 1 } }, Go = { bit: { bit: 1, byte: 0.125, kilobit: 1e-3, kilobyte: 125e-6, megabit: 1e-6, megabyte: 125e-9, gigabit: 1e-9, gigabyte: 125e-12, terabit: 1e-12, terabyte: 125e-15, petabyte: 125e-18 }, byte: { bit: 8, byte: 1, kilobit: 8e-3, kilobyte: 1e-3, megabit: 8e-6, megabyte: 1e-6, gigabit: 8e-9, gigabyte: 1e-9, terabit: 8e-12, terabyte: 1e-12, petabyte: 1e-15 }, kilobit: { bit: 1e3, byte: 125, kilobit: 1, kilobyte: 0.125, megabit: 1e-3, megabyte: 125e-6, gigabit: 1e-6, gigabyte: 125e-9, terabit: 1e-9, terabyte: 125e-12, petabyte: 125e-15 }, kilobyte: { bit: 8e3, byte: 1e3, kilobit: 8, kilobyte: 1, megabit: 8e-3, megabyte: 1e-3, gigabit: 8e-6, gigabyte: 1e-6, terabit: 8e-9, terabyte: 1e-9, petabyte: 1e-12 }, megabit: { bit: 1e6, byte: 125e3, kilobit: 1e3, kilobyte: 125, megabit: 1, megabyte: 0.125, gigabit: 1e-3, gigabyte: 125e-6, terabit: 1e-6, terabyte: 125e-9, petabyte: 125e-12 }, megabyte: { bit: 8e6, byte: 1e6, kilobit: 8e3, kilobyte: 1e3, megabit: 8, megabyte: 1, gigabit: 8e-3, gigabyte: 1e-3, terabit: 8e-6, terabyte: 1e-6, petabyte: 1e-9 }, gigabit: { bit: 1e9, byte: 125e6, kilobit: 1e6, kilobyte: 125e3, megabit: 1e3, megabyte: 125, gigabit: 1, gigabyte: 0.125, terabit: 1e-3, terabyte: 125e-6, petabyte: 125e-9 }, gigabyte: { bit: 8e9, byte: 1e9, kilobit: 8e6, kilobyte: 1e6, megabit: 8e3, megabyte: 1e3, gigabit: 8, gigabyte: 1, terabit: 8e-3, terabyte: 1e-3, petabyte: 1e-6 }, terabit: { bit: 1e12, byte: 125e9, kilobit: 1e9, kilobyte: 125e6, megabit: 1e6, megabyte: 125e3, gigabit: 1e3, gigabyte: 125, terabit: 1, terabyte: 0.125, petabyte: 125e-6 }, terabyte: { bit: 8e12, byte: 1e12, kilobit: 8e9, kilobyte: 1e9, megabit: 8e6, megabyte: 1e6, gigabit: 8e3, gigabyte: 1e3, terabit: 8, terabyte: 1, petabyte: 1e-3 }, petabyte: { bit: 1e15, byte: 125e12, kilobit: 1e12, kilobyte: 125e9, megabit: 1e9, megabyte: 125e6, gigabit: 1e6, gigabyte: 125e3, terabit: 1e3, terabyte: 125, petabyte: 1 } };
function Lu(e) {
  let t = !1;
  function r(p) {
    var u, c, f;
    const d = (`${p}`.match(/\-/g) || []).length % 2 == 1;
    p = (function(S) {
      if (S = (function(g) {
        return g.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, (_) => (15 & _.charCodeAt(0)).toString());
      })(`${S}`), isNaN(S) && (S = S.split(e.props.unitParts.decimal).map((g) => g.replace(/[^0-9]/g, "")).join(".")), S = S.replace(/[^0-9\.]/g, ""), S.includes(".")) {
        const g = S.split(".");
        e.props.decimals === 0 ? S = g[0] : e.props.type === "currency" && (g[1] = g[1].padEnd(l(), "0").slice(0, l()), S = g.join("."));
      }
      return S;
    })(p);
    const $ = {};
    s() !== "unit" && s() !== "decimal" || ($.minimumFractionDigits = p.includes(".") ? 1 : 0), $.maximumFractionDigits = e.props.type === "currency" ? l() : e.props.decimals, e.props.minDecimals && ($.minimumFractionDigits = e.props.minDecimals, p && !p.includes(".") && (p += ".".padEnd(e.props.minDecimals + 1, "0"))), $.maximumFractionDigits === 0 && p.includes(".") && (p = p.split(".")[0]);
    let h = "";
    if (!isNaN(p) && p.trim() !== "" && (p = d ? `-${p}` : p, e.props.max && !isNaN(e.props.max) && (p = Number(p) > e.props.max ? `${e.props.max}` : p), e.props.min && !isNaN(e.props.min) && (p = Number(p) < e.props.min ? `${e.props.min}` : p), p.includes(".") && e.props.type === "currency" ? p = p.split(".")[0].padStart(1, "0") + "." + ((u = p.split(".")[1]) !== null && u !== void 0 ? u : "0") : e.props.type === "currency" && ($.maximumFractionDigits = (c = $.minimumFractionDigits) !== null && c !== void 0 ? c : 0), h = a(e.props.displayLocale, $).format(p), e.props.type === "unit" && p[p.length - 1] === ".")) {
      const S = h.lastIndexOf(e.props.unitParts.decimal);
      h = h.slice(0, S + 1) + h.slice(S + 2), p = p.slice(0, -1);
    }
    let y, m = p.split(".");
    e.props.type === "currency" && (m = m[0] + ((f = m[1]) !== null && f !== void 0 ? f : "").padEnd(l(), "0"), m.length > 1 && (m = m.replace(/^0+/, ""), m = p !== "" && m === "" ? "0" : m)), e.props.valueStore = { number: p, integer: m, string: h }, t = !0, e.props.valueStore && (y = e.props.valueStore.hasOwnProperty(e.props.valueFormat) ? e.props.valueStore[e.props.valueFormat] : e.props.valueStore.number), e.input(y === "" ? void 0 : y).then(() => (t = !1, Promise.resolve()));
  }
  function n() {
    fe(`${e.props.id}`, (p) => {
      var u, c;
      p instanceof HTMLInputElement && (p.value = (c = (u = e.props.valueStore) === null || u === void 0 ? void 0 : u.string) !== null && c !== void 0 ? c : "");
    }, e.props.__root);
  }
  function o() {
    var p, u;
    const c = (p = e.props.__root) === null || p === void 0 ? void 0 : p.querySelector(`#${e.props.id}_inner input`);
    return (u = c?.value) !== null && u !== void 0 ? u : "";
  }
  function s() {
    return e.props.currency ? "currency" : e.props.unit ? "unit" : "decimal";
  }
  function a(p, u = {}) {
    const c = s(), f = Object.assign({}, { style: c, roundingMode: "trunc" }, u);
    return e.props.type === "unit" && (f.unitDisplay = e.props.unitDisplay), e.props.type === "currency" && (f.currencyDisplay = e.props.currencyDisplay), f[c] = e.props[c], new Intl.NumberFormat(p, f);
  }
  function i(p, u) {
    var c, f, d, $, h;
    const y = (c = e.props.__root) === null || c === void 0 ? void 0 : c.querySelector(`#${e.props.id}_inner input`);
    if (!y) return;
    const m = ((d = (f = e.props.unitParts.unit) === null || f === void 0 ? void 0 : f.length) !== null && d !== void 0 ? d : 0) + ((h = ($ = e.props.unitParts.literal) === null || $ === void 0 ? void 0 : $.length) !== null && h !== void 0 ? h : 0);
    e.props.unitParts.unitLeft ? p = Math.max(p, m) : (p = Math.min(p, o().length - m), u === "insertText" && p === 0 && (p = 1)), y.setSelectionRange(p, p);
  }
  function l() {
    return e.props.decimals !== void 0 ? e.props.decimals : e.props.minDecimals !== void 0 && e.props.minDecimals > e.props.unitParts.fractionLength ? e.props.minDecimals : e.props.unitParts.fractionLength;
  }
  e.props.valueStore = null, e.on("input", ({ payload: p }) => {
    t || (r(p), n());
  }), e.context && (e.context.handlers.init = (p = null) => {
    var u;
    e.props.skipInit ? e.props.skipInit = !1 : (function() {
      var f, d, $, h, y, m, S;
      e.props.skipInit = !0;
      const g = a(e.props.displayLocale).formatToParts(1234567812345678e-8);
      e.props.unitParts = { decimal: (f = g.find((_) => _.type == "decimal")) === null || f === void 0 ? void 0 : f.value, group: (d = g.find((_) => _.type == "group")) === null || d === void 0 ? void 0 : d.value, unit: ($ = g.find((_) => ["unit", "currency"].includes(_.type))) === null || $ === void 0 ? void 0 : $.value, unitLeft: ["unit", "currency"].includes(g[0].type), literal: (y = (h = g.find((_) => _.type == "literal")) === null || h === void 0 ? void 0 : h.value) !== null && y !== void 0 ? y : "", fractionLength: (S = (m = g.find((_) => _.type == "fraction")) === null || m === void 0 ? void 0 : m.value.length) !== null && S !== void 0 ? S : 0 };
    })();
    let c = (u = p ?? e._value) !== null && u !== void 0 ? u : "";
    e.props.valueStore ? c = e.props.valueStore.number : e.props.valueFormat === "integer" && (c = (function(f) {
      var d;
      return (parseFloat(`${f}`) / Math.pow(10, (d = l()) !== null && d !== void 0 ? d : 0)).toString().replace(".", l());
    })(`${c ?? ""}`)), e.props.type === "unit" && e.props.valueUnit && e.props.unit && e.props.valueUnit !== e.props.unit && e.hook.input((f, d) => {
      const $ = (function(h, y, m) {
        if (jo[h] && jo[h][m]) return y * jo[h][m];
        if (Yo[h] && Yo[h][m]) return Yo[h][m](y);
        if (Zo[h] && Zo[h][m]) return y * Zo[h][m];
        if (Uo[h] && Uo[h][m]) return y * Uo[h][m];
        if (qo[h] && qo[h][m]) return y * qo[h][m];
        if (zo[h] && zo[h][m]) return y * zo[h][m];
        if (Go[h] && Go[h][m]) return y * Go[h][m];
        throw new Error("Conversion not supported");
      })(e.props.unit, f, e.props.valueUnit);
      return isNaN($) ? d(f) : d(+$.toFixed(Number(e.props.valueDecimals) || 2));
    }), r(c), n();
  }, e.context.handlers.handleBeforeInput = (p) => {
    var u, c, f, d, $, h, y, m, S;
    if (!e.props.inExecCommand && p.inputType !== "insertLineBreak" && (p.preventDefault(), p.stopPropagation(), p.target instanceof HTMLInputElement)) {
      const g = p.target, _ = (u = p.data) !== null && u !== void 0 ? u : "", C = (c = p.target.value) !== null && c !== void 0 ? c : "", k = (f = p.target.selectionStart) !== null && f !== void 0 ? f : 0, D = (d = p.target.selectionEnd) !== null && d !== void 0 ? d : 0, w = D - k, L = C.indexOf(e.props.unitParts.decimal);
      let x = (($ = p.target.selectionStart) !== null && $ !== void 0 ? $ : 0) + (p.data ? 0 : -1), b = C, v = 1;
      if (C.includes(e.props.unitParts.decimal) && _ === e.props.unitParts.decimal) return _ === e.props.unitParts.decimal && (x = b.indexOf(e.props.unitParts.decimal) + 1), void i(x);
      if (!(e.props.min === null || e.props.min < 0 || e.props.max < 0) && _ === "-" || _.match(/[a-zA-Z]/) || _ === e.props.unitParts.decimal && e.props.decimals === 0) return;
      if (p.inputType === "deleteByCut" && w > 0 && (b = b.slice(0, k) + b.slice(D), x = D), p.inputType === "insertFromPaste") {
        const T = (h = p.data) !== null && h !== void 0 ? h : "";
        b = b.slice(0, k) + T + b.slice(D);
      }
      if (p.inputType === "deleteContentBackward" && C[k - 1] === e.props.unitParts.group ? (v += 1, x -= 1) : p.inputType === "deleteContentForward" && C[k] === e.props.unitParts.group && (v += 1, x += 1), L !== -1 && x > L && p.inputType === "insertText" ? b = (function(T, V, U) {
        return T.substring(0, V) + U + T.substring(V + U.length);
      })(b, x, (y = p.data) !== null && y !== void 0 ? y : "0") : p.inputType === "insertText" ? (x = D, b = b.slice(0, k) + p.data + b.slice(D)) : p.inputType === "deleteContentForward" ? (x += 2, b = w === 0 ? b.slice(0, k) + b.slice(D + v) : b.slice(0, k) + b.slice(D)) : p.inputType === "deleteContentBackward" && (x += 1, w === 0 ? b = b.slice(0, Math.max(k - v, 0)) + b.slice(D) : w > 0 && (b = b.slice(0, k) + b.slice(D))), p.inputType === "deleteContentForward" && C[k] === e.props.unitParts.decimal) {
        const T = b.slice(k - 1);
        b = b.slice(0, k), T.includes(e.props.unitParts.unit) && (b += " " + e.props.unitParts.unit);
      } else if (p.inputType === "deleteContentBackward" && C[k - 1] === e.props.unitParts.decimal) {
        const T = b.slice(k - 1);
        b = b.slice(0, k - 1), T.includes(e.props.unitParts.unit) && (b += " " + e.props.unitParts.unit);
      }
      if (r(b), b = ((m = e.props.valueStore) === null || m === void 0 ? void 0 : m.string) || ((S = e.props.valueStore) === null || S === void 0 ? void 0 : S.number) || "", x = b.length - C.length + x, b.length === C.length && x > L && (x += p.inputType.includes("delete") ? -1 : 1), g.setSelectionRange(0, C.length), e.props.inExecCommand = !0, document.execCommand("insertText", void 0, b), e.props.inExecCommand = !1, _ === e.props.unitParts.decimal ? x = b.indexOf(e.props.unitParts.decimal) + 1 : C.includes(e.props.unitParts.decimal) && !b.includes(e.props.unitParts.decimal) && (x = b.length), p.inputType === "insertText" && e.props.minDecimals && (!e.value || k === 0 && D === C.length || L === -1 && e.props.minDecimals && C)) {
        let T = 0;
        T = e.props.unitParts.unit ? e.props.unitParts.unit.length + 1 : 0, x -= e.props.minDecimals, e.props.unitParts.unitLeft ? x -= T - 1 : x -= T + 1;
      }
      i(Math.max(0, x), p.inputType);
    }
  }, e.context.handlers.handleInput = (p) => {
    e.emit("dom-input-event", p), p.target instanceof HTMLInputElement && (e.props.inputText = p.target.value, r(p.target.value));
  }, e.context.handlers.handleKeyDown = (p) => {
    var u, c;
    if (p.target instanceof HTMLInputElement && (p.key === "ArrowUp" || p.key === "ArrowDown")) {
      const f = p.key === "ArrowUp" ? 1 * e.props.step : -1 * e.props.step;
      r((function(d, $) {
        var h, y, m, S;
        const g = `${d}`.split("."), _ = `${$}`.split(".");
        let C = (h = g[0]) !== null && h !== void 0 ? h : "0", k = (y = _[0]) !== null && y !== void 0 ? y : "0";
        const D = (m = g[1]) !== null && m !== void 0 ? m : "", w = (S = _[1]) !== null && S !== void 0 ? S : "", L = Math.max(D.length, w.length);
        L > 0 && (C += D.padEnd(L, "0"), k += w.padEnd(L, "0"));
        const x = BigInt(BigInt(C) + BigInt(k)).toString();
        return L > 0 ? x.slice(0, -1 * L) + "." + x.slice(-1 * L) : x;
      })((c = (u = e.props.valueStore) === null || u === void 0 ? void 0 : u.number) !== null && c !== void 0 ? c : 0, f)), n(), setTimeout(() => {
        i(o().length);
      }, 1);
    }
  });
}
const P1 = { schema: /* @__PURE__ */ S1(/* @__PURE__ */ C1(/* @__PURE__ */ L1("$label"), /* @__PURE__ */ D1(/* @__PURE__ */ Ji("prefix"), /* @__PURE__ */ A1(), /* @__PURE__ */ O1(), /* @__PURE__ */ T1(), /* @__PURE__ */ Ji("suffix"))), /* @__PURE__ */ I1("$help"), /* @__PURE__ */ E1(/* @__PURE__ */ M1("$message.value"))), type: "input", family: "text", features: [function(e) {
  var t, r, n, o, s, a;
  const i = ["unit", "decimals", "minDecimals", "displayLocale", "min", "max", "step", "valueFormat", "unitDisplay", "placeholder", "unitParts", "valueUnit", "valueDecimals"];
  e.addProps(i), (t = (o = e.props).displayLocale) !== null && t !== void 0 || (o.displayLocale = e.props.locale || "en-US"), e.props.unitDisplay = e.props.unitDisplay || "short", e.props.decimals === "false" || e.props.decimals === !1 ? e.props.decimals = 0 : e.props.decimals !== void 0 ? e.props.decimals = Number(e.props.decimals) : e.props.decimals = 2, e.props.minDecimals = e.props.minDecimals !== void 0 ? Number(e.props.minDecimals) : void 0, e.props.min !== void 0 && (e.props.min = Number(e.props.min)), e.props.max !== void 0 && (e.props.max = Number(e.props.max)), (r = (s = e.props).step) !== null && r !== void 0 || (s.step = 1), (n = (a = e.props).valueFormat) !== null && n !== void 0 || (a.valueFormat = "number"), ["string", "number"].indexOf(e.props.valueFormat) === -1 && (e.props.valueFormat = "number"), e.on("created", () => {
    e.context && (e.context.handlers.unitBlur = (l) => {
      if (!(l.target instanceof HTMLInputElement)) return;
      let p = l.target.value;
      (function(u) {
        u = u.trim();
        const c = /\d+\,\s*%?$/;
        return /\d+\.\s*%?$/.test(u) || c.test(u);
      })(p) && (p = p.replace(e.props.unitParts.decimal, ""), l.target.value = p), e.context && e.context.handlers.blur(l);
    }, Lu(e), e.context.handlers.init(), i.forEach((l) => {
      e.on(`prop:${l}`, () => {
        var p;
        (p = e?.context) === null || p === void 0 || p.handlers.init();
      });
    }));
  });
}] }, Au = /* @__PURE__ */ Ee("cr"), { outer: F1, inner: V1, wrapper: N1, label: B1, prefix: R1, suffix: H1, help: W1, messages: K1, message: j1, icon: Qi } = /* @__PURE__ */ Me(Au), Y1 = Au("input", () => ({ $el: "input", bind: "$attrs", attrs: { name: "$node.name", autocomplete: "$attrs.autocomplete || off", id: "$id", onChange: "$handlers.handleInput", onBlur: "$handlers.blur", onInput: "$handlers.handleInput", onKeydown: "$handlers.handleKeyDown", onBeforeinput: "$handlers.handleBeforeInput", readonly: "$readonly", disabled: "$disabled", placeholder: "$placeholder || $unitParts.unit", inputmode: "decimal", "data-unit": "$unit", "data-currency": "$currency", "data-display-locale": "$displayLocale", "data-value-locale": "$valueLocale", "data-decimals": "$decimals", "data-trailing": "$trailingZeros", "data-numeric-value": "$_numericValue", "data-align": "$_valueAlignAuto", "aria-required": "$state.required || undefined" } })), Z1 = { schema: /* @__PURE__ */ F1(/* @__PURE__ */ N1(/* @__PURE__ */ B1("$label"), /* @__PURE__ */ V1(/* @__PURE__ */ Qi("prefix"), /* @__PURE__ */ R1(), /* @__PURE__ */ Y1(), /* @__PURE__ */ H1(), /* @__PURE__ */ Qi("suffix"))), /* @__PURE__ */ W1("$help"), /* @__PURE__ */ K1(/* @__PURE__ */ j1("$message.value"))), type: "input", family: "text", props: ["options"], features: [function(e) {
  var t, r, n, o, s, a, i, l;
  const p = ["currency", "decimals", "maxDecimals", "minDecimals", "displayLocale", "min", "max", "step", "valueFormat", "currencyDisplay", "placeholder", "unitParts"];
  e.addProps(p), e.addProps(["inputText"]), (t = (s = e.props).displayLocale) !== null && t !== void 0 || (s.displayLocale = e.props.locale || "en-US"), (r = (a = e.props).currency) !== null && r !== void 0 || (a.currency = e.props.currency || "USD"), e.props.decimals === "false" || e.props.decimals === !1 ? e.props.decimals = 0 : e.props.decimals !== void 0 && (e.props.decimals = Number(e.props.decimals)), e.props.minDecimals = e.props.minDecimals !== void 0 ? Number(e.props.minDecimals) : void 0, e.props.min !== void 0 && (e.props.min = Number(e.props.min)), e.props.max !== void 0 && (e.props.max = Number(e.props.max)), (n = (i = e.props).step) !== null && n !== void 0 || (i.step = 1), (o = (l = e.props).valueFormat) !== null && o !== void 0 || (l.valueFormat = "number"), ["string", "number", "integer"].indexOf(e.props.valueFormat) === -1 && (e.props.valueFormat = "number"), e.on("created", () => {
    e.context && (Lu(e), e.context.handlers.init(), p.forEach((u) => {
      e.on(`prop:${u}`, () => {
        var c;
        (c = e?.context) === null || c === void 0 || c.handlers.init();
      });
    }));
  });
}] };
var U1 = /* @__PURE__ */ Object.freeze({ __proto__: null, autocomplete: dy, colorpicker: f1, currency: Z1, datepicker: _b, dropdown: k$, mask: px, rating: U0, repeater: g0, slider: Sw, taglist: jb, toggle: W$, togglebuttons: k1, transferlist: Xx, unit: P1 });
const q1 = typeof window < "u" ? setInterval : () => 0, el = /* @__PURE__ */ new WeakSet();
function z1(e, t = {}) {
  const r = e;
  try {
    let n = function(o) {
      el.has(o) && (function(a, i) {
        Fr[a] ? Fr[a].add(i) : Fr[a] = /* @__PURE__ */ new Set([i]);
      })(e, (a) => {
        o.props.definition && (o.props.definition.schema = a || [{ $el: nt(13919), children: `${nt(451228594)}${nt(32863693)}` }]), o.emit("schema"), setTimeout(() => o.destroy(), 1e3);
      });
    };
    return (function(o) {
      const s = () => {
        throw new Error(`InvalidFormKitKey ${o}`);
      };
      if (!/^fk-/i.test(o)) return s();
      const a = o.substring(3);
      if (!nv.test(a)) return s();
      const i = parseInt(a, 16).toString(), l = Number(i[0]) < 6 ? Number(i[0]) : 6, p = i.substring(l, l + (i.length - 6)), u = i.substring(0, l) + i.substring(l + p.length), c = u.slice(0, 2), f = `${u[u.length - 1]}${u[0]}`;
      Number(p) !== Math.floor(Number(u) * Number(c) / Number(f)) && s();
    })(r), n.library = (o) => {
      if (o.props.type in t) {
        const { schema: s, ...a } = t[o.props.type];
        el.add(o), o.define({ ...a, schema: s(e) });
      }
      q1(() => io.has(e) && o.emit("schema"), 4e3);
    }, n;
  } catch (n) {
    throw n instanceof Error && (function(o) {
      if (o.message === "FormKitNoKey") throw new Error("A FormKit API key is required, please visit https://formkit.com/pro");
    })(n), n;
  }
}
const G1 = z1("fk-2e7e557c8", U1), J1 = async (e) => {
  let t, r = !1;
  return {
    set: async (n) => {
      const o = document.getElementById(e.f.name("vue-root"));
      return r || (t = ju(Uh, {
        schema: n.data?.curr?.data,
        _p: e,
        _$p: n
      }), t.use(
        wh,
        Bs({
          plugins: [G1]
        })
      ), t.mount(o), r = !0), {
        r: "",
        style: "",
        evt: {}
      };
    }
  };
};
export {
  J1 as hydrator,
  J1 as index
};
