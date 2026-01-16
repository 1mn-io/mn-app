import { d as ye, E as ut, G as Se, H as be, I as lt, J as ft, K as pt, L as ht, M as dt, O as W, P as $, Q as mt, R as gt, U as L, V as ze, W as fe, X as vt, Y as Rt, Z as Et, c as yt } from "./runtime-dom.esm-bundler-DX3hrXra.js";
const At = /* @__PURE__ */ ye({
  __name: "App",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (t, n) => {
      const r = ut("router-view");
      return be(), Se(r, {
        key: t.$route.fullPath
      }, {
        default: lt(({ Component: o }) => [
          (be(), Se(ft(o), pt(ht({
            _p: e._p,
            __p: e._$p
          })), null, 16))
        ]),
        _: 1
      });
    };
  }
});
const K = typeof document < "u";
function Qe(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function _t(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Qe(e.default);
}
const N = Object.assign;
function pe(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = B(o) ? o.map(e) : e(o);
  }
  return n;
}
const ee = () => {
}, B = Array.isArray;
function Te(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
const Je = /#/g, Nt = /&/g, Ot = /\//g, Ct = /=/g, Pt = /\?/g, Ye = /\+/g, wt = /%5B/g, It = /%5D/g, Xe = /%5E/g, St = /%60/g, Ze = /%7B/g, bt = /%7C/g, $e = /%7D/g, Tt = /%20/g;
function Ae(e) {
  return e == null ? "" : encodeURI("" + e).replace(bt, "|").replace(wt, "[").replace(It, "]");
}
function xt(e) {
  return Ae(e).replace(Ze, "{").replace($e, "}").replace(Xe, "^");
}
function ge(e) {
  return Ae(e).replace(Ye, "%2B").replace(Tt, "+").replace(Je, "%23").replace(Nt, "%26").replace(St, "`").replace(Ze, "{").replace($e, "}").replace(Xe, "^");
}
function Dt(e) {
  return ge(e).replace(Ct, "%3D");
}
function Gt(e) {
  return Ae(e).replace(Je, "%23").replace(Pt, "%3F");
}
function kt(e) {
  return Gt(e).replace(Ot, "%2F");
}
function te(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const Bt = /\/$/, Lt = (e) => e.replace(Bt, "");
function he(e, t, n = "/") {
  let r, o = {}, f = "", p = "";
  const g = t.indexOf("#");
  let a = t.indexOf("?");
  return a = g >= 0 && a > g ? -1 : a, a >= 0 && (r = t.slice(0, a), f = t.slice(a, g > 0 ? g : t.length), o = e(f.slice(1))), g >= 0 && (r = r || t.slice(0, g), p = t.slice(g, t.length)), r = Ht(r ?? t, n), {
    fullPath: r + f + p,
    path: r,
    query: o,
    hash: te(p)
  };
}
function Vt(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function xe(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Mt(e, t, n) {
  const r = t.matched.length - 1, o = n.matched.length - 1;
  return r > -1 && r === o && z(t.matched[r], n.matched[o]) && et(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function z(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function et(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!Ut(e[n], t[n])) return !1;
  return !0;
}
function Ut(e, t) {
  return B(e) ? De(e, t) : B(t) ? De(t, e) : e?.valueOf() === t?.valueOf();
}
function De(e, t) {
  return B(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Ht(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
  (o === ".." || o === ".") && r.push("");
  let f = n.length - 1, p, g;
  for (p = 0; p < r.length; p++)
    if (g = r[p], g !== ".")
      if (g === "..")
        f > 1 && f--;
      else break;
  return n.slice(0, f).join("/") + "/" + r.slice(p).join("/");
}
const U = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
let ve = /* @__PURE__ */ (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), de = /* @__PURE__ */ (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
function jt(e) {
  if (!e) if (K) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Lt(e);
}
const qt = /^[^#]+#/;
function Ft(e, t) {
  return e.replace(qt, "#") + t;
}
function Kt(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  };
}
const oe = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Wt(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#"), o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o)
      return;
    t = Kt(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Ge(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Re = /* @__PURE__ */ new Map();
function zt(e, t) {
  Re.set(e, t);
}
function Qt(e) {
  const t = Re.get(e);
  return Re.delete(e), t;
}
function Jt(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function tt(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let I = /* @__PURE__ */ (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const nt = /* @__PURE__ */ Symbol("");
I.MATCHER_NOT_FOUND + "", I.NAVIGATION_GUARD_REDIRECT + "", I.NAVIGATION_ABORTED + "", I.NAVIGATION_CANCELLED + "", I.NAVIGATION_DUPLICATED + "";
function Q(e, t) {
  return N(/* @__PURE__ */ new Error(), {
    type: e,
    [nt]: !0
  }, t);
}
function V(e, t) {
  return e instanceof Error && nt in e && (t == null || !!(e.type & t));
}
const Yt = [
  "params",
  "query",
  "hash"
];
function Xt(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of Yt) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function Zt(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const o = n[r].replace(Ye, " "), f = o.indexOf("="), p = te(f < 0 ? o : o.slice(0, f)), g = f < 0 ? null : te(o.slice(f + 1));
    if (p in t) {
      let a = t[p];
      B(a) || (a = t[p] = [a]), a.push(g);
    } else t[p] = g;
  }
  return t;
}
function ke(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = Dt(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (B(r) ? r.map((o) => o && ge(o)) : [r && ge(r)]).forEach((o) => {
      o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o));
    });
  }
  return t;
}
function $t(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = B(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
  }
  return t;
}
const en = /* @__PURE__ */ Symbol(""), Be = /* @__PURE__ */ Symbol(""), _e = /* @__PURE__ */ Symbol(""), Ne = /* @__PURE__ */ Symbol(""), Ee = /* @__PURE__ */ Symbol("");
function Z() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const o = e.indexOf(r);
      o > -1 && e.splice(o, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function H(e, t, n, r, o, f = (p) => p()) {
  const p = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () => new Promise((g, a) => {
    const u = (c) => {
      c === !1 ? a(Q(I.NAVIGATION_ABORTED, {
        from: n,
        to: t
      })) : c instanceof Error ? a(c) : Jt(c) ? a(Q(I.NAVIGATION_GUARD_REDIRECT, {
        from: t,
        to: c
      })) : (p && r.enterCallbacks[o] === p && typeof c == "function" && p.push(c), g());
    }, h = f(() => e.call(r && r.instances[o], t, n, u));
    let i = Promise.resolve(h);
    e.length < 3 && (i = i.then(u)), i.catch((c) => a(c));
  });
}
function me(e, t, n, r, o = (f) => f()) {
  const f = [];
  for (const p of e)
    for (const g in p.components) {
      let a = p.components[g];
      if (!(t !== "beforeRouteEnter" && !p.instances[g]))
        if (Qe(a)) {
          const u = (a.__vccOpts || a)[t];
          u && f.push(H(u, n, r, p, g, o));
        } else {
          let u = a();
          f.push(() => u.then((h) => {
            if (!h) throw new Error(`Couldn't resolve component "${g}" at "${p.path}"`);
            const i = _t(h) ? h.default : h;
            p.mods[g] = h, p.components[g] = i;
            const c = (i.__vccOpts || i)[t];
            return c && H(c, n, r, p, g, o)();
          }));
        }
    }
  return f;
}
function tn(e, t) {
  const n = [], r = [], o = [], f = Math.max(t.matched.length, e.matched.length);
  for (let p = 0; p < f; p++) {
    const g = t.matched[p];
    g && (e.matched.find((u) => z(u, g)) ? r.push(g) : n.push(g));
    const a = e.matched[p];
    a && (t.matched.find((u) => z(u, a)) || o.push(a));
  }
  return [
    n,
    r,
    o
  ];
}
let nn = () => location.protocol + "//" + location.host;
function rt(e, t) {
  const { pathname: n, search: r, hash: o } = t, f = e.indexOf("#");
  if (f > -1) {
    let p = o.includes(e.slice(f)) ? e.slice(f).length : 1, g = o.slice(p);
    return g[0] !== "/" && (g = "/" + g), xe(g, "");
  }
  return xe(n, e) + r + o;
}
function rn(e, t, n, r) {
  let o = [], f = [], p = null;
  const g = ({ state: c }) => {
    const l = rt(e, location), _ = n.value, O = t.value;
    let P = 0;
    if (c) {
      if (n.value = l, t.value = c, p && p === _) {
        p = null;
        return;
      }
      P = O ? c.position - O.position : 0;
    } else r(l);
    o.forEach((w) => {
      w(n.value, _, {
        delta: P,
        type: ve.pop,
        direction: P ? P > 0 ? de.forward : de.back : de.unknown
      });
    });
  };
  function a() {
    p = n.value;
  }
  function u(c) {
    o.push(c);
    const l = () => {
      const _ = o.indexOf(c);
      _ > -1 && o.splice(_, 1);
    };
    return f.push(l), l;
  }
  function h() {
    if (document.visibilityState === "hidden") {
      const { history: c } = window;
      if (!c.state) return;
      c.replaceState(N({}, c.state, { scroll: oe() }), "");
    }
  }
  function i() {
    for (const c of f) c();
    f = [], window.removeEventListener("popstate", g), window.removeEventListener("pagehide", h), document.removeEventListener("visibilitychange", h);
  }
  return window.addEventListener("popstate", g), window.addEventListener("pagehide", h), document.addEventListener("visibilitychange", h), {
    pauseListeners: a,
    listen: u,
    destroy: i
  };
}
function Le(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? oe() : null
  };
}
function on(e) {
  const { history: t, location: n } = window, r = { value: rt(e, n) }, o = { value: t.state };
  o.value || f(r.value, {
    back: null,
    current: r.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function f(a, u, h) {
    const i = e.indexOf("#"), c = i > -1 ? (n.host && document.querySelector("base") ? e : e.slice(i)) + a : nn() + e + a;
    try {
      t[h ? "replaceState" : "pushState"](u, "", c), o.value = u;
    } catch (l) {
      console.error(l), n[h ? "replace" : "assign"](c);
    }
  }
  function p(a, u) {
    f(a, N({}, t.state, Le(o.value.back, a, o.value.forward, !0), u, { position: o.value.position }), !0), r.value = a;
  }
  function g(a, u) {
    const h = N({}, o.value, t.state, {
      forward: a,
      scroll: oe()
    });
    f(h.current, h, !0), f(a, N({}, Le(r.value, a, null), { position: h.position + 1 }, u), !1), r.value = a;
  }
  return {
    location: r,
    state: o,
    push: g,
    replace: p
  };
}
function sn(e) {
  e = jt(e);
  const t = on(e), n = rn(e, t.state, t.location, t.replace);
  function r(f, p = !0) {
    p || n.pauseListeners(), history.go(f);
  }
  const o = N({
    location: "",
    base: e,
    go: r,
    createHref: Ft.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
let q = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var T = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(T || {});
const an = {
  type: q.Static,
  value: ""
}, cn = /[a-zA-Z0-9_]/;
function un(e) {
  if (!e) return [[]];
  if (e === "/") return [[an]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(l) {
    throw new Error(`ERR (${n})/"${u}": ${l}`);
  }
  let n = T.Static, r = n;
  const o = [];
  let f;
  function p() {
    f && o.push(f), f = [];
  }
  let g = 0, a, u = "", h = "";
  function i() {
    u && (n === T.Static ? f.push({
      type: q.Static,
      value: u
    }) : n === T.Param || n === T.ParamRegExp || n === T.ParamRegExpEnd ? (f.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), f.push({
      type: q.Param,
      value: u,
      regexp: h,
      repeatable: a === "*" || a === "+",
      optional: a === "*" || a === "?"
    })) : t("Invalid state to consume buffer"), u = "");
  }
  function c() {
    u += a;
  }
  for (; g < e.length; ) {
    if (a = e[g++], a === "\\" && n !== T.ParamRegExp) {
      r = n, n = T.EscapeNext;
      continue;
    }
    switch (n) {
      case T.Static:
        a === "/" ? (u && i(), p()) : a === ":" ? (i(), n = T.Param) : c();
        break;
      case T.EscapeNext:
        c(), n = r;
        break;
      case T.Param:
        a === "(" ? n = T.ParamRegExp : cn.test(a) ? c() : (i(), n = T.Static, a !== "*" && a !== "?" && a !== "+" && g--);
        break;
      case T.ParamRegExp:
        a === ")" ? h[h.length - 1] == "\\" ? h = h.slice(0, -1) + a : n = T.ParamRegExpEnd : h += a;
        break;
      case T.ParamRegExpEnd:
        i(), n = T.Static, a !== "*" && a !== "?" && a !== "+" && g--, h = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === T.ParamRegExp && t(`Unfinished custom RegExp for param "${u}"`), i(), p(), o;
}
const Ve = "[^/]+?", ln = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
};
var x = /* @__PURE__ */ (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(x || {});
const fn = /[.+*?^${}()[\]/\\]/g;
function pn(e, t) {
  const n = N({}, ln, t), r = [];
  let o = n.start ? "^" : "";
  const f = [];
  for (const u of e) {
    const h = u.length ? [] : [x.Root];
    n.strict && !u.length && (o += "/");
    for (let i = 0; i < u.length; i++) {
      const c = u[i];
      let l = x.Segment + (n.sensitive ? x.BonusCaseSensitive : 0);
      if (c.type === q.Static)
        i || (o += "/"), o += c.value.replace(fn, "\\$&"), l += x.Static;
      else if (c.type === q.Param) {
        const { value: _, repeatable: O, optional: P, regexp: w } = c;
        f.push({
          name: _,
          repeatable: O,
          optional: P
        });
        const A = w || Ve;
        if (A !== Ve) {
          l += x.BonusCustomRegExp;
          try {
            `${A}`;
          } catch (k) {
            throw new Error(`Invalid custom RegExp for param "${_}" (${A}): ` + k.message);
          }
        }
        let C = O ? `((?:${A})(?:/(?:${A}))*)` : `(${A})`;
        i || (C = P && u.length < 2 ? `(?:/${C})` : "/" + C), P && (C += "?"), o += C, l += x.Dynamic, P && (l += x.BonusOptional), O && (l += x.BonusRepeatable), A === ".*" && (l += x.BonusWildcard);
      }
      h.push(l);
    }
    r.push(h);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += x.BonusStrict;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
  const p = new RegExp(o, n.sensitive ? "" : "i");
  function g(u) {
    const h = u.match(p), i = {};
    if (!h) return null;
    for (let c = 1; c < h.length; c++) {
      const l = h[c] || "", _ = f[c - 1];
      i[_.name] = l && _.repeatable ? l.split("/") : l;
    }
    return i;
  }
  function a(u) {
    let h = "", i = !1;
    for (const c of e) {
      (!i || !h.endsWith("/")) && (h += "/"), i = !1;
      for (const l of c) if (l.type === q.Static) h += l.value;
      else if (l.type === q.Param) {
        const { value: _, repeatable: O, optional: P } = l, w = _ in u ? u[_] : "";
        if (B(w) && !O) throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
        const A = B(w) ? w.join("/") : w;
        if (!A) if (P)
          c.length < 2 && (h.endsWith("/") ? h = h.slice(0, -1) : i = !0);
        else throw new Error(`Missing required param "${_}"`);
        h += A;
      }
    }
    return h || "/";
  }
  return {
    re: p,
    score: r,
    keys: f,
    parse: g,
    stringify: a
  };
}
function hn(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === x.Static + x.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === x.Static + x.Segment ? 1 : -1 : 0;
}
function ot(e, t) {
  let n = 0;
  const r = e.score, o = t.score;
  for (; n < r.length && n < o.length; ) {
    const f = hn(r[n], o[n]);
    if (f) return f;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (Me(r)) return 1;
    if (Me(o)) return -1;
  }
  return o.length - r.length;
}
function Me(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const dn = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function mn(e, t, n) {
  const r = pn(un(e.path), n), o = N(r, {
    record: e,
    parent: t,
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function gn(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = Te(dn, t);
  function o(i) {
    return r.get(i);
  }
  function f(i, c, l) {
    const _ = !l, O = He(i);
    O.aliasOf = l && l.record;
    const P = Te(t, i), w = [O];
    if ("alias" in i) {
      const k = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const j of k) w.push(He(N({}, O, {
        components: l ? l.record.components : O.components,
        path: j,
        aliasOf: l ? l.record : O
      })));
    }
    let A, C;
    for (const k of w) {
      const { path: j } = k;
      if (c && j[0] !== "/") {
        const M = c.record.path, G = M[M.length - 1] === "/" ? "" : "/";
        k.path = c.record.path + (j && G + j);
      }
      if (A = mn(k, c, P), l ? l.alias.push(A) : (C = C || A, C !== A && C.alias.push(A), _ && i.name && !je(A) && p(i.name)), st(A) && a(A), O.children) {
        const M = O.children;
        for (let G = 0; G < M.length; G++) f(M[G], A, l && l.children[G]);
      }
      l = l || A;
    }
    return C ? () => {
      p(C);
    } : ee;
  }
  function p(i) {
    if (tt(i)) {
      const c = r.get(i);
      c && (r.delete(i), n.splice(n.indexOf(c), 1), c.children.forEach(p), c.alias.forEach(p));
    } else {
      const c = n.indexOf(i);
      c > -1 && (n.splice(c, 1), i.record.name && r.delete(i.record.name), i.children.forEach(p), i.alias.forEach(p));
    }
  }
  function g() {
    return n;
  }
  function a(i) {
    const c = En(i, n);
    n.splice(c, 0, i), i.record.name && !je(i) && r.set(i.record.name, i);
  }
  function u(i, c) {
    let l, _ = {}, O, P;
    if ("name" in i && i.name) {
      if (l = r.get(i.name), !l) throw Q(I.MATCHER_NOT_FOUND, { location: i });
      P = l.record.name, _ = N(Ue(c.params, l.keys.filter((C) => !C.optional).concat(l.parent ? l.parent.keys.filter((C) => C.optional) : []).map((C) => C.name)), i.params && Ue(i.params, l.keys.map((C) => C.name))), O = l.stringify(_);
    } else if (i.path != null)
      O = i.path, l = n.find((C) => C.re.test(O)), l && (_ = l.parse(O), P = l.record.name);
    else {
      if (l = c.name ? r.get(c.name) : n.find((C) => C.re.test(c.path)), !l) throw Q(I.MATCHER_NOT_FOUND, {
        location: i,
        currentLocation: c
      });
      P = l.record.name, _ = N({}, c.params, i.params), O = l.stringify(_);
    }
    const w = [];
    let A = l;
    for (; A; )
      w.unshift(A.record), A = A.parent;
    return {
      name: P,
      path: O,
      params: _,
      matched: w,
      meta: Rn(w)
    };
  }
  e.forEach((i) => f(i));
  function h() {
    n.length = 0, r.clear();
  }
  return {
    addRoute: f,
    resolve: u,
    removeRoute: p,
    clearRoutes: h,
    getRoutes: g,
    getRecordMatcher: o
  };
}
function Ue(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function He(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: vn(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function vn(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function je(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Rn(e) {
  return e.reduce((t, n) => N(t, n.meta), {});
}
function En(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const f = n + r >> 1;
    ot(e, t[f]) < 0 ? r = f : n = f + 1;
  }
  const o = yn(e);
  return o && (r = t.lastIndexOf(o, r - 1)), r;
}
function yn(e) {
  let t = e;
  for (; t = t.parent; ) if (st(t) && ot(e, t) === 0) return t;
}
function st({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function qe(e) {
  const t = W(_e), n = W(Ne), r = L(() => {
    const a = $(e.to);
    return t.resolve(a);
  }), o = L(() => {
    const { matched: a } = r.value, { length: u } = a, h = a[u - 1], i = n.matched;
    if (!h || !i.length) return -1;
    const c = i.findIndex(z.bind(null, h));
    if (c > -1) return c;
    const l = Fe(a[u - 2]);
    return u > 1 && Fe(h) === l && i[i.length - 1].path !== l ? i.findIndex(z.bind(null, a[u - 2])) : c;
  }), f = L(() => o.value > -1 && Cn(n.params, r.value.params)), p = L(() => o.value > -1 && o.value === n.matched.length - 1 && et(n.params, r.value.params));
  function g(a = {}) {
    if (On(a)) {
      const u = t[$(e.replace) ? "replace" : "push"]($(e.to)).catch(ee);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: L(() => r.value.href),
    isActive: f,
    isExactActive: p,
    navigate: g
  };
}
function An(e) {
  return e.length === 1 ? e[0] : e;
}
const _n = /* @__PURE__ */ ye({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink: qe,
  setup(e, { slots: t }) {
    const n = gt(qe(e)), { options: r } = W(_e), o = L(() => ({
      [Ke(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      [Ke(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const f = t.default && An(t.default(n));
      return e.custom ? f : ze("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: o.value
      }, f);
    };
  }
}), Nn = _n;
function On(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Cn(e, t) {
  for (const n in t) {
    const r = t[n], o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (!B(o) || o.length !== r.length || r.some((f, p) => f.valueOf() !== o[p].valueOf())) return !1;
  }
  return !0;
}
function Fe(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Ke = (e, t, n) => e ?? t ?? n, Pn = /* @__PURE__ */ ye({
  name: "RouterView",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    const r = W(Ee), o = L(() => e.route || r.value), f = W(Be, 0), p = L(() => {
      let u = $(f);
      const { matched: h } = o.value;
      let i;
      for (; (i = h[u]) && !i.components; ) u++;
      return u;
    }), g = L(() => o.value.matched[p.value]);
    fe(Be, L(() => p.value + 1)), fe(en, g), fe(Ee, o);
    const a = vt();
    return Rt(() => [
      a.value,
      g.value,
      e.name
    ], ([u, h, i], [c, l, _]) => {
      h && (h.instances[i] = u, l && l !== h && u && u === c && (h.leaveGuards.size || (h.leaveGuards = l.leaveGuards), h.updateGuards.size || (h.updateGuards = l.updateGuards))), u && h && (!l || !z(h, l) || !c) && (h.enterCallbacks[i] || []).forEach((O) => O(u));
    }, { flush: "post" }), () => {
      const u = o.value, h = e.name, i = g.value, c = i && i.components[h];
      if (!c) return We(n.default, {
        Component: c,
        route: u
      });
      const l = i.props[h], _ = l ? l === !0 ? u.params : typeof l == "function" ? l(u) : l : null, P = ze(c, N({}, _, t, {
        onVnodeUnmounted: (w) => {
          w.component.isUnmounted && (i.instances[h] = null);
        },
        ref: a
      }));
      return We(n.default, {
        Component: P,
        route: u
      }) || P;
    };
  }
});
function We(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const wn = Pn;
function In(e) {
  const t = gn(e.routes, e), n = e.parseQuery || Zt, r = e.stringifyQuery || ke, o = e.history, f = Z(), p = Z(), g = Z(), a = dt(U);
  let u = U;
  K && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const h = pe.bind(null, (s) => "" + s), i = pe.bind(null, kt), c = pe.bind(null, te);
  function l(s, m) {
    let d, v;
    return tt(s) ? (d = t.getRecordMatcher(s), v = m) : v = s, t.addRoute(v, d);
  }
  function _(s) {
    const m = t.getRecordMatcher(s);
    m && t.removeRoute(m);
  }
  function O() {
    return t.getRoutes().map((s) => s.record);
  }
  function P(s) {
    return !!t.getRecordMatcher(s);
  }
  function w(s, m) {
    if (m = N({}, m || a.value), typeof s == "string") {
      const R = he(n, s, m.path), b = t.resolve({ path: R.path }, m), X = o.createHref(R.fullPath);
      return N(R, b, {
        params: c(b.params),
        hash: te(R.hash),
        redirectedFrom: void 0,
        href: X
      });
    }
    let d;
    if (s.path != null)
      d = N({}, s, { path: he(n, s.path, m.path).path });
    else {
      const R = N({}, s.params);
      for (const b in R) R[b] == null && delete R[b];
      d = N({}, s, { params: i(R) }), m.params = i(m.params);
    }
    const v = t.resolve(d, m), y = s.hash || "";
    v.params = h(c(v.params));
    const S = Vt(r, N({}, s, {
      hash: xt(y),
      path: v.path
    })), E = o.createHref(S);
    return N({
      fullPath: S,
      hash: y,
      query: r === ke ? $t(s.query) : s.query || {}
    }, v, {
      redirectedFrom: void 0,
      href: E
    });
  }
  function A(s) {
    return typeof s == "string" ? he(n, s, a.value.path) : N({}, s);
  }
  function C(s, m) {
    if (u !== s) return Q(I.NAVIGATION_CANCELLED, {
      from: m,
      to: s
    });
  }
  function k(s) {
    return G(s);
  }
  function j(s) {
    return k(N(A(s), { replace: !0 }));
  }
  function M(s, m) {
    const d = s.matched[s.matched.length - 1];
    if (d && d.redirect) {
      const { redirect: v } = d;
      let y = typeof v == "function" ? v(s, m) : v;
      return typeof y == "string" && (y = y.includes("?") || y.includes("#") ? y = A(y) : { path: y }, y.params = {}), N({
        query: s.query,
        hash: s.hash,
        params: y.path != null ? {} : s.params
      }, y);
    }
  }
  function G(s, m) {
    const d = u = w(s), v = a.value, y = s.state, S = s.force, E = s.replace === !0, R = M(d, v);
    if (R) return G(N(A(R), {
      state: typeof R == "object" ? N({}, y, R.state) : y,
      force: S,
      replace: E
    }), m || d);
    const b = d;
    b.redirectedFrom = m;
    let X;
    return !S && Mt(r, v, d) && (X = Q(I.NAVIGATION_DUPLICATED, {
      to: b,
      from: v
    }), Ie(v, v, !0, !1)), (X ? Promise.resolve(X) : Oe(b, v)).catch((D) => V(D) ? V(D, I.NAVIGATION_GUARD_REDIRECT) ? D : ce(D) : ae(D, b, v)).then((D) => {
      if (D) {
        if (V(D, I.NAVIGATION_GUARD_REDIRECT))
          return G(N({ replace: E }, A(D.to), {
            state: typeof D.to == "object" ? N({}, y, D.to.state) : y,
            force: S
          }), m || b);
      } else D = Pe(b, v, !0, E, y);
      return Ce(b, v, D), D;
    });
  }
  function it(s, m) {
    const d = C(s, m);
    return d ? Promise.reject(d) : Promise.resolve();
  }
  function se(s) {
    const m = re.values().next().value;
    return m && typeof m.runWithContext == "function" ? m.runWithContext(s) : s();
  }
  function Oe(s, m) {
    let d;
    const [v, y, S] = tn(s, m);
    d = me(v.reverse(), "beforeRouteLeave", s, m);
    for (const R of v) R.leaveGuards.forEach((b) => {
      d.push(H(b, s, m));
    });
    const E = it.bind(null, s, m);
    return d.push(E), F(d).then(() => {
      d = [];
      for (const R of f.list()) d.push(H(R, s, m));
      return d.push(E), F(d);
    }).then(() => {
      d = me(y, "beforeRouteUpdate", s, m);
      for (const R of y) R.updateGuards.forEach((b) => {
        d.push(H(b, s, m));
      });
      return d.push(E), F(d);
    }).then(() => {
      d = [];
      for (const R of S) if (R.beforeEnter) if (B(R.beforeEnter)) for (const b of R.beforeEnter) d.push(H(b, s, m));
      else d.push(H(R.beforeEnter, s, m));
      return d.push(E), F(d);
    }).then(() => (s.matched.forEach((R) => R.enterCallbacks = {}), d = me(S, "beforeRouteEnter", s, m, se), d.push(E), F(d))).then(() => {
      d = [];
      for (const R of p.list()) d.push(H(R, s, m));
      return d.push(E), F(d);
    }).catch((R) => V(R, I.NAVIGATION_CANCELLED) ? R : Promise.reject(R));
  }
  function Ce(s, m, d) {
    g.list().forEach((v) => se(() => v(s, m, d)));
  }
  function Pe(s, m, d, v, y) {
    const S = C(s, m);
    if (S) return S;
    const E = m === U, R = K ? history.state : {};
    d && (v || E ? o.replace(s.fullPath, N({ scroll: E && R && R.scroll }, y)) : o.push(s.fullPath, y)), a.value = s, Ie(s, m, d, E), ce();
  }
  let J;
  function at() {
    J || (J = o.listen((s, m, d) => {
      if (!Y.listening) return;
      const v = w(s), y = M(v, Y.currentRoute.value);
      if (y) {
        G(N(y, {
          replace: !0,
          force: !0
        }), v).catch(ee);
        return;
      }
      u = v;
      const S = a.value;
      K && zt(Ge(S.fullPath, d.delta), oe()), Oe(v, S).catch((E) => V(E, I.NAVIGATION_ABORTED | I.NAVIGATION_CANCELLED) ? E : V(E, I.NAVIGATION_GUARD_REDIRECT) ? (G(N(A(E.to), { force: !0 }), v).then((R) => {
        V(R, I.NAVIGATION_ABORTED | I.NAVIGATION_DUPLICATED) && !d.delta && d.type === ve.pop && o.go(-1, !1);
      }).catch(ee), Promise.reject()) : (d.delta && o.go(-d.delta, !1), ae(E, v, S))).then((E) => {
        E = E || Pe(v, S, !1), E && (d.delta && !V(E, I.NAVIGATION_CANCELLED) ? o.go(-d.delta, !1) : d.type === ve.pop && V(E, I.NAVIGATION_ABORTED | I.NAVIGATION_DUPLICATED) && o.go(-1, !1)), Ce(v, S, E);
      }).catch(ee);
    }));
  }
  let ie = Z(), we = Z(), ne;
  function ae(s, m, d) {
    ce(s);
    const v = we.list();
    return v.length ? v.forEach((y) => y(s, m, d)) : console.error(s), Promise.reject(s);
  }
  function ct() {
    return ne && a.value !== U ? Promise.resolve() : new Promise((s, m) => {
      ie.add([s, m]);
    });
  }
  function ce(s) {
    return ne || (ne = !s, at(), ie.list().forEach(([m, d]) => s ? d(s) : m()), ie.reset()), s;
  }
  function Ie(s, m, d, v) {
    const { scrollBehavior: y } = e;
    if (!K || !y) return Promise.resolve();
    const S = !d && Qt(Ge(s.fullPath, 0)) || (v || !d) && history.state && history.state.scroll || null;
    return Et().then(() => y(s, m, S)).then((E) => E && Wt(E)).catch((E) => ae(E, s, m));
  }
  const ue = (s) => o.go(s);
  let le;
  const re = /* @__PURE__ */ new Set(), Y = {
    currentRoute: a,
    listening: !0,
    addRoute: l,
    removeRoute: _,
    clearRoutes: t.clearRoutes,
    hasRoute: P,
    getRoutes: O,
    resolve: w,
    options: e,
    push: k,
    replace: j,
    go: ue,
    back: () => ue(-1),
    forward: () => ue(1),
    beforeEach: f.add,
    beforeResolve: p.add,
    afterEach: g.add,
    onError: we.add,
    isReady: ct,
    install(s) {
      s.component("RouterLink", Nn), s.component("RouterView", wn), s.config.globalProperties.$router = Y, Object.defineProperty(s.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => $(a)
      }), K && !le && a.value === U && (le = !0, k(o.location).catch((v) => {
      }));
      const m = {};
      for (const v in U) Object.defineProperty(m, v, {
        get: () => a.value[v],
        enumerable: !0
      });
      s.provide(_e, Y), s.provide(Ne, mt(m)), s.provide(Ee, a);
      const d = s.unmount;
      re.add(s), s.unmount = function() {
        re.delete(s), re.size < 1 && (u = U, J && J(), J = null, a.value = U, le = !1, ne = !1), d();
      };
    }
  };
  function F(s) {
    return s.reduce((m, d) => m.then(() => se(d)), Promise.resolve());
  }
  return Y;
}
function xn(e) {
  return W(Ne);
}
const Sn = async (e) => {
  const o = { .../* @__PURE__ */ Object.assign({ "../views/ContentEngine.vue": () => import("./ContentEngine-olk2qAzc.js"), "../views/pages/Empty.vue": () => import("./Empty-fX0IOH97.js"), "../views/pages/NotFound.vue": () => import("./NotFound-COKg_g3m.js") }), .../* @__PURE__ */ Object.assign({ "../layout/AppLayout.vue": () => import("./AppLayout-DHy_RXiL.js") }), .../* @__PURE__ */ Object.assign({ "../components/ContentEngine.vue": () => import("./ContentEngine-BACiacuw.js") }) };
  function f(u) {
    return u.map((h) => {
      const i = { ...h };
      if (i.component && typeof i.component == "string") {
        const c = o[i.component];
        c ? i.component = c : console.warn(`Component not found for path: ${i.component}`);
      }
      return i.children && i.children.length && (i.children = f(i.children)), i;
    });
  }
  const p = JSON.parse(JSON.stringify(e._$p.data.curr.data.routes)), g = f(p);
  return In({
    history: sn(),
    routes: (
      /*[
            {
                  path: '/',
                  name: 'home',
                  component: () => import('@/views/pages/NotFound.vue'),
                  meta:{
                    f:""
                  }
      
              },
          ]*/
      //_routes,
      g
    )
  });
}, bn = async (e) => {
  const t = yt(At, e), n = await Sn(e);
  t.use(n), t.mount("#app-3e1bsf");
}, Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  index: bn
}, Symbol.toStringTag, { value: "Module" }));
export {
  Dn as m,
  xn as u
};
