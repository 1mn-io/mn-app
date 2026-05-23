const { inject: re, shallowRef: Vt, unref: ge, shallowReactive: Ut, defineComponent: me, reactive: Pt, computed: ie, h: _t, provide: ye, ref: K, watch: we, nextTick: Ke, openBlock: m, createElementBlock: v, createElementVNode: e, createTextVNode: q, createStaticVNode: Ce, createBlock: Ae, onMounted: tt, onBeforeUnmount: Ue, normalizeClass: be, Fragment: oe, renderList: ae, normalizeStyle: Se, withDirectives: X, vModelText: ee, createCommentVNode: se, toDisplayString: M, vModelRadio: kt, withModifiers: $t, createVNode: De, Transition: Dt, withCtx: zt, vModelSelect: Ct, resolveComponent: Ft, createApp: Qt } = window.Vue;
const Be = typeof document < "u";
function At(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
}
function Gt(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module" || t.default && At(t.default);
}
const de = Object.assign;
function Ge(t, n) {
  const o = {};
  for (const a in n) {
    const i = n[a];
    o[a] = ke(i) ? i.map(t) : t(i);
  }
  return o;
}
const Ve = () => {
}, ke = Array.isArray;
function ot(t, n) {
  const o = {};
  for (const a in t) o[a] = a in n ? n[a] : t[a];
  return o;
}
let xe = /* @__PURE__ */ (function(t) {
  return t[t.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", t[t.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", t[t.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", t[t.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", t[t.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", t;
})({});
const Tt = /* @__PURE__ */ Symbol("");
xe.MATCHER_NOT_FOUND + "", xe.NAVIGATION_GUARD_REDIRECT + "", xe.NAVIGATION_ABORTED + "", xe.NAVIGATION_CANCELLED + "", xe.NAVIGATION_DUPLICATED + "";
function je(t, n) {
  return de(/* @__PURE__ */ new Error(), {
    type: t,
    [Tt]: !0
  }, n);
}
function Te(t, n) {
  return t instanceof Error && Tt in t && (n == null || !!(t.type & n));
}
const Ht = [
  "params",
  "query",
  "hash"
];
function Wt(t) {
  if (typeof t == "string") return t;
  if (t.path != null) return t.path;
  const n = {};
  for (const o of Ht) o in t && (n[o] = t[o]);
  return JSON.stringify(n, null, 2);
}
const Jt = /* @__PURE__ */ Symbol(""), lt = /* @__PURE__ */ Symbol(""), Fe = /* @__PURE__ */ Symbol(""), st = /* @__PURE__ */ Symbol(""), Ye = /* @__PURE__ */ Symbol("");
function _e() {
  return re(Fe);
}
function Ee(t) {
  return re(st);
}
const St = /#/g, Kt = /&/g, Yt = /\//g, Zt = /=/g, Xt = /\?/g, Et = /\+/g, qt = /%5B/g, es = /%5D/g, Lt = /%5E/g, ts = /%60/g, It = /%7B/g, ss = /%7C/g, Rt = /%7D/g, ns = /%20/g;
function nt(t) {
  return t == null ? "" : encodeURI("" + t).replace(ss, "|").replace(qt, "[").replace(es, "]");
}
function os(t) {
  return nt(t).replace(It, "{").replace(Rt, "}").replace(Lt, "^");
}
function Ze(t) {
  return nt(t).replace(Et, "%2B").replace(ns, "+").replace(St, "%23").replace(Kt, "%26").replace(ts, "`").replace(It, "{").replace(Rt, "}").replace(Lt, "^");
}
function ls(t) {
  return Ze(t).replace(Zt, "%3D");
}
function rs(t) {
  return nt(t).replace(St, "%23").replace(Xt, "%3F");
}
function as(t) {
  return rs(t).replace(Yt, "%2F");
}
function ze(t) {
  if (t == null) return null;
  try {
    return decodeURIComponent("" + t);
  } catch {
  }
  return "" + t;
}
const is = /\/$/, ds = (t) => t.replace(is, "");
function He(t, n, o = "/") {
  let a, i = {}, y = "", E = "";
  const N = n.indexOf("#");
  let g = n.indexOf("?");
  return g = N >= 0 && g > N ? -1 : g, g >= 0 && (a = n.slice(0, g), y = n.slice(g, N > 0 ? N : n.length), i = t(y.slice(1))), N >= 0 && (a = a || n.slice(0, N), E = n.slice(N, n.length)), a = fs(a ?? n, o), {
    fullPath: a + y + E,
    path: a,
    query: i,
    hash: ze(E)
  };
}
function us(t, n) {
  const o = n.query ? t(n.query) : "";
  return n.path + (o && "?") + o + (n.hash || "");
}
function rt(t, n) {
  return !n || !t.toLowerCase().startsWith(n.toLowerCase()) ? t : t.slice(n.length) || "/";
}
function cs(t, n, o) {
  const a = n.matched.length - 1, i = o.matched.length - 1;
  return a > -1 && a === i && Ne(n.matched[a], o.matched[i]) && Bt(n.params, o.params) && t(n.query) === t(o.query) && n.hash === o.hash;
}
function Ne(t, n) {
  return (t.aliasOf || t) === (n.aliasOf || n);
}
function Bt(t, n) {
  if (Object.keys(t).length !== Object.keys(n).length) return !1;
  for (var o in t) if (!ps(t[o], n[o])) return !1;
  return !0;
}
function ps(t, n) {
  return ke(t) ? at(t, n) : ke(n) ? at(n, t) : (t && t.valueOf()) === (n && n.valueOf());
}
function at(t, n) {
  return ke(n) ? t.length === n.length && t.every((o, a) => o === n[a]) : t.length === 1 && t[0] === n;
}
function fs(t, n) {
  if (t.startsWith("/")) return t;
  if (!t) return n;
  const o = n.split("/"), a = t.split("/"), i = a[a.length - 1];
  (i === ".." || i === ".") && a.push("");
  let y = o.length - 1, E, N;
  for (E = 0; E < a.length; E++)
    if (N = a[E], N !== ".")
      if (N === "..")
        y > 1 && y--;
      else break;
  return o.slice(0, y).join("/") + "/" + a.slice(E).join("/");
}
const Le = {
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
let Xe = /* @__PURE__ */ (function(t) {
  return t.pop = "pop", t.push = "push", t;
})({}), We = /* @__PURE__ */ (function(t) {
  return t.back = "back", t.forward = "forward", t.unknown = "", t;
})({});
function ms(t) {
  if (!t) if (Be) {
    const n = document.querySelector("base");
    t = n && n.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^/]+/, "");
  } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), ds(t);
}
const xs = /^[^#]+#/;
function gs(t, n) {
  return t.replace(xs, "#") + n;
}
function vs(t, n) {
  const o = document.documentElement.getBoundingClientRect(), a = t.getBoundingClientRect();
  return {
    behavior: n.behavior,
    left: a.left - o.left - (n.left || 0),
    top: a.top - o.top - (n.top || 0)
  };
}
const Qe = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function hs(t) {
  let n;
  if ("el" in t) {
    const o = t.el, a = typeof o == "string" && o.startsWith("#"), i = typeof o == "string" ? a ? document.getElementById(o.slice(1)) : document.querySelector(o) : o;
    if (!i)
      return;
    n = vs(i, t);
  } else n = t;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(n) : window.scrollTo(n.left != null ? n.left : window.scrollX, n.top != null ? n.top : window.scrollY);
}
function it(t, n) {
  return (history.state ? history.state.position - n : -1) + t;
}
const qe = /* @__PURE__ */ new Map();
function bs(t, n) {
  qe.set(t, n);
}
function ws(t) {
  const n = qe.get(t);
  return qe.delete(t), n;
}
function ys(t) {
  return typeof t == "string" || t && typeof t == "object";
}
function jt(t) {
  return typeof t == "string" || typeof t == "symbol";
}
function _s(t) {
  const n = {};
  if (t === "" || t === "?") return n;
  const o = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let a = 0; a < o.length; ++a) {
    const i = o[a].replace(Et, " "), y = i.indexOf("="), E = ze(y < 0 ? i : i.slice(0, y)), N = y < 0 ? null : ze(i.slice(y + 1));
    if (E in n) {
      let g = n[E];
      ke(g) || (g = n[E] = [g]), g.push(N);
    } else n[E] = N;
  }
  return n;
}
function dt(t) {
  let n = "";
  for (let o in t) {
    const a = t[o];
    if (o = ls(o), a == null) {
      a !== void 0 && (n += (n.length ? "&" : "") + o);
      continue;
    }
    (ke(a) ? a.map((i) => i && Ze(i)) : [a && Ze(a)]).forEach((i) => {
      i !== void 0 && (n += (n.length ? "&" : "") + o, i != null && (n += "=" + i));
    });
  }
  return n;
}
function ks(t) {
  const n = {};
  for (const o in t) {
    const a = t[o];
    a !== void 0 && (n[o] = ke(a) ? a.map((i) => i == null ? null : "" + i) : a == null ? a : "" + a);
  }
  return n;
}
function Me() {
  let t = [];
  function n(a) {
    return t.push(a), () => {
      const i = t.indexOf(a);
      i > -1 && t.splice(i, 1);
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
function Ie(t, n, o, a, i, y = (E) => E()) {
  const E = a && (a.enterCallbacks[i] = a.enterCallbacks[i] || []);
  return () => new Promise((N, g) => {
    const T = (f) => {
      f === !1 ? g(je(xe.NAVIGATION_ABORTED, {
        from: o,
        to: n
      })) : f instanceof Error ? g(f) : ys(f) ? g(je(xe.NAVIGATION_GUARD_REDIRECT, {
        from: n,
        to: f
      })) : (E && a.enterCallbacks[i] === E && typeof f == "function" && E.push(f), N());
    }, A = y(() => t.call(a && a.instances[i], n, o, T));
    let x = Promise.resolve(A);
    t.length < 3 && (x = x.then(T)), x.catch((f) => g(f));
  });
}
function Je(t, n, o, a, i = (y) => y()) {
  const y = [];
  for (const E of t)
    for (const N in E.components) {
      let g = E.components[N];
      if (!(n !== "beforeRouteEnter" && !E.instances[N]))
        if (At(g)) {
          const T = (g.__vccOpts || g)[n];
          T && y.push(Ie(T, o, a, E, N, i));
        } else {
          let T = g();
          y.push(() => T.then((A) => {
            if (!A) throw new Error(`Couldn't resolve component "${N}" at "${E.path}"`);
            const x = Gt(A) ? A.default : A;
            E.mods[N] = A, E.components[N] = x;
            const f = (x.__vccOpts || x)[n];
            return f && Ie(f, o, a, E, N, i)();
          }));
        }
    }
  return y;
}
function $s(t, n) {
  const o = [], a = [], i = [], y = Math.max(n.matched.length, t.matched.length);
  for (let E = 0; E < y; E++) {
    const N = n.matched[E];
    N && (t.matched.find((T) => Ne(T, N)) ? a.push(N) : o.push(N));
    const g = t.matched[E];
    g && (n.matched.find((T) => Ne(T, g)) || i.push(g));
  }
  return [
    o,
    a,
    i
  ];
}
let Cs = () => location.protocol + "//" + location.host;
function Nt(t, n) {
  const { pathname: o, search: a, hash: i } = n, y = t.indexOf("#");
  if (y > -1) {
    let E = i.includes(t.slice(y)) ? t.slice(y).length : 1, N = i.slice(E);
    return N[0] !== "/" && (N = "/" + N), rt(N, "");
  }
  return rt(o, t) + a + i;
}
function As(t, n, o, a) {
  let i = [], y = [], E = null;
  const N = ({ state: f }) => {
    const k = Nt(t, location), Y = o.value, j = n.value;
    let R = 0;
    if (f) {
      if (o.value = k, n.value = f, E && E === Y) {
        E = null;
        return;
      }
      R = j ? f.position - j.position : 0;
    } else a(k);
    i.forEach((U) => {
      U(o.value, Y, {
        delta: R,
        type: Xe.pop,
        direction: R ? R > 0 ? We.forward : We.back : We.unknown
      });
    });
  };
  function g() {
    E = o.value;
  }
  function T(f) {
    i.push(f);
    const k = () => {
      const Y = i.indexOf(f);
      Y > -1 && i.splice(Y, 1);
    };
    return y.push(k), k;
  }
  function A() {
    if (document.visibilityState === "hidden") {
      const { history: f } = window;
      if (!f.state) return;
      f.replaceState(de({}, f.state, { scroll: Qe() }), "");
    }
  }
  function x() {
    for (const f of y) f();
    y = [], window.removeEventListener("popstate", N), window.removeEventListener("pagehide", A), document.removeEventListener("visibilitychange", A);
  }
  return window.addEventListener("popstate", N), window.addEventListener("pagehide", A), document.addEventListener("visibilitychange", A), {
    pauseListeners: g,
    listen: T,
    destroy: x
  };
}
function ut(t, n, o, a = !1, i = !1) {
  return {
    back: t,
    current: n,
    forward: o,
    replaced: a,
    position: window.history.length,
    scroll: i ? Qe() : null
  };
}
function Ts(t) {
  const { history: n, location: o } = window, a = { value: Nt(t, o) }, i = { value: n.state };
  i.value || y(a.value, {
    back: null,
    current: a.value,
    forward: null,
    position: n.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function y(g, T, A) {
    const x = t.indexOf("#"), f = x > -1 ? (o.host && document.querySelector("base") ? t : t.slice(x)) + g : Cs() + t + g;
    try {
      n[A ? "replaceState" : "pushState"](T, "", f), i.value = T;
    } catch (k) {
      console.error(k), o[A ? "replace" : "assign"](f);
    }
  }
  function E(g, T) {
    y(g, de({}, n.state, ut(i.value.back, g, i.value.forward, !0), T, { position: i.value.position }), !0), a.value = g;
  }
  function N(g, T) {
    const A = de({}, i.value, n.state, {
      forward: g,
      scroll: Qe()
    });
    y(A.current, A, !0), y(g, de({}, ut(a.value, g, null), { position: A.position + 1 }, T), !1), a.value = g;
  }
  return {
    location: a,
    state: i,
    push: N,
    replace: E
  };
}
function Ss(t) {
  t = ms(t);
  const n = Ts(t), o = As(t, n.state, n.location, n.replace);
  function a(y, E = !0) {
    E || o.pauseListeners(), history.go(y);
  }
  const i = de({
    location: "",
    base: t,
    go: a,
    createHref: gs.bind(null, t)
  }, n, o);
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => n.location.value
  }), Object.defineProperty(i, "state", {
    enumerable: !0,
    get: () => n.state.value
  }), i;
}
let Re = /* @__PURE__ */ (function(t) {
  return t[t.Static = 0] = "Static", t[t.Param = 1] = "Param", t[t.Group = 2] = "Group", t;
})({});
var ve = /* @__PURE__ */ (function(t) {
  return t[t.Static = 0] = "Static", t[t.Param = 1] = "Param", t[t.ParamRegExp = 2] = "ParamRegExp", t[t.ParamRegExpEnd = 3] = "ParamRegExpEnd", t[t.EscapeNext = 4] = "EscapeNext", t;
})(ve || {});
const Es = {
  type: Re.Static,
  value: ""
}, Ls = /[a-zA-Z0-9_]/;
function Is(t) {
  if (!t) return [[]];
  if (t === "/") return [[Es]];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
  function n(k) {
    throw new Error(`ERR (${o})/"${T}": ${k}`);
  }
  let o = ve.Static, a = o;
  const i = [];
  let y;
  function E() {
    y && i.push(y), y = [];
  }
  let N = 0, g, T = "", A = "";
  function x() {
    T && (o === ve.Static ? y.push({
      type: Re.Static,
      value: T
    }) : o === ve.Param || o === ve.ParamRegExp || o === ve.ParamRegExpEnd ? (y.length > 1 && (g === "*" || g === "+") && n(`A repeatable param (${T}) must be alone in its segment. eg: '/:ids+.`), y.push({
      type: Re.Param,
      value: T,
      regexp: A,
      repeatable: g === "*" || g === "+",
      optional: g === "*" || g === "?"
    })) : n("Invalid state to consume buffer"), T = "");
  }
  function f() {
    T += g;
  }
  for (; N < t.length; )
    switch (g = t[N++], o) {
      case ve.Static:
        g === "\\" ? (a = o, o = ve.EscapeNext) : g === "/" ? (T && x(), E()) : g === ":" ? (x(), o = ve.Param) : f();
        break;
      case ve.EscapeNext:
        f(), o = a;
        break;
      case ve.Param:
        g === "(" ? o = ve.ParamRegExp : Ls.test(g) ? f() : (x(), o = ve.Static, g !== "*" && g !== "?" && g !== "+" && N--);
        break;
      case ve.ParamRegExp:
        g === ")" ? A[A.length - 1] == "\\" ? A = A.slice(0, -1) + g : o = ve.ParamRegExpEnd : A += g;
        break;
      case ve.ParamRegExpEnd:
        x(), o = ve.Static, g !== "*" && g !== "?" && g !== "+" && N--, A = "";
        break;
      default:
        n("Unknown state");
        break;
    }
  return o === ve.ParamRegExp && n(`Unfinished custom RegExp for param "${T}"`), x(), E(), i;
}
const ct = "[^/]+?", Rs = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
};
var he = /* @__PURE__ */ (function(t) {
  return t[t._multiplier = 10] = "_multiplier", t[t.Root = 90] = "Root", t[t.Segment = 40] = "Segment", t[t.SubSegment = 30] = "SubSegment", t[t.Static = 40] = "Static", t[t.Dynamic = 20] = "Dynamic", t[t.BonusCustomRegExp = 10] = "BonusCustomRegExp", t[t.BonusWildcard = -50] = "BonusWildcard", t[t.BonusRepeatable = -20] = "BonusRepeatable", t[t.BonusOptional = -8] = "BonusOptional", t[t.BonusStrict = 0.7000000000000001] = "BonusStrict", t[t.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", t;
})(he || {});
const Bs = /[.+*?^${}()[\]/\\]/g;
function js(t, n) {
  const o = de({}, Rs, n), a = [];
  let i = o.start ? "^" : "";
  const y = [];
  for (const T of t) {
    const A = T.length ? [] : [he.Root];
    o.strict && !T.length && (i += "/");
    for (let x = 0; x < T.length; x++) {
      const f = T[x];
      let k = he.Segment + (o.sensitive ? he.BonusCaseSensitive : 0);
      if (f.type === Re.Static)
        x || (i += "/"), i += f.value.replace(Bs, "\\$&"), k += he.Static;
      else if (f.type === Re.Param) {
        const { value: Y, repeatable: j, optional: R, regexp: U } = f;
        y.push({
          name: Y,
          repeatable: j,
          optional: R
        });
        const Q = U || ct;
        if (Q !== ct) {
          k += he.BonusCustomRegExp;
          try {
            new RegExp(`(${Q})`);
          } catch (L) {
            throw new Error(`Invalid custom RegExp for param "${Y}" (${Q}): ` + L.message);
          }
        }
        let G = j ? `((?:${Q})(?:/(?:${Q}))*)` : `(${Q})`;
        x || (G = R && T.length < 2 ? `(?:/${G})` : "/" + G), R && (G += "?"), i += G, k += he.Dynamic, R && (k += he.BonusOptional), j && (k += he.BonusRepeatable), Q === ".*" && (k += he.BonusWildcard);
      }
      A.push(k);
    }
    a.push(A);
  }
  if (o.strict && o.end) {
    const T = a.length - 1;
    a[T][a[T].length - 1] += he.BonusStrict;
  }
  o.strict || (i += "/?"), o.end ? i += "$" : o.strict && !i.endsWith("/") && (i += "(?:/|$)");
  const E = new RegExp(i, o.sensitive ? "" : "i");
  function N(T) {
    const A = T.match(E), x = {};
    if (!A) return null;
    for (let f = 1; f < A.length; f++) {
      const k = A[f] || "", Y = y[f - 1];
      x[Y.name] = k && Y.repeatable ? k.split("/") : k;
    }
    return x;
  }
  function g(T) {
    let A = "", x = !1;
    for (const f of t) {
      (!x || !A.endsWith("/")) && (A += "/"), x = !1;
      for (const k of f) if (k.type === Re.Static) A += k.value;
      else if (k.type === Re.Param) {
        const { value: Y, repeatable: j, optional: R } = k, U = Y in T ? T[Y] : "";
        if (ke(U) && !j) throw new Error(`Provided param "${Y}" is an array but it is not repeatable (* or + modifiers)`);
        const Q = ke(U) ? U.join("/") : U;
        if (!Q) if (R)
          f.length < 2 && (A.endsWith("/") ? A = A.slice(0, -1) : x = !0);
        else throw new Error(`Missing required param "${Y}"`);
        A += Q;
      }
    }
    return A || "/";
  }
  return {
    re: E,
    score: a,
    keys: y,
    parse: N,
    stringify: g
  };
}
function Ns(t, n) {
  let o = 0;
  for (; o < t.length && o < n.length; ) {
    const a = n[o] - t[o];
    if (a) return a;
    o++;
  }
  return t.length < n.length ? t.length === 1 && t[0] === he.Static + he.Segment ? -1 : 1 : t.length > n.length ? n.length === 1 && n[0] === he.Static + he.Segment ? 1 : -1 : 0;
}
function Ot(t, n) {
  let o = 0;
  const a = t.score, i = n.score;
  for (; o < a.length && o < i.length; ) {
    const y = Ns(a[o], i[o]);
    if (y) return y;
    o++;
  }
  if (Math.abs(i.length - a.length) === 1) {
    if (pt(a)) return 1;
    if (pt(i)) return -1;
  }
  return i.length - a.length;
}
function pt(t) {
  const n = t[t.length - 1];
  return t.length > 0 && n[n.length - 1] < 0;
}
const Os = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function Ms(t, n, o) {
  const a = js(Is(t.path), o), i = de(a, {
    record: t,
    parent: n,
    children: [],
    alias: []
  });
  return n && !i.record.aliasOf == !n.record.aliasOf && n.children.push(i), i;
}
function Vs(t, n) {
  const o = [], a = /* @__PURE__ */ new Map();
  n = ot(Os, n);
  function i(x) {
    return a.get(x);
  }
  function y(x, f, k) {
    const Y = !k, j = mt(x);
    j.aliasOf = k && k.record;
    const R = ot(n, x), U = [j];
    if ("alias" in x) {
      const L = typeof x.alias == "string" ? [x.alias] : x.alias;
      for (const le of L) U.push(mt(de({}, j, {
        components: k ? k.record.components : j.components,
        path: le,
        aliasOf: k ? k.record : j
      })));
    }
    let Q, G;
    for (const L of U) {
      const { path: le } = L;
      if (f && le[0] !== "/") {
        const ne = f.record.path, O = ne[ne.length - 1] === "/" ? "" : "/";
        L.path = f.record.path + (le && O + le);
      }
      if (Q = Ms(L, f, R), k ? k.alias.push(Q) : (G = G || Q, G !== Q && G.alias.push(Q), Y && x.name && !xt(Q) && E(x.name)), Mt(Q) && g(Q), j.children) {
        const ne = j.children;
        for (let O = 0; O < ne.length; O++) y(ne[O], Q, k && k.children[O]);
      }
      k = k || Q;
    }
    return G ? () => {
      E(G);
    } : Ve;
  }
  function E(x) {
    if (jt(x)) {
      const f = a.get(x);
      f && (a.delete(x), o.splice(o.indexOf(f), 1), f.children.forEach(E), f.alias.forEach(E));
    } else {
      const f = o.indexOf(x);
      f > -1 && (o.splice(f, 1), x.record.name && a.delete(x.record.name), x.children.forEach(E), x.alias.forEach(E));
    }
  }
  function N() {
    return o;
  }
  function g(x) {
    const f = Ds(x, o);
    o.splice(f, 0, x), x.record.name && !xt(x) && a.set(x.record.name, x);
  }
  function T(x, f) {
    let k, Y = {}, j, R;
    if ("name" in x && x.name) {
      if (k = a.get(x.name), !k) throw je(xe.MATCHER_NOT_FOUND, { location: x });
      R = k.record.name, Y = de(ft(f.params, k.keys.filter((G) => !G.optional).concat(k.parent ? k.parent.keys.filter((G) => G.optional) : []).map((G) => G.name)), x.params && ft(x.params, k.keys.map((G) => G.name))), j = k.stringify(Y);
    } else if (x.path != null)
      j = x.path, k = o.find((G) => G.re.test(j)), k && (Y = k.parse(j), R = k.record.name, k.keys.forEach((G) => {
        G.optional && !Y[G.name] && delete Y[G.name];
      }));
    else {
      if (k = f.name ? a.get(f.name) : o.find((G) => G.re.test(f.path)), !k) throw je(xe.MATCHER_NOT_FOUND, {
        location: x,
        currentLocation: f
      });
      R = k.record.name, Y = de({}, f.params, x.params), j = k.stringify(Y);
    }
    const U = [];
    let Q = k;
    for (; Q; )
      U.unshift(Q.record), Q = Q.parent;
    return {
      name: R,
      path: j,
      params: Y,
      matched: U,
      meta: Ps(U)
    };
  }
  t.forEach((x) => y(x));
  function A() {
    o.length = 0, a.clear();
  }
  return {
    addRoute: y,
    resolve: T,
    removeRoute: E,
    clearRoutes: A,
    getRoutes: N,
    getRecordMatcher: i
  };
}
function ft(t, n) {
  const o = {};
  for (const a of n) a in t && (o[a] = t[a]);
  return o;
}
function mt(t) {
  const n = {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: t.aliasOf,
    beforeEnter: t.beforeEnter,
    props: Us(t),
    children: t.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in t ? t.components || null : t.component && { default: t.component }
  };
  return Object.defineProperty(n, "mods", { value: {} }), n;
}
function Us(t) {
  const n = {}, o = t.props || !1;
  if ("component" in t) n.default = o;
  else for (const a in t.components) n[a] = typeof o == "object" ? o[a] : o;
  return n;
}
function xt(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function Ps(t) {
  return t.reduce((n, o) => de(n, o.meta), {});
}
function Ds(t, n) {
  let o = 0, a = n.length;
  for (; o !== a; ) {
    const y = o + a >> 1;
    Ot(t, n[y]) < 0 ? a = y : o = y + 1;
  }
  const i = zs(t);
  return i && (a = n.lastIndexOf(i, a - 1)), a;
}
function zs(t) {
  let n = t;
  for (; n = n.parent; ) if (Mt(n) && Ot(t, n) === 0) return n;
}
function Mt({ record: t }) {
  return !!(t.name || t.components && Object.keys(t.components).length || t.redirect);
}
function gt(t) {
  const n = re(Fe), o = re(st), a = ie(() => {
    const g = ge(t.to);
    return n.resolve(g);
  }), i = ie(() => {
    const { matched: g } = a.value, { length: T } = g, A = g[T - 1], x = o.matched;
    if (!A || !x.length) return -1;
    const f = x.findIndex(Ne.bind(null, A));
    if (f > -1) return f;
    const k = vt(g[T - 2]);
    return T > 1 && vt(A) === k && x[x.length - 1].path !== k ? x.findIndex(Ne.bind(null, g[T - 2])) : f;
  }), y = ie(() => i.value > -1 && Ws(o.params, a.value.params)), E = ie(() => i.value > -1 && i.value === o.matched.length - 1 && Bt(o.params, a.value.params));
  function N(g = {}) {
    if (Hs(g)) {
      const T = n[ge(t.replace) ? "replace" : "push"](ge(t.to)).catch(Ve);
      return t.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => T), T;
    }
    return Promise.resolve();
  }
  return {
    route: a,
    href: ie(() => a.value.href),
    isActive: y,
    isExactActive: E,
    navigate: N
  };
}
function Fs(t) {
  return t.length === 1 ? t[0] : t;
}
const Qs = /* @__PURE__ */ me({
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
  useLink: gt,
  setup(t, { slots: n }) {
    const o = Pt(gt(t)), { options: a } = re(Fe), i = ie(() => ({
      [ht(t.activeClass, a.linkActiveClass, "router-link-active")]: o.isActive,
      [ht(t.exactActiveClass, a.linkExactActiveClass, "router-link-exact-active")]: o.isExactActive
    }));
    return () => {
      const y = n.default && Fs(n.default(o));
      return t.custom ? y : _t("a", {
        "aria-current": o.isExactActive ? t.ariaCurrentValue : null,
        href: o.href,
        onClick: o.navigate,
        class: i.value
      }, y);
    };
  }
}), Gs = Qs;
function Hs(t) {
  if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const n = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(n)) return;
    }
    return t.preventDefault && t.preventDefault(), !0;
  }
}
function Ws(t, n) {
  for (const o in n) {
    const a = n[o], i = t[o];
    if (typeof a == "string") {
      if (a !== i) return !1;
    } else if (!ke(i) || i.length !== a.length || a.some((y, E) => y.valueOf() !== i[E].valueOf())) return !1;
  }
  return !0;
}
function vt(t) {
  return t ? t.aliasOf ? t.aliasOf.path : t.path : "";
}
const ht = (t, n, o) => t ?? n ?? o, Js = /* @__PURE__ */ me({
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
    const a = re(Ye), i = ie(() => t.route || a.value), y = re(lt, 0), E = ie(() => {
      let T = ge(y);
      const { matched: A } = i.value;
      let x;
      for (; (x = A[T]) && !x.components; ) T++;
      return T;
    }), N = ie(() => i.value.matched[E.value]);
    ye(lt, ie(() => E.value + 1)), ye(Jt, N), ye(Ye, i);
    const g = K();
    return we(() => [
      g.value,
      N.value,
      t.name
    ], ([T, A, x], [f, k, Y]) => {
      A && (A.instances[x] = T, k && k !== A && T && T === f && (A.leaveGuards.size || (A.leaveGuards = k.leaveGuards), A.updateGuards.size || (A.updateGuards = k.updateGuards))), T && A && (!k || !Ne(A, k) || !f) && (A.enterCallbacks[x] || []).forEach((j) => j(T));
    }, { flush: "post" }), () => {
      const T = i.value, A = t.name, x = N.value, f = x && x.components[A];
      if (!f) return bt(o.default, {
        Component: f,
        route: T
      });
      const k = x.props[A], Y = k ? k === !0 ? T.params : typeof k == "function" ? k(T) : k : null, R = _t(f, de({}, Y, n, {
        onVnodeUnmounted: (U) => {
          U.component.isUnmounted && (x.instances[A] = null);
        },
        ref: g
      }));
      return bt(o.default, {
        Component: R,
        route: T
      }) || R;
    };
  }
});
function bt(t, n) {
  if (!t) return null;
  const o = t(n);
  return o.length === 1 ? o[0] : o;
}
const Ks = Js;
function Ys(t) {
  const n = Vs(t.routes, t), o = t.parseQuery || _s, a = t.stringifyQuery || dt, i = t.history, y = Me(), E = Me(), N = Me(), g = Vt(Le);
  let T = Le;
  Be && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const A = Ge.bind(null, (r) => "" + r), x = Ge.bind(null, as), f = Ge.bind(null, ze);
  function k(r, $) {
    let h, B;
    return jt(r) ? (h = n.getRecordMatcher(r), B = $) : B = r, n.addRoute(B, h);
  }
  function Y(r) {
    const $ = n.getRecordMatcher(r);
    $ && n.removeRoute($);
  }
  function j() {
    return n.getRoutes().map((r) => r.record);
  }
  function R(r) {
    return !!n.getRecordMatcher(r);
  }
  function U(r, $) {
    if ($ = de({}, $ || g.value), typeof r == "string") {
      const D = He(o, r, $.path), V = n.resolve({ path: D.path }, $), ce = i.createHref(D.fullPath);
      return de(D, V, {
        params: f(V.params),
        redirectedFrom: void 0,
        href: ce
      });
    }
    let h;
    if (r.path != null)
      h = de({}, r, { path: He(o, r.path, $.path).path });
    else {
      const D = de({}, r.params);
      for (const V in D) D[V] == null && delete D[V];
      h = de({}, r, { params: x(D) }), $.params = x($.params);
    }
    const B = n.resolve(h, $), I = r.hash || "";
    B.params = A(f(B.params));
    const W = us(a, de({}, r, {
      hash: os(I),
      path: B.path
    })), z = i.createHref(W);
    return de({
      fullPath: W,
      hash: I,
      query: a === dt ? ks(r.query) : r.query || {}
    }, B, {
      redirectedFrom: void 0,
      href: z
    });
  }
  function Q(r) {
    return typeof r == "string" ? He(o, r, g.value.path) : de({}, r);
  }
  function G(r, $) {
    if (T !== r) return je(xe.NAVIGATION_CANCELLED, {
      from: $,
      to: r
    });
  }
  function L(r) {
    return O(r);
  }
  function le(r) {
    return L(de(Q(r), { replace: !0 }));
  }
  function ne(r, $) {
    const h = r.matched[r.matched.length - 1];
    if (h && h.redirect) {
      const { redirect: B } = h;
      let I = typeof B == "function" ? B(r, $) : B;
      return typeof I == "string" && (I = I.includes("?") || I.includes("#") ? I = Q(I) : { path: I }, I.params = {}), de({
        query: r.query,
        hash: r.hash,
        params: I.path != null ? {} : r.params
      }, I);
    }
  }
  function O(r, $) {
    const h = T = U(r), B = g.value, I = r.state, W = r.force, z = r.replace === !0, D = ne(h, B);
    if (D) return O(de(Q(D), {
      state: typeof D == "object" ? de({}, I, D.state) : I,
      force: W,
      replace: z
    }), $ || h);
    const V = h;
    V.redirectedFrom = $;
    let ce;
    return !W && cs(a, B, h) && (ce = je(xe.NAVIGATION_DUPLICATED, {
      to: V,
      from: B
    }), b(B, B, !0, !1)), (ce ? Promise.resolve(ce) : s(V, B)).catch((fe) => Te(fe) ? Te(fe, xe.NAVIGATION_GUARD_REDIRECT) ? fe : pe(fe) : te(fe, V, B)).then((fe) => {
      if (fe) {
        if (Te(fe, xe.NAVIGATION_GUARD_REDIRECT))
          return O(de({ replace: z }, Q(fe.to), {
            state: typeof fe.to == "object" ? de({}, I, fe.to.state) : I,
            force: W
          }), $ || V);
      } else fe = C(V, B, !0, z, I);
      return l(V, B, fe), fe;
    });
  }
  function Z(r, $) {
    const h = G(r, $);
    return h ? Promise.reject(h) : Promise.resolve();
  }
  function d(r) {
    const $ = w.values().next().value;
    return $ && typeof $.runWithContext == "function" ? $.runWithContext(r) : r();
  }
  function s(r, $) {
    let h;
    const [B, I, W] = $s(r, $);
    h = Je(B.reverse(), "beforeRouteLeave", r, $);
    for (const D of B) D.leaveGuards.forEach((V) => {
      h.push(Ie(V, r, $));
    });
    const z = Z.bind(null, r, $);
    return h.push(z), S(h).then(() => {
      h = [];
      for (const D of y.list()) h.push(Ie(D, r, $));
      return h.push(z), S(h);
    }).then(() => {
      h = Je(I, "beforeRouteUpdate", r, $);
      for (const D of I) D.updateGuards.forEach((V) => {
        h.push(Ie(V, r, $));
      });
      return h.push(z), S(h);
    }).then(() => {
      h = [];
      for (const D of W) if (D.beforeEnter) if (ke(D.beforeEnter)) for (const V of D.beforeEnter) h.push(Ie(V, r, $));
      else h.push(Ie(D.beforeEnter, r, $));
      return h.push(z), S(h);
    }).then(() => (r.matched.forEach((D) => D.enterCallbacks = {}), h = Je(W, "beforeRouteEnter", r, $, d), h.push(z), S(h))).then(() => {
      h = [];
      for (const D of E.list()) h.push(Ie(D, r, $));
      return h.push(z), S(h);
    }).catch((D) => Te(D, xe.NAVIGATION_CANCELLED) ? D : Promise.reject(D));
  }
  function l(r, $, h) {
    N.list().forEach((B) => d(() => B(r, $, h)));
  }
  function C(r, $, h, B, I) {
    const W = G(r, $);
    if (W) return W;
    const z = $ === Le, D = Be ? history.state : {};
    h && (B || z ? i.replace(r.fullPath, de({ scroll: z && D && D.scroll }, I)) : i.push(r.fullPath, I)), g.value = r, b(r, $, h, z), pe();
  }
  let _;
  function P() {
    _ || (_ = i.listen((r, $, h) => {
      if (!u.listening) return;
      const B = U(r), I = ne(B, u.currentRoute.value);
      if (I) {
        O(de(I, {
          replace: !0,
          force: !0
        }), B).catch(Ve);
        return;
      }
      T = B;
      const W = g.value;
      Be && bs(it(W.fullPath, h.delta), Qe()), s(B, W).catch((z) => Te(z, xe.NAVIGATION_ABORTED | xe.NAVIGATION_CANCELLED) ? z : Te(z, xe.NAVIGATION_GUARD_REDIRECT) ? (O(de(Q(z.to), { force: !0 }), B).then((D) => {
        Te(D, xe.NAVIGATION_ABORTED | xe.NAVIGATION_DUPLICATED) && !h.delta && h.type === Xe.pop && i.go(-1, !1);
      }).catch(Ve), Promise.reject()) : (h.delta && i.go(-h.delta, !1), te(z, B, W))).then((z) => {
        z = z || C(B, W, !1), z && (h.delta && !Te(z, xe.NAVIGATION_CANCELLED) ? i.go(-h.delta, !1) : h.type === Xe.pop && Te(z, xe.NAVIGATION_ABORTED | xe.NAVIGATION_DUPLICATED) && i.go(-1, !1)), l(B, W, z);
      }).catch(Ve);
    }));
  }
  let H = Me(), J = Me(), F;
  function te(r, $, h) {
    pe(r);
    const B = J.list();
    return B.length ? B.forEach((I) => I(r, $, h)) : console.error(r), Promise.reject(r);
  }
  function ue() {
    return F && g.value !== Le ? Promise.resolve() : new Promise((r, $) => {
      H.add([r, $]);
    });
  }
  function pe(r) {
    return F || (F = !r, P(), H.list().forEach(([$, h]) => r ? h(r) : $()), H.reset()), r;
  }
  function b(r, $, h, B) {
    const { scrollBehavior: I } = t;
    if (!Be || !I) return Promise.resolve();
    const W = !h && ws(it(r.fullPath, 0)) || (B || !h) && history.state && history.state.scroll || null;
    return Ke().then(() => I(r, $, W)).then((z) => z && hs(z)).catch((z) => te(z, r, $));
  }
  const c = (r) => i.go(r);
  let p;
  const w = /* @__PURE__ */ new Set(), u = {
    currentRoute: g,
    listening: !0,
    addRoute: k,
    removeRoute: Y,
    clearRoutes: n.clearRoutes,
    hasRoute: R,
    getRoutes: j,
    resolve: U,
    options: t,
    push: L,
    replace: le,
    go: c,
    back: () => c(-1),
    forward: () => c(1),
    beforeEach: y.add,
    beforeResolve: E.add,
    afterEach: N.add,
    onError: J.add,
    isReady: ue,
    install(r) {
      r.component("RouterLink", Gs), r.component("RouterView", Ks), r.config.globalProperties.$router = u, Object.defineProperty(r.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ge(g)
      }), Be && !p && g.value === Le && (p = !0, L(i.location).catch((B) => {
      }));
      const $ = {};
      for (const B in Le) Object.defineProperty($, B, {
        get: () => g.value[B],
        enumerable: !0
      });
      r.provide(Fe, u), r.provide(st, Ut($)), r.provide(Ye, g);
      const h = r.unmount;
      w.add(r), r.unmount = function() {
        w.delete(r), w.size < 1 && (T = Le, _ && _(), _ = null, g.value = Le, p = !1, F = !1), h();
      };
    }
  };
  function S(r) {
    return r.reduce(($, h) => $.then(() => d(h)), Promise.resolve());
  }
  return u;
}
const Zs = { class: "min-h-screen bg-[#525355] flex justify-center p-0 md:p-4" }, Xs = /* @__PURE__ */ me({
  __name: "CopyrightContent",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = _e(), o = Ee(), a = () => {
      n.push(`/test/hardware/${o.params.testId}`);
    };
    return (async () => (t._p.my.emitter = t._p.f.new_emitter(), t._p.my.emitter.on("msg", async (i) => {
      console.log("_p.my.emitter.on", i);
    }), await t._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: t._p,
      _pp: t._pp
    }), t._p.f.listen("msg", async (i) => {
      console.log("_p.f.listen", i);
    }), setTimeout(async () => {
      await t._p.f.call("msg", {
        type: "on:change",
        _p: t._p,
        _pp: t._pp
      });
    }, 500)))(), (i, y) => (m(), v("div", Zs, [
      e("div", { class: "w-full max-w-[1200px] flex flex-col shadow-lg overflow-hidden md:rounded-lg bg-white" }, [
        e("header", { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 shrink-0" }, [
          e("button", {
            class: "bg-white text-[#00796B] border-none rounded-full px-5 md:px-6 py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-all active:scale-95 shadow-sm",
            onClick: a
          }, [...y[0] || (y[0] = [
            q(" Continue ", -1),
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
        y[1] || (y[1] = Ce('<main class="flex-grow px-6 py-10 md:px-20 md:py-16 overflow-y-auto"><h1 class="text-2xl md:text-3xl font-medium text-[#333333] mb-4 md:mb-5">Copyright Information</h1><hr class="border-t border-[#e0e0e0] mb-8 md:mb-10"><div class="text-[#444444] text-[16px] md:text-[18px] leading-[1.8] space-y-6 md:space-y-8 max-w-4xl"><div class="flex gap-4 items-start"><div class="mt-1 bg-teal-50 p-2 rounded-lg text-[#00796B]"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 21a11.955 11.955 0 01-9.618-7.016m19.236 0A11.955 11.955 0 0012 3a11.955 11.955 0 00-9.618 7.016"></path></svg></div><p> Copyright © 2025 by ETS. TOEFL and TOEFL iBT are registered trademarks of ETS in the United States and other countries. The Eight-Point logo is a trademark of ETS. All other trademarks are property of their respective owners. </p></div><div class="flex gap-4 items-start"><div class="mt-1 bg-teal-50 p-2 rounded-lg text-[#00796B]"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></div><p> This TOEFL iBT® test, its test delivery system, and all questions contained in the following program are the unpublished confidential and proprietary materials of ETS. No reproduction or disclosure permitted. Unauthorized reproduction in part or in whole of this test is prohibited. Violators will be prosecuted to the full extent of applicable laws. </p></div></div></main>', 1))
      ])
    ]));
  }
}), qs = /* @__PURE__ */ me({
  __name: "copywrite",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (i, y) => (m(), Ae(Xs, {
      _p: ge(o),
      _pp: ge(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), en = { class: "min-h-screen bg-[#525355] flex justify-center p-0 md:p-4" }, tn = /* @__PURE__ */ me({
  __name: "HardwareCheckContent",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = _e(), o = Ee(), a = () => {
      n.push(`/test/microphone/${o.params.testId}`);
    };
    return (async () => (t._p.my.emitter = t._p.f.new_emitter(), t._p.my.emitter.on("msg", async (i) => {
      console.log("_p.my.emitter.on", i);
    }), await t._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: t._p,
      _pp: t._pp
    }), t._p.f.listen("msg", async (i) => {
      console.log("_p.f.listen", i);
    }), setTimeout(async () => {
      await t._p.f.call("msg", {
        type: "on:change",
        _p: t._p,
        _pp: t._pp
      });
    }, 500)))(), (i, y) => (m(), v("div", en, [
      e("div", { class: "w-full max-w-[1200px] flex flex-col shadow-lg overflow-hidden md:rounded-lg bg-white" }, [
        e("header", { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 shrink-0" }, [
          e("button", {
            class: "bg-white text-[#00796B] border-none rounded-full px-5 md:px-6 py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-all active:scale-95 shadow-sm",
            onClick: a
          }, [...y[0] || (y[0] = [
            q(" Continue ", -1),
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
        y[1] || (y[1] = Ce('<main class="flex-grow px-6 py-10 md:px-20 md:py-16 overflow-y-auto"><h1 class="text-2xl md:text-3xl font-medium text-[#333333] mb-4 md:mb-5">Hardware Check</h1><hr class="border-t border-[#e0e0e0] mb-8 md:mb-10"><p class="text-[#444444] text-[16px] md:text-[18px] mb-8 md:mb-12 leading-relaxed"> Before the test begins, we will check the microphone and headset volume. </p><div class="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-16 mb-12 md:mb-16 text-[#00796B]"><div class="flex flex-col items-center gap-4 group transition-transform hover:scale-105"><div class="w-20 h-20 md:w-24 md:h-24 bg-teal-50 rounded-2xl flex items-center justify-center shadow-sm border border-teal-100"><svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"></path><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"></path></svg></div><span class="text-xs font-bold uppercase tracking-wider text-teal-700">Microphone</span></div><div class="flex flex-col items-center gap-4 group transition-transform hover:scale-105"><div class="w-20 h-20 md:w-24 md:h-24 bg-teal-50 rounded-2xl flex items-center justify-center shadow-sm border border-teal-100"><svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 00-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 00-9-9z"></path></svg></div><span class="text-xs font-bold uppercase tracking-wider text-teal-700">Headset</span></div><div class="flex flex-col items-center gap-4 group transition-transform hover:scale-105"><div class="w-20 h-20 md:w-24 md:h-24 bg-teal-50 rounded-2xl flex items-center justify-center shadow-sm border border-teal-100"><svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg></div><span class="text-xs font-bold uppercase tracking-wider text-teal-700">Volume</span></div></div><div class="bg-gray-50 border-l-4 border-[#00796B] p-6 md:p-8 rounded-r-xl max-w-3xl"><p class="text-[#444444] text-[15px] md:text-[17px] leading-[1.7]"> Please make sure your headset is on. Follow the instructions on each screen. Be sure that your microphone is properly positioned and adjusted to allow for the best possible recording. Speak directly into the microphone and in your normal speaking voice. </p></div></main>', 1))
      ])
    ]));
  }
}), sn = /* @__PURE__ */ me({
  __name: "hardware-check",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (i, y) => (m(), Ae(tn, {
      _p: ge(o),
      _pp: ge(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), nn = { class: "min-h-screen bg-[#525355] flex justify-center p-0 md:p-4" }, on = { class: "w-full max-w-[1200px] flex flex-col shadow-lg overflow-hidden md:rounded-lg" }, ln = { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 gap-2 md:gap-4 shrink-0" }, rn = { class: "relative flex items-center" }, an = {
  key: 0,
  class: "absolute top-[120%] right-0 bg-white rounded-xl shadow-xl border border-gray-300 p-5 w-64 md:w-72 z-50 flex flex-col"
}, dn = { class: "flex items-end justify-between h-10 gap-[2px] mb-3 mt-2 px-1" }, un = `
  Adjusting the Volume.
  To adjust the volume, select the Volume icon at the top of the screen. The volume control will appear. Move the volume indicator to the left or the right to change the volume.
  To close the volume control, select the Volume icon again.
  You will be able to change the volume during the test if you need to.
  You now have the option to adjust the volume.
`, cn = /* @__PURE__ */ me({
  __name: "AdjustVolumeContent",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = _e(), o = K(!1), a = K(50);
    let i = null;
    const y = () => {
      "speechSynthesis" in window && (window.speechSynthesis.cancel(), i = new SpeechSynthesisUtterance(un), i.volume = a.value / 100, i.rate = 0.9, i.onend = () => {
        window.speechSynthesis.speak(i);
      }, window.speechSynthesis.speak(i));
    }, E = () => {
      i && "speechSynthesis" in window && (i.volume = a.value / 100, window.speechSynthesis.speaking && (window.speechSynthesis.pause(), window.speechSynthesis.resume()));
    };
    tt(() => {
      y();
    }), Ue(() => {
      "speechSynthesis" in window && window.speechSynthesis.cancel();
    });
    const N = () => {
      "speechSynthesis" in window && window.speechSynthesis.cancel(), n.push("/microphone");
    };
    return (g, T) => (m(), v("div", nn, [
      e("div", on, [
        e("header", ln, [
          e("div", rn, [
            e("button", {
              onClick: T[0] || (T[0] = (A) => o.value = !o.value),
              class: be(["rounded-full px-4 md:px-5 py-1.5 md:py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-2 transition-colors border", o.value ? "bg-white text-[#00796B] border-white" : "bg-transparent text-white border-white hover:bg-white hover:text-[#00796B]"])
            }, [...T[3] || (T[3] = [
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
            o.value ? (m(), v("div", an, [
              e("button", {
                onClick: T[1] || (T[1] = (A) => o.value = !1),
                class: "absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-sm font-bold"
              }, " ✕ "),
              e("div", dn, [
                (m(), v(oe, null, ae(20, (A) => e("div", {
                  key: A,
                  class: be(["w-[6px] rounded-full transition-colors duration-150", A * 5 <= a.value ? "bg-[#00796B]" : "bg-[#00796B]/20"]),
                  style: Se({ height: `${20 + A * 4}%` })
                }, null, 6)), 64))
              ]),
              X(e("input", {
                type: "range",
                "onUpdate:modelValue": T[2] || (T[2] = (A) => a.value = A),
                onInput: E,
                min: "0",
                max: "100",
                class: "w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer custom-slider"
              }, null, 544), [
                [ee, a.value]
              ])
            ])) : se("", !0)
          ]),
          e("button", {
            class: "bg-white text-[#00796B] border-none rounded-full px-4 md:px-5 py-1.5 md:py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-colors",
            onClick: N
          }, [...T[4] || (T[4] = [
            q(" Continue ", -1),
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
        T[5] || (T[5] = Ce('<main class="bg-white flex-grow px-6 py-10 md:px-20 md:py-16 overflow-y-auto" data-v-f59b18f0><div class="text-[14px] md:text-[16px] text-[#333333] mb-4 md:mb-8" data-v-f59b18f0> Reading </div><h1 class="text-2xl md:text-[28px] font-normal text-[#333333] mb-4 md:mb-5" data-v-f59b18f0>Adjusting the Volume</h1><hr class="border-t border-[#e0e0e0] mb-6 md:mb-8" data-v-f59b18f0><div class="text-[#444444] text-[15px] md:text-[16px] leading-[1.6] space-y-4 md:space-y-6 max-w-4xl" data-v-f59b18f0><p data-v-f59b18f0> To adjust the volume, select the <strong data-v-f59b18f0>Volume</strong> icon at the top of the screen. The volume control will appear. Move the volume indicator to the left or the right to change the volume. </p><p data-v-f59b18f0> To close the volume control, select the <strong data-v-f59b18f0>Volume</strong> icon again. </p><p data-v-f59b18f0> You will be able to change the volume during the test if you need to. </p></div><div class="flex items-center gap-4 mt-8 md:mt-10" data-v-f59b18f0><svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 md:w-16 md:h-16 text-[#00796B]" viewBox="0 0 20 20" fill="currentColor" data-v-f59b18f0><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" data-v-f59b18f0></path></svg><p class="text-[#444444] text-[15px] md:text-[16px]" data-v-f59b18f0> You now have the option to adjust the volume. </p></div></main>', 1))
      ])
    ]));
  }
}), Pe = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [a, i] of n)
    o[a] = i;
  return o;
}, pn = /* @__PURE__ */ Pe(cn, [["__scopeId", "data-v-f59b18f0"]]), fn = /* @__PURE__ */ me({
  __name: "volume",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (i, y) => (m(), Ae(pn, {
      _p: ge(o),
      _pp: ge(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), mn = { class: "min-h-screen bg-[#525355] flex justify-center p-0 md:p-4" }, xn = { class: "w-full max-w-[1200px] flex flex-col shadow-lg overflow-hidden md:rounded-lg relative" }, gn = { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 gap-2 md:gap-4 shrink-0" }, vn = { class: "relative flex items-center" }, hn = {
  key: 0,
  class: "absolute top-[120%] right-0 bg-white rounded-xl shadow-xl border border-gray-300 p-5 w-64 md:w-72 z-50 flex flex-col"
}, bn = { class: "flex items-end justify-between h-10 gap-[2px] mb-3 mt-2 px-1" }, wn = { class: "bg-white flex-grow px-6 py-10 md:px-20 md:py-16 overflow-y-auto" }, yn = { class: "flex flex-col md:flex-row justify-between gap-10 md:gap-4 max-w-4xl mx-auto md:mx-0" }, _n = { class: "flex flex-col items-center gap-6 md:gap-8 flex-1" }, kn = { class: "relative flex gap-[2px]" }, $n = { class: "flex flex-col items-center gap-6 md:gap-8 flex-1" }, Cn = { class: "relative flex gap-[2px]" }, An = {
  key: 0,
  class: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
}, Tn = { class: "bg-white rounded-2xl md:rounded-[2rem] shadow-2xl w-full max-w-4xl p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-10 relative max-h-[90vh] overflow-y-auto" }, Sn = { class: "flex-shrink-0 flex items-center justify-center" }, En = { class: "rounded-full border-[4px] md:border-[6px] border-[#A5D6D1] bg-white p-1 shadow-sm" }, Ln = ["disabled"], In = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-10 h-10 md:w-14 md:h-14 mb-2",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Rn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-10 h-10 md:w-14 md:h-14 mb-2",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Bn = { class: "flex-grow flex flex-col justify-center" }, jn = { class: "relative w-max mx-auto md:mx-0 mt-2 md:mt-4" }, Nn = { class: "flex gap-1 relative z-10" }, On = {
  key: 1,
  class: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
}, Mn = { class: "bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-[400px] p-6 md:p-10 flex flex-col items-center relative text-center" }, Vn = `
  Adjusting the Microphone.
  In order to check your microphone volume, you will speak into the microphone using your normal tone and volume. 
  For best recording results, your voice level should remain generally within the Good Range. 
  While you speak the microphone will adjust automatically.
  Please look at the example on the screen showing the Good range and the Too Loud range.
`, Un = /* @__PURE__ */ me({
  __name: "AdjustMicrophoneContent",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = _e(), o = Ee(), a = K(!1), i = K(50);
    let y = null;
    const E = K(!1), N = K(!1), g = K("ready"), T = K(3), A = K(0);
    let x = null, f = null, k = null, Y, j;
    const R = () => {
      "speechSynthesis" in window && (window.speechSynthesis.cancel(), y = new SpeechSynthesisUtterance(Vn), y.volume = i.value / 100, y.rate = 0.9, y.onend = () => {
        E.value = !0;
      }, window.speechSynthesis.speak(y));
    }, U = () => {
      y && "speechSynthesis" in window && (y.volume = i.value / 100, window.speechSynthesis.speaking && (window.speechSynthesis.pause(), window.speechSynthesis.resume()));
    }, Q = ie(() => g.value === "countdown"), G = ie(() => g.value === "ready" ? "RECORD" : g.value === "countdown" ? T.value.toString() : "STOP"), L = ie(() => g.value === "recording" ? "bg-[#C8102E] shadow-[0_0_20px_rgba(200,16,46,0.6)]" : g.value === "countdown" ? "bg-[#00796B] opacity-80 cursor-default" : "bg-[#00796B] hover:bg-[#006055]"), le = () => {
      g.value === "ready" ? ne() : g.value === "recording" && Z();
    }, ne = () => {
      g.value = "countdown", T.value = 3;
      const l = setInterval(() => {
        T.value--, T.value <= 0 && (clearInterval(l), O());
      }, 1e3);
    }, O = async () => {
      try {
        k = await navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }), g.value = "recording";
        const l = window.AudioContext || window.webkitAudioContext;
        x = new l(), f = x.createAnalyser();
        const C = x.createMediaStreamSource(k);
        f.smoothingTimeConstant = 0.5, f.fftSize = 256, C.connect(f);
        const _ = new Uint8Array(f.frequencyBinCount), P = () => {
          if (g.value !== "recording") return;
          f.getByteFrequencyData(_);
          let H = 0;
          for (let te = 0; te < _.length; te++) H += _[te];
          const J = H / _.length;
          let F = Math.floor(J / 40 * 14);
          F > 14 && (F = 14), A.value = F, Y = requestAnimationFrame(P);
        };
        P(), j = setTimeout(() => {
          Z();
        }, 1e4);
      } catch (l) {
        console.error("Mic error:", l), alert("Microphone access is required."), g.value = "ready";
      }
    }, Z = () => {
      g.value = "ready", A.value = 0, j && clearTimeout(j), Y && cancelAnimationFrame(Y), k && (k.getTracks().forEach((l) => l.stop()), k = null), x && x.state !== "closed" && (x.close(), x = null), E.value = !1, N.value = !0;
    }, d = (l) => l > A.value ? "border-gray-400 bg-transparent" : l <= 10 ? "border-[#00796B] bg-[#00796B]" : "border-[#C8102E] bg-[#C8102E]";
    tt(() => {
      R();
    }), Ue(() => {
      "speechSynthesis" in window && window.speechSynthesis.cancel(), g.value === "recording" && Z();
    });
    const s = () => {
      "speechSynthesis" in window && window.speechSynthesis.cancel(), n.push(`/reading-section/${o.params.testId}`);
    };
    return (l, C) => (m(), v("div", mn, [
      e("div", xn, [
        e("header", gn, [
          e("div", vn, [
            e("button", {
              onClick: C[0] || (C[0] = (_) => a.value = !a.value),
              class: be(["rounded-full px-4 md:px-5 py-1.5 md:py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-2 transition-colors border", a.value ? "bg-white text-[#00796B] border-white" : "bg-transparent text-white border-white hover:bg-white hover:text-[#00796B]"])
            }, [...C[4] || (C[4] = [
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
            a.value ? (m(), v("div", hn, [
              e("button", {
                onClick: C[1] || (C[1] = (_) => a.value = !1),
                class: "absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-sm font-bold"
              }, "✕"),
              e("div", bn, [
                (m(), v(oe, null, ae(20, (_) => e("div", {
                  key: _,
                  class: be(["w-[6px] rounded-full transition-colors duration-150", _ * 5 <= i.value ? "bg-[#00796B]" : "bg-[#00796B]/20"]),
                  style: Se({ height: `${20 + _ * 4}%` })
                }, null, 6)), 64))
              ]),
              X(e("input", {
                type: "range",
                "onUpdate:modelValue": C[2] || (C[2] = (_) => i.value = _),
                onInput: U,
                min: "0",
                max: "100",
                class: "w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer custom-slider"
              }, null, 544), [
                [ee, i.value]
              ])
            ])) : se("", !0)
          ]),
          e("button", {
            class: "bg-white text-[#00796B] border-none rounded-full px-4 md:px-5 py-1.5 md:py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-colors",
            onClick: s
          }, [...C[5] || (C[5] = [
            q(" Continue ", -1),
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
        e("main", wn, [
          C[15] || (C[15] = Ce('<div class="text-[14px] md:text-[16px] text-[#333333] mb-4 md:mb-8" data-v-27c57e51>Reading</div><h1 class="text-2xl md:text-[28px] font-normal text-[#333333] mb-4 md:mb-5" data-v-27c57e51>Adjusting the Microphone</h1><hr class="border-t border-[#e0e0e0] mb-6 md:mb-8" data-v-27c57e51><div class="text-[#444444] text-[15px] md:text-[16px] leading-[1.6] space-y-4 md:space-y-6 max-w-4xl mb-8 md:mb-10" data-v-27c57e51><p data-v-27c57e51> In order to check your <strong data-v-27c57e51>microphone volume</strong>, you will speak into the microphone using your normal tone and volume. For best recording results, your voice level should remain generally within the Good Range. While you speak the microphone will adjust automatically. </p><p class="font-bold" data-v-27c57e51>Example:</p></div>', 4)),
          e("div", yn, [
            e("div", _n, [
              e("div", kn, [
                C[6] || (C[6] = e("div", { class: "absolute inset-y-0 left-[35%] border-l border-dashed border-gray-400" }, null, -1)),
                C[7] || (C[7] = e("div", { class: "absolute inset-y-0 right-[35%] border-l border-dashed border-gray-400" }, null, -1)),
                (m(), v(oe, null, ae(6, (_) => e("div", {
                  key: "g1-" + _,
                  class: "w-2.5 md:w-3 h-8 bg-[#00796B] rounded-sm"
                })), 64)),
                (m(), v(oe, null, ae(3, (_) => e("div", {
                  key: "g2-" + _,
                  class: "w-2.5 md:w-3 h-8 bg-[#00796B] rounded-sm"
                })), 64)),
                (m(), v(oe, null, ae(9, (_) => e("div", {
                  key: "g3-" + _,
                  class: "w-2.5 md:w-3 h-8 border border-gray-400 rounded-sm"
                })), 64))
              ]),
              C[8] || (C[8] = e("div", { class: "flex w-full justify-between text-xs md:text-sm text-gray-500 font-medium px-1 md:px-2" }, [
                e("span", null, "Too Quiet"),
                e("span", null, "Good"),
                e("span", null, "Too Loud")
              ], -1)),
              C[9] || (C[9] = e("div", { class: "flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-semibold text-[#444]" }, [
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
                q(" Good ")
              ], -1))
            ]),
            e("div", $n, [
              e("div", Cn, [
                C[10] || (C[10] = e("div", { class: "absolute inset-y-0 left-[35%] border-l border-dashed border-gray-400" }, null, -1)),
                C[11] || (C[11] = e("div", { class: "absolute inset-y-0 right-[35%] border-l border-dashed border-gray-400" }, null, -1)),
                (m(), v(oe, null, ae(17, (_) => e("div", {
                  key: "r1-" + _,
                  class: "w-2.5 md:w-3 h-8 bg-[#C8102E] rounded-sm"
                })), 64)),
                C[12] || (C[12] = e("div", { class: "w-2.5 md:w-3 h-8 border border-gray-400 rounded-sm" }, null, -1))
              ]),
              C[13] || (C[13] = e("div", { class: "flex w-full justify-between text-xs md:text-sm text-gray-500 font-medium px-1 md:px-2" }, [
                e("span", null, "Too Quiet"),
                e("span", null, "Good"),
                e("span", null, "Too Loud")
              ], -1)),
              C[14] || (C[14] = e("div", { class: "flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-semibold text-[#444]" }, [
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
                q(" Too Loud ")
              ], -1))
            ])
          ])
        ]),
        E.value ? (m(), v("div", An, [
          e("div", Tn, [
            e("div", Sn, [
              e("div", En, [
                e("button", {
                  onClick: le,
                  class: be(["rounded-full w-32 h-32 md:w-48 md:h-48 flex flex-col justify-center items-center text-white transition-all duration-300", L.value]),
                  disabled: Q.value
                }, [
                  g.value === "ready" ? (m(), v("svg", In, [...C[16] || (C[16] = [
                    e("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    }, null, -1)
                  ])])) : se("", !0),
                  g.value === "recording" ? (m(), v("svg", Rn, [...C[17] || (C[17] = [
                    e("rect", {
                      x: "6",
                      y: "6",
                      width: "12",
                      height: "12",
                      rx: "2",
                      ry: "2"
                    }, null, -1)
                  ])])) : se("", !0),
                  e("span", {
                    class: be(g.value === "countdown" ? "text-4xl md:text-6xl font-bold" : "text-lg md:text-xl font-semibold tracking-wider")
                  }, M(G.value), 3)
                ], 10, Ln)
              ])
            ]),
            e("div", Bn, [
              C[20] || (C[20] = e("div", { class: "text-[#444444] text-[14px] md:text-[15px] leading-relaxed space-y-3 md:space-y-4 mb-6 md:mb-8" }, [
                e("p", null, "Select the 'Record' button. A timer will count down until the system is ready to record."),
                e("p", null, "To check your microphone level, you will record the following paragraph using your normal tone and volume."),
                e("p", { class: "text-gray-600 italic border-l-4 border-teal-500 pl-4 py-1" }, " There are several reasons why I would prefer to live in a large city. Some of the greatest advantages would include the number of job opportunities and career options, public transportation, greater diversity, and a wealth of entertainment. Also, large cities typically have a great deal to offer in terms of history, art and culture. ")
              ], -1)),
              e("div", jn, [
                C[18] || (C[18] = e("div", { class: "absolute inset-y-0 left-[35px] right-[70px] bg-gray-100 border-x border-gray-400 -z-10" }, null, -1)),
                e("div", Nn, [
                  (m(), v(oe, null, ae(14, (_) => e("div", {
                    key: _,
                    class: be(["w-[14px] md:w-[18px] h-8 md:h-10 border rounded-[2px] transition-colors duration-75", d(_)])
                  }, null, 2)), 64))
                ]),
                C[19] || (C[19] = e("div", { class: "flex justify-between w-full mt-2 text-[10px] md:text-sm text-gray-600 font-medium" }, [
                  e("span", { class: "w-[35px] text-center leading-tight" }, [
                    q("Too"),
                    e("br"),
                    q("Quiet")
                  ]),
                  e("span", { class: "flex-grow text-center mt-1 md:mt-2" }, "Good"),
                  e("span", { class: "w-[70px] text-center leading-tight" }, [
                    q("Too"),
                    e("br"),
                    q("Loud")
                  ])
                ], -1))
              ])
            ])
          ])
        ])) : se("", !0),
        N.value ? (m(), v("div", On, [
          e("div", Mn, [
            C[21] || (C[21] = Ce('<div class="flex items-center justify-center gap-3 w-full border-b pb-4 mb-6" data-v-27c57e51><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#00796B]" viewBox="0 0 20 20" fill="currentColor" data-v-27c57e51><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-27c57e51></path></svg><h2 class="text-lg md:text-xl font-semibold text-[#333]" data-v-27c57e51>Success</h2></div><p class="text-[#444] text-[14px] md:text-[15px] mb-8 px-2 md:px-4" data-v-27c57e51> Your microphone volume has been successfully adjusted. </p>', 2)),
            e("button", {
              onClick: C[3] || (C[3] = (_) => N.value = !1),
              class: "w-full md:w-auto bg-[#00796B] hover:bg-[#006055] text-white rounded-full px-8 py-2.5 text-[15px] font-medium transition-colors"
            }, " Continue ")
          ])
        ])) : se("", !0)
      ])
    ]));
  }
}), Pn = /* @__PURE__ */ Pe(Un, [["__scopeId", "data-v-27c57e51"]]), Dn = /* @__PURE__ */ me({
  __name: "AdjustMicrophone",
  setup(t) {
    const n = {}, o = {};
    return (a, i) => (m(), Ae(Pn, {
      _p: n,
      _pp: o
    }));
  }
}), zn = { class: "min-h-screen bg-[#525355] flex justify-center p-0 md:p-4" }, Fn = /* @__PURE__ */ me({
  __name: "Module1Intro",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = _e(), o = () => {
      n.push("/reading-section");
    };
    return (async () => (t._p.my.emitter = t._p.f.new_emitter(), t._p.my.emitter.on("msg", async (a) => {
      console.log("_p.my.emitter.on", a);
    }), await t._p.my.emitter.emit("msg", { type: "on:change", _p: t._p, _pp: t._pp }), t._p.f.listen("msg", async (a) => {
      console.log("_p.f.listen", a);
    }), setTimeout(async () => {
      await t._p.f.call("msg", { type: "on:change", _p: t._p, _pp: t._pp });
    }, 500)))(), (a, i) => (m(), v("div", zn, [
      e("div", { class: "w-full max-w-[1200px] flex flex-col shadow-lg overflow-hidden md:rounded-lg" }, [
        e("header", { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 gap-2 md:gap-4 shrink-0" }, [
          i[1] || (i[1] = e("button", { class: "bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded-full px-4 md:px-5 py-1.5 md:py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-2 transition-colors" }, [
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
          }, [...i[0] || (i[0] = [
            q(" Begin ", -1),
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
        i[2] || (i[2] = Ce('<main class="bg-white flex-grow px-6 py-10 md:px-20 md:py-16 overflow-y-auto"><div class="text-[14px] md:text-[16px] text-[#333333] mb-4 md:mb-8">Reading</div><h1 class="text-2xl md:text-[28px] font-normal text-[#333333] mb-4 md:mb-5">Module 1</h1><hr class="border-t border-[#e0e0e0] mb-6 md:mb-8"><div class="text-[#444444] text-[15px] md:text-[16px] leading-[1.6] space-y-4 md:space-y-6 max-w-4xl"><p> In an actual test, the clock will show you how much time you have to complete Module 1. </p><p> In an actual test, you WILL NOT be able to return to Module 1 once you have begun Module 2. </p></div></main>', 1))
      ])
    ]));
  }
}), Qn = /* @__PURE__ */ me({
  __name: "intro",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (i, y) => (m(), Ae(Fn, {
      _p: ge(o),
      _pp: ge(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), Gn = { class: "min-h-screen bg-[#525355] flex justify-center p-0 md:p-4" }, Hn = /* @__PURE__ */ me({
  __name: "ListeningModuleIntro",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = _e(), o = () => {
      n.push("/listening-section");
    };
    return (async () => t._p && t._p.f && (t._p.my.emitter = t._p.f.new_emitter(), t._p.my.emitter.on("msg", async (a) => {
      console.log("_p.my.emitter.on", a);
    }), await t._p.my.emitter.emit("msg", { type: "on:change", _p: t._p, _pp: t._pp }), t._p.f.listen("msg", async (a) => {
      console.log("_p.f.listen", a);
    }), setTimeout(async () => {
      await t._p.f.call("msg", { type: "on:change", _p: t._p, _pp: t._pp });
    }, 500)))(), (a, i) => (m(), v("div", Gn, [
      e("div", { class: "w-full max-w-[1200px] flex flex-col shadow-lg overflow-hidden md:rounded-lg bg-white" }, [
        e("header", { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 gap-2 md:gap-4 shrink-0" }, [
          i[1] || (i[1] = e("button", { class: "bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded-full px-4 md:px-5 py-1.5 md:py-2 text-[15px] md:text-[16px] font-medium cursor-pointer flex items-center gap-2 transition-colors" }, [
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
          }, [...i[0] || (i[0] = [
            q(" Begin ", -1),
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
        i[2] || (i[2] = Ce('<main class="bg-white flex-grow px-6 py-10 md:px-20 md:py-16 overflow-y-auto"><div class="text-[14px] md:text-[16px] text-[#333333] mb-4 md:mb-8">Listening</div><h1 class="text-2xl md:text-[28px] font-normal text-[#333333] mb-4 md:mb-5">Module 1</h1><hr class="border-t border-[#e0e0e0] mb-6 md:mb-8"><div class="text-[#444444] text-[15px] md:text-[16px] leading-[1.6] space-y-4 md:space-y-6 max-w-4xl"><p> In an actual test, the clock will show you how much time you have to complete each question. </p><p> You can use <strong>Next</strong> to move to the next question. </p><p> The first task is <strong>Listen and Choose a Response</strong>. In this task, you will listen to a sentence or question. You will then read four sentences and choose the option that is the best response. </p></div></main>', 1))
      ])
    ]));
  }
}), Wn = /* @__PURE__ */ me({
  __name: "listening-intro",
  setup(t) {
    const n = {}, o = {};
    return (a, i) => (m(), Ae(Hn, {
      _p: n,
      _pp: o
    }));
  }
}), Jn = { class: "min-h-screen bg-[#525355] flex justify-center font-sans p-0 md:p-4" }, Kn = { class: "w-full max-w-[1200px] min-h-screen md:min-h-[700px] md:h-[90vh] flex flex-col shadow-lg overflow-hidden md:rounded-lg relative bg-white" }, Yn = { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 gap-2 md:gap-3 shrink-0" }, Zn = { class: "relative flex items-center" }, Xn = {
  key: 0,
  class: "absolute top-[120%] right-0 bg-white rounded-xl shadow-xl border border-gray-300 p-5 w-64 md:w-72 z-50 flex flex-col"
}, qn = { class: "flex items-end justify-between h-10 gap-[2px] mb-3 mt-2 px-1" }, eo = ["disabled"], to = ["disabled"], so = ["disabled"], no = {
  key: 0,
  class: "flex-grow flex flex-col items-center justify-center text-gray-500"
}, oo = {
  key: 1,
  class: "flex-grow flex flex-col pt-16 md:pt-24 px-6 md:px-16 text-[#333333]"
}, lo = { class: "text-2xl md:text-[28px] font-light mb-4 md:mb-6" }, ro = { class: "text-base md:text-[18px] leading-relaxed" }, ao = { class: "border-b border-gray-300 px-6 md:px-12 py-2.5 text-[14px] md:text-[15px] text-[#333333] flex items-center gap-3 shrink-0 bg-white overflow-x-auto whitespace-nowrap" }, io = { class: "flex-grow px-6 md:px-10 py-6 md:py-10 flex flex-col md:flex-row gap-8 md:gap-12 overflow-y-auto relative" }, uo = {
  key: 0,
  class: "flex flex-col w-full max-w-[850px] mx-auto mt-4 md:mt-8"
}, co = { class: "text-xl md:text-[26px] font-normal text-black mb-6 md:mb-10 text-center" }, po = { class: "text-[#333333] text-[15px] md:text-[16px] leading-[2.4] w-full text-left select-none" }, fo = { key: 0 }, mo = {
  key: 1,
  class: "fib-wrapper inline-flex items-center mx-[2px]"
}, xo = ["value", "onInput", "onKeydown", "onPaste"], go = { class: "w-full md:flex-1 md:max-w-[55%]" }, vo = {
  key: 0,
  class: "text-xl md:text-[26px] text-center font-normal text-black mb-6 md:mb-8"
}, ho = ["innerHTML"], bo = { class: "w-full md:flex-1 md:max-w-[45%] md:pl-6 md:border-l border-gray-200 flex flex-col gap-6 pt-4" }, wo = { class: "text-lg md:text-[19px] font-bold text-black mb-2 leading-snug" }, yo = { class: "flex flex-col gap-4 md:gap-5" }, _o = { class: "relative flex items-center justify-center mt-1 shrink-0" }, ko = ["value"], $o = { class: "flex-grow flex justify-between items-start" }, Co = { class: "text-[16px] md:text-[17px] text-[#333] group-hover:text-black leading-snug" }, Ao = { class: "font-bold mr-1" }, To = {
  key: 3,
  class: "flex-grow flex items-center justify-center text-gray-500"
}, So = /* @__PURE__ */ me({
  __name: "ReadingSection",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = _e(), o = Ee(), a = o.params.testId, i = re("testData"), y = re("isGlobalLoading"), E = re("updateUserInput"), N = re("syncAllData"), g = re("state"), T = re("saveToLocalStorage"), A = K(null), x = K(0), f = K(0), k = K(!1), Y = K([]), j = K(0), R = K(!1), U = K(60), Q = ie(() => y?.value), G = K({}), L = (b, c, p) => {
      b && (G.value[`${c}-${p}`] = b);
    }, le = (b, c) => b && b[c] || "", ne = (b, c, p, w, u, S) => {
      const r = b.target.value;
      let $ = c.answers[p] || "";
      $ = $.padEnd(u, " ");
      const h = $.split("");
      h[w] = r ? r.charAt(0) : " ", c.answers[p] = h.join("").replace(/\s+$/, ""), C(c), r && w < u - 1 && Ke(() => {
        const B = G.value[`${S}-${w + 1}`];
        B && B.focus();
      });
    }, O = (b, c, p, w, u, S) => {
      const r = b.target;
      if (b.key === "Backspace" && !r.value && w > 0) {
        const $ = G.value[`${S}-${w - 1}`];
        $ && $.focus();
      } else if (b.key === "ArrowLeft" && w > 0) {
        const $ = G.value[`${S}-${w - 1}`];
        $ && $.focus();
      } else if (b.key === "ArrowRight" && w < u - 1) {
        const $ = G.value[`${S}-${w + 1}`];
        $ && $.focus();
      }
    }, Z = (b, c, p, w, u, S) => {
      b.preventDefault();
      const r = b.clipboardData?.getData("text") || "";
      if (!r) return;
      let $ = c.answers[p] || "";
      $ = $.padEnd(u, " ");
      const h = $.split("");
      for (let I = 0; I < r.length; I++)
        w + I < u && (h[w + I] = r[I]);
      c.answers[p] = h.join("").replace(/\s+$/, ""), C(c);
      const B = Math.min(w + r.length, u - 1);
      Ke(() => {
        const I = G.value[`${S}-${B}`];
        I && I.focus();
      });
    };
    function d(b, c = []) {
      if (!b) return [];
      const p = b.replace(/<[^>]+>/g, "");
      let w = 1;
      const u = p.split(/([_-]+)/);
      return u.map((S) => {
        if (S.includes("_") || S.includes("-")) {
          const r = w++;
          let $ = S.length;
          if (c && c[r - 1]) {
            const h = c[r - 1], I = u.slice(0, u.indexOf(S)).join("").match(/[a-zA-Z]+$/);
            if (I) {
              const W = I[0].toLowerCase();
              h.toLowerCase().startsWith(W) && ($ = h.length - W.length);
            }
          }
          return {
            inputId: r,
            maxLength: $,
            text: ""
          };
        }
        return { text: S };
      });
    }
    const s = () => {
      if (!A.value || !A.value.modules) return;
      const b = A.value.modules[x.value];
      if (!b || !b.tasks) return;
      const c = b.tasks;
      let p = 0;
      const w = [];
      c.forEach((u, S) => {
        if (u.type === "reading_fib" || u.type === "fill_in_the_blanks") {
          let r = {};
          const $ = u.questions?.[0]?.user_input?.data;
          if ($)
            try {
              r = JSON.parse($);
            } catch (V) {
              console.error("Failed to parse saved FIB data", V);
            }
          const h = u.questions?.[0];
          let B = {};
          const I = ["a1", "a2", "b1", "b2", "c1", "c2"];
          let W = [];
          if (h && I.forEach((V) => {
            if (h[V])
              if (W.push(V), Array.isArray(h[V]) && h[V].length > 0) {
                if (h.selected_indices || (h.selected_indices = {}), h.selected_indices[V] === void 0) {
                  let ce = h[V].findIndex((fe) => fe.user_input && fe.user_input.data);
                  ce !== -1 ? h.selected_indices[V] = ce : h.selected_indices[V] = Math.floor(Math.random() * h[V].length);
                }
                B[V] = h[V][h.selected_indices[V]];
              } else typeof h[V] == "object" && !Array.isArray(h[V]) && (B[V] = h[V]);
          }), W.length === 0) {
            let V = h || {};
            B.default = V, W.push("default");
          }
          let z = [];
          const D = W[0];
          D && B[D]?.answer ? z = B[D].answer : h?.answer && (z = h.answer), Object.keys(r).length === 0 && Array.isArray(z) && z.forEach((V, ce) => {
            r[ce + 1] = "";
          }), p++, w.push({
            id: `fib_${S}`,
            isFillBlanks: !0,
            title: u.passageTitle || "Fill in the missing letters in the paragraph.",
            passageHTML: u.passageHTML,
            levelVariants: B,
            availableLevels: W,
            rawQuestionObj: h,
            answers: r,
            originalTaskIdx: S,
            originalQIdx: 0,
            questionLabel: `Question ${p}`
          });
        } else u.type === "reading_mcq" && u.questions.forEach((r, $) => {
          p++;
          let h = {};
          const B = ["a1", "a2", "b1", "b2", "c1", "c2"];
          let I = [];
          if (B.forEach((W) => {
            if (r[W])
              if (I.push(W), Array.isArray(r[W]) && r[W].length > 0) {
                if (r.selected_indices || (r.selected_indices = {}), r.selected_indices[W] === void 0) {
                  let z = r[W].findIndex((D) => D.user_input && D.user_input.data);
                  z !== -1 ? r.selected_indices[W] = z : r.selected_indices[W] = Math.floor(Math.random() * r[W].length);
                }
                h[W] = r[W][r.selected_indices[W]];
              } else typeof r[W] == "object" && !Array.isArray(r[W]) && (h[W] = r[W]);
          }), I.length === 0) {
            let W = r;
            if (!W.question)
              if (Array.isArray(r) && r.length > 0) W = r[0];
              else if (r[0] && r[0].question) W = r[0];
              else {
                const z = Object.keys(r).find((D) => Array.isArray(r[D]) && r[D].length > 0 && r[D][0].question);
                if (z)
                  W = r[z][0];
                else {
                  const D = Object.keys(r).find((V) => r[V] && typeof r[V] == "object" && r[V].question);
                  D && (W = r[D]);
                }
              }
            h.default = W, I.push("default");
          }
          w.push({
            id: `mcq_${S}_${$}`,
            isMCQ: !0,
            passageTitle: u.passageTitle,
            passageHTML: u.passageHTML,
            levelVariants: h,
            availableLevels: I,
            rawQuestionObj: r,
            originalTaskIdx: S,
            originalQIdx: $,
            questionLabel: `Question ${p}`
          });
        });
      }), Y.value = w, j.value = p || w.length, f.value = 0;
    }, l = (b) => {
      if (!A.value || !A.value.modules) return;
      const c = A.value.modules;
      let p = -1, w = -1, u = -1;
      for (let S = 0; S < c.length; S++) {
        const r = c[S].tasks || [];
        for (let $ = 0; $ < r.length; $++) {
          const h = r[$];
          if (h.questions) {
            const B = h.questions.findIndex((I) => I.uuid === b);
            if (B !== -1) {
              p = S, w = $, u = B;
              break;
            }
          } else if (h.uuid === b || h.id === b) {
            p = S, w = $, u = 0;
            break;
          }
        }
        if (p !== -1) break;
      }
      if (p !== -1) {
        x.value = p, s();
        const S = Y.value.findIndex((r) => r.originalTaskIdx === w && r.originalQIdx === u);
        S !== -1 && (f.value = S);
      }
    };
    we(() => o.params.uuid, (b) => {
      b && A.value && l(b);
    }, { immediate: !0 }), we(() => i?.value, (b) => {
      if (b && b.length > 0) {
        const c = b.find((p) => p.type?.toLowerCase() === "reading");
        c && (A.value = c, s(), g.value.section === "reading" ? (x.value = (g.value.module || 1) - 1, s(), f.value = (g.value.task || 1) - 1) : (g.value.section = "reading", g.value.module = 1, g.value.task = 1));
      }
    }, { immediate: !0 }), we([x, f], ([b, c]) => {
      const p = Number(b) + 1, w = Number(c) + 1;
      g.value.module = p, g.value.task = w, T(), G.value = {};
    });
    const C = (b) => {
      if (E) {
        const c = JSON.stringify(b.answers);
        E("reading", x.value, b.originalTaskIdx, b.originalQIdx, c);
      }
    }, _ = (b) => {
      E && E("reading", x.value, b.originalTaskIdx, b.originalQIdx, b.selectedAnswer, b.activeLevel, b.activeVariantIndex);
    }, P = (b, c) => {
      if (!b || b.length === 0) return "default";
      if (b.includes(c)) return c;
      const p = ["a1", "a2", "b1", "b2", "c1", "c2"], w = p.indexOf(c.toLowerCase());
      if (w === -1) return b[0] || "default";
      let u = b[0] || "default", S = 999;
      return b.forEach((r) => {
        const $ = p.indexOf(r.toLowerCase());
        if ($ !== -1) {
          const h = Math.abs($ - w);
          h < S && (S = h, u = r);
        }
      }), u;
    }, H = ie(() => {
      const b = Y.value[f.value];
      if (!b) return null;
      if (b.isMCQ && b.levelVariants) {
        let c = g.value.readingAbilityLevel;
        c || (c = b.availableLevels[0] || "default", g.value.readingAbilityLevel = c), b.availableLevels.includes(c) || (c = P(b.availableLevels, c));
        const p = b.levelVariants[c] || b.levelVariants.default;
        return p ? {
          ...b,
          activeLevel: c,
          activeVariantIndex: b.rawQuestionObj.selected_indices ? b.rawQuestionObj.selected_indices[c] : void 0,
          questionText: p.question,
          options: (p.options || []).map((w, u) => ({
            id: String.fromCharCode(65 + u),
            text: w
          })),
          answer: p.answer,
          cref: p.cref,
          selectedAnswer: b.rawQuestionObj?.user_input?.data || p.user_input?.data || "",
          user_result: b.rawQuestionObj?.user_result && b.rawQuestionObj.user_result.data ? b.rawQuestionObj.user_result : p.user_result && p.user_result.data ? p.user_result : { data: "" }
        } : b;
      }
      if (b.isFillBlanks && b.levelVariants) {
        let c = g.value.readingAbilityLevel;
        c || (c = b.availableLevels[0] || "default", g.value.readingAbilityLevel = c), b.availableLevels.includes(c) || (c = P(b.availableLevels, c));
        const p = b.levelVariants[c] || b.levelVariants.default;
        if (!p) return b;
        const w = p.passageHTML || p.passageText || b.passageHTML || "", u = p.answer || [], S = d(w, u);
        return {
          ...b,
          activeLevel: c,
          activeVariantIndex: b.rawQuestionObj?.selected_indices ? b.rawQuestionObj.selected_indices[c] : void 0,
          questionText: p.question,
          answer: u,
          cref: p.cref,
          segments: S,
          user_result: b.rawQuestionObj?.user_result && b.rawQuestionObj.user_result.data ? b.rawQuestionObj.user_result : p.user_result && p.user_result.data ? p.user_result : { data: "" }
        };
      }
      return b;
    }), J = (b, c = !1) => {
      if (!b) return;
      const p = ["a1", "a2", "b1", "b2", "c1", "c2"], w = b.activeLevel || g.value.readingAbilityLevel || "b1";
      if (b.isMCQ) {
        const u = p.indexOf(w);
        if (u === -1) return;
        let S = !1;
        !c && b.selectedAnswer && (S = b.selectedAnswer === b.answer);
        let r = u;
        c ? r = u : S ? r = Math.min(u + 1, p.length - 1) : r = Math.max(u - 1, 0), g.value.readingAbilityLevel = p[r], console.log(`[Reading Adaptive MCQ] Level adjusted from ${w} to ${g.value.readingAbilityLevel}`);
      } else if (b.isFillBlanks) {
        if (c) return;
        const u = b.activeLevel || "b1", S = b.answer || [], r = (h, B, I) => {
          if (!h || !B) return !1;
          let W = "";
          if (Array.isArray(b.segments)) {
            const D = b.segments.findIndex((V) => V.inputId === I);
            if (D > 0) {
              const ce = (b.segments[D - 1]?.text || "").match(/[a-zA-Z]+$/);
              ce && (W = ce[0]);
            }
          }
          const z = B.substring(W.length);
          return h.trim().toLowerCase() === B.trim().toLowerCase() || h.trim().toLowerCase() === z.trim().toLowerCase();
        }, $ = b.rawQuestionObj || b.questions?.[0];
        if ($ && Array.isArray($.answer_levels) && Array.isArray($.answer)) {
          const h = $.answer, B = $.answer_levels, I = {};
          h.forEach((ce, fe) => {
            const $e = (B[fe] || "b1").toLowerCase();
            I[$e] || (I[$e] = { total: 0, correct: 0 }), I[$e].total++;
            const Oe = b.answers[String(fe + 1)] || "";
            r(Oe, ce, fe + 1) && I[$e].correct++;
          });
          const W = I.b1 ? I.b1.correct === I.b1.total : !1, z = I.b2 ? I.b2.correct === I.b2.total : !1, D = I.c1 ? I.c1.correct === I.c1.total : !1;
          let V = w;
          W && z && !D ? V = "b2" : W && z && D ? V = "c2" : W && !z ? V = "b1" : V = "a2", g.value.readingAbilityLevel = V, console.log("[C-Test Individual Blank Evaluation] Levels:", JSON.stringify(I), `-> Set next level: ${V}`);
        } else {
          let h = S.length > 0;
          S.forEach((V, ce) => {
            const fe = b.answers[String(ce + 1)] || "";
            r(fe, V, ce + 1) || (h = !1);
          });
          let B = !1, I = !1;
          const W = b.levelVariants?.b1 || b.rawQuestionObj?.b1 && b.rawQuestionObj.b1[0];
          if (W) {
            const V = W.answer || [];
            let ce = V.length > 0;
            V.forEach((fe, $e) => {
              const Oe = b.answers[String($e + 1)] || "";
              r(Oe, fe, $e + 1) || (ce = !1);
            }), B = ce;
          } else
            u === "b1" && (B = h);
          const z = b.levelVariants?.c1 || b.rawQuestionObj?.c1 && b.rawQuestionObj.c1[0];
          if (z) {
            const V = z.answer || [];
            let ce = V.length > 0;
            V.forEach((fe, $e) => {
              const Oe = b.answers[String($e + 1)] || "";
              r(Oe, fe, $e + 1) || (ce = !1);
            }), I = ce;
          } else
            u === "c1" && (I = h);
          let D = w;
          if (B && !I)
            D = "c1";
          else if (B && I)
            D = "c2";
          else {
            const V = p.indexOf(w);
            V !== -1 && (h ? D = p[Math.min(V + 1, p.length - 1)] : D = p[Math.max(V - 1, 0)]);
          }
          g.value.readingAbilityLevel = D, console.log(`[Reading Adaptive FIB] ActiveLevel: ${u}, B1 Correct: ${B}, C1 Correct: ${I}. Level adjusted from ${w} to ${g.value.readingAbilityLevel}`);
        }
      }
    }, F = async (b) => {
      if (!A.value) {
        n.push(`/listening-section/${a}`);
        return;
      }
      if (k.value) {
        k.value = !1, x.value++, s();
        return;
      }
      if (J(H.value, b), f.value < Y.value.length - 1) {
        f.value++;
        return;
      }
      if (x.value < A.value.modules.length - 1) {
        k.value = !0;
        return;
      } else
        try {
          y && (y.value = !0), await N("reading", !0);
        } catch (c) {
          console.error("Error during final save:", c);
        } finally {
          y && (y.value = !1), n.push(`/listening-section/${a}`);
        }
    }, te = () => {
      F(!0);
    }, ue = () => {
      F(!1);
    }, pe = () => {
      f.value > 0 && f.value--;
    };
    return (b, c) => (m(), v("div", Jn, [
      e("div", Kn, [
        e("header", Yn, [
          e("div", Zn, [
            e("button", {
              onClick: c[0] || (c[0] = (p) => R.value = !R.value),
              class: "bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded-full px-3 md:px-5 py-1.5 text-[14px] md:text-[15px] font-medium cursor-pointer flex items-center gap-2 transition-colors"
            }, [...c[5] || (c[5] = [
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
            R.value ? (m(), v("div", Xn, [
              e("button", {
                onClick: c[1] || (c[1] = (p) => R.value = !1),
                class: "absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-sm font-bold"
              }, "✕"),
              e("div", qn, [
                (m(), v(oe, null, ae(20, (p) => e("div", {
                  key: p,
                  class: be(["w-[6px] rounded-full transition-colors duration-150", p * 5 <= U.value ? "bg-[#00796B]" : "bg-[#00796B]/20"]),
                  style: Se({ height: `${20 + p * 4}%` })
                }, null, 6)), 64))
              ]),
              X(e("input", {
                type: "range",
                "onUpdate:modelValue": c[2] || (c[2] = (p) => U.value = p),
                min: "0",
                max: "100",
                class: "w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer custom-slider"
              }, null, 512), [
                [ee, U.value]
              ])
            ])) : se("", !0)
          ]),
          e("button", {
            onClick: pe,
            disabled: f.value === 0 || Q.value || k.value,
            class: "bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded-full px-3 md:px-5 py-1.5 text-[14px] md:text-[15px] font-medium cursor-pointer flex items-center gap-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          }, [...c[6] || (c[6] = [
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
          ])], 8, eo),
          e("button", {
            onClick: te,
            disabled: Q.value,
            class: "bg-[#EF5350] text-white border-none rounded-full px-3 md:px-5 py-1.5 text-[13px] md:text-[14px] font-bold flex items-center gap-1 hover:bg-red-600 transition-colors shadow-sm"
          }, [...c[7] || (c[7] = [
            q(" SKIP ", -1),
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
          ])], 8, to),
          e("button", {
            onClick: ue,
            disabled: Q.value,
            class: "bg-white text-[#00796B] border-none rounded-full px-4 md:px-6 py-1.5 text-[14px] md:text-[15px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          }, [...c[8] || (c[8] = [
            q(" Next ", -1),
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
          ])], 8, so)
        ]),
        Q.value ? (m(), v("div", no, [...c[9] || (c[9] = [
          e("div", { class: "animate-pulse flex flex-col items-center" }, [
            e("div", { class: "w-12 h-12 border-4 border-[#00796B] border-t-transparent rounded-full animate-spin mb-4" }),
            e("div", null, "Loading Reading Section...")
          ], -1)
        ])])) : k.value ? (m(), v("div", oo, [
          e("h2", lo, "End of Module " + M(x.value + 1), 1),
          c[13] || (c[13] = e("hr", { class: "w-full border-gray-300 mb-6 md:mb-8" }, null, -1)),
          e("p", ro, [
            q(" You have completed Module " + M(x.value + 1) + ". ", 1),
            c[10] || (c[10] = e("br", null, null, -1)),
            c[11] || (c[11] = q(" Select ", -1)),
            c[12] || (c[12] = e("strong", { class: "font-bold" }, "Next", -1)),
            q(" to continue to Module " + M(x.value + 2) + ". ", 1)
          ])
        ])) : Y.value.length > 0 && H.value ? (m(), v(oe, { key: 2 }, [
          e("div", ao, [
            c[14] || (c[14] = e("span", null, "Reading", -1)),
            c[15] || (c[15] = e("span", { class: "text-gray-300 font-light" }, "|", -1)),
            e("span", null, "Questions " + M(f.value + 1) + " of " + M(j.value), 1)
          ]),
          e("main", io, [
            H.value.isFillBlanks ? (m(), v("div", uo, [
              e("h2", co, M(H.value.title), 1),
              e("div", po, [
                (m(!0), v(oe, null, ae(H.value.segments, (p, w) => (m(), v(oe, { key: w }, [
                  p.inputId ? (m(), v("span", mo, [
                    (m(!0), v(oe, null, ae(p.maxLength, (u) => (m(), v("input", {
                      key: u,
                      type: "text",
                      maxlength: "1",
                      class: "char-input",
                      value: le(H.value.answers[p.inputId], u - 1),
                      onInput: (S) => ne(S, H.value, p.inputId, u - 1, p.maxLength, w),
                      onKeydown: (S) => O(S, H.value, p.inputId, u - 1, p.maxLength, w),
                      onPaste: (S) => Z(S, H.value, p.inputId, u - 1, p.maxLength, w),
                      ref_for: !0,
                      ref: (S) => L(S, w, u - 1)
                    }, null, 40, xo))), 128))
                  ])) : (m(), v("span", fo, M(p.text), 1))
                ], 64))), 128))
              ])
            ])) : H.value.isMCQ ? (m(), v(oe, { key: 1 }, [
              e("section", go, [
                H.value.passageTitle ? (m(), v("h2", vo, M(H.value.passageTitle), 1)) : se("", !0),
                e("div", {
                  class: "passage-content-wrapper text-[15px] md:text-[16px] text-[#333] leading-relaxed",
                  innerHTML: H.value.passageHTML
                }, null, 8, ho)
              ]),
              e("section", bo, [
                e("h3", wo, M(H.value.questionText), 1),
                e("div", yo, [
                  (m(!0), v(oe, null, ae(H.value.options, (p) => (m(), v("label", {
                    key: p.id,
                    class: "flex items-start gap-3 md:gap-4 cursor-pointer group"
                  }, [
                    e("div", _o, [
                      X(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": c[3] || (c[3] = (w) => H.value.selectedAnswer = w),
                        value: p.id,
                        onChange: c[4] || (c[4] = (w) => _(H.value)),
                        class: "peer appearance-none w-[20px] h-[20px] md:w-[22px] md:h-[22px] border border-black rounded-full checked:border-black cursor-pointer"
                      }, null, 40, ko), [
                        [kt, H.value.selectedAnswer]
                      ]),
                      c[16] || (c[16] = e("div", { class: "absolute w-[10px] h-[10px] bg-black rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" }, null, -1))
                    ]),
                    e("div", $o, [
                      e("span", Co, [
                        e("span", Ao, "(" + M(p.id) + ")", 1),
                        q(" " + M(p.text), 1)
                      ])
                    ])
                  ]))), 128))
                ])
              ])
            ], 64)) : se("", !0)
          ])
        ], 64)) : (m(), v("div", To, " No reading questions available. "))
      ])
    ]));
  }
}), Eo = /* @__PURE__ */ me({
  __name: "ReadingPage",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (i, y) => (m(), Ae(So, {
      _p: ge(o),
      _pp: ge(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), Lo = { class: "min-h-screen bg-[#525355] flex justify-center font-sans antialiased p-0 md:p-4" }, Io = { class: "w-full max-w-[1200px] min-h-screen md:min-h-[700px] md:h-[90vh] flex flex-col shadow-lg overflow-hidden md:rounded-lg relative bg-white" }, Ro = { class: "bg-[#00796B] h-[60px] flex justify-between items-center px-4 md:px-6 gap-2 md:gap-3 shrink-0" }, Bo = { class: "text-white font-medium flex items-center gap-2 text-[14px] md:text-[15px] w-20 md:w-32" }, jo = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 md:h-5 md:w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, No = { key: 1 }, Oo = { class: "flex items-center gap-2 md:gap-3" }, Mo = { class: "relative flex items-center" }, Vo = {
  key: 0,
  class: "absolute top-[120%] right-0 bg-white rounded-xl shadow-xl border border-gray-300 p-5 w-64 md:w-72 z-50 flex flex-col"
}, Uo = { class: "flex items-end justify-between h-10 gap-[2px] mb-3 mt-2 px-1" }, Po = ["disabled"], Do = ["disabled"], zo = { class: "hidden xs:inline" }, Fo = { class: "xs:hidden" }, Qo = {
  key: 0,
  class: "flex-grow flex flex-col items-center justify-center text-gray-500"
}, Go = { class: "animate-pulse flex flex-col items-center" }, Ho = {
  key: 0,
  class: "text-sm mt-2 text-red-500"
}, Wo = { class: "border-b border-gray-300 px-4 md:px-6 py-2 md:py-2.5 text-[12px] md:text-[14px] text-[#333333] flex items-center gap-2 shrink-0 bg-gray-50 overflow-x-auto whitespace-nowrap" }, Jo = { key: 0 }, Ko = { class: "flex-grow flex flex-col relative bg-white overflow-hidden p-4 md:p-8 overflow-y-auto" }, Yo = {
  key: 0,
  class: "p-6 md:p-16 flex flex-col items-center max-w-4xl mx-auto text-center"
}, Zo = {
  key: 1,
  class: "px-6 py-10 md:px-10 md:py-16 flex flex-col items-center max-w-3xl mx-auto text-center"
}, Xo = { class: "text-xl md:text-[28px] font-medium text-black mb-6" }, qo = { class: "bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-200 shadow-sm text-left" }, el = { class: "text-[16px] md:text-[18px] text-[#444] leading-relaxed whitespace-pre-line" }, tl = {
  key: 2,
  class: "flex flex-col h-full p-4 md:p-12 bg-white"
}, sl = { class: "text-[16px] md:text-[20px] font-medium mb-3 md:mb-4 text-gray-500" }, nl = ["onClick"], ol = {
  key: 0,
  class: "text-gray-400 italic text-[14px]"
}, ll = { class: "flex flex-wrap gap-2 md:gap-4 p-2 md:p-4 bg-gray-50/50 rounded-xl" }, rl = ["onDragstart"], al = {
  key: 3,
  class: "flex flex-col md:flex-row h-full gap-6 md:gap-0"
}, il = { class: "w-full md:w-1/2 md:p-8 md:overflow-y-auto md:border-r border-gray-300 bg-white" }, dl = { class: "text-[15px] md:text-[16px] text-[#444] leading-relaxed mb-6 md:mb-8" }, ul = { class: "list-disc pl-5 space-y-2 text-[15px] md:text-[16px] text-[#444]" }, cl = { class: "w-full md:w-1/2 flex flex-col md:p-8 md:bg-gray-50 min-h-[400px]" }, pl = { class: "bg-white border border-gray-300 rounded-t-lg p-3 md:p-4 shadow-sm text-[13px] md:text-[14px]" }, fl = { class: "mb-1 md:mb-2" }, ml = { class: "bg-[#EAEAEA] px-4 py-1.5 border-x border-gray-300 flex justify-between text-[12px] md:text-[13px]" }, xl = {
  key: 4,
  class: "flex flex-col md:flex-row h-full gap-6 md:gap-0 bg-gray-50/50"
}, gl = { class: "w-full md:w-1/2 md:p-6 md:overflow-y-auto md:border-r border-gray-300 flex flex-col gap-4 md:gap-6" }, vl = { class: "bg-white p-4 md:p-5 border border-gray-200 rounded-lg shadow-sm" }, hl = { class: "text-[14px] md:text-[16px] text-[#333] leading-relaxed" }, bl = { class: "font-bold text-gray-700 mb-1 text-[14px] md:text-[15px]" }, wl = { class: "text-[13px] md:text-[15px] text-gray-600 italic" }, yl = { class: "w-full md:w-1/2 flex flex-col md:p-6 min-h-[400px]" }, _l = { class: "bg-[#EAEAEA] border border-gray-300 rounded-t-lg px-4 py-2 flex justify-between items-center text-[12px] md:text-[13px]" }, kl = /* @__PURE__ */ me({
  __name: "writingcontent",
  setup(t) {
    const n = _e(), a = Ee().params.testId, i = re("testData"), y = re("isGlobalLoading"), E = re("updateUserInput"), N = re("syncAllData"), g = re("state"), T = re("saveToLocalStorage"), A = K(null), x = K([]), f = K(0), k = K("section_intro"), Y = K(0);
    let j = null;
    const R = K(!1), U = K(60), Q = K(""), G = ie(() => y?.value), L = ie(() => x.value[f.value]), le = ie(() => x.value.filter((c) => c.type !== "section_intro").length), ne = ie(() => {
      const c = L.value?.userAnswerText || "";
      return c.trim() ? c.trim().split(/\s+/).length : 0;
    }), O = ie(() => {
      const c = Math.floor(Y.value / 60), p = Y.value % 60;
      return `${c}:${p.toString().padStart(2, "0")}`;
    });
    let Z = null;
    const d = K(null), s = (c) => {
      if (E && c.type !== "section_intro") {
        let p = "";
        c.type === "build_sentences" ? p = c.userAnswer.map((w) => w.text).join(" ") : p = c.userAnswerText || "", E("writing", 0, c.originalTaskIdx, c.originalQIdx, p);
      }
    }, l = (c) => {
      if (!c) return [];
      const p = (w) => {
        const u = w.trim();
        if (u.startsWith("[") && u.endsWith("]"))
          try {
            const S = JSON.parse(u);
            if (Array.isArray(S))
              return S.flatMap((r) => p(String(r)));
          } catch {
          }
        return [w];
      };
      return typeof c == "string" ? p(c) : Array.isArray(c) ? c.flatMap((w) => typeof w == "string" ? p(w) : [String(w)]) : [String(c)];
    }, C = (c) => {
      if (!c) return [];
      if (typeof c == "string")
        try {
          const p = JSON.parse(c);
          if (Array.isArray(p)) return p;
        } catch (p) {
          console.error("Failed to parse studentResponses string:", p);
        }
      return Array.isArray(c) ? c.map((p) => {
        if (typeof p == "string")
          try {
            return JSON.parse(p);
          } catch {
            return { studentName: "Student", content: p };
          }
        return p;
      }) : [];
    }, _ = (c) => {
      const p = [];
      let w = 1;
      c.forEach((u, S) => {
        const r = (u.type || "").toLowerCase().replace(/_/g, " ").replace(/-/g, " ").trim();
        if (r.includes("sentence") || r.includes("build"))
          (!u.questions || !Array.isArray(u.questions) || u.questions.length === 0) && (u.scrambledWords || u.prompt || u.answer) && (u.questions = [{
            scrambledWords: u.scrambledWords || [],
            prompt: u.prompt || "",
            answer: u.answer || "",
            user_input: u.user_input || { data: "" },
            user_result: u.user_result || { data: "" }
          }]), (u.questions || []).forEach((h, B) => {
            const I = h.user_input?.data || "", W = I ? I.split(" ").map((D, V) => ({ id: `saved_${V}`, text: D })) : [];
            let z = (h.scrambledWords || []).map((D, V) => ({ id: `w_${V}`, text: D }));
            W.forEach((D) => {
              const V = z.findIndex((ce) => ce.text === D.text);
              V !== -1 && z.splice(V, 1);
            }), p.push({
              type: "build_sentences",
              questionNum: w++,
              title: "Build a Sentence",
              directions: u.instruction || u.instructions || "Rearrange the words to form a correct sentence.",
              prompt: h.prompt || "",
              wordBank: z,
              userAnswer: W,
              // For Drag and Drop UI
              writingTime: 0,
              originalTaskIdx: S,
              originalQIdx: B
            });
          });
        else if (r.includes("email") || r.includes("scenario")) {
          (!u.questions || !Array.isArray(u.questions) || u.questions.length === 0) && (u.questions = [{
            user_input: u.user_input || { data: "" },
            user_result: u.user_result || { data: "" }
          }]);
          const $ = u.questions[0];
          p.push({
            type: "write_an_email",
            questionNum: w++,
            title: "Write an Email",
            directions: u.instruction || u.instructions || "Read the scenario and follow the instructions.",
            scenario: u.scenario || u.prompt?.situation || u.situation || "",
            instructions: l(u.instructions || u.prompt?.task || u.requirements || []),
            emailTo: u.emailMetadata?.to || u.prompt?.email?.to || u.emailTo || "Kevin",
            emailSubject: u.emailMetadata?.subject || u.prompt?.email?.subject || u.emailSubject || "Team Lunch",
            writingTime: (u.timeLimit ? parseInt(u.timeLimit) : 7) * 60,
            userAnswerText: $.user_input?.data || "",
            user_result: $.user_result || { data: "" },
            originalTaskIdx: S,
            originalQIdx: 0
          });
        } else if (r.includes("discussion") || r.includes("academic")) {
          (!u.questions || !Array.isArray(u.questions) || u.questions.length === 0) && (u.questions = [{
            user_input: u.user_input || { data: "" },
            user_result: u.user_result || { data: "" }
          }]);
          const $ = u.questions[0];
          p.push({
            type: "academic_discussion",
            questionNum: w++,
            title: "Academic Discussion",
            directions: u.instruction || u.instructions || u.requirements || "Read the professor's post and students' responses, then contribute your own.",
            professorName: u.professor?.name || u.professorName || "Professor",
            professorPrompt: u.professorPrompt || u.professor?.post || u.post || "",
            studentResponses: C(u.studentResponses || u.students || []),
            writingTime: (u.timeLimit ? parseInt(u.timeLimit) : 10) * 60,
            userAnswerText: $.user_input?.data || "",
            user_result: $.user_result || { data: "" },
            originalTaskIdx: S,
            originalQIdx: 0
          });
        }
      }), x.value = [{ type: "section_intro" }, ...p], g.value.section === "writing" ? (f.value = (g.value.task || 1) - 1, f.value > 0 && (k.value = "writing")) : (g.value.section = "writing", g.value.module = 1, g.value.task = 1);
    };
    we(f, (c) => {
      g.value.task = c + 1, T();
    }), we(() => i?.value, (c) => {
      if (c && c.length > 0) {
        const p = c.find((w) => w.type?.toLowerCase() === "writing");
        p && (!A.value || x.value.length === 0 ? (A.value = p, _(p.tasks || [])) : p.tasks?.forEach((w, u) => {
          w.questions && w.questions.forEach((S, r) => {
            const $ = x.value.find((h) => h.originalTaskIdx === u && h.originalQIdx === r);
            $ && S.user_result && ($.user_result = S.user_result);
          });
        }));
      }
    }, { immediate: !0 });
    const P = (c, p) => {
      Z = { ...c, source: p };
    }, H = (c) => {
      !Z || !L.value || (Z.source === "bank" && c === "target" && (L.value.userAnswer.push(Z), L.value.wordBank = L.value.wordBank.filter((p) => p.id !== Z.id), s(L.value)), Z = null, d.value = null);
    }, J = (c) => {
      if (!L.value) return;
      const p = L.value.userAnswer[c];
      L.value.userAnswer.splice(c, 1), L.value.wordBank.push(p), s(L.value);
    }, F = (c) => {
      clearInterval(j), Y.value = c, j = setInterval(() => {
        Y.value > 0 ? Y.value-- : (clearInterval(j), b());
      }, 1e3);
    }, te = () => clearInterval(j), ue = () => {
      clearInterval(j), pe();
    }, pe = async () => {
      if (te(), s(L.value), f.value < x.value.length - 1) {
        const c = x.value[f.value];
        f.value++;
        const p = x.value[f.value];
        c.type === p.type && c.originalTaskIdx === p.originalTaskIdx ? (k.value = "writing", p.writingTime && F(p.writingTime)) : k.value = "directions", g.value.task = f.value + 1, T();
      } else
        try {
          y && (y.value = !0), await N("writing", !0), n.push(`/speaking-section/${a}`);
        } catch (c) {
          console.error("Save failed during final sync", c);
        } finally {
          y && (y.value = !1);
        }
    }, b = async () => {
      if (!A.value) {
        n.push(`/speaking-section/${a}`);
        return;
      }
      k.value === "section_intro" ? (f.value++, k.value = "directions") : k.value === "directions" ? (k.value = "writing", L.value.writingTime && F(L.value.writingTime)) : pe();
    };
    return Ue(() => te()), (c, p) => (m(), v("div", Lo, [
      e("div", Io, [
        e("header", Ro, [
          e("div", Bo, [
            k.value === "writing" && Y.value > 0 ? (m(), v("svg", jo, [...p[10] || (p[10] = [
              e("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              }, null, -1)
            ])])) : se("", !0),
            k.value === "writing" && Y.value > 0 ? (m(), v("span", No, M(O.value), 1)) : se("", !0)
          ]),
          e("div", Oo, [
            e("div", Mo, [
              e("button", {
                onClick: p[0] || (p[0] = (w) => R.value = !R.value),
                class: "bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded-full px-3 md:px-5 py-1.5 text-[14px] md:text-[15px] font-medium cursor-pointer flex items-center gap-2 transition-colors"
              }, [...p[11] || (p[11] = [
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
              R.value ? (m(), v("div", Vo, [
                e("button", {
                  onClick: p[1] || (p[1] = (w) => R.value = !1),
                  class: "absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-sm font-bold"
                }, "✕"),
                e("div", Uo, [
                  (m(), v(oe, null, ae(20, (w) => e("div", {
                    key: w,
                    class: be(["w-[6px] rounded-full transition-colors duration-150", w * 5 <= U.value ? "bg-[#00796B]" : "bg-[#00796B]/20"]),
                    style: Se({ height: `${20 + w * 4}%` })
                  }, null, 6)), 64))
                ]),
                X(e("input", {
                  type: "range",
                  "onUpdate:modelValue": p[2] || (p[2] = (w) => U.value = w),
                  min: "0",
                  max: "100",
                  class: "w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer custom-slider"
                }, null, 512), [
                  [ee, U.value]
                ])
              ])) : se("", !0)
            ]),
            e("button", {
              onClick: ue,
              disabled: G.value,
              class: "bg-[#EF5350] text-white border-none rounded-full px-3 md:px-5 py-1.5 text-[13px] md:text-[14px] font-bold flex items-center gap-1 hover:bg-red-600 transition-colors shadow-sm"
            }, [...p[12] || (p[12] = [
              q(" SKIP ", -1),
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
            ])], 8, Po),
            e("button", {
              onClick: b,
              disabled: G.value,
              class: "bg-white text-[#00796B] border-none rounded-full px-4 md:px-6 py-1.5 text-[14px] md:text-[15px] font-medium flex items-center gap-1 hover:bg-gray-100 transition-colors shadow-sm"
            }, [
              e("span", zo, M(k.value === "section_intro" ? "Start Question" : "Next"), 1),
              e("span", Fo, M(k.value === "section_intro" ? "Start" : "Next"), 1),
              p[13] || (p[13] = e("svg", {
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
            ], 8, Do)
          ])
        ]),
        G.value ? (m(), v("div", Qo, [
          e("div", Go, [
            p[14] || (p[14] = e("div", { class: "w-10 h-10 border-4 border-[#00796B] border-t-transparent rounded-full animate-spin mb-4" }, null, -1)),
            p[15] || (p[15] = e("div", null, "Loading Writing Section...", -1)),
            Q.value ? (m(), v("div", Ho, M(Q.value), 1)) : se("", !0)
          ])
        ])) : x.value.length > 0 && L.value ? (m(), v(oe, { key: 1 }, [
          e("div", Wo, [
            p[16] || (p[16] = e("span", null, "Writing", -1)),
            p[17] || (p[17] = e("span", { class: "text-gray-400" }, "|", -1)),
            L.value.type !== "section_intro" ? (m(), v("span", Jo, "Question " + M(L.value.questionNum) + " of " + M(le.value), 1)) : se("", !0)
          ]),
          e("main", Ko, [
            L.value.type === "section_intro" ? (m(), v("div", Yo, [...p[18] || (p[18] = [
              e("h2", { class: "text-2xl md:text-[32px] font-medium text-black mb-6 md:mb-10 border-b-2 border-[#00796B] pb-2" }, "Writing Section Directions", -1),
              e("div", { class: "text-[15px] md:text-[17px] text-[#333] leading-relaxed" }, [
                e("p", { class: "mb-6" }, "This section measures your ability to communicate in writing. You will complete several types of tasks."),
                e("p", { class: "italic text-gray-500" }, [
                  q("Click "),
                  e("strong", null, "Next"),
                  q(" to begin.")
                ])
              ], -1)
            ])])) : k.value === "directions" ? (m(), v("div", Zo, [
              e("h2", Xo, M(L.value.title), 1),
              e("div", qo, [
                e("p", el, M(L.value.directions), 1)
              ])
            ])) : k.value === "writing" && L.value.type === "build_sentences" ? (m(), v("div", tl, [
              e("h3", sl, 'Context: "' + M(L.value.prompt) + '"', 1),
              p[19] || (p[19] = e("h2", { class: "text-[18px] md:text-[24px] font-bold mb-6 md:mb-10 text-black leading-tight" }, "Rearrange the words to form a correct sentence:", -1)),
              e("div", {
                class: "flex flex-wrap items-center min-h-[60px] md:min-h-[80px] border-2 border-dashed border-gray-300 rounded-xl p-4 md:p-6 mb-8 md:mb-12 bg-gray-50 gap-2 md:gap-3",
                onDragover: p[3] || (p[3] = $t((w) => d.value = "target", ["prevent"])),
                onDragleave: p[4] || (p[4] = (w) => d.value = null),
                onDrop: p[5] || (p[5] = (w) => H("target"))
              }, [
                (m(!0), v(oe, null, ae(L.value.userAnswer, (w, u) => (m(), v("div", {
                  key: w.id,
                  class: "bg-white border border-[#00796B] text-[#00796B] px-3 md:px-5 py-1.5 md:py-2 rounded-lg shadow-sm cursor-pointer font-medium text-[14px] md:text-[16px]",
                  onClick: (S) => J(u)
                }, M(w.text), 9, nl))), 128)),
                L.value.userAnswer.length === 0 ? (m(), v("span", ol, "Drag words here...")) : se("", !0)
              ], 32),
              e("div", ll, [
                (m(!0), v(oe, null, ae(L.value.wordBank, (w) => (m(), v("div", {
                  key: w.id,
                  class: "bg-white border border-gray-300 px-4 md:px-6 py-1.5 md:py-2 rounded-lg cursor-grab hover:bg-gray-50 text-[14px] md:text-[16px] shadow-sm active:scale-95 transition-transform",
                  draggable: "true",
                  onDragstart: (u) => P(w, "bank")
                }, M(w.text), 41, rl))), 128))
              ])
            ])) : k.value === "writing" && L.value.type === "write_an_email" ? (m(), v("div", al, [
              e("div", il, [
                p[20] || (p[20] = e("h3", { class: "font-bold text-[18px] md:text-[20px] mb-3 md:mb-4 text-[#00796B]" }, "Scenario", -1)),
                e("p", dl, M(L.value.scenario), 1),
                p[21] || (p[21] = e("h3", { class: "font-bold text-[18px] md:text-[20px] mb-3 md:mb-4 text-[#00796B]" }, "Task Requirements", -1)),
                e("ul", ul, [
                  (m(!0), v(oe, null, ae(L.value.instructions, (w, u) => (m(), v("li", { key: u }, M(w), 1))), 128))
                ])
              ]),
              e("div", cl, [
                e("div", pl, [
                  e("div", fl, [
                    p[22] || (p[22] = e("span", { class: "text-gray-500 mr-2" }, "To:", -1)),
                    q(" " + M(L.value.emailTo), 1)
                  ]),
                  e("div", null, [
                    p[23] || (p[23] = e("span", { class: "text-gray-500 mr-2" }, "Subject:", -1)),
                    q(" " + M(L.value.emailSubject), 1)
                  ])
                ]),
                e("div", ml, [
                  p[24] || (p[24] = e("div", { class: "flex gap-2" }, null, -1)),
                  e("div", null, "Words: " + M(ne.value), 1)
                ]),
                X(e("textarea", {
                  "onUpdate:modelValue": p[6] || (p[6] = (w) => L.value.userAnswerText = w),
                  onInput: p[7] || (p[7] = (w) => s(L.value)),
                  class: "w-full flex-grow resize-none border border-gray-300 p-4 outline-none text-[14px] md:text-[15px] rounded-b-lg focus:ring-1 focus:ring-[#00796B]",
                  placeholder: "Write your email..."
                }, null, 544), [
                  [ee, L.value.userAnswerText]
                ])
              ])
            ])) : k.value === "writing" && L.value.type === "academic_discussion" ? (m(), v("div", xl, [
              e("div", gl, [
                e("div", vl, [
                  p[25] || (p[25] = e("div", { class: "font-bold text-[#00796B] mb-2 uppercase text-[11px] md:text-xs tracking-wider" }, "Professor's Question", -1)),
                  e("p", hl, M(L.value.professorPrompt), 1)
                ]),
                (m(!0), v(oe, null, ae(L.value.studentResponses, (w, u) => (m(), v("div", {
                  key: u,
                  class: "bg-white p-4 md:p-5 border border-gray-200 rounded-lg shadow-sm"
                }, [
                  e("div", bl, M(w.studentName), 1),
                  e("p", wl, '"' + M(w.content) + '"', 1)
                ]))), 128))
              ]),
              e("div", yl, [
                e("div", _l, [
                  p[26] || (p[26] = e("div", { class: "font-bold text-gray-600" }, "Response Area", -1)),
                  e("div", null, "Words: " + M(ne.value), 1)
                ]),
                X(e("textarea", {
                  "onUpdate:modelValue": p[8] || (p[8] = (w) => L.value.userAnswerText = w),
                  onInput: p[9] || (p[9] = (w) => s(L.value)),
                  class: "w-full flex-grow resize-none border border-t-0 border-gray-300 p-4 outline-none text-[14px] md:text-[15px] rounded-b-lg focus:ring-1 focus:ring-[#00796B]",
                  placeholder: "Contributing to the discussion..."
                }, null, 544), [
                  [ee, L.value.userAnswerText]
                ])
              ])
            ])) : se("", !0)
          ])
        ], 64)) : se("", !0)
      ])
    ]));
  }
}), $l = /* @__PURE__ */ Pe(kl, [["__scopeId", "data-v-4ecc883a"]]), Cl = { class: "min-h-screen bg-[#525355] flex justify-center font-sans antialiased p-0 md:p-4" }, Al = { class: "w-full max-w-[1200px] min-h-screen md:min-h-[700px] md:h-[90vh] flex flex-col shadow-lg overflow-hidden md:rounded-lg relative bg-white" }, Tl = { class: "bg-[#00796B] h-[60px] flex justify-between items-center px-4 md:px-6 gap-2 md:gap-3 shrink-0" }, Sl = { class: "text-white font-medium flex items-center gap-2 text-[14px] md:text-[15px] w-20 md:w-32" }, El = { key: 0 }, Ll = { class: "flex items-center gap-2 md:gap-3" }, Il = { class: "relative flex items-center" }, Rl = {
  key: 0,
  class: "absolute top-[120%] right-0 bg-white rounded-xl shadow-xl border border-gray-300 p-5 w-64 md:w-72 z-50 flex flex-col"
}, Bl = { class: "flex items-end justify-between h-10 gap-[2px] mb-3 mt-2 px-1" }, jl = ["disabled"], Nl = ["disabled"], Ol = { class: "hidden xs:inline" }, Ml = { class: "xs:hidden" }, Vl = {
  key: 0,
  class: "flex-grow flex flex-col items-center justify-center text-gray-500"
}, Ul = { class: "animate-pulse flex flex-col items-center" }, Pl = {
  key: 0,
  class: "text-sm mt-2 text-red-500"
}, Dl = { class: "border-b border-gray-300 px-4 md:px-6 py-2 md:py-2.5 text-[12px] md:text-[14px] text-[#333333] flex items-center gap-2 shrink-0 bg-gray-50 overflow-x-auto whitespace-nowrap" }, zl = { class: "flex-grow flex flex-col relative bg-white overflow-y-auto" }, Fl = {
  key: 0,
  class: "absolute inset-0 z-40 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center"
}, Ql = {
  key: 1,
  class: "h-full flex flex-col p-6 md:p-16 items-center"
}, Gl = { class: "max-w-4xl w-full" }, Hl = { class: "text-[15px] md:text-[17px] text-[#333] leading-relaxed w-full" }, Wl = { class: "mb-4 md:mb-6" }, Jl = {
  key: 2,
  class: "h-full flex flex-col items-center justify-center p-6 md:p-12 bg-white text-center"
}, Kl = { class: "max-w-3xl" }, Yl = { class: "text-xl md:text-[28px] font-medium text-black mb-6" }, Zl = { class: "text-left bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-lg shadow-sm" }, Xl = { class: "text-[16px] md:text-[18px] text-[#333] mb-4 md:mb-6 italic" }, ql = { class: "text-[14px] md:text-[16px] text-[#555] whitespace-pre-line leading-relaxed" }, er = {
  key: 3,
  class: "h-full flex flex-col items-center justify-center p-6 md:p-12"
}, tr = { class: "text-xl md:text-[24px] font-medium text-[#00796B] mb-8 animate-pulse text-center" }, sr = ["src"], nr = {
  key: 4,
  class: "h-full flex flex-col p-6 md:p-10 bg-white"
}, or = {
  key: 0,
  class: "bg-blue-50 border border-blue-200 rounded-lg p-6 md:p-8 mb-6 md:mb-8 shadow-sm"
}, lr = { class: "text-[18px] md:text-[22px] text-[#333] font-medium leading-relaxed" }, rr = {
  key: 1,
  class: "bg-gray-50 border border-gray-200 rounded-lg p-5 md:p-6 mb-6 md:mb-8 text-center shadow-sm"
}, ar = { class: "flex-grow flex flex-col items-center justify-center gap-6" }, ir = { class: "flex flex-col items-center" }, dr = { class: "text-[64px] md:text-[84px] font-bold text-black leading-none" }, ur = { class: "flex items-end justify-center gap-1 md:gap-1.5 h-10 md:h-12 mt-4 md:mt-6" }, cr = {
  key: 2,
  class: "flex-grow flex items-center justify-center text-gray-500"
}, pr = /* @__PURE__ */ me({
  __name: "SpeakingSection",
  setup(t) {
    const n = Ee(), o = _e(), a = n.params.testId, i = re("testData"), y = re("isGlobalLoading");
    re("updateUserInput");
    const E = re("syncAllData"), N = re("state"), g = re("saveToLocalStorage"), T = K(null), A = K([]), x = K(0), f = K("section_intro"), k = K(0), Y = K(0), j = K(!1), R = K(!1), U = K(60), Q = K(!1), G = K(""), L = K(!1);
    K(!1);
    const le = K(null), ne = K(!1);
    let O = null;
    const Z = typeof window < "u" ? window.speechSynthesis : null, d = ie(() => y?.value), s = ie(() => A.value[x.value] || null), l = K(null), C = K([]), _ = async () => {
      try {
        const w = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        l.value = new MediaRecorder(w), C.value = [], l.value.ondataavailable = (B) => {
          B.data.size > 0 && C.value.push(B.data);
        };
        const u = s.value.originalTaskIdx, S = s.value.originalQIdx, r = s.value.audioText, $ = s.value.type, h = s.value.responseTime;
        l.value.onstop = async () => {
          ne.value = !0;
          const B = new Blob(C.value, { type: "audio/webm" });
          await H(B, u, S, r, $), ne.value = !1;
        }, l.value.start(), Y.value = h, O && clearInterval(O), O = setInterval(() => {
          Y.value--, Y.value <= 0 && (clearInterval(O), P());
        }, 1e3);
      } catch (w) {
        console.error("Microphone access denied:", w), G.value = "Microphone access denied. Please allow it to record your response.";
      }
    }, P = () => {
      l.value && l.value.state === "recording" && (l.value.stop(), l.value.stream.getTracks().forEach((w) => w.stop())), O && clearInterval(O);
    }, H = async (w, u, S, r, $) => {
      L.value = !0;
      try {
        const h = new FileReader();
        h.readAsDataURL(w), h.onloadend = async () => {
          const B = h.result.split(",")[1], z = await (await fetch("/client/api/i/skillee/toefl_practice?typ=eval_speaking_audio", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.get("token")}`
            },
            body: JSON.stringify({ audio: B, task_type: $, question_text: r })
          })).json();
          if (z.success && z.eval) {
            le.value = z.eval;
            const D = A.value.find((V) => V.originalTaskIdx === u && V.originalQIdx === S);
            if (D && (D.user_result = z.eval, z.eval.audio_url && (D.user_input = { data: z.eval.audio_url })), i.value) {
              const V = i.value.find((ce) => ce.type.toLowerCase() === "speaking");
              V?.tasks?.[u]?.questions?.[S] && (V.tasks[u].questions[S].user_result = z.eval, z.eval.audio_url && (V.tasks[u].questions[S].user_input = { data: z.eval.audio_url }));
            }
            setTimeout(() => {
              p();
            }, 1500);
          } else
            p();
        };
      } catch (h) {
        console.error("Evaluation error:", h), p();
      } finally {
        L.value = !1;
      }
    }, J = (w) => {
      const u = [];
      let S = 1;
      w.forEach((r, $) => {
        const h = (r.type || "").toLowerCase().replace(/_/g, " ").replace(/-/g, " ").trim();
        if (!r.questions || !Array.isArray(r.questions) || r.questions.length === 0) {
          const I = r.question || r.text || r.prompt || r.audioText;
          I ? r.questions = [{
            question: I,
            user_input: r.user_input || { data: "" },
            user_result: r.user_result || { data: "" },
            imageUrl: r.imageUrl || null
          }] : r.questions = [];
        }
        const B = r.prompts ? r.prompts.length : r.questions ? r.questions.length : 0;
        for (; r.questions.length < B; )
          r.questions.push({ user_input: { data: "" }, user_result: { data: "" } });
        r.prompts && r.prompts.length > 0 ? r.prompts.forEach((I, W) => {
          const z = r.questions[W] || {};
          u.push({
            type: "listen_and_repeat",
            taskNumber: r.taskNumber || $ + 1,
            title: r.title || "Listen and Repeat",
            context: r.context || "",
            instructions: r.instructions || r.instruction || "Listen carefully and repeat.",
            audioText: z.question || z.text || I,
            responseTime: r.responseTime || 15,
            globalIndex: S++,
            isFirstInGroup: W === 0,
            originalTaskIdx: $,
            originalQIdx: W,
            user_input: z.user_input?.data || "",
            user_result: z.user_result || { data: "" },
            imageUrl: z.imageUrl || r.imageUrl || null
          });
        }) : r.questions && r.questions.length > 0 && r.questions.forEach((I, W) => {
          const z = typeof I == "object" ? I.question || I.text : I, D = h.includes("repeat") || h.includes("listen") ? "listen_and_repeat" : "interview";
          u.push({
            type: D,
            taskNumber: r.taskNumber || $ + 1,
            title: r.title || (D === "interview" ? "Interview" : "Listen and Repeat"),
            context: r.context || "",
            instructions: r.instructions || r.instruction || (D === "interview" ? "Respond to the interviewer." : "Listen and repeat."),
            audioText: z,
            responseTime: r.responseTime || (D === "listen_and_repeat" ? 15 : 60),
            globalIndex: S++,
            isFirstInGroup: W === 0,
            originalTaskIdx: $,
            originalQIdx: W,
            user_input: I.user_input?.data || "",
            user_result: I.user_result || { data: "" },
            imageUrl: I.imageUrl || r.imageUrl || null
          });
        });
      }), k.value = u.length, A.value = [{ type: "section_intro" }, ...u], N.value.section === "speaking" ? x.value = (N.value.task || 1) - 1 : (N.value.section = "speaking", N.value.module = 1, N.value.task = 1);
    };
    we(x, (w) => {
      N.value.task = w + 1, g();
    }), we(() => i?.value, (w) => {
      if (w && w.length > 0) {
        const u = w.find((S) => S.type?.toLowerCase() === "speaking");
        u && (!T.value || A.value.length === 0 ? (T.value = u, J(u.tasks || [])) : u.tasks?.forEach((S, r) => {
          S.questions?.forEach(($, h) => {
            const B = A.value.find((I) => I.originalTaskIdx === r && I.originalQIdx === h);
            B && $.user_result && (B.user_result = $.user_result);
          });
        }));
      }
    }, { immediate: !0 });
    const F = (w, u) => {
      if (!Z) return u();
      Z.cancel();
      const S = new SpeechSynthesisUtterance(w || "");
      S.volume = U.value / 100, S.onstart = () => Q.value = !0, S.onend = () => {
        Q.value = !1, u();
      }, Z.speak(S);
    }, te = () => {
      if (!T.value) {
        o.push(`/writing-section/${a}`);
        return;
      }
      f.value === "section_intro" ? (x.value = 1, ue()) : p();
    }, ue = () => {
      f.value = "directions", setTimeout(() => {
        j.value = !0, pe();
      }, 2500);
    }, pe = () => {
      s.value && (f.value = s.value.type === "interview" ? "interview_asking" : "listening", F(s.value.audioText, () => {
        f.value = "recording", _();
      }));
    }, b = () => {
      f.value === "recording" && P();
    }, c = () => {
      Z && Z.cancel(), O && clearInterval(O), f.value === "recording" && P(), p();
    }, p = async () => {
      if (x.value < A.value.length - 1)
        x.value++, N.value.task = x.value + 1, g(), s.value.isFirstInGroup ? ue() : pe();
      else {
        if (ne.value) {
          for (L.value = !0; ne.value; )
            await new Promise((w) => setTimeout(w, 500));
          L.value = !1;
        }
        await E("speaking", !0), o.push({ name: "outcome", params: { testId: a }, query: { finished: "speaking" } });
      }
    };
    return Ue(() => {
      O && clearInterval(O), Z && Z.cancel(), l.value?.state === "recording" && l.value.stream.getTracks().forEach((w) => w.stop());
    }), (w, u) => (m(), v("div", Cl, [
      e("div", Al, [
        e("header", Tl, [
          e("div", Sl, [
            f.value === "recording" ? (m(), v("span", El, M(Y.value) + "s left", 1)) : se("", !0)
          ]),
          e("div", Ll, [
            e("div", Il, [
              e("button", {
                onClick: u[0] || (u[0] = (S) => R.value = !R.value),
                class: "bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded-full px-3 md:px-5 py-1.5 text-[14px] md:text-[15px] font-medium cursor-pointer flex items-center gap-2 transition-colors"
              }, [...u[3] || (u[3] = [
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
              R.value ? (m(), v("div", Rl, [
                e("button", {
                  onClick: u[1] || (u[1] = (S) => R.value = !1),
                  class: "absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-sm font-bold"
                }, "✕"),
                e("div", Bl, [
                  (m(), v(oe, null, ae(20, (S) => e("div", {
                    key: S,
                    class: be(["w-[6px] rounded-full transition-colors duration-150", S * 5 <= U.value ? "bg-[#00796B]" : "bg-[#00796B]/20"]),
                    style: Se({ height: `${20 + S * 4}%` })
                  }, null, 6)), 64))
                ]),
                X(e("input", {
                  type: "range",
                  "onUpdate:modelValue": u[2] || (u[2] = (S) => U.value = S),
                  min: "0",
                  max: "100",
                  class: "w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer custom-slider"
                }, null, 512), [
                  [ee, U.value]
                ])
              ])) : se("", !0)
            ]),
            e("button", {
              onClick: c,
              disabled: d.value,
              class: "bg-[#EF5350] text-white border-none rounded-full px-3 md:px-5 py-1.5 text-[13px] md:text-[14px] font-bold flex items-center gap-1 hover:bg-red-600 transition-colors shadow-sm"
            }, [...u[4] || (u[4] = [
              q(" SKIP ", -1),
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
              onClick: te,
              disabled: Q.value || d.value || f.value === "recording" || L.value,
              class: "bg-white text-[#00796B] border-none rounded-full px-4 md:px-6 py-1.5 text-[14px] md:text-[15px] font-medium flex items-center gap-1 hover:bg-gray-100 transition-colors disabled:opacity-50"
            }, [
              e("span", Ol, M(f.value === "section_intro" ? "Start Question" : "Next"), 1),
              e("span", Ml, M(f.value === "section_intro" ? "Start" : "Next"), 1),
              u[5] || (u[5] = e("svg", {
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
            ], 8, Nl)
          ])
        ]),
        d.value ? (m(), v("div", Vl, [
          e("div", Ul, [
            u[6] || (u[6] = e("div", { class: "w-10 h-10 border-4 border-[#00796B] border-t-transparent rounded-full animate-spin mb-4" }, null, -1)),
            u[7] || (u[7] = e("div", null, "Loading Speaking Section...", -1)),
            G.value ? (m(), v("div", Pl, M(G.value), 1)) : se("", !0)
          ])
        ])) : A.value.length > 0 && s.value ? (m(), v(oe, { key: 1 }, [
          e("div", Dl, [
            u[10] || (u[10] = e("span", null, "Speaking", -1)),
            s.value.type !== "section_intro" ? (m(), v(oe, { key: 0 }, [
              u[8] || (u[8] = e("span", { class: "text-gray-400" }, "|", -1)),
              e("span", null, "Task " + M(s.value.taskNumber), 1),
              u[9] || (u[9] = e("span", { class: "text-gray-400" }, "|", -1)),
              e("span", null, "Part " + M(s.value.globalIndex) + " of " + M(k.value), 1)
            ], 64)) : se("", !0)
          ]),
          e("main", zl, [
            L.value ? (m(), v("div", Fl, [...u[11] || (u[11] = [
              Ce('<div class="relative w-24 h-24 mb-8" data-v-144966a3><div class="absolute inset-0 border-4 border-[#00796B]/20 rounded-full" data-v-144966a3></div><div class="absolute inset-0 border-4 border-[#00796B] border-t-transparent rounded-full animate-spin" data-v-144966a3></div><div class="absolute inset-0 flex items-center justify-center" data-v-144966a3><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-[#00796B] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-144966a3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" data-v-144966a3></path></svg></div></div><h3 class="text-2xl font-bold text-gray-800 mb-2" data-v-144966a3>Analyzing Your Response</h3><p class="text-gray-500 max-w-md" data-v-144966a3>Our AI is evaluating your response. We will move to the next question shortly...</p>', 3)
            ])])) : se("", !0),
            s.value.type === "section_intro" ? (m(), v("div", Ql, [
              e("div", Gl, [
                u[16] || (u[16] = e("h2", { class: "text-2xl md:text-[32px] font-medium text-black mb-6 md:mb-10 border-b-2 border-[#00796B] pb-2" }, "Speaking Section Directions", -1)),
                e("div", Hl, [
                  e("p", Wl, [
                    u[12] || (u[12] = q("This section measures your ability to speak in English. You will complete ", -1)),
                    e("strong", null, M(k.value), 1),
                    u[13] || (u[13] = q(" speaking tasks.", -1))
                  ]),
                  u[14] || (u[14] = e("div", { class: "bg-blue-50 border border-blue-200 p-4 rounded-lg text-[14px] md:text-[15px] mb-6 md:mb-8 flex items-start gap-3" }, [
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
                      q(" Ensure your microphone is connected and working.")
                    ])
                  ], -1)),
                  u[15] || (u[15] = e("p", { class: "text-gray-600 italic text-center" }, [
                    q("Click "),
                    e("strong", null, "Start Question"),
                    q(" to proceed to the first task.")
                  ], -1))
                ])
              ])
            ])) : f.value === "directions" ? (m(), v("div", Jl, [
              e("div", Kl, [
                e("h2", Yl, M(s.value.title), 1),
                e("div", Zl, [
                  u[17] || (u[17] = e("p", { class: "text-[16px] md:text-[18px] font-bold text-[#00796B] mb-2" }, "Context:", -1)),
                  e("p", Xl, '"' + M(s.value.context || "Prepare to speak.") + '"', 1),
                  e("p", ql, M(s.value.instructions || "Follow the prompts."), 1)
                ]),
                u[18] || (u[18] = e("div", { class: "mt-8 text-[#00796B] font-medium animate-pulse" }, " Preparing task... ", -1))
              ])
            ])) : f.value === "listening" || f.value === "interview_asking" ? (m(), v("div", er, [
              e("div", tr, M(f.value === "listening" ? "Listen carefully..." : "The interviewer is asking..."), 1),
              e("div", {
                class: be(["relative w-48 h-48 md:w-64 md:h-64 overflow-hidden border-4", [Q.value ? "border-green-500 shadow-xl avatar-pulse" : "border-gray-300", s.value.type === "listen_and_repeat" ? "rounded-2xl shadow-lg" : "rounded-full"]])
              }, [
                e("img", {
                  src: s.value.imageUrl || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
                  alt: "Interviewer",
                  class: "w-full h-full object-cover"
                }, null, 8, sr)
              ], 2)
            ])) : f.value === "recording" ? (m(), v("div", nr, [
              s.value.type === "interview" ? (m(), v("div", or, [
                u[19] || (u[19] = e("h3", { class: "text-[16px] md:text-[18px] font-bold text-[#00796B] mb-2 md:mb-3" }, "Interview Question:", -1)),
                e("p", lr, M(s.value.audioText), 1)
              ])) : (m(), v("div", rr, [...u[20] || (u[20] = [
                e("p", { class: "text-[18px] md:text-[20px] text-[#333] font-medium" }, "Repeat the sentence you just heard.", -1)
              ])])),
              e("div", ar, [
                e("div", ir, [
                  u[21] || (u[21] = e("div", { class: "flex items-center gap-2 text-red-600 font-semibold uppercase tracking-widest text-lg md:text-[22px] animate-pulse mb-2" }, [
                    e("div", { class: "w-3 h-3 md:w-4 md:h-4 bg-red-600 rounded-full" }),
                    q(" Recording ")
                  ], -1)),
                  e("div", dr, M(Y.value), 1),
                  u[22] || (u[22] = e("div", { class: "text-[14px] md:text-[16px] text-gray-500 uppercase" }, "Seconds Remaining", -1)),
                  e("button", {
                    onClick: b,
                    class: "mt-6 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg text-sm font-medium transition-colors border border-gray-300 shadow-sm"
                  }, " End Recording ")
                ]),
                e("div", ur, [
                  (m(), v(oe, null, ae(12, (S) => e("div", {
                    key: S,
                    class: "w-1.5 md:w-2 bg-[#00796B] rounded-t-sm audio-bar",
                    style: Se({ animationDelay: `${S * 0.1}s` })
                  }, null, 4)), 64))
                ])
              ])
            ])) : se("", !0)
          ])
        ], 64)) : (m(), v("div", cr, " No speaking tasks found. "))
      ])
    ]));
  }
}), fr = /* @__PURE__ */ Pe(pr, [["__scopeId", "data-v-144966a3"]]), mr = { class: "min-h-screen bg-[#525355] flex justify-center font-sans p-0 md:p-4" }, xr = { class: "w-full max-w-[1200px] min-h-screen md:min-h-[700px] md:h-[90vh] flex flex-col shadow-lg overflow-hidden md:rounded-lg relative bg-white" }, gr = { class: "bg-[#00796B] h-[60px] flex justify-end items-center px-4 md:px-6 gap-3 shrink-0" }, vr = ["disabled"], hr = ["disabled"], br = {
  key: 0,
  class: "flex-grow flex flex-col items-center justify-center text-gray-500"
}, wr = { class: "animate-pulse flex flex-col items-center" }, yr = {
  key: 0,
  class: "text-sm mt-2 text-red-500"
}, _r = {
  key: 1,
  class: "flex-grow flex flex-col pt-16 md:pt-24 px-6 md:px-16 text-[#333333]"
}, kr = { class: "text-2xl md:text-[28px] font-light mb-4 md:mb-6" }, $r = { class: "text-base md:text-[18px] leading-relaxed" }, Cr = { class: "border-b border-gray-300 px-4 md:px-6 py-2 md:py-2.5 text-[12px] md:text-[14px] text-[#333333] flex items-center gap-2 shrink-0 bg-gray-50 overflow-x-auto whitespace-nowrap" }, Ar = { class: "flex-grow px-6 py-8 md:px-10 md:py-10 flex flex-col items-center relative overflow-y-auto" }, Tr = {
  key: 0,
  class: "flex flex-col w-full max-w-4xl items-center mt-4"
}, Sr = { class: "text-xl md:text-[32px] font-normal text-black mb-8 md:mb-16 text-center leading-tight" }, Er = { class: "flex justify-center items-end w-full h-[250px] md:h-[350px]" }, Lr = ["src"], Ir = {
  key: 1,
  class: "flex flex-col md:flex-row w-full max-w-5xl gap-10 md:gap-16 items-center md:items-start justify-center mt-6 md:mt-12"
}, Rr = { class: "flex justify-center items-end gap-4 w-full md:w-[350px] shrink-0 h-[200px] md:h-[280px]" }, Br = ["src"], jr = { class: "flex flex-col gap-5 md:gap-6 pt-0 md:pt-4 w-full md:w-auto max-w-lg" }, Nr = { class: "text-lg md:text-[19px] font-bold text-black mb-2 leading-snug" }, Or = { class: "flex flex-col gap-4 md:gap-5" }, Mr = { class: "relative flex items-center justify-center mt-1 shrink-0" }, Vr = ["value"], Ur = { class: "text-[16px] md:text-[17px] text-[#333] group-hover:text-black leading-snug" }, Pr = { class: "font-bold" }, Dr = /* @__PURE__ */ me({
  __name: "listeningSection",
  setup(t) {
    const n = _e(), a = Ee().params.testId, i = re("testData"), y = re("isGlobalLoading"), E = re("updateUserInput"), N = re("syncAllData"), g = re("state"), T = re("saveToLocalStorage"), A = K(null), x = K(0), f = K(0), k = K([]), Y = K(0), j = K(!1), R = K("question"), U = K(!1), Q = K(!1);
    K(!1);
    const G = K(60), L = K(""), le = typeof window < "u" ? window.speechSynthesis : null, ne = ie(() => y?.value), O = ie(() => {
      const J = k.value[f.value];
      if (!J) return null;
      if (J.isMCQ && J.levelVariants) {
        let F = g.value.listeningAbilityLevel;
        F || (F = J.availableLevels[0] || "default", g.value.listeningAbilityLevel = F), J.availableLevels.includes(F) || (F = J.availableLevels[0] || "default");
        const te = J.levelVariants[F] || J.levelVariants.default;
        return te ? {
          ...J,
          activeLevel: F,
          activeVariantIndex: J.rawQuestionObj.selected_indices ? J.rawQuestionObj.selected_indices[F] : void 0,
          questionText: te.question || "Select the best response.",
          options: (te.options || []).map((ue, pe) => ({
            id: String.fromCharCode(65 + pe),
            text: ue
          })),
          answer: te.answer,
          cref: te.cref,
          selectedAnswer: J.rawQuestionObj?.user_input?.data || te.user_input?.data || "",
          user_result: J.rawQuestionObj?.user_result && J.rawQuestionObj.user_result.data ? J.rawQuestionObj.user_result : te.user_result && te.user_result.data ? te.user_result : { data: "" },
          imageUrl: te.imageUrl || J.rawQuestionObj?.imageUrl || null
        } : J;
      }
      return J;
    }), Z = (J, F = !1) => {
      if (!J || !J.isMCQ) return;
      const te = ["a1", "a2", "b1", "b2", "c1", "c2"], ue = g.value.listeningAbilityLevel, pe = te.indexOf(ue);
      if (pe === -1) return;
      let b = !1;
      !F && J.selectedAnswer && (b = J.selectedAnswer === J.answer);
      let c = pe;
      !F && b ? c = Math.min(pe + 1, te.length - 1) : c = Math.max(pe - 1, 0), g.value.listeningAbilityLevel = te[c], console.log(`[Listening Adaptive] ${F ? "Skipped" : b ? "Correct" : "Incorrect"}. Level adjusted from ${ue} to ${g.value.listeningAbilityLevel}`);
    }, d = (J, F) => {
      if (!le || !J) {
        F?.();
        return;
      }
      le.cancel();
      const te = new SpeechSynthesisUtterance(J);
      te.volume = G.value / 100, te.onstart = () => {
        U.value = !0;
      }, te.onend = () => {
        U.value = !1, F && F();
      }, le.speak(te);
    }, s = () => {
      const J = O.value;
      J && (J.isFirstInTask ? (R.value = "intro", d(J.audioText, () => {
        R.value = "question", setTimeout(() => d(J.questionText), 600);
      })) : (R.value = "question", d(J.audioText || J.questionText)));
    }, l = () => {
      const J = A.value.modules[x.value];
      if (!J) return;
      const F = [];
      let te = 0;
      J.tasks.forEach((ue, pe) => {
        const b = ue.transcript || ue.audioTranscript || "";
        ue.questions.forEach((c, p) => {
          te++;
          let w = {};
          const u = ["a1", "a2", "b1", "b2", "c1", "c2"];
          let S = [];
          if (u.forEach((r) => {
            if (c[r])
              if (S.push(r), Array.isArray(c[r]) && c[r].length > 0) {
                if (c.selected_indices || (c.selected_indices = {}), c.selected_indices[r] === void 0) {
                  let $ = c[r].findIndex((h) => h.user_input && h.user_input.data);
                  $ !== -1 ? c.selected_indices[r] = $ : c.selected_indices[r] = Math.floor(Math.random() * c[r].length);
                }
                w[r] = c[r][c.selected_indices[r]];
              } else typeof c[r] == "object" && !Array.isArray(c[r]) && (w[r] = c[r]);
          }), S.length === 0) {
            let r = c;
            if (!r.question)
              if (Array.isArray(c) && c.length > 0) r = c[0];
              else if (c[0] && c[0].question) r = c[0];
              else {
                const $ = Object.keys(c).find((h) => Array.isArray(c[h]) && c[h].length > 0 && c[h][0].question);
                if ($)
                  r = c[$][0];
                else {
                  const h = Object.keys(c).find((B) => c[B] && typeof c[B] == "object" && c[B].question);
                  h && (r = c[h]);
                }
              }
            w.default = r, S.push("default");
          }
          F.push({
            id: `mcq_${pe}_${p}`,
            isMCQ: !0,
            introTitle: ue.passageTitle || `Module ${x.value + 1}`,
            audioText: p === 0 ? b : null,
            levelVariants: w,
            availableLevels: S,
            rawQuestionObj: c,
            globalQuestionNum: te,
            isFirstInTask: p === 0,
            originalTaskIdx: pe,
            originalQIdx: p,
            questionLabel: `Question ${te}`
          });
        });
      }), k.value = F, Y.value = te, g.value.section === "listening" && (g.value.module || 1) - 1 === x.value ? f.value = (g.value.task || 1) - 1 : f.value = 0, s();
    }, C = (J) => {
      E && E("listening", x.value, J.originalTaskIdx, J.originalQIdx, J.selectedAnswer, J.activeLevel, J.activeVariantIndex);
    }, _ = async (J) => {
      if (!A.value) {
        n.push(`/writing-section/${a}`);
        return;
      }
      if (j.value) {
        j.value = !1, x.value++, l();
        return;
      }
      if (!(R.value === "intro" && U.value))
        if (R.value === "intro")
          le && le.cancel(), R.value = "question", d(O.value.questionText);
        else {
          if (!J && !O.value.selectedAnswer) {
            Q.value = !0;
            return;
          }
          if (le && le.cancel(), Z(O.value, J), f.value < k.value.length - 1)
            f.value++, s();
          else if (x.value < A.value.modules.length - 1)
            j.value = !0;
          else
            try {
              y && (y.value = !0), await N("listening", !0);
            } catch (F) {
              console.error("Save failed", F);
            } finally {
              y && (y.value = !1), n.push(`/writing-section/${a}`);
            }
        }
    }, P = () => {
      if (R.value === "intro") {
        le && le.cancel(), R.value = "question", d(O.value.questionText);
        return;
      }
      _(!0);
    }, H = async () => {
      _(!1);
    };
    return we(() => i?.value, (J) => {
      if (J && J.length > 0) {
        const F = J.find((te) => te.type?.toLowerCase() === "listening");
        F ? A.value ? F.modules?.[x.value]?.tasks?.forEach((te, ue) => {
          te.questions?.forEach((pe, b) => {
            const c = k.value.find((p) => p.originalTaskIdx === ue && p.originalQIdx === b);
            c && pe.user_result && (c.user_result = pe.user_result);
          });
        }) : (A.value = F, g.value.section === "listening" ? x.value = (g.value.module || 1) - 1 : (g.value.section = "listening", g.value.module = 1, g.value.task = 1), l()) : (L.value = "Error: Database is missing the Listening section data.", console.error(L.value));
      }
    }, { immediate: !0 }), we([x, f], ([J, F]) => {
      g.value.module = J + 1, g.value.task = F + 1, T();
    }), Ue(() => le?.cancel()), (J, F) => (m(), v("div", mr, [
      e("div", xr, [
        e("header", gr, [
          j.value ? se("", !0) : (m(), v("button", {
            key: 0,
            onClick: P,
            disabled: ne.value,
            class: "bg-transparent text-white border border-white/50 hover:border-white hover:bg-white/10 rounded-full px-5 md:px-6 py-1.5 text-[14px] md:text-[15px] font-medium cursor-pointer transition-colors disabled:opacity-50"
          }, M(R.value === "intro" ? "Skip Audio" : "Skip Question"), 9, vr)),
          e("button", {
            onClick: H,
            disabled: ne.value,
            class: "bg-white text-[#00796B] border-none rounded-full px-5 md:px-6 py-1.5 text-[14px] md:text-[15px] font-medium cursor-pointer flex items-center gap-1 hover:bg-gray-100 transition-colors disabled:opacity-50"
          }, [...F[2] || (F[2] = [
            q(" Next ", -1),
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
          ])], 8, hr)
        ]),
        ne.value ? (m(), v("div", br, [
          e("div", wr, [
            F[3] || (F[3] = e("div", { class: "w-10 h-10 border-4 border-[#00796B] border-t-transparent rounded-full animate-spin mb-4" }, null, -1)),
            F[4] || (F[4] = e("div", null, "Loading Listening Section...", -1)),
            L.value ? (m(), v("div", yr, M(L.value), 1)) : se("", !0)
          ])
        ])) : j.value ? (m(), v("div", _r, [
          e("h2", kr, "End of Module " + M(x.value + 1), 1),
          F[9] || (F[9] = e("hr", { class: "w-full border-gray-300 mb-6 md:mb-8" }, null, -1)),
          e("p", $r, [
            q(" You have completed Module " + M(x.value + 1) + ". ", 1),
            F[5] || (F[5] = e("br", null, null, -1)),
            F[6] || (F[6] = q(" Select ", -1)),
            F[7] || (F[7] = e("strong", { class: "font-bold" }, "Next", -1)),
            F[8] || (F[8] = q(" to continue. ", -1))
          ])
        ])) : k.value.length > 0 && O.value ? (m(), v(oe, { key: 2 }, [
          e("div", Cr, [
            F[11] || (F[11] = e("span", null, "Listening", -1)),
            F[12] || (F[12] = e("span", { class: "text-gray-400" }, "|", -1)),
            e("span", null, "Module " + M(x.value + 1), 1),
            R.value === "question" ? (m(), v(oe, { key: 0 }, [
              F[10] || (F[10] = e("span", { class: "text-gray-400" }, "|", -1)),
              e("span", null, "Question " + M(O.value.globalQuestionNum) + " of " + M(Y.value), 1)
            ], 64)) : se("", !0)
          ]),
          e("main", Ar, [
            R.value === "intro" ? (m(), v("div", Tr, [
              e("h2", Sr, M(O.value.introTitle), 1),
              e("div", Er, [
                e("img", {
                  src: O.value.imageUrl || "https://api.dicebear.com/9.x/open-peeps/svg?seed=Professor&backgroundColor=transparent",
                  class: "h-full w-auto drop-shadow-sm"
                }, null, 8, Lr)
              ])
            ])) : (m(), v("div", Ir, [
              e("div", Rr, [
                e("img", {
                  src: O.value.imageUrl || "https://api.dicebear.com/9.x/open-peeps/svg?seed=Jessica&backgroundColor=transparent",
                  class: "h-full w-auto drop-shadow-sm"
                }, null, 8, Br)
              ]),
              e("div", jr, [
                e("h3", Nr, M(O.value.questionText), 1),
                e("div", Or, [
                  (m(!0), v(oe, null, ae(O.value.options, (te) => (m(), v("label", {
                    key: te.id,
                    class: "flex items-start gap-3 md:gap-4 cursor-pointer group"
                  }, [
                    e("div", Mr, [
                      X(e("input", {
                        type: "radio",
                        value: te.id,
                        "onUpdate:modelValue": F[0] || (F[0] = (ue) => O.value.selectedAnswer = ue),
                        onChange: F[1] || (F[1] = (ue) => C(O.value)),
                        class: "peer appearance-none w-[20px] h-[20px] md:w-[22px] md:h-[22px] border border-black rounded-full checked:border-black cursor-pointer"
                      }, null, 40, Vr), [
                        [kt, O.value.selectedAnswer]
                      ]),
                      F[13] || (F[13] = e("div", { class: "absolute w-[10px] h-[10px] bg-black rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" }, null, -1))
                    ]),
                    e("span", Ur, [
                      e("span", Pr, "(" + M(te.id) + ")", 1),
                      q(" " + M(te.text), 1)
                    ])
                  ]))), 128))
                ])
              ])
            ]))
          ])
        ], 64)) : se("", !0)
      ])
    ]));
  }
}), zr = /* @__PURE__ */ me({
  __name: "listeningpage",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (i, y) => (m(), Ae(Dr, {
      _p: ge(o),
      _pp: ge(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), Fr = { class: "min-h-screen bg-gradient-to-br from-[#004D40] via-[#00796B] to-[#004D40] flex items-center justify-center p-4 md:p-6 overflow-hidden relative" }, Qr = { class: "bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/20 shadow-2xl max-w-lg w-full text-center relative z-10 transition-all duration-500 hover:shadow-teal-900/40" }, Gr = { class: "space-y-4" }, Hr = {
  __name: "mainPage",
  setup(t) {
    const n = _e(), o = (a) => {
      n.push(`/test/copywrite/${a}`);
    };
    return (a, i) => (m(), v("div", Fr, [
      i[4] || (i[4] = e("div", { class: "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-3xl animate-pulse" }, null, -1)),
      i[5] || (i[5] = e("div", {
        class: "absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-3xl animate-pulse",
        style: { "animation-delay": "2s" }
      }, null, -1)),
      e("div", Qr, [
        i[3] || (i[3] = Ce('<div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl transform transition-transform hover:rotate-6"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 md:h-14 md:w-14 text-[#00796B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg></div><h1 class="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">TOEFL <span class="text-teal-300">Mastery</span></h1><p class="text-teal-50/80 mb-10 text-base md:text-xl leading-relaxed font-light">Elevate your English proficiency with high-fidelity practice simulations.</p>', 3)),
        e("div", Gr, [
          e("button", {
            onClick: i[0] || (i[0] = (y) => o("7d4e9be6-66c0-46cb-9911-76148974d9d0")),
            class: "w-full bg-white text-[#00796B] font-bold py-4 md:py-5 rounded-2xl shadow-xl hover:bg-teal-50 transition-all transform hover:scale-[1.03] active:scale-[0.97] text-lg flex items-center justify-center gap-2 group"
          }, [...i[1] || (i[1] = [
            q(" Start Practice Test ", -1),
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
          i[2] || (i[2] = e("p", { class: "text-teal-200/40 text-[10px] uppercase tracking-[0.2em] font-bold pt-4" }, "Simulation Version 2.0", -1))
        ])
      ])
    ]));
  }
}, Wr = /* @__PURE__ */ me({
  __name: "MainPage",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (i, y) => (m(), Ae(Hr, {
      _p: ge(o),
      _pp: ge(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), Jr = { class: "min-h-screen bg-[#f5f5f5] flex justify-center" }, Kr = { class: "w-full max-w-[1400px] flex flex-col bg-white" }, Yr = { class: "bg-white flex-grow px-6 md:px-8 py-8" }, Zr = {
  key: 0,
  class: "flex items-center justify-center h-96"
}, Xr = {
  key: 1,
  class: "flex flex-col items-center justify-center h-96 text-center"
}, qr = {
  key: 2,
  class: "grid grid-cols-1 lg:grid-cols-5 gap-6 items-start"
}, ea = { class: "lg:col-span-2 space-y-6" }, ta = { class: "bg-[#00695C] rounded-2xl p-6 sm:p-10 text-white shadow-lg flex flex-col items-center relative overflow-hidden h-fit" }, sa = { class: "relative w-40 h-40 flex items-center justify-center mb-8 relative z-10" }, na = {
  class: "w-full h-full absolute",
  viewBox: "0 0 200 200"
}, oa = ["stroke-dashoffset"], la = { class: "text-center relative z-10" }, ra = { class: "text-[48px] font-bold leading-none mb-1" }, aa = { class: "w-full flex flex-col items-center gap-6 relative z-10" }, ia = { class: "text-[14px] font-bold uppercase tracking-widest text-white/90 border-b border-white/20 pb-2" }, da = { class: "w-full flex flex-col gap-3" }, ua = { class: "w-full grid grid-cols-2 gap-4 mt-10 relative z-10 pt-6 border-t border-white/10" }, ca = { class: "text-center" }, pa = { class: "text-[20px] font-bold" }, fa = { class: "text-center border-l border-white/10" }, ma = { class: "text-[20px] font-bold" }, xa = { class: "lg:col-span-3 space-y-4" }, ga = ["onClick"], va = { class: "relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0" }, ha = {
  class: "w-full h-full",
  viewBox: "0 0 120 120",
  xmlns: "http://www.w3.org/2000/svg"
}, ba = ["stroke", "stroke-dashoffset"], wa = { class: "absolute inset-0 flex flex-col items-center justify-center text-center" }, ya = { class: "text-[18px] font-normal text-[#333]" }, _a = { class: "w-full flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3" }, ka = { class: "col-span-2 sm:col-span-1 mb-2 sm:mb-0" }, $a = { class: "flex items-center gap-2" }, Ca = { class: "text-[14px] sm:text-[16px] font-semibold text-[#333] capitalize" }, Aa = {
  key: 0,
  class: "bg-teal-100 text-teal-700 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase"
}, Ta = { class: "bg-[#f9f9f9] border border-[#e0e0e0] rounded-lg p-2 text-center" }, Sa = { class: "text-[16px] font-bold text-[#333]" }, Ea = { class: "bg-[#f9f9f9] border border-[#e0e0e0] rounded-lg p-2 text-center" }, La = { class: "text-[16px] font-bold text-[#00796B]" }, Ia = { class: "bg-[#f9f9f9] border border-[#e0e0e0] rounded-lg p-2 text-center" }, Ra = {
  key: 0,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
}, Ba = { class: "flex justify-between items-center p-8 border-b border-[#e0e0e0]" }, ja = { class: "text-[24px] font-normal text-[#333] capitalize" }, Na = { class: "p-8 space-y-8" }, Oa = { class: "px-8 pt-4 pb-2" }, Ma = { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, Va = { class: "bg-[#f9f9f9] border border-[#e0e0e0] rounded-xl p-6 text-center shadow-sm" }, Ua = { class: "text-[32px] sm:text-[36px] font-bold text-[#333]" }, Pa = { class: "bg-[#f9f9f9] border border-[#e0e0e0] rounded-xl p-6 text-center shadow-sm" }, Da = { class: "text-[32px] sm:text-[36px] font-bold text-[#00796B]" }, za = { class: "bg-[#f9f9f9] border border-[#e0e0e0] rounded-xl p-6 text-center shadow-sm" }, Fa = { class: "flex flex-col sm:flex-row gap-3 pt-8 border-t border-[#e0e0e0]" }, Qa = /* @__PURE__ */ me({
  __name: "OutcomeSection",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = re("overallScore"), o = re("isGlobalLoading"), a = re("testData"), i = re("testMetadata"), y = re("submitFinalTest"), E = _e(), N = Ee(), g = ie(() => i?.value?.title?.startsWith("Result:")), T = async () => {
      confirm("This will create a permanent result record and clear your current practice progress. Continue?") && await y();
    }, A = ie(() => o?.value || !1), x = ie(() => {
      const d = ["reading", "listening", "writing", "speaking"], s = {};
      return d.forEach((l) => {
        if (n.value && n.value[l] && (n.value[l].old_toefl > 0 || n.value[l].attempted))
          s[l] = {
            ...n.value[l],
            status: n.value[l].attempted || n.value[l].old_toefl > 0 ? "Completed" : "Not Started"
          };
        else {
          const _ = a.value?.find((P) => P.type.toLowerCase() === l);
          if (_) {
            let P = 0, H = !1;
            (_.modules ? _.modules.flatMap((ue) => ue.tasks) : _.tasks || []).forEach((ue) => {
              const pe = ue.questions || [];
              if (pe.length > 0)
                pe.forEach((b) => {
                  const c = b.user_result;
                  if (c?.score) P += Number(c.score);
                  else if (c?.overall_score) P += Number(c.overall_score);
                  else if (c?.analysis) {
                    const p = Object.values(c.analysis);
                    let w = 0, u = 0;
                    p.forEach((S) => {
                      const r = typeof S == "object" ? S.score || 0 : Number(S) || 0;
                      w += Number(r), u++;
                    }), u > 0 ? P += w / u : (c.status === "Correct" || c.data === 1) && (P += 1);
                  } else (c?.status === "Correct" || c?.data === 1) && (P += 1);
                  (b.user_input?.data || c && Object.keys(c).length > 0) && (H = !0);
                });
              else {
                const b = ue.user_result;
                if (b?.score) P += Number(b.score);
                else if (b?.overall_score) P += Number(b.overall_score);
                else if (b?.analysis) {
                  const c = Object.values(b.analysis);
                  let p = 0, w = 0;
                  c.forEach((u) => {
                    const S = typeof u == "object" ? u.score || 0 : Number(u) || 0;
                    p += Number(S), w++;
                  }), w > 0 && (P += p / w);
                }
                (ue.user_input?.data || b && Object.keys(b).length > 0) && (H = !0);
              }
            });
            const te = (l === "speaking" || l === "writing") && P <= 6 ? P / 6 * 30 : P;
            s[l] = {
              old_toefl: Math.round(te),
              new_toefl: Number((te / 30 * 6).toFixed(1)),
              cefr: te >= 25 ? "C1" : te >= 20 ? "B2" : te >= 12 ? "B1" : "A1",
              status: H || P > 0 ? "Completed" : "Not Started"
            };
          } else
            s[l] = { old_toefl: 0, new_toefl: 0, cefr: "A1", status: "Not Started" };
        }
      }), s;
    }), f = ie(() => n.value && Object.keys(n.value).length > 0 && n.value.total?.old_toefl > 0 ? !0 : Object.values(x.value).some((d) => d.status !== "Not Started")), k = K(null), Y = (d) => d >= 95 ? "C1" : d >= 72 ? "B2" : d >= 42 ? "B1" : "A1", j = (d) => ({
      reading: "#2196F3",
      listening: "#9C27B0",
      speaking: "#f44336",
      writing: "#FF9800"
    })[d.toLowerCase()] || "#00796B", R = (d) => d.startsWith("C") ? "#10b981" : d.startsWith("B") ? "#3b82f6" : "#f59e0b", U = ie(() => {
      let d = 0;
      return Object.values(x.value).forEach((s) => {
        d += s.old_toefl || 0;
      }), d;
    }), Q = ie(() => Y(U.value)), G = () => {
      const d = U.value;
      return d >= 110 ? "Expert" : d >= 95 ? "Advanced" : d >= 80 ? "High Intermediate" : d >= 60 ? "Intermediate" : d >= 40 ? "Lower Intermediate" : "Beginner";
    }, L = (d) => {
      k.value = d;
    }, le = () => {
      k.value = null;
    }, ne = (d) => {
      E.push({
        path: "/outcome/review",
        query: {
          section: d.toLowerCase(),
          testId: N.params.testId
          // Pass the current ID to the review page
        }
      });
    }, O = ie(() => {
      const d = N.query.finished;
      return d ? d.toLowerCase() : null;
    }), Z = () => {
      E.push("/start");
    };
    return (d, s) => (m(), v("div", Jr, [
      e("div", Kr, [
        e("header", { class: "bg-[#00796B] min-h-[70px] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 sm:py-0 shrink-0 gap-4" }, [
          s[4] || (s[4] = e("div", { class: "text-white font-medium text-[18px] sm:text-[20px] text-center sm:text-left" }, "TOEFL Performance Analysis", -1)),
          e("button", {
            onClick: Z,
            class: "w-full sm:w-auto bg-transparent text-white border border-white hover:bg-white hover:text-[#00796B] rounded px-6 py-2 text-[14px] font-medium cursor-pointer transition-colors flex items-center justify-center gap-2"
          }, [...s[3] || (s[3] = [
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              e("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" })
            ], -1),
            q(" Home ", -1)
          ])])
        ]),
        e("main", Yr, [
          A.value && !f.value ? (m(), v("div", Zr, [...s[5] || (s[5] = [
            e("div", { class: "text-center" }, [
              e("div", { class: "w-16 h-16 border-4 border-[#e0e0e0] border-t-[#00796B] rounded-full animate-spin mx-auto mb-6" }),
              e("p", { class: "text-[16px] text-[#666]" }, "Analyzing your results...")
            ], -1)
          ])])) : !f.value && !A.value ? (m(), v("div", Xr, [
            s[6] || (s[6] = e("p", { class: "text-[18px] text-[#666] mb-6" }, "No results available yet", -1)),
            s[7] || (s[7] = e("p", { class: "text-[14px] text-[#888] mb-8 max-w-md" }, "Complete your practice test sections to see your comprehensive performance analysis.", -1)),
            e("button", {
              onClick: Z,
              class: "bg-[#00796B] text-white px-8 py-3 rounded text-[14px] font-medium hover:bg-[#005a52] transition-colors"
            }, " Start Practice Test ")
          ])) : (m(), v("div", qr, [
            e("div", ea, [
              e("div", ta, [
                s[15] || (s[15] = e("div", {
                  class: "absolute inset-0 opacity-10 pointer-events-none",
                  style: { "background-image": "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", "background-size": "24px 24px" }
                }, null, -1)),
                s[16] || (s[16] = e("div", { class: "text-[10px] font-bold uppercase tracking-[0.3em] mb-8 opacity-70 relative z-10" }, "Performance Summary", -1)),
                e("div", sa, [
                  (m(), v("svg", na, [
                    s[8] || (s[8] = e("circle", {
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
                      "stroke-dashoffset": 578 - 578 * ((U.value || 0) / 120),
                      "stroke-linecap": "round",
                      class: "score-circle",
                      style: { "transform-origin": "100px 100px", transform: "rotate(-90deg)" }
                    }, null, 8, oa)
                  ])),
                  e("div", la, [
                    e("div", ra, M(U.value), 1),
                    s[9] || (s[9] = e("div", { class: "text-[10px] font-medium opacity-50 tracking-[0.1em]" }, "TOTAL SCORE", -1))
                  ])
                ]),
                e("div", aa, [
                  e("div", ia, M(G()), 1),
                  e("div", da, [
                    e("button", {
                      onClick: s[0] || (s[0] = (l) => ne(O.value || "reading")),
                      class: "w-full bg-white text-[#00695C] py-4 rounded-xl text-[14px] font-bold uppercase tracking-widest transition-colors hover:bg-teal-50 border-none cursor-pointer flex items-center justify-center gap-3"
                    }, [...s[10] || (s[10] = [
                      q(" Detailed Analysis ", -1),
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
                    g.value ? se("", !0) : (m(), v("button", {
                      key: 0,
                      onClick: T,
                      class: "w-full bg-[#FF9800] text-white py-3 rounded-xl text-[12px] font-bold uppercase tracking-widest transition-all hover:bg-[#F57C00] border-none cursor-pointer flex items-center justify-center gap-3 shadow-lg active:scale-95"
                    }, [...s[11] || (s[11] = [
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
                      q(" Finalize & Save Result ", -1)
                    ])]))
                  ])
                ]),
                e("div", ua, [
                  e("div", ca, [
                    s[13] || (s[13] = e("div", { class: "text-[9px] font-bold opacity-40 uppercase tracking-widest mb-1" }, "Scale Score", -1)),
                    e("div", pa, [
                      q(M(Math.round(U.value / 120 * 6)), 1),
                      s[12] || (s[12] = e("span", { class: "text-[12px] opacity-30" }, "/6", -1))
                    ])
                  ]),
                  e("div", fa, [
                    s[14] || (s[14] = e("div", { class: "text-[9px] font-bold opacity-40 uppercase tracking-widest mb-1" }, "CEFR Level", -1)),
                    e("div", ma, M(Q.value), 1)
                  ])
                ])
              ])
            ]),
            e("div", xa, [
              (m(!0), v(oe, null, ae(x.value, (l, C) => (m(), v("div", {
                key: C,
                class: be(["bg-white border rounded-xl p-4 sm:p-5 cursor-pointer hover:shadow-md transition-all flex flex-col sm:flex-row items-center gap-4", O.value === C ? "border-[#00796B] border-2 ring-4 ring-[#00796B]/10" : "border-[#e0e0e0]"]),
                onClick: (_) => L(C)
              }, [
                e("div", va, [
                  (m(), v("svg", ha, [
                    s[17] || (s[17] = e("circle", {
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
                      stroke: j(C),
                      "stroke-width": "5",
                      "stroke-dasharray": "314",
                      "stroke-dashoffset": 314 - 314 * (l.old_toefl / 30),
                      "stroke-linecap": "round",
                      class: "score-circle transition-all duration-[1500ms]",
                      style: { "transform-origin": "60px 60px", transform: "rotate(-90deg)" }
                    }, null, 8, ba)
                  ])),
                  e("div", wa, [
                    e("div", ya, M(l.old_toefl), 1),
                    s[18] || (s[18] = e("div", { class: "text-[8px] text-[#999]" }, "/30", -1))
                  ])
                ]),
                e("div", _a, [
                  e("div", ka, [
                    e("div", $a, [
                      e("h3", Ca, M(C), 1),
                      O.value === C ? (m(), v("span", Aa, "New")) : se("", !0)
                    ]),
                    s[19] || (s[19] = e("p", { class: "text-[10px] text-[#999]" }, "Section Assessment", -1))
                  ]),
                  e("div", Ta, [
                    s[20] || (s[20] = e("div", { class: "text-[8px] text-[#999] font-medium uppercase mb-1" }, "Raw Score", -1)),
                    e("div", Sa, M(l.old_toefl), 1),
                    s[21] || (s[21] = e("div", { class: "text-[8px] text-[#ccc]" }, "/30", -1))
                  ]),
                  e("div", Ea, [
                    s[22] || (s[22] = e("div", { class: "text-[8px] text-[#999] font-medium uppercase mb-1" }, "Scale Score", -1)),
                    e("div", La, M(Math.round(l.new_toefl || 0)), 1),
                    s[23] || (s[23] = e("div", { class: "text-[8px] text-[#ccc]" }, "/6", -1))
                  ]),
                  e("div", Ia, [
                    s[24] || (s[24] = e("div", { class: "text-[8px] text-[#999] font-medium uppercase mb-1" }, "CEFR Level", -1)),
                    e("div", {
                      class: "text-[16px] font-bold",
                      style: Se({ color: R(l.cefr) })
                    }, M(l.cefr), 5),
                    s[25] || (s[25] = e("div", { class: "text-[8px] text-[#ccc]" }, " ", -1))
                  ])
                ])
              ], 10, ga))), 128))
            ])
          ]))
        ])
      ]),
      De(Dt, { name: "modal-fade" }, {
        default: zt(() => [
          k.value ? (m(), v("div", Ra, [
            e("div", {
              class: "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
              onClick: s[2] || (s[2] = $t(() => {
              }, ["stop"]))
            }, [
              e("div", Ba, [
                e("div", null, [
                  e("h2", ja, M(k.value) + " Review", 1),
                  s[26] || (s[26] = e("p", { class: "text-[14px] text-[#666] mt-1" }, "Detailed performance analysis", -1))
                ]),
                e("button", {
                  onClick: le,
                  class: "text-[#999] hover:text-[#333] p-2"
                }, [...s[27] || (s[27] = [
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
              e("div", Na, [
                e("div", Oa, [
                  s[33] || (s[33] = e("p", { class: "text-[12px] text-[#999] font-medium mb-6 uppercase tracking-wide text-center sm:text-left" }, "Section Performance", -1)),
                  e("div", Ma, [
                    e("div", Va, [
                      s[29] || (s[29] = e("p", { class: "text-[12px] text-[#999] font-medium mb-3 uppercase" }, "Raw Score", -1)),
                      e("p", Ua, [
                        q(M(x.value[k.value].old_toefl), 1),
                        s[28] || (s[28] = e("span", { class: "text-[18px] text-[#999]" }, "/30", -1))
                      ])
                    ]),
                    e("div", Pa, [
                      s[31] || (s[31] = e("p", { class: "text-[12px] text-[#999] font-medium mb-3 uppercase" }, "Scale Score", -1)),
                      e("p", Da, [
                        q(M(Math.round(x.value[k.value].new_toefl || 0)), 1),
                        s[30] || (s[30] = e("span", { class: "text-[18px] text-[#999]" }, "/6", -1))
                      ])
                    ]),
                    e("div", za, [
                      s[32] || (s[32] = e("p", { class: "text-[12px] text-[#999] font-medium mb-3 uppercase" }, "CEFR", -1)),
                      e("p", {
                        class: "text-[32px] sm:text-[36px] font-bold",
                        style: Se({ color: R(x.value[k.value].cefr) })
                      }, M(x.value[k.value].cefr), 5)
                    ])
                  ])
                ]),
                e("div", Fa, [
                  e("button", {
                    onClick: le,
                    class: "order-2 sm:order-1 flex-1 px-6 py-3 rounded-lg border border-[#e0e0e0] text-[#333] font-medium text-[14px] hover:bg-[#f9f9f9] transition-colors"
                  }, " Close "),
                  e("button", {
                    onClick: s[1] || (s[1] = (l) => ne(k.value)),
                    class: "order-1 sm:order-2 flex-1 px-6 py-3 rounded-lg bg-[#00796B] text-white font-medium text-[14px] hover:bg-[#005a52] transition-colors"
                  }, " Full Review → ")
                ])
              ])
            ])
          ])) : se("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Ga = /* @__PURE__ */ Pe(Qa, [["__scopeId", "data-v-847ccd7a"]]), wt = /* @__PURE__ */ me({
  __name: "outcome1",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = t, o = n._p, a = n._pp;
    return (i, y) => (m(), Ae(Ga, {
      _p: ge(o),
      _pp: ge(a)
    }, null, 8, ["_p", "_pp"]));
  }
}), Ha = { class: "flex justify-between items-center mb-4" }, Wa = { class: "mb-4" }, Ja = ["value"], Ka = { class: "grid grid-cols-1 gap-4 mb-4" }, Ya = { class: "block text-xs font-bold text-slate-500 uppercase mb-1 flex justify-between items-center" }, Za = { class: "flex items-center gap-2" }, Xa = ["id"], qa = ["for"], ei = { class: "flex flex-col gap-2" }, ti = { key: 0 }, si = { key: 1 }, ni = { class: "block text-xs font-bold text-slate-500 uppercase mb-1 flex justify-between items-center" }, oi = { class: "flex items-center gap-2" }, li = {
  for: "file-task-lar",
  class: "cursor-pointer text-teal-600 hover:text-teal-800 text-[10px] font-bold border border-teal-600 px-2 py-0.5 rounded"
}, ri = { class: "flex flex-col gap-2" }, ai = { class: "grid grid-cols-2 gap-4" }, ii = { class: "block text-xs font-bold text-slate-500 uppercase mb-1 flex justify-between" }, di = ["onUpdate:modelValue"], ui = ["onClick"], ci = { class: "block text-xs font-bold text-slate-500 uppercase mb-1 flex justify-between items-center" }, pi = { class: "flex items-center gap-2" }, fi = {
  for: "file-task-int",
  class: "cursor-pointer text-teal-600 hover:text-teal-800 text-[10px] font-bold border border-teal-600 px-2 py-0.5 rounded"
}, mi = { class: "flex flex-col gap-2" }, xi = { class: "grid grid-cols-2 gap-4" }, gi = { key: 3 }, vi = { class: "grid grid-cols-3 gap-4" }, hi = { class: "block text-xs font-bold text-slate-500 uppercase mb-1 flex justify-between" }, bi = ["onUpdate:modelValue"], wi = ["onClick"], yi = { class: "grid grid-cols-2 gap-4" }, _i = { class: "block text-xs font-bold text-slate-500 uppercase mb-1 flex justify-between" }, ki = { class: "flex justify-between items-center mb-2" }, $i = ["onUpdate:modelValue"], Ci = ["onClick"], Ai = ["onUpdate:modelValue"], Ti = { class: "mt-6 border-t border-slate-200 pt-4" }, Si = { class: "space-y-4" }, Ei = ["onClick"], Li = { class: "text-xs font-bold text-slate-400 block mb-2" }, Ii = { class: "flex flex-wrap gap-2 items-center mb-3 pb-2 border-b border-slate-100" }, Ri = ["onClick"], Bi = ["onClick"], ji = {
  key: 0,
  class: "flex flex-wrap gap-2 items-center mb-3 bg-slate-50 p-2 rounded-lg border border-slate-200"
}, Ni = ["onClick"], Oi = ["onClick"], Mi = ["onClick"], Vi = {
  key: 1,
  class: "mb-3"
}, Ui = ["onClick"], Pi = { class: "grid grid-cols-4 gap-4 mb-3" }, Di = { class: "col-span-4" }, zi = { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1 flex justify-between items-center" }, Fi = { class: "flex items-center gap-2" }, Qi = ["onChange", "id"], Gi = ["for"], Hi = ["onUpdate:modelValue"], Wi = { class: "col-span-1" }, Ji = ["onUpdate:modelValue"], Ki = { class: "col-span-3" }, Yi = ["onUpdate:modelValue"], Zi = { class: "mb-3" }, Xi = { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1 flex justify-between" }, qi = ["onClick"], ed = ["onUpdate:modelValue"], td = ["onClick"], sd = ["onUpdate:modelValue"], nd = { class: "mb-3" }, od = ["onUpdate:modelValue"], ld = { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1 flex justify-between" }, rd = ["onClick"], ad = { class: "flex flex-wrap gap-2" }, id = { class: "text-[10px] text-teal-600 font-bold" }, dd = ["onUpdate:modelValue"], ud = ["onClick"], cd = {
  key: 2,
  class: "grid grid-cols-4 gap-4"
}, pd = { class: "col-span-4" }, fd = { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1 flex justify-between items-center" }, md = { class: "flex items-center gap-2" }, xd = ["onChange", "id"], gd = ["for"], vd = ["onUpdate:modelValue"], hd = { class: "col-span-1" }, bd = ["onUpdate:modelValue"], wd = { class: "col-span-3" }, yd = ["onUpdate:modelValue"], _d = { class: "mb-3" }, kd = ["onUpdate:modelValue"], $d = { class: "mb-3" }, Cd = { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1 flex justify-between" }, Ad = ["onClick"], Td = { class: "flex flex-wrap gap-2" }, Sd = ["onUpdate:modelValue"], Ed = ["onClick"], Ld = ["onUpdate:modelValue"], Id = {
  key: 4,
  class: "grid grid-cols-4 gap-4"
}, Rd = { class: "col-span-4" }, Bd = { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1 flex justify-between items-center" }, jd = { class: "flex items-center gap-2" }, Nd = ["onChange", "id"], Od = ["for"], Md = ["onUpdate:modelValue"], Vd = { class: "col-span-4" }, Ud = ["onUpdate:modelValue"], Pd = {
  key: 5,
  class: "text-[10px] text-slate-500 italic"
}, Dd = {
  key: 3,
  class: "p-4 bg-slate-50 border border-dashed border-slate-300 rounded-lg text-center my-3"
}, zd = { class: "text-xs text-slate-500 mb-2" }, Fd = ["onClick"], Qd = {
  key: 0,
  class: "text-center text-sm text-slate-400 py-4 border-2 border-dashed border-slate-200 rounded-lg"
}, yt = {
  __name: "TaskEditor",
  props: {
    task: { type: Object, required: !0 },
    sectionType: { type: String, required: !0 }
  },
  emits: ["remove"],
  setup(t, { emit: n }) {
    const o = K(!1), a = async (d, s) => {
      const l = d.target.files[0];
      if (!l) return;
      o.value = !0;
      const C = new FormData();
      C.append("file", l);
      try {
        const P = await (await fetch("https://fastapi.dryutil.1mn.io/client/api/i/ona/file_storage?typ=cloudinary&opr=upload_file", {
          method: "POST",
          headers: {
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
          },
          body: C
        })).json();
        let H = "";
        P.success && P.data && P.data.url ? H = P.data.url : P.url ? H = P.url : P.data && P.data.secure_url ? H = P.data.secure_url : P.secure_url && (H = P.secure_url), H ? s.imageUrl = H : (alert("Upload failed: " + (P.message || "Unknown response format")), console.log("Upload response:", P));
      } catch (_) {
        console.error("Upload error:", _), alert("Upload failed. Check console.");
      } finally {
        o.value = !1;
      }
    }, i = t, y = {
      reading: ["reading_mcq", "fill_in_the_blanks", "reading_fib"],
      listening: ["listening_responses", "listening_conversation", "listening_announcement", "listening_talk", "listening_lecture"],
      speaking: ["listen_and_repeat", "interview"],
      writing: ["build_sentences", "write_an_email", "academic_discussion"]
    }, E = ie(() => y[i.sectionType] || []), N = () => {
      const d = i.task.type;
      i.task.type, ["reading_mcq", "fill_in_the_blanks", "reading_fib", "listening_responses", "listening_conversation", "listening_announcement", "listening_talk", "listening_lecture"].includes(d) && (Object.assign(i.task, { passageTitle: "", passageHTML: "" }), d.includes("listening") && (i.task.audioTranscript = "")), d === "listen_and_repeat" && Object.assign(i.task, { title: "", context: "", prompts: [], prepTime: 0, responseTime: 30, instructions: "" }), d === "interview" && Object.assign(i.task, { title: "", context: "", prepTime: 0, responseTime: 60, instructions: "" }), d === "build_sentences" && Object.assign(i.task, { instruction: "Move the words in the boxes to create grammatical sentences." }), d === "write_an_email" && Object.assign(i.task, { scenario: "", timeLimit: "7 minutes", instructions: [], emailMetadata: { to: "", subject: "" } }), d === "academic_discussion" && Object.assign(i.task, { topic: "", timeLimit: "10 minutes", requirements: "", professorPrompt: "", studentResponses: [] }), ["write_an_email", "academic_discussion"].includes(d) ? i.task.questions = [g(d)] : i.task.questions = [];
    }, g = (d) => {
      const s = {
        user_input: { data: "" },
        user_result: { data: 0 },
        creator_answer: { data: "" },
        imageUrl: ""
      };
      return ["reading_mcq", "listening_responses", "listening_conversation", "listening_announcement", "listening_talk", "listening_lecture"].includes(d) ? { ...s, questionNumber: 1, question: "", options: ["(A) ", "(B) ", "(C) ", "(D) "], answer: "" } : ["fill_in_the_blanks", "reading_fib"].includes(d) ? { ...s, question: "Fill in the missing letters in the paragraph.", answer: [] } : ["listen_and_repeat", "interview"].includes(d) ? { ...s, questionNumber: 1, question: "" } : d === "build_sentences" ? { ...s, prompt: "", answer: "", scrambledWords: [] } : s;
    }, T = () => {
      i.task.questions.push(g(i.task.type));
    }, A = ["a1", "a2", "b1", "b2", "c1", "c2"], x = (d) => d._uiActiveLevel ? d._uiActiveLevel : A.find((l) => d[l] !== void 0 && d[l] !== null) || "default", f = (d) => {
      const s = x(d);
      if (s === "default") return d;
      const l = d[s];
      return l ? Array.isArray(l) ? ((d._uiActiveVariantIndex || 0) >= l.length && (d._uiActiveVariantIndex = 0), l[d._uiActiveVariantIndex || 0] || l[0] || null) : l : null;
    }, k = (d, s) => s === "default" ? !0 : d[s] !== void 0 && d[s] !== null, Y = (d, s) => s === "default" ? !1 : Array.isArray(d[s]), j = (d, s) => {
      d._uiActiveLevel = s, d._uiActiveVariantIndex = 0;
    }, R = (d, s) => {
      const l = g(i.task.type);
      l.cref = s.toUpperCase(), d[s] = l, d._uiActiveLevel = s, d._uiActiveVariantIndex = 0;
    }, U = (d, s) => {
      s !== "default" && confirm(`Are you sure you want to delete level ${s.toUpperCase()}?`) && (delete d[s], d._uiActiveLevel = "default", d._uiActiveVariantIndex = 0);
    }, Q = (d, s) => {
      const l = g(i.task.type);
      l.cref = s.toUpperCase(), Array.isArray(d[s]) ? d[s].push(l) : d[s] = [d[s], l], d._uiActiveVariantIndex = d[s].length - 1;
    }, G = (d, s, l) => {
      Array.isArray(d[s]) && confirm(`Are you sure you want to delete variant ${l + 1}?`) && (d[s].splice(l, 1), d._uiActiveVariantIndex = Math.max(0, l - 1));
    }, L = (d, s) => {
      s !== "default" && d[s] && (Array.isArray(d[s]) || (d[s] = [d[s]], d._uiActiveVariantIndex = 0));
    }, le = (d) => d ? (d.options || (d.options = []), d.options) : [], ne = (d) => d ? (d.answer || (d.answer = []), typeof d.answer == "string" && (d.answer = [d.answer]), d.answer) : [], O = (d) => d ? (d.scrambledWords || (d.scrambledWords = []), d.scrambledWords) : [], Z = () => {
      const d = i.task?.type;
      ["write_an_email", "academic_discussion"].includes(d) && (!i.task.questions || i.task.questions.length === 0) && (i.task.questions = [g(d)]);
    };
    return tt(() => {
      Z();
    }), we(() => i.task, () => {
      Z();
      const d = (s) => {
        if (!s) return;
        s.question !== void 0 && s.question !== s.text ? s.text = s.question : s.text !== void 0 && s.question !== s.text && (s.question = s.text), ["a1", "a2", "b1", "b2", "c1", "c2"].forEach((C) => {
          s[C] && (Array.isArray(s[C]) ? s[C].forEach(d) : d(s[C]));
        });
      };
      i.task && d(i.task), i.task?.questions?.forEach(d);
    }, { deep: !0, immediate: !0 }), (d, s) => (m(), v("div", null, [
      e("div", Ha, [
        s[33] || (s[33] = e("h5", { class: "font-bold text-slate-700 uppercase tracking-wider text-xs" }, "Task Editor", -1)),
        e("button", {
          onClick: s[0] || (s[0] = (l) => d.$emit("remove")),
          class: "text-red-500 hover:text-red-700 text-xs font-bold uppercase"
        }, "Remove Task")
      ]),
      e("div", Wa, [
        s[34] || (s[34] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Task Type", -1)),
        X(e("select", {
          "onUpdate:modelValue": s[1] || (s[1] = (l) => t.task.type = l),
          onChange: N,
          class: "w-full md:w-1/2 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none bg-white font-semibold text-slate-700"
        }, [
          (m(!0), v(oe, null, ae(E.value, (l) => (m(), v("option", {
            key: l,
            value: l
          }, M(l), 9, Ja))), 128))
        ], 544), [
          [Ct, t.task.type]
        ])
      ]),
      e("div", Ka, [
        ["reading_mcq", "fill_in_the_blanks", "reading_fib", "listening_responses", "listening_conversation", "listening_announcement", "listening_talk", "listening_lecture"].includes(t.task.type) ? (m(), v(oe, { key: 0 }, [
          e("div", null, [
            e("label", Ya, [
              s[35] || (s[35] = q(" Passage Title / Audio Name ", -1)),
              e("div", Za, [
                e("input", {
                  type: "file",
                  onChange: s[2] || (s[2] = (l) => a(l, t.task)),
                  class: "hidden",
                  id: "file-task-" + t.task.type,
                  accept: "image/*"
                }, null, 40, Xa),
                e("label", {
                  for: "file-task-" + t.task.type,
                  class: "cursor-pointer text-teal-600 hover:text-teal-800 text-[10px] font-bold border border-teal-600 px-2 py-0.5 rounded"
                }, M(o.value ? "Uploading..." : "Upload Task Image"), 9, qa)
              ])
            ]),
            e("div", ei, [
              X(e("input", {
                "onUpdate:modelValue": s[3] || (s[3] = (l) => t.task.passageTitle = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [ee, t.task.passageTitle]
              ]),
              t.task.imageUrl ? X((m(), v("input", {
                key: 0,
                "onUpdate:modelValue": s[4] || (s[4] = (l) => t.task.imageUrl = l),
                type: "text",
                class: "w-full border border-slate-200 rounded-lg px-3 py-1 text-[10px] text-slate-500 bg-slate-50",
                placeholder: "Task Image URL"
              }, null, 512)), [
                [ee, t.task.imageUrl]
              ]) : se("", !0)
            ])
          ]),
          t.task.type !== "listening_responses" ? (m(), v("div", ti, [
            s[36] || (s[36] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Passage HTML", -1)),
            X(e("textarea", {
              "onUpdate:modelValue": s[5] || (s[5] = (l) => t.task.passageHTML = l),
              rows: "3",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none font-mono"
            }, null, 512), [
              [ee, t.task.passageHTML]
            ])
          ])) : se("", !0),
          t.task.type.includes("listening") && t.task.type !== "listening_responses" ? (m(), v("div", si, [
            s[37] || (s[37] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Audio Transcript", -1)),
            X(e("textarea", {
              "onUpdate:modelValue": s[6] || (s[6] = (l) => t.task.audioTranscript = l),
              rows: "3",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none font-mono"
            }, null, 512), [
              [ee, t.task.audioTranscript]
            ])
          ])) : se("", !0)
        ], 64)) : se("", !0),
        t.task.type === "listen_and_repeat" ? (m(), v(oe, { key: 1 }, [
          e("div", null, [
            e("label", ni, [
              s[38] || (s[38] = q(" Title ", -1)),
              e("div", oi, [
                e("input", {
                  type: "file",
                  onChange: s[7] || (s[7] = (l) => a(l, t.task)),
                  class: "hidden",
                  id: "file-task-lar",
                  accept: "image/*"
                }, null, 32),
                e("label", li, M(o.value ? "Uploading..." : "Upload Task Image"), 1)
              ])
            ]),
            e("div", ri, [
              X(e("input", {
                "onUpdate:modelValue": s[8] || (s[8] = (l) => t.task.title = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [ee, t.task.title]
              ]),
              t.task.imageUrl ? X((m(), v("input", {
                key: 0,
                "onUpdate:modelValue": s[9] || (s[9] = (l) => t.task.imageUrl = l),
                type: "text",
                class: "w-full border border-slate-200 rounded-lg px-3 py-1 text-[10px] text-slate-500 bg-slate-50",
                placeholder: "Task Image URL"
              }, null, 512)), [
                [ee, t.task.imageUrl]
              ]) : se("", !0)
            ])
          ]),
          e("div", null, [
            s[39] || (s[39] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Context", -1)),
            X(e("textarea", {
              "onUpdate:modelValue": s[10] || (s[10] = (l) => t.task.context = l),
              rows: "2",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            }, null, 512), [
              [ee, t.task.context]
            ])
          ]),
          e("div", ai, [
            e("div", null, [
              s[40] || (s[40] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Prep Time (sec)", -1)),
              X(e("input", {
                "onUpdate:modelValue": s[11] || (s[11] = (l) => t.task.prepTime = l),
                type: "number",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [
                  ee,
                  t.task.prepTime,
                  void 0,
                  { number: !0 }
                ]
              ])
            ]),
            e("div", null, [
              s[41] || (s[41] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Response Time (sec)", -1)),
              X(e("input", {
                "onUpdate:modelValue": s[12] || (s[12] = (l) => t.task.responseTime = l),
                type: "number",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [
                  ee,
                  t.task.responseTime,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ]),
          e("div", null, [
            s[42] || (s[42] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Instructions", -1)),
            X(e("textarea", {
              "onUpdate:modelValue": s[13] || (s[13] = (l) => t.task.instructions = l),
              rows: "2",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            }, null, 512), [
              [ee, t.task.instructions]
            ])
          ]),
          e("div", null, [
            e("label", ii, [
              s[43] || (s[43] = q(" Prompts (Sentences to repeat) ", -1)),
              e("button", {
                onClick: s[14] || (s[14] = (l) => t.task.prompts.push("")),
                class: "text-teal-600 hover:text-teal-800 text-xs font-bold"
              }, "+ Add")
            ]),
            (m(!0), v(oe, null, ae(t.task.prompts, (l, C) => (m(), v("div", {
              key: C,
              class: "flex gap-2 mb-2"
            }, [
              X(e("input", {
                "onUpdate:modelValue": (_) => t.task.prompts[C] = _,
                type: "text",
                class: "flex-1 border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 8, di), [
                [ee, t.task.prompts[C]]
              ]),
              e("button", {
                onClick: (_) => t.task.prompts.splice(C, 1),
                class: "text-red-400 hover:text-red-600 text-lg font-bold"
              }, "×", 8, ui)
            ]))), 128))
          ])
        ], 64)) : se("", !0),
        t.task.type === "interview" ? (m(), v(oe, { key: 2 }, [
          e("div", null, [
            e("label", ci, [
              s[44] || (s[44] = q(" Title ", -1)),
              e("div", pi, [
                e("input", {
                  type: "file",
                  onChange: s[15] || (s[15] = (l) => a(l, t.task)),
                  class: "hidden",
                  id: "file-task-int",
                  accept: "image/*"
                }, null, 32),
                e("label", fi, M(o.value ? "Uploading..." : "Upload Task Image"), 1)
              ])
            ]),
            e("div", mi, [
              X(e("input", {
                "onUpdate:modelValue": s[16] || (s[16] = (l) => t.task.title = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [ee, t.task.title]
              ]),
              t.task.imageUrl ? X((m(), v("input", {
                key: 0,
                "onUpdate:modelValue": s[17] || (s[17] = (l) => t.task.imageUrl = l),
                type: "text",
                class: "w-full border border-slate-200 rounded-lg px-3 py-1 text-[10px] text-slate-500 bg-slate-50",
                placeholder: "Task Image URL"
              }, null, 512)), [
                [ee, t.task.imageUrl]
              ]) : se("", !0)
            ])
          ]),
          e("div", null, [
            s[45] || (s[45] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Context", -1)),
            X(e("textarea", {
              "onUpdate:modelValue": s[18] || (s[18] = (l) => t.task.context = l),
              rows: "2",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            }, null, 512), [
              [ee, t.task.context]
            ])
          ]),
          e("div", xi, [
            e("div", null, [
              s[46] || (s[46] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Prep Time (sec)", -1)),
              X(e("input", {
                "onUpdate:modelValue": s[19] || (s[19] = (l) => t.task.prepTime = l),
                type: "number",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [
                  ee,
                  t.task.prepTime,
                  void 0,
                  { number: !0 }
                ]
              ])
            ]),
            e("div", null, [
              s[47] || (s[47] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Response Time (sec)", -1)),
              X(e("input", {
                "onUpdate:modelValue": s[20] || (s[20] = (l) => t.task.responseTime = l),
                type: "number",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [
                  ee,
                  t.task.responseTime,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ]),
          e("div", null, [
            s[48] || (s[48] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Instructions", -1)),
            X(e("textarea", {
              "onUpdate:modelValue": s[21] || (s[21] = (l) => t.task.instructions = l),
              rows: "2",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            }, null, 512), [
              [ee, t.task.instructions]
            ])
          ])
        ], 64)) : se("", !0),
        t.task.type === "build_sentences" ? (m(), v("div", gi, [
          s[49] || (s[49] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Instruction", -1)),
          X(e("input", {
            "onUpdate:modelValue": s[22] || (s[22] = (l) => t.task.instruction = l),
            type: "text",
            class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
          }, null, 512), [
            [ee, t.task.instruction]
          ])
        ])) : se("", !0),
        t.task.type === "write_an_email" ? (m(), v(oe, { key: 4 }, [
          e("div", null, [
            s[50] || (s[50] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Scenario", -1)),
            X(e("textarea", {
              "onUpdate:modelValue": s[23] || (s[23] = (l) => t.task.scenario = l),
              rows: "3",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            }, null, 512), [
              [ee, t.task.scenario]
            ])
          ]),
          e("div", vi, [
            e("div", null, [
              s[51] || (s[51] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Time Limit", -1)),
              X(e("input", {
                "onUpdate:modelValue": s[24] || (s[24] = (l) => t.task.timeLimit = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                placeholder: "e.g. 7 minutes"
              }, null, 512), [
                [ee, t.task.timeLimit]
              ])
            ]),
            e("div", null, [
              s[52] || (s[52] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Email To", -1)),
              t.task.emailMetadata ? X((m(), v("input", {
                key: 0,
                "onUpdate:modelValue": s[25] || (s[25] = (l) => t.task.emailMetadata.to = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512)), [
                [ee, t.task.emailMetadata.to]
              ]) : se("", !0)
            ]),
            e("div", null, [
              s[53] || (s[53] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Email Subject", -1)),
              t.task.emailMetadata ? X((m(), v("input", {
                key: 0,
                "onUpdate:modelValue": s[26] || (s[26] = (l) => t.task.emailMetadata.subject = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512)), [
                [ee, t.task.emailMetadata.subject]
              ]) : se("", !0)
            ])
          ]),
          e("div", null, [
            e("label", hi, [
              s[54] || (s[54] = q(" Instructions (Bullet points) ", -1)),
              e("button", {
                onClick: s[27] || (s[27] = (l) => t.task.instructions.push("")),
                class: "text-teal-600 hover:text-teal-800 text-xs font-bold"
              }, "+ Add")
            ]),
            (m(!0), v(oe, null, ae(t.task.instructions, (l, C) => (m(), v("div", {
              key: C,
              class: "flex gap-2 mb-2"
            }, [
              X(e("input", {
                "onUpdate:modelValue": (_) => t.task.instructions[C] = _,
                type: "text",
                class: "flex-1 border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 8, bi), [
                [ee, t.task.instructions[C]]
              ]),
              e("button", {
                onClick: (_) => t.task.instructions.splice(C, 1),
                class: "text-red-400 hover:text-red-600 text-lg font-bold"
              }, "×", 8, wi)
            ]))), 128))
          ])
        ], 64)) : se("", !0),
        t.task.type === "academic_discussion" ? (m(), v(oe, { key: 5 }, [
          e("div", yi, [
            e("div", null, [
              s[55] || (s[55] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Topic", -1)),
              X(e("input", {
                "onUpdate:modelValue": s[28] || (s[28] = (l) => t.task.topic = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              }, null, 512), [
                [ee, t.task.topic]
              ])
            ]),
            e("div", null, [
              s[56] || (s[56] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Time Limit", -1)),
              X(e("input", {
                "onUpdate:modelValue": s[29] || (s[29] = (l) => t.task.timeLimit = l),
                type: "text",
                class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                placeholder: "e.g. 10 minutes"
              }, null, 512), [
                [ee, t.task.timeLimit]
              ])
            ])
          ]),
          e("div", null, [
            s[57] || (s[57] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Requirements", -1)),
            X(e("textarea", {
              "onUpdate:modelValue": s[30] || (s[30] = (l) => t.task.requirements = l),
              rows: "2",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            }, null, 512), [
              [ee, t.task.requirements]
            ])
          ]),
          e("div", null, [
            s[58] || (s[58] = e("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, "Professor Prompt", -1)),
            X(e("textarea", {
              "onUpdate:modelValue": s[31] || (s[31] = (l) => t.task.professorPrompt = l),
              rows: "3",
              class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            }, null, 512), [
              [ee, t.task.professorPrompt]
            ])
          ]),
          e("div", null, [
            e("label", _i, [
              s[59] || (s[59] = q(" Student Responses ", -1)),
              e("button", {
                onClick: s[32] || (s[32] = (l) => t.task.studentResponses.push({ studentName: "", content: "" })),
                class: "text-teal-600 hover:text-teal-800 text-xs font-bold"
              }, "+ Add Student")
            ]),
            (m(!0), v(oe, null, ae(t.task.studentResponses, (l, C) => (m(), v("div", {
              key: C,
              class: "bg-white p-3 rounded border border-slate-200 mb-2"
            }, [
              e("div", ki, [
                X(e("input", {
                  "onUpdate:modelValue": (_) => l.studentName = _,
                  placeholder: "Student Name",
                  class: "border border-slate-300 rounded px-2 py-1 text-sm font-bold w-1/3"
                }, null, 8, $i), [
                  [ee, l.studentName]
                ]),
                e("button", {
                  onClick: (_) => t.task.studentResponses.splice(C, 1),
                  class: "text-red-400 hover:text-red-600 text-xs font-bold"
                }, "Remove", 8, Ci)
              ]),
              X(e("textarea", {
                "onUpdate:modelValue": (_) => l.content = _,
                placeholder: "Response Content",
                class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                rows: "2"
              }, null, 8, Ai), [
                [ee, l.content]
              ])
            ]))), 128))
          ])
        ], 64)) : se("", !0)
      ]),
      e("div", Ti, [
        e("div", { class: "flex justify-between items-center mb-4" }, [
          s[60] || (s[60] = e("h6", { class: "font-bold text-slate-600 text-xs uppercase tracking-wider" }, "Questions List", -1)),
          e("button", {
            onClick: T,
            class: "text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-1.5 rounded-lg font-bold transition"
          }, " + Add Question ")
        ]),
        e("div", Si, [
          (m(!0), v(oe, null, ae(t.task.questions, (l, C) => (m(), v("div", {
            key: C,
            class: "bg-white p-4 rounded-lg border border-slate-300 shadow-sm relative"
          }, [
            e("button", {
              onClick: (_) => t.task.questions.splice(C, 1),
              class: "absolute top-2 right-2 text-red-400 hover:text-red-600 font-bold text-sm"
            }, "×", 8, Ei),
            e("span", Li, "Q " + M(C + 1), 1),
            e("div", Ii, [
              s[61] || (s[61] = e("span", { class: "text-xs font-bold text-slate-500" }, "Edit Level:", -1)),
              (m(), v(oe, null, ae(["default", "a1", "a2", "b1", "b2", "c1", "c2"], (_) => e("button", {
                key: _,
                onClick: (P) => j(l, _),
                class: be(["px-2 py-1 rounded text-xs font-semibold transition", x(l) === _ ? "bg-teal-600 text-white" : k(l, _) ? "bg-slate-200 text-slate-700 hover:bg-slate-300" : "bg-slate-100 text-slate-400 hover:bg-slate-200"])
              }, M(_.toUpperCase()), 11, Ri)), 64)),
              x(l) !== "default" && k(l, x(l)) ? (m(), v("button", {
                key: 0,
                onClick: (_) => U(l, x(l)),
                class: "text-red-500 hover:text-red-700 text-xs ml-auto font-semibold"
              }, " Delete Level ", 8, Bi)) : se("", !0)
            ]),
            Y(l, x(l)) ? (m(), v("div", ji, [
              s[62] || (s[62] = e("span", { class: "text-xs font-bold text-slate-500" }, "Variant:", -1)),
              (m(!0), v(oe, null, ae(l[x(l)], (_, P) => (m(), v("button", {
                key: P,
                onClick: (H) => l._uiActiveVariantIndex = P,
                class: be(["px-2 py-0.5 rounded text-[11px] font-semibold transition", (l._uiActiveVariantIndex || 0) === P ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"])
              }, M(P + 1), 11, Ni))), 128)),
              e("button", {
                onClick: (_) => Q(l, x(l)),
                class: "text-indigo-600 hover:text-indigo-800 text-xs font-bold ml-2"
              }, " + Add Variant ", 8, Oi),
              l[x(l)].length > 1 ? (m(), v("button", {
                key: 0,
                onClick: (_) => G(l, x(l), l._uiActiveVariantIndex || 0),
                class: "text-red-500 hover:text-red-700 text-xs font-bold ml-auto"
              }, " Remove Variant ", 8, Mi)) : se("", !0)
            ])) : x(l) !== "default" && k(l, x(l)) ? (m(), v("div", Vi, [
              e("button", {
                onClick: (_) => L(l, x(l)),
                class: "text-[11px] text-indigo-600 hover:text-indigo-800 font-semibold"
              }, " Convert to Multiple Variants ", 8, Ui)
            ])) : se("", !0),
            f(l) ? (m(), v(oe, { key: 2 }, [
              ["reading_mcq", "listening_responses", "listening_conversation", "listening_announcement", "listening_talk", "listening_lecture"].includes(t.task.type) ? (m(), v(oe, { key: 0 }, [
                e("div", Pi, [
                  e("div", Di, [
                    e("label", zi, [
                      s[63] || (s[63] = q(" Question Image URL (Optional) ", -1)),
                      e("div", Fi, [
                        e("input", {
                          type: "file",
                          onChange: (_) => a(_, f(l)),
                          class: "hidden",
                          id: "file-" + C,
                          accept: "image/*"
                        }, null, 40, Qi),
                        e("label", {
                          for: "file-" + C,
                          class: "cursor-pointer text-teal-600 hover:text-teal-800 text-[10px] font-bold border border-teal-600 px-2 py-0.5 rounded"
                        }, M(o.value ? "Uploading..." : "Upload to CDN"), 9, Gi)
                      ])
                    ]),
                    X(e("input", {
                      "onUpdate:modelValue": (_) => f(l).imageUrl = _,
                      type: "text",
                      class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                      placeholder: "https://..."
                    }, null, 8, Hi), [
                      [ee, f(l).imageUrl]
                    ])
                  ]),
                  e("div", Wi, [
                    s[64] || (s[64] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Number", -1)),
                    X(e("input", {
                      "onUpdate:modelValue": (_) => l.questionNumber = _,
                      type: "number",
                      class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    }, null, 8, Ji), [
                      [
                        ee,
                        l.questionNumber,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  e("div", Ki, [
                    s[65] || (s[65] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Question Text", -1)),
                    X(e("input", {
                      "onUpdate:modelValue": (_) => f(l).question = _,
                      type: "text",
                      class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    }, null, 8, Yi), [
                      [ee, f(l).question]
                    ])
                  ])
                ]),
                e("div", Zi, [
                  e("label", Xi, [
                    s[66] || (s[66] = q(" Options ", -1)),
                    e("button", {
                      onClick: (_) => le(f(l)).push(""),
                      class: "text-teal-600 hover:text-teal-800 text-[10px]"
                    }, "+ Add", 8, qi)
                  ]),
                  (m(!0), v(oe, null, ae(le(f(l)), (_, P) => (m(), v("div", {
                    key: P,
                    class: "flex gap-2 mb-1"
                  }, [
                    X(e("input", {
                      "onUpdate:modelValue": (H) => le(f(l))[P] = H,
                      type: "text",
                      class: "flex-1 border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                      placeholder: "(A) Option text..."
                    }, null, 8, ed), [
                      [ee, le(f(l))[P]]
                    ]),
                    e("button", {
                      onClick: (H) => le(f(l)).splice(P, 1),
                      class: "text-red-400 hover:text-red-600 font-bold"
                    }, "×", 8, td)
                  ]))), 128))
                ]),
                e("div", null, [
                  s[67] || (s[67] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Correct Answer", -1)),
                  X(e("input", {
                    "onUpdate:modelValue": (_) => f(l).answer = _,
                    type: "text",
                    class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none placeholder:text-slate-300",
                    placeholder: "A, B, C, or D"
                  }, null, 8, sd), [
                    [ee, f(l).answer]
                  ])
                ])
              ], 64)) : se("", !0),
              ["fill_in_the_blanks", "reading_fib"].includes(t.task.type) ? (m(), v(oe, { key: 1 }, [
                e("div", nd, [
                  s[68] || (s[68] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Instruction Text", -1)),
                  X(e("input", {
                    "onUpdate:modelValue": (_) => f(l).question = _,
                    type: "text",
                    class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                  }, null, 8, od), [
                    [ee, f(l).question]
                  ])
                ]),
                e("div", null, [
                  e("label", ld, [
                    s[69] || (s[69] = q(" Correct Answers (In order) ", -1)),
                    e("button", {
                      onClick: (_) => ne(f(l)).push(""),
                      class: "text-teal-600 hover:text-teal-800 text-[10px]"
                    }, "+ Add Word", 8, rd)
                  ]),
                  e("div", ad, [
                    (m(!0), v(oe, null, ae(ne(f(l)), (_, P) => (m(), v("div", {
                      key: P,
                      class: "flex items-center gap-1 bg-teal-50 border border-teal-200 rounded px-2 py-1"
                    }, [
                      e("span", id, M(P + 1) + ".", 1),
                      X(e("input", {
                        "onUpdate:modelValue": (H) => ne(f(l))[P] = H,
                        type: "text",
                        class: "w-20 bg-transparent text-sm focus:outline-none font-semibold text-teal-900"
                      }, null, 8, dd), [
                        [ee, ne(f(l))[P]]
                      ]),
                      e("button", {
                        onClick: (H) => ne(f(l)).splice(P, 1),
                        class: "text-teal-400 hover:text-teal-700 ml-1"
                      }, "×", 8, ud)
                    ]))), 128))
                  ])
                ])
              ], 64)) : se("", !0),
              t.task.type === "interview" ? (m(), v("div", cd, [
                e("div", pd, [
                  e("label", fd, [
                    s[70] || (s[70] = q(" Question Image URL (Optional) ", -1)),
                    e("div", md, [
                      e("input", {
                        type: "file",
                        onChange: (_) => a(_, f(l)),
                        class: "hidden",
                        id: "file-int-" + C,
                        accept: "image/*"
                      }, null, 40, xd),
                      e("label", {
                        for: "file-int-" + C,
                        class: "cursor-pointer text-teal-600 hover:text-teal-800 text-[10px] font-bold border border-teal-600 px-2 py-0.5 rounded"
                      }, M(o.value ? "Uploading..." : "Upload to CDN"), 9, gd)
                    ])
                  ]),
                  X(e("input", {
                    "onUpdate:modelValue": (_) => f(l).imageUrl = _,
                    type: "text",
                    class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                    placeholder: "https://..."
                  }, null, 8, vd), [
                    [ee, f(l).imageUrl]
                  ])
                ]),
                e("div", hd, [
                  s[71] || (s[71] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Number", -1)),
                  X(e("input", {
                    "onUpdate:modelValue": (_) => l.questionNumber = _,
                    type: "number",
                    class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                  }, null, 8, bd), [
                    [
                      ee,
                      l.questionNumber,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", wd, [
                  s[72] || (s[72] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Interviewer Question", -1)),
                  X(e("input", {
                    "onUpdate:modelValue": (_) => f(l).question = _,
                    type: "text",
                    class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                  }, null, 8, yd), [
                    [ee, f(l).question]
                  ])
                ])
              ])) : se("", !0),
              t.task.type === "build_sentences" ? (m(), v(oe, { key: 3 }, [
                e("div", _d, [
                  s[73] || (s[73] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Prompt", -1)),
                  X(e("input", {
                    "onUpdate:modelValue": (_) => f(l).prompt = _,
                    type: "text",
                    class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                  }, null, 8, kd), [
                    [ee, f(l).prompt]
                  ])
                ]),
                e("div", $d, [
                  e("label", Cd, [
                    s[74] || (s[74] = q(" Scrambled Words ", -1)),
                    e("button", {
                      onClick: (_) => O(f(l)).push(""),
                      class: "text-teal-600 hover:text-teal-800 text-[10px]"
                    }, "+ Add Word", 8, Ad)
                  ]),
                  e("div", Td, [
                    (m(!0), v(oe, null, ae(O(f(l)), (_, P) => (m(), v("div", {
                      key: P,
                      class: "flex items-center bg-slate-100 border border-slate-300 rounded px-2 py-1"
                    }, [
                      X(e("input", {
                        "onUpdate:modelValue": (H) => O(f(l))[P] = H,
                        type: "text",
                        class: "w-20 bg-transparent text-sm focus:outline-none"
                      }, null, 8, Sd), [
                        [ee, O(f(l))[P]]
                      ]),
                      e("button", {
                        onClick: (H) => O(f(l)).splice(P, 1),
                        class: "text-slate-400 hover:text-slate-600 ml-1 font-bold"
                      }, "×", 8, Ed)
                    ]))), 128))
                  ])
                ]),
                e("div", null, [
                  s[75] || (s[75] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Correct Sentence Answer", -1)),
                  X(e("input", {
                    "onUpdate:modelValue": (_) => f(l).answer = _,
                    type: "text",
                    class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                  }, null, 8, Ld), [
                    [ee, f(l).answer]
                  ])
                ])
              ], 64)) : se("", !0),
              t.task.type === "listen_and_repeat" ? (m(), v("div", Id, [
                e("div", Rd, [
                  e("label", Bd, [
                    s[76] || (s[76] = q(" Prompt Image (Optional) ", -1)),
                    e("div", jd, [
                      e("input", {
                        type: "file",
                        onChange: (_) => a(_, f(l)),
                        class: "hidden",
                        id: "file-lar-" + C,
                        accept: "image/*"
                      }, null, 40, Nd),
                      e("label", {
                        for: "file-lar-" + C,
                        class: "cursor-pointer text-teal-600 hover:text-teal-800 text-[10px] font-bold border border-teal-600 px-2 py-0.5 rounded"
                      }, M(o.value ? "Uploading..." : "Upload to CDN"), 9, Od)
                    ])
                  ]),
                  X(e("input", {
                    "onUpdate:modelValue": (_) => f(l).imageUrl = _,
                    type: "text",
                    class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                    placeholder: "https://..."
                  }, null, 8, Md), [
                    [ee, f(l).imageUrl]
                  ])
                ]),
                e("div", Vd, [
                  s[77] || (s[77] = e("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Sentence to Repeat", -1)),
                  X(e("input", {
                    "onUpdate:modelValue": (_) => f(l).question = _,
                    type: "text",
                    class: "w-full border border-slate-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none",
                    placeholder: "Enter the sentence here..."
                  }, null, 8, Ud), [
                    [ee, f(l).question]
                  ])
                ])
              ])) : se("", !0),
              ["write_an_email", "academic_discussion"].includes(t.task.type) ? (m(), v("p", Pd, "This task type only requires an empty question placeholder for the user's attempt.")) : se("", !0)
            ], 64)) : (m(), v("div", Dd, [
              e("p", zd, "Level " + M(x(l).toUpperCase()) + " is not defined for this question.", 1),
              e("button", {
                onClick: (_) => R(l, x(l)),
                class: "text-xs bg-teal-600 hover:bg-teal-700 text-white px-3 py-1.5 rounded font-bold transition"
              }, " Create Level " + M(x(l).toUpperCase()), 9, Fd)
            ]))
          ]))), 128)),
          t.task.questions.length === 0 ? (m(), v("div", Qd, " No questions added. ")) : se("", !0)
        ])
      ])
    ]));
  }
}, Gd = { class: "min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800 flex flex-col md:flex-row gap-6" }, Hd = { class: "w-full md:w-2/3 bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col overflow-hidden max-h-[90vh]" }, Wd = { class: "p-4 md:p-6 overflow-y-auto flex-1 space-y-8 bg-slate-100" }, Jd = { class: "bg-white p-5 rounded-2xl border border-slate-200 shadow-sm" }, Kd = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, Yd = { class: "bg-gradient-to-br from-indigo-50 to-teal-50 p-5 rounded-2xl border border-teal-200 shadow-sm relative overflow-hidden" }, Zd = { class: "flex flex-wrap gap-3 items-center" }, Xd = ["disabled"], qd = {
  key: 0,
  class: "flex items-center gap-2"
}, eu = { key: 1 }, tu = ["disabled"], su = {
  key: 0,
  class: "flex items-center gap-2"
}, nu = { key: 1 }, ou = {
  key: 0,
  class: "mt-4 p-3 bg-white/80 rounded-xl border border-teal-100 flex flex-col gap-2 animate-fade-in shadow-inner"
}, lu = { class: "flex items-center justify-between text-xs text-teal-800 font-semibold" }, ru = { class: "text-teal-600" }, au = { class: "w-full bg-slate-100 h-2 rounded-full overflow-hidden" }, iu = { class: "absolute top-4 right-4" }, du = ["onClick"], uu = { class: "text-xl font-black text-teal-800 mb-4" }, cu = { class: "mb-6" }, pu = ["onUpdate:modelValue", "onChange"], fu = {
  key: 0,
  class: "space-y-4"
}, mu = { class: "flex justify-between items-center mb-3" }, xu = { class: "font-bold text-slate-700" }, gu = ["onClick"], vu = { class: "mb-3" }, hu = ["onUpdate:modelValue"], bu = { class: "space-y-4 mt-4" }, wu = ["onClick"], yu = ["onClick"], _u = {
  key: 1,
  class: "space-y-4 ml-2"
}, ku = ["onClick"], $u = { class: "w-full md:w-1/3 bg-slate-900 rounded-3xl shadow-xl overflow-hidden flex flex-col text-slate-300 max-h-[90vh]" }, Cu = {
  __name: "Creator",
  props: ["_p", "_pp"],
  setup(t) {
    const n = _e(), o = K({
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
    }), a = (d, s) => {
      if (!(d && typeof d == "string" && d.startsWith("_")))
        return s;
    }, i = K(JSON.stringify(o.value, a, 2));
    we(o, (d) => {
      i.value = JSON.stringify(d, a, 2);
    }, { deep: !0 });
    const y = () => {
      try {
        const d = JSON.parse(i.value);
        d.user_id || (d.user_id = o.value.user_id || "user_123"), o.value = d, alert("UI updated from JSON!");
      } catch (d) {
        alert("Invalid JSON! Please check the syntax."), console.error(d);
      }
    }, E = (d) => {
      ["reading", "listening"].includes(d.type) ? (d.modules = d.modules || [{ moduleNumber: 1, tasks: [] }], delete d.tasks) : (d.tasks = d.tasks || [], delete d.modules);
    }, N = () => {
      o.value.data.sections.push({
        type: "reading",
        modules: [{ moduleNumber: 1, tasks: [] }]
      });
    }, g = (d) => {
      o.value.data.sections.splice(d, 1);
    }, T = (d) => {
      const s = d.modules.length + 1;
      d.modules.push({
        moduleNumber: s,
        tasks: []
      });
    }, A = (d, s) => {
      d.modules.splice(s, 1);
    }, x = (d) => {
      const s = { type: "", imageUrl: "" };
      return d === "reading" ? { ...s, type: "reading_mcq", passageTitle: "", passageHTML: "", questions: [] } : d === "listening" ? { ...s, type: "listening_responses", passageTitle: "", audioTranscript: "", questions: [] } : d === "speaking" ? { ...s, type: "interview", title: "", context: "", prepTime: 0, responseTime: 60, instructions: "", questions: [] } : d === "writing" ? { ...s, type: "build_sentences", instruction: "", questions: [] } : s;
    }, f = (d, s) => {
      d.push(x(s));
    }, k = (d, s) => {
      d.splice(s, 1);
    }, Y = () => {
      const d = JSON.stringify(o.value, a, 2);
      navigator.clipboard.writeText(d), alert("JSON copied to clipboard!");
    }, j = K(!1), R = K(!1), U = K(0), Q = [
      "Initializing Gemini session...",
      "Designing TOEFL Reading passages and MCQs...",
      "Drafting TOEFL Listening audio transcripts & tasks...",
      "Formulating TOEFL Speaking questions...",
      "Creating Writing email & academic discussion prompts...",
      "Compiling and verifying JSON package structure...",
      "Finalizing test content..."
    ];
    let G = null;
    const L = () => {
      U.value = 0, G = setInterval(() => {
        U.value < Q.length - 1 && U.value++;
      }, 7e3);
    }, le = () => {
      G && (clearInterval(G), G = null);
    }, ne = async () => {
      R.value = !0;
      try {
        const d = t._pp.data.curr.data.api.e.url, s = await fetch(d, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${t._pp.data.curr.data.api.a.header.Authorization}`
          },
          body: JSON.stringify({
            user_id: o.value.user_id || "user_123"
          })
        });
        if (!s.ok)
          throw new Error(`Server returned error: ${s.statusText}`);
        const l = await s.json();
        if (l.success && l.prompt)
          await navigator.clipboard.writeText(l.prompt), alert("Gemini Prompt copied to clipboard!");
        else
          throw new Error(l.message || "Unknown error");
      } catch (d) {
        console.error("Failed to copy prompt:", d), alert(`Failed to copy prompt: ${d.message}`);
      } finally {
        R.value = !1;
      }
    }, O = async () => {
      j.value = !0, L();
      try {
        const d = t._pp.data.curr.data.api.f.url, s = await fetch(d, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${t._pp.data.curr.data.api.a.header.Authorization}`
          },
          body: JSON.stringify({
            user_id: o.value.user_id || "user_123"
          })
        });
        if (!s.ok)
          throw new Error(`Server returned error: ${s.statusText}`);
        const l = await s.json();
        if (l.success && l.data)
          o.value = l.data, i.value = JSON.stringify(l.data, a, 2), alert("Test generated successfully! You can review the details or make edits.");
        else
          throw new Error(l.message || "Unknown error");
      } catch (d) {
        console.error("Failed to generate test:", d), alert(`Failed to generate test with AI: ${d.message}`);
      } finally {
        le(), j.value = !1;
      }
    }, Z = async () => {
      try {
        (!o.value.user_id || o.value.user_id.trim() === "") && (o.value.user_id = "user_123");
        const d = JSON.parse(JSON.stringify(o.value, a));
        (!d.user_id || d.user_id.trim() === "") && (d.user_id = "user_123"), console.log("Submitting payload...", d);
        const s = t._pp.data.curr.data.api.a.url, l = await fetch(s, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${t._pp.data.curr.data.api.a.header.Authorization}`
          },
          body: JSON.stringify(d)
        });
        if (!l.ok)
          throw new Error(`Server returned error: ${l.statusText}`);
        const C = await l.json();
        if (C.success && C.data)
          alert(`Test created successfully in database! ID: ${C.data.id}`), n ? n.push(`/test/copywrite/${C.data.id}`) : window.location.href = `/test/copywrite/${C.data.id}`;
        else
          throw new Error(C.message || "Unknown error");
      } catch (d) {
        console.error("Submission failed:", d), alert(`Failed to submit test: ${d.message}`);
      }
    };
    return (d, s) => (m(), v("div", Gd, [
      e("div", Hd, [
        e("div", { class: "p-6 bg-gradient-to-r from-teal-600 to-teal-800 text-white flex justify-between items-center shrink-0" }, [
          s[3] || (s[3] = e("h1", { class: "text-xl md:text-2xl font-bold" }, "TOEFL Test Creator", -1)),
          e("button", {
            onClick: Z,
            class: "bg-white text-teal-700 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 transition shadow text-sm"
          }, " Create Test (Submit) ")
        ]),
        e("div", Wd, [
          e("section", Jd, [
            s[6] || (s[6] = e("h2", { class: "text-lg font-bold mb-4 text-slate-700 border-b pb-2" }, "Test Information", -1)),
            e("div", Kd, [
              e("div", null, [
                s[4] || (s[4] = e("label", { class: "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1" }, "Title", -1)),
                X(e("input", {
                  "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value.title = l),
                  type: "text",
                  class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                }, null, 512), [
                  [ee, o.value.title]
                ])
              ]),
              e("div", null, [
                s[5] || (s[5] = e("label", { class: "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1" }, "User ID", -1)),
                X(e("input", {
                  "onUpdate:modelValue": s[1] || (s[1] = (l) => o.value.user_id = l),
                  type: "text",
                  class: "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                }, null, 512), [
                  [ee, o.value.user_id]
                ])
              ])
            ])
          ]),
          e("section", Yd, [
            s[9] || (s[9] = Ce('<div class="absolute -top-10 -right-10 w-40 h-40 bg-teal-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div><div class="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div><h2 class="text-lg font-bold mb-2 text-teal-900 flex items-center gap-2"><svg class="w-5 h-5 text-teal-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Generate Test with Gemini AI </h2><p class="text-xs text-teal-700/80 mb-4">Generate a complete TOEFL practice test including Reading (Module 1 &amp; 2), Listening (Module 1 &amp; 2), Speaking, and Writing sections with Gemini AI.</p>', 4)),
            e("div", Zd, [
              e("button", {
                onClick: O,
                disabled: j.value,
                class: "bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-md text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[150px]"
              }, [
                j.value ? (m(), v("span", qd, [...s[7] || (s[7] = [
                  e("svg", {
                    class: "animate-spin h-4 w-4 text-white",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24"
                  }, [
                    e("circle", {
                      class: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      "stroke-width": "4"
                    }),
                    e("path", {
                      class: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })
                  ], -1),
                  q(" Generating... ", -1)
                ])])) : (m(), v("span", eu, "Generate Test"))
              ], 8, Xd),
              e("button", {
                onClick: ne,
                disabled: R.value || j.value,
                class: "border border-teal-600 text-teal-700 hover:bg-teal-50 px-5 py-2.5 rounded-lg font-semibold transition-all shadow-sm text-sm disabled:opacity-50 flex items-center justify-center gap-2 min-w-[120px]"
              }, [
                R.value ? (m(), v("span", su, [...s[8] || (s[8] = [
                  e("svg", {
                    class: "animate-spin h-4 w-4 text-teal-700",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24"
                  }, [
                    e("circle", {
                      class: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      "stroke-width": "4"
                    }),
                    e("path", {
                      class: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })
                  ], -1),
                  q(" Fetching... ", -1)
                ])])) : (m(), v("span", nu, "Copy Prompt"))
              ], 8, tu)
            ]),
            j.value ? (m(), v("div", ou, [
              e("div", lu, [
                e("span", null, M(Q[U.value]), 1),
                e("span", ru, M(Math.round((U.value + 1) / Q.length * 100)) + "%", 1)
              ]),
              e("div", au, [
                e("div", {
                  class: "bg-gradient-to-r from-teal-500 to-indigo-500 h-full rounded-full transition-all duration-500",
                  style: Se({ width: `${(U.value + 1) / Q.length * 100}%` })
                }, null, 4)
              ])
            ])) : se("", !0)
          ]),
          (m(!0), v(oe, null, ae(o.value.data.sections, (l, C) => (m(), v("div", {
            key: C,
            class: "bg-white p-5 rounded-2xl border border-slate-300 shadow-sm relative"
          }, [
            e("div", iu, [
              e("button", {
                onClick: (_) => g(C),
                class: "text-red-500 hover:text-red-700 text-xs font-bold uppercase tracking-wider"
              }, "Remove Section", 8, du)
            ]),
            e("h3", uu, "Section " + M(C + 1), 1),
            e("div", cu, [
              s[11] || (s[11] = e("label", { class: "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1" }, "Section Type", -1)),
              X(e("select", {
                "onUpdate:modelValue": (_) => l.type = _,
                onChange: (_) => E(l),
                class: "w-full md:w-1/3 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none font-semibold"
              }, [...s[10] || (s[10] = [
                e("option", { value: "reading" }, "Reading", -1),
                e("option", { value: "listening" }, "Listening", -1),
                e("option", { value: "speaking" }, "Speaking", -1),
                e("option", { value: "writing" }, "Writing", -1)
              ])], 40, pu), [
                [Ct, l.type]
              ])
            ]),
            ["reading", "listening"].includes(l.type) ? (m(), v("div", fu, [
              (m(!0), v(oe, null, ae(l.modules, (_, P) => (m(), v("div", {
                key: P,
                class: "border-l-4 border-indigo-400 pl-4 py-2 ml-2"
              }, [
                e("div", mu, [
                  e("h4", xu, "Module " + M(P + 1), 1),
                  e("button", {
                    onClick: (H) => A(l, P),
                    class: "text-red-400 hover:text-red-600 text-xs font-semibold"
                  }, "Remove Module", 8, gu)
                ]),
                e("div", vu, [
                  s[12] || (s[12] = e("label", { class: "block text-xs font-semibold text-slate-500 mb-1" }, "Module Number", -1)),
                  X(e("input", {
                    "onUpdate:modelValue": (H) => _.moduleNumber = H,
                    type: "number",
                    class: "w-24 border border-slate-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                  }, null, 8, hu), [
                    [
                      ee,
                      _.moduleNumber,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                e("div", bu, [
                  (m(!0), v(oe, null, ae(_.tasks, (H, J) => (m(), v("div", {
                    key: J,
                    class: "bg-slate-50 p-4 rounded-xl border border-slate-200"
                  }, [
                    De(yt, {
                      task: H,
                      sectionType: l.type,
                      onRemove: (F) => k(_.tasks, J)
                    }, null, 8, ["task", "sectionType", "onRemove"])
                  ]))), 128)),
                  e("button", {
                    onClick: (H) => f(_.tasks, l.type),
                    class: "text-sm bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-1.5 rounded-lg font-semibold transition"
                  }, " + Add Task to Module ", 8, wu)
                ])
              ]))), 128)),
              e("button", {
                onClick: (_) => T(l),
                class: "text-sm border-2 border-dashed border-indigo-300 text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition"
              }, " + Add Module ", 8, yu)
            ])) : (m(), v("div", _u, [
              (m(!0), v(oe, null, ae(l.tasks, (_, P) => (m(), v("div", {
                key: P,
                class: "bg-slate-50 p-4 rounded-xl border border-slate-200"
              }, [
                De(yt, {
                  task: _,
                  sectionType: l.type,
                  onRemove: (H) => k(l.tasks, P)
                }, null, 8, ["task", "sectionType", "onRemove"])
              ]))), 128)),
              e("button", {
                onClick: (_) => f(l.tasks, l.type),
                class: "text-sm border-2 border-dashed border-teal-300 text-teal-600 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 transition"
              }, " + Add Task to Section ", 8, ku)
            ]))
          ]))), 128)),
          e("button", {
            onClick: N,
            class: "w-full py-4 border-2 border-dashed border-teal-400 bg-teal-50 rounded-2xl text-teal-700 font-bold hover:bg-teal-100 transition flex items-center justify-center gap-2"
          }, [...s[13] || (s[13] = [
            e("span", { class: "text-xl leading-none" }, "+", -1),
            q(" Add New Section ", -1)
          ])])
        ])
      ]),
      e("div", $u, [
        e("div", { class: "p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center shrink-0" }, [
          s[14] || (s[14] = e("h2", { class: "font-semibold text-white" }, "JSON Payload", -1)),
          e("div", { class: "flex gap-2" }, [
            e("button", {
              onClick: Y,
              class: "text-[10px] bg-slate-700 hover:bg-slate-600 px-2 py-1.5 rounded-md text-white font-semibold transition shadow-sm border border-slate-600"
            }, "Copy"),
            e("button", {
              onClick: y,
              class: "text-[10px] bg-teal-600 hover:bg-teal-500 px-2 py-1.5 rounded-md text-white font-semibold transition shadow-sm"
            }, "Sync to UI")
          ])
        ]),
        X(e("textarea", {
          "onUpdate:modelValue": s[2] || (s[2] = (l) => i.value = l),
          class: "p-4 flex-1 text-xs font-mono bg-slate-900 text-teal-300/90 leading-relaxed outline-none resize-none scrollbar-thin scrollbar-thumb-slate-700",
          spellcheck: "false"
        }, null, 512), [
          [ee, i.value]
        ])
      ])
    ]));
  }
}, Au = [
  {
    path: "/creator",
    name: "creator",
    component: Cu
  },
  // --- ✨ DYNAMIC SETUP ROUTES ✨ ---
  // Updated to match your router.push(`/test/copywrite/${testId}`)
  {
    path: "/test/copywrite/:testId",
    name: "Copywrite",
    component: qs
  },
  {
    path: "/test/hardware/:testId",
    name: "hardware",
    component: sn
  },
  {
    path: "/test/volume/:testId",
    name: "volume",
    component: fn
  },
  {
    path: "/test/microphone/:testId",
    name: "microphone",
    component: Dn
  },
  {
    path: "/test/intro/:testId",
    name: "intro",
    component: Qn
  },
  {
    path: "/test/listening-intro/:testId",
    name: "listening-intro",
    component: Wn
  },
  // {
  //   path: '/questions/fib', // Leaving this static if it's just a UI test page
  //   name: 'Fib',
  //   component: Fib
  // },
  // --- ✨ DYNAMIC TEST SECTION ROUTES ✨ ---
  {
    path: "/reading-section/:testId",
    name: "reading-section",
    component: Eo
  },
  {
    path: "/listening-section/:testId",
    name: "listening-section",
    component: zr
  },
  {
    path: "/speaking-section/:testId",
    name: "speaking-section",
    component: fr
  },
  {
    path: "/writing-section/:testId",
    name: "writing-section",
    component: $l
  },
  {
    path: "/test/outcome/:testId",
    name: "outcome",
    component: wt
  },
  {
    path: "/outcome/review",
    name: "outcome-review",
    component: () => import("./OutcomeReviewPage-QSH-hrxv.js")
  },
  {
    path: "/list/:testId",
    name: "list",
    component: () => import("./ListPage-CmMUmK-J.js")
  },
  // Dynamic question route: /review/{testId}/{section}/{type}/{uuid}
  {
    path: "/review/:testId/:section/:questionType/:uuid",
    name: "question-detail",
    component: () => import("./OutcomeReviewPage-QSH-hrxv.js")
  },
  {
    path: "/result/:testId",
    name: "test-result",
    component: wt
  },
  // --- ENTRY POINT ---
  {
    path: "/start",
    name: "main",
    component: Wr
  }
], et = Ys({
  history: Ss(),
  routes: Au
}), Tu = { class: "app-container" }, Su = /* @__PURE__ */ me({
  __name: "index",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    const n = Ee(), o = K([]), a = K({ id: "", title: "", user_id: "" }), i = K(null), y = K(!1), E = K({
      section: "",
      module: 1,
      task: 1,
      question: 1
    }), N = () => {
      localStorage.setItem("test_progress", JSON.stringify({
        data: o.value,
        state: E.value,
        metadata: a.value
      }));
    }, g = () => {
      const j = localStorage.getItem("test_progress");
      if (j)
        try {
          const R = JSON.parse(j);
          return console.log("[Persistence] Loaded progress from localStorage:", R), R;
        } catch (R) {
          console.error("[Persistence] Error parsing localStorage data:", R);
        }
      return console.log("[Persistence] No saved progress found in localStorage."), null;
    }, T = (j) => j >= 95 ? "C1" : j >= 72 ? "B2" : j >= 42 ? "B1" : "A1", A = async (j) => {
      const R = g();
      R && R.metadata?.id === j && (console.log("[Persistence] Resuming from local storage"), o.value = R.data || [], E.value = R.state || E.value, a.value = R.metadata || a.value), y.value = !0;
      try {
        const U = n.path.includes("/review") || n.path.includes("/outcome") || n.path.includes("/result"), Q = R && Array.isArray(R.data) && R.data.length > 0, G = !U && !Q, L = `${t._pp.data.curr.data.api.b.url}&id=${j}${G ? "&clean=true" : ""}`, ne = await (await fetch(L, {
          method: "GET",
          headers: {
            accept: "*/*",
            Authorization: `Bearer ${t._pp.data.curr.data.api.a.header.Authorization}`
          }
        })).json();
        if (ne.success && ne.data?.l?.[0]) {
          const O = ne.data.l[0];
          a.value = { id: O.id, title: O.title, user_id: O.user_id };
          let Z = [], d = O.data;
          if (typeof d == "string")
            try {
              d = JSON.parse(d);
            } catch (_) {
              console.error("[APP] Failed to parse rootItem.data string:", _);
            }
          Array.isArray(d) ? Z = d : d && Array.isArray(d.sections) ? Z = d.sections : d && Array.isArray(d.l) && (Z = d.l);
          const s = n.path.includes("/review") || n.path.includes("/outcome"), C = R && R.metadata?.id === j && Array.isArray(R.data) && R.data.length > 0;
          !s && !C && Z.forEach((_) => {
            const P = (H) => {
              H && (H.user_input && (H.user_input.data = ""), H.user_result && (H.user_result.data = "", delete H.user_result.ai_feedback, delete H.user_result.score, delete H.user_result.status, delete H.user_result.explanation));
            };
            _.modules?.forEach((H) => H.tasks?.forEach((J) => {
              P(J), J.questions?.forEach(P);
            })), _.tasks?.forEach((H) => {
              P(H), H.questions?.forEach(P);
            });
          }), C || (o.value = Z), O.data?.overall && (i.value = O.data.overall), O.state && !C && (E.value = O.state), N();
        }
      } catch (U) {
        console.error("[APP] Error fetching test data:", U);
      } finally {
        y.value = !1;
      }
    };
    we(() => n.params.testId, (j) => {
      j && j !== a.value.id && A(j);
    }, { immediate: !0 }), we(() => n.query.result, (j) => {
      j && et.push(`/result/${j}`);
    }, { immediate: !0 });
    const x = async (j, R = !1) => {
      y.value = !0;
      try {
        const U = t._pp.data.curr.data.api.d.url, Q = {
          id: String(a.value.id || n.params.testId || ""),
          title: String(a.value.title || "TOEFL Practice Test"),
          user_id: String(a.value.user_id || "user_123"),
          data: {
            sections: o.value || [],
            overall: i.value || {}
          },
          state: E.value || {}
        }, G = a.value?.is_master || o.value?.is_master, L = n.path.includes("/review") || n.path.includes("/outcome") || n.path.includes("/result");
        if (!(G && !L && !R)) {
          console.log("[Sync] Sending payload to updatedata:", Q);
          const le = await fetch(U, {
            method: "PUT",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${t._pp.data.curr.data.api.a.header.Authorization}`
            },
            body: JSON.stringify(Q)
          });
          le.ok || console.warn("[Sync] Update status:", le.status);
        }
        if (R) {
          console.log("[Sync] Requesting evaluation for section:", j);
          const le = `${t._pp.data.curr.data.api.c.url}${j ? "&section=" + j : ""}`, ne = {
            id: a.value.id || n.params.testId,
            user_id: a.value.user_id || "user_123",
            title: a.value.title || "Practice Session",
            data: {
              sections: o.value,
              overall: i.value || {}
            }
          }, Z = await (await fetch(le, {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${t._pp.data.curr.data.api.a.header.Authorization}`
            },
            body: JSON.stringify(ne)
          })).json();
          if (console.log("[Sync] Evaluation Result:", Z), Z.success && (Z.data || Z.sections)) {
            o.value = Z.data?.sections || Z.sections || Z.data;
            const d = Z.overall || Z.data?.overall;
            if (d) {
              const s = i.value || { total: { old_toefl: 0, new_toefl: 0, cefr: "A1" } }, l = ["reading", "listening", "speaking", "writing"];
              l.forEach((_) => {
                d[_] && (s[_] = d[_]);
              });
              let C = 0;
              l.forEach((_) => {
                s[_] && (C += s[_].old_toefl || 0, s[_].new_toefl = Number((s[_].old_toefl / 30 * 6).toFixed(1)));
              }), s.total = {
                old_toefl: C,
                new_toefl: Number((C / 120 * 6).toFixed(1)),
                cefr: T(C)
              }, i.value = { ...s }, N();
            }
            console.log("[Sync] Practice data updated successfully");
          } else
            console.error("[Sync] Evaluation failed:", Z.message);
        }
      } catch (U) {
        console.error("[Sync] Global error:", U);
      } finally {
        y.value = !1;
      }
    }, f = (j, R, U, Q, G, L, le) => {
      try {
        const ne = o.value.find((d) => d.type === j);
        if (!ne) return;
        let O, Z;
        if (ne.modules && ne.modules[R] ? (Z = ne.modules[R].tasks?.[U], Z && (O = Z.questions?.[Q])) : ne.tasks && ne.tasks[U] && (Z = ne.tasks[U], Z && (O = Z.questions?.[Q])), !O && Z && (Q === 0 || !Z.questions || Z.questions.length === 0) && (O = Z), O) {
          if (L && O[L]) {
            let d;
            if (Array.isArray(O[L])) {
              let s = le !== void 0 ? le : 0;
              d = O[L][s];
            } else
              d = O[L];
            d && (d.user_input || (d.user_input = { data: "" }), d.user_input.data = G, O.question = d.question, O.options = d.options, O.answer = d.answer, O.cref = d.cref, O.creator_answer = d.creator_answer, d.user_result ? O.user_result = JSON.parse(JSON.stringify(d.user_result)) : O.user_result = { data: "" });
          }
          O.user_input || (O.user_input = { data: "" }), O.user_input.data = G, N();
        }
      } catch (ne) {
        console.error(ne);
      }
    }, k = async () => {
      try {
        y.value = !0;
        const j = `${t._pp.data.curr.data.api.a.url}`, R = {
          title: `Result: ${a.value.title || "TOEFL Test"} (${(/* @__PURE__ */ new Date()).toLocaleDateString()})`,
          user_id: a.value.user_id || "user_123",
          data: {
            sections: o.value || [],
            overall: i.value || {}
          },
          state: {}
          // State is empty for a finished result
        };
        console.log("[Submit] Creating new result record...", R);
        const Q = await (await fetch(j, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${t._pp.data.curr.data.api.a.header.Authorization}`
          },
          body: JSON.stringify(R)
        })).json();
        if (Q.success && Q.data?.id) {
          const G = Q.data.id;
          console.log("[Submit] New result record created with ID:", G);
          const L = "toefl_test_history", le = JSON.parse(localStorage.getItem(L) || "[]");
          le.push({
            masterId: a.value.id,
            resultId: G,
            title: R.title,
            date: (/* @__PURE__ */ new Date()).toISOString()
          }), localStorage.setItem(L, JSON.stringify(le)), localStorage.removeItem("test_progress"), et.push(`/result/${G}`);
        } else
          alert("Failed to save results. Please try again.");
      } catch (j) {
        console.error("[Submit] Error submitting test:", j);
      } finally {
        y.value = !1;
      }
    }, Y = (j, R) => {
      try {
        const U = o.value.find((L) => L.type.toLowerCase() === j.toLowerCase());
        if (!U) return;
        const Q = (L) => {
          L.uuid !== R && (L.user_input = { data: "" }, L.user_result = null);
        }, G = (L) => {
          L.uuid === R || L.id === R || (L.questions && L.questions.length > 0 ? (L.tasks?.forEach(Q), L.questions.forEach(Q)) : (L.user_input = { data: "" }, L.user_result = null));
        };
        U.modules ? U.modules.forEach((L) => L.tasks?.forEach(G)) : U.tasks && U.tasks.forEach(G), N(), console.log(`[Clear] Section ${j} cleared (except: ${R || "none"})`);
      } catch (U) {
        console.error("[Clear] Failed to clear section:", U);
      }
    };
    return ye("state", E), ye("saveToLocalStorage", N), ye("testData", o), ye("testMetadata", a), ye("overallScore", i), ye("isGlobalLoading", y), ye("updateUserInput", f), ye("syncAllData", x), ye("submitFinalTest", k), ye("clearSectionAnswers", Y), (j, R) => {
      const U = Ft("router-view");
      return m(), v("div", Tu, [
        De(U, {
          _p: t._p,
          _pp: t._pp
        }, null, 8, ["_p", "_pp"])
      ]);
    };
  }
}), Lu = async (t) => ({
  set: async (n) => {
    console.log(`--hydrator [${n.data.curr.type}]`);
    const o = {
      _p: t,
      _pp: n
    };
    console.log(o._pp.data.curr.data.api.a);
    const a = Qt(Su, o);
    a.use(et);
    const i = {
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
    }, y = document.getElementById(t.f.name("vue-root"));
    return a.mount(y), i;
  }
});
export {
  Pe as _,
  _e as a,
  Lu as i,
  Ee as u
};
