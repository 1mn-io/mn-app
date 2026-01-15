import { am as F, ad as Q, ap as X, an as I, ao as w, B as k, ak as L, al as V, n as Y, aq as R, l as Z, ar as A, Z as z, Q as G, P as E, T as B, a1 as N, v as J, C as ee, E as ne, W as te, U as re } from "./main-BuXBcYFI.js";
import { B as D } from "./index-YqnL2il-.js";
import { m as ae } from "./runtime-dom.esm-bundler-C71lIG0B.js";
function ie(...t) {
  if (t) {
    let e = [];
    for (let n = 0; n < t.length; n++) {
      let r = t[n];
      if (!r) continue;
      let a = typeof r;
      if (a === "string" || a === "number") e.push(r);
      else if (a === "object") {
        let s = Array.isArray(r) ? [ie(...r)] : Object.entries(r).map(([v, o]) => o ? v : void 0);
        e = s.length ? e.concat(s.filter((v) => !!v)) : e;
      }
    }
    return e.join(" ").trim();
  }
}
var j = {};
function oe(t = "pui_id_") {
  return Object.hasOwn(j, t) || (j[t] = 0), j[t]++, `${t}${j[t]}`;
}
function O(t) {
  "@babel/helpers - typeof";
  return O = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, O(t);
}
function W(t, e) {
  return de(t) || se(t, e) || le(t, e) || ue();
}
function ue() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function le(t, e) {
  if (t) {
    if (typeof t == "string") return H(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? H(t, e) : void 0;
  }
}
function H(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function se(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, a, s, v, o = [], i = !0, d = !1;
    try {
      if (s = (n = n.call(t)).next, e !== 0) for (; !(i = (r = s.call(n)).done) && (o.push(r.value), o.length !== e); i = !0) ;
    } catch (m) {
      d = !0, a = m;
    } finally {
      try {
        if (!i && n.return != null && (v = n.return(), Object(v) !== v)) return;
      } finally {
        if (d) throw a;
      }
    }
    return o;
  }
}
function de(t) {
  if (Array.isArray(t)) return t;
}
function K(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function f(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? K(Object(n), !0).forEach(function(r) {
      M(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function M(t, e, n) {
  return (e = ve(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ve(t) {
  var e = ce(t, "string");
  return O(e) == "symbol" ? e : e + "";
}
function ce(t, e) {
  if (O(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (O(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var c = {
  _getMeta: function() {
    return [R(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], Y(R(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(e, n) {
    var r, a, s;
    return (r = (e == null || (a = e.instance) === null || a === void 0 ? void 0 : a.$primevue) || (n == null || (s = n.ctx) === null || s === void 0 || (s = s.appContext) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.globalProperties) === null || s === void 0 ? void 0 : s.$primevue)) === null || r === void 0 ? void 0 : r.config;
  },
  _getOptionValue: F,
  _getPTValue: function() {
    var e, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = function() {
      var T = c._getOptionValue.apply(c, arguments);
      return L(T) || z(T) ? {
        class: T
      } : T;
    }, d = ((e = r.binding) === null || e === void 0 || (e = e.value) === null || e === void 0 ? void 0 : e.ptOptions) || ((n = r.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, m = d.mergeSections, u = m === void 0 ? !0 : m, g = d.mergeProps, h = g === void 0 ? !1 : g, y = o ? c._useDefaultPT(r, r.defaultPT(), i, s, v) : void 0, $ = c._usePT(r, c._getPT(a, r.$name), i, s, f(f({}, v), {}, {
      global: y || {}
    })), _ = c._getPTDatasets(r, s);
    return u || !u && $ ? h ? c._mergeProps(r, h, y, $, _) : f(f(f({}, y), $), _) : f(f({}, $), _);
  },
  _getPTDatasets: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = "data-pc-";
    return f(f({}, n === "root" && M({}, "".concat(r, "name"), V(e.$name))), {}, M({}, "".concat(r, "section"), V(n)));
  },
  _getPT: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, a = function(v) {
      var o, i = r ? r(v) : v, d = V(n);
      return (o = i?.[d]) !== null && o !== void 0 ? o : i;
    };
    return e && Object.hasOwn(e, "_usept") ? {
      _usept: e._usept,
      originalValue: a(e.originalValue),
      value: a(e.value)
    } : a(e);
  },
  _usePT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0, v = function(_) {
      return r(_, a, s);
    };
    if (n && Object.hasOwn(n, "_usept")) {
      var o, i = n._usept || ((o = e.$primevueConfig) === null || o === void 0 ? void 0 : o.ptOptions) || {}, d = i.mergeSections, m = d === void 0 ? !0 : d, u = i.mergeProps, g = u === void 0 ? !1 : u, h = v(n.originalValue), y = v(n.value);
      return h === void 0 && y === void 0 ? void 0 : L(y) ? y : L(h) ? h : m || !m && y ? g ? c._mergeProps(e, g, h, y) : f(f({}, h), y) : y;
    }
    return v(n);
  },
  _useDefaultPT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0;
    return c._usePT(e, n, r, a, s);
  },
  _loadStyles: function() {
    var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, a = arguments.length > 2 ? arguments[2] : void 0, s = c._getConfig(r, a), v = {
      nonce: s == null || (e = s.csp) === null || e === void 0 ? void 0 : e.nonce
    };
    c._loadCoreStyles(n, v), c._loadThemeStyles(n, v), c._loadScopedThemeStyles(n, v), c._removeThemeListeners(n), n.$loadStyles = function() {
      return c._loadThemeStyles(n, v);
    }, c._themeChangeListener(n.$loadStyles);
  },
  _loadCoreStyles: function() {
    var e, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
    if (!D.isStyleNameLoaded((e = r.$style) === null || e === void 0 ? void 0 : e.name) && (n = r.$style) !== null && n !== void 0 && n.name) {
      var s;
      k.loadCSS(a), (s = r.$style) === null || s === void 0 || s.loadCSS(a), D.setLoadedStyleName(r.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var e, n, r, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (!(a != null && a.isUnstyled() || (a == null || (e = a.theme) === null || e === void 0 ? void 0 : e.call(a)) === "none")) {
      if (!w.isStyleNameLoaded("common")) {
        var v, o, i = ((v = a.$style) === null || v === void 0 || (o = v.getCommonTheme) === null || o === void 0 ? void 0 : o.call(v)) || {}, d = i.primitive, m = i.semantic, u = i.global, g = i.style;
        k.load(d?.css, f({
          name: "primitive-variables"
        }, s)), k.load(m?.css, f({
          name: "semantic-variables"
        }, s)), k.load(u?.css, f({
          name: "global-variables"
        }, s)), k.loadStyle(f({
          name: "global-style"
        }, s), g), w.setLoadedStyleName("common");
      }
      if (!w.isStyleNameLoaded((n = a.$style) === null || n === void 0 ? void 0 : n.name) && (r = a.$style) !== null && r !== void 0 && r.name) {
        var h, y, $, _, S = ((h = a.$style) === null || h === void 0 || (y = h.getDirectiveTheme) === null || y === void 0 ? void 0 : y.call(h)) || {}, T = S.css, b = S.style;
        ($ = a.$style) === null || $ === void 0 || $.load(T, f({
          name: "".concat(a.$style.name, "-variables")
        }, s)), (_ = a.$style) === null || _ === void 0 || _.loadStyle(f({
          name: "".concat(a.$style.name, "-style")
        }, s), b), w.setLoadedStyleName(a.$style.name);
      }
      if (!w.isStyleNameLoaded("layer-order")) {
        var l, p, P = (l = a.$style) === null || l === void 0 || (p = l.getLayerOrderThemeCSS) === null || p === void 0 ? void 0 : p.call(l);
        k.load(P, f({
          name: "layer-order",
          first: !0
        }, s)), w.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = e.preset();
    if (r && e.$attrSelector) {
      var a, s, v, o = ((a = e.$style) === null || a === void 0 || (s = a.getPresetTheme) === null || s === void 0 ? void 0 : s.call(a, r, "[".concat(e.$attrSelector, "]"))) || {}, i = o.css, d = (v = e.$style) === null || v === void 0 ? void 0 : v.load(i, f({
        name: "".concat(e.$attrSelector, "-").concat(e.$style.name)
      }, n));
      e.scopedStyleEl = d.el;
    }
  },
  _themeChangeListener: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    D.clearLoadedStyleNames(), I.on("theme:change", e);
  },
  _removeThemeListeners: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    I.off("theme:change", e.$loadStyles), e.$loadStyles = void 0;
  },
  _hook: function(e, n, r, a, s, v) {
    var o, i, d = "on".concat(X(n)), m = c._getConfig(a, s), u = r?.$instance, g = c._usePT(u, c._getPT(a == null || (o = a.value) === null || o === void 0 ? void 0 : o.pt, e), c._getOptionValue, "hooks.".concat(d)), h = c._useDefaultPT(u, m == null || (i = m.pt) === null || i === void 0 || (i = i.directives) === null || i === void 0 ? void 0 : i[e], c._getOptionValue, "hooks.".concat(d)), y = {
      el: r,
      binding: a,
      vnode: s,
      prevVnode: v
    };
    g?.(u, y), h?.(u, y);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
      r[a - 2] = arguments[a];
    return Q(e) ? e.apply(void 0, r) : ae.apply(void 0, r);
  },
  _extend: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = function(o, i, d, m, u) {
      var g, h, y, $;
      i._$instances = i._$instances || {};
      var _ = c._getConfig(d, m), S = i._$instances[e] || {}, T = Z(S) ? f(f({}, n), n?.methods) : {};
      i._$instances[e] = f(f({}, S), {}, {
        /* new instance variables to pass in directive methods */
        $name: e,
        $host: i,
        $binding: d,
        $modifiers: d?.modifiers,
        $value: d?.value,
        $el: S.$el || i || void 0,
        $style: f({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, n?.style),
        $primevueConfig: _,
        $attrSelector: (g = i.$pd) === null || g === void 0 || (g = g[e]) === null || g === void 0 ? void 0 : g.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return c._getPT(_?.pt, void 0, function(l) {
            var p;
            return l == null || (p = l.directives) === null || p === void 0 ? void 0 : p[e];
          });
        },
        isUnstyled: function() {
          var l, p;
          return ((l = i._$instances[e]) === null || l === void 0 || (l = l.$binding) === null || l === void 0 || (l = l.value) === null || l === void 0 ? void 0 : l.unstyled) !== void 0 ? (p = i._$instances[e]) === null || p === void 0 || (p = p.$binding) === null || p === void 0 || (p = p.value) === null || p === void 0 ? void 0 : p.unstyled : _?.unstyled;
        },
        theme: function() {
          var l;
          return (l = i._$instances[e]) === null || l === void 0 || (l = l.$primevueConfig) === null || l === void 0 ? void 0 : l.theme;
        },
        preset: function() {
          var l;
          return (l = i._$instances[e]) === null || l === void 0 || (l = l.$binding) === null || l === void 0 || (l = l.value) === null || l === void 0 ? void 0 : l.dt;
        },
        /* instance's methods */
        ptm: function() {
          var l, p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return c._getPTValue(i._$instances[e], (l = i._$instances[e]) === null || l === void 0 || (l = l.$binding) === null || l === void 0 || (l = l.value) === null || l === void 0 ? void 0 : l.pt, p, f({}, P));
        },
        ptmo: function() {
          var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return c._getPTValue(i._$instances[e], l, p, P, !1);
        },
        cx: function() {
          var l, p, P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (l = i._$instances[e]) !== null && l !== void 0 && l.isUnstyled() ? void 0 : c._getOptionValue((p = i._$instances[e]) === null || p === void 0 || (p = p.$style) === null || p === void 0 ? void 0 : p.classes, P, f({}, x));
        },
        sx: function() {
          var l, p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return P ? c._getOptionValue((l = i._$instances[e]) === null || l === void 0 || (l = l.$style) === null || l === void 0 ? void 0 : l.inlineStyles, p, f({}, x)) : void 0;
        }
      }, T), i.$instance = i._$instances[e], (h = (y = i.$instance)[o]) === null || h === void 0 || h.call(y, i, d, m, u), i["$".concat(e)] = i.$instance, c._hook(e, o, i, d, m, u), i.$pd || (i.$pd = {}), i.$pd[e] = f(f({}, ($ = i.$pd) === null || $ === void 0 ? void 0 : $[e]), {}, {
        name: e,
        instance: i._$instances[e]
      });
    }, a = function(o) {
      var i, d, m, u = o._$instances[e], g = u?.watch, h = function(_) {
        var S, T = _.newValue, b = _.oldValue;
        return g == null || (S = g.config) === null || S === void 0 ? void 0 : S.call(u, T, b);
      }, y = function(_) {
        var S, T = _.newValue, b = _.oldValue;
        return g == null || (S = g["config.ripple"]) === null || S === void 0 ? void 0 : S.call(u, T, b);
      };
      u.$watchersCallback = {
        config: h,
        "config.ripple": y
      }, g == null || (i = g.config) === null || i === void 0 || i.call(u, u?.$primevueConfig), A.on("config:change", h), g == null || (d = g["config.ripple"]) === null || d === void 0 || d.call(u, u == null || (m = u.$primevueConfig) === null || m === void 0 ? void 0 : m.ripple), A.on("config:ripple:change", y);
    }, s = function(o) {
      var i = o._$instances[e].$watchersCallback;
      i && (A.off("config:change", i.config), A.off("config:ripple:change", i["config.ripple"]), o._$instances[e].$watchersCallback = void 0);
    };
    return {
      created: function(o, i, d, m) {
        o.$pd || (o.$pd = {}), o.$pd[e] = {
          name: e,
          attrSelector: oe("pd")
        }, r("created", o, i, d, m);
      },
      beforeMount: function(o, i, d, m) {
        var u;
        c._loadStyles((u = o.$pd[e]) === null || u === void 0 ? void 0 : u.instance, i, d), r("beforeMount", o, i, d, m), a(o);
      },
      mounted: function(o, i, d, m) {
        var u;
        c._loadStyles((u = o.$pd[e]) === null || u === void 0 ? void 0 : u.instance, i, d), r("mounted", o, i, d, m);
      },
      beforeUpdate: function(o, i, d, m) {
        r("beforeUpdate", o, i, d, m);
      },
      updated: function(o, i, d, m) {
        var u;
        c._loadStyles((u = o.$pd[e]) === null || u === void 0 ? void 0 : u.instance, i, d), r("updated", o, i, d, m);
      },
      beforeUnmount: function(o, i, d, m) {
        var u;
        s(o), c._removeThemeListeners((u = o.$pd[e]) === null || u === void 0 ? void 0 : u.instance), r("beforeUnmount", o, i, d, m);
      },
      unmounted: function(o, i, d, m) {
        var u;
        (u = o.$pd[e]) === null || u === void 0 || (u = u.instance) === null || u === void 0 || (u = u.scopedStyleEl) === null || u === void 0 || (u = u.value) === null || u === void 0 || u.remove(), r("unmounted", o, i, d, m);
      }
    };
  },
  extend: function() {
    var e = c._getMeta.apply(c, arguments), n = W(e, 2), r = n[0], a = n[1];
    return f({
      extend: function() {
        var v = c._getMeta.apply(c, arguments), o = W(v, 2), i = o[0], d = o[1];
        return c.extend(i, f(f(f({}, a), a?.methods), d));
      }
    }, c._extend(r, a));
  }
}, me = `
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
`, fe = {
  root: "p-ink"
}, ge = k.extend({
  name: "ripple-directive",
  style: me,
  classes: fe
}), pe = c.extend({
  style: ge
});
function C(t) {
  "@babel/helpers - typeof";
  return C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, C(t);
}
function he(t) {
  return $e(t) || be(t) || _e(t) || ye();
}
function ye() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _e(t, e) {
  if (t) {
    if (typeof t == "string") return U(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? U(t, e) : void 0;
  }
}
function be(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function $e(t) {
  if (Array.isArray(t)) return U(t);
}
function U(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function q(t, e, n) {
  return (e = Se(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Se(t) {
  var e = Te(t, "string");
  return C(e) == "symbol" ? e : e + "";
}
function Te(t, e) {
  if (C(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (C(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Oe = pe.extend("ripple", {
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
      var n = this.getInk(e);
      n || (n = re("span", q(q({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), e.appendChild(n), this.$el = n);
    },
    remove: function(e) {
      var n = this.getInk(e);
      n && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(e), n.removeEventListener("animationend", this.onAnimationEnd), n.remove());
    },
    onMouseDown: function(e) {
      var n = this, r = e.currentTarget, a = this.getInk(r);
      if (!(!a || getComputedStyle(a, null).display === "none")) {
        if (!this.isUnstyled() && E(a, "p-ink-active"), a.setAttribute("data-p-ink-active", "false"), !B(a) && !N(a)) {
          var s = Math.max(J(r), ee(r));
          a.style.height = s + "px", a.style.width = s + "px";
        }
        var v = ne(r), o = e.pageX - v.left + document.body.scrollTop - N(a) / 2, i = e.pageY - v.top + document.body.scrollLeft - B(a) / 2;
        a.style.top = i + "px", a.style.left = o + "px", !this.isUnstyled() && te(a, "p-ink-active"), a.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          a && (!n.isUnstyled() && E(a, "p-ink-active"), a.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(e) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && E(e.currentTarget, "p-ink-active"), e.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(e) {
      return e && e.children ? he(e.children).find(function(n) {
        return G(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
});
export {
  c as B,
  Oe as R,
  ie as f,
  oe as s
};
