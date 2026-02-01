import { r as Ue, g as sr, o as Wr, n as We, w as yo, a as to, b as Me, d as He, c as qe, e as Ve, f as Je, h as Xe, i as Ye } from "./runtime-dom.esm-bundler-Crm1kotq.js";
import { ce_renderer as Ke, ce_hydrator as Ge, ce_listen as Qe } from "content-engine-lib";
var Ze = Object.defineProperty, lr = Object.getOwnPropertySymbols, ot = Object.prototype.hasOwnProperty, rt = Object.prototype.propertyIsEnumerable, dr = (o, r, e) => r in o ? Ze(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, et = (o, r) => {
  for (var e in r || (r = {})) ot.call(r, e) && dr(o, e, r[e]);
  if (lr) for (var e of lr(r)) rt.call(r, e) && dr(o, e, r[e]);
  return o;
};
function er(o) {
  return o == null || o === "" || Array.isArray(o) && o.length === 0 || !(o instanceof Date) && typeof o == "object" && Object.keys(o).length === 0;
}
function tt(o) {
  return typeof o == "function" && "call" in o && "apply" in o;
}
function $(o) {
  return !er(o);
}
function ao(o, r = !0) {
  return o instanceof Object && o.constructor === Object && (r || Object.keys(o).length !== 0);
}
function Mr(o = {}, r = {}) {
  let e = et({}, o);
  return Object.keys(r).forEach((t) => {
    let n = t;
    ao(r[n]) && n in o && ao(o[n]) ? e[n] = Mr(o[n], r[n]) : e[n] = r[n];
  }), e;
}
function nt(...o) {
  return o.reduce((r, e, t) => t === 0 ? e : Mr(r, e), {});
}
function eo(o, ...r) {
  return tt(o) ? o(...r) : o;
}
function po(o, r = !0) {
  return typeof o == "string" && (r || o !== "");
}
function at(o) {
  return $(o) && !isNaN(o);
}
function io(o, r) {
  if (r) {
    let e = r.test(o);
    return r.lastIndex = 0, e;
  }
  return !1;
}
function it(...o) {
  return nt(...o);
}
function ko(o) {
  return o && o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function Hr(o) {
  return po(o) ? o.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : o;
}
function qr() {
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
function ct(o) {
  if (o) {
    let r = o.parentNode;
    return r && r instanceof ShadowRoot && r.host && (r = r.host), r;
  }
  return null;
}
function st(o) {
  return !!(o !== null && typeof o < "u" && o.nodeName && ct(o));
}
function Vr(o) {
  return typeof Element < "u" ? o instanceof Element : o !== null && typeof o == "object" && o.nodeType === 1 && typeof o.nodeName == "string";
}
function Ko(o, r = {}) {
  if (Vr(o)) {
    let e = (t, n) => {
      var i, a;
      let c = (i = o?.$attrs) != null && i[t] ? [(a = o?.$attrs) == null ? void 0 : a[t]] : [];
      return [n].flat().reduce((s, l) => {
        if (l != null) {
          let d = typeof l;
          if (d === "string" || d === "number") s.push(l);
          else if (d === "object") {
            let g = Array.isArray(l) ? e(t, l) : Object.entries(l).map(([p, b]) => t === "style" && (b || b === 0) ? `${p.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${b}` : b ? p : void 0);
            s = g.length ? s.concat(g.filter((p) => !!p)) : s;
          }
        }
        return s;
      }, c);
    };
    Object.entries(r).forEach(([t, n]) => {
      if (n != null) {
        let i = t.match(/^on(.+)/);
        i ? o.addEventListener(i[1].toLowerCase(), n) : t === "p-bind" || t === "pBind" ? Ko(o, n) : (n = t === "class" ? [...new Set(e("class", n))].join(" ").trim() : t === "style" ? e("style", n).join(";").trim() : n, (o.$attrs = o.$attrs || {}) && (o.$attrs[t] = n), o.setAttribute(t, n));
      }
    });
  }
}
function lt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function dt(o, r = "", e) {
  Vr(o) && e !== null && e !== void 0 && o.setAttribute(r, e);
}
var ut = Object.defineProperty, ft = Object.defineProperties, gt = Object.getOwnPropertyDescriptors, jo = Object.getOwnPropertySymbols, Jr = Object.prototype.hasOwnProperty, Xr = Object.prototype.propertyIsEnumerable, ur = (o, r, e) => r in o ? ut(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, V = (o, r) => {
  for (var e in r || (r = {})) Jr.call(r, e) && ur(o, e, r[e]);
  if (jo) for (var e of jo(r)) Xr.call(r, e) && ur(o, e, r[e]);
  return o;
}, qo = (o, r) => ft(o, gt(r)), Z = (o, r) => {
  var e = {};
  for (var t in o) Jr.call(o, t) && r.indexOf(t) < 0 && (e[t] = o[t]);
  if (o != null && jo) for (var t of jo(o)) r.indexOf(t) < 0 && Xr.call(o, t) && (e[t] = o[t]);
  return e;
}, pt = qr(), oo = pt, wo = /{([^}]*)}/g, Yr = /(\d+\s+[\+\-\*\/]\s+\d+)/g, Kr = /var\([^)]+\)/g;
function fr(o) {
  return po(o) ? o.replace(/[A-Z]/g, (r, e) => e === 0 ? r : "." + r.toLowerCase()).toLowerCase() : o;
}
function mt(o) {
  return ao(o) && o.hasOwnProperty("$value") && o.hasOwnProperty("$type") ? o.$value : o;
}
function bt(o) {
  return o.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Go(o = "", r = "") {
  return bt(`${po(o, !1) && po(r, !1) ? `${o}-` : o}${r}`);
}
function Gr(o = "", r = "") {
  return `--${Go(o, r)}`;
}
function ht(o = "") {
  let r = (o.match(/{/g) || []).length, e = (o.match(/}/g) || []).length;
  return (r + e) % 2 !== 0;
}
function Qr(o, r = "", e = "", t = [], n) {
  if (po(o)) {
    let i = o.trim();
    if (ht(i)) return;
    if (io(i, wo)) {
      let a = i.replaceAll(wo, (c) => {
        let s = c.replace(/{|}/g, "").split(".").filter((l) => !t.some((d) => io(l, d)));
        return `var(${Gr(e, Hr(s.join("-")))}${$(n) ? `, ${n}` : ""})`;
      });
      return io(a.replace(Kr, "0"), Yr) ? `calc(${a})` : a;
    }
    return i;
  } else if (at(o)) return o;
}
function vt(o, r, e) {
  po(r, !1) && o.push(`${r}:${e};`);
}
function fo(o, r) {
  return o ? `${o}{${r}}` : "";
}
function Zr(o, r) {
  if (o.indexOf("dt(") === -1) return o;
  function e(a, c) {
    let s = [], l = 0, d = "", g = null, p = 0;
    for (; l <= a.length; ) {
      let b = a[l];
      if ((b === '"' || b === "'" || b === "`") && a[l - 1] !== "\\" && (g = g === b ? null : b), !g && (b === "(" && p++, b === ")" && p--, (b === "," || l === a.length) && p === 0)) {
        let f = d.trim();
        f.startsWith("dt(") ? s.push(Zr(f, c)) : s.push(t(f)), d = "", l++;
        continue;
      }
      b !== void 0 && (d += b), l++;
    }
    return s;
  }
  function t(a) {
    let c = a[0];
    if ((c === '"' || c === "'" || c === "`") && a[a.length - 1] === c) return a.slice(1, -1);
    let s = Number(a);
    return isNaN(s) ? a : s;
  }
  let n = [], i = [];
  for (let a = 0; a < o.length; a++) if (o[a] === "d" && o.slice(a, a + 3) === "dt(") i.push(a), a += 2;
  else if (o[a] === ")" && i.length > 0) {
    let c = i.pop();
    i.length === 0 && n.push([c, a]);
  }
  if (!n.length) return o;
  for (let a = n.length - 1; a >= 0; a--) {
    let [c, s] = n[a], l = o.slice(c + 3, s), d = e(l, r), g = r(...d);
    o = o.slice(0, c) + g + o.slice(s + 1);
  }
  return o;
}
var co = (...o) => yt(_.getTheme(), ...o), yt = (o = {}, r, e, t) => {
  if (r) {
    let { variable: n, options: i } = _.defaults || {}, { prefix: a, transform: c } = o?.options || i || {}, s = io(r, wo) ? r : `{${r}}`;
    return t === "value" || er(t) && c === "strict" ? _.getTokenValue(r) : Qr(s, void 0, a, [n.excludedKeyRegex], e);
  }
  return "";
};
function To(o, ...r) {
  if (o instanceof Array) {
    let e = o.reduce((t, n, i) => {
      var a;
      return t + n + ((a = eo(r[i], { dt: co })) != null ? a : "");
    }, "");
    return Zr(e, co);
  }
  return eo(o, { dt: co });
}
function kt(o, r = {}) {
  let e = _.defaults.variable, { prefix: t = e.prefix, selector: n = e.selector, excludedKeyRegex: i = e.excludedKeyRegex } = r, a = [], c = [], s = [{ node: o, path: t }];
  for (; s.length; ) {
    let { node: d, path: g } = s.pop();
    for (let p in d) {
      let b = d[p], f = mt(b), h = io(p, i) ? Go(g) : Go(g, Hr(p));
      if (ao(f)) s.push({ node: f, path: h });
      else {
        let m = Gr(h), y = Qr(f, h, t, [i]);
        vt(c, m, y);
        let k = h;
        t && k.startsWith(t + "-") && (k = k.slice(t.length + 1)), a.push(k.replace(/-/g, "."));
      }
    }
  }
  let l = c.join("");
  return { value: c, tokens: a, declarations: l, css: fo(n, l) };
}
var q = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(o) {
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
  return kt(o, { prefix: r?.prefix });
}, getCommon({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var i, a, c, s, l, d, g;
  let { preset: p, options: b } = r, f, h, m, y, k, w, C;
  if ($(p) && b.transform !== "strict") {
    let { primitive: S, semantic: N, extend: x } = p, I = N || {}, { colorScheme: j } = I, X = Z(I, ["colorScheme"]), W = x || {}, { colorScheme: U } = W, F = Z(W, ["colorScheme"]), E = j || {}, { dark: Y } = E, O = Z(E, ["dark"]), K = U || {}, { dark: z } = K, Q = Z(K, ["dark"]), M = $(S) ? this._toVariables({ primitive: S }, b) : {}, R = $(X) ? this._toVariables({ semantic: X }, b) : {}, P = $(O) ? this._toVariables({ light: O }, b) : {}, ro = $(Y) ? this._toVariables({ dark: Y }, b) : {}, H = $(F) ? this._toVariables({ semantic: F }, b) : {}, ho = $(Q) ? this._toVariables({ light: Q }, b) : {}, cr = $(z) ? this._toVariables({ dark: z }, b) : {}, [xe, $e] = [(i = M.declarations) != null ? i : "", M.tokens], [Be, Re] = [(a = R.declarations) != null ? a : "", R.tokens || []], [Se, Oe] = [(c = P.declarations) != null ? c : "", P.tokens || []], [Ee, Te] = [(s = ro.declarations) != null ? s : "", ro.tokens || []], [_e, Ae] = [(l = H.declarations) != null ? l : "", H.tokens || []], [Ne, ze] = [(d = ho.declarations) != null ? d : "", ho.tokens || []], [Pe, De] = [(g = cr.declarations) != null ? g : "", cr.tokens || []];
    f = this.transformCSS(o, xe, "light", "variable", b, t, n), h = $e;
    let Le = this.transformCSS(o, `${Be}${Se}`, "light", "variable", b, t, n), je = this.transformCSS(o, `${Ee}`, "dark", "variable", b, t, n);
    m = `${Le}${je}`, y = [.../* @__PURE__ */ new Set([...Re, ...Oe, ...Te])];
    let Fe = this.transformCSS(o, `${_e}${Ne}color-scheme:light`, "light", "variable", b, t, n), Ie = this.transformCSS(o, `${Pe}color-scheme:dark`, "dark", "variable", b, t, n);
    k = `${Fe}${Ie}`, w = [.../* @__PURE__ */ new Set([...Ae, ...ze, ...De])], C = eo(p.css, { dt: co });
  }
  return { primitive: { css: f, tokens: h }, semantic: { css: m, tokens: y }, global: { css: k, tokens: w }, style: C };
}, getPreset({ name: o = "", preset: r = {}, options: e, params: t, set: n, defaults: i, selector: a }) {
  var c, s, l;
  let d, g, p;
  if ($(r) && e.transform !== "strict") {
    let b = o.replace("-directive", ""), f = r, { colorScheme: h, extend: m, css: y } = f, k = Z(f, ["colorScheme", "extend", "css"]), w = m || {}, { colorScheme: C } = w, S = Z(w, ["colorScheme"]), N = h || {}, { dark: x } = N, I = Z(N, ["dark"]), j = C || {}, { dark: X } = j, W = Z(j, ["dark"]), U = $(k) ? this._toVariables({ [b]: V(V({}, k), S) }, e) : {}, F = $(I) ? this._toVariables({ [b]: V(V({}, I), W) }, e) : {}, E = $(x) ? this._toVariables({ [b]: V(V({}, x), X) }, e) : {}, [Y, O] = [(c = U.declarations) != null ? c : "", U.tokens || []], [K, z] = [(s = F.declarations) != null ? s : "", F.tokens || []], [Q, M] = [(l = E.declarations) != null ? l : "", E.tokens || []], R = this.transformCSS(b, `${Y}${K}`, "light", "variable", e, n, i, a), P = this.transformCSS(b, Q, "dark", "variable", e, n, i, a);
    d = `${R}${P}`, g = [.../* @__PURE__ */ new Set([...O, ...z, ...M])], p = eo(y, { dt: co });
  }
  return { css: d, tokens: g, style: p };
}, getPresetC({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var i;
  let { preset: a, options: c } = r, s = (i = a?.components) == null ? void 0 : i[o];
  return this.getPreset({ name: o, preset: s, options: c, params: e, set: t, defaults: n });
}, getPresetD({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var i, a;
  let c = o.replace("-directive", ""), { preset: s, options: l } = r, d = ((i = s?.components) == null ? void 0 : i[c]) || ((a = s?.directives) == null ? void 0 : a[c]);
  return this.getPreset({ name: c, preset: d, options: l, params: e, set: t, defaults: n });
}, applyDarkColorScheme(o) {
  return !(o.darkModeSelector === "none" || o.darkModeSelector === !1);
}, getColorSchemeOption(o, r) {
  var e;
  return this.applyDarkColorScheme(o) ? this.regex.resolve(o.darkModeSelector === !0 ? r.options.darkModeSelector : (e = o.darkModeSelector) != null ? e : r.options.darkModeSelector) : [];
}, getLayerOrder(o, r = {}, e, t) {
  let { cssLayer: n } = r;
  return n ? `@layer ${eo(n.order || n.name || "primeui", e)}` : "";
}, getCommonStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: n, defaults: i }) {
  let a = this.getCommon({ name: o, theme: r, params: e, set: n, defaults: i }), c = Object.entries(t).reduce((s, [l, d]) => s.push(`${l}="${d}"`) && s, []).join(" ");
  return Object.entries(a || {}).reduce((s, [l, d]) => {
    if (ao(d) && Object.hasOwn(d, "css")) {
      let g = ko(d.css), p = `${l}-variables`;
      s.push(`<style type="text/css" data-primevue-style-id="${p}" ${c}>${g}</style>`);
    }
    return s;
  }, []).join("");
}, getStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: n, defaults: i }) {
  var a;
  let c = { name: o, theme: r, params: e, set: n, defaults: i }, s = (a = o.includes("-directive") ? this.getPresetD(c) : this.getPresetC(c)) == null ? void 0 : a.css, l = Object.entries(t).reduce((d, [g, p]) => d.push(`${g}="${p}"`) && d, []).join(" ");
  return s ? `<style type="text/css" data-primevue-style-id="${o}-variables" ${l}>${ko(s)}</style>` : "";
}, createTokens(o = {}, r, e = "", t = "", n = {}) {
  let i = function(c, s = {}, l = []) {
    if (l.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: c, path: this.path, paths: s, value: void 0 };
    l.push(this.path), s.name = this.path, s.binding || (s.binding = {});
    let d = this.value;
    if (typeof this.value == "string" && wo.test(this.value)) {
      let g = this.value.trim().replace(wo, (p) => {
        var b;
        let f = p.slice(1, -1), h = this.tokens[f];
        if (!h) return console.warn(`Token not found for path: ${f}`), "__UNRESOLVED__";
        let m = h.computed(c, s, l);
        return Array.isArray(m) && m.length === 2 ? `light-dark(${m[0].value},${m[1].value})` : (b = m?.value) != null ? b : "__UNRESOLVED__";
      });
      d = Yr.test(g.replace(Kr, "0")) ? `calc(${g})` : g;
    }
    return er(s.binding) && delete s.binding, l.pop(), { colorScheme: c, path: this.path, paths: s, value: d.includes("__UNRESOLVED__") ? void 0 : d };
  }, a = (c, s, l) => {
    Object.entries(c).forEach(([d, g]) => {
      let p = io(d, r.variable.excludedKeyRegex) ? s : s ? `${s}.${fr(d)}` : fr(d), b = l ? `${l}.${d}` : d;
      ao(g) ? a(g, p, b) : (n[p] || (n[p] = { paths: [], computed: (f, h = {}, m = []) => {
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
  let n = ((c) => c.split(".").filter((s) => !io(s.toLowerCase(), e.variable.excludedKeyRegex)).join("."))(r), i = r.includes("colorScheme.light") ? "light" : r.includes("colorScheme.dark") ? "dark" : void 0, a = [(t = o[n]) == null ? void 0 : t.computed(i)].flat().filter((c) => c);
  return a.length === 1 ? a[0].value : a.reduce((c = {}, s) => {
    let l = s, { colorScheme: d } = l, g = Z(l, ["colorScheme"]);
    return c[d] = g, c;
  }, void 0);
}, getSelectorRule(o, r, e, t) {
  return e === "class" || e === "attr" ? fo($(r) ? `${o}${r},${o} ${r}` : o, t) : fo(o, fo(r ?? ":root,:host", t));
}, transformCSS(o, r, e, t, n = {}, i, a, c) {
  if ($(r)) {
    let { cssLayer: s } = n;
    if (t !== "style") {
      let l = this.getColorSchemeOption(n, a);
      r = e === "dark" ? l.reduce((d, { type: g, selector: p }) => ($(p) && (d += p.includes("[CSS]") ? p.replace("[CSS]", r) : this.getSelectorRule(p, c, g, r)), d), "") : fo(c ?? ":root,:host", r);
    }
    if (s) {
      let l = { name: "primeui" };
      ao(s) && (l.name = eo(s.name, { name: o, type: t })), $(l.name) && (r = fo(`@layer ${l.name}`, r), i?.layerNames(l.name));
    }
    return r;
  }
  return "";
} }, _ = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(o = {}) {
  let { theme: r } = o;
  r && (this._theme = qo(V({}, r), { options: V(V({}, this.defaults.options), r.options) }), this._tokens = q.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
  this.update({ theme: o }), oo.emit("theme:change", o);
}, getPreset() {
  return this.preset;
}, setPreset(o) {
  this._theme = qo(V({}, this.theme), { preset: o }), this._tokens = q.createTokens(o, this.defaults), this.clearLoadedStyleNames(), oo.emit("preset:change", o), oo.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(o) {
  this._theme = qo(V({}, this.theme), { options: o }), this.clearLoadedStyleNames(), oo.emit("options:change", o), oo.emit("theme:change", this.theme);
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
  return q.getTokenValue(this.tokens, o, this.defaults);
}, getCommon(o = "", r) {
  return q.getCommon({ name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(o = "", r) {
  let e = { name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return q.getPresetC(e);
}, getDirective(o = "", r) {
  let e = { name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return q.getPresetD(e);
}, getCustomPreset(o = "", r, e, t) {
  let n = { name: o, preset: r, options: this.options, selector: e, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return q.getPreset(n);
}, getLayerOrderCSS(o = "") {
  return q.getLayerOrder(o, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(o = "", r, e = "style", t) {
  return q.transformCSS(o, r, t, e, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(o = "", r, e = {}) {
  return q.getCommonStyleSheet({ name: o, theme: this.theme, params: r, props: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(o, r, e = {}) {
  return q.getStyleSheet({ name: o, theme: this.theme, params: r, props: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(o) {
  this._loadingStyles.add(o);
}, onStyleUpdated(o) {
  this._loadingStyles.add(o);
}, onStyleLoaded(o, { name: r }) {
  this._loadingStyles.size && (this._loadingStyles.delete(r), oo.emit(`theme:${r}:load`, o), !this._loadingStyles.size && oo.emit("theme:load"));
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
}, wt = `
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
function gr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function pr(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? gr(Object(e), !0).forEach(function(t) {
      Ct(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : gr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function Ct(o, r, e) {
  return (r = xt(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function xt(o) {
  var r = $t(o, "string");
  return Co(r) == "symbol" ? r : r + "";
}
function $t(o, r) {
  if (Co(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (Co(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function Bt(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  sr() && sr().components ? Wr(o) : r ? o() : We(o);
}
var Rt = 0;
function St(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = to(!1), t = to(o), n = to(null), i = lt() ? window.document : void 0, a = r.document, c = a === void 0 ? i : a, s = r.immediate, l = s === void 0 ? !0 : s, d = r.manual, g = d === void 0 ? !1 : d, p = r.name, b = p === void 0 ? "style_".concat(++Rt) : p, f = r.id, h = f === void 0 ? void 0 : f, m = r.media, y = m === void 0 ? void 0 : m, k = r.nonce, w = k === void 0 ? void 0 : k, C = r.first, S = C === void 0 ? !1 : C, N = r.onMounted, x = N === void 0 ? void 0 : N, I = r.onUpdated, j = I === void 0 ? void 0 : I, X = r.onLoad, W = X === void 0 ? void 0 : X, U = r.props, F = U === void 0 ? {} : U, E = function() {
  }, Y = function(z) {
    var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (c) {
      var M = pr(pr({}, F), Q), R = M.name || b, P = M.id || h, ro = M.nonce || w;
      n.value = c.querySelector('style[data-primevue-style-id="'.concat(R, '"]')) || c.getElementById(P) || c.createElement("style"), n.value.isConnected || (t.value = z || o, Ko(n.value, {
        type: "text/css",
        id: P,
        media: y,
        nonce: ro
      }), S ? c.head.prepend(n.value) : c.head.appendChild(n.value), dt(n.value, "data-primevue-style-id", R), Ko(n.value, M), n.value.onload = function(H) {
        return W?.(H, {
          name: R
        });
      }, x?.(R)), !e.value && (E = yo(t, function(H) {
        n.value.textContent = H, j?.(R);
      }, {
        immediate: !0
      }), e.value = !0);
    }
  }, O = function() {
    !c || !e.value || (E(), st(n.value) && c.head.removeChild(n.value), e.value = !1, n.value = null);
  };
  return l && !g && Bt(Y), {
    id: h,
    name: b,
    el: n,
    css: t,
    unload: O,
    load: Y,
    isLoaded: Ue(e)
  };
}
function xo(o) {
  "@babel/helpers - typeof";
  return xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, xo(o);
}
var mr, br, hr, vr;
function yr(o, r) {
  return _t(o) || Tt(o, r) || Et(o, r) || Ot();
}
function Ot() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Et(o, r) {
  if (o) {
    if (typeof o == "string") return kr(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? kr(o, r) : void 0;
  }
}
function kr(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++) t[e] = o[e];
  return t;
}
function Tt(o, r) {
  var e = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (e != null) {
    var t, n, i, a, c = [], s = !0, l = !1;
    try {
      if (i = (e = e.call(o)).next, r !== 0) for (; !(s = (t = i.call(e)).done) && (c.push(t.value), c.length !== r); s = !0) ;
    } catch (d) {
      l = !0, n = d;
    } finally {
      try {
        if (!s && e.return != null && (a = e.return(), Object(a) !== a)) return;
      } finally {
        if (l) throw n;
      }
    }
    return c;
  }
}
function _t(o) {
  if (Array.isArray(o)) return o;
}
function wr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Vo(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? wr(Object(e), !0).forEach(function(t) {
      At(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : wr(Object(e)).forEach(function(t) {
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
  return xo(r) == "symbol" ? r : r + "";
}
function zt(o, r) {
  if (xo(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (xo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function _o(o, r) {
  return r || (r = o.slice(0)), Object.freeze(Object.defineProperties(o, { raw: { value: Object.freeze(r) } }));
}
var Pt = function(r) {
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
}, Dt = {}, Lt = {}, uo = {
  name: "base",
  css: Pt,
  style: wt,
  classes: Dt,
  inlineStyles: Lt,
  load: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, n = t(To(mr || (mr = _o(["", ""])), r));
    return $(n) ? St(ko(n), Vo({
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
      return _.transformCSS(e.name || r.name, "".concat(n).concat(To(br || (br = _o(["", ""])), t)));
    });
  },
  getCommonTheme: function(r) {
    return _.getCommon(this.name, r);
  },
  getComponentTheme: function(r) {
    return _.getComponent(this.name, r);
  },
  getDirectiveTheme: function(r) {
    return _.getDirective(this.name, r);
  },
  getPresetTheme: function(r, e, t) {
    return _.getCustomPreset(this.name, r, e, t);
  },
  getLayerOrderThemeCSS: function() {
    return _.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var t = eo(this.css, {
        dt: co
      }) || "", n = ko(To(hr || (hr = _o(["", "", ""])), t, r)), i = Object.entries(e).reduce(function(a, c) {
        var s = yr(c, 2), l = s[0], d = s[1];
        return a.push("".concat(l, '="').concat(d, '"')) && a;
      }, []).join(" ");
      return $(n) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(i, ">").concat(n, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return _.getCommonStyleSheet(this.name, r, e);
  },
  getThemeStyleSheet: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [_.getStyleSheet(this.name, r, e)];
    if (this.style) {
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = To(vr || (vr = _o(["", ""])), eo(this.style, {
        dt: co
      })), a = ko(_.transformCSS(n, i)), c = Object.entries(e).reduce(function(s, l) {
        var d = yr(l, 2), g = d[0], p = d[1];
        return s.push("".concat(g, '="').concat(p, '"')) && s;
      }, []).join(" ");
      $(a) && t.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(c, ">").concat(a, "</style>"));
    }
    return t.join("");
  },
  extend: function(r) {
    return Vo(Vo({}, this), {}, {
      css: void 0,
      style: void 0
    }, r);
  }
}, Ao = qr();
function $o(o) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, $o(o);
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
function No(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Cr(Object(e), !0).forEach(function(t) {
      jt(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Cr(Object(e)).forEach(function(t) {
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
var Ut = {
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
}, Wt = /* @__PURE__ */ Symbol();
function Mt(o, r) {
  var e = {
    config: Me(r)
  };
  return o.config.globalProperties.$primevue = e, o.provide(Wt, e), Ht(), qt(o, e), e;
}
var go = [];
function Ht() {
  oo.clear(), go.forEach(function(o) {
    return o?.();
  }), go = [];
}
function qt(o, r) {
  var e = to(!1), t = function() {
    var l;
    if (((l = r.config) === null || l === void 0 ? void 0 : l.theme) !== "none" && !_.isStyleNameLoaded("common")) {
      var d, g, p = ((d = uo.getCommonTheme) === null || d === void 0 ? void 0 : d.call(uo)) || {}, b = p.primitive, f = p.semantic, h = p.global, m = p.style, y = {
        nonce: (g = r.config) === null || g === void 0 || (g = g.csp) === null || g === void 0 ? void 0 : g.nonce
      };
      uo.load(b?.css, No({
        name: "primitive-variables"
      }, y)), uo.load(f?.css, No({
        name: "semantic-variables"
      }, y)), uo.load(h?.css, No({
        name: "global-variables"
      }, y)), uo.loadStyle(No({
        name: "global-style"
      }, y), m), _.setLoadedStyleName("common");
    }
  };
  oo.on("theme:change", function(s) {
    e.value || (o.config.globalProperties.$primevue.config.theme = s, e.value = !0);
  });
  var n = yo(r.config, function(s, l) {
    Ao.emit("config:change", {
      newValue: s,
      oldValue: l
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = yo(function() {
    return r.config.ripple;
  }, function(s, l) {
    Ao.emit("config:ripple:change", {
      newValue: s,
      oldValue: l
    });
  }, {
    immediate: !0,
    deep: !0
  }), a = yo(function() {
    return r.config.theme;
  }, function(s, l) {
    e.value || _.setTheme(s), r.config.unstyled || t(), e.value = !1, Ao.emit("config:theme:change", {
      newValue: s,
      oldValue: l
    });
  }, {
    immediate: !0,
    deep: !1
  }), c = yo(function() {
    return r.config.unstyled;
  }, function(s, l) {
    !s && r.config.theme && t(), Ao.emit("config:unstyled:change", {
      newValue: s,
      oldValue: l
    });
  }, {
    immediate: !0,
    deep: !0
  });
  go.push(n), go.push(i), go.push(a), go.push(c);
}
var Vt = {
  install: function(r, e) {
    var t = it(Ut, e);
    Mt(r, t);
  }
}, Jt = { transitionDuration: "{transition.duration}" }, Xt = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, Yt = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, Kt = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, Gt = { root: Jt, panel: Xt, header: Yt, content: Kt }, Qt = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Zt = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, on = { padding: "{list.padding}", gap: "{list.gap}" }, rn = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, en = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, tn = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, nn = { borderRadius: "{border.radius.sm}" }, an = { padding: "{list.option.padding}" }, cn = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, sn = { root: Qt, overlay: Zt, list: on, option: rn, optionGroup: en, dropdown: tn, chip: nn, emptyMessage: an, colorScheme: cn }, ln = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, dn = { size: "1rem" }, un = { borderColor: "{content.background}", offset: "-0.75rem" }, fn = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, gn = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, pn = { root: ln, icon: dn, group: un, lg: fn, xl: gn }, mn = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, bn = { size: "0.5rem" }, hn = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, vn = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, yn = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, kn = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, wn = { root: mn, dot: bn, sm: hn, lg: vn, xl: yn, colorScheme: kn }, Cn = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, xn = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, $n = { primitive: Cn, semantic: xn }, Bn = { borderRadius: "{content.border.radius}" }, Rn = { root: Bn }, Sn = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, On = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, En = { color: "{navigation.item.icon.color}" }, Tn = { root: Sn, item: On, separator: En }, _n = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, An = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, Nn = { root: _n, colorScheme: An }, zn = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, Pn = { padding: "1.25rem", gap: "0.5rem" }, Dn = { gap: "0.5rem" }, Ln = { fontSize: "1.25rem", fontWeight: "500" }, jn = { color: "{text.muted.color}" }, Fn = { root: zn, body: Pn, caption: Dn, title: Ln, subtitle: jn }, In = { transitionDuration: "{transition.duration}" }, Un = { gap: "0.25rem" }, Wn = { padding: "1rem", gap: "0.5rem" }, Mn = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Hn = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, qn = { root: In, content: Un, indicatorList: Wn, indicator: Mn, colorScheme: Hn }, Vn = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Jn = { width: "2.5rem", color: "{form.field.icon.color}" }, Xn = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Yn = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, Kn = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, Gn = { color: "{form.field.icon.color}" }, Qn = { root: Vn, dropdown: Jn, overlay: Xn, list: Yn, option: Kn, clearIcon: Gn }, Zn = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, oa = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, ra = { root: Zn, icon: oa }, ea = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, ta = { width: "2rem", height: "2rem" }, na = { size: "1rem" }, aa = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, ia = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, ca = { root: ea, image: ta, icon: na, removeIcon: aa, colorScheme: ia }, sa = { transitionDuration: "{transition.duration}" }, la = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, da = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, ua = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, fa = { root: sa, preview: la, panel: da, colorScheme: ua }, ga = { size: "2rem", color: "{overlay.modal.color}" }, pa = { gap: "1rem" }, ma = { icon: ga, content: pa }, ba = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, ha = { padding: "{overlay.popover.padding}", gap: "1rem" }, va = { size: "1.5rem", color: "{overlay.popover.color}" }, ya = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, ka = { root: ba, content: ha, icon: va, footer: ya }, wa = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Ca = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, xa = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, $a = { mobileIndent: "1rem" }, Ba = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Ra = { borderColor: "{content.border.color}" }, Sa = { root: wa, list: Ca, item: xa, submenu: $a, submenuIcon: Ba, separator: Ra }, Oa = `
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
`, Ea = { transitionDuration: "{transition.duration}" }, Ta = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, _a = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Aa = { fontWeight: "600" }, Na = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, za = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Pa = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Da = { fontWeight: "600" }, La = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ja = { color: "{primary.color}" }, Fa = { width: "0.5rem" }, Ia = { width: "1px", color: "{primary.color}" }, Ua = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Wa = { size: "2rem" }, Ma = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ha = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, qa = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Va = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Ja = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Xa = `
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Ya = { root: Ea, header: Ta, headerCell: _a, columnTitle: Aa, row: Na, bodyCell: za, footerCell: Pa, columnFooter: Da, footer: La, dropPoint: ja, columnResizer: Fa, resizeIndicator: Ia, sortIcon: Ua, loadingIcon: Wa, rowToggleButton: Ma, filter: Ha, paginatorTop: qa, paginatorBottom: Va, colorScheme: Ja, css: Xa }, Ka = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, Ga = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, Qa = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, Za = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, oi = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, ri = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, ei = { root: Ka, header: Ga, content: Qa, footer: Za, paginatorTop: oi, paginatorBottom: ri }, ti = { transitionDuration: "{transition.duration}" }, ni = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, ai = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, ii = { gap: "0.5rem", fontWeight: "500" }, ci = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, si = { color: "{form.field.icon.color}" }, li = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, di = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, ui = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, fi = { margin: "0.5rem 0 0 0" }, gi = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, pi = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, mi = { margin: "0.5rem 0 0 0" }, bi = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, hi = { margin: "0.5rem 0 0 0" }, vi = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, yi = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, ki = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, wi = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, Ci = { root: ti, panel: ni, header: ai, title: ii, dropdown: ci, inputIcon: si, selectMonth: li, selectYear: di, group: ui, dayView: fi, weekDay: gi, date: pi, monthView: mi, month: bi, yearView: hi, year: vi, buttonbar: yi, timePicker: ki, colorScheme: wi }, xi = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, $i = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, Bi = { fontSize: "1.25rem", fontWeight: "600" }, Ri = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Si = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, Oi = { root: xi, header: $i, title: Bi, content: Ri, footer: Si }, Ei = { borderColor: "{content.border.color}" }, Ti = { background: "{content.background}", color: "{text.color}" }, _i = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, Ai = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, Ni = { root: Ei, content: Ti, horizontal: _i, vertical: Ai }, zi = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, Pi = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Di = { root: zi, item: Pi }, Li = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, ji = { padding: "{overlay.modal.padding}" }, Fi = { fontSize: "1.5rem", fontWeight: "600" }, Ii = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Ui = { padding: "{overlay.modal.padding}" }, Wi = { root: Li, header: ji, title: Fi, content: Ii, footer: Ui }, Mi = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, Hi = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, qi = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, Vi = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Ji = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Xi = { toolbar: Mi, toolbarItem: Hi, overlay: qi, overlayOption: Vi, content: Ji }, Yi = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, Ki = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Gi = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, Qi = { padding: "0" }, Zi = { root: Yi, legend: Ki, toggleIcon: Gi, content: Qi }, oc = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, rc = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, ec = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, tc = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, nc = { gap: "0.5rem" }, ac = { height: "0.25rem" }, ic = { gap: "0.5rem" }, cc = { root: oc, header: rc, content: ec, file: tc, fileList: nc, progressbar: ac, basic: ic }, sc = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, lc = { active: { top: "-1.25rem" } }, dc = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, uc = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, fc = { root: sc, over: lc, in: dc, on: uc }, gc = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, pc = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, mc = { size: "1.5rem" }, bc = { background: "{content.background}", padding: "1rem 0.25rem" }, hc = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, vc = { size: "1rem" }, yc = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, kc = { gap: "0.5rem", padding: "1rem" }, wc = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Cc = { background: "rgba(0, 0, 0, 0.5)" }, xc = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, $c = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Bc = { size: "1.5rem" }, Rc = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, Sc = { root: gc, navButton: pc, navIcon: mc, thumbnailsContent: bc, thumbnailNavButton: hc, thumbnailNavButtonIcon: vc, caption: yc, indicatorList: kc, indicatorButton: wc, insetIndicatorList: Cc, insetIndicatorButton: xc, closeButton: $c, closeButtonIcon: Bc, colorScheme: Rc }, Oc = { color: "{form.field.icon.color}" }, Ec = { icon: Oc }, Tc = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, _c = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, Ac = { root: Tc, input: _c }, Nc = { transitionDuration: "{transition.duration}" }, zc = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, Pc = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, Dc = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Lc = { root: Nc, preview: zc, toolbar: Pc, action: Dc }, jc = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Fc = { handle: jc }, Ic = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, Uc = { fontWeight: "500" }, Wc = { size: "1rem" }, Mc = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, Hc = { root: Ic, text: Uc, icon: Wc, colorScheme: Mc }, qc = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, Vc = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, Jc = { root: qc, display: Vc }, Xc = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Yc = { borderRadius: "{border.radius.sm}" }, Kc = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, Gc = { root: Xc, chip: Yc, colorScheme: Kc }, Qc = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, Zc = { addon: Qc }, os = { transitionDuration: "{transition.duration}" }, rs = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, es = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, ts = { root: os, button: rs, colorScheme: es }, ns = { gap: "0.5rem" }, as = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, is = { root: ns, input: as }, cs = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, ss = { root: cs }, ls = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ds = { background: "{primary.color}" }, us = { background: "{content.border.color}" }, fs = { color: "{text.muted.color}" }, gs = { root: ls, value: ds, range: us, text: fs }, ps = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, ms = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, bs = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, hs = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, vs = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, ys = { padding: "{list.option.padding}" }, ks = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, ws = { root: ps, list: ms, option: bs, optionGroup: hs, checkmark: vs, emptyMessage: ys, colorScheme: ks }, Cs = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, xs = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, $s = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Bs = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, Rs = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Ss = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, Os = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Es = { borderColor: "{content.border.color}" }, Ts = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, _s = { root: Cs, baseItem: xs, item: $s, overlay: Bs, submenu: Rs, submenuLabel: Ss, submenuIcon: Os, separator: Es, mobileButton: Ts }, As = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Ns = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, zs = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Ps = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, Ds = { borderColor: "{content.border.color}" }, Ls = { root: As, list: Ns, item: zs, submenuLabel: Ps, separator: Ds }, js = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, Fs = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, Is = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Us = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, Ws = { borderColor: "{content.border.color}" }, Ms = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Hs = { root: js, baseItem: Fs, item: Is, submenu: Us, separator: Ws, mobileButton: Ms }, qs = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Vs = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, Js = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, Xs = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, Ys = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Ks = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, Gs = { root: { borderWidth: "1px" } }, Qs = { content: { padding: "0" } }, Zs = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, ol = { root: qs, content: Vs, text: Js, icon: Xs, closeButton: Ys, closeIcon: Ks, outlined: Gs, simple: Qs, colorScheme: Zs }, rl = { borderRadius: "{content.border.radius}", gap: "1rem" }, el = { background: "{content.border.color}", size: "0.5rem" }, tl = { gap: "0.5rem" }, nl = { size: "0.5rem" }, al = { size: "1rem" }, il = { verticalGap: "0.5rem", horizontalGap: "1rem" }, cl = { root: rl, meters: el, label: tl, labelMarker: nl, labelIcon: al, labelList: il }, sl = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, ll = { width: "2.5rem", color: "{form.field.icon.color}" }, dl = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, ul = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, fl = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, gl = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, pl = { color: "{form.field.icon.color}" }, ml = { borderRadius: "{border.radius.sm}" }, bl = { padding: "{list.option.padding}" }, hl = { root: sl, dropdown: ll, overlay: dl, list: ul, option: fl, optionGroup: gl, chip: ml, clearIcon: pl, emptyMessage: bl }, vl = { gap: "1.125rem" }, yl = { gap: "0.5rem" }, kl = { root: vl, controls: yl }, wl = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, Cl = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, xl = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, $l = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, Bl = { root: wl, node: Cl, nodeToggleButton: xl, connector: $l }, Rl = { outline: { width: "2px", color: "{content.background}" } }, Sl = { root: Rl }, Ol = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, El = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Tl = { color: "{text.muted.color}" }, _l = { maxWidth: "2.5rem" }, Al = { root: Ol, navButton: El, currentPageReport: Tl, jumpToPageInput: _l }, Nl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, zl = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, Pl = { padding: "0.375rem 1.125rem" }, Dl = { fontWeight: "600" }, Ll = { padding: "0 1.125rem 1.125rem 1.125rem" }, jl = { padding: "0 1.125rem 1.125rem 1.125rem" }, Fl = { root: Nl, header: zl, toggleableHeader: Pl, title: Dl, content: Ll, footer: jl }, Il = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Ul = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, Wl = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Ml = { indent: "1rem" }, Hl = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, ql = { root: Il, panel: Ul, item: Wl, submenu: Ml, submenuIcon: Hl }, Vl = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, Jl = { color: "{form.field.icon.color}" }, Xl = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, Yl = { gap: "0.5rem" }, Kl = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, Gl = { meter: Vl, icon: Jl, overlay: Xl, content: Yl, colorScheme: Kl }, Ql = { gap: "1.125rem" }, Zl = { gap: "0.5rem" }, od = { root: Ql, controls: Zl }, rd = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, ed = { padding: "{overlay.popover.padding}" }, td = { root: rd, content: ed }, nd = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, ad = { background: "{primary.color}" }, id = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, cd = { root: nd, value: ad, label: id }, sd = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, ld = { colorScheme: sd }, dd = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, ud = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, fd = { root: dd, icon: ud }, gd = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, pd = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, md = { root: gd, icon: pd }, bd = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, hd = { colorScheme: bd }, vd = { transitionDuration: "{transition.duration}" }, yd = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, kd = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, wd = { root: vd, bar: yd, colorScheme: kd }, Cd = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, xd = { width: "2.5rem", color: "{form.field.icon.color}" }, $d = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Bd = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Rd = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Sd = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Od = { color: "{form.field.icon.color}" }, Ed = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, Td = { padding: "{list.option.padding}" }, _d = { root: Cd, dropdown: xd, overlay: $d, list: Bd, option: Rd, optionGroup: Sd, clearIcon: Od, checkmark: Ed, emptyMessage: Td }, Ad = { borderRadius: "{form.field.border.radius}" }, Nd = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, zd = { root: Ad, colorScheme: Nd }, Pd = { borderRadius: "{content.border.radius}" }, Dd = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, Ld = { root: Pd, colorScheme: Dd }, jd = { transitionDuration: "{transition.duration}" }, Fd = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, Id = { background: "{primary.color}" }, Ud = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Wd = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, Md = { root: jd, track: Fd, range: Id, handle: Ud, colorScheme: Wd }, Hd = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, qd = { root: Hd }, Vd = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, Jd = { root: Vd }, Xd = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Yd = { background: "{content.border.color}" }, Kd = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Gd = { root: Xd, gutter: Yd, handle: Kd }, Qd = { transitionDuration: "{transition.duration}" }, Zd = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, ou = { padding: "0.5rem", gap: "1rem" }, ru = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, eu = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, tu = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, nu = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, au = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, iu = { root: Qd, separator: Zd, step: ou, stepHeader: ru, stepTitle: eu, stepNumber: tu, steppanels: nu, steppanel: au }, cu = { transitionDuration: "{transition.duration}" }, su = { background: "{content.border.color}" }, lu = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, du = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, uu = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, fu = { root: cu, separator: su, itemLink: lu, itemLabel: du, itemNumber: uu }, gu = { transitionDuration: "{transition.duration}" }, pu = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, mu = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, bu = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, hu = { height: "1px", bottom: "-1px", background: "{primary.color}" }, vu = { root: gu, tablist: pu, item: mu, itemIcon: bu, activeBar: hu }, yu = { transitionDuration: "{transition.duration}" }, ku = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, wu = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Cu = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, xu = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, $u = { height: "1px", bottom: "-1px", background: "{primary.color}" }, Bu = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, Ru = { root: yu, tablist: ku, tab: wu, tabpanel: Cu, navButton: xu, activeBar: $u, colorScheme: Bu }, Su = { transitionDuration: "{transition.duration}" }, Ou = { background: "{content.background}", borderColor: "{content.border.color}" }, Eu = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Tu = { background: "{content.background}", color: "{content.color}" }, _u = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, Au = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, Nu = { root: Su, tabList: Ou, tab: Eu, tabPanel: Tu, navButton: _u, colorScheme: Au }, zu = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, Pu = { size: "0.75rem" }, Du = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Lu = { root: zu, icon: Pu, colorScheme: Du }, ju = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, Fu = { gap: "0.25rem" }, Iu = { margin: "2px 0" }, Uu = { root: ju, prompt: Fu, commandResponse: Iu }, Wu = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Mu = { root: Wu }, Hu = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, qu = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Vu = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Ju = { mobileIndent: "1rem" }, Xu = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Yu = { borderColor: "{content.border.color}" }, Ku = { root: Hu, list: qu, item: Vu, submenu: Ju, submenuIcon: Xu, separator: Yu }, Gu = { minHeight: "5rem" }, Qu = { eventContent: { padding: "1rem 0" } }, Zu = { eventContent: { padding: "0 1rem" } }, of = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, rf = { color: "{content.border.color}", size: "2px" }, ef = { event: Gu, horizontal: Qu, vertical: Zu, eventMarker: of, eventConnector: rf }, tf = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, nf = { size: "1.125rem" }, af = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, cf = { gap: "0.5rem" }, sf = { fontWeight: "500", fontSize: "1rem" }, lf = { fontWeight: "500", fontSize: "0.875rem" }, df = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, uf = { size: "1rem" }, ff = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, gf = { root: tf, icon: nf, content: af, text: cf, summary: sf, detail: lf, closeButton: df, closeIcon: uf, colorScheme: ff }, pf = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, mf = { disabledColor: "{form.field.disabled.color}" }, bf = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, hf = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, vf = { root: pf, icon: mf, content: bf, colorScheme: hf }, yf = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, kf = { borderRadius: "50%", size: "1rem" }, wf = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, Cf = { root: yf, handle: kf, colorScheme: wf }, xf = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, $f = { root: xf }, Bf = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, Rf = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, Sf = { root: Bf, colorScheme: Rf }, Of = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, Ef = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, Tf = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, _f = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Af = { size: "2rem" }, Nf = { margin: "0 0 0.5rem 0" }, zf = `
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Pf = { root: Of, node: Ef, nodeIcon: Tf, nodeToggleButton: _f, loadingIcon: Af, filter: Nf, css: zf }, Df = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Lf = { width: "2.5rem", color: "{form.field.icon.color}" }, jf = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Ff = { padding: "{list.padding}" }, If = { padding: "{list.option.padding}" }, Uf = { borderRadius: "{border.radius.sm}" }, Wf = { color: "{form.field.icon.color}" }, Mf = { root: Df, dropdown: Lf, overlay: jf, tree: Ff, emptyMessage: If, chip: Uf, clearIcon: Wf }, Hf = { transitionDuration: "{transition.duration}" }, qf = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, Vf = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Jf = { fontWeight: "600" }, Xf = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Yf = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, Kf = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, Gf = { fontWeight: "600" }, Qf = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, Zf = { width: "0.5rem" }, o0 = { width: "1px", color: "{primary.color}" }, r0 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, e0 = { size: "2rem" }, t0 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, n0 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, a0 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, i0 = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, c0 = `
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, s0 = { root: Hf, header: qf, headerCell: Vf, columnTitle: Jf, row: Xf, bodyCell: Yf, footerCell: Kf, columnFooter: Gf, footer: Qf, columnResizer: Zf, resizeIndicator: o0, sortIcon: r0, loadingIcon: e0, nodeToggleButton: t0, paginatorTop: n0, paginatorBottom: a0, colorScheme: i0, css: c0 }, l0 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, d0 = { loader: l0 }, u0 = Object.defineProperty, f0 = Object.defineProperties, g0 = Object.getOwnPropertyDescriptors, xr = Object.getOwnPropertySymbols, p0 = Object.prototype.hasOwnProperty, m0 = Object.prototype.propertyIsEnumerable, $r = (o, r, e) => r in o ? u0(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, Br, b0 = (Br = ((o, r) => {
  for (var e in r || (r = {})) p0.call(r, e) && $r(o, e, r[e]);
  if (xr) for (var e of xr(r)) m0.call(r, e) && $r(o, e, r[e]);
  return o;
})({}, $n), f0(Br, g0({ components: { accordion: Gt, autocomplete: sn, avatar: pn, badge: wn, blockui: Rn, breadcrumb: Tn, button: Nn, card: Fn, carousel: qn, cascadeselect: Qn, checkbox: ra, chip: ca, colorpicker: fa, confirmdialog: ma, confirmpopup: ka, contextmenu: Sa, datatable: Ya, dataview: ei, datepicker: Ci, dialog: Oi, divider: Ni, dock: Di, drawer: Wi, editor: Xi, fieldset: Zi, fileupload: cc, floatlabel: fc, galleria: Sc, iconfield: Ec, iftalabel: Ac, image: Lc, imagecompare: Fc, inlinemessage: Hc, inplace: Jc, inputchips: Gc, inputgroup: Zc, inputnumber: ts, inputotp: is, inputtext: ss, knob: gs, listbox: ws, megamenu: _s, menu: Ls, menubar: Hs, message: ol, metergroup: cl, multiselect: hl, orderlist: kl, organizationchart: Bl, overlaybadge: Sl, paginator: Al, panel: Fl, panelmenu: ql, password: Gl, picklist: od, popover: td, progressbar: cd, progressspinner: ld, radiobutton: fd, rating: md, ripple: hd, scrollpanel: wd, select: _d, selectbutton: zd, skeleton: Ld, slider: Md, speeddial: qd, splitbutton: Jd, splitter: Gd, stepper: iu, steps: fu, tabmenu: vu, tabs: Ru, tabview: Nu, tag: Lu, terminal: Uu, textarea: Mu, tieredmenu: Ku, timeline: ef, toast: gf, togglebutton: vf, toggleswitch: Cf, toolbar: $f, tooltip: Sf, tree: Pf, treeselect: Mf, treetable: s0, virtualscroller: d0 }, css: Oa })));
function oe(o, r) {
  return function() {
    return o.apply(r, arguments);
  };
}
const { toString: h0 } = Object.prototype, { getPrototypeOf: tr } = Object, { iterator: Io, toStringTag: re } = Symbol, Uo = /* @__PURE__ */ ((o) => (r) => {
  const e = h0.call(r);
  return o[e] || (o[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), J = (o) => (o = o.toLowerCase(), (r) => Uo(r) === o), Wo = (o) => (r) => typeof r === o, { isArray: bo } = Array, mo = Wo("undefined");
function Bo(o) {
  return o !== null && !mo(o) && o.constructor !== null && !mo(o.constructor) && D(o.constructor.isBuffer) && o.constructor.isBuffer(o);
}
const ee = J("ArrayBuffer");
function v0(o) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(o) : r = o && o.buffer && ee(o.buffer), r;
}
const y0 = Wo("string"), D = Wo("function"), te = Wo("number"), Ro = (o) => o !== null && typeof o == "object", k0 = (o) => o === !0 || o === !1, Po = (o) => {
  if (Uo(o) !== "object")
    return !1;
  const r = tr(o);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(re in o) && !(Io in o);
}, w0 = (o) => {
  if (!Ro(o) || Bo(o))
    return !1;
  try {
    return Object.keys(o).length === 0 && Object.getPrototypeOf(o) === Object.prototype;
  } catch {
    return !1;
  }
}, C0 = J("Date"), x0 = J("File"), $0 = J("Blob"), B0 = J("FileList"), R0 = (o) => Ro(o) && D(o.pipe), S0 = (o) => {
  let r;
  return o && (typeof FormData == "function" && o instanceof FormData || D(o.append) && ((r = Uo(o)) === "formdata" || // detect form-data instance
  r === "object" && D(o.toString) && o.toString() === "[object FormData]"));
}, O0 = J("URLSearchParams"), [E0, T0, _0, A0] = ["ReadableStream", "Request", "Response", "Headers"].map(J), N0 = (o) => o.trim ? o.trim() : o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function So(o, r, { allOwnKeys: e = !1 } = {}) {
  if (o === null || typeof o > "u")
    return;
  let t, n;
  if (typeof o != "object" && (o = [o]), bo(o))
    for (t = 0, n = o.length; t < n; t++)
      r.call(null, o[t], t, o);
  else {
    if (Bo(o))
      return;
    const i = e ? Object.getOwnPropertyNames(o) : Object.keys(o), a = i.length;
    let c;
    for (t = 0; t < a; t++)
      c = i[t], r.call(null, o[c], c, o);
  }
}
function ne(o, r) {
  if (Bo(o))
    return null;
  r = r.toLowerCase();
  const e = Object.keys(o);
  let t = e.length, n;
  for (; t-- > 0; )
    if (n = e[t], r === n.toLowerCase())
      return n;
  return null;
}
const no = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ae = (o) => !mo(o) && o !== no;
function Qo() {
  const { caseless: o, skipUndefined: r } = ae(this) && this || {}, e = {}, t = (n, i) => {
    const a = o && ne(e, i) || i;
    Po(e[a]) && Po(n) ? e[a] = Qo(e[a], n) : Po(n) ? e[a] = Qo({}, n) : bo(n) ? e[a] = n.slice() : (!r || !mo(n)) && (e[a] = n);
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && So(arguments[n], t);
  return e;
}
const z0 = (o, r, e, { allOwnKeys: t } = {}) => (So(r, (n, i) => {
  e && D(n) ? Object.defineProperty(o, i, {
    value: oe(n, e),
    writable: !0,
    enumerable: !0,
    configurable: !0
  }) : Object.defineProperty(o, i, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}, { allOwnKeys: t }), o), P0 = (o) => (o.charCodeAt(0) === 65279 && (o = o.slice(1)), o), D0 = (o, r, e, t) => {
  o.prototype = Object.create(r.prototype, t), Object.defineProperty(o.prototype, "constructor", {
    value: o,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(o, "super", {
    value: r.prototype
  }), e && Object.assign(o.prototype, e);
}, L0 = (o, r, e, t) => {
  let n, i, a;
  const c = {};
  if (r = r || {}, o == null) return r;
  do {
    for (n = Object.getOwnPropertyNames(o), i = n.length; i-- > 0; )
      a = n[i], (!t || t(a, o, r)) && !c[a] && (r[a] = o[a], c[a] = !0);
    o = e !== !1 && tr(o);
  } while (o && (!e || e(o, r)) && o !== Object.prototype);
  return r;
}, j0 = (o, r, e) => {
  o = String(o), (e === void 0 || e > o.length) && (e = o.length), e -= r.length;
  const t = o.indexOf(r, e);
  return t !== -1 && t === e;
}, F0 = (o) => {
  if (!o) return null;
  if (bo(o)) return o;
  let r = o.length;
  if (!te(r)) return null;
  const e = new Array(r);
  for (; r-- > 0; )
    e[r] = o[r];
  return e;
}, I0 = /* @__PURE__ */ ((o) => (r) => o && r instanceof o)(typeof Uint8Array < "u" && tr(Uint8Array)), U0 = (o, r) => {
  const t = (o && o[Io]).call(o);
  let n;
  for (; (n = t.next()) && !n.done; ) {
    const i = n.value;
    r.call(o, i[0], i[1]);
  }
}, W0 = (o, r) => {
  let e;
  const t = [];
  for (; (e = o.exec(r)) !== null; )
    t.push(e);
  return t;
}, M0 = J("HTMLFormElement"), H0 = (o) => o.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, t, n) {
    return t.toUpperCase() + n;
  }
), Rr = (({ hasOwnProperty: o }) => (r, e) => o.call(r, e))(Object.prototype), q0 = J("RegExp"), ie = (o, r) => {
  const e = Object.getOwnPropertyDescriptors(o), t = {};
  So(e, (n, i) => {
    let a;
    (a = r(n, i, o)) !== !1 && (t[i] = a || n);
  }), Object.defineProperties(o, t);
}, V0 = (o) => {
  ie(o, (r, e) => {
    if (D(o) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const t = o[e];
    if (D(t)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, J0 = (o, r) => {
  const e = {}, t = (n) => {
    n.forEach((i) => {
      e[i] = !0;
    });
  };
  return bo(o) ? t(o) : t(String(o).split(r)), e;
}, X0 = () => {
}, Y0 = (o, r) => o != null && Number.isFinite(o = +o) ? o : r;
function K0(o) {
  return !!(o && D(o.append) && o[re] === "FormData" && o[Io]);
}
const G0 = (o) => {
  const r = new Array(10), e = (t, n) => {
    if (Ro(t)) {
      if (r.indexOf(t) >= 0)
        return;
      if (Bo(t))
        return t;
      if (!("toJSON" in t)) {
        r[n] = t;
        const i = bo(t) ? [] : {};
        return So(t, (a, c) => {
          const s = e(a, n + 1);
          !mo(s) && (i[c] = s);
        }), r[n] = void 0, i;
      }
    }
    return t;
  };
  return e(o, 0);
}, Q0 = J("AsyncFunction"), Z0 = (o) => o && (Ro(o) || D(o)) && D(o.then) && D(o.catch), ce = ((o, r) => o ? setImmediate : r ? ((e, t) => (no.addEventListener("message", ({ source: n, data: i }) => {
  n === no && i === e && t.length && t.shift()();
}, !1), (n) => {
  t.push(n), no.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  D(no.postMessage)
), og = typeof queueMicrotask < "u" ? queueMicrotask.bind(no) : typeof process < "u" && process.nextTick || ce, rg = (o) => o != null && D(o[Io]), u = {
  isArray: bo,
  isArrayBuffer: ee,
  isBuffer: Bo,
  isFormData: S0,
  isArrayBufferView: v0,
  isString: y0,
  isNumber: te,
  isBoolean: k0,
  isObject: Ro,
  isPlainObject: Po,
  isEmptyObject: w0,
  isReadableStream: E0,
  isRequest: T0,
  isResponse: _0,
  isHeaders: A0,
  isUndefined: mo,
  isDate: C0,
  isFile: x0,
  isBlob: $0,
  isRegExp: q0,
  isFunction: D,
  isStream: R0,
  isURLSearchParams: O0,
  isTypedArray: I0,
  isFileList: B0,
  forEach: So,
  merge: Qo,
  extend: z0,
  trim: N0,
  stripBOM: P0,
  inherits: D0,
  toFlatObject: L0,
  kindOf: Uo,
  kindOfTest: J,
  endsWith: j0,
  toArray: F0,
  forEachEntry: U0,
  matchAll: W0,
  isHTMLForm: M0,
  hasOwnProperty: Rr,
  hasOwnProp: Rr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ie,
  freezeMethods: V0,
  toObjectSet: J0,
  toCamelCase: H0,
  noop: X0,
  toFiniteNumber: Y0,
  findKey: ne,
  global: no,
  isContextDefined: ae,
  isSpecCompliantForm: K0,
  toJSONObject: G0,
  isAsyncFn: Q0,
  isThenable: Z0,
  setImmediate: ce,
  asap: og,
  isIterable: rg
};
let v = class se extends Error {
  static from(r, e, t, n, i, a) {
    const c = new se(r.message, e || r.code, t, n, i);
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
const eg = null;
function Zo(o) {
  return u.isPlainObject(o) || u.isArray(o);
}
function le(o) {
  return u.endsWith(o, "[]") ? o.slice(0, -2) : o;
}
function Sr(o, r, e) {
  return o ? o.concat(r).map(function(n, i) {
    return n = le(n), !e && i ? "[" + n + "]" : n;
  }).join(e ? "." : "") : r;
}
function tg(o) {
  return u.isArray(o) && !o.some(Zo);
}
const ng = u.toFlatObject(u, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Mo(o, r, e) {
  if (!u.isObject(o))
    throw new TypeError("target must be an object");
  r = r || new FormData(), e = u.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, m) {
    return !u.isUndefined(m[h]);
  });
  const t = e.metaTokens, n = e.visitor || d, i = e.dots, a = e.indexes, s = (e.Blob || typeof Blob < "u" && Blob) && u.isSpecCompliantForm(r);
  if (!u.isFunction(n))
    throw new TypeError("visitor must be a function");
  function l(f) {
    if (f === null) return "";
    if (u.isDate(f))
      return f.toISOString();
    if (u.isBoolean(f))
      return f.toString();
    if (!s && u.isBlob(f))
      throw new v("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(f) || u.isTypedArray(f) ? s && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function d(f, h, m) {
    let y = f;
    if (f && !m && typeof f == "object") {
      if (u.endsWith(h, "{}"))
        h = t ? h : h.slice(0, -2), f = JSON.stringify(f);
      else if (u.isArray(f) && tg(f) || (u.isFileList(f) || u.endsWith(h, "[]")) && (y = u.toArray(f)))
        return h = le(h), y.forEach(function(w, C) {
          !(u.isUndefined(w) || w === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Sr([h], C, i) : a === null ? h : h + "[]",
            l(w)
          );
        }), !1;
    }
    return Zo(f) ? !0 : (r.append(Sr(m, h, i), l(f)), !1);
  }
  const g = [], p = Object.assign(ng, {
    defaultVisitor: d,
    convertValue: l,
    isVisitable: Zo
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
function Or(o) {
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
function nr(o, r) {
  this._pairs = [], o && Mo(o, this, r);
}
const de = nr.prototype;
de.append = function(r, e) {
  this._pairs.push([r, e]);
};
de.toString = function(r) {
  const e = r ? function(t) {
    return r.call(this, t, Or);
  } : Or;
  return this._pairs.map(function(n) {
    return e(n[0]) + "=" + e(n[1]);
  }, "").join("&");
};
function ag(o) {
  return encodeURIComponent(o).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ue(o, r, e) {
  if (!r)
    return o;
  const t = e && e.encode || ag, n = u.isFunction(e) ? {
    serialize: e
  } : e, i = n && n.serialize;
  let a;
  if (i ? a = i(r, n) : a = u.isURLSearchParams(r) ? r.toString() : new nr(r, n).toString(t), a) {
    const c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}
class Er {
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
const fe = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ig = typeof URLSearchParams < "u" ? URLSearchParams : nr, cg = typeof FormData < "u" ? FormData : null, sg = typeof Blob < "u" ? Blob : null, lg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ig,
    FormData: cg,
    Blob: sg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ar = typeof window < "u" && typeof document < "u", or = typeof navigator == "object" && navigator || void 0, dg = ar && (!or || ["ReactNative", "NativeScript", "NS"].indexOf(or.product) < 0), ug = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", fg = ar && window.location.href || "http://localhost", gg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ar,
  hasStandardBrowserEnv: dg,
  hasStandardBrowserWebWorkerEnv: ug,
  navigator: or,
  origin: fg
}, Symbol.toStringTag, { value: "Module" })), A = {
  ...gg,
  ...lg
};
function pg(o, r) {
  return Mo(o, new A.classes.URLSearchParams(), {
    visitor: function(e, t, n, i) {
      return A.isNode && u.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function mg(o) {
  return u.matchAll(/\w+|\[(\w*)]/g, o).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function bg(o) {
  const r = {}, e = Object.keys(o);
  let t;
  const n = e.length;
  let i;
  for (t = 0; t < n; t++)
    i = e[t], r[i] = o[i];
  return r;
}
function ge(o) {
  function r(e, t, n, i) {
    let a = e[i++];
    if (a === "__proto__") return !0;
    const c = Number.isFinite(+a), s = i >= e.length;
    return a = !a && u.isArray(n) ? n.length : a, s ? (u.hasOwnProp(n, a) ? n[a] = [n[a], t] : n[a] = t, !c) : ((!n[a] || !u.isObject(n[a])) && (n[a] = []), r(e, t, n[a], i) && u.isArray(n[a]) && (n[a] = bg(n[a])), !c);
  }
  if (u.isFormData(o) && u.isFunction(o.entries)) {
    const e = {};
    return u.forEachEntry(o, (t, n) => {
      r(mg(t), n, e, 0);
    }), e;
  }
  return null;
}
function hg(o, r, e) {
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
  transitional: fe,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, e) {
    const t = e.getContentType() || "", n = t.indexOf("application/json") > -1, i = u.isObject(r);
    if (i && u.isHTMLForm(r) && (r = new FormData(r)), u.isFormData(r))
      return n ? JSON.stringify(ge(r)) : r;
    if (u.isArrayBuffer(r) || u.isBuffer(r) || u.isStream(r) || u.isFile(r) || u.isBlob(r) || u.isReadableStream(r))
      return r;
    if (u.isArrayBufferView(r))
      return r.buffer;
    if (u.isURLSearchParams(r))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let c;
    if (i) {
      if (t.indexOf("application/x-www-form-urlencoded") > -1)
        return pg(r, this.formSerializer).toString();
      if ((c = u.isFileList(r)) || t.indexOf("multipart/form-data") > -1) {
        const s = this.env && this.env.FormData;
        return Mo(
          c ? { "files[]": r } : r,
          s && new s(),
          this.formSerializer
        );
      }
    }
    return i || n ? (e.setContentType("application/json", !1), hg(r)) : r;
  }],
  transformResponse: [function(r) {
    const e = this.transitional || Oo.transitional, t = e && e.forcedJSONParsing, n = this.responseType === "json";
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
    FormData: A.classes.FormData,
    Blob: A.classes.Blob
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
const vg = u.toObjectSet([
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
]), yg = (o) => {
  const r = {};
  let e, t, n;
  return o && o.split(`
`).forEach(function(a) {
    n = a.indexOf(":"), e = a.substring(0, n).trim().toLowerCase(), t = a.substring(n + 1).trim(), !(!e || r[e] && vg[e]) && (e === "set-cookie" ? r[e] ? r[e].push(t) : r[e] = [t] : r[e] = r[e] ? r[e] + ", " + t : t);
  }), r;
}, Tr = /* @__PURE__ */ Symbol("internals");
function vo(o) {
  return o && String(o).trim().toLowerCase();
}
function Do(o) {
  return o === !1 || o == null ? o : u.isArray(o) ? o.map(Do) : String(o);
}
function kg(o) {
  const r = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let t;
  for (; t = e.exec(o); )
    r[t[1]] = t[2];
  return r;
}
const wg = (o) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(o.trim());
function Jo(o, r, e, t, n) {
  if (u.isFunction(t))
    return t.call(this, r, e);
  if (n && (r = e), !!u.isString(r)) {
    if (u.isString(t))
      return r.indexOf(t) !== -1;
    if (u.isRegExp(t))
      return t.test(r);
  }
}
function Cg(o) {
  return o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, e, t) => e.toUpperCase() + t);
}
function xg(o, r) {
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
let L = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, e, t) {
    const n = this;
    function i(c, s, l) {
      const d = vo(s);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const g = u.findKey(n, d);
      (!g || n[g] === void 0 || l === !0 || l === void 0 && n[g] !== !1) && (n[g || s] = Do(c));
    }
    const a = (c, s) => u.forEach(c, (l, d) => i(l, d, s));
    if (u.isPlainObject(r) || r instanceof this.constructor)
      a(r, e);
    else if (u.isString(r) && (r = r.trim()) && !wg(r))
      a(yg(r), e);
    else if (u.isObject(r) && u.isIterable(r)) {
      let c = {}, s, l;
      for (const d of r) {
        if (!u.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        c[l = d[0]] = (s = c[l]) ? u.isArray(s) ? [...s, d[1]] : [s, d[1]] : d[1];
      }
      a(c, e);
    } else
      r != null && i(e, r, t);
    return this;
  }
  get(r, e) {
    if (r = vo(r), r) {
      const t = u.findKey(this, r);
      if (t) {
        const n = this[t];
        if (!e)
          return n;
        if (e === !0)
          return kg(n);
        if (u.isFunction(e))
          return e.call(this, n, t);
        if (u.isRegExp(e))
          return e.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, e) {
    if (r = vo(r), r) {
      const t = u.findKey(this, r);
      return !!(t && this[t] !== void 0 && (!e || Jo(this, this[t], t, e)));
    }
    return !1;
  }
  delete(r, e) {
    const t = this;
    let n = !1;
    function i(a) {
      if (a = vo(a), a) {
        const c = u.findKey(t, a);
        c && (!e || Jo(t, t[c], c, e)) && (delete t[c], n = !0);
      }
    }
    return u.isArray(r) ? r.forEach(i) : i(r), n;
  }
  clear(r) {
    const e = Object.keys(this);
    let t = e.length, n = !1;
    for (; t--; ) {
      const i = e[t];
      (!r || Jo(this, this[i], i, r, !0)) && (delete this[i], n = !0);
    }
    return n;
  }
  normalize(r) {
    const e = this, t = {};
    return u.forEach(this, (n, i) => {
      const a = u.findKey(t, i);
      if (a) {
        e[a] = Do(n), delete e[i];
        return;
      }
      const c = r ? Cg(i) : String(i).trim();
      c !== i && delete e[i], e[c] = Do(n), t[c] = !0;
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
    const t = (this[Tr] = this[Tr] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function i(a) {
      const c = vo(a);
      t[c] || (xg(n, a), t[c] = !0);
    }
    return u.isArray(r) ? r.forEach(i) : i(r), this;
  }
};
L.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.reduceDescriptors(L.prototype, ({ value: o }, r) => {
  let e = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => o,
    set(t) {
      this[e] = t;
    }
  };
});
u.freezeMethods(L);
function Xo(o, r) {
  const e = this || Oo, t = r || e, n = L.from(t.headers);
  let i = t.data;
  return u.forEach(o, function(c) {
    i = c.call(e, i, n.normalize(), r ? r.status : void 0);
  }), n.normalize(), i;
}
function pe(o) {
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
function me(o, r, e) {
  const t = e.config.validateStatus;
  !e.status || !t || t(e.status) ? o(e) : r(new v(
    "Request failed with status code " + e.status,
    [v.ERR_BAD_REQUEST, v.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
function $g(o) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
  return r && r[1] || "";
}
function Bg(o, r) {
  o = o || 10;
  const e = new Array(o), t = new Array(o);
  let n = 0, i = 0, a;
  return r = r !== void 0 ? r : 1e3, function(s) {
    const l = Date.now(), d = t[i];
    a || (a = l), e[n] = s, t[n] = l;
    let g = i, p = 0;
    for (; g !== n; )
      p += e[g++], g = g % o;
    if (n = (n + 1) % o, n === i && (i = (i + 1) % o), l - a < r)
      return;
    const b = d && l - d;
    return b ? Math.round(p * 1e3 / b) : void 0;
  };
}
function Rg(o, r) {
  let e = 0, t = 1e3 / r, n, i;
  const a = (l, d = Date.now()) => {
    e = d, n = null, i && (clearTimeout(i), i = null), o(...l);
  };
  return [(...l) => {
    const d = Date.now(), g = d - e;
    g >= t ? a(l, d) : (n = l, i || (i = setTimeout(() => {
      i = null, a(n);
    }, t - g)));
  }, () => n && a(n)];
}
const Fo = (o, r, e = 3) => {
  let t = 0;
  const n = Bg(50, 250);
  return Rg((i) => {
    const a = i.loaded, c = i.lengthComputable ? i.total : void 0, s = a - t, l = n(s), d = a <= c;
    t = a;
    const g = {
      loaded: a,
      total: c,
      progress: c ? a / c : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && c && d ? (c - a) / l : void 0,
      event: i,
      lengthComputable: c != null,
      [r ? "download" : "upload"]: !0
    };
    o(g);
  }, e);
}, _r = (o, r) => {
  const e = o != null;
  return [(t) => r[0]({
    lengthComputable: e,
    total: o,
    loaded: t
  }), r[1]];
}, Ar = (o) => (...r) => u.asap(() => o(...r)), Sg = A.hasStandardBrowserEnv ? /* @__PURE__ */ ((o, r) => (e) => (e = new URL(e, A.origin), o.protocol === e.protocol && o.host === e.host && (r || o.port === e.port)))(
  new URL(A.origin),
  A.navigator && /(msie|trident)/i.test(A.navigator.userAgent)
) : () => !0, Og = A.hasStandardBrowserEnv ? (
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
function Eg(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}
function Tg(o, r) {
  return r ? o.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : o;
}
function be(o, r, e) {
  let t = !Eg(r);
  return o && (t || e == !1) ? Tg(o, r) : r;
}
const Nr = (o) => o instanceof L ? { ...o } : o;
function lo(o, r) {
  r = r || {};
  const e = {};
  function t(l, d, g, p) {
    return u.isPlainObject(l) && u.isPlainObject(d) ? u.merge.call({ caseless: p }, l, d) : u.isPlainObject(d) ? u.merge({}, d) : u.isArray(d) ? d.slice() : d;
  }
  function n(l, d, g, p) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(l))
        return t(void 0, l, g, p);
    } else return t(l, d, g, p);
  }
  function i(l, d) {
    if (!u.isUndefined(d))
      return t(void 0, d);
  }
  function a(l, d) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(l))
        return t(void 0, l);
    } else return t(void 0, d);
  }
  function c(l, d, g) {
    if (g in r)
      return t(l, d);
    if (g in o)
      return t(void 0, l);
  }
  const s = {
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
    headers: (l, d, g) => n(Nr(l), Nr(d), g, !0)
  };
  return u.forEach(Object.keys({ ...o, ...r }), function(d) {
    const g = s[d] || n, p = g(o[d], r[d], d);
    u.isUndefined(p) && g !== c || (e[d] = p);
  }), e;
}
const he = (o) => {
  const r = lo({}, o);
  let { data: e, withXSRFToken: t, xsrfHeaderName: n, xsrfCookieName: i, headers: a, auth: c } = r;
  if (r.headers = a = L.from(a), r.url = ue(be(r.baseURL, r.url, r.allowAbsoluteUrls), o.params, o.paramsSerializer), c && a.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  ), u.isFormData(e)) {
    if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (u.isFunction(e.getHeaders)) {
      const s = e.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(s).forEach(([d, g]) => {
        l.includes(d.toLowerCase()) && a.set(d, g);
      });
    }
  }
  if (A.hasStandardBrowserEnv && (t && u.isFunction(t) && (t = t(r)), t || t !== !1 && Sg(r.url))) {
    const s = n && i && Og.read(i);
    s && a.set(n, s);
  }
  return r;
}, _g = typeof XMLHttpRequest < "u", Ag = _g && function(o) {
  return new Promise(function(e, t) {
    const n = he(o);
    let i = n.data;
    const a = L.from(n.headers).normalize();
    let { responseType: c, onUploadProgress: s, onDownloadProgress: l } = n, d, g, p, b, f;
    function h() {
      b && b(), f && f(), n.cancelToken && n.cancelToken.unsubscribe(d), n.signal && n.signal.removeEventListener("abort", d);
    }
    let m = new XMLHttpRequest();
    m.open(n.method.toUpperCase(), n.url, !0), m.timeout = n.timeout;
    function y() {
      if (!m)
        return;
      const w = L.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), S = {
        data: !c || c === "text" || c === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: w,
        config: o,
        request: m
      };
      me(function(x) {
        e(x), h();
      }, function(x) {
        t(x), h();
      }, S), m = null;
    }
    "onloadend" in m ? m.onloadend = y : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, m.onabort = function() {
      m && (t(new v("Request aborted", v.ECONNABORTED, o, m)), m = null);
    }, m.onerror = function(C) {
      const S = C && C.message ? C.message : "Network Error", N = new v(S, v.ERR_NETWORK, o, m);
      N.event = C || null, t(N), m = null;
    }, m.ontimeout = function() {
      let C = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const S = n.transitional || fe;
      n.timeoutErrorMessage && (C = n.timeoutErrorMessage), t(new v(
        C,
        S.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED,
        o,
        m
      )), m = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in m && u.forEach(a.toJSON(), function(C, S) {
      m.setRequestHeader(S, C);
    }), u.isUndefined(n.withCredentials) || (m.withCredentials = !!n.withCredentials), c && c !== "json" && (m.responseType = n.responseType), l && ([p, f] = Fo(l, !0), m.addEventListener("progress", p)), s && m.upload && ([g, b] = Fo(s), m.upload.addEventListener("progress", g), m.upload.addEventListener("loadend", b)), (n.cancelToken || n.signal) && (d = (w) => {
      m && (t(!w || w.type ? new Eo(null, o, m) : w), m.abort(), m = null);
    }, n.cancelToken && n.cancelToken.subscribe(d), n.signal && (n.signal.aborted ? d() : n.signal.addEventListener("abort", d)));
    const k = $g(n.url);
    if (k && A.protocols.indexOf(k) === -1) {
      t(new v("Unsupported protocol " + k + ":", v.ERR_BAD_REQUEST, o));
      return;
    }
    m.send(i || null);
  });
}, Ng = (o, r) => {
  const { length: e } = o = o ? o.filter(Boolean) : [];
  if (r || e) {
    let t = new AbortController(), n;
    const i = function(l) {
      if (!n) {
        n = !0, c();
        const d = l instanceof Error ? l : this.reason;
        t.abort(d instanceof v ? d : new Eo(d instanceof Error ? d.message : d));
      }
    };
    let a = r && setTimeout(() => {
      a = null, i(new v(`timeout of ${r}ms exceeded`, v.ETIMEDOUT));
    }, r);
    const c = () => {
      o && (a && clearTimeout(a), a = null, o.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), o = null);
    };
    o.forEach((l) => l.addEventListener("abort", i));
    const { signal: s } = t;
    return s.unsubscribe = () => u.asap(c), s;
  }
}, zg = function* (o, r) {
  let e = o.byteLength;
  if (e < r) {
    yield o;
    return;
  }
  let t = 0, n;
  for (; t < e; )
    n = t + r, yield o.slice(t, n), t = n;
}, Pg = async function* (o, r) {
  for await (const e of Dg(o))
    yield* zg(e, r);
}, Dg = async function* (o) {
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
}, zr = (o, r, e, t) => {
  const n = Pg(o, r);
  let i = 0, a, c = (s) => {
    a || (a = !0, t && t(s));
  };
  return new ReadableStream({
    async pull(s) {
      try {
        const { done: l, value: d } = await n.next();
        if (l) {
          c(), s.close();
          return;
        }
        let g = d.byteLength;
        if (e) {
          let p = i += g;
          e(p);
        }
        s.enqueue(new Uint8Array(d));
      } catch (l) {
        throw c(l), l;
      }
    },
    cancel(s) {
      return c(s), n.return();
    }
  }, {
    highWaterMark: 2
  });
}, Pr = 64 * 1024, { isFunction: zo } = u, Lg = (({ Request: o, Response: r }) => ({
  Request: o,
  Response: r
}))(u.global), {
  ReadableStream: Dr,
  TextEncoder: Lr
} = u.global, jr = (o, ...r) => {
  try {
    return !!o(...r);
  } catch {
    return !1;
  }
}, jg = (o) => {
  o = u.merge.call({
    skipUndefined: !0
  }, Lg, o);
  const { fetch: r, Request: e, Response: t } = o, n = r ? zo(r) : typeof fetch == "function", i = zo(e), a = zo(t);
  if (!n)
    return !1;
  const c = n && zo(Dr), s = n && (typeof Lr == "function" ? /* @__PURE__ */ ((f) => (h) => f.encode(h))(new Lr()) : async (f) => new Uint8Array(await new e(f).arrayBuffer())), l = i && c && jr(() => {
    let f = !1;
    const h = new e(A.origin, {
      body: new Dr(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !h;
  }), d = a && c && jr(() => u.isReadableStream(new t("").body)), g = {
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
      return (await new e(A.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (u.isArrayBufferView(f) || u.isArrayBuffer(f))
      return f.byteLength;
    if (u.isURLSearchParams(f) && (f = f + ""), u.isString(f))
      return (await s(f)).byteLength;
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
      onDownloadProgress: S,
      onUploadProgress: N,
      responseType: x,
      headers: I,
      withCredentials: j = "same-origin",
      fetchOptions: X
    } = he(f), W = r || fetch;
    x = x ? (x + "").toLowerCase() : "text";
    let U = Ng([k, w && w.toAbortSignal()], C), F = null;
    const E = U && U.unsubscribe && (() => {
      U.unsubscribe();
    });
    let Y;
    try {
      if (N && l && m !== "get" && m !== "head" && (Y = await b(I, y)) !== 0) {
        let R = new e(h, {
          method: "POST",
          body: y,
          duplex: "half"
        }), P;
        if (u.isFormData(y) && (P = R.headers.get("content-type")) && I.setContentType(P), R.body) {
          const [ro, H] = _r(
            Y,
            Fo(Ar(N))
          );
          y = zr(R.body, Pr, ro, H);
        }
      }
      u.isString(j) || (j = j ? "include" : "omit");
      const O = i && "credentials" in e.prototype, K = {
        ...X,
        signal: U,
        method: m.toUpperCase(),
        headers: I.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: O ? j : void 0
      };
      F = i && new e(h, K);
      let z = await (i ? W(F, X) : W(h, K));
      const Q = d && (x === "stream" || x === "response");
      if (d && (S || Q && E)) {
        const R = {};
        ["status", "statusText", "headers"].forEach((ho) => {
          R[ho] = z[ho];
        });
        const P = u.toFiniteNumber(z.headers.get("content-length")), [ro, H] = S && _r(
          P,
          Fo(Ar(S), !0)
        ) || [];
        z = new t(
          zr(z.body, Pr, ro, () => {
            H && H(), E && E();
          }),
          R
        );
      }
      x = x || "text";
      let M = await g[u.findKey(g, x) || "text"](z, f);
      return !Q && E && E(), await new Promise((R, P) => {
        me(R, P, {
          data: M,
          headers: L.from(z.headers),
          status: z.status,
          statusText: z.statusText,
          config: f,
          request: F
        });
      });
    } catch (O) {
      throw E && E(), O && O.name === "TypeError" && /Load failed|fetch/i.test(O.message) ? Object.assign(
        new v("Network Error", v.ERR_NETWORK, f, F),
        {
          cause: O.cause || O
        }
      ) : v.from(O, O && O.code, f, F);
    }
  };
}, Fg = /* @__PURE__ */ new Map(), ve = (o) => {
  let r = o && o.env || {};
  const { fetch: e, Request: t, Response: n } = r, i = [
    t,
    n,
    e
  ];
  let a = i.length, c = a, s, l, d = Fg;
  for (; c--; )
    s = i[c], l = d.get(s), l === void 0 && d.set(s, l = c ? /* @__PURE__ */ new Map() : jg(r)), d = l;
  return l;
};
ve();
const ir = {
  http: eg,
  xhr: Ag,
  fetch: {
    get: ve
  }
};
u.forEach(ir, (o, r) => {
  if (o) {
    try {
      Object.defineProperty(o, "name", { value: r });
    } catch {
    }
    Object.defineProperty(o, "adapterName", { value: r });
  }
});
const Fr = (o) => `- ${o}`, Ig = (o) => u.isFunction(o) || o === null || o === !1;
function Ug(o, r) {
  o = u.isArray(o) ? o : [o];
  const { length: e } = o;
  let t, n;
  const i = {};
  for (let a = 0; a < e; a++) {
    t = o[a];
    let c;
    if (n = t, !Ig(t) && (n = ir[(c = String(t)).toLowerCase()], n === void 0))
      throw new v(`Unknown adapter '${c}'`);
    if (n && (u.isFunction(n) || (n = n.get(r))))
      break;
    i[c || "#" + a] = n;
  }
  if (!n) {
    const a = Object.entries(i).map(
      ([s, l]) => `adapter ${s} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let c = e ? a.length > 1 ? `since :
` + a.map(Fr).join(`
`) : " " + Fr(a[0]) : "as no adapter specified";
    throw new v(
      "There is no suitable adapter to dispatch the request " + c,
      "ERR_NOT_SUPPORT"
    );
  }
  return n;
}
const ye = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Ug,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: ir
};
function Yo(o) {
  if (o.cancelToken && o.cancelToken.throwIfRequested(), o.signal && o.signal.aborted)
    throw new Eo(null, o);
}
function Ir(o) {
  return Yo(o), o.headers = L.from(o.headers), o.data = Xo.call(
    o,
    o.transformRequest
  ), ["post", "put", "patch"].indexOf(o.method) !== -1 && o.headers.setContentType("application/x-www-form-urlencoded", !1), ye.getAdapter(o.adapter || Oo.adapter, o)(o).then(function(t) {
    return Yo(o), t.data = Xo.call(
      o,
      o.transformResponse,
      t
    ), t.headers = L.from(t.headers), t;
  }, function(t) {
    return pe(t) || (Yo(o), t && t.response && (t.response.data = Xo.call(
      o,
      o.transformResponse,
      t.response
    ), t.response.headers = L.from(t.response.headers))), Promise.reject(t);
  });
}
const ke = "1.13.4", Ho = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((o, r) => {
  Ho[o] = function(t) {
    return typeof t === o || "a" + (r < 1 ? "n " : " ") + o;
  };
});
const Ur = {};
Ho.transitional = function(r, e, t) {
  function n(i, a) {
    return "[Axios v" + ke + "] Transitional option '" + i + "'" + a + (t ? ". " + t : "");
  }
  return (i, a, c) => {
    if (r === !1)
      throw new v(
        n(a, " has been removed" + (e ? " in " + e : "")),
        v.ERR_DEPRECATED
      );
    return e && !Ur[a] && (Ur[a] = !0, console.warn(
      n(
        a,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), r ? r(i, a, c) : !0;
  };
};
Ho.spelling = function(r) {
  return (e, t) => (console.warn(`${t} is likely a misspelling of ${r}`), !0);
};
function Wg(o, r, e) {
  if (typeof o != "object")
    throw new v("options must be an object", v.ERR_BAD_OPTION_VALUE);
  const t = Object.keys(o);
  let n = t.length;
  for (; n-- > 0; ) {
    const i = t[n], a = r[i];
    if (a) {
      const c = o[i], s = c === void 0 || a(c, i, o);
      if (s !== !0)
        throw new v("option " + i + " must be " + s, v.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new v("Unknown option " + i, v.ERR_BAD_OPTION);
  }
}
const Lo = {
  assertOptions: Wg,
  validators: Ho
}, G = Lo.validators;
let so = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new Er(),
      response: new Er()
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
    typeof r == "string" ? (e = e || {}, e.url = r) : e = r || {}, e = lo(this.defaults, e);
    const { transitional: t, paramsSerializer: n, headers: i } = e;
    t !== void 0 && Lo.assertOptions(t, {
      silentJSONParsing: G.transitional(G.boolean),
      forcedJSONParsing: G.transitional(G.boolean),
      clarifyTimeoutError: G.transitional(G.boolean)
    }, !1), n != null && (u.isFunction(n) ? e.paramsSerializer = {
      serialize: n
    } : Lo.assertOptions(n, {
      encode: G.function,
      serialize: G.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), Lo.assertOptions(e, {
      baseUrl: G.spelling("baseURL"),
      withXsrfToken: G.spelling("withXSRFToken")
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
    ), e.headers = L.concat(a, i);
    const c = [];
    let s = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(e) === !1 || (s = s && h.synchronous, c.unshift(h.fulfilled, h.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(h) {
      l.push(h.fulfilled, h.rejected);
    });
    let d, g = 0, p;
    if (!s) {
      const f = [Ir.bind(this), void 0];
      for (f.unshift(...c), f.push(...l), p = f.length, d = Promise.resolve(e); g < p; )
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
      d = Ir.call(this, b);
    } catch (f) {
      return Promise.reject(f);
    }
    for (g = 0, p = l.length; g < p; )
      d = d.then(l[g++], l[g++]);
    return d;
  }
  getUri(r) {
    r = lo(this.defaults, r);
    const e = be(r.baseURL, r.url, r.allowAbsoluteUrls);
    return ue(e, r.params, r.paramsSerializer);
  }
};
u.forEach(["delete", "get", "head", "options"], function(r) {
  so.prototype[r] = function(e, t) {
    return this.request(lo(t || {}, {
      method: r,
      url: e,
      data: (t || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(r) {
  function e(t) {
    return function(i, a, c) {
      return this.request(lo(c || {}, {
        method: r,
        headers: t ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  so.prototype[r] = e(), so.prototype[r + "Form"] = e(!0);
});
let Mg = class we {
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
      token: new we(function(n) {
        r = n;
      }),
      cancel: r
    };
  }
};
function Hg(o) {
  return function(e) {
    return o.apply(null, e);
  };
}
function qg(o) {
  return u.isObject(o) && o.isAxiosError === !0;
}
const rr = {
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
Object.entries(rr).forEach(([o, r]) => {
  rr[r] = o;
});
function Ce(o) {
  const r = new so(o), e = oe(so.prototype.request, r);
  return u.extend(e, so.prototype, r, { allOwnKeys: !0 }), u.extend(e, r, null, { allOwnKeys: !0 }), e.create = function(n) {
    return Ce(lo(o, n));
  }, e;
}
const B = Ce(Oo);
B.Axios = so;
B.CanceledError = Eo;
B.CancelToken = Mg;
B.isCancel = pe;
B.VERSION = ke;
B.toFormData = Mo;
B.AxiosError = v;
B.Cancel = B.CanceledError;
B.all = function(r) {
  return Promise.all(r);
};
B.spread = Hg;
B.isAxiosError = qg;
B.mergeConfig = lo;
B.AxiosHeaders = L;
B.formToJSON = (o) => ge(u.isHTMLForm(o) ? new FormData(o) : o);
B.getAdapter = ye.getAdapter;
B.HttpStatusCode = rr;
B.default = B;
const {
  Axios: tp,
  AxiosError: np,
  CanceledError: ap,
  isCancel: ip,
  CancelToken: cp,
  VERSION: sp,
  all: lp,
  Cancel: dp,
  isAxiosError: up,
  spread: fp,
  toFormData: gp,
  AxiosHeaders: pp,
  HttpStatusCode: mp,
  formToJSON: bp,
  getAdapter: hp,
  mergeConfig: vp
} = B;
function Vg() {
  const o = to(!1), r = to(null);
  return { post: async (t, n, i = null) => {
    o.value = !0, r.value = null;
    try {
      const { data: a } = await B.post(t, n, {
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
const Jg = { key: 0 }, Xg = ["innerHTML"], Yg = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=product_bluk_upload", Kg = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", Gg = /* @__PURE__ */ He({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(o) {
    const r = to([]), { post: e, error: t } = Vg(), n = async () => {
      if (!r.value.length) return console.log("No file selected");
      const a = new FormData();
      a.append("file", r.value[0]), a.append("file_format", "json"), a.append("collection", "products");
      const c = await e(Yg, a, Kg);
      if (!c) return console.log("Error uploading bulk product:", t.value);
      console.log("Bulk product upload response:", c);
    }, i = to(null);
    return Wr(() => {
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
                          class: "w-full",
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
        const s = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
          }
        }, l = await Ke(s), d = await Ge(s);
        (async () => Qe("child:msg", async (p) => {
          console.log("[ce_listen]", p), p.type === "fileUpload:uploader" && (r.value = p.custom?.event?.files || [], console.log("Files upload:", r.value)), p.type === "click" && n();
        }))(), await (async () => {
          const p = await l.set({
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
    }), (a, c) => i.value ? (qe(), Ve("div", Jg, [
      Je("div", { innerHTML: i.value }, null, 8, Xg)
    ])) : Xe("", !0);
  }
}), yp = async (o) => ({
  set: async (r) => {
    console.log(`--hydrator [${r.data.curr.type}]`);
    const t = Ye(Gg, {
      _p: o,
      _$p: r
    });
    t.use(Vt, {
      theme: {
        preset: b0
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
  yp as hydrator,
  yp as index
};
