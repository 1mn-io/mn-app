import { r as z, a as Ct, d as nt, o as Re, c as Se, b as y, w as L, v as I, u as R, e as je, t as kt, f as Nt, n as vt, g as Pt, h as Ut, i as Ft } from "./runtime-dom.esm-bundler-BgnH2PNw.js";
function st(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Lt } = Object.prototype, { getPrototypeOf: Ce } = Object, { iterator: ue, toStringTag: rt } = Symbol, de = /* @__PURE__ */ ((e) => (t) => {
  const n = Lt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), P = (e) => (e = e.toLowerCase(), (t) => de(t) === e), fe = (e) => (t) => typeof t === e, { isArray: W } = Array, J = fe("undefined");
function Q(e) {
  return e !== null && !J(e) && e.constructor !== null && !J(e.constructor) && C(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ot = P("ArrayBuffer");
function Dt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ot(e.buffer), t;
}
const Bt = fe("string"), C = fe("function"), it = fe("number"), Z = (e) => e !== null && typeof e == "object", jt = (e) => e === !0 || e === !1, ie = (e) => {
  if (de(e) !== "object")
    return !1;
  const t = Ce(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(rt in e) && !(ue in e);
}, $t = (e) => {
  if (!Z(e) || Q(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, It = P("Date"), qt = P("File"), Ht = P("Blob"), Mt = P("FileList"), Vt = (e) => Z(e) && C(e.pipe), zt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || C(e.append) && ((t = de(e)) === "formdata" || // detect form-data instance
  t === "object" && C(e.toString) && e.toString() === "[object FormData]"));
}, Jt = P("URLSearchParams"), [Wt, Kt, Xt, Gt] = ["ReadableStream", "Request", "Response", "Headers"].map(P), Qt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Y(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, r;
  if (typeof e != "object" && (e = [e]), W(e))
    for (s = 0, r = e.length; s < r; s++)
      t.call(null, e[s], s, e);
  else {
    if (Q(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let c;
    for (s = 0; s < o; s++)
      c = i[s], t.call(null, e[c], c, e);
  }
}
function at(e, t) {
  if (Q(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, r;
  for (; s-- > 0; )
    if (r = n[s], t === r.toLowerCase())
      return r;
  return null;
}
const q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, lt = (e) => !J(e) && e !== q;
function _e() {
  const { caseless: e, skipUndefined: t } = lt(this) && this || {}, n = {}, s = (r, i) => {
    const o = e && at(n, i) || i;
    ie(n[o]) && ie(r) ? n[o] = _e(n[o], r) : ie(r) ? n[o] = _e({}, r) : W(r) ? n[o] = r.slice() : (!t || !J(r)) && (n[o] = r);
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Y(arguments[r], s);
  return n;
}
const Zt = (e, t, n, { allOwnKeys: s } = {}) => (Y(t, (r, i) => {
  n && C(r) ? Object.defineProperty(e, i, {
    value: st(r, n),
    writable: !0,
    enumerable: !0,
    configurable: !0
  }) : Object.defineProperty(e, i, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}, { allOwnKeys: s }), e), Yt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), en = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, tn = (e, t, n, s) => {
  let r, i, o;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
      o = r[i], (!s || s(o, e, t)) && !c[o] && (t[o] = e[o], c[o] = !0);
    e = n !== !1 && Ce(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, nn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, sn = (e) => {
  if (!e) return null;
  if (W(e)) return e;
  let t = e.length;
  if (!it(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, rn = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ce(Uint8Array)), on = (e, t) => {
  const s = (e && e[ue]).call(e);
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const i = r.value;
    t.call(e, i[0], i[1]);
  }
}, an = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, ln = P("HTMLFormElement"), cn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, r) {
    return s.toUpperCase() + r;
  }
), $e = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), un = P("RegExp"), ct = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  Y(n, (r, i) => {
    let o;
    (o = t(r, i, e)) !== !1 && (s[i] = o || r);
  }), Object.defineProperties(e, s);
}, dn = (e) => {
  ct(e, (t, n) => {
    if (C(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = e[n];
    if (C(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, fn = (e, t) => {
  const n = {}, s = (r) => {
    r.forEach((i) => {
      n[i] = !0;
    });
  };
  return W(e) ? s(e) : s(String(e).split(t)), n;
}, pn = () => {
}, mn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function hn(e) {
  return !!(e && C(e.append) && e[rt] === "FormData" && e[ue]);
}
const yn = (e) => {
  const t = new Array(10), n = (s, r) => {
    if (Z(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (Q(s))
        return s;
      if (!("toJSON" in s)) {
        t[r] = s;
        const i = W(s) ? [] : {};
        return Y(s, (o, c) => {
          const p = n(o, r + 1);
          !J(p) && (i[c] = p);
        }), t[r] = void 0, i;
      }
    }
    return s;
  };
  return n(e, 0);
}, bn = P("AsyncFunction"), gn = (e) => e && (Z(e) || C(e)) && C(e.then) && C(e.catch), ut = ((e, t) => e ? setImmediate : t ? ((n, s) => (q.addEventListener("message", ({ source: r, data: i }) => {
  r === q && i === n && s.length && s.shift()();
}, !1), (r) => {
  s.push(r), q.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  C(q.postMessage)
), wn = typeof queueMicrotask < "u" ? queueMicrotask.bind(q) : typeof process < "u" && process.nextTick || ut, En = (e) => e != null && C(e[ue]), l = {
  isArray: W,
  isArrayBuffer: ot,
  isBuffer: Q,
  isFormData: zt,
  isArrayBufferView: Dt,
  isString: Bt,
  isNumber: it,
  isBoolean: jt,
  isObject: Z,
  isPlainObject: ie,
  isEmptyObject: $t,
  isReadableStream: Wt,
  isRequest: Kt,
  isResponse: Xt,
  isHeaders: Gt,
  isUndefined: J,
  isDate: It,
  isFile: qt,
  isBlob: Ht,
  isRegExp: un,
  isFunction: C,
  isStream: Vt,
  isURLSearchParams: Jt,
  isTypedArray: rn,
  isFileList: Mt,
  forEach: Y,
  merge: _e,
  extend: Zt,
  trim: Qt,
  stripBOM: Yt,
  inherits: en,
  toFlatObject: tn,
  kindOf: de,
  kindOfTest: P,
  endsWith: nn,
  toArray: sn,
  forEachEntry: on,
  matchAll: an,
  isHTMLForm: ln,
  hasOwnProperty: $e,
  hasOwnProp: $e,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ct,
  freezeMethods: dn,
  toObjectSet: fn,
  toCamelCase: cn,
  noop: pn,
  toFiniteNumber: mn,
  findKey: at,
  global: q,
  isContextDefined: lt,
  isSpecCompliantForm: hn,
  toJSONObject: yn,
  isAsyncFn: bn,
  isThenable: gn,
  setImmediate: ut,
  asap: wn,
  isIterable: En
};
let b = class dt extends Error {
  static from(t, n, s, r, i, o) {
    const c = new dt(t.message, n || t.code, s, r, i);
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
  constructor(t, n, s, r, i) {
    super(t), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), s && (this.config = s), r && (this.request = r), i && (this.response = i, this.status = i.status);
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
b.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
b.ERR_BAD_OPTION = "ERR_BAD_OPTION";
b.ECONNABORTED = "ECONNABORTED";
b.ETIMEDOUT = "ETIMEDOUT";
b.ERR_NETWORK = "ERR_NETWORK";
b.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
b.ERR_DEPRECATED = "ERR_DEPRECATED";
b.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
b.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
b.ERR_CANCELED = "ERR_CANCELED";
b.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
b.ERR_INVALID_URL = "ERR_INVALID_URL";
const xn = null;
function Oe(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function ft(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ie(e, t, n) {
  return e ? e.concat(t).map(function(r, i) {
    return r = ft(r), !n && i ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function Rn(e) {
  return l.isArray(e) && !e.some(Oe);
}
const Sn = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function pe(e, t, n) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = l.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, m) {
    return !l.isUndefined(m[h]);
  });
  const s = n.metaTokens, r = n.visitor || a, i = n.dots, o = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(r))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null) return "";
    if (l.isDate(d))
      return d.toISOString();
    if (l.isBoolean(d))
      return d.toString();
    if (!p && l.isBlob(d))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(d) || l.isTypedArray(d) ? p && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function a(d, h, m) {
    let E = d;
    if (d && !m && typeof d == "object") {
      if (l.endsWith(h, "{}"))
        h = s ? h : h.slice(0, -2), d = JSON.stringify(d);
      else if (l.isArray(d) && Rn(d) || (l.isFileList(d) || l.endsWith(h, "[]")) && (E = l.toArray(d)))
        return h = ft(h), E.forEach(function(S, T) {
          !(l.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Ie([h], T, i) : o === null ? h : h + "[]",
            u(S)
          );
        }), !1;
    }
    return Oe(d) ? !0 : (t.append(Ie(m, h, i), u(d)), !1);
  }
  const f = [], g = Object.assign(Sn, {
    defaultVisitor: a,
    convertValue: u,
    isVisitable: Oe
  });
  function w(d, h) {
    if (!l.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      f.push(d), l.forEach(d, function(E, _) {
        (!(l.isUndefined(E) || E === null) && r.call(
          t,
          E,
          l.isString(_) ? _.trim() : _,
          h,
          g
        )) === !0 && w(E, h ? h.concat(_) : [_]);
      }), f.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
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
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
    return t[s];
  });
}
function ke(e, t) {
  this._pairs = [], e && pe(e, this, t);
}
const pt = ke.prototype;
pt.append = function(t, n) {
  this._pairs.push([t, n]);
};
pt.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, qe);
  } : qe;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function _n(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function mt(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || _n, r = l.isFunction(n) ? {
    serialize: n
  } : n, i = r && r.serialize;
  let o;
  if (i ? o = i(t, r) : o = l.isURLSearchParams(t) ? t.toString() : new ke(t, r).toString(s), o) {
    const c = e.indexOf("#");
    c !== -1 && (e = e.slice(0, c)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class He {
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
  use(t, n, s) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
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
    l.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const ht = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, On = typeof URLSearchParams < "u" ? URLSearchParams : ke, An = typeof FormData < "u" ? FormData : null, Tn = typeof Blob < "u" ? Blob : null, Cn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: On,
    FormData: An,
    Blob: Tn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ne = typeof window < "u" && typeof document < "u", Ae = typeof navigator == "object" && navigator || void 0, kn = Ne && (!Ae || ["ReactNative", "NativeScript", "NS"].indexOf(Ae.product) < 0), Nn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", vn = Ne && window.location.href || "http://localhost", Pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ne,
  hasStandardBrowserEnv: kn,
  hasStandardBrowserWebWorkerEnv: Nn,
  navigator: Ae,
  origin: vn
}, Symbol.toStringTag, { value: "Module" })), A = {
  ...Pn,
  ...Cn
};
function Un(e, t) {
  return pe(e, new A.classes.URLSearchParams(), {
    visitor: function(n, s, r, i) {
      return A.isNode && l.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Fn(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ln(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const r = n.length;
  let i;
  for (s = 0; s < r; s++)
    i = n[s], t[i] = e[i];
  return t;
}
function yt(e) {
  function t(n, s, r, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const c = Number.isFinite(+o), p = i >= n.length;
    return o = !o && l.isArray(r) ? r.length : o, p ? (l.hasOwnProp(r, o) ? r[o] = [r[o], s] : r[o] = s, !c) : ((!r[o] || !l.isObject(r[o])) && (r[o] = []), t(n, s, r[o], i) && l.isArray(r[o]) && (r[o] = Ln(r[o])), !c);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const n = {};
    return l.forEachEntry(e, (s, r) => {
      t(Fn(s), r, n, 0);
    }), n;
  }
  return null;
}
function Dn(e, t, n) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const ee = {
  transitional: ht,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", r = s.indexOf("application/json") > -1, i = l.isObject(t);
    if (i && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return r ? JSON.stringify(yt(t)) : t;
    if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t) || l.isReadableStream(t))
      return t;
    if (l.isArrayBufferView(t))
      return t.buffer;
    if (l.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (i) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return Un(t, this.formSerializer).toString();
      if ((c = l.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return pe(
          c ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return i || r ? (n.setContentType("application/json", !1), Dn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ee.transitional, s = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (l.isResponse(t) || l.isReadableStream(t))
      return t;
    if (t && l.isString(t) && (s && !this.responseType || r)) {
      const o = !(n && n.silentJSONParsing) && r;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (c) {
        if (o)
          throw c.name === "SyntaxError" ? b.from(c, b.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
  ee.headers[e] = {};
});
const Bn = l.toObjectSet([
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
]), jn = (e) => {
  const t = {};
  let n, s, r;
  return e && e.split(`
`).forEach(function(o) {
    r = o.indexOf(":"), n = o.substring(0, r).trim().toLowerCase(), s = o.substring(r + 1).trim(), !(!n || t[n] && Bn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, Me = /* @__PURE__ */ Symbol("internals");
function X(e) {
  return e && String(e).trim().toLowerCase();
}
function ae(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(ae) : String(e);
}
function $n(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const In = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function be(e, t, n, s, r) {
  if (l.isFunction(s))
    return s.call(this, t, n);
  if (r && (t = n), !!l.isString(t)) {
    if (l.isString(s))
      return t.indexOf(s) !== -1;
    if (l.isRegExp(s))
      return s.test(t);
  }
}
function qn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function Hn(e, t) {
  const n = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function(r, i, o) {
        return this[s].call(this, t, r, i, o);
      },
      configurable: !0
    });
  });
}
let k = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function i(c, p, u) {
      const a = X(p);
      if (!a)
        throw new Error("header name must be a non-empty string");
      const f = l.findKey(r, a);
      (!f || r[f] === void 0 || u === !0 || u === void 0 && r[f] !== !1) && (r[f || p] = ae(c));
    }
    const o = (c, p) => l.forEach(c, (u, a) => i(u, a, p));
    if (l.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (l.isString(t) && (t = t.trim()) && !In(t))
      o(jn(t), n);
    else if (l.isObject(t) && l.isIterable(t)) {
      let c = {}, p, u;
      for (const a of t) {
        if (!l.isArray(a))
          throw TypeError("Object iterator must return a key-value pair");
        c[u = a[0]] = (p = c[u]) ? l.isArray(p) ? [...p, a[1]] : [p, a[1]] : a[1];
      }
      o(c, n);
    } else
      t != null && i(n, t, s);
    return this;
  }
  get(t, n) {
    if (t = X(t), t) {
      const s = l.findKey(this, t);
      if (s) {
        const r = this[s];
        if (!n)
          return r;
        if (n === !0)
          return $n(r);
        if (l.isFunction(n))
          return n.call(this, r, s);
        if (l.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = X(t), t) {
      const s = l.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || be(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function i(o) {
      if (o = X(o), o) {
        const c = l.findKey(s, o);
        c && (!n || be(s, s[c], c, n)) && (delete s[c], r = !0);
      }
    }
    return l.isArray(t) ? t.forEach(i) : i(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, r = !1;
    for (; s--; ) {
      const i = n[s];
      (!t || be(this, this[i], i, t, !0)) && (delete this[i], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, s = {};
    return l.forEach(this, (r, i) => {
      const o = l.findKey(s, i);
      if (o) {
        n[o] = ae(r), delete n[i];
        return;
      }
      const c = t ? qn(i) : String(i).trim();
      c !== i && delete n[i], n[c] = ae(r), s[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (s, r) => {
      s != null && s !== !1 && (n[r] = t && l.isArray(s) ? s.join(", ") : s);
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
    const s = new this(t);
    return n.forEach((r) => s.set(r)), s;
  }
  static accessor(t) {
    const s = (this[Me] = this[Me] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const c = X(o);
      s[c] || (Hn(r, o), s[c] = !0);
    }
    return l.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
k.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.reduceDescriptors(k.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
l.freezeMethods(k);
function ge(e, t) {
  const n = this || ee, s = t || n, r = k.from(s.headers);
  let i = s.data;
  return l.forEach(e, function(c) {
    i = c.call(n, i, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), i;
}
function bt(e) {
  return !!(e && e.__CANCEL__);
}
let te = class extends b {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, s) {
    super(t ?? "canceled", b.ERR_CANCELED, n, s), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function gt(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new b(
    "Request failed with status code " + n.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Mn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Vn(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let r = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const u = Date.now(), a = s[i];
    o || (o = u), n[r] = p, s[r] = u;
    let f = i, g = 0;
    for (; f !== r; )
      g += n[f++], f = f % e;
    if (r = (r + 1) % e, r === i && (i = (i + 1) % e), u - o < t)
      return;
    const w = a && u - a;
    return w ? Math.round(g * 1e3 / w) : void 0;
  };
}
function zn(e, t) {
  let n = 0, s = 1e3 / t, r, i;
  const o = (u, a = Date.now()) => {
    n = a, r = null, i && (clearTimeout(i), i = null), e(...u);
  };
  return [(...u) => {
    const a = Date.now(), f = a - n;
    f >= s ? o(u, a) : (r = u, i || (i = setTimeout(() => {
      i = null, o(r);
    }, s - f)));
  }, () => r && o(r)];
}
const ce = (e, t, n = 3) => {
  let s = 0;
  const r = Vn(50, 250);
  return zn((i) => {
    const o = i.loaded, c = i.lengthComputable ? i.total : void 0, p = o - s, u = r(p), a = o <= c;
    s = o;
    const f = {
      loaded: o,
      total: c,
      progress: c ? o / c : void 0,
      bytes: p,
      rate: u || void 0,
      estimated: u && c && a ? (c - o) / u : void 0,
      event: i,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, Ve = (e, t) => {
  const n = e != null;
  return [(s) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: s
  }), t[1]];
}, ze = (e) => (...t) => l.asap(() => e(...t)), Jn = A.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, A.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(A.origin),
  A.navigator && /(msie|trident)/i.test(A.navigator.userAgent)
) : () => !0, Wn = A.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, s, r, i, o) {
      if (typeof document > "u") return;
      const c = [`${e}=${encodeURIComponent(t)}`];
      l.isNumber(n) && c.push(`expires=${new Date(n).toUTCString()}`), l.isString(s) && c.push(`path=${s}`), l.isString(r) && c.push(`domain=${r}`), i === !0 && c.push("secure"), l.isString(o) && c.push(`SameSite=${o}`), document.cookie = c.join("; ");
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
function Kn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Xn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function wt(e, t, n) {
  let s = !Kn(t);
  return e && (s || n == !1) ? Xn(e, t) : t;
}
const Je = (e) => e instanceof k ? { ...e } : e;
function M(e, t) {
  t = t || {};
  const n = {};
  function s(u, a, f, g) {
    return l.isPlainObject(u) && l.isPlainObject(a) ? l.merge.call({ caseless: g }, u, a) : l.isPlainObject(a) ? l.merge({}, a) : l.isArray(a) ? a.slice() : a;
  }
  function r(u, a, f, g) {
    if (l.isUndefined(a)) {
      if (!l.isUndefined(u))
        return s(void 0, u, f, g);
    } else return s(u, a, f, g);
  }
  function i(u, a) {
    if (!l.isUndefined(a))
      return s(void 0, a);
  }
  function o(u, a) {
    if (l.isUndefined(a)) {
      if (!l.isUndefined(u))
        return s(void 0, u);
    } else return s(void 0, a);
  }
  function c(u, a, f) {
    if (f in t)
      return s(u, a);
    if (f in e)
      return s(void 0, u);
  }
  const p = {
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
    headers: (u, a, f) => r(Je(u), Je(a), f, !0)
  };
  return l.forEach(Object.keys({ ...e, ...t }), function(a) {
    const f = p[a] || r, g = f(e[a], t[a], a);
    l.isUndefined(g) && f !== c || (n[a] = g);
  }), n;
}
const Et = (e) => {
  const t = M({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: c } = t;
  if (t.headers = o = k.from(o), t.url = mt(wt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && o.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  ), l.isFormData(n)) {
    if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (l.isFunction(n.getHeaders)) {
      const p = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(p).forEach(([a, f]) => {
        u.includes(a.toLowerCase()) && o.set(a, f);
      });
    }
  }
  if (A.hasStandardBrowserEnv && (s && l.isFunction(s) && (s = s(t)), s || s !== !1 && Jn(t.url))) {
    const p = r && i && Wn.read(i);
    p && o.set(r, p);
  }
  return t;
}, Gn = typeof XMLHttpRequest < "u", Qn = Gn && function(e) {
  return new Promise(function(n, s) {
    const r = Et(e);
    let i = r.data;
    const o = k.from(r.headers).normalize();
    let { responseType: c, onUploadProgress: p, onDownloadProgress: u } = r, a, f, g, w, d;
    function h() {
      w && w(), d && d(), r.cancelToken && r.cancelToken.unsubscribe(a), r.signal && r.signal.removeEventListener("abort", a);
    }
    let m = new XMLHttpRequest();
    m.open(r.method.toUpperCase(), r.url, !0), m.timeout = r.timeout;
    function E() {
      if (!m)
        return;
      const S = k.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), v = {
        data: !c || c === "text" || c === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: S,
        config: e,
        request: m
      };
      gt(function(N) {
        n(N), h();
      }, function(N) {
        s(N), h();
      }, v), m = null;
    }
    "onloadend" in m ? m.onloadend = E : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, m.onabort = function() {
      m && (s(new b("Request aborted", b.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function(T) {
      const v = T && T.message ? T.message : "Network Error", j = new b(v, b.ERR_NETWORK, e, m);
      j.event = T || null, s(j), m = null;
    }, m.ontimeout = function() {
      let T = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const v = r.transitional || ht;
      r.timeoutErrorMessage && (T = r.timeoutErrorMessage), s(new b(
        T,
        v.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        e,
        m
      )), m = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in m && l.forEach(o.toJSON(), function(T, v) {
      m.setRequestHeader(v, T);
    }), l.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials), c && c !== "json" && (m.responseType = r.responseType), u && ([g, d] = ce(u, !0), m.addEventListener("progress", g)), p && m.upload && ([f, w] = ce(p), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", w)), (r.cancelToken || r.signal) && (a = (S) => {
      m && (s(!S || S.type ? new te(null, e, m) : S), m.abort(), m = null);
    }, r.cancelToken && r.cancelToken.subscribe(a), r.signal && (r.signal.aborted ? a() : r.signal.addEventListener("abort", a)));
    const _ = Mn(r.url);
    if (_ && A.protocols.indexOf(_) === -1) {
      s(new b("Unsupported protocol " + _ + ":", b.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(i || null);
  });
}, Zn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let s = new AbortController(), r;
    const i = function(u) {
      if (!r) {
        r = !0, c();
        const a = u instanceof Error ? u : this.reason;
        s.abort(a instanceof b ? a : new te(a instanceof Error ? a.message : a));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new b(`timeout of ${t}ms exceeded`, b.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: p } = s;
    return p.unsubscribe = () => l.asap(c), p;
  }
}, Yn = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, r;
  for (; s < n; )
    r = s + t, yield e.slice(s, r), s = r;
}, es = async function* (e, t) {
  for await (const n of ts(e))
    yield* Yn(n, t);
}, ts = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: s } = await t.read();
      if (n)
        break;
      yield s;
    }
  } finally {
    await t.cancel();
  }
}, We = (e, t, n, s) => {
  const r = es(e, t);
  let i = 0, o, c = (p) => {
    o || (o = !0, s && s(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: u, value: a } = await r.next();
        if (u) {
          c(), p.close();
          return;
        }
        let f = a.byteLength;
        if (n) {
          let g = i += f;
          n(g);
        }
        p.enqueue(new Uint8Array(a));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(p) {
      return c(p), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ke = 64 * 1024, { isFunction: oe } = l, ns = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(l.global), {
  ReadableStream: Xe,
  TextEncoder: Ge
} = l.global, Qe = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ss = (e) => {
  e = l.merge.call({
    skipUndefined: !0
  }, ns, e);
  const { fetch: t, Request: n, Response: s } = e, r = t ? oe(t) : typeof fetch == "function", i = oe(n), o = oe(s);
  if (!r)
    return !1;
  const c = r && oe(Xe), p = r && (typeof Ge == "function" ? /* @__PURE__ */ ((d) => (h) => d.encode(h))(new Ge()) : async (d) => new Uint8Array(await new n(d).arrayBuffer())), u = i && c && Qe(() => {
    let d = !1;
    const h = new n(A.origin, {
      body: new Xe(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !h;
  }), a = o && c && Qe(() => l.isReadableStream(new s("").body)), f = {
    stream: a && ((d) => d.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !f[d] && (f[d] = (h, m) => {
      let E = h && h[d];
      if (E)
        return E.call(h);
      throw new b(`Response type '${d}' is not supported`, b.ERR_NOT_SUPPORT, m);
    });
  });
  const g = async (d) => {
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
      return (await p(d)).byteLength;
  }, w = async (d, h) => {
    const m = l.toFiniteNumber(d.getContentLength());
    return m ?? g(h);
  };
  return async (d) => {
    let {
      url: h,
      method: m,
      data: E,
      signal: _,
      cancelToken: S,
      timeout: T,
      onDownloadProgress: v,
      onUploadProgress: j,
      responseType: N,
      headers: he,
      withCredentials: ne = "same-origin",
      fetchOptions: Pe
    } = Et(d), Ue = t || fetch;
    N = N ? (N + "").toLowerCase() : "text";
    let se = Zn([_, S && S.toAbortSignal()], T), K = null;
    const $ = se && se.unsubscribe && (() => {
      se.unsubscribe();
    });
    let Fe;
    try {
      if (j && u && m !== "get" && m !== "head" && (Fe = await w(he, E)) !== 0) {
        let B = new n(h, {
          method: "POST",
          body: E,
          duplex: "half"
        }), V;
        if (l.isFormData(E) && (V = B.headers.get("content-type")) && he.setContentType(V), B.body) {
          const [ye, re] = Ve(
            Fe,
            ce(ze(j))
          );
          E = We(B.body, Ke, ye, re);
        }
      }
      l.isString(ne) || (ne = ne ? "include" : "omit");
      const U = i && "credentials" in n.prototype, Le = {
        ...Pe,
        signal: se,
        method: m.toUpperCase(),
        headers: he.normalize().toJSON(),
        body: E,
        duplex: "half",
        credentials: U ? ne : void 0
      };
      K = i && new n(h, Le);
      let D = await (i ? Ue(K, Pe) : Ue(h, Le));
      const De = a && (N === "stream" || N === "response");
      if (a && (v || De && $)) {
        const B = {};
        ["status", "statusText", "headers"].forEach((Be) => {
          B[Be] = D[Be];
        });
        const V = l.toFiniteNumber(D.headers.get("content-length")), [ye, re] = v && Ve(
          V,
          ce(ze(v), !0)
        ) || [];
        D = new s(
          We(D.body, Ke, ye, () => {
            re && re(), $ && $();
          }),
          B
        );
      }
      N = N || "text";
      let Tt = await f[l.findKey(f, N) || "text"](D, d);
      return !De && $ && $(), await new Promise((B, V) => {
        gt(B, V, {
          data: Tt,
          headers: k.from(D.headers),
          status: D.status,
          statusText: D.statusText,
          config: d,
          request: K
        });
      });
    } catch (U) {
      throw $ && $(), U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message) ? Object.assign(
        new b("Network Error", b.ERR_NETWORK, d, K),
        {
          cause: U.cause || U
        }
      ) : b.from(U, U && U.code, d, K);
    }
  };
}, rs = /* @__PURE__ */ new Map(), xt = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: s, Response: r } = t, i = [
    s,
    r,
    n
  ];
  let o = i.length, c = o, p, u, a = rs;
  for (; c--; )
    p = i[c], u = a.get(p), u === void 0 && a.set(p, u = c ? /* @__PURE__ */ new Map() : ss(t)), a = u;
  return u;
};
xt();
const ve = {
  http: xn,
  xhr: Qn,
  fetch: {
    get: xt
  }
};
l.forEach(ve, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ze = (e) => `- ${e}`, os = (e) => l.isFunction(e) || e === null || e === !1;
function is(e, t) {
  e = l.isArray(e) ? e : [e];
  const { length: n } = e;
  let s, r;
  const i = {};
  for (let o = 0; o < n; o++) {
    s = e[o];
    let c;
    if (r = s, !os(s) && (r = ve[(c = String(s)).toLowerCase()], r === void 0))
      throw new b(`Unknown adapter '${c}'`);
    if (r && (l.isFunction(r) || (r = r.get(t))))
      break;
    i[c || "#" + o] = r;
  }
  if (!r) {
    const o = Object.entries(i).map(
      ([p, u]) => `adapter ${p} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let c = n ? o.length > 1 ? `since :
` + o.map(Ze).join(`
`) : " " + Ze(o[0]) : "as no adapter specified";
    throw new b(
      "There is no suitable adapter to dispatch the request " + c,
      "ERR_NOT_SUPPORT"
    );
  }
  return r;
}
const Rt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: is,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: ve
};
function we(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new te(null, e);
}
function Ye(e) {
  return we(e), e.headers = k.from(e.headers), e.data = ge.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Rt.getAdapter(e.adapter || ee.adapter, e)(e).then(function(s) {
    return we(e), s.data = ge.call(
      e,
      e.transformResponse,
      s
    ), s.headers = k.from(s.headers), s;
  }, function(s) {
    return bt(s) || (we(e), s && s.response && (s.response.data = ge.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = k.from(s.response.headers))), Promise.reject(s);
  });
}
const St = "1.13.4", me = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  me[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const et = {};
me.transitional = function(t, n, s) {
  function r(i, o) {
    return "[Axios v" + St + "] Transitional option '" + i + "'" + o + (s ? ". " + s : "");
  }
  return (i, o, c) => {
    if (t === !1)
      throw new b(
        r(o, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return n && !et[o] && (et[o] = !0, console.warn(
      r(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, c) : !0;
  };
};
me.spelling = function(t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function as(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const i = s[r], o = t[i];
    if (o) {
      const c = e[i], p = c === void 0 || o(c, i, e);
      if (p !== !0)
        throw new b("option " + i + " must be " + p, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new b("Unknown option " + i, b.ERR_BAD_OPTION);
  }
}
const le = {
  assertOptions: as,
  validators: me
}, F = le.validators;
let H = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new He(),
      response: new He()
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
    } catch (s) {
      if (s instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
        const i = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? i && !String(s.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + i) : s.stack = i;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = M(this.defaults, n);
    const { transitional: s, paramsSerializer: r, headers: i } = n;
    s !== void 0 && le.assertOptions(s, {
      silentJSONParsing: F.transitional(F.boolean),
      forcedJSONParsing: F.transitional(F.boolean),
      clarifyTimeoutError: F.transitional(F.boolean)
    }, !1), r != null && (l.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : le.assertOptions(r, {
      encode: F.function,
      serialize: F.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), le.assertOptions(n, {
      baseUrl: F.spelling("baseURL"),
      withXsrfToken: F.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && l.merge(
      i.common,
      i[n.method]
    );
    i && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), n.headers = k.concat(o, i);
    const c = [];
    let p = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (p = p && h.synchronous, c.unshift(h.fulfilled, h.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(h) {
      u.push(h.fulfilled, h.rejected);
    });
    let a, f = 0, g;
    if (!p) {
      const d = [Ye.bind(this), void 0];
      for (d.unshift(...c), d.push(...u), g = d.length, a = Promise.resolve(n); f < g; )
        a = a.then(d[f++], d[f++]);
      return a;
    }
    g = c.length;
    let w = n;
    for (; f < g; ) {
      const d = c[f++], h = c[f++];
      try {
        w = d(w);
      } catch (m) {
        h.call(this, m);
        break;
      }
    }
    try {
      a = Ye.call(this, w);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, g = u.length; f < g; )
      a = a.then(u[f++], u[f++]);
    return a;
  }
  getUri(t) {
    t = M(this.defaults, t);
    const n = wt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return mt(n, t.params, t.paramsSerializer);
  }
};
l.forEach(["delete", "get", "head", "options"], function(t) {
  H.prototype[t] = function(n, s) {
    return this.request(M(s || {}, {
      method: t,
      url: n,
      data: (s || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(i, o, c) {
      return this.request(M(c || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  H.prototype[t] = n(), H.prototype[t + "Form"] = n(!0);
});
let ls = class _t {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners) return;
      let i = s._listeners.length;
      for (; i-- > 0; )
        s._listeners[i](r);
      s._listeners = null;
    }), this.promise.then = (r) => {
      let i;
      const o = new Promise((c) => {
        s.subscribe(c), i = c;
      }).then(r);
      return o.cancel = function() {
        s.unsubscribe(i);
      }, o;
    }, t(function(i, o, c) {
      s.reason || (s.reason = new te(i, o, c), n(s.reason));
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
    const t = new AbortController(), n = (s) => {
      t.abort(s);
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
      token: new _t(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function cs(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function us(e) {
  return l.isObject(e) && e.isAxiosError === !0;
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
  const t = new H(e), n = st(H.prototype.request, t);
  return l.extend(n, H.prototype, t, { allOwnKeys: !0 }), l.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return Ot(M(e, r));
  }, n;
}
const x = Ot(ee);
x.Axios = H;
x.CanceledError = te;
x.CancelToken = ls;
x.isCancel = bt;
x.VERSION = St;
x.toFormData = pe;
x.AxiosError = b;
x.Cancel = x.CanceledError;
x.all = function(t) {
  return Promise.all(t);
};
x.spread = cs;
x.isAxiosError = us;
x.mergeConfig = M;
x.AxiosHeaders = k;
x.formToJSON = (e) => yt(l.isHTMLForm(e) ? new FormData(e) : e);
x.getAdapter = Rt.getAdapter;
x.HttpStatusCode = Te;
x.default = x;
const {
  Axios: Ws,
  AxiosError: Ks,
  CanceledError: Xs,
  isCancel: Gs,
  CancelToken: Qs,
  VERSION: Zs,
  all: Ys,
  Cancel: er,
  isAxiosError: tr,
  spread: nr,
  toFormData: sr,
  AxiosHeaders: rr,
  HttpStatusCode: or,
  formToJSON: ir,
  getAdapter: ar,
  mergeConfig: lr
} = x;
function ds() {
  const e = z(!1), t = z(null);
  return { post: async (s, r, i = null) => {
    e.value = !0, t.value = null;
    try {
      const { data: o } = await x.post(s, r, {
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
function fs(e, t) {
  return t.split(".").reduce((n, s) => n?.[s], e);
}
function ps(e, t) {
  const { open: n, close: s } = t, r = [];
  let i = 0;
  for (; i < e.length; ) {
    const o = e.indexOf(n, i);
    if (o === -1) {
      r.push({ type: "text", value: e.slice(i) });
      break;
    }
    o > i && r.push({ type: "text", value: e.slice(i, o) });
    const c = e.indexOf(s, o + n.length);
    if (c === -1)
      throw new Error(`Unclosed template placeholder starting at ${o}`);
    const p = e.slice(o + n.length, c).trim(), [u, a] = p.split("=");
    r.push({ type: "param", value: u, defaultValue: a }), i = c + s.length;
  }
  return r;
}
function ms(e, t, n) {
  const s = /* @__PURE__ */ new Set(), r = e.map((i) => {
    if (i.type === "text") return i.value;
    const o = fs(t, i.value);
    if (s.add(i.value.split(".")[0]), o === void 0 || o === "") {
      if (i.defaultValue !== void 0) return i.defaultValue;
      if (n.strict) throw new Error(`Missing param: ${i.value}`);
      return "";
    }
    return n.encode ? encodeURIComponent(String(o)) : String(o);
  }).join("");
  if (n.strict) {
    for (const i of Object.keys(t))
      if (!s.has(i))
        throw new Error(`Unused param provided: ${i}`);
  }
  return r;
}
function G(e, t) {
  const n = {
    open: t?.open ?? "{",
    close: t?.close ?? "}",
    encode: t?.encode ?? !1,
    strict: t?.strict ?? !1
  }, s = ps(e, n);
  return (r) => ms(s, r, n);
}
const tt = z([]), Ee = z(null), xe = z(!1), hs = z("create"), O = Ct({
  name: "",
  phone_number: "",
  street: "",
  landmark: "",
  city: "",
  state: "",
  pincode: "",
  address_type: "",
  //set..
  country: ""
}), At = (e) => {
  const t = e._$p, { post: n, error: s } = ds(), i = G(t.data.curr.data.api.token, { open: "<", close: ">" })({
    localStorage: {
      token: localStorage.getItem("token") || ""
    }
  }).replace("Bearer ", ""), o = t.data.curr.data.api.url, c = i, p = async () => {
    const w = await n(
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
    if (!w?.success) return console.log("api error", s.value);
    tt.value = w.data.slice().reverse();
  };
  return { addresses: tt, getAddress: p, createAddress: async (w) => {
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
        //"country_code": "IN",
        country: O.country,
        is_default: !0
      },
      c
    ))?.success) return console.log("api error", s.value);
    await p(), Ee.value = null, xe.value = !1, Object.keys(O).forEach((h) => O[h] = "");
    try {
      const m = G(w.data.curr.data.event.onCreated)({});
      location.href = `${m}`;
    } catch (h) {
      console.log(`address, err:${h}`);
    }
  }, updateAddress: async (w, d) => {
    const h = Object.fromEntries(
      Object.entries(O).filter(([E, _]) => _ !== "" && _ !== null)
    );
    if (!(await n(o, {
      operation: "update_address",
      user_id: "user_1",
      address_id: d,
      ...h
    }, c))?.success) return console.log("api error", s.value);
    await p(), Ee.value = null, xe.value = !1, Object.keys(O).forEach((E) => O[E] = "");
    try {
      const _ = G(w.data.curr.data.event.onUpdated)({});
      location.href = `${_}`;
    } catch (E) {
      console.log(`address, err:${E}`);
    }
  }, removeAddress: async (w) => {
    if (!(await n(
      o,
      {
        operation: "remove_address",
        user_id: "user_1",
        address_id: w
      },
      c
    ))?.success) return console.log("api error", s.value);
    await p();
  }, viewAddress: async (w) => {
    let d = null;
    try {
      const h = await n(
        o,
        {
          operation: "view_address",
          user_id: "user_1",
          address_id: w
        },
        c
      );
      if (!h?.success)
        throw new Error(`api error ${s.value}`);
      d = h;
    } catch (h) {
      console.log(h);
      return;
    }
    return d;
  }, selectedAddress: Ee, showForm: xe, formMode: hs, form: O };
}, ys = { class: "p-4 shadow-md" }, bs = { class: "space-y-12" }, gs = { class: "border-b border-gray-900/10 pb-12" }, ws = { class: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6" }, Es = { class: "sm:col-span-3" }, xs = { class: "mt-2" }, Rs = { class: "sm:col-span-3" }, Ss = { class: "mt-2" }, _s = { class: "col-span-full" }, Os = { class: "mt-2" }, As = { class: "col-span-full" }, Ts = { class: "mt-2" }, Cs = { class: "sm:col-span-2 sm:col-start-1" }, ks = { class: "mt-2" }, Ns = { class: "sm:col-span-2" }, vs = { class: "mt-2" }, Ps = { class: "sm:col-span-2" }, Us = { class: "mt-2" }, Fs = { class: "sm:col-span-2" }, Ls = { class: "mt-2" }, Ds = { class: "sm:col-span-2" }, Bs = { class: "mt-2" }, js = { class: "mt-6 flex items-center justify-end gap-x-6" }, $s = /* @__PURE__ */ nt({
  __name: "AddressForm",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const { createAddress: t, updateAddress: n, form: s, formMode: r, showForm: i, selectedAddress: o } = At({ _$p: e.__p }), c = async () => {
      r.value === "create" && await t(e.__p), r.value === "update" && await n(e.__p, o.value?.address_id);
    }, p = async () => {
      o.value = null, i.value = !1, Object.keys(s).forEach((u) => s[u] = "");
      try {
        const a = G(e.__p.data.curr.data.event.onCancel)({});
        location.href = `${a}`;
      } catch (u) {
        console.log(`address, err:${u}`);
      }
    };
    return (u, a) => (Re(), Se("div", ys, [
      y("div", bs, [
        y("div", gs, [
          a[20] || (a[20] = y("h2", { class: "text-base/7 font-semibold text-gray-900" }, "Shipping Address", -1)),
          a[21] || (a[21] = y("p", { class: "text-sm/6 text-gray-600" }, "This address will be used for delivery.", -1)),
          y("div", ws, [
            y("div", Es, [
              a[9] || (a[9] = y("label", {
                for: "name",
                class: "block text-sm/6 font-medium text-gray-900"
              }, "Full name", -1)),
              y("div", xs, [
                L(y("input", {
                  "onUpdate:modelValue": a[0] || (a[0] = (f) => R(s).name = f),
                  type: "text",
                  class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                  placeholder: "John Doe"
                }, null, 512), [
                  [I, R(s).name]
                ])
              ])
            ]),
            y("div", Rs, [
              a[10] || (a[10] = y("label", {
                for: "name",
                class: "block text-sm/6 font-medium text-gray-900"
              }, "Phone", -1)),
              y("div", Ss, [
                L(y("input", {
                  "onUpdate:modelValue": a[1] || (a[1] = (f) => R(s).phone_number = f),
                  type: "tel",
                  inputmode: "numeric",
                  pattern: "[0-9]*",
                  maxlength: "10",
                  class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                  placeholder: "Enter Phone Number"
                }, null, 512), [
                  [I, R(s).phone_number]
                ])
              ])
            ]),
            y("div", _s, [
              a[11] || (a[11] = y("label", {
                for: "street",
                class: "block text-sm/6 font-medium text-gray-900"
              }, "Street address", -1)),
              y("div", Os, [
                L(y("input", {
                  "onUpdate:modelValue": a[2] || (a[2] = (f) => R(s).street = f),
                  type: "text",
                  class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                  placeholder: "House no, street name"
                }, null, 512), [
                  [I, R(s).street]
                ])
              ])
            ]),
            y("div", As, [
              a[12] || (a[12] = y("label", {
                for: "landmark",
                class: "block text-sm/6 font-medium text-gray-900"
              }, "Landmark (optional)", -1)),
              y("div", Ts, [
                L(y("input", {
                  "onUpdate:modelValue": a[3] || (a[3] = (f) => R(s).landmark = f),
                  type: "text",
                  class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                  placeholder: "Near park, school, etc."
                }, null, 512), [
                  [I, R(s).landmark]
                ])
              ])
            ]),
            y("div", Cs, [
              a[13] || (a[13] = y("label", {
                for: "city",
                class: "block text-sm/6 font-medium text-gray-900"
              }, "City", -1)),
              y("div", ks, [
                L(y("input", {
                  "onUpdate:modelValue": a[4] || (a[4] = (f) => R(s).city = f),
                  type: "text",
                  class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                  placeholder: "Enter city"
                }, null, 512), [
                  [I, R(s).city]
                ])
              ])
            ]),
            y("div", Ns, [
              a[14] || (a[14] = y("label", {
                for: "state",
                class: "block text-sm/6 font-medium text-gray-900"
              }, "State", -1)),
              y("div", vs, [
                L(y("input", {
                  "onUpdate:modelValue": a[5] || (a[5] = (f) => R(s).state = f),
                  type: "text",
                  class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                  placeholder: "Enter State"
                }, null, 512), [
                  [I, R(s).state]
                ])
              ])
            ]),
            y("div", Ps, [
              a[15] || (a[15] = y("label", {
                for: "pincode",
                class: "block text-sm/6 font-medium text-gray-900"
              }, "Pincode", -1)),
              y("div", Us, [
                L(y("input", {
                  "onUpdate:modelValue": a[6] || (a[6] = (f) => R(s).pincode = f),
                  type: "text",
                  inputmode: "numeric",
                  pattern: "[0-9]*",
                  maxlength: "6",
                  class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                  placeholder: "Enter pincode"
                }, null, 512), [
                  [I, R(s).pincode]
                ])
              ])
            ]),
            y("div", Fs, [
              a[17] || (a[17] = y("label", {
                for: "country",
                class: "block text-sm/6 font-medium text-gray-900"
              }, "Country", -1)),
              y("div", Ls, [
                L(y("select", {
                  "onUpdate:modelValue": a[7] || (a[7] = (f) => R(s).country = f),
                  class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                }, [...a[16] || (a[16] = [
                  y("option", {
                    value: "",
                    disabled: ""
                  }, "Select Country", -1),
                  y("option", { value: "in" }, "India", -1),
                  y("option", { value: "ru" }, "Russia", -1)
                ])], 512), [
                  [je, R(s).country]
                ])
              ])
            ]),
            y("div", Ds, [
              a[19] || (a[19] = y("label", {
                for: "address_type",
                class: "block text-sm/6 font-medium text-gray-900"
              }, "Address Type", -1)),
              y("div", Bs, [
                L(y("select", {
                  "onUpdate:modelValue": a[8] || (a[8] = (f) => R(s).address_type = f),
                  class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                }, [...a[18] || (a[18] = [
                  y("option", {
                    value: "",
                    disabled: ""
                  }, "Select Address Type", -1),
                  y("option", { value: "home" }, "Home", -1),
                  y("option", { value: "work" }, "Work", -1)
                ])], 512), [
                  [je, R(s).address_type]
                ])
              ])
            ])
          ])
        ])
      ]),
      y("div", js, [
        y("button", {
          onClick: p,
          class: "rounded-md bg-violet-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        }, " Cancel "),
        y("button", {
          onClick: c,
          class: "capitalize rounded-md bg-violet-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        }, kt(R(r) + " Address"), 1)
      ])
    ]));
  }
}), Is = { class: "max-w-2xl mx-auto dark:bg-zinc-900" }, qs = { key: 0 }, Hs = /* @__PURE__ */ nt({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const { selectedAddress: t, showForm: n, formMode: s, form: r, viewAddress: i } = At({ _$p: e._$p }), { id: o } = Object.fromEntries(new URLSearchParams(location.search || "")), c = () => {
      t.value = null, Object.keys(r).forEach((u) => r[u] = ""), s.value = "create", n.value = !0;
    }, p = async (u) => {
      try {
        const a = await i(u.address_id);
        if (!a)
          throw new Error("no address found");
        const f = a.address;
        t.value = f, Object.assign(r, { ...f }), s.value = "update", n.value = !0;
      } catch (a) {
        throw a;
      }
    };
    return (async () => {
      try {
        o ? await p({
          address_id: o
          //name:"john"
        }) : c();
      } catch (u) {
        console.log(u);
        try {
          const f = G(e._$p.data.curr.data.event.onNotFound)({});
          location.href = `${f}`;
        } catch (a) {
          console.log(`address, err:${a}`);
        }
      }
    })(), (async () => e._p.f.listen("msg", async (u) => {
      u.type === "theme:change" && (u.custom?.theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
    }))(), (u, a) => (Re(), Se("div", Is, [
      R(n) ? (Re(), Se("div", qs, [
        Nt($s, vt(Pt({ _p: e._p, __p: e._$p })), null, 16)
      ])) : Ut("", !0)
    ]));
  }
}), cr = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const s = Ft(Hs, {
      _p: e,
      _$p: t
    }), r = {
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
    return s.mount(i), r;
  }
});
export {
  cr as hydrator,
  cr as index
};
