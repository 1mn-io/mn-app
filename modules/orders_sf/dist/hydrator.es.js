import { r as E, w as ht, o as x, c as xt, a as Vt, b as X, d as o, e as ue, n as $, f as w, g as z, t as y, u as Y, h as Q, v as Fe, T as Wt, i as wt, j as Zt, F as D, k as Z, l as ce, m as Jt, p as q, q as re, s as Ne, x as De, y as Qe, z as Xe, A as Qt } from "./runtime-dom.esm-bundler-DutLLhah.js";
function bt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Xt } = Object.prototype, { getPrototypeOf: Ue } = Object, { iterator: _e, toStringTag: yt } = Symbol, Re = /* @__PURE__ */ ((e) => (t) => {
  const r = Xt.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), W = (e) => (e = e.toLowerCase(), (t) => Re(t) === e), ze = (e) => (t) => typeof t === e, { isArray: ae } = Array, ie = ze("undefined");
function pe(e) {
  return e !== null && !ie(e) && e.constructor !== null && !ie(e.constructor) && U(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const kt = W("ArrayBuffer");
function Gt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && kt(e.buffer), t;
}
const Kt = ze("string"), U = ze("function"), _t = ze("number"), fe = (e) => e !== null && typeof e == "object", Yt = (e) => e === !0 || e === !1, we = (e) => {
  if (Re(e) !== "object")
    return !1;
  const t = Ue(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(yt in e) && !(_e in e);
}, er = (e) => {
  if (!fe(e) || pe(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, tr = W("Date"), rr = W("File"), nr = (e) => !!(e && typeof e.uri < "u"), sr = (e) => e && typeof e.getParts < "u", or = W("Blob"), ir = W("FileList"), ar = (e) => fe(e) && U(e.pipe);
function lr() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Ge = lr(), Ke = typeof Ge.FormData < "u" ? Ge.FormData : void 0, dr = (e) => {
  let t;
  return e && (Ke && e instanceof Ke || U(e.append) && ((t = Re(e)) === "formdata" || // detect form-data instance
  t === "object" && U(e.toString) && e.toString() === "[object FormData]"));
}, ur = W("URLSearchParams"), [cr, pr, fr, gr] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(W), mr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ge(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), ae(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    if (pe(e))
      return;
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let l;
    for (n = 0; n < i; n++)
      l = a[n], t.call(null, e[l], l, e);
  }
}
function Rt(e, t) {
  if (pe(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const ee = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, zt = (e) => !ie(e) && e !== ee;
function Be() {
  const { caseless: e, skipUndefined: t } = zt(this) && this || {}, r = {}, n = (s, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const i = e && Rt(r, a) || a;
    we(r[i]) && we(s) ? r[i] = Be(r[i], s) : we(s) ? r[i] = Be({}, s) : ae(s) ? r[i] = s.slice() : (!t || !ie(s)) && (r[i] = s);
  };
  for (let s = 0, a = arguments.length; s < a; s++)
    arguments[s] && ge(arguments[s], n);
  return r;
}
const vr = (e, t, r, { allOwnKeys: n } = {}) => (ge(
  t,
  (s, a) => {
    r && U(s) ? Object.defineProperty(e, a, {
      value: bt(s, r),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, a, {
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: n }
), e), hr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), xr = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, wr = (e, t, r, n) => {
  let s, a, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      i = s[a], (!n || n(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = r !== !1 && Ue(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, br = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, yr = (e) => {
  if (!e) return null;
  if (ae(e)) return e;
  let t = e.length;
  if (!_t(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, kr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ue(Uint8Array)), _r = (e, t) => {
  const n = (e && e[_e]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, Rr = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, zr = W("HTMLFormElement"), Er = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, n, s) {
  return n.toUpperCase() + s;
}), Ye = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Cr = W("RegExp"), Et = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ge(r, (s, a) => {
    let i;
    (i = t(s, a, e)) !== !1 && (n[a] = i || s);
  }), Object.defineProperties(e, n);
}, Sr = (e) => {
  Et(e, (t, r) => {
    if (U(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (U(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Ar = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((a) => {
      r[a] = !0;
    });
  };
  return ae(e) ? n(e) : n(String(e).split(t)), r;
}, Or = () => {
}, $r = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Tr(e) {
  return !!(e && U(e.append) && e[yt] === "FormData" && e[_e]);
}
const jr = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (fe(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (pe(n))
        return n;
      if (!("toJSON" in n)) {
        t[s] = n;
        const a = ae(n) ? [] : {};
        return ge(n, (i, l) => {
          const g = r(i, s + 1);
          !ie(g) && (a[l] = g);
        }), t[s] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, Nr = W("AsyncFunction"), Br = (e) => e && (fe(e) || U(e)) && U(e.then) && U(e.catch), Ct = ((e, t) => e ? setImmediate : t ? ((r, n) => (ee.addEventListener(
  "message",
  ({ source: s, data: a }) => {
    s === ee && a === r && n.length && n.shift()();
  },
  !1
), (s) => {
  n.push(s), ee.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(typeof setImmediate == "function", U(ee.postMessage)), Lr = typeof queueMicrotask < "u" ? queueMicrotask.bind(ee) : typeof process < "u" && process.nextTick || Ct, Mr = (e) => e != null && U(e[_e]), d = {
  isArray: ae,
  isArrayBuffer: kt,
  isBuffer: pe,
  isFormData: dr,
  isArrayBufferView: Gt,
  isString: Kt,
  isNumber: _t,
  isBoolean: Yt,
  isObject: fe,
  isPlainObject: we,
  isEmptyObject: er,
  isReadableStream: cr,
  isRequest: pr,
  isResponse: fr,
  isHeaders: gr,
  isUndefined: ie,
  isDate: tr,
  isFile: rr,
  isReactNativeBlob: nr,
  isReactNative: sr,
  isBlob: or,
  isRegExp: Cr,
  isFunction: U,
  isStream: ar,
  isURLSearchParams: ur,
  isTypedArray: kr,
  isFileList: ir,
  forEach: ge,
  merge: Be,
  extend: vr,
  trim: mr,
  stripBOM: hr,
  inherits: xr,
  toFlatObject: wr,
  kindOf: Re,
  kindOfTest: W,
  endsWith: br,
  toArray: yr,
  forEachEntry: _r,
  matchAll: Rr,
  isHTMLForm: zr,
  hasOwnProperty: Ye,
  hasOwnProp: Ye,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Et,
  freezeMethods: Sr,
  toObjectSet: Ar,
  toCamelCase: Er,
  noop: Or,
  toFiniteNumber: $r,
  findKey: Rt,
  global: ee,
  isContextDefined: zt,
  isSpecCompliantForm: Tr,
  toJSONObject: jr,
  isAsyncFn: Nr,
  isThenable: Br,
  setImmediate: Ct,
  asap: Lr,
  isIterable: Mr
};
let k = class St extends Error {
  static from(t, r, n, s, a, i) {
    const l = new St(t.message, r || t.code, n, s, a);
    return l.cause = t, l.name = t.name, t.status != null && l.status == null && (l.status = t.status), i && Object.assign(l, i), l;
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
  constructor(t, r, n, s, a) {
    super(t), Object.defineProperty(this, "message", {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, r && (this.code = r), n && (this.config = n), s && (this.request = s), a && (this.response = a, this.status = a.status);
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
      config: d.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
k.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
k.ERR_BAD_OPTION = "ERR_BAD_OPTION";
k.ECONNABORTED = "ECONNABORTED";
k.ETIMEDOUT = "ETIMEDOUT";
k.ERR_NETWORK = "ERR_NETWORK";
k.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
k.ERR_DEPRECATED = "ERR_DEPRECATED";
k.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
k.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
k.ERR_CANCELED = "ERR_CANCELED";
k.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
k.ERR_INVALID_URL = "ERR_INVALID_URL";
const Pr = null;
function Le(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function At(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Oe(e, t, r) {
  return e ? e.concat(t).map(function(s, a) {
    return s = At(s), !r && a ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Fr(e) {
  return d.isArray(e) && !e.some(Le);
}
const Dr = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ee(e, t, r) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = d.toFlatObject(
    r,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(b, h) {
      return !d.isUndefined(h[b]);
    }
  );
  const n = r.metaTokens, s = r.visitor || p, a = r.dots, i = r.indexes, g = (r.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(s))
    throw new TypeError("visitor must be a function");
  function m(c) {
    if (c === null) return "";
    if (d.isDate(c))
      return c.toISOString();
    if (d.isBoolean(c))
      return c.toString();
    if (!g && d.isBlob(c))
      throw new k("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(c) || d.isTypedArray(c) ? g && typeof Blob == "function" ? new Blob([c]) : Buffer.from(c) : c;
  }
  function p(c, b, h) {
    let S = c;
    if (d.isReactNative(t) && d.isReactNativeBlob(c))
      return t.append(Oe(h, b, a), m(c)), !1;
    if (c && !h && typeof c == "object") {
      if (d.endsWith(b, "{}"))
        b = n ? b : b.slice(0, -2), c = JSON.stringify(c);
      else if (d.isArray(c) && Fr(c) || (d.isFileList(c) || d.endsWith(b, "[]")) && (S = d.toArray(c)))
        return b = At(b), S.forEach(function(C, O) {
          !(d.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Oe([b], O, a) : i === null ? b : b + "[]",
            m(C)
          );
        }), !1;
    }
    return Le(c) ? !0 : (t.append(Oe(h, b, a), m(c)), !1);
  }
  const v = [], u = Object.assign(Dr, {
    defaultVisitor: p,
    convertValue: m,
    isVisitable: Le
  });
  function f(c, b) {
    if (!d.isUndefined(c)) {
      if (v.indexOf(c) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      v.push(c), d.forEach(c, function(S, A) {
        (!(d.isUndefined(S) || S === null) && s.call(t, S, d.isString(A) ? A.trim() : A, b, u)) === !0 && f(S, b ? b.concat(A) : [A]);
      }), v.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return f(e), t;
}
function et(e) {
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
function Ie(e, t) {
  this._pairs = [], e && Ee(e, this, t);
}
const Ot = Ie.prototype;
Ot.append = function(t, r) {
  this._pairs.push([t, r]);
};
Ot.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, et);
  } : et;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function Ur(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function $t(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Ur, s = d.isFunction(r) ? {
    serialize: r
  } : r, a = s && s.serialize;
  let i;
  if (a ? i = a(t, s) : i = d.isURLSearchParams(t) ? t.toString() : new Ie(t, s).toString(n), i) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class tt {
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
    d.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const qe = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Ir = typeof URLSearchParams < "u" ? URLSearchParams : Ie, qr = typeof FormData < "u" ? FormData : null, Hr = typeof Blob < "u" ? Blob : null, Vr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ir,
    FormData: qr,
    Blob: Hr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, He = typeof window < "u" && typeof document < "u", Me = typeof navigator == "object" && navigator || void 0, Wr = He && (!Me || ["ReactNative", "NativeScript", "NS"].indexOf(Me.product) < 0), Zr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Jr = He && window.location.href || "http://localhost", Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: He,
  hasStandardBrowserEnv: Wr,
  hasStandardBrowserWebWorkerEnv: Zr,
  navigator: Me,
  origin: Jr
}, Symbol.toStringTag, { value: "Module" })), M = {
  ...Qr,
  ...Vr
};
function Xr(e, t) {
  return Ee(e, new M.classes.URLSearchParams(), {
    visitor: function(r, n, s, a) {
      return M.isNode && d.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Gr(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Kr(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let a;
  for (n = 0; n < s; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function Tt(e) {
  function t(r, n, s, a) {
    let i = r[a++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), g = a >= r.length;
    return i = !i && d.isArray(s) ? s.length : i, g ? (d.hasOwnProp(s, i) ? s[i] = [s[i], n] : s[i] = n, !l) : ((!s[i] || !d.isObject(s[i])) && (s[i] = []), t(r, n, s[i], a) && d.isArray(s[i]) && (s[i] = Kr(s[i])), !l);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const r = {};
    return d.forEachEntry(e, (n, s) => {
      t(Gr(n), s, r, 0);
    }), r;
  }
  return null;
}
function Yr(e, t, r) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const me = {
  transitional: qe,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, r) {
      const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, a = d.isObject(t);
      if (a && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
        return s ? JSON.stringify(Tt(t)) : t;
      if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t) || d.isReadableStream(t))
        return t;
      if (d.isArrayBufferView(t))
        return t.buffer;
      if (d.isURLSearchParams(t))
        return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (a) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return Xr(t, this.formSerializer).toString();
        if ((l = d.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const g = this.env && this.env.FormData;
          return Ee(
            l ? { "files[]": t } : t,
            g && new g(),
            this.formSerializer
          );
        }
      }
      return a || s ? (r.setContentType("application/json", !1), Yr(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const r = this.transitional || me.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
      if (d.isResponse(t) || d.isReadableStream(t))
        return t;
      if (t && d.isString(t) && (n && !this.responseType || s)) {
        const i = !(r && r.silentJSONParsing) && s;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError" ? k.from(l, k.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: M.classes.FormData,
    Blob: M.classes.Blob
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
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  me.headers[e] = {};
});
const en = d.toObjectSet([
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
]), tn = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), r = i.substring(0, s).trim().toLowerCase(), n = i.substring(s + 1).trim(), !(!r || t[r] && en[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, rt = /* @__PURE__ */ Symbol("internals");
function de(e) {
  return e && String(e).trim().toLowerCase();
}
function be(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(be) : String(e);
}
function rn(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const nn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function $e(e, t, r, n, s) {
  if (d.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!d.isString(t)) {
    if (d.isString(n))
      return t.indexOf(n) !== -1;
    if (d.isRegExp(n))
      return n.test(t);
  }
}
function sn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function on(e, t) {
  const r = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, a, i) {
        return this[n].call(this, t, s, a, i);
      },
      configurable: !0
    });
  });
}
let I = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function a(l, g, m) {
      const p = de(g);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const v = d.findKey(s, p);
      (!v || s[v] === void 0 || m === !0 || m === void 0 && s[v] !== !1) && (s[v || g] = be(l));
    }
    const i = (l, g) => d.forEach(l, (m, p) => a(m, p, g));
    if (d.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (d.isString(t) && (t = t.trim()) && !nn(t))
      i(tn(t), r);
    else if (d.isObject(t) && d.isIterable(t)) {
      let l = {}, g, m;
      for (const p of t) {
        if (!d.isArray(p))
          throw TypeError("Object iterator must return a key-value pair");
        l[m = p[0]] = (g = l[m]) ? d.isArray(g) ? [...g, p[1]] : [g, p[1]] : p[1];
      }
      i(l, r);
    } else
      t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = de(t), t) {
      const n = d.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return rn(s);
        if (d.isFunction(r))
          return r.call(this, s, n);
        if (d.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = de(t), t) {
      const n = d.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || $e(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function a(i) {
      if (i = de(i), i) {
        const l = d.findKey(n, i);
        l && (!r || $e(n, n[l], l, r)) && (delete n[l], s = !0);
      }
    }
    return d.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || $e(this, this[a], a, t, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return d.forEach(this, (s, a) => {
      const i = d.findKey(n, a);
      if (i) {
        r[i] = be(s), delete r[a];
        return;
      }
      const l = t ? sn(a) : String(a).trim();
      l !== a && delete r[a], r[l] = be(s), n[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && d.isArray(n) ? n.join(", ") : n);
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
    const n = (this[rt] = this[rt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(i) {
      const l = de(i);
      n[l] || (on(s, i), n[l] = !0);
    }
    return d.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
I.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
d.reduceDescriptors(I.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
d.freezeMethods(I);
function Te(e, t) {
  const r = this || me, n = t || r, s = I.from(n.headers);
  let a = n.data;
  return d.forEach(e, function(l) {
    a = l.call(r, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function jt(e) {
  return !!(e && e.__CANCEL__);
}
let ve = class extends k {
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
    super(t ?? "canceled", k.ERR_CANCELED, r, n), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Nt(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(
    new k(
      "Request failed with status code " + r.status,
      [k.ERR_BAD_REQUEST, k.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
      r.config,
      r.request,
      r
    )
  );
}
function an(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ln(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(g) {
    const m = Date.now(), p = n[a];
    i || (i = m), r[s] = g, n[s] = m;
    let v = a, u = 0;
    for (; v !== s; )
      u += r[v++], v = v % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), m - i < t)
      return;
    const f = p && m - p;
    return f ? Math.round(u * 1e3 / f) : void 0;
  };
}
function dn(e, t) {
  let r = 0, n = 1e3 / t, s, a;
  const i = (m, p = Date.now()) => {
    r = p, s = null, a && (clearTimeout(a), a = null), e(...m);
  };
  return [(...m) => {
    const p = Date.now(), v = p - r;
    v >= n ? i(m, p) : (s = m, a || (a = setTimeout(() => {
      a = null, i(s);
    }, n - v)));
  }, () => s && i(s)];
}
const ke = (e, t, r = 3) => {
  let n = 0;
  const s = ln(50, 250);
  return dn((a) => {
    const i = a.loaded, l = a.lengthComputable ? a.total : void 0, g = i - n, m = s(g), p = i <= l;
    n = i;
    const v = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: g,
      rate: m || void 0,
      estimated: m && l && p ? (l - i) / m : void 0,
      event: a,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(v);
  }, r);
}, nt = (e, t) => {
  const r = e != null;
  return [
    (n) => t[0]({
      lengthComputable: r,
      total: e,
      loaded: n
    }),
    t[1]
  ];
}, st = (e) => (...t) => d.asap(() => e(...t)), un = M.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, M.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(M.origin),
  M.navigator && /(msie|trident)/i.test(M.navigator.userAgent)
) : () => !0, cn = M.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, a, i) {
      if (typeof document > "u") return;
      const l = [`${e}=${encodeURIComponent(t)}`];
      d.isNumber(r) && l.push(`expires=${new Date(r).toUTCString()}`), d.isString(n) && l.push(`path=${n}`), d.isString(s) && l.push(`domain=${s}`), a === !0 && l.push("secure"), d.isString(i) && l.push(`SameSite=${i}`), document.cookie = l.join("; ");
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
function pn(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function fn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Bt(e, t, r) {
  let n = !pn(t);
  return e && (n || r == !1) ? fn(e, t) : t;
}
const ot = (e) => e instanceof I ? { ...e } : e;
function ne(e, t) {
  t = t || {};
  const r = {};
  function n(m, p, v, u) {
    return d.isPlainObject(m) && d.isPlainObject(p) ? d.merge.call({ caseless: u }, m, p) : d.isPlainObject(p) ? d.merge({}, p) : d.isArray(p) ? p.slice() : p;
  }
  function s(m, p, v, u) {
    if (d.isUndefined(p)) {
      if (!d.isUndefined(m))
        return n(void 0, m, v, u);
    } else return n(m, p, v, u);
  }
  function a(m, p) {
    if (!d.isUndefined(p))
      return n(void 0, p);
  }
  function i(m, p) {
    if (d.isUndefined(p)) {
      if (!d.isUndefined(m))
        return n(void 0, m);
    } else return n(void 0, p);
  }
  function l(m, p, v) {
    if (v in t)
      return n(m, p);
    if (v in e)
      return n(void 0, m);
  }
  const g = {
    url: a,
    method: a,
    data: a,
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
    validateStatus: l,
    headers: (m, p, v) => s(ot(m), ot(p), v, !0)
  };
  return d.forEach(Object.keys({ ...e, ...t }), function(p) {
    if (p === "__proto__" || p === "constructor" || p === "prototype") return;
    const v = d.hasOwnProp(g, p) ? g[p] : s, u = v(e[p], t[p], p);
    d.isUndefined(u) && v !== l || (r[p] = u);
  }), r;
}
const Lt = (e) => {
  const t = ne({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: a, headers: i, auth: l } = t;
  if (t.headers = i = I.from(i), t.url = $t(
    Bt(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), l && i.set(
    "Authorization",
    "Basic " + btoa(
      (l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")
    )
  ), d.isFormData(r)) {
    if (M.hasStandardBrowserEnv || M.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (d.isFunction(r.getHeaders)) {
      const g = r.getHeaders(), m = ["content-type", "content-length"];
      Object.entries(g).forEach(([p, v]) => {
        m.includes(p.toLowerCase()) && i.set(p, v);
      });
    }
  }
  if (M.hasStandardBrowserEnv && (n && d.isFunction(n) && (n = n(t)), n || n !== !1 && un(t.url))) {
    const g = s && a && cn.read(a);
    g && i.set(s, g);
  }
  return t;
}, gn = typeof XMLHttpRequest < "u", mn = gn && function(e) {
  return new Promise(function(r, n) {
    const s = Lt(e);
    let a = s.data;
    const i = I.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: g, onDownloadProgress: m } = s, p, v, u, f, c;
    function b() {
      f && f(), c && c(), s.cancelToken && s.cancelToken.unsubscribe(p), s.signal && s.signal.removeEventListener("abort", p);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function S() {
      if (!h)
        return;
      const C = I.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), P = {
        data: !l || l === "text" || l === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: C,
        config: e,
        request: h
      };
      Nt(
        function(B) {
          r(B), b();
        },
        function(B) {
          n(B), b();
        },
        P
      ), h = null;
    }
    "onloadend" in h ? h.onloadend = S : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, h.onabort = function() {
      h && (n(new k("Request aborted", k.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(O) {
      const P = O && O.message ? O.message : "Network Error", J = new k(P, k.ERR_NETWORK, e, h);
      J.event = O || null, n(J), h = null;
    }, h.ontimeout = function() {
      let O = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const P = s.transitional || qe;
      s.timeoutErrorMessage && (O = s.timeoutErrorMessage), n(
        new k(
          O,
          P.clarifyTimeoutError ? k.ETIMEDOUT : k.ECONNABORTED,
          e,
          h
        )
      ), h = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in h && d.forEach(i.toJSON(), function(O, P) {
      h.setRequestHeader(P, O);
    }), d.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), l && l !== "json" && (h.responseType = s.responseType), m && ([u, c] = ke(m, !0), h.addEventListener("progress", u)), g && h.upload && ([v, f] = ke(g), h.upload.addEventListener("progress", v), h.upload.addEventListener("loadend", f)), (s.cancelToken || s.signal) && (p = (C) => {
      h && (n(!C || C.type ? new ve(null, e, h) : C), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(p), s.signal && (s.signal.aborted ? p() : s.signal.addEventListener("abort", p)));
    const A = an(s.url);
    if (A && M.protocols.indexOf(A) === -1) {
      n(
        new k(
          "Unsupported protocol " + A + ":",
          k.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    h.send(a || null);
  });
}, vn = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), s;
    const a = function(m) {
      if (!s) {
        s = !0, l();
        const p = m instanceof Error ? m : this.reason;
        n.abort(
          p instanceof k ? p : new ve(p instanceof Error ? p.message : p)
        );
      }
    };
    let i = t && setTimeout(() => {
      i = null, a(new k(`timeout of ${t}ms exceeded`, k.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((m) => {
        m.unsubscribe ? m.unsubscribe(a) : m.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((m) => m.addEventListener("abort", a));
    const { signal: g } = n;
    return g.unsubscribe = () => d.asap(l), g;
  }
}, hn = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, xn = async function* (e, t) {
  for await (const r of wn(e))
    yield* hn(r, t);
}, wn = async function* (e) {
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
}, it = (e, t, r, n) => {
  const s = xn(e, t);
  let a = 0, i, l = (g) => {
    i || (i = !0, n && n(g));
  };
  return new ReadableStream(
    {
      async pull(g) {
        try {
          const { done: m, value: p } = await s.next();
          if (m) {
            l(), g.close();
            return;
          }
          let v = p.byteLength;
          if (r) {
            let u = a += v;
            r(u);
          }
          g.enqueue(new Uint8Array(p));
        } catch (m) {
          throw l(m), m;
        }
      },
      cancel(g) {
        return l(g), s.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, at = 64 * 1024, { isFunction: xe } = d, bn = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(d.global), { ReadableStream: lt, TextEncoder: dt } = d.global, ut = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, yn = (e) => {
  e = d.merge.call(
    {
      skipUndefined: !0
    },
    bn,
    e
  );
  const { fetch: t, Request: r, Response: n } = e, s = t ? xe(t) : typeof fetch == "function", a = xe(r), i = xe(n);
  if (!s)
    return !1;
  const l = s && xe(lt), g = s && (typeof dt == "function" ? /* @__PURE__ */ ((c) => (b) => c.encode(b))(new dt()) : async (c) => new Uint8Array(await new r(c).arrayBuffer())), m = a && l && ut(() => {
    let c = !1;
    const b = new r(M.origin, {
      body: new lt(),
      method: "POST",
      get duplex() {
        return c = !0, "half";
      }
    }).headers.has("Content-Type");
    return c && !b;
  }), p = i && l && ut(() => d.isReadableStream(new n("").body)), v = {
    stream: p && ((c) => c.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((c) => {
    !v[c] && (v[c] = (b, h) => {
      let S = b && b[c];
      if (S)
        return S.call(b);
      throw new k(
        `Response type '${c}' is not supported`,
        k.ERR_NOT_SUPPORT,
        h
      );
    });
  });
  const u = async (c) => {
    if (c == null)
      return 0;
    if (d.isBlob(c))
      return c.size;
    if (d.isSpecCompliantForm(c))
      return (await new r(M.origin, {
        method: "POST",
        body: c
      }).arrayBuffer()).byteLength;
    if (d.isArrayBufferView(c) || d.isArrayBuffer(c))
      return c.byteLength;
    if (d.isURLSearchParams(c) && (c = c + ""), d.isString(c))
      return (await g(c)).byteLength;
  }, f = async (c, b) => {
    const h = d.toFiniteNumber(c.getContentLength());
    return h ?? u(b);
  };
  return async (c) => {
    let {
      url: b,
      method: h,
      data: S,
      signal: A,
      cancelToken: C,
      timeout: O,
      onDownloadProgress: P,
      onUploadProgress: J,
      responseType: B,
      headers: le,
      withCredentials: H = "same-origin",
      fetchOptions: L
    } = Lt(c), _ = t || fetch;
    B = B ? (B + "").toLowerCase() : "text";
    let N = vn(
      [A, C && C.toAbortSignal()],
      O
    ), R = null;
    const T = N && N.unsubscribe && (() => {
      N.unsubscribe();
    });
    let Se;
    try {
      if (J && m && h !== "get" && h !== "head" && (Se = await f(le, S)) !== 0) {
        let K = new r(b, {
          method: "POST",
          body: S,
          duplex: "half"
        }), oe;
        if (d.isFormData(S) && (oe = K.headers.get("content-type")) && le.setContentType(oe), K.body) {
          const [Ae, he] = nt(
            Se,
            ke(st(J))
          );
          S = it(K.body, at, Ae, he);
        }
      }
      d.isString(H) || (H = H ? "include" : "omit");
      const F = a && "credentials" in r.prototype, We = {
        ...L,
        signal: N,
        method: h.toUpperCase(),
        headers: le.normalize().toJSON(),
        body: S,
        duplex: "half",
        credentials: F ? H : void 0
      };
      R = a && new r(b, We);
      let G = await (a ? _(R, L) : _(b, We));
      const Ze = p && (B === "stream" || B === "response");
      if (p && (P || Ze && T)) {
        const K = {};
        ["status", "statusText", "headers"].forEach((Je) => {
          K[Je] = G[Je];
        });
        const oe = d.toFiniteNumber(G.headers.get("content-length")), [Ae, he] = P && nt(
          oe,
          ke(st(P), !0)
        ) || [];
        G = new n(
          it(G.body, at, Ae, () => {
            he && he(), T && T();
          }),
          K
        );
      }
      B = B || "text";
      let Ht = await v[d.findKey(v, B) || "text"](
        G,
        c
      );
      return !Ze && T && T(), await new Promise((K, oe) => {
        Nt(K, oe, {
          data: Ht,
          headers: I.from(G.headers),
          status: G.status,
          statusText: G.statusText,
          config: c,
          request: R
        });
      });
    } catch (F) {
      throw T && T(), F && F.name === "TypeError" && /Load failed|fetch/i.test(F.message) ? Object.assign(
        new k(
          "Network Error",
          k.ERR_NETWORK,
          c,
          R,
          F && F.response
        ),
        {
          cause: F.cause || F
        }
      ) : k.from(F, F && F.code, c, R, F && F.response);
    }
  };
}, kn = /* @__PURE__ */ new Map(), Mt = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: s } = t, a = [n, s, r];
  let i = a.length, l = i, g, m, p = kn;
  for (; l--; )
    g = a[l], m = p.get(g), m === void 0 && p.set(g, m = l ? /* @__PURE__ */ new Map() : yn(t)), p = m;
  return m;
};
Mt();
const Ve = {
  http: Pr,
  xhr: mn,
  fetch: {
    get: Mt
  }
};
d.forEach(Ve, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ct = (e) => `- ${e}`, _n = (e) => d.isFunction(e) || e === null || e === !1;
function Rn(e, t) {
  e = d.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, s;
  const a = {};
  for (let i = 0; i < r; i++) {
    n = e[i];
    let l;
    if (s = n, !_n(n) && (s = Ve[(l = String(n)).toLowerCase()], s === void 0))
      throw new k(`Unknown adapter '${l}'`);
    if (s && (d.isFunction(s) || (s = s.get(t))))
      break;
    a[l || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(a).map(
      ([g, m]) => `adapter ${g} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = r ? i.length > 1 ? `since :
` + i.map(ct).join(`
`) : " " + ct(i[0]) : "as no adapter specified";
    throw new k(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Pt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Rn,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ve
};
function je(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ve(null, e);
}
function pt(e) {
  return je(e), e.headers = I.from(e.headers), e.data = Te.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Pt.getAdapter(e.adapter || me.adapter, e)(e).then(
    function(n) {
      return je(e), n.data = Te.call(e, e.transformResponse, n), n.headers = I.from(n.headers), n;
    },
    function(n) {
      return jt(n) || (je(e), n && n.response && (n.response.data = Te.call(
        e,
        e.transformResponse,
        n.response
      ), n.response.headers = I.from(n.response.headers))), Promise.reject(n);
    }
  );
}
const Ft = "1.13.6", Ce = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ce[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ft = {};
Ce.transitional = function(t, r, n) {
  function s(a, i) {
    return "[Axios v" + Ft + "] Transitional option '" + a + "'" + i + (n ? ". " + n : "");
  }
  return (a, i, l) => {
    if (t === !1)
      throw new k(
        s(i, " has been removed" + (r ? " in " + r : "")),
        k.ERR_DEPRECATED
      );
    return r && !ft[i] && (ft[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, i, l) : !0;
  };
};
Ce.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function zn(e, t, r) {
  if (typeof e != "object")
    throw new k("options must be an object", k.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const a = n[s], i = t[a];
    if (i) {
      const l = e[a], g = l === void 0 || i(l, a, e);
      if (g !== !0)
        throw new k(
          "option " + a + " must be " + g,
          k.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (r !== !0)
      throw new k("Unknown option " + a, k.ERR_BAD_OPTION);
  }
}
const ye = {
  assertOptions: zn,
  validators: Ce
}, V = ye.validators;
let te = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new tt(),
      response: new tt()
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
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ne(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: a } = r;
    n !== void 0 && ye.assertOptions(
      n,
      {
        silentJSONParsing: V.transitional(V.boolean),
        forcedJSONParsing: V.transitional(V.boolean),
        clarifyTimeoutError: V.transitional(V.boolean),
        legacyInterceptorReqResOrdering: V.transitional(V.boolean)
      },
      !1
    ), s != null && (d.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : ye.assertOptions(
      s,
      {
        encode: V.function,
        serialize: V.function
      },
      !0
    )), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), ye.assertOptions(
      r,
      {
        baseUrl: V.spelling("baseURL"),
        withXsrfToken: V.spelling("withXSRFToken")
      },
      !0
    ), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = a && d.merge(a.common, a[r.method]);
    a && d.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (c) => {
      delete a[c];
    }), r.headers = I.concat(i, a);
    const l = [];
    let g = !0;
    this.interceptors.request.forEach(function(b) {
      if (typeof b.runWhen == "function" && b.runWhen(r) === !1)
        return;
      g = g && b.synchronous;
      const h = r.transitional || qe;
      h && h.legacyInterceptorReqResOrdering ? l.unshift(b.fulfilled, b.rejected) : l.push(b.fulfilled, b.rejected);
    });
    const m = [];
    this.interceptors.response.forEach(function(b) {
      m.push(b.fulfilled, b.rejected);
    });
    let p, v = 0, u;
    if (!g) {
      const c = [pt.bind(this), void 0];
      for (c.unshift(...l), c.push(...m), u = c.length, p = Promise.resolve(r); v < u; )
        p = p.then(c[v++], c[v++]);
      return p;
    }
    u = l.length;
    let f = r;
    for (; v < u; ) {
      const c = l[v++], b = l[v++];
      try {
        f = c(f);
      } catch (h) {
        b.call(this, h);
        break;
      }
    }
    try {
      p = pt.call(this, f);
    } catch (c) {
      return Promise.reject(c);
    }
    for (v = 0, u = m.length; v < u; )
      p = p.then(m[v++], m[v++]);
    return p;
  }
  getUri(t) {
    t = ne(this.defaults, t);
    const r = Bt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return $t(r, t.params, t.paramsSerializer);
  }
};
d.forEach(["delete", "get", "head", "options"], function(t) {
  te.prototype[t] = function(r, n) {
    return this.request(
      ne(n || {}, {
        method: t,
        url: r,
        data: (n || {}).data
      })
    );
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, i, l) {
      return this.request(
        ne(l || {}, {
          method: t,
          headers: n ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: a,
          data: i
        })
      );
    };
  }
  te.prototype[t] = r(), te.prototype[t + "Form"] = r(!0);
});
let En = class Dt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const i = new Promise((l) => {
        n.subscribe(l), a = l;
      }).then(s);
      return i.cancel = function() {
        n.unsubscribe(a);
      }, i;
    }, t(function(a, i, l) {
      n.reason || (n.reason = new ve(a, i, l), r(n.reason));
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
function Cn(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Sn(e) {
  return d.isObject(e) && e.isAxiosError === !0;
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
function Ut(e) {
  const t = new te(e), r = bt(te.prototype.request, t);
  return d.extend(r, te.prototype, t, { allOwnKeys: !0 }), d.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Ut(ne(e, s));
  }, r;
}
const j = Ut(me);
j.Axios = te;
j.CanceledError = ve;
j.CancelToken = En;
j.isCancel = jt;
j.VERSION = Ft;
j.toFormData = Ee;
j.AxiosError = k;
j.Cancel = j.CanceledError;
j.all = function(t) {
  return Promise.all(t);
};
j.spread = Cn;
j.isAxiosError = Sn;
j.mergeConfig = ne;
j.AxiosHeaders = I;
j.formToJSON = (e) => Tt(d.isHTMLForm(e) ? new FormData(e) : e);
j.getAdapter = Pt.getAdapter;
j.HttpStatusCode = Pe;
j.default = j;
const {
  Axios: Hi,
  AxiosError: Vi,
  CanceledError: Wi,
  isCancel: Zi,
  CancelToken: Ji,
  VERSION: Qi,
  all: Xi,
  Cancel: Gi,
  isAxiosError: Ki,
  spread: Yi,
  toFormData: ea,
  AxiosHeaders: ta,
  HttpStatusCode: ra,
  formToJSON: na,
  getAdapter: sa,
  mergeConfig: oa
} = j;
function An() {
  const e = E(!1), t = E(null);
  return { post: async (n, s, a = null) => {
    e.value = !0, t.value = null;
    try {
      const { data: i } = await j.post(n, s, {
        headers: a ? { Authorization: `Bearer ${a}` } : {}
      });
      return i;
    } catch (i) {
      return t.value = i.response?.data?.message || "Error", null;
    } finally {
      e.value = !1;
    }
  }, loading: e, error: t };
}
const On = E(), It = () => ({ _$p: On });
function $n(e, t) {
  return t.split(".").reduce((r, n) => r?.[n], e);
}
function Tn(e, t) {
  const { open: r, close: n } = t, s = [];
  let a = 0;
  for (; a < e.length; ) {
    const i = e.indexOf(r, a);
    if (i === -1) {
      s.push({ type: "text", value: e.slice(a) });
      break;
    }
    i > a && s.push({ type: "text", value: e.slice(a, i) });
    const l = e.indexOf(n, i + r.length);
    if (l === -1)
      throw new Error(`Unclosed template placeholder starting at ${i}`);
    const g = e.slice(i + r.length, l).trim(), [m, p] = g.split("=");
    s.push({ type: "param", value: m, defaultValue: p }), a = l + n.length;
  }
  return s;
}
function jn(e, t, r) {
  const n = /* @__PURE__ */ new Set(), s = e.map((a) => {
    if (a.type === "text") return a.value;
    const i = $n(t, a.value);
    if (n.add(a.value.split(".")[0]), i === void 0 || i === "") {
      if (a.defaultValue !== void 0) return a.defaultValue;
      if (r.strict) throw new Error(`Missing param: ${a.value}`);
      return "";
    }
    return r.encode ? encodeURIComponent(String(i)) : String(i);
  }).join("");
  if (r.strict) {
    for (const a of Object.keys(t))
      if (!n.has(a))
        throw new Error(`Unused param provided: ${a}`);
  }
  return s;
}
function Nn(e, t) {
  const r = {
    open: t?.open,
    close: t?.close,
    encode: t?.encode ?? !1,
    strict: t?.strict ?? !1
  }, n = Tn(e, r);
  return (s) => jn(n, s, r);
}
const gt = E([]), mt = E([]), vt = E(null), qt = E(localStorage.getItem("page_state") || "ORDER_PAGE");
ht(qt, (e) => localStorage.setItem("page_state", e));
const se = () => {
  const { _$p: e } = It(), { post: t, error: r } = An(), s = Nn(e.value?.data.curr.data.api.token, { open: "<", close: ">" })({
    localStorage: {
      token: localStorage.getItem("token") || ""
    }
  }).replace("Bearer ", ""), a = e.value?.data.curr.data.api.url, i = s, l = async () => {
    const f = await t(
      a,
      {
        operation: "get_orders",
        user_id: "user_1",
        search: "",
        page: 1,
        limit: 10
      },
      i
    );
    if (!f?.success) return console.log("api error", r.value);
    gt.value = f.orders;
  }, g = async (f) => {
    const c = await t(
      a,
      {
        operation: "check_payment_status",
        user_id: "user_1",
        order_id: f
      },
      i
    );
    vt.value = c?.success ? c.payment_status : "not paid";
  }, m = async (f, c, b, h) => {
    const S = await t(
      a,
      {
        operation: "create_return",
        order_id: f,
        order_item_id: c,
        return_reason: b,
        return_desc: ""
        // hardcoded empty from user side
      },
      i
    );
    if (!S.success) return console.log("api error", r.value);
    console.log("return req api response", S), p(), l();
  }, p = async () => {
    const f = await t(
      a,
      {
        operation: "get_orders",
        user_id: "user_1",
        status: "delivered",
        search: "",
        //"exclude_key": ["user_id"],
        page: 1,
        limit: 10
      },
      i
    );
    if (!f?.success) return console.log("api error", r.value);
    mt.value = f.orders;
  };
  return { getAllOrder: l, order: gt, getPaymentStatus: g, payment_status: vt, page_state: qt, returnRequest: m, getDeliveredOrder: p, deliveredOrder: mt, createReviewAndRating: async (f, c, b) => {
    const h = await t(
      a,
      {
        operation: "create_review",
        order_item_id: f,
        rating: c,
        review_text: b
      },
      i
    );
    if (!h?.success) return console.log("api error", r.value);
    console.log(h), p(), l();
  }, updateReviewAndRating: async (f, c, b) => {
    const h = await t(
      a,
      {
        operation: "update_review",
        review_id: f,
        rating: c,
        review_text: b
      },
      i
    );
    if (!h?.success) return console.log("api error", r.value);
    console.log(h), p(), l();
  } };
}, Bn = {
  key: 0,
  class: "pt-3 pb-2"
}, Ln = {
  key: 1,
  class: "p-4"
}, Mn = { class: "flex justify-between items-center mb-4" }, Pn = { class: "font-bold text-gray-900 dark:text-white text-base" }, Fn = { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5" }, Dn = { class: "bg-white dark:bg-zinc-800 rounded-lg p-4 mb-3 border border-gray-200 dark:border-zinc-600" }, Un = { class: "space-y-2.5" }, In = { class: "flex justify-between text-sm" }, qn = { class: "text-gray-900 dark:text-white" }, Hn = { class: "flex justify-between text-sm" }, Vn = { class: "text-gray-900 dark:text-white" }, Wn = { class: "pt-3 border-t border-gray-300 dark:border-zinc-600" }, Zn = { class: "flex justify-between items-center" }, Jn = { class: "text-lg font-bold text-green-600 dark:text-green-400" }, Qn = { class: "flex gap-2 mb-4" }, Xn = { class: "flex-1 bg-white dark:bg-zinc-800 rounded-lg p-3 border border-gray-200 dark:border-zinc-600" }, Gn = { class: "flex items-center gap-2 mb-1.5" }, Kn = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, Yn = { class: "flex-1 bg-white dark:bg-zinc-800 rounded-lg p-3 border border-gray-200 dark:border-zinc-600" }, es = { class: "text-sm font-semibold text-gray-900 dark:text-white capitalize" }, ts = { class: "bg-white dark:bg-zinc-800 rounded-lg p-3 border border-gray-200 dark:border-zinc-600" }, rs = { class: "flex items-start gap-2" }, ns = { class: "text-sm text-gray-900 dark:text-white font-medium" }, ss = { class: "text-xs text-gray-600 dark:text-gray-400 mt-1" }, os = {
  __name: "BottomDrawer",
  props: {
    order: { type: Object, required: !1, default: null },
    // use Object, not Array
    open: { type: Boolean, required: !0 },
    isMobile: { type: Boolean, required: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const { payment_status: r } = se(), n = t, s = () => n("update:open", !1);
    return (a, i) => (x(), xt(Wt, {
      name: e.isMobile ? "slide-up" : "fade"
    }, {
      default: Vt(() => [
        X(o("div", {
          onClick: ue(s, ["self"]),
          class: "fixed h-screen w-screen left-0 bottom-0 z-50 flex items-end md:items-center justify-center md:bg-black/30"
        }, [
          o("div", {
            class: $(["bg-gray-100 dark:bg-zinc-700 w-full shadow-lg border-t border-gray-300 dark:border-zinc-600", e.isMobile ? "rounded-t-xl" : "rounded-xl max-w-sm mx-4"]),
            onClick: i[0] || (i[0] = ue(() => {
            }, ["stop"]))
          }, [
            e.isMobile ? (x(), w("div", Bn, [...i[1] || (i[1] = [
              o("div", { class: "w-16 h-1 bg-gray-400 dark:bg-zinc-500 rounded-full mx-auto" }, null, -1)
            ])])) : z("", !0),
            e.order ? (x(), w("div", Ln, [
              o("div", Mn, [
                o("div", null, [
                  o("h3", Pn, "Order id: " + y(e.order.order_id), 1),
                  o("p", Fn, y(e.order.items.length) + " items", 1)
                ]),
                o("button", {
                  onClick: s,
                  class: "hidden md:block text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 p-1"
                }, [...i[2] || (i[2] = [
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
              o("div", Dn, [
                o("div", Un, [
                  o("div", In, [
                    i[3] || (i[3] = o("span", { class: "text-gray-600 dark:text-gray-400" }, "Subtotal", -1)),
                    o("span", qn, y(e.order.pricing.total_payable_price) + " " + y(e.order.pricing.currency), 1)
                  ]),
                  o("div", Hn, [
                    i[4] || (i[4] = o("span", { class: "text-gray-600 dark:text-gray-400" }, "Tax", -1)),
                    o("span", Vn, y(e.order.pricing.tax_amount) + " " + y(e.order.pricing.currency), 1)
                  ]),
                  i[6] || (i[6] = o("div", { class: "flex justify-between text-sm" }, [
                    o("span", { class: "text-gray-600 dark:text-gray-400" }, "Delivery"),
                    o("span", { class: "text-green-600 dark:text-green-400" }, "FREE")
                  ], -1)),
                  o("div", Wn, [
                    o("div", Zn, [
                      i[5] || (i[5] = o("span", { class: "font-semibold text-gray-900 dark:text-white" }, "Total", -1)),
                      o("span", Jn, y(e.order.pricing.final_amount) + " " + y(e.order.pricing.currency), 1)
                    ])
                  ])
                ])
              ]),
              o("div", Qn, [
                o("div", Xn, [
                  o("div", Gn, [
                    o("div", {
                      class: $([
                        "w-2 h-2 rounded-full",
                        Y(r) === "paid" ? "bg-green-500" : "bg-yellow-500"
                      ])
                    }, null, 2),
                    i[7] || (i[7] = o("span", { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, "Payment", -1))
                  ]),
                  o("p", Kn, y(Y(r) || "Processing"), 1)
                ]),
                o("div", Yn, [
                  i[8] || (i[8] = o("div", { class: "flex items-center gap-2 mb-1.5" }, [
                    o("div", { class: "w-2 h-2 rounded-full bg-blue-500" }),
                    o("span", { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, "Delivery")
                  ], -1)),
                  o("p", es, y(e.order.items[0].order_status), 1)
                ])
              ]),
              o("div", ts, [
                o("div", rs, [
                  i[11] || (i[11] = o("svg", {
                    class: "w-4 h-4 text-gray-500 dark:text-gray-400 mt-0.5 shrink-0",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    o("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    }),
                    o("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    })
                  ], -1)),
                  o("div", null, [
                    i[10] || (i[10] = o("p", { class: "text-xs font-medium text-gray-500 dark:text-gray-400 mb-1" }, "Shipping Address", -1)),
                    o("p", ns, y(e.order.shipping_address.name), 1),
                    o("p", ss, [
                      Q(y(e.order.shipping_address.street) + y(e.order.shipping_address.landmark ? ", " + e.order.shipping_address.landmark : ""), 1),
                      i[9] || (i[9] = o("br", null, null, -1)),
                      Q(" " + y(e.order.shipping_address.city) + ", " + y(e.order.shipping_address.state) + " " + y(e.order.shipping_address.pincode), 1)
                    ])
                  ])
                ])
              ])
            ])) : z("", !0)
          ], 2)
        ], 512), [
          [Fe, e.open]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
}, is = { class: "mb-2" }, as = {
  key: 0,
  class: "inline-flex items-center gap-1 px-3 py-1.5 bg-linear-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-xl"
}, ls = {
  key: 1,
  class: "ml-2 inline-flex items-center gap-1 px-3 py-1.5 bg-linear-to-r from-blue-500 to-blue-700 text-white text-sm font-semibold rounded-xl"
}, ds = { class: "text-xs font-mono text-gray-500 dark:text-zinc-400 mt-1" }, us = { class: "flex flex-row flex-nowrap gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide" }, cs = { class: "relative rounded-xl overflow-hidden" }, ps = ["src"], fs = {
  key: 0,
  class: "absolute top-2 left-2 flex items-center justify-center"
}, gs = {
  key: 1,
  class: "absolute bottom-2 left-2 z-10 bg-blue-500/90 text-white dark:bg-blue-600/90 inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium backdrop-blur-md shadow-lg"
}, ms = {
  key: 2,
  class: "absolute top-2 right-2 group"
}, vs = ["onClick"], hs = ["onClick"], xs = ["onClick"], ws = {
  key: 4,
  class: "absolute bottom-2 right-2 bg-white dark:bg-zinc-700 dark:text-white rounded-lg px-2 py-1 text-xs font-medium flex items-center gap-1"
}, bs = {
  key: 5,
  class: "absolute inset-0 bg-red-500/40"
}, ys = { class: "font-medium text-xs dark:text-white" }, ks = { class: "text-xs dark:text-gray-200 w-40 line-clamp-2" }, _s = { class: "text-xs text-violet-500" }, Rs = { class: "bg-white/40 backdrop-blur-lg dark:bg-zinc-800 rounded-2xl p-6 w-96 shadow-xl" }, zs = { class: "flex items-center gap-3 mb-4 p-3 bg-gray-50/20 dark:bg-zinc-700/50 rounded-xl" }, Es = ["src"], Cs = { class: "flex-1 min-w-0" }, Ss = { class: "text-sm font-medium text-gray-900 dark:text-white truncate" }, As = { class: "text-xs text-gray-500 dark:text-gray-400" }, Os = { class: "flex gap-1" }, $s = ["onClick"], Ts = { class: "flex justify-end gap-3" }, js = ["disabled"], Ns = { class: "bg-white/40 backdrop-blur-lg dark:bg-zinc-800 rounded-2xl p-6 w-96 shadow-xl" }, Bs = { class: "flex items-center gap-3 mb-4 p-3 bg-gray-50/20 dark:bg-zinc-700/50 rounded-xl" }, Ls = ["src"], Ms = { class: "flex-1 min-w-0" }, Ps = { class: "text-sm font-medium text-gray-900 dark:text-white truncate" }, Fs = { class: "text-xs text-gray-500 dark:text-gray-400" }, Ds = { class: "relative mb-4" }, Us = { class: "flex justify-end gap-3" }, Is = ["onClick", "disabled"], qs = { class: "flex items-center justify-between border-t border-gray-100 dark:border-zinc-700 pt-4 px-1" }, Hs = { class: "text-xl font-bold text-gray-900 dark:text-white" }, Vs = ["onClick"], Ws = {
  __name: "OrderCard",
  props: { order: { type: Array, required: !0 } },
  setup(e) {
    const { getPaymentStatus: t, returnRequest: r, createReviewAndRating: n, updateReviewAndRating: s } = se(), a = E(!1), i = E(null), l = E(window.innerWidth < 768), g = () => l.value = window.innerWidth < 768;
    wt(() => window.addEventListener("resize", g)), Zt(() => window.removeEventListener("resize", g));
    const m = (L) => {
      i.value = L, a.value = !0;
    }, p = () => alert("It will open chatbot"), v = E(null), u = E(""), f = E(""), c = E(!1), b = (L) => {
      v.value = L;
    }, h = () => {
      v.value = null, u.value = "", f.value = "";
    }, S = (L) => {
      u.value.trim() && (c.value = !0, r(
        L,
        v.value.order_item_id,
        u.value === "other" ? f.value : u.value,
        ""
        // return_desc blank
      ), c.value = !1, u.value = "", h());
    }, A = E(null), C = E(0), O = E(""), P = E(!1), J = (L) => {
      A.value = L, L.review ? (C.value = L.review.rating, O.value = L.review.review_text) : (C.value = 0, O.value = "");
    }, B = () => {
      A.value = null;
    }, le = async () => {
      O.value.trim() && (P.value = !0, A.value.review ? await s(
        A.value.review.review_id,
        C.value,
        O.value
      ) : await n(
        A.value.order_item_id,
        C.value,
        O.value
      ), P.value = !1, O.value = "", C.value = 0, B());
    }, H = E(null);
    return ht(H, (L) => {
      console.log("item option tap", L);
    }), (L, _) => (x(), w(D, null, [
      (x(!0), w(D, null, Z(e.order, (N) => (x(), w("div", {
        key: N.order_id,
        class: "bg-white dark:bg-zinc-800 flex flex-col gap-3 rounded-2xl p-4"
      }, [
        o("div", is, [
          N.items.some((R) => R.order_status === "processing") ? (x(), w("div", as, [..._[6] || (_[6] = [
            o("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: "size-4"
            }, [
              o("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.22-1.113-.615-1.53a15.14 15.14 0 0 0-2.084-1.662"
              })
            ], -1),
            Q(" Ready for Pickup ", -1)
          ])])) : z("", !0),
          N.items.some((R) => R.return_status === "approved") ? (x(), w("div", ls, [..._[7] || (_[7] = [
            o("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: "size-4"
            }, [
              o("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.22-1.113-.615-1.53a15.14 15.14 0 0 0-2.084-1.662"
              })
            ], -1),
            Q(" Ready for return ", -1)
          ])])) : z("", !0),
          o("div", ds, "#" + y(N.order_number), 1)
        ]),
        o("div", us, [
          (x(!0), w(D, null, Z(N.items, (R) => (x(), w("div", {
            key: R.order_item_id,
            class: $(["flex flex-col gap-2 snap-start", R.order_status === "cancelled" ? "opacity-30 cursor-not-allowed" : ""])
          }, [
            o("div", cs, [
              o("img", {
                src: R?.reference_data?.variant_product_data?.image_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ9R610Iu99YAHXjw6QLrvHwX42iWY_NwAA&s",
                class: "w-40 h-48 object-cover bg-gray-100 dark:bg-zinc-800 hover:scale-110 transition-transform duration-500",
                loading: "lazy"
              }, null, 8, ps),
              R.order_status === "processing" ? (x(), w("div", fs, [..._[8] || (_[8] = [
                o("span", { class: "absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75 animate-ping" }, null, -1),
                o("span", { class: "relative inline-flex h-2 w-2 rounded-full bg-green-500" }, null, -1)
              ])])) : z("", !0),
              R.order_status === "processing" ? (x(), w("div", gs, " OTP: " + y(R.delivery_otp), 1)) : z("", !0),
              R.order_status === "delivered" ? (x(), w("div", ms, [
                o("span", {
                  onClick: (T) => H.value = H.value === R.order_item_id ? null : R.order_item_id,
                  class: "cursor-pointer shadow-lg absolute top-0 right-0 bg-white dark:bg-zinc-700 dark:text-white rounded-lg px-2 py-1 text-xs font-medium"
                }, [..._[9] || (_[9] = [
                  o("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    class: "size-3"
                  }, [
                    o("path", {
                      "fill-rule": "evenodd",
                      d: "M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z",
                      "clip-rule": "evenodd"
                    })
                  ], -1)
                ])], 8, vs),
                H.value === R.order_item_id ? (x(), w("div", {
                  key: 0,
                  class: "fixed inset-0 z-5",
                  onClick: _[0] || (_[0] = (T) => H.value = null)
                })) : z("", !0),
                o("div", {
                  class: $(["absolute z-10 right-0 top-5 w-28 overflow-hidden bg-white/50 dark:bg-zinc-800/30 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition text-xs", { "visible opacity-100": H.value === R.order_item_id }]),
                  onClick: _[1] || (_[1] = (T) => H.value = null)
                }, [
                  R.order_status === "delivered" ? (x(), w("button", {
                    key: 0,
                    onClick: (T) => J(R),
                    class: "cursor-pointer block w-full text-left px-3 py-2 rounded-md hover:bg-white/25 dark:hover:bg-white/10 transition"
                  }, y(R.review ? "Update Review" : "Add Review"), 9, hs)) : z("", !0),
                  R.return_status === "none" && R.order_status === "delivered" ? (x(), w("button", {
                    key: 1,
                    onClick: (T) => b(R),
                    class: "cursor-pointer block w-full text-left px-3 py-2 rounded-md hover:bg-red-500/20 transition text-red-500"
                  }, " Return Item ", 8, xs)) : z("", !0)
                ], 2)
              ])) : z("", !0),
              R.return_status !== "none" ? (x(), w("span", {
                key: 3,
                class: $(["absolute bottom-2 left-2 z-10 inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium backdrop-blur-md shadow-lg capitalize", {
                  "bg-yellow-500/90 text-white dark:bg-yellow-600/90": R.return_status === "requested",
                  "bg-blue-500/90 text-white dark:bg-blue-600/90": R.return_status === "approved",
                  "bg-red-500/90 text-white dark:bg-red-600/90": R.return_status === "rejected",
                  "bg-green-500/90 text-white dark:bg-green-600/90": R.return_status === "returned"
                }])
              }, [
                _[10] || (_[10] = o("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "size-3"
                }, [
                  o("path", { d: "M12 22V12" }),
                  o("path", { d: "M16 17h6" }),
                  o("path", { d: "M21 13V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955" })
                ], -1)),
                Q(" " + y(R.return_status), 1)
              ], 2)) : z("", !0),
              R.review ? (x(), w("span", ws, [
                _[11] || (_[11] = o("p", { class: "text-yellow-500 text-xs" }, "★", -1)),
                Q(y(R.review.rating), 1)
              ])) : z("", !0),
              R.order_status === "cancelled" ? (x(), w("div", bs)) : z("", !0)
            ]),
            o("div", null, [
              o("p", ys, y(R.payable_price) + " " + y(N.pricing.currency), 1),
              o("p", ks, y(R.name), 1),
              o("p", _s, y(R.order_status) + " >", 1)
            ]),
            A.value ? (x(), w("div", {
              key: 0,
              class: "fixed inset-0 bg-black/20 flex items-center justify-center z-50",
              onClick: ue(B, ["self"])
            }, [
              o("div", Rs, [
                o("div", zs, [
                  o("img", {
                    src: A.value?.reference_data?.variant_product_data?.image_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ9R610Iu99YAHXjw6QLrvHwX42iWY_NwAA&s",
                    class: "w-12 h-12 object-cover rounded-lg"
                  }, null, 8, Es),
                  o("div", Cs, [
                    o("p", Ss, y(A.value?.name), 1),
                    o("p", As, y(A.value?.reference_data?.variant_product_data?.size) + " • " + y(A.value?.reference_data?.variant_product_data?.color), 1)
                  ])
                ]),
                _[13] || (_[13] = o("label", { class: "text-sm mt-3 block" }, "Rating", -1)),
                o("div", Os, [
                  (x(), w(D, null, Z(5, (T) => o("svg", {
                    key: T,
                    onClick: (Se) => C.value = T,
                    viewBox: "0 0 24 24",
                    class: $(["size-6 cursor-pointer transition", T <= C.value ? "fill-yellow-400" : "fill-gray-300"])
                  }, [..._[12] || (_[12] = [
                    o("path", { d: "M11.48 3.5a.56.56 0 0 1 1.04 0l2.13 5.11a.56.56 0 0 0 .47.35l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 0 0-.18.56l1.28 5.38a.56.56 0 0 1-.84.61L12 17.65a.56.56 0 0 0-.58 0l-4.73 2.89a.56.56 0 0 1-.84-.61l1.28-5.38a.56.56 0 0 0-.18-.56L2.74 10.4a.56.56 0 0 1 .32-.99l5.52-.44a.56.56 0 0 0 .47-.35L11.48 3.5Z" }, null, -1)
                  ])], 10, $s)), 64))
                ]),
                _[14] || (_[14] = o("label", { class: "text-sm" }, "Review", -1)),
                X(o("textarea", {
                  "onUpdate:modelValue": _[2] || (_[2] = (T) => O.value = T),
                  rows: "3",
                  placeholder: "Write review",
                  class: "w-full mb-4 px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white focus:outline-none"
                }, null, 512), [
                  [ce, O.value]
                ]),
                o("div", Ts, [
                  o("button", {
                    onClick: B,
                    class: "text-sm px-3 py-1 rounded-lg bg-gray-100 dark:bg-zinc-700"
                  }, " Cancel "),
                  o("button", {
                    onClick: le,
                    disabled: !O.value.trim(),
                    class: "text-sm px-3 py-1 rounded-lg bg-yellow-500 text-white disabled:opacity-50"
                  }, y(P.value ? "Saving..." : A.value?.review ? "Update Review" : "Submit Review"), 9, js)
                ])
              ])
            ])) : z("", !0),
            v.value ? (x(), w("div", {
              key: 1,
              class: "fixed inset-0 bg-black/20 flex items-center justify-center z-50",
              onClick: ue(h, ["self"])
            }, [
              o("div", Ns, [
                o("div", Bs, [
                  o("img", {
                    src: v.value?.reference_data?.variant_product_data?.image_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ9R610Iu99YAHXjw6QLrvHwX42iWY_NwAA&s",
                    class: "w-12 h-12 object-cover rounded-lg"
                  }, null, 8, Ls),
                  o("div", Ms, [
                    o("p", Ps, y(v.value?.name), 1),
                    o("p", Fs, " Size: " + y(v.value?.reference_data?.variant_product_data?.size) + " • Color: " + y(v.value?.reference_data?.variant_product_data?.color), 1)
                  ])
                ]),
                _[17] || (_[17] = o("label", { class: "text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2" }, "Reason for Return", -1)),
                o("div", Ds, [
                  X(o("select", {
                    "onUpdate:modelValue": _[3] || (_[3] = (T) => u.value = T),
                    class: "w-full appearance-none px-3 pr-8 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 transition-shadow"
                  }, [..._[15] || (_[15] = [
                    q('<option value="" disabled>Select a reason</option><option value="size_issue">Size not fit</option><option value="defective">Defective product</option><option value="wrong_item">Wrong item delivered</option><option value="quality_issue">Quality not as expected</option><option value="other">Other</option>', 6)
                  ])], 512), [
                    [Jt, u.value]
                  ]),
                  _[16] || (_[16] = o("svg", {
                    class: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-400",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    o("path", {
                      "fill-rule": "evenodd",
                      d: "M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z",
                      "clip-rule": "evenodd"
                    })
                  ], -1))
                ]),
                u.value === "other" ? X((x(), w("input", {
                  key: 0,
                  "onUpdate:modelValue": _[4] || (_[4] = (T) => f.value = T),
                  type: "text",
                  placeholder: "Please specify reason",
                  class: "w-full mb-4 px-3 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 transition-shadow"
                }, null, 512)), [
                  [ce, f.value]
                ]) : z("", !0),
                o("div", Us, [
                  o("button", {
                    onClick: h,
                    class: "text-sm px-3 py-1 rounded-lg bg-gray-100 dark:bg-zinc-700"
                  }, "Cancel"),
                  o("button", {
                    onClick: (T) => S(N.order_id),
                    disabled: !u.value.trim(),
                    class: "text-sm px-3 py-1 rounded-lg bg-red-500 text-white disabled:opacity-50"
                  }, y(c.value ? "Submitting..." : "Confirm Return"), 9, Is)
                ])
              ])
            ])) : z("", !0)
          ], 2))), 128))
        ]),
        o("div", qs, [
          o("div", null, [
            _[18] || (_[18] = o("p", { class: "text-xs text-gray-500 dark:text-gray-400 mb-1" }, "Total Amount", -1)),
            o("p", Hs, y(new Intl.NumberFormat("en-IN", { style: "currency", currency: N.pricing.currency, minimumFractionDigits: 0 }).format(N.pricing.final_amount)), 1)
          ]),
          o("button", {
            onClick: (R) => {
              m(N), Y(t)(N.order_id);
            },
            class: "cursor-pointer px-4 py-2 bg-gray-100 dark:bg-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-600 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors"
          }, " View Details ", 8, Vs)
        ]),
        o("button", {
          onClick: p,
          class: "cursor-pointer group bg-linear-to-r from-gray-50 to-gray-100 dark:from-zinc-700 dark:to-zinc-800 hover:from-violet-50 hover:to-violet-100 dark:hover:from-violet-900/30 dark:hover:to-violet-800/30 text-violet-600 dark:text-violet-400 font-medium rounded-xl p-4 text-center transition-all duration-300 border border-gray-200 dark:border-zinc-600 hover:border-violet-200 dark:hover:border-violet-700"
        }, [..._[19] || (_[19] = [
          o("span", { class: "flex items-center justify-center gap-2" }, [
            o("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: "size-5 group-hover:scale-110 transition-transform"
            }, [
              o("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              })
            ]),
            Q(" Ask about this order ")
          ], -1)
        ])])
      ]))), 128)),
      re(os, {
        open: a.value,
        "onUpdate:open": _[5] || (_[5] = (N) => a.value = N),
        order: i.value,
        isMobile: l.value
      }, null, 8, ["open", "order", "isMobile"])
    ], 64));
  }
}, Zs = "/qr_black.png", Js = "/qr_white.png", Qs = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, s] of t)
    r[n] = s;
  return r;
}, Xs = {}, Gs = { class: "md:w-[50vw] bg-white dark:bg-zinc-700 flex md:flex-row flex-col items-center gap-4 rounded-2xl p-6 shadow-lg" };
function Ks(e, t) {
  return x(), w("div", Gs, [...t[0] || (t[0] = [
    q('<div class="flex-1 w-full bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 text-center mb-2"><p class="text-xs text-zinc-500 dark:text-zinc-400 mb-2"> Show the QR code or tell the code at the pickup point to pick up your order </p><div class="text-2xl font-bold tracking-widest text-violet-600 dark:text-violet-400"> 354955 </div></div><div class="md:hidden flex items-center w-full my-2"><div class="flex-grow border-t border-zinc-300 dark:border-zinc-600"></div><span class="px-4 text-sm text-zinc-500 dark:text-zinc-400 font-medium">OR</span><div class="flex-grow border-t border-zinc-300 dark:border-zinc-600"></div></div><div class="text-center p-4"><p class="text-sm text-zinc-600 dark:text-zinc-400 mb-3"> Show QR to pickup piont </p><div class="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-inner"><img src="' + Zs + '" class="block dark:hidden md:w-40 md:h-40" alt="QR Code for pickup"><img src="' + Js + '" class="hidden dark:block md:w-40 md:h-40" alt="QR Code for pickup"></div></div>', 3)
  ])]);
}
const Ys = /* @__PURE__ */ Qs(Xs, [["render", Ks]]), eo = { class: "flex md:flex-1 flex-col gap-3 min-w-0" }, to = { class: "bg-white dark:bg-zinc-800 flex items-center gap-2 md:rounded-2xl rounded-b-2xl p-4" }, ro = { class: "w-full md:max-w-sm flex items-center gap-2 bg-gray-100 dark:bg-zinc-700 rounded-2xl p-4" }, no = {
  key: 0,
  class: "bg-white dark:bg-zinc-800 rounded-2xl px-4 py-6 md:py-4"
}, so = {
  __name: "OrderLeft",
  setup(e) {
    const { order: t, page_state: r } = se(), n = E(""), s = Ne(() => {
      const i = n.value.trim().toLowerCase();
      return i ? t.value.map((l) => {
        const g = l.items.filter(
          (m) => m.name?.toLowerCase().includes(i) || m.reference_data?.product_data?.brand?.toLowerCase().includes(i) || String(l.order_id) === i
        );
        return g.length ? { ...l, items: g } : null;
      }).filter(Boolean) : t.value;
    }), a = E(!1);
    return (i, l) => (x(), w("div", eo, [
      o("div", to, [
        o("div", ro, [
          l[4] || (l[4] = o("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-6 text-zinc-900 dark:text-zinc-100"
          }, [
            o("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            })
          ], -1)),
          X(o("input", {
            "onUpdate:modelValue": l[0] || (l[0] = (g) => n.value = g),
            type: "text",
            placeholder: "Name, Brand, Order Id",
            class: "bg-transparent outline-none focus:outline-none focus:ring-0 border-0 text-zinc-900 dark:text-zinc-100 placeholder:text-gray-500 dark:placeholder:text-zinc-400"
          }, null, 512), [
            [ce, n.value]
          ])
        ])
      ]),
      o("div", {
        onClick: l[1] || (l[1] = (g) => a.value = !0),
        class: "bg-white dark:bg-zinc-800 flex items-center gap-2 rounded-2xl p-4"
      }, [...l[5] || (l[5] = [
        q('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 md:size-6 text-zinc-900 dark:text-zinc-100"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"></path></svg><p class="text-xs text-zinc-900 dark:text-zinc-100"> Show the QR code or tell the code <mark class="bg-transparent text-violet-500 font-medium">354955</mark> at the pickup point to pick up your order </p>', 2)
      ])]),
      X(o("div", {
        onClick: l[2] || (l[2] = (g) => a.value = !1),
        class: "fixed bg-black/20 h-screen w-screen bottom-0 right-0 z-50 flex items-end md:justify-end md:p-4"
      }, [
        re(Ys)
      ], 512), [
        [Fe, a.value]
      ]),
      o("div", {
        onClick: l[3] || (l[3] = (g) => r.value = "PURCHASED_PAGE"),
        class: "bg-white dark:bg-zinc-800 flex items-center justify-between gap-2 rounded-2xl px-4 py-6 md:py-4"
      }, [...l[6] || (l[6] = [
        q('<div class="flex items-center gap-2 text-zinc-900 dark:text-zinc-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg><p>Purchased</p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-zinc-900 dark:text-zinc-100"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>', 2)
      ])]),
      Y(t).length ? z("", !0) : (x(), w("div", no, [...l[7] || (l[7] = [
        q('<div class="bg-gray-100 dark:bg-zinc-700 h-8 w-40 rounded-xl mb-1"></div><div class="bg-gray-100 dark:bg-zinc-700 h-4 w-48 rounded-xl mb-1"></div><div class="bg-gray-100 dark:bg-zinc-700 h-4 w-52 rounded-xl"></div><div class="flex items-center gap-4 my-8"><div class="bg-gray-100 dark:bg-zinc-700 h-64 w-48 rounded-xl"></div><div class="bg-gray-100 dark:bg-zinc-700 h-64 w-48 rounded-xl"></div><div class="bg-gray-100 dark:bg-zinc-700 h-64 w-48 rounded-xl"></div><div class="bg-gray-100 dark:bg-zinc-700 h-64 w-48 rounded-xl"></div></div><div class="flex items-center justify-between mb-1.5"><div class="bg-gray-100 dark:bg-zinc-700 h-8 w-40 rounded-xl"></div><div class="bg-gray-100 dark:bg-zinc-700 h-8 w-40 rounded-xl"></div></div><div class="bg-gray-100 dark:bg-zinc-700 h-16 w-full rounded-xl"></div>', 6)
      ])])),
      (x(!0), w(D, null, Z(s.value, (g) => (x(), xt(Ws, {
        key: g.order_id,
        order: [g]
      }, null, 8, ["order"]))), 128))
    ]));
  }
}, oo = { class: "w-full md:w-[30vw] self-start bg-white dark:bg-zinc-800 rounded-2xl shrink-0" }, io = { class: "relative shrink-0 rounded-xl overflow-hidden" }, ao = ["src"], lo = { class: "flex flex-col justify-between" }, uo = { class: "font-medium text-sm dark:text-white" }, co = { class: "text-sm dark:text-gray-200 w-40 line-clamp-3" }, po = { class: "text-sm text-violet-500" }, fo = { class: "flex gap-1" }, go = ["onClick"], mo = { class: "bg-white/70 backdrop-blur-lg dark:bg-zinc-800 rounded-2xl p-6 w-96 shadow-xl" }, vo = { class: "flex items-center gap-3 mb-4 p-3 bg-gray-50/20 dark:bg-zinc-700/50 rounded-xl" }, ho = ["src"], xo = { class: "flex-1 min-w-0" }, wo = { class: "text-sm font-medium text-gray-900 dark:text-white truncate" }, bo = { class: "text-xs text-gray-500 dark:text-gray-400" }, yo = { class: "flex gap-1" }, ko = ["onClick"], _o = { class: "flex justify-end gap-3" }, Ro = ["disabled"], zo = {
  __name: "OrderRight",
  setup(e) {
    const { deliveredOrder: t, createReviewAndRating: r } = se(), n = E(null), s = E(0), a = E(""), i = E(!1), l = (p) => {
      n.value = p;
    }, g = () => {
      n.value = null;
    }, m = async () => {
      a.value.trim() && (i.value = !0, await r(
        n.value.order_item_id,
        s.value,
        a.value
      ), i.value = !1, a.value = "", s.value = 0, g());
    };
    return (p, v) => X((x(), w("div", oo, [
      v[5] || (v[5] = o("div", { class: "p-4" }, [
        o("p", { class: "font-medium dark:text-white" }, "Share your experience"),
        o("p", { class: "text-xs text-gray-500 dark:text-gray-200" }, "Help others make the right choice")
      ], -1)),
      (x(!0), w(D, null, Z(Y(t), (u) => (x(), w(D, {
        key: u.order_id
      }, [
        (x(!0), w(D, null, Z(u.items.filter((f) => f.review === null), (f) => (x(), w("div", {
          key: f.order_item_id,
          class: "bg-white dark:bg-zinc-800 rounded-2xl p-4 flex flex-row gap-3 transition"
        }, [
          o("div", io, [
            o("img", {
              src: f?.reference_data?.variant_product_data?.image_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ9R610Iu99YAHXjw6QLrvHwX42iWY_NwAA&s",
              class: "w-40 h-48 object-cover bg-gray-100 dark:bg-zinc-800 hover:scale-110 transition-transform duration-500",
              loading: "lazy"
            }, null, 8, ao)
          ]),
          o("div", lo, [
            o("div", null, [
              o("p", uo, y(f.payable_price) + " " + y(u.pricing.currency), 1),
              o("p", co, y(f.name), 1),
              o("p", po, y(f.order_status) + " at " + y(new Date(f.delivered_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric"
              }).toLowerCase()), 1)
            ]),
            o("div", null, [
              o("div", fo, [
                (x(), w(D, null, Z(5, (c) => o("svg", {
                  key: c,
                  viewBox: "0 0 24 24",
                  class: $(["size-4", c <= Math.round(f.review?.rating) ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"]),
                  fill: "currentColor"
                }, [...v[1] || (v[1] = [
                  o("path", { d: "M11.48 3.5a.56.56 0 0 1 1.04 0l2.13 5.11a.56.56 0 0 0 .47.35l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 0 0-.18.56l1.28 5.38a.56.56 0 0 1-.84.61L12 17.65a.56.56 0 0 0-.58 0l-4.73 2.89a.56.56 0 0 1-.84-.61l1.28-5.38a.56.56 0 0 0-.18-.56L2.74 10.4a.56.56 0 0 1 .32-.99l5.52-.44a.56.56 0 0 0 .47-.35L11.48 3.5Z" }, null, -1)
                ])], 2)), 64))
              ]),
              o("button", {
                onClick: (c) => l(f),
                class: "cursor-pointer mt-2 text-xs font-medium px-2 py-1 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition"
              }, " Add Review ", 8, go)
            ])
          ]),
          n.value ? (x(), w("div", {
            key: 0,
            class: "fixed inset-0 bg-black/60 flex items-center justify-center z-50",
            onClick: ue(g, ["self"])
          }, [
            o("div", mo, [
              o("div", vo, [
                o("img", {
                  src: n.value?.reference_data?.variant_product_data?.image_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ9R610Iu99YAHXjw6QLrvHwX42iWY_NwAA&s",
                  class: "w-12 h-12 object-cover rounded-lg"
                }, null, 8, ho),
                o("div", xo, [
                  o("p", wo, y(n.value?.name), 1),
                  o("p", bo, y(n.value?.reference_data?.variant_product_data?.size) + " • " + y(n.value?.reference_data?.variant_product_data?.color), 1)
                ])
              ]),
              v[3] || (v[3] = o("label", { class: "text-sm mt-3 block" }, "Rating", -1)),
              o("div", yo, [
                (x(), w(D, null, Z(5, (c) => o("svg", {
                  key: c,
                  onClick: (b) => s.value = c,
                  viewBox: "0 0 24 24",
                  class: $(["size-6 cursor-pointer transition", c <= s.value ? "fill-yellow-400" : "fill-gray-300"])
                }, [...v[2] || (v[2] = [
                  o("path", { d: "M11.48 3.5a.56.56 0 0 1 1.04 0l2.13 5.11a.56.56 0 0 0 .47.35l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 0 0-.18.56l1.28 5.38a.56.56 0 0 1-.84.61L12 17.65a.56.56 0 0 0-.58 0l-4.73 2.89a.56.56 0 0 1-.84-.61l1.28-5.38a.56.56 0 0 0-.18-.56L2.74 10.4a.56.56 0 0 1 .32-.99l5.52-.44a.56.56 0 0 0 .47-.35L11.48 3.5Z" }, null, -1)
                ])], 10, ko)), 64))
              ]),
              v[4] || (v[4] = o("label", { class: "text-sm" }, "Review", -1)),
              X(o("textarea", {
                "onUpdate:modelValue": v[0] || (v[0] = (c) => a.value = c),
                rows: "3",
                placeholder: "Write review",
                class: "w-full mb-4 px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white focus:outline-none"
              }, null, 512), [
                [ce, a.value]
              ]),
              o("div", _o, [
                o("button", {
                  onClick: g,
                  class: "text-sm px-3 py-1 rounded-lg bg-gray-100 dark:bg-zinc-700"
                }, " Cancel "),
                o("button", {
                  onClick: m,
                  disabled: !a.value.trim(),
                  class: "text-sm px-3 py-1 rounded-lg bg-yellow-500 text-white disabled:opacity-50"
                }, y(i.value ? "Saving..." : n.value?.review ? "Update Review" : "Submit Review"), 9, Ro)
              ])
            ])
          ])) : z("", !0)
        ]))), 128))
      ], 64))), 128))
    ], 512)), [
      [Fe, Y(t).some((u) => u.items.some((f) => f.review == null))]
    ]);
  }
}, Eo = { class: "flex flex-col bg-[#f0f2f5] dark:bg-zinc-900 md:px-6 min-h-screen" }, Co = { class: "flex flex-col md:flex-row gap-6" }, So = /* @__PURE__ */ De({
  __name: "Order",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    return (t, r) => (x(), w("div", Eo, [
      r[0] || (r[0] = o("div", { class: "flex items-center bg-white dark:bg-zinc-800 md:dark:bg-transparent md:bg-transparent md:pb-10 pt-2" }, [
        o("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "md:hidden ml-2 size-6 text-zinc-900 dark:text-zinc-100"
        }, [
          o("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M15.75 19.5 8.25 12l7.5-7.5"
          })
        ]),
        o("h1", { class: "text-lg md:text-3xl md:font-semibold text-zinc-900 dark:text-zinc-100" }, "Orders")
      ], -1)),
      o("div", Co, [
        re(so),
        re(zo)
      ])
    ]));
  }
}), Ao = { class: "flex flex-1 flex-col gap-4 pb-24" }, Oo = { class: "max-w-7xl mx-auto w-full bg-white dark:bg-zinc-800 flex items-center gap-2 md:rounded-2xl rounded-b-2xl p-4" }, $o = { class: "relative flex items-center gap-3 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-zinc-700/50 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-zinc-900/50 p-3 flex-1" }, To = { class: "px-4 max-w-7xl mx-auto w-full" }, jo = { class: "mb-4 flex items-center justify-between" }, No = { class: "text-sm text-gray-500 dark:text-gray-400" }, Bo = {
  key: 0,
  class: "flex items-center gap-2"
}, Lo = { class: "text-xs px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full" }, Mo = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4"
}, Po = { class: "relative aspect-square overflow-hidden bg-gray-100 dark:bg-zinc-900" }, Fo = ["src", "alt"], Do = {
  key: 0,
  class: "absolute top-2 left-2 z-10"
}, Uo = { class: "absolute top-2 right-2 z-10" }, Io = { class: "inline-block px-2 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-xs font-medium text-gray-700 dark:text-gray-300 rounded-lg shadow-lg" }, qo = { class: "p-3 md:p-4" }, Ho = { class: "flex items-baseline gap-1 mb-1" }, Vo = { class: "text-lg font-bold text-gray-900 dark:text-white" }, Wo = { class: "text-xs text-gray-400 line-through" }, Zo = { class: "text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-2 min-h-10" }, Jo = { class: "space-y-1 mb-3" }, Qo = { class: "flex items-center gap-1 text-xs" }, Xo = { class: "text-violet-600 dark:text-violet-400 font-medium capitalize" }, Go = { class: "text-gray-500 dark:text-gray-400" }, Ko = {
  key: 0,
  class: "flex items-center gap-1 text-xs"
}, Yo = { class: "text-gray-700 dark:text-gray-300" }, ei = { class: "flex items-center gap-0.5 mb-3" }, ti = {
  key: 0,
  class: "text-xs text-gray-500 dark:text-gray-400 ml-1"
}, ri = {
  key: 1,
  class: "flex flex-col items-center justify-center py-16 px-4 text-center"
}, ni = { class: "text-sm text-gray-500 dark:text-gray-400 max-w-sm" }, si = { class: "fixed bottom-4 left-1/2 -translate-x-1/2 z-20" }, oi = { class: "flex items-center gap-1 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-xl border border-gray-200/50 dark:border-zinc-700/50 rounded-2xl shadow-2xl shadow-violet-500/10 dark:shadow-black/30 p-1" }, ii = {
  key: 0,
  class: "absolute -top-1 -right-1 size-2 bg-violet-500 rounded-full animate-pulse"
}, ai = {
  key: 0,
  class: "absolute -top-1 -right-1 size-2 bg-violet-500 rounded-full animate-pulse"
}, li = {
  key: 0,
  class: "absolute -top-1 -right-1 size-2 bg-violet-500 rounded-full animate-pulse"
}, di = {
  key: 0,
  class: "fixed bottom-24 left-1/2 -translate-x-1/2 z-30 w-64 animate-in fade-in slide-in-from-bottom-4 duration-300"
}, ui = { class: "bg-white/95 dark:bg-zinc-800/95 backdrop-blur-xl border border-gray-200/50 dark:border-zinc-700/50 rounded-2xl shadow-2xl shadow-violet-500/10 dark:shadow-black/30 overflow-hidden" }, ci = { class: "px-4 py-3 border-b border-gray-100 dark:border-zinc-700/50" }, pi = { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, fi = {
  key: 0,
  class: "p-2"
}, gi = { class: "flex items-center justify-between" }, mi = {
  key: 0,
  class: "size-5 rounded-full bg-violet-500 flex items-center justify-center"
}, vi = { class: "flex items-center justify-between" }, hi = {
  key: 0,
  class: "size-5 rounded-full bg-violet-500 flex items-center justify-center"
}, xi = {
  key: 1,
  class: "p-2"
}, wi = { class: "flex items-center justify-between" }, bi = {
  key: 0,
  class: "size-5 rounded-full bg-violet-500 flex items-center justify-center"
}, yi = { class: "flex items-center justify-between" }, ki = {
  key: 0,
  class: "size-5 rounded-full bg-violet-500 flex items-center justify-center"
}, _i = { class: "flex items-center justify-between" }, Ri = {
  key: 0,
  class: "size-5 rounded-full bg-violet-500 flex items-center justify-center"
}, zi = { class: "flex items-center justify-between" }, Ei = {
  key: 0,
  class: "size-5 rounded-full bg-violet-500 flex items-center justify-center"
}, Ci = {
  key: 2,
  class: "p-2"
}, Si = { class: "flex items-center justify-between" }, Ai = {
  key: 0,
  class: "size-5 rounded-full bg-violet-500 flex items-center justify-center"
}, Oi = { class: "flex items-center justify-between" }, $i = {
  key: 0,
  class: "size-5 rounded-full bg-violet-500 flex items-center justify-center"
}, Ti = {
  __name: "PurchasedLeft",
  setup(e) {
    const { deliveredOrder: t } = se(), r = () => alert("Redirecting to similar items..."), n = E(null), s = E(null), a = E("asc"), i = E("all"), l = E("newest"), g = E(""), m = Ne(() => p.value.length), p = Ne(() => {
      const v = g.value.trim().toLowerCase();
      let u = t.value.flatMap(
        (f) => f.items.map((c) => ({
          ...c,
          order_id: f.order_id,
          currency: f.pricing.currency
        }))
      );
      return v && (u = u.filter((f) => {
        const c = f.reference_data?.product_data?.brand?.toLowerCase() || "", b = f.name?.toLowerCase() || "", h = String(f.order_id);
        return b.includes(v) || c.includes(v) || h === v;
      })), i.value !== "all" && (u = u.filter((f) => f.order_status === i.value)), n.value === "price" && u.sort(
        (f, c) => a.value === "asc" ? f.payable_price - c.payable_price : c.payable_price - f.payable_price
      ), n.value === "date" && u.sort((f, c) => {
        const b = new Date(f.delivered_at || f.created_at), h = new Date(c.delivered_at || c.created_at);
        return l.value === "newest" ? h - b : b - h;
      }), u;
    });
    return (v, u) => (x(), w(D, null, [
      o("div", Ao, [
        o("div", Oo, [
          o("div", $o, [
            u[13] || (u[13] = o("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: "size-5 text-violet-500 dark:text-violet-400 shrink-0"
            }, [
              o("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              })
            ], -1)),
            X(o("input", {
              "onUpdate:modelValue": u[0] || (u[0] = (f) => g.value = f),
              type: "search",
              placeholder: "Search by name, brand, or order ID...",
              class: "w-full bg-transparent outline-none focus:outline-none focus:ring-0 border-0 text-zinc-900 dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-500 text-sm [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-cancel-button]:hidden"
            }, null, 512), [
              [ce, g.value]
            ])
          ])
        ]),
        o("div", To, [
          o("div", jo, [
            o("p", No, y(m.value) + " " + y(m.value === 1 ? "item" : "items") + " found ", 1),
            g.value ? (x(), w("div", Bo, [
              o("span", Lo, ' "' + y(g.value) + '" ', 1)
            ])) : z("", !0)
          ]),
          m.value ? (x(), w("div", Mo, [
            (x(!0), w(D, null, Z(p.value, (f) => (x(), w("div", {
              key: f.order_item_id,
              class: "group bg-white dark:bg-zinc-800 rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-700/50 hover:border-violet-200 dark:hover:border-violet-800/50 hover:shadow-xl hover:shadow-violet-500/5 dark:hover:shadow-violet-500/10 transition-all duration-300"
            }, [
              o("div", Po, [
                o("img", {
                  src: f.reference_data?.variant_product_data?.image_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ9R610Iu99YAHXjw6QLrvHwX42iWY_NwAA&s",
                  alt: f.name,
                  class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                  loading: "lazy"
                }, null, 8, Fo),
                f.return_status !== "none" ? (x(), w("div", Do, [
                  o("span", {
                    class: $(["inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium backdrop-blur-md shadow-lg", {
                      "bg-yellow-500/90 text-white dark:bg-yellow-600/90": f.return_status === "requested",
                      "bg-blue-500/90 text-white dark:bg-blue-600/90": f.return_status === "approved",
                      "bg-red-500/90 text-white dark:bg-red-600/90": f.return_status === "rejected",
                      "bg-green-500/90 text-white dark:bg-green-600/90": f.return_status === "returned"
                    }])
                  }, [
                    u[14] || (u[14] = o("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      class: "size-3"
                    }, [
                      o("path", { d: "M12 22V12" }),
                      o("path", { d: "M16 17h6" }),
                      o("path", { d: "M21 13V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955" })
                    ], -1)),
                    Q(" " + y(f.return_status.charAt(0).toUpperCase() + f.return_status.slice(1)), 1)
                  ], 2)
                ])) : z("", !0),
                o("div", Uo, [
                  o("span", Io, y(f.reference_data?.product_data?.brand || "Brand"), 1)
                ])
              ]),
              o("div", qo, [
                o("div", Ho, [
                  o("span", Vo, y(new Intl.NumberFormat("en-IN", { style: "currency", currency: f.currency, minimumFractionDigits: 0 }).format(f.payable_price)), 1),
                  o("span", Wo, y(new Intl.NumberFormat("en-IN", { style: "currency", currency: f.currency, minimumFractionDigits: 0 }).format(f.reference_data?.variant_product_data?.mrp || f.price)), 1)
                ]),
                o("h3", Zo, y(f.name), 1),
                o("div", Jo, [
                  o("div", Qo, [
                    o("span", Xo, y(f.order_status), 1),
                    u[15] || (u[15] = o("span", { class: "text-gray-400" }, "•", -1)),
                    o("span", Go, y(new Date(f.delivered_at).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric"
                    }).toLowerCase()), 1)
                  ]),
                  f.return_status !== "none" && f.returned_at ? (x(), w("div", Ko, [
                    u[16] || (u[16] = o("span", { class: "text-gray-500 dark:text-gray-400" }, "Returned:", -1)),
                    o("span", Yo, y(new Date(f.returned_at).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric"
                    }).toLowerCase()), 1)
                  ])) : z("", !0)
                ]),
                o("div", ei, [
                  (x(), w(D, null, Z(5, (c) => o("svg", {
                    key: c,
                    viewBox: "0 0 24 24",
                    class: $(["size-4 transition-colors", c <= (f.review?.rating || 0) ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"]),
                    fill: "currentColor"
                  }, [...u[17] || (u[17] = [
                    o("path", { d: "M11.48 3.5a.56.56 0 0 1 1.04 0l2.13 5.11a.56.56 0 0 0 .47.35l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 0 0-.18.56l1.28 5.38a.56.56 0 0 1-.84.61L12 17.65a.56.56 0 0 0-.58 0l-4.73 2.89a.56.56 0 0 1-.84-.61l1.28-5.38a.56.56 0 0 0-.18-.56L2.74 10.4a.56.56 0 0 1 .32-.99l5.52-.44a.56.56 0 0 0 .47-.35L11.48 3.5Z" }, null, -1)
                  ])], 2)), 64)),
                  f.review?.rating ? (x(), w("span", ti, " (" + y(f.review.rating) + ") ", 1)) : z("", !0)
                ]),
                o("button", {
                  onClick: r,
                  class: "w-full bg-linear-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white rounded-xl py-2.5 text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg hover:shadow-violet-500/25"
                }, " Find Similar ")
              ])
            ]))), 128))
          ])) : (x(), w("div", ri, [
            u[18] || (u[18] = o("div", { class: "w-24 h-24 mb-4 text-gray-300 dark:text-gray-600" }, [
              o("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                o("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.5",
                  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                })
              ])
            ], -1)),
            u[19] || (u[19] = o("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white mb-2" }, "No items found", -1)),
            o("p", ni, y(g.value ? `No results found for "${g.value}". Try different keywords.` : "No delivered items available at the moment."), 1),
            g.value ? (x(), w("button", {
              key: 0,
              onClick: u[1] || (u[1] = (f) => g.value = ""),
              class: "mt-4 px-4 py-2 text-sm font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 rounded-lg hover:bg-violet-100 dark:hover:bg-violet-900/50 transition-colors"
            }, " Clear search ")) : z("", !0)
          ]))
        ])
      ]),
      o("div", si, [
        o("div", oi, [
          o("button", {
            onClick: u[2] || (u[2] = (f) => s.value = s.value === "price" ? null : "price"),
            class: $(["relative flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 group", s.value === "price" ? "bg-linear-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/25" : "hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300"]),
            title: "Sort by price"
          }, [
            (x(), w("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: $(["size-5 transition-all duration-300 group-hover:scale-110", s.value === "price" ? "text-white" : "text-violet-500"])
            }, [...u[20] || (u[20] = [
              o("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              }, null, -1)
            ])], 2)),
            u[21] || (u[21] = o("span", { class: "text-sm font-medium" }, "Price", -1)),
            n.value === "price" && s.value !== "price" ? (x(), w("span", ii)) : z("", !0)
          ], 2),
          u[26] || (u[26] = o("div", { class: "w-px h-6 bg-linear-to-b from-transparent via-gray-300 dark:via-zinc-600 to-transparent" }, null, -1)),
          o("button", {
            onClick: u[3] || (u[3] = (f) => s.value = s.value === "status" ? null : "status"),
            class: $(["relative flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 group", s.value === "status" ? "bg-linear-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/25" : "hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300"]),
            title: "Filter by status"
          }, [
            (x(), w("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: $(["size-5 transition-all duration-300 group-hover:scale-110", s.value === "status" ? "text-white" : "text-violet-500"])
            }, [...u[22] || (u[22] = [
              o("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
              }, null, -1),
              o("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M6 6h.008v.008H6V6z"
              }, null, -1)
            ])], 2)),
            u[23] || (u[23] = o("span", { class: "text-sm font-medium" }, "Status", -1)),
            i.value !== "all" && s.value !== "status" ? (x(), w("span", ai)) : z("", !0)
          ], 2),
          u[27] || (u[27] = o("div", { class: "w-px h-6 bg-linear-to-b from-transparent via-gray-300 dark:via-zinc-600 to-transparent" }, null, -1)),
          o("button", {
            onClick: u[4] || (u[4] = (f) => s.value = s.value === "date" ? null : "date"),
            class: $(["relative flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 group", s.value === "date" ? "bg-linear-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/25" : "hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300"]),
            title: "Sort by date"
          }, [
            (x(), w("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: $(["size-5 transition-all duration-300 group-hover:scale-110", s.value === "date" ? "text-white" : "text-violet-500"])
            }, [...u[24] || (u[24] = [
              o("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              }, null, -1)
            ])], 2)),
            u[25] || (u[25] = o("span", { class: "text-sm font-medium" }, "Date", -1)),
            n.value === "date" && s.value !== "date" ? (x(), w("span", li)) : z("", !0)
          ], 2)
        ])
      ]),
      s.value ? (x(), w("div", di, [
        o("div", ui, [
          o("div", ci, [
            o("h3", pi, [
              u[28] || (u[28] = o("span", { class: "size-1.5 rounded-full bg-violet-500" }, null, -1)),
              Q(" " + y(s.value === "price" ? "Sort by Price" : s.value === "status" ? "Filter by Status" : "Sort by Date"), 1)
            ])
          ]),
          s.value === "price" ? (x(), w("div", fi, [
            o("button", {
              onClick: u[5] || (u[5] = (f) => {
                n.value = "price", a.value = "asc", s.value = null;
              }),
              class: $(["w-full text-left px-4 py-3 rounded-xl hover:bg-linear-to-r hover:from-violet-50 hover:to-purple-50 dark:hover:from-violet-950/50 dark:hover:to-purple-950/50 transition-all duration-200 group", n.value === "price" && a.value === "asc" ? "bg-linear-to-r from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50" : ""])
            }, [
              o("div", gi, [
                u[30] || (u[30] = q('<div class="flex items-center gap-3"><div class="size-8 rounded-lg bg-linear-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-violet-600 dark:text-violet-400"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"></path></svg></div><div><p class="text-sm font-medium text-gray-900 dark:text-white">Price Low → High</p><p class="text-xs text-gray-500 dark:text-gray-400">Lowest price first</p></div></div>', 1)),
                n.value === "price" && a.value === "asc" ? (x(), w("div", mi, [...u[29] || (u[29] = [
                  o("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "3",
                    stroke: "currentColor",
                    class: "size-3 text-white"
                  }, [
                    o("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "m4.5 12.75 6 6 9-13.5"
                    })
                  ], -1)
                ])])) : z("", !0)
              ])
            ], 2),
            o("button", {
              onClick: u[6] || (u[6] = (f) => {
                n.value = "price", a.value = "desc", s.value = null;
              }),
              class: $(["w-full text-left px-4 py-3 rounded-xl hover:bg-linear-to-r hover:from-violet-50 hover:to-purple-50 dark:hover:from-violet-950/50 dark:hover:to-purple-950/50 transition-all duration-200 group mt-1", n.value === "price" && a.value === "desc" ? "bg-linear-to-r from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50" : ""])
            }, [
              o("div", vi, [
                u[32] || (u[32] = q('<div class="flex items-center gap-3"><div class="size-8 rounded-lg bg-linear-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-violet-600 dark:text-violet-400"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25M21 15.75L17.25 12m0 0L21 8.25M17.25 12h-12"></path></svg></div><div><p class="text-sm font-medium text-gray-900 dark:text-white">Price High → Low</p><p class="text-xs text-gray-500 dark:text-gray-400">Highest price first</p></div></div>', 1)),
                n.value === "price" && a.value === "desc" ? (x(), w("div", hi, [...u[31] || (u[31] = [
                  o("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "3",
                    stroke: "currentColor",
                    class: "size-3 text-white"
                  }, [
                    o("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "m4.5 12.75 6 6 9-13.5"
                    })
                  ], -1)
                ])])) : z("", !0)
              ])
            ], 2)
          ])) : z("", !0),
          s.value === "status" ? (x(), w("div", xi, [
            o("button", {
              onClick: u[7] || (u[7] = (f) => {
                i.value = "all", s.value = null;
              }),
              class: $(["w-full text-left px-4 py-3 rounded-xl hover:bg-linear-to-r hover:from-violet-50 hover:to-purple-50 dark:hover:from-violet-950/50 dark:hover:to-purple-950/50 transition-all duration-200 group", i.value === "all" ? "bg-linear-to-r from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50" : ""])
            }, [
              o("div", wi, [
                u[34] || (u[34] = q('<div class="flex items-center gap-3"><div class="size-8 rounded-lg bg-linear-to-br from-gray-500/10 to-gray-600/10 flex items-center justify-center group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-gray-600 dark:text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></div><span class="text-sm font-medium text-gray-900 dark:text-white">All Items</span></div>', 1)),
                i.value === "all" ? (x(), w("div", bi, [...u[33] || (u[33] = [
                  o("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "3",
                    stroke: "currentColor",
                    class: "size-3 text-white"
                  }, [
                    o("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "m4.5 12.75 6 6 9-13.5"
                    })
                  ], -1)
                ])])) : z("", !0)
              ])
            ], 2),
            o("button", {
              onClick: u[8] || (u[8] = (f) => {
                i.value = "delivered", s.value = null;
              }),
              class: $(["w-full text-left px-4 py-3 rounded-xl hover:bg-linear-to-r hover:from-violet-50 hover:to-purple-50 dark:hover:from-violet-950/50 dark:hover:to-purple-950/50 transition-all duration-200 group mt-1", i.value === "delivered" ? "bg-linear-to-r from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50" : ""])
            }, [
              o("div", yi, [
                u[36] || (u[36] = q('<div class="flex items-center gap-3"><div class="size-8 rounded-lg bg-linear-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-green-600 dark:text-green-400"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></div><span class="text-sm font-medium text-gray-900 dark:text-white">Delivered</span></div>', 1)),
                i.value === "delivered" ? (x(), w("div", ki, [...u[35] || (u[35] = [
                  o("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "3",
                    stroke: "currentColor",
                    class: "size-3 text-white"
                  }, [
                    o("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "m4.5 12.75 6 6 9-13.5"
                    })
                  ], -1)
                ])])) : z("", !0)
              ])
            ], 2),
            o("button", {
              onClick: u[9] || (u[9] = (f) => {
                i.value = "cancelled", s.value = null;
              }),
              class: $(["w-full text-left px-4 py-3 rounded-xl hover:bg-linear-to-r hover:from-violet-50 hover:to-purple-50 dark:hover:from-violet-950/50 dark:hover:to-purple-950/50 transition-all duration-200 group mt-1", i.value === "cancelled" ? "bg-linear-to-r from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50" : ""])
            }, [
              o("div", _i, [
                u[38] || (u[38] = q('<div class="flex items-center gap-3"><div class="size-8 rounded-lg bg-linear-to-br from-red-500/10 to-rose-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-red-600 dark:text-red-400"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg></div><span class="text-sm font-medium text-gray-900 dark:text-white">Cancelled</span></div>', 1)),
                i.value === "cancelled" ? (x(), w("div", Ri, [...u[37] || (u[37] = [
                  o("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "3",
                    stroke: "currentColor",
                    class: "size-3 text-white"
                  }, [
                    o("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "m4.5 12.75 6 6 9-13.5"
                    })
                  ], -1)
                ])])) : z("", !0)
              ])
            ], 2),
            o("button", {
              onClick: u[10] || (u[10] = (f) => {
                i.value = "returned", s.value = null;
              }),
              class: $(["w-full text-left px-4 py-3 rounded-xl hover:bg-linear-to-r hover:from-violet-50 hover:to-purple-50 dark:hover:from-violet-950/50 dark:hover:to-purple-950/50 transition-all duration-200 group mt-1", i.value === "returned" ? "bg-linear-to-r from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50" : ""])
            }, [
              o("div", zi, [
                u[40] || (u[40] = q('<div class="flex items-center gap-3"><div class="size-8 rounded-lg bg-linear-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-blue-600 dark:text-blue-400"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg></div><span class="text-sm font-medium text-gray-900 dark:text-white">Returned</span></div>', 1)),
                i.value === "returned" ? (x(), w("div", Ei, [...u[39] || (u[39] = [
                  o("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "3",
                    stroke: "currentColor",
                    class: "size-3 text-white"
                  }, [
                    o("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "m4.5 12.75 6 6 9-13.5"
                    })
                  ], -1)
                ])])) : z("", !0)
              ])
            ], 2)
          ])) : z("", !0),
          s.value === "date" ? (x(), w("div", Ci, [
            o("button", {
              onClick: u[11] || (u[11] = (f) => {
                n.value = "date", l.value = "newest", s.value = null;
              }),
              class: $(["w-full text-left px-4 py-3 rounded-xl hover:bg-linear-to-r hover:from-violet-50 hover:to-purple-50 dark:hover:from-violet-950/50 dark:hover:to-purple-950/50 transition-all duration-200 group", n.value === "date" && l.value === "newest" ? "bg-linear-to-r from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50" : ""])
            }, [
              o("div", Si, [
                u[42] || (u[42] = q('<div class="flex items-center gap-3"><div class="size-8 rounded-lg bg-linear-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-violet-600 dark:text-violet-400"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0-6-6m6 6 6-6"></path></svg></div><div><p class="text-sm font-medium text-gray-900 dark:text-white">Newest First</p><p class="text-xs text-gray-500 dark:text-gray-400">Most recent deliveries</p></div></div>', 1)),
                n.value === "date" && l.value === "newest" ? (x(), w("div", Ai, [...u[41] || (u[41] = [
                  o("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "3",
                    stroke: "currentColor",
                    class: "size-3 text-white"
                  }, [
                    o("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "m4.5 12.75 6 6 9-13.5"
                    })
                  ], -1)
                ])])) : z("", !0)
              ])
            ], 2),
            o("button", {
              onClick: u[12] || (u[12] = (f) => {
                n.value = "date", l.value = "oldest", s.value = null;
              }),
              class: $(["w-full text-left px-4 py-3 rounded-xl hover:bg-linear-to-r hover:from-violet-50 hover:to-purple-50 dark:hover:from-violet-950/50 dark:hover:to-purple-950/50 transition-all duration-200 group mt-1", n.value === "date" && l.value === "oldest" ? "bg-linear-to-r from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50" : ""])
            }, [
              o("div", Oi, [
                u[44] || (u[44] = q('<div class="flex items-center gap-3"><div class="size-8 rounded-lg bg-linear-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-violet-600 dark:text-violet-400"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0 6-6m-6 6-6-6"></path></svg></div><div><p class="text-sm font-medium text-gray-900 dark:text-white">Oldest First</p><p class="text-xs text-gray-500 dark:text-gray-400">Earliest deliveries</p></div></div>', 1)),
                n.value === "date" && l.value === "oldest" ? (x(), w("div", $i, [...u[43] || (u[43] = [
                  o("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "3",
                    stroke: "currentColor",
                    class: "size-3 text-white"
                  }, [
                    o("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "m4.5 12.75 6 6 9-13.5"
                    })
                  ], -1)
                ])])) : z("", !0)
              ])
            ], 2)
          ])) : z("", !0)
        ])
      ])) : z("", !0)
    ], 64));
  }
}, ji = { class: "flex flex-col bg-[#f0f2f5] dark:bg-zinc-900 md:px-6 min-h-screen" }, Ni = { class: "flex flex-col bg-white dark:bg-zinc-800 md:dark:bg-transparent md:bg-transparent md:pb-10 pt-2 px-4 md:px-0" }, Bi = { class: "flex flex-col md:flex-row gap-6" }, Li = /* @__PURE__ */ De({
  __name: "Purchased",
  setup(e) {
    const { page_state: t } = se();
    return (r, n) => (x(), w("div", ji, [
      o("div", Ni, [
        o("div", {
          onClick: n[0] || (n[0] = (s) => t.value = "ORDER_PAGE"),
          class: "flex items-center gap-2 md:hidden"
        }, [...n[2] || (n[2] = [
          o("button", { class: "p-1 -ml-1" }, [
            o("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: "size-5 text-zinc-900 dark:text-zinc-100"
            }, [
              o("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15.75 19.5 8.25 12l7.5-7.5"
              })
            ])
          ], -1),
          o("h1", { class: "text-lg text-zinc-900 dark:text-zinc-100" }, "Purchased", -1)
        ])]),
        n[4] || (n[4] = o("h1", { class: "hidden md:block text-3xl font-semibold text-zinc-900 dark:text-zinc-100" }, "Purchased", -1)),
        o("button", {
          onClick: n[1] || (n[1] = (s) => t.value = "ORDER_PAGE"),
          class: "cursor-pointer hidden md:flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
        }, [...n[3] || (n[3] = [
          o("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-4 group-hover:-translate-x-0.5 transition-transform"
          }, [
            o("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            })
          ], -1),
          o("span", { class: "text-sm font-light" }, "Back to Orders", -1)
        ])])
      ]),
      o("div", Bi, [
        re(Ti)
      ])
    ]));
  }
}), Mi = { key: 0 }, Pi = { key: 1 }, Fi = /* @__PURE__ */ De({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    (async () => e._p.f.listen("msg", async (l) => {
      l.type === "theme:change" && (l.custom?.theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
    }))();
    const { _$p: t } = It();
    t.value = e._$p;
    const { getAllOrder: r, order: n, page_state: s, getDeliveredOrder: a, deliveredOrder: i } = se();
    return wt(async () => {
      await r(), await a(), console.log("orders :", n.value), console.log("delivered orders :", i.value);
    }), (l, g) => (x(), w(D, null, [
      Y(s) === "ORDER_PAGE" ? (x(), w("div", Mi, [
        re(So, Qe(Xe({
          __p: e._$p,
          _p: e._p
        })), null, 16)
      ])) : z("", !0),
      Y(s) === "PURCHASED_PAGE" ? (x(), w("div", Pi, [
        re(Li, Qe(Xe({
          __p: e._$p,
          _p: e._p
        })), null, 16)
      ])) : z("", !0)
    ], 64));
  }
}), ia = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const n = Qt(Fi, {
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
    }, a = document.getElementById(e.f.name("vue-root"));
    return n.mount(a), s;
  }
});
export {
  ia as hydrator,
  ia as index
};
