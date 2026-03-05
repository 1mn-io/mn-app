import { r as zr, g as Oo, o as Jo, n as Or, w as ao, a as L, b as xo, d as jr, c as fo, e as go, f as to, t as Tr, h as Nr, i as Pr, j as Dr, k as Ir } from "./runtime-dom.esm-bundler-BTBlZuAV.js";
var Lr = Object.defineProperty, jo = Object.getOwnPropertySymbols, Ar = Object.prototype.hasOwnProperty, Er = Object.prototype.propertyIsEnumerable, To = (o, r, e) => r in o ? Lr(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, Wr = (o, r) => {
  for (var e in r || (r = {})) Ar.call(r, e) && To(o, e, r[e]);
  if (jo) for (var e of jo(r)) Er.call(r, e) && To(o, e, r[e]);
  return o;
};
function So(o) {
  return o == null || o === "" || Array.isArray(o) && o.length === 0 || !(o instanceof Date) && typeof o == "object" && Object.keys(o).length === 0;
}
function Mr(o) {
  return typeof o == "function" && "call" in o && "apply" in o;
}
function _(o) {
  return !So(o);
}
function V(o, r = !0) {
  return o instanceof Object && o.constructor === Object && (r || Object.keys(o).length !== 0);
}
function Go(o = {}, r = {}) {
  let e = Wr({}, o);
  return Object.keys(r).forEach((t) => {
    let a = t;
    V(r[a]) && a in o && V(o[a]) ? e[a] = Go(o[a], r[a]) : e[a] = r[a];
  }), e;
}
function Fr(...o) {
  return o.reduce((r, e, t) => t === 0 ? e : Go(r, e), {});
}
function H(o, ...r) {
  return Mr(o) ? o(...r) : o;
}
function eo(o, r = !0) {
  return typeof o == "string" && (r || o !== "");
}
function Hr(o) {
  return _(o) && !isNaN(o);
}
function X(o, r) {
  if (r) {
    let e = r.test(o);
    return r.lastIndex = 0, e;
  }
  return !1;
}
function Ur(...o) {
  return Fr(...o);
}
function no(o) {
  return o && o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function qo(o) {
  return eo(o) ? o.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : o;
}
function Ko() {
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
function Yr(o) {
  if (o) {
    let r = o.parentNode;
    return r && r instanceof ShadowRoot && r.host && (r = r.host), r;
  }
  return null;
}
function Vr(o) {
  return !!(o !== null && typeof o < "u" && o.nodeName && Yr(o));
}
function Zo(o) {
  return typeof Element < "u" ? o instanceof Element : o !== null && typeof o == "object" && o.nodeType === 1 && typeof o.nodeName == "string";
}
function Co(o, r = {}) {
  if (Zo(o)) {
    let e = (t, a) => {
      var s, c;
      let l = (s = o?.$attrs) != null && s[t] ? [(c = o?.$attrs) == null ? void 0 : c[t]] : [];
      return [a].flat().reduce((n, i) => {
        if (i != null) {
          let f = typeof i;
          if (f === "string" || f === "number") n.push(i);
          else if (f === "object") {
            let m = Array.isArray(i) ? e(t, i) : Object.entries(i).map(([d, u]) => t === "style" && (u || u === 0) ? `${d.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${u}` : u ? d : void 0);
            n = m.length ? n.concat(m.filter((d) => !!d)) : n;
          }
        }
        return n;
      }, l);
    };
    Object.entries(r).forEach(([t, a]) => {
      if (a != null) {
        let s = t.match(/^on(.+)/);
        s ? o.addEventListener(s[1].toLowerCase(), a) : t === "p-bind" || t === "pBind" ? Co(o, a) : (a = t === "class" ? [...new Set(e("class", a))].join(" ").trim() : t === "style" ? e("style", a).join(";").trim() : a, (o.$attrs = o.$attrs || {}) && (o.$attrs[t] = a), o.setAttribute(t, a));
      }
    });
  }
}
function Xr() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Jr(o, r = "", e) {
  Zo(o) && e !== null && e !== void 0 && o.setAttribute(r, e);
}
var Gr = Object.defineProperty, qr = Object.defineProperties, Kr = Object.getOwnPropertyDescriptors, vo = Object.getOwnPropertySymbols, Qo = Object.prototype.hasOwnProperty, or = Object.prototype.propertyIsEnumerable, No = (o, r, e) => r in o ? Gr(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, P = (o, r) => {
  for (var e in r || (r = {})) Qo.call(r, e) && No(o, e, r[e]);
  if (vo) for (var e of vo(r)) or.call(r, e) && No(o, e, r[e]);
  return o;
}, ko = (o, r) => qr(o, Kr(r)), M = (o, r) => {
  var e = {};
  for (var t in o) Qo.call(o, t) && r.indexOf(t) < 0 && (e[t] = o[t]);
  if (o != null && vo) for (var t of vo(o)) r.indexOf(t) < 0 && or.call(o, t) && (e[t] = o[t]);
  return e;
}, Zr = Ko(), F = Zr, io = /{([^}]*)}/g, rr = /(\d+\s+[\+\-\*\/]\s+\d+)/g, er = /var\([^)]+\)/g;
function Po(o) {
  return eo(o) ? o.replace(/[A-Z]/g, (r, e) => e === 0 ? r : "." + r.toLowerCase()).toLowerCase() : o;
}
function Qr(o) {
  return V(o) && o.hasOwnProperty("$value") && o.hasOwnProperty("$type") ? o.$value : o;
}
function oe(o) {
  return o.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function $o(o = "", r = "") {
  return oe(`${eo(o, !1) && eo(r, !1) ? `${o}-` : o}${r}`);
}
function tr(o = "", r = "") {
  return `--${$o(o, r)}`;
}
function re(o = "") {
  let r = (o.match(/{/g) || []).length, e = (o.match(/}/g) || []).length;
  return (r + e) % 2 !== 0;
}
function ar(o, r = "", e = "", t = [], a) {
  if (eo(o)) {
    let s = o.trim();
    if (re(s)) return;
    if (X(s, io)) {
      let c = s.replaceAll(io, (l) => {
        let n = l.replace(/{|}/g, "").split(".").filter((i) => !t.some((f) => X(i, f)));
        return `var(${tr(e, qo(n.join("-")))}${_(a) ? `, ${a}` : ""})`;
      });
      return X(c.replace(er, "0"), rr) ? `calc(${c})` : c;
    }
    return s;
  } else if (Hr(o)) return o;
}
function ee(o, r, e) {
  eo(r, !1) && o.push(`${r}:${e};`);
}
function oo(o, r) {
  return o ? `${o}{${r}}` : "";
}
function nr(o, r) {
  if (o.indexOf("dt(") === -1) return o;
  function e(c, l) {
    let n = [], i = 0, f = "", m = null, d = 0;
    for (; i <= c.length; ) {
      let u = c[i];
      if ((u === '"' || u === "'" || u === "`") && c[i - 1] !== "\\" && (m = m === u ? null : u), !m && (u === "(" && d++, u === ")" && d--, (u === "," || i === c.length) && d === 0)) {
        let h = f.trim();
        h.startsWith("dt(") ? n.push(nr(h, l)) : n.push(t(h)), f = "", i++;
        continue;
      }
      u !== void 0 && (f += u), i++;
    }
    return n;
  }
  function t(c) {
    let l = c[0];
    if ((l === '"' || l === "'" || l === "`") && c[c.length - 1] === l) return c.slice(1, -1);
    let n = Number(c);
    return isNaN(n) ? c : n;
  }
  let a = [], s = [];
  for (let c = 0; c < o.length; c++) if (o[c] === "d" && o.slice(c, c + 3) === "dt(") s.push(c), c += 2;
  else if (o[c] === ")" && s.length > 0) {
    let l = s.pop();
    s.length === 0 && a.push([l, c]);
  }
  if (!a.length) return o;
  for (let c = a.length - 1; c >= 0; c--) {
    let [l, n] = a[c], i = o.slice(l + 3, n), f = e(i, r), m = r(...f);
    o = o.slice(0, l) + m + o.slice(n + 1);
  }
  return o;
}
var J = (...o) => te(O.getTheme(), ...o), te = (o = {}, r, e, t) => {
  if (r) {
    let { variable: a, options: s } = O.defaults || {}, { prefix: c, transform: l } = o?.options || s || {}, n = X(r, io) ? r : `{${r}}`;
    return t === "value" || So(t) && l === "strict" ? O.getTokenValue(r) : ar(n, void 0, c, [a.excludedKeyRegex], e);
  }
  return "";
};
function po(o, ...r) {
  if (o instanceof Array) {
    let e = o.reduce((t, a, s) => {
      var c;
      return t + a + ((c = H(r[s], { dt: J })) != null ? c : "");
    }, "");
    return nr(e, J);
  }
  return H(o, { dt: J });
}
function ae(o, r = {}) {
  let e = O.defaults.variable, { prefix: t = e.prefix, selector: a = e.selector, excludedKeyRegex: s = e.excludedKeyRegex } = r, c = [], l = [], n = [{ node: o, path: t }];
  for (; n.length; ) {
    let { node: f, path: m } = n.pop();
    for (let d in f) {
      let u = f[d], h = Qr(u), C = X(d, s) ? $o(m) : $o(m, qo(d));
      if (V(h)) n.push({ node: h, path: C });
      else {
        let $ = tr(C), B = ar(h, C, t, [s]);
        ee(l, $, B);
        let S = C;
        t && S.startsWith(t + "-") && (S = S.slice(t.length + 1)), c.push(S.replace(/-/g, "."));
      }
    }
  }
  let i = l.join("");
  return { value: l, tokens: c, declarations: i, css: oo(a, i) };
}
var N = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(o) {
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
  var s, c, l, n, i, f, m;
  let { preset: d, options: u } = r, h, C, $, B, S, A, E;
  if (_(d) && u.transform !== "strict") {
    let { primitive: b, semantic: w, extend: x } = d, y = w || {}, { colorScheme: p } = y, g = M(y, ["colorScheme"]), v = x || {}, { colorScheme: k } = v, T = M(v, ["colorScheme"]), j = p || {}, { dark: D } = j, G = M(j, ["dark"]), U = k || {}, { dark: q } = U, K = M(U, ["dark"]), W = _(b) ? this._toVariables({ primitive: b }, u) : {}, I = _(g) ? this._toVariables({ semantic: g }, u) : {}, Y = _(G) ? this._toVariables({ light: G }, u) : {}, uo = _(D) ? this._toVariables({ dark: D }, u) : {}, Z = _(T) ? this._toVariables({ semantic: T }, u) : {}, Ro = _(K) ? this._toVariables({ light: K }, u) : {}, zo = _(q) ? this._toVariables({ dark: q }, u) : {}, [ur, fr] = [(s = W.declarations) != null ? s : "", W.tokens], [gr, pr] = [(c = I.declarations) != null ? c : "", I.tokens || []], [mr, br] = [(l = Y.declarations) != null ? l : "", Y.tokens || []], [hr, vr] = [(n = uo.declarations) != null ? n : "", uo.tokens || []], [yr, kr] = [(i = Z.declarations) != null ? i : "", Z.tokens || []], [wr, xr] = [(f = Ro.declarations) != null ? f : "", Ro.tokens || []], [Cr, $r] = [(m = zo.declarations) != null ? m : "", zo.tokens || []];
    h = this.transformCSS(o, ur, "light", "variable", u, t, a), C = fr;
    let Br = this.transformCSS(o, `${gr}${mr}`, "light", "variable", u, t, a), _r = this.transformCSS(o, `${hr}`, "dark", "variable", u, t, a);
    $ = `${Br}${_r}`, B = [.../* @__PURE__ */ new Set([...pr, ...br, ...vr])];
    let Sr = this.transformCSS(o, `${yr}${wr}color-scheme:light`, "light", "variable", u, t, a), Rr = this.transformCSS(o, `${Cr}color-scheme:dark`, "dark", "variable", u, t, a);
    S = `${Sr}${Rr}`, A = [.../* @__PURE__ */ new Set([...kr, ...xr, ...$r])], E = H(d.css, { dt: J });
  }
  return { primitive: { css: h, tokens: C }, semantic: { css: $, tokens: B }, global: { css: S, tokens: A }, style: E };
}, getPreset({ name: o = "", preset: r = {}, options: e, params: t, set: a, defaults: s, selector: c }) {
  var l, n, i;
  let f, m, d;
  if (_(r) && e.transform !== "strict") {
    let u = o.replace("-directive", ""), h = r, { colorScheme: C, extend: $, css: B } = h, S = M(h, ["colorScheme", "extend", "css"]), A = $ || {}, { colorScheme: E } = A, b = M(A, ["colorScheme"]), w = C || {}, { dark: x } = w, y = M(w, ["dark"]), p = E || {}, { dark: g } = p, v = M(p, ["dark"]), k = _(S) ? this._toVariables({ [u]: P(P({}, S), b) }, e) : {}, T = _(y) ? this._toVariables({ [u]: P(P({}, y), v) }, e) : {}, j = _(x) ? this._toVariables({ [u]: P(P({}, x), g) }, e) : {}, [D, G] = [(l = k.declarations) != null ? l : "", k.tokens || []], [U, q] = [(n = T.declarations) != null ? n : "", T.tokens || []], [K, W] = [(i = j.declarations) != null ? i : "", j.tokens || []], I = this.transformCSS(u, `${D}${U}`, "light", "variable", e, a, s, c), Y = this.transformCSS(u, K, "dark", "variable", e, a, s, c);
    f = `${I}${Y}`, m = [.../* @__PURE__ */ new Set([...G, ...q, ...W])], d = H(B, { dt: J });
  }
  return { css: f, tokens: m, style: d };
}, getPresetC({ name: o = "", theme: r = {}, params: e, set: t, defaults: a }) {
  var s;
  let { preset: c, options: l } = r, n = (s = c?.components) == null ? void 0 : s[o];
  return this.getPreset({ name: o, preset: n, options: l, params: e, set: t, defaults: a });
}, getPresetD({ name: o = "", theme: r = {}, params: e, set: t, defaults: a }) {
  var s, c;
  let l = o.replace("-directive", ""), { preset: n, options: i } = r, f = ((s = n?.components) == null ? void 0 : s[l]) || ((c = n?.directives) == null ? void 0 : c[l]);
  return this.getPreset({ name: l, preset: f, options: i, params: e, set: t, defaults: a });
}, applyDarkColorScheme(o) {
  return !(o.darkModeSelector === "none" || o.darkModeSelector === !1);
}, getColorSchemeOption(o, r) {
  var e;
  return this.applyDarkColorScheme(o) ? this.regex.resolve(o.darkModeSelector === !0 ? r.options.darkModeSelector : (e = o.darkModeSelector) != null ? e : r.options.darkModeSelector) : [];
}, getLayerOrder(o, r = {}, e, t) {
  let { cssLayer: a } = r;
  return a ? `@layer ${H(a.order || a.name || "primeui", e)}` : "";
}, getCommonStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: a, defaults: s }) {
  let c = this.getCommon({ name: o, theme: r, params: e, set: a, defaults: s }), l = Object.entries(t).reduce((n, [i, f]) => n.push(`${i}="${f}"`) && n, []).join(" ");
  return Object.entries(c || {}).reduce((n, [i, f]) => {
    if (V(f) && Object.hasOwn(f, "css")) {
      let m = no(f.css), d = `${i}-variables`;
      n.push(`<style type="text/css" data-primevue-style-id="${d}" ${l}>${m}</style>`);
    }
    return n;
  }, []).join("");
}, getStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: a, defaults: s }) {
  var c;
  let l = { name: o, theme: r, params: e, set: a, defaults: s }, n = (c = o.includes("-directive") ? this.getPresetD(l) : this.getPresetC(l)) == null ? void 0 : c.css, i = Object.entries(t).reduce((f, [m, d]) => f.push(`${m}="${d}"`) && f, []).join(" ");
  return n ? `<style type="text/css" data-primevue-style-id="${o}-variables" ${i}>${no(n)}</style>` : "";
}, createTokens(o = {}, r, e = "", t = "", a = {}) {
  let s = function(l, n = {}, i = []) {
    if (i.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: l, path: this.path, paths: n, value: void 0 };
    i.push(this.path), n.name = this.path, n.binding || (n.binding = {});
    let f = this.value;
    if (typeof this.value == "string" && io.test(this.value)) {
      let m = this.value.trim().replace(io, (d) => {
        var u;
        let h = d.slice(1, -1), C = this.tokens[h];
        if (!C) return console.warn(`Token not found for path: ${h}`), "__UNRESOLVED__";
        let $ = C.computed(l, n, i);
        return Array.isArray($) && $.length === 2 ? `light-dark(${$[0].value},${$[1].value})` : (u = $?.value) != null ? u : "__UNRESOLVED__";
      });
      f = rr.test(m.replace(er, "0")) ? `calc(${m})` : m;
    }
    return So(n.binding) && delete n.binding, i.pop(), { colorScheme: l, path: this.path, paths: n, value: f.includes("__UNRESOLVED__") ? void 0 : f };
  }, c = (l, n, i) => {
    Object.entries(l).forEach(([f, m]) => {
      let d = X(f, r.variable.excludedKeyRegex) ? n : n ? `${n}.${Po(f)}` : Po(f), u = i ? `${i}.${f}` : f;
      V(m) ? c(m, d, u) : (a[d] || (a[d] = { paths: [], computed: (h, C = {}, $ = []) => {
        if (a[d].paths.length === 1) return a[d].paths[0].computed(a[d].paths[0].scheme, C.binding, $);
        if (h && h !== "none") for (let B = 0; B < a[d].paths.length; B++) {
          let S = a[d].paths[B];
          if (S.scheme === h) return S.computed(h, C.binding, $);
        }
        return a[d].paths.map((B) => B.computed(B.scheme, C[B.scheme], $));
      } }), a[d].paths.push({ path: u, value: m, scheme: u.includes("colorScheme.light") ? "light" : u.includes("colorScheme.dark") ? "dark" : "none", computed: s, tokens: a }));
    });
  };
  return c(o, e, t), a;
}, getTokenValue(o, r, e) {
  var t;
  let a = ((l) => l.split(".").filter((n) => !X(n.toLowerCase(), e.variable.excludedKeyRegex)).join("."))(r), s = r.includes("colorScheme.light") ? "light" : r.includes("colorScheme.dark") ? "dark" : void 0, c = [(t = o[a]) == null ? void 0 : t.computed(s)].flat().filter((l) => l);
  return c.length === 1 ? c[0].value : c.reduce((l = {}, n) => {
    let i = n, { colorScheme: f } = i, m = M(i, ["colorScheme"]);
    return l[f] = m, l;
  }, void 0);
}, getSelectorRule(o, r, e, t) {
  return e === "class" || e === "attr" ? oo(_(r) ? `${o}${r},${o} ${r}` : o, t) : oo(o, oo(r ?? ":root,:host", t));
}, transformCSS(o, r, e, t, a = {}, s, c, l) {
  if (_(r)) {
    let { cssLayer: n } = a;
    if (t !== "style") {
      let i = this.getColorSchemeOption(a, c);
      r = e === "dark" ? i.reduce((f, { type: m, selector: d }) => (_(d) && (f += d.includes("[CSS]") ? d.replace("[CSS]", r) : this.getSelectorRule(d, l, m, r)), f), "") : oo(l ?? ":root,:host", r);
    }
    if (n) {
      let i = { name: "primeui" };
      V(n) && (i.name = H(n.name, { name: o, type: t })), _(i.name) && (r = oo(`@layer ${i.name}`, r), s?.layerNames(i.name));
    }
    return r;
  }
  return "";
} }, O = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(o = {}) {
  let { theme: r } = o;
  r && (this._theme = ko(P({}, r), { options: P(P({}, this.defaults.options), r.options) }), this._tokens = N.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
  this.update({ theme: o }), F.emit("theme:change", o);
}, getPreset() {
  return this.preset;
}, setPreset(o) {
  this._theme = ko(P({}, this.theme), { preset: o }), this._tokens = N.createTokens(o, this.defaults), this.clearLoadedStyleNames(), F.emit("preset:change", o), F.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(o) {
  this._theme = ko(P({}, this.theme), { options: o }), this.clearLoadedStyleNames(), F.emit("options:change", o), F.emit("theme:change", this.theme);
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
  return N.getTokenValue(this.tokens, o, this.defaults);
}, getCommon(o = "", r) {
  return N.getCommon({ name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(o = "", r) {
  let e = { name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return N.getPresetC(e);
}, getDirective(o = "", r) {
  let e = { name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return N.getPresetD(e);
}, getCustomPreset(o = "", r, e, t) {
  let a = { name: o, preset: r, options: this.options, selector: e, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return N.getPreset(a);
}, getLayerOrderCSS(o = "") {
  return N.getLayerOrder(o, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(o = "", r, e = "style", t) {
  return N.transformCSS(o, r, t, e, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(o = "", r, e = {}) {
  return N.getCommonStyleSheet({ name: o, theme: this.theme, params: r, props: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(o, r, e = {}) {
  return N.getStyleSheet({ name: o, theme: this.theme, params: r, props: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(o) {
  this._loadingStyles.add(o);
}, onStyleUpdated(o) {
  this._loadingStyles.add(o);
}, onStyleLoaded(o, { name: r }) {
  this._loadingStyles.size && (this._loadingStyles.delete(r), F.emit(`theme:${r}:load`, o), !this._loadingStyles.size && F.emit("theme:load"));
} }, z = {
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
function co(o) {
  "@babel/helpers - typeof";
  return co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, co(o);
}
function Do(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(o, a).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Io(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Do(Object(e), !0).forEach(function(t) {
      ie(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Do(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function ie(o, r, e) {
  return (r = ce(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function ce(o) {
  var r = de(o, "string");
  return co(r) == "symbol" ? r : r + "";
}
function de(o, r) {
  if (co(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (co(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function le(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  Oo() && Oo().components ? Jo(o) : r ? o() : Or(o);
}
var se = 0;
function ue(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = L(!1), t = L(o), a = L(null), s = Xr() ? window.document : void 0, c = r.document, l = c === void 0 ? s : c, n = r.immediate, i = n === void 0 ? !0 : n, f = r.manual, m = f === void 0 ? !1 : f, d = r.name, u = d === void 0 ? "style_".concat(++se) : d, h = r.id, C = h === void 0 ? void 0 : h, $ = r.media, B = $ === void 0 ? void 0 : $, S = r.nonce, A = S === void 0 ? void 0 : S, E = r.first, b = E === void 0 ? !1 : E, w = r.onMounted, x = w === void 0 ? void 0 : w, y = r.onUpdated, p = y === void 0 ? void 0 : y, g = r.onLoad, v = g === void 0 ? void 0 : g, k = r.props, T = k === void 0 ? {} : k, j = function() {
  }, D = function(q) {
    var K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (l) {
      var W = Io(Io({}, T), K), I = W.name || u, Y = W.id || C, uo = W.nonce || A;
      a.value = l.querySelector('style[data-primevue-style-id="'.concat(I, '"]')) || l.getElementById(Y) || l.createElement("style"), a.value.isConnected || (t.value = q || o, Co(a.value, {
        type: "text/css",
        id: Y,
        media: B,
        nonce: uo
      }), b ? l.head.prepend(a.value) : l.head.appendChild(a.value), Jr(a.value, "data-primevue-style-id", I), Co(a.value, W), a.value.onload = function(Z) {
        return v?.(Z, {
          name: I
        });
      }, x?.(I)), !e.value && (j = ao(t, function(Z) {
        a.value.textContent = Z, p?.(I);
      }, {
        immediate: !0
      }), e.value = !0);
    }
  }, G = function() {
    !l || !e.value || (j(), Vr(a.value) && l.head.removeChild(a.value), e.value = !1, a.value = null);
  };
  return i && !m && le(D), {
    id: C,
    name: u,
    el: a,
    css: t,
    unload: G,
    load: D,
    isLoaded: zr(e)
  };
}
function lo(o) {
  "@babel/helpers - typeof";
  return lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, lo(o);
}
var Lo, Ao, Eo, Wo;
function Mo(o, r) {
  return me(o) || pe(o, r) || ge(o, r) || fe();
}
function fe() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ge(o, r) {
  if (o) {
    if (typeof o == "string") return Fo(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Fo(o, r) : void 0;
  }
}
function Fo(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++) t[e] = o[e];
  return t;
}
function pe(o, r) {
  var e = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (e != null) {
    var t, a, s, c, l = [], n = !0, i = !1;
    try {
      if (s = (e = e.call(o)).next, r !== 0) for (; !(n = (t = s.call(e)).done) && (l.push(t.value), l.length !== r); n = !0) ;
    } catch (f) {
      i = !0, a = f;
    } finally {
      try {
        if (!n && e.return != null && (c = e.return(), Object(c) !== c)) return;
      } finally {
        if (i) throw a;
      }
    }
    return l;
  }
}
function me(o) {
  if (Array.isArray(o)) return o;
}
function Ho(o, r) {
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
    r % 2 ? Ho(Object(e), !0).forEach(function(t) {
      be(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Ho(Object(e)).forEach(function(t) {
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
  return lo(r) == "symbol" ? r : r + "";
}
function ve(o, r) {
  if (lo(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (lo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function mo(o, r) {
  return r || (r = o.slice(0)), Object.freeze(Object.defineProperties(o, { raw: { value: Object.freeze(r) } }));
}
var ye = function(r) {
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
}, ke = {}, we = {}, Q = {
  name: "base",
  css: ye,
  style: ne,
  classes: ke,
  inlineStyles: we,
  load: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(s) {
      return s;
    }, a = t(po(Lo || (Lo = mo(["", ""])), r));
    return _(a) ? ue(no(a), wo({
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
      return O.transformCSS(e.name || r.name, "".concat(a).concat(po(Ao || (Ao = mo(["", ""])), t)));
    });
  },
  getCommonTheme: function(r) {
    return O.getCommon(this.name, r);
  },
  getComponentTheme: function(r) {
    return O.getComponent(this.name, r);
  },
  getDirectiveTheme: function(r) {
    return O.getDirective(this.name, r);
  },
  getPresetTheme: function(r, e, t) {
    return O.getCustomPreset(this.name, r, e, t);
  },
  getLayerOrderThemeCSS: function() {
    return O.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var t = H(this.css, {
        dt: J
      }) || "", a = no(po(Eo || (Eo = mo(["", "", ""])), t, r)), s = Object.entries(e).reduce(function(c, l) {
        var n = Mo(l, 2), i = n[0], f = n[1];
        return c.push("".concat(i, '="').concat(f, '"')) && c;
      }, []).join(" ");
      return _(a) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(s, ">").concat(a, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return O.getCommonStyleSheet(this.name, r, e);
  },
  getThemeStyleSheet: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [O.getStyleSheet(this.name, r, e)];
    if (this.style) {
      var a = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), s = po(Wo || (Wo = mo(["", ""])), H(this.style, {
        dt: J
      })), c = no(O.transformCSS(a, s)), l = Object.entries(e).reduce(function(n, i) {
        var f = Mo(i, 2), m = f[0], d = f[1];
        return n.push("".concat(m, '="').concat(d, '"')) && n;
      }, []).join(" ");
      _(c) && t.push('<style type="text/css" data-primevue-style-id="'.concat(a, '" ').concat(l, ">").concat(c, "</style>"));
    }
    return t.join("");
  },
  extend: function(r) {
    return wo(wo({}, this), {}, {
      css: void 0,
      style: void 0
    }, r);
  }
}, bo = Ko();
function so(o) {
  "@babel/helpers - typeof";
  return so = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, so(o);
}
function Uo(o, r) {
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
    r % 2 ? Uo(Object(e), !0).forEach(function(t) {
      xe(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Uo(Object(e)).forEach(function(t) {
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
  return so(r) == "symbol" ? r : r + "";
}
function $e(o, r) {
  if (so(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (so(t) != "object") return t;
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
    text: [z.STARTS_WITH, z.CONTAINS, z.NOT_CONTAINS, z.ENDS_WITH, z.EQUALS, z.NOT_EQUALS],
    numeric: [z.EQUALS, z.NOT_EQUALS, z.LESS_THAN, z.LESS_THAN_OR_EQUAL_TO, z.GREATER_THAN, z.GREATER_THAN_OR_EQUAL_TO],
    date: [z.DATE_IS, z.DATE_IS_NOT, z.DATE_BEFORE, z.DATE_AFTER]
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
}, _e = /* @__PURE__ */ Symbol();
function Se(o, r) {
  var e = {
    config: xo(r)
  };
  return o.config.globalProperties.$primevue = e, o.provide(_e, e), Re(), ze(o, e), e;
}
var ro = [];
function Re() {
  F.clear(), ro.forEach(function(o) {
    return o?.();
  }), ro = [];
}
function ze(o, r) {
  var e = L(!1), t = function() {
    var i;
    if (((i = r.config) === null || i === void 0 ? void 0 : i.theme) !== "none" && !O.isStyleNameLoaded("common")) {
      var f, m, d = ((f = Q.getCommonTheme) === null || f === void 0 ? void 0 : f.call(Q)) || {}, u = d.primitive, h = d.semantic, C = d.global, $ = d.style, B = {
        nonce: (m = r.config) === null || m === void 0 || (m = m.csp) === null || m === void 0 ? void 0 : m.nonce
      };
      Q.load(u?.css, ho({
        name: "primitive-variables"
      }, B)), Q.load(h?.css, ho({
        name: "semantic-variables"
      }, B)), Q.load(C?.css, ho({
        name: "global-variables"
      }, B)), Q.loadStyle(ho({
        name: "global-style"
      }, B), $), O.setLoadedStyleName("common");
    }
  };
  F.on("theme:change", function(n) {
    e.value || (o.config.globalProperties.$primevue.config.theme = n, e.value = !0);
  });
  var a = ao(r.config, function(n, i) {
    bo.emit("config:change", {
      newValue: n,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  }), s = ao(function() {
    return r.config.ripple;
  }, function(n, i) {
    bo.emit("config:ripple:change", {
      newValue: n,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  }), c = ao(function() {
    return r.config.theme;
  }, function(n, i) {
    e.value || O.setTheme(n), r.config.unstyled || t(), e.value = !1, bo.emit("config:theme:change", {
      newValue: n,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !1
  }), l = ao(function() {
    return r.config.unstyled;
  }, function(n, i) {
    !n && r.config.theme && t(), bo.emit("config:unstyled:change", {
      newValue: n,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  });
  ro.push(a), ro.push(s), ro.push(c), ro.push(l);
}
var Oe = {
  install: function(r, e) {
    var t = Ur(Be, e);
    Se(r, t);
  }
}, je = { transitionDuration: "{transition.duration}" }, Te = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, Ne = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, Pe = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, De = { root: je, panel: Te, header: Ne, content: Pe }, Ie = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Le = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Ae = { padding: "{list.padding}", gap: "{list.gap}" }, Ee = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, We = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Me = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Fe = { borderRadius: "{border.radius.sm}" }, He = { padding: "{list.option.padding}" }, Ue = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, Ye = { root: Ie, overlay: Le, list: Ae, option: Ee, optionGroup: We, dropdown: Me, chip: Fe, emptyMessage: He, colorScheme: Ue }, Ve = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Xe = { size: "1rem" }, Je = { borderColor: "{content.background}", offset: "-0.75rem" }, Ge = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, qe = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, Ke = { root: Ve, icon: Xe, group: Je, lg: Ge, xl: qe }, Ze = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, Qe = { size: "0.5rem" }, ot = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, rt = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, et = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, tt = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, at = { root: Ze, dot: Qe, sm: ot, lg: rt, xl: et, colorScheme: tt }, nt = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, it = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, ct = { primitive: nt, semantic: it }, dt = { borderRadius: "{content.border.radius}" }, lt = { root: dt }, st = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, ut = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ft = { color: "{navigation.item.icon.color}" }, gt = { root: st, item: ut, separator: ft }, pt = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, mt = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, bt = { root: pt, colorScheme: mt }, ht = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, vt = { padding: "1.25rem", gap: "0.5rem" }, yt = { gap: "0.5rem" }, kt = { fontSize: "1.25rem", fontWeight: "500" }, wt = { color: "{text.muted.color}" }, xt = { root: ht, body: vt, caption: yt, title: kt, subtitle: wt }, Ct = { transitionDuration: "{transition.duration}" }, $t = { gap: "0.25rem" }, Bt = { padding: "1rem", gap: "0.5rem" }, _t = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, St = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, Rt = { root: Ct, content: $t, indicatorList: Bt, indicator: _t, colorScheme: St }, zt = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Ot = { width: "2.5rem", color: "{form.field.icon.color}" }, jt = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Tt = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, Nt = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, Pt = { color: "{form.field.icon.color}" }, Dt = { root: zt, dropdown: Ot, overlay: jt, list: Tt, option: Nt, clearIcon: Pt }, It = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, Lt = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, At = { root: It, icon: Lt }, Et = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, Wt = { width: "2rem", height: "2rem" }, Mt = { size: "1rem" }, Ft = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Ht = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, Ut = { root: Et, image: Wt, icon: Mt, removeIcon: Ft, colorScheme: Ht }, Yt = { transitionDuration: "{transition.duration}" }, Vt = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xt = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, Jt = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, Gt = { root: Yt, preview: Vt, panel: Xt, colorScheme: Jt }, qt = { size: "2rem", color: "{overlay.modal.color}" }, Kt = { gap: "1rem" }, Zt = { icon: qt, content: Kt }, Qt = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, oa = { padding: "{overlay.popover.padding}", gap: "1rem" }, ra = { size: "1.5rem", color: "{overlay.popover.color}" }, ea = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, ta = { root: Qt, content: oa, icon: ra, footer: ea }, aa = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, na = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, ia = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, ca = { mobileIndent: "1rem" }, da = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, la = { borderColor: "{content.border.color}" }, sa = { root: aa, list: na, item: ia, submenu: ca, submenuIcon: da, separator: la }, ua = `
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
`, fa = { transitionDuration: "{transition.duration}" }, ga = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, pa = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ma = { fontWeight: "600" }, ba = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, ha = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, va = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ya = { fontWeight: "600" }, ka = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, wa = { color: "{primary.color}" }, xa = { width: "0.5rem" }, Ca = { width: "1px", color: "{primary.color}" }, $a = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Ba = { size: "2rem" }, _a = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Sa = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, Ra = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, za = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Oa = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, ja = `
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Ta = { root: fa, header: ga, headerCell: pa, columnTitle: ma, row: ba, bodyCell: ha, footerCell: va, columnFooter: ya, footer: ka, dropPoint: wa, columnResizer: xa, resizeIndicator: Ca, sortIcon: $a, loadingIcon: Ba, rowToggleButton: _a, filter: Sa, paginatorTop: Ra, paginatorBottom: za, colorScheme: Oa, css: ja }, Na = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, Pa = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, Da = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, Ia = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, La = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Aa = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, Ea = { root: Na, header: Pa, content: Da, footer: Ia, paginatorTop: La, paginatorBottom: Aa }, Wa = { transitionDuration: "{transition.duration}" }, Ma = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, Fa = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, Ha = { gap: "0.5rem", fontWeight: "500" }, Ua = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ya = { color: "{form.field.icon.color}" }, Va = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, Xa = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, Ja = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, Ga = { margin: "0.5rem 0 0 0" }, qa = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, Ka = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Za = { margin: "0.5rem 0 0 0" }, Qa = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, on = { margin: "0.5rem 0 0 0" }, rn = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, en = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, tn = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, an = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, nn = { root: Wa, panel: Ma, header: Fa, title: Ha, dropdown: Ua, inputIcon: Ya, selectMonth: Va, selectYear: Xa, group: Ja, dayView: Ga, weekDay: qa, date: Ka, monthView: Za, month: Qa, yearView: on, year: rn, buttonbar: en, timePicker: tn, colorScheme: an }, cn = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, dn = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, ln = { fontSize: "1.25rem", fontWeight: "600" }, sn = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, un = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, fn = { root: cn, header: dn, title: ln, content: sn, footer: un }, gn = { borderColor: "{content.border.color}" }, pn = { background: "{content.background}", color: "{text.color}" }, mn = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, bn = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, hn = { root: gn, content: pn, horizontal: mn, vertical: bn }, vn = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, yn = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, kn = { root: vn, item: yn }, wn = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, xn = { padding: "{overlay.modal.padding}" }, Cn = { fontSize: "1.5rem", fontWeight: "600" }, $n = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Bn = { padding: "{overlay.modal.padding}" }, _n = { root: wn, header: xn, title: Cn, content: $n, footer: Bn }, Sn = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, Rn = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, zn = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, On = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, jn = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Tn = { toolbar: Sn, toolbarItem: Rn, overlay: zn, overlayOption: On, content: jn }, Nn = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, Pn = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Dn = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, In = { padding: "0" }, Ln = { root: Nn, legend: Pn, toggleIcon: Dn, content: In }, An = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, En = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, Wn = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, Mn = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, Fn = { gap: "0.5rem" }, Hn = { height: "0.25rem" }, Un = { gap: "0.5rem" }, Yn = { root: An, header: En, content: Wn, file: Mn, fileList: Fn, progressbar: Hn, basic: Un }, Vn = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, Xn = { active: { top: "-1.25rem" } }, Jn = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, Gn = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, qn = { root: Vn, over: Xn, in: Jn, on: Gn }, Kn = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, Zn = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Qn = { size: "1.5rem" }, oi = { background: "{content.background}", padding: "1rem 0.25rem" }, ri = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ei = { size: "1rem" }, ti = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, ai = { gap: "0.5rem", padding: "1rem" }, ni = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ii = { background: "rgba(0, 0, 0, 0.5)" }, ci = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, di = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, li = { size: "1.5rem" }, si = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, ui = { root: Kn, navButton: Zn, navIcon: Qn, thumbnailsContent: oi, thumbnailNavButton: ri, thumbnailNavButtonIcon: ei, caption: ti, indicatorList: ai, indicatorButton: ni, insetIndicatorList: ii, insetIndicatorButton: ci, closeButton: di, closeButtonIcon: li, colorScheme: si }, fi = { color: "{form.field.icon.color}" }, gi = { icon: fi }, pi = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, mi = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, bi = { root: pi, input: mi }, hi = { transitionDuration: "{transition.duration}" }, vi = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, yi = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, ki = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, wi = { root: hi, preview: vi, toolbar: yi, action: ki }, xi = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ci = { handle: xi }, $i = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, Bi = { fontWeight: "500" }, _i = { size: "1rem" }, Si = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, Ri = { root: $i, text: Bi, icon: _i, colorScheme: Si }, zi = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, Oi = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, ji = { root: zi, display: Oi }, Ti = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Ni = { borderRadius: "{border.radius.sm}" }, Pi = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, Di = { root: Ti, chip: Ni, colorScheme: Pi }, Ii = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, Li = { addon: Ii }, Ai = { transitionDuration: "{transition.duration}" }, Ei = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, Wi = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, Mi = { root: Ai, button: Ei, colorScheme: Wi }, Fi = { gap: "0.5rem" }, Hi = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, Ui = { root: Fi, input: Hi }, Yi = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Vi = { root: Yi }, Xi = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ji = { background: "{primary.color}" }, Gi = { background: "{content.border.color}" }, qi = { color: "{text.muted.color}" }, Ki = { root: Xi, value: Ji, range: Gi, text: qi }, Zi = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, Qi = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, oc = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, rc = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, ec = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, tc = { padding: "{list.option.padding}" }, ac = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, nc = { root: Zi, list: Qi, option: oc, optionGroup: rc, checkmark: ec, emptyMessage: tc, colorScheme: ac }, ic = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, cc = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, dc = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, lc = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, sc = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, uc = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, fc = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, gc = { borderColor: "{content.border.color}" }, pc = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, mc = { root: ic, baseItem: cc, item: dc, overlay: lc, submenu: sc, submenuLabel: uc, submenuIcon: fc, separator: gc, mobileButton: pc }, bc = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, hc = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, vc = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, yc = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, kc = { borderColor: "{content.border.color}" }, wc = { root: bc, list: hc, item: vc, submenuLabel: yc, separator: kc }, xc = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, Cc = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, $c = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Bc = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, _c = { borderColor: "{content.border.color}" }, Sc = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Rc = { root: xc, baseItem: Cc, item: $c, submenu: Bc, separator: _c, mobileButton: Sc }, zc = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Oc = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, jc = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, Tc = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, Nc = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Pc = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, Dc = { root: { borderWidth: "1px" } }, Ic = { content: { padding: "0" } }, Lc = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, Ac = { root: zc, content: Oc, text: jc, icon: Tc, closeButton: Nc, closeIcon: Pc, outlined: Dc, simple: Ic, colorScheme: Lc }, Ec = { borderRadius: "{content.border.radius}", gap: "1rem" }, Wc = { background: "{content.border.color}", size: "0.5rem" }, Mc = { gap: "0.5rem" }, Fc = { size: "0.5rem" }, Hc = { size: "1rem" }, Uc = { verticalGap: "0.5rem", horizontalGap: "1rem" }, Yc = { root: Ec, meters: Wc, label: Mc, labelMarker: Fc, labelIcon: Hc, labelList: Uc }, Vc = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Xc = { width: "2.5rem", color: "{form.field.icon.color}" }, Jc = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Gc = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, qc = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, Kc = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Zc = { color: "{form.field.icon.color}" }, Qc = { borderRadius: "{border.radius.sm}" }, od = { padding: "{list.option.padding}" }, rd = { root: Vc, dropdown: Xc, overlay: Jc, list: Gc, option: qc, optionGroup: Kc, chip: Qc, clearIcon: Zc, emptyMessage: od }, ed = { gap: "1.125rem" }, td = { gap: "0.5rem" }, ad = { root: ed, controls: td }, nd = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, id = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, cd = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, dd = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, ld = { root: nd, node: id, nodeToggleButton: cd, connector: dd }, sd = { outline: { width: "2px", color: "{content.background}" } }, ud = { root: sd }, fd = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, gd = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, pd = { color: "{text.muted.color}" }, md = { maxWidth: "2.5rem" }, bd = { root: fd, navButton: gd, currentPageReport: pd, jumpToPageInput: md }, hd = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, vd = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, yd = { padding: "0.375rem 1.125rem" }, kd = { fontWeight: "600" }, wd = { padding: "0 1.125rem 1.125rem 1.125rem" }, xd = { padding: "0 1.125rem 1.125rem 1.125rem" }, Cd = { root: hd, header: vd, toggleableHeader: yd, title: kd, content: wd, footer: xd }, $d = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Bd = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, _d = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Sd = { indent: "1rem" }, Rd = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, zd = { root: $d, panel: Bd, item: _d, submenu: Sd, submenuIcon: Rd }, Od = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, jd = { color: "{form.field.icon.color}" }, Td = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, Nd = { gap: "0.5rem" }, Pd = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, Dd = { meter: Od, icon: jd, overlay: Td, content: Nd, colorScheme: Pd }, Id = { gap: "1.125rem" }, Ld = { gap: "0.5rem" }, Ad = { root: Id, controls: Ld }, Ed = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Wd = { padding: "{overlay.popover.padding}" }, Md = { root: Ed, content: Wd }, Fd = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, Hd = { background: "{primary.color}" }, Ud = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, Yd = { root: Fd, value: Hd, label: Ud }, Vd = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, Xd = { colorScheme: Vd }, Jd = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, Gd = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, qd = { root: Jd, icon: Gd }, Kd = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Zd = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, Qd = { root: Kd, icon: Zd }, ol = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, rl = { colorScheme: ol }, el = { transitionDuration: "{transition.duration}" }, tl = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, al = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, nl = { root: el, bar: tl, colorScheme: al }, il = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, cl = { width: "2.5rem", color: "{form.field.icon.color}" }, dl = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, ll = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, sl = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, ul = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, fl = { color: "{form.field.icon.color}" }, gl = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, pl = { padding: "{list.option.padding}" }, ml = { root: il, dropdown: cl, overlay: dl, list: ll, option: sl, optionGroup: ul, clearIcon: fl, checkmark: gl, emptyMessage: pl }, bl = { borderRadius: "{form.field.border.radius}" }, hl = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, vl = { root: bl, colorScheme: hl }, yl = { borderRadius: "{content.border.radius}" }, kl = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, wl = { root: yl, colorScheme: kl }, xl = { transitionDuration: "{transition.duration}" }, Cl = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, $l = { background: "{primary.color}" }, Bl = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, _l = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, Sl = { root: xl, track: Cl, range: $l, handle: Bl, colorScheme: _l }, Rl = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, zl = { root: Rl }, Ol = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, jl = { root: Ol }, Tl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Nl = { background: "{content.border.color}" }, Pl = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Dl = { root: Tl, gutter: Nl, handle: Pl }, Il = { transitionDuration: "{transition.duration}" }, Ll = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, Al = { padding: "0.5rem", gap: "1rem" }, El = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Wl = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Ml = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, Fl = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, Hl = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, Ul = { root: Il, separator: Ll, step: Al, stepHeader: El, stepTitle: Wl, stepNumber: Ml, steppanels: Fl, steppanel: Hl }, Yl = { transitionDuration: "{transition.duration}" }, Vl = { background: "{content.border.color}" }, Xl = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Jl = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Gl = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, ql = { root: Yl, separator: Vl, itemLink: Xl, itemLabel: Jl, itemNumber: Gl }, Kl = { transitionDuration: "{transition.duration}" }, Zl = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Ql = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, os = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, rs = { height: "1px", bottom: "-1px", background: "{primary.color}" }, es = { root: Kl, tablist: Zl, item: Ql, itemIcon: os, activeBar: rs }, ts = { transitionDuration: "{transition.duration}" }, as = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, ns = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, is = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, cs = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, ds = { height: "1px", bottom: "-1px", background: "{primary.color}" }, ls = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, ss = { root: ts, tablist: as, tab: ns, tabpanel: is, navButton: cs, activeBar: ds, colorScheme: ls }, us = { transitionDuration: "{transition.duration}" }, fs = { background: "{content.background}", borderColor: "{content.border.color}" }, gs = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, ps = { background: "{content.background}", color: "{content.color}" }, ms = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, bs = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, hs = { root: us, tabList: fs, tab: gs, tabPanel: ps, navButton: ms, colorScheme: bs }, vs = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, ys = { size: "0.75rem" }, ks = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, ws = { root: vs, icon: ys, colorScheme: ks }, xs = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, Cs = { gap: "0.25rem" }, $s = { margin: "2px 0" }, Bs = { root: xs, prompt: Cs, commandResponse: $s }, _s = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Ss = { root: _s }, Rs = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, zs = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Os = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, js = { mobileIndent: "1rem" }, Ts = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Ns = { borderColor: "{content.border.color}" }, Ps = { root: Rs, list: zs, item: Os, submenu: js, submenuIcon: Ts, separator: Ns }, Ds = { minHeight: "5rem" }, Is = { eventContent: { padding: "1rem 0" } }, Ls = { eventContent: { padding: "0 1rem" } }, As = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, Es = { color: "{content.border.color}", size: "2px" }, Ws = { event: Ds, horizontal: Is, vertical: Ls, eventMarker: As, eventConnector: Es }, Ms = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Fs = { size: "1.125rem" }, Hs = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, Us = { gap: "0.5rem" }, Ys = { fontWeight: "500", fontSize: "1rem" }, Vs = { fontWeight: "500", fontSize: "0.875rem" }, Xs = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Js = { size: "1rem" }, Gs = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, qs = { root: Ms, icon: Fs, content: Hs, text: Us, summary: Ys, detail: Vs, closeButton: Xs, closeIcon: Js, colorScheme: Gs }, Ks = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, Zs = { disabledColor: "{form.field.disabled.color}" }, Qs = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, ou = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, ru = { root: Ks, icon: Zs, content: Qs, colorScheme: ou }, eu = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, tu = { borderRadius: "50%", size: "1rem" }, au = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, nu = { root: eu, handle: tu, colorScheme: au }, iu = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, cu = { root: iu }, du = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, lu = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, su = { root: du, colorScheme: lu }, uu = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, fu = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, gu = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, pu = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, mu = { size: "2rem" }, bu = { margin: "0 0 0.5rem 0" }, hu = `
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, vu = { root: uu, node: fu, nodeIcon: gu, nodeToggleButton: pu, loadingIcon: mu, filter: bu, css: hu }, yu = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, ku = { width: "2.5rem", color: "{form.field.icon.color}" }, wu = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, xu = { padding: "{list.padding}" }, Cu = { padding: "{list.option.padding}" }, $u = { borderRadius: "{border.radius.sm}" }, Bu = { color: "{form.field.icon.color}" }, _u = { root: yu, dropdown: ku, overlay: wu, tree: xu, emptyMessage: Cu, chip: $u, clearIcon: Bu }, Su = { transitionDuration: "{transition.duration}" }, Ru = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, zu = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Ou = { fontWeight: "600" }, ju = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Tu = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, Nu = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, Pu = { fontWeight: "600" }, Du = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, Iu = { width: "0.5rem" }, Lu = { width: "1px", color: "{primary.color}" }, Au = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Eu = { size: "2rem" }, Wu = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Mu = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Fu = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Hu = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Uu = `
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Yu = { root: Su, header: Ru, headerCell: zu, columnTitle: Ou, row: ju, bodyCell: Tu, footerCell: Nu, columnFooter: Pu, footer: Du, columnResizer: Iu, resizeIndicator: Lu, sortIcon: Au, loadingIcon: Eu, nodeToggleButton: Wu, paginatorTop: Mu, paginatorBottom: Fu, colorScheme: Hu, css: Uu }, Vu = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, Xu = { loader: Vu }, Ju = Object.defineProperty, Gu = Object.defineProperties, qu = Object.getOwnPropertyDescriptors, Yo = Object.getOwnPropertySymbols, Ku = Object.prototype.hasOwnProperty, Zu = Object.prototype.propertyIsEnumerable, Vo = (o, r, e) => r in o ? Ju(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, Xo, Qu = (Xo = ((o, r) => {
  for (var e in r || (r = {})) Ku.call(r, e) && Vo(o, e, r[e]);
  if (Yo) for (var e of Yo(r)) Zu.call(r, e) && Vo(o, e, r[e]);
  return o;
})({}, ct), Gu(Xo, qu({ components: { accordion: De, autocomplete: Ye, avatar: Ke, badge: at, blockui: lt, breadcrumb: gt, button: bt, card: xt, carousel: Rt, cascadeselect: Dt, checkbox: At, chip: Ut, colorpicker: Gt, confirmdialog: Zt, confirmpopup: ta, contextmenu: sa, datatable: Ta, dataview: Ea, datepicker: nn, dialog: fn, divider: hn, dock: kn, drawer: _n, editor: Tn, fieldset: Ln, fileupload: Yn, floatlabel: qn, galleria: ui, iconfield: gi, iftalabel: bi, image: wi, imagecompare: Ci, inlinemessage: Ri, inplace: ji, inputchips: Di, inputgroup: Li, inputnumber: Mi, inputotp: Ui, inputtext: Vi, knob: Ki, listbox: nc, megamenu: mc, menu: wc, menubar: Rc, message: Ac, metergroup: Yc, multiselect: rd, orderlist: ad, organizationchart: ld, overlaybadge: ud, paginator: bd, panel: Cd, panelmenu: zd, password: Dd, picklist: Ad, popover: Md, progressbar: Yd, progressspinner: Xd, radiobutton: qd, rating: Qd, ripple: rl, scrollpanel: nl, select: ml, selectbutton: vl, skeleton: wl, slider: Sl, speeddial: zl, splitbutton: jl, splitter: Dl, stepper: Ul, steps: ql, tabmenu: es, tabs: ss, tabview: hs, tag: ws, terminal: Bs, textarea: Ss, tieredmenu: Ps, timeline: Ws, toast: qs, togglebutton: ru, toggleswitch: nu, toolbar: cu, tooltip: su, tree: vu, treeselect: _u, treetable: Yu, virtualscroller: Xu }, css: ua })));
const Bo = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const r = Math.random() * 16 | 0;
    return (o == "x" ? r : r & 3 | 8).toString(16);
  })
}), ir = async () => ({
  f: {
    name: (o) => `${o.name}${o.id}`
  }
}), cr = async () => ({
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
          ((c) => {
            const l = c.getAttribute("data-ce");
            if (!l)
              return;
            const n = JSON.parse(l).filter((i) => i?.k.startsWith("t-"));
            if (n.length != 0)
              for (const i of n) {
                const f = i.k, m = i.v.split(" ");
                if (f == `t-${r}-class`)
                  for (const d of m)
                    c.classList.add(d);
                else
                  for (const d of m)
                    c.classList.remove(d);
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
function _o(o, r = 1e3) {
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
let of = class {
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
const yo = () => new of();
class dr {
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
let R = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (o) => {
      const r = o?.lib || [];
      for (const [e, t] of r.entries()) {
        const a = t, s = `${a.name}:${o.run_from}`, c = `${o.run_from}_src`;
        let l = a[c];
        const n = `${o.run_from}_src`;
        let i = o?.lazy_lib?.[n] || null;
        if (i && (i = i.replace("{*}", `${a.name}`)), console.log(`_lazy_src: ${i}`), console.log(`_src: ${l}`), R.lib.l.hasOwnProperty(`${s}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(l) && l.includes("/") == !1 && R.lib.inbuilt_lib.indexOf(`${a.name}`) === -1)
            if (i)
              l = i;
            else
              throw `[lib-name=${a.name},lib-src=${l}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (l.startsWith("./") || l.startsWith("../")) {
            const f = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${l}`
            );
            R.lib.l[`${s}`] = {
              lib: f,
              src: l
            };
          }
          if (l.startsWith("http://") || l.startsWith("https://")) {
            const f = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${l}`
            );
            R.lib.l[`${s}`] = {
              lib: f,
              src: l
            };
          }
        }
      }
      console.log(await R.lib.get_all({}));
    },
    get: async (o) => {
      let r = null;
      const e = `${o.name}:${o.run_from}`;
      return R.lib.l.hasOwnProperty(`${e}`) == !1 && await R.lib.set({
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
      }), r = R.lib.l[`${e}`], r;
    },
    get_all: async (o) => R.lib.l
  },
  path: {
    set: (o) => {
      let r = "", e = "";
      const t = o.src.split("/");
      if (o.src.indexOf("://localhost") !== -1 || o.src.indexOf("://127.0.0.1") !== -1 || (e = "/dist"), t.indexOf(o.type) !== -1)
        for (const [a, s] of t.entries()) {
          let c = a == 0 ? "" : "/";
          if (r += `${c}${s}`, s == o.type)
            return `${r}${e}${o.name}`;
        }
      else
        for (const [a, s] of t.entries()) {
          let c = a == 0 ? "" : "/";
          if (r += `${c}${s}`, s == "src")
            return `${r}${e}${o.name}`;
        }
      return `${r}${e}${o.name}`;
    }
  }
};
const lr = yo(), sr = yo(), rf = lr.on;
lr.emit;
const ef = sr.emit, tf = sr.on, af = async (o) => {
  const r = await ir();
  return await R.lib.set({ lib: o.lib, run_from: "renderer", lazy_lib: o.lazy_lib }), {
    set: async (e) => {
      console.log("--renderer [set]"), e.return = e?.return || {}, e.return.r = e?.return?.r || "full";
      const t = new dr();
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
        for (const c of a) {
          const l = await await R.lib.get({ name: c.type, run_from: "renderer", lazy_lib: o.lazy_lib }), n = await (await l.lib.index({
            f: {
              name: (i) => r.f.name({ id: c.id, name: i }),
              get_lib: async (i) => await await R.lib.get({ name: i.name, run_from: i.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (i) => await (await cr()).set(i),
              path: (i) => R.path.set({ src: l.src, type: c.type, name: i }),
              //set..
              uuid: () => Bo().set(),
              wait_until: _o
            }
          })).set(
            {
              data: {
                curr: c
              }
            }
            /*_$cb*/
          );
          e?.return?.r == "full" ? s.r += n?.r || "" : s.r.push(n?.r || ""), s.style += n?.style || "", s.head += n?.head || "";
        }
      })(), t.stop(), s.benchmark = t.result(), s;
    }
  };
}, nf = async (o) => {
  const r = await ir();
  return await R.lib.set({ lib: o.lib, run_from: "hydrator", lazy_lib: o.lazy_lib }), {
    set: async (e) => {
      console.log("--hydrator [set]");
      const t = new dr();
      t.start();
      let a = {
        r: "",
        style: ""
      }, s = {
        style_id: `${Bo().set()}_stl`
      }, c = e.data?.value?.l || e.data.l;
      const l = async () => {
        for (const n of c) {
          const i = await await R.lib.get({ name: n.type, run_from: "hydrator", lazy_lib: o.lazy_lib }), f = i.lib, m = yo(), d = m.on, u = await (await f.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (h) => r.f.name({ id: n.id, name: h }),
              get_lib: async (h) => await await R.lib.get({ name: h.name, run_from: h.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (h) => await (await cr()).set(h),
              path: (h) => R.path.set({ src: i.src, type: n.type, name: h }),
              //set..
              uuid: () => Bo().set(),
              wait_until: _o,
              //set..
              call: ef,
              listen: d,
              //set..
              new_emitter: () => yo()
            }
          })).set(
            {
              data: {
                curr: n
              }
            }
            /*_$cb*/
          );
          rf("msg", async (h) => {
            try {
              if (Object.keys(h.where || {}).length == 0) {
                await m.emit("msg", h);
                return;
              }
            } catch {
            }
            try {
              if (n?.[h.where?.key || ""] == h.where?.value) {
                await m.emit("msg", h);
                return;
              }
            } catch {
            }
          }), a.style += u.style;
        }
      };
      await _o(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await l();
      try {
        ((n) => {
          const i = document.getElementById(`${s.style_id}`);
          i && i.remove();
          const f = document.createElement("style");
          f.id = `${s.style_id}`, f.innerHTML = `${a.style}`, n.appendChild(f);
        })(document.head);
      } catch (n) {
        console.log(`${n}, Failed to set style..`);
      }
      return t.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: t.result()
      };
    }
  };
}, cf = { class: "clean-wrapper relative h-screen overflow-y-auto bg-gray-50 p-4 md:p-8" }, df = {
  key: 0,
  class: "absolute inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg"
}, lf = { class: "flex flex-col items-center" }, sf = { class: "mt-2 text-sm font-medium text-blue-600" }, uf = {
  key: 1,
  ref: "container",
  class: "ce-container max-w-3xl mx-auto space-y-8"
}, ff = ["innerHTML"], gf = {
  key: 2,
  class: "flex flex-col items-center justify-center h-64 text-gray-400"
}, pf = /* @__PURE__ */ jr({
  __name: "index",
  setup(o) {
    const r = {
      create: "https://fastapi.dryutil.1mn.io/admin/api/instance/create",
      update: "https://fastapi.dryutil.1mn.io/admin/api/instance/update",
      // Assumed update endpoint
      viewInstance: "https://fastify.dryutil.1mn.io/admin/api/instance/view",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    }, e = new URLSearchParams(window.location.search), t = e.get("mode"), a = e.get("id"), s = L(t === "update" && !!a), c = L(a || ""), l = L(null), n = L(!1), i = L(!1), f = L(!1);
    let m = null;
    const d = xo({
      name: "",
      project_id: "",
      // Holds UUID
      project_name: "",
      // Holds name string
      access_token: "",
      commands: [],
      json_data: {}
      // Optional JSON Data
    }), u = xo({
      name: "",
      short_description: "",
      description: "",
      web_app_url: "",
      webhook_url: "",
      secret_token: "",
      commands: [
        { command: "start", description: "Start the bot", payload: "" }
      ]
    }), h = Dr(() => f.value ? "Loading existing instance..." : i.value ? "Processing..." : "Initializing..."), C = async () => {
      if (!(!s.value || !c.value)) {
        f.value = !0;
        try {
          const b = await fetch(`${r.viewInstance}/${c.value}`, {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${r.token}`
            }
          });
          if (b.ok) {
            const w = await b.json(), x = w.data?.l && w.data.l.length > 0 ? w.data.l[0] : null;
            if (!x) return;
            d.name = x.name || "", d.project_id = x.project_id || "";
            try {
              const p = await fetch("https://fastify.dryutil.1mn.io/admin/api/project", {
                headers: {
                  accept: "application/json",
                  Authorization: `Bearer ${r.token}`
                }
              });
              if (p.ok) {
                const k = ((await p.json()).data?.l || []).find((T) => T.id === d.project_id);
                k && (d.project_name = k.name || k.slug);
              }
            } catch (p) {
              console.error("⚠️ Could not resolve project name:", p);
            }
            if (x.data) {
              x.data.config?.telegram?.access_token && (d.access_token = x.data.config.telegram.access_token);
              const p = x.data.instance?.var?.telegram?.commands;
              p && Array.isArray(p) && (d.commands = p.map((g) => ({
                command: g.command || "",
                description: g.description || "",
                payload: g.payload || ""
              })));
            }
            const y = d.project_name || d.project_id;
            y && d.name && await $(y, d.name);
          }
        } catch (b) {
          console.error("❌ Error fetching instance data:", b);
        } finally {
          f.value = !1;
        }
      }
    }, $ = async (b, w) => {
      const x = `https://fastapi.dryutil.1mn.io/client/api/i/${b}/${w}?typ=telegram&opr=get_bot`;
      console.log(`🤖 Fetching Bot Data from: ${x}`);
      try {
        const y = await fetch(x, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${r.token}`
          },
          body: JSON.stringify({
            operations: [
              "get_me",
              "get_name",
              "get_about",
              "get_description",
              "get_menu_button",
              "get_commands",
              "get_webhook"
            ]
          })
        });
        if (y.ok) {
          const p = await y.json();
          console.log("🤖 RAW Bot API Response:", p);
          const g = p.data;
          g && (g.get_name?.data?.name ? u.name = g.get_name.data.name : g.get_me?.data?.first_name && (u.name = g.get_me.data.first_name), g.get_about?.data?.short_description && (u.short_description = g.get_about.data.short_description), g.get_description?.data?.description && (u.description = g.get_description.data.description), g.get_menu_button?.data?.web_app?.url && (u.web_app_url = g.get_menu_button.data.web_app.url), g.get_webhook?.data?.url && (u.webhook_url = g.get_webhook.data.url), Array.isArray(g.get_commands?.data) && (u.commands = g.get_commands.data.map((v) => ({
            command: v.command || "",
            description: v.description || "",
            payload: ""
            // Telegram API doesn't return payloads
          })))), console.log("✅ Successfully mapped botFormState:", JSON.parse(JSON.stringify(u)));
        } else {
          const p = await y.text();
          console.warn(`⚠️ Failed to fetch bot data. Status: ${y.status}`, p);
        }
      } catch (y) {
        console.error("❌ Error fetching external bot data:", y);
      }
    }, B = () => ({
      l: [
        {
          id: "c78c-form_holder",
          type: "form_holder",
          slug: "form_holder",
          data: {
            title: s.value ? "Update Telegram Instance" : "Create Telegram Instance",
            mode: "manual",
            ce_file: {
              data: {
                l: [
                  {
                    id: "section-config",
                    type: "form_section",
                    slug: "form_section",
                    data: { label: "Instance Details", l: [], theme: "light" }
                  },
                  {
                    id: "input-name",
                    type: "form_inputtext",
                    slug: "form_inputtext",
                    data: {
                      value: d.name,
                      label: "Instance Name",
                      placeholder: "Enter instance name...",
                      class: "w-full mb-5",
                      variant: "outlined",
                      form: { section_id: "section-config" }
                    }
                  },
                  {
                    id: "input-project-id",
                    type: "form_autocomplete",
                    slug: "form_autocomplete",
                    data: {
                      // Pass an object so the component knows what text to display initially
                      value: d.project_id ? {
                        id: d.project_id,
                        name: d.project_name || d.project_id
                      } : null,
                      label: "Select Project",
                      placeholder: "Search and select project...",
                      optionLabel: "name",
                      // NOTE: Make sure "optionValue" is REMOVED from here.
                      showClear: !0,
                      dropdown: !0,
                      appendTo: "body",
                      class: "w-full mb-5",
                      form: { section_id: "section-config" },
                      api: {
                        url: "https://fastify.dryutil.1mn.io/admin/api/project",
                        method: "get",
                        rsp_path: "json.data.l",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer <localStorage.token>"
                        }
                      }
                    }
                  },
                  {
                    id: "input-access-token",
                    type: "form_inputtext",
                    slug: "form_inputtext",
                    data: {
                      value: d.access_token,
                      label: "Telegram Access Token",
                      placeholder: "e.g. 123456:ABC-DEF...",
                      class: "w-full mb-5",
                      variant: "outlined",
                      form: { section_id: "section-config" }
                    }
                  },
                  {
                    id: "input-instance-commands",
                    type: "form_datatable",
                    slug: "form_datatable",
                    data: {
                      data: "Instance Commands (Optional)",
                      columns: [
                        { field: "command", header: "Command", style: "" },
                        { field: "description", header: "Description", style: "" },
                        { field: "payload", header: "Payload", style: "" }
                      ],
                      rows: d.commands,
                      pt: {
                        table: { style: "min-width: 50rem; table-layout:fixed" },
                        column: {}
                      },
                      addrow: !0,
                      deleterow: !0,
                      form: { section_id: "section-config" }
                    }
                  },
                  {
                    id: "btn-submit-instance",
                    type: "form_button",
                    slug: "form_button",
                    data: {
                      label: s.value ? "Save Updates" : "Create Instance",
                      class: "w-full mt-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow-sm transition-all",
                      variant: "solid",
                      form: { section_id: "section-config" }
                    }
                  }
                ]
              }
            }
          }
        },
        // --- BOT CONFIGURATION HOLDER ---
        {
          id: "bot-form_holder",
          type: "form_holder",
          slug: "form_holder",
          data: {
            title: "Set Bot Configuration",
            mode: "manual",
            ce_file: {
              data: {
                l: [
                  {
                    id: "section-bot-info",
                    type: "form_section",
                    slug: "form_section",
                    data: { label: "Bot Details", l: [], theme: "light" }
                  },
                  {
                    id: "input-bot-name",
                    type: "form_inputtext",
                    slug: "form_inputtext",
                    data: {
                      value: u.name,
                      label: "Bot Name",
                      placeholder: "e.g. ShopEase Bot",
                      class: "w-full mb-5",
                      variant: "outlined",
                      form: { section_id: "section-bot-info" }
                    }
                  },
                  {
                    id: "input-bot-short-desc",
                    type: "form_inputtext",
                    slug: "form_inputtext",
                    data: {
                      value: u.short_description,
                      label: "Short Description (About)",
                      placeholder: "Brief description...",
                      class: "w-full mb-5",
                      variant: "outlined",
                      form: { section_id: "section-bot-info" }
                    }
                  },
                  {
                    id: "input-bot-desc",
                    type: "form_inputtext",
                    slug: "form_inputtext",
                    data: {
                      value: u.description,
                      label: "Full Description",
                      placeholder: "Detailed bot functionality...",
                      class: "w-full mb-5",
                      variant: "outlined",
                      form: { section_id: "section-bot-info" }
                    }
                  },
                  {
                    id: "section-bot-links",
                    type: "form_section",
                    slug: "form_section",
                    data: { label: "URLs & Commands", l: [], theme: "light" }
                  },
                  {
                    id: "input-bot-webapp",
                    type: "form_inputtext",
                    slug: "form_inputtext",
                    data: {
                      value: u.web_app_url,
                      label: "Web App URL (Optional)",
                      placeholder: "https://example.com/app",
                      class: "w-full mb-5",
                      variant: "outlined",
                      form: { section_id: "section-bot-links" }
                    }
                  },
                  {
                    id: "input-bot-webhook",
                    type: "form_inputtext",
                    slug: "form_inputtext",
                    data: {
                      value: u.webhook_url,
                      label: "Webhook URL (Leave empty to auto-generate)",
                      placeholder: "Auto-generated based on project and instance...",
                      class: "w-full mb-5",
                      variant: "outlined",
                      form: { section_id: "section-bot-links" }
                    }
                  },
                  {
                    id: "input-bot-token",
                    type: "form_inputtext",
                    slug: "form_inputtext",
                    data: {
                      value: u.secret_token,
                      label: "Secret Access Token (Optional)",
                      placeholder: "my-secret-key",
                      class: "w-full mb-5",
                      variant: "outlined",
                      form: { section_id: "section-bot-links" }
                    }
                  },
                  {
                    id: "input-bot-commands",
                    type: "form_datatable",
                    slug: "form_datatable",
                    data: {
                      data: "Commands Table",
                      columns: [
                        { field: "command", header: "Command", style: "" },
                        { field: "description", header: "Description", style: "" },
                        { field: "payload", header: "Payload", style: "" }
                      ],
                      rows: u.commands,
                      pt: {
                        table: { style: "min-width: 50rem; table-layout:fixed" },
                        column: {}
                      },
                      addrow: !0,
                      deleterow: !0,
                      form: { section_id: "section-bot-links" }
                    }
                  },
                  {
                    id: "btn-submit-bot",
                    type: "form_button",
                    slug: "form_button",
                    data: {
                      label: "Create / Set Bot",
                      class: "w-full mt-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded shadow-sm transition-all",
                      variant: "solid",
                      form: { section_id: "section-bot-links" }
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    }), S = (b) => {
      if (!b || typeof b != "object") return null;
      if (typeof b.id == "string" && b.id.includes("-") && typeof b.name == "string")
        return { id: b.id, name: b.name };
      const w = [
        b?.custom?.value,
        b?.val,
        b?.value,
        b?.data?.value,
        b?.custom?.data,
        b?._$p?.data?.curr?.data?.value,
        b?._$p?.data?.curr?.custom?.value
      ];
      for (const y of w) {
        if (y && typeof y == "object" && !Array.isArray(y) && typeof y.id == "string" && y.id.includes("-") && typeof y.name == "string")
          return { id: y.id, name: y.name };
        if (typeof y == "string")
          try {
            const p = JSON.parse(y);
            if (p?.id && p?.name) return { id: p.id, name: p.name };
          } catch {
          }
      }
      const x = (y, p) => {
        if (p > 5 || !y || typeof y != "object") return null;
        for (const g of Object.keys(y)) {
          const v = y[g];
          if (v && typeof v == "object" && !Array.isArray(v) && typeof v.id == "string" && v.id.includes("-") && typeof v.name == "string")
            return { id: v.id, name: v.name };
          const k = x(v, p + 1);
          if (k) return k;
        }
        return null;
      };
      return x(b, 0);
    }, A = async () => {
      if (!d.name || !d.project_id || !d.access_token) {
        alert(`❌ Missing Fields! 

Name: ${d.name || "Empty"}
Project ID (UUID): ${d.project_id || "Empty"}
Access Token: ${d.access_token || "Empty"}`);
        return;
      }
      if (!i.value) {
        i.value = !0, n.value = !0;
        try {
          let b = {
            name: d.name,
            project_id: d.project_id,
            utility_id: "17",
            config_id: null,
            data: {
              config: {
                db_url: "postgresql+asyncpg://postgres:mypass@localhost:5432/tp_mgmt",
                telegram: { access_token: d.access_token }
              },
              instance: {
                var: {
                  telegram: {
                    commands: d.commands.map((g) => {
                      let v = {
                        text: `Running ${g.command}...`,
                        parse_mode: "HTML"
                      };
                      if (g.payload)
                        if (typeof g.payload == "string")
                          try {
                            v = JSON.parse(g.payload);
                          } catch {
                            console.warn(`Invalid JSON payload for ${g.command}. Sending as raw text.`), v = { text: g.payload, parse_mode: "HTML" };
                          }
                        else typeof g.payload == "object" && (v = g.payload);
                      return {
                        command: g.command,
                        description: g.description || "",
                        payload: v
                      };
                    })
                  }
                }
              }
            }
          };
          d.json_data && Object.keys(d.json_data).length > 0 && (b.data = {
            ...b.data,
            config: { ...b.data.config, ...d.json_data.config || {} },
            instance: { ...b.data.instance, ...d.json_data.instance || {} }
          });
          let w = r.create, x = "POST";
          s.value && c.value && (w = `https://fastapi.dryutil.1mn.io/admin/api/instance/update/${c.value}`, x = "PUT", b.id = c.value), console.log(`🚀 Final Payload being sent (${s.value ? "UPDATE" : "CREATE"}):`, JSON.stringify(b, null, 2));
          const y = await fetch(w, {
            method: x,
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${r.token}`
            },
            body: JSON.stringify(b)
          }), p = await y.json();
          if (y.ok) {
            const g = p.output?.id || p.id || "Success";
            alert(`✅ Instance ${s.value ? "Updated" : "Created"}! ID: ${g}`);
          } else
            console.error("❌ API VALIDATION ERROR:", p), alert(`❌ Schema Validation Error:

${JSON.stringify(p.detail || p)}`);
        } catch (b) {
          alert("❌ Network/Client Error: " + b.message);
        } finally {
          i.value = !1, n.value = !1;
        }
      }
    }, E = async () => {
      if (!d.project_id || !d.name) {
        alert("❌ Please select a Project and enter Instance Name first.");
        return;
      }
      if (!i.value) {
        i.value = !0, n.value = !0;
        try {
          const b = d.project_name || d.project_id, w = {
            set_my_name: { name: u.name },
            set_about: { short_description: u.short_description },
            set_description: { description: u.description },
            set_commands: {
              commands: u.commands.map((v) => ({
                command: v.command || "",
                description: v.description || ""
              }))
            }
          };
          u.web_app_url && u.web_app_url.trim() !== "" && (w.set_menu_button = {
            menu_button: {
              type: "web_app",
              text: "Open Shop",
              web_app: { url: u.web_app_url.trim() }
            }
          }), w.set_webhook = {};
          let x = u.webhook_url ? u.webhook_url.trim() : "";
          x && !x.includes("<BaseUrl>") && (w.set_webhook.url = x), u.secret_token && u.secret_token.trim() !== "" && (w.set_webhook.secret_token = u.secret_token.trim());
          const y = `https://fastapi.dryutil.1mn.io/client/api/i/${b}/${d.name}?typ=telegram&opr=set_bot`;
          console.log(`🚀 Sending Bot Config to: ${y}`, JSON.stringify(w, null, 2));
          const p = await fetch(y, {
            method: "PATCH",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${r.token}`
            },
            body: JSON.stringify(w)
          }), g = await p.json();
          if (p.ok) {
            let v = [], k = [];
            if (typeof g == "object" && !g.detail)
              for (const [T, j] of Object.entries(g)) {
                const D = T.replace("set_", "").replace(/_/g, " ");
                j && typeof j == "object" && (j.success ? v.push(`✅ ${D}`) : k.push(`❌ ${D}: ${j.error || "Failed"}`));
              }
            else
              v.push("✅ Configuration sent.");
            k.length === 0 ? alert(`✅ Bot Configured Successfully!

${v.join(`
`)}`) : alert(`⚠️ Bot Configured with some errors:

SUCCESSES:
${v.join(`
`)}

ERRORS:
${k.join(`
`)}

(Note: If you see 'Unauthorized', ensure you clicked 'Create Instance' first and the token is correct!)`), console.log("✅ Bot Config Response:", g);
          } else
            alert(`❌ API Error: ${g.message || g.detail || JSON.stringify(g)}`);
        } catch (b) {
          alert("❌ Request Failed: " + b.message);
        } finally {
          i.value = !1, n.value = !1;
        }
      }
    };
    return Jo(async () => {
      localStorage.getItem("token") || localStorage.setItem("token", r.token), await C();
      const b = {
        lib: [],
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
        }
      }, w = await af(b);
      m = await nf(b);
      const x = await w.set({ data: B() });
      l.value = x.r || "";
      const y = document.createElement("style");
      y.innerHTML = x.style, document.head.appendChild(y), setTimeout(async () => {
        await m.set({ data: B() });
      }, 100), tf("child:msg", async (p) => {
        const g = p?.id || p?.custom?.id || p?._$p?.data?.curr?.id || p?.data?.id || p?._$p?.id;
        if (p.type === "click") {
          g === "btn-submit-instance" && !i.value && await A(), g === "btn-submit-bot" && !i.value && await E();
          return;
        }
        if (g === "input-project-id") {
          const k = S(p);
          k ? (d.project_id = k.id, d.project_name = k.name) : (d.project_id = "", d.project_name = "");
          return;
        }
        const v = p?.val ?? p?.value ?? p?.custom?.value ?? p?.custom?.text ?? p?._$p?.data?.curr?.data?.value;
        if (g && v !== void 0 && (g === "input-name" && (d.name = v), g === "input-access-token" && (d.access_token = v), g === "input-bot-name" && (u.name = v), g === "input-bot-short-desc" && (u.short_description = v), g === "input-bot-desc" && (u.description = v), g === "input-bot-webapp" && (u.web_app_url = v), g === "input-bot-webhook" && (u.webhook_url = v), g === "input-bot-token" && (u.secret_token = v)), g === "input-instance-commands") {
          const k = p?.custom?.value ?? p?.val ?? p?._$p?.data?.curr?.data?.rows;
          Array.isArray(k) && (d.commands = k);
        }
        if (g === "input-bot-commands") {
          const k = p?.custom?.value ?? p?.val ?? p?._$p?.data?.curr?.data?.rows;
          Array.isArray(k) && (u.commands = k);
        }
        if (g === "input-instance-json") {
          let k = p?.custom?.value ?? p?.val ?? p?._$p?.data?.curr?.data?.value;
          if (typeof k == "string")
            try {
              k.trim() ? k = JSON.parse(k) : k = {};
            } catch {
              return;
            }
          d.json_data = k || {};
        }
      });
    }), (b, w) => (fo(), go("div", cf, [
      n.value ? (fo(), go("div", df, [
        to("div", lf, [
          w[0] || (w[0] = to("div", { class: "w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" }, null, -1)),
          to("span", sf, Tr(h.value), 1)
        ])
      ])) : Nr("", !0),
      l.value && !f.value ? (fo(), go("div", uf, [
        to("div", { innerHTML: l.value }, null, 8, ff)
      ], 512)) : (fo(), go("div", gf, [...w[1] || (w[1] = [
        to("div", { class: "w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mb-2" }, null, -1),
        Pr(" Initializing... ", -1)
      ])]))
    ]));
  }
}), bf = async (o) => ({
  set: async (r) => {
    console.log(`--hydrator [${r.data.curr.type}]`);
    const t = Ir(pf, {
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
  bf as hydrator,
  bf as index
};
