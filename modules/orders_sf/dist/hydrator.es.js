import { r as N, w as qt, c as dt, o as x, a as It, b as pe, d, e as Ie, n as me, f as y, g as X, t as k, u as V, h as he, v as ut, T as Ht, i as ft, j as Vt, k as J, F as T, l as $, m as Oe, p as pt, q as mt, s as Pe, x as He, y as Ve, z as Jt } from "./runtime-dom.esm-bundler-PFVpN1vA.js";
function ht(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Wt } = Object.prototype, { getPrototypeOf: Ne } = Object, { iterator: we, toStringTag: gt } = Symbol, xe = /* @__PURE__ */ ((e) => (t) => {
  const n = Wt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), B = (e) => (e = e.toLowerCase(), (t) => xe(t) === e), be = (e) => (t) => typeof t === e, { isArray: G } = Array, Q = be("undefined");
function ne(e) {
  return e !== null && !Q(e) && e.constructor !== null && !Q(e.constructor) && A(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const wt = B("ArrayBuffer");
function Zt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && wt(e.buffer), t;
}
const Kt = be("string"), A = be("function"), xt = be("number"), re = (e) => e !== null && typeof e == "object", Xt = (e) => e === !0 || e === !1, de = (e) => {
  if (xe(e) !== "object")
    return !1;
  const t = Ne(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(gt in e) && !(we in e);
}, Qt = (e) => {
  if (!re(e) || ne(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Gt = B("Date"), Yt = B("File"), en = B("Blob"), tn = B("FileList"), nn = (e) => re(e) && A(e.pipe), rn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || A(e.append) && ((t = xe(e)) === "formdata" || // detect form-data instance
  t === "object" && A(e.toString) && e.toString() === "[object FormData]"));
}, sn = B("URLSearchParams"), [on, an, ln, cn] = ["ReadableStream", "Request", "Response", "Headers"].map(B), dn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function se(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), G(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (ne(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let l;
    for (r = 0; r < o; r++)
      l = i[r], t.call(null, e[l], l, e);
  }
}
function bt(e, t) {
  if (ne(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const I = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, yt = (e) => !Q(e) && e !== I;
function Ae() {
  const { caseless: e, skipUndefined: t } = yt(this) && this || {}, n = {}, r = (s, i) => {
    const o = e && bt(n, i) || i;
    de(n[o]) && de(s) ? n[o] = Ae(n[o], s) : de(s) ? n[o] = Ae({}, s) : G(s) ? n[o] = s.slice() : (!t || !Q(s)) && (n[o] = s);
  };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && se(arguments[s], r);
  return n;
}
const un = (e, t, n, { allOwnKeys: r } = {}) => (se(t, (s, i) => {
  n && A(s) ? e[i] = ht(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), fn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), pn = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, mn = (e, t, n, r) => {
  let s, i, o;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !l[o] && (t[o] = e[o], l[o] = !0);
    e = n !== !1 && Ne(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, hn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, gn = (e) => {
  if (!e) return null;
  if (G(e)) return e;
  let t = e.length;
  if (!xt(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, wn = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ne(Uint8Array)), xn = (e, t) => {
  const r = (e && e[we]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, bn = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, yn = B("HTMLFormElement"), kn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Je = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), vn = B("RegExp"), kt = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  se(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, _n = (e) => {
  kt(e, (t, n) => {
    if (A(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (A(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, En = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return G(e) ? r(e) : r(String(e).split(t)), n;
}, Sn = () => {
}, Rn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function On(e) {
  return !!(e && A(e.append) && e[gt] === "FormData" && e[we]);
}
const An = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (re(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (ne(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = G(r) ? [] : {};
        return se(r, (o, l) => {
          const f = n(o, s + 1);
          !Q(f) && (i[l] = f);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, Cn = B("AsyncFunction"), Tn = (e) => e && (re(e) || A(e)) && A(e.then) && A(e.catch), vt = ((e, t) => e ? setImmediate : t ? ((n, r) => (I.addEventListener("message", ({ source: s, data: i }) => {
  s === I && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), I.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  A(I.postMessage)
), zn = typeof queueMicrotask < "u" ? queueMicrotask.bind(I) : typeof process < "u" && process.nextTick || vt, Pn = (e) => e != null && A(e[we]), a = {
  isArray: G,
  isArrayBuffer: wt,
  isBuffer: ne,
  isFormData: rn,
  isArrayBufferView: Zt,
  isString: Kt,
  isNumber: xt,
  isBoolean: Xt,
  isObject: re,
  isPlainObject: de,
  isEmptyObject: Qt,
  isReadableStream: on,
  isRequest: an,
  isResponse: ln,
  isHeaders: cn,
  isUndefined: Q,
  isDate: Gt,
  isFile: Yt,
  isBlob: en,
  isRegExp: vn,
  isFunction: A,
  isStream: nn,
  isURLSearchParams: sn,
  isTypedArray: wn,
  isFileList: tn,
  forEach: se,
  merge: Ae,
  extend: un,
  trim: dn,
  stripBOM: fn,
  inherits: pn,
  toFlatObject: mn,
  kindOf: xe,
  kindOfTest: B,
  endsWith: hn,
  toArray: gn,
  forEachEntry: xn,
  matchAll: bn,
  isHTMLForm: yn,
  hasOwnProperty: Je,
  hasOwnProp: Je,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: kt,
  freezeMethods: _n,
  toObjectSet: En,
  toCamelCase: kn,
  noop: Sn,
  toFiniteNumber: Rn,
  findKey: bt,
  global: I,
  isContextDefined: yt,
  isSpecCompliantForm: On,
  toJSONObject: An,
  isAsyncFn: Cn,
  isThenable: Tn,
  setImmediate: vt,
  asap: zn,
  isIterable: Pn
};
function w(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(w, Error, {
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
const _t = w.prototype, Et = {};
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
  Et[e] = { value: e };
});
Object.defineProperties(w, Et);
Object.defineProperty(_t, "isAxiosError", { value: !0 });
w.from = (e, t, n, r, s, i) => {
  const o = Object.create(_t);
  a.toFlatObject(e, o, function(u) {
    return u !== Error.prototype;
  }, (c) => c !== "isAxiosError");
  const l = e && e.message ? e.message : "Error", f = t == null && e ? e.code : t;
  return w.call(o, l, f, n, r, s), e && o.cause == null && Object.defineProperty(o, "cause", { value: e, configurable: !0 }), o.name = e && e.name || "Error", i && Object.assign(o, i), o;
};
const Nn = null;
function Ce(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function St(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function We(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = St(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Ln(e) {
  return a.isArray(e) && !e.some(Ce);
}
const Bn = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ye(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, h) {
    return !a.isUndefined(h[g]);
  });
  const r = n.metaTokens, s = n.visitor || u, i = n.dots, o = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (a.isDate(p))
      return p.toISOString();
    if (a.isBoolean(p))
      return p.toString();
    if (!f && a.isBlob(p))
      throw new w("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, g, h) {
    let _ = p;
    if (p && !h && typeof p == "object") {
      if (a.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && Ln(p) || (a.isFileList(p) || a.endsWith(g, "[]")) && (_ = a.toArray(p)))
        return g = St(g), _.forEach(function(E, O) {
          !(a.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? We([g], O, i) : o === null ? g : g + "[]",
            c(E)
          );
        }), !1;
    }
    return Ce(p) ? !0 : (t.append(We(h, g, i), c(p)), !1);
  }
  const m = [], b = Object.assign(Bn, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Ce
  });
  function S(p, g) {
    if (!a.isUndefined(p)) {
      if (m.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      m.push(p), a.forEach(p, function(_, z) {
        (!(a.isUndefined(_) || _ === null) && s.call(
          t,
          _,
          a.isString(z) ? z.trim() : z,
          g,
          b
        )) === !0 && S(_, g ? g.concat(z) : [z]);
      }), m.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), t;
}
function Ze(e) {
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
function Le(e, t) {
  this._pairs = [], e && ye(e, this, t);
}
const Rt = Le.prototype;
Rt.append = function(t, n) {
  this._pairs.push([t, n]);
};
Rt.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ze);
  } : Ze;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Fn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ot(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Fn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = a.isURLSearchParams(t) ? t.toString() : new Le(t, n).toString(r), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Ke {
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
const At = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Un = typeof URLSearchParams < "u" ? URLSearchParams : Le, $n = typeof FormData < "u" ? FormData : null, jn = typeof Blob < "u" ? Blob : null, Dn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Un,
    FormData: $n,
    Blob: jn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Be = typeof window < "u" && typeof document < "u", Te = typeof navigator == "object" && navigator || void 0, Mn = Be && (!Te || ["ReactNative", "NativeScript", "NS"].indexOf(Te.product) < 0), qn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", In = Be && window.location.href || "http://localhost", Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Be,
  hasStandardBrowserEnv: Mn,
  hasStandardBrowserWebWorkerEnv: qn,
  navigator: Te,
  origin: In
}, Symbol.toStringTag, { value: "Module" })), R = {
  ...Hn,
  ...Dn
};
function Vn(e, t) {
  return ye(e, new R.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return R.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Jn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Wn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function Ct(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const l = Number.isFinite(+o), f = i >= n.length;
    return o = !o && a.isArray(s) ? s.length : o, f ? (a.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !l) : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && a.isArray(s[o]) && (s[o] = Wn(s[o])), !l);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(Jn(r), s, n, 0);
    }), n;
  }
  return null;
}
function Zn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const oe = {
  transitional: At,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = a.isObject(t);
    if (i && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Ct(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Vn(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ye(
          l ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), Zn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || oe.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (l) {
        if (o)
          throw l.name === "SyntaxError" ? w.from(l, w.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: R.classes.FormData,
    Blob: R.classes.Blob
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
  oe.headers[e] = {};
});
const Kn = a.toObjectSet([
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
]), Xn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && Kn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Xe = /* @__PURE__ */ Symbol("internals");
function te(e) {
  return e && String(e).trim().toLowerCase();
}
function ue(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(ue) : String(e);
}
function Qn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Gn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ee(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Yn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function er(e, t) {
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
let C = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(l, f, c) {
      const u = te(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const m = a.findKey(s, u);
      (!m || s[m] === void 0 || c === !0 || c === void 0 && s[m] !== !1) && (s[m || f] = ue(l));
    }
    const o = (l, f) => a.forEach(l, (c, u) => i(c, u, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (a.isString(t) && (t = t.trim()) && !Gn(t))
      o(Xn(t), n);
    else if (a.isObject(t) && a.isIterable(t)) {
      let l = {}, f, c;
      for (const u of t) {
        if (!a.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[c = u[0]] = (f = l[c]) ? a.isArray(f) ? [...f, u[1]] : [f, u[1]] : u[1];
      }
      o(l, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = te(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Qn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = te(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ee(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = te(o), o) {
        const l = a.findKey(r, o);
        l && (!n || Ee(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Ee(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, i) => {
      const o = a.findKey(r, i);
      if (o) {
        n[o] = ue(s), delete n[i];
        return;
      }
      const l = t ? Yn(i) : String(i).trim();
      l !== i && delete n[i], n[l] = ue(s), r[l] = !0;
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
    const r = (this[Xe] = this[Xe] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const l = te(o);
      r[l] || (er(s, o), r[l] = !0);
    }
    return a.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
C.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(C.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(C);
function Se(e, t) {
  const n = this || oe, r = t || n, s = C.from(r.headers);
  let i = r.data;
  return a.forEach(e, function(l) {
    i = l.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function Tt(e) {
  return !!(e && e.__CANCEL__);
}
function Y(e, t, n) {
  w.call(this, e ?? "canceled", w.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(Y, w, {
  __CANCEL__: !0
});
function zt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new w(
    "Request failed with status code " + n.status,
    [w.ERR_BAD_REQUEST, w.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function tr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function nr(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const c = Date.now(), u = r[i];
    o || (o = c), n[s] = f, r[s] = c;
    let m = i, b = 0;
    for (; m !== s; )
      b += n[m++], m = m % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), c - o < t)
      return;
    const S = u && c - u;
    return S ? Math.round(b * 1e3 / S) : void 0;
  };
}
function rr(e, t) {
  let n = 0, r = 1e3 / t, s, i;
  const o = (c, u = Date.now()) => {
    n = u, s = null, i && (clearTimeout(i), i = null), e(...c);
  };
  return [(...c) => {
    const u = Date.now(), m = u - n;
    m >= r ? o(c, u) : (s = c, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - m)));
  }, () => s && o(s)];
}
const ge = (e, t, n = 3) => {
  let r = 0;
  const s = nr(50, 250);
  return rr((i) => {
    const o = i.loaded, l = i.lengthComputable ? i.total : void 0, f = o - r, c = s(f), u = o <= l;
    r = o;
    const m = {
      loaded: o,
      total: l,
      progress: l ? o / l : void 0,
      bytes: f,
      rate: c || void 0,
      estimated: c && l && u ? (l - o) / c : void 0,
      event: i,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(m);
  }, n);
}, Qe = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Ge = (e) => (...t) => a.asap(() => e(...t)), sr = R.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, R.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(R.origin),
  R.navigator && /(msie|trident)/i.test(R.navigator.userAgent)
) : () => !0, or = R.hasStandardBrowserEnv ? (
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
function ir(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ar(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Pt(e, t, n) {
  let r = !ir(t);
  return e && (r || n == !1) ? ar(e, t) : t;
}
const Ye = (e) => e instanceof C ? { ...e } : e;
function W(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, m, b) {
    return a.isPlainObject(c) && a.isPlainObject(u) ? a.merge.call({ caseless: b }, c, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(c, u, m, b) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(c))
        return r(void 0, c, m, b);
    } else return r(c, u, m, b);
  }
  function i(c, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function o(c, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function l(c, u, m) {
    if (m in t)
      return r(c, u);
    if (m in e)
      return r(void 0, c);
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
    headers: (c, u, m) => s(Ye(c), Ye(u), m, !0)
  };
  return a.forEach(Object.keys({ ...e, ...t }), function(u) {
    const m = f[u] || s, b = m(e[u], t[u], u);
    a.isUndefined(b) && m !== l || (n[u] = b);
  }), n;
}
const Nt = (e) => {
  const t = W({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: l } = t;
  if (t.headers = o = C.from(o), t.url = Ot(Pt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && o.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  ), a.isFormData(n)) {
    if (R.hasStandardBrowserEnv || R.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (a.isFunction(n.getHeaders)) {
      const f = n.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(f).forEach(([u, m]) => {
        c.includes(u.toLowerCase()) && o.set(u, m);
      });
    }
  }
  if (R.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && sr(t.url))) {
    const f = s && i && or.read(i);
    f && o.set(s, f);
  }
  return t;
}, lr = typeof XMLHttpRequest < "u", cr = lr && function(e) {
  return new Promise(function(n, r) {
    const s = Nt(e);
    let i = s.data;
    const o = C.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: c } = s, u, m, b, S, p;
    function g() {
      S && S(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function _() {
      if (!h)
        return;
      const E = C.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), L = {
        data: !l || l === "text" || l === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: E,
        config: e,
        request: h
      };
      zt(function(P) {
        n(P), g();
      }, function(P) {
        r(P), g();
      }, L), h = null;
    }
    "onloadend" in h ? h.onloadend = _ : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, h.onabort = function() {
      h && (r(new w("Request aborted", w.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(O) {
      const L = O && O.message ? O.message : "Network Error", M = new w(L, w.ERR_NETWORK, e, h);
      M.event = O || null, r(M), h = null;
    }, h.ontimeout = function() {
      let O = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const L = s.transitional || At;
      s.timeoutErrorMessage && (O = s.timeoutErrorMessage), r(new w(
        O,
        L.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
        e,
        h
      )), h = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in h && a.forEach(o.toJSON(), function(O, L) {
      h.setRequestHeader(L, O);
    }), a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), l && l !== "json" && (h.responseType = s.responseType), c && ([b, p] = ge(c, !0), h.addEventListener("progress", b)), f && h.upload && ([m, S] = ge(f), h.upload.addEventListener("progress", m), h.upload.addEventListener("loadend", S)), (s.cancelToken || s.signal) && (u = (E) => {
      h && (r(!E || E.type ? new Y(null, e, h) : E), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const z = tr(s.url);
    if (z && R.protocols.indexOf(z) === -1) {
      r(new w("Unsupported protocol " + z + ":", w.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(i || null);
  });
}, dr = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const i = function(c) {
      if (!s) {
        s = !0, l();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof w ? u : new Y(u instanceof Error ? u.message : u));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new w(`timeout ${t} of ms exceeded`, w.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(i) : c.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", i));
    const { signal: f } = r;
    return f.unsubscribe = () => a.asap(l), f;
  }
}, ur = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, fr = async function* (e, t) {
  for await (const n of pr(e))
    yield* ur(n, t);
}, pr = async function* (e) {
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
}, et = (e, t, n, r) => {
  const s = fr(e, t);
  let i = 0, o, l = (f) => {
    o || (o = !0, r && r(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: c, value: u } = await s.next();
        if (c) {
          l(), f.close();
          return;
        }
        let m = u.byteLength;
        if (n) {
          let b = i += m;
          n(b);
        }
        f.enqueue(new Uint8Array(u));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(f) {
      return l(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, tt = 64 * 1024, { isFunction: ce } = a, mr = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(a.global), {
  ReadableStream: nt,
  TextEncoder: rt
} = a.global, st = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, hr = (e) => {
  e = a.merge.call({
    skipUndefined: !0
  }, mr, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? ce(t) : typeof fetch == "function", i = ce(n), o = ce(r);
  if (!s)
    return !1;
  const l = s && ce(nt), f = s && (typeof rt == "function" ? /* @__PURE__ */ ((p) => (g) => p.encode(g))(new rt()) : async (p) => new Uint8Array(await new n(p).arrayBuffer())), c = i && l && st(() => {
    let p = !1;
    const g = new n(R.origin, {
      body: new nt(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return p && !g;
  }), u = o && l && st(() => a.isReadableStream(new r("").body)), m = {
    stream: u && ((p) => p.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !m[p] && (m[p] = (g, h) => {
      let _ = g && g[p];
      if (_)
        return _.call(g);
      throw new w(`Response type '${p}' is not supported`, w.ERR_NOT_SUPPORT, h);
    });
  });
  const b = async (p) => {
    if (p == null)
      return 0;
    if (a.isBlob(p))
      return p.size;
    if (a.isSpecCompliantForm(p))
      return (await new n(R.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(p) || a.isArrayBuffer(p))
      return p.byteLength;
    if (a.isURLSearchParams(p) && (p = p + ""), a.isString(p))
      return (await f(p)).byteLength;
  }, S = async (p, g) => {
    const h = a.toFiniteNumber(p.getContentLength());
    return h ?? b(g);
  };
  return async (p) => {
    let {
      url: g,
      method: h,
      data: _,
      signal: z,
      cancelToken: E,
      timeout: O,
      onDownloadProgress: L,
      onUploadProgress: M,
      responseType: P,
      headers: ve,
      withCredentials: ie = "same-origin",
      fetchOptions: Ue
    } = Nt(p), $e = t || fetch;
    P = P ? (P + "").toLowerCase() : "text";
    let ae = dr([z, E && E.toAbortSignal()], O), ee = null;
    const q = ae && ae.unsubscribe && (() => {
      ae.unsubscribe();
    });
    let je;
    try {
      if (M && c && h !== "get" && h !== "head" && (je = await S(ve, _)) !== 0) {
        let D = new n(g, {
          method: "POST",
          body: _,
          duplex: "half"
        }), K;
        if (a.isFormData(_) && (K = D.headers.get("content-type")) && ve.setContentType(K), D.body) {
          const [_e, le] = Qe(
            je,
            ge(Ge(M))
          );
          _ = et(D.body, tt, _e, le);
        }
      }
      a.isString(ie) || (ie = ie ? "include" : "omit");
      const F = i && "credentials" in n.prototype, De = {
        ...Ue,
        signal: ae,
        method: h.toUpperCase(),
        headers: ve.normalize().toJSON(),
        body: _,
        duplex: "half",
        credentials: F ? ie : void 0
      };
      ee = i && new n(g, De);
      let j = await (i ? $e(ee, Ue) : $e(g, De));
      const Me = u && (P === "stream" || P === "response");
      if (u && (L || Me && q)) {
        const D = {};
        ["status", "statusText", "headers"].forEach((qe) => {
          D[qe] = j[qe];
        });
        const K = a.toFiniteNumber(j.headers.get("content-length")), [_e, le] = L && Qe(
          K,
          ge(Ge(L), !0)
        ) || [];
        j = new r(
          et(j.body, tt, _e, () => {
            le && le(), q && q();
          }),
          D
        );
      }
      P = P || "text";
      let Mt = await m[a.findKey(m, P) || "text"](j, p);
      return !Me && q && q(), await new Promise((D, K) => {
        zt(D, K, {
          data: Mt,
          headers: C.from(j.headers),
          status: j.status,
          statusText: j.statusText,
          config: p,
          request: ee
        });
      });
    } catch (F) {
      throw q && q(), F && F.name === "TypeError" && /Load failed|fetch/i.test(F.message) ? Object.assign(
        new w("Network Error", w.ERR_NETWORK, p, ee),
        {
          cause: F.cause || F
        }
      ) : w.from(F, F && F.code, p, ee);
    }
  };
}, gr = /* @__PURE__ */ new Map(), Lt = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, i = [
    r,
    s,
    n
  ];
  let o = i.length, l = o, f, c, u = gr;
  for (; l--; )
    f = i[l], c = u.get(f), c === void 0 && u.set(f, c = l ? /* @__PURE__ */ new Map() : hr(t)), u = c;
  return c;
};
Lt();
const Fe = {
  http: Nn,
  xhr: cr,
  fetch: {
    get: Lt
  }
};
a.forEach(Fe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ot = (e) => `- ${e}`, wr = (e) => a.isFunction(e) || e === null || e === !1;
function xr(e, t) {
  e = a.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const i = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let l;
    if (s = r, !wr(r) && (s = Fe[(l = String(r)).toLowerCase()], s === void 0))
      throw new w(`Unknown adapter '${l}'`);
    if (s && (a.isFunction(s) || (s = s.get(t))))
      break;
    i[l || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(i).map(
      ([f, c]) => `adapter ${f} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? o.length > 1 ? `since :
` + o.map(ot).join(`
`) : " " + ot(o[0]) : "as no adapter specified";
    throw new w(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Bt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: xr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Fe
};
function Re(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Y(null, e);
}
function it(e) {
  return Re(e), e.headers = C.from(e.headers), e.data = Se.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Bt.getAdapter(e.adapter || oe.adapter, e)(e).then(function(r) {
    return Re(e), r.data = Se.call(
      e,
      e.transformResponse,
      r
    ), r.headers = C.from(r.headers), r;
  }, function(r) {
    return Tt(r) || (Re(e), r && r.response && (r.response.data = Se.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = C.from(r.response.headers))), Promise.reject(r);
  });
}
const Ft = "1.13.2", ke = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ke[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const at = {};
ke.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + Ft + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, l) => {
    if (t === !1)
      throw new w(
        s(o, " has been removed" + (n ? " in " + n : "")),
        w.ERR_DEPRECATED
      );
    return n && !at[o] && (at[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, l) : !0;
  };
};
ke.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function br(e, t, n) {
  if (typeof e != "object")
    throw new w("options must be an object", w.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const l = e[i], f = l === void 0 || o(l, i, e);
      if (f !== !0)
        throw new w("option " + i + " must be " + f, w.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new w("Unknown option " + i, w.ERR_BAD_OPTION);
  }
}
const fe = {
  assertOptions: br,
  validators: ke
}, U = fe.validators;
let H = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ke(),
      response: new Ke()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = W(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && fe.assertOptions(r, {
      silentJSONParsing: U.transitional(U.boolean),
      forcedJSONParsing: U.transitional(U.boolean),
      clarifyTimeoutError: U.transitional(U.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : fe.assertOptions(s, {
      encode: U.function,
      serialize: U.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), fe.assertOptions(n, {
      baseUrl: U.spelling("baseURL"),
      withXsrfToken: U.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && a.merge(
      i.common,
      i[n.method]
    );
    i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), n.headers = C.concat(o, i);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (f = f && g.synchronous, l.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let u, m = 0, b;
    if (!f) {
      const p = [it.bind(this), void 0];
      for (p.unshift(...l), p.push(...c), b = p.length, u = Promise.resolve(n); m < b; )
        u = u.then(p[m++], p[m++]);
      return u;
    }
    b = l.length;
    let S = n;
    for (; m < b; ) {
      const p = l[m++], g = l[m++];
      try {
        S = p(S);
      } catch (h) {
        g.call(this, h);
        break;
      }
    }
    try {
      u = it.call(this, S);
    } catch (p) {
      return Promise.reject(p);
    }
    for (m = 0, b = c.length; m < b; )
      u = u.then(c[m++], c[m++]);
    return u;
  }
  getUri(t) {
    t = W(this.defaults, t);
    const n = Pt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Ot(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  H.prototype[t] = function(n, r) {
    return this.request(W(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, l) {
      return this.request(W(l || {}, {
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
let yr = class Ut {
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
      r.reason || (r.reason = new Y(i, o, l), n(r.reason));
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
      token: new Ut(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function kr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function vr(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ze = {
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
Object.entries(ze).forEach(([e, t]) => {
  ze[t] = e;
});
function $t(e) {
  const t = new H(e), n = ht(H.prototype.request, t);
  return a.extend(n, H.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return $t(W(e, s));
  }, n;
}
const v = $t(oe);
v.Axios = H;
v.CanceledError = Y;
v.CancelToken = yr;
v.isCancel = Tt;
v.VERSION = Ft;
v.toFormData = ye;
v.AxiosError = w;
v.Cancel = v.CanceledError;
v.all = function(t) {
  return Promise.all(t);
};
v.spread = kr;
v.isAxiosError = vr;
v.mergeConfig = W;
v.AxiosHeaders = C;
v.formToJSON = (e) => Ct(a.isHTMLForm(e) ? new FormData(e) : e);
v.getAdapter = Bt.getAdapter;
v.HttpStatusCode = ze;
v.default = v;
const {
  Axios: Xs,
  AxiosError: Qs,
  CanceledError: Gs,
  isCancel: Ys,
  CancelToken: eo,
  VERSION: to,
  all: no,
  Cancel: ro,
  isAxiosError: so,
  spread: oo,
  toFormData: io,
  AxiosHeaders: ao,
  HttpStatusCode: lo,
  formToJSON: co,
  getAdapter: uo,
  mergeConfig: fo
} = v;
function _r() {
  const e = N(!1), t = N(null);
  return { post: async (r, s, i = null) => {
    e.value = !0, t.value = null;
    try {
      const { data: o } = await v.post(r, s, {
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
const Er = N(), jt = () => ({ _$p: Er });
function Sr(e, t) {
  return t.split(".").reduce((n, r) => n?.[r], e);
}
function Rr(e, t) {
  const { open: n, close: r } = t, s = [];
  let i = 0;
  for (; i < e.length; ) {
    const o = e.indexOf(n, i);
    if (o === -1) {
      s.push({ type: "text", value: e.slice(i) });
      break;
    }
    o > i && s.push({ type: "text", value: e.slice(i, o) });
    const l = e.indexOf(r, o + n.length);
    if (l === -1)
      throw new Error(`Unclosed template placeholder starting at ${o}`);
    const f = e.slice(o + n.length, l).trim(), [c, u] = f.split("=");
    s.push({ type: "param", value: c, defaultValue: u }), i = l + r.length;
  }
  return s;
}
function Or(e, t, n) {
  const r = /* @__PURE__ */ new Set(), s = e.map((i) => {
    if (i.type === "text") return i.value;
    const o = Sr(t, i.value);
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
function Ar(e, t) {
  const n = {
    open: t?.open,
    close: t?.close,
    encode: t?.encode ?? !1,
    strict: t?.strict ?? !1
  }, r = Rr(e, n);
  return (s) => Or(r, s, n);
}
const lt = N([]), ct = N(null), Dt = N(localStorage.getItem("page_state") || "ORDER_PAGE");
qt(Dt, (e) => localStorage.setItem("page_state", e));
const Z = () => {
  const { _$p: e } = jt(), { post: t, error: n } = _r(), s = Ar(e.value?.data.curr.data.api.token, { open: "<", close: ">" })({
    localStorage: {
      token: localStorage.getItem("token") || ""
    }
  }).replace("Bearer ", ""), i = e.value?.data.curr.data.api.url, o = s;
  return { getAllOrder: async () => {
    const c = await t(
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
    if (!c?.success) return console.log("api error", n.value);
    lt.value = c.orders;
  }, order: lt, getPaymentStatus: async (c) => {
    const u = await t(
      i,
      {
        operation: "check_payment_status",
        user_id: "user_1",
        order_id: c
      },
      o
    );
    ct.value = u?.success ? u.payment_status : "not paid";
  }, payment_status: ct, page_state: Dt };
}, Cr = {
  key: 0,
  class: "pt-3 pb-2"
}, Tr = {
  key: 1,
  class: "p-4"
}, zr = { class: "flex justify-between items-center mb-4" }, Pr = { class: "font-bold text-gray-900 dark:text-white text-base" }, Nr = { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5" }, Lr = { class: "bg-white dark:bg-zinc-800 rounded-lg p-4 mb-3 border border-gray-200 dark:border-zinc-600" }, Br = { class: "space-y-2.5" }, Fr = { class: "flex justify-between text-sm" }, Ur = { class: "text-gray-900 dark:text-white" }, $r = { class: "flex justify-between text-sm" }, jr = { class: "text-gray-900 dark:text-white" }, Dr = { class: "pt-3 border-t border-gray-300 dark:border-zinc-600" }, Mr = { class: "flex justify-between items-center" }, qr = { class: "text-lg font-bold text-green-600 dark:text-green-400" }, Ir = { class: "flex gap-2 mb-4" }, Hr = { class: "flex-1 bg-white dark:bg-zinc-800 rounded-lg p-3 border border-gray-200 dark:border-zinc-600" }, Vr = { class: "flex items-center gap-2 mb-1.5" }, Jr = { class: "text-sm font-semibold text-gray-900 dark:text-white" }, Wr = { class: "flex-1 bg-white dark:bg-zinc-800 rounded-lg p-3 border border-gray-200 dark:border-zinc-600" }, Zr = { class: "text-sm font-semibold text-gray-900 dark:text-white capitalize" }, Kr = { class: "bg-white dark:bg-zinc-800 rounded-lg p-3 border border-gray-200 dark:border-zinc-600" }, Xr = { class: "flex items-start gap-2" }, Qr = { class: "text-sm text-gray-900 dark:text-white font-medium" }, Gr = { class: "text-xs text-gray-600 dark:text-gray-400 mt-1" }, Yr = {
  __name: "BottomDrawer",
  props: {
    order: { type: Object, required: !1, default: null },
    // use Object, not Array
    open: { type: Boolean, required: !0 },
    isMobile: { type: Boolean, required: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const { payment_status: n } = Z(), r = t, s = () => r("update:open", !1);
    return (i, o) => (x(), dt(Ht, {
      name: e.isMobile ? "slide-up" : "fade"
    }, {
      default: It(() => [
        pe(d("div", {
          onClick: Ie(s, ["self"]),
          class: "fixed h-screen w-screen bottom-0 z-50 flex items-end md:items-center justify-center md:bg-black/30"
        }, [
          d("div", {
            class: me(["bg-gray-100 dark:bg-zinc-700 w-full shadow-lg border-t border-gray-300 dark:border-zinc-600", e.isMobile ? "rounded-t-xl" : "rounded-xl max-w-sm mx-4"]),
            onClick: o[0] || (o[0] = Ie(() => {
            }, ["stop"]))
          }, [
            e.isMobile ? (x(), y("div", Cr, [...o[1] || (o[1] = [
              d("div", { class: "w-16 h-1 bg-gray-400 dark:bg-zinc-500 rounded-full mx-auto" }, null, -1)
            ])])) : X("", !0),
            e.order ? (x(), y("div", Tr, [
              d("div", zr, [
                d("div", null, [
                  d("h3", Pr, "Order id: " + k(e.order.order_id), 1),
                  d("p", Nr, k(e.order.items.length) + " items", 1)
                ]),
                d("button", {
                  onClick: s,
                  class: "hidden md:block text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 p-1"
                }, [...o[2] || (o[2] = [
                  d("svg", {
                    class: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    d("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ])])
              ]),
              d("div", Lr, [
                d("div", Br, [
                  d("div", Fr, [
                    o[3] || (o[3] = d("span", { class: "text-gray-600 dark:text-gray-400" }, "Subtotal", -1)),
                    d("span", Ur, k(e.order.pricing.total_payable_price) + " " + k(e.order.pricing.currency), 1)
                  ]),
                  d("div", $r, [
                    o[4] || (o[4] = d("span", { class: "text-gray-600 dark:text-gray-400" }, "Tax", -1)),
                    d("span", jr, k(e.order.pricing.tax_amount) + " " + k(e.order.pricing.currency), 1)
                  ]),
                  o[6] || (o[6] = d("div", { class: "flex justify-between text-sm" }, [
                    d("span", { class: "text-gray-600 dark:text-gray-400" }, "Delivery"),
                    d("span", { class: "text-green-600 dark:text-green-400" }, "FREE")
                  ], -1)),
                  d("div", Dr, [
                    d("div", Mr, [
                      o[5] || (o[5] = d("span", { class: "font-semibold text-gray-900 dark:text-white" }, "Total", -1)),
                      d("span", qr, k(e.order.pricing.final_amount) + " " + k(e.order.pricing.currency), 1)
                    ])
                  ])
                ])
              ]),
              d("div", Ir, [
                d("div", Hr, [
                  d("div", Vr, [
                    d("div", {
                      class: me([
                        "w-2 h-2 rounded-full",
                        V(n) === "paid" ? "bg-green-500" : "bg-yellow-500"
                      ])
                    }, null, 2),
                    o[7] || (o[7] = d("span", { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, "Payment", -1))
                  ]),
                  d("p", Jr, k(V(n) || "Processing"), 1)
                ]),
                d("div", Wr, [
                  o[8] || (o[8] = d("div", { class: "flex items-center gap-2 mb-1.5" }, [
                    d("div", { class: "w-2 h-2 rounded-full bg-blue-500" }),
                    d("span", { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, "Delivery")
                  ], -1)),
                  d("p", Zr, k(e.order.items[0].order_status), 1)
                ])
              ]),
              d("div", Kr, [
                d("div", Xr, [
                  o[11] || (o[11] = d("svg", {
                    class: "w-4 h-4 text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    d("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    }),
                    d("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    })
                  ], -1)),
                  d("div", null, [
                    o[10] || (o[10] = d("p", { class: "text-xs font-medium text-gray-500 dark:text-gray-400 mb-1" }, "Shipping Address", -1)),
                    d("p", Qr, k(e.order.shipping_address.name), 1),
                    d("p", Gr, [
                      he(k(e.order.shipping_address.street) + k(e.order.shipping_address.landmark ? ", " + e.order.shipping_address.landmark : ""), 1),
                      o[9] || (o[9] = d("br", null, null, -1)),
                      he(" " + k(e.order.shipping_address.city) + ", " + k(e.order.shipping_address.state) + " " + k(e.order.shipping_address.pincode), 1)
                    ])
                  ])
                ])
              ])
            ])) : X("", !0)
          ], 2)
        ], 512), [
          [ut, e.open]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
}, es = { class: "mb-2" }, ts = { class: "text-sm text-gray-500 dark:text-zinc-400 leading-none" }, ns = { class: "text-sm text-gray-500 dark:text-zinc-400 leading-none" }, rs = { class: "flex flex-row flex-nowrap gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide" }, ss = { class: "" }, os = { class: "font-medium text-xs dark:text-white" }, is = { class: "text-xs truncate dark:text-gray-200" }, as = { class: "text-xs text-violet-500" }, ls = { class: "flex items-center justify-between border-t border-gray-500 dark:border-zinc-700 pt-6 px-1" }, cs = ["onClick"], ds = { class: "text-sm dark:text-gray-200" }, us = {
  __name: "OrderCard",
  props: { order: { type: Array, required: !0 } },
  setup(e) {
    const { getPaymentStatus: t } = Z(), n = N(!1), r = N(null), s = N(window.innerWidth < 768), i = () => s.value = window.innerWidth < 768;
    ft(() => window.addEventListener("resize", i)), Vt(() => window.removeEventListener("resize", i));
    const o = (f) => {
      r.value = f, n.value = !0;
    }, l = () => alert("It will open chatbot");
    return (f, c) => (x(), y(T, null, [
      (x(!0), y(T, null, $(e.order, (u) => (x(), y("div", {
        key: u.order_id,
        class: "bg-white dark:bg-zinc-800 flex flex-col gap-3 rounded-2xl p-4"
      }, [
        d("div", es, [
          c[1] || (c[1] = d("p", { class: "text-xl text-green-500 font-semibold mb-1" }, "Ready for Pickup", -1)),
          d("p", ts, "order_id: " + k(u.order_id), 1),
          d("p", ns, "pickup point • " + k(u.items.length) + " items", 1)
        ]),
        d("div", rs, [
          (x(!0), y(T, null, $(u.items, (m) => (x(), y("div", {
            key: m.order_item_id,
            class: "relative flex flex-col gap-2 snap-start"
          }, [
            c[2] || (c[2] = d("img", {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ9R610Iu99YAHXjw6QLrvHwX42iWY_NwAA&s",
              class: "w-40 h-48 object-cover bg-gray-100 dark:bg-zinc-800 rounded-xl"
            }, null, -1)),
            c[3] || (c[3] = d("span", { class: "absolute bottom-16 left-2 bg-white dark:bg-zinc-700 dark:text-white rounded-lg px-2 py-1 text-xs font-medium" }, " UNPAID ", -1)),
            d("div", ss, [
              d("p", os, k(m.payable_price) + " " + k(u.pricing.currency), 1),
              d("p", is, k(m.name), 1),
              d("p", as, k(m.order_status) + " >", 1)
            ])
          ]))), 128))
        ]),
        d("div", ls, [
          d("p", {
            onClick: (m) => {
              o(u), V(t)(u.order_id);
            },
            class: "cursor-pointer font-medium dark:text-white"
          }, k(u.pricing.final_amount) + " " + k(u.pricing.currency), 9, cs),
          d("p", ds, "Pay for " + k(u.items.length) + " items", 1)
        ]),
        d("button", {
          onClick: l,
          class: "bg-gray-100 dark:bg-zinc-700 text-violet-500 font-medium rounded-2xl p-4 text-center"
        }, " Ask about order ")
      ]))), 128)),
      J(Yr, {
        open: n.value,
        "onUpdate:open": c[0] || (c[0] = (u) => n.value = u),
        order: r.value,
        isMobile: s.value
      }, null, 8, ["open", "order", "isMobile"])
    ], 64));
  }
}, fs = "/qr_black.png", ps = "/qr_white.png", ms = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, hs = {}, gs = { class: "md:w-[50vw] bg-white dark:bg-zinc-700 flex md:flex-row flex-col items-center gap-4 rounded-2xl p-6 shadow-lg" };
function ws(e, t) {
  return x(), y("div", gs, [...t[0] || (t[0] = [
    Oe('<div class="flex-1 w-full bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 text-center mb-2"><p class="text-xs text-zinc-500 dark:text-zinc-400 mb-2"> Show the QR code or tell the code at the pickup point to pick up your order </p><div class="text-2xl font-bold tracking-widest text-violet-600 dark:text-violet-400"> 354955 </div></div><div class="md:hidden flex items-center w-full my-2"><div class="flex-grow border-t border-zinc-300 dark:border-zinc-600"></div><span class="px-4 text-sm text-zinc-500 dark:text-zinc-400 font-medium">OR</span><div class="flex-grow border-t border-zinc-300 dark:border-zinc-600"></div></div><div class="text-center p-4"><p class="text-sm text-zinc-600 dark:text-zinc-400 mb-3"> Show QR to pickup piont </p><div class="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-inner"><img src="' + fs + '" class="block dark:hidden md:w-40 md:h-40" alt="QR Code for pickup"><img src="' + ps + '" class="hidden dark:block md:w-40 md:h-40" alt="QR Code for pickup"></div></div>', 3)
  ])]);
}
const xs = /* @__PURE__ */ ms(hs, [["render", ws]]), bs = { class: "flex flex-1 flex-col gap-3" }, ys = { class: "bg-white dark:bg-zinc-800 flex items-center gap-2 md:rounded-2xl rounded-b-2xl p-4" }, ks = { class: "w-full md:max-w-sm flex items-center gap-2 bg-gray-100 dark:bg-zinc-700 rounded-2xl p-4" }, vs = {
  __name: "OrderLeft",
  setup(e) {
    const { order: t, page_state: n } = Z(), r = N(""), s = mt(() => {
      const o = r.value.trim().toLowerCase();
      return o ? t.value.map((l) => {
        const f = l.items.filter(
          (c) => c.name?.toLowerCase().includes(o) || c.reference_data?.product_data?.brand?.toLowerCase().includes(o) || String(l.order_id) === o
        );
        return f.length ? { ...l, items: f } : null;
      }).filter(Boolean) : t.value;
    }), i = N(!1);
    return (o, l) => (x(), y("div", bs, [
      d("div", ys, [
        d("div", ks, [
          l[4] || (l[4] = d("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-6 text-zinc-900 dark:text-zinc-100"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            })
          ], -1)),
          pe(d("input", {
            "onUpdate:modelValue": l[0] || (l[0] = (f) => r.value = f),
            type: "text",
            placeholder: "Name, Brand, Order Id",
            class: "bg-transparent outline-none focus:outline-none focus:ring-0 border-0 text-zinc-900 dark:text-zinc-100 placeholder:text-gray-500 dark:placeholder:text-zinc-400"
          }, null, 512), [
            [pt, r.value]
          ])
        ])
      ]),
      d("div", {
        onClick: l[1] || (l[1] = (f) => i.value = !0),
        class: "bg-white dark:bg-zinc-800 flex items-center gap-2 rounded-2xl p-4"
      }, [...l[5] || (l[5] = [
        Oe('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 md:size-6 text-zinc-900 dark:text-zinc-100"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"></path></svg><p class="text-xs text-zinc-900 dark:text-zinc-100"> Show the QR code or tell the code <mark class="bg-transparent text-violet-500 font-medium">354955</mark> at the pickup point to pick up your order </p>', 2)
      ])]),
      d("div", {
        onClick: l[2] || (l[2] = (f) => n.value = "PURCHASED_PAGE"),
        class: "bg-white dark:bg-zinc-800 flex items-center justify-between gap-2 rounded-2xl px-4 py-6 md:py-4"
      }, [...l[6] || (l[6] = [
        Oe('<div class="flex items-center gap-2 text-zinc-900 dark:text-zinc-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg><p>Purchased</p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-zinc-900 dark:text-zinc-100"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>', 2)
      ])]),
      (x(!0), y(T, null, $(s.value, (f) => (x(), dt(us, {
        key: f.order_id,
        order: [f]
      }, null, 8, ["order"]))), 128)),
      pe(d("div", {
        onClick: l[3] || (l[3] = (f) => i.value = !1),
        class: "fixed bg-black/20 h-screen w-screen bottom-0 right-0 z-50 flex items-end md:justify-end md:p-4"
      }, [
        J(xs)
      ], 512), [
        [ut, i.value]
      ])
    ]));
  }
}, _s = { class: "md:w-[35vw] w-full self-start bg-white dark:bg-zinc-800 rounded-2xl p-4" }, Es = { class: "w-40 flex flex-col justify-between" }, Ss = { class: "dark:text-gray-200" }, Rs = { class: "flex gap-1 mb-1" }, Os = {
  key: 0,
  class: "text-sm text-gray-500 dark:text-gray-300"
}, As = {
  __name: "OrderRight",
  setup(e) {
    const { order: t } = Z();
    return (n, r) => (x(), y("div", _s, [
      r[3] || (r[3] = d("div", { class: "mb-6" }, [
        d("p", { class: "font-medium dark:text-white" }, "Share your experience"),
        d("p", { class: "text-xs text-gray-500 dark:text-gray-200" }, "Help others make the right choice")
      ], -1)),
      (x(!0), y(T, null, $(V(t), (s) => (x(), y("div", {
        key: s.order_id
      }, [
        (x(!0), y(T, null, $(s.items.filter((i) => i.order_item_id === 100), (i) => (x(), y("div", {
          key: i.order_item_id,
          class: "flex gap-2 mb-2"
        }, [
          r[2] || (r[2] = d("img", {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ9R610Iu99YAHXjw6QLrvHwX42iWY_NwAA&s",
            class: "w-40 h-48 object-cover rounded-xl bg-red-100"
          }, null, -1)),
          d("div", Es, [
            d("div", null, [
              d("p", Ss, k(i.name), 1),
              r[0] || (r[0] = d("p", { class: "text-xs text-violet-500" }, "Delivered at 27 Dec 2025>", -1))
            ]),
            d("div", Rs, [
              (x(), y(T, null, $(5, (o) => d("svg", {
                key: o,
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                class: me(["size-5", o <= 4 ? "fill-yellow-400" : "fill-gray-300"])
              }, [...r[1] || (r[1] = [
                d("path", { d: "M11.48 3.5a.56.56 0 0 1 1.04 0l2.13 5.11a.56.56 0 0 0 .47.35l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 0 0-.18.56l1.28 5.38a.56.56 0 0 1-.84.61L12 17.65a.56.56 0 0 0-.58 0l-4.73 2.89a.56.56 0 0 1-.84-.61l1.28-5.38a.56.56 0 0 0-.18-.56L2.74 10.4a.56.56 0 0 1 .32-.99l5.52-.44a.56.56 0 0 0 .47-.35L11.48 3.5Z" }, null, -1)
              ])], 2)), 64))
            ])
          ])
        ]))), 128))
      ]))), 128)),
      V(t).some((s) => s.items.some((i) => i.order_item_id === 100)) ? X("", !0) : (x(), y("p", Os, " No items delivered yet "))
    ]));
  }
}, Cs = { class: "flex flex-col bg-[#f0f2f5] dark:bg-zinc-900 md:px-6 min-h-screen" }, Ts = { class: "flex flex-col md:flex-row gap-6" }, zs = /* @__PURE__ */ Pe({
  __name: "Order",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    return (t, n) => (x(), y("div", Cs, [
      n[0] || (n[0] = d("div", { class: "flex items-center bg-white dark:bg-zinc-800 md:dark:bg-transparent md:bg-transparent md:pb-10 pt-2" }, [
        d("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "md:hidden ml-2 size-6 text-zinc-900 dark:text-zinc-100"
        }, [
          d("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M15.75 19.5 8.25 12l7.5-7.5"
          })
        ]),
        d("h1", { class: "text-lg md:text-3xl md:font-semibold text-zinc-900 dark:text-zinc-100" }, "Orders")
      ], -1)),
      d("div", Ts, [
        J(vs),
        J(As)
      ])
    ]));
  }
}), Ps = { class: "flex flex-1 flex-col gap-3" }, Ns = { class: "bg-white dark:bg-zinc-800 flex items-center gap-2 md:rounded-2xl rounded-b-2xl p-4" }, Ls = { class: "w-full md:max-w-sm flex items-center gap-2 bg-gray-100 dark:bg-zinc-700 rounded-2xl p-4" }, Bs = { class: "grid grid-cols-2 md:grid-cols-4 gap-3" }, Fs = { class: "flex flex-col gap-2" }, Us = { class: "dark:text-gray-200" }, $s = { class: "flex gap-1" }, js = {
  key: 0,
  class: "p-4 bg-white dark:bg-zinc-800 rounded-xl text-sm text-gray-500 dark:text-gray-300"
}, Ds = {
  __name: "PurchasedLeft",
  setup(e) {
    const { order: t } = Z(), n = () => alert("Redirect to storefront page"), r = N(""), s = mt(() => {
      const f = r.value.trim().toLowerCase();
      return f ? t.value.map((c) => {
        const u = c.items.filter(
          (m) => m.name?.toLowerCase().includes(f) || m.reference_data?.product_data?.brand?.toLowerCase().includes(f) || String(c.order_id) === f
        );
        return u.length ? { ...c, items: u } : null;
      }).filter(Boolean) : t.value;
    }), i = () => alert("comming soon"), o = () => alert("comming soon"), l = () => alert("comming soon");
    return (f, c) => (x(), y(T, null, [
      d("div", Ps, [
        d("div", Ns, [
          d("div", Ls, [
            c[1] || (c[1] = d("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: "size-6 text-zinc-900 dark:text-zinc-100"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              })
            ], -1)),
            pe(d("input", {
              "onUpdate:modelValue": c[0] || (c[0] = (u) => r.value = u),
              type: "text",
              placeholder: "Name, Brand, Order Id",
              class: "bg-transparent outline-none focus:outline-none focus:ring-0 border-0 text-zinc-900 dark:text-zinc-100 placeholder:text-gray-500 dark:placeholder:text-zinc-400"
            }, null, 512), [
              [pt, r.value]
            ])
          ])
        ]),
        d("div", Bs, [
          (x(!0), y(T, null, $(s.value, (u) => (x(), y(T, {
            key: u.order_id
          }, [
            (x(!0), y(T, null, $(u.items, (m) => (x(), y("div", {
              key: m.order_item_id,
              class: "flex flex-col gap-2 bg-white dark:bg-zinc-800 p-4 rounded-xl"
            }, [
              c[4] || (c[4] = d("img", {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ9R610Iu99YAHXjw6QLrvHwX42iWY_NwAA&s",
                class: "w-full h-48 object-cover rounded-xl"
              }, null, -1)),
              d("div", Fs, [
                d("p", Us, k(m.name), 1),
                c[3] || (c[3] = d("p", { class: "text-xs text-violet-500" }, " Delivered at 27 Dec 2025 ", -1)),
                d("div", $s, [
                  (x(), y(T, null, $(5, (b) => d("svg", {
                    key: b,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    class: me(["size-5", b <= 4 ? "fill-yellow-400" : "fill-gray-300"])
                  }, [...c[2] || (c[2] = [
                    d("path", { d: "M11.48 3.5a.56.56 0 0 1 1.04 0l2.13 5.11a.56.56 0 0 0 .47.35l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 0 0-.18.56l1.28 5.38a.56.56 0 0 1-.84.61L12 17.65a.56.56 0 0 0-.58 0l-4.73 2.89a.56.56 0 0 1-.84-.61l1.28-5.38a.56.56 0 0 0-.18-.56L2.74 10.4a.56.56 0 0 1 .32-.99l5.52-.44a.56.56 0 0 0 .47-.35L11.48 3.5Z" }, null, -1)
                  ])], 2)), 64))
                ]),
                d("button", {
                  onClick: n,
                  class: "bg-violet-500 p-3 text-white text-center rounded-xl"
                }, " Similar items ")
              ])
            ]))), 128))
          ], 64))), 128))
        ]),
        s.value.length ? X("", !0) : (x(), y("p", js, " No delivered items found "))
      ]),
      d("div", { class: "fixed bottom-4 left-4 flex items-center gap-3" }, [
        d("div", {
          onClick: i,
          class: "p-2 py-1 rounded-lg bg-gray-100 dark:bg-zinc-800 dark:text-white border-2 border-white dark:border-zinc-700"
        }, [...c[5] || (c[5] = [
          d("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "text-violet-500 size-6"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            })
          ], -1)
        ])]),
        d("div", {
          onClick: o,
          class: "flex items-center gap-1 p-2 py-1 rounded-lg bg-gray-100 dark:bg-zinc-800 dark:text-white border-2 border-white dark:border-zinc-700"
        }, [...c[6] || (c[6] = [
          he(" Status ", -1),
          d("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-4"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "m19.5 8.25-7.5 7.5-7.5-7.5"
            })
          ], -1)
        ])]),
        d("div", {
          onClick: l,
          class: "flex items-center gap-1 p-2 py-1 rounded-lg bg-gray-100 dark:bg-zinc-800 dark:text-white border-2 border-white dark:border-zinc-700"
        }, [...c[7] || (c[7] = [
          he(" All time ", -1),
          d("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-4"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "m19.5 8.25-7.5 7.5-7.5-7.5"
            })
          ], -1)
        ])])
      ])
    ], 64));
  }
}, Ms = { class: "flex flex-col bg-[#f0f2f5] dark:bg-zinc-900 md:px-6 min-h-screen" }, qs = { class: "flex flex-col md:flex-row gap-6" }, Is = /* @__PURE__ */ Pe({
  __name: "Purchased",
  setup(e) {
    const { page_state: t } = Z();
    return (n, r) => (x(), y("div", Ms, [
      d("div", {
        onClick: r[0] || (r[0] = (s) => t.value = "ORDER_PAGE"),
        class: "flex items-center bg-white dark:bg-zinc-800 md:dark:bg-transparent md:bg-transparent md:pb-10 pt-2"
      }, [...r[1] || (r[1] = [
        d("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "md:hidden ml-2 size-6 text-zinc-900 dark:text-zinc-100"
        }, [
          d("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M15.75 19.5 8.25 12l7.5-7.5"
          })
        ], -1),
        d("h1", { class: "text-lg md:text-3xl md:font-semibold text-zinc-900 dark:text-zinc-100" }, "Purchased", -1)
      ])]),
      d("div", qs, [
        J(Ds)
      ])
    ]));
  }
}), Hs = { key: 0 }, Vs = { key: 1 }, Js = /* @__PURE__ */ Pe({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    (async () => e._p.f.listen("msg", async (i) => {
      i.type === "theme:change" && (i.custom?.theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
    }))();
    const { _$p: t } = jt();
    t.value = e._$p;
    const { getAllOrder: n, order: r, page_state: s } = Z();
    return ft(async () => {
      await n(), console.log("orders :", r.value);
    }), (i, o) => (x(), y(T, null, [
      V(s) === "ORDER_PAGE" ? (x(), y("div", Hs, [
        J(zs, He(Ve({
          __p: e._$p,
          _p: e._p
        })), null, 16)
      ])) : X("", !0),
      V(s) === "PURCHASED_PAGE" ? (x(), y("div", Vs, [
        J(Is, He(Ve({
          __p: e._$p,
          _p: e._p
        })), null, 16)
      ])) : X("", !0)
    ], 64));
  }
}), po = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const r = Jt(Js, {
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
  po as hydrator,
  po as index
};
