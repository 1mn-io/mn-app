import { i as kt, d as nt, o as At, a as Ct, c as F, b as A, e as x, f as Nt, g as oe, r as M, t as V, h as ie, F as Ue, j as Be, w as De, k as Pt, l as Ft } from "./runtime-dom.esm-bundler-_lWvV8a9.js";
const Lt = /* @__PURE__ */ Symbol("");
function Ut() {
  return kt(Lt);
}
function rt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Bt } = Object.prototype, { getPrototypeOf: Te } = Object, { iterator: pe, toStringTag: st } = Symbol, he = /* @__PURE__ */ ((e) => (t) => {
  const n = Bt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), L = (e) => (e = e.toLowerCase(), (t) => he(t) === e), me = (e) => (t) => typeof t === e, { isArray: K } = Array, W = me("undefined");
function Y(e) {
  return e !== null && !W(e) && e.constructor !== null && !W(e.constructor) && C(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ot = L("ArrayBuffer");
function Dt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ot(e.buffer), t;
}
const jt = me("string"), C = me("function"), it = me("number"), Q = (e) => e !== null && typeof e == "object", It = (e) => e === !0 || e === !1, ce = (e) => {
  if (he(e) !== "object")
    return !1;
  const t = Te(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(st in e) && !(pe in e);
}, Mt = (e) => {
  if (!Q(e) || Y(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, qt = L("Date"), zt = L("File"), $t = L("Blob"), Ht = L("FileList"), Jt = (e) => Q(e) && C(e.pipe), Vt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || C(e.append) && ((t = he(e)) === "formdata" || // detect form-data instance
  t === "object" && C(e.toString) && e.toString() === "[object FormData]"));
}, Wt = L("URLSearchParams"), [Kt, Xt, Gt, Zt] = ["ReadableStream", "Request", "Response", "Headers"].map(L), Yt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ee(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), K(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Y(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let l;
    for (r = 0; r < o; r++)
      l = i[r], t.call(null, e[l], l, e);
  }
}
function at(e, t) {
  if (Y(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, lt = (e) => !W(e) && e !== q;
function Se() {
  const { caseless: e, skipUndefined: t } = lt(this) && this || {}, n = {}, r = (s, i) => {
    const o = e && at(n, i) || i;
    ce(n[o]) && ce(s) ? n[o] = Se(n[o], s) : ce(s) ? n[o] = Se({}, s) : K(s) ? n[o] = s.slice() : (!t || !W(s)) && (n[o] = s);
  };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && ee(arguments[s], r);
  return n;
}
const Qt = (e, t, n, { allOwnKeys: r } = {}) => (ee(t, (s, i) => {
  n && C(s) ? e[i] = rt(s, n) : e[i] = s;
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
    e = n !== !1 && Te(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, rn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, sn = (e) => {
  if (!e) return null;
  if (K(e)) return e;
  let t = e.length;
  if (!it(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, on = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Te(Uint8Array)), an = (e, t) => {
  const r = (e && e[pe]).call(e);
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
}, cn = L("HTMLFormElement"), un = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), je = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), dn = L("RegExp"), ct = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ee(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, fn = (e) => {
  ct(e, (t, n) => {
    if (C(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (C(r)) {
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
  return K(e) ? r(e) : r(String(e).split(t)), n;
}, hn = () => {
}, mn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function gn(e) {
  return !!(e && C(e.append) && e[st] === "FormData" && e[pe]);
}
const bn = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Q(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Y(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = K(r) ? [] : {};
        return ee(r, (o, l) => {
          const f = n(o, s + 1);
          !W(f) && (i[l] = f);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, yn = L("AsyncFunction"), wn = (e) => e && (Q(e) || C(e)) && C(e.then) && C(e.catch), ut = ((e, t) => e ? setImmediate : t ? ((n, r) => (q.addEventListener("message", ({ source: s, data: i }) => {
  s === q && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), q.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  C(q.postMessage)
), xn = typeof queueMicrotask < "u" ? queueMicrotask.bind(q) : typeof process < "u" && process.nextTick || ut, En = (e) => e != null && C(e[pe]), a = {
  isArray: K,
  isArrayBuffer: ot,
  isBuffer: Y,
  isFormData: Vt,
  isArrayBufferView: Dt,
  isString: jt,
  isNumber: it,
  isBoolean: It,
  isObject: Q,
  isPlainObject: ce,
  isEmptyObject: Mt,
  isReadableStream: Kt,
  isRequest: Xt,
  isResponse: Gt,
  isHeaders: Zt,
  isUndefined: W,
  isDate: qt,
  isFile: zt,
  isBlob: $t,
  isRegExp: dn,
  isFunction: C,
  isStream: Jt,
  isURLSearchParams: Wt,
  isTypedArray: on,
  isFileList: Ht,
  forEach: ee,
  merge: Se,
  extend: Qt,
  trim: Yt,
  stripBOM: en,
  inherits: tn,
  toFlatObject: nn,
  kindOf: he,
  kindOfTest: L,
  endsWith: rn,
  toArray: sn,
  forEachEntry: an,
  matchAll: ln,
  isHTMLForm: cn,
  hasOwnProperty: je,
  hasOwnProp: je,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ct,
  freezeMethods: fn,
  toObjectSet: pn,
  toCamelCase: un,
  noop: hn,
  toFiniteNumber: mn,
  findKey: at,
  global: q,
  isContextDefined: lt,
  isSpecCompliantForm: gn,
  toJSONObject: bn,
  isAsyncFn: yn,
  isThenable: wn,
  setImmediate: ut,
  asap: xn,
  isIterable: En
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
const dt = y.prototype, ft = {};
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
  ft[e] = { value: e };
});
Object.defineProperties(y, ft);
Object.defineProperty(dt, "isAxiosError", { value: !0 });
y.from = (e, t, n, r, s, i) => {
  const o = Object.create(dt);
  a.toFlatObject(e, o, function(c) {
    return c !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const l = e && e.message ? e.message : "Error", f = t == null && e ? e.code : t;
  return y.call(o, l, f, n, r, s), e && o.cause == null && Object.defineProperty(o, "cause", { value: e, configurable: !0 }), o.name = e && e.name || "Error", i && Object.assign(o, i), o;
};
const Sn = null;
function Re(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function pt(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ie(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = pt(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Rn(e) {
  return a.isArray(e) && !e.some(Re);
}
const On = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ge(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, p) {
    return !a.isUndefined(p[g]);
  });
  const r = n.metaTokens, s = n.visitor || c, i = n.dots, o = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null) return "";
    if (a.isDate(d))
      return d.toISOString();
    if (a.isBoolean(d))
      return d.toString();
    if (!f && a.isBlob(d))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(d) || a.isTypedArray(d) ? f && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function c(d, g, p) {
    let R = d;
    if (d && !p && typeof d == "object") {
      if (a.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), d = JSON.stringify(d);
      else if (a.isArray(d) && Rn(d) || (a.isFileList(d) || a.endsWith(g, "[]")) && (R = a.toArray(d)))
        return g = pt(g), R.forEach(function(O, T) {
          !(a.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Ie([g], T, i) : o === null ? g : g + "[]",
            u(O)
          );
        }), !1;
    }
    return Re(d) ? !0 : (t.append(Ie(p, g, i), u(d)), !1);
  }
  const h = [], E = Object.assign(On, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Re
  });
  function _(d, g) {
    if (!a.isUndefined(d)) {
      if (h.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      h.push(d), a.forEach(d, function(R, k) {
        (!(a.isUndefined(R) || R === null) && s.call(
          t,
          R,
          a.isString(k) ? k.trim() : k,
          g,
          E
        )) === !0 && _(R, g ? g.concat(k) : [k]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
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
function ve(e, t) {
  this._pairs = [], e && ge(e, this, t);
}
const ht = ve.prototype;
ht.append = function(t, n) {
  this._pairs.push([t, n]);
};
ht.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Me);
  } : Me;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function _n(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function mt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || _n;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = a.isURLSearchParams(t) ? t.toString() : new ve(t, n).toString(r), i) {
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
const gt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Tn = typeof URLSearchParams < "u" ? URLSearchParams : ve, vn = typeof FormData < "u" ? FormData : null, kn = typeof Blob < "u" ? Blob : null, An = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Tn,
    FormData: vn,
    Blob: kn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ke = typeof window < "u" && typeof document < "u", Oe = typeof navigator == "object" && navigator || void 0, Cn = ke && (!Oe || ["ReactNative", "NativeScript", "NS"].indexOf(Oe.product) < 0), Nn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Pn = ke && window.location.href || "http://localhost", Fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ke,
  hasStandardBrowserEnv: Cn,
  hasStandardBrowserWebWorkerEnv: Nn,
  navigator: Oe,
  origin: Pn
}, Symbol.toStringTag, { value: "Module" })), v = {
  ...Fn,
  ...An
};
function Ln(e, t) {
  return ge(e, new v.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return v.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
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
function bt(e) {
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
const te = {
  transitional: gt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = a.isObject(t);
    if (i && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(bt(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ln(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ge(
          l ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), Dn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || te.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (l) {
        if (o)
          throw l.name === "SyntaxError" ? y.from(l, y.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: v.classes.FormData,
    Blob: v.classes.Blob
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
  te.headers[e] = {};
});
const jn = a.toObjectSet([
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
]), In = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && jn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ze = /* @__PURE__ */ Symbol("internals");
function Z(e) {
  return e && String(e).trim().toLowerCase();
}
function ue(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(ue) : String(e);
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
function zn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function $n(e, t) {
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
let N = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(l, f, u) {
      const c = Z(f);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, c);
      (!h || s[h] === void 0 || u === !0 || u === void 0 && s[h] !== !1) && (s[h || f] = ue(l));
    }
    const o = (l, f) => a.forEach(l, (u, c) => i(u, c, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (a.isString(t) && (t = t.trim()) && !qn(t))
      o(In(t), n);
    else if (a.isObject(t) && a.isIterable(t)) {
      let l = {}, f, u;
      for (const c of t) {
        if (!a.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        l[u = c[0]] = (f = l[u]) ? a.isArray(f) ? [...f, c[1]] : [f, c[1]] : c[1];
      }
      o(l, n);
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
        n[o] = ue(s), delete n[i];
        return;
      }
      const l = t ? zn(i) : String(i).trim();
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
    const r = (this[ze] = this[ze] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const l = Z(o);
      r[l] || ($n(s, o), r[l] = !0);
    }
    return a.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
N.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(N.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(N);
function xe(e, t) {
  const n = this || te, r = t || n, s = N.from(r.headers);
  let i = r.data;
  return a.forEach(e, function(l) {
    i = l.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function yt(e) {
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
function Hn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Jn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), c = r[i];
    o || (o = u), n[s] = f, r[s] = u;
    let h = i, E = 0;
    for (; h !== s; )
      E += n[h++], h = h % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), u - o < t)
      return;
    const _ = c && u - c;
    return _ ? Math.round(E * 1e3 / _) : void 0;
  };
}
function Vn(e, t) {
  let n = 0, r = 1e3 / t, s, i;
  const o = (u, c = Date.now()) => {
    n = c, s = null, i && (clearTimeout(i), i = null), e(...u);
  };
  return [(...u) => {
    const c = Date.now(), h = c - n;
    h >= r ? o(u, c) : (s = u, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - h)));
  }, () => s && o(s)];
}
const fe = (e, t, n = 3) => {
  let r = 0;
  const s = Jn(50, 250);
  return Vn((i) => {
    const o = i.loaded, l = i.lengthComputable ? i.total : void 0, f = o - r, u = s(f), c = o <= l;
    r = o;
    const h = {
      loaded: o,
      total: l,
      progress: l ? o / l : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && l && c ? (l - o) / u : void 0,
      event: i,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, $e = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, He = (e) => (...t) => a.asap(() => e(...t)), Wn = v.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, v.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(v.origin),
  v.navigator && /(msie|trident)/i.test(v.navigator.userAgent)
) : () => !0, Kn = v.hasStandardBrowserEnv ? (
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
function xt(e, t, n) {
  let r = !Xn(t);
  return e && (r || n == !1) ? Gn(e, t) : t;
}
const Je = (e) => e instanceof N ? { ...e } : e;
function $(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, h, E) {
    return a.isPlainObject(u) && a.isPlainObject(c) ? a.merge.call({ caseless: E }, u, c) : a.isPlainObject(c) ? a.merge({}, c) : a.isArray(c) ? c.slice() : c;
  }
  function s(u, c, h, E) {
    if (a.isUndefined(c)) {
      if (!a.isUndefined(u))
        return r(void 0, u, h, E);
    } else return r(u, c, h, E);
  }
  function i(u, c) {
    if (!a.isUndefined(c))
      return r(void 0, c);
  }
  function o(u, c) {
    if (a.isUndefined(c)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, c);
  }
  function l(u, c, h) {
    if (h in t)
      return r(u, c);
    if (h in e)
      return r(void 0, u);
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
    headers: (u, c, h) => s(Je(u), Je(c), h, !0)
  };
  return a.forEach(Object.keys({ ...e, ...t }), function(c) {
    const h = f[c] || s, E = h(e[c], t[c], c);
    a.isUndefined(E) && h !== l || (n[c] = E);
  }), n;
}
const Et = (e) => {
  const t = $({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: l } = t;
  if (t.headers = o = N.from(o), t.url = mt(xt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && o.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  ), a.isFormData(n)) {
    if (v.hasStandardBrowserEnv || v.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (a.isFunction(n.getHeaders)) {
      const f = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(f).forEach(([c, h]) => {
        u.includes(c.toLowerCase()) && o.set(c, h);
      });
    }
  }
  if (v.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && Wn(t.url))) {
    const f = s && i && Kn.read(i);
    f && o.set(s, f);
  }
  return t;
}, Zn = typeof XMLHttpRequest < "u", Yn = Zn && function(e) {
  return new Promise(function(n, r) {
    const s = Et(e);
    let i = s.data;
    const o = N.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: u } = s, c, h, E, _, d;
    function g() {
      _ && _(), d && d(), s.cancelToken && s.cancelToken.unsubscribe(c), s.signal && s.signal.removeEventListener("abort", c);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function R() {
      if (!p)
        return;
      const O = N.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), P = {
        data: !l || l === "text" || l === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: O,
        config: e,
        request: p
      };
      wt(function(m) {
        n(m), g();
      }, function(m) {
        r(m), g();
      }, P), p = null;
    }
    "onloadend" in p ? p.onloadend = R : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, p.onabort = function() {
      p && (r(new y("Request aborted", y.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function(T) {
      const P = T && T.message ? T.message : "Network Error", b = new y(P, y.ERR_NETWORK, e, p);
      b.event = T || null, r(b), p = null;
    }, p.ontimeout = function() {
      let T = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const P = s.transitional || gt;
      s.timeoutErrorMessage && (T = s.timeoutErrorMessage), r(new y(
        T,
        P.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in p && a.forEach(o.toJSON(), function(T, P) {
      p.setRequestHeader(P, T);
    }), a.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), l && l !== "json" && (p.responseType = s.responseType), u && ([E, d] = fe(u, !0), p.addEventListener("progress", E)), f && p.upload && ([h, _] = fe(f), p.upload.addEventListener("progress", h), p.upload.addEventListener("loadend", _)), (s.cancelToken || s.signal) && (c = (O) => {
      p && (r(!O || O.type ? new X(null, e, p) : O), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(c), s.signal && (s.signal.aborted ? c() : s.signal.addEventListener("abort", c)));
    const k = Hn(s.url);
    if (k && v.protocols.indexOf(k) === -1) {
      r(new y("Unsupported protocol " + k + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, Qn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const i = function(u) {
      if (!s) {
        s = !0, l();
        const c = u instanceof Error ? u : this.reason;
        r.abort(c instanceof y ? c : new X(c instanceof Error ? c.message : c));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
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
        const { done: u, value: c } = await s.next();
        if (u) {
          l(), f.close();
          return;
        }
        let h = c.byteLength;
        if (n) {
          let E = i += h;
          n(E);
        }
        f.enqueue(new Uint8Array(c));
      } catch (u) {
        throw l(u), u;
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
  const l = s && ae(Ke), f = s && (typeof Xe == "function" ? /* @__PURE__ */ ((d) => (g) => d.encode(g))(new Xe()) : async (d) => new Uint8Array(await new n(d).arrayBuffer())), u = i && l && Ge(() => {
    let d = !1;
    const g = new n(v.origin, {
      body: new Ke(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !g;
  }), c = o && l && Ge(() => a.isReadableStream(new r("").body)), h = {
    stream: c && ((d) => d.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !h[d] && (h[d] = (g, p) => {
      let R = g && g[d];
      if (R)
        return R.call(g);
      throw new y(`Response type '${d}' is not supported`, y.ERR_NOT_SUPPORT, p);
    });
  });
  const E = async (d) => {
    if (d == null)
      return 0;
    if (a.isBlob(d))
      return d.size;
    if (a.isSpecCompliantForm(d))
      return (await new n(v.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(d) || a.isArrayBuffer(d))
      return d.byteLength;
    if (a.isURLSearchParams(d) && (d = d + ""), a.isString(d))
      return (await f(d)).byteLength;
  }, _ = async (d, g) => {
    const p = a.toFiniteNumber(d.getContentLength());
    return p ?? E(g);
  };
  return async (d) => {
    let {
      url: g,
      method: p,
      data: R,
      signal: k,
      cancelToken: O,
      timeout: T,
      onDownloadProgress: P,
      onUploadProgress: b,
      responseType: m,
      headers: w,
      withCredentials: H = "same-origin",
      fetchOptions: ne
    } = Et(d), Ce = t || fetch;
    m = m ? (m + "").toLowerCase() : "text";
    let re = Qn([k, O && O.toAbortSignal()], T), G = null;
    const I = re && re.unsubscribe && (() => {
      re.unsubscribe();
    });
    let Ne;
    try {
      if (b && u && p !== "get" && p !== "head" && (Ne = await _(w, R)) !== 0) {
        let j = new n(g, {
          method: "POST",
          body: R,
          duplex: "half"
        }), J;
        if (a.isFormData(R) && (J = j.headers.get("content-type")) && w.setContentType(J), j.body) {
          const [ye, se] = $e(
            Ne,
            fe(He(b))
          );
          R = Ve(j.body, We, ye, se);
        }
      }
      a.isString(H) || (H = H ? "include" : "omit");
      const U = i && "credentials" in n.prototype, Pe = {
        ...ne,
        signal: re,
        method: p.toUpperCase(),
        headers: w.normalize().toJSON(),
        body: R,
        duplex: "half",
        credentials: U ? H : void 0
      };
      G = i && new n(g, Pe);
      let D = await (i ? Ce(G, ne) : Ce(g, Pe));
      const Fe = c && (m === "stream" || m === "response");
      if (c && (P || Fe && I)) {
        const j = {};
        ["status", "statusText", "headers"].forEach((Le) => {
          j[Le] = D[Le];
        });
        const J = a.toFiniteNumber(D.headers.get("content-length")), [ye, se] = P && $e(
          J,
          fe(He(P), !0)
        ) || [];
        D = new r(
          Ve(D.body, We, ye, () => {
            se && se(), I && I();
          }),
          j
        );
      }
      m = m || "text";
      let vt = await h[a.findKey(h, m) || "text"](D, d);
      return !Fe && I && I(), await new Promise((j, J) => {
        wt(j, J, {
          data: vt,
          headers: N.from(D.headers),
          status: D.status,
          statusText: D.statusText,
          config: d,
          request: G
        });
      });
    } catch (U) {
      throw I && I(), U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message) ? Object.assign(
        new y("Network Error", y.ERR_NETWORK, d, G),
        {
          cause: U.cause || U
        }
      ) : y.from(U, U && U.code, d, G);
    }
  };
}, or = /* @__PURE__ */ new Map(), St = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, i = [
    r,
    s,
    n
  ];
  let o = i.length, l = o, f, u, c = or;
  for (; l--; )
    f = i[l], u = c.get(f), u === void 0 && c.set(f, u = l ? /* @__PURE__ */ new Map() : sr(t)), c = u;
  return u;
};
St();
const Ae = {
  http: Sn,
  xhr: Yn,
  fetch: {
    get: St
  }
};
a.forEach(Ae, (e, t) => {
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
    if (s = r, !ir(r) && (s = Ae[(l = String(r)).toLowerCase()], s === void 0))
      throw new y(`Unknown adapter '${l}'`);
    if (s && (a.isFunction(s) || (s = s.get(t))))
      break;
    i[l || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(i).map(
      ([f, u]) => `adapter ${f} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? o.length > 1 ? `since :
` + o.map(Ze).join(`
`) : " " + Ze(o[0]) : "as no adapter specified";
    throw new y(
      "There is no suitable adapter to dispatch the request " + l,
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
  getAdapter: ar,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ae
};
function Ee(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new X(null, e);
}
function Ye(e) {
  return Ee(e), e.headers = N.from(e.headers), e.data = xe.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Rt.getAdapter(e.adapter || te.adapter, e)(e).then(function(r) {
    return Ee(e), r.data = xe.call(
      e,
      e.transformResponse,
      r
    ), r.headers = N.from(r.headers), r;
  }, function(r) {
    return yt(r) || (Ee(e), r && r.response && (r.response.data = xe.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = N.from(r.response.headers))), Promise.reject(r);
  });
}
const Ot = "1.13.2", be = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  be[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Qe = {};
be.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + Ot + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, l) => {
    if (t === !1)
      throw new y(
        s(o, " has been removed" + (n ? " in " + n : "")),
        y.ERR_DEPRECATED
      );
    return n && !Qe[o] && (Qe[o] = !0, console.warn(
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
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const l = e[i], f = l === void 0 || o(l, i, e);
      if (f !== !0)
        throw new y("option " + i + " must be " + f, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new y("Unknown option " + i, y.ERR_BAD_OPTION);
  }
}
const de = {
  assertOptions: lr,
  validators: be
}, B = de.validators;
let z = class {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = $(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && de.assertOptions(r, {
      silentJSONParsing: B.transitional(B.boolean),
      forcedJSONParsing: B.transitional(B.boolean),
      clarifyTimeoutError: B.transitional(B.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : de.assertOptions(s, {
      encode: B.function,
      serialize: B.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), de.assertOptions(n, {
      baseUrl: B.spelling("baseURL"),
      withXsrfToken: B.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && a.merge(
      i.common,
      i[n.method]
    );
    i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), n.headers = N.concat(o, i);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (f = f && g.synchronous, l.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let c, h = 0, E;
    if (!f) {
      const d = [Ye.bind(this), void 0];
      for (d.unshift(...l), d.push(...u), E = d.length, c = Promise.resolve(n); h < E; )
        c = c.then(d[h++], d[h++]);
      return c;
    }
    E = l.length;
    let _ = n;
    for (; h < E; ) {
      const d = l[h++], g = l[h++];
      try {
        _ = d(_);
      } catch (p) {
        g.call(this, p);
        break;
      }
    }
    try {
      c = Ye.call(this, _);
    } catch (d) {
      return Promise.reject(d);
    }
    for (h = 0, E = u.length; h < E; )
      c = c.then(u[h++], u[h++]);
    return c;
  }
  getUri(t) {
    t = $(this.defaults, t);
    const n = xt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return mt(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  z.prototype[t] = function(n, r) {
    return this.request($(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, l) {
      return this.request($(l || {}, {
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
let cr = class _t {
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
      r.reason || (r.reason = new X(i, o, l), n(r.reason));
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
function ur(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function dr(e) {
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
function Tt(e) {
  const t = new z(e), n = rt(z.prototype.request, t);
  return a.extend(n, z.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Tt($(e, s));
  }, n;
}
const S = Tt(te);
S.Axios = z;
S.CanceledError = X;
S.CancelToken = cr;
S.isCancel = yt;
S.VERSION = Ot;
S.toFormData = ge;
S.AxiosError = y;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = ur;
S.isAxiosError = dr;
S.mergeConfig = $;
S.AxiosHeaders = N;
S.formToJSON = (e) => bt(a.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = Rt.getAdapter;
S.HttpStatusCode = _e;
S.default = S;
const {
  Axios: qr,
  AxiosError: zr,
  CanceledError: $r,
  isCancel: Hr,
  CancelToken: Jr,
  VERSION: Vr,
  all: Wr,
  Cancel: Kr,
  isAxiosError: Xr,
  spread: Gr,
  toFormData: Zr,
  AxiosHeaders: Yr,
  HttpStatusCode: Qr,
  formToJSON: es,
  getAdapter: ts,
  mergeConfig: ns
} = S, fr = { class: "bg-gray-50 dark:bg-[#0b1120] min-h-screen pb-20 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-blue-100 selection:text-blue-900" }, pr = { class: "sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-800/50 transition-all duration-300" }, hr = { class: "max-w-[1440px] mx-auto px-4 py-3 md:px-8 md:py-4 flex justify-between items-center" }, mr = { class: "flex items-center gap-3" }, gr = { class: "text-xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white" }, br = {
  key: 0,
  class: "text-sm font-normal text-slate-400 ml-2"
}, yr = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, wr = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, xr = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-[1440px] mx-auto px-4 md:px-8 my-8"
}, Er = {
  key: 1,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-[1440px] mx-auto px-4 md:px-8 my-8 list-none"
}, Sr = ["onClick"], Rr = { class: "p-2 md:p-2.5 pb-0" }, Or = { class: "aspect-4/5 relative bg-[#f4f6f8] dark:bg-slate-800 rounded-xl overflow-hidden" }, _r = ["src", "alt"], Tr = {
  key: 0,
  class: "absolute bottom-2 left-2 bg-red-500 text-white text-[10px] md:text-xs px-2 py-0.5 rounded-md font-bold shadow-sm"
}, vr = ["onClick"], kr = { class: "p-3 md:p-4 flex flex-col flex-1 gap-1" }, Ar = { class: "flex items-baseline gap-2 mb-1" }, Cr = { class: "text-lg md:text-xl font-black text-slate-900 dark:text-white leading-none" }, Nr = {
  key: 0,
  class: "text-xs text-slate-400 line-through decoration-slate-400/50"
}, Pr = { class: "text-[11px] font-bold text-slate-400 uppercase tracking-wider" }, Fr = { class: "text-[13px] leading-snug text-slate-700 dark:text-slate-300 font-medium line-clamp-2 min-h-[2.5em]" }, Lr = {
  key: 2,
  class: "flex flex-col items-center justify-center py-32 px-4 min-h-[50vh]"
}, Ur = {
  key: 0,
  class: "flex gap-2"
}, et = "https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management", tt = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", le = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500", Br = /* @__PURE__ */ nt({
  __name: "favlist",
  setup(e) {
    const t = Ut(), n = M([]), r = M(!1), s = M(!0), i = M(!1), o = M(1), l = M(!0), f = M(null);
    let u = null;
    const c = () => {
      const b = localStorage.getItem("theme");
      r.value = b ? b === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches, r.value && document.documentElement.classList.add("dark");
    }, h = () => {
      r.value = !r.value, document.documentElement.classList.toggle("dark"), localStorage.setItem("theme", r.value ? "dark" : "light");
    }, E = async () => {
      try {
        const b = await S.post(
          et,
          { operation: "get_favorites", user_id: "user_1", page: o.value, per_page: 20 },
          { headers: { Authorization: `Bearer ${tt}` } }
        );
        if (b.data && b.data.success && Array.isArray(b.data.favorites)) {
          const m = b.data.favorites;
          n.value.push(...m), m.length < 20 && (l.value = !1);
        } else
          l.value = !1;
      } catch (b) {
        console.error("Error fetching favorites:", b), l.value = !1;
      }
    }, _ = async () => {
      s.value = !0, await E(), s.value = !1;
    }, d = () => {
      u = new IntersectionObserver(async (b) => {
        b[0].isIntersecting && l.value && !s.value && !i.value && (i.value = !0, o.value++, await E(), i.value = !1);
      }, { rootMargin: "200px" }), f.value && u.observe(f.value);
    }, g = async (b) => {
      if (!b) return;
      const m = [...n.value];
      n.value = n.value.filter((w) => w.favorite_id !== b);
      try {
        if (!(await S.post(
          et,
          {
            operation: "remove_from_favorites",
            user_id: "user_1",
            favorite_id: b
          },
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${tt}`
            }
          }
        )).data.success)
          throw new Error("Failed to remove from server");
        console.log("Successfully removed:", b);
      } catch (w) {
        console.error("Error removing favorite:", w), n.value = m, alert("Could not remove item. Please try again.");
      }
    }, p = () => {
      const b = document.activeElement, m = b.innerText;
      b.innerText = "Moved!", b.classList.add("bg-green-600", "hover:bg-green-700"), setTimeout(() => {
        b.innerText = m, b.classList.remove("bg-green-600", "hover:bg-green-700");
      }, 1500);
    }, R = (b) => {
      if (!b) return le;
      try {
        const w = b.metadata;
        if (w?.color?.[0]?.image?.[0]?.url) return w.color[0].image[0].url;
      } catch {
      }
      const m = (b.title || b.category?.join(" ") || "").toLowerCase();
      return m.includes("shirt") || m.includes("top") ? "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" : m.includes("shoe") ? "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" : le;
    }, k = (b) => {
      const m = b.target;
      m.src !== le && (m.src = le);
    }, O = (b) => {
      if (!b?.variant_prices?.[0] || !b?.variant_mrp?.[0]) return 0;
      const m = b.variant_prices[0], w = b.variant_mrp[0];
      return w > m ? Math.round((w - m) / w * 100) : 0;
    }, T = (b) => b ? new Intl.NumberFormat("ru-RU").format(Number(b)) : "0", P = (b) => {
      b && t.push({ path: `/product/${b}` });
    };
    return At(() => {
      c(), _().then(() => {
        setTimeout(() => d(), 100);
      });
    }), Ct(() => {
      u && u.disconnect();
    }), (b, m) => (A(), F("div", fr, [
      x("header", pr, [
        x("div", hr, [
          x("div", mr, [
            m[1] || (m[1] = x("div", { class: "w-10 h-10 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center text-red-500" }, [
              x("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                stroke: "none"
              }, [
                x("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
              ])
            ], -1)),
            x("h1", gr, [
              m[0] || (m[0] = Nt(" My Wishlist ", -1)),
              s.value ? oe("", !0) : (A(), F("span", br, "(" + V(n.value.length) + " items)", 1))
            ])
          ]),
          x("button", {
            onClick: h,
            class: "p-3 rounded-2xl bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors active:scale-95"
          }, [
            r.value ? (A(), F("svg", yr, [...m[2] || (m[2] = [
              ie('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', 9)
            ])])) : (A(), F("svg", wr, [...m[3] || (m[3] = [
              x("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
            ])]))
          ])
        ])
      ]),
      s.value && o.value === 1 ? (A(), F("div", xr, [
        (A(), F(Ue, null, Be(5, (w) => x("div", {
          key: w,
          class: "bg-white dark:bg-[#1e293b] rounded-2xl p-3 shadow-sm border border-gray-100 dark:border-slate-800"
        }, [...m[4] || (m[4] = [
          ie('<div class="aspect-4/5 bg-gray-200 dark:bg-slate-700 rounded-xl relative overflow-hidden mb-3"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div><div class="space-y-2"><div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/3"></div><div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full"></div><div class="h-8 bg-gray-200 dark:bg-slate-700 rounded-lg mt-2"></div></div>', 2)
        ])])), 64))
      ])) : n.value.length > 0 ? (A(), F("ul", Er, [
        (A(!0), F(Ue, null, Be(n.value, (w, H) => (A(), F("li", {
          key: w.favorite_id || H,
          class: "group bg-white dark:bg-[#1e293b] rounded-2xl flex flex-col relative cursor-pointer border border-transparent hover:border-blue-100 dark:hover:border-slate-600 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] dark:shadow-none dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300",
          onClick: (ne) => P(w.product_id)
        }, [
          x("div", Rr, [
            x("div", Or, [
              x("img", {
                src: R(w.Product),
                loading: "lazy",
                alt: w.Product?.brand,
                onError: k,
                class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply dark:mix-blend-normal"
              }, null, 40, _r),
              O(w.Product) > 0 ? (A(), F("span", Tr, " -" + V(O(w.Product)) + "% ", 1)) : oe("", !0),
              x("button", {
                class: "absolute top-2 right-2 w-8 h-8 rounded-full bg-white/70 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-all shadow-sm",
                onClick: De((ne) => g(w.favorite_id), ["stop"]),
                title: "Remove from wishlist"
              }, [...m[5] || (m[5] = [
                x("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  x("polyline", { points: "3 6 5 6 21 6" }),
                  x("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })
                ], -1)
              ])], 8, vr)
            ])
          ]),
          x("div", kr, [
            x("div", Ar, [
              x("span", Cr, V(T(w.Product?.variant_prices?.[0])) + " ₽ ", 1),
              w.Product?.variant_mrp?.[0] > w.Product?.variant_prices?.[0] ? (A(), F("span", Nr, V(T(w.Product?.variant_mrp?.[0])), 1)) : oe("", !0)
            ]),
            m[7] || (m[7] = ie('<div class="flex items-center gap-2 mb-1.5"><span class="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-green-500"></span> In Stock </span><div class="flex items-center gap-1 text-[10px] text-slate-400"><span class="text-amber-400">★</span> 4.9 </div></div>', 1)),
            x("div", Pr, V(w.Product?.brand || "Brand"), 1),
            x("h3", Fr, V(w.Product?.title || w.Product?.category?.join(" ") || "Product Name"), 1),
            x("button", {
              class: "mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group/btn",
              onClick: De(p, ["stop"])
            }, [...m[6] || (m[6] = [
              x("span", null, "Move to Cart", -1),
              x("svg", {
                class: "w-4 h-4 transition-transform group-hover/btn:translate-x-1",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                x("path", { d: "M5 12h14M12 5l7 7-7 7" })
              ], -1)
            ])])
          ])
        ], 8, Sr))), 128))
      ])) : (A(), F("div", Lr, [...m[8] || (m[8] = [
        ie('<div class="w-24 h-24 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-400 mb-6"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div><h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Your wishlist is empty</h3><p class="text-slate-500 mb-8 text-center max-w-md">Items added to your favorites will appear here.</p>', 3)
      ])])),
      x("div", {
        ref_key: "sentinel",
        ref: f,
        class: "h-20 flex justify-center items-center w-full"
      }, [
        i.value ? (A(), F("div", Ur, [...m[9] || (m[9] = [
          x("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce" }, null, -1),
          x("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]" }, null, -1),
          x("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]" }, null, -1)
        ])])) : oe("", !0)
      ], 512)
    ]));
  }
}), Dr = /* @__PURE__ */ nt({
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
      if (console.log("_p.f.listen", t), t.type === "change") {
        const n = t.custom?.theme;
        console.log("theme change to", n), n && (document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), localStorage.setItem("theme", n));
      }
    }), setTimeout(async () => {
      await e._p.f.call("msg", {
        type: "on:change",
        _p: e._p,
        _$p: e._$p
      });
    }, 500)))(), (t, n) => (A(), Pt(Br, {
      _p: e._p,
      __p: e._$p
    }, null, 8, ["_p", "__p"]));
  }
}), rs = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const r = Ft(Dr, {
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
  rs as hydrator,
  rs as index
};
