import { r as J, a as Ct, d as tt, o as v, c as j, F as kt, b as Nt, u as $, e as nt, w as Pt, f as g, g as Q, t as D, n as Ft, h as Ut, i as Dt, j as Lt, k as Bt, l as vt } from "./runtime-dom.esm-bundler-DSnzm-ld.js";
function rt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: jt } = Object.prototype, { getPrototypeOf: Te } = Object, { iterator: de, toStringTag: st } = Symbol, fe = /* @__PURE__ */ ((e) => (t) => {
  const n = jt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), P = (e) => (e = e.toLowerCase(), (t) => fe(t) === e), pe = (e) => (t) => typeof t === e, { isArray: K } = Array, W = pe("undefined");
function Z(e) {
  return e !== null && !W(e) && e.constructor !== null && !W(e.constructor) && x(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ot = P("ArrayBuffer");
function $t(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ot(e.buffer), t;
}
const It = pe("string"), x = pe("function"), it = pe("number"), Y = (e) => e !== null && typeof e == "object", qt = (e) => e === !0 || e === !1, ae = (e) => {
  if (fe(e) !== "object")
    return !1;
  const t = Te(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(st in e) && !(de in e);
}, Mt = (e) => {
  if (!Y(e) || Z(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Ht = P("Date"), zt = P("File"), Vt = P("Blob"), Jt = P("FileList"), Wt = (e) => Y(e) && x(e.pipe), Kt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || x(e.append) && ((t = fe(e)) === "formdata" || // detect form-data instance
  t === "object" && x(e.toString) && e.toString() === "[object FormData]"));
}, Xt = P("URLSearchParams"), [Gt, Qt, Zt, Yt] = ["ReadableStream", "Request", "Response", "Headers"].map(P), en = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ee(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), K(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Z(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let c;
    for (r = 0; r < o; r++)
      c = i[r], t.call(null, e[c], c, e);
  }
}
function at(e, t) {
  if (Z(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const M = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ct = (e) => !W(e) && e !== M;
function Se() {
  const { caseless: e, skipUndefined: t } = ct(this) && this || {}, n = {}, r = (s, i) => {
    const o = e && at(n, i) || i;
    ae(n[o]) && ae(s) ? n[o] = Se(n[o], s) : ae(s) ? n[o] = Se({}, s) : K(s) ? n[o] = s.slice() : (!t || !W(s)) && (n[o] = s);
  };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && ee(arguments[s], r);
  return n;
}
const tn = (e, t, n, { allOwnKeys: r } = {}) => (ee(t, (s, i) => {
  n && x(s) ? Object.defineProperty(e, i, {
    value: rt(s, n),
    writable: !0,
    enumerable: !0,
    configurable: !0
  }) : Object.defineProperty(e, i, {
    value: s,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}, { allOwnKeys: r }), e), nn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), rn = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, sn = (e, t, n, r) => {
  let s, i, o;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !c[o] && (t[o] = e[o], c[o] = !0);
    e = n !== !1 && Te(e);
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
}, cn = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Te(Uint8Array)), ln = (e, t) => {
  const r = (e && e[de]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, un = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, dn = P("HTMLFormElement"), fn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), je = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), pn = P("RegExp"), lt = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ee(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, hn = (e) => {
  lt(e, (t, n) => {
    if (x(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (x(r)) {
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
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return K(e) ? r(e) : r(String(e).split(t)), n;
}, yn = () => {
}, bn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function wn(e) {
  return !!(e && x(e.append) && e[st] === "FormData" && e[de]);
}
const gn = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Y(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Z(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = K(r) ? [] : {};
        return ee(r, (o, c) => {
          const f = n(o, s + 1);
          !W(f) && (i[c] = f);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, En = P("AsyncFunction"), Rn = (e) => e && (Y(e) || x(e)) && x(e.then) && x(e.catch), ut = ((e, t) => e ? setImmediate : t ? ((n, r) => (M.addEventListener("message", ({ source: s, data: i }) => {
  s === M && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), M.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  x(M.postMessage)
), _n = typeof queueMicrotask < "u" ? queueMicrotask.bind(M) : typeof process < "u" && process.nextTick || ut, Sn = (e) => e != null && x(e[de]), a = {
  isArray: K,
  isArrayBuffer: ot,
  isBuffer: Z,
  isFormData: Kt,
  isArrayBufferView: $t,
  isString: It,
  isNumber: it,
  isBoolean: qt,
  isObject: Y,
  isPlainObject: ae,
  isEmptyObject: Mt,
  isReadableStream: Gt,
  isRequest: Qt,
  isResponse: Zt,
  isHeaders: Yt,
  isUndefined: W,
  isDate: Ht,
  isFile: zt,
  isBlob: Vt,
  isRegExp: pn,
  isFunction: x,
  isStream: Wt,
  isURLSearchParams: Xt,
  isTypedArray: cn,
  isFileList: Jt,
  forEach: ee,
  merge: Se,
  extend: tn,
  trim: en,
  stripBOM: nn,
  inherits: rn,
  toFlatObject: sn,
  kindOf: fe,
  kindOfTest: P,
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
  global: M,
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
  static from(t, n, r, s, i, o) {
    const c = new dt(t.message, n || t.code, r, s, i);
    return c.cause = t, c.name = t.name, o && Object.assign(c, o), c;
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
  constructor(t, n, r, s, i) {
    super(t), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), s && (this.request = s), i && (this.response = i, this.status = i.status);
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
function $e(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = ft(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function An(e) {
  return a.isArray(e) && !e.some(Oe);
}
const xn = a.toFlatObject(a, {}, null, function(t) {
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
  const r = n.metaTokens, s = n.visitor || l, i = n.dots, o = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null) return "";
    if (a.isDate(d))
      return d.toISOString();
    if (a.isBoolean(d))
      return d.toString();
    if (!f && a.isBlob(d))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(d) || a.isTypedArray(d) ? f && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, m, p) {
    let R = d;
    if (d && !p && typeof d == "object") {
      if (a.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (a.isArray(d) && An(d) || (a.isFileList(d) || a.endsWith(m, "[]")) && (R = a.toArray(d)))
        return m = ft(m), R.forEach(function(_, A) {
          !(a.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? $e([m], A, i) : o === null ? m : m + "[]",
            u(_)
          );
        }), !1;
    }
    return Oe(d) ? !0 : (t.append($e(p, m, i), u(d)), !1);
  }
  const h = [], b = Object.assign(xn, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Oe
  });
  function w(d, m) {
    if (!a.isUndefined(d)) {
      if (h.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      h.push(d), a.forEach(d, function(R, C) {
        (!(a.isUndefined(R) || R === null) && s.call(
          t,
          R,
          a.isString(C) ? C.trim() : C,
          m,
          b
        )) === !0 && w(R, m ? m.concat(C) : [C]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function Ie(e) {
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
    return t.call(this, r, Ie);
  } : Ie;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Tn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ht(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Tn, s = a.isFunction(n) ? {
    serialize: n
  } : n, i = s && s.serialize;
  let o;
  if (i ? o = i(t, s) : o = a.isURLSearchParams(t) ? t.toString() : new Ce(t, s).toString(r), o) {
    const c = e.indexOf("#");
    c !== -1 && (e = e.slice(0, c)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class qe {
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
const mt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Cn = typeof URLSearchParams < "u" ? URLSearchParams : Ce, kn = typeof FormData < "u" ? FormData : null, Nn = typeof Blob < "u" ? Blob : null, Pn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Cn,
    FormData: kn,
    Blob: Nn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ke = typeof window < "u" && typeof document < "u", Ae = typeof navigator == "object" && navigator || void 0, Fn = ke && (!Ae || ["ReactNative", "NativeScript", "NS"].indexOf(Ae.product) < 0), Un = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Dn = ke && window.location.href || "http://localhost", Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ke,
  hasStandardBrowserEnv: Fn,
  hasStandardBrowserWebWorkerEnv: Un,
  navigator: Ae,
  origin: Dn
}, Symbol.toStringTag, { value: "Module" })), S = {
  ...Ln,
  ...Pn
};
function Bn(e, t) {
  return he(e, new S.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return S.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function vn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function jn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function yt(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const c = Number.isFinite(+o), f = i >= n.length;
    return o = !o && a.isArray(s) ? s.length : o, f ? (a.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !c) : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && a.isArray(s[o]) && (s[o] = jn(s[o])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(vn(r), s, n, 0);
    }), n;
  }
  return null;
}
function $n(e, t, n) {
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
  transitional: mt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = a.isObject(t);
    if (i && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(yt(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Bn(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return he(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), $n(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || te.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (c) {
        if (o)
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
const In = a.toObjectSet([
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
]), qn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && In[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
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
const Hn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function zn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Vn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
let T = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(c, f, u) {
      const l = G(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, l);
      (!h || s[h] === void 0 || u === !0 || u === void 0 && s[h] !== !1) && (s[h || f] = ce(c));
    }
    const o = (c, f) => a.forEach(c, (u, l) => i(u, l, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (a.isString(t) && (t = t.trim()) && !Hn(t))
      o(qn(t), n);
    else if (a.isObject(t) && a.isIterable(t)) {
      let c = {}, f, u;
      for (const l of t) {
        if (!a.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        c[u = l[0]] = (f = c[u]) ? a.isArray(f) ? [...f, l[1]] : [f, l[1]] : l[1];
      }
      o(c, n);
    } else
      t != null && i(n, t, r);
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
    function i(o) {
      if (o = G(o), o) {
        const c = a.findKey(r, o);
        c && (!n || we(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || we(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, i) => {
      const o = a.findKey(r, i);
      if (o) {
        n[o] = ce(s), delete n[i];
        return;
      }
      const c = t ? zn(i) : String(i).trim();
      c !== i && delete n[i], n[c] = ce(s), r[c] = !0;
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
    function i(o) {
      const c = G(o);
      r[c] || (Vn(s, o), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
T.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(T.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(T);
function ge(e, t) {
  const n = this || te, r = t || n, s = T.from(r.headers);
  let i = r.data;
  return a.forEach(e, function(c) {
    i = c.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function bt(e) {
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
function wt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new y(
    "Request failed with status code " + n.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Jn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Wn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), l = r[i];
    o || (o = u), n[s] = f, r[s] = u;
    let h = i, b = 0;
    for (; h !== s; )
      b += n[h++], h = h % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), u - o < t)
      return;
    const w = l && u - l;
    return w ? Math.round(b * 1e3 / w) : void 0;
  };
}
function Kn(e, t) {
  let n = 0, r = 1e3 / t, s, i;
  const o = (u, l = Date.now()) => {
    n = l, s = null, i && (clearTimeout(i), i = null), e(...u);
  };
  return [(...u) => {
    const l = Date.now(), h = l - n;
    h >= r ? o(u, l) : (s = u, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - h)));
  }, () => s && o(s)];
}
const ue = (e, t, n = 3) => {
  let r = 0;
  const s = Wn(50, 250);
  return Kn((i) => {
    const o = i.loaded, c = i.lengthComputable ? i.total : void 0, f = o - r, u = s(f), l = o <= c;
    r = o;
    const h = {
      loaded: o,
      total: c,
      progress: c ? o / c : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && c && l ? (c - o) / u : void 0,
      event: i,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, He = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, ze = (e) => (...t) => a.asap(() => e(...t)), Xn = S.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, S.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(S.origin),
  S.navigator && /(msie|trident)/i.test(S.navigator.userAgent)
) : () => !0, Gn = S.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, i, o) {
      if (typeof document > "u") return;
      const c = [`${e}=${encodeURIComponent(t)}`];
      a.isNumber(n) && c.push(`expires=${new Date(n).toUTCString()}`), a.isString(r) && c.push(`path=${r}`), a.isString(s) && c.push(`domain=${s}`), i === !0 && c.push("secure"), a.isString(o) && c.push(`SameSite=${o}`), document.cookie = c.join("; ");
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
function Qn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Zn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function gt(e, t, n) {
  let r = !Qn(t);
  return e && (r || n == !1) ? Zn(e, t) : t;
}
const Ve = (e) => e instanceof T ? { ...e } : e;
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
  function i(u, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function o(u, l) {
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
  const f = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: c,
    headers: (u, l, h) => s(Ve(u), Ve(l), h, !0)
  };
  return a.forEach(Object.keys({ ...e, ...t }), function(l) {
    const h = f[l] || s, b = h(e[l], t[l], l);
    a.isUndefined(b) && h !== c || (n[l] = b);
  }), n;
}
const Et = (e) => {
  const t = z({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: c } = t;
  if (t.headers = o = T.from(o), t.url = ht(gt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && o.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  ), a.isFormData(n)) {
    if (S.hasStandardBrowserEnv || S.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (a.isFunction(n.getHeaders)) {
      const f = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(f).forEach(([l, h]) => {
        u.includes(l.toLowerCase()) && o.set(l, h);
      });
    }
  }
  if (S.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && Xn(t.url))) {
    const f = s && i && Gn.read(i);
    f && o.set(s, f);
  }
  return t;
}, Yn = typeof XMLHttpRequest < "u", er = Yn && function(e) {
  return new Promise(function(n, r) {
    const s = Et(e);
    let i = s.data;
    const o = T.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: f, onDownloadProgress: u } = s, l, h, b, w, d;
    function m() {
      w && w(), d && d(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function R() {
      if (!p)
        return;
      const _ = T.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), N = {
        data: !c || c === "text" || c === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: _,
        config: e,
        request: p
      };
      wt(function(k) {
        n(k), m();
      }, function(k) {
        r(k), m();
      }, N), p = null;
    }
    "onloadend" in p ? p.onloadend = R : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, p.onabort = function() {
      p && (r(new y("Request aborted", y.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function(A) {
      const N = A && A.message ? A.message : "Network Error", I = new y(N, y.ERR_NETWORK, e, p);
      I.event = A || null, r(I), p = null;
    }, p.ontimeout = function() {
      let A = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const N = s.transitional || mt;
      s.timeoutErrorMessage && (A = s.timeoutErrorMessage), r(new y(
        A,
        N.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in p && a.forEach(o.toJSON(), function(A, N) {
      p.setRequestHeader(N, A);
    }), a.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), c && c !== "json" && (p.responseType = s.responseType), u && ([b, d] = ue(u, !0), p.addEventListener("progress", b)), f && p.upload && ([h, w] = ue(f), p.upload.addEventListener("progress", h), p.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (l = (_) => {
      p && (r(!_ || _.type ? new ne(null, e, p) : _), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const C = Jn(s.url);
    if (C && S.protocols.indexOf(C) === -1) {
      r(new y("Unsupported protocol " + C + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, tr = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const i = function(u) {
      if (!s) {
        s = !0, c();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof y ? l : new ne(l instanceof Error ? l.message : l));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new y(`timeout of ${t}ms exceeded`, y.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: f } = r;
    return f.unsubscribe = () => a.asap(c), f;
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
}, Je = (e, t, n, r) => {
  const s = rr(e, t);
  let i = 0, o, c = (f) => {
    o || (o = !0, r && r(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: u, value: l } = await s.next();
        if (u) {
          c(), f.close();
          return;
        }
        let h = l.byteLength;
        if (n) {
          let b = i += h;
          n(b);
        }
        f.enqueue(new Uint8Array(l));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(f) {
      return c(f), s.return();
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
  const { fetch: t, Request: n, Response: r } = e, s = t ? ie(t) : typeof fetch == "function", i = ie(n), o = ie(r);
  if (!s)
    return !1;
  const c = s && ie(Ke), f = s && (typeof Xe == "function" ? /* @__PURE__ */ ((d) => (m) => d.encode(m))(new Xe()) : async (d) => new Uint8Array(await new n(d).arrayBuffer())), u = i && c && Ge(() => {
    let d = !1;
    const m = new n(S.origin, {
      body: new Ke(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !m;
  }), l = o && c && Ge(() => a.isReadableStream(new r("").body)), h = {
    stream: l && ((d) => d.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !h[d] && (h[d] = (m, p) => {
      let R = m && m[d];
      if (R)
        return R.call(m);
      throw new y(`Response type '${d}' is not supported`, y.ERR_NOT_SUPPORT, p);
    });
  });
  const b = async (d) => {
    if (d == null)
      return 0;
    if (a.isBlob(d))
      return d.size;
    if (a.isSpecCompliantForm(d))
      return (await new n(S.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(d) || a.isArrayBuffer(d))
      return d.byteLength;
    if (a.isURLSearchParams(d) && (d = d + ""), a.isString(d))
      return (await f(d)).byteLength;
  }, w = async (d, m) => {
    const p = a.toFiniteNumber(d.getContentLength());
    return p ?? b(m);
  };
  return async (d) => {
    let {
      url: m,
      method: p,
      data: R,
      signal: C,
      cancelToken: _,
      timeout: A,
      onDownloadProgress: N,
      onUploadProgress: I,
      responseType: k,
      headers: ye,
      withCredentials: re = "same-origin",
      fetchOptions: Fe
    } = Et(d), Ue = t || fetch;
    k = k ? (k + "").toLowerCase() : "text";
    let se = tr([C, _ && _.toAbortSignal()], A), X = null;
    const q = se && se.unsubscribe && (() => {
      se.unsubscribe();
    });
    let De;
    try {
      if (I && u && p !== "get" && p !== "head" && (De = await w(ye, R)) !== 0) {
        let B = new n(m, {
          method: "POST",
          body: R,
          duplex: "half"
        }), V;
        if (a.isFormData(R) && (V = B.headers.get("content-type")) && ye.setContentType(V), B.body) {
          const [be, oe] = He(
            De,
            ue(ze(I))
          );
          R = Je(B.body, We, be, oe);
        }
      }
      a.isString(re) || (re = re ? "include" : "omit");
      const F = i && "credentials" in n.prototype, Le = {
        ...Fe,
        signal: se,
        method: p.toUpperCase(),
        headers: ye.normalize().toJSON(),
        body: R,
        duplex: "half",
        credentials: F ? re : void 0
      };
      X = i && new n(m, Le);
      let L = await (i ? Ue(X, Fe) : Ue(m, Le));
      const Be = l && (k === "stream" || k === "response");
      if (l && (N || Be && q)) {
        const B = {};
        ["status", "statusText", "headers"].forEach((ve) => {
          B[ve] = L[ve];
        });
        const V = a.toFiniteNumber(L.headers.get("content-length")), [be, oe] = N && He(
          V,
          ue(ze(N), !0)
        ) || [];
        L = new r(
          Je(L.body, We, be, () => {
            oe && oe(), q && q();
          }),
          B
        );
      }
      k = k || "text";
      let Tt = await h[a.findKey(h, k) || "text"](L, d);
      return !Be && q && q(), await new Promise((B, V) => {
        wt(B, V, {
          data: Tt,
          headers: T.from(L.headers),
          status: L.status,
          statusText: L.statusText,
          config: d,
          request: X
        });
      });
    } catch (F) {
      throw q && q(), F && F.name === "TypeError" && /Load failed|fetch/i.test(F.message) ? Object.assign(
        new y("Network Error", y.ERR_NETWORK, d, X),
        {
          cause: F.cause || F
        }
      ) : y.from(F, F && F.code, d, X);
    }
  };
}, ar = /* @__PURE__ */ new Map(), Rt = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, i = [
    r,
    s,
    n
  ];
  let o = i.length, c = o, f, u, l = ar;
  for (; c--; )
    f = i[c], u = l.get(f), u === void 0 && l.set(f, u = c ? /* @__PURE__ */ new Map() : ir(t)), l = u;
  return u;
};
Rt();
const Ne = {
  http: On,
  xhr: er,
  fetch: {
    get: Rt
  }
};
a.forEach(Ne, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qe = (e) => `- ${e}`, cr = (e) => a.isFunction(e) || e === null || e === !1;
function lr(e, t) {
  e = a.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const i = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let c;
    if (s = r, !cr(r) && (s = Ne[(c = String(r)).toLowerCase()], s === void 0))
      throw new y(`Unknown adapter '${c}'`);
    if (s && (a.isFunction(s) || (s = s.get(t))))
      break;
    i[c || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(i).map(
      ([f, u]) => `adapter ${f} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let c = n ? o.length > 1 ? `since :
` + o.map(Qe).join(`
`) : " " + Qe(o[0]) : "as no adapter specified";
    throw new y(
      "There is no suitable adapter to dispatch the request " + c,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const _t = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: lr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ne
};
function Ee(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ne(null, e);
}
function Ze(e) {
  return Ee(e), e.headers = T.from(e.headers), e.data = ge.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), _t.getAdapter(e.adapter || te.adapter, e)(e).then(function(r) {
    return Ee(e), r.data = ge.call(
      e,
      e.transformResponse,
      r
    ), r.headers = T.from(r.headers), r;
  }, function(r) {
    return bt(r) || (Ee(e), r && r.response && (r.response.data = ge.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = T.from(r.response.headers))), Promise.reject(r);
  });
}
const St = "1.13.4", me = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  me[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ye = {};
me.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + St + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, c) => {
    if (t === !1)
      throw new y(
        s(o, " has been removed" + (n ? " in " + n : "")),
        y.ERR_DEPRECATED
      );
    return n && !Ye[o] && (Ye[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, c) : !0;
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
    const i = r[s], o = t[i];
    if (o) {
      const c = e[i], f = c === void 0 || o(c, i, e);
      if (f !== !0)
        throw new y("option " + i + " must be " + f, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new y("Unknown option " + i, y.ERR_BAD_OPTION);
  }
}
const le = {
  assertOptions: ur,
  validators: me
}, U = le.validators;
let H = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new qe(),
      response: new qe()
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
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = z(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && le.assertOptions(r, {
      silentJSONParsing: U.transitional(U.boolean),
      forcedJSONParsing: U.transitional(U.boolean),
      clarifyTimeoutError: U.transitional(U.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : le.assertOptions(s, {
      encode: U.function,
      serialize: U.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), le.assertOptions(n, {
      baseUrl: U.spelling("baseURL"),
      withXsrfToken: U.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && a.merge(
      i.common,
      i[n.method]
    );
    i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), n.headers = T.concat(o, i);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (f = f && m.synchronous, c.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let l, h = 0, b;
    if (!f) {
      const d = [Ze.bind(this), void 0];
      for (d.unshift(...c), d.push(...u), b = d.length, l = Promise.resolve(n); h < b; )
        l = l.then(d[h++], d[h++]);
      return l;
    }
    b = c.length;
    let w = n;
    for (; h < b; ) {
      const d = c[h++], m = c[h++];
      try {
        w = d(w);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      l = Ze.call(this, w);
    } catch (d) {
      return Promise.reject(d);
    }
    for (h = 0, b = u.length; h < b; )
      l = l.then(u[h++], u[h++]);
    return l;
  }
  getUri(t) {
    t = z(this.defaults, t);
    const n = gt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return ht(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  H.prototype[t] = function(n, r) {
    return this.request(z(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, c) {
      return this.request(z(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  H.prototype[t] = n(), H.prototype[t + "Form"] = n(!0);
});
let dr = class Ot {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((c) => {
        r.subscribe(c), i = c;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, c) {
      r.reason || (r.reason = new ne(i, o, c), n(r.reason));
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
      token: new Ot(function(s) {
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
const xe = {
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
Object.entries(xe).forEach(([e, t]) => {
  xe[t] = e;
});
function At(e) {
  const t = new H(e), n = rt(H.prototype.request, t);
  return a.extend(n, H.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return At(z(e, s));
  }, n;
}
const E = At(te);
E.Axios = H;
E.CanceledError = ne;
E.CancelToken = dr;
E.isCancel = bt;
E.VERSION = St;
E.toFormData = he;
E.AxiosError = y;
E.Cancel = E.CanceledError;
E.all = function(t) {
  return Promise.all(t);
};
E.spread = fr;
E.isAxiosError = pr;
E.mergeConfig = z;
E.AxiosHeaders = T;
E.formToJSON = (e) => yt(a.isHTMLForm(e) ? new FormData(e) : e);
E.getAdapter = _t.getAdapter;
E.HttpStatusCode = xe;
E.default = E;
const {
  Axios: Hr,
  AxiosError: zr,
  CanceledError: Vr,
  isCancel: Jr,
  CancelToken: Wr,
  VERSION: Kr,
  all: Xr,
  Cancel: Gr,
  isAxiosError: Qr,
  spread: Zr,
  toFormData: Yr,
  AxiosHeaders: es,
  HttpStatusCode: ts,
  formToJSON: ns,
  getAdapter: rs,
  mergeConfig: ss
} = E;
function hr() {
  const e = J(!1), t = J(null);
  return { post: async (r, s, i = null) => {
    e.value = !0, t.value = null;
    try {
      const { data: o } = await E.post(r, s, {
        headers: i ? { Authorization: `Bearer ${i}` } : {}
      });
      return o;
    } catch (o) {
      return t.value = o.response?.data?.message || "Error", null;
    } finally {
      e.value = !1;
    }
  }, loading: e, error: t };
}
function mr(e, t) {
  return t.split(".").reduce((n, r) => n?.[r], e);
}
function yr(e, t) {
  const { open: n, close: r } = t, s = [];
  let i = 0;
  for (; i < e.length; ) {
    const o = e.indexOf(n, i);
    if (o === -1) {
      s.push({ type: "text", value: e.slice(i) });
      break;
    }
    o > i && s.push({ type: "text", value: e.slice(i, o) });
    const c = e.indexOf(r, o + n.length);
    if (c === -1)
      throw new Error(`Unclosed template placeholder starting at ${o}`);
    const f = e.slice(o + n.length, c).trim(), [u, l] = f.split("=");
    s.push({ type: "param", value: u, defaultValue: l }), i = c + r.length;
  }
  return s;
}
function br(e, t, n) {
  const r = /* @__PURE__ */ new Set(), s = e.map((i) => {
    if (i.type === "text") return i.value;
    const o = mr(t, i.value);
    if (r.add(i.value.split(".")[0]), o === void 0 || o === "") {
      if (i.defaultValue !== void 0) return i.defaultValue;
      if (n.strict) throw new Error(`Missing param: ${i.value}`);
      return "";
    }
    return n.encode ? encodeURIComponent(String(o)) : String(o);
  }).join("");
  if (n.strict) {
    for (const i of Object.keys(t))
      if (!r.has(i))
        throw new Error(`Unused param provided: ${i}`);
  }
  return s;
}
function Pe(e, t) {
  const n = {
    open: t?.open ?? "{",
    close: t?.close ?? "}",
    encode: t?.encode ?? !1,
    strict: t?.strict ?? !1
  }, r = yr(e, n);
  return (s) => br(r, s, n);
}
const et = J([]), Re = J(null), _e = J(!1), wr = J("create"), O = Ct({
  name: "",
  phone_number: "",
  street: "",
  landmark: "",
  city: "",
  state: "",
  pincode: "",
  address_type: ""
}), xt = (e) => {
  const t = e._$p, { post: n, error: r } = hr(), i = Pe(t.data.curr.data.api.token, { open: "<", close: ">" })({
    localStorage: {
      token: localStorage.getItem("token") || ""
    }
  }).replace("Bearer ", ""), o = t.data.curr.data.api.url, c = i, f = async () => {
    const b = await n(
      o,
      {
        operation: "get_address",
        user_id: "user_1",
        page: 1,
        limit: 100,
        search: ""
      },
      c
    );
    if (!b?.success) return console.log("api error", r.value);
    et.value = b.data.slice().reverse();
  };
  return { addresses: et, getAddress: f, createAddress: async () => {
    if (console.log("create address run", O), !(await n(
      o,
      {
        operation: "add_address",
        user_id: "user_1",
        name: O.name,
        phone_number: O.phone_number,
        street: O.street,
        city: O.city,
        state: O.state,
        pincode: O.pincode,
        landmark: O.landmark,
        address_type: O.address_type,
        country_code: "IN",
        is_default: !0
      },
      c
    ))?.success) return console.log("api error", r.value);
    await f(), Re.value = null, _e.value = !1, Object.keys(O).forEach((w) => O[w] = "");
  }, updateAddress: async (b) => {
    const w = Object.fromEntries(
      Object.entries(O).filter(([m, p]) => p !== "" && p !== null)
    );
    if (!(await n(o, {
      operation: "update_address",
      user_id: "user_1",
      address_id: b,
      ...w
    }, c))?.success) return console.log("api error", r.value);
    await f(), Re.value = null, _e.value = !1, Object.keys(O).forEach((m) => O[m] = "");
  }, removeAddress: async (b) => {
    if (!(await n(
      o,
      {
        operation: "remove_address",
        user_id: "user_1",
        address_id: b
      },
      c
    ))?.success) return console.log("api error", r.value);
    await f();
  }, selectedAddress: Re, showForm: _e, formMode: wr, form: O };
}, gr = { class: "flex" }, Er = {
  key: 0,
  class: "pl-2"
}, Rr = ["onClick"], _r = { class: "w-full" }, Sr = { class: "flex items-center justify-between px-4" }, Or = { class: "font-medium text-sm dark:text-white" }, Ar = { class: "font-medium text-sm dark:text-white" }, xr = { class: "text-sm mt-2 text-light text-gray-500 px-4" }, Tr = { class: "mt-2" }, Cr = {
  key: 0,
  class: "flex justify-between items-center border-t border-black/20 mt-2"
}, kr = ["onClick"], Nr = ["onClick"], Pr = {
  key: 1,
  class: "flex justify-between items-center border-t border-black/20 mt-2"
}, Fr = /* @__PURE__ */ tt({
  __name: "AddressCard",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const { addresses: t, removeAddress: n } = xt({ _$p: e.__p });
    e.__p.data.curr.data.mode = e.__p.data.curr.data.mode || "normal";
    const r = e.__p.data.curr.data.mode == "picker" ? "label" : "div", s = (o) => {
      try {
        const f = Pe(e.__p.data.curr.data.event.onClickEdit)({
          id: o.address_id
        });
        location.href = `${f}`;
      } catch (c) {
        console.log(`editAddress, err:${c}`);
      }
    }, i = (o) => {
      e._p.f.call("msg", {
        type: "pick",
        _$p: e.__p,
        _p: e._p,
        custom: {
          address: JSON.parse(JSON.stringify(o))
        }
      });
    };
    return (o, c) => (v(!0), j(kt, null, Nt($(t), (f) => (v(), j("div", {
      key: f.address_id,
      class: "shadow-md pt-4 bg-white dark:bg-zinc-800"
    }, [
      nt($(r), {
        class: Ft(e.__p.data.curr.data.mode == "picker" ? "block cursor-pointer" : "")
      }, {
        default: Pt(() => [
          g("div", gr, [
            e.__p.data.curr.data.mode == "picker" ? (v(), j("div", Er, [
              g("input", {
                type: "radio",
                name: "plan",
                class: "h-4 w-4 text-blue-600 focus:ring-blue-500",
                onClick: () => {
                  i(f);
                }
              }, null, 8, Rr)
            ])) : Q("", !0),
            g("div", _r, [
              g("div", Sr, [
                g("p", Or, D(f.name), 1),
                g("p", Ar, D(f.address_type), 1)
              ]),
              g("div", xr, [
                g("p", null, D(f.street), 1),
                g("p", null, D(f.landmark), 1),
                g("p", null, D(f.city), 1),
                g("p", null, D(f.state), 1),
                g("p", null, D(f.pincode), 1),
                g("p", Tr, "Mobile No.: " + D(f.phone_number), 1)
              ])
            ])
          ]),
          e.__p.data.curr.data.mode == "normal" ? (v(), j("div", Cr, [
            g("button", {
              onClick: (u) => s(f),
              class: "font-medium text-violet-500 text-center flex-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-700 py-2"
            }, "EDIT", 8, kr),
            c[0] || (c[0] = g("p", { class: "text-black/20" }, "|", -1)),
            g("button", {
              onClick: (u) => $(n)(f.address_id),
              class: "font-medium text-violet-500 text-center flex-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-700 py-2"
            }, "REMOVE", 8, Nr)
          ])) : Q("", !0),
          e.__p.data.curr.data.mode == "picker" ? (v(), j("div", Pr)) : Q("", !0)
        ]),
        _: 2
      }, 1032, ["class"])
    ]))), 128));
  }
}), Ur = { class: "max-w-2xl mx-auto dark:bg-zinc-900" }, Dr = { key: 0 }, Lr = { class: "flex items-center justify-between my-4 bg-white dark:bg-zinc-800 p-2" }, Br = { class: "text-xs text-gray-400" }, vr = { key: 1 }, jr = /* @__PURE__ */ tt({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const { addresses: t, getAddress: n, showForm: r } = xt({ _$p: e._$p });
    Ut(() => n()), Dt(t, (i) => console.log("address updated:", i));
    const s = () => {
      try {
        const o = Pe(e._$p.data.curr.data.event.onClickAdd)({});
        location.href = `${o}`;
      } catch (i) {
        console.log(`addAddress, err:${i}`);
      }
    };
    return (async () => e._p.f.listen("msg", async (i) => {
      i.type === "theme:change" && (i.custom?.theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
    }))(), (i, o) => (v(), j("div", Ur, [
      $(t).length >= 0 && !$(r) ? (v(), j("div", Dr, [
        g("div", Lr, [
          g("div", null, [
            o[1] || (o[1] = g("p", { class: "text-medium text-lg dark:text-white" }, "Saved Addresses", -1)),
            g("p", Br, "Address length: " + D($(t).length), 1)
          ]),
          g("button", {
            onClick: o[0] || (o[0] = (c) => s()),
            class: "font-medium text-violet-500 p-2 border border-black/20 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer"
          }, " + ADD NEW ADDRESS ")
        ])
      ])) : Q("", !0),
      $(t).length > 0 && !$(r) ? (v(), j("div", vr, [
        nt(Fr, Lt(Bt({ _p: e._p, __p: e._$p })), null, 16)
      ])) : Q("", !0)
    ]));
  }
}), os = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const r = vt(jr, {
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
    }, i = document.getElementById(e.f.name("vue-root"));
    return r.mount(i), s;
  }
});
export {
  os as hydrator,
  os as index
};
