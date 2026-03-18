import { i as Dt, d as Be, r as U, o as k, c as N, a as G, b as jt, e as It, f as _, w as qt, v as Mt, g as zt, h as Ee, F as Re, j as ze, k as Ht, m as ct, t as te, l as He, n as Vt, p as Jt } from "./runtime-dom.esm-bundler-h1-Z24qo.js";
const Wt = /* @__PURE__ */ Symbol("");
function Kt() {
  return Dt(Wt);
}
function ut(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Xt } = Object.prototype, { getPrototypeOf: Fe } = Object, { iterator: be, toStringTag: dt } = Symbol, ye = /* @__PURE__ */ ((e) => (t) => {
  const n = Xt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), j = (e) => (e = e.toLowerCase(), (t) => ye(t) === e), ge = (e) => (t) => typeof t === e, { isArray: Z } = Array, Q = ge("undefined");
function re(e) {
  return e !== null && !Q(e) && e.constructor !== null && !Q(e.constructor) && B(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ft = j("ArrayBuffer");
function Gt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ft(e.buffer), t;
}
const Qt = ge("string"), B = ge("function"), pt = ge("number"), se = (e) => e !== null && typeof e == "object", Zt = (e) => e === !0 || e === !1, de = (e) => {
  if (ye(e) !== "object")
    return !1;
  const t = Fe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(dt in e) && !(be in e);
}, Yt = (e) => {
  if (!se(e) || re(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, en = j("Date"), tn = j("File"), nn = (e) => !!(e && typeof e.uri < "u"), rn = (e) => e && typeof e.getParts < "u", sn = j("Blob"), on = j("FileList"), an = (e) => se(e) && B(e.pipe);
function ln() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Ve = ln(), Je = typeof Ve.FormData < "u" ? Ve.FormData : void 0, cn = (e) => {
  let t;
  return e && (Je && e instanceof Je || B(e.append) && ((t = ye(e)) === "formdata" || // detect form-data instance
  t === "object" && B(e.toString) && e.toString() === "[object FormData]"));
}, un = j("URLSearchParams"), [dn, fn, pn, hn] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(j), mn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function oe(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Z(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (re(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function ht(e, t) {
  if (re(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const H = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, mt = (e) => !Q(e) && e !== H;
function Ae() {
  const { caseless: e, skipUndefined: t } = mt(this) && this || {}, n = {}, r = (s, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const i = e && ht(n, o) || o;
    de(n[i]) && de(s) ? n[i] = Ae(n[i], s) : de(s) ? n[i] = Ae({}, s) : Z(s) ? n[i] = s.slice() : (!t || !Q(s)) && (n[i] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && oe(arguments[s], r);
  return n;
}
const bn = (e, t, n, { allOwnKeys: r } = {}) => (oe(
  t,
  (s, o) => {
    n && B(s) ? Object.defineProperty(e, o, {
      value: ut(s, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, o, {
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), yn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), gn = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, wn = (e, t, n, r) => {
  let s, o, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Fe(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, xn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, _n = (e) => {
  if (!e) return null;
  if (Z(e)) return e;
  let t = e.length;
  if (!pt(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, En = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Fe(Uint8Array)), Rn = (e, t) => {
  const r = (e && e[be]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Sn = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, On = j("HTMLFormElement"), Tn = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
  return r.toUpperCase() + s;
}), We = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), vn = j("RegExp"), bt = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  oe(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, kn = (e) => {
  bt(e, (t, n) => {
    if (B(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (B(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, An = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Z(e) ? r(e) : r(String(e).split(t)), n;
}, Cn = () => {
}, Nn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Pn(e) {
  return !!(e && B(e.append) && e[dt] === "FormData" && e[be]);
}
const $n = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (se(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (re(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Z(r) ? [] : {};
        return oe(r, (i, a) => {
          const f = n(i, s + 1);
          !Q(f) && (o[a] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Ln = j("AsyncFunction"), Bn = (e) => e && (se(e) || B(e)) && B(e.then) && B(e.catch), yt = ((e, t) => e ? setImmediate : t ? ((n, r) => (H.addEventListener(
  "message",
  ({ source: s, data: o }) => {
    s === H && o === n && r.length && r.shift()();
  },
  !1
), (s) => {
  r.push(s), H.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", B(H.postMessage)), Fn = typeof queueMicrotask < "u" ? queueMicrotask.bind(H) : typeof process < "u" && process.nextTick || yt, Un = (e) => e != null && B(e[be]), l = {
  isArray: Z,
  isArrayBuffer: ft,
  isBuffer: re,
  isFormData: cn,
  isArrayBufferView: Gt,
  isString: Qt,
  isNumber: pt,
  isBoolean: Zt,
  isObject: se,
  isPlainObject: de,
  isEmptyObject: Yt,
  isReadableStream: dn,
  isRequest: fn,
  isResponse: pn,
  isHeaders: hn,
  isUndefined: Q,
  isDate: en,
  isFile: tn,
  isReactNativeBlob: nn,
  isReactNative: rn,
  isBlob: sn,
  isRegExp: vn,
  isFunction: B,
  isStream: an,
  isURLSearchParams: un,
  isTypedArray: En,
  isFileList: on,
  forEach: oe,
  merge: Ae,
  extend: bn,
  trim: mn,
  stripBOM: yn,
  inherits: gn,
  toFlatObject: wn,
  kindOf: ye,
  kindOfTest: j,
  endsWith: xn,
  toArray: _n,
  forEachEntry: Rn,
  matchAll: Sn,
  isHTMLForm: On,
  hasOwnProperty: We,
  hasOwnProp: We,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: bt,
  freezeMethods: kn,
  toObjectSet: An,
  toCamelCase: Tn,
  noop: Cn,
  toFiniteNumber: Nn,
  findKey: ht,
  global: H,
  isContextDefined: mt,
  isSpecCompliantForm: Pn,
  toJSONObject: $n,
  isAsyncFn: Ln,
  isThenable: Bn,
  setImmediate: yt,
  asap: Fn,
  isIterable: Un
};
let g = class gt extends Error {
  static from(t, n, r, s, o, i) {
    const a = new gt(t.message, n || t.code, r, s, o);
    return a.cause = t, a.name = t.name, t.status != null && a.status == null && (a.status = t.status), i && Object.assign(a, i), a;
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
  constructor(t, n, r, s, o) {
    super(t), Object.defineProperty(this, "message", {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), s && (this.request = s), o && (this.response = o, this.status = o.status);
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
      config: l.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
g.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
g.ERR_BAD_OPTION = "ERR_BAD_OPTION";
g.ECONNABORTED = "ECONNABORTED";
g.ETIMEDOUT = "ETIMEDOUT";
g.ERR_NETWORK = "ERR_NETWORK";
g.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
g.ERR_DEPRECATED = "ERR_DEPRECATED";
g.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
g.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
g.ERR_CANCELED = "ERR_CANCELED";
g.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
g.ERR_INVALID_URL = "ERR_INVALID_URL";
const Dn = null;
function Ce(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function wt(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Se(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = wt(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function jn(e) {
  return l.isArray(e) && !e.some(Ce);
}
const In = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function we(e, t, n) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = l.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(m, h) {
      return !l.isUndefined(h[m]);
    }
  );
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null) return "";
    if (l.isDate(d))
      return d.toISOString();
    if (l.isBoolean(d))
      return d.toString();
    if (!f && l.isBlob(d))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(d) || l.isTypedArray(d) ? f && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function u(d, m, h) {
    let R = d;
    if (l.isReactNative(t) && l.isReactNativeBlob(d))
      return t.append(Se(h, m, o), c(d)), !1;
    if (d && !h && typeof d == "object") {
      if (l.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (l.isArray(d) && jn(d) || (l.isFileList(d) || l.endsWith(m, "[]")) && (R = l.toArray(d)))
        return m = wt(m), R.forEach(function(E, v) {
          !(l.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Se([m], v, o) : i === null ? m : m + "[]",
            c(E)
          );
        }), !1;
    }
    return Ce(d) ? !0 : (t.append(Se(h, m, o), c(d)), !1);
  }
  const p = [], w = Object.assign(In, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Ce
  });
  function O(d, m) {
    if (!l.isUndefined(d)) {
      if (p.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      p.push(d), l.forEach(d, function(R, C) {
        (!(l.isUndefined(R) || R === null) && s.call(t, R, l.isString(C) ? C.trim() : C, m, w)) === !0 && O(R, m ? m.concat(C) : [C]);
      }), p.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return O(e), t;
}
function Ke(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Ue(e, t) {
  this._pairs = [], e && we(e, this, t);
}
const xt = Ue.prototype;
xt.append = function(t, n) {
  this._pairs.push([t, n]);
};
xt.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ke);
  } : Ke;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function qn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function _t(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || qn, s = l.isFunction(n) ? {
    serialize: n
  } : n, o = s && s.serialize;
  let i;
  if (o ? i = o(t, s) : i = l.isURLSearchParams(t) ? t.toString() : new Ue(t, s).toString(r), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Xe {
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
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
  forEach(t) {
    l.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const De = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Mn = typeof URLSearchParams < "u" ? URLSearchParams : Ue, zn = typeof FormData < "u" ? FormData : null, Hn = typeof Blob < "u" ? Blob : null, Vn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Mn,
    FormData: zn,
    Blob: Hn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, je = typeof window < "u" && typeof document < "u", Ne = typeof navigator == "object" && navigator || void 0, Jn = je && (!Ne || ["ReactNative", "NativeScript", "NS"].indexOf(Ne.product) < 0), Wn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Kn = je && window.location.href || "http://localhost", Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: je,
  hasStandardBrowserEnv: Jn,
  hasStandardBrowserWebWorkerEnv: Wn,
  navigator: Ne,
  origin: Kn
}, Symbol.toStringTag, { value: "Module" })), A = {
  ...Xn,
  ...Vn
};
function Gn(e, t) {
  return we(e, new A.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return A.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Qn(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Zn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Et(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), f = o >= n.length;
    return i = !i && l.isArray(s) ? s.length : i, f ? (l.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !l.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && l.isArray(s[i]) && (s[i] = Zn(s[i])), !a);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const n = {};
    return l.forEachEntry(e, (r, s) => {
      t(Qn(r), s, n, 0);
    }), n;
  }
  return null;
}
function Yn(e, t, n) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ie = {
  transitional: De,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = l.isObject(t);
      if (o && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
        return s ? JSON.stringify(Et(t)) : t;
      if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t) || l.isReadableStream(t))
        return t;
      if (l.isArrayBufferView(t))
        return t.buffer;
      if (l.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Gn(t, this.formSerializer).toString();
        if ((a = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const f = this.env && this.env.FormData;
          return we(
            a ? { "files[]": t } : t,
            f && new f(),
            this.formSerializer
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), Yn(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || ie.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
      if (l.isResponse(t) || l.isReadableStream(t))
        return t;
      if (t && l.isString(t) && (r && !this.responseType || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (a) {
          if (i)
            throw a.name === "SyntaxError" ? g.from(a, g.ERR_BAD_RESPONSE, this, null, this.response) : a;
        }
      }
      return t;
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
    FormData: A.classes.FormData,
    Blob: A.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
l.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ie.headers[e] = {};
});
const er = l.toObjectSet([
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
]), tr = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && er[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ge = /* @__PURE__ */ Symbol("internals");
function ne(e) {
  return e && String(e).trim().toLowerCase();
}
function fe(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(fe) : String(e);
}
function nr(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const rr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Oe(e, t, n, r, s) {
  if (l.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!l.isString(t)) {
    if (l.isString(r))
      return t.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(t);
  }
}
function sr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function or(e, t) {
  const n = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let F = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, f, c) {
      const u = ne(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = l.findKey(s, u);
      (!p || s[p] === void 0 || c === !0 || c === void 0 && s[p] !== !1) && (s[p || f] = fe(a));
    }
    const i = (a, f) => l.forEach(a, (c, u) => o(c, u, f));
    if (l.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (l.isString(t) && (t = t.trim()) && !rr(t))
      i(tr(t), n);
    else if (l.isObject(t) && l.isIterable(t)) {
      let a = {}, f, c;
      for (const u of t) {
        if (!l.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[c = u[0]] = (f = a[c]) ? l.isArray(f) ? [...f, u[1]] : [f, u[1]] : u[1];
      }
      i(a, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = ne(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return nr(s);
        if (l.isFunction(n))
          return n.call(this, s, r);
        if (l.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ne(t), t) {
      const r = l.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Oe(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = ne(i), i) {
        const a = l.findKey(r, i);
        a && (!n || Oe(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return l.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Oe(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return l.forEach(this, (s, o) => {
      const i = l.findKey(r, o);
      if (i) {
        n[i] = fe(s), delete n[o];
        return;
      }
      const a = t ? sr(o) : String(o).trim();
      a !== o && delete n[o], n[a] = fe(s), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && l.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Ge] = this[Ge] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = ne(i);
      r[a] || (or(s, i), r[a] = !0);
    }
    return l.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
F.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
l.reduceDescriptors(F.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
l.freezeMethods(F);
function Te(e, t) {
  const n = this || ie, r = t || n, s = F.from(r.headers);
  let o = r.data;
  return l.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Rt(e) {
  return !!(e && e.__CANCEL__);
}
let ae = class extends g {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, r) {
    super(t ?? "canceled", g.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function St(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(
    new g(
      "Request failed with status code " + n.status,
      [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    )
  );
}
function ir(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ar(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const c = Date.now(), u = r[o];
    i || (i = c), n[s] = f, r[s] = c;
    let p = o, w = 0;
    for (; p !== s; )
      w += n[p++], p = p % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - i < t)
      return;
    const O = u && c - u;
    return O ? Math.round(w * 1e3 / O) : void 0;
  };
}
function lr(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (c, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), e(...c);
  };
  return [(...c) => {
    const u = Date.now(), p = u - n;
    p >= r ? i(c, u) : (s = c, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - p)));
  }, () => s && i(s)];
}
const he = (e, t, n = 3) => {
  let r = 0;
  const s = ar(50, 250);
  return lr((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, f = i - r, c = s(f), u = i <= a;
    r = i;
    const p = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: f,
      rate: c || void 0,
      estimated: c && a && u ? (a - i) / c : void 0,
      event: o,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, n);
}, Qe = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, Ze = (e) => (...t) => l.asap(() => e(...t)), cr = A.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, A.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(A.origin),
  A.navigator && /(msie|trident)/i.test(A.navigator.userAgent)
) : () => !0, ur = A.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o, i) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      l.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), l.isString(r) && a.push(`path=${r}`), l.isString(s) && a.push(`domain=${s}`), o === !0 && a.push("secure"), l.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
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
function dr(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function fr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ot(e, t, n) {
  let r = !dr(t);
  return e && (r || n == !1) ? fr(e, t) : t;
}
const Ye = (e) => e instanceof F ? { ...e } : e;
function J(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, p, w) {
    return l.isPlainObject(c) && l.isPlainObject(u) ? l.merge.call({ caseless: w }, c, u) : l.isPlainObject(u) ? l.merge({}, u) : l.isArray(u) ? u.slice() : u;
  }
  function s(c, u, p, w) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(c))
        return r(void 0, c, p, w);
    } else return r(c, u, p, w);
  }
  function o(c, u) {
    if (!l.isUndefined(u))
      return r(void 0, u);
  }
  function i(c, u) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function a(c, u, p) {
    if (p in t)
      return r(c, u);
    if (p in e)
      return r(void 0, c);
  }
  const f = {
    url: o,
    method: o,
    data: o,
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
    validateStatus: a,
    headers: (c, u, p) => s(Ye(c), Ye(u), p, !0)
  };
  return l.forEach(Object.keys({ ...e, ...t }), function(u) {
    if (u === "__proto__" || u === "constructor" || u === "prototype") return;
    const p = l.hasOwnProp(f, u) ? f[u] : s, w = p(e[u], t[u], u);
    l.isUndefined(w) && p !== a || (n[u] = w);
  }), n;
}
const Tt = (e) => {
  const t = J({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = t;
  if (t.headers = i = F.from(i), t.url = _t(
    Ot(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), a && i.set(
    "Authorization",
    "Basic " + btoa(
      (a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")
    )
  ), l.isFormData(n)) {
    if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (l.isFunction(n.getHeaders)) {
      const f = n.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(f).forEach(([u, p]) => {
        c.includes(u.toLowerCase()) && i.set(u, p);
      });
    }
  }
  if (A.hasStandardBrowserEnv && (r && l.isFunction(r) && (r = r(t)), r || r !== !1 && cr(t.url))) {
    const f = s && o && ur.read(o);
    f && i.set(s, f);
  }
  return t;
}, pr = typeof XMLHttpRequest < "u", hr = pr && function(e) {
  return new Promise(function(n, r) {
    const s = Tt(e);
    let o = s.data;
    const i = F.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: f, onDownloadProgress: c } = s, u, p, w, O, d;
    function m() {
      O && O(), d && d(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function R() {
      if (!h)
        return;
      const E = F.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), P = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: E,
        config: e,
        request: h
      };
      St(
        function($) {
          n($), m();
        },
        function($) {
          r($), m();
        },
        P
      ), h = null;
    }
    "onloadend" in h ? h.onloadend = R : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, h.onabort = function() {
      h && (r(new g("Request aborted", g.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(v) {
      const P = v && v.message ? v.message : "Network Error", I = new g(P, g.ERR_NETWORK, e, h);
      I.event = v || null, r(I), h = null;
    }, h.ontimeout = function() {
      let v = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const P = s.transitional || De;
      s.timeoutErrorMessage && (v = s.timeoutErrorMessage), r(
        new g(
          v,
          P.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
          e,
          h
        )
      ), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && l.forEach(i.toJSON(), function(v, P) {
      h.setRequestHeader(P, v);
    }), l.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), a && a !== "json" && (h.responseType = s.responseType), c && ([w, d] = he(c, !0), h.addEventListener("progress", w)), f && h.upload && ([p, O] = he(f), h.upload.addEventListener("progress", p), h.upload.addEventListener("loadend", O)), (s.cancelToken || s.signal) && (u = (E) => {
      h && (r(!E || E.type ? new ae(null, e, h) : E), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const C = ir(s.url);
    if (C && A.protocols.indexOf(C) === -1) {
      r(
        new g(
          "Unsupported protocol " + C + ":",
          g.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    h.send(o || null);
  });
}, mr = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(c) {
      if (!s) {
        s = !0, a();
        const u = c instanceof Error ? c : this.reason;
        r.abort(
          u instanceof g ? u : new ae(u instanceof Error ? u.message : u)
        );
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new g(`timeout of ${t}ms exceeded`, g.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: f } = r;
    return f.unsubscribe = () => l.asap(a), f;
  }
}, br = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, yr = async function* (e, t) {
  for await (const n of gr(e))
    yield* br(n, t);
}, gr = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, et = (e, t, n, r) => {
  const s = yr(e, t);
  let o = 0, i, a = (f) => {
    i || (i = !0, r && r(f));
  };
  return new ReadableStream(
    {
      async pull(f) {
        try {
          const { done: c, value: u } = await s.next();
          if (c) {
            a(), f.close();
            return;
          }
          let p = u.byteLength;
          if (n) {
            let w = o += p;
            n(w);
          }
          f.enqueue(new Uint8Array(u));
        } catch (c) {
          throw a(c), c;
        }
      },
      cancel(f) {
        return a(f), s.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, tt = 64 * 1024, { isFunction: ue } = l, wr = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(l.global), { ReadableStream: nt, TextEncoder: rt } = l.global, st = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, xr = (e) => {
  e = l.merge.call(
    {
      skipUndefined: !0
    },
    wr,
    e
  );
  const { fetch: t, Request: n, Response: r } = e, s = t ? ue(t) : typeof fetch == "function", o = ue(n), i = ue(r);
  if (!s)
    return !1;
  const a = s && ue(nt), f = s && (typeof rt == "function" ? /* @__PURE__ */ ((d) => (m) => d.encode(m))(new rt()) : async (d) => new Uint8Array(await new n(d).arrayBuffer())), c = o && a && st(() => {
    let d = !1;
    const m = new n(A.origin, {
      body: new nt(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !m;
  }), u = i && a && st(() => l.isReadableStream(new r("").body)), p = {
    stream: u && ((d) => d.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !p[d] && (p[d] = (m, h) => {
      let R = m && m[d];
      if (R)
        return R.call(m);
      throw new g(
        `Response type '${d}' is not supported`,
        g.ERR_NOT_SUPPORT,
        h
      );
    });
  });
  const w = async (d) => {
    if (d == null)
      return 0;
    if (l.isBlob(d))
      return d.size;
    if (l.isSpecCompliantForm(d))
      return (await new n(A.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (l.isArrayBufferView(d) || l.isArrayBuffer(d))
      return d.byteLength;
    if (l.isURLSearchParams(d) && (d = d + ""), l.isString(d))
      return (await f(d)).byteLength;
  }, O = async (d, m) => {
    const h = l.toFiniteNumber(d.getContentLength());
    return h ?? w(m);
  };
  return async (d) => {
    let {
      url: m,
      method: h,
      data: R,
      signal: C,
      cancelToken: E,
      timeout: v,
      onDownloadProgress: P,
      onUploadProgress: I,
      responseType: $,
      headers: Y,
      withCredentials: M = "same-origin",
      fetchOptions: ee
    } = Tt(d), le = t || fetch;
    $ = $ ? ($ + "").toLowerCase() : "text";
    let W = mr(
      [C, E && E.toAbortSignal()],
      v
    ), z = null;
    const x = W && W.unsubscribe && (() => {
      W.unsubscribe();
    });
    let b;
    try {
      if (I && c && h !== "get" && h !== "head" && (b = await O(Y, R)) !== 0) {
        let q = new n(m, {
          method: "POST",
          body: R,
          duplex: "half"
        }), X;
        if (l.isFormData(R) && (X = q.headers.get("content-type")) && Y.setContentType(X), q.body) {
          const [_e, ce] = Qe(
            b,
            he(Ze(I))
          );
          R = et(q.body, tt, _e, ce);
        }
      }
      l.isString(M) || (M = M ? "include" : "omit");
      const y = o && "credentials" in n.prototype, K = {
        ...ee,
        signal: W,
        method: h.toUpperCase(),
        headers: Y.normalize().toJSON(),
        body: R,
        duplex: "half",
        credentials: y ? M : void 0
      };
      z = o && new n(m, K);
      let L = await (o ? le(z, ee) : le(m, K));
      const qe = u && ($ === "stream" || $ === "response");
      if (u && (P || qe && x)) {
        const q = {};
        ["status", "statusText", "headers"].forEach((Me) => {
          q[Me] = L[Me];
        });
        const X = l.toFiniteNumber(L.headers.get("content-length")), [_e, ce] = P && Qe(
          X,
          he(Ze(P), !0)
        ) || [];
        L = new r(
          et(L.body, tt, _e, () => {
            ce && ce(), x && x();
          }),
          q
        );
      }
      $ = $ || "text";
      let Ut = await p[l.findKey(p, $) || "text"](
        L,
        d
      );
      return !qe && x && x(), await new Promise((q, X) => {
        St(q, X, {
          data: Ut,
          headers: F.from(L.headers),
          status: L.status,
          statusText: L.statusText,
          config: d,
          request: z
        });
      });
    } catch (y) {
      throw x && x(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
        new g(
          "Network Error",
          g.ERR_NETWORK,
          d,
          z,
          y && y.response
        ),
        {
          cause: y.cause || y
        }
      ) : g.from(y, y && y.code, d, z, y && y.response);
    }
  };
}, _r = /* @__PURE__ */ new Map(), vt = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, o = [r, s, n];
  let i = o.length, a = i, f, c, u = _r;
  for (; a--; )
    f = o[a], c = u.get(f), c === void 0 && u.set(f, c = a ? /* @__PURE__ */ new Map() : xr(t)), u = c;
  return c;
};
vt();
const Ie = {
  http: Dn,
  xhr: hr,
  fetch: {
    get: vt
  }
};
l.forEach(Ie, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ot = (e) => `- ${e}`, Er = (e) => l.isFunction(e) || e === null || e === !1;
function Rr(e, t) {
  e = l.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const o = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let a;
    if (s = r, !Er(r) && (s = Ie[(a = String(r)).toLowerCase()], s === void 0))
      throw new g(`Unknown adapter '${a}'`);
    if (s && (l.isFunction(s) || (s = s.get(t))))
      break;
    o[a || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(o).map(
      ([f, c]) => `adapter ${f} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? i.length > 1 ? `since :
` + i.map(ot).join(`
`) : " " + ot(i[0]) : "as no adapter specified";
    throw new g(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const kt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Rr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ie
};
function ve(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ae(null, e);
}
function it(e) {
  return ve(e), e.headers = F.from(e.headers), e.data = Te.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kt.getAdapter(e.adapter || ie.adapter, e)(e).then(
    function(r) {
      return ve(e), r.data = Te.call(e, e.transformResponse, r), r.headers = F.from(r.headers), r;
    },
    function(r) {
      return Rt(r) || (ve(e), r && r.response && (r.response.data = Te.call(
        e,
        e.transformResponse,
        r.response
      ), r.response.headers = F.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const At = "1.13.6", xe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  xe[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const at = {};
xe.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + At + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new g(
        s(i, " has been removed" + (n ? " in " + n : "")),
        g.ERR_DEPRECATED
      );
    return n && !at[i] && (at[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
xe.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Sr(e, t, n) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const a = e[o], f = a === void 0 || i(a, o, e);
      if (f !== !0)
        throw new g(
          "option " + o + " must be " + f,
          g.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new g("Unknown option " + o, g.ERR_BAD_OPTION);
  }
}
const pe = {
  assertOptions: Sr,
  validators: xe
}, D = pe.validators;
let V = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Xe(),
      response: new Xe()
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
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = J(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && pe.assertOptions(
      r,
      {
        silentJSONParsing: D.transitional(D.boolean),
        forcedJSONParsing: D.transitional(D.boolean),
        clarifyTimeoutError: D.transitional(D.boolean),
        legacyInterceptorReqResOrdering: D.transitional(D.boolean)
      },
      !1
    ), s != null && (l.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : pe.assertOptions(
      s,
      {
        encode: D.function,
        serialize: D.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), pe.assertOptions(
      n,
      {
        baseUrl: D.spelling("baseURL"),
        withXsrfToken: D.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && l.merge(o.common, o[n.method]);
    o && l.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (d) => {
      delete o[d];
    }), n.headers = F.concat(i, o);
    const a = [];
    let f = !0;
    this.interceptors.request.forEach(function(m) {
      if (typeof m.runWhen == "function" && m.runWhen(n) === !1)
        return;
      f = f && m.synchronous;
      const h = n.transitional || De;
      h && h.legacyInterceptorReqResOrdering ? a.unshift(m.fulfilled, m.rejected) : a.push(m.fulfilled, m.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let u, p = 0, w;
    if (!f) {
      const d = [it.bind(this), void 0];
      for (d.unshift(...a), d.push(...c), w = d.length, u = Promise.resolve(n); p < w; )
        u = u.then(d[p++], d[p++]);
      return u;
    }
    w = a.length;
    let O = n;
    for (; p < w; ) {
      const d = a[p++], m = a[p++];
      try {
        O = d(O);
      } catch (h) {
        m.call(this, h);
        break;
      }
    }
    try {
      u = it.call(this, O);
    } catch (d) {
      return Promise.reject(d);
    }
    for (p = 0, w = c.length; p < w; )
      u = u.then(c[p++], c[p++]);
    return u;
  }
  getUri(t) {
    t = J(this.defaults, t);
    const n = Ot(t.baseURL, t.url, t.allowAbsoluteUrls);
    return _t(n, t.params, t.paramsSerializer);
  }
};
l.forEach(["delete", "get", "head", "options"], function(t) {
  V.prototype[t] = function(n, r) {
    return this.request(
      J(r || {}, {
        method: t,
        url: n,
        data: (r || {}).data
      })
    );
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, a) {
      return this.request(
        J(a || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: i
        })
      );
    };
  }
  V.prototype[t] = n(), V.prototype[t + "Form"] = n(!0);
});
let Or = class Ct {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, a) {
      r.reason || (r.reason = new ae(o, i, a), n(r.reason));
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
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ct(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Tr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function vr(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const Pe = {
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
Object.entries(Pe).forEach(([e, t]) => {
  Pe[t] = e;
});
function Nt(e) {
  const t = new V(e), n = ut(V.prototype.request, t);
  return l.extend(n, V.prototype, t, { allOwnKeys: !0 }), l.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Nt(J(e, s));
  }, n;
}
const S = Nt(ie);
S.Axios = V;
S.CanceledError = ae;
S.CancelToken = Or;
S.isCancel = Rt;
S.VERSION = At;
S.toFormData = we;
S.AxiosError = g;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = Tr;
S.isAxiosError = vr;
S.mergeConfig = J;
S.AxiosHeaders = F;
S.formToJSON = (e) => Et(l.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = kt.getAdapter;
S.HttpStatusCode = Pe;
S.default = S;
const {
  Axios: ps,
  AxiosError: hs,
  CanceledError: ms,
  isCancel: bs,
  CancelToken: ys,
  VERSION: gs,
  all: ws,
  Cancel: xs,
  isAxiosError: _s,
  spread: Es,
  toFormData: Rs,
  AxiosHeaders: Ss,
  HttpStatusCode: Os,
  formToJSON: Ts,
  getAdapter: vs,
  mergeConfig: ks
} = S, $e = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), Pt = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), $t = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, n = document.getElementById(e.el_id);
      if (!n)
        throw new Error("[el_id] is invalid");
      ((r) => {
        const s = (o) => {
          ((i) => {
            const a = i.getAttribute("data-ce");
            if (!a)
              return;
            const f = JSON.parse(a).filter((c) => c?.k.startsWith("t-"));
            if (f.length != 0)
              for (const c of f) {
                const u = c.k, p = c.v.split(" ");
                if (u == `t-${t}-class`)
                  for (const w of p)
                    i.classList.add(w);
                else
                  for (const w of p)
                    i.classList.remove(w);
              }
          })(o);
        };
        for (const o of r.getElementsByTagName("*"))
          s(o);
        s(r);
      })(n);
    } catch (t) {
      const n = `err: [theme] ${t}`;
      throw console.log(n), n;
    }
  }
});
function Le(e, t = 1e3) {
  let n = {
    cnt: 0
  };
  return new Promise((r) => {
    const s = () => {
      console.log(`[setInterval] is running.. [count=${n.cnt}]`);
      try {
        e() && (clearInterval(o), r());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      n.cnt += 1;
    }, o = setInterval(() => {
      s();
    }, t);
    s();
  });
}
let kr = class {
  listeners = {};
  on = (e, t) => ((this.listeners[e] ||= []).push(t), () => this.off(e, t));
  off = (e, t) => {
    this.listeners[e] = this.listeners[e]?.filter((n) => n !== t);
  };
  /** Sequential execution (await each listener) */
  emit = async (e, ...t) => {
    for (const n of this.listeners[e] ?? [])
      await n(...t);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (e, ...t) => {
    await Promise.all(
      (this.listeners[e] ?? []).map((n) => n(...t))
    );
  };
  //Error-safe emit
  emitSafe = async (e, ...t) => {
    for (const n of this.listeners[e] ?? [])
      try {
        await n(...t);
      } catch (r) {
        this.listeners.error?.forEach(
          (s) => s(r)
        );
      }
  };
};
const me = () => new kr();
class Lt {
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
let T = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [n, r] of t.entries()) {
        const s = r, o = `${s.name}:${e.run_from}`, i = `${e.run_from}_src`;
        let a = s[i];
        const f = `${e.run_from}_src`;
        let c = e?.lazy_lib?.[f] || null;
        if (c && (c = c.replace("{*}", `${s.name}`)), console.log(`_lazy_src: ${c}`), console.log(`_src: ${a}`), T.lib.l.hasOwnProperty(`${o}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(a) && a.includes("/") == !1 && T.lib.inbuilt_lib.indexOf(`${s.name}`) === -1)
            if (c)
              a = c;
            else
              throw `[lib-name=${s.name},lib-src=${a}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (a.startsWith("./") || a.startsWith("../")) {
            const u = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${a}`
            );
            T.lib.l[`${o}`] = {
              lib: u,
              src: a
            };
          }
          if (a.startsWith("http://") || a.startsWith("https://")) {
            const u = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${a}`
            );
            T.lib.l[`${o}`] = {
              lib: u,
              src: a
            };
          }
        }
      }
      console.log(await T.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const n = `${e.name}:${e.run_from}`;
      return T.lib.l.hasOwnProperty(`${n}`) == !1 && await T.lib.set({
        lib: [
          {
            renderer_src: e.name,
            hydrator_src: e.name,
            editor_src: e.name,
            name: e.name
          }
        ],
        run_from: e.run_from,
        lazy_lib: e.lazy_lib
      }), t = T.lib.l[`${n}`], t;
    },
    get_all: async (e) => T.lib.l
  },
  path: {
    set: (e) => {
      let t = "", n = "";
      const r = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (n = "/dist"), r.indexOf(e.type) !== -1)
        for (const [s, o] of r.entries()) {
          let i = s == 0 ? "" : "/";
          if (t += `${i}${o}`, o == e.type)
            return `${t}${n}${e.name}`;
        }
      else
        for (const [s, o] of r.entries()) {
          let i = s == 0 ? "" : "/";
          if (t += `${i}${o}`, o == "src")
            return `${t}${n}${e.name}`;
        }
      return `${t}${n}${e.name}`;
    }
  }
};
const Bt = me(), Ft = me(), Ar = Bt.on, Cr = Bt.emit, Nr = Ft.emit;
Ft.on;
const Pr = async (e) => {
  const t = await Pt();
  return await T.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--renderer [set]"), n.return = n?.return || {}, n.return.r = n?.return?.r || "full";
      const r = new Lt();
      r.start();
      let s = n.data?.value?.l || n.data.l, o = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return n.return.r == "full" ? o.r = "" : o.r = [], await (async () => {
        for (const i of s) {
          const a = await await T.lib.get({ name: i.type, run_from: "renderer", lazy_lib: e.lazy_lib }), f = await (await a.lib.index({
            f: {
              name: (c) => t.f.name({ id: i.id, name: c }),
              get_lib: async (c) => await await T.lib.get({ name: c.name, run_from: c.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (c) => await (await $t()).set(c),
              path: (c) => T.path.set({ src: a.src, type: i.type, name: c }),
              //set..
              uuid: () => $e().set(),
              wait_until: Le
            }
          })).set(
            {
              data: {
                curr: i
              }
            }
            /*_$cb*/
          );
          n?.return?.r == "full" ? o.r += f?.r || "" : o.r.push(f?.r || ""), o.style += f?.style || "", o.head += f?.head || "";
        }
      })(), r.stop(), o.benchmark = r.result(), o;
    }
  };
}, $r = async (e) => {
  const t = await Pt();
  return await T.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--hydrator [set]");
      const r = new Lt();
      r.start();
      let s = {
        r: "",
        style: ""
      }, o = {
        style_id: `${$e().set()}_stl`
      }, i = n.data?.value?.l || n.data.l;
      const a = async () => {
        for (const f of i) {
          const c = await await T.lib.get({ name: f.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), u = c.lib, p = me(), w = p.on, O = await (await u.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (d) => t.f.name({ id: f.id, name: d }),
              get_lib: async (d) => await await T.lib.get({ name: d.name, run_from: d.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (d) => await (await $t()).set(d),
              path: (d) => T.path.set({ src: c.src, type: f.type, name: d }),
              //set..
              uuid: () => $e().set(),
              wait_until: Le,
              //set..
              call: Nr,
              listen: w,
              //set..
              new_emitter: () => me()
            }
          })).set(
            {
              data: {
                curr: f
              }
            }
            /*_$cb*/
          );
          Ar("msg", async (d) => {
            try {
              if (Object.keys(d.where || {}).length == 0) {
                await p.emit("msg", d);
                return;
              }
            } catch {
            }
            try {
              if (f?.[d.where?.key || ""] == d.where?.value) {
                await p.emit("msg", d);
                return;
              }
            } catch {
            }
          }), s.style += O.style;
        }
      };
      await Le(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await a();
      try {
        ((f) => {
          const c = document.getElementById(`${o.style_id}`);
          c && c.remove();
          const u = document.createElement("style");
          u.id = `${o.style_id}`, u.innerHTML = `${s.style}`, f.appendChild(u);
        })(document.head);
      } catch (f) {
        console.log(`${f}, Failed to set style..`);
      }
      return r.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: r.result()
      };
    }
  };
}, Lr = ["innerHTML"], Br = /* @__PURE__ */ Be({
  __name: "ContentEngine",
  props: {
    ce_file: {}
  },
  setup(e, { expose: t }) {
    const n = U({
      ce_file: e.ce_file
      //route?.meta?.ce_file,
    });
    t({
      ce_call: Cr
    });
    const r = U(null), s = U(null);
    let o = "";
    return (async () => {
      try {
        if (typeof n.value.ce_file == "string") {
          const w = await (await fetch(n.value.ce_file)).json();
          r.value = w;
        } else
          r.value = n.value.ce_file;
      } catch (p) {
        console.log(p);
        return;
      }
      let i = {
        l: [
          {
            id: "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
            type: "text",
            data: {
              data: "Loading.."
            }
          }
        ]
      }, a = {
        lib: [],
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"
        }
      };
      i = r.value.data, a.lazy_lib = r.value.config.lazy_lib;
      const f = await Pr(a), c = await $r(a);
      await (async () => {
        const p = await f.set({
          data: i
        });
        s.value = p.r, o = p.style;
        const w = document.createElement("style");
        document.head.appendChild(w), w.innerHTML = o, setTimeout(async () => {
          await c.set({
            data: i
          });
        }, 10);
      })();
    })(), (i, a) => s.value ? (k(), N("div", {
      key: 0,
      innerHTML: s.value
    }, null, 8, Lr)) : G("", !0);
  }
});
function Fr(e, t) {
  return t.split(".").reduce((n, r) => n?.[r], e);
}
function Ur(e, t) {
  const { open: n, close: r } = t, s = [];
  let o = 0;
  for (; o < e.length; ) {
    const i = e.indexOf(n, o);
    if (i === -1) {
      s.push({ type: "text", value: e.slice(o) });
      break;
    }
    i > o && s.push({ type: "text", value: e.slice(o, i) });
    const a = e.indexOf(r, i + n.length);
    if (a === -1)
      throw new Error(`Unclosed template placeholder starting at ${i}`);
    const f = e.slice(i + n.length, a).trim(), [c, u] = f.split("=");
    s.push({ type: "param", value: c, defaultValue: u }), o = a + r.length;
  }
  return s;
}
function Dr(e, t, n) {
  const r = /* @__PURE__ */ new Set(), s = e.map((o) => {
    if (o.type === "text") return o.value;
    const i = Fr(t, o.value);
    if (r.add(o.value.split(".")[0]), i === void 0 || i === "") {
      if (o.defaultValue !== void 0) return o.defaultValue;
      if (n.strict) throw new Error(`Missing param: ${o.value}`);
      return "";
    }
    return n.encode ? encodeURIComponent(String(i)) : String(i);
  }).join("");
  if (n.strict) {
    for (const o of Object.keys(t))
      if (!r.has(o))
        throw new Error(`Unused param provided: ${o}`);
  }
  return s;
}
function lt(e, t) {
  const n = {
    open: t?.open ?? "{",
    close: t?.close ?? "}",
    encode: t?.encode ?? !1,
    strict: t?.strict ?? !1
  }, r = Ur(e, n);
  return (s) => Dr(r, s, n);
}
const jr = { class: "bg-gray-50 dark:bg-[#0b1120] min-h-screen pb-20 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-blue-100 selection:text-blue-900" }, Ir = {
  key: 0,
  class: "sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-800/50 transition-all duration-300"
}, qr = { class: "max-w-[1440px] mx-auto px-4 py-3 md:px-8 md:py-4 flex gap-4 items-center" }, Mr = {
  class: "flex-1 relative group",
  role: "search"
}, zr = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, Hr = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, Vr = {
  key: 1,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-[1440px] mx-auto px-4 md:px-8 my-8"
}, Jr = {
  key: 2,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 max-w-[1440px] mx-auto px-4 md:px-8 my-8 list-none"
}, Wr = ["onClick"], Kr = { class: "p-2 md:p-2.5 pb-0" }, Xr = { class: "aspect-[4/5] relative bg-[#f4f6f8] dark:bg-slate-800 rounded-xl overflow-hidden" }, Gr = ["src", "alt"], Qr = {
  key: 0,
  class: "absolute bottom-2 left-2 bg-red-500 text-white text-[10px] md:text-xs px-2 py-0.5 rounded-md font-bold shadow-sm"
}, Zr = { class: "p-3 md:p-4 flex flex-col flex-1 gap-1" }, Yr = { class: "flex items-baseline gap-2 mb-1" }, es = { class: "text-lg md:text-xl font-black text-slate-900 dark:text-white leading-none" }, ts = {
  key: 0,
  class: "text-xs text-slate-400 line-through decoration-slate-400/50"
}, ns = { class: "text-[11px] font-bold text-slate-400 uppercase tracking-wider" }, rs = { class: "text-[13px] leading-snug text-slate-700 dark:text-slate-300 font-medium line-clamp-2 min-h-[2.5em]" }, ss = ["onClick"], os = {
  key: 3,
  class: "flex flex-col items-center justify-center py-20 px-4"
}, is = {
  key: 0,
  class: "flex gap-2"
}, ke = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500", as = /* @__PURE__ */ Be({
  __name: "productsearch",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    Kt();
    const t = U(""), n = U([]), r = U(!1), s = U(!0), o = U(!1), i = U(1), a = U(!0), f = U(null);
    let c = null;
    const p = lt(e.__p.data.curr.data.api.token, { open: "<", close: ">" })({
      localStorage: {
        token: localStorage.getItem("token") || ""
      }
    }).replace("Bearer ", ""), w = e.__p.data.curr.data.api.url, O = p, d = U(null), m = U({
      cart_popup: {
        ce_file: e.__p.data.curr.data.cart_popup.ce_file
      }
    }), h = () => {
      const x = localStorage.getItem("theme");
      x ? r.value = x === "dark" : r.value = window.matchMedia("(prefers-color-scheme: dark)").matches, C();
    }, R = () => {
      r.value = !r.value, C(), localStorage.setItem("theme", r.value ? "dark" : "light");
    }, C = () => {
      r.value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, E = async () => {
      s.value = !0, n.value = [], i.value = 1, a.value = !0, await P(), s.value = !1;
    }, v = () => {
      t.value = "", document.getElementById("site-search")?.focus(), E();
    }, P = async () => {
      try {
        let b = {
          q: t.value.trim(),
          //"Ni",//"Nike shirts",
          page: i.value,
          //1,
          per_page: 20
        };
        b.q || (b.q = "*");
        const y = await S.post(
          w,
          /*{ 
            slug: effectiveQuery, 
            collection: "products" 
          }*/
          b,
          { headers: {
            Authorization: `Bearer ${O}`,
            "lang-code": e.__p.data.curr.data.lang_code
          } }
        );
        if (y.data.success && y.data.data.products.length > 0) {
          await new Promise((L) => setTimeout(L, 500));
          const K = y.data.data.products;
          for (const L of K)
            n.value.push({
              document: L
            });
        } else
          a.value = !1;
      } catch (x) {
        console.error(x), a.value = !1;
      }
    }, I = () => {
      c = new IntersectionObserver(async (x) => {
        x[0].isIntersecting && a.value && !s.value && !o.value && (o.value = !0, i.value++, await P(), o.value = !1);
      }, {
        rootMargin: "200px"
      }), f.value && c.observe(f.value);
    }, $ = (x) => {
      try {
        const y = JSON.parse(x.metadata);
        if (y.color?.[0]?.image?.[0]?.url && !y.color[0].image[0].url.includes("example"))
          return y.color[0].image[0].url;
      } catch {
      }
      const b = x.title ? x.title.toLowerCase() : "";
      return b.includes("dress") ? "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500" : b.includes("shirt") || b.includes("top") ? "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" : b.includes("shoe") || b.includes("sneaker") ? "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" : b.includes("bag") ? "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" : ke;
    }, Y = (x) => {
      const b = x.target;
      b.src !== ke && (b.src = ke);
    }, M = (x) => {
      const b = x.variant_prices[0], y = x.variant_mrp[0];
      return y > b ? Math.round((y - b) / y * 100) : 0;
    }, ee = (x) => new Intl.NumberFormat("ru-RU").format(x), le = (x) => {
      if (!x.document?.slug && !x.document?.id) return;
      const y = lt(e.__p.data.curr.data.event.onProductClick)({
        id: x.document?.id,
        slug: x.document?.slug
      });
      location.href = y;
    }, W = (x) => {
      d.value.ce_call("msg", {
        type: "product:open",
        custom: {
          product_id: x.document.slug
          // _v.document.id, 
        },
        _p: {},
        _$p: {}
      });
    }, z = (x) => {
      const b = x.currentTarget;
      b.classList.toggle("text-red-500"), b.classList.toggle("bg-red-50");
    };
    return jt(() => {
      h(), E().then(() => {
        setTimeout(() => I(), 100);
      });
    }), It(() => {
      c && c.disconnect();
    }), (x, b) => (k(), N(Re, null, [
      _("div", jr, [
        e.__p.data.curr.data.mode == "normal" ? (k(), N("header", Ir, [
          _("div", qr, [
            _("div", Mr, [
              b[2] || (b[2] = _("svg", {
                class: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                _("circle", {
                  cx: "11",
                  cy: "11",
                  r: "8"
                }),
                _("line", {
                  x1: "21",
                  y1: "21",
                  x2: "16.65",
                  y2: "16.65"
                })
              ], -1)),
              qt(_("input", {
                id: "site-search",
                "onUpdate:modelValue": b[0] || (b[0] = (y) => t.value = y),
                onKeyup: zt(E, ["enter"]),
                type: "text",
                placeholder: "Search premium brands, styles...",
                class: "w-full h-11 md:h-12 pl-12 pr-10 bg-gray-100 dark:bg-slate-800 border-2 border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 rounded-2xl text-[15px] outline-none transition-all duration-200 placeholder:text-slate-400 dark:text-white shadow-sm"
              }, null, 544), [
                [Mt, t.value]
              ]),
              t.value ? (k(), N("button", {
                key: 0,
                class: "absolute right-3 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-slate-700 text-slate-500 hover:text-red-500 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors",
                onClick: v
              }, "✕")) : G("", !0)
            ]),
            _("button", {
              class: "hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 active:scale-95 transition-all",
              onClick: E
            }, " SEARCH "),
            _("button", {
              onClick: R,
              class: "p-3 rounded-2xl bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors active:scale-95"
            }, [
              r.value ? (k(), N("svg", zr, [...b[3] || (b[3] = [
                Ee('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', 9)
              ])])) : (k(), N("svg", Hr, [...b[4] || (b[4] = [
                _("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
              ])]))
            ])
          ])
        ])) : G("", !0),
        s.value ? (k(), N("div", Vr, [
          (k(), N(Re, null, ze(10, (y) => _("div", {
            key: y,
            class: "bg-white dark:bg-[#1e293b] rounded-2xl p-3 shadow-sm border border-gray-100 dark:border-slate-800"
          }, [...b[5] || (b[5] = [
            Ee('<div class="aspect-[4/5] bg-gray-200 dark:bg-slate-700 rounded-xl relative overflow-hidden mb-3"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div><div class="space-y-2"><div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/3"></div><div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full"></div><div class="h-8 bg-gray-200 dark:bg-slate-700 rounded-lg mt-2"></div></div>', 2)
          ])])), 64))
        ])) : n.value.length > 0 ? (k(), N("ul", Jr, [
          (k(!0), N(Re, null, ze(n.value, (y, K) => (k(), N("li", {
            key: y.document.id + K,
            class: "group bg-white dark:bg-[#1e293b] rounded-2xl flex flex-col relative cursor-pointer border border-transparent hover:border-blue-100 dark:hover:border-slate-600 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] dark:shadow-none dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300",
            onClick: (L) => le(y)
          }, [
            _("div", Kr, [
              _("div", Xr, [
                _("img", {
                  src: $(y.document),
                  loading: "lazy",
                  alt: y.document.title,
                  onError: Y,
                  class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply dark:mix-blend-normal"
                }, null, 40, Gr),
                M(y.document) > 0 ? (k(), N("span", Qr, " -" + te(M(y.document)) + "% ", 1)) : G("", !0),
                _("button", {
                  class: "absolute top-2 right-2 w-8 h-8 rounded-full bg-white/70 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-white transition-all scale-0 group-hover:scale-100",
                  onClick: He(z, ["stop"])
                }, [...b[6] || (b[6] = [
                  _("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [
                    _("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
                  ], -1)
                ])])
              ])
            ]),
            _("div", Zr, [
              _("div", Yr, [
                _("span", es, te(ee(y.document.variant_prices[0])) + " ₽ ", 1),
                y.document.variant_mrp[0] > y.document.variant_prices[0] ? (k(), N("span", ts, te(ee(y.document.variant_mrp[0])), 1)) : G("", !0)
              ]),
              b[8] || (b[8] = Ee('<div class="flex items-center gap-2 mb-1.5"><span class="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-green-500"></span> Ozon Card </span><div class="flex items-center gap-1 text-[10px] text-slate-400"><span class="text-amber-400">★</span> 4.9 (128) </div></div>', 1)),
              _("div", ns, te(y.document.brand), 1),
              _("h3", rs, te(y.document.title), 1),
              _("button", {
                class: "mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group/btn",
                onClick: He((L) => W(y), ["stop"])
              }, [...b[7] || (b[7] = [
                _("span", null, "Add to Cart", -1),
                _("svg", {
                  class: "w-4 h-4 transition-transform group-hover/btn:translate-x-1",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  _("path", { d: "M5 12h14M12 5l7 7-7 7" })
                ], -1)
              ])], 8, ss)
            ])
          ], 8, Wr))), 128))
        ])) : (k(), N("div", os, [
          b[9] || (b[9] = _("div", { class: "w-20 h-20 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-4" }, "🔍", -1)),
          b[10] || (b[10] = _("h3", { class: "text-xl font-bold text-slate-900 dark:text-white mb-2" }, "No results found", -1)),
          b[11] || (b[11] = _("p", { class: "text-slate-500 mb-6 text-center max-w-md" }, "We couldn't find anything matching your search. Try checking for typos or use broader keywords.", -1)),
          _("button", {
            class: "bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors",
            onClick: b[1] || (b[1] = (y) => {
              t.value = "puma", E();
            })
          }, "Clear Filters")
        ])),
        _("div", {
          ref_key: "sentinel",
          ref: f,
          class: "h-20 flex justify-center items-center w-full"
        }, [
          o.value ? (k(), N("div", is, [...b[12] || (b[12] = [
            _("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce" }, null, -1),
            _("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]" }, null, -1),
            _("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]" }, null, -1)
          ])])) : G("", !0)
        ], 512)
      ]),
      Ht(Br, ct({
        ref_key: "cartPopupRef",
        ref: d
      }, {
        // _p:_p,
        //__p:_$p,
        ce_file: m.value.cart_popup.ce_file
      }), null, 16)
    ], 64));
  }
}), ls = /* @__PURE__ */ Be({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    return e._$p.data.curr.data.mode = e._$p.data.curr.data.mode || "normal", e._$p.data.curr.data.lang_code = e._$p.data.curr.data.lang_code || "en", (t, n) => (k(), Vt(as, ct({
      __internal: {
        _p: e._p,
        _$p: e._$p,
        _$cb: e._$cb
      }
    }, {
      _p: e._p,
      __p: e._$p
    }), null, 16, ["__internal"]));
  }
}), As = async (e) => ({
  set: async (t, n) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const s = Jt(ls, {
      _p: e,
      _$p: t,
      _$cb: n
    }), o = e.f.name("vue-root"), i = {
      r: `<div id="${o}" style="width:100%; height:100%;"></div>`,
      style: "",
      evt: {
        change: () => {
          n?.change({ _$p: t });
        }
      }
    };
    return setTimeout(() => {
      const a = document.getElementById(o);
      a ? s.mount(a) : console.error(`Hydrator Error: Element #${o} not found.`);
    }, 0), i;
  }
});
export {
  As as hydrator,
  As as index
};
