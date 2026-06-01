const { ref: Yo, readonly: Rr, getCurrentInstance: fe, onMounted: Ue, nextTick: Pr, watch: xo, useId: Or, mergeProps: O, openBlock: T, createElementBlock: L, createElementVNode: S, renderSlot: wo, createTextVNode: ee, toDisplayString: Xo, resolveComponent: ge, resolveDirective: Tr, withDirectives: zr, createBlock: Go, resolveDynamicComponent: jr, withCtx: Nr, createCommentVNode: so, normalizeClass: re, defineComponent: He, reactive: Co, createVNode: D, unref: B, Fragment: Ir, renderList: Lr, normalizeProps: Ar, guardReactiveProps: Dr, createApp: Er } = window.Vue;
function uo(...e) {
  if (e) {
    let o = [];
    for (let r = 0; r < e.length; r++) {
      let t = e[r];
      if (!t) continue;
      let n = typeof t;
      if (n === "string" || n === "number") o.push(t);
      else if (n === "object") {
        let i = Array.isArray(t) ? [uo(...t)] : Object.entries(t).map(([l, d]) => d ? l : void 0);
        o = i.length ? o.concat(i.filter((l) => !!l)) : o;
      }
    }
    return o.join(" ").trim();
  }
}
function Vr(e, o) {
  return e ? e.classList ? e.classList.contains(o) : new RegExp("(^| )" + o + "( |$)", "gi").test(e.className) : !1;
}
function Wr(e, o) {
  if (e && o) {
    let r = (t) => {
      Vr(e, t) || (e.classList ? e.classList.add(t) : e.className += " " + t);
    };
    [o].flat().filter(Boolean).forEach((t) => t.split(" ").forEach(r));
  }
}
function Zo(e, o) {
  if (e && o) {
    let r = (t) => {
      e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [o].flat().filter(Boolean).forEach((t) => t.split(" ").forEach(r));
  }
}
function pe(e) {
  return e ? Math.abs(e.scrollLeft) : 0;
}
function Fr(e, o) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function Mr(e) {
  if (e) {
    let o = e.parentNode;
    return o && o instanceof ShadowRoot && o.host && (o = o.host), o;
  }
  return null;
}
function Ur(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && Mr(e));
}
function Vo(e) {
  return typeof Element < "u" ? e instanceof Element : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}
