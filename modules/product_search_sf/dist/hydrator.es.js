import { i as nr, d as Ne, r as N, o as v, c as E, a as H, w as sr, b as Tt, n as k, e as p, f as it, F as G, g as re, h as Ke, T as lt, j as we, k as Ie, l as De, t as B, m as Me, v as ze, u as or, p as he, q as Se, s as ar, x as ir, y as lr, z as ct, A as ut, B as cr } from "./runtime-dom.esm-bundler-DVVXkj3t.js";
const ur = /* @__PURE__ */ Symbol("");
function dr() {
  return nr(ur);
}
function At(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: fr } = Object.prototype, { getPrototypeOf: tt } = Object, { iterator: Le, toStringTag: $t } = Symbol, Ue = /* @__PURE__ */ ((e) => (t) => {
  const r = fr.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), se = (e) => (e = e.toLowerCase(), (t) => Ue(t) === e), Fe = (e) => (t) => typeof t === e, { isArray: ge } = Array, me = Fe("undefined");
function xe(e) {
  return e !== null && !me(e) && e.constructor !== null && !me(e.constructor) && Q(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Pt = se("ArrayBuffer");
function pr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Pt(e.buffer), t;
}
const hr = Fe("string"), Q = Fe("function"), Nt = Fe("number"), ve = (e) => e !== null && typeof e == "object", mr = (e) => e === !0 || e === !1, Oe = (e) => {
  if (Ue(e) !== "object")
    return !1;
  const t = tt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !($t in e) && !(Le in e);
}, gr = (e) => {
  if (!ve(e) || xe(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, yr = se("Date"), br = se("File"), wr = (e) => !!(e && typeof e.uri < "u"), xr = (e) => e && typeof e.getParts < "u", vr = se("Blob"), _r = se("FileList"), kr = (e) => ve(e) && Q(e.pipe);
function Er() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const dt = Er(), ft = typeof dt.FormData < "u" ? dt.FormData : void 0, Rr = (e) => {
  let t;
  return e && (ft && e instanceof ft || Q(e.append) && ((t = Ue(e)) === "formdata" || // detect form-data instance
  t === "object" && Q(e.toString) && e.toString() === "[object FormData]"));
}, Sr = se("URLSearchParams"), [Cr, Or, Tr, Ar] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(se), $r = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _e(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), ge(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    if (xe(e))
      return;
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let i;
    for (n = 0; n < a; n++)
      i = o[n], t.call(null, e[i], i, e);
  }
}
function Lt(e, t) {
  if (xe(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const de = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ut = (e) => !me(e) && e !== de;
function Xe() {
  const { caseless: e, skipUndefined: t } = Ut(this) && this || {}, r = {}, n = (s, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const a = e && Lt(r, o) || o;
    Oe(r[a]) && Oe(s) ? r[a] = Xe(r[a], s) : Oe(s) ? r[a] = Xe({}, s) : ge(s) ? r[a] = s.slice() : (!t || !me(s)) && (r[a] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && _e(arguments[s], n);
  return r;
}
const Pr = (e, t, r, { allOwnKeys: n } = {}) => (_e(
  t,
  (s, o) => {
    r && Q(s) ? Object.defineProperty(e, o, {
      value: At(s, r),
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
), e), Nr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Lr = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Ur = (e, t, r, n) => {
  let s, o, a;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      a = s[o], (!n || n(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = r !== !1 && tt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Fr = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Br = (e) => {
  if (!e) return null;
  if (ge(e)) return e;
  let t = e.length;
  if (!Nt(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, jr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && tt(Uint8Array)), Ir = (e, t) => {
  const n = (e && e[Le]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Dr = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Mr = se("HTMLFormElement"), zr = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, n, s) {
  return n.toUpperCase() + s;
}), pt = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), qr = se("RegExp"), Ft = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  _e(r, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (n[o] = a || s);
  }), Object.defineProperties(e, n);
}, Hr = (e) => {
  Ft(e, (t, r) => {
    if (Q(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Q(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Vr = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return ge(e) ? n(e) : n(String(e).split(t)), r;
}, Jr = () => {
}, Wr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Kr(e) {
  return !!(e && Q(e.append) && e[$t] === "FormData" && e[Le]);
}
const Xr = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (ve(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (xe(n))
        return n;
      if (!("toJSON" in n)) {
        t[s] = n;
        const o = ge(n) ? [] : {};
        return _e(n, (a, i) => {
          const f = r(a, s + 1);
          !me(f) && (o[i] = f);
        }), t[s] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, Qr = se("AsyncFunction"), Zr = (e) => e && (ve(e) || Q(e)) && Q(e.then) && Q(e.catch), Bt = ((e, t) => e ? setImmediate : t ? ((r, n) => (de.addEventListener(
  "message",
  ({ source: s, data: o }) => {
    s === de && o === r && n.length && n.shift()();
  },
  !1
), (s) => {
  n.push(s), de.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(typeof setImmediate == "function", Q(de.postMessage)), Yr = typeof queueMicrotask < "u" ? queueMicrotask.bind(de) : typeof process < "u" && process.nextTick || Bt, Gr = (e) => e != null && Q(e[Le]), l = {
  isArray: ge,
  isArrayBuffer: Pt,
  isBuffer: xe,
  isFormData: Rr,
  isArrayBufferView: pr,
  isString: hr,
  isNumber: Nt,
  isBoolean: mr,
  isObject: ve,
  isPlainObject: Oe,
  isEmptyObject: gr,
  isReadableStream: Cr,
  isRequest: Or,
  isResponse: Tr,
  isHeaders: Ar,
  isUndefined: me,
  isDate: yr,
  isFile: br,
  isReactNativeBlob: wr,
  isReactNative: xr,
  isBlob: vr,
  isRegExp: qr,
  isFunction: Q,
  isStream: kr,
  isURLSearchParams: Sr,
  isTypedArray: jr,
  isFileList: _r,
  forEach: _e,
  merge: Xe,
  extend: Pr,
  trim: $r,
  stripBOM: Nr,
  inherits: Lr,
  toFlatObject: Ur,
  kindOf: Ue,
  kindOfTest: se,
  endsWith: Fr,
  toArray: Br,
  forEachEntry: Ir,
  matchAll: Dr,
  isHTMLForm: Mr,
  hasOwnProperty: pt,
  hasOwnProp: pt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ft,
  freezeMethods: Hr,
  toObjectSet: Vr,
  toCamelCase: zr,
  noop: Jr,
  toFiniteNumber: Wr,
  findKey: Lt,
  global: de,
  isContextDefined: Ut,
  isSpecCompliantForm: Kr,
  toJSONObject: Xr,
  isAsyncFn: Qr,
  isThenable: Zr,
  setImmediate: Bt,
  asap: Yr,
  isIterable: Gr
};
let S = class jt extends Error {
  static from(t, r, n, s, o, a) {
    const i = new jt(t.message, r || t.code, n, s, o);
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
const en = null;
function Qe(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function It(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function qe(e, t, r) {
  return e ? e.concat(t).map(function(s, o) {
    return s = It(s), !r && o ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function tn(e) {
  return l.isArray(e) && !e.some(Qe);
}
const rn = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Be(e, t, r) {
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
    function(w, b) {
      return !l.isUndefined(b[w]);
    }
  );
  const n = r.metaTokens, s = r.visitor || d, o = r.dots, a = r.indexes, f = (r.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(u) {
    if (u === null) return "";
    if (l.isDate(u))
      return u.toISOString();
    if (l.isBoolean(u))
      return u.toString();
    if (!f && l.isBlob(u))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(u) || l.isTypedArray(u) ? f && typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function d(u, w, b) {
    let T = u;
    if (l.isReactNative(t) && l.isReactNativeBlob(u))
      return t.append(qe(b, w, o), c(u)), !1;
    if (u && !b && typeof u == "object") {
      if (l.endsWith(w, "{}"))
        w = n ? w : w.slice(0, -2), u = JSON.stringify(u);
      else if (l.isArray(u) && tn(u) || (l.isFileList(u) || l.endsWith(w, "[]")) && (T = l.toArray(u)))
        return w = It(w), T.forEach(function($, A) {
          !(l.isUndefined($) || $ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? qe([w], A, o) : a === null ? w : w + "[]",
            c($)
          );
        }), !1;
    }
    return Qe(u) ? !0 : (t.append(qe(b, w, o), c(u)), !1);
  }
  const y = [], O = Object.assign(rn, {
    defaultVisitor: d,
    convertValue: c,
    isVisitable: Qe
  });
  function P(u, w) {
    if (!l.isUndefined(u)) {
      if (y.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      y.push(u), l.forEach(u, function(T, j) {
        (!(l.isUndefined(T) || T === null) && s.call(t, T, l.isString(j) ? j.trim() : j, w, O)) === !0 && P(T, w ? w.concat(j) : [j]);
      }), y.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return P(e), t;
}
function ht(e) {
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
function rt(e, t) {
  this._pairs = [], e && Be(e, this, t);
}
const Dt = rt.prototype;
Dt.append = function(t, r) {
  this._pairs.push([t, r]);
};
Dt.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, ht);
  } : ht;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function nn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Mt(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || nn, s = l.isFunction(r) ? {
    serialize: r
  } : r, o = s && s.serialize;
  let a;
  if (o ? a = o(t, s) : a = l.isURLSearchParams(t) ? t.toString() : new rt(t, s).toString(n), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class mt {
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
const nt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, sn = typeof URLSearchParams < "u" ? URLSearchParams : rt, on = typeof FormData < "u" ? FormData : null, an = typeof Blob < "u" ? Blob : null, ln = {
  isBrowser: !0,
  classes: {
    URLSearchParams: sn,
    FormData: on,
    Blob: an
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, st = typeof window < "u" && typeof document < "u", Ze = typeof navigator == "object" && navigator || void 0, cn = st && (!Ze || ["ReactNative", "NativeScript", "NS"].indexOf(Ze.product) < 0), un = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", dn = st && window.location.href || "http://localhost", fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: st,
  hasStandardBrowserEnv: cn,
  hasStandardBrowserWebWorkerEnv: un,
  navigator: Ze,
  origin: dn
}, Symbol.toStringTag, { value: "Module" })), V = {
  ...fn,
  ...ln
};
function pn(e, t) {
  return Be(e, new V.classes.URLSearchParams(), {
    visitor: function(r, n, s, o) {
      return V.isNode && l.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function hn(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function mn(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let o;
  for (n = 0; n < s; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function zt(e) {
  function t(r, n, s, o) {
    let a = r[o++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a), f = o >= r.length;
    return a = !a && l.isArray(s) ? s.length : a, f ? (l.hasOwnProp(s, a) ? s[a] = [s[a], n] : s[a] = n, !i) : ((!s[a] || !l.isObject(s[a])) && (s[a] = []), t(r, n, s[a], o) && l.isArray(s[a]) && (s[a] = mn(s[a])), !i);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const r = {};
    return l.forEachEntry(e, (n, s) => {
      t(hn(n), s, r, 0);
    }), r;
  }
  return null;
}
function gn(e, t, r) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const ke = {
  transitional: nt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, r) {
      const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, o = l.isObject(t);
      if (o && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
        return s ? JSON.stringify(zt(t)) : t;
      if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t) || l.isReadableStream(t))
        return t;
      if (l.isArrayBufferView(t))
        return t.buffer;
      if (l.isURLSearchParams(t))
        return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (o) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return pn(t, this.formSerializer).toString();
        if ((i = l.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const f = this.env && this.env.FormData;
          return Be(
            i ? { "files[]": t } : t,
            f && new f(),
            this.formSerializer
          );
        }
      }
      return o || s ? (r.setContentType("application/json", !1), gn(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const r = this.transitional || ke.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
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
    FormData: V.classes.FormData,
    Blob: V.classes.Blob
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
  ke.headers[e] = {};
});
const yn = l.toObjectSet([
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
]), bn = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), r = a.substring(0, s).trim().toLowerCase(), n = a.substring(s + 1).trim(), !(!r || t[r] && yn[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, gt = /* @__PURE__ */ Symbol("internals");
function be(e) {
  return e && String(e).trim().toLowerCase();
}
function Te(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(Te) : String(e);
}
function wn(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const xn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function He(e, t, r, n, s) {
  if (l.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!l.isString(t)) {
    if (l.isString(n))
      return t.indexOf(n) !== -1;
    if (l.isRegExp(n))
      return n.test(t);
  }
}
function vn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function _n(e, t) {
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
let Z = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function o(i, f, c) {
      const d = be(f);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const y = l.findKey(s, d);
      (!y || s[y] === void 0 || c === !0 || c === void 0 && s[y] !== !1) && (s[y || f] = Te(i));
    }
    const a = (i, f) => l.forEach(i, (c, d) => o(c, d, f));
    if (l.isPlainObject(t) || t instanceof this.constructor)
      a(t, r);
    else if (l.isString(t) && (t = t.trim()) && !xn(t))
      a(bn(t), r);
    else if (l.isObject(t) && l.isIterable(t)) {
      let i = {}, f, c;
      for (const d of t) {
        if (!l.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        i[c = d[0]] = (f = i[c]) ? l.isArray(f) ? [...f, d[1]] : [f, d[1]] : d[1];
      }
      a(i, r);
    } else
      t != null && o(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = be(t), t) {
      const n = l.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return wn(s);
        if (l.isFunction(r))
          return r.call(this, s, n);
        if (l.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = be(t), t) {
      const n = l.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || He(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function o(a) {
      if (a = be(a), a) {
        const i = l.findKey(n, a);
        i && (!r || He(n, n[i], i, r)) && (delete n[i], s = !0);
      }
    }
    return l.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || He(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return l.forEach(this, (s, o) => {
      const a = l.findKey(n, o);
      if (a) {
        r[a] = Te(s), delete r[o];
        return;
      }
      const i = t ? vn(o) : String(o).trim();
      i !== o && delete r[o], r[i] = Te(s), n[i] = !0;
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
    const n = (this[gt] = this[gt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const i = be(a);
      n[i] || (_n(s, a), n[i] = !0);
    }
    return l.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Z.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
l.reduceDescriptors(Z.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
l.freezeMethods(Z);
function Ve(e, t) {
  const r = this || ke, n = t || r, s = Z.from(n.headers);
  let o = n.data;
  return l.forEach(e, function(i) {
    o = i.call(r, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function qt(e) {
  return !!(e && e.__CANCEL__);
}
let Ee = class extends S {
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
function Ht(e, t, r) {
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
function kn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function En(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const c = Date.now(), d = n[o];
    a || (a = c), r[s] = f, n[s] = c;
    let y = o, O = 0;
    for (; y !== s; )
      O += r[y++], y = y % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - a < t)
      return;
    const P = d && c - d;
    return P ? Math.round(O * 1e3 / P) : void 0;
  };
}
function Rn(e, t) {
  let r = 0, n = 1e3 / t, s, o;
  const a = (c, d = Date.now()) => {
    r = d, s = null, o && (clearTimeout(o), o = null), e(...c);
  };
  return [(...c) => {
    const d = Date.now(), y = d - r;
    y >= n ? a(c, d) : (s = c, o || (o = setTimeout(() => {
      o = null, a(s);
    }, n - y)));
  }, () => s && a(s)];
}
const $e = (e, t, r = 3) => {
  let n = 0;
  const s = En(50, 250);
  return Rn((o) => {
    const a = o.loaded, i = o.lengthComputable ? o.total : void 0, f = a - n, c = s(f), d = a <= i;
    n = a;
    const y = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: f,
      rate: c || void 0,
      estimated: c && i && d ? (i - a) / c : void 0,
      event: o,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(y);
  }, r);
}, yt = (e, t) => {
  const r = e != null;
  return [
    (n) => t[0]({
      lengthComputable: r,
      total: e,
      loaded: n
    }),
    t[1]
  ];
}, bt = (e) => (...t) => l.asap(() => e(...t)), Sn = V.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, V.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(V.origin),
  V.navigator && /(msie|trident)/i.test(V.navigator.userAgent)
) : () => !0, Cn = V.hasStandardBrowserEnv ? (
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
function On(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Tn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Vt(e, t, r) {
  let n = !On(t);
  return e && (n || r == !1) ? Tn(e, t) : t;
}
const wt = (e) => e instanceof Z ? { ...e } : e;
function pe(e, t) {
  t = t || {};
  const r = {};
  function n(c, d, y, O) {
    return l.isPlainObject(c) && l.isPlainObject(d) ? l.merge.call({ caseless: O }, c, d) : l.isPlainObject(d) ? l.merge({}, d) : l.isArray(d) ? d.slice() : d;
  }
  function s(c, d, y, O) {
    if (l.isUndefined(d)) {
      if (!l.isUndefined(c))
        return n(void 0, c, y, O);
    } else return n(c, d, y, O);
  }
  function o(c, d) {
    if (!l.isUndefined(d))
      return n(void 0, d);
  }
  function a(c, d) {
    if (l.isUndefined(d)) {
      if (!l.isUndefined(c))
        return n(void 0, c);
    } else return n(void 0, d);
  }
  function i(c, d, y) {
    if (y in t)
      return n(c, d);
    if (y in e)
      return n(void 0, c);
  }
  const f = {
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
    headers: (c, d, y) => s(wt(c), wt(d), y, !0)
  };
  return l.forEach(Object.keys({ ...e, ...t }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype") return;
    const y = l.hasOwnProp(f, d) ? f[d] : s, O = y(e[d], t[d], d);
    l.isUndefined(O) && y !== i || (r[d] = O);
  }), r;
}
const Jt = (e) => {
  const t = pe({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: o, headers: a, auth: i } = t;
  if (t.headers = a = Z.from(a), t.url = Mt(
    Vt(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), i && a.set(
    "Authorization",
    "Basic " + btoa(
      (i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : "")
    )
  ), l.isFormData(r)) {
    if (V.hasStandardBrowserEnv || V.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (l.isFunction(r.getHeaders)) {
      const f = r.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(f).forEach(([d, y]) => {
        c.includes(d.toLowerCase()) && a.set(d, y);
      });
    }
  }
  if (V.hasStandardBrowserEnv && (n && l.isFunction(n) && (n = n(t)), n || n !== !1 && Sn(t.url))) {
    const f = s && o && Cn.read(o);
    f && a.set(s, f);
  }
  return t;
}, An = typeof XMLHttpRequest < "u", $n = An && function(e) {
  return new Promise(function(r, n) {
    const s = Jt(e);
    let o = s.data;
    const a = Z.from(s.headers).normalize();
    let { responseType: i, onUploadProgress: f, onDownloadProgress: c } = s, d, y, O, P, u;
    function w() {
      P && P(), u && u(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let b = new XMLHttpRequest();
    b.open(s.method.toUpperCase(), s.url, !0), b.timeout = s.timeout;
    function T() {
      if (!b)
        return;
      const $ = Z.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), U = {
        data: !i || i === "text" || i === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: $,
        config: e,
        request: b
      };
      Ht(
        function(q) {
          r(q), w();
        },
        function(q) {
          n(q), w();
        },
        U
      ), b = null;
    }
    "onloadend" in b ? b.onloadend = T : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, b.onabort = function() {
      b && (n(new S("Request aborted", S.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function(A) {
      const U = A && A.message ? A.message : "Network Error", ne = new S(U, S.ERR_NETWORK, e, b);
      ne.event = A || null, n(ne), b = null;
    }, b.ontimeout = function() {
      let A = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const U = s.transitional || nt;
      s.timeoutErrorMessage && (A = s.timeoutErrorMessage), n(
        new S(
          A,
          U.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
          e,
          b
        )
      ), b = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in b && l.forEach(a.toJSON(), function(A, U) {
      b.setRequestHeader(U, A);
    }), l.isUndefined(s.withCredentials) || (b.withCredentials = !!s.withCredentials), i && i !== "json" && (b.responseType = s.responseType), c && ([O, u] = $e(c, !0), b.addEventListener("progress", O)), f && b.upload && ([y, P] = $e(f), b.upload.addEventListener("progress", y), b.upload.addEventListener("loadend", P)), (s.cancelToken || s.signal) && (d = ($) => {
      b && (n(!$ || $.type ? new Ee(null, e, b) : $), b.abort(), b = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const j = kn(s.url);
    if (j && V.protocols.indexOf(j) === -1) {
      n(
        new S(
          "Unsupported protocol " + j + ":",
          S.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    b.send(o || null);
  });
}, Pn = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), s;
    const o = function(c) {
      if (!s) {
        s = !0, i();
        const d = c instanceof Error ? c : this.reason;
        n.abort(
          d instanceof S ? d : new Ee(d instanceof Error ? d.message : d)
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
    const { signal: f } = n;
    return f.unsubscribe = () => l.asap(i), f;
  }
}, Nn = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, Ln = async function* (e, t) {
  for await (const r of Un(e))
    yield* Nn(r, t);
}, Un = async function* (e) {
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
}, xt = (e, t, r, n) => {
  const s = Ln(e, t);
  let o = 0, a, i = (f) => {
    a || (a = !0, n && n(f));
  };
  return new ReadableStream(
    {
      async pull(f) {
        try {
          const { done: c, value: d } = await s.next();
          if (c) {
            i(), f.close();
            return;
          }
          let y = d.byteLength;
          if (r) {
            let O = o += y;
            r(O);
          }
          f.enqueue(new Uint8Array(d));
        } catch (c) {
          throw i(c), c;
        }
      },
      cancel(f) {
        return i(f), s.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, vt = 64 * 1024, { isFunction: Ce } = l, Fn = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(l.global), { ReadableStream: _t, TextEncoder: kt } = l.global, Et = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Bn = (e) => {
  e = l.merge.call(
    {
      skipUndefined: !0
    },
    Fn,
    e
  );
  const { fetch: t, Request: r, Response: n } = e, s = t ? Ce(t) : typeof fetch == "function", o = Ce(r), a = Ce(n);
  if (!s)
    return !1;
  const i = s && Ce(_t), f = s && (typeof kt == "function" ? /* @__PURE__ */ ((u) => (w) => u.encode(w))(new kt()) : async (u) => new Uint8Array(await new r(u).arrayBuffer())), c = o && i && Et(() => {
    let u = !1;
    const w = new r(V.origin, {
      body: new _t(),
      method: "POST",
      get duplex() {
        return u = !0, "half";
      }
    }).headers.has("Content-Type");
    return u && !w;
  }), d = a && i && Et(() => l.isReadableStream(new n("").body)), y = {
    stream: d && ((u) => u.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((u) => {
    !y[u] && (y[u] = (w, b) => {
      let T = w && w[u];
      if (T)
        return T.call(w);
      throw new S(
        `Response type '${u}' is not supported`,
        S.ERR_NOT_SUPPORT,
        b
      );
    });
  });
  const O = async (u) => {
    if (u == null)
      return 0;
    if (l.isBlob(u))
      return u.size;
    if (l.isSpecCompliantForm(u))
      return (await new r(V.origin, {
        method: "POST",
        body: u
      }).arrayBuffer()).byteLength;
    if (l.isArrayBufferView(u) || l.isArrayBuffer(u))
      return u.byteLength;
    if (l.isURLSearchParams(u) && (u = u + ""), l.isString(u))
      return (await f(u)).byteLength;
  }, P = async (u, w) => {
    const b = l.toFiniteNumber(u.getContentLength());
    return b ?? O(w);
  };
  return async (u) => {
    let {
      url: w,
      method: b,
      data: T,
      signal: j,
      cancelToken: $,
      timeout: A,
      onDownloadProgress: U,
      onUploadProgress: ne,
      responseType: q,
      headers: ae,
      withCredentials: oe = "same-origin",
      fetchOptions: ce
    } = Jt(u), ue = t || fetch;
    q = q ? (q + "").toLowerCase() : "text";
    let X = Pn(
      [j, $ && $.toAbortSignal()],
      A
    ), F = null;
    const x = X && X.unsubscribe && (() => {
      X.unsubscribe();
    });
    let C;
    try {
      if (ne && c && b !== "get" && b !== "head" && (C = await P(ae, T)) !== 0) {
        let M = new r(w, {
          method: "POST",
          body: T,
          duplex: "half"
        }), W;
        if (l.isFormData(T) && (W = M.headers.get("content-type")) && ae.setContentType(W), M.body) {
          const [K, g] = yt(
            C,
            $e(bt(ne))
          );
          T = xt(M.body, vt, K, g);
        }
      }
      l.isString(oe) || (oe = oe ? "include" : "omit");
      const _ = o && "credentials" in r.prototype, ie = {
        ...ce,
        signal: X,
        method: b.toUpperCase(),
        headers: ae.normalize().toJSON(),
        body: T,
        duplex: "half",
        credentials: _ ? oe : void 0
      };
      F = o && new r(w, ie);
      let J = await (o ? ue(F, ce) : ue(w, ie));
      const D = d && (q === "stream" || q === "response");
      if (d && (U || D && x)) {
        const M = {};
        ["status", "statusText", "headers"].forEach((m) => {
          M[m] = J[m];
        });
        const W = l.toFiniteNumber(J.headers.get("content-length")), [K, g] = U && yt(
          W,
          $e(bt(U), !0)
        ) || [];
        J = new n(
          xt(J.body, vt, K, () => {
            g && g(), x && x();
          }),
          M
        );
      }
      q = q || "text";
      let le = await y[l.findKey(y, q) || "text"](
        J,
        u
      );
      return !D && x && x(), await new Promise((M, W) => {
        Ht(M, W, {
          data: le,
          headers: Z.from(J.headers),
          status: J.status,
          statusText: J.statusText,
          config: u,
          request: F
        });
      });
    } catch (_) {
      throw x && x(), _ && _.name === "TypeError" && /Load failed|fetch/i.test(_.message) ? Object.assign(
        new S(
          "Network Error",
          S.ERR_NETWORK,
          u,
          F,
          _ && _.response
        ),
        {
          cause: _.cause || _
        }
      ) : S.from(_, _ && _.code, u, F, _ && _.response);
    }
  };
}, jn = /* @__PURE__ */ new Map(), Wt = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: s } = t, o = [n, s, r];
  let a = o.length, i = a, f, c, d = jn;
  for (; i--; )
    f = o[i], c = d.get(f), c === void 0 && d.set(f, c = i ? /* @__PURE__ */ new Map() : Bn(t)), d = c;
  return c;
};
Wt();
const ot = {
  http: en,
  xhr: $n,
  fetch: {
    get: Wt
  }
};
l.forEach(ot, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Rt = (e) => `- ${e}`, In = (e) => l.isFunction(e) || e === null || e === !1;
function Dn(e, t) {
  e = l.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, s;
  const o = {};
  for (let a = 0; a < r; a++) {
    n = e[a];
    let i;
    if (s = n, !In(n) && (s = ot[(i = String(n)).toLowerCase()], s === void 0))
      throw new S(`Unknown adapter '${i}'`);
    if (s && (l.isFunction(s) || (s = s.get(t))))
      break;
    o[i || "#" + a] = s;
  }
  if (!s) {
    const a = Object.entries(o).map(
      ([f, c]) => `adapter ${f} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = r ? a.length > 1 ? `since :
` + a.map(Rt).join(`
`) : " " + Rt(a[0]) : "as no adapter specified";
    throw new S(
      "There is no suitable adapter to dispatch the request " + i,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Kt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Dn,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: ot
};
function Je(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ee(null, e);
}
function St(e) {
  return Je(e), e.headers = Z.from(e.headers), e.data = Ve.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Kt.getAdapter(e.adapter || ke.adapter, e)(e).then(
    function(n) {
      return Je(e), n.data = Ve.call(e, e.transformResponse, n), n.headers = Z.from(n.headers), n;
    },
    function(n) {
      return qt(n) || (Je(e), n && n.response && (n.response.data = Ve.call(
        e,
        e.transformResponse,
        n.response
      ), n.response.headers = Z.from(n.response.headers))), Promise.reject(n);
    }
  );
}
const Xt = "1.13.6", je = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  je[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ct = {};
je.transitional = function(t, r, n) {
  function s(o, a) {
    return "[Axios v" + Xt + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, i) => {
    if (t === !1)
      throw new S(
        s(a, " has been removed" + (r ? " in " + r : "")),
        S.ERR_DEPRECATED
      );
    return r && !Ct[a] && (Ct[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, a, i) : !0;
  };
};
je.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Mn(e, t, r) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const o = n[s], a = t[o];
    if (a) {
      const i = e[o], f = i === void 0 || a(i, o, e);
      if (f !== !0)
        throw new S(
          "option " + o + " must be " + f,
          S.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (r !== !0)
      throw new S("Unknown option " + o, S.ERR_BAD_OPTION);
  }
}
const Ae = {
  assertOptions: Mn,
  validators: je
}, te = Ae.validators;
let fe = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new mt(),
      response: new mt()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = pe(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: o } = r;
    n !== void 0 && Ae.assertOptions(
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
    } : Ae.assertOptions(
      s,
      {
        encode: te.function,
        serialize: te.function
      },
      !0
    )), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Ae.assertOptions(
      r,
      {
        baseUrl: te.spelling("baseURL"),
        withXsrfToken: te.spelling("withXSRFToken")
      },
      !0
    ), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = o && l.merge(o.common, o[r.method]);
    o && l.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (u) => {
      delete o[u];
    }), r.headers = Z.concat(a, o);
    const i = [];
    let f = !0;
    this.interceptors.request.forEach(function(w) {
      if (typeof w.runWhen == "function" && w.runWhen(r) === !1)
        return;
      f = f && w.synchronous;
      const b = r.transitional || nt;
      b && b.legacyInterceptorReqResOrdering ? i.unshift(w.fulfilled, w.rejected) : i.push(w.fulfilled, w.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(w) {
      c.push(w.fulfilled, w.rejected);
    });
    let d, y = 0, O;
    if (!f) {
      const u = [St.bind(this), void 0];
      for (u.unshift(...i), u.push(...c), O = u.length, d = Promise.resolve(r); y < O; )
        d = d.then(u[y++], u[y++]);
      return d;
    }
    O = i.length;
    let P = r;
    for (; y < O; ) {
      const u = i[y++], w = i[y++];
      try {
        P = u(P);
      } catch (b) {
        w.call(this, b);
        break;
      }
    }
    try {
      d = St.call(this, P);
    } catch (u) {
      return Promise.reject(u);
    }
    for (y = 0, O = c.length; y < O; )
      d = d.then(c[y++], c[y++]);
    return d;
  }
  getUri(t) {
    t = pe(this.defaults, t);
    const r = Vt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Mt(r, t.params, t.paramsSerializer);
  }
};
l.forEach(["delete", "get", "head", "options"], function(t) {
  fe.prototype[t] = function(r, n) {
    return this.request(
      pe(n || {}, {
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
        pe(i || {}, {
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
  fe.prototype[t] = r(), fe.prototype[t + "Form"] = r(!0);
});
let zn = class Qt {
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
      n.reason || (n.reason = new Ee(o, a, i), r(n.reason));
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
      token: new Qt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function qn(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Hn(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const Ye = {
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
Object.entries(Ye).forEach(([e, t]) => {
  Ye[t] = e;
});
function Zt(e) {
  const t = new fe(e), r = At(fe.prototype.request, t);
  return l.extend(r, fe.prototype, t, { allOwnKeys: !0 }), l.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Zt(pe(e, s));
  }, r;
}
const L = Zt(ke);
L.Axios = fe;
L.CanceledError = Ee;
L.CancelToken = zn;
L.isCancel = qt;
L.VERSION = Xt;
L.toFormData = Be;
L.AxiosError = S;
L.Cancel = L.CanceledError;
L.all = function(t) {
  return Promise.all(t);
};
L.spread = qn;
L.isAxiosError = Hn;
L.mergeConfig = pe;
L.AxiosHeaders = Z;
L.formToJSON = (e) => zt(l.isHTMLForm(e) ? new FormData(e) : e);
L.getAdapter = Kt.getAdapter;
L.HttpStatusCode = Ye;
L.default = L;
const {
  Axios: go,
  AxiosError: yo,
  CanceledError: bo,
  isCancel: wo,
  CancelToken: xo,
  VERSION: vo,
  all: _o,
  Cancel: ko,
  isAxiosError: Eo,
  spread: Ro,
  toFormData: So,
  AxiosHeaders: Co,
  HttpStatusCode: Oo,
  formToJSON: To,
  getAdapter: Ao,
  mergeConfig: $o
} = L, Ge = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), Yt = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), Gt = async () => ({
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
            const f = JSON.parse(i).filter((c) => c?.k.startsWith("t-"));
            if (f.length != 0)
              for (const c of f) {
                const d = c.k, y = c.v.split(" ");
                if (d == `t-${t}-class`)
                  for (const O of y)
                    a.classList.add(O);
                else
                  for (const O of y)
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
function et(e, t = 1e3) {
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
let Vn = class {
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
const Pe = () => new Vn();
class er {
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
let z = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [r, n] of t.entries()) {
        const s = n, o = `${s.name}:${e.run_from}`, a = `${e.run_from}_src`;
        let i = s[a];
        const f = `${e.run_from}_src`;
        let c = e?.lazy_lib?.[f] || null;
        if (c && (c = c.replace("{*}", `${s.name}`)), console.log(`_lazy_src: ${c}`), console.log(`_src: ${i}`), z.lib.l.hasOwnProperty(`${o}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(i) && i.includes("/") == !1 && z.lib.inbuilt_lib.indexOf(`${s.name}`) === -1)
            if (c)
              i = c;
            else
              throw `[lib-name=${s.name},lib-src=${i}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (i.startsWith("./") || i.startsWith("../")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${i}`
            );
            z.lib.l[`${o}`] = {
              lib: d,
              src: i
            };
          }
          if (i.startsWith("http://") || i.startsWith("https://")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${i}`
            );
            z.lib.l[`${o}`] = {
              lib: d,
              src: i
            };
          }
        }
      }
      console.log(await z.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const r = `${e.name}:${e.run_from}`;
      return z.lib.l.hasOwnProperty(`${r}`) == !1 && await z.lib.set({
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
      }), t = z.lib.l[`${r}`], t;
    },
    get_all: async (e) => z.lib.l
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
const tr = Pe(), rr = Pe(), Jn = tr.on, Wn = tr.emit, Kn = rr.emit;
rr.on;
const Xn = async (e) => {
  const t = await Yt();
  return await z.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (r) => {
      console.log("--renderer [set]"), r.return = r?.return || {}, r.return.r = r?.return?.r || "full";
      const n = new er();
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
          const i = await await z.lib.get({ name: a.type, run_from: "renderer", lazy_lib: e.lazy_lib }), f = await (await i.lib.index({
            f: {
              name: (c) => t.f.name({ id: a.id, name: c }),
              get_lib: async (c) => await await z.lib.get({ name: c.name, run_from: c.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (c) => await (await Gt()).set(c),
              path: (c) => z.path.set({ src: i.src, type: a.type, name: c }),
              //set..
              uuid: () => Ge().set(),
              wait_until: et
            }
          })).set(
            {
              data: {
                curr: a
              }
            }
            /*_$cb*/
          );
          r?.return?.r == "full" ? o.r += f?.r || "" : o.r.push(f?.r || ""), o.style += f?.style || "", o.head += f?.head || "";
        }
      })(), n.stop(), o.benchmark = n.result(), o;
    }
  };
}, Qn = async (e) => {
  const t = await Yt();
  return await z.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (r) => {
      console.log("--hydrator [set]");
      const n = new er();
      n.start();
      let s = {
        r: "",
        style: ""
      }, o = {
        style_id: `${Ge().set()}_stl`
      }, a = r.data?.value?.l || r.data.l;
      const i = async () => {
        for (const f of a) {
          const c = await await z.lib.get({ name: f.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), d = c.lib, y = Pe(), O = y.on, P = await (await d.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (u) => t.f.name({ id: f.id, name: u }),
              get_lib: async (u) => await await z.lib.get({ name: u.name, run_from: u.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (u) => await (await Gt()).set(u),
              path: (u) => z.path.set({ src: c.src, type: f.type, name: u }),
              //set..
              uuid: () => Ge().set(),
              wait_until: et,
              //set..
              call: Kn,
              listen: O,
              //set..
              new_emitter: () => Pe()
            }
          })).set(
            {
              data: {
                curr: f
              }
            }
            /*_$cb*/
          );
          Jn("msg", async (u) => {
            try {
              if (Object.keys(u.where || {}).length == 0) {
                await y.emit("msg", u);
                return;
              }
            } catch {
            }
            try {
              if (f?.[u.where?.key || ""] == u.where?.value) {
                await y.emit("msg", u);
                return;
              }
            } catch {
            }
          }), s.style += P.style;
        }
      };
      await et(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await i();
      try {
        ((f) => {
          const c = document.getElementById(`${o.style_id}`);
          c && c.remove();
          const d = document.createElement("style");
          d.id = `${o.style_id}`, d.innerHTML = `${s.style}`, f.appendChild(d);
        })(document.head);
      } catch (f) {
        console.log(`${f}, Failed to set style..`);
      }
      return n.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: n.result()
      };
    }
  };
}, Zn = ["innerHTML"], Yn = /* @__PURE__ */ Ne({
  __name: "Contentengin",
  props: {
    ce_file: {}
  },
  setup(e, { expose: t }) {
    const r = N({
      ce_file: e.ce_file
      //route?.meta?.ce_file,
    });
    t({
      ce_call: Wn
    });
    const n = N(null), s = N(null);
    let o = "";
    return (async () => {
      try {
        if (typeof r.value.ce_file == "string") {
          const O = await (await fetch(r.value.ce_file)).json();
          n.value = O;
        } else
          n.value = r.value.ce_file;
      } catch (y) {
        console.log(y);
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
      const f = await Xn(i), c = await Qn(i);
      await (async () => {
        const y = await f.set({
          data: a
        });
        s.value = y.r, o = y.style;
        const O = document.createElement("style");
        document.head.appendChild(O), O.innerHTML = o, setTimeout(async () => {
          await c.set({
            data: a
          });
        }, 10);
      })();
    })(), (a, i) => s.value ? (v(), E("div", {
      key: 0,
      innerHTML: s.value
    }, null, 8, Zn)) : H("", !0);
  }
}), Gn = { class: "md:hidden fixed bottom-6 right-6 z-40" }, es = { class: "flex-1 overflow-y-auto custom-scrollbar" }, ts = {
  key: 0,
  class: "p-10 flex justify-center"
}, rs = { class: "flex items-center justify-between mb-3" }, ns = ["onClick"], ss = {
  key: 0,
  class: "mb-3"
}, os = ["onUpdate:modelValue", "placeholder"], as = { class: "space-y-2" }, is = ["onClick"], ls = ["name", "checked"], cs = ["onClick"], us = {
  key: 0,
  class: "w-3 h-3 text-white",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, ds = {
  key: 0,
  class: "mt-2"
}, fs = ["onClick"], ps = ["onClick"], hs = { class: "flex-1 flex overflow-hidden" }, ms = ["onClick"], gs = {
  key: 0,
  class: "ml-1 text-pink-500 dark:text-pink-400"
}, ys = { key: 0 }, bs = {
  key: 0,
  class: "mb-4"
}, ws = ["placeholder"], xs = { class: "space-y-5" }, vs = ["onClick"], _s = ["checked"], ks = ["onClick"], Es = { class: "flex items-center gap-3" }, Rs = {
  key: 0,
  class: "w-3.5 h-3.5 text-white",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Ss = {
  key: 0,
  class: "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
}, Cs = { class: "flex-shrink-0" }, Os = { class: "relative flex-1" }, Ts = ["onClick"], As = { class: "flex-1 overflow-x-auto custom-scrollbar-horizontal" }, $s = ["id"], Ps = { class: "text-xl font-bold text-pink-600 dark:text-pink-500 mb-4" }, Ns = { class: "space-y-3" }, Ls = ["onClick"], Us = {
  key: 0,
  class: "w-2.5 h-2.5 text-white",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Fs = {
  key: 0,
  class: "w-full flex items-center justify-center"
}, Bs = { class: "text-center" }, js = /* @__PURE__ */ Ne({
  __name: "Productfilter",
  props: {
    _p: {},
    _$p: {},
    _$cb: {},
    config: {}
  },
  setup(e) {
    const t = e, r = he(() => t.config?.theme || ue.value?.theme || "light"), n = N(!1), s = N(null), o = Se({}), a = N(!1), i = N(""), f = N(""), c = (g) => {
      const m = g;
      m.style.height = "auto";
      const h = m.scrollHeight;
      m.style.height = "0px", m.offsetHeight, m.style.height = h + "px";
    }, d = (g) => {
      g.style.height = "auto";
    }, y = (g) => {
      const m = g;
      m.style.height = m.scrollHeight + "px", m.offsetHeight, m.style.height = "0px";
    }, O = () => {
      const g = new URLSearchParams(window.location.search);
      f.value && g.set("q", f.value), Array.from(g.keys()).filter((R) => R !== "q").forEach((R) => g.delete(R)), Object.entries(o).forEach(([R, I]) => {
        Array.isArray(I) && I.length > 0 && (R === "price" && I[0]?.min !== void 0 ? g.set(R, `${I[0].min},${I[0].max}`) : g.set(R, I.join(",")));
      });
      const h = `${window.location.pathname}?${g.toString()}`;
      window.history.replaceState({}, "", h);
    }, P = () => {
      const g = new URLSearchParams(window.location.search);
      f.value = g.get("q") || "", g.forEach((m, h) => {
        if (h !== "q")
          if (h === "price") {
            const [R, I] = m.split(",");
            o.price = [{ min: Number(R), max: Number(I) }];
          } else
            o[h] = m.split(",");
      });
    }, u = async () => {
      n.value = !0;
      const g = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", m = X.value.map((h) => ({
        title: h.title,
        typ: h.typ,
        l: (h.l || []).map((R) => ({
          name: R.name,
          selected: D(h.typ, R.name)
        }))
      }));
      try {
        const R = await (await fetch("https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=get_filter_data", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${g}` },
          body: JSON.stringify({
            raw_text: f.value || "_",
            collection: "products",
            filters: m
          })
        })).json();
        R.success && (s.value = R);
      } catch (h) {
        console.error("Filter API Error:", h);
      } finally {
        n.value = !1;
      }
    }, w = (g) => {
      if (!g || !g.l) return [];
      const m = T[g.typ]?.toLowerCase();
      return m ? g.l.filter((h) => h.name.toLowerCase().includes(m)) : g.l;
    }, b = Se({}), T = Se({}), j = Se({}), $ = N(!1), A = N(null), U = N(""), ne = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), q = N(null), ae = he(() => {
      if (!A.value || !A.value.l) return [];
      const g = A.value.l.filter(
        (Y) => Y.name.toLowerCase().includes(U.value.toLowerCase())
      ), m = {};
      g.forEach((Y) => {
        let ye = Y.name.charAt(0).toUpperCase();
        /[A-Z]/.test(ye) || (ye = "#"), m[ye] || (m[ye] = []), m[ye].push(Y);
      });
      const R = Object.keys(m).sort().map((Y) => ({
        letter: Y,
        items: m[Y],
        height: m[Y].length * 32 + 60
      })), I = [[]];
      let Re = 0, ee = 0;
      const at = 600;
      return R.forEach((Y) => {
        ee + Y.height > at && ee > 0 && (I.push([]), Re++, ee = 0), I[Re].push({
          letter: Y.letter,
          items: Y.items
        }), ee += Y.height;
      }), I;
    }), oe = (g) => {
      ar(() => {
        const m = document.getElementById(`dir-letter-${g}`);
        m && m.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      });
    }, ce = (g) => {
      g.typ === "brand" && (A.value = g, U.value = "", $.value = !0);
    }, ue = he(() => s.value || t._$p?.data?.curr?.data || {}), X = he(() => ue.value.filters || []), F = he(() => X.value.find((g) => g.typ === i.value));
    sr(X, (g) => {
      g.length > 0 && !i.value && (i.value = g[0].typ);
    }, { immediate: !0 });
    const x = he(() => Object.values(o).reduce((g, m) => g + (Array.isArray(m) ? m.length : 0), 0)), C = (g) => {
      b[g] = !b[g], b[g] || (T[g] = "");
    }, _ = (g) => {
      j[g] = !j[g];
    }, ie = (g) => {
      if (!g || !g.l) return [];
      let m = g.l;
      const h = T[g.typ]?.toLowerCase();
      return h ? m.filter((R) => R.name.toLowerCase().includes(h)) : g.typ === "brand" || !j[g.typ] ? m.slice(0, 5) : m;
    }, J = (g) => T[g.typ] ? !1 : g.l && g.l.length > 5, D = (g, m) => {
      const h = o[g];
      return Array.isArray(h) ? h.includes(m) : !1;
    }, le = (g, m) => {
      const h = o.price?.[0];
      return h?.min === g && h?.max === m;
    }, M = (g, m) => {
      o.price = [{ min: g, max: m }], O(), u(), t._$cb?.change?.({});
    }, W = (g, m) => {
      o[g] || (o[g] = []);
      const h = o[g], R = h.indexOf(m);
      R === -1 ? h.push(m) : h.splice(R, 1), h.length === 0 && delete o[g], O(), u(), t._$cb?.change?.({});
    }, K = async () => {
      for (const g in o) delete o[g];
      O(), await u(), t._$cb?.change?.({});
    };
    return Tt(async () => {
      P(), await u(), X.value.length > 0 && (i.value = X.value[0].typ);
    }), (g, m) => (v(), E("div", {
      class: k(["dark-mode-wrapper", { dark: r.value === "dark" }])
    }, [
      p("div", Gn, [
        p("button", {
          onClick: m[0] || (m[0] = (h) => a.value = !0),
          class: k([
            "bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white px-6 py-4 rounded-full shadow-2xl font-bold flex items-center gap-2 uppercase tracking-wide active:scale-95 transition-transform duration-200",
            r.value === "dark" ? "dark:bg-pink-500 dark:hover:bg-pink-600" : ""
          ])
        }, [...m[6] || (m[6] = [
          p("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            p("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            })
          ], -1),
          it(" Filters ", -1)
        ])], 2)
      ]),
      p("aside", {
        class: k([
          "hidden md:flex flex-col product-filter w-80 border-r h-screen sticky top-0",
          r.value === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
        ])
      }, [
        p("div", {
          class: k([
            "p-4 border-b flex justify-between items-center z-10",
            r.value === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
          ])
        }, [
          p("h2", {
            class: k([
              "text-md font-bold uppercase",
              r.value === "dark" ? "text-gray-100" : "text-gray-800"
            ])
          }, "Filters", 2),
          x.value > 0 ? (v(), E("button", {
            key: 0,
            onClick: K,
            class: "text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 uppercase transition-colors duration-200"
          }, " Clear All ")) : H("", !0)
        ], 2),
        p("div", es, [
          n.value ? (v(), E("div", ts, [
            p("div", {
              class: k([
                "w-6 h-6 border-2 rounded-full animate-spin",
                r.value === "dark" ? "border-pink-400 border-t-transparent" : "border-pink-500 border-t-transparent"
              ])
            }, null, 2)
          ])) : (v(!0), E(G, { key: 1 }, re(X.value, (h) => (v(), E("div", {
            key: h.typ,
            class: k([
              "border-b p-4",
              r.value === "dark" ? "border-gray-800" : "border-gray-100"
            ])
          }, [
            p("div", rs, [
              p("span", {
                class: k([
                  "text-sm font-bold uppercase",
                  r.value === "dark" ? "text-gray-200" : "text-gray-700"
                ])
              }, B(h.title), 3),
              p("button", {
                onClick: (R) => C(h.typ),
                class: k([
                  "p-1.5 rounded-full transition-colors duration-200",
                  r.value === "dark" ? "text-gray-400 hover:bg-gray-800 hover:text-gray-300" : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                ])
              }, [...m[7] || (m[7] = [
                p("svg", {
                  class: "w-4 h-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  p("path", {
                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                    "stroke-width": "2"
                  })
                ], -1)
              ])], 10, ns)
            ]),
            we(Ie, {
              name: "expand",
              onEnter: c,
              onAfterEnter: d,
              onLeave: y
            }, {
              default: De(() => [
                b[h.typ] ? (v(), E("div", ss, [
                  Me(p("input", {
                    "onUpdate:modelValue": (R) => T[h.typ] = R,
                    type: "text",
                    placeholder: `Search ${h.title}`,
                    class: k([
                      "w-full px-3 py-1.5 text-xs border rounded-full focus:outline-none transition-colors duration-200",
                      r.value === "dark" ? "border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-pink-500" : "border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-pink-500"
                    ])
                  }, null, 10, os), [
                    [ze, T[h.typ]]
                  ])
                ])) : H("", !0)
              ]),
              _: 2
            }, 1024),
            p("div", as, [
              h.typ === "price" ? (v(!0), E(G, { key: 0 }, re(h.l, (R) => (v(), E("div", {
                key: R.name,
                onClick: (I) => M(R.min, R.max),
                class: k([
                  "flex items-center group cursor-pointer transition-colors duration-200",
                  r.value === "dark" ? "hover:bg-gray-800 rounded-lg p-1" : "hover:bg-gray-50 rounded-lg p-1"
                ])
              }, [
                p("input", {
                  type: "radio",
                  name: "price-" + h.typ,
                  checked: le(R.min, R.max),
                  class: k([
                    "h-4 w-4 cursor-pointer",
                    (r.value === "dark", "accent-pink-500")
                  ])
                }, null, 10, ls),
                p("label", {
                  class: k([
                    "ml-3 text-sm cursor-pointer",
                    r.value === "dark" ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                  ])
                }, B(R.name), 3)
              ], 10, is))), 128)) : (v(), E(G, { key: 1 }, [
                (v(!0), E(G, null, re(ie(h), (R) => (v(), E("div", {
                  key: R.name,
                  onClick: (I) => W(h.typ, R.name),
                  class: k([
                    "flex items-center cursor-pointer group transition-colors duration-200",
                    r.value === "dark" ? "hover:bg-gray-800 rounded-lg p-1" : "hover:bg-gray-50 rounded-lg p-1"
                  ])
                }, [
                  p("div", {
                    class: k([
                      "w-4 h-4 border rounded flex items-center justify-center transition-all duration-200",
                      D(h.typ, R.name) ? "bg-pink-500 border-pink-500 dark:bg-pink-600 dark:border-pink-600" : r.value === "dark" ? "bg-gray-800 border-gray-600 group-hover:border-gray-400" : "bg-white border-gray-300 group-hover:border-gray-400"
                    ])
                  }, [
                    D(h.typ, R.name) ? (v(), E("svg", us, [...m[8] || (m[8] = [
                      p("path", {
                        d: "M5 13l4 4L19 7",
                        "stroke-width": "3"
                      }, null, -1)
                    ])])) : H("", !0)
                  ], 2),
                  p("span", {
                    class: k([
                      "ml-3 text-sm flex-1 truncate transition-colors duration-200",
                      D(h.typ, R.name) ? "font-medium dark:text-white text-gray-900" : r.value === "dark" ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-900"
                    ])
                  }, B(R.name), 3),
                  p("span", {
                    class: k([
                      "text-[10px] ml-2",
                      r.value === "dark" ? "text-gray-500" : "text-gray-400"
                    ])
                  }, B(R.count), 3)
                ], 10, cs))), 128)),
                J(h) ? (v(), E("div", ds, [
                  h.typ === "brand" ? (v(), E("button", {
                    key: 0,
                    onClick: (R) => ce(h),
                    class: "text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 hover:underline transition-colors duration-200"
                  }, " + " + B(h.l.length - 5) + " more ", 9, fs)) : (v(), E("button", {
                    key: 1,
                    onClick: (R) => _(h.typ),
                    class: "text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 hover:underline transition-colors duration-200"
                  }, B(j[h.typ] ? "Show Less" : `+ ${h.l.length - 5} more`), 9, ps))
                ])) : H("", !0)
              ], 64))
            ])
          ], 2))), 128))
        ])
      ], 2),
      (v(), Ke(lt, { to: "body" }, [
        we(Ie, { name: "slide-up" }, {
          default: De(() => [
            a.value ? (v(), E("div", {
              key: 0,
              class: k([
                "fixed inset-0 z-[110] flex flex-col md:hidden overflow-hidden",
                r.value === "dark" ? "bg-gray-900" : "bg-white"
              ])
            }, [
              p("div", {
                class: k([
                  "p-4 border-b flex justify-between items-center shrink-0",
                  r.value === "dark" ? "border-gray-800" : "border-gray-200"
                ])
              }, [
                p("h2", {
                  class: k([
                    "font-bold uppercase",
                    r.value === "dark" ? "text-white" : "text-gray-800"
                  ])
                }, "Filters", 2),
                p("button", {
                  onClick: m[1] || (m[1] = (h) => a.value = !1),
                  class: k([
                    "p-2 rounded-full transition-colors duration-200",
                    r.value === "dark" ? "text-gray-400 hover:bg-gray-800 hover:text-gray-300" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  ])
                }, [...m[9] || (m[9] = [
                  p("svg", {
                    class: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    p("path", {
                      d: "M6 18L18 6M6 6l12 12",
                      "stroke-width": "2"
                    })
                  ], -1)
                ])], 2)
              ], 2),
              p("div", hs, [
                p("div", {
                  class: k([
                    "w-1/3 overflow-y-auto",
                    r.value === "dark" ? "bg-gray-800" : "bg-gray-50"
                  ])
                }, [
                  (v(!0), E(G, null, re(X.value, (h) => (v(), E("div", {
                    key: h.typ,
                    onClick: (R) => i.value = h.typ,
                    class: k([
                      "p-4 text-[11px] font-bold uppercase border-l-4 transition-all h-16 flex items-center",
                      i.value === h.typ ? r.value === "dark" ? "bg-gray-900 border-pink-500 text-pink-400" : "bg-white border-pink-500 text-pink-600" : r.value === "dark" ? "border-transparent text-gray-400 hover:bg-gray-700 hover:text-gray-300" : "border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    ])
                  }, [
                    it(B(h.title) + " ", 1),
                    o[h.typ]?.length ? (v(), E("span", gs, "•")) : H("", !0)
                  ], 10, ms))), 128))
                ], 2),
                p("div", {
                  class: k([
                    "w-2/3 overflow-y-auto p-4",
                    r.value === "dark" ? "bg-gray-900" : "bg-white"
                  ])
                }, [
                  F.value ? (v(), E("div", ys, [
                    F.value.typ !== "price" ? (v(), E("div", bs, [
                      Me(p("input", {
                        "onUpdate:modelValue": m[2] || (m[2] = (h) => T[F.value.typ] = h),
                        type: "text",
                        placeholder: `Search ${F.value.title}`,
                        class: k([
                          "w-full px-4 py-2 text-sm border rounded-lg transition-colors duration-200",
                          r.value === "dark" ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-pink-500" : "border-gray-300 text-gray-900 placeholder-gray-400 focus:border-pink-500"
                        ])
                      }, null, 10, ws), [
                        [ze, T[F.value.typ]]
                      ])
                    ])) : H("", !0),
                    p("div", xs, [
                      F.value.typ === "price" ? (v(!0), E(G, { key: 0 }, re(F.value.l, (h) => (v(), E("div", {
                        key: h.name,
                        onClick: (R) => M(h.min, h.max),
                        class: k([
                          "flex items-center p-2 rounded-lg transition-colors duration-200 cursor-pointer",
                          r.value === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-50"
                        ])
                      }, [
                        p("input", {
                          type: "radio",
                          checked: le(h.min, h.max),
                          class: k(["h-5 w-5", (r.value === "dark", "accent-pink-500")])
                        }, null, 10, _s),
                        p("span", {
                          class: k(["ml-3 text-sm", r.value === "dark" ? "text-gray-300" : "text-gray-700"])
                        }, B(h.name), 3)
                      ], 10, vs))), 128)) : (v(!0), E(G, { key: 1 }, re(w(F.value), (h) => (v(), E("div", {
                        key: h.name,
                        onClick: (R) => W(F.value.typ, h.name),
                        class: k([
                          "flex items-center justify-between p-2 rounded-lg transition-colors duration-200 cursor-pointer",
                          r.value === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-50"
                        ])
                      }, [
                        p("div", Es, [
                          p("div", {
                            class: k([
                              "w-5 h-5 border rounded flex items-center justify-center transition-all duration-200",
                              D(F.value.typ, h.name) ? "bg-pink-500 border-pink-500 dark:bg-pink-600 dark:border-pink-600" : r.value === "dark" ? "border-gray-600" : "border-gray-300"
                            ])
                          }, [
                            D(F.value.typ, h.name) ? (v(), E("svg", Rs, [...m[10] || (m[10] = [
                              p("path", {
                                d: "M5 13l4 4L19 7",
                                "stroke-width": "3"
                              }, null, -1)
                            ])])) : H("", !0)
                          ], 2),
                          p("span", {
                            class: k([
                              "text-sm transition-colors duration-200",
                              D(F.value.typ, h.name) ? "dark:text-white text-gray-900 font-medium" : r.value === "dark" ? "text-gray-200" : "text-gray-700"
                            ])
                          }, B(h.name), 3)
                        ]),
                        p("span", {
                          class: k(["text-[10px]", r.value === "dark" ? "text-gray-500" : "text-gray-400"])
                        }, B(h.count), 3)
                      ], 10, ks))), 128))
                    ])
                  ])) : H("", !0)
                ], 2)
              ]),
              p("div", {
                class: k([
                  "p-4 border-t flex gap-4 shrink-0 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]",
                  r.value === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
                ])
              }, [
                p("button", {
                  onClick: K,
                  class: k([
                    "flex-1 py-3 text-sm font-bold uppercase rounded-lg transition-colors duration-200",
                    r.value === "dark" ? "text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-gray-300" : "text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                  ])
                }, "Clear All", 2),
                p("button", {
                  onClick: m[3] || (m[3] = (h) => a.value = !1),
                  class: "flex-1 py-3 text-sm font-bold uppercase bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white rounded-lg transition-colors duration-200"
                }, " Apply ")
              ], 2)
            ], 2)) : H("", !0)
          ]),
          _: 1
        })
      ])),
      (v(), Ke(lt, { to: "body" }, [
        we(Ie, { name: "fade" }, {
          default: De(() => [
            $.value && A.value ? (v(), E("div", Ss, [
              p("div", {
                class: k([
                  "w-full max-w-6xl h-[85vh] rounded-lg shadow-2xl flex flex-col overflow-hidden",
                  r.value === "dark" ? "bg-gray-900" : "bg-white"
                ])
              }, [
                p("div", {
                  class: k([
                    "p-6 border-b flex items-center gap-4",
                    r.value === "dark" ? "border-gray-800" : "border-gray-200"
                  ])
                }, [
                  p("div", Cs, [
                    p("h3", {
                      class: k([
                        "text-lg font-bold",
                        r.value === "dark" ? "text-gray-200" : "text-gray-800"
                      ])
                    }, "Brand Directory", 2),
                    p("p", {
                      class: k([
                        "text-xs",
                        r.value === "dark" ? "text-gray-400" : "text-gray-500"
                      ])
                    }, "Select from " + B(A.value.l?.length || 0) + " brands", 3)
                  ]),
                  p("div", Os, [
                    Me(p("input", {
                      "onUpdate:modelValue": m[4] || (m[4] = (h) => U.value = h),
                      type: "text",
                      placeholder: "Search brands by name",
                      class: k([
                        "w-full pl-10 pr-4 py-2 border rounded-full text-sm transition-colors duration-200",
                        r.value === "dark" ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-pink-500" : "border-gray-300 text-gray-900 placeholder-gray-400 focus:border-pink-500"
                      ])
                    }, null, 2), [
                      [ze, U.value]
                    ]),
                    m[11] || (m[11] = p("svg", {
                      class: "w-4 h-4 absolute left-3 top-2.5 text-gray-400",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      p("path", {
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                        "stroke-width": "2"
                      })
                    ], -1))
                  ]),
                  p("div", {
                    class: k([
                      "flex-1 flex items-center gap-1 overflow-x-auto scrollbar-custom-alphabet px-2 border-x pb-2 pt-1",
                      r.value === "dark" ? "border-gray-800" : "border-gray-200"
                    ])
                  }, [
                    (v(!0), E(G, null, re(or(ne), (h) => (v(), E("button", {
                      key: h,
                      onClick: (R) => oe(h),
                      class: k([
                        "px-3 py-1 text-xs font-bold uppercase flex-shrink-0 transition-colors duration-200",
                        r.value === "dark" ? "text-gray-400 hover:text-pink-400" : "text-gray-400 hover:text-pink-600"
                      ])
                    }, B(h), 11, Ts))), 128))
                  ], 2),
                  p("button", {
                    onClick: m[5] || (m[5] = (h) => $.value = !1),
                    class: k([
                      "p-2 flex-shrink-0 rounded-full transition-colors duration-200",
                      r.value === "dark" ? "hover:bg-gray-800 text-gray-400 hover:text-gray-300" : "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                    ])
                  }, [...m[12] || (m[12] = [
                    p("svg", {
                      class: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      p("path", {
                        d: "M6 18L18 6M6 6l12 12",
                        "stroke-width": "2"
                      })
                    ], -1)
                  ])], 2)
                ], 2),
                p("div", As, [
                  p("div", {
                    ref_key: "directoryContainer",
                    ref: q,
                    class: "flex min-h-full p-8 gap-8"
                  }, [
                    (v(!0), E(G, null, re(ae.value, (h, R) => (v(), E("div", {
                      key: R,
                      class: "w-64 flex-shrink-0"
                    }, [
                      (v(!0), E(G, null, re(h, (I, Re) => (v(), E("div", {
                        key: I.letter,
                        id: `dir-letter-${I.letter}`,
                        class: k(["mb-8 scroll-ml-8", { "last:mb-0": Re === h.length - 1 }])
                      }, [
                        p("h3", Ps, B(I.letter), 1),
                        p("div", Ns, [
                          (v(!0), E(G, null, re(I.items, (ee) => (v(), E("div", {
                            key: ee.name,
                            onClick: (at) => W(A.value.typ, ee.name),
                            class: k([
                              "flex items-center cursor-pointer group p-2 rounded-lg transition-colors duration-200",
                              r.value === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-50"
                            ])
                          }, [
                            p("div", {
                              class: k([
                                "w-4 h-4 border rounded flex-shrink-0 flex items-center justify-center transition-all duration-200",
                                D(A.value.typ, ee.name) ? "bg-pink-500 border-pink-500 dark:bg-pink-600 dark:border-pink-600" : r.value === "dark" ? "bg-gray-800 border-gray-600 group-hover:border-gray-400" : "border-gray-300 group-hover:border-gray-400"
                              ])
                            }, [
                              D(A.value.typ, ee.name) ? (v(), E("svg", Us, [...m[13] || (m[13] = [
                                p("path", {
                                  d: "M5 13l4 4L19 7",
                                  "stroke-width": "3"
                                }, null, -1)
                              ])])) : H("", !0)
                            ], 2),
                            p("span", {
                              class: k([
                                "ml-3 text-sm truncate transition-colors duration-200",
                                D(A.value.typ, ee.name) ? "dark:text-white text-gray-900 font-medium" : r.value === "dark" ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-900"
                              ])
                            }, B(ee.name), 3),
                            p("span", {
                              class: k([
                                "text-[10px] ml-2 flex-shrink-0",
                                r.value === "dark" ? "text-gray-500" : "text-gray-400"
                              ])
                            }, B(ee.count), 3)
                          ], 10, Ls))), 128))
                        ])
                      ], 10, $s))), 128))
                    ]))), 128)),
                    ae.value.length === 0 ? (v(), E("div", Fs, [
                      p("div", Bs, [
                        (v(), E("svg", {
                          class: k([
                            "w-16 h-16 mx-auto mb-4",
                            r.value === "dark" ? "text-gray-700" : "text-gray-300"
                          ]),
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [...m[14] || (m[14] = [
                          p("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.5",
                            d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          }, null, -1)
                        ])], 2)),
                        p("p", {
                          class: k(["mb-1", r.value === "dark" ? "text-gray-400" : "text-gray-500"])
                        }, "No results found", 2),
                        p("p", {
                          class: k(["text-sm", r.value === "dark" ? "text-gray-500" : "text-gray-400"])
                        }, "Try a different search term", 2)
                      ])
                    ])) : H("", !0)
                  ], 512)
                ])
              ], 2)
            ])) : H("", !0)
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
}), Is = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, s] of t)
    r[n] = s;
  return r;
}, Ds = /* @__PURE__ */ Is(js, [["__scopeId", "data-v-6d05d0d5"]]);
function Ms(e, t) {
  return t.split(".").reduce((r, n) => r?.[n], e);
}
function zs(e, t) {
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
    const f = e.slice(a + r.length, i).trim(), [c, d] = f.split("=");
    s.push({ type: "param", value: c, defaultValue: d }), o = i + n.length;
  }
  return s;
}
function qs(e, t, r) {
  const n = /* @__PURE__ */ new Set(), s = e.map((o) => {
    if (o.type === "text") return o.value;
    const a = Ms(t, o.value);
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
function Ot(e, t) {
  const r = {
    open: t?.open ?? "{",
    close: t?.close ?? "}",
    encode: t?.encode ?? !1,
    strict: t?.strict ?? !1
  }, n = zs(e, r);
  return (s) => qs(n, s, r);
}
const Hs = { class: "bg-gray-50/50 dark:bg-[#0b1120] min-h-screen pb-20 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-blue-100 selection:text-blue-900" }, Vs = { class: "flex max-w-[1440px] mx-auto w-full items-start relative" }, Js = { class: "flex-1 w-full min-w-0 px-4 md:px-6 py-6 md:py-8" }, Ws = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
}, Ks = {
  key: 1,
  class: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 list-none"
}, Xs = ["onClick"], Qs = { class: "p-2.5 pb-0" }, Zs = { class: "aspect-[4/5] relative bg-gray-100 dark:bg-slate-800/80 rounded-xl overflow-hidden shadow-inner" }, Ys = ["src", "alt"], Gs = {
  key: 0,
  class: "absolute bottom-2 left-2 bg-red-500/90 backdrop-blur-md text-white text-[10px] md:text-xs px-2 py-1 rounded-md font-bold shadow-sm tracking-wide"
}, eo = { class: "p-3.5 md:p-4 flex flex-col flex-1 gap-1.5" }, to = { class: "flex items-center gap-2 mb-0.5" }, ro = { class: "text-lg md:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight" }, no = {
  key: 0,
  class: "text-[11px] md:text-xs text-slate-400 dark:text-slate-500 font-medium line-through decoration-slate-300 dark:decoration-slate-600"
}, so = { class: "text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1" }, oo = { class: "text-[13px] leading-snug text-slate-700 dark:text-slate-300 font-medium line-clamp-2 h-[2.6em] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, ao = ["onClick"], io = {
  key: 2,
  class: "flex flex-col items-center justify-center py-24 px-4 bg-white dark:bg-[#1e293b] rounded-3xl border border-gray-100 dark:border-slate-800/60 shadow-sm mt-4"
}, lo = {
  key: 0,
  class: "flex gap-2 p-4 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-gray-100 dark:border-slate-700"
}, We = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500", co = /* @__PURE__ */ Ne({
  __name: "Productlist",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    dr();
    const t = N(""), r = N([]), n = N(!1), s = N(!0), o = N(!1), a = N(1), i = N(!0), f = N(null);
    let c = null;
    const y = Ot(e.__p.data.curr.data.api.token, { open: "<", close: ">" })({
      localStorage: {
        token: localStorage.getItem("token") || ""
      }
    }).replace("Bearer ", ""), O = e.__p.data.curr.data.api.url, P = y, u = N(null), w = N({
      cart_popup: {
        ce_file: e.__p.data.curr.data.cart_popup.ce_file
      }
    }), b = {
      change: (x) => {
        a.value = 1, r.value = [], i.value = !0, s.value = !0, U();
      }
    }, T = () => {
      const x = localStorage.getItem("theme");
      x ? n.value = x === "dark" : n.value = window.matchMedia("(prefers-color-scheme: dark)").matches, j();
    }, j = () => {
      n.value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, $ = async () => {
      s.value = !0, r.value = [], a.value = 1, i.value = !0;
      const x = new URLSearchParams(window.location.search);
      t.value ? x.set("q", t.value) : x.delete("q");
      const C = `${window.location.pathname}?${x.toString()}`;
      window.history.replaceState({}, "", C), await U(), s.value = !1;
    }, A = () => {
      t.value = "", window.history.replaceState({}, "", window.location.pathname), $();
    }, U = async () => {
      try {
        const x = new URLSearchParams(window.location.search);
        !t.value && x.has("q") && (t.value = x.get("q") || "");
        let C = t.value.trim() || "_", _ = `?f_raw_text=${encodeURIComponent(C)}`;
        const ie = ["sattr_k", "sattr_v", "page", "per_page", "sort"];
        x.forEach((W, K) => {
          K !== "q" && (ie.includes(K) ? _ += `&${encodeURIComponent(K)}=${encodeURIComponent(W)}` : W.split(",").forEach((m) => {
            _ += `&filter=${encodeURIComponent(K)}:${encodeURIComponent(m)}`;
          }));
        });
        const J = O.split("?")[0], D = await L.post(
          `${J}?typ=get_filter_data`,
          { query: _ },
          { headers: { Authorization: `Bearer ${P}` } }
        );
        if (console.log("🔍 STEP 1 Request String:", _), console.log("🔍 STEP 1 Response:", D.data), !D.data.success || !D.data.search_combination) {
          i.value = !1, s.value = !1;
          return;
        }
        const le = D.data.search_combination;
        le.page = a.value, le.per_page = 20;
        const M = await L.post(
          `${J}?typ=get_product_list`,
          le,
          { headers: { Authorization: `Bearer ${P}` } }
        );
        if (console.log("🛍️ STEP 2 Product Result:", M.data), M.data.success && M.data.data && M.data.data.products?.length > 0) {
          await new Promise((K) => setTimeout(K, 300));
          const W = M.data.data.products;
          for (const K of W)
            r.value.push({ document: K });
          s.value = !1;
        } else
          i.value = !1, s.value = !1;
      } catch (x) {
        console.error("Fetch Products Error:", x), i.value = !1, s.value = !1;
      }
    }, ne = () => {
      c = new IntersectionObserver(async (x) => {
        x[0].isIntersecting && i.value && !s.value && !o.value && (o.value = !0, a.value++, await U(), o.value = !1);
      }, {
        rootMargin: "200px"
      }), f.value && c.observe(f.value);
    }, q = (x) => {
      try {
        const _ = typeof x.metadata == "string" ? JSON.parse(x.metadata) : x.metadata;
        if (_?.color?.[0]?.image?.[0]?.url && !_.color[0].image[0].url.includes("example"))
          return _.color[0].image[0].url;
      } catch {
      }
      const C = x.title ? x.title.toLowerCase() : "";
      return C.includes("dress") ? "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500" : C.includes("shirt") || C.includes("top") ? "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" : C.includes("shoe") || C.includes("sneaker") ? "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" : C.includes("bag") ? "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" : We;
    }, ae = (x) => {
      const C = x.target;
      C.src !== We && (C.src = We);
    }, oe = (x) => {
      const C = x?.variant_prices?.[0] || 0, _ = x?.variant_mrp?.[0] || 0;
      return _ > C ? Math.round((_ - C) / _ * 100) : 0;
    }, ce = (x) => x ? new Intl.NumberFormat("ru-RU").format(x) : "0", ue = (x) => {
      if (!x.document?.slug && !x.document?.id) return;
      const _ = Ot(e.__p.data.curr.data.event.onProductClick)({
        id: x.document?.id,
        slug: x.document?.slug
      });
      location.href = _;
    }, X = (x) => {
      u.value && u.value.ce_call("msg", {
        type: "product:open",
        custom: {
          product_id: x.document?.slug || x.document?.id
        },
        _p: {},
        _$p: {}
      });
    }, F = (x) => {
      const C = x.currentTarget;
      C.classList.toggle("text-red-500"), C.classList.toggle("bg-red-50"), C.classList.toggle("dark:bg-red-500/20");
    };
    return Tt(() => {
      T();
      const x = new URLSearchParams(window.location.search);
      x.has("q") && (t.value = x.get("q") || ""), $().then(() => {
        setTimeout(() => ne(), 100);
      });
    }), ir(() => {
      c && c.disconnect();
    }), (x, C) => (v(), E("div", Hs, [
      p("div", Vs, [
        we(Ds, {
          class: "sticky z-30 shrink-0",
          _p: e._p,
          _$p: e.__p,
          _$cb: b,
          config: { theme: n.value ? "dark" : "light" }
        }, null, 8, ["_p", "_$p", "config"]),
        p("div", Js, [
          s.value ? (v(), E("div", Ws, [
            (v(), E(G, null, re(12, (_) => p("div", {
              key: _,
              class: "bg-white dark:bg-[#1e293b] rounded-2xl p-3 shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col gap-3"
            }, [...C[0] || (C[0] = [
              ct('<div class="aspect-[4/5] bg-gray-200 dark:bg-slate-700/50 rounded-xl relative overflow-hidden"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div><div class="space-y-2 mt-1 px-1"><div class="h-5 bg-gray-200 dark:bg-slate-700/50 rounded-md w-1/2 relative overflow-hidden"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div><div class="h-3 bg-gray-200 dark:bg-slate-700/50 rounded-md w-1/3 relative overflow-hidden"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div><div class="h-4 bg-gray-200 dark:bg-slate-700/50 rounded-md w-full relative overflow-hidden mt-2"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div><div class="h-10 bg-gray-200 dark:bg-slate-700/50 rounded-xl w-full mt-3 relative overflow-hidden"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div></div>', 2)
            ])])), 64))
          ])) : r.value.length > 0 ? (v(), E("ul", Ks, [
            (v(!0), E(G, null, re(r.value, (_, ie) => (v(), E("li", {
              key: (_.document?.id || "") + ie,
              class: "group bg-white dark:bg-[#1e293b] rounded-2xl flex flex-col relative cursor-pointer border border-gray-200/60 dark:border-slate-700/50 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300",
              onClick: (J) => ue(_)
            }, [
              p("div", Qs, [
                p("div", Zs, [
                  p("img", {
                    src: q(_.document),
                    loading: "lazy",
                    alt: _.document?.title || _.document?.brand,
                    onError: ae,
                    class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-multiply dark:mix-blend-normal"
                  }, null, 40, Ys),
                  oe(_.document) > 0 ? (v(), E("span", Gs, " -" + B(oe(_.document)) + "% ", 1)) : H("", !0),
                  p("button", {
                    class: "absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 dark:bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-slate-400 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 shadow-sm",
                    onClick: ut(F, ["stop"])
                  }, [...C[1] || (C[1] = [
                    p("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2.5"
                    }, [
                      p("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
                    ], -1)
                  ])])
                ])
              ]),
              p("div", eo, [
                p("div", to, [
                  p("span", ro, B(ce(_.document?.variant_prices?.[0] || 0)) + " ₽ ", 1),
                  (_.document?.variant_mrp?.[0] || 0) > (_.document?.variant_prices?.[0] || 0) ? (v(), E("span", no, B(ce(_.document?.variant_mrp?.[0] || 0)), 1)) : H("", !0)
                ]),
                C[3] || (C[3] = ct('<div class="flex items-center gap-2 mb-1"><span class="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 border border-green-200/50 dark:border-green-800/50"><span class="w-1.5 h-1.5 rounded-full bg-green-500"></span> Ozon Card </span><div class="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 font-medium"><span class="text-amber-400 text-xs">★</span> 4.9 <span class="text-slate-400 dark:text-slate-500">(128)</span></div></div>', 1)),
                p("div", so, B(_.document?.brand), 1),
                p("h3", oo, B(_.document?.title || _.document?.brand || "Premium Product"), 1),
                C[4] || (C[4] = p("div", { class: "flex-1" }, null, -1)),
                p("button", {
                  class: "mt-3 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-[0_4px_12px_rgba(37,99,235,0.2)] hover:shadow-[0_6px_16px_rgba(37,99,235,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group/btn",
                  onClick: ut((J) => X(_), ["stop"])
                }, [...C[2] || (C[2] = [
                  p("span", null, "Add to Cart", -1),
                  p("svg", {
                    class: "w-4 h-4 transition-transform group-hover/btn:translate-x-1",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2.5"
                  }, [
                    p("path", { d: "M5 12h14M12 5l7 7-7 7" })
                  ], -1)
                ])], 8, ao)
              ])
            ], 8, Xs))), 128))
          ])) : (v(), E("div", io, [
            C[5] || (C[5] = p("div", { class: "w-20 h-20 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-5 shadow-inner" }, "🔍", -1)),
            C[6] || (C[6] = p("h3", { class: "text-xl font-extrabold text-slate-900 dark:text-white mb-2" }, "No results found", -1)),
            C[7] || (C[7] = p("p", { class: "text-slate-500 dark:text-slate-400 mb-8 text-center max-w-md text-sm leading-relaxed" }, "We couldn't find anything matching your search. Try adjusting the filters or use broader keywords to find what you're looking for.", -1)),
            p("button", {
              class: "bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-700 active:scale-95 transition-all",
              onClick: A
            }, " Clear All Filters ")
          ])),
          p("div", {
            ref_key: "sentinel",
            ref: f,
            class: "h-24 flex justify-center items-center w-full mt-4"
          }, [
            o.value ? (v(), E("div", lo, [...C[8] || (C[8] = [
              p("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce" }, null, -1),
              p("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]" }, null, -1),
              p("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]" }, null, -1)
            ])])) : H("", !0)
          ], 512)
        ])
      ]),
      we(Yn, lr({
        ref_key: "cartPopupRef",
        ref: u
      }, {
        ce_file: w.value.cart_popup.ce_file
      }), null, 16)
    ]));
  }
}), uo = /* @__PURE__ */ Ne({
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
    }, 500)))(), (t, r) => (v(), Ke(co, {
      _p: e._p,
      __p: e._$p
    }, null, 8, ["_p", "__p"]));
  }
}), Po = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const n = cr(uo, {
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
  Po as hydrator,
  Po as index
};
