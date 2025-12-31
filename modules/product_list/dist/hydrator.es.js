import { i as kt, d as et, r as $, o as At, a as Ct, c as F, b as N, e as w, w as _t, f as ie, v as vt, g as Nt, h as ye, F as Ue, j as Be, t as Y, k as De, l as Pt, m as Lt } from "./runtime-dom.esm-bundler-BsjW_VaU.js";
const Ft = /* @__PURE__ */ Symbol("");
function Ut() {
  return kt(Ft);
}
function tt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Bt } = Object.prototype, { getPrototypeOf: Ae } = Object, { iterator: fe, toStringTag: nt } = Symbol, pe = /* @__PURE__ */ ((e) => (t) => {
  const n = Bt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (e) => (e = e.toLowerCase(), (t) => pe(t) === e), he = (e) => (t) => typeof t === e, { isArray: G } = Array, X = he("undefined");
function te(e) {
  return e !== null && !X(e) && e.constructor !== null && !X(e.constructor) && P(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const rt = U("ArrayBuffer");
function Dt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && rt(e.buffer), t;
}
const It = he("string"), P = he("function"), st = he("number"), ne = (e) => e !== null && typeof e == "object", jt = (e) => e === !0 || e === !1, le = (e) => {
  if (pe(e) !== "object")
    return !1;
  const t = Ae(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(nt in e) && !(fe in e);
}, Mt = (e) => {
  if (!ne(e) || te(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, qt = U("Date"), $t = U("File"), Ht = U("Blob"), zt = U("FileList"), Jt = (e) => ne(e) && P(e.pipe), Vt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || P(e.append) && ((t = pe(e)) === "formdata" || // detect form-data instance
  t === "object" && P(e.toString) && e.toString() === "[object FormData]"));
}, Wt = U("URLSearchParams"), [Kt, Xt, Gt, Zt] = ["ReadableStream", "Request", "Response", "Headers"].map(U), Qt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function re(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), G(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (te(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let l;
    for (r = 0; r < o; r++)
      l = i[r], t.call(null, e[l], l, e);
  }
}
function ot(e, t) {
  if (te(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const z = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, it = (e) => !X(e) && e !== z;
function Re() {
  const { caseless: e, skipUndefined: t } = it(this) && this || {}, n = {}, r = (s, i) => {
    const o = e && ot(n, i) || i;
    le(n[o]) && le(s) ? n[o] = Re(n[o], s) : le(s) ? n[o] = Re({}, s) : G(s) ? n[o] = s.slice() : (!t || !X(s)) && (n[o] = s);
  };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && re(arguments[s], r);
  return n;
}
const Yt = (e, t, n, { allOwnKeys: r } = {}) => (re(t, (s, i) => {
  n && P(s) ? e[i] = tt(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), en = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), tn = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, nn = (e, t, n, r) => {
  let s, i, o;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !l[o] && (t[o] = e[o], l[o] = !0);
    e = n !== !1 && Ae(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, rn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, sn = (e) => {
  if (!e) return null;
  if (G(e)) return e;
  let t = e.length;
  if (!st(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, on = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ae(Uint8Array)), an = (e, t) => {
  const r = (e && e[fe]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, ln = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, cn = U("HTMLFormElement"), un = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Ie = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), dn = U("RegExp"), at = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  re(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, fn = (e) => {
  at(e, (t, n) => {
    if (P(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (P(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, pn = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return G(e) ? r(e) : r(String(e).split(t)), n;
}, hn = () => {
}, mn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function bn(e) {
  return !!(e && P(e.append) && e[nt] === "FormData" && e[fe]);
}
const gn = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (ne(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (te(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = G(r) ? [] : {};
        return re(r, (o, l) => {
          const f = n(o, s + 1);
          !X(f) && (i[l] = f);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, yn = U("AsyncFunction"), wn = (e) => e && (ne(e) || P(e)) && P(e.then) && P(e.catch), lt = ((e, t) => e ? setImmediate : t ? ((n, r) => (z.addEventListener("message", ({ source: s, data: i }) => {
  s === z && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), z.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  P(z.postMessage)
), xn = typeof queueMicrotask < "u" ? queueMicrotask.bind(z) : typeof process < "u" && process.nextTick || lt, En = (e) => e != null && P(e[fe]), a = {
  isArray: G,
  isArrayBuffer: rt,
  isBuffer: te,
  isFormData: Vt,
  isArrayBufferView: Dt,
  isString: It,
  isNumber: st,
  isBoolean: jt,
  isObject: ne,
  isPlainObject: le,
  isEmptyObject: Mt,
  isReadableStream: Kt,
  isRequest: Xt,
  isResponse: Gt,
  isHeaders: Zt,
  isUndefined: X,
  isDate: qt,
  isFile: $t,
  isBlob: Ht,
  isRegExp: dn,
  isFunction: P,
  isStream: Jt,
  isURLSearchParams: Wt,
  isTypedArray: on,
  isFileList: zt,
  forEach: re,
  merge: Re,
  extend: Yt,
  trim: Qt,
  stripBOM: en,
  inherits: tn,
  toFlatObject: nn,
  kindOf: pe,
  kindOfTest: U,
  endsWith: rn,
  toArray: sn,
  forEachEntry: an,
  matchAll: ln,
  isHTMLForm: cn,
  hasOwnProperty: Ie,
  hasOwnProp: Ie,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: at,
  freezeMethods: fn,
  toObjectSet: pn,
  toCamelCase: un,
  noop: hn,
  toFiniteNumber: mn,
  findKey: ot,
  global: z,
  isContextDefined: it,
  isSpecCompliantForm: bn,
  toJSONObject: gn,
  isAsyncFn: yn,
  isThenable: wn,
  setImmediate: lt,
  asap: xn,
  isIterable: En
};
function g(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(g, Error, {
  toJSON: function() {
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
});
const ct = g.prototype, ut = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  ut[e] = { value: e };
});
Object.defineProperties(g, ut);
Object.defineProperty(ct, "isAxiosError", { value: !0 });
g.from = (e, t, n, r, s, i) => {
  const o = Object.create(ct);
  a.toFlatObject(e, o, function(c) {
    return c !== Error.prototype;
  }, (d) => d !== "isAxiosError");
  const l = e && e.message ? e.message : "Error", f = t == null && e ? e.code : t;
  return g.call(o, l, f, n, r, s), e && o.cause == null && Object.defineProperty(o, "cause", { value: e, configurable: !0 }), o.name = e && e.name || "Error", i && Object.assign(o, i), o;
};
const Sn = null;
function Oe(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function dt(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function je(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = dt(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Rn(e) {
  return a.isArray(e) && !e.some(Oe);
}
const On = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function me(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, p) {
    return !a.isUndefined(p[b]);
  });
  const r = n.metaTokens, s = n.visitor || c, i = n.dots, o = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(u) {
    if (u === null) return "";
    if (a.isDate(u))
      return u.toISOString();
    if (a.isBoolean(u))
      return u.toString();
    if (!f && a.isBlob(u))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(u) || a.isTypedArray(u) ? f && typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function c(u, b, p) {
    let S = u;
    if (u && !p && typeof u == "object") {
      if (a.endsWith(b, "{}"))
        b = r ? b : b.slice(0, -2), u = JSON.stringify(u);
      else if (a.isArray(u) && Rn(u) || (a.isFileList(u) || a.endsWith(b, "[]")) && (S = a.toArray(u)))
        return b = dt(b), S.forEach(function(O, k) {
          !(a.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? je([b], k, i) : o === null ? b : b + "[]",
            d(O)
          );
        }), !1;
    }
    return Oe(u) ? !0 : (t.append(je(p, b, i), d(u)), !1);
  }
  const h = [], E = Object.assign(On, {
    defaultVisitor: c,
    convertValue: d,
    isVisitable: Oe
  });
  function T(u, b) {
    if (!a.isUndefined(u)) {
      if (h.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      h.push(u), a.forEach(u, function(S, C) {
        (!(a.isUndefined(S) || S === null) && s.call(
          t,
          S,
          a.isString(C) ? C.trim() : C,
          b,
          E
        )) === !0 && T(S, b ? b.concat(C) : [C]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), t;
}
function Me(e) {
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
  this._pairs = [], e && me(e, this, t);
}
const ft = Ce.prototype;
ft.append = function(t, n) {
  this._pairs.push([t, n]);
};
ft.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Me);
  } : Me;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Tn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function pt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Tn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = a.isURLSearchParams(t) ? t.toString() : new Ce(t, n).toString(r), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
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
const ht = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, kn = typeof URLSearchParams < "u" ? URLSearchParams : Ce, An = typeof FormData < "u" ? FormData : null, Cn = typeof Blob < "u" ? Blob : null, _n = {
  isBrowser: !0,
  classes: {
    URLSearchParams: kn,
    FormData: An,
    Blob: Cn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, _e = typeof window < "u" && typeof document < "u", Te = typeof navigator == "object" && navigator || void 0, vn = _e && (!Te || ["ReactNative", "NativeScript", "NS"].indexOf(Te.product) < 0), Nn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Pn = _e && window.location.href || "http://localhost", Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: _e,
  hasStandardBrowserEnv: vn,
  hasStandardBrowserWebWorkerEnv: Nn,
  navigator: Te,
  origin: Pn
}, Symbol.toStringTag, { value: "Module" })), A = {
  ...Ln,
  ..._n
};
function Fn(e, t) {
  return me(e, new A.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return A.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Un(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Bn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function mt(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const l = Number.isFinite(+o), f = i >= n.length;
    return o = !o && a.isArray(s) ? s.length : o, f ? (a.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !l) : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && a.isArray(s[o]) && (s[o] = Bn(s[o])), !l);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(Un(r), s, n, 0);
    }), n;
  }
  return null;
}
function Dn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const se = {
  transitional: ht,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = a.isObject(t);
    if (i && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(mt(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Fn(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return me(
          l ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), Dn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || se.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (l) {
        if (o)
          throw l.name === "SyntaxError" ? g.from(l, g.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  se.headers[e] = {};
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
]), jn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && In[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, $e = /* @__PURE__ */ Symbol("internals");
function ee(e) {
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
const qn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function $n(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Hn(e, t) {
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
let L = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(l, f, d) {
      const c = ee(f);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, c);
      (!h || s[h] === void 0 || d === !0 || d === void 0 && s[h] !== !1) && (s[h || f] = ce(l));
    }
    const o = (l, f) => a.forEach(l, (d, c) => i(d, c, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (a.isString(t) && (t = t.trim()) && !qn(t))
      o(jn(t), n);
    else if (a.isObject(t) && a.isIterable(t)) {
      let l = {}, f, d;
      for (const c of t) {
        if (!a.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        l[d = c[0]] = (f = l[d]) ? a.isArray(f) ? [...f, c[1]] : [f, c[1]] : c[1];
      }
      o(l, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = ee(t), t) {
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
    if (t = ee(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || we(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = ee(o), o) {
        const l = a.findKey(r, o);
        l && (!n || we(r, r[l], l, n)) && (delete r[l], s = !0);
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
      const l = t ? $n(i) : String(i).trim();
      l !== i && delete n[i], n[l] = ce(s), r[l] = !0;
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
    const r = (this[$e] = this[$e] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const l = ee(o);
      r[l] || (Hn(s, o), r[l] = !0);
    }
    return a.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
L.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(L.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(L);
function xe(e, t) {
  const n = this || se, r = t || n, s = L.from(r.headers);
  let i = r.data;
  return a.forEach(e, function(l) {
    i = l.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function bt(e) {
  return !!(e && e.__CANCEL__);
}
function Z(e, t, n) {
  g.call(this, e ?? "canceled", g.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(Z, g, {
  __CANCEL__: !0
});
function gt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new g(
    "Request failed with status code " + n.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function zn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Jn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const d = Date.now(), c = r[i];
    o || (o = d), n[s] = f, r[s] = d;
    let h = i, E = 0;
    for (; h !== s; )
      E += n[h++], h = h % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), d - o < t)
      return;
    const T = c && d - c;
    return T ? Math.round(E * 1e3 / T) : void 0;
  };
}
function Vn(e, t) {
  let n = 0, r = 1e3 / t, s, i;
  const o = (d, c = Date.now()) => {
    n = c, s = null, i && (clearTimeout(i), i = null), e(...d);
  };
  return [(...d) => {
    const c = Date.now(), h = c - n;
    h >= r ? o(d, c) : (s = d, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - h)));
  }, () => s && o(s)];
}
const de = (e, t, n = 3) => {
  let r = 0;
  const s = Jn(50, 250);
  return Vn((i) => {
    const o = i.loaded, l = i.lengthComputable ? i.total : void 0, f = o - r, d = s(f), c = o <= l;
    r = o;
    const h = {
      loaded: o,
      total: l,
      progress: l ? o / l : void 0,
      bytes: f,
      rate: d || void 0,
      estimated: d && l && c ? (l - o) / d : void 0,
      event: i,
      lengthComputable: l != null,
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
}, ze = (e) => (...t) => a.asap(() => e(...t)), Wn = A.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, A.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(A.origin),
  A.navigator && /(msie|trident)/i.test(A.navigator.userAgent)
) : () => !0, Kn = A.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, i, o) {
      if (typeof document > "u") return;
      const l = [`${e}=${encodeURIComponent(t)}`];
      a.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`), a.isString(r) && l.push(`path=${r}`), a.isString(s) && l.push(`domain=${s}`), i === !0 && l.push("secure"), a.isString(o) && l.push(`SameSite=${o}`), document.cookie = l.join("; ");
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
function Xn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Gn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function yt(e, t, n) {
  let r = !Xn(t);
  return e && (r || n == !1) ? Gn(e, t) : t;
}
const Je = (e) => e instanceof L ? { ...e } : e;
function V(e, t) {
  t = t || {};
  const n = {};
  function r(d, c, h, E) {
    return a.isPlainObject(d) && a.isPlainObject(c) ? a.merge.call({ caseless: E }, d, c) : a.isPlainObject(c) ? a.merge({}, c) : a.isArray(c) ? c.slice() : c;
  }
  function s(d, c, h, E) {
    if (a.isUndefined(c)) {
      if (!a.isUndefined(d))
        return r(void 0, d, h, E);
    } else return r(d, c, h, E);
  }
  function i(d, c) {
    if (!a.isUndefined(c))
      return r(void 0, c);
  }
  function o(d, c) {
    if (a.isUndefined(c)) {
      if (!a.isUndefined(d))
        return r(void 0, d);
    } else return r(void 0, c);
  }
  function l(d, c, h) {
    if (h in t)
      return r(d, c);
    if (h in e)
      return r(void 0, d);
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
    validateStatus: l,
    headers: (d, c, h) => s(Je(d), Je(c), h, !0)
  };
  return a.forEach(Object.keys({ ...e, ...t }), function(c) {
    const h = f[c] || s, E = h(e[c], t[c], c);
    a.isUndefined(E) && h !== l || (n[c] = E);
  }), n;
}
const wt = (e) => {
  const t = V({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: l } = t;
  if (t.headers = o = L.from(o), t.url = pt(yt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && o.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  ), a.isFormData(n)) {
    if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (a.isFunction(n.getHeaders)) {
      const f = n.getHeaders(), d = ["content-type", "content-length"];
      Object.entries(f).forEach(([c, h]) => {
        d.includes(c.toLowerCase()) && o.set(c, h);
      });
    }
  }
  if (A.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && Wn(t.url))) {
    const f = s && i && Kn.read(i);
    f && o.set(s, f);
  }
  return t;
}, Zn = typeof XMLHttpRequest < "u", Qn = Zn && function(e) {
  return new Promise(function(n, r) {
    const s = wt(e);
    let i = s.data;
    const o = L.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: d } = s, c, h, E, T, u;
    function b() {
      T && T(), u && u(), s.cancelToken && s.cancelToken.unsubscribe(c), s.signal && s.signal.removeEventListener("abort", c);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function S() {
      if (!p)
        return;
      const O = L.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), _ = {
        data: !l || l === "text" || l === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: O,
        config: e,
        request: p
      };
      gt(function(v) {
        n(v), b();
      }, function(v) {
        r(v), b();
      }, _), p = null;
    }
    "onloadend" in p ? p.onloadend = S : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, p.onabort = function() {
      p && (r(new g("Request aborted", g.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function(k) {
      const _ = k && k.message ? k.message : "Network Error", I = new g(_, g.ERR_NETWORK, e, p);
      I.event = k || null, r(I), p = null;
    }, p.ontimeout = function() {
      let k = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const _ = s.transitional || ht;
      s.timeoutErrorMessage && (k = s.timeoutErrorMessage), r(new g(
        k,
        _.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in p && a.forEach(o.toJSON(), function(k, _) {
      p.setRequestHeader(_, k);
    }), a.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), l && l !== "json" && (p.responseType = s.responseType), d && ([E, u] = de(d, !0), p.addEventListener("progress", E)), f && p.upload && ([h, T] = de(f), p.upload.addEventListener("progress", h), p.upload.addEventListener("loadend", T)), (s.cancelToken || s.signal) && (c = (O) => {
      p && (r(!O || O.type ? new Z(null, e, p) : O), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(c), s.signal && (s.signal.aborted ? c() : s.signal.addEventListener("abort", c)));
    const C = zn(s.url);
    if (C && A.protocols.indexOf(C) === -1) {
      r(new g("Unsupported protocol " + C + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, Yn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const i = function(d) {
      if (!s) {
        s = !0, l();
        const c = d instanceof Error ? d : this.reason;
        r.abort(c instanceof g ? c : new Z(c instanceof Error ? c.message : c));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new g(`timeout ${t} of ms exceeded`, g.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(i) : d.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", i));
    const { signal: f } = r;
    return f.unsubscribe = () => a.asap(l), f;
  }
}, er = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, tr = async function* (e, t) {
  for await (const n of nr(e))
    yield* er(n, t);
}, nr = async function* (e) {
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
  const s = tr(e, t);
  let i = 0, o, l = (f) => {
    o || (o = !0, r && r(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: d, value: c } = await s.next();
        if (d) {
          l(), f.close();
          return;
        }
        let h = c.byteLength;
        if (n) {
          let E = i += h;
          n(E);
        }
        f.enqueue(new Uint8Array(c));
      } catch (d) {
        throw l(d), d;
      }
    },
    cancel(f) {
      return l(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, We = 64 * 1024, { isFunction: ae } = a, rr = (({ Request: e, Response: t }) => ({
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
}, sr = (e) => {
  e = a.merge.call({
    skipUndefined: !0
  }, rr, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? ae(t) : typeof fetch == "function", i = ae(n), o = ae(r);
  if (!s)
    return !1;
  const l = s && ae(Ke), f = s && (typeof Xe == "function" ? /* @__PURE__ */ ((u) => (b) => u.encode(b))(new Xe()) : async (u) => new Uint8Array(await new n(u).arrayBuffer())), d = i && l && Ge(() => {
    let u = !1;
    const b = new n(A.origin, {
      body: new Ke(),
      method: "POST",
      get duplex() {
        return u = !0, "half";
      }
    }).headers.has("Content-Type");
    return u && !b;
  }), c = o && l && Ge(() => a.isReadableStream(new r("").body)), h = {
    stream: c && ((u) => u.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((u) => {
    !h[u] && (h[u] = (b, p) => {
      let S = b && b[u];
      if (S)
        return S.call(b);
      throw new g(`Response type '${u}' is not supported`, g.ERR_NOT_SUPPORT, p);
    });
  });
  const E = async (u) => {
    if (u == null)
      return 0;
    if (a.isBlob(u))
      return u.size;
    if (a.isSpecCompliantForm(u))
      return (await new n(A.origin, {
        method: "POST",
        body: u
      }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(u) || a.isArrayBuffer(u))
      return u.byteLength;
    if (a.isURLSearchParams(u) && (u = u + ""), a.isString(u))
      return (await f(u)).byteLength;
  }, T = async (u, b) => {
    const p = a.toFiniteNumber(u.getContentLength());
    return p ?? E(b);
  };
  return async (u) => {
    let {
      url: b,
      method: p,
      data: S,
      signal: C,
      cancelToken: O,
      timeout: k,
      onDownloadProgress: _,
      onUploadProgress: I,
      responseType: v,
      headers: Q,
      withCredentials: y = "same-origin",
      fetchOptions: m
    } = wt(u), x = t || fetch;
    v = v ? (v + "").toLowerCase() : "text";
    let j = Yn([C, O && O.toAbortSignal()], k), W = null;
    const H = j && j.unsubscribe && (() => {
      j.unsubscribe();
    });
    let Ne;
    try {
      if (I && d && p !== "get" && p !== "head" && (Ne = await T(Q, S)) !== 0) {
        let q = new n(b, {
          method: "POST",
          body: S,
          duplex: "half"
        }), K;
        if (a.isFormData(S) && (K = q.headers.get("content-type")) && Q.setContentType(K), q.body) {
          const [ge, oe] = He(
            Ne,
            de(ze(I))
          );
          S = Ve(q.body, We, ge, oe);
        }
      }
      a.isString(y) || (y = y ? "include" : "omit");
      const B = i && "credentials" in n.prototype, Pe = {
        ...m,
        signal: j,
        method: p.toUpperCase(),
        headers: Q.normalize().toJSON(),
        body: S,
        duplex: "half",
        credentials: B ? y : void 0
      };
      W = i && new n(b, Pe);
      let M = await (i ? x(W, m) : x(b, Pe));
      const Le = c && (v === "stream" || v === "response");
      if (c && (_ || Le && H)) {
        const q = {};
        ["status", "statusText", "headers"].forEach((Fe) => {
          q[Fe] = M[Fe];
        });
        const K = a.toFiniteNumber(M.headers.get("content-length")), [ge, oe] = _ && He(
          K,
          de(ze(_), !0)
        ) || [];
        M = new r(
          Ve(M.body, We, ge, () => {
            oe && oe(), H && H();
          }),
          q
        );
      }
      v = v || "text";
      let Tt = await h[a.findKey(h, v) || "text"](M, u);
      return !Le && H && H(), await new Promise((q, K) => {
        gt(q, K, {
          data: Tt,
          headers: L.from(M.headers),
          status: M.status,
          statusText: M.statusText,
          config: u,
          request: W
        });
      });
    } catch (B) {
      throw H && H(), B && B.name === "TypeError" && /Load failed|fetch/i.test(B.message) ? Object.assign(
        new g("Network Error", g.ERR_NETWORK, u, W),
        {
          cause: B.cause || B
        }
      ) : g.from(B, B && B.code, u, W);
    }
  };
}, or = /* @__PURE__ */ new Map(), xt = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, i = [
    r,
    s,
    n
  ];
  let o = i.length, l = o, f, d, c = or;
  for (; l--; )
    f = i[l], d = c.get(f), d === void 0 && c.set(f, d = l ? /* @__PURE__ */ new Map() : sr(t)), c = d;
  return d;
};
xt();
const ve = {
  http: Sn,
  xhr: Qn,
  fetch: {
    get: xt
  }
};
a.forEach(ve, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ze = (e) => `- ${e}`, ir = (e) => a.isFunction(e) || e === null || e === !1;
function ar(e, t) {
  e = a.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const i = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let l;
    if (s = r, !ir(r) && (s = ve[(l = String(r)).toLowerCase()], s === void 0))
      throw new g(`Unknown adapter '${l}'`);
    if (s && (a.isFunction(s) || (s = s.get(t))))
      break;
    i[l || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(i).map(
      ([f, d]) => `adapter ${f} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? o.length > 1 ? `since :
` + o.map(Ze).join(`
`) : " " + Ze(o[0]) : "as no adapter specified";
    throw new g(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Et = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: ar,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: ve
};
function Ee(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Z(null, e);
}
function Qe(e) {
  return Ee(e), e.headers = L.from(e.headers), e.data = xe.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Et.getAdapter(e.adapter || se.adapter, e)(e).then(function(r) {
    return Ee(e), r.data = xe.call(
      e,
      e.transformResponse,
      r
    ), r.headers = L.from(r.headers), r;
  }, function(r) {
    return bt(r) || (Ee(e), r && r.response && (r.response.data = xe.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = L.from(r.response.headers))), Promise.reject(r);
  });
}
const St = "1.13.2", be = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  be[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ye = {};
be.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + St + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, l) => {
    if (t === !1)
      throw new g(
        s(o, " has been removed" + (n ? " in " + n : "")),
        g.ERR_DEPRECATED
      );
    return n && !Ye[o] && (Ye[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, l) : !0;
  };
};
be.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function lr(e, t, n) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const l = e[i], f = l === void 0 || o(l, i, e);
      if (f !== !0)
        throw new g("option " + i + " must be " + f, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new g("Unknown option " + i, g.ERR_BAD_OPTION);
  }
}
const ue = {
  assertOptions: lr,
  validators: be
}, D = ue.validators;
let J = class {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = V(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && ue.assertOptions(r, {
      silentJSONParsing: D.transitional(D.boolean),
      forcedJSONParsing: D.transitional(D.boolean),
      clarifyTimeoutError: D.transitional(D.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ue.assertOptions(s, {
      encode: D.function,
      serialize: D.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), ue.assertOptions(n, {
      baseUrl: D.spelling("baseURL"),
      withXsrfToken: D.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && a.merge(
      i.common,
      i[n.method]
    );
    i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (u) => {
        delete i[u];
      }
    ), n.headers = L.concat(o, i);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(n) === !1 || (f = f && b.synchronous, l.unshift(b.fulfilled, b.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(b) {
      d.push(b.fulfilled, b.rejected);
    });
    let c, h = 0, E;
    if (!f) {
      const u = [Qe.bind(this), void 0];
      for (u.unshift(...l), u.push(...d), E = u.length, c = Promise.resolve(n); h < E; )
        c = c.then(u[h++], u[h++]);
      return c;
    }
    E = l.length;
    let T = n;
    for (; h < E; ) {
      const u = l[h++], b = l[h++];
      try {
        T = u(T);
      } catch (p) {
        b.call(this, p);
        break;
      }
    }
    try {
      c = Qe.call(this, T);
    } catch (u) {
      return Promise.reject(u);
    }
    for (h = 0, E = d.length; h < E; )
      c = c.then(d[h++], d[h++]);
    return c;
  }
  getUri(t) {
    t = V(this.defaults, t);
    const n = yt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return pt(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  J.prototype[t] = function(n, r) {
    return this.request(V(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, l) {
      return this.request(V(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  J.prototype[t] = n(), J.prototype[t + "Form"] = n(!0);
});
let cr = class Rt {
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
      const o = new Promise((l) => {
        r.subscribe(l), i = l;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, l) {
      r.reason || (r.reason = new Z(i, o, l), n(r.reason));
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
      token: new Rt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function ur(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function dr(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ke = {
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
Object.entries(ke).forEach(([e, t]) => {
  ke[t] = e;
});
function Ot(e) {
  const t = new J(e), n = tt(J.prototype.request, t);
  return a.extend(n, J.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ot(V(e, s));
  }, n;
}
const R = Ot(se);
R.Axios = J;
R.CanceledError = Z;
R.CancelToken = cr;
R.isCancel = bt;
R.VERSION = St;
R.toFormData = me;
R.AxiosError = g;
R.Cancel = R.CanceledError;
R.all = function(t) {
  return Promise.all(t);
};
R.spread = ur;
R.isAxiosError = dr;
R.mergeConfig = V;
R.AxiosHeaders = L;
R.formToJSON = (e) => mt(a.isHTMLForm(e) ? new FormData(e) : e);
R.getAdapter = Et.getAdapter;
R.HttpStatusCode = ke;
R.default = R;
const {
  Axios: Mr,
  AxiosError: qr,
  CanceledError: $r,
  isCancel: Hr,
  CancelToken: zr,
  VERSION: Jr,
  all: Vr,
  Cancel: Wr,
  isAxiosError: Kr,
  spread: Xr,
  toFormData: Gr,
  AxiosHeaders: Zr,
  HttpStatusCode: Qr,
  formToJSON: Yr,
  getAdapter: es,
  mergeConfig: ts
} = R, fr = { class: "bg-gray-50 dark:bg-[#0b1120] min-h-screen pb-20 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-blue-100 selection:text-blue-900" }, pr = { class: "sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-800/50 transition-all duration-300" }, hr = { class: "max-w-[1440px] mx-auto px-4 py-3 md:px-8 md:py-4 flex gap-4 items-center" }, mr = {
  class: "flex-1 relative group",
  role: "search"
}, br = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, gr = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, yr = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-[1440px] mx-auto px-4 md:px-8 my-8"
}, wr = {
  key: 1,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 max-w-[1440px] mx-auto px-4 md:px-8 my-8 list-none"
}, xr = ["onClick"], Er = { class: "p-2 md:p-2.5 pb-0" }, Sr = { class: "aspect-[4/5] relative bg-[#f4f6f8] dark:bg-slate-800 rounded-xl overflow-hidden" }, Rr = ["src", "alt"], Or = {
  key: 0,
  class: "absolute bottom-2 left-2 bg-red-500 text-white text-[10px] md:text-xs px-2 py-0.5 rounded-md font-bold shadow-sm"
}, Tr = { class: "p-3 md:p-4 flex flex-col flex-1 gap-1" }, kr = { class: "flex items-baseline gap-2 mb-1" }, Ar = { class: "text-lg md:text-xl font-black text-slate-900 dark:text-white leading-none" }, Cr = {
  key: 0,
  class: "text-xs text-slate-400 line-through decoration-slate-400/50"
}, _r = { class: "text-[11px] font-bold text-slate-400 uppercase tracking-wider" }, vr = { class: "text-[13px] leading-snug text-slate-700 dark:text-slate-300 font-medium line-clamp-2 min-h-[2.5em]" }, Nr = {
  key: 2,
  class: "flex flex-col items-center justify-center py-20 px-4"
}, Pr = {
  key: 0,
  class: "flex gap-2"
}, Lr = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=view_product", Fr = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", Se = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500", Ur = /* @__PURE__ */ et({
  __name: "productsearch",
  setup(e) {
    const t = Ut(), n = $(""), r = $([]), s = $(!1), i = $(!0), o = $(!1), l = $(1), f = $(!0), d = $(null);
    let c = null;
    const h = () => {
      const y = localStorage.getItem("theme");
      y ? s.value = y === "dark" : s.value = window.matchMedia("(prefers-color-scheme: dark)").matches, T();
    }, E = () => {
      s.value = !s.value, T(), localStorage.setItem("theme", s.value ? "dark" : "light");
    }, T = () => {
      s.value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, u = async () => {
      i.value = !0, r.value = [], l.value = 1, f.value = !0, await p(), i.value = !1;
    }, b = () => {
      n.value = "", document.getElementById("site-search")?.focus(), u();
    }, p = async () => {
      try {
        const y = n.value.trim() === "" ? "fashion" : n.value.toLowerCase(), m = await R.post(
          Lr,
          { slug: y, collection: "products" },
          { headers: { Authorization: `Bearer ${Fr}` } }
        );
        if (m.data.success && m.data.data.length > 0) {
          await new Promise((j) => setTimeout(j, 500));
          const x = m.data.data;
          r.value.push(...x), r.value.length >= 40 && (f.value = !1);
        } else
          f.value = !1;
      } catch (y) {
        console.error(y), f.value = !1;
      }
    }, S = () => {
      c = new IntersectionObserver(async (y) => {
        y[0].isIntersecting && f.value && !i.value && !o.value && (o.value = !0, l.value++, await p(), o.value = !1);
      }, {
        rootMargin: "200px"
      }), d.value && c.observe(d.value);
    }, C = (y) => {
      try {
        const x = JSON.parse(y.metadata);
        if (x.color?.[0]?.image?.[0]?.url && !x.color[0].image[0].url.includes("example"))
          return x.color[0].image[0].url;
      } catch {
      }
      const m = y.title ? y.title.toLowerCase() : "";
      return m.includes("dress") ? "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500" : m.includes("shirt") || m.includes("top") ? "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" : m.includes("shoe") || m.includes("sneaker") ? "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" : m.includes("bag") ? "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" : Se;
    }, O = (y) => {
      const m = y.target;
      m.src !== Se && (m.src = Se);
    }, k = (y) => {
      const m = y.variant_prices[0], x = y.variant_mrp[0];
      return x > m ? Math.round((x - m) / x * 100) : 0;
    }, _ = (y) => new Intl.NumberFormat("ru-RU").format(y), I = (y) => {
      t.push({ path: `/product/${y}` });
    }, v = () => {
      const y = document.activeElement, m = y.innerText;
      y.innerText = "Added ✓", y.classList.add("bg-green-600", "hover:bg-green-700"), setTimeout(() => {
        y.innerText = m, y.classList.remove("bg-green-600", "hover:bg-green-700");
      }, 1500);
    }, Q = (y) => {
      const m = y.currentTarget;
      m.classList.toggle("text-red-500"), m.classList.toggle("bg-red-50");
    };
    return At(() => {
      h(), u().then(() => {
        setTimeout(() => S(), 100);
      });
    }), Ct(() => {
      c && c.disconnect();
    }), (y, m) => (N(), F("div", fr, [
      w("header", pr, [
        w("div", hr, [
          w("div", mr, [
            m[2] || (m[2] = w("svg", {
              class: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors",
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              w("circle", {
                cx: "11",
                cy: "11",
                r: "8"
              }),
              w("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
              })
            ], -1)),
            _t(w("input", {
              id: "site-search",
              "onUpdate:modelValue": m[0] || (m[0] = (x) => n.value = x),
              onKeyup: Nt(u, ["enter"]),
              type: "text",
              placeholder: "Search premium brands, styles...",
              class: "w-full h-11 md:h-12 pl-12 pr-10 bg-gray-100 dark:bg-slate-800 border-2 border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 rounded-2xl text-[15px] outline-none transition-all duration-200 placeholder:text-slate-400 dark:text-white shadow-sm"
            }, null, 544), [
              [vt, n.value]
            ]),
            n.value ? (N(), F("button", {
              key: 0,
              class: "absolute right-3 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-slate-700 text-slate-500 hover:text-red-500 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors",
              onClick: b
            }, "✕")) : ie("", !0)
          ]),
          w("button", {
            class: "hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 active:scale-95 transition-all",
            onClick: u
          }, " SEARCH "),
          w("button", {
            onClick: E,
            class: "p-3 rounded-2xl bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors active:scale-95"
          }, [
            s.value ? (N(), F("svg", br, [...m[3] || (m[3] = [
              ye('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', 9)
            ])])) : (N(), F("svg", gr, [...m[4] || (m[4] = [
              w("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
            ])]))
          ])
        ])
      ]),
      i.value ? (N(), F("div", yr, [
        (N(), F(Ue, null, Be(10, (x) => w("div", {
          key: x,
          class: "bg-white dark:bg-[#1e293b] rounded-2xl p-3 shadow-sm border border-gray-100 dark:border-slate-800"
        }, [...m[5] || (m[5] = [
          ye('<div class="aspect-[4/5] bg-gray-200 dark:bg-slate-700 rounded-xl relative overflow-hidden mb-3"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div><div class="space-y-2"><div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/3"></div><div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full"></div><div class="h-8 bg-gray-200 dark:bg-slate-700 rounded-lg mt-2"></div></div>', 2)
        ])])), 64))
      ])) : r.value.length > 0 ? (N(), F("ul", wr, [
        (N(!0), F(Ue, null, Be(r.value, (x, j) => (N(), F("li", {
          key: x.document.id + j,
          class: "group bg-white dark:bg-[#1e293b] rounded-2xl flex flex-col relative cursor-pointer border border-transparent hover:border-blue-100 dark:hover:border-slate-600 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] dark:shadow-none dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300",
          onClick: (W) => I(x.document.slug)
        }, [
          w("div", Er, [
            w("div", Sr, [
              w("img", {
                src: C(x.document),
                loading: "lazy",
                alt: x.document.title,
                onError: O,
                class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply dark:mix-blend-normal"
              }, null, 40, Rr),
              k(x.document) > 0 ? (N(), F("span", Or, " -" + Y(k(x.document)) + "% ", 1)) : ie("", !0),
              w("button", {
                class: "absolute top-2 right-2 w-8 h-8 rounded-full bg-white/70 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-white transition-all scale-0 group-hover:scale-100",
                onClick: De(Q, ["stop"])
              }, [...m[6] || (m[6] = [
                w("svg", {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  w("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
                ], -1)
              ])])
            ])
          ]),
          w("div", Tr, [
            w("div", kr, [
              w("span", Ar, Y(_(x.document.variant_prices[0])) + " ₽ ", 1),
              x.document.variant_mrp[0] > x.document.variant_prices[0] ? (N(), F("span", Cr, Y(_(x.document.variant_mrp[0])), 1)) : ie("", !0)
            ]),
            m[8] || (m[8] = ye('<div class="flex items-center gap-2 mb-1.5"><span class="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-green-500"></span> Ozon Card </span><div class="flex items-center gap-1 text-[10px] text-slate-400"><span class="text-amber-400">★</span> 4.9 (128) </div></div>', 1)),
            w("div", _r, Y(x.document.brand), 1),
            w("h3", vr, Y(x.document.title), 1),
            w("button", {
              class: "mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group/btn",
              onClick: De(v, ["stop"])
            }, [...m[7] || (m[7] = [
              w("span", null, "Add to Cart", -1),
              w("svg", {
                class: "w-4 h-4 transition-transform group-hover/btn:translate-x-1",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                w("path", { d: "M5 12h14M12 5l7 7-7 7" })
              ], -1)
            ])])
          ])
        ], 8, xr))), 128))
      ])) : (N(), F("div", Nr, [
        m[9] || (m[9] = w("div", { class: "w-20 h-20 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-4" }, "🔍", -1)),
        m[10] || (m[10] = w("h3", { class: "text-xl font-bold text-slate-900 dark:text-white mb-2" }, "No results found", -1)),
        m[11] || (m[11] = w("p", { class: "text-slate-500 mb-6 text-center max-w-md" }, "We couldn't find anything matching your search. Try checking for typos or use broader keywords.", -1)),
        w("button", {
          class: "bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors",
          onClick: m[1] || (m[1] = (x) => {
            n.value = "puma", u();
          })
        }, "Clear Filters")
      ])),
      w("div", {
        ref_key: "sentinel",
        ref: d,
        class: "h-20 flex justify-center items-center w-full"
      }, [
        o.value ? (N(), F("div", Pr, [...m[12] || (m[12] = [
          w("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce" }, null, -1),
          w("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]" }, null, -1),
          w("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]" }, null, -1)
        ])])) : ie("", !0)
      ], 512)
    ]));
  }
}), Br = /* @__PURE__ */ et({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    return (t, n) => (N(), Pt(Ur, {
      __internal: {
        _p: e._p,
        _$p: e._$p,
        _$cb: e._$cb
      }
    }, null, 8, ["__internal"]));
  }
}), ns = async (e) => ({
  set: async (t, n) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const s = Lt(Br, {
      _p: e,
      _$p: t,
      _$cb: n
    }), i = e.f.name("vue-root"), o = {
      r: `<div id="${i}" style="width:100%; height:100%;"></div>`,
      style: "",
      evt: {
        change: () => {
          n?.change({ _$p: t });
        }
      }
    };
    return setTimeout(() => {
      const l = document.getElementById(i);
      l ? s.mount(l) : console.error(`Hydrator Error: Element #${i} not found.`);
    }, 0), o;
  }
});
export {
  ns as hydrator,
  ns as index
};