function Ko(e, o = {}) {
  if (Vo(e)) {
    let r = (t, n) => {
      var i, l;
      let d = (i = e?.$attrs) != null && i[t] ? [(l = e?.$attrs) == null ? void 0 : l[t]] : [];
      return [n].flat().reduce((a, c) => {
        if (c != null) {
          let s = typeof c;
          if (s === "string" || s === "number") a.push(c);
          else if (s === "object") {
            let u = Array.isArray(c) ? r(t, c) : Object.entries(c).map(([f, g]) => t === "style" && (g || g === 0) ? `${f.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${g}` : g ? f : void 0);
            a = u.length ? a.concat(u.filter((f) => !!f)) : a;
          }
        }
        return a;
      }, d);
    };
    Object.entries(o).forEach(([t, n]) => {
      if (n != null) {
        let i = t.match(/^on(.+)/);
        i ? e.addEventListener(i[1].toLowerCase(), n) : t === "p-bind" || t === "pBind" ? Ko(e, n) : (n = t === "class" ? [...new Set(r("class", n))].join(" ").trim() : t === "style" ? r("style", n).join(";").trim() : n, (e.$attrs = e.$attrs || {}) && (e.$attrs[t] = n), e.setAttribute(t, n));
      }
    });
  }
}
function Hr(e, o = {}, ...r) {
  {
    let t = document.createElement(e);
    return Ko(t, o), t.append(...r), t;
  }
}
function Yr(e, o) {
  return Vo(e) ? e.matches(o) ? e : e.querySelector(o) : null;
}
function Gr(e, o) {
  if (Vo(e)) {
    let r = e.getAttribute(o);
    return isNaN(r) ? r === "true" || r === "false" ? r === "true" : r : +r;
  }
}
function be(e) {
  if (e) {
    let o = e.offsetHeight, r = getComputedStyle(e);
    return o -= parseFloat(r.paddingTop) + parseFloat(r.paddingBottom) + parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth), o;
  }
  return 0;
}
function Xr(e) {
  if (e) {
    let o = e.getBoundingClientRect();
    return { top: o.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: o.left + (window.pageXOffset || pe(document.documentElement) || pe(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function Kr(e, o) {
  return e ? e.offsetHeight : 0;
}
function me(e) {
  if (e) {
    let o = e.offsetWidth, r = getComputedStyle(e);
    return o -= parseFloat(r.paddingLeft) + parseFloat(r.paddingRight) + parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth), o;
  }
  return 0;
}
function Jr() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function qr(e, o = "", r) {
  Vo(e) && r !== null && r !== void 0 && e.setAttribute(o, r);
}
function Ye() {
  let e = /* @__PURE__ */ new Map();
  return { on(o, r) {
    let t = e.get(o);
    return t ? t.push(r) : t = [r], e.set(o, t), this;
  }, off(o, r) {
    let t = e.get(o);
    return t && t.splice(t.indexOf(r) >>> 0, 1), this;
  }, emit(o, r) {
    let t = e.get(o);
    t && t.forEach((n) => {
      n(r);
    });
  }, clear() {
    e.clear();
  } };
}
var Zr = Object.defineProperty, he = Object.getOwnPropertySymbols, Qr = Object.prototype.hasOwnProperty, ot = Object.prototype.propertyIsEnumerable, ve = (e, o, r) => o in e ? Zr(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, et = (e, o) => {
  for (var r in o || (o = {})) Qr.call(o, r) && ve(e, r, o[r]);
  if (he) for (var r of he(o)) ot.call(o, r) && ve(e, r, o[r]);
  return e;
};
function po(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function le(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function R(e) {
  return !po(e);
}
function Y(e, o = !0) {
  return e instanceof Object && e.constructor === Object && (o || Object.keys(e).length !== 0);
}
function Ge(e = {}, o = {}) {
  let r = et({}, e);
  return Object.keys(o).forEach((t) => {
    let n = t;
    Y(o[n]) && n in e && Y(e[n]) ? r[n] = Ge(e[n], o[n]) : r[n] = o[n];
  }), r;
}
function rt(...e) {
  return e.reduce((o, r, t) => t === 0 ? r : Ge(o, r), {});
}
function E(e, ...o) {
  return le(e) ? e(...o) : e;
}
function A(e, o = !0) {
  return typeof e == "string" && (o || e !== "");
}
function H(e) {
  return A(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function ce(e, o = "", r = {}) {
  let t = H(o).split("."), n = t.shift();
  if (n) {
    if (Y(e)) {
      let i = Object.keys(e).find((l) => H(l) === n) || "";
      return ce(E(e[i], r), t.join("."), r);
    }
    return;
  }
  return E(e, r);
}
function Xe(e, o = !0) {
  return Array.isArray(e) && (o || e.length !== 0);
}
function tt(e) {
  return R(e) && !isNaN(e);
}
function fo(e, o) {
  if (o) {
    let r = o.test(e);
    return o.lastIndex = 0, r;
  }
  return !1;
}
function nt(...e) {
  return rt(...e);
}
function Bo(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function at(e) {
  return A(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function Ke(e) {
  return A(e) ? e.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e;
}
var Fo = {};
function it(e = "pui_id_") {
  return Object.hasOwn(Fo, e) || (Fo[e] = 0), Fo[e]++, `${e}${Fo[e]}`;
}
var dt = Object.defineProperty, lt = Object.defineProperties, ct = Object.getOwnPropertyDescriptors, Jo = Object.getOwnPropertySymbols, Je = Object.prototype.hasOwnProperty, qe = Object.prototype.propertyIsEnumerable, ye = (e, o, r) => o in e ? dt(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, F = (e, o) => {
  for (var r in o || (o = {})) Je.call(o, r) && ye(e, r, o[r]);
  if (Jo) for (var r of Jo(o)) qe.call(o, r) && ye(e, r, o[r]);
  return e;
}, Qo = (e, o) => lt(e, ct(o)), X = (e, o) => {
  var r = {};
  for (var t in e) Je.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && Jo) for (var t of Jo(e)) o.indexOf(t) < 0 && qe.call(e, t) && (r[t] = e[t]);
  return r;
}, st = Ye(), j = st, _o = /{([^}]*)}/g, Ze = /(\d+\s+[\+\-\*\/]\s+\d+)/g, Qe = /var\([^)]+\)/g;
function ke(e) {
  return A(e) ? e.replace(/[A-Z]/g, (o, r) => r === 0 ? o : "." + o.toLowerCase()).toLowerCase() : e;
}
function ut(e) {
  return Y(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function ft(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function te(e = "", o = "") {
  return ft(`${A(e, !1) && A(o, !1) ? `${e}-` : e}${o}`);
}
function or(e = "", o = "") {
  return `--${te(e, o)}`;
}
function gt(e = "") {
  let o = (e.match(/{/g) || []).length, r = (e.match(/}/g) || []).length;
  return (o + r) % 2 !== 0;
}
function er(e, o = "", r = "", t = [], n) {
  if (A(e)) {
    let i = e.trim();
    if (gt(i)) return;
    if (fo(i, _o)) {
      let l = i.replaceAll(_o, (d) => {
        let a = d.replace(/{|}/g, "").split(".").filter((c) => !t.some((s) => fo(c, s)));
        return `var(${or(r, Ke(a.join("-")))}${R(n) ? `, ${n}` : ""})`;
      });
      return fo(l.replace(Qe, "0"), Ze) ? `calc(${l})` : l;
    }
    return i;
  } else if (tt(e)) return e;
}
function pt(e, o, r) {
  A(o, !1) && e.push(`${o}:${r};`);
}
function yo(e, o) {
  return e ? `${e}{${o}}` : "";
}
function rr(e, o) {
  if (e.indexOf("dt(") === -1) return e;
  function r(l, d) {
    let a = [], c = 0, s = "", u = null, f = 0;
    for (; c <= l.length; ) {
      let g = l[c];
      if ((g === '"' || g === "'" || g === "`") && l[c - 1] !== "\\" && (u = u === g ? null : g), !u && (g === "(" && f++, g === ")" && f--, (g === "," || c === l.length) && f === 0)) {
        let v = s.trim();
        v.startsWith("dt(") ? a.push(rr(v, d)) : a.push(t(v)), s = "", c++;
        continue;
      }
      g !== void 0 && (s += g), c++;
    }
    return a;
  }
  function t(l) {
    let d = l[0];
    if ((d === '"' || d === "'" || d === "`") && l[l.length - 1] === d) return l.slice(1, -1);
    let a = Number(l);
    return isNaN(a) ? l : a;
  }
  let n = [], i = [];
  for (let l = 0; l < e.length; l++) if (e[l] === "d" && e.slice(l, l + 3) === "dt(") i.push(l), l += 2;
  else if (e[l] === ")" && i.length > 0) {
    let d = i.pop();
    i.length === 0 && n.push([d, l]);
  }
  if (!n.length) return e;
  for (let l = n.length - 1; l >= 0; l--) {
    let [d, a] = n[l], c = e.slice(d + 3, a), s = r(c, o), u = o(...s);
    e = e.slice(0, d) + u + e.slice(a + 1);
  }
  return e;
}
var go = (...e) => bt(_.getTheme(), ...e), bt = (e = {}, o, r, t) => {
  if (o) {
    let { variable: n, options: i } = _.defaults || {}, { prefix: l, transform: d } = e?.options || i || {}, a = fo(o, _o) ? o : `{${o}}`;
    return t === "value" || po(t) && d === "strict" ? _.getTokenValue(o) : er(a, void 0, l, [n.excludedKeyRegex], r);
  }
  return "";
};
function Mo(e, ...o) {
  if (e instanceof Array) {
    let r = e.reduce((t, n, i) => {
      var l;
      return t + n + ((l = E(o[i], { dt: go })) != null ? l : "");
    }, "");
    return rr(r, go);
  }
  return E(e, { dt: go });
}
function mt(e, o = {}) {
  let r = _.defaults.variable, { prefix: t = r.prefix, selector: n = r.selector, excludedKeyRegex: i = r.excludedKeyRegex } = o, l = [], d = [], a = [{ node: e, path: t }];
  for (; a.length; ) {
    let { node: s, path: u } = a.pop();
    for (let f in s) {
      let g = s[f], v = ut(g), h = fo(f, i) ? te(u) : te(u, Ke(f));
      if (Y(v)) a.push({ node: v, path: h });
      else {
        let p = or(h), m = er(v, h, t, [i]);
        pt(d, p, m);
        let y = h;
        t && y.startsWith(t + "-") && (y = y.slice(t.length + 1)), l.push(y.replace(/-/g, "."));
      }
    }
  }
  let c = d.join("");
  return { value: d, tokens: l, declarations: c, css: yo(n, c) };
}
var W = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e) {
  return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e) {
  return { type: "attr", selector: `:root${e},:host${e}`, matched: this.pattern.test(e.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e) {
  return { type: "media", selector: e, matched: this.pattern.test(e.trim()) };
} }, system: { pattern: /^system$/, resolve(e) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e.trim()) };
} }, custom: { resolve(e) {
  return { type: "custom", selector: e, matched: !0 };
} } }, resolve(e) {
  let o = Object.keys(this.rules).filter((r) => r !== "custom").map((r) => this.rules[r]);
  return [e].flat().map((r) => {
    var t;
    return (t = o.map((n) => n.resolve(r)).find((n) => n.matched)) != null ? t : this.rules.custom.resolve(r);
  });
} }, _toVariables(e, o) {
  return mt(e, { prefix: o?.prefix });
}, getCommon({ name: e = "", theme: o = {}, params: r, set: t, defaults: n }) {
  var i, l, d, a, c, s, u;
  let { preset: f, options: g } = o, v, h, p, m, y, k, b;
  if (R(f) && g.transform !== "strict") {
    let { primitive: $, semantic: z, extend: V } = f, K = z || {}, { colorScheme: J } = K, eo = X(K, ["colorScheme"]), q = V || {}, { colorScheme: ro } = q, to = X(q, ["colorScheme"]), Z = J || {}, { dark: no } = Z, bo = X(Z, ["dark"]), ao = ro || {}, { dark: mo } = ao, ho = X(ao, ["dark"]), G = R($) ? this._toVariables({ primitive: $ }, g) : {}, M = R(eo) ? this._toVariables({ semantic: eo }, g) : {}, io = R(bo) ? this._toVariables({ light: bo }, g) : {}, Wo = R(no) ? this._toVariables({ dark: no }, g) : {}, vo = R(to) ? this._toVariables({ semantic: to }, g) : {}, se = R(ho) ? this._toVariables({ light: ho }, g) : {}, ue = R(mo) ? this._toVariables({ dark: mo }, g) : {}, [sr, ur] = [(i = G.declarations) != null ? i : "", G.tokens], [fr, gr] = [(l = M.declarations) != null ? l : "", M.tokens || []], [pr, br] = [(d = io.declarations) != null ? d : "", io.tokens || []], [mr, hr] = [(a = Wo.declarations) != null ? a : "", Wo.tokens || []], [vr, yr] = [(c = vo.declarations) != null ? c : "", vo.tokens || []], [kr, $r] = [(s = se.declarations) != null ? s : "", se.tokens || []], [xr, wr] = [(u = ue.declarations) != null ? u : "", ue.tokens || []];
    v = this.transformCSS(e, sr, "light", "variable", g, t, n), h = ur;
    let Cr = this.transformCSS(e, `${fr}${pr}`, "light", "variable", g, t, n), Sr = this.transformCSS(e, `${mr}`, "dark", "variable", g, t, n);
    p = `${Cr}${Sr}`, m = [.../* @__PURE__ */ new Set([...gr, ...br, ...hr])];
    let Br = this.transformCSS(e, `${vr}${kr}color-scheme:light`, "light", "variable", g, t, n), _r = this.transformCSS(e, `${xr}color-scheme:dark`, "dark", "variable", g, t, n);
    y = `${Br}${_r}`, k = [.../* @__PURE__ */ new Set([...yr, ...$r, ...wr])], b = E(f.css, { dt: go });
  }
  return { primitive: { css: v, tokens: h }, semantic: { css: p, tokens: m }, global: { css: y, tokens: k }, style: b };
}, getPreset({ name: e = "", preset: o = {}, options: r, params: t, set: n, defaults: i, selector: l }) {
  var d, a, c;
  let s, u, f;
  if (R(o) && r.transform !== "strict") {
    let g = e.replace("-directive", ""), v = o, { colorScheme: h, extend: p, css: m } = v, y = X(v, ["colorScheme", "extend", "css"]), k = p || {}, { colorScheme: b } = k, $ = X(k, ["colorScheme"]), z = h || {}, { dark: V } = z, K = X(z, ["dark"]), J = b || {}, { dark: eo } = J, q = X(J, ["dark"]), ro = R(y) ? this._toVariables({ [g]: F(F({}, y), $) }, r) : {}, to = R(K) ? this._toVariables({ [g]: F(F({}, K), q) }, r) : {}, Z = R(V) ? this._toVariables({ [g]: F(F({}, V), eo) }, r) : {}, [no, bo] = [(d = ro.declarations) != null ? d : "", ro.tokens || []], [ao, mo] = [(a = to.declarations) != null ? a : "", to.tokens || []], [ho, G] = [(c = Z.declarations) != null ? c : "", Z.tokens || []], M = this.transformCSS(g, `${no}${ao}`, "light", "variable", r, n, i, l), io = this.transformCSS(g, ho, "dark", "variable", r, n, i, l);
    s = `${M}${io}`, u = [.../* @__PURE__ */ new Set([...bo, ...mo, ...G])], f = E(m, { dt: go });
  }
  return { css: s, tokens: u, style: f };
}, getPresetC({ name: e = "", theme: o = {}, params: r, set: t, defaults: n }) {
  var i;
  let { preset: l, options: d } = o, a = (i = l?.components) == null ? void 0 : i[e];
  return this.getPreset({ name: e, preset: a, options: d, params: r, set: t, defaults: n });
}, getPresetD({ name: e = "", theme: o = {}, params: r, set: t, defaults: n }) {
  var i, l;
  let d = e.replace("-directive", ""), { preset: a, options: c } = o, s = ((i = a?.components) == null ? void 0 : i[d]) || ((l = a?.directives) == null ? void 0 : l[d]);
  return this.getPreset({ name: d, preset: s, options: c, params: r, set: t, defaults: n });
}, applyDarkColorScheme(e) {
  return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
}, getColorSchemeOption(e, o) {
  var r;
  return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? o.options.darkModeSelector : (r = e.darkModeSelector) != null ? r : o.options.darkModeSelector) : [];
}, getLayerOrder(e, o = {}, r, t) {
  let { cssLayer: n } = o;
  return n ? `@layer ${E(n.order || n.name || "primeui", r)}` : "";
}, getCommonStyleSheet({ name: e = "", theme: o = {}, params: r, props: t = {}, set: n, defaults: i }) {
  let l = this.getCommon({ name: e, theme: o, params: r, set: n, defaults: i }), d = Object.entries(t).reduce((a, [c, s]) => a.push(`${c}="${s}"`) && a, []).join(" ");
  return Object.entries(l || {}).reduce((a, [c, s]) => {
    if (Y(s) && Object.hasOwn(s, "css")) {
      let u = Bo(s.css), f = `${c}-variables`;
      a.push(`<style type="text/css" data-primevue-style-id="${f}" ${d}>${u}</style>`);
    }
    return a;
  }, []).join("");
}, getStyleSheet({ name: e = "", theme: o = {}, params: r, props: t = {}, set: n, defaults: i }) {
  var l;
  let d = { name: e, theme: o, params: r, set: n, defaults: i }, a = (l = e.includes("-directive") ? this.getPresetD(d) : this.getPresetC(d)) == null ? void 0 : l.css, c = Object.entries(t).reduce((s, [u, f]) => s.push(`${u}="${f}"`) && s, []).join(" ");
  return a ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${Bo(a)}</style>` : "";
}, createTokens(e = {}, o, r = "", t = "", n = {}) {
  let i = function(d, a = {}, c = []) {
    if (c.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: d, path: this.path, paths: a, value: void 0 };
    c.push(this.path), a.name = this.path, a.binding || (a.binding = {});
    let s = this.value;
    if (typeof this.value == "string" && _o.test(this.value)) {
      let u = this.value.trim().replace(_o, (f) => {
        var g;
        let v = f.slice(1, -1), h = this.tokens[v];
        if (!h) return console.warn(`Token not found for path: ${v}`), "__UNRESOLVED__";
        let p = h.computed(d, a, c);
        return Array.isArray(p) && p.length === 2 ? `light-dark(${p[0].value},${p[1].value})` : (g = p?.value) != null ? g : "__UNRESOLVED__";
      });
      s = Ze.test(u.replace(Qe, "0")) ? `calc(${u})` : u;
    }
    return po(a.binding) && delete a.binding, c.pop(), { colorScheme: d, path: this.path, paths: a, value: s.includes("__UNRESOLVED__") ? void 0 : s };
  }, l = (d, a, c) => {
    Object.entries(d).forEach(([s, u]) => {
      let f = fo(s, o.variable.excludedKeyRegex) ? a : a ? `${a}.${ke(s)}` : ke(s), g = c ? `${c}.${s}` : s;
      Y(u) ? l(u, f, g) : (n[f] || (n[f] = { paths: [], computed: (v, h = {}, p = []) => {
        if (n[f].paths.length === 1) return n[f].paths[0].computed(n[f].paths[0].scheme, h.binding, p);
        if (v && v !== "none") for (let m = 0; m < n[f].paths.length; m++) {
          let y = n[f].paths[m];
          if (y.scheme === v) return y.computed(v, h.binding, p);
        }
        return n[f].paths.map((m) => m.computed(m.scheme, h[m.scheme], p));
      } }), n[f].paths.push({ path: g, value: u, scheme: g.includes("colorScheme.light") ? "light" : g.includes("colorScheme.dark") ? "dark" : "none", computed: i, tokens: n }));
    });
  };
  return l(e, r, t), n;
}, getTokenValue(e, o, r) {
  var t;
  let n = ((d) => d.split(".").filter((a) => !fo(a.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(o), i = o.includes("colorScheme.light") ? "light" : o.includes("colorScheme.dark") ? "dark" : void 0, l = [(t = e[n]) == null ? void 0 : t.computed(i)].flat().filter((d) => d);
  return l.length === 1 ? l[0].value : l.reduce((d = {}, a) => {
    let c = a, { colorScheme: s } = c, u = X(c, ["colorScheme"]);
    return d[s] = u, d;
  }, void 0);
}, getSelectorRule(e, o, r, t) {
  return r === "class" || r === "attr" ? yo(R(o) ? `${e}${o},${e} ${o}` : e, t) : yo(e, yo(o ?? ":root,:host", t));
}, transformCSS(e, o, r, t, n = {}, i, l, d) {
  if (R(o)) {
    let { cssLayer: a } = n;
    if (t !== "style") {
      let c = this.getColorSchemeOption(n, l);
      o = r === "dark" ? c.reduce((s, { type: u, selector: f }) => (R(f) && (s += f.includes("[CSS]") ? f.replace("[CSS]", o) : this.getSelectorRule(f, d, u, o)), s), "") : yo(d ?? ":root,:host", o);
    }
    if (a) {
      let c = { name: "primeui" };
      Y(a) && (c.name = E(a.name, { name: e, type: t })), R(c.name) && (o = yo(`@layer ${c.name}`, o), i?.layerNames(c.name));
    }
    return o;
  }
  return "";
} }, _ = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e = {}) {
  let { theme: o } = e;
  o && (this._theme = Qo(F({}, o), { options: F(F({}, this.defaults.options), o.options) }), this._tokens = W.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
}, get theme() {
  return this._theme;
}, get preset() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.preset) || {};
}, get options() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.options) || {};
}, get tokens() {
  return this._tokens;
}, getTheme() {
  return this.theme;
}, setTheme(e) {
  this.update({ theme: e }), j.emit("theme:change", e);
}, getPreset() {
  return this.preset;
}, setPreset(e) {
  this._theme = Qo(F({}, this.theme), { preset: e }), this._tokens = W.createTokens(e, this.defaults), this.clearLoadedStyleNames(), j.emit("preset:change", e), j.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e) {
  this._theme = Qo(F({}, this.theme), { options: e }), this.clearLoadedStyleNames(), j.emit("options:change", e), j.emit("theme:change", this.theme);
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(e) {
  this._layerNames.add(e);
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(e) {
  return this._loadedStyleNames.has(e);
}, setLoadedStyleName(e) {
  this._loadedStyleNames.add(e);
}, deleteLoadedStyleName(e) {
  this._loadedStyleNames.delete(e);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(e) {
  return W.getTokenValue(this.tokens, e, this.defaults);
}, getCommon(e = "", o) {
  return W.getCommon({ name: e, theme: this.theme, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(e = "", o) {
  let r = { name: e, theme: this.theme, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return W.getPresetC(r);
}, getDirective(e = "", o) {
  let r = { name: e, theme: this.theme, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return W.getPresetD(r);
}, getCustomPreset(e = "", o, r, t) {
  let n = { name: e, preset: o, options: this.options, selector: r, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return W.getPreset(n);
}, getLayerOrderCSS(e = "") {
  return W.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(e = "", o, r = "style", t) {
  return W.transformCSS(e, o, t, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(e = "", o, r = {}) {
  return W.getCommonStyleSheet({ name: e, theme: this.theme, params: o, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(e, o, r = {}) {
  return W.getStyleSheet({ name: e, theme: this.theme, params: o, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(e) {
  this._loadingStyles.add(e);
}, onStyleUpdated(e) {
  this._loadingStyles.add(e);
}, onStyleLoaded(e, { name: o }) {
  this._loadingStyles.size && (this._loadingStyles.delete(o), j.emit(`theme:${o}:load`, e), !this._loadingStyles.size && j.emit("theme:load"));
} }, Q = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(o) {
    return this._loadedStyleNames.has(o);
  },
  setLoadedStyleName: function(o) {
    this._loadedStyleNames.add(o);
  },
  deleteLoadedStyleName: function(o) {
    this._loadedStyleNames.delete(o);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
}, ht = `
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
function Ro(e) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Ro(e);
}
function $e(e, o) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function xe(e) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? $e(Object(r), !0).forEach(function(t) {
      vt(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $e(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function vt(e, o, r) {
  return (o = yt(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function yt(e) {
  var o = kt(e, "string");
  return Ro(o) == "symbol" ? o : o + "";
}
function kt(e, o) {
  if (Ro(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Ro(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
function $t(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  fe() && fe().components ? Ue(e) : o ? e() : Pr(e);
}
var xt = 0;
function wt(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Yo(!1), t = Yo(e), n = Yo(null), i = Jr() ? window.document : void 0, l = o.document, d = l === void 0 ? i : l, a = o.immediate, c = a === void 0 ? !0 : a, s = o.manual, u = s === void 0 ? !1 : s, f = o.name, g = f === void 0 ? "style_".concat(++xt) : f, v = o.id, h = v === void 0 ? void 0 : v, p = o.media, m = p === void 0 ? void 0 : p, y = o.nonce, k = y === void 0 ? void 0 : y, b = o.first, $ = b === void 0 ? !1 : b, z = o.onMounted, V = z === void 0 ? void 0 : z, K = o.onUpdated, J = K === void 0 ? void 0 : K, eo = o.onLoad, q = eo === void 0 ? void 0 : eo, ro = o.props, to = ro === void 0 ? {} : ro, Z = function() {
  }, no = function(mo) {
    var ho = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (d) {
      var G = xe(xe({}, to), ho), M = G.name || g, io = G.id || h, Wo = G.nonce || k;
      n.value = d.querySelector('style[data-primevue-style-id="'.concat(M, '"]')) || d.getElementById(io) || d.createElement("style"), n.value.isConnected || (t.value = mo || e, Ko(n.value, {
        type: "text/css",
        id: io,
        media: m,
        nonce: Wo
      }), $ ? d.head.prepend(n.value) : d.head.appendChild(n.value), qr(n.value, "data-primevue-style-id", M), Ko(n.value, G), n.value.onload = function(vo) {
        return q?.(vo, {
          name: M
        });
      }, V?.(M)), !r.value && (Z = xo(t, function(vo) {
        n.value.textContent = vo, J?.(M);
      }, {
        immediate: !0
      }), r.value = !0);
    }
  }, bo = function() {
    !d || !r.value || (Z(), Ur(n.value) && d.head.removeChild(n.value), r.value = !1, n.value = null);
  };
  return c && !u && $t(no), {
    id: h,
    name: g,
    el: n,
    css: t,
    unload: bo,
    load: no,
    isLoaded: Rr(r)
  };
}
function Po(e) {
  "@babel/helpers - typeof";
  return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Po(e);
}
var we, Ce, Se, Be;
function _e(e, o) {
  return _t(e) || Bt(e, o) || St(e, o) || Ct();
}
function Ct() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function St(e, o) {
  if (e) {
    if (typeof e == "string") return Re(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Re(e, o) : void 0;
  }
}
function Re(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, t = Array(o); r < o; r++) t[r] = e[r];
  return t;
}
function Bt(e, o) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var t, n, i, l, d = [], a = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, o !== 0) for (; !(a = (t = i.call(r)).done) && (d.push(t.value), d.length !== o); a = !0) ;
    } catch (s) {
      c = !0, n = s;
    } finally {
      try {
        if (!a && r.return != null && (l = r.return(), Object(l) !== l)) return;
      } finally {
        if (c) throw n;
      }
    }
    return d;
  }
}
function _t(e) {
  if (Array.isArray(e)) return e;
}
function Pe(e, o) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function oe(e) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Pe(Object(r), !0).forEach(function(t) {
      Rt(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pe(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Rt(e, o, r) {
  return (o = Pt(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Pt(e) {
  var o = Ot(e, "string");
  return Po(o) == "symbol" ? o : o + "";
}
function Ot(e, o) {
  if (Po(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Po(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
function Uo(e, o) {
  return o || (o = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(o) } }));
}
var Tt = function(o) {
  var r = o.dt;
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
}, zt = {}, jt = {}, P = {
  name: "base",
  css: Tt,
  style: ht,
  classes: zt,
  inlineStyles: jt,
  load: function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, n = t(Mo(we || (we = Uo(["", ""])), o));
    return R(n) ? wt(Bo(n), oe({
      name: this.name
    }, r)) : {};
  },
  loadCSS: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, o);
  },
  loadStyle: function() {
    var o = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, r, function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return _.transformCSS(r.name || o.name, "".concat(n).concat(Mo(Ce || (Ce = Uo(["", ""])), t)));
    });
  },
  getCommonTheme: function(o) {
    return _.getCommon(this.name, o);
  },
  getComponentTheme: function(o) {
    return _.getComponent(this.name, o);
  },
  getDirectiveTheme: function(o) {
    return _.getDirective(this.name, o);
  },
  getPresetTheme: function(o, r, t) {
    return _.getCustomPreset(this.name, o, r, t);
  },
  getLayerOrderThemeCSS: function() {
    return _.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var t = E(this.css, {
        dt: go
      }) || "", n = Bo(Mo(Se || (Se = Uo(["", "", ""])), t, o)), i = Object.entries(r).reduce(function(l, d) {
        var a = _e(d, 2), c = a[0], s = a[1];
        return l.push("".concat(c, '="').concat(s, '"')) && l;
      }, []).join(" ");
      return R(n) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(i, ">").concat(n, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return _.getCommonStyleSheet(this.name, o, r);
  },
  getThemeStyleSheet: function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [_.getStyleSheet(this.name, o, r)];
    if (this.style) {
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = Mo(Be || (Be = Uo(["", ""])), E(this.style, {
        dt: go
      })), l = Bo(_.transformCSS(n, i)), d = Object.entries(r).reduce(function(a, c) {
        var s = _e(c, 2), u = s[0], f = s[1];
        return a.push("".concat(u, '="').concat(f, '"')) && a;
      }, []).join(" ");
      R(l) && t.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(d, ">").concat(l, "</style>"));
    }
    return t.join("");
  },
  extend: function(o) {
    return oe(oe({}, this), {}, {
      css: void 0,
      style: void 0
    }, o);
  }
};
function Nt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", o = Or();
  return "".concat(e).concat(o.replace("v-", "").replaceAll("-", "_"));
}
var Oe = P.extend({
  name: "common"
});
function Oo(e) {
  "@babel/helpers - typeof";
  return Oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Oo(e);
}
function It(e) {
  return ar(e) || Lt(e) || nr(e) || tr();
}
function Lt(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function $o(e, o) {
  return ar(e) || At(e, o) || nr(e, o) || tr();
}
function tr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nr(e, o) {
  if (e) {
    if (typeof e == "string") return ne(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ne(e, o) : void 0;
  }
}
function ne(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, t = Array(o); r < o; r++) t[r] = e[r];
  return t;
}
function At(e, o) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var t, n, i, l, d = [], a = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, o === 0) {
        if (Object(r) !== r) return;
        a = !1;
      } else for (; !(a = (t = i.call(r)).done) && (d.push(t.value), d.length !== o); a = !0) ;
    } catch (s) {
      c = !0, n = s;
    } finally {
      try {
        if (!a && r.return != null && (l = r.return(), Object(l) !== l)) return;
      } finally {
        if (c) throw n;
      }
    }
    return d;
  }
}
function ar(e) {
  if (Array.isArray(e)) return e;
}
function Te(e, o) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function w(e) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Te(Object(r), !0).forEach(function(t) {
      So(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Te(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function So(e, o, r) {
  return (o = Dt(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Dt(e) {
  var o = Et(e, "string");
  return Oo(o) == "symbol" ? o : o + "";
}
function Et(e, o) {
  if (Oo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Oo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var qo = {
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
      handler: function(o) {
        j.off("theme:change", this._loadCoreStyles), o || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(o, r) {
        var t = this;
        j.off("theme:change", this._themeScopedListener), o ? (this._loadScopedThemeStyles(o), this._themeScopedListener = function() {
          return t._loadScopedThemeStyles(o);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var o, r, t, n, i, l, d, a, c, s, u, f = (o = this.pt) === null || o === void 0 ? void 0 : o._usept, g = f ? (r = this.pt) === null || r === void 0 || (r = r.originalValue) === null || r === void 0 ? void 0 : r[this.$.type.name] : void 0, v = f ? (t = this.pt) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t[this.$.type.name] : this.pt;
    (n = v || g) === null || n === void 0 || (n = n.hooks) === null || n === void 0 || (i = n.onBeforeCreate) === null || i === void 0 || i.call(n);
    var h = (l = this.$primevueConfig) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l._usept, p = h ? (d = this.$primevue) === null || d === void 0 || (d = d.config) === null || d === void 0 || (d = d.pt) === null || d === void 0 ? void 0 : d.originalValue : void 0, m = h ? (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a.value : (c = this.$primevue) === null || c === void 0 || (c = c.config) === null || c === void 0 ? void 0 : c.pt;
    (s = m || p) === null || s === void 0 || (s = s[this.$.type.name]) === null || s === void 0 || (s = s.hooks) === null || s === void 0 || (u = s.onBeforeCreate) === null || u === void 0 || u.call(s), this.$attrSelector = Nt(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var o;
    this.rootEl = Yr(Vo(this.$el) ? this.$el : (o = this.$el) === null || o === void 0 ? void 0 : o.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = w({
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
    _hook: function(o) {
      if (!this.$options.hostName) {
        var r = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(o)), t = this._useDefaultPT(this._getOptionValue, "hooks.".concat(o));
        r?.(), t?.();
      }
    },
    _mergeProps: function(o) {
      for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
        t[n - 1] = arguments[n];
      return le(o) ? o.apply(void 0, t) : O.apply(void 0, t);
    },
    _load: function() {
      Q.isStyleNameLoaded("base") || (P.loadCSS(this.$styleOptions), this._loadGlobalStyles(), Q.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var o, r;
      !Q.isStyleNameLoaded((o = this.$style) === null || o === void 0 ? void 0 : o.name) && (r = this.$style) !== null && r !== void 0 && r.name && (Oe.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), Q.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var o = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      R(o) && P.load(o, w({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var o, r;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!_.isStyleNameLoaded("common")) {
          var t, n, i = ((t = this.$style) === null || t === void 0 || (n = t.getCommonTheme) === null || n === void 0 ? void 0 : n.call(t)) || {}, l = i.primitive, d = i.semantic, a = i.global, c = i.style;
          P.load(l?.css, w({
            name: "primitive-variables"
          }, this.$styleOptions)), P.load(d?.css, w({
            name: "semantic-variables"
          }, this.$styleOptions)), P.load(a?.css, w({
            name: "global-variables"
          }, this.$styleOptions)), P.loadStyle(w({
            name: "global-style"
          }, this.$styleOptions), c), _.setLoadedStyleName("common");
        }
        if (!_.isStyleNameLoaded((o = this.$style) === null || o === void 0 ? void 0 : o.name) && (r = this.$style) !== null && r !== void 0 && r.name) {
          var s, u, f, g, v = ((s = this.$style) === null || s === void 0 || (u = s.getComponentTheme) === null || u === void 0 ? void 0 : u.call(s)) || {}, h = v.css, p = v.style;
          (f = this.$style) === null || f === void 0 || f.load(h, w({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (g = this.$style) === null || g === void 0 || g.loadStyle(w({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), p), _.setLoadedStyleName(this.$style.name);
        }
        if (!_.isStyleNameLoaded("layer-order")) {
          var m, y, k = (m = this.$style) === null || m === void 0 || (y = m.getLayerOrderThemeCSS) === null || y === void 0 ? void 0 : y.call(m);
          P.load(k, w({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), _.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(o) {
      var r, t, n, i = ((r = this.$style) === null || r === void 0 || (t = r.getPresetTheme) === null || t === void 0 ? void 0 : t.call(r, o, "[".concat(this.$attrSelector, "]"))) || {}, l = i.css, d = (n = this.$style) === null || n === void 0 ? void 0 : n.load(l, w({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = d.el;
    },
    _unloadScopedThemeStyles: function() {
      var o;
      (o = this.scopedStyleEl) === null || o === void 0 || (o = o.value) === null || o === void 0 || o.remove();
    },
    _themeChangeListener: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      Q.clearLoadedStyleNames(), j.on("theme:change", o);
    },
    _removeThemeListeners: function() {
      j.off("theme:change", this._loadCoreStyles), j.off("theme:change", this._load), j.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(o) {
      return o ? this.$options.hostName ? o.$.type.name === this.$options.hostName ? o : this._getHostInstance(o.$parentInstance) : o.$parentInstance : void 0;
    },
    _getPropValue: function(o) {
      var r;
      return this[o] || ((r = this._getHostInstance(this)) === null || r === void 0 ? void 0 : r[o]);
    },
    _getOptionValue: function(o) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return ce(o, r, t);
    },
    _getPTValue: function() {
      var o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, l = /./g.test(t) && !!n[t.split(".")[0]], d = this._getPropValue("ptOptions") || ((o = this.$primevueConfig) === null || o === void 0 ? void 0 : o.ptOptions) || {}, a = d.mergeSections, c = a === void 0 ? !0 : a, s = d.mergeProps, u = s === void 0 ? !1 : s, f = i ? l ? this._useGlobalPT(this._getPTClassValue, t, n) : this._useDefaultPT(this._getPTClassValue, t, n) : void 0, g = l ? void 0 : this._getPTSelf(r, this._getPTClassValue, t, w(w({}, n), {}, {
        global: f || {}
      })), v = this._getPTDatasets(t);
      return c || !c && g ? u ? this._mergeProps(u, f, g, v) : w(w(w({}, f), g), v) : w(w({}, g), v);
    },
    _getPTSelf: function() {
      for (var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
        t[n - 1] = arguments[n];
      return O(
        this._usePT.apply(this, [this._getPT(o, this.$name)].concat(t)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(t))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var o, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = "data-pc-", i = t === "root" && R((o = this.pt) === null || o === void 0 ? void 0 : o["data-pc-section"]);
      return t !== "transition" && w(w({}, t === "root" && w(w(So({}, "".concat(n, "name"), H(i ? (r = this.pt) === null || r === void 0 ? void 0 : r["data-pc-section"] : this.$.type.name)), i && So({}, "".concat(n, "extend"), H(this.$.type.name))), {}, So({}, "".concat(this.$attrSelector), ""))), {}, So({}, "".concat(n, "section"), H(t)));
    },
    _getPTClassValue: function() {
      var o = this._getOptionValue.apply(this, arguments);
      return A(o) || Xe(o) ? {
        class: o
      } : o;
    },
    _getPT: function(o) {
      var r = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 ? arguments[2] : void 0, i = function(d) {
        var a, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = n ? n(d) : d, u = H(t), f = H(r.$name);
        return (a = c ? u !== f ? s?.[u] : void 0 : s?.[u]) !== null && a !== void 0 ? a : s;
      };
      return o != null && o.hasOwnProperty("_usept") ? {
        _usept: o._usept,
        originalValue: i(o.originalValue),
        value: i(o.value)
      } : i(o, !0);
    },
    _usePT: function(o, r, t, n) {
      var i = function(h) {
        return r(h, t, n);
      };
      if (o != null && o.hasOwnProperty("_usept")) {
        var l, d = o._usept || ((l = this.$primevueConfig) === null || l === void 0 ? void 0 : l.ptOptions) || {}, a = d.mergeSections, c = a === void 0 ? !0 : a, s = d.mergeProps, u = s === void 0 ? !1 : s, f = i(o.originalValue), g = i(o.value);
        return f === void 0 && g === void 0 ? void 0 : A(g) ? g : A(f) ? f : c || !c && g ? u ? this._mergeProps(u, f, g) : w(w({}, f), g) : g;
      }
      return i(o);
    },
    _useGlobalPT: function(o, r, t) {
      return this._usePT(this.globalPT, o, r, t);
    },
    _useDefaultPT: function(o, r, t) {
      return this._usePT(this.defaultPT, o, r, t);
    },
    ptm: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, o, w(w({}, this.$params), r));
    },
    ptmi: function() {
      var o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = O(this.$_attrsWithoutPT, this.ptm(r, t));
      return n?.hasOwnProperty("id") && ((o = n.id) !== null && o !== void 0 || (n.id = this.$id)), n;
    },
    ptmo: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(o, r, w({
        instance: this
      }, t), !1);
    },
    cx: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, o, w(w({}, this.$params), r));
    },
    sx: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (r) {
        var n = this._getOptionValue(this.$style.inlineStyles, o, w(w({}, this.$params), t)), i = this._getOptionValue(Oe.inlineStyles, o, w(w({}, this.$params), t));
        return [i, n];
      }
    }
  },
  computed: {
    globalPT: function() {
      var o, r = this;
      return this._getPT((o = this.$primevueConfig) === null || o === void 0 ? void 0 : o.pt, void 0, function(t) {
        return E(t, {
          instance: r
        });
      });
    },
    defaultPT: function() {
      var o, r = this;
      return this._getPT((o = this.$primevueConfig) === null || o === void 0 ? void 0 : o.pt, void 0, function(t) {
        return r._getOptionValue(t, r.$name, w({}, r.$params)) || E(t, w({}, r.$params));
      });
    },
    isUnstyled: function() {
      var o;
      return this.unstyled !== void 0 ? this.unstyled : (o = this.$primevueConfig) === null || o === void 0 ? void 0 : o.unstyled;
    },
    $id: function() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function() {
      var o, r = Object.keys(((o = this.$.vnode) === null || o === void 0 ? void 0 : o.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(t) {
        var n = $o(t, 1), i = n[0];
        return r?.includes(i);
      }));
    },
    $theme: function() {
      var o;
      return (o = this.$primevueConfig) === null || o === void 0 ? void 0 : o.theme;
    },
    $style: function() {
      return w(w({
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
      var o;
      return {
        nonce: (o = this.$primevueConfig) === null || o === void 0 || (o = o.csp) === null || o === void 0 ? void 0 : o.nonce
      };
    },
    $primevueConfig: function() {
      var o;
      return (o = this.$primevue) === null || o === void 0 ? void 0 : o.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var o = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: o,
          props: o?.$props,
          state: o?.$data,
          attrs: o?.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(o) {
        var r = $o(o, 1), t = r[0];
        return t?.startsWith("pt:");
      }).reduce(function(o, r) {
        var t = $o(r, 2), n = t[0], i = t[1], l = n.split(":"), d = It(l), a = ne(d).slice(1);
        return a?.reduce(function(c, s, u, f) {
          return !c[s] && (c[s] = u === f.length - 1 ? i : {}), c[s];
        }, o), o;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(o) {
        var r = $o(o, 1), t = r[0];
        return !(t != null && t.startsWith("pt:"));
      }).reduce(function(o, r) {
        var t = $o(r, 2), n = t[0], i = t[1];
        return o[n] = i, o;
      }, {});
    }
  }
}, Vt = {
  name: "BaseEditableHolder",
  extends: qo,
  emits: ["update:modelValue", "value-change"],
  props: {
    modelValue: {
      type: null,
      default: void 0
    },
    defaultValue: {
      type: null,
      default: void 0
    },
    name: {
      type: String,
      default: void 0
    },
    invalid: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    formControl: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    },
    $pcForm: {
      default: void 0
    },
    $pcFormField: {
      default: void 0
    }
  },
  data: function() {
    return {
      d_value: this.defaultValue !== void 0 ? this.defaultValue : this.modelValue
    };
  },
  watch: {
    modelValue: {
      deep: !0,
      handler: function(o) {
        this.d_value = o;
      }
    },
    defaultValue: function(o) {
      this.d_value = o;
    },
    $formName: {
      immediate: !0,
      handler: function(o) {
        var r, t;
        this.formField = ((r = this.$pcForm) === null || r === void 0 || (t = r.register) === null || t === void 0 ? void 0 : t.call(r, o, this.$formControl)) || {};
      }
    },
    $formControl: {
      immediate: !0,
      handler: function(o) {
        var r, t;
        this.formField = ((r = this.$pcForm) === null || r === void 0 || (t = r.register) === null || t === void 0 ? void 0 : t.call(r, this.$formName, o)) || {};
      }
    },
    $formDefaultValue: {
      immediate: !0,
      handler: function(o) {
        this.d_value !== o && (this.d_value = o);
      }
    },
    $formValue: {
      immediate: !1,
      handler: function(o) {
        var r;
        (r = this.$pcForm) !== null && r !== void 0 && r.getFieldState(this.$formName) && o !== this.d_value && (this.d_value = o);
      }
    }
  },
  formField: {},
  methods: {
    writeValue: function(o, r) {
      var t, n;
      this.controlled && (this.d_value = o, this.$emit("update:modelValue", o)), this.$emit("value-change", o), (t = (n = this.formField).onChange) === null || t === void 0 || t.call(n, {
        originalEvent: r,
        value: o
      });
    },
    // @todo move to @primeuix/utils
    findNonEmpty: function() {
      for (var o = arguments.length, r = new Array(o), t = 0; t < o; t++)
        r[t] = arguments[t];
      return r.find(R);
    }
  },
  computed: {
    $filled: function() {
      return R(this.d_value);
    },
    $invalid: function() {
      var o, r;
      return !this.$formNovalidate && this.findNonEmpty(this.invalid, (o = this.$pcFormField) === null || o === void 0 || (o = o.$field) === null || o === void 0 ? void 0 : o.invalid, (r = this.$pcForm) === null || r === void 0 || (r = r.getFieldState(this.$formName)) === null || r === void 0 ? void 0 : r.invalid);
    },
    $formName: function() {
      var o;
      return this.$formNovalidate ? void 0 : this.name || ((o = this.$formControl) === null || o === void 0 ? void 0 : o.name);
    },
    $formControl: function() {
      var o;
      return this.formControl || ((o = this.$pcFormField) === null || o === void 0 ? void 0 : o.formControl);
    },
    $formNovalidate: function() {
      var o;
      return (o = this.$formControl) === null || o === void 0 ? void 0 : o.novalidate;
    },
    $formDefaultValue: function() {
      var o, r;
      return this.findNonEmpty(this.d_value, (o = this.$pcFormField) === null || o === void 0 ? void 0 : o.initialValue, (r = this.$pcForm) === null || r === void 0 || (r = r.initialValues) === null || r === void 0 ? void 0 : r[this.$formName]);
    },
    $formValue: function() {
      var o, r;
      return this.findNonEmpty((o = this.$pcFormField) === null || o === void 0 || (o = o.$field) === null || o === void 0 ? void 0 : o.value, (r = this.$pcForm) === null || r === void 0 || (r = r.getFieldState(this.$formName)) === null || r === void 0 ? void 0 : r.value);
    },
    controlled: function() {
      return this.$inProps.hasOwnProperty("modelValue") || !this.$inProps.hasOwnProperty("modelValue") && !this.$inProps.hasOwnProperty("defaultValue");
    },
    // @deprecated use $filled instead
    filled: function() {
      return this.$filled;
    }
  }
}, ir = {
  name: "BaseInput",
  extends: Vt,
  props: {
    size: {
      type: String,
      default: null
    },
    fluid: {
      type: Boolean,
      default: null
    },
    variant: {
      type: String,
      default: null
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    },
    $pcFluid: {
      default: void 0
    }
  },
  computed: {
    $variant: function() {
      var o;
      return (o = this.variant) !== null && o !== void 0 ? o : this.$primevue.config.inputStyle || this.$primevue.config.inputVariant;
    },
    $fluid: function() {
      var o;
      return (o = this.fluid) !== null && o !== void 0 ? o : !!this.$pcFluid;
    },
    // @deprecated use $fluid instead
    hasFluid: function() {
      return this.$fluid;
    }
  }
}, Wt = `
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`, Ft = {
  root: function(o) {
    var r = o.instance, t = o.props;
    return ["p-inputtext p-component", {
      "p-filled": r.$filled,
      "p-inputtext-sm p-inputfield-sm": t.size === "small",
      "p-inputtext-lg p-inputfield-lg": t.size === "large",
      "p-invalid": r.$invalid,
      "p-variant-filled": r.$variant === "filled",
      "p-inputtext-fluid": r.$fluid
    }];
  }
}, Mt = P.extend({
  name: "inputtext",
  style: Wt,
  classes: Ft
}), Ut = {
  name: "BaseInputText",
  extends: ir,
  style: Mt,
  provide: function() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
function To(e) {
  "@babel/helpers - typeof";
  return To = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, To(e);
}
function Ht(e, o, r) {
  return (o = Yt(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Yt(e) {
  var o = Gt(e, "string");
  return To(o) == "symbol" ? o : o + "";
}
function Gt(e, o) {
  if (To(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (To(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var lo = {
  name: "InputText",
  extends: Ut,
  inheritAttrs: !1,
  methods: {
    onInput: function(o) {
      this.writeValue(o.target.value, o);
    }
  },
  computed: {
    attrs: function() {
      return O(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function() {
      return uo(Ht({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
}, Xt = ["value", "name", "disabled", "aria-invalid", "data-p"];
function Kt(e, o, r, t, n, i) {
  return T(), L("input", O({
    type: "text",
    class: e.cx("root"),
    value: e.d_value,
    name: e.name,
    disabled: e.disabled,
    "aria-invalid": e.$invalid || void 0,
    "data-p": i.dataP,
    onInput: o[0] || (o[0] = function() {
      return i.onInput && i.onInput.apply(i, arguments);
    })
  }, i.attrs), null, 16, Xt);
}
lo.render = Kt;
var Jt = `
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`, qt = {
  root: function(o) {
    var r = o.instance, t = o.props;
    return ["p-textarea p-component", {
      "p-filled": r.$filled,
      "p-textarea-resizable ": t.autoResize,
      "p-textarea-sm p-inputfield-sm": t.size === "small",
      "p-textarea-lg p-inputfield-lg": t.size === "large",
      "p-invalid": r.$invalid,
      "p-variant-filled": r.$variant === "filled",
      "p-textarea-fluid": r.$fluid
    }];
  }
}, Zt = P.extend({
  name: "textarea",
  style: Jt,
  classes: qt
}), Qt = {
  name: "BaseTextarea",
  extends: ir,
  props: {
    autoResize: Boolean
  },
  style: Zt,
  provide: function() {
    return {
      $pcTextarea: this,
      $parentInstance: this
    };
  }
};
function zo(e) {
  "@babel/helpers - typeof";
  return zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, zo(e);
}
function on(e, o, r) {
  return (o = en(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function en(e) {
  var o = rn(e, "string");
  return zo(o) == "symbol" ? o : o + "";
}
function rn(e, o) {
  if (zo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (zo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var dr = {
  name: "Textarea",
  extends: Qt,
  inheritAttrs: !1,
  observer: null,
  mounted: function() {
    var o = this;
    this.autoResize && (this.observer = new ResizeObserver(function() {
      requestAnimationFrame(function() {
        o.resize();
      });
    }), this.observer.observe(this.$el));
  },
  updated: function() {
    this.autoResize && this.resize();
  },
  beforeUnmount: function() {
    this.observer && this.observer.disconnect();
  },
  methods: {
    resize: function() {
      if (this.$el.offsetParent) {
        var o = this.$el.style.height, r = parseInt(o) || 0, t = this.$el.scrollHeight, n = !r || t > r, i = r && t < r;
        i ? (this.$el.style.height = "auto", this.$el.style.height = "".concat(this.$el.scrollHeight, "px")) : n && (this.$el.style.height = "".concat(t, "px"));
      }
    },
    onInput: function(o) {
      this.autoResize && this.resize(), this.writeValue(o.target.value, o);
    }
  },
  computed: {
    attrs: function() {
      return O(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function() {
      return uo(on({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
}, tn = ["value", "name", "disabled", "aria-invalid", "data-p"];
function nn(e, o, r, t, n, i) {
  return T(), L("textarea", O({
    class: e.cx("root"),
    value: e.d_value,
    name: e.name,
    disabled: e.disabled,
    "aria-invalid": e.invalid || void 0,
    "data-p": i.dataP,
    onInput: o[0] || (o[0] = function() {
      return i.onInput && i.onInput.apply(i, arguments);
    })
  }, i.attrs), null, 16, tn);
}
dr.render = nn;
var an = `
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
`, dn = P.extend({
  name: "baseicon",
  css: an
});
function jo(e) {
  "@babel/helpers - typeof";
  return jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, jo(e);
}
function ze(e, o) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function je(e) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? ze(Object(r), !0).forEach(function(t) {
      ln(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ze(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function ln(e, o, r) {
  return (o = cn(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function cn(e) {
  var o = sn(e, "string");
  return jo(o) == "symbol" ? o : o + "";
}
function sn(e, o) {
  if (jo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (jo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var un = {
  name: "BaseIcon",
  extends: qo,
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
  style: dn,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var o = po(this.label);
      return je(je({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: o ? void 0 : "img",
        "aria-label": o ? void 0 : this.label,
        "aria-hidden": o
      });
    }
  }
}, lr = {
  name: "SpinnerIcon",
  extends: un
};
function fn(e) {
  return mn(e) || bn(e) || pn(e) || gn();
}
function gn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pn(e, o) {
  if (e) {
    if (typeof e == "string") return ae(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ae(e, o) : void 0;
  }
}
function bn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function mn(e) {
  if (Array.isArray(e)) return ae(e);
}
function ae(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, t = Array(o); r < o; r++) t[r] = e[r];
  return t;
}
function hn(e, o, r, t, n, i) {
  return T(), L("svg", O({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), fn(o[0] || (o[0] = [S("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
lr.render = hn;
var vn = `
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
`, yn = {
  root: function(o) {
    var r = o.props, t = o.instance;
    return ["p-badge p-component", {
      "p-badge-circle": R(r.value) && String(r.value).length === 1,
      "p-badge-dot": po(r.value) && !t.$slots.default,
      "p-badge-sm": r.size === "small",
      "p-badge-lg": r.size === "large",
      "p-badge-xl": r.size === "xlarge",
      "p-badge-info": r.severity === "info",
      "p-badge-success": r.severity === "success",
      "p-badge-warn": r.severity === "warn",
      "p-badge-danger": r.severity === "danger",
      "p-badge-secondary": r.severity === "secondary",
      "p-badge-contrast": r.severity === "contrast"
    }];
  }
}, kn = P.extend({
  name: "badge",
  style: vn,
  classes: yn
}), $n = {
  name: "BaseBadge",
  extends: qo,
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
  style: kn,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function No(e) {
  "@babel/helpers - typeof";
  return No = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, No(e);
}
function Ne(e, o, r) {
  return (o = xn(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function xn(e) {
  var o = wn(e, "string");
  return No(o) == "symbol" ? o : o + "";
}
function wn(e, o) {
  if (No(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (No(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var cr = {
  name: "Badge",
  extends: $n,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return uo(Ne(Ne({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, Cn = ["data-p"];
function Sn(e, o, r, t, n, i) {
  return T(), L("span", O({
    class: e.cx("root"),
    "data-p": i.dataP
  }, e.ptmi("root")), [wo(e.$slots, "default", {}, function() {
    return [ee(Xo(e.value), 1)];
  })], 16, Cn);
}
cr.render = Sn;
var oo = Ye();
function Io(e) {
  "@babel/helpers - typeof";
  return Io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Io(e);
}
function Ie(e, o) {
  return Pn(e) || Rn(e, o) || _n(e, o) || Bn();
}
function Bn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _n(e, o) {
  if (e) {
    if (typeof e == "string") return Le(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Le(e, o) : void 0;
  }
}
function Le(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, t = Array(o); r < o; r++) t[r] = e[r];
  return t;
}
function Rn(e, o) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var t, n, i, l, d = [], a = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, o !== 0) for (; !(a = (t = i.call(r)).done) && (d.push(t.value), d.length !== o); a = !0) ;
    } catch (s) {
      c = !0, n = s;
    } finally {
      try {
        if (!a && r.return != null && (l = r.return(), Object(l) !== l)) return;
      } finally {
        if (c) throw n;
      }
    }
    return d;
  }
}
function Pn(e) {
  if (Array.isArray(e)) return e;
}
function Ae(e, o) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function C(e) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Ae(Object(r), !0).forEach(function(t) {
      ie(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ae(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function ie(e, o, r) {
  return (o = On(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function On(e) {
  var o = Tn(e, "string");
  return Io(o) == "symbol" ? o : o + "";
}
function Tn(e, o) {
  if (Io(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Io(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var x = {
  _getMeta: function() {
    return [Y(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], E(Y(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(o, r) {
    var t, n, i;
    return (t = (o == null || (n = o.instance) === null || n === void 0 ? void 0 : n.$primevue) || (r == null || (i = r.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || t === void 0 ? void 0 : t.config;
  },
  _getOptionValue: ce,
  _getPTValue: function() {
    var o, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = function() {
      var y = x._getOptionValue.apply(x, arguments);
      return A(y) || Xe(y) ? {
        class: y
      } : y;
    }, c = ((o = t.binding) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o.ptOptions) || ((r = t.$primevueConfig) === null || r === void 0 ? void 0 : r.ptOptions) || {}, s = c.mergeSections, u = s === void 0 ? !0 : s, f = c.mergeProps, g = f === void 0 ? !1 : f, v = d ? x._useDefaultPT(t, t.defaultPT(), a, i, l) : void 0, h = x._usePT(t, x._getPT(n, t.$name), a, i, C(C({}, l), {}, {
      global: v || {}
    })), p = x._getPTDatasets(t, i);
    return u || !u && h ? g ? x._mergeProps(t, g, v, h, p) : C(C(C({}, v), h), p) : C(C({}, h), p);
  },
  _getPTDatasets: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = "data-pc-";
    return C(C({}, r === "root" && ie({}, "".concat(t, "name"), H(o.$name))), {}, ie({}, "".concat(t, "section"), H(r)));
  },
  _getPT: function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 ? arguments[2] : void 0, n = function(l) {
      var d, a = t ? t(l) : l, c = H(r);
      return (d = a?.[c]) !== null && d !== void 0 ? d : a;
    };
    return o && Object.hasOwn(o, "_usept") ? {
      _usept: o._usept,
      originalValue: n(o.originalValue),
      value: n(o.value)
    } : n(o);
  },
  _usePT: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, l = function(p) {
      return t(p, n, i);
    };
    if (r && Object.hasOwn(r, "_usept")) {
      var d, a = r._usept || ((d = o.$primevueConfig) === null || d === void 0 ? void 0 : d.ptOptions) || {}, c = a.mergeSections, s = c === void 0 ? !0 : c, u = a.mergeProps, f = u === void 0 ? !1 : u, g = l(r.originalValue), v = l(r.value);
      return g === void 0 && v === void 0 ? void 0 : A(v) ? v : A(g) ? g : s || !s && v ? f ? x._mergeProps(o, f, g, v) : C(C({}, g), v) : v;
    }
    return l(r);
  },
  _useDefaultPT: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
    return x._usePT(o, r, t, n, i);
  },
  _loadStyles: function() {
    var o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0, i = x._getConfig(t, n), l = {
      nonce: i == null || (o = i.csp) === null || o === void 0 ? void 0 : o.nonce
    };
    x._loadCoreStyles(r, l), x._loadThemeStyles(r, l), x._loadScopedThemeStyles(r, l), x._removeThemeListeners(r), r.$loadStyles = function() {
      return x._loadThemeStyles(r, l);
    }, x._themeChangeListener(r.$loadStyles);
  },
  _loadCoreStyles: function() {
    var o, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (!Q.isStyleNameLoaded((o = t.$style) === null || o === void 0 ? void 0 : o.name) && (r = t.$style) !== null && r !== void 0 && r.name) {
      var i;
      P.loadCSS(n), (i = t.$style) === null || i === void 0 || i.loadCSS(n), Q.setLoadedStyleName(t.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var o, r, t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (!(n != null && n.isUnstyled() || (n == null || (o = n.theme) === null || o === void 0 ? void 0 : o.call(n)) === "none")) {
      if (!_.isStyleNameLoaded("common")) {
        var l, d, a = ((l = n.$style) === null || l === void 0 || (d = l.getCommonTheme) === null || d === void 0 ? void 0 : d.call(l)) || {}, c = a.primitive, s = a.semantic, u = a.global, f = a.style;
        P.load(c?.css, C({
          name: "primitive-variables"
        }, i)), P.load(s?.css, C({
          name: "semantic-variables"
        }, i)), P.load(u?.css, C({
          name: "global-variables"
        }, i)), P.loadStyle(C({
          name: "global-style"
        }, i), f), _.setLoadedStyleName("common");
      }
      if (!_.isStyleNameLoaded((r = n.$style) === null || r === void 0 ? void 0 : r.name) && (t = n.$style) !== null && t !== void 0 && t.name) {
        var g, v, h, p, m = ((g = n.$style) === null || g === void 0 || (v = g.getDirectiveTheme) === null || v === void 0 ? void 0 : v.call(g)) || {}, y = m.css, k = m.style;
        (h = n.$style) === null || h === void 0 || h.load(y, C({
          name: "".concat(n.$style.name, "-variables")
        }, i)), (p = n.$style) === null || p === void 0 || p.loadStyle(C({
          name: "".concat(n.$style.name, "-style")
        }, i), k), _.setLoadedStyleName(n.$style.name);
      }
      if (!_.isStyleNameLoaded("layer-order")) {
        var b, $, z = (b = n.$style) === null || b === void 0 || ($ = b.getLayerOrderThemeCSS) === null || $ === void 0 ? void 0 : $.call(b);
        P.load(z, C({
          name: "layer-order",
          first: !0
        }, i)), _.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, t = o.preset();
    if (t && o.$attrSelector) {
      var n, i, l, d = ((n = o.$style) === null || n === void 0 || (i = n.getPresetTheme) === null || i === void 0 ? void 0 : i.call(n, t, "[".concat(o.$attrSelector, "]"))) || {}, a = d.css, c = (l = o.$style) === null || l === void 0 ? void 0 : l.load(a, C({
        name: "".concat(o.$attrSelector, "-").concat(o.$style.name)
      }, r));
      o.scopedStyleEl = c.el;
    }
  },
  _themeChangeListener: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    Q.clearLoadedStyleNames(), j.on("theme:change", o);
  },
  _removeThemeListeners: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    j.off("theme:change", o.$loadStyles), o.$loadStyles = void 0;
  },
  _hook: function(o, r, t, n, i, l) {
    var d, a, c = "on".concat(at(r)), s = x._getConfig(n, i), u = t?.$instance, f = x._usePT(u, x._getPT(n == null || (d = n.value) === null || d === void 0 ? void 0 : d.pt, o), x._getOptionValue, "hooks.".concat(c)), g = x._useDefaultPT(u, s == null || (a = s.pt) === null || a === void 0 || (a = a.directives) === null || a === void 0 ? void 0 : a[o], x._getOptionValue, "hooks.".concat(c)), v = {
      el: t,
      binding: n,
      vnode: i,
      prevVnode: l
    };
    f?.(u, v), g?.(u, v);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var o = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length, t = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
      t[n - 2] = arguments[n];
    return le(o) ? o.apply(void 0, t) : O.apply(void 0, t);
  },
  _extend: function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = function(d, a, c, s, u) {
      var f, g, v, h;
      a._$instances = a._$instances || {};
      var p = x._getConfig(c, s), m = a._$instances[o] || {}, y = po(m) ? C(C({}, r), r?.methods) : {};
      a._$instances[o] = C(C({}, m), {}, {
        /* new instance variables to pass in directive methods */
        $name: o,
        $host: a,
        $binding: c,
        $modifiers: c?.modifiers,
        $value: c?.value,
        $el: m.$el || a || void 0,
        $style: C({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, r?.style),
        $primevueConfig: p,
        $attrSelector: (f = a.$pd) === null || f === void 0 || (f = f[o]) === null || f === void 0 ? void 0 : f.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return x._getPT(p?.pt, void 0, function(b) {
            var $;
            return b == null || ($ = b.directives) === null || $ === void 0 ? void 0 : $[o];
          });
        },
        isUnstyled: function() {
          var b, $;
          return ((b = a._$instances[o]) === null || b === void 0 || (b = b.$binding) === null || b === void 0 || (b = b.value) === null || b === void 0 ? void 0 : b.unstyled) !== void 0 ? ($ = a._$instances[o]) === null || $ === void 0 || ($ = $.$binding) === null || $ === void 0 || ($ = $.value) === null || $ === void 0 ? void 0 : $.unstyled : p?.unstyled;
        },
        theme: function() {
          var b;
          return (b = a._$instances[o]) === null || b === void 0 || (b = b.$primevueConfig) === null || b === void 0 ? void 0 : b.theme;
        },
        preset: function() {
          var b;
          return (b = a._$instances[o]) === null || b === void 0 || (b = b.$binding) === null || b === void 0 || (b = b.value) === null || b === void 0 ? void 0 : b.dt;
        },
        /* instance's methods */
        ptm: function() {
          var b, $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return x._getPTValue(a._$instances[o], (b = a._$instances[o]) === null || b === void 0 || (b = b.$binding) === null || b === void 0 || (b = b.value) === null || b === void 0 ? void 0 : b.pt, $, C({}, z));
        },
        ptmo: function() {
          var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return x._getPTValue(a._$instances[o], b, $, z, !1);
        },
        cx: function() {
          var b, $, z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (b = a._$instances[o]) !== null && b !== void 0 && b.isUnstyled() ? void 0 : x._getOptionValue(($ = a._$instances[o]) === null || $ === void 0 || ($ = $.$style) === null || $ === void 0 ? void 0 : $.classes, z, C({}, V));
        },
        sx: function() {
          var b, $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return z ? x._getOptionValue((b = a._$instances[o]) === null || b === void 0 || (b = b.$style) === null || b === void 0 ? void 0 : b.inlineStyles, $, C({}, V)) : void 0;
        }
      }, y), a.$instance = a._$instances[o], (g = (v = a.$instance)[d]) === null || g === void 0 || g.call(v, a, c, s, u), a["$".concat(o)] = a.$instance, x._hook(o, d, a, c, s, u), a.$pd || (a.$pd = {}), a.$pd[o] = C(C({}, (h = a.$pd) === null || h === void 0 ? void 0 : h[o]), {}, {
        name: o,
        instance: a._$instances[o]
      });
    }, n = function(d) {
      var a, c, s, u = d._$instances[o], f = u?.watch, g = function(p) {
        var m, y = p.newValue, k = p.oldValue;
        return f == null || (m = f.config) === null || m === void 0 ? void 0 : m.call(u, y, k);
      }, v = function(p) {
        var m, y = p.newValue, k = p.oldValue;
        return f == null || (m = f["config.ripple"]) === null || m === void 0 ? void 0 : m.call(u, y, k);
      };
      u.$watchersCallback = {
        config: g,
        "config.ripple": v
      }, f == null || (a = f.config) === null || a === void 0 || a.call(u, u?.$primevueConfig), oo.on("config:change", g), f == null || (c = f["config.ripple"]) === null || c === void 0 || c.call(u, u == null || (s = u.$primevueConfig) === null || s === void 0 ? void 0 : s.ripple), oo.on("config:ripple:change", v);
    }, i = function(d) {
      var a = d._$instances[o].$watchersCallback;
      a && (oo.off("config:change", a.config), oo.off("config:ripple:change", a["config.ripple"]), d._$instances[o].$watchersCallback = void 0);
    };
    return {
      created: function(d, a, c, s) {
        d.$pd || (d.$pd = {}), d.$pd[o] = {
          name: o,
          attrSelector: it("pd")
        }, t("created", d, a, c, s);
      },
      beforeMount: function(d, a, c, s) {
        var u;
        x._loadStyles((u = d.$pd[o]) === null || u === void 0 ? void 0 : u.instance, a, c), t("beforeMount", d, a, c, s), n(d);
      },
      mounted: function(d, a, c, s) {
        var u;
        x._loadStyles((u = d.$pd[o]) === null || u === void 0 ? void 0 : u.instance, a, c), t("mounted", d, a, c, s);
      },
      beforeUpdate: function(d, a, c, s) {
        t("beforeUpdate", d, a, c, s);
      },
      updated: function(d, a, c, s) {
        var u;
        x._loadStyles((u = d.$pd[o]) === null || u === void 0 ? void 0 : u.instance, a, c), t("updated", d, a, c, s);
      },
      beforeUnmount: function(d, a, c, s) {
        var u;
        i(d), x._removeThemeListeners((u = d.$pd[o]) === null || u === void 0 ? void 0 : u.instance), t("beforeUnmount", d, a, c, s);
      },
      unmounted: function(d, a, c, s) {
        var u;
        (u = d.$pd[o]) === null || u === void 0 || (u = u.instance) === null || u === void 0 || (u = u.scopedStyleEl) === null || u === void 0 || (u = u.value) === null || u === void 0 || u.remove(), t("unmounted", d, a, c, s);
      }
    };
  },
  extend: function() {
    var o = x._getMeta.apply(x, arguments), r = Ie(o, 2), t = r[0], n = r[1];
    return C({
      extend: function() {
        var l = x._getMeta.apply(x, arguments), d = Ie(l, 2), a = d[0], c = d[1];
        return x.extend(a, C(C(C({}, n), n?.methods), c));
      }
    }, x._extend(t, n));
  }
}, zn = `
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
`, jn = {
  root: "p-ink"
}, Nn = P.extend({
  name: "ripple-directive",
  style: zn,
  classes: jn
}), In = x.extend({
  style: Nn
});
function Lo(e) {
  "@babel/helpers - typeof";
  return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Lo(e);
}
function Ln(e) {
  return Vn(e) || En(e) || Dn(e) || An();
}
function An() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dn(e, o) {
  if (e) {
    if (typeof e == "string") return de(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? de(e, o) : void 0;
  }
}
function En(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Vn(e) {
  if (Array.isArray(e)) return de(e);
}
function de(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, t = Array(o); r < o; r++) t[r] = e[r];
  return t;
}
function De(e, o, r) {
  return (o = Wn(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Wn(e) {
  var o = Fn(e, "string");
  return Lo(o) == "symbol" ? o : o + "";
}
function Fn(e, o) {
  if (Lo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Lo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var Mn = In.extend("ripple", {
  watch: {
    "config.ripple": function(o) {
      o ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(o) {
    this.remove(o);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(o) {
      o.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(o) {
      o.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(o) {
      var r = this.getInk(o);
      r || (r = Hr("span", De(De({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), o.appendChild(r), this.$el = r);
    },
    remove: function(o) {
      var r = this.getInk(o);
      r && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(o), r.removeEventListener("animationend", this.onAnimationEnd), r.remove());
    },
    onMouseDown: function(o) {
      var r = this, t = o.currentTarget, n = this.getInk(t);
      if (!(!n || getComputedStyle(n, null).display === "none")) {
        if (!this.isUnstyled() && Zo(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"), !be(n) && !me(n)) {
          var i = Math.max(Fr(t), Kr(t));
          n.style.height = i + "px", n.style.width = i + "px";
        }
        var l = Xr(t), d = o.pageX - l.left + document.body.scrollTop - me(n) / 2, a = o.pageY - l.top + document.body.scrollLeft - be(n) / 2;
        n.style.top = a + "px", n.style.left = d + "px", !this.isUnstyled() && Wr(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          n && (!r.isUnstyled() && Zo(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(o) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && Zo(o.currentTarget, "p-ink-active"), o.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(o) {
      return o && o.children ? Ln(o.children).find(function(r) {
        return Gr(r, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Un = `
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
function Ao(e) {
  "@babel/helpers - typeof";
  return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Ao(e);
}
function U(e, o, r) {
  return (o = Hn(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Hn(e) {
  var o = Yn(e, "string");
  return Ao(o) == "symbol" ? o : o + "";
}
function Yn(e, o) {
  if (Ao(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Ao(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var Gn = {
  root: function(o) {
    var r = o.instance, t = o.props;
    return ["p-button p-component", U(U(U(U(U(U(U(U(U({
      "p-button-icon-only": r.hasIcon && !t.label && !t.badge,
      "p-button-vertical": (t.iconPos === "top" || t.iconPos === "bottom") && t.label,
      "p-button-loading": t.loading,
      "p-button-link": t.link || t.variant === "link"
    }, "p-button-".concat(t.severity), t.severity), "p-button-raised", t.raised), "p-button-rounded", t.rounded), "p-button-text", t.text || t.variant === "text"), "p-button-outlined", t.outlined || t.variant === "outlined"), "p-button-sm", t.size === "small"), "p-button-lg", t.size === "large"), "p-button-plain", t.plain), "p-button-fluid", r.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(o) {
    var r = o.props;
    return ["p-button-icon", U({}, "p-button-icon-".concat(r.iconPos), r.label)];
  },
  label: "p-button-label"
}, Xn = P.extend({
  name: "button",
  style: Un,
  classes: Gn
}), Kn = {
  name: "BaseButton",
  extends: qo,
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
  style: Xn,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function Do(e) {
  "@babel/helpers - typeof";
  return Do = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Do(e);
}
function I(e, o, r) {
  return (o = Jn(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Jn(e) {
  var o = qn(e, "string");
  return Do(o) == "symbol" ? o : o + "";
}
function qn(e, o) {
  if (Do(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Do(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var co = {
  name: "Button",
  extends: Kn,
  inheritAttrs: !1,
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(o) {
      var r = o === "root" ? this.ptmi : this.ptm;
      return r(o, {
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
      return O(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
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
      return po(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return uo(I(I(I(I(I(I(I(I(I(I({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return uo(I(I({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return uo(I(I({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: lr,
    Badge: cr
  },
  directives: {
    ripple: Mn
  }
}, Zn = ["data-p"], Qn = ["data-p"];
function oa(e, o, r, t, n, i) {
  var l = ge("SpinnerIcon"), d = ge("Badge"), a = Tr("ripple");
  return e.asChild ? wo(e.$slots, "default", {
    key: 1,
    class: re(e.cx("root")),
    a11yAttrs: i.a11yAttrs
  }) : zr((T(), Go(jr(e.as), O({
    key: 0,
    class: e.cx("root"),
    "data-p": i.dataP
  }, i.attrs), {
    default: Nr(function() {
      return [wo(e.$slots, "default", {}, function() {
        return [e.loading ? wo(e.$slots, "loadingicon", O({
          key: 0,
          class: [e.cx("loadingIcon"), e.cx("icon")]
        }, e.ptm("loadingIcon")), function() {
          return [e.loadingIcon ? (T(), L("span", O({
            key: 0,
            class: [e.cx("loadingIcon"), e.cx("icon"), e.loadingIcon]
          }, e.ptm("loadingIcon")), null, 16)) : (T(), Go(l, O({
            key: 1,
            class: [e.cx("loadingIcon"), e.cx("icon")],
            spin: ""
          }, e.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : wo(e.$slots, "icon", O({
          key: 1,
          class: [e.cx("icon")]
        }, e.ptm("icon")), function() {
          return [e.icon ? (T(), L("span", O({
            key: 0,
            class: [e.cx("icon"), e.icon, e.iconClass],
            "data-p": i.dataIconP
          }, e.ptm("icon")), null, 16, Zn)) : so("", !0)];
        }), e.label ? (T(), L("span", O({
          key: 2,
          class: e.cx("label")
        }, e.ptm("label"), {
          "data-p": i.dataLabelP
        }), Xo(e.label), 17, Qn)) : so("", !0), e.badge ? (T(), Go(d, {
          key: 3,
          value: e.badge,
          class: re(e.badgeClass),
          severity: e.badgeSeverity,
          unstyled: e.unstyled,
          pt: e.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : so("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[a]]);
}
co.render = oa;
const ea = { class: "bg-slate-50 min-h-screen p-6 font-sans" }, ra = { class: "flex items-center justify-between mb-6" }, ta = { class: "flex gap-2" }, na = {
  key: 0,
  class: "text-center py-20 text-slate-400"
}, aa = { class: "space-y-5" }, ia = { class: "flex items-center justify-between px-5 py-3 bg-slate-100 border-b border-slate-200" }, da = { class: "text-sm font-semibold text-slate-600" }, la = { class: "flex items-center gap-1" }, ca = { class: "p-5 grid grid-cols-1 md:grid-cols-2 gap-4" }, sa = { class: "flex flex-col gap-1" }, ua = { class: "flex flex-col gap-1" }, fa = { class: "flex flex-col gap-1 md:col-span-2" }, ga = { class: "flex flex-col gap-1 md:col-span-2" }, pa = { class: "flex gap-2" }, ba = {
  key: 0,
  class: "text-xs text-red-500 flex items-center gap-1 mt-1"
}, ma = {
  key: 1,
  class: "mt-2 rounded-lg overflow-hidden h-32 bg-slate-100"
}, ha = ["src", "alt"], va = { class: "flex flex-col gap-1" }, ya = { class: "flex flex-col gap-1" }, ka = { class: "flex flex-col gap-1 md:col-span-2" }, $a = {
  key: 1,
  class: "mt-6 flex justify-center"
}, Ee = "carousel_slides_v1", xa = "https://fastapi.dryutil.1mn.io/client/api/i/ona/file_store?typ=upload", wa = /* @__PURE__ */ He({
  __name: "form",
  props: {
    _p: {},
    _pp: {}
  },
  setup(e) {
    const r = Co(e._pp).data.curr.data.value.l, t = e._pp.data.curr.data.map, n = () => ({
      [t.title]: "",
      // "caption"
      desc: "",
      // carousel reads slide[map.desc] but map has no desc — use "desc" directly
      [t.image]: "",
      // "image"
      [t.tag]: "",
      // "tag"
      [t.ctaText]: "",
      // "ctaText"
      [t.linkId]: "",
      // "linkId"
      [t.onClick]: "/"
      // "onClick"
    }), i = Co({}), l = Co({}), d = Co({}), a = () => {
      const h = {
        l: [{
          id: e._pp.data.curr.id,
          type: e._pp.data.curr.type,
          data: {
            map: JSON.parse(JSON.stringify(e._pp.data.curr.data.map)),
            value: { l: JSON.parse(JSON.stringify(r)) },
            api: JSON.parse(JSON.stringify(e._pp.data.curr.data.api ?? {}))
          }
        }]
      };
      console.log("test_1", h);
    }, c = () => {
      localStorage.setItem(Ee, JSON.stringify(r)), a();
    }, s = () => {
      r.push(n()), c();
    }, u = (h) => {
      r.splice(h, 1), c();
    }, f = () => c(), g = async (h, p) => {
      i[h] = !0, l[h] = "", d[h] = !1;
      try {
        const m = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", y = new FormData();
        y.append("prompt", "upload"), y.append("file", p), y.append("filename", p.name), y.append("content_type", p.type), y.append("sizes", "400x400");
        const k = await fetch(xa, {
          method: "POST",
          headers: { Authorization: `Bearer ${m}` },
          body: y
        }), b = await k.json();
        if (console.log("upload response", b), !k.ok) throw new Error(b?.error ?? `HTTP ${k.status}`);
        const $ = b?.data?.uploads?.[0]?.url ?? "";
        if (!$) throw new Error("No URL in response");
        r[h][t.image] = $, d[h] = !0, c(), setTimeout(() => {
          d[h] = !1;
        }, 3e3);
      } catch (m) {
        l[h] = m?.message ?? "Upload failed", console.error("Upload error:", m);
      } finally {
        i[h] = !1;
      }
    }, v = (h) => {
      const p = document.createElement("input");
      p.type = "file", p.accept = "image/*", p.onchange = (m) => {
        const y = m.target.files?.[0];
        y && g(h, y);
      }, p.click();
    };
    return Ue(() => {
      try {
        const h = localStorage.getItem(Ee);
        if (h) {
          const p = JSON.parse(h);
          Array.isArray(p) && p.length > 0 && r.splice(0, r.length, ...p);
        }
      } catch (h) {
        console.warn("Could not restore slides", h);
      }
      a();
    }), (h, p) => (T(), L("div", ea, [
      S("div", ra, [
        p[0] || (p[0] = S("div", null, [
          S("h1", { class: "text-2xl font-bold text-slate-800" }, "Manage Slides"),
          S("p", { class: "text-sm text-slate-500 mt-0.5" }, "Changes update the carousel instantly")
        ], -1)),
        S("div", ta, [
          D(B(co), {
            label: "Save All",
            icon: "pi pi-save",
            onClick: c,
            class: "!bg-green-600 !border-green-600 hover:!bg-green-700 text-white font-semibold px-4 py-2 rounded-lg"
          }),
          D(B(co), {
            label: "Add New Slide",
            icon: "pi pi-plus",
            onClick: s,
            class: "!bg-violet-600 !border-violet-600 hover:!bg-violet-700 text-white font-semibold px-4 py-2 rounded-lg"
          })
        ])
      ]),
      B(r).length === 0 ? (T(), L("div", na, [...p[1] || (p[1] = [
        S("i", { class: "pi pi-images text-5xl mb-4 block" }, null, -1),
        S("p", { class: "text-lg font-medium" }, "No slides yet", -1),
        S("p", { class: "text-sm" }, 'Click "Add New Slide" to get started', -1)
      ])])) : so("", !0),
      S("div", aa, [
        (T(!0), L(Ir, null, Lr(B(r), (m, y) => (T(), L("div", {
          key: y,
          class: "bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
        }, [
          S("div", ia, [
            S("span", da, "Slide " + Xo(y + 1), 1),
            S("div", la, [
              D(B(co), {
                label: "Save",
                icon: "pi pi-save",
                size: "small",
                onClick: c,
                class: "!bg-green-600 !border-green-600 hover:!bg-green-700 !text-white !text-xs !px-3 !py-1 rounded-lg"
              }),
              D(B(co), {
                icon: "pi pi-trash",
                severity: "danger",
                text: "",
                rounded: "",
                onClick: (k) => u(y),
                class: "!text-red-500 hover:!bg-red-50"
              }, null, 8, ["onClick"])
            ])
          ]),
          S("div", ca, [
            S("div", sa, [
              p[2] || (p[2] = S("label", { class: "text-xs font-semibold text-slate-500 uppercase tracking-wide" }, "Title", -1)),
              D(B(lo), {
                modelValue: m[B(t).title],
                "onUpdate:modelValue": (k) => m[B(t).title] = k,
                placeholder: "Slide title",
                class: "w-full !border-slate-300 !rounded-lg",
                onInput: f
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            S("div", ua, [
              p[3] || (p[3] = S("label", { class: "text-xs font-semibold text-slate-500 uppercase tracking-wide" }, "Tag", -1)),
              D(B(lo), {
                modelValue: m[B(t).tag],
                "onUpdate:modelValue": (k) => m[B(t).tag] = k,
                placeholder: "e.g. Fashion, Travel",
                class: "w-full !border-slate-300 !rounded-lg",
                onInput: f
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            S("div", fa, [
              p[4] || (p[4] = S("label", { class: "text-xs font-semibold text-slate-500 uppercase tracking-wide" }, "Description", -1)),
              D(B(dr), {
                modelValue: m.desc,
                "onUpdate:modelValue": (k) => m.desc = k,
                placeholder: "Slide description",
                rows: "2",
                class: "w-full !border-slate-300 !rounded-lg resize-none",
                onInput: f
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            S("div", ga, [
              p[6] || (p[6] = S("label", { class: "text-xs font-semibold text-slate-500 uppercase tracking-wide" }, "Image URL", -1)),
              S("div", pa, [
                D(B(lo), {
                  modelValue: m[B(t).image],
                  "onUpdate:modelValue": (k) => m[B(t).image] = k,
                  placeholder: "https://...",
                  class: "flex-1 !border-slate-300 !rounded-lg",
                  onInput: f
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                D(B(co), {
                  label: i[y] ? "Uploading..." : d[y] ? "Uploaded!" : "Upload",
                  icon: i[y] ? "pi pi-spin pi-spinner" : d[y] ? "pi pi-check" : "pi pi-upload",
                  disabled: i[y],
                  onClick: (k) => v(y),
                  class: re([
                    "rounded-lg px-3 whitespace-nowrap text-white",
                    d[y] ? "!bg-green-600 !border-green-600" : "!bg-slate-700 !border-slate-700 hover:!bg-slate-800"
                  ])
                }, null, 8, ["label", "icon", "disabled", "onClick", "class"])
              ]),
              l[y] ? (T(), L("p", ba, [
                p[5] || (p[5] = S("i", { class: "pi pi-exclamation-circle" }, null, -1)),
                ee(" " + Xo(l[y]), 1)
              ])) : so("", !0),
              m[B(t).image] ? (T(), L("div", ma, [
                S("img", {
                  src: m[B(t).image],
                  class: "w-full h-full object-cover",
                  alt: m[B(t).title] || "preview"
                }, null, 8, ha)
              ])) : so("", !0)
            ]),
            S("div", va, [
              p[7] || (p[7] = S("label", { class: "text-xs font-semibold text-slate-500 uppercase tracking-wide" }, "CTA Text", -1)),
              D(B(lo), {
                modelValue: m[B(t).ctaText],
                "onUpdate:modelValue": (k) => m[B(t).ctaText] = k,
                placeholder: "e.g. Shop Now",
                class: "w-full !border-slate-300 !rounded-lg",
                onInput: f
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            S("div", ya, [
              p[8] || (p[8] = S("label", { class: "text-xs font-semibold text-slate-500 uppercase tracking-wide" }, "Link ID", -1)),
              D(B(lo), {
                modelValue: m[B(t).linkId],
                "onUpdate:modelValue": (k) => m[B(t).linkId] = k,
                placeholder: "e.g. fashion",
                class: "w-full !border-slate-300 !rounded-lg",
                onInput: f
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            S("div", ka, [
              p[9] || (p[9] = S("label", { class: "text-xs font-semibold text-slate-500 uppercase tracking-wide" }, [
                ee(" onClick URL "),
                S("span", { class: "ml-1 text-slate-400 normal-case font-normal" }, "(opens in new tab on click)")
              ], -1)),
              D(B(lo), {
                modelValue: m[B(t).onClick],
                "onUpdate:modelValue": (k) => m[B(t).onClick] = k,
                placeholder: "/",
                class: "w-full !border-slate-300 !rounded-lg",
                onInput: f
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ])
          ])
        ]))), 128))
      ]),
      B(r).length > 0 ? (T(), L("div", $a, [
        D(B(co), {
          label: "Add Another Slide",
          icon: "pi pi-plus",
          outlined: "",
          onClick: s,
          class: "!border-violet-400 !text-violet-600 hover:!bg-violet-50 rounded-lg px-6"
        })
      ])) : so("", !0)
    ]));
  }
}), Ca = /* @__PURE__ */ He({
  __name: "index",
  props: {
    _p: {},
    _pp: {}
  },
  setup(e) {
    return (async () => (e._p.my.emitter = e._p.f.new_emitter(), e._p.my.emitter.on("msg", async (o) => {
      console.log("_p.my.emitter.on", o);
    }), await e._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: e._p,
      _pp: e._pp
    }), e._p.f.listen("msg", async (o) => {
      console.log("_p.f.listen", o);
    }), setTimeout(async () => {
      await e._p.f.call("msg", {
        type: "on:change",
        _p: e._p,
        _pp: e._pp
      });
    }, 500)))(), (o, r) => (T(), Go(wa, Ar(Dr({ _p: e._p, _pp: e._pp })), null, 16));
  }
});
var N = {
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
};
function Eo(e) {
  "@babel/helpers - typeof";
  return Eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Eo(e);
}
function Ve(e, o) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Ho(e) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Ve(Object(r), !0).forEach(function(t) {
      Sa(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ve(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Sa(e, o, r) {
  return (o = Ba(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Ba(e) {
  var o = _a(e, "string");
  return Eo(o) == "symbol" ? o : o + "";
}
function _a(e, o) {
  if (Eo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Eo(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var Ra = {
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
    text: [N.STARTS_WITH, N.CONTAINS, N.NOT_CONTAINS, N.ENDS_WITH, N.EQUALS, N.NOT_EQUALS],
    numeric: [N.EQUALS, N.NOT_EQUALS, N.LESS_THAN, N.LESS_THAN_OR_EQUAL_TO, N.GREATER_THAN, N.GREATER_THAN_OR_EQUAL_TO],
    date: [N.DATE_IS, N.DATE_IS_NOT, N.DATE_BEFORE, N.DATE_AFTER]
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
}, Pa = /* @__PURE__ */ Symbol();
function Oa(e, o) {
  var r = {
    config: Co(o)
  };
  return e.config.globalProperties.$primevue = r, e.provide(Pa, r), Ta(), za(e, r), r;
}
var ko = [];
function Ta() {
  j.clear(), ko.forEach(function(e) {
    return e?.();
  }), ko = [];
}
function za(e, o) {
  var r = Yo(!1), t = function() {
    var c;
    if (((c = o.config) === null || c === void 0 ? void 0 : c.theme) !== "none" && !_.isStyleNameLoaded("common")) {
      var s, u, f = ((s = P.getCommonTheme) === null || s === void 0 ? void 0 : s.call(P)) || {}, g = f.primitive, v = f.semantic, h = f.global, p = f.style, m = {
        nonce: (u = o.config) === null || u === void 0 || (u = u.csp) === null || u === void 0 ? void 0 : u.nonce
      };
      P.load(g?.css, Ho({
        name: "primitive-variables"
      }, m)), P.load(v?.css, Ho({
        name: "semantic-variables"
      }, m)), P.load(h?.css, Ho({
        name: "global-variables"
      }, m)), P.loadStyle(Ho({
        name: "global-style"
      }, m), p), _.setLoadedStyleName("common");
    }
  };
  j.on("theme:change", function(a) {
    r.value || (e.config.globalProperties.$primevue.config.theme = a, r.value = !0);
  });
  var n = xo(o.config, function(a, c) {
    oo.emit("config:change", {
      newValue: a,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = xo(function() {
    return o.config.ripple;
  }, function(a, c) {
    oo.emit("config:ripple:change", {
      newValue: a,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), l = xo(function() {
    return o.config.theme;
  }, function(a, c) {
    r.value || _.setTheme(a), o.config.unstyled || t(), r.value = !1, oo.emit("config:theme:change", {
      newValue: a,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !1
  }), d = xo(function() {
    return o.config.unstyled;
  }, function(a, c) {
    !a && o.config.theme && t(), oo.emit("config:unstyled:change", {
      newValue: a,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  });
  ko.push(n), ko.push(i), ko.push(l), ko.push(d);
}
var ja = {
  install: function(o, r) {
    var t = nt(Ra, r);
    Oa(o, t);
  }
}, Na = { transitionDuration: "{transition.duration}" }, Ia = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, La = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, Aa = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, Da = { root: Na, panel: Ia, header: La, content: Aa }, Ea = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Va = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Wa = { padding: "{list.padding}", gap: "{list.gap}" }, Fa = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Ma = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Ua = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ha = { borderRadius: "{border.radius.sm}" }, Ya = { padding: "{list.option.padding}" }, Ga = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, Xa = { root: Ea, overlay: Va, list: Wa, option: Fa, optionGroup: Ma, dropdown: Ua, chip: Ha, emptyMessage: Ya, colorScheme: Ga }, Ka = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Ja = { size: "1rem" }, qa = { borderColor: "{content.background}", offset: "-0.75rem" }, Za = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, Qa = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, oi = { root: Ka, icon: Ja, group: qa, lg: Za, xl: Qa }, ei = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, ri = { size: "0.5rem" }, ti = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, ni = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, ai = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, ii = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, di = { root: ei, dot: ri, sm: ti, lg: ni, xl: ai, colorScheme: ii }, li = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, ci = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, si = { primitive: li, semantic: ci }, ui = { borderRadius: "{content.border.radius}" }, fi = { root: ui }, gi = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, pi = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, bi = { color: "{navigation.item.icon.color}" }, mi = { root: gi, item: pi, separator: bi }, hi = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, vi = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, yi = { root: hi, colorScheme: vi }, ki = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, $i = { padding: "1.25rem", gap: "0.5rem" }, xi = { gap: "0.5rem" }, wi = { fontSize: "1.25rem", fontWeight: "500" }, Ci = { color: "{text.muted.color}" }, Si = { root: ki, body: $i, caption: xi, title: wi, subtitle: Ci }, Bi = { transitionDuration: "{transition.duration}" }, _i = { gap: "0.25rem" }, Ri = { padding: "1rem", gap: "0.5rem" }, Pi = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Oi = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, Ti = { root: Bi, content: _i, indicatorList: Ri, indicator: Pi, colorScheme: Oi }, zi = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, ji = { width: "2.5rem", color: "{form.field.icon.color}" }, Ni = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Ii = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, Li = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, Ai = { color: "{form.field.icon.color}" }, Di = { root: zi, dropdown: ji, overlay: Ni, list: Ii, option: Li, clearIcon: Ai }, Ei = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, Vi = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, Wi = { root: Ei, icon: Vi }, Fi = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, Mi = { width: "2rem", height: "2rem" }, Ui = { size: "1rem" }, Hi = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Yi = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, Gi = { root: Fi, image: Mi, icon: Ui, removeIcon: Hi, colorScheme: Yi }, Xi = { transitionDuration: "{transition.duration}" }, Ki = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ji = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, qi = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, Zi = { root: Xi, preview: Ki, panel: Ji, colorScheme: qi }, Qi = { size: "2rem", color: "{overlay.modal.color}" }, od = { gap: "1rem" }, ed = { icon: Qi, content: od }, rd = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, td = { padding: "{overlay.popover.padding}", gap: "1rem" }, nd = { size: "1.5rem", color: "{overlay.popover.color}" }, ad = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, id = { root: rd, content: td, icon: nd, footer: ad }, dd = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, ld = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, cd = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, sd = { mobileIndent: "1rem" }, ud = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, fd = { borderColor: "{content.border.color}" }, gd = { root: dd, list: ld, item: cd, submenu: sd, submenuIcon: ud, separator: fd }, pd = `
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
`, bd = { transitionDuration: "{transition.duration}" }, md = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, hd = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, vd = { fontWeight: "600" }, yd = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, kd = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, $d = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, xd = { fontWeight: "600" }, wd = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Cd = { color: "{primary.color}" }, Sd = { width: "0.5rem" }, Bd = { width: "1px", color: "{primary.color}" }, _d = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Rd = { size: "2rem" }, Pd = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Od = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, Td = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, zd = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, jd = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Nd = `
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Id = { root: bd, header: md, headerCell: hd, columnTitle: vd, row: yd, bodyCell: kd, footerCell: $d, columnFooter: xd, footer: wd, dropPoint: Cd, columnResizer: Sd, resizeIndicator: Bd, sortIcon: _d, loadingIcon: Rd, rowToggleButton: Pd, filter: Od, paginatorTop: Td, paginatorBottom: zd, colorScheme: jd, css: Nd }, Ld = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, Ad = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, Dd = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, Ed = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, Vd = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Wd = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, Fd = { root: Ld, header: Ad, content: Dd, footer: Ed, paginatorTop: Vd, paginatorBottom: Wd }, Md = { transitionDuration: "{transition.duration}" }, Ud = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, Hd = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, Yd = { gap: "0.5rem", fontWeight: "500" }, Gd = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xd = { color: "{form.field.icon.color}" }, Kd = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, Jd = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, qd = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, Zd = { margin: "0.5rem 0 0 0" }, Qd = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, ol = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, el = { margin: "0.5rem 0 0 0" }, rl = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, tl = { margin: "0.5rem 0 0 0" }, nl = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, al = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, il = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, dl = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, ll = { root: Md, panel: Ud, header: Hd, title: Yd, dropdown: Gd, inputIcon: Xd, selectMonth: Kd, selectYear: Jd, group: qd, dayView: Zd, weekDay: Qd, date: ol, monthView: el, month: rl, yearView: tl, year: nl, buttonbar: al, timePicker: il, colorScheme: dl }, cl = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, sl = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, ul = { fontSize: "1.25rem", fontWeight: "600" }, fl = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, gl = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, pl = { root: cl, header: sl, title: ul, content: fl, footer: gl }, bl = { borderColor: "{content.border.color}" }, ml = { background: "{content.background}", color: "{text.color}" }, hl = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, vl = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, yl = { root: bl, content: ml, horizontal: hl, vertical: vl }, kl = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, $l = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, xl = { root: kl, item: $l }, wl = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, Cl = { padding: "{overlay.modal.padding}" }, Sl = { fontSize: "1.5rem", fontWeight: "600" }, Bl = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, _l = { padding: "{overlay.modal.padding}" }, Rl = { root: wl, header: Cl, title: Sl, content: Bl, footer: _l }, Pl = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, Ol = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Tl = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, zl = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, jl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Nl = { toolbar: Pl, toolbarItem: Ol, overlay: Tl, overlayOption: zl, content: jl }, Il = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, Ll = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Al = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, Dl = { padding: "0" }, El = { root: Il, legend: Ll, toggleIcon: Al, content: Dl }, Vl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, Wl = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, Fl = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, Ml = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, Ul = { gap: "0.5rem" }, Hl = { height: "0.25rem" }, Yl = { gap: "0.5rem" }, Gl = { root: Vl, header: Wl, content: Fl, file: Ml, fileList: Ul, progressbar: Hl, basic: Yl }, Xl = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, Kl = { active: { top: "-1.25rem" } }, Jl = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, ql = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, Zl = { root: Xl, over: Kl, in: Jl, on: ql }, Ql = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, oc = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ec = { size: "1.5rem" }, rc = { background: "{content.background}", padding: "1rem 0.25rem" }, tc = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, nc = { size: "1rem" }, ac = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, ic = { gap: "0.5rem", padding: "1rem" }, dc = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, lc = { background: "rgba(0, 0, 0, 0.5)" }, cc = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, sc = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, uc = { size: "1.5rem" }, fc = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, gc = { root: Ql, navButton: oc, navIcon: ec, thumbnailsContent: rc, thumbnailNavButton: tc, thumbnailNavButtonIcon: nc, caption: ac, indicatorList: ic, indicatorButton: dc, insetIndicatorList: lc, insetIndicatorButton: cc, closeButton: sc, closeButtonIcon: uc, colorScheme: fc }, pc = { color: "{form.field.icon.color}" }, bc = { icon: pc }, mc = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, hc = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, vc = { root: mc, input: hc }, yc = { transitionDuration: "{transition.duration}" }, kc = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, $c = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, xc = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, wc = { root: yc, preview: kc, toolbar: $c, action: xc }, Cc = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Sc = { handle: Cc }, Bc = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, _c = { fontWeight: "500" }, Rc = { size: "1rem" }, Pc = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, Oc = { root: Bc, text: _c, icon: Rc, colorScheme: Pc }, Tc = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, zc = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, jc = { root: Tc, display: zc }, Nc = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Ic = { borderRadius: "{border.radius.sm}" }, Lc = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, Ac = { root: Nc, chip: Ic, colorScheme: Lc }, Dc = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, Ec = { addon: Dc }, Vc = { transitionDuration: "{transition.duration}" }, Wc = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, Fc = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, Mc = { root: Vc, button: Wc, colorScheme: Fc }, Uc = { gap: "0.5rem" }, Hc = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, Yc = { root: Uc, input: Hc }, Gc = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Xc = { root: Gc }, Kc = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Jc = { background: "{primary.color}" }, qc = { background: "{content.border.color}" }, Zc = { color: "{text.muted.color}" }, Qc = { root: Kc, value: Jc, range: qc, text: Zc }, os = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, es = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, rs = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, ts = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, ns = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, as = { padding: "{list.option.padding}" }, is = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, ds = { root: os, list: es, option: rs, optionGroup: ts, checkmark: ns, emptyMessage: as, colorScheme: is }, ls = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, cs = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, ss = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, us = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, fs = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, gs = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, ps = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, bs = { borderColor: "{content.border.color}" }, ms = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, hs = { root: ls, baseItem: cs, item: ss, overlay: us, submenu: fs, submenuLabel: gs, submenuIcon: ps, separator: bs, mobileButton: ms }, vs = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, ys = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, ks = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, $s = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, xs = { borderColor: "{content.border.color}" }, ws = { root: vs, list: ys, item: ks, submenuLabel: $s, separator: xs }, Cs = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, Ss = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, Bs = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, _s = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, Rs = { borderColor: "{content.border.color}" }, Ps = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Os = { root: Cs, baseItem: Ss, item: Bs, submenu: _s, separator: Rs, mobileButton: Ps }, Ts = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, zs = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, js = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, Ns = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, Is = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Ls = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, As = { root: { borderWidth: "1px" } }, Ds = { content: { padding: "0" } }, Es = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, Vs = { root: Ts, content: zs, text: js, icon: Ns, closeButton: Is, closeIcon: Ls, outlined: As, simple: Ds, colorScheme: Es }, Ws = { borderRadius: "{content.border.radius}", gap: "1rem" }, Fs = { background: "{content.border.color}", size: "0.5rem" }, Ms = { gap: "0.5rem" }, Us = { size: "0.5rem" }, Hs = { size: "1rem" }, Ys = { verticalGap: "0.5rem", horizontalGap: "1rem" }, Gs = { root: Ws, meters: Fs, label: Ms, labelMarker: Us, labelIcon: Hs, labelList: Ys }, Xs = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Ks = { width: "2.5rem", color: "{form.field.icon.color}" }, Js = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, qs = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Zs = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, Qs = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, ou = { color: "{form.field.icon.color}" }, eu = { borderRadius: "{border.radius.sm}" }, ru = { padding: "{list.option.padding}" }, tu = { root: Xs, dropdown: Ks, overlay: Js, list: qs, option: Zs, optionGroup: Qs, chip: eu, clearIcon: ou, emptyMessage: ru }, nu = { gap: "1.125rem" }, au = { gap: "0.5rem" }, iu = { root: nu, controls: au }, du = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, lu = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, cu = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, su = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, uu = { root: du, node: lu, nodeToggleButton: cu, connector: su }, fu = { outline: { width: "2px", color: "{content.background}" } }, gu = { root: fu }, pu = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, bu = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, mu = { color: "{text.muted.color}" }, hu = { maxWidth: "2.5rem" }, vu = { root: pu, navButton: bu, currentPageReport: mu, jumpToPageInput: hu }, yu = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, ku = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, $u = { padding: "0.375rem 1.125rem" }, xu = { fontWeight: "600" }, wu = { padding: "0 1.125rem 1.125rem 1.125rem" }, Cu = { padding: "0 1.125rem 1.125rem 1.125rem" }, Su = { root: yu, header: ku, toggleableHeader: $u, title: xu, content: wu, footer: Cu }, Bu = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, _u = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, Ru = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Pu = { indent: "1rem" }, Ou = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, Tu = { root: Bu, panel: _u, item: Ru, submenu: Pu, submenuIcon: Ou }, zu = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, ju = { color: "{form.field.icon.color}" }, Nu = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, Iu = { gap: "0.5rem" }, Lu = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, Au = { meter: zu, icon: ju, overlay: Nu, content: Iu, colorScheme: Lu }, Du = { gap: "1.125rem" }, Eu = { gap: "0.5rem" }, Vu = { root: Du, controls: Eu }, Wu = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Fu = { padding: "{overlay.popover.padding}" }, Mu = { root: Wu, content: Fu }, Uu = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, Hu = { background: "{primary.color}" }, Yu = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, Gu = { root: Uu, value: Hu, label: Yu }, Xu = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, Ku = { colorScheme: Xu }, Ju = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, qu = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, Zu = { root: Ju, icon: qu }, Qu = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, of = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, ef = { root: Qu, icon: of }, rf = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, tf = { colorScheme: rf }, nf = { transitionDuration: "{transition.duration}" }, af = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, df = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, lf = { root: nf, bar: af, colorScheme: df }, cf = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, sf = { width: "2.5rem", color: "{form.field.icon.color}" }, uf = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, ff = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, gf = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, pf = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, bf = { color: "{form.field.icon.color}" }, mf = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, hf = { padding: "{list.option.padding}" }, vf = { root: cf, dropdown: sf, overlay: uf, list: ff, option: gf, optionGroup: pf, clearIcon: bf, checkmark: mf, emptyMessage: hf }, yf = { borderRadius: "{form.field.border.radius}" }, kf = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, $f = { root: yf, colorScheme: kf }, xf = { borderRadius: "{content.border.radius}" }, wf = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, Cf = { root: xf, colorScheme: wf }, Sf = { transitionDuration: "{transition.duration}" }, Bf = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, _f = { background: "{primary.color}" }, Rf = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Pf = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, Of = { root: Sf, track: Bf, range: _f, handle: Rf, colorScheme: Pf }, Tf = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, zf = { root: Tf }, jf = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, Nf = { root: jf }, If = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Lf = { background: "{content.border.color}" }, Af = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Df = { root: If, gutter: Lf, handle: Af }, Ef = { transitionDuration: "{transition.duration}" }, Vf = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, Wf = { padding: "0.5rem", gap: "1rem" }, Ff = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Mf = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Uf = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, Hf = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, Yf = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, Gf = { root: Ef, separator: Vf, step: Wf, stepHeader: Ff, stepTitle: Mf, stepNumber: Uf, steppanels: Hf, steppanel: Yf }, Xf = { transitionDuration: "{transition.duration}" }, Kf = { background: "{content.border.color}" }, Jf = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, qf = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Zf = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, Qf = { root: Xf, separator: Kf, itemLink: Jf, itemLabel: qf, itemNumber: Zf }, og = { transitionDuration: "{transition.duration}" }, eg = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, rg = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, tg = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, ng = { height: "1px", bottom: "-1px", background: "{primary.color}" }, ag = { root: og, tablist: eg, item: rg, itemIcon: tg, activeBar: ng }, ig = { transitionDuration: "{transition.duration}" }, dg = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, lg = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, cg = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, sg = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, ug = { height: "1px", bottom: "-1px", background: "{primary.color}" }, fg = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, gg = { root: ig, tablist: dg, tab: lg, tabpanel: cg, navButton: sg, activeBar: ug, colorScheme: fg }, pg = { transitionDuration: "{transition.duration}" }, bg = { background: "{content.background}", borderColor: "{content.border.color}" }, mg = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, hg = { background: "{content.background}", color: "{content.color}" }, vg = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, yg = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, kg = { root: pg, tabList: bg, tab: mg, tabPanel: hg, navButton: vg, colorScheme: yg }, $g = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, xg = { size: "0.75rem" }, wg = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Cg = { root: $g, icon: xg, colorScheme: wg }, Sg = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, Bg = { gap: "0.25rem" }, _g = { margin: "2px 0" }, Rg = { root: Sg, prompt: Bg, commandResponse: _g }, Pg = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Og = { root: Pg }, Tg = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, zg = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, jg = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Ng = { mobileIndent: "1rem" }, Ig = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Lg = { borderColor: "{content.border.color}" }, Ag = { root: Tg, list: zg, item: jg, submenu: Ng, submenuIcon: Ig, separator: Lg }, Dg = { minHeight: "5rem" }, Eg = { eventContent: { padding: "1rem 0" } }, Vg = { eventContent: { padding: "0 1rem" } }, Wg = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, Fg = { color: "{content.border.color}", size: "2px" }, Mg = { event: Dg, horizontal: Eg, vertical: Vg, eventMarker: Wg, eventConnector: Fg }, Ug = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Hg = { size: "1.125rem" }, Yg = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, Gg = { gap: "0.5rem" }, Xg = { fontWeight: "500", fontSize: "1rem" }, Kg = { fontWeight: "500", fontSize: "0.875rem" }, Jg = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, qg = { size: "1rem" }, Zg = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, Qg = { root: Ug, icon: Hg, content: Yg, text: Gg, summary: Xg, detail: Kg, closeButton: Jg, closeIcon: qg, colorScheme: Zg }, op = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, ep = { disabledColor: "{form.field.disabled.color}" }, rp = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, tp = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, np = { root: op, icon: ep, content: rp, colorScheme: tp }, ap = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, ip = { borderRadius: "50%", size: "1rem" }, dp = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, lp = { root: ap, handle: ip, colorScheme: dp }, cp = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, sp = { root: cp }, up = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, fp = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, gp = { root: up, colorScheme: fp }, pp = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, bp = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, mp = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, hp = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, vp = { size: "2rem" }, yp = { margin: "0 0 0.5rem 0" }, kp = `
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, $p = { root: pp, node: bp, nodeIcon: mp, nodeToggleButton: hp, loadingIcon: vp, filter: yp, css: kp }, xp = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, wp = { width: "2.5rem", color: "{form.field.icon.color}" }, Cp = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Sp = { padding: "{list.padding}" }, Bp = { padding: "{list.option.padding}" }, _p = { borderRadius: "{border.radius.sm}" }, Rp = { color: "{form.field.icon.color}" }, Pp = { root: xp, dropdown: wp, overlay: Cp, tree: Sp, emptyMessage: Bp, chip: _p, clearIcon: Rp }, Op = { transitionDuration: "{transition.duration}" }, Tp = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, zp = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, jp = { fontWeight: "600" }, Np = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Ip = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, Lp = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, Ap = { fontWeight: "600" }, Dp = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, Ep = { width: "0.5rem" }, Vp = { width: "1px", color: "{primary.color}" }, Wp = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Fp = { size: "2rem" }, Mp = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Up = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Hp = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Yp = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Gp = `
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Xp = { root: Op, header: Tp, headerCell: zp, columnTitle: jp, row: Np, bodyCell: Ip, footerCell: Lp, columnFooter: Ap, footer: Dp, columnResizer: Ep, resizeIndicator: Vp, sortIcon: Wp, loadingIcon: Fp, nodeToggleButton: Mp, paginatorTop: Up, paginatorBottom: Hp, colorScheme: Yp, css: Gp }, Kp = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, Jp = { loader: Kp }, qp = Object.defineProperty, Zp = Object.defineProperties, Qp = Object.getOwnPropertyDescriptors, We = Object.getOwnPropertySymbols, o0 = Object.prototype.hasOwnProperty, e0 = Object.prototype.propertyIsEnumerable, Fe = (e, o, r) => o in e ? qp(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Me, r0 = (Me = ((e, o) => {
  for (var r in o || (o = {})) o0.call(o, r) && Fe(e, r, o[r]);
  if (We) for (var r of We(o)) e0.call(o, r) && Fe(e, r, o[r]);
  return e;
})({}, si), Zp(Me, Qp({ components: { accordion: Da, autocomplete: Xa, avatar: oi, badge: di, blockui: fi, breadcrumb: mi, button: yi, card: Si, carousel: Ti, cascadeselect: Di, checkbox: Wi, chip: Gi, colorpicker: Zi, confirmdialog: ed, confirmpopup: id, contextmenu: gd, datatable: Id, dataview: Fd, datepicker: ll, dialog: pl, divider: yl, dock: xl, drawer: Rl, editor: Nl, fieldset: El, fileupload: Gl, floatlabel: Zl, galleria: gc, iconfield: bc, iftalabel: vc, image: wc, imagecompare: Sc, inlinemessage: Oc, inplace: jc, inputchips: Ac, inputgroup: Ec, inputnumber: Mc, inputotp: Yc, inputtext: Xc, knob: Qc, listbox: ds, megamenu: hs, menu: ws, menubar: Os, message: Vs, metergroup: Gs, multiselect: tu, orderlist: iu, organizationchart: uu, overlaybadge: gu, paginator: vu, panel: Su, panelmenu: Tu, password: Au, picklist: Vu, popover: Mu, progressbar: Gu, progressspinner: Ku, radiobutton: Zu, rating: ef, ripple: tf, scrollpanel: lf, select: vf, selectbutton: $f, skeleton: Cf, slider: Of, speeddial: zf, splitbutton: Nf, splitter: Df, stepper: Gf, steps: Qf, tabmenu: ag, tabs: gg, tabview: kg, tag: Cg, terminal: Rg, textarea: Og, tieredmenu: Ag, timeline: Mg, toast: Qg, togglebutton: np, toggleswitch: lp, toolbar: sp, tooltip: gp, tree: $p, treeselect: Pp, treetable: Xp, virtualscroller: Jp }, css: pd })));
const n0 = async (e) => ({
  set: async (o) => {
    console.log(`--custom [${o.data.curr.type}]`);
    const t = Er(Ca, {
      _p: e,
      _pp: o
    }), n = e.custom.lib.primevue || {
      config: ja,
      theme: r0
    };
    t.use(n.config, {
      theme: {
        preset: n.theme,
        options: {
          darkModeSelector: "none",
          cssLayer: !1
        }
      }
    });
    const i = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          e.f.call("msg", {
            type: "change",
            _p: e,
            _pp: o,
            custom: {}
          });
        }
      }
    }, l = o?.data?.curr?.id ?? "", d = document.getElementById(`c-u-s-t-o-m_${l}`) || document.getElementById(e.f.name("c-u-s-t-o-m_"));
    return d && t.mount(d), i;
  }
});
export {
  n0 as custom,
  n0 as index
};
