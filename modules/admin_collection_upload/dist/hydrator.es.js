import { r as et, g as br, o as Qr, n as tt, w as ko, a as Y, b as nt, d as at, c as Jo, e as Xo, f as Yo, h as vr, t as it, F as st, i as ct } from "./runtime-dom.esm-bundler-C0Lv14Pw.js";
var lt = Object.defineProperty, yr = Object.getOwnPropertySymbols, dt = Object.prototype.hasOwnProperty, ut = Object.prototype.propertyIsEnumerable, kr = (o, r, e) => r in o ? lt(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, ft = (o, r) => {
  for (var e in r || (r = {})) dt.call(r, e) && kr(o, e, r[e]);
  if (yr) for (var e of yr(r)) ut.call(r, e) && kr(o, e, r[e]);
  return o;
};
function dr(o) {
  return o == null || o === "" || Array.isArray(o) && o.length === 0 || !(o instanceof Date) && typeof o == "object" && Object.keys(o).length === 0;
}
function gt(o) {
  return typeof o == "function" && "call" in o && "apply" in o;
}
function B(o) {
  return !dr(o);
}
function io(o, r = !0) {
  return o instanceof Object && o.constructor === Object && (r || Object.keys(o).length !== 0);
}
function oe(o = {}, r = {}) {
  let e = ft({}, o);
  return Object.keys(r).forEach((t) => {
    let n = t;
    io(r[n]) && n in o && io(o[n]) ? e[n] = oe(o[n], r[n]) : e[n] = r[n];
  }), e;
}
function pt(...o) {
  return o.reduce((r, e, t) => t === 0 ? e : oe(r, e), {});
}
function no(o, ...r) {
  return gt(o) ? o(...r) : o;
}
function mo(o, r = !0) {
  return typeof o == "string" && (r || o !== "");
}
function mt(o) {
  return B(o) && !isNaN(o);
}
function so(o, r) {
  if (r) {
    let e = r.test(o);
    return r.lastIndex = 0, e;
  }
  return !1;
}
function ht(...o) {
  return pt(...o);
}
function wo(o) {
  return o && o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function re(o) {
  return mo(o) ? o.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : o;
}
function ee() {
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
function bt(o) {
  if (o) {
    let r = o.parentNode;
    return r && r instanceof ShadowRoot && r.host && (r = r.host), r;
  }
  return null;
}
function vt(o) {
  return !!(o !== null && typeof o < "u" && o.nodeName && bt(o));
}
function te(o) {
  return typeof Element < "u" ? o instanceof Element : o !== null && typeof o == "object" && o.nodeType === 1 && typeof o.nodeName == "string";
}
function er(o, r = {}) {
  if (te(o)) {
    let e = (t, n) => {
      var i, a;
      let s = (i = o?.$attrs) != null && i[t] ? [(a = o?.$attrs) == null ? void 0 : a[t]] : [];
      return [n].flat().reduce((l, c) => {
        if (c != null) {
          let d = typeof c;
          if (d === "string" || d === "number") l.push(c);
          else if (d === "object") {
            let g = Array.isArray(c) ? e(t, c) : Object.entries(c).map(([m, b]) => t === "style" && (b || b === 0) ? `${m.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${b}` : b ? m : void 0);
            l = g.length ? l.concat(g.filter((m) => !!m)) : l;
          }
        }
        return l;
      }, s);
    };
    Object.entries(r).forEach(([t, n]) => {
      if (n != null) {
        let i = t.match(/^on(.+)/);
        i ? o.addEventListener(i[1].toLowerCase(), n) : t === "p-bind" || t === "pBind" ? er(o, n) : (n = t === "class" ? [...new Set(e("class", n))].join(" ").trim() : t === "style" ? e("style", n).join(";").trim() : n, (o.$attrs = o.$attrs || {}) && (o.$attrs[t] = n), o.setAttribute(t, n));
      }
    });
  }
}
function yt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function kt(o, r = "", e) {
  te(o) && e !== null && e !== void 0 && o.setAttribute(r, e);
}
var wt = Object.defineProperty, xt = Object.defineProperties, Ct = Object.getOwnPropertyDescriptors, Fo = Object.getOwnPropertySymbols, ne = Object.prototype.hasOwnProperty, ae = Object.prototype.propertyIsEnumerable, wr = (o, r, e) => r in o ? wt(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, X = (o, r) => {
  for (var e in r || (r = {})) ne.call(r, e) && wr(o, e, r[e]);
  if (Fo) for (var e of Fo(r)) ae.call(r, e) && wr(o, e, r[e]);
  return o;
}, Go = (o, r) => xt(o, Ct(r)), ro = (o, r) => {
  var e = {};
  for (var t in o) ne.call(o, t) && r.indexOf(t) < 0 && (e[t] = o[t]);
  if (o != null && Fo) for (var t of Fo(o)) r.indexOf(t) < 0 && ae.call(o, t) && (e[t] = o[t]);
  return e;
}, $t = ee(), eo = $t, xo = /{([^}]*)}/g, ie = /(\d+\s+[\+\-\*\/]\s+\d+)/g, se = /var\([^)]+\)/g;
function xr(o) {
  return mo(o) ? o.replace(/[A-Z]/g, (r, e) => e === 0 ? r : "." + r.toLowerCase()).toLowerCase() : o;
}
function Bt(o) {
  return io(o) && o.hasOwnProperty("$value") && o.hasOwnProperty("$type") ? o.$value : o;
}
function Rt(o) {
  return o.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function tr(o = "", r = "") {
  return Rt(`${mo(o, !1) && mo(r, !1) ? `${o}-` : o}${r}`);
}
function ce(o = "", r = "") {
  return `--${tr(o, r)}`;
}
function St(o = "") {
  let r = (o.match(/{/g) || []).length, e = (o.match(/}/g) || []).length;
  return (r + e) % 2 !== 0;
}
function le(o, r = "", e = "", t = [], n) {
  if (mo(o)) {
    let i = o.trim();
    if (St(i)) return;
    if (so(i, xo)) {
      let a = i.replaceAll(xo, (s) => {
        let l = s.replace(/{|}/g, "").split(".").filter((c) => !t.some((d) => so(c, d)));
        return `var(${ce(e, re(l.join("-")))}${B(n) ? `, ${n}` : ""})`;
      });
      return so(a.replace(se, "0"), ie) ? `calc(${a})` : a;
    }
    return i;
  } else if (mt(o)) return o;
}
function _t(o, r, e) {
  mo(r, !1) && o.push(`${r}:${e};`);
}
function go(o, r) {
  return o ? `${o}{${r}}` : "";
}
function de(o, r) {
  if (o.indexOf("dt(") === -1) return o;
  function e(a, s) {
    let l = [], c = 0, d = "", g = null, m = 0;
    for (; c <= a.length; ) {
      let b = a[c];
      if ((b === '"' || b === "'" || b === "`") && a[c - 1] !== "\\" && (g = g === b ? null : b), !g && (b === "(" && m++, b === ")" && m--, (b === "," || c === a.length) && m === 0)) {
        let f = d.trim();
        f.startsWith("dt(") ? l.push(de(f, s)) : l.push(t(f)), d = "", c++;
        continue;
      }
      b !== void 0 && (d += b), c++;
    }
    return l;
  }
  function t(a) {
    let s = a[0];
    if ((s === '"' || s === "'" || s === "`") && a[a.length - 1] === s) return a.slice(1, -1);
    let l = Number(a);
    return isNaN(l) ? a : l;
  }
  let n = [], i = [];
  for (let a = 0; a < o.length; a++) if (o[a] === "d" && o.slice(a, a + 3) === "dt(") i.push(a), a += 2;
  else if (o[a] === ")" && i.length > 0) {
    let s = i.pop();
    i.length === 0 && n.push([s, a]);
  }
  if (!n.length) return o;
  for (let a = n.length - 1; a >= 0; a--) {
    let [s, l] = n[a], c = o.slice(s + 3, l), d = e(c, r), g = r(...d);
    o = o.slice(0, s) + g + o.slice(l + 1);
  }
  return o;
}
var co = (...o) => Ot(A.getTheme(), ...o), Ot = (o = {}, r, e, t) => {
  if (r) {
    let { variable: n, options: i } = A.defaults || {}, { prefix: a, transform: s } = o?.options || i || {}, l = so(r, xo) ? r : `{${r}}`;
    return t === "value" || dr(t) && s === "strict" ? A.getTokenValue(r) : le(l, void 0, a, [n.excludedKeyRegex], e);
  }
  return "";
};
function To(o, ...r) {
  if (o instanceof Array) {
    let e = o.reduce((t, n, i) => {
      var a;
      return t + n + ((a = no(r[i], { dt: co })) != null ? a : "");
    }, "");
    return de(e, co);
  }
  return no(o, { dt: co });
}
function Et(o, r = {}) {
  let e = A.defaults.variable, { prefix: t = e.prefix, selector: n = e.selector, excludedKeyRegex: i = e.excludedKeyRegex } = r, a = [], s = [], l = [{ node: o, path: t }];
  for (; l.length; ) {
    let { node: d, path: g } = l.pop();
    for (let m in d) {
      let b = d[m], f = Bt(b), h = so(m, i) ? tr(g) : tr(g, re(m));
      if (io(f)) l.push({ node: f, path: h });
      else {
        let p = ce(h), y = le(f, h, t, [i]);
        _t(s, p, y);
        let k = h;
        t && k.startsWith(t + "-") && (k = k.slice(t.length + 1)), a.push(k.replace(/-/g, "."));
      }
    }
  }
  let c = s.join("");
  return { value: s, tokens: a, declarations: c, css: go(n, c) };
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
  return Et(o, { prefix: r?.prefix });
}, getCommon({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var i, a, s, l, c, d, g;
  let { preset: m, options: b } = r, f, h, p, y, k, w, x;
  if (B(m) && b.transform !== "strict") {
    let { primitive: _, semantic: z, extend: C } = m, W = z || {}, { colorScheme: F } = W, K = ro(W, ["colorScheme"]), H = C || {}, { colorScheme: U } = H, I = ro(H, ["colorScheme"]), E = F || {}, { dark: Z } = E, $ = ro(E, ["dark"]), Q = U || {}, { dark: P } = Q, oo = ro(Q, ["dark"]), q = B(_) ? this._toVariables({ primitive: _ }, b) : {}, S = B(K) ? this._toVariables({ semantic: K }, b) : {}, D = B($) ? this._toVariables({ light: $ }, b) : {}, to = B(Z) ? this._toVariables({ dark: Z }, b) : {}, V = B(I) ? this._toVariables({ semantic: I }, b) : {}, vo = B(oo) ? this._toVariables({ light: oo }, b) : {}, hr = B(P) ? this._toVariables({ dark: P }, b) : {}, [je, Fe] = [(i = q.declarations) != null ? i : "", q.tokens], [Ie, We] = [(a = S.declarations) != null ? a : "", S.tokens || []], [Ue, Me] = [(s = D.declarations) != null ? s : "", D.tokens || []], [He, qe] = [(l = to.declarations) != null ? l : "", to.tokens || []], [Ve, Je] = [(c = V.declarations) != null ? c : "", V.tokens || []], [Xe, Ye] = [(d = vo.declarations) != null ? d : "", vo.tokens || []], [Ge, Ke] = [(g = hr.declarations) != null ? g : "", hr.tokens || []];
    f = this.transformCSS(o, je, "light", "variable", b, t, n), h = Fe;
    let Ze = this.transformCSS(o, `${Ie}${Ue}`, "light", "variable", b, t, n), Qe = this.transformCSS(o, `${He}`, "dark", "variable", b, t, n);
    p = `${Ze}${Qe}`, y = [.../* @__PURE__ */ new Set([...We, ...Me, ...qe])];
    let ot = this.transformCSS(o, `${Ve}${Xe}color-scheme:light`, "light", "variable", b, t, n), rt = this.transformCSS(o, `${Ge}color-scheme:dark`, "dark", "variable", b, t, n);
    k = `${ot}${rt}`, w = [.../* @__PURE__ */ new Set([...Je, ...Ye, ...Ke])], x = no(m.css, { dt: co });
  }
  return { primitive: { css: f, tokens: h }, semantic: { css: p, tokens: y }, global: { css: k, tokens: w }, style: x };
}, getPreset({ name: o = "", preset: r = {}, options: e, params: t, set: n, defaults: i, selector: a }) {
  var s, l, c;
  let d, g, m;
  if (B(r) && e.transform !== "strict") {
    let b = o.replace("-directive", ""), f = r, { colorScheme: h, extend: p, css: y } = f, k = ro(f, ["colorScheme", "extend", "css"]), w = p || {}, { colorScheme: x } = w, _ = ro(w, ["colorScheme"]), z = h || {}, { dark: C } = z, W = ro(z, ["dark"]), F = x || {}, { dark: K } = F, H = ro(F, ["dark"]), U = B(k) ? this._toVariables({ [b]: X(X({}, k), _) }, e) : {}, I = B(W) ? this._toVariables({ [b]: X(X({}, W), H) }, e) : {}, E = B(C) ? this._toVariables({ [b]: X(X({}, C), K) }, e) : {}, [Z, $] = [(s = U.declarations) != null ? s : "", U.tokens || []], [Q, P] = [(l = I.declarations) != null ? l : "", I.tokens || []], [oo, q] = [(c = E.declarations) != null ? c : "", E.tokens || []], S = this.transformCSS(b, `${Z}${Q}`, "light", "variable", e, n, i, a), D = this.transformCSS(b, oo, "dark", "variable", e, n, i, a);
    d = `${S}${D}`, g = [.../* @__PURE__ */ new Set([...$, ...P, ...q])], m = no(y, { dt: co });
  }
  return { css: d, tokens: g, style: m };
}, getPresetC({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var i;
  let { preset: a, options: s } = r, l = (i = a?.components) == null ? void 0 : i[o];
  return this.getPreset({ name: o, preset: l, options: s, params: e, set: t, defaults: n });
}, getPresetD({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var i, a;
  let s = o.replace("-directive", ""), { preset: l, options: c } = r, d = ((i = l?.components) == null ? void 0 : i[s]) || ((a = l?.directives) == null ? void 0 : a[s]);
  return this.getPreset({ name: s, preset: d, options: c, params: e, set: t, defaults: n });
}, applyDarkColorScheme(o) {
  return !(o.darkModeSelector === "none" || o.darkModeSelector === !1);
}, getColorSchemeOption(o, r) {
  var e;
  return this.applyDarkColorScheme(o) ? this.regex.resolve(o.darkModeSelector === !0 ? r.options.darkModeSelector : (e = o.darkModeSelector) != null ? e : r.options.darkModeSelector) : [];
}, getLayerOrder(o, r = {}, e, t) {
  let { cssLayer: n } = r;
  return n ? `@layer ${no(n.order || n.name || "primeui", e)}` : "";
}, getCommonStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: n, defaults: i }) {
  let a = this.getCommon({ name: o, theme: r, params: e, set: n, defaults: i }), s = Object.entries(t).reduce((l, [c, d]) => l.push(`${c}="${d}"`) && l, []).join(" ");
  return Object.entries(a || {}).reduce((l, [c, d]) => {
    if (io(d) && Object.hasOwn(d, "css")) {
      let g = wo(d.css), m = `${c}-variables`;
      l.push(`<style type="text/css" data-primevue-style-id="${m}" ${s}>${g}</style>`);
    }
    return l;
  }, []).join("");
}, getStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: n, defaults: i }) {
  var a;
  let s = { name: o, theme: r, params: e, set: n, defaults: i }, l = (a = o.includes("-directive") ? this.getPresetD(s) : this.getPresetC(s)) == null ? void 0 : a.css, c = Object.entries(t).reduce((d, [g, m]) => d.push(`${g}="${m}"`) && d, []).join(" ");
  return l ? `<style type="text/css" data-primevue-style-id="${o}-variables" ${c}>${wo(l)}</style>` : "";
}, createTokens(o = {}, r, e = "", t = "", n = {}) {
  let i = function(s, l = {}, c = []) {
    if (c.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: s, path: this.path, paths: l, value: void 0 };
    c.push(this.path), l.name = this.path, l.binding || (l.binding = {});
    let d = this.value;
    if (typeof this.value == "string" && xo.test(this.value)) {
      let g = this.value.trim().replace(xo, (m) => {
        var b;
        let f = m.slice(1, -1), h = this.tokens[f];
        if (!h) return console.warn(`Token not found for path: ${f}`), "__UNRESOLVED__";
        let p = h.computed(s, l, c);
        return Array.isArray(p) && p.length === 2 ? `light-dark(${p[0].value},${p[1].value})` : (b = p?.value) != null ? b : "__UNRESOLVED__";
      });
      d = ie.test(g.replace(se, "0")) ? `calc(${g})` : g;
    }
    return dr(l.binding) && delete l.binding, c.pop(), { colorScheme: s, path: this.path, paths: l, value: d.includes("__UNRESOLVED__") ? void 0 : d };
  }, a = (s, l, c) => {
    Object.entries(s).forEach(([d, g]) => {
      let m = so(d, r.variable.excludedKeyRegex) ? l : l ? `${l}.${xr(d)}` : xr(d), b = c ? `${c}.${d}` : d;
      io(g) ? a(g, m, b) : (n[m] || (n[m] = { paths: [], computed: (f, h = {}, p = []) => {
        if (n[m].paths.length === 1) return n[m].paths[0].computed(n[m].paths[0].scheme, h.binding, p);
        if (f && f !== "none") for (let y = 0; y < n[m].paths.length; y++) {
          let k = n[m].paths[y];
          if (k.scheme === f) return k.computed(f, h.binding, p);
        }
        return n[m].paths.map((y) => y.computed(y.scheme, h[y.scheme], p));
      } }), n[m].paths.push({ path: b, value: g, scheme: b.includes("colorScheme.light") ? "light" : b.includes("colorScheme.dark") ? "dark" : "none", computed: i, tokens: n }));
    });
  };
  return a(o, e, t), n;
}, getTokenValue(o, r, e) {
  var t;
  let n = ((s) => s.split(".").filter((l) => !so(l.toLowerCase(), e.variable.excludedKeyRegex)).join("."))(r), i = r.includes("colorScheme.light") ? "light" : r.includes("colorScheme.dark") ? "dark" : void 0, a = [(t = o[n]) == null ? void 0 : t.computed(i)].flat().filter((s) => s);
  return a.length === 1 ? a[0].value : a.reduce((s = {}, l) => {
    let c = l, { colorScheme: d } = c, g = ro(c, ["colorScheme"]);
    return s[d] = g, s;
  }, void 0);
}, getSelectorRule(o, r, e, t) {
  return e === "class" || e === "attr" ? go(B(r) ? `${o}${r},${o} ${r}` : o, t) : go(o, go(r ?? ":root,:host", t));
}, transformCSS(o, r, e, t, n = {}, i, a, s) {
  if (B(r)) {
    let { cssLayer: l } = n;
    if (t !== "style") {
      let c = this.getColorSchemeOption(n, a);
      r = e === "dark" ? c.reduce((d, { type: g, selector: m }) => (B(m) && (d += m.includes("[CSS]") ? m.replace("[CSS]", r) : this.getSelectorRule(m, s, g, r)), d), "") : go(s ?? ":root,:host", r);
    }
    if (l) {
      let c = { name: "primeui" };
      io(l) && (c.name = no(l.name, { name: o, type: t })), B(c.name) && (r = go(`@layer ${c.name}`, r), i?.layerNames(c.name));
    }
    return r;
  }
  return "";
} }, A = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(o = {}) {
  let { theme: r } = o;
  r && (this._theme = Go(X({}, r), { options: X(X({}, this.defaults.options), r.options) }), this._tokens = J.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
  this._theme = Go(X({}, this.theme), { preset: o }), this._tokens = J.createTokens(o, this.defaults), this.clearLoadedStyleNames(), eo.emit("preset:change", o), eo.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(o) {
  this._theme = Go(X({}, this.theme), { options: o }), this.clearLoadedStyleNames(), eo.emit("options:change", o), eo.emit("theme:change", this.theme);
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
  this._loadingStyles.size && (this._loadingStyles.delete(r), eo.emit(`theme:${r}:load`, o), !this._loadingStyles.size && eo.emit("theme:load"));
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
}, Tt = `
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
function Co(o) {
  "@babel/helpers - typeof";
  return Co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Co(o);
}
function Cr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function $r(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Cr(Object(e), !0).forEach(function(t) {
      At(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Cr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function At(o, r, e) {
  return (r = Nt(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Nt(o) {
  var r = zt(o, "string");
  return Co(r) == "symbol" ? r : r + "";
}
function zt(o, r) {
  if (Co(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (Co(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function Pt(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  br() && br().components ? Qr(o) : r ? o() : tt(o);
}
var Dt = 0;
function Lt(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = Y(!1), t = Y(o), n = Y(null), i = yt() ? window.document : void 0, a = r.document, s = a === void 0 ? i : a, l = r.immediate, c = l === void 0 ? !0 : l, d = r.manual, g = d === void 0 ? !1 : d, m = r.name, b = m === void 0 ? "style_".concat(++Dt) : m, f = r.id, h = f === void 0 ? void 0 : f, p = r.media, y = p === void 0 ? void 0 : p, k = r.nonce, w = k === void 0 ? void 0 : k, x = r.first, _ = x === void 0 ? !1 : x, z = r.onMounted, C = z === void 0 ? void 0 : z, W = r.onUpdated, F = W === void 0 ? void 0 : W, K = r.onLoad, H = K === void 0 ? void 0 : K, U = r.props, I = U === void 0 ? {} : U, E = function() {
  }, Z = function(P) {
    var oo = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s) {
      var q = $r($r({}, I), oo), S = q.name || b, D = q.id || h, to = q.nonce || w;
      n.value = s.querySelector('style[data-primevue-style-id="'.concat(S, '"]')) || s.getElementById(D) || s.createElement("style"), n.value.isConnected || (t.value = P || o, er(n.value, {
        type: "text/css",
        id: D,
        media: y,
        nonce: to
      }), _ ? s.head.prepend(n.value) : s.head.appendChild(n.value), kt(n.value, "data-primevue-style-id", S), er(n.value, q), n.value.onload = function(V) {
        return H?.(V, {
          name: S
        });
      }, C?.(S)), !e.value && (E = ko(t, function(V) {
        n.value.textContent = V, F?.(S);
      }, {
        immediate: !0
      }), e.value = !0);
    }
  }, $ = function() {
    !s || !e.value || (E(), vt(n.value) && s.head.removeChild(n.value), e.value = !1, n.value = null);
  };
  return c && !g && Pt(Z), {
    id: h,
    name: b,
    el: n,
    css: t,
    unload: $,
    load: Z,
    isLoaded: et(e)
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
var Br, Rr, Sr, _r;
function Or(o, r) {
  return Wt(o) || It(o, r) || Ft(o, r) || jt();
}
function jt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ft(o, r) {
  if (o) {
    if (typeof o == "string") return Er(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Er(o, r) : void 0;
  }
}
function Er(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++) t[e] = o[e];
  return t;
}
function It(o, r) {
  var e = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (e != null) {
    var t, n, i, a, s = [], l = !0, c = !1;
    try {
      if (i = (e = e.call(o)).next, r !== 0) for (; !(l = (t = i.call(e)).done) && (s.push(t.value), s.length !== r); l = !0) ;
    } catch (d) {
      c = !0, n = d;
    } finally {
      try {
        if (!l && e.return != null && (a = e.return(), Object(a) !== a)) return;
      } finally {
        if (c) throw n;
      }
    }
    return s;
  }
}
function Wt(o) {
  if (Array.isArray(o)) return o;
}
function Tr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Ko(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Tr(Object(e), !0).forEach(function(t) {
      Ut(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Tr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function Ut(o, r, e) {
  return (r = Mt(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Mt(o) {
  var r = Ht(o, "string");
  return $o(r) == "symbol" ? r : r + "";
}
function Ht(o, r) {
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
var qt = function(r) {
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
}, Vt = {}, Jt = {}, fo = {
  name: "base",
  css: qt,
  style: Tt,
  classes: Vt,
  inlineStyles: Jt,
  load: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, n = t(To(Br || (Br = Ao(["", ""])), r));
    return B(n) ? Lt(wo(n), Ko({
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
      return A.transformCSS(e.name || r.name, "".concat(n).concat(To(Rr || (Rr = Ao(["", ""])), t)));
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
      var t = no(this.css, {
        dt: co
      }) || "", n = wo(To(Sr || (Sr = Ao(["", "", ""])), t, r)), i = Object.entries(e).reduce(function(a, s) {
        var l = Or(s, 2), c = l[0], d = l[1];
        return a.push("".concat(c, '="').concat(d, '"')) && a;
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
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = To(_r || (_r = Ao(["", ""])), no(this.style, {
        dt: co
      })), a = wo(A.transformCSS(n, i)), s = Object.entries(e).reduce(function(l, c) {
        var d = Or(c, 2), g = d[0], m = d[1];
        return l.push("".concat(g, '="').concat(m, '"')) && l;
      }, []).join(" ");
      B(a) && t.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(s, ">").concat(a, "</style>"));
    }
    return t.join("");
  },
  extend: function(r) {
    return Ko(Ko({}, this), {}, {
      css: void 0,
      style: void 0
    }, r);
  }
}, No = ee();
function Bo(o) {
  "@babel/helpers - typeof";
  return Bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Bo(o);
}
function Ar(o, r) {
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
    r % 2 ? Ar(Object(e), !0).forEach(function(t) {
      Xt(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Ar(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function Xt(o, r, e) {
  return (r = Yt(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Yt(o) {
  var r = Gt(o, "string");
  return Bo(r) == "symbol" ? r : r + "";
}
function Gt(o, r) {
  if (Bo(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (Bo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var Kt = {
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
}, Zt = /* @__PURE__ */ Symbol();
function Qt(o, r) {
  var e = {
    config: nt(r)
  };
  return o.config.globalProperties.$primevue = e, o.provide(Zt, e), on(), rn(o, e), e;
}
var po = [];
function on() {
  eo.clear(), po.forEach(function(o) {
    return o?.();
  }), po = [];
}
function rn(o, r) {
  var e = Y(!1), t = function() {
    var c;
    if (((c = r.config) === null || c === void 0 ? void 0 : c.theme) !== "none" && !A.isStyleNameLoaded("common")) {
      var d, g, m = ((d = fo.getCommonTheme) === null || d === void 0 ? void 0 : d.call(fo)) || {}, b = m.primitive, f = m.semantic, h = m.global, p = m.style, y = {
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
      }, y), p), A.setLoadedStyleName("common");
    }
  };
  eo.on("theme:change", function(l) {
    e.value || (o.config.globalProperties.$primevue.config.theme = l, e.value = !0);
  });
  var n = ko(r.config, function(l, c) {
    No.emit("config:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = ko(function() {
    return r.config.ripple;
  }, function(l, c) {
    No.emit("config:ripple:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), a = ko(function() {
    return r.config.theme;
  }, function(l, c) {
    e.value || A.setTheme(l), r.config.unstyled || t(), e.value = !1, No.emit("config:theme:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !1
  }), s = ko(function() {
    return r.config.unstyled;
  }, function(l, c) {
    !l && r.config.theme && t(), No.emit("config:unstyled:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  });
  po.push(n), po.push(i), po.push(a), po.push(s);
}
var en = {
  install: function(r, e) {
    var t = ht(Kt, e);
    Qt(r, t);
  }
}, tn = { transitionDuration: "{transition.duration}" }, nn = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, an = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, sn = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, cn = { root: tn, panel: nn, header: an, content: sn }, ln = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, dn = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, un = { padding: "{list.padding}", gap: "{list.gap}" }, fn = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, gn = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, pn = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, mn = { borderRadius: "{border.radius.sm}" }, hn = { padding: "{list.option.padding}" }, bn = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, vn = { root: ln, overlay: dn, list: un, option: fn, optionGroup: gn, dropdown: pn, chip: mn, emptyMessage: hn, colorScheme: bn }, yn = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, kn = { size: "1rem" }, wn = { borderColor: "{content.background}", offset: "-0.75rem" }, xn = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, Cn = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, $n = { root: yn, icon: kn, group: wn, lg: xn, xl: Cn }, Bn = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, Rn = { size: "0.5rem" }, Sn = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, _n = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, On = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, En = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Tn = { root: Bn, dot: Rn, sm: Sn, lg: _n, xl: On, colorScheme: En }, An = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, Nn = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, zn = { primitive: An, semantic: Nn }, Pn = { borderRadius: "{content.border.radius}" }, Dn = { root: Pn }, Ln = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, jn = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Fn = { color: "{navigation.item.icon.color}" }, In = { root: Ln, item: jn, separator: Fn }, Wn = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, Un = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, Mn = { root: Wn, colorScheme: Un }, Hn = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, qn = { padding: "1.25rem", gap: "0.5rem" }, Vn = { gap: "0.5rem" }, Jn = { fontSize: "1.25rem", fontWeight: "500" }, Xn = { color: "{text.muted.color}" }, Yn = { root: Hn, body: qn, caption: Vn, title: Jn, subtitle: Xn }, Gn = { transitionDuration: "{transition.duration}" }, Kn = { gap: "0.25rem" }, Zn = { padding: "1rem", gap: "0.5rem" }, Qn = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, oa = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, ra = { root: Gn, content: Kn, indicatorList: Zn, indicator: Qn, colorScheme: oa }, ea = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, ta = { width: "2.5rem", color: "{form.field.icon.color}" }, na = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, aa = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, ia = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, sa = { color: "{form.field.icon.color}" }, ca = { root: ea, dropdown: ta, overlay: na, list: aa, option: ia, clearIcon: sa }, la = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, da = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, ua = { root: la, icon: da }, fa = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, ga = { width: "2rem", height: "2rem" }, pa = { size: "1rem" }, ma = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, ha = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, ba = { root: fa, image: ga, icon: pa, removeIcon: ma, colorScheme: ha }, va = { transitionDuration: "{transition.duration}" }, ya = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ka = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, wa = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, xa = { root: va, preview: ya, panel: ka, colorScheme: wa }, Ca = { size: "2rem", color: "{overlay.modal.color}" }, $a = { gap: "1rem" }, Ba = { icon: Ca, content: $a }, Ra = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Sa = { padding: "{overlay.popover.padding}", gap: "1rem" }, _a = { size: "1.5rem", color: "{overlay.popover.color}" }, Oa = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, Ea = { root: Ra, content: Sa, icon: _a, footer: Oa }, Ta = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Aa = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Na = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, za = { mobileIndent: "1rem" }, Pa = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Da = { borderColor: "{content.border.color}" }, La = { root: Ta, list: Aa, item: Na, submenu: za, submenuIcon: Pa, separator: Da }, ja = `
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
`, Fa = { transitionDuration: "{transition.duration}" }, Ia = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Wa = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Ua = { fontWeight: "600" }, Ma = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Ha = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, qa = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Va = { fontWeight: "600" }, Ja = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Xa = { color: "{primary.color}" }, Ya = { width: "0.5rem" }, Ga = { width: "1px", color: "{primary.color}" }, Ka = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Za = { size: "2rem" }, Qa = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, oi = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, ri = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, ei = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, ti = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, ni = `
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, ai = { root: Fa, header: Ia, headerCell: Wa, columnTitle: Ua, row: Ma, bodyCell: Ha, footerCell: qa, columnFooter: Va, footer: Ja, dropPoint: Xa, columnResizer: Ya, resizeIndicator: Ga, sortIcon: Ka, loadingIcon: Za, rowToggleButton: Qa, filter: oi, paginatorTop: ri, paginatorBottom: ei, colorScheme: ti, css: ni }, ii = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, si = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, ci = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, li = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, di = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, ui = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, fi = { root: ii, header: si, content: ci, footer: li, paginatorTop: di, paginatorBottom: ui }, gi = { transitionDuration: "{transition.duration}" }, pi = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, mi = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, hi = { gap: "0.5rem", fontWeight: "500" }, bi = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, vi = { color: "{form.field.icon.color}" }, yi = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, ki = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, wi = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, xi = { margin: "0.5rem 0 0 0" }, Ci = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, $i = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Bi = { margin: "0.5rem 0 0 0" }, Ri = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, Si = { margin: "0.5rem 0 0 0" }, _i = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, Oi = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, Ei = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, Ti = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, Ai = { root: gi, panel: pi, header: mi, title: hi, dropdown: bi, inputIcon: vi, selectMonth: yi, selectYear: ki, group: wi, dayView: xi, weekDay: Ci, date: $i, monthView: Bi, month: Ri, yearView: Si, year: _i, buttonbar: Oi, timePicker: Ei, colorScheme: Ti }, Ni = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, zi = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, Pi = { fontSize: "1.25rem", fontWeight: "600" }, Di = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Li = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, ji = { root: Ni, header: zi, title: Pi, content: Di, footer: Li }, Fi = { borderColor: "{content.border.color}" }, Ii = { background: "{content.background}", color: "{text.color}" }, Wi = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, Ui = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, Mi = { root: Fi, content: Ii, horizontal: Wi, vertical: Ui }, Hi = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, qi = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Vi = { root: Hi, item: qi }, Ji = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, Xi = { padding: "{overlay.modal.padding}" }, Yi = { fontSize: "1.5rem", fontWeight: "600" }, Gi = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Ki = { padding: "{overlay.modal.padding}" }, Zi = { root: Ji, header: Xi, title: Yi, content: Gi, footer: Ki }, Qi = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, os = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, rs = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, es = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, ts = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, ns = { toolbar: Qi, toolbarItem: os, overlay: rs, overlayOption: es, content: ts }, as = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, is = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ss = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, cs = { padding: "0" }, ls = { root: as, legend: is, toggleIcon: ss, content: cs }, ds = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, us = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, fs = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, gs = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, ps = { gap: "0.5rem" }, ms = { height: "0.25rem" }, hs = { gap: "0.5rem" }, bs = { root: ds, header: us, content: fs, file: gs, fileList: ps, progressbar: ms, basic: hs }, vs = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, ys = { active: { top: "-1.25rem" } }, ks = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, ws = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, xs = { root: vs, over: ys, in: ks, on: ws }, Cs = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, $s = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Bs = { size: "1.5rem" }, Rs = { background: "{content.background}", padding: "1rem 0.25rem" }, Ss = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, _s = { size: "1rem" }, Os = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, Es = { gap: "0.5rem", padding: "1rem" }, Ts = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, As = { background: "rgba(0, 0, 0, 0.5)" }, Ns = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, zs = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ps = { size: "1.5rem" }, Ds = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, Ls = { root: Cs, navButton: $s, navIcon: Bs, thumbnailsContent: Rs, thumbnailNavButton: Ss, thumbnailNavButtonIcon: _s, caption: Os, indicatorList: Es, indicatorButton: Ts, insetIndicatorList: As, insetIndicatorButton: Ns, closeButton: zs, closeButtonIcon: Ps, colorScheme: Ds }, js = { color: "{form.field.icon.color}" }, Fs = { icon: js }, Is = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, Ws = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, Us = { root: Is, input: Ws }, Ms = { transitionDuration: "{transition.duration}" }, Hs = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, qs = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, Vs = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Js = { root: Ms, preview: Hs, toolbar: qs, action: Vs }, Xs = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ys = { handle: Xs }, Gs = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, Ks = { fontWeight: "500" }, Zs = { size: "1rem" }, Qs = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, oc = { root: Gs, text: Ks, icon: Zs, colorScheme: Qs }, rc = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, ec = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, tc = { root: rc, display: ec }, nc = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, ac = { borderRadius: "{border.radius.sm}" }, ic = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, sc = { root: nc, chip: ac, colorScheme: ic }, cc = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, lc = { addon: cc }, dc = { transitionDuration: "{transition.duration}" }, uc = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, fc = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, gc = { root: dc, button: uc, colorScheme: fc }, pc = { gap: "0.5rem" }, mc = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, hc = { root: pc, input: mc }, bc = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, vc = { root: bc }, yc = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, kc = { background: "{primary.color}" }, wc = { background: "{content.border.color}" }, xc = { color: "{text.muted.color}" }, Cc = { root: yc, value: kc, range: wc, text: xc }, $c = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, Bc = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Rc = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Sc = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, _c = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, Oc = { padding: "{list.option.padding}" }, Ec = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, Tc = { root: $c, list: Bc, option: Rc, optionGroup: Sc, checkmark: _c, emptyMessage: Oc, colorScheme: Ec }, Ac = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, Nc = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, zc = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Pc = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, Dc = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Lc = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, jc = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Fc = { borderColor: "{content.border.color}" }, Ic = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Wc = { root: Ac, baseItem: Nc, item: zc, overlay: Pc, submenu: Dc, submenuLabel: Lc, submenuIcon: jc, separator: Fc, mobileButton: Ic }, Uc = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Mc = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Hc = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, qc = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, Vc = { borderColor: "{content.border.color}" }, Jc = { root: Uc, list: Mc, item: Hc, submenuLabel: qc, separator: Vc }, Xc = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, Yc = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, Gc = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Kc = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, Zc = { borderColor: "{content.border.color}" }, Qc = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ol = { root: Xc, baseItem: Yc, item: Gc, submenu: Kc, separator: Zc, mobileButton: Qc }, rl = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, el = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, tl = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, nl = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, al = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, il = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, sl = { root: { borderWidth: "1px" } }, cl = { content: { padding: "0" } }, ll = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, dl = { root: rl, content: el, text: tl, icon: nl, closeButton: al, closeIcon: il, outlined: sl, simple: cl, colorScheme: ll }, ul = { borderRadius: "{content.border.radius}", gap: "1rem" }, fl = { background: "{content.border.color}", size: "0.5rem" }, gl = { gap: "0.5rem" }, pl = { size: "0.5rem" }, ml = { size: "1rem" }, hl = { verticalGap: "0.5rem", horizontalGap: "1rem" }, bl = { root: ul, meters: fl, label: gl, labelMarker: pl, labelIcon: ml, labelList: hl }, vl = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, yl = { width: "2.5rem", color: "{form.field.icon.color}" }, kl = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, wl = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, xl = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, Cl = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, $l = { color: "{form.field.icon.color}" }, Bl = { borderRadius: "{border.radius.sm}" }, Rl = { padding: "{list.option.padding}" }, Sl = { root: vl, dropdown: yl, overlay: kl, list: wl, option: xl, optionGroup: Cl, chip: Bl, clearIcon: $l, emptyMessage: Rl }, _l = { gap: "1.125rem" }, Ol = { gap: "0.5rem" }, El = { root: _l, controls: Ol }, Tl = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, Al = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, Nl = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, zl = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, Pl = { root: Tl, node: Al, nodeToggleButton: Nl, connector: zl }, Dl = { outline: { width: "2px", color: "{content.background}" } }, Ll = { root: Dl }, jl = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Fl = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Il = { color: "{text.muted.color}" }, Wl = { maxWidth: "2.5rem" }, Ul = { root: jl, navButton: Fl, currentPageReport: Il, jumpToPageInput: Wl }, Ml = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Hl = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, ql = { padding: "0.375rem 1.125rem" }, Vl = { fontWeight: "600" }, Jl = { padding: "0 1.125rem 1.125rem 1.125rem" }, Xl = { padding: "0 1.125rem 1.125rem 1.125rem" }, Yl = { root: Ml, header: Hl, toggleableHeader: ql, title: Vl, content: Jl, footer: Xl }, Gl = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Kl = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, Zl = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Ql = { indent: "1rem" }, od = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, rd = { root: Gl, panel: Kl, item: Zl, submenu: Ql, submenuIcon: od }, ed = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, td = { color: "{form.field.icon.color}" }, nd = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, ad = { gap: "0.5rem" }, id = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, sd = { meter: ed, icon: td, overlay: nd, content: ad, colorScheme: id }, cd = { gap: "1.125rem" }, ld = { gap: "0.5rem" }, dd = { root: cd, controls: ld }, ud = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, fd = { padding: "{overlay.popover.padding}" }, gd = { root: ud, content: fd }, pd = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, md = { background: "{primary.color}" }, hd = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, bd = { root: pd, value: md, label: hd }, vd = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, yd = { colorScheme: vd }, kd = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, wd = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, xd = { root: kd, icon: wd }, Cd = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, $d = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, Bd = { root: Cd, icon: $d }, Rd = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, Sd = { colorScheme: Rd }, _d = { transitionDuration: "{transition.duration}" }, Od = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ed = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, Td = { root: _d, bar: Od, colorScheme: Ed }, Ad = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Nd = { width: "2.5rem", color: "{form.field.icon.color}" }, zd = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Pd = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Dd = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Ld = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, jd = { color: "{form.field.icon.color}" }, Fd = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, Id = { padding: "{list.option.padding}" }, Wd = { root: Ad, dropdown: Nd, overlay: zd, list: Pd, option: Dd, optionGroup: Ld, clearIcon: jd, checkmark: Fd, emptyMessage: Id }, Ud = { borderRadius: "{form.field.border.radius}" }, Md = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, Hd = { root: Ud, colorScheme: Md }, qd = { borderRadius: "{content.border.radius}" }, Vd = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, Jd = { root: qd, colorScheme: Vd }, Xd = { transitionDuration: "{transition.duration}" }, Yd = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, Gd = { background: "{primary.color}" }, Kd = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Zd = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, Qd = { root: Xd, track: Yd, range: Gd, handle: Kd, colorScheme: Zd }, ou = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, ru = { root: ou }, eu = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, tu = { root: eu }, nu = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, au = { background: "{content.border.color}" }, iu = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, su = { root: nu, gutter: au, handle: iu }, cu = { transitionDuration: "{transition.duration}" }, lu = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, du = { padding: "0.5rem", gap: "1rem" }, uu = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, fu = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, gu = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, pu = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, mu = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, hu = { root: cu, separator: lu, step: du, stepHeader: uu, stepTitle: fu, stepNumber: gu, steppanels: pu, steppanel: mu }, bu = { transitionDuration: "{transition.duration}" }, vu = { background: "{content.border.color}" }, yu = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, ku = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, wu = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, xu = { root: bu, separator: vu, itemLink: yu, itemLabel: ku, itemNumber: wu }, Cu = { transitionDuration: "{transition.duration}" }, $u = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Bu = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ru = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Su = { height: "1px", bottom: "-1px", background: "{primary.color}" }, _u = { root: Cu, tablist: $u, item: Bu, itemIcon: Ru, activeBar: Su }, Ou = { transitionDuration: "{transition.duration}" }, Eu = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Tu = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Au = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, Nu = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, zu = { height: "1px", bottom: "-1px", background: "{primary.color}" }, Pu = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, Du = { root: Ou, tablist: Eu, tab: Tu, tabpanel: Au, navButton: Nu, activeBar: zu, colorScheme: Pu }, Lu = { transitionDuration: "{transition.duration}" }, ju = { background: "{content.background}", borderColor: "{content.border.color}" }, Fu = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Iu = { background: "{content.background}", color: "{content.color}" }, Wu = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, Uu = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, Mu = { root: Lu, tabList: ju, tab: Fu, tabPanel: Iu, navButton: Wu, colorScheme: Uu }, Hu = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, qu = { size: "0.75rem" }, Vu = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Ju = { root: Hu, icon: qu, colorScheme: Vu }, Xu = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, Yu = { gap: "0.25rem" }, Gu = { margin: "2px 0" }, Ku = { root: Xu, prompt: Yu, commandResponse: Gu }, Zu = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Qu = { root: Zu }, of = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, rf = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, ef = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, tf = { mobileIndent: "1rem" }, nf = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, af = { borderColor: "{content.border.color}" }, sf = { root: of, list: rf, item: ef, submenu: tf, submenuIcon: nf, separator: af }, cf = { minHeight: "5rem" }, lf = { eventContent: { padding: "1rem 0" } }, df = { eventContent: { padding: "0 1rem" } }, uf = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, ff = { color: "{content.border.color}", size: "2px" }, gf = { event: cf, horizontal: lf, vertical: df, eventMarker: uf, eventConnector: ff }, pf = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, mf = { size: "1.125rem" }, hf = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, bf = { gap: "0.5rem" }, vf = { fontWeight: "500", fontSize: "1rem" }, yf = { fontWeight: "500", fontSize: "0.875rem" }, kf = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, wf = { size: "1rem" }, xf = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, Cf = { root: pf, icon: mf, content: hf, text: bf, summary: vf, detail: yf, closeButton: kf, closeIcon: wf, colorScheme: xf }, $f = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, Bf = { disabledColor: "{form.field.disabled.color}" }, Rf = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, Sf = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, _f = { root: $f, icon: Bf, content: Rf, colorScheme: Sf }, Of = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, Ef = { borderRadius: "50%", size: "1rem" }, Tf = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, Af = { root: Of, handle: Ef, colorScheme: Tf }, Nf = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, zf = { root: Nf }, Pf = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, Df = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, Lf = { root: Pf, colorScheme: Df }, jf = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, Ff = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, If = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, Wf = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Uf = { size: "2rem" }, Mf = { margin: "0 0 0.5rem 0" }, Hf = `
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, qf = { root: jf, node: Ff, nodeIcon: If, nodeToggleButton: Wf, loadingIcon: Uf, filter: Mf, css: Hf }, Vf = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Jf = { width: "2.5rem", color: "{form.field.icon.color}" }, Xf = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Yf = { padding: "{list.padding}" }, Gf = { padding: "{list.option.padding}" }, Kf = { borderRadius: "{border.radius.sm}" }, Zf = { color: "{form.field.icon.color}" }, Qf = { root: Vf, dropdown: Jf, overlay: Xf, tree: Yf, emptyMessage: Gf, chip: Kf, clearIcon: Zf }, o0 = { transitionDuration: "{transition.duration}" }, r0 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, e0 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, t0 = { fontWeight: "600" }, n0 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, a0 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, i0 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, s0 = { fontWeight: "600" }, c0 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, l0 = { width: "0.5rem" }, d0 = { width: "1px", color: "{primary.color}" }, u0 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, f0 = { size: "2rem" }, g0 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, p0 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, m0 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, h0 = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, b0 = `
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, v0 = { root: o0, header: r0, headerCell: e0, columnTitle: t0, row: n0, bodyCell: a0, footerCell: i0, columnFooter: s0, footer: c0, columnResizer: l0, resizeIndicator: d0, sortIcon: u0, loadingIcon: f0, nodeToggleButton: g0, paginatorTop: p0, paginatorBottom: m0, colorScheme: h0, css: b0 }, y0 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, k0 = { loader: y0 }, w0 = Object.defineProperty, x0 = Object.defineProperties, C0 = Object.getOwnPropertyDescriptors, Nr = Object.getOwnPropertySymbols, $0 = Object.prototype.hasOwnProperty, B0 = Object.prototype.propertyIsEnumerable, zr = (o, r, e) => r in o ? w0(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, Pr, R0 = (Pr = ((o, r) => {
  for (var e in r || (r = {})) $0.call(r, e) && zr(o, e, r[e]);
  if (Nr) for (var e of Nr(r)) B0.call(r, e) && zr(o, e, r[e]);
  return o;
})({}, zn), x0(Pr, C0({ components: { accordion: cn, autocomplete: vn, avatar: $n, badge: Tn, blockui: Dn, breadcrumb: In, button: Mn, card: Yn, carousel: ra, cascadeselect: ca, checkbox: ua, chip: ba, colorpicker: xa, confirmdialog: Ba, confirmpopup: Ea, contextmenu: La, datatable: ai, dataview: fi, datepicker: Ai, dialog: ji, divider: Mi, dock: Vi, drawer: Zi, editor: ns, fieldset: ls, fileupload: bs, floatlabel: xs, galleria: Ls, iconfield: Fs, iftalabel: Us, image: Js, imagecompare: Ys, inlinemessage: oc, inplace: tc, inputchips: sc, inputgroup: lc, inputnumber: gc, inputotp: hc, inputtext: vc, knob: Cc, listbox: Tc, megamenu: Wc, menu: Jc, menubar: ol, message: dl, metergroup: bl, multiselect: Sl, orderlist: El, organizationchart: Pl, overlaybadge: Ll, paginator: Ul, panel: Yl, panelmenu: rd, password: sd, picklist: dd, popover: gd, progressbar: bd, progressspinner: yd, radiobutton: xd, rating: Bd, ripple: Sd, scrollpanel: Td, select: Wd, selectbutton: Hd, skeleton: Jd, slider: Qd, speeddial: ru, splitbutton: tu, splitter: su, stepper: hu, steps: xu, tabmenu: _u, tabs: Du, tabview: Mu, tag: Ju, terminal: Ku, textarea: Qu, tieredmenu: sf, timeline: gf, toast: Cf, togglebutton: _f, toggleswitch: Af, toolbar: zf, tooltip: Lf, tree: qf, treeselect: Qf, treetable: v0, virtualscroller: k0 }, css: ja })));
const nr = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const r = Math.random() * 16 | 0;
    return (o == "x" ? r : r & 3 | 8).toString(16);
  })
}), ue = async () => ({
  f: {
    name: (o) => `${o.name}${o.id}`
  }
}), fe = async () => ({
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
            const s = a.getAttribute("data-ce");
            if (!s)
              return;
            const l = JSON.parse(s).filter((c) => c?.k.startsWith("t-"));
            if (l.length != 0)
              for (const c of l) {
                const d = c.k, g = c.v.split(" ");
                if (d == `t-${r}-class`)
                  for (const m of g)
                    a.classList.add(m);
                else
                  for (const m of g)
                    a.classList.remove(m);
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
function ar(o, r = 1e3) {
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
let S0 = class {
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
const Io = () => new S0();
class ge {
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
      const r = o?.lib || [];
      for (const [e, t] of r.entries()) {
        const n = t, i = `${n.name}:${o.run_from}`, a = `${o.run_from}_src`;
        let s = n[a];
        const l = `${o.run_from}_src`;
        let c = o?.lazy_lib?.[l] || null;
        if (c && (c = c.replace("{*}", `${n.name}`)), console.log(`_lazy_src: ${c}`), console.log(`_src: ${s}`), O.lib.l.hasOwnProperty(`${i}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(s) && s.includes("/") == !1 && O.lib.inbuilt_lib.indexOf(`${n.name}`) === -1)
            if (c)
              s = c;
            else
              throw `[lib-name=${n.name},lib-src=${s}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (s.startsWith("./") || s.startsWith("../")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${s}`
            );
            O.lib.l[`${i}`] = {
              lib: d,
              src: s
            };
          }
          if (s.startsWith("http://") || s.startsWith("https://")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${s}`
            );
            O.lib.l[`${i}`] = {
              lib: d,
              src: s
            };
          }
        }
      }
      console.log(await O.lib.get_all({}));
    },
    get: async (o) => {
      let r = null;
      const e = `${o.name}:${o.run_from}`;
      return O.lib.l.hasOwnProperty(`${e}`) == !1 && await O.lib.set({
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
      }), r = O.lib.l[`${e}`], r;
    },
    get_all: async (o) => O.lib.l
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
const pe = Io(), me = Io(), _0 = pe.on, O0 = pe.emit, E0 = me.emit, T0 = me.on, A0 = async (o) => {
  const r = await ue();
  return await O.lib.set({ lib: o.lib, run_from: "renderer", lazy_lib: o.lazy_lib }), {
    set: async (e) => {
      console.log("--renderer [set]"), e.return = e?.return || {}, e.return.r = e?.return?.r || "full";
      const t = new ge();
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
          const s = await await O.lib.get({ name: a.type, run_from: "renderer", lazy_lib: o.lazy_lib }), l = await (await s.lib.index({
            f: {
              name: (c) => r.f.name({ id: a.id, name: c }),
              get_lib: async (c) => await await O.lib.get({ name: c.name, run_from: c.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (c) => await (await fe()).set(c),
              path: (c) => O.path.set({ src: s.src, type: a.type, name: c }),
              //set..
              uuid: () => nr().set(),
              wait_until: ar
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
}, N0 = async (o) => {
  const r = await ue();
  return await O.lib.set({ lib: o.lib, run_from: "hydrator", lazy_lib: o.lazy_lib }), {
    set: async (e) => {
      console.log("--hydrator [set]");
      const t = new ge();
      t.start();
      let n = {
        r: "",
        style: ""
      }, i = {
        style_id: `${nr().set()}_stl`
      }, a = e.data?.value?.l || e.data.l;
      const s = async () => {
        for (const l of a) {
          const c = await await O.lib.get({ name: l.type, run_from: "hydrator", lazy_lib: o.lazy_lib }), d = c.lib, g = Io(), m = g.on, b = await (await d.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (f) => r.f.name({ id: l.id, name: f }),
              get_lib: async (f) => await await O.lib.get({ name: f.name, run_from: f.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (f) => await (await fe()).set(f),
              path: (f) => O.path.set({ src: c.src, type: l.type, name: f }),
              //set..
              uuid: () => nr().set(),
              wait_until: ar,
              //set..
              call: E0,
              listen: m,
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
          _0("msg", async (f) => {
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
      await ar(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await s();
      try {
        ((l) => {
          const c = document.getElementById(`${i.style_id}`);
          c && c.remove();
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
function he(o, r) {
  return function() {
    return o.apply(r, arguments);
  };
}
const { toString: z0 } = Object.prototype, { getPrototypeOf: ur } = Object, { iterator: Uo, toStringTag: be } = Symbol, Mo = /* @__PURE__ */ ((o) => (r) => {
  const e = z0.call(r);
  return o[e] || (o[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), G = (o) => (o = o.toLowerCase(), (r) => Mo(r) === o), Ho = (o) => (r) => typeof r === o, { isArray: bo } = Array, ho = Ho("undefined");
function Ro(o) {
  return o !== null && !ho(o) && o.constructor !== null && !ho(o.constructor) && L(o.constructor.isBuffer) && o.constructor.isBuffer(o);
}
const ve = G("ArrayBuffer");
function P0(o) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(o) : r = o && o.buffer && ve(o.buffer), r;
}
const D0 = Ho("string"), L = Ho("function"), ye = Ho("number"), So = (o) => o !== null && typeof o == "object", L0 = (o) => o === !0 || o === !1, Do = (o) => {
  if (Mo(o) !== "object")
    return !1;
  const r = ur(o);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(be in o) && !(Uo in o);
}, j0 = (o) => {
  if (!So(o) || Ro(o))
    return !1;
  try {
    return Object.keys(o).length === 0 && Object.getPrototypeOf(o) === Object.prototype;
  } catch {
    return !1;
  }
}, F0 = G("Date"), I0 = G("File"), W0 = (o) => !!(o && typeof o.uri < "u"), U0 = (o) => o && typeof o.getParts < "u", M0 = G("Blob"), H0 = G("FileList"), q0 = (o) => So(o) && L(o.pipe);
function V0() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Dr = V0(), Lr = typeof Dr.FormData < "u" ? Dr.FormData : void 0, J0 = (o) => {
  let r;
  return o && (Lr && o instanceof Lr || L(o.append) && ((r = Mo(o)) === "formdata" || // detect form-data instance
  r === "object" && L(o.toString) && o.toString() === "[object FormData]"));
}, X0 = G("URLSearchParams"), [Y0, G0, K0, Z0] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(G), Q0 = (o) => o.trim ? o.trim() : o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _o(o, r, { allOwnKeys: e = !1 } = {}) {
  if (o === null || typeof o > "u")
    return;
  let t, n;
  if (typeof o != "object" && (o = [o]), bo(o))
    for (t = 0, n = o.length; t < n; t++)
      r.call(null, o[t], t, o);
  else {
    if (Ro(o))
      return;
    const i = e ? Object.getOwnPropertyNames(o) : Object.keys(o), a = i.length;
    let s;
    for (t = 0; t < a; t++)
      s = i[t], r.call(null, o[s], s, o);
  }
}
function ke(o, r) {
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
const ao = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, we = (o) => !ho(o) && o !== ao;
function ir() {
  const { caseless: o, skipUndefined: r } = we(this) && this || {}, e = {}, t = (n, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const a = o && ke(e, i) || i;
    Do(e[a]) && Do(n) ? e[a] = ir(e[a], n) : Do(n) ? e[a] = ir({}, n) : bo(n) ? e[a] = n.slice() : (!r || !ho(n)) && (e[a] = n);
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && _o(arguments[n], t);
  return e;
}
const og = (o, r, e, { allOwnKeys: t } = {}) => (_o(
  r,
  (n, i) => {
    e && L(n) ? Object.defineProperty(o, i, {
      value: he(n, e),
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
), o), rg = (o) => (o.charCodeAt(0) === 65279 && (o = o.slice(1)), o), eg = (o, r, e, t) => {
  o.prototype = Object.create(r.prototype, t), Object.defineProperty(o.prototype, "constructor", {
    value: o,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(o, "super", {
    value: r.prototype
  }), e && Object.assign(o.prototype, e);
}, tg = (o, r, e, t) => {
  let n, i, a;
  const s = {};
  if (r = r || {}, o == null) return r;
  do {
    for (n = Object.getOwnPropertyNames(o), i = n.length; i-- > 0; )
      a = n[i], (!t || t(a, o, r)) && !s[a] && (r[a] = o[a], s[a] = !0);
    o = e !== !1 && ur(o);
  } while (o && (!e || e(o, r)) && o !== Object.prototype);
  return r;
}, ng = (o, r, e) => {
  o = String(o), (e === void 0 || e > o.length) && (e = o.length), e -= r.length;
  const t = o.indexOf(r, e);
  return t !== -1 && t === e;
}, ag = (o) => {
  if (!o) return null;
  if (bo(o)) return o;
  let r = o.length;
  if (!ye(r)) return null;
  const e = new Array(r);
  for (; r-- > 0; )
    e[r] = o[r];
  return e;
}, ig = /* @__PURE__ */ ((o) => (r) => o && r instanceof o)(typeof Uint8Array < "u" && ur(Uint8Array)), sg = (o, r) => {
  const t = (o && o[Uo]).call(o);
  let n;
  for (; (n = t.next()) && !n.done; ) {
    const i = n.value;
    r.call(o, i[0], i[1]);
  }
}, cg = (o, r) => {
  let e;
  const t = [];
  for (; (e = o.exec(r)) !== null; )
    t.push(e);
  return t;
}, lg = G("HTMLFormElement"), dg = (o) => o.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
  return t.toUpperCase() + n;
}), jr = (({ hasOwnProperty: o }) => (r, e) => o.call(r, e))(Object.prototype), ug = G("RegExp"), xe = (o, r) => {
  const e = Object.getOwnPropertyDescriptors(o), t = {};
  _o(e, (n, i) => {
    let a;
    (a = r(n, i, o)) !== !1 && (t[i] = a || n);
  }), Object.defineProperties(o, t);
}, fg = (o) => {
  xe(o, (r, e) => {
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
}, gg = (o, r) => {
  const e = {}, t = (n) => {
    n.forEach((i) => {
      e[i] = !0;
    });
  };
  return bo(o) ? t(o) : t(String(o).split(r)), e;
}, pg = () => {
}, mg = (o, r) => o != null && Number.isFinite(o = +o) ? o : r;
function hg(o) {
  return !!(o && L(o.append) && o[be] === "FormData" && o[Uo]);
}
const bg = (o) => {
  const r = new Array(10), e = (t, n) => {
    if (So(t)) {
      if (r.indexOf(t) >= 0)
        return;
      if (Ro(t))
        return t;
      if (!("toJSON" in t)) {
        r[n] = t;
        const i = bo(t) ? [] : {};
        return _o(t, (a, s) => {
          const l = e(a, n + 1);
          !ho(l) && (i[s] = l);
        }), r[n] = void 0, i;
      }
    }
    return t;
  };
  return e(o, 0);
}, vg = G("AsyncFunction"), yg = (o) => o && (So(o) || L(o)) && L(o.then) && L(o.catch), Ce = ((o, r) => o ? setImmediate : r ? ((e, t) => (ao.addEventListener(
  "message",
  ({ source: n, data: i }) => {
    n === ao && i === e && t.length && t.shift()();
  },
  !1
), (n) => {
  t.push(n), ao.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", L(ao.postMessage)), kg = typeof queueMicrotask < "u" ? queueMicrotask.bind(ao) : typeof process < "u" && process.nextTick || Ce, wg = (o) => o != null && L(o[Uo]), u = {
  isArray: bo,
  isArrayBuffer: ve,
  isBuffer: Ro,
  isFormData: J0,
  isArrayBufferView: P0,
  isString: D0,
  isNumber: ye,
  isBoolean: L0,
  isObject: So,
  isPlainObject: Do,
  isEmptyObject: j0,
  isReadableStream: Y0,
  isRequest: G0,
  isResponse: K0,
  isHeaders: Z0,
  isUndefined: ho,
  isDate: F0,
  isFile: I0,
  isReactNativeBlob: W0,
  isReactNative: U0,
  isBlob: M0,
  isRegExp: ug,
  isFunction: L,
  isStream: q0,
  isURLSearchParams: X0,
  isTypedArray: ig,
  isFileList: H0,
  forEach: _o,
  merge: ir,
  extend: og,
  trim: Q0,
  stripBOM: rg,
  inherits: eg,
  toFlatObject: tg,
  kindOf: Mo,
  kindOfTest: G,
  endsWith: ng,
  toArray: ag,
  forEachEntry: sg,
  matchAll: cg,
  isHTMLForm: lg,
  hasOwnProperty: jr,
  hasOwnProp: jr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: xe,
  freezeMethods: fg,
  toObjectSet: gg,
  toCamelCase: dg,
  noop: pg,
  toFiniteNumber: mg,
  findKey: ke,
  global: ao,
  isContextDefined: we,
  isSpecCompliantForm: hg,
  toJSONObject: bg,
  isAsyncFn: vg,
  isThenable: yg,
  setImmediate: Ce,
  asap: kg,
  isIterable: wg
};
let v = class $e extends Error {
  static from(r, e, t, n, i, a) {
    const s = new $e(r.message, e || r.code, t, n, i);
    return s.cause = r, s.name = r.name, r.status != null && s.status == null && (s.status = r.status), a && Object.assign(s, a), s;
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
    super(r), Object.defineProperty(this, "message", {
      value: r,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, e && (this.code = e), t && (this.config = t), n && (this.request = n), i && (this.response = i, this.status = i.status);
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
const xg = null;
function sr(o) {
  return u.isPlainObject(o) || u.isArray(o);
}
function Be(o) {
  return u.endsWith(o, "[]") ? o.slice(0, -2) : o;
}
function Zo(o, r, e) {
  return o ? o.concat(r).map(function(n, i) {
    return n = Be(n), !e && i ? "[" + n + "]" : n;
  }).join(e ? "." : "") : r;
}
function Cg(o) {
  return u.isArray(o) && !o.some(sr);
}
const $g = u.toFlatObject(u, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function qo(o, r, e) {
  if (!u.isObject(o))
    throw new TypeError("target must be an object");
  r = r || new FormData(), e = u.toFlatObject(
    e,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(h, p) {
      return !u.isUndefined(p[h]);
    }
  );
  const t = e.metaTokens, n = e.visitor || d, i = e.dots, a = e.indexes, l = (e.Blob || typeof Blob < "u" && Blob) && u.isSpecCompliantForm(r);
  if (!u.isFunction(n))
    throw new TypeError("visitor must be a function");
  function c(f) {
    if (f === null) return "";
    if (u.isDate(f))
      return f.toISOString();
    if (u.isBoolean(f))
      return f.toString();
    if (!l && u.isBlob(f))
      throw new v("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(f) || u.isTypedArray(f) ? l && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function d(f, h, p) {
    let y = f;
    if (u.isReactNative(r) && u.isReactNativeBlob(f))
      return r.append(Zo(p, h, i), c(f)), !1;
    if (f && !p && typeof f == "object") {
      if (u.endsWith(h, "{}"))
        h = t ? h : h.slice(0, -2), f = JSON.stringify(f);
      else if (u.isArray(f) && Cg(f) || (u.isFileList(f) || u.endsWith(h, "[]")) && (y = u.toArray(f)))
        return h = Be(h), y.forEach(function(w, x) {
          !(u.isUndefined(w) || w === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Zo([h], x, i) : a === null ? h : h + "[]",
            c(w)
          );
        }), !1;
    }
    return sr(f) ? !0 : (r.append(Zo(p, h, i), c(f)), !1);
  }
  const g = [], m = Object.assign($g, {
    defaultVisitor: d,
    convertValue: c,
    isVisitable: sr
  });
  function b(f, h) {
    if (!u.isUndefined(f)) {
      if (g.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      g.push(f), u.forEach(f, function(y, k) {
        (!(u.isUndefined(y) || y === null) && n.call(r, y, u.isString(k) ? k.trim() : k, h, m)) === !0 && b(y, h ? h.concat(k) : [k]);
      }), g.pop();
    }
  }
  if (!u.isObject(o))
    throw new TypeError("data must be an object");
  return b(o), r;
}
function Fr(o) {
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
function fr(o, r) {
  this._pairs = [], o && qo(o, this, r);
}
const Re = fr.prototype;
Re.append = function(r, e) {
  this._pairs.push([r, e]);
};
Re.toString = function(r) {
  const e = r ? function(t) {
    return r.call(this, t, Fr);
  } : Fr;
  return this._pairs.map(function(n) {
    return e(n[0]) + "=" + e(n[1]);
  }, "").join("&");
};
function Bg(o) {
  return encodeURIComponent(o).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Se(o, r, e) {
  if (!r)
    return o;
  const t = e && e.encode || Bg, n = u.isFunction(e) ? {
    serialize: e
  } : e, i = n && n.serialize;
  let a;
  if (i ? a = i(r, n) : a = u.isURLSearchParams(r) ? r.toString() : new fr(r, n).toString(t), a) {
    const s = o.indexOf("#");
    s !== -1 && (o = o.slice(0, s)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}
class Ir {
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
const gr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Rg = typeof URLSearchParams < "u" ? URLSearchParams : fr, Sg = typeof FormData < "u" ? FormData : null, _g = typeof Blob < "u" ? Blob : null, Og = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Rg,
    FormData: Sg,
    Blob: _g
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, pr = typeof window < "u" && typeof document < "u", cr = typeof navigator == "object" && navigator || void 0, Eg = pr && (!cr || ["ReactNative", "NativeScript", "NS"].indexOf(cr.product) < 0), Tg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ag = pr && window.location.href || "http://localhost", Ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: pr,
  hasStandardBrowserEnv: Eg,
  hasStandardBrowserWebWorkerEnv: Tg,
  navigator: cr,
  origin: Ag
}, Symbol.toStringTag, { value: "Module" })), N = {
  ...Ng,
  ...Og
};
function zg(o, r) {
  return qo(o, new N.classes.URLSearchParams(), {
    visitor: function(e, t, n, i) {
      return N.isNode && u.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function Pg(o) {
  return u.matchAll(/\w+|\[(\w*)]/g, o).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Dg(o) {
  const r = {}, e = Object.keys(o);
  let t;
  const n = e.length;
  let i;
  for (t = 0; t < n; t++)
    i = e[t], r[i] = o[i];
  return r;
}
function _e(o) {
  function r(e, t, n, i) {
    let a = e[i++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a), l = i >= e.length;
    return a = !a && u.isArray(n) ? n.length : a, l ? (u.hasOwnProp(n, a) ? n[a] = [n[a], t] : n[a] = t, !s) : ((!n[a] || !u.isObject(n[a])) && (n[a] = []), r(e, t, n[a], i) && u.isArray(n[a]) && (n[a] = Dg(n[a])), !s);
  }
  if (u.isFormData(o) && u.isFunction(o.entries)) {
    const e = {};
    return u.forEachEntry(o, (t, n) => {
      r(Pg(t), n, e, 0);
    }), e;
  }
  return null;
}
function Lg(o, r, e) {
  if (u.isString(o))
    try {
      return (r || JSON.parse)(o), u.trim(o);
    } catch (t) {
      if (t.name !== "SyntaxError")
        throw t;
    }
  return (e || JSON.stringify)(o);
}
const Oo = {
  transitional: gr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(r, e) {
      const t = e.getContentType() || "", n = t.indexOf("application/json") > -1, i = u.isObject(r);
      if (i && u.isHTMLForm(r) && (r = new FormData(r)), u.isFormData(r))
        return n ? JSON.stringify(_e(r)) : r;
      if (u.isArrayBuffer(r) || u.isBuffer(r) || u.isStream(r) || u.isFile(r) || u.isBlob(r) || u.isReadableStream(r))
        return r;
      if (u.isArrayBufferView(r))
        return r.buffer;
      if (u.isURLSearchParams(r))
        return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
      let s;
      if (i) {
        if (t.indexOf("application/x-www-form-urlencoded") > -1)
          return zg(r, this.formSerializer).toString();
        if ((s = u.isFileList(r)) || t.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return qo(
            s ? { "files[]": r } : r,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || n ? (e.setContentType("application/json", !1), Lg(r)) : r;
    }
  ],
  transformResponse: [
    function(r) {
      const e = this.transitional || Oo.transitional, t = e && e.forcedJSONParsing, n = this.responseType === "json";
      if (u.isResponse(r) || u.isReadableStream(r))
        return r;
      if (r && u.isString(r) && (t && !this.responseType || n)) {
        const a = !(e && e.silentJSONParsing) && n;
        try {
          return JSON.parse(r, this.parseReviver);
        } catch (s) {
          if (a)
            throw s.name === "SyntaxError" ? v.from(s, v.ERR_BAD_RESPONSE, this, null, this.response) : s;
        }
      }
      return r;
    }
  ],
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
  Oo.headers[o] = {};
});
const jg = u.toObjectSet([
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
]), Fg = (o) => {
  const r = {};
  let e, t, n;
  return o && o.split(`
`).forEach(function(a) {
    n = a.indexOf(":"), e = a.substring(0, n).trim().toLowerCase(), t = a.substring(n + 1).trim(), !(!e || r[e] && jg[e]) && (e === "set-cookie" ? r[e] ? r[e].push(t) : r[e] = [t] : r[e] = r[e] ? r[e] + ", " + t : t);
  }), r;
}, Wr = /* @__PURE__ */ Symbol("internals");
function yo(o) {
  return o && String(o).trim().toLowerCase();
}
function Lo(o) {
  return o === !1 || o == null ? o : u.isArray(o) ? o.map(Lo) : String(o);
}
function Ig(o) {
  const r = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let t;
  for (; t = e.exec(o); )
    r[t[1]] = t[2];
  return r;
}
const Wg = (o) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(o.trim());
function Qo(o, r, e, t, n) {
  if (u.isFunction(t))
    return t.call(this, r, e);
  if (n && (r = e), !!u.isString(r)) {
    if (u.isString(t))
      return r.indexOf(t) !== -1;
    if (u.isRegExp(t))
      return t.test(r);
  }
}
function Ug(o) {
  return o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, e, t) => e.toUpperCase() + t);
}
function Mg(o, r) {
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
    function i(s, l, c) {
      const d = yo(l);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const g = u.findKey(n, d);
      (!g || n[g] === void 0 || c === !0 || c === void 0 && n[g] !== !1) && (n[g || l] = Lo(s));
    }
    const a = (s, l) => u.forEach(s, (c, d) => i(c, d, l));
    if (u.isPlainObject(r) || r instanceof this.constructor)
      a(r, e);
    else if (u.isString(r) && (r = r.trim()) && !Wg(r))
      a(Fg(r), e);
    else if (u.isObject(r) && u.isIterable(r)) {
      let s = {}, l, c;
      for (const d of r) {
        if (!u.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        s[c = d[0]] = (l = s[c]) ? u.isArray(l) ? [...l, d[1]] : [l, d[1]] : d[1];
      }
      a(s, e);
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
          return Ig(n);
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
      return !!(t && this[t] !== void 0 && (!e || Qo(this, this[t], t, e)));
    }
    return !1;
  }
  delete(r, e) {
    const t = this;
    let n = !1;
    function i(a) {
      if (a = yo(a), a) {
        const s = u.findKey(t, a);
        s && (!e || Qo(t, t[s], s, e)) && (delete t[s], n = !0);
      }
    }
    return u.isArray(r) ? r.forEach(i) : i(r), n;
  }
  clear(r) {
    const e = Object.keys(this);
    let t = e.length, n = !1;
    for (; t--; ) {
      const i = e[t];
      (!r || Qo(this, this[i], i, r, !0)) && (delete this[i], n = !0);
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
      const s = r ? Ug(i) : String(i).trim();
      s !== i && delete e[i], e[s] = Lo(n), t[s] = !0;
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
    const t = (this[Wr] = this[Wr] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function i(a) {
      const s = yo(a);
      t[s] || (Mg(n, a), t[s] = !0);
    }
    return u.isArray(r) ? r.forEach(i) : i(r), this;
  }
};
j.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
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
function or(o, r) {
  const e = this || Oo, t = r || e, n = j.from(t.headers);
  let i = t.data;
  return u.forEach(o, function(s) {
    i = s.call(e, i, n.normalize(), r ? r.status : void 0);
  }), n.normalize(), i;
}
function Oe(o) {
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
function Ee(o, r, e) {
  const t = e.config.validateStatus;
  !e.status || !t || t(e.status) ? o(e) : r(
    new v(
      "Request failed with status code " + e.status,
      [v.ERR_BAD_REQUEST, v.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
      e.config,
      e.request,
      e
    )
  );
}
function Hg(o) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
  return r && r[1] || "";
}
function qg(o, r) {
  o = o || 10;
  const e = new Array(o), t = new Array(o);
  let n = 0, i = 0, a;
  return r = r !== void 0 ? r : 1e3, function(l) {
    const c = Date.now(), d = t[i];
    a || (a = c), e[n] = l, t[n] = c;
    let g = i, m = 0;
    for (; g !== n; )
      m += e[g++], g = g % o;
    if (n = (n + 1) % o, n === i && (i = (i + 1) % o), c - a < r)
      return;
    const b = d && c - d;
    return b ? Math.round(m * 1e3 / b) : void 0;
  };
}
function Vg(o, r) {
  let e = 0, t = 1e3 / r, n, i;
  const a = (c, d = Date.now()) => {
    e = d, n = null, i && (clearTimeout(i), i = null), o(...c);
  };
  return [(...c) => {
    const d = Date.now(), g = d - e;
    g >= t ? a(c, d) : (n = c, i || (i = setTimeout(() => {
      i = null, a(n);
    }, t - g)));
  }, () => n && a(n)];
}
const Wo = (o, r, e = 3) => {
  let t = 0;
  const n = qg(50, 250);
  return Vg((i) => {
    const a = i.loaded, s = i.lengthComputable ? i.total : void 0, l = a - t, c = n(l), d = a <= s;
    t = a;
    const g = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && s && d ? (s - a) / c : void 0,
      event: i,
      lengthComputable: s != null,
      [r ? "download" : "upload"]: !0
    };
    o(g);
  }, e);
}, Ur = (o, r) => {
  const e = o != null;
  return [
    (t) => r[0]({
      lengthComputable: e,
      total: o,
      loaded: t
    }),
    r[1]
  ];
}, Mr = (o) => (...r) => u.asap(() => o(...r)), Jg = N.hasStandardBrowserEnv ? /* @__PURE__ */ ((o, r) => (e) => (e = new URL(e, N.origin), o.protocol === e.protocol && o.host === e.host && (r || o.port === e.port)))(
  new URL(N.origin),
  N.navigator && /(msie|trident)/i.test(N.navigator.userAgent)
) : () => !0, Xg = N.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(o, r, e, t, n, i, a) {
      if (typeof document > "u") return;
      const s = [`${o}=${encodeURIComponent(r)}`];
      u.isNumber(e) && s.push(`expires=${new Date(e).toUTCString()}`), u.isString(t) && s.push(`path=${t}`), u.isString(n) && s.push(`domain=${n}`), i === !0 && s.push("secure"), u.isString(a) && s.push(`SameSite=${a}`), document.cookie = s.join("; ");
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
function Yg(o) {
  return typeof o != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}
function Gg(o, r) {
  return r ? o.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : o;
}
function Te(o, r, e) {
  let t = !Yg(r);
  return o && (t || e == !1) ? Gg(o, r) : r;
}
const Hr = (o) => o instanceof j ? { ...o } : o;
function uo(o, r) {
  r = r || {};
  const e = {};
  function t(c, d, g, m) {
    return u.isPlainObject(c) && u.isPlainObject(d) ? u.merge.call({ caseless: m }, c, d) : u.isPlainObject(d) ? u.merge({}, d) : u.isArray(d) ? d.slice() : d;
  }
  function n(c, d, g, m) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(c))
        return t(void 0, c, g, m);
    } else return t(c, d, g, m);
  }
  function i(c, d) {
    if (!u.isUndefined(d))
      return t(void 0, d);
  }
  function a(c, d) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(c))
        return t(void 0, c);
    } else return t(void 0, d);
  }
  function s(c, d, g) {
    if (g in r)
      return t(c, d);
    if (g in o)
      return t(void 0, c);
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
    validateStatus: s,
    headers: (c, d, g) => n(Hr(c), Hr(d), g, !0)
  };
  return u.forEach(Object.keys({ ...o, ...r }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype") return;
    const g = u.hasOwnProp(l, d) ? l[d] : n, m = g(o[d], r[d], d);
    u.isUndefined(m) && g !== s || (e[d] = m);
  }), e;
}
const Ae = (o) => {
  const r = uo({}, o);
  let { data: e, withXSRFToken: t, xsrfHeaderName: n, xsrfCookieName: i, headers: a, auth: s } = r;
  if (r.headers = a = j.from(a), r.url = Se(
    Te(r.baseURL, r.url, r.allowAbsoluteUrls),
    o.params,
    o.paramsSerializer
  ), s && a.set(
    "Authorization",
    "Basic " + btoa(
      (s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : "")
    )
  ), u.isFormData(e)) {
    if (N.hasStandardBrowserEnv || N.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (u.isFunction(e.getHeaders)) {
      const l = e.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(l).forEach(([d, g]) => {
        c.includes(d.toLowerCase()) && a.set(d, g);
      });
    }
  }
  if (N.hasStandardBrowserEnv && (t && u.isFunction(t) && (t = t(r)), t || t !== !1 && Jg(r.url))) {
    const l = n && i && Xg.read(i);
    l && a.set(n, l);
  }
  return r;
}, Kg = typeof XMLHttpRequest < "u", Zg = Kg && function(o) {
  return new Promise(function(e, t) {
    const n = Ae(o);
    let i = n.data;
    const a = j.from(n.headers).normalize();
    let { responseType: s, onUploadProgress: l, onDownloadProgress: c } = n, d, g, m, b, f;
    function h() {
      b && b(), f && f(), n.cancelToken && n.cancelToken.unsubscribe(d), n.signal && n.signal.removeEventListener("abort", d);
    }
    let p = new XMLHttpRequest();
    p.open(n.method.toUpperCase(), n.url, !0), p.timeout = n.timeout;
    function y() {
      if (!p)
        return;
      const w = j.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), _ = {
        data: !s || s === "text" || s === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: w,
        config: o,
        request: p
      };
      Ee(
        function(C) {
          e(C), h();
        },
        function(C) {
          t(C), h();
        },
        _
      ), p = null;
    }
    "onloadend" in p ? p.onloadend = y : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, p.onabort = function() {
      p && (t(new v("Request aborted", v.ECONNABORTED, o, p)), p = null);
    }, p.onerror = function(x) {
      const _ = x && x.message ? x.message : "Network Error", z = new v(_, v.ERR_NETWORK, o, p);
      z.event = x || null, t(z), p = null;
    }, p.ontimeout = function() {
      let x = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const _ = n.transitional || gr;
      n.timeoutErrorMessage && (x = n.timeoutErrorMessage), t(
        new v(
          x,
          _.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED,
          o,
          p
        )
      ), p = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in p && u.forEach(a.toJSON(), function(x, _) {
      p.setRequestHeader(_, x);
    }), u.isUndefined(n.withCredentials) || (p.withCredentials = !!n.withCredentials), s && s !== "json" && (p.responseType = n.responseType), c && ([m, f] = Wo(c, !0), p.addEventListener("progress", m)), l && p.upload && ([g, b] = Wo(l), p.upload.addEventListener("progress", g), p.upload.addEventListener("loadend", b)), (n.cancelToken || n.signal) && (d = (w) => {
      p && (t(!w || w.type ? new Eo(null, o, p) : w), p.abort(), p = null);
    }, n.cancelToken && n.cancelToken.subscribe(d), n.signal && (n.signal.aborted ? d() : n.signal.addEventListener("abort", d)));
    const k = Hg(n.url);
    if (k && N.protocols.indexOf(k) === -1) {
      t(
        new v(
          "Unsupported protocol " + k + ":",
          v.ERR_BAD_REQUEST,
          o
        )
      );
      return;
    }
    p.send(i || null);
  });
}, Qg = (o, r) => {
  const { length: e } = o = o ? o.filter(Boolean) : [];
  if (r || e) {
    let t = new AbortController(), n;
    const i = function(c) {
      if (!n) {
        n = !0, s();
        const d = c instanceof Error ? c : this.reason;
        t.abort(
          d instanceof v ? d : new Eo(d instanceof Error ? d.message : d)
        );
      }
    };
    let a = r && setTimeout(() => {
      a = null, i(new v(`timeout of ${r}ms exceeded`, v.ETIMEDOUT));
    }, r);
    const s = () => {
      o && (a && clearTimeout(a), a = null, o.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(i) : c.removeEventListener("abort", i);
      }), o = null);
    };
    o.forEach((c) => c.addEventListener("abort", i));
    const { signal: l } = t;
    return l.unsubscribe = () => u.asap(s), l;
  }
}, op = function* (o, r) {
  let e = o.byteLength;
  if (e < r) {
    yield o;
    return;
  }
  let t = 0, n;
  for (; t < e; )
    n = t + r, yield o.slice(t, n), t = n;
}, rp = async function* (o, r) {
  for await (const e of ep(o))
    yield* op(e, r);
}, ep = async function* (o) {
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
}, qr = (o, r, e, t) => {
  const n = rp(o, r);
  let i = 0, a, s = (l) => {
    a || (a = !0, t && t(l));
  };
  return new ReadableStream(
    {
      async pull(l) {
        try {
          const { done: c, value: d } = await n.next();
          if (c) {
            s(), l.close();
            return;
          }
          let g = d.byteLength;
          if (e) {
            let m = i += g;
            e(m);
          }
          l.enqueue(new Uint8Array(d));
        } catch (c) {
          throw s(c), c;
        }
      },
      cancel(l) {
        return s(l), n.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, Vr = 64 * 1024, { isFunction: Po } = u, tp = (({ Request: o, Response: r }) => ({
  Request: o,
  Response: r
}))(u.global), { ReadableStream: Jr, TextEncoder: Xr } = u.global, Yr = (o, ...r) => {
  try {
    return !!o(...r);
  } catch {
    return !1;
  }
}, np = (o) => {
  o = u.merge.call(
    {
      skipUndefined: !0
    },
    tp,
    o
  );
  const { fetch: r, Request: e, Response: t } = o, n = r ? Po(r) : typeof fetch == "function", i = Po(e), a = Po(t);
  if (!n)
    return !1;
  const s = n && Po(Jr), l = n && (typeof Xr == "function" ? /* @__PURE__ */ ((f) => (h) => f.encode(h))(new Xr()) : async (f) => new Uint8Array(await new e(f).arrayBuffer())), c = i && s && Yr(() => {
    let f = !1;
    const h = new e(N.origin, {
      body: new Jr(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !h;
  }), d = a && s && Yr(() => u.isReadableStream(new t("").body)), g = {
    stream: d && ((f) => f.body)
  };
  n && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !g[f] && (g[f] = (h, p) => {
      let y = h && h[f];
      if (y)
        return y.call(h);
      throw new v(
        `Response type '${f}' is not supported`,
        v.ERR_NOT_SUPPORT,
        p
      );
    });
  });
  const m = async (f) => {
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
    const p = u.toFiniteNumber(f.getContentLength());
    return p ?? m(h);
  };
  return async (f) => {
    let {
      url: h,
      method: p,
      data: y,
      signal: k,
      cancelToken: w,
      timeout: x,
      onDownloadProgress: _,
      onUploadProgress: z,
      responseType: C,
      headers: W,
      withCredentials: F = "same-origin",
      fetchOptions: K
    } = Ae(f), H = r || fetch;
    C = C ? (C + "").toLowerCase() : "text";
    let U = Qg(
      [k, w && w.toAbortSignal()],
      x
    ), I = null;
    const E = U && U.unsubscribe && (() => {
      U.unsubscribe();
    });
    let Z;
    try {
      if (z && c && p !== "get" && p !== "head" && (Z = await b(W, y)) !== 0) {
        let S = new e(h, {
          method: "POST",
          body: y,
          duplex: "half"
        }), D;
        if (u.isFormData(y) && (D = S.headers.get("content-type")) && W.setContentType(D), S.body) {
          const [to, V] = Ur(
            Z,
            Wo(Mr(z))
          );
          y = qr(S.body, Vr, to, V);
        }
      }
      u.isString(F) || (F = F ? "include" : "omit");
      const $ = i && "credentials" in e.prototype, Q = {
        ...K,
        signal: U,
        method: p.toUpperCase(),
        headers: W.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: $ ? F : void 0
      };
      I = i && new e(h, Q);
      let P = await (i ? H(I, K) : H(h, Q));
      const oo = d && (C === "stream" || C === "response");
      if (d && (_ || oo && E)) {
        const S = {};
        ["status", "statusText", "headers"].forEach((vo) => {
          S[vo] = P[vo];
        });
        const D = u.toFiniteNumber(P.headers.get("content-length")), [to, V] = _ && Ur(
          D,
          Wo(Mr(_), !0)
        ) || [];
        P = new t(
          qr(P.body, Vr, to, () => {
            V && V(), E && E();
          }),
          S
        );
      }
      C = C || "text";
      let q = await g[u.findKey(g, C) || "text"](
        P,
        f
      );
      return !oo && E && E(), await new Promise((S, D) => {
        Ee(S, D, {
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
        new v(
          "Network Error",
          v.ERR_NETWORK,
          f,
          I,
          $ && $.response
        ),
        {
          cause: $.cause || $
        }
      ) : v.from($, $ && $.code, f, I, $ && $.response);
    }
  };
}, ap = /* @__PURE__ */ new Map(), Ne = (o) => {
  let r = o && o.env || {};
  const { fetch: e, Request: t, Response: n } = r, i = [t, n, e];
  let a = i.length, s = a, l, c, d = ap;
  for (; s--; )
    l = i[s], c = d.get(l), c === void 0 && d.set(l, c = s ? /* @__PURE__ */ new Map() : np(r)), d = c;
  return c;
};
Ne();
const mr = {
  http: xg,
  xhr: Zg,
  fetch: {
    get: Ne
  }
};
u.forEach(mr, (o, r) => {
  if (o) {
    try {
      Object.defineProperty(o, "name", { value: r });
    } catch {
    }
    Object.defineProperty(o, "adapterName", { value: r });
  }
});
const Gr = (o) => `- ${o}`, ip = (o) => u.isFunction(o) || o === null || o === !1;
function sp(o, r) {
  o = u.isArray(o) ? o : [o];
  const { length: e } = o;
  let t, n;
  const i = {};
  for (let a = 0; a < e; a++) {
    t = o[a];
    let s;
    if (n = t, !ip(t) && (n = mr[(s = String(t)).toLowerCase()], n === void 0))
      throw new v(`Unknown adapter '${s}'`);
    if (n && (u.isFunction(n) || (n = n.get(r))))
      break;
    i[s || "#" + a] = n;
  }
  if (!n) {
    const a = Object.entries(i).map(
      ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let s = e ? a.length > 1 ? `since :
` + a.map(Gr).join(`
`) : " " + Gr(a[0]) : "as no adapter specified";
    throw new v(
      "There is no suitable adapter to dispatch the request " + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return n;
}
const ze = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: sp,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: mr
};
function rr(o) {
  if (o.cancelToken && o.cancelToken.throwIfRequested(), o.signal && o.signal.aborted)
    throw new Eo(null, o);
}
function Kr(o) {
  return rr(o), o.headers = j.from(o.headers), o.data = or.call(o, o.transformRequest), ["post", "put", "patch"].indexOf(o.method) !== -1 && o.headers.setContentType("application/x-www-form-urlencoded", !1), ze.getAdapter(o.adapter || Oo.adapter, o)(o).then(
    function(t) {
      return rr(o), t.data = or.call(o, o.transformResponse, t), t.headers = j.from(t.headers), t;
    },
    function(t) {
      return Oe(t) || (rr(o), t && t.response && (t.response.data = or.call(
        o,
        o.transformResponse,
        t.response
      ), t.response.headers = j.from(t.response.headers))), Promise.reject(t);
    }
  );
}
const Pe = "1.13.6", Vo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((o, r) => {
  Vo[o] = function(t) {
    return typeof t === o || "a" + (r < 1 ? "n " : " ") + o;
  };
});
const Zr = {};
Vo.transitional = function(r, e, t) {
  function n(i, a) {
    return "[Axios v" + Pe + "] Transitional option '" + i + "'" + a + (t ? ". " + t : "");
  }
  return (i, a, s) => {
    if (r === !1)
      throw new v(
        n(a, " has been removed" + (e ? " in " + e : "")),
        v.ERR_DEPRECATED
      );
    return e && !Zr[a] && (Zr[a] = !0, console.warn(
      n(
        a,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), r ? r(i, a, s) : !0;
  };
};
Vo.spelling = function(r) {
  return (e, t) => (console.warn(`${t} is likely a misspelling of ${r}`), !0);
};
function cp(o, r, e) {
  if (typeof o != "object")
    throw new v("options must be an object", v.ERR_BAD_OPTION_VALUE);
  const t = Object.keys(o);
  let n = t.length;
  for (; n-- > 0; ) {
    const i = t[n], a = r[i];
    if (a) {
      const s = o[i], l = s === void 0 || a(s, i, o);
      if (l !== !0)
        throw new v(
          "option " + i + " must be " + l,
          v.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (e !== !0)
      throw new v("Unknown option " + i, v.ERR_BAD_OPTION);
  }
}
const jo = {
  assertOptions: cp,
  validators: Vo
}, M = jo.validators;
let lo = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new Ir(),
      response: new Ir()
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
    t !== void 0 && jo.assertOptions(
      t,
      {
        silentJSONParsing: M.transitional(M.boolean),
        forcedJSONParsing: M.transitional(M.boolean),
        clarifyTimeoutError: M.transitional(M.boolean),
        legacyInterceptorReqResOrdering: M.transitional(M.boolean)
      },
      !1
    ), n != null && (u.isFunction(n) ? e.paramsSerializer = {
      serialize: n
    } : jo.assertOptions(
      n,
      {
        encode: M.function,
        serialize: M.function
      },
      !0
    )), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), jo.assertOptions(
      e,
      {
        baseUrl: M.spelling("baseURL"),
        withXsrfToken: M.spelling("withXSRFToken")
      },
      !0
    ), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let a = i && u.merge(i.common, i[e.method]);
    i && u.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (f) => {
      delete i[f];
    }), e.headers = j.concat(a, i);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(h) {
      if (typeof h.runWhen == "function" && h.runWhen(e) === !1)
        return;
      l = l && h.synchronous;
      const p = e.transitional || gr;
      p && p.legacyInterceptorReqResOrdering ? s.unshift(h.fulfilled, h.rejected) : s.push(h.fulfilled, h.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(h) {
      c.push(h.fulfilled, h.rejected);
    });
    let d, g = 0, m;
    if (!l) {
      const f = [Kr.bind(this), void 0];
      for (f.unshift(...s), f.push(...c), m = f.length, d = Promise.resolve(e); g < m; )
        d = d.then(f[g++], f[g++]);
      return d;
    }
    m = s.length;
    let b = e;
    for (; g < m; ) {
      const f = s[g++], h = s[g++];
      try {
        b = f(b);
      } catch (p) {
        h.call(this, p);
        break;
      }
    }
    try {
      d = Kr.call(this, b);
    } catch (f) {
      return Promise.reject(f);
    }
    for (g = 0, m = c.length; g < m; )
      d = d.then(c[g++], c[g++]);
    return d;
  }
  getUri(r) {
    r = uo(this.defaults, r);
    const e = Te(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Se(e, r.params, r.paramsSerializer);
  }
};
u.forEach(["delete", "get", "head", "options"], function(r) {
  lo.prototype[r] = function(e, t) {
    return this.request(
      uo(t || {}, {
        method: r,
        url: e,
        data: (t || {}).data
      })
    );
  };
});
u.forEach(["post", "put", "patch"], function(r) {
  function e(t) {
    return function(i, a, s) {
      return this.request(
        uo(s || {}, {
          method: r,
          headers: t ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: i,
          data: a
        })
      );
    };
  }
  lo.prototype[r] = e(), lo.prototype[r + "Form"] = e(!0);
});
let lp = class De {
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
      const a = new Promise((s) => {
        t.subscribe(s), i = s;
      }).then(n);
      return a.cancel = function() {
        t.unsubscribe(i);
      }, a;
    }, r(function(i, a, s) {
      t.reason || (t.reason = new Eo(i, a, s), e(t.reason));
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
      token: new De(function(n) {
        r = n;
      }),
      cancel: r
    };
  }
};
function dp(o) {
  return function(e) {
    return o.apply(null, e);
  };
}
function up(o) {
  return u.isObject(o) && o.isAxiosError === !0;
}
const lr = {
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
Object.entries(lr).forEach(([o, r]) => {
  lr[r] = o;
});
function Le(o) {
  const r = new lo(o), e = he(lo.prototype.request, r);
  return u.extend(e, lo.prototype, r, { allOwnKeys: !0 }), u.extend(e, r, null, { allOwnKeys: !0 }), e.create = function(n) {
    return Le(uo(o, n));
  }, e;
}
const R = Le(Oo);
R.Axios = lo;
R.CanceledError = Eo;
R.CancelToken = lp;
R.isCancel = Oe;
R.VERSION = Pe;
R.toFormData = qo;
R.AxiosError = v;
R.Cancel = R.CanceledError;
R.all = function(r) {
  return Promise.all(r);
};
R.spread = dp;
R.isAxiosError = up;
R.mergeConfig = uo;
R.AxiosHeaders = j;
R.formToJSON = (o) => _e(u.isHTMLForm(o) ? new FormData(o) : o);
R.getAdapter = ze.getAdapter;
R.HttpStatusCode = lr;
R.default = R;
const {
  Axios: $p,
  AxiosError: Bp,
  CanceledError: Rp,
  isCancel: Sp,
  CancelToken: _p,
  VERSION: Op,
  all: Ep,
  Cancel: Tp,
  isAxiosError: Ap,
  spread: Np,
  toFormData: zp,
  AxiosHeaders: Pp,
  HttpStatusCode: Dp,
  formToJSON: Lp,
  getAdapter: jp,
  mergeConfig: Fp
} = R;
function fp() {
  const o = Y(!1), r = Y(null);
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
const gp = { key: 0 }, pp = ["innerHTML"], mp = {
  key: 1,
  class: "mt-2 text-xs flex items-center gap-2"
}, hp = { class: "text-blue-500 truncate max-w-xs" }, bp = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=upload_collection", vp = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", yp = /* @__PURE__ */ at({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(o) {
    const r = Y([]), e = Y(""), t = Y(""), n = Y(null), { post: i, error: a } = fp(), s = async (d, g = "info") => {
      await O0("msg", {
        type: "show",
        _p: {},
        _$p: {},
        custom: {
          msg: d,
          options: {
            type: g,
            position: "top-right",
            autoClose: 3e3,
            theme: "light"
          }
        }
      });
    }, l = async () => {
      if (console.log("schema", n.value), !r.value.length) return s("Please select a file first", "warn");
      const d = r.value[0], g = new FormData();
      g.append("file", d), t.value && g.append("collection", t.value), n.value && g.append("schema", n.value), s("Uploading...", "info");
      const m = await i(bp, g, vp);
      if (!m)
        return s(`Error: ${a.value || "Upload failed"}`, "error"), console.log("Error uploading collection:", a.value);
      console.log("Collection upload response:", m), e.value = m.message || "Upload Successful", s("File uploaded successfully!", "success");
    }, c = Y(null);
    return Qr(() => {
      (async () => {
        let d = "", g = {
          l: [
            // --- 1. TOAST COMPONENT ADDED HERE ---
            {
              id: "c78c-form_toast",
              type: "form_toast",
              slug: "form_toast",
              data: {
                env: "prod"
              }
            },
            // --- 2. MAIN FORM HOLDER ---
            {
              id: "c78c-form_holder",
              type: "form_holder",
              slug: "form_holder",
              data: {
                title: "Bulk Collection Upload",
                mode: "manual",
                class: {
                  b: "bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
                },
                ce_file: {
                  data: {
                    l: [
                      // Collection Name Input
                      {
                        id: "section-collection-id",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "Collection Name (Optional)",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "input-collection-id",
                        type: "form_inputtext",
                        slug: "form_inputtext",
                        data: {
                          value: "",
                          placeholder: "e.g. products_backup",
                          style: {},
                          class: "w-auto",
                          variant: "outlined",
                          form: { section_id: "section-collection-id" }
                        }
                      },
                      {
                        id: "form_section-fileupload",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "Select JSON/Excel/CSV File",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "form_fileupload",
                        type: "form_fileupload",
                        slug: "form_fileupload",
                        data: {
                          url: "/api/upload",
                          multiple: !1,
                          accept: ".json,.csv,.xlsx,.xls",
                          maxFileSize: 5e7,
                          auto: !1,
                          emptyText: "Drop your data file here",
                          class: "w-auto",
                          mode: "advanced",
                          customUpload: !0,
                          form: { section_id: "form_section-fileupload" }
                        }
                      },
                      {
                        id: "form_section-schema",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "form_json-schema",
                        type: "form_json",
                        slug: "form_json",
                        data: {
                          value: [
                            {
                              name: "name",
                              type: "string"
                            },
                            /*{
                              "name": "url",
                              "type": "string"
                            },
                            {
                              "name": "version",
                              "type": "string"
                            },*/
                            {
                              name: ".*",
                              type: "auto"
                            }
                          ],
                          //{},
                          class: "w-[300px] h-[100px]",
                          form: { section_id: "form_section-schema" }
                        }
                      },
                      {
                        id: "form_section-button",
                        type: "form_section",
                        slug: "form_section",
                        data: { label: "", l: [], theme: "light" }
                      },
                      {
                        id: "form_button",
                        type: "form_button",
                        slug: "form_button",
                        data: {
                          label: "Start Bulk Upload",
                          form: { section_id: "form_section-button" }
                        }
                      }
                    ]
                  }
                }
              }
            }
          ]
        };
        const m = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
          }
        }, b = await A0(m), f = await N0(m);
        T0("child:msg", async (p) => {
          p.type === "fileUpload:uploader" && (r.value = p.custom?.event?.files || []), p.type === "inputText:value" && p._$p.data.curr.id === "input-collection-id" && (t.value = p.custom.value), p.type === "json:value" && p._$p.data.curr.id === "form_json-schema" && (n.value = p.custom.value, console.log("schma ", n.value)), p.type === "click" && l();
        }), await (async () => {
          const p = await b.set({ data: g });
          c.value = p.r || "", d = p.style;
          const y = document.createElement("style");
          document.head.appendChild(y), y.innerHTML = d, setTimeout(async () => {
            await f.set({ data: g });
          }, 200);
        })();
      })();
    }), (d, g) => (Jo(), Xo(st, null, [
      c.value ? (Jo(), Xo("div", gp, [
        Yo("div", { innerHTML: c.value }, null, 8, pp)
      ])) : vr("", !0),
      e.value ? (Jo(), Xo("div", mp, [
        g[0] || (g[0] = Yo("span", { class: "text-gray-400" }, "Response:", -1)),
        Yo("span", hp, it(e.value), 1)
      ])) : vr("", !0)
    ], 64));
  }
}), Ip = async (o) => ({
  set: async (r) => {
    console.log(`--hydrator [${r.data.curr.type}]`);
    const t = ct(yp, {
      _p: o,
      _$p: r
    });
    t.use(en, {
      theme: {
        preset: R0
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
  Ip as hydrator,
  Ip as index
};
