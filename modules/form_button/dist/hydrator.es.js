import { r as be, g as rr, o as me, n as he, w as po, a as Do, b as ve, u as ye, m as z, c as H, d as ho, e as ke, f as bo, h as $e, t as jr, i as er, j as we, k as Ce, l as Io, p as xe, q as Mo, s as tr, v as Se, x as Be, y as _e, z as Re, A as Pe } from "./runtime-dom.esm-bundler-D2AW2I37.js";
var Oe = Object.defineProperty, nr = Object.getOwnPropertySymbols, Te = Object.prototype.hasOwnProperty, ze = Object.prototype.propertyIsEnumerable, ar = (o, r, e) => r in o ? Oe(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, je = (o, r) => {
  for (var e in r || (r = {})) Te.call(r, e) && ar(o, e, r[e]);
  if (nr) for (var e of nr(r)) ze.call(r, e) && ar(o, e, r[e]);
  return o;
};
function ao(o) {
  return o == null || o === "" || Array.isArray(o) && o.length === 0 || !(o instanceof Date) && typeof o == "object" && Object.keys(o).length === 0;
}
function qo(o) {
  return typeof o == "function" && "call" in o && "apply" in o;
}
function B(o) {
  return !ao(o);
}
function M(o, r = !0) {
  return o instanceof Object && o.constructor === Object && (r || Object.keys(o).length !== 0);
}
function Lr(o = {}, r = {}) {
  let e = je({}, o);
  return Object.keys(r).forEach((t) => {
    let n = t;
    M(r[n]) && n in o && M(o[n]) ? e[n] = Lr(o[n], r[n]) : e[n] = r[n];
  }), e;
}
function Le(...o) {
  return o.reduce((r, e, t) => t === 0 ? e : Lr(r, e), {});
}
function L(o, ...r) {
  return qo(o) ? o(...r) : o;
}
function j(o, r = !0) {
  return typeof o == "string" && (r || o !== "");
}
function W(o) {
  return j(o) ? o.replace(/(-|_)/g, "").toLowerCase() : o;
}
function Qo(o, r = "", e = {}) {
  let t = W(r).split("."), n = t.shift();
  if (n) {
    if (M(o)) {
      let d = Object.keys(o).find((l) => W(l) === n) || "";
      return Qo(L(o[d], e), t.join("."), e);
    }
    return;
  }
  return L(o, e);
}
function Ar(o, r = !0) {
  return Array.isArray(o) && (r || o.length !== 0);
}
function Ae(o) {
  return B(o) && !isNaN(o);
}
function to(o, r) {
  if (r) {
    let e = r.test(o);
    return r.lastIndex = 0, e;
  }
  return !1;
}
function Ne(...o) {
  return Le(...o);
}
function vo(o) {
  return o && o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function De(o) {
  return j(o, !1) ? o[0].toUpperCase() + o.slice(1) : o;
}
function Nr(o) {
  return j(o) ? o.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : o;
}
function Dr() {
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
function yo(...o) {
  if (o) {
    let r = [];
    for (let e = 0; e < o.length; e++) {
      let t = o[e];
      if (!t) continue;
      let n = typeof t;
      if (n === "string" || n === "number") r.push(t);
      else if (n === "object") {
        let d = Array.isArray(t) ? [yo(...t)] : Object.entries(t).map(([l, i]) => i ? l : void 0);
        r = d.length ? r.concat(d.filter((l) => !!l)) : r;
      }
    }
    return r.join(" ").trim();
  }
}
function Ie(o, r) {
  return o ? o.classList ? o.classList.contains(r) : new RegExp("(^| )" + r + "( |$)", "gi").test(o.className) : !1;
}
function Ee(o, r) {
  if (o && r) {
    let e = (t) => {
      Ie(o, t) || (o.classList ? o.classList.add(t) : o.className += " " + t);
    };
    [r].flat().filter(Boolean).forEach((t) => t.split(" ").forEach(e));
  }
}
function Vo(o, r) {
  if (o && r) {
    let e = (t) => {
      o.classList ? o.classList.remove(t) : o.className = o.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [r].flat().filter(Boolean).forEach((t) => t.split(" ").forEach(e));
  }
}
function ir(o) {
  return o ? Math.abs(o.scrollLeft) : 0;
}
function We(o, r) {
  return o instanceof HTMLElement ? o.offsetWidth : 0;
}
function Me(o) {
  if (o) {
    let r = o.parentNode;
    return r && r instanceof ShadowRoot && r.host && (r = r.host), r;
  }
  return null;
}
function Ve(o) {
  return !!(o !== null && typeof o < "u" && o.nodeName && Me(o));
}
function To(o) {
  return typeof Element < "u" ? o instanceof Element : o !== null && typeof o == "object" && o.nodeType === 1 && typeof o.nodeName == "string";
}
function Eo(o, r = {}) {
  if (To(o)) {
    let e = (t, n) => {
      var d, l;
      let i = (d = o?.$attrs) != null && d[t] ? [(l = o?.$attrs) == null ? void 0 : l[t]] : [];
      return [n].flat().reduce((a, c) => {
        if (c != null) {
          let s = typeof c;
          if (s === "string" || s === "number") a.push(c);
          else if (s === "object") {
            let u = Array.isArray(c) ? e(t, c) : Object.entries(c).map(([f, g]) => t === "style" && (g || g === 0) ? `${f.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${g}` : g ? f : void 0);
            a = u.length ? a.concat(u.filter((f) => !!f)) : a;
          }
        }
        return a;
      }, i);
    };
    Object.entries(r).forEach(([t, n]) => {
      if (n != null) {
        let d = t.match(/^on(.+)/);
        d ? o.addEventListener(d[1].toLowerCase(), n) : t === "p-bind" || t === "pBind" ? Eo(o, n) : (n = t === "class" ? [...new Set(e("class", n))].join(" ").trim() : t === "style" ? e("style", n).join(";").trim() : n, (o.$attrs = o.$attrs || {}) && (o.$attrs[t] = n), o.setAttribute(t, n));
      }
    });
  }
}
function Fe(o, r = {}, ...e) {
  {
    let t = document.createElement(o);
    return Eo(t, r), t.append(...e), t;
  }
}
function He(o, r) {
  return To(o) ? o.matches(r) ? o : o.querySelector(r) : null;
}
function Ue(o, r) {
  if (To(o)) {
    let e = o.getAttribute(r);
    return isNaN(e) ? e === "true" || e === "false" ? e === "true" : e : +e;
  }
}
function dr(o) {
  if (o) {
    let r = o.offsetHeight, e = getComputedStyle(o);
    return r -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom) + parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), r;
  }
  return 0;
}
function Ye(o) {
  if (o) {
    let r = o.getBoundingClientRect();
    return { top: r.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: r.left + (window.pageXOffset || ir(document.documentElement) || ir(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function Ge(o, r) {
  return o ? o.offsetHeight : 0;
}
function lr(o) {
  if (o) {
    let r = o.offsetWidth, e = getComputedStyle(o);
    return r -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight) + parseFloat(e.borderLeftWidth) + parseFloat(e.borderRightWidth), r;
  }
  return 0;
}
function Xe() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ke(o, r = "", e) {
  To(o) && e !== null && e !== void 0 && o.setAttribute(r, e);
}
var jo = {};
function qe(o = "pui_id_") {
  return Object.hasOwn(jo, o) || (jo[o] = 0), jo[o]++, `${o}${jo[o]}`;
}
var Qe = Object.defineProperty, Ze = Object.defineProperties, Je = Object.getOwnPropertyDescriptors, Wo = Object.getOwnPropertySymbols, Ir = Object.prototype.hasOwnProperty, Er = Object.prototype.propertyIsEnumerable, cr = (o, r, e) => r in o ? Qe(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, D = (o, r) => {
  for (var e in r || (r = {})) Ir.call(r, e) && cr(o, e, r[e]);
  if (Wo) for (var e of Wo(r)) Er.call(r, e) && cr(o, e, r[e]);
  return o;
}, Fo = (o, r) => Ze(o, Je(r)), F = (o, r) => {
  var e = {};
  for (var t in o) Ir.call(o, t) && r.indexOf(t) < 0 && (e[t] = o[t]);
  if (o != null && Wo) for (var t of Wo(o)) r.indexOf(t) < 0 && Er.call(o, t) && (e[t] = o[t]);
  return e;
}, ot = Dr(), P = ot, ko = /{([^}]*)}/g, Wr = /(\d+\s+[\+\-\*\/]\s+\d+)/g, Mr = /var\([^)]+\)/g;
function sr(o) {
  return j(o) ? o.replace(/[A-Z]/g, (r, e) => e === 0 ? r : "." + r.toLowerCase()).toLowerCase() : o;
}
function rt(o) {
  return M(o) && o.hasOwnProperty("$value") && o.hasOwnProperty("$type") ? o.$value : o;
}
function et(o) {
  return o.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Uo(o = "", r = "") {
  return et(`${j(o, !1) && j(r, !1) ? `${o}-` : o}${r}`);
}
function Vr(o = "", r = "") {
  return `--${Uo(o, r)}`;
}
function tt(o = "") {
  let r = (o.match(/{/g) || []).length, e = (o.match(/}/g) || []).length;
  return (r + e) % 2 !== 0;
}
function Fr(o, r = "", e = "", t = [], n) {
  if (j(o)) {
    let d = o.trim();
    if (tt(d)) return;
    if (to(d, ko)) {
      let l = d.replaceAll(ko, (i) => {
        let a = i.replace(/{|}/g, "").split(".").filter((c) => !t.some((s) => to(c, s)));
        return `var(${Vr(e, Nr(a.join("-")))}${B(n) ? `, ${n}` : ""})`;
      });
      return to(l.replace(Mr, "0"), Wr) ? `calc(${l})` : l;
    }
    return d;
  } else if (Ae(o)) return o;
}
function nt(o, r, e) {
  j(r, !1) && o.push(`${r}:${e};`);
}
function uo(o, r) {
  return o ? `${o}{${r}}` : "";
}
function Hr(o, r) {
  if (o.indexOf("dt(") === -1) return o;
  function e(l, i) {
    let a = [], c = 0, s = "", u = null, f = 0;
    for (; c <= l.length; ) {
      let g = l[c];
      if ((g === '"' || g === "'" || g === "`") && l[c - 1] !== "\\" && (u = u === g ? null : g), !u && (g === "(" && f++, g === ")" && f--, (g === "," || c === l.length) && f === 0)) {
        let b = s.trim();
        b.startsWith("dt(") ? a.push(Hr(b, i)) : a.push(t(b)), s = "", c++;
        continue;
      }
      g !== void 0 && (s += g), c++;
    }
    return a;
  }
  function t(l) {
    let i = l[0];
    if ((i === '"' || i === "'" || i === "`") && l[l.length - 1] === i) return l.slice(1, -1);
    let a = Number(l);
    return isNaN(a) ? l : a;
  }
  let n = [], d = [];
  for (let l = 0; l < o.length; l++) if (o[l] === "d" && o.slice(l, l + 3) === "dt(") d.push(l), l += 2;
  else if (o[l] === ")" && d.length > 0) {
    let i = d.pop();
    d.length === 0 && n.push([i, l]);
  }
  if (!n.length) return o;
  for (let l = n.length - 1; l >= 0; l--) {
    let [i, a] = n[l], c = o.slice(i + 3, a), s = e(c, r), u = r(...s);
    o = o.slice(0, i) + u + o.slice(a + 1);
  }
  return o;
}
var no = (...o) => at(x.getTheme(), ...o), at = (o = {}, r, e, t) => {
  if (r) {
    let { variable: n, options: d } = x.defaults || {}, { prefix: l, transform: i } = o?.options || d || {}, a = to(r, ko) ? r : `{${r}}`;
    return t === "value" || ao(t) && i === "strict" ? x.getTokenValue(r) : Fr(a, void 0, l, [n.excludedKeyRegex], e);
  }
  return "";
};
function Lo(o, ...r) {
  if (o instanceof Array) {
    let e = o.reduce((t, n, d) => {
      var l;
      return t + n + ((l = L(r[d], { dt: no })) != null ? l : "");
    }, "");
    return Hr(e, no);
  }
  return L(o, { dt: no });
}
function it(o, r = {}) {
  let e = x.defaults.variable, { prefix: t = e.prefix, selector: n = e.selector, excludedKeyRegex: d = e.excludedKeyRegex } = r, l = [], i = [], a = [{ node: o, path: t }];
  for (; a.length; ) {
    let { node: s, path: u } = a.pop();
    for (let f in s) {
      let g = s[f], b = rt(g), h = to(f, d) ? Uo(u) : Uo(u, Nr(f));
      if (M(b)) a.push({ node: b, path: h });
      else {
        let m = Vr(h), v = Fr(b, h, t, [d]);
        nt(i, m, v);
        let w = h;
        t && w.startsWith(t + "-") && (w = w.slice(t.length + 1)), l.push(w.replace(/-/g, "."));
      }
    }
  }
  let c = i.join("");
  return { value: i, tokens: l, declarations: c, css: uo(n, c) };
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
    return (t = r.map((n) => n.resolve(e)).find((n) => n.matched)) != null ? t : this.rules.custom.resolve(e);
  });
} }, _toVariables(o, r) {
  return it(o, { prefix: r?.prefix });
}, getCommon({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var d, l, i, a, c, s, u;
  let { preset: f, options: g } = r, b, h, m, v, w, S, p;
  if (B(f) && g.transform !== "strict") {
    let { primitive: k, semantic: R, extend: A } = f, U = R || {}, { colorScheme: Y } = U, Q = F(U, ["colorScheme"]), G = A || {}, { colorScheme: Z } = G, J = F(G, ["colorScheme"]), X = Y || {}, { dark: oo } = X, io = F(X, ["dark"]), ro = Z || {}, { dark: lo } = ro, co = F(ro, ["dark"]), V = B(k) ? this._toVariables({ primitive: k }, g) : {}, I = B(Q) ? this._toVariables({ semantic: Q }, g) : {}, eo = B(io) ? this._toVariables({ light: io }, g) : {}, zo = B(oo) ? this._toVariables({ dark: oo }, g) : {}, so = B(J) ? this._toVariables({ semantic: J }, g) : {}, Jo = B(co) ? this._toVariables({ light: co }, g) : {}, or = B(lo) ? this._toVariables({ dark: lo }, g) : {}, [Qr, Zr] = [(d = V.declarations) != null ? d : "", V.tokens], [Jr, oe] = [(l = I.declarations) != null ? l : "", I.tokens || []], [re, ee] = [(i = eo.declarations) != null ? i : "", eo.tokens || []], [te, ne] = [(a = zo.declarations) != null ? a : "", zo.tokens || []], [ae, ie] = [(c = so.declarations) != null ? c : "", so.tokens || []], [de, le] = [(s = Jo.declarations) != null ? s : "", Jo.tokens || []], [ce, se] = [(u = or.declarations) != null ? u : "", or.tokens || []];
    b = this.transformCSS(o, Qr, "light", "variable", g, t, n), h = Zr;
    let ue = this.transformCSS(o, `${Jr}${re}`, "light", "variable", g, t, n), fe = this.transformCSS(o, `${te}`, "dark", "variable", g, t, n);
    m = `${ue}${fe}`, v = [.../* @__PURE__ */ new Set([...oe, ...ee, ...ne])];
    let ge = this.transformCSS(o, `${ae}${de}color-scheme:light`, "light", "variable", g, t, n), pe = this.transformCSS(o, `${ce}color-scheme:dark`, "dark", "variable", g, t, n);
    w = `${ge}${pe}`, S = [.../* @__PURE__ */ new Set([...ie, ...le, ...se])], p = L(f.css, { dt: no });
  }
  return { primitive: { css: b, tokens: h }, semantic: { css: m, tokens: v }, global: { css: w, tokens: S }, style: p };
}, getPreset({ name: o = "", preset: r = {}, options: e, params: t, set: n, defaults: d, selector: l }) {
  var i, a, c;
  let s, u, f;
  if (B(r) && e.transform !== "strict") {
    let g = o.replace("-directive", ""), b = r, { colorScheme: h, extend: m, css: v } = b, w = F(b, ["colorScheme", "extend", "css"]), S = m || {}, { colorScheme: p } = S, k = F(S, ["colorScheme"]), R = h || {}, { dark: A } = R, U = F(R, ["dark"]), Y = p || {}, { dark: Q } = Y, G = F(Y, ["dark"]), Z = B(w) ? this._toVariables({ [g]: D(D({}, w), k) }, e) : {}, J = B(U) ? this._toVariables({ [g]: D(D({}, U), G) }, e) : {}, X = B(A) ? this._toVariables({ [g]: D(D({}, A), Q) }, e) : {}, [oo, io] = [(i = Z.declarations) != null ? i : "", Z.tokens || []], [ro, lo] = [(a = J.declarations) != null ? a : "", J.tokens || []], [co, V] = [(c = X.declarations) != null ? c : "", X.tokens || []], I = this.transformCSS(g, `${oo}${ro}`, "light", "variable", e, n, d, l), eo = this.transformCSS(g, co, "dark", "variable", e, n, d, l);
    s = `${I}${eo}`, u = [.../* @__PURE__ */ new Set([...io, ...lo, ...V])], f = L(v, { dt: no });
  }
  return { css: s, tokens: u, style: f };
}, getPresetC({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var d;
  let { preset: l, options: i } = r, a = (d = l?.components) == null ? void 0 : d[o];
  return this.getPreset({ name: o, preset: a, options: i, params: e, set: t, defaults: n });
}, getPresetD({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
  var d, l;
  let i = o.replace("-directive", ""), { preset: a, options: c } = r, s = ((d = a?.components) == null ? void 0 : d[i]) || ((l = a?.directives) == null ? void 0 : l[i]);
  return this.getPreset({ name: i, preset: s, options: c, params: e, set: t, defaults: n });
}, applyDarkColorScheme(o) {
  return !(o.darkModeSelector === "none" || o.darkModeSelector === !1);
}, getColorSchemeOption(o, r) {
  var e;
  return this.applyDarkColorScheme(o) ? this.regex.resolve(o.darkModeSelector === !0 ? r.options.darkModeSelector : (e = o.darkModeSelector) != null ? e : r.options.darkModeSelector) : [];
}, getLayerOrder(o, r = {}, e, t) {
  let { cssLayer: n } = r;
  return n ? `@layer ${L(n.order || n.name || "primeui", e)}` : "";
}, getCommonStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: n, defaults: d }) {
  let l = this.getCommon({ name: o, theme: r, params: e, set: n, defaults: d }), i = Object.entries(t).reduce((a, [c, s]) => a.push(`${c}="${s}"`) && a, []).join(" ");
  return Object.entries(l || {}).reduce((a, [c, s]) => {
    if (M(s) && Object.hasOwn(s, "css")) {
      let u = vo(s.css), f = `${c}-variables`;
      a.push(`<style type="text/css" data-primevue-style-id="${f}" ${i}>${u}</style>`);
    }
    return a;
  }, []).join("");
}, getStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: n, defaults: d }) {
  var l;
  let i = { name: o, theme: r, params: e, set: n, defaults: d }, a = (l = o.includes("-directive") ? this.getPresetD(i) : this.getPresetC(i)) == null ? void 0 : l.css, c = Object.entries(t).reduce((s, [u, f]) => s.push(`${u}="${f}"`) && s, []).join(" ");
  return a ? `<style type="text/css" data-primevue-style-id="${o}-variables" ${c}>${vo(a)}</style>` : "";
}, createTokens(o = {}, r, e = "", t = "", n = {}) {
  let d = function(i, a = {}, c = []) {
    if (c.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: i, path: this.path, paths: a, value: void 0 };
    c.push(this.path), a.name = this.path, a.binding || (a.binding = {});
    let s = this.value;
    if (typeof this.value == "string" && ko.test(this.value)) {
      let u = this.value.trim().replace(ko, (f) => {
        var g;
        let b = f.slice(1, -1), h = this.tokens[b];
        if (!h) return console.warn(`Token not found for path: ${b}`), "__UNRESOLVED__";
        let m = h.computed(i, a, c);
        return Array.isArray(m) && m.length === 2 ? `light-dark(${m[0].value},${m[1].value})` : (g = m?.value) != null ? g : "__UNRESOLVED__";
      });
      s = Wr.test(u.replace(Mr, "0")) ? `calc(${u})` : u;
    }
    return ao(a.binding) && delete a.binding, c.pop(), { colorScheme: i, path: this.path, paths: a, value: s.includes("__UNRESOLVED__") ? void 0 : s };
  }, l = (i, a, c) => {
    Object.entries(i).forEach(([s, u]) => {
      let f = to(s, r.variable.excludedKeyRegex) ? a : a ? `${a}.${sr(s)}` : sr(s), g = c ? `${c}.${s}` : s;
      M(u) ? l(u, f, g) : (n[f] || (n[f] = { paths: [], computed: (b, h = {}, m = []) => {
        if (n[f].paths.length === 1) return n[f].paths[0].computed(n[f].paths[0].scheme, h.binding, m);
        if (b && b !== "none") for (let v = 0; v < n[f].paths.length; v++) {
          let w = n[f].paths[v];
          if (w.scheme === b) return w.computed(b, h.binding, m);
        }
        return n[f].paths.map((v) => v.computed(v.scheme, h[v.scheme], m));
      } }), n[f].paths.push({ path: g, value: u, scheme: g.includes("colorScheme.light") ? "light" : g.includes("colorScheme.dark") ? "dark" : "none", computed: d, tokens: n }));
    });
  };
  return l(o, e, t), n;
}, getTokenValue(o, r, e) {
  var t;
  let n = ((i) => i.split(".").filter((a) => !to(a.toLowerCase(), e.variable.excludedKeyRegex)).join("."))(r), d = r.includes("colorScheme.light") ? "light" : r.includes("colorScheme.dark") ? "dark" : void 0, l = [(t = o[n]) == null ? void 0 : t.computed(d)].flat().filter((i) => i);
  return l.length === 1 ? l[0].value : l.reduce((i = {}, a) => {
    let c = a, { colorScheme: s } = c, u = F(c, ["colorScheme"]);
    return i[s] = u, i;
  }, void 0);
}, getSelectorRule(o, r, e, t) {
  return e === "class" || e === "attr" ? uo(B(r) ? `${o}${r},${o} ${r}` : o, t) : uo(o, uo(r ?? ":root,:host", t));
}, transformCSS(o, r, e, t, n = {}, d, l, i) {
  if (B(r)) {
    let { cssLayer: a } = n;
    if (t !== "style") {
      let c = this.getColorSchemeOption(n, l);
      r = e === "dark" ? c.reduce((s, { type: u, selector: f }) => (B(f) && (s += f.includes("[CSS]") ? f.replace("[CSS]", r) : this.getSelectorRule(f, i, u, r)), s), "") : uo(i ?? ":root,:host", r);
    }
    if (a) {
      let c = { name: "primeui" };
      M(a) && (c.name = L(a.name, { name: o, type: t })), B(c.name) && (r = uo(`@layer ${c.name}`, r), d?.layerNames(c.name));
    }
    return r;
  }
  return "";
} }, x = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(o = {}) {
  let { theme: r } = o;
  r && (this._theme = Fo(D({}, r), { options: D(D({}, this.defaults.options), r.options) }), this._tokens = N.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
  this.update({ theme: o }), P.emit("theme:change", o);
}, getPreset() {
  return this.preset;
}, setPreset(o) {
  this._theme = Fo(D({}, this.theme), { preset: o }), this._tokens = N.createTokens(o, this.defaults), this.clearLoadedStyleNames(), P.emit("preset:change", o), P.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(o) {
  this._theme = Fo(D({}, this.theme), { options: o }), this.clearLoadedStyleNames(), P.emit("options:change", o), P.emit("theme:change", this.theme);
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
  let n = { name: o, preset: r, options: this.options, selector: e, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return N.getPreset(n);
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
  this._loadingStyles.size && (this._loadingStyles.delete(r), P.emit(`theme:${r}:load`, o), !this._loadingStyles.size && P.emit("theme:load"));
} }, O = {
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
}, dt = `
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
function $o(o) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, $o(o);
}
function ur(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function fr(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ur(Object(e), !0).forEach(function(t) {
      lt(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : ur(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function lt(o, r, e) {
  return (r = ct(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function ct(o) {
  var r = st(o, "string");
  return $o(r) == "symbol" ? r : r + "";
}
function st(o, r) {
  if ($o(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if ($o(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function ut(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  rr() && rr().components ? me(o) : r ? o() : he(o);
}
var ft = 0;
function gt(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = Do(!1), t = Do(o), n = Do(null), d = Xe() ? window.document : void 0, l = r.document, i = l === void 0 ? d : l, a = r.immediate, c = a === void 0 ? !0 : a, s = r.manual, u = s === void 0 ? !1 : s, f = r.name, g = f === void 0 ? "style_".concat(++ft) : f, b = r.id, h = b === void 0 ? void 0 : b, m = r.media, v = m === void 0 ? void 0 : m, w = r.nonce, S = w === void 0 ? void 0 : w, p = r.first, k = p === void 0 ? !1 : p, R = r.onMounted, A = R === void 0 ? void 0 : R, U = r.onUpdated, Y = U === void 0 ? void 0 : U, Q = r.onLoad, G = Q === void 0 ? void 0 : Q, Z = r.props, J = Z === void 0 ? {} : Z, X = function() {
  }, oo = function(lo) {
    var co = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (i) {
      var V = fr(fr({}, J), co), I = V.name || g, eo = V.id || h, zo = V.nonce || S;
      n.value = i.querySelector('style[data-primevue-style-id="'.concat(I, '"]')) || i.getElementById(eo) || i.createElement("style"), n.value.isConnected || (t.value = lo || o, Eo(n.value, {
        type: "text/css",
        id: eo,
        media: v,
        nonce: zo
      }), k ? i.head.prepend(n.value) : i.head.appendChild(n.value), Ke(n.value, "data-primevue-style-id", I), Eo(n.value, V), n.value.onload = function(so) {
        return G?.(so, {
          name: I
        });
      }, A?.(I)), !e.value && (X = po(t, function(so) {
        n.value.textContent = so, Y?.(I);
      }, {
        immediate: !0
      }), e.value = !0);
    }
  }, io = function() {
    !i || !e.value || (X(), Ve(n.value) && i.head.removeChild(n.value), e.value = !1, n.value = null);
  };
  return c && !u && ut(oo), {
    id: h,
    name: g,
    el: n,
    css: t,
    unload: io,
    load: oo,
    isLoaded: be(e)
  };
}
function wo(o) {
  "@babel/helpers - typeof";
  return wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, wo(o);
}
var gr, pr, br, mr;
function hr(o, r) {
  return ht(o) || mt(o, r) || bt(o, r) || pt();
}
function pt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bt(o, r) {
  if (o) {
    if (typeof o == "string") return vr(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? vr(o, r) : void 0;
  }
}
function vr(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++) t[e] = o[e];
  return t;
}
function mt(o, r) {
  var e = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (e != null) {
    var t, n, d, l, i = [], a = !0, c = !1;
    try {
      if (d = (e = e.call(o)).next, r !== 0) for (; !(a = (t = d.call(e)).done) && (i.push(t.value), i.length !== r); a = !0) ;
    } catch (s) {
      c = !0, n = s;
    } finally {
      try {
        if (!a && e.return != null && (l = e.return(), Object(l) !== l)) return;
      } finally {
        if (c) throw n;
      }
    }
    return i;
  }
}
function ht(o) {
  if (Array.isArray(o)) return o;
}
function yr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Ho(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? yr(Object(e), !0).forEach(function(t) {
      vt(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : yr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function vt(o, r, e) {
  return (r = yt(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function yt(o) {
  var r = kt(o, "string");
  return wo(r) == "symbol" ? r : r + "";
}
function kt(o, r) {
  if (wo(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (wo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function Ao(o, r) {
  return r || (r = o.slice(0)), Object.freeze(Object.defineProperties(o, { raw: { value: Object.freeze(r) } }));
}
var $t = function(r) {
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
}, wt = {}, Ct = {}, _ = {
  name: "base",
  css: $t,
  style: dt,
  classes: wt,
  inlineStyles: Ct,
  load: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(d) {
      return d;
    }, n = t(Lo(gr || (gr = Ao(["", ""])), r));
    return B(n) ? gt(vo(n), Ho({
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
      return x.transformCSS(e.name || r.name, "".concat(n).concat(Lo(pr || (pr = Ao(["", ""])), t)));
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
      var t = L(this.css, {
        dt: no
      }) || "", n = vo(Lo(br || (br = Ao(["", "", ""])), t, r)), d = Object.entries(e).reduce(function(l, i) {
        var a = hr(i, 2), c = a[0], s = a[1];
        return l.push("".concat(c, '="').concat(s, '"')) && l;
      }, []).join(" ");
      return B(n) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(d, ">").concat(n, "</style>") : "";
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
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), d = Lo(mr || (mr = Ao(["", ""])), L(this.style, {
        dt: no
      })), l = vo(x.transformCSS(n, d)), i = Object.entries(e).reduce(function(a, c) {
        var s = hr(c, 2), u = s[0], f = s[1];
        return a.push("".concat(u, '="').concat(f, '"')) && a;
      }, []).join(" ");
      B(l) && t.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(i, ">").concat(l, "</style>"));
    }
    return t.join("");
  },
  extend: function(r) {
    return Ho(Ho({}, this), {}, {
      css: void 0,
      style: void 0
    }, r);
  }
}, q = Dr();
function Co(o) {
  "@babel/helpers - typeof";
  return Co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Co(o);
}
function kr(o, r) {
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
    r % 2 ? kr(Object(e), !0).forEach(function(t) {
      xt(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : kr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function xt(o, r, e) {
  return (r = St(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function St(o) {
  var r = Bt(o, "string");
  return Co(r) == "symbol" ? r : r + "";
}
function Bt(o, r) {
  if (Co(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (Co(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var _t = {
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
    text: [O.STARTS_WITH, O.CONTAINS, O.NOT_CONTAINS, O.ENDS_WITH, O.EQUALS, O.NOT_EQUALS],
    numeric: [O.EQUALS, O.NOT_EQUALS, O.LESS_THAN, O.LESS_THAN_OR_EQUAL_TO, O.GREATER_THAN, O.GREATER_THAN_OR_EQUAL_TO],
    date: [O.DATE_IS, O.DATE_IS_NOT, O.DATE_BEFORE, O.DATE_AFTER]
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
}, Rt = /* @__PURE__ */ Symbol();
function Pt(o, r) {
  var e = {
    config: ve(r)
  };
  return o.config.globalProperties.$primevue = e, o.provide(Rt, e), Ot(), Tt(o, e), e;
}
var fo = [];
function Ot() {
  P.clear(), fo.forEach(function(o) {
    return o?.();
  }), fo = [];
}
function Tt(o, r) {
  var e = Do(!1), t = function() {
    var c;
    if (((c = r.config) === null || c === void 0 ? void 0 : c.theme) !== "none" && !x.isStyleNameLoaded("common")) {
      var s, u, f = ((s = _.getCommonTheme) === null || s === void 0 ? void 0 : s.call(_)) || {}, g = f.primitive, b = f.semantic, h = f.global, m = f.style, v = {
        nonce: (u = r.config) === null || u === void 0 || (u = u.csp) === null || u === void 0 ? void 0 : u.nonce
      };
      _.load(g?.css, No({
        name: "primitive-variables"
      }, v)), _.load(b?.css, No({
        name: "semantic-variables"
      }, v)), _.load(h?.css, No({
        name: "global-variables"
      }, v)), _.loadStyle(No({
        name: "global-style"
      }, v), m), x.setLoadedStyleName("common");
    }
  };
  P.on("theme:change", function(a) {
    e.value || (o.config.globalProperties.$primevue.config.theme = a, e.value = !0);
  });
  var n = po(r.config, function(a, c) {
    q.emit("config:change", {
      newValue: a,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), d = po(function() {
    return r.config.ripple;
  }, function(a, c) {
    q.emit("config:ripple:change", {
      newValue: a,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), l = po(function() {
    return r.config.theme;
  }, function(a, c) {
    e.value || x.setTheme(a), r.config.unstyled || t(), e.value = !1, q.emit("config:theme:change", {
      newValue: a,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !1
  }), i = po(function() {
    return r.config.unstyled;
  }, function(a, c) {
    !a && r.config.theme && t(), q.emit("config:unstyled:change", {
      newValue: a,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  });
  fo.push(n), fo.push(d), fo.push(l), fo.push(i);
}
var zt = {
  install: function(r, e) {
    var t = Ne(_t, e);
    Pt(r, t);
  }
}, jt = { transitionDuration: "{transition.duration}" }, Lt = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, At = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, Nt = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, Dt = { root: jt, panel: Lt, header: At, content: Nt }, It = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Et = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Wt = { padding: "{list.padding}", gap: "{list.gap}" }, Mt = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Vt = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Ft = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ht = { borderRadius: "{border.radius.sm}" }, Ut = { padding: "{list.option.padding}" }, Yt = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, Gt = { root: It, overlay: Et, list: Wt, option: Mt, optionGroup: Vt, dropdown: Ft, chip: Ht, emptyMessage: Ut, colorScheme: Yt }, Xt = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Kt = { size: "1rem" }, qt = { borderColor: "{content.background}", offset: "-0.75rem" }, Qt = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, Zt = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, Jt = { root: Xt, icon: Kt, group: qt, lg: Qt, xl: Zt }, on = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, rn = { size: "0.5rem" }, en = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, tn = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, nn = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, an = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, dn = { root: on, dot: rn, sm: en, lg: tn, xl: nn, colorScheme: an }, ln = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, cn = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, sn = { primitive: ln, semantic: cn }, un = { borderRadius: "{content.border.radius}" }, fn = { root: un }, gn = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, pn = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, bn = { color: "{navigation.item.icon.color}" }, mn = { root: gn, item: pn, separator: bn }, hn = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, vn = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, yn = { root: hn, colorScheme: vn }, kn = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, $n = { padding: "1.25rem", gap: "0.5rem" }, wn = { gap: "0.5rem" }, Cn = { fontSize: "1.25rem", fontWeight: "500" }, xn = { color: "{text.muted.color}" }, Sn = { root: kn, body: $n, caption: wn, title: Cn, subtitle: xn }, Bn = { transitionDuration: "{transition.duration}" }, _n = { gap: "0.25rem" }, Rn = { padding: "1rem", gap: "0.5rem" }, Pn = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, On = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, Tn = { root: Bn, content: _n, indicatorList: Rn, indicator: Pn, colorScheme: On }, zn = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, jn = { width: "2.5rem", color: "{form.field.icon.color}" }, Ln = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, An = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, Nn = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, Dn = { color: "{form.field.icon.color}" }, In = { root: zn, dropdown: jn, overlay: Ln, list: An, option: Nn, clearIcon: Dn }, En = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, Wn = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, Mn = { root: En, icon: Wn }, Vn = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, Fn = { width: "2rem", height: "2rem" }, Hn = { size: "1rem" }, Un = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Yn = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, Gn = { root: Vn, image: Fn, icon: Hn, removeIcon: Un, colorScheme: Yn }, Xn = { transitionDuration: "{transition.duration}" }, Kn = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, qn = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, Qn = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, Zn = { root: Xn, preview: Kn, panel: qn, colorScheme: Qn }, Jn = { size: "2rem", color: "{overlay.modal.color}" }, oa = { gap: "1rem" }, ra = { icon: Jn, content: oa }, ea = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, ta = { padding: "{overlay.popover.padding}", gap: "1rem" }, na = { size: "1.5rem", color: "{overlay.popover.color}" }, aa = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, ia = { root: ea, content: ta, icon: na, footer: aa }, da = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, la = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, ca = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, sa = { mobileIndent: "1rem" }, ua = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, fa = { borderColor: "{content.border.color}" }, ga = { root: da, list: la, item: ca, submenu: sa, submenuIcon: ua, separator: fa }, pa = `
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
`, ba = { transitionDuration: "{transition.duration}" }, ma = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ha = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, va = { fontWeight: "600" }, ya = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, ka = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, $a = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, wa = { fontWeight: "600" }, Ca = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, xa = { color: "{primary.color}" }, Sa = { width: "0.5rem" }, Ba = { width: "1px", color: "{primary.color}" }, _a = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Ra = { size: "2rem" }, Pa = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Oa = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, Ta = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, za = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, ja = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, La = `
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Aa = { root: ba, header: ma, headerCell: ha, columnTitle: va, row: ya, bodyCell: ka, footerCell: $a, columnFooter: wa, footer: Ca, dropPoint: xa, columnResizer: Sa, resizeIndicator: Ba, sortIcon: _a, loadingIcon: Ra, rowToggleButton: Pa, filter: Oa, paginatorTop: Ta, paginatorBottom: za, colorScheme: ja, css: La }, Na = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, Da = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, Ia = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, Ea = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, Wa = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Ma = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, Va = { root: Na, header: Da, content: Ia, footer: Ea, paginatorTop: Wa, paginatorBottom: Ma }, Fa = { transitionDuration: "{transition.duration}" }, Ha = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, Ua = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, Ya = { gap: "0.5rem", fontWeight: "500" }, Ga = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xa = { color: "{form.field.icon.color}" }, Ka = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, qa = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, Qa = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, Za = { margin: "0.5rem 0 0 0" }, Ja = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, oi = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ri = { margin: "0.5rem 0 0 0" }, ei = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, ti = { margin: "0.5rem 0 0 0" }, ni = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, ai = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, ii = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, di = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, li = { root: Fa, panel: Ha, header: Ua, title: Ya, dropdown: Ga, inputIcon: Xa, selectMonth: Ka, selectYear: qa, group: Qa, dayView: Za, weekDay: Ja, date: oi, monthView: ri, month: ei, yearView: ti, year: ni, buttonbar: ai, timePicker: ii, colorScheme: di }, ci = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, si = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, ui = { fontSize: "1.25rem", fontWeight: "600" }, fi = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, gi = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, pi = { root: ci, header: si, title: ui, content: fi, footer: gi }, bi = { borderColor: "{content.border.color}" }, mi = { background: "{content.background}", color: "{text.color}" }, hi = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, vi = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, yi = { root: bi, content: mi, horizontal: hi, vertical: vi }, ki = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, $i = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, wi = { root: ki, item: $i }, Ci = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, xi = { padding: "{overlay.modal.padding}" }, Si = { fontSize: "1.5rem", fontWeight: "600" }, Bi = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, _i = { padding: "{overlay.modal.padding}" }, Ri = { root: Ci, header: xi, title: Si, content: Bi, footer: _i }, Pi = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, Oi = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Ti = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, zi = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, ji = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Li = { toolbar: Pi, toolbarItem: Oi, overlay: Ti, overlayOption: zi, content: ji }, Ai = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, Ni = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Di = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, Ii = { padding: "0" }, Ei = { root: Ai, legend: Ni, toggleIcon: Di, content: Ii }, Wi = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, Mi = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, Vi = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, Fi = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, Hi = { gap: "0.5rem" }, Ui = { height: "0.25rem" }, Yi = { gap: "0.5rem" }, Gi = { root: Wi, header: Mi, content: Vi, file: Fi, fileList: Hi, progressbar: Ui, basic: Yi }, Xi = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, Ki = { active: { top: "-1.25rem" } }, qi = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, Qi = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, Zi = { root: Xi, over: Ki, in: qi, on: Qi }, Ji = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, od = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, rd = { size: "1.5rem" }, ed = { background: "{content.background}", padding: "1rem 0.25rem" }, td = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, nd = { size: "1rem" }, ad = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, id = { gap: "0.5rem", padding: "1rem" }, dd = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ld = { background: "rgba(0, 0, 0, 0.5)" }, cd = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, sd = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ud = { size: "1.5rem" }, fd = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, gd = { root: Ji, navButton: od, navIcon: rd, thumbnailsContent: ed, thumbnailNavButton: td, thumbnailNavButtonIcon: nd, caption: ad, indicatorList: id, indicatorButton: dd, insetIndicatorList: ld, insetIndicatorButton: cd, closeButton: sd, closeButtonIcon: ud, colorScheme: fd }, pd = { color: "{form.field.icon.color}" }, bd = { icon: pd }, md = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, hd = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, vd = { root: md, input: hd }, yd = { transitionDuration: "{transition.duration}" }, kd = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, $d = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, wd = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Cd = { root: yd, preview: kd, toolbar: $d, action: wd }, xd = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Sd = { handle: xd }, Bd = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, _d = { fontWeight: "500" }, Rd = { size: "1rem" }, Pd = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, Od = { root: Bd, text: _d, icon: Rd, colorScheme: Pd }, Td = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, zd = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, jd = { root: Td, display: zd }, Ld = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Ad = { borderRadius: "{border.radius.sm}" }, Nd = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, Dd = { root: Ld, chip: Ad, colorScheme: Nd }, Id = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, Ed = { addon: Id }, Wd = { transitionDuration: "{transition.duration}" }, Md = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, Vd = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, Fd = { root: Wd, button: Md, colorScheme: Vd }, Hd = { gap: "0.5rem" }, Ud = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, Yd = { root: Hd, input: Ud }, Gd = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Xd = { root: Gd }, Kd = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, qd = { background: "{primary.color}" }, Qd = { background: "{content.border.color}" }, Zd = { color: "{text.muted.color}" }, Jd = { root: Kd, value: qd, range: Qd, text: Zd }, ol = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, rl = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, el = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, tl = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, nl = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, al = { padding: "{list.option.padding}" }, il = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, dl = { root: ol, list: rl, option: el, optionGroup: tl, checkmark: nl, emptyMessage: al, colorScheme: il }, ll = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, cl = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, sl = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, ul = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, fl = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, gl = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, pl = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, bl = { borderColor: "{content.border.color}" }, ml = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, hl = { root: ll, baseItem: cl, item: sl, overlay: ul, submenu: fl, submenuLabel: gl, submenuIcon: pl, separator: bl, mobileButton: ml }, vl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, yl = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, kl = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, $l = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, wl = { borderColor: "{content.border.color}" }, Cl = { root: vl, list: yl, item: kl, submenuLabel: $l, separator: wl }, xl = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, Sl = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, Bl = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, _l = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, Rl = { borderColor: "{content.border.color}" }, Pl = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ol = { root: xl, baseItem: Sl, item: Bl, submenu: _l, separator: Rl, mobileButton: Pl }, Tl = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, zl = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, jl = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, Ll = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, Al = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Nl = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, Dl = { root: { borderWidth: "1px" } }, Il = { content: { padding: "0" } }, El = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, Wl = { root: Tl, content: zl, text: jl, icon: Ll, closeButton: Al, closeIcon: Nl, outlined: Dl, simple: Il, colorScheme: El }, Ml = { borderRadius: "{content.border.radius}", gap: "1rem" }, Vl = { background: "{content.border.color}", size: "0.5rem" }, Fl = { gap: "0.5rem" }, Hl = { size: "0.5rem" }, Ul = { size: "1rem" }, Yl = { verticalGap: "0.5rem", horizontalGap: "1rem" }, Gl = { root: Ml, meters: Vl, label: Fl, labelMarker: Hl, labelIcon: Ul, labelList: Yl }, Xl = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Kl = { width: "2.5rem", color: "{form.field.icon.color}" }, ql = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Ql = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Zl = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, Jl = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, oc = { color: "{form.field.icon.color}" }, rc = { borderRadius: "{border.radius.sm}" }, ec = { padding: "{list.option.padding}" }, tc = { root: Xl, dropdown: Kl, overlay: ql, list: Ql, option: Zl, optionGroup: Jl, chip: rc, clearIcon: oc, emptyMessage: ec }, nc = { gap: "1.125rem" }, ac = { gap: "0.5rem" }, ic = { root: nc, controls: ac }, dc = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, lc = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, cc = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, sc = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, uc = { root: dc, node: lc, nodeToggleButton: cc, connector: sc }, fc = { outline: { width: "2px", color: "{content.background}" } }, gc = { root: fc }, pc = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, bc = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, mc = { color: "{text.muted.color}" }, hc = { maxWidth: "2.5rem" }, vc = { root: pc, navButton: bc, currentPageReport: mc, jumpToPageInput: hc }, yc = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, kc = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, $c = { padding: "0.375rem 1.125rem" }, wc = { fontWeight: "600" }, Cc = { padding: "0 1.125rem 1.125rem 1.125rem" }, xc = { padding: "0 1.125rem 1.125rem 1.125rem" }, Sc = { root: yc, header: kc, toggleableHeader: $c, title: wc, content: Cc, footer: xc }, Bc = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, _c = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, Rc = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Pc = { indent: "1rem" }, Oc = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, Tc = { root: Bc, panel: _c, item: Rc, submenu: Pc, submenuIcon: Oc }, zc = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, jc = { color: "{form.field.icon.color}" }, Lc = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, Ac = { gap: "0.5rem" }, Nc = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, Dc = { meter: zc, icon: jc, overlay: Lc, content: Ac, colorScheme: Nc }, Ic = { gap: "1.125rem" }, Ec = { gap: "0.5rem" }, Wc = { root: Ic, controls: Ec }, Mc = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Vc = { padding: "{overlay.popover.padding}" }, Fc = { root: Mc, content: Vc }, Hc = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, Uc = { background: "{primary.color}" }, Yc = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, Gc = { root: Hc, value: Uc, label: Yc }, Xc = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, Kc = { colorScheme: Xc }, qc = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, Qc = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, Zc = { root: qc, icon: Qc }, Jc = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, os = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, rs = { root: Jc, icon: os }, es = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, ts = { colorScheme: es }, ns = { transitionDuration: "{transition.duration}" }, as = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, is = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, ds = { root: ns, bar: as, colorScheme: is }, ls = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, cs = { width: "2.5rem", color: "{form.field.icon.color}" }, ss = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, us = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, fs = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, gs = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, ps = { color: "{form.field.icon.color}" }, bs = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, ms = { padding: "{list.option.padding}" }, hs = { root: ls, dropdown: cs, overlay: ss, list: us, option: fs, optionGroup: gs, clearIcon: ps, checkmark: bs, emptyMessage: ms }, vs = { borderRadius: "{form.field.border.radius}" }, ys = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, ks = { root: vs, colorScheme: ys }, $s = { borderRadius: "{content.border.radius}" }, ws = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, Cs = { root: $s, colorScheme: ws }, xs = { transitionDuration: "{transition.duration}" }, Ss = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, Bs = { background: "{primary.color}" }, _s = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Rs = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, Ps = { root: xs, track: Ss, range: Bs, handle: _s, colorScheme: Rs }, Os = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Ts = { root: Os }, zs = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, js = { root: zs }, Ls = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, As = { background: "{content.border.color}" }, Ns = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ds = { root: Ls, gutter: As, handle: Ns }, Is = { transitionDuration: "{transition.duration}" }, Es = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, Ws = { padding: "0.5rem", gap: "1rem" }, Ms = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Vs = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Fs = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, Hs = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, Us = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, Ys = { root: Is, separator: Es, step: Ws, stepHeader: Ms, stepTitle: Vs, stepNumber: Fs, steppanels: Hs, steppanel: Us }, Gs = { transitionDuration: "{transition.duration}" }, Xs = { background: "{content.border.color}" }, Ks = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, qs = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Qs = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, Zs = { root: Gs, separator: Xs, itemLink: Ks, itemLabel: qs, itemNumber: Qs }, Js = { transitionDuration: "{transition.duration}" }, ou = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, ru = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, eu = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, tu = { height: "1px", bottom: "-1px", background: "{primary.color}" }, nu = { root: Js, tablist: ou, item: ru, itemIcon: eu, activeBar: tu }, au = { transitionDuration: "{transition.duration}" }, iu = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, du = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, lu = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, cu = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, su = { height: "1px", bottom: "-1px", background: "{primary.color}" }, uu = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, fu = { root: au, tablist: iu, tab: du, tabpanel: lu, navButton: cu, activeBar: su, colorScheme: uu }, gu = { transitionDuration: "{transition.duration}" }, pu = { background: "{content.background}", borderColor: "{content.border.color}" }, bu = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, mu = { background: "{content.background}", color: "{content.color}" }, hu = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, vu = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, yu = { root: gu, tabList: pu, tab: bu, tabPanel: mu, navButton: hu, colorScheme: vu }, ku = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, $u = { size: "0.75rem" }, wu = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Cu = { root: ku, icon: $u, colorScheme: wu }, xu = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, Su = { gap: "0.25rem" }, Bu = { margin: "2px 0" }, _u = { root: xu, prompt: Su, commandResponse: Bu }, Ru = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Pu = { root: Ru }, Ou = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Tu = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, zu = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, ju = { mobileIndent: "1rem" }, Lu = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Au = { borderColor: "{content.border.color}" }, Nu = { root: Ou, list: Tu, item: zu, submenu: ju, submenuIcon: Lu, separator: Au }, Du = { minHeight: "5rem" }, Iu = { eventContent: { padding: "1rem 0" } }, Eu = { eventContent: { padding: "0 1rem" } }, Wu = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, Mu = { color: "{content.border.color}", size: "2px" }, Vu = { event: Du, horizontal: Iu, vertical: Eu, eventMarker: Wu, eventConnector: Mu }, Fu = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Hu = { size: "1.125rem" }, Uu = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, Yu = { gap: "0.5rem" }, Gu = { fontWeight: "500", fontSize: "1rem" }, Xu = { fontWeight: "500", fontSize: "0.875rem" }, Ku = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, qu = { size: "1rem" }, Qu = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, Zu = { root: Fu, icon: Hu, content: Uu, text: Yu, summary: Gu, detail: Xu, closeButton: Ku, closeIcon: qu, colorScheme: Qu }, Ju = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, of = { disabledColor: "{form.field.disabled.color}" }, rf = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, ef = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, tf = { root: Ju, icon: of, content: rf, colorScheme: ef }, nf = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, af = { borderRadius: "50%", size: "1rem" }, df = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, lf = { root: nf, handle: af, colorScheme: df }, cf = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, sf = { root: cf }, uf = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, ff = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, gf = { root: uf, colorScheme: ff }, pf = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, bf = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, mf = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, hf = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, vf = { size: "2rem" }, yf = { margin: "0 0 0.5rem 0" }, kf = `
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, $f = { root: pf, node: bf, nodeIcon: mf, nodeToggleButton: hf, loadingIcon: vf, filter: yf, css: kf }, wf = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Cf = { width: "2.5rem", color: "{form.field.icon.color}" }, xf = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Sf = { padding: "{list.padding}" }, Bf = { padding: "{list.option.padding}" }, _f = { borderRadius: "{border.radius.sm}" }, Rf = { color: "{form.field.icon.color}" }, Pf = { root: wf, dropdown: Cf, overlay: xf, tree: Sf, emptyMessage: Bf, chip: _f, clearIcon: Rf }, Of = { transitionDuration: "{transition.duration}" }, Tf = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, zf = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, jf = { fontWeight: "600" }, Lf = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Af = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, Nf = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, Df = { fontWeight: "600" }, If = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, Ef = { width: "0.5rem" }, Wf = { width: "1px", color: "{primary.color}" }, Mf = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Vf = { size: "2rem" }, Ff = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Hf = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Uf = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Yf = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Gf = `
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Xf = { root: Of, header: Tf, headerCell: zf, columnTitle: jf, row: Lf, bodyCell: Af, footerCell: Nf, columnFooter: Df, footer: If, columnResizer: Ef, resizeIndicator: Wf, sortIcon: Mf, loadingIcon: Vf, nodeToggleButton: Ff, paginatorTop: Hf, paginatorBottom: Uf, colorScheme: Yf, css: Gf }, Kf = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, qf = { loader: Kf }, Qf = Object.defineProperty, Zf = Object.defineProperties, Jf = Object.getOwnPropertyDescriptors, $r = Object.getOwnPropertySymbols, og = Object.prototype.hasOwnProperty, rg = Object.prototype.propertyIsEnumerable, wr = (o, r, e) => r in o ? Qf(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, Cr, eg = (Cr = ((o, r) => {
  for (var e in r || (r = {})) og.call(r, e) && wr(o, e, r[e]);
  if ($r) for (var e of $r(r)) rg.call(r, e) && wr(o, e, r[e]);
  return o;
})({}, sn), Zf(Cr, Jf({ components: { accordion: Dt, autocomplete: Gt, avatar: Jt, badge: dn, blockui: fn, breadcrumb: mn, button: yn, card: Sn, carousel: Tn, cascadeselect: In, checkbox: Mn, chip: Gn, colorpicker: Zn, confirmdialog: ra, confirmpopup: ia, contextmenu: ga, datatable: Aa, dataview: Va, datepicker: li, dialog: pi, divider: yi, dock: wi, drawer: Ri, editor: Li, fieldset: Ei, fileupload: Gi, floatlabel: Zi, galleria: gd, iconfield: bd, iftalabel: vd, image: Cd, imagecompare: Sd, inlinemessage: Od, inplace: jd, inputchips: Dd, inputgroup: Ed, inputnumber: Fd, inputotp: Yd, inputtext: Xd, knob: Jd, listbox: dl, megamenu: hl, menu: Cl, menubar: Ol, message: Wl, metergroup: Gl, multiselect: tc, orderlist: ic, organizationchart: uc, overlaybadge: gc, paginator: vc, panel: Sc, panelmenu: Tc, password: Dc, picklist: Wc, popover: Fc, progressbar: Gc, progressspinner: Kc, radiobutton: Zc, rating: rs, ripple: ts, scrollpanel: ds, select: hs, selectbutton: ks, skeleton: Cs, slider: Ps, speeddial: Ts, splitbutton: js, splitter: Ds, stepper: Ys, steps: Zs, tabmenu: nu, tabs: fu, tabview: yu, tag: Cu, terminal: _u, textarea: Pu, tieredmenu: Nu, timeline: Vu, toast: Zu, togglebutton: tf, toggleswitch: lf, toolbar: sf, tooltip: gf, tree: $f, treeselect: Pf, treetable: Xf, virtualscroller: qf }, css: pa }))), K = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(r) {
    return this._loadedStyleNames.has(r);
  },
  setLoadedStyleName: function(r) {
    this._loadedStyleNames.add(r);
  },
  deleteLoadedStyleName: function(r) {
    this._loadedStyleNames.delete(r);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
};
function tg() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", r = ye();
  return "".concat(o).concat(r.replace("v-", "").replaceAll("-", "_"));
}
var xr = _.extend({
  name: "common"
});
function xo(o) {
  "@babel/helpers - typeof";
  return xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, xo(o);
}
function ng(o) {
  return Gr(o) || ag(o) || Yr(o) || Ur();
}
function ag(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function go(o, r) {
  return Gr(o) || ig(o, r) || Yr(o, r) || Ur();
}
function Ur() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yr(o, r) {
  if (o) {
    if (typeof o == "string") return Yo(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Yo(o, r) : void 0;
  }
}
function Yo(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++) t[e] = o[e];
  return t;
}
function ig(o, r) {
  var e = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (e != null) {
    var t, n, d, l, i = [], a = !0, c = !1;
    try {
      if (d = (e = e.call(o)).next, r === 0) {
        if (Object(e) !== e) return;
        a = !1;
      } else for (; !(a = (t = d.call(e)).done) && (i.push(t.value), i.length !== r); a = !0) ;
    } catch (s) {
      c = !0, n = s;
    } finally {
      try {
        if (!a && e.return != null && (l = e.return(), Object(l) !== l)) return;
      } finally {
        if (c) throw n;
      }
    }
    return i;
  }
}
function Gr(o) {
  if (Array.isArray(o)) return o;
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
function $(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Sr(Object(e), !0).forEach(function(t) {
      mo(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Sr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function mo(o, r, e) {
  return (r = dg(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function dg(o) {
  var r = lg(o, "string");
  return xo(r) == "symbol" ? r : r + "";
}
function lg(o, r) {
  if (xo(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (xo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var Zo = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    },
    ptOptions: {
      type: Object,
      default: void 0
    },
    unstyled: {
      type: Boolean,
      default: void 0
    },
    dt: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: !0,
      handler: function(r) {
        P.off("theme:change", this._loadCoreStyles), r || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(r, e) {
        var t = this;
        P.off("theme:change", this._themeScopedListener), r ? (this._loadScopedThemeStyles(r), this._themeScopedListener = function() {
          return t._loadScopedThemeStyles(r);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var r, e, t, n, d, l, i, a, c, s, u, f = (r = this.pt) === null || r === void 0 ? void 0 : r._usept, g = f ? (e = this.pt) === null || e === void 0 || (e = e.originalValue) === null || e === void 0 ? void 0 : e[this.$.type.name] : void 0, b = f ? (t = this.pt) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t[this.$.type.name] : this.pt;
    (n = b || g) === null || n === void 0 || (n = n.hooks) === null || n === void 0 || (d = n.onBeforeCreate) === null || d === void 0 || d.call(n);
    var h = (l = this.$primevueConfig) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l._usept, m = h ? (i = this.$primevue) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.pt) === null || i === void 0 ? void 0 : i.originalValue : void 0, v = h ? (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a.value : (c = this.$primevue) === null || c === void 0 || (c = c.config) === null || c === void 0 ? void 0 : c.pt;
    (s = v || m) === null || s === void 0 || (s = s[this.$.type.name]) === null || s === void 0 || (s = s.hooks) === null || s === void 0 || (u = s.onBeforeCreate) === null || u === void 0 || u.call(s), this.$attrSelector = tg(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var r;
    this.rootEl = He(To(this.$el) ? this.$el : (r = this.$el) === null || r === void 0 ? void 0 : r.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = $({
      name: this.$.type.name,
      attrSelector: this.$attrSelector
    }, this.$params)), this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this._hook("onMounted");
  },
  beforeUpdate: function() {
    this._hook("onBeforeUpdate");
  },
  updated: function() {
    this._hook("onUpdated");
  },
  beforeUnmount: function() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function() {
    this._removeThemeListeners(), this._unloadScopedThemeStyles(), this._hook("onUnmounted");
  },
  methods: {
    _hook: function(r) {
      if (!this.$options.hostName) {
        var e = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(r)), t = this._useDefaultPT(this._getOptionValue, "hooks.".concat(r));
        e?.(), t?.();
      }
    },
    _mergeProps: function(r) {
      for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
        t[n - 1] = arguments[n];
      return qo(r) ? r.apply(void 0, t) : z.apply(void 0, t);
    },
    _load: function() {
      K.isStyleNameLoaded("base") || (_.loadCSS(this.$styleOptions), this._loadGlobalStyles(), K.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var r, e;
      !K.isStyleNameLoaded((r = this.$style) === null || r === void 0 ? void 0 : r.name) && (e = this.$style) !== null && e !== void 0 && e.name && (xr.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), K.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var r = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      B(r) && _.load(r, $({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var r, e;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!x.isStyleNameLoaded("common")) {
          var t, n, d = ((t = this.$style) === null || t === void 0 || (n = t.getCommonTheme) === null || n === void 0 ? void 0 : n.call(t)) || {}, l = d.primitive, i = d.semantic, a = d.global, c = d.style;
          _.load(l?.css, $({
            name: "primitive-variables"
          }, this.$styleOptions)), _.load(i?.css, $({
            name: "semantic-variables"
          }, this.$styleOptions)), _.load(a?.css, $({
            name: "global-variables"
          }, this.$styleOptions)), _.loadStyle($({
            name: "global-style"
          }, this.$styleOptions), c), x.setLoadedStyleName("common");
        }
        if (!x.isStyleNameLoaded((r = this.$style) === null || r === void 0 ? void 0 : r.name) && (e = this.$style) !== null && e !== void 0 && e.name) {
          var s, u, f, g, b = ((s = this.$style) === null || s === void 0 || (u = s.getComponentTheme) === null || u === void 0 ? void 0 : u.call(s)) || {}, h = b.css, m = b.style;
          (f = this.$style) === null || f === void 0 || f.load(h, $({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (g = this.$style) === null || g === void 0 || g.loadStyle($({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), m), x.setLoadedStyleName(this.$style.name);
        }
        if (!x.isStyleNameLoaded("layer-order")) {
          var v, w, S = (v = this.$style) === null || v === void 0 || (w = v.getLayerOrderThemeCSS) === null || w === void 0 ? void 0 : w.call(v);
          _.load(S, $({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), x.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(r) {
      var e, t, n, d = ((e = this.$style) === null || e === void 0 || (t = e.getPresetTheme) === null || t === void 0 ? void 0 : t.call(e, r, "[".concat(this.$attrSelector, "]"))) || {}, l = d.css, i = (n = this.$style) === null || n === void 0 ? void 0 : n.load(l, $({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = i.el;
    },
    _unloadScopedThemeStyles: function() {
      var r;
      (r = this.scopedStyleEl) === null || r === void 0 || (r = r.value) === null || r === void 0 || r.remove();
    },
    _themeChangeListener: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      K.clearLoadedStyleNames(), P.on("theme:change", r);
    },
    _removeThemeListeners: function() {
      P.off("theme:change", this._loadCoreStyles), P.off("theme:change", this._load), P.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(r) {
      return r ? this.$options.hostName ? r.$.type.name === this.$options.hostName ? r : this._getHostInstance(r.$parentInstance) : r.$parentInstance : void 0;
    },
    _getPropValue: function(r) {
      var e;
      return this[r] || ((e = this._getHostInstance(this)) === null || e === void 0 ? void 0 : e[r]);
    },
    _getOptionValue: function(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Qo(r, e, t);
    },
    _getPTValue: function() {
      var r, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, l = /./g.test(t) && !!n[t.split(".")[0]], i = this._getPropValue("ptOptions") || ((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.ptOptions) || {}, a = i.mergeSections, c = a === void 0 ? !0 : a, s = i.mergeProps, u = s === void 0 ? !1 : s, f = d ? l ? this._useGlobalPT(this._getPTClassValue, t, n) : this._useDefaultPT(this._getPTClassValue, t, n) : void 0, g = l ? void 0 : this._getPTSelf(e, this._getPTClassValue, t, $($({}, n), {}, {
        global: f || {}
      })), b = this._getPTDatasets(t);
      return c || !c && g ? u ? this._mergeProps(u, f, g, b) : $($($({}, f), g), b) : $($({}, g), b);
    },
    _getPTSelf: function() {
      for (var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
        t[n - 1] = arguments[n];
      return z(
        this._usePT.apply(this, [this._getPT(r, this.$name)].concat(t)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(t))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var r, e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = "data-pc-", d = t === "root" && B((r = this.pt) === null || r === void 0 ? void 0 : r["data-pc-section"]);
      return t !== "transition" && $($({}, t === "root" && $($(mo({}, "".concat(n, "name"), W(d ? (e = this.pt) === null || e === void 0 ? void 0 : e["data-pc-section"] : this.$.type.name)), d && mo({}, "".concat(n, "extend"), W(this.$.type.name))), {}, mo({}, "".concat(this.$attrSelector), ""))), {}, mo({}, "".concat(n, "section"), W(t)));
    },
    _getPTClassValue: function() {
      var r = this._getOptionValue.apply(this, arguments);
      return j(r) || Ar(r) ? {
        class: r
      } : r;
    },
    _getPT: function(r) {
      var e = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 ? arguments[2] : void 0, d = function(i) {
        var a, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = n ? n(i) : i, u = W(t), f = W(e.$name);
        return (a = c ? u !== f ? s?.[u] : void 0 : s?.[u]) !== null && a !== void 0 ? a : s;
      };
      return r != null && r.hasOwnProperty("_usept") ? {
        _usept: r._usept,
        originalValue: d(r.originalValue),
        value: d(r.value)
      } : d(r, !0);
    },
    _usePT: function(r, e, t, n) {
      var d = function(h) {
        return e(h, t, n);
      };
      if (r != null && r.hasOwnProperty("_usept")) {
        var l, i = r._usept || ((l = this.$primevueConfig) === null || l === void 0 ? void 0 : l.ptOptions) || {}, a = i.mergeSections, c = a === void 0 ? !0 : a, s = i.mergeProps, u = s === void 0 ? !1 : s, f = d(r.originalValue), g = d(r.value);
        return f === void 0 && g === void 0 ? void 0 : j(g) ? g : j(f) ? f : c || !c && g ? u ? this._mergeProps(u, f, g) : $($({}, f), g) : g;
      }
      return d(r);
    },
    _useGlobalPT: function(r, e, t) {
      return this._usePT(this.globalPT, r, e, t);
    },
    _useDefaultPT: function(r, e, t) {
      return this._usePT(this.defaultPT, r, e, t);
    },
    ptm: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, r, $($({}, this.$params), e));
    },
    ptmi: function() {
      var r, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = z(this.$_attrsWithoutPT, this.ptm(e, t));
      return n?.hasOwnProperty("id") && ((r = n.id) !== null && r !== void 0 || (n.id = this.$id)), n;
    },
    ptmo: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(r, e, $({
        instance: this
      }, t), !1);
    },
    cx: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, r, $($({}, this.$params), e));
    },
    sx: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e) {
        var n = this._getOptionValue(this.$style.inlineStyles, r, $($({}, this.$params), t)), d = this._getOptionValue(xr.inlineStyles, r, $($({}, this.$params), t));
        return [d, n];
      }
    }
  },
  computed: {
    globalPT: function() {
      var r, e = this;
      return this._getPT((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.pt, void 0, function(t) {
        return L(t, {
          instance: e
        });
      });
    },
    defaultPT: function() {
      var r, e = this;
      return this._getPT((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.pt, void 0, function(t) {
        return e._getOptionValue(t, e.$name, $({}, e.$params)) || L(t, $({}, e.$params));
      });
    },
    isUnstyled: function() {
      var r;
      return this.unstyled !== void 0 ? this.unstyled : (r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.unstyled;
    },
    $id: function() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function() {
      var r, e = Object.keys(((r = this.$.vnode) === null || r === void 0 ? void 0 : r.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(t) {
        var n = go(t, 1), d = n[0];
        return e?.includes(d);
      }));
    },
    $theme: function() {
      var r;
      return (r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.theme;
    },
    $style: function() {
      return $($({
        classes: void 0,
        inlineStyles: void 0,
        load: function() {
        },
        loadCSS: function() {
        },
        loadStyle: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function() {
      var r;
      return {
        nonce: (r = this.$primevueConfig) === null || r === void 0 || (r = r.csp) === null || r === void 0 ? void 0 : r.nonce
      };
    },
    $primevueConfig: function() {
      var r;
      return (r = this.$primevue) === null || r === void 0 ? void 0 : r.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var r = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: r,
          props: r?.$props,
          state: r?.$data,
          attrs: r?.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(r) {
        var e = go(r, 1), t = e[0];
        return t?.startsWith("pt:");
      }).reduce(function(r, e) {
        var t = go(e, 2), n = t[0], d = t[1], l = n.split(":"), i = ng(l), a = Yo(i).slice(1);
        return a?.reduce(function(c, s, u, f) {
          return !c[s] && (c[s] = u === f.length - 1 ? d : {}), c[s];
        }, r), r;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(r) {
        var e = go(r, 1), t = e[0];
        return !(t != null && t.startsWith("pt:"));
      }).reduce(function(r, e) {
        var t = go(e, 2), n = t[0], d = t[1];
        return r[n] = d, r;
      }, {});
    }
  }
}, cg = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, sg = _.extend({
  name: "baseicon",
  css: cg
});
function So(o) {
  "@babel/helpers - typeof";
  return So = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, So(o);
}
function Br(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function _r(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Br(Object(e), !0).forEach(function(t) {
      ug(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Br(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function ug(o, r, e) {
  return (r = fg(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function fg(o) {
  var r = gg(o, "string");
  return So(r) == "symbol" ? r : r + "";
}
function gg(o, r) {
  if (So(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (So(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var pg = {
  name: "BaseIcon",
  extends: Zo,
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  style: sg,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var r = ao(this.label);
      return _r(_r({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: r ? void 0 : "img",
        "aria-label": r ? void 0 : this.label,
        "aria-hidden": r
      });
    }
  }
}, Xr = {
  name: "SpinnerIcon",
  extends: pg
};
function bg(o) {
  return yg(o) || vg(o) || hg(o) || mg();
}
function mg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hg(o, r) {
  if (o) {
    if (typeof o == "string") return Go(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Go(o, r) : void 0;
  }
}
function vg(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function yg(o) {
  if (Array.isArray(o)) return Go(o);
}
function Go(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++) t[e] = o[e];
  return t;
}
function kg(o, r, e, t, n, d) {
  return H(), ho("svg", z({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o.pti()), bg(r[0] || (r[0] = [ke("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
Xr.render = kg;
var $g = `
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`, wg = {
  root: function(r) {
    var e = r.props, t = r.instance;
    return ["p-badge p-component", {
      "p-badge-circle": B(e.value) && String(e.value).length === 1,
      "p-badge-dot": ao(e.value) && !t.$slots.default,
      "p-badge-sm": e.size === "small",
      "p-badge-lg": e.size === "large",
      "p-badge-xl": e.size === "xlarge",
      "p-badge-info": e.severity === "info",
      "p-badge-success": e.severity === "success",
      "p-badge-warn": e.severity === "warn",
      "p-badge-danger": e.severity === "danger",
      "p-badge-secondary": e.severity === "secondary",
      "p-badge-contrast": e.severity === "contrast"
    }];
  }
}, Cg = _.extend({
  name: "badge",
  style: $g,
  classes: wg
}), xg = {
  name: "BaseBadge",
  extends: Zo,
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    severity: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    }
  },
  style: Cg,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function Bo(o) {
  "@babel/helpers - typeof";
  return Bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Bo(o);
}
function Rr(o, r, e) {
  return (r = Sg(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Sg(o) {
  var r = Bg(o, "string");
  return Bo(r) == "symbol" ? r : r + "";
}
function Bg(o, r) {
  if (Bo(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (Bo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var Kr = {
  name: "Badge",
  extends: xg,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return yo(Rr(Rr({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, _g = ["data-p"];
function Rg(o, r, e, t, n, d) {
  return H(), ho("span", z({
    class: o.cx("root"),
    "data-p": d.dataP
  }, o.ptmi("root")), [bo(o.$slots, "default", {}, function() {
    return [$e(jr(o.value), 1)];
  })], 16, _g);
}
Kr.render = Rg;
function _o(o) {
  "@babel/helpers - typeof";
  return _o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, _o(o);
}
function Pr(o, r) {
  return zg(o) || Tg(o, r) || Og(o, r) || Pg();
}
function Pg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Og(o, r) {
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
function Tg(o, r) {
  var e = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (e != null) {
    var t, n, d, l, i = [], a = !0, c = !1;
    try {
      if (d = (e = e.call(o)).next, r !== 0) for (; !(a = (t = d.call(e)).done) && (i.push(t.value), i.length !== r); a = !0) ;
    } catch (s) {
      c = !0, n = s;
    } finally {
      try {
        if (!a && e.return != null && (l = e.return(), Object(l) !== l)) return;
      } finally {
        if (c) throw n;
      }
    }
    return i;
  }
}
function zg(o) {
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
function C(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Tr(Object(e), !0).forEach(function(t) {
      Xo(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Tr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function Xo(o, r, e) {
  return (r = jg(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function jg(o) {
  var r = Lg(o, "string");
  return _o(r) == "symbol" ? r : r + "";
}
function Lg(o, r) {
  if (_o(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (_o(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var y = {
  _getMeta: function() {
    return [M(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], L(M(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(r, e) {
    var t, n, d;
    return (t = (r == null || (n = r.instance) === null || n === void 0 ? void 0 : n.$primevue) || (e == null || (d = e.ctx) === null || d === void 0 || (d = d.appContext) === null || d === void 0 || (d = d.config) === null || d === void 0 || (d = d.globalProperties) === null || d === void 0 ? void 0 : d.$primevue)) === null || t === void 0 ? void 0 : t.config;
  },
  _getOptionValue: Qo,
  _getPTValue: function() {
    var r, e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = function() {
      var w = y._getOptionValue.apply(y, arguments);
      return j(w) || Ar(w) ? {
        class: w
      } : w;
    }, c = ((r = t.binding) === null || r === void 0 || (r = r.value) === null || r === void 0 ? void 0 : r.ptOptions) || ((e = t.$primevueConfig) === null || e === void 0 ? void 0 : e.ptOptions) || {}, s = c.mergeSections, u = s === void 0 ? !0 : s, f = c.mergeProps, g = f === void 0 ? !1 : f, b = i ? y._useDefaultPT(t, t.defaultPT(), a, d, l) : void 0, h = y._usePT(t, y._getPT(n, t.$name), a, d, C(C({}, l), {}, {
      global: b || {}
    })), m = y._getPTDatasets(t, d);
    return u || !u && h ? g ? y._mergeProps(t, g, b, h, m) : C(C(C({}, b), h), m) : C(C({}, h), m);
  },
  _getPTDatasets: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = "data-pc-";
    return C(C({}, e === "root" && Xo({}, "".concat(t, "name"), W(r.$name))), {}, Xo({}, "".concat(t, "section"), W(e)));
  },
  _getPT: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 ? arguments[2] : void 0, n = function(l) {
      var i, a = t ? t(l) : l, c = W(e);
      return (i = a?.[c]) !== null && i !== void 0 ? i : a;
    };
    return r && Object.hasOwn(r, "_usept") ? {
      _usept: r._usept,
      originalValue: n(r.originalValue),
      value: n(r.value)
    } : n(r);
  },
  _usePT: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, d = arguments.length > 4 ? arguments[4] : void 0, l = function(m) {
      return t(m, n, d);
    };
    if (e && Object.hasOwn(e, "_usept")) {
      var i, a = e._usept || ((i = r.$primevueConfig) === null || i === void 0 ? void 0 : i.ptOptions) || {}, c = a.mergeSections, s = c === void 0 ? !0 : c, u = a.mergeProps, f = u === void 0 ? !1 : u, g = l(e.originalValue), b = l(e.value);
      return g === void 0 && b === void 0 ? void 0 : j(b) ? b : j(g) ? g : s || !s && b ? f ? y._mergeProps(r, f, g, b) : C(C({}, g), b) : b;
    }
    return l(e);
  },
  _useDefaultPT: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, d = arguments.length > 4 ? arguments[4] : void 0;
    return y._usePT(r, e, t, n, d);
  },
  _loadStyles: function() {
    var r, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0, d = y._getConfig(t, n), l = {
      nonce: d == null || (r = d.csp) === null || r === void 0 ? void 0 : r.nonce
    };
    y._loadCoreStyles(e, l), y._loadThemeStyles(e, l), y._loadScopedThemeStyles(e, l), y._removeThemeListeners(e), e.$loadStyles = function() {
      return y._loadThemeStyles(e, l);
    }, y._themeChangeListener(e.$loadStyles);
  },
  _loadCoreStyles: function() {
    var r, e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (!K.isStyleNameLoaded((r = t.$style) === null || r === void 0 ? void 0 : r.name) && (e = t.$style) !== null && e !== void 0 && e.name) {
      var d;
      _.loadCSS(n), (d = t.$style) === null || d === void 0 || d.loadCSS(n), K.setLoadedStyleName(t.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var r, e, t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = arguments.length > 1 ? arguments[1] : void 0;
    if (!(n != null && n.isUnstyled() || (n == null || (r = n.theme) === null || r === void 0 ? void 0 : r.call(n)) === "none")) {
      if (!x.isStyleNameLoaded("common")) {
        var l, i, a = ((l = n.$style) === null || l === void 0 || (i = l.getCommonTheme) === null || i === void 0 ? void 0 : i.call(l)) || {}, c = a.primitive, s = a.semantic, u = a.global, f = a.style;
        _.load(c?.css, C({
          name: "primitive-variables"
        }, d)), _.load(s?.css, C({
          name: "semantic-variables"
        }, d)), _.load(u?.css, C({
          name: "global-variables"
        }, d)), _.loadStyle(C({
          name: "global-style"
        }, d), f), x.setLoadedStyleName("common");
      }
      if (!x.isStyleNameLoaded((e = n.$style) === null || e === void 0 ? void 0 : e.name) && (t = n.$style) !== null && t !== void 0 && t.name) {
        var g, b, h, m, v = ((g = n.$style) === null || g === void 0 || (b = g.getDirectiveTheme) === null || b === void 0 ? void 0 : b.call(g)) || {}, w = v.css, S = v.style;
        (h = n.$style) === null || h === void 0 || h.load(w, C({
          name: "".concat(n.$style.name, "-variables")
        }, d)), (m = n.$style) === null || m === void 0 || m.loadStyle(C({
          name: "".concat(n.$style.name, "-style")
        }, d), S), x.setLoadedStyleName(n.$style.name);
      }
      if (!x.isStyleNameLoaded("layer-order")) {
        var p, k, R = (p = n.$style) === null || p === void 0 || (k = p.getLayerOrderThemeCSS) === null || k === void 0 ? void 0 : k.call(p);
        _.load(R, C({
          name: "layer-order",
          first: !0
        }, d)), x.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0, t = r.preset();
    if (t && r.$attrSelector) {
      var n, d, l, i = ((n = r.$style) === null || n === void 0 || (d = n.getPresetTheme) === null || d === void 0 ? void 0 : d.call(n, t, "[".concat(r.$attrSelector, "]"))) || {}, a = i.css, c = (l = r.$style) === null || l === void 0 ? void 0 : l.load(a, C({
        name: "".concat(r.$attrSelector, "-").concat(r.$style.name)
      }, e));
      r.scopedStyleEl = c.el;
    }
  },
  _themeChangeListener: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    K.clearLoadedStyleNames(), P.on("theme:change", r);
  },
  _removeThemeListeners: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    P.off("theme:change", r.$loadStyles), r.$loadStyles = void 0;
  },
  _hook: function(r, e, t, n, d, l) {
    var i, a, c = "on".concat(De(e)), s = y._getConfig(n, d), u = t?.$instance, f = y._usePT(u, y._getPT(n == null || (i = n.value) === null || i === void 0 ? void 0 : i.pt, r), y._getOptionValue, "hooks.".concat(c)), g = y._useDefaultPT(u, s == null || (a = s.pt) === null || a === void 0 || (a = a.directives) === null || a === void 0 ? void 0 : a[r], y._getOptionValue, "hooks.".concat(c)), b = {
      el: t,
      binding: n,
      vnode: d,
      prevVnode: l
    };
    f?.(u, b), g?.(u, b);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var r = arguments.length > 1 ? arguments[1] : void 0, e = arguments.length, t = new Array(e > 2 ? e - 2 : 0), n = 2; n < e; n++)
      t[n - 2] = arguments[n];
    return qo(r) ? r.apply(void 0, t) : z.apply(void 0, t);
  },
  _extend: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = function(i, a, c, s, u) {
      var f, g, b, h;
      a._$instances = a._$instances || {};
      var m = y._getConfig(c, s), v = a._$instances[r] || {}, w = ao(v) ? C(C({}, e), e?.methods) : {};
      a._$instances[r] = C(C({}, v), {}, {
        /* new instance variables to pass in directive methods */
        $name: r,
        $host: a,
        $binding: c,
        $modifiers: c?.modifiers,
        $value: c?.value,
        $el: v.$el || a || void 0,
        $style: C({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, e?.style),
        $primevueConfig: m,
        $attrSelector: (f = a.$pd) === null || f === void 0 || (f = f[r]) === null || f === void 0 ? void 0 : f.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return y._getPT(m?.pt, void 0, function(p) {
            var k;
            return p == null || (k = p.directives) === null || k === void 0 ? void 0 : k[r];
          });
        },
        isUnstyled: function() {
          var p, k;
          return ((p = a._$instances[r]) === null || p === void 0 || (p = p.$binding) === null || p === void 0 || (p = p.value) === null || p === void 0 ? void 0 : p.unstyled) !== void 0 ? (k = a._$instances[r]) === null || k === void 0 || (k = k.$binding) === null || k === void 0 || (k = k.value) === null || k === void 0 ? void 0 : k.unstyled : m?.unstyled;
        },
        theme: function() {
          var p;
          return (p = a._$instances[r]) === null || p === void 0 || (p = p.$primevueConfig) === null || p === void 0 ? void 0 : p.theme;
        },
        preset: function() {
          var p;
          return (p = a._$instances[r]) === null || p === void 0 || (p = p.$binding) === null || p === void 0 || (p = p.value) === null || p === void 0 ? void 0 : p.dt;
        },
        /* instance's methods */
        ptm: function() {
          var p, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return y._getPTValue(a._$instances[r], (p = a._$instances[r]) === null || p === void 0 || (p = p.$binding) === null || p === void 0 || (p = p.value) === null || p === void 0 ? void 0 : p.pt, k, C({}, R));
        },
        ptmo: function() {
          var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return y._getPTValue(a._$instances[r], p, k, R, !1);
        },
        cx: function() {
          var p, k, R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (p = a._$instances[r]) !== null && p !== void 0 && p.isUnstyled() ? void 0 : y._getOptionValue((k = a._$instances[r]) === null || k === void 0 || (k = k.$style) === null || k === void 0 ? void 0 : k.classes, R, C({}, A));
        },
        sx: function() {
          var p, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return R ? y._getOptionValue((p = a._$instances[r]) === null || p === void 0 || (p = p.$style) === null || p === void 0 ? void 0 : p.inlineStyles, k, C({}, A)) : void 0;
        }
      }, w), a.$instance = a._$instances[r], (g = (b = a.$instance)[i]) === null || g === void 0 || g.call(b, a, c, s, u), a["$".concat(r)] = a.$instance, y._hook(r, i, a, c, s, u), a.$pd || (a.$pd = {}), a.$pd[r] = C(C({}, (h = a.$pd) === null || h === void 0 ? void 0 : h[r]), {}, {
        name: r,
        instance: a._$instances[r]
      });
    }, n = function(i) {
      var a, c, s, u = i._$instances[r], f = u?.watch, g = function(m) {
        var v, w = m.newValue, S = m.oldValue;
        return f == null || (v = f.config) === null || v === void 0 ? void 0 : v.call(u, w, S);
      }, b = function(m) {
        var v, w = m.newValue, S = m.oldValue;
        return f == null || (v = f["config.ripple"]) === null || v === void 0 ? void 0 : v.call(u, w, S);
      };
      u.$watchersCallback = {
        config: g,
        "config.ripple": b
      }, f == null || (a = f.config) === null || a === void 0 || a.call(u, u?.$primevueConfig), q.on("config:change", g), f == null || (c = f["config.ripple"]) === null || c === void 0 || c.call(u, u == null || (s = u.$primevueConfig) === null || s === void 0 ? void 0 : s.ripple), q.on("config:ripple:change", b);
    }, d = function(i) {
      var a = i._$instances[r].$watchersCallback;
      a && (q.off("config:change", a.config), q.off("config:ripple:change", a["config.ripple"]), i._$instances[r].$watchersCallback = void 0);
    };
    return {
      created: function(i, a, c, s) {
        i.$pd || (i.$pd = {}), i.$pd[r] = {
          name: r,
          attrSelector: qe("pd")
        }, t("created", i, a, c, s);
      },
      beforeMount: function(i, a, c, s) {
        var u;
        y._loadStyles((u = i.$pd[r]) === null || u === void 0 ? void 0 : u.instance, a, c), t("beforeMount", i, a, c, s), n(i);
      },
      mounted: function(i, a, c, s) {
        var u;
        y._loadStyles((u = i.$pd[r]) === null || u === void 0 ? void 0 : u.instance, a, c), t("mounted", i, a, c, s);
      },
      beforeUpdate: function(i, a, c, s) {
        t("beforeUpdate", i, a, c, s);
      },
      updated: function(i, a, c, s) {
        var u;
        y._loadStyles((u = i.$pd[r]) === null || u === void 0 ? void 0 : u.instance, a, c), t("updated", i, a, c, s);
      },
      beforeUnmount: function(i, a, c, s) {
        var u;
        d(i), y._removeThemeListeners((u = i.$pd[r]) === null || u === void 0 ? void 0 : u.instance), t("beforeUnmount", i, a, c, s);
      },
      unmounted: function(i, a, c, s) {
        var u;
        (u = i.$pd[r]) === null || u === void 0 || (u = u.instance) === null || u === void 0 || (u = u.scopedStyleEl) === null || u === void 0 || (u = u.value) === null || u === void 0 || u.remove(), t("unmounted", i, a, c, s);
      }
    };
  },
  extend: function() {
    var r = y._getMeta.apply(y, arguments), e = Pr(r, 2), t = e[0], n = e[1];
    return C({
      extend: function() {
        var l = y._getMeta.apply(y, arguments), i = Pr(l, 2), a = i[0], c = i[1];
        return y.extend(a, C(C(C({}, n), n?.methods), c));
      }
    }, y._extend(t, n));
  }
}, Ag = `
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`, Ng = {
  root: "p-ink"
}, Dg = _.extend({
  name: "ripple-directive",
  style: Ag,
  classes: Ng
}), Ig = y.extend({
  style: Dg
});
function Ro(o) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ro(o);
}
function Eg(o) {
  return Fg(o) || Vg(o) || Mg(o) || Wg();
}
function Wg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mg(o, r) {
  if (o) {
    if (typeof o == "string") return Ko(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Ko(o, r) : void 0;
  }
}
function Vg(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function Fg(o) {
  if (Array.isArray(o)) return Ko(o);
}
function Ko(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++) t[e] = o[e];
  return t;
}
function zr(o, r, e) {
  return (r = Hg(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Hg(o) {
  var r = Ug(o, "string");
  return Ro(r) == "symbol" ? r : r + "";
}
function Ug(o, r) {
  if (Ro(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (Ro(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var Yg = Ig.extend("ripple", {
  watch: {
    "config.ripple": function(r) {
      r ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(r) {
    this.remove(r);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(r) {
      r.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(r) {
      r.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(r) {
      var e = this.getInk(r);
      e || (e = Fe("span", zr(zr({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), r.appendChild(e), this.$el = e);
    },
    remove: function(r) {
      var e = this.getInk(r);
      e && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(r), e.removeEventListener("animationend", this.onAnimationEnd), e.remove());
    },
    onMouseDown: function(r) {
      var e = this, t = r.currentTarget, n = this.getInk(t);
      if (!(!n || getComputedStyle(n, null).display === "none")) {
        if (!this.isUnstyled() && Vo(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"), !dr(n) && !lr(n)) {
          var d = Math.max(We(t), Ge(t));
          n.style.height = d + "px", n.style.width = d + "px";
        }
        var l = Ye(t), i = r.pageX - l.left + document.body.scrollTop - lr(n) / 2, a = r.pageY - l.top + document.body.scrollLeft - dr(n) / 2;
        n.style.top = a + "px", n.style.left = i + "px", !this.isUnstyled() && Ee(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          n && (!e.isUnstyled() && Vo(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(r) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && Vo(r.currentTarget, "p-ink-active"), r.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(r) {
      return r && r.children ? Eg(r.children).find(function(e) {
        return Ue(e, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Gg = `
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: " ";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;
function Po(o) {
  "@babel/helpers - typeof";
  return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Po(o);
}
function E(o, r, e) {
  return (r = Xg(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Xg(o) {
  var r = Kg(o, "string");
  return Po(r) == "symbol" ? r : r + "";
}
function Kg(o, r) {
  if (Po(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (Po(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var qg = {
  root: function(r) {
    var e = r.instance, t = r.props;
    return ["p-button p-component", E(E(E(E(E(E(E(E(E({
      "p-button-icon-only": e.hasIcon && !t.label && !t.badge,
      "p-button-vertical": (t.iconPos === "top" || t.iconPos === "bottom") && t.label,
      "p-button-loading": t.loading,
      "p-button-link": t.link || t.variant === "link"
    }, "p-button-".concat(t.severity), t.severity), "p-button-raised", t.raised), "p-button-rounded", t.rounded), "p-button-text", t.text || t.variant === "text"), "p-button-outlined", t.outlined || t.variant === "outlined"), "p-button-sm", t.size === "small"), "p-button-lg", t.size === "large"), "p-button-plain", t.plain), "p-button-fluid", e.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(r) {
    var e = r.props;
    return ["p-button-icon", E({}, "p-button-icon-".concat(e.iconPos), e.label)];
  },
  label: "p-button-label"
}, Qg = _.extend({
  name: "button",
  style: Gg,
  classes: qg
}), Zg = {
  name: "BaseButton",
  extends: Zo,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPos: {
      type: String,
      default: "left"
    },
    iconClass: {
      type: [String, Object],
      default: null
    },
    badge: {
      type: String,
      default: null
    },
    badgeClass: {
      type: [String, Object],
      default: null
    },
    badgeSeverity: {
      type: String,
      default: "secondary"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    as: {
      type: [String, Object],
      default: "BUTTON"
    },
    asChild: {
      type: Boolean,
      default: !1
    },
    link: {
      type: Boolean,
      default: !1
    },
    severity: {
      type: String,
      default: null
    },
    raised: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    text: {
      type: Boolean,
      default: !1
    },
    outlined: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    plain: {
      type: Boolean,
      default: !1
    },
    fluid: {
      type: Boolean,
      default: null
    }
  },
  style: Qg,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function Oo(o) {
  "@babel/helpers - typeof";
  return Oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Oo(o);
}
function T(o, r, e) {
  return (r = Jg(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Jg(o) {
  var r = o0(o, "string");
  return Oo(r) == "symbol" ? r : r + "";
}
function o0(o, r) {
  if (Oo(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (Oo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var qr = {
  name: "Button",
  extends: Zg,
  inheritAttrs: !1,
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(r) {
      var e = r === "root" ? this.ptmi : this.ptm;
      return e(r, {
        context: {
          disabled: this.disabled
        }
      });
    }
  },
  computed: {
    disabled: function() {
      return this.$attrs.disabled || this.$attrs.disabled === "" || this.loading;
    },
    defaultAriaLabel: function() {
      return this.label ? this.label + (this.badge ? " " + this.badge : "") : this.$attrs.ariaLabel;
    },
    hasIcon: function() {
      return this.icon || this.$slots.icon;
    },
    attrs: function() {
      return z(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
    },
    asAttrs: function() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.disabled
      } : void 0;
    },
    a11yAttrs: function() {
      return {
        "aria-label": this.defaultAriaLabel,
        "data-pc-name": "button",
        "data-p-disabled": this.disabled,
        "data-p-severity": this.severity
      };
    },
    hasFluid: function() {
      return ao(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return yo(T(T(T(T(T(T(T(T(T(T({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return yo(T(T({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return yo(T(T({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: Xr,
    Badge: Kr
  },
  directives: {
    ripple: Yg
  }
}, r0 = ["data-p"], e0 = ["data-p"];
function t0(o, r, e, t, n, d) {
  var l = er("SpinnerIcon"), i = er("Badge"), a = we("ripple");
  return o.asChild ? bo(o.$slots, "default", {
    key: 1,
    class: tr(o.cx("root")),
    a11yAttrs: d.a11yAttrs
  }) : Ce((H(), Io(Se(o.as), z({
    key: 0,
    class: o.cx("root"),
    "data-p": d.dataP
  }, d.attrs), {
    default: xe(function() {
      return [bo(o.$slots, "default", {}, function() {
        return [o.loading ? bo(o.$slots, "loadingicon", z({
          key: 0,
          class: [o.cx("loadingIcon"), o.cx("icon")]
        }, o.ptm("loadingIcon")), function() {
          return [o.loadingIcon ? (H(), ho("span", z({
            key: 0,
            class: [o.cx("loadingIcon"), o.cx("icon"), o.loadingIcon]
          }, o.ptm("loadingIcon")), null, 16)) : (H(), Io(l, z({
            key: 1,
            class: [o.cx("loadingIcon"), o.cx("icon")],
            spin: ""
          }, o.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : bo(o.$slots, "icon", z({
          key: 1,
          class: [o.cx("icon")]
        }, o.ptm("icon")), function() {
          return [o.icon ? (H(), ho("span", z({
            key: 0,
            class: [o.cx("icon"), o.icon, o.iconClass],
            "data-p": d.dataIconP
          }, o.ptm("icon")), null, 16, r0)) : Mo("", !0)];
        }), o.label ? (H(), ho("span", z({
          key: 2,
          class: o.cx("label")
        }, o.ptm("label"), {
          "data-p": d.dataLabelP
        }), jr(o.label), 17, e0)) : Mo("", !0), o.badge ? (H(), Io(i, {
          key: 3,
          value: o.badge,
          class: tr(o.badgeClass),
          severity: o.badgeSeverity,
          unstyled: o.unstyled,
          pt: o.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : Mo("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[a]]);
}
qr.render = t0;
const n0 = /* @__PURE__ */ Be({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(o) {
    return o._p.f.listen("msg", async (r) => {
      console.log(r), r.type === "click" && alert("Button clicked!");
    }), (r, e) => (H(), Io(Re(qr), {
      label: o._$p.data.curr.data.label,
      size: o._$p.data.curr.data.size,
      variant: o._$p.data.curr.data.variant,
      style: _e(o._$p.data.curr.data.style),
      onClick: e[0] || (e[0] = () => {
        o._p.f.call("msg", {
          type: "click",
          custom: {},
          _p: o._p,
          _$p: o._$p
        });
      })
    }, null, 8, ["label", "size", "variant", "style"]));
  }
}), i0 = async (o) => ({
  set: async (r) => {
    console.log(`--hydrator [${r.data.curr.type}]`);
    const t = Pe(n0, {
      _p: o,
      _$p: r
    });
    t.use(zt, {
      theme: {
        preset: eg
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
    }, d = document.getElementById(o.f.name("vue-root"));
    return t.mount(d), n;
  }
});
export {
  i0 as hydrator,
  i0 as index
};
