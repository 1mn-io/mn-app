import { r as V, a as Ct, d as tt, o as D, c as L, F as kt, b as Nt, u as I, e as nt, w as Pt, f as R, g as Z, t as J, n as Bt, h as Ut, i as Ft, j as Dt, k as Lt, l as It } from "./runtime-dom.esm-bundler-DSnzm-ld.js";
function rt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: jt } = Object.prototype, { getPrototypeOf: xe } = Object, { iterator: de, toStringTag: st } = Symbol, fe = /* @__PURE__ */ ((e) => (t) => {
  const n = jt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), B = (e) => (e = e.toLowerCase(), (t) => fe(t) === e), pe = (e) => (t) => typeof t === e, { isArray: K } = Array, W = pe("undefined");
function Y(e) {
  return e !== null && !W(e) && e.constructor !== null && !W(e.constructor) && T(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ot = B("ArrayBuffer");
function vt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ot(e.buffer), t;
}
const qt = pe("string"), T = pe("function"), it = pe("number"), Q = (e) => e !== null && typeof e == "object", $t = (e) => e === !0 || e === !1, ae = (e) => {
  if (fe(e) !== "object")
    return !1;
  const t = xe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(st in e) && !(de in e);
}, Mt = (e) => {
  if (!Q(e) || Y(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, zt = B("Date"), Ht = B("File"), Jt = B("Blob"), Vt = B("FileList"), Wt = (e) => Q(e) && T(e.pipe), Kt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || T(e.append) && ((t = fe(e)) === "formdata" || // detect form-data instance
  t === "object" && T(e.toString) && e.toString() === "[object FormData]"));
}, Xt = B("URLSearchParams"), [Gt, Zt, Yt, Qt] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(B), en = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ee(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), K(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Y(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function at(e, t) {
  if (Y(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const $ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ct = (e) => !W(e) && e !== $;
function Se() {
  const { caseless: e, skipUndefined: t } = ct(this) && this || {}, n = {}, r = (s, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const i = e && at(n, o) || o;
    ae(n[i]) && ae(s) ? n[i] = Se(n[i], s) : ae(s) ? n[i] = Se({}, s) : K(s) ? n[i] = s.slice() : (!t || !W(s)) && (n[i] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && ee(arguments[s], r);
  return n;
}
const tn = (e, t, n, { allOwnKeys: r } = {}) => (ee(
  t,
  (s, o) => {
    n && T(s) ? Object.defineProperty(e, o, {
      value: rt(s, n),
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
), e), nn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), rn = (e, t, n, r) => {
  e.prototype = Object.create(
    t.prototype,
    r
  ), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, sn = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && xe(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, on = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, an = (e) => {
  if (!e) return null;
  if (K(e)) return e;
  let t = e.length;
  if (!it(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, cn = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && xe(Uint8Array)), ln = (e, t) => {
  const r = (e && e[de]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, un = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, dn = B("HTMLFormElement"), fn = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
  return r.toUpperCase() + s;
}), je = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), pn = B("RegExp"), lt = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ee(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, hn = (e) => {
  lt(e, (t, n) => {
    if (T(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (T(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, mn = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return K(e) ? r(e) : r(String(e).split(t)), n;
}, yn = () => {
}, bn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function wn(e) {
  return !!(e && T(e.append) && e[st] === "FormData" && e[de]);
}
const gn = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Q(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Y(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = K(r) ? [] : {};
        return ee(r, (i, c) => {
          const d = n(i, s + 1);
          !W(d) && (o[c] = d);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, En = B("AsyncFunction"), Rn = (e) => e && (Q(e) || T(e)) && T(e.then) && T(e.catch), ut = ((e, t) => e ? setImmediate : t ? ((n, r) => ($.addEventListener(
  "message",
  ({ source: s, data: o }) => {
    s === $ && o === n && r.length && r.shift()();
  },
  !1
), (s) => {
  r.push(s), $.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", T($.postMessage)), _n = typeof queueMicrotask < "u" ? queueMicrotask.bind($) : typeof process < "u" && process.nextTick || ut, Sn = (e) => e != null && T(e[de]), a = {
  isArray: K,
  isArrayBuffer: ot,
  isBuffer: Y,
  isFormData: Kt,
  isArrayBufferView: vt,
  isString: qt,
  isNumber: it,
  isBoolean: $t,
  isObject: Q,
  isPlainObject: ae,
  isEmptyObject: Mt,
  isReadableStream: Gt,
  isRequest: Zt,
  isResponse: Yt,
  isHeaders: Qt,
  isUndefined: W,
  isDate: zt,
  isFile: Ht,
  isBlob: Jt,
  isRegExp: pn,
  isFunction: T,
  isStream: Wt,
  isURLSearchParams: Xt,
  isTypedArray: cn,
  isFileList: Vt,
  forEach: ee,
  merge: Se,
  extend: tn,
  trim: en,
  stripBOM: nn,
  inherits: rn,
  toFlatObject: sn,
  kindOf: fe,
  kindOfTest: B,
  endsWith: on,
  toArray: an,
  forEachEntry: ln,
  matchAll: un,
  isHTMLForm: dn,
  hasOwnProperty: je,
  hasOwnProp: je,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: lt,
  freezeMethods: hn,
  toObjectSet: mn,
  toCamelCase: fn,
  noop: yn,
  toFiniteNumber: bn,
  findKey: at,
  global: $,
  isContextDefined: ct,
  isSpecCompliantForm: wn,
  toJSONObject: gn,
  isAsyncFn: En,
  isThenable: Rn,
  setImmediate: ut,
  asap: _n,
  isIterable: Sn
};
let y = class dt extends Error {
  static from(t, n, r, s, o, i) {
    const c = new dt(t.message, n || t.code, r, s, o);
    return c.cause = t, c.name = t.name, i && Object.assign(c, i), c;
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
    super(t), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), s && (this.request = s), o && (this.response = o, this.status = o.status);
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
      config: a.toJSONObject(this.config),
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
const On = null;
function Oe(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function ft(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ve(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = ft(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function An(e) {
  return a.isArray(e) && !e.some(Oe);
}
const Tn = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function he(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, p) {
    return !a.isUndefined(p[m]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(f) {
    if (f === null) return "";
    if (a.isDate(f))
      return f.toISOString();
    if (a.isBoolean(f))
      return f.toString();
    if (!d && a.isBlob(f))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? d && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, m, p) {
    let g = f;
    if (f && !p && typeof f == "object") {
      if (a.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && An(f) || (a.isFileList(f) || a.endsWith(m, "[]")) && (g = a.toArray(f)))
        return m = ft(m), g.forEach(function(E, O) {
          !(a.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? ve([m], O, o) : i === null ? m : m + "[]",
            u(E)
          );
        }), !1;
    }
    return Oe(f) ? !0 : (t.append(ve(p, m, o), u(f)), !1);
  }
  const h = [], b = Object.assign(Tn, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Oe
  });
  function _(f, m) {
    if (!a.isUndefined(f)) {
      if (h.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      h.push(f), a.forEach(f, function(g, C) {
        (!(a.isUndefined(g) || g === null) && s.call(
          t,
          g,
          a.isString(C) ? C.trim() : C,
          m,
          b
        )) === !0 && _(g, m ? m.concat(C) : [C]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function qe(e) {
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
function Ce(e, t) {
  this._pairs = [], e && he(e, this, t);
}
const pt = Ce.prototype;
pt.append = function(t, n) {
  this._pairs.push([t, n]);
};
pt.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, qe);
  } : qe;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function xn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ht(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || xn, s = a.isFunction(n) ? {
    serialize: n
  } : n, o = s && s.serialize;
  let i;
  if (o ? i = o(t, s) : i = a.isURLSearchParams(t) ? t.toString() : new Ce(t, s).toString(r), i) {
    const c = e.indexOf("#");
    c !== -1 && (e = e.slice(0, c)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class $e {
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
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ke = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Cn = typeof URLSearchParams < "u" ? URLSearchParams : Ce, kn = typeof FormData < "u" ? FormData : null, Nn = typeof Blob < "u" ? Blob : null, Pn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Cn,
    FormData: kn,
    Blob: Nn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ne = typeof window < "u" && typeof document < "u", Ae = typeof navigator == "object" && navigator || void 0, Bn = Ne && (!Ae || ["ReactNative", "NativeScript", "NS"].indexOf(Ae.product) < 0), Un = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Fn = Ne && window.location.href || "http://localhost", Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ne,
  hasStandardBrowserEnv: Bn,
  hasStandardBrowserWebWorkerEnv: Un,
  navigator: Ae,
  origin: Fn
}, Symbol.toStringTag, { value: "Module" })), S = {
  ...Dn,
  ...Pn
};
function Ln(e, t) {
  return he(e, new S.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return S.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function In(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function jn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function mt(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), d = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, d ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = jn(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(In(r), s, n, 0);
    }), n;
  }
  return null;
}
function vn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const te = {
  transitional: ke,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(mt(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ln(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return he(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), vn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || te.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? y.from(c, y.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
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
    FormData: S.classes.FormData,
    Blob: S.classes.Blob
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
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  te.headers[e] = {};
});
const qn = a.toObjectSet([
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
]), $n = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && qn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Me = /* @__PURE__ */ Symbol("internals");
function G(e) {
  return e && String(e).trim().toLowerCase();
}
function ce(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(ce) : String(e);
}
function Mn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const zn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function we(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Hn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Jn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let x = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, d, u) {
      const l = G(d);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, l);
      (!h || s[h] === void 0 || u === !0 || u === void 0 && s[h] !== !1) && (s[h || d] = ce(c));
    }
    const i = (c, d) => a.forEach(c, (u, l) => o(u, l, d));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !zn(t))
      i($n(t), n);
    else if (a.isObject(t) && a.isIterable(t)) {
      let c = {}, d, u;
      for (const l of t) {
        if (!a.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        c[u = l[0]] = (d = c[u]) ? a.isArray(d) ? [...d, l[1]] : [d, l[1]] : l[1];
      }
      i(c, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = G(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Mn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = G(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || we(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = G(i), i) {
        const c = a.findKey(r, i);
        c && (!n || we(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || we(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = ce(s), delete n[o];
        return;
      }
      const c = t ? Hn(o) : String(o).trim();
      c !== o && delete n[o], n[c] = ce(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Me] = this[Me] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = G(i);
      r[c] || (Jn(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
x.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(x.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(x);
function ge(e, t) {
  const n = this || te, r = t || n, s = x.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function yt(e) {
  return !!(e && e.__CANCEL__);
}
let ne = class extends y {
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
    super(t ?? "canceled", y.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function bt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new y(
    "Request failed with status code " + n.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Vn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Wn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const u = Date.now(), l = r[o];
    i || (i = u), n[s] = d, r[s] = u;
    let h = o, b = 0;
    for (; h !== s; )
      b += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const _ = l && u - l;
    return _ ? Math.round(b * 1e3 / _) : void 0;
  };
}
function Kn(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (u, l = Date.now()) => {
    n = l, s = null, o && (clearTimeout(o), o = null), e(...u);
  };
  return [(...u) => {
    const l = Date.now(), h = l - n;
    h >= r ? i(u, l) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - h)));
  }, () => s && i(s)];
}
const ue = (e, t, n = 3) => {
  let r = 0;
  const s = Wn(50, 250);
  return Kn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, d = i - r, u = s(d), l = i <= c;
    r = i;
    const h = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: d,
      rate: u || void 0,
      estimated: u && c && l ? (c - i) / u : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, ze = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, He = (e) => (...t) => a.asap(() => e(...t)), Xn = S.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, S.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(S.origin),
  S.navigator && /(msie|trident)/i.test(S.navigator.userAgent)
) : () => !0, Gn = S.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o, i) {
      if (typeof document > "u") return;
      const c = [`${e}=${encodeURIComponent(t)}`];
      a.isNumber(n) && c.push(`expires=${new Date(n).toUTCString()}`), a.isString(r) && c.push(`path=${r}`), a.isString(s) && c.push(`domain=${s}`), o === !0 && c.push("secure"), a.isString(i) && c.push(`SameSite=${i}`), document.cookie = c.join("; ");
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
function Zn(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Yn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function wt(e, t, n) {
  let r = !Zn(t);
  return e && (r || n == !1) ? Yn(e, t) : t;
}
const Je = (e) => e instanceof x ? { ...e } : e;
function z(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, h, b) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: b }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(u, l, h, b) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u, h, b);
    } else return r(u, l, h, b);
  }
  function o(u, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function c(u, l, h) {
    if (h in t)
      return r(u, l);
    if (h in e)
      return r(void 0, u);
  }
  const d = {
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
    validateStatus: c,
    headers: (u, l, h) => s(Je(u), Je(l), h, !0)
  };
  return a.forEach(
    Object.keys({ ...e, ...t }),
    function(l) {
      if (l === "__proto__" || l === "constructor" || l === "prototype")
        return;
      const h = a.hasOwnProp(d, l) ? d[l] : s, b = h(e[l], t[l], l);
      a.isUndefined(b) && h !== c || (n[l] = b);
    }
  ), n;
}
const gt = (e) => {
  const t = z({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  if (t.headers = i = x.from(i), t.url = ht(wt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  ), a.isFormData(n)) {
    if (S.hasStandardBrowserEnv || S.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (a.isFunction(n.getHeaders)) {
      const d = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(d).forEach(([l, h]) => {
        u.includes(l.toLowerCase()) && i.set(l, h);
      });
    }
  }
  if (S.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && Xn(t.url))) {
    const d = s && o && Gn.read(o);
    d && i.set(s, d);
  }
  return t;
}, Qn = typeof XMLHttpRequest < "u", er = Qn && function(e) {
  return new Promise(function(n, r) {
    const s = gt(e);
    let o = s.data;
    const i = x.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: u } = s, l, h, b, _, f;
    function m() {
      _ && _(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function g() {
      if (!p)
        return;
      const E = x.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), P = {
        data: !c || c === "text" || c === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: E,
        config: e,
        request: p
      };
      bt(function(k) {
        n(k), m();
      }, function(k) {
        r(k), m();
      }, P), p = null;
    }
    "onloadend" in p ? p.onloadend = g : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, p.onabort = function() {
      p && (r(new y("Request aborted", y.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function(O) {
      const P = O && O.message ? O.message : "Network Error", j = new y(P, y.ERR_NETWORK, e, p);
      j.event = O || null, r(j), p = null;
    }, p.ontimeout = function() {
      let O = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const P = s.transitional || ke;
      s.timeoutErrorMessage && (O = s.timeoutErrorMessage), r(new y(
        O,
        P.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        p
      )), p = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in p && a.forEach(i.toJSON(), function(O, P) {
      p.setRequestHeader(P, O);
    }), a.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), c && c !== "json" && (p.responseType = s.responseType), u && ([b, f] = ue(u, !0), p.addEventListener("progress", b)), d && p.upload && ([h, _] = ue(d), p.upload.addEventListener("progress", h), p.upload.addEventListener("loadend", _)), (s.cancelToken || s.signal) && (l = (E) => {
      p && (r(!E || E.type ? new ne(null, e, p) : E), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const C = Vn(s.url);
    if (C && S.protocols.indexOf(C) === -1) {
      r(new y("Unsupported protocol " + C + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(o || null);
  });
}, tr = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, c();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof y ? l : new ne(l instanceof Error ? l.message : l));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new y(`timeout of ${t}ms exceeded`, y.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", o));
    const { signal: d } = r;
    return d.unsubscribe = () => a.asap(c), d;
  }
}, nr = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, rr = async function* (e, t) {
  for await (const n of sr(e))
    yield* nr(n, t);
}, sr = async function* (e) {
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
}, Ve = (e, t, n, r) => {
  const s = rr(e, t);
  let o = 0, i, c = (d) => {
    i || (i = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: u, value: l } = await s.next();
        if (u) {
          c(), d.close();
          return;
        }
        let h = l.byteLength;
        if (n) {
          let b = o += h;
          n(b);
        }
        d.enqueue(new Uint8Array(l));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(d) {
      return c(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, We = 64 * 1024, { isFunction: ie } = a, or = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(a.global), {
  ReadableStream: Ke,
  TextEncoder: Xe
} = a.global, Ge = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ir = (e) => {
  e = a.merge.call({
    skipUndefined: !0
  }, or, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? ie(t) : typeof fetch == "function", o = ie(n), i = ie(r);
  if (!s)
    return !1;
  const c = s && ie(Ke), d = s && (typeof Xe == "function" ? /* @__PURE__ */ ((f) => (m) => f.encode(m))(new Xe()) : async (f) => new Uint8Array(await new n(f).arrayBuffer())), u = o && c && Ge(() => {
    let f = !1;
    const m = new n(S.origin, {
      body: new Ke(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !m;
  }), l = i && c && Ge(() => a.isReadableStream(new r("").body)), h = {
    stream: l && ((f) => f.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !h[f] && (h[f] = (m, p) => {
      let g = m && m[f];
      if (g)
        return g.call(m);
      throw new y(`Response type '${f}' is not supported`, y.ERR_NOT_SUPPORT, p);
    });
  });
  const b = async (f) => {
    if (f == null)
      return 0;
    if (a.isBlob(f))
      return f.size;
    if (a.isSpecCompliantForm(f))
      return (await new n(S.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(f) || a.isArrayBuffer(f))
      return f.byteLength;
    if (a.isURLSearchParams(f) && (f = f + ""), a.isString(f))
      return (await d(f)).byteLength;
  }, _ = async (f, m) => {
    const p = a.toFiniteNumber(f.getContentLength());
    return p ?? b(m);
  };
  return async (f) => {
    let {
      url: m,
      method: p,
      data: g,
      signal: C,
      cancelToken: E,
      timeout: O,
      onDownloadProgress: P,
      onUploadProgress: j,
      responseType: k,
      headers: ye,
      withCredentials: re = "same-origin",
      fetchOptions: Be
    } = gt(f), Ue = t || fetch;
    k = k ? (k + "").toLowerCase() : "text";
    let se = tr([C, E && E.toAbortSignal()], O), X = null;
    const v = se && se.unsubscribe && (() => {
      se.unsubscribe();
    });
    let Fe;
    try {
      if (j && u && p !== "get" && p !== "head" && (Fe = await _(ye, g)) !== 0) {
        let F = new n(m, {
          method: "POST",
          body: g,
          duplex: "half"
        }), H;
        if (a.isFormData(g) && (H = F.headers.get("content-type")) && ye.setContentType(H), F.body) {
          const [be, oe] = ze(
            Fe,
            ue(He(j))
          );
          g = Ve(F.body, We, be, oe);
        }
      }
      a.isString(re) || (re = re ? "include" : "omit");
      const A = o && "credentials" in n.prototype, De = {
        ...Be,
        signal: se,
        method: p.toUpperCase(),
        headers: ye.normalize().toJSON(),
        body: g,
        duplex: "half",
        credentials: A ? re : void 0
      };
      X = o && new n(m, De);
      let U = await (o ? Ue(X, Be) : Ue(m, De));
      const Le = l && (k === "stream" || k === "response");
      if (l && (P || Le && v)) {
        const F = {};
        ["status", "statusText", "headers"].forEach((Ie) => {
          F[Ie] = U[Ie];
        });
        const H = a.toFiniteNumber(U.headers.get("content-length")), [be, oe] = P && ze(
          H,
          ue(He(P), !0)
        ) || [];
        U = new r(
          Ve(U.body, We, be, () => {
            oe && oe(), v && v();
          }),
          F
        );
      }
      k = k || "text";
      let xt = await h[a.findKey(h, k) || "text"](U, f);
      return !Le && v && v(), await new Promise((F, H) => {
        bt(F, H, {
          data: xt,
          headers: x.from(U.headers),
          status: U.status,
          statusText: U.statusText,
          config: f,
          request: X
        });
      });
    } catch (A) {
      throw v && v(), A && A.name === "TypeError" && /Load failed|fetch/i.test(A.message) ? Object.assign(
        new y("Network Error", y.ERR_NETWORK, f, X, A && A.response),
        {
          cause: A.cause || A
        }
      ) : y.from(A, A && A.code, f, X, A && A.response);
    }
  };
}, ar = /* @__PURE__ */ new Map(), Et = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, o = [
    r,
    s,
    n
  ];
  let i = o.length, c = i, d, u, l = ar;
  for (; c--; )
    d = o[c], u = l.get(d), u === void 0 && l.set(d, u = c ? /* @__PURE__ */ new Map() : ir(t)), l = u;
  return u;
};
Et();
const Pe = {
  http: On,
  xhr: er,
  fetch: {
    get: Et
  }
};
a.forEach(Pe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ze = (e) => `- ${e}`, cr = (e) => a.isFunction(e) || e === null || e === !1;
function lr(e, t) {
  e = a.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const o = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let c;
    if (s = r, !cr(r) && (s = Pe[(c = String(r)).toLowerCase()], s === void 0))
      throw new y(`Unknown adapter '${c}'`);
    if (s && (a.isFunction(s) || (s = s.get(t))))
      break;
    o[c || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(o).map(
      ([d, u]) => `adapter ${d} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let c = n ? i.length > 1 ? `since :
` + i.map(Ze).join(`
`) : " " + Ze(i[0]) : "as no adapter specified";
    throw new y(
      "There is no suitable adapter to dispatch the request " + c,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Rt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: lr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Pe
};
function Ee(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ne(null, e);
}
function Ye(e) {
  return Ee(e), e.headers = x.from(e.headers), e.data = ge.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Rt.getAdapter(e.adapter || te.adapter, e)(e).then(function(r) {
    return Ee(e), r.data = ge.call(
      e,
      e.transformResponse,
      r
    ), r.headers = x.from(r.headers), r;
  }, function(r) {
    return yt(r) || (Ee(e), r && r.response && (r.response.data = ge.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = x.from(r.response.headers))), Promise.reject(r);
  });
}
const _t = "1.13.5", me = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  me[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Qe = {};
me.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + _t + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new y(
        s(i, " has been removed" + (n ? " in " + n : "")),
        y.ERR_DEPRECATED
      );
    return n && !Qe[i] && (Qe[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
me.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function ur(e, t, n) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], d = c === void 0 || i(c, o, e);
      if (d !== !0)
        throw new y("option " + o + " must be " + d, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new y("Unknown option " + o, y.ERR_BAD_OPTION);
  }
}
const le = {
  assertOptions: ur,
  validators: me
}, N = le.validators;
let M = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new $e(),
      response: new $e()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = z(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && le.assertOptions(r, {
      silentJSONParsing: N.transitional(N.boolean),
      forcedJSONParsing: N.transitional(N.boolean),
      clarifyTimeoutError: N.transitional(N.boolean),
      legacyInterceptorReqResOrdering: N.transitional(N.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : le.assertOptions(s, {
      encode: N.function,
      serialize: N.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), le.assertOptions(n, {
      baseUrl: N.spelling("baseURL"),
      withXsrfToken: N.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), n.headers = x.concat(i, o);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(m) {
      if (typeof m.runWhen == "function" && m.runWhen(n) === !1)
        return;
      d = d && m.synchronous;
      const p = n.transitional || ke;
      p && p.legacyInterceptorReqResOrdering ? c.unshift(m.fulfilled, m.rejected) : c.push(m.fulfilled, m.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let l, h = 0, b;
    if (!d) {
      const f = [Ye.bind(this), void 0];
      for (f.unshift(...c), f.push(...u), b = f.length, l = Promise.resolve(n); h < b; )
        l = l.then(f[h++], f[h++]);
      return l;
    }
    b = c.length;
    let _ = n;
    for (; h < b; ) {
      const f = c[h++], m = c[h++];
      try {
        _ = f(_);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      l = Ye.call(this, _);
    } catch (f) {
      return Promise.reject(f);
    }
    for (h = 0, b = u.length; h < b; )
      l = l.then(u[h++], u[h++]);
    return l;
  }
  getUri(t) {
    t = z(this.defaults, t);
    const n = wt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return ht(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  M.prototype[t] = function(n, r) {
    return this.request(z(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(z(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  M.prototype[t] = n(), M.prototype[t + "Form"] = n(!0);
});
let dr = class St {
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
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      r.reason || (r.reason = new ne(o, i, c), n(r.reason));
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
      token: new St(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function fr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function pr(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Te = {
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
Object.entries(Te).forEach(([e, t]) => {
  Te[t] = e;
});
function Ot(e) {
  const t = new M(e), n = rt(M.prototype.request, t);
  return a.extend(n, M.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ot(z(e, s));
  }, n;
}
const w = Ot(te);
w.Axios = M;
w.CanceledError = ne;
w.CancelToken = dr;
w.isCancel = yt;
w.VERSION = _t;
w.toFormData = he;
w.AxiosError = y;
w.Cancel = w.CanceledError;
w.all = function(t) {
  return Promise.all(t);
};
w.spread = fr;
w.isAxiosError = pr;
w.mergeConfig = z;
w.AxiosHeaders = x;
w.formToJSON = (e) => mt(a.isHTMLForm(e) ? new FormData(e) : e);
w.getAdapter = Rt.getAdapter;
w.HttpStatusCode = Te;
w.default = w;
const {
  Axios: Mr,
  AxiosError: zr,
  CanceledError: Hr,
  isCancel: Jr,
  CancelToken: Vr,
  VERSION: Wr,
  all: Kr,
  Cancel: Xr,
  isAxiosError: Gr,
  spread: Zr,
  toFormData: Yr,
  AxiosHeaders: Qr,
  HttpStatusCode: es,
  formToJSON: ts,
  getAdapter: ns,
  mergeConfig: rs
} = w;
function hr() {
  const e = V(!1), t = V(null);
  return { post: async (r, s, o = null) => {
    e.value = !0, t.value = null;
    try {
      const { data: i } = await w.post(r, s, {
        headers: o ? { Authorization: `Bearer ${o}` } : {}
      });
      return i;
    } catch (i) {
      return t.value = i.response?.data?.message || "Error", null;
    } finally {
      e.value = !1;
    }
  }, loading: e, error: t };
}
const et = V([]), Re = V(null), _e = V(!1), mr = V("create"), q = Ct({
  holder_name: "",
  ifsc_code: "",
  account_number: "",
  upi_id: "",
  country: ""
}), At = () => {
  const { post: e, error: t } = hr(), n = "https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management", r = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", s = async () => {
    const d = await e(n, {
      operation: "get_bank_accounts",
      user_id: "user_1",
      page: 1,
      limit: 10
    }, r);
    if (!d?.success) return console.log("api error", t.value);
    et.value = d.bank_accounts.slice().reverse();
  };
  return {
    bankAccounts: et,
    getBanks: s,
    createBank: async () => {
      if (!(await e(n, {
        operation: "add_bank_account",
        user_id: "user_1",
        ...q
      }, r))?.success) return console.log("api error", t.value);
      await s(), Re.value = null, _e.value = !1, Object.keys(q).forEach((u) => q[u] = "");
    },
    updateBank: async (d) => {
      const u = Object.fromEntries(
        Object.entries(q).filter(([h, b]) => b !== "" && b !== null)
      );
      if (!(await e(n, {
        operation: "update_bank_account",
        user_id: "user_1",
        account_id: d,
        ...u
      }, r))?.success) return console.log("api error", t.value);
      await s(), Re.value = null, _e.value = !1, Object.keys(q).forEach((h) => q[h] = "");
    },
    removeBank: async (d) => {
      if (!(await e(n, {
        operation: "delete_bank_account",
        user_id: "user_1",
        account_id: d
      }, r))?.success) return console.log("api error", t.value);
      await s();
    },
    selectedBank: Re,
    showForm: _e,
    formMode: mr,
    form: q
  };
};
function yr(e, t) {
  return t.split(".").reduce((n, r) => n?.[r], e);
}
function br(e, t) {
  const { open: n, close: r } = t, s = [];
  let o = 0;
  for (; o < e.length; ) {
    const i = e.indexOf(n, o);
    if (i === -1) {
      s.push({ type: "text", value: e.slice(o) });
      break;
    }
    i > o && s.push({ type: "text", value: e.slice(o, i) });
    const c = e.indexOf(r, i + n.length);
    if (c === -1)
      throw new Error(`Unclosed template placeholder starting at ${i}`);
    const d = e.slice(i + n.length, c).trim(), [u, l] = d.split("=");
    s.push({ type: "param", value: u, defaultValue: l }), o = c + r.length;
  }
  return s;
}
function wr(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  return e.map((o) => {
    if (o.type === "text") return o.value;
    const i = yr(t, o.value);
    return r.add(o.value.split(".")[0]), i === void 0 || i === "" ? o.defaultValue !== void 0 ? o.defaultValue : "" : String(i);
  }).join("");
}
function Tt(e, t) {
  const n = {
    open: "{",
    close: "}"
  }, r = br(e, n);
  return (s) => wr(r, s);
}
const gr = { class: "flex" }, Er = {
  key: 0,
  class: "pl-2"
}, Rr = ["onClick"], _r = { class: "w-full" }, Sr = { class: "flex items-center justify-between px-4" }, Or = { class: "font-medium text-sm dark:text-white" }, Ar = { class: "font-medium text-sm dark:text-white" }, Tr = { class: "text-sm mt-2 text-light text-gray-500 px-4" }, xr = {
  key: 0,
  class: "flex justify-between items-center border-t border-black/20 mt-2"
}, Cr = ["onClick"], kr = ["onClick"], Nr = {
  key: 1,
  class: "border-t border-black/20 mt-2"
}, Pr = /* @__PURE__ */ tt({
  __name: "BankCard",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const { bankAccounts: t, removeBank: n } = At();
    e.__p.data.curr.data.mode = e.__p.data.curr.data.mode || "normal";
    const r = e.__p.data.curr.data.mode == "picker" ? "label" : "div", s = (i) => {
      try {
        const d = Tt(e.__p.data.curr.data.event.onClickEdit)({ id: i.account_id });
        location.href = `${d}`;
      } catch (c) {
        console.log(`editBank err:${c}`);
      }
    }, o = (i) => {
      e._p.f.call("msg", {
        type: "pick",
        _$p: e.__p,
        _p: e._p,
        custom: {
          bank: JSON.parse(JSON.stringify(i))
        }
      });
    };
    return (i, c) => (D(!0), L(kt, null, Nt(I(t), (d) => (D(), L("div", {
      key: d.account_id,
      class: "shadow-md pt-4 bg-white dark:bg-zinc-800"
    }, [
      nt(I(r), {
        class: Bt(e.__p.data.curr.data.mode == "picker" ? "block cursor-pointer" : "")
      }, {
        default: Pt(() => [
          R("div", gr, [
            e.__p.data.curr.data.mode == "picker" ? (D(), L("div", Er, [
              R("input", {
                type: "radio",
                name: "bank",
                class: "h-4 w-4 text-blue-600 focus:ring-blue-500",
                onClick: () => o(d)
              }, null, 8, Rr)
            ])) : Z("", !0),
            R("div", _r, [
              R("div", Sr, [
                R("p", Or, J(d.holder_name), 1),
                R("p", Ar, J(d.ifsc_code), 1)
              ]),
              R("div", Tr, [
                R("p", null, "Account No: " + J(d.account_number), 1),
                R("p", null, "UPI ID: " + J(d.upi_id), 1),
                R("p", null, "Country: " + J(d.country), 1)
              ])
            ])
          ]),
          e.__p.data.curr.data.mode == "normal" ? (D(), L("div", xr, [
            R("button", {
              onClick: (u) => s(d),
              class: "font-medium text-violet-500 flex-1 hover:bg-gray-100 dark:hover:bg-zinc-700 py-2"
            }, " EDIT ", 8, Cr),
            c[0] || (c[0] = R("p", { class: "text-black/20" }, "|", -1)),
            R("button", {
              onClick: (u) => I(n)(d.account_id),
              class: "font-medium text-violet-500 flex-1 hover:bg-gray-100 dark:hover:bg-zinc-700 py-2"
            }, " REMOVE ", 8, kr)
          ])) : Z("", !0),
          e.__p.data.curr.data.mode == "picker" ? (D(), L("div", Nr)) : Z("", !0)
        ]),
        _: 2
      }, 1032, ["class"])
    ]))), 128));
  }
}), Br = { class: "max-w-2xl mx-auto dark:bg-zinc-900" }, Ur = { key: 0 }, Fr = { class: "flex items-center justify-between my-4 bg-white dark:bg-zinc-800 p-2" }, Dr = { class: "text-xs text-gray-400" }, Lr = { key: 1 }, Ir = /* @__PURE__ */ tt({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const { bankAccounts: t, getBanks: n, showForm: r } = At();
    Ut(() => n()), Ft(t, (o) => console.log("bank updated:", o));
    const s = () => {
      try {
        const i = Tt(e._$p.data.curr.data.event.onClickAdd)({});
        location.href = `${i}`;
      } catch (o) {
        console.log(`addBank err:${o}`);
      }
    };
    return (async () => e._p.f.listen("msg", async (o) => {
      o.type === "theme:change" && (o.custom?.theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
    }))(), (o, i) => (D(), L("div", Br, [
      I(t).length >= 0 && !I(r) ? (D(), L("div", Ur, [
        R("div", Fr, [
          R("div", null, [
            i[0] || (i[0] = R("p", { class: "text-medium text-lg dark:text-white" }, "Saved Bank Accounts", -1)),
            R("p", Dr, "Bank count: " + J(I(t).length), 1)
          ]),
          R("button", {
            onClick: s,
            class: "font-medium text-violet-500 p-2 border border-black/20 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-zinc-700"
          }, " + ADD NEW BANK ")
        ])
      ])) : Z("", !0),
      I(t).length > 0 && !I(r) ? (D(), L("div", Lr, [
        nt(Pr, Dt(Lt({ _p: e._p, __p: e._$p })), null, 16)
      ])) : Z("", !0)
    ]));
  }
}), ss = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const r = It(Ir, {
      _p: e,
      _$p: t
    }), s = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          e.f.call("msg", {
            type: "change",
            _p: e,
            _$p: t,
            custom: {}
          });
        }
      }
    }, o = document.getElementById(e.f.name("vue-root"));
    return r.mount(o), s;
  }
});
export {
  ss as hydrator,
  ss as index
};
