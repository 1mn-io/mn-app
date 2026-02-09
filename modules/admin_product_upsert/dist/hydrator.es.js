import { r as Kr, g as ge, o as Je, n as Gr, w as ko, a as ao, b as Zr, d as Qr, c as ot, e as et, f as rt, h as tt, i as nt } from "./runtime-dom.esm-bundler-Crm1kotq.js";
var at = Object.defineProperty, me = Object.getOwnPropertySymbols, it = Object.prototype.hasOwnProperty, lt = Object.prototype.propertyIsEnumerable, pe = (o, e, r) => e in o ? at(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, st = (o, e) => {
  for (var r in e || (e = {})) it.call(e, r) && pe(o, r, e[r]);
  if (me) for (var r of me(e)) lt.call(e, r) && pe(o, r, e[r]);
  return o;
};
function ie(o) {
  return o == null || o === "" || Array.isArray(o) && o.length === 0 || !(o instanceof Date) && typeof o == "object" && Object.keys(o).length === 0;
}
function ct(o) {
  return typeof o == "function" && "call" in o && "apply" in o;
}
function B(o) {
  return !ie(o);
}
function io(o, e = !0) {
  return o instanceof Object && o.constructor === Object && (e || Object.keys(o).length !== 0);
}
function Xe(o = {}, e = {}) {
  let r = st({}, o);
  return Object.keys(e).forEach((t) => {
    let n = t;
    io(e[n]) && n in o && io(o[n]) ? r[n] = Xe(o[n], e[n]) : r[n] = e[n];
  }), r;
}
function dt(...o) {
  return o.reduce((e, r, t) => t === 0 ? r : Xe(e, r), {});
}
function to(o, ...e) {
  return ct(o) ? o(...e) : o;
}
function po(o, e = !0) {
  return typeof o == "string" && (e || o !== "");
}
function ut(o) {
  return B(o) && !isNaN(o);
}
function lo(o, e) {
  if (e) {
    let r = e.test(o);
    return e.lastIndex = 0, r;
  }
  return !1;
}
function ft(...o) {
  return dt(...o);
}
function wo(o) {
  return o && o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function Ye(o) {
  return po(o) ? o.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : o;
}
function Ke() {
  let o = /* @__PURE__ */ new Map();
  return { on(e, r) {
    let t = o.get(e);
    return t ? t.push(r) : t = [r], o.set(e, t), this;
  }, off(e, r) {
    let t = o.get(e);
    return t && t.splice(t.indexOf(r) >>> 0, 1), this;
  }, emit(e, r) {
    let t = o.get(e);
    t && t.forEach((n) => {
      n(r);
    });
  }, clear() {
    o.clear();
  } };
}
function gt(o) {
  if (o) {
    let e = o.parentNode;
    return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
  }
  return null;
}
function mt(o) {
  return !!(o !== null && typeof o < "u" && o.nodeName && gt(o));
}
function Ge(o) {
  return typeof Element < "u" ? o instanceof Element : o !== null && typeof o == "object" && o.nodeType === 1 && typeof o.nodeName == "string";
}
function Zo(o, e = {}) {
  if (Ge(o)) {
    let r = (t, n) => {
      var i, a;
      let l = (i = o?.$attrs) != null && i[t] ? [(a = o?.$attrs) == null ? void 0 : a[t]] : [];
      return [n].flat().reduce((c, s) => {
        if (s != null) {
          let d = typeof s;
          if (d === "string" || d === "number") c.push(s);
          else if (d === "object") {
            let u = Array.isArray(s) ? r(t, s) : Object.entries(s).map(([m, b]) => t === "style" && (b || b === 0) ? `${m.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${b}` : b ? m : void 0);
            c = u.length ? c.concat(u.filter((m) => !!m)) : c;
          }
        }
        return c;
      }, l);
    };
    Object.entries(e).forEach(([t, n]) => {
      if (n != null) {
        let i = t.match(/^on(.+)/);
        i ? o.addEventListener(i[1].toLowerCase(), n) : t === "p-bind" || t === "pBind" ? Zo(o, n) : (n = t === "class" ? [...new Set(r("class", n))].join(" ").trim() : t === "style" ? r("style", n).join(";").trim() : n, (o.$attrs = o.$attrs || {}) && (o.$attrs[t] = n), o.setAttribute(t, n));
      }
    });
  }
}
function pt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ht(o, e = "", r) {
  Ge(o) && r !== null && r !== void 0 && o.setAttribute(e, r);
}
var bt = Object.defineProperty, vt = Object.defineProperties, yt = Object.getOwnPropertyDescriptors, Io = Object.getOwnPropertySymbols, Ze = Object.prototype.hasOwnProperty, Qe = Object.prototype.propertyIsEnumerable, he = (o, e, r) => e in o ? bt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, X = (o, e) => {
  for (var r in e || (e = {})) Ze.call(e, r) && he(o, r, e[r]);
  if (Io) for (var r of Io(e)) Qe.call(e, r) && he(o, r, e[r]);
  return o;
}, Jo = (o, e) => vt(o, yt(e)), oo = (o, e) => {
  var r = {};
  for (var t in o) Ze.call(o, t) && e.indexOf(t) < 0 && (r[t] = o[t]);
  if (o != null && Io) for (var t of Io(o)) e.indexOf(t) < 0 && Qe.call(o, t) && (r[t] = o[t]);
  return r;
}, kt = Ke(), eo = kt, Co = /{([^}]*)}/g, or = /(\d+\s+[\+\-\*\/]\s+\d+)/g, er = /var\([^)]+\)/g;
function be(o) {
  return po(o) ? o.replace(/[A-Z]/g, (e, r) => r === 0 ? e : "." + e.toLowerCase()).toLowerCase() : o;
}
function wt(o) {
  return io(o) && o.hasOwnProperty("$value") && o.hasOwnProperty("$type") ? o.$value : o;
}
function Ct(o) {
  return o.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Qo(o = "", e = "") {
  return Ct(`${po(o, !1) && po(e, !1) ? `${o}-` : o}${e}`);
}
function rr(o = "", e = "") {
  return `--${Qo(o, e)}`;
}
function xt(o = "") {
  let e = (o.match(/{/g) || []).length, r = (o.match(/}/g) || []).length;
  return (e + r) % 2 !== 0;
}
function tr(o, e = "", r = "", t = [], n) {
  if (po(o)) {
    let i = o.trim();
    if (xt(i)) return;
    if (lo(i, Co)) {
      let a = i.replaceAll(Co, (l) => {
        let c = l.replace(/{|}/g, "").split(".").filter((s) => !t.some((d) => lo(s, d)));
        return `var(${rr(r, Ye(c.join("-")))}${B(n) ? `, ${n}` : ""})`;
      });
      return lo(a.replace(er, "0"), or) ? `calc(${a})` : a;
    }
    return i;
  } else if (ut(o)) return o;
}
function $t(o, e, r) {
  po(e, !1) && o.push(`${e}:${r};`);
}
function go(o, e) {
  return o ? `${o}{${e}}` : "";
}
function nr(o, e) {
  if (o.indexOf("dt(") === -1) return o;
  function r(a, l) {
    let c = [], s = 0, d = "", u = null, m = 0;
    for (; s <= a.length; ) {
      let b = a[s];
      if ((b === '"' || b === "'" || b === "`") && a[s - 1] !== "\\" && (u = u === b ? null : b), !u && (b === "(" && m++, b === ")" && m--, (b === "," || s === a.length) && m === 0)) {
        let g = d.trim();
        g.startsWith("dt(") ? c.push(nr(g, l)) : c.push(t(g)), d = "", s++;
        continue;
      }
      b !== void 0 && (d += b), s++;
    }
    return c;
  }
  function t(a) {
    let l = a[0];
    if ((l === '"' || l === "'" || l === "`") && a[a.length - 1] === l) return a.slice(1, -1);
    let c = Number(a);
    return isNaN(c) ? a : c;
  }
  let n = [], i = [];
  for (let a = 0; a < o.length; a++) if (o[a] === "d" && o.slice(a, a + 3) === "dt(") i.push(a), a += 2;
  else if (o[a] === ")" && i.length > 0) {
    let l = i.pop();
    i.length === 0 && n.push([l, a]);
  }
  if (!n.length) return o;
  for (let a = n.length - 1; a >= 0; a--) {
    let [l, c] = n[a], s = o.slice(l + 3, c), d = r(s, e), u = e(...d);
    o = o.slice(0, l) + u + o.slice(c + 1);
  }
  return o;
}
var so = (...o) => Bt(z.getTheme(), ...o), Bt = (o = {}, e, r, t) => {
  if (e) {
    let { variable: n, options: i } = z.defaults || {}, { prefix: a, transform: l } = o?.options || i || {}, c = lo(e, Co) ? e : `{${e}}`;
    return t === "value" || ie(t) && l === "strict" ? z.getTokenValue(e) : tr(c, void 0, a, [n.excludedKeyRegex], r);
  }
  return "";
};
function To(o, ...e) {
  if (o instanceof Array) {
    let r = o.reduce((t, n, i) => {
      var a;
      return t + n + ((a = to(e[i], { dt: so })) != null ? a : "");
    }, "");
    return nr(r, so);
  }
  return to(o, { dt: so });
}
function Rt(o, e = {}) {
  let r = z.defaults.variable, { prefix: t = r.prefix, selector: n = r.selector, excludedKeyRegex: i = r.excludedKeyRegex } = e, a = [], l = [], c = [{ node: o, path: t }];
  for (; c.length; ) {
    let { node: d, path: u } = c.pop();
    for (let m in d) {
      let b = d[m], g = wt(b), p = lo(m, i) ? Qo(u) : Qo(u, Ye(m));
      if (io(g)) c.push({ node: g, path: p });
      else {
        let h = rr(p), v = tr(g, p, t, [i]);
        $t(l, h, v);
        let k = p;
        t && k.startsWith(t + "-") && (k = k.slice(t.length + 1)), a.push(k.replace(/-/g, "."));
      }
    }
  }
  let s = l.join("");
  return { value: l, tokens: a, declarations: s, css: go(n, s) };
}
var J = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(o) {
  return { type: "class", selector: o, matched: this.pattern.test(o.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(o) {
  return { type: "attr", selector: `:root${o},:host${o}`, matched: this.pattern.test(o.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(o) {
  return { type: "media", selector: o, matched: this.pattern.test(o.trim()) };
} }, system: { pattern: /^system$/, resolve(o) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(o.trim()) };
} }, custom: { resolve(o) {
  return { type: "custom", selector: o, matched: !0 };
} } }, resolve(o) {
  let e = Object.keys(this.rules).filter((r) => r !== "custom").map((r) => this.rules[r]);
  return [o].flat().map((r) => {
    var t;
    return (t = e.map((n) => n.resolve(r)).find((n) => n.matched)) != null ? t : this.rules.custom.resolve(r);
  });
} }, _toVariables(o, e) {
  return Rt(o, { prefix: e?.prefix });
}, getCommon({ name: o = "", theme: e = {}, params: r, set: t, defaults: n }) {
  var i, a, l, c, s, d, u;
  let { preset: m, options: b } = e, g, p, h, v, k, w, C;
  if (B(m) && b.transform !== "strict") {
    let { primitive: _, semantic: N, extend: x } = m, W = N || {}, { colorScheme: I } = W, K = oo(W, ["colorScheme"]), H = x || {}, { colorScheme: U } = H, F = oo(H, ["colorScheme"]), E = I || {}, { dark: G } = E, $ = oo(E, ["dark"]), Z = U || {}, { dark: P } = Z, Q = oo(Z, ["dark"]), q = B(_) ? this._toVariables({ primitive: _ }, b) : {}, S = B(K) ? this._toVariables({ semantic: K }, b) : {}, L = B($) ? this._toVariables({ light: $ }, b) : {}, ro = B(G) ? this._toVariables({ dark: G }, b) : {}, V = B(F) ? this._toVariables({ semantic: F }, b) : {}, vo = B(Q) ? this._toVariables({ light: Q }, b) : {}, fe = B(P) ? this._toVariables({ dark: P }, b) : {}, [zr, Ar] = [(i = q.declarations) != null ? i : "", q.tokens], [Nr, Pr] = [(a = S.declarations) != null ? a : "", S.tokens || []], [Lr, Dr] = [(l = L.declarations) != null ? l : "", L.tokens || []], [jr, Ir] = [(c = ro.declarations) != null ? c : "", ro.tokens || []], [Fr, Wr] = [(s = V.declarations) != null ? s : "", V.tokens || []], [Ur, Mr] = [(d = vo.declarations) != null ? d : "", vo.tokens || []], [Hr, qr] = [(u = fe.declarations) != null ? u : "", fe.tokens || []];
    g = this.transformCSS(o, zr, "light", "variable", b, t, n), p = Ar;
    let Vr = this.transformCSS(o, `${Nr}${Lr}`, "light", "variable", b, t, n), Jr = this.transformCSS(o, `${jr}`, "dark", "variable", b, t, n);
    h = `${Vr}${Jr}`, v = [.../* @__PURE__ */ new Set([...Pr, ...Dr, ...Ir])];
    let Xr = this.transformCSS(o, `${Fr}${Ur}color-scheme:light`, "light", "variable", b, t, n), Yr = this.transformCSS(o, `${Hr}color-scheme:dark`, "dark", "variable", b, t, n);
    k = `${Xr}${Yr}`, w = [.../* @__PURE__ */ new Set([...Wr, ...Mr, ...qr])], C = to(m.css, { dt: so });
  }
  return { primitive: { css: g, tokens: p }, semantic: { css: h, tokens: v }, global: { css: k, tokens: w }, style: C };
}, getPreset({ name: o = "", preset: e = {}, options: r, params: t, set: n, defaults: i, selector: a }) {
  var l, c, s;
  let d, u, m;
  if (B(e) && r.transform !== "strict") {
    let b = o.replace("-directive", ""), g = e, { colorScheme: p, extend: h, css: v } = g, k = oo(g, ["colorScheme", "extend", "css"]), w = h || {}, { colorScheme: C } = w, _ = oo(w, ["colorScheme"]), N = p || {}, { dark: x } = N, W = oo(N, ["dark"]), I = C || {}, { dark: K } = I, H = oo(I, ["dark"]), U = B(k) ? this._toVariables({ [b]: X(X({}, k), _) }, r) : {}, F = B(W) ? this._toVariables({ [b]: X(X({}, W), H) }, r) : {}, E = B(x) ? this._toVariables({ [b]: X(X({}, x), K) }, r) : {}, [G, $] = [(l = U.declarations) != null ? l : "", U.tokens || []], [Z, P] = [(c = F.declarations) != null ? c : "", F.tokens || []], [Q, q] = [(s = E.declarations) != null ? s : "", E.tokens || []], S = this.transformCSS(b, `${G}${Z}`, "light", "variable", r, n, i, a), L = this.transformCSS(b, Q, "dark", "variable", r, n, i, a);
    d = `${S}${L}`, u = [.../* @__PURE__ */ new Set([...$, ...P, ...q])], m = to(v, { dt: so });
  }
  return { css: d, tokens: u, style: m };
}, getPresetC({ name: o = "", theme: e = {}, params: r, set: t, defaults: n }) {
  var i;
  let { preset: a, options: l } = e, c = (i = a?.components) == null ? void 0 : i[o];
  return this.getPreset({ name: o, preset: c, options: l, params: r, set: t, defaults: n });
}, getPresetD({ name: o = "", theme: e = {}, params: r, set: t, defaults: n }) {
  var i, a;
  let l = o.replace("-directive", ""), { preset: c, options: s } = e, d = ((i = c?.components) == null ? void 0 : i[l]) || ((a = c?.directives) == null ? void 0 : a[l]);
  return this.getPreset({ name: l, preset: d, options: s, params: r, set: t, defaults: n });
}, applyDarkColorScheme(o) {
  return !(o.darkModeSelector === "none" || o.darkModeSelector === !1);
}, getColorSchemeOption(o, e) {
  var r;
  return this.applyDarkColorScheme(o) ? this.regex.resolve(o.darkModeSelector === !0 ? e.options.darkModeSelector : (r = o.darkModeSelector) != null ? r : e.options.darkModeSelector) : [];
}, getLayerOrder(o, e = {}, r, t) {
  let { cssLayer: n } = e;
  return n ? `@layer ${to(n.order || n.name || "primeui", r)}` : "";
}, getCommonStyleSheet({ name: o = "", theme: e = {}, params: r, props: t = {}, set: n, defaults: i }) {
  let a = this.getCommon({ name: o, theme: e, params: r, set: n, defaults: i }), l = Object.entries(t).reduce((c, [s, d]) => c.push(`${s}="${d}"`) && c, []).join(" ");
  return Object.entries(a || {}).reduce((c, [s, d]) => {
    if (io(d) && Object.hasOwn(d, "css")) {
      let u = wo(d.css), m = `${s}-variables`;
      c.push(`<style type="text/css" data-primevue-style-id="${m}" ${l}>${u}</style>`);
    }
    return c;
  }, []).join("");
}, getStyleSheet({ name: o = "", theme: e = {}, params: r, props: t = {}, set: n, defaults: i }) {
  var a;
  let l = { name: o, theme: e, params: r, set: n, defaults: i }, c = (a = o.includes("-directive") ? this.getPresetD(l) : this.getPresetC(l)) == null ? void 0 : a.css, s = Object.entries(t).reduce((d, [u, m]) => d.push(`${u}="${m}"`) && d, []).join(" ");
  return c ? `<style type="text/css" data-primevue-style-id="${o}-variables" ${s}>${wo(c)}</style>` : "";
}, createTokens(o = {}, e, r = "", t = "", n = {}) {
  let i = function(l, c = {}, s = []) {
    if (s.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: l, path: this.path, paths: c, value: void 0 };
    s.push(this.path), c.name = this.path, c.binding || (c.binding = {});
    let d = this.value;
    if (typeof this.value == "string" && Co.test(this.value)) {
      let u = this.value.trim().replace(Co, (m) => {
        var b;
        let g = m.slice(1, -1), p = this.tokens[g];
        if (!p) return console.warn(`Token not found for path: ${g}`), "__UNRESOLVED__";
        let h = p.computed(l, c, s);
        return Array.isArray(h) && h.length === 2 ? `light-dark(${h[0].value},${h[1].value})` : (b = h?.value) != null ? b : "__UNRESOLVED__";
      });
      d = or.test(u.replace(er, "0")) ? `calc(${u})` : u;
    }
    return ie(c.binding) && delete c.binding, s.pop(), { colorScheme: l, path: this.path, paths: c, value: d.includes("__UNRESOLVED__") ? void 0 : d };
  }, a = (l, c, s) => {
    Object.entries(l).forEach(([d, u]) => {
      let m = lo(d, e.variable.excludedKeyRegex) ? c : c ? `${c}.${be(d)}` : be(d), b = s ? `${s}.${d}` : d;
      io(u) ? a(u, m, b) : (n[m] || (n[m] = { paths: [], computed: (g, p = {}, h = []) => {
        if (n[m].paths.length === 1) return n[m].paths[0].computed(n[m].paths[0].scheme, p.binding, h);
        if (g && g !== "none") for (let v = 0; v < n[m].paths.length; v++) {
          let k = n[m].paths[v];
          if (k.scheme === g) return k.computed(g, p.binding, h);
        }
        return n[m].paths.map((v) => v.computed(v.scheme, p[v.scheme], h));
      } }), n[m].paths.push({ path: b, value: u, scheme: b.includes("colorScheme.light") ? "light" : b.includes("colorScheme.dark") ? "dark" : "none", computed: i, tokens: n }));
    });
  };
  return a(o, r, t), n;
}, getTokenValue(o, e, r) {
  var t;
  let n = ((l) => l.split(".").filter((c) => !lo(c.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(e), i = e.includes("colorScheme.light") ? "light" : e.includes("colorScheme.dark") ? "dark" : void 0, a = [(t = o[n]) == null ? void 0 : t.computed(i)].flat().filter((l) => l);
  return a.length === 1 ? a[0].value : a.reduce((l = {}, c) => {
    let s = c, { colorScheme: d } = s, u = oo(s, ["colorScheme"]);
    return l[d] = u, l;
  }, void 0);
}, getSelectorRule(o, e, r, t) {
  return r === "class" || r === "attr" ? go(B(e) ? `${o}${e},${o} ${e}` : o, t) : go(o, go(e ?? ":root,:host", t));
}, transformCSS(o, e, r, t, n = {}, i, a, l) {
  if (B(e)) {
    let { cssLayer: c } = n;
    if (t !== "style") {
      let s = this.getColorSchemeOption(n, a);
      e = r === "dark" ? s.reduce((d, { type: u, selector: m }) => (B(m) && (d += m.includes("[CSS]") ? m.replace("[CSS]", e) : this.getSelectorRule(m, l, u, e)), d), "") : go(l ?? ":root,:host", e);
    }
    if (c) {
      let s = { name: "primeui" };
      io(c) && (s.name = to(c.name, { name: o, type: t })), B(s.name) && (e = go(`@layer ${s.name}`, e), i?.layerNames(s.name));
    }
    return e;
  }
  return "";
} }, z = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(o = {}) {
  let { theme: e } = o;
  e && (this._theme = Jo(X({}, e), { options: X(X({}, this.defaults.options), e.options) }), this._tokens = J.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
}, get theme() {
  return this._theme;
}, get preset() {
  var o;
  return ((o = this.theme) == null ? void 0 : o.preset) || {};
}, get options() {
  var o;
  return ((o = this.theme) == null ? void 0 : o.options) || {};
}, get tokens() {
  return this._tokens;
}, getTheme() {
  return this.theme;
}, setTheme(o) {
  this.update({ theme: o }), eo.emit("theme:change", o);
}, getPreset() {
  return this.preset;
}, setPreset(o) {
  this._theme = Jo(X({}, this.theme), { preset: o }), this._tokens = J.createTokens(o, this.defaults), this.clearLoadedStyleNames(), eo.emit("preset:change", o), eo.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(o) {
  this._theme = Jo(X({}, this.theme), { options: o }), this.clearLoadedStyleNames(), eo.emit("options:change", o), eo.emit("theme:change", this.theme);
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(o) {
  this._layerNames.add(o);
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(o) {
  return this._loadedStyleNames.has(o);
}, setLoadedStyleName(o) {
  this._loadedStyleNames.add(o);
}, deleteLoadedStyleName(o) {
  this._loadedStyleNames.delete(o);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(o) {
  return J.getTokenValue(this.tokens, o, this.defaults);
}, getCommon(o = "", e) {
  return J.getCommon({ name: o, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(o = "", e) {
  let r = { name: o, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return J.getPresetC(r);
}, getDirective(o = "", e) {
  let r = { name: o, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return J.getPresetD(r);
}, getCustomPreset(o = "", e, r, t) {
  let n = { name: o, preset: e, options: this.options, selector: r, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return J.getPreset(n);
}, getLayerOrderCSS(o = "") {
  return J.getLayerOrder(o, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(o = "", e, r = "style", t) {
  return J.transformCSS(o, e, t, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(o = "", e, r = {}) {
  return J.getCommonStyleSheet({ name: o, theme: this.theme, params: e, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(o, e, r = {}) {
  return J.getStyleSheet({ name: o, theme: this.theme, params: e, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(o) {
  this._loadingStyles.add(o);
}, onStyleUpdated(o) {
  this._loadingStyles.add(o);
}, onStyleLoaded(o, { name: e }) {
  this._loadingStyles.size && (this._loadingStyles.delete(e), eo.emit(`theme:${e}:load`, o), !this._loadingStyles.size && eo.emit("theme:load"));
} }, T = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
}, St = `
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: var(--px-mask-background, dt('mask.background'));
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter-active {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave-active {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: var(--px-mask-background, dt('mask.background'));
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: var(--px-mask-background, dt('mask.background'));
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;
function xo(o) {
  "@babel/helpers - typeof";
  return xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xo(o);
}
function ve(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function ye(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ve(Object(r), !0).forEach(function(t) {
      _t(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : ve(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function _t(o, e, r) {
  return (e = Ot(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function Ot(o) {
  var e = Et(o, "string");
  return xo(e) == "symbol" ? e : e + "";
}
function Et(o, e) {
  if (xo(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (xo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
function Tt(o) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  ge() && ge().components ? Je(o) : e ? o() : Gr(o);
}
var zt = 0;
function At(o) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ao(!1), t = ao(o), n = ao(null), i = pt() ? window.document : void 0, a = e.document, l = a === void 0 ? i : a, c = e.immediate, s = c === void 0 ? !0 : c, d = e.manual, u = d === void 0 ? !1 : d, m = e.name, b = m === void 0 ? "style_".concat(++zt) : m, g = e.id, p = g === void 0 ? void 0 : g, h = e.media, v = h === void 0 ? void 0 : h, k = e.nonce, w = k === void 0 ? void 0 : k, C = e.first, _ = C === void 0 ? !1 : C, N = e.onMounted, x = N === void 0 ? void 0 : N, W = e.onUpdated, I = W === void 0 ? void 0 : W, K = e.onLoad, H = K === void 0 ? void 0 : K, U = e.props, F = U === void 0 ? {} : U, E = function() {
  }, G = function(P) {
    var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (l) {
      var q = ye(ye({}, F), Q), S = q.name || b, L = q.id || p, ro = q.nonce || w;
      n.value = l.querySelector('style[data-primevue-style-id="'.concat(S, '"]')) || l.getElementById(L) || l.createElement("style"), n.value.isConnected || (t.value = P || o, Zo(n.value, {
        type: "text/css",
        id: L,
        media: v,
        nonce: ro
      }), _ ? l.head.prepend(n.value) : l.head.appendChild(n.value), ht(n.value, "data-primevue-style-id", S), Zo(n.value, q), n.value.onload = function(V) {
        return H?.(V, {
          name: S
        });
      }, x?.(S)), !r.value && (E = ko(t, function(V) {
        n.value.textContent = V, I?.(S);
      }, {
        immediate: !0
      }), r.value = !0);
    }
  }, $ = function() {
    !l || !r.value || (E(), mt(n.value) && l.head.removeChild(n.value), r.value = !1, n.value = null);
  };
  return s && !u && Tt(G), {
    id: p,
    name: b,
    el: n,
    css: t,
    unload: $,
    load: G,
    isLoaded: Kr(r)
  };
}
function $o(o) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $o(o);
}
var ke, we, Ce, xe;
function $e(o, e) {
  return Dt(o) || Lt(o, e) || Pt(o, e) || Nt();
}
function Nt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pt(o, e) {
  if (o) {
    if (typeof o == "string") return Be(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Be(o, e) : void 0;
  }
}
function Be(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++) t[r] = o[r];
  return t;
}
function Lt(o, e) {
  var r = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (r != null) {
    var t, n, i, a, l = [], c = !0, s = !1;
    try {
      if (i = (r = r.call(o)).next, e !== 0) for (; !(c = (t = i.call(r)).done) && (l.push(t.value), l.length !== e); c = !0) ;
    } catch (d) {
      s = !0, n = d;
    } finally {
      try {
        if (!c && r.return != null && (a = r.return(), Object(a) !== a)) return;
      } finally {
        if (s) throw n;
      }
    }
    return l;
  }
}
function Dt(o) {
  if (Array.isArray(o)) return o;
}
function Re(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Xo(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Re(Object(r), !0).forEach(function(t) {
      jt(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : Re(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function jt(o, e, r) {
  return (e = It(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function It(o) {
  var e = Ft(o, "string");
  return $o(e) == "symbol" ? e : e + "";
}
function Ft(o, e) {
  if ($o(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if ($o(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
function zo(o, e) {
  return e || (e = o.slice(0)), Object.freeze(Object.defineProperties(o, { raw: { value: Object.freeze(e) } }));
}
var Wt = function(e) {
  var r = e.dt;
  return `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(r("scrollbar.width"), `;
}
`);
}, Ut = {}, Mt = {}, fo = {
  name: "base",
  css: Wt,
  style: St,
  classes: Ut,
  inlineStyles: Mt,
  load: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, n = t(To(ke || (ke = zo(["", ""])), e));
    return B(n) ? At(wo(n), Xo({
      name: this.name
    }, r)) : {};
  },
  loadCSS: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, e);
  },
  loadStyle: function() {
    var e = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, r, function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return z.transformCSS(r.name || e.name, "".concat(n).concat(To(we || (we = zo(["", ""])), t)));
    });
  },
  getCommonTheme: function(e) {
    return z.getCommon(this.name, e);
  },
  getComponentTheme: function(e) {
    return z.getComponent(this.name, e);
  },
  getDirectiveTheme: function(e) {
    return z.getDirective(this.name, e);
  },
  getPresetTheme: function(e, r, t) {
    return z.getCustomPreset(this.name, e, r, t);
  },
  getLayerOrderThemeCSS: function() {
    return z.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var t = to(this.css, {
        dt: so
      }) || "", n = wo(To(Ce || (Ce = zo(["", "", ""])), t, e)), i = Object.entries(r).reduce(function(a, l) {
        var c = $e(l, 2), s = c[0], d = c[1];
        return a.push("".concat(s, '="').concat(d, '"')) && a;
      }, []).join(" ");
      return B(n) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(i, ">").concat(n, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return z.getCommonStyleSheet(this.name, e, r);
  },
  getThemeStyleSheet: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [z.getStyleSheet(this.name, e, r)];
    if (this.style) {
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = To(xe || (xe = zo(["", ""])), to(this.style, {
        dt: so
      })), a = wo(z.transformCSS(n, i)), l = Object.entries(r).reduce(function(c, s) {
        var d = $e(s, 2), u = d[0], m = d[1];
        return c.push("".concat(u, '="').concat(m, '"')) && c;
      }, []).join(" ");
      B(a) && t.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(l, ">").concat(a, "</style>"));
    }
    return t.join("");
  },
  extend: function(e) {
    return Xo(Xo({}, this), {}, {
      css: void 0,
      style: void 0
    }, e);
  }
}, Ao = Ke();
function Bo(o) {
  "@babel/helpers - typeof";
  return Bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Bo(o);
}
function Se(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function No(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Se(Object(r), !0).forEach(function(t) {
      Ht(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : Se(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function Ht(o, e, r) {
  return (e = qt(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function qt(o) {
  var e = Vt(o, "string");
  return Bo(e) == "symbol" ? e : e + "";
}
function Vt(o, e) {
  if (Bo(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Bo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var Jt = {
  ripple: !1,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: !1,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [T.STARTS_WITH, T.CONTAINS, T.NOT_CONTAINS, T.ENDS_WITH, T.EQUALS, T.NOT_EQUALS],
    numeric: [T.EQUALS, T.NOT_EQUALS, T.LESS_THAN, T.LESS_THAN_OR_EQUAL_TO, T.GREATER_THAN, T.GREATER_THAN_OR_EQUAL_TO],
    date: [T.DATE_IS, T.DATE_IS_NOT, T.DATE_BEFORE, T.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: !1,
  pt: void 0,
  ptOptions: {
    mergeSections: !0,
    mergeProps: !1
  },
  csp: {
    nonce: void 0
  }
}, Xt = /* @__PURE__ */ Symbol();
function Yt(o, e) {
  var r = {
    config: Zr(e)
  };
  return o.config.globalProperties.$primevue = r, o.provide(Xt, r), Kt(), Gt(o, r), r;
}
var mo = [];
function Kt() {
  eo.clear(), mo.forEach(function(o) {
    return o?.();
  }), mo = [];
}
function Gt(o, e) {
  var r = ao(!1), t = function() {
    var s;
    if (((s = e.config) === null || s === void 0 ? void 0 : s.theme) !== "none" && !z.isStyleNameLoaded("common")) {
      var d, u, m = ((d = fo.getCommonTheme) === null || d === void 0 ? void 0 : d.call(fo)) || {}, b = m.primitive, g = m.semantic, p = m.global, h = m.style, v = {
        nonce: (u = e.config) === null || u === void 0 || (u = u.csp) === null || u === void 0 ? void 0 : u.nonce
      };
      fo.load(b?.css, No({
        name: "primitive-variables"
      }, v)), fo.load(g?.css, No({
        name: "semantic-variables"
      }, v)), fo.load(p?.css, No({
        name: "global-variables"
      }, v)), fo.loadStyle(No({
        name: "global-style"
      }, v), h), z.setLoadedStyleName("common");
    }
  };
  eo.on("theme:change", function(c) {
    r.value || (o.config.globalProperties.$primevue.config.theme = c, r.value = !0);
  });
  var n = ko(e.config, function(c, s) {
    Ao.emit("config:change", {
      newValue: c,
      oldValue: s
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = ko(function() {
    return e.config.ripple;
  }, function(c, s) {
    Ao.emit("config:ripple:change", {
      newValue: c,
      oldValue: s
    });
  }, {
    immediate: !0,
    deep: !0
  }), a = ko(function() {
    return e.config.theme;
  }, function(c, s) {
    r.value || z.setTheme(c), e.config.unstyled || t(), r.value = !1, Ao.emit("config:theme:change", {
      newValue: c,
      oldValue: s
    });
  }, {
    immediate: !0,
    deep: !1
  }), l = ko(function() {
    return e.config.unstyled;
  }, function(c, s) {
    !c && e.config.theme && t(), Ao.emit("config:unstyled:change", {
      newValue: c,
      oldValue: s
    });
  }, {
    immediate: !0,
    deep: !0
  });
  mo.push(n), mo.push(i), mo.push(a), mo.push(l);
}
var Zt = {
  install: function(e, r) {
    var t = ft(Jt, r);
    Yt(e, t);
  }
}, Qt = { transitionDuration: "{transition.duration}" }, on = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, en = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, rn = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, tn = { root: Qt, panel: on, header: en, content: rn }, nn = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, an = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, ln = { padding: "{list.padding}", gap: "{list.gap}" }, sn = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, cn = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, dn = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, un = { borderRadius: "{border.radius.sm}" }, fn = { padding: "{list.option.padding}" }, gn = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, mn = { root: nn, overlay: an, list: ln, option: sn, optionGroup: cn, dropdown: dn, chip: un, emptyMessage: fn, colorScheme: gn }, pn = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, hn = { size: "1rem" }, bn = { borderColor: "{content.background}", offset: "-0.75rem" }, vn = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, yn = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, kn = { root: pn, icon: hn, group: bn, lg: vn, xl: yn }, wn = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, Cn = { size: "0.5rem" }, xn = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, $n = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, Bn = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, Rn = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Sn = { root: wn, dot: Cn, sm: xn, lg: $n, xl: Bn, colorScheme: Rn }, _n = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, On = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, En = { primitive: _n, semantic: On }, Tn = { borderRadius: "{content.border.radius}" }, zn = { root: Tn }, An = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, Nn = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Pn = { color: "{navigation.item.icon.color}" }, Ln = { root: An, item: Nn, separator: Pn }, Dn = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, jn = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, In = { root: Dn, colorScheme: jn }, Fn = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, Wn = { padding: "1.25rem", gap: "0.5rem" }, Un = { gap: "0.5rem" }, Mn = { fontSize: "1.25rem", fontWeight: "500" }, Hn = { color: "{text.muted.color}" }, qn = { root: Fn, body: Wn, caption: Un, title: Mn, subtitle: Hn }, Vn = { transitionDuration: "{transition.duration}" }, Jn = { gap: "0.25rem" }, Xn = { padding: "1rem", gap: "0.5rem" }, Yn = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Kn = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, Gn = { root: Vn, content: Jn, indicatorList: Xn, indicator: Yn, colorScheme: Kn }, Zn = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Qn = { width: "2.5rem", color: "{form.field.icon.color}" }, oa = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, ea = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, ra = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, ta = { color: "{form.field.icon.color}" }, na = { root: Zn, dropdown: Qn, overlay: oa, list: ea, option: ra, clearIcon: ta }, aa = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, ia = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, la = { root: aa, icon: ia }, sa = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, ca = { width: "2rem", height: "2rem" }, da = { size: "1rem" }, ua = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, fa = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, ga = { root: sa, image: ca, icon: da, removeIcon: ua, colorScheme: fa }, ma = { transitionDuration: "{transition.duration}" }, pa = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ha = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, ba = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, va = { root: ma, preview: pa, panel: ha, colorScheme: ba }, ya = { size: "2rem", color: "{overlay.modal.color}" }, ka = { gap: "1rem" }, wa = { icon: ya, content: ka }, Ca = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, xa = { padding: "{overlay.popover.padding}", gap: "1rem" }, $a = { size: "1.5rem", color: "{overlay.popover.color}" }, Ba = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, Ra = { root: Ca, content: xa, icon: $a, footer: Ba }, Sa = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, _a = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Oa = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Ea = { mobileIndent: "1rem" }, Ta = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, za = { borderColor: "{content.border.color}" }, Aa = { root: Sa, list: _a, item: Oa, submenu: Ea, submenuIcon: Ta, separator: za }, Na = `
    li.p-autocomplete-option,
    div.p-cascadeselect-option-content,
    li.p-listbox-option,
    li.p-multiselect-option,
    li.p-select-option,
    li.p-listbox-option,
    div.p-tree-node-content,
    li.p-datatable-filter-constraint,
    .p-datatable .p-datatable-tbody > tr,
    .p-treetable .p-treetable-tbody > tr,
    div.p-menu-item-content,
    div.p-tieredmenu-item-content,
    div.p-contextmenu-item-content,
    div.p-menubar-item-content,
    div.p-megamenu-item-content,
    div.p-panelmenu-header-content,
    div.p-panelmenu-item-content,
    th.p-datatable-header-cell,
    th.p-treetable-header-cell,
    thead.p-datatable-thead > tr > th,
    .p-treetable thead.p-treetable-thead>tr>th {
        transition: none;
    }
`, Pa = { transitionDuration: "{transition.duration}" }, La = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Da = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ja = { fontWeight: "600" }, Ia = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Fa = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Wa = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Ua = { fontWeight: "600" }, Ma = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Ha = { color: "{primary.color}" }, qa = { width: "0.5rem" }, Va = { width: "1px", color: "{primary.color}" }, Ja = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Xa = { size: "2rem" }, Ya = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ka = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, Ga = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Za = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Qa = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, oi = `
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, ei = { root: Pa, header: La, headerCell: Da, columnTitle: ja, row: Ia, bodyCell: Fa, footerCell: Wa, columnFooter: Ua, footer: Ma, dropPoint: Ha, columnResizer: qa, resizeIndicator: Va, sortIcon: Ja, loadingIcon: Xa, rowToggleButton: Ya, filter: Ka, paginatorTop: Ga, paginatorBottom: Za, colorScheme: Qa, css: oi }, ri = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, ti = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, ni = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, ai = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, ii = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, li = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, si = { root: ri, header: ti, content: ni, footer: ai, paginatorTop: ii, paginatorBottom: li }, ci = { transitionDuration: "{transition.duration}" }, di = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, ui = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, fi = { gap: "0.5rem", fontWeight: "500" }, gi = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, mi = { color: "{form.field.icon.color}" }, pi = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, hi = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, bi = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, vi = { margin: "0.5rem 0 0 0" }, yi = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, ki = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, wi = { margin: "0.5rem 0 0 0" }, Ci = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, xi = { margin: "0.5rem 0 0 0" }, $i = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, Bi = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, Ri = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, Si = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, _i = { root: ci, panel: di, header: ui, title: fi, dropdown: gi, inputIcon: mi, selectMonth: pi, selectYear: hi, group: bi, dayView: vi, weekDay: yi, date: ki, monthView: wi, month: Ci, yearView: xi, year: $i, buttonbar: Bi, timePicker: Ri, colorScheme: Si }, Oi = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, Ei = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, Ti = { fontSize: "1.25rem", fontWeight: "600" }, zi = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Ai = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, Ni = { root: Oi, header: Ei, title: Ti, content: zi, footer: Ai }, Pi = { borderColor: "{content.border.color}" }, Li = { background: "{content.background}", color: "{text.color}" }, Di = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, ji = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, Ii = { root: Pi, content: Li, horizontal: Di, vertical: ji }, Fi = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, Wi = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ui = { root: Fi, item: Wi }, Mi = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, Hi = { padding: "{overlay.modal.padding}" }, qi = { fontSize: "1.5rem", fontWeight: "600" }, Vi = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Ji = { padding: "{overlay.modal.padding}" }, Xi = { root: Mi, header: Hi, title: qi, content: Vi, footer: Ji }, Yi = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, Ki = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Gi = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, Zi = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Qi = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, ol = { toolbar: Yi, toolbarItem: Ki, overlay: Gi, overlayOption: Zi, content: Qi }, el = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, rl = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, tl = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, nl = { padding: "0" }, al = { root: el, legend: rl, toggleIcon: tl, content: nl }, il = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, ll = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, sl = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, cl = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, dl = { gap: "0.5rem" }, ul = { height: "0.25rem" }, fl = { gap: "0.5rem" }, gl = { root: il, header: ll, content: sl, file: cl, fileList: dl, progressbar: ul, basic: fl }, ml = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, pl = { active: { top: "-1.25rem" } }, hl = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, bl = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, vl = { root: ml, over: pl, in: hl, on: bl }, yl = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, kl = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, wl = { size: "1.5rem" }, Cl = { background: "{content.background}", padding: "1rem 0.25rem" }, xl = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, $l = { size: "1rem" }, Bl = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, Rl = { gap: "0.5rem", padding: "1rem" }, Sl = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, _l = { background: "rgba(0, 0, 0, 0.5)" }, Ol = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, El = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Tl = { size: "1.5rem" }, zl = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, Al = { root: yl, navButton: kl, navIcon: wl, thumbnailsContent: Cl, thumbnailNavButton: xl, thumbnailNavButtonIcon: $l, caption: Bl, indicatorList: Rl, indicatorButton: Sl, insetIndicatorList: _l, insetIndicatorButton: Ol, closeButton: El, closeButtonIcon: Tl, colorScheme: zl }, Nl = { color: "{form.field.icon.color}" }, Pl = { icon: Nl }, Ll = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, Dl = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, jl = { root: Ll, input: Dl }, Il = { transitionDuration: "{transition.duration}" }, Fl = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, Wl = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, Ul = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ml = { root: Il, preview: Fl, toolbar: Wl, action: Ul }, Hl = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ql = { handle: Hl }, Vl = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, Jl = { fontWeight: "500" }, Xl = { size: "1rem" }, Yl = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, Kl = { root: Vl, text: Jl, icon: Xl, colorScheme: Yl }, Gl = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, Zl = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, Ql = { root: Gl, display: Zl }, os = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, es = { borderRadius: "{border.radius.sm}" }, rs = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, ts = { root: os, chip: es, colorScheme: rs }, ns = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, as = { addon: ns }, is = { transitionDuration: "{transition.duration}" }, ls = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, ss = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, cs = { root: is, button: ls, colorScheme: ss }, ds = { gap: "0.5rem" }, us = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, fs = { root: ds, input: us }, gs = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, ms = { root: gs }, ps = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, hs = { background: "{primary.color}" }, bs = { background: "{content.border.color}" }, vs = { color: "{text.muted.color}" }, ys = { root: ps, value: hs, range: bs, text: vs }, ks = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, ws = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Cs = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, xs = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, $s = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, Bs = { padding: "{list.option.padding}" }, Rs = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, Ss = { root: ks, list: ws, option: Cs, optionGroup: xs, checkmark: $s, emptyMessage: Bs, colorScheme: Rs }, _s = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, Os = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, Es = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Ts = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, zs = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, As = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, Ns = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Ps = { borderColor: "{content.border.color}" }, Ls = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ds = { root: _s, baseItem: Os, item: Es, overlay: Ts, submenu: zs, submenuLabel: As, submenuIcon: Ns, separator: Ps, mobileButton: Ls }, js = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Is = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Fs = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Ws = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, Us = { borderColor: "{content.border.color}" }, Ms = { root: js, list: Is, item: Fs, submenuLabel: Ws, separator: Us }, Hs = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, qs = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, Vs = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Js = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, Xs = { borderColor: "{content.border.color}" }, Ys = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ks = { root: Hs, baseItem: qs, item: Vs, submenu: Js, separator: Xs, mobileButton: Ys }, Gs = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Zs = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, Qs = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, oc = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, ec = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, rc = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, tc = { root: { borderWidth: "1px" } }, nc = { content: { padding: "0" } }, ac = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, ic = { root: Gs, content: Zs, text: Qs, icon: oc, closeButton: ec, closeIcon: rc, outlined: tc, simple: nc, colorScheme: ac }, lc = { borderRadius: "{content.border.radius}", gap: "1rem" }, sc = { background: "{content.border.color}", size: "0.5rem" }, cc = { gap: "0.5rem" }, dc = { size: "0.5rem" }, uc = { size: "1rem" }, fc = { verticalGap: "0.5rem", horizontalGap: "1rem" }, gc = { root: lc, meters: sc, label: cc, labelMarker: dc, labelIcon: uc, labelList: fc }, mc = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, pc = { width: "2.5rem", color: "{form.field.icon.color}" }, hc = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, bc = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, vc = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, yc = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, kc = { color: "{form.field.icon.color}" }, wc = { borderRadius: "{border.radius.sm}" }, Cc = { padding: "{list.option.padding}" }, xc = { root: mc, dropdown: pc, overlay: hc, list: bc, option: vc, optionGroup: yc, chip: wc, clearIcon: kc, emptyMessage: Cc }, $c = { gap: "1.125rem" }, Bc = { gap: "0.5rem" }, Rc = { root: $c, controls: Bc }, Sc = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, _c = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, Oc = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ec = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, Tc = { root: Sc, node: _c, nodeToggleButton: Oc, connector: Ec }, zc = { outline: { width: "2px", color: "{content.background}" } }, Ac = { root: zc }, Nc = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Pc = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Lc = { color: "{text.muted.color}" }, Dc = { maxWidth: "2.5rem" }, jc = { root: Nc, navButton: Pc, currentPageReport: Lc, jumpToPageInput: Dc }, Ic = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Fc = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, Wc = { padding: "0.375rem 1.125rem" }, Uc = { fontWeight: "600" }, Mc = { padding: "0 1.125rem 1.125rem 1.125rem" }, Hc = { padding: "0 1.125rem 1.125rem 1.125rem" }, qc = { root: Ic, header: Fc, toggleableHeader: Wc, title: Uc, content: Mc, footer: Hc }, Vc = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Jc = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, Xc = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Yc = { indent: "1rem" }, Kc = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, Gc = { root: Vc, panel: Jc, item: Xc, submenu: Yc, submenuIcon: Kc }, Zc = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, Qc = { color: "{form.field.icon.color}" }, od = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, ed = { gap: "0.5rem" }, rd = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, td = { meter: Zc, icon: Qc, overlay: od, content: ed, colorScheme: rd }, nd = { gap: "1.125rem" }, ad = { gap: "0.5rem" }, id = { root: nd, controls: ad }, ld = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, sd = { padding: "{overlay.popover.padding}" }, cd = { root: ld, content: sd }, dd = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, ud = { background: "{primary.color}" }, fd = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, gd = { root: dd, value: ud, label: fd }, md = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, pd = { colorScheme: md }, hd = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, bd = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, vd = { root: hd, icon: bd }, yd = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, kd = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, wd = { root: yd, icon: kd }, Cd = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, xd = { colorScheme: Cd }, $d = { transitionDuration: "{transition.duration}" }, Bd = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Rd = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, Sd = { root: $d, bar: Bd, colorScheme: Rd }, _d = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Od = { width: "2.5rem", color: "{form.field.icon.color}" }, Ed = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Td = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, zd = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Ad = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Nd = { color: "{form.field.icon.color}" }, Pd = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, Ld = { padding: "{list.option.padding}" }, Dd = { root: _d, dropdown: Od, overlay: Ed, list: Td, option: zd, optionGroup: Ad, clearIcon: Nd, checkmark: Pd, emptyMessage: Ld }, jd = { borderRadius: "{form.field.border.radius}" }, Id = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, Fd = { root: jd, colorScheme: Id }, Wd = { borderRadius: "{content.border.radius}" }, Ud = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, Md = { root: Wd, colorScheme: Ud }, Hd = { transitionDuration: "{transition.duration}" }, qd = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, Vd = { background: "{primary.color}" }, Jd = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xd = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, Yd = { root: Hd, track: qd, range: Vd, handle: Jd, colorScheme: Xd }, Kd = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Gd = { root: Kd }, Zd = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, Qd = { root: Zd }, ou = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, eu = { background: "{content.border.color}" }, ru = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, tu = { root: ou, gutter: eu, handle: ru }, nu = { transitionDuration: "{transition.duration}" }, au = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, iu = { padding: "0.5rem", gap: "1rem" }, lu = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, su = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, cu = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, du = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, uu = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, fu = { root: nu, separator: au, step: iu, stepHeader: lu, stepTitle: su, stepNumber: cu, steppanels: du, steppanel: uu }, gu = { transitionDuration: "{transition.duration}" }, mu = { background: "{content.border.color}" }, pu = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, hu = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, bu = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, vu = { root: gu, separator: mu, itemLink: pu, itemLabel: hu, itemNumber: bu }, yu = { transitionDuration: "{transition.duration}" }, ku = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, wu = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Cu = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, xu = { height: "1px", bottom: "-1px", background: "{primary.color}" }, $u = { root: yu, tablist: ku, item: wu, itemIcon: Cu, activeBar: xu }, Bu = { transitionDuration: "{transition.duration}" }, Ru = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Su = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, _u = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, Ou = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Eu = { height: "1px", bottom: "-1px", background: "{primary.color}" }, Tu = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, zu = { root: Bu, tablist: Ru, tab: Su, tabpanel: _u, navButton: Ou, activeBar: Eu, colorScheme: Tu }, Au = { transitionDuration: "{transition.duration}" }, Nu = { background: "{content.background}", borderColor: "{content.border.color}" }, Pu = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Lu = { background: "{content.background}", color: "{content.color}" }, Du = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, ju = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, Iu = { root: Au, tabList: Nu, tab: Pu, tabPanel: Lu, navButton: Du, colorScheme: ju }, Fu = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, Wu = { size: "0.75rem" }, Uu = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Mu = { root: Fu, icon: Wu, colorScheme: Uu }, Hu = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, qu = { gap: "0.25rem" }, Vu = { margin: "2px 0" }, Ju = { root: Hu, prompt: qu, commandResponse: Vu }, Xu = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Yu = { root: Xu }, Ku = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Gu = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Zu = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Qu = { mobileIndent: "1rem" }, of = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, ef = { borderColor: "{content.border.color}" }, rf = { root: Ku, list: Gu, item: Zu, submenu: Qu, submenuIcon: of, separator: ef }, tf = { minHeight: "5rem" }, nf = { eventContent: { padding: "1rem 0" } }, af = { eventContent: { padding: "0 1rem" } }, lf = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, sf = { color: "{content.border.color}", size: "2px" }, cf = { event: tf, horizontal: nf, vertical: af, eventMarker: lf, eventConnector: sf }, df = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, uf = { size: "1.125rem" }, ff = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, gf = { gap: "0.5rem" }, mf = { fontWeight: "500", fontSize: "1rem" }, pf = { fontWeight: "500", fontSize: "0.875rem" }, hf = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, bf = { size: "1rem" }, vf = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, yf = { root: df, icon: uf, content: ff, text: gf, summary: mf, detail: pf, closeButton: hf, closeIcon: bf, colorScheme: vf }, kf = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, wf = { disabledColor: "{form.field.disabled.color}" }, Cf = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, xf = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, $f = { root: kf, icon: wf, content: Cf, colorScheme: xf }, Bf = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, Rf = { borderRadius: "50%", size: "1rem" }, Sf = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, _f = { root: Bf, handle: Rf, colorScheme: Sf }, Of = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, Ef = { root: Of }, Tf = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, zf = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, Af = { root: Tf, colorScheme: zf }, Nf = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, Pf = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, Lf = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, Df = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, jf = { size: "2rem" }, If = { margin: "0 0 0.5rem 0" }, Ff = `
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Wf = { root: Nf, node: Pf, nodeIcon: Lf, nodeToggleButton: Df, loadingIcon: jf, filter: If, css: Ff }, Uf = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Mf = { width: "2.5rem", color: "{form.field.icon.color}" }, Hf = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, qf = { padding: "{list.padding}" }, Vf = { padding: "{list.option.padding}" }, Jf = { borderRadius: "{border.radius.sm}" }, Xf = { color: "{form.field.icon.color}" }, Yf = { root: Uf, dropdown: Mf, overlay: Hf, tree: qf, emptyMessage: Vf, chip: Jf, clearIcon: Xf }, Kf = { transitionDuration: "{transition.duration}" }, Gf = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, Zf = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Qf = { fontWeight: "600" }, o0 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, e0 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, r0 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, t0 = { fontWeight: "600" }, n0 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, a0 = { width: "0.5rem" }, i0 = { width: "1px", color: "{primary.color}" }, l0 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, s0 = { size: "2rem" }, c0 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, d0 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, u0 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, f0 = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, g0 = `
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, m0 = { root: Kf, header: Gf, headerCell: Zf, columnTitle: Qf, row: o0, bodyCell: e0, footerCell: r0, columnFooter: t0, footer: n0, columnResizer: a0, resizeIndicator: i0, sortIcon: l0, loadingIcon: s0, nodeToggleButton: c0, paginatorTop: d0, paginatorBottom: u0, colorScheme: f0, css: g0 }, p0 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, h0 = { loader: p0 }, b0 = Object.defineProperty, v0 = Object.defineProperties, y0 = Object.getOwnPropertyDescriptors, _e = Object.getOwnPropertySymbols, k0 = Object.prototype.hasOwnProperty, w0 = Object.prototype.propertyIsEnumerable, Oe = (o, e, r) => e in o ? b0(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, Ee, C0 = (Ee = ((o, e) => {
  for (var r in e || (e = {})) k0.call(e, r) && Oe(o, r, e[r]);
  if (_e) for (var r of _e(e)) w0.call(e, r) && Oe(o, r, e[r]);
  return o;
})({}, En), v0(Ee, y0({ components: { accordion: tn, autocomplete: mn, avatar: kn, badge: Sn, blockui: zn, breadcrumb: Ln, button: In, card: qn, carousel: Gn, cascadeselect: na, checkbox: la, chip: ga, colorpicker: va, confirmdialog: wa, confirmpopup: Ra, contextmenu: Aa, datatable: ei, dataview: si, datepicker: _i, dialog: Ni, divider: Ii, dock: Ui, drawer: Xi, editor: ol, fieldset: al, fileupload: gl, floatlabel: vl, galleria: Al, iconfield: Pl, iftalabel: jl, image: Ml, imagecompare: ql, inlinemessage: Kl, inplace: Ql, inputchips: ts, inputgroup: as, inputnumber: cs, inputotp: fs, inputtext: ms, knob: ys, listbox: Ss, megamenu: Ds, menu: Ms, menubar: Ks, message: ic, metergroup: gc, multiselect: xc, orderlist: Rc, organizationchart: Tc, overlaybadge: Ac, paginator: jc, panel: qc, panelmenu: Gc, password: td, picklist: id, popover: cd, progressbar: gd, progressspinner: pd, radiobutton: vd, rating: wd, ripple: xd, scrollpanel: Sd, select: Dd, selectbutton: Fd, skeleton: Md, slider: Yd, speeddial: Gd, splitbutton: Qd, splitter: tu, stepper: fu, steps: vu, tabmenu: $u, tabs: zu, tabview: Iu, tag: Mu, terminal: Ju, textarea: Yu, tieredmenu: rf, timeline: cf, toast: yf, togglebutton: $f, toggleswitch: _f, toolbar: Ef, tooltip: Af, tree: Wf, treeselect: Yf, treetable: m0, virtualscroller: h0 }, css: Na })));
const oe = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const e = Math.random() * 16 | 0;
    return (o == "x" ? e : e & 3 | 8).toString(16);
  })
}), ar = async () => ({
  f: {
    name: (o) => `${o.name}${o.id}`
  }
}), ir = async () => ({
  set: async (o) => {
    console.log("--theme");
    try {
      if (!o.el_id)
        throw new Error("[el_id] is required");
      const e = o.name, r = document.getElementById(o.el_id);
      if (!r)
        throw new Error("[el_id] is invalid");
      ((t) => {
        const n = (i) => {
          ((a) => {
            const l = a.getAttribute("data-ce");
            if (!l)
              return;
            const c = JSON.parse(l).filter((s) => s?.k.startsWith("t-"));
            if (c.length != 0)
              for (const s of c) {
                const d = s.k, u = s.v.split(" ");
                if (d == `t-${e}-class`)
                  for (const m of u)
                    a.classList.add(m);
                else
                  for (const m of u)
                    a.classList.remove(m);
              }
          })(i);
        };
        for (const i of t.getElementsByTagName("*"))
          n(i);
        n(t);
      })(r);
    } catch (e) {
      const r = `err: [theme] ${e}`;
      throw console.log(r), r;
    }
  }
});
function ee(o, e = 1e3) {
  let r = {
    cnt: 0
  };
  return new Promise((t) => {
    const n = () => {
      console.log(`[setInterval] is running.. [count=${r.cnt}]`);
      try {
        o() && (clearInterval(i), t());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${e}]`);
      }
      r.cnt += 1;
    }, i = setInterval(() => {
      n();
    }, e);
    n();
  });
}
let x0 = class {
  listeners = {};
  on = (o, e) => ((this.listeners[o] ||= []).push(e), () => this.off(o, e));
  off = (o, e) => {
    this.listeners[o] = this.listeners[o]?.filter((r) => r !== e);
  };
  /** Sequential execution (await each listener) */
  emit = async (o, ...e) => {
    for (const r of this.listeners[o] ?? [])
      await r(...e);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (o, ...e) => {
    await Promise.all(
      (this.listeners[o] ?? []).map((r) => r(...e))
    );
  };
  //Error-safe emit
  emitSafe = async (o, ...e) => {
    for (const r of this.listeners[o] ?? [])
      try {
        await r(...e);
      } catch (t) {
        this.listeners.error?.forEach(
          (n) => n(t)
        );
      }
  };
};
const Fo = () => new x0();
class lr {
  startTime;
  endTime;
  isRunning;
  constructor() {
    this.startTime = 0, this.endTime = 0, this.isRunning = !1;
  }
  // Starts the timer
  start() {
    if (this.isRunning)
      throw new Error("Benchmark has already started.");
    this.startTime = performance.now(), this.isRunning = !0;
  }
  // Stops the timer and records the end time
  stop() {
    if (!this.isRunning)
      throw new Error("Benchmark hasn't started.");
    this.endTime = performance.now(), this.isRunning = !1;
  }
  // Get the result in milliseconds
  result() {
    if (this.isRunning)
      throw new Error("Benchmark is still running.");
    return {
      time_taken_ms: (this.endTime - this.startTime).toFixed(4)
    };
  }
}
console.log("content-engine-lib");
let O = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (o) => {
      const e = o?.lib || [];
      for (const [r, t] of e.entries()) {
        const n = t, i = `${n.name}:${o.run_from}`, a = `${o.run_from}_src`;
        let l = n[a];
        const c = `${o.run_from}_src`;
        let s = o?.lazy_lib?.[c] || null;
        if (s && (s = s.replace("{*}", `${n.name}`)), console.log(`_lazy_src: ${s}`), console.log(`_src: ${l}`), O.lib.l.hasOwnProperty(`${i}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(l) && l.includes("/") == !1 && O.lib.inbuilt_lib.indexOf(`${n.name}`) === -1)
            if (s)
              l = s;
            else
              throw `[lib-name=${n.name},lib-src=${l}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (l.startsWith("./") || l.startsWith("../")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${l}`
            );
            O.lib.l[`${i}`] = {
              lib: d,
              src: l
            };
          }
          if (l.startsWith("http://") || l.startsWith("https://")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${l}`
            );
            O.lib.l[`${i}`] = {
              lib: d,
              src: l
            };
          }
        }
      }
      console.log(await O.lib.get_all({}));
    },
    get: async (o) => {
      let e = null;
      const r = `${o.name}:${o.run_from}`;
      return O.lib.l.hasOwnProperty(`${r}`) == !1 && await O.lib.set({
        lib: [
          {
            renderer_src: o.name,
            hydrator_src: o.name,
            editor_src: o.name,
            name: o.name
          }
        ],
        run_from: o.run_from,
        lazy_lib: o.lazy_lib
      }), e = O.lib.l[`${r}`], e;
    },
    get_all: async (o) => O.lib.l
  },
  path: {
    set: (o) => {
      let e = "", r = "";
      const t = o.src.split("/");
      if (o.src.indexOf("://localhost") !== -1 || o.src.indexOf("://127.0.0.1") !== -1 || (r = "/dist"), t.indexOf(o.type) !== -1)
        for (const [n, i] of t.entries()) {
          let a = n == 0 ? "" : "/";
          if (e += `${a}${i}`, i == o.type)
            return `${e}${r}${o.name}`;
        }
      else
        for (const [n, i] of t.entries()) {
          let a = n == 0 ? "" : "/";
          if (e += `${a}${i}`, i == "src")
            return `${e}${r}${o.name}`;
        }
      return `${e}${r}${o.name}`;
    }
  }
};
const sr = Fo(), cr = Fo(), $0 = sr.on, B0 = sr.emit, R0 = cr.emit, S0 = cr.on, _0 = async (o) => {
  const e = await ar();
  return await O.lib.set({ lib: o.lib, run_from: "renderer", lazy_lib: o.lazy_lib }), {
    set: async (r) => {
      console.log("--renderer [set]"), r.return = r?.return || {}, r.return.r = r?.return?.r || "full";
      const t = new lr();
      t.start();
      let n = r.data?.value?.l || r.data.l, i = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return r.return.r == "full" ? i.r = "" : i.r = [], await (async () => {
        for (const a of n) {
          const l = await await O.lib.get({ name: a.type, run_from: "renderer", lazy_lib: o.lazy_lib }), c = await (await l.lib.index({
            f: {
              name: (s) => e.f.name({ id: a.id, name: s }),
              get_lib: async (s) => await await O.lib.get({ name: s.name, run_from: s.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (s) => await (await ir()).set(s),
              path: (s) => O.path.set({ src: l.src, type: a.type, name: s }),
              //set..
              uuid: () => oe().set(),
              wait_until: ee
            }
          })).set(
            {
              data: {
                curr: a
              }
            }
            /*_$cb*/
          );
          r?.return?.r == "full" ? i.r += c?.r || "" : i.r.push(c?.r || ""), i.style += c?.style || "", i.head += c?.head || "";
        }
      })(), t.stop(), i.benchmark = t.result(), i;
    }
  };
}, O0 = async (o) => {
  const e = await ar();
  return await O.lib.set({ lib: o.lib, run_from: "hydrator", lazy_lib: o.lazy_lib }), {
    set: async (r) => {
      console.log("--hydrator [set]");
      const t = new lr();
      t.start();
      let n = {
        r: "",
        style: ""
      }, i = {
        style_id: `${oe().set()}_stl`
      }, a = r.data?.value?.l || r.data.l;
      const l = async () => {
        for (const c of a) {
          const s = await await O.lib.get({ name: c.type, run_from: "hydrator", lazy_lib: o.lazy_lib }), d = s.lib, u = Fo(), m = u.on, b = await (await d.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (g) => e.f.name({ id: c.id, name: g }),
              get_lib: async (g) => await await O.lib.get({ name: g.name, run_from: g.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (g) => await (await ir()).set(g),
              path: (g) => O.path.set({ src: s.src, type: c.type, name: g }),
              //set..
              uuid: () => oe().set(),
              wait_until: ee,
              //set..
              call: R0,
              listen: m,
              //set..
              new_emitter: () => Fo()
            }
          })).set(
            {
              data: {
                curr: c
              }
            }
            /*_$cb*/
          );
          $0("msg", async (g) => {
            try {
              if (Object.keys(g.where || {}).length == 0) {
                await u.emit("msg", g);
                return;
              }
            } catch {
            }
            try {
              if (c?.[g.where?.key || ""] == g.where?.value) {
                await u.emit("msg", g);
                return;
              }
            } catch {
            }
          }), n.style += b.style;
        }
      };
      await ee(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await l();
      try {
        ((c) => {
          const s = document.getElementById(`${i.style_id}`);
          s && s.remove();
          const d = document.createElement("style");
          d.id = `${i.style_id}`, d.innerHTML = `${n.style}`, c.appendChild(d);
        })(document.head);
      } catch (c) {
        console.log(`${c}, Failed to set style..`);
      }
      return t.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: t.result()
      };
    }
  };
};
function dr(o, e) {
  return function() {
    return o.apply(e, arguments);
  };
}
const { toString: E0 } = Object.prototype, { getPrototypeOf: le } = Object, { iterator: Uo, toStringTag: ur } = Symbol, Mo = /* @__PURE__ */ ((o) => (e) => {
  const r = E0.call(e);
  return o[r] || (o[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Y = (o) => (o = o.toLowerCase(), (e) => Mo(e) === o), Ho = (o) => (e) => typeof e === o, { isArray: bo } = Array, ho = Ho("undefined");
function Ro(o) {
  return o !== null && !ho(o) && o.constructor !== null && !ho(o.constructor) && D(o.constructor.isBuffer) && o.constructor.isBuffer(o);
}
const fr = Y("ArrayBuffer");
function T0(o) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(o) : e = o && o.buffer && fr(o.buffer), e;
}
const z0 = Ho("string"), D = Ho("function"), gr = Ho("number"), So = (o) => o !== null && typeof o == "object", A0 = (o) => o === !0 || o === !1, Lo = (o) => {
  if (Mo(o) !== "object")
    return !1;
  const e = le(o);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(ur in o) && !(Uo in o);
}, N0 = (o) => {
  if (!So(o) || Ro(o))
    return !1;
  try {
    return Object.keys(o).length === 0 && Object.getPrototypeOf(o) === Object.prototype;
  } catch {
    return !1;
  }
}, P0 = Y("Date"), L0 = Y("File"), D0 = Y("Blob"), j0 = Y("FileList"), I0 = (o) => So(o) && D(o.pipe), F0 = (o) => {
  let e;
  return o && (typeof FormData == "function" && o instanceof FormData || D(o.append) && ((e = Mo(o)) === "formdata" || // detect form-data instance
  e === "object" && D(o.toString) && o.toString() === "[object FormData]"));
}, W0 = Y("URLSearchParams"), [U0, M0, H0, q0] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Y), V0 = (o) => o.trim ? o.trim() : o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _o(o, e, { allOwnKeys: r = !1 } = {}) {
  if (o === null || typeof o > "u")
    return;
  let t, n;
  if (typeof o != "object" && (o = [o]), bo(o))
    for (t = 0, n = o.length; t < n; t++)
      e.call(null, o[t], t, o);
  else {
    if (Ro(o))
      return;
    const i = r ? Object.getOwnPropertyNames(o) : Object.keys(o), a = i.length;
    let l;
    for (t = 0; t < a; t++)
      l = i[t], e.call(null, o[l], l, o);
  }
}
function mr(o, e) {
  if (Ro(o))
    return null;
  e = e.toLowerCase();
  const r = Object.keys(o);
  let t = r.length, n;
  for (; t-- > 0; )
    if (n = r[t], e === n.toLowerCase())
      return n;
  return null;
}
const no = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, pr = (o) => !ho(o) && o !== no;
function re() {
  const { caseless: o, skipUndefined: e } = pr(this) && this || {}, r = {}, t = (n, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const a = o && mr(r, i) || i;
    Lo(r[a]) && Lo(n) ? r[a] = re(r[a], n) : Lo(n) ? r[a] = re({}, n) : bo(n) ? r[a] = n.slice() : (!e || !ho(n)) && (r[a] = n);
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && _o(arguments[n], t);
  return r;
}
const J0 = (o, e, r, { allOwnKeys: t } = {}) => (_o(
  e,
  (n, i) => {
    r && D(n) ? Object.defineProperty(o, i, {
      value: dr(n, r),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(o, i, {
      value: n,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: t }
), o), X0 = (o) => (o.charCodeAt(0) === 65279 && (o = o.slice(1)), o), Y0 = (o, e, r, t) => {
  o.prototype = Object.create(
    e.prototype,
    t
  ), Object.defineProperty(o.prototype, "constructor", {
    value: o,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(o, "super", {
    value: e.prototype
  }), r && Object.assign(o.prototype, r);
}, K0 = (o, e, r, t) => {
  let n, i, a;
  const l = {};
  if (e = e || {}, o == null) return e;
  do {
    for (n = Object.getOwnPropertyNames(o), i = n.length; i-- > 0; )
      a = n[i], (!t || t(a, o, e)) && !l[a] && (e[a] = o[a], l[a] = !0);
    o = r !== !1 && le(o);
  } while (o && (!r || r(o, e)) && o !== Object.prototype);
  return e;
}, G0 = (o, e, r) => {
  o = String(o), (r === void 0 || r > o.length) && (r = o.length), r -= e.length;
  const t = o.indexOf(e, r);
  return t !== -1 && t === r;
}, Z0 = (o) => {
  if (!o) return null;
  if (bo(o)) return o;
  let e = o.length;
  if (!gr(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = o[e];
  return r;
}, Q0 = /* @__PURE__ */ ((o) => (e) => o && e instanceof o)(typeof Uint8Array < "u" && le(Uint8Array)), og = (o, e) => {
  const t = (o && o[Uo]).call(o);
  let n;
  for (; (n = t.next()) && !n.done; ) {
    const i = n.value;
    e.call(o, i[0], i[1]);
  }
}, eg = (o, e) => {
  let r;
  const t = [];
  for (; (r = o.exec(e)) !== null; )
    t.push(r);
  return t;
}, rg = Y("HTMLFormElement"), tg = (o) => o.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, t, n) {
  return t.toUpperCase() + n;
}), Te = (({ hasOwnProperty: o }) => (e, r) => o.call(e, r))(Object.prototype), ng = Y("RegExp"), hr = (o, e) => {
  const r = Object.getOwnPropertyDescriptors(o), t = {};
  _o(r, (n, i) => {
    let a;
    (a = e(n, i, o)) !== !1 && (t[i] = a || n);
  }), Object.defineProperties(o, t);
}, ag = (o) => {
  hr(o, (e, r) => {
    if (D(o) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const t = o[r];
    if (D(t)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, ig = (o, e) => {
  const r = {}, t = (n) => {
    n.forEach((i) => {
      r[i] = !0;
    });
  };
  return bo(o) ? t(o) : t(String(o).split(e)), r;
}, lg = () => {
}, sg = (o, e) => o != null && Number.isFinite(o = +o) ? o : e;
function cg(o) {
  return !!(o && D(o.append) && o[ur] === "FormData" && o[Uo]);
}
const dg = (o) => {
  const e = new Array(10), r = (t, n) => {
    if (So(t)) {
      if (e.indexOf(t) >= 0)
        return;
      if (Ro(t))
        return t;
      if (!("toJSON" in t)) {
        e[n] = t;
        const i = bo(t) ? [] : {};
        return _o(t, (a, l) => {
          const c = r(a, n + 1);
          !ho(c) && (i[l] = c);
        }), e[n] = void 0, i;
      }
    }
    return t;
  };
  return r(o, 0);
}, ug = Y("AsyncFunction"), fg = (o) => o && (So(o) || D(o)) && D(o.then) && D(o.catch), br = ((o, e) => o ? setImmediate : e ? ((r, t) => (no.addEventListener(
  "message",
  ({ source: n, data: i }) => {
    n === no && i === r && t.length && t.shift()();
  },
  !1
), (n) => {
  t.push(n), no.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(typeof setImmediate == "function", D(no.postMessage)), gg = typeof queueMicrotask < "u" ? queueMicrotask.bind(no) : typeof process < "u" && process.nextTick || br, mg = (o) => o != null && D(o[Uo]), f = {
  isArray: bo,
  isArrayBuffer: fr,
  isBuffer: Ro,
  isFormData: F0,
  isArrayBufferView: T0,
  isString: z0,
  isNumber: gr,
  isBoolean: A0,
  isObject: So,
  isPlainObject: Lo,
  isEmptyObject: N0,
  isReadableStream: U0,
  isRequest: M0,
  isResponse: H0,
  isHeaders: q0,
  isUndefined: ho,
  isDate: P0,
  isFile: L0,
  isBlob: D0,
  isRegExp: ng,
  isFunction: D,
  isStream: I0,
  isURLSearchParams: W0,
  isTypedArray: Q0,
  isFileList: j0,
  forEach: _o,
  merge: re,
  extend: J0,
  trim: V0,
  stripBOM: X0,
  inherits: Y0,
  toFlatObject: K0,
  kindOf: Mo,
  kindOfTest: Y,
  endsWith: G0,
  toArray: Z0,
  forEachEntry: og,
  matchAll: eg,
  isHTMLForm: rg,
  hasOwnProperty: Te,
  hasOwnProp: Te,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: hr,
  freezeMethods: ag,
  toObjectSet: ig,
  toCamelCase: tg,
  noop: lg,
  toFiniteNumber: sg,
  findKey: mr,
  global: no,
  isContextDefined: pr,
  isSpecCompliantForm: cg,
  toJSONObject: dg,
  isAsyncFn: ug,
  isThenable: fg,
  setImmediate: br,
  asap: gg,
  isIterable: mg
};
let y = class vr extends Error {
  static from(e, r, t, n, i, a) {
    const l = new vr(e.message, r || e.code, t, n, i);
    return l.cause = e, l.name = e.name, a && Object.assign(l, a), l;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(e, r, t, n, i) {
    super(e), this.name = "AxiosError", this.isAxiosError = !0, r && (this.code = r), t && (this.config = t), n && (this.request = n), i && (this.response = i, this.status = i.status);
  }
  toJSON() {
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
      config: f.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
y.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
y.ERR_BAD_OPTION = "ERR_BAD_OPTION";
y.ECONNABORTED = "ECONNABORTED";
y.ETIMEDOUT = "ETIMEDOUT";
y.ERR_NETWORK = "ERR_NETWORK";
y.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
y.ERR_DEPRECATED = "ERR_DEPRECATED";
y.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
y.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
y.ERR_CANCELED = "ERR_CANCELED";
y.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
y.ERR_INVALID_URL = "ERR_INVALID_URL";
const pg = null;
function te(o) {
  return f.isPlainObject(o) || f.isArray(o);
}
function yr(o) {
  return f.endsWith(o, "[]") ? o.slice(0, -2) : o;
}
function ze(o, e, r) {
  return o ? o.concat(e).map(function(n, i) {
    return n = yr(n), !r && i ? "[" + n + "]" : n;
  }).join(r ? "." : "") : e;
}
function hg(o) {
  return f.isArray(o) && !o.some(te);
}
const bg = f.toFlatObject(f, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function qo(o, e, r) {
  if (!f.isObject(o))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = f.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, h) {
    return !f.isUndefined(h[p]);
  });
  const t = r.metaTokens, n = r.visitor || d, i = r.dots, a = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(e);
  if (!f.isFunction(n))
    throw new TypeError("visitor must be a function");
  function s(g) {
    if (g === null) return "";
    if (f.isDate(g))
      return g.toISOString();
    if (f.isBoolean(g))
      return g.toString();
    if (!c && f.isBlob(g))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(g) || f.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function d(g, p, h) {
    let v = g;
    if (g && !h && typeof g == "object") {
      if (f.endsWith(p, "{}"))
        p = t ? p : p.slice(0, -2), g = JSON.stringify(g);
      else if (f.isArray(g) && hg(g) || (f.isFileList(g) || f.endsWith(p, "[]")) && (v = f.toArray(g)))
        return p = yr(p), v.forEach(function(w, C) {
          !(f.isUndefined(w) || w === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? ze([p], C, i) : a === null ? p : p + "[]",
            s(w)
          );
        }), !1;
    }
    return te(g) ? !0 : (e.append(ze(h, p, i), s(g)), !1);
  }
  const u = [], m = Object.assign(bg, {
    defaultVisitor: d,
    convertValue: s,
    isVisitable: te
  });
  function b(g, p) {
    if (!f.isUndefined(g)) {
      if (u.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      u.push(g), f.forEach(g, function(v, k) {
        (!(f.isUndefined(v) || v === null) && n.call(
          e,
          v,
          f.isString(k) ? k.trim() : k,
          p,
          m
        )) === !0 && b(v, p ? p.concat(k) : [k]);
      }), u.pop();
    }
  }
  if (!f.isObject(o))
    throw new TypeError("data must be an object");
  return b(o), e;
}
function Ae(o) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(o).replace(/[!'()~]|%20|%00/g, function(t) {
    return e[t];
  });
}
function se(o, e) {
  this._pairs = [], o && qo(o, this, e);
}
const kr = se.prototype;
kr.append = function(e, r) {
  this._pairs.push([e, r]);
};
kr.toString = function(e) {
  const r = e ? function(t) {
    return e.call(this, t, Ae);
  } : Ae;
  return this._pairs.map(function(n) {
    return r(n[0]) + "=" + r(n[1]);
  }, "").join("&");
};
function vg(o) {
  return encodeURIComponent(o).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function wr(o, e, r) {
  if (!e)
    return o;
  const t = r && r.encode || vg, n = f.isFunction(r) ? {
    serialize: r
  } : r, i = n && n.serialize;
  let a;
  if (i ? a = i(e, n) : a = f.isURLSearchParams(e) ? e.toString() : new se(e, n).toString(t), a) {
    const l = o.indexOf("#");
    l !== -1 && (o = o.slice(0, l)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}
class Ne {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, r, t) {
    return this.handlers.push({
      fulfilled: e,
      rejected: r,
      synchronous: t ? t.synchronous : !1,
      runWhen: t ? t.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
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
  forEach(e) {
    f.forEach(this.handlers, function(t) {
      t !== null && e(t);
    });
  }
}
const ce = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, yg = typeof URLSearchParams < "u" ? URLSearchParams : se, kg = typeof FormData < "u" ? FormData : null, wg = typeof Blob < "u" ? Blob : null, Cg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: yg,
    FormData: kg,
    Blob: wg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, de = typeof window < "u" && typeof document < "u", ne = typeof navigator == "object" && navigator || void 0, xg = de && (!ne || ["ReactNative", "NativeScript", "NS"].indexOf(ne.product) < 0), $g = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Bg = de && window.location.href || "http://localhost", Rg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: de,
  hasStandardBrowserEnv: xg,
  hasStandardBrowserWebWorkerEnv: $g,
  navigator: ne,
  origin: Bg
}, Symbol.toStringTag, { value: "Module" })), A = {
  ...Rg,
  ...Cg
};
function Sg(o, e) {
  return qo(o, new A.classes.URLSearchParams(), {
    visitor: function(r, t, n, i) {
      return A.isNode && f.isBuffer(r) ? (this.append(t, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function _g(o) {
  return f.matchAll(/\w+|\[(\w*)]/g, o).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Og(o) {
  const e = {}, r = Object.keys(o);
  let t;
  const n = r.length;
  let i;
  for (t = 0; t < n; t++)
    i = r[t], e[i] = o[i];
  return e;
}
function Cr(o) {
  function e(r, t, n, i) {
    let a = r[i++];
    if (a === "__proto__") return !0;
    const l = Number.isFinite(+a), c = i >= r.length;
    return a = !a && f.isArray(n) ? n.length : a, c ? (f.hasOwnProp(n, a) ? n[a] = [n[a], t] : n[a] = t, !l) : ((!n[a] || !f.isObject(n[a])) && (n[a] = []), e(r, t, n[a], i) && f.isArray(n[a]) && (n[a] = Og(n[a])), !l);
  }
  if (f.isFormData(o) && f.isFunction(o.entries)) {
    const r = {};
    return f.forEachEntry(o, (t, n) => {
      e(_g(t), n, r, 0);
    }), r;
  }
  return null;
}
function Eg(o, e, r) {
  if (f.isString(o))
    try {
      return (e || JSON.parse)(o), f.trim(o);
    } catch (t) {
      if (t.name !== "SyntaxError")
        throw t;
    }
  return (r || JSON.stringify)(o);
}
const Oo = {
  transitional: ce,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const t = r.getContentType() || "", n = t.indexOf("application/json") > -1, i = f.isObject(e);
    if (i && f.isHTMLForm(e) && (e = new FormData(e)), f.isFormData(e))
      return n ? JSON.stringify(Cr(e)) : e;
    if (f.isArrayBuffer(e) || f.isBuffer(e) || f.isStream(e) || f.isFile(e) || f.isBlob(e) || f.isReadableStream(e))
      return e;
    if (f.isArrayBufferView(e))
      return e.buffer;
    if (f.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (i) {
      if (t.indexOf("application/x-www-form-urlencoded") > -1)
        return Sg(e, this.formSerializer).toString();
      if ((l = f.isFileList(e)) || t.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return qo(
          l ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || n ? (r.setContentType("application/json", !1), Eg(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Oo.transitional, t = r && r.forcedJSONParsing, n = this.responseType === "json";
    if (f.isResponse(e) || f.isReadableStream(e))
      return e;
    if (e && f.isString(e) && (t && !this.responseType || n)) {
      const a = !(r && r.silentJSONParsing) && n;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? y.from(l, y.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return e;
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
    FormData: A.classes.FormData,
    Blob: A.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
f.forEach(["delete", "get", "head", "post", "put", "patch"], (o) => {
  Oo.headers[o] = {};
});
const Tg = f.toObjectSet([
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
]), zg = (o) => {
  const e = {};
  let r, t, n;
  return o && o.split(`
`).forEach(function(a) {
    n = a.indexOf(":"), r = a.substring(0, n).trim().toLowerCase(), t = a.substring(n + 1).trim(), !(!r || e[r] && Tg[r]) && (r === "set-cookie" ? e[r] ? e[r].push(t) : e[r] = [t] : e[r] = e[r] ? e[r] + ", " + t : t);
  }), e;
}, Pe = /* @__PURE__ */ Symbol("internals");
function yo(o) {
  return o && String(o).trim().toLowerCase();
}
function Do(o) {
  return o === !1 || o == null ? o : f.isArray(o) ? o.map(Do) : String(o);
}
function Ag(o) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let t;
  for (; t = r.exec(o); )
    e[t[1]] = t[2];
  return e;
}
const Ng = (o) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(o.trim());
function Yo(o, e, r, t, n) {
  if (f.isFunction(t))
    return t.call(this, e, r);
  if (n && (e = r), !!f.isString(e)) {
    if (f.isString(t))
      return e.indexOf(t) !== -1;
    if (f.isRegExp(t))
      return t.test(e);
  }
}
function Pg(o) {
  return o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, t) => r.toUpperCase() + t);
}
function Lg(o, e) {
  const r = f.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((t) => {
    Object.defineProperty(o, t + r, {
      value: function(n, i, a) {
        return this[t].call(this, e, n, i, a);
      },
      configurable: !0
    });
  });
}
let j = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, t) {
    const n = this;
    function i(l, c, s) {
      const d = yo(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const u = f.findKey(n, d);
      (!u || n[u] === void 0 || s === !0 || s === void 0 && n[u] !== !1) && (n[u || c] = Do(l));
    }
    const a = (l, c) => f.forEach(l, (s, d) => i(s, d, c));
    if (f.isPlainObject(e) || e instanceof this.constructor)
      a(e, r);
    else if (f.isString(e) && (e = e.trim()) && !Ng(e))
      a(zg(e), r);
    else if (f.isObject(e) && f.isIterable(e)) {
      let l = {}, c, s;
      for (const d of e) {
        if (!f.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        l[s = d[0]] = (c = l[s]) ? f.isArray(c) ? [...c, d[1]] : [c, d[1]] : d[1];
      }
      a(l, r);
    } else
      e != null && i(r, e, t);
    return this;
  }
  get(e, r) {
    if (e = yo(e), e) {
      const t = f.findKey(this, e);
      if (t) {
        const n = this[t];
        if (!r)
          return n;
        if (r === !0)
          return Ag(n);
        if (f.isFunction(r))
          return r.call(this, n, t);
        if (f.isRegExp(r))
          return r.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = yo(e), e) {
      const t = f.findKey(this, e);
      return !!(t && this[t] !== void 0 && (!r || Yo(this, this[t], t, r)));
    }
    return !1;
  }
  delete(e, r) {
    const t = this;
    let n = !1;
    function i(a) {
      if (a = yo(a), a) {
        const l = f.findKey(t, a);
        l && (!r || Yo(t, t[l], l, r)) && (delete t[l], n = !0);
      }
    }
    return f.isArray(e) ? e.forEach(i) : i(e), n;
  }
  clear(e) {
    const r = Object.keys(this);
    let t = r.length, n = !1;
    for (; t--; ) {
      const i = r[t];
      (!e || Yo(this, this[i], i, e, !0)) && (delete this[i], n = !0);
    }
    return n;
  }
  normalize(e) {
    const r = this, t = {};
    return f.forEach(this, (n, i) => {
      const a = f.findKey(t, i);
      if (a) {
        r[a] = Do(n), delete r[i];
        return;
      }
      const l = e ? Pg(i) : String(i).trim();
      l !== i && delete r[i], r[l] = Do(n), t[l] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (t, n) => {
      t != null && t !== !1 && (r[n] = e && f.isArray(t) ? t.join(", ") : t);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const t = new this(e);
    return r.forEach((n) => t.set(n)), t;
  }
  static accessor(e) {
    const t = (this[Pe] = this[Pe] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function i(a) {
      const l = yo(a);
      t[l] || (Lg(n, a), t[l] = !0);
    }
    return f.isArray(e) ? e.forEach(i) : i(e), this;
  }
};
j.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(j.prototype, ({ value: o }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => o,
    set(t) {
      this[r] = t;
    }
  };
});
f.freezeMethods(j);
function Ko(o, e) {
  const r = this || Oo, t = e || r, n = j.from(t.headers);
  let i = t.data;
  return f.forEach(o, function(l) {
    i = l.call(r, i, n.normalize(), e ? e.status : void 0);
  }), n.normalize(), i;
}
function xr(o) {
  return !!(o && o.__CANCEL__);
}
let Eo = class extends y {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(e, r, t) {
    super(e ?? "canceled", y.ERR_CANCELED, r, t), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function $r(o, e, r) {
  const t = r.config.validateStatus;
  !r.status || !t || t(r.status) ? o(r) : e(new y(
    "Request failed with status code " + r.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Dg(o) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
  return e && e[1] || "";
}
function jg(o, e) {
  o = o || 10;
  const r = new Array(o), t = new Array(o);
  let n = 0, i = 0, a;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const s = Date.now(), d = t[i];
    a || (a = s), r[n] = c, t[n] = s;
    let u = i, m = 0;
    for (; u !== n; )
      m += r[u++], u = u % o;
    if (n = (n + 1) % o, n === i && (i = (i + 1) % o), s - a < e)
      return;
    const b = d && s - d;
    return b ? Math.round(m * 1e3 / b) : void 0;
  };
}
function Ig(o, e) {
  let r = 0, t = 1e3 / e, n, i;
  const a = (s, d = Date.now()) => {
    r = d, n = null, i && (clearTimeout(i), i = null), o(...s);
  };
  return [(...s) => {
    const d = Date.now(), u = d - r;
    u >= t ? a(s, d) : (n = s, i || (i = setTimeout(() => {
      i = null, a(n);
    }, t - u)));
  }, () => n && a(n)];
}
const Wo = (o, e, r = 3) => {
  let t = 0;
  const n = jg(50, 250);
  return Ig((i) => {
    const a = i.loaded, l = i.lengthComputable ? i.total : void 0, c = a - t, s = n(c), d = a <= l;
    t = a;
    const u = {
      loaded: a,
      total: l,
      progress: l ? a / l : void 0,
      bytes: c,
      rate: s || void 0,
      estimated: s && l && d ? (l - a) / s : void 0,
      event: i,
      lengthComputable: l != null,
      [e ? "download" : "upload"]: !0
    };
    o(u);
  }, r);
}, Le = (o, e) => {
  const r = o != null;
  return [(t) => e[0]({
    lengthComputable: r,
    total: o,
    loaded: t
  }), e[1]];
}, De = (o) => (...e) => f.asap(() => o(...e)), Fg = A.hasStandardBrowserEnv ? /* @__PURE__ */ ((o, e) => (r) => (r = new URL(r, A.origin), o.protocol === r.protocol && o.host === r.host && (e || o.port === r.port)))(
  new URL(A.origin),
  A.navigator && /(msie|trident)/i.test(A.navigator.userAgent)
) : () => !0, Wg = A.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(o, e, r, t, n, i, a) {
      if (typeof document > "u") return;
      const l = [`${o}=${encodeURIComponent(e)}`];
      f.isNumber(r) && l.push(`expires=${new Date(r).toUTCString()}`), f.isString(t) && l.push(`path=${t}`), f.isString(n) && l.push(`domain=${n}`), i === !0 && l.push("secure"), f.isString(a) && l.push(`SameSite=${a}`), document.cookie = l.join("; ");
    },
    read(o) {
      if (typeof document > "u") return null;
      const e = document.cookie.match(new RegExp("(?:^|; )" + o + "=([^;]*)"));
      return e ? decodeURIComponent(e[1]) : null;
    },
    remove(o) {
      this.write(o, "", Date.now() - 864e5, "/");
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
function Ug(o) {
  return typeof o != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}
function Mg(o, e) {
  return e ? o.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : o;
}
function Br(o, e, r) {
  let t = !Ug(e);
  return o && (t || r == !1) ? Mg(o, e) : e;
}
const je = (o) => o instanceof j ? { ...o } : o;
function uo(o, e) {
  e = e || {};
  const r = {};
  function t(s, d, u, m) {
    return f.isPlainObject(s) && f.isPlainObject(d) ? f.merge.call({ caseless: m }, s, d) : f.isPlainObject(d) ? f.merge({}, d) : f.isArray(d) ? d.slice() : d;
  }
  function n(s, d, u, m) {
    if (f.isUndefined(d)) {
      if (!f.isUndefined(s))
        return t(void 0, s, u, m);
    } else return t(s, d, u, m);
  }
  function i(s, d) {
    if (!f.isUndefined(d))
      return t(void 0, d);
  }
  function a(s, d) {
    if (f.isUndefined(d)) {
      if (!f.isUndefined(s))
        return t(void 0, s);
    } else return t(void 0, d);
  }
  function l(s, d, u) {
    if (u in e)
      return t(s, d);
    if (u in o)
      return t(void 0, s);
  }
  const c = {
    url: i,
    method: i,
    data: i,
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
    validateStatus: l,
    headers: (s, d, u) => n(je(s), je(d), u, !0)
  };
  return f.forEach(
    Object.keys({ ...o, ...e }),
    function(d) {
      if (d === "__proto__" || d === "constructor" || d === "prototype")
        return;
      const u = f.hasOwnProp(c, d) ? c[d] : n, m = u(o[d], e[d], d);
      f.isUndefined(m) && u !== l || (r[d] = m);
    }
  ), r;
}
const Rr = (o) => {
  const e = uo({}, o);
  let { data: r, withXSRFToken: t, xsrfHeaderName: n, xsrfCookieName: i, headers: a, auth: l } = e;
  if (e.headers = a = j.from(a), e.url = wr(Br(e.baseURL, e.url, e.allowAbsoluteUrls), o.params, o.paramsSerializer), l && a.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  ), f.isFormData(r)) {
    if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (f.isFunction(r.getHeaders)) {
      const c = r.getHeaders(), s = ["content-type", "content-length"];
      Object.entries(c).forEach(([d, u]) => {
        s.includes(d.toLowerCase()) && a.set(d, u);
      });
    }
  }
  if (A.hasStandardBrowserEnv && (t && f.isFunction(t) && (t = t(e)), t || t !== !1 && Fg(e.url))) {
    const c = n && i && Wg.read(i);
    c && a.set(n, c);
  }
  return e;
}, Hg = typeof XMLHttpRequest < "u", qg = Hg && function(o) {
  return new Promise(function(r, t) {
    const n = Rr(o);
    let i = n.data;
    const a = j.from(n.headers).normalize();
    let { responseType: l, onUploadProgress: c, onDownloadProgress: s } = n, d, u, m, b, g;
    function p() {
      b && b(), g && g(), n.cancelToken && n.cancelToken.unsubscribe(d), n.signal && n.signal.removeEventListener("abort", d);
    }
    let h = new XMLHttpRequest();
    h.open(n.method.toUpperCase(), n.url, !0), h.timeout = n.timeout;
    function v() {
      if (!h)
        return;
      const w = j.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), _ = {
        data: !l || l === "text" || l === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: w,
        config: o,
        request: h
      };
      $r(function(x) {
        r(x), p();
      }, function(x) {
        t(x), p();
      }, _), h = null;
    }
    "onloadend" in h ? h.onloadend = v : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, h.onabort = function() {
      h && (t(new y("Request aborted", y.ECONNABORTED, o, h)), h = null);
    }, h.onerror = function(C) {
      const _ = C && C.message ? C.message : "Network Error", N = new y(_, y.ERR_NETWORK, o, h);
      N.event = C || null, t(N), h = null;
    }, h.ontimeout = function() {
      let C = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const _ = n.transitional || ce;
      n.timeoutErrorMessage && (C = n.timeoutErrorMessage), t(new y(
        C,
        _.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        o,
        h
      )), h = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in h && f.forEach(a.toJSON(), function(C, _) {
      h.setRequestHeader(_, C);
    }), f.isUndefined(n.withCredentials) || (h.withCredentials = !!n.withCredentials), l && l !== "json" && (h.responseType = n.responseType), s && ([m, g] = Wo(s, !0), h.addEventListener("progress", m)), c && h.upload && ([u, b] = Wo(c), h.upload.addEventListener("progress", u), h.upload.addEventListener("loadend", b)), (n.cancelToken || n.signal) && (d = (w) => {
      h && (t(!w || w.type ? new Eo(null, o, h) : w), h.abort(), h = null);
    }, n.cancelToken && n.cancelToken.subscribe(d), n.signal && (n.signal.aborted ? d() : n.signal.addEventListener("abort", d)));
    const k = Dg(n.url);
    if (k && A.protocols.indexOf(k) === -1) {
      t(new y("Unsupported protocol " + k + ":", y.ERR_BAD_REQUEST, o));
      return;
    }
    h.send(i || null);
  });
}, Vg = (o, e) => {
  const { length: r } = o = o ? o.filter(Boolean) : [];
  if (e || r) {
    let t = new AbortController(), n;
    const i = function(s) {
      if (!n) {
        n = !0, l();
        const d = s instanceof Error ? s : this.reason;
        t.abort(d instanceof y ? d : new Eo(d instanceof Error ? d.message : d));
      }
    };
    let a = e && setTimeout(() => {
      a = null, i(new y(`timeout of ${e}ms exceeded`, y.ETIMEDOUT));
    }, e);
    const l = () => {
      o && (a && clearTimeout(a), a = null, o.forEach((s) => {
        s.unsubscribe ? s.unsubscribe(i) : s.removeEventListener("abort", i);
      }), o = null);
    };
    o.forEach((s) => s.addEventListener("abort", i));
    const { signal: c } = t;
    return c.unsubscribe = () => f.asap(l), c;
  }
}, Jg = function* (o, e) {
  let r = o.byteLength;
  if (r < e) {
    yield o;
    return;
  }
  let t = 0, n;
  for (; t < r; )
    n = t + e, yield o.slice(t, n), t = n;
}, Xg = async function* (o, e) {
  for await (const r of Yg(o))
    yield* Jg(r, e);
}, Yg = async function* (o) {
  if (o[Symbol.asyncIterator]) {
    yield* o;
    return;
  }
  const e = o.getReader();
  try {
    for (; ; ) {
      const { done: r, value: t } = await e.read();
      if (r)
        break;
      yield t;
    }
  } finally {
    await e.cancel();
  }
}, Ie = (o, e, r, t) => {
  const n = Xg(o, e);
  let i = 0, a, l = (c) => {
    a || (a = !0, t && t(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: s, value: d } = await n.next();
        if (s) {
          l(), c.close();
          return;
        }
        let u = d.byteLength;
        if (r) {
          let m = i += u;
          r(m);
        }
        c.enqueue(new Uint8Array(d));
      } catch (s) {
        throw l(s), s;
      }
    },
    cancel(c) {
      return l(c), n.return();
    }
  }, {
    highWaterMark: 2
  });
}, Fe = 64 * 1024, { isFunction: Po } = f, Kg = (({ Request: o, Response: e }) => ({
  Request: o,
  Response: e
}))(f.global), {
  ReadableStream: We,
  TextEncoder: Ue
} = f.global, Me = (o, ...e) => {
  try {
    return !!o(...e);
  } catch {
    return !1;
  }
}, Gg = (o) => {
  o = f.merge.call({
    skipUndefined: !0
  }, Kg, o);
  const { fetch: e, Request: r, Response: t } = o, n = e ? Po(e) : typeof fetch == "function", i = Po(r), a = Po(t);
  if (!n)
    return !1;
  const l = n && Po(We), c = n && (typeof Ue == "function" ? /* @__PURE__ */ ((g) => (p) => g.encode(p))(new Ue()) : async (g) => new Uint8Array(await new r(g).arrayBuffer())), s = i && l && Me(() => {
    let g = !1;
    const p = new r(A.origin, {
      body: new We(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }).headers.has("Content-Type");
    return g && !p;
  }), d = a && l && Me(() => f.isReadableStream(new t("").body)), u = {
    stream: d && ((g) => g.body)
  };
  n && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !u[g] && (u[g] = (p, h) => {
      let v = p && p[g];
      if (v)
        return v.call(p);
      throw new y(`Response type '${g}' is not supported`, y.ERR_NOT_SUPPORT, h);
    });
  });
  const m = async (g) => {
    if (g == null)
      return 0;
    if (f.isBlob(g))
      return g.size;
    if (f.isSpecCompliantForm(g))
      return (await new r(A.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if (f.isArrayBufferView(g) || f.isArrayBuffer(g))
      return g.byteLength;
    if (f.isURLSearchParams(g) && (g = g + ""), f.isString(g))
      return (await c(g)).byteLength;
  }, b = async (g, p) => {
    const h = f.toFiniteNumber(g.getContentLength());
    return h ?? m(p);
  };
  return async (g) => {
    let {
      url: p,
      method: h,
      data: v,
      signal: k,
      cancelToken: w,
      timeout: C,
      onDownloadProgress: _,
      onUploadProgress: N,
      responseType: x,
      headers: W,
      withCredentials: I = "same-origin",
      fetchOptions: K
    } = Rr(g), H = e || fetch;
    x = x ? (x + "").toLowerCase() : "text";
    let U = Vg([k, w && w.toAbortSignal()], C), F = null;
    const E = U && U.unsubscribe && (() => {
      U.unsubscribe();
    });
    let G;
    try {
      if (N && s && h !== "get" && h !== "head" && (G = await b(W, v)) !== 0) {
        let S = new r(p, {
          method: "POST",
          body: v,
          duplex: "half"
        }), L;
        if (f.isFormData(v) && (L = S.headers.get("content-type")) && W.setContentType(L), S.body) {
          const [ro, V] = Le(
            G,
            Wo(De(N))
          );
          v = Ie(S.body, Fe, ro, V);
        }
      }
      f.isString(I) || (I = I ? "include" : "omit");
      const $ = i && "credentials" in r.prototype, Z = {
        ...K,
        signal: U,
        method: h.toUpperCase(),
        headers: W.normalize().toJSON(),
        body: v,
        duplex: "half",
        credentials: $ ? I : void 0
      };
      F = i && new r(p, Z);
      let P = await (i ? H(F, K) : H(p, Z));
      const Q = d && (x === "stream" || x === "response");
      if (d && (_ || Q && E)) {
        const S = {};
        ["status", "statusText", "headers"].forEach((vo) => {
          S[vo] = P[vo];
        });
        const L = f.toFiniteNumber(P.headers.get("content-length")), [ro, V] = _ && Le(
          L,
          Wo(De(_), !0)
        ) || [];
        P = new t(
          Ie(P.body, Fe, ro, () => {
            V && V(), E && E();
          }),
          S
        );
      }
      x = x || "text";
      let q = await u[f.findKey(u, x) || "text"](P, g);
      return !Q && E && E(), await new Promise((S, L) => {
        $r(S, L, {
          data: q,
          headers: j.from(P.headers),
          status: P.status,
          statusText: P.statusText,
          config: g,
          request: F
        });
      });
    } catch ($) {
      throw E && E(), $ && $.name === "TypeError" && /Load failed|fetch/i.test($.message) ? Object.assign(
        new y("Network Error", y.ERR_NETWORK, g, F, $ && $.response),
        {
          cause: $.cause || $
        }
      ) : y.from($, $ && $.code, g, F, $ && $.response);
    }
  };
}, Zg = /* @__PURE__ */ new Map(), Sr = (o) => {
  let e = o && o.env || {};
  const { fetch: r, Request: t, Response: n } = e, i = [
    t,
    n,
    r
  ];
  let a = i.length, l = a, c, s, d = Zg;
  for (; l--; )
    c = i[l], s = d.get(c), s === void 0 && d.set(c, s = l ? /* @__PURE__ */ new Map() : Gg(e)), d = s;
  return s;
};
Sr();
const ue = {
  http: pg,
  xhr: qg,
  fetch: {
    get: Sr
  }
};
f.forEach(ue, (o, e) => {
  if (o) {
    try {
      Object.defineProperty(o, "name", { value: e });
    } catch {
    }
    Object.defineProperty(o, "adapterName", { value: e });
  }
});
const He = (o) => `- ${o}`, Qg = (o) => f.isFunction(o) || o === null || o === !1;
function om(o, e) {
  o = f.isArray(o) ? o : [o];
  const { length: r } = o;
  let t, n;
  const i = {};
  for (let a = 0; a < r; a++) {
    t = o[a];
    let l;
    if (n = t, !Qg(t) && (n = ue[(l = String(t)).toLowerCase()], n === void 0))
      throw new y(`Unknown adapter '${l}'`);
    if (n && (f.isFunction(n) || (n = n.get(e))))
      break;
    i[l || "#" + a] = n;
  }
  if (!n) {
    const a = Object.entries(i).map(
      ([c, s]) => `adapter ${c} ` + (s === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = r ? a.length > 1 ? `since :
` + a.map(He).join(`
`) : " " + He(a[0]) : "as no adapter specified";
    throw new y(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return n;
}
const _r = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: om,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: ue
};
function Go(o) {
  if (o.cancelToken && o.cancelToken.throwIfRequested(), o.signal && o.signal.aborted)
    throw new Eo(null, o);
}
function qe(o) {
  return Go(o), o.headers = j.from(o.headers), o.data = Ko.call(
    o,
    o.transformRequest
  ), ["post", "put", "patch"].indexOf(o.method) !== -1 && o.headers.setContentType("application/x-www-form-urlencoded", !1), _r.getAdapter(o.adapter || Oo.adapter, o)(o).then(function(t) {
    return Go(o), t.data = Ko.call(
      o,
      o.transformResponse,
      t
    ), t.headers = j.from(t.headers), t;
  }, function(t) {
    return xr(t) || (Go(o), t && t.response && (t.response.data = Ko.call(
      o,
      o.transformResponse,
      t.response
    ), t.response.headers = j.from(t.response.headers))), Promise.reject(t);
  });
}
const Or = "1.13.5", Vo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((o, e) => {
  Vo[o] = function(t) {
    return typeof t === o || "a" + (e < 1 ? "n " : " ") + o;
  };
});
const Ve = {};
Vo.transitional = function(e, r, t) {
  function n(i, a) {
    return "[Axios v" + Or + "] Transitional option '" + i + "'" + a + (t ? ". " + t : "");
  }
  return (i, a, l) => {
    if (e === !1)
      throw new y(
        n(a, " has been removed" + (r ? " in " + r : "")),
        y.ERR_DEPRECATED
      );
    return r && !Ve[a] && (Ve[a] = !0, console.warn(
      n(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(i, a, l) : !0;
  };
};
Vo.spelling = function(e) {
  return (r, t) => (console.warn(`${t} is likely a misspelling of ${e}`), !0);
};
function em(o, e, r) {
  if (typeof o != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const t = Object.keys(o);
  let n = t.length;
  for (; n-- > 0; ) {
    const i = t[n], a = e[i];
    if (a) {
      const l = o[i], c = l === void 0 || a(l, i, o);
      if (c !== !0)
        throw new y("option " + i + " must be " + c, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new y("Unknown option " + i, y.ERR_BAD_OPTION);
  }
}
const jo = {
  assertOptions: em,
  validators: Vo
}, M = jo.validators;
let co = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new Ne(),
      response: new Ne()
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
  async request(e, r) {
    try {
      return await this._request(e, r);
    } catch (t) {
      if (t instanceof Error) {
        let n = {};
        Error.captureStackTrace ? Error.captureStackTrace(n) : n = new Error();
        const i = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          t.stack ? i && !String(t.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (t.stack += `
` + i) : t.stack = i;
        } catch {
        }
      }
      throw t;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = uo(this.defaults, r);
    const { transitional: t, paramsSerializer: n, headers: i } = r;
    t !== void 0 && jo.assertOptions(t, {
      silentJSONParsing: M.transitional(M.boolean),
      forcedJSONParsing: M.transitional(M.boolean),
      clarifyTimeoutError: M.transitional(M.boolean),
      legacyInterceptorReqResOrdering: M.transitional(M.boolean)
    }, !1), n != null && (f.isFunction(n) ? r.paramsSerializer = {
      serialize: n
    } : jo.assertOptions(n, {
      encode: M.function,
      serialize: M.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), jo.assertOptions(r, {
      baseUrl: M.spelling("baseURL"),
      withXsrfToken: M.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = i && f.merge(
      i.common,
      i[r.method]
    );
    i && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), r.headers = j.concat(a, i);
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function(p) {
      if (typeof p.runWhen == "function" && p.runWhen(r) === !1)
        return;
      c = c && p.synchronous;
      const h = r.transitional || ce;
      h && h.legacyInterceptorReqResOrdering ? l.unshift(p.fulfilled, p.rejected) : l.push(p.fulfilled, p.rejected);
    });
    const s = [];
    this.interceptors.response.forEach(function(p) {
      s.push(p.fulfilled, p.rejected);
    });
    let d, u = 0, m;
    if (!c) {
      const g = [qe.bind(this), void 0];
      for (g.unshift(...l), g.push(...s), m = g.length, d = Promise.resolve(r); u < m; )
        d = d.then(g[u++], g[u++]);
      return d;
    }
    m = l.length;
    let b = r;
    for (; u < m; ) {
      const g = l[u++], p = l[u++];
      try {
        b = g(b);
      } catch (h) {
        p.call(this, h);
        break;
      }
    }
    try {
      d = qe.call(this, b);
    } catch (g) {
      return Promise.reject(g);
    }
    for (u = 0, m = s.length; u < m; )
      d = d.then(s[u++], s[u++]);
    return d;
  }
  getUri(e) {
    e = uo(this.defaults, e);
    const r = Br(e.baseURL, e.url, e.allowAbsoluteUrls);
    return wr(r, e.params, e.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(e) {
  co.prototype[e] = function(r, t) {
    return this.request(uo(t || {}, {
      method: e,
      url: r,
      data: (t || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(e) {
  function r(t) {
    return function(i, a, l) {
      return this.request(uo(l || {}, {
        method: e,
        headers: t ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  co.prototype[e] = r(), co.prototype[e + "Form"] = r(!0);
});
let rm = class Er {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const t = this;
    this.promise.then((n) => {
      if (!t._listeners) return;
      let i = t._listeners.length;
      for (; i-- > 0; )
        t._listeners[i](n);
      t._listeners = null;
    }), this.promise.then = (n) => {
      let i;
      const a = new Promise((l) => {
        t.subscribe(l), i = l;
      }).then(n);
      return a.cancel = function() {
        t.unsubscribe(i);
      }, a;
    }, e(function(i, a, l) {
      t.reason || (t.reason = new Eo(i, a, l), r(t.reason));
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
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), r = (t) => {
      e.abort(t);
    };
    return this.subscribe(r), e.signal.unsubscribe = () => this.unsubscribe(r), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Er(function(n) {
        e = n;
      }),
      cancel: e
    };
  }
};
function tm(o) {
  return function(r) {
    return o.apply(null, r);
  };
}
function nm(o) {
  return f.isObject(o) && o.isAxiosError === !0;
}
const ae = {
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
Object.entries(ae).forEach(([o, e]) => {
  ae[e] = o;
});
function Tr(o) {
  const e = new co(o), r = dr(co.prototype.request, e);
  return f.extend(r, co.prototype, e, { allOwnKeys: !0 }), f.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(n) {
    return Tr(uo(o, n));
  }, r;
}
const R = Tr(Oo);
R.Axios = co;
R.CanceledError = Eo;
R.CancelToken = rm;
R.isCancel = xr;
R.VERSION = Or;
R.toFormData = qo;
R.AxiosError = y;
R.Cancel = R.CanceledError;
R.all = function(e) {
  return Promise.all(e);
};
R.spread = tm;
R.isAxiosError = nm;
R.mergeConfig = uo;
R.AxiosHeaders = j;
R.formToJSON = (o) => Cr(f.isHTMLForm(o) ? new FormData(o) : o);
R.getAdapter = _r.getAdapter;
R.HttpStatusCode = ae;
R.default = R;
const {
  Axios: pm,
  AxiosError: hm,
  CanceledError: bm,
  isCancel: vm,
  CancelToken: ym,
  VERSION: km,
  all: wm,
  Cancel: Cm,
  isAxiosError: xm,
  spread: $m,
  toFormData: Bm,
  AxiosHeaders: Rm,
  HttpStatusCode: Sm,
  formToJSON: _m,
  getAdapter: Om,
  mergeConfig: Em
} = R;
function am() {
  const o = ao(!1), e = ao(null);
  return { post: async (t, n, i = null) => {
    o.value = !0, e.value = null;
    try {
      const { data: a } = await R.post(t, n, {
        headers: i ? { Authorization: `Bearer ${i}` } : {}
      });
      return a;
    } catch (a) {
      return e.value = a.response?.data?.message || "Error", null;
    } finally {
      o.value = !1;
    }
  }, loading: o, error: e };
}
const im = { key: 0 }, lm = ["innerHTML"], sm = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=product_create", cm = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", dm = /* @__PURE__ */ Qr({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(o) {
    const e = {}, r = {}, t = {
      // collection: "products",
      collection: "",
      l: [
        {
          title: "",
          url: "",
          size: [],
          brand: "",
          color: [],
          field: [],
          seller: {},
          variant: [],
          category: [],
          size_info: {
            chart: { url: null },
            representation: { url: "" }
          },
          hashtags: [],
          lang: "en",
          //set..
          country: ""
        }
      ]
    }, { post: n } = am(), i = async () => {
      const u = await n(sm, t, cm);
      if (!u?.success) return s(u?.message || "Product creation failed", "error");
      s("Product created successfully 🎉", "success"), console.log("product created", u);
    }, a = (u) => {
      const m = u._$p?.data?.curr;
      if (!m) return;
      const b = () => crypto.randomUUID();
      if (u.type === "inputText:value" && (e[m.id] = u.custom.value), u.type === "datatable:cell-edit" || u.type === "datatable:add-row" || u.type === "datatable:delete-row") {
        const g = m.data.rows || [];
        g.forEach((p) => p._uid ||= b()), r[m.id] = g;
      }
    }, l = () => {
      const u = t.l[0];
      u.collection = e["input-collection"] || "products", u.title = e["input-title"] || "", u.url = e["input-image-url"] || "", u.brand = e["input-brand-name"] || "", u.lang = "en", u.country = e["input-country"] || "", u.size = (r["form_datatable-size"] || []).map((p) => ({
        id: p._uid,
        name: p.sizename,
        measurements: [{ name: p.name, unit: p.unit, value: p.value }]
      })), u.color = (r["form_datatable-color"] || []).map((p) => ({
        id: p._uid,
        name: p.name,
        image: [{ url: p.imageurl }],
        video: []
      }));
      const m = r["form_datatable-field"] || [];
      u.field = ["detail", "info"].map((p) => ({
        typ: p,
        l: m.filter((h) => h.typ === p).map((h) => ({ name: h.name, value: h.value }))
      }));
      const b = r["form_datatable-seller"]?.[0];
      b && (u.seller = {
        name: b.name,
        packer_info: b.packer_info,
        importer_info: b.importer_info,
        country_of_origin: [b.country_of_origin],
        manufacturer_info: b.manufacturer_info
      }), u.variant = (r["form_datatable-variant"] || []).map((p) => ({
        id: p._uid,
        price: String(p.price),
        price_mrp: String(p.price_mrp),
        currency: p.currency,
        size_id: p.size_id,
        color_id: p.color_id
      })), u.category = r["form_datatable-category"] || [];
      const g = r["form_datatable-size-info"]?.[0];
      g && (u.size_info.chart.url = g.chart_url || null, u.size_info.representation.url = g.representation_url || ""), u.hashtags = (r["form_datatable-hashtags"] || []).map((p) => p.hashtag), console.log("product", u);
    }, c = () => {
      const u = t.l[0];
      return u.title ? u.url ? u.brand ? u.size.length ? u.color.length ? u.variant.length ? u.category.length ? u.hashtags.length ? u.variant.every((m) => m.size_id && m.color_id) ? !0 : (s("Variant size/color mismatch", "error"), !1) : (s("Hashtag required", "warn"), !1) : (s("Category is required", "warn"), !1) : (s("At least one variant required", "warn"), !1) : (s("At least one color required", "warn"), !1) : (s("At least one size required", "warn"), !1) : (s("Brand is required", "warn"), !1) : (s("Image URL is required", "warn"), !1) : (s("Title is required", "warn"), !1);
    }, s = (u, m = "info") => {
      B0("msg", {
        type: "show",
        _p: {},
        _$p: {},
        custom: {
          msg: u,
          options: {
            type: m,
            position: "top-right",
            autoClose: 5e3,
            theme: "light"
          }
        }
      });
    }, d = ao(null);
    return Je(() => {
      (async () => {
        let u = "", m = {
          l: [
            {
              id: "c78c-form_holder",
              type: "form_holder",
              slug: "form_holder",
              data: {
                title: "Admin product upsert",
                mode: "manual",
                class: {
                  b: "bg-white shadow-lg rounded-lg p-8 w-full max-w-5xl"
                },
                ce_file: {
                  data: {
                    l: [
                      // Product collection [form_section] && [form_inputtext]
                      {
                        id: "section-collection",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "Product collection",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "input-collection",
                        type: "form_inputtext",
                        slug: "form_inputtext",
                        data: {
                          value: "products",
                          placeholder: "Enter collection",
                          style: {},
                          class: "",
                          variant: "outlined",
                          form: {
                            section_id: "section-collection"
                          }
                        }
                      },
                      // Product title [form_section] && [form_inputtext]
                      {
                        id: "section-title",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "Product title",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "section-country",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "Product country",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "input-title",
                        type: "form_inputtext",
                        slug: "form_inputtext",
                        data: {
                          value: "",
                          placeholder: "Enter title",
                          style: {},
                          class: "",
                          variant: "outlined",
                          form: {
                            section_id: "section-title"
                          }
                        }
                      },
                      {
                        id: "input-country",
                        type: "form_inputtext",
                        slug: "form_inputtext",
                        data: {
                          value: "",
                          placeholder: "Enter country",
                          style: {},
                          class: "",
                          variant: "outlined",
                          form: {
                            section_id: "section-country"
                          }
                        }
                      },
                      // Product image url [form_section] && [form_inputtext]
                      {
                        id: "section-url",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "Product image url",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "input-image-url",
                        type: "form_inputtext",
                        slug: "form_inputtext",
                        data: {
                          value: "",
                          placeholder: "Enter image url",
                          style: {},
                          class: "",
                          variant: "outlined",
                          form: {
                            section_id: "section-url"
                          }
                        }
                      },
                      // Product sizes [form_section] && [form_datatable]
                      {
                        id: "section-size",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "Product sizes",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "form_datatable-size",
                        type: "form_datatable",
                        slug: "form_datatable",
                        data: {
                          form: { section_id: "section-size" },
                          columns: [
                            // {"field": "sizeid", "header": "Size id", "style": ""},
                            { field: "sizename", header: "Size name", style: "" },
                            { field: "name", header: "Name", style: "" },
                            { field: "unit", header: "Unit", style: "" },
                            { field: "value", header: "Value", style: "" }
                          ],
                          rows: [
                            // {"sizeid": "XL", "sizename": "Nike Shirt", "name": "width", "unit": "inch", "value": 10},
                            // {"sizeid": "SM", "sizename": "Adidas Tee", "name": "height", "unit": "cm", "value": 5}
                          ],
                          pt: {
                            table: { style: "min-width: 50rem; table-layout:fixed" },
                            column: {}
                          },
                          addrow: !0,
                          deleterow: !0
                        }
                      },
                      // Product brand [form_section] && [form_inputtext]
                      {
                        id: "section-brand",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "Brand",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "input-brand-name",
                        type: "form_inputtext",
                        slug: "form_inputtext",
                        data: {
                          value: "",
                          placeholder: "Enter product brand",
                          style: {},
                          class: "",
                          variant: "outlined",
                          form: { section_id: "section-brand" }
                        }
                      },
                      // Product colors [form_section] && [form_datatable]
                      {
                        id: "section-color",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "Product colors",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "form_datatable-color",
                        type: "form_datatable",
                        slug: "form_datatable",
                        data: {
                          form: { section_id: "section-color" },
                          columns: [
                            // {"field": "id", "header": "Id", "style": "width: 10%;"},
                            { field: "name", header: "Name", style: "width: 20%;" },
                            { field: "imageurl", header: "Image url", style: "width: 70%;" }
                          ],
                          rows: [
                            // {"id": "1", "name": "Red", "imageurl": "https://via.placeholder.com/150"},
                            // {"id": "2", "name": "Blue", "imageurl": "https://via.placeholder.com/150"}
                          ],
                          pt: {
                            table: { style: "min-width: 50rem; table-layout:fixed" },
                            column: {}
                          },
                          addrow: !0,
                          deleterow: !0
                        }
                      },
                      // Field: Product Details & Info
                      {
                        id: "section-field",
                        type: "form_section",
                        slug: "form_section",
                        data: { label: "Field", l: [], theme: "light" }
                      },
                      {
                        id: "form_datatable-field",
                        type: "form_datatable",
                        slug: "form_datatable",
                        data: {
                          form: { section_id: "section-field" },
                          columns: [
                            { field: "name", header: "Name", style: "" },
                            { field: "value", header: "Value", style: "" },
                            { field: "typ", header: "Type", style: "" }
                          ],
                          rows: [
                            // { "name": "Product Details", "value": "<ul><li>Shirts for men</li><li>Ripple pattern</li><li>Drop Length length</li><li>U-Neck</li><li>Flannel fabric</li><li>Tailored Fit</li></ul>", "typ": "detail" },
                            // { "name": "MATERIAL & CARE", "value": "Flannel<br>Gentle Cycle", "typ": "detail" },
                            // { "name": "SIZE & FIT", "value": "Tailored Fit<br>The model (height 5'8\") is wearing a size 28", "typ": "detail" },
                            // { "name": "Available Colors", "value": "Slate, Yellow", "typ": "detail" },
                            // { "name": "Available Sizes", "value": "28, XS", "typ": "detail" },
                            // { "name": "Fabrics", "value": "Flannel", "typ": "info" },
                            // { "name": "Fit", "value": "Tailored Fit", "typ": "info" },
                            // { "name": "Length", "value": "Drop Length", "typ": "info" },
                            // { "name": "Neck", "value": "U-Neck", "typ": "info" },
                            // { "name": "Occasions", "value": "Date Night", "typ": "info" },
                            // { "name": "Patterns", "value": "Ripple", "typ": "info" },
                            // { "name": "Wash Care", "value": "Gentle Cycle", "typ": "info" }
                          ],
                          pt: { table: { style: "min-width: 50rem; table-layout:fixed" }, column: {} },
                          addrow: !0,
                          deleterow: !0
                        }
                      },
                      // Product seller [form_section] && [form_datatable]
                      {
                        id: "section-seller",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "Seller",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "form_datatable-seller",
                        type: "form_datatable",
                        slug: "form_datatable",
                        data: {
                          form: { section_id: "section-seller" },
                          columns: [
                            { field: "name", header: "Name", style: "" },
                            { field: "packer_info", header: "Packer info", style: "" },
                            { field: "importer_info", header: "Importer info", style: "" },
                            { field: "country_of_origin", header: "Country of origin", style: "" },
                            { field: "manufacturer_info", header: "Manufacturer info", style: "" }
                          ],
                          rows: [
                            { name: "Enter name", packer_info: "Enter packer info", importer_info: "Enter importer info", country_of_origin: "Enter country of origin", manufacturer_info: "Enter manufacturer info" }
                          ],
                          pt: { table: { style: "min-width: 50rem; table-layout:fixed" }, column: {} },
                          addrow: !1,
                          deleterow: !1
                        }
                      },
                      // Product Variant [form_section] && [form_datatable]
                      {
                        id: "section-variant",
                        type: "form_section",
                        slug: "form_section",
                        data: { label: "Product Variants", l: [], theme: "light" }
                      },
                      {
                        id: "form_datatable-variant",
                        type: "form_datatable",
                        slug: "form_datatable",
                        data: {
                          form: { section_id: "section-variant" },
                          columns: [
                            // { "field": "id", "header": "Id", "style": "width: 30%;" },
                            { field: "price", header: "Price", style: "" },
                            { field: "size_id", header: "Size", style: "" },
                            { field: "color_id", header: "Color", style: "" },
                            { field: "currency", header: "Currency", style: "" },
                            { field: "price_mrp", header: "Price Mrp", style: "" }
                          ],
                          rows: [
                            //   { "id": "34e1462e-bb56-45ad-a65c-a2380813faf2", "price": "347", "size_id": "28", "color_id": "Slate", "currency": "INR", "price_mrp": "903" },
                            //   { "id": "da21b6db-7a06-4e86-a719-f6ef3b785846", "price": "347", "size_id": "28", "color_id": "Yellow", "currency": "INR", "price_mrp": "903" },
                            //   { "id": "2e0f3c99-f6a8-49f1-8f93-1a8e779ba813", "price": "347", "size_id": "XS", "color_id": "Slate", "currency": "INR", "price_mrp": "903" },
                            //   { "id": "7ffe2333-956c-428c-8693-8e4022d3f3c6", "price": "347", "size_id": "XS", "color_id": "Yellow", "currency": "INR", "price_mrp": "903" }
                          ],
                          pt: { table: { style: "min-width: 50rem; table-layout:fixed" }, column: {} },
                          addrow: !0,
                          deleterow: !0
                        }
                      },
                      // Product Category [form_section] && [form_datatable]
                      {
                        id: "section-category",
                        type: "form_section",
                        slug: "form_section",
                        data: { label: "Product Categories", l: [], theme: "light" }
                      },
                      {
                        id: "form_datatable-category",
                        type: "form_datatable",
                        slug: "form_datatable",
                        data: {
                          form: { section_id: "section-category" },
                          columns: [
                            { field: "name", header: "Category Name", style: "" }
                          ],
                          rows: [
                            // { "name": "Men" },
                            // { "name": "Apparel" },
                            // { "name": "Topwear" },
                            // { "name": "Shirts" }
                          ],
                          pt: { table: { style: "min-width: 50rem; table-layout:fixed" }, column: {} },
                          addrow: !0,
                          deleterow: !0
                        }
                      },
                      // Product Size Info [form_section] && [form_datatable]
                      {
                        id: "section-size-info",
                        type: "form_section",
                        slug: "form_section",
                        data: { label: "Size Information", l: [], theme: "light" }
                      },
                      {
                        id: "form_datatable-size-info",
                        type: "form_datatable",
                        slug: "form_datatable",
                        data: {
                          form: { section_id: "section-size-info" },
                          columns: [
                            { field: "chart_url", header: "Chart URL", style: "" },
                            { field: "representation_url", header: "Representation URL", style: "" }
                          ],
                          rows: [
                            { chart_url: "Enter Chart URL", representation_url: "Enter Representation URL" }
                          ],
                          pt: { table: { style: "min-width: 50rem; table-layout:fixed" }, column: {} },
                          addrow: !1,
                          deleterow: !1
                        }
                      },
                      // Hashtags [form_section] && [form_datatable]
                      {
                        id: "section-hashtags",
                        type: "form_section",
                        slug: "form_section",
                        data: { label: "Hashtags", l: [], theme: "light" }
                      },
                      {
                        id: "form_datatable-hashtags",
                        type: "form_datatable",
                        slug: "form_datatable",
                        data: {
                          form: { section_id: "section-hashtags" },
                          columns: [
                            { field: "hashtag", header: "Hashtag", style: "" }
                          ],
                          rows: [
                            // { "hashtag": "#ootd" },
                            // { "hashtag": "#fashion" },
                            // { "hashtag": "#menswear" },
                            // { "hashtag": "#menstyle" },
                            // { "hashtag": "#shirts" },
                            // { "hashtag": "#trendingnow" },
                            // { "hashtag": "#onlineshopping" }
                          ],
                          pt: { table: { style: "min-width: 50rem; table-layout:fixed" }, column: {} },
                          addrow: !0,
                          deleterow: !0
                        }
                      },
                      // Language [form_section] && [form_datatable]
                      {
                        id: "section-lang",
                        type: "form_section",
                        slug: "form_section",
                        data: { label: "Lang: 'en'", l: [], theme: "light" }
                      },
                      // Create Product [form_section] && [form_button]
                      {
                        id: "section-create-product",
                        type: "form_section",
                        slug: "form_section",
                        data: { label: "", l: [], theme: "light" }
                      },
                      {
                        id: "button-create-product",
                        type: "form_button",
                        slug: "form_button",
                        data: {
                          label: "Create Product",
                          size: "normal",
                          variant: "filled",
                          form: { section_id: "section-create-product" }
                        }
                      }
                    ]
                  }
                }
              }
            },
            // Toast
            {
              id: "form_toast",
              type: "form_toast",
              slug: "form_toast",
              data: {
                env: "dev"
              }
            }
          ]
        };
        const b = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, g = await _0(b), p = await O0(b);
        (async () => S0("child:msg", async (v) => {
          if (console.log("[ce_listen]", v), a(v), l(), v.type === "click" && v._$p?.data?.curr?.id === "button-create-product") {
            if (!c()) return s("Please fill all required fields", "warn");
            i(), console.log("form completed");
          }
        }))(), await (async () => {
          const v = await g.set({
            data: m
          });
          d.value = v.r || "", u = v.style;
          const k = document.createElement("style");
          document.head.appendChild(k), k.innerHTML = u, setTimeout(async () => {
            const w = await p.set({
              data: m
            });
            console.log(w);
          }, 200);
        })();
      })();
    }), (u, m) => d.value ? (ot(), et("div", im, [
      rt("div", { innerHTML: d.value }, null, 8, lm)
    ])) : tt("", !0);
  }
}), Tm = async (o) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const t = nt(dm, {
      _p: o,
      _$p: e
    });
    t.use(Zt, {
      theme: {
        preset: C0
      }
    });
    const n = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          o.f.call("msg", {
            type: "change",
            _p: o,
            _$p: e,
            custom: {}
          });
        }
      }
    }, i = document.getElementById(o.f.name("vue-root"));
    return t.mount(i), n;
  }
});
export {
  Tm as hydrator,
  Tm as index
};
