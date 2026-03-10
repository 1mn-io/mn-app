import { i as ir, d as je, r as A, o as _, c as k, a as z, w as lr, b as Pt, n as R, e as h, f as dt, F as K, g as re, h as Ge, T as ft, j as Re, k as Ve, l as Je, t as D, m as fe, v as pe, u as cr, p as xe, q as Ne, s as ur, x as dr, y as fr, z as pt, A as We, B as pr } from "./runtime-dom.esm-bundler-D3BUF_G0.js";
const hr = /* @__PURE__ */ Symbol("");
function mr() {
  return ir(hr);
}
function Lt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: gr } = Object.prototype, { getPrototypeOf: at } = Object, { iterator: De, toStringTag: Ut } = Symbol, Me = /* @__PURE__ */ ((e) => (t) => {
  const r = gr.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), oe = (e) => (e = e.toLowerCase(), (t) => Me(t) === e), ze = (e) => (t) => typeof t === e, { isArray: ve } = Array, we = ze("undefined");
function Se(e) {
  return e !== null && !we(e) && e.constructor !== null && !we(e.constructor) && X(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ft = oe("ArrayBuffer");
function yr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ft(e.buffer), t;
}
const br = ze("string"), X = ze("function"), It = ze("number"), Ce = (e) => e !== null && typeof e == "object", xr = (e) => e === !0 || e === !1, Le = (e) => {
  if (Me(e) !== "object")
    return !1;
  const t = at(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Ut in e) && !(De in e);
}, wr = (e) => {
  if (!Ce(e) || Se(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, vr = oe("Date"), _r = oe("File"), kr = (e) => !!(e && typeof e.uri < "u"), Er = (e) => e && typeof e.getParts < "u", Rr = oe("Blob"), Sr = oe("FileList"), Cr = (e) => Ce(e) && X(e.pipe);
function Or() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const ht = Or(), mt = typeof ht.FormData < "u" ? ht.FormData : void 0, Tr = (e) => {
  let t;
  return e && (mt && e instanceof mt || X(e.append) && ((t = Me(e)) === "formdata" || // detect form-data instance
  t === "object" && X(e.toString) && e.toString() === "[object FormData]"));
}, Ar = oe("URLSearchParams"), [$r, Nr, Pr, Lr] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(oe), Ur = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Oe(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), ve(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    if (Se(e))
      return;
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let i;
    for (n = 0; n < a; n++)
      i = o[n], t.call(null, e[i], i, e);
  }
}
function Bt(e, t) {
  if (Se(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const he = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, jt = (e) => !we(e) && e !== he;
function et() {
  const { caseless: e, skipUndefined: t } = jt(this) && this || {}, r = {}, n = (s, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const a = e && Bt(r, o) || o;
    Le(r[a]) && Le(s) ? r[a] = et(r[a], s) : Le(s) ? r[a] = et({}, s) : ve(s) ? r[a] = s.slice() : (!t || !we(s)) && (r[a] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && Oe(arguments[s], n);
  return r;
}
const Fr = (e, t, r, { allOwnKeys: n } = {}) => (Oe(
  t,
  (s, o) => {
    r && X(s) ? Object.defineProperty(e, o, {
      value: Lt(s, r),
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
  { allOwnKeys: n }
), e), Ir = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Br = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, jr = (e, t, r, n) => {
  let s, o, a;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      a = s[o], (!n || n(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = r !== !1 && at(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Dr = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Mr = (e) => {
  if (!e) return null;
  if (ve(e)) return e;
  let t = e.length;
  if (!It(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, zr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && at(Uint8Array)), qr = (e, t) => {
  const n = (e && e[De]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Hr = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Vr = oe("HTMLFormElement"), Jr = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, n, s) {
  return n.toUpperCase() + s;
}), gt = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Wr = oe("RegExp"), Dt = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Oe(r, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (n[o] = a || s);
  }), Object.defineProperties(e, n);
}, Kr = (e) => {
  Dt(e, (t, r) => {
    if (X(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (X(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Xr = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return ve(e) ? n(e) : n(String(e).split(t)), r;
}, Qr = () => {
}, Zr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Yr(e) {
  return !!(e && X(e.append) && e[Ut] === "FormData" && e[De]);
}
const Gr = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (Ce(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (Se(n))
        return n;
      if (!("toJSON" in n)) {
        t[s] = n;
        const o = ve(n) ? [] : {};
        return Oe(n, (a, i) => {
          const m = r(a, s + 1);
          !we(m) && (o[i] = m);
        }), t[s] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, en = oe("AsyncFunction"), tn = (e) => e && (Ce(e) || X(e)) && X(e.then) && X(e.catch), Mt = ((e, t) => e ? setImmediate : t ? ((r, n) => (he.addEventListener(
  "message",
  ({ source: s, data: o }) => {
    s === he && o === r && n.length && n.shift()();
  },
  !1
), (s) => {
  n.push(s), he.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(typeof setImmediate == "function", X(he.postMessage)), rn = typeof queueMicrotask < "u" ? queueMicrotask.bind(he) : typeof process < "u" && process.nextTick || Mt, nn = (e) => e != null && X(e[De]), l = {
  isArray: ve,
  isArrayBuffer: Ft,
  isBuffer: Se,
  isFormData: Tr,
  isArrayBufferView: yr,
  isString: br,
  isNumber: It,
  isBoolean: xr,
  isObject: Ce,
  isPlainObject: Le,
  isEmptyObject: wr,
  isReadableStream: $r,
  isRequest: Nr,
  isResponse: Pr,
  isHeaders: Lr,
  isUndefined: we,
  isDate: vr,
  isFile: _r,
  isReactNativeBlob: kr,
  isReactNative: Er,
  isBlob: Rr,
  isRegExp: Wr,
  isFunction: X,
  isStream: Cr,
  isURLSearchParams: Ar,
  isTypedArray: zr,
  isFileList: Sr,
  forEach: Oe,
  merge: et,
  extend: Fr,
  trim: Ur,
  stripBOM: Ir,
  inherits: Br,
  toFlatObject: jr,
  kindOf: Me,
  kindOfTest: oe,
  endsWith: Dr,
  toArray: Mr,
  forEachEntry: qr,
  matchAll: Hr,
  isHTMLForm: Vr,
  hasOwnProperty: gt,
  hasOwnProp: gt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Dt,
  freezeMethods: Kr,
  toObjectSet: Xr,
  toCamelCase: Jr,
  noop: Qr,
  toFiniteNumber: Zr,
  findKey: Bt,
  global: he,
  isContextDefined: jt,
  isSpecCompliantForm: Yr,
  toJSONObject: Gr,
  isAsyncFn: en,
  isThenable: tn,
  setImmediate: Mt,
  asap: rn,
  isIterable: nn
};
let S = class zt extends Error {
  static from(t, r, n, s, o, a) {
    const i = new zt(t.message, r || t.code, n, s, o);
    return i.cause = t, i.name = t.name, t.status != null && i.status == null && (i.status = t.status), a && Object.assign(i, a), i;
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
  constructor(t, r, n, s, o) {
    super(t), Object.defineProperty(this, "message", {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, r && (this.code = r), n && (this.config = n), s && (this.request = s), o && (this.response = o, this.status = o.status);
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
S.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
S.ERR_BAD_OPTION = "ERR_BAD_OPTION";
S.ECONNABORTED = "ECONNABORTED";
S.ETIMEDOUT = "ETIMEDOUT";
S.ERR_NETWORK = "ERR_NETWORK";
S.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
S.ERR_DEPRECATED = "ERR_DEPRECATED";
S.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
S.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
S.ERR_CANCELED = "ERR_CANCELED";
S.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
S.ERR_INVALID_URL = "ERR_INVALID_URL";
const sn = null;
function tt(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function qt(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ke(e, t, r) {
  return e ? e.concat(t).map(function(s, o) {
    return s = qt(s), !r && o ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function on(e) {
  return l.isArray(e) && !e.some(tt);
}
const an = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function qe(e, t, r) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = l.toFlatObject(
    r,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(v, x) {
      return !l.isUndefined(x[v]);
    }
  );
  const n = r.metaTokens, s = r.visitor || u, o = r.dots, a = r.indexes, m = (r.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(f) {
    if (f === null) return "";
    if (l.isDate(f))
      return f.toISOString();
    if (l.isBoolean(f))
      return f.toString();
    if (!m && l.isBlob(f))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(f) || l.isTypedArray(f) ? m && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function u(f, v, x) {
    let $ = f;
    if (l.isReactNative(t) && l.isReactNativeBlob(f))
      return t.append(Ke(x, v, o), c(f)), !1;
    if (f && !x && typeof f == "object") {
      if (l.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), f = JSON.stringify(f);
      else if (l.isArray(f) && on(f) || (l.isFileList(f) || l.endsWith(v, "[]")) && ($ = l.toArray(f)))
        return v = qt(v), $.forEach(function(L, U) {
          !(l.isUndefined(L) || L === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Ke([v], U, o) : a === null ? v : v + "[]",
            c(L)
          );
        }), !1;
    }
    return tt(f) ? !0 : (t.append(Ke(x, v, o), c(f)), !1);
  }
  const b = [], O = Object.assign(an, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: tt
  });
  function P(f, v) {
    if (!l.isUndefined(f)) {
      if (b.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      b.push(f), l.forEach(f, function($, M) {
        (!(l.isUndefined($) || $ === null) && s.call(t, $, l.isString(M) ? M.trim() : M, v, O)) === !0 && P($, v ? v.concat(M) : [M]);
      }), b.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return P(e), t;
}
function yt(e) {
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
function it(e, t) {
  this._pairs = [], e && qe(e, this, t);
}
const Ht = it.prototype;
Ht.append = function(t, r) {
  this._pairs.push([t, r]);
};
Ht.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, yt);
  } : yt;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function ln(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Vt(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || ln, s = l.isFunction(r) ? {
    serialize: r
  } : r, o = s && s.serialize;
  let a;
  if (o ? a = o(t, s) : a = l.isURLSearchParams(t) ? t.toString() : new it(t, s).toString(n), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class bt {
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
const lt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, cn = typeof URLSearchParams < "u" ? URLSearchParams : it, un = typeof FormData < "u" ? FormData : null, dn = typeof Blob < "u" ? Blob : null, fn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: cn,
    FormData: un,
    Blob: dn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ct = typeof window < "u" && typeof document < "u", rt = typeof navigator == "object" && navigator || void 0, pn = ct && (!rt || ["ReactNative", "NativeScript", "NS"].indexOf(rt.product) < 0), hn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", mn = ct && window.location.href || "http://localhost", gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ct,
  hasStandardBrowserEnv: pn,
  hasStandardBrowserWebWorkerEnv: hn,
  navigator: rt,
  origin: mn
}, Symbol.toStringTag, { value: "Module" })), W = {
  ...gn,
  ...fn
};
function yn(e, t) {
  return qe(e, new W.classes.URLSearchParams(), {
    visitor: function(r, n, s, o) {
      return W.isNode && l.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function bn(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function xn(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let o;
  for (n = 0; n < s; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function Jt(e) {
  function t(r, n, s, o) {
    let a = r[o++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a), m = o >= r.length;
    return a = !a && l.isArray(s) ? s.length : a, m ? (l.hasOwnProp(s, a) ? s[a] = [s[a], n] : s[a] = n, !i) : ((!s[a] || !l.isObject(s[a])) && (s[a] = []), t(r, n, s[a], o) && l.isArray(s[a]) && (s[a] = xn(s[a])), !i);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const r = {};
    return l.forEachEntry(e, (n, s) => {
      t(bn(n), s, r, 0);
    }), r;
  }
  return null;
}
function wn(e, t, r) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Te = {
  transitional: lt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, r) {
      const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, o = l.isObject(t);
      if (o && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
        return s ? JSON.stringify(Jt(t)) : t;
      if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t) || l.isReadableStream(t))
        return t;
      if (l.isArrayBufferView(t))
        return t.buffer;
      if (l.isURLSearchParams(t))
        return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (o) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return yn(t, this.formSerializer).toString();
        if ((i = l.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const m = this.env && this.env.FormData;
          return qe(
            i ? { "files[]": t } : t,
            m && new m(),
            this.formSerializer
          );
        }
      }
      return o || s ? (r.setContentType("application/json", !1), wn(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const r = this.transitional || Te.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
      if (l.isResponse(t) || l.isReadableStream(t))
        return t;
      if (t && l.isString(t) && (n && !this.responseType || s)) {
        const a = !(r && r.silentJSONParsing) && s;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (i) {
          if (a)
            throw i.name === "SyntaxError" ? S.from(i, S.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: W.classes.FormData,
    Blob: W.classes.Blob
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
  Te.headers[e] = {};
});
const vn = l.toObjectSet([
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
]), _n = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), r = a.substring(0, s).trim().toLowerCase(), n = a.substring(s + 1).trim(), !(!r || t[r] && vn[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, xt = /* @__PURE__ */ Symbol("internals");
function Ee(e) {
  return e && String(e).trim().toLowerCase();
}
function Ue(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(Ue) : String(e);
}
function kn(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const En = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Xe(e, t, r, n, s) {
  if (l.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!l.isString(t)) {
    if (l.isString(n))
      return t.indexOf(n) !== -1;
    if (l.isRegExp(n))
      return n.test(t);
  }
}
function Rn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Sn(e, t) {
  const r = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, o, a) {
        return this[n].call(this, t, s, o, a);
      },
      configurable: !0
    });
  });
}
let Q = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function o(i, m, c) {
      const u = Ee(m);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const b = l.findKey(s, u);
      (!b || s[b] === void 0 || c === !0 || c === void 0 && s[b] !== !1) && (s[b || m] = Ue(i));
    }
    const a = (i, m) => l.forEach(i, (c, u) => o(c, u, m));
    if (l.isPlainObject(t) || t instanceof this.constructor)
      a(t, r);
    else if (l.isString(t) && (t = t.trim()) && !En(t))
      a(_n(t), r);
    else if (l.isObject(t) && l.isIterable(t)) {
      let i = {}, m, c;
      for (const u of t) {
        if (!l.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        i[c = u[0]] = (m = i[c]) ? l.isArray(m) ? [...m, u[1]] : [m, u[1]] : u[1];
      }
      a(i, r);
    } else
      t != null && o(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Ee(t), t) {
      const n = l.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return kn(s);
        if (l.isFunction(r))
          return r.call(this, s, n);
        if (l.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ee(t), t) {
      const n = l.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Xe(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function o(a) {
      if (a = Ee(a), a) {
        const i = l.findKey(n, a);
        i && (!r || Xe(n, n[i], i, r)) && (delete n[i], s = !0);
      }
    }
    return l.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || Xe(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return l.forEach(this, (s, o) => {
      const a = l.findKey(n, o);
      if (a) {
        r[a] = Ue(s), delete r[o];
        return;
      }
      const i = t ? Rn(o) : String(o).trim();
      i !== o && delete r[o], r[i] = Ue(s), n[i] = !0;
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
    const n = (this[xt] = this[xt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const i = Ee(a);
      n[i] || (Sn(s, a), n[i] = !0);
    }
    return l.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Q.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
l.reduceDescriptors(Q.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
l.freezeMethods(Q);
function Qe(e, t) {
  const r = this || Te, n = t || r, s = Q.from(n.headers);
  let o = n.data;
  return l.forEach(e, function(i) {
    o = i.call(r, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Wt(e) {
  return !!(e && e.__CANCEL__);
}
let Ae = class extends S {
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
    super(t ?? "canceled", S.ERR_CANCELED, r, n), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Kt(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(
    new S(
      "Request failed with status code " + r.status,
      [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
      r.config,
      r.request,
      r
    )
  );
}
function Cn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function On(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(m) {
    const c = Date.now(), u = n[o];
    a || (a = c), r[s] = m, n[s] = c;
    let b = o, O = 0;
    for (; b !== s; )
      O += r[b++], b = b % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - a < t)
      return;
    const P = u && c - u;
    return P ? Math.round(O * 1e3 / P) : void 0;
  };
}
function Tn(e, t) {
  let r = 0, n = 1e3 / t, s, o;
  const a = (c, u = Date.now()) => {
    r = u, s = null, o && (clearTimeout(o), o = null), e(...c);
  };
  return [(...c) => {
    const u = Date.now(), b = u - r;
    b >= n ? a(c, u) : (s = c, o || (o = setTimeout(() => {
      o = null, a(s);
    }, n - b)));
  }, () => s && a(s)];
}
const Ie = (e, t, r = 3) => {
  let n = 0;
  const s = On(50, 250);
  return Tn((o) => {
    const a = o.loaded, i = o.lengthComputable ? o.total : void 0, m = a - n, c = s(m), u = a <= i;
    n = a;
    const b = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: m,
      rate: c || void 0,
      estimated: c && i && u ? (i - a) / c : void 0,
      event: o,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(b);
  }, r);
}, wt = (e, t) => {
  const r = e != null;
  return [
    (n) => t[0]({
      lengthComputable: r,
      total: e,
      loaded: n
    }),
    t[1]
  ];
}, vt = (e) => (...t) => l.asap(() => e(...t)), An = W.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, W.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(W.origin),
  W.navigator && /(msie|trident)/i.test(W.navigator.userAgent)
) : () => !0, $n = W.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, o, a) {
      if (typeof document > "u") return;
      const i = [`${e}=${encodeURIComponent(t)}`];
      l.isNumber(r) && i.push(`expires=${new Date(r).toUTCString()}`), l.isString(n) && i.push(`path=${n}`), l.isString(s) && i.push(`domain=${s}`), o === !0 && i.push("secure"), l.isString(a) && i.push(`SameSite=${a}`), document.cookie = i.join("; ");
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
function Nn(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Pn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Xt(e, t, r) {
  let n = !Nn(t);
  return e && (n || r == !1) ? Pn(e, t) : t;
}
const _t = (e) => e instanceof Q ? { ...e } : e;
function ge(e, t) {
  t = t || {};
  const r = {};
  function n(c, u, b, O) {
    return l.isPlainObject(c) && l.isPlainObject(u) ? l.merge.call({ caseless: O }, c, u) : l.isPlainObject(u) ? l.merge({}, u) : l.isArray(u) ? u.slice() : u;
  }
  function s(c, u, b, O) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(c))
        return n(void 0, c, b, O);
    } else return n(c, u, b, O);
  }
  function o(c, u) {
    if (!l.isUndefined(u))
      return n(void 0, u);
  }
  function a(c, u) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(c))
        return n(void 0, c);
    } else return n(void 0, u);
  }
  function i(c, u, b) {
    if (b in t)
      return n(c, u);
    if (b in e)
      return n(void 0, c);
  }
  const m = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: i,
    headers: (c, u, b) => s(_t(c), _t(u), b, !0)
  };
  return l.forEach(Object.keys({ ...e, ...t }), function(u) {
    if (u === "__proto__" || u === "constructor" || u === "prototype") return;
    const b = l.hasOwnProp(m, u) ? m[u] : s, O = b(e[u], t[u], u);
    l.isUndefined(O) && b !== i || (r[u] = O);
  }), r;
}
const Qt = (e) => {
  const t = ge({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: o, headers: a, auth: i } = t;
  if (t.headers = a = Q.from(a), t.url = Vt(
    Xt(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), i && a.set(
    "Authorization",
    "Basic " + btoa(
      (i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : "")
    )
  ), l.isFormData(r)) {
    if (W.hasStandardBrowserEnv || W.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (l.isFunction(r.getHeaders)) {
      const m = r.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(m).forEach(([u, b]) => {
        c.includes(u.toLowerCase()) && a.set(u, b);
      });
    }
  }
  if (W.hasStandardBrowserEnv && (n && l.isFunction(n) && (n = n(t)), n || n !== !1 && An(t.url))) {
    const m = s && o && $n.read(o);
    m && a.set(s, m);
  }
  return t;
}, Ln = typeof XMLHttpRequest < "u", Un = Ln && function(e) {
  return new Promise(function(r, n) {
    const s = Qt(e);
    let o = s.data;
    const a = Q.from(s.headers).normalize();
    let { responseType: i, onUploadProgress: m, onDownloadProgress: c } = s, u, b, O, P, f;
    function v() {
      P && P(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let x = new XMLHttpRequest();
    x.open(s.method.toUpperCase(), s.url, !0), x.timeout = s.timeout;
    function $() {
      if (!x)
        return;
      const L = Q.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), F = {
        data: !i || i === "text" || i === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: L,
        config: e,
        request: x
      };
      Kt(
        function(j) {
          r(j), v();
        },
        function(j) {
          n(j), v();
        },
        F
      ), x = null;
    }
    "onloadend" in x ? x.onloadend = $ : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout($);
    }, x.onabort = function() {
      x && (n(new S("Request aborted", S.ECONNABORTED, e, x)), x = null);
    }, x.onerror = function(U) {
      const F = U && U.message ? U.message : "Network Error", H = new S(F, S.ERR_NETWORK, e, x);
      H.event = U || null, n(H), x = null;
    }, x.ontimeout = function() {
      let U = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const F = s.transitional || lt;
      s.timeoutErrorMessage && (U = s.timeoutErrorMessage), n(
        new S(
          U,
          F.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
          e,
          x
        )
      ), x = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in x && l.forEach(a.toJSON(), function(U, F) {
      x.setRequestHeader(F, U);
    }), l.isUndefined(s.withCredentials) || (x.withCredentials = !!s.withCredentials), i && i !== "json" && (x.responseType = s.responseType), c && ([O, f] = Ie(c, !0), x.addEventListener("progress", O)), m && x.upload && ([b, P] = Ie(m), x.upload.addEventListener("progress", b), x.upload.addEventListener("loadend", P)), (s.cancelToken || s.signal) && (u = (L) => {
      x && (n(!L || L.type ? new Ae(null, e, x) : L), x.abort(), x = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const M = Cn(s.url);
    if (M && W.protocols.indexOf(M) === -1) {
      n(
        new S(
          "Unsupported protocol " + M + ":",
          S.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    x.send(o || null);
  });
}, Fn = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), s;
    const o = function(c) {
      if (!s) {
        s = !0, i();
        const u = c instanceof Error ? c : this.reason;
        n.abort(
          u instanceof S ? u : new Ae(u instanceof Error ? u.message : u)
        );
      }
    };
    let a = t && setTimeout(() => {
      a = null, o(new S(`timeout of ${t}ms exceeded`, S.ETIMEDOUT));
    }, t);
    const i = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: m } = n;
    return m.unsubscribe = () => l.asap(i), m;
  }
}, In = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, Bn = async function* (e, t) {
  for await (const r of jn(e))
    yield* In(r, t);
}, jn = async function* (e) {
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
}, kt = (e, t, r, n) => {
  const s = Bn(e, t);
  let o = 0, a, i = (m) => {
    a || (a = !0, n && n(m));
  };
  return new ReadableStream(
    {
      async pull(m) {
        try {
          const { done: c, value: u } = await s.next();
          if (c) {
            i(), m.close();
            return;
          }
          let b = u.byteLength;
          if (r) {
            let O = o += b;
            r(O);
          }
          m.enqueue(new Uint8Array(u));
        } catch (c) {
          throw i(c), c;
        }
      },
      cancel(m) {
        return i(m), s.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, Et = 64 * 1024, { isFunction: Pe } = l, Dn = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(l.global), { ReadableStream: Rt, TextEncoder: St } = l.global, Ct = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Mn = (e) => {
  e = l.merge.call(
    {
      skipUndefined: !0
    },
    Dn,
    e
  );
  const { fetch: t, Request: r, Response: n } = e, s = t ? Pe(t) : typeof fetch == "function", o = Pe(r), a = Pe(n);
  if (!s)
    return !1;
  const i = s && Pe(Rt), m = s && (typeof St == "function" ? /* @__PURE__ */ ((f) => (v) => f.encode(v))(new St()) : async (f) => new Uint8Array(await new r(f).arrayBuffer())), c = o && i && Ct(() => {
    let f = !1;
    const v = new r(W.origin, {
      body: new Rt(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !v;
  }), u = a && i && Ct(() => l.isReadableStream(new n("").body)), b = {
    stream: u && ((f) => f.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !b[f] && (b[f] = (v, x) => {
      let $ = v && v[f];
      if ($)
        return $.call(v);
      throw new S(
        `Response type '${f}' is not supported`,
        S.ERR_NOT_SUPPORT,
        x
      );
    });
  });
  const O = async (f) => {
    if (f == null)
      return 0;
    if (l.isBlob(f))
      return f.size;
    if (l.isSpecCompliantForm(f))
      return (await new r(W.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (l.isArrayBufferView(f) || l.isArrayBuffer(f))
      return f.byteLength;
    if (l.isURLSearchParams(f) && (f = f + ""), l.isString(f))
      return (await m(f)).byteLength;
  }, P = async (f, v) => {
    const x = l.toFiniteNumber(f.getContentLength());
    return x ?? O(v);
  };
  return async (f) => {
    let {
      url: v,
      method: x,
      data: $,
      signal: M,
      cancelToken: L,
      timeout: U,
      onDownloadProgress: F,
      onUploadProgress: H,
      responseType: j,
      headers: V,
      withCredentials: ne = "same-origin",
      fetchOptions: ye
    } = Qt(f), be = t || fetch;
    j = j ? (j + "").toLowerCase() : "text";
    let ae = Fn(
      [M, L && L.toAbortSignal()],
      U
    ), ie = null;
    const se = ae && ae.unsubscribe && (() => {
      ae.unsubscribe();
    });
    let ue;
    try {
      if (H && c && x !== "get" && x !== "head" && (ue = await P(V, $)) !== 0) {
        let ee = new r(v, {
          method: "POST",
          body: $,
          duplex: "half"
        }), le;
        if (l.isFormData($) && (le = ee.headers.get("content-type")) && V.setContentType(le), ee.body) {
          const [g, w] = wt(
            ue,
            Ie(vt(H))
          );
          $ = kt(ee.body, Et, g, w);
        }
      }
      l.isString(ne) || (ne = ne ? "include" : "omit");
      const N = o && "credentials" in r.prototype, J = {
        ...ye,
        signal: ae,
        method: x.toUpperCase(),
        headers: V.normalize().toJSON(),
        body: $,
        duplex: "half",
        credentials: N ? ne : void 0
      };
      ie = o && new r(v, J);
      let Z = await (o ? be(ie, ye) : be(v, J));
      const de = u && (j === "stream" || j === "response");
      if (u && (F || de && se)) {
        const ee = {};
        ["status", "statusText", "headers"].forEach((C) => {
          ee[C] = Z[C];
        });
        const le = l.toFiniteNumber(Z.headers.get("content-length")), [g, w] = F && wt(
          le,
          Ie(vt(F), !0)
        ) || [];
        Z = new n(
          kt(Z.body, Et, g, () => {
            w && w(), se && se();
          }),
          ee
        );
      }
      j = j || "text";
      let _e = await b[l.findKey(b, j) || "text"](
        Z,
        f
      );
      return !de && se && se(), await new Promise((ee, le) => {
        Kt(ee, le, {
          data: _e,
          headers: Q.from(Z.headers),
          status: Z.status,
          statusText: Z.statusText,
          config: f,
          request: ie
        });
      });
    } catch (N) {
      throw se && se(), N && N.name === "TypeError" && /Load failed|fetch/i.test(N.message) ? Object.assign(
        new S(
          "Network Error",
          S.ERR_NETWORK,
          f,
          ie,
          N && N.response
        ),
        {
          cause: N.cause || N
        }
      ) : S.from(N, N && N.code, f, ie, N && N.response);
    }
  };
}, zn = /* @__PURE__ */ new Map(), Zt = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: s } = t, o = [n, s, r];
  let a = o.length, i = a, m, c, u = zn;
  for (; i--; )
    m = o[i], c = u.get(m), c === void 0 && u.set(m, c = i ? /* @__PURE__ */ new Map() : Mn(t)), u = c;
  return c;
};
Zt();
const ut = {
  http: sn,
  xhr: Un,
  fetch: {
    get: Zt
  }
};
l.forEach(ut, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ot = (e) => `- ${e}`, qn = (e) => l.isFunction(e) || e === null || e === !1;
function Hn(e, t) {
  e = l.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, s;
  const o = {};
  for (let a = 0; a < r; a++) {
    n = e[a];
    let i;
    if (s = n, !qn(n) && (s = ut[(i = String(n)).toLowerCase()], s === void 0))
      throw new S(`Unknown adapter '${i}'`);
    if (s && (l.isFunction(s) || (s = s.get(t))))
      break;
    o[i || "#" + a] = s;
  }
  if (!s) {
    const a = Object.entries(o).map(
      ([m, c]) => `adapter ${m} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = r ? a.length > 1 ? `since :
` + a.map(Ot).join(`
`) : " " + Ot(a[0]) : "as no adapter specified";
    throw new S(
      "There is no suitable adapter to dispatch the request " + i,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Yt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Hn,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: ut
};
function Ze(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ae(null, e);
}
function Tt(e) {
  return Ze(e), e.headers = Q.from(e.headers), e.data = Qe.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Yt.getAdapter(e.adapter || Te.adapter, e)(e).then(
    function(n) {
      return Ze(e), n.data = Qe.call(e, e.transformResponse, n), n.headers = Q.from(n.headers), n;
    },
    function(n) {
      return Wt(n) || (Ze(e), n && n.response && (n.response.data = Qe.call(
        e,
        e.transformResponse,
        n.response
      ), n.response.headers = Q.from(n.response.headers))), Promise.reject(n);
    }
  );
}
const Gt = "1.13.6", He = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  He[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const At = {};
He.transitional = function(t, r, n) {
  function s(o, a) {
    return "[Axios v" + Gt + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, i) => {
    if (t === !1)
      throw new S(
        s(a, " has been removed" + (r ? " in " + r : "")),
        S.ERR_DEPRECATED
      );
    return r && !At[a] && (At[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, a, i) : !0;
  };
};
He.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Vn(e, t, r) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const o = n[s], a = t[o];
    if (a) {
      const i = e[o], m = i === void 0 || a(i, o, e);
      if (m !== !0)
        throw new S(
          "option " + o + " must be " + m,
          S.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (r !== !0)
      throw new S("Unknown option " + o, S.ERR_BAD_OPTION);
  }
}
const Fe = {
  assertOptions: Vn,
  validators: He
}, te = Fe.validators;
let me = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new bt(),
      response: new bt()
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
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ge(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: o } = r;
    n !== void 0 && Fe.assertOptions(
      n,
      {
        silentJSONParsing: te.transitional(te.boolean),
        forcedJSONParsing: te.transitional(te.boolean),
        clarifyTimeoutError: te.transitional(te.boolean),
        legacyInterceptorReqResOrdering: te.transitional(te.boolean)
      },
      !1
    ), s != null && (l.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : Fe.assertOptions(
      s,
      {
        encode: te.function,
        serialize: te.function
      },
      !0
    )), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Fe.assertOptions(
      r,
      {
        baseUrl: te.spelling("baseURL"),
        withXsrfToken: te.spelling("withXSRFToken")
      },
      !0
    ), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = o && l.merge(o.common, o[r.method]);
    o && l.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (f) => {
      delete o[f];
    }), r.headers = Q.concat(a, o);
    const i = [];
    let m = !0;
    this.interceptors.request.forEach(function(v) {
      if (typeof v.runWhen == "function" && v.runWhen(r) === !1)
        return;
      m = m && v.synchronous;
      const x = r.transitional || lt;
      x && x.legacyInterceptorReqResOrdering ? i.unshift(v.fulfilled, v.rejected) : i.push(v.fulfilled, v.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(v) {
      c.push(v.fulfilled, v.rejected);
    });
    let u, b = 0, O;
    if (!m) {
      const f = [Tt.bind(this), void 0];
      for (f.unshift(...i), f.push(...c), O = f.length, u = Promise.resolve(r); b < O; )
        u = u.then(f[b++], f[b++]);
      return u;
    }
    O = i.length;
    let P = r;
    for (; b < O; ) {
      const f = i[b++], v = i[b++];
      try {
        P = f(P);
      } catch (x) {
        v.call(this, x);
        break;
      }
    }
    try {
      u = Tt.call(this, P);
    } catch (f) {
      return Promise.reject(f);
    }
    for (b = 0, O = c.length; b < O; )
      u = u.then(c[b++], c[b++]);
    return u;
  }
  getUri(t) {
    t = ge(this.defaults, t);
    const r = Xt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Vt(r, t.params, t.paramsSerializer);
  }
};
l.forEach(["delete", "get", "head", "options"], function(t) {
  me.prototype[t] = function(r, n) {
    return this.request(
      ge(n || {}, {
        method: t,
        url: r,
        data: (n || {}).data
      })
    );
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, a, i) {
      return this.request(
        ge(i || {}, {
          method: t,
          headers: n ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: a
        })
      );
    };
  }
  me.prototype[t] = r(), me.prototype[t + "Form"] = r(!0);
});
let Jn = class er {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const a = new Promise((i) => {
        n.subscribe(i), o = i;
      }).then(s);
      return a.cancel = function() {
        n.unsubscribe(o);
      }, a;
    }, t(function(o, a, i) {
      n.reason || (n.reason = new Ae(o, a, i), r(n.reason));
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
      token: new er(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Wn(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Kn(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const nt = {
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
Object.entries(nt).forEach(([e, t]) => {
  nt[t] = e;
});
function tr(e) {
  const t = new me(e), r = Lt(me.prototype.request, t);
  return l.extend(r, me.prototype, t, { allOwnKeys: !0 }), l.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return tr(ge(e, s));
  }, r;
}
const I = tr(Te);
I.Axios = me;
I.CanceledError = Ae;
I.CancelToken = Jn;
I.isCancel = Wt;
I.VERSION = Gt;
I.toFormData = qe;
I.AxiosError = S;
I.Cancel = I.CanceledError;
I.all = function(t) {
  return Promise.all(t);
};
I.spread = Wn;
I.isAxiosError = Kn;
I.mergeConfig = ge;
I.AxiosHeaders = Q;
I.formToJSON = (e) => Jt(l.isHTMLForm(e) ? new FormData(e) : e);
I.getAdapter = Yt.getAdapter;
I.HttpStatusCode = nt;
I.default = I;
const {
  Axios: vo,
  AxiosError: _o,
  CanceledError: ko,
  isCancel: Eo,
  CancelToken: Ro,
  VERSION: So,
  all: Co,
  Cancel: Oo,
  isAxiosError: To,
  spread: Ao,
  toFormData: $o,
  AxiosHeaders: No,
  HttpStatusCode: Po,
  formToJSON: Lo,
  getAdapter: Uo,
  mergeConfig: Fo
} = I, st = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), rr = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), nr = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, r = document.getElementById(e.el_id);
      if (!r)
        throw new Error("[el_id] is invalid");
      ((n) => {
        const s = (o) => {
          ((a) => {
            const i = a.getAttribute("data-ce");
            if (!i)
              return;
            const m = JSON.parse(i).filter((c) => c?.k.startsWith("t-"));
            if (m.length != 0)
              for (const c of m) {
                const u = c.k, b = c.v.split(" ");
                if (u == `t-${t}-class`)
                  for (const O of b)
                    a.classList.add(O);
                else
                  for (const O of b)
                    a.classList.remove(O);
              }
          })(o);
        };
        for (const o of n.getElementsByTagName("*"))
          s(o);
        s(n);
      })(r);
    } catch (t) {
      const r = `err: [theme] ${t}`;
      throw console.log(r), r;
    }
  }
});
function ot(e, t = 1e3) {
  let r = {
    cnt: 0
  };
  return new Promise((n) => {
    const s = () => {
      console.log(`[setInterval] is running.. [count=${r.cnt}]`);
      try {
        e() && (clearInterval(o), n());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      r.cnt += 1;
    }, o = setInterval(() => {
      s();
    }, t);
    s();
  });
}
let Xn = class {
  listeners = {};
  on = (e, t) => ((this.listeners[e] ||= []).push(t), () => this.off(e, t));
  off = (e, t) => {
    this.listeners[e] = this.listeners[e]?.filter((r) => r !== t);
  };
  /** Sequential execution (await each listener) */
  emit = async (e, ...t) => {
    for (const r of this.listeners[e] ?? [])
      await r(...t);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (e, ...t) => {
    await Promise.all(
      (this.listeners[e] ?? []).map((r) => r(...t))
    );
  };
  //Error-safe emit
  emitSafe = async (e, ...t) => {
    for (const r of this.listeners[e] ?? [])
      try {
        await r(...t);
      } catch (n) {
        this.listeners.error?.forEach(
          (s) => s(n)
        );
      }
  };
};
const Be = () => new Xn();
class sr {
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
let q = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [r, n] of t.entries()) {
        const s = n, o = `${s.name}:${e.run_from}`, a = `${e.run_from}_src`;
        let i = s[a];
        const m = `${e.run_from}_src`;
        let c = e?.lazy_lib?.[m] || null;
        if (c && (c = c.replace("{*}", `${s.name}`)), console.log(`_lazy_src: ${c}`), console.log(`_src: ${i}`), q.lib.l.hasOwnProperty(`${o}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(i) && i.includes("/") == !1 && q.lib.inbuilt_lib.indexOf(`${s.name}`) === -1)
            if (c)
              i = c;
            else
              throw `[lib-name=${s.name},lib-src=${i}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (i.startsWith("./") || i.startsWith("../")) {
            const u = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${i}`
            );
            q.lib.l[`${o}`] = {
              lib: u,
              src: i
            };
          }
          if (i.startsWith("http://") || i.startsWith("https://")) {
            const u = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${i}`
            );
            q.lib.l[`${o}`] = {
              lib: u,
              src: i
            };
          }
        }
      }
      console.log(await q.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const r = `${e.name}:${e.run_from}`;
      return q.lib.l.hasOwnProperty(`${r}`) == !1 && await q.lib.set({
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
      }), t = q.lib.l[`${r}`], t;
    },
    get_all: async (e) => q.lib.l
  },
  path: {
    set: (e) => {
      let t = "", r = "";
      const n = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (r = "/dist"), n.indexOf(e.type) !== -1)
        for (const [s, o] of n.entries()) {
          let a = s == 0 ? "" : "/";
          if (t += `${a}${o}`, o == e.type)
            return `${t}${r}${e.name}`;
        }
      else
        for (const [s, o] of n.entries()) {
          let a = s == 0 ? "" : "/";
          if (t += `${a}${o}`, o == "src")
            return `${t}${r}${e.name}`;
        }
      return `${t}${r}${e.name}`;
    }
  }
};
const or = Be(), ar = Be(), Qn = or.on, Zn = or.emit, Yn = ar.emit;
ar.on;
const Gn = async (e) => {
  const t = await rr();
  return await q.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (r) => {
      console.log("--renderer [set]"), r.return = r?.return || {}, r.return.r = r?.return?.r || "full";
      const n = new sr();
      n.start();
      let s = r.data?.value?.l || r.data.l, o = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return r.return.r == "full" ? o.r = "" : o.r = [], await (async () => {
        for (const a of s) {
          const i = await await q.lib.get({ name: a.type, run_from: "renderer", lazy_lib: e.lazy_lib }), m = await (await i.lib.index({
            f: {
              name: (c) => t.f.name({ id: a.id, name: c }),
              get_lib: async (c) => await await q.lib.get({ name: c.name, run_from: c.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (c) => await (await nr()).set(c),
              path: (c) => q.path.set({ src: i.src, type: a.type, name: c }),
              //set..
              uuid: () => st().set(),
              wait_until: ot
            }
          })).set(
            {
              data: {
                curr: a
              }
            }
            /*_$cb*/
          );
          r?.return?.r == "full" ? o.r += m?.r || "" : o.r.push(m?.r || ""), o.style += m?.style || "", o.head += m?.head || "";
        }
      })(), n.stop(), o.benchmark = n.result(), o;
    }
  };
}, es = async (e) => {
  const t = await rr();
  return await q.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (r) => {
      console.log("--hydrator [set]");
      const n = new sr();
      n.start();
      let s = {
        r: "",
        style: ""
      }, o = {
        style_id: `${st().set()}_stl`
      }, a = r.data?.value?.l || r.data.l;
      const i = async () => {
        for (const m of a) {
          const c = await await q.lib.get({ name: m.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), u = c.lib, b = Be(), O = b.on, P = await (await u.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (f) => t.f.name({ id: m.id, name: f }),
              get_lib: async (f) => await await q.lib.get({ name: f.name, run_from: f.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (f) => await (await nr()).set(f),
              path: (f) => q.path.set({ src: c.src, type: m.type, name: f }),
              //set..
              uuid: () => st().set(),
              wait_until: ot,
              //set..
              call: Yn,
              listen: O,
              //set..
              new_emitter: () => Be()
            }
          })).set(
            {
              data: {
                curr: m
              }
            }
            /*_$cb*/
          );
          Qn("msg", async (f) => {
            try {
              if (Object.keys(f.where || {}).length == 0) {
                await b.emit("msg", f);
                return;
              }
            } catch {
            }
            try {
              if (m?.[f.where?.key || ""] == f.where?.value) {
                await b.emit("msg", f);
                return;
              }
            } catch {
            }
          }), s.style += P.style;
        }
      };
      await ot(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await i();
      try {
        ((m) => {
          const c = document.getElementById(`${o.style_id}`);
          c && c.remove();
          const u = document.createElement("style");
          u.id = `${o.style_id}`, u.innerHTML = `${s.style}`, m.appendChild(u);
        })(document.head);
      } catch (m) {
        console.log(`${m}, Failed to set style..`);
      }
      return n.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: n.result()
      };
    }
  };
}, ts = ["innerHTML"], rs = /* @__PURE__ */ je({
  __name: "Contentengin",
  props: {
    ce_file: {}
  },
  setup(e, { expose: t }) {
    const r = A({
      ce_file: e.ce_file
      //route?.meta?.ce_file,
    });
    t({
      ce_call: Zn
    });
    const n = A(null), s = A(null);
    let o = "";
    return (async () => {
      try {
        if (typeof r.value.ce_file == "string") {
          const O = await (await fetch(r.value.ce_file)).json();
          n.value = O;
        } else
          n.value = r.value.ce_file;
      } catch (b) {
        console.log(b);
        return;
      }
      let a = {
        l: [
          {
            id: "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
            type: "text",
            data: {
              data: "Loading.."
            }
          }
        ]
      }, i = {
        lib: [],
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"
        }
      };
      a = n.value.data, i.lazy_lib = n.value.config.lazy_lib;
      const m = await Gn(i), c = await es(i);
      await (async () => {
        const b = await m.set({
          data: a
        });
        s.value = b.r, o = b.style;
        const O = document.createElement("style");
        document.head.appendChild(O), O.innerHTML = o, setTimeout(async () => {
          await c.set({
            data: a
          });
        }, 10);
      })();
    })(), (a, i) => s.value ? (_(), k("div", {
      key: 0,
      innerHTML: s.value
    }, null, 8, ts)) : z("", !0);
  }
}), ns = { class: "md:hidden fixed bottom-6 right-6 z-40" }, ss = { class: "flex-1 overflow-y-auto custom-scrollbar" }, os = {
  key: 0,
  class: "p-10 flex justify-center"
}, as = { class: "flex items-center justify-between mb-3" }, is = ["onClick"], ls = {
  key: 0,
  class: "mb-3"
}, cs = ["onUpdate:modelValue", "placeholder"], us = { class: "space-y-2" }, ds = { class: "flex items-center gap-2 mt-2" }, fs = ["onClick"], ps = {
  key: 0,
  class: "w-3 h-3 text-white",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, hs = {
  key: 0,
  class: "mt-2"
}, ms = ["onClick"], gs = ["onClick"], ys = { class: "flex-1 flex overflow-hidden" }, bs = ["onClick"], xs = {
  key: 0,
  class: "ml-1 text-pink-500 dark:text-pink-400"
}, ws = { key: 0 }, vs = {
  key: 0,
  class: "mb-4"
}, _s = ["placeholder"], ks = { class: "space-y-5" }, Es = { class: "flex items-center gap-3 px-2 mt-2" }, Rs = ["onClick"], Ss = { class: "flex items-center gap-3" }, Cs = {
  key: 0,
  class: "w-3.5 h-3.5 text-white",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Os = {
  key: 0,
  class: "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
}, Ts = { class: "flex-shrink-0" }, As = { class: "relative flex-1" }, $s = ["onClick"], Ns = { class: "flex-1 overflow-x-auto custom-scrollbar-horizontal" }, Ps = ["id"], Ls = { class: "text-xl font-bold text-pink-600 dark:text-pink-500 mb-4" }, Us = { class: "space-y-3" }, Fs = ["onClick"], Is = {
  key: 0,
  class: "w-2.5 h-2.5 text-white",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Bs = {
  key: 0,
  class: "w-full flex items-center justify-center"
}, js = { class: "text-center" }, Ds = /* @__PURE__ */ je({
  __name: "Productfilter",
  props: {
    _p: {},
    _$p: {},
    _$cb: {},
    config: {}
  },
  setup(e) {
    const t = e, r = xe(() => t.config?.theme || ue.value?.theme || "light"), n = A(!1), s = A(null), o = Ne({}), a = A(!1), i = A(""), m = A(""), c = A(""), u = A(""), b = () => {
      const p = [];
      return Object.entries(o).forEach(([d, y]) => {
        if (!(!y || y.length === 0))
          if (d === "price") {
            const { min: E, max: T } = y[0];
            p.push(`variant_prices:[${E}..${T}]`);
          } else {
            const E = d;
            if (y.length === 1)
              p.push(`${E}:=${y[0]}`);
            else {
              const T = y.map((B) => `${B}`).join(",");
              p.push(`${E}:=[${T}]`);
            }
          }
      }), p.length > 0 ? p.join(" && ") : null;
    }, O = () => {
      x();
      const p = b();
      console.log("🚀 [Filter Component] Emitting exact filter string to parent:", p), t._$cb?.change?.({
        filter_by: p
      }), M(!1);
    }, P = (p) => {
      const d = p;
      d.style.height = "auto";
      const y = d.scrollHeight;
      d.style.height = "0px", d.offsetHeight, d.style.height = y + "px";
    }, f = (p) => {
      p.style.height = "auto";
    }, v = (p) => {
      const d = p;
      d.style.height = d.scrollHeight + "px", d.offsetHeight, d.style.height = "0px";
    }, x = () => {
      const p = new URLSearchParams(window.location.search);
      m.value && p.set("q", m.value), Array.from(p.keys()).filter((E) => E !== "q").forEach((E) => p.delete(E)), Object.entries(o).forEach(([E, T]) => {
        Array.isArray(T) && T.length > 0 && (E === "price" && T[0]?.min !== void 0 ? p.set(E, `${T[0].min},${T[0].max}`) : p.set(E, T.join(",")));
      });
      const y = `${window.location.pathname}?${p.toString()}`;
      window.history.replaceState({}, "", y);
    }, $ = () => {
      const p = new URLSearchParams(window.location.search);
      m.value = p.get("q") || "", p.forEach((d, y) => {
        if (y !== "q")
          if (y === "price") {
            const [E, T] = d.split(",");
            o.price = [{ min: Number(E), max: Number(T) }], c.value = Number(E), u.value = Number(T);
          } else
            o[y] = d.split(",");
      });
    }, M = async (p = !1) => {
      p && (n.value = !0);
      const d = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", y = b(), E = {
        raw_text: m.value || "_",
        q: m.value || "*",
        query_by: "title,brand,category",
        query_by_weights: "3,2,1",
        page: 1,
        per_page: 20,
        prioritize_exact_match: !0,
        prefix: !0,
        token_separators: "+&",
        num_typos: 1,
        drop_tokens_threshold: 1,
        facet_by: "brand,category,color,size",
        max_facet_values: 100,
        collection: "products"
      };
      y && (E.filter_by = y);
      try {
        const B = await (await fetch("https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=get_filter_data", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${d}` },
          body: JSON.stringify(E)
        })).json();
        B.success && (s.value = B);
      } catch (T) {
        console.error("Filter API Error:", T);
      } finally {
        p && (n.value = !1);
      }
    }, L = (p) => {
      if (!p || !p.l) return [];
      const d = F[p.typ]?.toLowerCase();
      return d ? p.l.filter((y) => y.name.toLowerCase().includes(d)) : p.l;
    }, U = Ne({}), F = Ne({}), H = Ne({}), j = A(!1), V = A(null), ne = A(""), ye = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), be = A(null), ae = xe(() => {
      if (!V.value || !V.value.l) return [];
      const p = V.value.l.filter(
        (G) => G.name.toLowerCase().includes(ne.value.toLowerCase())
      ), d = {};
      p.forEach((G) => {
        let ke = G.name.charAt(0).toUpperCase();
        /[A-Z]/.test(ke) || (ke = "#"), d[ke] || (d[ke] = []), d[ke].push(G);
      });
      const E = Object.keys(d).sort().map((G) => ({
        letter: G,
        items: d[G],
        height: d[G].length * 32 + 60
      })), T = [[]];
      let B = 0, Y = 0;
      const $e = 600;
      return E.forEach((G) => {
        Y + G.height > $e && Y > 0 && (T.push([]), B++, Y = 0), T[B].push({
          letter: G.letter,
          items: G.items
        }), Y += G.height;
      }), T;
    }), ie = (p) => {
      ur(() => {
        const d = document.getElementById(`dir-letter-${p}`);
        d && d.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      });
    }, se = (p) => {
      p.typ === "brand" && (V.value = p, ne.value = "", j.value = !0);
    }, ue = xe(() => s.value || t._$p?.data?.curr?.data || {}), N = xe(() => ue.value.filters || []), J = xe(() => N.value.find((p) => p.typ === i.value));
    lr(N, (p) => {
      p.length > 0 && !i.value && (i.value = p[0].typ);
    }, { immediate: !0 });
    const Z = xe(() => Object.values(o).reduce((p, d) => p + (Array.isArray(d) ? d.length : 0), 0)), de = (p) => {
      U[p] = !U[p], U[p] || (F[p] = "");
    }, _e = (p) => {
      H[p] = !H[p];
    }, ee = (p) => {
      if (!p || !p.l) return [];
      let d = p.l;
      const y = F[p.typ]?.toLowerCase();
      return y ? d.filter((E) => E.name.toLowerCase().includes(y)) : p.typ === "brand" || !H[p.typ] ? d.slice(0, 5) : d;
    }, le = (p) => F[p.typ] ? !1 : p.l && p.l.length > 5, g = (p, d) => {
      const y = o[p];
      return Array.isArray(y) ? y.includes(d) : !1;
    }, w = (p, d) => {
      o[p] || (o[p] = []);
      const y = o[p], E = y.indexOf(d);
      E === -1 ? y.push(d) : y.splice(E, 1), y.length === 0 && delete o[p], O();
    }, C = () => {
      let p = c.value !== "" ? Number(c.value) : void 0, d = u.value !== "" ? Number(u.value) : void 0;
      if (p !== void 0 && d !== void 0 && p > d) {
        const y = p;
        p = d, d = y, c.value = p, u.value = d;
      }
      p === void 0 && d === void 0 ? delete o.price : o.price = [{
        min: p !== void 0 ? p : 0,
        max: d !== void 0 ? d : 9999999
      }], O();
    }, ce = async () => {
      for (const p in o) delete o[p];
      c.value = "", u.value = "", O();
    };
    return Pt(async () => {
      $();
      const p = b();
      t._$cb?.change?.({ filter_by: p }), await M(!0), N.value.length > 0 && (i.value = N.value[0].typ);
    }), (p, d) => (_(), k("div", {
      class: R(["dark-mode-wrapper", { dark: r.value === "dark" }])
    }, [
      h("div", ns, [
        h("button", {
          onClick: d[0] || (d[0] = (y) => a.value = !0),
          class: R([
            "bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white px-6 py-4 rounded-full shadow-2xl font-bold flex items-center gap-2 uppercase tracking-wide active:scale-95 transition-transform duration-200",
            r.value === "dark" ? "dark:bg-pink-500 dark:hover:bg-pink-600" : ""
          ])
        }, [...d[10] || (d[10] = [
          h("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            h("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            })
          ], -1),
          dt(" Filters ", -1)
        ])], 2)
      ]),
      h("aside", {
        class: R([
          "hidden md:flex flex-col product-filter w-80 border-r h-screen sticky top-0",
          r.value === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
        ])
      }, [
        h("div", {
          class: R([
            "p-4 border-b flex justify-between items-center z-10",
            r.value === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
          ])
        }, [
          h("h2", {
            class: R([
              "text-md font-bold uppercase",
              r.value === "dark" ? "text-gray-100" : "text-gray-800"
            ])
          }, "Filters", 2),
          Z.value > 0 ? (_(), k("button", {
            key: 0,
            onClick: ce,
            class: "text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 uppercase transition-colors duration-200"
          }, " Clear All ")) : z("", !0)
        ], 2),
        h("div", ss, [
          n.value ? (_(), k("div", os, [
            h("div", {
              class: R([
                "w-6 h-6 border-2 rounded-full animate-spin",
                r.value === "dark" ? "border-pink-400 border-t-transparent" : "border-pink-500 border-t-transparent"
              ])
            }, null, 2)
          ])) : (_(!0), k(K, { key: 1 }, re(N.value, (y) => (_(), k("div", {
            key: y.typ,
            class: R([
              "border-b p-4",
              r.value === "dark" ? "border-gray-800" : "border-gray-100"
            ])
          }, [
            h("div", as, [
              h("span", {
                class: R([
                  "text-sm font-bold uppercase",
                  r.value === "dark" ? "text-gray-200" : "text-gray-700"
                ])
              }, D(y.title), 3),
              h("button", {
                onClick: (E) => de(y.typ),
                class: R([
                  "p-1.5 rounded-full transition-colors duration-200",
                  r.value === "dark" ? "text-gray-400 hover:bg-gray-800 hover:text-gray-300" : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                ])
              }, [...d[11] || (d[11] = [
                h("svg", {
                  class: "w-4 h-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  h("path", {
                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                    "stroke-width": "2"
                  })
                ], -1)
              ])], 10, is)
            ]),
            Re(Ve, {
              name: "expand",
              onEnter: P,
              onAfterEnter: f,
              onLeave: v
            }, {
              default: Je(() => [
                U[y.typ] ? (_(), k("div", ls, [
                  fe(h("input", {
                    "onUpdate:modelValue": (E) => F[y.typ] = E,
                    type: "text",
                    placeholder: `Search ${y.title}`,
                    class: R([
                      "w-full px-3 py-1.5 text-xs border rounded-full focus:outline-none transition-colors duration-200",
                      r.value === "dark" ? "border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-pink-500" : "border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-pink-500"
                    ])
                  }, null, 10, cs), [
                    [pe, F[y.typ]]
                  ])
                ])) : z("", !0)
              ]),
              _: 2
            }, 1024),
            h("div", us, [
              y.typ === "price" ? (_(), k(K, { key: 0 }, [
                h("div", ds, [
                  fe(h("input", {
                    "onUpdate:modelValue": d[1] || (d[1] = (E) => c.value = E),
                    type: "number",
                    placeholder: "Min",
                    class: R([
                      "w-full px-2 py-1.5 text-sm border rounded focus:outline-none transition-colors duration-200",
                      r.value === "dark" ? "border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-pink-500" : "border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-pink-500"
                    ])
                  }, null, 2), [
                    [pe, c.value]
                  ]),
                  h("span", {
                    class: R(r.value === "dark" ? "text-gray-400" : "text-gray-500")
                  }, "-", 2),
                  fe(h("input", {
                    "onUpdate:modelValue": d[2] || (d[2] = (E) => u.value = E),
                    type: "number",
                    placeholder: "Max",
                    class: R([
                      "w-full px-2 py-1.5 text-sm border rounded focus:outline-none transition-colors duration-200",
                      r.value === "dark" ? "border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-pink-500" : "border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-pink-500"
                    ])
                  }, null, 2), [
                    [pe, u.value]
                  ])
                ]),
                h("button", {
                  onClick: C,
                  class: "mt-3 w-full py-1.5 text-xs font-bold text-white uppercase bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 rounded transition-colors duration-200"
                }, " Apply Price ")
              ], 64)) : (_(), k(K, { key: 1 }, [
                (_(!0), k(K, null, re(ee(y), (E) => (_(), k("div", {
                  key: E.name,
                  onClick: (T) => w(y.typ, E.name),
                  class: R([
                    "flex items-center cursor-pointer group transition-colors duration-200",
                    r.value === "dark" ? "hover:bg-gray-800 rounded-lg p-1" : "hover:bg-gray-50 rounded-lg p-1"
                  ])
                }, [
                  h("div", {
                    class: R([
                      "w-4 h-4 border rounded flex items-center justify-center transition-all duration-200",
                      g(y.typ, E.name) ? "bg-pink-500 border-pink-500 dark:bg-pink-600 dark:border-pink-600" : r.value === "dark" ? "bg-gray-800 border-gray-600 group-hover:border-gray-400" : "bg-white border-gray-300 group-hover:border-gray-400"
                    ])
                  }, [
                    g(y.typ, E.name) ? (_(), k("svg", ps, [...d[12] || (d[12] = [
                      h("path", {
                        d: "M5 13l4 4L19 7",
                        "stroke-width": "3"
                      }, null, -1)
                    ])])) : z("", !0)
                  ], 2),
                  h("span", {
                    class: R([
                      "ml-3 text-sm flex-1 truncate transition-colors duration-200",
                      g(y.typ, E.name) ? "font-medium dark:text-white text-gray-900" : r.value === "dark" ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-900"
                    ])
                  }, D(E.name), 3),
                  h("span", {
                    class: R([
                      "text-[10px] ml-2",
                      r.value === "dark" ? "text-gray-500" : "text-gray-400"
                    ])
                  }, D(E.count), 3)
                ], 10, fs))), 128)),
                le(y) ? (_(), k("div", hs, [
                  y.typ === "brand" ? (_(), k("button", {
                    key: 0,
                    onClick: (E) => se(y),
                    class: "text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 hover:underline transition-colors duration-200"
                  }, " + " + D(y.l.length - 5) + " more ", 9, ms)) : (_(), k("button", {
                    key: 1,
                    onClick: (E) => _e(y.typ),
                    class: "text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 hover:underline transition-colors duration-200"
                  }, D(H[y.typ] ? "Show Less" : `+ ${y.l.length - 5} more`), 9, gs))
                ])) : z("", !0)
              ], 64))
            ])
          ], 2))), 128))
        ])
      ], 2),
      (_(), Ge(ft, { to: "body" }, [
        Re(Ve, { name: "slide-up" }, {
          default: Je(() => [
            a.value ? (_(), k("div", {
              key: 0,
              class: R([
                "fixed inset-0 z-[110] flex flex-col md:hidden overflow-hidden",
                r.value === "dark" ? "bg-gray-900" : "bg-white"
              ])
            }, [
              h("div", {
                class: R([
                  "p-4 border-b flex justify-between items-center shrink-0",
                  r.value === "dark" ? "border-gray-800" : "border-gray-200"
                ])
              }, [
                h("h2", {
                  class: R([
                    "font-bold uppercase",
                    r.value === "dark" ? "text-white" : "text-gray-800"
                  ])
                }, "Filters", 2),
                h("button", {
                  onClick: d[3] || (d[3] = (y) => a.value = !1),
                  class: R([
                    "p-2 rounded-full transition-colors duration-200",
                    r.value === "dark" ? "text-gray-400 hover:bg-gray-800 hover:text-gray-300" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  ])
                }, [...d[13] || (d[13] = [
                  h("svg", {
                    class: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    h("path", {
                      d: "M6 18L18 6M6 6l12 12",
                      "stroke-width": "2"
                    })
                  ], -1)
                ])], 2)
              ], 2),
              h("div", ys, [
                h("div", {
                  class: R([
                    "w-1/3 overflow-y-auto",
                    r.value === "dark" ? "bg-gray-800" : "bg-gray-50"
                  ])
                }, [
                  (_(!0), k(K, null, re(N.value, (y) => (_(), k("div", {
                    key: y.typ,
                    onClick: (E) => i.value = y.typ,
                    class: R([
                      "p-4 text-[11px] font-bold uppercase border-l-4 transition-all h-16 flex items-center",
                      i.value === y.typ ? r.value === "dark" ? "bg-gray-900 border-pink-500 text-pink-400" : "bg-white border-pink-500 text-pink-600" : r.value === "dark" ? "border-transparent text-gray-400 hover:bg-gray-700 hover:text-gray-300" : "border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    ])
                  }, [
                    dt(D(y.title) + " ", 1),
                    o[y.typ]?.length ? (_(), k("span", xs, "•")) : z("", !0)
                  ], 10, bs))), 128))
                ], 2),
                h("div", {
                  class: R([
                    "w-2/3 overflow-y-auto p-4",
                    r.value === "dark" ? "bg-gray-900" : "bg-white"
                  ])
                }, [
                  J.value ? (_(), k("div", ws, [
                    J.value.typ !== "price" ? (_(), k("div", vs, [
                      fe(h("input", {
                        "onUpdate:modelValue": d[4] || (d[4] = (y) => F[J.value.typ] = y),
                        type: "text",
                        placeholder: `Search ${J.value.title}`,
                        class: R([
                          "w-full px-4 py-2 text-sm border rounded-lg transition-colors duration-200",
                          r.value === "dark" ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-pink-500" : "border-gray-300 text-gray-900 placeholder-gray-400 focus:border-pink-500"
                        ])
                      }, null, 10, _s), [
                        [pe, F[J.value.typ]]
                      ])
                    ])) : z("", !0),
                    h("div", ks, [
                      J.value.typ === "price" ? (_(), k(K, { key: 0 }, [
                        h("div", Es, [
                          fe(h("input", {
                            "onUpdate:modelValue": d[5] || (d[5] = (y) => c.value = y),
                            type: "number",
                            placeholder: "Min",
                            class: R([
                              "w-full px-3 py-2 text-sm border rounded-lg focus:outline-none transition-colors duration-200",
                              r.value === "dark" ? "border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-pink-500" : "border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-pink-500"
                            ])
                          }, null, 2), [
                            [pe, c.value]
                          ]),
                          h("span", {
                            class: R(r.value === "dark" ? "text-gray-400" : "text-gray-500")
                          }, "to", 2),
                          fe(h("input", {
                            "onUpdate:modelValue": d[6] || (d[6] = (y) => u.value = y),
                            type: "number",
                            placeholder: "Max",
                            class: R([
                              "w-full px-3 py-2 text-sm border rounded-lg focus:outline-none transition-colors duration-200",
                              r.value === "dark" ? "border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-pink-500" : "border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-pink-500"
                            ])
                          }, null, 2), [
                            [pe, u.value]
                          ])
                        ]),
                        h("div", { class: "px-2" }, [
                          h("button", {
                            onClick: C,
                            class: "mt-4 w-full py-2.5 text-sm font-bold text-white uppercase bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 rounded-lg transition-colors duration-200"
                          }, " Apply Price ")
                        ])
                      ], 64)) : (_(!0), k(K, { key: 1 }, re(L(J.value), (y) => (_(), k("div", {
                        key: y.name,
                        onClick: (E) => w(J.value.typ, y.name),
                        class: R([
                          "flex items-center justify-between p-2 rounded-lg transition-colors duration-200 cursor-pointer",
                          r.value === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-50"
                        ])
                      }, [
                        h("div", Ss, [
                          h("div", {
                            class: R([
                              "w-5 h-5 border rounded flex items-center justify-center transition-all duration-200",
                              g(J.value.typ, y.name) ? "bg-pink-500 border-pink-500 dark:bg-pink-600 dark:border-pink-600" : r.value === "dark" ? "border-gray-600" : "border-gray-300"
                            ])
                          }, [
                            g(J.value.typ, y.name) ? (_(), k("svg", Cs, [...d[14] || (d[14] = [
                              h("path", {
                                d: "M5 13l4 4L19 7",
                                "stroke-width": "3"
                              }, null, -1)
                            ])])) : z("", !0)
                          ], 2),
                          h("span", {
                            class: R([
                              "text-sm transition-colors duration-200",
                              g(J.value.typ, y.name) ? "dark:text-white text-gray-900 font-medium" : r.value === "dark" ? "text-gray-200" : "text-gray-700"
                            ])
                          }, D(y.name), 3)
                        ]),
                        h("span", {
                          class: R(["text-[10px]", r.value === "dark" ? "text-gray-500" : "text-gray-400"])
                        }, D(y.count), 3)
                      ], 10, Rs))), 128))
                    ])
                  ])) : z("", !0)
                ], 2)
              ]),
              h("div", {
                class: R([
                  "p-4 border-t flex gap-4 shrink-0 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]",
                  r.value === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
                ])
              }, [
                h("button", {
                  onClick: ce,
                  class: R([
                    "flex-1 py-3 text-sm font-bold uppercase rounded-lg transition-colors duration-200",
                    r.value === "dark" ? "text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-gray-300" : "text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                  ])
                }, "Clear All", 2),
                h("button", {
                  onClick: d[7] || (d[7] = (y) => a.value = !1),
                  class: "flex-1 py-3 text-sm font-bold uppercase bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white rounded-lg transition-colors duration-200"
                }, " Apply ")
              ], 2)
            ], 2)) : z("", !0)
          ]),
          _: 1
        })
      ])),
      (_(), Ge(ft, { to: "body" }, [
        Re(Ve, { name: "fade" }, {
          default: Je(() => [
            j.value && V.value ? (_(), k("div", Os, [
              h("div", {
                class: R([
                  "w-full max-w-6xl h-[85vh] rounded-lg shadow-2xl flex flex-col overflow-hidden",
                  r.value === "dark" ? "bg-gray-900" : "bg-white"
                ])
              }, [
                h("div", {
                  class: R([
                    "p-6 border-b flex items-center gap-4",
                    r.value === "dark" ? "border-gray-800" : "border-gray-200"
                  ])
                }, [
                  h("div", Ts, [
                    h("h3", {
                      class: R([
                        "text-lg font-bold",
                        r.value === "dark" ? "text-gray-200" : "text-gray-800"
                      ])
                    }, "Brand Directory", 2),
                    h("p", {
                      class: R([
                        "text-xs",
                        r.value === "dark" ? "text-gray-400" : "text-gray-500"
                      ])
                    }, "Select from " + D(V.value.l?.length || 0) + " brands", 3)
                  ]),
                  h("div", As, [
                    fe(h("input", {
                      "onUpdate:modelValue": d[8] || (d[8] = (y) => ne.value = y),
                      type: "text",
                      placeholder: "Search brands by name",
                      class: R([
                        "w-full pl-10 pr-4 py-2 border rounded-full text-sm transition-colors duration-200",
                        r.value === "dark" ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-pink-500" : "border-gray-300 text-gray-900 placeholder-gray-400 focus:border-pink-500"
                      ])
                    }, null, 2), [
                      [pe, ne.value]
                    ]),
                    d[15] || (d[15] = h("svg", {
                      class: "w-4 h-4 absolute left-3 top-2.5 text-gray-400",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      h("path", {
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                        "stroke-width": "2"
                      })
                    ], -1))
                  ]),
                  h("div", {
                    class: R([
                      "flex-1 flex items-center gap-1 overflow-x-auto scrollbar-custom-alphabet px-2 border-x pb-2 pt-1",
                      r.value === "dark" ? "border-gray-800" : "border-gray-200"
                    ])
                  }, [
                    (_(!0), k(K, null, re(cr(ye), (y) => (_(), k("button", {
                      key: y,
                      onClick: (E) => ie(y),
                      class: R([
                        "px-3 py-1 text-xs font-bold uppercase flex-shrink-0 transition-colors duration-200",
                        r.value === "dark" ? "text-gray-400 hover:text-pink-400" : "text-gray-400 hover:text-pink-600"
                      ])
                    }, D(y), 11, $s))), 128))
                  ], 2),
                  h("button", {
                    onClick: d[9] || (d[9] = (y) => j.value = !1),
                    class: R([
                      "p-2 flex-shrink-0 rounded-full transition-colors duration-200",
                      r.value === "dark" ? "hover:bg-gray-800 text-gray-400 hover:text-gray-300" : "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                    ])
                  }, [...d[16] || (d[16] = [
                    h("svg", {
                      class: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      h("path", {
                        d: "M6 18L18 6M6 6l12 12",
                        "stroke-width": "2"
                      })
                    ], -1)
                  ])], 2)
                ], 2),
                h("div", Ns, [
                  h("div", {
                    ref_key: "directoryContainer",
                    ref: be,
                    class: "flex min-h-full p-8 gap-8"
                  }, [
                    (_(!0), k(K, null, re(ae.value, (y, E) => (_(), k("div", {
                      key: E,
                      class: "w-64 flex-shrink-0"
                    }, [
                      (_(!0), k(K, null, re(y, (T, B) => (_(), k("div", {
                        key: T.letter,
                        id: `dir-letter-${T.letter}`,
                        class: R(["mb-8 scroll-ml-8", { "last:mb-0": B === y.length - 1 }])
                      }, [
                        h("h3", Ls, D(T.letter), 1),
                        h("div", Us, [
                          (_(!0), k(K, null, re(T.items, (Y) => (_(), k("div", {
                            key: Y.name,
                            onClick: ($e) => w(V.value.typ, Y.name),
                            class: R([
                              "flex items-center cursor-pointer group p-2 rounded-lg transition-colors duration-200",
                              r.value === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-50"
                            ])
                          }, [
                            h("div", {
                              class: R([
                                "w-4 h-4 border rounded flex-shrink-0 flex items-center justify-center transition-all duration-200",
                                g(V.value.typ, Y.name) ? "bg-pink-500 border-pink-500 dark:bg-pink-600 dark:border-pink-600" : r.value === "dark" ? "bg-gray-800 border-gray-600 group-hover:border-gray-400" : "border-gray-300 group-hover:border-gray-400"
                              ])
                            }, [
                              g(V.value.typ, Y.name) ? (_(), k("svg", Is, [...d[17] || (d[17] = [
                                h("path", {
                                  d: "M5 13l4 4L19 7",
                                  "stroke-width": "3"
                                }, null, -1)
                              ])])) : z("", !0)
                            ], 2),
                            h("span", {
                              class: R([
                                "ml-3 text-sm truncate transition-colors duration-200",
                                g(V.value.typ, Y.name) ? "dark:text-white text-gray-900 font-medium" : r.value === "dark" ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-900"
                              ])
                            }, D(Y.name), 3),
                            h("span", {
                              class: R([
                                "text-[10px] ml-2 flex-shrink-0",
                                r.value === "dark" ? "text-gray-500" : "text-gray-400"
                              ])
                            }, D(Y.count), 3)
                          ], 10, Fs))), 128))
                        ])
                      ], 10, Ps))), 128))
                    ]))), 128)),
                    ae.value.length === 0 ? (_(), k("div", Bs, [
                      h("div", js, [
                        (_(), k("svg", {
                          class: R([
                            "w-16 h-16 mx-auto mb-4",
                            r.value === "dark" ? "text-gray-700" : "text-gray-300"
                          ]),
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [...d[18] || (d[18] = [
                          h("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.5",
                            d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          }, null, -1)
                        ])], 2)),
                        h("p", {
                          class: R(["mb-1", r.value === "dark" ? "text-gray-400" : "text-gray-500"])
                        }, "No results found", 2),
                        h("p", {
                          class: R(["text-sm", r.value === "dark" ? "text-gray-500" : "text-gray-400"])
                        }, "Try a different search term", 2)
                      ])
                    ])) : z("", !0)
                  ], 512)
                ])
              ], 2)
            ])) : z("", !0)
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
}), Ms = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, s] of t)
    r[n] = s;
  return r;
}, zs = /* @__PURE__ */ Ms(Ds, [["__scopeId", "data-v-48cd2670"]]);
function qs(e, t) {
  return t.split(".").reduce((r, n) => r?.[n], e);
}
function Hs(e, t) {
  const { open: r, close: n } = t, s = [];
  let o = 0;
  for (; o < e.length; ) {
    const a = e.indexOf(r, o);
    if (a === -1) {
      s.push({ type: "text", value: e.slice(o) });
      break;
    }
    a > o && s.push({ type: "text", value: e.slice(o, a) });
    const i = e.indexOf(n, a + r.length);
    if (i === -1)
      throw new Error(`Unclosed template placeholder starting at ${a}`);
    const m = e.slice(a + r.length, i).trim(), [c, u] = m.split("=");
    s.push({ type: "param", value: c, defaultValue: u }), o = i + n.length;
  }
  return s;
}
function Vs(e, t, r) {
  const n = /* @__PURE__ */ new Set(), s = e.map((o) => {
    if (o.type === "text") return o.value;
    const a = qs(t, o.value);
    if (n.add(o.value.split(".")[0]), a === void 0 || a === "") {
      if (o.defaultValue !== void 0) return o.defaultValue;
      if (r.strict) throw new Error(`Missing param: ${o.value}`);
      return "";
    }
    return r.encode ? encodeURIComponent(String(a)) : String(a);
  }).join("");
  if (r.strict) {
    for (const o of Object.keys(t))
      if (!n.has(o))
        throw new Error(`Unused param provided: ${o}`);
  }
  return s;
}
function $t(e, t) {
  const r = {
    open: t?.open ?? "{",
    close: t?.close ?? "}",
    encode: t?.encode ?? !1,
    strict: t?.strict ?? !1
  }, n = Hs(e, r);
  return (s) => Vs(n, s, r);
}
const Js = { class: "bg-gray-50/50 dark:bg-[#0b1120] min-h-screen pb-20 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-blue-100 selection:text-blue-900" }, Ws = { class: "flex max-w-[1440px] mx-auto w-full items-start relative" }, Ks = { class: "flex-1 w-full min-w-0 px-4 md:px-6 py-6 md:py-8" }, Xs = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
}, Qs = {
  key: 1,
  class: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 list-none"
}, Zs = ["onClick"], Ys = { class: "p-2.5 pb-0" }, Gs = ["onMouseenter", "onMouseleave", "onTouchstart", "onTouchend"], eo = ["src", "alt"], to = {
  key: 1,
  class: "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-slate-800 text-gray-400 text-xs font-medium"
}, ro = {
  key: 2,
  class: "absolute bottom-3 left-0 w-full flex justify-center gap-1.5 z-20 opacity-100 md:opacity-0 md:group-hover/image:opacity-100 transition-opacity duration-300"
}, no = ["onMouseenter"], so = {
  key: 3,
  class: "absolute top-2 left-2 bg-red-500/90 backdrop-blur-md text-white text-[10px] md:text-xs px-2 py-1 rounded-md font-bold shadow-sm tracking-wide z-20"
}, oo = { class: "p-3.5 md:p-4 flex flex-col flex-1 gap-1.5" }, ao = { class: "flex items-center gap-2 mb-0.5" }, io = { class: "text-lg md:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight" }, lo = {
  key: 0,
  class: "text-[11px] md:text-xs text-slate-400 dark:text-slate-500 font-medium line-through decoration-slate-300 dark:decoration-slate-600"
}, co = { class: "text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1" }, uo = { class: "text-[13px] leading-snug text-slate-700 dark:text-slate-300 font-medium line-clamp-2 h-[2.6em] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, fo = ["onClick"], po = {
  key: 2,
  class: "flex flex-col items-center justify-center py-24 px-4 bg-white dark:bg-[#1e293b] rounded-3xl border border-gray-100 dark:border-slate-800/60 shadow-sm mt-4"
}, ho = {
  key: 0,
  class: "flex gap-2 p-4 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-gray-100 dark:border-slate-700"
}, Ye = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500", Nt = 40, mo = /* @__PURE__ */ je({
  __name: "Productlist",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    mr();
    const t = A(""), r = A([]), n = A(""), s = A(!1), o = A(!0), a = A(!1), i = A(1), m = A(!0), c = A(null);
    let u = null;
    const O = $t(e.__p.data.curr.data.api.token, { open: "<", close: ">" })({
      localStorage: {
        token: localStorage.getItem("token") || ""
      }
    }).replace("Bearer ", ""), P = e.__p.data.curr.data.api.url, f = O, v = A(null), x = A({
      cart_popup: {
        ce_file: e.__p.data.curr.data.cart_popup.ce_file
      }
    }), $ = {
      change: (g) => {
        g && g.filter_by !== void 0 && (n.value = g.filter_by), i.value = 1, r.value = [], m.value = !0, o.value = !0, H();
      }
    }, M = () => {
      const g = localStorage.getItem("theme");
      g ? s.value = g === "dark" : s.value = window.matchMedia("(prefers-color-scheme: dark)").matches, L();
    }, L = () => {
      s.value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, U = async () => {
      o.value = !0, r.value = [], i.value = 1, m.value = !0;
      const g = new URLSearchParams(window.location.search);
      t.value ? g.set("q", t.value) : g.delete("q");
      const w = `${window.location.pathname}?${g.toString()}`;
      window.history.replaceState({}, "", w), await H(), o.value = !1;
    }, F = () => {
      t.value = "", window.history.replaceState({}, "", window.location.pathname), U();
    }, H = async () => {
      try {
        const g = new URLSearchParams(window.location.search);
        !t.value && g.has("q") && (t.value = g.get("q") || "");
        let w = t.value.trim() || "_", C = `?f_raw_text=${encodeURIComponent(w)}`;
        const ce = ["sattr_k", "sattr_v", "page", "per_page", "sort"];
        g.forEach((T, B) => {
          B !== "q" && (ce.includes(B) ? C += `&${encodeURIComponent(B)}=${encodeURIComponent(T)}` : T.split(",").forEach(($e) => {
            C += `&filter=${encodeURIComponent(B)}:${encodeURIComponent($e)}`;
          }));
        });
        const p = P.split("?")[0], d = await I.post(
          `${p}?typ=get_filter_data`,
          { query: C },
          { headers: { Authorization: `Bearer ${f}` } }
        );
        if (!d.data.success || !d.data.search_combination) {
          m.value = !1, o.value = !1;
          return;
        }
        const y = d.data.search_combination;
        y.page = i.value, y.per_page = 20, n.value ? y.filter_by = n.value : delete y.filter_by;
        const E = await I.post(
          `${p}?typ=get_product_list`,
          y,
          { headers: { Authorization: `Bearer ${f}` } }
        );
        if (E.data.success && E.data.data && E.data.data.products?.length > 0) {
          await new Promise((B) => setTimeout(B, 300));
          const T = E.data.data.products;
          for (const B of T)
            r.value.push({
              document: B,
              images: V(B),
              // Fetch array of all images
              activeIdx: 0,
              // Track which image is showing
              interval: null
              // Track the auto-scroll timer
            });
          o.value = !1;
        } else
          m.value = !1, o.value = !1;
      } catch (g) {
        console.error("Fetch Products Error:", g), m.value = !1, o.value = !1;
      }
    }, j = () => {
      u = new IntersectionObserver(async (g) => {
        g[0].isIntersecting && m.value && !o.value && !a.value && (a.value = !0, i.value++, await H(), a.value = !1);
      }, {
        rootMargin: "200px"
      }), c.value && u.observe(c.value);
    }, V = (g) => {
      try {
        const ce = (typeof g.metadata == "string" ? JSON.parse(g.metadata) : g.metadata)?.color?.[0]?.image;
        if (Array.isArray(ce) && ce.length > 0) {
          const p = ce.map((d) => d.url).filter((d) => d && !d.includes("example")).slice(0, 5);
          if (p.length > 0)
            return p;
        }
      } catch {
      }
      const w = g.title ? g.title.toLowerCase() : "";
      return w.includes("dress") ? ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500"] : w.includes("shirt") || w.includes("top") ? ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"] : w.includes("shoe") || w.includes("sneaker") ? ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"] : w.includes("bag") ? ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"] : [Ye];
    }, ne = (g) => {
      !g.images || g.images.length <= 1 || (g.interval && clearInterval(g.interval), g.interval = setInterval(() => {
        g.activeIdx = (g.activeIdx + 1) % g.images.length;
      }, 1200));
    }, ye = (g) => {
      g.interval && (clearInterval(g.interval), g.interval = null), g.activeIdx = 0;
    }, be = (g, w) => {
      g.activeIdx = w, g.interval && (clearInterval(g.interval), g.interval = null);
    }, ae = A(0), ie = A(0), se = (g, w) => {
      ae.value = g.changedTouches[0].screenX, w.interval && (clearInterval(w.interval), w.interval = null);
    }, ue = (g, w) => {
      ie.value = g.changedTouches[0].screenX, N(w);
    }, N = (g) => {
      if (!g.images || g.images.length <= 1) return;
      const w = ie.value - ae.value;
      w > Nt ? g.activeIdx = g.activeIdx > 0 ? g.activeIdx - 1 : g.images.length - 1 : w < -Nt && (g.activeIdx = g.activeIdx < g.images.length - 1 ? g.activeIdx + 1 : 0);
    }, J = (g) => {
      const w = g.target;
      w.src !== Ye && (w.src = Ye);
    }, Z = (g) => {
      const w = g?.variant_prices?.[0] || 0, C = g?.variant_mrp?.[0] || 0;
      return C > w ? Math.round((C - w) / C * 100) : 0;
    }, de = (g) => g ? new Intl.NumberFormat("ru-RU").format(g) : "0", _e = (g) => {
      if (!g.document?.slug && !g.document?.id) return;
      const C = $t(e.__p.data.curr.data.event.onProductClick)({
        id: g.document?.id,
        slug: g.document?.slug
      });
      location.href = C;
    }, ee = (g) => {
      v.value && v.value.ce_call("msg", {
        type: "product:open",
        custom: {
          product_id: g.document?.slug || g.document?.id
        },
        _p: {},
        _$p: {}
      });
    }, le = (g) => {
      const w = g.currentTarget;
      w.classList.toggle("text-red-500"), w.classList.toggle("bg-red-50"), w.classList.toggle("dark:bg-red-500/20");
    };
    return Pt(() => {
      M();
      const g = new URLSearchParams(window.location.search);
      g.has("q") && (t.value = g.get("q") || ""), U().then(() => {
        setTimeout(() => j(), 100);
      });
    }), dr(() => {
      u && u.disconnect();
    }), (g, w) => (_(), k("div", Js, [
      h("div", Ws, [
        Re(zs, {
          class: "sticky z-30 shrink-0",
          _p: e._p,
          _$p: e.__p,
          _$cb: $,
          config: { theme: s.value ? "dark" : "light" }
        }, null, 8, ["_p", "_$p", "config"]),
        h("div", Ks, [
          o.value ? (_(), k("div", Xs, [
            (_(), k(K, null, re(12, (C) => h("div", {
              key: C,
              class: "bg-white dark:bg-[#1e293b] rounded-2xl p-3 shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col gap-3"
            }, [...w[0] || (w[0] = [
              pt('<div class="aspect-[4/5] bg-gray-200 dark:bg-slate-700/50 rounded-xl relative overflow-hidden"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div><div class="space-y-2 mt-1 px-1"><div class="h-5 bg-gray-200 dark:bg-slate-700/50 rounded-md w-1/2 relative overflow-hidden"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div><div class="h-3 bg-gray-200 dark:bg-slate-700/50 rounded-md w-1/3 relative overflow-hidden"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div><div class="h-4 bg-gray-200 dark:bg-slate-700/50 rounded-md w-full relative overflow-hidden mt-2"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div><div class="h-10 bg-gray-200 dark:bg-slate-700/50 rounded-xl w-full mt-3 relative overflow-hidden"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div></div>', 2)
            ])])), 64))
          ])) : r.value.length > 0 ? (_(), k("ul", Qs, [
            (_(!0), k(K, null, re(r.value, (C, ce) => (_(), k("li", {
              key: (C.document?.id || "") + ce,
              class: "group bg-white dark:bg-[#1e293b] rounded-2xl flex flex-col relative cursor-pointer border border-gray-200/60 dark:border-slate-700/50 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300",
              onClick: (p) => _e(C)
            }, [
              h("div", Ys, [
                h("div", {
                  class: "aspect-[4/5] relative bg-gray-100 dark:bg-slate-800/80 rounded-xl overflow-hidden shadow-inner group/image",
                  onMouseenter: (p) => ne(C),
                  onMouseleave: (p) => ye(C),
                  onTouchstart: (p) => se(p, C),
                  onTouchend: (p) => ue(p, C)
                }, [
                  C.images && C.images.length > 0 ? (_(!0), k(K, { key: 0 }, re(C.images, (p, d) => (_(), k("img", {
                    key: d,
                    src: p,
                    loading: "lazy",
                    alt: C.document?.title || C.document?.brand,
                    onError: J,
                    class: R(["absolute inset-0 w-full h-full object-cover transition-opacity duration-500 mix-blend-multiply dark:mix-blend-normal", d === C.activeIdx ? "opacity-100 z-10" : "opacity-0 z-0"])
                  }, null, 42, eo))), 128)) : (_(), k("div", to, " No Image ")),
                  C.images && C.images.length > 1 ? (_(), k("div", ro, [
                    (_(!0), k(K, null, re(C.images, (p, d) => (_(), k("div", {
                      key: "nav-" + d,
                      onMouseenter: We((y) => be(C, d), ["stop"]),
                      class: R(["w-1.5 h-1.5 md:w-2 md:h-2 rounded-full cursor-pointer transition-all duration-300", d === C.activeIdx ? "bg-white scale-125 shadow-[0_0_2px_rgba(0,0,0,0.5)]" : "bg-white/50 hover:bg-white/90"])
                    }, null, 42, no))), 128))
                  ])) : z("", !0),
                  Z(C.document) > 0 ? (_(), k("span", so, " -" + D(Z(C.document)) + "% ", 1)) : z("", !0),
                  h("button", {
                    class: "absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 dark:bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-slate-400 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-1 md:group-hover:translate-y-0 shadow-sm z-20",
                    onClick: We(le, ["stop"])
                  }, [...w[1] || (w[1] = [
                    h("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2.5"
                    }, [
                      h("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
                    ], -1)
                  ])])
                ], 40, Gs)
              ]),
              h("div", oo, [
                h("div", ao, [
                  h("span", io, D(de(C.document?.variant_prices?.[0] || 0)) + " ₽ ", 1),
                  (C.document?.variant_mrp?.[0] || 0) > (C.document?.variant_prices?.[0] || 0) ? (_(), k("span", lo, D(de(C.document?.variant_mrp?.[0] || 0)), 1)) : z("", !0)
                ]),
                w[3] || (w[3] = pt('<div class="flex items-center gap-2 mb-1"><span class="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 border border-green-200/50 dark:border-green-800/50"><span class="w-1.5 h-1.5 rounded-full bg-green-500"></span> Ozon Card </span><div class="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 font-medium"><span class="text-amber-400 text-xs">★</span> 4.9 <span class="text-slate-400 dark:text-slate-500">(128)</span></div></div>', 1)),
                h("div", co, D(C.document?.brand), 1),
                h("h3", uo, D(C.document?.title || C.document?.brand || "Premium Product"), 1),
                w[4] || (w[4] = h("div", { class: "flex-1" }, null, -1)),
                h("button", {
                  class: "mt-3 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-[0_4px_12px_rgba(37,99,235,0.2)] hover:shadow-[0_6px_16px_rgba(37,99,235,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group/btn",
                  onClick: We((p) => ee(C), ["stop"])
                }, [...w[2] || (w[2] = [
                  h("span", null, "Add to Cart", -1),
                  h("svg", {
                    class: "w-4 h-4 transition-transform group-hover/btn:translate-x-1",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2.5"
                  }, [
                    h("path", { d: "M5 12h14M12 5l7 7-7 7" })
                  ], -1)
                ])], 8, fo)
              ])
            ], 8, Zs))), 128))
          ])) : (_(), k("div", po, [
            w[5] || (w[5] = h("div", { class: "w-20 h-20 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-5 shadow-inner" }, "🔍", -1)),
            w[6] || (w[6] = h("h3", { class: "text-xl font-extrabold text-slate-900 dark:text-white mb-2" }, "No results found", -1)),
            w[7] || (w[7] = h("p", { class: "text-slate-500 dark:text-slate-400 mb-8 text-center max-w-md text-sm leading-relaxed" }, "We couldn't find anything matching your search. Try adjusting the filters or use broader keywords to find what you're looking for.", -1)),
            h("button", {
              class: "bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-700 active:scale-95 transition-all",
              onClick: F
            }, " Clear All Filters ")
          ])),
          h("div", {
            ref_key: "sentinel",
            ref: c,
            class: "h-24 flex justify-center items-center w-full mt-4"
          }, [
            a.value ? (_(), k("div", ho, [...w[8] || (w[8] = [
              h("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce" }, null, -1),
              h("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]" }, null, -1),
              h("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]" }, null, -1)
            ])])) : z("", !0)
          ], 512)
        ])
      ]),
      Re(rs, fr({
        ref_key: "cartPopupRef",
        ref: v
      }, {
        ce_file: x.value.cart_popup.ce_file
      }), null, 16)
    ]));
  }
}), go = /* @__PURE__ */ je({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (async () => (e._p.my.emitter = e._p.f.new_emitter(), e._p.my.emitter.on("msg", async (t) => {
      console.log("_p.my.emitter.on", t);
    }), await e._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: e._p,
      _$p: e._$p
    }), e._p.f.listen("msg", async (t) => {
      console.log("_p.f.listen", t);
    }), setTimeout(async () => {
      await e._p.f.call("msg", {
        type: "on:change",
        _p: e._p,
        _$p: e._$p
      });
    }, 500)))(), (t, r) => (_(), Ge(mo, {
      _p: e._p,
      __p: e._$p
    }, null, 8, ["_p", "__p"]));
  }
}), Io = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const n = pr(go, {
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
    return n.mount(o), s;
  }
});
export {
  Io as hydrator,
  Io as index
};
