import { i as le, u as me, s as Lt, a as jt, d as pe, n as Vt, r as ht, h as bt, c as re, w as be, b as F, p as he, e as x, f as e, g as P, j as Ce, o as u, k as _e, l as wt, m as Ve, q as ye, F as J, t as ae, v as U, x as O, y as H, z as Te, A, B as yt, C as kt, D as Oe, E as Ot, T as Pt, G as _t, H as Dt, I as zt } from "./runtime-dom.esm-bundler-CKHPcrvd.js";
const Be = typeof document < "u";
function $t(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
}
function qt(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module" || t.default && $t(t.default);
}
const ie = Object.assign;
function qe(t, n) {
  const o = {};
  for (const a in n) {
    const r = n[a];
    o[a] = ke(r) ? r.map(t) : t(r);
  }
  return o;
}
const je = () => {
}, ke = Array.isArray;
function et(t, n) {
  const o = {};
  for (const a in t) o[a] = a in n ? n[a] : t[a];
  return o;
}
let fe = /* @__PURE__ */ (function(t) {
  return t[t.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", t[t.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", t[t.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", t[t.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", t[t.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", t;
})({});
const Ct = /* @__PURE__ */ Symbol("");
fe.MATCHER_NOT_FOUND + "", fe.NAVIGATION_GUARD_REDIRECT + "", fe.NAVIGATION_ABORTED + "", fe.NAVIGATION_CANCELLED + "", fe.NAVIGATION_DUPLICATED + "";
function Ne(t, n) {
  return ie(/* @__PURE__ */ new Error(), {
    type: t,
    [Ct]: !0
  }, n);
}
function $e(t, n) {
  return t instanceof Error && Ct in t && (n == null || !!(t.type & n));
}
const Ft = [
  "params",
  "query",
  "hash"
];
function Gt(t) {
  if (typeof t == "string") return t;
  if (t.path != null) return t.path;
  const n = {};
  for (const o of Ft) o in t && (n[o] = t[o]);
  return JSON.stringify(n, null, 2);
}
const Qt = /* @__PURE__ */ Symbol(""), tt = /* @__PURE__ */ Symbol(""), De = /* @__PURE__ */ Symbol(""), Ze = /* @__PURE__ */ Symbol(""), He = /* @__PURE__ */ Symbol("");
function we() {
  return le(De);
}
function Se(t) {
  return le(Ze);
}
const Tt = /#/g, Ht = /&/g, Wt = /\//g, Jt = /=/g, Yt = /\?/g, St = /\+/g, Kt = /%5B/g, Zt = /%5D/g, At = /%5E/g, Xt = /%60/g, Et = /%7B/g, es = /%7C/g, It = /%7D/g, ts = /%20/g;
function Xe(t) {
  return t == null ? "" : encodeURI("" + t).replace(es, "|").replace(Kt, "[").replace(Zt, "]");
}
function ss(t) {
  return Xe(t).replace(Et, "{").replace(It, "}").replace(At, "^");
}
function We(t) {
  return Xe(t).replace(St, "%2B").replace(ts, "+").replace(Tt, "%23").replace(Ht, "%26").replace(Xt, "`").replace(Et, "{").replace(It, "}").replace(At, "^");
}
function ns(t) {
  return We(t).replace(Jt, "%3D");
}
function os(t) {
  return Xe(t).replace(Tt, "%23").replace(Yt, "%3F");
}
function ls(t) {
  return os(t).replace(Wt, "%2F");
}
function Pe(t) {
  if (t == null) return null;
  try {
    return decodeURIComponent("" + t);
  } catch {
  }
  return "" + t;
}
const as = /\/$/, rs = (t) => t.replace(as, "");
function Fe(t, n, o = "/") {
  let a, r = {}, i = "", b = "";
  const C = n.indexOf("#");
  let c = n.indexOf("?");
  return c = C >= 0 && c > C ? -1 : c, c >= 0 && (a = n.slice(0, c), i = n.slice(c, C > 0 ? C : n.length), r = t(i.slice(1))), C >= 0 && (a = a || n.slice(0, C), b = n.slice(C, n.length)), a = cs(a ?? n, o), {
    fullPath: a + i + b,
    path: a,
    query: r,
    hash: Pe(b)
  };
}
function is(t, n) {
  const o = n.query ? t(n.query) : "";
  return n.path + (o && "?") + o + (n.hash || "");
}
function st(t, n) {
  return !n || !t.toLowerCase().startsWith(n.toLowerCase()) ? t : t.slice(n.length) || "/";
}
function ds(t, n, o) {
  const a = n.matched.length - 1, r = o.matched.length - 1;
  return a > -1 && a === r && Me(n.matched[a], o.matched[r]) && Rt(n.params, o.params) && t(n.query) === t(o.query) && n.hash === o.hash;
}
function Me(t, n) {
  return (t.aliasOf || t) === (n.aliasOf || n);
}
function Rt(t, n) {
  if (Object.keys(t).length !== Object.keys(n).length) return !1;
  for (var o in t) if (!us(t[o], n[o])) return !1;
  return !0;
}
function us(t, n) {
  return ke(t) ? nt(t, n) : ke(n) ? nt(n, t) : (t && t.valueOf()) === (n && n.valueOf());
}
function nt(t, n) {
  return ke(n) ? t.length === n.length && t.every((o, a) => o === n[a]) : t.length === 1 && t[0] === n;
}
function cs(t, n) {
  if (t.startsWith("/")) return t;
  if (!t) return n;
  const o = n.split("/"), a = t.split("/"), r = a[a.length - 1];
  (r === ".." || r === ".") && a.push("");
  let i = o.length - 1, b, C;
  for (b = 0; b < a.length; b++)
    if (C = a[b], C !== ".")
      if (C === "..")
        i > 1 && i--;
      else break;
  return o.slice(0, i).join("/") + "/" + a.slice(b).join("/");
}
const Ae = {
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
let Je = /* @__PURE__ */ (function(t) {
  return t.pop = "pop", t.push = "push", t;
})({}), Ge = /* @__PURE__ */ (function(t) {
  return t.back = "back", t.forward = "forward", t.unknown = "", t;
})({});
function ps(t) {
  if (!t) if (Be) {
    const n = document.querySelector("base");
    t = n && n.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^/]+/, "");
  } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), rs(t);
}
const ms = /^[^#]+#/;
function fs(t, n) {
  return t.replace(ms, "#") + n;
}
function xs(t, n) {
  const o = document.documentElement.getBoundingClientRect(), a = t.getBoundingClientRect();
  return {
    behavior: n.behavior,
    left: a.left - o.left - (n.left || 0),
    top: a.top - o.top - (n.top || 0)
  };
}
const ze = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function gs(t) {
  let n;
  if ("el" in t) {
    const o = t.el, a = typeof o == "string" && o.startsWith("#"), r = typeof o == "string" ? a ? document.getElementById(o.slice(1)) : document.querySelector(o) : o;
    if (!r)
      return;
    n = xs(r, t);
  } else n = t;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(n) : window.scrollTo(n.left != null ? n.left : window.scrollX, n.top != null ? n.top : window.scrollY);
}
function ot(t, n) {
  return (history.state ? history.state.position - n : -1) + t;
}
const Ye = /* @__PURE__ */ new Map();
function vs(t, n) {
  Ye.set(t, n);
}
function hs(t) {
  const n = Ye.get(t);
  return Ye.delete(t), n;
}
function bs(t) {
  return typeof t == "string" || t && typeof t == "object";
}
function Bt(t) {
  return typeof t == "string" || typeof t == "symbol";
}
function ws(t) {
  const n = {};
  if (t === "" || t === "?") return n;
  const o = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let a = 0; a < o.length; ++a) {
    const r = o[a].replace(St, " "), i = r.indexOf("="), b = Pe(i < 0 ? r : r.slice(0, i)), C = i < 0 ? null : Pe(r.slice(i + 1));
    if (b in n) {
      let c = n[b];
      ke(c) || (c = n[b] = [c]), c.push(C);
    } else n[b] = C;
  }
  return n;
}
function lt(t) {
  let n = "";
  for (let o in t) {
    const a = t[o];
    if (o = ns(o), a == null) {
      a !== void 0 && (n += (n.length ? "&" : "") + o);
      continue;
    }
    (ke(a) ? a.map((r) => r && We(r)) : [a && We(a)]).forEach((r) => {
      r !== void 0 && (n += (n.length ? "&" : "") + o, r != null && (n += "=" + r));
    });
  }
  return n;
}
function ys(t) {
  const n = {};
  for (const o in t) {
    const a = t[o];
    a !== void 0 && (n[o] = ke(a) ? a.map((r) => r == null ? null : "" + r) : a == null ? a : "" + a);
  }
  return n;
}
function Le() {
  let t = [];
  function n(a) {
    return t.push(a), () => {
      const r = t.indexOf(a);
      r > -1 && t.splice(r, 1);
    };
  }
  function o() {
    t = [];
  }
  return {
    add: n,
    list: () => t.slice(),
    reset: o
  };
}
function Ee(t, n, o, a, r, i = (b) => b()) {
  const b = a && (a.enterCallbacks[r] = a.enterCallbacks[r] || []);
  return () => new Promise((C, c) => {
    const _ = (l) => {
      l === !1 ? c(Ne(fe.NAVIGATION_ABORTED, {
        from: o,
        to: n
      })) : l instanceof Error ? c(l) : bs(l) ? c(Ne(fe.NAVIGATION_GUARD_REDIRECT, {
        from: n,
        to: l
      })) : (b && a.enterCallbacks[r] === b && typeof l == "function" && b.push(l), C());
    }, g = i(() => t.call(a && a.instances[r], n, o, _));
    let s = Promise.resolve(g);
    t.length < 3 && (s = s.then(_)), s.catch((l) => c(l));
  });
}
function Qe(t, n, o, a, r = (i) => i()) {
  const i = [];
  for (const b of t)
    for (const C in b.components) {
      let c = b.components[C];
      if (!(n !== "beforeRouteEnter" && !b.instances[C]))
        if ($t(c)) {
          const _ = (c.__vccOpts || c)[n];
          _ && i.push(Ee(_, o, a, b, C, r));
        } else {
          let _ = c();
          i.push(() => _.then((g) => {
            if (!g) throw new Error(`Couldn't resolve component "${C}" at "${b.path}"`);
            const s = qt(g) ? g.default : g;
            b.mods[C] = g, b.components[C] = s;
            const l = (s.__vccOpts || s)[n];
            return l && Ee(l, o, a, b, C, r)();
          }));
        }
    }
  return i;
}
function ks(t, n) {
  const o = [], a = [], r = [], i = Math.max(n.matched.length, t.matched.length);
  for (let b = 0; b < i; b++) {
    const C = n.matched[b];
    C && (t.matched.find((_) => Me(_, C)) ? a.push(C) : o.push(C));
    const c = t.matched[b];
    c && (n.matched.find((_) => Me(_, c)) || r.push(c));
  }
  return [
    o,
    a,
    r
  ];
}
let _s = () => location.protocol + "//" + location.host;
function Nt(t, n) {
  const { pathname: o, search: a, hash: r } = n, i = t.indexOf("#");
  if (i > -1) {
    let b = r.includes(t.slice(i)) ? t.slice(i).length : 1, C = r.slice(b);
    return C[0] !== "/" && (C = "/" + C), st(C, "");
  }
  return st(o, t) + a + r;
}
function $s(t, n, o, a) {
  let r = [], i = [], b = null;
  const C = ({ state: l }) => {
    const p = Nt(t, location), m = o.value, d = n.value;
    let v = 0;
    if (l) {
      if (o.value = p, n.value = l, b && b === m) {
        b = null;
        return;
      }
      v = d ? l.position - d.position : 0;
    } else a(p);
    r.forEach((L) => {
      L(o.value, m, {
        delta: v,
        type: Je.pop,
        direction: v ? v > 0 ? Ge.forward : Ge.back : Ge.unknown
      });
    });
  };
  function c() {
    b = o.value;
  }
  function _(l) {
    r.push(l);
    const p = () => {
      const m = r.indexOf(l);
      m > -1 && r.splice(m, 1);
    };
    return i.push(p), p;
  }
  function g() {
    if (document.visibilityState === "hidden") {
      const { history: l } = window;
      if (!l.state) return;
      l.replaceState(ie({}, l.state, { scroll: ze() }), "");
    }
  }
  function s() {
    for (const l of i) l();
    i = [], window.removeEventListener("popstate", C), window.removeEventListener("pagehide", g), document.removeEventListener("visibilitychange", g);
  }
  return window.addEventListener("popstate", C), window.addEventListener("pagehide", g), document.addEventListener("visibilitychange", g), {
    pauseListeners: c,
    listen: _,
    destroy: s
  };
}
function at(t, n, o, a = !1, r = !1) {
  return {
    back: t,
    current: n,
    forward: o,
    replaced: a,
    position: window.history.length,
    scroll: r ? ze() : null
  };
}
function Cs(t) {
  const { history: n, location: o } = window, a = { value: Nt(t, o) }, r = { value: n.state };
  r.value || i(a.value, {
    back: null,
    current: a.value,
    forward: null,
    position: n.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function i(c, _, g) {
    const s = t.indexOf("#"), l = s > -1 ? (o.host && document.querySelector("base") ? t : t.slice(s)) + c : _s() + t + c;
    try {
      n[g ? "replaceState" : "pushState"](_, "", l), r.value = _;
    } catch (p) {
      console.error(p), o[g ? "replace" : "assign"](l);
    }
  }
  function b(c, _) {
    i(c, ie({}, n.state, at(r.value.back, c, r.value.forward, !0), _, { position: r.value.position }), !0), a.value = c;
  }
  function C(c, _) {
    const g = ie({}, r.value, n.state, {
      forward: c,
      scroll: ze()
    });
    i(g.current, g, !0), i(c, ie({}, at(a.value, c, null), { position: g.position + 1 }, _), !1), a.value = c;
  }
  return {
    location: a,
    state: r,
    push: C,
    replace: b
  };
}
function Ts(t) {
  t = ps(t);
  const n = Cs(t), o = $s(t, n.state, n.location, n.replace);
  function a(i, b = !0) {
    b || o.pauseListeners(), history.go(i);
  }
  const r = ie({
    location: "",
    base: t,
    go: a,
    createHref: fs.bind(null, t)
  }, n, o);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => n.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => n.state.value
  }), r;
}
let Re = /* @__PURE__ */ (function(t) {
  return t[t.Static = 0] = "Static", t[t.Param = 1] = "Param", t[t.Group = 2] = "Group", t;
})({});
var xe = /* @__PURE__ */ (function(t) {
  return t[t.Static = 0] = "Static", t[t.Param = 1] = "Param", t[t.ParamRegExp = 2] = "ParamRegExp", t[t.ParamRegExpEnd = 3] = "ParamRegExpEnd", t[t.EscapeNext = 4] = "EscapeNext", t;
})(xe || {});
const Ss = {
  type: Re.Static,
  value: ""
}, As = /[a-zA-Z0-9_]/;
function Es(t) {
  if (!t) return [[]];
  if (t === "/") return [[Ss]];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
  function n(p) {
    throw new Error(`ERR (${o})/"${_}": ${p}`);
  }
  let o = xe.Static, a = o;
  const r = [];
  let i;
  function b() {
    i && r.push(i), i = [];
  }
  let C = 0, c, _ = "", g = "";
  function s() {
    _ && (o === xe.Static ? i.push({
      type: Re.Static,
      value: _
    }) : o === xe.Param || o === xe.ParamRegExp || o === xe.ParamRegExpEnd ? (i.length > 1 && (c === "*" || c === "+") && n(`A repeatable param (${_}) must be alone in its segment. eg: '/:ids+.`), i.push({
      type: Re.Param,
      value: _,
      regexp: g,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : n("Invalid state to consume buffer"), _ = "");
  }
  function l() {
    _ += c;
  }
  for (; C < t.length; )
    switch (c = t[C++], o) {
      case xe.Static:
        c === "\\" ? (a = o, o = xe.EscapeNext) : c === "/" ? (_ && s(), b()) : c === ":" ? (s(), o = xe.Param) : l();
        break;
      case xe.EscapeNext:
        l(), o = a;
        break;
      case xe.Param:
        c === "(" ? o = xe.ParamRegExp : As.test(c) ? l() : (s(), o = xe.Static, c !== "*" && c !== "?" && c !== "+" && C--);
        break;
      case xe.ParamRegExp:
        c === ")" ? g[g.length - 1] == "\\" ? g = g.slice(0, -1) + c : o = xe.ParamRegExpEnd : g += c;
        break;
      case xe.ParamRegExpEnd:
        s(), o = xe.Static, c !== "*" && c !== "?" && c !== "+" && C--, g = "";
        break;
      default:
        n("Unknown state");
        break;
    }
  return o === xe.ParamRegExp && n(`Unfinished custom RegExp for param "${_}"`), s(), b(), r;
}
const rt = "[^/]+?", Is = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
};
var ge = /* @__PURE__ */ (function(t) {
  return t[t._multiplier = 10] = "_multiplier", t[t.Root = 90] = "Root", t[t.Segment = 40] = "Segment", t[t.SubSegment = 30] = "SubSegment", t[t.Static = 40] = "Static", t[t.Dynamic = 20] = "Dynamic", t[t.BonusCustomRegExp = 10] = "BonusCustomRegExp", t[t.BonusWildcard = -50] = "BonusWildcard", t[t.BonusRepeatable = -20] = "BonusRepeatable", t[t.BonusOptional = -8] = "BonusOptional", t[t.BonusStrict = 0.7000000000000001] = "BonusStrict", t[t.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", t;
})(ge || {});
const Rs = /[.+*?^${}()[\]/\\]/g;
function Bs(t, n) {
  const o = ie({}, Is, n), a = [];
  let r = o.start ? "^" : "";
  const i = [];
  for (const _ of t) {
    const g = _.length ? [] : [ge.Root];
    o.strict && !_.length && (r += "/");
    for (let s = 0; s < _.length; s++) {
      const l = _[s];
      let p = ge.Segment + (o.sensitive ? ge.BonusCaseSensitive : 0);
      if (l.type === Re.Static)
        s || (r += "/"), r += l.value.replace(Rs, "\\$&"), p += ge.Static;
      else if (l.type === Re.Param) {
        const { value: m, repeatable: d, optional: v, regexp: L } = l;
        i.push({
          name: m,
          repeatable: d,
          optional: v
        });
        const E = L || rt;
        if (E !== rt) {
          p += ge.BonusCustomRegExp;
          try {
            new RegExp(`(${E})`);
          } catch (k) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${E}): ` + k.message);
          }
        }
        let j = d ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
        s || (j = v && _.length < 2 ? `(?:/${j})` : "/" + j), v && (j += "?"), r += j, p += ge.Dynamic, v && (p += ge.BonusOptional), d && (p += ge.BonusRepeatable), E === ".*" && (p += ge.BonusWildcard);
      }
      g.push(p);
    }
    a.push(g);
  }
  if (o.strict && o.end) {
    const _ = a.length - 1;
    a[_][a[_].length - 1] += ge.BonusStrict;
  }
  o.strict || (r += "/?"), o.end ? r += "$" : o.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const b = new RegExp(r, o.sensitive ? "" : "i");
  function C(_) {
    const g = _.match(b), s = {};
    if (!g) return null;
    for (let l = 1; l < g.length; l++) {
      const p = g[l] || "", m = i[l - 1];
      s[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return s;
  }
  function c(_) {
    let g = "", s = !1;
    for (const l of t) {
      (!s || !g.endsWith("/")) && (g += "/"), s = !1;
      for (const p of l) if (p.type === Re.Static) g += p.value;
      else if (p.type === Re.Param) {
        const { value: m, repeatable: d, optional: v } = p, L = m in _ ? _[m] : "";
        if (ke(L) && !d) throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
        const E = ke(L) ? L.join("/") : L;
        if (!E) if (v)
          l.length < 2 && (g.endsWith("/") ? g = g.slice(0, -1) : s = !0);
        else throw new Error(`Missing required param "${m}"`);
        g += E;
      }
    }
    return g || "/";
  }
  return {
    re: b,
    score: a,
    keys: i,
    parse: C,
    stringify: c
  };
}
function Ns(t, n) {
  let o = 0;
  for (; o < t.length && o < n.length; ) {
    const a = n[o] - t[o];
    if (a) return a;
    o++;
  }
  return t.length < n.length ? t.length === 1 && t[0] === ge.Static + ge.Segment ? -1 : 1 : t.length > n.length ? n.length === 1 && n[0] === ge.Static + ge.Segment ? 1 : -1 : 0;
}
function Mt(t, n) {
  let o = 0;
  const a = t.score, r = n.score;
  for (; o < a.length && o < r.length; ) {
    const i = Ns(a[o], r[o]);
    if (i) return i;
    o++;
  }
  if (Math.abs(r.length - a.length) === 1) {
    if (it(a)) return 1;
    if (it(r)) return -1;
  }
  return r.length - a.length;
}
function it(t) {
  const n = t[t.length - 1];
  return t.length > 0 && n[n.length - 1] < 0;
}
const Ms = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function Us(t, n, o) {
  const a = Bs(Es(t.path), o), r = ie(a, {
    record: t,
    parent: n,
    children: [],
    alias: []
  });
  return n && !r.record.aliasOf == !n.record.aliasOf && n.children.push(r), r;
}
function Ls(t, n) {
  const o = [], a = /* @__PURE__ */ new Map();
  n = et(Ms, n);
  function r(s) {
    return a.get(s);
  }
  function i(s, l, p) {
    const m = !p, d = ut(s);
    d.aliasOf = p && p.record;
    const v = et(n, s), L = [d];
    if ("alias" in s) {
      const k = typeof s.alias == "string" ? [s.alias] : s.alias;
      for (const W of k) L.push(ut(ie({}, d, {
        components: p ? p.record.components : d.components,
        path: W,
        aliasOf: p ? p.record : d
      })));
    }
    let E, j;
    for (const k of L) {
      const { path: W } = k;
      if (l && W[0] !== "/") {
        const ne = l.record.path, G = ne[ne.length - 1] === "/" ? "" : "/";
        k.path = l.record.path + (W && G + W);
      }
      if (E = Us(k, l, v), p ? p.alias.push(E) : (j = j || E, j !== E && j.alias.push(E), m && s.name && !ct(E) && b(s.name)), Ut(E) && c(E), d.children) {
        const ne = d.children;
        for (let G = 0; G < ne.length; G++) i(ne[G], E, p && p.children[G]);
      }
      p = p || E;
    }
    return j ? () => {
      b(j);
    } : je;
  }
  function b(s) {
    if (Bt(s)) {
      const l = a.get(s);
      l && (a.delete(s), o.splice(o.indexOf(l), 1), l.children.forEach(b), l.alias.forEach(b));
    } else {
      const l = o.indexOf(s);
      l > -1 && (o.splice(l, 1), s.record.name && a.delete(s.record.name), s.children.forEach(b), s.alias.forEach(b));
    }
  }
  function C() {
    return o;
  }
  function c(s) {
    const l = Os(s, o);
    o.splice(l, 0, s), s.record.name && !ct(s) && a.set(s.record.name, s);
  }
  function _(s, l) {
    let p, m = {}, d, v;
    if ("name" in s && s.name) {
      if (p = a.get(s.name), !p) throw Ne(fe.MATCHER_NOT_FOUND, { location: s });
      v = p.record.name, m = ie(dt(l.params, p.keys.filter((j) => !j.optional).concat(p.parent ? p.parent.keys.filter((j) => j.optional) : []).map((j) => j.name)), s.params && dt(s.params, p.keys.map((j) => j.name))), d = p.stringify(m);
    } else if (s.path != null)
      d = s.path, p = o.find((j) => j.re.test(d)), p && (m = p.parse(d), v = p.record.name, p.keys.forEach((j) => {
        j.optional && !m[j.name] && delete m[j.name];
      }));
    else {
      if (p = l.name ? a.get(l.name) : o.find((j) => j.re.test(l.path)), !p) throw Ne(fe.MATCHER_NOT_FOUND, {
        location: s,
        currentLocation: l
      });
      v = p.record.name, m = ie({}, l.params, s.params), d = p.stringify(m);
    }
    const L = [];
    let E = p;
    for (; E; )
      L.unshift(E.record), E = E.parent;
    return {
      name: v,
      path: d,
      params: m,
      matched: L,
      meta: Vs(L)
    };
  }
  t.forEach((s) => i(s));
  function g() {
    o.length = 0, a.clear();
  }
  return {
    addRoute: i,
    resolve: _,
    removeRoute: b,
    clearRoutes: g,
    getRoutes: C,
    getRecordMatcher: r
  };
}
function dt(t, n) {
  const o = {};
  for (const a of n) a in t && (o[a] = t[a]);
  return o;
}
function ut(t) {
  const n = {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: t.aliasOf,
    beforeEnter: t.beforeEnter,
    props: js(t),
    children: t.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in t ? t.components || null : t.component && { default: t.component }
  };
  return Object.defineProperty(n, "mods", { value: {} }), n;
}
function js(t) {
  const n = {}, o = t.props || !1;
  if ("component" in t) n.default = o;
  else for (const a in t.components) n[a] = typeof o == "object" ? o[a] : o;
  return n;
}
function ct(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function Vs(t) {
  return t.reduce((n, o) => ie(n, o.meta), {});
}
function Os(t, n) {
  let o = 0, a = n.length;
  for (; o !== a; ) {
    const i = o + a >> 1;
    Mt(t, n[i]) < 0 ? a = i : o = i + 1;
  }
  const r = Ps(t);
  return r && (a = n.lastIndexOf(r, a - 1)), a;
}
function Ps(t) {
  let n = t;
  for (; n = n.parent; ) if (Ut(n) && Mt(t, n) === 0) return n;
}
function Ut({ record: t }) {
  return !!(t.name || t.components && Object.keys(t.components).length || t.redirect);
}
function pt(t) {
  const n = le(De), o = le(Ze), a = re(() => {
    const c = me(t.to);
    return n.resolve(c);
  }), r = re(() => {
    const { matched: c } = a.value, { length: _ } = c, g = c[_ - 1], s = o.matched;
    if (!g || !s.length) return -1;
    const l = s.findIndex(Me.bind(null, g));
    if (l > -1) return l;
    const p = mt(c[_ - 2]);
    return _ > 1 && mt(g) === p && s[s.length - 1].path !== p ? s.findIndex(Me.bind(null, c[_ - 2])) : l;
  }), i = re(() => r.value > -1 && Gs(o.params, a.value.params)), b = re(() => r.value > -1 && r.value === o.matched.length - 1 && Rt(o.params, a.value.params));
  function C(c = {}) {
    if (Fs(c)) {
      const _ = n[me(t.replace) ? "replace" : "push"](me(t.to)).catch(je);
      return t.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => _), _;
    }
    return Promise.resolve();
  }
  return {
    route: a,
    href: re(() => a.value.href),
    isActive: i,
    isExactActive: b,
    navigate: C
  };
}
function Ds(t) {
  return t.length === 1 ? t[0] : t;
}
const zs = /* @__PURE__ */ pe({
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
  useLink: pt,
  setup(t, { slots: n }) {
    const o = ht(pt(t)), { options: a } = le(De), r = re(() => ({
      [ft(t.activeClass, a.linkActiveClass, "router-link-active")]: o.isActive,
      [ft(t.exactActiveClass, a.linkExactActiveClass, "router-link-exact-active")]: o.isExactActive
    }));
    return () => {
      const i = n.default && Ds(n.default(o));
      return t.custom ? i : bt("a", {
        "aria-current": o.isExactActive ? t.ariaCurrentValue : null,
        href: o.href,
        onClick: o.navigate,
        class: r.value
      }, i);
    };
  }
}), qs = zs;
function Fs(t) {
  if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const n = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(n)) return;
    }
    return t.preventDefault && t.preventDefault(), !0;
  }
}
function Gs(t, n) {
  for (const o in n) {
    const a = n[o], r = t[o];
    if (typeof a == "string") {
      if (a !== r) return !1;
    } else if (!ke(r) || r.length !== a.length || a.some((i, b) => i.valueOf() !== r[b].valueOf())) return !1;
  }
  return !0;
}
function mt(t) {
  return t ? t.aliasOf ? t.aliasOf.path : t.path : "";
}
const ft = (t, n, o) => t ?? n ?? o, Qs = /* @__PURE__ */ pe({
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
  setup(t, { attrs: n, slots: o }) {
    const a = le(He), r = re(() => t.route || a.value), i = le(tt, 0), b = re(() => {
      let _ = me(i);
      const { matched: g } = r.value;
      let s;
      for (; (s = g[_]) && !s.components; ) _++;
      return _;
    }), C = re(() => r.value.matched[b.value]);
    he(tt, re(() => b.value + 1)), he(Qt, C), he(He, r);
    const c = F();
    return be(() => [
      c.value,
      C.value,
      t.name
    ], ([_, g, s], [l, p, m]) => {
      g && (g.instances[s] = _, p && p !== g && _ && _ === l && (g.leaveGuards.size || (g.leaveGuards = p.leaveGuards), g.updateGuards.size || (g.updateGuards = p.updateGuards))), _ && g && (!p || !Me(g, p) || !l) && (g.enterCallbacks[s] || []).forEach((d) => d(_));
    }, { flush: "post" }), () => {
      const _ = r.value, g = t.name, s = C.value, l = s && s.components[g];
      if (!l) return xt(o.default, {
        Component: l,
        route: _
      });
      const p = s.props[g], m = p ? p === !0 ? _.params : typeof p == "function" ? p(_) : p : null, v = bt(l, ie({}, m, n, {
        onVnodeUnmounted: (L) => {
          L.component.isUnmounted && (s.instances[g] = null);
        },
        ref: c
      }));
      return xt(o.default, {
        Component: v,
        route: _
      }) || v;
    };
  }
});
function xt(t, n) {
  if (!t) return null;
  const o = t(n);
  return o.length === 1 ? o[0] : o;
}
const Hs = Qs;
function Ws(t) {
  const n = Ls(t.routes, t), o = t.parseQuery || ws, a = t.stringifyQuery || lt, r = t.history, i = Le(), b = Le(), C = Le(), c = jt(Ae);
  let _ = Ae;
  Be && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const g = qe.bind(null, (f) => "" + f), s = qe.bind(null, ls), l = qe.bind(null, Pe);
  function p(f, B) {
    let T, N;
    return Bt(f) ? (T = n.getRecordMatcher(f), N = B) : N = f, n.addRoute(N, T);
  }
  function m(f) {
    const B = n.getRecordMatcher(f);
    B && n.removeRoute(B);
  }
  function d() {
    return n.getRoutes().map((f) => f.record);
  }
  function v(f) {
    return !!n.getRecordMatcher(f);
  }
  function L(f, B) {
    if (B = ie({}, B || c.value), typeof f == "string") {
      const se = Fe(o, f, B.path), ce = n.resolve({ path: se.path }, B), Ie = r.createHref(se.fullPath);
      return ie(se, ce, {
        params: l(ce.params),
        redirectedFrom: void 0,
        href: Ie
      });
    }
    let T;
    if (f.path != null)
      T = ie({}, f, { path: Fe(o, f.path, B.path).path });
    else {
      const se = ie({}, f.params);
      for (const ce in se) se[ce] == null && delete se[ce];
      T = ie({}, f, { params: s(se) }), B.params = s(B.params);
    }
    const N = n.resolve(T, B), Y = f.hash || "";
    N.params = g(l(N.params));
    const de = is(a, ie({}, f, {
      hash: ss(Y),
      path: N.path
    })), Z = r.createHref(de);
    return ie({
      fullPath: de,
      hash: Y,
      query: a === lt ? ys(f.query) : f.query || {}
    }, N, {
      redirectedFrom: void 0,
      href: Z
    });
  }
  function E(f) {
    return typeof f == "string" ? Fe(o, f, c.value.path) : ie({}, f);
  }
  function j(f, B) {
    if (_ !== f) return Ne(fe.NAVIGATION_CANCELLED, {
      from: B,
      to: f
    });
  }
  function k(f) {
    return G(f);
  }
  function W(f) {
    return k(ie(E(f), { replace: !0 }));
  }
  function ne(f, B) {
    const T = f.matched[f.matched.length - 1];
    if (T && T.redirect) {
      const { redirect: N } = T;
      let Y = typeof N == "function" ? N(f, B) : N;
      return typeof Y == "string" && (Y = Y.includes("?") || Y.includes("#") ? Y = E(Y) : { path: Y }, Y.params = {}), ie({
        query: f.query,
        hash: f.hash,
        params: Y.path != null ? {} : f.params
      }, Y);
    }
  }
  function G(f, B) {
    const T = _ = L(f), N = c.value, Y = f.state, de = f.force, Z = f.replace === !0, se = ne(T, N);
    if (se) return G(ie(E(se), {
      state: typeof se == "object" ? ie({}, Y, se.state) : Y,
      force: de,
      replace: Z
    }), B || T);
    const ce = T;
    ce.redirectedFrom = B;
    let Ie;
    return !de && ds(a, N, T) && (Ie = Ne(fe.NAVIGATION_DUPLICATED, {
      to: ce,
      from: N
    }), q(N, N, !0, !1)), (Ie ? Promise.resolve(Ie) : V(ce, N)).catch((ve) => $e(ve) ? $e(ve, fe.NAVIGATION_GUARD_REDIRECT) ? ve : w(ve) : oe(ve, ce, N)).then((ve) => {
      if (ve) {
        if ($e(ve, fe.NAVIGATION_GUARD_REDIRECT))
          return G(ie({ replace: Z }, E(ve.to), {
            state: typeof ve.to == "object" ? ie({}, Y, ve.to.state) : Y,
            force: de
          }), B || ce);
      } else ve = $(ce, N, !0, Z, Y);
      return X(ce, N, ve), ve;
    });
  }
  function M(f, B) {
    const T = j(f, B);
    return T ? Promise.reject(T) : Promise.resolve();
  }
  function h(f) {
    const B = K.values().next().value;
    return B && typeof B.runWithContext == "function" ? B.runWithContext(f) : f();
  }
  function V(f, B) {
    let T;
    const [N, Y, de] = ks(f, B);
    T = Qe(N.reverse(), "beforeRouteLeave", f, B);
    for (const se of N) se.leaveGuards.forEach((ce) => {
      T.push(Ee(ce, f, B));
    });
    const Z = M.bind(null, f, B);
    return T.push(Z), te(T).then(() => {
      T = [];
      for (const se of i.list()) T.push(Ee(se, f, B));
      return T.push(Z), te(T);
    }).then(() => {
      T = Qe(Y, "beforeRouteUpdate", f, B);
      for (const se of Y) se.updateGuards.forEach((ce) => {
        T.push(Ee(ce, f, B));
      });
      return T.push(Z), te(T);
    }).then(() => {
      T = [];
      for (const se of de) if (se.beforeEnter) if (ke(se.beforeEnter)) for (const ce of se.beforeEnter) T.push(Ee(ce, f, B));
      else T.push(Ee(se.beforeEnter, f, B));
      return T.push(Z), te(T);
    }).then(() => (f.matched.forEach((se) => se.enterCallbacks = {}), T = Qe(de, "beforeRouteEnter", f, B, h), T.push(Z), te(T))).then(() => {
      T = [];
      for (const se of b.list()) T.push(Ee(se, f, B));
      return T.push(Z), te(T);
    }).catch((se) => $e(se, fe.NAVIGATION_CANCELLED) ? se : Promise.reject(se));
  }
  function X(f, B, T) {
    C.list().forEach((N) => h(() => N(f, B, T)));
  }
  function $(f, B, T, N, Y) {
    const de = j(f, B);
    if (de) return de;
    const Z = B === Ae, se = Be ? history.state : {};
    T && (N || Z ? r.replace(f.fullPath, ie({ scroll: Z && se && se.scroll }, Y)) : r.push(f.fullPath, Y)), c.value = f, q(f, B, T, Z), w();
  }
  let y;
  function I() {
    y || (y = r.listen((f, B, T) => {
      if (!R.listening) return;
      const N = L(f), Y = ne(N, R.currentRoute.value);
      if (Y) {
        G(ie(Y, {
          replace: !0,
          force: !0
        }), N).catch(je);
        return;
      }
      _ = N;
      const de = c.value;
      Be && vs(ot(de.fullPath, T.delta), ze()), V(N, de).catch((Z) => $e(Z, fe.NAVIGATION_ABORTED | fe.NAVIGATION_CANCELLED) ? Z : $e(Z, fe.NAVIGATION_GUARD_REDIRECT) ? (G(ie(E(Z.to), { force: !0 }), N).then((se) => {
        $e(se, fe.NAVIGATION_ABORTED | fe.NAVIGATION_DUPLICATED) && !T.delta && T.type === Je.pop && r.go(-1, !1);
      }).catch(je), Promise.reject()) : (T.delta && r.go(-T.delta, !1), oe(Z, N, de))).then((Z) => {
        Z = Z || $(N, de, !1), Z && (T.delta && !$e(Z, fe.NAVIGATION_CANCELLED) ? r.go(-T.delta, !1) : T.type === Je.pop && $e(Z, fe.NAVIGATION_ABORTED | fe.NAVIGATION_DUPLICATED) && r.go(-1, !1)), X(N, de, Z);
      }).catch(je);
    }));
  }
  let S = Le(), z = Le(), ee;
  function oe(f, B, T) {
    w(f);
    const N = z.list();
    return N.length ? N.forEach((Y) => Y(f, B, T)) : console.error(f), Promise.reject(f);
  }
  function D() {
    return ee && c.value !== Ae ? Promise.resolve() : new Promise((f, B) => {
      S.add([f, B]);
    });
  }
  function w(f) {
    return ee || (ee = !f, I(), S.list().forEach(([B, T]) => f ? T(f) : B()), S.reset()), f;
  }
  function q(f, B, T, N) {
    const { scrollBehavior: Y } = t;
    if (!Be || !Y) return Promise.resolve();
    const de = !T && hs(ot(f.fullPath, 0)) || (N || !T) && history.state && history.state.scroll || null;
    return Vt().then(() => Y(f, B, de)).then((Z) => Z && gs(Z)).catch((Z) => oe(Z, f, B));
  }
  const Q = (f) => r.go(f);
  let ue;
  const K = /* @__PURE__ */ new Set(), R = {
    currentRoute: c,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    clearRoutes: n.clearRoutes,
    hasRoute: v,
    getRoutes: d,
    resolve: L,
    options: t,
    push: k,
    replace: W,
    go: Q,
    back: () => Q(-1),
    forward: () => Q(1),
    beforeEach: i.add,
    beforeResolve: b.add,
    afterEach: C.add,
    onError: z.add,
    isReady: D,
    install(f) {
      f.component("RouterLink", qs), f.component("RouterView", Hs), f.config.globalProperties.$router = R, Object.defineProperty(f.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => me(c)
      }), Be && !ue && c.value === Ae && (ue = !0, k(r.location).catch((N) => {
      }));
      const B = {};
      for (const N in Ae) Object.defineProperty(B, N, {
        get: () => c.value[N],
        enumerable: !0
      });
      f.provide(De, R), f.provide(Ze, Lt(B)), f.provide(He, c);
      const T = f.unmount;
      K.add(f), f.unmount = function() {
        K.delete(f), K.size < 1 && (_ = Ae, y && y(), y = null, c.value = Ae, ue = !1, ee = !1), T();
      };
    }
  };
  function te(f) {
    return f.reduce((B, T) => B.then(() => h(T)), Promise.resolve());
  }
  return R;
}
const Js = { class: "min-h-screen bg-[#525355] flex justify-center p-0 md:p-4" }, Ys = /* @__PURE__ */ pe({
  __name: "CopyrightContent",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = we(), o = Se(), a = () => {
      n.push(`/test/hardware/${o.params.testId}`);
    };
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
    }, 500)))(), (r, i) => (u(), x("div", Js, [
      e("div", { class: "w-full max-w-[1200px] flex flex-col shadow-lg overflow-hidden md:rounded-lg bg-white" }, [
        e("header", { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 shrink-0" }, [
          e("button", {
            class: "bg-white text-[#00796B] border-none rounded-full px-5 md:px-6 py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-all active:scale-95 shadow-sm",
            onClick: a
          }, [...i[0] || (i[0] = [
            P(" Continue ", -1),
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", {
                "fill-rule": "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])])
        ]),
        i[1] || (i[1] = Ce('<main class="flex-grow px-6 py-10 md:px-20 md:py-16 overflow-y-auto"><h1 class="text-2xl md:text-3xl font-medium text-[#333333] mb-4 md:mb-5">Copyright Information</h1><hr class="border-t border-[#e0e0e0] mb-8 md:mb-10"><div class="text-[#444444] text-[16px] md:text-[18px] leading-[1.8] space-y-6 md:space-y-8 max-w-4xl"><div class="flex gap-4 items-start"><div class="mt-1 bg-teal-50 p-2 rounded-lg text-[#00796B]"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 21a11.955 11.955 0 01-9.618-7.016m19.236 0A11.955 11.955 0 0012 3a11.955 11.955 0 00-9.618 7.016"></path></svg></div><p> Copyright © 2025 by ETS. TOEFL and TOEFL iBT are registered trademarks of ETS in the United States and other countries. The Eight-Point logo is a trademark of ETS. All other trademarks are property of their respective owners. </p></div><div class="flex gap-4 items-start"><div class="mt-1 bg-teal-50 p-2 rounded-lg text-[#00796B]"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></div><p> This TOEFL iBT® test, its test delivery system, and all questions contained in the following program are the unpublished confidential and proprietary materials of ETS. No reproduction or disclosure permitted. Unauthorized reproduction in part or in whole of this test is prohibited. Violators will be prosecuted to the full extent of applicable laws. </p></div></div></main>', 1))
      ])
    ]));
  }
}), Ks = /* @__PURE__ */ pe({
  __name: "copywrite",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (r, i) => (u(), _e(Ys, {
      _p: me(o),
      _pp: me(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), Zs = { class: "min-h-screen bg-[#525355] flex justify-center p-0 md:p-4" }, Xs = /* @__PURE__ */ pe({
  __name: "HardwareCheckContent",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = we(), o = Se(), a = () => {
      n.push(`/test/microphone/${o.params.testId}`);
    };
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
    }, 500)))(), (r, i) => (u(), x("div", Zs, [
      e("div", { class: "w-full max-w-[1200px] flex flex-col shadow-lg overflow-hidden md:rounded-lg bg-white" }, [
        e("header", { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 shrink-0" }, [
          e("button", {
            class: "bg-white text-[#00796B] border-none rounded-full px-5 md:px-6 py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-all active:scale-95 shadow-sm",
            onClick: a
          }, [...i[0] || (i[0] = [
            P(" Continue ", -1),
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", {
                "fill-rule": "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])])
        ]),
        i[1] || (i[1] = Ce('<main class="flex-grow px-6 py-10 md:px-20 md:py-16 overflow-y-auto"><h1 class="text-2xl md:text-3xl font-medium text-[#333333] mb-4 md:mb-5">Hardware Check</h1><hr class="border-t border-[#e0e0e0] mb-8 md:mb-10"><p class="text-[#444444] text-[16px] md:text-[18px] mb-8 md:mb-12 leading-relaxed"> Before the test begins, we will check the microphone and headset volume. </p><div class="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-16 mb-12 md:mb-16 text-[#00796B]"><div class="flex flex-col items-center gap-4 group transition-transform hover:scale-105"><div class="w-20 h-20 md:w-24 md:h-24 bg-teal-50 rounded-2xl flex items-center justify-center shadow-sm border border-teal-100"><svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"></path><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"></path></svg></div><span class="text-xs font-bold uppercase tracking-wider text-teal-700">Microphone</span></div><div class="flex flex-col items-center gap-4 group transition-transform hover:scale-105"><div class="w-20 h-20 md:w-24 md:h-24 bg-teal-50 rounded-2xl flex items-center justify-center shadow-sm border border-teal-100"><svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 00-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 00-9-9z"></path></svg></div><span class="text-xs font-bold uppercase tracking-wider text-teal-700">Headset</span></div><div class="flex flex-col items-center gap-4 group transition-transform hover:scale-105"><div class="w-20 h-20 md:w-24 md:h-24 bg-teal-50 rounded-2xl flex items-center justify-center shadow-sm border border-teal-100"><svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg></div><span class="text-xs font-bold uppercase tracking-wider text-teal-700">Volume</span></div></div><div class="bg-gray-50 border-l-4 border-[#00796B] p-6 md:p-8 rounded-r-xl max-w-3xl"><p class="text-[#444444] text-[15px] md:text-[17px] leading-[1.7]"> Please make sure your headset is on. Follow the instructions on each screen. Be sure that your microphone is properly positioned and adjusted to allow for the best possible recording. Speak directly into the microphone and in your normal speaking voice. </p></div></main>', 1))
      ])
    ]));
  }
}), en = /* @__PURE__ */ pe({
  __name: "hardware-check",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (r, i) => (u(), _e(Xs, {
      _p: me(o),
      _pp: me(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), tn = { class: "min-h-screen bg-[#525355] flex justify-center p-0 md:p-4" }, sn = { class: "w-full max-w-[1200px] flex flex-col shadow-lg overflow-hidden md:rounded-lg" }, nn = { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 gap-2 md:gap-4 shrink-0" }, on = { class: "relative flex items-center" }, ln = {
  key: 0,
  class: "absolute top-[120%] right-0 bg-white rounded-xl shadow-xl border border-gray-300 p-5 w-64 md:w-72 z-50 flex flex-col"
}, an = { class: "flex items-end justify-between h-10 gap-[2px] mb-3 mt-2 px-1" }, rn = `
  Adjusting the Volume.
  To adjust the volume, select the Volume icon at the top of the screen. The volume control will appear. Move the volume indicator to the left or the right to change the volume.
  To close the volume control, select the Volume icon again.
  You will be able to change the volume during the test if you need to.
  You now have the option to adjust the volume.
`, dn = /* @__PURE__ */ pe({
  __name: "AdjustVolumeContent",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = we(), o = F(!1), a = F(50);
    let r = null;
    const i = () => {
      "speechSynthesis" in window && (window.speechSynthesis.cancel(), r = new SpeechSynthesisUtterance(rn), r.volume = a.value / 100, r.rate = 0.9, r.onend = () => {
        window.speechSynthesis.speak(r);
      }, window.speechSynthesis.speak(r));
    }, b = () => {
      r && "speechSynthesis" in window && (r.volume = a.value / 100, window.speechSynthesis.speaking && (window.speechSynthesis.pause(), window.speechSynthesis.resume()));
    };
    wt(() => {
      i();
    }), Ve(() => {
      "speechSynthesis" in window && window.speechSynthesis.cancel();
    });
    const C = () => {
      "speechSynthesis" in window && window.speechSynthesis.cancel(), n.push("/microphone");
    };
    return (c, _) => (u(), x("div", tn, [
      e("div", sn, [
        e("header", nn, [
          e("div", on, [
            e("button", {
              onClick: _[0] || (_[0] = (g) => o.value = !o.value),
              class: ye(["rounded-full px-4 md:px-5 py-1.5 md:py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-2 transition-colors border", o.value ? "bg-white text-[#00796B] border-white" : "bg-transparent text-white border-white hover:bg-white hover:text-[#00796B]"])
            }, [..._[3] || (_[3] = [
              e("span", { class: "hidden xs:inline" }, "Volume", -1),
              e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-5 w-5",
                viewBox: "0 0 20 20",
                fill: "currentColor"
              }, [
                e("path", {
                  "fill-rule": "evenodd",
                  d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
                  "clip-rule": "evenodd"
                })
              ], -1)
            ])], 2),
            o.value ? (u(), x("div", ln, [
              e("button", {
                onClick: _[1] || (_[1] = (g) => o.value = !1),
                class: "absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-sm font-bold"
              }, " ✕ "),
              e("div", an, [
                (u(), x(J, null, ae(20, (g) => e("div", {
                  key: g,
                  class: ye(["w-[6px] rounded-full transition-colors duration-150", g * 5 <= a.value ? "bg-[#00796B]" : "bg-[#00796B]/20"]),
                  style: Te({ height: `${20 + g * 4}%` })
                }, null, 6)), 64))
              ]),
              U(e("input", {
                type: "range",
                "onUpdate:modelValue": _[2] || (_[2] = (g) => a.value = g),
                onInput: b,
                min: "0",
                max: "100",
                class: "w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer custom-slider"
              }, null, 544), [
                [O, a.value]
              ])
            ])) : H("", !0)
          ]),
          e("button", {
            class: "bg-white text-[#00796B] border-none rounded-full px-4 md:px-5 py-1.5 md:py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-colors",
            onClick: C
          }, [..._[4] || (_[4] = [
            P(" Continue ", -1),
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", {
                "fill-rule": "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])])
        ]),
        _[5] || (_[5] = Ce('<main class="bg-white flex-grow px-6 py-10 md:px-20 md:py-16 overflow-y-auto" data-v-f59b18f0><div class="text-[14px] md:text-[16px] text-[#333333] mb-4 md:mb-8" data-v-f59b18f0> Reading </div><h1 class="text-2xl md:text-[28px] font-normal text-[#333333] mb-4 md:mb-5" data-v-f59b18f0>Adjusting the Volume</h1><hr class="border-t border-[#e0e0e0] mb-6 md:mb-8" data-v-f59b18f0><div class="text-[#444444] text-[15px] md:text-[16px] leading-[1.6] space-y-4 md:space-y-6 max-w-4xl" data-v-f59b18f0><p data-v-f59b18f0> To adjust the volume, select the <strong data-v-f59b18f0>Volume</strong> icon at the top of the screen. The volume control will appear. Move the volume indicator to the left or the right to change the volume. </p><p data-v-f59b18f0> To close the volume control, select the <strong data-v-f59b18f0>Volume</strong> icon again. </p><p data-v-f59b18f0> You will be able to change the volume during the test if you need to. </p></div><div class="flex items-center gap-4 mt-8 md:mt-10" data-v-f59b18f0><svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 md:w-16 md:h-16 text-[#00796B]" viewBox="0 0 20 20" fill="currentColor" data-v-f59b18f0><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" data-v-f59b18f0></path></svg><p class="text-[#444444] text-[15px] md:text-[16px]" data-v-f59b18f0> You now have the option to adjust the volume. </p></div></main>', 1))
      ])
    ]));
  }
}), Ue = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [a, r] of n)
    o[a] = r;
  return o;
}, un = /* @__PURE__ */ Ue(dn, [["__scopeId", "data-v-f59b18f0"]]), cn = /* @__PURE__ */ pe({
  __name: "volume",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (r, i) => (u(), _e(un, {
      _p: me(o),
      _pp: me(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), pn = { class: "min-h-screen bg-[#525355] flex justify-center p-0 md:p-4" }, mn = { class: "w-full max-w-[1200px] flex flex-col shadow-lg overflow-hidden md:rounded-lg relative" }, fn = { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 gap-2 md:gap-4 shrink-0" }, xn = { class: "relative flex items-center" }, gn = {
  key: 0,
  class: "absolute top-[120%] right-0 bg-white rounded-xl shadow-xl border border-gray-300 p-5 w-64 md:w-72 z-50 flex flex-col"
}, vn = { class: "flex items-end justify-between h-10 gap-[2px] mb-3 mt-2 px-1" }, hn = { class: "bg-white flex-grow px-6 py-10 md:px-20 md:py-16 overflow-y-auto" }, bn = { class: "flex flex-col md:flex-row justify-between gap-10 md:gap-4 max-w-4xl mx-auto md:mx-0" }, wn = { class: "flex flex-col items-center gap-6 md:gap-8 flex-1" }, yn = { class: "relative flex gap-[2px]" }, kn = { class: "flex flex-col items-center gap-6 md:gap-8 flex-1" }, _n = { class: "relative flex gap-[2px]" }, $n = {
  key: 0,
  class: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
}, Cn = { class: "bg-white rounded-2xl md:rounded-[2rem] shadow-2xl w-full max-w-4xl p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-10 relative max-h-[90vh] overflow-y-auto" }, Tn = { class: "flex-shrink-0 flex items-center justify-center" }, Sn = { class: "rounded-full border-[4px] md:border-[6px] border-[#A5D6D1] bg-white p-1 shadow-sm" }, An = ["disabled"], En = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-10 h-10 md:w-14 md:h-14 mb-2",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, In = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-10 h-10 md:w-14 md:h-14 mb-2",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Rn = { class: "flex-grow flex flex-col justify-center" }, Bn = { class: "relative w-max mx-auto md:mx-0 mt-2 md:mt-4" }, Nn = { class: "flex gap-1 relative z-10" }, Mn = {
  key: 1,
  class: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
}, Un = { class: "bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-[400px] p-6 md:p-10 flex flex-col items-center relative text-center" }, Ln = `
  Adjusting the Microphone.
  In order to check your microphone volume, you will speak into the microphone using your normal tone and volume. 
  For best recording results, your voice level should remain generally within the Good Range. 
  While you speak the microphone will adjust automatically.
  Please look at the example on the screen showing the Good range and the Too Loud range.
`, jn = /* @__PURE__ */ pe({
  __name: "AdjustMicrophoneContent",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = we(), o = Se(), a = F(!1), r = F(50);
    let i = null;
    const b = F(!1), C = F(!1), c = F("ready"), _ = F(3), g = F(0);
    let s = null, l = null, p = null, m, d;
    const v = () => {
      "speechSynthesis" in window && (window.speechSynthesis.cancel(), i = new SpeechSynthesisUtterance(Ln), i.volume = r.value / 100, i.rate = 0.9, i.onend = () => {
        b.value = !0;
      }, window.speechSynthesis.speak(i));
    }, L = () => {
      i && "speechSynthesis" in window && (i.volume = r.value / 100, window.speechSynthesis.speaking && (window.speechSynthesis.pause(), window.speechSynthesis.resume()));
    }, E = re(() => c.value === "countdown"), j = re(() => c.value === "ready" ? "RECORD" : c.value === "countdown" ? _.value.toString() : "STOP"), k = re(() => c.value === "recording" ? "bg-[#C8102E] shadow-[0_0_20px_rgba(200,16,46,0.6)]" : c.value === "countdown" ? "bg-[#00796B] opacity-80 cursor-default" : "bg-[#00796B] hover:bg-[#006055]"), W = () => {
      c.value === "ready" ? ne() : c.value === "recording" && M();
    }, ne = () => {
      c.value = "countdown", _.value = 3;
      const X = setInterval(() => {
        _.value--, _.value <= 0 && (clearInterval(X), G());
      }, 1e3);
    }, G = async () => {
      try {
        p = await navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }), c.value = "recording";
        const X = window.AudioContext || window.webkitAudioContext;
        s = new X(), l = s.createAnalyser();
        const $ = s.createMediaStreamSource(p);
        l.smoothingTimeConstant = 0.5, l.fftSize = 256, $.connect(l);
        const y = new Uint8Array(l.frequencyBinCount), I = () => {
          if (c.value !== "recording") return;
          l.getByteFrequencyData(y);
          let S = 0;
          for (let oe = 0; oe < y.length; oe++) S += y[oe];
          const z = S / y.length;
          let ee = Math.floor(z / 40 * 14);
          ee > 14 && (ee = 14), g.value = ee, m = requestAnimationFrame(I);
        };
        I(), d = setTimeout(() => {
          M();
        }, 1e4);
      } catch (X) {
        console.error("Mic error:", X), alert("Microphone access is required."), c.value = "ready";
      }
    }, M = () => {
      c.value = "ready", g.value = 0, d && clearTimeout(d), m && cancelAnimationFrame(m), p && (p.getTracks().forEach((X) => X.stop()), p = null), s && s.state !== "closed" && (s.close(), s = null), b.value = !1, C.value = !0;
    }, h = (X) => X > g.value ? "border-gray-400 bg-transparent" : X <= 10 ? "border-[#00796B] bg-[#00796B]" : "border-[#C8102E] bg-[#C8102E]";
    wt(() => {
      v();
    }), Ve(() => {
      "speechSynthesis" in window && window.speechSynthesis.cancel(), c.value === "recording" && M();
    });
    const V = () => {
      "speechSynthesis" in window && window.speechSynthesis.cancel(), n.push(`/reading-section/${o.params.testId}`);
    };
    return (X, $) => (u(), x("div", pn, [
      e("div", mn, [
        e("header", fn, [
          e("div", xn, [
            e("button", {
              onClick: $[0] || ($[0] = (y) => a.value = !a.value),
              class: ye(["rounded-full px-4 md:px-5 py-1.5 md:py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-2 transition-colors border", a.value ? "bg-white text-[#00796B] border-white" : "bg-transparent text-white border-white hover:bg-white hover:text-[#00796B]"])
            }, [...$[4] || ($[4] = [
              e("span", { class: "hidden xs:inline" }, "Volume", -1),
              e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-5 w-5",
                viewBox: "0 0 20 20",
                fill: "currentColor"
              }, [
                e("path", {
                  "fill-rule": "evenodd",
                  d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
                  "clip-rule": "evenodd"
                })
              ], -1)
            ])], 2),
            a.value ? (u(), x("div", gn, [
              e("button", {
                onClick: $[1] || ($[1] = (y) => a.value = !1),
                class: "absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-sm font-bold"
              }, "✕"),
              e("div", vn, [
                (u(), x(J, null, ae(20, (y) => e("div", {
                  key: y,
                  class: ye(["w-[6px] rounded-full transition-colors duration-150", y * 5 <= r.value ? "bg-[#00796B]" : "bg-[#00796B]/20"]),
                  style: Te({ height: `${20 + y * 4}%` })
                }, null, 6)), 64))
              ]),
              U(e("input", {
                type: "range",
                "onUpdate:modelValue": $[2] || ($[2] = (y) => r.value = y),
                onInput: L,
                min: "0",
                max: "100",
                class: "w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer custom-slider"
              }, null, 544), [
                [O, r.value]
              ])
            ])) : H("", !0)
          ]),
          e("button", {
            class: "bg-white text-[#00796B] border-none rounded-full px-4 md:px-5 py-1.5 md:py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-colors",
            onClick: V
          }, [...$[5] || ($[5] = [
            P(" Continue ", -1),
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", {
                "fill-rule": "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])])
        ]),
        e("main", hn, [
          $[15] || ($[15] = Ce('<div class="text-[14px] md:text-[16px] text-[#333333] mb-4 md:mb-8" data-v-27c57e51>Reading</div><h1 class="text-2xl md:text-[28px] font-normal text-[#333333] mb-4 md:mb-5" data-v-27c57e51>Adjusting the Microphone</h1><hr class="border-t border-[#e0e0e0] mb-6 md:mb-8" data-v-27c57e51><div class="text-[#444444] text-[15px] md:text-[16px] leading-[1.6] space-y-4 md:space-y-6 max-w-4xl mb-8 md:mb-10" data-v-27c57e51><p data-v-27c57e51> In order to check your <strong data-v-27c57e51>microphone volume</strong>, you will speak into the microphone using your normal tone and volume. For best recording results, your voice level should remain generally within the Good Range. While you speak the microphone will adjust automatically. </p><p class="font-bold" data-v-27c57e51>Example:</p></div>', 4)),
          e("div", bn, [
            e("div", wn, [
              e("div", yn, [
                $[6] || ($[6] = e("div", { class: "absolute inset-y-0 left-[35%] border-l border-dashed border-gray-400" }, null, -1)),
                $[7] || ($[7] = e("div", { class: "absolute inset-y-0 right-[35%] border-l border-dashed border-gray-400" }, null, -1)),
                (u(), x(J, null, ae(6, (y) => e("div", {
                  key: "g1-" + y,
                  class: "w-2.5 md:w-3 h-8 bg-[#00796B] rounded-sm"
                })), 64)),
                (u(), x(J, null, ae(3, (y) => e("div", {
                  key: "g2-" + y,
                  class: "w-2.5 md:w-3 h-8 bg-[#00796B] rounded-sm"
                })), 64)),
                (u(), x(J, null, ae(9, (y) => e("div", {
                  key: "g3-" + y,
                  class: "w-2.5 md:w-3 h-8 border border-gray-400 rounded-sm"
                })), 64))
              ]),
              $[8] || ($[8] = e("div", { class: "flex w-full justify-between text-xs md:text-sm text-gray-500 font-medium px-1 md:px-2" }, [
                e("span", null, "Too Quiet"),
                e("span", null, "Good"),
                e("span", null, "Too Loud")
              ], -1)),
              $[9] || ($[9] = e("div", { class: "flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-semibold text-[#444]" }, [
                e("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-8 w-8 md:h-12 md:w-12 text-[#00796B]",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "3"
                }, [
                  e("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M5 13l4 4L19 7"
                  })
                ]),
                P(" Good ")
              ], -1))
            ]),
            e("div", kn, [
              e("div", _n, [
                $[10] || ($[10] = e("div", { class: "absolute inset-y-0 left-[35%] border-l border-dashed border-gray-400" }, null, -1)),
                $[11] || ($[11] = e("div", { class: "absolute inset-y-0 right-[35%] border-l border-dashed border-gray-400" }, null, -1)),
                (u(), x(J, null, ae(17, (y) => e("div", {
                  key: "r1-" + y,
                  class: "w-2.5 md:w-3 h-8 bg-[#C8102E] rounded-sm"
                })), 64)),
                $[12] || ($[12] = e("div", { class: "w-2.5 md:w-3 h-8 border border-gray-400 rounded-sm" }, null, -1))
              ]),
              $[13] || ($[13] = e("div", { class: "flex w-full justify-between text-xs md:text-sm text-gray-500 font-medium px-1 md:px-2" }, [
                e("span", null, "Too Quiet"),
                e("span", null, "Good"),
                e("span", null, "Too Loud")
              ], -1)),
              $[14] || ($[14] = e("div", { class: "flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-semibold text-[#444]" }, [
                e("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-8 w-8 md:h-12 md:w-12 text-[#C8102E]",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "3"
                }, [
                  e("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ]),
                P(" Too Loud ")
              ], -1))
            ])
          ])
        ]),
        b.value ? (u(), x("div", $n, [
          e("div", Cn, [
            e("div", Tn, [
              e("div", Sn, [
                e("button", {
                  onClick: W,
                  class: ye(["rounded-full w-32 h-32 md:w-48 md:h-48 flex flex-col justify-center items-center text-white transition-all duration-300", k.value]),
                  disabled: E.value
                }, [
                  c.value === "ready" ? (u(), x("svg", En, [...$[16] || ($[16] = [
                    e("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    }, null, -1)
                  ])])) : H("", !0),
                  c.value === "recording" ? (u(), x("svg", In, [...$[17] || ($[17] = [
                    e("rect", {
                      x: "6",
                      y: "6",
                      width: "12",
                      height: "12",
                      rx: "2",
                      ry: "2"
                    }, null, -1)
                  ])])) : H("", !0),
                  e("span", {
                    class: ye(c.value === "countdown" ? "text-4xl md:text-6xl font-bold" : "text-lg md:text-xl font-semibold tracking-wider")
                  }, A(j.value), 3)
                ], 10, An)
              ])
            ]),
            e("div", Rn, [
              $[20] || ($[20] = e("div", { class: "text-[#444444] text-[14px] md:text-[15px] leading-relaxed space-y-3 md:space-y-4 mb-6 md:mb-8" }, [
                e("p", null, "Select the 'Record' button. A timer will count down until the system is ready to record."),
                e("p", null, "To check your microphone level, you will record the following paragraph using your normal tone and volume."),
                e("p", { class: "text-gray-600 italic border-l-4 border-teal-500 pl-4 py-1" }, " There are several reasons why I would prefer to live in a large city. Some of the greatest advantages would include the number of job opportunities and career options, public transportation, greater diversity, and a wealth of entertainment. Also, large cities typically have a great deal to offer in terms of history, art and culture. ")
              ], -1)),
              e("div", Bn, [
                $[18] || ($[18] = e("div", { class: "absolute inset-y-0 left-[35px] right-[70px] bg-gray-100 border-x border-gray-400 -z-10" }, null, -1)),
                e("div", Nn, [
                  (u(), x(J, null, ae(14, (y) => e("div", {
                    key: y,
                    class: ye(["w-[14px] md:w-[18px] h-8 md:h-10 border rounded-[2px] transition-colors duration-75", h(y)])
                  }, null, 2)), 64))
                ]),
                $[19] || ($[19] = e("div", { class: "flex justify-between w-full mt-2 text-[10px] md:text-sm text-gray-600 font-medium" }, [
                  e("span", { class: "w-[35px] text-center leading-tight" }, [
                    P("Too"),
                    e("br"),
                    P("Quiet")
                  ]),
                  e("span", { class: "flex-grow text-center mt-1 md:mt-2" }, "Good"),
                  e("span", { class: "w-[70px] text-center leading-tight" }, [
                    P("Too"),
                    e("br"),
                    P("Loud")
                  ])
                ], -1))
              ])
            ])
          ])
        ])) : H("", !0),
        C.value ? (u(), x("div", Mn, [
          e("div", Un, [
            $[21] || ($[21] = Ce('<div class="flex items-center justify-center gap-3 w-full border-b pb-4 mb-6" data-v-27c57e51><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#00796B]" viewBox="0 0 20 20" fill="currentColor" data-v-27c57e51><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-27c57e51></path></svg><h2 class="text-lg md:text-xl font-semibold text-[#333]" data-v-27c57e51>Success</h2></div><p class="text-[#444] text-[14px] md:text-[15px] mb-8 px-2 md:px-4" data-v-27c57e51> Your microphone volume has been successfully adjusted. </p>', 2)),
            e("button", {
              onClick: $[3] || ($[3] = (y) => C.value = !1),
              class: "w-full md:w-auto bg-[#00796B] hover:bg-[#006055] text-white rounded-full px-8 py-2.5 text-[15px] font-medium transition-colors"
            }, " Continue ")
          ])
        ])) : H("", !0)
      ])
    ]));
  }
}), Vn = /* @__PURE__ */ Ue(jn, [["__scopeId", "data-v-27c57e51"]]), On = /* @__PURE__ */ pe({
  __name: "AdjustMicrophone",
  setup(t) {
    const n = {}, o = {};
    return (a, r) => (u(), _e(Vn, {
      _p: n,
      _pp: o
    }));
  }
}), Pn = { class: "min-h-screen bg-[#525355] flex justify-center p-0 md:p-4" }, Dn = { class: "w-full max-w-[1200px] flex flex-col shadow-lg overflow-hidden md:rounded-lg relative bg-white" }, zn = { class: "flex-grow px-6 py-10 md:px-24 flex flex-col items-center overflow-y-auto" }, qn = { class: "text-[#333333] text-[16px] md:text-[17px] leading-[2] md:leading-[2.2] w-full max-w-4xl text-justify bg-gray-50/50 p-6 md:p-10 rounded-2xl border border-gray-100 shadow-inner" }, Fn = /* @__PURE__ */ pe({
  __name: "FillMissingLetters",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = we(), o = ht({
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",
      q9: "",
      q10: ""
    }), a = () => {
      console.log("User Answers:", o), n.push("/questions/mcqs");
    };
    return (async () => t._p && t._p.f ? (t._p.my.emitter = t._p.f.new_emitter(), t._p.my.emitter.on("msg", async (r) => {
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
    }, 500)) : console.warn("Emitter logic safely skipped because _p.f is not ready yet."))(), (r, i) => (u(), x("div", Pn, [
      e("div", Dn, [
        e("header", { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 gap-3 shrink-0" }, [
          i[11] || (i[11] = e("button", { class: "bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded-full px-4 md:px-5 py-2 text-[14px] md:text-[16px] font-medium cursor-pointer flex items-center gap-2 transition-colors" }, [
            e("span", { class: "hidden xs:inline" }, "Volume"),
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", {
                "fill-rule": "evenodd",
                d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
                "clip-rule": "evenodd"
              })
            ])
          ], -1)),
          e("button", {
            class: "bg-white text-[#00796B] border-none rounded-full px-5 md:px-6 py-2 text-[14px] md:text-[16px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-colors shadow-sm",
            onClick: a
          }, [...i[10] || (i[10] = [
            P(" Next ", -1),
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", {
                "fill-rule": "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])])
        ]),
        i[24] || (i[24] = e("div", { class: "border-b border-gray-300 px-4 md:px-6 py-3 text-[14px] md:text-[15px] text-[#333333] flex items-center gap-2 shrink-0 bg-gray-50 overflow-x-auto whitespace-nowrap" }, [
          e("span", null, "Reading"),
          e("span", { class: "text-gray-400" }, "|"),
          e("span", null, "Questions 1–10 of 20")
        ], -1)),
        e("main", zn, [
          i[23] || (i[23] = e("h2", { class: "text-xl md:text-[28px] font-medium text-black mb-10 md:mb-16 mt-4 text-center leading-tight" }, " Fill in the missing letters in the paragraph. ", -1)),
          e("div", qn, [
            i[12] || (i[12] = P(" We know from drawings that have been preserved in caves for over 10,000 years that early humans performed dances as a group activity. We mi", -1)),
            U(e("input", {
              type: "text",
              "onUpdate:modelValue": i[0] || (i[0] = (b) => o.q1 = b),
              class: "inline-input",
              maxlength: "4"
            }, null, 512), [
              [O, o.q1]
            ]),
            i[13] || (i[13] = P(" think th", -1)),
            U(e("input", {
              type: "text",
              "onUpdate:modelValue": i[1] || (i[1] = (b) => o.q2 = b),
              class: "inline-input",
              maxlength: "2"
            }, null, 512), [
              [O, o.q2]
            ]),
            i[14] || (i[14] = P(" prehistoric peo", -1)),
            U(e("input", {
              type: "text",
              "onUpdate:modelValue": i[2] || (i[2] = (b) => o.q3 = b),
              class: "inline-input",
              maxlength: "3"
            }, null, 512), [
              [O, o.q3]
            ]),
            i[15] || (i[15] = P(" concentrated on", -1)),
            U(e("input", {
              type: "text",
              "onUpdate:modelValue": i[3] || (i[3] = (b) => o.q4 = b),
              class: "inline-input",
              maxlength: "2"
            }, null, 512), [
              [O, o.q4]
            ]),
            i[16] || (i[16] = P(" on ba", -1)),
            U(e("input", {
              type: "text",
              "onUpdate:modelValue": i[4] || (i[4] = (b) => o.q5 = b),
              class: "inline-input",
              maxlength: "3"
            }, null, 512), [
              [O, o.q5]
            ]),
            i[17] || (i[17] = P(" survival. How", -1)),
            U(e("input", {
              type: "text",
              "onUpdate:modelValue": i[5] || (i[5] = (b) => o.q6 = b),
              class: "inline-input",
              maxlength: "4"
            }, null, 512), [
              [O, o.q6]
            ]),
            i[18] || (i[18] = P(", it i", -1)),
            U(e("input", {
              type: "text",
              "onUpdate:modelValue": i[6] || (i[6] = (b) => o.q7 = b),
              class: "inline-input",
              maxlength: "1"
            }, null, 512), [
              [O, o.q7]
            ]),
            i[19] || (i[19] = P(" clear fr", -1)),
            U(e("input", {
              type: "text",
              "onUpdate:modelValue": i[7] || (i[7] = (b) => o.q8 = b),
              class: "inline-input",
              maxlength: "2"
            }, null, 512), [
              [O, o.q8]
            ]),
            i[20] || (i[20] = P(" the rec", -1)),
            U(e("input", {
              type: "text",
              "onUpdate:modelValue": i[8] || (i[8] = (b) => o.q9 = b),
              class: "inline-input",
              maxlength: "3"
            }, null, 512), [
              [O, o.q9]
            ]),
            i[21] || (i[21] = P(" that dan", -1)),
            U(e("input", {
              type: "text",
              "onUpdate:modelValue": i[9] || (i[9] = (b) => o.q10 = b),
              class: "inline-input",
              maxlength: "3"
            }, null, 512), [
              [O, o.q10]
            ]),
            i[22] || (i[22] = P(" was important to them. They recorded more drawings of dances than any other group activity. Dances served various purposes, including ritualistic communication with the divine, storytelling, and social cohesion. ", -1))
          ])
        ])
      ])
    ]));
  }
}), Gn = /* @__PURE__ */ Ue(Fn, [["__scopeId", "data-v-962e79fb"]]), Qn = /* @__PURE__ */ pe({
  __name: "fib",
  setup(t) {
    const n = {}, o = {};
    return (a, r) => (u(), _e(Gn, {
      _p: n,
      _pp: o
    }));
  }
}), Hn = { class: "min-h-screen bg-[#525355] flex justify-center p-0 md:p-4" }, Wn = /* @__PURE__ */ pe({
  __name: "Module1Intro",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = we(), o = () => {
      n.push("/reading-section");
    };
    return (async () => (t._p.my.emitter = t._p.f.new_emitter(), t._p.my.emitter.on("msg", async (a) => {
      console.log("_p.my.emitter.on", a);
    }), await t._p.my.emitter.emit("msg", { type: "on:change", _p: t._p, _pp: t._pp }), t._p.f.listen("msg", async (a) => {
      console.log("_p.f.listen", a);
    }), setTimeout(async () => {
      await t._p.f.call("msg", { type: "on:change", _p: t._p, _pp: t._pp });
    }, 500)))(), (a, r) => (u(), x("div", Hn, [
      e("div", { class: "w-full max-w-[1200px] flex flex-col shadow-lg overflow-hidden md:rounded-lg" }, [
        e("header", { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 gap-2 md:gap-4 shrink-0" }, [
          r[1] || (r[1] = e("button", { class: "bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded-full px-4 md:px-5 py-1.5 md:py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-2 transition-colors" }, [
            e("span", { class: "hidden xs:inline" }, "Volume"),
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", {
                "fill-rule": "evenodd",
                d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
                "clip-rule": "evenodd"
              })
            ])
          ], -1)),
          e("button", {
            class: "bg-white text-[#00796B] border-none rounded-full px-5 md:px-6 py-1.5 md:py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-colors",
            onClick: o
          }, [...r[0] || (r[0] = [
            P(" Begin ", -1),
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", {
                "fill-rule": "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])])
        ]),
        r[2] || (r[2] = Ce('<main class="bg-white flex-grow px-6 py-10 md:px-20 md:py-16 overflow-y-auto"><div class="text-[14px] md:text-[16px] text-[#333333] mb-4 md:mb-8">Reading</div><h1 class="text-2xl md:text-[28px] font-normal text-[#333333] mb-4 md:mb-5">Module 1</h1><hr class="border-t border-[#e0e0e0] mb-6 md:mb-8"><div class="text-[#444444] text-[15px] md:text-[16px] leading-[1.6] space-y-4 md:space-y-6 max-w-4xl"><p> In an actual test, the clock will show you how much time you have to complete Module 1. </p><p> In an actual test, you WILL NOT be able to return to Module 1 once you have begun Module 2. </p></div></main>', 1))
      ])
    ]));
  }
}), Jn = /* @__PURE__ */ pe({
  __name: "intro",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (r, i) => (u(), _e(Wn, {
      _p: me(o),
      _pp: me(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), Yn = { class: "min-h-screen bg-[#525355] flex justify-center p-0 md:p-4" }, Kn = /* @__PURE__ */ pe({
  __name: "ListeningModuleIntro",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = we(), o = () => {
      n.push("/listening-section");
    };
    return (async () => t._p && t._p.f && (t._p.my.emitter = t._p.f.new_emitter(), t._p.my.emitter.on("msg", async (a) => {
      console.log("_p.my.emitter.on", a);
    }), await t._p.my.emitter.emit("msg", { type: "on:change", _p: t._p, _pp: t._pp }), t._p.f.listen("msg", async (a) => {
      console.log("_p.f.listen", a);
    }), setTimeout(async () => {
      await t._p.f.call("msg", { type: "on:change", _p: t._p, _pp: t._pp });
    }, 500)))(), (a, r) => (u(), x("div", Yn, [
      e("div", { class: "w-full max-w-[1200px] flex flex-col shadow-lg overflow-hidden md:rounded-lg bg-white" }, [
        e("header", { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 gap-2 md:gap-4 shrink-0" }, [
          r[1] || (r[1] = e("button", { class: "bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded-full px-4 md:px-5 py-1.5 md:py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-2 transition-colors" }, [
            e("span", { class: "hidden xs:inline" }, "Volume"),
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", {
                "fill-rule": "evenodd",
                d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
                "clip-rule": "evenodd"
              })
            ])
          ], -1)),
          e("button", {
            class: "bg-white text-[#00796B] border-none rounded-full px-5 md:px-6 py-1.5 md:py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-colors",
            onClick: o
          }, [...r[0] || (r[0] = [
            P(" Begin ", -1),
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", {
                "fill-rule": "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])])
        ]),
        r[2] || (r[2] = Ce('<main class="bg-white flex-grow px-6 py-10 md:px-20 md:py-16 overflow-y-auto"><div class="text-[14px] md:text-[16px] text-[#333333] mb-4 md:mb-8">Listening</div><h1 class="text-2xl md:text-[28px] font-normal text-[#333333] mb-4 md:mb-5">Module 1</h1><hr class="border-t border-[#e0e0e0] mb-6 md:mb-8"><div class="text-[#444444] text-[15px] md:text-[16px] leading-[1.6] space-y-4 md:space-y-6 max-w-4xl"><p> In an actual test, the clock will show you how much time you have to complete each question. </p><p> You can use <strong>Next</strong> to move to the next question. </p><p> The first task is <strong>Listen and Choose a Response</strong>. In this task, you will listen to a sentence or question. You will then read four sentences and choose the option that is the best response. </p></div></main>', 1))
      ])
    ]));
  }
}), Zn = /* @__PURE__ */ pe({
  __name: "listening-intro",
  setup(t) {
    const n = {}, o = {};
    return (a, r) => (u(), _e(Kn, {
      _p: n,
      _pp: o
    }));
  }
}), Xn = { class: "min-h-screen bg-[#525355] flex justify-center font-sans p-0 md:p-4" }, eo = { class: "w-full max-w-[1200px] min-h-screen md:min-h-[700px] md:h-[90vh] flex flex-col shadow-lg overflow-hidden md:rounded-lg relative bg-white" }, to = { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 gap-2 md:gap-3 shrink-0" }, so = { class: "relative flex items-center" }, no = {
  key: 0,
  class: "absolute top-[120%] right-0 bg-white rounded-xl shadow-xl border border-gray-300 p-5 w-64 md:w-72 z-50 flex flex-col"
}, oo = { class: "flex items-end justify-between h-10 gap-[2px] mb-3 mt-2 px-1" }, lo = ["disabled"], ao = ["disabled"], ro = ["disabled"], io = {
  key: 0,
  class: "flex-grow flex flex-col items-center justify-center text-gray-500"
}, uo = {
  key: 1,
  class: "flex-grow flex flex-col pt-16 md:pt-24 px-6 md:px-16 text-[#333333]"
}, co = { class: "text-2xl md:text-[28px] font-light mb-4 md:mb-6" }, po = { class: "text-base md:text-[18px] leading-relaxed" }, mo = { class: "border-b border-gray-300 px-4 md:px-6 py-2 md:py-2.5 text-[12px] md:text-[14px] text-[#333333] flex items-center gap-2 shrink-0 bg-gray-50 overflow-x-auto whitespace-nowrap" }, fo = { class: "flex-grow px-6 md:px-10 py-6 md:py-10 flex flex-col md:flex-row gap-8 md:gap-12 overflow-y-auto relative" }, xo = {
  key: 0,
  class: "flex flex-col w-full max-w-4xl mx-auto items-center mt-0 md:mt-4"
}, go = { class: "text-2xl md:text-[32px] font-normal text-black mb-6 md:mb-12 text-center" }, vo = { class: "text-[#333333] text-[15px] md:text-[17px] leading-[2] md:leading-[2.2] w-full max-w-4xl text-justify" }, ho = ["onUpdate:modelValue"], bo = { class: "w-full md:flex-1 md:max-w-[55%]" }, wo = {
  key: 0,
  class: "text-xl md:text-[26px] text-center font-normal text-black mb-6 md:mb-8"
}, yo = ["innerHTML"], ko = { class: "w-full md:flex-1 md:max-w-[45%] md:pl-6 md:border-l border-gray-200 flex flex-col gap-6 pt-4" }, _o = { class: "text-lg md:text-[19px] font-bold text-black mb-2 leading-snug" }, $o = { class: "flex flex-col gap-4 md:gap-5" }, Co = { class: "relative flex items-center justify-center mt-1 shrink-0" }, To = ["value"], So = { class: "flex-grow flex justify-between items-start" }, Ao = { class: "text-[16px] md:text-[17px] text-[#333] group-hover:text-black leading-snug" }, Eo = { class: "font-bold mr-1" }, Io = {
  key: 3,
  class: "flex-grow flex items-center justify-center text-gray-500"
}, Ro = /* @__PURE__ */ pe({
  __name: "ReadingSection",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = we(), o = Se(), a = o.params.testId, r = le("testData"), i = le("isGlobalLoading"), b = le("updateUserInput"), C = le("syncAllData"), c = le("state"), _ = le("saveToLocalStorage"), g = F(null), s = F(0), l = F(0), p = F(!1), m = F([]), d = F(0), v = F(!1), L = F(60), E = re(() => i?.value || !g.value);
    function j($) {
      if (!$) return [];
      const y = $.replace(/<[^>]+>/g, "");
      let I = 1;
      return y.split(/([_-]+)/).map((z) => z.includes("_") || z.includes("-") ? {
        inputId: I++,
        maxLength: z.length,
        // Uses the exact length of the dashes/underscores
        text: ""
      } : { text: z });
    }
    const k = () => {
      if (!g.value || !g.value.modules) return;
      const $ = g.value.modules[s.value];
      if (!$ || !$.tasks) return;
      const y = $.tasks;
      let I = 0;
      const S = [];
      y.forEach((z, ee) => {
        if (z.type === "reading_fib" || z.type === "fill_in_the_blanks") {
          let oe = {};
          const D = z.questions?.[0]?.user_input?.data;
          if (D)
            try {
              oe = JSON.parse(D);
            } catch (w) {
              console.error("Failed to parse saved FIB data", w);
            }
          Object.keys(oe).length === 0 && z.questions && z.questions[0] && (z.questions[0].questionNumber ? z.questions.forEach((w) => {
            oe[w.questionNumber] = "";
          }) : Array.isArray(z.questions[0].answer) && z.questions[0].answer.forEach((w, q) => {
            oe[q + 1] = "";
          })), I++, S.push({
            id: `fib_${ee}`,
            isFillBlanks: !0,
            title: z.passageTitle || "Fill in the Blanks",
            segments: j(z.passageHTML),
            answers: oe,
            originalTaskIdx: ee,
            originalQIdx: 0,
            questionLabel: `Question ${I}`
          });
        } else z.type === "reading_mcq" && z.questions.forEach((oe, D) => {
          I++, S.push({
            id: `mcq_${ee}_${D}`,
            isMCQ: !0,
            passageTitle: z.passageTitle,
            passageHTML: z.passageHTML,
            questionText: oe.question,
            options: (oe.options || []).map((w, q) => ({
              id: String.fromCharCode(65 + q),
              text: w
            })),
            selectedAnswer: oe.user_input?.data || "",
            user_result: oe.user_result || { data: "" },
            originalTaskIdx: ee,
            originalQIdx: D,
            questionLabel: `Question ${I}`
          });
        });
      }), m.value = S, d.value = I || S.length, l.value = 0;
    }, W = ($) => {
      if (!g.value || !g.value.modules) return;
      console.log("[Reading] Searching for UUID:", $);
      const y = g.value.modules;
      let I = -1, S = -1, z = -1;
      for (let ee = 0; ee < y.length; ee++) {
        const oe = y[ee].tasks || [];
        for (let D = 0; D < oe.length; D++) {
          const w = oe[D];
          if (w.questions) {
            const q = w.questions.findIndex((Q) => Q.uuid === $);
            if (q !== -1) {
              I = ee, S = D, z = q;
              break;
            }
          } else if (w.uuid === $ || w.id === $) {
            I = ee, S = D, z = 0;
            break;
          }
        }
        if (I !== -1) break;
      }
      if (I !== -1) {
        s.value = I, k();
        const ee = m.value.findIndex((oe) => oe.originalTaskIdx === S && oe.originalQIdx === z);
        ee !== -1 && (l.value = ee);
      }
    };
    be(() => o.params.uuid, ($) => {
      $ && g.value && W($);
    }, { immediate: !0 }), be(() => r?.value, ($) => {
      if ($ && $.length > 0) {
        const y = $.find((I) => I.type.toLowerCase() === "reading");
        y ? (console.log("[Reading] Found reading section, loading..."), g.value = y, k(), c.value.section === "reading" ? (console.log("[Reading] Resuming position:", { module: c.value.module, task: c.value.task }), s.value = (c.value.module || 1) - 1, k(), l.value = (c.value.task || 1) - 1) : (c.value.section = "reading", c.value.module = 1, c.value.task = 1)) : console.warn("[Reading] Reading section NOT found in test data");
      }
    }, { immediate: !0 }), be([s, l], ([$, y]) => {
      const I = Number($) + 1, S = Number(y) + 1;
      console.log(`[Reading] Syncing position: Module ${I}, Task ${S}`), c.value.module = I, c.value.task = S, _();
    });
    const ne = () => {
      l.value < m.value.length - 1 ? l.value++ : V();
    }, G = ($) => {
      if (b) {
        const y = JSON.stringify($.answers);
        b("reading", s.value, $.originalTaskIdx, $.originalQIdx, y);
      }
    }, M = ($) => {
      b && b("reading", s.value, $.originalTaskIdx, $.originalQIdx, $.selectedAnswer);
    }, h = re(() => m.value[l.value]), V = async () => {
      if (p.value) {
        p.value = !1, s.value++, k();
        return;
      }
      if (l.value < m.value.length - 1) {
        l.value++;
        return;
      }
      if (s.value < g.value.modules.length - 1) {
        p.value = !0;
        return;
      } else
        try {
          i && (i.value = !0), await C("reading", !0);
        } catch ($) {
          console.error("Error during final save:", $);
        } finally {
          i && (i.value = !1), n.push(`/listening-section/${a}`);
        }
    }, X = () => {
      l.value > 0 && l.value--;
    };
    return ($, y) => (u(), x("div", Xn, [
      e("div", eo, [
        e("header", to, [
          e("div", so, [
            e("button", {
              onClick: y[0] || (y[0] = (I) => v.value = !v.value),
              class: "bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded-full px-3 md:px-5 py-1.5 text-[14px] md:text-[15px] font-medium cursor-pointer flex items-center gap-2 transition-colors"
            }, [...y[6] || (y[6] = [
              e("span", { class: "hidden xs:inline" }, "Volume", -1),
              e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-4 w-4",
                viewBox: "0 0 20 20",
                fill: "currentColor"
              }, [
                e("path", {
                  "fill-rule": "evenodd",
                  d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
                  "clip-rule": "evenodd"
                })
              ], -1)
            ])]),
            v.value ? (u(), x("div", no, [
              e("button", {
                onClick: y[1] || (y[1] = (I) => v.value = !1),
                class: "absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-sm font-bold"
              }, "✕"),
              e("div", oo, [
                (u(), x(J, null, ae(20, (I) => e("div", {
                  key: I,
                  class: ye(["w-[6px] rounded-full transition-colors duration-150", I * 5 <= L.value ? "bg-[#00796B]" : "bg-[#00796B]/20"]),
                  style: Te({ height: `${20 + I * 4}%` })
                }, null, 6)), 64))
              ]),
              U(e("input", {
                type: "range",
                "onUpdate:modelValue": y[2] || (y[2] = (I) => L.value = I),
                min: "0",
                max: "100",
                class: "w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer custom-slider"
              }, null, 512), [
                [O, L.value]
              ])
            ])) : H("", !0)
          ]),
          e("button", {
            onClick: X,
            disabled: l.value === 0 || E.value || p.value,
            class: "bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded-full px-3 md:px-5 py-1.5 text-[14px] md:text-[15px] font-medium cursor-pointer flex items-center gap-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          }, [...y[7] || (y[7] = [
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-4 w-4",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", {
                "fill-rule": "evenodd",
                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                "clip-rule": "evenodd"
              })
            ], -1),
            e("span", { class: "hidden xs:inline" }, "Back", -1)
          ])], 8, lo),
          e("button", {
            onClick: ne,
            disabled: E.value,
            class: "bg-[#EF5350] text-white border-none rounded-full px-3 md:px-5 py-1.5 text-[13px] md:text-[14px] font-bold flex items-center gap-1 hover:bg-red-600 transition-colors shadow-sm"
          }, [...y[8] || (y[8] = [
            P(" SKIP ", -1),
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-4 w-4",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              e("path", { d: "M13 5l7 7-7 7M5 5l7 7-7 7" })
            ], -1)
          ])], 8, ao),
          e("button", {
            onClick: V,
            disabled: E.value,
            class: "bg-white text-[#00796B] border-none rounded-full px-4 md:px-6 py-1.5 text-[14px] md:text-[15px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          }, [...y[9] || (y[9] = [
            P(" Next ", -1),
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-4 w-4",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", {
                "fill-rule": "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])], 8, ro)
        ]),
        E.value ? (u(), x("div", io, [...y[10] || (y[10] = [
          e("div", { class: "animate-pulse flex flex-col items-center" }, [
            e("div", { class: "w-12 h-12 border-4 border-[#00796B] border-t-transparent rounded-full animate-spin mb-4" }),
            e("div", null, "Loading Reading Section...")
          ], -1)
        ])])) : p.value ? (u(), x("div", uo, [
          e("h2", co, "End of Module " + A(s.value + 1), 1),
          y[14] || (y[14] = e("hr", { class: "w-full border-gray-300 mb-6 md:mb-8" }, null, -1)),
          e("p", po, [
            P(" You have completed Module " + A(s.value + 1) + ". ", 1),
            y[11] || (y[11] = e("br", null, null, -1)),
            y[12] || (y[12] = P(" Select ", -1)),
            y[13] || (y[13] = e("strong", { class: "font-bold" }, "Next", -1)),
            P(" to continue to Module " + A(s.value + 2) + ". ", 1)
          ])
        ])) : m.value.length > 0 && h.value ? (u(), x(J, { key: 2 }, [
          e("div", mo, [
            y[15] || (y[15] = e("span", null, "Reading", -1)),
            y[16] || (y[16] = e("span", { class: "text-gray-400" }, "|", -1)),
            e("span", null, "Module " + A(s.value + 1), 1),
            y[17] || (y[17] = e("span", { class: "text-gray-400" }, "|", -1)),
            e("span", null, A(h.value.questionLabel) + " of " + A(d.value), 1)
          ]),
          e("main", fo, [
            h.value.isFillBlanks ? (u(), x("div", xo, [
              e("h2", go, A(h.value.title), 1),
              e("div", vo, [
                (u(!0), x(J, null, ae(h.value.segments, (I, S) => (u(), x(J, { key: S }, [
                  e("span", null, A(I.text), 1),
                  I.inputId ? U((u(), x("input", {
                    key: 0,
                    type: "text",
                    "onUpdate:modelValue": (z) => h.value.answers[I.inputId] = z,
                    onInput: y[3] || (y[3] = (z) => G(h.value)),
                    class: "inline-input px-2",
                    style: Te({
                      minWidth: "60px",
                      width: h.value.answers[I.inputId]?.length > 5 ? h.value.answers[I.inputId].length * 9 + "px" : Math.max(60, I.maxLength * 10 + 10) + "px"
                    })
                  }, null, 44, ho)), [
                    [O, h.value.answers[I.inputId]]
                  ]) : H("", !0)
                ], 64))), 128))
              ])
            ])) : h.value.isMCQ ? (u(), x(J, { key: 1 }, [
              e("section", bo, [
                h.value.passageTitle ? (u(), x("h2", wo, A(h.value.passageTitle), 1)) : H("", !0),
                e("div", {
                  class: "passage-content-wrapper text-[15px] md:text-[16px] text-[#333] leading-relaxed",
                  innerHTML: h.value.passageHTML
                }, null, 8, yo)
              ]),
              e("section", ko, [
                e("h3", _o, A(h.value.questionText), 1),
                e("div", $o, [
                  (u(!0), x(J, null, ae(h.value.options, (I) => (u(), x("label", {
                    key: I.id,
                    class: "flex items-start gap-3 md:gap-4 cursor-pointer group"
                  }, [
                    e("div", Co, [
                      U(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": y[4] || (y[4] = (S) => h.value.selectedAnswer = S),
                        value: I.id,
                        onChange: y[5] || (y[5] = (S) => M(h.value)),
                        class: "peer appearance-none w-[20px] h-[20px] md:w-[22px] md:h-[22px] border border-black rounded-full checked:border-black cursor-pointer"
                      }, null, 40, To), [
                        [yt, h.value.selectedAnswer]
                      ]),
                      y[18] || (y[18] = e("div", { class: "absolute w-[10px] h-[10px] bg-black rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" }, null, -1))
                    ]),
                    e("div", So, [
                      e("span", Ao, [
                        e("span", Eo, "(" + A(I.id) + ")", 1),
                        P(" " + A(I.text), 1)
                      ])
                    ])
                  ]))), 128))
                ])
              ])
            ], 64)) : H("", !0)
          ])
        ], 64)) : (u(), x("div", Io, " No reading questions available. "))
      ])
    ]));
  }
}), Bo = /* @__PURE__ */ pe({
  __name: "ReadingPage",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (r, i) => (u(), _e(Ro, {
      _p: me(o),
      _pp: me(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), No = { class: "min-h-screen bg-[#525355] flex justify-center font-sans antialiased p-0 md:p-4" }, Mo = { class: "w-full max-w-[1200px] min-h-screen md:min-h-[700px] md:h-[90vh] flex flex-col shadow-lg overflow-hidden md:rounded-lg relative bg-white" }, Uo = { class: "bg-[#00796B] h-[60px] flex justify-between items-center px-4 md:px-6 gap-2 md:gap-3 shrink-0" }, Lo = { class: "text-white font-medium flex items-center gap-2 text-[14px] md:text-[15px] w-20 md:w-32" }, jo = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 md:h-5 md:w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, Vo = { key: 1 }, Oo = { class: "flex items-center gap-2 md:gap-3" }, Po = { class: "relative flex items-center" }, Do = {
  key: 0,
  class: "absolute top-[120%] right-0 bg-white rounded-xl shadow-xl border border-gray-300 p-5 w-64 md:w-72 z-50 flex flex-col"
}, zo = { class: "flex items-end justify-between h-10 gap-[2px] mb-3 mt-2 px-1" }, qo = ["disabled"], Fo = ["disabled"], Go = { class: "hidden xs:inline" }, Qo = { class: "xs:hidden" }, Ho = {
  key: 0,
  class: "flex-grow flex flex-col items-center justify-center text-gray-500"
}, Wo = { class: "animate-pulse flex flex-col items-center" }, Jo = {
  key: 0,
  class: "text-sm mt-2 text-red-500"
}, Yo = { class: "border-b border-gray-300 px-4 md:px-6 py-2 md:py-2.5 text-[12px] md:text-[14px] text-[#333333] flex items-center gap-2 shrink-0 bg-gray-50 overflow-x-auto whitespace-nowrap" }, Ko = { key: 0 }, Zo = { class: "flex-grow flex flex-col relative bg-white overflow-hidden p-4 md:p-8 overflow-y-auto" }, Xo = {
  key: 0,
  class: "p-6 md:p-16 flex flex-col items-center max-w-4xl mx-auto text-center"
}, el = {
  key: 1,
  class: "px-6 py-10 md:px-10 md:py-16 flex flex-col items-center max-w-3xl mx-auto text-center"
}, tl = { class: "text-xl md:text-[28px] font-medium text-black mb-6" }, sl = { class: "bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-200 shadow-sm text-left" }, nl = { class: "text-[16px] md:text-[18px] text-[#444] leading-relaxed whitespace-pre-line" }, ol = {
  key: 2,
  class: "flex flex-col h-full p-4 md:p-12 bg-white"
}, ll = { class: "text-[16px] md:text-[20px] font-medium mb-3 md:mb-4 text-gray-500" }, al = ["onClick"], rl = {
  key: 0,
  class: "text-gray-400 italic text-[14px]"
}, il = { class: "flex flex-wrap gap-2 md:gap-4 p-2 md:p-4 bg-gray-50/50 rounded-xl" }, dl = ["onDragstart"], ul = {
  key: 3,
  class: "flex flex-col md:flex-row h-full gap-6 md:gap-0"
}, cl = { class: "w-full md:w-1/2 md:p-8 md:overflow-y-auto md:border-r border-gray-300 bg-white" }, pl = { class: "text-[15px] md:text-[16px] text-[#444] leading-relaxed mb-6 md:mb-8" }, ml = { class: "list-disc pl-5 space-y-2 text-[15px] md:text-[16px] text-[#444]" }, fl = { class: "w-full md:w-1/2 flex flex-col md:p-8 md:bg-gray-50 min-h-[400px]" }, xl = { class: "bg-white border border-gray-300 rounded-t-lg p-3 md:p-4 shadow-sm text-[13px] md:text-[14px]" }, gl = { class: "mb-1 md:mb-2" }, vl = { class: "bg-[#EAEAEA] px-4 py-1.5 border-x border-gray-300 flex justify-between text-[12px] md:text-[13px]" }, hl = {
  key: 4,
  class: "flex flex-col md:flex-row h-full gap-6 md:gap-0 bg-gray-50/50"
}, bl = { class: "w-full md:w-1/2 md:p-6 md:overflow-y-auto md:border-r border-gray-300 flex flex-col gap-4 md:gap-6" }, wl = { class: "bg-white p-4 md:p-5 border border-gray-200 rounded-lg shadow-sm" }, yl = { class: "text-[14px] md:text-[16px] text-[#333] leading-relaxed" }, kl = { class: "font-bold text-gray-700 mb-1 text-[14px] md:text-[15px]" }, _l = { class: "text-[13px] md:text-[15px] text-gray-600 italic" }, $l = { class: "w-full md:w-1/2 flex flex-col md:p-6 min-h-[400px]" }, Cl = { class: "bg-[#EAEAEA] border border-gray-300 rounded-t-lg px-4 py-2 flex justify-between items-center text-[12px] md:text-[13px]" }, Tl = /* @__PURE__ */ pe({
  __name: "writingcontent",
  setup(t) {
    const n = we(), a = Se().params.testId, r = le("testData"), i = le("isGlobalLoading"), b = le("updateUserInput"), C = le("syncAllData"), c = le("state"), _ = le("saveToLocalStorage"), g = F(null), s = F([]), l = F(0), p = F("section_intro"), m = F(0);
    let d = null;
    const v = F(!1), L = F(60), E = F(""), j = re(() => i?.value || !g.value), k = re(() => s.value[l.value]), W = re(() => s.value.filter((D) => D.type !== "section_intro").length), ne = re(() => {
      const D = k.value?.userAnswerText || "";
      return D.trim() ? D.trim().split(/\s+/).length : 0;
    }), G = re(() => {
      const D = Math.floor(m.value / 60), w = m.value % 60;
      return `${D}:${w.toString().padStart(2, "0")}`;
    });
    let M = null;
    const h = F(null), V = (D) => {
      if (b && D.type !== "section_intro") {
        let w = "";
        D.type === "build_sentences" ? w = D.userAnswer.map((q) => q.text).join(" ") : w = D.userAnswerText || "", b("writing", 0, D.originalTaskIdx, D.originalQIdx, w);
      }
    }, X = (D) => {
      const w = [];
      let q = 1;
      D.forEach((Q, ue) => {
        if (Q.type === "build_sentences" && Q.questions)
          Q.questions.forEach((K, R) => {
            const te = K.user_input?.data || "", f = te ? te.split(" ").map((T, N) => ({ id: `saved_${N}`, text: T })) : [];
            let B = (K.scrambledWords || []).map((T, N) => ({ id: `w_${N}`, text: T }));
            f.forEach((T) => {
              const N = B.findIndex((Y) => Y.text === T.text);
              N !== -1 && B.splice(N, 1);
            }), w.push({
              type: "build_sentences",
              questionNum: q++,
              title: "Build a Sentence",
              directions: Q.instruction || "Rearrange the words to form a correct sentence.",
              prompt: K.prompt || "",
              wordBank: B,
              userAnswer: f,
              // For Drag and Drop UI
              writingTime: 0,
              originalTaskIdx: ue,
              originalQIdx: R
            });
          });
        else if (Q.type === "write_an_email" || Q.type === "integrated_email") {
          const K = Q.questions ? Q.questions[0] : {};
          w.push({
            type: "write_an_email",
            questionNum: q++,
            title: "Write an Email",
            directions: Q.instruction || "Read the scenario and follow the instructions.",
            scenario: Q.scenario || Q.prompt?.situation || "",
            instructions: Q.instructions || Q.prompt?.task || [],
            emailTo: Q.emailMetadata?.to || Q.prompt?.email?.to || "Kevin",
            emailSubject: Q.emailMetadata?.subject || Q.prompt?.email?.subject || "Team Lunch",
            writingTime: (Q.timeLimit ? parseInt(Q.timeLimit) : 7) * 60,
            userAnswerText: K.user_input?.data || "",
            user_result: K.user_result || { data: "" },
            originalTaskIdx: ue,
            originalQIdx: 0
          });
        } else if (Q.type === "academic_discussion") {
          const K = Q.questions ? Q.questions[0] : {};
          w.push({
            type: "academic_discussion",
            questionNum: q++,
            title: "Academic Discussion",
            // Supporting multiple formats with ||
            directions: Q.instruction || Q.requirements || "Read the professor's post and students' responses, then contribute your own.",
            professorName: Q.professor?.name || "Professor",
            professorPrompt: Q.professorPrompt || Q.professor?.post || "",
            studentResponses: Q.studentResponses || Q.students || [],
            writingTime: (Q.timeLimit ? parseInt(Q.timeLimit) : 10) * 60,
            userAnswerText: K.user_input?.data || "",
            user_result: K.user_result || { data: "" },
            originalTaskIdx: ue,
            originalQIdx: 0
          });
        }
      }), s.value = [{ type: "section_intro" }, ...w], c.value.section === "writing" ? (l.value = (c.value.task || 1) - 1, l.value > 0 && (p.value = "writing")) : (c.value.section = "writing", c.value.module = 1, c.value.task = 1);
    };
    be(l, (D) => {
      c.value.task = D + 1, _();
    }), be(() => r?.value, (D) => {
      if (D && D.length > 0) {
        const w = D.find((q) => q.type.toLowerCase() === "writing");
        w && (!g.value || s.value.length === 0 ? (g.value = w, X(w.tasks || [])) : w.tasks?.forEach((q, Q) => {
          q.questions && q.questions.forEach((ue, K) => {
            const R = s.value.find((te) => te.originalTaskIdx === Q && te.originalQIdx === K);
            R && ue.user_result && (R.user_result = ue.user_result);
          });
        }));
      }
    }, { immediate: !0 });
    const $ = (D, w) => {
      M = { ...D, source: w };
    }, y = (D) => {
      !M || !k.value || (M.source === "bank" && D === "target" && (k.value.userAnswer.push(M), k.value.wordBank = k.value.wordBank.filter((w) => w.id !== M.id), V(k.value)), M = null, h.value = null);
    }, I = (D) => {
      if (!k.value) return;
      const w = k.value.userAnswer[D];
      k.value.userAnswer.splice(D, 1), k.value.wordBank.push(w), V(k.value);
    }, S = (D) => {
      clearInterval(d), m.value = D, d = setInterval(() => {
        m.value > 0 ? m.value-- : (clearInterval(d), oe());
      }, 1e3);
    }, z = () => clearInterval(d), ee = () => {
      clearInterval(d), advance();
    }, oe = async () => {
      if (p.value === "section_intro")
        l.value++, p.value = "directions";
      else if (p.value === "directions")
        p.value = "writing", k.value.writingTime && S(k.value.writingTime);
      else if (z(), V(k.value), l.value < s.value.length - 1) {
        const D = s.value[l.value];
        l.value++;
        const w = s.value[l.value];
        D.type === w.type && D.originalTaskIdx === w.originalTaskIdx ? (p.value = "writing", w.writingTime && S(w.writingTime)) : p.value = "directions", c.value.task = l.value + 1, _();
      } else
        try {
          i && (i.value = !0), await C("writing", !0), n.push(`/speaking-section/${a}`);
        } catch (D) {
          console.error("Save failed during final sync", D);
        } finally {
          i && (i.value = !1);
        }
    };
    return Ve(() => z()), (D, w) => (u(), x("div", No, [
      e("div", Mo, [
        e("header", Uo, [
          e("div", Lo, [
            p.value === "writing" && m.value > 0 ? (u(), x("svg", jo, [...w[10] || (w[10] = [
              e("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              }, null, -1)
            ])])) : H("", !0),
            p.value === "writing" && m.value > 0 ? (u(), x("span", Vo, A(G.value), 1)) : H("", !0)
          ]),
          e("div", Oo, [
            e("div", Po, [
              e("button", {
                onClick: w[0] || (w[0] = (q) => v.value = !v.value),
                class: "bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded-full px-3 md:px-5 py-1.5 text-[14px] md:text-[15px] font-medium cursor-pointer flex items-center gap-2 transition-colors"
              }, [...w[11] || (w[11] = [
                e("span", { class: "hidden xs:inline" }, "Volume", -1),
                e("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-4 w-4",
                  viewBox: "0 0 20 20",
                  fill: "currentColor"
                }, [
                  e("path", {
                    "fill-rule": "evenodd",
                    d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
                    "clip-rule": "evenodd"
                  })
                ], -1)
              ])]),
              v.value ? (u(), x("div", Do, [
                e("button", {
                  onClick: w[1] || (w[1] = (q) => v.value = !1),
                  class: "absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-sm font-bold"
                }, "✕"),
                e("div", zo, [
                  (u(), x(J, null, ae(20, (q) => e("div", {
                    key: q,
                    class: ye(["w-[6px] rounded-full transition-colors duration-150", q * 5 <= L.value ? "bg-[#00796B]" : "bg-[#00796B]/20"]),
                    style: Te({ height: `${20 + q * 4}%` })
                  }, null, 6)), 64))
                ]),
                U(e("input", {
                  type: "range",
                  "onUpdate:modelValue": w[2] || (w[2] = (q) => L.value = q),
                  min: "0",
                  max: "100",
                  class: "w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer custom-slider"
                }, null, 512), [
                  [O, L.value]
                ])
              ])) : H("", !0)
            ]),
            e("button", {
              onClick: ee,
              disabled: j.value,
              class: "bg-[#EF5350] text-white border-none rounded-full px-3 md:px-5 py-1.5 text-[13px] md:text-[14px] font-bold flex items-center gap-1 hover:bg-red-600 transition-colors shadow-sm"
            }, [...w[12] || (w[12] = [
              P(" SKIP ", -1),
              e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-4 w-4",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "3"
              }, [
                e("path", { d: "M13 5l7 7-7 7M5 5l7 7-7 7" })
              ], -1)
            ])], 8, qo),
            e("button", {
              onClick: oe,
              disabled: j.value,
              class: "bg-white text-[#00796B] border-none rounded-full px-4 md:px-6 py-1.5 text-[14px] md:text-[15px] font-medium flex items-center gap-1 hover:bg-gray-100 transition-colors shadow-sm"
            }, [
              e("span", Go, A(p.value === "section_intro" ? "Start Question" : "Next"), 1),
              e("span", Qo, A(p.value === "section_intro" ? "Start" : "Next"), 1),
              w[13] || (w[13] = e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-4 w-4",
                viewBox: "0 0 20 20",
                fill: "currentColor"
              }, [
                e("path", {
                  "fill-rule": "evenodd",
                  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                  "clip-rule": "evenodd"
                })
              ], -1))
            ], 8, Fo)
          ])
        ]),
        j.value ? (u(), x("div", Ho, [
          e("div", Wo, [
            w[14] || (w[14] = e("div", { class: "w-10 h-10 border-4 border-[#00796B] border-t-transparent rounded-full animate-spin mb-4" }, null, -1)),
            w[15] || (w[15] = e("div", null, "Loading Writing Section...", -1)),
            E.value ? (u(), x("div", Jo, A(E.value), 1)) : H("", !0)
          ])
        ])) : s.value.length > 0 && k.value ? (u(), x(J, { key: 1 }, [
          e("div", Yo, [
            w[16] || (w[16] = e("span", null, "Writing", -1)),
            w[17] || (w[17] = e("span", { class: "text-gray-400" }, "|", -1)),
            k.value.type !== "section_intro" ? (u(), x("span", Ko, "Question " + A(k.value.questionNum) + " of " + A(W.value), 1)) : H("", !0)
          ]),
          e("main", Zo, [
            k.value.type === "section_intro" ? (u(), x("div", Xo, [...w[18] || (w[18] = [
              e("h2", { class: "text-2xl md:text-[32px] font-medium text-black mb-6 md:mb-10 border-b-2 border-[#00796B] pb-2" }, "Writing Section Directions", -1),
              e("div", { class: "text-[15px] md:text-[17px] text-[#333] leading-relaxed" }, [
                e("p", { class: "mb-6" }, "This section measures your ability to communicate in writing. You will complete several types of tasks."),
                e("p", { class: "italic text-gray-500" }, [
                  P("Click "),
                  e("strong", null, "Next"),
                  P(" to begin.")
                ])
              ], -1)
            ])])) : p.value === "directions" ? (u(), x("div", el, [
              e("h2", tl, A(k.value.title), 1),
              e("div", sl, [
                e("p", nl, A(k.value.directions), 1)
              ])
            ])) : p.value === "writing" && k.value.type === "build_sentences" ? (u(), x("div", ol, [
              e("h3", ll, 'Context: "' + A(k.value.prompt) + '"', 1),
              w[19] || (w[19] = e("h2", { class: "text-[18px] md:text-[24px] font-bold mb-6 md:mb-10 text-black leading-tight" }, "Rearrange the words to form a correct sentence:", -1)),
              e("div", {
                class: "flex flex-wrap items-center min-h-[60px] md:min-h-[80px] border-2 border-dashed border-gray-300 rounded-xl p-4 md:p-6 mb-8 md:mb-12 bg-gray-50 gap-2 md:gap-3",
                onDragover: w[3] || (w[3] = kt((q) => h.value = "target", ["prevent"])),
                onDragleave: w[4] || (w[4] = (q) => h.value = null),
                onDrop: w[5] || (w[5] = (q) => y("target"))
              }, [
                (u(!0), x(J, null, ae(k.value.userAnswer, (q, Q) => (u(), x("div", {
                  key: q.id,
                  class: "bg-white border border-[#00796B] text-[#00796B] px-3 md:px-5 py-1.5 md:py-2 rounded-lg shadow-sm cursor-pointer font-medium text-[14px] md:text-[16px]",
                  onClick: (ue) => I(Q)
                }, A(q.text), 9, al))), 128)),
                k.value.userAnswer.length === 0 ? (u(), x("span", rl, "Drag words here...")) : H("", !0)
              ], 32),
              e("div", il, [
                (u(!0), x(J, null, ae(k.value.wordBank, (q) => (u(), x("div", {
                  key: q.id,
                  class: "bg-white border border-gray-300 px-4 md:px-6 py-1.5 md:py-2 rounded-lg cursor-grab hover:bg-gray-50 text-[14px] md:text-[16px] shadow-sm active:scale-95 transition-transform",
                  draggable: "true",
                  onDragstart: (Q) => $(q, "bank")
                }, A(q.text), 41, dl))), 128))
              ])
            ])) : p.value === "writing" && k.value.type === "write_an_email" ? (u(), x("div", ul, [
              e("div", cl, [
                w[20] || (w[20] = e("h3", { class: "font-bold text-[18px] md:text-[20px] mb-3 md:mb-4 text-[#00796B]" }, "Scenario", -1)),
                e("p", pl, A(k.value.scenario), 1),
                w[21] || (w[21] = e("h3", { class: "font-bold text-[18px] md:text-[20px] mb-3 md:mb-4 text-[#00796B]" }, "Task Requirements", -1)),
                e("ul", ml, [
                  (u(!0), x(J, null, ae(k.value.instructions, (q, Q) => (u(), x("li", { key: Q }, A(q), 1))), 128))
                ])
              ]),
              e("div", fl, [
                e("div", xl, [
                  e("div", gl, [
                    w[22] || (w[22] = e("span", { class: "text-gray-500 mr-2" }, "To:", -1)),
                    P(" " + A(k.value.emailTo), 1)
                  ]),
                  e("div", null, [
                    w[23] || (w[23] = e("span", { class: "text-gray-500 mr-2" }, "Subject:", -1)),
                    P(" " + A(k.value.emailSubject), 1)
                  ])
                ]),
                e("div", vl, [
                  w[24] || (w[24] = e("div", { class: "flex gap-2" }, null, -1)),
                  e("div", null, "Words: " + A(ne.value), 1)
                ]),
                U(e("textarea", {
                  "onUpdate:modelValue": w[6] || (w[6] = (q) => k.value.userAnswerText = q),
                  onInput: w[7] || (w[7] = (q) => V(k.value)),
                  class: "w-full flex-grow resize-none border border-gray-300 p-4 outline-none text-[14px] md:text-[15px] rounded-b-lg focus:ring-1 focus:ring-[#00796B]",
                  placeholder: "Write your email..."
                }, null, 544), [
                  [O, k.value.userAnswerText]
                ])
              ])
            ])) : p.value === "writing" && k.value.type === "academic_discussion" ? (u(), x("div", hl, [
              e("div", bl, [
                e("div", wl, [
                  w[25] || (w[25] = e("div", { class: "font-bold text-[#00796B] mb-2 uppercase text-[11px] md:text-xs tracking-wider" }, "Professor's Question", -1)),
                  e("p", yl, A(k.value.professorPrompt), 1)
                ]),
                (u(!0), x(J, null, ae(k.value.studentResponses, (q, Q) => (u(), x("div", {
                  key: Q,
                  class: "bg-white p-4 md:p-5 border border-gray-200 rounded-lg shadow-sm"
                }, [
                  e("div", kl, A(q.studentName), 1),
                  e("p", _l, '"' + A(q.content) + '"', 1)
                ]))), 128))
              ]),
              e("div", $l, [
                e("div", Cl, [
                  w[26] || (w[26] = e("div", { class: "font-bold text-gray-600" }, "Response Area", -1)),
                  e("div", null, "Words: " + A(ne.value), 1)
                ]),
                U(e("textarea", {
                  "onUpdate:modelValue": w[8] || (w[8] = (q) => k.value.userAnswerText = q),
                  onInput: w[9] || (w[9] = (q) => V(k.value)),
                  class: "w-full flex-grow resize-none border border-t-0 border-gray-300 p-4 outline-none text-[14px] md:text-[15px] rounded-b-lg focus:ring-1 focus:ring-[#00796B]",
                  placeholder: "Contributing to the discussion..."
                }, null, 544), [
                  [O, k.value.userAnswerText]
                ])
              ])
            ])) : H("", !0)
          ])
        ], 64)) : H("", !0)
      ])
    ]));
  }
}), Sl = /* @__PURE__ */ Ue(Tl, [["__scopeId", "data-v-17105c25"]]), Al = { class: "min-h-screen bg-[#525355] flex justify-center font-sans antialiased p-0 md:p-4" }, El = { class: "w-full max-w-[1200px] min-h-screen md:min-h-[700px] md:h-[90vh] flex flex-col shadow-lg overflow-hidden md:rounded-lg relative bg-white" }, Il = { class: "bg-[#00796B] h-[60px] flex justify-between items-center px-4 md:px-6 gap-2 md:gap-3 shrink-0" }, Rl = { class: "text-white font-medium flex items-center gap-2 text-[14px] md:text-[15px] w-20 md:w-32" }, Bl = { key: 0 }, Nl = { class: "flex items-center gap-2 md:gap-3" }, Ml = { class: "relative flex items-center" }, Ul = {
  key: 0,
  class: "absolute top-[120%] right-0 bg-white rounded-xl shadow-xl border border-gray-300 p-5 w-64 md:w-72 z-50 flex flex-col"
}, Ll = { class: "flex items-end justify-between h-10 gap-[2px] mb-3 mt-2 px-1" }, jl = ["disabled"], Vl = ["disabled"], Ol = { class: "hidden xs:inline" }, Pl = { class: "xs:hidden" }, Dl = {
  key: 0,
  class: "flex-grow flex flex-col items-center justify-center text-gray-500"
}, zl = { class: "animate-pulse flex flex-col items-center" }, ql = {
  key: 0,
  class: "text-sm mt-2 text-red-500"
}, Fl = { class: "border-b border-gray-300 px-4 md:px-6 py-2 md:py-2.5 text-[12px] md:text-[14px] text-[#333333] flex items-center gap-2 shrink-0 bg-gray-50 overflow-x-auto whitespace-nowrap" }, Gl = { class: "flex-grow flex flex-col relative bg-white overflow-y-auto" }, Ql = {
  key: 0,
  class: "absolute inset-0 z-40 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center"
}, Hl = {
  key: 1,
  class: "h-full flex flex-col p-6 md:p-16 items-center"
}, Wl = { class: "max-w-4xl w-full" }, Jl = { class: "text-[15px] md:text-[17px] text-[#333] leading-relaxed w-full" }, Yl = { class: "mb-4 md:mb-6" }, Kl = {
  key: 2,
  class: "h-full flex flex-col items-center justify-center p-6 md:p-12 bg-white text-center"
}, Zl = { class: "max-w-3xl" }, Xl = { class: "text-xl md:text-[28px] font-medium text-black mb-6" }, ea = { class: "text-left bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-lg shadow-sm" }, ta = { class: "text-[16px] md:text-[18px] text-[#333] mb-4 md:mb-6 italic" }, sa = { class: "text-[14px] md:text-[16px] text-[#555] whitespace-pre-line leading-relaxed" }, na = {
  key: 3,
  class: "h-full flex flex-col items-center justify-center p-6 md:p-12"
}, oa = { class: "text-xl md:text-[24px] font-medium text-[#00796B] mb-8 animate-pulse text-center" }, la = ["src"], aa = {
  key: 4,
  class: "h-full flex flex-col p-6 md:p-10 bg-white"
}, ra = {
  key: 0,
  class: "bg-blue-50 border border-blue-200 rounded-lg p-6 md:p-8 mb-6 md:mb-8 shadow-sm"
}, ia = { class: "text-[18px] md:text-[22px] text-[#333] font-medium leading-relaxed" }, da = {
  key: 1,
  class: "bg-gray-50 border border-gray-200 rounded-lg p-5 md:p-6 mb-6 md:mb-8 text-center shadow-sm"
}, ua = { class: "flex-grow flex flex-col items-center justify-center gap-6" }, ca = { class: "flex flex-col items-center" }, pa = { class: "text-[64px] md:text-[84px] font-bold text-black leading-none" }, ma = { class: "flex items-end justify-center gap-1 md:gap-1.5 h-10 md:h-12 mt-4 md:mt-6" }, fa = {
  key: 2,
  class: "flex-grow flex items-center justify-center text-gray-500"
}, xa = /* @__PURE__ */ pe({
  __name: "SpeakingSection",
  setup(t) {
    const n = Se(), o = we(), a = n.params.testId, r = le("testData"), i = le("isGlobalLoading");
    le("updateUserInput");
    const b = le("syncAllData"), C = le("state"), c = le("saveToLocalStorage"), _ = F(null), g = F([]), s = F(0), l = F("section_intro"), p = F(0), m = F(0), d = F(!1), v = F(!1), L = F(60), E = F(!1), j = F(""), k = F(!1), W = F(null), ne = F(!1);
    let G = null;
    const M = typeof window < "u" ? window.speechSynthesis : null, h = re(() => i?.value || !_.value), V = re(() => g.value[s.value] || null), X = F(null), $ = F([]), y = async () => {
      try {
        const K = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        X.value = new MediaRecorder(K), $.value = [], X.value.ondataavailable = (N) => {
          N.data.size > 0 && $.value.push(N.data);
        };
        const R = V.value.originalTaskIdx, te = V.value.originalQIdx, f = V.value.audioText, B = V.value.type, T = V.value.responseTime;
        X.value.onstop = async () => {
          ne.value = !0;
          const N = new Blob($.value, { type: "audio/webm" });
          await S(N, R, te, f, B), ne.value = !1;
        }, X.value.start(), m.value = T, G && clearInterval(G), G = setInterval(() => {
          m.value--, m.value <= 0 && (clearInterval(G), I());
        }, 1e3);
      } catch (K) {
        console.error("Microphone access denied:", K), j.value = "Microphone access denied. Please allow it to record your response.";
      }
    }, I = () => {
      X.value && X.value.state === "recording" && (X.value.stop(), X.value.stream.getTracks().forEach((K) => K.stop())), G && clearInterval(G);
    }, S = async (K, R, te, f, B) => {
      k.value = !0;
      try {
        const T = new FileReader();
        T.readAsDataURL(K), T.onloadend = async () => {
          const N = T.result.split(",")[1], Z = await (await fetch("/client/api/i/skillee/toefl_practice?typ=eval_speaking_audio", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNmMmJkYTVmLTZiYWMtNGY0Ny05ZmRmLWZkMzMxMGM2OTI5NSIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiIzZjJiZGE1Zi02YmFjLTRmNDctOWZkZi1mZDMzMTBjNjkyOTUiLCJpYXQiOjE3NzQ5NzQyMDh9.YQ6qIxJpea2zzycRgAOZsheimYgK65_f51WSaTOBPg41bWXIruQWtWCXwv8nWoBBro_iKOvk201PMTIDKJ1NfB3qX579P-ODSMCvgrnZgPprhP4WEOyriJAvtsJNOHtcPd-SH1XHFtlVmFOzfsabTkOVQzXPxwFWSitiMhRIYWw"
            },
            body: JSON.stringify({ audio: N, task_type: B, question_text: f })
          })).json();
          if (Z.success && Z.eval) {
            W.value = Z.eval;
            const se = g.value.find((ce) => ce.originalTaskIdx === R && ce.originalQIdx === te);
            if (se && (se.user_result = Z.eval, Z.eval.audio_url && (se.user_input = { data: Z.eval.audio_url })), r.value) {
              const ce = r.value.find((Ie) => Ie.type.toLowerCase() === "speaking");
              ce?.tasks?.[R]?.questions?.[te] && (ce.tasks[R].questions[te].user_result = Z.eval, Z.eval.audio_url && (ce.tasks[R].questions[te].user_input = { data: Z.eval.audio_url }));
            }
            setTimeout(() => {
              ue();
            }, 1500);
          } else
            ue();
        };
      } catch (T) {
        console.error("Evaluation error:", T), ue();
      } finally {
        k.value = !1;
      }
    }, z = (K) => {
      const R = [];
      let te = 1;
      K.forEach((f, B) => {
        const T = f.prompts ? f.prompts.length : f.questions ? f.questions.length : 0;
        for ((!f.questions || !Array.isArray(f.questions)) && (f.questions = []); f.questions.length < T; ) f.questions.push({ user_input: { data: "" }, user_result: { data: "" } });
        f.prompts && f.prompts.length > 0 ? f.prompts.forEach((N, Y) => {
          const de = f.questions[Y] || {};
          R.push({
            type: f.type || "listen_and_repeat",
            taskNumber: f.taskNumber,
            title: f.title,
            context: f.context,
            instructions: f.instructions,
            audioText: de.question || de.text || N,
            responseTime: f.responseTime || 15,
            globalIndex: te++,
            isFirstInGroup: Y === 0,
            originalTaskIdx: B,
            originalQIdx: Y,
            user_input: de.user_input?.data || "",
            user_result: de.user_result || { data: "" },
            imageUrl: de.imageUrl || f.imageUrl || null
          });
        }) : f.questions && f.questions.length > 0 && f.questions.forEach((N, Y) => {
          const de = typeof N == "object" ? N.question || N.text : N;
          R.push({
            type: f.type || "interview",
            taskNumber: f.taskNumber,
            title: f.title,
            context: f.context,
            instructions: f.instructions,
            audioText: de,
            responseTime: f.responseTime || (f.type === "listen_and_repeat" ? 15 : 60),
            globalIndex: te++,
            isFirstInGroup: Y === 0,
            originalTaskIdx: B,
            originalQIdx: Y,
            user_input: N.user_input?.data || "",
            user_result: N.user_result || { data: "" },
            imageUrl: N.imageUrl || f.imageUrl || null
          });
        });
      }), p.value = R.length, g.value = [{ type: "section_intro" }, ...R], C.value.section === "speaking" ? s.value = (C.value.task || 1) - 1 : (C.value.section = "speaking", C.value.module = 1, C.value.task = 1);
    };
    be(s, (K) => {
      C.value.task = K + 1, c();
    }), be(() => r?.value, (K) => {
      if (K && K.length > 0) {
        const R = K.find((te) => te.type.toLowerCase() === "speaking");
        R && (!_.value || g.value.length === 0 ? (_.value = R, z(R.tasks || [])) : R.tasks?.forEach((te, f) => {
          te.questions?.forEach((B, T) => {
            const N = g.value.find((Y) => Y.originalTaskIdx === f && Y.originalQIdx === T);
            N && B.user_result && (N.user_result = B.user_result);
          });
        }));
      }
    }, { immediate: !0 });
    const ee = (K, R) => {
      if (!M) return R();
      M.cancel();
      const te = new SpeechSynthesisUtterance(K || "");
      te.volume = L.value / 100, te.onstart = () => E.value = !0, te.onend = () => {
        E.value = !1, R();
      }, M.speak(te);
    }, oe = () => {
      l.value === "section_intro" ? (s.value = 1, D()) : ue();
    }, D = () => {
      l.value = "directions", setTimeout(() => {
        d.value = !0, w();
      }, 2500);
    }, w = () => {
      V.value && (l.value = V.value.type === "interview" ? "interview_asking" : "listening", ee(V.value.audioText, () => {
        l.value = "recording", y();
      }));
    }, q = () => {
      l.value === "recording" && I();
    }, Q = () => {
      M && M.cancel(), G && clearInterval(G), l.value === "recording" && I(), ue();
    }, ue = async () => {
      if (s.value < g.value.length - 1)
        s.value++, C.value.task = s.value + 1, c(), V.value.isFirstInGroup ? D() : w();
      else {
        if (ne.value) {
          for (k.value = !0; ne.value; )
            await new Promise((K) => setTimeout(K, 500));
          k.value = !1;
        }
        await b("speaking", !0), o.push({ name: "outcome", params: { testId: a }, query: { finished: "speaking" } });
      }
    };
    return Ve(() => {
      G && clearInterval(G), M && M.cancel(), X.value?.state === "recording" && X.value.stream.getTracks().forEach((K) => K.stop());
    }), (K, R) => (u(), x("div", Al, [
      e("div", El, [
        e("header", Il, [
          e("div", Rl, [
            l.value === "recording" ? (u(), x("span", Bl, A(m.value) + "s left", 1)) : H("", !0)
          ]),
          e("div", Nl, [
            e("div", Ml, [
              e("button", {
                onClick: R[0] || (R[0] = (te) => v.value = !v.value),
                class: "bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded-full px-3 md:px-5 py-1.5 text-[14px] md:text-[15px] font-medium cursor-pointer flex items-center gap-2 transition-colors"
              }, [...R[3] || (R[3] = [
                e("span", { class: "hidden xs:inline" }, "Volume", -1),
                e("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-4 w-4",
                  viewBox: "0 0 20 20",
                  fill: "currentColor"
                }, [
                  e("path", {
                    "fill-rule": "evenodd",
                    d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
                    "clip-rule": "evenodd"
                  })
                ], -1)
              ])]),
              v.value ? (u(), x("div", Ul, [
                e("button", {
                  onClick: R[1] || (R[1] = (te) => v.value = !1),
                  class: "absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-sm font-bold"
                }, "✕"),
                e("div", Ll, [
                  (u(), x(J, null, ae(20, (te) => e("div", {
                    key: te,
                    class: ye(["w-[6px] rounded-full transition-colors duration-150", te * 5 <= L.value ? "bg-[#00796B]" : "bg-[#00796B]/20"]),
                    style: Te({ height: `${20 + te * 4}%` })
                  }, null, 6)), 64))
                ]),
                U(e("input", {
                  type: "range",
                  "onUpdate:modelValue": R[2] || (R[2] = (te) => L.value = te),
                  min: "0",
                  max: "100",
                  class: "w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer custom-slider"
                }, null, 512), [
                  [O, L.value]
                ])
              ])) : H("", !0)
            ]),
            e("button", {
              onClick: Q,
              disabled: h.value,
              class: "bg-[#EF5350] text-white border-none rounded-full px-3 md:px-5 py-1.5 text-[13px] md:text-[14px] font-bold flex items-center gap-1 hover:bg-red-600 transition-colors shadow-sm"
            }, [...R[4] || (R[4] = [
              P(" SKIP ", -1),
              e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-4 w-4",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "3"
              }, [
                e("path", { d: "M13 5l7 7-7 7M5 5l7 7-7 7" })
              ], -1)
            ])], 8, jl),
            e("button", {
              onClick: oe,
              disabled: E.value || h.value || l.value === "recording" || k.value,
              class: "bg-white text-[#00796B] border-none rounded-full px-4 md:px-6 py-1.5 text-[14px] md:text-[15px] font-medium flex items-center gap-1 hover:bg-gray-100 transition-colors disabled:opacity-50"
            }, [
              e("span", Ol, A(l.value === "section_intro" ? "Start Question" : "Next"), 1),
              e("span", Pl, A(l.value === "section_intro" ? "Start" : "Next"), 1),
              R[5] || (R[5] = e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-4 w-4",
                viewBox: "0 0 20 20",
                fill: "currentColor"
              }, [
                e("path", {
                  "fill-rule": "evenodd",
                  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                  "clip-rule": "evenodd"
                })
              ], -1))
            ], 8, Vl)
          ])
        ]),
        h.value ? (u(), x("div", Dl, [
          e("div", zl, [
            R[6] || (R[6] = e("div", { class: "w-10 h-10 border-4 border-[#00796B] border-t-transparent rounded-full animate-spin mb-4" }, null, -1)),
            R[7] || (R[7] = e("div", null, "Loading Speaking Section...", -1)),
            j.value ? (u(), x("div", ql, A(j.value), 1)) : H("", !0)
          ])
        ])) : g.value.length > 0 && V.value ? (u(), x(J, { key: 1 }, [
          e("div", Fl, [
            R[10] || (R[10] = e("span", null, "Speaking", -1)),
            V.value.type !== "section_intro" ? (u(), x(J, { key: 0 }, [
              R[8] || (R[8] = e("span", { class: "text-gray-400" }, "|", -1)),
              e("span", null, "Task " + A(V.value.taskNumber), 1),
              R[9] || (R[9] = e("span", { class: "text-gray-400" }, "|", -1)),
              e("span", null, "Part " + A(V.value.globalIndex) + " of " + A(p.value), 1)
            ], 64)) : H("", !0)
          ]),
          e("main", Gl, [
            k.value ? (u(), x("div", Ql, [...R[11] || (R[11] = [
              Ce('<div class="relative w-24 h-24 mb-8" data-v-0ff95d92><div class="absolute inset-0 border-4 border-[#00796B]/20 rounded-full" data-v-0ff95d92></div><div class="absolute inset-0 border-4 border-[#00796B] border-t-transparent rounded-full animate-spin" data-v-0ff95d92></div><div class="absolute inset-0 flex items-center justify-center" data-v-0ff95d92><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-[#00796B] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-0ff95d92><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" data-v-0ff95d92></path></svg></div></div><h3 class="text-2xl font-bold text-gray-800 mb-2" data-v-0ff95d92>Analyzing Your Response</h3><p class="text-gray-500 max-w-md" data-v-0ff95d92>Our AI is evaluating your response. We will move to the next question shortly...</p>', 3)
            ])])) : H("", !0),
            V.value.type === "section_intro" ? (u(), x("div", Hl, [
              e("div", Wl, [
                R[16] || (R[16] = e("h2", { class: "text-2xl md:text-[32px] font-medium text-black mb-6 md:mb-10 border-b-2 border-[#00796B] pb-2" }, "Speaking Section Directions", -1)),
                e("div", Jl, [
                  e("p", Yl, [
                    R[12] || (R[12] = P("This section measures your ability to speak in English. You will complete ", -1)),
                    e("strong", null, A(p.value), 1),
                    R[13] || (R[13] = P(" speaking tasks.", -1))
                  ]),
                  R[14] || (R[14] = e("div", { class: "bg-blue-50 border border-blue-200 p-4 rounded-lg text-[14px] md:text-[15px] mb-6 md:mb-8 flex items-start gap-3" }, [
                    e("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 text-blue-600 shrink-0 mt-0.5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      e("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      })
                    ]),
                    e("div", null, [
                      e("strong", null, "Microphone Required:"),
                      P(" Ensure your microphone is connected and working.")
                    ])
                  ], -1)),
                  R[15] || (R[15] = e("p", { class: "text-gray-600 italic text-center" }, [
                    P("Click "),
                    e("strong", null, "Start Question"),
                    P(" to proceed to the first task.")
                  ], -1))
                ])
              ])
            ])) : l.value === "directions" ? (u(), x("div", Kl, [
              e("div", Zl, [
                e("h2", Xl, A(V.value.title), 1),
                e("div", ea, [
                  R[17] || (R[17] = e("p", { class: "text-[16px] md:text-[18px] font-bold text-[#00796B] mb-2" }, "Context:", -1)),
                  e("p", ta, '"' + A(V.value.context || "Prepare to speak.") + '"', 1),
                  e("p", sa, A(V.value.instructions || "Follow the prompts."), 1)
                ]),
                R[18] || (R[18] = e("div", { class: "mt-8 text-[#00796B] font-medium animate-pulse" }, " Preparing task... ", -1))
              ])
            ])) : l.value === "listening" || l.value === "interview_asking" ? (u(), x("div", na, [
              e("div", oa, A(l.value === "listening" ? "Listen carefully..." : "The interviewer is asking..."), 1),
              e("div", {
                class: ye(["relative w-48 h-48 md:w-64 md:h-64 overflow-hidden border-4", [E.value ? "border-green-500 shadow-xl avatar-pulse" : "border-gray-300", V.value.type === "listen_and_repeat" ? "rounded-2xl shadow-lg" : "rounded-full"]])
              }, [
                e("img", {
                  src: V.value.imageUrl || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
                  alt: "Interviewer",
                  class: "w-full h-full object-cover"
                }, null, 8, la)
              ], 2)
            ])) : l.value === "recording" ? (u(), x("div", aa, [
              V.value.type === "interview" ? (u(), x("div", ra, [
                R[19] || (R[19] = e("h3", { class: "text-[16px] md:text-[18px] font-bold text-[#00796B] mb-2 md:mb-3" }, "Interview Question:", -1)),
                e("p", ia, A(V.value.audioText), 1)
              ])) : (u(), x("div", da, [...R[20] || (R[20] = [
                e("p", { class: "text-[18px] md:text-[20px] text-[#333] font-medium" }, "Repeat the sentence you just heard.", -1)
              ])])),
              e("div", ua, [
                e("div", ca, [
                  R[21] || (R[21] = e("div", { class: "flex items-center gap-2 text-red-600 font-semibold uppercase tracking-widest text-lg md:text-[22px] animate-pulse mb-2" }, [
                    e("div", { class: "w-3 h-3 md:w-4 md:h-4 bg-red-600 rounded-full" }),
                    P(" Recording ")
                  ], -1)),
                  e("div", pa, A(m.value), 1),
                  R[22] || (R[22] = e("div", { class: "text-[14px] md:text-[16px] text-gray-500 uppercase" }, "Seconds Remaining", -1)),
                  e("button", {
                    onClick: q,
                    class: "mt-6 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg text-sm font-medium transition-colors border border-gray-300 shadow-sm"
                  }, " End Recording ")
                ]),
                e("div", ma, [
                  (u(), x(J, null, ae(12, (te) => e("div", {
                    key: te,
                    class: "w-1.5 md:w-2 bg-[#00796B] rounded-t-sm audio-bar",
                    style: Te({ animationDelay: `${te * 0.1}s` })
                  }, null, 4)), 64))
                ])
              ])
            ])) : H("", !0)
          ])
        ], 64)) : (u(), x("div", fa, " No speaking tasks found. "))
      ])
    ]));
  }
}), ga = /* @__PURE__ */ Ue(xa, [["__scopeId", "data-v-0ff95d92"]]), va = { class: "min-h-screen bg-[#525355] flex justify-center font-sans p-0 md:p-4" }, ha = { class: "w-full max-w-[1200px] min-h-screen md:min-h-[700px] md:h-[90vh] flex flex-col shadow-lg overflow-hidden md:rounded-lg relative bg-white" }, ba = { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 gap-3 shrink-0" }, wa = ["disabled"], ya = ["disabled"], ka = {
  key: 0,
  class: "flex-grow flex flex-col items-center justify-center text-gray-500"
}, _a = { class: "animate-pulse flex flex-col items-center" }, $a = {
  key: 0,
  class: "text-sm mt-2 text-red-500"
}, Ca = {
  key: 1,
  class: "flex-grow flex flex-col pt-16 md:pt-24 px-6 md:px-16 text-[#333333]"
}, Ta = { class: "text-2xl md:text-[28px] font-light mb-4 md:mb-6" }, Sa = { class: "text-base md:text-[18px] leading-relaxed" }, Aa = { class: "border-b border-gray-300 px-4 md:px-6 py-2 md:py-2.5 text-[12px] md:text-[14px] text-[#333333] flex items-center gap-2 shrink-0 bg-gray-50 overflow-x-auto whitespace-nowrap" }, Ea = { class: "flex-grow px-6 py-8 md:px-10 md:py-10 flex flex-col items-center relative overflow-y-auto" }, Ia = {
  key: 0,
  class: "flex flex-col w-full max-w-4xl items-center mt-4"
}, Ra = { class: "text-xl md:text-[32px] font-normal text-black mb-8 md:mb-16 text-center leading-tight" }, Ba = { class: "flex justify-center items-end w-full h-[250px] md:h-[350px]" }, Na = ["src"], Ma = {
  key: 1,
  class: "flex flex-col md:flex-row w-full max-w-5xl gap-10 md:gap-16 items-center md:items-start justify-center mt-6 md:mt-12"
}, Ua = { class: "flex justify-center items-end gap-4 w-full md:w-[350px] shrink-0 h-[200px] md:h-[280px]" }, La = ["src"], ja = { class: "flex flex-col gap-5 md:gap-6 pt-0 md:pt-4 w-full md:w-auto max-w-lg" }, Va = { class: "text-lg md:text-[19px] font-bold text-black mb-2 leading-snug" }, Oa = { class: "flex flex-col gap-4 md:gap-5" }, Pa = { class: "relative flex items-center justify-center mt-1 shrink-0" }, Da = ["value"], za = { class: "text-[16px] md:text-[17px] text-[#333] group-hover:text-black leading-snug" }, qa = { class: "font-bold" }, Fa = /* @__PURE__ */ pe({
  __name: "listeningSection",
  setup(t) {
    const n = we(), a = Se().params.testId, r = le("testData"), i = le("isGlobalLoading"), b = le("updateUserInput"), C = le("syncAllData"), c = le("state"), _ = le("saveToLocalStorage"), g = F(null), s = F(0), l = F(0), p = F([]), m = F(0), d = F(!1), v = F("question"), L = F(!1), E = F(!1), j = F(60), k = F(""), W = typeof window < "u" ? window.speechSynthesis : null, ne = re(() => i?.value || !g.value), G = re(() => p.value[l.value]), M = (I, S) => {
      if (!W || !I) {
        S?.();
        return;
      }
      W.cancel();
      const z = new SpeechSynthesisUtterance(I);
      z.volume = j.value / 100, z.onstart = () => {
        L.value = !0;
      }, z.onend = () => {
        L.value = !1, S && S();
      }, W.speak(z);
    }, h = () => {
      const I = G.value;
      I && (I.isFirstInTask ? (v.value = "intro", M(I.audioText, () => {
        v.value = "question", setTimeout(() => M(I.questionText), 600);
      })) : (v.value = "question", M(I.audioText || I.questionText)));
    }, V = () => {
      const I = g.value.modules[s.value];
      if (!I) return;
      const S = [];
      let z = 0;
      I.tasks.forEach((ee, oe) => {
        const D = ee.transcript || ee.audioTranscript || "";
        ee.questions.forEach((w, q) => {
          z++, S.push({
            id: `mcq_${oe}_${q}`,
            isMCQ: !0,
            introTitle: ee.passageTitle || `Module ${s.value + 1}`,
            audioText: q === 0 ? D : null,
            questionText: w.question || "Select the best response.",
            options: (w.options || []).map((Q, ue) => ({ id: String.fromCharCode(65 + ue), text: Q })),
            globalQuestionNum: z,
            isFirstInTask: q === 0,
            selectedAnswer: w.user_input?.data || "",
            user_result: w.user_result || { data: "" },
            imageUrl: w.imageUrl || ee.imageUrl || null,
            originalTaskIdx: oe,
            originalQIdx: q,
            questionLabel: `Question ${z}`
          });
        });
      }), p.value = S, m.value = z, c.value.section === "listening" && (c.value.module || 1) - 1 === s.value ? l.value = (c.value.task || 1) - 1 : l.value = 0, h();
    }, X = (I) => {
      b && b("listening", s.value, I.originalTaskIdx, I.originalQIdx, I.selectedAnswer);
    }, $ = () => {
      if (W && W.cancel(), v.value === "intro") {
        v.value = "question", M(G.value.questionText);
        return;
      }
      l.value < p.value.length - 1 ? (l.value++, h()) : s.value < g.value.modules.length - 1 ? d.value = !0 : y();
    }, y = async () => {
      if (d.value) {
        d.value = !1, s.value++, V();
        return;
      }
      if (!(v.value === "intro" && L.value))
        if (v.value === "intro")
          W && W.cancel(), v.value = "question", M(G.value.questionText);
        else {
          if (!G.value.selectedAnswer) {
            E.value = !0;
            return;
          }
          if (W && W.cancel(), l.value < p.value.length - 1)
            l.value++, h();
          else if (s.value < g.value.modules.length - 1)
            d.value = !0;
          else
            try {
              i && (i.value = !0), await C("listening", !0);
            } catch (I) {
              console.error("Save failed", I);
            } finally {
              i && (i.value = !1), n.push(`/writing-section/${a}`);
            }
        }
    };
    return be(() => r?.value, (I) => {
      if (I && I.length > 0) {
        const S = I.find((z) => z.type.toLowerCase() === "listening");
        S ? g.value ? S.modules?.[s.value]?.tasks?.forEach((z, ee) => {
          z.questions?.forEach((oe, D) => {
            const w = p.value.find((q) => q.originalTaskIdx === ee && q.originalQIdx === D);
            w && oe.user_result && (w.user_result = oe.user_result);
          });
        }) : (g.value = S, c.value.section === "listening" ? s.value = (c.value.module || 1) - 1 : (c.value.section = "listening", c.value.module = 1, c.value.task = 1), V()) : (k.value = "Error: Database is missing the Listening section data.", console.error(k.value));
      }
    }, { immediate: !0 }), be([s, l], ([I, S]) => {
      c.value.module = I + 1, c.value.task = S + 1, _();
    }), Ve(() => W?.cancel()), (I, S) => (u(), x("div", va, [
      e("div", ha, [
        e("header", ba, [
          d.value ? H("", !0) : (u(), x("button", {
            key: 0,
            onClick: $,
            disabled: ne.value,
            class: "bg-transparent text-white border border-white/50 hover:border-white hover:bg-white/10 rounded-full px-5 md:px-6 py-1.5 text-[14px] md:text-[15px] font-medium cursor-pointer transition-colors disabled:opacity-50"
          }, A(v.value === "intro" ? "Skip Audio" : "Skip Question"), 9, wa)),
          e("button", {
            onClick: y,
            disabled: ne.value,
            class: "bg-white text-[#00796B] border-none rounded-full px-5 md:px-6 py-1.5 text-[14px] md:text-[15px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-colors disabled:opacity-50"
          }, [...S[2] || (S[2] = [
            P(" Next ", -1),
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-4 w-4",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", {
                "fill-rule": "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])], 8, ya)
        ]),
        ne.value ? (u(), x("div", ka, [
          e("div", _a, [
            S[3] || (S[3] = e("div", { class: "w-10 h-10 border-4 border-[#00796B] border-t-transparent rounded-full animate-spin mb-4" }, null, -1)),
            S[4] || (S[4] = e("div", null, "Loading Listening Section...", -1)),
            k.value ? (u(), x("div", $a, A(k.value), 1)) : H("", !0)
          ])
        ])) : d.value ? (u(), x("div", Ca, [
          e("h2", Ta, "End of Module " + A(s.value + 1), 1),
          S[9] || (S[9] = e("hr", { class: "w-full border-gray-300 mb-6 md:mb-8" }, null, -1)),
          e("p", Sa, [
            P(" You have completed Module " + A(s.value + 1) + ". ", 1),
            S[5] || (S[5] = e("br", null, null, -1)),
            S[6] || (S[6] = P(" Select ", -1)),
            S[7] || (S[7] = e("strong", { class: "font-bold" }, "Next", -1)),
            S[8] || (S[8] = P(" to continue. ", -1))
          ])
        ])) : p.value.length > 0 && G.value ? (u(), x(J, { key: 2 }, [
          e("div", Aa, [
            S[11] || (S[11] = e("span", null, "Listening", -1)),
            S[12] || (S[12] = e("span", { class: "text-gray-400" }, "|", -1)),
            e("span", null, "Module " + A(s.value + 1), 1),
            v.value === "question" ? (u(), x(J, { key: 0 }, [
              S[10] || (S[10] = e("span", { class: "text-gray-400" }, "|", -1)),
              e("span", null, "Question " + A(G.value.globalQuestionNum) + " of " + A(m.value), 1)
            ], 64)) : H("", !0)
          ]),
          e("main", Ea, [
            v.value === "intro" ? (u(), x("div", Ia, [
              e("h2", Ra, A(G.value.introTitle), 1),
              e("div", Ba, [
                e("img", {
                  src: G.value.imageUrl || "https://api.dicebear.com/9.x/open-peeps/svg?seed=Professor&backgroundColor=transparent",
                  class: "h-full w-auto drop-shadow-sm"
                }, null, 8, Na)
              ])
            ])) : (u(), x("div", Ma, [
              e("div", Ua, [
                e("img", {
                  src: G.value.imageUrl || "https://api.dicebear.com/9.x/open-peeps/svg?seed=Jessica&backgroundColor=transparent",
                  class: "h-full w-auto drop-shadow-sm"
                }, null, 8, La)
              ]),
              e("div", ja, [
                e("h3", Va, A(G.value.questionText), 1),
                e("div", Oa, [
                  (u(!0), x(J, null, ae(G.value.options, (z) => (u(), x("label", {
                    key: z.id,
                    class: "flex items-start gap-3 md:gap-4 cursor-pointer group"
                  }, [
                    e("div", Pa, [
                      U(e("input", {
                        type: "radio",
                        value: z.id,
                        "onUpdate:modelValue": S[0] || (S[0] = (ee) => G.value.selectedAnswer = ee),
                        onChange: S[1] || (S[1] = (ee) => X(G.value)),
                        class: "peer appearance-none w-[20px] h-[20px] md:w-[22px] md:h-[22px] border border-black rounded-full checked:border-black cursor-pointer"
                      }, null, 40, Da), [
                        [yt, G.value.selectedAnswer]
                      ]),
                      S[13] || (S[13] = e("div", { class: "absolute w-[10px] h-[10px] bg-black rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" }, null, -1))
                    ]),
                    e("span", za, [
                      e("span", qa, "(" + A(z.id) + ")", 1),
                      P(" " + A(z.text), 1)
                    ])
                  ]))), 128))
                ])
              ])
            ]))
          ])
        ], 64)) : H("", !0)
      ])
    ]));
  }
}), Ga = /* @__PURE__ */ pe({
  __name: "listeningpage",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (r, i) => (u(), _e(Fa, {
      _p: me(o),
      _pp: me(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), Qa = { class: "min-h-screen bg-gradient-to-br from-[#004D40] via-[#00796B] to-[#004D40] flex items-center justify-center p-4 md:p-6 overflow-hidden relative" }, Ha = { class: "bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/20 shadow-2xl max-w-lg w-full text-center relative z-10 transition-all duration-500 hover:shadow-teal-900/40" }, Wa = { class: "space-y-4" }, Ja = {
  __name: "mainPage",
  setup(t) {
    const n = we(), o = (a) => {
      n.push(`/test/copywrite/${a}`);
    };
    return (a, r) => (u(), x("div", Qa, [
      r[4] || (r[4] = e("div", { class: "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-3xl animate-pulse" }, null, -1)),
      r[5] || (r[5] = e("div", {
        class: "absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-3xl animate-pulse",
        style: { "animation-delay": "2s" }
      }, null, -1)),
      e("div", Ha, [
        r[3] || (r[3] = Ce('<div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl transform transition-transform hover:rotate-6"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 md:h-14 md:w-14 text-[#00796B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg></div><h1 class="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">TOEFL <span class="text-teal-300">Mastery</span></h1><p class="text-teal-50/80 mb-10 text-base md:text-xl leading-relaxed font-light">Elevate your English proficiency with high-fidelity practice simulations.</p>', 3)),
        e("div", Wa, [
          e("button", {
            onClick: r[0] || (r[0] = (i) => o("7d4e9be6-66c0-46cb-9911-76148974d9d0")),
            class: "w-full bg-white text-[#00796B] font-bold py-4 md:py-5 rounded-2xl shadow-xl hover:bg-teal-50 transition-all transform hover:scale-[1.03] active:scale-[0.97] text-lg flex items-center justify-center gap-2 group"
          }, [...r[1] || (r[1] = [
            P(" Start Practice Test ", -1),
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5 transition-transform group-hover:translate-x-1",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              e("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M13 7l5 5m0 0l-5 5m5-5H6"
              })
            ], -1)
          ])]),
          r[2] || (r[2] = e("p", { class: "text-teal-200/40 text-[10px] uppercase tracking-[0.2em] font-bold pt-4" }, "Simulation Version 2.0", -1))
        ])
      ])
    ]));
  }
}, Ya = /* @__PURE__ */ pe({
  __name: "MainPage",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (r, i) => (u(), _e(Ja, {
      _p: me(o),
      _pp: me(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), Ka = { class: "min-h-screen bg-[#f5f5f5] flex justify-center" }, Za = { class: "w-full max-w-[1400px] flex flex-col bg-white" }, Xa = { class: "bg-white flex-grow px-6 md:px-8 py-8" }, er = {
  key: 0,
  class: "flex items-center justify-center h-96"
}, tr = {
  key: 1,
  class: "flex flex-col items-center justify-center h-96 text-center"
}, sr = {
  key: 2,
  class: "grid grid-cols-1 lg:grid-cols-5 gap-6 items-start"
}, nr = { class: "lg:col-span-2 space-y-6" }, or = { class: "bg-[#00695C] rounded-2xl p-6 sm:p-10 text-white shadow-lg flex flex-col items-center relative overflow-hidden h-fit" }, lr = { class: "relative w-40 h-40 flex items-center justify-center mb-8 relative z-10" }, ar = {
  class: "w-full h-full absolute",
  viewBox: "0 0 200 200"
}, rr = ["stroke-dashoffset"], ir = { class: "text-center relative z-10" }, dr = { class: "text-[48px] font-bold leading-none mb-1" }, ur = { class: "w-full flex flex-col items-center gap-6 relative z-10" }, cr = { class: "text-[14px] font-bold uppercase tracking-widest text-white/90 border-b border-white/20 pb-2" }, pr = { class: "w-full flex flex-col gap-3" }, mr = { class: "w-full grid grid-cols-2 gap-4 mt-10 relative z-10 pt-6 border-t border-white/10" }, fr = { class: "text-center" }, xr = { class: "text-[20px] font-bold" }, gr = { class: "text-center border-l border-white/10" }, vr = { class: "text-[20px] font-bold" }, hr = { class: "lg:col-span-3 space-y-4" }, br = ["onClick"], wr = { class: "relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0" }, yr = {
  class: "w-full h-full",
  viewBox: "0 0 120 120",
  xmlns: "http://www.w3.org/2000/svg"
}, kr = ["stroke", "stroke-dashoffset"], _r = { class: "absolute inset-0 flex flex-col items-center justify-center text-center" }, $r = { class: "text-[18px] font-normal text-[#333]" }, Cr = { class: "w-full flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3" }, Tr = { class: "col-span-2 sm:col-span-1 mb-2 sm:mb-0" }, Sr = { class: "flex items-center gap-2" }, Ar = { class: "text-[14px] sm:text-[16px] font-semibold text-[#333] capitalize" }, Er = {
  key: 0,
  class: "bg-teal-100 text-teal-700 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase"
}, Ir = { class: "bg-[#f9f9f9] border border-[#e0e0e0] rounded-lg p-2 text-center" }, Rr = { class: "text-[16px] font-bold text-[#333]" }, Br = { class: "bg-[#f9f9f9] border border-[#e0e0e0] rounded-lg p-2 text-center" }, Nr = { class: "text-[16px] font-bold text-[#00796B]" }, Mr = { class: "bg-[#f9f9f9] border border-[#e0e0e0] rounded-lg p-2 text-center" }, Ur = {
  key: 0,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
}, Lr = { class: "flex justify-between items-center p-8 border-b border-[#e0e0e0]" }, jr = { class: "text-[24px] font-normal text-[#333] capitalize" }, Vr = { class: "p-8 space-y-8" }, Or = { class: "px-8 pt-4 pb-2" }, Pr = { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, Dr = { class: "bg-[#f9f9f9] border border-[#e0e0e0] rounded-xl p-6 text-center shadow-sm" }, zr = { class: "text-[32px] sm:text-[36px] font-bold text-[#333]" }, qr = { class: "bg-[#f9f9f9] border border-[#e0e0e0] rounded-xl p-6 text-center shadow-sm" }, Fr = { class: "text-[32px] sm:text-[36px] font-bold text-[#00796B]" }, Gr = { class: "bg-[#f9f9f9] border border-[#e0e0e0] rounded-xl p-6 text-center shadow-sm" }, Qr = { class: "flex flex-col sm:flex-row gap-3 pt-8 border-t border-[#e0e0e0]" }, Hr = /* @__PURE__ */ pe({
  __name: "OutcomeSection",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = le("overallScore"), o = le("isGlobalLoading"), a = le("testData"), r = le("testMetadata"), i = le("submitFinalTest"), b = we(), C = Se(), c = re(() => r?.value?.title?.startsWith("Result:")), _ = async () => {
      confirm("This will create a permanent result record and clear your current practice progress. Continue?") && await i();
    }, g = re(() => o?.value || !1), s = re(() => {
      const M = ["reading", "listening", "writing", "speaking"], h = {};
      return M.forEach((V) => {
        if (n.value && n.value[V] && n.value[V].old_toefl > 0)
          h[V] = n.value[V];
        else {
          const $ = a.value?.find((y) => y.type.toLowerCase() === V);
          if ($) {
            let y = 0;
            ($.modules ? $.modules.flatMap((ee) => ee.tasks) : $.tasks || []).forEach((ee) => {
              const oe = ee.questions || [];
              if (oe.length > 0)
                oe.forEach((D) => {
                  const w = D.user_result;
                  if (w?.score) y += Number(w.score);
                  else if (w?.overall_score) y += Number(w.overall_score);
                  else if (w?.analysis) {
                    const q = Object.values(w.analysis);
                    let Q = 0, ue = 0;
                    q.forEach((K) => {
                      const R = typeof K == "object" ? K.score || 0 : Number(K) || 0;
                      Q += Number(R), ue++;
                    }), ue > 0 ? y += Q / ue : (w.status === "Correct" || w.data === 1) && (y += 1);
                  } else (w?.status === "Correct" || w?.data === 1) && (y += 1);
                });
              else {
                const D = ee.user_result;
                if (D?.score) y += Number(D.score);
                else if (D?.overall_score) y += Number(D.overall_score);
                else if (D?.analysis) {
                  const w = Object.values(D.analysis);
                  let q = 0, Q = 0;
                  w.forEach((ue) => {
                    const K = typeof ue == "object" ? ue.score || 0 : Number(ue) || 0;
                    q += Number(K), Q++;
                  }), Q > 0 && (y += q / Q);
                }
              }
            });
            const z = (V === "speaking" || V === "writing") && y <= 6 ? y / 6 * 30 : y;
            h[V] = {
              old_toefl: Math.round(z),
              new_toefl: Number((z / 30 * 6).toFixed(1)),
              cefr: z >= 25 ? "C1" : z >= 20 ? "B2" : z >= 12 ? "B1" : "A1",
              status: y > 0 ? "Completed" : "Not Started"
            };
          } else
            h[V] = { old_toefl: 0, new_toefl: 0, cefr: "A1", status: "Not Started" };
        }
      }), h;
    }), l = F(null), p = (M) => M >= 95 ? "C1" : M >= 72 ? "B2" : M >= 42 ? "B1" : "A1", m = (M) => ({
      reading: "#2196F3",
      listening: "#9C27B0",
      speaking: "#f44336",
      writing: "#FF9800"
    })[M.toLowerCase()] || "#00796B", d = (M) => M.startsWith("C") ? "#10b981" : M.startsWith("B") ? "#3b82f6" : "#f59e0b", v = re(() => {
      let M = 0;
      return Object.values(s.value).forEach((h) => {
        M += h.old_toefl || 0;
      }), M;
    }), L = re(() => p(v.value)), E = () => {
      const M = v.value;
      return M >= 110 ? "Expert" : M >= 95 ? "Advanced" : M >= 80 ? "High Intermediate" : M >= 60 ? "Intermediate" : M >= 40 ? "Lower Intermediate" : "Beginner";
    }, j = (M) => {
      l.value = M;
    }, k = () => {
      l.value = null;
    }, W = (M) => {
      b.push({
        path: "/outcome/review",
        query: {
          section: M.toLowerCase(),
          testId: C.params.testId
          // Pass the current ID to the review page
        }
      });
    }, ne = re(() => {
      const M = C.query.finished;
      return M ? M.toLowerCase() : null;
    }), G = () => {
      b.push("/start");
    };
    return (M, h) => (u(), x("div", Ka, [
      e("div", Za, [
        e("header", { class: "bg-[#00796B] min-h-[70px] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 sm:py-0 shrink-0 gap-4" }, [
          h[4] || (h[4] = e("div", { class: "text-white font-medium text-[18px] sm:text-[20px] text-center sm:text-left" }, "TOEFL Performance Analysis", -1)),
          e("button", {
            onClick: G,
            class: "w-full sm:w-auto bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded px-6 py-2 text-[14px] font-medium cursor-pointer transition-colors flex items-center justify-center gap-2"
          }, [...h[3] || (h[3] = [
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" })
            ], -1),
            P(" Home ", -1)
          ])])
        ]),
        e("main", Xa, [
          g.value && !me(n) ? (u(), x("div", er, [...h[5] || (h[5] = [
            e("div", { class: "text-center" }, [
              e("div", { class: "w-16 h-16 border-4 border-[#e0e0e0] border-t-[#00796B] rounded-full animate-spin mx-auto mb-6" }),
              e("p", { class: "text-[16px] text-[#666]" }, "Analyzing your results...")
            ], -1)
          ])])) : !me(n) && !g.value ? (u(), x("div", tr, [
            h[6] || (h[6] = e("p", { class: "text-[18px] text-[#666] mb-6" }, "No results available yet", -1)),
            h[7] || (h[7] = e("p", { class: "text-[14px] text-[#888] mb-8 max-w-md" }, "Complete your practice test sections to see your comprehensive performance analysis.", -1)),
            e("button", {
              onClick: G,
              class: "bg-[#00796B] text-white px-8 py-3 rounded text-[14px] font-medium hover:bg-[#005a52] transition-colors"
            }, " Start Practice Test ")
          ])) : (u(), x("div", sr, [
            e("div", nr, [
              e("div", or, [
                h[15] || (h[15] = e("div", {
                  class: "absolute inset-0 opacity-10 pointer-events-none",
                  style: { "background-image": "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", "background-size": "24px 24px" }
                }, null, -1)),
                h[16] || (h[16] = e("div", { class: "text-[10px] font-bold uppercase tracking-[0.3em] mb-8 opacity-70 relative z-10" }, "Performance Summary", -1)),
                e("div", lr, [
                  (u(), x("svg", ar, [
                    h[8] || (h[8] = e("circle", {
                      cx: "100",
                      cy: "100",
                      r: "92",
                      fill: "none",
                      stroke: "rgba(255,255,255,0.1)",
                      "stroke-width": "4"
                    }, null, -1)),
                    e("circle", {
                      cx: "100",
                      cy: "100",
                      r: "92",
                      fill: "none",
                      stroke: "white",
                      "stroke-width": "4",
                      "stroke-dasharray": "578",
                      "stroke-dashoffset": 578 - 578 * ((me(n)?.total?.old_toefl || 0) / 120),
                      "stroke-linecap": "round",
                      class: "score-circle",
                      style: { "transform-origin": "100px 100px", transform: "rotate(-90deg)" }
                    }, null, 8, rr)
                  ])),
                  e("div", ir, [
                    e("div", dr, A(v.value), 1),
                    h[9] || (h[9] = e("div", { class: "text-[10px] font-medium opacity-50 tracking-[0.1em]" }, "TOTAL SCORE", -1))
                  ])
                ]),
                e("div", ur, [
                  e("div", cr, A(E()), 1),
                  e("div", pr, [
                    e("button", {
                      onClick: h[0] || (h[0] = (V) => W(ne.value || "reading")),
                      class: "w-full bg-white text-[#00695C] py-4 rounded-xl text-[14px] font-bold uppercase tracking-widest transition-colors hover:bg-teal-50 border-none cursor-pointer flex items-center justify-center gap-3"
                    }, [...h[10] || (h[10] = [
                      P(" Detailed Analysis ", -1),
                      e("svg", {
                        class: "w-4 h-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        e("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M14 5l7 7m0 0l-7 7m7-7H3"
                        })
                      ], -1)
                    ])]),
                    c.value ? H("", !0) : (u(), x("button", {
                      key: 0,
                      onClick: _,
                      class: "w-full bg-[#FF9800] text-white py-3 rounded-xl text-[12px] font-bold uppercase tracking-widest transition-all hover:bg-[#F57C00] border-none cursor-pointer flex items-center justify-center gap-3 shadow-lg active:scale-95"
                    }, [...h[11] || (h[11] = [
                      e("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        e("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                        })
                      ], -1),
                      P(" Finalize & Save Result ", -1)
                    ])]))
                  ])
                ]),
                e("div", mr, [
                  e("div", fr, [
                    h[13] || (h[13] = e("div", { class: "text-[9px] font-bold opacity-40 uppercase tracking-widest mb-1" }, "Scale Score", -1)),
                    e("div", xr, [
                      P(A(Math.round(v.value / 120 * 6)), 1),
                      h[12] || (h[12] = e("span", { class: "text-[12px] opacity-30" }, "/6", -1))
                    ])
                  ]),
                  e("div", gr, [
                    h[14] || (h[14] = e("div", { class: "text-[9px] font-bold opacity-40 uppercase tracking-widest mb-1" }, "CEFR Level", -1)),
                    e("div", vr, A(L.value), 1)
                  ])
                ])
              ])
            ]),
            e("div", hr, [
              (u(!0), x(J, null, ae(s.value, (V, X) => (u(), x("div", {
                key: X,
                class: ye(["bg-white border rounded-xl p-4 sm:p-5 cursor-pointer hover:shadow-md transition-all flex flex-col sm:flex-row items-center gap-4", ne.value === X ? "border-[#00796B] border-2 ring-4 ring-[#00796B]/10" : "border-[#e0e0e0]"]),
                onClick: ($) => j(X)
              }, [
                e("div", wr, [
                  (u(), x("svg", yr, [
                    h[17] || (h[17] = e("circle", {
                      cx: "60",
                      cy: "60",
                      r: "50",
                      fill: "none",
                      stroke: "#e0e0e0",
                      "stroke-width": "5"
                    }, null, -1)),
                    e("circle", {
                      cx: "60",
                      cy: "60",
                      r: "50",
                      fill: "none",
                      stroke: m(X),
                      "stroke-width": "5",
                      "stroke-dasharray": "314",
                      "stroke-dashoffset": 314 - 314 * (V.old_toefl / 30),
                      "stroke-linecap": "round",
                      class: "score-circle transition-all duration-[1500ms]",
                      style: { "transform-origin": "60px 60px", transform: "rotate(-90deg)" }
                    }, null, 8, kr)
                  ])),
                  e("div", _r, [
                    e("div", $r, A(V.old_toefl), 1),
                    h[18] || (h[18] = e("div", { class: "text-[8px] text-[#999]" }, "/30", -1))
                  ])
                ]),
                e("div", Cr, [
                  e("div", Tr, [
                    e("div", Sr, [
                      e("h3", Ar, A(X), 1),
                      ne.value === X ? (u(), x("span", Er, "New")) : H("", !0)
                    ]),
                    h[19] || (h[19] = e("p", { class: "text-[10px] text-[#999]" }, "Section Assessment", -1))
                  ]),
                  e("div", Ir, [
                    h[20] || (h[20] = e("div", { class: "text-[8px] text-[#999] font-medium uppercase mb-1" }, "Raw Score", -1)),
                    e("div", Rr, A(V.old_toefl), 1),
                    h[21] || (h[21] = e("div", { class: "text-[8px] text-[#ccc]" }, "/30", -1))
                  ]),
                  e("div", Br, [
                    h[22] || (h[22] = e("div", { class: "text-[8px] text-[#999] font-medium uppercase mb-1" }, "Scale Score", -1)),
                    e("div", Nr, A(Math.round(V.new_toefl || 0)), 1),
                    h[23] || (h[23] = e("div", { class: "text-[8px] text-[#ccc]" }, "/6", -1))
                  ]),
                  e("div", Mr, [
                    h[24] || (h[24] = e("div", { class: "text-[8px] text-[#999] font-medium uppercase mb-1" }, "CEFR Level", -1)),
                    e("div", {
                      class: "text-[16px] font-bold",
                      style: Te({ color: d(V.cefr) })
                    }, A(V.cefr), 5),
                    h[25] || (h[25] = e("div", { class: "text-[8px] text-[#ccc]" }, " ", -1))
                  ])
                ])
              ], 10, br))), 128))
            ])
          ]))
        ])
      ]),
      Oe(Pt, { name: "modal-fade" }, {
        default: Ot(() => [
          l.value ? (u(), x("div", Ur, [
            e("div", {
              class: "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
              onClick: h[2] || (h[2] = kt(() => {
              }, ["stop"]))
            }, [
              e("div", Lr, [
                e("div", null, [
                  e("h2", jr, A(l.value) + " Review", 1),
                  h[26] || (h[26] = e("p", { class: "text-[14px] text-[#666] mt-1" }, "Detailed performance analysis", -1))
                ]),
                e("button", {
                  onClick: k,
                  class: "text-[#999] hover:text-[#333] p-2"
                }, [...h[27] || (h[27] = [
                  e("svg", {
                    class: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    e("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ])])
              ]),
              e("div", Vr, [
                e("div", Or, [
                  h[33] || (h[33] = e("p", { class: "text-[12px] text-[#999] font-medium mb-6 uppercase tracking-wide text-center sm:text-left" }, "Section Performance", -1)),
                  e("div", Pr, [
                    e("div", Dr, [
                      h[29] || (h[29] = e("p", { class: "text-[12px] text-[#999] font-medium mb-3 uppercase" }, "Raw Score", -1)),
                      e("p", zr, [
                        P(A(s.value[l.value].old_toefl), 1),
                        h[28] || (h[28] = e("span", { class: "text-[18px] text-[#999]" }, "/30", -1))
                      ])
                    ]),
                    e("div", qr, [
                      h[31] || (h[31] = e("p", { class: "text-[12px] text-[#999] font-medium mb-3 uppercase" }, "Scale Score", -1)),
                      e("p", Fr, [
                        P(A(Math.round(s.value[l.value].new_toefl || 0)), 1),
                        h[30] || (h[30] = e("span", { class: "text-[18px] text-[#999]" }, "/6", -1))
                      ])
                    ]),
                    e("div", Gr, [
                      h[32] || (h[32] = e("p", { class: "text-[12px] text-[#999] font-medium mb-3 uppercase" }, "CEFR", -1)),
                      e("p", {
                        class: "text-[32px] sm:text-[36px] font-bold",
                        style: Te({ color: d(s.value[l.value].cefr) })
                      }, A(s.value[l.value].cefr), 5)
                    ])
                  ])
                ]),
                e("div", Qr, [
                  e("button", {
                    onClick: k,
                    class: "order-2 sm:order-1 flex-1 px-6 py-3 rounded-lg border border-[#e0e0e0] text-[#333] font-medium text-[14px] hover:bg-[#f9f9f9] transition-colors"
                  }, " Close "),
                  e("button", {
                    onClick: h[1] || (h[1] = (V) => W(l.value)),
                    class: "order-1 sm:order-2 flex-1 px-6 py-3 rounded-lg bg-[#00796B] text-white font-medium text-[14px] hover:bg-[#005a52] transition-colors"
                  }, " Full Review → ")
                ])
              ])
            ])
          ])) : H("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Wr = /* @__PURE__ */ Ue(Hr, [["__scopeId", "data-v-9f93f06f"]]), gt = /* @__PURE__ */ pe({
  __name: "outcome1",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (r, i) => (u(), _e(Wr, {
      _p: me(o),
      _pp: me(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), Jr = { class: "flex justify-between items-center mb-4" }, Yr = { class: "mb-4" }, Kr = ["value"], Zr = { class: "grid grid-cols-1 gap-4 mb-4" }, Xr = { class: "block text-xs font-bold text-slate-500 uppercase mb-1 flex justify-between items-center" }, ei = { class: "flex items-center gap-2" }, ti = ["id"], si = ["for"], ni = { class: "flex flex-col gap-2" }, oi = { key: 0 }, li = { key: 1 }, ai = { class: "block text-xs font-bold text-slate-500 uppercase mb-1 flex justify-between items-center" }, ri = { class: "flex items-center gap-2" }, ii = {
  for: "file-task-lar",
  class: "cursor-pointer text-teal-600 hover:text-teal-800 text-[10px] font-bold border border-teal-600 px-2 py-0.5 rounded"
}, di = { class: "flex flex-col gap-2" }, ui = { class: "grid grid-cols-2 gap-4" }, ci = { class: "block text-xs font-bold text-slate-500 uppercase mb-1 flex justify-between" }, pi = ["onUpdate:modelValue"], mi = ["onClick"], fi = { class: "block text-xs font-bold text-slate-500 uppercase mb-1 flex justify-between items-center" }, xi = { class: "flex items-center gap-2" }, gi = {
  for: "file-task-int",
  class: "cursor-pointer text-teal-600 hover:text-teal-800 text-[10px] font-bold border border-teal-600 px-2 py-0.5 rounded"
}, vi = { class: "flex flex-col gap-2" }, hi = { class: "grid grid-cols-2 gap-4" }, bi = { key: 3 }, wi = { class: "grid grid-cols-3 gap-4" }, yi = { class: "block text-xs font-bold text-slate-500 uppercase mb-1 flex justify-between" }, ki = ["onUpdate:modelValue"], _i = ["onClick"], $i = { class: "grid grid-cols-2 gap-4" }, Ci = { class: "block text-xs font-bold text-slate-500 uppercase mb-1 flex justify-between" }, Ti = { class: "flex justify-between items-center mb-2" }, Si = ["onUpdate:modelValue"], Ai = ["onClick"], Ei = ["onUpdate:modelValue"], Ii = { class: "mt-6 border-t border-slate-200 pt-4" }, Ri = { class: "space-y-4" }, Bi = ["onClick"], Ni = { class: "text-xs font-bold text-slate-400 block mb-2" }, Mi = { class: "grid grid-cols-4 gap-4 mb-3" }, Ui = { class: "col-span-4" }, Li = { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1 flex justify-between items-center" }, ji = { class: "flex items-center gap-2" }, Vi = ["onChange", "id"], Oi = ["for"], Pi = ["onUpdate:modelValue"], Di = { class: "col-span-1" }, zi = ["onUpdate:modelValue"], qi = { class: "col-span-3" }, Fi = ["onUpdate:modelValue"], Gi = { class: "mb-3" }, Qi = { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1 flex justify-between" }, Hi = ["onClick"], Wi = ["onUpdate:modelValue"], Ji = ["onClick"], Yi = ["onUpdate:modelValue"], Ki = { class: "mb-3" }, Zi = ["onUpdate:modelValue"], Xi = { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1 flex justify-between" }, ed = ["onClick"], td = { class: "flex flex-wrap gap-2" }, sd = { class: "text-[10px] text-teal-600 font-bold" }, nd = ["onUpdate:modelValue"], od = ["onClick"], ld = {
  key: 2,
  class: "grid grid-cols-4 gap-4"
}, ad = { class: "col-span-4" }, rd = { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1 flex justify-between items-center" }, id = { class: "flex items-center gap-2" }, dd = ["onChange", "id"], ud = ["for"], cd = ["onUpdate:modelValue"], pd = { class: "col-span-1" }, md = ["onUpdate:modelValue"], fd = { class: "col-span-3" }, xd = ["onUpdate:modelValue"], gd = { class: "mb-3" }, vd = ["onUpdate:modelValue"], hd = { class: "mb-3" }, bd = { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1 flex justify-between" }, wd = ["onClick"], yd = { class: "flex flex-wrap gap-2" }, kd = ["onUpdate:modelValue"], _d = ["onClick"], $d = ["onUpdate:modelValue"], Cd = {
  key: 4,
  class: "grid grid-cols-4 gap-4"
}, Td = { class: "col-span-4" }, Sd = { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1 flex justify-between items-center" }, Ad = { class: "flex items-center gap-2" }, Ed = ["onChange", "id"], Id = ["for"], Rd = ["onUpdate:modelValue"], Bd = { class: "col-span-4" }, Nd = ["onUpdate:modelValue"], Md = {
  key: 5,
  class: "text-[10px] text-slate-500 italic"
}, Ud = {
  key: 0,
  class: "text-center text-sm text-slate-400 py-4 border-2 border-dashed border-slate-200 rounded-lg"
}, vt = {
  __name: "TaskEditor",
  props: {
    task: { type: Object, required: !0 },
    sectionType: { type: String, required: !0 }
  },
  emits: ["remove"],
  setup(t, { emit: n }) {
    const o = F(!1), a = async (g, s) => {
      const l = g.target.files[0];
      if (!l) return;
      o.value = !0;
      const p = new FormData();
      p.append("file", l);
      try {
        const d = await (await fetch("https://fastapi.dryutil.1mn.io/client/api/i/ona/file_storage?typ=cloudinary&opr=upload_file", {
          method: "POST",
          headers: {
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
          },
          body: p
        })).json();
        let v = "";
        d.success && d.data && d.data.url ? v = d.data.url : d.url ? v = d.url : d.data && d.data.secure_url ? v = d.data.secure_url : d.secure_url && (v = d.secure_url), v ? s.imageUrl = v : (alert("Upload failed: " + (d.message || "Unknown response format")), console.log("Upload response:", d));
      } catch (m) {
        console.error("Upload error:", m), alert("Upload failed. Check console.");
      } finally {
        o.value = !1;
      }
    }, r = t, i = {
      reading: ["reading_mcq", "fill_in_the_blanks", "reading_fib"],
      listening: ["listening_responses", "listening_conversation", "listening_announcement", "listening_talk"],
      speaking: ["listen_and_repeat", "interview"],
      writing: ["build_sentences", "write_an_email", "academic_discussion"]
    }, b = re(() => i[r.sectionType] || []), C = () => {
      const g = r.task.type;
      r.task.type, ["reading_mcq", "fill_in_the_blanks", "reading_fib", "listening_responses", "listening_conversation", "listening_announcement", "listening_talk"].includes(g) && (Object.assign(r.task, { passageTitle: "", passageHTML: "" }), g.includes("listening") && (r.task.audioTranscript = "")), g === "listen_and_repeat" && Object.assign(r.task, { title: "", context: "", prompts: [], prepTime: 0, responseTime: 30, instructions: "" }), g === "interview" && Object.assign(r.task, { title: "", context: "", prepTime: 0, responseTime: 60, instructions: "" }), g === "build_sentences" && Object.assign(r.task, { instruction: "Move the words in the boxes to create grammatical sentences." }), g === "write_an_email" && Object.assign(r.task, { scenario: "", timeLimit: "7 minutes", instructions: [], emailMetadata: { to: "", subject: "" } }), g === "academic_discussion" && Object.assign(r.task, { topic: "", timeLimit: "10 minutes", requirements: "", professorPrompt: "", studentResponses: [] }), r.task.questions = [];
    }, c = (g) => {
      const s = {
        user_input: { data: "" },
        user_result: { data: 0 },
        creator_answer: { data: "" },
        imageUrl: ""
      };
      return ["reading_mcq", "listening_responses", "listening_conversation", "listening_announcement", "listening_talk"].includes(g) ? { ...s, questionNumber: 1, question: "", options: ["(A) ", "(B) ", "(C) ", "(D) "], answer: "" } : ["fill_in_the_blanks", "reading_fib"].includes(g) ? { ...s, question: "Fill in the missing letters in the paragraph.", answer: [] } : ["listen_and_repeat", "interview"].includes(g) ? { ...s, questionNumber: 1, question: "" } : g === "build_sentences" ? { ...s, prompt: "", answer: "", scrambledWords: [] } : s;
    }, _ = () => {
      r.task.questions.push(c(r.task.type));
    };
    return (g, s) => (u(), x("div", null, [
      e("div", Jr, [
        s[33] || (s[33] = e("h5", { class: "font-bold text-slate-700 uppercase tracking-wider text-xs" }, "Task Editor", -1)),
        e("button", {
          onClick: s[0] || (s[0] = (l) => g.$emit("remove")),
          class: "text-red-500 hover:text-red-700 text-xs font-bold uppercase"
        }, "Remove Task")
      ]),
      e("div", Yr, [
        s[34] || (s[34] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Task Type", -1)),
        U(e("select", {
          "onUpdate:modelValue": s[1] || (s[1] = (l) => t.task.type = l),
          onChange: C,
          class: "w-full md:w-1/2 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none bg-white font-semibold text-slate-700"
        }, [
          (u(!0), x(J, null, ae(b.value, (l) => (u(), x("option", {
            key: l,
            value: l
          }, A(l), 9, Kr))), 128))
        ], 544), [
          [_t, t.task.type]
        ])
      ]),
      e("div", Zr, [
        ["reading_mcq", "fill_in_the_blanks", "reading_fib", "listening_responses", "listening_conversation", "listening_announcement", "listening_talk"].includes(t.task.type) ? (u(), x(J, { key: 0 }, [
          e("div", null, [
            e("label", Xr, [
              s[35] || (s[35] = P(" Passage Title / Audio Name ", -1)),
              e("div", ei, [
                e("input", {
                  type: "file",
                  onChange: s[2] || (s[2] = (l) => a(l, t.task)),
                  class: "hidden",
                  id: "file-task-" + t.task.type,
                  accept: "image/*"
                }, null, 40, ti),
                e("label", {
                  for: "file-task-" + t.task.type,
                  class: "cursor-pointer text-teal-600 hover:text-teal-800 text-[10px] font-bold border border-teal-600 px-2 py-0.5 rounded"
                }, A(o.value ? "Uploading..." : "Upload Task Image"), 9, si)
              ])
            ]),
            e("div", ni, [
              U(e("input", {
                "onUpdate:modelValue": s[3] || (s[3] = (l) => t.task.passageTitle = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [O, t.task.passageTitle]
              ]),
              t.task.imageUrl ? U((u(), x("input", {
                key: 0,
                "onUpdate:modelValue": s[4] || (s[4] = (l) => t.task.imageUrl = l),
                type: "text",
                class: "w-full border border-slate-200 rounded-lg px-3 py-1 text-[10px] text-slate-500 bg-slate-50",
                placeholder: "Task Image URL"
              }, null, 512)), [
                [O, t.task.imageUrl]
              ]) : H("", !0)
            ])
          ]),
          t.task.type !== "listening_responses" ? (u(), x("div", oi, [
            s[36] || (s[36] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Passage HTML", -1)),
            U(e("textarea", {
              "onUpdate:modelValue": s[5] || (s[5] = (l) => t.task.passageHTML = l),
              rows: "3",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none font-mono"
            }, null, 512), [
              [O, t.task.passageHTML]
            ])
          ])) : H("", !0),
          t.task.type.includes("listening") && t.task.type !== "listening_responses" ? (u(), x("div", li, [
            s[37] || (s[37] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Audio Transcript", -1)),
            U(e("textarea", {
              "onUpdate:modelValue": s[6] || (s[6] = (l) => t.task.audioTranscript = l),
              rows: "3",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none font-mono"
            }, null, 512), [
              [O, t.task.audioTranscript]
            ])
          ])) : H("", !0)
        ], 64)) : H("", !0),
        t.task.type === "listen_and_repeat" ? (u(), x(J, { key: 1 }, [
          e("div", null, [
            e("label", ai, [
              s[38] || (s[38] = P(" Title ", -1)),
              e("div", ri, [
                e("input", {
                  type: "file",
                  onChange: s[7] || (s[7] = (l) => a(l, t.task)),
                  class: "hidden",
                  id: "file-task-lar",
                  accept: "image/*"
                }, null, 32),
                e("label", ii, A(o.value ? "Uploading..." : "Upload Task Image"), 1)
              ])
            ]),
            e("div", di, [
              U(e("input", {
                "onUpdate:modelValue": s[8] || (s[8] = (l) => t.task.title = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [O, t.task.title]
              ]),
              t.task.imageUrl ? U((u(), x("input", {
                key: 0,
                "onUpdate:modelValue": s[9] || (s[9] = (l) => t.task.imageUrl = l),
                type: "text",
                class: "w-full border border-slate-200 rounded-lg px-3 py-1 text-[10px] text-slate-500 bg-slate-50",
                placeholder: "Task Image URL"
              }, null, 512)), [
                [O, t.task.imageUrl]
              ]) : H("", !0)
            ])
          ]),
          e("div", null, [
            s[39] || (s[39] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Context", -1)),
            U(e("textarea", {
              "onUpdate:modelValue": s[10] || (s[10] = (l) => t.task.context = l),
              rows: "2",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            }, null, 512), [
              [O, t.task.context]
            ])
          ]),
          e("div", ui, [
            e("div", null, [
              s[40] || (s[40] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Prep Time (sec)", -1)),
              U(e("input", {
                "onUpdate:modelValue": s[11] || (s[11] = (l) => t.task.prepTime = l),
                type: "number",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [
                  O,
                  t.task.prepTime,
                  void 0,
                  { number: !0 }
                ]
              ])
            ]),
            e("div", null, [
              s[41] || (s[41] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Response Time (sec)", -1)),
              U(e("input", {
                "onUpdate:modelValue": s[12] || (s[12] = (l) => t.task.responseTime = l),
                type: "number",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [
                  O,
                  t.task.responseTime,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ]),
          e("div", null, [
            s[42] || (s[42] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Instructions", -1)),
            U(e("textarea", {
              "onUpdate:modelValue": s[13] || (s[13] = (l) => t.task.instructions = l),
              rows: "2",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            }, null, 512), [
              [O, t.task.instructions]
            ])
          ]),
          e("div", null, [
            e("label", ci, [
              s[43] || (s[43] = P(" Prompts (Sentences to repeat) ", -1)),
              e("button", {
                onClick: s[14] || (s[14] = (l) => t.task.prompts.push("")),
                class: "text-teal-600 hover:text-teal-800 text-xs font-bold"
              }, "+ Add")
            ]),
            (u(!0), x(J, null, ae(t.task.prompts, (l, p) => (u(), x("div", {
              key: p,
              class: "flex gap-2 mb-2"
            }, [
              U(e("input", {
                "onUpdate:modelValue": (m) => t.task.prompts[p] = m,
                type: "text",
                class: "flex-1 border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 8, pi), [
                [O, t.task.prompts[p]]
              ]),
              e("button", {
                onClick: (m) => t.task.prompts.splice(p, 1),
                class: "text-red-400 hover:text-red-600 text-lg font-bold"
              }, "×", 8, mi)
            ]))), 128))
          ])
        ], 64)) : H("", !0),
        t.task.type === "interview" ? (u(), x(J, { key: 2 }, [
          e("div", null, [
            e("label", fi, [
              s[44] || (s[44] = P(" Title ", -1)),
              e("div", xi, [
                e("input", {
                  type: "file",
                  onChange: s[15] || (s[15] = (l) => a(l, t.task)),
                  class: "hidden",
                  id: "file-task-int",
                  accept: "image/*"
                }, null, 32),
                e("label", gi, A(o.value ? "Uploading..." : "Upload Task Image"), 1)
              ])
            ]),
            e("div", vi, [
              U(e("input", {
                "onUpdate:modelValue": s[16] || (s[16] = (l) => t.task.title = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [O, t.task.title]
              ]),
              t.task.imageUrl ? U((u(), x("input", {
                key: 0,
                "onUpdate:modelValue": s[17] || (s[17] = (l) => t.task.imageUrl = l),
                type: "text",
                class: "w-full border border-slate-200 rounded-lg px-3 py-1 text-[10px] text-slate-500 bg-slate-50",
                placeholder: "Task Image URL"
              }, null, 512)), [
                [O, t.task.imageUrl]
              ]) : H("", !0)
            ])
          ]),
          e("div", null, [
            s[45] || (s[45] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Context", -1)),
            U(e("textarea", {
              "onUpdate:modelValue": s[18] || (s[18] = (l) => t.task.context = l),
              rows: "2",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            }, null, 512), [
              [O, t.task.context]
            ])
          ]),
          e("div", hi, [
            e("div", null, [
              s[46] || (s[46] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Prep Time (sec)", -1)),
              U(e("input", {
                "onUpdate:modelValue": s[19] || (s[19] = (l) => t.task.prepTime = l),
                type: "number",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [
                  O,
                  t.task.prepTime,
                  void 0,
                  { number: !0 }
                ]
              ])
            ]),
            e("div", null, [
              s[47] || (s[47] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Response Time (sec)", -1)),
              U(e("input", {
                "onUpdate:modelValue": s[20] || (s[20] = (l) => t.task.responseTime = l),
                type: "number",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [
                  O,
                  t.task.responseTime,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ]),
          e("div", null, [
            s[48] || (s[48] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Instructions", -1)),
            U(e("textarea", {
              "onUpdate:modelValue": s[21] || (s[21] = (l) => t.task.instructions = l),
              rows: "2",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            }, null, 512), [
              [O, t.task.instructions]
            ])
          ])
        ], 64)) : H("", !0),
        t.task.type === "build_sentences" ? (u(), x("div", bi, [
          s[49] || (s[49] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Instruction", -1)),
          U(e("input", {
            "onUpdate:modelValue": s[22] || (s[22] = (l) => t.task.instruction = l),
            type: "text",
            class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
          }, null, 512), [
            [O, t.task.instruction]
          ])
        ])) : H("", !0),
        t.task.type === "write_an_email" ? (u(), x(J, { key: 4 }, [
          e("div", null, [
            s[50] || (s[50] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Scenario", -1)),
            U(e("textarea", {
              "onUpdate:modelValue": s[23] || (s[23] = (l) => t.task.scenario = l),
              rows: "3",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            }, null, 512), [
              [O, t.task.scenario]
            ])
          ]),
          e("div", wi, [
            e("div", null, [
              s[51] || (s[51] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Time Limit", -1)),
              U(e("input", {
                "onUpdate:modelValue": s[24] || (s[24] = (l) => t.task.timeLimit = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                placeholder: "e.g. 7 minutes"
              }, null, 512), [
                [O, t.task.timeLimit]
              ])
            ]),
            e("div", null, [
              s[52] || (s[52] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Email To", -1)),
              t.task.emailMetadata ? U((u(), x("input", {
                key: 0,
                "onUpdate:modelValue": s[25] || (s[25] = (l) => t.task.emailMetadata.to = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512)), [
                [O, t.task.emailMetadata.to]
              ]) : H("", !0)
            ]),
            e("div", null, [
              s[53] || (s[53] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Email Subject", -1)),
              t.task.emailMetadata ? U((u(), x("input", {
                key: 0,
                "onUpdate:modelValue": s[26] || (s[26] = (l) => t.task.emailMetadata.subject = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512)), [
                [O, t.task.emailMetadata.subject]
              ]) : H("", !0)
            ])
          ]),
          e("div", null, [
            e("label", yi, [
              s[54] || (s[54] = P(" Instructions (Bullet points) ", -1)),
              e("button", {
                onClick: s[27] || (s[27] = (l) => t.task.instructions.push("")),
                class: "text-teal-600 hover:text-teal-800 text-xs font-bold"
              }, "+ Add")
            ]),
            (u(!0), x(J, null, ae(t.task.instructions, (l, p) => (u(), x("div", {
              key: p,
              class: "flex gap-2 mb-2"
            }, [
              U(e("input", {
                "onUpdate:modelValue": (m) => t.task.instructions[p] = m,
                type: "text",
                class: "flex-1 border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 8, ki), [
                [O, t.task.instructions[p]]
              ]),
              e("button", {
                onClick: (m) => t.task.instructions.splice(p, 1),
                class: "text-red-400 hover:text-red-600 text-lg font-bold"
              }, "×", 8, _i)
            ]))), 128))
          ])
        ], 64)) : H("", !0),
        t.task.type === "academic_discussion" ? (u(), x(J, { key: 5 }, [
          e("div", $i, [
            e("div", null, [
              s[55] || (s[55] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Topic", -1)),
              U(e("input", {
                "onUpdate:modelValue": s[28] || (s[28] = (l) => t.task.topic = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [O, t.task.topic]
              ])
            ]),
            e("div", null, [
              s[56] || (s[56] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Time Limit", -1)),
              U(e("input", {
                "onUpdate:modelValue": s[29] || (s[29] = (l) => t.task.timeLimit = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                placeholder: "e.g. 10 minutes"
              }, null, 512), [
                [O, t.task.timeLimit]
              ])
            ])
          ]),
          e("div", null, [
            s[57] || (s[57] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Requirements", -1)),
            U(e("textarea", {
              "onUpdate:modelValue": s[30] || (s[30] = (l) => t.task.requirements = l),
              rows: "2",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            }, null, 512), [
              [O, t.task.requirements]
            ])
          ]),
          e("div", null, [
            s[58] || (s[58] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Professor Prompt", -1)),
            U(e("textarea", {
              "onUpdate:modelValue": s[31] || (s[31] = (l) => t.task.professorPrompt = l),
              rows: "3",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            }, null, 512), [
              [O, t.task.professorPrompt]
            ])
          ]),
          e("div", null, [
            e("label", Ci, [
              s[59] || (s[59] = P(" Student Responses ", -1)),
              e("button", {
                onClick: s[32] || (s[32] = (l) => t.task.studentResponses.push({ studentName: "", content: "" })),
                class: "text-teal-600 hover:text-teal-800 text-xs font-bold"
              }, "+ Add Student")
            ]),
            (u(!0), x(J, null, ae(t.task.studentResponses, (l, p) => (u(), x("div", {
              key: p,
              class: "bg-white p-3 rounded border border-slate-200 mb-2"
            }, [
              e("div", Ti, [
                U(e("input", {
                  "onUpdate:modelValue": (m) => l.studentName = m,
                  placeholder: "Student Name",
                  class: "border border-slate-300 rounded px-2 py-1 text-sm font-bold w-1/3"
                }, null, 8, Si), [
                  [O, l.studentName]
                ]),
                e("button", {
                  onClick: (m) => t.task.studentResponses.splice(p, 1),
                  class: "text-red-400 hover:text-red-600 text-xs font-bold"
                }, "Remove", 8, Ai)
              ]),
              U(e("textarea", {
                "onUpdate:modelValue": (m) => l.content = m,
                placeholder: "Response Content",
                class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                rows: "2"
              }, null, 8, Ei), [
                [O, l.content]
              ])
            ]))), 128))
          ])
        ], 64)) : H("", !0)
      ]),
      e("div", Ii, [
        e("div", { class: "flex justify-between items-center mb-4" }, [
          s[60] || (s[60] = e("h6", { class: "font-bold text-slate-600 text-xs uppercase tracking-wider" }, "Questions List", -1)),
          e("button", {
            onClick: _,
            class: "text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-1.5 rounded-lg font-bold transition"
          }, " + Add Question ")
        ]),
        e("div", Ri, [
          (u(!0), x(J, null, ae(t.task.questions, (l, p) => (u(), x("div", {
            key: p,
            class: "bg-white p-4 rounded-lg border border-slate-300 shadow-sm relative"
          }, [
            e("button", {
              onClick: (m) => t.task.questions.splice(p, 1),
              class: "absolute top-2 right-2 text-red-400 hover:text-red-600 font-bold text-sm"
            }, "×", 8, Bi),
            e("span", Ni, "Q " + A(p + 1), 1),
            ["reading_mcq", "listening_responses", "listening_conversation", "listening_announcement", "listening_talk"].includes(t.task.type) ? (u(), x(J, { key: 0 }, [
              e("div", Mi, [
                e("div", Ui, [
                  e("label", Li, [
                    s[61] || (s[61] = P(" Question Image URL (Optional) ", -1)),
                    e("div", ji, [
                      e("input", {
                        type: "file",
                        onChange: (m) => a(m, l),
                        class: "hidden",
                        id: "file-" + p,
                        accept: "image/*"
                      }, null, 40, Vi),
                      e("label", {
                        for: "file-" + p,
                        class: "cursor-pointer text-teal-600 hover:text-teal-800 text-[10px] font-bold border border-teal-600 px-2 py-0.5 rounded"
                      }, A(o.value ? "Uploading..." : "Upload to CDN"), 9, Oi)
                    ])
                  ]),
                  U(e("input", {
                    "onUpdate:modelValue": (m) => l.imageUrl = m,
                    type: "text",
                    class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                    placeholder: "https://..."
                  }, null, 8, Pi), [
                    [O, l.imageUrl]
                  ])
                ]),
                e("div", Di, [
                  s[62] || (s[62] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Number", -1)),
                  U(e("input", {
                    "onUpdate:modelValue": (m) => l.questionNumber = m,
                    type: "number",
                    class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                  }, null, 8, zi), [
                    [
                      O,
                      l.questionNumber,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", qi, [
                  s[63] || (s[63] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Question Text", -1)),
                  U(e("input", {
                    "onUpdate:modelValue": (m) => l.question = m,
                    type: "text",
                    class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                  }, null, 8, Fi), [
                    [O, l.question]
                  ])
                ])
              ]),
              e("div", Gi, [
                e("label", Qi, [
                  s[64] || (s[64] = P(" Options ", -1)),
                  e("button", {
                    onClick: (m) => l.options.push(""),
                    class: "text-teal-600 hover:text-teal-800 text-[10px]"
                  }, "+ Add", 8, Hi)
                ]),
                (u(!0), x(J, null, ae(l.options, (m, d) => (u(), x("div", {
                  key: d,
                  class: "flex gap-2 mb-1"
                }, [
                  U(e("input", {
                    "onUpdate:modelValue": (v) => l.options[d] = v,
                    type: "text",
                    class: "flex-1 border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                    placeholder: "(A) Option text..."
                  }, null, 8, Wi), [
                    [O, l.options[d]]
                  ]),
                  e("button", {
                    onClick: (v) => l.options.splice(d, 1),
                    class: "text-red-400 hover:text-red-600 font-bold"
                  }, "×", 8, Ji)
                ]))), 128))
              ]),
              e("div", null, [
                s[65] || (s[65] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Correct Answer", -1)),
                U(e("input", {
                  "onUpdate:modelValue": (m) => l.answer = m,
                  type: "text",
                  class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none placeholder:text-slate-300",
                  placeholder: "A, B, C, or D"
                }, null, 8, Yi), [
                  [O, l.answer]
                ])
              ])
            ], 64)) : H("", !0),
            ["fill_in_the_blanks", "reading_fib"].includes(t.task.type) ? (u(), x(J, { key: 1 }, [
              e("div", Ki, [
                s[66] || (s[66] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Instruction Text", -1)),
                U(e("input", {
                  "onUpdate:modelValue": (m) => l.question = m,
                  type: "text",
                  class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                }, null, 8, Zi), [
                  [O, l.question]
                ])
              ]),
              e("div", null, [
                e("label", Xi, [
                  s[67] || (s[67] = P(" Correct Answers (In order) ", -1)),
                  e("button", {
                    onClick: (m) => l.answer.push(""),
                    class: "text-teal-600 hover:text-teal-800 text-[10px]"
                  }, "+ Add Word", 8, ed)
                ]),
                e("div", td, [
                  (u(!0), x(J, null, ae(l.answer, (m, d) => (u(), x("div", {
                    key: d,
                    class: "flex items-center gap-1 bg-teal-50 border border-teal-200 rounded px-2 py-1"
                  }, [
                    e("span", sd, A(d + 1) + ".", 1),
                    U(e("input", {
                      "onUpdate:modelValue": (v) => l.answer[d] = v,
                      type: "text",
                      class: "w-20 bg-transparent text-sm focus:outline-none font-semibold text-teal-900"
                    }, null, 8, nd), [
                      [O, l.answer[d]]
                    ]),
                    e("button", {
                      onClick: (v) => l.answer.splice(d, 1),
                      class: "text-teal-400 hover:text-teal-700 ml-1"
                    }, "×", 8, od)
                  ]))), 128))
                ])
              ])
            ], 64)) : H("", !0),
            t.task.type === "interview" ? (u(), x("div", ld, [
              e("div", ad, [
                e("label", rd, [
                  s[68] || (s[68] = P(" Question Image URL (Optional) ", -1)),
                  e("div", id, [
                    e("input", {
                      type: "file",
                      onChange: (m) => a(m, l),
                      class: "hidden",
                      id: "file-int-" + p,
                      accept: "image/*"
                    }, null, 40, dd),
                    e("label", {
                      for: "file-int-" + p,
                      class: "cursor-pointer text-teal-600 hover:text-teal-800 text-[10px] font-bold border border-teal-600 px-2 py-0.5 rounded"
                    }, A(o.value ? "Uploading..." : "Upload to CDN"), 9, ud)
                  ])
                ]),
                U(e("input", {
                  "onUpdate:modelValue": (m) => l.imageUrl = m,
                  type: "text",
                  class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                  placeholder: "https://..."
                }, null, 8, cd), [
                  [O, l.imageUrl]
                ])
              ]),
              e("div", pd, [
                s[69] || (s[69] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Number", -1)),
                U(e("input", {
                  "onUpdate:modelValue": (m) => l.questionNumber = m,
                  type: "number",
                  class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                }, null, 8, md), [
                  [
                    O,
                    l.questionNumber,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              e("div", fd, [
                s[70] || (s[70] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Interviewer Question", -1)),
                U(e("input", {
                  "onUpdate:modelValue": (m) => l.question = m,
                  type: "text",
                  class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                }, null, 8, xd), [
                  [O, l.question]
                ])
              ])
            ])) : H("", !0),
            t.task.type === "build_sentences" ? (u(), x(J, { key: 3 }, [
              e("div", gd, [
                s[71] || (s[71] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Prompt", -1)),
                U(e("input", {
                  "onUpdate:modelValue": (m) => l.prompt = m,
                  type: "text",
                  class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                }, null, 8, vd), [
                  [O, l.prompt]
                ])
              ]),
              e("div", hd, [
                e("label", bd, [
                  s[72] || (s[72] = P(" Scrambled Words ", -1)),
                  e("button", {
                    onClick: (m) => l.scrambledWords.push(""),
                    class: "text-teal-600 hover:text-teal-800 text-[10px]"
                  }, "+ Add Word", 8, wd)
                ]),
                e("div", yd, [
                  (u(!0), x(J, null, ae(l.scrambledWords, (m, d) => (u(), x("div", {
                    key: d,
                    class: "flex items-center bg-slate-100 border border-slate-300 rounded px-2 py-1"
                  }, [
                    U(e("input", {
                      "onUpdate:modelValue": (v) => l.scrambledWords[d] = v,
                      type: "text",
                      class: "w-20 bg-transparent text-sm focus:outline-none"
                    }, null, 8, kd), [
                      [O, l.scrambledWords[d]]
                    ]),
                    e("button", {
                      onClick: (v) => l.scrambledWords.splice(d, 1),
                      class: "text-slate-400 hover:text-slate-600 ml-1 font-bold"
                    }, "×", 8, _d)
                  ]))), 128))
                ])
              ]),
              e("div", null, [
                s[73] || (s[73] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Correct Sentence Answer", -1)),
                U(e("input", {
                  "onUpdate:modelValue": (m) => l.answer = m,
                  type: "text",
                  class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                }, null, 8, $d), [
                  [O, l.answer]
                ])
              ])
            ], 64)) : H("", !0),
            t.task.type === "listen_and_repeat" ? (u(), x("div", Cd, [
              e("div", Td, [
                e("label", Sd, [
                  s[74] || (s[74] = P(" Prompt Image (Optional) ", -1)),
                  e("div", Ad, [
                    e("input", {
                      type: "file",
                      onChange: (m) => a(m, l),
                      class: "hidden",
                      id: "file-lar-" + p,
                      accept: "image/*"
                    }, null, 40, Ed),
                    e("label", {
                      for: "file-lar-" + p,
                      class: "cursor-pointer text-teal-600 hover:text-teal-800 text-[10px] font-bold border border-teal-600 px-2 py-0.5 rounded"
                    }, A(o.value ? "Uploading..." : "Upload to CDN"), 9, Id)
                  ])
                ]),
                U(e("input", {
                  "onUpdate:modelValue": (m) => l.imageUrl = m,
                  type: "text",
                  class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                  placeholder: "https://..."
                }, null, 8, Rd), [
                  [O, l.imageUrl]
                ])
              ]),
              e("div", Bd, [
                s[75] || (s[75] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Sentence to Repeat", -1)),
                U(e("input", {
                  "onUpdate:modelValue": (m) => l.question = m,
                  type: "text",
                  class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                  placeholder: "Enter the sentence here..."
                }, null, 8, Nd), [
                  [O, l.question]
                ])
              ])
            ])) : H("", !0),
            ["write_an_email", "academic_discussion"].includes(t.task.type) ? (u(), x("p", Md, "This task type only requires an empty question placeholder for the user's attempt.")) : H("", !0)
          ]))), 128)),
          t.task.questions.length === 0 ? (u(), x("div", Ud, " No questions added. ")) : H("", !0)
        ])
      ])
    ]));
  }
}, Ld = { class: "min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800 flex flex-col md:flex-row gap-6" }, jd = { class: "w-full md:w-2/3 bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col overflow-hidden max-h-[90vh]" }, Vd = { class: "p-4 md:p-6 overflow-y-auto flex-1 space-y-8 bg-slate-100" }, Od = { class: "bg-white p-5 rounded-2xl border border-slate-200 shadow-sm" }, Pd = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, Dd = { class: "absolute top-4 right-4" }, zd = ["onClick"], qd = { class: "text-xl font-black text-teal-800 mb-4" }, Fd = { class: "mb-6" }, Gd = ["onUpdate:modelValue", "onChange"], Qd = {
  key: 0,
  class: "space-y-4"
}, Hd = { class: "flex justify-between items-center mb-3" }, Wd = { class: "font-bold text-slate-700" }, Jd = ["onClick"], Yd = { class: "mb-3" }, Kd = ["onUpdate:modelValue"], Zd = { class: "space-y-4 mt-4" }, Xd = ["onClick"], eu = ["onClick"], tu = {
  key: 1,
  class: "space-y-4 ml-2"
}, su = ["onClick"], nu = { class: "w-full md:w-1/3 bg-slate-900 rounded-3xl shadow-xl overflow-hidden flex flex-col text-slate-300 max-h-[90vh]" }, ou = {
  __name: "Creator",
  setup(t) {
    const n = F({
      id: "d18d02b6-69de-45ca-9bb0-1bd45588b62a",
      title: "TOEFL_Practice_Test_2",
      user_id: "user_123",
      data: {
        sections: [
          {
            type: "reading",
            modules: [
              {
                moduleNumber: 1,
                tasks: []
              }
            ]
          }
        ]
      }
    }), o = F(JSON.stringify(n.value, null, 2));
    be(n, (m) => {
      o.value = JSON.stringify(m, null, 2);
    }, { deep: !0 });
    const a = () => {
      try {
        const m = JSON.parse(o.value);
        n.value = m, alert("UI updated from JSON!");
      } catch (m) {
        alert("Invalid JSON! Please check the syntax."), console.error(m);
      }
    }, r = (m) => {
      ["reading", "listening"].includes(m.type) ? (m.modules = m.modules || [{ moduleNumber: 1, tasks: [] }], delete m.tasks) : (m.tasks = m.tasks || [], delete m.modules);
    }, i = () => {
      n.value.data.sections.push({
        type: "reading",
        modules: [{ moduleNumber: 1, tasks: [] }]
      });
    }, b = (m) => {
      n.value.data.sections.splice(m, 1);
    }, C = (m) => {
      const d = m.modules.length + 1;
      m.modules.push({
        moduleNumber: d,
        tasks: []
      });
    }, c = (m, d) => {
      m.modules.splice(d, 1);
    }, _ = (m) => {
      const d = { type: "", imageUrl: "" };
      return m === "reading" ? { ...d, type: "reading_mcq", passageTitle: "", passageHTML: "", questions: [] } : m === "listening" ? { ...d, type: "listening_responses", passageTitle: "", audioTranscript: "", questions: [] } : m === "speaking" ? { ...d, type: "interview", title: "", context: "", prepTime: 0, responseTime: 60, instructions: "", questions: [] } : m === "writing" ? { ...d, type: "build_sentences", instruction: "", questions: [] } : d;
    }, g = (m, d) => {
      m.push(_(d));
    }, s = (m, d) => {
      m.splice(d, 1);
    }, l = () => {
      navigator.clipboard.writeText(JSON.stringify(n.value, null, 2)), alert("JSON copied to clipboard!");
    }, p = async () => {
      try {
        console.log("Submitting payload...", JSON.stringify(n.value, null, 2)), alert("Payload generated! Check console or copy the JSON.");
      } catch (m) {
        console.error("Submission failed:", m), alert("Failed to submit test. Check console.");
      }
    };
    return (m, d) => (u(), x("div", Ld, [
      e("div", jd, [
        e("div", { class: "p-6 bg-gradient-to-r from-teal-600 to-teal-800 text-white flex justify-between items-center shrink-0" }, [
          d[4] || (d[4] = e("h1", { class: "text-xl md:text-2xl font-bold" }, "TOEFL Test Creator", -1)),
          e("button", {
            onClick: p,
            class: "bg-white text-teal-700 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 transition shadow text-sm"
          }, " Create Test (Submit) ")
        ]),
        e("div", Vd, [
          e("section", Od, [
            d[8] || (d[8] = e("h2", { class: "text-lg font-bold mb-4 text-slate-700 border-b pb-2" }, "Test Information", -1)),
            e("div", Pd, [
              e("div", null, [
                d[5] || (d[5] = e("label", { class: "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1" }, "Test ID", -1)),
                U(e("input", {
                  "onUpdate:modelValue": d[0] || (d[0] = (v) => n.value.id = v),
                  type: "text",
                  class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                }, null, 512), [
                  [O, n.value.id]
                ])
              ]),
              e("div", null, [
                d[6] || (d[6] = e("label", { class: "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1" }, "Title", -1)),
                U(e("input", {
                  "onUpdate:modelValue": d[1] || (d[1] = (v) => n.value.title = v),
                  type: "text",
                  class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                }, null, 512), [
                  [O, n.value.title]
                ])
              ]),
              e("div", null, [
                d[7] || (d[7] = e("label", { class: "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1" }, "User ID", -1)),
                U(e("input", {
                  "onUpdate:modelValue": d[2] || (d[2] = (v) => n.value.user_id = v),
                  type: "text",
                  class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                }, null, 512), [
                  [O, n.value.user_id]
                ])
              ])
            ])
          ]),
          (u(!0), x(J, null, ae(n.value.data.sections, (v, L) => (u(), x("div", {
            key: L,
            class: "bg-white p-5 rounded-2xl border border-slate-300 shadow-sm relative"
          }, [
            e("div", Dd, [
              e("button", {
                onClick: (E) => b(L),
                class: "text-red-500 hover:text-red-700 text-xs font-bold uppercase tracking-wider"
              }, "Remove Section", 8, zd)
            ]),
            e("h3", qd, "Section " + A(L + 1), 1),
            e("div", Fd, [
              d[10] || (d[10] = e("label", { class: "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1" }, "Section Type", -1)),
              U(e("select", {
                "onUpdate:modelValue": (E) => v.type = E,
                onChange: (E) => r(v),
                class: "w-full md:w-1/3 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none font-semibold"
              }, [...d[9] || (d[9] = [
                e("option", { value: "reading" }, "Reading", -1),
                e("option", { value: "listening" }, "Listening", -1),
                e("option", { value: "speaking" }, "Speaking", -1),
                e("option", { value: "writing" }, "Writing", -1)
              ])], 40, Gd), [
                [_t, v.type]
              ])
            ]),
            ["reading", "listening"].includes(v.type) ? (u(), x("div", Qd, [
              (u(!0), x(J, null, ae(v.modules, (E, j) => (u(), x("div", {
                key: j,
                class: "border-l-4 border-indigo-400 pl-4 py-2 ml-2"
              }, [
                e("div", Hd, [
                  e("h4", Wd, "Module " + A(j + 1), 1),
                  e("button", {
                    onClick: (k) => c(v, j),
                    class: "text-red-400 hover:text-red-600 text-xs font-semibold"
                  }, "Remove Module", 8, Jd)
                ]),
                e("div", Yd, [
                  d[11] || (d[11] = e("label", { class: "block text-xs font-semibold text-slate-500 mb-1" }, "Module Number", -1)),
                  U(e("input", {
                    "onUpdate:modelValue": (k) => E.moduleNumber = k,
                    type: "number",
                    class: "w-24 border border-slate-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                  }, null, 8, Kd), [
                    [
                      O,
                      E.moduleNumber,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", Zd, [
                  (u(!0), x(J, null, ae(E.tasks, (k, W) => (u(), x("div", {
                    key: W,
                    class: "bg-slate-50 p-4 rounded-xl border border-slate-200"
                  }, [
                    Oe(vt, {
                      task: k,
                      sectionType: v.type,
                      onRemove: (ne) => s(E.tasks, W)
                    }, null, 8, ["task", "sectionType", "onRemove"])
                  ]))), 128)),
                  e("button", {
                    onClick: (k) => g(E.tasks, v.type),
                    class: "text-sm bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-1.5 rounded-lg font-semibold transition"
                  }, " + Add Task to Module ", 8, Xd)
                ])
              ]))), 128)),
              e("button", {
                onClick: (E) => C(v),
                class: "text-sm border-2 border-dashed border-indigo-300 text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition"
              }, " + Add Module ", 8, eu)
            ])) : (u(), x("div", tu, [
              (u(!0), x(J, null, ae(v.tasks, (E, j) => (u(), x("div", {
                key: j,
                class: "bg-slate-50 p-4 rounded-xl border border-slate-200"
              }, [
                Oe(vt, {
                  task: E,
                  sectionType: v.type,
                  onRemove: (k) => s(v.tasks, j)
                }, null, 8, ["task", "sectionType", "onRemove"])
              ]))), 128)),
              e("button", {
                onClick: (E) => g(v.tasks, v.type),
                class: "text-sm border-2 border-dashed border-teal-300 text-teal-600 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 transition"
              }, " + Add Task to Section ", 8, su)
            ]))
          ]))), 128)),
          e("button", {
            onClick: i,
            class: "w-full py-4 border-2 border-dashed border-teal-400 bg-teal-50 rounded-2xl text-teal-700 font-bold hover:bg-teal-100 transition flex items-center justify-center gap-2"
          }, [...d[12] || (d[12] = [
            e("span", { class: "text-xl leading-none" }, "+", -1),
            P(" Add New Section ", -1)
          ])])
        ])
      ]),
      e("div", nu, [
        e("div", { class: "p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center shrink-0" }, [
          d[13] || (d[13] = e("h2", { class: "font-semibold text-white" }, "JSON Payload", -1)),
          e("div", { class: "flex gap-2" }, [
            e("button", {
              onClick: l,
              class: "text-[10px] bg-slate-700 hover:bg-slate-600 px-2 py-1.5 rounded-md text-white font-semibold transition shadow-sm border border-slate-600"
            }, "Copy"),
            e("button", {
              onClick: a,
              class: "text-[10px] bg-teal-600 hover:bg-teal-500 px-2 py-1.5 rounded-md text-white font-semibold transition shadow-sm"
            }, "Sync to UI")
          ])
        ]),
        U(e("textarea", {
          "onUpdate:modelValue": d[3] || (d[3] = (v) => o.value = v),
          class: "p-4 flex-1 text-xs font-mono bg-slate-900 text-teal-300/90 leading-relaxed outline-none resize-none scrollbar-thin scrollbar-thumb-slate-700",
          spellcheck: "false"
        }, null, 512), [
          [O, o.value]
        ])
      ])
    ]));
  }
}, lu = [
  {
    path: "/creator",
    name: "creator",
    component: ou
  },
  // --- ✨ DYNAMIC SETUP ROUTES ✨ ---
  // Updated to match your router.push(`/test/copywrite/${testId}`)
  {
    path: "/test/copywrite/:testId",
    name: "Copywrite",
    component: Ks
  },
  {
    path: "/test/hardware/:testId",
    name: "hardware",
    component: en
  },
  {
    path: "/test/volume/:testId",
    name: "volume",
    component: cn
  },
  {
    path: "/test/microphone/:testId",
    name: "microphone",
    component: On
  },
  {
    path: "/test/intro/:testId",
    name: "intro",
    component: Jn
  },
  {
    path: "/test/listening-intro/:testId",
    name: "listening-intro",
    component: Zn
  },
  {
    path: "/questions/fib",
    // Leaving this static if it's just a UI test page
    name: "Fib",
    component: Qn
  },
  // --- ✨ DYNAMIC TEST SECTION ROUTES ✨ ---
  {
    path: "/reading-section/:testId",
    name: "reading-section",
    component: Bo
  },
  {
    path: "/listening-section/:testId",
    name: "listening-section",
    component: Ga
  },
  {
    path: "/speaking-section/:testId",
    name: "speaking-section",
    component: ga
  },
  {
    path: "/writing-section/:testId",
    name: "writing-section",
    component: Sl
  },
  {
    path: "/test/outcome/:testId",
    name: "outcome",
    component: gt
  },
  {
    path: "/outcome/review",
    name: "outcome-review",
    component: () => import("./OutcomeReviewPage-BWoPn_eF.js")
  },
  {
    path: "/list/:testId",
    name: "list",
    component: () => import("./ListPage-BtcjkH9Y.js")
  },
  // Dynamic question route: /review/{testId}/{section}/{type}/{uuid}
  {
    path: "/review/:testId/:section/:questionType/:uuid",
    name: "question-detail",
    component: () => import("./OutcomeReviewPage-BWoPn_eF.js")
  },
  {
    path: "/result/:testId",
    name: "test-result",
    component: gt
  },
  // --- ENTRY POINT ---
  {
    path: "/start",
    name: "main",
    component: Ya
  }
], Ke = Ws({
  history: Ts(),
  routes: lu
}), au = { class: "app-container" }, ru = /* @__PURE__ */ pe({
  __name: "index",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = Se(), o = F([]), a = F({ id: "", title: "", user_id: "" }), r = F(null), i = F(!1), b = F({
      section: "",
      module: 1,
      task: 1,
      question: 1
    }), C = () => {
      localStorage.setItem("test_progress", JSON.stringify({
        data: o.value,
        state: b.value,
        metadata: a.value
      }));
    }, c = () => {
      const d = localStorage.getItem("test_progress");
      if (d)
        try {
          const v = JSON.parse(d);
          return console.log("[Persistence] Loaded progress from localStorage:", v), v;
        } catch (v) {
          console.error("[Persistence] Error parsing localStorage data:", v);
        }
      return console.log("[Persistence] No saved progress found in localStorage."), null;
    }, _ = (d) => d >= 95 ? "C1" : d >= 72 ? "B2" : d >= 42 ? "B1" : "A1", g = async (d) => {
      const v = c();
      v && v.metadata?.id === d && (console.log("[Persistence] Resuming from local storage"), o.value = v.data || [], b.value = v.state || b.value, a.value = v.metadata || a.value), i.value = !0;
      try {
        const L = n.path.includes("/review") || n.path.includes("/outcome") || n.path.includes("/result"), E = v && Array.isArray(v.data) && v.data.length > 0, j = !L && !E, k = `${t._pp.data.curr.data.api.b.url}&id=${d}${j ? "&clean=true" : ""}`, ne = await (await fetch(k, {
          method: "GET",
          headers: {
            accept: "*/*",
            Authorization: `Bearer ${t._pp.data.curr.data.api.a.header.Authorization}`
          }
        })).json();
        if (ne.success && ne.data?.l?.[0]) {
          const G = ne.data.l[0];
          a.value = { id: G.id, title: G.title, user_id: G.user_id };
          let M = [], h = G.data;
          if (typeof h == "string")
            try {
              h = JSON.parse(h);
            } catch (y) {
              console.error("[APP] Failed to parse rootItem.data string:", y);
            }
          Array.isArray(h) ? M = h : h && Array.isArray(h.sections) && (M = h.sections);
          const V = n.path.includes("/review") || n.path.includes("/outcome"), $ = v && v.metadata?.id === d && Array.isArray(v.data) && v.data.length > 0;
          !V && !$ && M.forEach((y) => {
            const I = (S) => {
              S.user_input && (S.user_input.data = ""), S.user_result && (S.user_result.data = "", delete S.user_result.ai_feedback, delete S.user_result.score, delete S.user_result.status, delete S.user_result.explanation);
            };
            y.modules?.forEach((S) => S.tasks?.forEach((z) => z.questions?.forEach(I))), y.tasks?.forEach((S) => S.questions?.forEach(I));
          }), $ || (o.value = M), G.data?.overall && (r.value = G.data.overall), G.state && !$ && (b.value = G.state), C();
        }
      } catch (L) {
        console.error("[APP] Error fetching test data:", L);
      } finally {
        i.value = !1;
      }
    };
    be(() => n.params.testId, (d) => {
      d && d !== a.value.id && g(d);
    }, { immediate: !0 }), be(() => n.query.result, (d) => {
      d && Ke.push(`/result/${d}`);
    }, { immediate: !0 });
    const s = async (d, v = !1) => {
      i.value = !0;
      try {
        const L = `${t._pp.data.curr.data.api.d.url}`, E = {
          id: String(a.value.id || n.params.testId || ""),
          title: String(a.value.title || "TOEFL Practice Test"),
          user_id: String(a.value.user_id || "user_123"),
          data: {
            sections: o.value || [],
            overall: r.value || {}
          },
          state: b.value || {}
        }, j = a.value?.is_master || o.value?.is_master, k = n.path.includes("/review") || n.path.includes("/outcome") || n.path.includes("/result");
        if (!(j && !k && !v)) {
          console.log("[Sync] Sending payload to updatedata:", E);
          const W = await fetch(L, {
            method: "PUT",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${t._pp.data.curr.data.api.d.header.Authorization}`
            },
            body: JSON.stringify(E)
          });
          W.ok || console.warn("[Sync] Update status:", W.status);
        }
        if (v) {
          console.log("[Sync] Requesting evaluation for section:", d);
          const W = `${t._pp.data.curr.data.api.c.url}${d ? "&section=" + d : ""}`, ne = {
            id: a.value.id || n.params.testId,
            user_id: a.value.user_id || "user_123",
            title: a.value.title || "Practice Session",
            data: {
              sections: o.value,
              overall: r.value || {}
            }
          }, M = await (await fetch(W, {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${t._pp.data.curr.data.api.a.header.Authorization}`
            },
            body: JSON.stringify(ne)
          })).json();
          if (console.log("[Sync] Evaluation Result:", M), M.success && (M.data || M.sections)) {
            o.value = M.data?.sections || M.sections || M.data;
            const h = M.overall || M.data?.overall;
            if (h) {
              const V = r.value || { total: { old_toefl: 0, new_toefl: 0, cefr: "A1" } }, X = ["reading", "listening", "speaking", "writing"];
              X.forEach((y) => {
                h[y] && (V[y] = h[y]);
              });
              let $ = 0;
              X.forEach((y) => {
                V[y] && ($ += V[y].old_toefl || 0, V[y].new_toefl = Number((V[y].old_toefl / 30 * 6).toFixed(1)));
              }), V.total = {
                old_toefl: $,
                new_toefl: Number(($ / 120 * 6).toFixed(1)),
                cefr: _($)
              }, r.value = { ...V }, C();
            }
            console.log("[Sync] Practice data updated successfully");
          } else
            console.error("[Sync] Evaluation failed:", M.message);
        }
      } catch (L) {
        console.error("[Sync] Global error:", L);
      } finally {
        i.value = !1;
      }
    }, l = (d, v, L, E, j) => {
      try {
        const k = o.value.find((ne) => ne.type === d);
        if (!k) return;
        let W;
        if (k.modules && k.modules[v]) {
          const ne = k.modules[v].tasks?.[L];
          ne && (W = ne.questions?.[E]);
        } else k.tasks && k.tasks[L] && (W = k.tasks[L].questions?.[E]);
        W && (W.user_input || (W.user_input = { data: "" }), W.user_input.data = j, C());
      } catch (k) {
        console.error(k);
      }
    }, p = async () => {
      try {
        i.value = !0;
        const d = `${t._pp.data.curr.data.api.a.url}`, v = {
          title: `Result: ${a.value.title || "TOEFL Test"} (${(/* @__PURE__ */ new Date()).toLocaleDateString()})`,
          user_id: a.value.user_id || "user_123",
          data: {
            sections: o.value || [],
            overall: r.value || {}
          },
          state: {}
          // State is empty for a finished result
        };
        console.log("[Submit] Creating new result record...", v);
        const E = await (await fetch(d, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${t._pp.data.curr.data.api.a.header.Authorization}`
          },
          body: JSON.stringify(v)
        })).json();
        if (E.success && E.data?.id) {
          const j = E.data.id;
          console.log("[Submit] New result record created with ID:", j);
          const k = "toefl_test_history", W = JSON.parse(localStorage.getItem(k) || "[]");
          W.push({
            masterId: a.value.id,
            resultId: j,
            title: v.title,
            date: (/* @__PURE__ */ new Date()).toISOString()
          }), localStorage.setItem(k, JSON.stringify(W)), localStorage.removeItem("test_progress"), Ke.push(`/result/${j}`);
        } else
          alert("Failed to save results. Please try again.");
      } catch (d) {
        console.error("[Submit] Error submitting test:", d);
      } finally {
        i.value = !1;
      }
    }, m = (d, v) => {
      try {
        const L = o.value.find((k) => k.type.toLowerCase() === d.toLowerCase());
        if (!L) return;
        const E = (k) => {
          k.uuid !== v && (k.user_input = { data: "" }, k.user_result = null);
        }, j = (k) => {
          k.uuid === v || k.id === v || (k.questions && k.questions.length > 0 ? (k.tasks?.forEach(E), k.questions.forEach(E)) : (k.user_input = { data: "" }, k.user_result = null));
        };
        L.modules ? L.modules.forEach((k) => k.tasks?.forEach(j)) : L.tasks && L.tasks.forEach(j), C(), console.log(`[Clear] Section ${d} cleared (except: ${v || "none"})`);
      } catch (L) {
        console.error("[Clear] Failed to clear section:", L);
      }
    };
    return he("state", b), he("saveToLocalStorage", C), he("testData", o), he("testMetadata", a), he("overallScore", r), he("isGlobalLoading", i), he("updateUserInput", l), he("syncAllData", s), he("submitFinalTest", p), he("clearSectionAnswers", m), (d, v) => {
      const L = Dt("router-view");
      return u(), x("div", au, [
        Oe(L, {
          _p: t._p,
          _pp: t._pp
        }, null, 8, ["_p", "_pp"])
      ]);
    };
  }
}), du = async (t) => ({
  set: async (n) => {
    console.log(`--hydrator [${n.data.curr.type}]`);
    const o = {
      _p: t,
      _pp: n
    };
    console.log(o._pp.data.curr.data.api.a);
    const a = zt(ru, o);
    a.use(Ke);
    const r = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          t.f.call("msg", {
            type: "change",
            _p: t,
            _pp: n,
            custom: {}
          });
        }
      }
    }, i = document.getElementById(t.f.name("vue-root"));
    return a.mount(i), r;
  }
});
export {
  Ue as _,
  Se as a,
  du as i,
  we as u
};
