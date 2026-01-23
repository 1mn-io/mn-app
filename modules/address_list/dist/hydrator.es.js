import { r as H, a as Ct, d as et, o as G, c as Z, F as Nt, b as kt, u as I, e as E, t as L, f as Ft, w as Pt, g as Be, h as Ut, n as Lt, i as Dt, j as Bt } from "./runtime-dom.esm-bundler-7gkl-wXk.js";
function tt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: jt } = Object.prototype, { getPrototypeOf: xe } = Object, { iterator: ue, toStringTag: nt } = Symbol, de = /* @__PURE__ */ ((e) => (t) => {
  const n = jt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), F = (e) => (e = e.toLowerCase(), (t) => de(t) === e), fe = (e) => (t) => typeof t === e, { isArray: V } = Array, J = fe("undefined");
function Y(e) {
  return e !== null && !J(e) && e.constructor !== null && !J(e.constructor) && x(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const rt = F("ArrayBuffer");
function vt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && rt(e.buffer), t;
}
const It = fe("string"), x = fe("function"), st = fe("number"), Q = (e) => e !== null && typeof e == "object", $t = (e) => e === !0 || e === !1, ie = (e) => {
  if (de(e) !== "object")
    return !1;
  const t = xe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(nt in e) && !(ue in e);
}, qt = (e) => {
  if (!Q(e) || Y(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Mt = F("Date"), zt = F("File"), Ht = F("Blob"), Jt = F("FileList"), Vt = (e) => Q(e) && x(e.pipe), Wt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || x(e.append) && ((t = de(e)) === "formdata" || // detect form-data instance
  t === "object" && x(e.toString) && e.toString() === "[object FormData]"));
}, Kt = F("URLSearchParams"), [Xt, Gt, Zt, Yt] = ["ReadableStream", "Request", "Response", "Headers"].map(F), Qt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ee(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), V(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Y(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let c;
    for (r = 0; r < o; r++)
      c = i[r], t.call(null, e[c], c, e);
  }
}
function ot(e, t) {
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
const $ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, it = (e) => !J(e) && e !== $;
function Re() {
  const { caseless: e, skipUndefined: t } = it(this) && this || {}, n = {}, r = (s, i) => {
    const o = e && ot(n, i) || i;
    ie(n[o]) && ie(s) ? n[o] = Re(n[o], s) : ie(s) ? n[o] = Re({}, s) : V(s) ? n[o] = s.slice() : (!t || !J(s)) && (n[o] = s);
  };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && ee(arguments[s], r);
  return n;
}
const en = (e, t, n, { allOwnKeys: r } = {}) => (ee(t, (s, i) => {
  n && x(s) ? e[i] = tt(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), tn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), nn = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, rn = (e, t, n, r) => {
  let s, i, o;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !c[o] && (t[o] = e[o], c[o] = !0);
    e = n !== !1 && xe(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, sn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, on = (e) => {
  if (!e) return null;
  if (V(e)) return e;
  let t = e.length;
  if (!st(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, an = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && xe(Uint8Array)), cn = (e, t) => {
  const r = (e && e[ue]).call(e);
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
}, un = F("HTMLFormElement"), dn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), je = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), fn = F("RegExp"), at = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ee(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, pn = (e) => {
  at(e, (t, n) => {
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
}, hn = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return V(e) ? r(e) : r(String(e).split(t)), n;
}, mn = () => {
}, yn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function bn(e) {
  return !!(e && x(e.append) && e[nt] === "FormData" && e[ue]);
}
const wn = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Q(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Y(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = V(r) ? [] : {};
        return ee(r, (o, c) => {
          const f = n(o, s + 1);
          !J(f) && (i[c] = f);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, gn = F("AsyncFunction"), En = (e) => e && (Q(e) || x(e)) && x(e.then) && x(e.catch), ct = ((e, t) => e ? setImmediate : t ? ((n, r) => ($.addEventListener("message", ({ source: s, data: i }) => {
  s === $ && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), $.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  x($.postMessage)
), Sn = typeof queueMicrotask < "u" ? queueMicrotask.bind($) : typeof process < "u" && process.nextTick || ct, Rn = (e) => e != null && x(e[ue]), a = {
  isArray: V,
  isArrayBuffer: rt,
  isBuffer: Y,
  isFormData: Wt,
  isArrayBufferView: vt,
  isString: It,
  isNumber: st,
  isBoolean: $t,
  isObject: Q,
  isPlainObject: ie,
  isEmptyObject: qt,
  isReadableStream: Xt,
  isRequest: Gt,
  isResponse: Zt,
  isHeaders: Yt,
  isUndefined: J,
  isDate: Mt,
  isFile: zt,
  isBlob: Ht,
  isRegExp: fn,
  isFunction: x,
  isStream: Vt,
  isURLSearchParams: Kt,
  isTypedArray: an,
  isFileList: Jt,
  forEach: ee,
  merge: Re,
  extend: en,
  trim: Qt,
  stripBOM: tn,
  inherits: nn,
  toFlatObject: rn,
  kindOf: de,
  kindOfTest: F,
  endsWith: sn,
  toArray: on,
  forEachEntry: cn,
  matchAll: ln,
  isHTMLForm: un,
  hasOwnProperty: je,
  hasOwnProp: je,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: at,
  freezeMethods: pn,
  toObjectSet: hn,
  toCamelCase: dn,
  noop: mn,
  toFiniteNumber: yn,
  findKey: ot,
  global: $,
  isContextDefined: it,
  isSpecCompliantForm: bn,
  toJSONObject: wn,
  isAsyncFn: gn,
  isThenable: En,
  setImmediate: ct,
  asap: Sn,
  isIterable: Rn
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
const lt = y.prototype, ut = {};
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
Object.defineProperties(y, ut);
Object.defineProperty(lt, "isAxiosError", { value: !0 });
y.from = (e, t, n, r, s, i) => {
  const o = Object.create(lt);
  a.toFlatObject(e, o, function(l) {
    return l !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const c = e && e.message ? e.message : "Error", f = t == null && e ? e.code : t;
  return y.call(o, c, f, n, r, s), e && o.cause == null && Object.defineProperty(o, "cause", { value: e, configurable: !0 }), o.name = e && e.name || "Error", i && Object.assign(o, i), o;
};
const On = null;
function Oe(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function dt(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ve(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = dt(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function An(e) {
  return a.isArray(e) && !e.some(Oe);
}
const _n = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function pe(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, p) {
    return !a.isUndefined(p[m]);
  });
  const r = n.metaTokens, s = n.visitor || l, i = n.dots, o = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
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
  function l(d, m, p) {
    let g = d;
    if (d && !p && typeof d == "object") {
      if (a.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (a.isArray(d) && An(d) || (a.isFileList(d) || a.endsWith(m, "[]")) && (g = a.toArray(d)))
        return m = dt(m), g.forEach(function(S, _) {
          !(a.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? ve([m], _, i) : o === null ? m : m + "[]",
            u(S)
          );
        }), !1;
    }
    return Oe(d) ? !0 : (t.append(ve(p, m, i), u(d)), !1);
  }
  const h = [], b = Object.assign(_n, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Oe
  });
  function R(d, m) {
    if (!a.isUndefined(d)) {
      if (h.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      h.push(d), a.forEach(d, function(g, C) {
        (!(a.isUndefined(g) || g === null) && s.call(
          t,
          g,
          a.isString(C) ? C.trim() : C,
          m,
          b
        )) === !0 && R(g, m ? m.concat(C) : [C]);
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
function Te(e, t) {
  this._pairs = [], e && pe(e, this, t);
}
const ft = Te.prototype;
ft.append = function(t, n) {
  this._pairs.push([t, n]);
};
ft.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ie);
  } : Ie;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function xn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function pt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || xn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = a.isURLSearchParams(t) ? t.toString() : new Te(t, n).toString(r), i) {
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
const ht = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Tn = typeof URLSearchParams < "u" ? URLSearchParams : Te, Cn = typeof FormData < "u" ? FormData : null, Nn = typeof Blob < "u" ? Blob : null, kn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Tn,
    FormData: Cn,
    Blob: Nn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ce = typeof window < "u" && typeof document < "u", Ae = typeof navigator == "object" && navigator || void 0, Fn = Ce && (!Ae || ["ReactNative", "NativeScript", "NS"].indexOf(Ae.product) < 0), Pn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Un = Ce && window.location.href || "http://localhost", Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ce,
  hasStandardBrowserEnv: Fn,
  hasStandardBrowserWebWorkerEnv: Pn,
  navigator: Ae,
  origin: Un
}, Symbol.toStringTag, { value: "Module" })), O = {
  ...Ln,
  ...kn
};
function Dn(e, t) {
  return pe(e, new O.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Bn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function jn(e) {
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
    const c = Number.isFinite(+o), f = i >= n.length;
    return o = !o && a.isArray(s) ? s.length : o, f ? (a.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !c) : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && a.isArray(s[o]) && (s[o] = jn(s[o])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(Bn(r), s, n, 0);
    }), n;
  }
  return null;
}
function vn(e, t, n) {
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
    let c;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Dn(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return pe(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), vn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || te.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
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
  te.headers[e] = {};
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
]), $n = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && In[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, qe = /* @__PURE__ */ Symbol("internals");
function X(e) {
  return e && String(e).trim().toLowerCase();
}
function ae(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(ae) : String(e);
}
function qn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Mn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function be(e, t, n, r, s) {
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
let T = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(c, f, u) {
      const l = X(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, l);
      (!h || s[h] === void 0 || u === !0 || u === void 0 && s[h] !== !1) && (s[h || f] = ae(c));
    }
    const o = (c, f) => a.forEach(c, (u, l) => i(u, l, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (a.isString(t) && (t = t.trim()) && !Mn(t))
      o($n(t), n);
    else if (a.isObject(t) && a.isIterable(t)) {
      let c = {}, f, u;
      for (const l of t) {
        if (!a.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        c[u = l[0]] = (f = c[u]) ? a.isArray(f) ? [...f, l[1]] : [f, l[1]] : l[1];
      }
      o(c, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = X(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return qn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = X(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || be(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = X(o), o) {
        const c = a.findKey(r, o);
        c && (!n || be(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || be(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, i) => {
      const o = a.findKey(r, i);
      if (o) {
        n[o] = ae(s), delete n[i];
        return;
      }
      const c = t ? zn(i) : String(i).trim();
      c !== i && delete n[i], n[c] = ae(s), r[c] = !0;
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
      const c = X(o);
      r[c] || (Hn(s, o), r[c] = !0);
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
function we(e, t) {
  const n = this || te, r = t || n, s = T.from(r.headers);
  let i = r.data;
  return a.forEach(e, function(c) {
    i = c.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function yt(e) {
  return !!(e && e.__CANCEL__);
}
function W(e, t, n) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(W, y, {
  __CANCEL__: !0
});
function bt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new y(
    "Request failed with status code " + n.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Jn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Vn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), l = r[i];
    o || (o = u), n[s] = f, r[s] = u;
    let h = i, b = 0;
    for (; h !== s; )
      b += n[h++], h = h % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), u - o < t)
      return;
    const R = l && u - l;
    return R ? Math.round(b * 1e3 / R) : void 0;
  };
}
function Wn(e, t) {
  let n = 0, r = 1e3 / t, s, i;
  const o = (u, l = Date.now()) => {
    n = l, s = null, i && (clearTimeout(i), i = null), e(...u);
  };
  return [(...u) => {
    const l = Date.now(), h = l - n;
    h >= r ? o(u, l) : (s = u, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - h)));
  }, () => s && o(s)];
}
const le = (e, t, n = 3) => {
  let r = 0;
  const s = Vn(50, 250);
  return Wn((i) => {
    const o = i.loaded, c = i.lengthComputable ? i.total : void 0, f = o - r, u = s(f), l = o <= c;
    r = o;
    const h = {
      loaded: o,
      total: c,
      progress: c ? o / c : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && c && l ? (c - o) / u : void 0,
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
}, ze = (e) => (...t) => a.asap(() => e(...t)), Kn = O.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, O.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(O.origin),
  O.navigator && /(msie|trident)/i.test(O.navigator.userAgent)
) : () => !0, Xn = O.hasStandardBrowserEnv ? (
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
function Gn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Zn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function wt(e, t, n) {
  let r = !Gn(t);
  return e && (r || n == !1) ? Zn(e, t) : t;
}
const He = (e) => e instanceof T ? { ...e } : e;
function M(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, h, b) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: b }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(u, l, h, b) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u, h, b);
    } else return r(u, l, h, b);
  }
  function i(u, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function o(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function c(u, l, h) {
    if (h in t)
      return r(u, l);
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
    validateStatus: c,
    headers: (u, l, h) => s(He(u), He(l), h, !0)
  };
  return a.forEach(Object.keys({ ...e, ...t }), function(l) {
    const h = f[l] || s, b = h(e[l], t[l], l);
    a.isUndefined(b) && h !== c || (n[l] = b);
  }), n;
}
const gt = (e) => {
  const t = M({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: c } = t;
  if (t.headers = o = T.from(o), t.url = pt(wt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && o.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  ), a.isFormData(n)) {
    if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (a.isFunction(n.getHeaders)) {
      const f = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(f).forEach(([l, h]) => {
        u.includes(l.toLowerCase()) && o.set(l, h);
      });
    }
  }
  if (O.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && Kn(t.url))) {
    const f = s && i && Xn.read(i);
    f && o.set(s, f);
  }
  return t;
}, Yn = typeof XMLHttpRequest < "u", Qn = Yn && function(e) {
  return new Promise(function(n, r) {
    const s = gt(e);
    let i = s.data;
    const o = T.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: f, onDownloadProgress: u } = s, l, h, b, R, d;
    function m() {
      R && R(), d && d(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function g() {
      if (!p)
        return;
      const S = T.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), k = {
        data: !c || c === "text" || c === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: S,
        config: e,
        request: p
      };
      bt(function(N) {
        n(N), m();
      }, function(N) {
        r(N), m();
      }, k), p = null;
    }
    "onloadend" in p ? p.onloadend = g : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, p.onabort = function() {
      p && (r(new y("Request aborted", y.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function(_) {
      const k = _ && _.message ? _.message : "Network Error", j = new y(k, y.ERR_NETWORK, e, p);
      j.event = _ || null, r(j), p = null;
    }, p.ontimeout = function() {
      let _ = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const k = s.transitional || ht;
      s.timeoutErrorMessage && (_ = s.timeoutErrorMessage), r(new y(
        _,
        k.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in p && a.forEach(o.toJSON(), function(_, k) {
      p.setRequestHeader(k, _);
    }), a.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), c && c !== "json" && (p.responseType = s.responseType), u && ([b, d] = le(u, !0), p.addEventListener("progress", b)), f && p.upload && ([h, R] = le(f), p.upload.addEventListener("progress", h), p.upload.addEventListener("loadend", R)), (s.cancelToken || s.signal) && (l = (S) => {
      p && (r(!S || S.type ? new W(null, e, p) : S), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const C = Jn(s.url);
    if (C && O.protocols.indexOf(C) === -1) {
      r(new y("Unsupported protocol " + C + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, er = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const i = function(u) {
      if (!s) {
        s = !0, c();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof y ? l : new W(l instanceof Error ? l.message : l));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: f } = r;
    return f.unsubscribe = () => a.asap(c), f;
  }
}, tr = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, nr = async function* (e, t) {
  for await (const n of rr(e))
    yield* tr(n, t);
}, rr = async function* (e) {
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
  const s = nr(e, t);
  let i = 0, o, c = (f) => {
    o || (o = !0, r && r(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: u, value: l } = await s.next();
        if (u) {
          c(), f.close();
          return;
        }
        let h = l.byteLength;
        if (n) {
          let b = i += h;
          n(b);
        }
        f.enqueue(new Uint8Array(l));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(f) {
      return c(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ve = 64 * 1024, { isFunction: oe } = a, sr = (({ Request: e, Response: t }) => ({
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
}, or = (e) => {
  e = a.merge.call({
    skipUndefined: !0
  }, sr, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? oe(t) : typeof fetch == "function", i = oe(n), o = oe(r);
  if (!s)
    return !1;
  const c = s && oe(We), f = s && (typeof Ke == "function" ? /* @__PURE__ */ ((d) => (m) => d.encode(m))(new Ke()) : async (d) => new Uint8Array(await new n(d).arrayBuffer())), u = i && c && Xe(() => {
    let d = !1;
    const m = new n(O.origin, {
      body: new We(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !m;
  }), l = o && c && Xe(() => a.isReadableStream(new r("").body)), h = {
    stream: l && ((d) => d.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !h[d] && (h[d] = (m, p) => {
      let g = m && m[d];
      if (g)
        return g.call(m);
      throw new y(`Response type '${d}' is not supported`, y.ERR_NOT_SUPPORT, p);
    });
  });
  const b = async (d) => {
    if (d == null)
      return 0;
    if (a.isBlob(d))
      return d.size;
    if (a.isSpecCompliantForm(d))
      return (await new n(O.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(d) || a.isArrayBuffer(d))
      return d.byteLength;
    if (a.isURLSearchParams(d) && (d = d + ""), a.isString(d))
      return (await f(d)).byteLength;
  }, R = async (d, m) => {
    const p = a.toFiniteNumber(d.getContentLength());
    return p ?? b(m);
  };
  return async (d) => {
    let {
      url: m,
      method: p,
      data: g,
      signal: C,
      cancelToken: S,
      timeout: _,
      onDownloadProgress: k,
      onUploadProgress: j,
      responseType: N,
      headers: me,
      withCredentials: ne = "same-origin",
      fetchOptions: ke
    } = gt(d), Fe = t || fetch;
    N = N ? (N + "").toLowerCase() : "text";
    let re = er([C, S && S.toAbortSignal()], _), K = null;
    const v = re && re.unsubscribe && (() => {
      re.unsubscribe();
    });
    let Pe;
    try {
      if (j && u && p !== "get" && p !== "head" && (Pe = await R(me, g)) !== 0) {
        let B = new n(m, {
          method: "POST",
          body: g,
          duplex: "half"
        }), z;
        if (a.isFormData(g) && (z = B.headers.get("content-type")) && me.setContentType(z), B.body) {
          const [ye, se] = Me(
            Pe,
            le(ze(j))
          );
          g = Je(B.body, Ve, ye, se);
        }
      }
      a.isString(ne) || (ne = ne ? "include" : "omit");
      const P = i && "credentials" in n.prototype, Ue = {
        ...ke,
        signal: re,
        method: p.toUpperCase(),
        headers: me.normalize().toJSON(),
        body: g,
        duplex: "half",
        credentials: P ? ne : void 0
      };
      K = i && new n(m, Ue);
      let D = await (i ? Fe(K, ke) : Fe(m, Ue));
      const Le = l && (N === "stream" || N === "response");
      if (l && (k || Le && v)) {
        const B = {};
        ["status", "statusText", "headers"].forEach((De) => {
          B[De] = D[De];
        });
        const z = a.toFiniteNumber(D.headers.get("content-length")), [ye, se] = k && Me(
          z,
          le(ze(k), !0)
        ) || [];
        D = new r(
          Je(D.body, Ve, ye, () => {
            se && se(), v && v();
          }),
          B
        );
      }
      N = N || "text";
      let Tt = await h[a.findKey(h, N) || "text"](D, d);
      return !Le && v && v(), await new Promise((B, z) => {
        bt(B, z, {
          data: Tt,
          headers: T.from(D.headers),
          status: D.status,
          statusText: D.statusText,
          config: d,
          request: K
        });
      });
    } catch (P) {
      throw v && v(), P && P.name === "TypeError" && /Load failed|fetch/i.test(P.message) ? Object.assign(
        new y("Network Error", y.ERR_NETWORK, d, K),
        {
          cause: P.cause || P
        }
      ) : y.from(P, P && P.code, d, K);
    }
  };
}, ir = /* @__PURE__ */ new Map(), Et = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, i = [
    r,
    s,
    n
  ];
  let o = i.length, c = o, f, u, l = ir;
  for (; c--; )
    f = i[c], u = l.get(f), u === void 0 && l.set(f, u = c ? /* @__PURE__ */ new Map() : or(t)), l = u;
  return u;
};
Et();
const Ne = {
  http: On,
  xhr: Qn,
  fetch: {
    get: Et
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
const Ge = (e) => `- ${e}`, ar = (e) => a.isFunction(e) || e === null || e === !1;
function cr(e, t) {
  e = a.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const i = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let c;
    if (s = r, !ar(r) && (s = Ne[(c = String(r)).toLowerCase()], s === void 0))
      throw new y(`Unknown adapter '${c}'`);
    if (s && (a.isFunction(s) || (s = s.get(t))))
      break;
    i[c || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(i).map(
      ([f, u]) => `adapter ${f} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
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
const St = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: cr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ne
};
function ge(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new W(null, e);
}
function Ze(e) {
  return ge(e), e.headers = T.from(e.headers), e.data = we.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), St.getAdapter(e.adapter || te.adapter, e)(e).then(function(r) {
    return ge(e), r.data = we.call(
      e,
      e.transformResponse,
      r
    ), r.headers = T.from(r.headers), r;
  }, function(r) {
    return yt(r) || (ge(e), r && r.response && (r.response.data = we.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = T.from(r.response.headers))), Promise.reject(r);
  });
}
const Rt = "1.13.2", he = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  he[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ye = {};
he.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + Rt + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
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
he.spelling = function(t) {
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
      const c = e[i], f = c === void 0 || o(c, i, e);
      if (f !== !0)
        throw new y("option " + i + " must be " + f, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new y("Unknown option " + i, y.ERR_BAD_OPTION);
  }
}
const ce = {
  assertOptions: lr,
  validators: he
}, U = ce.validators;
let q = class {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = M(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && ce.assertOptions(r, {
      silentJSONParsing: U.transitional(U.boolean),
      forcedJSONParsing: U.transitional(U.boolean),
      clarifyTimeoutError: U.transitional(U.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ce.assertOptions(s, {
      encode: U.function,
      serialize: U.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), ce.assertOptions(n, {
      baseUrl: U.spelling("baseURL"),
      withXsrfToken: U.spelling("withXSRFToken")
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
    ), n.headers = T.concat(o, i);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (f = f && m.synchronous, c.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let l, h = 0, b;
    if (!f) {
      const d = [Ze.bind(this), void 0];
      for (d.unshift(...c), d.push(...u), b = d.length, l = Promise.resolve(n); h < b; )
        l = l.then(d[h++], d[h++]);
      return l;
    }
    b = c.length;
    let R = n;
    for (; h < b; ) {
      const d = c[h++], m = c[h++];
      try {
        R = d(R);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      l = Ze.call(this, R);
    } catch (d) {
      return Promise.reject(d);
    }
    for (h = 0, b = u.length; h < b; )
      l = l.then(u[h++], u[h++]);
    return l;
  }
  getUri(t) {
    t = M(this.defaults, t);
    const n = wt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return pt(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  q.prototype[t] = function(n, r) {
    return this.request(M(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, c) {
      return this.request(M(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  q.prototype[t] = n(), q.prototype[t + "Form"] = n(!0);
});
let ur = class Ot {
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
      r.reason || (r.reason = new W(i, o, c), n(r.reason));
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
      token: new Ot(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function dr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function fr(e) {
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
function At(e) {
  const t = new q(e), n = tt(q.prototype.request, t);
  return a.extend(n, q.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return At(M(e, s));
  }, n;
}
const w = At(te);
w.Axios = q;
w.CanceledError = W;
w.CancelToken = ur;
w.isCancel = yt;
w.VERSION = Rt;
w.toFormData = pe;
w.AxiosError = y;
w.Cancel = w.CanceledError;
w.all = function(t) {
  return Promise.all(t);
};
w.spread = dr;
w.isAxiosError = fr;
w.mergeConfig = M;
w.AxiosHeaders = T;
w.formToJSON = (e) => mt(a.isHTMLForm(e) ? new FormData(e) : e);
w.getAdapter = St.getAdapter;
w.HttpStatusCode = _e;
w.default = w;
const {
  Axios: Br,
  AxiosError: jr,
  CanceledError: vr,
  isCancel: Ir,
  CancelToken: $r,
  VERSION: qr,
  all: Mr,
  Cancel: zr,
  isAxiosError: Hr,
  spread: Jr,
  toFormData: Vr,
  AxiosHeaders: Wr,
  HttpStatusCode: Kr,
  formToJSON: Xr,
  getAdapter: Gr,
  mergeConfig: Zr
} = w;
function pr() {
  const e = H(!1), t = H(null);
  return { post: async (r, s, i = null) => {
    e.value = !0, t.value = null;
    try {
      const { data: o } = await w.post(r, s, {
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
const Qe = H([]), Ee = H(null), Se = H(!1), hr = H("create"), A = Ct({
  name: "",
  phone_number: "",
  street: "",
  landmark: "",
  city: "",
  state: "",
  pincode: "",
  address_type: ""
}), _t = () => {
  const { post: e, error: t } = pr(), n = "https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management", r = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", s = async () => {
    const f = await e(
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
    if (!f?.success) return console.log("api error", t.value);
    Qe.value = f.data.slice().reverse();
  };
  return { addresses: Qe, getAddress: s, createAddress: async () => {
    if (console.log("create address run", A), !(await e(
      n,
      {
        operation: "add_address",
        user_id: "user_1",
        name: A.name,
        phone_number: A.phone_number,
        street: A.street,
        city: A.city,
        state: A.state,
        pincode: A.pincode,
        landmark: A.landmark,
        address_type: A.address_type,
        country_code: "IN",
        is_default: !0
      },
      r
    ))?.success) return console.log("api error", t.value);
    await s(), Ee.value = null, Se.value = !1, Object.keys(A).forEach((u) => A[u] = "");
  }, updateAddress: async (f) => {
    const u = Object.fromEntries(
      Object.entries(A).filter(([h, b]) => b !== "" && b !== null)
    );
    if (!(await e(n, {
      operation: "update_address",
      user_id: "user_1",
      address_id: f,
      ...u
    }, r))?.success) return console.log("api error", t.value);
    await s(), Ee.value = null, Se.value = !1, Object.keys(A).forEach((h) => A[h] = "");
  }, removeAddress: async (f) => {
    if (!(await e(
      n,
      {
        operation: "remove_address",
        user_id: "user_1",
        address_id: f
      },
      r
    ))?.success) return console.log("api error", t.value);
    await s();
  }, selectedAddress: Ee, showForm: Se, formMode: hr, form: A };
};
function mr(e, t) {
  return t.split(".").reduce((n, r) => n?.[r], e);
}
function yr(e, t) {
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
    const f = e.slice(o + n.length, c).trim(), [u, l] = f.split("=");
    s.push({ type: "param", value: u, defaultValue: l }), i = c + r.length;
  }
  return s;
}
function br(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  return e.map((i) => {
    if (i.type === "text") return i.value;
    const o = mr(t, i.value);
    return r.add(i.value.split(".")[0]), o === void 0 || o === "" ? i.defaultValue !== void 0 ? i.defaultValue : "" : String(o);
  }).join("");
}
function xt(e, t) {
  const n = {
    open: "{",
    close: "}"
  }, r = yr(e, n);
  return (s) => br(r, s);
}
const wr = { class: "flex items-center justify-between px-4" }, gr = { class: "font-medium text-sm dark:text-white" }, Er = { class: "font-medium text-sm dark:text-white" }, Sr = { class: "text-sm mt-2 text-light text-gray-500 px-4" }, Rr = { class: "mt-2" }, Or = { class: "flex justify-between items-center border-t border-black/20 mt-2" }, Ar = ["onClick"], _r = ["onClick"], xr = /* @__PURE__ */ et({
  __name: "AddressCard",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const { addresses: t, removeAddress: n } = _t(), r = (s) => {
      try {
        const o = xt(e.__p.data.curr.data.event.onClickEdit)({
          id: s.address_id
        });
        location.href = `${o}`;
      } catch (i) {
        console.log(`editAddress, err:${i}`);
      }
    };
    return (s, i) => (G(!0), Z(Nt, null, kt(I(t), (o) => (G(), Z("div", {
      key: o.address_id,
      class: "shadow-md pt-4 bg-white dark:bg-zinc-800"
    }, [
      E("div", wr, [
        E("p", gr, L(o.name), 1),
        E("p", Er, L(o.address_type), 1)
      ]),
      E("div", Sr, [
        E("p", null, L(o.street), 1),
        E("p", null, L(o.landmark), 1),
        E("p", null, L(o.city), 1),
        E("p", null, L(o.state), 1),
        E("p", null, L(o.pincode), 1),
        E("p", Rr, "Mobile No.: " + L(o.phone_number), 1)
      ]),
      E("div", Or, [
        E("button", {
          onClick: (c) => r(o),
          class: "font-medium text-violet-500 text-center flex-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-700 py-2"
        }, "EDIT", 8, Ar),
        i[0] || (i[0] = E("p", { class: "text-black/20" }, "|", -1)),
        E("button", {
          onClick: (c) => I(n)(o.address_id),
          class: "font-medium text-violet-500 text-center flex-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-700 py-2"
        }, "REMOVE", 8, _r)
      ])
    ]))), 128));
  }
}), Tr = { class: "max-w-2xl mx-auto dark:bg-zinc-900" }, Cr = { key: 0 }, Nr = { class: "flex items-center justify-between my-4 bg-white dark:bg-zinc-800 p-2" }, kr = { class: "text-xs text-gray-400" }, Fr = { key: 1 }, Pr = /* @__PURE__ */ et({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const { addresses: t, getAddress: n, showForm: r } = _t();
    Ft(() => n()), Pt(t, (i) => console.log("address updated:", i));
    const s = () => {
      try {
        const o = xt(e._$p.data.curr.data.event.onClickAdd)({});
        location.href = `${o}`;
      } catch (i) {
        console.log(`addAddress, err:${i}`);
      }
    };
    return (async () => e._p.f.listen("msg", async (i) => {
      i.type === "theme:change" && (i.custom?.theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
    }))(), (i, o) => (G(), Z("div", Tr, [
      I(t).length >= 0 && !I(r) ? (G(), Z("div", Cr, [
        E("div", Nr, [
          E("div", null, [
            o[1] || (o[1] = E("p", { class: "text-medium text-lg dark:text-white" }, "Saved Addresses", -1)),
            E("p", kr, "Address length: " + L(I(t).length), 1)
          ]),
          E("button", {
            onClick: o[0] || (o[0] = (c) => s()),
            class: "font-medium text-violet-500 p-2 border border-black/20 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer"
          }, " + ADD NEW ADDRESS ")
        ])
      ])) : Be("", !0),
      I(t).length > 0 && !I(r) ? (G(), Z("div", Fr, [
        Ut(xr, Lt(Dt({ _p: e._p, __p: e._$p })), null, 16)
      ])) : Be("", !0)
    ]));
  }
}), Yr = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const r = Bt(Pr, {
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
  Yr as hydrator,
  Yr as index
};
