import { r as rt, g as Ro, o as tt, n as nt, w as $e, a as pe, b as it, u as at, m as w, c as x, d as I, e as ee, f as z, h as D, i as ge, j as fo, t as ye, T as lt, k as de, F as Se, l as Qe, p as ke, q as st, s as sr, v as be, x as Ie, y as dt, z as ct, A as io, B as ut, C as ft, D as pt, E as gt } from "./runtime-dom.esm-bundler-CmmLJxNk.js";
var mt = Object.defineProperty, To = Object.getOwnPropertySymbols, ht = Object.prototype.hasOwnProperty, vt = Object.prototype.propertyIsEnumerable, Po = (o, e, r) => e in o ? mt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, bt = (o, e) => {
  for (var r in e || (e = {})) ht.call(e, r) && Po(o, r, e[r]);
  if (To) for (var r of To(e)) vt.call(e, r) && Po(o, r, e[r]);
  return o;
};
function Be(o) {
  return o == null || o === "" || Array.isArray(o) && o.length === 0 || !(o instanceof Date) && typeof o == "object" && Object.keys(o).length === 0;
}
function po(o, e, r = /* @__PURE__ */ new WeakSet()) {
  if (o === e) return !0;
  if (!o || !e || typeof o != "object" || typeof e != "object" || r.has(o) || r.has(e)) return !1;
  r.add(o).add(e);
  let t = Array.isArray(o), n = Array.isArray(e), i, l, s;
  if (t && n) {
    if (l = o.length, l != e.length) return !1;
    for (i = l; i-- !== 0; ) if (!po(o[i], e[i], r)) return !1;
    return !0;
  }
  if (t != n) return !1;
  let a = o instanceof Date, d = e instanceof Date;
  if (a != d) return !1;
  if (a && d) return o.getTime() == e.getTime();
  let c = o instanceof RegExp, u = e instanceof RegExp;
  if (c != u) return !1;
  if (c && u) return o.toString() == e.toString();
  let f = Object.keys(o);
  if (l = f.length, l !== Object.keys(e).length) return !1;
  for (i = l; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(e, f[i])) return !1;
  for (i = l; i-- !== 0; ) if (s = f[i], !po(o[s], e[s], r)) return !1;
  return !0;
}
function yt(o, e) {
  return po(o, e);
}
function oo(o) {
  return typeof o == "function" && "call" in o && "apply" in o;
}
function B(o) {
  return !Be(o);
}
function ce(o, e) {
  if (!o || !e) return null;
  try {
    let r = o[e];
    if (B(r)) return r;
  } catch {
  }
  if (Object.keys(o).length) {
    if (oo(e)) return e(o);
    if (e.indexOf(".") === -1) return o[e];
    {
      let r = e.split("."), t = o;
      for (let n = 0, i = r.length; n < i; ++n) {
        if (t == null) return null;
        t = t[r[n]];
      }
      return t;
    }
  }
  return null;
}
function kt(o, e, r) {
  return r ? ce(o, r) === ce(e, r) : yt(o, e);
}
function re(o, e = !0) {
  return o instanceof Object && o.constructor === Object && (e || Object.keys(o).length !== 0);
}
function dr(o = {}, e = {}) {
  let r = bt({}, o);
  return Object.keys(e).forEach((t) => {
    let n = t;
    re(e[n]) && n in o && re(o[n]) ? r[n] = dr(o[n], e[n]) : r[n] = e[n];
  }), r;
}
function wt(...o) {
  return o.reduce((e, r, t) => t === 0 ? r : dr(e, r), {});
}
function ao(o, e) {
  let r = -1;
  if (B(o)) try {
    r = o.findLastIndex(e);
  } catch {
    r = o.lastIndexOf([...o].reverse().find(e));
  }
  return r;
}
function G(o, ...e) {
  return oo(o) ? o(...e) : o;
}
function H(o, e = !0) {
  return typeof o == "string" && (e || o !== "");
}
function oe(o) {
  return H(o) ? o.replace(/(-|_)/g, "").toLowerCase() : o;
}
function xo(o, e = "", r = {}) {
  let t = oe(e).split("."), n = t.shift();
  if (n) {
    if (re(o)) {
      let i = Object.keys(o).find((l) => oe(l) === n) || "";
      return xo(G(o[i], r), t.join("."), r);
    }
    return;
  }
  return G(o, r);
}
function cr(o, e = !0) {
  return Array.isArray(o) && (e || o.length !== 0);
}
function $t(o) {
  return B(o) && !isNaN(o);
}
function me(o, e) {
  if (e) {
    let r = e.test(o);
    return e.lastIndex = 0, r;
  }
  return !1;
}
function Ct(...o) {
  return wt(...o);
}
function Pe(o) {
  return o && o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function St(o) {
  return H(o, !1) ? o[0].toUpperCase() + o.slice(1) : o;
}
function ur(o) {
  return H(o) ? o.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : o;
}
function Oo() {
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
function xe(...o) {
  if (o) {
    let e = [];
    for (let r = 0; r < o.length; r++) {
      let t = o[r];
      if (!t) continue;
      let n = typeof t;
      if (n === "string" || n === "number") e.push(t);
      else if (n === "object") {
        let i = Array.isArray(t) ? [xe(...t)] : Object.entries(t).map(([l, s]) => s ? l : void 0);
        e = i.length ? e.concat(i.filter((l) => !!l)) : e;
      }
    }
    return e.join(" ").trim();
  }
}
function xt(o, e) {
  return o ? o.classList ? o.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(o.className) : !1;
}
function Ot(o, e) {
  if (o && e) {
    let r = (t) => {
      xt(o, t) || (o.classList ? o.classList.add(t) : o.className += " " + t);
    };
    [e].flat().filter(Boolean).forEach((t) => t.split(" ").forEach(r));
  }
}
function lo(o, e) {
  if (o && e) {
    let r = (t) => {
      o.classList ? o.classList.remove(t) : o.className = o.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e].flat().filter(Boolean).forEach((t) => t.split(" ").forEach(r));
  }
}
function go(o) {
  for (let e of document?.styleSheets) try {
    for (let r of e?.cssRules) for (let t of r?.style) if (o.test(t)) return { name: t, value: r.style.getPropertyValue(t).trim() };
  } catch {
  }
  return null;
}
function fr(o) {
  let e = { width: 0, height: 0 };
  if (o) {
    let [r, t] = [o.style.visibility, o.style.display], n = o.getBoundingClientRect();
    o.style.visibility = "hidden", o.style.display = "block", e.width = n.width || o.offsetWidth, e.height = n.height || o.offsetHeight, o.style.display = t, o.style.visibility = r;
  }
  return e;
}
function pr() {
  let o = window, e = document, r = e.documentElement, t = e.getElementsByTagName("body")[0], n = o.innerWidth || r.clientWidth || t.clientWidth, i = o.innerHeight || r.clientHeight || t.clientHeight;
  return { width: n, height: i };
}
function mo(o) {
  return o ? Math.abs(o.scrollLeft) : 0;
}
function Bt() {
  let o = document.documentElement;
  return (window.pageXOffset || mo(o)) - (o.clientLeft || 0);
}
function It() {
  let o = document.documentElement;
  return (window.pageYOffset || o.scrollTop) - (o.clientTop || 0);
}
function _t(o) {
  return o ? getComputedStyle(o).direction === "rtl" : !1;
}
function Rt(o, e, r = !0) {
  var t, n, i, l;
  if (o) {
    let s = o.offsetParent ? { width: o.offsetWidth, height: o.offsetHeight } : fr(o), a = s.height, d = s.width, c = e.offsetHeight, u = e.offsetWidth, f = e.getBoundingClientRect(), p = It(), g = Bt(), b = pr(), h, v, k = "top";
    f.top + c + a > b.height ? (h = f.top + p - a, k = "bottom", h < 0 && (h = p)) : h = c + f.top + p, f.left + d > b.width ? v = Math.max(0, f.left + g + u - d) : v = f.left + g, _t(o) ? o.style.insetInlineEnd = v + "px" : o.style.insetInlineStart = v + "px", o.style.top = h + "px", o.style.transformOrigin = k, r && (o.style.marginTop = k === "bottom" ? `calc(${(n = (t = go(/-anchor-gutter$/)) == null ? void 0 : t.value) != null ? n : "2px"} * -1)` : (l = (i = go(/-anchor-gutter$/)) == null ? void 0 : i.value) != null ? l : "");
  }
}
function Tt(o, e) {
  o && (typeof e == "string" ? o.style.cssText = e : Object.entries(e || {}).forEach(([r, t]) => o.style[r] = t));
}
function gr(o, e) {
  return o instanceof HTMLElement ? o.offsetWidth : 0;
}
function Pt(o, e, r = !0, t = void 0) {
  var n;
  if (o) {
    let i = o.offsetParent ? { width: o.offsetWidth, height: o.offsetHeight } : fr(o), l = e.offsetHeight, s = e.getBoundingClientRect(), a = pr(), d, c, u = t ?? "top";
    if (!t && s.top + l + i.height > a.height ? (d = -1 * i.height, u = "bottom", s.top + d < 0 && (d = -1 * s.top)) : d = l, i.width > a.width ? c = s.left * -1 : s.left + i.width > a.width ? c = (s.left + i.width - a.width) * -1 : c = 0, o.style.top = d + "px", o.style.insetInlineStart = c + "px", o.style.transformOrigin = u, r) {
      let f = (n = go(/-anchor-gutter$/)) == null ? void 0 : n.value;
      o.style.marginTop = u === "bottom" ? `calc(${f ?? "2px"} * -1)` : f ?? "";
    }
  }
}
function mr(o) {
  if (o) {
    let e = o.parentNode;
    return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
  }
  return null;
}
function Lt(o) {
  return !!(o !== null && typeof o < "u" && o.nodeName && mr(o));
}
function Ke(o) {
  return typeof Element < "u" ? o instanceof Element : o !== null && typeof o == "object" && o.nodeType === 1 && typeof o.nodeName == "string";
}
function Je(o, e = {}) {
  if (Ke(o)) {
    let r = (t, n) => {
      var i, l;
      let s = (i = o?.$attrs) != null && i[t] ? [(l = o?.$attrs) == null ? void 0 : l[t]] : [];
      return [n].flat().reduce((a, d) => {
        if (d != null) {
          let c = typeof d;
          if (c === "string" || c === "number") a.push(d);
          else if (c === "object") {
            let u = Array.isArray(d) ? r(t, d) : Object.entries(d).map(([f, p]) => t === "style" && (p || p === 0) ? `${f.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${p}` : p ? f : void 0);
            a = u.length ? a.concat(u.filter((f) => !!f)) : a;
          }
        }
        return a;
      }, s);
    };
    Object.entries(e).forEach(([t, n]) => {
      if (n != null) {
        let i = t.match(/^on(.+)/);
        i ? o.addEventListener(i[1].toLowerCase(), n) : t === "p-bind" || t === "pBind" ? Je(o, n) : (n = t === "class" ? [...new Set(r("class", n))].join(" ").trim() : t === "style" ? r("style", n).join(";").trim() : n, (o.$attrs = o.$attrs || {}) && (o.$attrs[t] = n), o.setAttribute(t, n));
      }
    });
  }
}
function zt(o, e = {}, ...r) {
  {
    let t = document.createElement(o);
    return Je(t, e), t.append(...r), t;
  }
}
function ro(o, e) {
  return Ke(o) ? o.matches(e) ? o : o.querySelector(e) : null;
}
function se(o, e) {
  o && document.activeElement !== o && o.focus(e);
}
function At(o, e) {
  if (Ke(o)) {
    let r = o.getAttribute(e);
    return isNaN(r) ? r === "true" || r === "false" ? r === "true" : r : +r;
  }
}
function ue(o) {
  if (o) {
    let e = o.offsetHeight, r = getComputedStyle(o);
    return e -= parseFloat(r.paddingTop) + parseFloat(r.paddingBottom) + parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth), e;
  }
  return 0;
}
function jt(o) {
  if (o) {
    let e = o.getBoundingClientRect();
    return { top: e.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: e.left + (window.pageXOffset || mo(document.documentElement) || mo(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function Mt(o, e) {
  return o ? o.offsetHeight : 0;
}
function hr(o, e = []) {
  let r = mr(o);
  return r === null ? e : hr(r, e.concat([r]));
}
function Dt(o) {
  let e = [];
  if (o) {
    let r = hr(o), t = /(auto|scroll)/, n = (i) => {
      try {
        let l = window.getComputedStyle(i, null);
        return t.test(l.getPropertyValue("overflow")) || t.test(l.getPropertyValue("overflowX")) || t.test(l.getPropertyValue("overflowY"));
      } catch {
        return !1;
      }
    };
    for (let i of r) {
      let l = i.nodeType === 1 && i.dataset.scrollselectors;
      if (l) {
        let s = l.split(",");
        for (let a of s) {
          let d = ro(i, a);
          d && n(d) && e.push(d);
        }
      }
      i.nodeType !== 9 && n(i) && e.push(i);
    }
  }
  return e;
}
function fe(o) {
  if (o) {
    let e = o.offsetWidth, r = getComputedStyle(o);
    return e -= parseFloat(r.paddingLeft) + parseFloat(r.paddingRight) + parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth), e;
  }
  return 0;
}
function vr() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Lo(o) {
  return !!(o && o.offsetParent != null);
}
function Et() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function Nt(o, e = "", r) {
  Ke(o) && r !== null && r !== void 0 && o.setAttribute(e, r);
}
var Ge = {};
function Vt(o = "pui_id_") {
  return Object.hasOwn(Ge, o) || (Ge[o] = 0), Ge[o]++, `${o}${Ge[o]}`;
}
function Ft() {
  let o = [], e = (l, s, a = 999) => {
    let d = n(l, s, a), c = d.value + (d.key === l ? 0 : a) + 1;
    return o.push({ key: l, value: c }), c;
  }, r = (l) => {
    o = o.filter((s) => s.value !== l);
  }, t = (l, s) => n(l).value, n = (l, s, a = 0) => [...o].reverse().find((d) => !0) || { key: l, value: a }, i = (l) => l && parseInt(l.style.zIndex, 10) || 0;
  return { get: i, set: (l, s, a) => {
    s && (s.style.zIndex = String(e(l, !0, a)));
  }, clear: (l) => {
    l && (r(i(l)), l.style.zIndex = "");
  }, getCurrent: (l) => t(l) };
}
var so = Ft(), Wt = Object.defineProperty, Ht = Object.defineProperties, Kt = Object.getOwnPropertyDescriptors, eo = Object.getOwnPropertySymbols, br = Object.prototype.hasOwnProperty, yr = Object.prototype.propertyIsEnumerable, zo = (o, e, r) => e in o ? Wt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, Z = (o, e) => {
  for (var r in e || (e = {})) br.call(e, r) && zo(o, r, e[r]);
  if (eo) for (var r of eo(e)) yr.call(e, r) && zo(o, r, e[r]);
  return o;
}, co = (o, e) => Ht(o, Kt(e)), te = (o, e) => {
  var r = {};
  for (var t in o) br.call(o, t) && e.indexOf(t) < 0 && (r[t] = o[t]);
  if (o != null && eo) for (var t of eo(o)) e.indexOf(t) < 0 && yr.call(o, t) && (r[t] = o[t]);
  return r;
}, Ut = Oo(), E = Ut, Le = /{([^}]*)}/g, kr = /(\d+\s+[\+\-\*\/]\s+\d+)/g, wr = /var\([^)]+\)/g;
function Ao(o) {
  return H(o) ? o.replace(/[A-Z]/g, (e, r) => r === 0 ? e : "." + e.toLowerCase()).toLowerCase() : o;
}
function Gt(o) {
  return re(o) && o.hasOwnProperty("$value") && o.hasOwnProperty("$type") ? o.$value : o;
}
function Yt(o) {
  return o.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function ho(o = "", e = "") {
  return Yt(`${H(o, !1) && H(e, !1) ? `${o}-` : o}${e}`);
}
function $r(o = "", e = "") {
  return `--${ho(o, e)}`;
}
function Xt(o = "") {
  let e = (o.match(/{/g) || []).length, r = (o.match(/}/g) || []).length;
  return (e + r) % 2 !== 0;
}
function Cr(o, e = "", r = "", t = [], n) {
  if (H(o)) {
    let i = o.trim();
    if (Xt(i)) return;
    if (me(i, Le)) {
      let l = i.replaceAll(Le, (s) => {
        let a = s.replace(/{|}/g, "").split(".").filter((d) => !t.some((c) => me(d, c)));
        return `var(${$r(r, ur(a.join("-")))}${B(n) ? `, ${n}` : ""})`;
      });
      return me(l.replace(wr, "0"), kr) ? `calc(${l})` : l;
    }
    return i;
  } else if ($t(o)) return o;
}
function qt(o, e, r) {
  H(e, !1) && o.push(`${e}:${r};`);
}
function we(o, e) {
  return o ? `${o}{${e}}` : "";
}
function Sr(o, e) {
  if (o.indexOf("dt(") === -1) return o;
  function r(l, s) {
    let a = [], d = 0, c = "", u = null, f = 0;
    for (; d <= l.length; ) {
      let p = l[d];
      if ((p === '"' || p === "'" || p === "`") && l[d - 1] !== "\\" && (u = u === p ? null : p), !u && (p === "(" && f++, p === ")" && f--, (p === "," || d === l.length) && f === 0)) {
        let g = c.trim();
        g.startsWith("dt(") ? a.push(Sr(g, s)) : a.push(t(g)), c = "", d++;
        continue;
      }
      p !== void 0 && (c += p), d++;
    }
    return a;
  }
  function t(l) {
    let s = l[0];
    if ((s === '"' || s === "'" || s === "`") && l[l.length - 1] === s) return l.slice(1, -1);
    let a = Number(l);
    return isNaN(a) ? l : a;
  }
  let n = [], i = [];
  for (let l = 0; l < o.length; l++) if (o[l] === "d" && o.slice(l, l + 3) === "dt(") i.push(l), l += 2;
  else if (o[l] === ")" && i.length > 0) {
    let s = i.pop();
    i.length === 0 && n.push([s, l]);
  }
  if (!n.length) return o;
  for (let l = n.length - 1; l >= 0; l--) {
    let [s, a] = n[l], d = o.slice(s + 3, a), c = r(d, e), u = e(...c);
    o = o.slice(0, s) + u + o.slice(a + 1);
  }
  return o;
}
var he = (...o) => Zt(_.getTheme(), ...o), Zt = (o = {}, e, r, t) => {
  if (e) {
    let { variable: n, options: i } = _.defaults || {}, { prefix: l, transform: s } = o?.options || i || {}, a = me(e, Le) ? e : `{${e}}`;
    return t === "value" || Be(t) && s === "strict" ? _.getTokenValue(e) : Cr(a, void 0, l, [n.excludedKeyRegex], r);
  }
  return "";
};
function Ye(o, ...e) {
  if (o instanceof Array) {
    let r = o.reduce((t, n, i) => {
      var l;
      return t + n + ((l = G(e[i], { dt: he })) != null ? l : "");
    }, "");
    return Sr(r, he);
  }
  return G(o, { dt: he });
}
function Qt(o, e = {}) {
  let r = _.defaults.variable, { prefix: t = r.prefix, selector: n = r.selector, excludedKeyRegex: i = r.excludedKeyRegex } = e, l = [], s = [], a = [{ node: o, path: t }];
  for (; a.length; ) {
    let { node: c, path: u } = a.pop();
    for (let f in c) {
      let p = c[f], g = Gt(p), b = me(f, i) ? ho(u) : ho(u, ur(f));
      if (re(g)) a.push({ node: g, path: b });
      else {
        let h = $r(b), v = Cr(g, b, t, [i]);
        qt(s, h, v);
        let k = b;
        t && k.startsWith(t + "-") && (k = k.slice(t.length + 1)), l.push(k.replace(/-/g, "."));
      }
    }
  }
  let d = s.join("");
  return { value: s, tokens: l, declarations: d, css: we(n, d) };
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
  let e = Object.keys(this.rules).filter((r) => r !== "custom").map((r) => this.rules[r]);
  return [o].flat().map((r) => {
    var t;
    return (t = e.map((n) => n.resolve(r)).find((n) => n.matched)) != null ? t : this.rules.custom.resolve(r);
  });
} }, _toVariables(o, e) {
  return Qt(o, { prefix: e?.prefix });
}, getCommon({ name: o = "", theme: e = {}, params: r, set: t, defaults: n }) {
  var i, l, s, a, d, c, u;
  let { preset: f, options: p } = e, g, b, h, v, k, C, m;
  if (B(f) && p.transform !== "strict") {
    let { primitive: y, semantic: R, extend: L } = f, A = R || {}, { colorScheme: N } = A, F = te(A, ["colorScheme"]), T = L || {}, { colorScheme: j } = T, K = te(T, ["colorScheme"]), U = N || {}, { dark: M } = U, W = te(U, ["dark"]), Y = j || {}, { dark: ne } = Y, Q = te(Y, ["dark"]), X = B(y) ? this._toVariables({ primitive: y }, p) : {}, J = B(F) ? this._toVariables({ semantic: F }, p) : {}, le = B(W) ? this._toVariables({ light: W }, p) : {}, Ue = B(M) ? this._toVariables({ dark: M }, p) : {}, ve = B(K) ? this._toVariables({ semantic: K }, p) : {}, Io = B(Q) ? this._toVariables({ light: Q }, p) : {}, _o = B(ne) ? this._toVariables({ dark: ne }, p) : {}, [Dr, Er] = [(i = X.declarations) != null ? i : "", X.tokens], [Nr, Vr] = [(l = J.declarations) != null ? l : "", J.tokens || []], [Fr, Wr] = [(s = le.declarations) != null ? s : "", le.tokens || []], [Hr, Kr] = [(a = Ue.declarations) != null ? a : "", Ue.tokens || []], [Ur, Gr] = [(d = ve.declarations) != null ? d : "", ve.tokens || []], [Yr, Xr] = [(c = Io.declarations) != null ? c : "", Io.tokens || []], [qr, Zr] = [(u = _o.declarations) != null ? u : "", _o.tokens || []];
    g = this.transformCSS(o, Dr, "light", "variable", p, t, n), b = Er;
    let Qr = this.transformCSS(o, `${Nr}${Fr}`, "light", "variable", p, t, n), Jr = this.transformCSS(o, `${Hr}`, "dark", "variable", p, t, n);
    h = `${Qr}${Jr}`, v = [.../* @__PURE__ */ new Set([...Vr, ...Wr, ...Kr])];
    let et = this.transformCSS(o, `${Ur}${Yr}color-scheme:light`, "light", "variable", p, t, n), ot = this.transformCSS(o, `${qr}color-scheme:dark`, "dark", "variable", p, t, n);
    k = `${et}${ot}`, C = [.../* @__PURE__ */ new Set([...Gr, ...Xr, ...Zr])], m = G(f.css, { dt: he });
  }
  return { primitive: { css: g, tokens: b }, semantic: { css: h, tokens: v }, global: { css: k, tokens: C }, style: m };
}, getPreset({ name: o = "", preset: e = {}, options: r, params: t, set: n, defaults: i, selector: l }) {
  var s, a, d;
  let c, u, f;
  if (B(e) && r.transform !== "strict") {
    let p = o.replace("-directive", ""), g = e, { colorScheme: b, extend: h, css: v } = g, k = te(g, ["colorScheme", "extend", "css"]), C = h || {}, { colorScheme: m } = C, y = te(C, ["colorScheme"]), R = b || {}, { dark: L } = R, A = te(R, ["dark"]), N = m || {}, { dark: F } = N, T = te(N, ["dark"]), j = B(k) ? this._toVariables({ [p]: Z(Z({}, k), y) }, r) : {}, K = B(A) ? this._toVariables({ [p]: Z(Z({}, A), T) }, r) : {}, U = B(L) ? this._toVariables({ [p]: Z(Z({}, L), F) }, r) : {}, [M, W] = [(s = j.declarations) != null ? s : "", j.tokens || []], [Y, ne] = [(a = K.declarations) != null ? a : "", K.tokens || []], [Q, X] = [(d = U.declarations) != null ? d : "", U.tokens || []], J = this.transformCSS(p, `${M}${Y}`, "light", "variable", r, n, i, l), le = this.transformCSS(p, Q, "dark", "variable", r, n, i, l);
    c = `${J}${le}`, u = [.../* @__PURE__ */ new Set([...W, ...ne, ...X])], f = G(v, { dt: he });
  }
  return { css: c, tokens: u, style: f };
}, getPresetC({ name: o = "", theme: e = {}, params: r, set: t, defaults: n }) {
  var i;
  let { preset: l, options: s } = e, a = (i = l?.components) == null ? void 0 : i[o];
  return this.getPreset({ name: o, preset: a, options: s, params: r, set: t, defaults: n });
}, getPresetD({ name: o = "", theme: e = {}, params: r, set: t, defaults: n }) {
  var i, l;
  let s = o.replace("-directive", ""), { preset: a, options: d } = e, c = ((i = a?.components) == null ? void 0 : i[s]) || ((l = a?.directives) == null ? void 0 : l[s]);
  return this.getPreset({ name: s, preset: c, options: d, params: r, set: t, defaults: n });
}, applyDarkColorScheme(o) {
  return !(o.darkModeSelector === "none" || o.darkModeSelector === !1);
}, getColorSchemeOption(o, e) {
  var r;
  return this.applyDarkColorScheme(o) ? this.regex.resolve(o.darkModeSelector === !0 ? e.options.darkModeSelector : (r = o.darkModeSelector) != null ? r : e.options.darkModeSelector) : [];
}, getLayerOrder(o, e = {}, r, t) {
  let { cssLayer: n } = e;
  return n ? `@layer ${G(n.order || n.name || "primeui", r)}` : "";
}, getCommonStyleSheet({ name: o = "", theme: e = {}, params: r, props: t = {}, set: n, defaults: i }) {
  let l = this.getCommon({ name: o, theme: e, params: r, set: n, defaults: i }), s = Object.entries(t).reduce((a, [d, c]) => a.push(`${d}="${c}"`) && a, []).join(" ");
  return Object.entries(l || {}).reduce((a, [d, c]) => {
    if (re(c) && Object.hasOwn(c, "css")) {
      let u = Pe(c.css), f = `${d}-variables`;
      a.push(`<style type="text/css" data-primevue-style-id="${f}" ${s}>${u}</style>`);
    }
    return a;
  }, []).join("");
}, getStyleSheet({ name: o = "", theme: e = {}, params: r, props: t = {}, set: n, defaults: i }) {
  var l;
  let s = { name: o, theme: e, params: r, set: n, defaults: i }, a = (l = o.includes("-directive") ? this.getPresetD(s) : this.getPresetC(s)) == null ? void 0 : l.css, d = Object.entries(t).reduce((c, [u, f]) => c.push(`${u}="${f}"`) && c, []).join(" ");
  return a ? `<style type="text/css" data-primevue-style-id="${o}-variables" ${d}>${Pe(a)}</style>` : "";
}, createTokens(o = {}, e, r = "", t = "", n = {}) {
  let i = function(s, a = {}, d = []) {
    if (d.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: s, path: this.path, paths: a, value: void 0 };
    d.push(this.path), a.name = this.path, a.binding || (a.binding = {});
    let c = this.value;
    if (typeof this.value == "string" && Le.test(this.value)) {
      let u = this.value.trim().replace(Le, (f) => {
        var p;
        let g = f.slice(1, -1), b = this.tokens[g];
        if (!b) return console.warn(`Token not found for path: ${g}`), "__UNRESOLVED__";
        let h = b.computed(s, a, d);
        return Array.isArray(h) && h.length === 2 ? `light-dark(${h[0].value},${h[1].value})` : (p = h?.value) != null ? p : "__UNRESOLVED__";
      });
      c = kr.test(u.replace(wr, "0")) ? `calc(${u})` : u;
    }
    return Be(a.binding) && delete a.binding, d.pop(), { colorScheme: s, path: this.path, paths: a, value: c.includes("__UNRESOLVED__") ? void 0 : c };
  }, l = (s, a, d) => {
    Object.entries(s).forEach(([c, u]) => {
      let f = me(c, e.variable.excludedKeyRegex) ? a : a ? `${a}.${Ao(c)}` : Ao(c), p = d ? `${d}.${c}` : c;
      re(u) ? l(u, f, p) : (n[f] || (n[f] = { paths: [], computed: (g, b = {}, h = []) => {
        if (n[f].paths.length === 1) return n[f].paths[0].computed(n[f].paths[0].scheme, b.binding, h);
        if (g && g !== "none") for (let v = 0; v < n[f].paths.length; v++) {
          let k = n[f].paths[v];
          if (k.scheme === g) return k.computed(g, b.binding, h);
        }
        return n[f].paths.map((v) => v.computed(v.scheme, b[v.scheme], h));
      } }), n[f].paths.push({ path: p, value: u, scheme: p.includes("colorScheme.light") ? "light" : p.includes("colorScheme.dark") ? "dark" : "none", computed: i, tokens: n }));
    });
  };
  return l(o, r, t), n;
}, getTokenValue(o, e, r) {
  var t;
  let n = ((s) => s.split(".").filter((a) => !me(a.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(e), i = e.includes("colorScheme.light") ? "light" : e.includes("colorScheme.dark") ? "dark" : void 0, l = [(t = o[n]) == null ? void 0 : t.computed(i)].flat().filter((s) => s);
  return l.length === 1 ? l[0].value : l.reduce((s = {}, a) => {
    let d = a, { colorScheme: c } = d, u = te(d, ["colorScheme"]);
    return s[c] = u, s;
  }, void 0);
}, getSelectorRule(o, e, r, t) {
  return r === "class" || r === "attr" ? we(B(e) ? `${o}${e},${o} ${e}` : o, t) : we(o, we(e ?? ":root,:host", t));
}, transformCSS(o, e, r, t, n = {}, i, l, s) {
  if (B(e)) {
    let { cssLayer: a } = n;
    if (t !== "style") {
      let d = this.getColorSchemeOption(n, l);
      e = r === "dark" ? d.reduce((c, { type: u, selector: f }) => (B(f) && (c += f.includes("[CSS]") ? f.replace("[CSS]", e) : this.getSelectorRule(f, s, u, e)), c), "") : we(s ?? ":root,:host", e);
    }
    if (a) {
      let d = { name: "primeui" };
      re(a) && (d.name = G(a.name, { name: o, type: t })), B(d.name) && (e = we(`@layer ${d.name}`, e), i?.layerNames(d.name));
    }
    return e;
  }
  return "";
} }, _ = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(o = {}) {
  let { theme: e } = o;
  e && (this._theme = co(Z({}, e), { options: Z(Z({}, this.defaults.options), e.options) }), this._tokens = q.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
  this.update({ theme: o }), E.emit("theme:change", o);
}, getPreset() {
  return this.preset;
}, setPreset(o) {
  this._theme = co(Z({}, this.theme), { preset: o }), this._tokens = q.createTokens(o, this.defaults), this.clearLoadedStyleNames(), E.emit("preset:change", o), E.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(o) {
  this._theme = co(Z({}, this.theme), { options: o }), this.clearLoadedStyleNames(), E.emit("options:change", o), E.emit("theme:change", this.theme);
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
}, getCommon(o = "", e) {
  return q.getCommon({ name: o, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(o = "", e) {
  let r = { name: o, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return q.getPresetC(r);
}, getDirective(o = "", e) {
  let r = { name: o, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return q.getPresetD(r);
}, getCustomPreset(o = "", e, r, t) {
  let n = { name: o, preset: e, options: this.options, selector: r, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return q.getPreset(n);
}, getLayerOrderCSS(o = "") {
  return q.getLayerOrder(o, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(o = "", e, r = "style", t) {
  return q.transformCSS(o, e, t, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(o = "", e, r = {}) {
  return q.getCommonStyleSheet({ name: o, theme: this.theme, params: e, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(o, e, r = {}) {
  return q.getStyleSheet({ name: o, theme: this.theme, params: e, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(o) {
  this._loadingStyles.add(o);
}, onStyleUpdated(o) {
  this._loadingStyles.add(o);
}, onStyleLoaded(o, { name: e }) {
  this._loadingStyles.size && (this._loadingStyles.delete(e), E.emit(`theme:${e}:load`, o), !this._loadingStyles.size && E.emit("theme:load"));
} }, V = {
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
}, Jt = `
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
function ze(o) {
  "@babel/helpers - typeof";
  return ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ze(o);
}
function jo(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Mo(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? jo(Object(r), !0).forEach(function(t) {
      en(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : jo(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function en(o, e, r) {
  return (e = on(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function on(o) {
  var e = rn(o, "string");
  return ze(e) == "symbol" ? e : e + "";
}
function rn(o, e) {
  if (ze(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (ze(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
function tn(o) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  Ro() && Ro().components ? tt(o) : e ? o() : nt(o);
}
var nn = 0;
function an(o) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = pe(!1), t = pe(o), n = pe(null), i = vr() ? window.document : void 0, l = e.document, s = l === void 0 ? i : l, a = e.immediate, d = a === void 0 ? !0 : a, c = e.manual, u = c === void 0 ? !1 : c, f = e.name, p = f === void 0 ? "style_".concat(++nn) : f, g = e.id, b = g === void 0 ? void 0 : g, h = e.media, v = h === void 0 ? void 0 : h, k = e.nonce, C = k === void 0 ? void 0 : k, m = e.first, y = m === void 0 ? !1 : m, R = e.onMounted, L = R === void 0 ? void 0 : R, A = e.onUpdated, N = A === void 0 ? void 0 : A, F = e.onLoad, T = F === void 0 ? void 0 : F, j = e.props, K = j === void 0 ? {} : j, U = function() {
  }, M = function(ne) {
    var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s) {
      var X = Mo(Mo({}, K), Q), J = X.name || p, le = X.id || b, Ue = X.nonce || C;
      n.value = s.querySelector('style[data-primevue-style-id="'.concat(J, '"]')) || s.getElementById(le) || s.createElement("style"), n.value.isConnected || (t.value = ne || o, Je(n.value, {
        type: "text/css",
        id: le,
        media: v,
        nonce: Ue
      }), y ? s.head.prepend(n.value) : s.head.appendChild(n.value), Nt(n.value, "data-primevue-style-id", J), Je(n.value, X), n.value.onload = function(ve) {
        return T?.(ve, {
          name: J
        });
      }, L?.(J)), !r.value && (U = $e(t, function(ve) {
        n.value.textContent = ve, N?.(J);
      }, {
        immediate: !0
      }), r.value = !0);
    }
  }, W = function() {
    !s || !r.value || (U(), Lt(n.value) && s.head.removeChild(n.value), r.value = !1, n.value = null);
  };
  return d && !u && tn(M), {
    id: b,
    name: p,
    el: n,
    css: t,
    unload: W,
    load: M,
    isLoaded: rt(r)
  };
}
function Ae(o) {
  "@babel/helpers - typeof";
  return Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ae(o);
}
var Do, Eo, No, Vo;
function Fo(o, e) {
  return cn(o) || dn(o, e) || sn(o, e) || ln();
}
function ln() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sn(o, e) {
  if (o) {
    if (typeof o == "string") return Wo(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Wo(o, e) : void 0;
  }
}
function Wo(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++) t[r] = o[r];
  return t;
}
function dn(o, e) {
  var r = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (r != null) {
    var t, n, i, l, s = [], a = !0, d = !1;
    try {
      if (i = (r = r.call(o)).next, e !== 0) for (; !(a = (t = i.call(r)).done) && (s.push(t.value), s.length !== e); a = !0) ;
    } catch (c) {
      d = !0, n = c;
    } finally {
      try {
        if (!a && r.return != null && (l = r.return(), Object(l) !== l)) return;
      } finally {
        if (d) throw n;
      }
    }
    return s;
  }
}
function cn(o) {
  if (Array.isArray(o)) return o;
}
function Ho(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function uo(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ho(Object(r), !0).forEach(function(t) {
      un(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : Ho(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function un(o, e, r) {
  return (e = fn(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function fn(o) {
  var e = pn(o, "string");
  return Ae(e) == "symbol" ? e : e + "";
}
function pn(o, e) {
  if (Ae(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Ae(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
function Xe(o, e) {
  return e || (e = o.slice(0)), Object.freeze(Object.defineProperties(o, { raw: { value: Object.freeze(e) } }));
}
var gn = function(e) {
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
}, mn = {}, hn = {}, P = {
  name: "base",
  css: gn,
  style: Jt,
  classes: mn,
  inlineStyles: hn,
  load: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, n = t(Ye(Do || (Do = Xe(["", ""])), e));
    return B(n) ? an(Pe(n), uo({
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
      return _.transformCSS(r.name || e.name, "".concat(n).concat(Ye(Eo || (Eo = Xe(["", ""])), t)));
    });
  },
  getCommonTheme: function(e) {
    return _.getCommon(this.name, e);
  },
  getComponentTheme: function(e) {
    return _.getComponent(this.name, e);
  },
  getDirectiveTheme: function(e) {
    return _.getDirective(this.name, e);
  },
  getPresetTheme: function(e, r, t) {
    return _.getCustomPreset(this.name, e, r, t);
  },
  getLayerOrderThemeCSS: function() {
    return _.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var t = G(this.css, {
        dt: he
      }) || "", n = Pe(Ye(No || (No = Xe(["", "", ""])), t, e)), i = Object.entries(r).reduce(function(l, s) {
        var a = Fo(s, 2), d = a[0], c = a[1];
        return l.push("".concat(d, '="').concat(c, '"')) && l;
      }, []).join(" ");
      return B(n) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(i, ">").concat(n, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return _.getCommonStyleSheet(this.name, e, r);
  },
  getThemeStyleSheet: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [_.getStyleSheet(this.name, e, r)];
    if (this.style) {
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = Ye(Vo || (Vo = Xe(["", ""])), G(this.style, {
        dt: he
      })), l = Pe(_.transformCSS(n, i)), s = Object.entries(r).reduce(function(a, d) {
        var c = Fo(d, 2), u = c[0], f = c[1];
        return a.push("".concat(u, '="').concat(f, '"')) && a;
      }, []).join(" ");
      B(l) && t.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(s, ">").concat(l, "</style>"));
    }
    return t.join("");
  },
  extend: function(e) {
    return uo(uo({}, this), {}, {
      css: void 0,
      style: void 0
    }, e);
  }
}, ae = Oo();
function je(o) {
  "@babel/helpers - typeof";
  return je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, je(o);
}
function Ko(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function qe(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ko(Object(r), !0).forEach(function(t) {
      vn(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : Ko(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function vn(o, e, r) {
  return (e = bn(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function bn(o) {
  var e = yn(o, "string");
  return je(e) == "symbol" ? e : e + "";
}
function yn(o, e) {
  if (je(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (je(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var kn = {
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
    text: [V.STARTS_WITH, V.CONTAINS, V.NOT_CONTAINS, V.ENDS_WITH, V.EQUALS, V.NOT_EQUALS],
    numeric: [V.EQUALS, V.NOT_EQUALS, V.LESS_THAN, V.LESS_THAN_OR_EQUAL_TO, V.GREATER_THAN, V.GREATER_THAN_OR_EQUAL_TO],
    date: [V.DATE_IS, V.DATE_IS_NOT, V.DATE_BEFORE, V.DATE_AFTER]
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
}, wn = /* @__PURE__ */ Symbol();
function $n(o, e) {
  var r = {
    config: it(e)
  };
  return o.config.globalProperties.$primevue = r, o.provide(wn, r), Cn(), Sn(o, r), r;
}
var Ce = [];
function Cn() {
  E.clear(), Ce.forEach(function(o) {
    return o?.();
  }), Ce = [];
}
function Sn(o, e) {
  var r = pe(!1), t = function() {
    var d;
    if (((d = e.config) === null || d === void 0 ? void 0 : d.theme) !== "none" && !_.isStyleNameLoaded("common")) {
      var c, u, f = ((c = P.getCommonTheme) === null || c === void 0 ? void 0 : c.call(P)) || {}, p = f.primitive, g = f.semantic, b = f.global, h = f.style, v = {
        nonce: (u = e.config) === null || u === void 0 || (u = u.csp) === null || u === void 0 ? void 0 : u.nonce
      };
      P.load(p?.css, qe({
        name: "primitive-variables"
      }, v)), P.load(g?.css, qe({
        name: "semantic-variables"
      }, v)), P.load(b?.css, qe({
        name: "global-variables"
      }, v)), P.loadStyle(qe({
        name: "global-style"
      }, v), h), _.setLoadedStyleName("common");
    }
  };
  E.on("theme:change", function(a) {
    r.value || (o.config.globalProperties.$primevue.config.theme = a, r.value = !0);
  });
  var n = $e(e.config, function(a, d) {
    ae.emit("config:change", {
      newValue: a,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = $e(function() {
    return e.config.ripple;
  }, function(a, d) {
    ae.emit("config:ripple:change", {
      newValue: a,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  }), l = $e(function() {
    return e.config.theme;
  }, function(a, d) {
    r.value || _.setTheme(a), e.config.unstyled || t(), r.value = !1, ae.emit("config:theme:change", {
      newValue: a,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !1
  }), s = $e(function() {
    return e.config.unstyled;
  }, function(a, d) {
    !a && e.config.theme && t(), ae.emit("config:unstyled:change", {
      newValue: a,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  });
  Ce.push(n), Ce.push(i), Ce.push(l), Ce.push(s);
}
var xn = {
  install: function(e, r) {
    var t = Ct(kn, r);
    $n(e, t);
  }
}, On = { transitionDuration: "{transition.duration}" }, Bn = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, In = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, _n = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, Rn = { root: On, panel: Bn, header: In, content: _n }, Tn = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Pn = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Ln = { padding: "{list.padding}", gap: "{list.gap}" }, zn = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, An = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, jn = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Mn = { borderRadius: "{border.radius.sm}" }, Dn = { padding: "{list.option.padding}" }, En = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, Nn = { root: Tn, overlay: Pn, list: Ln, option: zn, optionGroup: An, dropdown: jn, chip: Mn, emptyMessage: Dn, colorScheme: En }, Vn = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Fn = { size: "1rem" }, Wn = { borderColor: "{content.background}", offset: "-0.75rem" }, Hn = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, Kn = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, Un = { root: Vn, icon: Fn, group: Wn, lg: Hn, xl: Kn }, Gn = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, Yn = { size: "0.5rem" }, Xn = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, qn = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, Zn = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, Qn = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Jn = { root: Gn, dot: Yn, sm: Xn, lg: qn, xl: Zn, colorScheme: Qn }, ei = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, oi = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, ri = { primitive: ei, semantic: oi }, ti = { borderRadius: "{content.border.radius}" }, ni = { root: ti }, ii = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, ai = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, li = { color: "{navigation.item.icon.color}" }, si = { root: ii, item: ai, separator: li }, di = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, ci = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, ui = { root: di, colorScheme: ci }, fi = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, pi = { padding: "1.25rem", gap: "0.5rem" }, gi = { gap: "0.5rem" }, mi = { fontSize: "1.25rem", fontWeight: "500" }, hi = { color: "{text.muted.color}" }, vi = { root: fi, body: pi, caption: gi, title: mi, subtitle: hi }, bi = { transitionDuration: "{transition.duration}" }, yi = { gap: "0.25rem" }, ki = { padding: "1rem", gap: "0.5rem" }, wi = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, $i = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, Ci = { root: bi, content: yi, indicatorList: ki, indicator: wi, colorScheme: $i }, Si = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, xi = { width: "2.5rem", color: "{form.field.icon.color}" }, Oi = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Bi = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, Ii = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, _i = { color: "{form.field.icon.color}" }, Ri = { root: Si, dropdown: xi, overlay: Oi, list: Bi, option: Ii, clearIcon: _i }, Ti = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, Pi = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, Li = { root: Ti, icon: Pi }, zi = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, Ai = { width: "2rem", height: "2rem" }, ji = { size: "1rem" }, Mi = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Di = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, Ei = { root: zi, image: Ai, icon: ji, removeIcon: Mi, colorScheme: Di }, Ni = { transitionDuration: "{transition.duration}" }, Vi = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Fi = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, Wi = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, Hi = { root: Ni, preview: Vi, panel: Fi, colorScheme: Wi }, Ki = { size: "2rem", color: "{overlay.modal.color}" }, Ui = { gap: "1rem" }, Gi = { icon: Ki, content: Ui }, Yi = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Xi = { padding: "{overlay.popover.padding}", gap: "1rem" }, qi = { size: "1.5rem", color: "{overlay.popover.color}" }, Zi = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, Qi = { root: Yi, content: Xi, icon: qi, footer: Zi }, Ji = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, ea = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, oa = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, ra = { mobileIndent: "1rem" }, ta = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, na = { borderColor: "{content.border.color}" }, ia = { root: Ji, list: ea, item: oa, submenu: ra, submenuIcon: ta, separator: na }, aa = `
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
`, la = { transitionDuration: "{transition.duration}" }, sa = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, da = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ca = { fontWeight: "600" }, ua = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, fa = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, pa = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ga = { fontWeight: "600" }, ma = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ha = { color: "{primary.color}" }, va = { width: "0.5rem" }, ba = { width: "1px", color: "{primary.color}" }, ya = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, ka = { size: "2rem" }, wa = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, $a = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, Ca = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Sa = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, xa = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Oa = `
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Ba = { root: la, header: sa, headerCell: da, columnTitle: ca, row: ua, bodyCell: fa, footerCell: pa, columnFooter: ga, footer: ma, dropPoint: ha, columnResizer: va, resizeIndicator: ba, sortIcon: ya, loadingIcon: ka, rowToggleButton: wa, filter: $a, paginatorTop: Ca, paginatorBottom: Sa, colorScheme: xa, css: Oa }, Ia = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, _a = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, Ra = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, Ta = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, Pa = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, La = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, za = { root: Ia, header: _a, content: Ra, footer: Ta, paginatorTop: Pa, paginatorBottom: La }, Aa = { transitionDuration: "{transition.duration}" }, ja = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, Ma = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, Da = { gap: "0.5rem", fontWeight: "500" }, Ea = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Na = { color: "{form.field.icon.color}" }, Va = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, Fa = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, Wa = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, Ha = { margin: "0.5rem 0 0 0" }, Ka = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, Ua = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ga = { margin: "0.5rem 0 0 0" }, Ya = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, Xa = { margin: "0.5rem 0 0 0" }, qa = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, Za = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, Qa = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, Ja = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, el = { root: Aa, panel: ja, header: Ma, title: Da, dropdown: Ea, inputIcon: Na, selectMonth: Va, selectYear: Fa, group: Wa, dayView: Ha, weekDay: Ka, date: Ua, monthView: Ga, month: Ya, yearView: Xa, year: qa, buttonbar: Za, timePicker: Qa, colorScheme: Ja }, ol = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, rl = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, tl = { fontSize: "1.25rem", fontWeight: "600" }, nl = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, il = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, al = { root: ol, header: rl, title: tl, content: nl, footer: il }, ll = { borderColor: "{content.border.color}" }, sl = { background: "{content.background}", color: "{text.color}" }, dl = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, cl = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, ul = { root: ll, content: sl, horizontal: dl, vertical: cl }, fl = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, pl = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, gl = { root: fl, item: pl }, ml = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, hl = { padding: "{overlay.modal.padding}" }, vl = { fontSize: "1.5rem", fontWeight: "600" }, bl = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, yl = { padding: "{overlay.modal.padding}" }, kl = { root: ml, header: hl, title: vl, content: bl, footer: yl }, wl = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, $l = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Cl = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, Sl = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, xl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Ol = { toolbar: wl, toolbarItem: $l, overlay: Cl, overlayOption: Sl, content: xl }, Bl = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, Il = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, _l = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, Rl = { padding: "0" }, Tl = { root: Bl, legend: Il, toggleIcon: _l, content: Rl }, Pl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, Ll = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, zl = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, Al = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, jl = { gap: "0.5rem" }, Ml = { height: "0.25rem" }, Dl = { gap: "0.5rem" }, El = { root: Pl, header: Ll, content: zl, file: Al, fileList: jl, progressbar: Ml, basic: Dl }, Nl = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, Vl = { active: { top: "-1.25rem" } }, Fl = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, Wl = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, Hl = { root: Nl, over: Vl, in: Fl, on: Wl }, Kl = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, Ul = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Gl = { size: "1.5rem" }, Yl = { background: "{content.background}", padding: "1rem 0.25rem" }, Xl = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ql = { size: "1rem" }, Zl = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, Ql = { gap: "0.5rem", padding: "1rem" }, Jl = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, es = { background: "rgba(0, 0, 0, 0.5)" }, os = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, rs = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ts = { size: "1.5rem" }, ns = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, is = { root: Kl, navButton: Ul, navIcon: Gl, thumbnailsContent: Yl, thumbnailNavButton: Xl, thumbnailNavButtonIcon: ql, caption: Zl, indicatorList: Ql, indicatorButton: Jl, insetIndicatorList: es, insetIndicatorButton: os, closeButton: rs, closeButtonIcon: ts, colorScheme: ns }, as = { color: "{form.field.icon.color}" }, ls = { icon: as }, ss = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, ds = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, cs = { root: ss, input: ds }, us = { transitionDuration: "{transition.duration}" }, fs = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, ps = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, gs = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ms = { root: us, preview: fs, toolbar: ps, action: gs }, hs = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, vs = { handle: hs }, bs = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, ys = { fontWeight: "500" }, ks = { size: "1rem" }, ws = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, $s = { root: bs, text: ys, icon: ks, colorScheme: ws }, Cs = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, Ss = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, xs = { root: Cs, display: Ss }, Os = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, Bs = { borderRadius: "{border.radius.sm}" }, Is = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, _s = { root: Os, chip: Bs, colorScheme: Is }, Rs = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, Ts = { addon: Rs }, Ps = { transitionDuration: "{transition.duration}" }, Ls = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, zs = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, As = { root: Ps, button: Ls, colorScheme: zs }, js = { gap: "0.5rem" }, Ms = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, Ds = { root: js, input: Ms }, Es = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Ns = { root: Es }, Vs = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Fs = { background: "{primary.color}" }, Ws = { background: "{content.border.color}" }, Hs = { color: "{text.muted.color}" }, Ks = { root: Vs, value: Fs, range: Ws, text: Hs }, Us = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, Gs = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Ys = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Xs = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, qs = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, Zs = { padding: "{list.option.padding}" }, Qs = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, Js = { root: Us, list: Gs, option: Ys, optionGroup: Xs, checkmark: qs, emptyMessage: Zs, colorScheme: Qs }, ed = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, od = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, rd = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, td = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, nd = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, id = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, ad = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, ld = { borderColor: "{content.border.color}" }, sd = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, dd = { root: ed, baseItem: od, item: rd, overlay: td, submenu: nd, submenuLabel: id, submenuIcon: ad, separator: ld, mobileButton: sd }, cd = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, ud = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, fd = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, pd = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, gd = { borderColor: "{content.border.color}" }, md = { root: cd, list: ud, item: fd, submenuLabel: pd, separator: gd }, hd = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, vd = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, bd = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, yd = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, kd = { borderColor: "{content.border.color}" }, wd = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, $d = { root: hd, baseItem: vd, item: bd, submenu: yd, separator: kd, mobileButton: wd }, Cd = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Sd = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, xd = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, Od = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, Bd = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Id = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, _d = { root: { borderWidth: "1px" } }, Rd = { content: { padding: "0" } }, Td = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, Pd = { root: Cd, content: Sd, text: xd, icon: Od, closeButton: Bd, closeIcon: Id, outlined: _d, simple: Rd, colorScheme: Td }, Ld = { borderRadius: "{content.border.radius}", gap: "1rem" }, zd = { background: "{content.border.color}", size: "0.5rem" }, Ad = { gap: "0.5rem" }, jd = { size: "0.5rem" }, Md = { size: "1rem" }, Dd = { verticalGap: "0.5rem", horizontalGap: "1rem" }, Ed = { root: Ld, meters: zd, label: Ad, labelMarker: jd, labelIcon: Md, labelList: Dd }, Nd = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Vd = { width: "2.5rem", color: "{form.field.icon.color}" }, Fd = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Wd = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Hd = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, Kd = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Ud = { color: "{form.field.icon.color}" }, Gd = { borderRadius: "{border.radius.sm}" }, Yd = { padding: "{list.option.padding}" }, Xd = { root: Nd, dropdown: Vd, overlay: Fd, list: Wd, option: Hd, optionGroup: Kd, chip: Gd, clearIcon: Ud, emptyMessage: Yd }, qd = { gap: "1.125rem" }, Zd = { gap: "0.5rem" }, Qd = { root: qd, controls: Zd }, Jd = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, ec = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, oc = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, rc = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, tc = { root: Jd, node: ec, nodeToggleButton: oc, connector: rc }, nc = { outline: { width: "2px", color: "{content.background}" } }, ic = { root: nc }, ac = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, lc = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, sc = { color: "{text.muted.color}" }, dc = { maxWidth: "2.5rem" }, cc = { root: ac, navButton: lc, currentPageReport: sc, jumpToPageInput: dc }, uc = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, fc = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, pc = { padding: "0.375rem 1.125rem" }, gc = { fontWeight: "600" }, mc = { padding: "0 1.125rem 1.125rem 1.125rem" }, hc = { padding: "0 1.125rem 1.125rem 1.125rem" }, vc = { root: uc, header: fc, toggleableHeader: pc, title: gc, content: mc, footer: hc }, bc = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, yc = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, kc = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, wc = { indent: "1rem" }, $c = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, Cc = { root: bc, panel: yc, item: kc, submenu: wc, submenuIcon: $c }, Sc = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, xc = { color: "{form.field.icon.color}" }, Oc = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, Bc = { gap: "0.5rem" }, Ic = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, _c = { meter: Sc, icon: xc, overlay: Oc, content: Bc, colorScheme: Ic }, Rc = { gap: "1.125rem" }, Tc = { gap: "0.5rem" }, Pc = { root: Rc, controls: Tc }, Lc = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, zc = { padding: "{overlay.popover.padding}" }, Ac = { root: Lc, content: zc }, jc = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, Mc = { background: "{primary.color}" }, Dc = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, Ec = { root: jc, value: Mc, label: Dc }, Nc = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, Vc = { colorScheme: Nc }, Fc = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, Wc = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, Hc = { root: Fc, icon: Wc }, Kc = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Uc = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, Gc = { root: Kc, icon: Uc }, Yc = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, Xc = { colorScheme: Yc }, qc = { transitionDuration: "{transition.duration}" }, Zc = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Qc = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, Jc = { root: qc, bar: Zc, colorScheme: Qc }, eu = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, ou = { width: "2.5rem", color: "{form.field.icon.color}" }, ru = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, tu = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, nu = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, iu = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, au = { color: "{form.field.icon.color}" }, lu = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, su = { padding: "{list.option.padding}" }, du = { root: eu, dropdown: ou, overlay: ru, list: tu, option: nu, optionGroup: iu, clearIcon: au, checkmark: lu, emptyMessage: su }, cu = { borderRadius: "{form.field.border.radius}" }, uu = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, fu = { root: cu, colorScheme: uu }, pu = { borderRadius: "{content.border.radius}" }, gu = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, mu = { root: pu, colorScheme: gu }, hu = { transitionDuration: "{transition.duration}" }, vu = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, bu = { background: "{primary.color}" }, yu = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ku = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, wu = { root: hu, track: vu, range: bu, handle: yu, colorScheme: ku }, $u = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, Cu = { root: $u }, Su = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, xu = { root: Su }, Ou = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Bu = { background: "{content.border.color}" }, Iu = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, _u = { root: Ou, gutter: Bu, handle: Iu }, Ru = { transitionDuration: "{transition.duration}" }, Tu = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, Pu = { padding: "0.5rem", gap: "1rem" }, Lu = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, zu = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Au = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, ju = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, Mu = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, Du = { root: Ru, separator: Tu, step: Pu, stepHeader: Lu, stepTitle: zu, stepNumber: Au, steppanels: ju, steppanel: Mu }, Eu = { transitionDuration: "{transition.duration}" }, Nu = { background: "{content.border.color}" }, Vu = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Fu = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Wu = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, Hu = { root: Eu, separator: Nu, itemLink: Vu, itemLabel: Fu, itemNumber: Wu }, Ku = { transitionDuration: "{transition.duration}" }, Uu = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Gu = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Yu = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Xu = { height: "1px", bottom: "-1px", background: "{primary.color}" }, qu = { root: Ku, tablist: Uu, item: Gu, itemIcon: Yu, activeBar: Xu }, Zu = { transitionDuration: "{transition.duration}" }, Qu = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Ju = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, ef = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, of = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, rf = { height: "1px", bottom: "-1px", background: "{primary.color}" }, tf = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, nf = { root: Zu, tablist: Qu, tab: Ju, tabpanel: ef, navButton: of, activeBar: rf, colorScheme: tf }, af = { transitionDuration: "{transition.duration}" }, lf = { background: "{content.background}", borderColor: "{content.border.color}" }, sf = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, df = { background: "{content.background}", color: "{content.color}" }, cf = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, uf = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, ff = { root: af, tabList: lf, tab: sf, tabPanel: df, navButton: cf, colorScheme: uf }, pf = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, gf = { size: "0.75rem" }, mf = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, hf = { root: pf, icon: gf, colorScheme: mf }, vf = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, bf = { gap: "0.25rem" }, yf = { margin: "2px 0" }, kf = { root: vf, prompt: bf, commandResponse: yf }, wf = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, $f = { root: wf }, Cf = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Sf = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, xf = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Of = { mobileIndent: "1rem" }, Bf = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, If = { borderColor: "{content.border.color}" }, _f = { root: Cf, list: Sf, item: xf, submenu: Of, submenuIcon: Bf, separator: If }, Rf = { minHeight: "5rem" }, Tf = { eventContent: { padding: "1rem 0" } }, Pf = { eventContent: { padding: "0 1rem" } }, Lf = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, zf = { color: "{content.border.color}", size: "2px" }, Af = { event: Rf, horizontal: Tf, vertical: Pf, eventMarker: Lf, eventConnector: zf }, jf = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Mf = { size: "1.125rem" }, Df = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, Ef = { gap: "0.5rem" }, Nf = { fontWeight: "500", fontSize: "1rem" }, Vf = { fontWeight: "500", fontSize: "0.875rem" }, Ff = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Wf = { size: "1rem" }, Hf = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, Kf = { root: jf, icon: Mf, content: Df, text: Ef, summary: Nf, detail: Vf, closeButton: Ff, closeIcon: Wf, colorScheme: Hf }, Uf = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, Gf = { disabledColor: "{form.field.disabled.color}" }, Yf = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, Xf = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, qf = { root: Uf, icon: Gf, content: Yf, colorScheme: Xf }, Zf = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, Qf = { borderRadius: "50%", size: "1rem" }, Jf = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, ep = { root: Zf, handle: Qf, colorScheme: Jf }, op = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, rp = { root: op }, tp = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, np = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, ip = { root: tp, colorScheme: np }, ap = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, lp = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, sp = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, dp = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, cp = { size: "2rem" }, up = { margin: "0 0 0.5rem 0" }, fp = `
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, pp = { root: ap, node: lp, nodeIcon: sp, nodeToggleButton: dp, loadingIcon: cp, filter: up, css: fp }, gp = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, mp = { width: "2.5rem", color: "{form.field.icon.color}" }, hp = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, vp = { padding: "{list.padding}" }, bp = { padding: "{list.option.padding}" }, yp = { borderRadius: "{border.radius.sm}" }, kp = { color: "{form.field.icon.color}" }, wp = { root: gp, dropdown: mp, overlay: hp, tree: vp, emptyMessage: bp, chip: yp, clearIcon: kp }, $p = { transitionDuration: "{transition.duration}" }, Cp = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, Sp = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, xp = { fontWeight: "600" }, Op = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Bp = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, Ip = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, _p = { fontWeight: "600" }, Rp = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, Tp = { width: "0.5rem" }, Pp = { width: "1px", color: "{primary.color}" }, Lp = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, zp = { size: "2rem" }, Ap = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, jp = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Mp = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Dp = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Ep = `
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`, Np = { root: $p, header: Cp, headerCell: Sp, columnTitle: xp, row: Op, bodyCell: Bp, footerCell: Ip, columnFooter: _p, footer: Rp, columnResizer: Tp, resizeIndicator: Pp, sortIcon: Lp, loadingIcon: zp, nodeToggleButton: Ap, paginatorTop: jp, paginatorBottom: Mp, colorScheme: Dp, css: Ep }, Vp = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, Fp = { loader: Vp }, Wp = Object.defineProperty, Hp = Object.defineProperties, Kp = Object.getOwnPropertyDescriptors, Uo = Object.getOwnPropertySymbols, Up = Object.prototype.hasOwnProperty, Gp = Object.prototype.propertyIsEnumerable, Go = (o, e, r) => e in o ? Wp(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, Yo, Yp = (Yo = ((o, e) => {
  for (var r in e || (e = {})) Up.call(e, r) && Go(o, r, e[r]);
  if (Uo) for (var r of Uo(e)) Gp.call(e, r) && Go(o, r, e[r]);
  return o;
})({}, ri), Hp(Yo, Kp({ components: { accordion: Rn, autocomplete: Nn, avatar: Un, badge: Jn, blockui: ni, breadcrumb: si, button: ui, card: vi, carousel: Ci, cascadeselect: Ri, checkbox: Li, chip: Ei, colorpicker: Hi, confirmdialog: Gi, confirmpopup: Qi, contextmenu: ia, datatable: Ba, dataview: za, datepicker: el, dialog: al, divider: ul, dock: gl, drawer: kl, editor: Ol, fieldset: Tl, fileupload: El, floatlabel: Hl, galleria: is, iconfield: ls, iftalabel: cs, image: ms, imagecompare: vs, inlinemessage: $s, inplace: xs, inputchips: _s, inputgroup: Ts, inputnumber: As, inputotp: Ds, inputtext: Ns, knob: Ks, listbox: Js, megamenu: dd, menu: md, menubar: $d, message: Pd, metergroup: Ed, multiselect: Xd, orderlist: Qd, organizationchart: tc, overlaybadge: ic, paginator: cc, panel: vc, panelmenu: Cc, password: _c, picklist: Pc, popover: Ac, progressbar: Ec, progressspinner: Vc, radiobutton: Hc, rating: Gc, ripple: Xc, scrollpanel: Jc, select: du, selectbutton: fu, skeleton: mu, slider: wu, speeddial: Cu, splitbutton: xu, splitter: _u, stepper: Du, steps: Hu, tabmenu: qu, tabs: nf, tabview: ff, tag: hf, terminal: kf, textarea: $f, tieredmenu: _f, timeline: Af, toast: Kf, togglebutton: qf, toggleswitch: ep, toolbar: rp, tooltip: ip, tree: pp, treeselect: wp, treetable: Np, virtualscroller: Fp }, css: aa })));
function Me(o) {
  "@babel/helpers - typeof";
  return Me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Me(o);
}
function Xp(o, e) {
  if (!(o instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function qp(o, e) {
  for (var r = 0; r < e.length; r++) {
    var t = e[r];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(o, Qp(t.key), t);
  }
}
function Zp(o, e, r) {
  return e && qp(o.prototype, e), Object.defineProperty(o, "prototype", { writable: !1 }), o;
}
function Qp(o) {
  var e = Jp(o, "string");
  return Me(e) == "symbol" ? e : e + "";
}
function Jp(o, e) {
  if (Me(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Me(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(o);
}
var eg = /* @__PURE__ */ (function() {
  function o(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    Xp(this, o), this.element = e, this.listener = r;
  }
  return Zp(o, [{
    key: "bindScrollListener",
    value: function() {
      this.scrollableParents = Dt(this.element);
      for (var r = 0; r < this.scrollableParents.length; r++)
        this.scrollableParents[r].addEventListener("scroll", this.listener);
    }
  }, {
    key: "unbindScrollListener",
    value: function() {
      if (this.scrollableParents)
        for (var r = 0; r < this.scrollableParents.length; r++)
          this.scrollableParents[r].removeEventListener("scroll", this.listener);
    }
  }, {
    key: "destroy",
    value: function() {
      this.unbindScrollListener(), this.element = null, this.listener = null, this.scrollableParents = null;
    }
  }]);
})(), ie = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName: function(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName: function(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
};
function og() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", e = at();
  return "".concat(o).concat(e.replace("v-", "").replaceAll("-", "_"));
}
var Xo = P.extend({
  name: "common"
});
function De(o) {
  "@babel/helpers - typeof";
  return De = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, De(o);
}
function rg(o) {
  return Br(o) || tg(o) || Or(o) || xr();
}
function tg(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function _e(o, e) {
  return Br(o) || ng(o, e) || Or(o, e) || xr();
}
function xr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Or(o, e) {
  if (o) {
    if (typeof o == "string") return vo(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? vo(o, e) : void 0;
  }
}
function vo(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++) t[r] = o[r];
  return t;
}
function ng(o, e) {
  var r = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (r != null) {
    var t, n, i, l, s = [], a = !0, d = !1;
    try {
      if (i = (r = r.call(o)).next, e === 0) {
        if (Object(r) !== r) return;
        a = !1;
      } else for (; !(a = (t = i.call(r)).done) && (s.push(t.value), s.length !== e); a = !0) ;
    } catch (c) {
      d = !0, n = c;
    } finally {
      try {
        if (!a && r.return != null && (l = r.return(), Object(l) !== l)) return;
      } finally {
        if (d) throw n;
      }
    }
    return s;
  }
}
function Br(o) {
  if (Array.isArray(o)) return o;
}
function qo(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function S(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qo(Object(r), !0).forEach(function(t) {
      Te(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : qo(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function Te(o, e, r) {
  return (e = ig(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function ig(o) {
  var e = ag(o, "string");
  return De(e) == "symbol" ? e : e + "";
}
function ag(o, e) {
  if (De(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (De(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var to = {
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
      handler: function(e) {
        E.off("theme:change", this._loadCoreStyles), e || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(e, r) {
        var t = this;
        E.off("theme:change", this._themeScopedListener), e ? (this._loadScopedThemeStyles(e), this._themeScopedListener = function() {
          return t._loadScopedThemeStyles(e);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var e, r, t, n, i, l, s, a, d, c, u, f = (e = this.pt) === null || e === void 0 ? void 0 : e._usept, p = f ? (r = this.pt) === null || r === void 0 || (r = r.originalValue) === null || r === void 0 ? void 0 : r[this.$.type.name] : void 0, g = f ? (t = this.pt) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t[this.$.type.name] : this.pt;
    (n = g || p) === null || n === void 0 || (n = n.hooks) === null || n === void 0 || (i = n.onBeforeCreate) === null || i === void 0 || i.call(n);
    var b = (l = this.$primevueConfig) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l._usept, h = b ? (s = this.$primevue) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s.originalValue : void 0, v = b ? (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a.value : (d = this.$primevue) === null || d === void 0 || (d = d.config) === null || d === void 0 ? void 0 : d.pt;
    (c = v || h) === null || c === void 0 || (c = c[this.$.type.name]) === null || c === void 0 || (c = c.hooks) === null || c === void 0 || (u = c.onBeforeCreate) === null || u === void 0 || u.call(c), this.$attrSelector = og(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var e;
    this.rootEl = ro(Ke(this.$el) ? this.$el : (e = this.$el) === null || e === void 0 ? void 0 : e.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = S({
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
    _hook: function(e) {
      if (!this.$options.hostName) {
        var r = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(e)), t = this._useDefaultPT(this._getOptionValue, "hooks.".concat(e));
        r?.(), t?.();
      }
    },
    _mergeProps: function(e) {
      for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
        t[n - 1] = arguments[n];
      return oo(e) ? e.apply(void 0, t) : w.apply(void 0, t);
    },
    _load: function() {
      ie.isStyleNameLoaded("base") || (P.loadCSS(this.$styleOptions), this._loadGlobalStyles(), ie.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var e, r;
      !ie.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (r = this.$style) !== null && r !== void 0 && r.name && (Xo.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), ie.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var e = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      B(e) && P.load(e, S({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var e, r;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!_.isStyleNameLoaded("common")) {
          var t, n, i = ((t = this.$style) === null || t === void 0 || (n = t.getCommonTheme) === null || n === void 0 ? void 0 : n.call(t)) || {}, l = i.primitive, s = i.semantic, a = i.global, d = i.style;
          P.load(l?.css, S({
            name: "primitive-variables"
          }, this.$styleOptions)), P.load(s?.css, S({
            name: "semantic-variables"
          }, this.$styleOptions)), P.load(a?.css, S({
            name: "global-variables"
          }, this.$styleOptions)), P.loadStyle(S({
            name: "global-style"
          }, this.$styleOptions), d), _.setLoadedStyleName("common");
        }
        if (!_.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (r = this.$style) !== null && r !== void 0 && r.name) {
          var c, u, f, p, g = ((c = this.$style) === null || c === void 0 || (u = c.getComponentTheme) === null || u === void 0 ? void 0 : u.call(c)) || {}, b = g.css, h = g.style;
          (f = this.$style) === null || f === void 0 || f.load(b, S({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (p = this.$style) === null || p === void 0 || p.loadStyle(S({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), h), _.setLoadedStyleName(this.$style.name);
        }
        if (!_.isStyleNameLoaded("layer-order")) {
          var v, k, C = (v = this.$style) === null || v === void 0 || (k = v.getLayerOrderThemeCSS) === null || k === void 0 ? void 0 : k.call(v);
          P.load(C, S({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), _.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(e) {
      var r, t, n, i = ((r = this.$style) === null || r === void 0 || (t = r.getPresetTheme) === null || t === void 0 ? void 0 : t.call(r, e, "[".concat(this.$attrSelector, "]"))) || {}, l = i.css, s = (n = this.$style) === null || n === void 0 ? void 0 : n.load(l, S({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = s.el;
    },
    _unloadScopedThemeStyles: function() {
      var e;
      (e = this.scopedStyleEl) === null || e === void 0 || (e = e.value) === null || e === void 0 || e.remove();
    },
    _themeChangeListener: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      ie.clearLoadedStyleNames(), E.on("theme:change", e);
    },
    _removeThemeListeners: function() {
      E.off("theme:change", this._loadCoreStyles), E.off("theme:change", this._load), E.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(e) {
      return e ? this.$options.hostName ? e.$.type.name === this.$options.hostName ? e : this._getHostInstance(e.$parentInstance) : e.$parentInstance : void 0;
    },
    _getPropValue: function(e) {
      var r;
      return this[e] || ((r = this._getHostInstance(this)) === null || r === void 0 ? void 0 : r[e]);
    },
    _getOptionValue: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return xo(e, r, t);
    },
    _getPTValue: function() {
      var e, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, l = /./g.test(t) && !!n[t.split(".")[0]], s = this._getPropValue("ptOptions") || ((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.ptOptions) || {}, a = s.mergeSections, d = a === void 0 ? !0 : a, c = s.mergeProps, u = c === void 0 ? !1 : c, f = i ? l ? this._useGlobalPT(this._getPTClassValue, t, n) : this._useDefaultPT(this._getPTClassValue, t, n) : void 0, p = l ? void 0 : this._getPTSelf(r, this._getPTClassValue, t, S(S({}, n), {}, {
        global: f || {}
      })), g = this._getPTDatasets(t);
      return d || !d && p ? u ? this._mergeProps(u, f, p, g) : S(S(S({}, f), p), g) : S(S({}, p), g);
    },
    _getPTSelf: function() {
      for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
        t[n - 1] = arguments[n];
      return w(
        this._usePT.apply(this, [this._getPT(e, this.$name)].concat(t)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(t))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var e, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = "data-pc-", i = t === "root" && B((e = this.pt) === null || e === void 0 ? void 0 : e["data-pc-section"]);
      return t !== "transition" && S(S({}, t === "root" && S(S(Te({}, "".concat(n, "name"), oe(i ? (r = this.pt) === null || r === void 0 ? void 0 : r["data-pc-section"] : this.$.type.name)), i && Te({}, "".concat(n, "extend"), oe(this.$.type.name))), {}, Te({}, "".concat(this.$attrSelector), ""))), {}, Te({}, "".concat(n, "section"), oe(t)));
    },
    _getPTClassValue: function() {
      var e = this._getOptionValue.apply(this, arguments);
      return H(e) || cr(e) ? {
        class: e
      } : e;
    },
    _getPT: function(e) {
      var r = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 ? arguments[2] : void 0, i = function(s) {
        var a, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = n ? n(s) : s, u = oe(t), f = oe(r.$name);
        return (a = d ? u !== f ? c?.[u] : void 0 : c?.[u]) !== null && a !== void 0 ? a : c;
      };
      return e != null && e.hasOwnProperty("_usept") ? {
        _usept: e._usept,
        originalValue: i(e.originalValue),
        value: i(e.value)
      } : i(e, !0);
    },
    _usePT: function(e, r, t, n) {
      var i = function(b) {
        return r(b, t, n);
      };
      if (e != null && e.hasOwnProperty("_usept")) {
        var l, s = e._usept || ((l = this.$primevueConfig) === null || l === void 0 ? void 0 : l.ptOptions) || {}, a = s.mergeSections, d = a === void 0 ? !0 : a, c = s.mergeProps, u = c === void 0 ? !1 : c, f = i(e.originalValue), p = i(e.value);
        return f === void 0 && p === void 0 ? void 0 : H(p) ? p : H(f) ? f : d || !d && p ? u ? this._mergeProps(u, f, p) : S(S({}, f), p) : p;
      }
      return i(e);
    },
    _useGlobalPT: function(e, r, t) {
      return this._usePT(this.globalPT, e, r, t);
    },
    _useDefaultPT: function(e, r, t) {
      return this._usePT(this.defaultPT, e, r, t);
    },
    ptm: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, e, S(S({}, this.$params), r));
    },
    ptmi: function() {
      var e, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = w(this.$_attrsWithoutPT, this.ptm(r, t));
      return n?.hasOwnProperty("id") && ((e = n.id) !== null && e !== void 0 || (n.id = this.$id)), n;
    },
    ptmo: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(e, r, S({
        instance: this
      }, t), !1);
    },
    cx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, e, S(S({}, this.$params), r));
    },
    sx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (r) {
        var n = this._getOptionValue(this.$style.inlineStyles, e, S(S({}, this.$params), t)), i = this._getOptionValue(Xo.inlineStyles, e, S(S({}, this.$params), t));
        return [i, n];
      }
    }
  },
  computed: {
    globalPT: function() {
      var e, r = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(t) {
        return G(t, {
          instance: r
        });
      });
    },
    defaultPT: function() {
      var e, r = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(t) {
        return r._getOptionValue(t, r.$name, S({}, r.$params)) || G(t, S({}, r.$params));
      });
    },
    isUnstyled: function() {
      var e;
      return this.unstyled !== void 0 ? this.unstyled : (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.unstyled;
    },
    $id: function() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function() {
      var e, r = Object.keys(((e = this.$.vnode) === null || e === void 0 ? void 0 : e.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(t) {
        var n = _e(t, 1), i = n[0];
        return r?.includes(i);
      }));
    },
    $theme: function() {
      var e;
      return (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.theme;
    },
    $style: function() {
      return S(S({
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
      var e;
      return {
        nonce: (e = this.$primevueConfig) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce
      };
    },
    $primevueConfig: function() {
      var e;
      return (e = this.$primevue) === null || e === void 0 ? void 0 : e.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var e = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: e,
          props: e?.$props,
          state: e?.$data,
          attrs: e?.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var r = _e(e, 1), t = r[0];
        return t?.startsWith("pt:");
      }).reduce(function(e, r) {
        var t = _e(r, 2), n = t[0], i = t[1], l = n.split(":"), s = rg(l), a = vo(s).slice(1);
        return a?.reduce(function(d, c, u, f) {
          return !d[c] && (d[c] = u === f.length - 1 ? i : {}), d[c];
        }, e), e;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var r = _e(e, 1), t = r[0];
        return !(t != null && t.startsWith("pt:"));
      }).reduce(function(e, r) {
        var t = _e(r, 2), n = t[0], i = t[1];
        return e[n] = i, e;
      }, {});
    }
  }
}, lg = `
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
`, sg = P.extend({
  name: "baseicon",
  css: lg
});
function Ee(o) {
  "@babel/helpers - typeof";
  return Ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ee(o);
}
function Zo(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Qo(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Zo(Object(r), !0).forEach(function(t) {
      dg(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : Zo(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function dg(o, e, r) {
  return (e = cg(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function cg(o) {
  var e = ug(o, "string");
  return Ee(e) == "symbol" ? e : e + "";
}
function ug(o, e) {
  if (Ee(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Ee(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var no = {
  name: "BaseIcon",
  extends: to,
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
      var e = Be(this.label);
      return Qo(Qo({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: e ? void 0 : "img",
        "aria-label": e ? void 0 : this.label,
        "aria-hidden": e
      });
    }
  }
}, Ir = {
  name: "ChevronDownIcon",
  extends: no
};
function fg(o) {
  return hg(o) || mg(o) || gg(o) || pg();
}
function pg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gg(o, e) {
  if (o) {
    if (typeof o == "string") return bo(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? bo(o, e) : void 0;
  }
}
function mg(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function hg(o) {
  if (Array.isArray(o)) return bo(o);
}
function bo(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++) t[r] = o[r];
  return t;
}
function vg(o, e, r, t, n, i) {
  return x(), I("svg", w({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o.pti()), fg(e[0] || (e[0] = [ee("path", {
    d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
Ir.render = vg;
var Bo = {
  name: "SpinnerIcon",
  extends: no
};
function bg(o) {
  return $g(o) || wg(o) || kg(o) || yg();
}
function yg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kg(o, e) {
  if (o) {
    if (typeof o == "string") return yo(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? yo(o, e) : void 0;
  }
}
function wg(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function $g(o) {
  if (Array.isArray(o)) return yo(o);
}
function yo(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++) t[r] = o[r];
  return t;
}
function Cg(o, e, r, t, n, i) {
  return x(), I("svg", w({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o.pti()), bg(e[0] || (e[0] = [ee("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
Bo.render = Cg;
var _r = {
  name: "TimesIcon",
  extends: no
};
function Sg(o) {
  return Ig(o) || Bg(o) || Og(o) || xg();
}
function xg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Og(o, e) {
  if (o) {
    if (typeof o == "string") return ko(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ko(o, e) : void 0;
  }
}
function Bg(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function Ig(o) {
  if (Array.isArray(o)) return ko(o);
}
function ko(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++) t[r] = o[r];
  return t;
}
function _g(o, e, r, t, n, i) {
  return x(), I("svg", w({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o.pti()), Sg(e[0] || (e[0] = [ee("path", {
    d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
_r.render = _g;
var Rr = {
  name: "TimesCircleIcon",
  extends: no
};
function Rg(o) {
  return zg(o) || Lg(o) || Pg(o) || Tg();
}
function Tg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pg(o, e) {
  if (o) {
    if (typeof o == "string") return wo(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? wo(o, e) : void 0;
  }
}
function Lg(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function zg(o) {
  if (Array.isArray(o)) return wo(o);
}
function wo(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++) t[r] = o[r];
  return t;
}
function Ag(o, e, r, t, n, i) {
  return x(), I("svg", w({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o.pti()), Rg(e[0] || (e[0] = [ee("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
Rr.render = Ag;
var jg = `
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`, Mg = {
  root: "p-chip p-component",
  image: "p-chip-image",
  icon: "p-chip-icon",
  label: "p-chip-label",
  removeIcon: "p-chip-remove-icon"
}, Dg = P.extend({
  name: "chip",
  style: jg,
  classes: Mg
}), Eg = {
  name: "BaseChip",
  extends: to,
  props: {
    label: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    removable: {
      type: Boolean,
      default: !1
    },
    removeIcon: {
      type: String,
      default: void 0
    }
  },
  style: Dg,
  provide: function() {
    return {
      $pcChip: this,
      $parentInstance: this
    };
  }
}, Tr = {
  name: "Chip",
  extends: Eg,
  inheritAttrs: !1,
  emits: ["remove"],
  data: function() {
    return {
      visible: !0
    };
  },
  methods: {
    onKeydown: function(e) {
      (e.key === "Enter" || e.key === "Backspace") && this.close(e);
    },
    close: function(e) {
      this.visible = !1, this.$emit("remove", e);
    }
  },
  computed: {
    dataP: function() {
      return xe({
        removable: this.removable
      });
    }
  },
  components: {
    TimesCircleIcon: Rr
  }
}, Ng = ["aria-label", "data-p"], Vg = ["src"];
function Fg(o, e, r, t, n, i) {
  return n.visible ? (x(), I("div", w({
    key: 0,
    class: o.cx("root"),
    "aria-label": o.label
  }, o.ptmi("root"), {
    "data-p": i.dataP
  }), [z(o.$slots, "default", {}, function() {
    return [o.image ? (x(), I("img", w({
      key: 0,
      src: o.image
    }, o.ptm("image"), {
      class: o.cx("image")
    }), null, 16, Vg)) : o.$slots.icon ? (x(), ge(fo(o.$slots.icon), w({
      key: 1,
      class: o.cx("icon")
    }, o.ptm("icon")), null, 16, ["class"])) : o.icon ? (x(), I("span", w({
      key: 2,
      class: [o.cx("icon"), o.icon]
    }, o.ptm("icon")), null, 16)) : D("", !0), o.label !== null ? (x(), I("div", w({
      key: 3,
      class: o.cx("label")
    }, o.ptm("label")), ye(o.label), 17)) : D("", !0)];
  }), o.removable ? z(o.$slots, "removeicon", {
    key: 0,
    removeCallback: i.close,
    keydownCallback: i.onKeydown
  }, function() {
    return [(x(), ge(fo(o.removeIcon ? "span" : "TimesCircleIcon"), w({
      class: [o.cx("removeIcon"), o.removeIcon],
      onClick: i.close,
      onKeydown: i.onKeydown
    }, o.ptm("removeIcon")), null, 16, ["class", "onClick", "onKeydown"]))];
  }) : D("", !0)], 16, Ng)) : D("", !0);
}
Tr.render = Fg;
var Wg = {
  name: "BaseEditableHolder",
  extends: to,
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
      handler: function(e) {
        this.d_value = e;
      }
    },
    defaultValue: function(e) {
      this.d_value = e;
    },
    $formName: {
      immediate: !0,
      handler: function(e) {
        var r, t;
        this.formField = ((r = this.$pcForm) === null || r === void 0 || (t = r.register) === null || t === void 0 ? void 0 : t.call(r, e, this.$formControl)) || {};
      }
    },
    $formControl: {
      immediate: !0,
      handler: function(e) {
        var r, t;
        this.formField = ((r = this.$pcForm) === null || r === void 0 || (t = r.register) === null || t === void 0 ? void 0 : t.call(r, this.$formName, e)) || {};
      }
    },
    $formDefaultValue: {
      immediate: !0,
      handler: function(e) {
        this.d_value !== e && (this.d_value = e);
      }
    },
    $formValue: {
      immediate: !1,
      handler: function(e) {
        var r;
        (r = this.$pcForm) !== null && r !== void 0 && r.getFieldState(this.$formName) && e !== this.d_value && (this.d_value = e);
      }
    }
  },
  formField: {},
  methods: {
    writeValue: function(e, r) {
      var t, n;
      this.controlled && (this.d_value = e, this.$emit("update:modelValue", e)), this.$emit("value-change", e), (t = (n = this.formField).onChange) === null || t === void 0 || t.call(n, {
        originalEvent: r,
        value: e
      });
    },
    // @todo move to @primeuix/utils
    findNonEmpty: function() {
      for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
        r[t] = arguments[t];
      return r.find(B);
    }
  },
  computed: {
    $filled: function() {
      return B(this.d_value);
    },
    $invalid: function() {
      var e, r;
      return !this.$formNovalidate && this.findNonEmpty(this.invalid, (e = this.$pcFormField) === null || e === void 0 || (e = e.$field) === null || e === void 0 ? void 0 : e.invalid, (r = this.$pcForm) === null || r === void 0 || (r = r.getFieldState(this.$formName)) === null || r === void 0 ? void 0 : r.invalid);
    },
    $formName: function() {
      var e;
      return this.$formNovalidate ? void 0 : this.name || ((e = this.$formControl) === null || e === void 0 ? void 0 : e.name);
    },
    $formControl: function() {
      var e;
      return this.formControl || ((e = this.$pcFormField) === null || e === void 0 ? void 0 : e.formControl);
    },
    $formNovalidate: function() {
      var e;
      return (e = this.$formControl) === null || e === void 0 ? void 0 : e.novalidate;
    },
    $formDefaultValue: function() {
      var e, r;
      return this.findNonEmpty(this.d_value, (e = this.$pcFormField) === null || e === void 0 ? void 0 : e.initialValue, (r = this.$pcForm) === null || r === void 0 || (r = r.initialValues) === null || r === void 0 ? void 0 : r[this.$formName]);
    },
    $formValue: function() {
      var e, r;
      return this.findNonEmpty((e = this.$pcFormField) === null || e === void 0 || (e = e.$field) === null || e === void 0 ? void 0 : e.value, (r = this.$pcForm) === null || r === void 0 || (r = r.getFieldState(this.$formName)) === null || r === void 0 ? void 0 : r.value);
    },
    controlled: function() {
      return this.$inProps.hasOwnProperty("modelValue") || !this.$inProps.hasOwnProperty("modelValue") && !this.$inProps.hasOwnProperty("defaultValue");
    },
    // @deprecated use $filled instead
    filled: function() {
      return this.$filled;
    }
  }
}, Pr = {
  name: "BaseInput",
  extends: Wg,
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
      var e;
      return (e = this.variant) !== null && e !== void 0 ? e : this.$primevue.config.inputStyle || this.$primevue.config.inputVariant;
    },
    $fluid: function() {
      var e;
      return (e = this.fluid) !== null && e !== void 0 ? e : !!this.$pcFluid;
    },
    // @deprecated use $fluid instead
    hasFluid: function() {
      return this.$fluid;
    }
  }
}, Hg = `
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
`, Kg = {
  root: function(e) {
    var r = e.instance, t = e.props;
    return ["p-inputtext p-component", {
      "p-filled": r.$filled,
      "p-inputtext-sm p-inputfield-sm": t.size === "small",
      "p-inputtext-lg p-inputfield-lg": t.size === "large",
      "p-invalid": r.$invalid,
      "p-variant-filled": r.$variant === "filled",
      "p-inputtext-fluid": r.$fluid
    }];
  }
}, Ug = P.extend({
  name: "inputtext",
  style: Hg,
  classes: Kg
}), Gg = {
  name: "BaseInputText",
  extends: Pr,
  style: Ug,
  provide: function() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
function Ne(o) {
  "@babel/helpers - typeof";
  return Ne = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ne(o);
}
function Yg(o, e, r) {
  return (e = Xg(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function Xg(o) {
  var e = qg(o, "string");
  return Ne(e) == "symbol" ? e : e + "";
}
function qg(o, e) {
  if (Ne(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Ne(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var Lr = {
  name: "InputText",
  extends: Gg,
  inheritAttrs: !1,
  methods: {
    onInput: function(e) {
      this.writeValue(e.target.value, e);
    }
  },
  computed: {
    attrs: function() {
      return w(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function() {
      return xe(Yg({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
}, Zg = ["value", "name", "disabled", "aria-invalid", "data-p"];
function Qg(o, e, r, t, n, i) {
  return x(), I("input", w({
    type: "text",
    class: o.cx("root"),
    value: o.d_value,
    name: o.name,
    disabled: o.disabled,
    "aria-invalid": o.$invalid || void 0,
    "data-p": i.dataP,
    onInput: e[0] || (e[0] = function() {
      return i.onInput && i.onInput.apply(i, arguments);
    })
  }, i.attrs), null, 16, Zg);
}
Lr.render = Qg;
var Jg = Oo(), zr = {
  name: "Portal",
  props: {
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data: function() {
    return {
      mounted: !1
    };
  },
  mounted: function() {
    this.mounted = vr();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function e0(o, e, r, t, n, i) {
  return i.inline ? z(o.$slots, "default", {
    key: 0
  }) : n.mounted ? (x(), ge(lt, {
    key: 1,
    to: r.appendTo
  }, [z(o.$slots, "default")], 8, ["to"])) : D("", !0);
}
zr.render = e0;
function Ve(o) {
  "@babel/helpers - typeof";
  return Ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ve(o);
}
function Jo(o, e) {
  return n0(o) || t0(o, e) || r0(o, e) || o0();
}
function o0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function r0(o, e) {
  if (o) {
    if (typeof o == "string") return er(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? er(o, e) : void 0;
  }
}
function er(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++) t[r] = o[r];
  return t;
}
function t0(o, e) {
  var r = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (r != null) {
    var t, n, i, l, s = [], a = !0, d = !1;
    try {
      if (i = (r = r.call(o)).next, e !== 0) for (; !(a = (t = i.call(r)).done) && (s.push(t.value), s.length !== e); a = !0) ;
    } catch (c) {
      d = !0, n = c;
    } finally {
      try {
        if (!a && r.return != null && (l = r.return(), Object(l) !== l)) return;
      } finally {
        if (d) throw n;
      }
    }
    return s;
  }
}
function n0(o) {
  if (Array.isArray(o)) return o;
}
function or(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function O(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? or(Object(r), !0).forEach(function(t) {
      $o(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : or(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function $o(o, e, r) {
  return (e = i0(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function i0(o) {
  var e = a0(o, "string");
  return Ve(e) == "symbol" ? e : e + "";
}
function a0(o, e) {
  if (Ve(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Ve(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var $ = {
  _getMeta: function() {
    return [re(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], G(re(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(e, r) {
    var t, n, i;
    return (t = (e == null || (n = e.instance) === null || n === void 0 ? void 0 : n.$primevue) || (r == null || (i = r.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || t === void 0 ? void 0 : t.config;
  },
  _getOptionValue: xo,
  _getPTValue: function() {
    var e, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = function() {
      var k = $._getOptionValue.apply($, arguments);
      return H(k) || cr(k) ? {
        class: k
      } : k;
    }, d = ((e = t.binding) === null || e === void 0 || (e = e.value) === null || e === void 0 ? void 0 : e.ptOptions) || ((r = t.$primevueConfig) === null || r === void 0 ? void 0 : r.ptOptions) || {}, c = d.mergeSections, u = c === void 0 ? !0 : c, f = d.mergeProps, p = f === void 0 ? !1 : f, g = s ? $._useDefaultPT(t, t.defaultPT(), a, i, l) : void 0, b = $._usePT(t, $._getPT(n, t.$name), a, i, O(O({}, l), {}, {
      global: g || {}
    })), h = $._getPTDatasets(t, i);
    return u || !u && b ? p ? $._mergeProps(t, p, g, b, h) : O(O(O({}, g), b), h) : O(O({}, b), h);
  },
  _getPTDatasets: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = "data-pc-";
    return O(O({}, r === "root" && $o({}, "".concat(t, "name"), oe(e.$name))), {}, $o({}, "".concat(t, "section"), oe(r)));
  },
  _getPT: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 ? arguments[2] : void 0, n = function(l) {
      var s, a = t ? t(l) : l, d = oe(r);
      return (s = a?.[d]) !== null && s !== void 0 ? s : a;
    };
    return e && Object.hasOwn(e, "_usept") ? {
      _usept: e._usept,
      originalValue: n(e.originalValue),
      value: n(e.value)
    } : n(e);
  },
  _usePT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, l = function(h) {
      return t(h, n, i);
    };
    if (r && Object.hasOwn(r, "_usept")) {
      var s, a = r._usept || ((s = e.$primevueConfig) === null || s === void 0 ? void 0 : s.ptOptions) || {}, d = a.mergeSections, c = d === void 0 ? !0 : d, u = a.mergeProps, f = u === void 0 ? !1 : u, p = l(r.originalValue), g = l(r.value);
      return p === void 0 && g === void 0 ? void 0 : H(g) ? g : H(p) ? p : c || !c && g ? f ? $._mergeProps(e, f, p, g) : O(O({}, p), g) : g;
    }
    return l(r);
  },
  _useDefaultPT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
    return $._usePT(e, r, t, n, i);
  },
  _loadStyles: function() {
    var e, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0, i = $._getConfig(t, n), l = {
      nonce: i == null || (e = i.csp) === null || e === void 0 ? void 0 : e.nonce
    };
    $._loadCoreStyles(r, l), $._loadThemeStyles(r, l), $._loadScopedThemeStyles(r, l), $._removeThemeListeners(r), r.$loadStyles = function() {
      return $._loadThemeStyles(r, l);
    }, $._themeChangeListener(r.$loadStyles);
  },
  _loadCoreStyles: function() {
    var e, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (!ie.isStyleNameLoaded((e = t.$style) === null || e === void 0 ? void 0 : e.name) && (r = t.$style) !== null && r !== void 0 && r.name) {
      var i;
      P.loadCSS(n), (i = t.$style) === null || i === void 0 || i.loadCSS(n), ie.setLoadedStyleName(t.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var e, r, t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (!(n != null && n.isUnstyled() || (n == null || (e = n.theme) === null || e === void 0 ? void 0 : e.call(n)) === "none")) {
      if (!_.isStyleNameLoaded("common")) {
        var l, s, a = ((l = n.$style) === null || l === void 0 || (s = l.getCommonTheme) === null || s === void 0 ? void 0 : s.call(l)) || {}, d = a.primitive, c = a.semantic, u = a.global, f = a.style;
        P.load(d?.css, O({
          name: "primitive-variables"
        }, i)), P.load(c?.css, O({
          name: "semantic-variables"
        }, i)), P.load(u?.css, O({
          name: "global-variables"
        }, i)), P.loadStyle(O({
          name: "global-style"
        }, i), f), _.setLoadedStyleName("common");
      }
      if (!_.isStyleNameLoaded((r = n.$style) === null || r === void 0 ? void 0 : r.name) && (t = n.$style) !== null && t !== void 0 && t.name) {
        var p, g, b, h, v = ((p = n.$style) === null || p === void 0 || (g = p.getDirectiveTheme) === null || g === void 0 ? void 0 : g.call(p)) || {}, k = v.css, C = v.style;
        (b = n.$style) === null || b === void 0 || b.load(k, O({
          name: "".concat(n.$style.name, "-variables")
        }, i)), (h = n.$style) === null || h === void 0 || h.loadStyle(O({
          name: "".concat(n.$style.name, "-style")
        }, i), C), _.setLoadedStyleName(n.$style.name);
      }
      if (!_.isStyleNameLoaded("layer-order")) {
        var m, y, R = (m = n.$style) === null || m === void 0 || (y = m.getLayerOrderThemeCSS) === null || y === void 0 ? void 0 : y.call(m);
        P.load(R, O({
          name: "layer-order",
          first: !0
        }, i)), _.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, t = e.preset();
    if (t && e.$attrSelector) {
      var n, i, l, s = ((n = e.$style) === null || n === void 0 || (i = n.getPresetTheme) === null || i === void 0 ? void 0 : i.call(n, t, "[".concat(e.$attrSelector, "]"))) || {}, a = s.css, d = (l = e.$style) === null || l === void 0 ? void 0 : l.load(a, O({
        name: "".concat(e.$attrSelector, "-").concat(e.$style.name)
      }, r));
      e.scopedStyleEl = d.el;
    }
  },
  _themeChangeListener: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    ie.clearLoadedStyleNames(), E.on("theme:change", e);
  },
  _removeThemeListeners: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    E.off("theme:change", e.$loadStyles), e.$loadStyles = void 0;
  },
  _hook: function(e, r, t, n, i, l) {
    var s, a, d = "on".concat(St(r)), c = $._getConfig(n, i), u = t?.$instance, f = $._usePT(u, $._getPT(n == null || (s = n.value) === null || s === void 0 ? void 0 : s.pt, e), $._getOptionValue, "hooks.".concat(d)), p = $._useDefaultPT(u, c == null || (a = c.pt) === null || a === void 0 || (a = a.directives) === null || a === void 0 ? void 0 : a[e], $._getOptionValue, "hooks.".concat(d)), g = {
      el: t,
      binding: n,
      vnode: i,
      prevVnode: l
    };
    f?.(u, g), p?.(u, g);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var e = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length, t = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
      t[n - 2] = arguments[n];
    return oo(e) ? e.apply(void 0, t) : w.apply(void 0, t);
  },
  _extend: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = function(s, a, d, c, u) {
      var f, p, g, b;
      a._$instances = a._$instances || {};
      var h = $._getConfig(d, c), v = a._$instances[e] || {}, k = Be(v) ? O(O({}, r), r?.methods) : {};
      a._$instances[e] = O(O({}, v), {}, {
        /* new instance variables to pass in directive methods */
        $name: e,
        $host: a,
        $binding: d,
        $modifiers: d?.modifiers,
        $value: d?.value,
        $el: v.$el || a || void 0,
        $style: O({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, r?.style),
        $primevueConfig: h,
        $attrSelector: (f = a.$pd) === null || f === void 0 || (f = f[e]) === null || f === void 0 ? void 0 : f.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return $._getPT(h?.pt, void 0, function(m) {
            var y;
            return m == null || (y = m.directives) === null || y === void 0 ? void 0 : y[e];
          });
        },
        isUnstyled: function() {
          var m, y;
          return ((m = a._$instances[e]) === null || m === void 0 || (m = m.$binding) === null || m === void 0 || (m = m.value) === null || m === void 0 ? void 0 : m.unstyled) !== void 0 ? (y = a._$instances[e]) === null || y === void 0 || (y = y.$binding) === null || y === void 0 || (y = y.value) === null || y === void 0 ? void 0 : y.unstyled : h?.unstyled;
        },
        theme: function() {
          var m;
          return (m = a._$instances[e]) === null || m === void 0 || (m = m.$primevueConfig) === null || m === void 0 ? void 0 : m.theme;
        },
        preset: function() {
          var m;
          return (m = a._$instances[e]) === null || m === void 0 || (m = m.$binding) === null || m === void 0 || (m = m.value) === null || m === void 0 ? void 0 : m.dt;
        },
        /* instance's methods */
        ptm: function() {
          var m, y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return $._getPTValue(a._$instances[e], (m = a._$instances[e]) === null || m === void 0 || (m = m.$binding) === null || m === void 0 || (m = m.value) === null || m === void 0 ? void 0 : m.pt, y, O({}, R));
        },
        ptmo: function() {
          var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return $._getPTValue(a._$instances[e], m, y, R, !1);
        },
        cx: function() {
          var m, y, R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (m = a._$instances[e]) !== null && m !== void 0 && m.isUnstyled() ? void 0 : $._getOptionValue((y = a._$instances[e]) === null || y === void 0 || (y = y.$style) === null || y === void 0 ? void 0 : y.classes, R, O({}, L));
        },
        sx: function() {
          var m, y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return R ? $._getOptionValue((m = a._$instances[e]) === null || m === void 0 || (m = m.$style) === null || m === void 0 ? void 0 : m.inlineStyles, y, O({}, L)) : void 0;
        }
      }, k), a.$instance = a._$instances[e], (p = (g = a.$instance)[s]) === null || p === void 0 || p.call(g, a, d, c, u), a["$".concat(e)] = a.$instance, $._hook(e, s, a, d, c, u), a.$pd || (a.$pd = {}), a.$pd[e] = O(O({}, (b = a.$pd) === null || b === void 0 ? void 0 : b[e]), {}, {
        name: e,
        instance: a._$instances[e]
      });
    }, n = function(s) {
      var a, d, c, u = s._$instances[e], f = u?.watch, p = function(h) {
        var v, k = h.newValue, C = h.oldValue;
        return f == null || (v = f.config) === null || v === void 0 ? void 0 : v.call(u, k, C);
      }, g = function(h) {
        var v, k = h.newValue, C = h.oldValue;
        return f == null || (v = f["config.ripple"]) === null || v === void 0 ? void 0 : v.call(u, k, C);
      };
      u.$watchersCallback = {
        config: p,
        "config.ripple": g
      }, f == null || (a = f.config) === null || a === void 0 || a.call(u, u?.$primevueConfig), ae.on("config:change", p), f == null || (d = f["config.ripple"]) === null || d === void 0 || d.call(u, u == null || (c = u.$primevueConfig) === null || c === void 0 ? void 0 : c.ripple), ae.on("config:ripple:change", g);
    }, i = function(s) {
      var a = s._$instances[e].$watchersCallback;
      a && (ae.off("config:change", a.config), ae.off("config:ripple:change", a["config.ripple"]), s._$instances[e].$watchersCallback = void 0);
    };
    return {
      created: function(s, a, d, c) {
        s.$pd || (s.$pd = {}), s.$pd[e] = {
          name: e,
          attrSelector: Vt("pd")
        }, t("created", s, a, d, c);
      },
      beforeMount: function(s, a, d, c) {
        var u;
        $._loadStyles((u = s.$pd[e]) === null || u === void 0 ? void 0 : u.instance, a, d), t("beforeMount", s, a, d, c), n(s);
      },
      mounted: function(s, a, d, c) {
        var u;
        $._loadStyles((u = s.$pd[e]) === null || u === void 0 ? void 0 : u.instance, a, d), t("mounted", s, a, d, c);
      },
      beforeUpdate: function(s, a, d, c) {
        t("beforeUpdate", s, a, d, c);
      },
      updated: function(s, a, d, c) {
        var u;
        $._loadStyles((u = s.$pd[e]) === null || u === void 0 ? void 0 : u.instance, a, d), t("updated", s, a, d, c);
      },
      beforeUnmount: function(s, a, d, c) {
        var u;
        i(s), $._removeThemeListeners((u = s.$pd[e]) === null || u === void 0 ? void 0 : u.instance), t("beforeUnmount", s, a, d, c);
      },
      unmounted: function(s, a, d, c) {
        var u;
        (u = s.$pd[e]) === null || u === void 0 || (u = u.instance) === null || u === void 0 || (u = u.scopedStyleEl) === null || u === void 0 || (u = u.value) === null || u === void 0 || u.remove(), t("unmounted", s, a, d, c);
      }
    };
  },
  extend: function() {
    var e = $._getMeta.apply($, arguments), r = Jo(e, 2), t = r[0], n = r[1];
    return O({
      extend: function() {
        var l = $._getMeta.apply($, arguments), s = Jo(l, 2), a = s[0], d = s[1];
        return $.extend(a, O(O(O({}, n), n?.methods), d));
      }
    }, $._extend(t, n));
  }
}, l0 = `
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
`, s0 = {
  root: "p-ink"
}, d0 = P.extend({
  name: "ripple-directive",
  style: l0,
  classes: s0
}), c0 = $.extend({
  style: d0
});
function Fe(o) {
  "@babel/helpers - typeof";
  return Fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Fe(o);
}
function u0(o) {
  return m0(o) || g0(o) || p0(o) || f0();
}
function f0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function p0(o, e) {
  if (o) {
    if (typeof o == "string") return Co(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Co(o, e) : void 0;
  }
}
function g0(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function m0(o) {
  if (Array.isArray(o)) return Co(o);
}
function Co(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++) t[r] = o[r];
  return t;
}
function rr(o, e, r) {
  return (e = h0(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function h0(o) {
  var e = v0(o, "string");
  return Fe(e) == "symbol" ? e : e + "";
}
function v0(o, e) {
  if (Fe(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Fe(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var b0 = c0.extend("ripple", {
  watch: {
    "config.ripple": function(e) {
      e ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(e) {
    this.remove(e);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(e) {
      e.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(e) {
      e.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(e) {
      var r = this.getInk(e);
      r || (r = zt("span", rr(rr({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), e.appendChild(r), this.$el = r);
    },
    remove: function(e) {
      var r = this.getInk(e);
      r && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(e), r.removeEventListener("animationend", this.onAnimationEnd), r.remove());
    },
    onMouseDown: function(e) {
      var r = this, t = e.currentTarget, n = this.getInk(t);
      if (!(!n || getComputedStyle(n, null).display === "none")) {
        if (!this.isUnstyled() && lo(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"), !ue(n) && !fe(n)) {
          var i = Math.max(gr(t), Mt(t));
          n.style.height = i + "px", n.style.width = i + "px";
        }
        var l = jt(t), s = e.pageX - l.left + document.body.scrollTop - fe(n) / 2, a = e.pageY - l.top + document.body.scrollLeft - ue(n) / 2;
        n.style.top = a + "px", n.style.left = s + "px", !this.isUnstyled() && Ot(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          n && (!r.isUnstyled() && lo(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(e) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && lo(e.currentTarget, "p-ink-active"), e.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(e) {
      return e && e.children ? u0(e.children).find(function(r) {
        return At(r, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), y0 = `
    .p-virtualscroller-loader {
        background: dt('virtualscroller.loader.mask.background');
        color: dt('virtualscroller.loader.mask.color');
    }

    .p-virtualscroller-loading-icon {
        font-size: dt('virtualscroller.loader.icon.size');
        width: dt('virtualscroller.loader.icon.size');
        height: dt('virtualscroller.loader.icon.size');
    }
`, k0 = `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}

.p-virtualscroller .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    inset-block-start: 0;
    inset-inline-start: 0;
}
`, tr = P.extend({
  name: "virtualscroller",
  css: k0,
  style: y0
}), w0 = {
  name: "BaseVirtualScroller",
  extends: to,
  props: {
    id: {
      type: String,
      default: null
    },
    style: null,
    class: null,
    items: {
      type: Array,
      default: null
    },
    itemSize: {
      type: [Number, Array],
      default: 0
    },
    scrollHeight: null,
    scrollWidth: null,
    orientation: {
      type: String,
      default: "vertical"
    },
    numToleratedItems: {
      type: Number,
      default: null
    },
    delay: {
      type: Number,
      default: 0
    },
    resizeDelay: {
      type: Number,
      default: 10
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loaderDisabled: {
      type: Boolean,
      default: !1
    },
    columns: {
      type: Array,
      default: null
    },
    loading: {
      type: Boolean,
      default: !1
    },
    showSpacer: {
      type: Boolean,
      default: !0
    },
    showLoader: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: 0
    },
    inline: {
      type: Boolean,
      default: !1
    },
    step: {
      type: Number,
      default: 0
    },
    appendOnly: {
      type: Boolean,
      default: !1
    },
    autoSize: {
      type: Boolean,
      default: !1
    }
  },
  style: tr,
  provide: function() {
    return {
      $pcVirtualScroller: this,
      $parentInstance: this
    };
  },
  beforeMount: function() {
    var e;
    tr.loadCSS({
      nonce: (e = this.$primevueConfig) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce
    });
  }
};
function We(o) {
  "@babel/helpers - typeof";
  return We = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, We(o);
}
function nr(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Re(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? nr(Object(r), !0).forEach(function(t) {
      Ar(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : nr(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function Ar(o, e, r) {
  return (e = $0(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function $0(o) {
  var e = C0(o, "string");
  return We(e) == "symbol" ? e : e + "";
}
function C0(o, e) {
  if (We(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (We(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var jr = {
  name: "VirtualScroller",
  extends: w0,
  inheritAttrs: !1,
  emits: ["update:numToleratedItems", "scroll", "scroll-index-change", "lazy-load"],
  data: function() {
    var e = this.isBoth();
    return {
      first: e ? {
        rows: 0,
        cols: 0
      } : 0,
      last: e ? {
        rows: 0,
        cols: 0
      } : 0,
      page: e ? {
        rows: 0,
        cols: 0
      } : 0,
      numItemsInViewport: e ? {
        rows: 0,
        cols: 0
      } : 0,
      lastScrollPos: e ? {
        top: 0,
        left: 0
      } : 0,
      d_numToleratedItems: this.numToleratedItems,
      d_loading: this.loading,
      loaderArr: [],
      spacerStyle: {},
      contentStyle: {}
    };
  },
  element: null,
  content: null,
  lastScrollPos: null,
  scrollTimeout: null,
  resizeTimeout: null,
  defaultWidth: 0,
  defaultHeight: 0,
  defaultContentWidth: 0,
  defaultContentHeight: 0,
  isRangeChanged: !1,
  lazyLoadState: {},
  resizeListener: null,
  resizeObserver: null,
  initialized: !1,
  watch: {
    numToleratedItems: function(e) {
      this.d_numToleratedItems = e;
    },
    loading: function(e, r) {
      this.lazy && e !== r && e !== this.d_loading && (this.d_loading = e);
    },
    items: {
      handler: function(e, r) {
        (!r || r.length !== (e || []).length) && (this.init(), this.calculateAutoSize());
      },
      deep: !0
    },
    itemSize: function() {
      this.init(), this.calculateAutoSize();
    },
    orientation: function() {
      this.lastScrollPos = this.isBoth() ? {
        top: 0,
        left: 0
      } : 0;
    },
    scrollHeight: function() {
      this.init(), this.calculateAutoSize();
    },
    scrollWidth: function() {
      this.init(), this.calculateAutoSize();
    }
  },
  mounted: function() {
    this.viewInit(), this.lastScrollPos = this.isBoth() ? {
      top: 0,
      left: 0
    } : 0, this.lazyLoadState = this.lazyLoadState || {};
  },
  updated: function() {
    !this.initialized && this.viewInit();
  },
  unmounted: function() {
    this.unbindResizeListener(), this.initialized = !1;
  },
  methods: {
    viewInit: function() {
      Lo(this.element) && (this.setContentEl(this.content), this.init(), this.calculateAutoSize(), this.defaultWidth = fe(this.element), this.defaultHeight = ue(this.element), this.defaultContentWidth = fe(this.content), this.defaultContentHeight = ue(this.content), this.initialized = !0), this.element && this.bindResizeListener();
    },
    init: function() {
      this.disabled || (this.setSize(), this.calculateOptions(), this.setSpacerSize());
    },
    isVertical: function() {
      return this.orientation === "vertical";
    },
    isHorizontal: function() {
      return this.orientation === "horizontal";
    },
    isBoth: function() {
      return this.orientation === "both";
    },
    scrollTo: function(e) {
      this.element && this.element.scrollTo(e);
    },
    scrollToIndex: function(e) {
      var r = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto", n = this.isBoth(), i = this.isHorizontal(), l = n ? e.every(function(L) {
        return L > -1;
      }) : e > -1;
      if (l) {
        var s = this.first, a = this.element, d = a.scrollTop, c = d === void 0 ? 0 : d, u = a.scrollLeft, f = u === void 0 ? 0 : u, p = this.calculateNumItems(), g = p.numToleratedItems, b = this.getContentPosition(), h = this.itemSize, v = function() {
          var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, N = arguments.length > 1 ? arguments[1] : void 0;
          return A <= N ? 0 : A;
        }, k = function(A, N, F) {
          return A * N + F;
        }, C = function() {
          var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return r.scrollTo({
            left: A,
            top: N,
            behavior: t
          });
        }, m = n ? {
          rows: 0,
          cols: 0
        } : 0, y = !1, R = !1;
        n ? (m = {
          rows: v(e[0], g[0]),
          cols: v(e[1], g[1])
        }, C(k(m.cols, h[1], b.left), k(m.rows, h[0], b.top)), R = this.lastScrollPos.top !== c || this.lastScrollPos.left !== f, y = m.rows !== s.rows || m.cols !== s.cols) : (m = v(e, g), i ? C(k(m, h, b.left), c) : C(f, k(m, h, b.top)), R = this.lastScrollPos !== (i ? f : c), y = m !== s), this.isRangeChanged = y, R && (this.first = m);
      }
    },
    scrollInView: function(e, r) {
      var t = this, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
      if (r) {
        var i = this.isBoth(), l = this.isHorizontal(), s = i ? e.every(function(h) {
          return h > -1;
        }) : e > -1;
        if (s) {
          var a = this.getRenderedRange(), d = a.first, c = a.viewport, u = function() {
            var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return t.scrollTo({
              left: v,
              top: k,
              behavior: n
            });
          }, f = r === "to-start", p = r === "to-end";
          if (f) {
            if (i)
              c.first.rows - d.rows > e[0] ? u(c.first.cols * this.itemSize[1], (c.first.rows - 1) * this.itemSize[0]) : c.first.cols - d.cols > e[1] && u((c.first.cols - 1) * this.itemSize[1], c.first.rows * this.itemSize[0]);
            else if (c.first - d > e) {
              var g = (c.first - 1) * this.itemSize;
              l ? u(g, 0) : u(0, g);
            }
          } else if (p) {
            if (i)
              c.last.rows - d.rows <= e[0] + 1 ? u(c.first.cols * this.itemSize[1], (c.first.rows + 1) * this.itemSize[0]) : c.last.cols - d.cols <= e[1] + 1 && u((c.first.cols + 1) * this.itemSize[1], c.first.rows * this.itemSize[0]);
            else if (c.last - d <= e + 1) {
              var b = (c.first + 1) * this.itemSize;
              l ? u(b, 0) : u(0, b);
            }
          }
        }
      } else
        this.scrollToIndex(e, n);
    },
    getRenderedRange: function() {
      var e = function(u, f) {
        return Math.floor(u / (f || u));
      }, r = this.first, t = 0;
      if (this.element) {
        var n = this.isBoth(), i = this.isHorizontal(), l = this.element, s = l.scrollTop, a = l.scrollLeft;
        if (n)
          r = {
            rows: e(s, this.itemSize[0]),
            cols: e(a, this.itemSize[1])
          }, t = {
            rows: r.rows + this.numItemsInViewport.rows,
            cols: r.cols + this.numItemsInViewport.cols
          };
        else {
          var d = i ? a : s;
          r = e(d, this.itemSize), t = r + this.numItemsInViewport;
        }
      }
      return {
        first: this.first,
        last: this.last,
        viewport: {
          first: r,
          last: t
        }
      };
    },
    calculateNumItems: function() {
      var e = this.isBoth(), r = this.isHorizontal(), t = this.itemSize, n = this.getContentPosition(), i = this.element ? this.element.offsetWidth - n.left : 0, l = this.element ? this.element.offsetHeight - n.top : 0, s = function(f, p) {
        return Math.ceil(f / (p || f));
      }, a = function(f) {
        return Math.ceil(f / 2);
      }, d = e ? {
        rows: s(l, t[0]),
        cols: s(i, t[1])
      } : s(r ? i : l, t), c = this.d_numToleratedItems || (e ? [a(d.rows), a(d.cols)] : a(d));
      return {
        numItemsInViewport: d,
        numToleratedItems: c
      };
    },
    calculateOptions: function() {
      var e = this, r = this.isBoth(), t = this.first, n = this.calculateNumItems(), i = n.numItemsInViewport, l = n.numToleratedItems, s = function(c, u, f) {
        var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
        return e.getLast(c + u + (c < f ? 2 : 3) * f, p);
      }, a = r ? {
        rows: s(t.rows, i.rows, l[0]),
        cols: s(t.cols, i.cols, l[1], !0)
      } : s(t, i, l);
      this.last = a, this.numItemsInViewport = i, this.d_numToleratedItems = l, this.$emit("update:numToleratedItems", this.d_numToleratedItems), this.showLoader && (this.loaderArr = r ? Array.from({
        length: i.rows
      }).map(function() {
        return Array.from({
          length: i.cols
        });
      }) : Array.from({
        length: i
      })), this.lazy && Promise.resolve().then(function() {
        var d;
        e.lazyLoadState = {
          first: e.step ? r ? {
            rows: 0,
            cols: t.cols
          } : 0 : t,
          last: Math.min(e.step ? e.step : a, ((d = e.items) === null || d === void 0 ? void 0 : d.length) || 0)
        }, e.$emit("lazy-load", e.lazyLoadState);
      });
    },
    calculateAutoSize: function() {
      var e = this;
      this.autoSize && !this.d_loading && Promise.resolve().then(function() {
        if (e.content) {
          var r = e.isBoth(), t = e.isHorizontal(), n = e.isVertical();
          e.content.style.minHeight = e.content.style.minWidth = "auto", e.content.style.position = "relative", e.element.style.contain = "none";
          var i = [fe(e.element), ue(e.element)], l = i[0], s = i[1];
          (r || t) && (e.element.style.width = l < e.defaultWidth ? l + "px" : e.scrollWidth || e.defaultWidth + "px"), (r || n) && (e.element.style.height = s < e.defaultHeight ? s + "px" : e.scrollHeight || e.defaultHeight + "px"), e.content.style.minHeight = e.content.style.minWidth = "", e.content.style.position = "", e.element.style.contain = "";
        }
      });
    },
    getLast: function() {
      var e, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, n = arguments.length > 1 ? arguments[1] : void 0;
      return this.items ? Math.min(n ? ((e = this.columns || this.items[0]) === null || e === void 0 ? void 0 : e.length) || 0 : ((r = this.items) === null || r === void 0 ? void 0 : r.length) || 0, t) : 0;
    },
    getContentPosition: function() {
      if (this.content) {
        var e = getComputedStyle(this.content), r = parseFloat(e.paddingLeft) + Math.max(parseFloat(e.left) || 0, 0), t = parseFloat(e.paddingRight) + Math.max(parseFloat(e.right) || 0, 0), n = parseFloat(e.paddingTop) + Math.max(parseFloat(e.top) || 0, 0), i = parseFloat(e.paddingBottom) + Math.max(parseFloat(e.bottom) || 0, 0);
        return {
          left: r,
          right: t,
          top: n,
          bottom: i,
          x: r + t,
          y: n + i
        };
      }
      return {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        x: 0,
        y: 0
      };
    },
    setSize: function() {
      var e = this;
      if (this.element) {
        var r = this.isBoth(), t = this.isHorizontal(), n = this.element.parentElement, i = this.scrollWidth || "".concat(this.element.offsetWidth || n.offsetWidth, "px"), l = this.scrollHeight || "".concat(this.element.offsetHeight || n.offsetHeight, "px"), s = function(d, c) {
          return e.element.style[d] = c;
        };
        r || t ? (s("height", l), s("width", i)) : s("height", l);
      }
    },
    setSpacerSize: function() {
      var e = this, r = this.items;
      if (r) {
        var t = this.isBoth(), n = this.isHorizontal(), i = this.getContentPosition(), l = function(a, d, c) {
          var u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
          return e.spacerStyle = Re(Re({}, e.spacerStyle), Ar({}, "".concat(a), (d || []).length * c + u + "px"));
        };
        t ? (l("height", r, this.itemSize[0], i.y), l("width", this.columns || r[1], this.itemSize[1], i.x)) : n ? l("width", this.columns || r, this.itemSize, i.x) : l("height", r, this.itemSize, i.y);
      }
    },
    setContentPosition: function(e) {
      var r = this;
      if (this.content && !this.appendOnly) {
        var t = this.isBoth(), n = this.isHorizontal(), i = e ? e.first : this.first, l = function(c, u) {
          return c * u;
        }, s = function() {
          var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return r.contentStyle = Re(Re({}, r.contentStyle), {
            transform: "translate3d(".concat(c, "px, ").concat(u, "px, 0)")
          });
        };
        if (t)
          s(l(i.cols, this.itemSize[1]), l(i.rows, this.itemSize[0]));
        else {
          var a = l(i, this.itemSize);
          n ? s(a, 0) : s(0, a);
        }
      }
    },
    onScrollPositionChange: function(e) {
      var r = this, t = e.target, n = this.isBoth(), i = this.isHorizontal(), l = this.getContentPosition(), s = function(T, j) {
        return T ? T > j ? T - j : T : 0;
      }, a = function(T, j) {
        return Math.floor(T / (j || T));
      }, d = function(T, j, K, U, M, W) {
        return T <= M ? M : W ? K - U - M : j + M - 1;
      }, c = function(T, j, K, U, M, W, Y, ne) {
        if (T <= W) return 0;
        var Q = Math.max(0, Y ? T < j ? K : T - W : T > j ? K : T - 2 * W), X = r.getLast(Q, ne);
        return Q > X ? X - M : Q;
      }, u = function(T, j, K, U, M, W) {
        var Y = j + U + 2 * M;
        return T >= M && (Y += M + 1), r.getLast(Y, W);
      }, f = s(t.scrollTop, l.top), p = s(t.scrollLeft, l.left), g = n ? {
        rows: 0,
        cols: 0
      } : 0, b = this.last, h = !1, v = this.lastScrollPos;
      if (n) {
        var k = this.lastScrollPos.top <= f, C = this.lastScrollPos.left <= p;
        if (!this.appendOnly || this.appendOnly && (k || C)) {
          var m = {
            rows: a(f, this.itemSize[0]),
            cols: a(p, this.itemSize[1])
          }, y = {
            rows: d(m.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], k),
            cols: d(m.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], C)
          };
          g = {
            rows: c(m.rows, y.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], k),
            cols: c(m.cols, y.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], C, !0)
          }, b = {
            rows: u(m.rows, g.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
            cols: u(m.cols, g.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], !0)
          }, h = g.rows !== this.first.rows || b.rows !== this.last.rows || g.cols !== this.first.cols || b.cols !== this.last.cols || this.isRangeChanged, v = {
            top: f,
            left: p
          };
        }
      } else {
        var R = i ? p : f, L = this.lastScrollPos <= R;
        if (!this.appendOnly || this.appendOnly && L) {
          var A = a(R, this.itemSize), N = d(A, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, L);
          g = c(A, N, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, L), b = u(A, g, this.last, this.numItemsInViewport, this.d_numToleratedItems), h = g !== this.first || b !== this.last || this.isRangeChanged, v = R;
        }
      }
      return {
        first: g,
        last: b,
        isRangeChanged: h,
        scrollPos: v
      };
    },
    onScrollChange: function(e) {
      var r = this.onScrollPositionChange(e), t = r.first, n = r.last, i = r.isRangeChanged, l = r.scrollPos;
      if (i) {
        var s = {
          first: t,
          last: n
        };
        if (this.setContentPosition(s), this.first = t, this.last = n, this.lastScrollPos = l, this.$emit("scroll-index-change", s), this.lazy && this.isPageChanged(t)) {
          var a, d, c = {
            first: this.step ? Math.min(this.getPageByFirst(t) * this.step, (((a = this.items) === null || a === void 0 ? void 0 : a.length) || 0) - this.step) : t,
            last: Math.min(this.step ? (this.getPageByFirst(t) + 1) * this.step : n, ((d = this.items) === null || d === void 0 ? void 0 : d.length) || 0)
          }, u = this.lazyLoadState.first !== c.first || this.lazyLoadState.last !== c.last;
          u && this.$emit("lazy-load", c), this.lazyLoadState = c;
        }
      }
    },
    onScroll: function(e) {
      var r = this;
      if (this.$emit("scroll", e), this.delay) {
        if (this.scrollTimeout && clearTimeout(this.scrollTimeout), this.isPageChanged()) {
          if (!this.d_loading && this.showLoader) {
            var t = this.onScrollPositionChange(e), n = t.isRangeChanged, i = n || (this.step ? this.isPageChanged() : !1);
            i && (this.d_loading = !0);
          }
          this.scrollTimeout = setTimeout(function() {
            r.onScrollChange(e), r.d_loading && r.showLoader && (!r.lazy || r.loading === void 0) && (r.d_loading = !1, r.page = r.getPageByFirst());
          }, this.delay);
        }
      } else
        this.onScrollChange(e);
    },
    onResize: function() {
      var e = this;
      this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
        if (Lo(e.element)) {
          var r = e.isBoth(), t = e.isVertical(), n = e.isHorizontal(), i = [fe(e.element), ue(e.element)], l = i[0], s = i[1], a = l !== e.defaultWidth, d = s !== e.defaultHeight, c = r ? a || d : n ? a : t ? d : !1;
          c && (e.d_numToleratedItems = e.numToleratedItems, e.defaultWidth = l, e.defaultHeight = s, e.defaultContentWidth = fe(e.content), e.defaultContentHeight = ue(e.content), e.init());
        }
      }, this.resizeDelay);
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = this.onResize.bind(this), window.addEventListener("resize", this.resizeListener), window.addEventListener("orientationchange", this.resizeListener), this.resizeObserver = new ResizeObserver(function() {
        e.onResize();
      }), this.resizeObserver.observe(this.element));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), window.removeEventListener("orientationchange", this.resizeListener), this.resizeListener = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
    },
    getOptions: function(e) {
      var r = (this.items || []).length, t = this.isBoth() ? this.first.rows + e : this.first + e;
      return {
        index: t,
        count: r,
        first: t === 0,
        last: t === r - 1,
        even: t % 2 === 0,
        odd: t % 2 !== 0
      };
    },
    getLoaderOptions: function(e, r) {
      var t = this.loaderArr.length;
      return Re({
        index: e,
        count: t,
        first: e === 0,
        last: e === t - 1,
        even: e % 2 === 0,
        odd: e % 2 !== 0
      }, r);
    },
    getPageByFirst: function(e) {
      return Math.floor(((e ?? this.first) + this.d_numToleratedItems * 4) / (this.step || 1));
    },
    isPageChanged: function(e) {
      return this.step && !this.lazy ? this.page !== this.getPageByFirst(e ?? this.first) : !0;
    },
    setContentEl: function(e) {
      this.content = e || this.content || ro(this.element, '[data-pc-section="content"]');
    },
    elementRef: function(e) {
      this.element = e;
    },
    contentRef: function(e) {
      this.content = e;
    }
  },
  computed: {
    containerClass: function() {
      return ["p-virtualscroller", this.class, {
        "p-virtualscroller-inline": this.inline,
        "p-virtualscroller-both p-both-scroll": this.isBoth(),
        "p-virtualscroller-horizontal p-horizontal-scroll": this.isHorizontal()
      }];
    },
    contentClass: function() {
      return ["p-virtualscroller-content", {
        "p-virtualscroller-loading": this.d_loading
      }];
    },
    loaderClass: function() {
      return ["p-virtualscroller-loader", {
        "p-virtualscroller-loader-mask": !this.$slots.loader
      }];
    },
    loadedItems: function() {
      var e = this;
      return this.items && !this.d_loading ? this.isBoth() ? this.items.slice(this.appendOnly ? 0 : this.first.rows, this.last.rows).map(function(r) {
        return e.columns ? r : r.slice(e.appendOnly ? 0 : e.first.cols, e.last.cols);
      }) : this.isHorizontal() && this.columns ? this.items : this.items.slice(this.appendOnly ? 0 : this.first, this.last) : [];
    },
    loadedRows: function() {
      return this.d_loading ? this.loaderDisabled ? this.loaderArr : [] : this.loadedItems;
    },
    loadedColumns: function() {
      if (this.columns) {
        var e = this.isBoth(), r = this.isHorizontal();
        if (e || r)
          return this.d_loading && this.loaderDisabled ? e ? this.loaderArr[0] : this.loaderArr : this.columns.slice(e ? this.first.cols : this.first, e ? this.last.cols : this.last);
      }
      return this.columns;
    }
  },
  components: {
    SpinnerIcon: Bo
  }
}, S0 = ["tabindex"];
function x0(o, e, r, t, n, i) {
  var l = de("SpinnerIcon");
  return o.disabled ? (x(), I(Se, {
    key: 1
  }, [z(o.$slots, "default"), z(o.$slots, "content", {
    items: o.items,
    rows: o.items,
    columns: i.loadedColumns
  })], 64)) : (x(), I("div", w({
    key: 0,
    ref: i.elementRef,
    class: i.containerClass,
    tabindex: o.tabindex,
    style: o.style,
    onScroll: e[0] || (e[0] = function() {
      return i.onScroll && i.onScroll.apply(i, arguments);
    })
  }, o.ptmi("root")), [z(o.$slots, "content", {
    styleClass: i.contentClass,
    items: i.loadedItems,
    getItemOptions: i.getOptions,
    loading: n.d_loading,
    getLoaderOptions: i.getLoaderOptions,
    itemSize: o.itemSize,
    rows: i.loadedRows,
    columns: i.loadedColumns,
    contentRef: i.contentRef,
    spacerStyle: n.spacerStyle,
    contentStyle: n.contentStyle,
    vertical: i.isVertical(),
    horizontal: i.isHorizontal(),
    both: i.isBoth()
  }, function() {
    return [ee("div", w({
      ref: i.contentRef,
      class: i.contentClass,
      style: n.contentStyle
    }, o.ptm("content")), [(x(!0), I(Se, null, Qe(i.loadedItems, function(s, a) {
      return z(o.$slots, "item", {
        key: a,
        item: s,
        options: i.getOptions(a)
      });
    }), 128))], 16)];
  }), o.showSpacer ? (x(), I("div", w({
    key: 0,
    class: "p-virtualscroller-spacer",
    style: n.spacerStyle
  }, o.ptm("spacer")), null, 16)) : D("", !0), !o.loaderDisabled && o.showLoader && n.d_loading ? (x(), I("div", w({
    key: 1,
    class: i.loaderClass
  }, o.ptm("loader")), [o.$slots && o.$slots.loader ? (x(!0), I(Se, {
    key: 0
  }, Qe(n.loaderArr, function(s, a) {
    return z(o.$slots, "loader", {
      key: a,
      options: i.getLoaderOptions(a, i.isBoth() && {
        numCols: o.d_numItemsInViewport.cols
      })
    });
  }), 128)) : D("", !0), z(o.$slots, "loadingicon", {}, function() {
    return [ke(l, w({
      spin: "",
      class: "p-virtualscroller-loading-icon"
    }, o.ptm("loadingIcon")), null, 16)];
  })], 16)) : D("", !0)], 16, S0));
}
jr.render = x0;
var O0 = `
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
        min-width: 100%;
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled):hover {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete-input-multiple.p-disabled {
        opacity: 1;
        background: dt('autocomplete.disabled.background');
        color: dt('autocomplete.disabled.color');
    }

    .p-autocomplete-input-multiple:not(.p-disabled):hover {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple:not(.p-disabled) {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled):hover {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled) {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-autocomplete-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));
    }

    .p-autocomplete:has(.p-autocomplete-clear-icon) .p-autocomplete-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputgroup .p-autocomplete-dropdown {
        border-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child:has(.p-autocomplete-dropdown) > .p-autocomplete-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child .p-autocomplete-dropdown {
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
    }
`, B0 = {
  root: {
    position: "relative"
  }
}, I0 = {
  root: function(e) {
    var r = e.instance;
    return ["p-autocomplete p-component p-inputwrapper", {
      "p-invalid": r.$invalid,
      "p-focus": r.focused,
      "p-inputwrapper-filled": r.$filled || B(r.inputValue),
      "p-inputwrapper-focus": r.focused,
      "p-autocomplete-open": r.overlayVisible,
      "p-autocomplete-fluid": r.$fluid,
      "p-autocomplete-clearable": r.isClearIconVisible
    }];
  },
  pcInputText: "p-autocomplete-input",
  inputMultiple: function(e) {
    var r = e.instance, t = e.props;
    return ["p-autocomplete-input-multiple", {
      "p-variant-filled": r.$variant === "filled",
      "p-disabled": t.disabled
    }];
  },
  clearIcon: "p-autocomplete-clear-icon",
  chipItem: function(e) {
    var r = e.instance, t = e.i;
    return ["p-autocomplete-chip-item", {
      "p-focus": r.focusedMultipleOptionIndex === t
    }];
  },
  pcChip: "p-autocomplete-chip",
  chipIcon: "p-autocomplete-chip-icon",
  inputChip: "p-autocomplete-input-chip",
  loader: "p-autocomplete-loader",
  dropdown: "p-autocomplete-dropdown",
  overlay: "p-autocomplete-overlay p-component",
  listContainer: "p-autocomplete-list-container",
  list: "p-autocomplete-list",
  optionGroup: "p-autocomplete-option-group",
  option: function(e) {
    var r = e.instance, t = e.option, n = e.i, i = e.getItemOptions;
    return ["p-autocomplete-option", {
      "p-autocomplete-option-selected": r.isSelected(t),
      "p-focus": r.focusedOptionIndex === r.getOptionIndex(n, i),
      "p-disabled": r.isOptionDisabled(t)
    }];
  },
  emptyMessage: "p-autocomplete-empty-message"
}, _0 = P.extend({
  name: "autocomplete",
  style: O0,
  classes: I0,
  inlineStyles: B0
}), R0 = {
  name: "BaseAutoComplete",
  extends: Pr,
  props: {
    suggestions: {
      type: Array,
      default: null
    },
    optionLabel: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: {
      type: String,
      default: "14rem"
    },
    dropdown: {
      type: Boolean,
      default: !1
    },
    dropdownMode: {
      type: String,
      default: "blank"
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: null
    },
    dataKey: {
      type: String,
      default: null
    },
    minLength: {
      type: Number,
      default: 1
    },
    delay: {
      type: Number,
      default: 300
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    forceSelection: {
      type: Boolean,
      default: !1
    },
    completeOnFocus: {
      type: Boolean,
      default: !1
    },
    showClear: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String,
      default: null
    },
    inputStyle: {
      type: Object,
      default: null
    },
    inputClass: {
      type: [String, Object],
      default: null
    },
    panelStyle: {
      type: Object,
      default: null
    },
    panelClass: {
      type: [String, Object],
      default: null
    },
    overlayStyle: {
      type: Object,
      default: null
    },
    overlayClass: {
      type: [String, Object],
      default: null
    },
    dropdownIcon: {
      type: String,
      default: null
    },
    dropdownClass: {
      type: [String, Object],
      default: null
    },
    loader: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: null
    },
    removeTokenIcon: {
      type: String,
      default: null
    },
    chipIcon: {
      type: String,
      default: null
    },
    virtualScrollerOptions: {
      type: Object,
      default: null
    },
    autoOptionFocus: {
      type: Boolean,
      default: !1
    },
    selectOnFocus: {
      type: Boolean,
      default: !1
    },
    focusOnHover: {
      type: Boolean,
      default: !0
    },
    searchLocale: {
      type: String,
      default: void 0
    },
    searchMessage: {
      type: String,
      default: null
    },
    selectionMessage: {
      type: String,
      default: null
    },
    emptySelectionMessage: {
      type: String,
      default: null
    },
    emptySearchMessage: {
      type: String,
      default: null
    },
    showEmptyMessage: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    },
    typeahead: {
      type: Boolean,
      default: !0
    },
    ariaLabel: {
      type: String,
      default: null
    },
    ariaLabelledby: {
      type: String,
      default: null
    }
  },
  style: _0,
  provide: function() {
    return {
      $pcAutoComplete: this,
      $parentInstance: this
    };
  }
};
function ir(o, e, r) {
  return (e = T0(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function T0(o) {
  var e = P0(o, "string");
  return Oe(e) == "symbol" ? e : e + "";
}
function P0(o, e) {
  if (Oe(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Oe(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
function Oe(o) {
  "@babel/helpers - typeof";
  return Oe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Oe(o);
}
function Ze(o) {
  return j0(o) || A0(o) || z0(o) || L0();
}
function L0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z0(o, e) {
  if (o) {
    if (typeof o == "string") return So(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? So(o, e) : void 0;
  }
}
function A0(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function j0(o) {
  if (Array.isArray(o)) return So(o);
}
function So(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++) t[r] = o[r];
  return t;
}
var Mr = {
  name: "AutoComplete",
  extends: R0,
  inheritAttrs: !1,
  emits: ["change", "focus", "blur", "item-select", "item-unselect", "option-select", "option-unselect", "dropdown-click", "clear", "complete", "before-show", "before-hide", "show", "hide"],
  inject: {
    $pcFluid: {
      default: null
    }
  },
  outsideClickListener: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  virtualScroller: null,
  searchTimeout: null,
  dirty: !1,
  startRangeIndex: -1,
  data: function() {
    return {
      clicked: !1,
      focused: !1,
      focusedOptionIndex: -1,
      focusedMultipleOptionIndex: -1,
      overlayVisible: !1,
      searching: !1
    };
  },
  watch: {
    suggestions: function() {
      this.searching && (this.show(), this.focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, this.searching = !1, !this.showEmptyMessage && this.visibleOptions.length === 0 && this.hide()), this.autoUpdateModel();
    }
  },
  mounted: function() {
    this.autoUpdateModel();
  },
  updated: function() {
    this.overlayVisible && this.alignOverlay();
  },
  beforeUnmount: function() {
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.overlay && (so.clear(this.overlay), this.overlay = null);
  },
  methods: {
    getOptionIndex: function(e, r) {
      return this.virtualScrollerDisabled ? e : r && r(e).index;
    },
    getOptionLabel: function(e) {
      return this.optionLabel ? ce(e, this.optionLabel) : e;
    },
    getOptionValue: function(e) {
      return e;
    },
    getOptionRenderKey: function(e, r) {
      return (this.dataKey ? ce(e, this.dataKey) : this.getOptionLabel(e)) + "_" + r;
    },
    getPTOptions: function(e, r, t, n) {
      return this.ptm(n, {
        context: {
          option: e,
          index: t,
          selected: this.isSelected(e),
          focused: this.focusedOptionIndex === this.getOptionIndex(t, r),
          disabled: this.isOptionDisabled(e)
        }
      });
    },
    isOptionDisabled: function(e) {
      return this.optionDisabled ? ce(e, this.optionDisabled) : !1;
    },
    isOptionGroup: function(e) {
      return this.optionGroupLabel && e.optionGroup && e.group;
    },
    getOptionGroupLabel: function(e) {
      return ce(e, this.optionGroupLabel);
    },
    getOptionGroupChildren: function(e) {
      return ce(e, this.optionGroupChildren);
    },
    getAriaPosInset: function(e) {
      var r = this;
      return (this.optionGroupLabel ? e - this.visibleOptions.slice(0, e).filter(function(t) {
        return r.isOptionGroup(t);
      }).length : e) + 1;
    },
    show: function(e) {
      this.$emit("before-show"), this.dirty = !0, this.overlayVisible = !0, this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, e && se(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    hide: function(e) {
      var r = this, t = function() {
        var i;
        r.$emit("before-hide"), r.dirty = e, r.overlayVisible = !1, r.clicked = !1, r.focusedOptionIndex = -1, e && se(r.multiple ? r.$refs.focusInput : (i = r.$refs.focusInput) === null || i === void 0 ? void 0 : i.$el);
      };
      setTimeout(function() {
        t();
      }, 0);
    },
    onFocus: function(e) {
      this.disabled || (!this.dirty && this.completeOnFocus && this.search(e, e.target.value, "focus"), this.dirty = !0, this.focused = !0, this.overlayVisible && (this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, this.scrollInView(this.focusedOptionIndex)), this.$emit("focus", e));
    },
    onBlur: function(e) {
      var r, t;
      this.dirty = !1, this.focused = !1, this.focusedOptionIndex = -1, this.$emit("blur", e), (r = (t = this.formField).onBlur) === null || r === void 0 || r.call(t);
    },
    onKeyDown: function(e) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(e);
          break;
        case "ArrowRight":
          this.onArrowRightKey(e);
          break;
        case "Home":
          this.onHomeKey(e);
          break;
        case "End":
          this.onEndKey(e);
          break;
        case "PageDown":
          this.onPageDownKey(e);
          break;
        case "PageUp":
          this.onPageUpKey(e);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(e);
          break;
        case "Space":
          this.onSpaceKey(e);
          break;
        case "Escape":
          this.onEscapeKey(e);
          break;
        case "Tab":
          this.onTabKey(e);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this.onShiftKey(e);
          break;
        case "Backspace":
          this.onBackspaceKey(e);
          break;
      }
      this.clicked = !1;
    },
    onInput: function(e) {
      var r = this;
      if (this.typeahead) {
        this.searchTimeout && clearTimeout(this.searchTimeout);
        var t = e.target.value;
        this.multiple || this.updateModel(e, t), t.length === 0 ? (this.searching = !1, this.hide(), this.$emit("clear")) : t.length >= this.minLength ? (this.focusedOptionIndex = -1, this.searchTimeout = setTimeout(function() {
          r.search(e, t, "input");
        }, this.delay)) : (this.searching = !1, this.hide());
      }
    },
    onChange: function(e) {
      var r = this;
      if (this.forceSelection) {
        var t = !1;
        if (this.visibleOptions && !this.multiple) {
          var n, i = this.multiple ? this.$refs.focusInput.value : (n = this.$refs.focusInput) === null || n === void 0 || (n = n.$el) === null || n === void 0 ? void 0 : n.value, l = this.visibleOptions.find(function(d) {
            return r.isOptionMatched(d, i || "");
          });
          l !== void 0 && (t = !0, !this.isSelected(l) && this.onOptionSelect(e, l));
        }
        if (!t) {
          if (this.multiple)
            this.$refs.focusInput.value = "";
          else {
            var s, a = (s = this.$refs.focusInput) === null || s === void 0 ? void 0 : s.$el;
            a && (a.value = "");
          }
          this.$emit("clear"), !this.multiple && this.updateModel(e, null);
        }
      }
    },
    onMultipleContainerFocus: function() {
      this.disabled || (this.focused = !0);
    },
    onMultipleContainerBlur: function() {
      this.focusedMultipleOptionIndex = -1, this.focused = !1;
    },
    onMultipleContainerKeyDown: function(e) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      switch (e.code) {
        case "ArrowLeft":
          this.onArrowLeftKeyOnMultiple(e);
          break;
        case "ArrowRight":
          this.onArrowRightKeyOnMultiple(e);
          break;
        case "Backspace":
          this.onBackspaceKeyOnMultiple(e);
          break;
      }
    },
    onContainerClick: function(e) {
      this.clicked = !0, !(this.disabled || this.searching || this.loading || this.isDropdownClicked(e)) && (!this.overlay || !this.overlay.contains(e.target)) && se(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    onDropdownClick: function(e) {
      var r = void 0;
      if (this.overlayVisible)
        this.hide(!0);
      else {
        var t = this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el;
        se(t), r = t.value, this.dropdownMode === "blank" ? this.search(e, "", "dropdown") : this.dropdownMode === "current" && this.search(e, r, "dropdown");
      }
      this.$emit("dropdown-click", {
        originalEvent: e,
        query: r
      });
    },
    onOptionSelect: function(e, r) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, n = this.getOptionValue(r);
      this.multiple ? (this.$refs.focusInput.value = "", this.isSelected(r) || this.updateModel(e, [].concat(Ze(this.d_value || []), [n]))) : this.updateModel(e, n), this.$emit("item-select", {
        originalEvent: e,
        value: r
      }), this.$emit("option-select", {
        originalEvent: e,
        value: r
      }), t && this.hide(!0);
    },
    onOptionMouseMove: function(e, r) {
      this.focusOnHover && this.changeFocusedOptionIndex(e, r);
    },
    onOptionSelectRange: function(e) {
      var r = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
      if (t === -1 && (t = this.findNearestSelectedOptionIndex(n, !0)), n === -1 && (n = this.findNearestSelectedOptionIndex(t)), t !== -1 && n !== -1) {
        var i = Math.min(t, n), l = Math.max(t, n), s = this.visibleOptions.slice(i, l + 1).filter(function(a) {
          return r.isValidOption(a);
        }).filter(function(a) {
          return !r.isSelected(a);
        }).map(function(a) {
          return r.getOptionValue(a);
        });
        this.updateModel(e, [].concat(Ze(this.d_value || []), Ze(s)));
      }
    },
    onClearClick: function(e) {
      this.updateModel(e, null);
    },
    onOverlayClick: function(e) {
      Jg.emit("overlay-click", {
        originalEvent: e,
        target: this.$el
      });
    },
    onOverlayKeyDown: function(e) {
      e.code === "Escape" && this.onEscapeKey(e);
    },
    onArrowDownKey: function(e) {
      if (this.overlayVisible) {
        var r = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
        this.multiple && e.shiftKey && this.onOptionSelectRange(e, this.startRangeIndex, r), this.changeFocusedOptionIndex(e, r), e.preventDefault();
      }
    },
    onArrowUpKey: function(e) {
      if (this.overlayVisible)
        if (e.altKey)
          this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide(), e.preventDefault();
        else {
          var r = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
          this.multiple && e.shiftKey && this.onOptionSelectRange(e, r, this.startRangeIndex), this.changeFocusedOptionIndex(e, r), e.preventDefault();
        }
    },
    onArrowLeftKey: function(e) {
      var r = e.currentTarget;
      this.focusedOptionIndex = -1, this.multiple && (Be(r.value) && this.$filled ? (se(this.$refs.multiContainer), this.focusedMultipleOptionIndex = this.d_value.length) : e.stopPropagation());
    },
    onArrowRightKey: function(e) {
      this.focusedOptionIndex = -1, this.multiple && e.stopPropagation();
    },
    onHomeKey: function(e) {
      var r = e.currentTarget, t = r.value.length, n = e.metaKey || e.ctrlKey, i = this.findFirstOptionIndex();
      this.multiple && e.shiftKey && n && this.onOptionSelectRange(e, i, this.startRangeIndex), r.setSelectionRange(0, e.shiftKey ? t : 0), this.focusedOptionIndex = -1, e.preventDefault();
    },
    onEndKey: function(e) {
      var r = e.currentTarget, t = r.value.length, n = e.metaKey || e.ctrlKey, i = this.findLastOptionIndex();
      this.multiple && e.shiftKey && n && this.onOptionSelectRange(e, this.startRangeIndex, i), r.setSelectionRange(e.shiftKey ? 0 : t, t), this.focusedOptionIndex = -1, e.preventDefault();
    },
    onPageUpKey: function(e) {
      this.scrollInView(0), e.preventDefault();
    },
    onPageDownKey: function(e) {
      this.scrollInView(this.visibleOptions.length - 1), e.preventDefault();
    },
    onEnterKey: function(e) {
      this.typeahead ? this.overlayVisible ? (this.focusedOptionIndex !== -1 && (this.multiple && e.shiftKey ? (this.onOptionSelectRange(e, this.focusedOptionIndex), e.preventDefault()) : this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex])), this.hide()) : (this.focusedOptionIndex = -1, this.onArrowDownKey(e)) : this.multiple && (e.target.value.trim() && (this.updateModel(e, [].concat(Ze(this.d_value || []), [e.target.value.trim()])), this.$refs.focusInput.value = ""), e.preventDefault());
    },
    onSpaceKey: function(e) {
      !this.autoOptionFocus && this.focusedOptionIndex !== -1 && this.onEnterKey(e);
    },
    onEscapeKey: function(e) {
      this.overlayVisible && this.hide(!0), e.preventDefault();
    },
    onTabKey: function(e) {
      this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide();
    },
    onShiftKey: function() {
      this.startRangeIndex = this.focusedOptionIndex;
    },
    onBackspaceKey: function(e) {
      if (this.multiple) {
        if (B(this.d_value) && !this.$refs.focusInput.value) {
          var r = this.d_value[this.d_value.length - 1], t = this.d_value.slice(0, -1);
          this.writeValue(t, e), this.$emit("item-unselect", {
            originalEvent: e,
            value: r
          }), this.$emit("option-unselect", {
            originalEvent: e,
            value: r
          });
        }
        e.stopPropagation();
      }
    },
    onArrowLeftKeyOnMultiple: function() {
      this.focusedMultipleOptionIndex = this.focusedMultipleOptionIndex < 1 ? 0 : this.focusedMultipleOptionIndex - 1;
    },
    onArrowRightKeyOnMultiple: function() {
      this.focusedMultipleOptionIndex++, this.focusedMultipleOptionIndex > this.d_value.length - 1 && (this.focusedMultipleOptionIndex = -1, se(this.$refs.focusInput));
    },
    onBackspaceKeyOnMultiple: function(e) {
      this.focusedMultipleOptionIndex !== -1 && this.removeOption(e, this.focusedMultipleOptionIndex);
    },
    onOverlayEnter: function(e) {
      so.set("overlay", e, this.$primevue.config.zIndex.overlay), Tt(e, {
        position: "absolute",
        top: "0"
      }), this.alignOverlay(), this.$attrSelector && e.setAttribute(this.$attrSelector, "");
    },
    onOverlayAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onOverlayLeave: function() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.overlay = null;
    },
    onOverlayAfterLeave: function(e) {
      so.clear(e);
    },
    alignOverlay: function() {
      var e = this.multiple ? this.$refs.multiContainer : this.$refs.focusInput.$el;
      this.appendTo === "self" ? Pt(this.overlay, e) : (this.overlay.style.minWidth = gr(e) + "px", Rt(this.overlay, e));
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(r) {
        e.overlayVisible && e.overlay && e.isOutsideClicked(r) && e.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var e = this;
      this.scrollHandler || (this.scrollHandler = new eg(this.$refs.container, function() {
        e.overlayVisible && e.hide();
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function() {
        e.overlayVisible && !Et() && e.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    isOutsideClicked: function(e) {
      return !this.overlay.contains(e.target) && !this.isInputClicked(e) && !this.isDropdownClicked(e);
    },
    isInputClicked: function(e) {
      return this.multiple ? e.target === this.$refs.multiContainer || this.$refs.multiContainer.contains(e.target) : e.target === this.$refs.focusInput.$el;
    },
    isDropdownClicked: function(e) {
      return this.$refs.dropdownButton ? e.target === this.$refs.dropdownButton || this.$refs.dropdownButton.contains(e.target) : !1;
    },
    isOptionMatched: function(e, r) {
      var t;
      return this.isValidOption(e) && ((t = this.getOptionLabel(e)) === null || t === void 0 ? void 0 : t.toLocaleLowerCase(this.searchLocale)) === r.toLocaleLowerCase(this.searchLocale);
    },
    isValidOption: function(e) {
      return B(e) && !(this.isOptionDisabled(e) || this.isOptionGroup(e));
    },
    isValidSelectedOption: function(e) {
      return this.isValidOption(e) && this.isSelected(e);
    },
    isEquals: function(e, r) {
      return kt(e, r, this.equalityKey);
    },
    isSelected: function(e) {
      var r = this, t = this.getOptionValue(e);
      return this.multiple ? (this.d_value || []).some(function(n) {
        return r.isEquals(n, t);
      }) : this.isEquals(this.d_value, this.getOptionValue(e));
    },
    findFirstOptionIndex: function() {
      var e = this;
      return this.visibleOptions.findIndex(function(r) {
        return e.isValidOption(r);
      });
    },
    findLastOptionIndex: function() {
      var e = this;
      return ao(this.visibleOptions, function(r) {
        return e.isValidOption(r);
      });
    },
    findNextOptionIndex: function(e) {
      var r = this, t = e < this.visibleOptions.length - 1 ? this.visibleOptions.slice(e + 1).findIndex(function(n) {
        return r.isValidOption(n);
      }) : -1;
      return t > -1 ? t + e + 1 : e;
    },
    findPrevOptionIndex: function(e) {
      var r = this, t = e > 0 ? ao(this.visibleOptions.slice(0, e), function(n) {
        return r.isValidOption(n);
      }) : -1;
      return t > -1 ? t : e;
    },
    findSelectedOptionIndex: function() {
      var e = this;
      return this.$filled ? this.visibleOptions.findIndex(function(r) {
        return e.isValidSelectedOption(r);
      }) : -1;
    },
    findFirstFocusedOptionIndex: function() {
      var e = this.findSelectedOptionIndex();
      return e < 0 ? this.findFirstOptionIndex() : e;
    },
    findLastFocusedOptionIndex: function() {
      var e = this.findSelectedOptionIndex();
      return e < 0 ? this.findLastOptionIndex() : e;
    },
    search: function(e, r, t) {
      r != null && (t === "input" && r.trim().length === 0 || (this.searching = !0, this.$emit("complete", {
        originalEvent: e,
        query: r
      })));
    },
    removeOption: function(e, r) {
      var t = this, n = this.d_value[r], i = this.d_value.filter(function(l, s) {
        return s !== r;
      }).map(function(l) {
        return t.getOptionValue(l);
      });
      this.updateModel(e, i), this.$emit("item-unselect", {
        originalEvent: e,
        value: n
      }), this.$emit("option-unselect", {
        originalEvent: e,
        value: n
      }), this.dirty = !0, se(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    changeFocusedOptionIndex: function(e, r) {
      this.focusedOptionIndex !== r && (this.focusedOptionIndex = r, this.scrollInView(), this.selectOnFocus && this.onOptionSelect(e, this.visibleOptions[r], !1));
    },
    scrollInView: function() {
      var e = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      this.$nextTick(function() {
        var t = r !== -1 ? "".concat(e.$id, "_").concat(r) : e.focusedOptionId, n = ro(e.list, 'li[id="'.concat(t, '"]'));
        n ? n.scrollIntoView && n.scrollIntoView({
          block: "nearest",
          inline: "start"
        }) : e.virtualScrollerDisabled || e.virtualScroller && e.virtualScroller.scrollToIndex(r !== -1 ? r : e.focusedOptionIndex);
      });
    },
    autoUpdateModel: function() {
      this.selectOnFocus && this.autoOptionFocus && !this.$filled && (this.focusedOptionIndex = this.findFirstFocusedOptionIndex(), this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], !1));
    },
    updateModel: function(e, r) {
      this.writeValue(r, e), this.$emit("change", {
        originalEvent: e,
        value: r
      });
    },
    flatOptions: function(e) {
      var r = this;
      return (e || []).reduce(function(t, n, i) {
        t.push({
          optionGroup: n,
          group: !0,
          index: i
        });
        var l = r.getOptionGroupChildren(n);
        return l && l.forEach(function(s) {
          return t.push(s);
        }), t;
      }, []);
    },
    overlayRef: function(e) {
      this.overlay = e;
    },
    listRef: function(e, r) {
      this.list = e, r && r(e);
    },
    virtualScrollerRef: function(e) {
      this.virtualScroller = e;
    },
    findNextSelectedOptionIndex: function(e) {
      var r = this, t = this.$filled && e < this.visibleOptions.length - 1 ? this.visibleOptions.slice(e + 1).findIndex(function(n) {
        return r.isValidSelectedOption(n);
      }) : -1;
      return t > -1 ? t + e + 1 : -1;
    },
    findPrevSelectedOptionIndex: function(e) {
      var r = this, t = this.$filled && e > 0 ? ao(this.visibleOptions.slice(0, e), function(n) {
        return r.isValidSelectedOption(n);
      }) : -1;
      return t > -1 ? t : -1;
    },
    findNearestSelectedOptionIndex: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = -1;
      return this.$filled && (r ? (t = this.findPrevSelectedOptionIndex(e), t = t === -1 ? this.findNextSelectedOptionIndex(e) : t) : (t = this.findNextSelectedOptionIndex(e), t = t === -1 ? this.findPrevSelectedOptionIndex(e) : t)), t > -1 ? t : e;
    }
  },
  computed: {
    visibleOptions: function() {
      return this.optionGroupLabel ? this.flatOptions(this.suggestions) : this.suggestions || [];
    },
    inputValue: function() {
      if (this.$filled)
        if (Oe(this.d_value) === "object") {
          var e = this.getOptionLabel(this.d_value);
          return e ?? this.d_value;
        } else
          return this.d_value;
      else
        return "";
    },
    // @deprecated use $filled instead.
    hasSelectedOption: function() {
      return this.$filled;
    },
    equalityKey: function() {
      return this.dataKey;
    },
    searchResultMessageText: function() {
      return B(this.visibleOptions) && this.overlayVisible ? this.searchMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptySearchMessageText;
    },
    searchMessageText: function() {
      return this.searchMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptySearchMessageText: function() {
      return this.emptySearchMessage || this.$primevue.config.locale.emptySearchMessage || "";
    },
    selectionMessageText: function() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText: function() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText: function() {
      return this.$filled ? this.selectionMessageText.replaceAll("{0}", this.multiple ? this.d_value.length : "1") : this.emptySelectionMessageText;
    },
    listAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : void 0;
    },
    focusedOptionId: function() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.$id, "_").concat(this.focusedOptionIndex) : null;
    },
    focusedMultipleOptionId: function() {
      return this.focusedMultipleOptionIndex !== -1 ? "".concat(this.$id, "_multiple_option_").concat(this.focusedMultipleOptionIndex) : null;
    },
    isClearIconVisible: function() {
      return this.showClear && this.$filled && !this.disabled && !this.loading;
    },
    ariaSetSize: function() {
      var e = this;
      return this.visibleOptions.filter(function(r) {
        return !e.isOptionGroup(r);
      }).length;
    },
    virtualScrollerDisabled: function() {
      return !this.virtualScrollerOptions;
    },
    panelId: function() {
      return this.$id + "_panel";
    },
    containerDataP: function() {
      return xe({
        fluid: this.$fluid
      });
    },
    overlayDataP: function() {
      return xe(ir({}, "portal-" + this.appendTo, "portal-" + this.appendTo));
    },
    inputMultipleDataP: function() {
      return xe(ir({
        invalid: this.$invalid,
        disabled: this.disabled,
        focus: this.focused,
        fluid: this.$fluid,
        filled: this.$variant === "filled",
        empty: !this.$filled
      }, this.size, this.size));
    }
  },
  components: {
    InputText: Lr,
    VirtualScroller: jr,
    Portal: zr,
    Chip: Tr,
    ChevronDownIcon: Ir,
    SpinnerIcon: Bo,
    TimesIcon: _r
  },
  directives: {
    ripple: b0
  }
};
function He(o) {
  "@babel/helpers - typeof";
  return He = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, He(o);
}
function ar(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function lr(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ar(Object(r), !0).forEach(function(t) {
      M0(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : ar(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function M0(o, e, r) {
  return (e = D0(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function D0(o) {
  var e = E0(o, "string");
  return He(e) == "symbol" ? e : e + "";
}
function E0(o, e) {
  if (He(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (He(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var N0 = ["data-p"], V0 = ["aria-activedescendant", "data-p-has-dropdown", "data-p"], F0 = ["id", "aria-label", "aria-setsize", "aria-posinset"], W0 = ["id", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"], H0 = ["data-p-has-dropdown"], K0 = ["disabled", "aria-expanded", "aria-controls"], U0 = ["id", "data-p"], G0 = ["id", "aria-label"], Y0 = ["id"], X0 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-selected", "data-p-focused", "data-p-disabled"];
function q0(o, e, r, t, n, i) {
  var l = de("InputText"), s = de("TimesIcon"), a = de("Chip"), d = de("SpinnerIcon"), c = de("VirtualScroller"), u = de("Portal"), f = st("ripple");
  return x(), I("div", w({
    ref: "container",
    class: o.cx("root"),
    style: o.sx("root"),
    onClick: e[11] || (e[11] = function() {
      return i.onContainerClick && i.onContainerClick.apply(i, arguments);
    }),
    "data-p": i.containerDataP
  }, o.ptmi("root")), [o.multiple ? D("", !0) : (x(), ge(l, {
    key: 0,
    ref: "focusInput",
    id: o.inputId,
    type: "text",
    name: o.$formName,
    class: be([o.cx("pcInputText"), o.inputClass]),
    style: sr(o.inputStyle),
    defaultValue: i.inputValue,
    placeholder: o.placeholder,
    tabindex: o.disabled ? -1 : o.tabindex,
    fluid: o.$fluid,
    disabled: o.disabled,
    size: o.size,
    invalid: o.invalid,
    variant: o.variant,
    autocomplete: "off",
    role: "combobox",
    "aria-label": o.ariaLabel,
    "aria-labelledby": o.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-expanded": n.overlayVisible,
    "aria-controls": n.overlayVisible ? i.panelId : void 0,
    "aria-activedescendant": n.focused ? i.focusedOptionId : void 0,
    onFocus: i.onFocus,
    onBlur: i.onBlur,
    onKeydown: i.onKeyDown,
    onInput: i.onInput,
    onChange: i.onChange,
    unstyled: o.unstyled,
    "data-p-has-dropdown": o.dropdown,
    pt: o.ptm("pcInputText")
  }, null, 8, ["id", "name", "class", "style", "defaultValue", "placeholder", "tabindex", "fluid", "disabled", "size", "invalid", "variant", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "onFocus", "onBlur", "onKeydown", "onInput", "onChange", "unstyled", "data-p-has-dropdown", "pt"])), i.isClearIconVisible ? z(o.$slots, "clearicon", {
    key: 1,
    class: be(o.cx("clearIcon")),
    clearCallback: i.onClearClick
  }, function() {
    return [ke(s, w({
      class: [o.cx("clearIcon")],
      onClick: i.onClearClick
    }, o.ptm("clearIcon")), null, 16, ["class", "onClick"])];
  }) : D("", !0), o.multiple ? (x(), I("ul", w({
    key: 2,
    ref: "multiContainer",
    class: o.cx("inputMultiple"),
    tabindex: "-1",
    role: "listbox",
    "aria-orientation": "horizontal",
    "aria-activedescendant": n.focused ? i.focusedMultipleOptionId : void 0,
    onFocus: e[5] || (e[5] = function() {
      return i.onMultipleContainerFocus && i.onMultipleContainerFocus.apply(i, arguments);
    }),
    onBlur: e[6] || (e[6] = function() {
      return i.onMultipleContainerBlur && i.onMultipleContainerBlur.apply(i, arguments);
    }),
    onKeydown: e[7] || (e[7] = function() {
      return i.onMultipleContainerKeyDown && i.onMultipleContainerKeyDown.apply(i, arguments);
    }),
    "data-p-has-dropdown": o.dropdown,
    "data-p": i.inputMultipleDataP
  }, o.ptm("inputMultiple")), [(x(!0), I(Se, null, Qe(o.d_value, function(p, g) {
    return x(), I("li", w({
      key: "".concat(g, "_").concat(i.getOptionLabel(p)),
      id: o.$id + "_multiple_option_" + g,
      class: o.cx("chipItem", {
        i: g
      }),
      role: "option",
      "aria-label": i.getOptionLabel(p),
      "aria-selected": !0,
      "aria-setsize": o.d_value.length,
      "aria-posinset": g + 1
    }, {
      ref_for: !0
    }, o.ptm("chipItem")), [z(o.$slots, "chip", w({
      class: o.cx("pcChip"),
      value: p,
      index: g,
      removeCallback: function(h) {
        return i.removeOption(h, g);
      }
    }, {
      ref_for: !0
    }, o.ptm("pcChip")), function() {
      return [ke(a, {
        class: be(o.cx("pcChip")),
        label: i.getOptionLabel(p),
        removeIcon: o.chipIcon || o.removeTokenIcon,
        removable: "",
        unstyled: o.unstyled,
        onRemove: function(h) {
          return i.removeOption(h, g);
        },
        "data-p-focused": n.focusedMultipleOptionIndex === g,
        pt: o.ptm("pcChip")
      }, {
        removeicon: Ie(function() {
          return [z(o.$slots, o.$slots.chipicon ? "chipicon" : "removetokenicon", {
            class: be(o.cx("chipIcon")),
            index: g,
            removeCallback: function(h) {
              return i.removeOption(h, g);
            }
          })];
        }),
        _: 2
      }, 1032, ["class", "label", "removeIcon", "unstyled", "onRemove", "data-p-focused", "pt"])];
    })], 16, F0);
  }), 128)), ee("li", w({
    class: o.cx("inputChip"),
    role: "option"
  }, o.ptm("inputChip")), [ee("input", w({
    ref: "focusInput",
    id: o.inputId,
    type: "text",
    style: o.inputStyle,
    class: o.inputClass,
    placeholder: o.placeholder,
    tabindex: o.disabled ? -1 : o.tabindex,
    disabled: o.disabled,
    autocomplete: "off",
    role: "combobox",
    "aria-label": o.ariaLabel,
    "aria-labelledby": o.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-expanded": n.overlayVisible,
    "aria-controls": o.$id + "_list",
    "aria-activedescendant": n.focused ? i.focusedOptionId : void 0,
    "aria-invalid": o.invalid || void 0,
    onFocus: e[0] || (e[0] = function() {
      return i.onFocus && i.onFocus.apply(i, arguments);
    }),
    onBlur: e[1] || (e[1] = function() {
      return i.onBlur && i.onBlur.apply(i, arguments);
    }),
    onKeydown: e[2] || (e[2] = function() {
      return i.onKeyDown && i.onKeyDown.apply(i, arguments);
    }),
    onInput: e[3] || (e[3] = function() {
      return i.onInput && i.onInput.apply(i, arguments);
    }),
    onChange: e[4] || (e[4] = function() {
      return i.onChange && i.onChange.apply(i, arguments);
    })
  }, o.ptm("input")), null, 16, W0)], 16)], 16, V0)) : D("", !0), n.searching || o.loading ? z(o.$slots, o.$slots.loader ? "loader" : "loadingicon", {
    key: 3,
    class: be(o.cx("loader"))
  }, function() {
    return [o.loader || o.loadingIcon ? (x(), I("i", w({
      key: 0,
      class: ["pi-spin", o.cx("loader"), o.loader, o.loadingIcon],
      "aria-hidden": "true",
      "data-p-has-dropdown": o.dropdown
    }, o.ptm("loader")), null, 16, H0)) : o.loading ? (x(), ge(d, w({
      key: 1,
      class: o.cx("loader"),
      spin: "",
      "aria-hidden": "true",
      "data-p-has-dropdown": o.dropdown
    }, o.ptm("loader")), null, 16, ["class", "data-p-has-dropdown"])) : D("", !0)];
  }) : D("", !0), z(o.$slots, o.$slots.dropdown ? "dropdown" : "dropdownbutton", {
    toggleCallback: function(g) {
      return i.onDropdownClick(g);
    }
  }, function() {
    return [o.dropdown ? (x(), I("button", w({
      key: 0,
      ref: "dropdownButton",
      type: "button",
      class: [o.cx("dropdown"), o.dropdownClass],
      disabled: o.disabled,
      "aria-haspopup": "listbox",
      "aria-expanded": n.overlayVisible,
      "aria-controls": i.panelId,
      onClick: e[8] || (e[8] = function() {
        return i.onDropdownClick && i.onDropdownClick.apply(i, arguments);
      })
    }, o.ptm("dropdown")), [z(o.$slots, "dropdownicon", {
      class: be(o.dropdownIcon)
    }, function() {
      return [(x(), ge(fo(o.dropdownIcon ? "span" : "ChevronDownIcon"), w({
        class: o.dropdownIcon
      }, o.ptm("dropdownIcon")), null, 16, ["class"]))];
    })], 16, K0)) : D("", !0)];
  }), o.typeahead ? (x(), I("span", w({
    key: 4,
    role: "status",
    "aria-live": "polite",
    class: "p-hidden-accessible"
  }, o.ptm("hiddenSearchResult"), {
    "data-p-hidden-accessible": !0
  }), ye(i.searchResultMessageText), 17)) : D("", !0), ke(u, {
    appendTo: o.appendTo
  }, {
    default: Ie(function() {
      return [ke(dt, w({
        name: "p-anchored-overlay",
        onEnter: i.onOverlayEnter,
        onAfterEnter: i.onOverlayAfterEnter,
        onLeave: i.onOverlayLeave,
        onAfterLeave: i.onOverlayAfterLeave
      }, o.ptm("transition")), {
        default: Ie(function() {
          return [n.overlayVisible ? (x(), I("div", w({
            key: 0,
            ref: i.overlayRef,
            id: i.panelId,
            class: [o.cx("overlay"), o.panelClass, o.overlayClass],
            style: lr(lr({}, o.panelStyle), o.overlayStyle),
            onClick: e[9] || (e[9] = function() {
              return i.onOverlayClick && i.onOverlayClick.apply(i, arguments);
            }),
            onKeydown: e[10] || (e[10] = function() {
              return i.onOverlayKeyDown && i.onOverlayKeyDown.apply(i, arguments);
            }),
            "data-p": i.overlayDataP
          }, o.ptm("overlay")), [z(o.$slots, "header", {
            value: o.d_value,
            suggestions: i.visibleOptions
          }), ee("div", w({
            class: o.cx("listContainer"),
            style: {
              "max-height": i.virtualScrollerDisabled ? o.scrollHeight : ""
            }
          }, o.ptm("listContainer")), [ke(c, w({
            ref: i.virtualScrollerRef
          }, o.virtualScrollerOptions, {
            style: {
              height: o.scrollHeight
            },
            items: i.visibleOptions,
            tabindex: -1,
            disabled: i.virtualScrollerDisabled,
            pt: o.ptm("virtualScroller")
          }), ct({
            content: Ie(function(p) {
              var g = p.styleClass, b = p.contentRef, h = p.items, v = p.getItemOptions, k = p.contentStyle, C = p.itemSize;
              return [ee("ul", w({
                ref: function(y) {
                  return i.listRef(y, b);
                },
                id: o.$id + "_list",
                class: [o.cx("list"), g],
                style: k,
                role: "listbox",
                "aria-label": i.listAriaLabel
              }, o.ptm("list")), [(x(!0), I(Se, null, Qe(h, function(m, y) {
                return x(), I(Se, {
                  key: i.getOptionRenderKey(m, i.getOptionIndex(y, v))
                }, [i.isOptionGroup(m) ? (x(), I("li", w({
                  key: 0,
                  id: o.$id + "_" + i.getOptionIndex(y, v),
                  style: {
                    height: C ? C + "px" : void 0
                  },
                  class: o.cx("optionGroup"),
                  role: "option"
                }, {
                  ref_for: !0
                }, o.ptm("optionGroup")), [z(o.$slots, "optiongroup", {
                  option: m.optionGroup,
                  index: i.getOptionIndex(y, v)
                }, function() {
                  return [io(ye(i.getOptionGroupLabel(m.optionGroup)), 1)];
                })], 16, Y0)) : ut((x(), I("li", w({
                  key: 1,
                  id: o.$id + "_" + i.getOptionIndex(y, v),
                  style: {
                    height: C ? C + "px" : void 0
                  },
                  class: o.cx("option", {
                    option: m,
                    i: y,
                    getItemOptions: v
                  }),
                  role: "option",
                  "aria-label": i.getOptionLabel(m),
                  "aria-selected": i.isSelected(m),
                  "aria-disabled": i.isOptionDisabled(m),
                  "aria-setsize": i.ariaSetSize,
                  "aria-posinset": i.getAriaPosInset(i.getOptionIndex(y, v)),
                  onClick: function(L) {
                    return i.onOptionSelect(L, m);
                  },
                  onMousemove: function(L) {
                    return i.onOptionMouseMove(L, i.getOptionIndex(y, v));
                  },
                  "data-p-selected": i.isSelected(m),
                  "data-p-focused": n.focusedOptionIndex === i.getOptionIndex(y, v),
                  "data-p-disabled": i.isOptionDisabled(m)
                }, {
                  ref_for: !0
                }, i.getPTOptions(m, v, y, "option")), [z(o.$slots, "option", {
                  option: m,
                  index: i.getOptionIndex(y, v)
                }, function() {
                  return [io(ye(i.getOptionLabel(m)), 1)];
                })], 16, X0)), [[f]])], 64);
              }), 128)), o.showEmptyMessage && (!h || h && h.length === 0) ? (x(), I("li", w({
                key: 0,
                class: o.cx("emptyMessage"),
                role: "option"
              }, o.ptm("emptyMessage")), [z(o.$slots, "empty", {}, function() {
                return [io(ye(i.searchResultMessageText), 1)];
              })], 16)) : D("", !0)], 16, G0)];
            }),
            _: 2
          }, [o.$slots.loader ? {
            name: "loader",
            fn: Ie(function(p) {
              var g = p.options;
              return [z(o.$slots, "loader", {
                options: g
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["style", "items", "disabled", "pt"])], 16), z(o.$slots, "footer", {
            value: o.d_value,
            suggestions: i.visibleOptions
          }), ee("span", w({
            role: "status",
            "aria-live": "polite",
            class: "p-hidden-accessible"
          }, o.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": !0
          }), ye(i.selectedMessageText), 17)], 16, U0)) : D("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16, N0);
}
Mr.render = q0;
const Z0 = /* @__PURE__ */ ft({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(o) {
    const e = pe(""), r = pe([]), t = pe({});
    $e(e, (i) => {
      const l = t.value[i];
      l && o._p.f.call("msg", {
        type: "autocomplete:select",
        custom: { selectedValue: l },
        // send full product to engine
        _p: o._p,
        _$p: o._$p
      });
    });
    const n = async (i) => {
      const l = i.query.trim();
      if (!l) return;
      console.log("[AutoComplete query]", l);
      const s = o._$p.data.curr.data.api, d = await (await fetch(s.url, {
        method: s.method,
        headers: { "Content-Type": "application/json", ...s.headers },
        body: JSON.stringify({ ...s.body, q: l })
        // send input as q
      })).json();
      t.value = {}, r.value = d.data.products.map((c) => (t.value[c.title] = c, c.title));
    };
    return (i, l) => (x(), ge(pt(Mr), {
      modelValue: e.value,
      "onUpdate:modelValue": l[0] || (l[0] = (s) => e.value = s),
      suggestions: r.value,
      placeholder: o._$p.data.curr.data.placeholder,
      class: "w-full md:w-56",
      style: sr(o._$p.data.curr.data.style),
      onComplete: n
    }, null, 8, ["modelValue", "suggestions", "placeholder", "style"]));
  }
}), J0 = async (o) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const t = gt(Z0, {
      _p: o,
      _$p: e
    });
    t.use(xn, {
      theme: {
        preset: Yp
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
    }, i = document.getElementById(o.f.name("vue-root"));
    return t.mount(i), n;
  }
});
export {
  J0 as hydrator,
  J0 as index
};
