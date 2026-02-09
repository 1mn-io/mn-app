import { r as Ke, g as gr, o as Jr, n as Ge, w as ko, a as no, b as Ze, d as Qe, c as ot, e as rt, f as et, h as tt, i as nt } from "./runtime-dom.esm-bundler-Crm1kotq.js";
var at = Object.defineProperty, pr = Object.getOwnPropertySymbols, it = Object.prototype.hasOwnProperty, ct = Object.prototype.propertyIsEnumerable, mr = (o, r, e) => r in o ? at(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, st = (o, r) => {
  for (var e in r || (r = {})) it.call(r, e) && mr(o, e, r[e]);
  if (pr) for (var e of pr(r)) ct.call(r, e) && mr(o, e, r[e]);
  return o;
};
function ir(o) {
  return o == null || o === "" || Array.isArray(o) && o.length === 0 || !(o instanceof Date) && typeof o == "object" && Object.keys(o).length === 0;
}
function lt(o) {
  return typeof o == "function" && "call" in o && "apply" in o;
}
function B(o) {
  return !ir(o);
}
function io(o, r = !0) {
  return o instanceof Object && o.constructor === Object && (r || Object.keys(o).length !== 0);
}
function Xr(o = {}, r = {}) {
  let e = st({}, o);
  return Object.keys(r).forEach((t) => {
    let n = t;
    io(r[n]) && n in o && io(o[n]) ? e[n] = Xr(o[n], r[n]) : e[n] = r[n];
  }), e;
}
function dt(...o) {
  return o.reduce((r, e, t) => t === 0 ? e : Xr(r, e), {});
}
function to(o, ...r) {
  return lt(o) ? o(...r) : o;
}
function mo(o, r = !0) {
  return typeof o == "string" && (r || o !== "");
}
function ut(o) {
  return B(o) && !isNaN(o);
}
function co(o, r) {
  if (r) {
    let e = r.test(o);
    return r.lastIndex = 0, e;
  }
  return !1;
}
function ft(...o) {
  return dt(...o);
}
function wo(o) {
  return o && o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function Yr(o) {
  return mo(o) ? o.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : o;
}
function Kr() {
  let o = /* @__PURE__ */ new Map();
  return { on(r, e) {
    let t = o.get(r);
    return t ? t.push(e) : t = [e], o.set(r, t), this;
  }, off(r, e) {
    let t = o.get(r);
    return t && t.splice(t.indexOf(e) >>> 0, 1), this;
  }, emit(r, e) {
    let t = o.get(r);
    t && t.forEach((n) => {
      n(e);
    });
  }, clear() {
    o.clear();
  } };
}
function gt(o) {
  if (o) {
    let r = o.parentNode;
    return r && r instanceof ShadowRoot && r.host && (r = r.host), r;
  }
  return null;
}
function pt(o) {
  return !!(o !== null && typeof o < "u" && o.nodeName && gt(o));
}
function Gr(o) {
  return typeof Element < "u" ? o instanceof Element : o !== null && typeof o == "object" && o.nodeType === 1 && typeof o.nodeName == "string";
}
function Zo(o, r = {}) {
  if (Gr(o)) {
    let e = (t, n) => {
      var i, a;
      let c = (i = o?.$attrs) != null && i[t] ? [(a = o?.$attrs) == null ? void 0 : a[t]] : [];
      return [n].flat().reduce((l, s) => {
        if (s != null) {
          let d = typeof s;
          if (d === "string" || d === "number") l.push(s);
          else if (d === "object") {
            let g = Array.isArray(s) ? e(t, s) : Object.entries(s).map(([p, b]) => t === "style" && (b || b === 0) ? `${p.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${b}` : b ? p : void 0);
            l = g.length ? l.concat(g.filter((p) => !!p)) : l;
          }
        }
        return l;
      }, c);
    };
    Object.entries(r).forEach(([t, n]) => {
      if (n != null) {
        let i = t.match(/^on(.+)/);
        i ? o.addEventListener(i[1].toLowerCase(), n) : t === "p-bind" || t === "pBind" ? Zo(o, n) : (n = t === "class" ? [...new Set(e("class", n))].join(" ").trim() : t === "style" ? e("style", n).join(";").trim() : n, (o.$attrs = o.$attrs || {}) && (o.$attrs[t] = n), o.setAttribute(t, n));
      }
    });
  }
}
function mt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function bt(o, r = "", e) {
  Gr(o) && e !== null && e !== void 0 && o.setAttribute(r, e);
}
var ht = Object.defineProperty, vt = Object.defineProperties, yt = Object.getOwnPropertyDescriptors, Fo = Object.getOwnPropertySymbols, Zr = Object.prototype.hasOwnProperty, Qr = Object.prototype.propertyIsEnumerable, br = (o, r, e) => r in o ? ht(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, X = (o, r) => {
  for (var e in r || (r = {})) Zr.call(r, e) && br(o, e, r[e]);
  if (Fo) for (var e of Fo(r)) Qr.call(r, e) && br(o, e, r[e]);
  return o;
}, Jo = (o, r) => vt(o, yt(r)), oo = (o, r) => {
  var e = {};
  for (var t in o) Zr.call(o, t) && r.indexOf(t) < 0 && (e[t] = o[t]);
  if (o != null && Fo) for (var t of Fo(o)) r.indexOf(t) < 0 && Qr.call(o, t) && (e[t] = o[t]);
  return e;
}, kt = Kr(), ro = kt, Co = /{([^}]*)}/g, oe = /(\d+\s+[\+\-\*\/]\s+\d+)/g, re = /var\([^)]+\)/g;
function hr(o) {
  return mo(o) ? o.replace(/[A-Z]/g, (r, e) => e === 0 ? r : "." + r.toLowerCase()).toLowerCase() : o;
}
function wt(o) {
  return io(o) && o.hasOwnProperty("$value") && o.hasOwnProperty("$type") ? o.$value : o;
}
function Ct(o) {
  return o.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Qo(o = "", r = "") {
  return Ct(`${mo(o, !1) && mo(r, !1) ? `${o}-` : o}${r}`);
}
function ee(o = "", r = "") {
  return `--${Qo(o, r)}`;
}
function xt(o = "") {
  let r = (o.match(/{/g) || []).length, e = (o.match(/}/g) || []).length;
  return (r + e) % 2 !== 0;
}
function te(o, r = "", e = "", t = [], n) {
  if (mo(o)) {
    let i = o.trim();
    if (xt(i)) return;
    if (co(i, Co)) {
      let a = i.replaceAll(Co, (c) => {
        let l = c.replace(/{|}/g, "").split(".").filter((s) => !t.some((d) => co(s, d)));
        return `var(${ee(e, Yr(l.join("-")))}${B(n) ? `, ${n}` : ""})`;
      });
      return co(a.replace(re, "0"), oe) ? `calc(${a})` : a;
    }
    return i;
  } else if (ut(o)) return o;
}
function $t(o, r, e) {
  mo(r, !1) && o.push(`${r}:${e};`);
}
function go(o, r) {
  return o ? `${o}{${r}}` : "";
}
function ne(o, r) {
  if (o.indexOf("dt(") === -1) return o;
  function e(a, c) {
    let l = [], s = 0, d = "", g = null, p = 0;
    for (; s <= a.length; ) {
      let b = a[s];
      if ((b === '"' || b === "'" || b === "`") && a[s - 1] !== "\\" && (g = g === b ? null : b), !g && (b === "(" && p++, b === ")" && p--, (b === "," || s === a.length) && p === 0)) {
        let f = d.trim();
        f.startsWith("dt(") ? l.push(ne(f, c)) : l.push(t(f)), d = "", s++;
        continue;
      }
      b !== void 0 && (d += b), s++;
    }
    return l;
  }
  function t(a) {
    let c = a[0];
    if ((c === '"' || c === "'" || c === "`") && a[a.length - 1] === c) return a.slice(1, -1);
    let l = Number(a);
    return isNaN(l) ? a : l;
  }
  let n = [], i = [];
  for (let a = 0; a < o.length; a++) if (o[a] === "d" && o.slice(a, a + 3) === "dt(") i.push(a), a += 2;
  else if (o[a] === ")" && i.length > 0) {
    let c = i.pop();
    i.length === 0 && n.push([c, a]);
  }
  if (!n.length) return o;
  for (let a = n.length - 1; a >= 0; a--) {
    let [c, l] = n[a], s = o.slice(c + 3, l), d = e(s, r), g = r(...d);
    o = o.slice(0, c) + g + o.slice(l + 1);
  }
  return o;
}
var so = (...o) => Bt(A.getTheme(), ...o), Bt = (o = {}, r, e, t) => {
  if (r) {
    let { variable: n, options: i } = A.defaults || {}, { prefix: a, transform: c } = o?.options || i || {}, l = co(r, Co) ? r : `{${r}}`;
    return t === "value" || ir(t) && c === "strict" ? A.getTokenValue(r) : te(l, void 0, a, [n.excludedKeyRegex], e);
  }
  return "";
};
function To(o, ...r) {
  if (o instanceof Array) {
    let e = o.reduce((t, n, i) => {
      var a;
      return t + n + ((a = to(r[i], { dt: so })) != null ? a : "");
    }, "");
    return ne(e, so);
  }
  return to(o, { dt: so });
}
function Rt(o, r = {}) {
  let e = A.defaults.variable, { prefix: t = e.prefix, selector: n = e.selector, excludedKeyRegex: i = e.excludedKeyRegex } = r, a = [], c = [], l = [{ node: o, path: t }];
  for (; l.length; ) {
    let { node: d, path: g } = l.pop();
    for (let p in d) {
      let b = d[p], f = wt(b), h = co(p, i) ? Qo(g) : Qo(g, Yr(p));
      if (io(f)) l.push({ node: f, path: h });
      else {
        let m = ee(h), y = te(f, h, t, [i]);
        $t(c, m, y);
        let k = h;
        t && k.startsWith(t + "-") && (k = k.slice(t.length + 1)), a.push(k.replace(/-/g, "."));
      }
    }
  }
  let s = c.join("");
  return { value: c, tokens: a, declarations: s, css: go(n, s) };
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
  let r = Object.keys(this.rules).filter((e) => e !== "custom").map((e) => this.rules[e]);
  return [o].flat().map((e) => {
    var t;
    return (t = r.map((n) => n.resolve(e)).find((n) => n.matched)) != null ? t : this.rules.custom.resolve(e);
  });
} }, _toVariables(o, r) {
  return Rt(o, { prefix: r?.prefix });
}, getCommon({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var i, a, c, l, s, d, g;
  let { preset: p, options: b } = r, f, h, m, y, k, w, C;
  if (B(p) && b.transform !== "strict") {
    let { primitive: O, semantic: z, extend: x } = p, W = z || {}, { colorScheme: F } = W, K = oo(W, ["colorScheme"]), H = x || {}, { colorScheme: M } = H, I = oo(H, ["colorScheme"]), E = F || {}, { dark: G } = E, $ = oo(E, ["dark"]), Z = M || {}, { dark: P } = Z, Q = oo(Z, ["dark"]), q = B(O) ? this._toVariables({ primitive: O }, b) : {}, S = B(K) ? this._toVariables({ semantic: K }, b) : {}, D = B($) ? this._toVariables({ light: $ }, b) : {}, eo = B(G) ? this._toVariables({ dark: G }, b) : {}, V = B(I) ? this._toVariables({ semantic: I }, b) : {}, vo = B(Q) ? this._toVariables({ light: Q }, b) : {}, fr = B(P) ? this._toVariables({ dark: P }, b) : {}, [Ae, Ne] = [(i = q.declarations) != null ? i : "", q.tokens], [ze, Pe] = [(a = S.declarations) != null ? a : "", S.tokens || []], [De, Le] = [(c = D.declarations) != null ? c : "", D.tokens || []], [je, Fe] = [(l = eo.declarations) != null ? l : "", eo.tokens || []], [Ie, We] = [(s = V.declarations) != null ? s : "", V.tokens || []], [Me, Ue] = [(d = vo.declarations) != null ? d : "", vo.tokens || []], [He, qe] = [(g = fr.declarations) != null ? g : "", fr.tokens || []];
    f = this.transformCSS(o, Ae, "light", "variable", b, t, n), h = Ne;
    let Ve = this.transformCSS(o, `${ze}${De}`, "light", "variable", b, t, n), Je = this.transformCSS(o, `${je}`, "dark", "variable", b, t, n);
    m = `${Ve}${Je}`, y = [.../* @__PURE__ */ new Set([...Pe, ...Le, ...Fe])];
    let Xe = this.transformCSS(o, `${Ie}${Me}color-scheme:light`, "light", "variable", b, t, n), Ye = this.transformCSS(o, `${He}color-scheme:dark`, "dark", "variable", b, t, n);
    k = `${Xe}${Ye}`, w = [.../* @__PURE__ */ new Set([...We, ...Ue, ...qe])], C = to(p.css, { dt: so });
  }
  return { primitive: { css: f, tokens: h }, semantic: { css: m, tokens: y }, global: { css: k, tokens: w }, style: C };
}, getPreset({ name: o = "", preset: r = {}, options: e, params: t, set: n, defaults: i, selector: a }) {
  var c, l, s;
  let d, g, p;
  if (B(r) && e.transform !== "strict") {
    let b = o.replace("-directive", ""), f = r, { colorScheme: h, extend: m, css: y } = f, k = oo(f, ["colorScheme", "extend", "css"]), w = m || {}, { colorScheme: C } = w, O = oo(w, ["colorScheme"]), z = h || {}, { dark: x } = z, W = oo(z, ["dark"]), F = C || {}, { dark: K } = F, H = oo(F, ["dark"]), M = B(k) ? this._toVariables({ [b]: X(X({}, k), O) }, e) : {}, I = B(W) ? this._toVariables({ [b]: X(X({}, W), H) }, e) : {}, E = B(x) ? this._toVariables({ [b]: X(X({}, x), K) }, e) : {}, [G, $] = [(c = M.declarations) != null ? c : "", M.tokens || []], [Z, P] = [(l = I.declarations) != null ? l : "", I.tokens || []], [Q, q] = [(s = E.declarations) != null ? s : "", E.tokens || []], S = this.transformCSS(b, `${G}${Z}`, "light", "variable", e, n, i, a), D = this.transformCSS(b, Q, "dark", "variable", e, n, i, a);
    d = `${S}${D}`, g = [.../* @__PURE__ */ new Set([...$, ...P, ...q])], p = to(y, { dt: so });
  }
  return { css: d, tokens: g, style: p };
}, getPresetC({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var i;
  let { preset: a, options: c } = r, l = (i = a?.components) == null ? void 0 : i[o];
  return this.getPreset({ name: o, preset: l, options: c, params: e, set: t, defaults: n });
}, getPresetD({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var i, a;
  let c = o.replace("-directive", ""), { preset: l, options: s } = r, d = ((i = l?.components) == null ? void 0 : i[c]) || ((a = l?.directives) == null ? void 0 : a[c]);
  return this.getPreset({ name: c, preset: d, options: s, params: e, set: t, defaults: n });
}, applyDarkColorScheme(o) {
  return !(o.darkModeSelector === "none" || o.darkModeSelector === !1);
}, getColorSchemeOption(o, r) {
  var e;
  return this.applyDarkColorScheme(o) ? this.regex.resolve(o.darkModeSelector === !0 ? r.options.darkModeSelector : (e = o.darkModeSelector) != null ? e : r.options.darkModeSelector) : [];
}, getLayerOrder(o, r = {}, e, t) {
  let { cssLayer: n } = r;
  return n ? `@layer ${to(n.order || n.name || "primeui", e)}` : "";
}, getCommonStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: n, defaults: i }) {
  let a = this.getCommon({ name: o, theme: r, params: e, set: n, defaults: i }), c = Object.entries(t).reduce((l, [s, d]) => l.push(`${s}="${d}"`) && l, []).join(" ");
  return Object.entries(a || {}).reduce((l, [s, d]) => {
    if (io(d) && Object.hasOwn(d, "css")) {
      let g = wo(d.css), p = `${s}-variables`;
      l.push(`<style type="text/css" data-primevue-style-id="${p}" ${c}>${g}</style>`);
    }
    return l;
  }, []).join("");
}, getStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: n, defaults: i }) {
  var a;
  let c = { name: o, theme: r, params: e, set: n, defaults: i }, l = (a = o.includes("-directive") ? this.getPresetD(c) : this.getPresetC(c)) == null ? void 0 : a.css, s = Object.entries(t).reduce((d, [g, p]) => d.push(`${g}="${p}"`) && d, []).join(" ");
  return l ? `<style type="text/css" data-primevue-style-id="${o}-variables" ${s}>${wo(l)}</style>` : "";
}, createTokens(o = {}, r, e = "", t = "", n = {}) {
  let i = function(c, l = {}, s = []) {
    if (s.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: c, path: this.path, paths: l, value: void 0 };
    s.push(this.path), l.name = this.path, l.binding || (l.binding = {});
    let d = this.value;
    if (typeof this.value == "string" && Co.test(this.value)) {
      let g = this.value.trim().replace(Co, (p) => {
        var b;
        let f = p.slice(1, -1), h = this.tokens[f];
        if (!h) return console.warn(`Token not found for path: ${f}`), "__UNRESOLVED__";
        let m = h.computed(c, l, s);
        return Array.isArray(m) && m.length === 2 ? `light-dark(${m[0].value},${m[1].value})` : (b = m?.value) != null ? b : "__UNRESOLVED__";
      });
      d = oe.test(g.replace(re, "0")) ? `calc(${g})` : g;
    }
    return ir(l.binding) && delete l.binding, s.pop(), { colorScheme: c, path: this.path, paths: l, value: d.includes("__UNRESOLVED__") ? void 0 : d };
  }, a = (c, l, s) => {
    Object.entries(c).forEach(([d, g]) => {
      let p = co(d, r.variable.excludedKeyRegex) ? l : l ? `${l}.${hr(d)}` : hr(d), b = s ? `${s}.${d}` : d;
      io(g) ? a(g, p, b) : (n[p] || (n[p] = { paths: [], computed: (f, h = {}, m = []) => {
        if (n[p].paths.length === 1) return n[p].paths[0].computed(n[p].paths[0].scheme, h.binding, m);
        if (f && f !== "none") for (let y = 0; y < n[p].paths.length; y++) {
          let k = n[p].paths[y];
          if (k.scheme === f) return k.computed(f, h.binding, m);
        }
        return n[p].paths.map((y) => y.computed(y.scheme, h[y.scheme], m));
      } }), n[p].paths.push({ path: b, value: g, scheme: b.includes("colorScheme.light") ? "light" : b.includes("colorScheme.dark") ? "dark" : "none", computed: i, tokens: n }));
    });
  };
  return a(o, e, t), n;
}, getTokenValue(o, r, e) {
  var t;
  let n = ((c) => c.split(".").filter((l) => !co(l.toLowerCase(), e.variable.excludedKeyRegex)).join("."))(r), i = r.includes("colorScheme.light") ? "light" : r.includes("colorScheme.dark") ? "dark" : void 0, a = [(t = o[n]) == null ? void 0 : t.computed(i)].flat().filter((c) => c);
  return a.length === 1 ? a[0].value : a.reduce((c = {}, l) => {
    let s = l, { colorScheme: d } = s, g = oo(s, ["colorScheme"]);
    return c[d] = g, c;
  }, void 0);
}, getSelectorRule(o, r, e, t) {
  return e === "class" || e === "attr" ? go(B(r) ? `${o}${r},${o} ${r}` : o, t) : go(o, go(r ?? ":root,:host", t));
}, transformCSS(o, r, e, t, n = {}, i, a, c) {
  if (B(r)) {
    let { cssLayer: l } = n;
    if (t !== "style") {
      let s = this.getColorSchemeOption(n, a);
      r = e === "dark" ? s.reduce((d, { type: g, selector: p }) => (B(p) && (d += p.includes("[CSS]") ? p.replace("[CSS]", r) : this.getSelectorRule(p, c, g, r)), d), "") : go(c ?? ":root,:host", r);
    }
    if (l) {
      let s = { name: "primeui" };
      io(l) && (s.name = to(l.name, { name: o, type: t })), B(s.name) && (r = go(`@layer ${s.name}`, r), i?.layerNames(s.name));
    }
    return r;
  }
  return "";
} }, A = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(o = {}) {
  let { theme: r } = o;
  r && (this._theme = Jo(X({}, r), { options: X(X({}, this.defaults.options), r.options) }), this._tokens = J.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
  this.update({ theme: o }), ro.emit("theme:change", o);
}, getPreset() {
  return this.preset;
}, setPreset(o) {
  this._theme = Jo(X({}, this.theme), { preset: o }), this._tokens = J.createTokens(o, this.defaults), this.clearLoadedStyleNames(), ro.emit("preset:change", o), ro.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(o) {
  this._theme = Jo(X({}, this.theme), { options: o }), this.clearLoadedStyleNames(), ro.emit("options:change", o), ro.emit("theme:change", this.theme);
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
}, getCommon(o = "", r) {
  return J.getCommon({ name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(o = "", r) {
  let e = { name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return J.getPresetC(e);
}, getDirective(o = "", r) {
  let e = { name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return J.getPresetD(e);
}, getCustomPreset(o = "", r, e, t) {
  let n = { name: o, preset: r, options: this.options, selector: e, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return J.getPreset(n);
}, getLayerOrderCSS(o = "") {
  return J.getLayerOrder(o, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(o = "", r, e = "style", t) {
  return J.transformCSS(o, r, t, e, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(o = "", r, e = {}) {
  return J.getCommonStyleSheet({ name: o, theme: this.theme, params: r, props: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(o, r, e = {}) {
  return J.getStyleSheet({ name: o, theme: this.theme, params: r, props: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(o) {
  this._loadingStyles.add(o);
}, onStyleUpdated(o) {
  this._loadingStyles.add(o);
}, onStyleLoaded(o, { name: r }) {
  this._loadingStyles.size && (this._loadingStyles.delete(r), ro.emit(`theme:${r}:load`, o), !this._loadingStyles.size && ro.emit("theme:load"));
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
  return xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, xo(o);
}
function vr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function yr(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? vr(Object(e), !0).forEach(function(t) {
      Ot(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : vr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function Ot(o, r, e) {
  return (r = _t(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function _t(o) {
  var r = Et(o, "string");
  return xo(r) == "symbol" ? r : r + "";
}
function Et(o, r) {
  if (xo(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (xo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function Tt(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  gr() && gr().components ? Jr(o) : r ? o() : Ge(o);
}
var At = 0;
function Nt(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = no(!1), t = no(o), n = no(null), i = mt() ? window.document : void 0, a = r.document, c = a === void 0 ? i : a, l = r.immediate, s = l === void 0 ? !0 : l, d = r.manual, g = d === void 0 ? !1 : d, p = r.name, b = p === void 0 ? "style_".concat(++At) : p, f = r.id, h = f === void 0 ? void 0 : f, m = r.media, y = m === void 0 ? void 0 : m, k = r.nonce, w = k === void 0 ? void 0 : k, C = r.first, O = C === void 0 ? !1 : C, z = r.onMounted, x = z === void 0 ? void 0 : z, W = r.onUpdated, F = W === void 0 ? void 0 : W, K = r.onLoad, H = K === void 0 ? void 0 : K, M = r.props, I = M === void 0 ? {} : M, E = function() {
  }, G = function(P) {
    var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (c) {
      var q = yr(yr({}, I), Q), S = q.name || b, D = q.id || h, eo = q.nonce || w;
      n.value = c.querySelector('style[data-primevue-style-id="'.concat(S, '"]')) || c.getElementById(D) || c.createElement("style"), n.value.isConnected || (t.value = P || o, Zo(n.value, {
        type: "text/css",
        id: D,
        media: y,
        nonce: eo
      }), O ? c.head.prepend(n.value) : c.head.appendChild(n.value), bt(n.value, "data-primevue-style-id", S), Zo(n.value, q), n.value.onload = function(V) {
        return H?.(V, {
          name: S
        });
      }, x?.(S)), !e.value && (E = ko(t, function(V) {
        n.value.textContent = V, F?.(S);
      }, {
        immediate: !0
      }), e.value = !0);
    }
  }, $ = function() {
    !c || !e.value || (E(), pt(n.value) && c.head.removeChild(n.value), e.value = !1, n.value = null);
  };
  return s && !g && Tt(G), {
    id: h,
    name: b,
    el: n,
    css: t,
    unload: $,
    load: G,
    isLoaded: Ke(e)
  };
}
function $o(o) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, $o(o);
}
var kr, wr, Cr, xr;
function $r(o, r) {
  return Lt(o) || Dt(o, r) || Pt(o, r) || zt();
}
function zt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pt(o, r) {
  if (o) {
    if (typeof o == "string") return Br(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Br(o, r) : void 0;
  }
}
function Br(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++) t[e] = o[e];
  return t;
}
function Dt(o, r) {
  var e = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (e != null) {
    var t, n, i, a, c = [], l = !0, s = !1;
    try {
      if (i = (e = e.call(o)).next, r !== 0) for (; !(l = (t = i.call(e)).done) && (c.push(t.value), c.length !== r); l = !0) ;
    } catch (d) {
      s = !0, n = d;
    } finally {
      try {
        if (!l && e.return != null && (a = e.return(), Object(a) !== a)) return;
      } finally {
        if (s) throw n;
      }
    }
    return c;
  }
}
function Lt(o) {
  if (Array.isArray(o)) return o;
}
function Rr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Xo(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Rr(Object(e), !0).forEach(function(t) {
      jt(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Rr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function jt(o, r, e) {
  return (r = Ft(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Ft(o) {
  var r = It(o, "string");
  return $o(r) == "symbol" ? r : r + "";
}
function It(o, r) {
  if ($o(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if ($o(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function Ao(o, r) {
  return r || (r = o.slice(0)), Object.freeze(Object.defineProperties(o, { raw: { value: Object.freeze(r) } }));
}
var Wt = function(r) {
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
}, Mt = {}, Ut = {}, fo = {
  name: "base",
  css: Wt,
  style: St,
  classes: Mt,
  inlineStyles: Ut,
  load: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, n = t(To(kr || (kr = Ao(["", ""])), r));
    return B(n) ? Nt(wo(n), Xo({
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
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return A.transformCSS(e.name || r.name, "".concat(n).concat(To(wr || (wr = Ao(["", ""])), t)));
    });
  },
  getCommonTheme: function(r) {
    return A.getCommon(this.name, r);
  },
  getComponentTheme: function(r) {
    return A.getComponent(this.name, r);
  },
  getDirectiveTheme: function(r) {
    return A.getDirective(this.name, r);
  },
  getPresetTheme: function(r, e, t) {
    return A.getCustomPreset(this.name, r, e, t);
  },
  getLayerOrderThemeCSS: function() {
    return A.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var t = to(this.css, {
        dt: so
      }) || "", n = wo(To(Cr || (Cr = Ao(["", "", ""])), t, r)), i = Object.entries(e).reduce(function(a, c) {
        var l = $r(c, 2), s = l[0], d = l[1];
        return a.push("".concat(s, '="').concat(d, '"')) && a;
      }, []).join(" ");
      return B(n) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(i, ">").concat(n, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return A.getCommonStyleSheet(this.name, r, e);
  },
  getThemeStyleSheet: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [A.getStyleSheet(this.name, r, e)];
    if (this.style) {
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = To(xr || (xr = Ao(["", ""])), to(this.style, {
        dt: so
      })), a = wo(A.transformCSS(n, i)), c = Object.entries(e).reduce(function(l, s) {
        var d = $r(s, 2), g = d[0], p = d[1];
        return l.push("".concat(g, '="').concat(p, '"')) && l;
      }, []).join(" ");
      B(a) && t.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(c, ">").concat(a, "</style>"));
    }
    return t.join("");
  },
  extend: function(r) {
    return Xo(Xo({}, this), {}, {
      css: void 0,
      style: void 0
    }, r);
  }
}, No = Kr();
function Bo(o) {
  "@babel/helpers - typeof";
  return Bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Bo(o);
}
function Sr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function zo(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Sr(Object(e), !0).forEach(function(t) {
      Ht(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Sr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function Ht(o, r, e) {
  return (r = qt(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function qt(o) {
  var r = Vt(o, "string");
  return Bo(r) == "symbol" ? r : r + "";
}
function Vt(o, r) {
  if (Bo(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (Bo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
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
function Yt(o, r) {
  var e = {
    config: Ze(r)
  };
  return o.config.globalProperties.$primevue = e, o.provide(Xt, e), Kt(), Gt(o, e), e;
}
var po = [];
function Kt() {
  ro.clear(), po.forEach(function(o) {
    return o?.();
  }), po = [];
}
function Gt(o, r) {
  var e = no(!1), t = function() {
    var s;
    if (((s = r.config) === null || s === void 0 ? void 0 : s.theme) !== "none" && !A.isStyleNameLoaded("common")) {
      var d, g, p = ((d = fo.getCommonTheme) === null || d === void 0 ? void 0 : d.call(fo)) || {}, b = p.primitive, f = p.semantic, h = p.global, m = p.style, y = {
        nonce: (g = r.config) === null || g === void 0 || (g = g.csp) === null || g === void 0 ? void 0 : g.nonce
      };
      fo.load(b?.css, zo({
        name: "primitive-variables"
      }, y)), fo.load(f?.css, zo({
        name: "semantic-variables"
      }, y)), fo.load(h?.css, zo({
        name: "global-variables"
      }, y)), fo.loadStyle(zo({
        name: "global-style"
      }, y), m), A.setLoadedStyleName("common");
    }
  };
  ro.on("theme:change", function(l) {
    e.value || (o.config.globalProperties.$primevue.config.theme = l, e.value = !0);
  });
  var n = ko(r.config, function(l, s) {
    No.emit("config:change", {
      newValue: l,
      oldValue: s
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = ko(function() {
    return r.config.ripple;
  }, function(l, s) {
    No.emit("config:ripple:change", {
      newValue: l,
      oldValue: s
    });
  }, {
    immediate: !0,
    deep: !0
  }), a = ko(function() {
    return r.config.theme;
  }, function(l, s) {
    e.value || A.setTheme(l), r.config.unstyled || t(), e.value = !1, No.emit("config:theme:change", {
      newValue: l,
      oldValue: s
    });
  }, {
    immediate: !0,
    deep: !1
  }), c = ko(function() {
    return r.config.unstyled;
  }, function(l, s) {
    !l && r.config.theme && t(), No.emit("config:unstyled:change", {
      newValue: l,
      oldValue: s
    });
  }, {
    immediate: !0,
    deep: !0
  });
  po.push(n), po.push(i), po.push(a), po.push(c);
}
var Zt = {
  install: function(r, e) {
    var t = ft(Jt, e);
    Yt(r, t);
  }
}, Qt = { transitionDuration: "{transition.duration}" }, on = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, rn = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, en = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, tn = { root: Qt, panel: on, header: rn, content: en }, nn = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, an = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, cn = { padding: "{list.padding}", gap: "{list.gap}" }, sn = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, ln = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, dn = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, un = { borderRadius: "{border.radius.sm}" }, fn = { padding: "{list.option.padding}" }, gn = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, pn = { root: nn, overlay: an, list: cn, option: sn, optionGroup: ln, dropdown: dn, chip: un, emptyMessage: fn, colorScheme: gn }, mn = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, bn = { size: "1rem" }, hn = { borderColor: "{content.background}", offset: "-0.75rem" }, vn = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, yn = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, kn = { root: mn, icon: bn, group: hn, lg: vn, xl: yn }, wn = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, Cn = { size: "0.5rem" }, xn = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, $n = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, Bn = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, Rn = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Sn = { root: wn, dot: Cn, sm: xn, lg: $n, xl: Bn, colorScheme: Rn }, On = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, _n = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, En = { primitive: On, semantic: _n }, Tn = { borderRadius: "{content.border.radius}" }, An = { root: Tn }, Nn = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, zn = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Pn = { color: "{navigation.item.icon.color}" }, Dn = { root: Nn, item: zn, separator: Pn }, Ln = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, jn = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, Fn = { root: Ln, colorScheme: jn }, In = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, Wn = { padding: "1.25rem", gap: "0.5rem" }, Mn = { gap: "0.5rem" }, Un = { fontSize: "1.25rem", fontWeight: "500" }, Hn = { color: "{text.muted.color}" }, qn = { root: In, body: Wn, caption: Mn, title: Un, subtitle: Hn }, Vn = { transitionDuration: "{transition.duration}" }, Jn = { gap: "0.25rem" }, Xn = { padding: "1rem", gap: "0.5rem" }, Yn = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Kn = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, Gn = { root: Vn, content: Jn, indicatorList: Xn, indicator: Yn, colorScheme: Kn }, Zn = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Qn = { width: "2.5rem", color: "{form.field.icon.color}" }, oa = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, ra = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, ea = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, ta = { color: "{form.field.icon.color}" }, na = { root: Zn, dropdown: Qn, overlay: oa, list: ra, option: ea, clearIcon: ta }, aa = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, ia = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, ca = { root: aa, icon: ia }, sa = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, la = { width: "2rem", height: "2rem" }, da = { size: "1rem" }, ua = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, fa = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, ga = { root: sa, image: la, icon: da, removeIcon: ua, colorScheme: fa }, pa = { transitionDuration: "{transition.duration}" }, ma = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ba = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, ha = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, va = { root: pa, preview: ma, panel: ba, colorScheme: ha }, ya = { size: "2rem", color: "{overlay.modal.color}" }, ka = { gap: "1rem" }, wa = { icon: ya, content: ka }, Ca = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, xa = { padding: "{overlay.popover.padding}", gap: "1rem" }, $a = { size: "1.5rem", color: "{overlay.popover.color}" }, Ba = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, Ra = { root: Ca, content: xa, icon: $a, footer: Ba }, Sa = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Oa = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, _a = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Ea = { mobileIndent: "1rem" }, Ta = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Aa = { borderColor: "{content.border.color}" }, Na = { root: Sa, list: Oa, item: _a, submenu: Ea, submenuIcon: Ta, separator: Aa }, za = `
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
`, Pa = { transitionDuration: "{transition.duration}" }, Da = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, La = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ja = { fontWeight: "600" }, Fa = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Ia = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Wa = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Ma = { fontWeight: "600" }, Ua = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Ha = { color: "{primary.color}" }, qa = { width: "0.5rem" }, Va = { width: "1px", color: "{primary.color}" }, Ja = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Xa = { size: "2rem" }, Ya = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ka = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, Ga = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Za = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Qa = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, oi = `
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, ri = { root: Pa, header: Da, headerCell: La, columnTitle: ja, row: Fa, bodyCell: Ia, footerCell: Wa, columnFooter: Ma, footer: Ua, dropPoint: Ha, columnResizer: qa, resizeIndicator: Va, sortIcon: Ja, loadingIcon: Xa, rowToggleButton: Ya, filter: Ka, paginatorTop: Ga, paginatorBottom: Za, colorScheme: Qa, css: oi }, ei = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, ti = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, ni = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, ai = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, ii = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, ci = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, si = { root: ei, header: ti, content: ni, footer: ai, paginatorTop: ii, paginatorBottom: ci }, li = { transitionDuration: "{transition.duration}" }, di = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, ui = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, fi = { gap: "0.5rem", fontWeight: "500" }, gi = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, pi = { color: "{form.field.icon.color}" }, mi = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, bi = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, hi = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, vi = { margin: "0.5rem 0 0 0" }, yi = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, ki = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, wi = { margin: "0.5rem 0 0 0" }, Ci = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, xi = { margin: "0.5rem 0 0 0" }, $i = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, Bi = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, Ri = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, Si = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, Oi = { root: li, panel: di, header: ui, title: fi, dropdown: gi, inputIcon: pi, selectMonth: mi, selectYear: bi, group: hi, dayView: vi, weekDay: yi, date: ki, monthView: wi, month: Ci, yearView: xi, year: $i, buttonbar: Bi, timePicker: Ri, colorScheme: Si }, _i = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, Ei = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, Ti = { fontSize: "1.25rem", fontWeight: "600" }, Ai = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Ni = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, zi = { root: _i, header: Ei, title: Ti, content: Ai, footer: Ni }, Pi = { borderColor: "{content.border.color}" }, Di = { background: "{content.background}", color: "{text.color}" }, Li = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, ji = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, Fi = { root: Pi, content: Di, horizontal: Li, vertical: ji }, Ii = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, Wi = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Mi = { root: Ii, item: Wi }, Ui = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, Hi = { padding: "{overlay.modal.padding}" }, qi = { fontSize: "1.5rem", fontWeight: "600" }, Vi = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Ji = { padding: "{overlay.modal.padding}" }, Xi = { root: Ui, header: Hi, title: qi, content: Vi, footer: Ji }, Yi = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, Ki = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Gi = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, Zi = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Qi = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, oc = { toolbar: Yi, toolbarItem: Ki, overlay: Gi, overlayOption: Zi, content: Qi }, rc = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, ec = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, tc = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, nc = { padding: "0" }, ac = { root: rc, legend: ec, toggleIcon: tc, content: nc }, ic = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, cc = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, sc = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, lc = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, dc = { gap: "0.5rem" }, uc = { height: "0.25rem" }, fc = { gap: "0.5rem" }, gc = { root: ic, header: cc, content: sc, file: lc, fileList: dc, progressbar: uc, basic: fc }, pc = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, mc = { active: { top: "-1.25rem" } }, bc = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, hc = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, vc = { root: pc, over: mc, in: bc, on: hc }, yc = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, kc = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, wc = { size: "1.5rem" }, Cc = { background: "{content.background}", padding: "1rem 0.25rem" }, xc = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, $c = { size: "1rem" }, Bc = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, Rc = { gap: "0.5rem", padding: "1rem" }, Sc = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Oc = { background: "rgba(0, 0, 0, 0.5)" }, _c = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, Ec = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Tc = { size: "1.5rem" }, Ac = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, Nc = { root: yc, navButton: kc, navIcon: wc, thumbnailsContent: Cc, thumbnailNavButton: xc, thumbnailNavButtonIcon: $c, caption: Bc, indicatorList: Rc, indicatorButton: Sc, insetIndicatorList: Oc, insetIndicatorButton: _c, closeButton: Ec, closeButtonIcon: Tc, colorScheme: Ac }, zc = { color: "{form.field.icon.color}" }, Pc = { icon: zc }, Dc = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, Lc = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, jc = { root: Dc, input: Lc }, Fc = { transitionDuration: "{transition.duration}" }, Ic = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, Wc = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, Mc = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Uc = { root: Fc, preview: Ic, toolbar: Wc, action: Mc }, Hc = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, qc = { handle: Hc }, Vc = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, Jc = { fontWeight: "500" }, Xc = { size: "1rem" }, Yc = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, Kc = { root: Vc, text: Jc, icon: Xc, colorScheme: Yc }, Gc = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, Zc = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, Qc = { root: Gc, display: Zc }, os = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, rs = { borderRadius: "{border.radius.sm}" }, es = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, ts = { root: os, chip: rs, colorScheme: es }, ns = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, as = { addon: ns }, is = { transitionDuration: "{transition.duration}" }, cs = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, ss = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, ls = { root: is, button: cs, colorScheme: ss }, ds = { gap: "0.5rem" }, us = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, fs = { root: ds, input: us }, gs = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, ps = { root: gs }, ms = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, bs = { background: "{primary.color}" }, hs = { background: "{content.border.color}" }, vs = { color: "{text.muted.color}" }, ys = { root: ms, value: bs, range: hs, text: vs }, ks = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, ws = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Cs = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, xs = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, $s = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, Bs = { padding: "{list.option.padding}" }, Rs = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, Ss = { root: ks, list: ws, option: Cs, optionGroup: xs, checkmark: $s, emptyMessage: Bs, colorScheme: Rs }, Os = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, _s = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, Es = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Ts = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, As = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Ns = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, zs = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Ps = { borderColor: "{content.border.color}" }, Ds = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ls = { root: Os, baseItem: _s, item: Es, overlay: Ts, submenu: As, submenuLabel: Ns, submenuIcon: zs, separator: Ps, mobileButton: Ds }, js = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Fs = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Is = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Ws = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, Ms = { borderColor: "{content.border.color}" }, Us = { root: js, list: Fs, item: Is, submenuLabel: Ws, separator: Ms }, Hs = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, qs = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, Vs = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Js = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, Xs = { borderColor: "{content.border.color}" }, Ys = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ks = { root: Hs, baseItem: qs, item: Vs, submenu: Js, separator: Xs, mobileButton: Ys }, Gs = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Zs = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, Qs = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, ol = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, rl = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, el = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, tl = { root: { borderWidth: "1px" } }, nl = { content: { padding: "0" } }, al = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, il = { root: Gs, content: Zs, text: Qs, icon: ol, closeButton: rl, closeIcon: el, outlined: tl, simple: nl, colorScheme: al }, cl = { borderRadius: "{content.border.radius}", gap: "1rem" }, sl = { background: "{content.border.color}", size: "0.5rem" }, ll = { gap: "0.5rem" }, dl = { size: "0.5rem" }, ul = { size: "1rem" }, fl = { verticalGap: "0.5rem", horizontalGap: "1rem" }, gl = { root: cl, meters: sl, label: ll, labelMarker: dl, labelIcon: ul, labelList: fl }, pl = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, ml = { width: "2.5rem", color: "{form.field.icon.color}" }, bl = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, hl = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, vl = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, yl = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, kl = { color: "{form.field.icon.color}" }, wl = { borderRadius: "{border.radius.sm}" }, Cl = { padding: "{list.option.padding}" }, xl = { root: pl, dropdown: ml, overlay: bl, list: hl, option: vl, optionGroup: yl, chip: wl, clearIcon: kl, emptyMessage: Cl }, $l = { gap: "1.125rem" }, Bl = { gap: "0.5rem" }, Rl = { root: $l, controls: Bl }, Sl = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, Ol = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, _l = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, El = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, Tl = { root: Sl, node: Ol, nodeToggleButton: _l, connector: El }, Al = { outline: { width: "2px", color: "{content.background}" } }, Nl = { root: Al }, zl = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Pl = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Dl = { color: "{text.muted.color}" }, Ll = { maxWidth: "2.5rem" }, jl = { root: zl, navButton: Pl, currentPageReport: Dl, jumpToPageInput: Ll }, Fl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Il = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, Wl = { padding: "0.375rem 1.125rem" }, Ml = { fontWeight: "600" }, Ul = { padding: "0 1.125rem 1.125rem 1.125rem" }, Hl = { padding: "0 1.125rem 1.125rem 1.125rem" }, ql = { root: Fl, header: Il, toggleableHeader: Wl, title: Ml, content: Ul, footer: Hl }, Vl = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Jl = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, Xl = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Yl = { indent: "1rem" }, Kl = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, Gl = { root: Vl, panel: Jl, item: Xl, submenu: Yl, submenuIcon: Kl }, Zl = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, Ql = { color: "{form.field.icon.color}" }, od = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, rd = { gap: "0.5rem" }, ed = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, td = { meter: Zl, icon: Ql, overlay: od, content: rd, colorScheme: ed }, nd = { gap: "1.125rem" }, ad = { gap: "0.5rem" }, id = { root: nd, controls: ad }, cd = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, sd = { padding: "{overlay.popover.padding}" }, ld = { root: cd, content: sd }, dd = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, ud = { background: "{primary.color}" }, fd = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, gd = { root: dd, value: ud, label: fd }, pd = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, md = { colorScheme: pd }, bd = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, hd = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, vd = { root: bd, icon: hd }, yd = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, kd = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, wd = { root: yd, icon: kd }, Cd = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, xd = { colorScheme: Cd }, $d = { transitionDuration: "{transition.duration}" }, Bd = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Rd = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, Sd = { root: $d, bar: Bd, colorScheme: Rd }, Od = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, _d = { width: "2.5rem", color: "{form.field.icon.color}" }, Ed = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Td = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Ad = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Nd = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, zd = { color: "{form.field.icon.color}" }, Pd = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, Dd = { padding: "{list.option.padding}" }, Ld = { root: Od, dropdown: _d, overlay: Ed, list: Td, option: Ad, optionGroup: Nd, clearIcon: zd, checkmark: Pd, emptyMessage: Dd }, jd = { borderRadius: "{form.field.border.radius}" }, Fd = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, Id = { root: jd, colorScheme: Fd }, Wd = { borderRadius: "{content.border.radius}" }, Md = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, Ud = { root: Wd, colorScheme: Md }, Hd = { transitionDuration: "{transition.duration}" }, qd = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, Vd = { background: "{primary.color}" }, Jd = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xd = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, Yd = { root: Hd, track: qd, range: Vd, handle: Jd, colorScheme: Xd }, Kd = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Gd = { root: Kd }, Zd = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, Qd = { root: Zd }, ou = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, ru = { background: "{content.border.color}" }, eu = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, tu = { root: ou, gutter: ru, handle: eu }, nu = { transitionDuration: "{transition.duration}" }, au = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, iu = { padding: "0.5rem", gap: "1rem" }, cu = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, su = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, lu = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, du = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, uu = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, fu = { root: nu, separator: au, step: iu, stepHeader: cu, stepTitle: su, stepNumber: lu, steppanels: du, steppanel: uu }, gu = { transitionDuration: "{transition.duration}" }, pu = { background: "{content.border.color}" }, mu = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, bu = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, hu = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, vu = { root: gu, separator: pu, itemLink: mu, itemLabel: bu, itemNumber: hu }, yu = { transitionDuration: "{transition.duration}" }, ku = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, wu = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Cu = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, xu = { height: "1px", bottom: "-1px", background: "{primary.color}" }, $u = { root: yu, tablist: ku, item: wu, itemIcon: Cu, activeBar: xu }, Bu = { transitionDuration: "{transition.duration}" }, Ru = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Su = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Ou = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, _u = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Eu = { height: "1px", bottom: "-1px", background: "{primary.color}" }, Tu = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, Au = { root: Bu, tablist: Ru, tab: Su, tabpanel: Ou, navButton: _u, activeBar: Eu, colorScheme: Tu }, Nu = { transitionDuration: "{transition.duration}" }, zu = { background: "{content.background}", borderColor: "{content.border.color}" }, Pu = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Du = { background: "{content.background}", color: "{content.color}" }, Lu = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, ju = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, Fu = { root: Nu, tabList: zu, tab: Pu, tabPanel: Du, navButton: Lu, colorScheme: ju }, Iu = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, Wu = { size: "0.75rem" }, Mu = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Uu = { root: Iu, icon: Wu, colorScheme: Mu }, Hu = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, qu = { gap: "0.25rem" }, Vu = { margin: "2px 0" }, Ju = { root: Hu, prompt: qu, commandResponse: Vu }, Xu = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Yu = { root: Xu }, Ku = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Gu = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Zu = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Qu = { mobileIndent: "1rem" }, of = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, rf = { borderColor: "{content.border.color}" }, ef = { root: Ku, list: Gu, item: Zu, submenu: Qu, submenuIcon: of, separator: rf }, tf = { minHeight: "5rem" }, nf = { eventContent: { padding: "1rem 0" } }, af = { eventContent: { padding: "0 1rem" } }, cf = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, sf = { color: "{content.border.color}", size: "2px" }, lf = { event: tf, horizontal: nf, vertical: af, eventMarker: cf, eventConnector: sf }, df = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, uf = { size: "1.125rem" }, ff = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, gf = { gap: "0.5rem" }, pf = { fontWeight: "500", fontSize: "1rem" }, mf = { fontWeight: "500", fontSize: "0.875rem" }, bf = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, hf = { size: "1rem" }, vf = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, yf = { root: df, icon: uf, content: ff, text: gf, summary: pf, detail: mf, closeButton: bf, closeIcon: hf, colorScheme: vf }, kf = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, wf = { disabledColor: "{form.field.disabled.color}" }, Cf = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, xf = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, $f = { root: kf, icon: wf, content: Cf, colorScheme: xf }, Bf = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, Rf = { borderRadius: "50%", size: "1rem" }, Sf = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, Of = { root: Bf, handle: Rf, colorScheme: Sf }, _f = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, Ef = { root: _f }, Tf = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, Af = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, Nf = { root: Tf, colorScheme: Af }, zf = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, Pf = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, Df = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, Lf = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, jf = { size: "2rem" }, Ff = { margin: "0 0 0.5rem 0" }, If = `
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Wf = { root: zf, node: Pf, nodeIcon: Df, nodeToggleButton: Lf, loadingIcon: jf, filter: Ff, css: If }, Mf = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Uf = { width: "2.5rem", color: "{form.field.icon.color}" }, Hf = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, qf = { padding: "{list.padding}" }, Vf = { padding: "{list.option.padding}" }, Jf = { borderRadius: "{border.radius.sm}" }, Xf = { color: "{form.field.icon.color}" }, Yf = { root: Mf, dropdown: Uf, overlay: Hf, tree: qf, emptyMessage: Vf, chip: Jf, clearIcon: Xf }, Kf = { transitionDuration: "{transition.duration}" }, Gf = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, Zf = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Qf = { fontWeight: "600" }, o0 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, r0 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, e0 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, t0 = { fontWeight: "600" }, n0 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, a0 = { width: "0.5rem" }, i0 = { width: "1px", color: "{primary.color}" }, c0 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, s0 = { size: "2rem" }, l0 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, d0 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, u0 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, f0 = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, g0 = `
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, p0 = { root: Kf, header: Gf, headerCell: Zf, columnTitle: Qf, row: o0, bodyCell: r0, footerCell: e0, columnFooter: t0, footer: n0, columnResizer: a0, resizeIndicator: i0, sortIcon: c0, loadingIcon: s0, nodeToggleButton: l0, paginatorTop: d0, paginatorBottom: u0, colorScheme: f0, css: g0 }, m0 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, b0 = { loader: m0 }, h0 = Object.defineProperty, v0 = Object.defineProperties, y0 = Object.getOwnPropertyDescriptors, Or = Object.getOwnPropertySymbols, k0 = Object.prototype.hasOwnProperty, w0 = Object.prototype.propertyIsEnumerable, _r = (o, r, e) => r in o ? h0(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, Er, C0 = (Er = ((o, r) => {
  for (var e in r || (r = {})) k0.call(r, e) && _r(o, e, r[e]);
  if (Or) for (var e of Or(r)) w0.call(r, e) && _r(o, e, r[e]);
  return o;
})({}, En), v0(Er, y0({ components: { accordion: tn, autocomplete: pn, avatar: kn, badge: Sn, blockui: An, breadcrumb: Dn, button: Fn, card: qn, carousel: Gn, cascadeselect: na, checkbox: ca, chip: ga, colorpicker: va, confirmdialog: wa, confirmpopup: Ra, contextmenu: Na, datatable: ri, dataview: si, datepicker: Oi, dialog: zi, divider: Fi, dock: Mi, drawer: Xi, editor: oc, fieldset: ac, fileupload: gc, floatlabel: vc, galleria: Nc, iconfield: Pc, iftalabel: jc, image: Uc, imagecompare: qc, inlinemessage: Kc, inplace: Qc, inputchips: ts, inputgroup: as, inputnumber: ls, inputotp: fs, inputtext: ps, knob: ys, listbox: Ss, megamenu: Ls, menu: Us, menubar: Ks, message: il, metergroup: gl, multiselect: xl, orderlist: Rl, organizationchart: Tl, overlaybadge: Nl, paginator: jl, panel: ql, panelmenu: Gl, password: td, picklist: id, popover: ld, progressbar: gd, progressspinner: md, radiobutton: vd, rating: wd, ripple: xd, scrollpanel: Sd, select: Ld, selectbutton: Id, skeleton: Ud, slider: Yd, speeddial: Gd, splitbutton: Qd, splitter: tu, stepper: fu, steps: vu, tabmenu: $u, tabs: Au, tabview: Fu, tag: Uu, terminal: Ju, textarea: Yu, tieredmenu: ef, timeline: lf, toast: yf, togglebutton: $f, toggleswitch: Of, toolbar: Ef, tooltip: Nf, tree: Wf, treeselect: Yf, treetable: p0, virtualscroller: b0 }, css: za })));
const or = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const r = Math.random() * 16 | 0;
    return (o == "x" ? r : r & 3 | 8).toString(16);
  })
}), ae = async () => ({
  f: {
    name: (o) => `${o.name}${o.id}`
  }
}), ie = async () => ({
  set: async (o) => {
    console.log("--theme");
    try {
      if (!o.el_id)
        throw new Error("[el_id] is required");
      const r = o.name, e = document.getElementById(o.el_id);
      if (!e)
        throw new Error("[el_id] is invalid");
      ((t) => {
        const n = (i) => {
          ((a) => {
            const c = a.getAttribute("data-ce");
            if (!c)
              return;
            const l = JSON.parse(c).filter((s) => s?.k.startsWith("t-"));
            if (l.length != 0)
              for (const s of l) {
                const d = s.k, g = s.v.split(" ");
                if (d == `t-${r}-class`)
                  for (const p of g)
                    a.classList.add(p);
                else
                  for (const p of g)
                    a.classList.remove(p);
              }
          })(i);
        };
        for (const i of t.getElementsByTagName("*"))
          n(i);
        n(t);
      })(e);
    } catch (r) {
      const e = `err: [theme] ${r}`;
      throw console.log(e), e;
    }
  }
});
function rr(o, r = 1e3) {
  let e = {
    cnt: 0
  };
  return new Promise((t) => {
    const n = () => {
      console.log(`[setInterval] is running.. [count=${e.cnt}]`);
      try {
        o() && (clearInterval(i), t());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${r}]`);
      }
      e.cnt += 1;
    }, i = setInterval(() => {
      n();
    }, r);
    n();
  });
}
let x0 = class {
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
          (n) => n(t)
        );
      }
  };
};
const Io = () => new x0();
class ce {
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
let _ = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (o) => {
      const r = o?.lib || [];
      for (const [e, t] of r.entries()) {
        const n = t, i = `${n.name}:${o.run_from}`, a = `${o.run_from}_src`;
        let c = n[a];
        const l = `${o.run_from}_src`;
        let s = o?.lazy_lib?.[l] || null;
        if (s && (s = s.replace("{*}", `${n.name}`)), console.log(`_lazy_src: ${s}`), console.log(`_src: ${c}`), _.lib.l.hasOwnProperty(`${i}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(c) && c.includes("/") == !1 && _.lib.inbuilt_lib.indexOf(`${n.name}`) === -1)
            if (s)
              c = s;
            else
              throw `[lib-name=${n.name},lib-src=${c}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (c.startsWith("./") || c.startsWith("../")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${c}`
            );
            _.lib.l[`${i}`] = {
              lib: d,
              src: c
            };
          }
          if (c.startsWith("http://") || c.startsWith("https://")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${c}`
            );
            _.lib.l[`${i}`] = {
              lib: d,
              src: c
            };
          }
        }
      }
      console.log(await _.lib.get_all({}));
    },
    get: async (o) => {
      let r = null;
      const e = `${o.name}:${o.run_from}`;
      return _.lib.l.hasOwnProperty(`${e}`) == !1 && await _.lib.set({
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
      }), r = _.lib.l[`${e}`], r;
    },
    get_all: async (o) => _.lib.l
  },
  path: {
    set: (o) => {
      let r = "", e = "";
      const t = o.src.split("/");
      if (o.src.indexOf("://localhost") !== -1 || o.src.indexOf("://127.0.0.1") !== -1 || (e = "/dist"), t.indexOf(o.type) !== -1)
        for (const [n, i] of t.entries()) {
          let a = n == 0 ? "" : "/";
          if (r += `${a}${i}`, i == o.type)
            return `${r}${e}${o.name}`;
        }
      else
        for (const [n, i] of t.entries()) {
          let a = n == 0 ? "" : "/";
          if (r += `${a}${i}`, i == "src")
            return `${r}${e}${o.name}`;
        }
      return `${r}${e}${o.name}`;
    }
  }
};
const se = Io(), le = Io(), $0 = se.on;
se.emit;
const B0 = le.emit, R0 = le.on, S0 = async (o) => {
  const r = await ae();
  return await _.lib.set({ lib: o.lib, run_from: "renderer", lazy_lib: o.lazy_lib }), {
    set: async (e) => {
      console.log("--renderer [set]"), e.return = e?.return || {}, e.return.r = e?.return?.r || "full";
      const t = new ce();
      t.start();
      let n = e.data?.value?.l || e.data.l, i = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return e.return.r == "full" ? i.r = "" : i.r = [], await (async () => {
        for (const a of n) {
          const c = await await _.lib.get({ name: a.type, run_from: "renderer", lazy_lib: o.lazy_lib }), l = await (await c.lib.index({
            f: {
              name: (s) => r.f.name({ id: a.id, name: s }),
              get_lib: async (s) => await await _.lib.get({ name: s.name, run_from: s.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (s) => await (await ie()).set(s),
              path: (s) => _.path.set({ src: c.src, type: a.type, name: s }),
              //set..
              uuid: () => or().set(),
              wait_until: rr
            }
          })).set(
            {
              data: {
                curr: a
              }
            }
            /*_$cb*/
          );
          e?.return?.r == "full" ? i.r += l?.r || "" : i.r.push(l?.r || ""), i.style += l?.style || "", i.head += l?.head || "";
        }
      })(), t.stop(), i.benchmark = t.result(), i;
    }
  };
}, O0 = async (o) => {
  const r = await ae();
  return await _.lib.set({ lib: o.lib, run_from: "hydrator", lazy_lib: o.lazy_lib }), {
    set: async (e) => {
      console.log("--hydrator [set]");
      const t = new ce();
      t.start();
      let n = {
        r: "",
        style: ""
      }, i = {
        style_id: `${or().set()}_stl`
      }, a = e.data?.value?.l || e.data.l;
      const c = async () => {
        for (const l of a) {
          const s = await await _.lib.get({ name: l.type, run_from: "hydrator", lazy_lib: o.lazy_lib }), d = s.lib, g = Io(), p = g.on, b = await (await d.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (f) => r.f.name({ id: l.id, name: f }),
              get_lib: async (f) => await await _.lib.get({ name: f.name, run_from: f.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (f) => await (await ie()).set(f),
              path: (f) => _.path.set({ src: s.src, type: l.type, name: f }),
              //set..
              uuid: () => or().set(),
              wait_until: rr,
              //set..
              call: B0,
              listen: p,
              //set..
              new_emitter: () => Io()
            }
          })).set(
            {
              data: {
                curr: l
              }
            }
            /*_$cb*/
          );
          $0("msg", async (f) => {
            try {
              if (Object.keys(f.where || {}).length == 0) {
                await g.emit("msg", f);
                return;
              }
            } catch {
            }
            try {
              if (l?.[f.where?.key || ""] == f.where?.value) {
                await g.emit("msg", f);
                return;
              }
            } catch {
            }
          }), n.style += b.style;
        }
      };
      await rr(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await c();
      try {
        ((l) => {
          const s = document.getElementById(`${i.style_id}`);
          s && s.remove();
          const d = document.createElement("style");
          d.id = `${i.style_id}`, d.innerHTML = `${n.style}`, l.appendChild(d);
        })(document.head);
      } catch (l) {
        console.log(`${l}, Failed to set style..`);
      }
      return t.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: t.result()
      };
    }
  };
};
function de(o, r) {
  return function() {
    return o.apply(r, arguments);
  };
}
const { toString: _0 } = Object.prototype, { getPrototypeOf: cr } = Object, { iterator: Mo, toStringTag: ue } = Symbol, Uo = /* @__PURE__ */ ((o) => (r) => {
  const e = _0.call(r);
  return o[e] || (o[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Y = (o) => (o = o.toLowerCase(), (r) => Uo(r) === o), Ho = (o) => (r) => typeof r === o, { isArray: ho } = Array, bo = Ho("undefined");
function Ro(o) {
  return o !== null && !bo(o) && o.constructor !== null && !bo(o.constructor) && L(o.constructor.isBuffer) && o.constructor.isBuffer(o);
}
const fe = Y("ArrayBuffer");
function E0(o) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(o) : r = o && o.buffer && fe(o.buffer), r;
}
const T0 = Ho("string"), L = Ho("function"), ge = Ho("number"), So = (o) => o !== null && typeof o == "object", A0 = (o) => o === !0 || o === !1, Do = (o) => {
  if (Uo(o) !== "object")
    return !1;
  const r = cr(o);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(ue in o) && !(Mo in o);
}, N0 = (o) => {
  if (!So(o) || Ro(o))
    return !1;
  try {
    return Object.keys(o).length === 0 && Object.getPrototypeOf(o) === Object.prototype;
  } catch {
    return !1;
  }
}, z0 = Y("Date"), P0 = Y("File"), D0 = Y("Blob"), L0 = Y("FileList"), j0 = (o) => So(o) && L(o.pipe), F0 = (o) => {
  let r;
  return o && (typeof FormData == "function" && o instanceof FormData || L(o.append) && ((r = Uo(o)) === "formdata" || // detect form-data instance
  r === "object" && L(o.toString) && o.toString() === "[object FormData]"));
}, I0 = Y("URLSearchParams"), [W0, M0, U0, H0] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Y), q0 = (o) => o.trim ? o.trim() : o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Oo(o, r, { allOwnKeys: e = !1 } = {}) {
  if (o === null || typeof o > "u")
    return;
  let t, n;
  if (typeof o != "object" && (o = [o]), ho(o))
    for (t = 0, n = o.length; t < n; t++)
      r.call(null, o[t], t, o);
  else {
    if (Ro(o))
      return;
    const i = e ? Object.getOwnPropertyNames(o) : Object.keys(o), a = i.length;
    let c;
    for (t = 0; t < a; t++)
      c = i[t], r.call(null, o[c], c, o);
  }
}
function pe(o, r) {
  if (Ro(o))
    return null;
  r = r.toLowerCase();
  const e = Object.keys(o);
  let t = e.length, n;
  for (; t-- > 0; )
    if (n = e[t], r === n.toLowerCase())
      return n;
  return null;
}
const ao = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, me = (o) => !bo(o) && o !== ao;
function er() {
  const { caseless: o, skipUndefined: r } = me(this) && this || {}, e = {}, t = (n, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const a = o && pe(e, i) || i;
    Do(e[a]) && Do(n) ? e[a] = er(e[a], n) : Do(n) ? e[a] = er({}, n) : ho(n) ? e[a] = n.slice() : (!r || !bo(n)) && (e[a] = n);
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Oo(arguments[n], t);
  return e;
}
const V0 = (o, r, e, { allOwnKeys: t } = {}) => (Oo(
  r,
  (n, i) => {
    e && L(n) ? Object.defineProperty(o, i, {
      value: de(n, e),
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
), o), J0 = (o) => (o.charCodeAt(0) === 65279 && (o = o.slice(1)), o), X0 = (o, r, e, t) => {
  o.prototype = Object.create(
    r.prototype,
    t
  ), Object.defineProperty(o.prototype, "constructor", {
    value: o,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(o, "super", {
    value: r.prototype
  }), e && Object.assign(o.prototype, e);
}, Y0 = (o, r, e, t) => {
  let n, i, a;
  const c = {};
  if (r = r || {}, o == null) return r;
  do {
    for (n = Object.getOwnPropertyNames(o), i = n.length; i-- > 0; )
      a = n[i], (!t || t(a, o, r)) && !c[a] && (r[a] = o[a], c[a] = !0);
    o = e !== !1 && cr(o);
  } while (o && (!e || e(o, r)) && o !== Object.prototype);
  return r;
}, K0 = (o, r, e) => {
  o = String(o), (e === void 0 || e > o.length) && (e = o.length), e -= r.length;
  const t = o.indexOf(r, e);
  return t !== -1 && t === e;
}, G0 = (o) => {
  if (!o) return null;
  if (ho(o)) return o;
  let r = o.length;
  if (!ge(r)) return null;
  const e = new Array(r);
  for (; r-- > 0; )
    e[r] = o[r];
  return e;
}, Z0 = /* @__PURE__ */ ((o) => (r) => o && r instanceof o)(typeof Uint8Array < "u" && cr(Uint8Array)), Q0 = (o, r) => {
  const t = (o && o[Mo]).call(o);
  let n;
  for (; (n = t.next()) && !n.done; ) {
    const i = n.value;
    r.call(o, i[0], i[1]);
  }
}, og = (o, r) => {
  let e;
  const t = [];
  for (; (e = o.exec(r)) !== null; )
    t.push(e);
  return t;
}, rg = Y("HTMLFormElement"), eg = (o) => o.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
  return t.toUpperCase() + n;
}), Tr = (({ hasOwnProperty: o }) => (r, e) => o.call(r, e))(Object.prototype), tg = Y("RegExp"), be = (o, r) => {
  const e = Object.getOwnPropertyDescriptors(o), t = {};
  Oo(e, (n, i) => {
    let a;
    (a = r(n, i, o)) !== !1 && (t[i] = a || n);
  }), Object.defineProperties(o, t);
}, ng = (o) => {
  be(o, (r, e) => {
    if (L(o) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const t = o[e];
    if (L(t)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, ag = (o, r) => {
  const e = {}, t = (n) => {
    n.forEach((i) => {
      e[i] = !0;
    });
  };
  return ho(o) ? t(o) : t(String(o).split(r)), e;
}, ig = () => {
}, cg = (o, r) => o != null && Number.isFinite(o = +o) ? o : r;
function sg(o) {
  return !!(o && L(o.append) && o[ue] === "FormData" && o[Mo]);
}
const lg = (o) => {
  const r = new Array(10), e = (t, n) => {
    if (So(t)) {
      if (r.indexOf(t) >= 0)
        return;
      if (Ro(t))
        return t;
      if (!("toJSON" in t)) {
        r[n] = t;
        const i = ho(t) ? [] : {};
        return Oo(t, (a, c) => {
          const l = e(a, n + 1);
          !bo(l) && (i[c] = l);
        }), r[n] = void 0, i;
      }
    }
    return t;
  };
  return e(o, 0);
}, dg = Y("AsyncFunction"), ug = (o) => o && (So(o) || L(o)) && L(o.then) && L(o.catch), he = ((o, r) => o ? setImmediate : r ? ((e, t) => (ao.addEventListener(
  "message",
  ({ source: n, data: i }) => {
    n === ao && i === e && t.length && t.shift()();
  },
  !1
), (n) => {
  t.push(n), ao.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", L(ao.postMessage)), fg = typeof queueMicrotask < "u" ? queueMicrotask.bind(ao) : typeof process < "u" && process.nextTick || he, gg = (o) => o != null && L(o[Mo]), u = {
  isArray: ho,
  isArrayBuffer: fe,
  isBuffer: Ro,
  isFormData: F0,
  isArrayBufferView: E0,
  isString: T0,
  isNumber: ge,
  isBoolean: A0,
  isObject: So,
  isPlainObject: Do,
  isEmptyObject: N0,
  isReadableStream: W0,
  isRequest: M0,
  isResponse: U0,
  isHeaders: H0,
  isUndefined: bo,
  isDate: z0,
  isFile: P0,
  isBlob: D0,
  isRegExp: tg,
  isFunction: L,
  isStream: j0,
  isURLSearchParams: I0,
  isTypedArray: Z0,
  isFileList: L0,
  forEach: Oo,
  merge: er,
  extend: V0,
  trim: q0,
  stripBOM: J0,
  inherits: X0,
  toFlatObject: Y0,
  kindOf: Uo,
  kindOfTest: Y,
  endsWith: K0,
  toArray: G0,
  forEachEntry: Q0,
  matchAll: og,
  isHTMLForm: rg,
  hasOwnProperty: Tr,
  hasOwnProp: Tr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: be,
  freezeMethods: ng,
  toObjectSet: ag,
  toCamelCase: eg,
  noop: ig,
  toFiniteNumber: cg,
  findKey: pe,
  global: ao,
  isContextDefined: me,
  isSpecCompliantForm: sg,
  toJSONObject: lg,
  isAsyncFn: dg,
  isThenable: ug,
  setImmediate: he,
  asap: fg,
  isIterable: gg
};
let v = class ve extends Error {
  static from(r, e, t, n, i, a) {
    const c = new ve(r.message, e || r.code, t, n, i);
    return c.cause = r, c.name = r.name, a && Object.assign(c, a), c;
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
  constructor(r, e, t, n, i) {
    super(r), this.name = "AxiosError", this.isAxiosError = !0, e && (this.code = e), t && (this.config = t), n && (this.request = n), i && (this.response = i, this.status = i.status);
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
      config: u.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
v.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
v.ERR_BAD_OPTION = "ERR_BAD_OPTION";
v.ECONNABORTED = "ECONNABORTED";
v.ETIMEDOUT = "ETIMEDOUT";
v.ERR_NETWORK = "ERR_NETWORK";
v.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
v.ERR_DEPRECATED = "ERR_DEPRECATED";
v.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
v.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
v.ERR_CANCELED = "ERR_CANCELED";
v.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
v.ERR_INVALID_URL = "ERR_INVALID_URL";
const pg = null;
function tr(o) {
  return u.isPlainObject(o) || u.isArray(o);
}
function ye(o) {
  return u.endsWith(o, "[]") ? o.slice(0, -2) : o;
}
function Ar(o, r, e) {
  return o ? o.concat(r).map(function(n, i) {
    return n = ye(n), !e && i ? "[" + n + "]" : n;
  }).join(e ? "." : "") : r;
}
function mg(o) {
  return u.isArray(o) && !o.some(tr);
}
const bg = u.toFlatObject(u, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function qo(o, r, e) {
  if (!u.isObject(o))
    throw new TypeError("target must be an object");
  r = r || new FormData(), e = u.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, m) {
    return !u.isUndefined(m[h]);
  });
  const t = e.metaTokens, n = e.visitor || d, i = e.dots, a = e.indexes, l = (e.Blob || typeof Blob < "u" && Blob) && u.isSpecCompliantForm(r);
  if (!u.isFunction(n))
    throw new TypeError("visitor must be a function");
  function s(f) {
    if (f === null) return "";
    if (u.isDate(f))
      return f.toISOString();
    if (u.isBoolean(f))
      return f.toString();
    if (!l && u.isBlob(f))
      throw new v("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(f) || u.isTypedArray(f) ? l && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function d(f, h, m) {
    let y = f;
    if (f && !m && typeof f == "object") {
      if (u.endsWith(h, "{}"))
        h = t ? h : h.slice(0, -2), f = JSON.stringify(f);
      else if (u.isArray(f) && mg(f) || (u.isFileList(f) || u.endsWith(h, "[]")) && (y = u.toArray(f)))
        return h = ye(h), y.forEach(function(w, C) {
          !(u.isUndefined(w) || w === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Ar([h], C, i) : a === null ? h : h + "[]",
            s(w)
          );
        }), !1;
    }
    return tr(f) ? !0 : (r.append(Ar(m, h, i), s(f)), !1);
  }
  const g = [], p = Object.assign(bg, {
    defaultVisitor: d,
    convertValue: s,
    isVisitable: tr
  });
  function b(f, h) {
    if (!u.isUndefined(f)) {
      if (g.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      g.push(f), u.forEach(f, function(y, k) {
        (!(u.isUndefined(y) || y === null) && n.call(
          r,
          y,
          u.isString(k) ? k.trim() : k,
          h,
          p
        )) === !0 && b(y, h ? h.concat(k) : [k]);
      }), g.pop();
    }
  }
  if (!u.isObject(o))
    throw new TypeError("data must be an object");
  return b(o), r;
}
function Nr(o) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(o).replace(/[!'()~]|%20|%00/g, function(t) {
    return r[t];
  });
}
function sr(o, r) {
  this._pairs = [], o && qo(o, this, r);
}
const ke = sr.prototype;
ke.append = function(r, e) {
  this._pairs.push([r, e]);
};
ke.toString = function(r) {
  const e = r ? function(t) {
    return r.call(this, t, Nr);
  } : Nr;
  return this._pairs.map(function(n) {
    return e(n[0]) + "=" + e(n[1]);
  }, "").join("&");
};
function hg(o) {
  return encodeURIComponent(o).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function we(o, r, e) {
  if (!r)
    return o;
  const t = e && e.encode || hg, n = u.isFunction(e) ? {
    serialize: e
  } : e, i = n && n.serialize;
  let a;
  if (i ? a = i(r, n) : a = u.isURLSearchParams(r) ? r.toString() : new sr(r, n).toString(t), a) {
    const c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}
class zr {
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
  use(r, e, t) {
    return this.handlers.push({
      fulfilled: r,
      rejected: e,
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
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
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
  forEach(r) {
    u.forEach(this.handlers, function(t) {
      t !== null && r(t);
    });
  }
}
const lr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, vg = typeof URLSearchParams < "u" ? URLSearchParams : sr, yg = typeof FormData < "u" ? FormData : null, kg = typeof Blob < "u" ? Blob : null, wg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: vg,
    FormData: yg,
    Blob: kg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, dr = typeof window < "u" && typeof document < "u", nr = typeof navigator == "object" && navigator || void 0, Cg = dr && (!nr || ["ReactNative", "NativeScript", "NS"].indexOf(nr.product) < 0), xg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", $g = dr && window.location.href || "http://localhost", Bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: dr,
  hasStandardBrowserEnv: Cg,
  hasStandardBrowserWebWorkerEnv: xg,
  navigator: nr,
  origin: $g
}, Symbol.toStringTag, { value: "Module" })), N = {
  ...Bg,
  ...wg
};
function Rg(o, r) {
  return qo(o, new N.classes.URLSearchParams(), {
    visitor: function(e, t, n, i) {
      return N.isNode && u.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function Sg(o) {
  return u.matchAll(/\w+|\[(\w*)]/g, o).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Og(o) {
  const r = {}, e = Object.keys(o);
  let t;
  const n = e.length;
  let i;
  for (t = 0; t < n; t++)
    i = e[t], r[i] = o[i];
  return r;
}
function Ce(o) {
  function r(e, t, n, i) {
    let a = e[i++];
    if (a === "__proto__") return !0;
    const c = Number.isFinite(+a), l = i >= e.length;
    return a = !a && u.isArray(n) ? n.length : a, l ? (u.hasOwnProp(n, a) ? n[a] = [n[a], t] : n[a] = t, !c) : ((!n[a] || !u.isObject(n[a])) && (n[a] = []), r(e, t, n[a], i) && u.isArray(n[a]) && (n[a] = Og(n[a])), !c);
  }
  if (u.isFormData(o) && u.isFunction(o.entries)) {
    const e = {};
    return u.forEachEntry(o, (t, n) => {
      r(Sg(t), n, e, 0);
    }), e;
  }
  return null;
}
function _g(o, r, e) {
  if (u.isString(o))
    try {
      return (r || JSON.parse)(o), u.trim(o);
    } catch (t) {
      if (t.name !== "SyntaxError")
        throw t;
    }
  return (e || JSON.stringify)(o);
}
const _o = {
  transitional: lr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, e) {
    const t = e.getContentType() || "", n = t.indexOf("application/json") > -1, i = u.isObject(r);
    if (i && u.isHTMLForm(r) && (r = new FormData(r)), u.isFormData(r))
      return n ? JSON.stringify(Ce(r)) : r;
    if (u.isArrayBuffer(r) || u.isBuffer(r) || u.isStream(r) || u.isFile(r) || u.isBlob(r) || u.isReadableStream(r))
      return r;
    if (u.isArrayBufferView(r))
      return r.buffer;
    if (u.isURLSearchParams(r))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let c;
    if (i) {
      if (t.indexOf("application/x-www-form-urlencoded") > -1)
        return Rg(r, this.formSerializer).toString();
      if ((c = u.isFileList(r)) || t.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return qo(
          c ? { "files[]": r } : r,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || n ? (e.setContentType("application/json", !1), _g(r)) : r;
  }],
  transformResponse: [function(r) {
    const e = this.transitional || _o.transitional, t = e && e.forcedJSONParsing, n = this.responseType === "json";
    if (u.isResponse(r) || u.isReadableStream(r))
      return r;
    if (r && u.isString(r) && (t && !this.responseType || n)) {
      const a = !(e && e.silentJSONParsing) && n;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (c) {
        if (a)
          throw c.name === "SyntaxError" ? v.from(c, v.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return r;
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
    FormData: N.classes.FormData,
    Blob: N.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
u.forEach(["delete", "get", "head", "post", "put", "patch"], (o) => {
  _o.headers[o] = {};
});
const Eg = u.toObjectSet([
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
]), Tg = (o) => {
  const r = {};
  let e, t, n;
  return o && o.split(`
`).forEach(function(a) {
    n = a.indexOf(":"), e = a.substring(0, n).trim().toLowerCase(), t = a.substring(n + 1).trim(), !(!e || r[e] && Eg[e]) && (e === "set-cookie" ? r[e] ? r[e].push(t) : r[e] = [t] : r[e] = r[e] ? r[e] + ", " + t : t);
  }), r;
}, Pr = /* @__PURE__ */ Symbol("internals");
function yo(o) {
  return o && String(o).trim().toLowerCase();
}
function Lo(o) {
  return o === !1 || o == null ? o : u.isArray(o) ? o.map(Lo) : String(o);
}
function Ag(o) {
  const r = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let t;
  for (; t = e.exec(o); )
    r[t[1]] = t[2];
  return r;
}
const Ng = (o) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(o.trim());
function Yo(o, r, e, t, n) {
  if (u.isFunction(t))
    return t.call(this, r, e);
  if (n && (r = e), !!u.isString(r)) {
    if (u.isString(t))
      return r.indexOf(t) !== -1;
    if (u.isRegExp(t))
      return t.test(r);
  }
}
function zg(o) {
  return o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, e, t) => e.toUpperCase() + t);
}
function Pg(o, r) {
  const e = u.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((t) => {
    Object.defineProperty(o, t + e, {
      value: function(n, i, a) {
        return this[t].call(this, r, n, i, a);
      },
      configurable: !0
    });
  });
}
let j = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, e, t) {
    const n = this;
    function i(c, l, s) {
      const d = yo(l);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const g = u.findKey(n, d);
      (!g || n[g] === void 0 || s === !0 || s === void 0 && n[g] !== !1) && (n[g || l] = Lo(c));
    }
    const a = (c, l) => u.forEach(c, (s, d) => i(s, d, l));
    if (u.isPlainObject(r) || r instanceof this.constructor)
      a(r, e);
    else if (u.isString(r) && (r = r.trim()) && !Ng(r))
      a(Tg(r), e);
    else if (u.isObject(r) && u.isIterable(r)) {
      let c = {}, l, s;
      for (const d of r) {
        if (!u.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        c[s = d[0]] = (l = c[s]) ? u.isArray(l) ? [...l, d[1]] : [l, d[1]] : d[1];
      }
      a(c, e);
    } else
      r != null && i(e, r, t);
    return this;
  }
  get(r, e) {
    if (r = yo(r), r) {
      const t = u.findKey(this, r);
      if (t) {
        const n = this[t];
        if (!e)
          return n;
        if (e === !0)
          return Ag(n);
        if (u.isFunction(e))
          return e.call(this, n, t);
        if (u.isRegExp(e))
          return e.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, e) {
    if (r = yo(r), r) {
      const t = u.findKey(this, r);
      return !!(t && this[t] !== void 0 && (!e || Yo(this, this[t], t, e)));
    }
    return !1;
  }
  delete(r, e) {
    const t = this;
    let n = !1;
    function i(a) {
      if (a = yo(a), a) {
        const c = u.findKey(t, a);
        c && (!e || Yo(t, t[c], c, e)) && (delete t[c], n = !0);
      }
    }
    return u.isArray(r) ? r.forEach(i) : i(r), n;
  }
  clear(r) {
    const e = Object.keys(this);
    let t = e.length, n = !1;
    for (; t--; ) {
      const i = e[t];
      (!r || Yo(this, this[i], i, r, !0)) && (delete this[i], n = !0);
    }
    return n;
  }
  normalize(r) {
    const e = this, t = {};
    return u.forEach(this, (n, i) => {
      const a = u.findKey(t, i);
      if (a) {
        e[a] = Lo(n), delete e[i];
        return;
      }
      const c = r ? zg(i) : String(i).trim();
      c !== i && delete e[i], e[c] = Lo(n), t[c] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const e = /* @__PURE__ */ Object.create(null);
    return u.forEach(this, (t, n) => {
      t != null && t !== !1 && (e[n] = r && u.isArray(t) ? t.join(", ") : t);
    }), e;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, e]) => r + ": " + e).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...e) {
    const t = new this(r);
    return e.forEach((n) => t.set(n)), t;
  }
  static accessor(r) {
    const t = (this[Pr] = this[Pr] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function i(a) {
      const c = yo(a);
      t[c] || (Pg(n, a), t[c] = !0);
    }
    return u.isArray(r) ? r.forEach(i) : i(r), this;
  }
};
j.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.reduceDescriptors(j.prototype, ({ value: o }, r) => {
  let e = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => o,
    set(t) {
      this[e] = t;
    }
  };
});
u.freezeMethods(j);
function Ko(o, r) {
  const e = this || _o, t = r || e, n = j.from(t.headers);
  let i = t.data;
  return u.forEach(o, function(c) {
    i = c.call(e, i, n.normalize(), r ? r.status : void 0);
  }), n.normalize(), i;
}
function xe(o) {
  return !!(o && o.__CANCEL__);
}
let Eo = class extends v {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(r, e, t) {
    super(r ?? "canceled", v.ERR_CANCELED, e, t), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function $e(o, r, e) {
  const t = e.config.validateStatus;
  !e.status || !t || t(e.status) ? o(e) : r(new v(
    "Request failed with status code " + e.status,
    [v.ERR_BAD_REQUEST, v.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
function Dg(o) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
  return r && r[1] || "";
}
function Lg(o, r) {
  o = o || 10;
  const e = new Array(o), t = new Array(o);
  let n = 0, i = 0, a;
  return r = r !== void 0 ? r : 1e3, function(l) {
    const s = Date.now(), d = t[i];
    a || (a = s), e[n] = l, t[n] = s;
    let g = i, p = 0;
    for (; g !== n; )
      p += e[g++], g = g % o;
    if (n = (n + 1) % o, n === i && (i = (i + 1) % o), s - a < r)
      return;
    const b = d && s - d;
    return b ? Math.round(p * 1e3 / b) : void 0;
  };
}
function jg(o, r) {
  let e = 0, t = 1e3 / r, n, i;
  const a = (s, d = Date.now()) => {
    e = d, n = null, i && (clearTimeout(i), i = null), o(...s);
  };
  return [(...s) => {
    const d = Date.now(), g = d - e;
    g >= t ? a(s, d) : (n = s, i || (i = setTimeout(() => {
      i = null, a(n);
    }, t - g)));
  }, () => n && a(n)];
}
const Wo = (o, r, e = 3) => {
  let t = 0;
  const n = Lg(50, 250);
  return jg((i) => {
    const a = i.loaded, c = i.lengthComputable ? i.total : void 0, l = a - t, s = n(l), d = a <= c;
    t = a;
    const g = {
      loaded: a,
      total: c,
      progress: c ? a / c : void 0,
      bytes: l,
      rate: s || void 0,
      estimated: s && c && d ? (c - a) / s : void 0,
      event: i,
      lengthComputable: c != null,
      [r ? "download" : "upload"]: !0
    };
    o(g);
  }, e);
}, Dr = (o, r) => {
  const e = o != null;
  return [(t) => r[0]({
    lengthComputable: e,
    total: o,
    loaded: t
  }), r[1]];
}, Lr = (o) => (...r) => u.asap(() => o(...r)), Fg = N.hasStandardBrowserEnv ? /* @__PURE__ */ ((o, r) => (e) => (e = new URL(e, N.origin), o.protocol === e.protocol && o.host === e.host && (r || o.port === e.port)))(
  new URL(N.origin),
  N.navigator && /(msie|trident)/i.test(N.navigator.userAgent)
) : () => !0, Ig = N.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(o, r, e, t, n, i, a) {
      if (typeof document > "u") return;
      const c = [`${o}=${encodeURIComponent(r)}`];
      u.isNumber(e) && c.push(`expires=${new Date(e).toUTCString()}`), u.isString(t) && c.push(`path=${t}`), u.isString(n) && c.push(`domain=${n}`), i === !0 && c.push("secure"), u.isString(a) && c.push(`SameSite=${a}`), document.cookie = c.join("; ");
    },
    read(o) {
      if (typeof document > "u") return null;
      const r = document.cookie.match(new RegExp("(?:^|; )" + o + "=([^;]*)"));
      return r ? decodeURIComponent(r[1]) : null;
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
function Wg(o) {
  return typeof o != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}
function Mg(o, r) {
  return r ? o.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : o;
}
function Be(o, r, e) {
  let t = !Wg(r);
  return o && (t || e == !1) ? Mg(o, r) : r;
}
const jr = (o) => o instanceof j ? { ...o } : o;
function uo(o, r) {
  r = r || {};
  const e = {};
  function t(s, d, g, p) {
    return u.isPlainObject(s) && u.isPlainObject(d) ? u.merge.call({ caseless: p }, s, d) : u.isPlainObject(d) ? u.merge({}, d) : u.isArray(d) ? d.slice() : d;
  }
  function n(s, d, g, p) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(s))
        return t(void 0, s, g, p);
    } else return t(s, d, g, p);
  }
  function i(s, d) {
    if (!u.isUndefined(d))
      return t(void 0, d);
  }
  function a(s, d) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(s))
        return t(void 0, s);
    } else return t(void 0, d);
  }
  function c(s, d, g) {
    if (g in r)
      return t(s, d);
    if (g in o)
      return t(void 0, s);
  }
  const l = {
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
    validateStatus: c,
    headers: (s, d, g) => n(jr(s), jr(d), g, !0)
  };
  return u.forEach(
    Object.keys({ ...o, ...r }),
    function(d) {
      if (d === "__proto__" || d === "constructor" || d === "prototype")
        return;
      const g = u.hasOwnProp(l, d) ? l[d] : n, p = g(o[d], r[d], d);
      u.isUndefined(p) && g !== c || (e[d] = p);
    }
  ), e;
}
const Re = (o) => {
  const r = uo({}, o);
  let { data: e, withXSRFToken: t, xsrfHeaderName: n, xsrfCookieName: i, headers: a, auth: c } = r;
  if (r.headers = a = j.from(a), r.url = we(Be(r.baseURL, r.url, r.allowAbsoluteUrls), o.params, o.paramsSerializer), c && a.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  ), u.isFormData(e)) {
    if (N.hasStandardBrowserEnv || N.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (u.isFunction(e.getHeaders)) {
      const l = e.getHeaders(), s = ["content-type", "content-length"];
      Object.entries(l).forEach(([d, g]) => {
        s.includes(d.toLowerCase()) && a.set(d, g);
      });
    }
  }
  if (N.hasStandardBrowserEnv && (t && u.isFunction(t) && (t = t(r)), t || t !== !1 && Fg(r.url))) {
    const l = n && i && Ig.read(i);
    l && a.set(n, l);
  }
  return r;
}, Ug = typeof XMLHttpRequest < "u", Hg = Ug && function(o) {
  return new Promise(function(e, t) {
    const n = Re(o);
    let i = n.data;
    const a = j.from(n.headers).normalize();
    let { responseType: c, onUploadProgress: l, onDownloadProgress: s } = n, d, g, p, b, f;
    function h() {
      b && b(), f && f(), n.cancelToken && n.cancelToken.unsubscribe(d), n.signal && n.signal.removeEventListener("abort", d);
    }
    let m = new XMLHttpRequest();
    m.open(n.method.toUpperCase(), n.url, !0), m.timeout = n.timeout;
    function y() {
      if (!m)
        return;
      const w = j.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), O = {
        data: !c || c === "text" || c === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: w,
        config: o,
        request: m
      };
      $e(function(x) {
        e(x), h();
      }, function(x) {
        t(x), h();
      }, O), m = null;
    }
    "onloadend" in m ? m.onloadend = y : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, m.onabort = function() {
      m && (t(new v("Request aborted", v.ECONNABORTED, o, m)), m = null);
    }, m.onerror = function(C) {
      const O = C && C.message ? C.message : "Network Error", z = new v(O, v.ERR_NETWORK, o, m);
      z.event = C || null, t(z), m = null;
    }, m.ontimeout = function() {
      let C = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const O = n.transitional || lr;
      n.timeoutErrorMessage && (C = n.timeoutErrorMessage), t(new v(
        C,
        O.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED,
        o,
        m
      )), m = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in m && u.forEach(a.toJSON(), function(C, O) {
      m.setRequestHeader(O, C);
    }), u.isUndefined(n.withCredentials) || (m.withCredentials = !!n.withCredentials), c && c !== "json" && (m.responseType = n.responseType), s && ([p, f] = Wo(s, !0), m.addEventListener("progress", p)), l && m.upload && ([g, b] = Wo(l), m.upload.addEventListener("progress", g), m.upload.addEventListener("loadend", b)), (n.cancelToken || n.signal) && (d = (w) => {
      m && (t(!w || w.type ? new Eo(null, o, m) : w), m.abort(), m = null);
    }, n.cancelToken && n.cancelToken.subscribe(d), n.signal && (n.signal.aborted ? d() : n.signal.addEventListener("abort", d)));
    const k = Dg(n.url);
    if (k && N.protocols.indexOf(k) === -1) {
      t(new v("Unsupported protocol " + k + ":", v.ERR_BAD_REQUEST, o));
      return;
    }
    m.send(i || null);
  });
}, qg = (o, r) => {
  const { length: e } = o = o ? o.filter(Boolean) : [];
  if (r || e) {
    let t = new AbortController(), n;
    const i = function(s) {
      if (!n) {
        n = !0, c();
        const d = s instanceof Error ? s : this.reason;
        t.abort(d instanceof v ? d : new Eo(d instanceof Error ? d.message : d));
      }
    };
    let a = r && setTimeout(() => {
      a = null, i(new v(`timeout of ${r}ms exceeded`, v.ETIMEDOUT));
    }, r);
    const c = () => {
      o && (a && clearTimeout(a), a = null, o.forEach((s) => {
        s.unsubscribe ? s.unsubscribe(i) : s.removeEventListener("abort", i);
      }), o = null);
    };
    o.forEach((s) => s.addEventListener("abort", i));
    const { signal: l } = t;
    return l.unsubscribe = () => u.asap(c), l;
  }
}, Vg = function* (o, r) {
  let e = o.byteLength;
  if (e < r) {
    yield o;
    return;
  }
  let t = 0, n;
  for (; t < e; )
    n = t + r, yield o.slice(t, n), t = n;
}, Jg = async function* (o, r) {
  for await (const e of Xg(o))
    yield* Vg(e, r);
}, Xg = async function* (o) {
  if (o[Symbol.asyncIterator]) {
    yield* o;
    return;
  }
  const r = o.getReader();
  try {
    for (; ; ) {
      const { done: e, value: t } = await r.read();
      if (e)
        break;
      yield t;
    }
  } finally {
    await r.cancel();
  }
}, Fr = (o, r, e, t) => {
  const n = Jg(o, r);
  let i = 0, a, c = (l) => {
    a || (a = !0, t && t(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: s, value: d } = await n.next();
        if (s) {
          c(), l.close();
          return;
        }
        let g = d.byteLength;
        if (e) {
          let p = i += g;
          e(p);
        }
        l.enqueue(new Uint8Array(d));
      } catch (s) {
        throw c(s), s;
      }
    },
    cancel(l) {
      return c(l), n.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ir = 64 * 1024, { isFunction: Po } = u, Yg = (({ Request: o, Response: r }) => ({
  Request: o,
  Response: r
}))(u.global), {
  ReadableStream: Wr,
  TextEncoder: Mr
} = u.global, Ur = (o, ...r) => {
  try {
    return !!o(...r);
  } catch {
    return !1;
  }
}, Kg = (o) => {
  o = u.merge.call({
    skipUndefined: !0
  }, Yg, o);
  const { fetch: r, Request: e, Response: t } = o, n = r ? Po(r) : typeof fetch == "function", i = Po(e), a = Po(t);
  if (!n)
    return !1;
  const c = n && Po(Wr), l = n && (typeof Mr == "function" ? /* @__PURE__ */ ((f) => (h) => f.encode(h))(new Mr()) : async (f) => new Uint8Array(await new e(f).arrayBuffer())), s = i && c && Ur(() => {
    let f = !1;
    const h = new e(N.origin, {
      body: new Wr(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !h;
  }), d = a && c && Ur(() => u.isReadableStream(new t("").body)), g = {
    stream: d && ((f) => f.body)
  };
  n && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !g[f] && (g[f] = (h, m) => {
      let y = h && h[f];
      if (y)
        return y.call(h);
      throw new v(`Response type '${f}' is not supported`, v.ERR_NOT_SUPPORT, m);
    });
  });
  const p = async (f) => {
    if (f == null)
      return 0;
    if (u.isBlob(f))
      return f.size;
    if (u.isSpecCompliantForm(f))
      return (await new e(N.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (u.isArrayBufferView(f) || u.isArrayBuffer(f))
      return f.byteLength;
    if (u.isURLSearchParams(f) && (f = f + ""), u.isString(f))
      return (await l(f)).byteLength;
  }, b = async (f, h) => {
    const m = u.toFiniteNumber(f.getContentLength());
    return m ?? p(h);
  };
  return async (f) => {
    let {
      url: h,
      method: m,
      data: y,
      signal: k,
      cancelToken: w,
      timeout: C,
      onDownloadProgress: O,
      onUploadProgress: z,
      responseType: x,
      headers: W,
      withCredentials: F = "same-origin",
      fetchOptions: K
    } = Re(f), H = r || fetch;
    x = x ? (x + "").toLowerCase() : "text";
    let M = qg([k, w && w.toAbortSignal()], C), I = null;
    const E = M && M.unsubscribe && (() => {
      M.unsubscribe();
    });
    let G;
    try {
      if (z && s && m !== "get" && m !== "head" && (G = await b(W, y)) !== 0) {
        let S = new e(h, {
          method: "POST",
          body: y,
          duplex: "half"
        }), D;
        if (u.isFormData(y) && (D = S.headers.get("content-type")) && W.setContentType(D), S.body) {
          const [eo, V] = Dr(
            G,
            Wo(Lr(z))
          );
          y = Fr(S.body, Ir, eo, V);
        }
      }
      u.isString(F) || (F = F ? "include" : "omit");
      const $ = i && "credentials" in e.prototype, Z = {
        ...K,
        signal: M,
        method: m.toUpperCase(),
        headers: W.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: $ ? F : void 0
      };
      I = i && new e(h, Z);
      let P = await (i ? H(I, K) : H(h, Z));
      const Q = d && (x === "stream" || x === "response");
      if (d && (O || Q && E)) {
        const S = {};
        ["status", "statusText", "headers"].forEach((vo) => {
          S[vo] = P[vo];
        });
        const D = u.toFiniteNumber(P.headers.get("content-length")), [eo, V] = O && Dr(
          D,
          Wo(Lr(O), !0)
        ) || [];
        P = new t(
          Fr(P.body, Ir, eo, () => {
            V && V(), E && E();
          }),
          S
        );
      }
      x = x || "text";
      let q = await g[u.findKey(g, x) || "text"](P, f);
      return !Q && E && E(), await new Promise((S, D) => {
        $e(S, D, {
          data: q,
          headers: j.from(P.headers),
          status: P.status,
          statusText: P.statusText,
          config: f,
          request: I
        });
      });
    } catch ($) {
      throw E && E(), $ && $.name === "TypeError" && /Load failed|fetch/i.test($.message) ? Object.assign(
        new v("Network Error", v.ERR_NETWORK, f, I, $ && $.response),
        {
          cause: $.cause || $
        }
      ) : v.from($, $ && $.code, f, I, $ && $.response);
    }
  };
}, Gg = /* @__PURE__ */ new Map(), Se = (o) => {
  let r = o && o.env || {};
  const { fetch: e, Request: t, Response: n } = r, i = [
    t,
    n,
    e
  ];
  let a = i.length, c = a, l, s, d = Gg;
  for (; c--; )
    l = i[c], s = d.get(l), s === void 0 && d.set(l, s = c ? /* @__PURE__ */ new Map() : Kg(r)), d = s;
  return s;
};
Se();
const ur = {
  http: pg,
  xhr: Hg,
  fetch: {
    get: Se
  }
};
u.forEach(ur, (o, r) => {
  if (o) {
    try {
      Object.defineProperty(o, "name", { value: r });
    } catch {
    }
    Object.defineProperty(o, "adapterName", { value: r });
  }
});
const Hr = (o) => `- ${o}`, Zg = (o) => u.isFunction(o) || o === null || o === !1;
function Qg(o, r) {
  o = u.isArray(o) ? o : [o];
  const { length: e } = o;
  let t, n;
  const i = {};
  for (let a = 0; a < e; a++) {
    t = o[a];
    let c;
    if (n = t, !Zg(t) && (n = ur[(c = String(t)).toLowerCase()], n === void 0))
      throw new v(`Unknown adapter '${c}'`);
    if (n && (u.isFunction(n) || (n = n.get(r))))
      break;
    i[c || "#" + a] = n;
  }
  if (!n) {
    const a = Object.entries(i).map(
      ([l, s]) => `adapter ${l} ` + (s === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let c = e ? a.length > 1 ? `since :
` + a.map(Hr).join(`
`) : " " + Hr(a[0]) : "as no adapter specified";
    throw new v(
      "There is no suitable adapter to dispatch the request " + c,
      "ERR_NOT_SUPPORT"
    );
  }
  return n;
}
const Oe = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Qg,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: ur
};
function Go(o) {
  if (o.cancelToken && o.cancelToken.throwIfRequested(), o.signal && o.signal.aborted)
    throw new Eo(null, o);
}
function qr(o) {
  return Go(o), o.headers = j.from(o.headers), o.data = Ko.call(
    o,
    o.transformRequest
  ), ["post", "put", "patch"].indexOf(o.method) !== -1 && o.headers.setContentType("application/x-www-form-urlencoded", !1), Oe.getAdapter(o.adapter || _o.adapter, o)(o).then(function(t) {
    return Go(o), t.data = Ko.call(
      o,
      o.transformResponse,
      t
    ), t.headers = j.from(t.headers), t;
  }, function(t) {
    return xe(t) || (Go(o), t && t.response && (t.response.data = Ko.call(
      o,
      o.transformResponse,
      t.response
    ), t.response.headers = j.from(t.response.headers))), Promise.reject(t);
  });
}
const _e = "1.13.5", Vo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((o, r) => {
  Vo[o] = function(t) {
    return typeof t === o || "a" + (r < 1 ? "n " : " ") + o;
  };
});
const Vr = {};
Vo.transitional = function(r, e, t) {
  function n(i, a) {
    return "[Axios v" + _e + "] Transitional option '" + i + "'" + a + (t ? ". " + t : "");
  }
  return (i, a, c) => {
    if (r === !1)
      throw new v(
        n(a, " has been removed" + (e ? " in " + e : "")),
        v.ERR_DEPRECATED
      );
    return e && !Vr[a] && (Vr[a] = !0, console.warn(
      n(
        a,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), r ? r(i, a, c) : !0;
  };
};
Vo.spelling = function(r) {
  return (e, t) => (console.warn(`${t} is likely a misspelling of ${r}`), !0);
};
function op(o, r, e) {
  if (typeof o != "object")
    throw new v("options must be an object", v.ERR_BAD_OPTION_VALUE);
  const t = Object.keys(o);
  let n = t.length;
  for (; n-- > 0; ) {
    const i = t[n], a = r[i];
    if (a) {
      const c = o[i], l = c === void 0 || a(c, i, o);
      if (l !== !0)
        throw new v("option " + i + " must be " + l, v.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new v("Unknown option " + i, v.ERR_BAD_OPTION);
  }
}
const jo = {
  assertOptions: op,
  validators: Vo
}, U = jo.validators;
let lo = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new zr(),
      response: new zr()
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
  async request(r, e) {
    try {
      return await this._request(r, e);
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
  _request(r, e) {
    typeof r == "string" ? (e = e || {}, e.url = r) : e = r || {}, e = uo(this.defaults, e);
    const { transitional: t, paramsSerializer: n, headers: i } = e;
    t !== void 0 && jo.assertOptions(t, {
      silentJSONParsing: U.transitional(U.boolean),
      forcedJSONParsing: U.transitional(U.boolean),
      clarifyTimeoutError: U.transitional(U.boolean),
      legacyInterceptorReqResOrdering: U.transitional(U.boolean)
    }, !1), n != null && (u.isFunction(n) ? e.paramsSerializer = {
      serialize: n
    } : jo.assertOptions(n, {
      encode: U.function,
      serialize: U.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), jo.assertOptions(e, {
      baseUrl: U.spelling("baseURL"),
      withXsrfToken: U.spelling("withXSRFToken")
    }, !0), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let a = i && u.merge(
      i.common,
      i[e.method]
    );
    i && u.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete i[f];
      }
    ), e.headers = j.concat(a, i);
    const c = [];
    let l = !0;
    this.interceptors.request.forEach(function(h) {
      if (typeof h.runWhen == "function" && h.runWhen(e) === !1)
        return;
      l = l && h.synchronous;
      const m = e.transitional || lr;
      m && m.legacyInterceptorReqResOrdering ? c.unshift(h.fulfilled, h.rejected) : c.push(h.fulfilled, h.rejected);
    });
    const s = [];
    this.interceptors.response.forEach(function(h) {
      s.push(h.fulfilled, h.rejected);
    });
    let d, g = 0, p;
    if (!l) {
      const f = [qr.bind(this), void 0];
      for (f.unshift(...c), f.push(...s), p = f.length, d = Promise.resolve(e); g < p; )
        d = d.then(f[g++], f[g++]);
      return d;
    }
    p = c.length;
    let b = e;
    for (; g < p; ) {
      const f = c[g++], h = c[g++];
      try {
        b = f(b);
      } catch (m) {
        h.call(this, m);
        break;
      }
    }
    try {
      d = qr.call(this, b);
    } catch (f) {
      return Promise.reject(f);
    }
    for (g = 0, p = s.length; g < p; )
      d = d.then(s[g++], s[g++]);
    return d;
  }
  getUri(r) {
    r = uo(this.defaults, r);
    const e = Be(r.baseURL, r.url, r.allowAbsoluteUrls);
    return we(e, r.params, r.paramsSerializer);
  }
};
u.forEach(["delete", "get", "head", "options"], function(r) {
  lo.prototype[r] = function(e, t) {
    return this.request(uo(t || {}, {
      method: r,
      url: e,
      data: (t || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(r) {
  function e(t) {
    return function(i, a, c) {
      return this.request(uo(c || {}, {
        method: r,
        headers: t ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  lo.prototype[r] = e(), lo.prototype[r + "Form"] = e(!0);
});
let rp = class Ee {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let e;
    this.promise = new Promise(function(i) {
      e = i;
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
      const a = new Promise((c) => {
        t.subscribe(c), i = c;
      }).then(n);
      return a.cancel = function() {
        t.unsubscribe(i);
      }, a;
    }, r(function(i, a, c) {
      t.reason || (t.reason = new Eo(i, a, c), e(t.reason));
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
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const e = this._listeners.indexOf(r);
    e !== -1 && this._listeners.splice(e, 1);
  }
  toAbortSignal() {
    const r = new AbortController(), e = (t) => {
      r.abort(t);
    };
    return this.subscribe(e), r.signal.unsubscribe = () => this.unsubscribe(e), r.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new Ee(function(n) {
        r = n;
      }),
      cancel: r
    };
  }
};
function ep(o) {
  return function(e) {
    return o.apply(null, e);
  };
}
function tp(o) {
  return u.isObject(o) && o.isAxiosError === !0;
}
const ar = {
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
Object.entries(ar).forEach(([o, r]) => {
  ar[r] = o;
});
function Te(o) {
  const r = new lo(o), e = de(lo.prototype.request, r);
  return u.extend(e, lo.prototype, r, { allOwnKeys: !0 }), u.extend(e, r, null, { allOwnKeys: !0 }), e.create = function(n) {
    return Te(uo(o, n));
  }, e;
}
const R = Te(_o);
R.Axios = lo;
R.CanceledError = Eo;
R.CancelToken = rp;
R.isCancel = xe;
R.VERSION = _e;
R.toFormData = qo;
R.AxiosError = v;
R.Cancel = R.CanceledError;
R.all = function(r) {
  return Promise.all(r);
};
R.spread = ep;
R.isAxiosError = tp;
R.mergeConfig = uo;
R.AxiosHeaders = j;
R.formToJSON = (o) => Ce(u.isHTMLForm(o) ? new FormData(o) : o);
R.getAdapter = Oe.getAdapter;
R.HttpStatusCode = ar;
R.default = R;
const {
  Axios: pp,
  AxiosError: mp,
  CanceledError: bp,
  isCancel: hp,
  CancelToken: vp,
  VERSION: yp,
  all: kp,
  Cancel: wp,
  isAxiosError: Cp,
  spread: xp,
  toFormData: $p,
  AxiosHeaders: Bp,
  HttpStatusCode: Rp,
  formToJSON: Sp,
  getAdapter: Op,
  mergeConfig: _p
} = R;
function np() {
  const o = no(!1), r = no(null);
  return { post: async (t, n, i = null) => {
    o.value = !0, r.value = null;
    try {
      const { data: a } = await R.post(t, n, {
        headers: i ? { Authorization: `Bearer ${i}` } : {}
      });
      return a;
    } catch (a) {
      return r.value = a.response?.data?.message || "Error", null;
    } finally {
      o.value = !1;
    }
  }, loading: o, error: r };
}
const ap = { key: 0 }, ip = ["innerHTML"], cp = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=product_bluk_upload", sp = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", lp = /* @__PURE__ */ Qe({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(o) {
    const r = no([]), { post: e, error: t } = np(), n = async () => {
      if (!r.value.length) return console.log("No file selected");
      const a = new FormData();
      a.append("file", r.value[0]), a.append("file_format", "json"), a.append("collection", "products");
      const c = await e(cp, a, sp);
      if (!c) return console.log("Error uploading bulk product:", t.value);
      console.log("Bulk product upload response:", c);
    }, i = no(null);
    return Jr(() => {
      (async () => {
        let a = "", c = {
          l: [
            {
              id: "c78c-form_holder",
              type: "form_holder",
              slug: "form_holder",
              data: {
                title: "Bulk product upload",
                mode: "manual",
                class: {
                  b: "bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
                },
                ce_file: {
                  data: {
                    l: [
                      {
                        id: "3e1bc78c-form_section",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "Select JSON File",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "bc78c-form_fileupload",
                        type: "form_fileupload",
                        slug: "form_fileupload",
                        data: {
                          data: "Hello world! ",
                          url: "/api/upload",
                          multiple: !0,
                          accept: ".json",
                          maxFileSize: 2e7,
                          auto: !1,
                          emptyText: "Drag and drop files here to upload",
                          style: {},
                          class: "",
                          //"w-full",
                          mode: "advanced",
                          name: "fileUpload[]",
                          customUpload: !0,
                          form: {
                            section_id: "3e1bc78c-form_section"
                          }
                        }
                      },
                      {
                        id: "47c-form_section",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "868c-form_button",
                        type: "form_button",
                        slug: "form_button",
                        data: {
                          label: "Submit",
                          form: {
                            section_id: "47c-form_section"
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
            /*{
                "id": "3e1bc78c-form_section",
                "type": "form_section",
                "slug": "form_section",
                "data": {
                    "label": "Select JSON File",
                    "l": [],
                    "theme": "light"
                }
            },
            {
                "id": "bc78c-form_fileupload",
                "type": "form_fileupload",
                "slug": "form_fileupload",
                "data": {
                    "data": "Hello world! ",
                    "url": "/api/upload",
                    "multiple": true,
                    "accept": ".json",
                    "maxFileSize": 20000000, 
                    "auto": false,
                    "emptyText": "Drag and drop files here to upload",
                    "style": {},
                    "class": "w-full",
                    "mode": "advanced",
                    "name": "fileUpload[]",
                    "customUpload": true,
                    "form": {
                        "section_id": "3e1bc78c-form_section"
                    }
                }
            },
            {
                "id": "47c-form_section",
                "type": "form_section",
                "slug": "form_section",
                "data": {
                    "label": "",
                    "l": [],
                    "theme": "light"
                }
            },
            {
                "id": "868c-form_button",
                "type": "form_button",
                "slug": "form_button",
                "data": {
                    "label": "Submit",
                    "form": {
                        "section_id": "47c-form_section"
                    }
                }
            }*/
          ]
        };
        const l = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, s = await S0(l), d = await O0(l);
        (async () => R0("child:msg", async (p) => {
          console.log("[ce_listen]", p), p.type === "fileUpload:uploader" && (r.value = p.custom?.event?.files || [], console.log("Files upload:", r.value)), p.type === "click" && n();
        }))(), await (async () => {
          const p = await s.set({
            data: c
          });
          i.value = p.r || "", a = p.style;
          const b = document.createElement("style");
          document.head.appendChild(b), b.innerHTML = a, setTimeout(async () => {
            const f = await d.set({
              data: c
            });
            console.log(f);
          }, 200);
        })();
      })();
    }), (a, c) => i.value ? (ot(), rt("div", ap, [
      et("div", { innerHTML: i.value }, null, 8, ip)
    ])) : tt("", !0);
  }
}), Ep = async (o) => ({
  set: async (r) => {
    console.log(`--hydrator [${r.data.curr.type}]`);
    const t = nt(lp, {
      _p: o,
      _$p: r
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
            _$p: r,
            custom: {}
          });
        }
      }
    }, i = document.getElementById(o.f.name("vue-root"));
    return t.mount(i), n;
  }
});
export {
  Ep as hydrator,
  Ep as index
};
