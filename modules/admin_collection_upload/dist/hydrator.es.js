import { r as ot, g as hr, o as Gr, n as rt, w as ko, a as Q, b as et, d as tt, c as Jo, e as Xo, f as Yo, h as br, t as nt, F as at, i as it } from "./runtime-dom.esm-bundler-CrCCl09J.js";
var ct = Object.defineProperty, vr = Object.getOwnPropertySymbols, st = Object.prototype.hasOwnProperty, lt = Object.prototype.propertyIsEnumerable, yr = (o, r, e) => r in o ? ct(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, dt = (o, r) => {
  for (var e in r || (r = {})) st.call(r, e) && yr(o, e, r[e]);
  if (vr) for (var e of vr(r)) lt.call(r, e) && yr(o, e, r[e]);
  return o;
};
function lr(o) {
  return o == null || o === "" || Array.isArray(o) && o.length === 0 || !(o instanceof Date) && typeof o == "object" && Object.keys(o).length === 0;
}
function ut(o) {
  return typeof o == "function" && "call" in o && "apply" in o;
}
function B(o) {
  return !lr(o);
}
function io(o, r = !0) {
  return o instanceof Object && o.constructor === Object && (r || Object.keys(o).length !== 0);
}
function Zr(o = {}, r = {}) {
  let e = dt({}, o);
  return Object.keys(r).forEach((t) => {
    let n = t;
    io(r[n]) && n in o && io(o[n]) ? e[n] = Zr(o[n], r[n]) : e[n] = r[n];
  }), e;
}
function ft(...o) {
  return o.reduce((r, e, t) => t === 0 ? e : Zr(r, e), {});
}
function no(o, ...r) {
  return ut(o) ? o(...r) : o;
}
function mo(o, r = !0) {
  return typeof o == "string" && (r || o !== "");
}
function gt(o) {
  return B(o) && !isNaN(o);
}
function co(o, r) {
  if (r) {
    let e = r.test(o);
    return r.lastIndex = 0, e;
  }
  return !1;
}
function pt(...o) {
  return ft(...o);
}
function wo(o) {
  return o && o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function Qr(o) {
  return mo(o) ? o.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : o;
}
function oe() {
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
function mt(o) {
  if (o) {
    let r = o.parentNode;
    return r && r instanceof ShadowRoot && r.host && (r = r.host), r;
  }
  return null;
}
function ht(o) {
  return !!(o !== null && typeof o < "u" && o.nodeName && mt(o));
}
function re(o) {
  return typeof Element < "u" ? o instanceof Element : o !== null && typeof o == "object" && o.nodeType === 1 && typeof o.nodeName == "string";
}
function rr(o, r = {}) {
  if (re(o)) {
    let e = (t, n) => {
      var i, a;
      let c = (i = o?.$attrs) != null && i[t] ? [(a = o?.$attrs) == null ? void 0 : a[t]] : [];
      return [n].flat().reduce((l, s) => {
        if (s != null) {
          let d = typeof s;
          if (d === "string" || d === "number") l.push(s);
          else if (d === "object") {
            let g = Array.isArray(s) ? e(t, s) : Object.entries(s).map(([m, b]) => t === "style" && (b || b === 0) ? `${m.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${b}` : b ? m : void 0);
            l = g.length ? l.concat(g.filter((m) => !!m)) : l;
          }
        }
        return l;
      }, c);
    };
    Object.entries(r).forEach(([t, n]) => {
      if (n != null) {
        let i = t.match(/^on(.+)/);
        i ? o.addEventListener(i[1].toLowerCase(), n) : t === "p-bind" || t === "pBind" ? rr(o, n) : (n = t === "class" ? [...new Set(e("class", n))].join(" ").trim() : t === "style" ? e("style", n).join(";").trim() : n, (o.$attrs = o.$attrs || {}) && (o.$attrs[t] = n), o.setAttribute(t, n));
      }
    });
  }
}
function bt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function vt(o, r = "", e) {
  re(o) && e !== null && e !== void 0 && o.setAttribute(r, e);
}
var yt = Object.defineProperty, kt = Object.defineProperties, wt = Object.getOwnPropertyDescriptors, Fo = Object.getOwnPropertySymbols, ee = Object.prototype.hasOwnProperty, te = Object.prototype.propertyIsEnumerable, kr = (o, r, e) => r in o ? yt(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, X = (o, r) => {
  for (var e in r || (r = {})) ee.call(r, e) && kr(o, e, r[e]);
  if (Fo) for (var e of Fo(r)) te.call(r, e) && kr(o, e, r[e]);
  return o;
}, Ko = (o, r) => kt(o, wt(r)), ro = (o, r) => {
  var e = {};
  for (var t in o) ee.call(o, t) && r.indexOf(t) < 0 && (e[t] = o[t]);
  if (o != null && Fo) for (var t of Fo(o)) r.indexOf(t) < 0 && te.call(o, t) && (e[t] = o[t]);
  return e;
}, xt = oe(), eo = xt, xo = /{([^}]*)}/g, ne = /(\d+\s+[\+\-\*\/]\s+\d+)/g, ae = /var\([^)]+\)/g;
function wr(o) {
  return mo(o) ? o.replace(/[A-Z]/g, (r, e) => e === 0 ? r : "." + r.toLowerCase()).toLowerCase() : o;
}
function Ct(o) {
  return io(o) && o.hasOwnProperty("$value") && o.hasOwnProperty("$type") ? o.$value : o;
}
function $t(o) {
  return o.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function er(o = "", r = "") {
  return $t(`${mo(o, !1) && mo(r, !1) ? `${o}-` : o}${r}`);
}
function ie(o = "", r = "") {
  return `--${er(o, r)}`;
}
function Bt(o = "") {
  let r = (o.match(/{/g) || []).length, e = (o.match(/}/g) || []).length;
  return (r + e) % 2 !== 0;
}
function ce(o, r = "", e = "", t = [], n) {
  if (mo(o)) {
    let i = o.trim();
    if (Bt(i)) return;
    if (co(i, xo)) {
      let a = i.replaceAll(xo, (c) => {
        let l = c.replace(/{|}/g, "").split(".").filter((s) => !t.some((d) => co(s, d)));
        return `var(${ie(e, Qr(l.join("-")))}${B(n) ? `, ${n}` : ""})`;
      });
      return co(a.replace(ae, "0"), ne) ? `calc(${a})` : a;
    }
    return i;
  } else if (gt(o)) return o;
}
function Rt(o, r, e) {
  mo(r, !1) && o.push(`${r}:${e};`);
}
function go(o, r) {
  return o ? `${o}{${r}}` : "";
}
function se(o, r) {
  if (o.indexOf("dt(") === -1) return o;
  function e(a, c) {
    let l = [], s = 0, d = "", g = null, m = 0;
    for (; s <= a.length; ) {
      let b = a[s];
      if ((b === '"' || b === "'" || b === "`") && a[s - 1] !== "\\" && (g = g === b ? null : b), !g && (b === "(" && m++, b === ")" && m--, (b === "," || s === a.length) && m === 0)) {
        let f = d.trim();
        f.startsWith("dt(") ? l.push(se(f, c)) : l.push(t(f)), d = "", s++;
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
var so = (...o) => St(A.getTheme(), ...o), St = (o = {}, r, e, t) => {
  if (r) {
    let { variable: n, options: i } = A.defaults || {}, { prefix: a, transform: c } = o?.options || i || {}, l = co(r, xo) ? r : `{${r}}`;
    return t === "value" || lr(t) && c === "strict" ? A.getTokenValue(r) : ce(l, void 0, a, [n.excludedKeyRegex], e);
  }
  return "";
};
function To(o, ...r) {
  if (o instanceof Array) {
    let e = o.reduce((t, n, i) => {
      var a;
      return t + n + ((a = no(r[i], { dt: so })) != null ? a : "");
    }, "");
    return se(e, so);
  }
  return no(o, { dt: so });
}
function _t(o, r = {}) {
  let e = A.defaults.variable, { prefix: t = e.prefix, selector: n = e.selector, excludedKeyRegex: i = e.excludedKeyRegex } = r, a = [], c = [], l = [{ node: o, path: t }];
  for (; l.length; ) {
    let { node: d, path: g } = l.pop();
    for (let m in d) {
      let b = d[m], f = Ct(b), h = co(m, i) ? er(g) : er(g, Qr(m));
      if (io(f)) l.push({ node: f, path: h });
      else {
        let p = ie(h), y = ce(f, h, t, [i]);
        Rt(c, p, y);
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
  return _t(o, { prefix: r?.prefix });
}, getCommon({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var i, a, c, l, s, d, g;
  let { preset: m, options: b } = r, f, h, p, y, k, w, x;
  if (B(m) && b.transform !== "strict") {
    let { primitive: _, semantic: z, extend: C } = m, W = z || {}, { colorScheme: F } = W, K = ro(W, ["colorScheme"]), H = C || {}, { colorScheme: U } = H, I = ro(H, ["colorScheme"]), E = F || {}, { dark: G } = E, $ = ro(E, ["dark"]), Z = U || {}, { dark: P } = Z, oo = ro(Z, ["dark"]), q = B(_) ? this._toVariables({ primitive: _ }, b) : {}, S = B(K) ? this._toVariables({ semantic: K }, b) : {}, D = B($) ? this._toVariables({ light: $ }, b) : {}, to = B(G) ? this._toVariables({ dark: G }, b) : {}, V = B(I) ? this._toVariables({ semantic: I }, b) : {}, vo = B(oo) ? this._toVariables({ light: oo }, b) : {}, mr = B(P) ? this._toVariables({ dark: P }, b) : {}, [De, Le] = [(i = q.declarations) != null ? i : "", q.tokens], [je, Fe] = [(a = S.declarations) != null ? a : "", S.tokens || []], [Ie, We] = [(c = D.declarations) != null ? c : "", D.tokens || []], [Ue, Me] = [(l = to.declarations) != null ? l : "", to.tokens || []], [He, qe] = [(s = V.declarations) != null ? s : "", V.tokens || []], [Ve, Je] = [(d = vo.declarations) != null ? d : "", vo.tokens || []], [Xe, Ye] = [(g = mr.declarations) != null ? g : "", mr.tokens || []];
    f = this.transformCSS(o, De, "light", "variable", b, t, n), h = Le;
    let Ke = this.transformCSS(o, `${je}${Ie}`, "light", "variable", b, t, n), Ge = this.transformCSS(o, `${Ue}`, "dark", "variable", b, t, n);
    p = `${Ke}${Ge}`, y = [.../* @__PURE__ */ new Set([...Fe, ...We, ...Me])];
    let Ze = this.transformCSS(o, `${He}${Ve}color-scheme:light`, "light", "variable", b, t, n), Qe = this.transformCSS(o, `${Xe}color-scheme:dark`, "dark", "variable", b, t, n);
    k = `${Ze}${Qe}`, w = [.../* @__PURE__ */ new Set([...qe, ...Je, ...Ye])], x = no(m.css, { dt: so });
  }
  return { primitive: { css: f, tokens: h }, semantic: { css: p, tokens: y }, global: { css: k, tokens: w }, style: x };
}, getPreset({ name: o = "", preset: r = {}, options: e, params: t, set: n, defaults: i, selector: a }) {
  var c, l, s;
  let d, g, m;
  if (B(r) && e.transform !== "strict") {
    let b = o.replace("-directive", ""), f = r, { colorScheme: h, extend: p, css: y } = f, k = ro(f, ["colorScheme", "extend", "css"]), w = p || {}, { colorScheme: x } = w, _ = ro(w, ["colorScheme"]), z = h || {}, { dark: C } = z, W = ro(z, ["dark"]), F = x || {}, { dark: K } = F, H = ro(F, ["dark"]), U = B(k) ? this._toVariables({ [b]: X(X({}, k), _) }, e) : {}, I = B(W) ? this._toVariables({ [b]: X(X({}, W), H) }, e) : {}, E = B(C) ? this._toVariables({ [b]: X(X({}, C), K) }, e) : {}, [G, $] = [(c = U.declarations) != null ? c : "", U.tokens || []], [Z, P] = [(l = I.declarations) != null ? l : "", I.tokens || []], [oo, q] = [(s = E.declarations) != null ? s : "", E.tokens || []], S = this.transformCSS(b, `${G}${Z}`, "light", "variable", e, n, i, a), D = this.transformCSS(b, oo, "dark", "variable", e, n, i, a);
    d = `${S}${D}`, g = [.../* @__PURE__ */ new Set([...$, ...P, ...q])], m = no(y, { dt: so });
  }
  return { css: d, tokens: g, style: m };
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
  return n ? `@layer ${no(n.order || n.name || "primeui", e)}` : "";
}, getCommonStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: n, defaults: i }) {
  let a = this.getCommon({ name: o, theme: r, params: e, set: n, defaults: i }), c = Object.entries(t).reduce((l, [s, d]) => l.push(`${s}="${d}"`) && l, []).join(" ");
  return Object.entries(a || {}).reduce((l, [s, d]) => {
    if (io(d) && Object.hasOwn(d, "css")) {
      let g = wo(d.css), m = `${s}-variables`;
      l.push(`<style type="text/css" data-primevue-style-id="${m}" ${c}>${g}</style>`);
    }
    return l;
  }, []).join("");
}, getStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: n, defaults: i }) {
  var a;
  let c = { name: o, theme: r, params: e, set: n, defaults: i }, l = (a = o.includes("-directive") ? this.getPresetD(c) : this.getPresetC(c)) == null ? void 0 : a.css, s = Object.entries(t).reduce((d, [g, m]) => d.push(`${g}="${m}"`) && d, []).join(" ");
  return l ? `<style type="text/css" data-primevue-style-id="${o}-variables" ${s}>${wo(l)}</style>` : "";
}, createTokens(o = {}, r, e = "", t = "", n = {}) {
  let i = function(c, l = {}, s = []) {
    if (s.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: c, path: this.path, paths: l, value: void 0 };
    s.push(this.path), l.name = this.path, l.binding || (l.binding = {});
    let d = this.value;
    if (typeof this.value == "string" && xo.test(this.value)) {
      let g = this.value.trim().replace(xo, (m) => {
        var b;
        let f = m.slice(1, -1), h = this.tokens[f];
        if (!h) return console.warn(`Token not found for path: ${f}`), "__UNRESOLVED__";
        let p = h.computed(c, l, s);
        return Array.isArray(p) && p.length === 2 ? `light-dark(${p[0].value},${p[1].value})` : (b = p?.value) != null ? b : "__UNRESOLVED__";
      });
      d = ne.test(g.replace(ae, "0")) ? `calc(${g})` : g;
    }
    return lr(l.binding) && delete l.binding, s.pop(), { colorScheme: c, path: this.path, paths: l, value: d.includes("__UNRESOLVED__") ? void 0 : d };
  }, a = (c, l, s) => {
    Object.entries(c).forEach(([d, g]) => {
      let m = co(d, r.variable.excludedKeyRegex) ? l : l ? `${l}.${wr(d)}` : wr(d), b = s ? `${s}.${d}` : d;
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
  let n = ((c) => c.split(".").filter((l) => !co(l.toLowerCase(), e.variable.excludedKeyRegex)).join("."))(r), i = r.includes("colorScheme.light") ? "light" : r.includes("colorScheme.dark") ? "dark" : void 0, a = [(t = o[n]) == null ? void 0 : t.computed(i)].flat().filter((c) => c);
  return a.length === 1 ? a[0].value : a.reduce((c = {}, l) => {
    let s = l, { colorScheme: d } = s, g = ro(s, ["colorScheme"]);
    return c[d] = g, c;
  }, void 0);
}, getSelectorRule(o, r, e, t) {
  return e === "class" || e === "attr" ? go(B(r) ? `${o}${r},${o} ${r}` : o, t) : go(o, go(r ?? ":root,:host", t));
}, transformCSS(o, r, e, t, n = {}, i, a, c) {
  if (B(r)) {
    let { cssLayer: l } = n;
    if (t !== "style") {
      let s = this.getColorSchemeOption(n, a);
      r = e === "dark" ? s.reduce((d, { type: g, selector: m }) => (B(m) && (d += m.includes("[CSS]") ? m.replace("[CSS]", r) : this.getSelectorRule(m, c, g, r)), d), "") : go(c ?? ":root,:host", r);
    }
    if (l) {
      let s = { name: "primeui" };
      io(l) && (s.name = no(l.name, { name: o, type: t })), B(s.name) && (r = go(`@layer ${s.name}`, r), i?.layerNames(s.name));
    }
    return r;
  }
  return "";
} }, A = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(o = {}) {
  let { theme: r } = o;
  r && (this._theme = Ko(X({}, r), { options: X(X({}, this.defaults.options), r.options) }), this._tokens = J.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
  this._theme = Ko(X({}, this.theme), { preset: o }), this._tokens = J.createTokens(o, this.defaults), this.clearLoadedStyleNames(), eo.emit("preset:change", o), eo.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(o) {
  this._theme = Ko(X({}, this.theme), { options: o }), this.clearLoadedStyleNames(), eo.emit("options:change", o), eo.emit("theme:change", this.theme);
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
}, Ot = `
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
function xr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Cr(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? xr(Object(e), !0).forEach(function(t) {
      Et(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : xr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function Et(o, r, e) {
  return (r = Tt(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Tt(o) {
  var r = At(o, "string");
  return Co(r) == "symbol" ? r : r + "";
}
function At(o, r) {
  if (Co(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (Co(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function Nt(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  hr() && hr().components ? Gr(o) : r ? o() : rt(o);
}
var zt = 0;
function Pt(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = Q(!1), t = Q(o), n = Q(null), i = bt() ? window.document : void 0, a = r.document, c = a === void 0 ? i : a, l = r.immediate, s = l === void 0 ? !0 : l, d = r.manual, g = d === void 0 ? !1 : d, m = r.name, b = m === void 0 ? "style_".concat(++zt) : m, f = r.id, h = f === void 0 ? void 0 : f, p = r.media, y = p === void 0 ? void 0 : p, k = r.nonce, w = k === void 0 ? void 0 : k, x = r.first, _ = x === void 0 ? !1 : x, z = r.onMounted, C = z === void 0 ? void 0 : z, W = r.onUpdated, F = W === void 0 ? void 0 : W, K = r.onLoad, H = K === void 0 ? void 0 : K, U = r.props, I = U === void 0 ? {} : U, E = function() {
  }, G = function(P) {
    var oo = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (c) {
      var q = Cr(Cr({}, I), oo), S = q.name || b, D = q.id || h, to = q.nonce || w;
      n.value = c.querySelector('style[data-primevue-style-id="'.concat(S, '"]')) || c.getElementById(D) || c.createElement("style"), n.value.isConnected || (t.value = P || o, rr(n.value, {
        type: "text/css",
        id: D,
        media: y,
        nonce: to
      }), _ ? c.head.prepend(n.value) : c.head.appendChild(n.value), vt(n.value, "data-primevue-style-id", S), rr(n.value, q), n.value.onload = function(V) {
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
    !c || !e.value || (E(), ht(n.value) && c.head.removeChild(n.value), e.value = !1, n.value = null);
  };
  return s && !g && Nt(G), {
    id: h,
    name: b,
    el: n,
    css: t,
    unload: $,
    load: G,
    isLoaded: ot(e)
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
var $r, Br, Rr, Sr;
function _r(o, r) {
  return Ft(o) || jt(o, r) || Lt(o, r) || Dt();
}
function Dt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lt(o, r) {
  if (o) {
    if (typeof o == "string") return Or(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Or(o, r) : void 0;
  }
}
function Or(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++) t[e] = o[e];
  return t;
}
function jt(o, r) {
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
function Ft(o) {
  if (Array.isArray(o)) return o;
}
function Er(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Go(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Er(Object(e), !0).forEach(function(t) {
      It(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Er(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function It(o, r, e) {
  return (r = Wt(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Wt(o) {
  var r = Ut(o, "string");
  return $o(r) == "symbol" ? r : r + "";
}
function Ut(o, r) {
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
var Mt = function(r) {
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
}, Ht = {}, qt = {}, fo = {
  name: "base",
  css: Mt,
  style: Ot,
  classes: Ht,
  inlineStyles: qt,
  load: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, n = t(To($r || ($r = Ao(["", ""])), r));
    return B(n) ? Pt(wo(n), Go({
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
      return A.transformCSS(e.name || r.name, "".concat(n).concat(To(Br || (Br = Ao(["", ""])), t)));
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
        dt: so
      }) || "", n = wo(To(Rr || (Rr = Ao(["", "", ""])), t, r)), i = Object.entries(e).reduce(function(a, c) {
        var l = _r(c, 2), s = l[0], d = l[1];
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
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = To(Sr || (Sr = Ao(["", ""])), no(this.style, {
        dt: so
      })), a = wo(A.transformCSS(n, i)), c = Object.entries(e).reduce(function(l, s) {
        var d = _r(s, 2), g = d[0], m = d[1];
        return l.push("".concat(g, '="').concat(m, '"')) && l;
      }, []).join(" ");
      B(a) && t.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(c, ">").concat(a, "</style>"));
    }
    return t.join("");
  },
  extend: function(r) {
    return Go(Go({}, this), {}, {
      css: void 0,
      style: void 0
    }, r);
  }
}, No = oe();
function Bo(o) {
  "@babel/helpers - typeof";
  return Bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Bo(o);
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
function zo(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Tr(Object(e), !0).forEach(function(t) {
      Vt(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Tr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function Vt(o, r, e) {
  return (r = Jt(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Jt(o) {
  var r = Xt(o, "string");
  return Bo(r) == "symbol" ? r : r + "";
}
function Xt(o, r) {
  if (Bo(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (Bo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var Yt = {
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
}, Kt = /* @__PURE__ */ Symbol();
function Gt(o, r) {
  var e = {
    config: et(r)
  };
  return o.config.globalProperties.$primevue = e, o.provide(Kt, e), Zt(), Qt(o, e), e;
}
var po = [];
function Zt() {
  eo.clear(), po.forEach(function(o) {
    return o?.();
  }), po = [];
}
function Qt(o, r) {
  var e = Q(!1), t = function() {
    var s;
    if (((s = r.config) === null || s === void 0 ? void 0 : s.theme) !== "none" && !A.isStyleNameLoaded("common")) {
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
var on = {
  install: function(r, e) {
    var t = pt(Yt, e);
    Gt(r, t);
  }
}, rn = { transitionDuration: "{transition.duration}" }, en = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, tn = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, nn = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, an = { root: rn, panel: en, header: tn, content: nn }, cn = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, sn = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, ln = { padding: "{list.padding}", gap: "{list.gap}" }, dn = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, un = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, fn = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, gn = { borderRadius: "{border.radius.sm}" }, pn = { padding: "{list.option.padding}" }, mn = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, hn = { root: cn, overlay: sn, list: ln, option: dn, optionGroup: un, dropdown: fn, chip: gn, emptyMessage: pn, colorScheme: mn }, bn = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, vn = { size: "1rem" }, yn = { borderColor: "{content.background}", offset: "-0.75rem" }, kn = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, wn = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, xn = { root: bn, icon: vn, group: yn, lg: kn, xl: wn }, Cn = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, $n = { size: "0.5rem" }, Bn = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, Rn = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, Sn = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, _n = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, On = { root: Cn, dot: $n, sm: Bn, lg: Rn, xl: Sn, colorScheme: _n }, En = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, Tn = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, An = { primitive: En, semantic: Tn }, Nn = { borderRadius: "{content.border.radius}" }, zn = { root: Nn }, Pn = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, Dn = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ln = { color: "{navigation.item.icon.color}" }, jn = { root: Pn, item: Dn, separator: Ln }, Fn = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, In = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, Wn = { root: Fn, colorScheme: In }, Un = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, Mn = { padding: "1.25rem", gap: "0.5rem" }, Hn = { gap: "0.5rem" }, qn = { fontSize: "1.25rem", fontWeight: "500" }, Vn = { color: "{text.muted.color}" }, Jn = { root: Un, body: Mn, caption: Hn, title: qn, subtitle: Vn }, Xn = { transitionDuration: "{transition.duration}" }, Yn = { gap: "0.25rem" }, Kn = { padding: "1rem", gap: "0.5rem" }, Gn = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Zn = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, Qn = { root: Xn, content: Yn, indicatorList: Kn, indicator: Gn, colorScheme: Zn }, oa = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, ra = { width: "2.5rem", color: "{form.field.icon.color}" }, ea = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, ta = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, na = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, aa = { color: "{form.field.icon.color}" }, ia = { root: oa, dropdown: ra, overlay: ea, list: ta, option: na, clearIcon: aa }, ca = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, sa = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, la = { root: ca, icon: sa }, da = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, ua = { width: "2rem", height: "2rem" }, fa = { size: "1rem" }, ga = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, pa = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, ma = { root: da, image: ua, icon: fa, removeIcon: ga, colorScheme: pa }, ha = { transitionDuration: "{transition.duration}" }, ba = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, va = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, ya = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, ka = { root: ha, preview: ba, panel: va, colorScheme: ya }, wa = { size: "2rem", color: "{overlay.modal.color}" }, xa = { gap: "1rem" }, Ca = { icon: wa, content: xa }, $a = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Ba = { padding: "{overlay.popover.padding}", gap: "1rem" }, Ra = { size: "1.5rem", color: "{overlay.popover.color}" }, Sa = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, _a = { root: $a, content: Ba, icon: Ra, footer: Sa }, Oa = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Ea = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Ta = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Aa = { mobileIndent: "1rem" }, Na = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, za = { borderColor: "{content.border.color}" }, Pa = { root: Oa, list: Ea, item: Ta, submenu: Aa, submenuIcon: Na, separator: za }, Da = `
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
`, La = { transitionDuration: "{transition.duration}" }, ja = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Fa = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Ia = { fontWeight: "600" }, Wa = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Ua = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Ma = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Ha = { fontWeight: "600" }, qa = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Va = { color: "{primary.color}" }, Ja = { width: "0.5rem" }, Xa = { width: "1px", color: "{primary.color}" }, Ya = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Ka = { size: "2rem" }, Ga = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Za = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, Qa = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, oi = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, ri = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, ei = `
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, ti = { root: La, header: ja, headerCell: Fa, columnTitle: Ia, row: Wa, bodyCell: Ua, footerCell: Ma, columnFooter: Ha, footer: qa, dropPoint: Va, columnResizer: Ja, resizeIndicator: Xa, sortIcon: Ya, loadingIcon: Ka, rowToggleButton: Ga, filter: Za, paginatorTop: Qa, paginatorBottom: oi, colorScheme: ri, css: ei }, ni = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, ai = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, ii = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, ci = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, si = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, li = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, di = { root: ni, header: ai, content: ii, footer: ci, paginatorTop: si, paginatorBottom: li }, ui = { transitionDuration: "{transition.duration}" }, fi = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, gi = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, pi = { gap: "0.5rem", fontWeight: "500" }, mi = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, hi = { color: "{form.field.icon.color}" }, bi = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, vi = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, yi = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, ki = { margin: "0.5rem 0 0 0" }, wi = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, xi = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ci = { margin: "0.5rem 0 0 0" }, $i = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, Bi = { margin: "0.5rem 0 0 0" }, Ri = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, Si = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, _i = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, Oi = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, Ei = { root: ui, panel: fi, header: gi, title: pi, dropdown: mi, inputIcon: hi, selectMonth: bi, selectYear: vi, group: yi, dayView: ki, weekDay: wi, date: xi, monthView: Ci, month: $i, yearView: Bi, year: Ri, buttonbar: Si, timePicker: _i, colorScheme: Oi }, Ti = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, Ai = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, Ni = { fontSize: "1.25rem", fontWeight: "600" }, zi = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Pi = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, Di = { root: Ti, header: Ai, title: Ni, content: zi, footer: Pi }, Li = { borderColor: "{content.border.color}" }, ji = { background: "{content.background}", color: "{text.color}" }, Fi = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, Ii = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, Wi = { root: Li, content: ji, horizontal: Fi, vertical: Ii }, Ui = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, Mi = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Hi = { root: Ui, item: Mi }, qi = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, Vi = { padding: "{overlay.modal.padding}" }, Ji = { fontSize: "1.5rem", fontWeight: "600" }, Xi = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Yi = { padding: "{overlay.modal.padding}" }, Ki = { root: qi, header: Vi, title: Ji, content: Xi, footer: Yi }, Gi = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, Zi = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Qi = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, oc = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, rc = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, ec = { toolbar: Gi, toolbarItem: Zi, overlay: Qi, overlayOption: oc, content: rc }, tc = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, nc = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ac = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, ic = { padding: "0" }, cc = { root: tc, legend: nc, toggleIcon: ac, content: ic }, sc = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, lc = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, dc = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, uc = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, fc = { gap: "0.5rem" }, gc = { height: "0.25rem" }, pc = { gap: "0.5rem" }, mc = { root: sc, header: lc, content: dc, file: uc, fileList: fc, progressbar: gc, basic: pc }, hc = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, bc = { active: { top: "-1.25rem" } }, vc = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, yc = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, kc = { root: hc, over: bc, in: vc, on: yc }, wc = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, xc = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Cc = { size: "1.5rem" }, $c = { background: "{content.background}", padding: "1rem 0.25rem" }, Bc = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Rc = { size: "1rem" }, Sc = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, _c = { gap: "0.5rem", padding: "1rem" }, Oc = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ec = { background: "rgba(0, 0, 0, 0.5)" }, Tc = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, Ac = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Nc = { size: "1.5rem" }, zc = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, Pc = { root: wc, navButton: xc, navIcon: Cc, thumbnailsContent: $c, thumbnailNavButton: Bc, thumbnailNavButtonIcon: Rc, caption: Sc, indicatorList: _c, indicatorButton: Oc, insetIndicatorList: Ec, insetIndicatorButton: Tc, closeButton: Ac, closeButtonIcon: Nc, colorScheme: zc }, Dc = { color: "{form.field.icon.color}" }, Lc = { icon: Dc }, jc = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, Fc = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, Ic = { root: jc, input: Fc }, Wc = { transitionDuration: "{transition.duration}" }, Uc = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, Mc = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, Hc = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, qc = { root: Wc, preview: Uc, toolbar: Mc, action: Hc }, Vc = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Jc = { handle: Vc }, Xc = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, Yc = { fontWeight: "500" }, Kc = { size: "1rem" }, Gc = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, Zc = { root: Xc, text: Yc, icon: Kc, colorScheme: Gc }, Qc = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, os = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, rs = { root: Qc, display: os }, es = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, ts = { borderRadius: "{border.radius.sm}" }, ns = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, as = { root: es, chip: ts, colorScheme: ns }, is = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, cs = { addon: is }, ss = { transitionDuration: "{transition.duration}" }, ls = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, ds = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, us = { root: ss, button: ls, colorScheme: ds }, fs = { gap: "0.5rem" }, gs = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, ps = { root: fs, input: gs }, ms = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, hs = { root: ms }, bs = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, vs = { background: "{primary.color}" }, ys = { background: "{content.border.color}" }, ks = { color: "{text.muted.color}" }, ws = { root: bs, value: vs, range: ys, text: ks }, xs = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, Cs = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, $s = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Bs = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Rs = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, Ss = { padding: "{list.option.padding}" }, _s = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, Os = { root: xs, list: Cs, option: $s, optionGroup: Bs, checkmark: Rs, emptyMessage: Ss, colorScheme: _s }, Es = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, Ts = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, As = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Ns = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, zs = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Ps = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, Ds = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Ls = { borderColor: "{content.border.color}" }, js = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Fs = { root: Es, baseItem: Ts, item: As, overlay: Ns, submenu: zs, submenuLabel: Ps, submenuIcon: Ds, separator: Ls, mobileButton: js }, Is = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Ws = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Us = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Ms = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, Hs = { borderColor: "{content.border.color}" }, qs = { root: Is, list: Ws, item: Us, submenuLabel: Ms, separator: Hs }, Vs = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, Js = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, Xs = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Ys = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, Ks = { borderColor: "{content.border.color}" }, Gs = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Zs = { root: Vs, baseItem: Js, item: Xs, submenu: Ys, separator: Ks, mobileButton: Gs }, Qs = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, ol = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, rl = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, el = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, tl = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, nl = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, al = { root: { borderWidth: "1px" } }, il = { content: { padding: "0" } }, cl = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, sl = { root: Qs, content: ol, text: rl, icon: el, closeButton: tl, closeIcon: nl, outlined: al, simple: il, colorScheme: cl }, ll = { borderRadius: "{content.border.radius}", gap: "1rem" }, dl = { background: "{content.border.color}", size: "0.5rem" }, ul = { gap: "0.5rem" }, fl = { size: "0.5rem" }, gl = { size: "1rem" }, pl = { verticalGap: "0.5rem", horizontalGap: "1rem" }, ml = { root: ll, meters: dl, label: ul, labelMarker: fl, labelIcon: gl, labelList: pl }, hl = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, bl = { width: "2.5rem", color: "{form.field.icon.color}" }, vl = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, yl = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, kl = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, wl = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, xl = { color: "{form.field.icon.color}" }, Cl = { borderRadius: "{border.radius.sm}" }, $l = { padding: "{list.option.padding}" }, Bl = { root: hl, dropdown: bl, overlay: vl, list: yl, option: kl, optionGroup: wl, chip: Cl, clearIcon: xl, emptyMessage: $l }, Rl = { gap: "1.125rem" }, Sl = { gap: "0.5rem" }, _l = { root: Rl, controls: Sl }, Ol = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, El = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, Tl = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Al = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, Nl = { root: Ol, node: El, nodeToggleButton: Tl, connector: Al }, zl = { outline: { width: "2px", color: "{content.background}" } }, Pl = { root: zl }, Dl = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Ll = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, jl = { color: "{text.muted.color}" }, Fl = { maxWidth: "2.5rem" }, Il = { root: Dl, navButton: Ll, currentPageReport: jl, jumpToPageInput: Fl }, Wl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Ul = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, Ml = { padding: "0.375rem 1.125rem" }, Hl = { fontWeight: "600" }, ql = { padding: "0 1.125rem 1.125rem 1.125rem" }, Vl = { padding: "0 1.125rem 1.125rem 1.125rem" }, Jl = { root: Wl, header: Ul, toggleableHeader: Ml, title: Hl, content: ql, footer: Vl }, Xl = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Yl = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, Kl = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Gl = { indent: "1rem" }, Zl = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, Ql = { root: Xl, panel: Yl, item: Kl, submenu: Gl, submenuIcon: Zl }, od = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, rd = { color: "{form.field.icon.color}" }, ed = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, td = { gap: "0.5rem" }, nd = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, ad = { meter: od, icon: rd, overlay: ed, content: td, colorScheme: nd }, id = { gap: "1.125rem" }, cd = { gap: "0.5rem" }, sd = { root: id, controls: cd }, ld = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, dd = { padding: "{overlay.popover.padding}" }, ud = { root: ld, content: dd }, fd = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, gd = { background: "{primary.color}" }, pd = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, md = { root: fd, value: gd, label: pd }, hd = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, bd = { colorScheme: hd }, vd = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, yd = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, kd = { root: vd, icon: yd }, wd = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, xd = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, Cd = { root: wd, icon: xd }, $d = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, Bd = { colorScheme: $d }, Rd = { transitionDuration: "{transition.duration}" }, Sd = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, _d = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, Od = { root: Rd, bar: Sd, colorScheme: _d }, Ed = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Td = { width: "2.5rem", color: "{form.field.icon.color}" }, Ad = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Nd = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, zd = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Pd = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Dd = { color: "{form.field.icon.color}" }, Ld = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, jd = { padding: "{list.option.padding}" }, Fd = { root: Ed, dropdown: Td, overlay: Ad, list: Nd, option: zd, optionGroup: Pd, clearIcon: Dd, checkmark: Ld, emptyMessage: jd }, Id = { borderRadius: "{form.field.border.radius}" }, Wd = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, Ud = { root: Id, colorScheme: Wd }, Md = { borderRadius: "{content.border.radius}" }, Hd = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, qd = { root: Md, colorScheme: Hd }, Vd = { transitionDuration: "{transition.duration}" }, Jd = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, Xd = { background: "{primary.color}" }, Yd = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Kd = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, Gd = { root: Vd, track: Jd, range: Xd, handle: Yd, colorScheme: Kd }, Zd = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Qd = { root: Zd }, ou = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, ru = { root: ou }, eu = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, tu = { background: "{content.border.color}" }, nu = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, au = { root: eu, gutter: tu, handle: nu }, iu = { transitionDuration: "{transition.duration}" }, cu = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, su = { padding: "0.5rem", gap: "1rem" }, lu = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, du = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, uu = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, fu = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, gu = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, pu = { root: iu, separator: cu, step: su, stepHeader: lu, stepTitle: du, stepNumber: uu, steppanels: fu, steppanel: gu }, mu = { transitionDuration: "{transition.duration}" }, hu = { background: "{content.border.color}" }, bu = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, vu = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, yu = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, ku = { root: mu, separator: hu, itemLink: bu, itemLabel: vu, itemNumber: yu }, wu = { transitionDuration: "{transition.duration}" }, xu = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Cu = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, $u = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Bu = { height: "1px", bottom: "-1px", background: "{primary.color}" }, Ru = { root: wu, tablist: xu, item: Cu, itemIcon: $u, activeBar: Bu }, Su = { transitionDuration: "{transition.duration}" }, _u = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Ou = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Eu = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, Tu = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Au = { height: "1px", bottom: "-1px", background: "{primary.color}" }, Nu = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, zu = { root: Su, tablist: _u, tab: Ou, tabpanel: Eu, navButton: Tu, activeBar: Au, colorScheme: Nu }, Pu = { transitionDuration: "{transition.duration}" }, Du = { background: "{content.background}", borderColor: "{content.border.color}" }, Lu = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, ju = { background: "{content.background}", color: "{content.color}" }, Fu = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, Iu = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, Wu = { root: Pu, tabList: Du, tab: Lu, tabPanel: ju, navButton: Fu, colorScheme: Iu }, Uu = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, Mu = { size: "0.75rem" }, Hu = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, qu = { root: Uu, icon: Mu, colorScheme: Hu }, Vu = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, Ju = { gap: "0.25rem" }, Xu = { margin: "2px 0" }, Yu = { root: Vu, prompt: Ju, commandResponse: Xu }, Ku = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Gu = { root: Ku }, Zu = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Qu = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, of = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, rf = { mobileIndent: "1rem" }, ef = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, tf = { borderColor: "{content.border.color}" }, nf = { root: Zu, list: Qu, item: of, submenu: rf, submenuIcon: ef, separator: tf }, af = { minHeight: "5rem" }, cf = { eventContent: { padding: "1rem 0" } }, sf = { eventContent: { padding: "0 1rem" } }, lf = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, df = { color: "{content.border.color}", size: "2px" }, uf = { event: af, horizontal: cf, vertical: sf, eventMarker: lf, eventConnector: df }, ff = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, gf = { size: "1.125rem" }, pf = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, mf = { gap: "0.5rem" }, hf = { fontWeight: "500", fontSize: "1rem" }, bf = { fontWeight: "500", fontSize: "0.875rem" }, vf = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, yf = { size: "1rem" }, kf = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, wf = { root: ff, icon: gf, content: pf, text: mf, summary: hf, detail: bf, closeButton: vf, closeIcon: yf, colorScheme: kf }, xf = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, Cf = { disabledColor: "{form.field.disabled.color}" }, $f = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, Bf = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, Rf = { root: xf, icon: Cf, content: $f, colorScheme: Bf }, Sf = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, _f = { borderRadius: "50%", size: "1rem" }, Of = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, Ef = { root: Sf, handle: _f, colorScheme: Of }, Tf = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, Af = { root: Tf }, Nf = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, zf = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, Pf = { root: Nf, colorScheme: zf }, Df = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, Lf = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, jf = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, Ff = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, If = { size: "2rem" }, Wf = { margin: "0 0 0.5rem 0" }, Uf = `
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Mf = { root: Df, node: Lf, nodeIcon: jf, nodeToggleButton: Ff, loadingIcon: If, filter: Wf, css: Uf }, Hf = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, qf = { width: "2.5rem", color: "{form.field.icon.color}" }, Vf = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Jf = { padding: "{list.padding}" }, Xf = { padding: "{list.option.padding}" }, Yf = { borderRadius: "{border.radius.sm}" }, Kf = { color: "{form.field.icon.color}" }, Gf = { root: Hf, dropdown: qf, overlay: Vf, tree: Jf, emptyMessage: Xf, chip: Yf, clearIcon: Kf }, Zf = { transitionDuration: "{transition.duration}" }, Qf = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, o0 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, r0 = { fontWeight: "600" }, e0 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, t0 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, n0 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, a0 = { fontWeight: "600" }, i0 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, c0 = { width: "0.5rem" }, s0 = { width: "1px", color: "{primary.color}" }, l0 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, d0 = { size: "2rem" }, u0 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, f0 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, g0 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, p0 = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, m0 = `
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, h0 = { root: Zf, header: Qf, headerCell: o0, columnTitle: r0, row: e0, bodyCell: t0, footerCell: n0, columnFooter: a0, footer: i0, columnResizer: c0, resizeIndicator: s0, sortIcon: l0, loadingIcon: d0, nodeToggleButton: u0, paginatorTop: f0, paginatorBottom: g0, colorScheme: p0, css: m0 }, b0 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, v0 = { loader: b0 }, y0 = Object.defineProperty, k0 = Object.defineProperties, w0 = Object.getOwnPropertyDescriptors, Ar = Object.getOwnPropertySymbols, x0 = Object.prototype.hasOwnProperty, C0 = Object.prototype.propertyIsEnumerable, Nr = (o, r, e) => r in o ? y0(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, zr, $0 = (zr = ((o, r) => {
  for (var e in r || (r = {})) x0.call(r, e) && Nr(o, e, r[e]);
  if (Ar) for (var e of Ar(r)) C0.call(r, e) && Nr(o, e, r[e]);
  return o;
})({}, An), k0(zr, w0({ components: { accordion: an, autocomplete: hn, avatar: xn, badge: On, blockui: zn, breadcrumb: jn, button: Wn, card: Jn, carousel: Qn, cascadeselect: ia, checkbox: la, chip: ma, colorpicker: ka, confirmdialog: Ca, confirmpopup: _a, contextmenu: Pa, datatable: ti, dataview: di, datepicker: Ei, dialog: Di, divider: Wi, dock: Hi, drawer: Ki, editor: ec, fieldset: cc, fileupload: mc, floatlabel: kc, galleria: Pc, iconfield: Lc, iftalabel: Ic, image: qc, imagecompare: Jc, inlinemessage: Zc, inplace: rs, inputchips: as, inputgroup: cs, inputnumber: us, inputotp: ps, inputtext: hs, knob: ws, listbox: Os, megamenu: Fs, menu: qs, menubar: Zs, message: sl, metergroup: ml, multiselect: Bl, orderlist: _l, organizationchart: Nl, overlaybadge: Pl, paginator: Il, panel: Jl, panelmenu: Ql, password: ad, picklist: sd, popover: ud, progressbar: md, progressspinner: bd, radiobutton: kd, rating: Cd, ripple: Bd, scrollpanel: Od, select: Fd, selectbutton: Ud, skeleton: qd, slider: Gd, speeddial: Qd, splitbutton: ru, splitter: au, stepper: pu, steps: ku, tabmenu: Ru, tabs: zu, tabview: Wu, tag: qu, terminal: Yu, textarea: Gu, tieredmenu: nf, timeline: uf, toast: wf, togglebutton: Rf, toggleswitch: Ef, toolbar: Af, tooltip: Pf, tree: Mf, treeselect: Gf, treetable: h0, virtualscroller: v0 }, css: Da })));
const tr = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const r = Math.random() * 16 | 0;
    return (o == "x" ? r : r & 3 | 8).toString(16);
  })
}), le = async () => ({
  f: {
    name: (o) => `${o.name}${o.id}`
  }
}), de = async () => ({
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
function nr(o, r = 1e3) {
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
let B0 = class {
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
const Io = () => new B0();
class ue {
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
        let c = n[a];
        const l = `${o.run_from}_src`;
        let s = o?.lazy_lib?.[l] || null;
        if (s && (s = s.replace("{*}", `${n.name}`)), console.log(`_lazy_src: ${s}`), console.log(`_src: ${c}`), O.lib.l.hasOwnProperty(`${i}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(c) && c.includes("/") == !1 && O.lib.inbuilt_lib.indexOf(`${n.name}`) === -1)
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
            O.lib.l[`${i}`] = {
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
            O.lib.l[`${i}`] = {
              lib: d,
              src: c
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
const fe = Io(), ge = Io(), R0 = fe.on, S0 = fe.emit, _0 = ge.emit, O0 = ge.on, E0 = async (o) => {
  const r = await le();
  return await O.lib.set({ lib: o.lib, run_from: "renderer", lazy_lib: o.lazy_lib }), {
    set: async (e) => {
      console.log("--renderer [set]"), e.return = e?.return || {}, e.return.r = e?.return?.r || "full";
      const t = new ue();
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
          const c = await await O.lib.get({ name: a.type, run_from: "renderer", lazy_lib: o.lazy_lib }), l = await (await c.lib.index({
            f: {
              name: (s) => r.f.name({ id: a.id, name: s }),
              get_lib: async (s) => await await O.lib.get({ name: s.name, run_from: s.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (s) => await (await de()).set(s),
              path: (s) => O.path.set({ src: c.src, type: a.type, name: s }),
              //set..
              uuid: () => tr().set(),
              wait_until: nr
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
}, T0 = async (o) => {
  const r = await le();
  return await O.lib.set({ lib: o.lib, run_from: "hydrator", lazy_lib: o.lazy_lib }), {
    set: async (e) => {
      console.log("--hydrator [set]");
      const t = new ue();
      t.start();
      let n = {
        r: "",
        style: ""
      }, i = {
        style_id: `${tr().set()}_stl`
      }, a = e.data?.value?.l || e.data.l;
      const c = async () => {
        for (const l of a) {
          const s = await await O.lib.get({ name: l.type, run_from: "hydrator", lazy_lib: o.lazy_lib }), d = s.lib, g = Io(), m = g.on, b = await (await d.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (f) => r.f.name({ id: l.id, name: f }),
              get_lib: async (f) => await await O.lib.get({ name: f.name, run_from: f.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (f) => await (await de()).set(f),
              path: (f) => O.path.set({ src: s.src, type: l.type, name: f }),
              //set..
              uuid: () => tr().set(),
              wait_until: nr,
              //set..
              call: _0,
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
          R0("msg", async (f) => {
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
      await nr(
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
function pe(o, r) {
  return function() {
    return o.apply(r, arguments);
  };
}
const { toString: A0 } = Object.prototype, { getPrototypeOf: dr } = Object, { iterator: Uo, toStringTag: me } = Symbol, Mo = /* @__PURE__ */ ((o) => (r) => {
  const e = A0.call(r);
  return o[e] || (o[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Y = (o) => (o = o.toLowerCase(), (r) => Mo(r) === o), Ho = (o) => (r) => typeof r === o, { isArray: bo } = Array, ho = Ho("undefined");
function Ro(o) {
  return o !== null && !ho(o) && o.constructor !== null && !ho(o.constructor) && L(o.constructor.isBuffer) && o.constructor.isBuffer(o);
}
const he = Y("ArrayBuffer");
function N0(o) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(o) : r = o && o.buffer && he(o.buffer), r;
}
const z0 = Ho("string"), L = Ho("function"), be = Ho("number"), So = (o) => o !== null && typeof o == "object", P0 = (o) => o === !0 || o === !1, Do = (o) => {
  if (Mo(o) !== "object")
    return !1;
  const r = dr(o);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(me in o) && !(Uo in o);
}, D0 = (o) => {
  if (!So(o) || Ro(o))
    return !1;
  try {
    return Object.keys(o).length === 0 && Object.getPrototypeOf(o) === Object.prototype;
  } catch {
    return !1;
  }
}, L0 = Y("Date"), j0 = Y("File"), F0 = Y("Blob"), I0 = Y("FileList"), W0 = (o) => So(o) && L(o.pipe), U0 = (o) => {
  let r;
  return o && (typeof FormData == "function" && o instanceof FormData || L(o.append) && ((r = Mo(o)) === "formdata" || // detect form-data instance
  r === "object" && L(o.toString) && o.toString() === "[object FormData]"));
}, M0 = Y("URLSearchParams"), [H0, q0, V0, J0] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Y), X0 = (o) => o.trim ? o.trim() : o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
    let c;
    for (t = 0; t < a; t++)
      c = i[t], r.call(null, o[c], c, o);
  }
}
function ve(o, r) {
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
const ao = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ye = (o) => !ho(o) && o !== ao;
function ar() {
  const { caseless: o, skipUndefined: r } = ye(this) && this || {}, e = {}, t = (n, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const a = o && ve(e, i) || i;
    Do(e[a]) && Do(n) ? e[a] = ar(e[a], n) : Do(n) ? e[a] = ar({}, n) : bo(n) ? e[a] = n.slice() : (!r || !ho(n)) && (e[a] = n);
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && _o(arguments[n], t);
  return e;
}
const Y0 = (o, r, e, { allOwnKeys: t } = {}) => (_o(
  r,
  (n, i) => {
    e && L(n) ? Object.defineProperty(o, i, {
      value: pe(n, e),
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
), o), K0 = (o) => (o.charCodeAt(0) === 65279 && (o = o.slice(1)), o), G0 = (o, r, e, t) => {
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
}, Z0 = (o, r, e, t) => {
  let n, i, a;
  const c = {};
  if (r = r || {}, o == null) return r;
  do {
    for (n = Object.getOwnPropertyNames(o), i = n.length; i-- > 0; )
      a = n[i], (!t || t(a, o, r)) && !c[a] && (r[a] = o[a], c[a] = !0);
    o = e !== !1 && dr(o);
  } while (o && (!e || e(o, r)) && o !== Object.prototype);
  return r;
}, Q0 = (o, r, e) => {
  o = String(o), (e === void 0 || e > o.length) && (e = o.length), e -= r.length;
  const t = o.indexOf(r, e);
  return t !== -1 && t === e;
}, og = (o) => {
  if (!o) return null;
  if (bo(o)) return o;
  let r = o.length;
  if (!be(r)) return null;
  const e = new Array(r);
  for (; r-- > 0; )
    e[r] = o[r];
  return e;
}, rg = /* @__PURE__ */ ((o) => (r) => o && r instanceof o)(typeof Uint8Array < "u" && dr(Uint8Array)), eg = (o, r) => {
  const t = (o && o[Uo]).call(o);
  let n;
  for (; (n = t.next()) && !n.done; ) {
    const i = n.value;
    r.call(o, i[0], i[1]);
  }
}, tg = (o, r) => {
  let e;
  const t = [];
  for (; (e = o.exec(r)) !== null; )
    t.push(e);
  return t;
}, ng = Y("HTMLFormElement"), ag = (o) => o.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
  return t.toUpperCase() + n;
}), Pr = (({ hasOwnProperty: o }) => (r, e) => o.call(r, e))(Object.prototype), ig = Y("RegExp"), ke = (o, r) => {
  const e = Object.getOwnPropertyDescriptors(o), t = {};
  _o(e, (n, i) => {
    let a;
    (a = r(n, i, o)) !== !1 && (t[i] = a || n);
  }), Object.defineProperties(o, t);
}, cg = (o) => {
  ke(o, (r, e) => {
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
}, sg = (o, r) => {
  const e = {}, t = (n) => {
    n.forEach((i) => {
      e[i] = !0;
    });
  };
  return bo(o) ? t(o) : t(String(o).split(r)), e;
}, lg = () => {
}, dg = (o, r) => o != null && Number.isFinite(o = +o) ? o : r;
function ug(o) {
  return !!(o && L(o.append) && o[me] === "FormData" && o[Uo]);
}
const fg = (o) => {
  const r = new Array(10), e = (t, n) => {
    if (So(t)) {
      if (r.indexOf(t) >= 0)
        return;
      if (Ro(t))
        return t;
      if (!("toJSON" in t)) {
        r[n] = t;
        const i = bo(t) ? [] : {};
        return _o(t, (a, c) => {
          const l = e(a, n + 1);
          !ho(l) && (i[c] = l);
        }), r[n] = void 0, i;
      }
    }
    return t;
  };
  return e(o, 0);
}, gg = Y("AsyncFunction"), pg = (o) => o && (So(o) || L(o)) && L(o.then) && L(o.catch), we = ((o, r) => o ? setImmediate : r ? ((e, t) => (ao.addEventListener(
  "message",
  ({ source: n, data: i }) => {
    n === ao && i === e && t.length && t.shift()();
  },
  !1
), (n) => {
  t.push(n), ao.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", L(ao.postMessage)), mg = typeof queueMicrotask < "u" ? queueMicrotask.bind(ao) : typeof process < "u" && process.nextTick || we, hg = (o) => o != null && L(o[Uo]), u = {
  isArray: bo,
  isArrayBuffer: he,
  isBuffer: Ro,
  isFormData: U0,
  isArrayBufferView: N0,
  isString: z0,
  isNumber: be,
  isBoolean: P0,
  isObject: So,
  isPlainObject: Do,
  isEmptyObject: D0,
  isReadableStream: H0,
  isRequest: q0,
  isResponse: V0,
  isHeaders: J0,
  isUndefined: ho,
  isDate: L0,
  isFile: j0,
  isBlob: F0,
  isRegExp: ig,
  isFunction: L,
  isStream: W0,
  isURLSearchParams: M0,
  isTypedArray: rg,
  isFileList: I0,
  forEach: _o,
  merge: ar,
  extend: Y0,
  trim: X0,
  stripBOM: K0,
  inherits: G0,
  toFlatObject: Z0,
  kindOf: Mo,
  kindOfTest: Y,
  endsWith: Q0,
  toArray: og,
  forEachEntry: eg,
  matchAll: tg,
  isHTMLForm: ng,
  hasOwnProperty: Pr,
  hasOwnProp: Pr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ke,
  freezeMethods: cg,
  toObjectSet: sg,
  toCamelCase: ag,
  noop: lg,
  toFiniteNumber: dg,
  findKey: ve,
  global: ao,
  isContextDefined: ye,
  isSpecCompliantForm: ug,
  toJSONObject: fg,
  isAsyncFn: gg,
  isThenable: pg,
  setImmediate: we,
  asap: mg,
  isIterable: hg
};
let v = class xe extends Error {
  static from(r, e, t, n, i, a) {
    const c = new xe(r.message, e || r.code, t, n, i);
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
const bg = null;
function ir(o) {
  return u.isPlainObject(o) || u.isArray(o);
}
function Ce(o) {
  return u.endsWith(o, "[]") ? o.slice(0, -2) : o;
}
function Dr(o, r, e) {
  return o ? o.concat(r).map(function(n, i) {
    return n = Ce(n), !e && i ? "[" + n + "]" : n;
  }).join(e ? "." : "") : r;
}
function vg(o) {
  return u.isArray(o) && !o.some(ir);
}
const yg = u.toFlatObject(u, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function qo(o, r, e) {
  if (!u.isObject(o))
    throw new TypeError("target must be an object");
  r = r || new FormData(), e = u.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, p) {
    return !u.isUndefined(p[h]);
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
  function d(f, h, p) {
    let y = f;
    if (f && !p && typeof f == "object") {
      if (u.endsWith(h, "{}"))
        h = t ? h : h.slice(0, -2), f = JSON.stringify(f);
      else if (u.isArray(f) && vg(f) || (u.isFileList(f) || u.endsWith(h, "[]")) && (y = u.toArray(f)))
        return h = Ce(h), y.forEach(function(w, x) {
          !(u.isUndefined(w) || w === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Dr([h], x, i) : a === null ? h : h + "[]",
            s(w)
          );
        }), !1;
    }
    return ir(f) ? !0 : (r.append(Dr(p, h, i), s(f)), !1);
  }
  const g = [], m = Object.assign(yg, {
    defaultVisitor: d,
    convertValue: s,
    isVisitable: ir
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
          m
        )) === !0 && b(y, h ? h.concat(k) : [k]);
      }), g.pop();
    }
  }
  if (!u.isObject(o))
    throw new TypeError("data must be an object");
  return b(o), r;
}
function Lr(o) {
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
function ur(o, r) {
  this._pairs = [], o && qo(o, this, r);
}
const $e = ur.prototype;
$e.append = function(r, e) {
  this._pairs.push([r, e]);
};
$e.toString = function(r) {
  const e = r ? function(t) {
    return r.call(this, t, Lr);
  } : Lr;
  return this._pairs.map(function(n) {
    return e(n[0]) + "=" + e(n[1]);
  }, "").join("&");
};
function kg(o) {
  return encodeURIComponent(o).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Be(o, r, e) {
  if (!r)
    return o;
  const t = e && e.encode || kg, n = u.isFunction(e) ? {
    serialize: e
  } : e, i = n && n.serialize;
  let a;
  if (i ? a = i(r, n) : a = u.isURLSearchParams(r) ? r.toString() : new ur(r, n).toString(t), a) {
    const c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}
class jr {
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
const fr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, wg = typeof URLSearchParams < "u" ? URLSearchParams : ur, xg = typeof FormData < "u" ? FormData : null, Cg = typeof Blob < "u" ? Blob : null, $g = {
  isBrowser: !0,
  classes: {
    URLSearchParams: wg,
    FormData: xg,
    Blob: Cg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, gr = typeof window < "u" && typeof document < "u", cr = typeof navigator == "object" && navigator || void 0, Bg = gr && (!cr || ["ReactNative", "NativeScript", "NS"].indexOf(cr.product) < 0), Rg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Sg = gr && window.location.href || "http://localhost", _g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: gr,
  hasStandardBrowserEnv: Bg,
  hasStandardBrowserWebWorkerEnv: Rg,
  navigator: cr,
  origin: Sg
}, Symbol.toStringTag, { value: "Module" })), N = {
  ..._g,
  ...$g
};
function Og(o, r) {
  return qo(o, new N.classes.URLSearchParams(), {
    visitor: function(e, t, n, i) {
      return N.isNode && u.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function Eg(o) {
  return u.matchAll(/\w+|\[(\w*)]/g, o).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Tg(o) {
  const r = {}, e = Object.keys(o);
  let t;
  const n = e.length;
  let i;
  for (t = 0; t < n; t++)
    i = e[t], r[i] = o[i];
  return r;
}
function Re(o) {
  function r(e, t, n, i) {
    let a = e[i++];
    if (a === "__proto__") return !0;
    const c = Number.isFinite(+a), l = i >= e.length;
    return a = !a && u.isArray(n) ? n.length : a, l ? (u.hasOwnProp(n, a) ? n[a] = [n[a], t] : n[a] = t, !c) : ((!n[a] || !u.isObject(n[a])) && (n[a] = []), r(e, t, n[a], i) && u.isArray(n[a]) && (n[a] = Tg(n[a])), !c);
  }
  if (u.isFormData(o) && u.isFunction(o.entries)) {
    const e = {};
    return u.forEachEntry(o, (t, n) => {
      r(Eg(t), n, e, 0);
    }), e;
  }
  return null;
}
function Ag(o, r, e) {
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
  transitional: fr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, e) {
    const t = e.getContentType() || "", n = t.indexOf("application/json") > -1, i = u.isObject(r);
    if (i && u.isHTMLForm(r) && (r = new FormData(r)), u.isFormData(r))
      return n ? JSON.stringify(Re(r)) : r;
    if (u.isArrayBuffer(r) || u.isBuffer(r) || u.isStream(r) || u.isFile(r) || u.isBlob(r) || u.isReadableStream(r))
      return r;
    if (u.isArrayBufferView(r))
      return r.buffer;
    if (u.isURLSearchParams(r))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let c;
    if (i) {
      if (t.indexOf("application/x-www-form-urlencoded") > -1)
        return Og(r, this.formSerializer).toString();
      if ((c = u.isFileList(r)) || t.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return qo(
          c ? { "files[]": r } : r,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || n ? (e.setContentType("application/json", !1), Ag(r)) : r;
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
const Ng = u.toObjectSet([
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
  const r = {};
  let e, t, n;
  return o && o.split(`
`).forEach(function(a) {
    n = a.indexOf(":"), e = a.substring(0, n).trim().toLowerCase(), t = a.substring(n + 1).trim(), !(!e || r[e] && Ng[e]) && (e === "set-cookie" ? r[e] ? r[e].push(t) : r[e] = [t] : r[e] = r[e] ? r[e] + ", " + t : t);
  }), r;
}, Fr = /* @__PURE__ */ Symbol("internals");
function yo(o) {
  return o && String(o).trim().toLowerCase();
}
function Lo(o) {
  return o === !1 || o == null ? o : u.isArray(o) ? o.map(Lo) : String(o);
}
function Pg(o) {
  const r = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let t;
  for (; t = e.exec(o); )
    r[t[1]] = t[2];
  return r;
}
const Dg = (o) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(o.trim());
function Zo(o, r, e, t, n) {
  if (u.isFunction(t))
    return t.call(this, r, e);
  if (n && (r = e), !!u.isString(r)) {
    if (u.isString(t))
      return r.indexOf(t) !== -1;
    if (u.isRegExp(t))
      return t.test(r);
  }
}
function Lg(o) {
  return o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, e, t) => e.toUpperCase() + t);
}
function jg(o, r) {
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
    else if (u.isString(r) && (r = r.trim()) && !Dg(r))
      a(zg(r), e);
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
          return Pg(n);
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
      return !!(t && this[t] !== void 0 && (!e || Zo(this, this[t], t, e)));
    }
    return !1;
  }
  delete(r, e) {
    const t = this;
    let n = !1;
    function i(a) {
      if (a = yo(a), a) {
        const c = u.findKey(t, a);
        c && (!e || Zo(t, t[c], c, e)) && (delete t[c], n = !0);
      }
    }
    return u.isArray(r) ? r.forEach(i) : i(r), n;
  }
  clear(r) {
    const e = Object.keys(this);
    let t = e.length, n = !1;
    for (; t--; ) {
      const i = e[t];
      (!r || Zo(this, this[i], i, r, !0)) && (delete this[i], n = !0);
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
      const c = r ? Lg(i) : String(i).trim();
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
    const t = (this[Fr] = this[Fr] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function i(a) {
      const c = yo(a);
      t[c] || (jg(n, a), t[c] = !0);
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
function Qo(o, r) {
  const e = this || Oo, t = r || e, n = j.from(t.headers);
  let i = t.data;
  return u.forEach(o, function(c) {
    i = c.call(e, i, n.normalize(), r ? r.status : void 0);
  }), n.normalize(), i;
}
function Se(o) {
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
function _e(o, r, e) {
  const t = e.config.validateStatus;
  !e.status || !t || t(e.status) ? o(e) : r(new v(
    "Request failed with status code " + e.status,
    [v.ERR_BAD_REQUEST, v.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
function Fg(o) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
  return r && r[1] || "";
}
function Ig(o, r) {
  o = o || 10;
  const e = new Array(o), t = new Array(o);
  let n = 0, i = 0, a;
  return r = r !== void 0 ? r : 1e3, function(l) {
    const s = Date.now(), d = t[i];
    a || (a = s), e[n] = l, t[n] = s;
    let g = i, m = 0;
    for (; g !== n; )
      m += e[g++], g = g % o;
    if (n = (n + 1) % o, n === i && (i = (i + 1) % o), s - a < r)
      return;
    const b = d && s - d;
    return b ? Math.round(m * 1e3 / b) : void 0;
  };
}
function Wg(o, r) {
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
  const n = Ig(50, 250);
  return Wg((i) => {
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
}, Ir = (o, r) => {
  const e = o != null;
  return [(t) => r[0]({
    lengthComputable: e,
    total: o,
    loaded: t
  }), r[1]];
}, Wr = (o) => (...r) => u.asap(() => o(...r)), Ug = N.hasStandardBrowserEnv ? /* @__PURE__ */ ((o, r) => (e) => (e = new URL(e, N.origin), o.protocol === e.protocol && o.host === e.host && (r || o.port === e.port)))(
  new URL(N.origin),
  N.navigator && /(msie|trident)/i.test(N.navigator.userAgent)
) : () => !0, Mg = N.hasStandardBrowserEnv ? (
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
function Hg(o) {
  return typeof o != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}
function qg(o, r) {
  return r ? o.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : o;
}
function Oe(o, r, e) {
  let t = !Hg(r);
  return o && (t || e == !1) ? qg(o, r) : r;
}
const Ur = (o) => o instanceof j ? { ...o } : o;
function uo(o, r) {
  r = r || {};
  const e = {};
  function t(s, d, g, m) {
    return u.isPlainObject(s) && u.isPlainObject(d) ? u.merge.call({ caseless: m }, s, d) : u.isPlainObject(d) ? u.merge({}, d) : u.isArray(d) ? d.slice() : d;
  }
  function n(s, d, g, m) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(s))
        return t(void 0, s, g, m);
    } else return t(s, d, g, m);
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
    headers: (s, d, g) => n(Ur(s), Ur(d), g, !0)
  };
  return u.forEach(
    Object.keys({ ...o, ...r }),
    function(d) {
      if (d === "__proto__" || d === "constructor" || d === "prototype")
        return;
      const g = u.hasOwnProp(l, d) ? l[d] : n, m = g(o[d], r[d], d);
      u.isUndefined(m) && g !== c || (e[d] = m);
    }
  ), e;
}
const Ee = (o) => {
  const r = uo({}, o);
  let { data: e, withXSRFToken: t, xsrfHeaderName: n, xsrfCookieName: i, headers: a, auth: c } = r;
  if (r.headers = a = j.from(a), r.url = Be(Oe(r.baseURL, r.url, r.allowAbsoluteUrls), o.params, o.paramsSerializer), c && a.set(
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
  if (N.hasStandardBrowserEnv && (t && u.isFunction(t) && (t = t(r)), t || t !== !1 && Ug(r.url))) {
    const l = n && i && Mg.read(i);
    l && a.set(n, l);
  }
  return r;
}, Vg = typeof XMLHttpRequest < "u", Jg = Vg && function(o) {
  return new Promise(function(e, t) {
    const n = Ee(o);
    let i = n.data;
    const a = j.from(n.headers).normalize();
    let { responseType: c, onUploadProgress: l, onDownloadProgress: s } = n, d, g, m, b, f;
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
        data: !c || c === "text" || c === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: w,
        config: o,
        request: p
      };
      _e(function(C) {
        e(C), h();
      }, function(C) {
        t(C), h();
      }, _), p = null;
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
      const _ = n.transitional || fr;
      n.timeoutErrorMessage && (x = n.timeoutErrorMessage), t(new v(
        x,
        _.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED,
        o,
        p
      )), p = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in p && u.forEach(a.toJSON(), function(x, _) {
      p.setRequestHeader(_, x);
    }), u.isUndefined(n.withCredentials) || (p.withCredentials = !!n.withCredentials), c && c !== "json" && (p.responseType = n.responseType), s && ([m, f] = Wo(s, !0), p.addEventListener("progress", m)), l && p.upload && ([g, b] = Wo(l), p.upload.addEventListener("progress", g), p.upload.addEventListener("loadend", b)), (n.cancelToken || n.signal) && (d = (w) => {
      p && (t(!w || w.type ? new Eo(null, o, p) : w), p.abort(), p = null);
    }, n.cancelToken && n.cancelToken.subscribe(d), n.signal && (n.signal.aborted ? d() : n.signal.addEventListener("abort", d)));
    const k = Fg(n.url);
    if (k && N.protocols.indexOf(k) === -1) {
      t(new v("Unsupported protocol " + k + ":", v.ERR_BAD_REQUEST, o));
      return;
    }
    p.send(i || null);
  });
}, Xg = (o, r) => {
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
}, Yg = function* (o, r) {
  let e = o.byteLength;
  if (e < r) {
    yield o;
    return;
  }
  let t = 0, n;
  for (; t < e; )
    n = t + r, yield o.slice(t, n), t = n;
}, Kg = async function* (o, r) {
  for await (const e of Gg(o))
    yield* Yg(e, r);
}, Gg = async function* (o) {
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
}, Mr = (o, r, e, t) => {
  const n = Kg(o, r);
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
          let m = i += g;
          e(m);
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
}, Hr = 64 * 1024, { isFunction: Po } = u, Zg = (({ Request: o, Response: r }) => ({
  Request: o,
  Response: r
}))(u.global), {
  ReadableStream: qr,
  TextEncoder: Vr
} = u.global, Jr = (o, ...r) => {
  try {
    return !!o(...r);
  } catch {
    return !1;
  }
}, Qg = (o) => {
  o = u.merge.call({
    skipUndefined: !0
  }, Zg, o);
  const { fetch: r, Request: e, Response: t } = o, n = r ? Po(r) : typeof fetch == "function", i = Po(e), a = Po(t);
  if (!n)
    return !1;
  const c = n && Po(qr), l = n && (typeof Vr == "function" ? /* @__PURE__ */ ((f) => (h) => f.encode(h))(new Vr()) : async (f) => new Uint8Array(await new e(f).arrayBuffer())), s = i && c && Jr(() => {
    let f = !1;
    const h = new e(N.origin, {
      body: new qr(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !h;
  }), d = a && c && Jr(() => u.isReadableStream(new t("").body)), g = {
    stream: d && ((f) => f.body)
  };
  n && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !g[f] && (g[f] = (h, p) => {
      let y = h && h[f];
      if (y)
        return y.call(h);
      throw new v(`Response type '${f}' is not supported`, v.ERR_NOT_SUPPORT, p);
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
    } = Ee(f), H = r || fetch;
    C = C ? (C + "").toLowerCase() : "text";
    let U = Xg([k, w && w.toAbortSignal()], x), I = null;
    const E = U && U.unsubscribe && (() => {
      U.unsubscribe();
    });
    let G;
    try {
      if (z && s && p !== "get" && p !== "head" && (G = await b(W, y)) !== 0) {
        let S = new e(h, {
          method: "POST",
          body: y,
          duplex: "half"
        }), D;
        if (u.isFormData(y) && (D = S.headers.get("content-type")) && W.setContentType(D), S.body) {
          const [to, V] = Ir(
            G,
            Wo(Wr(z))
          );
          y = Mr(S.body, Hr, to, V);
        }
      }
      u.isString(F) || (F = F ? "include" : "omit");
      const $ = i && "credentials" in e.prototype, Z = {
        ...K,
        signal: U,
        method: p.toUpperCase(),
        headers: W.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: $ ? F : void 0
      };
      I = i && new e(h, Z);
      let P = await (i ? H(I, K) : H(h, Z));
      const oo = d && (C === "stream" || C === "response");
      if (d && (_ || oo && E)) {
        const S = {};
        ["status", "statusText", "headers"].forEach((vo) => {
          S[vo] = P[vo];
        });
        const D = u.toFiniteNumber(P.headers.get("content-length")), [to, V] = _ && Ir(
          D,
          Wo(Wr(_), !0)
        ) || [];
        P = new t(
          Mr(P.body, Hr, to, () => {
            V && V(), E && E();
          }),
          S
        );
      }
      C = C || "text";
      let q = await g[u.findKey(g, C) || "text"](P, f);
      return !oo && E && E(), await new Promise((S, D) => {
        _e(S, D, {
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
}, op = /* @__PURE__ */ new Map(), Te = (o) => {
  let r = o && o.env || {};
  const { fetch: e, Request: t, Response: n } = r, i = [
    t,
    n,
    e
  ];
  let a = i.length, c = a, l, s, d = op;
  for (; c--; )
    l = i[c], s = d.get(l), s === void 0 && d.set(l, s = c ? /* @__PURE__ */ new Map() : Qg(r)), d = s;
  return s;
};
Te();
const pr = {
  http: bg,
  xhr: Jg,
  fetch: {
    get: Te
  }
};
u.forEach(pr, (o, r) => {
  if (o) {
    try {
      Object.defineProperty(o, "name", { value: r });
    } catch {
    }
    Object.defineProperty(o, "adapterName", { value: r });
  }
});
const Xr = (o) => `- ${o}`, rp = (o) => u.isFunction(o) || o === null || o === !1;
function ep(o, r) {
  o = u.isArray(o) ? o : [o];
  const { length: e } = o;
  let t, n;
  const i = {};
  for (let a = 0; a < e; a++) {
    t = o[a];
    let c;
    if (n = t, !rp(t) && (n = pr[(c = String(t)).toLowerCase()], n === void 0))
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
` + a.map(Xr).join(`
`) : " " + Xr(a[0]) : "as no adapter specified";
    throw new v(
      "There is no suitable adapter to dispatch the request " + c,
      "ERR_NOT_SUPPORT"
    );
  }
  return n;
}
const Ae = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: ep,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: pr
};
function or(o) {
  if (o.cancelToken && o.cancelToken.throwIfRequested(), o.signal && o.signal.aborted)
    throw new Eo(null, o);
}
function Yr(o) {
  return or(o), o.headers = j.from(o.headers), o.data = Qo.call(
    o,
    o.transformRequest
  ), ["post", "put", "patch"].indexOf(o.method) !== -1 && o.headers.setContentType("application/x-www-form-urlencoded", !1), Ae.getAdapter(o.adapter || Oo.adapter, o)(o).then(function(t) {
    return or(o), t.data = Qo.call(
      o,
      o.transformResponse,
      t
    ), t.headers = j.from(t.headers), t;
  }, function(t) {
    return Se(t) || (or(o), t && t.response && (t.response.data = Qo.call(
      o,
      o.transformResponse,
      t.response
    ), t.response.headers = j.from(t.response.headers))), Promise.reject(t);
  });
}
const Ne = "1.13.5", Vo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((o, r) => {
  Vo[o] = function(t) {
    return typeof t === o || "a" + (r < 1 ? "n " : " ") + o;
  };
});
const Kr = {};
Vo.transitional = function(r, e, t) {
  function n(i, a) {
    return "[Axios v" + Ne + "] Transitional option '" + i + "'" + a + (t ? ". " + t : "");
  }
  return (i, a, c) => {
    if (r === !1)
      throw new v(
        n(a, " has been removed" + (e ? " in " + e : "")),
        v.ERR_DEPRECATED
      );
    return e && !Kr[a] && (Kr[a] = !0, console.warn(
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
function tp(o, r, e) {
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
  assertOptions: tp,
  validators: Vo
}, M = jo.validators;
let lo = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new jr(),
      response: new jr()
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
      silentJSONParsing: M.transitional(M.boolean),
      forcedJSONParsing: M.transitional(M.boolean),
      clarifyTimeoutError: M.transitional(M.boolean),
      legacyInterceptorReqResOrdering: M.transitional(M.boolean)
    }, !1), n != null && (u.isFunction(n) ? e.paramsSerializer = {
      serialize: n
    } : jo.assertOptions(n, {
      encode: M.function,
      serialize: M.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), jo.assertOptions(e, {
      baseUrl: M.spelling("baseURL"),
      withXsrfToken: M.spelling("withXSRFToken")
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
      const p = e.transitional || fr;
      p && p.legacyInterceptorReqResOrdering ? c.unshift(h.fulfilled, h.rejected) : c.push(h.fulfilled, h.rejected);
    });
    const s = [];
    this.interceptors.response.forEach(function(h) {
      s.push(h.fulfilled, h.rejected);
    });
    let d, g = 0, m;
    if (!l) {
      const f = [Yr.bind(this), void 0];
      for (f.unshift(...c), f.push(...s), m = f.length, d = Promise.resolve(e); g < m; )
        d = d.then(f[g++], f[g++]);
      return d;
    }
    m = c.length;
    let b = e;
    for (; g < m; ) {
      const f = c[g++], h = c[g++];
      try {
        b = f(b);
      } catch (p) {
        h.call(this, p);
        break;
      }
    }
    try {
      d = Yr.call(this, b);
    } catch (f) {
      return Promise.reject(f);
    }
    for (g = 0, m = s.length; g < m; )
      d = d.then(s[g++], s[g++]);
    return d;
  }
  getUri(r) {
    r = uo(this.defaults, r);
    const e = Oe(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Be(e, r.params, r.paramsSerializer);
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
let np = class ze {
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
      token: new ze(function(n) {
        r = n;
      }),
      cancel: r
    };
  }
};
function ap(o) {
  return function(e) {
    return o.apply(null, e);
  };
}
function ip(o) {
  return u.isObject(o) && o.isAxiosError === !0;
}
const sr = {
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
Object.entries(sr).forEach(([o, r]) => {
  sr[r] = o;
});
function Pe(o) {
  const r = new lo(o), e = pe(lo.prototype.request, r);
  return u.extend(e, lo.prototype, r, { allOwnKeys: !0 }), u.extend(e, r, null, { allOwnKeys: !0 }), e.create = function(n) {
    return Pe(uo(o, n));
  }, e;
}
const R = Pe(Oo);
R.Axios = lo;
R.CanceledError = Eo;
R.CancelToken = np;
R.isCancel = Se;
R.VERSION = Ne;
R.toFormData = qo;
R.AxiosError = v;
R.Cancel = R.CanceledError;
R.all = function(r) {
  return Promise.all(r);
};
R.spread = ap;
R.isAxiosError = ip;
R.mergeConfig = uo;
R.AxiosHeaders = j;
R.formToJSON = (o) => Re(u.isHTMLForm(o) ? new FormData(o) : o);
R.getAdapter = Ae.getAdapter;
R.HttpStatusCode = sr;
R.default = R;
const {
  Axios: yp,
  AxiosError: kp,
  CanceledError: wp,
  isCancel: xp,
  CancelToken: Cp,
  VERSION: $p,
  all: Bp,
  Cancel: Rp,
  isAxiosError: Sp,
  spread: _p,
  toFormData: Op,
  AxiosHeaders: Ep,
  HttpStatusCode: Tp,
  formToJSON: Ap,
  getAdapter: Np,
  mergeConfig: zp
} = R;
function cp() {
  const o = Q(!1), r = Q(null);
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
const sp = { key: 0 }, lp = ["innerHTML"], dp = {
  key: 1,
  class: "mt-2 text-xs flex items-center gap-2"
}, up = { class: "text-blue-500 truncate max-w-xs" }, fp = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=upload_collection", gp = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", pp = /* @__PURE__ */ tt({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(o) {
    const r = Q([]), e = Q(""), t = Q(""), { post: n, error: i } = cp(), a = async (s, d = "info") => {
      await S0("msg", {
        type: "show",
        _p: {},
        _$p: {},
        custom: {
          msg: s,
          options: {
            type: d,
            position: "top-right",
            autoClose: 3e3,
            theme: "light"
          }
        }
      });
    }, c = async () => {
      if (!r.value.length) {
        a("Please select a file first", "warn");
        return;
      }
      const s = r.value[0], d = new FormData();
      d.append("file", s), t.value && d.append("collection", t.value), a("Uploading...", "info");
      const g = await n(fp, d, gp);
      if (!g)
        return a(`Error: ${i.value || "Upload failed"}`, "error"), console.log("Error uploading collection:", i.value);
      console.log("Collection upload response:", g), e.value = g.message || "Upload Successful", a("File uploaded successfully!", "success");
    }, l = Q(null);
    return Gr(() => {
      (async () => {
        let s = "", d = {
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
        const g = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
          }
        }, m = await E0(g), b = await T0(g);
        O0("child:msg", async (h) => {
          h.type === "fileUpload:uploader" && (r.value = h.custom?.event?.files || []), h.type === "inputText:value" && h._$p.data.curr.id === "input-collection-id" && (t.value = h.custom.value), h.type === "click" && c();
        }), await (async () => {
          const h = await m.set({ data: d });
          l.value = h.r || "", s = h.style;
          const p = document.createElement("style");
          document.head.appendChild(p), p.innerHTML = s, setTimeout(async () => {
            await b.set({ data: d });
          }, 200);
        })();
      })();
    }), (s, d) => (Jo(), Xo(at, null, [
      l.value ? (Jo(), Xo("div", sp, [
        Yo("div", { innerHTML: l.value }, null, 8, lp)
      ])) : br("", !0),
      e.value ? (Jo(), Xo("div", dp, [
        d[0] || (d[0] = Yo("span", { class: "text-gray-400" }, "Response:", -1)),
        Yo("span", up, nt(e.value), 1)
      ])) : br("", !0)
    ], 64));
  }
}), Pp = async (o) => ({
  set: async (r) => {
    console.log(`--hydrator [${r.data.curr.type}]`);
    const t = it(pp, {
      _p: o,
      _$p: r
    });
    t.use(on, {
      theme: {
        preset: $0
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
  Pp as hydrator,
  Pp as index
};
