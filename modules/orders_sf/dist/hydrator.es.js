import { r as O, w as qt, o as w, c as pt, a as It, b as te, d as c, e as Oe, n as he, f as _, g as L, t as b, u as J, h as me, v as ht, T as Ht, i as mt, j as Vt, F as z, k as j, l as Pe, m as W, p as Ae, q as gt, s as Le, x as Je, y as We, z as Jt } from "./runtime-dom.esm-bundler-BnrL1H08.js";
function xt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Wt } = Object.prototype, { getPrototypeOf: $e } = Object, { iterator: xe, toStringTag: bt } = Symbol, be = /* @__PURE__ */ ((e) => (t) => {
  const r = Wt.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (e) => (e = e.toLowerCase(), (t) => be(t) === e), we = (e) => (t) => typeof t === e, { isArray: X } = Array, Q = we("undefined");
function re(e) {
  return e !== null && !Q(e) && e.constructor !== null && !Q(e.constructor) && N(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const wt = U("ArrayBuffer");
function Zt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && wt(e.buffer), t;
}
const Kt = we("string"), N = we("function"), yt = we("number"), ne = (e) => e !== null && typeof e == "object", Gt = (e) => e === !0 || e === !1, ue = (e) => {
  if (be(e) !== "object")
    return !1;
  const t = $e(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(bt in e) && !(xe in e);
}, Qt = (e) => {
  if (!ne(e) || re(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Xt = U("Date"), Yt = U("File"), er = U("Blob"), tr = U("FileList"), rr = (e) => ne(e) && N(e.pipe), nr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || N(e.append) && ((t = be(e)) === "formdata" || // detect form-data instance
  t === "object" && N(e.toString) && e.toString() === "[object FormData]"));
}, sr = U("URLSearchParams"), [or, ir, ar, lr] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(U), cr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function se(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), X(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    if (re(e))
      return;
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let a;
    for (n = 0; n < o; n++)
      a = i[n], t.call(null, e[a], a, e);
  }
}
function _t(e, t) {
  if (re(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const H = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, kt = (e) => !Q(e) && e !== H;
function Ce() {
  const { caseless: e, skipUndefined: t } = kt(this) && this || {}, r = {}, n = (s, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const o = e && _t(r, i) || i;
    ue(r[o]) && ue(s) ? r[o] = Ce(r[o], s) : ue(s) ? r[o] = Ce({}, s) : X(s) ? r[o] = s.slice() : (!t || !Q(s)) && (r[o] = s);
  };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && se(arguments[s], n);
  return r;
}
const dr = (e, t, r, { allOwnKeys: n } = {}) => (se(
  t,
  (s, i) => {
    r && N(s) ? Object.defineProperty(e, i, {
      value: xt(s, r),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, i, {
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: n }
), e), ur = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), fr = (e, t, r, n) => {
  e.prototype = Object.create(
    t.prototype,
    n
  ), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, pr = (e, t, r, n) => {
  let s, i, o;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!n || n(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = r !== !1 && $e(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, hr = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, mr = (e) => {
  if (!e) return null;
  if (X(e)) return e;
  let t = e.length;
  if (!yt(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, gr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && $e(Uint8Array)), xr = (e, t) => {
  const n = (e && e[xe]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, br = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, wr = U("HTMLFormElement"), yr = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, n, s) {
  return n.toUpperCase() + s;
}), Ze = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), _r = U("RegExp"), vt = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  se(r, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (n[i] = o || s);
  }), Object.defineProperties(e, n);
}, kr = (e) => {
  vt(e, (t, r) => {
    if (N(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (N(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, vr = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((i) => {
      r[i] = !0;
    });
  };
  return X(e) ? n(e) : n(String(e).split(t)), r;
}, Rr = () => {
}, Er = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Sr(e) {
  return !!(e && N(e.append) && e[bt] === "FormData" && e[xe]);
}
const Or = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (ne(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (re(n))
        return n;
      if (!("toJSON" in n)) {
        t[s] = n;
        const i = X(n) ? [] : {};
        return se(n, (o, a) => {
          const f = r(o, s + 1);
          !Q(f) && (i[a] = f);
        }), t[s] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, Ar = U("AsyncFunction"), Cr = (e) => e && (ne(e) || N(e)) && N(e.then) && N(e.catch), Rt = ((e, t) => e ? setImmediate : t ? ((r, n) => (H.addEventListener(
  "message",
  ({ source: s, data: i }) => {
    s === H && i === r && n.length && n.shift()();
  },
  !1
), (s) => {
  n.push(s), H.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(typeof setImmediate == "function", N(H.postMessage)), Tr = typeof queueMicrotask < "u" ? queueMicrotask.bind(H) : typeof process < "u" && process.nextTick || Rt, zr = (e) => e != null && N(e[xe]), l = {
  isArray: X,
  isArrayBuffer: wt,
  isBuffer: re,
  isFormData: nr,
  isArrayBufferView: Zt,
  isString: Kt,
  isNumber: yt,
  isBoolean: Gt,
  isObject: ne,
  isPlainObject: ue,
  isEmptyObject: Qt,
  isReadableStream: or,
  isRequest: ir,
  isResponse: ar,
  isHeaders: lr,
  isUndefined: Q,
  isDate: Xt,
  isFile: Yt,
  isBlob: er,
  isRegExp: _r,
  isFunction: N,
  isStream: rr,
  isURLSearchParams: sr,
  isTypedArray: gr,
  isFileList: tr,
  forEach: se,
  merge: Ce,
  extend: dr,
  trim: cr,
  stripBOM: ur,
  inherits: fr,
  toFlatObject: pr,
  kindOf: be,
  kindOfTest: U,
  endsWith: hr,
  toArray: mr,
  forEachEntry: xr,
  matchAll: br,
  isHTMLForm: wr,
  hasOwnProperty: Ze,
  hasOwnProp: Ze,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: vt,
  freezeMethods: kr,
  toObjectSet: vr,
  toCamelCase: yr,
  noop: Rr,
  toFiniteNumber: Er,
  findKey: _t,
  global: H,
  isContextDefined: kt,
  isSpecCompliantForm: Sr,
  toJSONObject: Or,
  isAsyncFn: Ar,
  isThenable: Cr,
  setImmediate: Rt,
  asap: Tr,
  isIterable: zr
};
let x = class Et extends Error {
  static from(t, r, n, s, i, o) {
    const a = new Et(t.message, r || t.code, n, s, i);
    return a.cause = t, a.name = t.name, o && Object.assign(a, o), a;
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
  constructor(t, r, n, s, i) {
    super(t), this.name = "AxiosError", this.isAxiosError = !0, r && (this.code = r), n && (this.config = n), s && (this.request = s), i && (this.response = i, this.status = i.status);
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
x.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
x.ERR_BAD_OPTION = "ERR_BAD_OPTION";
x.ECONNABORTED = "ECONNABORTED";
x.ETIMEDOUT = "ETIMEDOUT";
x.ERR_NETWORK = "ERR_NETWORK";
x.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
x.ERR_DEPRECATED = "ERR_DEPRECATED";
x.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
x.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
x.ERR_CANCELED = "ERR_CANCELED";
x.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
x.ERR_INVALID_URL = "ERR_INVALID_URL";
const Nr = null;
function Te(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function St(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ke(e, t, r) {
  return e ? e.concat(t).map(function(s, i) {
    return s = St(s), !r && i ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Pr(e) {
  return l.isArray(e) && !e.some(Te);
}
const Lr = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ye(e, t, r) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = l.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, m) {
    return !l.isUndefined(m[g]);
  });
  const n = r.metaTokens, s = r.visitor || u, i = r.dots, o = r.indexes, f = (r.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(p) {
    if (p === null) return "";
    if (l.isDate(p))
      return p.toISOString();
    if (l.isBoolean(p))
      return p.toString();
    if (!f && l.isBlob(p))
      throw new x("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(p) || l.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, g, m) {
    let k = p;
    if (p && !m && typeof p == "object") {
      if (l.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), p = JSON.stringify(p);
      else if (l.isArray(p) && Pr(p) || (l.isFileList(p) || l.endsWith(g, "[]")) && (k = l.toArray(p)))
        return g = St(g), k.forEach(function(E, C) {
          !(l.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Ke([g], C, i) : o === null ? g : g + "[]",
            d(E)
          );
        }), !1;
    }
    return Te(p) ? !0 : (t.append(Ke(m, g, i), d(p)), !1);
  }
  const h = [], y = Object.assign(Lr, {
    defaultVisitor: u,
    convertValue: d,
    isVisitable: Te
  });
  function R(p, g) {
    if (!l.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      h.push(p), l.forEach(p, function(k, v) {
        (!(l.isUndefined(k) || k === null) && s.call(
          t,
          k,
          l.isString(v) ? v.trim() : v,
          g,
          y
        )) === !0 && R(k, g ? g.concat(v) : [v]);
      }), h.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return R(e), t;
}
function Ge(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Be(e, t) {
  this._pairs = [], e && ye(e, this, t);
}
const Ot = Be.prototype;
Ot.append = function(t, r) {
  this._pairs.push([t, r]);
};
Ot.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Ge);
  } : Ge;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function $r(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function At(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || $r, s = l.isFunction(r) ? {
    serialize: r
  } : r, i = s && s.serialize;
  let o;
  if (i ? o = i(t, s) : o = l.isURLSearchParams(t) ? t.toString() : new Be(t, s).toString(n), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Qe {
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
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
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
    l.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const De = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Br = typeof URLSearchParams < "u" ? URLSearchParams : Be, Dr = typeof FormData < "u" ? FormData : null, Ur = typeof Blob < "u" ? Blob : null, jr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Br,
    FormData: Dr,
    Blob: Ur
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ue = typeof window < "u" && typeof document < "u", ze = typeof navigator == "object" && navigator || void 0, Fr = Ue && (!ze || ["ReactNative", "NativeScript", "NS"].indexOf(ze.product) < 0), Mr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", qr = Ue && window.location.href || "http://localhost", Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ue,
  hasStandardBrowserEnv: Fr,
  hasStandardBrowserWebWorkerEnv: Mr,
  navigator: ze,
  origin: qr
}, Symbol.toStringTag, { value: "Module" })), A = {
  ...Ir,
  ...jr
};
function Hr(e, t) {
  return ye(e, new A.classes.URLSearchParams(), {
    visitor: function(r, n, s, i) {
      return A.isNode && l.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Vr(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Jr(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let i;
  for (n = 0; n < s; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Ct(e) {
  function t(r, n, s, i) {
    let o = r[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), f = i >= r.length;
    return o = !o && l.isArray(s) ? s.length : o, f ? (l.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !a) : ((!s[o] || !l.isObject(s[o])) && (s[o] = []), t(r, n, s[o], i) && l.isArray(s[o]) && (s[o] = Jr(s[o])), !a);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const r = {};
    return l.forEachEntry(e, (n, s) => {
      t(Vr(n), s, r, 0);
    }), r;
  }
  return null;
}
function Wr(e, t, r) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const oe = {
  transitional: De,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, i = l.isObject(t);
    if (i && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return s ? JSON.stringify(Ct(t)) : t;
    if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t) || l.isReadableStream(t))
      return t;
    if (l.isArrayBufferView(t))
      return t.buffer;
    if (l.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Hr(t, this.formSerializer).toString();
      if ((a = l.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ye(
          a ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return i || s ? (r.setContentType("application/json", !1), Wr(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || oe.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (l.isResponse(t) || l.isReadableStream(t))
      return t;
    if (t && l.isString(t) && (n && !this.responseType || s)) {
      const o = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? x.from(a, x.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
  oe.headers[e] = {};
});
const Zr = l.toObjectSet([
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
]), Kr = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), r = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!r || t[r] && Zr[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Xe = /* @__PURE__ */ Symbol("internals");
function ee(e) {
  return e && String(e).trim().toLowerCase();
}
function fe(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(fe) : String(e);
}
function Gr(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Qr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Re(e, t, r, n, s) {
  if (l.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!l.isString(t)) {
    if (l.isString(n))
      return t.indexOf(n) !== -1;
    if (l.isRegExp(n))
      return n.test(t);
  }
}
function Xr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Yr(e, t) {
  const r = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, i, o) {
        return this[n].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
let P = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function i(a, f, d) {
      const u = ee(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const h = l.findKey(s, u);
      (!h || s[h] === void 0 || d === !0 || d === void 0 && s[h] !== !1) && (s[h || f] = fe(a));
    }
    const o = (a, f) => l.forEach(a, (d, u) => i(d, u, f));
    if (l.isPlainObject(t) || t instanceof this.constructor)
      o(t, r);
    else if (l.isString(t) && (t = t.trim()) && !Qr(t))
      o(Kr(t), r);
    else if (l.isObject(t) && l.isIterable(t)) {
      let a = {}, f, d;
      for (const u of t) {
        if (!l.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[d = u[0]] = (f = a[d]) ? l.isArray(f) ? [...f, u[1]] : [f, u[1]] : u[1];
      }
      o(a, r);
    } else
      t != null && i(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = ee(t), t) {
      const n = l.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return Gr(s);
        if (l.isFunction(r))
          return r.call(this, s, n);
        if (l.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = ee(t), t) {
      const n = l.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Re(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function i(o) {
      if (o = ee(o), o) {
        const a = l.findKey(n, o);
        a && (!r || Re(n, n[a], a, r)) && (delete n[a], s = !0);
      }
    }
    return l.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Re(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return l.forEach(this, (s, i) => {
      const o = l.findKey(n, i);
      if (o) {
        r[o] = fe(s), delete r[i];
        return;
      }
      const a = t ? Xr(i) : String(i).trim();
      a !== i && delete r[i], r[a] = fe(s), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && l.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
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
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[Xe] = this[Xe] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const a = ee(o);
      n[a] || (Yr(s, o), n[a] = !0);
    }
    return l.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
P.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.reduceDescriptors(P.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
l.freezeMethods(P);
function Ee(e, t) {
  const r = this || oe, n = t || r, s = P.from(n.headers);
  let i = n.data;
  return l.forEach(e, function(a) {
    i = a.call(r, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function Tt(e) {
  return !!(e && e.__CANCEL__);
}
let ie = class extends x {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, r, n) {
    super(t ?? "canceled", x.ERR_CANCELED, r, n), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function zt(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new x(
    "Request failed with status code " + r.status,
    [x.ERR_BAD_REQUEST, x.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function en(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function tn(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const d = Date.now(), u = n[i];
    o || (o = d), r[s] = f, n[s] = d;
    let h = i, y = 0;
    for (; h !== s; )
      y += r[h++], h = h % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), d - o < t)
      return;
    const R = u && d - u;
    return R ? Math.round(y * 1e3 / R) : void 0;
  };
}
function rn(e, t) {
  let r = 0, n = 1e3 / t, s, i;
  const o = (d, u = Date.now()) => {
    r = u, s = null, i && (clearTimeout(i), i = null), e(...d);
  };
  return [(...d) => {
    const u = Date.now(), h = u - r;
    h >= n ? o(d, u) : (s = d, i || (i = setTimeout(() => {
      i = null, o(s);
    }, n - h)));
  }, () => s && o(s)];
}
const ge = (e, t, r = 3) => {
  let n = 0;
  const s = tn(50, 250);
  return rn((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, f = o - n, d = s(f), u = o <= a;
    n = o;
    const h = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: f,
      rate: d || void 0,
      estimated: d && a && u ? (a - o) / d : void 0,
      event: i,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, r);
}, Ye = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, et = (e) => (...t) => l.asap(() => e(...t)), nn = A.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, A.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(A.origin),
  A.navigator && /(msie|trident)/i.test(A.navigator.userAgent)
) : () => !0, sn = A.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, i, o) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      l.isNumber(r) && a.push(`expires=${new Date(r).toUTCString()}`), l.isString(n) && a.push(`path=${n}`), l.isString(s) && a.push(`domain=${s}`), i === !0 && a.push("secure"), l.isString(o) && a.push(`SameSite=${o}`), document.cookie = a.join("; ");
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
function on(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function an(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Nt(e, t, r) {
  let n = !on(t);
  return e && (n || r == !1) ? an(e, t) : t;
}
const tt = (e) => e instanceof P ? { ...e } : e;
function Z(e, t) {
  t = t || {};
  const r = {};
  function n(d, u, h, y) {
    return l.isPlainObject(d) && l.isPlainObject(u) ? l.merge.call({ caseless: y }, d, u) : l.isPlainObject(u) ? l.merge({}, u) : l.isArray(u) ? u.slice() : u;
  }
  function s(d, u, h, y) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(d))
        return n(void 0, d, h, y);
    } else return n(d, u, h, y);
  }
  function i(d, u) {
    if (!l.isUndefined(u))
      return n(void 0, u);
  }
  function o(d, u) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(d))
        return n(void 0, d);
    } else return n(void 0, u);
  }
  function a(d, u, h) {
    if (h in t)
      return n(d, u);
    if (h in e)
      return n(void 0, d);
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
    validateStatus: a,
    headers: (d, u, h) => s(tt(d), tt(u), h, !0)
  };
  return l.forEach(
    Object.keys({ ...e, ...t }),
    function(u) {
      if (u === "__proto__" || u === "constructor" || u === "prototype")
        return;
      const h = l.hasOwnProp(f, u) ? f[u] : s, y = h(e[u], t[u], u);
      l.isUndefined(y) && h !== a || (r[u] = y);
    }
  ), r;
}
const Pt = (e) => {
  const t = Z({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: a } = t;
  if (t.headers = o = P.from(o), t.url = At(Nt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), l.isFormData(r)) {
    if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (l.isFunction(r.getHeaders)) {
      const f = r.getHeaders(), d = ["content-type", "content-length"];
      Object.entries(f).forEach(([u, h]) => {
        d.includes(u.toLowerCase()) && o.set(u, h);
      });
    }
  }
  if (A.hasStandardBrowserEnv && (n && l.isFunction(n) && (n = n(t)), n || n !== !1 && nn(t.url))) {
    const f = s && i && sn.read(i);
    f && o.set(s, f);
  }
  return t;
}, ln = typeof XMLHttpRequest < "u", cn = ln && function(e) {
  return new Promise(function(r, n) {
    const s = Pt(e);
    let i = s.data;
    const o = P.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: f, onDownloadProgress: d } = s, u, h, y, R, p;
    function g() {
      R && R(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function k() {
      if (!m)
        return;
      const E = P.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), D = {
        data: !a || a === "text" || a === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: E,
        config: e,
        request: m
      };
      zt(function($) {
        r($), g();
      }, function($) {
        n($), g();
      }, D), m = null;
    }
    "onloadend" in m ? m.onloadend = k : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(k);
    }, m.onabort = function() {
      m && (n(new x("Request aborted", x.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function(C) {
      const D = C && C.message ? C.message : "Network Error", q = new x(D, x.ERR_NETWORK, e, m);
      q.event = C || null, n(q), m = null;
    }, m.ontimeout = function() {
      let C = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const D = s.transitional || De;
      s.timeoutErrorMessage && (C = s.timeoutErrorMessage), n(new x(
        C,
        D.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED,
        e,
        m
      )), m = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in m && l.forEach(o.toJSON(), function(C, D) {
      m.setRequestHeader(D, C);
    }), l.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), a && a !== "json" && (m.responseType = s.responseType), d && ([y, p] = ge(d, !0), m.addEventListener("progress", y)), f && m.upload && ([h, R] = ge(f), m.upload.addEventListener("progress", h), m.upload.addEventListener("loadend", R)), (s.cancelToken || s.signal) && (u = (E) => {
      m && (n(!E || E.type ? new ie(null, e, m) : E), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const v = en(s.url);
    if (v && A.protocols.indexOf(v) === -1) {
      n(new x("Unsupported protocol " + v + ":", x.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(i || null);
  });
}, dn = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), s;
    const i = function(d) {
      if (!s) {
        s = !0, a();
        const u = d instanceof Error ? d : this.reason;
        n.abort(u instanceof x ? u : new ie(u instanceof Error ? u.message : u));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new x(`timeout of ${t}ms exceeded`, x.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(i) : d.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", i));
    const { signal: f } = n;
    return f.unsubscribe = () => l.asap(a), f;
  }
}, un = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, fn = async function* (e, t) {
  for await (const r of pn(e))
    yield* un(r, t);
}, pn = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, rt = (e, t, r, n) => {
  const s = fn(e, t);
  let i = 0, o, a = (f) => {
    o || (o = !0, n && n(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: d, value: u } = await s.next();
        if (d) {
          a(), f.close();
          return;
        }
        let h = u.byteLength;
        if (r) {
          let y = i += h;
          r(y);
        }
        f.enqueue(new Uint8Array(u));
      } catch (d) {
        throw a(d), d;
      }
    },
    cancel(f) {
      return a(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, nt = 64 * 1024, { isFunction: de } = l, hn = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(l.global), {
  ReadableStream: st,
  TextEncoder: ot
} = l.global, it = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, mn = (e) => {
  e = l.merge.call({
    skipUndefined: !0
  }, hn, e);
  const { fetch: t, Request: r, Response: n } = e, s = t ? de(t) : typeof fetch == "function", i = de(r), o = de(n);
  if (!s)
    return !1;
  const a = s && de(st), f = s && (typeof ot == "function" ? /* @__PURE__ */ ((p) => (g) => p.encode(g))(new ot()) : async (p) => new Uint8Array(await new r(p).arrayBuffer())), d = i && a && it(() => {
    let p = !1;
    const g = new r(A.origin, {
      body: new st(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return p && !g;
  }), u = o && a && it(() => l.isReadableStream(new n("").body)), h = {
    stream: u && ((p) => p.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !h[p] && (h[p] = (g, m) => {
      let k = g && g[p];
      if (k)
        return k.call(g);
      throw new x(`Response type '${p}' is not supported`, x.ERR_NOT_SUPPORT, m);
    });
  });
  const y = async (p) => {
    if (p == null)
      return 0;
    if (l.isBlob(p))
      return p.size;
    if (l.isSpecCompliantForm(p))
      return (await new r(A.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (l.isArrayBufferView(p) || l.isArrayBuffer(p))
      return p.byteLength;
    if (l.isURLSearchParams(p) && (p = p + ""), l.isString(p))
      return (await f(p)).byteLength;
  }, R = async (p, g) => {
    const m = l.toFiniteNumber(p.getContentLength());
    return m ?? y(g);
  };
  return async (p) => {
    let {
      url: g,
      method: m,
      data: k,
      signal: v,
      cancelToken: E,
      timeout: C,
      onDownloadProgress: D,
      onUploadProgress: q,
      responseType: $,
      headers: ke,
      withCredentials: ae = "same-origin",
      fetchOptions: Fe
    } = Pt(p), Me = t || fetch;
    $ = $ ? ($ + "").toLowerCase() : "text";
    let le = dn([v, E && E.toAbortSignal()], C), Y = null;
    const I = le && le.unsubscribe && (() => {
      le.unsubscribe();
    });
    let qe;
    try {
      if (q && d && m !== "get" && m !== "head" && (qe = await R(ke, k)) !== 0) {
        let M = new r(g, {
          method: "POST",
          body: k,
          duplex: "half"
        }), G;
        if (l.isFormData(k) && (G = M.headers.get("content-type")) && ke.setContentType(G), M.body) {
          const [ve, ce] = Ye(
            qe,
            ge(et(q))
          );
          k = rt(M.body, nt, ve, ce);
        }
      }
      l.isString(ae) || (ae = ae ? "include" : "omit");
      const T = i && "credentials" in r.prototype, Ie = {
        ...Fe,
        signal: le,
        method: m.toUpperCase(),
        headers: ke.normalize().toJSON(),
        body: k,
        duplex: "half",
        credentials: T ? ae : void 0
      };
      Y = i && new r(g, Ie);
      let F = await (i ? Me(Y, Fe) : Me(g, Ie));
      const He = u && ($ === "stream" || $ === "response");
      if (u && (D || He && I)) {
        const M = {};
        ["status", "statusText", "headers"].forEach((Ve) => {
          M[Ve] = F[Ve];
        });
        const G = l.toFiniteNumber(F.headers.get("content-length")), [ve, ce] = D && Ye(
          G,
          ge(et(D), !0)
        ) || [];
        F = new n(
          rt(F.body, nt, ve, () => {
            ce && ce(), I && I();
          }),
          M
        );
      }
      $ = $ || "text";
      let Mt = await h[l.findKey(h, $) || "text"](F, p);
      return !He && I && I(), await new Promise((M, G) => {
        zt(M, G, {
          data: Mt,
          headers: P.from(F.headers),
          status: F.status,
          statusText: F.statusText,
          config: p,
          request: Y
        });
      });
    } catch (T) {
      throw I && I(), T && T.name === "TypeError" && /Load failed|fetch/i.test(T.message) ? Object.assign(
        new x("Network Error", x.ERR_NETWORK, p, Y, T && T.response),
        {
          cause: T.cause || T
        }
      ) : x.from(T, T && T.code, p, Y, T && T.response);
    }
  };
}, gn = /* @__PURE__ */ new Map(), Lt = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: s } = t, i = [
    n,
    s,
    r
  ];
  let o = i.length, a = o, f, d, u = gn;
  for (; a--; )
    f = i[a], d = u.get(f), d === void 0 && u.set(f, d = a ? /* @__PURE__ */ new Map() : mn(t)), u = d;
  return d;
};
Lt();
const je = {
  http: Nr,
  xhr: cn,
  fetch: {
    get: Lt
  }
};
l.forEach(je, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const at = (e) => `- ${e}`, xn = (e) => l.isFunction(e) || e === null || e === !1;
function bn(e, t) {
  e = l.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, s;
  const i = {};
  for (let o = 0; o < r; o++) {
    n = e[o];
    let a;
    if (s = n, !xn(n) && (s = je[(a = String(n)).toLowerCase()], s === void 0))
      throw new x(`Unknown adapter '${a}'`);
    if (s && (l.isFunction(s) || (s = s.get(t))))
      break;
    i[a || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(i).map(
      ([f, d]) => `adapter ${f} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = r ? o.length > 1 ? `since :
` + o.map(at).join(`
`) : " " + at(o[0]) : "as no adapter specified";
    throw new x(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const $t = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: bn,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: je
};
function Se(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ie(null, e);
}
function lt(e) {
  return Se(e), e.headers = P.from(e.headers), e.data = Ee.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), $t.getAdapter(e.adapter || oe.adapter, e)(e).then(function(n) {
    return Se(e), n.data = Ee.call(
      e,
      e.transformResponse,
      n
    ), n.headers = P.from(n.headers), n;
  }, function(n) {
    return Tt(n) || (Se(e), n && n.response && (n.response.data = Ee.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = P.from(n.response.headers))), Promise.reject(n);
  });
}
const Bt = "1.13.5", _e = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  _e[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ct = {};
_e.transitional = function(t, r, n) {
  function s(i, o) {
    return "[Axios v" + Bt + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, a) => {
    if (t === !1)
      throw new x(
        s(o, " has been removed" + (r ? " in " + r : "")),
        x.ERR_DEPRECATED
      );
    return r && !ct[o] && (ct[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, o, a) : !0;
  };
};
_e.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function wn(e, t, r) {
  if (typeof e != "object")
    throw new x("options must be an object", x.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], o = t[i];
    if (o) {
      const a = e[i], f = a === void 0 || o(a, i, e);
      if (f !== !0)
        throw new x("option " + i + " must be " + f, x.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new x("Unknown option " + i, x.ERR_BAD_OPTION);
  }
}
const pe = {
  assertOptions: wn,
  validators: _e
}, B = pe.validators;
let V = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Qe(),
      response: new Qe()
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
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Z(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: i } = r;
    n !== void 0 && pe.assertOptions(n, {
      silentJSONParsing: B.transitional(B.boolean),
      forcedJSONParsing: B.transitional(B.boolean),
      clarifyTimeoutError: B.transitional(B.boolean),
      legacyInterceptorReqResOrdering: B.transitional(B.boolean)
    }, !1), s != null && (l.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : pe.assertOptions(s, {
      encode: B.function,
      serialize: B.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), pe.assertOptions(r, {
      baseUrl: B.spelling("baseURL"),
      withXsrfToken: B.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = i && l.merge(
      i.common,
      i[r.method]
    );
    i && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), r.headers = P.concat(o, i);
    const a = [];
    let f = !0;
    this.interceptors.request.forEach(function(g) {
      if (typeof g.runWhen == "function" && g.runWhen(r) === !1)
        return;
      f = f && g.synchronous;
      const m = r.transitional || De;
      m && m.legacyInterceptorReqResOrdering ? a.unshift(g.fulfilled, g.rejected) : a.push(g.fulfilled, g.rejected);
    });
    const d = [];
    this.interceptors.response.forEach(function(g) {
      d.push(g.fulfilled, g.rejected);
    });
    let u, h = 0, y;
    if (!f) {
      const p = [lt.bind(this), void 0];
      for (p.unshift(...a), p.push(...d), y = p.length, u = Promise.resolve(r); h < y; )
        u = u.then(p[h++], p[h++]);
      return u;
    }
    y = a.length;
    let R = r;
    for (; h < y; ) {
      const p = a[h++], g = a[h++];
      try {
        R = p(R);
      } catch (m) {
        g.call(this, m);
        break;
      }
    }
    try {
      u = lt.call(this, R);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, y = d.length; h < y; )
      u = u.then(d[h++], d[h++]);
    return u;
  }
  getUri(t) {
    t = Z(this.defaults, t);
    const r = Nt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return At(r, t.params, t.paramsSerializer);
  }
};
l.forEach(["delete", "get", "head", "options"], function(t) {
  V.prototype[t] = function(r, n) {
    return this.request(Z(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, o, a) {
      return this.request(Z(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  V.prototype[t] = r(), V.prototype[t + "Form"] = r(!0);
});
let yn = class Dt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((a) => {
        n.subscribe(a), i = a;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(i);
      }, o;
    }, t(function(i, o, a) {
      n.reason || (n.reason = new ie(i, o, a), r(n.reason));
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
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Dt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function _n(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function kn(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const Ne = {
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
Object.entries(Ne).forEach(([e, t]) => {
  Ne[t] = e;
});
function Ut(e) {
  const t = new V(e), r = xt(V.prototype.request, t);
  return l.extend(r, V.prototype, t, { allOwnKeys: !0 }), l.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Ut(Z(e, s));
  }, r;
}
const S = Ut(oe);
S.Axios = V;
S.CanceledError = ie;
S.CancelToken = yn;
S.isCancel = Tt;
S.VERSION = Bt;
S.toFormData = ye;
S.AxiosError = x;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = _n;
S.isAxiosError = kn;
S.mergeConfig = Z;
S.AxiosHeaders = P;
S.formToJSON = (e) => Ct(l.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = $t.getAdapter;
S.HttpStatusCode = Ne;
S.default = S;
const {
  Axios: bo,
  AxiosError: wo,
  CanceledError: yo,
  isCancel: _o,
  CancelToken: ko,
  VERSION: vo,
  all: Ro,
  Cancel: Eo,
  isAxiosError: So,
  spread: Oo,
  toFormData: Ao,
  AxiosHeaders: Co,
  HttpStatusCode: To,
  formToJSON: zo,
  getAdapter: No,
  mergeConfig: Po
} = S;
function vn() {
  const e = O(!1), t = O(null);
  return { post: async (n, s, i = null) => {
    e.value = !0, t.value = null;
    try {
      const { data: o } = await S.post(n, s, {
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
const Rn = O(), jt = () => ({ _$p: Rn });
function En(e, t) {
  return t.split(".").reduce((r, n) => r?.[n], e);
}
function Sn(e, t) {
  const { open: r, close: n } = t, s = [];
  let i = 0;
  for (; i < e.length; ) {
    const o = e.indexOf(r, i);
    if (o === -1) {
      s.push({ type: "text", value: e.slice(i) });
      break;
    }
    o > i && s.push({ type: "text", value: e.slice(i, o) });
    const a = e.indexOf(n, o + r.length);
    if (a === -1)
      throw new Error(`Unclosed template placeholder starting at ${o}`);
    const f = e.slice(o + r.length, a).trim(), [d, u] = f.split("=");
    s.push({ type: "param", value: d, defaultValue: u }), i = a + n.length;
  }
  return s;
}
function On(e, t, r) {
  const n = /* @__PURE__ */ new Set(), s = e.map((i) => {
    if (i.type === "text") return i.value;
    const o = En(t, i.value);
    if (n.add(i.value.split(".")[0]), o === void 0 || o === "") {
      if (i.defaultValue !== void 0) return i.defaultValue;
      if (r.strict) throw new Error(`Missing param: ${i.value}`);
      return "";
    }
    return r.encode ? encodeURIComponent(String(o)) : String(o);
  }).join("");
  if (r.strict) {
    for (const i of Object.keys(t))
      if (!n.has(i))
        throw new Error(`Unused param provided: ${i}`);
  }
  return s;
}
function An(e, t) {
  const r = {
    open: t?.open,
    close: t?.close,
    encode: t?.encode ?? !1,
    strict: t?.strict ?? !1
  }, n = Sn(e, r);
  return (s) => On(n, s, r);
}
const dt = O([]), ut = O([]), ft = O(null), Ft = O(localStorage.getItem("page_state") || "ORDER_PAGE");
qt(Ft, (e) => localStorage.setItem("page_state", e));
const K = () => {
  const { _$p: e } = jt(), { post: t, error: r } = vn(), s = An(e.value?.data.curr.data.api.token, { open: "<", close: ">" })({
    localStorage: {
      token: localStorage.getItem("token") || ""
    }
  }).replace("Bearer ", ""), i = e.value?.data.curr.data.api.url, o = s;
  return { getAllOrder: async () => {
    const h = await t(
      i,
      {
        operation: "get_orders",
        user_id: "user_1",
        search: "",
        page: 1,
        limit: 10
      },
      o
    );
    if (!h?.success) return console.log("api error", r.value);
    dt.value = h.orders;
  }, order: dt, getPaymentStatus: async (h) => {
    const y = await t(
      i,
      {
        operation: "check_payment_status",
        user_id: "user_1",
        order_id: h
      },
      o
    );
    ft.value = y?.success ? y.payment_status : "not paid";
  }, payment_status: ft, page_state: Ft, returnRequest: async (h, y, R, p) => {
    const g = await t(
      i,
      {
        operation: "create_return",
        order_id: h,
        order_item_id: y,
        return_reason: R,
        return_desc: ""
        // hardcoded empty from user side
      },
      o
    );
    if (!g.success) return console.log("api error", r.value);
    console.log("return req api response", g);
  }, getDeliveredOrder: async () => {
    const h = await t(
      i,
      {
        operation: "get_orders",
        user_id: "user_1",
        status: "delivered",
        search: "",
        exclude_key: ["user_id"],
        page: 1,
        limit: 10
      },
      o
    );
    if (!h?.success) return console.log("api error", r.value);
    ut.value = h.orders;
  }, deliveredOrder: ut };
}, Cn = {
  key: 0,
  class: "pt-3 pb-2"
}, Tn = {
  key: 1,
  class: "p-4"
}, zn = { class: "flex justify-between items-center mb-4" }, Nn = { class: "font-bold text-gray-900 dark:text-white text-base" }, Pn = { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5" }, Ln = { class: "bg-white dark:bg-zinc-800 rounded-lg p-4 mb-3 border border-gray-200 dark:border-zinc-600" }, $n = { class: "space-y-2.5" }, Bn = { class: "flex justify-between text-sm" }, Dn = { class: "text-gray-900 dark:text-white" }, Un = { class: "flex justify-between text-sm" }, jn = { class: "text-gray-900 dark:text-white" }, Fn = { class: "pt-3 border-t border-gray-300 dark:border-zinc-600" }, Mn = { class: "flex justify-between items-center" }, qn = { class: "text-lg font-bold text-green-600 dark:text-green-400" }, In = { class: "flex gap-2 mb-4" }, Hn = { class: "flex-1 bg-white dark:bg-zinc-800 rounded-lg p-3 border border-gray-200 dark:border-zinc-600" }, Vn = { class: "flex items-center gap-2 mb-1.5" }, Jn = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, Wn = { class: "flex-1 bg-white dark:bg-zinc-800 rounded-lg p-3 border border-gray-200 dark:border-zinc-600" }, Zn = { class: "text-sm font-semibold text-gray-900 dark:text-white capitalize" }, Kn = { class: "bg-white dark:bg-zinc-800 rounded-lg p-3 border border-gray-200 dark:border-zinc-600" }, Gn = { class: "flex items-start gap-2" }, Qn = { class: "text-sm text-gray-900 dark:text-white font-medium" }, Xn = { class: "text-xs text-gray-600 dark:text-gray-400 mt-1" }, Yn = {
  __name: "BottomDrawer",
  props: {
    order: { type: Object, required: !1, default: null },
    // use Object, not Array
    open: { type: Boolean, required: !0 },
    isMobile: { type: Boolean, required: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const { payment_status: r } = K(), n = t, s = () => n("update:open", !1);
    return (i, o) => (w(), pt(Ht, {
      name: e.isMobile ? "slide-up" : "fade"
    }, {
      default: It(() => [
        te(c("div", {
          onClick: Oe(s, ["self"]),
          class: "fixed h-screen w-screen bottom-0 z-50 flex items-end md:items-center justify-center md:bg-black/30"
        }, [
          c("div", {
            class: he(["bg-gray-100 dark:bg-zinc-700 w-full shadow-lg border-t border-gray-300 dark:border-zinc-600", e.isMobile ? "rounded-t-xl" : "rounded-xl max-w-sm mx-4"]),
            onClick: o[0] || (o[0] = Oe(() => {
            }, ["stop"]))
          }, [
            e.isMobile ? (w(), _("div", Cn, [...o[1] || (o[1] = [
              c("div", { class: "w-16 h-1 bg-gray-400 dark:bg-zinc-500 rounded-full mx-auto" }, null, -1)
            ])])) : L("", !0),
            e.order ? (w(), _("div", Tn, [
              c("div", zn, [
                c("div", null, [
                  c("h3", Nn, "Order id: " + b(e.order.order_id), 1),
                  c("p", Pn, b(e.order.items.length) + " items", 1)
                ]),
                c("button", {
                  onClick: s,
                  class: "hidden md:block text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 p-1"
                }, [...o[2] || (o[2] = [
                  c("svg", {
                    class: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    c("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ])])
              ]),
              c("div", Ln, [
                c("div", $n, [
                  c("div", Bn, [
                    o[3] || (o[3] = c("span", { class: "text-gray-600 dark:text-gray-400" }, "Subtotal", -1)),
                    c("span", Dn, b(e.order.pricing.total_payable_price) + " " + b(e.order.pricing.currency), 1)
                  ]),
                  c("div", Un, [
                    o[4] || (o[4] = c("span", { class: "text-gray-600 dark:text-gray-400" }, "Tax", -1)),
                    c("span", jn, b(e.order.pricing.tax_amount) + " " + b(e.order.pricing.currency), 1)
                  ]),
                  o[6] || (o[6] = c("div", { class: "flex justify-between text-sm" }, [
                    c("span", { class: "text-gray-600 dark:text-gray-400" }, "Delivery"),
                    c("span", { class: "text-green-600 dark:text-green-400" }, "FREE")
                  ], -1)),
                  c("div", Fn, [
                    c("div", Mn, [
                      o[5] || (o[5] = c("span", { class: "font-semibold text-gray-900 dark:text-white" }, "Total", -1)),
                      c("span", qn, b(e.order.pricing.final_amount) + " " + b(e.order.pricing.currency), 1)
                    ])
                  ])
                ])
              ]),
              c("div", In, [
                c("div", Hn, [
                  c("div", Vn, [
                    c("div", {
                      class: he([
                        "w-2 h-2 rounded-full",
                        J(r) === "paid" ? "bg-green-500" : "bg-yellow-500"
                      ])
                    }, null, 2),
                    o[7] || (o[7] = c("span", { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, "Payment", -1))
                  ]),
                  c("p", Jn, b(J(r) || "Processing"), 1)
                ]),
                c("div", Wn, [
                  o[8] || (o[8] = c("div", { class: "flex items-center gap-2 mb-1.5" }, [
                    c("div", { class: "w-2 h-2 rounded-full bg-blue-500" }),
                    c("span", { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, "Delivery")
                  ], -1)),
                  c("p", Zn, b(e.order.items[0].order_status), 1)
                ])
              ]),
              c("div", Kn, [
                c("div", Gn, [
                  o[11] || (o[11] = c("svg", {
                    class: "w-4 h-4 text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    c("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    }),
                    c("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    })
                  ], -1)),
                  c("div", null, [
                    o[10] || (o[10] = c("p", { class: "text-xs font-medium text-gray-500 dark:text-gray-400 mb-1" }, "Shipping Address", -1)),
                    c("p", Qn, b(e.order.shipping_address.name), 1),
                    c("p", Xn, [
                      me(b(e.order.shipping_address.street) + b(e.order.shipping_address.landmark ? ", " + e.order.shipping_address.landmark : ""), 1),
                      o[9] || (o[9] = c("br", null, null, -1)),
                      me(" " + b(e.order.shipping_address.city) + ", " + b(e.order.shipping_address.state) + " " + b(e.order.shipping_address.pincode), 1)
                    ])
                  ])
                ])
              ])
            ])) : L("", !0)
          ], 2)
        ], 512), [
          [ht, e.open]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
}, es = { class: "mb-2" }, ts = { class: "text-sm text-gray-500 dark:text-zinc-400 leading-none" }, rs = { class: "text-sm text-gray-500 dark:text-zinc-400 leading-none" }, ns = { class: "flex flex-row flex-nowrap gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide" }, ss = { class: "relative" }, os = {
  key: 0,
  class: "absolute bottom-2 left-2 bg-white dark:bg-zinc-700 dark:text-white rounded-lg px-2 py-1 text-xs font-medium"
}, is = { class: "flex justify-between" }, as = { class: "font-medium text-xs dark:text-white" }, ls = ["onClick"], cs = { class: "text-xs dark:text-gray-200 w-40 line-clamp-3" }, ds = { class: "text-xs text-violet-500" }, us = { class: "bg-white dark:bg-zinc-800 rounded-2xl p-6 w-80 shadow-xl" }, fs = { class: "text-sm dark:text-gray-300 truncate" }, ps = { class: "text-xs text-gray-500" }, hs = { class: "text-xs mb-4 text-gray-500" }, ms = { class: "flex justify-end gap-3" }, gs = ["onClick", "disabled"], xs = { class: "flex items-center justify-between border-t border-gray-500 dark:border-zinc-700 pt-6 px-1" }, bs = ["onClick"], ws = { class: "text-sm dark:text-gray-200" }, ys = {
  __name: "OrderCard",
  props: { order: { type: Array, required: !0 } },
  setup(e) {
    const { getPaymentStatus: t, returnRequest: r } = K(), n = O(!1), s = O(null), i = O(window.innerWidth < 768), o = () => i.value = window.innerWidth < 768;
    mt(() => window.addEventListener("resize", o)), Vt(() => window.removeEventListener("resize", o));
    const a = (g) => {
      s.value = g, n.value = !0;
    }, f = () => alert("It will open chatbot"), d = O(null), u = O(""), h = O(!1), y = (g) => {
      d.value = g;
    }, R = () => {
      d.value = null;
    }, p = (g) => {
      u.value.trim() && (h.value = !0, r(
        g,
        d.value.order_item_id,
        u.value,
        ""
        // return_desc blank
      ), h.value = !1, u.value = "", R());
    };
    return (g, m) => (w(), _(z, null, [
      (w(!0), _(z, null, j(e.order, (k) => (w(), _("div", {
        key: k.order_id,
        class: "bg-white dark:bg-zinc-800 flex flex-col gap-3 rounded-2xl p-4"
      }, [
        c("div", es, [
          m[2] || (m[2] = c("p", { class: "text-xl text-green-500 font-semibold mb-1" }, "Ready for Pickup", -1)),
          c("p", ts, "order_id: " + b(k.order_id), 1),
          c("p", rs, "pickup point • " + b(k.items.length) + " items", 1)
        ]),
        c("div", ns, [
          (w(!0), _(z, null, j(k.items, (v) => (w(), _("div", {
            key: v.order_item_id,
            class: "flex flex-col gap-2 snap-start"
          }, [
            c("div", ss, [
              m[3] || (m[3] = c("img", {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ9R610Iu99YAHXjw6QLrvHwX42iWY_NwAA&s",
                class: "w-40 h-48 object-cover bg-gray-100 dark:bg-zinc-800 rounded-xl"
              }, null, -1)),
              v.return_status !== "none" ? (w(), _("span", os, b(v.return_status), 1)) : L("", !0)
            ]),
            c("div", null, [
              c("div", is, [
                c("p", as, b(v.payable_price) + " " + b(k.pricing.currency), 1),
                v.return_status === "none" && v.order_status === "delivered" ? (w(), _("svg", {
                  key: 0,
                  onClick: (E) => y(v),
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "size-4 text-gray-500"
                }, [...m[4] || (m[4] = [
                  c("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                  }, null, -1)
                ])], 8, ls)) : L("", !0)
              ]),
              c("p", cs, b(v.name), 1),
              c("p", ds, b(v.order_status) + " >", 1)
            ]),
            d.value ? (w(), _("div", {
              key: 0,
              class: "fixed inset-0 bg-black/20 flex items-center justify-center z-50",
              onClick: Oe(R, ["self"])
            }, [
              c("div", us, [
                m[5] || (m[5] = c("h3", { class: "font-semibold mb-3 dark:text-white" }, "Return Item", -1)),
                c("p", fs, b(d.value.name), 1),
                c("p", ps, "size: " + b(d.value.reference_data.variant_product_data.size), 1),
                c("p", hs, "color: " + b(d.value.reference_data.variant_product_data.color), 1),
                m[6] || (m[6] = c("label", { class: "text-sm" }, "Return reason", -1)),
                te(c("input", {
                  "onUpdate:modelValue": m[0] || (m[0] = (E) => u.value = E),
                  type: "text",
                  placeholder: "Enter return reason",
                  class: "w-full mb-4 px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white focus:outline-none"
                }, null, 512), [
                  [Pe, u.value]
                ]),
                c("div", ms, [
                  c("button", {
                    onClick: R,
                    class: "text-sm px-3 py-1 rounded-lg bg-gray-100 dark:bg-zinc-700"
                  }, " Cancel "),
                  c("button", {
                    onClick: (E) => p(k.order_id),
                    disabled: !u.value.trim(),
                    class: "text-sm px-3 py-1 rounded-lg bg-red-500 text-white disabled:opacity-50"
                  }, b(h.value ? "Submitting..." : "Confirm Return"), 9, gs)
                ])
              ])
            ])) : L("", !0)
          ]))), 128))
        ]),
        c("div", xs, [
          c("p", {
            onClick: (v) => {
              a(k), J(t)(k.order_id);
            },
            class: "cursor-pointer font-medium dark:text-white"
          }, b(k.pricing.final_amount) + " " + b(k.pricing.currency), 9, bs),
          c("p", ws, "Pay for " + b(k.items.length) + " items", 1)
        ]),
        c("button", {
          onClick: f,
          class: "bg-gray-100 dark:bg-zinc-700 text-violet-500 font-medium rounded-2xl p-4 text-center"
        }, " Ask about order ")
      ]))), 128)),
      W(Yn, {
        open: n.value,
        "onUpdate:open": m[1] || (m[1] = (k) => n.value = k),
        order: s.value,
        isMobile: i.value
      }, null, 8, ["open", "order", "isMobile"])
    ], 64));
  }
}, _s = "/qr_black.png", ks = "/qr_white.png", vs = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, s] of t)
    r[n] = s;
  return r;
}, Rs = {}, Es = { class: "md:w-[50vw] bg-white dark:bg-zinc-700 flex md:flex-row flex-col items-center gap-4 rounded-2xl p-6 shadow-lg" };
function Ss(e, t) {
  return w(), _("div", Es, [...t[0] || (t[0] = [
    Ae('<div class="flex-1 w-full bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 text-center mb-2"><p class="text-xs text-zinc-500 dark:text-zinc-400 mb-2"> Show the QR code or tell the code at the pickup point to pick up your order </p><div class="text-2xl font-bold tracking-widest text-violet-600 dark:text-violet-400"> 354955 </div></div><div class="md:hidden flex items-center w-full my-2"><div class="flex-grow border-t border-zinc-300 dark:border-zinc-600"></div><span class="px-4 text-sm text-zinc-500 dark:text-zinc-400 font-medium">OR</span><div class="flex-grow border-t border-zinc-300 dark:border-zinc-600"></div></div><div class="text-center p-4"><p class="text-sm text-zinc-600 dark:text-zinc-400 mb-3"> Show QR to pickup piont </p><div class="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-inner"><img src="' + _s + '" class="block dark:hidden md:w-40 md:h-40" alt="QR Code for pickup"><img src="' + ks + '" class="hidden dark:block md:w-40 md:h-40" alt="QR Code for pickup"></div></div>', 3)
  ])]);
}
const Os = /* @__PURE__ */ vs(Rs, [["render", Ss]]), As = { class: "flex md:w-[70vw] flex-col gap-3" }, Cs = { class: "bg-white dark:bg-zinc-800 flex items-center gap-2 md:rounded-2xl rounded-b-2xl p-4" }, Ts = { class: "w-full md:max-w-sm flex items-center gap-2 bg-gray-100 dark:bg-zinc-700 rounded-2xl p-4" }, zs = {
  __name: "OrderLeft",
  setup(e) {
    const { order: t, page_state: r } = K(), n = O(""), s = gt(() => {
      const o = n.value.trim().toLowerCase();
      return o ? t.value.map((a) => {
        const f = a.items.filter(
          (d) => d.name?.toLowerCase().includes(o) || d.reference_data?.product_data?.brand?.toLowerCase().includes(o) || String(a.order_id) === o
        );
        return f.length ? { ...a, items: f } : null;
      }).filter(Boolean) : t.value;
    }), i = O(!1);
    return (o, a) => (w(), _("div", As, [
      c("div", Cs, [
        c("div", Ts, [
          a[4] || (a[4] = c("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-6 text-zinc-900 dark:text-zinc-100"
          }, [
            c("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            })
          ], -1)),
          te(c("input", {
            "onUpdate:modelValue": a[0] || (a[0] = (f) => n.value = f),
            type: "text",
            placeholder: "Name, Brand, Order Id",
            class: "bg-transparent outline-none focus:outline-none focus:ring-0 border-0 text-zinc-900 dark:text-zinc-100 placeholder:text-gray-500 dark:placeholder:text-zinc-400"
          }, null, 512), [
            [Pe, n.value]
          ])
        ])
      ]),
      c("div", {
        onClick: a[1] || (a[1] = (f) => i.value = !0),
        class: "bg-white dark:bg-zinc-800 flex items-center gap-2 rounded-2xl p-4"
      }, [...a[5] || (a[5] = [
        Ae('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 md:size-6 text-zinc-900 dark:text-zinc-100"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"></path></svg><p class="text-xs text-zinc-900 dark:text-zinc-100"> Show the QR code or tell the code <mark class="bg-transparent text-violet-500 font-medium">354955</mark> at the pickup point to pick up your order </p>', 2)
      ])]),
      c("div", {
        onClick: a[2] || (a[2] = (f) => r.value = "PURCHASED_PAGE"),
        class: "bg-white dark:bg-zinc-800 flex items-center justify-between gap-2 rounded-2xl px-4 py-6 md:py-4"
      }, [...a[6] || (a[6] = [
        Ae('<div class="flex items-center gap-2 text-zinc-900 dark:text-zinc-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg><p>Purchased</p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-zinc-900 dark:text-zinc-100"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>', 2)
      ])]),
      (w(!0), _(z, null, j(s.value, (f) => (w(), pt(ys, {
        key: f.order_id,
        order: [f]
      }, null, 8, ["order"]))), 128)),
      te(c("div", {
        onClick: a[3] || (a[3] = (f) => i.value = !1),
        class: "fixed bg-black/20 h-screen w-screen bottom-0 right-0 z-50 flex items-end md:justify-end md:p-4"
      }, [
        W(Os)
      ], 512), [
        [ht, i.value]
      ])
    ]));
  }
}, Ns = { class: "w-full md:w-[30vw] self-start bg-white dark:bg-zinc-800 rounded-2xl" }, Ps = { class: "relative shrink-0" }, Ls = {
  key: 0,
  class: "absolute bottom-2 left-2 bg-white dark:bg-zinc-700 dark:text-white rounded-lg px-2 py-1 text-xs font-medium"
}, $s = { class: "flex flex-col justify-between" }, Bs = { class: "flex flex-col gap-1" }, Ds = { class: "font-medium text-sm dark:text-white" }, Us = { class: "dark:text-gray-300 line-clamp-2" }, js = { class: "text-xs text-violet-500" }, Fs = {
  key: 0,
  class: "text-xs text-violet-500"
}, Ms = { class: "flex gap-1" }, qs = {
  key: 0,
  class: "text-sm text-gray-500 dark:text-gray-300 p-4"
}, Is = {
  __name: "OrderRight",
  setup(e) {
    const { deliveredOrder: t } = K();
    return (r, n) => (w(), _("div", Ns, [
      n[2] || (n[2] = c("div", { class: "p-4" }, [
        c("p", { class: "font-medium dark:text-white" }, "Share your experience"),
        c("p", { class: "text-xs text-gray-500 dark:text-gray-200" }, "Help others make the right choice")
      ], -1)),
      (w(!0), _(z, null, j(J(t), (s) => (w(), _(z, {
        key: s.order_id
      }, [
        (w(!0), _(z, null, j(s.items, (i) => (w(), _("div", {
          key: i.order_item_id,
          class: "bg-white dark:bg-zinc-800 rounded-2xl p-4 flex flex-row gap-3 transition"
        }, [
          c("div", Ps, [
            n[0] || (n[0] = c("img", {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ9R610Iu99YAHXjw6QLrvHwX42iWY_NwAA&s",
              class: "w-40 h-48 object-cover rounded-xl"
            }, null, -1)),
            i.return_status !== "none" ? (w(), _("span", Ls, b(i.return_status), 1)) : L("", !0)
          ]),
          c("div", $s, [
            c("div", Bs, [
              c("p", Ds, b(i.payable_price) + " " + b(s.pricing.currency), 1),
              c("p", Us, b(i.name), 1),
              c("p", js, b(i.order_status) + " at " + b(new Date(i.delivered_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric"
              }).toLowerCase()), 1),
              i.return_status !== "none" && i.order_status === "delivered" && i.returned_at ? (w(), _("p", Fs, b(i.return_status) + " at " + b(new Date(i.returned_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric"
              }).toLowerCase()), 1)) : L("", !0)
            ]),
            c("div", Ms, [
              (w(), _(z, null, j(5, (o) => c("svg", {
                key: o,
                viewBox: "0 0 24 24",
                class: he(["size-4", o <= 4 ? "fill-yellow-400" : "fill-gray-300"])
              }, [...n[1] || (n[1] = [
                c("path", { d: "M11.48 3.5a.56.56 0 0 1 1.04 0l2.13 5.11a.56.56 0 0 0 .47.35l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 0 0-.18.56l1.28 5.38a.56.56 0 0 1-.84.61L12 17.65a.56.56 0 0 0-.58 0l-4.73 2.89a.56.56 0 0 1-.84-.61l1.28-5.38a.56.56 0 0 0-.18-.56L2.74 10.4a.56.56 0 0 1 .32-.99l5.52-.44a.56.56 0 0 0 .47-.35L11.48 3.5Z" }, null, -1)
              ])], 2)), 64))
            ])
          ])
        ]))), 128))
      ], 64))), 128)),
      J(t).length ? L("", !0) : (w(), _("p", qs, " No items delivered yet "))
    ]));
  }
}, Hs = { class: "flex flex-col bg-[#f0f2f5] dark:bg-zinc-900 md:px-6 min-h-screen" }, Vs = { class: "flex flex-col md:flex-row gap-6" }, Js = /* @__PURE__ */ Le({
  __name: "Order",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    return (t, r) => (w(), _("div", Hs, [
      r[0] || (r[0] = c("div", { class: "flex items-center bg-white dark:bg-zinc-800 md:dark:bg-transparent md:bg-transparent md:pb-10 pt-2" }, [
        c("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "md:hidden ml-2 size-6 text-zinc-900 dark:text-zinc-100"
        }, [
          c("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M15.75 19.5 8.25 12l7.5-7.5"
          })
        ]),
        c("h1", { class: "text-lg md:text-3xl md:font-semibold text-zinc-900 dark:text-zinc-100" }, "Orders")
      ], -1)),
      c("div", Vs, [
        W(zs),
        W(Is)
      ])
    ]));
  }
}), Ws = { class: "flex flex-1 flex-col gap-3" }, Zs = { class: "bg-white dark:bg-zinc-800 flex items-center gap-2 md:rounded-2xl rounded-b-2xl p-4" }, Ks = { class: "w-full md:max-w-sm flex items-center gap-2 bg-gray-100 dark:bg-zinc-700 rounded-2xl p-4" }, Gs = { class: "grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4" }, Qs = { class: "relative" }, Xs = {
  key: 0,
  class: "absolute bottom-2 left-2 bg-white dark:bg-zinc-700 dark:text-white rounded-lg px-2 py-1 text-xs font-medium"
}, Ys = { class: "flex flex-col gap-1" }, eo = { class: "font-medium text-sm dark:text-white" }, to = { class: "text-xs dark:text-gray-300 line-clamp-2" }, ro = { class: "text-xs text-violet-500" }, no = {
  key: 0,
  class: "text-xs text-violet-500"
}, so = { class: "flex gap-1" }, oo = {
  key: 0,
  class: "p-4 bg-white dark:bg-zinc-800 rounded-xl text-sm text-gray-500 dark:text-gray-300"
}, io = {
  __name: "PurchasedLeft",
  setup(e) {
    const { deliveredOrder: t } = K(), r = () => alert("Redirect to storefront page"), n = O(""), s = gt(() => {
      const f = n.value.trim().toLowerCase();
      return f ? t.value.map((d) => {
        const u = d.items.filter(
          (h) => h.name?.toLowerCase().includes(f) || h.reference_data?.product_data?.brand?.toLowerCase().includes(f) || String(d.order_id) === f
        );
        return u.length ? { ...d, items: u } : null;
      }).filter(Boolean) : t.value;
    }), i = () => alert("comming soon"), o = () => alert("comming soon"), a = () => alert("comming soon");
    return (f, d) => (w(), _(z, null, [
      c("div", Ws, [
        c("div", Zs, [
          c("div", Ks, [
            d[1] || (d[1] = c("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: "size-6 text-zinc-900 dark:text-zinc-100"
            }, [
              c("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              })
            ], -1)),
            te(c("input", {
              "onUpdate:modelValue": d[0] || (d[0] = (u) => n.value = u),
              type: "text",
              placeholder: "Name, Brand, Order Id",
              class: "bg-transparent outline-none focus:outline-none focus:ring-0 border-0 text-zinc-900 dark:text-zinc-100 placeholder:text-gray-500 dark:placeholder:text-zinc-400"
            }, null, 512), [
              [Pe, n.value]
            ])
          ])
        ]),
        c("div", Gs, [
          (w(!0), _(z, null, j(s.value, (u) => (w(), _(z, {
            key: u.order_id
          }, [
            (w(!0), _(z, null, j(u.items, (h) => (w(), _("div", {
              key: h.order_item_id,
              class: "bg-white dark:bg-zinc-800 rounded-2xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition"
            }, [
              c("div", Qs, [
                d[2] || (d[2] = c("img", {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ9R610Iu99YAHXjw6QLrvHwX42iWY_NwAA&s",
                  class: "aspect-[40/48] w-full h-full object-cover rounded-xl"
                }, null, -1)),
                h.return_status !== "none" ? (w(), _("span", Xs, b(h.return_status), 1)) : L("", !0)
              ]),
              c("div", Ys, [
                c("p", eo, b(h.payable_price) + " " + b(u.pricing.currency), 1),
                c("p", to, b(h.name), 1),
                c("p", ro, b(h.order_status) + " at " + b(new Date(h.delivered_at).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric"
                }).toLowerCase()), 1),
                h.return_status !== "none" && h.order_status === "delivered" && h.returned_at ? (w(), _("p", no, b(h.return_status) + " at " + b(new Date(h.returned_at).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric"
                }).toLowerCase()), 1)) : L("", !0)
              ]),
              c("div", so, [
                (w(), _(z, null, j(5, (y) => c("svg", {
                  key: y,
                  viewBox: "0 0 24 24",
                  class: he(["size-4", y <= 4 ? "fill-yellow-400" : "fill-gray-300"])
                }, [...d[3] || (d[3] = [
                  c("path", { d: "M11.48 3.5a.56.56 0 0 1 1.04 0l2.13 5.11a.56.56 0 0 0 .47.35l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 0 0-.18.56l1.28 5.38a.56.56 0 0 1-.84.61L12 17.65a.56.56 0 0 0-.58 0l-4.73 2.89a.56.56 0 0 1-.84-.61l1.28-5.38a.56.56 0 0 0-.18-.56L2.74 10.4a.56.56 0 0 1 .32-.99l5.52-.44a.56.56 0 0 0 .47-.35L11.48 3.5Z" }, null, -1)
                ])], 2)), 64))
              ]),
              c("button", {
                onClick: r,
                class: "bg-violet-500 hover:bg-violet-600 transition p-3 text-white rounded-xl text-sm font-medium"
              }, " Similar items ")
            ]))), 128))
          ], 64))), 128))
        ]),
        s.value.length ? L("", !0) : (w(), _("p", oo, " No delivered items found "))
      ]),
      c("div", { class: "fixed bottom-4 left-4 flex items-center gap-3" }, [
        c("div", {
          onClick: i,
          class: "p-2 py-1 rounded-lg bg-gray-100 dark:bg-zinc-800 dark:text-white border-2 border-white dark:border-zinc-700"
        }, [...d[4] || (d[4] = [
          c("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "text-violet-500 size-6"
          }, [
            c("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            })
          ], -1)
        ])]),
        c("div", {
          onClick: o,
          class: "flex items-center gap-1 p-2 py-1 rounded-lg bg-gray-100 dark:bg-zinc-800 dark:text-white border-2 border-white dark:border-zinc-700"
        }, [...d[5] || (d[5] = [
          me(" Status ", -1),
          c("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-4"
          }, [
            c("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "m19.5 8.25-7.5 7.5-7.5-7.5"
            })
          ], -1)
        ])]),
        c("div", {
          onClick: a,
          class: "flex items-center gap-1 p-2 py-1 rounded-lg bg-gray-100 dark:bg-zinc-800 dark:text-white border-2 border-white dark:border-zinc-700"
        }, [...d[6] || (d[6] = [
          me(" All time ", -1),
          c("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-4"
          }, [
            c("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "m19.5 8.25-7.5 7.5-7.5-7.5"
            })
          ], -1)
        ])])
      ])
    ], 64));
  }
}, ao = { class: "flex flex-col bg-[#f0f2f5] dark:bg-zinc-900 md:px-6 min-h-screen" }, lo = { class: "flex flex-col md:flex-row gap-6" }, co = /* @__PURE__ */ Le({
  __name: "Purchased",
  setup(e) {
    const { page_state: t } = K();
    return (r, n) => (w(), _("div", ao, [
      c("div", {
        onClick: n[0] || (n[0] = (s) => t.value = "ORDER_PAGE"),
        class: "flex items-center bg-white dark:bg-zinc-800 md:dark:bg-transparent md:bg-transparent md:pb-10 pt-2"
      }, [...n[1] || (n[1] = [
        c("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "md:hidden ml-2 size-6 text-zinc-900 dark:text-zinc-100"
        }, [
          c("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M15.75 19.5 8.25 12l7.5-7.5"
          })
        ], -1),
        c("h1", { class: "text-lg md:text-3xl md:font-semibold text-zinc-900 dark:text-zinc-100" }, "Purchased", -1)
      ])]),
      c("div", lo, [
        W(io)
      ])
    ]));
  }
}), uo = { key: 0 }, fo = { key: 1 }, po = /* @__PURE__ */ Le({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    (async () => e._p.f.listen("msg", async (a) => {
      a.type === "theme:change" && (a.custom?.theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
    }))();
    const { _$p: t } = jt();
    t.value = e._$p;
    const { getAllOrder: r, order: n, page_state: s, getDeliveredOrder: i, deliveredOrder: o } = K();
    return mt(async () => {
      await r(), await i(), console.log("orders :", n.value), console.log("delivered orders :", o.value);
    }), (a, f) => (w(), _(z, null, [
      J(s) === "ORDER_PAGE" ? (w(), _("div", uo, [
        W(Js, Je(We({
          __p: e._$p,
          _p: e._p
        })), null, 16)
      ])) : L("", !0),
      J(s) === "PURCHASED_PAGE" ? (w(), _("div", fo, [
        W(co, Je(We({
          __p: e._$p,
          _p: e._p
        })), null, 16)
      ])) : L("", !0)
    ], 64));
  }
}), Lo = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const n = Jt(po, {
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
    return n.mount(i), s;
  }
});
export {
  Lo as hydrator,
  Lo as index
};
