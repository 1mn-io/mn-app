import { d as Ot, s as or, u as B, a as nr, r as ir, i as Bt, c as F, h as zt, p as Zt, b as mt, w as sr, n as lr, e as nt, f as le, o as k, g as dr, j as cr, k as E, l as e, m as et, q as V, t as Ft, v as gt, F as O, x as T, T as pe, y as X, z as C, A as Rt, B as ue, C as pr, D as ur, E as $e } from "./style-inject.es-Bej9qIY3.js";
const hr = /* @__PURE__ */ Ot({
  __name: "index",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    return (async () => (t._p.my.emitter = t._p.f.new_emitter(), t._p.my.emitter.on("msg", async (r) => {
      console.log("_p.my.emitter.on", r);
    }), await t._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: t._p,
      _pp: t._pp
    }), t._p.f.listen("msg", async (r) => {
      console.log("_p.f.listen", r);
    }), setTimeout(async () => {
      await t._p.f.call("msg", {
        type: "on:change",
        _p: t._p,
        _pp: t._pp
      });
    }, 500)))(), (r, a) => null;
  }
});
const vt = typeof document < "u";
function Fe(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
}
function gr(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module" || t.default && Fe(t.default);
}
const S = Object.assign;
function Wt(t, r) {
  const a = {};
  for (const o in r) {
    const n = r[o];
    a[o] = J(n) ? n.map(t) : t(n);
  }
  return a;
}
const Pt = () => {
}, J = Array.isArray;
function he(t, r) {
  const a = {};
  for (const o in t) a[o] = o in r ? r[o] : t[o];
  return a;
}
let H = /* @__PURE__ */ (function(t) {
  return t[t.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", t[t.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", t[t.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", t[t.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", t[t.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", t;
})({});
const Ue = /* @__PURE__ */ Symbol("");
H.MATCHER_NOT_FOUND + "", H.NAVIGATION_GUARD_REDIRECT + "", H.NAVIGATION_ABORTED + "", H.NAVIGATION_CANCELLED + "", H.NAVIGATION_DUPLICATED + "";
function xt(t, r) {
  return S(/* @__PURE__ */ new Error(), {
    type: t,
    [Ue]: !0
  }, r);
}
function rt(t, r) {
  return t instanceof Error && Ue in t && (r == null || !!(t.type & r));
}
const fr = [
  "params",
  "query",
  "hash"
];
function mr(t) {
  if (typeof t == "string") return t;
  if (t.path != null) return t.path;
  const r = {};
  for (const a of fr) a in t && (r[a] = t[a]);
  return JSON.stringify(r, null, 2);
}
const vr = /* @__PURE__ */ Symbol(""), ge = /* @__PURE__ */ Symbol(""), de = /* @__PURE__ */ Symbol(""), qe = /* @__PURE__ */ Symbol(""), oe = /* @__PURE__ */ Symbol("");
const Ze = /#/g, xr = /&/g, br = /\//g, wr = /=/g, yr = /\?/g, We = /\+/g, kr = /%5B/g, Cr = /%5D/g, Ke = /%5E/g, _r = /%60/g, Qe = /%7B/g, Ar = /%7C/g, Ye = /%7D/g, Er = /%20/g;
function ce(t) {
  return t == null ? "" : encodeURI("" + t).replace(Ar, "|").replace(kr, "[").replace(Cr, "]");
}
function Rr(t) {
  return ce(t).replace(Qe, "{").replace(Ye, "}").replace(Ke, "^");
}
function ne(t) {
  return ce(t).replace(We, "%2B").replace(Er, "+").replace(Ze, "%23").replace(xr, "%26").replace(_r, "`").replace(Qe, "{").replace(Ye, "}").replace(Ke, "^");
}
function Lr(t) {
  return ne(t).replace(wr, "%3D");
}
function Mr(t) {
  return ce(t).replace(Ze, "%23").replace(yr, "%3F");
}
function Nr(t) {
  return Mr(t).replace(br, "%2F");
}
function Ut(t) {
  if (t == null) return null;
  try {
    return decodeURIComponent("" + t);
  } catch {
  }
  return "" + t;
}
const Ir = /\/$/, Sr = (t) => t.replace(Ir, "");
function Kt(t, r, a = "/") {
  let o, n = {}, p = "", g = "";
  const x = r.indexOf("#");
  let l = r.indexOf("?");
  return l = x >= 0 && l > x ? -1 : l, l >= 0 && (o = r.slice(0, l), p = r.slice(l, x > 0 ? x : r.length), n = t(p.slice(1))), x >= 0 && (o = o || r.slice(0, x), g = r.slice(x, r.length)), o = Or(o ?? r, a), {
    fullPath: o + p + g,
    path: o,
    query: n,
    hash: Ut(g)
  };
}
function Pr(t, r) {
  const a = r.query ? t(r.query) : "";
  return r.path + (a && "?") + a + (r.hash || "");
}
function fe(t, r) {
  return !r || !t.toLowerCase().startsWith(r.toLowerCase()) ? t : t.slice(r.length) || "/";
}
function Br(t, r, a) {
  const o = r.matched.length - 1, n = a.matched.length - 1;
  return o > -1 && o === n && bt(r.matched[o], a.matched[n]) && Xe(r.params, a.params) && t(r.query) === t(a.query) && r.hash === a.hash;
}
function bt(t, r) {
  return (t.aliasOf || t) === (r.aliasOf || r);
}
function Xe(t, r) {
  if (Object.keys(t).length !== Object.keys(r).length) return !1;
  for (var a in t) if (!zr(t[a], r[a])) return !1;
  return !0;
}
function zr(t, r) {
  return J(t) ? me(t, r) : J(r) ? me(r, t) : (t && t.valueOf()) === (r && r.valueOf());
}
function me(t, r) {
  return J(r) ? t.length === r.length && t.every((a, o) => a === r[o]) : t.length === 1 && t[0] === r;
}
function Or(t, r) {
  if (t.startsWith("/")) return t;
  if (!t) return r;
  const a = r.split("/"), o = t.split("/"), n = o[o.length - 1];
  (n === ".." || n === ".") && o.push("");
  let p = a.length - 1, g, x;
  for (g = 0; g < o.length; g++)
    if (x = o[g], x !== ".")
      if (x === "..")
        p > 1 && p--;
      else break;
  return a.slice(0, p).join("/") + "/" + o.slice(g).join("/");
}
const at = {
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
let ie = /* @__PURE__ */ (function(t) {
  return t.pop = "pop", t.push = "push", t;
})({}), Qt = /* @__PURE__ */ (function(t) {
  return t.back = "back", t.forward = "forward", t.unknown = "", t;
})({});
function Vr(t) {
  if (!t) if (vt) {
    const r = document.querySelector("base");
    t = r && r.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^/]+/, "");
  } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), Sr(t);
}
const Hr = /^[^#]+#/;
function Tr(t, r) {
  return t.replace(Hr, "#") + r;
}
function jr(t, r) {
  const a = document.documentElement.getBoundingClientRect(), o = t.getBoundingClientRect();
  return {
    behavior: r.behavior,
    left: o.left - a.left - (r.left || 0),
    top: o.top - a.top - (r.top || 0)
  };
}
const qt = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Dr(t) {
  let r;
  if ("el" in t) {
    const a = t.el, o = typeof a == "string" && a.startsWith("#"), n = typeof a == "string" ? o ? document.getElementById(a.slice(1)) : document.querySelector(a) : a;
    if (!n)
      return;
    r = jr(n, t);
  } else r = t;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(r) : window.scrollTo(r.left != null ? r.left : window.scrollX, r.top != null ? r.top : window.scrollY);
}
function ve(t, r) {
  return (history.state ? history.state.position - r : -1) + t;
}
const se = /* @__PURE__ */ new Map();
function Gr(t, r) {
  se.set(t, r);
}
function $r(t) {
  const r = se.get(t);
  return se.delete(t), r;
}
function Fr(t) {
  return typeof t == "string" || t && typeof t == "object";
}
function Je(t) {
  return typeof t == "string" || typeof t == "symbol";
}
function Ur(t) {
  const r = {};
  if (t === "" || t === "?") return r;
  const a = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let o = 0; o < a.length; ++o) {
    const n = a[o].replace(We, " "), p = n.indexOf("="), g = Ut(p < 0 ? n : n.slice(0, p)), x = p < 0 ? null : Ut(n.slice(p + 1));
    if (g in r) {
      let l = r[g];
      J(l) || (l = r[g] = [l]), l.push(x);
    } else r[g] = x;
  }
  return r;
}
function xe(t) {
  let r = "";
  for (let a in t) {
    const o = t[a];
    if (a = Lr(a), o == null) {
      o !== void 0 && (r += (r.length ? "&" : "") + a);
      continue;
    }
    (J(o) ? o.map((n) => n && ne(n)) : [o && ne(o)]).forEach((n) => {
      n !== void 0 && (r += (r.length ? "&" : "") + a, n != null && (r += "=" + n));
    });
  }
  return r;
}
function qr(t) {
  const r = {};
  for (const a in t) {
    const o = t[a];
    o !== void 0 && (r[a] = J(o) ? o.map((n) => n == null ? null : "" + n) : o == null ? o : "" + o);
  }
  return r;
}
function Lt() {
  let t = [];
  function r(o) {
    return t.push(o), () => {
      const n = t.indexOf(o);
      n > -1 && t.splice(n, 1);
    };
  }
  function a() {
    t = [];
  }
  return {
    add: r,
    list: () => t.slice(),
    reset: a
  };
}
function it(t, r, a, o, n, p = (g) => g()) {
  const g = o && (o.enterCallbacks[n] = o.enterCallbacks[n] || []);
  return () => new Promise((x, l) => {
    const h = (u) => {
      u === !1 ? l(xt(H.NAVIGATION_ABORTED, {
        from: a,
        to: r
      })) : u instanceof Error ? l(u) : Fr(u) ? l(xt(H.NAVIGATION_GUARD_REDIRECT, {
        from: r,
        to: u
      })) : (g && o.enterCallbacks[n] === g && typeof u == "function" && g.push(u), x());
    }, m = p(() => t.call(o && o.instances[n], r, a, h));
    let c = Promise.resolve(m);
    t.length < 3 && (c = c.then(h)), c.catch((u) => l(u));
  });
}
function Yt(t, r, a, o, n = (p) => p()) {
  const p = [];
  for (const g of t)
    for (const x in g.components) {
      let l = g.components[x];
      if (!(r !== "beforeRouteEnter" && !g.instances[x]))
        if (Fe(l)) {
          const h = (l.__vccOpts || l)[r];
          h && p.push(it(h, a, o, g, x, n));
        } else {
          let h = l();
          p.push(() => h.then((m) => {
            if (!m) throw new Error(`Couldn't resolve component "${x}" at "${g.path}"`);
            const c = gr(m) ? m.default : m;
            g.mods[x] = m, g.components[x] = c;
            const u = (c.__vccOpts || c)[r];
            return u && it(u, a, o, g, x, n)();
          }));
        }
    }
  return p;
}
function Zr(t, r) {
  const a = [], o = [], n = [], p = Math.max(r.matched.length, t.matched.length);
  for (let g = 0; g < p; g++) {
    const x = r.matched[g];
    x && (t.matched.find((h) => bt(h, x)) ? o.push(x) : a.push(x));
    const l = t.matched[g];
    l && (r.matched.find((h) => bt(h, l)) || n.push(l));
  }
  return [
    a,
    o,
    n
  ];
}
let Wr = () => location.protocol + "//" + location.host;
function tr(t, r) {
  const { pathname: a, search: o, hash: n } = r, p = t.indexOf("#");
  if (p > -1) {
    let g = n.includes(t.slice(p)) ? t.slice(p).length : 1, x = n.slice(g);
    return x[0] !== "/" && (x = "/" + x), fe(x, "");
  }
  return fe(a, t) + o + n;
}
function Kr(t, r, a, o) {
  let n = [], p = [], g = null;
  const x = ({ state: u }) => {
    const f = tr(t, location), R = a.value, I = r.value;
    let z = 0;
    if (u) {
      if (a.value = f, r.value = u, g && g === R) {
        g = null;
        return;
      }
      z = I ? u.position - I.position : 0;
    } else o(f);
    n.forEach((P) => {
      P(a.value, R, {
        delta: z,
        type: ie.pop,
        direction: z ? z > 0 ? Qt.forward : Qt.back : Qt.unknown
      });
    });
  };
  function l() {
    g = a.value;
  }
  function h(u) {
    n.push(u);
    const f = () => {
      const R = n.indexOf(u);
      R > -1 && n.splice(R, 1);
    };
    return p.push(f), f;
  }
  function m() {
    if (document.visibilityState === "hidden") {
      const { history: u } = window;
      if (!u.state) return;
      u.replaceState(S({}, u.state, { scroll: qt() }), "");
    }
  }
  function c() {
    for (const u of p) u();
    p = [], window.removeEventListener("popstate", x), window.removeEventListener("pagehide", m), document.removeEventListener("visibilitychange", m);
  }
  return window.addEventListener("popstate", x), window.addEventListener("pagehide", m), document.addEventListener("visibilitychange", m), {
    pauseListeners: l,
    listen: h,
    destroy: c
  };
}
function be(t, r, a, o = !1, n = !1) {
  return {
    back: t,
    current: r,
    forward: a,
    replaced: o,
    position: window.history.length,
    scroll: n ? qt() : null
  };
}
function Qr(t) {
  const { history: r, location: a } = window, o = { value: tr(t, a) }, n = { value: r.state };
  n.value || p(o.value, {
    back: null,
    current: o.value,
    forward: null,
    position: r.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function p(l, h, m) {
    const c = t.indexOf("#"), u = c > -1 ? (a.host && document.querySelector("base") ? t : t.slice(c)) + l : Wr() + t + l;
    try {
      r[m ? "replaceState" : "pushState"](h, "", u), n.value = h;
    } catch (f) {
      console.error(f), a[m ? "replace" : "assign"](u);
    }
  }
  function g(l, h) {
    p(l, S({}, r.state, be(n.value.back, l, n.value.forward, !0), h, { position: n.value.position }), !0), o.value = l;
  }
  function x(l, h) {
    const m = S({}, n.value, r.state, {
      forward: l,
      scroll: qt()
    });
    p(m.current, m, !0), p(l, S({}, be(o.value, l, null), { position: m.position + 1 }, h), !1), o.value = l;
  }
  return {
    location: o,
    state: n,
    push: x,
    replace: g
  };
}
function Yr(t) {
  t = Vr(t);
  const r = Qr(t), a = Kr(t, r.state, r.location, r.replace);
  function o(p, g = !0) {
    g || a.pauseListeners(), history.go(p);
  }
  const n = S({
    location: "",
    base: t,
    go: o,
    createHref: Tr.bind(null, t)
  }, r, a);
  return Object.defineProperty(n, "location", {
    enumerable: !0,
    get: () => r.location.value
  }), Object.defineProperty(n, "state", {
    enumerable: !0,
    get: () => r.state.value
  }), n;
}
let ct = /* @__PURE__ */ (function(t) {
  return t[t.Static = 0] = "Static", t[t.Param = 1] = "Param", t[t.Group = 2] = "Group", t;
})({});
var G = /* @__PURE__ */ (function(t) {
  return t[t.Static = 0] = "Static", t[t.Param = 1] = "Param", t[t.ParamRegExp = 2] = "ParamRegExp", t[t.ParamRegExpEnd = 3] = "ParamRegExpEnd", t[t.EscapeNext = 4] = "EscapeNext", t;
})(G || {});
const Xr = {
  type: ct.Static,
  value: ""
}, Jr = /[a-zA-Z0-9_]/;
function ta(t) {
  if (!t) return [[]];
  if (t === "/") return [[Xr]];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
  function r(f) {
    throw new Error(`ERR (${a})/"${h}": ${f}`);
  }
  let a = G.Static, o = a;
  const n = [];
  let p;
  function g() {
    p && n.push(p), p = [];
  }
  let x = 0, l, h = "", m = "";
  function c() {
    h && (a === G.Static ? p.push({
      type: ct.Static,
      value: h
    }) : a === G.Param || a === G.ParamRegExp || a === G.ParamRegExpEnd ? (p.length > 1 && (l === "*" || l === "+") && r(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`), p.push({
      type: ct.Param,
      value: h,
      regexp: m,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : r("Invalid state to consume buffer"), h = "");
  }
  function u() {
    h += l;
  }
  for (; x < t.length; )
    switch (l = t[x++], a) {
      case G.Static:
        l === "\\" ? (o = a, a = G.EscapeNext) : l === "/" ? (h && c(), g()) : l === ":" ? (c(), a = G.Param) : u();
        break;
      case G.EscapeNext:
        u(), a = o;
        break;
      case G.Param:
        l === "(" ? a = G.ParamRegExp : Jr.test(l) ? u() : (c(), a = G.Static, l !== "*" && l !== "?" && l !== "+" && x--);
        break;
      case G.ParamRegExp:
        l === ")" ? m[m.length - 1] == "\\" ? m = m.slice(0, -1) + l : a = G.ParamRegExpEnd : m += l;
        break;
      case G.ParamRegExpEnd:
        c(), a = G.Static, l !== "*" && l !== "?" && l !== "+" && x--, m = "";
        break;
      default:
        r("Unknown state");
        break;
    }
  return a === G.ParamRegExp && r(`Unfinished custom RegExp for param "${h}"`), c(), g(), n;
}
const we = "[^/]+?", ea = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
};
var Z = /* @__PURE__ */ (function(t) {
  return t[t._multiplier = 10] = "_multiplier", t[t.Root = 90] = "Root", t[t.Segment = 40] = "Segment", t[t.SubSegment = 30] = "SubSegment", t[t.Static = 40] = "Static", t[t.Dynamic = 20] = "Dynamic", t[t.BonusCustomRegExp = 10] = "BonusCustomRegExp", t[t.BonusWildcard = -50] = "BonusWildcard", t[t.BonusRepeatable = -20] = "BonusRepeatable", t[t.BonusOptional = -8] = "BonusOptional", t[t.BonusStrict = 0.7000000000000001] = "BonusStrict", t[t.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", t;
})(Z || {});
const ra = /[.+*?^${}()[\]/\\]/g;
function aa(t, r) {
  const a = S({}, ea, r), o = [];
  let n = a.start ? "^" : "";
  const p = [];
  for (const h of t) {
    const m = h.length ? [] : [Z.Root];
    a.strict && !h.length && (n += "/");
    for (let c = 0; c < h.length; c++) {
      const u = h[c];
      let f = Z.Segment + (a.sensitive ? Z.BonusCaseSensitive : 0);
      if (u.type === ct.Static)
        c || (n += "/"), n += u.value.replace(ra, "\\$&"), f += Z.Static;
      else if (u.type === ct.Param) {
        const { value: R, repeatable: I, optional: z, regexp: P } = u;
        p.push({
          name: R,
          repeatable: I,
          optional: z
        });
        const L = P || we;
        if (L !== we) {
          f += Z.BonusCustomRegExp;
          try {
            new RegExp(`(${L})`);
          } catch (U) {
            throw new Error(`Invalid custom RegExp for param "${R}" (${L}): ` + U.message);
          }
        }
        let _ = I ? `((?:${L})(?:/(?:${L}))*)` : `(${L})`;
        c || (_ = z && h.length < 2 ? `(?:/${_})` : "/" + _), z && (_ += "?"), n += _, f += Z.Dynamic, z && (f += Z.BonusOptional), I && (f += Z.BonusRepeatable), L === ".*" && (f += Z.BonusWildcard);
      }
      m.push(f);
    }
    o.push(m);
  }
  if (a.strict && a.end) {
    const h = o.length - 1;
    o[h][o[h].length - 1] += Z.BonusStrict;
  }
  a.strict || (n += "/?"), a.end ? n += "$" : a.strict && !n.endsWith("/") && (n += "(?:/|$)");
  const g = new RegExp(n, a.sensitive ? "" : "i");
  function x(h) {
    const m = h.match(g), c = {};
    if (!m) return null;
    for (let u = 1; u < m.length; u++) {
      const f = m[u] || "", R = p[u - 1];
      c[R.name] = f && R.repeatable ? f.split("/") : f;
    }
    return c;
  }
  function l(h) {
    let m = "", c = !1;
    for (const u of t) {
      (!c || !m.endsWith("/")) && (m += "/"), c = !1;
      for (const f of u) if (f.type === ct.Static) m += f.value;
      else if (f.type === ct.Param) {
        const { value: R, repeatable: I, optional: z } = f, P = R in h ? h[R] : "";
        if (J(P) && !I) throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);
        const L = J(P) ? P.join("/") : P;
        if (!L) if (z)
          u.length < 2 && (m.endsWith("/") ? m = m.slice(0, -1) : c = !0);
        else throw new Error(`Missing required param "${R}"`);
        m += L;
      }
    }
    return m || "/";
  }
  return {
    re: g,
    score: o,
    keys: p,
    parse: x,
    stringify: l
  };
}
function oa(t, r) {
  let a = 0;
  for (; a < t.length && a < r.length; ) {
    const o = r[a] - t[a];
    if (o) return o;
    a++;
  }
  return t.length < r.length ? t.length === 1 && t[0] === Z.Static + Z.Segment ? -1 : 1 : t.length > r.length ? r.length === 1 && r[0] === Z.Static + Z.Segment ? 1 : -1 : 0;
}
function er(t, r) {
  let a = 0;
  const o = t.score, n = r.score;
  for (; a < o.length && a < n.length; ) {
    const p = oa(o[a], n[a]);
    if (p) return p;
    a++;
  }
  if (Math.abs(n.length - o.length) === 1) {
    if (ye(o)) return 1;
    if (ye(n)) return -1;
  }
  return n.length - o.length;
}
function ye(t) {
  const r = t[t.length - 1];
  return t.length > 0 && r[r.length - 1] < 0;
}
const na = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function ia(t, r, a) {
  const o = aa(ta(t.path), a), n = S(o, {
    record: t,
    parent: r,
    children: [],
    alias: []
  });
  return r && !n.record.aliasOf == !r.record.aliasOf && r.children.push(n), n;
}
function sa(t, r) {
  const a = [], o = /* @__PURE__ */ new Map();
  r = he(na, r);
  function n(c) {
    return o.get(c);
  }
  function p(c, u, f) {
    const R = !f, I = Ce(c);
    I.aliasOf = f && f.record;
    const z = he(r, c), P = [I];
    if ("alias" in c) {
      const U = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const Y of U) P.push(Ce(S({}, I, {
        components: f ? f.record.components : I.components,
        path: Y,
        aliasOf: f ? f.record : I
      })));
    }
    let L, _;
    for (const U of P) {
      const { path: Y } = U;
      if (u && Y[0] !== "/") {
        const tt = u.record.path, W = tt[tt.length - 1] === "/" ? "" : "/";
        U.path = u.record.path + (Y && W + Y);
      }
      if (L = ia(U, u, z), f ? f.alias.push(L) : (_ = _ || L, _ !== L && _.alias.push(L), R && c.name && !_e(L) && g(c.name)), rr(L) && l(L), I.children) {
        const tt = I.children;
        for (let W = 0; W < tt.length; W++) p(tt[W], L, f && f.children[W]);
      }
      f = f || L;
    }
    return _ ? () => {
      g(_);
    } : Pt;
  }
  function g(c) {
    if (Je(c)) {
      const u = o.get(c);
      u && (o.delete(c), a.splice(a.indexOf(u), 1), u.children.forEach(g), u.alias.forEach(g));
    } else {
      const u = a.indexOf(c);
      u > -1 && (a.splice(u, 1), c.record.name && o.delete(c.record.name), c.children.forEach(g), c.alias.forEach(g));
    }
  }
  function x() {
    return a;
  }
  function l(c) {
    const u = ca(c, a);
    a.splice(u, 0, c), c.record.name && !_e(c) && o.set(c.record.name, c);
  }
  function h(c, u) {
    let f, R = {}, I, z;
    if ("name" in c && c.name) {
      if (f = o.get(c.name), !f) throw xt(H.MATCHER_NOT_FOUND, { location: c });
      z = f.record.name, R = S(ke(u.params, f.keys.filter((_) => !_.optional).concat(f.parent ? f.parent.keys.filter((_) => _.optional) : []).map((_) => _.name)), c.params && ke(c.params, f.keys.map((_) => _.name))), I = f.stringify(R);
    } else if (c.path != null)
      I = c.path, f = a.find((_) => _.re.test(I)), f && (R = f.parse(I), z = f.record.name, f.keys.forEach((_) => {
        _.optional && !R[_.name] && delete R[_.name];
      }));
    else {
      if (f = u.name ? o.get(u.name) : a.find((_) => _.re.test(u.path)), !f) throw xt(H.MATCHER_NOT_FOUND, {
        location: c,
        currentLocation: u
      });
      z = f.record.name, R = S({}, u.params, c.params), I = f.stringify(R);
    }
    const P = [];
    let L = f;
    for (; L; )
      P.unshift(L.record), L = L.parent;
    return {
      name: z,
      path: I,
      params: R,
      matched: P,
      meta: da(P)
    };
  }
  t.forEach((c) => p(c));
  function m() {
    a.length = 0, o.clear();
  }
  return {
    addRoute: p,
    resolve: h,
    removeRoute: g,
    clearRoutes: m,
    getRoutes: x,
    getRecordMatcher: n
  };
}
function ke(t, r) {
  const a = {};
  for (const o of r) o in t && (a[o] = t[o]);
  return a;
}
function Ce(t) {
  const r = {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: t.aliasOf,
    beforeEnter: t.beforeEnter,
    props: la(t),
    children: t.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in t ? t.components || null : t.component && { default: t.component }
  };
  return Object.defineProperty(r, "mods", { value: {} }), r;
}
function la(t) {
  const r = {}, a = t.props || !1;
  if ("component" in t) r.default = a;
  else for (const o in t.components) r[o] = typeof a == "object" ? a[o] : a;
  return r;
}
function _e(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function da(t) {
  return t.reduce((r, a) => S(r, a.meta), {});
}
function ca(t, r) {
  let a = 0, o = r.length;
  for (; a !== o; ) {
    const p = a + o >> 1;
    er(t, r[p]) < 0 ? o = p : a = p + 1;
  }
  const n = pa(t);
  return n && (o = r.lastIndexOf(n, o - 1)), o;
}
function pa(t) {
  let r = t;
  for (; r = r.parent; ) if (rr(r) && er(t, r) === 0) return r;
}
function rr({ record: t }) {
  return !!(t.name || t.components && Object.keys(t.components).length || t.redirect);
}
function Ae(t) {
  const r = Bt(de), a = Bt(qe), o = F(() => {
    const l = B(t.to);
    return r.resolve(l);
  }), n = F(() => {
    const { matched: l } = o.value, { length: h } = l, m = l[h - 1], c = a.matched;
    if (!m || !c.length) return -1;
    const u = c.findIndex(bt.bind(null, m));
    if (u > -1) return u;
    const f = Ee(l[h - 2]);
    return h > 1 && Ee(m) === f && c[c.length - 1].path !== f ? c.findIndex(bt.bind(null, l[h - 2])) : u;
  }), p = F(() => n.value > -1 && ma(a.params, o.value.params)), g = F(() => n.value > -1 && n.value === a.matched.length - 1 && Xe(a.params, o.value.params));
  function x(l = {}) {
    if (fa(l)) {
      const h = r[B(t.replace) ? "replace" : "push"](B(t.to)).catch(Pt);
      return t.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => h), h;
    }
    return Promise.resolve();
  }
  return {
    route: o,
    href: F(() => o.value.href),
    isActive: p,
    isExactActive: g,
    navigate: x
  };
}
function ua(t) {
  return t.length === 1 ? t[0] : t;
}
const ha = /* @__PURE__ */ Ot({
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
  useLink: Ae,
  setup(t, { slots: r }) {
    const a = ir(Ae(t)), { options: o } = Bt(de), n = F(() => ({
      [Re(t.activeClass, o.linkActiveClass, "router-link-active")]: a.isActive,
      [Re(t.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: a.isExactActive
    }));
    return () => {
      const p = r.default && ua(r.default(a));
      return t.custom ? p : zt("a", {
        "aria-current": a.isExactActive ? t.ariaCurrentValue : null,
        href: a.href,
        onClick: a.navigate,
        class: n.value
      }, p);
    };
  }
}), ga = ha;
function fa(t) {
  if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const r = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(r)) return;
    }
    return t.preventDefault && t.preventDefault(), !0;
  }
}
function ma(t, r) {
  for (const a in r) {
    const o = r[a], n = t[a];
    if (typeof o == "string") {
      if (o !== n) return !1;
    } else if (!J(n) || n.length !== o.length || o.some((p, g) => p.valueOf() !== n[g].valueOf())) return !1;
  }
  return !0;
}
function Ee(t) {
  return t ? t.aliasOf ? t.aliasOf.path : t.path : "";
}
const Re = (t, r, a) => t ?? r ?? a, va = /* @__PURE__ */ Ot({
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
  setup(t, { attrs: r, slots: a }) {
    const o = Bt(oe), n = F(() => t.route || o.value), p = Bt(ge, 0), g = F(() => {
      let h = B(p);
      const { matched: m } = n.value;
      let c;
      for (; (c = m[h]) && !c.components; ) h++;
      return h;
    }), x = F(() => n.value.matched[g.value]);
    Zt(ge, F(() => g.value + 1)), Zt(vr, x), Zt(oe, n);
    const l = mt();
    return sr(() => [
      l.value,
      x.value,
      t.name
    ], ([h, m, c], [u, f, R]) => {
      m && (m.instances[c] = h, f && f !== m && h && h === u && (m.leaveGuards.size || (m.leaveGuards = f.leaveGuards), m.updateGuards.size || (m.updateGuards = f.updateGuards))), h && m && (!f || !bt(m, f) || !u) && (m.enterCallbacks[c] || []).forEach((I) => I(h));
    }, { flush: "post" }), () => {
      const h = n.value, m = t.name, c = x.value, u = c && c.components[m];
      if (!u) return Le(a.default, {
        Component: u,
        route: h
      });
      const f = c.props[m], R = f ? f === !0 ? h.params : typeof f == "function" ? f(h) : f : null, z = zt(u, S({}, R, r, {
        onVnodeUnmounted: (P) => {
          P.component.isUnmounted && (c.instances[m] = null);
        },
        ref: l
      }));
      return Le(a.default, {
        Component: z,
        route: h
      }) || z;
    };
  }
});
function Le(t, r) {
  if (!t) return null;
  const a = t(r);
  return a.length === 1 ? a[0] : a;
}
const xa = va;
function ba(t) {
  const r = sa(t.routes, t), a = t.parseQuery || Ur, o = t.stringifyQuery || xe, n = t.history, p = Lt(), g = Lt(), x = Lt(), l = or(at);
  let h = at;
  vt && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const m = Wt.bind(null, (s) => "" + s), c = Wt.bind(null, Nr), u = Wt.bind(null, Ut);
  function f(s, b) {
    let v, y;
    return Je(s) ? (v = r.getRecordMatcher(s), y = b) : y = s, r.addRoute(y, v);
  }
  function R(s) {
    const b = r.getRecordMatcher(s);
    b && r.removeRoute(b);
  }
  function I() {
    return r.getRoutes().map((s) => s.record);
  }
  function z(s) {
    return !!r.getRecordMatcher(s);
  }
  function P(s, b) {
    if (b = S({}, b || l.value), typeof s == "string") {
      const A = Kt(a, s, b.path), D = r.resolve({ path: A.path }, b), Et = n.createHref(A.fullPath);
      return S(A, D, {
        params: u(D.params),
        redirectedFrom: void 0,
        href: Et
      });
    }
    let v;
    if (s.path != null)
      v = S({}, s, { path: Kt(a, s.path, b.path).path });
    else {
      const A = S({}, s.params);
      for (const D in A) A[D] == null && delete A[D];
      v = S({}, s, { params: c(A) }), b.params = c(b.params);
    }
    const y = r.resolve(v, b), N = s.hash || "";
    y.params = m(u(y.params));
    const j = Pr(o, S({}, s, {
      hash: Rr(N),
      path: y.path
    })), M = n.createHref(j);
    return S({
      fullPath: j,
      hash: N,
      query: o === xe ? qr(s.query) : s.query || {}
    }, y, {
      redirectedFrom: void 0,
      href: M
    });
  }
  function L(s) {
    return typeof s == "string" ? Kt(a, s, l.value.path) : S({}, s);
  }
  function _(s, b) {
    if (h !== s) return xt(H.NAVIGATION_CANCELLED, {
      from: b,
      to: s
    });
  }
  function U(s) {
    return W(s);
  }
  function Y(s) {
    return U(S(L(s), { replace: !0 }));
  }
  function tt(s, b) {
    const v = s.matched[s.matched.length - 1];
    if (v && v.redirect) {
      const { redirect: y } = v;
      let N = typeof y == "function" ? y(s, b) : y;
      return typeof N == "string" && (N = N.includes("?") || N.includes("#") ? N = L(N) : { path: N }, N.params = {}), S({
        query: s.query,
        hash: s.hash,
        params: N.path != null ? {} : s.params
      }, N);
    }
  }
  function W(s, b) {
    const v = h = P(s), y = l.value, N = s.state, j = s.force, M = s.replace === !0, A = tt(v, y);
    if (A) return W(S(L(A), {
      state: typeof A == "object" ? S({}, N, A.state) : N,
      force: j,
      replace: M
    }), b || v);
    const D = v;
    D.redirectedFrom = b;
    let Et;
    return !j && Br(o, y, v) && (Et = xt(H.NAVIGATION_DUPLICATED, {
      to: D,
      from: y
    }), ut(y, y, !0, !1)), (Et ? Promise.resolve(Et) : K(D, y)).catch((Q) => rt(Q) ? rt(Q, H.NAVIGATION_GUARD_REDIRECT) ? Q : i(Q) : Ct(Q, D, y)).then((Q) => {
      if (Q) {
        if (rt(Q, H.NAVIGATION_GUARD_REDIRECT))
          return W(S({ replace: M }, L(Q.to), {
            state: typeof Q.to == "object" ? S({}, N, Q.to.state) : N,
            force: j
          }), b || D);
      } else Q = yt(D, y, !0, M, N);
      return st(D, y, Q), Q;
    });
  }
  function Vt(s, b) {
    const v = _(s, b);
    return v ? Promise.reject(v) : Promise.resolve();
  }
  function wt(s) {
    const b = _t.values().next().value;
    return b && typeof b.runWithContext == "function" ? b.runWithContext(s) : s();
  }
  function K(s, b) {
    let v;
    const [y, N, j] = Zr(s, b);
    v = Yt(y.reverse(), "beforeRouteLeave", s, b);
    for (const A of y) A.leaveGuards.forEach((D) => {
      v.push(it(D, s, b));
    });
    const M = Vt.bind(null, s, b);
    return v.push(M), ht(v).then(() => {
      v = [];
      for (const A of p.list()) v.push(it(A, s, b));
      return v.push(M), ht(v);
    }).then(() => {
      v = Yt(N, "beforeRouteUpdate", s, b);
      for (const A of N) A.updateGuards.forEach((D) => {
        v.push(it(D, s, b));
      });
      return v.push(M), ht(v);
    }).then(() => {
      v = [];
      for (const A of j) if (A.beforeEnter) if (J(A.beforeEnter)) for (const D of A.beforeEnter) v.push(it(D, s, b));
      else v.push(it(A.beforeEnter, s, b));
      return v.push(M), ht(v);
    }).then(() => (s.matched.forEach((A) => A.enterCallbacks = {}), v = Yt(j, "beforeRouteEnter", s, b, wt), v.push(M), ht(v))).then(() => {
      v = [];
      for (const A of g.list()) v.push(it(A, s, b));
      return v.push(M), ht(v);
    }).catch((A) => rt(A, H.NAVIGATION_CANCELLED) ? A : Promise.reject(A));
  }
  function st(s, b, v) {
    x.list().forEach((y) => wt(() => y(s, b, v)));
  }
  function yt(s, b, v, y, N) {
    const j = _(s, b);
    if (j) return j;
    const M = b === at, A = vt ? history.state : {};
    v && (y || M ? n.replace(s.fullPath, S({ scroll: M && A && A.scroll }, N)) : n.push(s.fullPath, N)), l.value = s, ut(s, b, v, M), i();
  }
  let lt;
  function Ht() {
    lt || (lt = n.listen((s, b, v) => {
      if (!At.listening) return;
      const y = P(s), N = tt(y, At.currentRoute.value);
      if (N) {
        W(S(N, {
          replace: !0,
          force: !0
        }), y).catch(Pt);
        return;
      }
      h = y;
      const j = l.value;
      vt && Gr(ve(j.fullPath, v.delta), qt()), K(y, j).catch((M) => rt(M, H.NAVIGATION_ABORTED | H.NAVIGATION_CANCELLED) ? M : rt(M, H.NAVIGATION_GUARD_REDIRECT) ? (W(S(L(M.to), { force: !0 }), y).then((A) => {
        rt(A, H.NAVIGATION_ABORTED | H.NAVIGATION_DUPLICATED) && !v.delta && v.type === ie.pop && n.go(-1, !1);
      }).catch(Pt), Promise.reject()) : (v.delta && n.go(-v.delta, !1), Ct(M, y, j))).then((M) => {
        M = M || yt(y, j, !1), M && (v.delta && !rt(M, H.NAVIGATION_CANCELLED) ? n.go(-v.delta, !1) : v.type === ie.pop && rt(M, H.NAVIGATION_ABORTED | H.NAVIGATION_DUPLICATED) && n.go(-1, !1)), st(y, j, M);
      }).catch(Pt);
    }));
  }
  let kt = Lt(), Tt = Lt(), pt;
  function Ct(s, b, v) {
    i(s);
    const y = Tt.list();
    return y.length ? y.forEach((N) => N(s, b, v)) : console.error(s), Promise.reject(s);
  }
  function q() {
    return pt && l.value !== at ? Promise.resolve() : new Promise((s, b) => {
      kt.add([s, b]);
    });
  }
  function i(s) {
    return pt || (pt = !s, Ht(), kt.list().forEach(([b, v]) => s ? v(s) : b()), kt.reset()), s;
  }
  function ut(s, b, v, y) {
    const { scrollBehavior: N } = t;
    if (!vt || !N) return Promise.resolve();
    const j = !v && $r(ve(s.fullPath, 0)) || (y || !v) && history.state && history.state.scroll || null;
    return lr().then(() => N(s, b, j)).then((M) => M && Dr(M)).catch((M) => Ct(M, s, b));
  }
  const d = (s) => n.go(s);
  let w;
  const _t = /* @__PURE__ */ new Set(), At = {
    currentRoute: l,
    listening: !0,
    addRoute: f,
    removeRoute: R,
    clearRoutes: r.clearRoutes,
    hasRoute: z,
    getRoutes: I,
    resolve: P,
    options: t,
    push: U,
    replace: Y,
    go: d,
    back: () => d(-1),
    forward: () => d(1),
    beforeEach: p.add,
    beforeResolve: g.add,
    afterEach: x.add,
    onError: Tt.add,
    isReady: q,
    install(s) {
      s.component("RouterLink", ga), s.component("RouterView", xa), s.config.globalProperties.$router = At, Object.defineProperty(s.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => B(l)
      }), vt && !w && l.value === at && (w = !0, U(n.location).catch((y) => {
      }));
      const b = {};
      for (const y in at) Object.defineProperty(b, y, {
        get: () => l.value[y],
        enumerable: !0
      });
      s.provide(de, At), s.provide(qe, nr(b)), s.provide(oe, l);
      const v = s.unmount;
      _t.add(s), s.unmount = function() {
        _t.delete(s), _t.size < 1 && (h = at, lt && lt(), lt = null, l.value = at, w = !1, pt = !1), v();
      };
    }
  };
  function ht(s) {
    return s.reduce((b, v) => b.then(() => wt(v)), Promise.resolve());
  }
  return At;
}
const ar = (t, r) => {
  const a = t.__vccOpts || t;
  for (const [o, n] of r)
    a[o] = n;
  return a;
}, wa = {};
function ya(t, r) {
  const a = le("RouterView");
  return k(), nt(a);
}
const ka = /* @__PURE__ */ ar(wa, [["render", ya]]);
const Ca = (t) => {
  for (const r in t)
    if (r.startsWith("aria-") || r === "role" || r === "title")
      return !0;
  return !1;
};
const Me = (t) => t === "";
const _a = (...t) => t.filter((r, a, o) => !!r && r.trim() !== "" && o.indexOf(r) === a).join(" ").trim();
const Ne = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Aa = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, a, o) => o ? o.toUpperCase() : a.toLowerCase()
);
const Ea = (t) => {
  const r = Aa(t);
  return r.charAt(0).toUpperCase() + r.slice(1);
};
var Mt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Ra = ({
  name: t,
  iconNode: r,
  absoluteStrokeWidth: a,
  "absolute-stroke-width": o,
  strokeWidth: n,
  "stroke-width": p,
  size: g = Mt.width,
  color: x = Mt.stroke,
  ...l
}, { slots: h }) => zt(
  "svg",
  {
    ...Mt,
    ...l,
    width: g,
    height: g,
    stroke: x,
    "stroke-width": Me(a) || Me(o) || a === !0 || o === !0 ? Number(n || p || Mt["stroke-width"]) * 24 / Number(g) : n || p || Mt["stroke-width"],
    class: _a(
      "lucide",
      l.class,
      ...t ? [`lucide-${Ne(Ea(t))}-icon`, `lucide-${Ne(t)}`] : ["lucide-icon"]
    ),
    ...!h.default && !Ca(l) && { "aria-hidden": "true" }
  },
  [...r.map((m) => zt(...m)), ...h.default ? [h.default()] : []]
);
const $ = (t, r) => (a, { slots: o, attrs: n }) => zt(
  Ra,
  {
    ...n,
    ...a,
    iconNode: r,
    name: t
  },
  o
);
const Ie = $("arrow-right", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Xt = $("arrow-up-right", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
const La = $("box", [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);
const Jt = $("building-2", [
  ["path", { d: "M10 12h4", key: "a56b0p" }],
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
      key: "secmi2"
    }
  ],
  ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }]
]);
const Se = $("chart-column", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
const jt = $("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const Ma = $("circle-alert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const Pe = $("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const Dt = $("cpu", [
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M17 20v2", key: "1rnc9c" }],
  ["path", { d: "M17 2v2", key: "11trls" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M2 17h2", key: "7oei6x" }],
  ["path", { d: "M2 7h2", key: "asdhe0" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "M20 17h2", key: "1fpfkl" }],
  ["path", { d: "M20 7h2", key: "1o8tra" }],
  ["path", { d: "M7 20v2", key: "4gnj0m" }],
  ["path", { d: "M7 2v2", key: "1i4yhu" }],
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" }]
]);
const Na = $("factory", [
  ["path", { d: "M12 16h.01", key: "1drbdi" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  [
    "path",
    {
      d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
      key: "1iv0i2"
    }
  ],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);
const ft = $("globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
const Ia = $("menu", [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
]);
const Be = $("network", [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
]);
const te = $("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const ze = $("shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
]);
const Oe = $("trending-up", [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
]);
const Ve = $("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const ee = $("zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), He = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='857'%20height='443'%20viewBox='0%200%20857%20443'%20fill='none'%3e%3cpath%20d='M0.666656%204.53336C0.666656%208.6667%202.53332%2010%208.79999%2010C22.8%2010%2048.6667%2018.4%2061.0667%2026.9334C75.2%2036.5334%2083.4667%2047.3334%20100%2078C106%2089.0667%20112.533%20101.067%20127.733%20128.667C129.867%20132.667%20134.8%20141.733%20138.533%20148.667C142.4%20155.6%20151.067%20171.733%20158%20184.267L170.4%20207.333H204.267C226.667%20207.333%20238%20206.933%20238%20206C238%20204.267%20233.2%20194.533%20230%20190C228.8%20188.133%20224.533%20180.667%20220.667%20173.333C210.133%20153.733%20196.4%20128.4%20183.733%20105.333C176.4%2092%20149.067%2042.1334%20135.467%2017.3334L126.667%201.33336L63.7333%200.933363L0.666656%200.666697V4.53336Z'%20fill='black'/%3e%3cpath%20d='M417.467%205.20003C416.4%207.73336%20406%2028%20394.267%2050.2667C359.2%20116.8%20318.533%20194.267%20315.467%20200.267L312.667%20206H326.4H340.133L345.733%20194.933C348.8%20188.933%20353.733%20179.733%20356.533%20174.667C359.333%20169.467%20364.8%20159.333%20368.667%20152C376%20138%20403.467%2086.8%20415.6%2064.1334C419.467%2056.8%20423.333%2050.6667%20424.267%2050.4C426.533%2049.6%20427.867%20100.667%20426.933%20156.933L426.133%20206H454.133H482V130C482%2084.1334%20482.533%2054%20483.2%2054C483.867%2054%20495.467%2065.2%20508.933%2078.9334C522.4%2092.6667%20546.933%20117.733%20563.467%20134.533C580.133%20151.467%20602.933%20174.8%20614.133%20186.4L634.667%20207.333H671.067C691.733%20207.333%20707.333%20206.8%20707.067%20206.133C706.8%20205.2%20666.4%20163.6%20610%20106C606.667%20102.533%20582.133%2077.4667%20555.467%2050.2667L506.933%200.666697H463.2H419.333L417.467%205.20003Z'%20fill='black'/%3e%3cpath%20d='M710%204.66663V8.66663H720.4C742.8%208.79997%20758.933%2015.0666%20764.267%2026C769.467%2036.5333%20770%2045.8666%20770%20128.267V207.333L780%20207.6C785.467%20207.733%20791.067%20207.867%20792.4%20207.867C794.533%20208%20794.667%20202.8%20795.333%20122C796%2045.4666%20796.267%2035.3333%20798.267%2030.2666C800.933%2023.7333%20805.467%2019.2%20814%2014.8C822.133%2010.5333%20825.733%209.86663%20842%208.79997L856%207.99997L856.4%204.26663L856.8%200.666631H783.467H710V4.66663Z'%20fill='black'/%3e%3cpath%20d='M182.4%20229.067C185.6%20235.067%20195.333%20252.933%20204%20268.667C212.667%20284.4%20226.933%20310.267%20235.467%20326C244.133%20341.733%20251.867%20354.8%20252.667%20355.067C257.467%20356.667%20260.667%20353.733%20267.467%20341.067C271.333%20333.867%20276%20324.933%20278%20321.333C280%20317.6%20288.933%20300.8%20298%20284C306.933%20267.067%20314.8%20252.667%20315.333%20252C315.867%20251.2%20320%20243.6%20324.533%20234.933L332.8%20219.333H319.067H305.333L294%20240.933C287.867%20252.933%20281.867%20264.4%20280.667%20266.533C279.6%20268.8%20278%20270.667%20277.2%20270.933C275.333%20271.6%20270.4%20263.867%20257.333%20240C251.733%20229.733%20246.8%20220.933%20246.267%20220.533C245.733%20220%20229.867%20219.333%20210.933%20218.933L176.533%20218.267L182.4%20229.067Z'%20fill='black'/%3e%3cpath%20d='M770%20242C770%20260.933%20769.6%20266%20768.267%20266C767.333%20266%20756.133%20255.467%20743.333%20242.667L720.267%20219.333L683.867%20219.6L647.467%20220L666.4%20239.333C781.2%20356.8%20783.867%20359.333%20788.933%20360.933C791.733%20361.733%20794.267%20362.133%20794.667%20361.733C795.2%20361.333%20795.6%20274.933%20795.333%20223.6V218H782.667H770V242Z'%20fill='black'/%3e%3cpath%20d='M427.2%20247.6C427.2%20263.2%20426.667%20286.267%20426.133%20298.8C425.2%20320.267%20424.933%20322%20421.467%20327.733C414.8%20339.2%20405.6%20343.867%20385.333%20346C378.8%20346.667%20372.8%20347.333%20372%20347.333C368.8%20347.467%20367.2%20349.733%20368.133%20353.067L368.933%20356.667H452.8H536.667L537.467%20353.2C538%20351.333%20537.867%20349.333%20537.2%20348.667C536.533%20348%20529.867%20346.8%20522.4%20346.133C501.6%20344.267%20491.333%20338.667%20485.467%20326.133C482.8%20320.267%20482.667%20317.733%20482.267%20269.6L481.867%20219.333H454.533H427.333L427.2%20247.6Z'%20fill='black'/%3e%3cpath%20d='M60.1333%20254L59.0667%20278.667L38.8%20299.067C27.7333%20310.267%2018.5333%20320%2018.2667%20320.667C17.6%20322.267%2060.1333%20364.667%2062.4%20364.667C64.4%20364.667%20106%20323.2%20106%20321.067C106%20320.267%2097.0667%20310.667%2086.2667%20299.733L66.4%20280L64.9333%20267.333C64.1333%20260.4%2063.4667%20251.333%2063.3333%20247.333C63.2%20243.333%2062.6667%20237.6%2062.1333%20234.667C61.4667%20230.8%2060.8%20236.4%2060.1333%20254Z'%20fill='black'/%3e%3cpath%20d='M787.867%20370.667C787.333%20372.133%20783.067%20382.267%20778.4%20393.2C769.733%20413.733%20769.2%20415.333%20771.2%20415.333C771.867%20415.333%20774.933%20409.333%20778.133%20401.867C781.2%20394.533%20784.267%20388.267%20784.667%20388C785.2%20387.733%20788.133%20393.733%20791.333%20401.333L797.2%20415.333H803.067C809.733%20415.333%20809.733%20415.467%20802.933%20400.8C800.8%20396.133%20796.8%20386.8%20794%20380.133C789.867%20370.533%20788.667%20368.533%20787.867%20370.667Z'%20fill='black'/%3e%3cpath%20d='M26.6667%20371.867L32%20373.6L32.4%20394.4C32.8%20419.733%2035.3333%20423.333%2035.3333%20398.667C35.3333%20389.467%2035.8667%20382%2036.4%20382C36.9333%20382%2040.6667%20389.467%2044.6667%20398.667L51.7333%20415.333H57.4667C64.2667%20415.333%2064.6667%20417.333%2052.1333%20389.333L43.8667%20370.667L32.5333%20370.4C21.7333%20370.267%2021.4667%20370.267%2026.6667%20371.867Z'%20fill='black'/%3e%3cpath%20d='M86.4%20372.267C85.8667%20373.6%2082%20383.6%2077.7333%20394.533C70.8%20412.667%2069.3333%20418.133%2072.5333%20414.533C73.2%20413.867%2076.5333%20405.867%2080.1333%20396.667L86.6667%20380L87.0667%20397.6L87.4667%20415.333H93.3333H99.3333V394.667C99.3333%20377.733%2099.7333%20373.733%20101.333%20373.2C102.4%20372.8%20107.333%20372.267%20112.267%20372.267L121.2%20372L131.067%20388C136.4%20396.8%20142%20406.533%20143.467%20409.6C146%20414.933%20146.533%20415.333%20151.333%20415.333C155.867%20415.333%20156.667%20414.933%20156.667%20412.533C156.667%20410.933%20158.667%20406.4%20161.2%20402.267C163.6%20398%20168.533%20389.733%20172.133%20383.6C179.2%20371.6%20180.8%20370.533%20190.933%20371.733C200.8%20372.8%20201.333%20374%20201.733%20396C202%20406.667%20202.8%20415.333%20203.467%20415.333C204%20415.333%20204.8%20407.467%20204.933%20397.733L205.333%20380.133L218.533%20396.933C232.133%20414.133%20234.533%20416%20241.6%20414.133C244.667%20413.333%20244.133%20412.267%20227.733%20391.733L210.667%20370.133L186.667%20370.267C173.467%20370.4%20164.8%20370.667%20167.333%20370.933C169.867%20371.333%20172.533%20372%20173.2%20372.667C174.4%20373.867%20166.133%20390%20159.067%20400.4L155.2%20406.133L148.8%20396.4C134.8%20374.8%20134.133%20371.867%20142.933%20370.933C145.733%20370.667%20134.267%20370.4%20117.6%20370.267C89.7333%20370%2087.2%20370.133%2086.4%20372.267Z'%20fill='black'/%3e%3cpath%20d='M246%20370.933C253.867%20372%20254%20372.4%20254%20394.133C254%20421.333%20256.533%20420.4%20256.933%20392.933L257.333%20372L262.667%20371.2C265.867%20370.667%20262.667%20370.4%20254.667%20370.4C247.333%20370.4%20243.467%20370.667%20246%20370.933Z'%20fill='black'/%3e%3cpath%20d='M298.267%20389.333C293.733%20400%20289.6%20410.4%20289.2%20412.4C287.467%20419.6%20292%20412.533%20297.333%20399.6C300.133%20392.8%20302.8%20387.6%20303.2%20388C303.6%20388.4%20306.4%20394.267%20309.333%20401.067L314.667%20413.333L320.933%20413.733L327.2%20414.133L317.867%20393.2C312.8%20381.6%20308.267%20371.733%20307.6%20371.067C307.067%20370.533%20302.8%20378.667%20298.267%20389.333Z'%20fill='black'/%3e%3cpath%20d='M351.333%20371.067L356%20372L356.4%20392.933L356.8%20414H362.667H368.667V395.467C368.667%20385.2%20369.067%20376%20369.467%20374.8C370.133%20373.067%20372.4%20372.667%20381.2%20372.667C394%20372.667%20400.667%20375.2%20406.933%20382.4C411.733%20387.867%20413.2%20393.333%20413.2%20405.6L413.333%20414H419.6C426.933%20414%20428.133%20412%20426.667%20402.267C425.333%20392.933%20421.733%20385.867%20415.6%20380.4C406.933%20372.667%20399.867%20371.067%20371.333%20370.533C357.733%20370.4%20348.8%20370.667%20351.333%20371.067Z'%20fill='black'/%3e%3cpath%20d='M440%20370.933C442.133%20371.333%20444.4%20372.267%20444.933%20373.067C445.467%20374%20446%20383.467%20446%20394.267V414H452C458%20414%20458%20414%20458%20409.333V404.667H466.667C475.733%20404.667%20480.667%20407.333%20480.667%20412C480.667%20413.067%20481.333%20414%20482%20414C482.8%20414%20483.333%20408.8%20483.2%20400.933V388L481.2%20394.267C479.067%20401.333%20475.333%20403.333%20464.533%20403.333H458V387.6V372L473.067%20372.667C490.133%20373.467%20491.733%20374.133%20495.6%20383.067C497.067%20386.267%20498.4%20388.667%20498.667%20388.4C498.933%20388.133%20498.8%20384%20498.4%20378.933L497.6%20370L466.8%20370.133C449.867%20370.267%20437.733%20370.667%20440%20370.933Z'%20fill='black'/%3e%3cpath%20d='M517.333%20371.6C514.267%20381.067%20512.8%20393.2%20515.067%20390.533C515.733%20389.867%20516.933%20386.8%20517.867%20383.733C518.667%20380.667%20520.933%20376.933%20522.667%20375.6C526.533%20372.533%20539.333%20370.667%20547.2%20372L552.4%20372.8L547.867%20380.4C545.333%20384.533%20539.6%20393.6%20535.333%20400.533C530.933%20407.333%20527.333%20413.2%20527.333%20413.6C527.333%20413.867%20530.133%20414%20533.6%20413.733L540%20413.333L549.6%20398C554.933%20389.6%20560.8%20379.867%20562.667%20376.267L566.133%20370H542C523.867%20370%20517.733%20370.4%20517.333%20371.6Z'%20fill='black'/%3e%3cpath%20d='M578.667%20370.667C579.467%20370.933%20581.6%20371.467%20583.733%20371.867L587.333%20372.667V393.333V414H593.333H599.333V408.667V403.333H618H636.667V408.667V414H642.667H648.667V393.333V372.667L652.4%20371.867C654.4%20371.467%20656.667%20370.933%20657.333%20370.667C658.133%20370.4%20651.467%20370.267%20642.667%20370.267C633.867%20370.267%20627.333%20370.4%20628%20370.667C628.8%20370.933%20630.933%20371.467%20633.067%20371.867L636.667%20372.667V387.333V402H618H599.333V387.333V372.667L603.067%20371.867C605.067%20371.467%20607.333%20370.933%20608%20370.667C608.8%20370.4%20602.133%20370.267%20593.333%20370.267C584.533%20370.267%20578%20370.4%20578.667%20370.667Z'%20fill='black'/%3e%3cpath%20d='M670%20371.067L674.667%20372L675.067%20393.6L675.333%20415.333H681.333H687.2L687.6%20394.267L688%20373.333L698%20372.933C721.2%20372%20731.2%20381.467%20731.333%20404.4V415.467L737.733%20415.067L744%20414.667L744.4%20406.4C744.933%20395.733%20741.067%20386.4%20733.6%20379.867C724.933%20372.533%20718.133%20371.067%20690%20370.533C676.4%20370.4%20667.467%20370.533%20670%20371.067Z'%20fill='black'/%3e%3cpath%20d='M32.4%20428.933L32%20440L26.6667%20440.8C23.2%20441.333%2025.8667%20441.6%2034%20441.733C42.8%20441.733%2045.3333%20441.467%2042.2667%20440.667C39.8667%20440.133%2037.4667%20439.333%2037.0667%20438.8C36.6667%20438.4%2036%20433.6%2035.6%20428C35.3333%20422.533%2034.5333%20418%2033.8667%20418C33.3333%20418%2032.6667%20422.933%2032.4%20428.933Z'%20fill='black'/%3e%3cpath%20d='M54%20418.933C54%20421.6%2062.6667%20440.533%2063.4667%20439.733C65.0667%20438.133%2071.4667%20420.267%2070.6667%20419.6C70.4%20419.2%2069.2%20419.6%2068.1333%20420.533C66.6667%20421.733%2066.1333%20421.6%2065.4667%20420C65.0667%20418.667%2062.9333%20418%2059.3333%20418C56.4%20418%2054%20418.4%2054%20418.933Z'%20fill='black'/%3e%3cpath%20d='M88.2667%20418.8C87.7333%20419.333%2087.3333%20424.133%2087.3333%20429.467C87.3333%20440.133%2088.1333%20439.2%2078.6667%20441.067C77.2%20441.467%2084.1333%20441.733%2094%20441.6C104%20441.6%20109.333%20441.2%20106%20440.8L100%20440L99.3333%20429.333L98.6667%20418.667L94%20418.267C91.3333%20418%2088.8%20418.267%2088.2667%20418.8Z'%20fill='black'/%3e%3cpath%20d='M800.133%20422.933C803.2%20430.267%20806.133%20438.4%20805.733%20438.8C805.467%20438.933%20802%20439.6%20798%20440.4C791.733%20441.467%20793.6%20441.733%20810.667%20441.6C821.733%20441.6%20828.8%20441.333%20826.533%20441.067C821.467%20440.4%20819.6%20438.267%20815.333%20428.667C810.8%20418.4%20810.4%20418%20803.867%20418H798L800.133%20422.933Z'%20fill='black'/%3e%3cpath%20d='M145.6%20420.267C145.067%20420.667%20144.667%20425.067%20144.667%20430V438.8L139.733%20440.267C135.467%20441.467%20137.467%20441.6%20151.333%20441.6C160.533%20441.6%20166.267%20441.333%20164%20441.067C157.6%20440.133%20156.667%20438.533%20156.667%20428.533V419.333H151.6C148.8%20419.333%20146%20419.733%20145.6%20420.267Z'%20fill='black'/%3e%3cpath%20d='M202%20427.6C202%20437.867%20201.067%20439.467%20194.533%20440.667C190.8%20441.467%20193.067%20441.733%20202.667%20441.733C214.533%20441.733%20215.333%20441.467%20210.4%20440.267L204.667%20438.933V429.2C204.667%20423.467%20204.133%20419.333%20203.333%20419.333C202.533%20419.333%20202%20423.067%20202%20427.6Z'%20fill='black'/%3e%3cpath%20d='M238.267%20421.733C243.733%20429.333%20254.667%20442%20255.6%20442C256.133%20442%20256.667%20436.933%20256.667%20430.667C256.667%20420.533%20255.333%20416.267%20253.6%20420.933C253.067%20422.267%20252.667%20422.267%20251.2%20420.933C250.267%20420.133%20246.533%20419.333%20242.933%20419.333C237.067%20419.333%20236.667%20419.467%20238.267%20421.733Z'%20fill='black'/%3e%3cpath%20d='M281.333%20429.333C277.6%20437.467%20276.133%20439.467%20273.067%20440.133C266%20441.6%20266.667%20441.733%20280%20441.733C289.333%20441.733%20291.867%20441.467%20288.267%20440.667C285.6%20440.133%20282.933%20439.333%20282.533%20438.933C282%20438.533%20283.2%20434.133%20285.2%20429.333C289.2%20419.467%20289.2%20419.333%20287.2%20419.333C286.533%20419.333%20283.867%20423.867%20281.333%20429.333Z'%20fill='black'/%3e%3cpath%20d='M320.133%20428C321.867%20432.8%20323.333%20437.333%20323.333%20438C323.333%20438.667%20320.133%20439.733%20316.4%20440.4C306.4%20442.267%20382.667%20442.4%20393.867%20440.667C406.933%20438.533%20417.333%20432.267%20422.4%20423.467L424.8%20419.333H418.267C412.4%20419.333%20411.467%20419.733%20410.8%20422.533C409.6%20427.333%20403.733%20433.733%20397.867%20436.667C394%20438.667%20390%20439.333%20381.467%20439.333C368.533%20439.333%20368.667%20439.467%20368.667%20427.2V419.333H362.667H356.8L356.4%20429.6L356%20440L349.067%20440.4C345.2%20440.667%20341.067%20440.267%20339.733%20439.467C338.4%20438.8%20335.6%20434%20333.467%20428.8L329.467%20419.333H323.2H316.933L320.133%20428Z'%20fill='black'/%3e%3cpath%20d='M446%20428.533C446%20438.267%20445.067%20440%20439.333%20441.067C437.467%20441.333%20450.533%20441.733%20468.133%20441.867L500.4%20442L501.067%20434.267C501.867%20425.2%20500.133%20420.533%20498.8%20428C498.267%20430.667%20496.4%20434.4%20494.667%20436.133C491.6%20439.2%20490.533%20439.333%20474.933%20439.333H458.4L457.467%20435.2C457.067%20432.933%20456.667%20428.4%20456.667%20425.2V419.333H451.333H446V428.533Z'%20fill='black'/%3e%3cpath%20d='M517.2%20428.933C513.867%20434.267%20510.8%20439.333%20510.4%20440.267C509.867%20441.6%20515.2%20442%20537.733%20442C569.333%20442%20566.4%20443.067%20568%20430.667C568.4%20426.933%20569.067%20422.933%20569.467%20421.6C569.867%20420.4%20569.6%20419.333%20568.933%20419.333C568.267%20419.333%20566.933%20422%20566%20425.333C563.867%20432.933%20559.733%20437.333%20553.2%20439.2C547.333%20440.8%20525.2%20441.2%20524.267%20439.6C523.867%20439.067%20526.267%20434.8%20529.467%20430C532.533%20425.2%20535.2%20420.933%20535.333%20420.267C535.333%20419.733%20532.667%20419.333%20529.333%20419.333C523.467%20419.333%20523.467%20419.333%20517.2%20428.933Z'%20fill='black'/%3e%3cpath%20d='M587.333%20429.333C587.333%20439.067%20587.333%20439.333%20583.733%20440.133C581.6%20440.533%20579.467%20441.067%20578.667%20441.333C578%20441.6%20584.533%20441.733%20593.333%20441.733C606.4%20441.733%20608.4%20441.467%20604.4%20440.4L599.333%20439.067V429.2V419.333H593.333H587.333V429.333Z'%20fill='black'/%3e%3cpath%20d='M636.667%20429.333V439.2L632.4%20440.533C629.067%20441.467%20631.6%20441.733%20643.333%20441.733C658.533%20441.733%20659.333%20441.6%20652.4%20440.133C648.667%20439.333%20648.667%20439.067%20648.667%20429.333V419.333H642.667H636.667V429.333Z'%20fill='black'/%3e%3cpath%20d='M675.333%20429.333C675.333%20439.067%20675.333%20439.333%20671.733%20440.133C669.6%20440.533%20667.467%20441.2%20666.667%20441.467C666%20441.733%20676.4%20441.733%20690%20441.467C716.533%20441.067%20721.733%20440%20731.733%20433.067C736%20430%20742%20422.667%20742%20420.133C742%20419.733%20739.333%20419.333%20736.133%20419.333C731.067%20419.333%20730%20419.867%20729.333%20422.267C727.6%20427.867%20721.6%20434.267%20715.867%20436.933C711.333%20438.933%20707.6%20439.333%20699.067%20439.067L688%20438.667L687.6%20428.933L687.2%20419.333H681.333H675.333V429.333Z'%20fill='black'/%3e%3cpath%20d='M763.333%20429.333C760.133%20436.533%20758.133%20439.6%20756.133%20440C754.533%20440.267%20752.133%20440.8%20750.667%20441.067C749.2%20441.467%20754.267%20441.733%20762%20441.6C770.4%20441.6%20773.867%20441.333%20770.667%20440.8C764%20439.733%20763.6%20437.867%20767.733%20427.467C772.667%20415.333%20768.667%20417.067%20763.333%20429.333Z'%20fill='black'/%3e%3c/svg%3e", Sa = { class: "min-h-screen bg-background text-foreground font-sans" }, Pa = { class: "container mx-auto px-4 md:px-6 flex items-center justify-between" }, Ba = ["src"], za = { class: "hidden md:flex items-center gap-4" }, Oa = { class: "rounded-full font-semibold shadow-md px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" }, Va = ["href"], Ha = { class: "rounded-full font-semibold shadow-md px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" }, Ta = ["href"], ja = {
  key: 0,
  class: "md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg p-4 flex flex-col gap-4"
}, Da = { class: "rounded-full font-semibold shadow-md px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" }, Ga = ["href"], $a = { class: "w-full rounded-full mt-2 font-semibold py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" }, Fa = ["href"], Ua = { class: "relative h-screen w-full overflow-hidden bg-black" }, qa = ["src", "alt"], Za = { class: "relative z-20 h-full flex items-center pt-20" }, Wa = { class: "container mx-auto px-4 md:px-6" }, Ka = { class: "max-w-4xl" }, Qa = { class: "rounded-full h-14 px-8 text-base font-semibold shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors inline-flex items-center gap-2" }, Ya = ["href"], Xa = { class: "absolute bottom-10 left-0 w-full z-20" }, Ja = { class: "container mx-auto px-4 md:px-6 flex gap-3" }, to = ["onClick", "aria-label"], eo = { class: "py-24 bg-white border-b border-border" }, ro = { class: "container mx-auto px-4 md:px-6" }, ao = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center"
}, oo = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, no = { class: "h-12 w-12 rounded-full bg-white flex items-center justify-center border border-border shadow-sm mb-6 group-hover:scale-110 transition-transform" }, io = { class: "text-lg font-bold mb-2" }, so = { class: "text-muted-foreground" }, lo = {
  id: "about",
  class: "py-24 bg-card/50 relative overflow-hidden"
}, co = { class: "container mx-auto px-4 md:px-6 relative z-10" }, po = { class: "flex flex-col lg:flex-row gap-16 items-center" }, uo = { class: "lg:w-1/2" }, ho = { class: "space-y-4" }, go = { class: "mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0" }, fo = { class: "font-medium text-foreground/80" }, mo = { class: "lg:w-1/2 w-full" }, vo = { class: "relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-border p-8" }, xo = { class: "flex flex-col gap-6" }, bo = { class: "flex justify-center" }, wo = { class: "px-6 py-3 rounded-xl bg-card border border-border shadow-sm flex items-center gap-3" }, yo = { class: "flex justify-center text-muted-foreground" }, ko = { class: "p-6 rounded-2xl bg-primary text-primary-foreground shadow-lg flex items-center gap-4" }, Co = { class: "h-12 w-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0" }, _o = { class: "flex justify-between px-10 text-muted-foreground" }, Ao = { class: "flex gap-4" }, Eo = { class: "flex-1 px-4 py-4 rounded-xl bg-card border border-border shadow-sm flex flex-col items-center text-center" }, Ro = { class: "flex-1 px-4 py-4 rounded-xl bg-card border border-border shadow-sm flex flex-col items-center text-center" }, Lo = {
  id: "model",
  class: "py-24 bg-white"
}, Mo = { class: "container mx-auto px-4 md:px-6" }, No = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, Io = { class: "font-bold text-lg mb-1" }, So = { class: "text-muted-foreground text-sm mb-3" }, Po = { class: "text-sm text-muted-foreground" }, Bo = {
  id: "features",
  class: "py-24 bg-primary text-primary-foreground relative overflow-hidden"
}, zo = { class: "container mx-auto px-4 md:px-6 relative z-10" }, Oo = { class: "flex flex-col md:flex-row justify-between items-end mb-16 gap-6" }, Vo = {
  key: 0,
  class: "rounded-full px-6 py-2.5 bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors font-medium"
}, Ho = { class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, To = { class: "h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-6" }, jo = { class: "text-2xl font-bold mb-3" }, Do = { class: "text-primary-foreground/70 leading-relaxed" }, Go = { class: "py-24 bg-card/30" }, $o = { class: "container mx-auto px-4 md:px-6" }, Fo = { class: "max-w-4xl mx-auto" }, Uo = { class: "space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent" }, qo = { class: "flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 text-primary font-bold" }, Zo = { class: "w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-border shadow-sm transition-all hover:shadow-md" }, Wo = { class: "font-bold text-lg mb-2" }, Ko = { class: "text-muted-foreground text-sm leading-relaxed" }, Qo = { class: "py-24 bg-white border-y border-border overflow-hidden" }, Yo = { class: "container mx-auto px-4 md:px-6" }, Xo = {
  key: 0,
  class: "relative w-full max-w-5xl mx-auto mb-16"
}, Jo = { class: "relative bg-card rounded-3xl border border-border shadow-inner p-8 md:p-12 overflow-hidden" }, tn = { class: "relative flex flex-col items-center" }, en = { class: "w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl mb-8 z-10" }, rn = { class: "grid grid-cols-2 md:grid-cols-3 gap-4 w-full" }, an = { class: "text-2xl" }, on = { class: "font-bold text-sm" }, nn = { class: "text-primary font-bold text-lg" }, sn = {
  key: 1,
  class: "grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto"
}, ln = { class: "text-3xl md:text-4xl font-bold text-primary mb-1" }, dn = { class: "text-sm font-medium text-muted-foreground uppercase tracking-wider" }, cn = { class: "py-24 bg-card/30" }, pn = { class: "container mx-auto px-4 md:px-6" }, un = { class: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" }, hn = { class: "h-10 w-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0" }, gn = { class: "font-bold text-lg mb-1" }, fn = { class: "text-muted-foreground text-sm" }, mn = {
  id: "analytics",
  class: "py-24 bg-card border-y border-border"
}, vn = { class: "container mx-auto px-4 md:px-6" }, xn = { class: "grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12" }, bn = { class: "space-y-8" }, wn = { class: "flex flex-wrap gap-2 text-sm font-medium items-center" }, yn = { class: "p-6 bg-white border border-primary/20 rounded-2xl shadow-sm relative overflow-hidden" }, kn = { class: "flex flex-col gap-4" }, Cn = { class: "flex items-center gap-4" }, _n = { class: "bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-center" }, An = { class: "w-full overflow-hidden" }, En = ["viewBox"], Rn = ["y1", "x2", "y2"], Ln = ["x", "y"], Mn = ["x", "y"], Nn = ["points"], In = ["points"], Sn = ["cx", "cy"], Pn = ["y"], Bn = ["y"], zn = ["y"], On = ["y"], Vn = { class: "py-24 bg-card/30" }, Hn = { class: "container mx-auto px-4 md:px-6" }, Tn = { class: "mb-20 bg-primary text-primary-foreground rounded-3xl p-10 md:p-14 relative overflow-hidden" }, jn = { class: "relative z-10 max-w-3xl" }, Dn = { class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, Gn = { class: "text-4xl font-bold mb-1" }, $n = { class: "font-semibold mb-1" }, Fn = { class: "text-primary-foreground/60 text-sm" }, Un = { class: "mb-20" }, qn = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, Zn = { class: "flex items-start gap-4 mb-5" }, Wn = { class: "h-12 w-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors" }, Kn = { class: "flex-1" }, Qn = { class: "text-2xl font-bold text-primary" }, Yn = { class: "text-xs text-muted-foreground uppercase tracking-wider" }, Xn = { class: "font-bold text-lg mb-2" }, Jn = { class: "text-sm text-muted-foreground leading-relaxed" }, ti = { class: "bg-white rounded-3xl border border-border p-10 md:p-14 shadow-sm" }, ei = { class: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" }, ri = { class: "space-y-5" }, ai = { class: "flex justify-between items-center mb-3" }, oi = { class: "font-semibold text-sm" }, ni = { class: "text-xs text-muted-foreground font-medium bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-100" }, ii = { class: "flex gap-4 items-center" }, si = { class: "flex-1" }, li = { class: "flex justify-between text-xs text-muted-foreground mb-1" }, di = { class: "font-semibold text-foreground" }, ci = { class: "h-2 bg-secondary rounded-full overflow-hidden" }, pi = { class: "flex-1" }, ui = { class: "flex justify-between text-xs text-muted-foreground mb-1" }, hi = { class: "font-bold text-primary" }, gi = { class: "h-2 bg-secondary rounded-full overflow-hidden" }, fi = ["viewBox"], mi = ["y1", "x2", "y2"], vi = ["x", "y"], xi = ["x", "y", "height"], bi = ["x", "y", "height"], wi = ["x", "y"], yi = ["x", "y"], ki = { class: "mt-12 pt-10 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-6" }, Ci = { class: "text-3xl font-bold text-primary mb-2" }, _i = { class: "font-bold mb-2" }, Ai = { class: "text-sm text-muted-foreground leading-relaxed" }, Ei = { class: "py-24 bg-card/30" }, Ri = { class: "container mx-auto px-4 md:px-6 text-center" }, Li = { class: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" }, Mi = { class: "p-8 rounded-2xl bg-white border border-border shadow-sm flex flex-col h-full opacity-70" }, Ni = { class: "h-12 w-12 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mb-6 mx-auto" }, Ii = { class: "p-8 rounded-2xl bg-primary text-primary-foreground border border-primary shadow-xl flex flex-col h-full md:-translate-y-4" }, Si = { class: "h-12 w-12 bg-white text-primary rounded-full flex items-center justify-center mb-6 mx-auto shadow-inner" }, Pi = { class: "py-32 bg-primary relative overflow-hidden" }, Bi = { class: "container mx-auto px-4 md:px-6 relative z-10 text-center" }, zi = { class: "flex flex-col sm:flex-row gap-4 justify-center" }, Oi = { class: "rounded-full h-14 px-10 text-lg font-bold bg-white text-primary hover:bg-card shadow-xl transition-transform hover:scale-105" }, Vi = ["href"], Hi = {
  key: 0,
  class: "rounded-full h-14 px-10 text-lg font-bold bg-transparent text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm"
}, Ti = { class: "bg-white border-t border-border pt-20 pb-10" }, ji = { class: "container mx-auto px-4 md:px-6" }, Di = { class: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-16" }, Gi = { class: "md:col-span-1" }, $i = ["src"], Fi = {
  key: 0,
  class: "text-sm text-muted-foreground mb-6 max-w-xs"
}, Ui = { key: 0 }, qi = { class: "pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4" }, Zi = { class: "text-sm text-muted-foreground" }, Wi = {
  key: 0,
  class: "flex gap-4"
}, re = 460, dt = 260, Nt = 50, Ki = 20, It = 20, Qi = 40, Gt = 3800, Te = 9e3, ae = 460, je = 340, St = 50, De = 20, ot = 20, Yi = 60, $t = 28, Ge = 6, Xi = /* @__PURE__ */ Ot({
  __name: "LandingPage",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const r = mt(!1), a = mt(!1), o = mt(0), n = mt({
      A: !1,
      B: !1,
      C: !1,
      D: !1,
      E: !1,
      F: !1,
      G: !1,
      H: !1,
      I: !1
    }), p = mt({
      reg_supplier: "/login?redirect=/profile-management/onboarding",
      view_pub: "/publications",
      about_mn: "https://1mn.io"
    });
    let g, x;
    dr(() => {
      g = () => {
        r.value = window.scrollY > 20;
      }, window.addEventListener("scroll", g), x = setInterval(() => {
        o.value = (o.value + 1) % l.length;
      }, 5e3);
    }), cr(() => {
      window.removeEventListener("scroll", g), clearInterval(x);
    });
    const l = [
      { title: "Transform Manufacturing into Global Commerce", image: "/images/hero1.jpg" },
      { title: "One Platform for B2B + B2C Fashion Distribution", image: "/images/hero4.jpg" },
      { title: "AI-Powered Global Supplier Infrastructure", image: "/images/hero3.jpg" },
      { title: "Scale Beyond Borders with Hybrid Aggregation", image: "/images/hero2.jpg" }
    ], h = [
      { title: "Global Storefront Network", icon: ft, desc: "Instant access to global retail channels" },
      { title: "AI-Powered Architecture", icon: Dt, desc: "Predictive demand and automated indexing" },
      { title: "Customs Support", icon: ze, desc: "Frictionless cross-border trade compliance" },
      { title: "B2B Lead Generation", icon: Oe, desc: "Data-driven buyer matching system" }
    ], m = [
      "B2B + B2C hybrid distribution enablement",
      "AI-driven product indexing and cataloging",
      "Frictionless global distribution infrastructure"
    ], c = [
      { icon: Se, title: "AI Forecasting", desc: "Predict demand before it happens", detail: "Algorithms analyze millions of B2C data points to guide B2B production volumes, minimizing dead stock." },
      { icon: te, title: "Consumer Intelligence", desc: "Direct line to market trends", detail: "Retail data flows directly back to manufacturers, aligning production with actual consumer preferences." },
      { icon: ft, title: "Global Sourcing", desc: "Borderless procurement", detail: "Connect with vetted international manufacturers through a single, standardized compliance layer." },
      { icon: Oe, title: "Supplier Growth", desc: "Scale without the overhead", detail: "Access new markets and buyer networks instantly without building individual sales infrastructure." },
      { icon: La, title: "Inventory Optimization", desc: "Lean operations", detail: "Dynamic inventory allocation across global warehouses based on real-time multi-channel demand." },
      { icon: ee, title: "Live Demand Visibility", desc: "End-to-end transparency", detail: "A unified dashboard showing SKU-level performance across all B2B and B2C channels globally." }
    ], u = [
      { icon: ft, title: "Global Market Access", desc: "Instantly reach macro and micro markets worldwide. We handle the localization, translation, and localized pricing strategies automatically." },
      { icon: ee, title: "Fast Inventory Clearance", desc: "Algorithmic liquidations of stagnant inventory across secondary global markets without diluting core brand equity." },
      { icon: te, title: "Total Brand Visibility", desc: "Proprietary indexing ensures your products appear in front of the right buyers precisely when procurement intent is highest." },
      { icon: Dt, title: "AI Architecture", desc: "Built on a proprietary machine learning foundation that automates matching, pricing optimization, and logistics routing." }
    ], f = [
      { title: "Rapid SKU Creation", desc: "Digitize physical samples into commerce-ready listings in minutes, not days." },
      { title: "Unified Commerce", desc: "Manage B2B bulk orders and B2C single-item fulfillment from one dashboard." },
      { title: "Managed Logistics", desc: "MN handles all freight, warehousing, and last-mile delivery globally." },
      { title: "Frictionless Customs", desc: "Automated compliance, duties calculation, and documentation handling." },
      { title: "Transparent Payments", desc: "Guaranteed settlements in local currency with zero FX risk." }
    ], R = [
      { name: "North America", stores: "320+", flag: "🇺🇸" },
      { name: "Europe", stores: "280+", flag: "🇬🇧" },
      { name: "Middle East", stores: "160+", flag: "🇦🇪" },
      { name: "South East Asia", stores: "140+", flag: "🇸🇬" },
      { name: "South Asia", stores: "80+", flag: "🇮🇳" },
      { name: "Oceania", stores: "60+", flag: "🇦🇺" }
    ], I = [
      { label: "Global Storefronts", value: "1000+" },
      { label: "Countries Covered", value: "50+" },
      { label: "Avg. Time to First Sale", value: "14 Days" },
      { label: "Logistics Coverage", value: "100%" }
    ], z = [
      { icon: Jt, title: "Sell through unlimited storefronts", desc: "Tap into our pre-established network of global retail partners instantly." },
      { icon: ft, title: "Global Expansion", desc: "Enter new territories without physical presence or local entities." },
      { icon: Be, title: "Trade Association Access", desc: "Premium introductions and networking within key global trade organizations." },
      { icon: Se, title: "Market Intelligence & Advisory", desc: "Receive bespoke advisory and data on what to produce next based on real demand." }
    ], P = [
      { name: "Jan", traditional: 4e3, hybrid: 4400 },
      { name: "Feb", traditional: 4200, hybrid: 4800 },
      { name: "Mar", traditional: 4100, hybrid: 5200 },
      { name: "Apr", traditional: 4500, hybrid: 6100 },
      { name: "May", traditional: 4300, hybrid: 6800 },
      { name: "Jun", traditional: 4800, hybrid: 8500 }
    ], L = F(() => re - Nt - Ki), _ = F(() => dt - It - Qi);
    function U(q) {
      return Nt + q / (P.length - 1) * L.value;
    }
    function Y(q) {
      return It + _.value - (q - Gt) / (Te - Gt) * _.value;
    }
    const tt = F(
      () => P.map((q, i) => `${U(i)},${Y(q.traditional)}`).join(" ")
    ), W = F(
      () => P.map((q, i) => `${U(i)},${Y(q.hybrid)}`).join(" ")
    ), Vt = [
      { label: `Capacity
Utilization`, before: 60, after: 85 },
      { label: `Profit
(₹ Cr × 10)`, before: 48, after: 85 },
      { label: `Inventory
Efficiency`, before: 55, after: 80 },
      { label: `Export
Revenue`, before: 30, after: 65 }
    ], wt = F(() => ae - St - De), K = F(() => je - ot - Yi), st = F(() => wt.value / Vt.length);
    function yt(q) {
      const i = St + q * st.value, ut = $t * 2 + Ge;
      return i + st.value / 2 - ut / 2;
    }
    function lt(q) {
      return yt(q) + $t + Ge;
    }
    function Ht(q) {
      return St + q * st.value + st.value / 2;
    }
    const kt = [
      { stat: "45M+", label: "SME Manufacturers", sub: "Fragmented and uncoordinated" },
      { stat: "92%", label: "Below Export Threshold", sub: "Missing global distribution" },
      { stat: "$44B", label: "Missed Export Potential", sub: "Captured by Turkey & Vietnam" }
    ], Tt = [
      { icon: ee, title: "Rapid SKU Digitization", detail: "Physical samples converted to commerce-ready global listings in under 48 hours. No photography studio, no catalogue team required.", metric: "48hr", metricLabel: "Avg. Listing Time" },
      { icon: ze, title: "Zero Compliance Burden", detail: "MN manages all international certifications, customs documentation, duties calculation and regulatory filings across 50+ countries.", metric: "50+", metricLabel: "Countries Covered" },
      { icon: Be, title: "Managed Logistics End-to-End", detail: "From factory gate to last-mile delivery globally. No freight broker negotiations, no warehouse coordination — fully handled.", metric: "100%", metricLabel: "Logistics Managed" },
      { icon: Dt, title: "AI-Driven Production Planning", detail: "Replace guesswork with real-time global demand signals. Produce exactly what the market needs, when it needs it.", metric: "30%", metricLabel: "Waste Reduction" },
      { icon: te, title: "Private Label Brand Building", detail: "Transition from anonymous OEM manufacturer to a branded, globally distributed fashion label with our private label infrastructure.", metric: "3x", metricLabel: "Higher Margins" },
      { icon: Jt, title: "Unified B2B + B2C Operations", detail: "Manage wholesale bulk orders and direct-to-consumer retail fulfillment from one intelligent dashboard — simultaneously.", metric: "1", metricLabel: "Unified Platform" }
    ], pt = [
      { label: "Capacity Utilization", before: 60, after: 85, suffix: "%", isAmount: !1 },
      { label: "Annual Profit (₹ Crore)", before: 4.8, after: 8.5, suffix: "Cr", isAmount: !0 },
      { label: "Inventory Efficiency", before: 55, after: 80, suffix: "%", isAmount: !1 },
      { label: "Export Revenue Share", before: 30, after: 65, suffix: "%", isAmount: !1 }
    ], Ct = [
      { title: "Private Label Premium", value: "40–60%", desc: "Higher net margin vs. OEM manufacturing through brand-attributed pricing." },
      { title: "Inventory Carrying Cost", value: "−25%", desc: "Reduced through AI demand forecasting and just-in-time production alignment." },
      { title: "New Revenue Channels", value: "B2B + B2C", desc: "Simultaneous wholesale and retail revenue streams from a single product line." }
    ];
    return (q, i) => {
      const ut = le("RouterLink");
      return k(), E("div", Sa, [
        e("header", {
          class: gt([
            "fixed top-0 w-full z-50 transition-all duration-300",
            r.value ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm py-4" : "bg-transparent py-6"
          ])
        }, [
          e("div", Pa, [
            V(ut, {
              to: "/",
              class: "flex items-center gap-2"
            }, {
              default: Ft(() => [
                e("img", {
                  src: B(He),
                  alt: "MN Supplierhub Logo",
                  class: gt(["h-8 w-auto transition-all duration-300", r.value ? "" : "brightness-0 invert"])
                }, null, 10, Ba)
              ]),
              _: 1
            }),
            i[1] || (i[1] = e("nav", { class: "hidden md:flex items-center gap-8" }, null, -1)),
            e("div", za, [
              e("button", Oa, [
                e("a", {
                  href: p.value.view_pub
                }, " View Publications ", 8, Va)
              ]),
              e("button", Ha, [
                e("a", {
                  href: p.value.reg_supplier
                }, " Register as a Supplier ", 8, Ta)
              ])
            ]),
            e("button", {
              class: "md:hidden p-2",
              onClick: i[0] || (i[0] = (d) => a.value = !a.value)
            }, [
              a.value ? (k(), nt(B(Ve), {
                key: 0,
                class: gt(r.value ? "text-foreground" : "text-white")
              }, null, 8, ["class"])) : (k(), nt(B(Ia), {
                key: 1,
                class: gt(r.value ? "text-foreground" : "text-white")
              }, null, 8, ["class"]))
            ])
          ]),
          a.value ? (k(), E("div", ja, [
            e("button", Da, [
              e("a", {
                href: p.value.view_pub
              }, " View Publications ", 8, Ga)
            ]),
            e("button", $a, [
              e("a", {
                href: p.value.reg_supplier
              }, " Register as a Supplier ", 8, Fa)
            ])
          ])) : et("", !0)
        ], 2),
        e("main", null, [
          e("section", Ua, [
            (k(), E(O, null, T(l, (d, w) => e("div", {
              key: w,
              class: gt(["absolute inset-0 transition-opacity duration-1000", w === o.value ? "opacity-100" : "opacity-0"])
            }, [
              i[2] || (i[2] = e("div", { class: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" }, null, -1)),
              e("img", {
                src: t._p.f.path(`${d.image}`).replace("/src", ""),
                alt: d.title,
                class: "w-full h-full object-cover"
              }, null, 8, qa)
            ], 2)), 64)),
            e("div", Za, [
              e("div", Wa, [
                e("div", Ka, [
                  V(pe, {
                    name: "fade-up",
                    mode: "out-in"
                  }, {
                    default: Ft(() => [
                      (k(), E("h1", {
                        key: `title-${o.value}`,
                        class: "text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                      }, C(l[o.value].title), 1))
                    ]),
                    _: 1
                  }),
                  V(pe, {
                    name: "fade-up",
                    mode: "out-in"
                  }, {
                    default: Ft(() => [
                      (k(), E("p", {
                        key: `desc-${o.value}`,
                        class: "text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-light"
                      }, " MN Supplierhub connects manufacturers, wholesalers and retailers into a unified global commerce ecosystem. "))
                    ]),
                    _: 1
                  }),
                  e("button", Qa, [
                    e("a", {
                      href: p.value.reg_supplier
                    }, " Register as a Supplier ", 8, Ya),
                    V(B(Ie), { class: "h-5 w-5" })
                  ])
                ])
              ])
            ]),
            e("div", Xa, [
              e("div", Ja, [
                (k(), E(O, null, T(l, (d, w) => e("button", {
                  key: w,
                  onClick: (_t) => o.value = w,
                  class: gt(["h-1 rounded-full transition-all duration-300", w === o.value ? "w-12 bg-white" : "w-4 bg-white/30"]),
                  "aria-label": `Go to slide ${w + 1}`
                }, null, 10, to)), 64))
              ])
            ])
          ]),
          e("section", eo, [
            e("div", ro, [
              n.value.A ? (k(), E("div", ao, [...i[3] || (i[3] = [
                X('<div class="flex flex-col items-center" data-v-a6a56ccd><span class="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight" data-v-a6a56ccd>1000+</span><span class="text-muted-foreground font-medium uppercase tracking-wider text-sm" data-v-a6a56ccd>Storefronts</span></div><div class="flex flex-col items-center" data-v-a6a56ccd><span class="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight" data-v-a6a56ccd>50+</span><span class="text-muted-foreground font-medium uppercase tracking-wider text-sm" data-v-a6a56ccd>Countries</span></div><div class="flex flex-col items-center" data-v-a6a56ccd><span class="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight" data-v-a6a56ccd>AI</span><span class="text-muted-foreground font-medium uppercase tracking-wider text-sm" data-v-a6a56ccd>Architecture</span></div><div class="flex flex-col items-center" data-v-a6a56ccd><span class="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight" data-v-a6a56ccd>360°</span><span class="text-muted-foreground font-medium uppercase tracking-wider text-sm" data-v-a6a56ccd>Logistics</span></div>', 4)
              ])])) : et("", !0),
              e("div", oo, [
                (k(), E(O, null, T(h, (d, w) => e("div", {
                  key: w,
                  class: "group p-6 rounded-2xl border border-border/60 bg-card hover:shadow-xl hover:border-border transition-all duration-300"
                }, [
                  e("div", no, [
                    (k(), nt(Rt(d.icon), { class: "h-6 w-6 text-primary" }))
                  ]),
                  e("h3", io, C(d.title), 1),
                  e("p", so, C(d.desc), 1)
                ])), 64))
              ])
            ])
          ]),
          e("section", lo, [
            i[9] || (i[9] = e("div", { class: "absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.03] to-transparent pointer-events-none" }, null, -1)),
            e("div", co, [
              e("div", po, [
                e("div", uo, [
                  i[4] || (i[4] = X('<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-6" data-v-a6a56ccd><span class="flex h-2 w-2 rounded-full bg-primary" data-v-a6a56ccd></span> The Platform </div><h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight" data-v-a6a56ccd> The Infrastructure for Global Fashion Trade </h2><p class="text-lg text-muted-foreground mb-8 leading-relaxed" data-v-a6a56ccd> MN Supplierhub is the operating system for fashion manufacturers, wholesalers, and retailers. We digitize factory floors and connect them directly to global demand through <span class="font-semibold text-foreground" data-v-a6a56ccd>Onamoda Product Central</span> — our centralized fashion product repository. </p>', 3)),
                  e("div", ho, [
                    (k(), E(O, null, T(m, (d, w) => e("div", {
                      key: w,
                      class: "flex items-start gap-3"
                    }, [
                      e("div", go, [
                        V(B(Pe), { class: "h-3 w-3 text-primary" })
                      ]),
                      e("span", fo, C(d), 1)
                    ])), 64))
                  ])
                ]),
                e("div", mo, [
                  e("div", vo, [
                    e("div", xo, [
                      e("div", bo, [
                        e("div", wo, [
                          V(B(Na), { class: "h-5 w-5 text-muted-foreground" }),
                          i[5] || (i[5] = e("span", { class: "font-bold" }, "Fragmented Factories", -1))
                        ])
                      ]),
                      e("div", yo, [
                        V(B(Xt), { class: "h-6 w-6 rotate-45" })
                      ]),
                      e("div", ko, [
                        e("div", Co, [
                          V(B(Dt), { class: "h-6 w-6" })
                        ]),
                        i[6] || (i[6] = e("div", null, [
                          e("h3", { class: "font-bold text-xl" }, "MN Supplierhub AI"),
                          e("p", { class: "text-primary-foreground/70 text-sm" }, "Aggregation & Intelligence Layer")
                        ], -1))
                      ]),
                      e("div", _o, [
                        V(B(Xt), { class: "h-6 w-6 -rotate-45" }),
                        V(B(Xt), { class: "h-6 w-6 rotate-45" })
                      ]),
                      e("div", Ao, [
                        e("div", Eo, [
                          V(B(Jt), { class: "h-6 w-6 text-muted-foreground mb-2" }),
                          i[7] || (i[7] = e("span", { class: "font-bold text-sm" }, "Global B2B Buyers", -1))
                        ]),
                        e("div", Ro, [
                          V(B(ft), { class: "h-6 w-6 text-muted-foreground mb-2" }),
                          i[8] || (i[8] = e("span", { class: "font-bold text-sm" }, "B2C Consumers", -1))
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          e("section", Lo, [
            e("div", Mo, [
              i[10] || (i[10] = e("div", { class: "text-center max-w-3xl mx-auto mb-16" }, [
                e("h2", { class: "text-3xl md:text-5xl font-bold mb-6 tracking-tight" }, "The Hybrid Commerce Advantage"),
                e("p", { class: "text-lg text-muted-foreground" }, " A revolutionary model where B2C consumer data directly informs and optimizes B2B production forecasting, creating a zero-waste supply chain. ")
              ], -1)),
              e("div", No, [
                (k(), E(O, null, T(c, (d, w) => e("div", {
                  key: w,
                  class: "bg-card/50 border border-border shadow-sm hover:shadow-md transition-shadow rounded-2xl p-6"
                }, [
                  (k(), nt(Rt(d.icon), { class: "h-8 w-8 text-primary mb-3" })),
                  e("h3", Io, C(d.title), 1),
                  e("p", So, C(d.desc), 1),
                  e("p", Po, C(d.detail), 1)
                ])), 64))
              ])
            ])
          ]),
          e("section", Bo, [
            i[12] || (i[12] = e("div", {
              class: "absolute inset-0 opacity-10",
              style: { "background-image": "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", "background-size": "32px 32px" }
            }, null, -1)),
            e("div", zo, [
              e("div", Oo, [
                i[11] || (i[11] = e("div", { class: "max-w-2xl" }, [
                  e("h2", { class: "text-3xl md:text-5xl font-bold mb-4 tracking-tight" }, "Enterprise Features"),
                  e("p", { class: "text-lg text-primary-foreground/70" }, "Rigorous tools designed to eliminate supply chain friction.")
                ], -1)),
                n.value.B ? (k(), E("button", Vo, " View All Features ")) : et("", !0)
              ]),
              e("div", Ho, [
                (k(), E(O, null, T(u, (d, w) => e("div", {
                  key: w,
                  class: "group border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition-colors"
                }, [
                  e("div", To, [
                    (k(), nt(Rt(d.icon), { class: "h-6 w-6" }))
                  ]),
                  e("h3", jo, C(d.title), 1),
                  e("p", Do, C(d.desc), 1)
                ])), 64))
              ])
            ])
          ]),
          e("section", Go, [
            e("div", $o, [
              i[13] || (i[13] = e("h2", { class: "text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight" }, "Operational Advantages", -1)),
              e("div", Fo, [
                e("div", Uo, [
                  (k(), E(O, null, T(f, (d, w) => e("div", {
                    key: w,
                    class: "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                  }, [
                    e("div", qo, C(w + 1), 1),
                    e("div", Zo, [
                      e("h3", Wo, C(d.title), 1),
                      e("p", Ko, C(d.desc), 1)
                    ])
                  ])), 64))
                ])
              ])
            ])
          ]),
          e("section", Qo, [
            e("div", Yo, [
              i[17] || (i[17] = X('<div class="text-center max-w-3xl mx-auto mb-16" data-v-a6a56ccd><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-6" data-v-a6a56ccd><span class="flex h-2 w-2 rounded-full bg-primary" data-v-a6a56ccd></span> Global Reach </div><h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight" data-v-a6a56ccd>Unlimited Storefronts. <div data-v-a6a56ccd>One Platform.</div></h2><p class="text-lg text-muted-foreground" data-v-a6a56ccd> Your products, instantly visible across our pre-established global retail network — without building a single sales team. </p></div>', 1)),
              n.value.C ? (k(), E("div", Xo, [
                e("div", Jo, [
                  i[16] || (i[16] = e("div", {
                    class: "absolute inset-0 opacity-[0.04]",
                    style: { "background-image": "radial-gradient(circle at 2px 2px, #333 1px, transparent 0)", "background-size": "24px 24px" }
                  }, null, -1)),
                  e("div", tn, [
                    e("div", en, [
                      V(B(ft), { class: "h-10 w-10" })
                    ]),
                    i[15] || (i[15] = e("p", { class: "text-sm font-bold uppercase tracking-widest text-muted-foreground mb-10" }, "MN Supplierhub Global Network", -1)),
                    e("div", rn, [
                      (k(), E(O, null, T(R, (d, w) => e("div", {
                        key: w,
                        class: "flex items-center gap-3 bg-white rounded-xl border border-border p-4 shadow-sm animate-in"
                      }, [
                        e("span", an, C(d.flag), 1),
                        e("div", null, [
                          e("div", on, C(d.name), 1),
                          e("div", nn, C(d.stores), 1),
                          i[14] || (i[14] = e("div", { class: "text-xs text-muted-foreground" }, "storefronts", -1))
                        ])
                      ])), 64))
                    ])
                  ])
                ])
              ])) : et("", !0),
              n.value.D ? (k(), E("div", sn, [
                (k(), E(O, null, T(I, (d, w) => e("div", { key: w }, [
                  e("div", ln, C(d.value), 1),
                  e("div", dn, C(d.label), 1)
                ])), 64))
              ])) : et("", !0)
            ])
          ]),
          e("section", cn, [
            e("div", pn, [
              i[18] || (i[18] = e("h2", { class: "text-3xl md:text-5xl font-bold mb-4 text-center tracking-tight" }, "Expand Without Limits", -1)),
              i[19] || (i[19] = e("p", { class: "text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16" }, "Every benefit designed to let you focus on manufacturing — we handle everything else.", -1)),
              e("div", un, [
                (k(), E(O, null, T(z, (d, w) => e("div", {
                  key: w,
                  class: "p-6 rounded-2xl bg-white border border-border flex gap-4 shadow-sm"
                }, [
                  e("div", hn, [
                    (k(), nt(Rt(d.icon), { class: "h-5 w-5 text-primary" }))
                  ]),
                  e("div", null, [
                    e("h4", gn, C(d.title), 1),
                    e("p", fn, C(d.desc), 1)
                  ])
                ])), 64))
              ])
            ])
          ]),
          e("section", mn, [
            e("div", vn, [
              i[33] || (i[33] = e("div", { class: "text-center max-w-3xl mx-auto mb-16" }, [
                e("h2", { class: "text-3xl md:text-5xl font-bold mb-6 tracking-tight" }, "The Economics of Aggregation"),
                e("p", { class: "text-lg text-muted-foreground" }, " Moving from a fragmented traditional model to a hybrid ecosystem delivers measurable enterprise value. ")
              ], -1)),
              e("div", xn, [
                e("div", bn, [
                  e("div", null, [
                    i[25] || (i[25] = e("h4", { class: "text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4" }, "Traditional Linear Model", -1)),
                    e("div", wn, [
                      i[20] || (i[20] = e("span", { class: "px-3 py-1 bg-white border border-border rounded" }, "Factory", -1)),
                      V(B(jt), { class: "h-4 w-4 text-muted-foreground" }),
                      i[21] || (i[21] = e("span", { class: "px-3 py-1 bg-white border border-border rounded text-muted-foreground" }, "Agent", -1)),
                      V(B(jt), { class: "h-4 w-4 text-muted-foreground" }),
                      i[22] || (i[22] = e("span", { class: "px-3 py-1 bg-white border border-border rounded text-muted-foreground" }, "Exporter", -1)),
                      V(B(jt), { class: "h-4 w-4 text-muted-foreground" }),
                      i[23] || (i[23] = e("span", { class: "px-3 py-1 bg-white border border-border rounded" }, "Brand", -1)),
                      V(B(jt), { class: "h-4 w-4 text-muted-foreground" }),
                      i[24] || (i[24] = e("span", { class: "px-3 py-1 bg-white border border-border rounded" }, "Consumer", -1))
                    ]),
                    i[26] || (i[26] = e("p", { class: "text-xs text-muted-foreground mt-2" }, "Margin dilution and information loss at every step.", -1))
                  ]),
                  e("div", yn, [
                    i[30] || (i[30] = e("div", { class: "absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" }, null, -1)),
                    i[31] || (i[31] = e("h4", { class: "text-sm font-bold uppercase tracking-wider text-primary mb-4" }, "MN Hybrid Model", -1)),
                    e("div", kn, [
                      e("div", Cn, [
                        i[27] || (i[27] = e("span", { class: "px-4 py-2 bg-primary text-primary-foreground font-bold rounded-lg shadow-md" }, "Factory", -1)),
                        V(B(Ie), { class: "h-5 w-5 text-primary" }),
                        i[28] || (i[28] = e("span", { class: "px-6 py-3 bg-white border-2 border-primary font-bold rounded-xl shadow-sm" }, "MN Aggregator", -1))
                      ]),
                      i[29] || (i[29] = X('<div class="pl-32 flex gap-8 relative" data-v-a6a56ccd><div class="absolute left-[8.5rem] top-[-1rem] bottom-4 w-px bg-primary/30" data-v-a6a56ccd></div><div class="absolute left-[8.5rem] top-1/2 w-4 h-px bg-primary/30" data-v-a6a56ccd></div><div class="flex flex-col gap-4 w-full" data-v-a6a56ccd><span class="px-4 py-2 bg-card border border-border font-medium rounded-lg" data-v-a6a56ccd>B2B Buyers</span><span class="px-4 py-2 bg-card border border-border font-medium rounded-lg" data-v-a6a56ccd>B2C Consumers</span></div></div>', 1))
                    ])
                  ])
                ]),
                e("div", _n, [
                  i[32] || (i[32] = e("h3", { class: "text-xl font-bold mb-6" }, "Revenue Growth Trajectory", -1)),
                  e("div", An, [
                    (k(), E("svg", {
                      viewBox: `0 0 ${re} ${dt}`,
                      class: "w-full",
                      style: { height: "300px" }
                    }, [
                      (k(), E(O, null, T(5, (d) => e("line", {
                        key: d,
                        x1: Nt,
                        y1: It + (d - 1) / 4 * _.value,
                        x2: re - Nt,
                        y2: It + (d - 1) / 4 * _.value,
                        stroke: "#e5e5e5",
                        "stroke-dasharray": "3 3"
                      }, null, 8, Rn)), 64)),
                      (k(), E(O, null, T(P, (d, w) => e("text", {
                        key: `x-${w}`,
                        x: U(w),
                        y: dt - 8,
                        "text-anchor": "middle",
                        fill: "#888",
                        "font-size": "12"
                      }, C(d.name), 9, Ln)), 64)),
                      (k(), E(O, null, T(5, (d) => e("text", {
                        key: `y-${d}`,
                        x: Nt - 10,
                        y: It + (5 - d) / 4 * _.value + 4,
                        "text-anchor": "end",
                        fill: "#888",
                        "font-size": "11"
                      }, C(Math.round(Gt + (d - 1) / 4 * (Te - Gt) / 1e3)) + "k", 9, Mn)), 64)),
                      e("polyline", {
                        points: tt.value,
                        fill: "none",
                        stroke: "#a3a3a3",
                        "stroke-width": "2"
                      }, null, 8, Nn),
                      e("polyline", {
                        points: W.value,
                        fill: "none",
                        stroke: "#333333",
                        "stroke-width": "3"
                      }, null, 8, In),
                      (k(), E(O, null, T(P, (d, w) => e("circle", {
                        key: `dot-${w}`,
                        cx: U(w),
                        cy: Y(d.hybrid),
                        r: "4",
                        fill: "#333"
                      }, null, 8, Sn)), 64)),
                      e("rect", {
                        x: "50",
                        y: dt - 30,
                        width: "10",
                        height: "3",
                        fill: "#a3a3a3"
                      }, null, 8, Pn),
                      e("text", {
                        x: "65",
                        y: dt - 26,
                        fill: "#888",
                        "font-size": "11"
                      }, "Traditional", 8, Bn),
                      e("rect", {
                        x: "150",
                        y: dt - 30,
                        width: "10",
                        height: "3",
                        fill: "#333"
                      }, null, 8, zn),
                      e("text", {
                        x: "165",
                        y: dt - 26,
                        fill: "#888",
                        "font-size": "11"
                      }, "Hybrid Model", 8, On)
                    ], 8, En))
                  ])
                ])
              ]),
              i[34] || (i[34] = X('<div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-a6a56ccd><div class="rounded-2xl border border-border bg-card p-6" data-v-a6a56ccd><p class="text-sm text-muted-foreground mb-1" data-v-a6a56ccd>Estimated Growth</p><p class="text-4xl font-bold text-primary mb-4" data-v-a6a56ccd>+77%</p><div class="flex items-center justify-between text-sm" data-v-a6a56ccd><span class="text-muted-foreground" data-v-a6a56ccd>Profit Simulation</span><span class="font-bold" data-v-a6a56ccd>₹4.8Cr → ₹8.5Cr</span></div><div class="w-full bg-secondary h-2 mt-3 rounded-full overflow-hidden" data-v-a6a56ccd><div class="bg-primary h-full rounded-full" style="width:77%;" data-v-a6a56ccd></div></div></div><div class="rounded-2xl border border-border bg-card p-6" data-v-a6a56ccd><p class="text-sm text-muted-foreground mb-1" data-v-a6a56ccd>Inventory Reduction</p><p class="text-4xl font-bold text-primary mb-4" data-v-a6a56ccd>20–30%</p><p class="text-sm text-muted-foreground" data-v-a6a56ccd>Through AI predictive demand forecasting rather than guesswork.</p></div><div class="rounded-2xl border border-border bg-card p-6" data-v-a6a56ccd><p class="text-sm text-muted-foreground mb-1" data-v-a6a56ccd>Waste Reduction</p><p class="text-4xl font-bold text-primary mb-4" data-v-a6a56ccd>15–25%</p><p class="text-sm text-muted-foreground" data-v-a6a56ccd>Optimized raw material procurement aligned with actual sales data.</p></div></div>', 1))
            ])
          ]),
          e("section", Vn, [
            e("div", Hn, [
              i[46] || (i[46] = X('<div class="text-center max-w-3xl mx-auto mb-20" data-v-a6a56ccd><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-6" data-v-a6a56ccd><span class="flex h-2 w-2 rounded-full bg-primary" data-v-a6a56ccd></span> Why India. Why Now. </div><h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight" data-v-a6a56ccd>Why Indian Suppliers Should Adapt Now</h2><p class="text-lg text-muted-foreground leading-relaxed" data-v-a6a56ccd> India possesses the world&#39;s most versatile textile base — 6,000+ year legacy in craft, the second-largest cotton producer globally, unmatched product diversity. Yet its export share is a fraction of its true potential. The single barrier: coordination infrastructure. MN Supplierhub is that infrastructure. </p></div>', 1)),
              e("div", Tn, [
                i[37] || (i[37] = e("div", {
                  class: "absolute inset-0 opacity-10",
                  style: { "background-image": "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", "background-size": "28px 28px" }
                }, null, -1)),
                e("div", jn, [
                  i[35] || (i[35] = e("h3", { class: "text-2xl md:text-3xl font-bold mb-4" }, "India's Fragmentation Problem", -1)),
                  i[36] || (i[36] = e("p", { class: "text-primary-foreground/80 mb-8 leading-relaxed text-lg" }, " India has over 45 million SME manufacturers in textiles and apparel. Yet 92% operate below ₹1 crore in annual export revenue. The problem is not capability — it is coordination, visibility, and access. ", -1)),
                  e("div", Dn, [
                    (k(), E(O, null, T(kt, (d, w) => e("div", {
                      key: w,
                      class: "bg-white/10 rounded-2xl p-6 text-center border border-white/10"
                    }, [
                      e("div", Gn, C(d.stat), 1),
                      e("div", $n, C(d.label), 1),
                      e("div", Fn, C(d.sub), 1)
                    ])), 64))
                  ])
                ])
              ]),
              e("div", Un, [
                i[38] || (i[38] = e("h3", { class: "text-2xl md:text-3xl font-bold mb-4 text-center" }, "Operational Advantages", -1)),
                i[39] || (i[39] = e("p", { class: "text-muted-foreground text-center mb-12 max-w-2xl mx-auto" }, "Every operational barrier that keeps Indian suppliers out of global markets — resolved by MN Supplierhub.", -1)),
                e("div", qn, [
                  (k(), E(O, null, T(Tt, (d, w) => e("div", {
                    key: w,
                    class: "bg-white rounded-2xl border border-border p-7 shadow-sm hover:shadow-lg transition-all group"
                  }, [
                    e("div", Zn, [
                      e("div", Wn, [
                        (k(), nt(Rt(d.icon), { class: "h-6 w-6 text-primary group-hover:text-white transition-colors" }))
                      ]),
                      e("div", Kn, [
                        e("div", Qn, C(d.metric), 1),
                        e("div", Yn, C(d.metricLabel), 1)
                      ])
                    ]),
                    e("h4", Xn, C(d.title), 1),
                    e("p", Jn, C(d.detail), 1)
                  ])), 64))
                ])
              ]),
              e("div", ti, [
                i[45] || (i[45] = e("div", { class: "text-center mb-12" }, [
                  e("h3", { class: "text-2xl md:text-3xl font-bold mb-3" }, "Financial Impact Projection"),
                  e("p", { class: "text-muted-foreground max-w-2xl mx-auto" }, "A representative Indian mid-size apparel factory — before and after joining the MN Supplierhub ecosystem.")
                ], -1)),
                e("div", ei, [
                  e("div", ri, [
                    (k(), E(O, null, T(pt, (d, w) => e("div", {
                      key: w,
                      class: "rounded-xl border border-border p-5 bg-card/30"
                    }, [
                      e("div", ai, [
                        e("span", oi, C(d.label), 1),
                        e("span", ni, " +" + C(Math.round((d.after - d.before) / d.before * 100)) + "% ", 1)
                      ]),
                      e("div", ii, [
                        e("div", si, [
                          e("div", li, [
                            i[40] || (i[40] = e("span", null, "Before", -1)),
                            e("span", di, C(d.before) + C(d.suffix), 1)
                          ]),
                          e("div", ci, [
                            e("div", {
                              class: "h-full bg-muted-foreground/40 rounded-full",
                              style: ue({ width: `${d.isAmount ? d.before / d.after * 100 : d.before}%` })
                            }, null, 4)
                          ])
                        ]),
                        e("div", pi, [
                          e("div", ui, [
                            i[41] || (i[41] = e("span", null, "After", -1)),
                            e("span", hi, C(d.after) + C(d.suffix), 1)
                          ]),
                          e("div", gi, [
                            e("div", {
                              class: "h-full bg-primary rounded-full",
                              style: ue({ width: `${d.isAmount ? 100 : d.after}%` })
                            }, null, 4)
                          ])
                        ])
                      ])
                    ])), 64)),
                    i[42] || (i[42] = X('<div class="rounded-xl bg-primary text-primary-foreground p-6 flex items-center justify-between" data-v-a6a56ccd><div data-v-a6a56ccd><div class="text-sm text-primary-foreground/70 mb-1" data-v-a6a56ccd>Net Estimated Profit Uplift</div><div class="text-4xl font-bold" data-v-a6a56ccd>+₹3.7 Crore</div><div class="text-primary-foreground/60 text-sm mt-1" data-v-a6a56ccd>₹4.8 Cr → ₹8.5 Cr annually</div></div><div class="text-right" data-v-a6a56ccd><div class="text-5xl font-bold opacity-90" data-v-a6a56ccd>+77%</div><div class="text-primary-foreground/60 text-sm" data-v-a6a56ccd>Estimated growth</div></div></div>', 1))
                  ]),
                  e("div", null, [
                    i[43] || (i[43] = e("h4", { class: "text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6 text-center" }, "Before vs After — Key Metrics", -1)),
                    (k(), E("svg", {
                      viewBox: `0 0 ${ae} ${je}`,
                      class: "w-full",
                      style: { height: "340px" }
                    }, [
                      (k(), E(O, null, T(5, (d) => e("line", {
                        key: d,
                        x1: St,
                        y1: ot + (d - 1) / 4 * K.value,
                        x2: ae - De,
                        y2: ot + (d - 1) / 4 * K.value,
                        stroke: "#e5e5e5",
                        "stroke-dasharray": "3 3"
                      }, null, 8, mi)), 64)),
                      (k(), E(O, null, T(5, (d) => e("text", {
                        key: `y-${d}`,
                        x: St - 8,
                        y: ot + (5 - d) / 4 * K.value + 4,
                        "text-anchor": "end",
                        fill: "#888",
                        "font-size": "11"
                      }, C(Math.round((d - 1) / 4 * 100)) + "%", 9, vi)), 64)),
                      (k(), E(O, null, T(Vt, (d, w) => (k(), E(O, {
                        key: `bar-${w}`
                      }, [
                        e("rect", {
                          x: yt(w),
                          y: ot + K.value - d.before / 100 * K.value,
                          width: $t,
                          height: d.before / 100 * K.value,
                          fill: "#d1d5db",
                          rx: "4"
                        }, null, 8, xi),
                        e("rect", {
                          x: lt(w),
                          y: ot + K.value - d.after / 100 * K.value,
                          width: $t,
                          height: d.after / 100 * K.value,
                          fill: "#333333",
                          rx: "4"
                        }, null, 8, bi),
                        e("text", {
                          x: Ht(w),
                          y: ot + K.value + 16,
                          "text-anchor": "middle",
                          fill: "#888",
                          "font-size": "10"
                        }, C(d.label.split(`
`)[0]), 9, wi),
                        e("text", {
                          x: Ht(w),
                          y: ot + K.value + 28,
                          "text-anchor": "middle",
                          fill: "#888",
                          "font-size": "10"
                        }, C(d.label.split(`
`)[1] || ""), 9, yi)
                      ], 64))), 64))
                    ], 8, fi)),
                    i[44] || (i[44] = X('<div class="flex gap-6 justify-center mt-2 text-sm" data-v-a6a56ccd><div class="flex items-center gap-2" data-v-a6a56ccd><div class="h-3 w-3 rounded bg-gray-300" data-v-a6a56ccd></div><span class="text-muted-foreground" data-v-a6a56ccd>Before MN Supplierhub</span></div><div class="flex items-center gap-2" data-v-a6a56ccd><div class="h-3 w-3 rounded bg-primary" data-v-a6a56ccd></div><span class="text-muted-foreground" data-v-a6a56ccd>After MN Supplierhub</span></div></div>', 1))
                  ])
                ]),
                e("div", ki, [
                  (k(), E(O, null, T(Ct, (d, w) => e("div", {
                    key: w,
                    class: "text-center p-6 bg-card/50 rounded-2xl border border-border"
                  }, [
                    e("div", Ci, C(d.value), 1),
                    e("div", _i, C(d.title), 1),
                    e("div", Ai, C(d.desc), 1)
                  ])), 64))
                ])
              ])
            ])
          ]),
          e("section", Ei, [
            e("div", Ri, [
              i[49] || (i[49] = e("h2", { class: "text-3xl md:text-5xl font-bold mb-16 tracking-tight" }, "Industry Transformation", -1)),
              e("div", Li, [
                e("div", Mi, [
                  e("div", Ni, [
                    V(B(Ve), { class: "h-6 w-6" })
                  ]),
                  i[47] || (i[47] = X('<h3 class="text-xl font-bold mb-4" data-v-a6a56ccd>Without Aggregation</h3><ul class="space-y-4 text-left mt-auto" data-v-a6a56ccd><li class="flex gap-3 text-muted-foreground" data-v-a6a56ccd><span class="text-destructive font-bold" data-v-a6a56ccd>•</span> Fragmented order volumes</li><li class="flex gap-3 text-muted-foreground" data-v-a6a56ccd><span class="text-destructive font-bold" data-v-a6a56ccd>•</span> High middleman dependency</li><li class="flex gap-3 text-muted-foreground" data-v-a6a56ccd><span class="text-destructive font-bold" data-v-a6a56ccd>•</span> Razor-thin production margins</li><li class="flex gap-3 text-muted-foreground" data-v-a6a56ccd><span class="text-destructive font-bold" data-v-a6a56ccd>•</span> Zero brand equity built</li></ul>', 2))
                ]),
                e("div", Ii, [
                  e("div", Si, [
                    V(B(Pe), { class: "h-6 w-6" })
                  ]),
                  i[48] || (i[48] = X('<h3 class="text-xl font-bold mb-4 text-white" data-v-a6a56ccd>With MN Hybrid Aggregation</h3><ul class="space-y-4 text-left mt-auto" data-v-a6a56ccd><li class="flex gap-3" data-v-a6a56ccd><span class="text-white font-bold" data-v-a6a56ccd>✓</span> AI-driven ecosystem matching</li><li class="flex gap-3" data-v-a6a56ccd><span class="text-white font-bold" data-v-a6a56ccd>✓</span> Global direct-to-buyer infrastructure</li><li class="flex gap-3" data-v-a6a56ccd><span class="text-white font-bold" data-v-a6a56ccd>✓</span> Premium margin capture</li><li class="flex gap-3" data-v-a6a56ccd><span class="text-white font-bold" data-v-a6a56ccd>✓</span> Long-term brand building capacity</li></ul>', 2))
                ])
              ])
            ])
          ]),
          e("section", Pi, [
            i[52] || (i[52] = e("div", { class: "absolute inset-0 bg-gradient-to-br from-primary via-primary to-black z-0" }, null, -1)),
            i[53] || (i[53] = e("div", { class: "absolute top-0 left-0 w-full h-px bg-white/20" }, null, -1)),
            e("div", Bi, [
              i[50] || (i[50] = e("h2", { class: "text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight" }, " Scale Your Fashion Business Beyond Borders ", -1)),
              i[51] || (i[51] = e("p", { class: "text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light" }, " Join the next generation hybrid commerce infrastructure for fashion suppliers. Let data drive your production and our network drive your sales. ", -1)),
              e("div", zi, [
                e("button", Oi, [
                  e("a", {
                    href: p.value.reg_supplier
                  }, " Register as a Supplier ", 8, Vi)
                ]),
                n.value.E ? (k(), E("button", Hi, " Contact Enterprise Team ")) : et("", !0)
              ])
            ])
          ])
        ]),
        e("footer", Ti, [
          e("div", ji, [
            e("div", Di, [
              e("div", Gi, [
                e("img", {
                  src: B(He),
                  alt: "MN Supplierhub Logo",
                  class: "h-8 w-auto mb-6"
                }, null, 8, $i),
                n.value.G ? (k(), E("p", Fi, " The global infrastructure that connects Indian and global fashion manufacturers into a unified hybrid commerce ecosystem. ")) : et("", !0)
              ]),
              i[55] || (i[55] = e("div", null, [
                e("h4", { class: "font-bold text-foreground mb-4 uppercase tracking-wider text-sm" }, "Company"),
                e("ul", { class: "space-y-3 text-sm text-muted-foreground" }, [
                  e("li", null, [
                    e("a", {
                      href: "https://1mn.io",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "hover:text-primary transition-colors"
                    }, "About MN Group")
                  ]),
                  e("li", null, [
                    e("a", {
                      href: "/policies",
                      class: "hover:text-primary transition-colors"
                    }, "Terms & Conditions")
                  ])
                ])
              ], -1)),
              n.value.F ? (k(), E("div", Ui, [...i[54] || (i[54] = [
                e("h4", { class: "font-bold text-foreground mb-4 uppercase tracking-wider text-sm" }, "Contact", -1),
                e("ul", { class: "space-y-3 text-sm text-muted-foreground" }, [
                  e("li", null, [
                    e("a", {
                      href: "https://1mn.io",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "hover:text-primary transition-colors"
                    }, "1mn.io")
                  ]),
                  e("li", null, [
                    e("a", {
                      href: "#",
                      class: "hover:text-primary transition-colors"
                    }, "Register as a Supplier")
                  ])
                ], -1)
              ])])) : et("", !0)
            ]),
            e("div", qi, [
              e("p", Zi, "© " + C((/* @__PURE__ */ new Date()).getFullYear()) + " MN Group. All rights reserved.", 1),
              n.value.I ? (k(), E("div", Wi, [...i[56] || (i[56] = [
                X('<a href="#" class="text-muted-foreground hover:text-primary transition-colors" data-v-a6a56ccd><span class="sr-only" data-v-a6a56ccd>LinkedIn</span><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-v-a6a56ccd><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" data-v-a6a56ccd></path></svg></a><a href="#" class="text-muted-foreground hover:text-primary transition-colors" data-v-a6a56ccd><span class="sr-only" data-v-a6a56ccd>Twitter</span><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-v-a6a56ccd><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" data-v-a6a56ccd></path></svg></a>', 2)
              ])])) : et("", !0)
            ])
          ])
        ])
      ]);
    };
  }
}), Ji = /* @__PURE__ */ ar(Xi, [["__scopeId", "data-v-a6a56ccd"]]), ts = { class: "min-h-screen w-full flex items-center justify-center bg-gray-50" }, es = { class: "w-full max-w-md mx-4 bg-white rounded-xl border border-gray-200 shadow-sm p-6" }, rs = { class: "flex mb-4 gap-2 items-center" }, as = /* @__PURE__ */ Ot({
  __name: "NotFound",
  setup(t) {
    return (r, a) => {
      const o = le("RouterLink");
      return k(), E("div", ts, [
        e("div", es, [
          e("div", rs, [
            V(B(Ma), { class: "h-8 w-8 text-red-500" }),
            a[0] || (a[0] = e("h1", { class: "text-2xl font-bold text-gray-900" }, "404 Page Not Found", -1))
          ]),
          a[2] || (a[2] = e("p", { class: "mt-4 text-sm text-gray-600" }, " Did you forget to add the page to the router? ", -1)),
          V(o, {
            to: "/",
            class: "mt-6 inline-block text-sm text-primary hover:underline"
          }, {
            default: Ft(() => [...a[1] || (a[1] = [
              pr(" Go back home ", -1)
            ])]),
            _: 1
          })
        ])
      ]);
    };
  }
}), os = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap";@layer components;@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-content:"";--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-animation-delay:0s;--tw-animation-direction:normal;--tw-animation-duration:initial;--tw-animation-fill-mode:none;--tw-animation-iteration-count:1;--tw-enter-blur:0;--tw-enter-opacity:1;--tw-enter-rotate:0;--tw-enter-scale:1;--tw-enter-translate-x:0;--tw-enter-translate-y:0;--tw-exit-blur:0;--tw-exit-opacity:1;--tw-exit-rotate:0;--tw-exit-scale:1;--tw-exit-translate-x:0;--tw-exit-translate-y:0}}}@layer theme{:root,:host{--color-red-500:oklch(63.7% .237 25.331);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-700:oklch(52.7% .154 150.069);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-md:28rem;--container-2xl:42rem;--container-3xl:48rem;--container-4xl:56rem;--container-5xl:64rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--text-5xl:3rem;--text-5xl--line-height:1;--text-6xl:3.75rem;--text-6xl--line-height:1;--text-7xl:4.5rem;--text-7xl--line-height:1;--font-weight-light:300;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wider:.05em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-2xl:1rem;--radius-3xl:1.5rem;--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--app-font-sans);--default-mono-font-family:var(--app-font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));font-family:var(--app-font-sans);color:hsl(var(--foreground));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}}@layer utilities{.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.top-1\\/2{top:50%}.top-\\[-1rem\\]{top:-1rem}.top-full{top:100%}.right-0{right:calc(var(--spacing)*0)}.bottom-4{bottom:calc(var(--spacing)*4)}.bottom-10{bottom:calc(var(--spacing)*10)}.left-0{left:calc(var(--spacing)*0)}.left-\\[8\\.5rem\\]{left:8.5rem}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-50{z-index:50}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-4{margin-inline:calc(var(--spacing)*4)}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-12{margin-top:calc(var(--spacing)*12)}.mt-auto{margin-top:auto}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.mb-10{margin-bottom:calc(var(--spacing)*10)}.mb-12{margin-bottom:calc(var(--spacing)*12)}.mb-16{margin-bottom:calc(var(--spacing)*16)}.mb-20{margin-bottom:calc(var(--spacing)*20)}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.h-1{height:calc(var(--spacing)*1)}.h-2{height:calc(var(--spacing)*2)}.h-3{height:calc(var(--spacing)*3)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-14{height:calc(var(--spacing)*14)}.h-20{height:calc(var(--spacing)*20)}.h-32{height:calc(var(--spacing)*32)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-1\\/3{width:33.3333%}.w-2{width:calc(var(--spacing)*2)}.w-3{width:calc(var(--spacing)*3)}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-12{width:calc(var(--spacing)*12)}.w-20{width:calc(var(--spacing)*20)}.w-32{width:calc(var(--spacing)*32)}.w-\\[calc\\(100\\%-4rem\\)\\]{width:calc(100% - 4rem)}.w-auto{width:auto}.w-full{width:100%}.w-px{width:1px}.max-w-2xl{max-width:var(--container-2xl)}.max-w-3xl{max-width:var(--container-3xl)}.max-w-4xl{max-width:var(--container-4xl)}.max-w-5xl{max-width:var(--container-5xl)}.max-w-md{max-width:var(--container-md)}.max-w-xs{max-width:var(--container-xs)}.flex-1{flex:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.-rotate-45{rotate:-45deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-in{animation:enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}.gap-8{gap:calc(var(--spacing)*8)}.gap-12{gap:calc(var(--spacing)*12)}.gap-16{gap:calc(var(--spacing)*16)}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*5)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-8>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*8)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*8)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-12>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*12)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*12)*calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.rounded-bl-full{border-bottom-left-radius:3.40282e38px}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-border,.border-border\\/60{border-color:hsl(var(--border))}@supports (color:color-mix(in lab,red,red)){.border-border\\/60{border-color:color-mix(in oklab,hsl(var(--border))60%,transparent)}}.border-gray-200{border-color:var(--color-gray-200)}.border-green-100{border-color:var(--color-green-100)}.border-primary,.border-primary\\/10{border-color:hsl(var(--primary))}@supports (color:color-mix(in lab,red,red)){.border-primary\\/10{border-color:color-mix(in oklab,hsl(var(--primary))10%,transparent)}}.border-primary\\/20{border-color:hsl(var(--primary))}@supports (color:color-mix(in lab,red,red)){.border-primary\\/20{border-color:color-mix(in oklab,hsl(var(--primary))20%,transparent)}}.border-white\\/10{border-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.border-white\\/10{border-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.border-white\\/20{border-color:#fff3}@supports (color:color-mix(in lab,red,red)){.border-white\\/20{border-color:color-mix(in oklab,var(--color-white)20%,transparent)}}.border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.border-white\\/30{border-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.bg-background{background-color:hsl(var(--background))}.bg-black{background-color:var(--color-black)}.bg-card,.bg-card\\/30{background-color:hsl(var(--card))}@supports (color:color-mix(in lab,red,red)){.bg-card\\/30{background-color:color-mix(in oklab,hsl(var(--card))30%,transparent)}}.bg-card\\/50{background-color:hsl(var(--card))}@supports (color:color-mix(in lab,red,red)){.bg-card\\/50{background-color:color-mix(in oklab,hsl(var(--card))50%,transparent)}}.bg-destructive\\/10{background-color:hsl(var(--destructive))}@supports (color:color-mix(in lab,red,red)){.bg-destructive\\/10{background-color:color-mix(in oklab,hsl(var(--destructive))10%,transparent)}}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-green-50{background-color:var(--color-green-50)}.bg-muted-foreground\\/40{background-color:hsl(var(--muted-foreground))}@supports (color:color-mix(in lab,red,red)){.bg-muted-foreground\\/40{background-color:color-mix(in oklab,hsl(var(--muted-foreground))40%,transparent)}}.bg-primary,.bg-primary\\/5{background-color:hsl(var(--primary))}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/5{background-color:color-mix(in oklab,hsl(var(--primary))5%,transparent)}}.bg-primary\\/10{background-color:hsl(var(--primary))}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/10{background-color:color-mix(in oklab,hsl(var(--primary))10%,transparent)}}.bg-primary\\/30{background-color:hsl(var(--primary))}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/30{background-color:color-mix(in oklab,hsl(var(--primary))30%,transparent)}}.bg-secondary{background-color:hsl(var(--secondary))}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/5{background-color:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.bg-white\\/5{background-color:color-mix(in oklab,var(--color-white)5%,transparent)}}.bg-white\\/10{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.bg-white\\/10{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.bg-white\\/20{background-color:#fff3}@supports (color:color-mix(in lab,red,red)){.bg-white\\/20{background-color:color-mix(in oklab,var(--color-white)20%,transparent)}}.bg-white\\/30{background-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.bg-white\\/30{background-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white)90%,transparent)}}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-l{--tw-gradient-position:to left in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab,var(--color-black)80%,transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-primary{--tw-gradient-from:hsl(var(--primary));--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-primary\\/\\[0\\.03\\]{--tw-gradient-from:hsl(var(--primary))}@supports (color:color-mix(in lab,red,red)){.from-primary\\/\\[0\\.03\\]{--tw-gradient-from:color-mix(in oklab,hsl(var(--primary))3%,transparent)}}.from-primary\\/\\[0\\.03\\]{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.via-black\\/50{--tw-gradient-via:#00000080}@supports (color:color-mix(in lab,red,red)){.via-black\\/50{--tw-gradient-via:color-mix(in oklab,var(--color-black)50%,transparent)}}.via-black\\/50{--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.via-primary{--tw-gradient-via:hsl(var(--primary));--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-black{--tw-gradient-to:var(--color-black);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.object-cover{object-fit:cover}.p-2{padding:calc(var(--spacing)*2)}.p-4{padding:calc(var(--spacing)*4)}.p-5{padding:calc(var(--spacing)*5)}.p-6{padding:calc(var(--spacing)*6)}.p-7{padding:calc(var(--spacing)*7)}.p-8{padding:calc(var(--spacing)*8)}.p-10{padding:calc(var(--spacing)*10)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.px-10{padding-inline:calc(var(--spacing)*10)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-6{padding-block:calc(var(--spacing)*6)}.py-24{padding-block:calc(var(--spacing)*24)}.py-32{padding-block:calc(var(--spacing)*32)}.pt-8{padding-top:calc(var(--spacing)*8)}.pt-10{padding-top:calc(var(--spacing)*10)}.pt-20{padding-top:calc(var(--spacing)*20)}.pb-10{padding-bottom:calc(var(--spacing)*10)}.pl-32{padding-left:calc(var(--spacing)*32)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.font-sans{font-family:var(--app-font-sans)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-light{--tw-font-weight:var(--font-weight-light);font-weight:var(--font-weight-light)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-destructive{color:hsl(var(--destructive))}.text-foreground,.text-foreground\\/80{color:hsl(var(--foreground))}@supports (color:color-mix(in lab,red,red)){.text-foreground\\/80{color:color-mix(in oklab,hsl(var(--foreground))80%,transparent)}}.text-gray-600{color:var(--color-gray-600)}.text-gray-900{color:var(--color-gray-900)}.text-green-700{color:var(--color-green-700)}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground,.text-primary-foreground\\/60{color:hsl(var(--primary-foreground))}@supports (color:color-mix(in lab,red,red)){.text-primary-foreground\\/60{color:color-mix(in oklab,hsl(var(--primary-foreground))60%,transparent)}}.text-primary-foreground\\/70{color:hsl(var(--primary-foreground))}@supports (color:color-mix(in lab,red,red)){.text-primary-foreground\\/70{color:color-mix(in oklab,hsl(var(--primary-foreground))70%,transparent)}}.text-primary-foreground\\/80{color:hsl(var(--primary-foreground))}@supports (color:color-mix(in lab,red,red)){.text-primary-foreground\\/80{color:color-mix(in oklab,hsl(var(--primary-foreground))80%,transparent)}}.text-red-500{color:var(--color-red-500)}.text-white{color:var(--color-white)}.text-white\\/80{color:#fffc}@supports (color:color-mix(in lab,red,red)){.text-white\\/80{color:color-mix(in oklab,var(--color-white)80%,transparent)}}.uppercase{text-transform:uppercase}.opacity-0{opacity:0}.opacity-10{opacity:.1}.opacity-70{opacity:.7}.opacity-90{opacity:.9}.opacity-100{opacity:1}.opacity-\\[0\\.04\\]{opacity:.04}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.brightness-0{--tw-brightness:brightness(0%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-shadow{transition-property:box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-1000{--tw-duration:1s;transition-duration:1s}@media(hover:hover){.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x)var(--tw-scale-y)}.group-hover\\:border-primary:is(:where(.group):hover *){border-color:hsl(var(--primary))}.group-hover\\:bg-primary:is(:where(.group):hover *){background-color:hsl(var(--primary))}.group-hover\\:text-white:is(:where(.group):hover *){color:var(--color-white)}}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:inset-0:before{content:var(--tw-content);inset:calc(var(--spacing)*0)}.before\\:ml-5:before{content:var(--tw-content);margin-left:calc(var(--spacing)*5)}.before\\:h-full:before{content:var(--tw-content);height:100%}.before\\:w-0\\.5:before{content:var(--tw-content);width:calc(var(--spacing)*.5)}.before\\:-translate-x-px:before{content:var(--tw-content);--tw-translate-x:-1px;translate:var(--tw-translate-x)var(--tw-translate-y)}.before\\:bg-gradient-to-b:before{content:var(--tw-content);--tw-gradient-position:to bottom in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.before\\:from-transparent:before{content:var(--tw-content);--tw-gradient-from:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.before\\:via-border:before{content:var(--tw-content);--tw-gradient-via:hsl(var(--border));--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.before\\:to-transparent:before{content:var(--tw-content);--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.hover\\:border-border:hover{border-color:hsl(var(--border))}.hover\\:bg-card:hover{background-color:hsl(var(--card))}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary))}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/90:hover{background-color:color-mix(in oklab,hsl(var(--primary))90%,transparent)}}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/10:hover{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.hover\\:text-primary:hover{color:hsl(var(--primary))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}}@media(min-width:48rem){.md\\:order-1{order:1}.md\\:col-span-1{grid-column:span 1/span 1}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-\\[calc\\(50\\%-2\\.5rem\\)\\]{width:calc(50% - 2.5rem)}.md\\:-translate-y-4{--tw-translate-y:calc(var(--spacing)*-4);translate:var(--tw-translate-x)var(--tw-translate-y)}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:justify-normal{justify-content:normal}.md\\:p-8{padding:calc(var(--spacing)*8)}.md\\:p-12{padding:calc(var(--spacing)*12)}.md\\:p-14{padding:calc(var(--spacing)*14)}.md\\:px-6{padding-inline:calc(var(--spacing)*6)}.md\\:text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.md\\:text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.md\\:text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.md\\:text-6xl{font-size:var(--text-6xl);line-height:var(--tw-leading,var(--text-6xl--line-height))}.md\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.md\\:group-odd\\:-translate-x-1\\/2:is(:where(.group):nth-child(odd) *){--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.md\\:group-even\\:translate-x-1\\/2:is(:where(.group):nth-child(2n) *){--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.md\\:before\\:mx-auto:before{content:var(--tw-content);margin-inline:auto}.md\\:before\\:translate-x-0:before{content:var(--tw-content);--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.md\\:odd\\:flex-row-reverse:nth-child(odd){flex-direction:row-reverse}}@media(min-width:64rem){.lg\\:w-1\\/2{width:50%}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:text-7xl{font-size:var(--text-7xl);line-height:var(--tw-leading,var(--text-7xl--line-height))}}input[type=search]::-webkit-search-cancel-button{display:none}[contenteditable][data-placeholder]:empty:before{content:attr(data-placeholder);color:hsl(var(--muted-foreground));pointer-events:none}.toggle-elevate:before,.toggle-elevate-2:before{content:"";pointer-events:none;border-radius:inherit;z-index:-1;position:absolute;inset:0}.toggle-elevate.toggle-elevated:before{background-color:var(--elevate-2)}.border.toggle-elevate:before{inset:-1px}.hover-elevate:not(.no-default-hover-elevate),.active-elevate:not(.no-default-active-elevate),.hover-elevate-2:not(.no-default-hover-elevate),.active-elevate-2:not(.no-default-active-elevate){z-index:0;position:relative}.hover-elevate:not(.no-default-hover-elevate):after,.active-elevate:not(.no-default-active-elevate):after,.hover-elevate-2:not(.no-default-hover-elevate):after,.active-elevate-2:not(.no-default-active-elevate):after{content:"";pointer-events:none;border-radius:inherit;z-index:999;position:absolute;inset:0}.hover-elevate:hover:not(.no-default-hover-elevate):after,.active-elevate:active:not(.no-default-active-elevate):after{background-color:var(--elevate-1)}.hover-elevate-2:hover:not(.no-default-hover-elevate):after,.active-elevate-2:active:not(.no-default-active-elevate):after{background-color:var(--elevate-2)}.border.hover-elevate:not(.no-hover-interaction-elevate):after,.border.active-elevate:not(.no-active-interaction-elevate):after,.border.hover-elevate-2:not(.no-hover-interaction-elevate):after,.border.active-elevate-2:not(.no-active-interaction-elevate):after{inset:-1px}}@property --tw-animation-delay{syntax:"*";inherits:false;initial-value:0s}@property --tw-animation-direction{syntax:"*";inherits:false;initial-value:normal}@property --tw-animation-duration{syntax:"*";inherits:false}@property --tw-animation-fill-mode{syntax:"*";inherits:false;initial-value:none}@property --tw-animation-iteration-count{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-translate-y{syntax:"*";inherits:false;initial-value:0}:root{--button-outline:#0000001a;--badge-outline:#0000000d;--opaque-button-border-intensity:-8;--elevate-1:#00000008;--elevate-2:#00000014;--background:0 0% 100%;--foreground:0 0% 20%;--border:0 0% 90%;--card:0 0% 98%;--card-foreground:0 0% 20%;--card-border:0 0% 90%;--sidebar:0 0% 98%;--sidebar-foreground:0 0% 20%;--sidebar-border:0 0% 90%;--sidebar-primary:0 0% 20%;--sidebar-primary-foreground:0 0% 100%;--sidebar-accent:0 0% 96%;--sidebar-accent-foreground:0 0% 20%;--sidebar-ring:0 0% 20%;--popover:0 0% 100%;--popover-foreground:0 0% 20%;--popover-border:0 0% 90%;--primary:0 0% 20%;--primary-foreground:0 0% 100%;--secondary:0 0% 96%;--secondary-foreground:0 0% 20%;--muted:0 0% 96%;--muted-foreground:0 0% 45%;--accent:0 0% 96%;--accent-foreground:0 0% 20%;--destructive:0 84% 60%;--destructive-foreground:0 0% 100%;--input:0 0% 90%;--ring:0 0% 20%;--chart-1:0 0% 20%;--chart-2:0 0% 40%;--chart-3:0 0% 60%;--chart-4:0 0% 80%;--chart-5:0 0% 90%;--app-font-sans:"Inter",sans-serif;--app-font-serif:Georgia,serif;--app-font-mono:Menlo,monospace;--radius:.5rem;--shadow-2xs:0px 1px 2px 0px #0000000d;--shadow-xs:0px 1px 2px 0px #0000000d;--shadow-sm:0px 1px 3px 0px #0000001a,0px 1px 2px -1px #0000001a;--shadow:0px 4px 6px -1px #0000001a,0px 2px 4px -2px #0000001a;--shadow-md:0px 4px 6px -1px #0000001a,0px 2px 4px -2px #0000001a;--shadow-lg:0px 10px 15px -3px #0000001a,0px 4px 6px -4px #0000001a;--shadow-xl:0px 20px 25px -5px #0000001a,0px 8px 10px -6px #0000001a;--shadow-2xl:0px 25px 50px -12px #00000040;--tracking-normal:0em;--spacing:.25rem;--sidebar-primary-border:hsl(from hsl(var(--sidebar-primary))h s calc(l + var(--opaque-button-border-intensity))/alpha);--sidebar-accent-border:hsl(from hsl(var(--sidebar-accent))h s calc(l + var(--opaque-button-border-intensity))/alpha);--primary-border:hsl(from hsl(var(--primary))h s calc(l + var(--opaque-button-border-intensity))/alpha);--secondary-border:hsl(from hsl(var(--secondary))h s calc(l + var(--opaque-button-border-intensity))/alpha);--muted-border:hsl(from hsl(var(--muted))h s calc(l + var(--opaque-button-border-intensity))/alpha);--accent-border:hsl(from hsl(var(--accent))h s calc(l + var(--opaque-button-border-intensity))/alpha);--destructive-border:hsl(from hsl(var(--destructive))h s calc(l + var(--opaque-button-border-intensity))/alpha)}.dark{--button-outline:#ffffff1a;--badge-outline:#ffffff0d;--opaque-button-border-intensity:9;--elevate-1:#ffffff0a;--elevate-2:#ffffff17;--background:red;--foreground:red;--border:red;--card:red;--card-foreground:red;--card-border:red;--sidebar:red;--sidebar-foreground:red;--sidebar-border:red;--sidebar-primary:red;--sidebar-primary-foreground:red;--sidebar-accent:red;--sidebar-accent-foreground:red;--sidebar-ring:red;--popover:red;--popover-foreground:red;--popover-border:red;--primary:red;--primary-foreground:red;--secondary:red;--secondary-foreground:red;--muted:red;--muted-foreground:red;--accent:red;--accent-foreground:red;--destructive:red;--destructive-foreground:red;--input:red;--ring:red;--chart-1:red;--chart-2:red;--chart-3:red;--chart-4:red;--chart-5:red;--shadow-2xs:0px 2px 0px 0px #1da1f200;--shadow-xs:0px 2px 0px 0px #1da1f200;--shadow-sm:0px 2px 0px 0px #1da1f200,0px 1px 2px -1px #1da1f200;--shadow:0px 2px 0px 0px #1da1f200,0px 1px 2px -1px #1da1f200;--shadow-md:0px 2px 0px 0px #1da1f200,0px 2px 4px -1px #1da1f200;--shadow-lg:0px 2px 0px 0px #1da1f200,0px 4px 6px -1px #1da1f200;--shadow-xl:0px 2px 0px 0px #1da1f200,0px 8px 10px -1px #1da1f200;--shadow-2xl:0px 2px 0px 0px #1da1f200}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0));filter:blur(var(--tw-enter-blur,0))}}';
ur(os);
const ns = (t) => {
  const r = ba({
    history: Yr("/"),
    routes: [
      { path: "/", component: Ji },
      { path: "/:pathMatch(.*)*", component: as }
    ]
  }), a = $e(ka, t);
  a.use(r), a.mount("#app-hfgjebdfh657gc");
}, ss = async (t) => ({
  set: async (r) => {
    console.log(`--hydrator [${r.data.curr.type}]`);
    const a = {
      _p: t,
      _pp: r
    }, o = $e(hr, a);
    ns(a);
    const n = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          t.f.call("msg", {
            type: "change",
            _p: t,
            _pp: r,
            custom: {}
          });
        }
      }
    }, p = document.getElementById(t.f.name("vue-root"));
    return o.mount(p), n;
  }
});
export {
  ss as hydrator,
  ss as index
};
