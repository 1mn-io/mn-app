import { d as Ze, c as Jn, r as $n, o as R, s as Wn, u as Me, a as Kn, b as j, p as at, e as re, w as an, h as ln, n as Xn, f as Qn, i as qe, g as Yn, j as S, k as l, l as se, m as y, q as Ue, t as Ee, F as Y, v as Z, x as N, y as Zn, z as es, A as ts, B as ns, C as ss } from "./runtime-dom.esm-bundler-DJF6oUPJ.js";
const rs = /* @__PURE__ */ Ze({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    return (t, n) => {
      const s = $n("router-view");
      return R(), Jn(s, {
        _p: e._p,
        _$p: e._$p,
        _$cb: e._$cb
      }, null, 8, ["_p", "_$p", "_$cb"]);
    };
  }
});
const Ne = typeof document < "u";
function cn(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function os(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && cn(e.default);
}
const L = Object.assign;
function it(e, t) {
  const n = {};
  for (const s in t) {
    const r = t[s];
    n[s] = fe(r) ? r.map(e) : e(r);
  }
  return n;
}
const ze = () => {
}, fe = Array.isArray;
function Ct(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
const un = /#/g, as = /&/g, is = /\//g, ls = /=/g, cs = /\?/g, dn = /\+/g, us = /%5B/g, ds = /%5D/g, fn = /%5E/g, fs = /%60/g, hn = /%7B/g, hs = /%7C/g, pn = /%7D/g, ps = /%20/g;
function Et(e) {
  return e == null ? "" : encodeURI("" + e).replace(hs, "|").replace(us, "[").replace(ds, "]");
}
function ms(e) {
  return Et(e).replace(hn, "{").replace(pn, "}").replace(fn, "^");
}
function pt(e) {
  return Et(e).replace(dn, "%2B").replace(ps, "+").replace(un, "%23").replace(as, "%26").replace(fs, "`").replace(hn, "{").replace(pn, "}").replace(fn, "^");
}
function bs(e) {
  return pt(e).replace(ls, "%3D");
}
function gs(e) {
  return Et(e).replace(un, "%23").replace(cs, "%3F");
}
function vs(e) {
  return gs(e).replace(is, "%2F");
}
function Ve(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const xs = /\/$/, ys = (e) => e.replace(xs, "");
function lt(e, t, n = "/") {
  let s, r = {}, o = "", a = "";
  const c = t.indexOf("#");
  let d = t.indexOf("?");
  return d = c >= 0 && d > c ? -1 : d, d >= 0 && (s = t.slice(0, d), o = t.slice(d, c > 0 ? c : t.length), r = e(o.slice(1))), c >= 0 && (s = s || t.slice(0, c), a = t.slice(c, t.length)), s = Rs(s ?? t, n), {
    fullPath: s + o + a,
    path: s,
    query: r,
    hash: Ve(a)
  };
}
function ws(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function kt(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Es(e, t, n) {
  const s = t.matched.length - 1, r = n.matched.length - 1;
  return s > -1 && s === r && Te(t.matched[s], n.matched[r]) && mn(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Te(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function mn(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!_s(e[n], t[n])) return !1;
  return !0;
}
function _s(e, t) {
  return fe(e) ? Nt(e, t) : fe(t) ? Nt(t, e) : e?.valueOf() === t?.valueOf();
}
function Nt(e, t) {
  return fe(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Rs(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), s = e.split("/"), r = s[s.length - 1];
  (r === ".." || r === ".") && s.push("");
  let o = n.length - 1, a, c;
  for (a = 0; a < s.length; a++)
    if (c = s[a], c !== ".")
      if (c === "..")
        o > 1 && o--;
      else break;
  return n.slice(0, o).join("/") + "/" + s.slice(a).join("/");
}
const _e = {
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
let mt = /* @__PURE__ */ (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), ct = /* @__PURE__ */ (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
function Ss(e) {
  if (!e) if (Ne) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ys(e);
}
const As = /^[^#]+#/;
function Os(e, t) {
  return e.replace(As, "#") + t;
}
function Cs(e, t) {
  const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  };
}
const et = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function ks(e) {
  let t;
  if ("el" in e) {
    const n = e.el, s = typeof n == "string" && n.startsWith("#"), r = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r)
      return;
    t = Cs(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Tt(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const bt = /* @__PURE__ */ new Map();
function Ns(e, t) {
  bt.set(e, t);
}
function Ts(e) {
  const t = bt.get(e);
  return bt.delete(e), t;
}
function Ps(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function bn(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let z = /* @__PURE__ */ (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const gn = /* @__PURE__ */ Symbol("");
z.MATCHER_NOT_FOUND + "", z.NAVIGATION_GUARD_REDIRECT + "", z.NAVIGATION_ABORTED + "", z.NAVIGATION_CANCELLED + "", z.NAVIGATION_DUPLICATED + "";
function Pe(e, t) {
  return L(/* @__PURE__ */ new Error(), {
    type: e,
    [gn]: !0
  }, t);
}
function xe(e, t) {
  return e instanceof Error && gn in e && (t == null || !!(e.type & t));
}
const Is = [
  "params",
  "query",
  "hash"
];
function Bs(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of Is) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function Ds(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < n.length; ++s) {
    const r = n[s].replace(dn, " "), o = r.indexOf("="), a = Ve(o < 0 ? r : r.slice(0, o)), c = o < 0 ? null : Ve(r.slice(o + 1));
    if (a in t) {
      let d = t[a];
      fe(d) || (d = t[a] = [d]), d.push(c);
    } else t[a] = c;
  }
  return t;
}
function Pt(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = bs(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (fe(s) ? s.map((r) => r && pt(r)) : [s && pt(s)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function Ls(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = fe(s) ? s.map((r) => r == null ? null : "" + r) : s == null ? s : "" + s);
  }
  return t;
}
const Us = /* @__PURE__ */ Symbol(""), It = /* @__PURE__ */ Symbol(""), _t = /* @__PURE__ */ Symbol(""), vn = /* @__PURE__ */ Symbol(""), gt = /* @__PURE__ */ Symbol("");
function Fe() {
  let e = [];
  function t(s) {
    return e.push(s), () => {
      const r = e.indexOf(s);
      r > -1 && e.splice(r, 1);
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
function Re(e, t, n, s, r, o = (a) => a()) {
  const a = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
  return () => new Promise((c, d) => {
    const u = (v) => {
      v === !1 ? d(Pe(z.NAVIGATION_ABORTED, {
        from: n,
        to: t
      })) : v instanceof Error ? d(v) : Ps(v) ? d(Pe(z.NAVIGATION_GUARD_REDIRECT, {
        from: t,
        to: v
      })) : (a && s.enterCallbacks[r] === a && typeof v == "function" && a.push(v), c());
    }, f = o(() => e.call(s && s.instances[r], t, n, u));
    let h = Promise.resolve(f);
    e.length < 3 && (h = h.then(u)), h.catch((v) => d(v));
  });
}
function ut(e, t, n, s, r = (o) => o()) {
  const o = [];
  for (const a of e)
    for (const c in a.components) {
      let d = a.components[c];
      if (!(t !== "beforeRouteEnter" && !a.instances[c]))
        if (cn(d)) {
          const u = (d.__vccOpts || d)[t];
          u && o.push(Re(u, n, s, a, c, r));
        } else {
          let u = d();
          o.push(() => u.then((f) => {
            if (!f) throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);
            const h = os(f) ? f.default : f;
            a.mods[c] = f, a.components[c] = h;
            const v = (h.__vccOpts || h)[t];
            return v && Re(v, n, s, a, c, r)();
          }));
        }
    }
  return o;
}
function Fs(e, t) {
  const n = [], s = [], r = [], o = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < o; a++) {
    const c = t.matched[a];
    c && (e.matched.find((u) => Te(u, c)) ? s.push(c) : n.push(c));
    const d = e.matched[a];
    d && (t.matched.find((u) => Te(u, d)) || r.push(d));
  }
  return [
    n,
    s,
    r
  ];
}
let js = () => location.protocol + "//" + location.host;
function xn(e, t) {
  const { pathname: n, search: s, hash: r } = t, o = e.indexOf("#");
  if (o > -1) {
    let a = r.includes(e.slice(o)) ? e.slice(o).length : 1, c = r.slice(a);
    return c[0] !== "/" && (c = "/" + c), kt(c, "");
  }
  return kt(n, e) + s + r;
}
function Ms(e, t, n, s) {
  let r = [], o = [], a = null;
  const c = ({ state: v }) => {
    const w = xn(e, location), g = n.value, _ = t.value;
    let E = 0;
    if (v) {
      if (n.value = w, t.value = v, a && a === g) {
        a = null;
        return;
      }
      E = _ ? v.position - _.position : 0;
    } else s(w);
    r.forEach((p) => {
      p(n.value, g, {
        delta: E,
        type: mt.pop,
        direction: E ? E > 0 ? ct.forward : ct.back : ct.unknown
      });
    });
  };
  function d() {
    a = n.value;
  }
  function u(v) {
    r.push(v);
    const w = () => {
      const g = r.indexOf(v);
      g > -1 && r.splice(g, 1);
    };
    return o.push(w), w;
  }
  function f() {
    if (document.visibilityState === "hidden") {
      const { history: v } = window;
      if (!v.state) return;
      v.replaceState(L({}, v.state, { scroll: et() }), "");
    }
  }
  function h() {
    for (const v of o) v();
    o = [], window.removeEventListener("popstate", c), window.removeEventListener("pagehide", f), document.removeEventListener("visibilitychange", f);
  }
  return window.addEventListener("popstate", c), window.addEventListener("pagehide", f), document.addEventListener("visibilitychange", f), {
    pauseListeners: d,
    listen: u,
    destroy: h
  };
}
function Bt(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? et() : null
  };
}
function zs(e) {
  const { history: t, location: n } = window, s = { value: xn(e, n) }, r = { value: t.state };
  r.value || o(s.value, {
    back: null,
    current: s.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function o(d, u, f) {
    const h = e.indexOf("#"), v = h > -1 ? (n.host && document.querySelector("base") ? e : e.slice(h)) + d : js() + e + d;
    try {
      t[f ? "replaceState" : "pushState"](u, "", v), r.value = u;
    } catch (w) {
      console.error(w), n[f ? "replace" : "assign"](v);
    }
  }
  function a(d, u) {
    o(d, L({}, t.state, Bt(r.value.back, d, r.value.forward, !0), u, { position: r.value.position }), !0), s.value = d;
  }
  function c(d, u) {
    const f = L({}, r.value, t.state, {
      forward: d,
      scroll: et()
    });
    o(f.current, f, !0), o(d, L({}, Bt(s.value, d, null), { position: f.position + 1 }, u), !1), s.value = d;
  }
  return {
    location: s,
    state: r,
    push: c,
    replace: a
  };
}
function qs(e) {
  e = Ss(e);
  const t = zs(e), n = Ms(e, t.state, t.location, t.replace);
  function s(o, a = !0) {
    a || n.pauseListeners(), history.go(o);
  }
  const r = L({
    location: "",
    base: e,
    go: s,
    createHref: Os.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
let Se = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var G = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(G || {});
const Vs = {
  type: Se.Static,
  value: ""
}, Hs = /[a-zA-Z0-9_]/;
function Gs(e) {
  if (!e) return [[]];
  if (e === "/") return [[Vs]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(w) {
    throw new Error(`ERR (${n})/"${u}": ${w}`);
  }
  let n = G.Static, s = n;
  const r = [];
  let o;
  function a() {
    o && r.push(o), o = [];
  }
  let c = 0, d, u = "", f = "";
  function h() {
    u && (n === G.Static ? o.push({
      type: Se.Static,
      value: u
    }) : n === G.Param || n === G.ParamRegExp || n === G.ParamRegExpEnd ? (o.length > 1 && (d === "*" || d === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), o.push({
      type: Se.Param,
      value: u,
      regexp: f,
      repeatable: d === "*" || d === "+",
      optional: d === "*" || d === "?"
    })) : t("Invalid state to consume buffer"), u = "");
  }
  function v() {
    u += d;
  }
  for (; c < e.length; ) {
    if (d = e[c++], d === "\\" && n !== G.ParamRegExp) {
      s = n, n = G.EscapeNext;
      continue;
    }
    switch (n) {
      case G.Static:
        d === "/" ? (u && h(), a()) : d === ":" ? (h(), n = G.Param) : v();
        break;
      case G.EscapeNext:
        v(), n = s;
        break;
      case G.Param:
        d === "(" ? n = G.ParamRegExp : Hs.test(d) ? v() : (h(), n = G.Static, d !== "*" && d !== "?" && d !== "+" && c--);
        break;
      case G.ParamRegExp:
        d === ")" ? f[f.length - 1] == "\\" ? f = f.slice(0, -1) + d : n = G.ParamRegExpEnd : f += d;
        break;
      case G.ParamRegExpEnd:
        h(), n = G.Static, d !== "*" && d !== "?" && d !== "+" && c--, f = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === G.ParamRegExp && t(`Unfinished custom RegExp for param "${u}"`), h(), a(), r;
}
const Dt = "[^/]+?", Js = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
};
var ee = /* @__PURE__ */ (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(ee || {});
const $s = /[.+*?^${}()[\]/\\]/g;
function Ws(e, t) {
  const n = L({}, Js, t), s = [];
  let r = n.start ? "^" : "";
  const o = [];
  for (const u of e) {
    const f = u.length ? [] : [ee.Root];
    n.strict && !u.length && (r += "/");
    for (let h = 0; h < u.length; h++) {
      const v = u[h];
      let w = ee.Segment + (n.sensitive ? ee.BonusCaseSensitive : 0);
      if (v.type === Se.Static)
        h || (r += "/"), r += v.value.replace($s, "\\$&"), w += ee.Static;
      else if (v.type === Se.Param) {
        const { value: g, repeatable: _, optional: E, regexp: p } = v;
        o.push({
          name: g,
          repeatable: _,
          optional: E
        });
        const k = p || Dt;
        if (k !== Dt) {
          w += ee.BonusCustomRegExp;
          try {
            `${k}`;
          } catch (D) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${k}): ` + D.message);
          }
        }
        let C = _ ? `((?:${k})(?:/(?:${k}))*)` : `(${k})`;
        h || (C = E && u.length < 2 ? `(?:/${C})` : "/" + C), E && (C += "?"), r += C, w += ee.Dynamic, E && (w += ee.BonusOptional), _ && (w += ee.BonusRepeatable), k === ".*" && (w += ee.BonusWildcard);
      }
      f.push(w);
    }
    s.push(f);
  }
  if (n.strict && n.end) {
    const u = s.length - 1;
    s[u][s[u].length - 1] += ee.BonusStrict;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const a = new RegExp(r, n.sensitive ? "" : "i");
  function c(u) {
    const f = u.match(a), h = {};
    if (!f) return null;
    for (let v = 1; v < f.length; v++) {
      const w = f[v] || "", g = o[v - 1];
      h[g.name] = w && g.repeatable ? w.split("/") : w;
    }
    return h;
  }
  function d(u) {
    let f = "", h = !1;
    for (const v of e) {
      (!h || !f.endsWith("/")) && (f += "/"), h = !1;
      for (const w of v) if (w.type === Se.Static) f += w.value;
      else if (w.type === Se.Param) {
        const { value: g, repeatable: _, optional: E } = w, p = g in u ? u[g] : "";
        if (fe(p) && !_) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const k = fe(p) ? p.join("/") : p;
        if (!k) if (E)
          v.length < 2 && (f.endsWith("/") ? f = f.slice(0, -1) : h = !0);
        else throw new Error(`Missing required param "${g}"`);
        f += k;
      }
    }
    return f || "/";
  }
  return {
    re: a,
    score: s,
    keys: o,
    parse: c,
    stringify: d
  };
}
function Ks(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === ee.Static + ee.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === ee.Static + ee.Segment ? 1 : -1 : 0;
}
function yn(e, t) {
  let n = 0;
  const s = e.score, r = t.score;
  for (; n < s.length && n < r.length; ) {
    const o = Ks(s[n], r[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (Lt(s)) return 1;
    if (Lt(r)) return -1;
  }
  return r.length - s.length;
}
function Lt(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Xs = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function Qs(e, t, n) {
  const s = Ws(Gs(e.path), n), r = L(s, {
    record: e,
    parent: t,
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Ys(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = Ct(Xs, t);
  function r(h) {
    return s.get(h);
  }
  function o(h, v, w) {
    const g = !w, _ = Ft(h);
    _.aliasOf = w && w.record;
    const E = Ct(t, h), p = [_];
    if ("alias" in h) {
      const D = typeof h.alias == "string" ? [h.alias] : h.alias;
      for (const F of D) p.push(Ft(L({}, _, {
        components: w ? w.record.components : _.components,
        path: F,
        aliasOf: w ? w.record : _
      })));
    }
    let k, C;
    for (const D of p) {
      const { path: F } = D;
      if (v && F[0] !== "/") {
        const q = v.record.path, U = q[q.length - 1] === "/" ? "" : "/";
        D.path = v.record.path + (F && U + F);
      }
      if (k = Qs(D, v, E), w ? w.alias.push(k) : (C = C || k, C !== k && C.alias.push(k), g && h.name && !jt(k) && a(h.name)), wn(k) && d(k), _.children) {
        const q = _.children;
        for (let U = 0; U < q.length; U++) o(q[U], k, w && w.children[U]);
      }
      w = w || k;
    }
    return C ? () => {
      a(C);
    } : ze;
  }
  function a(h) {
    if (bn(h)) {
      const v = s.get(h);
      v && (s.delete(h), n.splice(n.indexOf(v), 1), v.children.forEach(a), v.alias.forEach(a));
    } else {
      const v = n.indexOf(h);
      v > -1 && (n.splice(v, 1), h.record.name && s.delete(h.record.name), h.children.forEach(a), h.alias.forEach(a));
    }
  }
  function c() {
    return n;
  }
  function d(h) {
    const v = tr(h, n);
    n.splice(v, 0, h), h.record.name && !jt(h) && s.set(h.record.name, h);
  }
  function u(h, v) {
    let w, g = {}, _, E;
    if ("name" in h && h.name) {
      if (w = s.get(h.name), !w) throw Pe(z.MATCHER_NOT_FOUND, { location: h });
      E = w.record.name, g = L(Ut(v.params, w.keys.filter((C) => !C.optional).concat(w.parent ? w.parent.keys.filter((C) => C.optional) : []).map((C) => C.name)), h.params && Ut(h.params, w.keys.map((C) => C.name))), _ = w.stringify(g);
    } else if (h.path != null)
      _ = h.path, w = n.find((C) => C.re.test(_)), w && (g = w.parse(_), E = w.record.name);
    else {
      if (w = v.name ? s.get(v.name) : n.find((C) => C.re.test(v.path)), !w) throw Pe(z.MATCHER_NOT_FOUND, {
        location: h,
        currentLocation: v
      });
      E = w.record.name, g = L({}, v.params, h.params), _ = w.stringify(g);
    }
    const p = [];
    let k = w;
    for (; k; )
      p.unshift(k.record), k = k.parent;
    return {
      name: E,
      path: _,
      params: g,
      matched: p,
      meta: er(p)
    };
  }
  e.forEach((h) => o(h));
  function f() {
    n.length = 0, s.clear();
  }
  return {
    addRoute: o,
    resolve: u,
    removeRoute: a,
    clearRoutes: f,
    getRoutes: c,
    getRecordMatcher: r
  };
}
function Ut(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function Ft(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Zs(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Zs(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function jt(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function er(e) {
  return e.reduce((t, n) => L(t, n.meta), {});
}
function tr(e, t) {
  let n = 0, s = t.length;
  for (; n !== s; ) {
    const o = n + s >> 1;
    yn(e, t[o]) < 0 ? s = o : n = o + 1;
  }
  const r = nr(e);
  return r && (s = t.lastIndexOf(r, s - 1)), s;
}
function nr(e) {
  let t = e;
  for (; t = t.parent; ) if (wn(t) && yn(e, t) === 0) return t;
}
function wn({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Mt(e) {
  const t = qe(_t), n = qe(vn), s = j(() => {
    const d = Me(e.to);
    return t.resolve(d);
  }), r = j(() => {
    const { matched: d } = s.value, { length: u } = d, f = d[u - 1], h = n.matched;
    if (!f || !h.length) return -1;
    const v = h.findIndex(Te.bind(null, f));
    if (v > -1) return v;
    const w = zt(d[u - 2]);
    return u > 1 && zt(f) === w && h[h.length - 1].path !== w ? h.findIndex(Te.bind(null, d[u - 2])) : v;
  }), o = j(() => r.value > -1 && ir(n.params, s.value.params)), a = j(() => r.value > -1 && r.value === n.matched.length - 1 && mn(n.params, s.value.params));
  function c(d = {}) {
    if (ar(d)) {
      const u = t[Me(e.replace) ? "replace" : "push"](Me(e.to)).catch(ze);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return {
    route: s,
    href: j(() => s.value.href),
    isActive: o,
    isExactActive: a,
    navigate: c
  };
}
function sr(e) {
  return e.length === 1 ? e[0] : e;
}
const rr = /* @__PURE__ */ Ze({
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
  useLink: Mt,
  setup(e, { slots: t }) {
    const n = Qn(Mt(e)), { options: s } = qe(_t), r = j(() => ({
      [qt(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      [qt(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const o = t.default && sr(t.default(n));
      return e.custom ? o : ln("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: r.value
      }, o);
    };
  }
}), or = rr;
function ar(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function ir(e, t) {
  for (const n in t) {
    const s = t[n], r = e[n];
    if (typeof s == "string") {
      if (s !== r) return !1;
    } else if (!fe(r) || r.length !== s.length || s.some((o, a) => o.valueOf() !== r[a].valueOf())) return !1;
  }
  return !0;
}
function zt(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const qt = (e, t, n) => e ?? t ?? n, lr = /* @__PURE__ */ Ze({
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
    const s = qe(gt), r = j(() => e.route || s.value), o = qe(It, 0), a = j(() => {
      let u = Me(o);
      const { matched: f } = r.value;
      let h;
      for (; (h = f[u]) && !h.components; ) u++;
      return u;
    }), c = j(() => r.value.matched[a.value]);
    at(It, j(() => a.value + 1)), at(Us, c), at(gt, r);
    const d = re();
    return an(() => [
      d.value,
      c.value,
      e.name
    ], ([u, f, h], [v, w, g]) => {
      f && (f.instances[h] = u, w && w !== f && u && u === v && (f.leaveGuards.size || (f.leaveGuards = w.leaveGuards), f.updateGuards.size || (f.updateGuards = w.updateGuards))), u && f && (!w || !Te(f, w) || !v) && (f.enterCallbacks[h] || []).forEach((_) => _(u));
    }, { flush: "post" }), () => {
      const u = r.value, f = e.name, h = c.value, v = h && h.components[f];
      if (!v) return Vt(n.default, {
        Component: v,
        route: u
      });
      const w = h.props[f], g = w ? w === !0 ? u.params : typeof w == "function" ? w(u) : w : null, E = ln(v, L({}, g, t, {
        onVnodeUnmounted: (p) => {
          p.component.isUnmounted && (h.instances[f] = null);
        },
        ref: d
      }));
      return Vt(n.default, {
        Component: E,
        route: u
      }) || E;
    };
  }
});
function Vt(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const cr = lr;
function ur(e) {
  const t = Ys(e.routes, e), n = e.parseQuery || Ds, s = e.stringifyQuery || Pt, r = e.history, o = Fe(), a = Fe(), c = Fe(), d = Wn(_e);
  let u = _e;
  Ne && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const f = it.bind(null, (i) => "" + i), h = it.bind(null, vs), v = it.bind(null, Ve);
  function w(i, b) {
    let x, O;
    return bn(i) ? (x = t.getRecordMatcher(i), O = b) : O = i, t.addRoute(O, x);
  }
  function g(i) {
    const b = t.getRecordMatcher(i);
    b && t.removeRoute(b);
  }
  function _() {
    return t.getRoutes().map((i) => i.record);
  }
  function E(i) {
    return !!t.getRecordMatcher(i);
  }
  function p(i, b) {
    if (b = L({}, b || d.value), typeof i == "string") {
      const P = lt(n, i, b.path), H = t.resolve({ path: P.path }, b), Le = r.createHref(P.fullPath);
      return L(P, H, {
        params: v(H.params),
        hash: Ve(P.hash),
        redirectedFrom: void 0,
        href: Le
      });
    }
    let x;
    if (i.path != null)
      x = L({}, i, { path: lt(n, i.path, b.path).path });
    else {
      const P = L({}, i.params);
      for (const H in P) P[H] == null && delete P[H];
      x = L({}, i, { params: h(P) }), b.params = h(b.params);
    }
    const O = t.resolve(x, b), I = i.hash || "";
    O.params = f(v(O.params));
    const M = ws(s, L({}, i, {
      hash: ms(I),
      path: O.path
    })), B = r.createHref(M);
    return L({
      fullPath: M,
      hash: I,
      query: s === Pt ? Ls(i.query) : i.query || {}
    }, O, {
      redirectedFrom: void 0,
      href: B
    });
  }
  function k(i) {
    return typeof i == "string" ? lt(n, i, d.value.path) : L({}, i);
  }
  function C(i, b) {
    if (u !== i) return Pe(z.NAVIGATION_CANCELLED, {
      from: b,
      to: i
    });
  }
  function D(i) {
    return U(i);
  }
  function F(i) {
    return D(L(k(i), { replace: !0 }));
  }
  function q(i, b) {
    const x = i.matched[i.matched.length - 1];
    if (x && x.redirect) {
      const { redirect: O } = x;
      let I = typeof O == "function" ? O(i, b) : O;
      return typeof I == "string" && (I = I.includes("?") || I.includes("#") ? I = k(I) : { path: I }, I.params = {}), L({
        query: i.query,
        hash: i.hash,
        params: I.path != null ? {} : i.params
      }, I);
    }
  }
  function U(i, b) {
    const x = u = p(i), O = d.value, I = i.state, M = i.force, B = i.replace === !0, P = q(x, O);
    if (P) return U(L(k(P), {
      state: typeof P == "object" ? L({}, I, P.state) : I,
      force: M,
      replace: B
    }), b || x);
    const H = x;
    H.redirectedFrom = b;
    let Le;
    return !M && Es(s, O, x) && (Le = Pe(z.NAVIGATION_DUPLICATED, {
      to: H,
      from: O
    }), ie(O, O, !0, !1)), (Le ? Promise.resolve(Le) : ye(H, O)).catch((ne) => xe(ne) ? xe(ne, z.NAVIGATION_GUARD_REDIRECT) ? ne : we(ne) : te(ne, H, O)).then((ne) => {
      if (ne) {
        if (xe(ne, z.NAVIGATION_GUARD_REDIRECT))
          return U(L({ replace: B }, k(ne.to), {
            state: typeof ne.to == "object" ? L({}, I, ne.to.state) : I,
            force: M
          }), b || H);
      } else ne = ve(H, O, !0, B, I);
      return pe(H, O, ne), ne;
    });
  }
  function Q(i, b) {
    const x = C(i, b);
    return x ? Promise.reject(x) : Promise.resolve();
  }
  function J(i) {
    const b = ue.values().next().value;
    return b && typeof b.runWithContext == "function" ? b.runWithContext(i) : i();
  }
  function ye(i, b) {
    let x;
    const [O, I, M] = Fs(i, b);
    x = ut(O.reverse(), "beforeRouteLeave", i, b);
    for (const P of O) P.leaveGuards.forEach((H) => {
      x.push(Re(H, i, b));
    });
    const B = Q.bind(null, i, b);
    return x.push(B), A(x).then(() => {
      x = [];
      for (const P of o.list()) x.push(Re(P, i, b));
      return x.push(B), A(x);
    }).then(() => {
      x = ut(I, "beforeRouteUpdate", i, b);
      for (const P of I) P.updateGuards.forEach((H) => {
        x.push(Re(H, i, b));
      });
      return x.push(B), A(x);
    }).then(() => {
      x = [];
      for (const P of M) if (P.beforeEnter) if (fe(P.beforeEnter)) for (const H of P.beforeEnter) x.push(Re(H, i, b));
      else x.push(Re(P.beforeEnter, i, b));
      return x.push(B), A(x);
    }).then(() => (i.matched.forEach((P) => P.enterCallbacks = {}), x = ut(M, "beforeRouteEnter", i, b, J), x.push(B), A(x))).then(() => {
      x = [];
      for (const P of a.list()) x.push(Re(P, i, b));
      return x.push(B), A(x);
    }).catch((P) => xe(P, z.NAVIGATION_CANCELLED) ? P : Promise.reject(P));
  }
  function pe(i, b, x) {
    c.list().forEach((O) => J(() => O(i, b, x)));
  }
  function ve(i, b, x, O, I) {
    const M = C(i, b);
    if (M) return M;
    const B = b === _e, P = Ne ? history.state : {};
    x && (O || B ? r.replace(i.fullPath, L({ scroll: B && P && P.scroll }, I)) : r.push(i.fullPath, I)), d.value = i, ie(i, b, x, B), we();
  }
  let W;
  function ce() {
    W || (W = r.listen((i, b, x) => {
      if (!de.listening) return;
      const O = p(i), I = q(O, de.currentRoute.value);
      if (I) {
        U(L(I, {
          replace: !0,
          force: !0
        }), O).catch(ze);
        return;
      }
      u = O;
      const M = d.value;
      Ne && Ns(Tt(M.fullPath, x.delta), et()), ye(O, M).catch((B) => xe(B, z.NAVIGATION_ABORTED | z.NAVIGATION_CANCELLED) ? B : xe(B, z.NAVIGATION_GUARD_REDIRECT) ? (U(L(k(B.to), { force: !0 }), O).then((P) => {
        xe(P, z.NAVIGATION_ABORTED | z.NAVIGATION_DUPLICATED) && !x.delta && x.type === mt.pop && r.go(-1, !1);
      }).catch(ze), Promise.reject()) : (x.delta && r.go(-x.delta, !1), te(B, O, M))).then((B) => {
        B = B || ve(O, M, !1), B && (x.delta && !xe(B, z.NAVIGATION_CANCELLED) ? r.go(-x.delta, !1) : x.type === mt.pop && xe(B, z.NAVIGATION_ABORTED | z.NAVIGATION_DUPLICATED) && r.go(-1, !1)), pe(O, M, B);
      }).catch(ze);
    }));
  }
  let $ = Fe(), K = Fe(), me;
  function te(i, b, x) {
    we(i);
    const O = K.list();
    return O.length ? O.forEach((I) => I(i, b, x)) : console.error(i), Promise.reject(i);
  }
  function ke() {
    return me && d.value !== _e ? Promise.resolve() : new Promise((i, b) => {
      $.add([i, b]);
    });
  }
  function we(i) {
    return me || (me = !i, ce(), $.list().forEach(([b, x]) => i ? x(i) : b()), $.reset()), i;
  }
  function ie(i, b, x, O) {
    const { scrollBehavior: I } = e;
    if (!Ne || !I) return Promise.resolve();
    const M = !x && Ts(Tt(i.fullPath, 0)) || (O || !x) && history.state && history.state.scroll || null;
    return Xn().then(() => I(i, b, M)).then((B) => B && ks(B)).catch((B) => te(B, i, b));
  }
  const le = (i) => r.go(i);
  let be;
  const ue = /* @__PURE__ */ new Set(), de = {
    currentRoute: d,
    listening: !0,
    addRoute: w,
    removeRoute: g,
    clearRoutes: t.clearRoutes,
    hasRoute: E,
    getRoutes: _,
    resolve: p,
    options: e,
    push: D,
    replace: F,
    go: le,
    back: () => le(-1),
    forward: () => le(1),
    beforeEach: o.add,
    beforeResolve: a.add,
    afterEach: c.add,
    onError: K.add,
    isReady: ke,
    install(i) {
      i.component("RouterLink", or), i.component("RouterView", cr), i.config.globalProperties.$router = de, Object.defineProperty(i.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Me(d)
      }), Ne && !be && d.value === _e && (be = !0, D(r.location).catch((O) => {
      }));
      const b = {};
      for (const O in _e) Object.defineProperty(b, O, {
        get: () => d.value[O],
        enumerable: !0
      });
      i.provide(_t, de), i.provide(vn, Kn(b)), i.provide(gt, d);
      const x = i.unmount;
      ue.add(i), i.unmount = function() {
        ue.delete(i), ue.size < 1 && (u = _e, W && W(), W = null, d.value = _e, be = !1, me = !1), x();
      };
    }
  };
  function A(i) {
    return i.reduce((b, x) => b.then(() => J(x)), Promise.resolve());
  }
  return de;
}
function En(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: dr } = Object.prototype, { getPrototypeOf: Rt } = Object, { iterator: tt, toStringTag: _n } = Symbol, nt = /* @__PURE__ */ ((e) => (t) => {
  const n = dr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), he = (e) => (e = e.toLowerCase(), (t) => nt(t) === e), st = (e) => (t) => typeof t === e, { isArray: Be } = Array, Ie = st("undefined");
function He(e) {
  return e !== null && !Ie(e) && e.constructor !== null && !Ie(e.constructor) && oe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Rn = he("ArrayBuffer");
function fr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Rn(e.buffer), t;
}
const hr = st("string"), oe = st("function"), Sn = st("number"), Ge = (e) => e !== null && typeof e == "object", pr = (e) => e === !0 || e === !1, Ke = (e) => {
  if (nt(e) !== "object")
    return !1;
  const t = Rt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(_n in e) && !(tt in e);
}, mr = (e) => {
  if (!Ge(e) || He(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, br = he("Date"), gr = he("File"), vr = he("Blob"), xr = he("FileList"), yr = (e) => Ge(e) && oe(e.pipe), wr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || oe(e.append) && ((t = nt(e)) === "formdata" || // detect form-data instance
  t === "object" && oe(e.toString) && e.toString() === "[object FormData]"));
}, Er = he("URLSearchParams"), [_r, Rr, Sr, Ar] = ["ReadableStream", "Request", "Response", "Headers"].map(he), Or = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Je(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, r;
  if (typeof e != "object" && (e = [e]), Be(e))
    for (s = 0, r = e.length; s < r; s++)
      t.call(null, e[s], s, e);
  else {
    if (He(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let c;
    for (s = 0; s < a; s++)
      c = o[s], t.call(null, e[c], c, e);
  }
}
function An(e, t) {
  if (He(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, r;
  for (; s-- > 0; )
    if (r = n[s], t === r.toLowerCase())
      return r;
  return null;
}
const Ae = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, On = (e) => !Ie(e) && e !== Ae;
function vt() {
  const { caseless: e, skipUndefined: t } = On(this) && this || {}, n = {}, s = (r, o) => {
    const a = e && An(n, o) || o;
    Ke(n[a]) && Ke(r) ? n[a] = vt(n[a], r) : Ke(r) ? n[a] = vt({}, r) : Be(r) ? n[a] = r.slice() : (!t || !Ie(r)) && (n[a] = r);
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Je(arguments[r], s);
  return n;
}
const Cr = (e, t, n, { allOwnKeys: s } = {}) => (Je(t, (r, o) => {
  n && oe(r) ? e[o] = En(r, n) : e[o] = r;
}, { allOwnKeys: s }), e), kr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Nr = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Tr = (e, t, n, s) => {
  let r, o, a;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      a = r[o], (!s || s(a, e, t)) && !c[a] && (t[a] = e[a], c[a] = !0);
    e = n !== !1 && Rt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Pr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, Ir = (e) => {
  if (!e) return null;
  if (Be(e)) return e;
  let t = e.length;
  if (!Sn(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Br = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Rt(Uint8Array)), Dr = (e, t) => {
  const s = (e && e[tt]).call(e);
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, Lr = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, Ur = he("HTMLFormElement"), Fr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, r) {
    return s.toUpperCase() + r;
  }
), Ht = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), jr = he("RegExp"), Cn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  Je(n, (r, o) => {
    let a;
    (a = t(r, o, e)) !== !1 && (s[o] = a || r);
  }), Object.defineProperties(e, s);
}, Mr = (e) => {
  Cn(e, (t, n) => {
    if (oe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = e[n];
    if (oe(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, zr = (e, t) => {
  const n = {}, s = (r) => {
    r.forEach((o) => {
      n[o] = !0;
    });
  };
  return Be(e) ? s(e) : s(String(e).split(t)), n;
}, qr = () => {
}, Vr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Hr(e) {
  return !!(e && oe(e.append) && e[_n] === "FormData" && e[tt]);
}
const Gr = (e) => {
  const t = new Array(10), n = (s, r) => {
    if (Ge(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (He(s))
        return s;
      if (!("toJSON" in s)) {
        t[r] = s;
        const o = Be(s) ? [] : {};
        return Je(s, (a, c) => {
          const d = n(a, r + 1);
          !Ie(d) && (o[c] = d);
        }), t[r] = void 0, o;
      }
    }
    return s;
  };
  return n(e, 0);
}, Jr = he("AsyncFunction"), $r = (e) => e && (Ge(e) || oe(e)) && oe(e.then) && oe(e.catch), kn = ((e, t) => e ? setImmediate : t ? ((n, s) => (Ae.addEventListener("message", ({ source: r, data: o }) => {
  r === Ae && o === n && s.length && s.shift()();
}, !1), (r) => {
  s.push(r), Ae.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  oe(Ae.postMessage)
), Wr = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ae) : typeof process < "u" && process.nextTick || kn, Kr = (e) => e != null && oe(e[tt]), m = {
  isArray: Be,
  isArrayBuffer: Rn,
  isBuffer: He,
  isFormData: wr,
  isArrayBufferView: fr,
  isString: hr,
  isNumber: Sn,
  isBoolean: pr,
  isObject: Ge,
  isPlainObject: Ke,
  isEmptyObject: mr,
  isReadableStream: _r,
  isRequest: Rr,
  isResponse: Sr,
  isHeaders: Ar,
  isUndefined: Ie,
  isDate: br,
  isFile: gr,
  isBlob: vr,
  isRegExp: jr,
  isFunction: oe,
  isStream: yr,
  isURLSearchParams: Er,
  isTypedArray: Br,
  isFileList: xr,
  forEach: Je,
  merge: vt,
  extend: Cr,
  trim: Or,
  stripBOM: kr,
  inherits: Nr,
  toFlatObject: Tr,
  kindOf: nt,
  kindOfTest: he,
  endsWith: Pr,
  toArray: Ir,
  forEachEntry: Dr,
  matchAll: Lr,
  isHTMLForm: Ur,
  hasOwnProperty: Ht,
  hasOwnProp: Ht,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Cn,
  freezeMethods: Mr,
  toObjectSet: zr,
  toCamelCase: Fr,
  noop: qr,
  toFiniteNumber: Vr,
  findKey: An,
  global: Ae,
  isContextDefined: On,
  isSpecCompliantForm: Hr,
  toJSONObject: Gr,
  isAsyncFn: Jr,
  isThenable: $r,
  setImmediate: kn,
  asap: Wr,
  isIterable: Kr
};
function T(e, t, n, s, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), r && (this.response = r, this.status = r.status ? r.status : null);
}
m.inherits(T, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: m.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Nn = T.prototype, Tn = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Tn[e] = { value: e };
});
Object.defineProperties(T, Tn);
Object.defineProperty(Nn, "isAxiosError", { value: !0 });
T.from = (e, t, n, s, r, o) => {
  const a = Object.create(Nn);
  m.toFlatObject(e, a, function(f) {
    return f !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const c = e && e.message ? e.message : "Error", d = t == null && e ? e.code : t;
  return T.call(a, c, d, n, s, r), e && a.cause == null && Object.defineProperty(a, "cause", { value: e, configurable: !0 }), a.name = e && e.name || "Error", o && Object.assign(a, o), a;
};
const Xr = null;
function xt(e) {
  return m.isPlainObject(e) || m.isArray(e);
}
function Pn(e) {
  return m.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Gt(e, t, n) {
  return e ? e.concat(t).map(function(r, o) {
    return r = Pn(r), !n && o ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function Qr(e) {
  return m.isArray(e) && !e.some(xt);
}
const Yr = m.toFlatObject(m, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function rt(e, t, n) {
  if (!m.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = m.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(_, E) {
    return !m.isUndefined(E[_]);
  });
  const s = n.metaTokens, r = n.visitor || f, o = n.dots, a = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && m.isSpecCompliantForm(t);
  if (!m.isFunction(r))
    throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (m.isDate(g))
      return g.toISOString();
    if (m.isBoolean(g))
      return g.toString();
    if (!d && m.isBlob(g))
      throw new T("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(g) || m.isTypedArray(g) ? d && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, _, E) {
    let p = g;
    if (g && !E && typeof g == "object") {
      if (m.endsWith(_, "{}"))
        _ = s ? _ : _.slice(0, -2), g = JSON.stringify(g);
      else if (m.isArray(g) && Qr(g) || (m.isFileList(g) || m.endsWith(_, "[]")) && (p = m.toArray(g)))
        return _ = Pn(_), p.forEach(function(C, D) {
          !(m.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Gt([_], D, o) : a === null ? _ : _ + "[]",
            u(C)
          );
        }), !1;
    }
    return xt(g) ? !0 : (t.append(Gt(E, _, o), u(g)), !1);
  }
  const h = [], v = Object.assign(Yr, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: xt
  });
  function w(g, _) {
    if (!m.isUndefined(g)) {
      if (h.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      h.push(g), m.forEach(g, function(p, k) {
        (!(m.isUndefined(p) || p === null) && r.call(
          t,
          p,
          m.isString(k) ? k.trim() : k,
          _,
          v
        )) === !0 && w(p, _ ? _.concat(k) : [k]);
      }), h.pop();
    }
  }
  if (!m.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function Jt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
    return t[s];
  });
}
function St(e, t) {
  this._pairs = [], e && rt(e, this, t);
}
const In = St.prototype;
In.append = function(t, n) {
  this._pairs.push([t, n]);
};
In.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, Jt);
  } : Jt;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function Zr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Bn(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || Zr;
  m.isFunction(n) && (n = {
    serialize: n
  });
  const r = n && n.serialize;
  let o;
  if (r ? o = r(t, n) : o = m.isURLSearchParams(t) ? t.toString() : new St(t, n).toString(s), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class $t {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, s) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    m.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const Dn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, eo = typeof URLSearchParams < "u" ? URLSearchParams : St, to = typeof FormData < "u" ? FormData : null, no = typeof Blob < "u" ? Blob : null, so = {
  isBrowser: !0,
  classes: {
    URLSearchParams: eo,
    FormData: to,
    Blob: no
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, At = typeof window < "u" && typeof document < "u", yt = typeof navigator == "object" && navigator || void 0, ro = At && (!yt || ["ReactNative", "NativeScript", "NS"].indexOf(yt.product) < 0), oo = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ao = At && window.location.href || "http://localhost", io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: At,
  hasStandardBrowserEnv: ro,
  hasStandardBrowserWebWorkerEnv: oo,
  navigator: yt,
  origin: ao
}, Symbol.toStringTag, { value: "Module" })), X = {
  ...io,
  ...so
};
function lo(e, t) {
  return rt(e, new X.classes.URLSearchParams(), {
    visitor: function(n, s, r, o) {
      return X.isNode && m.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function co(e) {
  return m.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function uo(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const r = n.length;
  let o;
  for (s = 0; s < r; s++)
    o = n[s], t[o] = e[o];
  return t;
}
function Ln(e) {
  function t(n, s, r, o) {
    let a = n[o++];
    if (a === "__proto__") return !0;
    const c = Number.isFinite(+a), d = o >= n.length;
    return a = !a && m.isArray(r) ? r.length : a, d ? (m.hasOwnProp(r, a) ? r[a] = [r[a], s] : r[a] = s, !c) : ((!r[a] || !m.isObject(r[a])) && (r[a] = []), t(n, s, r[a], o) && m.isArray(r[a]) && (r[a] = uo(r[a])), !c);
  }
  if (m.isFormData(e) && m.isFunction(e.entries)) {
    const n = {};
    return m.forEachEntry(e, (s, r) => {
      t(co(s), r, n, 0);
    }), n;
  }
  return null;
}
function fo(e, t, n) {
  if (m.isString(e))
    try {
      return (t || JSON.parse)(e), m.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const $e = {
  transitional: Dn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", r = s.indexOf("application/json") > -1, o = m.isObject(t);
    if (o && m.isHTMLForm(t) && (t = new FormData(t)), m.isFormData(t))
      return r ? JSON.stringify(Ln(t)) : t;
    if (m.isArrayBuffer(t) || m.isBuffer(t) || m.isStream(t) || m.isFile(t) || m.isBlob(t) || m.isReadableStream(t))
      return t;
    if (m.isArrayBufferView(t))
      return t.buffer;
    if (m.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return lo(t, this.formSerializer).toString();
      if ((c = m.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return rt(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || r ? (n.setContentType("application/json", !1), fo(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || $e.transitional, s = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (m.isResponse(t) || m.isReadableStream(t))
      return t;
    if (t && m.isString(t) && (s && !this.responseType || r)) {
      const a = !(n && n.silentJSONParsing) && r;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (c) {
        if (a)
          throw c.name === "SyntaxError" ? T.from(c, T.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: X.classes.FormData,
    Blob: X.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
m.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  $e.headers[e] = {};
});
const ho = m.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), po = (e) => {
  const t = {};
  let n, s, r;
  return e && e.split(`
`).forEach(function(a) {
    r = a.indexOf(":"), n = a.substring(0, r).trim().toLowerCase(), s = a.substring(r + 1).trim(), !(!n || t[n] && ho[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, Wt = /* @__PURE__ */ Symbol("internals");
function je(e) {
  return e && String(e).trim().toLowerCase();
}
function Xe(e) {
  return e === !1 || e == null ? e : m.isArray(e) ? e.map(Xe) : String(e);
}
function mo(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const bo = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function dt(e, t, n, s, r) {
  if (m.isFunction(s))
    return s.call(this, t, n);
  if (r && (t = n), !!m.isString(t)) {
    if (m.isString(s))
      return t.indexOf(s) !== -1;
    if (m.isRegExp(s))
      return s.test(t);
  }
}
function go(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function vo(e, t) {
  const n = m.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function(r, o, a) {
        return this[s].call(this, t, r, o, a);
      },
      configurable: !0
    });
  });
}
let ae = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function o(c, d, u) {
      const f = je(d);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const h = m.findKey(r, f);
      (!h || r[h] === void 0 || u === !0 || u === void 0 && r[h] !== !1) && (r[h || d] = Xe(c));
    }
    const a = (c, d) => m.forEach(c, (u, f) => o(u, f, d));
    if (m.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (m.isString(t) && (t = t.trim()) && !bo(t))
      a(po(t), n);
    else if (m.isObject(t) && m.isIterable(t)) {
      let c = {}, d, u;
      for (const f of t) {
        if (!m.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        c[u = f[0]] = (d = c[u]) ? m.isArray(d) ? [...d, f[1]] : [d, f[1]] : f[1];
      }
      a(c, n);
    } else
      t != null && o(n, t, s);
    return this;
  }
  get(t, n) {
    if (t = je(t), t) {
      const s = m.findKey(this, t);
      if (s) {
        const r = this[s];
        if (!n)
          return r;
        if (n === !0)
          return mo(r);
        if (m.isFunction(n))
          return n.call(this, r, s);
        if (m.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = je(t), t) {
      const s = m.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || dt(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function o(a) {
      if (a = je(a), a) {
        const c = m.findKey(s, a);
        c && (!n || dt(s, s[c], c, n)) && (delete s[c], r = !0);
      }
    }
    return m.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, r = !1;
    for (; s--; ) {
      const o = n[s];
      (!t || dt(this, this[o], o, t, !0)) && (delete this[o], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, s = {};
    return m.forEach(this, (r, o) => {
      const a = m.findKey(s, o);
      if (a) {
        n[a] = Xe(r), delete n[o];
        return;
      }
      const c = t ? go(o) : String(o).trim();
      c !== o && delete n[o], n[c] = Xe(r), s[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return m.forEach(this, (s, r) => {
      s != null && s !== !1 && (n[r] = t && m.isArray(s) ? s.join(", ") : s);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((r) => s.set(r)), s;
  }
  static accessor(t) {
    const s = (this[Wt] = this[Wt] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(a) {
      const c = je(a);
      s[c] || (vo(r, a), s[c] = !0);
    }
    return m.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
ae.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
m.reduceDescriptors(ae.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
m.freezeMethods(ae);
function ft(e, t) {
  const n = this || $e, s = t || n, r = ae.from(s.headers);
  let o = s.data;
  return m.forEach(e, function(c) {
    o = c.call(n, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function Un(e) {
  return !!(e && e.__CANCEL__);
}
function De(e, t, n) {
  T.call(this, e ?? "canceled", T.ERR_CANCELED, t, n), this.name = "CanceledError";
}
m.inherits(De, T, {
  __CANCEL__: !0
});
function Fn(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new T(
    "Request failed with status code " + n.status,
    [T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function xo(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function yo(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let r = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const u = Date.now(), f = s[o];
    a || (a = u), n[r] = d, s[r] = u;
    let h = o, v = 0;
    for (; h !== r; )
      v += n[h++], h = h % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), u - a < t)
      return;
    const w = f && u - f;
    return w ? Math.round(v * 1e3 / w) : void 0;
  };
}
function wo(e, t) {
  let n = 0, s = 1e3 / t, r, o;
  const a = (u, f = Date.now()) => {
    n = f, r = null, o && (clearTimeout(o), o = null), e(...u);
  };
  return [(...u) => {
    const f = Date.now(), h = f - n;
    h >= s ? a(u, f) : (r = u, o || (o = setTimeout(() => {
      o = null, a(r);
    }, s - h)));
  }, () => r && a(r)];
}
const Ye = (e, t, n = 3) => {
  let s = 0;
  const r = yo(50, 250);
  return wo((o) => {
    const a = o.loaded, c = o.lengthComputable ? o.total : void 0, d = a - s, u = r(d), f = a <= c;
    s = a;
    const h = {
      loaded: a,
      total: c,
      progress: c ? a / c : void 0,
      bytes: d,
      rate: u || void 0,
      estimated: u && c && f ? (c - a) / u : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, Kt = (e, t) => {
  const n = e != null;
  return [(s) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: s
  }), t[1]];
}, Xt = (e) => (...t) => m.asap(() => e(...t)), Eo = X.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, X.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(X.origin),
  X.navigator && /(msie|trident)/i.test(X.navigator.userAgent)
) : () => !0, _o = X.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, s, r, o, a) {
      if (typeof document > "u") return;
      const c = [`${e}=${encodeURIComponent(t)}`];
      m.isNumber(n) && c.push(`expires=${new Date(n).toUTCString()}`), m.isString(s) && c.push(`path=${s}`), m.isString(r) && c.push(`domain=${r}`), o === !0 && c.push("secure"), m.isString(a) && c.push(`SameSite=${a}`), document.cookie = c.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ro(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function So(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function jn(e, t, n) {
  let s = !Ro(t);
  return e && (s || n == !1) ? So(e, t) : t;
}
const Qt = (e) => e instanceof ae ? { ...e } : e;
function Ce(e, t) {
  t = t || {};
  const n = {};
  function s(u, f, h, v) {
    return m.isPlainObject(u) && m.isPlainObject(f) ? m.merge.call({ caseless: v }, u, f) : m.isPlainObject(f) ? m.merge({}, f) : m.isArray(f) ? f.slice() : f;
  }
  function r(u, f, h, v) {
    if (m.isUndefined(f)) {
      if (!m.isUndefined(u))
        return s(void 0, u, h, v);
    } else return s(u, f, h, v);
  }
  function o(u, f) {
    if (!m.isUndefined(f))
      return s(void 0, f);
  }
  function a(u, f) {
    if (m.isUndefined(f)) {
      if (!m.isUndefined(u))
        return s(void 0, u);
    } else return s(void 0, f);
  }
  function c(u, f, h) {
    if (h in t)
      return s(u, f);
    if (h in e)
      return s(void 0, u);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: c,
    headers: (u, f, h) => r(Qt(u), Qt(f), h, !0)
  };
  return m.forEach(Object.keys({ ...e, ...t }), function(f) {
    const h = d[f] || r, v = h(e[f], t[f], f);
    m.isUndefined(v) && h !== c || (n[f] = v);
  }), n;
}
const Mn = (e) => {
  const t = Ce({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: o, headers: a, auth: c } = t;
  if (t.headers = a = ae.from(a), t.url = Bn(jn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && a.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  ), m.isFormData(n)) {
    if (X.hasStandardBrowserEnv || X.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (m.isFunction(n.getHeaders)) {
      const d = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(d).forEach(([f, h]) => {
        u.includes(f.toLowerCase()) && a.set(f, h);
      });
    }
  }
  if (X.hasStandardBrowserEnv && (s && m.isFunction(s) && (s = s(t)), s || s !== !1 && Eo(t.url))) {
    const d = r && o && _o.read(o);
    d && a.set(r, d);
  }
  return t;
}, Ao = typeof XMLHttpRequest < "u", Oo = Ao && function(e) {
  return new Promise(function(n, s) {
    const r = Mn(e);
    let o = r.data;
    const a = ae.from(r.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: u } = r, f, h, v, w, g;
    function _() {
      w && w(), g && g(), r.cancelToken && r.cancelToken.unsubscribe(f), r.signal && r.signal.removeEventListener("abort", f);
    }
    let E = new XMLHttpRequest();
    E.open(r.method.toUpperCase(), r.url, !0), E.timeout = r.timeout;
    function p() {
      if (!E)
        return;
      const C = ae.from(
        "getAllResponseHeaders" in E && E.getAllResponseHeaders()
      ), F = {
        data: !c || c === "text" || c === "json" ? E.responseText : E.response,
        status: E.status,
        statusText: E.statusText,
        headers: C,
        config: e,
        request: E
      };
      Fn(function(U) {
        n(U), _();
      }, function(U) {
        s(U), _();
      }, F), E = null;
    }
    "onloadend" in E ? E.onloadend = p : E.onreadystatechange = function() {
      !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, E.onabort = function() {
      E && (s(new T("Request aborted", T.ECONNABORTED, e, E)), E = null);
    }, E.onerror = function(D) {
      const F = D && D.message ? D.message : "Network Error", q = new T(F, T.ERR_NETWORK, e, E);
      q.event = D || null, s(q), E = null;
    }, E.ontimeout = function() {
      let D = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const F = r.transitional || Dn;
      r.timeoutErrorMessage && (D = r.timeoutErrorMessage), s(new T(
        D,
        F.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
        e,
        E
      )), E = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in E && m.forEach(a.toJSON(), function(D, F) {
      E.setRequestHeader(F, D);
    }), m.isUndefined(r.withCredentials) || (E.withCredentials = !!r.withCredentials), c && c !== "json" && (E.responseType = r.responseType), u && ([v, g] = Ye(u, !0), E.addEventListener("progress", v)), d && E.upload && ([h, w] = Ye(d), E.upload.addEventListener("progress", h), E.upload.addEventListener("loadend", w)), (r.cancelToken || r.signal) && (f = (C) => {
      E && (s(!C || C.type ? new De(null, e, E) : C), E.abort(), E = null);
    }, r.cancelToken && r.cancelToken.subscribe(f), r.signal && (r.signal.aborted ? f() : r.signal.addEventListener("abort", f)));
    const k = xo(r.url);
    if (k && X.protocols.indexOf(k) === -1) {
      s(new T("Unsupported protocol " + k + ":", T.ERR_BAD_REQUEST, e));
      return;
    }
    E.send(o || null);
  });
}, Co = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let s = new AbortController(), r;
    const o = function(u) {
      if (!r) {
        r = !0, c();
        const f = u instanceof Error ? u : this.reason;
        s.abort(f instanceof T ? f : new De(f instanceof Error ? f.message : f));
      }
    };
    let a = t && setTimeout(() => {
      a = null, o(new T(`timeout ${t} of ms exceeded`, T.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", o));
    const { signal: d } = s;
    return d.unsubscribe = () => m.asap(c), d;
  }
}, ko = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, r;
  for (; s < n; )
    r = s + t, yield e.slice(s, r), s = r;
}, No = async function* (e, t) {
  for await (const n of To(e))
    yield* ko(n, t);
}, To = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: s } = await t.read();
      if (n)
        break;
      yield s;
    }
  } finally {
    await t.cancel();
  }
}, Yt = (e, t, n, s) => {
  const r = No(e, t);
  let o = 0, a, c = (d) => {
    a || (a = !0, s && s(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: u, value: f } = await r.next();
        if (u) {
          c(), d.close();
          return;
        }
        let h = f.byteLength;
        if (n) {
          let v = o += h;
          n(v);
        }
        d.enqueue(new Uint8Array(f));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(d) {
      return c(d), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, Zt = 64 * 1024, { isFunction: We } = m, Po = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(m.global), {
  ReadableStream: en,
  TextEncoder: tn
} = m.global, nn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Io = (e) => {
  e = m.merge.call({
    skipUndefined: !0
  }, Po, e);
  const { fetch: t, Request: n, Response: s } = e, r = t ? We(t) : typeof fetch == "function", o = We(n), a = We(s);
  if (!r)
    return !1;
  const c = r && We(en), d = r && (typeof tn == "function" ? /* @__PURE__ */ ((g) => (_) => g.encode(_))(new tn()) : async (g) => new Uint8Array(await new n(g).arrayBuffer())), u = o && c && nn(() => {
    let g = !1;
    const _ = new n(X.origin, {
      body: new en(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }).headers.has("Content-Type");
    return g && !_;
  }), f = a && c && nn(() => m.isReadableStream(new s("").body)), h = {
    stream: f && ((g) => g.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !h[g] && (h[g] = (_, E) => {
      let p = _ && _[g];
      if (p)
        return p.call(_);
      throw new T(`Response type '${g}' is not supported`, T.ERR_NOT_SUPPORT, E);
    });
  });
  const v = async (g) => {
    if (g == null)
      return 0;
    if (m.isBlob(g))
      return g.size;
    if (m.isSpecCompliantForm(g))
      return (await new n(X.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if (m.isArrayBufferView(g) || m.isArrayBuffer(g))
      return g.byteLength;
    if (m.isURLSearchParams(g) && (g = g + ""), m.isString(g))
      return (await d(g)).byteLength;
  }, w = async (g, _) => {
    const E = m.toFiniteNumber(g.getContentLength());
    return E ?? v(_);
  };
  return async (g) => {
    let {
      url: _,
      method: E,
      data: p,
      signal: k,
      cancelToken: C,
      timeout: D,
      onDownloadProgress: F,
      onUploadProgress: q,
      responseType: U,
      headers: Q,
      withCredentials: J = "same-origin",
      fetchOptions: ye
    } = Mn(g), pe = t || fetch;
    U = U ? (U + "").toLowerCase() : "text";
    let ve = Co([k, C && C.toAbortSignal()], D), W = null;
    const ce = ve && ve.unsubscribe && (() => {
      ve.unsubscribe();
    });
    let $;
    try {
      if (q && u && E !== "get" && E !== "head" && ($ = await w(Q, p)) !== 0) {
        let ie = new n(_, {
          method: "POST",
          body: p,
          duplex: "half"
        }), le;
        if (m.isFormData(p) && (le = ie.headers.get("content-type")) && Q.setContentType(le), ie.body) {
          const [be, ue] = Kt(
            $,
            Ye(Xt(q))
          );
          p = Yt(ie.body, Zt, be, ue);
        }
      }
      m.isString(J) || (J = J ? "include" : "omit");
      const K = o && "credentials" in n.prototype, me = {
        ...ye,
        signal: ve,
        method: E.toUpperCase(),
        headers: Q.normalize().toJSON(),
        body: p,
        duplex: "half",
        credentials: K ? J : void 0
      };
      W = o && new n(_, me);
      let te = await (o ? pe(W, ye) : pe(_, me));
      const ke = f && (U === "stream" || U === "response");
      if (f && (F || ke && ce)) {
        const ie = {};
        ["status", "statusText", "headers"].forEach((de) => {
          ie[de] = te[de];
        });
        const le = m.toFiniteNumber(te.headers.get("content-length")), [be, ue] = F && Kt(
          le,
          Ye(Xt(F), !0)
        ) || [];
        te = new s(
          Yt(te.body, Zt, be, () => {
            ue && ue(), ce && ce();
          }),
          ie
        );
      }
      U = U || "text";
      let we = await h[m.findKey(h, U) || "text"](te, g);
      return !ke && ce && ce(), await new Promise((ie, le) => {
        Fn(ie, le, {
          data: we,
          headers: ae.from(te.headers),
          status: te.status,
          statusText: te.statusText,
          config: g,
          request: W
        });
      });
    } catch (K) {
      throw ce && ce(), K && K.name === "TypeError" && /Load failed|fetch/i.test(K.message) ? Object.assign(
        new T("Network Error", T.ERR_NETWORK, g, W),
        {
          cause: K.cause || K
        }
      ) : T.from(K, K && K.code, g, W);
    }
  };
}, Bo = /* @__PURE__ */ new Map(), zn = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: s, Response: r } = t, o = [
    s,
    r,
    n
  ];
  let a = o.length, c = a, d, u, f = Bo;
  for (; c--; )
    d = o[c], u = f.get(d), u === void 0 && f.set(d, u = c ? /* @__PURE__ */ new Map() : Io(t)), f = u;
  return u;
};
zn();
const Ot = {
  http: Xr,
  xhr: Oo,
  fetch: {
    get: zn
  }
};
m.forEach(Ot, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const sn = (e) => `- ${e}`, Do = (e) => m.isFunction(e) || e === null || e === !1;
function Lo(e, t) {
  e = m.isArray(e) ? e : [e];
  const { length: n } = e;
  let s, r;
  const o = {};
  for (let a = 0; a < n; a++) {
    s = e[a];
    let c;
    if (r = s, !Do(s) && (r = Ot[(c = String(s)).toLowerCase()], r === void 0))
      throw new T(`Unknown adapter '${c}'`);
    if (r && (m.isFunction(r) || (r = r.get(t))))
      break;
    o[c || "#" + a] = r;
  }
  if (!r) {
    const a = Object.entries(o).map(
      ([d, u]) => `adapter ${d} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let c = n ? a.length > 1 ? `since :
` + a.map(sn).join(`
`) : " " + sn(a[0]) : "as no adapter specified";
    throw new T(
      "There is no suitable adapter to dispatch the request " + c,
      "ERR_NOT_SUPPORT"
    );
  }
  return r;
}
const qn = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Lo,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ot
};
function ht(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new De(null, e);
}
function rn(e) {
  return ht(e), e.headers = ae.from(e.headers), e.data = ft.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), qn.getAdapter(e.adapter || $e.adapter, e)(e).then(function(s) {
    return ht(e), s.data = ft.call(
      e,
      e.transformResponse,
      s
    ), s.headers = ae.from(s.headers), s;
  }, function(s) {
    return Un(s) || (ht(e), s && s.response && (s.response.data = ft.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = ae.from(s.response.headers))), Promise.reject(s);
  });
}
const Vn = "1.13.2", ot = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ot[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const on = {};
ot.transitional = function(t, n, s) {
  function r(o, a) {
    return "[Axios v" + Vn + "] Transitional option '" + o + "'" + a + (s ? ". " + s : "");
  }
  return (o, a, c) => {
    if (t === !1)
      throw new T(
        r(a, " has been removed" + (n ? " in " + n : "")),
        T.ERR_DEPRECATED
      );
    return n && !on[a] && (on[a] = !0, console.warn(
      r(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, c) : !0;
  };
};
ot.spelling = function(t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function Uo(e, t, n) {
  if (typeof e != "object")
    throw new T("options must be an object", T.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const o = s[r], a = t[o];
    if (a) {
      const c = e[o], d = c === void 0 || a(c, o, e);
      if (d !== !0)
        throw new T("option " + o + " must be " + d, T.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new T("Unknown option " + o, T.ERR_BAD_OPTION);
  }
}
const Qe = {
  assertOptions: Uo,
  validators: ot
}, ge = Qe.validators;
let Oe = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new $t(),
      response: new $t()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (s) {
      if (s instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
        const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? o && !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + o) : s.stack = o;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ce(this.defaults, n);
    const { transitional: s, paramsSerializer: r, headers: o } = n;
    s !== void 0 && Qe.assertOptions(s, {
      silentJSONParsing: ge.transitional(ge.boolean),
      forcedJSONParsing: ge.transitional(ge.boolean),
      clarifyTimeoutError: ge.transitional(ge.boolean)
    }, !1), r != null && (m.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : Qe.assertOptions(r, {
      encode: ge.function,
      serialize: ge.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Qe.assertOptions(n, {
      baseUrl: ge.spelling("baseURL"),
      withXsrfToken: ge.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && m.merge(
      o.common,
      o[n.method]
    );
    o && m.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete o[g];
      }
    ), n.headers = ae.concat(a, o);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(_) {
      typeof _.runWhen == "function" && _.runWhen(n) === !1 || (d = d && _.synchronous, c.unshift(_.fulfilled, _.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(_) {
      u.push(_.fulfilled, _.rejected);
    });
    let f, h = 0, v;
    if (!d) {
      const g = [rn.bind(this), void 0];
      for (g.unshift(...c), g.push(...u), v = g.length, f = Promise.resolve(n); h < v; )
        f = f.then(g[h++], g[h++]);
      return f;
    }
    v = c.length;
    let w = n;
    for (; h < v; ) {
      const g = c[h++], _ = c[h++];
      try {
        w = g(w);
      } catch (E) {
        _.call(this, E);
        break;
      }
    }
    try {
      f = rn.call(this, w);
    } catch (g) {
      return Promise.reject(g);
    }
    for (h = 0, v = u.length; h < v; )
      f = f.then(u[h++], u[h++]);
    return f;
  }
  getUri(t) {
    t = Ce(this.defaults, t);
    const n = jn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Bn(n, t.params, t.paramsSerializer);
  }
};
m.forEach(["delete", "get", "head", "options"], function(t) {
  Oe.prototype[t] = function(n, s) {
    return this.request(Ce(s || {}, {
      method: t,
      url: n,
      data: (s || {}).data
    }));
  };
});
m.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(o, a, c) {
      return this.request(Ce(c || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  Oe.prototype[t] = n(), Oe.prototype[t + "Form"] = n(!0);
});
let Fo = class Hn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners) return;
      let o = s._listeners.length;
      for (; o-- > 0; )
        s._listeners[o](r);
      s._listeners = null;
    }), this.promise.then = (r) => {
      let o;
      const a = new Promise((c) => {
        s.subscribe(c), o = c;
      }).then(r);
      return a.cancel = function() {
        s.unsubscribe(o);
      }, a;
    }, t(function(o, a, c) {
      s.reason || (s.reason = new De(o, a, c), n(s.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (s) => {
      t.abort(s);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Hn(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function jo(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Mo(e) {
  return m.isObject(e) && e.isAxiosError === !0;
}
const wt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(wt).forEach(([e, t]) => {
  wt[t] = e;
});
function Gn(e) {
  const t = new Oe(e), n = En(Oe.prototype.request, t);
  return m.extend(n, Oe.prototype, t, { allOwnKeys: !0 }), m.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return Gn(Ce(e, r));
  }, n;
}
const V = Gn($e);
V.Axios = Oe;
V.CanceledError = De;
V.CancelToken = Fo;
V.isCancel = Un;
V.VERSION = Vn;
V.toFormData = rt;
V.AxiosError = T;
V.Cancel = V.CanceledError;
V.all = function(t) {
  return Promise.all(t);
};
V.spread = jo;
V.isAxiosError = Mo;
V.mergeConfig = Ce;
V.AxiosHeaders = ae;
V.formToJSON = (e) => Ln(m.isHTMLForm(e) ? new FormData(e) : e);
V.getAdapter = qn.getAdapter;
V.HttpStatusCode = wt;
V.default = V;
const {
  Axios: Ei,
  AxiosError: _i,
  CanceledError: Ri,
  isCancel: Si,
  CancelToken: Ai,
  VERSION: Oi,
  all: Ci,
  Cancel: ki,
  isAxiosError: Ni,
  spread: Ti,
  toFormData: Pi,
  AxiosHeaders: Ii,
  HttpStatusCode: Bi,
  formToJSON: Di,
  getAdapter: Li,
  mergeConfig: Ui
} = V, zo = ["id"], qo = { class: "flex gap-2 items-center" }, Vo = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  class: "text-amber-400 fill-amber-400/20"
}, Ho = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, Go = {
  key: 0,
  class: "max-w-[1440px] mx-auto px-4 py-6 md:px-8"
}, Jo = { class: "grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12" }, $o = { class: "space-y-4" }, Wo = {
  key: 1,
  class: "max-w-[1440px] mx-auto md:px-8 md:py-8"
}, Ko = { class: "hidden md:flex text-sm mb-8 items-center gap-2 justify-between" }, Xo = { class: "hover:text-blue-500 transition-colors cursor-pointer capitalize" }, Qo = { class: "relative w-4 h-4 overflow-hidden" }, Yo = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  class: "animate-[spin_3s_linear_infinite]"
}, Zo = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, ea = { class: "text-xs font-semibold tracking-wide" }, ta = { class: "hidden md:block mb-10" }, na = { class: "flex gap-2 mb-4" }, sa = {
  key: 0,
  class: "px-2.5 py-1 rounded-md bg-rose-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm shadow-rose-500/30"
}, ra = { class: "flex items-center text-amber-500 gap-1.5" }, oa = { class: "flex" }, aa = {
  key: 0,
  class: "tracking-wide"
}, ia = { class: "font-mono" }, la = {
  key: 0,
  class: "flex flex-wrap gap-2 mt-4"
}, ca = { class: "grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-0 lg:gap-16 items-start" }, ua = { class: "w-full" }, da = { class: "md:hidden px-4 pt-2 mb-6" }, fa = { class: "flex gap-2 mb-3" }, ha = {
  key: 0,
  class: "px-2 py-0.5 rounded bg-rose-500 text-white text-[10px] font-bold shadow-md shadow-rose-500/20"
}, pa = { class: "flex items-center text-amber-500 text-sm" }, ma = { class: "text-xs opacity-60 ml-1 text-current" }, ba = {
  key: 0,
  class: "flex flex-wrap gap-2 mt-3 no-scrollbar overflow-x-auto"
}, ga = { class: "grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-10 mb-12" }, va = { class: "relative group" }, xa = { class: "hidden md:flex gap-4 h-[600px]" }, ya = { class: "flex flex-col gap-3 w-[80px] overflow-y-auto no-scrollbar py-1" }, wa = ["onMouseover"], Ea = ["src"], _a = ["src"], Ra = { class: "absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity" }, Sa = ["fill"], Aa = ["src"], Oa = { class: "px-4 lg:px-0 flex flex-col gap-8" }, Ca = { class: "flex items-baseline gap-3 mb-2" }, ka = { class: "text-3xl font-extrabold text-rose-500 tracking-tight" }, Na = {
  key: 0,
  class: "text-base text-slate-400 line-through decoration-slate-400/50"
}, Ta = { key: 0 }, Pa = { class: "flex flex-wrap gap-3" }, Ia = ["onClick"], Ba = ["src"], Da = {
  key: 2,
  class: "absolute inset-0 bg-black/20 flex items-center justify-center z-10 backdrop-blur-[1px]"
}, La = { key: 1 }, Ua = { class: "flex justify-between items-center mb-3" }, Fa = { class: "flex flex-wrap gap-2.5" }, ja = ["onClick"], Ma = { class: "space-y-3 mb-5" }, za = ["innerHTML"], qa = {
  id: "characteristics",
  class: "scroll-mt-32"
}, Va = ["onClick"], Ha = { class: "flex justify-between items-center mb-8" }, Ga = { class: "grid gap-6 md:grid-cols-2" }, Ja = { class: "flex justify-between items-start mb-4" }, $a = { class: "flex items-center gap-3" }, Wa = { class: "hidden lg:block w-[380px]" }, Ka = { class: "flex items-start justify-between mb-6" }, Xa = { class: "flex items-baseline gap-2.5" }, Qa = { class: "text-[32px] font-extrabold leading-none text-rose-500 tracking-tight" }, Ya = {
  key: 0,
  class: "text-base text-slate-400 line-through decoration-slate-400/50"
}, Za = { class: "flex gap-4 text-sm group" }, ei = { class: "flex gap-4 text-sm group" }, ti = { class: "space-y-3" }, ni = { class: "flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x" }, si = ["src"], ri = { class: "absolute top-3 left-3 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg" }, oi = { class: "mb-1.5 flex items-baseline gap-2.5" }, ai = { class: "text-xs text-slate-400" }, ii = { class: "flex flex-col" }, li = {
  key: 0,
  class: "text-xs text-slate-400 line-through mt-0.5"
}, ci = { class: "flex justify-between items-center mb-6" }, ui = {
  key: 0,
  class: "overflow-y-auto flex-1 flex justify-center p-2"
}, di = ["src"], fi = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=view_product", hi = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", pi = /* @__PURE__ */ Ze({
  __name: "ProductPage",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    const t = e, n = {
      Default: [
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800",
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
        "https://images.unsplash.com/photo-1521334884684-d80222895322?w=800",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800"
      ]
    }, s = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], r = re(t._$p?.data?.curr?.data?.theme || "light"), o = re({
      id: "",
      brand: "",
      title: "",
      category: [],
      field_name: [],
      field_value: [],
      metadata: "{}",
      variant: [],
      variant_prices: [],
      variant_mrp: [],
      size: [],
      hashtags: []
      // ADDED INITIALIZATION
    }), a = re(!0), c = re(""), d = re(""), u = re(""), f = re(0), h = re(!1), v = re(!1), w = re(!1), g = re([
      { name: "Alexander", date: "Dec 12", text: "Excellent quality, fits size-to-size. The fabric is breathable and feels premium.", color: "#005bff" },
      { name: "Maria K.", date: "Nov 05", text: "Fast delivery. Color matches the photo perfectly. Packaging was secure.", color: "#f91155" },
      { name: "Igor S.", date: "Oct 22", text: "Good value for money. Stitching is solid and the design is trendy.", color: "#00c853" },
      { name: "Elena P.", date: "Sep 15", text: "Comfortable to wear all day. Received many compliments on the style.", color: "#ff6d00" },
      { name: "Dmitry V.", date: "Aug 30", text: "The size chart was accurate. The material is soft and durable.", color: "#d500f9" },
      { name: "Svetlana R.", date: "Jul 18", text: "Loved the color options. The fit is flattering and true to size.", color: "#00bcd4" }
    ]), _ = re([
      { title: "Cotton T-Shirt Basic", price: 1200, mrp: 2400, discount: 50, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300" },
      { title: "Slim Fit Jeans Blue", price: 2500, mrp: 3500, discount: 28, image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=300" },
      { title: "Casual Hoodie Gray", price: 1800, mrp: 2200, discount: 15, image: "https://images.unsplash.com/photo-1556906781-9a412961d28c?w=300" },
      { title: "Summer Shorts", price: 950, mrp: 1500, discount: 35, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300" },
      { title: "Leather Sneakers", price: 3200, mrp: 4e3, discount: 20, image: "https://images.unsplash.com/photo-1519741491921-9f4c5b3f3e2d?w=300" },
      { title: "Denim Jacket", price: 2700, mrp: 4500, discount: 40, image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=300" },
      { title: "Wool Scarf", price: 800, mrp: 1200, discount: 33, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300" }
    ]), E = re([
      { question: "Payment Methods", answer: "We accept Visa, MasterCard, Mir cards, and SBP. You can also pay upon receipt.", isOpen: !1 },
      { question: "Delivery Options", answer: "Courier delivery to your door or pickup points. Free delivery for orders over 2000₽.", isOpen: !1 },
      { question: "Return Policy", answer: "You can return items within 14 days of receipt. Items must be unused and in original packaging.", isOpen: !1 },
      { question: "Warranty Information", answer: "All products come with a 6-month warranty covering manufacturing defects.", isOpen: !1 },
      { question: "Sizing Guide", answer: "Please refer to our size chart for accurate measurements to ensure the best fit.", isOpen: !1 }
    ]), p = j(() => r.value === "dark"), k = j(() => t._p?.f?.name ? t._p.f.name("pd-root") : "pd-root"), C = j(() => {
      if (!o.value.metadata) return {};
      try {
        return JSON.parse(o.value.metadata);
      } catch {
        return {};
      }
    }), D = j(() => C.value.color ? C.value.color.map((A) => {
      let i = A.image?.[0]?.url ? A.image[0].url : null;
      return i && i.includes("example.com") && (i = null), { id: A.id, name: A.name, url: i };
    }) : []), F = j(() => {
      const A = d.value, i = C.value.color?.find((b) => b.name === A);
      if (i && i.image && i.image.length > 0) {
        const b = i.image.filter((x) => x.url && !x.url.includes("example.com")).map((x) => x.url);
        if (b.length) return b;
      }
      return n.Default;
    }), q = j(() => {
      const A = o.value.size;
      return !A || !Array.isArray(A) || A.length === 0 ? [] : [...new Set(A.map((b) => String(b).trim()))].filter(Boolean).sort((b, x) => {
        const O = s.indexOf(b.toUpperCase()), I = s.indexOf(x.toUpperCase());
        if (O !== -1 && I !== -1) return O - I;
        if (O !== -1) return -1;
        if (I !== -1) return 1;
        const M = parseFloat(b), B = parseFloat(x);
        return !isNaN(M) && !isNaN(B) ? M - B : b.localeCompare(x, void 0, { numeric: !0 });
      });
    }), U = j(() => {
      const A = C.value.size_info?.representation?.url || C.value.size_info?.chart?.url || null;
      return A && !A.includes("example.com") ? A : null;
    }), Q = j(() => o.value.variant_prices?.[0] || 0), J = j(() => o.value.variant_mrp?.[0] || 0), ye = j(() => Math.floor(Q.value * 0.95)), pe = j(() => J.value > Q.value ? Math.round((J.value - Q.value) / J.value * 100) : 0), ve = j(() => {
      const A = o.value.field_name?.indexOf("Product Details");
      return A !== -1 && o.value.field_value?.[A] ? o.value.field_value[A] : "";
    }), W = j(() => o.value.field_name ? o.value.field_name.map((A, i) => ({
      name: A,
      value: o.value.field_value[i]?.replace(/<[^>]*>/g, " ").trim()
    })).filter((A) => A.name !== "Product Details" && A.value) : []), ce = j(() => v.value ? W.value : W.value.slice(0, 5)), $ = (A) => new Intl.NumberFormat("ru-RU").format(A), K = () => {
      const A = r.value === "dark" ? "light" : "dark";
      r.value = A, t._p?.f?.set_theme && t._p.f.set_theme({ name: A, el_id: k.value }), t._$cb && t._$p?.data?.curr?.data && (t._$p.data.curr.data.theme = A, t._$cb.change && t._$cb.change({ _$p: t._$p }));
    }, me = () => {
      console.log("Back requested");
    }, te = () => navigator.share?.({ title: o.value.title, url: window.location.href }).catch(console.error), ke = () => w.value = !w.value, we = (A) => {
      d.value = A.name, c.value = F.value[0];
    }, ie = (A) => {
      E.value[A].isOpen = !E.value[A].isOpen;
    }, le = () => document.getElementById("characteristics")?.scrollIntoView({ behavior: "smooth" }), be = () => {
      const A = document.getElementById(k.value);
      A && t._$cb?.add && t._$cb.add({
        $d: t._$p?.data?.curr?.data || {},
        el: A
      });
    }, ue = (A) => {
      const i = A.target;
      f.value = Math.round(i.scrollLeft / i.clientWidth);
    }, de = async () => {
      a.value = !0;
      const i = { slug: "hugo-boss-hugo-boss-ethnic-jute-round-neck-blouses-c1c03ffa", collection: "products" };
      try {
        const b = await V.post(fi, i, {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${hi.trim()}` }
        });
        if (b.data.success && b.data.data.length)
          o.value = b.data.data[0].document;
        else
          throw new Error("No data found");
      } catch (b) {
        console.warn("API Error, using fallback data:", b);
      } finally {
        D.value.length && we(D.value[0]), q.value.length && (u.value = q.value[0]), c.value = F.value[0], a.value = !1;
      }
    };
    return Yn(() => {
      de();
      const A = document.getElementById(k.value);
      A && r.value && t._p?.f?.set_theme && t._p.f.set_theme({ name: r.value, el_id: A.id });
    }), an(() => t._$p?.data?.curr?.id, de), (A, i) => (R(), S("div", {
      id: k.value,
      class: y(["font-sans min-h-screen pb-[100px] md:pb-0 antialiased transition-colors duration-300 ease-in-out selection:bg-rose-500 selection:text-white", p.value ? "bg-[#0f172a] text-slate-200" : "bg-[#F9FAFB] text-slate-900"])
    }, [
      l("nav", {
        class: y(["sticky top-0 z-50 backdrop-blur-xl flex justify-between items-center px-4 py-3 shadow-sm md:hidden border-b transition-colors duration-300", p.value ? "bg-[#0f172a]/80 border-slate-800" : "bg-white/80 border-slate-200/60"])
      }, [
        l("button", {
          class: y(["p-2 -ml-2 transition-all duration-200 rounded-full active:scale-90", p.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
          onClick: me
        }, [...i[4] || (i[4] = [
          l("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            l("path", { d: "M15 18l-6-6 6-6" })
          ], -1)
        ])], 2),
        l("div", qo, [
          l("button", {
            class: y(["p-2 transition-all duration-200 rounded-full active:scale-90", p.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
            onClick: K
          }, [
            p.value ? (R(), S("svg", Vo, [...i[5] || (i[5] = [
              Ue('<circle cx="12" cy="12" r="5" data-v-7e3b9c44></circle><line x1="12" y1="1" x2="12" y2="3" data-v-7e3b9c44></line><line x1="12" y1="21" x2="12" y2="23" data-v-7e3b9c44></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-7e3b9c44></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-7e3b9c44></line><line x1="1" y1="12" x2="3" y2="12" data-v-7e3b9c44></line><line x1="21" y1="12" x2="23" y2="12" data-v-7e3b9c44></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-7e3b9c44></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-7e3b9c44></line>', 9)
            ])])) : (R(), S("svg", Ho, [...i[6] || (i[6] = [
              l("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
            ])]))
          ], 2),
          l("button", {
            class: y(["p-2 transition-all duration-200 rounded-full active:scale-90", p.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
            onClick: te
          }, [...i[7] || (i[7] = [
            Ue('<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-7e3b9c44><circle cx="18" cy="5" r="3" data-v-7e3b9c44></circle><circle cx="6" cy="12" r="3" data-v-7e3b9c44></circle><circle cx="18" cy="19" r="3" data-v-7e3b9c44></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-v-7e3b9c44></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-v-7e3b9c44></line></svg>', 1)
          ])], 2)
        ])
      ], 2),
      a.value ? (R(), S("div", Go, [
        l("div", {
          class: y(["hidden md:block h-5 w-64 rounded mb-8 animate-shimmer", p.value ? "bg-slate-800" : "bg-gray-200"])
        }, null, 2),
        l("div", Jo, [
          l("div", null, [
            l("div", {
              class: y(["block md:hidden h-[400px] w-full rounded-2xl mb-6 animate-shimmer", p.value ? "bg-slate-800" : "bg-gray-200"])
            }, null, 2),
            l("div", {
              class: y(["hidden md:block h-[600px] w-full rounded-3xl mb-8 animate-shimmer", p.value ? "bg-slate-800" : "bg-gray-200"])
            }, null, 2),
            l("div", $o, [
              l("div", {
                class: y(["h-8 w-3/4 rounded-lg animate-shimmer", p.value ? "bg-slate-800" : "bg-gray-200"])
              }, null, 2),
              l("div", {
                class: y(["h-6 w-1/2 rounded-lg animate-shimmer", p.value ? "bg-slate-800" : "bg-gray-200"])
              }, null, 2)
            ])
          ]),
          l("div", {
            class: y(["hidden lg:block h-[500px] rounded-3xl animate-shimmer", p.value ? "bg-slate-800" : "bg-gray-200"])
          }, null, 2)
        ])
      ])) : o.value && o.value.id ? (R(), S("div", Wo, [
        l("nav", Ko, [
          l("div", {
            class: y(["flex items-center gap-2", p.value ? "text-slate-400" : "text-slate-500"])
          }, [
            l("span", {
              class: "hover:text-blue-500 transition-colors cursor-pointer",
              onClick: me
            }, "Home"),
            i[9] || (i[9] = Ee()),
            i[10] || (i[10] = l("span", { class: "opacity-30" }, "/", -1)),
            (R(!0), S(Y, null, Z(o.value.category, (b, x) => (R(), S("span", {
              key: x,
              class: "flex items-center gap-2"
            }, [
              l("span", Xo, N(b), 1),
              i[8] || (i[8] = l("span", { class: "opacity-30" }, "/", -1))
            ]))), 128)),
            l("span", {
              class: y(["font-medium truncate max-w-[200px]", p.value ? "text-slate-200" : "text-slate-900"])
            }, N(o.value.title), 3)
          ], 2),
          l("button", {
            class: y(["group flex items-center gap-2 px-4 py-2 rounded-full transition-all border shadow-sm hover:shadow-md active:scale-95", p.value ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"]),
            onClick: K
          }, [
            l("div", Qo, [
              p.value ? (R(), S("svg", Yo, [...i[11] || (i[11] = [
                Ue('<circle cx="12" cy="12" r="5" data-v-7e3b9c44></circle><line x1="12" y1="1" x2="12" y2="3" data-v-7e3b9c44></line><line x1="12" y1="21" x2="12" y2="23" data-v-7e3b9c44></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-7e3b9c44></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-7e3b9c44></line><line x1="1" y1="12" x2="3" y2="12" data-v-7e3b9c44></line><line x1="21" y1="12" x2="23" y2="12" data-v-7e3b9c44></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-7e3b9c44></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-7e3b9c44></line>', 9)
              ])])) : (R(), S("svg", Zo, [...i[12] || (i[12] = [
                l("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
              ])]))
            ]),
            l("span", ea, N(p.value ? "Dark Mode" : "Light Mode"), 1)
          ], 2)
        ]),
        l("header", ta, [
          l("div", na, [
            l("span", {
              class: y(["px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border shadow-sm", p.value ? "bg-amber-900/30 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-700 border-amber-100"])
            }, "Bestseller", 2),
            pe.value > 0 ? (R(), S("span", sa, "-" + N(pe.value) + "% Sale", 1)) : se("", !0)
          ]),
          l("h1", {
            class: y(["text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4 tracking-tight", p.value ? "text-white" : "text-slate-900"])
          }, N(o.value.title), 3),
          l("div", {
            class: y(["flex items-center gap-4 text-sm font-medium", p.value ? "text-slate-400" : "text-slate-500"])
          }, [
            l("div", ra, [
              l("span", oa, [
                (R(), S(Y, null, Z(5, (b) => l("svg", {
                  key: b,
                  class: "w-4 h-4 fill-current",
                  viewBox: "0 0 20 20"
                }, [...i[13] || (i[13] = [
                  l("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
                ])])), 64))
              ]),
              l("span", {
                class: y(["font-bold ml-1", p.value ? "text-white" : "text-slate-900"])
              }, "4.9", 2),
              l("a", {
                href: "#reviews",
                class: y(["ml-2 border-b border-dotted hover:text-blue-500 hover:border-blue-500 transition-colors", p.value ? "border-slate-600" : "border-slate-400"])
              }, N(g.value.length) + " reviews ", 3)
            ]),
            i[15] || (i[15] = l("span", { class: "opacity-30 text-xl font-light" }, "|", -1)),
            o.value.id ? (R(), S("span", aa, [
              i[14] || (i[14] = Ee("Art: ", -1)),
              l("span", ia, N(o.value.id.includes("__") ? o.value.id.split("__")[1] : o.value.id), 1)
            ])) : se("", !0)
          ], 2),
          o.value.hashtags && o.value.hashtags.length ? (R(), S("div", la, [
            (R(!0), S(Y, null, Z(o.value.hashtags, (b, x) => (R(), S("span", {
              key: x,
              class: y(["px-3 py-1 text-xs font-semibold rounded-full border transition-all cursor-pointer hover:shadow-sm", p.value ? "bg-slate-800 text-blue-400 border-slate-700 hover:border-blue-500/50" : "bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100"])
            }, N(b), 3))), 128))
          ])) : se("", !0)
        ]),
        l("div", ca, [
          l("div", ua, [
            l("div", da, [
              l("div", fa, [
                l("span", {
                  class: y(["px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border", p.value ? "bg-amber-900/30 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-700 border-amber-100"])
                }, "Bestseller", 2),
                pe.value > 0 ? (R(), S("span", ha, "-" + N(pe.value) + "%", 1)) : se("", !0)
              ]),
              l("h1", {
                class: y(["text-[26px] font-bold leading-[1.2] mb-3 tracking-tight", p.value ? "text-white" : "text-slate-900"])
              }, N(o.value.title), 3),
              l("div", pa, [
                (R(), S(Y, null, Z(5, (b) => l("svg", {
                  key: b,
                  class: "w-3.5 h-3.5 fill-current",
                  viewBox: "0 0 20 20"
                }, [...i[16] || (i[16] = [
                  l("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
                ])])), 64)),
                l("span", {
                  class: y(["font-bold mx-1.5", p.value ? "text-white" : "text-slate-900"])
                }, "4.9", 2),
                l("span", ma, N(g.value.length) + " reviews", 1)
              ]),
              o.value.hashtags && o.value.hashtags.length ? (R(), S("div", ba, [
                (R(!0), S(Y, null, Z(o.value.hashtags, (b, x) => (R(), S("span", {
                  key: x,
                  class: y(["px-2.5 py-1 text-[11px] font-semibold rounded-full border whitespace-nowrap", p.value ? "bg-slate-800 text-blue-400 border-slate-700" : "bg-blue-50 text-blue-600 border-blue-100"])
                }, N(b), 3))), 128))
              ])) : se("", !0)
            ]),
            l("div", ga, [
              l("div", va, [
                l("div", xa, [
                  l("div", ya, [
                    (R(!0), S(Y, null, Z(F.value, (b, x) => (R(), S("div", {
                      key: x,
                      class: y(["w-[80px] h-[100px] rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 relative border", [
                        p.value ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100",
                        c.value === b ? "ring-2 ring-blue-500 ring-offset-2 " + (p.value ? "ring-offset-slate-900" : "ring-offset-white") : "hover:opacity-80 opacity-70 hover:opacity-100"
                      ]]),
                      onMouseover: (O) => c.value = b
                    }, [
                      l("img", {
                        src: b,
                        class: "w-full h-full object-cover"
                      }, null, 8, Ea)
                    ], 42, wa))), 128))
                  ]),
                  l("div", {
                    class: y(["flex-1 rounded-[32px] flex items-center justify-center overflow-hidden cursor-zoom-in relative shadow-sm border", p.value ? "bg-slate-800/50 border-slate-700" : "bg-white border-slate-100"])
                  }, [
                    l("img", {
                      src: c.value,
                      class: "max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-110"
                    }, null, 8, _a),
                    l("div", Ra, [
                      l("button", {
                        class: "p-2 rounded-full bg-white/90 shadow-md text-slate-700 hover:text-blue-600 dark:bg-slate-800/90 dark:text-slate-200",
                        onClick: ke
                      }, [
                        (R(), S("svg", {
                          fill: w.value ? "currentColor" : "none",
                          class: y(w.value ? "text-rose-500" : ""),
                          width: "20",
                          height: "20",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [...i[17] || (i[17] = [
                          l("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          }, null, -1)
                        ])], 10, Sa))
                      ])
                    ])
                  ], 2)
                ]),
                l("div", {
                  class: y(["md:hidden relative w-full pb-6 transition-colors duration-300", p.value ? "bg-[#0f172a]" : "bg-[#F9FAFB]"])
                }, [
                  l("div", {
                    class: "flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full h-[100vw] max-h-[500px]",
                    onScroll: ue
                  }, [
                    (R(!0), S(Y, null, Z(F.value, (b, x) => (R(), S("div", {
                      class: "min-w-full snap-center flex items-center justify-center p-6",
                      key: x
                    }, [
                      l("img", {
                        src: b,
                        class: "max-w-full max-h-full object-contain drop-shadow-xl"
                      }, null, 8, Aa)
                    ]))), 128))
                  ], 32),
                  l("div", {
                    class: y(["absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md z-10 border", p.value ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"])
                  }, [
                    (R(!0), S(Y, null, Z(F.value, (b, x) => (R(), S("span", {
                      key: x,
                      class: y(["h-1.5 rounded-full transition-all duration-300 shadow-sm", f.value === x ? p.value ? "bg-white w-4" : "bg-slate-800 w-4" : p.value ? "bg-white/30 w-1.5" : "bg-slate-800/30 w-1.5"])
                    }, null, 2))), 128))
                  ], 2)
                ], 2)
              ]),
              l("div", Oa, [
                l("div", {
                  class: y(["md:hidden pb-6 border-b", p.value ? "border-slate-800" : "border-slate-200"])
                }, [
                  l("div", Ca, [
                    l("span", ka, N($(Q.value)) + " ₽", 1),
                    J.value > Q.value ? (R(), S("span", Na, N($(J.value)) + " ₽", 1)) : se("", !0)
                  ]),
                  l("div", {
                    class: y(["inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg border shadow-sm", p.value ? "bg-emerald-900/20 text-emerald-400 border-emerald-900/30" : "bg-emerald-50 text-emerald-700 border-emerald-100"])
                  }, [
                    l("span", null, N($(ye.value)) + " ₽", 1),
                    i[18] || (i[18] = Ee(" with Ozon Card ", -1))
                  ], 2)
                ], 2),
                D.value.length ? (R(), S("div", Ta, [
                  l("div", {
                    class: y(["text-sm font-medium mb-3 flex items-center gap-2", p.value ? "text-slate-400" : "text-slate-500"])
                  }, [
                    i[19] || (i[19] = l("span", null, "Color:", -1)),
                    l("span", {
                      class: y(["font-bold text-base", p.value ? "text-white" : "text-slate-900"])
                    }, N(d.value), 3)
                  ], 2),
                  l("div", Pa, [
                    (R(!0), S(Y, null, Z(D.value, (b) => (R(), S("div", {
                      key: b.id,
                      class: y(["relative w-[72px] h-[90px] rounded-xl cursor-pointer overflow-hidden transition-all duration-200 group border", [
                        p.value ? "border-slate-700" : "border-slate-200",
                        d.value === b.name ? "ring-2 ring-blue-500 ring-offset-2 " + (p.value ? "ring-offset-slate-900" : "ring-offset-white") : "hover:opacity-80"
                      ]]),
                      onClick: (x) => we(b)
                    }, [
                      b.url ? (R(), S("img", {
                        key: 0,
                        src: b.url,
                        class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      }, null, 8, Ba)) : (R(), S("span", {
                        key: 1,
                        class: y(["flex w-full h-full items-center justify-center p-1 text-center text-xs leading-tight font-medium", p.value ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"])
                      }, N(b.name), 3)),
                      d.value === b.name ? (R(), S("div", Da, [...i[20] || (i[20] = [
                        l("div", { class: "bg-blue-600 rounded-full p-1 shadow-lg animate-[slideUp_0.2s_ease-out]" }, [
                          l("svg", {
                            class: "w-3.5 h-3.5 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "3.5"
                          }, [
                            l("path", { d: "M5 13l4 4L19 7" })
                          ])
                        ], -1)
                      ])])) : se("", !0)
                    ], 10, Ia))), 128))
                  ])
                ])) : se("", !0),
                q.value.length ? (R(), S("div", La, [
                  l("div", Ua, [
                    l("span", {
                      class: y(["text-sm font-medium flex items-center gap-2", p.value ? "text-slate-400" : "text-slate-500"])
                    }, [
                      i[21] || (i[21] = l("span", null, "Size:", -1)),
                      l("span", {
                        class: y(["font-bold text-base", p.value ? "text-white" : "text-slate-900"])
                      }, N(u.value), 3)
                    ], 2),
                    U.value ? (R(), S("button", {
                      key: 0,
                      class: y(["text-xs font-bold flex items-center gap-1.5 transition hover:opacity-70 px-2 py-1 rounded-md", p.value ? "text-blue-400 bg-blue-400/10" : "text-blue-600 bg-blue-50"]),
                      onClick: i[0] || (i[0] = (b) => h.value = !0)
                    }, [...i[22] || (i[22] = [
                      l("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        l("path", { d: "M19.5 12h-15M19.5 12l-4-4m4 4l-4 4" })
                      ], -1),
                      Ee(" Size Chart ", -1)
                    ])], 2)) : se("", !0)
                  ]),
                  l("div", Fa, [
                    (R(!0), S(Y, null, Z(q.value, (b) => (R(), S("button", {
                      key: b,
                      class: y(["h-12 min-w-[3.5rem] px-4 rounded-xl text-sm font-semibold transition-all duration-200 border relative overflow-hidden", [
                        u.value === b ? p.value ? "bg-slate-800 border-blue-500 text-blue-400 ring-1 ring-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]" : "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200" : p.value ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-500" : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      ]]),
                      onClick: (x) => u.value = b
                    }, N(b), 11, ja))), 128))
                  ])
                ])) : se("", !0),
                l("div", {
                  class: y(["hidden lg:block p-6 rounded-2xl border transition-colors duration-300", p.value ? "bg-slate-800/40 border-slate-700" : "bg-slate-50/50 border-slate-200/60"])
                }, [
                  l("h3", {
                    class: y(["text-xs font-bold mb-4 uppercase tracking-wider opacity-60", p.value ? "text-white" : "text-slate-900"])
                  }, "Key Features", 2),
                  l("ul", Ma, [
                    (R(!0), S(Y, null, Z(W.value.slice(0, 5), (b, x) => (R(), S("li", {
                      key: x,
                      class: y(["text-sm flex justify-between items-start border-b pb-2 last:border-0 border-dashed", p.value ? "border-slate-700/50" : "border-slate-200"])
                    }, [
                      l("span", {
                        class: y(p.value ? "text-slate-400" : "text-slate-500")
                      }, N(b.name), 3),
                      l("span", {
                        class: y(["font-medium text-right max-w-[60%]", p.value ? "text-slate-200" : "text-slate-900"])
                      }, N(b.value), 3)
                    ], 2))), 128))
                  ]),
                  l("button", {
                    class: y(["text-sm font-bold flex items-center gap-1 transition hover:opacity-70 group", p.value ? "text-blue-400" : "text-blue-600"]),
                    onClick: le
                  }, [...i[23] || (i[23] = [
                    Ee(" View all characteristics ", -1),
                    l("svg", {
                      class: "group-hover:translate-x-1 transition-transform",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      l("path", { d: "M6 9l6 6 6-6" })
                    ], -1)
                  ])], 2)
                ], 2)
              ])
            ]),
            l("div", {
              class: y(["px-4 lg:px-0 mt-16 pt-10 border-t", p.value ? "border-slate-800" : "border-slate-200"])
            }, [
              l("h2", {
                class: y(["text-2xl font-bold mb-6 tracking-tight", p.value ? "text-white" : "text-slate-900"])
              }, "Description", 2),
              l("div", {
                class: y(["prose max-w-3xl leading-relaxed mb-12 text-[1.05rem]", p.value ? "prose-invert text-slate-300" : "prose-slate text-slate-600"]),
                innerHTML: ve.value
              }, null, 10, za),
              l("div", qa, [
                l("h3", {
                  class: y(["text-2xl font-bold mb-6 tracking-tight", p.value ? "text-white" : "text-slate-900"])
                }, "All Characteristics", 2),
                l("div", {
                  class: y(["rounded-2xl border overflow-hidden", p.value ? "border-slate-800" : "border-slate-200"])
                }, [
                  (R(!0), S(Y, null, Z(ce.value, (b, x) => (R(), S("div", {
                    class: y(["flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:px-6 transition-colors", [
                      x % 2 === 0 ? p.value ? "bg-slate-800/30" : "bg-slate-50" : p.value ? "bg-transparent" : "bg-white"
                    ]]),
                    key: x
                  }, [
                    l("span", {
                      class: y(["text-sm mb-1 sm:mb-0 font-medium opacity-80", p.value ? "text-slate-400" : "text-slate-500"])
                    }, N(b.name), 3),
                    l("span", {
                      class: y(["font-semibold text-sm sm:text-right", p.value ? "text-slate-200" : "text-slate-900"])
                    }, N(b.value), 3)
                  ], 2))), 128))
                ], 2),
                W.value.length > 5 ? (R(), S("button", {
                  key: 0,
                  class: y(["mt-6 flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-xl border font-bold text-sm transition-all hover:shadow-md active:scale-[0.98]", p.value ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"]),
                  onClick: i[1] || (i[1] = (b) => v.value = !v.value)
                }, [
                  Ee(N(v.value ? "Hide characteristics" : "Show all characteristics") + " ", 1),
                  (R(), S("svg", {
                    class: y([{ "rotate-180": v.value }, "transition-transform duration-300 ml-2"]),
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [...i[24] || (i[24] = [
                    l("path", { d: "M6 9l6 6 6-6" }, null, -1)
                  ])], 2))
                ], 2)) : se("", !0)
              ])
            ], 2),
            l("div", {
              class: y(["px-4 lg:px-0 mt-16 pt-10 border-t", p.value ? "border-slate-800" : "border-slate-200"])
            }, [
              l("h2", {
                class: y(["text-2xl font-bold mb-6 tracking-tight", p.value ? "text-white" : "text-slate-900"])
              }, "Questions and Answers", 2),
              l("div", {
                class: y(["rounded-2xl border overflow-hidden divide-y", p.value ? "border-slate-800 divide-slate-800" : "border-slate-200 divide-slate-100"])
              }, [
                (R(!0), S(Y, null, Z(E.value, (b, x) => (R(), S("div", { key: x }, [
                  l("button", {
                    class: y(["w-full py-5 px-6 flex justify-between items-center cursor-pointer group text-left transition-colors", p.value ? "bg-[#0f172a] hover:bg-slate-800" : "bg-white hover:bg-slate-50"]),
                    onClick: (O) => ie(x)
                  }, [
                    l("span", {
                      class: y(["font-semibold text-base transition-colors group-hover:text-blue-500", p.value ? "text-slate-200" : "text-slate-900"])
                    }, N(b.question), 3),
                    l("div", {
                      class: y(["p-1 rounded-full border transition-all", [
                        b.isOpen ? "rotate-180 bg-blue-500 text-white border-blue-500" : p.value ? "border-slate-700 text-slate-500" : "border-slate-200 text-slate-400"
                      ]])
                    }, [...i[25] || (i[25] = [
                      l("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        l("path", { d: "M6 9l6 6 6-6" })
                      ], -1)
                    ])], 2)
                  ], 10, Va),
                  es(l("div", {
                    class: y(["px-6 pb-6 pt-2 text-[15px] leading-relaxed animate-[fadeIn_0.2s_ease-out]", p.value ? "bg-[#0f172a] text-slate-400" : "bg-white text-slate-600"])
                  }, [
                    l("p", null, N(b.answer), 1)
                  ], 2), [
                    [ts, b.isOpen]
                  ])
                ]))), 128))
              ], 2)
            ], 2),
            l("div", {
              class: y(["px-4 lg:px-0 mt-16 mb-24 pt-10 border-t", p.value ? "border-slate-800" : "border-slate-200"]),
              id: "reviews"
            }, [
              l("div", Ha, [
                l("h2", {
                  class: y(["text-2xl font-bold flex items-center gap-3", p.value ? "text-white" : "text-slate-900"])
                }, [
                  i[26] || (i[26] = Ee(" Reviews ", -1)),
                  l("span", {
                    class: y(["text-sm font-bold px-3 py-1 rounded-full", p.value ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"])
                  }, N(g.value.length), 3)
                ], 2)
              ]),
              l("div", Ga, [
                (R(!0), S(Y, null, Z(g.value, (b, x) => (R(), S("div", {
                  class: y(["p-6 rounded-2xl border transition-all hover:shadow-lg duration-300", p.value ? "bg-slate-800/30 border-slate-700 hover:bg-slate-800" : "bg-white border-slate-100 shadow-sm hover:shadow-md"]),
                  key: x
                }, [
                  l("div", Ja, [
                    l("div", $a, [
                      l("div", {
                        class: "w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm shadow-md",
                        style: ns(`background:${b.color}`)
                      }, N(b.name[0]), 5),
                      l("div", null, [
                        l("div", {
                          class: y(["font-bold text-sm", p.value ? "text-white" : "text-slate-900"])
                        }, N(b.name), 3),
                        i[27] || (i[27] = l("div", { class: "text-amber-500 text-xs tracking-wide flex" }, "★★★★★", -1))
                      ])
                    ]),
                    l("span", {
                      class: y(["text-xs font-medium opacity-60", p.value ? "text-slate-400" : "text-slate-500"])
                    }, N(b.date), 3)
                  ]),
                  l("div", {
                    class: y(["text-[15px] leading-relaxed mb-4", p.value ? "text-slate-300" : "text-slate-600"])
                  }, N(b.text), 3),
                  l("div", {
                    class: y(["inline-block text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border", p.value ? "bg-slate-800 text-slate-400 border-slate-700" : "bg-slate-50 text-slate-500 border-slate-100"])
                  }, " Var: " + N(d.value) + " • Size: " + N(u.value || "M"), 3)
                ], 2))), 128))
              ])
            ], 2)
          ]),
          l("div", Wa, [
            l("div", {
              class: y(["sticky top-24 p-6 rounded-[32px] border transition-colors duration-300", p.value ? "bg-[#151e32] border-slate-700 ring-1 ring-white/5 shadow-2xl shadow-black/20" : "bg-white border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"])
            }, [
              l("div", Ka, [
                l("div", null, [
                  l("div", Xa, [
                    l("div", Qa, N($(Q.value)) + " ₽", 1),
                    J.value > Q.value ? (R(), S("span", Ya, N($(J.value)) + " ₽", 1)) : se("", !0)
                  ]),
                  l("div", {
                    class: y(["mt-3 inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg border", p.value ? "bg-emerald-900/20 text-emerald-400 border-emerald-900/30" : "bg-emerald-50 text-emerald-700 border-emerald-100"])
                  }, [
                    i[28] || (i[28] = l("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 24 24",
                      fill: "currentColor"
                    }, [
                      l("path", {
                        d: "M2 7h20v10H2z",
                        opacity: "0.3"
                      }),
                      l("path", { d: "M17 12h2" }),
                      l("path", { d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zm2 0v10h16V7H4z" })
                    ], -1)),
                    l("span", null, N($(ye.value)) + " ₽ with Ozon Card", 1)
                  ], 2)
                ])
              ]),
              l("div", {
                class: y(["space-y-5 mb-8 pt-6 border-t", p.value ? "border-slate-700" : "border-slate-100"])
              }, [
                l("div", Za, [
                  l("div", {
                    class: y(["w-10 h-10 rounded-full flex items-center justify-center text-lg transition-transform", p.value ? "bg-slate-800" : "bg-blue-50"])
                  }, "📍", 2),
                  l("div", null, [
                    l("div", {
                      class: y(["font-bold mb-0.5", p.value ? "text-slate-200" : "text-slate-900"])
                    }, "Global Delivery", 2),
                    l("div", {
                      class: y(["text-xs", p.value ? "text-slate-400" : "text-slate-500"])
                    }, "To anywhere in Russia", 2)
                  ])
                ]),
                l("div", ei, [
                  l("div", {
                    class: y(["w-10 h-10 rounded-full flex items-center justify-center text-lg transition-transform", p.value ? "bg-slate-800" : "bg-green-50"])
                  }, "🚚", 2),
                  l("div", null, [
                    l("div", {
                      class: y(["text-s mt-2", p.value ? "text-green-400" : "text-green-600"])
                    }, "Free courier delivery", 2)
                  ])
                ])
              ], 2),
              l("div", ti, [
                l("button", {
                  class: "w-full h-[56px] bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-[0.98] flex items-center justify-center gap-2 text-[15px] cursor-pointer",
                  onClick: be
                }, " Add to Cart "),
                l("button", {
                  class: y(["w-full h-[56px] font-bold rounded-2xl transition-all duration-300 border active:scale-[0.98] cursor-pointer", p.value ? "bg-transparent hover:bg-slate-800 text-white border-slate-600 hover:border-slate-500" : "bg-white hover:bg-slate-50 text-slate-900 border-slate-200 hover:border-slate-300"])
                }, " Buy Now ", 2)
              ]),
              l("div", {
                class: y(["mt-8 pt-6 border-t flex items-center gap-3", p.value ? "border-slate-700" : "border-slate-100"])
              }, [
                l("div", {
                  class: y(["w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-md text-lg", p.value ? "bg-slate-700" : "bg-slate-900"])
                }, N(o.value.brand ? o.value.brand[0] : "B"), 3),
                l("div", null, [
                  l("div", {
                    class: y(["font-bold text-sm mb-0.5", p.value ? "text-white" : "text-slate-900"])
                  }, N(o.value.brand), 3),
                  l("div", {
                    class: y(["text-xs flex items-center gap-1", p.value ? "text-slate-400" : "text-slate-500"])
                  }, [...i[29] || (i[29] = [
                    l("span", { class: "text-amber-500" }, "★★★★★", -1),
                    Ee(" 4.9 • Official Seller ", -1)
                  ])], 2)
                ])
              ], 2)
            ], 2)
          ])
        ]),
        l("div", {
          class: y(["mt-2 pt-1 border-t px-4 lg:px-0", p.value ? "border-slate-800" : "border-slate-200"])
        }, [
          l("h2", {
            class: y(["text-2xl font-bold mb-8 tracking-tight", p.value ? "text-white" : "text-slate-900"])
          }, "You might also like", 2),
          l("div", ni, [
            (R(!0), S(Y, null, Z(_.value, (b, x) => (R(), S("div", {
              key: x,
              class: "min-w-[200px] w-[200px] md:min-w-[240px] md:w-[240px] cursor-pointer snap-start group"
            }, [
              l("div", {
                class: y(["h-[280px] md:h-[320px] rounded-2xl relative mb-4 overflow-hidden border transition-colors", p.value ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100 shadow-sm"])
              }, [
                l("img", {
                  src: b.image,
                  class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                }, null, 8, si),
                l("div", ri, "-" + N(b.discount) + "%", 1),
                i[30] || (i[30] = l("div", { class: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]" }, [
                  l("button", { class: "bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl" }, " Quick View "),
                  l("button", { class: "absolute bottom-3 left-3 right-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded-lg shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all cursor-pointer" }, "Add to Cart")
                ], -1))
              ], 2),
              l("div", oi, [
                l("span", {
                  class: y(["font-bold text-lg", p.value ? "text-white" : "text-slate-900"])
                }, N($(b.price)) + " ₽", 3),
                l("s", ai, N($(b.mrp)) + " ₽", 1)
              ]),
              l("div", {
                class: y(["text-sm leading-snug h-10 overflow-hidden text-ellipsis line-clamp-2 mb-4 font-medium", p.value ? "text-slate-400" : "text-slate-600"])
              }, N(b.title), 3)
            ]))), 128))
          ])
        ], 2),
        l("div", {
          class: y(["fixed bottom-0 left-0 right-0 backdrop-blur-xl border-t p-4 pb-[max(16px,env(safe-area-inset-bottom))] flex items-center justify-between gap-4 z-50 md:hidden shadow-[0_-4px_30px_rgba(0,0,0,0.1)] transition-transform duration-300", p.value ? "bg-[#0f172a]/90 border-slate-800" : "bg-white/90 border-slate-200"])
        }, [
          l("div", ii, [
            l("span", {
              class: y(["text-xl font-extrabold leading-none tracking-tight", p.value ? "text-white" : "text-slate-900"])
            }, N($(Q.value)) + " ₽", 3),
            J.value > Q.value ? (R(), S("span", li, N($(J.value)), 1)) : se("", !0)
          ]),
          l("button", {
            class: "flex-1 h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base shadow-lg shadow-blue-500/40 active:scale-95 transition-all",
            onClick: be
          }, "Add to Cart")
        ], 2)
      ])) : (R(), S("div", {
        key: 2,
        class: y(["min-h-[60vh] flex flex-col items-center justify-center font-medium opacity-60", p.value ? "text-slate-400" : "text-slate-500"])
      }, [
        l("div", {
          class: y(["p-4 rounded-full mb-4", p.value ? "bg-slate-800" : "bg-slate-100"])
        }, [...i[31] || (i[31] = [
          Ue('<svg class="w-12 h-12 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-7e3b9c44><circle cx="12" cy="12" r="10" data-v-7e3b9c44></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2" data-v-7e3b9c44></path><line x1="9" y1="9" x2="9.01" y2="9" data-v-7e3b9c44></line><line x1="15" y1="9" x2="15.01" y2="9" data-v-7e3b9c44></line></svg>', 1)
        ])], 2),
        i[32] || (i[32] = l("span", { class: "text-lg" }, "Product Not Found", -1))
      ], 2)),
      h.value ? (R(), S("div", {
        key: 3,
        class: y(["fixed inset-0 z-[100] flex justify-center items-end md:items-center backdrop-blur-sm transition-colors duration-300", p.value ? "bg-black/70" : "bg-black/40"]),
        onClick: i[3] || (i[3] = Zn((b) => h.value = !1, ["self"]))
      }, [
        l("div", {
          class: y(["w-full md:w-[600px] md:rounded-[32px] rounded-t-[32px] p-8 flex flex-col max-h-[85vh] shadow-2xl animate-[slideUp_0.3s_ease-out] md:animate-none border", p.value ? "bg-[#151e32] border-slate-700" : "bg-white border-white"])
        }, [
          l("div", ci, [
            l("h3", {
              class: y(["text-2xl font-bold tracking-tight", p.value ? "text-white" : "text-slate-900"])
            }, "Size Chart", 2),
            l("button", {
              onClick: i[2] || (i[2] = (b) => h.value = !1),
              class: y(["p-2 rounded-full transition hover:scale-110", p.value ? "text-slate-400 hover:bg-white/10" : "text-slate-400 hover:bg-slate-100"])
            }, [...i[33] || (i[33] = [
              l("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                l("path", { d: "M18 6L6 18M6 6l12 12" })
              ], -1)
            ])], 2)
          ]),
          U.value ? (R(), S("div", ui, [
            l("img", {
              src: U.value,
              class: y(["max-w-full h-auto object-contain rounded-xl shadow-sm", p.value ? "border border-slate-700" : "border border-slate-100"])
            }, null, 10, di)
          ])) : (R(), S("div", {
            key: 1,
            class: y(["flex flex-col items-center justify-center h-48 font-medium opacity-50", p.value ? "text-slate-400" : "text-slate-500"])
          }, [...i[34] || (i[34] = [
            Ue('<svg class="w-12 h-12 mb-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-7e3b9c44><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-v-7e3b9c44></path><polyline points="14 2 14 8 20 8" data-v-7e3b9c44></polyline><line x1="16" y1="13" x2="8" y2="13" data-v-7e3b9c44></line><line x1="16" y1="17" x2="8" y2="17" data-v-7e3b9c44></line><polyline points="10 9 9 9 8 9" data-v-7e3b9c44></polyline></svg><span data-v-7e3b9c44>Size chart not available</span>', 2)
          ])], 2))
        ], 2)
      ], 2)) : se("", !0)
    ], 10, zo));
  }
}), mi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, bi = /* @__PURE__ */ mi(pi, [["__scopeId", "data-v-7e3b9c44"]]), gi = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: ProductSearch // Show Search Grid on Home
  // },
  {
    path: "/",
    //'/product/:slug', 
    name: "ProductDetail",
    component: bi,
    // Show Details when slug exists
    props: !0
  }
], vi = ur({
  history: qs(),
  routes: gi
}), Fi = async (e) => ({
  set: async (t, n) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const r = ss(rs, {
      _p: e,
      _$p: t,
      _$cb: n
    });
    r.use(vi);
    const o = e.f.name("vue-root"), a = {
      r: `<div id="${o}" style="width:100%; height:100%;"></div>`,
      style: "",
      evt: {
        change: () => {
          n?.change({ _$p: t });
        }
      }
    };
    return setTimeout(() => {
      const c = document.getElementById(o);
      c ? r.mount(c) : console.warn(`[Hydrator] Target element #${o} not found.`);
    }, 0), a;
  }
});
export {
  Fi as hydrator,
  Fi as index
};
