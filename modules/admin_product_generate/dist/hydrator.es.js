import { r as Br, g as So, o as Yo, n as Sr, w as eo, a as to, b as Rr, d as _r, c as zr, e as Or, f as Tr, h as Nr, i as jr } from "./runtime-dom.esm-bundler-W6r3jByx.js";
var Pr = Object.defineProperty, Ro = Object.getOwnPropertySymbols, Dr = Object.prototype.hasOwnProperty, Lr = Object.prototype.propertyIsEnumerable, _o = (o, r, e) => r in o ? Pr(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, Wr = (o, r) => {
  for (var e in r || (r = {})) Dr.call(r, e) && _o(o, e, r[e]);
  if (Ro) for (var e of Ro(r)) Lr.call(r, e) && _o(o, e, r[e]);
  return o;
};
function xo(o) {
  return o == null || o === "" || Array.isArray(o) && o.length === 0 || !(o instanceof Date) && typeof o == "object" && Object.keys(o).length === 0;
}
function Er(o) {
  return typeof o == "function" && "call" in o && "apply" in o;
}
function v(o) {
  return !xo(o);
}
function Y(o, r = !0) {
  return o instanceof Object && o.constructor === Object && (r || Object.keys(o).length !== 0);
}
function Xo(o = {}, r = {}) {
  let e = Wr({}, o);
  return Object.keys(r).forEach((t) => {
    let n = t;
    Y(r[n]) && n in o && Y(o[n]) ? e[n] = Xo(o[n], r[n]) : e[n] = r[n];
  }), e;
}
function Ir(...o) {
  return o.reduce((r, e, t) => t === 0 ? e : Xo(r, e), {});
}
function P(o, ...r) {
  return Er(o) ? o(...r) : o;
}
function ro(o, r = !0) {
  return typeof o == "string" && (r || o !== "");
}
function Ar(o) {
  return v(o) && !isNaN(o);
}
function X(o, r) {
  if (r) {
    let e = r.test(o);
    return r.lastIndex = 0, e;
  }
  return !1;
}
function Mr(...o) {
  return Ir(...o);
}
function no(o) {
  return o && o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function Uo(o) {
  return ro(o) ? o.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : o;
}
function Vo() {
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
function Fr(o) {
  if (o) {
    let r = o.parentNode;
    return r && r instanceof ShadowRoot && r.host && (r = r.host), r;
  }
  return null;
}
function Hr(o) {
  return !!(o !== null && typeof o < "u" && o.nodeName && Fr(o));
}
function Go(o) {
  return typeof Element < "u" ? o instanceof Element : o !== null && typeof o == "object" && o.nodeType === 1 && typeof o.nodeName == "string";
}
function ko(o, r = {}) {
  if (Go(o)) {
    let e = (t, n) => {
      var l, d;
      let c = (l = o?.$attrs) != null && l[t] ? [(d = o?.$attrs) == null ? void 0 : d[t]] : [];
      return [n].flat().reduce((a, i) => {
        if (i != null) {
          let s = typeof i;
          if (s === "string" || s === "number") a.push(i);
          else if (s === "object") {
            let g = Array.isArray(i) ? e(t, i) : Object.entries(i).map(([u, f]) => t === "style" && (f || f === 0) ? `${u.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${f}` : f ? u : void 0);
            a = g.length ? a.concat(g.filter((u) => !!u)) : a;
          }
        }
        return a;
      }, c);
    };
    Object.entries(r).forEach(([t, n]) => {
      if (n != null) {
        let l = t.match(/^on(.+)/);
        l ? o.addEventListener(l[1].toLowerCase(), n) : t === "p-bind" || t === "pBind" ? ko(o, n) : (n = t === "class" ? [...new Set(e("class", n))].join(" ").trim() : t === "style" ? e("style", n).join(";").trim() : n, (o.$attrs = o.$attrs || {}) && (o.$attrs[t] = n), o.setAttribute(t, n));
      }
    });
  }
}
function Yr() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Xr(o, r = "", e) {
  Go(o) && e !== null && e !== void 0 && o.setAttribute(r, e);
}
var Ur = Object.defineProperty, Vr = Object.defineProperties, Gr = Object.getOwnPropertyDescriptors, po = Object.getOwnPropertySymbols, qo = Object.prototype.hasOwnProperty, Jo = Object.prototype.propertyIsEnumerable, zo = (o, r, e) => r in o ? Ur(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, $ = (o, r) => {
  for (var e in r || (r = {})) qo.call(r, e) && zo(o, e, r[e]);
  if (po) for (var e of po(r)) Jo.call(r, e) && zo(o, e, r[e]);
  return o;
}, ho = (o, r) => Vr(o, Gr(r)), R = (o, r) => {
  var e = {};
  for (var t in o) qo.call(o, t) && r.indexOf(t) < 0 && (e[t] = o[t]);
  if (o != null && po) for (var t of po(o)) r.indexOf(t) < 0 && Jo.call(o, t) && (e[t] = o[t]);
  return e;
}, qr = Vo(), _ = qr, ao = /{([^}]*)}/g, Ko = /(\d+\s+[\+\-\*\/]\s+\d+)/g, Zo = /var\([^)]+\)/g;
function Oo(o) {
  return ro(o) ? o.replace(/[A-Z]/g, (r, e) => e === 0 ? r : "." + r.toLowerCase()).toLowerCase() : o;
}
function Jr(o) {
  return Y(o) && o.hasOwnProperty("$value") && o.hasOwnProperty("$type") ? o.$value : o;
}
function Kr(o) {
  return o.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function yo(o = "", r = "") {
  return Kr(`${ro(o, !1) && ro(r, !1) ? `${o}-` : o}${r}`);
}
function Qo(o = "", r = "") {
  return `--${yo(o, r)}`;
}
function Zr(o = "") {
  let r = (o.match(/{/g) || []).length, e = (o.match(/}/g) || []).length;
  return (r + e) % 2 !== 0;
}
function or(o, r = "", e = "", t = [], n) {
  if (ro(o)) {
    let l = o.trim();
    if (Zr(l)) return;
    if (X(l, ao)) {
      let d = l.replaceAll(ao, (c) => {
        let a = c.replace(/{|}/g, "").split(".").filter((i) => !t.some((s) => X(i, s)));
        return `var(${Qo(e, Uo(a.join("-")))}${v(n) ? `, ${n}` : ""})`;
      });
      return X(d.replace(Zo, "0"), Ko) ? `calc(${d})` : d;
    }
    return l;
  } else if (Ar(o)) return o;
}
function Qr(o, r, e) {
  ro(r, !1) && o.push(`${r}:${e};`);
}
function Q(o, r) {
  return o ? `${o}{${r}}` : "";
}
function rr(o, r) {
  if (o.indexOf("dt(") === -1) return o;
  function e(d, c) {
    let a = [], i = 0, s = "", g = null, u = 0;
    for (; i <= d.length; ) {
      let f = d[i];
      if ((f === '"' || f === "'" || f === "`") && d[i - 1] !== "\\" && (g = g === f ? null : f), !g && (f === "(" && u++, f === ")" && u--, (f === "," || i === d.length) && u === 0)) {
        let m = s.trim();
        m.startsWith("dt(") ? a.push(rr(m, c)) : a.push(t(m)), s = "", i++;
        continue;
      }
      f !== void 0 && (s += f), i++;
    }
    return a;
  }
  function t(d) {
    let c = d[0];
    if ((c === '"' || c === "'" || c === "`") && d[d.length - 1] === c) return d.slice(1, -1);
    let a = Number(d);
    return isNaN(a) ? d : a;
  }
  let n = [], l = [];
  for (let d = 0; d < o.length; d++) if (o[d] === "d" && o.slice(d, d + 3) === "dt(") l.push(d), d += 2;
  else if (o[d] === ")" && l.length > 0) {
    let c = l.pop();
    l.length === 0 && n.push([c, d]);
  }
  if (!n.length) return o;
  for (let d = n.length - 1; d >= 0; d--) {
    let [c, a] = n[d], i = o.slice(c + 3, a), s = e(i, r), g = r(...s);
    o = o.slice(0, c) + g + o.slice(a + 1);
  }
  return o;
}
var U = (...o) => oe(C.getTheme(), ...o), oe = (o = {}, r, e, t) => {
  if (r) {
    let { variable: n, options: l } = C.defaults || {}, { prefix: d, transform: c } = o?.options || l || {}, a = X(r, ao) ? r : `{${r}}`;
    return t === "value" || xo(t) && c === "strict" ? C.getTokenValue(r) : or(a, void 0, d, [n.excludedKeyRegex], e);
  }
  return "";
};
function uo(o, ...r) {
  if (o instanceof Array) {
    let e = o.reduce((t, n, l) => {
      var d;
      return t + n + ((d = P(r[l], { dt: U })) != null ? d : "");
    }, "");
    return rr(e, U);
  }
  return P(o, { dt: U });
}
function re(o, r = {}) {
  let e = C.defaults.variable, { prefix: t = e.prefix, selector: n = e.selector, excludedKeyRegex: l = e.excludedKeyRegex } = r, d = [], c = [], a = [{ node: o, path: t }];
  for (; a.length; ) {
    let { node: s, path: g } = a.pop();
    for (let u in s) {
      let f = s[u], m = Jr(f), p = X(u, l) ? yo(g) : yo(g, Uo(u));
      if (Y(m)) a.push({ node: m, path: p });
      else {
        let b = Qo(p), h = or(m, p, t, [l]);
        Qr(c, b, h);
        let y = p;
        t && y.startsWith(t + "-") && (y = y.slice(t.length + 1)), d.push(y.replace(/-/g, "."));
      }
    }
  }
  let i = c.join("");
  return { value: c, tokens: d, declarations: i, css: Q(n, i) };
}
var x = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(o) {
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
  return re(o, { prefix: r?.prefix });
}, getCommon({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var l, d, c, a, i, s, g;
  let { preset: u, options: f } = r, m, p, b, h, y, D, L;
  if (v(u) && f.transform !== "strict") {
    let { primitive: V, semantic: W, extend: z } = u, O = W || {}, { colorScheme: T } = O, E = R(O, ["colorScheme"]), N = z || {}, { colorScheme: I } = N, A = R(N, ["colorScheme"]), j = T || {}, { dark: M } = j, G = R(j, ["dark"]), F = I || {}, { dark: q } = F, J = R(F, ["dark"]), S = v(V) ? this._toVariables({ primitive: V }, f) : {}, B = v(E) ? this._toVariables({ semantic: E }, f) : {}, H = v(G) ? this._toVariables({ light: G }, f) : {}, so = v(M) ? this._toVariables({ dark: M }, f) : {}, K = v(A) ? this._toVariables({ semantic: A }, f) : {}, $o = v(J) ? this._toVariables({ light: J }, f) : {}, Bo = v(q) ? this._toVariables({ dark: q }, f) : {}, [dr, cr] = [(l = S.declarations) != null ? l : "", S.tokens], [lr, sr] = [(d = B.declarations) != null ? d : "", B.tokens || []], [ur, fr] = [(c = H.declarations) != null ? c : "", H.tokens || []], [gr, mr] = [(a = so.declarations) != null ? a : "", so.tokens || []], [pr, br] = [(i = K.declarations) != null ? i : "", K.tokens || []], [hr, vr] = [(s = $o.declarations) != null ? s : "", $o.tokens || []], [kr, yr] = [(g = Bo.declarations) != null ? g : "", Bo.tokens || []];
    m = this.transformCSS(o, dr, "light", "variable", f, t, n), p = cr;
    let wr = this.transformCSS(o, `${lr}${ur}`, "light", "variable", f, t, n), Cr = this.transformCSS(o, `${gr}`, "dark", "variable", f, t, n);
    b = `${wr}${Cr}`, h = [.../* @__PURE__ */ new Set([...sr, ...fr, ...mr])];
    let xr = this.transformCSS(o, `${pr}${hr}color-scheme:light`, "light", "variable", f, t, n), $r = this.transformCSS(o, `${kr}color-scheme:dark`, "dark", "variable", f, t, n);
    y = `${xr}${$r}`, D = [.../* @__PURE__ */ new Set([...br, ...vr, ...yr])], L = P(u.css, { dt: U });
  }
  return { primitive: { css: m, tokens: p }, semantic: { css: b, tokens: h }, global: { css: y, tokens: D }, style: L };
}, getPreset({ name: o = "", preset: r = {}, options: e, params: t, set: n, defaults: l, selector: d }) {
  var c, a, i;
  let s, g, u;
  if (v(r) && e.transform !== "strict") {
    let f = o.replace("-directive", ""), m = r, { colorScheme: p, extend: b, css: h } = m, y = R(m, ["colorScheme", "extend", "css"]), D = b || {}, { colorScheme: L } = D, V = R(D, ["colorScheme"]), W = p || {}, { dark: z } = W, O = R(W, ["dark"]), T = L || {}, { dark: E } = T, N = R(T, ["dark"]), I = v(y) ? this._toVariables({ [f]: $($({}, y), V) }, e) : {}, A = v(O) ? this._toVariables({ [f]: $($({}, O), N) }, e) : {}, j = v(z) ? this._toVariables({ [f]: $($({}, z), E) }, e) : {}, [M, G] = [(c = I.declarations) != null ? c : "", I.tokens || []], [F, q] = [(a = A.declarations) != null ? a : "", A.tokens || []], [J, S] = [(i = j.declarations) != null ? i : "", j.tokens || []], B = this.transformCSS(f, `${M}${F}`, "light", "variable", e, n, l, d), H = this.transformCSS(f, J, "dark", "variable", e, n, l, d);
    s = `${B}${H}`, g = [.../* @__PURE__ */ new Set([...G, ...q, ...S])], u = P(h, { dt: U });
  }
  return { css: s, tokens: g, style: u };
}, getPresetC({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var l;
  let { preset: d, options: c } = r, a = (l = d?.components) == null ? void 0 : l[o];
  return this.getPreset({ name: o, preset: a, options: c, params: e, set: t, defaults: n });
}, getPresetD({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var l, d;
  let c = o.replace("-directive", ""), { preset: a, options: i } = r, s = ((l = a?.components) == null ? void 0 : l[c]) || ((d = a?.directives) == null ? void 0 : d[c]);
  return this.getPreset({ name: c, preset: s, options: i, params: e, set: t, defaults: n });
}, applyDarkColorScheme(o) {
  return !(o.darkModeSelector === "none" || o.darkModeSelector === !1);
}, getColorSchemeOption(o, r) {
  var e;
  return this.applyDarkColorScheme(o) ? this.regex.resolve(o.darkModeSelector === !0 ? r.options.darkModeSelector : (e = o.darkModeSelector) != null ? e : r.options.darkModeSelector) : [];
}, getLayerOrder(o, r = {}, e, t) {
  let { cssLayer: n } = r;
  return n ? `@layer ${P(n.order || n.name || "primeui", e)}` : "";
}, getCommonStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: n, defaults: l }) {
  let d = this.getCommon({ name: o, theme: r, params: e, set: n, defaults: l }), c = Object.entries(t).reduce((a, [i, s]) => a.push(`${i}="${s}"`) && a, []).join(" ");
  return Object.entries(d || {}).reduce((a, [i, s]) => {
    if (Y(s) && Object.hasOwn(s, "css")) {
      let g = no(s.css), u = `${i}-variables`;
      a.push(`<style type="text/css" data-primevue-style-id="${u}" ${c}>${g}</style>`);
    }
    return a;
  }, []).join("");
}, getStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: n, defaults: l }) {
  var d;
  let c = { name: o, theme: r, params: e, set: n, defaults: l }, a = (d = o.includes("-directive") ? this.getPresetD(c) : this.getPresetC(c)) == null ? void 0 : d.css, i = Object.entries(t).reduce((s, [g, u]) => s.push(`${g}="${u}"`) && s, []).join(" ");
  return a ? `<style type="text/css" data-primevue-style-id="${o}-variables" ${i}>${no(a)}</style>` : "";
}, createTokens(o = {}, r, e = "", t = "", n = {}) {
  let l = function(c, a = {}, i = []) {
    if (i.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: c, path: this.path, paths: a, value: void 0 };
    i.push(this.path), a.name = this.path, a.binding || (a.binding = {});
    let s = this.value;
    if (typeof this.value == "string" && ao.test(this.value)) {
      let g = this.value.trim().replace(ao, (u) => {
        var f;
        let m = u.slice(1, -1), p = this.tokens[m];
        if (!p) return console.warn(`Token not found for path: ${m}`), "__UNRESOLVED__";
        let b = p.computed(c, a, i);
        return Array.isArray(b) && b.length === 2 ? `light-dark(${b[0].value},${b[1].value})` : (f = b?.value) != null ? f : "__UNRESOLVED__";
      });
      s = Ko.test(g.replace(Zo, "0")) ? `calc(${g})` : g;
    }
    return xo(a.binding) && delete a.binding, i.pop(), { colorScheme: c, path: this.path, paths: a, value: s.includes("__UNRESOLVED__") ? void 0 : s };
  }, d = (c, a, i) => {
    Object.entries(c).forEach(([s, g]) => {
      let u = X(s, r.variable.excludedKeyRegex) ? a : a ? `${a}.${Oo(s)}` : Oo(s), f = i ? `${i}.${s}` : s;
      Y(g) ? d(g, u, f) : (n[u] || (n[u] = { paths: [], computed: (m, p = {}, b = []) => {
        if (n[u].paths.length === 1) return n[u].paths[0].computed(n[u].paths[0].scheme, p.binding, b);
        if (m && m !== "none") for (let h = 0; h < n[u].paths.length; h++) {
          let y = n[u].paths[h];
          if (y.scheme === m) return y.computed(m, p.binding, b);
        }
        return n[u].paths.map((h) => h.computed(h.scheme, p[h.scheme], b));
      } }), n[u].paths.push({ path: f, value: g, scheme: f.includes("colorScheme.light") ? "light" : f.includes("colorScheme.dark") ? "dark" : "none", computed: l, tokens: n }));
    });
  };
  return d(o, e, t), n;
}, getTokenValue(o, r, e) {
  var t;
  let n = ((c) => c.split(".").filter((a) => !X(a.toLowerCase(), e.variable.excludedKeyRegex)).join("."))(r), l = r.includes("colorScheme.light") ? "light" : r.includes("colorScheme.dark") ? "dark" : void 0, d = [(t = o[n]) == null ? void 0 : t.computed(l)].flat().filter((c) => c);
  return d.length === 1 ? d[0].value : d.reduce((c = {}, a) => {
    let i = a, { colorScheme: s } = i, g = R(i, ["colorScheme"]);
    return c[s] = g, c;
  }, void 0);
}, getSelectorRule(o, r, e, t) {
  return e === "class" || e === "attr" ? Q(v(r) ? `${o}${r},${o} ${r}` : o, t) : Q(o, Q(r ?? ":root,:host", t));
}, transformCSS(o, r, e, t, n = {}, l, d, c) {
  if (v(r)) {
    let { cssLayer: a } = n;
    if (t !== "style") {
      let i = this.getColorSchemeOption(n, d);
      r = e === "dark" ? i.reduce((s, { type: g, selector: u }) => (v(u) && (s += u.includes("[CSS]") ? u.replace("[CSS]", r) : this.getSelectorRule(u, c, g, r)), s), "") : Q(c ?? ":root,:host", r);
    }
    if (a) {
      let i = { name: "primeui" };
      Y(a) && (i.name = P(a.name, { name: o, type: t })), v(i.name) && (r = Q(`@layer ${i.name}`, r), l?.layerNames(i.name));
    }
    return r;
  }
  return "";
} }, C = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(o = {}) {
  let { theme: r } = o;
  r && (this._theme = ho($({}, r), { options: $($({}, this.defaults.options), r.options) }), this._tokens = x.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
  this.update({ theme: o }), _.emit("theme:change", o);
}, getPreset() {
  return this.preset;
}, setPreset(o) {
  this._theme = ho($({}, this.theme), { preset: o }), this._tokens = x.createTokens(o, this.defaults), this.clearLoadedStyleNames(), _.emit("preset:change", o), _.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(o) {
  this._theme = ho($({}, this.theme), { options: o }), this.clearLoadedStyleNames(), _.emit("options:change", o), _.emit("theme:change", this.theme);
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
  return x.getTokenValue(this.tokens, o, this.defaults);
}, getCommon(o = "", r) {
  return x.getCommon({ name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(o = "", r) {
  let e = { name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return x.getPresetC(e);
}, getDirective(o = "", r) {
  let e = { name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return x.getPresetD(e);
}, getCustomPreset(o = "", r, e, t) {
  let n = { name: o, preset: r, options: this.options, selector: e, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return x.getPreset(n);
}, getLayerOrderCSS(o = "") {
  return x.getLayerOrder(o, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(o = "", r, e = "style", t) {
  return x.transformCSS(o, r, t, e, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(o = "", r, e = {}) {
  return x.getCommonStyleSheet({ name: o, theme: this.theme, params: r, props: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(o, r, e = {}) {
  return x.getStyleSheet({ name: o, theme: this.theme, params: r, props: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(o) {
  this._loadingStyles.add(o);
}, onStyleUpdated(o) {
  this._loadingStyles.add(o);
}, onStyleLoaded(o, { name: r }) {
  this._loadingStyles.size && (this._loadingStyles.delete(r), _.emit(`theme:${r}:load`, o), !this._loadingStyles.size && _.emit("theme:load"));
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
}, ee = `
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
function io(o) {
  "@babel/helpers - typeof";
  return io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, io(o);
}
function To(o, r) {
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
    r % 2 ? To(Object(e), !0).forEach(function(t) {
      te(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : To(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function te(o, r, e) {
  return (r = ne(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function ne(o) {
  var r = ae(o, "string");
  return io(r) == "symbol" ? r : r + "";
}
function ae(o, r) {
  if (io(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (io(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function ie(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  So() && So().components ? Yo(o) : r ? o() : Sr(o);
}
var de = 0;
function ce(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = to(!1), t = to(o), n = to(null), l = Yr() ? window.document : void 0, d = r.document, c = d === void 0 ? l : d, a = r.immediate, i = a === void 0 ? !0 : a, s = r.manual, g = s === void 0 ? !1 : s, u = r.name, f = u === void 0 ? "style_".concat(++de) : u, m = r.id, p = m === void 0 ? void 0 : m, b = r.media, h = b === void 0 ? void 0 : b, y = r.nonce, D = y === void 0 ? void 0 : y, L = r.first, V = L === void 0 ? !1 : L, W = r.onMounted, z = W === void 0 ? void 0 : W, O = r.onUpdated, T = O === void 0 ? void 0 : O, E = r.onLoad, N = E === void 0 ? void 0 : E, I = r.props, A = I === void 0 ? {} : I, j = function() {
  }, M = function(q) {
    var J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (c) {
      var S = No(No({}, A), J), B = S.name || f, H = S.id || p, so = S.nonce || D;
      n.value = c.querySelector('style[data-primevue-style-id="'.concat(B, '"]')) || c.getElementById(H) || c.createElement("style"), n.value.isConnected || (t.value = q || o, ko(n.value, {
        type: "text/css",
        id: H,
        media: h,
        nonce: so
      }), V ? c.head.prepend(n.value) : c.head.appendChild(n.value), Xr(n.value, "data-primevue-style-id", B), ko(n.value, S), n.value.onload = function(K) {
        return N?.(K, {
          name: B
        });
      }, z?.(B)), !e.value && (j = eo(t, function(K) {
        n.value.textContent = K, T?.(B);
      }, {
        immediate: !0
      }), e.value = !0);
    }
  }, G = function() {
    !c || !e.value || (j(), Hr(n.value) && c.head.removeChild(n.value), e.value = !1, n.value = null);
  };
  return i && !g && ie(M), {
    id: p,
    name: f,
    el: n,
    css: t,
    unload: G,
    load: M,
    isLoaded: Br(e)
  };
}
function co(o) {
  "@babel/helpers - typeof";
  return co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, co(o);
}
var jo, Po, Do, Lo;
function Wo(o, r) {
  return fe(o) || ue(o, r) || se(o, r) || le();
}
function le() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function se(o, r) {
  if (o) {
    if (typeof o == "string") return Eo(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Eo(o, r) : void 0;
  }
}
function Eo(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++) t[e] = o[e];
  return t;
}
function ue(o, r) {
  var e = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (e != null) {
    var t, n, l, d, c = [], a = !0, i = !1;
    try {
      if (l = (e = e.call(o)).next, r !== 0) for (; !(a = (t = l.call(e)).done) && (c.push(t.value), c.length !== r); a = !0) ;
    } catch (s) {
      i = !0, n = s;
    } finally {
      try {
        if (!a && e.return != null && (d = e.return(), Object(d) !== d)) return;
      } finally {
        if (i) throw n;
      }
    }
    return c;
  }
}
function fe(o) {
  if (Array.isArray(o)) return o;
}
function Io(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function vo(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Io(Object(e), !0).forEach(function(t) {
      ge(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Io(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function ge(o, r, e) {
  return (r = me(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function me(o) {
  var r = pe(o, "string");
  return co(r) == "symbol" ? r : r + "";
}
function pe(o, r) {
  if (co(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (co(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function fo(o, r) {
  return r || (r = o.slice(0)), Object.freeze(Object.defineProperties(o, { raw: { value: Object.freeze(r) } }));
}
var be = function(r) {
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
}, he = {}, ve = {}, Z = {
  name: "base",
  css: be,
  style: ee,
  classes: he,
  inlineStyles: ve,
  load: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(l) {
      return l;
    }, n = t(uo(jo || (jo = fo(["", ""])), r));
    return v(n) ? ce(no(n), vo({
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
      return C.transformCSS(e.name || r.name, "".concat(n).concat(uo(Po || (Po = fo(["", ""])), t)));
    });
  },
  getCommonTheme: function(r) {
    return C.getCommon(this.name, r);
  },
  getComponentTheme: function(r) {
    return C.getComponent(this.name, r);
  },
  getDirectiveTheme: function(r) {
    return C.getDirective(this.name, r);
  },
  getPresetTheme: function(r, e, t) {
    return C.getCustomPreset(this.name, r, e, t);
  },
  getLayerOrderThemeCSS: function() {
    return C.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var t = P(this.css, {
        dt: U
      }) || "", n = no(uo(Do || (Do = fo(["", "", ""])), t, r)), l = Object.entries(e).reduce(function(d, c) {
        var a = Wo(c, 2), i = a[0], s = a[1];
        return d.push("".concat(i, '="').concat(s, '"')) && d;
      }, []).join(" ");
      return v(n) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(l, ">").concat(n, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return C.getCommonStyleSheet(this.name, r, e);
  },
  getThemeStyleSheet: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [C.getStyleSheet(this.name, r, e)];
    if (this.style) {
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), l = uo(Lo || (Lo = fo(["", ""])), P(this.style, {
        dt: U
      })), d = no(C.transformCSS(n, l)), c = Object.entries(e).reduce(function(a, i) {
        var s = Wo(i, 2), g = s[0], u = s[1];
        return a.push("".concat(g, '="').concat(u, '"')) && a;
      }, []).join(" ");
      v(d) && t.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(c, ">").concat(d, "</style>"));
    }
    return t.join("");
  },
  extend: function(r) {
    return vo(vo({}, this), {}, {
      css: void 0,
      style: void 0
    }, r);
  }
}, go = Vo();
function lo(o) {
  "@babel/helpers - typeof";
  return lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, lo(o);
}
function Ao(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function mo(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ao(Object(e), !0).forEach(function(t) {
      ke(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Ao(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function ke(o, r, e) {
  return (r = ye(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function ye(o) {
  var r = we(o, "string");
  return lo(r) == "symbol" ? r : r + "";
}
function we(o, r) {
  if (lo(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (lo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var Ce = {
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
}, xe = /* @__PURE__ */ Symbol();
function $e(o, r) {
  var e = {
    config: Rr(r)
  };
  return o.config.globalProperties.$primevue = e, o.provide(xe, e), Be(), Se(o, e), e;
}
var oo = [];
function Be() {
  _.clear(), oo.forEach(function(o) {
    return o?.();
  }), oo = [];
}
function Se(o, r) {
  var e = to(!1), t = function() {
    var i;
    if (((i = r.config) === null || i === void 0 ? void 0 : i.theme) !== "none" && !C.isStyleNameLoaded("common")) {
      var s, g, u = ((s = Z.getCommonTheme) === null || s === void 0 ? void 0 : s.call(Z)) || {}, f = u.primitive, m = u.semantic, p = u.global, b = u.style, h = {
        nonce: (g = r.config) === null || g === void 0 || (g = g.csp) === null || g === void 0 ? void 0 : g.nonce
      };
      Z.load(f?.css, mo({
        name: "primitive-variables"
      }, h)), Z.load(m?.css, mo({
        name: "semantic-variables"
      }, h)), Z.load(p?.css, mo({
        name: "global-variables"
      }, h)), Z.loadStyle(mo({
        name: "global-style"
      }, h), b), C.setLoadedStyleName("common");
    }
  };
  _.on("theme:change", function(a) {
    e.value || (o.config.globalProperties.$primevue.config.theme = a, e.value = !0);
  });
  var n = eo(r.config, function(a, i) {
    go.emit("config:change", {
      newValue: a,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  }), l = eo(function() {
    return r.config.ripple;
  }, function(a, i) {
    go.emit("config:ripple:change", {
      newValue: a,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  }), d = eo(function() {
    return r.config.theme;
  }, function(a, i) {
    e.value || C.setTheme(a), r.config.unstyled || t(), e.value = !1, go.emit("config:theme:change", {
      newValue: a,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !1
  }), c = eo(function() {
    return r.config.unstyled;
  }, function(a, i) {
    !a && r.config.theme && t(), go.emit("config:unstyled:change", {
      newValue: a,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  });
  oo.push(n), oo.push(l), oo.push(d), oo.push(c);
}
var Re = {
  install: function(r, e) {
    var t = Mr(Ce, e);
    $e(r, t);
  }
}, _e = { transitionDuration: "{transition.duration}" }, ze = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, Oe = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, Te = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, Ne = { root: _e, panel: ze, header: Oe, content: Te }, je = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Pe = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, De = { padding: "{list.padding}", gap: "{list.gap}" }, Le = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, We = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Ee = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ie = { borderRadius: "{border.radius.sm}" }, Ae = { padding: "{list.option.padding}" }, Me = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, Fe = { root: je, overlay: Pe, list: De, option: Le, optionGroup: We, dropdown: Ee, chip: Ie, emptyMessage: Ae, colorScheme: Me }, He = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Ye = { size: "1rem" }, Xe = { borderColor: "{content.background}", offset: "-0.75rem" }, Ue = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, Ve = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, Ge = { root: He, icon: Ye, group: Xe, lg: Ue, xl: Ve }, qe = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, Je = { size: "0.5rem" }, Ke = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, Ze = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, Qe = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, ot = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, rt = { root: qe, dot: Je, sm: Ke, lg: Ze, xl: Qe, colorScheme: ot }, et = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, tt = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, nt = { primitive: et, semantic: tt }, at = { borderRadius: "{content.border.radius}" }, it = { root: at }, dt = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, ct = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, lt = { color: "{navigation.item.icon.color}" }, st = { root: dt, item: ct, separator: lt }, ut = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, ft = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, gt = { root: ut, colorScheme: ft }, mt = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, pt = { padding: "1.25rem", gap: "0.5rem" }, bt = { gap: "0.5rem" }, ht = { fontSize: "1.25rem", fontWeight: "500" }, vt = { color: "{text.muted.color}" }, kt = { root: mt, body: pt, caption: bt, title: ht, subtitle: vt }, yt = { transitionDuration: "{transition.duration}" }, wt = { gap: "0.25rem" }, Ct = { padding: "1rem", gap: "0.5rem" }, xt = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, $t = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, Bt = { root: yt, content: wt, indicatorList: Ct, indicator: xt, colorScheme: $t }, St = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Rt = { width: "2.5rem", color: "{form.field.icon.color}" }, _t = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, zt = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, Ot = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, Tt = { color: "{form.field.icon.color}" }, Nt = { root: St, dropdown: Rt, overlay: _t, list: zt, option: Ot, clearIcon: Tt }, jt = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, Pt = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, Dt = { root: jt, icon: Pt }, Lt = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, Wt = { width: "2rem", height: "2rem" }, Et = { size: "1rem" }, It = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, At = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, Mt = { root: Lt, image: Wt, icon: Et, removeIcon: It, colorScheme: At }, Ft = { transitionDuration: "{transition.duration}" }, Ht = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Yt = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, Xt = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, Ut = { root: Ft, preview: Ht, panel: Yt, colorScheme: Xt }, Vt = { size: "2rem", color: "{overlay.modal.color}" }, Gt = { gap: "1rem" }, qt = { icon: Vt, content: Gt }, Jt = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Kt = { padding: "{overlay.popover.padding}", gap: "1rem" }, Zt = { size: "1.5rem", color: "{overlay.popover.color}" }, Qt = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, on = { root: Jt, content: Kt, icon: Zt, footer: Qt }, rn = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, en = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, tn = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, nn = { mobileIndent: "1rem" }, an = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, dn = { borderColor: "{content.border.color}" }, cn = { root: rn, list: en, item: tn, submenu: nn, submenuIcon: an, separator: dn }, ln = `
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
`, sn = { transitionDuration: "{transition.duration}" }, un = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, fn = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, gn = { fontWeight: "600" }, mn = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, pn = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, bn = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, hn = { fontWeight: "600" }, vn = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, kn = { color: "{primary.color}" }, yn = { width: "0.5rem" }, wn = { width: "1px", color: "{primary.color}" }, Cn = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, xn = { size: "2rem" }, $n = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Bn = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, Sn = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Rn = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, _n = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, zn = `
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, On = { root: sn, header: un, headerCell: fn, columnTitle: gn, row: mn, bodyCell: pn, footerCell: bn, columnFooter: hn, footer: vn, dropPoint: kn, columnResizer: yn, resizeIndicator: wn, sortIcon: Cn, loadingIcon: xn, rowToggleButton: $n, filter: Bn, paginatorTop: Sn, paginatorBottom: Rn, colorScheme: _n, css: zn }, Tn = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, Nn = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, jn = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, Pn = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, Dn = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Ln = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, Wn = { root: Tn, header: Nn, content: jn, footer: Pn, paginatorTop: Dn, paginatorBottom: Ln }, En = { transitionDuration: "{transition.duration}" }, In = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, An = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, Mn = { gap: "0.5rem", fontWeight: "500" }, Fn = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Hn = { color: "{form.field.icon.color}" }, Yn = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, Xn = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, Un = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, Vn = { margin: "0.5rem 0 0 0" }, Gn = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, qn = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Jn = { margin: "0.5rem 0 0 0" }, Kn = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, Zn = { margin: "0.5rem 0 0 0" }, Qn = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, oa = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, ra = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, ea = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, ta = { root: En, panel: In, header: An, title: Mn, dropdown: Fn, inputIcon: Hn, selectMonth: Yn, selectYear: Xn, group: Un, dayView: Vn, weekDay: Gn, date: qn, monthView: Jn, month: Kn, yearView: Zn, year: Qn, buttonbar: oa, timePicker: ra, colorScheme: ea }, na = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, aa = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, ia = { fontSize: "1.25rem", fontWeight: "600" }, da = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, ca = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, la = { root: na, header: aa, title: ia, content: da, footer: ca }, sa = { borderColor: "{content.border.color}" }, ua = { background: "{content.background}", color: "{text.color}" }, fa = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, ga = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, ma = { root: sa, content: ua, horizontal: fa, vertical: ga }, pa = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, ba = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ha = { root: pa, item: ba }, va = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, ka = { padding: "{overlay.modal.padding}" }, ya = { fontSize: "1.5rem", fontWeight: "600" }, wa = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Ca = { padding: "{overlay.modal.padding}" }, xa = { root: va, header: ka, title: ya, content: wa, footer: Ca }, $a = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, Ba = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Sa = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, Ra = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, _a = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, za = { toolbar: $a, toolbarItem: Ba, overlay: Sa, overlayOption: Ra, content: _a }, Oa = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, Ta = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Na = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, ja = { padding: "0" }, Pa = { root: Oa, legend: Ta, toggleIcon: Na, content: ja }, Da = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, La = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, Wa = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, Ea = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, Ia = { gap: "0.5rem" }, Aa = { height: "0.25rem" }, Ma = { gap: "0.5rem" }, Fa = { root: Da, header: La, content: Wa, file: Ea, fileList: Ia, progressbar: Aa, basic: Ma }, Ha = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, Ya = { active: { top: "-1.25rem" } }, Xa = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, Ua = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, Va = { root: Ha, over: Ya, in: Xa, on: Ua }, Ga = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, qa = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ja = { size: "1.5rem" }, Ka = { background: "{content.background}", padding: "1rem 0.25rem" }, Za = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Qa = { size: "1rem" }, oi = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, ri = { gap: "0.5rem", padding: "1rem" }, ei = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ti = { background: "rgba(0, 0, 0, 0.5)" }, ni = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, ai = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ii = { size: "1.5rem" }, di = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, ci = { root: Ga, navButton: qa, navIcon: Ja, thumbnailsContent: Ka, thumbnailNavButton: Za, thumbnailNavButtonIcon: Qa, caption: oi, indicatorList: ri, indicatorButton: ei, insetIndicatorList: ti, insetIndicatorButton: ni, closeButton: ai, closeButtonIcon: ii, colorScheme: di }, li = { color: "{form.field.icon.color}" }, si = { icon: li }, ui = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, fi = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, gi = { root: ui, input: fi }, mi = { transitionDuration: "{transition.duration}" }, pi = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, bi = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, hi = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, vi = { root: mi, preview: pi, toolbar: bi, action: hi }, ki = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, yi = { handle: ki }, wi = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, Ci = { fontWeight: "500" }, xi = { size: "1rem" }, $i = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, Bi = { root: wi, text: Ci, icon: xi, colorScheme: $i }, Si = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, Ri = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, _i = { root: Si, display: Ri }, zi = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Oi = { borderRadius: "{border.radius.sm}" }, Ti = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, Ni = { root: zi, chip: Oi, colorScheme: Ti }, ji = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, Pi = { addon: ji }, Di = { transitionDuration: "{transition.duration}" }, Li = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, Wi = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, Ei = { root: Di, button: Li, colorScheme: Wi }, Ii = { gap: "0.5rem" }, Ai = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, Mi = { root: Ii, input: Ai }, Fi = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Hi = { root: Fi }, Yi = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xi = { background: "{primary.color}" }, Ui = { background: "{content.border.color}" }, Vi = { color: "{text.muted.color}" }, Gi = { root: Yi, value: Xi, range: Ui, text: Vi }, qi = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, Ji = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Ki = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Zi = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Qi = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, od = { padding: "{list.option.padding}" }, rd = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, ed = { root: qi, list: Ji, option: Ki, optionGroup: Zi, checkmark: Qi, emptyMessage: od, colorScheme: rd }, td = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, nd = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, ad = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, id = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, dd = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, cd = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, ld = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, sd = { borderColor: "{content.border.color}" }, ud = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, fd = { root: td, baseItem: nd, item: ad, overlay: id, submenu: dd, submenuLabel: cd, submenuIcon: ld, separator: sd, mobileButton: ud }, gd = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, md = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, pd = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, bd = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, hd = { borderColor: "{content.border.color}" }, vd = { root: gd, list: md, item: pd, submenuLabel: bd, separator: hd }, kd = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, yd = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, wd = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Cd = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, xd = { borderColor: "{content.border.color}" }, $d = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Bd = { root: kd, baseItem: yd, item: wd, submenu: Cd, separator: xd, mobileButton: $d }, Sd = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Rd = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, _d = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, zd = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, Od = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Td = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, Nd = { root: { borderWidth: "1px" } }, jd = { content: { padding: "0" } }, Pd = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, Dd = { root: Sd, content: Rd, text: _d, icon: zd, closeButton: Od, closeIcon: Td, outlined: Nd, simple: jd, colorScheme: Pd }, Ld = { borderRadius: "{content.border.radius}", gap: "1rem" }, Wd = { background: "{content.border.color}", size: "0.5rem" }, Ed = { gap: "0.5rem" }, Id = { size: "0.5rem" }, Ad = { size: "1rem" }, Md = { verticalGap: "0.5rem", horizontalGap: "1rem" }, Fd = { root: Ld, meters: Wd, label: Ed, labelMarker: Id, labelIcon: Ad, labelList: Md }, Hd = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Yd = { width: "2.5rem", color: "{form.field.icon.color}" }, Xd = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Ud = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Vd = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, Gd = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, qd = { color: "{form.field.icon.color}" }, Jd = { borderRadius: "{border.radius.sm}" }, Kd = { padding: "{list.option.padding}" }, Zd = { root: Hd, dropdown: Yd, overlay: Xd, list: Ud, option: Vd, optionGroup: Gd, chip: Jd, clearIcon: qd, emptyMessage: Kd }, Qd = { gap: "1.125rem" }, oc = { gap: "0.5rem" }, rc = { root: Qd, controls: oc }, ec = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, tc = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, nc = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ac = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, ic = { root: ec, node: tc, nodeToggleButton: nc, connector: ac }, dc = { outline: { width: "2px", color: "{content.background}" } }, cc = { root: dc }, lc = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, sc = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, uc = { color: "{text.muted.color}" }, fc = { maxWidth: "2.5rem" }, gc = { root: lc, navButton: sc, currentPageReport: uc, jumpToPageInput: fc }, mc = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, pc = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, bc = { padding: "0.375rem 1.125rem" }, hc = { fontWeight: "600" }, vc = { padding: "0 1.125rem 1.125rem 1.125rem" }, kc = { padding: "0 1.125rem 1.125rem 1.125rem" }, yc = { root: mc, header: pc, toggleableHeader: bc, title: hc, content: vc, footer: kc }, wc = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Cc = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, xc = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, $c = { indent: "1rem" }, Bc = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, Sc = { root: wc, panel: Cc, item: xc, submenu: $c, submenuIcon: Bc }, Rc = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, _c = { color: "{form.field.icon.color}" }, zc = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, Oc = { gap: "0.5rem" }, Tc = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, Nc = { meter: Rc, icon: _c, overlay: zc, content: Oc, colorScheme: Tc }, jc = { gap: "1.125rem" }, Pc = { gap: "0.5rem" }, Dc = { root: jc, controls: Pc }, Lc = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Wc = { padding: "{overlay.popover.padding}" }, Ec = { root: Lc, content: Wc }, Ic = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, Ac = { background: "{primary.color}" }, Mc = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, Fc = { root: Ic, value: Ac, label: Mc }, Hc = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, Yc = { colorScheme: Hc }, Xc = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, Uc = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, Vc = { root: Xc, icon: Uc }, Gc = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, qc = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, Jc = { root: Gc, icon: qc }, Kc = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, Zc = { colorScheme: Kc }, Qc = { transitionDuration: "{transition.duration}" }, ol = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, rl = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, el = { root: Qc, bar: ol, colorScheme: rl }, tl = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, nl = { width: "2.5rem", color: "{form.field.icon.color}" }, al = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, il = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, dl = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, cl = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, ll = { color: "{form.field.icon.color}" }, sl = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, ul = { padding: "{list.option.padding}" }, fl = { root: tl, dropdown: nl, overlay: al, list: il, option: dl, optionGroup: cl, clearIcon: ll, checkmark: sl, emptyMessage: ul }, gl = { borderRadius: "{form.field.border.radius}" }, ml = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, pl = { root: gl, colorScheme: ml }, bl = { borderRadius: "{content.border.radius}" }, hl = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, vl = { root: bl, colorScheme: hl }, kl = { transitionDuration: "{transition.duration}" }, yl = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, wl = { background: "{primary.color}" }, Cl = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, xl = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, $l = { root: kl, track: yl, range: wl, handle: Cl, colorScheme: xl }, Bl = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Sl = { root: Bl }, Rl = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, _l = { root: Rl }, zl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Ol = { background: "{content.border.color}" }, Tl = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Nl = { root: zl, gutter: Ol, handle: Tl }, jl = { transitionDuration: "{transition.duration}" }, Pl = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, Dl = { padding: "0.5rem", gap: "1rem" }, Ll = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Wl = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, El = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, Il = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, Al = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, Ml = { root: jl, separator: Pl, step: Dl, stepHeader: Ll, stepTitle: Wl, stepNumber: El, steppanels: Il, steppanel: Al }, Fl = { transitionDuration: "{transition.duration}" }, Hl = { background: "{content.border.color}" }, Yl = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Xl = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Ul = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, Vl = { root: Fl, separator: Hl, itemLink: Yl, itemLabel: Xl, itemNumber: Ul }, Gl = { transitionDuration: "{transition.duration}" }, ql = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Jl = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Kl = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Zl = { height: "1px", bottom: "-1px", background: "{primary.color}" }, Ql = { root: Gl, tablist: ql, item: Jl, itemIcon: Kl, activeBar: Zl }, os = { transitionDuration: "{transition.duration}" }, rs = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, es = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, ts = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, ns = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, as = { height: "1px", bottom: "-1px", background: "{primary.color}" }, is = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, ds = { root: os, tablist: rs, tab: es, tabpanel: ts, navButton: ns, activeBar: as, colorScheme: is }, cs = { transitionDuration: "{transition.duration}" }, ls = { background: "{content.background}", borderColor: "{content.border.color}" }, ss = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, us = { background: "{content.background}", color: "{content.color}" }, fs = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, gs = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, ms = { root: cs, tabList: ls, tab: ss, tabPanel: us, navButton: fs, colorScheme: gs }, ps = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, bs = { size: "0.75rem" }, hs = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, vs = { root: ps, icon: bs, colorScheme: hs }, ks = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, ys = { gap: "0.25rem" }, ws = { margin: "2px 0" }, Cs = { root: ks, prompt: ys, commandResponse: ws }, xs = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, $s = { root: xs }, Bs = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Ss = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Rs = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, _s = { mobileIndent: "1rem" }, zs = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Os = { borderColor: "{content.border.color}" }, Ts = { root: Bs, list: Ss, item: Rs, submenu: _s, submenuIcon: zs, separator: Os }, Ns = { minHeight: "5rem" }, js = { eventContent: { padding: "1rem 0" } }, Ps = { eventContent: { padding: "0 1rem" } }, Ds = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, Ls = { color: "{content.border.color}", size: "2px" }, Ws = { event: Ns, horizontal: js, vertical: Ps, eventMarker: Ds, eventConnector: Ls }, Es = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Is = { size: "1.125rem" }, As = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, Ms = { gap: "0.5rem" }, Fs = { fontWeight: "500", fontSize: "1rem" }, Hs = { fontWeight: "500", fontSize: "0.875rem" }, Ys = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Xs = { size: "1rem" }, Us = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, Vs = { root: Es, icon: Is, content: As, text: Ms, summary: Fs, detail: Hs, closeButton: Ys, closeIcon: Xs, colorScheme: Us }, Gs = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, qs = { disabledColor: "{form.field.disabled.color}" }, Js = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, Ks = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, Zs = { root: Gs, icon: qs, content: Js, colorScheme: Ks }, Qs = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, ou = { borderRadius: "50%", size: "1rem" }, ru = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, eu = { root: Qs, handle: ou, colorScheme: ru }, tu = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, nu = { root: tu }, au = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, iu = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, du = { root: au, colorScheme: iu }, cu = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, lu = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, su = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, uu = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, fu = { size: "2rem" }, gu = { margin: "0 0 0.5rem 0" }, mu = `
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, pu = { root: cu, node: lu, nodeIcon: su, nodeToggleButton: uu, loadingIcon: fu, filter: gu, css: mu }, bu = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, hu = { width: "2.5rem", color: "{form.field.icon.color}" }, vu = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, ku = { padding: "{list.padding}" }, yu = { padding: "{list.option.padding}" }, wu = { borderRadius: "{border.radius.sm}" }, Cu = { color: "{form.field.icon.color}" }, xu = { root: bu, dropdown: hu, overlay: vu, tree: ku, emptyMessage: yu, chip: wu, clearIcon: Cu }, $u = { transitionDuration: "{transition.duration}" }, Bu = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, Su = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Ru = { fontWeight: "600" }, _u = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, zu = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, Ou = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, Tu = { fontWeight: "600" }, Nu = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, ju = { width: "0.5rem" }, Pu = { width: "1px", color: "{primary.color}" }, Du = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Lu = { size: "2rem" }, Wu = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Eu = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Iu = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Au = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Mu = `
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Fu = { root: $u, header: Bu, headerCell: Su, columnTitle: Ru, row: _u, bodyCell: zu, footerCell: Ou, columnFooter: Tu, footer: Nu, columnResizer: ju, resizeIndicator: Pu, sortIcon: Du, loadingIcon: Lu, nodeToggleButton: Wu, paginatorTop: Eu, paginatorBottom: Iu, colorScheme: Au, css: Mu }, Hu = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, Yu = { loader: Hu }, Xu = Object.defineProperty, Uu = Object.defineProperties, Vu = Object.getOwnPropertyDescriptors, Mo = Object.getOwnPropertySymbols, Gu = Object.prototype.hasOwnProperty, qu = Object.prototype.propertyIsEnumerable, Fo = (o, r, e) => r in o ? Xu(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, Ho, Ju = (Ho = ((o, r) => {
  for (var e in r || (r = {})) Gu.call(r, e) && Fo(o, e, r[e]);
  if (Mo) for (var e of Mo(r)) qu.call(r, e) && Fo(o, e, r[e]);
  return o;
})({}, nt), Uu(Ho, Vu({ components: { accordion: Ne, autocomplete: Fe, avatar: Ge, badge: rt, blockui: it, breadcrumb: st, button: gt, card: kt, carousel: Bt, cascadeselect: Nt, checkbox: Dt, chip: Mt, colorpicker: Ut, confirmdialog: qt, confirmpopup: on, contextmenu: cn, datatable: On, dataview: Wn, datepicker: ta, dialog: la, divider: ma, dock: ha, drawer: xa, editor: za, fieldset: Pa, fileupload: Fa, floatlabel: Va, galleria: ci, iconfield: si, iftalabel: gi, image: vi, imagecompare: yi, inlinemessage: Bi, inplace: _i, inputchips: Ni, inputgroup: Pi, inputnumber: Ei, inputotp: Mi, inputtext: Hi, knob: Gi, listbox: ed, megamenu: fd, menu: vd, menubar: Bd, message: Dd, metergroup: Fd, multiselect: Zd, orderlist: rc, organizationchart: ic, overlaybadge: cc, paginator: gc, panel: yc, panelmenu: Sc, password: Nc, picklist: Dc, popover: Ec, progressbar: Fc, progressspinner: Yc, radiobutton: Vc, rating: Jc, ripple: Zc, scrollpanel: el, select: fl, selectbutton: pl, skeleton: vl, slider: $l, speeddial: Sl, splitbutton: _l, splitter: Nl, stepper: Ml, steps: Vl, tabmenu: Ql, tabs: ds, tabview: ms, tag: vs, terminal: Cs, textarea: $s, tieredmenu: Ts, timeline: Ws, toast: Vs, togglebutton: Zs, toggleswitch: eu, toolbar: nu, tooltip: du, tree: pu, treeselect: xu, treetable: Fu, virtualscroller: Yu }, css: ln })));
const wo = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const r = Math.random() * 16 | 0;
    return (o == "x" ? r : r & 3 | 8).toString(16);
  })
}), er = async () => ({
  f: {
    name: (o) => `${o.name}${o.id}`
  }
}), tr = async () => ({
  set: async (o) => {
    console.log("--theme");
    try {
      if (!o.el_id)
        throw new Error("[el_id] is required");
      const r = o.name, e = document.getElementById(o.el_id);
      if (!e)
        throw new Error("[el_id] is invalid");
      ((t) => {
        const n = (l) => {
          ((d) => {
            const c = d.getAttribute("data-ce");
            if (!c)
              return;
            const a = JSON.parse(c).filter((i) => i?.k.startsWith("t-"));
            if (a.length != 0)
              for (const i of a) {
                const s = i.k, g = i.v.split(" ");
                if (s == `t-${r}-class`)
                  for (const u of g)
                    d.classList.add(u);
                else
                  for (const u of g)
                    d.classList.remove(u);
              }
          })(l);
        };
        for (const l of t.getElementsByTagName("*"))
          n(l);
        n(t);
      })(e);
    } catch (r) {
      const e = `err: [theme] ${r}`;
      throw console.log(e), e;
    }
  }
});
function Co(o, r = 1e3) {
  let e = {
    cnt: 0
  };
  return new Promise((t) => {
    const n = () => {
      console.log(`[setInterval] is running.. [count=${e.cnt}]`);
      try {
        o() && (clearInterval(l), t());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${r}]`);
      }
      e.cnt += 1;
    }, l = setInterval(() => {
      n();
    }, r);
    n();
  });
}
let Ku = class {
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
const bo = () => new Ku();
class nr {
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
let k = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (o) => {
      const r = o?.lib || [];
      for (const [e, t] of r.entries()) {
        const n = t, l = `${n.name}:${o.run_from}`, d = `${o.run_from}_src`;
        let c = n[d];
        const a = `${o.run_from}_src`;
        let i = o?.lazy_lib?.[a] || null;
        if (i && (i = i.replace("{*}", `${n.name}`)), console.log(`_lazy_src: ${i}`), console.log(`_src: ${c}`), k.lib.l.hasOwnProperty(`${l}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(c) && c.includes("/") == !1 && k.lib.inbuilt_lib.indexOf(`${n.name}`) === -1)
            if (i)
              c = i;
            else
              throw `[lib-name=${n.name},lib-src=${c}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (c.startsWith("./") || c.startsWith("../")) {
            const s = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${c}`
            );
            k.lib.l[`${l}`] = {
              lib: s,
              src: c
            };
          }
          if (c.startsWith("http://") || c.startsWith("https://")) {
            const s = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${c}`
            );
            k.lib.l[`${l}`] = {
              lib: s,
              src: c
            };
          }
        }
      }
      console.log(await k.lib.get_all({}));
    },
    get: async (o) => {
      let r = null;
      const e = `${o.name}:${o.run_from}`;
      return k.lib.l.hasOwnProperty(`${e}`) == !1 && await k.lib.set({
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
      }), r = k.lib.l[`${e}`], r;
    },
    get_all: async (o) => k.lib.l
  },
  path: {
    set: (o) => {
      let r = "", e = "";
      const t = o.src.split("/");
      if (o.src.indexOf("://localhost") !== -1 || o.src.indexOf("://127.0.0.1") !== -1 || (e = "/dist"), t.indexOf(o.type) !== -1)
        for (const [n, l] of t.entries()) {
          let d = n == 0 ? "" : "/";
          if (r += `${d}${l}`, l == o.type)
            return `${r}${e}${o.name}`;
        }
      else
        for (const [n, l] of t.entries()) {
          let d = n == 0 ? "" : "/";
          if (r += `${d}${l}`, l == "src")
            return `${r}${e}${o.name}`;
        }
      return `${r}${e}${o.name}`;
    }
  }
};
const ar = bo(), ir = bo(), Zu = ar.on;
ar.emit;
const Qu = ir.emit, o0 = ir.on, r0 = async (o) => {
  const r = await er();
  return await k.lib.set({ lib: o.lib, run_from: "renderer", lazy_lib: o.lazy_lib }), {
    set: async (e) => {
      console.log("--renderer [set]"), e.return = e?.return || {}, e.return.r = e?.return?.r || "full";
      const t = new nr();
      t.start();
      let n = e.data?.value?.l || e.data.l, l = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return e.return.r == "full" ? l.r = "" : l.r = [], await (async () => {
        for (const d of n) {
          const c = await await k.lib.get({ name: d.type, run_from: "renderer", lazy_lib: o.lazy_lib }), a = await (await c.lib.index({
            f: {
              name: (i) => r.f.name({ id: d.id, name: i }),
              get_lib: async (i) => await await k.lib.get({ name: i.name, run_from: i.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (i) => await (await tr()).set(i),
              path: (i) => k.path.set({ src: c.src, type: d.type, name: i }),
              //set..
              uuid: () => wo().set(),
              wait_until: Co
            }
          })).set(
            {
              data: {
                curr: d
              }
            }
            /*_$cb*/
          );
          e?.return?.r == "full" ? l.r += a?.r || "" : l.r.push(a?.r || ""), l.style += a?.style || "", l.head += a?.head || "";
        }
      })(), t.stop(), l.benchmark = t.result(), l;
    }
  };
}, e0 = async (o) => {
  const r = await er();
  return await k.lib.set({ lib: o.lib, run_from: "hydrator", lazy_lib: o.lazy_lib }), {
    set: async (e) => {
      console.log("--hydrator [set]");
      const t = new nr();
      t.start();
      let n = {
        r: "",
        style: ""
      }, l = {
        style_id: `${wo().set()}_stl`
      }, d = e.data?.value?.l || e.data.l;
      const c = async () => {
        for (const a of d) {
          const i = await await k.lib.get({ name: a.type, run_from: "hydrator", lazy_lib: o.lazy_lib }), s = i.lib, g = bo(), u = g.on, f = await (await s.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (m) => r.f.name({ id: a.id, name: m }),
              get_lib: async (m) => await await k.lib.get({ name: m.name, run_from: m.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (m) => await (await tr()).set(m),
              path: (m) => k.path.set({ src: i.src, type: a.type, name: m }),
              //set..
              uuid: () => wo().set(),
              wait_until: Co,
              //set..
              call: Qu,
              listen: u,
              //set..
              new_emitter: () => bo()
            }
          })).set(
            {
              data: {
                curr: a
              }
            }
            /*_$cb*/
          );
          Zu("msg", async (m) => {
            try {
              if (Object.keys(m.where || {}).length == 0) {
                await g.emit("msg", m);
                return;
              }
            } catch {
            }
            try {
              if (a?.[m.where?.key || ""] == m.where?.value) {
                await g.emit("msg", m);
                return;
              }
            } catch {
            }
          }), n.style += f.style;
        }
      };
      await Co(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await c();
      try {
        ((a) => {
          const i = document.getElementById(`${l.style_id}`);
          i && i.remove();
          const s = document.createElement("style");
          s.id = `${l.style_id}`, s.innerHTML = `${n.style}`, a.appendChild(s);
        })(document.head);
      } catch (a) {
        console.log(`${a}, Failed to set style..`);
      }
      return t.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: t.result()
      };
    }
  };
}, t0 = { key: 0 }, n0 = ["innerHTML"], a0 = /* @__PURE__ */ _r({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(o) {
    const r = to(null);
    return Yo(() => {
      (async () => {
        let e = "", t = {
          l: [
            // {
            //     "id": "c78c-form_holder",
            //     "type": "form_holder",
            //     "slug": "form_holder",
            //     "data": {
            //         "title": "Create Product with GenAI",
            //         "ce_file": {
            //             "data": {
            //                 "l": [
            //                   // 🔎 Search Keyword Section
            //                   {
            //                     "id": "form_section-search",
            //                     "type": "form_section",
            //                     "slug": "form_section",
            //                     "data": {
            //                       "label": "Search Keyword",
            //                       "l": [],
            //                       "theme": "light"
            //                     }
            //                   },
            //                   {
            //                     "id": "search",
            //                     "type": "form_inputtext",
            //                     "slug": "form_inputtext",
            //                     "data": {
            //                       "form": { "section_id": "form_section-search" },
            //                       "placeholder": "Enter search keyword",
            //                       "variant": "outlined"
            //                     }
            //                   },
            //                   // 🔢 Limit Section
            //                   {
            //                     "id": "form_section-limit",
            //                     "type": "form_section",
            //                     "slug": "form_section",
            //                     "data": {
            //                       "label": "Result Limit",
            //                       "l": [],
            //                       "theme": "light"
            //                     }
            //                   },
            //                   {
            //                     "id": "limit",
            //                     "type": "form_inputtext",
            //                     "slug": "form_inputtext",
            //                     "data": {
            //                       "form": { "section_id": "form_section-limit" },
            //                       "placeholder": "Enter result limit",
            //                       "input_type": "number",
            //                       "variant": "outlined"
            //                     }
            //                   },
            //                   // 📤 Auto Upload Section
            //                   {
            //                     "id": "form_section-auto_upload",
            //                     "type": "form_section",
            //                     "slug": "form_section",
            //                     "data": {
            //                       "label": "Auto Upload",
            //                       "l": [],
            //                       "theme": "light"
            //                     }
            //                   },
            //                   {
            //                     "id": "auto_upload",
            //                     "type": "form_inputtext",
            //                     "slug": "form_inputtext",
            //                     "data": {
            //                       "form": { "section_id": "form_section-auto_upload" },
            //                       "placeholder": "Enter true or false",
            //                       "variant": "outlined"
            //                     }
            //                   },
            //                   // 🤖 GenAI Type Section
            //                   {
            //                     "id": "form_section-genai_type",
            //                     "type": "form_section",
            //                     "slug": "form_section",
            //                     "data": {
            //                       "label": "GenAI Type",
            //                       "l": [],
            //                       "theme": "light"
            //                     }
            //                   },
            //                   {
            //                     "id": "genai_type",
            //                     "type": "form_inputtext",
            //                     "slug": "form_inputtext",
            //                     "data": {
            //                       "form": { "section_id": "form_section-genai_type" },
            //                       "placeholder": "Enter GenAI type",
            //                       "variant": "outlined"
            //                     }
            //                   },
            //                   // 🔐 GenAI Secret Section
            //                   {
            //                     "id": "form_section-genai_secret",
            //                     "type": "form_section",
            //                     "slug": "form_section",
            //                     "data": {
            //                       "label": "GenAI Secret Key",
            //                       "l": [],
            //                       "theme": "light"
            //                     }
            //                   },
            //                   {
            //                     "id": "genai_secret",
            //                     "type": "form_inputtext",
            //                     "slug": "form_inputtext",
            //                     "data": {
            //                       "form": { "section_id": "form_section-genai_secret" },
            //                       "placeholder": "Enter secret key",
            //                       "variant": "outlined"
            //                     }
            //                   },
            //                   // button
            //                   {
            //                       "id": "form_section-button",
            //                       "type": "form_section",
            //                       "slug": "form_section",
            //                       "data": {
            //                           "label": "",
            //                           "l": [],
            //                           "theme": "light"
            //                       }
            //                   },
            //                   {
            //                       "id": "868c-form_button",
            //                       "type": "form_button",
            //                       "slug": "form_button",
            //                       "data": {
            //                           "label": "Submit",
            //                           "form": {
            //                               "section_id": "form_section-button"
            //                           }
            //                       }
            //                   }
            //                 ]
            //             }
            //         }
            //     }
            // }
            // NEW VERSION OF FORM_HOLDER API INBUILT FIELD.
            {
              id: "c78c-form_holder",
              type: "form_holder",
              slug: "form_holder",
              data: {
                title: "Create Products with GenAi",
                mode: "auto",
                event: {
                  l: [
                    {
                      name: "error_toast",
                      typ: "toast",
                      data: {
                        msg: "An error occurred!",
                        options: {
                          type: "error",
                          position: "top-right",
                          autoClose: 5e3,
                          theme: "light"
                        }
                      }
                    },
                    {
                      name: "success_toast",
                      typ: "toast",
                      data: {
                        msg: "Success",
                        options: {
                          type: "success",
                          position: "top-right",
                          autoClose: 5e3,
                          theme: "light"
                        }
                      }
                    },
                    {
                      name: "request_body",
                      typ: "body",
                      data: "<body>"
                    },
                    {
                      name: "submit",
                      typ: "api",
                      data: {
                        url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=create_product_with_genai",
                        method: "POST",
                        headers: {
                          Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk",
                          "Content-Type": "application/json"
                        }
                      },
                      event: {
                        l: [
                          {
                            on: "success",
                            call: [
                              "success_toast"
                              //"open_homepage"
                            ]
                          },
                          {
                            on: "error",
                            call: [
                              "error_toast"
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                ce_file: {
                  data: {
                    l: [
                      {
                        id: "form_section-search",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "Search Keyword",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "search",
                        type: "form_inputtext",
                        slug: "form_inputtext",
                        data: {
                          form: {
                            section_id: "form_section-search",
                            body_key: "search"
                          },
                          placeholder: "Enter search keyword",
                          variant: "outlined"
                        }
                      },
                      {
                        id: "form_section-limit",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "Result Limit",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "limit",
                        type: "form_inputtext",
                        slug: "form_inputtext",
                        data: {
                          form: {
                            section_id: "form_section-limit",
                            body_key: "limit",
                            parse_as: "int"
                          },
                          placeholder: "Enter result limit",
                          input_type: "number",
                          variant: "outlined"
                        }
                      },
                      {
                        id: "form_section-auto_upload",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "Auto Upload",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "auto_upload",
                        type: "form_inputtext",
                        slug: "form_inputtext",
                        data: {
                          form: {
                            section_id: "form_section-auto_upload",
                            body_key: "auto_upload",
                            parse_as: "bool"
                          },
                          placeholder: "Enter true or false",
                          variant: "outlined"
                        }
                      },
                      {
                        id: "form_section-genai_type",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "GenAI Type",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "genai_type",
                        type: "form_inputtext",
                        slug: "form_inputtext",
                        data: {
                          form: {
                            section_id: "form_section-genai_type",
                            body_key: "genai_type"
                          },
                          placeholder: "Enter GenAI type",
                          variant: "outlined"
                        }
                      },
                      {
                        id: "form_section-genai_secret",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "GenAI Secret Key",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "genai_secret",
                        type: "form_inputtext",
                        slug: "form_inputtext",
                        data: {
                          form: {
                            section_id: "form_section-genai_secret",
                            body_key: "genai_secret"
                          },
                          placeholder: "Enter secret key",
                          variant: "outlined"
                        }
                      },
                      {
                        id: "form_section-button",
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
                            section_id: "form_section-button",
                            event: {
                              l: [
                                {
                                  on: "click",
                                  call: [
                                    "request_body",
                                    "submit"
                                  ]
                                }
                              ]
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          ]
        };
        const n = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
          }
        }, l = await r0(n), d = await e0(n);
        (async () => o0("msg", async (a) => {
          console.log("[ce_listen]", a);
        }))(), await (async () => {
          const a = await l.set({
            data: t
          });
          r.value = a.r || "", e = a.style;
          const i = document.createElement("style");
          document.head.appendChild(i), i.innerHTML = e, setTimeout(async () => {
            const s = await d.set({
              data: t
            });
            console.log(s);
          }, 200);
        })();
      })();
    }), (e, t) => r.value ? (zr(), Or("div", t0, [
      Tr("div", { innerHTML: r.value }, null, 8, n0)
    ])) : Nr("", !0);
  }
}), d0 = async (o) => ({
  set: async (r) => {
    console.log(`--hydrator [${r.data.curr.type}]`);
    const t = jr(a0, {
      _p: o,
      _$p: r
    });
    t.use(Re, {
      theme: {
        preset: Ju
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
    }, l = document.getElementById(o.f.name("vue-root"));
    return t.mount(l), n;
  }
});
export {
  d0 as hydrator,
  d0 as index
};
