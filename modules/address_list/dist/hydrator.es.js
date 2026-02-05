import { r as V, a as kt, d as et, o as j, c as v, F as Nt, b as Ft, u as I, e as tt, w as Pt, f as w, g as Y, t as L, n as Ut, h as Lt, i as Dt, j as Bt, k as jt, l as vt } from "./runtime-dom.esm-bundler-DSnzm-ld.js";
function nt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: It } = Object.prototype, { getPrototypeOf: Te } = Object, { iterator: de, toStringTag: rt } = Symbol, fe = /* @__PURE__ */ ((e) => (t) => {
  const n = It.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), F = (e) => (e = e.toLowerCase(), (t) => fe(t) === e), pe = (e) => (t) => typeof t === e, { isArray: K } = Array, W = pe("undefined");
function Q(e) {
  return e !== null && !W(e) && e.constructor !== null && !W(e.constructor) && x(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const st = F("ArrayBuffer");
function $t(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && st(e.buffer), t;
}
const qt = pe("string"), x = pe("function"), ot = pe("number"), ee = (e) => e !== null && typeof e == "object", Mt = (e) => e === !0 || e === !1, ae = (e) => {
  if (fe(e) !== "object")
    return !1;
  const t = Te(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(rt in e) && !(de in e);
}, zt = (e) => {
  if (!ee(e) || Q(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Ht = F("Date"), Jt = F("File"), Vt = F("Blob"), Wt = F("FileList"), Kt = (e) => ee(e) && x(e.pipe), Xt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || x(e.append) && ((t = fe(e)) === "formdata" || // detect form-data instance
  t === "object" && x(e.toString) && e.toString() === "[object FormData]"));
}, Gt = F("URLSearchParams"), [Zt, Yt, Qt, en] = ["ReadableStream", "Request", "Response", "Headers"].map(F), tn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function te(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), K(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Q(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let c;
    for (r = 0; r < o; r++)
      c = i[r], t.call(null, e[c], c, e);
  }
}
function it(e, t) {
  if (Q(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const M = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, at = (e) => !W(e) && e !== M;
function Oe() {
  const { caseless: e, skipUndefined: t } = at(this) && this || {}, n = {}, r = (s, i) => {
    const o = e && it(n, i) || i;
    ae(n[o]) && ae(s) ? n[o] = Oe(n[o], s) : ae(s) ? n[o] = Oe({}, s) : K(s) ? n[o] = s.slice() : (!t || !W(s)) && (n[o] = s);
  };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && te(arguments[s], r);
  return n;
}
const nn = (e, t, n, { allOwnKeys: r } = {}) => (te(t, (s, i) => {
  n && x(s) ? e[i] = nt(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), rn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), sn = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, on = (e, t, n, r) => {
  let s, i, o;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !c[o] && (t[o] = e[o], c[o] = !0);
    e = n !== !1 && Te(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, an = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, cn = (e) => {
  if (!e) return null;
  if (K(e)) return e;
  let t = e.length;
  if (!ot(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ln = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Te(Uint8Array)), un = (e, t) => {
  const r = (e && e[de]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, dn = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, fn = F("HTMLFormElement"), pn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), je = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), hn = F("RegExp"), ct = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  te(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, mn = (e) => {
  ct(e, (t, n) => {
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
}, yn = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return K(e) ? r(e) : r(String(e).split(t)), n;
}, bn = () => {
}, wn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function gn(e) {
  return !!(e && x(e.append) && e[rt] === "FormData" && e[de]);
}
const En = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (ee(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Q(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = K(r) ? [] : {};
        return te(r, (o, c) => {
          const d = n(o, s + 1);
          !W(d) && (i[c] = d);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, Sn = F("AsyncFunction"), Rn = (e) => e && (ee(e) || x(e)) && x(e.then) && x(e.catch), lt = ((e, t) => e ? setImmediate : t ? ((n, r) => (M.addEventListener("message", ({ source: s, data: i }) => {
  s === M && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), M.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  x(M.postMessage)
), On = typeof queueMicrotask < "u" ? queueMicrotask.bind(M) : typeof process < "u" && process.nextTick || lt, _n = (e) => e != null && x(e[de]), a = {
  isArray: K,
  isArrayBuffer: st,
  isBuffer: Q,
  isFormData: Xt,
  isArrayBufferView: $t,
  isString: qt,
  isNumber: ot,
  isBoolean: Mt,
  isObject: ee,
  isPlainObject: ae,
  isEmptyObject: zt,
  isReadableStream: Zt,
  isRequest: Yt,
  isResponse: Qt,
  isHeaders: en,
  isUndefined: W,
  isDate: Ht,
  isFile: Jt,
  isBlob: Vt,
  isRegExp: hn,
  isFunction: x,
  isStream: Kt,
  isURLSearchParams: Gt,
  isTypedArray: ln,
  isFileList: Wt,
  forEach: te,
  merge: Oe,
  extend: nn,
  trim: tn,
  stripBOM: rn,
  inherits: sn,
  toFlatObject: on,
  kindOf: fe,
  kindOfTest: F,
  endsWith: an,
  toArray: cn,
  forEachEntry: un,
  matchAll: dn,
  isHTMLForm: fn,
  hasOwnProperty: je,
  hasOwnProp: je,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ct,
  freezeMethods: mn,
  toObjectSet: yn,
  toCamelCase: pn,
  noop: bn,
  toFiniteNumber: wn,
  findKey: it,
  global: M,
  isContextDefined: at,
  isSpecCompliantForm: gn,
  toJSONObject: En,
  isAsyncFn: Sn,
  isThenable: Rn,
  setImmediate: lt,
  asap: On,
  isIterable: _n
};
function y(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(y, Error, {
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
const ut = y.prototype, dt = {};
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
  dt[e] = { value: e };
});
Object.defineProperties(y, dt);
Object.defineProperty(ut, "isAxiosError", { value: !0 });
y.from = (e, t, n, r, s, i) => {
  const o = Object.create(ut);
  a.toFlatObject(e, o, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError");
  const c = e && e.message ? e.message : "Error", d = t == null && e ? e.code : t;
  return y.call(o, c, d, n, r, s), e && o.cause == null && Object.defineProperty(o, "cause", { value: e, configurable: !0 }), o.name = e && e.name || "Error", i && Object.assign(o, i), o;
};
const An = null;
function _e(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function ft(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ve(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = ft(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function xn(e) {
  return a.isArray(e) && !e.some(_e);
}
const Tn = a.toFlatObject(a, {}, null, function(t) {
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
  const r = n.metaTokens, s = n.visitor || u, i = n.dots, o = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(f) {
    if (f === null) return "";
    if (a.isDate(f))
      return f.toISOString();
    if (a.isBoolean(f))
      return f.toString();
    if (!d && a.isBlob(f))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? d && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function u(f, m, p) {
    let E = f;
    if (f && !p && typeof f == "object") {
      if (a.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && xn(f) || (a.isFileList(f) || a.endsWith(m, "[]")) && (E = a.toArray(f)))
        return m = ft(m), E.forEach(function(S, A) {
          !(a.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? ve([m], A, i) : o === null ? m : m + "[]",
            l(S)
          );
        }), !1;
    }
    return _e(f) ? !0 : (t.append(ve(p, m, i), l(f)), !1);
  }
  const h = [], b = Object.assign(Tn, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: _e
  });
  function R(f, m) {
    if (!a.isUndefined(f)) {
      if (h.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      h.push(f), a.forEach(f, function(E, C) {
        (!(a.isUndefined(E) || E === null) && s.call(
          t,
          E,
          a.isString(C) ? C.trim() : C,
          m,
          b
        )) === !0 && R(E, m ? m.concat(C) : [C]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return R(e), t;
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
function Cn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ht(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Cn;
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
class $e {
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
const mt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, kn = typeof URLSearchParams < "u" ? URLSearchParams : Ce, Nn = typeof FormData < "u" ? FormData : null, Fn = typeof Blob < "u" ? Blob : null, Pn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: kn,
    FormData: Nn,
    Blob: Fn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ke = typeof window < "u" && typeof document < "u", Ae = typeof navigator == "object" && navigator || void 0, Un = ke && (!Ae || ["ReactNative", "NativeScript", "NS"].indexOf(Ae.product) < 0), Ln = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Dn = ke && window.location.href || "http://localhost", Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ke,
  hasStandardBrowserEnv: Un,
  hasStandardBrowserWebWorkerEnv: Ln,
  navigator: Ae,
  origin: Dn
}, Symbol.toStringTag, { value: "Module" })), O = {
  ...Bn,
  ...Pn
};
function jn(e, t) {
  return he(e, new O.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function vn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function In(e) {
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
    const c = Number.isFinite(+o), d = i >= n.length;
    return o = !o && a.isArray(s) ? s.length : o, d ? (a.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !c) : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && a.isArray(s[o]) && (s[o] = In(s[o])), !c);
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
const ne = {
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
        return jn(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return he(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), $n(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ne.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
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
  ne.headers[e] = {};
});
const qn = a.toObjectSet([
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
]), Mn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && qn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, qe = /* @__PURE__ */ Symbol("internals");
function Z(e) {
  return e && String(e).trim().toLowerCase();
}
function ce(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(ce) : String(e);
}
function zn(e) {
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
function Jn(e) {
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
    function i(c, d, l) {
      const u = Z(d);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, u);
      (!h || s[h] === void 0 || l === !0 || l === void 0 && s[h] !== !1) && (s[h || d] = ce(c));
    }
    const o = (c, d) => a.forEach(c, (l, u) => i(l, u, d));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (a.isString(t) && (t = t.trim()) && !Hn(t))
      o(Mn(t), n);
    else if (a.isObject(t) && a.isIterable(t)) {
      let c = {}, d, l;
      for (const u of t) {
        if (!a.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        c[l = u[0]] = (d = c[l]) ? a.isArray(d) ? [...d, u[1]] : [d, u[1]] : u[1];
      }
      o(c, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Z(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return zn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Z(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || we(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = Z(o), o) {
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
      const c = t ? Jn(i) : String(i).trim();
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
    const r = (this[qe] = this[qe] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const c = Z(o);
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
  const n = this || ne, r = t || n, s = T.from(r.headers);
  let i = r.data;
  return a.forEach(e, function(c) {
    i = c.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function bt(e) {
  return !!(e && e.__CANCEL__);
}
function X(e, t, n) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(X, y, {
  __CANCEL__: !0
});
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
function Wn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Kn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const l = Date.now(), u = r[i];
    o || (o = l), n[s] = d, r[s] = l;
    let h = i, b = 0;
    for (; h !== s; )
      b += n[h++], h = h % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), l - o < t)
      return;
    const R = u && l - u;
    return R ? Math.round(b * 1e3 / R) : void 0;
  };
}
function Xn(e, t) {
  let n = 0, r = 1e3 / t, s, i;
  const o = (l, u = Date.now()) => {
    n = u, s = null, i && (clearTimeout(i), i = null), e(...l);
  };
  return [(...l) => {
    const u = Date.now(), h = u - n;
    h >= r ? o(l, u) : (s = l, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - h)));
  }, () => s && o(s)];
}
const ue = (e, t, n = 3) => {
  let r = 0;
  const s = Kn(50, 250);
  return Xn((i) => {
    const o = i.loaded, c = i.lengthComputable ? i.total : void 0, d = o - r, l = s(d), u = o <= c;
    r = o;
    const h = {
      loaded: o,
      total: c,
      progress: c ? o / c : void 0,
      bytes: d,
      rate: l || void 0,
      estimated: l && c && u ? (c - o) / l : void 0,
      event: i,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, Me = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, ze = (e) => (...t) => a.asap(() => e(...t)), Gn = O.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, O.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(O.origin),
  O.navigator && /(msie|trident)/i.test(O.navigator.userAgent)
) : () => !0, Zn = O.hasStandardBrowserEnv ? (
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
function Yn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Qn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function gt(e, t, n) {
  let r = !Yn(t);
  return e && (r || n == !1) ? Qn(e, t) : t;
}
const He = (e) => e instanceof T ? { ...e } : e;
function H(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, h, b) {
    return a.isPlainObject(l) && a.isPlainObject(u) ? a.merge.call({ caseless: b }, l, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(l, u, h, b) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l))
        return r(void 0, l, h, b);
    } else return r(l, u, h, b);
  }
  function i(l, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function o(l, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function c(l, u, h) {
    if (h in t)
      return r(l, u);
    if (h in e)
      return r(void 0, l);
  }
  const d = {
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
    headers: (l, u, h) => s(He(l), He(u), h, !0)
  };
  return a.forEach(Object.keys({ ...e, ...t }), function(u) {
    const h = d[u] || s, b = h(e[u], t[u], u);
    a.isUndefined(b) && h !== c || (n[u] = b);
  }), n;
}
const Et = (e) => {
  const t = H({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: c } = t;
  if (t.headers = o = T.from(o), t.url = ht(gt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && o.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  ), a.isFormData(n)) {
    if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (a.isFunction(n.getHeaders)) {
      const d = n.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(d).forEach(([u, h]) => {
        l.includes(u.toLowerCase()) && o.set(u, h);
      });
    }
  }
  if (O.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && Gn(t.url))) {
    const d = s && i && Zn.read(i);
    d && o.set(s, d);
  }
  return t;
}, er = typeof XMLHttpRequest < "u", tr = er && function(e) {
  return new Promise(function(n, r) {
    const s = Et(e);
    let i = s.data;
    const o = T.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: l } = s, u, h, b, R, f;
    function m() {
      R && R(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function E() {
      if (!p)
        return;
      const S = T.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), N = {
        data: !c || c === "text" || c === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: S,
        config: e,
        request: p
      };
      wt(function(k) {
        n(k), m();
      }, function(k) {
        r(k), m();
      }, N), p = null;
    }
    "onloadend" in p ? p.onloadend = E : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, p.onabort = function() {
      p && (r(new y("Request aborted", y.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function(A) {
      const N = A && A.message ? A.message : "Network Error", $ = new y(N, y.ERR_NETWORK, e, p);
      $.event = A || null, r($), p = null;
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
    }), a.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), c && c !== "json" && (p.responseType = s.responseType), l && ([b, f] = ue(l, !0), p.addEventListener("progress", b)), d && p.upload && ([h, R] = ue(d), p.upload.addEventListener("progress", h), p.upload.addEventListener("loadend", R)), (s.cancelToken || s.signal) && (u = (S) => {
      p && (r(!S || S.type ? new X(null, e, p) : S), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const C = Wn(s.url);
    if (C && O.protocols.indexOf(C) === -1) {
      r(new y("Unsupported protocol " + C + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, nr = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const i = function(l) {
      if (!s) {
        s = !0, c();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof y ? u : new X(u instanceof Error ? u.message : u));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: d } = r;
    return d.unsubscribe = () => a.asap(c), d;
  }
}, rr = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, sr = async function* (e, t) {
  for await (const n of or(e))
    yield* rr(n, t);
}, or = async function* (e) {
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
  const s = sr(e, t);
  let i = 0, o, c = (d) => {
    o || (o = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: l, value: u } = await s.next();
        if (l) {
          c(), d.close();
          return;
        }
        let h = u.byteLength;
        if (n) {
          let b = i += h;
          n(b);
        }
        d.enqueue(new Uint8Array(u));
      } catch (l) {
        throw c(l), l;
      }
    },
    cancel(d) {
      return c(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ve = 64 * 1024, { isFunction: ie } = a, ir = (({ Request: e, Response: t }) => ({
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
}, ar = (e) => {
  e = a.merge.call({
    skipUndefined: !0
  }, ir, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? ie(t) : typeof fetch == "function", i = ie(n), o = ie(r);
  if (!s)
    return !1;
  const c = s && ie(We), d = s && (typeof Ke == "function" ? /* @__PURE__ */ ((f) => (m) => f.encode(m))(new Ke()) : async (f) => new Uint8Array(await new n(f).arrayBuffer())), l = i && c && Xe(() => {
    let f = !1;
    const m = new n(O.origin, {
      body: new We(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !m;
  }), u = o && c && Xe(() => a.isReadableStream(new r("").body)), h = {
    stream: u && ((f) => f.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !h[f] && (h[f] = (m, p) => {
      let E = m && m[f];
      if (E)
        return E.call(m);
      throw new y(`Response type '${f}' is not supported`, y.ERR_NOT_SUPPORT, p);
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
  }, R = async (f, m) => {
    const p = a.toFiniteNumber(f.getContentLength());
    return p ?? b(m);
  };
  return async (f) => {
    let {
      url: m,
      method: p,
      data: E,
      signal: C,
      cancelToken: S,
      timeout: A,
      onDownloadProgress: N,
      onUploadProgress: $,
      responseType: k,
      headers: ye,
      withCredentials: re = "same-origin",
      fetchOptions: Fe
    } = Et(f), Pe = t || fetch;
    k = k ? (k + "").toLowerCase() : "text";
    let se = nr([C, S && S.toAbortSignal()], A), G = null;
    const q = se && se.unsubscribe && (() => {
      se.unsubscribe();
    });
    let Ue;
    try {
      if ($ && l && p !== "get" && p !== "head" && (Ue = await R(ye, E)) !== 0) {
        let B = new n(m, {
          method: "POST",
          body: E,
          duplex: "half"
        }), J;
        if (a.isFormData(E) && (J = B.headers.get("content-type")) && ye.setContentType(J), B.body) {
          const [be, oe] = Me(
            Ue,
            ue(ze($))
          );
          E = Je(B.body, Ve, be, oe);
        }
      }
      a.isString(re) || (re = re ? "include" : "omit");
      const P = i && "credentials" in n.prototype, Le = {
        ...Fe,
        signal: se,
        method: p.toUpperCase(),
        headers: ye.normalize().toJSON(),
        body: E,
        duplex: "half",
        credentials: P ? re : void 0
      };
      G = i && new n(m, Le);
      let D = await (i ? Pe(G, Fe) : Pe(m, Le));
      const De = u && (k === "stream" || k === "response");
      if (u && (N || De && q)) {
        const B = {};
        ["status", "statusText", "headers"].forEach((Be) => {
          B[Be] = D[Be];
        });
        const J = a.toFiniteNumber(D.headers.get("content-length")), [be, oe] = N && Me(
          J,
          ue(ze(N), !0)
        ) || [];
        D = new r(
          Je(D.body, Ve, be, () => {
            oe && oe(), q && q();
          }),
          B
        );
      }
      k = k || "text";
      let Ct = await h[a.findKey(h, k) || "text"](D, f);
      return !De && q && q(), await new Promise((B, J) => {
        wt(B, J, {
          data: Ct,
          headers: T.from(D.headers),
          status: D.status,
          statusText: D.statusText,
          config: f,
          request: G
        });
      });
    } catch (P) {
      throw q && q(), P && P.name === "TypeError" && /Load failed|fetch/i.test(P.message) ? Object.assign(
        new y("Network Error", y.ERR_NETWORK, f, G),
        {
          cause: P.cause || P
        }
      ) : y.from(P, P && P.code, f, G);
    }
  };
}, cr = /* @__PURE__ */ new Map(), St = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, i = [
    r,
    s,
    n
  ];
  let o = i.length, c = o, d, l, u = cr;
  for (; c--; )
    d = i[c], l = u.get(d), l === void 0 && u.set(d, l = c ? /* @__PURE__ */ new Map() : ar(t)), u = l;
  return l;
};
St();
const Ne = {
  http: An,
  xhr: tr,
  fetch: {
    get: St
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
const Ge = (e) => `- ${e}`, lr = (e) => a.isFunction(e) || e === null || e === !1;
function ur(e, t) {
  e = a.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const i = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let c;
    if (s = r, !lr(r) && (s = Ne[(c = String(r)).toLowerCase()], s === void 0))
      throw new y(`Unknown adapter '${c}'`);
    if (s && (a.isFunction(s) || (s = s.get(t))))
      break;
    i[c || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(i).map(
      ([d, l]) => `adapter ${d} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let c = n ? o.length > 1 ? `since :
` + o.map(Ge).join(`
`) : " " + Ge(o[0]) : "as no adapter specified";
    throw new y(
      "There is no suitable adapter to dispatch the request " + c,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Rt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: ur,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ne
};
function Ee(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new X(null, e);
}
function Ze(e) {
  return Ee(e), e.headers = T.from(e.headers), e.data = ge.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Rt.getAdapter(e.adapter || ne.adapter, e)(e).then(function(r) {
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
const Ot = "1.13.2", me = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  me[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ye = {};
me.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + Ot + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
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
function dr(e, t, n) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const c = e[i], d = c === void 0 || o(c, i, e);
      if (d !== !0)
        throw new y("option " + i + " must be " + d, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new y("Unknown option " + i, y.ERR_BAD_OPTION);
  }
}
const le = {
  assertOptions: dr,
  validators: me
}, U = le.validators;
let z = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new $e(),
      response: new $e()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = H(this.defaults, n);
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
      (f) => {
        delete i[f];
      }
    ), n.headers = T.concat(o, i);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (d = d && m.synchronous, c.unshift(m.fulfilled, m.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let u, h = 0, b;
    if (!d) {
      const f = [Ze.bind(this), void 0];
      for (f.unshift(...c), f.push(...l), b = f.length, u = Promise.resolve(n); h < b; )
        u = u.then(f[h++], f[h++]);
      return u;
    }
    b = c.length;
    let R = n;
    for (; h < b; ) {
      const f = c[h++], m = c[h++];
      try {
        R = f(R);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      u = Ze.call(this, R);
    } catch (f) {
      return Promise.reject(f);
    }
    for (h = 0, b = l.length; h < b; )
      u = u.then(l[h++], l[h++]);
    return u;
  }
  getUri(t) {
    t = H(this.defaults, t);
    const n = gt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return ht(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  z.prototype[t] = function(n, r) {
    return this.request(H(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, c) {
      return this.request(H(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  z.prototype[t] = n(), z.prototype[t + "Form"] = n(!0);
});
let fr = class _t {
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
      r.reason || (r.reason = new X(i, o, c), n(r.reason));
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
      token: new _t(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function pr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function hr(e) {
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
  const t = new z(e), n = nt(z.prototype.request, t);
  return a.extend(n, z.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return At(H(e, s));
  }, n;
}
const g = At(ne);
g.Axios = z;
g.CanceledError = X;
g.CancelToken = fr;
g.isCancel = bt;
g.VERSION = Ot;
g.toFormData = he;
g.AxiosError = y;
g.Cancel = g.CanceledError;
g.all = function(t) {
  return Promise.all(t);
};
g.spread = pr;
g.isAxiosError = hr;
g.mergeConfig = H;
g.AxiosHeaders = T;
g.formToJSON = (e) => yt(a.isHTMLForm(e) ? new FormData(e) : e);
g.getAdapter = Rt.getAdapter;
g.HttpStatusCode = xe;
g.default = g;
const {
  Axios: zr,
  AxiosError: Hr,
  CanceledError: Jr,
  isCancel: Vr,
  CancelToken: Wr,
  VERSION: Kr,
  all: Xr,
  Cancel: Gr,
  isAxiosError: Zr,
  spread: Yr,
  toFormData: Qr,
  AxiosHeaders: es,
  HttpStatusCode: ts,
  formToJSON: ns,
  getAdapter: rs,
  mergeConfig: ss
} = g;
function mr() {
  const e = V(!1), t = V(null);
  return { post: async (r, s, i = null) => {
    e.value = !0, t.value = null;
    try {
      const { data: o } = await g.post(r, s, {
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
const Qe = V([]), Se = V(null), Re = V(!1), yr = V("create"), _ = kt({
  name: "",
  phone_number: "",
  street: "",
  landmark: "",
  city: "",
  state: "",
  pincode: "",
  address_type: ""
}), xt = () => {
  const { post: e, error: t } = mr(), n = "https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management", r = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", s = async () => {
    const d = await e(
      n,
      {
        operation: "get_address",
        user_id: "user_1",
        page: 1,
        limit: 100,
        search: ""
      },
      r
    );
    if (!d?.success) return console.log("api error", t.value);
    Qe.value = d.data.slice().reverse();
  };
  return { addresses: Qe, getAddress: s, createAddress: async () => {
    if (console.log("create address run", _), !(await e(
      n,
      {
        operation: "add_address",
        user_id: "user_1",
        name: _.name,
        phone_number: _.phone_number,
        street: _.street,
        city: _.city,
        state: _.state,
        pincode: _.pincode,
        landmark: _.landmark,
        address_type: _.address_type,
        country_code: "IN",
        is_default: !0
      },
      r
    ))?.success) return console.log("api error", t.value);
    await s(), Se.value = null, Re.value = !1, Object.keys(_).forEach((l) => _[l] = "");
  }, updateAddress: async (d) => {
    const l = Object.fromEntries(
      Object.entries(_).filter(([h, b]) => b !== "" && b !== null)
    );
    if (!(await e(n, {
      operation: "update_address",
      user_id: "user_1",
      address_id: d,
      ...l
    }, r))?.success) return console.log("api error", t.value);
    await s(), Se.value = null, Re.value = !1, Object.keys(_).forEach((h) => _[h] = "");
  }, removeAddress: async (d) => {
    if (!(await e(
      n,
      {
        operation: "remove_address",
        user_id: "user_1",
        address_id: d
      },
      r
    ))?.success) return console.log("api error", t.value);
    await s();
  }, selectedAddress: Se, showForm: Re, formMode: yr, form: _ };
};
function br(e, t) {
  return t.split(".").reduce((n, r) => n?.[r], e);
}
function wr(e, t) {
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
    const d = e.slice(o + n.length, c).trim(), [l, u] = d.split("=");
    s.push({ type: "param", value: l, defaultValue: u }), i = c + r.length;
  }
  return s;
}
function gr(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  return e.map((i) => {
    if (i.type === "text") return i.value;
    const o = br(t, i.value);
    return r.add(i.value.split(".")[0]), o === void 0 || o === "" ? i.defaultValue !== void 0 ? i.defaultValue : "" : String(o);
  }).join("");
}
function Tt(e, t) {
  const n = {
    open: "{",
    close: "}"
  }, r = wr(e, n);
  return (s) => gr(r, s);
}
const Er = { class: "flex" }, Sr = {
  key: 0,
  class: "pl-2"
}, Rr = ["onClick"], Or = { class: "w-full" }, _r = { class: "flex items-center justify-between px-4" }, Ar = { class: "font-medium text-sm dark:text-white" }, xr = { class: "font-medium text-sm dark:text-white" }, Tr = { class: "text-sm mt-2 text-light text-gray-500 px-4" }, Cr = { class: "mt-2" }, kr = {
  key: 0,
  class: "flex justify-between items-center border-t border-black/20 mt-2"
}, Nr = ["onClick"], Fr = ["onClick"], Pr = {
  key: 1,
  class: "flex justify-between items-center border-t border-black/20 mt-2"
}, Ur = /* @__PURE__ */ et({
  __name: "AddressCard",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const { addresses: t, removeAddress: n } = xt();
    e.__p.data.curr.data.mode = e.__p.data.curr.data.mode || "normal";
    const r = e.__p.data.curr.data.mode == "picker" ? "label" : "div", s = (o) => {
      try {
        const d = Tt(e.__p.data.curr.data.event.onClickEdit)({
          id: o.address_id
        });
        location.href = `${d}`;
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
    return (o, c) => (j(!0), v(Nt, null, Ft(I(t), (d) => (j(), v("div", {
      key: d.address_id,
      class: "shadow-md pt-4 bg-white dark:bg-zinc-800"
    }, [
      tt(I(r), {
        class: Ut(e.__p.data.curr.data.mode == "picker" ? "block cursor-pointer" : "")
      }, {
        default: Pt(() => [
          w("div", Er, [
            e.__p.data.curr.data.mode == "picker" ? (j(), v("div", Sr, [
              w("input", {
                type: "radio",
                name: "plan",
                class: "h-4 w-4 text-blue-600 focus:ring-blue-500",
                onClick: () => {
                  i(d);
                }
              }, null, 8, Rr)
            ])) : Y("", !0),
            w("div", Or, [
              w("div", _r, [
                w("p", Ar, L(d.name), 1),
                w("p", xr, L(d.address_type), 1)
              ]),
              w("div", Tr, [
                w("p", null, L(d.street), 1),
                w("p", null, L(d.landmark), 1),
                w("p", null, L(d.city), 1),
                w("p", null, L(d.state), 1),
                w("p", null, L(d.pincode), 1),
                w("p", Cr, "Mobile No.: " + L(d.phone_number), 1)
              ])
            ])
          ]),
          e.__p.data.curr.data.mode == "normal" ? (j(), v("div", kr, [
            w("button", {
              onClick: (l) => s(d),
              class: "font-medium text-violet-500 text-center flex-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-700 py-2"
            }, "EDIT", 8, Nr),
            c[0] || (c[0] = w("p", { class: "text-black/20" }, "|", -1)),
            w("button", {
              onClick: (l) => I(n)(d.address_id),
              class: "font-medium text-violet-500 text-center flex-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-700 py-2"
            }, "REMOVE", 8, Fr)
          ])) : Y("", !0),
          e.__p.data.curr.data.mode == "picker" ? (j(), v("div", Pr)) : Y("", !0)
        ]),
        _: 2
      }, 1032, ["class"])
    ]))), 128));
  }
}), Lr = { class: "max-w-2xl mx-auto dark:bg-zinc-900" }, Dr = { key: 0 }, Br = { class: "flex items-center justify-between my-4 bg-white dark:bg-zinc-800 p-2" }, jr = { class: "text-xs text-gray-400" }, vr = { key: 1 }, Ir = /* @__PURE__ */ et({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const { addresses: t, getAddress: n, showForm: r } = xt();
    Lt(() => n()), Dt(t, (i) => console.log("address updated:", i));
    const s = () => {
      try {
        const o = Tt(e._$p.data.curr.data.event.onClickAdd)({});
        location.href = `${o}`;
      } catch (i) {
        console.log(`addAddress, err:${i}`);
      }
    };
    return (async () => e._p.f.listen("msg", async (i) => {
      i.type === "theme:change" && (i.custom?.theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
    }))(), (i, o) => (j(), v("div", Lr, [
      I(t).length >= 0 && !I(r) ? (j(), v("div", Dr, [
        w("div", Br, [
          w("div", null, [
            o[1] || (o[1] = w("p", { class: "text-medium text-lg dark:text-white" }, "Saved Addresses", -1)),
            w("p", jr, "Address length: " + L(I(t).length), 1)
          ]),
          w("button", {
            onClick: o[0] || (o[0] = (c) => s()),
            class: "font-medium text-violet-500 p-2 border border-black/20 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer"
          }, " + ADD NEW ADDRESS ")
        ])
      ])) : Y("", !0),
      I(t).length > 0 && !I(r) ? (j(), v("div", vr, [
        tt(Ur, Bt(jt({ _p: e._p, __p: e._$p })), null, 16)
      ])) : Y("", !0)
    ]));
  }
}), os = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const r = vt(Ir, {
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
