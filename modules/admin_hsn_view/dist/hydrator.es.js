import { r as Nr, g as zo, o as qo, n as Pr, w as io, a as D, b as Ko, d as jr, c as ao, e as no, f as R, t as Oo, h as To, i as Dr, j as Ir } from "./runtime-dom.esm-bundler-D78uWBUe.js";
var Lr = Object.defineProperty, No = Object.getOwnPropertySymbols, Er = Object.prototype.hasOwnProperty, Wr = Object.prototype.propertyIsEnumerable, Po = (o, r, e) => r in o ? Lr(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, Ar = (o, r) => {
  for (var e in r || (r = {})) Er.call(r, e) && Po(o, e, r[e]);
  if (No) for (var e of No(r)) Wr.call(r, e) && Po(o, e, r[e]);
  return o;
};
function So(o) {
  return o == null || o === "" || Array.isArray(o) && o.length === 0 || !(o instanceof Date) && typeof o == "object" && Object.keys(o).length === 0;
}
function Mr(o) {
  return typeof o == "function" && "call" in o && "apply" in o;
}
function v(o) {
  return !So(o);
}
function X(o, r = !0) {
  return o instanceof Object && o.constructor === Object && (r || Object.keys(o).length !== 0);
}
function Zo(o = {}, r = {}) {
  let e = Ar({}, o);
  return Object.keys(r).forEach((t) => {
    let a = t;
    X(r[a]) && a in o && X(o[a]) ? e[a] = Zo(o[a], r[a]) : e[a] = r[a];
  }), e;
}
function Fr(...o) {
  return o.reduce((r, e, t) => t === 0 ? e : Zo(r, e), {});
}
function I(o, ...r) {
  return Mr(o) ? o(...r) : o;
}
function to(o, r = !0) {
  return typeof o == "string" && (r || o !== "");
}
function Hr(o) {
  return v(o) && !isNaN(o);
}
function G(o, r) {
  if (r) {
    let e = r.test(o);
    return r.lastIndex = 0, e;
  }
  return !1;
}
function Yr(...o) {
  return Fr(...o);
}
function co(o) {
  return o && o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function Qo(o) {
  return to(o) ? o.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : o;
}
function or() {
  let o = /* @__PURE__ */ new Map();
  return { on(r, e) {
    let t = o.get(r);
    return t ? t.push(e) : t = [e], o.set(r, t), this;
  }, off(r, e) {
    let t = o.get(r);
    return t && t.splice(t.indexOf(e) >>> 0, 1), this;
  }, emit(r, e) {
    let t = o.get(r);
    t && t.forEach((a) => {
      a(e);
    });
  }, clear() {
    o.clear();
  } };
}
function Vr(o) {
  if (o) {
    let r = o.parentNode;
    return r && r instanceof ShadowRoot && r.host && (r = r.host), r;
  }
  return null;
}
function Xr(o) {
  return !!(o !== null && typeof o < "u" && o.nodeName && Vr(o));
}
function rr(o) {
  return typeof Element < "u" ? o instanceof Element : o !== null && typeof o == "object" && o.nodeType === 1 && typeof o.nodeName == "string";
}
function xo(o, r = {}) {
  if (rr(o)) {
    let e = (t, a) => {
      var s, n;
      let c = (s = o?.$attrs) != null && s[t] ? [(n = o?.$attrs) == null ? void 0 : n[t]] : [];
      return [a].flat().reduce((i, d) => {
        if (d != null) {
          let l = typeof d;
          if (l === "string" || l === "number") i.push(d);
          else if (l === "object") {
            let u = Array.isArray(d) ? e(t, d) : Object.entries(d).map(([f, g]) => t === "style" && (g || g === 0) ? `${f.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${g}` : g ? f : void 0);
            i = u.length ? i.concat(u.filter((f) => !!f)) : i;
          }
        }
        return i;
      }, c);
    };
    Object.entries(r).forEach(([t, a]) => {
      if (a != null) {
        let s = t.match(/^on(.+)/);
        s ? o.addEventListener(s[1].toLowerCase(), a) : t === "p-bind" || t === "pBind" ? xo(o, a) : (a = t === "class" ? [...new Set(e("class", a))].join(" ").trim() : t === "style" ? e("style", a).join(";").trim() : a, (o.$attrs = o.$attrs || {}) && (o.$attrs[t] = a), o.setAttribute(t, a));
      }
    });
  }
}
function Gr() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ur(o, r = "", e) {
  rr(o) && e !== null && e !== void 0 && o.setAttribute(r, e);
}
var Jr = Object.defineProperty, qr = Object.defineProperties, Kr = Object.getOwnPropertyDescriptors, vo = Object.getOwnPropertySymbols, er = Object.prototype.hasOwnProperty, tr = Object.prototype.propertyIsEnumerable, jo = (o, r, e) => r in o ? Jr(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, $ = (o, r) => {
  for (var e in r || (r = {})) er.call(r, e) && jo(o, e, r[e]);
  if (vo) for (var e of vo(r)) tr.call(r, e) && jo(o, e, r[e]);
  return o;
}, yo = (o, r) => qr(o, Kr(r)), _ = (o, r) => {
  var e = {};
  for (var t in o) er.call(o, t) && r.indexOf(t) < 0 && (e[t] = o[t]);
  if (o != null && vo) for (var t of vo(o)) r.indexOf(t) < 0 && tr.call(o, t) && (e[t] = o[t]);
  return e;
}, Zr = or(), z = Zr, lo = /{([^}]*)}/g, ar = /(\d+\s+[\+\-\*\/]\s+\d+)/g, nr = /var\([^)]+\)/g;
function Do(o) {
  return to(o) ? o.replace(/[A-Z]/g, (r, e) => e === 0 ? r : "." + r.toLowerCase()).toLowerCase() : o;
}
function Qr(o) {
  return X(o) && o.hasOwnProperty("$value") && o.hasOwnProperty("$type") ? o.$value : o;
}
function oe(o) {
  return o.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Co(o = "", r = "") {
  return oe(`${to(o, !1) && to(r, !1) ? `${o}-` : o}${r}`);
}
function ir(o = "", r = "") {
  return `--${Co(o, r)}`;
}
function re(o = "") {
  let r = (o.match(/{/g) || []).length, e = (o.match(/}/g) || []).length;
  return (r + e) % 2 !== 0;
}
function dr(o, r = "", e = "", t = [], a) {
  if (to(o)) {
    let s = o.trim();
    if (re(s)) return;
    if (G(s, lo)) {
      let n = s.replaceAll(lo, (c) => {
        let i = c.replace(/{|}/g, "").split(".").filter((d) => !t.some((l) => G(d, l)));
        return `var(${ir(e, Qo(i.join("-")))}${v(a) ? `, ${a}` : ""})`;
      });
      return G(n.replace(nr, "0"), ar) ? `calc(${n})` : n;
    }
    return s;
  } else if (Hr(o)) return o;
}
function ee(o, r, e) {
  to(r, !1) && o.push(`${r}:${e};`);
}
function ro(o, r) {
  return o ? `${o}{${r}}` : "";
}
function cr(o, r) {
  if (o.indexOf("dt(") === -1) return o;
  function e(n, c) {
    let i = [], d = 0, l = "", u = null, f = 0;
    for (; d <= n.length; ) {
      let g = n[d];
      if ((g === '"' || g === "'" || g === "`") && n[d - 1] !== "\\" && (u = u === g ? null : g), !u && (g === "(" && f++, g === ")" && f--, (g === "," || d === n.length) && f === 0)) {
        let p = l.trim();
        p.startsWith("dt(") ? i.push(cr(p, c)) : i.push(t(p)), l = "", d++;
        continue;
      }
      g !== void 0 && (l += g), d++;
    }
    return i;
  }
  function t(n) {
    let c = n[0];
    if ((c === '"' || c === "'" || c === "`") && n[n.length - 1] === c) return n.slice(1, -1);
    let i = Number(n);
    return isNaN(i) ? n : i;
  }
  let a = [], s = [];
  for (let n = 0; n < o.length; n++) if (o[n] === "d" && o.slice(n, n + 3) === "dt(") s.push(n), n += 2;
  else if (o[n] === ")" && s.length > 0) {
    let c = s.pop();
    s.length === 0 && a.push([c, n]);
  }
  if (!a.length) return o;
  for (let n = a.length - 1; n >= 0; n--) {
    let [c, i] = a[n], d = o.slice(c + 3, i), l = e(d, r), u = r(...l);
    o = o.slice(0, c) + u + o.slice(i + 1);
  }
  return o;
}
var U = (...o) => te(x.getTheme(), ...o), te = (o = {}, r, e, t) => {
  if (r) {
    let { variable: a, options: s } = x.defaults || {}, { prefix: n, transform: c } = o?.options || s || {}, i = G(r, lo) ? r : `{${r}}`;
    return t === "value" || So(t) && c === "strict" ? x.getTokenValue(r) : dr(i, void 0, n, [a.excludedKeyRegex], e);
  }
  return "";
};
function po(o, ...r) {
  if (o instanceof Array) {
    let e = o.reduce((t, a, s) => {
      var n;
      return t + a + ((n = I(r[s], { dt: U })) != null ? n : "");
    }, "");
    return cr(e, U);
  }
  return I(o, { dt: U });
}
function ae(o, r = {}) {
  let e = x.defaults.variable, { prefix: t = e.prefix, selector: a = e.selector, excludedKeyRegex: s = e.excludedKeyRegex } = r, n = [], c = [], i = [{ node: o, path: t }];
  for (; i.length; ) {
    let { node: l, path: u } = i.pop();
    for (let f in l) {
      let g = l[f], p = Qr(g), m = G(f, s) ? Co(u) : Co(u, Qo(f));
      if (X(p)) i.push({ node: p, path: m });
      else {
        let b = ir(m), h = dr(p, m, t, [s]);
        ee(c, b, h);
        let k = m;
        t && k.startsWith(t + "-") && (k = k.slice(t.length + 1)), n.push(k.replace(/-/g, "."));
      }
    }
  }
  let d = c.join("");
  return { value: c, tokens: n, declarations: d, css: ro(a, d) };
}
var C = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(o) {
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
  let r = Object.keys(this.rules).filter((e) => e !== "custom").map((e) => this.rules[e]);
  return [o].flat().map((e) => {
    var t;
    return (t = r.map((a) => a.resolve(e)).find((a) => a.matched)) != null ? t : this.rules.custom.resolve(e);
  });
} }, _toVariables(o, r) {
  return ae(o, { prefix: r?.prefix });
}, getCommon({ name: o = "", theme: r = {}, params: e, set: t, defaults: a }) {
  var s, n, c, i, d, l, u;
  let { preset: f, options: g } = r, p, m, b, h, k, L, E;
  if (v(f) && g.transform !== "strict") {
    let { primitive: J, semantic: W, extend: O } = f, T = W || {}, { colorScheme: N } = T, A = _(T, ["colorScheme"]), P = O || {}, { colorScheme: M } = P, F = _(P, ["colorScheme"]), j = N || {}, { dark: H } = j, q = _(j, ["dark"]), Y = M || {}, { dark: K } = Y, Z = _(Y, ["dark"]), S = v(J) ? this._toVariables({ primitive: J }, g) : {}, B = v(A) ? this._toVariables({ semantic: A }, g) : {}, V = v(q) ? this._toVariables({ light: q }, g) : {}, go = v(H) ? this._toVariables({ dark: H }, g) : {}, Q = v(F) ? this._toVariables({ semantic: F }, g) : {}, Ro = v(Z) ? this._toVariables({ light: Z }, g) : {}, _o = v(K) ? this._toVariables({ dark: K }, g) : {}, [pr, mr] = [(s = S.declarations) != null ? s : "", S.tokens], [br, hr] = [(n = B.declarations) != null ? n : "", B.tokens || []], [vr, kr] = [(c = V.declarations) != null ? c : "", V.tokens || []], [yr, wr] = [(i = go.declarations) != null ? i : "", go.tokens || []], [xr, Cr] = [(d = Q.declarations) != null ? d : "", Q.tokens || []], [$r, Br] = [(l = Ro.declarations) != null ? l : "", Ro.tokens || []], [Sr, Rr] = [(u = _o.declarations) != null ? u : "", _o.tokens || []];
    p = this.transformCSS(o, pr, "light", "variable", g, t, a), m = mr;
    let _r = this.transformCSS(o, `${br}${vr}`, "light", "variable", g, t, a), zr = this.transformCSS(o, `${yr}`, "dark", "variable", g, t, a);
    b = `${_r}${zr}`, h = [.../* @__PURE__ */ new Set([...hr, ...kr, ...wr])];
    let Or = this.transformCSS(o, `${xr}${$r}color-scheme:light`, "light", "variable", g, t, a), Tr = this.transformCSS(o, `${Sr}color-scheme:dark`, "dark", "variable", g, t, a);
    k = `${Or}${Tr}`, L = [.../* @__PURE__ */ new Set([...Cr, ...Br, ...Rr])], E = I(f.css, { dt: U });
  }
  return { primitive: { css: p, tokens: m }, semantic: { css: b, tokens: h }, global: { css: k, tokens: L }, style: E };
}, getPreset({ name: o = "", preset: r = {}, options: e, params: t, set: a, defaults: s, selector: n }) {
  var c, i, d;
  let l, u, f;
  if (v(r) && e.transform !== "strict") {
    let g = o.replace("-directive", ""), p = r, { colorScheme: m, extend: b, css: h } = p, k = _(p, ["colorScheme", "extend", "css"]), L = b || {}, { colorScheme: E } = L, J = _(L, ["colorScheme"]), W = m || {}, { dark: O } = W, T = _(W, ["dark"]), N = E || {}, { dark: A } = N, P = _(N, ["dark"]), M = v(k) ? this._toVariables({ [g]: $($({}, k), J) }, e) : {}, F = v(T) ? this._toVariables({ [g]: $($({}, T), P) }, e) : {}, j = v(O) ? this._toVariables({ [g]: $($({}, O), A) }, e) : {}, [H, q] = [(c = M.declarations) != null ? c : "", M.tokens || []], [Y, K] = [(i = F.declarations) != null ? i : "", F.tokens || []], [Z, S] = [(d = j.declarations) != null ? d : "", j.tokens || []], B = this.transformCSS(g, `${H}${Y}`, "light", "variable", e, a, s, n), V = this.transformCSS(g, Z, "dark", "variable", e, a, s, n);
    l = `${B}${V}`, u = [.../* @__PURE__ */ new Set([...q, ...K, ...S])], f = I(h, { dt: U });
  }
  return { css: l, tokens: u, style: f };
}, getPresetC({ name: o = "", theme: r = {}, params: e, set: t, defaults: a }) {
  var s;
  let { preset: n, options: c } = r, i = (s = n?.components) == null ? void 0 : s[o];
  return this.getPreset({ name: o, preset: i, options: c, params: e, set: t, defaults: a });
}, getPresetD({ name: o = "", theme: r = {}, params: e, set: t, defaults: a }) {
  var s, n;
  let c = o.replace("-directive", ""), { preset: i, options: d } = r, l = ((s = i?.components) == null ? void 0 : s[c]) || ((n = i?.directives) == null ? void 0 : n[c]);
  return this.getPreset({ name: c, preset: l, options: d, params: e, set: t, defaults: a });
}, applyDarkColorScheme(o) {
  return !(o.darkModeSelector === "none" || o.darkModeSelector === !1);
}, getColorSchemeOption(o, r) {
  var e;
  return this.applyDarkColorScheme(o) ? this.regex.resolve(o.darkModeSelector === !0 ? r.options.darkModeSelector : (e = o.darkModeSelector) != null ? e : r.options.darkModeSelector) : [];
}, getLayerOrder(o, r = {}, e, t) {
  let { cssLayer: a } = r;
  return a ? `@layer ${I(a.order || a.name || "primeui", e)}` : "";
}, getCommonStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: a, defaults: s }) {
  let n = this.getCommon({ name: o, theme: r, params: e, set: a, defaults: s }), c = Object.entries(t).reduce((i, [d, l]) => i.push(`${d}="${l}"`) && i, []).join(" ");
  return Object.entries(n || {}).reduce((i, [d, l]) => {
    if (X(l) && Object.hasOwn(l, "css")) {
      let u = co(l.css), f = `${d}-variables`;
      i.push(`<style type="text/css" data-primevue-style-id="${f}" ${c}>${u}</style>`);
    }
    return i;
  }, []).join("");
}, getStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: a, defaults: s }) {
  var n;
  let c = { name: o, theme: r, params: e, set: a, defaults: s }, i = (n = o.includes("-directive") ? this.getPresetD(c) : this.getPresetC(c)) == null ? void 0 : n.css, d = Object.entries(t).reduce((l, [u, f]) => l.push(`${u}="${f}"`) && l, []).join(" ");
  return i ? `<style type="text/css" data-primevue-style-id="${o}-variables" ${d}>${co(i)}</style>` : "";
}, createTokens(o = {}, r, e = "", t = "", a = {}) {
  let s = function(c, i = {}, d = []) {
    if (d.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: c, path: this.path, paths: i, value: void 0 };
    d.push(this.path), i.name = this.path, i.binding || (i.binding = {});
    let l = this.value;
    if (typeof this.value == "string" && lo.test(this.value)) {
      let u = this.value.trim().replace(lo, (f) => {
        var g;
        let p = f.slice(1, -1), m = this.tokens[p];
        if (!m) return console.warn(`Token not found for path: ${p}`), "__UNRESOLVED__";
        let b = m.computed(c, i, d);
        return Array.isArray(b) && b.length === 2 ? `light-dark(${b[0].value},${b[1].value})` : (g = b?.value) != null ? g : "__UNRESOLVED__";
      });
      l = ar.test(u.replace(nr, "0")) ? `calc(${u})` : u;
    }
    return So(i.binding) && delete i.binding, d.pop(), { colorScheme: c, path: this.path, paths: i, value: l.includes("__UNRESOLVED__") ? void 0 : l };
  }, n = (c, i, d) => {
    Object.entries(c).forEach(([l, u]) => {
      let f = G(l, r.variable.excludedKeyRegex) ? i : i ? `${i}.${Do(l)}` : Do(l), g = d ? `${d}.${l}` : l;
      X(u) ? n(u, f, g) : (a[f] || (a[f] = { paths: [], computed: (p, m = {}, b = []) => {
        if (a[f].paths.length === 1) return a[f].paths[0].computed(a[f].paths[0].scheme, m.binding, b);
        if (p && p !== "none") for (let h = 0; h < a[f].paths.length; h++) {
          let k = a[f].paths[h];
          if (k.scheme === p) return k.computed(p, m.binding, b);
        }
        return a[f].paths.map((h) => h.computed(h.scheme, m[h.scheme], b));
      } }), a[f].paths.push({ path: g, value: u, scheme: g.includes("colorScheme.light") ? "light" : g.includes("colorScheme.dark") ? "dark" : "none", computed: s, tokens: a }));
    });
  };
  return n(o, e, t), a;
}, getTokenValue(o, r, e) {
  var t;
  let a = ((c) => c.split(".").filter((i) => !G(i.toLowerCase(), e.variable.excludedKeyRegex)).join("."))(r), s = r.includes("colorScheme.light") ? "light" : r.includes("colorScheme.dark") ? "dark" : void 0, n = [(t = o[a]) == null ? void 0 : t.computed(s)].flat().filter((c) => c);
  return n.length === 1 ? n[0].value : n.reduce((c = {}, i) => {
    let d = i, { colorScheme: l } = d, u = _(d, ["colorScheme"]);
    return c[l] = u, c;
  }, void 0);
}, getSelectorRule(o, r, e, t) {
  return e === "class" || e === "attr" ? ro(v(r) ? `${o}${r},${o} ${r}` : o, t) : ro(o, ro(r ?? ":root,:host", t));
}, transformCSS(o, r, e, t, a = {}, s, n, c) {
  if (v(r)) {
    let { cssLayer: i } = a;
    if (t !== "style") {
      let d = this.getColorSchemeOption(a, n);
      r = e === "dark" ? d.reduce((l, { type: u, selector: f }) => (v(f) && (l += f.includes("[CSS]") ? f.replace("[CSS]", r) : this.getSelectorRule(f, c, u, r)), l), "") : ro(c ?? ":root,:host", r);
    }
    if (i) {
      let d = { name: "primeui" };
      X(i) && (d.name = I(i.name, { name: o, type: t })), v(d.name) && (r = ro(`@layer ${d.name}`, r), s?.layerNames(d.name));
    }
    return r;
  }
  return "";
} }, x = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(o = {}) {
  let { theme: r } = o;
  r && (this._theme = yo($({}, r), { options: $($({}, this.defaults.options), r.options) }), this._tokens = C.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
  this.update({ theme: o }), z.emit("theme:change", o);
}, getPreset() {
  return this.preset;
}, setPreset(o) {
  this._theme = yo($({}, this.theme), { preset: o }), this._tokens = C.createTokens(o, this.defaults), this.clearLoadedStyleNames(), z.emit("preset:change", o), z.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(o) {
  this._theme = yo($({}, this.theme), { options: o }), this.clearLoadedStyleNames(), z.emit("options:change", o), z.emit("theme:change", this.theme);
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
  return C.getTokenValue(this.tokens, o, this.defaults);
}, getCommon(o = "", r) {
  return C.getCommon({ name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(o = "", r) {
  let e = { name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return C.getPresetC(e);
}, getDirective(o = "", r) {
  let e = { name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return C.getPresetD(e);
}, getCustomPreset(o = "", r, e, t) {
  let a = { name: o, preset: r, options: this.options, selector: e, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return C.getPreset(a);
}, getLayerOrderCSS(o = "") {
  return C.getLayerOrder(o, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(o = "", r, e = "style", t) {
  return C.transformCSS(o, r, t, e, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(o = "", r, e = {}) {
  return C.getCommonStyleSheet({ name: o, theme: this.theme, params: r, props: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(o, r, e = {}) {
  return C.getStyleSheet({ name: o, theme: this.theme, params: r, props: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(o) {
  this._loadingStyles.add(o);
}, onStyleUpdated(o) {
  this._loadingStyles.add(o);
}, onStyleLoaded(o, { name: r }) {
  this._loadingStyles.size && (this._loadingStyles.delete(r), z.emit(`theme:${r}:load`, o), !this._loadingStyles.size && z.emit("theme:load"));
} }, w = {
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
}, ne = `
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
function so(o) {
  "@babel/helpers - typeof";
  return so = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, so(o);
}
function Io(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(o, a).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Lo(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Io(Object(e), !0).forEach(function(t) {
      ie(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Io(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function ie(o, r, e) {
  return (r = de(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function de(o) {
  var r = ce(o, "string");
  return so(r) == "symbol" ? r : r + "";
}
function ce(o, r) {
  if (so(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (so(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function le(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  zo() && zo().components ? qo(o) : r ? o() : Pr(o);
}
var se = 0;
function ue(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = D(!1), t = D(o), a = D(null), s = Gr() ? window.document : void 0, n = r.document, c = n === void 0 ? s : n, i = r.immediate, d = i === void 0 ? !0 : i, l = r.manual, u = l === void 0 ? !1 : l, f = r.name, g = f === void 0 ? "style_".concat(++se) : f, p = r.id, m = p === void 0 ? void 0 : p, b = r.media, h = b === void 0 ? void 0 : b, k = r.nonce, L = k === void 0 ? void 0 : k, E = r.first, J = E === void 0 ? !1 : E, W = r.onMounted, O = W === void 0 ? void 0 : W, T = r.onUpdated, N = T === void 0 ? void 0 : T, A = r.onLoad, P = A === void 0 ? void 0 : A, M = r.props, F = M === void 0 ? {} : M, j = function() {
  }, H = function(K) {
    var Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (c) {
      var S = Lo(Lo({}, F), Z), B = S.name || g, V = S.id || m, go = S.nonce || L;
      a.value = c.querySelector('style[data-primevue-style-id="'.concat(B, '"]')) || c.getElementById(V) || c.createElement("style"), a.value.isConnected || (t.value = K || o, xo(a.value, {
        type: "text/css",
        id: V,
        media: h,
        nonce: go
      }), J ? c.head.prepend(a.value) : c.head.appendChild(a.value), Ur(a.value, "data-primevue-style-id", B), xo(a.value, S), a.value.onload = function(Q) {
        return P?.(Q, {
          name: B
        });
      }, O?.(B)), !e.value && (j = io(t, function(Q) {
        a.value.textContent = Q, N?.(B);
      }, {
        immediate: !0
      }), e.value = !0);
    }
  }, q = function() {
    !c || !e.value || (j(), Xr(a.value) && c.head.removeChild(a.value), e.value = !1, a.value = null);
  };
  return d && !u && le(H), {
    id: m,
    name: g,
    el: a,
    css: t,
    unload: q,
    load: H,
    isLoaded: Nr(e)
  };
}
function uo(o) {
  "@babel/helpers - typeof";
  return uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, uo(o);
}
var Eo, Wo, Ao, Mo;
function Fo(o, r) {
  return me(o) || pe(o, r) || ge(o, r) || fe();
}
function fe() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ge(o, r) {
  if (o) {
    if (typeof o == "string") return Ho(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Ho(o, r) : void 0;
  }
}
function Ho(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++) t[e] = o[e];
  return t;
}
function pe(o, r) {
  var e = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (e != null) {
    var t, a, s, n, c = [], i = !0, d = !1;
    try {
      if (s = (e = e.call(o)).next, r !== 0) for (; !(i = (t = s.call(e)).done) && (c.push(t.value), c.length !== r); i = !0) ;
    } catch (l) {
      d = !0, a = l;
    } finally {
      try {
        if (!i && e.return != null && (n = e.return(), Object(n) !== n)) return;
      } finally {
        if (d) throw a;
      }
    }
    return c;
  }
}
function me(o) {
  if (Array.isArray(o)) return o;
}
function Yo(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(o, a).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function wo(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Yo(Object(e), !0).forEach(function(t) {
      be(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Yo(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function be(o, r, e) {
  return (r = he(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function he(o) {
  var r = ve(o, "string");
  return uo(r) == "symbol" ? r : r + "";
}
function ve(o, r) {
  if (uo(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (uo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function mo(o, r) {
  return r || (r = o.slice(0)), Object.freeze(Object.defineProperties(o, { raw: { value: Object.freeze(r) } }));
}
var ke = function(r) {
  var e = r.dt;
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
    padding-right: `.concat(e("scrollbar.width"), `;
}
`);
}, ye = {}, we = {}, oo = {
  name: "base",
  css: ke,
  style: ne,
  classes: ye,
  inlineStyles: we,
  load: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(s) {
      return s;
    }, a = t(po(Eo || (Eo = mo(["", ""])), r));
    return v(a) ? ue(co(a), wo({
      name: this.name
    }, e)) : {};
  },
  loadCSS: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, r);
  },
  loadStyle: function() {
    var r = this, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, e, function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return x.transformCSS(e.name || r.name, "".concat(a).concat(po(Wo || (Wo = mo(["", ""])), t)));
    });
  },
  getCommonTheme: function(r) {
    return x.getCommon(this.name, r);
  },
  getComponentTheme: function(r) {
    return x.getComponent(this.name, r);
  },
  getDirectiveTheme: function(r) {
    return x.getDirective(this.name, r);
  },
  getPresetTheme: function(r, e, t) {
    return x.getCustomPreset(this.name, r, e, t);
  },
  getLayerOrderThemeCSS: function() {
    return x.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var t = I(this.css, {
        dt: U
      }) || "", a = co(po(Ao || (Ao = mo(["", "", ""])), t, r)), s = Object.entries(e).reduce(function(n, c) {
        var i = Fo(c, 2), d = i[0], l = i[1];
        return n.push("".concat(d, '="').concat(l, '"')) && n;
      }, []).join(" ");
      return v(a) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(s, ">").concat(a, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return x.getCommonStyleSheet(this.name, r, e);
  },
  getThemeStyleSheet: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [x.getStyleSheet(this.name, r, e)];
    if (this.style) {
      var a = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), s = po(Mo || (Mo = mo(["", ""])), I(this.style, {
        dt: U
      })), n = co(x.transformCSS(a, s)), c = Object.entries(e).reduce(function(i, d) {
        var l = Fo(d, 2), u = l[0], f = l[1];
        return i.push("".concat(u, '="').concat(f, '"')) && i;
      }, []).join(" ");
      v(n) && t.push('<style type="text/css" data-primevue-style-id="'.concat(a, '" ').concat(c, ">").concat(n, "</style>"));
    }
    return t.join("");
  },
  extend: function(r) {
    return wo(wo({}, this), {}, {
      css: void 0,
      style: void 0
    }, r);
  }
}, bo = or();
function fo(o) {
  "@babel/helpers - typeof";
  return fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, fo(o);
}
function Vo(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(o, a).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function ho(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Vo(Object(e), !0).forEach(function(t) {
      xe(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Vo(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function xe(o, r, e) {
  return (r = Ce(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Ce(o) {
  var r = $e(o, "string");
  return fo(r) == "symbol" ? r : r + "";
}
function $e(o, r) {
  if (fo(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (fo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var Be = {
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
    text: [w.STARTS_WITH, w.CONTAINS, w.NOT_CONTAINS, w.ENDS_WITH, w.EQUALS, w.NOT_EQUALS],
    numeric: [w.EQUALS, w.NOT_EQUALS, w.LESS_THAN, w.LESS_THAN_OR_EQUAL_TO, w.GREATER_THAN, w.GREATER_THAN_OR_EQUAL_TO],
    date: [w.DATE_IS, w.DATE_IS_NOT, w.DATE_BEFORE, w.DATE_AFTER]
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
}, Se = /* @__PURE__ */ Symbol();
function Re(o, r) {
  var e = {
    config: Ko(r)
  };
  return o.config.globalProperties.$primevue = e, o.provide(Se, e), _e(), ze(o, e), e;
}
var eo = [];
function _e() {
  z.clear(), eo.forEach(function(o) {
    return o?.();
  }), eo = [];
}
function ze(o, r) {
  var e = D(!1), t = function() {
    var d;
    if (((d = r.config) === null || d === void 0 ? void 0 : d.theme) !== "none" && !x.isStyleNameLoaded("common")) {
      var l, u, f = ((l = oo.getCommonTheme) === null || l === void 0 ? void 0 : l.call(oo)) || {}, g = f.primitive, p = f.semantic, m = f.global, b = f.style, h = {
        nonce: (u = r.config) === null || u === void 0 || (u = u.csp) === null || u === void 0 ? void 0 : u.nonce
      };
      oo.load(g?.css, ho({
        name: "primitive-variables"
      }, h)), oo.load(p?.css, ho({
        name: "semantic-variables"
      }, h)), oo.load(m?.css, ho({
        name: "global-variables"
      }, h)), oo.loadStyle(ho({
        name: "global-style"
      }, h), b), x.setLoadedStyleName("common");
    }
  };
  z.on("theme:change", function(i) {
    e.value || (o.config.globalProperties.$primevue.config.theme = i, e.value = !0);
  });
  var a = io(r.config, function(i, d) {
    bo.emit("config:change", {
      newValue: i,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  }), s = io(function() {
    return r.config.ripple;
  }, function(i, d) {
    bo.emit("config:ripple:change", {
      newValue: i,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  }), n = io(function() {
    return r.config.theme;
  }, function(i, d) {
    e.value || x.setTheme(i), r.config.unstyled || t(), e.value = !1, bo.emit("config:theme:change", {
      newValue: i,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !1
  }), c = io(function() {
    return r.config.unstyled;
  }, function(i, d) {
    !i && r.config.theme && t(), bo.emit("config:unstyled:change", {
      newValue: i,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  });
  eo.push(a), eo.push(s), eo.push(n), eo.push(c);
}
var Oe = {
  install: function(r, e) {
    var t = Yr(Be, e);
    Re(r, t);
  }
}, Te = { transitionDuration: "{transition.duration}" }, Ne = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, Pe = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, je = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, De = { root: Te, panel: Ne, header: Pe, content: je }, Ie = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Le = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Ee = { padding: "{list.padding}", gap: "{list.gap}" }, We = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Ae = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Me = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Fe = { borderRadius: "{border.radius.sm}" }, He = { padding: "{list.option.padding}" }, Ye = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, Ve = { root: Ie, overlay: Le, list: Ee, option: We, optionGroup: Ae, dropdown: Me, chip: Fe, emptyMessage: He, colorScheme: Ye }, Xe = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Ge = { size: "1rem" }, Ue = { borderColor: "{content.background}", offset: "-0.75rem" }, Je = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, qe = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, Ke = { root: Xe, icon: Ge, group: Ue, lg: Je, xl: qe }, Ze = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, Qe = { size: "0.5rem" }, ot = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, rt = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, et = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, tt = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, at = { root: Ze, dot: Qe, sm: ot, lg: rt, xl: et, colorScheme: tt }, nt = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, it = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, dt = { primitive: nt, semantic: it }, ct = { borderRadius: "{content.border.radius}" }, lt = { root: ct }, st = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, ut = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ft = { color: "{navigation.item.icon.color}" }, gt = { root: st, item: ut, separator: ft }, pt = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, mt = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, bt = { root: pt, colorScheme: mt }, ht = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, vt = { padding: "1.25rem", gap: "0.5rem" }, kt = { gap: "0.5rem" }, yt = { fontSize: "1.25rem", fontWeight: "500" }, wt = { color: "{text.muted.color}" }, xt = { root: ht, body: vt, caption: kt, title: yt, subtitle: wt }, Ct = { transitionDuration: "{transition.duration}" }, $t = { gap: "0.25rem" }, Bt = { padding: "1rem", gap: "0.5rem" }, St = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Rt = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, _t = { root: Ct, content: $t, indicatorList: Bt, indicator: St, colorScheme: Rt }, zt = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Ot = { width: "2.5rem", color: "{form.field.icon.color}" }, Tt = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Nt = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, Pt = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, jt = { color: "{form.field.icon.color}" }, Dt = { root: zt, dropdown: Ot, overlay: Tt, list: Nt, option: Pt, clearIcon: jt }, It = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, Lt = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, Et = { root: It, icon: Lt }, Wt = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, At = { width: "2rem", height: "2rem" }, Mt = { size: "1rem" }, Ft = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Ht = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, Yt = { root: Wt, image: At, icon: Mt, removeIcon: Ft, colorScheme: Ht }, Vt = { transitionDuration: "{transition.duration}" }, Xt = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Gt = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, Ut = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, Jt = { root: Vt, preview: Xt, panel: Gt, colorScheme: Ut }, qt = { size: "2rem", color: "{overlay.modal.color}" }, Kt = { gap: "1rem" }, Zt = { icon: qt, content: Kt }, Qt = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, oa = { padding: "{overlay.popover.padding}", gap: "1rem" }, ra = { size: "1.5rem", color: "{overlay.popover.color}" }, ea = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, ta = { root: Qt, content: oa, icon: ra, footer: ea }, aa = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, na = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, ia = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, da = { mobileIndent: "1rem" }, ca = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, la = { borderColor: "{content.border.color}" }, sa = { root: aa, list: na, item: ia, submenu: da, submenuIcon: ca, separator: la }, ua = `
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
`, fa = { transitionDuration: "{transition.duration}" }, ga = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, pa = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ma = { fontWeight: "600" }, ba = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, ha = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, va = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ka = { fontWeight: "600" }, ya = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, wa = { color: "{primary.color}" }, xa = { width: "0.5rem" }, Ca = { width: "1px", color: "{primary.color}" }, $a = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Ba = { size: "2rem" }, Sa = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ra = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, _a = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, za = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Oa = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Ta = `
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Na = { root: fa, header: ga, headerCell: pa, columnTitle: ma, row: ba, bodyCell: ha, footerCell: va, columnFooter: ka, footer: ya, dropPoint: wa, columnResizer: xa, resizeIndicator: Ca, sortIcon: $a, loadingIcon: Ba, rowToggleButton: Sa, filter: Ra, paginatorTop: _a, paginatorBottom: za, colorScheme: Oa, css: Ta }, Pa = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, ja = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, Da = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, Ia = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, La = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Ea = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, Wa = { root: Pa, header: ja, content: Da, footer: Ia, paginatorTop: La, paginatorBottom: Ea }, Aa = { transitionDuration: "{transition.duration}" }, Ma = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, Fa = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, Ha = { gap: "0.5rem", fontWeight: "500" }, Ya = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Va = { color: "{form.field.icon.color}" }, Xa = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, Ga = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, Ua = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, Ja = { margin: "0.5rem 0 0 0" }, qa = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, Ka = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Za = { margin: "0.5rem 0 0 0" }, Qa = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, on = { margin: "0.5rem 0 0 0" }, rn = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, en = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, tn = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, an = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, nn = { root: Aa, panel: Ma, header: Fa, title: Ha, dropdown: Ya, inputIcon: Va, selectMonth: Xa, selectYear: Ga, group: Ua, dayView: Ja, weekDay: qa, date: Ka, monthView: Za, month: Qa, yearView: on, year: rn, buttonbar: en, timePicker: tn, colorScheme: an }, dn = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, cn = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, ln = { fontSize: "1.25rem", fontWeight: "600" }, sn = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, un = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, fn = { root: dn, header: cn, title: ln, content: sn, footer: un }, gn = { borderColor: "{content.border.color}" }, pn = { background: "{content.background}", color: "{text.color}" }, mn = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, bn = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, hn = { root: gn, content: pn, horizontal: mn, vertical: bn }, vn = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, kn = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, yn = { root: vn, item: kn }, wn = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, xn = { padding: "{overlay.modal.padding}" }, Cn = { fontSize: "1.5rem", fontWeight: "600" }, $n = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Bn = { padding: "{overlay.modal.padding}" }, Sn = { root: wn, header: xn, title: Cn, content: $n, footer: Bn }, Rn = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, _n = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, zn = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, On = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Tn = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Nn = { toolbar: Rn, toolbarItem: _n, overlay: zn, overlayOption: On, content: Tn }, Pn = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, jn = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Dn = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, In = { padding: "0" }, Ln = { root: Pn, legend: jn, toggleIcon: Dn, content: In }, En = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, Wn = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, An = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, Mn = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, Fn = { gap: "0.5rem" }, Hn = { height: "0.25rem" }, Yn = { gap: "0.5rem" }, Vn = { root: En, header: Wn, content: An, file: Mn, fileList: Fn, progressbar: Hn, basic: Yn }, Xn = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, Gn = { active: { top: "-1.25rem" } }, Un = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, Jn = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, qn = { root: Xn, over: Gn, in: Un, on: Jn }, Kn = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, Zn = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Qn = { size: "1.5rem" }, oi = { background: "{content.background}", padding: "1rem 0.25rem" }, ri = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ei = { size: "1rem" }, ti = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, ai = { gap: "0.5rem", padding: "1rem" }, ni = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ii = { background: "rgba(0, 0, 0, 0.5)" }, di = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, ci = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, li = { size: "1.5rem" }, si = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, ui = { root: Kn, navButton: Zn, navIcon: Qn, thumbnailsContent: oi, thumbnailNavButton: ri, thumbnailNavButtonIcon: ei, caption: ti, indicatorList: ai, indicatorButton: ni, insetIndicatorList: ii, insetIndicatorButton: di, closeButton: ci, closeButtonIcon: li, colorScheme: si }, fi = { color: "{form.field.icon.color}" }, gi = { icon: fi }, pi = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, mi = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, bi = { root: pi, input: mi }, hi = { transitionDuration: "{transition.duration}" }, vi = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, ki = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, yi = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, wi = { root: hi, preview: vi, toolbar: ki, action: yi }, xi = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ci = { handle: xi }, $i = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, Bi = { fontWeight: "500" }, Si = { size: "1rem" }, Ri = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, _i = { root: $i, text: Bi, icon: Si, colorScheme: Ri }, zi = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, Oi = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, Ti = { root: zi, display: Oi }, Ni = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Pi = { borderRadius: "{border.radius.sm}" }, ji = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, Di = { root: Ni, chip: Pi, colorScheme: ji }, Ii = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, Li = { addon: Ii }, Ei = { transitionDuration: "{transition.duration}" }, Wi = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, Ai = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, Mi = { root: Ei, button: Wi, colorScheme: Ai }, Fi = { gap: "0.5rem" }, Hi = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, Yi = { root: Fi, input: Hi }, Vi = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Xi = { root: Vi }, Gi = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ui = { background: "{primary.color}" }, Ji = { background: "{content.border.color}" }, qi = { color: "{text.muted.color}" }, Ki = { root: Gi, value: Ui, range: Ji, text: qi }, Zi = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, Qi = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, od = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, rd = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, ed = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, td = { padding: "{list.option.padding}" }, ad = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, nd = { root: Zi, list: Qi, option: od, optionGroup: rd, checkmark: ed, emptyMessage: td, colorScheme: ad }, id = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, dd = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, cd = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, ld = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, sd = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, ud = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, fd = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, gd = { borderColor: "{content.border.color}" }, pd = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, md = { root: id, baseItem: dd, item: cd, overlay: ld, submenu: sd, submenuLabel: ud, submenuIcon: fd, separator: gd, mobileButton: pd }, bd = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, hd = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, vd = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, kd = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, yd = { borderColor: "{content.border.color}" }, wd = { root: bd, list: hd, item: vd, submenuLabel: kd, separator: yd }, xd = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, Cd = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, $d = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Bd = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, Sd = { borderColor: "{content.border.color}" }, Rd = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, _d = { root: xd, baseItem: Cd, item: $d, submenu: Bd, separator: Sd, mobileButton: Rd }, zd = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Od = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, Td = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, Nd = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, Pd = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, jd = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, Dd = { root: { borderWidth: "1px" } }, Id = { content: { padding: "0" } }, Ld = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, Ed = { root: zd, content: Od, text: Td, icon: Nd, closeButton: Pd, closeIcon: jd, outlined: Dd, simple: Id, colorScheme: Ld }, Wd = { borderRadius: "{content.border.radius}", gap: "1rem" }, Ad = { background: "{content.border.color}", size: "0.5rem" }, Md = { gap: "0.5rem" }, Fd = { size: "0.5rem" }, Hd = { size: "1rem" }, Yd = { verticalGap: "0.5rem", horizontalGap: "1rem" }, Vd = { root: Wd, meters: Ad, label: Md, labelMarker: Fd, labelIcon: Hd, labelList: Yd }, Xd = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Gd = { width: "2.5rem", color: "{form.field.icon.color}" }, Ud = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Jd = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, qd = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, Kd = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Zd = { color: "{form.field.icon.color}" }, Qd = { borderRadius: "{border.radius.sm}" }, oc = { padding: "{list.option.padding}" }, rc = { root: Xd, dropdown: Gd, overlay: Ud, list: Jd, option: qd, optionGroup: Kd, chip: Qd, clearIcon: Zd, emptyMessage: oc }, ec = { gap: "1.125rem" }, tc = { gap: "0.5rem" }, ac = { root: ec, controls: tc }, nc = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, ic = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, dc = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, cc = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, lc = { root: nc, node: ic, nodeToggleButton: dc, connector: cc }, sc = { outline: { width: "2px", color: "{content.background}" } }, uc = { root: sc }, fc = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, gc = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, pc = { color: "{text.muted.color}" }, mc = { maxWidth: "2.5rem" }, bc = { root: fc, navButton: gc, currentPageReport: pc, jumpToPageInput: mc }, hc = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, vc = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, kc = { padding: "0.375rem 1.125rem" }, yc = { fontWeight: "600" }, wc = { padding: "0 1.125rem 1.125rem 1.125rem" }, xc = { padding: "0 1.125rem 1.125rem 1.125rem" }, Cc = { root: hc, header: vc, toggleableHeader: kc, title: yc, content: wc, footer: xc }, $c = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Bc = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, Sc = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Rc = { indent: "1rem" }, _c = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, zc = { root: $c, panel: Bc, item: Sc, submenu: Rc, submenuIcon: _c }, Oc = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, Tc = { color: "{form.field.icon.color}" }, Nc = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, Pc = { gap: "0.5rem" }, jc = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, Dc = { meter: Oc, icon: Tc, overlay: Nc, content: Pc, colorScheme: jc }, Ic = { gap: "1.125rem" }, Lc = { gap: "0.5rem" }, Ec = { root: Ic, controls: Lc }, Wc = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Ac = { padding: "{overlay.popover.padding}" }, Mc = { root: Wc, content: Ac }, Fc = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, Hc = { background: "{primary.color}" }, Yc = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, Vc = { root: Fc, value: Hc, label: Yc }, Xc = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, Gc = { colorScheme: Xc }, Uc = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, Jc = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, qc = { root: Uc, icon: Jc }, Kc = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Zc = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, Qc = { root: Kc, icon: Zc }, ol = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, rl = { colorScheme: ol }, el = { transitionDuration: "{transition.duration}" }, tl = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, al = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, nl = { root: el, bar: tl, colorScheme: al }, il = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, dl = { width: "2.5rem", color: "{form.field.icon.color}" }, cl = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, ll = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, sl = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, ul = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, fl = { color: "{form.field.icon.color}" }, gl = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, pl = { padding: "{list.option.padding}" }, ml = { root: il, dropdown: dl, overlay: cl, list: ll, option: sl, optionGroup: ul, clearIcon: fl, checkmark: gl, emptyMessage: pl }, bl = { borderRadius: "{form.field.border.radius}" }, hl = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, vl = { root: bl, colorScheme: hl }, kl = { borderRadius: "{content.border.radius}" }, yl = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, wl = { root: kl, colorScheme: yl }, xl = { transitionDuration: "{transition.duration}" }, Cl = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, $l = { background: "{primary.color}" }, Bl = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Sl = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, Rl = { root: xl, track: Cl, range: $l, handle: Bl, colorScheme: Sl }, _l = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, zl = { root: _l }, Ol = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, Tl = { root: Ol }, Nl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Pl = { background: "{content.border.color}" }, jl = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Dl = { root: Nl, gutter: Pl, handle: jl }, Il = { transitionDuration: "{transition.duration}" }, Ll = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, El = { padding: "0.5rem", gap: "1rem" }, Wl = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Al = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Ml = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, Fl = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, Hl = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, Yl = { root: Il, separator: Ll, step: El, stepHeader: Wl, stepTitle: Al, stepNumber: Ml, steppanels: Fl, steppanel: Hl }, Vl = { transitionDuration: "{transition.duration}" }, Xl = { background: "{content.border.color}" }, Gl = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Ul = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Jl = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, ql = { root: Vl, separator: Xl, itemLink: Gl, itemLabel: Ul, itemNumber: Jl }, Kl = { transitionDuration: "{transition.duration}" }, Zl = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Ql = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, os = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, rs = { height: "1px", bottom: "-1px", background: "{primary.color}" }, es = { root: Kl, tablist: Zl, item: Ql, itemIcon: os, activeBar: rs }, ts = { transitionDuration: "{transition.duration}" }, as = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, ns = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, is = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, ds = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, cs = { height: "1px", bottom: "-1px", background: "{primary.color}" }, ls = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, ss = { root: ts, tablist: as, tab: ns, tabpanel: is, navButton: ds, activeBar: cs, colorScheme: ls }, us = { transitionDuration: "{transition.duration}" }, fs = { background: "{content.background}", borderColor: "{content.border.color}" }, gs = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, ps = { background: "{content.background}", color: "{content.color}" }, ms = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, bs = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, hs = { root: us, tabList: fs, tab: gs, tabPanel: ps, navButton: ms, colorScheme: bs }, vs = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, ks = { size: "0.75rem" }, ys = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, ws = { root: vs, icon: ks, colorScheme: ys }, xs = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, Cs = { gap: "0.25rem" }, $s = { margin: "2px 0" }, Bs = { root: xs, prompt: Cs, commandResponse: $s }, Ss = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Rs = { root: Ss }, _s = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, zs = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Os = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Ts = { mobileIndent: "1rem" }, Ns = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Ps = { borderColor: "{content.border.color}" }, js = { root: _s, list: zs, item: Os, submenu: Ts, submenuIcon: Ns, separator: Ps }, Ds = { minHeight: "5rem" }, Is = { eventContent: { padding: "1rem 0" } }, Ls = { eventContent: { padding: "0 1rem" } }, Es = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, Ws = { color: "{content.border.color}", size: "2px" }, As = { event: Ds, horizontal: Is, vertical: Ls, eventMarker: Es, eventConnector: Ws }, Ms = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Fs = { size: "1.125rem" }, Hs = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, Ys = { gap: "0.5rem" }, Vs = { fontWeight: "500", fontSize: "1rem" }, Xs = { fontWeight: "500", fontSize: "0.875rem" }, Gs = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Us = { size: "1rem" }, Js = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, qs = { root: Ms, icon: Fs, content: Hs, text: Ys, summary: Vs, detail: Xs, closeButton: Gs, closeIcon: Us, colorScheme: Js }, Ks = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, Zs = { disabledColor: "{form.field.disabled.color}" }, Qs = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, ou = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, ru = { root: Ks, icon: Zs, content: Qs, colorScheme: ou }, eu = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, tu = { borderRadius: "50%", size: "1rem" }, au = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, nu = { root: eu, handle: tu, colorScheme: au }, iu = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, du = { root: iu }, cu = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, lu = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, su = { root: cu, colorScheme: lu }, uu = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, fu = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, gu = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, pu = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, mu = { size: "2rem" }, bu = { margin: "0 0 0.5rem 0" }, hu = `
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, vu = { root: uu, node: fu, nodeIcon: gu, nodeToggleButton: pu, loadingIcon: mu, filter: bu, css: hu }, ku = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, yu = { width: "2.5rem", color: "{form.field.icon.color}" }, wu = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, xu = { padding: "{list.padding}" }, Cu = { padding: "{list.option.padding}" }, $u = { borderRadius: "{border.radius.sm}" }, Bu = { color: "{form.field.icon.color}" }, Su = { root: ku, dropdown: yu, overlay: wu, tree: xu, emptyMessage: Cu, chip: $u, clearIcon: Bu }, Ru = { transitionDuration: "{transition.duration}" }, _u = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, zu = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Ou = { fontWeight: "600" }, Tu = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Nu = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, Pu = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, ju = { fontWeight: "600" }, Du = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, Iu = { width: "0.5rem" }, Lu = { width: "1px", color: "{primary.color}" }, Eu = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Wu = { size: "2rem" }, Au = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Mu = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Fu = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Hu = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Yu = `
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Vu = { root: Ru, header: _u, headerCell: zu, columnTitle: Ou, row: Tu, bodyCell: Nu, footerCell: Pu, columnFooter: ju, footer: Du, columnResizer: Iu, resizeIndicator: Lu, sortIcon: Eu, loadingIcon: Wu, nodeToggleButton: Au, paginatorTop: Mu, paginatorBottom: Fu, colorScheme: Hu, css: Yu }, Xu = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, Gu = { loader: Xu }, Uu = Object.defineProperty, Ju = Object.defineProperties, qu = Object.getOwnPropertyDescriptors, Xo = Object.getOwnPropertySymbols, Ku = Object.prototype.hasOwnProperty, Zu = Object.prototype.propertyIsEnumerable, Go = (o, r, e) => r in o ? Uu(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, Uo, Qu = (Uo = ((o, r) => {
  for (var e in r || (r = {})) Ku.call(r, e) && Go(o, e, r[e]);
  if (Xo) for (var e of Xo(r)) Zu.call(r, e) && Go(o, e, r[e]);
  return o;
})({}, dt), Ju(Uo, qu({ components: { accordion: De, autocomplete: Ve, avatar: Ke, badge: at, blockui: lt, breadcrumb: gt, button: bt, card: xt, carousel: _t, cascadeselect: Dt, checkbox: Et, chip: Yt, colorpicker: Jt, confirmdialog: Zt, confirmpopup: ta, contextmenu: sa, datatable: Na, dataview: Wa, datepicker: nn, dialog: fn, divider: hn, dock: yn, drawer: Sn, editor: Nn, fieldset: Ln, fileupload: Vn, floatlabel: qn, galleria: ui, iconfield: gi, iftalabel: bi, image: wi, imagecompare: Ci, inlinemessage: _i, inplace: Ti, inputchips: Di, inputgroup: Li, inputnumber: Mi, inputotp: Yi, inputtext: Xi, knob: Ki, listbox: nd, megamenu: md, menu: wd, menubar: _d, message: Ed, metergroup: Vd, multiselect: rc, orderlist: ac, organizationchart: lc, overlaybadge: uc, paginator: bc, panel: Cc, panelmenu: zc, password: Dc, picklist: Ec, popover: Mc, progressbar: Vc, progressspinner: Gc, radiobutton: qc, rating: Qc, ripple: rl, scrollpanel: nl, select: ml, selectbutton: vl, skeleton: wl, slider: Rl, speeddial: zl, splitbutton: Tl, splitter: Dl, stepper: Yl, steps: ql, tabmenu: es, tabs: ss, tabview: hs, tag: ws, terminal: Bs, textarea: Rs, tieredmenu: js, timeline: As, toast: qs, togglebutton: ru, toggleswitch: nu, toolbar: du, tooltip: su, tree: vu, treeselect: Su, treetable: Vu, virtualscroller: Gu }, css: ua })));
const $o = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const r = Math.random() * 16 | 0;
    return (o == "x" ? r : r & 3 | 8).toString(16);
  })
}), lr = async () => ({
  f: {
    name: (o) => `${o.name}${o.id}`
  }
}), sr = async () => ({
  set: async (o) => {
    console.log("--theme");
    try {
      if (!o.el_id)
        throw new Error("[el_id] is required");
      const r = o.name, e = document.getElementById(o.el_id);
      if (!e)
        throw new Error("[el_id] is invalid");
      ((t) => {
        const a = (s) => {
          ((n) => {
            const c = n.getAttribute("data-ce");
            if (!c)
              return;
            const i = JSON.parse(c).filter((d) => d?.k.startsWith("t-"));
            if (i.length != 0)
              for (const d of i) {
                const l = d.k, u = d.v.split(" ");
                if (l == `t-${r}-class`)
                  for (const f of u)
                    n.classList.add(f);
                else
                  for (const f of u)
                    n.classList.remove(f);
              }
          })(s);
        };
        for (const s of t.getElementsByTagName("*"))
          a(s);
        a(t);
      })(e);
    } catch (r) {
      const e = `err: [theme] ${r}`;
      throw console.log(e), e;
    }
  }
});
function Bo(o, r = 1e3) {
  let e = {
    cnt: 0
  };
  return new Promise((t) => {
    const a = () => {
      console.log(`[setInterval] is running.. [count=${e.cnt}]`);
      try {
        o() && (clearInterval(s), t());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${r}]`);
      }
      e.cnt += 1;
    }, s = setInterval(() => {
      a();
    }, r);
    a();
  });
}
let o0 = class {
  listeners = {};
  on = (o, r) => ((this.listeners[o] ||= []).push(r), () => this.off(o, r));
  off = (o, r) => {
    this.listeners[o] = this.listeners[o]?.filter((e) => e !== r);
  };
  /** Sequential execution (await each listener) */
  emit = async (o, ...r) => {
    for (const e of this.listeners[o] ?? [])
      await e(...r);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (o, ...r) => {
    await Promise.all(
      (this.listeners[o] ?? []).map((e) => e(...r))
    );
  };
  //Error-safe emit
  emitSafe = async (o, ...r) => {
    for (const e of this.listeners[o] ?? [])
      try {
        await e(...r);
      } catch (t) {
        this.listeners.error?.forEach(
          (a) => a(t)
        );
      }
  };
};
const ko = () => new o0();
class ur {
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
let y = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (o) => {
      const r = o?.lib || [];
      for (const [e, t] of r.entries()) {
        const a = t, s = `${a.name}:${o.run_from}`, n = `${o.run_from}_src`;
        let c = a[n];
        const i = `${o.run_from}_src`;
        let d = o?.lazy_lib?.[i] || null;
        if (d && (d = d.replace("{*}", `${a.name}`)), console.log(`_lazy_src: ${d}`), console.log(`_src: ${c}`), y.lib.l.hasOwnProperty(`${s}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(c) && c.includes("/") == !1 && y.lib.inbuilt_lib.indexOf(`${a.name}`) === -1)
            if (d)
              c = d;
            else
              throw `[lib-name=${a.name},lib-src=${c}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (c.startsWith("./") || c.startsWith("../")) {
            const l = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${c}`
            );
            y.lib.l[`${s}`] = {
              lib: l,
              src: c
            };
          }
          if (c.startsWith("http://") || c.startsWith("https://")) {
            const l = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${c}`
            );
            y.lib.l[`${s}`] = {
              lib: l,
              src: c
            };
          }
        }
      }
      console.log(await y.lib.get_all({}));
    },
    get: async (o) => {
      let r = null;
      const e = `${o.name}:${o.run_from}`;
      return y.lib.l.hasOwnProperty(`${e}`) == !1 && await y.lib.set({
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
      }), r = y.lib.l[`${e}`], r;
    },
    get_all: async (o) => y.lib.l
  },
  path: {
    set: (o) => {
      let r = "", e = "";
      const t = o.src.split("/");
      if (o.src.indexOf("://localhost") !== -1 || o.src.indexOf("://127.0.0.1") !== -1 || (e = "/dist"), t.indexOf(o.type) !== -1)
        for (const [a, s] of t.entries()) {
          let n = a == 0 ? "" : "/";
          if (r += `${n}${s}`, s == o.type)
            return `${r}${e}${o.name}`;
        }
      else
        for (const [a, s] of t.entries()) {
          let n = a == 0 ? "" : "/";
          if (r += `${n}${s}`, s == "src")
            return `${r}${e}${o.name}`;
        }
      return `${r}${e}${o.name}`;
    }
  }
};
const fr = ko(), gr = ko(), r0 = fr.on;
fr.emit;
const e0 = gr.emit, t0 = gr.on, a0 = async (o) => {
  const r = await lr();
  return await y.lib.set({ lib: o.lib, run_from: "renderer", lazy_lib: o.lazy_lib }), {
    set: async (e) => {
      console.log("--renderer [set]"), e.return = e?.return || {}, e.return.r = e?.return?.r || "full";
      const t = new ur();
      t.start();
      let a = e.data?.value?.l || e.data.l, s = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return e.return.r == "full" ? s.r = "" : s.r = [], await (async () => {
        for (const n of a) {
          const c = await await y.lib.get({ name: n.type, run_from: "renderer", lazy_lib: o.lazy_lib }), i = await (await c.lib.index({
            f: {
              name: (d) => r.f.name({ id: n.id, name: d }),
              get_lib: async (d) => await await y.lib.get({ name: d.name, run_from: d.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (d) => await (await sr()).set(d),
              path: (d) => y.path.set({ src: c.src, type: n.type, name: d }),
              //set..
              uuid: () => $o().set(),
              wait_until: Bo
            }
          })).set(
            {
              data: {
                curr: n
              }
            }
            /*_$cb*/
          );
          e?.return?.r == "full" ? s.r += i?.r || "" : s.r.push(i?.r || ""), s.style += i?.style || "", s.head += i?.head || "";
        }
      })(), t.stop(), s.benchmark = t.result(), s;
    }
  };
}, n0 = async (o) => {
  const r = await lr();
  return await y.lib.set({ lib: o.lib, run_from: "hydrator", lazy_lib: o.lazy_lib }), {
    set: async (e) => {
      console.log("--hydrator [set]");
      const t = new ur();
      t.start();
      let a = {
        r: "",
        style: ""
      }, s = {
        style_id: `${$o().set()}_stl`
      }, n = e.data?.value?.l || e.data.l;
      const c = async () => {
        for (const i of n) {
          const d = await await y.lib.get({ name: i.type, run_from: "hydrator", lazy_lib: o.lazy_lib }), l = d.lib, u = ko(), f = u.on, g = await (await l.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (p) => r.f.name({ id: i.id, name: p }),
              get_lib: async (p) => await await y.lib.get({ name: p.name, run_from: p.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (p) => await (await sr()).set(p),
              path: (p) => y.path.set({ src: d.src, type: i.type, name: p }),
              //set..
              uuid: () => $o().set(),
              wait_until: Bo,
              //set..
              call: e0,
              listen: f,
              //set..
              new_emitter: () => ko()
            }
          })).set(
            {
              data: {
                curr: i
              }
            }
            /*_$cb*/
          );
          r0("msg", async (p) => {
            try {
              if (Object.keys(p.where || {}).length == 0) {
                await u.emit("msg", p);
                return;
              }
            } catch {
            }
            try {
              if (i?.[p.where?.key || ""] == p.where?.value) {
                await u.emit("msg", p);
                return;
              }
            } catch {
            }
          }), a.style += g.style;
        }
      };
      await Bo(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await c();
      try {
        ((i) => {
          const d = document.getElementById(`${s.style_id}`);
          d && d.remove();
          const l = document.createElement("style");
          l.id = `${s.style_id}`, l.innerHTML = `${a.style}`, i.appendChild(l);
        })(document.head);
      } catch (i) {
        console.log(`${i}, Failed to set style..`);
      }
      return t.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: t.result()
      };
    }
  };
}, i0 = { class: "clean-wrapper relative h-screen overflow-y-auto bg-gray-50 p-4 md:p-8" }, d0 = {
  key: 0,
  class: "absolute inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg"
}, c0 = { class: "flex flex-col items-center" }, l0 = { class: "mt-2 text-sm font-medium text-blue-600" }, s0 = { class: "max-w-3xl mx-auto space-y-8" }, u0 = {
  key: 0,
  ref: "container",
  class: "ce-container bg-white p-6 rounded-xl shadow-sm"
}, f0 = ["innerHTML"], g0 = {
  key: 1,
  class: "flex flex-col items-center justify-center h-32 text-gray-400"
}, p0 = {
  key: 2,
  class: "bg-gray-900 rounded-lg p-4 shadow-lg overflow-x-auto max-h-96"
}, m0 = { class: "text-green-400 text-sm font-mono whitespace-pre-wrap" }, Jo = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", b0 = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=get_product_list", h0 = "https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management", v0 = /* @__PURE__ */ jr({
  __name: "index",
  setup(o) {
    const r = D(null), e = D(!1), t = D("Processing..."), a = D(null);
    let s = null;
    const n = Ko({
      genai_type: "gemini",
      genai_secret: "",
      product_id: ""
    }), c = () => ({
      l: [
        {
          id: "hsn-form_holder",
          type: "form_holder",
          slug: "form_holder",
          data: {
            title: "HSN Credentials & Target",
            mode: "manual",
            ce_file: {
              data: {
                l: [
                  {
                    id: "section-config",
                    type: "form_section",
                    slug: "form_section",
                    data: { label: "Setup", l: [], theme: "light" }
                  },
                  {
                    id: "input-genai-type",
                    type: "form_autocomplete",
                    slug: "form_autocomplete",
                    data: {
                      value: n.genai_type,
                      label: "GenAI Type",
                      placeholder: "Select GenAI Type...",
                      options: [
                        { id: "gemini", name: "Gemini" },
                        { id: "openai", name: "OpenAI" },
                        { id: "deepseek", name: "DeepSeek" }
                      ],
                      optionLabel: "name",
                      optionValue: "id",
                      dropdown: !0,
                      showClear: !0,
                      class: "w-full mb-5",
                      form: { section_id: "section-config" }
                    }
                  },
                  {
                    id: "input-genai-secret",
                    type: "form_inputtext",
                    slug: "form_inputtext",
                    data: {
                      value: n.genai_secret,
                      label: "GenAI Secret",
                      placeholder: "Enter API Key...",
                      class: "w-full mb-5",
                      variant: "outlined",
                      form: { section_id: "section-config" }
                    }
                  },
                  {
                    id: "input-product-id",
                    type: "form_inputtext",
                    slug: "form_inputtext",
                    data: {
                      value: n.product_id,
                      label: "Product ID",
                      placeholder: "Enter Product ID (e.g. Nike_DR2615-001_1)",
                      class: "w-full mb-5",
                      variant: "outlined",
                      form: { section_id: "section-config" }
                    }
                  },
                  {
                    id: "btn-predict-hsn",
                    type: "form_button",
                    slug: "form_button",
                    data: {
                      label: "Fetch Product & Predict HSN",
                      class: "w-full mt-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow-sm transition-all",
                      variant: "solid",
                      form: { section_id: "section-config" }
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    }), i = (l) => {
      if (!l) return "";
      if (typeof l == "string") return l;
      if (l.id) return l.id;
      const u = [
        l?.custom?.value,
        l?.val,
        l?.value,
        l?.data?.value,
        l?.custom?.data,
        l?._$p?.data?.curr?.data?.value,
        l?._$p?.data?.curr?.custom?.value
      ];
      for (const f of u) {
        if (typeof f == "string") return f;
        if (f && typeof f == "object" && f.id) return f.id;
      }
      return "";
    }, d = async () => {
      if (!n.product_id || !n.genai_secret || !n.genai_type) {
        alert("❌ Please provide GenAI Type, Secret, and a Product ID.");
        return;
      }
      e.value = !0, a.value = null;
      try {
        t.value = "Step 1: Fetching Product...";
        const l = {
          q: "{}",
          // Using exact string from your successful curl
          page: 1,
          per_page: 20,
          filter_by: `(id:=${n.product_id})`
        }, u = await fetch(b0, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Jo}`
          },
          body: JSON.stringify(l)
        });
        if (!u.ok) throw new Error(`Product Fetch Failed: ${u.status}`);
        const g = (await u.json())?.data?.products || [];
        if (g.length === 0)
          throw new Error(`No product found with ID: ${n.product_id}`);
        const p = g[0], m = p.metadata || p;
        console.log("Fetched Product for HSN:", m), t.value = "Step 2: Predicting HSN...";
        const b = {
          operation: "predict_HSN_code",
          user_id: "user_1",
          genai_type: n.genai_type,
          genai_secret: n.genai_secret,
          product: m
          // Pass the exact metadata structure
        }, h = await fetch(h0, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Jo}`
          },
          body: JSON.stringify(b)
        });
        if (!h.ok) throw new Error(`HSN Prediction Failed: ${h.status}`);
        const k = await h.json();
        a.value = k;
      } catch (l) {
        console.error("Process Failed:", l), a.value = {
          status: "error",
          message: l.message || "An error occurred during the process."
        };
      } finally {
        e.value = !1;
      }
    };
    return qo(async () => {
      const l = {
        lib: [],
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
        }
      }, u = await a0(l);
      s = await n0(l);
      const f = await u.set({ data: c() });
      r.value = f.r || "";
      const g = document.createElement("style");
      g.innerHTML = f.style, document.head.appendChild(g), setTimeout(async () => {
        await s.set({ data: c() });
      }, 100), t0("child:msg", async (p) => {
        const m = p?.id || p?.custom?.id || p?._$p?.data?.curr?.id || p?.data?.id || p?._$p?.id;
        if (p.type === "click" && m === "btn-predict-hsn") {
          e.value || await d();
          return;
        }
        const b = p?.val ?? p?.value ?? p?.custom?.value ?? p?.custom?.text ?? p?._$p?.data?.curr?.data?.value;
        m && (m === "input-genai-type" && (n.genai_type = i(p)), m === "input-genai-secret" && (n.genai_secret = b), m === "input-product-id" && (n.product_id = b));
      });
    }), (l, u) => (ao(), no("div", i0, [
      e.value ? (ao(), no("div", d0, [
        R("div", c0, [
          u[0] || (u[0] = R("div", { class: "w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" }, null, -1)),
          R("span", l0, Oo(t.value), 1)
        ])
      ])) : To("", !0),
      R("div", s0, [
        u[3] || (u[3] = R("h2", { class: "text-2xl font-bold text-gray-800 border-b pb-2" }, "Predict HSN Code", -1)),
        r.value ? (ao(), no("div", u0, [
          R("div", { innerHTML: r.value }, null, 8, f0)
        ], 512)) : (ao(), no("div", g0, [...u[1] || (u[1] = [
          R("div", { class: "w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mb-2" }, null, -1),
          Dr(" Initializing Form Engine... ", -1)
        ])])),
        a.value ? (ao(), no("div", p0, [
          u[2] || (u[2] = R("h3", { class: "text-sm font-bold text-gray-400 uppercase tracking-wider mb-2" }, "Prediction Result", -1)),
          R("pre", m0, Oo(JSON.stringify(a.value, null, 2)), 1)
        ])) : To("", !0)
      ])
    ]));
  }
}), y0 = async (o) => ({
  set: async (r) => {
    console.log(`--hydrator [${r.data.curr.type}]`);
    const t = Ir(v0, {
      _p: o,
      __p: r
    });
    t.use(Oe, {
      theme: {
        preset: Qu
      }
    });
    const a = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          o.f.call("msg", {
            type: "change",
            _p: o,
            _$p: r,
            custom: {}
          });
        }
      }
    }, s = document.getElementById(o.f.name("vue-root"));
    return t.mount(s), a;
  }
});
export {
  y0 as hydrator,
  y0 as index
};
