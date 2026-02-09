import { r as H, a as xt, d as Qe, o as Ee, c as Re, b as w, w as J, v as W, u as P, t as _t, e as Tt, n as At, g as Ct, f as Nt, h as kt } from "./runtime-dom.esm-bundler-C5keawql.js";
function et(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Pt } = Object.prototype, { getPrototypeOf: Te } = Object, { iterator: le, toStringTag: tt } = Symbol, ue = /* @__PURE__ */ ((e) => (t) => {
  const n = Pt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), B = (e) => (e = e.toLowerCase(), (t) => ue(t) === e), fe = (e) => (t) => typeof t === e, { isArray: z } = Array, $ = fe("undefined");
function X(e) {
  return e !== null && !$(e) && e.constructor !== null && !$(e.constructor) && T(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const nt = B("ArrayBuffer");
function Ut(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && nt(e.buffer), t;
}
const Bt = fe("string"), T = fe("function"), rt = fe("number"), G = (e) => e !== null && typeof e == "object", Ft = (e) => e === !0 || e === !1, se = (e) => {
  if (ue(e) !== "object")
    return !1;
  const t = Te(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(tt in e) && !(le in e);
}, Dt = (e) => {
  if (!G(e) || X(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Lt = B("Date"), It = B("File"), jt = B("Blob"), vt = B("FileList"), qt = (e) => G(e) && T(e.pipe), Mt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || T(e.append) && ((t = ue(e)) === "formdata" || // detect form-data instance
  t === "object" && T(e.toString) && e.toString() === "[object FormData]"));
}, Ht = B("URLSearchParams"), [$t, zt, Vt, Jt] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(B), Wt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Z(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), z(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (X(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function st(e, t) {
  if (X(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const j = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ot = (e) => !$(e) && e !== j;
function Se() {
  const { caseless: e, skipUndefined: t } = ot(this) && this || {}, n = {}, r = (s, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const i = e && st(n, o) || o;
    se(n[i]) && se(s) ? n[i] = Se(n[i], s) : se(s) ? n[i] = Se({}, s) : z(s) ? n[i] = s.slice() : (!t || !$(s)) && (n[i] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && Z(arguments[s], r);
  return n;
}
const Kt = (e, t, n, { allOwnKeys: r } = {}) => (Z(
  t,
  (s, o) => {
    n && T(s) ? Object.defineProperty(e, o, {
      value: et(s, n),
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
), e), Xt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Gt = (e, t, n, r) => {
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
}, Zt = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && Te(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Yt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Qt = (e) => {
  if (!e) return null;
  if (z(e)) return e;
  let t = e.length;
  if (!rt(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, en = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Te(Uint8Array)), tn = (e, t) => {
  const r = (e && e[le]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, nn = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, rn = B("HTMLFormElement"), sn = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
  return r.toUpperCase() + s;
}), Ie = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), on = B("RegExp"), it = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Z(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, an = (e) => {
  it(e, (t, n) => {
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
}, cn = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return z(e) ? r(e) : r(String(e).split(t)), n;
}, ln = () => {
}, un = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function fn(e) {
  return !!(e && T(e.append) && e[tt] === "FormData" && e[le]);
}
const dn = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (G(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (X(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = z(r) ? [] : {};
        return Z(r, (i, c) => {
          const d = n(i, s + 1);
          !$(d) && (o[c] = d);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, pn = B("AsyncFunction"), hn = (e) => e && (G(e) || T(e)) && T(e.then) && T(e.catch), at = ((e, t) => e ? setImmediate : t ? ((n, r) => (j.addEventListener(
  "message",
  ({ source: s, data: o }) => {
    s === j && o === n && r.length && r.shift()();
  },
  !1
), (s) => {
  r.push(s), j.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", T(j.postMessage)), mn = typeof queueMicrotask < "u" ? queueMicrotask.bind(j) : typeof process < "u" && process.nextTick || at, yn = (e) => e != null && T(e[le]), a = {
  isArray: z,
  isArrayBuffer: nt,
  isBuffer: X,
  isFormData: Mt,
  isArrayBufferView: Ut,
  isString: Bt,
  isNumber: rt,
  isBoolean: Ft,
  isObject: G,
  isPlainObject: se,
  isEmptyObject: Dt,
  isReadableStream: $t,
  isRequest: zt,
  isResponse: Vt,
  isHeaders: Jt,
  isUndefined: $,
  isDate: Lt,
  isFile: It,
  isBlob: jt,
  isRegExp: on,
  isFunction: T,
  isStream: qt,
  isURLSearchParams: Ht,
  isTypedArray: en,
  isFileList: vt,
  forEach: Z,
  merge: Se,
  extend: Kt,
  trim: Wt,
  stripBOM: Xt,
  inherits: Gt,
  toFlatObject: Zt,
  kindOf: ue,
  kindOfTest: B,
  endsWith: Yt,
  toArray: Qt,
  forEachEntry: tn,
  matchAll: nn,
  isHTMLForm: rn,
  hasOwnProperty: Ie,
  hasOwnProp: Ie,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: it,
  freezeMethods: an,
  toObjectSet: cn,
  toCamelCase: sn,
  noop: ln,
  toFiniteNumber: un,
  findKey: st,
  global: j,
  isContextDefined: ot,
  isSpecCompliantForm: fn,
  toJSONObject: dn,
  isAsyncFn: pn,
  isThenable: hn,
  setImmediate: at,
  asap: mn,
  isIterable: yn
};
let y = class ct extends Error {
  static from(t, n, r, s, o, i) {
    const c = new ct(t.message, n || t.code, r, s, o);
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
const bn = null;
function Oe(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function lt(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function je(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = lt(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function wn(e) {
  return a.isArray(e) && !e.some(Oe);
}
const gn = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function de(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, h) {
    return !a.isUndefined(h[m]);
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
  function l(f, m, h) {
    let E = f;
    if (f && !h && typeof f == "object") {
      if (a.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && wn(f) || (a.isFileList(f) || a.endsWith(m, "[]")) && (E = a.toArray(f)))
        return m = lt(m), E.forEach(function(R, x) {
          !(a.isUndefined(R) || R === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? je([m], x, o) : i === null ? m : m + "[]",
            u(R)
          );
        }), !1;
    }
    return Oe(f) ? !0 : (t.append(je(h, m, o), u(f)), !1);
  }
  const p = [], b = Object.assign(gn, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Oe
  });
  function S(f, m) {
    if (!a.isUndefined(f)) {
      if (p.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      p.push(f), a.forEach(f, function(E, C) {
        (!(a.isUndefined(E) || E === null) && s.call(
          t,
          E,
          a.isString(C) ? C.trim() : C,
          m,
          b
        )) === !0 && S(E, m ? m.concat(C) : [C]);
      }), p.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), t;
}
function ve(e) {
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
function Ae(e, t) {
  this._pairs = [], e && de(e, this, t);
}
const ut = Ae.prototype;
ut.append = function(t, n) {
  this._pairs.push([t, n]);
};
ut.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ve);
  } : ve;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function En(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ft(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || En, s = a.isFunction(n) ? {
    serialize: n
  } : n, o = s && s.serialize;
  let i;
  if (o ? i = o(t, s) : i = a.isURLSearchParams(t) ? t.toString() : new Ae(t, s).toString(r), i) {
    const c = e.indexOf("#");
    c !== -1 && (e = e.slice(0, c)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
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
const Ce = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Rn = typeof URLSearchParams < "u" ? URLSearchParams : Ae, Sn = typeof FormData < "u" ? FormData : null, On = typeof Blob < "u" ? Blob : null, xn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Rn,
    FormData: Sn,
    Blob: On
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ne = typeof window < "u" && typeof document < "u", xe = typeof navigator == "object" && navigator || void 0, _n = Ne && (!xe || ["ReactNative", "NativeScript", "NS"].indexOf(xe.product) < 0), Tn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", An = Ne && window.location.href || "http://localhost", Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ne,
  hasStandardBrowserEnv: _n,
  hasStandardBrowserWebWorkerEnv: Tn,
  navigator: xe,
  origin: An
}, Symbol.toStringTag, { value: "Module" })), O = {
  ...Cn,
  ...xn
};
function Nn(e, t) {
  return de(e, new O.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function kn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Pn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function dt(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), d = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, d ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Pn(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(kn(r), s, n, 0);
    }), n;
  }
  return null;
}
function Un(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Y = {
  transitional: Ce,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(dt(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Nn(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return de(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Un(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Y.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
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
    FormData: O.classes.FormData,
    Blob: O.classes.Blob
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
  Y.headers[e] = {};
});
const Bn = a.toObjectSet([
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
]), Fn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Bn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Me = /* @__PURE__ */ Symbol("internals");
function K(e) {
  return e && String(e).trim().toLowerCase();
}
function oe(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(oe) : String(e);
}
function Dn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ln = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ye(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function In(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function jn(e, t) {
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
let A = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, d, u) {
      const l = K(d);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = a.findKey(s, l);
      (!p || s[p] === void 0 || u === !0 || u === void 0 && s[p] !== !1) && (s[p || d] = oe(c));
    }
    const i = (c, d) => a.forEach(c, (u, l) => o(u, l, d));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !Ln(t))
      i(Fn(t), n);
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
    if (t = K(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Dn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = K(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ye(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = K(i), i) {
        const c = a.findKey(r, i);
        c && (!n || ye(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ye(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = oe(s), delete n[o];
        return;
      }
      const c = t ? In(o) : String(o).trim();
      c !== o && delete n[o], n[c] = oe(s), r[c] = !0;
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
      const c = K(i);
      r[c] || (jn(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
A.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(A.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(A);
function be(e, t) {
  const n = this || Y, r = t || n, s = A.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function pt(e) {
  return !!(e && e.__CANCEL__);
}
let Q = class extends y {
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
function ht(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new y(
    "Request failed with status code " + n.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function vn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function qn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const u = Date.now(), l = r[o];
    i || (i = u), n[s] = d, r[s] = u;
    let p = o, b = 0;
    for (; p !== s; )
      b += n[p++], p = p % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const S = l && u - l;
    return S ? Math.round(b * 1e3 / S) : void 0;
  };
}
function Mn(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (u, l = Date.now()) => {
    n = l, s = null, o && (clearTimeout(o), o = null), e(...u);
  };
  return [(...u) => {
    const l = Date.now(), p = l - n;
    p >= r ? i(u, l) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - p)));
  }, () => s && i(s)];
}
const ae = (e, t, n = 3) => {
  let r = 0;
  const s = qn(50, 250);
  return Mn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, d = i - r, u = s(d), l = i <= c;
    r = i;
    const p = {
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
    e(p);
  }, n);
}, He = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, $e = (e) => (...t) => a.asap(() => e(...t)), Hn = O.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, O.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(O.origin),
  O.navigator && /(msie|trident)/i.test(O.navigator.userAgent)
) : () => !0, $n = O.hasStandardBrowserEnv ? (
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
function zn(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Vn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function mt(e, t, n) {
  let r = !zn(t);
  return e && (r || n == !1) ? Vn(e, t) : t;
}
const ze = (e) => e instanceof A ? { ...e } : e;
function q(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, p, b) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: b }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(u, l, p, b) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u, p, b);
    } else return r(u, l, p, b);
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
  function c(u, l, p) {
    if (p in t)
      return r(u, l);
    if (p in e)
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
    headers: (u, l, p) => s(ze(u), ze(l), p, !0)
  };
  return a.forEach(
    Object.keys({ ...e, ...t }),
    function(l) {
      if (l === "__proto__" || l === "constructor" || l === "prototype")
        return;
      const p = a.hasOwnProp(d, l) ? d[l] : s, b = p(e[l], t[l], l);
      a.isUndefined(b) && p !== c || (n[l] = b);
    }
  ), n;
}
const yt = (e) => {
  const t = q({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  if (t.headers = i = A.from(i), t.url = ft(mt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  ), a.isFormData(n)) {
    if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (a.isFunction(n.getHeaders)) {
      const d = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(d).forEach(([l, p]) => {
        u.includes(l.toLowerCase()) && i.set(l, p);
      });
    }
  }
  if (O.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && Hn(t.url))) {
    const d = s && o && $n.read(o);
    d && i.set(s, d);
  }
  return t;
}, Jn = typeof XMLHttpRequest < "u", Wn = Jn && function(e) {
  return new Promise(function(n, r) {
    const s = yt(e);
    let o = s.data;
    const i = A.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: u } = s, l, p, b, S, f;
    function m() {
      S && S(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function E() {
      if (!h)
        return;
      const R = A.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), U = {
        data: !c || c === "text" || c === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: R,
        config: e,
        request: h
      };
      ht(function(N) {
        n(N), m();
      }, function(N) {
        r(N), m();
      }, U), h = null;
    }
    "onloadend" in h ? h.onloadend = E : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, h.onabort = function() {
      h && (r(new y("Request aborted", y.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(x) {
      const U = x && x.message ? x.message : "Network Error", L = new y(U, y.ERR_NETWORK, e, h);
      L.event = x || null, r(L), h = null;
    }, h.ontimeout = function() {
      let x = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const U = s.transitional || Ce;
      s.timeoutErrorMessage && (x = s.timeoutErrorMessage), r(new y(
        x,
        U.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        h
      )), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && a.forEach(i.toJSON(), function(x, U) {
      h.setRequestHeader(U, x);
    }), a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), c && c !== "json" && (h.responseType = s.responseType), u && ([b, f] = ae(u, !0), h.addEventListener("progress", b)), d && h.upload && ([p, S] = ae(d), h.upload.addEventListener("progress", p), h.upload.addEventListener("loadend", S)), (s.cancelToken || s.signal) && (l = (R) => {
      h && (r(!R || R.type ? new Q(null, e, h) : R), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const C = vn(s.url);
    if (C && O.protocols.indexOf(C) === -1) {
      r(new y("Unsupported protocol " + C + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(o || null);
  });
}, Kn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, c();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof y ? l : new Q(l instanceof Error ? l.message : l));
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
}, Xn = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Gn = async function* (e, t) {
  for await (const n of Zn(e))
    yield* Xn(n, t);
}, Zn = async function* (e) {
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
  const s = Gn(e, t);
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
        let p = l.byteLength;
        if (n) {
          let b = o += p;
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
}, Je = 64 * 1024, { isFunction: re } = a, Yn = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(a.global), {
  ReadableStream: We,
  TextEncoder: Ke
} = a.global, Xe = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Qn = (e) => {
  e = a.merge.call({
    skipUndefined: !0
  }, Yn, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? re(t) : typeof fetch == "function", o = re(n), i = re(r);
  if (!s)
    return !1;
  const c = s && re(We), d = s && (typeof Ke == "function" ? /* @__PURE__ */ ((f) => (m) => f.encode(m))(new Ke()) : async (f) => new Uint8Array(await new n(f).arrayBuffer())), u = o && c && Xe(() => {
    let f = !1;
    const m = new n(O.origin, {
      body: new We(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !m;
  }), l = i && c && Xe(() => a.isReadableStream(new r("").body)), p = {
    stream: l && ((f) => f.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !p[f] && (p[f] = (m, h) => {
      let E = m && m[f];
      if (E)
        return E.call(m);
      throw new y(`Response type '${f}' is not supported`, y.ERR_NOT_SUPPORT, h);
    });
  });
  const b = async (f) => {
    if (f == null)
      return 0;
    if (a.isBlob(f))
      return f.size;
    if (a.isSpecCompliantForm(f))
      return (await new n(O.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(f) || a.isArrayBuffer(f))
      return f.byteLength;
    if (a.isURLSearchParams(f) && (f = f + ""), a.isString(f))
      return (await d(f)).byteLength;
  }, S = async (f, m) => {
    const h = a.toFiniteNumber(f.getContentLength());
    return h ?? b(m);
  };
  return async (f) => {
    let {
      url: m,
      method: h,
      data: E,
      signal: C,
      cancelToken: R,
      timeout: x,
      onDownloadProgress: U,
      onUploadProgress: L,
      responseType: N,
      headers: he,
      withCredentials: ee = "same-origin",
      fetchOptions: Pe
    } = yt(f), Ue = t || fetch;
    N = N ? (N + "").toLowerCase() : "text";
    let te = Kn([C, R && R.toAbortSignal()], x), V = null;
    const I = te && te.unsubscribe && (() => {
      te.unsubscribe();
    });
    let Be;
    try {
      if (L && u && h !== "get" && h !== "head" && (Be = await S(he, E)) !== 0) {
        let D = new n(m, {
          method: "POST",
          body: E,
          duplex: "half"
        }), M;
        if (a.isFormData(E) && (M = D.headers.get("content-type")) && he.setContentType(M), D.body) {
          const [me, ne] = He(
            Be,
            ae($e(L))
          );
          E = Ve(D.body, Je, me, ne);
        }
      }
      a.isString(ee) || (ee = ee ? "include" : "omit");
      const _ = o && "credentials" in n.prototype, Fe = {
        ...Pe,
        signal: te,
        method: h.toUpperCase(),
        headers: he.normalize().toJSON(),
        body: E,
        duplex: "half",
        credentials: _ ? ee : void 0
      };
      V = o && new n(m, Fe);
      let F = await (o ? Ue(V, Pe) : Ue(m, Fe));
      const De = l && (N === "stream" || N === "response");
      if (l && (U || De && I)) {
        const D = {};
        ["status", "statusText", "headers"].forEach((Le) => {
          D[Le] = F[Le];
        });
        const M = a.toFiniteNumber(F.headers.get("content-length")), [me, ne] = U && He(
          M,
          ae($e(U), !0)
        ) || [];
        F = new r(
          Ve(F.body, Je, me, () => {
            ne && ne(), I && I();
          }),
          D
        );
      }
      N = N || "text";
      let Ot = await p[a.findKey(p, N) || "text"](F, f);
      return !De && I && I(), await new Promise((D, M) => {
        ht(D, M, {
          data: Ot,
          headers: A.from(F.headers),
          status: F.status,
          statusText: F.statusText,
          config: f,
          request: V
        });
      });
    } catch (_) {
      throw I && I(), _ && _.name === "TypeError" && /Load failed|fetch/i.test(_.message) ? Object.assign(
        new y("Network Error", y.ERR_NETWORK, f, V, _ && _.response),
        {
          cause: _.cause || _
        }
      ) : y.from(_, _ && _.code, f, V, _ && _.response);
    }
  };
}, er = /* @__PURE__ */ new Map(), bt = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, o = [
    r,
    s,
    n
  ];
  let i = o.length, c = i, d, u, l = er;
  for (; c--; )
    d = o[c], u = l.get(d), u === void 0 && l.set(d, u = c ? /* @__PURE__ */ new Map() : Qn(t)), l = u;
  return u;
};
bt();
const ke = {
  http: bn,
  xhr: Wn,
  fetch: {
    get: bt
  }
};
a.forEach(ke, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ge = (e) => `- ${e}`, tr = (e) => a.isFunction(e) || e === null || e === !1;
function nr(e, t) {
  e = a.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const o = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let c;
    if (s = r, !tr(r) && (s = ke[(c = String(r)).toLowerCase()], s === void 0))
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
` + i.map(Ge).join(`
`) : " " + Ge(i[0]) : "as no adapter specified";
    throw new y(
      "There is no suitable adapter to dispatch the request " + c,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const wt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: nr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: ke
};
function we(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Q(null, e);
}
function Ze(e) {
  return we(e), e.headers = A.from(e.headers), e.data = be.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), wt.getAdapter(e.adapter || Y.adapter, e)(e).then(function(r) {
    return we(e), r.data = be.call(
      e,
      e.transformResponse,
      r
    ), r.headers = A.from(r.headers), r;
  }, function(r) {
    return pt(r) || (we(e), r && r.response && (r.response.data = be.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = A.from(r.response.headers))), Promise.reject(r);
  });
}
const gt = "1.13.5", pe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  pe[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ye = {};
pe.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + gt + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new y(
        s(i, " has been removed" + (n ? " in " + n : "")),
        y.ERR_DEPRECATED
      );
    return n && !Ye[i] && (Ye[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
pe.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function rr(e, t, n) {
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
const ie = {
  assertOptions: rr,
  validators: pe
}, k = ie.validators;
let v = class {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = q(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && ie.assertOptions(r, {
      silentJSONParsing: k.transitional(k.boolean),
      forcedJSONParsing: k.transitional(k.boolean),
      clarifyTimeoutError: k.transitional(k.boolean),
      legacyInterceptorReqResOrdering: k.transitional(k.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ie.assertOptions(s, {
      encode: k.function,
      serialize: k.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), ie.assertOptions(n, {
      baseUrl: k.spelling("baseURL"),
      withXsrfToken: k.spelling("withXSRFToken")
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
    ), n.headers = A.concat(i, o);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(m) {
      if (typeof m.runWhen == "function" && m.runWhen(n) === !1)
        return;
      d = d && m.synchronous;
      const h = n.transitional || Ce;
      h && h.legacyInterceptorReqResOrdering ? c.unshift(m.fulfilled, m.rejected) : c.push(m.fulfilled, m.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let l, p = 0, b;
    if (!d) {
      const f = [Ze.bind(this), void 0];
      for (f.unshift(...c), f.push(...u), b = f.length, l = Promise.resolve(n); p < b; )
        l = l.then(f[p++], f[p++]);
      return l;
    }
    b = c.length;
    let S = n;
    for (; p < b; ) {
      const f = c[p++], m = c[p++];
      try {
        S = f(S);
      } catch (h) {
        m.call(this, h);
        break;
      }
    }
    try {
      l = Ze.call(this, S);
    } catch (f) {
      return Promise.reject(f);
    }
    for (p = 0, b = u.length; p < b; )
      l = l.then(u[p++], u[p++]);
    return l;
  }
  getUri(t) {
    t = q(this.defaults, t);
    const n = mt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return ft(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  v.prototype[t] = function(n, r) {
    return this.request(q(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(q(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  v.prototype[t] = n(), v.prototype[t + "Form"] = n(!0);
});
let sr = class Et {
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
      r.reason || (r.reason = new Q(o, i, c), n(r.reason));
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
      token: new Et(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function or(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ir(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const _e = {
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
Object.entries(_e).forEach(([e, t]) => {
  _e[t] = e;
});
function Rt(e) {
  const t = new v(e), n = et(v.prototype.request, t);
  return a.extend(n, v.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Rt(q(e, s));
  }, n;
}
const g = Rt(Y);
g.Axios = v;
g.CanceledError = Q;
g.CancelToken = sr;
g.isCancel = pt;
g.VERSION = gt;
g.toFormData = de;
g.AxiosError = y;
g.Cancel = g.CanceledError;
g.all = function(t) {
  return Promise.all(t);
};
g.spread = or;
g.isAxiosError = ir;
g.mergeConfig = q;
g.AxiosHeaders = A;
g.formToJSON = (e) => dt(a.isHTMLForm(e) ? new FormData(e) : e);
g.getAdapter = wt.getAdapter;
g.HttpStatusCode = _e;
g.default = g;
const {
  Axios: jr,
  AxiosError: vr,
  CanceledError: qr,
  isCancel: Mr,
  CancelToken: Hr,
  VERSION: $r,
  all: zr,
  Cancel: Vr,
  isAxiosError: Jr,
  spread: Wr,
  toFormData: Kr,
  AxiosHeaders: Xr,
  HttpStatusCode: Gr,
  formToJSON: Zr,
  getAdapter: Yr,
  mergeConfig: Qr
} = g;
function ar() {
  const e = H(!1), t = H(null);
  return { post: async (r, s, o = null) => {
    e.value = !0, t.value = null;
    try {
      const { data: i } = await g.post(r, s, {
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
function cr(e, t) {
  return t.split(".").reduce((n, r) => n?.[r], e);
}
function lr(e, t) {
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
function ur(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  return e.map((o) => {
    if (o.type === "text") return o.value;
    const i = cr(t, o.value);
    return r.add(o.value.split(".")[0]), i === void 0 || i === "" ? o.defaultValue !== void 0 ? o.defaultValue : "" : String(i);
  }).join("");
}
function ce(e, t) {
  const n = {
    open: "{",
    close: "}"
  }, r = lr(e, n);
  return (s) => ur(r, s);
}
const fr = H([]), dr = H(null), pr = H(!1), hr = H("create"), ge = xt({
  holder_name: "",
  ifsc_code: "",
  account_number: "",
  upi_id: "",
  country: ""
}), St = () => {
  const { post: e, error: t } = ar(), n = "https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management", r = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk";
  return {
    bankAccounts: fr,
    selectedBank: dr,
    showForm: pr,
    formMode: hr,
    form: ge,
    createBank: async (c) => {
      if (!(await e(n, {
        operation: "create_bank_account",
        user_id: "user_1",
        ...ge
      }, r))?.success) return console.log(t.value);
      try {
        const u = ce(c.data.curr.data.event.onCreated);
        location.href = u({});
      } catch (u) {
        console.log(u);
      }
    },
    updateBank: async (c, d) => {
      const u = Object.fromEntries(
        Object.entries(ge).filter(([p, b]) => b)
      );
      if (!(await e(n, {
        operation: "update_bank_account",
        user_id: "user_1",
        account_id: d,
        ...u
      }, r))?.success) return console.log(t.value);
      try {
        const p = ce(c.data.curr.data.event.onUpdated);
        location.href = p({});
      } catch (p) {
        console.log(p);
      }
    },
    viewBank: async (c) => (await e(n, {
      operation: "view_bank_account",
      user_id: "user_1",
      account_id: c
    }, r))?.bank_account || null
  };
}, mr = { class: "p-4 shadow-md" }, yr = { class: "space-y-12" }, br = { class: "border-b border-gray-900/10 pb-12" }, wr = { class: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6" }, gr = { class: "sm:col-span-3" }, Er = { class: "mt-2" }, Rr = { class: "sm:col-span-3" }, Sr = { class: "mt-2" }, Or = { class: "sm:col-span-3" }, xr = { class: "mt-2" }, _r = { class: "sm:col-span-3" }, Tr = { class: "mt-2" }, Ar = { class: "sm:col-span-3" }, Cr = { class: "mt-2" }, Nr = { class: "mt-6 flex justify-end gap-x-6" }, kr = /* @__PURE__ */ Qe({
  __name: "BankForm",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const { createBank: t, updateBank: n, form: r, formMode: s, showForm: o, selectedBank: i } = St(), c = async () => {
      s.value === "create" && await t(e.__p), s.value === "update" && await n(e.__p, i.value?.account_id);
    }, d = () => {
      i.value = null, o.value = !1, Object.keys(r).forEach((u) => r[u] = "");
      try {
        const u = ce(e.__p.data.curr.data.event.onCancel);
        location.href = u({});
      } catch (u) {
        console.log(`bank, err:${u}`);
      }
    };
    return (u, l) => (Ee(), Re("div", mr, [
      w("div", yr, [
        w("div", br, [
          l[10] || (l[10] = w("h2", { class: "text-base/7 font-semibold text-gray-900" }, "Bank Account", -1)),
          l[11] || (l[11] = w("p", { class: "text-sm/6 text-gray-600" }, "This bank account will be used for payments.", -1)),
          w("div", wr, [
            w("div", gr, [
              l[5] || (l[5] = w("label", {
                for: "name",
                class: "block text-sm/6 font-medium text-gray-900"
              }, "Full name", -1)),
              w("div", Er, [
                J(w("input", {
                  "onUpdate:modelValue": l[0] || (l[0] = (p) => P(r).holder_name = p),
                  type: "text",
                  class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                  placeholder: "Enter Holder Name"
                }, null, 512), [
                  [W, P(r).holder_name]
                ])
              ])
            ]),
            w("div", Rr, [
              l[6] || (l[6] = w("label", {
                for: "name",
                class: "block text-sm/6 font-medium text-gray-900"
              }, "IFSC", -1)),
              w("div", Sr, [
                J(w("input", {
                  "onUpdate:modelValue": l[1] || (l[1] = (p) => P(r).ifsc_code = p),
                  type: "text",
                  class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                  placeholder: "Enter IFSC Code"
                }, null, 512), [
                  [W, P(r).ifsc_code]
                ])
              ])
            ]),
            w("div", Or, [
              l[7] || (l[7] = w("label", {
                for: "name",
                class: "block text-sm/6 font-medium text-gray-900"
              }, "Account Number", -1)),
              w("div", xr, [
                J(w("input", {
                  "onUpdate:modelValue": l[2] || (l[2] = (p) => P(r).account_number = p),
                  type: "text",
                  class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                  placeholder: "Enter Account Number"
                }, null, 512), [
                  [W, P(r).account_number]
                ])
              ])
            ]),
            w("div", _r, [
              l[8] || (l[8] = w("label", {
                for: "name",
                class: "block text-sm/6 font-medium text-gray-900"
              }, "UPI", -1)),
              w("div", Tr, [
                J(w("input", {
                  "onUpdate:modelValue": l[3] || (l[3] = (p) => P(r).upi_id = p),
                  type: "text",
                  class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                  placeholder: "Enter UPI ID"
                }, null, 512), [
                  [W, P(r).upi_id]
                ])
              ])
            ]),
            w("div", Ar, [
              l[9] || (l[9] = w("label", {
                for: "name",
                class: "block text-sm/6 font-medium text-gray-900"
              }, "Country", -1)),
              w("div", Cr, [
                J(w("input", {
                  "onUpdate:modelValue": l[4] || (l[4] = (p) => P(r).country = p),
                  type: "text",
                  class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                  placeholder: "Enter Country"
                }, null, 512), [
                  [W, P(r).country]
                ])
              ])
            ])
          ])
        ])
      ]),
      w("div", Nr, [
        w("button", {
          onClick: d,
          class: "rounded-md bg-violet-500 px-3 py-2 text-sm font-semibold text-white"
        }, " Cancel "),
        w("button", {
          onClick: c,
          class: "capitalize rounded-md bg-violet-500 px-3 py-2 text-sm font-semibold text-white"
        }, _t(P(s) + " Bank"), 1)
      ])
    ]));
  }
}), Pr = { class: "max-w-2xl mx-auto dark:bg-zinc-900" }, Ur = { key: 0 }, Br = /* @__PURE__ */ Qe({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const { selectedBank: t, showForm: n, formMode: r, form: s, viewBank: o } = St(), { id: i } = Object.fromEntries(new URLSearchParams(location.search || "")), c = () => {
      t.value = null, Object.keys(s).forEach((u) => s[u] = ""), r.value = "create", n.value = !0;
    }, d = async (u) => {
      const l = await o(u);
      if (!l) throw new Error("no bank found");
      t.value = l, Object.assign(s, l), r.value = "update", n.value = !0;
    };
    return (async () => {
      try {
        i ? await d(i) : c();
      } catch {
        try {
          const l = ce(e._$p.data.curr.data.event.onNotFound);
          location.href = l({});
        } catch {
        }
      }
    })(), (u, l) => (Ee(), Re("div", Pr, [
      P(n) ? (Ee(), Re("div", Ur, [
        Tt(kr, At(Ct({ _p: e._p, __p: e._$p })), null, 16)
      ])) : Nt("", !0)
    ]));
  }
}), es = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const r = kt(Br, {
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
  es as hydrator,
  es as index
};
