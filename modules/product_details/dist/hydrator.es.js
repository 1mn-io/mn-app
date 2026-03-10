import { d as Rt, r as $, w as lt, o as ls, n as it, a as g, c as v, b as o, e as f, f as ye, g as oe, F as U, h as M, t as R, i as H, j as is, k as Me, v as De, l as D, m as cs, p as ds, q as us } from "./runtime-dom.esm-bundler-B1F-qcLg.js";
function Ct(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: fs } = Object.prototype, { getPrototypeOf: Qe } = Object, { iterator: Pe, toStringTag: Ot } = Symbol, $e = /* @__PURE__ */ ((e) => (t) => {
  const s = fs.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ee = (e) => (e = e.toLowerCase(), (t) => $e(t) === e), je = (e) => (t) => typeof t === e, { isArray: ge } = Array, xe = je("undefined");
function _e(e) {
  return e !== null && !xe(e) && e.constructor !== null && !xe(e.constructor) && J(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Tt = ee("ArrayBuffer");
function ps(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Tt(e.buffer), t;
}
const hs = je("string"), J = je("function"), At = je("number"), ke = (e) => e !== null && typeof e == "object", ms = (e) => e === !0 || e === !1, Ae = (e) => {
  if ($e(e) !== "object")
    return !1;
  const t = Qe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Ot in e) && !(Pe in e);
}, bs = (e) => {
  if (!ke(e) || _e(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, xs = ee("Date"), gs = ee("File"), vs = (e) => !!(e && typeof e.uri < "u"), ys = (e) => e && typeof e.getParts < "u", ws = ee("Blob"), _s = ee("FileList"), ks = (e) => ke(e) && J(e.pipe);
function Es() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const ct = Es(), dt = typeof ct.FormData < "u" ? ct.FormData : void 0, Ss = (e) => {
  let t;
  return e && (dt && e instanceof dt || J(e.append) && ((t = $e(e)) === "formdata" || // detect form-data instance
  t === "object" && J(e.toString) && e.toString() === "[object FormData]"));
}, Rs = ee("URLSearchParams"), [Cs, Os, Ts, As] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(ee), Ns = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ee(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, n;
  if (typeof e != "object" && (e = [e]), ge(e))
    for (r = 0, n = e.length; r < n; r++)
      t.call(null, e[r], r, e);
  else {
    if (_e(e))
      return;
    const a = s ? Object.getOwnPropertyNames(e) : Object.keys(e), l = a.length;
    let d;
    for (r = 0; r < l; r++)
      d = a[r], t.call(null, e[d], d, e);
  }
}
function Nt(e, t) {
  if (_e(e))
    return null;
  t = t.toLowerCase();
  const s = Object.keys(e);
  let r = s.length, n;
  for (; r-- > 0; )
    if (n = s[r], t === n.toLowerCase())
      return n;
  return null;
}
const pe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ft = (e) => !xe(e) && e !== pe;
function We() {
  const { caseless: e, skipUndefined: t } = Ft(this) && this || {}, s = {}, r = (n, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const l = e && Nt(s, a) || a;
    Ae(s[l]) && Ae(n) ? s[l] = We(s[l], n) : Ae(n) ? s[l] = We({}, n) : ge(n) ? s[l] = n.slice() : (!t || !xe(n)) && (s[l] = n);
  };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && Ee(arguments[n], r);
  return s;
}
const Fs = (e, t, s, { allOwnKeys: r } = {}) => (Ee(
  t,
  (n, a) => {
    s && J(n) ? Object.defineProperty(e, a, {
      value: Ct(n, s),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, a, {
      value: n,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), Bs = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ls = (e, t, s, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, Ps = (e, t, s, r) => {
  let n, a, l;
  const d = {};
  if (t = t || {}, e == null) return t;
  do {
    for (n = Object.getOwnPropertyNames(e), a = n.length; a-- > 0; )
      l = n[a], (!r || r(l, e, t)) && !d[l] && (t[l] = e[l], d[l] = !0);
    e = s !== !1 && Qe(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, $s = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const r = e.indexOf(t, s);
  return r !== -1 && r === s;
}, js = (e) => {
  if (!e) return null;
  if (ge(e)) return e;
  let t = e.length;
  if (!At(t)) return null;
  const s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, Is = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Qe(Uint8Array)), zs = (e, t) => {
  const r = (e && e[Pe]).call(e);
  let n;
  for (; (n = r.next()) && !n.done; ) {
    const a = n.value;
    t.call(e, a[0], a[1]);
  }
}, Us = (e, t) => {
  let s;
  const r = [];
  for (; (s = e.exec(t)) !== null; )
    r.push(s);
  return r;
}, Ms = ee("HTMLFormElement"), Ds = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, r, n) {
  return r.toUpperCase() + n;
}), ut = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), qs = ee("RegExp"), Bt = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), r = {};
  Ee(s, (n, a) => {
    let l;
    (l = t(n, a, e)) !== !1 && (r[a] = l || n);
  }), Object.defineProperties(e, r);
}, Hs = (e) => {
  Bt(e, (t, s) => {
    if (J(e) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const r = e[s];
    if (J(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, Js = (e, t) => {
  const s = {}, r = (n) => {
    n.forEach((a) => {
      s[a] = !0;
    });
  };
  return ge(e) ? r(e) : r(String(e).split(t)), s;
}, Vs = () => {
}, Ws = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Xs(e) {
  return !!(e && J(e.append) && e[Ot] === "FormData" && e[Pe]);
}
const Ks = (e) => {
  const t = new Array(10), s = (r, n) => {
    if (ke(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (_e(r))
        return r;
      if (!("toJSON" in r)) {
        t[n] = r;
        const a = ge(r) ? [] : {};
        return Ee(r, (l, d) => {
          const x = s(l, n + 1);
          !xe(x) && (a[d] = x);
        }), t[n] = void 0, a;
      }
    }
    return r;
  };
  return s(e, 0);
}, Gs = ee("AsyncFunction"), Zs = (e) => e && (ke(e) || J(e)) && J(e.then) && J(e.catch), Lt = ((e, t) => e ? setImmediate : t ? ((s, r) => (pe.addEventListener(
  "message",
  ({ source: n, data: a }) => {
    n === pe && a === s && r.length && r.shift()();
  },
  !1
), (n) => {
  r.push(n), pe.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(typeof setImmediate == "function", J(pe.postMessage)), Ys = typeof queueMicrotask < "u" ? queueMicrotask.bind(pe) : typeof process < "u" && process.nextTick || Lt, Qs = (e) => e != null && J(e[Pe]), u = {
  isArray: ge,
  isArrayBuffer: Tt,
  isBuffer: _e,
  isFormData: Ss,
  isArrayBufferView: ps,
  isString: hs,
  isNumber: At,
  isBoolean: ms,
  isObject: ke,
  isPlainObject: Ae,
  isEmptyObject: bs,
  isReadableStream: Cs,
  isRequest: Os,
  isResponse: Ts,
  isHeaders: As,
  isUndefined: xe,
  isDate: xs,
  isFile: gs,
  isReactNativeBlob: vs,
  isReactNative: ys,
  isBlob: ws,
  isRegExp: qs,
  isFunction: J,
  isStream: ks,
  isURLSearchParams: Rs,
  isTypedArray: Is,
  isFileList: _s,
  forEach: Ee,
  merge: We,
  extend: Fs,
  trim: Ns,
  stripBOM: Bs,
  inherits: Ls,
  toFlatObject: Ps,
  kindOf: $e,
  kindOfTest: ee,
  endsWith: $s,
  toArray: js,
  forEachEntry: zs,
  matchAll: Us,
  isHTMLForm: Ms,
  hasOwnProperty: ut,
  hasOwnProp: ut,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Bt,
  freezeMethods: Hs,
  toObjectSet: Js,
  toCamelCase: Ds,
  noop: Vs,
  toFiniteNumber: Ws,
  findKey: Nt,
  global: pe,
  isContextDefined: Ft,
  isSpecCompliantForm: Xs,
  toJSONObject: Ks,
  isAsyncFn: Gs,
  isThenable: Zs,
  setImmediate: Lt,
  asap: Ys,
  isIterable: Qs
};
let S = class Pt extends Error {
  static from(t, s, r, n, a, l) {
    const d = new Pt(t.message, s || t.code, r, n, a);
    return d.cause = t, d.name = t.name, t.status != null && d.status == null && (d.status = t.status), l && Object.assign(d, l), d;
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
  constructor(t, s, r, n, a) {
    super(t), Object.defineProperty(this, "message", {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, s && (this.code = s), r && (this.config = r), n && (this.request = n), a && (this.response = a, this.status = a.status);
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
      config: u.toJSONObject(this.config),
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
const er = null;
function Xe(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function $t(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function qe(e, t, s) {
  return e ? e.concat(t).map(function(n, a) {
    return n = $t(n), !s && a ? "[" + n + "]" : n;
  }).join(s ? "." : "") : t;
}
function tr(e) {
  return u.isArray(e) && !e.some(Xe);
}
const sr = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ie(e, t, s) {
  if (!u.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), s = u.toFlatObject(
    s,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(E, y) {
      return !u.isUndefined(y[E]);
    }
  );
  const r = s.metaTokens, n = s.visitor || m, a = s.dots, l = s.indexes, x = (s.Blob || typeof Blob < "u" && Blob) && u.isSpecCompliantForm(t);
  if (!u.isFunction(n))
    throw new TypeError("visitor must be a function");
  function p(b) {
    if (b === null) return "";
    if (u.isDate(b))
      return b.toISOString();
    if (u.isBoolean(b))
      return b.toString();
    if (!x && u.isBlob(b))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(b) || u.isTypedArray(b) ? x && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function m(b, E, y) {
    let A = b;
    if (u.isReactNative(t) && u.isReactNativeBlob(b))
      return t.append(qe(y, E, a), p(b)), !1;
    if (b && !y && typeof b == "object") {
      if (u.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), b = JSON.stringify(b);
      else if (u.isArray(b) && tr(b) || (u.isFileList(b) || u.endsWith(E, "[]")) && (A = u.toArray(b)))
        return E = $t(E), A.forEach(function(c, B) {
          !(u.isUndefined(c) || c === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? qe([E], B, a) : l === null ? E : E + "[]",
            p(c)
          );
        }), !1;
    }
    return Xe(b) ? !0 : (t.append(qe(y, E, a), p(b)), !1);
  }
  const k = [], C = Object.assign(sr, {
    defaultVisitor: m,
    convertValue: p,
    isVisitable: Xe
  });
  function T(b, E) {
    if (!u.isUndefined(b)) {
      if (k.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      k.push(b), u.forEach(b, function(A, I) {
        (!(u.isUndefined(A) || A === null) && n.call(t, A, u.isString(I) ? I.trim() : I, E, C)) === !0 && T(A, E ? E.concat(I) : [I]);
      }), k.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), t;
}
function ft(e) {
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
function et(e, t) {
  this._pairs = [], e && Ie(e, this, t);
}
const jt = et.prototype;
jt.append = function(t, s) {
  this._pairs.push([t, s]);
};
jt.toString = function(t) {
  const s = t ? function(r) {
    return t.call(this, r, ft);
  } : ft;
  return this._pairs.map(function(n) {
    return s(n[0]) + "=" + s(n[1]);
  }, "").join("&");
};
function rr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function It(e, t, s) {
  if (!t)
    return e;
  const r = s && s.encode || rr, n = u.isFunction(s) ? {
    serialize: s
  } : s, a = n && n.serialize;
  let l;
  if (a ? l = a(t, n) : l = u.isURLSearchParams(t) ? t.toString() : new et(t, n).toString(r), l) {
    const d = e.indexOf("#");
    d !== -1 && (e = e.slice(0, d)), e += (e.indexOf("?") === -1 ? "?" : "&") + l;
  }
  return e;
}
class pt {
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
  use(t, s, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: s,
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
    u.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const tt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, nr = typeof URLSearchParams < "u" ? URLSearchParams : et, or = typeof FormData < "u" ? FormData : null, ar = typeof Blob < "u" ? Blob : null, lr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: nr,
    FormData: or,
    Blob: ar
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, st = typeof window < "u" && typeof document < "u", Ke = typeof navigator == "object" && navigator || void 0, ir = st && (!Ke || ["ReactNative", "NativeScript", "NS"].indexOf(Ke.product) < 0), cr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", dr = st && window.location.href || "http://localhost", ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: st,
  hasStandardBrowserEnv: ir,
  hasStandardBrowserWebWorkerEnv: cr,
  navigator: Ke,
  origin: dr
}, Symbol.toStringTag, { value: "Module" })), z = {
  ...ur,
  ...lr
};
function fr(e, t) {
  return Ie(e, new z.classes.URLSearchParams(), {
    visitor: function(s, r, n, a) {
      return z.isNode && u.isBuffer(s) ? (this.append(r, s.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function pr(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function hr(e) {
  const t = {}, s = Object.keys(e);
  let r;
  const n = s.length;
  let a;
  for (r = 0; r < n; r++)
    a = s[r], t[a] = e[a];
  return t;
}
function zt(e) {
  function t(s, r, n, a) {
    let l = s[a++];
    if (l === "__proto__") return !0;
    const d = Number.isFinite(+l), x = a >= s.length;
    return l = !l && u.isArray(n) ? n.length : l, x ? (u.hasOwnProp(n, l) ? n[l] = [n[l], r] : n[l] = r, !d) : ((!n[l] || !u.isObject(n[l])) && (n[l] = []), t(s, r, n[l], a) && u.isArray(n[l]) && (n[l] = hr(n[l])), !d);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const s = {};
    return u.forEachEntry(e, (r, n) => {
      t(pr(r), n, s, 0);
    }), s;
  }
  return null;
}
function mr(e, t, s) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (s || JSON.stringify)(e);
}
const Se = {
  transitional: tt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, s) {
      const r = s.getContentType() || "", n = r.indexOf("application/json") > -1, a = u.isObject(t);
      if (a && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
        return n ? JSON.stringify(zt(t)) : t;
      if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t))
        return t;
      if (u.isArrayBufferView(t))
        return t.buffer;
      if (u.isURLSearchParams(t))
        return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let d;
      if (a) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return fr(t, this.formSerializer).toString();
        if ((d = u.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const x = this.env && this.env.FormData;
          return Ie(
            d ? { "files[]": t } : t,
            x && new x(),
            this.formSerializer
          );
        }
      }
      return a || n ? (s.setContentType("application/json", !1), mr(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const s = this.transitional || Se.transitional, r = s && s.forcedJSONParsing, n = this.responseType === "json";
      if (u.isResponse(t) || u.isReadableStream(t))
        return t;
      if (t && u.isString(t) && (r && !this.responseType || n)) {
        const l = !(s && s.silentJSONParsing) && n;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (d) {
          if (l)
            throw d.name === "SyntaxError" ? S.from(d, S.ERR_BAD_RESPONSE, this, null, this.response) : d;
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
    FormData: z.classes.FormData,
    Blob: z.classes.Blob
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
u.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Se.headers[e] = {};
});
const br = u.toObjectSet([
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
]), xr = (e) => {
  const t = {};
  let s, r, n;
  return e && e.split(`
`).forEach(function(l) {
    n = l.indexOf(":"), s = l.substring(0, n).trim().toLowerCase(), r = l.substring(n + 1).trim(), !(!s || t[s] && br[s]) && (s === "set-cookie" ? t[s] ? t[s].push(r) : t[s] = [r] : t[s] = t[s] ? t[s] + ", " + r : r);
  }), t;
}, ht = /* @__PURE__ */ Symbol("internals");
function we(e) {
  return e && String(e).trim().toLowerCase();
}
function Ne(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(Ne) : String(e);
}
function gr(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = s.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const vr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function He(e, t, s, r, n) {
  if (u.isFunction(r))
    return r.call(this, t, s);
  if (n && (t = s), !!u.isString(t)) {
    if (u.isString(r))
      return t.indexOf(r) !== -1;
    if (u.isRegExp(r))
      return r.test(t);
  }
}
function yr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, r) => s.toUpperCase() + r);
}
function wr(e, t) {
  const s = u.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + s, {
      value: function(n, a, l) {
        return this[r].call(this, t, n, a, l);
      },
      configurable: !0
    });
  });
}
let V = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, s, r) {
    const n = this;
    function a(d, x, p) {
      const m = we(x);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const k = u.findKey(n, m);
      (!k || n[k] === void 0 || p === !0 || p === void 0 && n[k] !== !1) && (n[k || x] = Ne(d));
    }
    const l = (d, x) => u.forEach(d, (p, m) => a(p, m, x));
    if (u.isPlainObject(t) || t instanceof this.constructor)
      l(t, s);
    else if (u.isString(t) && (t = t.trim()) && !vr(t))
      l(xr(t), s);
    else if (u.isObject(t) && u.isIterable(t)) {
      let d = {}, x, p;
      for (const m of t) {
        if (!u.isArray(m))
          throw TypeError("Object iterator must return a key-value pair");
        d[p = m[0]] = (x = d[p]) ? u.isArray(x) ? [...x, m[1]] : [x, m[1]] : m[1];
      }
      l(d, s);
    } else
      t != null && a(s, t, r);
    return this;
  }
  get(t, s) {
    if (t = we(t), t) {
      const r = u.findKey(this, t);
      if (r) {
        const n = this[r];
        if (!s)
          return n;
        if (s === !0)
          return gr(n);
        if (u.isFunction(s))
          return s.call(this, n, r);
        if (u.isRegExp(s))
          return s.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, s) {
    if (t = we(t), t) {
      const r = u.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!s || He(this, this[r], r, s)));
    }
    return !1;
  }
  delete(t, s) {
    const r = this;
    let n = !1;
    function a(l) {
      if (l = we(l), l) {
        const d = u.findKey(r, l);
        d && (!s || He(r, r[d], d, s)) && (delete r[d], n = !0);
      }
    }
    return u.isArray(t) ? t.forEach(a) : a(t), n;
  }
  clear(t) {
    const s = Object.keys(this);
    let r = s.length, n = !1;
    for (; r--; ) {
      const a = s[r];
      (!t || He(this, this[a], a, t, !0)) && (delete this[a], n = !0);
    }
    return n;
  }
  normalize(t) {
    const s = this, r = {};
    return u.forEach(this, (n, a) => {
      const l = u.findKey(r, a);
      if (l) {
        s[l] = Ne(n), delete s[a];
        return;
      }
      const d = t ? yr(a) : String(a).trim();
      d !== a && delete s[a], s[d] = Ne(n), r[d] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const s = /* @__PURE__ */ Object.create(null);
    return u.forEach(this, (r, n) => {
      r != null && r !== !1 && (s[n] = t && u.isArray(r) ? r.join(", ") : r);
    }), s;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, s]) => t + ": " + s).join(`
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
  static concat(t, ...s) {
    const r = new this(t);
    return s.forEach((n) => r.set(n)), r;
  }
  static accessor(t) {
    const r = (this[ht] = this[ht] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function a(l) {
      const d = we(l);
      r[d] || (wr(n, l), r[d] = !0);
    }
    return u.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
V.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
u.reduceDescriptors(V.prototype, ({ value: e }, t) => {
  let s = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[s] = r;
    }
  };
});
u.freezeMethods(V);
function Je(e, t) {
  const s = this || Se, r = t || s, n = V.from(r.headers);
  let a = r.data;
  return u.forEach(e, function(d) {
    a = d.call(s, a, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), a;
}
function Ut(e) {
  return !!(e && e.__CANCEL__);
}
let Re = class extends S {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, s, r) {
    super(t ?? "canceled", S.ERR_CANCELED, s, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Mt(e, t, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status) ? e(s) : t(
    new S(
      "Request failed with status code " + s.status,
      [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    )
  );
}
function _r(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function kr(e, t) {
  e = e || 10;
  const s = new Array(e), r = new Array(e);
  let n = 0, a = 0, l;
  return t = t !== void 0 ? t : 1e3, function(x) {
    const p = Date.now(), m = r[a];
    l || (l = p), s[n] = x, r[n] = p;
    let k = a, C = 0;
    for (; k !== n; )
      C += s[k++], k = k % e;
    if (n = (n + 1) % e, n === a && (a = (a + 1) % e), p - l < t)
      return;
    const T = m && p - m;
    return T ? Math.round(C * 1e3 / T) : void 0;
  };
}
function Er(e, t) {
  let s = 0, r = 1e3 / t, n, a;
  const l = (p, m = Date.now()) => {
    s = m, n = null, a && (clearTimeout(a), a = null), e(...p);
  };
  return [(...p) => {
    const m = Date.now(), k = m - s;
    k >= r ? l(p, m) : (n = p, a || (a = setTimeout(() => {
      a = null, l(n);
    }, r - k)));
  }, () => n && l(n)];
}
const Be = (e, t, s = 3) => {
  let r = 0;
  const n = kr(50, 250);
  return Er((a) => {
    const l = a.loaded, d = a.lengthComputable ? a.total : void 0, x = l - r, p = n(x), m = l <= d;
    r = l;
    const k = {
      loaded: l,
      total: d,
      progress: d ? l / d : void 0,
      bytes: x,
      rate: p || void 0,
      estimated: p && d && m ? (d - l) / p : void 0,
      event: a,
      lengthComputable: d != null,
      [t ? "download" : "upload"]: !0
    };
    e(k);
  }, s);
}, mt = (e, t) => {
  const s = e != null;
  return [
    (r) => t[0]({
      lengthComputable: s,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, bt = (e) => (...t) => u.asap(() => e(...t)), Sr = z.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (s) => (s = new URL(s, z.origin), e.protocol === s.protocol && e.host === s.host && (t || e.port === s.port)))(
  new URL(z.origin),
  z.navigator && /(msie|trident)/i.test(z.navigator.userAgent)
) : () => !0, Rr = z.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, s, r, n, a, l) {
      if (typeof document > "u") return;
      const d = [`${e}=${encodeURIComponent(t)}`];
      u.isNumber(s) && d.push(`expires=${new Date(s).toUTCString()}`), u.isString(r) && d.push(`path=${r}`), u.isString(n) && d.push(`domain=${n}`), a === !0 && d.push("secure"), u.isString(l) && d.push(`SameSite=${l}`), document.cookie = d.join("; ");
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
function Cr(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Or(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Dt(e, t, s) {
  let r = !Cr(t);
  return e && (r || s == !1) ? Or(e, t) : t;
}
const xt = (e) => e instanceof V ? { ...e } : e;
function me(e, t) {
  t = t || {};
  const s = {};
  function r(p, m, k, C) {
    return u.isPlainObject(p) && u.isPlainObject(m) ? u.merge.call({ caseless: C }, p, m) : u.isPlainObject(m) ? u.merge({}, m) : u.isArray(m) ? m.slice() : m;
  }
  function n(p, m, k, C) {
    if (u.isUndefined(m)) {
      if (!u.isUndefined(p))
        return r(void 0, p, k, C);
    } else return r(p, m, k, C);
  }
  function a(p, m) {
    if (!u.isUndefined(m))
      return r(void 0, m);
  }
  function l(p, m) {
    if (u.isUndefined(m)) {
      if (!u.isUndefined(p))
        return r(void 0, p);
    } else return r(void 0, m);
  }
  function d(p, m, k) {
    if (k in t)
      return r(p, m);
    if (k in e)
      return r(void 0, p);
  }
  const x = {
    url: a,
    method: a,
    data: a,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: d,
    headers: (p, m, k) => n(xt(p), xt(m), k, !0)
  };
  return u.forEach(Object.keys({ ...e, ...t }), function(m) {
    if (m === "__proto__" || m === "constructor" || m === "prototype") return;
    const k = u.hasOwnProp(x, m) ? x[m] : n, C = k(e[m], t[m], m);
    u.isUndefined(C) && k !== d || (s[m] = C);
  }), s;
}
const qt = (e) => {
  const t = me({}, e);
  let { data: s, withXSRFToken: r, xsrfHeaderName: n, xsrfCookieName: a, headers: l, auth: d } = t;
  if (t.headers = l = V.from(l), t.url = It(
    Dt(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), d && l.set(
    "Authorization",
    "Basic " + btoa(
      (d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : "")
    )
  ), u.isFormData(s)) {
    if (z.hasStandardBrowserEnv || z.hasStandardBrowserWebWorkerEnv)
      l.setContentType(void 0);
    else if (u.isFunction(s.getHeaders)) {
      const x = s.getHeaders(), p = ["content-type", "content-length"];
      Object.entries(x).forEach(([m, k]) => {
        p.includes(m.toLowerCase()) && l.set(m, k);
      });
    }
  }
  if (z.hasStandardBrowserEnv && (r && u.isFunction(r) && (r = r(t)), r || r !== !1 && Sr(t.url))) {
    const x = n && a && Rr.read(a);
    x && l.set(n, x);
  }
  return t;
}, Tr = typeof XMLHttpRequest < "u", Ar = Tr && function(e) {
  return new Promise(function(s, r) {
    const n = qt(e);
    let a = n.data;
    const l = V.from(n.headers).normalize();
    let { responseType: d, onUploadProgress: x, onDownloadProgress: p } = n, m, k, C, T, b;
    function E() {
      T && T(), b && b(), n.cancelToken && n.cancelToken.unsubscribe(m), n.signal && n.signal.removeEventListener("abort", m);
    }
    let y = new XMLHttpRequest();
    y.open(n.method.toUpperCase(), n.url, !0), y.timeout = n.timeout;
    function A() {
      if (!y)
        return;
      const c = V.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), P = {
        data: !d || d === "text" || d === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: c,
        config: e,
        request: y
      };
      Mt(
        function(F) {
          s(F), E();
        },
        function(F) {
          r(F), E();
        },
        P
      ), y = null;
    }
    "onloadend" in y ? y.onloadend = A : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, y.onabort = function() {
      y && (r(new S("Request aborted", S.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function(B) {
      const P = B && B.message ? B.message : "Network Error", X = new S(P, S.ERR_NETWORK, e, y);
      X.event = B || null, r(X), y = null;
    }, y.ontimeout = function() {
      let B = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const P = n.transitional || tt;
      n.timeoutErrorMessage && (B = n.timeoutErrorMessage), r(
        new S(
          B,
          P.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
          e,
          y
        )
      ), y = null;
    }, a === void 0 && l.setContentType(null), "setRequestHeader" in y && u.forEach(l.toJSON(), function(B, P) {
      y.setRequestHeader(P, B);
    }), u.isUndefined(n.withCredentials) || (y.withCredentials = !!n.withCredentials), d && d !== "json" && (y.responseType = n.responseType), p && ([C, b] = Be(p, !0), y.addEventListener("progress", C)), x && y.upload && ([k, T] = Be(x), y.upload.addEventListener("progress", k), y.upload.addEventListener("loadend", T)), (n.cancelToken || n.signal) && (m = (c) => {
      y && (r(!c || c.type ? new Re(null, e, y) : c), y.abort(), y = null);
    }, n.cancelToken && n.cancelToken.subscribe(m), n.signal && (n.signal.aborted ? m() : n.signal.addEventListener("abort", m)));
    const I = _r(n.url);
    if (I && z.protocols.indexOf(I) === -1) {
      r(
        new S(
          "Unsupported protocol " + I + ":",
          S.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    y.send(a || null);
  });
}, Nr = (e, t) => {
  const { length: s } = e = e ? e.filter(Boolean) : [];
  if (t || s) {
    let r = new AbortController(), n;
    const a = function(p) {
      if (!n) {
        n = !0, d();
        const m = p instanceof Error ? p : this.reason;
        r.abort(
          m instanceof S ? m : new Re(m instanceof Error ? m.message : m)
        );
      }
    };
    let l = t && setTimeout(() => {
      l = null, a(new S(`timeout of ${t}ms exceeded`, S.ETIMEDOUT));
    }, t);
    const d = () => {
      e && (l && clearTimeout(l), l = null, e.forEach((p) => {
        p.unsubscribe ? p.unsubscribe(a) : p.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((p) => p.addEventListener("abort", a));
    const { signal: x } = r;
    return x.unsubscribe = () => u.asap(d), x;
  }
}, Fr = function* (e, t) {
  let s = e.byteLength;
  if (s < t) {
    yield e;
    return;
  }
  let r = 0, n;
  for (; r < s; )
    n = r + t, yield e.slice(r, n), r = n;
}, Br = async function* (e, t) {
  for await (const s of Lr(e))
    yield* Fr(s, t);
}, Lr = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: s, value: r } = await t.read();
      if (s)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, gt = (e, t, s, r) => {
  const n = Br(e, t);
  let a = 0, l, d = (x) => {
    l || (l = !0, r && r(x));
  };
  return new ReadableStream(
    {
      async pull(x) {
        try {
          const { done: p, value: m } = await n.next();
          if (p) {
            d(), x.close();
            return;
          }
          let k = m.byteLength;
          if (s) {
            let C = a += k;
            s(C);
          }
          x.enqueue(new Uint8Array(m));
        } catch (p) {
          throw d(p), p;
        }
      },
      cancel(x) {
        return d(x), n.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, vt = 64 * 1024, { isFunction: Oe } = u, Pr = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(u.global), { ReadableStream: yt, TextEncoder: wt } = u.global, _t = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, $r = (e) => {
  e = u.merge.call(
    {
      skipUndefined: !0
    },
    Pr,
    e
  );
  const { fetch: t, Request: s, Response: r } = e, n = t ? Oe(t) : typeof fetch == "function", a = Oe(s), l = Oe(r);
  if (!n)
    return !1;
  const d = n && Oe(yt), x = n && (typeof wt == "function" ? /* @__PURE__ */ ((b) => (E) => b.encode(E))(new wt()) : async (b) => new Uint8Array(await new s(b).arrayBuffer())), p = a && d && _t(() => {
    let b = !1;
    const E = new s(z.origin, {
      body: new yt(),
      method: "POST",
      get duplex() {
        return b = !0, "half";
      }
    }).headers.has("Content-Type");
    return b && !E;
  }), m = l && d && _t(() => u.isReadableStream(new r("").body)), k = {
    stream: m && ((b) => b.body)
  };
  n && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((b) => {
    !k[b] && (k[b] = (E, y) => {
      let A = E && E[b];
      if (A)
        return A.call(E);
      throw new S(
        `Response type '${b}' is not supported`,
        S.ERR_NOT_SUPPORT,
        y
      );
    });
  });
  const C = async (b) => {
    if (b == null)
      return 0;
    if (u.isBlob(b))
      return b.size;
    if (u.isSpecCompliantForm(b))
      return (await new s(z.origin, {
        method: "POST",
        body: b
      }).arrayBuffer()).byteLength;
    if (u.isArrayBufferView(b) || u.isArrayBuffer(b))
      return b.byteLength;
    if (u.isURLSearchParams(b) && (b = b + ""), u.isString(b))
      return (await x(b)).byteLength;
  }, T = async (b, E) => {
    const y = u.toFiniteNumber(b.getContentLength());
    return y ?? C(E);
  };
  return async (b) => {
    let {
      url: E,
      method: y,
      data: A,
      signal: I,
      cancelToken: c,
      timeout: B,
      onDownloadProgress: P,
      onUploadProgress: X,
      responseType: F,
      headers: ae,
      withCredentials: le = "same-origin",
      fetchOptions: q
    } = qt(b), K = t || fetch;
    F = F ? (F + "").toLowerCase() : "text";
    let de = Nr(
      [I, c && c.toAbortSignal()],
      B
    ), te = null;
    const re = de && de.unsubscribe && (() => {
      de.unsubscribe();
    });
    let se;
    try {
      if (X && p && y !== "get" && y !== "head" && (se = await T(ae, A)) !== 0) {
        let W = new s(E, {
          method: "POST",
          body: A,
          duplex: "half"
        }), ie;
        if (u.isFormData(A) && (ie = W.headers.get("content-type")) && ae.setContentType(ie), W.body) {
          const [G, ue] = mt(
            se,
            Be(bt(X))
          );
          A = gt(W.body, vt, G, ue);
        }
      }
      u.isString(le) || (le = le ? "include" : "omit");
      const O = a && "credentials" in s.prototype, be = {
        ...q,
        signal: de,
        method: y.toUpperCase(),
        headers: ae.normalize().toJSON(),
        body: A,
        duplex: "half",
        credentials: O ? le : void 0
      };
      te = a && new s(E, be);
      let Y = await (a ? K(te, q) : K(E, be));
      const ne = m && (F === "stream" || F === "response");
      if (m && (P || ne && re)) {
        const W = {};
        ["status", "statusText", "headers"].forEach((ve) => {
          W[ve] = Y[ve];
        });
        const ie = u.toFiniteNumber(Y.headers.get("content-length")), [G, ue] = P && mt(
          ie,
          Be(bt(P), !0)
        ) || [];
        Y = new r(
          gt(Y.body, vt, G, () => {
            ue && ue(), re && re();
          }),
          W
        );
      }
      F = F || "text";
      let Ue = await k[u.findKey(k, F) || "text"](
        Y,
        b
      );
      return !ne && re && re(), await new Promise((W, ie) => {
        Mt(W, ie, {
          data: Ue,
          headers: V.from(Y.headers),
          status: Y.status,
          statusText: Y.statusText,
          config: b,
          request: te
        });
      });
    } catch (O) {
      throw re && re(), O && O.name === "TypeError" && /Load failed|fetch/i.test(O.message) ? Object.assign(
        new S(
          "Network Error",
          S.ERR_NETWORK,
          b,
          te,
          O && O.response
        ),
        {
          cause: O.cause || O
        }
      ) : S.from(O, O && O.code, b, te, O && O.response);
    }
  };
}, jr = /* @__PURE__ */ new Map(), Ht = (e) => {
  let t = e && e.env || {};
  const { fetch: s, Request: r, Response: n } = t, a = [r, n, s];
  let l = a.length, d = l, x, p, m = jr;
  for (; d--; )
    x = a[d], p = m.get(x), p === void 0 && m.set(x, p = d ? /* @__PURE__ */ new Map() : $r(t)), m = p;
  return p;
};
Ht();
const rt = {
  http: er,
  xhr: Ar,
  fetch: {
    get: Ht
  }
};
u.forEach(rt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const kt = (e) => `- ${e}`, Ir = (e) => u.isFunction(e) || e === null || e === !1;
function zr(e, t) {
  e = u.isArray(e) ? e : [e];
  const { length: s } = e;
  let r, n;
  const a = {};
  for (let l = 0; l < s; l++) {
    r = e[l];
    let d;
    if (n = r, !Ir(r) && (n = rt[(d = String(r)).toLowerCase()], n === void 0))
      throw new S(`Unknown adapter '${d}'`);
    if (n && (u.isFunction(n) || (n = n.get(t))))
      break;
    a[d || "#" + l] = n;
  }
  if (!n) {
    const l = Object.entries(a).map(
      ([x, p]) => `adapter ${x} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let d = s ? l.length > 1 ? `since :
` + l.map(kt).join(`
`) : " " + kt(l[0]) : "as no adapter specified";
    throw new S(
      "There is no suitable adapter to dispatch the request " + d,
      "ERR_NOT_SUPPORT"
    );
  }
  return n;
}
const Jt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: zr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: rt
};
function Ve(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Re(null, e);
}
function Et(e) {
  return Ve(e), e.headers = V.from(e.headers), e.data = Je.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Jt.getAdapter(e.adapter || Se.adapter, e)(e).then(
    function(r) {
      return Ve(e), r.data = Je.call(e, e.transformResponse, r), r.headers = V.from(r.headers), r;
    },
    function(r) {
      return Ut(r) || (Ve(e), r && r.response && (r.response.data = Je.call(
        e,
        e.transformResponse,
        r.response
      ), r.response.headers = V.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const Vt = "1.13.6", ze = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ze[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const St = {};
ze.transitional = function(t, s, r) {
  function n(a, l) {
    return "[Axios v" + Vt + "] Transitional option '" + a + "'" + l + (r ? ". " + r : "");
  }
  return (a, l, d) => {
    if (t === !1)
      throw new S(
        n(l, " has been removed" + (s ? " in " + s : "")),
        S.ERR_DEPRECATED
      );
    return s && !St[l] && (St[l] = !0, console.warn(
      n(
        l,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(a, l, d) : !0;
  };
};
ze.spelling = function(t) {
  return (s, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Ur(e, t, s) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let n = r.length;
  for (; n-- > 0; ) {
    const a = r[n], l = t[a];
    if (l) {
      const d = e[a], x = d === void 0 || l(d, a, e);
      if (x !== !0)
        throw new S(
          "option " + a + " must be " + x,
          S.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (s !== !0)
      throw new S("Unknown option " + a, S.ERR_BAD_OPTION);
  }
}
const Fe = {
  assertOptions: Ur,
  validators: ze
}, Z = Fe.validators;
let he = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new pt(),
      response: new pt()
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
  async request(t, s) {
    try {
      return await this._request(t, s);
    } catch (r) {
      if (r instanceof Error) {
        let n = {};
        Error.captureStackTrace ? Error.captureStackTrace(n) : n = new Error();
        const a = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? a && !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + a) : r.stack = a;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, s) {
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = me(this.defaults, s);
    const { transitional: r, paramsSerializer: n, headers: a } = s;
    r !== void 0 && Fe.assertOptions(
      r,
      {
        silentJSONParsing: Z.transitional(Z.boolean),
        forcedJSONParsing: Z.transitional(Z.boolean),
        clarifyTimeoutError: Z.transitional(Z.boolean),
        legacyInterceptorReqResOrdering: Z.transitional(Z.boolean)
      },
      !1
    ), n != null && (u.isFunction(n) ? s.paramsSerializer = {
      serialize: n
    } : Fe.assertOptions(
      n,
      {
        encode: Z.function,
        serialize: Z.function
      },
      !0
    )), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), Fe.assertOptions(
      s,
      {
        baseUrl: Z.spelling("baseURL"),
        withXsrfToken: Z.spelling("withXSRFToken")
      },
      !0
    ), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let l = a && u.merge(a.common, a[s.method]);
    a && u.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (b) => {
      delete a[b];
    }), s.headers = V.concat(l, a);
    const d = [];
    let x = !0;
    this.interceptors.request.forEach(function(E) {
      if (typeof E.runWhen == "function" && E.runWhen(s) === !1)
        return;
      x = x && E.synchronous;
      const y = s.transitional || tt;
      y && y.legacyInterceptorReqResOrdering ? d.unshift(E.fulfilled, E.rejected) : d.push(E.fulfilled, E.rejected);
    });
    const p = [];
    this.interceptors.response.forEach(function(E) {
      p.push(E.fulfilled, E.rejected);
    });
    let m, k = 0, C;
    if (!x) {
      const b = [Et.bind(this), void 0];
      for (b.unshift(...d), b.push(...p), C = b.length, m = Promise.resolve(s); k < C; )
        m = m.then(b[k++], b[k++]);
      return m;
    }
    C = d.length;
    let T = s;
    for (; k < C; ) {
      const b = d[k++], E = d[k++];
      try {
        T = b(T);
      } catch (y) {
        E.call(this, y);
        break;
      }
    }
    try {
      m = Et.call(this, T);
    } catch (b) {
      return Promise.reject(b);
    }
    for (k = 0, C = p.length; k < C; )
      m = m.then(p[k++], p[k++]);
    return m;
  }
  getUri(t) {
    t = me(this.defaults, t);
    const s = Dt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return It(s, t.params, t.paramsSerializer);
  }
};
u.forEach(["delete", "get", "head", "options"], function(t) {
  he.prototype[t] = function(s, r) {
    return this.request(
      me(r || {}, {
        method: t,
        url: s,
        data: (r || {}).data
      })
    );
  };
});
u.forEach(["post", "put", "patch"], function(t) {
  function s(r) {
    return function(a, l, d) {
      return this.request(
        me(d || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: a,
          data: l
        })
      );
    };
  }
  he.prototype[t] = s(), he.prototype[t + "Form"] = s(!0);
});
let Mr = class Wt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function(a) {
      s = a;
    });
    const r = this;
    this.promise.then((n) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](n);
      r._listeners = null;
    }), this.promise.then = (n) => {
      let a;
      const l = new Promise((d) => {
        r.subscribe(d), a = d;
      }).then(n);
      return l.cancel = function() {
        r.unsubscribe(a);
      }, l;
    }, t(function(a, l, d) {
      r.reason || (r.reason = new Re(a, l, d), s(r.reason));
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
    const s = this._listeners.indexOf(t);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), s = (r) => {
      t.abort(r);
    };
    return this.subscribe(s), t.signal.unsubscribe = () => this.unsubscribe(s), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Wt(function(n) {
        t = n;
      }),
      cancel: t
    };
  }
};
function Dr(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function qr(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
const Ge = {
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
Object.entries(Ge).forEach(([e, t]) => {
  Ge[t] = e;
});
function Xt(e) {
  const t = new he(e), s = Ct(he.prototype.request, t);
  return u.extend(s, he.prototype, t, { allOwnKeys: !0 }), u.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(n) {
    return Xt(me(e, n));
  }, s;
}
const N = Xt(Se);
N.Axios = he;
N.CanceledError = Re;
N.CancelToken = Mr;
N.isCancel = Ut;
N.VERSION = Vt;
N.toFormData = Ie;
N.AxiosError = S;
N.Cancel = N.CanceledError;
N.all = function(t) {
  return Promise.all(t);
};
N.spread = Dr;
N.isAxiosError = qr;
N.mergeConfig = me;
N.AxiosHeaders = V;
N.formToJSON = (e) => zt(u.isHTMLForm(e) ? new FormData(e) : e);
N.getAdapter = Jt.getAdapter;
N.HttpStatusCode = Ge;
N.default = N;
const {
  Axios: ua,
  AxiosError: fa,
  CanceledError: pa,
  isCancel: ha,
  CancelToken: ma,
  VERSION: ba,
  all: xa,
  Cancel: ga,
  isAxiosError: va,
  spread: ya,
  toFormData: wa,
  AxiosHeaders: _a,
  HttpStatusCode: ka,
  formToJSON: Ea,
  getAdapter: Sa,
  mergeConfig: Ra
} = N, Ze = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), Kt = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), Gt = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, s = document.getElementById(e.el_id);
      if (!s)
        throw new Error("[el_id] is invalid");
      ((r) => {
        const n = (a) => {
          ((l) => {
            const d = l.getAttribute("data-ce");
            if (!d)
              return;
            const x = JSON.parse(d).filter((p) => p?.k.startsWith("t-"));
            if (x.length != 0)
              for (const p of x) {
                const m = p.k, k = p.v.split(" ");
                if (m == `t-${t}-class`)
                  for (const C of k)
                    l.classList.add(C);
                else
                  for (const C of k)
                    l.classList.remove(C);
              }
          })(a);
        };
        for (const a of r.getElementsByTagName("*"))
          n(a);
        n(r);
      })(s);
    } catch (t) {
      const s = `err: [theme] ${t}`;
      throw console.log(s), s;
    }
  }
});
function Ye(e, t = 1e3) {
  let s = {
    cnt: 0
  };
  return new Promise((r) => {
    const n = () => {
      console.log(`[setInterval] is running.. [count=${s.cnt}]`);
      try {
        e() && (clearInterval(a), r());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      s.cnt += 1;
    }, a = setInterval(() => {
      n();
    }, t);
    n();
  });
}
let Hr = class {
  listeners = {};
  on = (e, t) => ((this.listeners[e] ||= []).push(t), () => this.off(e, t));
  off = (e, t) => {
    this.listeners[e] = this.listeners[e]?.filter((s) => s !== t);
  };
  /** Sequential execution (await each listener) */
  emit = async (e, ...t) => {
    for (const s of this.listeners[e] ?? [])
      await s(...t);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (e, ...t) => {
    await Promise.all(
      (this.listeners[e] ?? []).map((s) => s(...t))
    );
  };
  //Error-safe emit
  emitSafe = async (e, ...t) => {
    for (const s of this.listeners[e] ?? [])
      try {
        await s(...t);
      } catch (r) {
        this.listeners.error?.forEach(
          (n) => n(r)
        );
      }
  };
};
const Le = () => new Hr();
class Zt {
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
let j = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [s, r] of t.entries()) {
        const n = r, a = `${n.name}:${e.run_from}`, l = `${e.run_from}_src`;
        let d = n[l];
        const x = `${e.run_from}_src`;
        let p = e?.lazy_lib?.[x] || null;
        if (p && (p = p.replace("{*}", `${n.name}`)), console.log(`_lazy_src: ${p}`), console.log(`_src: ${d}`), j.lib.l.hasOwnProperty(`${a}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(d) && d.includes("/") == !1 && j.lib.inbuilt_lib.indexOf(`${n.name}`) === -1)
            if (p)
              d = p;
            else
              throw `[lib-name=${n.name},lib-src=${d}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (d.startsWith("./") || d.startsWith("../")) {
            const m = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${d}`
            );
            j.lib.l[`${a}`] = {
              lib: m,
              src: d
            };
          }
          if (d.startsWith("http://") || d.startsWith("https://")) {
            const m = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${d}`
            );
            j.lib.l[`${a}`] = {
              lib: m,
              src: d
            };
          }
        }
      }
      console.log(await j.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const s = `${e.name}:${e.run_from}`;
      return j.lib.l.hasOwnProperty(`${s}`) == !1 && await j.lib.set({
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
      }), t = j.lib.l[`${s}`], t;
    },
    get_all: async (e) => j.lib.l
  },
  path: {
    set: (e) => {
      let t = "", s = "";
      const r = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (s = "/dist"), r.indexOf(e.type) !== -1)
        for (const [n, a] of r.entries()) {
          let l = n == 0 ? "" : "/";
          if (t += `${l}${a}`, a == e.type)
            return `${t}${s}${e.name}`;
        }
      else
        for (const [n, a] of r.entries()) {
          let l = n == 0 ? "" : "/";
          if (t += `${l}${a}`, a == "src")
            return `${t}${s}${e.name}`;
        }
      return `${t}${s}${e.name}`;
    }
  }
};
const Yt = Le(), Qt = Le(), Jr = Yt.on;
Yt.emit;
const Vr = Qt.emit;
Qt.on;
const Wr = async (e) => {
  const t = await Kt();
  return await j.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (s) => {
      console.log("--renderer [set]"), s.return = s?.return || {}, s.return.r = s?.return?.r || "full";
      const r = new Zt();
      r.start();
      let n = s.data?.value?.l || s.data.l, a = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return s.return.r == "full" ? a.r = "" : a.r = [], await (async () => {
        for (const l of n) {
          const d = await await j.lib.get({ name: l.type, run_from: "renderer", lazy_lib: e.lazy_lib }), x = await (await d.lib.index({
            f: {
              name: (p) => t.f.name({ id: l.id, name: p }),
              get_lib: async (p) => await await j.lib.get({ name: p.name, run_from: p.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (p) => await (await Gt()).set(p),
              path: (p) => j.path.set({ src: d.src, type: l.type, name: p }),
              //set..
              uuid: () => Ze().set(),
              wait_until: Ye
            }
          })).set(
            {
              data: {
                curr: l
              }
            }
            /*_$cb*/
          );
          s?.return?.r == "full" ? a.r += x?.r || "" : a.r.push(x?.r || ""), a.style += x?.style || "", a.head += x?.head || "";
        }
      })(), r.stop(), a.benchmark = r.result(), a;
    }
  };
}, Xr = async (e) => {
  const t = await Kt();
  return await j.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (s) => {
      console.log("--hydrator [set]");
      const r = new Zt();
      r.start();
      let n = {
        r: "",
        style: ""
      }, a = {
        style_id: `${Ze().set()}_stl`
      }, l = s.data?.value?.l || s.data.l;
      const d = async () => {
        for (const x of l) {
          const p = await await j.lib.get({ name: x.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), m = p.lib, k = Le(), C = k.on, T = await (await m.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (b) => t.f.name({ id: x.id, name: b }),
              get_lib: async (b) => await await j.lib.get({ name: b.name, run_from: b.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (b) => await (await Gt()).set(b),
              path: (b) => j.path.set({ src: p.src, type: x.type, name: b }),
              //set..
              uuid: () => Ze().set(),
              wait_until: Ye,
              //set..
              call: Vr,
              listen: C,
              //set..
              new_emitter: () => Le()
            }
          })).set(
            {
              data: {
                curr: x
              }
            }
            /*_$cb*/
          );
          Jr("msg", async (b) => {
            try {
              if (Object.keys(b.where || {}).length == 0) {
                await k.emit("msg", b);
                return;
              }
            } catch {
            }
            try {
              if (x?.[b.where?.key || ""] == b.where?.value) {
                await k.emit("msg", b);
                return;
              }
            } catch {
            }
          }), n.style += T.style;
        }
      };
      await Ye(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await d();
      try {
        ((x) => {
          const p = document.getElementById(`${a.style_id}`);
          p && p.remove();
          const m = document.createElement("style");
          m.id = `${a.style_id}`, m.innerHTML = `${n.style}`, x.appendChild(m);
        })(document.head);
      } catch (x) {
        console.log(`${x}, Failed to set style..`);
      }
      return r.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: r.result()
      };
    }
  };
}, Kr = ["id"], Gr = { class: "flex gap-2 items-center" }, Zr = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  class: "text-amber-400 fill-amber-400/20"
}, Yr = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, Qr = {
  key: 0,
  class: "max-w-[1440px] mx-auto px-4 py-6 md:px-8"
}, en = { class: "grid grid-cols-1 lg:!grid-cols-[1fr_380px] gap-12" }, tn = { class: "space-y-4" }, sn = {
  key: 1,
  class: "max-w-[1440px] mx-auto md:px-8 md:py-8"
}, rn = { class: "!hidden md:!flex text-sm mb-8 items-center gap-2 justify-between" }, nn = { class: "hover:text-blue-500 transition-colors cursor-pointer capitalize" }, on = { class: "relative w-4 h-4 overflow-hidden" }, an = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  class: "animate-[spin_3s_linear_infinite]"
}, ln = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, cn = { class: "text-xs font-semibold tracking-wide" }, dn = { class: "!hidden md:!block mb-10" }, un = { class: "flex gap-2 mb-4" }, fn = {
  key: 0,
  class: "px-2.5 py-1 rounded-md bg-rose-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm shadow-rose-500/30"
}, pn = { class: "flex items-center text-amber-500 gap-1.5" }, hn = { class: "flex" }, mn = {
  key: 0,
  class: "tracking-wide"
}, bn = { class: "font-mono" }, xn = {
  key: 0,
  class: "flex flex-wrap gap-2 mt-4"
}, gn = { class: "grid grid-cols-1 lg:!grid-cols-[1fr_400px] gap-0 lg:!gap-16 items-start" }, vn = { class: "w-full" }, yn = { class: "md:!hidden px-4 pt-2 mb-6" }, wn = { class: "flex gap-2 mb-3" }, _n = {
  key: 0,
  class: "px-2 py-0.5 rounded bg-rose-500 text-white text-[10px] font-bold shadow-md shadow-rose-500/20"
}, kn = { class: "flex items-center text-amber-500 text-sm" }, En = { class: "ml-2 font-semibold" }, Sn = { class: "text-xs opacity-60 ml-1 text-current" }, Rn = {
  key: 0,
  class: "flex flex-wrap gap-2 mt-3 no-scrollbar overflow-x-auto"
}, Cn = { class: "grid grid-cols-1 lg:!grid-cols-[550px_1fr] gap-10 mb-12" }, On = { class: "relative group" }, Tn = { class: "!hidden md:!flex gap-4 h-[600px]" }, An = { class: "flex flex-col gap-3 w-[80px] overflow-y-auto no-scrollbar py-1" }, Nn = ["onMouseover"], Fn = ["src"], Bn = ["src"], Ln = { class: "absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity" }, Pn = ["fill"], $n = ["src"], jn = { class: "px-4 lg:px-0 flex flex-col gap-8" }, In = { class: "flex items-baseline gap-3 mb-2" }, zn = { class: "text-3xl font-extrabold text-rose-500 tracking-tight" }, Un = {
  key: 0,
  class: "text-base text-slate-400 line-through decoration-slate-400/50"
}, Mn = { key: 0 }, Dn = { class: "flex flex-wrap gap-3" }, qn = ["onClick"], Hn = ["src"], Jn = {
  key: 2,
  class: "absolute inset-0 bg-black/20 flex items-center justify-center z-10 backdrop-blur-[1px]"
}, Vn = { key: 1 }, Wn = { class: "flex justify-between items-center mb-3" }, Xn = { class: "flex flex-wrap gap-2.5" }, Kn = ["onClick"], Gn = { class: "space-y-3 mb-5" }, Zn = ["innerHTML"], Yn = {
  id: "characteristics",
  class: "scroll-mt-32"
}, Qn = ["onClick"], eo = { class: "flex justify-between items-center mb-8" }, to = {
  key: 0,
  class: "grid gap-6 md:grid-cols-2"
}, so = {
  key: 1,
  class: "grid gap-6 md:grid-cols-2"
}, ro = { class: "flex justify-between items-start mb-4" }, no = { class: "flex items-center gap-3" }, oo = { class: "!hidden lg:!block w-[380px]" }, ao = { class: "flex items-start justify-between mb-6" }, lo = { class: "flex items-baseline gap-2.5" }, io = { class: "text-[32px] font-extrabold leading-none text-rose-500 tracking-tight" }, co = {
  key: 0,
  class: "text-base text-slate-400 line-through decoration-slate-400/50"
}, uo = { class: "flex gap-4 text-sm group" }, fo = { class: "flex gap-4 text-sm group" }, po = { class: "space-y-3" }, ho = ["disabled"], mo = { class: "flex flex-col items-center justify-center" }, bo = ["disabled"], xo = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, go = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5"
}, vo = ["disabled"], yo = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, wo = { key: 1 }, _o = ["disabled"], ko = ["innerHTML"], Eo = {
  key: 1,
  class: "flex gap-4 animate-pulse overflow-hidden px-4"
}, So = { class: "flex flex-col min-w-[80px]" }, Ro = {
  key: 0,
  class: "text-xs text-slate-400 line-through mt-0.5"
}, Co = ["disabled"], Oo = ["disabled"], To = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Ao = {
  key: 1,
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5"
}, No = ["disabled"], Fo = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Bo = { key: 1 }, Lo = { class: "w-full max-w-3xl bg-white dark:bg-slate-900 rounded-t-[32px] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh] animate-[slideUp_0.3s_ease-out]" }, Po = { class: "px-6 pt-2 md:pt-6 pb-0 border-b border-gray-100 dark:border-slate-800" }, $o = { class: "flex justify-between items-center mb-6" }, jo = { class: "flex space-x-6" }, Io = { class: "overflow-y-auto p-4 md:p-8 flex-1 custom-widget-scroll" }, zo = { class: "animate-[fadeIn_0.3s_ease-out]" }, Uo = {
  key: 0,
  class: "flex justify-center p-4"
}, Mo = ["src"], Do = { key: 1 }, qo = { class: "flex justify-end mb-2" }, Ho = { class: "overflow-x-auto no-scrollbar pb-2" }, Jo = { class: "w-full text-sm text-center border-collapse min-w-[500px]" }, Vo = { class: "animate-[fadeIn_0.3s_ease-out] pb-4 md:pb-0" }, Wo = { class: "grid md:grid-cols-[200px_1fr] gap-8 md:gap-14 items-center" }, Xo = { class: "w-full flex justify-center py-4" }, Ko = {
  viewBox: "0 0 200 250",
  class: "w-full max-w-[160px] h-auto",
  fill: "none",
  stroke: "currentColor"
}, Go = ["stroke"], Zo = ["stroke"], Yo = { class: "space-y-6" }, Qo = { class: "relative pl-10" }, ea = { class: "relative pl-10" }, ta = { class: "relative pl-10" }, sa = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=view_product", Te = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", ra = /* @__PURE__ */ Rt({
  __name: "ProductPage",
  props: {
    _$p: {},
    _p: {},
    _$cb: {}
  },
  setup(e) {
    const t = e, s = {
      Default: [
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800",
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
        "https://images.unsplash.com/photo-1521334884684-d80222895322?w=800",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800"
      ]
    }, r = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], n = $(t._$p?.data?.curr?.data?.theme || "light"), a = $({
      id: "",
      brand: "",
      title: "",
      category: [],
      field_name: [],
      field_value: [],
      metadata: "{}",
      variant: [],
      variant_prices: [],
      variant_mrp: [],
      size: [],
      hashtags: []
    }), l = $(!0), d = $(""), x = $(""), p = $(""), m = $(0), k = $(!1), C = $("chart"), T = $(!1), b = $(!1), E = $(""), y = $([]), A = $(!1), I = $([
      { question: "Payment Methods", answer: "We accept Visa, MasterCard, Mir cards, and SBP. You can also pay upon receipt.", isOpen: !1 },
      { question: "Delivery Options", answer: "Courier delivery to your door or pickup points. Free delivery for orders over 2000₽.", isOpen: !1 },
      { question: "Return Policy", answer: "You can return items within 14 days of receipt. Items must be unused and in original packaging.", isOpen: !1 },
      { question: "Warranty Information", answer: "All products come with a 6-month warranty covering manufacturing defects.", isOpen: !1 },
      { question: "Sizing Guide", answer: "Please refer to our size chart for accurate measurements to ensure the best fit.", isOpen: !1 }
    ]), c = D(() => n.value === "dark"), B = D(() => t._p?.f?.name ? t._p.f.name("pd-root") : "pd-root"), P = D(() => {
      if (!a.value.metadata) return {};
      try {
        return JSON.parse(a.value.metadata);
      } catch {
        return {};
      }
    }), X = D(() => P.value.color ? P.value.color.map((w) => {
      let i = w.image?.[0]?.url ? w.image[0].url : null;
      return i && i.includes("example.com") && (i = null), { id: w.id, name: w.name, url: i };
    }) : []), F = D(() => {
      const w = x.value, i = P.value.color?.find((h) => h.name === w);
      if (i && i.image && i.image.length > 0) {
        const h = i.image.filter((_) => _.url && !_.url.includes("example.com")).map((_) => _.url);
        if (h.length) return h;
      }
      return s.Default;
    }), ae = D(() => {
      const w = a.value.size;
      return !w || !Array.isArray(w) || w.length === 0 ? [] : [...new Set(w.map((h) => String(h).trim()))].filter(Boolean).sort((h, _) => {
        const L = r.indexOf(h.toUpperCase()), Q = r.indexOf(_.toUpperCase());
        if (L !== -1 && Q !== -1) return L - Q;
        if (L !== -1) return -1;
        if (Q !== -1) return 1;
        const Ce = parseFloat(h), fe = parseFloat(_);
        return !isNaN(Ce) && !isNaN(fe) ? Ce - fe : h.localeCompare(_, void 0, { numeric: !0 });
      });
    }), le = D(() => {
      const w = P.value.size_info?.representation?.url || P.value.size_info?.chart?.url || null;
      return w && !w.includes("example.com") ? w : null;
    }), q = D(() => a.value.variant_prices?.[0] || 0), K = D(() => a.value.variant_mrp?.[0] || 0), de = D(() => Math.floor(q.value * 0.95)), te = D(() => K.value > q.value ? Math.round((K.value - q.value) / K.value * 100) : 0), re = D(() => {
      const w = a.value.field_name?.indexOf("Product Details");
      return w !== -1 && a.value.field_value?.[w] ? a.value.field_value[w] : "";
    }), se = $(0), O = $(!1), be = D(() => {
      const w = P.value.variant || a.value.variant;
      return w && w.length > 0 ? w.find((h) => {
        const _ = p.value ? h.size_id === p.value : !0, L = x.value ? h.color_id === x.value : !0;
        return _ && L;
      })?.id || w[0].id : null;
    }), Y = () => {
      const w = be.value;
      if (w) {
        const h = JSON.parse(localStorage.getItem("guest_cart") || "[]").find((_) => _.product_id === a.value.id && _.variant_id === w);
        se.value = h ? h.quantity : 0;
      }
    };
    lt([x, p], () => {
      Y();
    });
    const ne = async (w) => {
      if (!a.value.id) return;
      const i = be.value;
      if (!i) return alert("Please select a valid variant.");
      O.value = !0;
      const h = Math.max(0, se.value + w);
      console.log("Note: Force logged-in mode for testing API. Change to 'true' to test guest mode with local storage.");
      {
        let _ = JSON.parse(localStorage.getItem("guest_cart") || "[]"), L = _.findIndex((Q) => Q.product_id === a.value.id && Q.variant_id === i);
        L > -1 ? h === 0 ? _.splice(L, 1) : _[L].quantity = h : h > 0 && _.push({
          // Add New
          product_id: a.value.id,
          variant_id: i,
          quantity: h,
          title: a.value.title,
          price: q.value,
          image: F.value[0],
          color: x.value,
          size: p.value
        }), console.log("Guest Cart Updated:", _), localStorage.setItem("guest_cart", JSON.stringify(_)), alert("Cart updated successfully! locally"), se.value = h, setTimeout(() => {
          O.value = !1;
        }, 300);
      }
      w > 0 && t._$cb?.add && t._$cb.add({ $d: t._$p?.data?.curr?.data || {}, el: document.getElementById(B.value) });
    }, Ue = async () => {
      if (!a.value.id) return;
      const w = be.value;
      if (!w) return alert("Please select a valid variant.");
      O.value = !0;
      const i = {
        product_id: a.value.id,
        variant_id: w,
        quantity: 1,
        // Strictly locked to 1 for Buy Now
        title: a.value.title,
        price: q.value,
        image: F.value[0],
        color: x.value,
        size: p.value
      };
      if (localStorage.setItem("buy_now_item", JSON.stringify(i)), console.log("Buy Now Item Saved locally:", i), console.log("Current Buy Now Item in Storage:", JSON.parse(localStorage.getItem("buy_now_item") || "{}")), !(Te.trim() === ""))
        try {
          const _ = await N.post("https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management", {
            operation: "add_to_cart",
            user_id: "user_1",
            // Update this dynamically later if needed
            product_id: a.value.id,
            variant_id: w,
            quantity: 1,
            buy_now: !0
            // Flags it as a direct buy now action for the backend
          }, {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${Te.trim()}`
            }
          });
          console.log("Buy Now API Response:", _.data), alert("Buy Now item added to cart. Redirecting to checkout...");
        } catch (_) {
          return console.error("Buy Now API Error:", _), O.value = !1, alert("Failed to process Buy Now. Please try again.");
        }
      O.value = !1, t._$cb?.checkout ? t._$cb.checkout({
        $d: t._$p?.data?.curr?.data || {},
        is_buy_now: !0
      }) : console.log("Redirecting to checkout page...");
    }, W = D(() => a.value.field_name ? a.value.field_name.map((w, i) => ({
      name: w,
      value: a.value.field_value[i]?.replace(/<[^>]*>/g, " ").trim()
    })).filter((w) => w.name !== "Product Details" && w.value) : []), ie = D(() => T.value ? W.value : W.value.slice(0, 5)), G = (w) => new Intl.NumberFormat("ru-RU").format(w), ue = () => {
      const w = n.value === "dark" ? "light" : "dark";
      n.value = w, t._p?.f?.set_theme && t._p.f.set_theme({ name: w, el_id: B.value }), t._$cb && t._$p?.data?.curr?.data && (t._$p.data.curr.data.theme = w, t._$cb.change && t._$cb.change({ _$p: t._$p }));
    }, ve = () => {
      console.log("Back requested");
    }, es = () => navigator.share?.({ title: a.value.title, url: window.location.href }).catch(console.error), ts = () => b.value = !b.value, nt = (w) => {
      x.value = w.name, d.value = F.value[0];
    }, ss = (w) => {
      I.value[w].isOpen = !I.value[w].isOpen;
    }, rs = () => document.getElementById("characteristics")?.scrollIntoView({ behavior: "smooth" }), ns = (w) => {
      const i = w.target;
      m.value = Math.round(i.scrollLeft / i.clientWidth);
    }, ce = $({
      average_rating: 0,
      total_reviews: 0
    }), os = async (w) => {
      A.value = !0;
      try {
        const i = await N.post(
          "https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management",
          {
            operation: "get_product_reviews",
            product_id: w,
            page: 1,
            per_page: 10
          },
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${Te.trim()}`
            }
          }
        );
        if (i?.data?.success) {
          const h = i.data.analytics || {};
          ce.value = {
            average_rating: Number(h.average_rating ?? 0),
            total_reviews: Number(h.total_reviews ?? 0)
          }, y.value = (i.data.reviews || []).map((_) => ({
            name: _.reviewer_name || _.name || _.user || "Customer",
            date: _.created_at ? new Date(_.created_at).toLocaleDateString() : "Recent",
            text: _.review_text || _.text || _.comment || "",
            rating: Number(_.rating ?? 5),
            color: [
              "#005bff",
              "#f91155",
              "#00c853",
              "#ff6d00",
              "#d500f9",
              "#00bcd4"
            ][Math.floor(Math.random() * 6)]
          })), console.log("Fetched Reviews:", y.value.length);
        }
      } catch (i) {
        console.error("Failed to fetch reviews:", i), y.value = [], ce.value = { average_rating: 3.6, total_reviews: 50 };
      } finally {
        A.value = !1;
      }
    }, ot = async () => {
      l.value = !0;
      const i = { slug: (() => {
        let h = "";
        try {
          const L = new URL(location.href).pathname.split("/");
          h = L[L.length - 1];
        } catch {
        }
        return h;
      })(), collection: "products" };
      try {
        const h = await N.post(sa, i, {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${Te.trim()}` }
        });
        if (h.data.success && h.data.data.length)
          a.value = { ...a.value, ...h.data.data[0].document };
        else
          throw new Error("No data found");
      } catch (h) {
        console.warn("API Error, using fallback data:", h);
      } finally {
        X.value.length && nt(X.value[0]), ae.value.length && (p.value = ae.value[0]), d.value = F.value[0], l.value = !1, Y();
      }
    };
    ls(async () => {
      await ot(), a.value.id && await os(a.value.id), await it();
      const w = document.getElementById(B.value);
      w && n.value && t._p?.f?.set_theme && t._p.f.set_theme({ name: n.value, el_id: w.id });
      const i = t._$p?.data?.curr?.data?.product_list_widget;
      let h = i ? JSON.parse(JSON.stringify(i)) : null;
      const _ = { l: h ? [h] : [] }, L = {
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
        }
      };
      try {
        const Q = await Wr(L), Ce = await Xr(L), fe = await Q.set({
          data: _,
          _p: t._p,
          _$p: t._$p
        });
        if (E.value = fe.r || fe.html || "", fe.style) {
          const at = document.createElement("style");
          at.innerHTML = fe.style, document.head.appendChild(at);
        }
        await it(), setTimeout(async () => {
          await Ce.set({
            data: _,
            _p: t._p,
            _$p: t._$p
          });
        }, 200);
      } catch (Q) {
        console.error("Widget render failed:", Q);
      }
    }), lt(() => t._$p?.data?.curr?.id, ot);
    const as = (w) => {
      if (Math.abs(w.deltaX) > 0) return;
      const h = w.currentTarget.querySelector('.overflow-x-auto, [class*="overflow-x"]');
      if (h) {
        const _ = h.scrollLeft === 0, L = h.scrollLeft + h.clientWidth >= h.scrollWidth - 1;
        w.deltaY > 0 && !L ? (w.preventDefault(), h.scrollBy({ left: 300, behavior: "smooth" })) : w.deltaY < 0 && !_ && (w.preventDefault(), h.scrollBy({ left: -300, behavior: "smooth" }));
      }
    };
    return (w, i) => (g(), v("div", {
      id: B.value,
      class: f(["font-sans min-h-screen pb-[100px] md:pb-0 antialiased transition-colors duration-300 ease-in-out selection:bg-rose-500 selection:text-white", c.value ? "bg-[#0f172a] text-slate-200" : "bg-[#F9FAFB] text-slate-900"])
    }, [
      o("nav", {
        class: f(["sticky top-0 z-50 backdrop-blur-xl flex justify-between items-center px-4 py-3 shadow-sm md:!hidden border-b transition-colors duration-300", c.value ? "bg-[#0f172a]/80 border-slate-800" : "bg-white/80 border-slate-200/60"])
      }, [
        o("button", {
          class: f(["p-2 -ml-2 transition-all duration-200 rounded-full active:scale-90", c.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
          onClick: ve
        }, [...i[12] || (i[12] = [
          o("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            o("path", { d: "M15 18l-6-6 6-6" })
          ], -1)
        ])], 2),
        o("div", Gr, [
          o("button", {
            class: f(["p-2 transition-all duration-200 rounded-full active:scale-90", c.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
            onClick: ue
          }, [
            c.value ? (g(), v("svg", Zr, [...i[13] || (i[13] = [
              ye('<circle cx="12" cy="12" r="5" data-v-d41e64c1></circle><line x1="12" y1="1" x2="12" y2="3" data-v-d41e64c1></line><line x1="12" y1="21" x2="12" y2="23" data-v-d41e64c1></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-d41e64c1></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-d41e64c1></line><line x1="1" y1="12" x2="3" y2="12" data-v-d41e64c1></line><line x1="21" y1="12" x2="23" y2="12" data-v-d41e64c1></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-d41e64c1></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-d41e64c1></line>', 9)
            ])])) : (g(), v("svg", Yr, [...i[14] || (i[14] = [
              o("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
            ])]))
          ], 2),
          o("button", {
            class: f(["p-2 transition-all duration-200 rounded-full active:scale-90", c.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
            onClick: es
          }, [...i[15] || (i[15] = [
            ye('<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-d41e64c1><circle cx="18" cy="5" r="3" data-v-d41e64c1></circle><circle cx="6" cy="12" r="3" data-v-d41e64c1></circle><circle cx="18" cy="19" r="3" data-v-d41e64c1></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-v-d41e64c1></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-v-d41e64c1></line></svg>', 1)
          ])], 2)
        ])
      ], 2),
      l.value ? (g(), v("div", Qr, [
        o("div", {
          class: f(["!hidden md:!block h-5 w-64 rounded mb-8 animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
        }, null, 2),
        o("div", en, [
          o("div", null, [
            o("div", {
              class: f(["block md:!hidden h-[400px] w-full rounded-2xl mb-6 animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
            }, null, 2),
            o("div", {
              class: f(["!hidden md:!block h-[600px] w-full rounded-3xl mb-8 animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
            }, null, 2),
            o("div", tn, [
              o("div", {
                class: f(["h-8 w-3/4 rounded-lg animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
              }, null, 2),
              o("div", {
                class: f(["h-6 w-1/2 rounded-lg animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
              }, null, 2)
            ])
          ]),
          o("div", {
            class: f(["!hidden lg:!block h-[500px] rounded-3xl animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
          }, null, 2)
        ])
      ])) : a.value && a.value.id ? (g(), v("div", sn, [
        o("nav", rn, [
          o("div", {
            class: f(["flex items-center gap-2", c.value ? "text-slate-400" : "text-slate-500"])
          }, [
            o("span", {
              class: "hover:text-blue-500 transition-colors cursor-pointer",
              onClick: ve
            }, "Home"),
            i[17] || (i[17] = oe()),
            i[18] || (i[18] = o("span", { class: "opacity-30" }, "/", -1)),
            (g(!0), v(U, null, M(a.value.category, (h, _) => (g(), v("span", {
              key: _,
              class: "flex items-center gap-2"
            }, [
              o("span", nn, R(h), 1),
              i[16] || (i[16] = o("span", { class: "opacity-30" }, "/", -1))
            ]))), 128)),
            o("span", {
              class: f(["font-medium truncate max-w-[200px]", c.value ? "text-slate-200" : "text-slate-900"])
            }, R(a.value.title), 3)
          ], 2),
          o("button", {
            class: f(["group flex items-center gap-2 px-4 py-2 rounded-full transition-all border shadow-sm hover:shadow-md active:scale-95", c.value ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"]),
            onClick: ue
          }, [
            o("div", on, [
              c.value ? (g(), v("svg", an, [...i[19] || (i[19] = [
                ye('<circle cx="12" cy="12" r="5" data-v-d41e64c1></circle><line x1="12" y1="1" x2="12" y2="3" data-v-d41e64c1></line><line x1="12" y1="21" x2="12" y2="23" data-v-d41e64c1></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-d41e64c1></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-d41e64c1></line><line x1="1" y1="12" x2="3" y2="12" data-v-d41e64c1></line><line x1="21" y1="12" x2="23" y2="12" data-v-d41e64c1></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-d41e64c1></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-d41e64c1></line>', 9)
              ])])) : (g(), v("svg", ln, [...i[20] || (i[20] = [
                o("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
              ])]))
            ]),
            o("span", cn, R(c.value ? "Dark Mode" : "Light Mode"), 1)
          ], 2)
        ]),
        o("header", dn, [
          o("div", un, [
            o("span", {
              class: f(["px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border shadow-sm", c.value ? "bg-amber-900/30 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-700 border-amber-100"])
            }, "Bestseller", 2),
            te.value > 0 ? (g(), v("span", fn, "-" + R(te.value) + "% Sale", 1)) : H("", !0)
          ]),
          o("h1", {
            class: f(["text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4 tracking-tight", c.value ? "text-white" : "text-slate-900"])
          }, R(a.value.title), 3),
          o("div", {
            class: f(["flex items-center gap-4 text-sm font-medium", c.value ? "text-slate-400" : "text-slate-500"])
          }, [
            o("div", pn, [
              o("span", hn, [
                (g(), v(U, null, M(5, (h) => o("svg", {
                  key: h,
                  class: f(["w-4 h-4", h <= Math.round(ce.value.average_rating) ? "fill-current" : "fill-gray-300"]),
                  viewBox: "0 0 20 20"
                }, [...i[21] || (i[21] = [
                  o("path", { d: `M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 \r
          0 1.371 1.24.588 1.81l-2.8 \r
          2.034a1 1 0 00-.364 1.118l1.07 \r
          3.292c.3.921-.755 1.688-1.54 \r
          1.118l-2.8-2.034a1 1 0 \r
          00-1.175 0l-2.8 \r
          2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 \r
          1 0 00-.364-1.118L2.98 \r
          8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 \r
          1 0 00.951-.69l1.07-3.292z` }, null, -1)
                ])], 2)), 64))
              ]),
              o("span", {
                class: f(["font-bold ml-1", c.value ? "text-white" : "text-slate-900"])
              }, R(ce.value.average_rating.toFixed(1)), 3),
              o("a", {
                href: "#reviews",
                class: f(["ml-2 border-b border-dotted hover:text-blue-500 hover:border-blue-500 transition-colors", c.value ? "border-slate-600" : "border-slate-400"])
              }, R(ce.value.total_reviews) + " reviews ", 3)
            ]),
            i[23] || (i[23] = o("span", { class: "opacity-30 text-xl font-light" }, "|", -1)),
            a.value.id ? (g(), v("span", mn, [
              i[22] || (i[22] = oe(" Product: ", -1)),
              o("span", bn, R(a.value.id), 1)
            ])) : H("", !0)
          ], 2),
          a.value.hashtags && a.value.hashtags.length ? (g(), v("div", xn, [
            (g(!0), v(U, null, M(a.value.hashtags, (h, _) => (g(), v("span", {
              key: _,
              class: f(["px-3 py-1 text-xs font-semibold rounded-full border transition-all cursor-pointer hover:shadow-sm", c.value ? "bg-slate-800 text-blue-400 border-slate-700 hover:border-blue-500/50" : "bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100"])
            }, R(h), 3))), 128))
          ])) : H("", !0)
        ]),
        o("div", gn, [
          o("div", vn, [
            o("div", yn, [
              o("div", wn, [
                o("span", {
                  class: f(["px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border", c.value ? "bg-amber-900/30 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-700 border-amber-100"])
                }, "Bestseller", 2),
                te.value > 0 ? (g(), v("span", _n, "-" + R(te.value) + "%", 1)) : H("", !0)
              ]),
              o("h1", {
                class: f(["text-[26px] font-bold leading-[1.2] mb-3 tracking-tight", c.value ? "text-white" : "text-slate-900"])
              }, R(a.value.title), 3),
              o("div", kn, [
                (g(), v(U, null, M(5, (h) => o("svg", {
                  key: h,
                  class: f(["w-3.5 h-3.5", h <= Math.round(ce.value.average_rating) ? "fill-current" : "fill-gray-300"]),
                  viewBox: "0 0 20 20"
                }, [...i[24] || (i[24] = [
                  o("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
                ])], 2)), 64)),
                o("span", En, R(ce.value.average_rating.toFixed(1)), 1),
                o("span", Sn, " (" + R(ce.value.total_reviews) + " reviews) ", 1)
              ]),
              a.value.hashtags && a.value.hashtags.length ? (g(), v("div", Rn, [
                (g(!0), v(U, null, M(a.value.hashtags, (h, _) => (g(), v("span", {
                  key: _,
                  class: f(["px-2.5 py-1 text-[11px] font-semibold rounded-full border whitespace-nowrap", c.value ? "bg-slate-800 text-blue-400 border-slate-700" : "bg-blue-50 text-blue-600 border-blue-100"])
                }, R(h), 3))), 128))
              ])) : H("", !0)
            ]),
            o("div", Cn, [
              o("div", On, [
                o("div", Tn, [
                  o("div", An, [
                    (g(!0), v(U, null, M(F.value, (h, _) => (g(), v("div", {
                      key: _,
                      class: f(["w-[80px] h-[100px] rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 relative border", [
                        c.value ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100",
                        d.value === h ? "ring-2 ring-blue-500 ring-offset-2 " + (c.value ? "ring-offset-slate-900" : "ring-offset-white") : "hover:opacity-80 opacity-70 hover:opacity-100"
                      ]]),
                      onMouseover: (L) => d.value = h
                    }, [
                      o("img", {
                        src: h,
                        class: "w-full h-full object-cover"
                      }, null, 8, Fn)
                    ], 42, Nn))), 128))
                  ]),
                  o("div", {
                    class: f(["flex-1 rounded-[32px] flex items-center justify-center overflow-hidden cursor-zoom-in relative shadow-sm border", c.value ? "bg-slate-800/50 border-slate-700" : "bg-white border-slate-100"])
                  }, [
                    o("img", {
                      src: d.value,
                      class: "max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-110"
                    }, null, 8, Bn),
                    o("div", Ln, [
                      o("button", {
                        class: "p-2 rounded-full bg-white/90 shadow-md text-slate-700 hover:text-blue-600 dark:bg-slate-800/90 dark:text-slate-200",
                        onClick: ts
                      }, [
                        (g(), v("svg", {
                          fill: b.value ? "currentColor" : "none",
                          class: f(b.value ? "text-rose-500" : ""),
                          width: "20",
                          height: "20",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [...i[25] || (i[25] = [
                          o("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          }, null, -1)
                        ])], 10, Pn))
                      ])
                    ])
                  ], 2)
                ]),
                o("div", {
                  class: f(["md:!hidden relative w-full pb-6 transition-colors duration-300", c.value ? "bg-[#0f172a]" : "bg-[#F9FAFB]"])
                }, [
                  o("div", {
                    class: "flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full h-[100vw] max-h-[500px]",
                    onScroll: ns
                  }, [
                    (g(!0), v(U, null, M(F.value, (h, _) => (g(), v("div", {
                      class: "min-w-full snap-center flex items-center justify-center p-6",
                      key: _
                    }, [
                      o("img", {
                        src: h,
                        class: "max-w-full max-h-full object-contain drop-shadow-xl"
                      }, null, 8, $n)
                    ]))), 128))
                  ], 32),
                  o("div", {
                    class: f(["absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md z-10 border", c.value ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"])
                  }, [
                    (g(!0), v(U, null, M(F.value, (h, _) => (g(), v("span", {
                      key: _,
                      class: f(["h-1.5 rounded-full transition-all duration-300 shadow-sm", m.value === _ ? c.value ? "bg-white w-4" : "bg-slate-800 w-4" : c.value ? "bg-white/30 w-1.5" : "bg-slate-800/30 w-1.5"])
                    }, null, 2))), 128))
                  ], 2)
                ], 2)
              ]),
              o("div", jn, [
                o("div", {
                  class: f(["md:!hidden pb-6 border-b", c.value ? "border-slate-800" : "border-slate-200"])
                }, [
                  o("div", In, [
                    o("span", zn, R(G(q.value)) + " ₽", 1),
                    K.value > q.value ? (g(), v("span", Un, R(G(K.value)) + " ₽", 1)) : H("", !0)
                  ]),
                  o("div", {
                    class: f(["inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg border shadow-sm", c.value ? "bg-emerald-900/20 text-emerald-400 border-emerald-900/30" : "bg-emerald-50 text-emerald-700 border-emerald-100"])
                  }, [
                    o("span", null, R(G(de.value)) + " ₽", 1),
                    i[26] || (i[26] = oe(" with Ozon Card ", -1))
                  ], 2)
                ], 2),
                X.value.length ? (g(), v("div", Mn, [
                  o("div", {
                    class: f(["text-sm font-medium mb-3 flex items-center gap-2", c.value ? "text-slate-400" : "text-slate-500"])
                  }, [
                    i[27] || (i[27] = o("span", null, "Color:", -1)),
                    o("span", {
                      class: f(["font-bold text-base", c.value ? "text-white" : "text-slate-900"])
                    }, R(x.value), 3)
                  ], 2),
                  o("div", Dn, [
                    (g(!0), v(U, null, M(X.value, (h) => (g(), v("div", {
                      key: h.id,
                      class: f(["relative w-[72px] h-[90px] rounded-xl cursor-pointer overflow-hidden transition-all duration-200 group border", [
                        c.value ? "border-slate-700" : "border-slate-200",
                        x.value === h.name ? "ring-2 ring-blue-500 ring-offset-2 " + (c.value ? "ring-offset-slate-900" : "ring-offset-white") : "hover:opacity-80"
                      ]]),
                      onClick: (_) => nt(h)
                    }, [
                      h.url ? (g(), v("img", {
                        key: 0,
                        src: h.url,
                        class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      }, null, 8, Hn)) : (g(), v("span", {
                        key: 1,
                        class: f(["flex w-full h-full items-center justify-center p-1 text-center text-xs leading-tight font-medium", c.value ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"])
                      }, R(h.name), 3)),
                      x.value === h.name ? (g(), v("div", Jn, [...i[28] || (i[28] = [
                        o("div", { class: "bg-blue-600 rounded-full p-1 shadow-lg animate-[slideUp_0.2s_ease-out]" }, [
                          o("svg", {
                            class: "w-3.5 h-3.5 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "3.5"
                          }, [
                            o("path", { d: "M5 13l4 4L19 7" })
                          ])
                        ], -1)
                      ])])) : H("", !0)
                    ], 10, qn))), 128))
                  ])
                ])) : H("", !0),
                ae.value.length ? (g(), v("div", Vn, [
                  o("div", Wn, [
                    o("span", {
                      class: f(["text-sm font-medium flex items-center gap-2", c.value ? "text-slate-400" : "text-slate-500"])
                    }, [
                      i[29] || (i[29] = o("span", null, "Size:", -1)),
                      o("span", {
                        class: f(["font-bold text-base", c.value ? "text-white" : "text-slate-900"])
                      }, R(p.value), 3)
                    ], 2),
                    le.value ? (g(), v("button", {
                      key: 0,
                      class: f(["text-xs font-bold flex items-center gap-1.5 transition hover:opacity-70 px-2 py-1 rounded-md", c.value ? "text-blue-400 bg-blue-400/10" : "text-blue-600 bg-blue-50"]),
                      onClick: i[0] || (i[0] = (h) => k.value = !0)
                    }, [...i[30] || (i[30] = [
                      o("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        o("path", { d: "M19.5 12h-15M19.5 12l-4-4m4 4l-4 4" })
                      ], -1),
                      oe(" Size Chart ", -1)
                    ])], 2)) : H("", !0)
                  ]),
                  o("div", Xn, [
                    (g(!0), v(U, null, M(ae.value, (h) => (g(), v("button", {
                      key: h,
                      class: f(["h-12 min-w-[3.5rem] px-4 rounded-xl text-sm font-semibold transition-all duration-200 border relative overflow-hidden", [
                        p.value === h ? c.value ? "bg-slate-800 border-blue-500 text-blue-400 ring-1 ring-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]" : "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200" : c.value ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-500" : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      ]]),
                      onClick: (_) => p.value = h
                    }, R(h), 11, Kn))), 128))
                  ])
                ])) : H("", !0),
                o("div", {
                  class: f(["!hidden lg:!block p-6 rounded-2xl border transition-colors duration-300", c.value ? "bg-slate-800/40 border-slate-700" : "bg-slate-50/50 border-slate-200/60"])
                }, [
                  o("h3", {
                    class: f(["text-xs font-bold mb-4 uppercase tracking-wider opacity-60", c.value ? "text-white" : "text-slate-900"])
                  }, "Key Features", 2),
                  o("ul", Gn, [
                    (g(!0), v(U, null, M(W.value.slice(0, 5), (h, _) => (g(), v("li", {
                      key: _,
                      class: f(["text-sm flex justify-between items-start border-b pb-2 last:border-0 border-dashed", c.value ? "border-slate-700/50" : "border-slate-200"])
                    }, [
                      o("span", {
                        class: f(c.value ? "text-slate-400" : "text-slate-500")
                      }, R(h.name), 3),
                      o("span", {
                        class: f(["font-medium text-right max-w-[60%]", c.value ? "text-slate-200" : "text-slate-900"])
                      }, R(h.value), 3)
                    ], 2))), 128))
                  ]),
                  o("button", {
                    class: f(["text-sm font-bold flex items-center gap-1 transition hover:opacity-70 group", c.value ? "text-blue-400" : "text-blue-600"]),
                    onClick: rs
                  }, [...i[31] || (i[31] = [
                    oe(" View all characteristics ", -1),
                    o("svg", {
                      class: "group-hover:translate-x-1 transition-transform",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      o("path", { d: "M6 9l6 6 6-6" })
                    ], -1)
                  ])], 2)
                ], 2)
              ])
            ]),
            o("div", {
              class: f(["px-4 lg:px-0 mt-16 pt-10 border-t", c.value ? "border-slate-800" : "border-slate-200"])
            }, [
              o("h2", {
                class: f(["text-2xl font-bold mb-6 tracking-tight", c.value ? "text-white" : "text-slate-900"])
              }, "Description", 2),
              o("div", {
                class: f(["prose max-w-3xl leading-relaxed mb-12 text-[1.05rem]", c.value ? "prose-invert text-slate-300" : "prose-slate text-slate-600"]),
                innerHTML: re.value
              }, null, 10, Zn),
              o("div", Yn, [
                o("h3", {
                  class: f(["text-2xl font-bold mb-6 tracking-tight", c.value ? "text-white" : "text-slate-900"])
                }, "All Characteristics", 2),
                o("div", {
                  class: f(["rounded-2xl border overflow-hidden", c.value ? "border-slate-800" : "border-slate-200"])
                }, [
                  (g(!0), v(U, null, M(ie.value, (h, _) => (g(), v("div", {
                    class: f(["flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:px-6 transition-colors", [
                      _ % 2 === 0 ? c.value ? "bg-slate-800/30" : "bg-slate-50" : c.value ? "bg-transparent" : "bg-white"
                    ]]),
                    key: _
                  }, [
                    o("span", {
                      class: f(["text-sm mb-1 sm:mb-0 font-medium opacity-80", c.value ? "text-slate-400" : "text-slate-500"])
                    }, R(h.name), 3),
                    o("span", {
                      class: f(["font-semibold text-sm sm:text-right", c.value ? "text-slate-200" : "text-slate-900"])
                    }, R(h.value), 3)
                  ], 2))), 128))
                ], 2),
                W.value.length > 5 ? (g(), v("button", {
                  key: 0,
                  class: f(["mt-6 flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-xl border font-bold text-sm transition-all hover:shadow-md active:scale-[0.98]", c.value ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"]),
                  onClick: i[1] || (i[1] = (h) => T.value = !T.value)
                }, [
                  oe(R(T.value ? "Hide characteristics" : "Show all characteristics") + " ", 1),
                  (g(), v("svg", {
                    class: f([{ "rotate-180": T.value }, "transition-transform duration-300 ml-2"]),
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [...i[32] || (i[32] = [
                    o("path", { d: "M6 9l6 6 6-6" }, null, -1)
                  ])], 2))
                ], 2)) : H("", !0)
              ])
            ], 2),
            o("div", {
              class: f(["px-4 lg:px-0 mt-16 pt-10 border-t", c.value ? "border-slate-800" : "border-slate-200"])
            }, [
              o("h2", {
                class: f(["text-2xl font-bold mb-6 tracking-tight", c.value ? "text-white" : "text-slate-900"])
              }, "Questions and Answers", 2),
              o("div", {
                class: f(["rounded-2xl border overflow-hidden divide-y", c.value ? "border-slate-800 divide-slate-800" : "border-slate-200 divide-slate-100"])
              }, [
                (g(!0), v(U, null, M(I.value, (h, _) => (g(), v("div", { key: _ }, [
                  o("button", {
                    class: f(["w-full py-5 px-6 flex justify-between items-center cursor-pointer group text-left transition-colors", c.value ? "bg-[#0f172a] hover:bg-slate-800" : "bg-white hover:bg-slate-50"]),
                    onClick: (L) => ss(_)
                  }, [
                    o("span", {
                      class: f(["font-semibold text-base transition-colors group-hover:text-blue-500", c.value ? "text-slate-200" : "text-slate-900"])
                    }, R(h.question), 3),
                    o("div", {
                      class: f(["p-1 rounded-full border transition-all", [
                        h.isOpen ? "rotate-180 bg-blue-500 text-white border-blue-500" : c.value ? "border-slate-700 text-slate-500" : "border-slate-200 text-slate-400"
                      ]])
                    }, [...i[33] || (i[33] = [
                      o("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        o("path", { d: "M6 9l6 6 6-6" })
                      ], -1)
                    ])], 2)
                  ], 10, Qn),
                  Me(o("div", {
                    class: f(["px-6 pb-6 pt-2 text-[15px] leading-relaxed animate-[fadeIn_0.2s_ease-out]", c.value ? "bg-[#0f172a] text-slate-400" : "bg-white text-slate-600"])
                  }, [
                    o("p", null, R(h.answer), 1)
                  ], 2), [
                    [De, h.isOpen]
                  ])
                ]))), 128))
              ], 2)
            ], 2),
            o("div", {
              class: f(["px-4 lg:px-0 mt-16 mb-24 pt-10 border-t", c.value ? "border-slate-800" : "border-slate-200"]),
              id: "reviews"
            }, [
              o("div", eo, [
                o("h2", {
                  class: f(["text-2xl font-bold flex items-center gap-3", c.value ? "text-white" : "text-slate-900"])
                }, [
                  i[34] || (i[34] = oe(" Reviews ", -1)),
                  o("span", {
                    class: f(["text-sm font-bold px-3 py-1 rounded-full", c.value ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"])
                  }, R(y.value.length), 3)
                ], 2)
              ]),
              A.value ? (g(), v("div", to, [
                (g(), v(U, null, M(2, (h) => o("div", {
                  key: h,
                  class: f(["h-[150px] rounded-2xl animate-shimmer", c.value ? "bg-slate-800" : "bg-slate-100"])
                }, null, 2)), 64))
              ])) : y.value.length > 0 ? (g(), v("div", so, [
                (g(!0), v(U, null, M(y.value, (h, _) => (g(), v("div", {
                  class: f(["p-6 rounded-2xl border transition-all hover:shadow-lg duration-300", c.value ? "bg-slate-800/30 border-slate-700 hover:bg-slate-800" : "bg-white border-slate-100 shadow-sm hover:shadow-md"]),
                  key: _
                }, [
                  o("div", ro, [
                    o("div", no, [
                      o("div", {
                        class: "w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm shadow-md",
                        style: cs(`background:${h.color}`)
                      }, R(h.name ? h.name[0] : "U"), 5),
                      o("div", null, [
                        o("div", {
                          class: f(["font-bold text-sm", c.value ? "text-white" : "text-slate-900"])
                        }, R(h.name), 3),
                        i[35] || (i[35] = o("div", { class: "text-amber-500 text-xs tracking-wide flex" }, "★★★★★", -1))
                      ])
                    ]),
                    o("span", {
                      class: f(["text-xs font-medium opacity-60", c.value ? "text-slate-400" : "text-slate-500"])
                    }, R(h.date), 3)
                  ]),
                  o("div", {
                    class: f(["text-[15px] leading-relaxed mb-4", c.value ? "text-slate-300" : "text-slate-600"])
                  }, R(h.text), 3),
                  o("div", {
                    class: f(["inline-block text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border", c.value ? "bg-slate-800 text-slate-400 border-slate-700" : "bg-slate-50 text-slate-500 border-slate-100"])
                  }, " Var: " + R(x.value) + " • Size: " + R(p.value || "M"), 3)
                ], 2))), 128))
              ])) : (g(), v("div", {
                key: 2,
                class: f(["flex flex-col items-center justify-center py-12 px-4 rounded-3xl border-2 border-dashed", c.value ? "border-slate-800 bg-slate-800/20" : "border-slate-200 bg-slate-50"])
              }, [
                i[36] || (i[36] = o("span", { class: "text-4xl mb-4" }, "💬", -1)),
                o("h4", {
                  class: f(["font-bold text-lg mb-1", c.value ? "text-white" : "text-slate-900"])
                }, "No reviews yet", 2),
                o("p", {
                  class: f(["text-sm text-center max-w-sm mb-6", c.value ? "text-slate-400" : "text-slate-500"])
                }, "Be the first to share your thoughts and help others make a decision!", 2),
                o("button", {
                  class: f(["px-6 py-2.5 rounded-xl font-bold text-sm transition-all", c.value ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-white border text-slate-900 shadow-sm hover:bg-slate-50"])
                }, " Write a Review ", 2)
              ], 2))
            ], 2)
          ]),
          o("div", oo, [
            o("div", {
              class: f(["sticky top-24 p-6 rounded-[32px] border transition-colors duration-300", c.value ? "bg-[#151e32] border-slate-700 ring-1 ring-white/5 shadow-2xl shadow-black/20" : "bg-white border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"])
            }, [
              o("div", ao, [
                o("div", null, [
                  o("div", lo, [
                    o("div", io, R(G(q.value)) + " ₽", 1),
                    K.value > q.value ? (g(), v("span", co, R(G(K.value)) + " ₽", 1)) : H("", !0)
                  ]),
                  o("div", {
                    class: f(["mt-3 inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg border", c.value ? "bg-emerald-900/20 text-emerald-400 border-emerald-900/30" : "bg-emerald-50 text-emerald-700 border-emerald-100"])
                  }, [
                    i[37] || (i[37] = o("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 24 24",
                      fill: "currentColor"
                    }, [
                      o("path", {
                        d: "M2 7h20v10H2z",
                        opacity: "0.3"
                      }),
                      o("path", { d: "M17 12h2" }),
                      o("path", { d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zm2 0v10h16V7H4z" })
                    ], -1)),
                    o("span", null, R(G(de.value)) + " ₽ with Ozon Card", 1)
                  ], 2)
                ])
              ]),
              o("div", {
                class: f(["space-y-5 mb-8 pt-6 border-t", c.value ? "border-slate-700" : "border-slate-100"])
              }, [
                o("div", uo, [
                  o("div", {
                    class: f(["w-10 h-10 rounded-full flex items-center justify-center text-lg transition-transform", c.value ? "bg-slate-800" : "bg-blue-50"])
                  }, "📍", 2),
                  o("div", null, [
                    o("div", {
                      class: f(["font-bold mb-0.5", c.value ? "text-slate-200" : "text-slate-900"])
                    }, "Global Delivery", 2),
                    o("div", {
                      class: f(["text-xs", c.value ? "text-slate-400" : "text-slate-500"])
                    }, "To anywhere in Russia", 2)
                  ])
                ]),
                o("div", fo, [
                  o("div", {
                    class: f(["w-10 h-10 rounded-full flex items-center justify-center text-lg transition-transform", c.value ? "bg-slate-800" : "bg-green-50"])
                  }, "🚚", 2),
                  o("div", null, [
                    o("div", {
                      class: f(["text-s mt-2", c.value ? "text-green-400" : "text-green-600"])
                    }, "Free courier delivery", 2)
                  ])
                ])
              ], 2),
              o("div", po, [
                se.value > 0 ? (g(), v("div", {
                  key: 0,
                  class: f(["w-full h-[56px] flex items-center justify-between rounded-2xl px-2 border transition-all", c.value ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"])
                }, [
                  o("button", {
                    onClick: i[2] || (i[2] = (h) => ne(-1)),
                    disabled: O.value,
                    class: f(["w-12 h-12 flex items-center justify-center rounded-xl transition-all active:scale-95 disabled:opacity-50", c.value ? "bg-slate-700 text-white hover:bg-slate-600" : "bg-white text-slate-800 shadow-sm hover:bg-slate-50"])
                  }, [...i[38] || (i[38] = [
                    o("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2.5"
                    }, [
                      o("line", {
                        x1: "5",
                        y1: "12",
                        x2: "19",
                        y2: "12"
                      })
                    ], -1)
                  ])], 10, ho),
                  o("div", mo, [
                    o("span", {
                      class: f(["font-bold text-lg leading-none", c.value ? "text-white" : "text-slate-900"])
                    }, R(se.value), 3),
                    o("span", {
                      class: f(["text-[10px] font-semibold uppercase tracking-wider opacity-60", c.value ? "text-slate-300" : "text-slate-500"])
                    }, "In Cart", 2)
                  ]),
                  o("button", {
                    onClick: i[3] || (i[3] = (h) => ne(1)),
                    disabled: O.value,
                    class: f(["w-12 h-12 flex items-center justify-center rounded-xl text-white shadow-sm transition-all active:scale-95 disabled:opacity-50", (c.value, "bg-blue-600 hover:bg-blue-500")])
                  }, [
                    O.value ? (g(), v("svg", xo, [...i[39] || (i[39] = [
                      o("circle", {
                        class: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        "stroke-width": "4"
                      }, null, -1),
                      o("path", {
                        class: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      }, null, -1)
                    ])])) : (g(), v("svg", go, [...i[40] || (i[40] = [
                      o("line", {
                        x1: "12",
                        y1: "5",
                        x2: "12",
                        y2: "19"
                      }, null, -1),
                      o("line", {
                        x1: "5",
                        y1: "12",
                        x2: "19",
                        y2: "12"
                      }, null, -1)
                    ])]))
                  ], 10, bo)
                ], 2)) : (g(), v("button", {
                  key: 1,
                  class: "w-full h-[56px] bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-[0.98] flex items-center justify-center gap-2 text-[15px]",
                  onClick: i[4] || (i[4] = (h) => ne(1)),
                  disabled: O.value
                }, [
                  O.value ? (g(), v("svg", yo, [...i[41] || (i[41] = [
                    o("circle", {
                      class: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      "stroke-width": "4"
                    }, null, -1),
                    o("path", {
                      class: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    }, null, -1)
                  ])])) : (g(), v("span", wo, "Add to Cart"))
                ], 8, vo)),
                o("button", {
                  onClick: Ue,
                  disabled: O.value,
                  class: f(["w-full h-[56px] font-bold rounded-2xl transition-all duration-300 border active:scale-[0.98] cursor-pointer disabled:opacity-50", c.value ? "bg-transparent hover:bg-slate-800 text-white border-slate-600 hover:border-slate-500" : "bg-white hover:bg-slate-50 text-slate-900 border-slate-200 hover:border-slate-300"])
                }, " Buy Now ", 10, _o)
              ]),
              o("div", {
                class: f(["mt-8 pt-6 border-t flex items-center gap-3", c.value ? "border-slate-700" : "border-slate-100"])
              }, [
                o("div", {
                  class: f(["w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-md text-lg", c.value ? "bg-slate-700" : "bg-slate-900"])
                }, R(a.value.brand ? a.value.brand[0] : "B"), 3),
                o("div", null, [
                  o("div", {
                    class: f(["font-bold text-sm mb-0.5", c.value ? "text-white" : "text-slate-900"])
                  }, R(a.value.brand), 3),
                  o("div", {
                    class: f(["text-xs flex items-center gap-1", c.value ? "text-slate-400" : "text-slate-500"])
                  }, [...i[42] || (i[42] = [
                    o("span", { class: "text-amber-500" }, "★★★★★", -1),
                    oe(" 4.9 • Official Seller ", -1)
                  ])], 2)
                ])
              ], 2)
            ], 2)
          ])
        ]),
        o("div", {
          class: f(["mt-2 pt-1 border-t px-4 lg:px-0", c.value ? "border-slate-800" : "border-slate-200"])
        }, [
          o("div", {
            class: "mt-12 w-full min-h-[250px] custom-widget-scroll",
            onWheel: as
          }, [
            E.value ? (g(), v("div", {
              key: 0,
              innerHTML: E.value
            }, null, 8, ko)) : (g(), v("div", Eo, [
              o("div", {
                class: f(["w-[200px] h-[300px] rounded-2xl shrink-0", c.value ? "bg-slate-800" : "bg-slate-100"])
              }, null, 2),
              o("div", {
                class: f(["w-[200px] h-[300px] rounded-2xl shrink-0", c.value ? "bg-slate-800" : "bg-slate-100"])
              }, null, 2),
              o("div", {
                class: f(["w-[200px] h-[300px] rounded-2xl shrink-0 hidden md:block", c.value ? "bg-slate-800" : "bg-slate-100"])
              }, null, 2)
            ]))
          ], 32)
        ], 2),
        o("div", {
          class: f(["fixed bottom-0 left-0 right-0 backdrop-blur-xl border-t p-4 pb-[max(16px,env(safe-area-inset-bottom))] flex items-center justify-between gap-4 z-50 md:!hidden shadow-[0_-4px_30px_rgba(0,0,0,0.1)] transition-transform duration-300", c.value ? "bg-[#0f172a]/90 border-slate-800" : "bg-white/90 border-slate-200"])
        }, [
          o("div", So, [
            o("span", {
              class: f(["text-xl font-extrabold leading-none tracking-tight", c.value ? "text-white" : "text-slate-900"])
            }, R(G(q.value)) + " ₽", 3),
            K.value > q.value ? (g(), v("span", Ro, R(G(K.value)), 1)) : H("", !0)
          ]),
          se.value > 0 ? (g(), v("div", {
            key: 0,
            class: f(["flex-1 h-12 flex items-center justify-between rounded-xl px-1 border", c.value ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"])
          }, [
            o("button", {
              onClick: i[5] || (i[5] = (h) => ne(-1)),
              disabled: O.value,
              class: f(["w-10 h-10 flex items-center justify-center rounded-lg disabled:opacity-50", c.value ? "bg-slate-700 text-white" : "bg-white text-slate-800 shadow-sm"])
            }, [...i[43] || (i[43] = [
              o("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5"
              }, [
                o("line", {
                  x1: "5",
                  y1: "12",
                  x2: "19",
                  y2: "12"
                })
              ], -1)
            ])], 10, Co),
            o("span", {
              class: f(["font-bold text-[15px]", c.value ? "text-white" : "text-slate-900"])
            }, R(se.value) + " in Cart", 3),
            o("button", {
              onClick: i[6] || (i[6] = (h) => ne(1)),
              disabled: O.value,
              class: "w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm disabled:opacity-50"
            }, [
              O.value ? (g(), v("svg", To, [...i[44] || (i[44] = [
                o("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }, null, -1),
                o("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }, null, -1)
              ])])) : (g(), v("svg", Ao, [...i[45] || (i[45] = [
                o("line", {
                  x1: "12",
                  y1: "5",
                  x2: "12",
                  y2: "19"
                }, null, -1),
                o("line", {
                  x1: "5",
                  y1: "12",
                  x2: "19",
                  y2: "12"
                }, null, -1)
              ])]))
            ], 8, Oo)
          ], 2)) : (g(), v("button", {
            key: 1,
            class: "flex-1 h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base shadow-lg shadow-blue-500/40 active:scale-95 transition-all flex justify-center items-center gap-2 disabled:opacity-50",
            onClick: i[7] || (i[7] = (h) => ne(1)),
            disabled: O.value
          }, [
            O.value ? (g(), v("svg", Fo, [...i[46] || (i[46] = [
              o("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }, null, -1),
              o("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }, null, -1)
            ])])) : (g(), v("span", Bo, "Add to Cart"))
          ], 8, No))
        ], 2)
      ])) : (g(), v("div", {
        key: 2,
        class: f(["min-h-[60vh] flex flex-col items-center justify-center font-medium opacity-60", c.value ? "text-slate-400" : "text-slate-500"])
      }, [
        o("div", {
          class: f(["p-4 rounded-full mb-4", c.value ? "bg-slate-800" : "bg-slate-100"])
        }, [...i[47] || (i[47] = [
          ye('<svg class="w-12 h-12 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-d41e64c1><circle cx="12" cy="12" r="10" data-v-d41e64c1></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2" data-v-d41e64c1></path><line x1="9" y1="9" x2="9.01" y2="9" data-v-d41e64c1></line><line x1="15" y1="9" x2="15.01" y2="9" data-v-d41e64c1></line></svg>', 1)
        ])], 2),
        i[48] || (i[48] = o("span", { class: "text-lg" }, "Product Not Found", -1))
      ], 2)),
      k.value ? (g(), v("div", {
        key: 3,
        class: "fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 p-0 sm:p-4 md:p-6",
        onClick: i[11] || (i[11] = is((h) => k.value = !1, ["self"]))
      }, [
        o("div", Lo, [
          i[68] || (i[68] = o("div", { class: "w-full flex justify-center pt-4 pb-1 md:hidden" }, [
            o("div", { class: "w-12 h-1.5 bg-gray-300 dark:bg-slate-700 rounded-full" })
          ], -1)),
          o("div", Po, [
            o("div", $o, [
              o("h2", {
                class: f(["text-xl font-bold", c.value ? "text-white" : "text-gray-900"])
              }, "Size Guide", 2),
              o("button", {
                onClick: i[8] || (i[8] = (h) => k.value = !1),
                class: "p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-gray-200 rounded-full transition-colors"
              }, [...i[49] || (i[49] = [
                o("svg", {
                  class: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  o("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])])
            ]),
            o("div", jo, [
              o("button", {
                onClick: i[9] || (i[9] = (h) => C.value = "chart"),
                class: f(["pb-3 text-sm font-bold tracking-wide uppercase border-b-2 transition-colors", C.value === "chart" ? "border-[#FF3E6C] text-[#FF3E6C]" : "border-transparent text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white"])
              }, " Size Chart ", 2),
              o("button", {
                onClick: i[10] || (i[10] = (h) => C.value = "measure"),
                class: f(["pb-3 text-sm font-bold tracking-wide uppercase border-b-2 transition-colors", C.value === "measure" ? "border-[#FF3E6C] text-[#FF3E6C]" : "border-transparent text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white"])
              }, " How to Measure ", 2)
            ])
          ]),
          o("div", Io, [
            Me(o("div", zo, [
              le.value ? (g(), v("div", Uo, [
                o("img", {
                  src: le.value,
                  class: "max-w-full h-auto object-contain mix-blend-multiply dark:mix-blend-normal"
                }, null, 8, Mo)
              ])) : (g(), v("div", Do, [
                o("div", qo, [
                  o("span", {
                    class: f(["text-xs font-medium", c.value ? "text-slate-400" : "text-gray-500"])
                  }, [...i[50] || (i[50] = [
                    oe(" Measurements in ", -1),
                    o("span", { class: "font-semibold text-[#FF3E6C]" }, "Inches", -1)
                  ])], 2)
                ]),
                o("div", Ho, [
                  o("table", Jo, [
                    o("thead", null, [
                      o("tr", {
                        class: f(c.value ? "border-b border-slate-700" : "border-b-2 border-gray-100")
                      }, [
                        o("th", {
                          class: f(["py-4 px-4 font-medium text-xs text-left", c.value ? "text-slate-400" : "text-gray-500"])
                        }, "SIZE", 2),
                        o("th", {
                          class: f(["py-4 px-4 font-medium text-xs", c.value ? "text-slate-400" : "text-gray-500"])
                        }, "CHEST", 2),
                        o("th", {
                          class: f(["py-4 px-4 font-medium text-xs", c.value ? "text-slate-400" : "text-gray-500"])
                        }, "LENGTH", 2),
                        o("th", {
                          class: f(["py-4 px-4 font-medium text-xs", c.value ? "text-slate-400" : "text-gray-500"])
                        }, "SHOULDER", 2)
                      ], 2)
                    ]),
                    o("tbody", {
                      class: f(c.value ? "text-slate-300" : "text-gray-700")
                    }, [
                      o("tr", {
                        class: f(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        o("td", {
                          class: f(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "S", 2),
                        i[51] || (i[51] = o("td", { class: "py-4 px-4" }, "38.0", -1)),
                        i[52] || (i[52] = o("td", { class: "py-4 px-4" }, "27.0", -1)),
                        i[53] || (i[53] = o("td", { class: "py-4 px-4" }, "16.0", -1))
                      ], 2),
                      o("tr", {
                        class: f(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        o("td", {
                          class: f(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "M", 2),
                        i[54] || (i[54] = o("td", { class: "py-4 px-4" }, "40.0", -1)),
                        i[55] || (i[55] = o("td", { class: "py-4 px-4" }, "27.5", -1)),
                        i[56] || (i[56] = o("td", { class: "py-4 px-4" }, "16.5", -1))
                      ], 2),
                      o("tr", {
                        class: f(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        o("td", {
                          class: f(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "L", 2),
                        i[57] || (i[57] = o("td", { class: "py-4 px-4" }, "42.0", -1)),
                        i[58] || (i[58] = o("td", { class: "py-4 px-4" }, "28.0", -1)),
                        i[59] || (i[59] = o("td", { class: "py-4 px-4" }, "17.0", -1))
                      ], 2),
                      o("tr", {
                        class: f(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        o("td", {
                          class: f(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "XL", 2),
                        i[60] || (i[60] = o("td", { class: "py-4 px-4" }, "44.0", -1)),
                        i[61] || (i[61] = o("td", { class: "py-4 px-4" }, "28.5", -1)),
                        i[62] || (i[62] = o("td", { class: "py-4 px-4" }, "17.5", -1))
                      ], 2),
                      o("tr", {
                        class: f(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        o("td", {
                          class: f(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "XXL", 2),
                        i[63] || (i[63] = o("td", { class: "py-4 px-4" }, "46.0", -1)),
                        i[64] || (i[64] = o("td", { class: "py-4 px-4" }, "29.0", -1)),
                        i[65] || (i[65] = o("td", { class: "py-4 px-4" }, "18.0", -1))
                      ], 2)
                    ], 2)
                  ])
                ]),
                o("div", {
                  class: f(["mt-6 text-xs font-normal opacity-70 text-left md:text-center pb-4 md:pb-0", c.value ? "text-slate-400" : "text-gray-500"])
                }, " * Garment measurements may vary by ±0.5 inches depending on style and fit. ", 2)
              ]))
            ], 512), [
              [De, C.value === "chart"]
            ]),
            Me(o("div", Vo, [
              o("div", Wo, [
                o("div", Xo, [
                  (g(), v("svg", Ko, [
                    o("path", {
                      d: "M40,50 L80,20 L120,20 L160,50 L180,100 L140,120 L130,90 L130,230 L70,230 L70,90 L60,120 L20,100 Z",
                      stroke: c.value ? "#475569" : "#e2e8f0",
                      "stroke-width": "2",
                      "stroke-linejoin": "round"
                    }, null, 8, Go),
                    o("path", {
                      d: "M80,20 C80,20 100,40 120,20",
                      stroke: c.value ? "#475569" : "#e2e8f0",
                      "stroke-width": "2",
                      "stroke-linecap": "round"
                    }, null, 8, Zo),
                    i[66] || (i[66] = ye('<line x1="60" y1="95" x2="140" y2="95" stroke="#FF3E6C" stroke-width="1.5" stroke-dasharray="4 4" data-v-d41e64c1></line><circle cx="60" cy="95" r="2.5" fill="#FF3E6C" stroke="none" data-v-d41e64c1></circle><circle cx="140" cy="95" r="2.5" fill="#FF3E6C" stroke="none" data-v-d41e64c1></circle><rect x="92" y="87" width="16" height="16" rx="8" fill="#FF3E6C" stroke="none" data-v-d41e64c1></rect><text x="100" y="99" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" stroke="none" data-v-d41e64c1>1</text><line x1="90" y1="35" x2="90" y2="230" stroke="#FF3E6C" stroke-width="1.5" stroke-dasharray="4 4" data-v-d41e64c1></line><circle cx="90" cy="35" r="2.5" fill="#FF3E6C" stroke="none" data-v-d41e64c1></circle><circle cx="90" cy="230" r="2.5" fill="#FF3E6C" stroke="none" data-v-d41e64c1></circle><rect x="82" y="125" width="16" height="16" rx="8" fill="#FF3E6C" stroke="none" data-v-d41e64c1></rect><text x="90" y="137" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" stroke="none" data-v-d41e64c1>2</text><line x1="45" y1="45" x2="155" y2="45" stroke="#FF3E6C" stroke-width="1.5" stroke-dasharray="4 4" data-v-d41e64c1></line><circle cx="45" cy="45" r="2.5" fill="#FF3E6C" stroke="none" data-v-d41e64c1></circle><circle cx="155" cy="45" r="2.5" fill="#FF3E6C" stroke="none" data-v-d41e64c1></circle><rect x="92" y="37" width="16" height="16" rx="8" fill="#FF3E6C" stroke="none" data-v-d41e64c1></rect><text x="100" y="49" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" stroke="none" data-v-d41e64c1>3</text>', 15))
                  ]))
                ]),
                o("div", Yo, [
                  o("div", Qo, [
                    i[67] || (i[67] = o("span", { class: "absolute left-0 top-0.5 flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-semibold bg-[#FF3E6C] text-white" }, "1", -1)),
                    o("h4", {
                      class: f(["font-semibold text-sm mb-1", c.value ? "text-white" : "text-black"])
                    }, "Chest", 2),
                    o("p", {
                      class: f(["text-sm leading-relaxed", c.value ? "text-slate-400" : "text-gray-600"])
                    }, "Measure around the fullest part of your chest, keeping the measuring tape horizontal and comfortably loose.", 2)
                  ]),
                  o("div", ea, [
                    o("span", {
                      class: f(["absolute left-0 top-0.5 flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-semibold", c.value ? "bg-slate-800 text-slate-300" : "bg-gray-100 text-gray-600"])
                    }, "2", 2),
                    o("h4", {
                      class: f(["font-semibold text-sm mb-1", c.value ? "text-white" : "text-black"])
                    }, "Front Length", 2),
                    o("p", {
                      class: f(["text-sm leading-relaxed", c.value ? "text-slate-400" : "text-gray-600"])
                    }, "Measure from the highest point of the shoulder (where the collar meets the shoulder) straight down to the hemline.", 2)
                  ]),
                  o("div", ta, [
                    o("span", {
                      class: f(["absolute left-0 top-0.5 flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-semibold", c.value ? "bg-slate-800 text-slate-300" : "bg-gray-100 text-gray-600"])
                    }, "3", 2),
                    o("h4", {
                      class: f(["font-semibold text-sm mb-1", c.value ? "text-white" : "text-black"])
                    }, "Shoulder", 2),
                    o("p", {
                      class: f(["text-sm leading-relaxed", c.value ? "text-slate-400" : "text-gray-600"])
                    }, "Measure straight across the back from the edge of one shoulder seam to the edge of the other shoulder seam.", 2)
                  ])
                ])
              ])
            ], 512), [
              [De, C.value === "measure"]
            ])
          ])
        ])
      ])) : H("", !0)
    ], 10, Kr));
  }
}), na = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, n] of t)
    s[r] = n;
  return s;
}, oa = /* @__PURE__ */ na(ra, [["__scopeId", "data-v-d41e64c1"]]), aa = /* @__PURE__ */ Rt({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    return (t, s) => (g(), ds(oa, {
      _p: e._p,
      _$p: e._$p,
      _$cb: e._$cb
    }, null, 8, ["_p", "_$p", "_$cb"]));
  }
}), Ca = async (e) => ({
  set: async (t, s) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const n = us(aa, {
      _p: e,
      _$p: t,
      _$cb: s
    }), a = e.f.name("vue-root"), l = {
      r: `<div id="${a}" style="width:100%; height:100%;"></div>`,
      style: "",
      evt: {
        change: () => {
          s?.change({ _$p: t });
        }
      }
    };
    return setTimeout(() => {
      const d = document.getElementById(a);
      d ? n.mount(d) : console.warn(`[Hydrator] Target element #${a} not found.`);
    }, 0), l;
  }
});
export {
  Ca as hydrator,
  Ca as index
};
