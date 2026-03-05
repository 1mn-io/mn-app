import { r as Gt, g as Ze, o as pe, n as me, w as Lo, a as M, b as mo, d as Wo, m as ho, t as to, c as Ir, e as zr, f as A, F as Kt, h as D, i as Go, j as re, k as Dr, l as Zt, p as Qt, q as on, s as en, u as rn } from "./runtime-dom.esm-bundler-NOJ84XNJ.js";
var tn = Object.defineProperty, Qe = Object.getOwnPropertySymbols, nn = Object.prototype.hasOwnProperty, an = Object.prototype.propertyIsEnumerable, or = (o, e, r) => e in o ? tn(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, sn = (o, e) => {
  for (var r in e || (e = {})) nn.call(e, r) && or(o, r, e[r]);
  if (Qe) for (var r of Qe(e)) an.call(e, r) && or(o, r, e[r]);
  return o;
};
function qe(o) {
  return o == null || o === "" || Array.isArray(o) && o.length === 0 || !(o instanceof Date) && typeof o == "object" && Object.keys(o).length === 0;
}
function ln(o) {
  return typeof o == "function" && "call" in o && "apply" in o;
}
function _(o) {
  return !qe(o);
}
function yo(o, e = !0) {
  return o instanceof Object && o.constructor === Object && (e || Object.keys(o).length !== 0);
}
function jr(o = {}, e = {}) {
  let r = sn({}, o);
  return Object.keys(e).forEach((t) => {
    let n = t;
    yo(e[n]) && n in o && yo(o[n]) ? r[n] = jr(o[n], e[n]) : r[n] = e[n];
  }), r;
}
function cn(...o) {
  return o.reduce((e, r, t) => t === 0 ? r : jr(e, r), {});
}
function po(o, ...e) {
  return ln(o) ? o(...e) : o;
}
function Eo(o, e = !0) {
  return typeof o == "string" && (e || o !== "");
}
function dn(o) {
  return _(o) && !isNaN(o);
}
function ko(o, e) {
  if (e) {
    let r = e.test(o);
    return e.lastIndex = 0, r;
  }
  return !1;
}
function un(...o) {
  return cn(...o);
}
function Io(o) {
  return o && o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function Fr(o) {
  return Eo(o) ? o.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : o;
}
function Mr() {
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
function fn(o) {
  if (o) {
    let e = o.parentNode;
    return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
  }
  return null;
}
function gn(o) {
  return !!(o !== null && typeof o < "u" && o.nodeName && fn(o));
}
function Ur(o) {
  return typeof Element < "u" ? o instanceof Element : o !== null && typeof o == "object" && o.nodeType === 1 && typeof o.nodeName == "string";
}
function Te(o, e = {}) {
  if (Ur(o)) {
    let r = (t, n) => {
      var a, i;
      let s = (a = o?.$attrs) != null && a[t] ? [(i = o?.$attrs) == null ? void 0 : i[t]] : [];
      return [n].flat().reduce((l, c) => {
        if (c != null) {
          let d = typeof c;
          if (d === "string" || d === "number") l.push(c);
          else if (d === "object") {
            let g = Array.isArray(c) ? r(t, c) : Object.entries(c).map(([p, m]) => t === "style" && (m || m === 0) ? `${p.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${m}` : m ? p : void 0);
            l = g.length ? l.concat(g.filter((p) => !!p)) : l;
          }
        }
        return l;
      }, s);
    };
    Object.entries(e).forEach(([t, n]) => {
      if (n != null) {
        let a = t.match(/^on(.+)/);
        a ? o.addEventListener(a[1].toLowerCase(), n) : t === "p-bind" || t === "pBind" ? Te(o, n) : (n = t === "class" ? [...new Set(r("class", n))].join(" ").trim() : t === "style" ? r("style", n).join(";").trim() : n, (o.$attrs = o.$attrs || {}) && (o.$attrs[t] = n), o.setAttribute(t, n));
      }
    });
  }
}
function pn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function mn(o, e = "", r) {
  Ur(o) && r !== null && r !== void 0 && o.setAttribute(e, r);
}
var hn = Object.defineProperty, bn = Object.defineProperties, vn = Object.getOwnPropertyDescriptors, de = Object.getOwnPropertySymbols, Wr = Object.prototype.hasOwnProperty, qr = Object.prototype.propertyIsEnumerable, er = (o, e, r) => e in o ? hn(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, ro = (o, e) => {
  for (var r in e || (e = {})) Wr.call(e, r) && er(o, r, e[r]);
  if (de) for (var r of de(e)) qr.call(e, r) && er(o, r, e[r]);
  return o;
}, $e = (o, e) => bn(o, vn(e)), uo = (o, e) => {
  var r = {};
  for (var t in o) Wr.call(o, t) && e.indexOf(t) < 0 && (r[t] = o[t]);
  if (o != null && de) for (var t of de(o)) e.indexOf(t) < 0 && qr.call(o, t) && (r[t] = o[t]);
  return r;
}, yn = Mr(), fo = yn, Do = /{([^}]*)}/g, Hr = /(\d+\s+[\+\-\*\/]\s+\d+)/g, Vr = /var\([^)]+\)/g;
function rr(o) {
  return Eo(o) ? o.replace(/[A-Z]/g, (e, r) => r === 0 ? e : "." + e.toLowerCase()).toLowerCase() : o;
}
function kn(o) {
  return yo(o) && o.hasOwnProperty("$value") && o.hasOwnProperty("$type") ? o.$value : o;
}
function wn(o) {
  return o.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Ae(o = "", e = "") {
  return wn(`${Eo(o, !1) && Eo(e, !1) ? `${o}-` : o}${e}`);
}
function Jr(o = "", e = "") {
  return `--${Ae(o, e)}`;
}
function Cn(o = "") {
  let e = (o.match(/{/g) || []).length, r = (o.match(/}/g) || []).length;
  return (e + r) % 2 !== 0;
}
function Xr(o, e = "", r = "", t = [], n) {
  if (Eo(o)) {
    let a = o.trim();
    if (Cn(a)) return;
    if (ko(a, Do)) {
      let i = a.replaceAll(Do, (s) => {
        let l = s.replace(/{|}/g, "").split(".").filter((c) => !t.some((d) => ko(c, d)));
        return `var(${Jr(r, Fr(l.join("-")))}${_(n) ? `, ${n}` : ""})`;
      });
      return ko(i.replace(Vr, "0"), Hr) ? `calc(${i})` : i;
    }
    return a;
  } else if (dn(o)) return o;
}
function xn(o, e, r) {
  Eo(e, !1) && o.push(`${e}:${r};`);
}
function So(o, e) {
  return o ? `${o}{${e}}` : "";
}
function Yr(o, e) {
  if (o.indexOf("dt(") === -1) return o;
  function r(i, s) {
    let l = [], c = 0, d = "", g = null, p = 0;
    for (; c <= i.length; ) {
      let m = i[c];
      if ((m === '"' || m === "'" || m === "`") && i[c - 1] !== "\\" && (g = g === m ? null : m), !g && (m === "(" && p++, m === ")" && p--, (m === "," || c === i.length) && p === 0)) {
        let u = d.trim();
        u.startsWith("dt(") ? l.push(Yr(u, s)) : l.push(t(u)), d = "", c++;
        continue;
      }
      m !== void 0 && (d += m), c++;
    }
    return l;
  }
  function t(i) {
    let s = i[0];
    if ((s === '"' || s === "'" || s === "`") && i[i.length - 1] === s) return i.slice(1, -1);
    let l = Number(i);
    return isNaN(l) ? i : l;
  }
  let n = [], a = [];
  for (let i = 0; i < o.length; i++) if (o[i] === "d" && o.slice(i, i + 3) === "dt(") a.push(i), i += 2;
  else if (o[i] === ")" && a.length > 0) {
    let s = a.pop();
    a.length === 0 && n.push([s, i]);
  }
  if (!n.length) return o;
  for (let i = n.length - 1; i >= 0; i--) {
    let [s, l] = n[i], c = o.slice(s + 3, l), d = r(c, e), g = e(...d);
    o = o.slice(0, s) + g + o.slice(l + 1);
  }
  return o;
}
var wo = (...o) => $n(z.getTheme(), ...o), $n = (o = {}, e, r, t) => {
  if (e) {
    let { variable: n, options: a } = z.defaults || {}, { prefix: i, transform: s } = o?.options || a || {}, l = ko(e, Do) ? e : `{${e}}`;
    return t === "value" || qe(t) && s === "strict" ? z.getTokenValue(e) : Xr(l, void 0, i, [n.excludedKeyRegex], r);
  }
  return "";
};
function Ko(o, ...e) {
  if (o instanceof Array) {
    let r = o.reduce((t, n, a) => {
      var i;
      return t + n + ((i = po(e[a], { dt: wo })) != null ? i : "");
    }, "");
    return Yr(r, wo);
  }
  return po(o, { dt: wo });
}
function Sn(o, e = {}) {
  let r = z.defaults.variable, { prefix: t = r.prefix, selector: n = r.selector, excludedKeyRegex: a = r.excludedKeyRegex } = e, i = [], s = [], l = [{ node: o, path: t }];
  for (; l.length; ) {
    let { node: d, path: g } = l.pop();
    for (let p in d) {
      let m = d[p], u = kn(m), b = ko(p, a) ? Ae(g) : Ae(g, Fr(p));
      if (yo(u)) l.push({ node: u, path: b });
      else {
        let h = Jr(b), v = Xr(u, b, t, [a]);
        xn(s, h, v);
        let k = b;
        t && k.startsWith(t + "-") && (k = k.slice(t.length + 1)), i.push(k.replace(/-/g, "."));
      }
    }
  }
  let c = s.join("");
  return { value: s, tokens: i, declarations: c, css: So(n, c) };
}
var eo = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(o) {
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
  return Sn(o, { prefix: e?.prefix });
}, getCommon({ name: o = "", theme: e = {}, params: r, set: t, defaults: n }) {
  var a, i, s, l, c, d, g;
  let { preset: p, options: m } = e, u, b, h, v, k, w, x;
  if (_(p) && m.transform !== "strict") {
    let { primitive: S, semantic: B, extend: R } = p, Y = B || {}, { colorScheme: V } = Y, ao = uo(Y, ["colorScheme"]), Z = R || {}, { colorScheme: G } = Z, J = uo(Z, ["colorScheme"]), L = V || {}, { dark: io } = L, E = uo(L, ["dark"]), so = G || {}, { dark: F } = so, co = uo(so, ["dark"]), Q = _(S) ? this._toVariables({ primitive: S }, m) : {}, T = _(ao) ? this._toVariables({ semantic: ao }, m) : {}, W = _(E) ? this._toVariables({ light: E }, m) : {}, go = _(io) ? this._toVariables({ dark: io }, m) : {}, oo = _(J) ? this._toVariables({ semantic: J }, m) : {}, No = _(co) ? this._toVariables({ light: co }, m) : {}, Ke = _(F) ? this._toVariables({ dark: F }, m) : {}, [At, Nt] = [(a = Q.declarations) != null ? a : "", Q.tokens], [Pt, Lt] = [(i = T.declarations) != null ? i : "", T.tokens || []], [It, zt] = [(s = W.declarations) != null ? s : "", W.tokens || []], [Dt, jt] = [(l = go.declarations) != null ? l : "", go.tokens || []], [Ft, Mt] = [(c = oo.declarations) != null ? c : "", oo.tokens || []], [Ut, Wt] = [(d = No.declarations) != null ? d : "", No.tokens || []], [qt, Ht] = [(g = Ke.declarations) != null ? g : "", Ke.tokens || []];
    u = this.transformCSS(o, At, "light", "variable", m, t, n), b = Nt;
    let Vt = this.transformCSS(o, `${Pt}${It}`, "light", "variable", m, t, n), Jt = this.transformCSS(o, `${Dt}`, "dark", "variable", m, t, n);
    h = `${Vt}${Jt}`, v = [.../* @__PURE__ */ new Set([...Lt, ...zt, ...jt])];
    let Xt = this.transformCSS(o, `${Ft}${Ut}color-scheme:light`, "light", "variable", m, t, n), Yt = this.transformCSS(o, `${qt}color-scheme:dark`, "dark", "variable", m, t, n);
    k = `${Xt}${Yt}`, w = [.../* @__PURE__ */ new Set([...Mt, ...Wt, ...Ht])], x = po(p.css, { dt: wo });
  }
  return { primitive: { css: u, tokens: b }, semantic: { css: h, tokens: v }, global: { css: k, tokens: w }, style: x };
}, getPreset({ name: o = "", preset: e = {}, options: r, params: t, set: n, defaults: a, selector: i }) {
  var s, l, c;
  let d, g, p;
  if (_(e) && r.transform !== "strict") {
    let m = o.replace("-directive", ""), u = e, { colorScheme: b, extend: h, css: v } = u, k = uo(u, ["colorScheme", "extend", "css"]), w = h || {}, { colorScheme: x } = w, S = uo(w, ["colorScheme"]), B = b || {}, { dark: R } = B, Y = uo(B, ["dark"]), V = x || {}, { dark: ao } = V, Z = uo(V, ["dark"]), G = _(k) ? this._toVariables({ [m]: ro(ro({}, k), S) }, r) : {}, J = _(Y) ? this._toVariables({ [m]: ro(ro({}, Y), Z) }, r) : {}, L = _(R) ? this._toVariables({ [m]: ro(ro({}, R), ao) }, r) : {}, [io, E] = [(s = G.declarations) != null ? s : "", G.tokens || []], [so, F] = [(l = J.declarations) != null ? l : "", J.tokens || []], [co, Q] = [(c = L.declarations) != null ? c : "", L.tokens || []], T = this.transformCSS(m, `${io}${so}`, "light", "variable", r, n, a, i), W = this.transformCSS(m, co, "dark", "variable", r, n, a, i);
    d = `${T}${W}`, g = [.../* @__PURE__ */ new Set([...E, ...F, ...Q])], p = po(v, { dt: wo });
  }
  return { css: d, tokens: g, style: p };
}, getPresetC({ name: o = "", theme: e = {}, params: r, set: t, defaults: n }) {
  var a;
  let { preset: i, options: s } = e, l = (a = i?.components) == null ? void 0 : a[o];
  return this.getPreset({ name: o, preset: l, options: s, params: r, set: t, defaults: n });
}, getPresetD({ name: o = "", theme: e = {}, params: r, set: t, defaults: n }) {
  var a, i;
  let s = o.replace("-directive", ""), { preset: l, options: c } = e, d = ((a = l?.components) == null ? void 0 : a[s]) || ((i = l?.directives) == null ? void 0 : i[s]);
  return this.getPreset({ name: s, preset: d, options: c, params: r, set: t, defaults: n });
}, applyDarkColorScheme(o) {
  return !(o.darkModeSelector === "none" || o.darkModeSelector === !1);
}, getColorSchemeOption(o, e) {
  var r;
  return this.applyDarkColorScheme(o) ? this.regex.resolve(o.darkModeSelector === !0 ? e.options.darkModeSelector : (r = o.darkModeSelector) != null ? r : e.options.darkModeSelector) : [];
}, getLayerOrder(o, e = {}, r, t) {
  let { cssLayer: n } = e;
  return n ? `@layer ${po(n.order || n.name || "primeui", r)}` : "";
}, getCommonStyleSheet({ name: o = "", theme: e = {}, params: r, props: t = {}, set: n, defaults: a }) {
  let i = this.getCommon({ name: o, theme: e, params: r, set: n, defaults: a }), s = Object.entries(t).reduce((l, [c, d]) => l.push(`${c}="${d}"`) && l, []).join(" ");
  return Object.entries(i || {}).reduce((l, [c, d]) => {
    if (yo(d) && Object.hasOwn(d, "css")) {
      let g = Io(d.css), p = `${c}-variables`;
      l.push(`<style type="text/css" data-primevue-style-id="${p}" ${s}>${g}</style>`);
    }
    return l;
  }, []).join("");
}, getStyleSheet({ name: o = "", theme: e = {}, params: r, props: t = {}, set: n, defaults: a }) {
  var i;
  let s = { name: o, theme: e, params: r, set: n, defaults: a }, l = (i = o.includes("-directive") ? this.getPresetD(s) : this.getPresetC(s)) == null ? void 0 : i.css, c = Object.entries(t).reduce((d, [g, p]) => d.push(`${g}="${p}"`) && d, []).join(" ");
  return l ? `<style type="text/css" data-primevue-style-id="${o}-variables" ${c}>${Io(l)}</style>` : "";
}, createTokens(o = {}, e, r = "", t = "", n = {}) {
  let a = function(s, l = {}, c = []) {
    if (c.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: s, path: this.path, paths: l, value: void 0 };
    c.push(this.path), l.name = this.path, l.binding || (l.binding = {});
    let d = this.value;
    if (typeof this.value == "string" && Do.test(this.value)) {
      let g = this.value.trim().replace(Do, (p) => {
        var m;
        let u = p.slice(1, -1), b = this.tokens[u];
        if (!b) return console.warn(`Token not found for path: ${u}`), "__UNRESOLVED__";
        let h = b.computed(s, l, c);
        return Array.isArray(h) && h.length === 2 ? `light-dark(${h[0].value},${h[1].value})` : (m = h?.value) != null ? m : "__UNRESOLVED__";
      });
      d = Hr.test(g.replace(Vr, "0")) ? `calc(${g})` : g;
    }
    return qe(l.binding) && delete l.binding, c.pop(), { colorScheme: s, path: this.path, paths: l, value: d.includes("__UNRESOLVED__") ? void 0 : d };
  }, i = (s, l, c) => {
    Object.entries(s).forEach(([d, g]) => {
      let p = ko(d, e.variable.excludedKeyRegex) ? l : l ? `${l}.${rr(d)}` : rr(d), m = c ? `${c}.${d}` : d;
      yo(g) ? i(g, p, m) : (n[p] || (n[p] = { paths: [], computed: (u, b = {}, h = []) => {
        if (n[p].paths.length === 1) return n[p].paths[0].computed(n[p].paths[0].scheme, b.binding, h);
        if (u && u !== "none") for (let v = 0; v < n[p].paths.length; v++) {
          let k = n[p].paths[v];
          if (k.scheme === u) return k.computed(u, b.binding, h);
        }
        return n[p].paths.map((v) => v.computed(v.scheme, b[v.scheme], h));
      } }), n[p].paths.push({ path: m, value: g, scheme: m.includes("colorScheme.light") ? "light" : m.includes("colorScheme.dark") ? "dark" : "none", computed: a, tokens: n }));
    });
  };
  return i(o, r, t), n;
}, getTokenValue(o, e, r) {
  var t;
  let n = ((s) => s.split(".").filter((l) => !ko(l.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(e), a = e.includes("colorScheme.light") ? "light" : e.includes("colorScheme.dark") ? "dark" : void 0, i = [(t = o[n]) == null ? void 0 : t.computed(a)].flat().filter((s) => s);
  return i.length === 1 ? i[0].value : i.reduce((s = {}, l) => {
    let c = l, { colorScheme: d } = c, g = uo(c, ["colorScheme"]);
    return s[d] = g, s;
  }, void 0);
}, getSelectorRule(o, e, r, t) {
  return r === "class" || r === "attr" ? So(_(e) ? `${o}${e},${o} ${e}` : o, t) : So(o, So(e ?? ":root,:host", t));
}, transformCSS(o, e, r, t, n = {}, a, i, s) {
  if (_(e)) {
    let { cssLayer: l } = n;
    if (t !== "style") {
      let c = this.getColorSchemeOption(n, i);
      e = r === "dark" ? c.reduce((d, { type: g, selector: p }) => (_(p) && (d += p.includes("[CSS]") ? p.replace("[CSS]", e) : this.getSelectorRule(p, s, g, e)), d), "") : So(s ?? ":root,:host", e);
    }
    if (l) {
      let c = { name: "primeui" };
      yo(l) && (c.name = po(l.name, { name: o, type: t })), _(c.name) && (e = So(`@layer ${c.name}`, e), a?.layerNames(c.name));
    }
    return e;
  }
  return "";
} }, z = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(o = {}) {
  let { theme: e } = o;
  e && (this._theme = $e(ro({}, e), { options: ro(ro({}, this.defaults.options), e.options) }), this._tokens = eo.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
  this.update({ theme: o }), fo.emit("theme:change", o);
}, getPreset() {
  return this.preset;
}, setPreset(o) {
  this._theme = $e(ro({}, this.theme), { preset: o }), this._tokens = eo.createTokens(o, this.defaults), this.clearLoadedStyleNames(), fo.emit("preset:change", o), fo.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(o) {
  this._theme = $e(ro({}, this.theme), { options: o }), this.clearLoadedStyleNames(), fo.emit("options:change", o), fo.emit("theme:change", this.theme);
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
  return eo.getTokenValue(this.tokens, o, this.defaults);
}, getCommon(o = "", e) {
  return eo.getCommon({ name: o, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(o = "", e) {
  let r = { name: o, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return eo.getPresetC(r);
}, getDirective(o = "", e) {
  let r = { name: o, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return eo.getPresetD(r);
}, getCustomPreset(o = "", e, r, t) {
  let n = { name: o, preset: e, options: this.options, selector: r, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return eo.getPreset(n);
}, getLayerOrderCSS(o = "") {
  return eo.getLayerOrder(o, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(o = "", e, r = "style", t) {
  return eo.transformCSS(o, e, t, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(o = "", e, r = {}) {
  return eo.getCommonStyleSheet({ name: o, theme: this.theme, params: e, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(o, e, r = {}) {
  return eo.getStyleSheet({ name: o, theme: this.theme, params: e, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(o) {
  this._loadingStyles.add(o);
}, onStyleUpdated(o) {
  this._loadingStyles.add(o);
}, onStyleLoaded(o, { name: e }) {
  this._loadingStyles.size && (this._loadingStyles.delete(e), fo.emit(`theme:${e}:load`, o), !this._loadingStyles.size && fo.emit("theme:load"));
} }, I = {
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
}, Bn = `
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
function jo(o) {
  "@babel/helpers - typeof";
  return jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, jo(o);
}
function tr(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function nr(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? tr(Object(r), !0).forEach(function(t) {
      Rn(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : tr(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function Rn(o, e, r) {
  return (e = En(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function En(o) {
  var e = _n(o, "string");
  return jo(e) == "symbol" ? e : e + "";
}
function _n(o, e) {
  if (jo(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (jo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
function On(o) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  Ze() && Ze().components ? pe(o) : e ? o() : me(o);
}
var Tn = 0;
function An(o) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = M(!1), t = M(o), n = M(null), a = pn() ? window.document : void 0, i = e.document, s = i === void 0 ? a : i, l = e.immediate, c = l === void 0 ? !0 : l, d = e.manual, g = d === void 0 ? !1 : d, p = e.name, m = p === void 0 ? "style_".concat(++Tn) : p, u = e.id, b = u === void 0 ? void 0 : u, h = e.media, v = h === void 0 ? void 0 : h, k = e.nonce, w = k === void 0 ? void 0 : k, x = e.first, S = x === void 0 ? !1 : x, B = e.onMounted, R = B === void 0 ? void 0 : B, Y = e.onUpdated, V = Y === void 0 ? void 0 : Y, ao = e.onLoad, Z = ao === void 0 ? void 0 : ao, G = e.props, J = G === void 0 ? {} : G, L = function() {
  }, io = function(F) {
    var co = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s) {
      var Q = nr(nr({}, J), co), T = Q.name || m, W = Q.id || b, go = Q.nonce || w;
      n.value = s.querySelector('style[data-primevue-style-id="'.concat(T, '"]')) || s.getElementById(W) || s.createElement("style"), n.value.isConnected || (t.value = F || o, Te(n.value, {
        type: "text/css",
        id: W,
        media: v,
        nonce: go
      }), S ? s.head.prepend(n.value) : s.head.appendChild(n.value), mn(n.value, "data-primevue-style-id", T), Te(n.value, Q), n.value.onload = function(oo) {
        return Z?.(oo, {
          name: T
        });
      }, R?.(T)), !r.value && (L = Lo(t, function(oo) {
        n.value.textContent = oo, V?.(T);
      }, {
        immediate: !0
      }), r.value = !0);
    }
  }, E = function() {
    !s || !r.value || (L(), gn(n.value) && s.head.removeChild(n.value), r.value = !1, n.value = null);
  };
  return c && !g && On(io), {
    id: b,
    name: m,
    el: n,
    css: t,
    unload: E,
    load: io,
    isLoaded: Gt(r)
  };
}
function Fo(o) {
  "@babel/helpers - typeof";
  return Fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Fo(o);
}
var ar, ir, sr, lr;
function cr(o, e) {
  return In(o) || Ln(o, e) || Pn(o, e) || Nn();
}
function Nn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pn(o, e) {
  if (o) {
    if (typeof o == "string") return dr(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? dr(o, e) : void 0;
  }
}
function dr(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++) t[r] = o[r];
  return t;
}
function Ln(o, e) {
  var r = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (r != null) {
    var t, n, a, i, s = [], l = !0, c = !1;
    try {
      if (a = (r = r.call(o)).next, e !== 0) for (; !(l = (t = a.call(r)).done) && (s.push(t.value), s.length !== e); l = !0) ;
    } catch (d) {
      c = !0, n = d;
    } finally {
      try {
        if (!l && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw n;
      }
    }
    return s;
  }
}
function In(o) {
  if (Array.isArray(o)) return o;
}
function ur(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Se(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ur(Object(r), !0).forEach(function(t) {
      zn(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : ur(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function zn(o, e, r) {
  return (e = Dn(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function Dn(o) {
  var e = jn(o, "string");
  return Fo(e) == "symbol" ? e : e + "";
}
function jn(o, e) {
  if (Fo(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Fo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
function Zo(o, e) {
  return e || (e = o.slice(0)), Object.freeze(Object.defineProperties(o, { raw: { value: Object.freeze(e) } }));
}
var Fn = function(e) {
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
}, Mn = {}, Un = {}, $o = {
  name: "base",
  css: Fn,
  style: Bn,
  classes: Mn,
  inlineStyles: Un,
  load: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(a) {
      return a;
    }, n = t(Ko(ar || (ar = Zo(["", ""])), e));
    return _(n) ? An(Io(n), Se({
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
      return z.transformCSS(r.name || e.name, "".concat(n).concat(Ko(ir || (ir = Zo(["", ""])), t)));
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
      var t = po(this.css, {
        dt: wo
      }) || "", n = Io(Ko(sr || (sr = Zo(["", "", ""])), t, e)), a = Object.entries(r).reduce(function(i, s) {
        var l = cr(s, 2), c = l[0], d = l[1];
        return i.push("".concat(c, '="').concat(d, '"')) && i;
      }, []).join(" ");
      return _(n) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(a, ">").concat(n, "</style>") : "";
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
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), a = Ko(lr || (lr = Zo(["", ""])), po(this.style, {
        dt: wo
      })), i = Io(z.transformCSS(n, a)), s = Object.entries(r).reduce(function(l, c) {
        var d = cr(c, 2), g = d[0], p = d[1];
        return l.push("".concat(g, '="').concat(p, '"')) && l;
      }, []).join(" ");
      _(i) && t.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(s, ">").concat(i, "</style>"));
    }
    return t.join("");
  },
  extend: function(e) {
    return Se(Se({}, this), {}, {
      css: void 0,
      style: void 0
    }, e);
  }
}, Qo = Mr();
function Mo(o) {
  "@babel/helpers - typeof";
  return Mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mo(o);
}
function fr(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function oe(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fr(Object(r), !0).forEach(function(t) {
      Wn(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : fr(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function Wn(o, e, r) {
  return (e = qn(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function qn(o) {
  var e = Hn(o, "string");
  return Mo(e) == "symbol" ? e : e + "";
}
function Hn(o, e) {
  if (Mo(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Mo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var Vn = {
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
    text: [I.STARTS_WITH, I.CONTAINS, I.NOT_CONTAINS, I.ENDS_WITH, I.EQUALS, I.NOT_EQUALS],
    numeric: [I.EQUALS, I.NOT_EQUALS, I.LESS_THAN, I.LESS_THAN_OR_EQUAL_TO, I.GREATER_THAN, I.GREATER_THAN_OR_EQUAL_TO],
    date: [I.DATE_IS, I.DATE_IS_NOT, I.DATE_BEFORE, I.DATE_AFTER]
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
}, Jn = /* @__PURE__ */ Symbol();
function Xn(o, e) {
  var r = {
    config: mo(e)
  };
  return o.config.globalProperties.$primevue = r, o.provide(Jn, r), Yn(), Gn(o, r), r;
}
var Bo = [];
function Yn() {
  fo.clear(), Bo.forEach(function(o) {
    return o?.();
  }), Bo = [];
}
function Gn(o, e) {
  var r = M(!1), t = function() {
    var c;
    if (((c = e.config) === null || c === void 0 ? void 0 : c.theme) !== "none" && !z.isStyleNameLoaded("common")) {
      var d, g, p = ((d = $o.getCommonTheme) === null || d === void 0 ? void 0 : d.call($o)) || {}, m = p.primitive, u = p.semantic, b = p.global, h = p.style, v = {
        nonce: (g = e.config) === null || g === void 0 || (g = g.csp) === null || g === void 0 ? void 0 : g.nonce
      };
      $o.load(m?.css, oe({
        name: "primitive-variables"
      }, v)), $o.load(u?.css, oe({
        name: "semantic-variables"
      }, v)), $o.load(b?.css, oe({
        name: "global-variables"
      }, v)), $o.loadStyle(oe({
        name: "global-style"
      }, v), h), z.setLoadedStyleName("common");
    }
  };
  fo.on("theme:change", function(l) {
    r.value || (o.config.globalProperties.$primevue.config.theme = l, r.value = !0);
  });
  var n = Lo(e.config, function(l, c) {
    Qo.emit("config:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), a = Lo(function() {
    return e.config.ripple;
  }, function(l, c) {
    Qo.emit("config:ripple:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = Lo(function() {
    return e.config.theme;
  }, function(l, c) {
    r.value || z.setTheme(l), e.config.unstyled || t(), r.value = !1, Qo.emit("config:theme:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !1
  }), s = Lo(function() {
    return e.config.unstyled;
  }, function(l, c) {
    !l && e.config.theme && t(), Qo.emit("config:unstyled:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  });
  Bo.push(n), Bo.push(a), Bo.push(i), Bo.push(s);
}
var Kn = {
  install: function(e, r) {
    var t = un(Vn, r);
    Xn(e, t);
  }
}, Zn = { transitionDuration: "{transition.duration}" }, Qn = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, oa = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, ea = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, ra = { root: Zn, panel: Qn, header: oa, content: ea }, ta = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, na = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, aa = { padding: "{list.padding}", gap: "{list.gap}" }, ia = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, sa = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, la = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ca = { borderRadius: "{border.radius.sm}" }, da = { padding: "{list.option.padding}" }, ua = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, fa = { root: ta, overlay: na, list: aa, option: ia, optionGroup: sa, dropdown: la, chip: ca, emptyMessage: da, colorScheme: ua }, ga = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, pa = { size: "1rem" }, ma = { borderColor: "{content.background}", offset: "-0.75rem" }, ha = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, ba = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, va = { root: ga, icon: pa, group: ma, lg: ha, xl: ba }, ya = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, ka = { size: "0.5rem" }, wa = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, Ca = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, xa = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, $a = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Sa = { root: ya, dot: ka, sm: wa, lg: Ca, xl: xa, colorScheme: $a }, Ba = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, Ra = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, Ea = { primitive: Ba, semantic: Ra }, _a = { borderRadius: "{content.border.radius}" }, Oa = { root: _a }, Ta = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, Aa = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Na = { color: "{navigation.item.icon.color}" }, Pa = { root: Ta, item: Aa, separator: Na }, La = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, Ia = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, za = { root: La, colorScheme: Ia }, Da = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, ja = { padding: "1.25rem", gap: "0.5rem" }, Fa = { gap: "0.5rem" }, Ma = { fontSize: "1.25rem", fontWeight: "500" }, Ua = { color: "{text.muted.color}" }, Wa = { root: Da, body: ja, caption: Fa, title: Ma, subtitle: Ua }, qa = { transitionDuration: "{transition.duration}" }, Ha = { gap: "0.25rem" }, Va = { padding: "1rem", gap: "0.5rem" }, Ja = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xa = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, Ya = { root: qa, content: Ha, indicatorList: Va, indicator: Ja, colorScheme: Xa }, Ga = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Ka = { width: "2.5rem", color: "{form.field.icon.color}" }, Za = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Qa = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, oi = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, ei = { color: "{form.field.icon.color}" }, ri = { root: Ga, dropdown: Ka, overlay: Za, list: Qa, option: oi, clearIcon: ei }, ti = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, ni = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, ai = { root: ti, icon: ni }, ii = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, si = { width: "2rem", height: "2rem" }, li = { size: "1rem" }, ci = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, di = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, ui = { root: ii, image: si, icon: li, removeIcon: ci, colorScheme: di }, fi = { transitionDuration: "{transition.duration}" }, gi = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, pi = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, mi = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, hi = { root: fi, preview: gi, panel: pi, colorScheme: mi }, bi = { size: "2rem", color: "{overlay.modal.color}" }, vi = { gap: "1rem" }, yi = { icon: bi, content: vi }, ki = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, wi = { padding: "{overlay.popover.padding}", gap: "1rem" }, Ci = { size: "1.5rem", color: "{overlay.popover.color}" }, xi = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, $i = { root: ki, content: wi, icon: Ci, footer: xi }, Si = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Bi = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Ri = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Ei = { mobileIndent: "1rem" }, _i = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Oi = { borderColor: "{content.border.color}" }, Ti = { root: Si, list: Bi, item: Ri, submenu: Ei, submenuIcon: _i, separator: Oi }, Ai = `
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
`, Ni = { transitionDuration: "{transition.duration}" }, Pi = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Li = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Ii = { fontWeight: "600" }, zi = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Di = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ji = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Fi = { fontWeight: "600" }, Mi = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Ui = { color: "{primary.color}" }, Wi = { width: "0.5rem" }, qi = { width: "1px", color: "{primary.color}" }, Hi = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Vi = { size: "2rem" }, Ji = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xi = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, Yi = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Gi = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Ki = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Zi = `
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Qi = { root: Ni, header: Pi, headerCell: Li, columnTitle: Ii, row: zi, bodyCell: Di, footerCell: ji, columnFooter: Fi, footer: Mi, dropPoint: Ui, columnResizer: Wi, resizeIndicator: qi, sortIcon: Hi, loadingIcon: Vi, rowToggleButton: Ji, filter: Xi, paginatorTop: Yi, paginatorBottom: Gi, colorScheme: Ki, css: Zi }, os = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, es = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, rs = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, ts = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, ns = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, as = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, is = { root: os, header: es, content: rs, footer: ts, paginatorTop: ns, paginatorBottom: as }, ss = { transitionDuration: "{transition.duration}" }, ls = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, cs = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, ds = { gap: "0.5rem", fontWeight: "500" }, us = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, fs = { color: "{form.field.icon.color}" }, gs = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, ps = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, ms = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, hs = { margin: "0.5rem 0 0 0" }, bs = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, vs = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ys = { margin: "0.5rem 0 0 0" }, ks = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, ws = { margin: "0.5rem 0 0 0" }, Cs = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, xs = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, $s = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, Ss = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, Bs = { root: ss, panel: ls, header: cs, title: ds, dropdown: us, inputIcon: fs, selectMonth: gs, selectYear: ps, group: ms, dayView: hs, weekDay: bs, date: vs, monthView: ys, month: ks, yearView: ws, year: Cs, buttonbar: xs, timePicker: $s, colorScheme: Ss }, Rs = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, Es = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, _s = { fontSize: "1.25rem", fontWeight: "600" }, Os = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Ts = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, As = { root: Rs, header: Es, title: _s, content: Os, footer: Ts }, Ns = { borderColor: "{content.border.color}" }, Ps = { background: "{content.background}", color: "{text.color}" }, Ls = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, Is = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, zs = { root: Ns, content: Ps, horizontal: Ls, vertical: Is }, Ds = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, js = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Fs = { root: Ds, item: js }, Ms = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, Us = { padding: "{overlay.modal.padding}" }, Ws = { fontSize: "1.5rem", fontWeight: "600" }, qs = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Hs = { padding: "{overlay.modal.padding}" }, Vs = { root: Ms, header: Us, title: Ws, content: qs, footer: Hs }, Js = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, Xs = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Ys = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, Gs = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Ks = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Zs = { toolbar: Js, toolbarItem: Xs, overlay: Ys, overlayOption: Gs, content: Ks }, Qs = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, ol = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, el = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, rl = { padding: "0" }, tl = { root: Qs, legend: ol, toggleIcon: el, content: rl }, nl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, al = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, il = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, sl = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, ll = { gap: "0.5rem" }, cl = { height: "0.25rem" }, dl = { gap: "0.5rem" }, ul = { root: nl, header: al, content: il, file: sl, fileList: ll, progressbar: cl, basic: dl }, fl = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, gl = { active: { top: "-1.25rem" } }, pl = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, ml = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, hl = { root: fl, over: gl, in: pl, on: ml }, bl = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, vl = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, yl = { size: "1.5rem" }, kl = { background: "{content.background}", padding: "1rem 0.25rem" }, wl = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Cl = { size: "1rem" }, xl = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, $l = { gap: "0.5rem", padding: "1rem" }, Sl = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Bl = { background: "rgba(0, 0, 0, 0.5)" }, Rl = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, El = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, _l = { size: "1.5rem" }, Ol = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, Tl = { root: bl, navButton: vl, navIcon: yl, thumbnailsContent: kl, thumbnailNavButton: wl, thumbnailNavButtonIcon: Cl, caption: xl, indicatorList: $l, indicatorButton: Sl, insetIndicatorList: Bl, insetIndicatorButton: Rl, closeButton: El, closeButtonIcon: _l, colorScheme: Ol }, Al = { color: "{form.field.icon.color}" }, Nl = { icon: Al }, Pl = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, Ll = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, Il = { root: Pl, input: Ll }, zl = { transitionDuration: "{transition.duration}" }, Dl = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, jl = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, Fl = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ml = { root: zl, preview: Dl, toolbar: jl, action: Fl }, Ul = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Wl = { handle: Ul }, ql = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, Hl = { fontWeight: "500" }, Vl = { size: "1rem" }, Jl = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, Xl = { root: ql, text: Hl, icon: Vl, colorScheme: Jl }, Yl = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, Gl = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, Kl = { root: Yl, display: Gl }, Zl = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Ql = { borderRadius: "{border.radius.sm}" }, oc = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, ec = { root: Zl, chip: Ql, colorScheme: oc }, rc = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, tc = { addon: rc }, nc = { transitionDuration: "{transition.duration}" }, ac = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, ic = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, sc = { root: nc, button: ac, colorScheme: ic }, lc = { gap: "0.5rem" }, cc = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, dc = { root: lc, input: cc }, uc = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, fc = { root: uc }, gc = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, pc = { background: "{primary.color}" }, mc = { background: "{content.border.color}" }, hc = { color: "{text.muted.color}" }, bc = { root: gc, value: pc, range: mc, text: hc }, vc = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, yc = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, kc = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, wc = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Cc = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, xc = { padding: "{list.option.padding}" }, $c = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, Sc = { root: vc, list: yc, option: kc, optionGroup: wc, checkmark: Cc, emptyMessage: xc, colorScheme: $c }, Bc = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, Rc = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, Ec = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, _c = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, Oc = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Tc = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, Ac = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Nc = { borderColor: "{content.border.color}" }, Pc = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Lc = { root: Bc, baseItem: Rc, item: Ec, overlay: _c, submenu: Oc, submenuLabel: Tc, submenuIcon: Ac, separator: Nc, mobileButton: Pc }, Ic = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, zc = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Dc = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, jc = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, Fc = { borderColor: "{content.border.color}" }, Mc = { root: Ic, list: zc, item: Dc, submenuLabel: jc, separator: Fc }, Uc = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, Wc = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, qc = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Hc = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, Vc = { borderColor: "{content.border.color}" }, Jc = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xc = { root: Uc, baseItem: Wc, item: qc, submenu: Hc, separator: Vc, mobileButton: Jc }, Yc = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Gc = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, Kc = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, Zc = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, Qc = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, od = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, ed = { root: { borderWidth: "1px" } }, rd = { content: { padding: "0" } }, td = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, nd = { root: Yc, content: Gc, text: Kc, icon: Zc, closeButton: Qc, closeIcon: od, outlined: ed, simple: rd, colorScheme: td }, ad = { borderRadius: "{content.border.radius}", gap: "1rem" }, id = { background: "{content.border.color}", size: "0.5rem" }, sd = { gap: "0.5rem" }, ld = { size: "0.5rem" }, cd = { size: "1rem" }, dd = { verticalGap: "0.5rem", horizontalGap: "1rem" }, ud = { root: ad, meters: id, label: sd, labelMarker: ld, labelIcon: cd, labelList: dd }, fd = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, gd = { width: "2.5rem", color: "{form.field.icon.color}" }, pd = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, md = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, hd = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, bd = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, vd = { color: "{form.field.icon.color}" }, yd = { borderRadius: "{border.radius.sm}" }, kd = { padding: "{list.option.padding}" }, wd = { root: fd, dropdown: gd, overlay: pd, list: md, option: hd, optionGroup: bd, chip: yd, clearIcon: vd, emptyMessage: kd }, Cd = { gap: "1.125rem" }, xd = { gap: "0.5rem" }, $d = { root: Cd, controls: xd }, Sd = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, Bd = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, Rd = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ed = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, _d = { root: Sd, node: Bd, nodeToggleButton: Rd, connector: Ed }, Od = { outline: { width: "2px", color: "{content.background}" } }, Td = { root: Od }, Ad = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Nd = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Pd = { color: "{text.muted.color}" }, Ld = { maxWidth: "2.5rem" }, Id = { root: Ad, navButton: Nd, currentPageReport: Pd, jumpToPageInput: Ld }, zd = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Dd = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, jd = { padding: "0.375rem 1.125rem" }, Fd = { fontWeight: "600" }, Md = { padding: "0 1.125rem 1.125rem 1.125rem" }, Ud = { padding: "0 1.125rem 1.125rem 1.125rem" }, Wd = { root: zd, header: Dd, toggleableHeader: jd, title: Fd, content: Md, footer: Ud }, qd = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Hd = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, Vd = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Jd = { indent: "1rem" }, Xd = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, Yd = { root: qd, panel: Hd, item: Vd, submenu: Jd, submenuIcon: Xd }, Gd = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, Kd = { color: "{form.field.icon.color}" }, Zd = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, Qd = { gap: "0.5rem" }, ou = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, eu = { meter: Gd, icon: Kd, overlay: Zd, content: Qd, colorScheme: ou }, ru = { gap: "1.125rem" }, tu = { gap: "0.5rem" }, nu = { root: ru, controls: tu }, au = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, iu = { padding: "{overlay.popover.padding}" }, su = { root: au, content: iu }, lu = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, cu = { background: "{primary.color}" }, du = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, uu = { root: lu, value: cu, label: du }, fu = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, gu = { colorScheme: fu }, pu = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, mu = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, hu = { root: pu, icon: mu }, bu = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, vu = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, yu = { root: bu, icon: vu }, ku = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, wu = { colorScheme: ku }, Cu = { transitionDuration: "{transition.duration}" }, xu = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, $u = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, Su = { root: Cu, bar: xu, colorScheme: $u }, Bu = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Ru = { width: "2.5rem", color: "{form.field.icon.color}" }, Eu = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, _u = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Ou = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Tu = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Au = { color: "{form.field.icon.color}" }, Nu = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, Pu = { padding: "{list.option.padding}" }, Lu = { root: Bu, dropdown: Ru, overlay: Eu, list: _u, option: Ou, optionGroup: Tu, clearIcon: Au, checkmark: Nu, emptyMessage: Pu }, Iu = { borderRadius: "{form.field.border.radius}" }, zu = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, Du = { root: Iu, colorScheme: zu }, ju = { borderRadius: "{content.border.radius}" }, Fu = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, Mu = { root: ju, colorScheme: Fu }, Uu = { transitionDuration: "{transition.duration}" }, Wu = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, qu = { background: "{primary.color}" }, Hu = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Vu = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, Ju = { root: Uu, track: Wu, range: qu, handle: Hu, colorScheme: Vu }, Xu = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Yu = { root: Xu }, Gu = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, Ku = { root: Gu }, Zu = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Qu = { background: "{content.border.color}" }, of = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ef = { root: Zu, gutter: Qu, handle: of }, rf = { transitionDuration: "{transition.duration}" }, tf = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, nf = { padding: "0.5rem", gap: "1rem" }, af = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, sf = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, lf = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, cf = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, df = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, uf = { root: rf, separator: tf, step: nf, stepHeader: af, stepTitle: sf, stepNumber: lf, steppanels: cf, steppanel: df }, ff = { transitionDuration: "{transition.duration}" }, gf = { background: "{content.border.color}" }, pf = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, mf = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, hf = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, bf = { root: ff, separator: gf, itemLink: pf, itemLabel: mf, itemNumber: hf }, vf = { transitionDuration: "{transition.duration}" }, yf = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, kf = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, wf = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Cf = { height: "1px", bottom: "-1px", background: "{primary.color}" }, xf = { root: vf, tablist: yf, item: kf, itemIcon: wf, activeBar: Cf }, $f = { transitionDuration: "{transition.duration}" }, Sf = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Bf = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Rf = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, Ef = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, _f = { height: "1px", bottom: "-1px", background: "{primary.color}" }, Of = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, Tf = { root: $f, tablist: Sf, tab: Bf, tabpanel: Rf, navButton: Ef, activeBar: _f, colorScheme: Of }, Af = { transitionDuration: "{transition.duration}" }, Nf = { background: "{content.background}", borderColor: "{content.border.color}" }, Pf = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Lf = { background: "{content.background}", color: "{content.color}" }, If = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, zf = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, Df = { root: Af, tabList: Nf, tab: Pf, tabPanel: Lf, navButton: If, colorScheme: zf }, jf = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, Ff = { size: "0.75rem" }, Mf = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Uf = { root: jf, icon: Ff, colorScheme: Mf }, Wf = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, qf = { gap: "0.25rem" }, Hf = { margin: "2px 0" }, Vf = { root: Wf, prompt: qf, commandResponse: Hf }, Jf = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Xf = { root: Jf }, Yf = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Gf = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Kf = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Zf = { mobileIndent: "1rem" }, Qf = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, o0 = { borderColor: "{content.border.color}" }, e0 = { root: Yf, list: Gf, item: Kf, submenu: Zf, submenuIcon: Qf, separator: o0 }, r0 = { minHeight: "5rem" }, t0 = { eventContent: { padding: "1rem 0" } }, n0 = { eventContent: { padding: "0 1rem" } }, a0 = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, i0 = { color: "{content.border.color}", size: "2px" }, s0 = { event: r0, horizontal: t0, vertical: n0, eventMarker: a0, eventConnector: i0 }, l0 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, c0 = { size: "1.125rem" }, d0 = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, u0 = { gap: "0.5rem" }, f0 = { fontWeight: "500", fontSize: "1rem" }, g0 = { fontWeight: "500", fontSize: "0.875rem" }, p0 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, m0 = { size: "1rem" }, h0 = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, b0 = { root: l0, icon: c0, content: d0, text: u0, summary: f0, detail: g0, closeButton: p0, closeIcon: m0, colorScheme: h0 }, v0 = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, y0 = { disabledColor: "{form.field.disabled.color}" }, k0 = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, w0 = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, C0 = { root: v0, icon: y0, content: k0, colorScheme: w0 }, x0 = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, $0 = { borderRadius: "50%", size: "1rem" }, S0 = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, B0 = { root: x0, handle: $0, colorScheme: S0 }, R0 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, E0 = { root: R0 }, _0 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, O0 = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, T0 = { root: _0, colorScheme: O0 }, A0 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, N0 = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, P0 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, L0 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, I0 = { size: "2rem" }, z0 = { margin: "0 0 0.5rem 0" }, D0 = `
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, j0 = { root: A0, node: N0, nodeIcon: P0, nodeToggleButton: L0, loadingIcon: I0, filter: z0, css: D0 }, F0 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, M0 = { width: "2.5rem", color: "{form.field.icon.color}" }, U0 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, W0 = { padding: "{list.padding}" }, q0 = { padding: "{list.option.padding}" }, H0 = { borderRadius: "{border.radius.sm}" }, V0 = { color: "{form.field.icon.color}" }, J0 = { root: F0, dropdown: M0, overlay: U0, tree: W0, emptyMessage: q0, chip: H0, clearIcon: V0 }, X0 = { transitionDuration: "{transition.duration}" }, Y0 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, G0 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, K0 = { fontWeight: "600" }, Z0 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Q0 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, og = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, eg = { fontWeight: "600" }, rg = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, tg = { width: "0.5rem" }, ng = { width: "1px", color: "{primary.color}" }, ag = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, ig = { size: "2rem" }, sg = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, lg = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, cg = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, dg = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, ug = `
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, fg = { root: X0, header: Y0, headerCell: G0, columnTitle: K0, row: Z0, bodyCell: Q0, footerCell: og, columnFooter: eg, footer: rg, columnResizer: tg, resizeIndicator: ng, sortIcon: ag, loadingIcon: ig, nodeToggleButton: sg, paginatorTop: lg, paginatorBottom: cg, colorScheme: dg, css: ug }, gg = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, pg = { loader: gg }, mg = Object.defineProperty, hg = Object.defineProperties, bg = Object.getOwnPropertyDescriptors, gr = Object.getOwnPropertySymbols, vg = Object.prototype.hasOwnProperty, yg = Object.prototype.propertyIsEnumerable, pr = (o, e, r) => e in o ? mg(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, mr, kg = (mr = ((o, e) => {
  for (var r in e || (e = {})) vg.call(e, r) && pr(o, r, e[r]);
  if (gr) for (var r of gr(e)) yg.call(e, r) && pr(o, r, e[r]);
  return o;
})({}, Ea), hg(mr, bg({ components: { accordion: ra, autocomplete: fa, avatar: va, badge: Sa, blockui: Oa, breadcrumb: Pa, button: za, card: Wa, carousel: Ya, cascadeselect: ri, checkbox: ai, chip: ui, colorpicker: hi, confirmdialog: yi, confirmpopup: $i, contextmenu: Ti, datatable: Qi, dataview: is, datepicker: Bs, dialog: As, divider: zs, dock: Fs, drawer: Vs, editor: Zs, fieldset: tl, fileupload: ul, floatlabel: hl, galleria: Tl, iconfield: Nl, iftalabel: Il, image: Ml, imagecompare: Wl, inlinemessage: Xl, inplace: Kl, inputchips: ec, inputgroup: tc, inputnumber: sc, inputotp: dc, inputtext: fc, knob: bc, listbox: Sc, megamenu: Lc, menu: Mc, menubar: Xc, message: nd, metergroup: ud, multiselect: wd, orderlist: $d, organizationchart: _d, overlaybadge: Td, paginator: Id, panel: Wd, panelmenu: Yd, password: eu, picklist: nu, popover: su, progressbar: uu, progressspinner: gu, radiobutton: hu, rating: yu, ripple: wu, scrollpanel: Su, select: Lu, selectbutton: Du, skeleton: Mu, slider: Ju, speeddial: Yu, splitbutton: Ku, splitter: ef, stepper: uf, steps: bf, tabmenu: xf, tabs: Tf, tabview: Df, tag: Uf, terminal: Vf, textarea: Xf, tieredmenu: e0, timeline: s0, toast: b0, togglebutton: C0, toggleswitch: B0, toolbar: E0, tooltip: T0, tree: j0, treeselect: J0, treetable: fg, virtualscroller: pg }, css: Ai })));
const Ne = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const e = Math.random() * 16 | 0;
    return (o == "x" ? e : e & 3 | 8).toString(16);
  })
}), Gr = async () => ({
  f: {
    name: (o) => `${o.name}${o.id}`
  }
}), Kr = async () => ({
  set: async (o) => {
    console.log("--theme");
    try {
      if (!o.el_id)
        throw new Error("[el_id] is required");
      const e = o.name, r = document.getElementById(o.el_id);
      if (!r)
        throw new Error("[el_id] is invalid");
      ((t) => {
        const n = (a) => {
          ((i) => {
            const s = i.getAttribute("data-ce");
            if (!s)
              return;
            const l = JSON.parse(s).filter((c) => c?.k.startsWith("t-"));
            if (l.length != 0)
              for (const c of l) {
                const d = c.k, g = c.v.split(" ");
                if (d == `t-${e}-class`)
                  for (const p of g)
                    i.classList.add(p);
                else
                  for (const p of g)
                    i.classList.remove(p);
              }
          })(a);
        };
        for (const a of t.getElementsByTagName("*"))
          n(a);
        n(t);
      })(r);
    } catch (e) {
      const r = `err: [theme] ${e}`;
      throw console.log(r), r;
    }
  }
});
function Pe(o, e = 1e3) {
  let r = {
    cnt: 0
  };
  return new Promise((t) => {
    const n = () => {
      console.log(`[setInterval] is running.. [count=${r.cnt}]`);
      try {
        o() && (clearInterval(a), t());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${e}]`);
      }
      r.cnt += 1;
    }, a = setInterval(() => {
      n();
    }, e);
    n();
  });
}
let wg = class {
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
const ue = () => new wg();
class Zr {
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
let P = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (o) => {
      const e = o?.lib || [];
      for (const [r, t] of e.entries()) {
        const n = t, a = `${n.name}:${o.run_from}`, i = `${o.run_from}_src`;
        let s = n[i];
        const l = `${o.run_from}_src`;
        let c = o?.lazy_lib?.[l] || null;
        if (c && (c = c.replace("{*}", `${n.name}`)), console.log(`_lazy_src: ${c}`), console.log(`_src: ${s}`), P.lib.l.hasOwnProperty(`${a}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(s) && s.includes("/") == !1 && P.lib.inbuilt_lib.indexOf(`${n.name}`) === -1)
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
            P.lib.l[`${a}`] = {
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
            P.lib.l[`${a}`] = {
              lib: d,
              src: s
            };
          }
        }
      }
      console.log(await P.lib.get_all({}));
    },
    get: async (o) => {
      let e = null;
      const r = `${o.name}:${o.run_from}`;
      return P.lib.l.hasOwnProperty(`${r}`) == !1 && await P.lib.set({
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
      }), e = P.lib.l[`${r}`], e;
    },
    get_all: async (o) => P.lib.l
  },
  path: {
    set: (o) => {
      let e = "", r = "";
      const t = o.src.split("/");
      if (o.src.indexOf("://localhost") !== -1 || o.src.indexOf("://127.0.0.1") !== -1 || (r = "/dist"), t.indexOf(o.type) !== -1)
        for (const [n, a] of t.entries()) {
          let i = n == 0 ? "" : "/";
          if (e += `${i}${a}`, a == o.type)
            return `${e}${r}${o.name}`;
        }
      else
        for (const [n, a] of t.entries()) {
          let i = n == 0 ? "" : "/";
          if (e += `${i}${a}`, a == "src")
            return `${e}${r}${o.name}`;
        }
      return `${e}${r}${o.name}`;
    }
  }
};
const Qr = ue(), ot = ue(), Cg = Qr.on;
Qr.emit;
const xg = ot.emit, $g = ot.on, Sg = async (o) => {
  const e = await Gr();
  return await P.lib.set({ lib: o.lib, run_from: "renderer", lazy_lib: o.lazy_lib }), {
    set: async (r) => {
      console.log("--renderer [set]"), r.return = r?.return || {}, r.return.r = r?.return?.r || "full";
      const t = new Zr();
      t.start();
      let n = r.data?.value?.l || r.data.l, a = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return r.return.r == "full" ? a.r = "" : a.r = [], await (async () => {
        for (const i of n) {
          const s = await await P.lib.get({ name: i.type, run_from: "renderer", lazy_lib: o.lazy_lib }), l = await (await s.lib.index({
            f: {
              name: (c) => e.f.name({ id: i.id, name: c }),
              get_lib: async (c) => await await P.lib.get({ name: c.name, run_from: c.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (c) => await (await Kr()).set(c),
              path: (c) => P.path.set({ src: s.src, type: i.type, name: c }),
              //set..
              uuid: () => Ne().set(),
              wait_until: Pe
            }
          })).set(
            {
              data: {
                curr: i
              }
            }
            /*_$cb*/
          );
          r?.return?.r == "full" ? a.r += l?.r || "" : a.r.push(l?.r || ""), a.style += l?.style || "", a.head += l?.head || "";
        }
      })(), t.stop(), a.benchmark = t.result(), a;
    }
  };
}, Bg = async (o) => {
  const e = await Gr();
  return await P.lib.set({ lib: o.lib, run_from: "hydrator", lazy_lib: o.lazy_lib }), {
    set: async (r) => {
      console.log("--hydrator [set]");
      const t = new Zr();
      t.start();
      let n = {
        r: "",
        style: ""
      }, a = {
        style_id: `${Ne().set()}_stl`
      }, i = r.data?.value?.l || r.data.l;
      const s = async () => {
        for (const l of i) {
          const c = await await P.lib.get({ name: l.type, run_from: "hydrator", lazy_lib: o.lazy_lib }), d = c.lib, g = ue(), p = g.on, m = await (await d.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (u) => e.f.name({ id: l.id, name: u }),
              get_lib: async (u) => await await P.lib.get({ name: u.name, run_from: u.run_from, lazy_lib: o.lazy_lib }),
              set_theme: async (u) => await (await Kr()).set(u),
              path: (u) => P.path.set({ src: c.src, type: l.type, name: u }),
              //set..
              uuid: () => Ne().set(),
              wait_until: Pe,
              //set..
              call: xg,
              listen: p,
              //set..
              new_emitter: () => ue()
            }
          })).set(
            {
              data: {
                curr: l
              }
            }
            /*_$cb*/
          );
          Cg("msg", async (u) => {
            try {
              if (Object.keys(u.where || {}).length == 0) {
                await g.emit("msg", u);
                return;
              }
            } catch {
            }
            try {
              if (l?.[u.where?.key || ""] == u.where?.value) {
                await g.emit("msg", u);
                return;
              }
            } catch {
            }
          }), n.style += m.style;
        }
      };
      await Pe(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await s();
      try {
        ((l) => {
          const c = document.getElementById(`${a.style_id}`);
          c && c.remove();
          const d = document.createElement("style");
          d.id = `${a.style_id}`, d.innerHTML = `${n.style}`, l.appendChild(d);
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
function et(o, e) {
  return function() {
    return o.apply(e, arguments);
  };
}
const { toString: Rg } = Object.prototype, { getPrototypeOf: He } = Object, { iterator: he, toStringTag: rt } = Symbol, be = /* @__PURE__ */ ((o) => (e) => {
  const r = Rg.call(e);
  return o[r] || (o[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), no = (o) => (o = o.toLowerCase(), (e) => be(e) === o), ve = (o) => (e) => typeof e === o, { isArray: Ao } = Array, _o = ve("undefined");
function qo(o) {
  return o !== null && !_o(o) && o.constructor !== null && !_o(o.constructor) && q(o.constructor.isBuffer) && o.constructor.isBuffer(o);
}
const tt = no("ArrayBuffer");
function Eg(o) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(o) : e = o && o.buffer && tt(o.buffer), e;
}
const _g = ve("string"), q = ve("function"), nt = ve("number"), Ho = (o) => o !== null && typeof o == "object", Og = (o) => o === !0 || o === !1, te = (o) => {
  if (be(o) !== "object")
    return !1;
  const e = He(o);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(rt in o) && !(he in o);
}, Tg = (o) => {
  if (!Ho(o) || qo(o))
    return !1;
  try {
    return Object.keys(o).length === 0 && Object.getPrototypeOf(o) === Object.prototype;
  } catch {
    return !1;
  }
}, Ag = no("Date"), Ng = no("File"), Pg = (o) => !!(o && typeof o.uri < "u"), Lg = (o) => o && typeof o.getParts < "u", Ig = no("Blob"), zg = no("FileList"), Dg = (o) => Ho(o) && q(o.pipe);
function jg() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const hr = jg(), br = typeof hr.FormData < "u" ? hr.FormData : void 0, Fg = (o) => {
  let e;
  return o && (br && o instanceof br || q(o.append) && ((e = be(o)) === "formdata" || // detect form-data instance
  e === "object" && q(o.toString) && o.toString() === "[object FormData]"));
}, Mg = no("URLSearchParams"), [Ug, Wg, qg, Hg] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(no), Vg = (o) => o.trim ? o.trim() : o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Vo(o, e, { allOwnKeys: r = !1 } = {}) {
  if (o === null || typeof o > "u")
    return;
  let t, n;
  if (typeof o != "object" && (o = [o]), Ao(o))
    for (t = 0, n = o.length; t < n; t++)
      e.call(null, o[t], t, o);
  else {
    if (qo(o))
      return;
    const a = r ? Object.getOwnPropertyNames(o) : Object.keys(o), i = a.length;
    let s;
    for (t = 0; t < i; t++)
      s = a[t], e.call(null, o[s], s, o);
  }
}
function at(o, e) {
  if (qo(o))
    return null;
  e = e.toLowerCase();
  const r = Object.keys(o);
  let t = r.length, n;
  for (; t-- > 0; )
    if (n = r[t], e === n.toLowerCase())
      return n;
  return null;
}
const vo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, it = (o) => !_o(o) && o !== vo;
function Le() {
  const { caseless: o, skipUndefined: e } = it(this) && this || {}, r = {}, t = (n, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const i = o && at(r, a) || a;
    te(r[i]) && te(n) ? r[i] = Le(r[i], n) : te(n) ? r[i] = Le({}, n) : Ao(n) ? r[i] = n.slice() : (!e || !_o(n)) && (r[i] = n);
  };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && Vo(arguments[n], t);
  return r;
}
const Jg = (o, e, r, { allOwnKeys: t } = {}) => (Vo(
  e,
  (n, a) => {
    r && q(n) ? Object.defineProperty(o, a, {
      value: et(n, r),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(o, a, {
      value: n,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: t }
), o), Xg = (o) => (o.charCodeAt(0) === 65279 && (o = o.slice(1)), o), Yg = (o, e, r, t) => {
  o.prototype = Object.create(e.prototype, t), Object.defineProperty(o.prototype, "constructor", {
    value: o,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(o, "super", {
    value: e.prototype
  }), r && Object.assign(o.prototype, r);
}, Gg = (o, e, r, t) => {
  let n, a, i;
  const s = {};
  if (e = e || {}, o == null) return e;
  do {
    for (n = Object.getOwnPropertyNames(o), a = n.length; a-- > 0; )
      i = n[a], (!t || t(i, o, e)) && !s[i] && (e[i] = o[i], s[i] = !0);
    o = r !== !1 && He(o);
  } while (o && (!r || r(o, e)) && o !== Object.prototype);
  return e;
}, Kg = (o, e, r) => {
  o = String(o), (r === void 0 || r > o.length) && (r = o.length), r -= e.length;
  const t = o.indexOf(e, r);
  return t !== -1 && t === r;
}, Zg = (o) => {
  if (!o) return null;
  if (Ao(o)) return o;
  let e = o.length;
  if (!nt(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = o[e];
  return r;
}, Qg = /* @__PURE__ */ ((o) => (e) => o && e instanceof o)(typeof Uint8Array < "u" && He(Uint8Array)), op = (o, e) => {
  const t = (o && o[he]).call(o);
  let n;
  for (; (n = t.next()) && !n.done; ) {
    const a = n.value;
    e.call(o, a[0], a[1]);
  }
}, ep = (o, e) => {
  let r;
  const t = [];
  for (; (r = o.exec(e)) !== null; )
    t.push(r);
  return t;
}, rp = no("HTMLFormElement"), tp = (o) => o.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, t, n) {
  return t.toUpperCase() + n;
}), vr = (({ hasOwnProperty: o }) => (e, r) => o.call(e, r))(Object.prototype), np = no("RegExp"), st = (o, e) => {
  const r = Object.getOwnPropertyDescriptors(o), t = {};
  Vo(r, (n, a) => {
    let i;
    (i = e(n, a, o)) !== !1 && (t[a] = i || n);
  }), Object.defineProperties(o, t);
}, ap = (o) => {
  st(o, (e, r) => {
    if (q(o) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const t = o[r];
    if (q(t)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, ip = (o, e) => {
  const r = {}, t = (n) => {
    n.forEach((a) => {
      r[a] = !0;
    });
  };
  return Ao(o) ? t(o) : t(String(o).split(e)), r;
}, sp = () => {
}, lp = (o, e) => o != null && Number.isFinite(o = +o) ? o : e;
function cp(o) {
  return !!(o && q(o.append) && o[rt] === "FormData" && o[he]);
}
const dp = (o) => {
  const e = new Array(10), r = (t, n) => {
    if (Ho(t)) {
      if (e.indexOf(t) >= 0)
        return;
      if (qo(t))
        return t;
      if (!("toJSON" in t)) {
        e[n] = t;
        const a = Ao(t) ? [] : {};
        return Vo(t, (i, s) => {
          const l = r(i, n + 1);
          !_o(l) && (a[s] = l);
        }), e[n] = void 0, a;
      }
    }
    return t;
  };
  return r(o, 0);
}, up = no("AsyncFunction"), fp = (o) => o && (Ho(o) || q(o)) && q(o.then) && q(o.catch), lt = ((o, e) => o ? setImmediate : e ? ((r, t) => (vo.addEventListener(
  "message",
  ({ source: n, data: a }) => {
    n === vo && a === r && t.length && t.shift()();
  },
  !1
), (n) => {
  t.push(n), vo.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(typeof setImmediate == "function", q(vo.postMessage)), gp = typeof queueMicrotask < "u" ? queueMicrotask.bind(vo) : typeof process < "u" && process.nextTick || lt, pp = (o) => o != null && q(o[he]), f = {
  isArray: Ao,
  isArrayBuffer: tt,
  isBuffer: qo,
  isFormData: Fg,
  isArrayBufferView: Eg,
  isString: _g,
  isNumber: nt,
  isBoolean: Og,
  isObject: Ho,
  isPlainObject: te,
  isEmptyObject: Tg,
  isReadableStream: Ug,
  isRequest: Wg,
  isResponse: qg,
  isHeaders: Hg,
  isUndefined: _o,
  isDate: Ag,
  isFile: Ng,
  isReactNativeBlob: Pg,
  isReactNative: Lg,
  isBlob: Ig,
  isRegExp: np,
  isFunction: q,
  isStream: Dg,
  isURLSearchParams: Mg,
  isTypedArray: Qg,
  isFileList: zg,
  forEach: Vo,
  merge: Le,
  extend: Jg,
  trim: Vg,
  stripBOM: Xg,
  inherits: Yg,
  toFlatObject: Gg,
  kindOf: be,
  kindOfTest: no,
  endsWith: Kg,
  toArray: Zg,
  forEachEntry: op,
  matchAll: ep,
  isHTMLForm: rp,
  hasOwnProperty: vr,
  hasOwnProp: vr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: st,
  freezeMethods: ap,
  toObjectSet: ip,
  toCamelCase: tp,
  noop: sp,
  toFiniteNumber: lp,
  findKey: at,
  global: vo,
  isContextDefined: it,
  isSpecCompliantForm: cp,
  toJSONObject: dp,
  isAsyncFn: up,
  isThenable: fp,
  setImmediate: lt,
  asap: gp,
  isIterable: pp
};
let y = class ct extends Error {
  static from(e, r, t, n, a, i) {
    const s = new ct(e.message, r || e.code, t, n, a);
    return s.cause = e, s.name = e.name, e.status != null && s.status == null && (s.status = e.status), i && Object.assign(s, i), s;
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
  constructor(e, r, t, n, a) {
    super(e), Object.defineProperty(this, "message", {
      value: e,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, r && (this.code = r), t && (this.config = t), n && (this.request = n), a && (this.response = a, this.status = a.status);
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
const mp = null;
function Ie(o) {
  return f.isPlainObject(o) || f.isArray(o);
}
function dt(o) {
  return f.endsWith(o, "[]") ? o.slice(0, -2) : o;
}
function Be(o, e, r) {
  return o ? o.concat(e).map(function(n, a) {
    return n = dt(n), !r && a ? "[" + n + "]" : n;
  }).join(r ? "." : "") : e;
}
function hp(o) {
  return f.isArray(o) && !o.some(Ie);
}
const bp = f.toFlatObject(f, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ye(o, e, r) {
  if (!f.isObject(o))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = f.toFlatObject(
    r,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(b, h) {
      return !f.isUndefined(h[b]);
    }
  );
  const t = r.metaTokens, n = r.visitor || d, a = r.dots, i = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(e);
  if (!f.isFunction(n))
    throw new TypeError("visitor must be a function");
  function c(u) {
    if (u === null) return "";
    if (f.isDate(u))
      return u.toISOString();
    if (f.isBoolean(u))
      return u.toString();
    if (!l && f.isBlob(u))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(u) || f.isTypedArray(u) ? l && typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function d(u, b, h) {
    let v = u;
    if (f.isReactNative(e) && f.isReactNativeBlob(u))
      return e.append(Be(h, b, a), c(u)), !1;
    if (u && !h && typeof u == "object") {
      if (f.endsWith(b, "{}"))
        b = t ? b : b.slice(0, -2), u = JSON.stringify(u);
      else if (f.isArray(u) && hp(u) || (f.isFileList(u) || f.endsWith(b, "[]")) && (v = f.toArray(u)))
        return b = dt(b), v.forEach(function(w, x) {
          !(f.isUndefined(w) || w === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Be([b], x, a) : i === null ? b : b + "[]",
            c(w)
          );
        }), !1;
    }
    return Ie(u) ? !0 : (e.append(Be(h, b, a), c(u)), !1);
  }
  const g = [], p = Object.assign(bp, {
    defaultVisitor: d,
    convertValue: c,
    isVisitable: Ie
  });
  function m(u, b) {
    if (!f.isUndefined(u)) {
      if (g.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      g.push(u), f.forEach(u, function(v, k) {
        (!(f.isUndefined(v) || v === null) && n.call(e, v, f.isString(k) ? k.trim() : k, b, p)) === !0 && m(v, b ? b.concat(k) : [k]);
      }), g.pop();
    }
  }
  if (!f.isObject(o))
    throw new TypeError("data must be an object");
  return m(o), e;
}
function yr(o) {
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
function Ve(o, e) {
  this._pairs = [], o && ye(o, this, e);
}
const ut = Ve.prototype;
ut.append = function(e, r) {
  this._pairs.push([e, r]);
};
ut.toString = function(e) {
  const r = e ? function(t) {
    return e.call(this, t, yr);
  } : yr;
  return this._pairs.map(function(n) {
    return r(n[0]) + "=" + r(n[1]);
  }, "").join("&");
};
function vp(o) {
  return encodeURIComponent(o).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ft(o, e, r) {
  if (!e)
    return o;
  const t = r && r.encode || vp, n = f.isFunction(r) ? {
    serialize: r
  } : r, a = n && n.serialize;
  let i;
  if (a ? i = a(e, n) : i = f.isURLSearchParams(e) ? e.toString() : new Ve(e, n).toString(t), i) {
    const s = o.indexOf("#");
    s !== -1 && (o = o.slice(0, s)), o += (o.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return o;
}
class kr {
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
const Je = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, yp = typeof URLSearchParams < "u" ? URLSearchParams : Ve, kp = typeof FormData < "u" ? FormData : null, wp = typeof Blob < "u" ? Blob : null, Cp = {
  isBrowser: !0,
  classes: {
    URLSearchParams: yp,
    FormData: kp,
    Blob: wp
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Xe = typeof window < "u" && typeof document < "u", ze = typeof navigator == "object" && navigator || void 0, xp = Xe && (!ze || ["ReactNative", "NativeScript", "NS"].indexOf(ze.product) < 0), $p = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Sp = Xe && window.location.href || "http://localhost", Bp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Xe,
  hasStandardBrowserEnv: xp,
  hasStandardBrowserWebWorkerEnv: $p,
  navigator: ze,
  origin: Sp
}, Symbol.toStringTag, { value: "Module" })), j = {
  ...Bp,
  ...Cp
};
function Rp(o, e) {
  return ye(o, new j.classes.URLSearchParams(), {
    visitor: function(r, t, n, a) {
      return j.isNode && f.isBuffer(r) ? (this.append(t, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function Ep(o) {
  return f.matchAll(/\w+|\[(\w*)]/g, o).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function _p(o) {
  const e = {}, r = Object.keys(o);
  let t;
  const n = r.length;
  let a;
  for (t = 0; t < n; t++)
    a = r[t], e[a] = o[a];
  return e;
}
function gt(o) {
  function e(r, t, n, a) {
    let i = r[a++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i), l = a >= r.length;
    return i = !i && f.isArray(n) ? n.length : i, l ? (f.hasOwnProp(n, i) ? n[i] = [n[i], t] : n[i] = t, !s) : ((!n[i] || !f.isObject(n[i])) && (n[i] = []), e(r, t, n[i], a) && f.isArray(n[i]) && (n[i] = _p(n[i])), !s);
  }
  if (f.isFormData(o) && f.isFunction(o.entries)) {
    const r = {};
    return f.forEachEntry(o, (t, n) => {
      e(Ep(t), n, r, 0);
    }), r;
  }
  return null;
}
function Op(o, e, r) {
  if (f.isString(o))
    try {
      return (e || JSON.parse)(o), f.trim(o);
    } catch (t) {
      if (t.name !== "SyntaxError")
        throw t;
    }
  return (r || JSON.stringify)(o);
}
const Jo = {
  transitional: Je,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(e, r) {
      const t = r.getContentType() || "", n = t.indexOf("application/json") > -1, a = f.isObject(e);
      if (a && f.isHTMLForm(e) && (e = new FormData(e)), f.isFormData(e))
        return n ? JSON.stringify(gt(e)) : e;
      if (f.isArrayBuffer(e) || f.isBuffer(e) || f.isStream(e) || f.isFile(e) || f.isBlob(e) || f.isReadableStream(e))
        return e;
      if (f.isArrayBufferView(e))
        return e.buffer;
      if (f.isURLSearchParams(e))
        return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
      let s;
      if (a) {
        if (t.indexOf("application/x-www-form-urlencoded") > -1)
          return Rp(e, this.formSerializer).toString();
        if ((s = f.isFileList(e)) || t.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return ye(
            s ? { "files[]": e } : e,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return a || n ? (r.setContentType("application/json", !1), Op(e)) : e;
    }
  ],
  transformResponse: [
    function(e) {
      const r = this.transitional || Jo.transitional, t = r && r.forcedJSONParsing, n = this.responseType === "json";
      if (f.isResponse(e) || f.isReadableStream(e))
        return e;
      if (e && f.isString(e) && (t && !this.responseType || n)) {
        const i = !(r && r.silentJSONParsing) && n;
        try {
          return JSON.parse(e, this.parseReviver);
        } catch (s) {
          if (i)
            throw s.name === "SyntaxError" ? y.from(s, y.ERR_BAD_RESPONSE, this, null, this.response) : s;
        }
      }
      return e;
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
    FormData: j.classes.FormData,
    Blob: j.classes.Blob
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
  Jo.headers[o] = {};
});
const Tp = f.toObjectSet([
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
]), Ap = (o) => {
  const e = {};
  let r, t, n;
  return o && o.split(`
`).forEach(function(i) {
    n = i.indexOf(":"), r = i.substring(0, n).trim().toLowerCase(), t = i.substring(n + 1).trim(), !(!r || e[r] && Tp[r]) && (r === "set-cookie" ? e[r] ? e[r].push(t) : e[r] = [t] : e[r] = e[r] ? e[r] + ", " + t : t);
  }), e;
}, wr = /* @__PURE__ */ Symbol("internals");
function Po(o) {
  return o && String(o).trim().toLowerCase();
}
function ne(o) {
  return o === !1 || o == null ? o : f.isArray(o) ? o.map(ne) : String(o);
}
function Np(o) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let t;
  for (; t = r.exec(o); )
    e[t[1]] = t[2];
  return e;
}
const Pp = (o) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(o.trim());
function Re(o, e, r, t, n) {
  if (f.isFunction(t))
    return t.call(this, e, r);
  if (n && (e = r), !!f.isString(e)) {
    if (f.isString(t))
      return e.indexOf(t) !== -1;
    if (f.isRegExp(t))
      return t.test(e);
  }
}
function Lp(o) {
  return o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, t) => r.toUpperCase() + t);
}
function Ip(o, e) {
  const r = f.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((t) => {
    Object.defineProperty(o, t + r, {
      value: function(n, a, i) {
        return this[t].call(this, e, n, a, i);
      },
      configurable: !0
    });
  });
}
let H = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, t) {
    const n = this;
    function a(s, l, c) {
      const d = Po(l);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const g = f.findKey(n, d);
      (!g || n[g] === void 0 || c === !0 || c === void 0 && n[g] !== !1) && (n[g || l] = ne(s));
    }
    const i = (s, l) => f.forEach(s, (c, d) => a(c, d, l));
    if (f.isPlainObject(e) || e instanceof this.constructor)
      i(e, r);
    else if (f.isString(e) && (e = e.trim()) && !Pp(e))
      i(Ap(e), r);
    else if (f.isObject(e) && f.isIterable(e)) {
      let s = {}, l, c;
      for (const d of e) {
        if (!f.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        s[c = d[0]] = (l = s[c]) ? f.isArray(l) ? [...l, d[1]] : [l, d[1]] : d[1];
      }
      i(s, r);
    } else
      e != null && a(r, e, t);
    return this;
  }
  get(e, r) {
    if (e = Po(e), e) {
      const t = f.findKey(this, e);
      if (t) {
        const n = this[t];
        if (!r)
          return n;
        if (r === !0)
          return Np(n);
        if (f.isFunction(r))
          return r.call(this, n, t);
        if (f.isRegExp(r))
          return r.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = Po(e), e) {
      const t = f.findKey(this, e);
      return !!(t && this[t] !== void 0 && (!r || Re(this, this[t], t, r)));
    }
    return !1;
  }
  delete(e, r) {
    const t = this;
    let n = !1;
    function a(i) {
      if (i = Po(i), i) {
        const s = f.findKey(t, i);
        s && (!r || Re(t, t[s], s, r)) && (delete t[s], n = !0);
      }
    }
    return f.isArray(e) ? e.forEach(a) : a(e), n;
  }
  clear(e) {
    const r = Object.keys(this);
    let t = r.length, n = !1;
    for (; t--; ) {
      const a = r[t];
      (!e || Re(this, this[a], a, e, !0)) && (delete this[a], n = !0);
    }
    return n;
  }
  normalize(e) {
    const r = this, t = {};
    return f.forEach(this, (n, a) => {
      const i = f.findKey(t, a);
      if (i) {
        r[i] = ne(n), delete r[a];
        return;
      }
      const s = e ? Lp(a) : String(a).trim();
      s !== a && delete r[a], r[s] = ne(n), t[s] = !0;
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
    const t = (this[wr] = this[wr] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function a(i) {
      const s = Po(i);
      t[s] || (Ip(n, i), t[s] = !0);
    }
    return f.isArray(e) ? e.forEach(a) : a(e), this;
  }
};
H.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
f.reduceDescriptors(H.prototype, ({ value: o }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => o,
    set(t) {
      this[r] = t;
    }
  };
});
f.freezeMethods(H);
function Ee(o, e) {
  const r = this || Jo, t = e || r, n = H.from(t.headers);
  let a = t.data;
  return f.forEach(o, function(s) {
    a = s.call(r, a, n.normalize(), e ? e.status : void 0);
  }), n.normalize(), a;
}
function pt(o) {
  return !!(o && o.__CANCEL__);
}
let Xo = class extends y {
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
function mt(o, e, r) {
  const t = r.config.validateStatus;
  !r.status || !t || t(r.status) ? o(r) : e(
    new y(
      "Request failed with status code " + r.status,
      [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
      r.config,
      r.request,
      r
    )
  );
}
function zp(o) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
  return e && e[1] || "";
}
function Dp(o, e) {
  o = o || 10;
  const r = new Array(o), t = new Array(o);
  let n = 0, a = 0, i;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const c = Date.now(), d = t[a];
    i || (i = c), r[n] = l, t[n] = c;
    let g = a, p = 0;
    for (; g !== n; )
      p += r[g++], g = g % o;
    if (n = (n + 1) % o, n === a && (a = (a + 1) % o), c - i < e)
      return;
    const m = d && c - d;
    return m ? Math.round(p * 1e3 / m) : void 0;
  };
}
function jp(o, e) {
  let r = 0, t = 1e3 / e, n, a;
  const i = (c, d = Date.now()) => {
    r = d, n = null, a && (clearTimeout(a), a = null), o(...c);
  };
  return [(...c) => {
    const d = Date.now(), g = d - r;
    g >= t ? i(c, d) : (n = c, a || (a = setTimeout(() => {
      a = null, i(n);
    }, t - g)));
  }, () => n && i(n)];
}
const fe = (o, e, r = 3) => {
  let t = 0;
  const n = Dp(50, 250);
  return jp((a) => {
    const i = a.loaded, s = a.lengthComputable ? a.total : void 0, l = i - t, c = n(l), d = i <= s;
    t = i;
    const g = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && s && d ? (s - i) / c : void 0,
      event: a,
      lengthComputable: s != null,
      [e ? "download" : "upload"]: !0
    };
    o(g);
  }, r);
}, Cr = (o, e) => {
  const r = o != null;
  return [
    (t) => e[0]({
      lengthComputable: r,
      total: o,
      loaded: t
    }),
    e[1]
  ];
}, xr = (o) => (...e) => f.asap(() => o(...e)), Fp = j.hasStandardBrowserEnv ? /* @__PURE__ */ ((o, e) => (r) => (r = new URL(r, j.origin), o.protocol === r.protocol && o.host === r.host && (e || o.port === r.port)))(
  new URL(j.origin),
  j.navigator && /(msie|trident)/i.test(j.navigator.userAgent)
) : () => !0, Mp = j.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(o, e, r, t, n, a, i) {
      if (typeof document > "u") return;
      const s = [`${o}=${encodeURIComponent(e)}`];
      f.isNumber(r) && s.push(`expires=${new Date(r).toUTCString()}`), f.isString(t) && s.push(`path=${t}`), f.isString(n) && s.push(`domain=${n}`), a === !0 && s.push("secure"), f.isString(i) && s.push(`SameSite=${i}`), document.cookie = s.join("; ");
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
function Up(o) {
  return typeof o != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}
function Wp(o, e) {
  return e ? o.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : o;
}
function ht(o, e, r) {
  let t = !Up(e);
  return o && (t || r == !1) ? Wp(o, e) : e;
}
const $r = (o) => o instanceof H ? { ...o } : o;
function xo(o, e) {
  e = e || {};
  const r = {};
  function t(c, d, g, p) {
    return f.isPlainObject(c) && f.isPlainObject(d) ? f.merge.call({ caseless: p }, c, d) : f.isPlainObject(d) ? f.merge({}, d) : f.isArray(d) ? d.slice() : d;
  }
  function n(c, d, g, p) {
    if (f.isUndefined(d)) {
      if (!f.isUndefined(c))
        return t(void 0, c, g, p);
    } else return t(c, d, g, p);
  }
  function a(c, d) {
    if (!f.isUndefined(d))
      return t(void 0, d);
  }
  function i(c, d) {
    if (f.isUndefined(d)) {
      if (!f.isUndefined(c))
        return t(void 0, c);
    } else return t(void 0, d);
  }
  function s(c, d, g) {
    if (g in e)
      return t(c, d);
    if (g in o)
      return t(void 0, c);
  }
  const l = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (c, d, g) => n($r(c), $r(d), g, !0)
  };
  return f.forEach(Object.keys({ ...o, ...e }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype") return;
    const g = f.hasOwnProp(l, d) ? l[d] : n, p = g(o[d], e[d], d);
    f.isUndefined(p) && g !== s || (r[d] = p);
  }), r;
}
const bt = (o) => {
  const e = xo({}, o);
  let { data: r, withXSRFToken: t, xsrfHeaderName: n, xsrfCookieName: a, headers: i, auth: s } = e;
  if (e.headers = i = H.from(i), e.url = ft(
    ht(e.baseURL, e.url, e.allowAbsoluteUrls),
    o.params,
    o.paramsSerializer
  ), s && i.set(
    "Authorization",
    "Basic " + btoa(
      (s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : "")
    )
  ), f.isFormData(r)) {
    if (j.hasStandardBrowserEnv || j.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (f.isFunction(r.getHeaders)) {
      const l = r.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(l).forEach(([d, g]) => {
        c.includes(d.toLowerCase()) && i.set(d, g);
      });
    }
  }
  if (j.hasStandardBrowserEnv && (t && f.isFunction(t) && (t = t(e)), t || t !== !1 && Fp(e.url))) {
    const l = n && a && Mp.read(a);
    l && i.set(n, l);
  }
  return e;
}, qp = typeof XMLHttpRequest < "u", Hp = qp && function(o) {
  return new Promise(function(r, t) {
    const n = bt(o);
    let a = n.data;
    const i = H.from(n.headers).normalize();
    let { responseType: s, onUploadProgress: l, onDownloadProgress: c } = n, d, g, p, m, u;
    function b() {
      m && m(), u && u(), n.cancelToken && n.cancelToken.unsubscribe(d), n.signal && n.signal.removeEventListener("abort", d);
    }
    let h = new XMLHttpRequest();
    h.open(n.method.toUpperCase(), n.url, !0), h.timeout = n.timeout;
    function v() {
      if (!h)
        return;
      const w = H.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), S = {
        data: !s || s === "text" || s === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: w,
        config: o,
        request: h
      };
      mt(
        function(R) {
          r(R), b();
        },
        function(R) {
          t(R), b();
        },
        S
      ), h = null;
    }
    "onloadend" in h ? h.onloadend = v : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, h.onabort = function() {
      h && (t(new y("Request aborted", y.ECONNABORTED, o, h)), h = null);
    }, h.onerror = function(x) {
      const S = x && x.message ? x.message : "Network Error", B = new y(S, y.ERR_NETWORK, o, h);
      B.event = x || null, t(B), h = null;
    }, h.ontimeout = function() {
      let x = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const S = n.transitional || Je;
      n.timeoutErrorMessage && (x = n.timeoutErrorMessage), t(
        new y(
          x,
          S.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
          o,
          h
        )
      ), h = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in h && f.forEach(i.toJSON(), function(x, S) {
      h.setRequestHeader(S, x);
    }), f.isUndefined(n.withCredentials) || (h.withCredentials = !!n.withCredentials), s && s !== "json" && (h.responseType = n.responseType), c && ([p, u] = fe(c, !0), h.addEventListener("progress", p)), l && h.upload && ([g, m] = fe(l), h.upload.addEventListener("progress", g), h.upload.addEventListener("loadend", m)), (n.cancelToken || n.signal) && (d = (w) => {
      h && (t(!w || w.type ? new Xo(null, o, h) : w), h.abort(), h = null);
    }, n.cancelToken && n.cancelToken.subscribe(d), n.signal && (n.signal.aborted ? d() : n.signal.addEventListener("abort", d)));
    const k = zp(n.url);
    if (k && j.protocols.indexOf(k) === -1) {
      t(
        new y(
          "Unsupported protocol " + k + ":",
          y.ERR_BAD_REQUEST,
          o
        )
      );
      return;
    }
    h.send(a || null);
  });
}, Vp = (o, e) => {
  const { length: r } = o = o ? o.filter(Boolean) : [];
  if (e || r) {
    let t = new AbortController(), n;
    const a = function(c) {
      if (!n) {
        n = !0, s();
        const d = c instanceof Error ? c : this.reason;
        t.abort(
          d instanceof y ? d : new Xo(d instanceof Error ? d.message : d)
        );
      }
    };
    let i = e && setTimeout(() => {
      i = null, a(new y(`timeout of ${e}ms exceeded`, y.ETIMEDOUT));
    }, e);
    const s = () => {
      o && (i && clearTimeout(i), i = null, o.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(a) : c.removeEventListener("abort", a);
      }), o = null);
    };
    o.forEach((c) => c.addEventListener("abort", a));
    const { signal: l } = t;
    return l.unsubscribe = () => f.asap(s), l;
  }
}, Jp = function* (o, e) {
  let r = o.byteLength;
  if (r < e) {
    yield o;
    return;
  }
  let t = 0, n;
  for (; t < r; )
    n = t + e, yield o.slice(t, n), t = n;
}, Xp = async function* (o, e) {
  for await (const r of Yp(o))
    yield* Jp(r, e);
}, Yp = async function* (o) {
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
}, Sr = (o, e, r, t) => {
  const n = Xp(o, e);
  let a = 0, i, s = (l) => {
    i || (i = !0, t && t(l));
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
          if (r) {
            let p = a += g;
            r(p);
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
}, Br = 64 * 1024, { isFunction: ee } = f, Gp = (({ Request: o, Response: e }) => ({
  Request: o,
  Response: e
}))(f.global), { ReadableStream: Rr, TextEncoder: Er } = f.global, _r = (o, ...e) => {
  try {
    return !!o(...e);
  } catch {
    return !1;
  }
}, Kp = (o) => {
  o = f.merge.call(
    {
      skipUndefined: !0
    },
    Gp,
    o
  );
  const { fetch: e, Request: r, Response: t } = o, n = e ? ee(e) : typeof fetch == "function", a = ee(r), i = ee(t);
  if (!n)
    return !1;
  const s = n && ee(Rr), l = n && (typeof Er == "function" ? /* @__PURE__ */ ((u) => (b) => u.encode(b))(new Er()) : async (u) => new Uint8Array(await new r(u).arrayBuffer())), c = a && s && _r(() => {
    let u = !1;
    const b = new r(j.origin, {
      body: new Rr(),
      method: "POST",
      get duplex() {
        return u = !0, "half";
      }
    }).headers.has("Content-Type");
    return u && !b;
  }), d = i && s && _r(() => f.isReadableStream(new t("").body)), g = {
    stream: d && ((u) => u.body)
  };
  n && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((u) => {
    !g[u] && (g[u] = (b, h) => {
      let v = b && b[u];
      if (v)
        return v.call(b);
      throw new y(
        `Response type '${u}' is not supported`,
        y.ERR_NOT_SUPPORT,
        h
      );
    });
  });
  const p = async (u) => {
    if (u == null)
      return 0;
    if (f.isBlob(u))
      return u.size;
    if (f.isSpecCompliantForm(u))
      return (await new r(j.origin, {
        method: "POST",
        body: u
      }).arrayBuffer()).byteLength;
    if (f.isArrayBufferView(u) || f.isArrayBuffer(u))
      return u.byteLength;
    if (f.isURLSearchParams(u) && (u = u + ""), f.isString(u))
      return (await l(u)).byteLength;
  }, m = async (u, b) => {
    const h = f.toFiniteNumber(u.getContentLength());
    return h ?? p(b);
  };
  return async (u) => {
    let {
      url: b,
      method: h,
      data: v,
      signal: k,
      cancelToken: w,
      timeout: x,
      onDownloadProgress: S,
      onUploadProgress: B,
      responseType: R,
      headers: Y,
      withCredentials: V = "same-origin",
      fetchOptions: ao
    } = bt(u), Z = e || fetch;
    R = R ? (R + "").toLowerCase() : "text";
    let G = Vp(
      [k, w && w.toAbortSignal()],
      x
    ), J = null;
    const L = G && G.unsubscribe && (() => {
      G.unsubscribe();
    });
    let io;
    try {
      if (B && c && h !== "get" && h !== "head" && (io = await m(Y, v)) !== 0) {
        let T = new r(b, {
          method: "POST",
          body: v,
          duplex: "half"
        }), W;
        if (f.isFormData(v) && (W = T.headers.get("content-type")) && Y.setContentType(W), T.body) {
          const [go, oo] = Cr(
            io,
            fe(xr(B))
          );
          v = Sr(T.body, Br, go, oo);
        }
      }
      f.isString(V) || (V = V ? "include" : "omit");
      const E = a && "credentials" in r.prototype, so = {
        ...ao,
        signal: G,
        method: h.toUpperCase(),
        headers: Y.normalize().toJSON(),
        body: v,
        duplex: "half",
        credentials: E ? V : void 0
      };
      J = a && new r(b, so);
      let F = await (a ? Z(J, ao) : Z(b, so));
      const co = d && (R === "stream" || R === "response");
      if (d && (S || co && L)) {
        const T = {};
        ["status", "statusText", "headers"].forEach((No) => {
          T[No] = F[No];
        });
        const W = f.toFiniteNumber(F.headers.get("content-length")), [go, oo] = S && Cr(
          W,
          fe(xr(S), !0)
        ) || [];
        F = new t(
          Sr(F.body, Br, go, () => {
            oo && oo(), L && L();
          }),
          T
        );
      }
      R = R || "text";
      let Q = await g[f.findKey(g, R) || "text"](
        F,
        u
      );
      return !co && L && L(), await new Promise((T, W) => {
        mt(T, W, {
          data: Q,
          headers: H.from(F.headers),
          status: F.status,
          statusText: F.statusText,
          config: u,
          request: J
        });
      });
    } catch (E) {
      throw L && L(), E && E.name === "TypeError" && /Load failed|fetch/i.test(E.message) ? Object.assign(
        new y(
          "Network Error",
          y.ERR_NETWORK,
          u,
          J,
          E && E.response
        ),
        {
          cause: E.cause || E
        }
      ) : y.from(E, E && E.code, u, J, E && E.response);
    }
  };
}, Zp = /* @__PURE__ */ new Map(), vt = (o) => {
  let e = o && o.env || {};
  const { fetch: r, Request: t, Response: n } = e, a = [t, n, r];
  let i = a.length, s = i, l, c, d = Zp;
  for (; s--; )
    l = a[s], c = d.get(l), c === void 0 && d.set(l, c = s ? /* @__PURE__ */ new Map() : Kp(e)), d = c;
  return c;
};
vt();
const Ye = {
  http: mp,
  xhr: Hp,
  fetch: {
    get: vt
  }
};
f.forEach(Ye, (o, e) => {
  if (o) {
    try {
      Object.defineProperty(o, "name", { value: e });
    } catch {
    }
    Object.defineProperty(o, "adapterName", { value: e });
  }
});
const Or = (o) => `- ${o}`, Qp = (o) => f.isFunction(o) || o === null || o === !1;
function om(o, e) {
  o = f.isArray(o) ? o : [o];
  const { length: r } = o;
  let t, n;
  const a = {};
  for (let i = 0; i < r; i++) {
    t = o[i];
    let s;
    if (n = t, !Qp(t) && (n = Ye[(s = String(t)).toLowerCase()], n === void 0))
      throw new y(`Unknown adapter '${s}'`);
    if (n && (f.isFunction(n) || (n = n.get(e))))
      break;
    a[s || "#" + i] = n;
  }
  if (!n) {
    const i = Object.entries(a).map(
      ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let s = r ? i.length > 1 ? `since :
` + i.map(Or).join(`
`) : " " + Or(i[0]) : "as no adapter specified";
    throw new y(
      "There is no suitable adapter to dispatch the request " + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return n;
}
const yt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: om,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ye
};
function _e(o) {
  if (o.cancelToken && o.cancelToken.throwIfRequested(), o.signal && o.signal.aborted)
    throw new Xo(null, o);
}
function Tr(o) {
  return _e(o), o.headers = H.from(o.headers), o.data = Ee.call(o, o.transformRequest), ["post", "put", "patch"].indexOf(o.method) !== -1 && o.headers.setContentType("application/x-www-form-urlencoded", !1), yt.getAdapter(o.adapter || Jo.adapter, o)(o).then(
    function(t) {
      return _e(o), t.data = Ee.call(o, o.transformResponse, t), t.headers = H.from(t.headers), t;
    },
    function(t) {
      return pt(t) || (_e(o), t && t.response && (t.response.data = Ee.call(
        o,
        o.transformResponse,
        t.response
      ), t.response.headers = H.from(t.response.headers))), Promise.reject(t);
    }
  );
}
const kt = "1.13.6", ke = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((o, e) => {
  ke[o] = function(t) {
    return typeof t === o || "a" + (e < 1 ? "n " : " ") + o;
  };
});
const Ar = {};
ke.transitional = function(e, r, t) {
  function n(a, i) {
    return "[Axios v" + kt + "] Transitional option '" + a + "'" + i + (t ? ". " + t : "");
  }
  return (a, i, s) => {
    if (e === !1)
      throw new y(
        n(i, " has been removed" + (r ? " in " + r : "")),
        y.ERR_DEPRECATED
      );
    return r && !Ar[i] && (Ar[i] = !0, console.warn(
      n(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(a, i, s) : !0;
  };
};
ke.spelling = function(e) {
  return (r, t) => (console.warn(`${t} is likely a misspelling of ${e}`), !0);
};
function em(o, e, r) {
  if (typeof o != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const t = Object.keys(o);
  let n = t.length;
  for (; n-- > 0; ) {
    const a = t[n], i = e[a];
    if (i) {
      const s = o[a], l = s === void 0 || i(s, a, o);
      if (l !== !0)
        throw new y(
          "option " + a + " must be " + l,
          y.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (r !== !0)
      throw new y("Unknown option " + a, y.ERR_BAD_OPTION);
  }
}
const ae = {
  assertOptions: em,
  validators: ke
}, K = ae.validators;
let Co = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new kr(),
      response: new kr()
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
        const a = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          t.stack ? a && !String(t.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (t.stack += `
` + a) : t.stack = a;
        } catch {
        }
      }
      throw t;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = xo(this.defaults, r);
    const { transitional: t, paramsSerializer: n, headers: a } = r;
    t !== void 0 && ae.assertOptions(
      t,
      {
        silentJSONParsing: K.transitional(K.boolean),
        forcedJSONParsing: K.transitional(K.boolean),
        clarifyTimeoutError: K.transitional(K.boolean),
        legacyInterceptorReqResOrdering: K.transitional(K.boolean)
      },
      !1
    ), n != null && (f.isFunction(n) ? r.paramsSerializer = {
      serialize: n
    } : ae.assertOptions(
      n,
      {
        encode: K.function,
        serialize: K.function
      },
      !0
    )), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), ae.assertOptions(
      r,
      {
        baseUrl: K.spelling("baseURL"),
        withXsrfToken: K.spelling("withXSRFToken")
      },
      !0
    ), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = a && f.merge(a.common, a[r.method]);
    a && f.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (u) => {
      delete a[u];
    }), r.headers = H.concat(i, a);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(b) {
      if (typeof b.runWhen == "function" && b.runWhen(r) === !1)
        return;
      l = l && b.synchronous;
      const h = r.transitional || Je;
      h && h.legacyInterceptorReqResOrdering ? s.unshift(b.fulfilled, b.rejected) : s.push(b.fulfilled, b.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(b) {
      c.push(b.fulfilled, b.rejected);
    });
    let d, g = 0, p;
    if (!l) {
      const u = [Tr.bind(this), void 0];
      for (u.unshift(...s), u.push(...c), p = u.length, d = Promise.resolve(r); g < p; )
        d = d.then(u[g++], u[g++]);
      return d;
    }
    p = s.length;
    let m = r;
    for (; g < p; ) {
      const u = s[g++], b = s[g++];
      try {
        m = u(m);
      } catch (h) {
        b.call(this, h);
        break;
      }
    }
    try {
      d = Tr.call(this, m);
    } catch (u) {
      return Promise.reject(u);
    }
    for (g = 0, p = c.length; g < p; )
      d = d.then(c[g++], c[g++]);
    return d;
  }
  getUri(e) {
    e = xo(this.defaults, e);
    const r = ht(e.baseURL, e.url, e.allowAbsoluteUrls);
    return ft(r, e.params, e.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(e) {
  Co.prototype[e] = function(r, t) {
    return this.request(
      xo(t || {}, {
        method: e,
        url: r,
        data: (t || {}).data
      })
    );
  };
});
f.forEach(["post", "put", "patch"], function(e) {
  function r(t) {
    return function(a, i, s) {
      return this.request(
        xo(s || {}, {
          method: e,
          headers: t ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: a,
          data: i
        })
      );
    };
  }
  Co.prototype[e] = r(), Co.prototype[e + "Form"] = r(!0);
});
let rm = class wt {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const t = this;
    this.promise.then((n) => {
      if (!t._listeners) return;
      let a = t._listeners.length;
      for (; a-- > 0; )
        t._listeners[a](n);
      t._listeners = null;
    }), this.promise.then = (n) => {
      let a;
      const i = new Promise((s) => {
        t.subscribe(s), a = s;
      }).then(n);
      return i.cancel = function() {
        t.unsubscribe(a);
      }, i;
    }, e(function(a, i, s) {
      t.reason || (t.reason = new Xo(a, i, s), r(t.reason));
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
      token: new wt(function(n) {
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
const De = {
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
Object.entries(De).forEach(([o, e]) => {
  De[e] = o;
});
function Ct(o) {
  const e = new Co(o), r = et(Co.prototype.request, e);
  return f.extend(r, Co.prototype, e, { allOwnKeys: !0 }), f.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(n) {
    return Ct(xo(o, n));
  }, r;
}
const O = Ct(Jo);
O.Axios = Co;
O.CanceledError = Xo;
O.CancelToken = rm;
O.isCancel = pt;
O.VERSION = kt;
O.toFormData = ye;
O.AxiosError = y;
O.Cancel = O.CanceledError;
O.all = function(e) {
  return Promise.all(e);
};
O.spread = tm;
O.isAxiosError = nm;
O.mergeConfig = xo;
O.AxiosHeaders = H;
O.formToJSON = (o) => gt(f.isHTMLForm(o) ? new FormData(o) : o);
O.getAdapter = yt.getAdapter;
O.HttpStatusCode = De;
O.default = O;
const {
  Axios: ih,
  AxiosError: sh,
  CanceledError: lh,
  isCancel: ch,
  CancelToken: dh,
  VERSION: uh,
  all: fh,
  Cancel: gh,
  isAxiosError: ph,
  spread: mh,
  toFormData: hh,
  AxiosHeaders: bh,
  HttpStatusCode: vh,
  formToJSON: yh,
  getAdapter: kh,
  mergeConfig: wh
} = O;
function am() {
  const o = M(!1), e = M(null);
  return { post: async (t, n, a = null) => {
    o.value = !0, e.value = null;
    try {
      const { data: i } = await O.post(t, n, {
        headers: a ? { Authorization: `Bearer ${a}` } : {}
      });
      return i;
    } catch (i) {
      return e.value = i.response?.data?.message || "Error", null;
    } finally {
      o.value = !1;
    }
  }, loading: o, error: e };
}
const Yo = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center"
}, Oo = {
  LIGHT: "light",
  DARK: "dark",
  COLORED: "colored",
  AUTO: "auto"
}, U = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  DEFAULT: "default"
}, im = {
  BOUNCE: "bounce",
  SLIDE: "slide",
  FLIP: "flip",
  ZOOM: "zoom",
  NONE: "none"
}, sm = {
  dangerouslyHTMLString: !1,
  multiple: !0,
  position: Yo.TOP_RIGHT,
  autoClose: 5e3,
  transition: "bounce",
  hideProgressBar: !1,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  closeOnClick: !0,
  className: "",
  bodyClassName: "",
  style: {},
  progressClassName: "",
  progressStyle: {},
  role: "alert",
  theme: "light"
}, lm = {
  rtl: !1,
  newestOnTop: !1,
  toastClassName: ""
}, xt = {
  ...sm,
  ...lm
};
U.DEFAULT;
var $ = /* @__PURE__ */ ((o) => (o[o.COLLAPSE_DURATION = 300] = "COLLAPSE_DURATION", o[o.DEBOUNCE_DURATION = 50] = "DEBOUNCE_DURATION", o.CSS_NAMESPACE = "Toastify", o))($ || {}), je = /* @__PURE__ */ ((o) => (o.ENTRANCE_ANIMATION_END = "d", o))(je || {});
const cm = {
  enter: "Toastify--animate Toastify__bounce-enter",
  exit: "Toastify--animate Toastify__bounce-exit",
  appendPosition: !0
}, dm = {
  enter: "Toastify--animate Toastify__slide-enter",
  exit: "Toastify--animate Toastify__slide-exit",
  appendPosition: !0
}, um = {
  enter: "Toastify--animate Toastify__zoom-enter",
  exit: "Toastify--animate Toastify__zoom-exit"
}, fm = {
  enter: "Toastify--animate Toastify__flip-enter",
  exit: "Toastify--animate Toastify__flip-exit"
}, Nr = "Toastify--animate Toastify__none-enter";
function $t(o, e = !1) {
  var r;
  let t = cm;
  if (!o || typeof o == "string")
    switch (o) {
      case "flip":
        t = fm;
        break;
      case "zoom":
        t = um;
        break;
      case "slide":
        t = dm;
        break;
    }
  else
    t = o;
  if (e)
    t.enter = Nr;
  else if (t.enter === Nr) {
    const n = (r = t.exit.split("__")[1]) == null ? void 0 : r.split("-")[0];
    t.enter = `Toastify--animate Toastify__${n}-enter`;
  }
  return t;
}
function gm(o) {
  return o.containerId || String(o.position);
}
const we = "will-unmount";
function pm(o = Yo.TOP_RIGHT) {
  return !!document.querySelector(`.${$.CSS_NAMESPACE}__toast-container--${o}`);
}
function mm(o = Yo.TOP_RIGHT) {
  return `${$.CSS_NAMESPACE}__toast-container--${o}`;
}
function hm(o, e, r = !1) {
  const t = [
    `${$.CSS_NAMESPACE}__toast-container`,
    `${$.CSS_NAMESPACE}__toast-container--${o}`,
    r ? `${$.CSS_NAMESPACE}__toast-container--rtl` : null
  ].filter(Boolean).join(" ");
  return Ro(e) ? e({
    position: o,
    rtl: r,
    defaultClassName: t
  }) : `${t} ${e || ""}`;
}
function bm(o) {
  var e;
  const { position: r, containerClassName: t, rtl: n = !1, style: a = {} } = o, i = $.CSS_NAMESPACE, s = mm(r), l = document.querySelector(`.${i}`), c = document.querySelector(`.${s}`), d = !!c && !((e = c.className) != null && e.includes(we)), g = l || document.createElement("div"), p = document.createElement("div");
  p.className = hm(
    r,
    t,
    n
  ), p.dataset.testid = `${$.CSS_NAMESPACE}__toast-container--${r}`, p.id = gm(o);
  for (const m in a)
    if (Object.prototype.hasOwnProperty.call(a, m)) {
      const u = a[m];
      p.style[m] = u;
    }
  return l || (g.className = $.CSS_NAMESPACE, document.body.appendChild(g)), d || g.appendChild(p), p;
}
function Fe(o) {
  var e, r, t;
  const n = typeof o == "string" ? o : ((e = o.currentTarget) == null ? void 0 : e.id) || ((r = o.target) == null ? void 0 : r.id), a = document.getElementById(n);
  a && a.removeEventListener("animationend", Fe, !1);
  try {
    Uo[n].unmount(), (t = document.getElementById(n)) == null || t.remove(), delete Uo[n], delete N[n];
  } catch {
  }
}
const Uo = mo({});
function vm(o, e) {
  const r = document.getElementById(String(e));
  r && (Uo[r.id] = o);
}
function Me(o, e = !0) {
  const r = String(o);
  if (!Uo[r]) return;
  const t = document.getElementById(r);
  t && t.classList.add(we), e ? (km(o), t && t.addEventListener("animationend", Fe, !1)) : Fe(r), lo.items = lo.items.filter((n) => n.containerId !== o);
}
function ym(o) {
  for (const e in Uo)
    Me(e, o);
  lo.items = [];
}
function St(o, e) {
  const r = document.getElementById(o.toastId);
  if (r) {
    let t = o;
    t = {
      ...t,
      ...$t(t.transition)
    };
    const n = t.appendPosition ? `${t.exit}--${t.position}` : t.exit;
    r.className += ` ${n}`, e && e(r);
  }
}
function km(o) {
  for (const e in N)
    if (e === o)
      for (const r of N[e] || [])
        St(r);
}
function wm(o) {
  const e = To().find((r) => r.toastId === o);
  return e?.containerId;
}
function Ge(o) {
  return document.getElementById(o);
}
function Cm(o) {
  const e = Ge(o.containerId);
  return e && e.classList.contains(we);
}
function Pr(o) {
  var e;
  const r = Dr(o.content) ? to(o.content.props) : null;
  return r ?? to((e = o.data) != null ? e : {});
}
function xm(o) {
  return o ? lo.items.filter((e) => e.containerId === o).length > 0 : lo.items.length > 0;
}
function $m() {
  if (lo.items.length > 0) {
    const o = lo.items.shift();
    ie(o?.toastContent, o?.toastProps);
  }
}
const N = mo({}), lo = mo({ items: [] });
function To() {
  const o = to(N);
  return Object.values(o).reduce((e, r) => [...e, ...r], []);
}
function Sm(o) {
  return To().find((e) => e.toastId === o);
}
function ie(o, e = {}) {
  if (Cm(e)) {
    const r = Ge(e.containerId);
    r && r.addEventListener("animationend", Ue.bind(null, o, e), !1);
  } else
    Ue(o, e);
}
function Ue(o, e = {}) {
  const r = Ge(e.containerId);
  r && r.removeEventListener("animationend", Ue.bind(null, o, e), !1);
  const t = N[e.containerId] || [], n = t.length > 0;
  if (!n && !pm(e.position)) {
    const a = bm(e), i = Ir(Hm, e);
    e.useHandler && e.useHandler(i), i.mount(a), vm(i, a.id);
  }
  n && !e.updateId && (e.position = t[0].position), me(() => {
    e.updateId ? X.update(e) : X.add(o, e);
  });
}
const X = {
  /**
   * add a toast
   * @param _ ..
   * @param opts toast props
   */
  add(o, e) {
    const { containerId: r = "" } = e;
    r && (N[r] = N[r] || [], N[r].find((t) => t.toastId === e.toastId) || setTimeout(() => {
      var t, n;
      e.newestOnTop ? (t = N[r]) == null || t.unshift(e) : (n = N[r]) == null || n.push(e), e.onOpen && e.onOpen(Pr(e));
    }, e.delay || 0));
  },
  /**
   * remove a toast
   * @param id toastId
   */
  remove(o) {
    if (o) {
      const e = wm(o);
      if (e) {
        const r = N[e];
        let t = r.find((n) => n.toastId === o);
        N[e] = r.filter((n) => n.toastId !== o), !N[e].length && !xm(e) && Me(e, !1), $m(), me(() => {
          t != null && t.onClose && (t.onClose(Pr(t)), t = void 0);
        });
      }
    }
  },
  /**
   * update the toast
   * @param opts toast props
   */
  update(o = {}) {
    const { containerId: e = "" } = o;
    if (e && o.updateId) {
      N[e] = N[e] || [];
      const r = N[e].find((a) => a.toastId === o.toastId), t = r?.position !== o.position || r?.transition !== o.transition, n = {
        ...o,
        disabledEnterTransition: !t,
        updateId: void 0
      };
      X.dismissForce(o?.toastId), setTimeout(() => {
        C(n.content, n);
      }, o.delay || 0);
    }
  },
  /**
   * clear all toasts in container.
   * @param containerId container id
   */
  clear(o, e = !0) {
    o ? Me(o, e) : ym(e);
  },
  dismissCallback(o) {
    var e;
    const r = (e = o.currentTarget) == null ? void 0 : e.id, t = document.getElementById(r);
    t && (t.removeEventListener("animationend", X.dismissCallback, !1), setTimeout(() => {
      X.remove(r);
    }));
  },
  dismiss(o) {
    if (o) {
      const e = To();
      for (const r of e)
        if (r.toastId === o) {
          St(r, (t) => {
            t.addEventListener("animationend", X.dismissCallback, !1);
          });
          break;
        }
    }
  },
  dismissForce(o) {
    if (o) {
      const e = To();
      for (const r of e)
        if (r.toastId === o) {
          const t = document.getElementById(o);
          t && (t.remove(), t.removeEventListener("animationend", X.dismissCallback, !1), X.remove(o));
          break;
        }
    }
  }
}, Bm = mo({ useHandler: void 0 }), Bt = mo({}), ge = mo({});
function Rt() {
  return Math.random().toString(36).substring(2, 9);
}
function Rm(o) {
  return typeof o == "number" && !isNaN(o);
}
function We(o) {
  return typeof o == "string";
}
function Ro(o) {
  return typeof o == "function";
}
function Ce(...o) {
  return ho(...o);
}
function se(o) {
  return typeof o == "object" && (!!(o != null && o.render) || !!(o != null && o.setup) || typeof o?.type == "object");
}
function Em(o = {}) {
  Bt[`${$.CSS_NAMESPACE}-default-options`] = o;
}
function _m() {
  return Bt[`${$.CSS_NAMESPACE}-default-options`] || xt;
}
function Om() {
  const o = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return document.documentElement.classList.contains("dark") || o ? "dark" : "light";
}
var le = /* @__PURE__ */ ((o) => (o[o.Enter = 0] = "Enter", o[o.Exit = 1] = "Exit", o))(le || {});
const Et = {
  containerId: {
    type: [String, Number],
    required: !1,
    default: ""
  },
  clearOnUrlChange: {
    type: Boolean,
    required: !1,
    default: !0
  },
  disabledEnterTransition: {
    type: Boolean,
    required: !1,
    default: !1
  },
  dangerouslyHTMLString: {
    type: Boolean,
    required: !1,
    default: !1
  },
  multiple: {
    type: Boolean,
    required: !1,
    default: !0
  },
  limit: {
    type: Number,
    required: !1,
    default: void 0
  },
  position: {
    type: String,
    required: !1,
    default: Yo.TOP_LEFT
  },
  bodyClassName: {
    type: String,
    required: !1,
    default: ""
  },
  autoClose: {
    type: [Number, Boolean],
    required: !1,
    default: !1
  },
  closeButton: {
    type: [Boolean, Function, Object],
    required: !1,
    default: void 0
  },
  transition: {
    type: [String, Object],
    required: !1,
    default: "bounce"
  },
  hideProgressBar: {
    type: Boolean,
    required: !1,
    default: !1
  },
  pauseOnHover: {
    type: Boolean,
    required: !1,
    default: !0
  },
  pauseOnFocusLoss: {
    type: Boolean,
    required: !1,
    default: !0
  },
  closeOnClick: {
    type: Boolean,
    required: !1,
    default: !0
  },
  progress: {
    type: Number,
    required: !1,
    default: void 0
  },
  progressClassName: {
    type: String,
    required: !1,
    default: ""
  },
  toastStyle: {
    type: Object,
    required: !1,
    default() {
      return {};
    }
  },
  progressStyle: {
    type: Object,
    required: !1,
    default() {
      return {};
    }
  },
  role: {
    type: String,
    required: !1,
    default: "alert"
  },
  theme: {
    type: String,
    required: !1,
    default: Oo.AUTO
  },
  content: {
    type: [String, Object, Function],
    required: !1,
    default: ""
  },
  toastId: {
    type: [String, Number],
    required: !1,
    default: ""
  },
  data: {
    type: [Object, String],
    required: !1,
    default() {
      return {};
    }
  },
  type: {
    type: String,
    required: !1,
    default: U.DEFAULT
  },
  icon: {
    type: [Boolean, String, Number, Object, Function],
    required: !1,
    default: void 0
  },
  delay: {
    type: Number,
    required: !1,
    default: void 0
  },
  onOpen: {
    type: Function,
    required: !1,
    default: void 0
  },
  onClose: {
    type: Function,
    required: !1,
    default: void 0
  },
  onClick: {
    type: Function,
    required: !1,
    default: void 0
  },
  isLoading: {
    type: Boolean,
    required: !1,
    default: void 0
  },
  rtl: {
    type: Boolean,
    required: !1,
    default: !1
  },
  toastClassName: {
    type: String,
    required: !1,
    default: ""
  },
  updateId: {
    type: [String, Number],
    required: !1,
    default: ""
  },
  contentProps: {
    type: Object,
    required: !1,
    default: null
  },
  expandCustomProps: {
    type: Boolean,
    required: !1,
    default: !1
  }
}, Tm = {
  autoClose: {
    type: [Number, Boolean],
    required: !0
  },
  isRunning: {
    type: Boolean,
    required: !1,
    default: void 0
  },
  type: {
    type: String,
    required: !1,
    default: U.DEFAULT
  },
  theme: {
    type: String,
    required: !1,
    default: Oo.AUTO
  },
  hide: {
    type: Boolean,
    required: !1,
    default: void 0
  },
  className: {
    type: [String, Function],
    required: !1,
    default: ""
  },
  controlledProgress: {
    type: Boolean,
    required: !1,
    default: void 0
  },
  rtl: {
    type: Boolean,
    required: !1,
    default: void 0
  },
  isIn: {
    type: Boolean,
    required: !1,
    default: void 0
  },
  progress: {
    type: Number,
    required: !1,
    default: void 0
  },
  closeToast: {
    type: Function,
    required: !1,
    default: void 0
  }
}, Am = /* @__PURE__ */ Wo({
  name: "ProgressBar",
  props: Tm,
  // @ts-ignore
  setup(o, {
    attrs: e
  }) {
    const r = M(), t = D(() => o.hide ? "true" : "false"), n = D(() => ({
      ...e.style || {},
      animationDuration: `${o.autoClose === !0 ? 5e3 : o.autoClose}ms`,
      animationPlayState: o.isRunning ? "running" : "paused",
      opacity: o.hide || o.autoClose === !1 ? 0 : 1,
      transform: o.controlledProgress ? `scaleX(${o.progress})` : "none"
    })), a = D(() => [`${$.CSS_NAMESPACE}__progress-bar`, o.controlledProgress ? `${$.CSS_NAMESPACE}__progress-bar--controlled` : `${$.CSS_NAMESPACE}__progress-bar--animated`, `${$.CSS_NAMESPACE}__progress-bar-theme--${o.theme}`, `${$.CSS_NAMESPACE}__progress-bar--${o.type}`, o.rtl ? `${$.CSS_NAMESPACE}__progress-bar--rtl` : null].filter(Boolean).join(" ")), i = D(() => `${a.value} ${e?.class || ""}`), s = () => {
      r.value && (r.value.onanimationend = null, r.value.ontransitionend = null);
    }, l = () => {
      o.isIn && o.closeToast && o.autoClose !== !1 && (o.closeToast(), s());
    }, c = D(() => o.controlledProgress ? null : l), d = D(() => o.controlledProgress ? l : null);
    return re(() => {
      r.value && (s(), r.value.onanimationend = c.value, r.value.ontransitionend = d.value);
    }), () => A("div", {
      ref: r,
      role: "progressbar",
      "aria-hidden": t.value,
      "aria-label": "notification timer",
      class: i.value,
      style: n.value
    }, null);
  }
}), Nm = /* @__PURE__ */ Wo({
  name: "CloseButton",
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      required: !1,
      default: Oo.AUTO
    },
    type: {
      type: String,
      required: !1,
      default: Oo.LIGHT
    },
    ariaLabel: {
      type: String,
      required: !1,
      default: "close"
    },
    closeToast: {
      type: Function,
      required: !1,
      default: void 0
    }
  },
  setup(o) {
    return () => A("button", {
      class: `${$.CSS_NAMESPACE}__close-button ${$.CSS_NAMESPACE}__close-button--${o.theme}`,
      type: "button",
      onClick: (e) => {
        e.stopPropagation(), o.closeToast && o.closeToast(e);
      },
      "aria-label": o.ariaLabel
    }, [A("svg", {
      "aria-hidden": "true",
      viewBox: "0 0 14 16"
    }, [A("path", {
      "fill-rule": "evenodd",
      d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    }, null)])]);
  }
}), xe = ({
  theme: o,
  type: e,
  path: r,
  ...t
}) => A("svg", ho({
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: o === "colored" ? "currentColor" : `var(--toastify-icon-color-${e})`
}, t), [A("path", {
  d: r
}, null)]);
function Pm(o) {
  return A(xe, ho(o, {
    path: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
  }), null);
}
function Lm(o) {
  return A(xe, ho(o, {
    path: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
  }), null);
}
function Im(o) {
  return A(xe, ho(o, {
    path: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
  }), null);
}
function zm(o) {
  return A(xe, ho(o, {
    path: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
  }), null);
}
function Dm() {
  return A("div", {
    class: `${$.CSS_NAMESPACE}__spinner`
  }, null);
}
const ce = {
  info: Lm,
  warning: Pm,
  success: Im,
  error: zm,
  spinner: Dm
}, jm = (o) => o in ce;
function Fm({
  theme: o,
  type: e,
  isLoading: r,
  icon: t
}) {
  let n;
  const a = !!r || e === "loading", i = {
    theme: o,
    type: e
  };
  if (a && (t === void 0 || typeof t == "boolean")) return ce.spinner();
  if (t !== !1) {
    if (se(t))
      n = to(t);
    else if (Ro(t)) {
      const s = t;
      i.type = a ? "loading" : e, n = s(i), n = !n && a ? ce.spinner() : n;
    } else Dr(t) ? n = Zt(t, i) : We(t) || Rm(t) ? n = t : jm(e) && (n = ce[e](i));
    return n;
  }
}
const Mm = () => {
};
function Um(o, e, r = $.COLLAPSE_DURATION) {
  const { scrollHeight: t, style: n } = o, a = r;
  requestAnimationFrame(() => {
    n.minHeight = "initial", n.height = t + "px", n.transition = `all ${a}ms`, requestAnimationFrame(() => {
      n.height = "0", n.padding = "0", n.margin = "0", setTimeout(e, a);
    });
  });
}
function Wm(o) {
  const e = M(!1), r = M(!1), t = M(!1), n = M(le.Enter), a = mo({
    ...o,
    appendPosition: o.appendPosition || !1,
    collapse: typeof o.collapse > "u" ? !0 : o.collapse,
    collapseDuration: o.collapseDuration || $.COLLAPSE_DURATION
  }), i = a.done || Mm, s = D(() => a.appendPosition ? `${a.enter}--${a.position}` : a.enter), l = D(() => a.appendPosition ? `${a.exit}--${a.position}` : a.exit), c = D(() => o.pauseOnHover ? {
    onMouseenter: h,
    onMouseleave: b
  } : {});
  function d() {
    const k = s.value.split(" ");
    p().addEventListener(
      je.ENTRANCE_ANIMATION_END,
      b,
      { once: !0 }
    );
    const w = (S) => {
      const B = p();
      S.target === B && (B.dispatchEvent(new Event(je.ENTRANCE_ANIMATION_END)), B.removeEventListener("animationend", w), B.removeEventListener("animationcancel", w), n.value === le.Enter && S.type !== "animationcancel" && B.classList.remove(...k));
    }, x = () => {
      const S = p();
      S.classList.add(...k), S.addEventListener("animationend", w), S.addEventListener("animationcancel", w);
    };
    o.pauseOnFocusLoss && m(), x();
  }
  function g() {
    if (!p()) return;
    const k = () => {
      const x = p();
      x.removeEventListener("animationend", k), a.collapse ? Um(x, i, a.collapseDuration) : i();
    }, w = () => {
      const x = p();
      n.value = le.Exit, x && (x.className += ` ${l.value}`, x.addEventListener("animationend", k));
    };
    r.value || (t.value ? k() : setTimeout(w));
  }
  function p() {
    return o.toastRef.value;
  }
  function m() {
    document.hasFocus() || h(), window.addEventListener("focus", b), window.addEventListener("blur", h);
  }
  function u() {
    window.removeEventListener("focus", b), window.removeEventListener("blur", h);
  }
  function b() {
    (!o.loading.value || o.isLoading === void 0) && (e.value = !0);
  }
  function h() {
    e.value = !1;
  }
  function v(k) {
    k && (k.stopPropagation(), k.preventDefault()), r.value = !1;
  }
  return re(g), re(() => {
    const k = To();
    r.value = k.findIndex((w) => w.toastId === a.toastId) > -1;
  }), re(() => {
    o.isLoading !== void 0 && (o.loading.value ? h() : b());
  }), pe(d), zr(() => {
    o.pauseOnFocusLoss && u();
  }), {
    isIn: r,
    isRunning: e,
    hideToast: v,
    eventHandlers: c
  };
}
const qm = /* @__PURE__ */ Wo({
  name: "ToastItem",
  inheritAttrs: !1,
  props: Et,
  // @ts-ignore
  setup(o) {
    const e = M(), r = D(() => !!o.isLoading), t = D(() => o.progress !== void 0 && o.progress !== null), n = D(() => Fm(o)), a = D(() => [`${$.CSS_NAMESPACE}__toast`, `${$.CSS_NAMESPACE}__toast-theme--${o.theme}`, `${$.CSS_NAMESPACE}__toast--${o.type}`, o.rtl ? `${$.CSS_NAMESPACE}__toast--rtl` : void 0, o.toastClassName || ""].filter(Boolean).join(" ")), {
      isRunning: i,
      isIn: s,
      hideToast: l,
      eventHandlers: c
    } = Wm({
      toastRef: e,
      loading: r,
      done: () => {
        X.remove(o.toastId);
      },
      ...$t(o.transition, o.disabledEnterTransition),
      ...o
    });
    return () => A("div", ho({
      id: o.toastId,
      class: a.value,
      style: o.toastStyle || {},
      ref: e,
      "data-testid": `toast-item-${o.toastId}`,
      onClick: (d) => {
        o.closeOnClick && l(), o.onClick && o.onClick(d);
      }
    }, c.value), [A("div", {
      role: o.role,
      "data-testid": "toast-body",
      class: `${$.CSS_NAMESPACE}__toast-body ${o.bodyClassName || ""}`
    }, [n.value != null && A("div", {
      "data-testid": `toast-icon-${o.type}`,
      class: [`${$.CSS_NAMESPACE}__toast-icon`, o.isLoading ? "" : `${$.CSS_NAMESPACE}--animate-icon ${$.CSS_NAMESPACE}__zoom-enter`].join(" ")
    }, [se(n.value) ? Go(to(n.value), {
      theme: o.theme,
      type: o.type
    }) : Ro(n.value) ? n.value({
      theme: o.theme,
      type: o.type
    }) : n.value]), A("div", {
      "data-testid": "toast-content"
    }, [se(o.content) ? Go(to(o.content), {
      toastProps: to(o),
      closeToast: l,
      data: o.data,
      ...o.expandCustomProps ? o.contentProps : {
        contentProps: o.contentProps || {}
      }
    }) : Ro(o.content) ? o.content({
      toastProps: to(o),
      closeToast: l,
      data: o.data
    }) : o.dangerouslyHTMLString ? Go("div", {
      innerHTML: o.content
    }) : o.content])]), (o.closeButton === void 0 || o.closeButton === !0) && A(Nm, {
      theme: o.theme,
      closeToast: (d) => {
        d.stopPropagation(), d.preventDefault(), l();
      }
    }, null), se(o.closeButton) ? Go(to(o.closeButton), {
      closeToast: l,
      type: o.type,
      theme: o.theme
    }) : Ro(o.closeButton) ? o.closeButton({
      closeToast: l,
      type: o.type,
      theme: o.theme
    }) : null, A(Am, {
      className: o.progressClassName,
      style: o.progressStyle,
      rtl: o.rtl,
      theme: o.theme,
      isIn: s.value,
      type: o.type,
      hide: o.hideProgressBar,
      isRunning: i.value,
      autoClose: o.autoClose,
      controlledProgress: t.value,
      progress: o.progress,
      closeToast: o.isLoading ? void 0 : l
    }, null)]);
  }
});
let zo = 0;
function _t() {
  typeof window > "u" || (zo && window.cancelAnimationFrame(zo), zo = window.requestAnimationFrame(_t), ge.lastUrl !== window.location.href && (ge.lastUrl = window.location.href, X.clear()));
}
const Hm = /* @__PURE__ */ Wo({
  name: "ToastifyContainer",
  inheritAttrs: !1,
  props: Et,
  // @ts-ignore
  setup(o) {
    const e = D(() => o.containerId), r = D(() => N[e.value] || []), t = D(() => r.value.filter((n) => n.position === o.position));
    return pe(() => {
      typeof window < "u" && o.clearOnUrlChange && window.requestAnimationFrame(_t);
    }), zr(() => {
      typeof window < "u" && zo && (window.cancelAnimationFrame(zo), ge.lastUrl = "");
    }), () => A(Kt, null, [t.value.map((n) => {
      const {
        toastId: a = ""
      } = n;
      return A(qm, ho({
        key: a
      }, n), null);
    })]);
  }
});
let Oe = !1;
const Ot = {
  isLoading: !0,
  autoClose: !1,
  closeOnClick: !1,
  closeButton: !1,
  draggable: !1
};
function Tt() {
  const o = [];
  return To().forEach((e) => {
    const r = document.getElementById(e.containerId);
    r && !r.classList.contains(we) && o.push(e);
  }), o;
}
function Vm(o) {
  const e = Tt().length, r = o ?? 0;
  return r > 0 && e + lo.items.length >= r;
}
function Jm(o) {
  Vm(o.limit) && !o.updateId && lo.items.push({
    toastId: o.toastId,
    containerId: o.containerId,
    toastContent: o.content,
    toastProps: o
  });
}
function bo(o, e, r = {}) {
  if (Oe) return;
  r = Ce(_m(), {
    type: e
  }, to(r)), (!r.toastId || typeof r.toastId != "string" && typeof r.toastId != "number") && (r.toastId = Rt()), r = {
    ...r,
    ...r.type === "loading" ? Ot : {},
    content: o,
    containerId: r.containerId || String(r.position)
  };
  const t = Number(r?.progress);
  return !isNaN(t) && t < 0 && (r.progress = 0), t > 1 && (r.progress = 1), r.theme === "auto" && (r.theme = Om()), Jm(r), ge.lastUrl = window.location.href, r.multiple ? lo.items.length ? r.updateId && ie(o, r) : ie(o, r) : (Oe = !0, C.clearAll(void 0, !1), setTimeout(() => {
    ie(o, r);
  }, 0), setTimeout(() => {
    Oe = !1;
  }, 390)), r.toastId;
}
const C = (o, e) => bo(o, U.DEFAULT, e);
C.info = (o, e) => bo(o, U.DEFAULT, {
  ...e,
  type: U.INFO
});
C.error = (o, e) => bo(o, U.DEFAULT, {
  ...e,
  type: U.ERROR
});
C.warning = (o, e) => bo(o, U.DEFAULT, {
  ...e,
  type: U.WARNING
});
C.warn = C.warning;
C.success = (o, e) => bo(o, U.DEFAULT, {
  ...e,
  type: U.SUCCESS
});
C.loading = (o, e) => bo(o, U.DEFAULT, Ce(e, Ot));
C.dark = (o, e) => bo(o, U.DEFAULT, Ce(e, {
  theme: Oo.DARK
}));
C.remove = (o) => {
  o ? X.dismiss(o) : X.clear();
};
C.clearAll = (o, e) => {
  me(() => {
    X.clear(o, e);
  });
};
C.isActive = (o) => {
  let e = !1;
  return e = Tt().findIndex((r) => r.toastId === o) > -1, e;
};
C.update = (o, e = {}) => {
  setTimeout(() => {
    const r = Sm(o);
    if (r) {
      const t = to(r), {
        content: n
      } = t, a = {
        ...t,
        ...e,
        toastId: e.toastId || o,
        updateId: Rt()
      }, i = a.render || n;
      delete a.render, bo(i, a.type, a);
    }
  }, 0);
};
C.done = (o) => {
  C.update(o, {
    isLoading: !1,
    progress: 1
  });
};
C.promise = Xm;
function Xm(o, {
  pending: e,
  error: r,
  success: t
}, n) {
  var a, i, s;
  let l;
  const c = {
    ...n || {},
    autoClose: !1
  };
  e && (l = We(e) ? C.loading(e, c) : C.loading(e.render, {
    ...c,
    ...e
  }));
  const d = {
    autoClose: (a = n?.autoClose) != null ? a : !0,
    closeOnClick: (i = n?.closeOnClick) != null ? i : !0,
    closeButton: (s = n?.autoClose) != null ? s : null,
    isLoading: void 0,
    draggable: null,
    delay: 100
  }, g = (m, u, b) => {
    if (u == null) {
      C.remove(l);
      return;
    }
    const h = {
      type: m,
      ...d,
      ...n,
      data: b
    }, v = We(u) ? {
      render: u
    } : u;
    return l ? C.update(l, {
      ...h,
      ...v,
      isLoading: !1
    }) : C(v.render, {
      ...h,
      ...v,
      isLoading: !1
    }), b;
  }, p = Ro(o) ? o() : o;
  return p.then((m) => {
    g("success", t, m);
  }).catch((m) => {
    g("error", r, m);
  }), p;
}
C.POSITION = Yo;
C.THEME = Oo;
C.TYPE = U;
C.TRANSITIONS = im;
const Ym = {
  install(o, e = {}) {
    Bm.useHandler = e.useHandler || (() => {
    }), Gm(e);
  }
};
typeof window < "u" && (window.Vue3Toastify = Ym);
function Gm(o = {}) {
  const e = Ce(xt, o);
  Em(e);
}
const Km = { key: 0 }, Zm = ["innerHTML"], Qm = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=product_bluk_upload", oh = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=download_sample_bulk_upload", Lr = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", eh = /* @__PURE__ */ Wo({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(o) {
    const e = M([]), r = M("json"), { post: t } = am(), n = async () => {
      if (!e.value.length) return C.error("No file selected");
      const s = new FormData();
      if (s.append("file", e.value[0]), s.append("file_format", r.value), s.append("collection", "products"), !await t(Qm, s, Lr)) return C.error("Error uploading bulk product");
      C.success("File uploaded successfully!");
    };
    async function a(s) {
      const l = C.loading(`Downloading ${s.toUpperCase()} file...`);
      console.log("SENDING REQUEST BODY:", { file_format: s });
      try {
        const c = await fetch(oh, {
          method: "POST",
          headers: {
            accept: "application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, */*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Lr}`
          },
          // This guarantees {"file_format": "excel"} or {"file_format": "json"} is sent
          body: JSON.stringify({ file_format: s })
        });
        if (!c.ok)
          throw new Error(`Server responded with status: ${c.status}`);
        const d = await c.blob();
        let g = `sample_bulk_upload.${s === "excel" ? "xlsx" : "json"}`;
        const p = c.headers.get("content-disposition");
        if (p && p.includes("filename=")) {
          const b = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(p);
          b != null && b[1] && (g = b[1].replace(/['"]/g, ""));
        }
        const m = window.URL.createObjectURL(d), u = document.createElement("a");
        u.style.display = "none", u.href = m, u.download = g, document.body.appendChild(u), u.click(), window.URL.revokeObjectURL(m), document.body.removeChild(u), C.update(l, {
          render: `Success! ${g} downloaded.`,
          type: "success",
          isLoading: !1,
          autoClose: 3e3
        });
      } catch (c) {
        console.error("Download Error:", c), C.update(l, {
          render: "Download failed. Check the console.",
          type: "error",
          isLoading: !1,
          autoClose: 3e3
        });
      }
    }
    const i = M(null);
    return pe(() => {
      (async () => {
        let s = "", l = {
          l: [
            {
              id: "c78c-form_holder",
              type: "form_holder",
              slug: "form_holder",
              data: {
                title: "Bulk product upload",
                mode: "manual",
                class: {
                  b: "bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto mt-10"
                },
                ce_file: {
                  data: {
                    l: [
                      {
                        id: "section-download",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "1. Download Sample File",
                          l: [],
                          theme: "light"
                        }
                      },
                      {
                        id: "input-download-format",
                        type: "form_autocomplete",
                        slug: "form_autocomplete",
                        data: {
                          value: r.value,
                          label: "File Format",
                          placeholder: "Select format...",
                          options: [
                            { id: "json", name: "JSON" },
                            { id: "excel", name: "excel" }
                          ],
                          optionLabel: "name",
                          optionValue: "id",
                          dropdown: !0,
                          showClear: !1,
                          class: "w-full mb-3",
                          form: { section_id: "section-download" }
                        }
                      },
                      {
                        id: "btn-download-sample",
                        type: "form_button",
                        slug: "form_button",
                        data: {
                          label: "Download Sample",
                          class: "w-full mb-8 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded shadow transition-all",
                          variant: "solid",
                          form: { section_id: "section-download" }
                        }
                      },
                      {
                        id: "3e1bc78c-form_section",
                        type: "form_section",
                        slug: "form_section",
                        data: {
                          label: "2. Select File to Upload",
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
                          accept: ".json,.xlsx",
                          maxFileSize: 2e7,
                          auto: !1,
                          emptyText: "Drag and drop files here to upload",
                          style: {},
                          class: "",
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
                          label: "Submit Upload",
                          class: "w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded shadow transition-all",
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
          ]
        };
        const c = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, d = await Sg(c), g = await Bg(c);
        (async () => $g("child:msg", async (m) => {
          const u = m.id || m.custom?.id || m?._$p?.data?.curr?.id || m.data?.id || m?._$p?.id;
          if (console.log("🔔 Event received from CE:", { event: m.type, id: u, payload: m.custom || m.data }), m.type === "fileUpload:uploader" && (e.value = m.custom?.event?.files || [], console.log("Files queue:", e.value)), u === "input-download-format" && m.type === "autocomplete:select") {
            let b = m.custom?.selectedValue?.id || m.data?.selectedValue?.id;
            (b === "excel" || b === "json") && (r.value = b, console.log("✅ Selection successfully updated in Vue to:", r.value));
          }
          m.type === "click" && (u === "btn-download-sample" ? await a(r.value) : u === "868c-form_button" && await n());
        }))(), await (async () => {
          const m = await d.set({
            data: l
          });
          i.value = m.r || "", s = m.style;
          const u = document.createElement("style");
          document.head.appendChild(u), u.innerHTML = s, setTimeout(async () => {
            await g.set({
              data: l
            });
          }, 200);
        })();
      })();
    }), (s, l) => i.value ? (rn(), Qt("div", Km, [
      on("div", { innerHTML: i.value }, null, 8, Zm)
    ])) : en("", !0);
  }
}), Ch = async (o) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const t = Ir(eh, {
      _p: o,
      _$p: e
    });
    t.use(Kn, {
      theme: {
        preset: kg
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
    }, a = document.getElementById(o.f.name("vue-root"));
    return t.mount(a), n;
  }
});
export {
  Ch as hydrator,
  Ch as index
};
