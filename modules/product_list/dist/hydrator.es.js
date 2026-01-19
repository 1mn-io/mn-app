import { i as Ut, d as Le, r as $, c as P, a as te, o as N, b as $t, e as Bt, f as x, g as jt, w as Dt, v as It, h as zt, j as _e, F as Ee, k as ze, m as Mt, t as Y, l as Me, n as qt, p as Ht } from "./runtime-dom.esm-bundler-DZd8NbRC.js";
const Jt = /* @__PURE__ */ Symbol("");
function Vt() {
  return Ut(Jt);
}
function ot(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Wt } = Object.prototype, { getPrototypeOf: Fe } = Object, { iterator: me, toStringTag: it } = Symbol, ye = /* @__PURE__ */ ((e) => (t) => {
  const n = Wt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), j = (e) => (e = e.toLowerCase(), (t) => ye(t) === e), be = (e) => (t) => typeof t === e, { isArray: G } = Array, X = be("undefined");
function ne(e) {
  return e !== null && !X(e) && e.constructor !== null && !X(e.constructor) && L(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const at = j("ArrayBuffer");
function Kt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && at(e.buffer), t;
}
const Xt = be("string"), L = be("function"), lt = be("number"), re = (e) => e !== null && typeof e == "object", Gt = (e) => e === !0 || e === !1, ue = (e) => {
  if (ye(e) !== "object")
    return !1;
  const t = Fe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(it in e) && !(me in e);
}, Zt = (e) => {
  if (!re(e) || ne(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Qt = j("Date"), Yt = j("File"), en = j("Blob"), tn = j("FileList"), nn = (e) => re(e) && L(e.pipe), rn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || L(e.append) && ((t = ye(e)) === "formdata" || // detect form-data instance
  t === "object" && L(e.toString) && e.toString() === "[object FormData]"));
}, sn = j("URLSearchParams"), [on, an, ln, cn] = ["ReadableStream", "Request", "Response", "Headers"].map(j), un = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function ct(e, t) {
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
const H = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ut = (e) => !X(e) && e !== H;
function Te() {
  const { caseless: e, skipUndefined: t } = ut(this) && this || {}, n = {}, r = (s, o) => {
    const i = e && ct(n, o) || o;
    ue(n[i]) && ue(s) ? n[i] = Te(n[i], s) : ue(s) ? n[i] = Te({}, s) : G(s) ? n[i] = s.slice() : (!t || !X(s)) && (n[i] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && se(arguments[s], r);
  return n;
}
const dn = (e, t, n, { allOwnKeys: r } = {}) => (se(t, (s, o) => {
  n && L(s) ? e[o] = ot(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), fn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), pn = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, hn = (e, t, n, r) => {
  let s, o, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Fe(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, mn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, yn = (e) => {
  if (!e) return null;
  if (G(e)) return e;
  let t = e.length;
  if (!lt(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, bn = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Fe(Uint8Array)), gn = (e, t) => {
  const r = (e && e[me]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, wn = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, xn = j("HTMLFormElement"), _n = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), qe = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), En = j("RegExp"), dt = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  se(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Sn = (e) => {
  dt(e, (t, n) => {
    if (L(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (L(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Rn = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return G(e) ? r(e) : r(String(e).split(t)), n;
}, On = () => {
}, kn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Tn(e) {
  return !!(e && L(e.append) && e[it] === "FormData" && e[me]);
}
const vn = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (re(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (ne(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = G(r) ? [] : {};
        return se(r, (i, a) => {
          const f = n(i, s + 1);
          !X(f) && (o[a] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, An = j("AsyncFunction"), Cn = (e) => e && (re(e) || L(e)) && L(e.then) && L(e.catch), ft = ((e, t) => e ? setImmediate : t ? ((n, r) => (H.addEventListener("message", ({ source: s, data: o }) => {
  s === H && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), H.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  L(H.postMessage)
), Nn = typeof queueMicrotask < "u" ? queueMicrotask.bind(H) : typeof process < "u" && process.nextTick || ft, Pn = (e) => e != null && L(e[me]), l = {
  isArray: G,
  isArrayBuffer: at,
  isBuffer: ne,
  isFormData: rn,
  isArrayBufferView: Kt,
  isString: Xt,
  isNumber: lt,
  isBoolean: Gt,
  isObject: re,
  isPlainObject: ue,
  isEmptyObject: Zt,
  isReadableStream: on,
  isRequest: an,
  isResponse: ln,
  isHeaders: cn,
  isUndefined: X,
  isDate: Qt,
  isFile: Yt,
  isBlob: en,
  isRegExp: En,
  isFunction: L,
  isStream: nn,
  isURLSearchParams: sn,
  isTypedArray: bn,
  isFileList: tn,
  forEach: se,
  merge: Te,
  extend: dn,
  trim: un,
  stripBOM: fn,
  inherits: pn,
  toFlatObject: hn,
  kindOf: ye,
  kindOfTest: j,
  endsWith: mn,
  toArray: yn,
  forEachEntry: gn,
  matchAll: wn,
  isHTMLForm: xn,
  hasOwnProperty: qe,
  hasOwnProp: qe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: dt,
  freezeMethods: Sn,
  toObjectSet: Rn,
  toCamelCase: _n,
  noop: On,
  toFiniteNumber: kn,
  findKey: ct,
  global: H,
  isContextDefined: ut,
  isSpecCompliantForm: Tn,
  toJSONObject: vn,
  isAsyncFn: An,
  isThenable: Cn,
  setImmediate: ft,
  asap: Nn,
  isIterable: Pn
};
function b(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
l.inherits(b, Error, {
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
      config: l.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const pt = b.prototype, ht = {};
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
  ht[e] = { value: e };
});
Object.defineProperties(b, ht);
Object.defineProperty(pt, "isAxiosError", { value: !0 });
b.from = (e, t, n, r, s, o) => {
  const i = Object.create(pt);
  l.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (c) => c !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", f = t == null && e ? e.code : t;
  return b.call(i, a, f, n, r, s), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", o && Object.assign(i, o), i;
};
const Ln = null;
function ve(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function mt(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function He(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = mt(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Fn(e) {
  return l.isArray(e) && !e.some(ve);
}
const Un = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ge(e, t, n) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = l.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, h) {
    return !l.isUndefined(h[y]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null) return "";
    if (l.isDate(d))
      return d.toISOString();
    if (l.isBoolean(d))
      return d.toString();
    if (!f && l.isBlob(d))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(d) || l.isTypedArray(d) ? f && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function u(d, y, h) {
    let E = d;
    if (d && !h && typeof d == "object") {
      if (l.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), d = JSON.stringify(d);
      else if (l.isArray(d) && Fn(d) || (l.isFileList(d) || l.endsWith(y, "[]")) && (E = l.toArray(d)))
        return y = mt(y), E.forEach(function(O, T) {
          !(l.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? He([y], T, o) : i === null ? y : y + "[]",
            c(O)
          );
        }), !1;
    }
    return ve(d) ? !0 : (t.append(He(h, y, o), c(d)), !1);
  }
  const p = [], g = Object.assign(Un, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: ve
  });
  function R(d, y) {
    if (!l.isUndefined(d)) {
      if (p.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      p.push(d), l.forEach(d, function(E, A) {
        (!(l.isUndefined(E) || E === null) && s.call(
          t,
          E,
          l.isString(A) ? A.trim() : A,
          y,
          g
        )) === !0 && R(E, y ? y.concat(A) : [A]);
      }), p.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return R(e), t;
}
function Je(e) {
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
function Ue(e, t) {
  this._pairs = [], e && ge(e, this, t);
}
const yt = Ue.prototype;
yt.append = function(t, n) {
  this._pairs.push([t, n]);
};
yt.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Je);
  } : Je;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function $n(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function bt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || $n;
  l.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = l.isURLSearchParams(t) ? t.toString() : new Ue(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ve {
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
    l.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const gt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Bn = typeof URLSearchParams < "u" ? URLSearchParams : Ue, jn = typeof FormData < "u" ? FormData : null, Dn = typeof Blob < "u" ? Blob : null, In = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Bn,
    FormData: jn,
    Blob: Dn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, $e = typeof window < "u" && typeof document < "u", Ae = typeof navigator == "object" && navigator || void 0, zn = $e && (!Ae || ["ReactNative", "NativeScript", "NS"].indexOf(Ae.product) < 0), Mn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", qn = $e && window.location.href || "http://localhost", Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: $e,
  hasStandardBrowserEnv: zn,
  hasStandardBrowserWebWorkerEnv: Mn,
  navigator: Ae,
  origin: qn
}, Symbol.toStringTag, { value: "Module" })), v = {
  ...Hn,
  ...In
};
function Jn(e, t) {
  return ge(e, new v.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return v.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Vn(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Wn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function wt(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), f = o >= n.length;
    return i = !i && l.isArray(s) ? s.length : i, f ? (l.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !l.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && l.isArray(s[i]) && (s[i] = Wn(s[i])), !a);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const n = {};
    return l.forEachEntry(e, (r, s) => {
      t(Vn(r), s, n, 0);
    }), n;
  }
  return null;
}
function Kn(e, t, n) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const oe = {
  transitional: gt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = l.isObject(t);
    if (o && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return s ? JSON.stringify(wt(t)) : t;
    if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t) || l.isReadableStream(t))
      return t;
    if (l.isArrayBufferView(t))
      return t.buffer;
    if (l.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Jn(t, this.formSerializer).toString();
      if ((a = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ge(
          a ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Kn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || oe.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (l.isResponse(t) || l.isReadableStream(t))
      return t;
    if (t && l.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? b.from(a, b.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
l.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  oe.headers[e] = {};
});
const Xn = l.toObjectSet([
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
]), Gn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Xn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, We = /* @__PURE__ */ Symbol("internals");
function ee(e) {
  return e && String(e).trim().toLowerCase();
}
function de(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(de) : String(e);
}
function Zn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Qn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Se(e, t, n, r, s) {
  if (l.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!l.isString(t)) {
    if (l.isString(r))
      return t.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(t);
  }
}
function Yn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function er(e, t) {
  const n = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let F = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, f, c) {
      const u = ee(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = l.findKey(s, u);
      (!p || s[p] === void 0 || c === !0 || c === void 0 && s[p] !== !1) && (s[p || f] = de(a));
    }
    const i = (a, f) => l.forEach(a, (c, u) => o(c, u, f));
    if (l.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (l.isString(t) && (t = t.trim()) && !Qn(t))
      i(Gn(t), n);
    else if (l.isObject(t) && l.isIterable(t)) {
      let a = {}, f, c;
      for (const u of t) {
        if (!l.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[c = u[0]] = (f = a[c]) ? l.isArray(f) ? [...f, u[1]] : [f, u[1]] : u[1];
      }
      i(a, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = ee(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Zn(s);
        if (l.isFunction(n))
          return n.call(this, s, r);
        if (l.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ee(t), t) {
      const r = l.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Se(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = ee(i), i) {
        const a = l.findKey(r, i);
        a && (!n || Se(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return l.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Se(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return l.forEach(this, (s, o) => {
      const i = l.findKey(r, o);
      if (i) {
        n[i] = de(s), delete n[o];
        return;
      }
      const a = t ? Yn(o) : String(o).trim();
      a !== o && delete n[o], n[a] = de(s), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && l.isArray(r) ? r.join(", ") : r);
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
    const r = (this[We] = this[We] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = ee(i);
      r[a] || (er(s, i), r[a] = !0);
    }
    return l.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
F.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.reduceDescriptors(F.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
l.freezeMethods(F);
function Re(e, t) {
  const n = this || oe, r = t || n, s = F.from(r.headers);
  let o = r.data;
  return l.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function xt(e) {
  return !!(e && e.__CANCEL__);
}
function Z(e, t, n) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n), this.name = "CanceledError";
}
l.inherits(Z, b, {
  __CANCEL__: !0
});
function _t(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new b(
    "Request failed with status code " + n.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
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
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const c = Date.now(), u = r[o];
    i || (i = c), n[s] = f, r[s] = c;
    let p = o, g = 0;
    for (; p !== s; )
      g += n[p++], p = p % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - i < t)
      return;
    const R = u && c - u;
    return R ? Math.round(g * 1e3 / R) : void 0;
  };
}
function rr(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (c, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), e(...c);
  };
  return [(...c) => {
    const u = Date.now(), p = u - n;
    p >= r ? i(c, u) : (s = c, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - p)));
  }, () => s && i(s)];
}
const pe = (e, t, n = 3) => {
  let r = 0;
  const s = nr(50, 250);
  return rr((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, f = i - r, c = s(f), u = i <= a;
    r = i;
    const p = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: f,
      rate: c || void 0,
      estimated: c && a && u ? (a - i) / c : void 0,
      event: o,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, n);
}, Ke = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Xe = (e) => (...t) => l.asap(() => e(...t)), sr = v.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, v.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(v.origin),
  v.navigator && /(msie|trident)/i.test(v.navigator.userAgent)
) : () => !0, or = v.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o, i) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      l.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), l.isString(r) && a.push(`path=${r}`), l.isString(s) && a.push(`domain=${s}`), o === !0 && a.push("secure"), l.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ");
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
function Et(e, t, n) {
  let r = !ir(t);
  return e && (r || n == !1) ? ar(e, t) : t;
}
const Ge = (e) => e instanceof F ? { ...e } : e;
function V(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, p, g) {
    return l.isPlainObject(c) && l.isPlainObject(u) ? l.merge.call({ caseless: g }, c, u) : l.isPlainObject(u) ? l.merge({}, u) : l.isArray(u) ? u.slice() : u;
  }
  function s(c, u, p, g) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(c))
        return r(void 0, c, p, g);
    } else return r(c, u, p, g);
  }
  function o(c, u) {
    if (!l.isUndefined(u))
      return r(void 0, u);
  }
  function i(c, u) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function a(c, u, p) {
    if (p in t)
      return r(c, u);
    if (p in e)
      return r(void 0, c);
  }
  const f = {
    url: o,
    method: o,
    data: o,
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
    validateStatus: a,
    headers: (c, u, p) => s(Ge(c), Ge(u), p, !0)
  };
  return l.forEach(Object.keys({ ...e, ...t }), function(u) {
    const p = f[u] || s, g = p(e[u], t[u], u);
    l.isUndefined(g) && p !== a || (n[u] = g);
  }), n;
}
const St = (e) => {
  const t = V({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = t;
  if (t.headers = i = F.from(i), t.url = bt(Et(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), l.isFormData(n)) {
    if (v.hasStandardBrowserEnv || v.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (l.isFunction(n.getHeaders)) {
      const f = n.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(f).forEach(([u, p]) => {
        c.includes(u.toLowerCase()) && i.set(u, p);
      });
    }
  }
  if (v.hasStandardBrowserEnv && (r && l.isFunction(r) && (r = r(t)), r || r !== !1 && sr(t.url))) {
    const f = s && o && or.read(o);
    f && i.set(s, f);
  }
  return t;
}, lr = typeof XMLHttpRequest < "u", cr = lr && function(e) {
  return new Promise(function(n, r) {
    const s = St(e);
    let o = s.data;
    const i = F.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: f, onDownloadProgress: c } = s, u, p, g, R, d;
    function y() {
      R && R(), d && d(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function E() {
      if (!h)
        return;
      const O = F.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), U = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: O,
        config: e,
        request: h
      };
      _t(function(C) {
        n(C), y();
      }, function(C) {
        r(C), y();
      }, U), h = null;
    }
    "onloadend" in h ? h.onloadend = E : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, h.onabort = function() {
      h && (r(new b("Request aborted", b.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(T) {
      const U = T && T.message ? T.message : "Network Error", D = new b(U, b.ERR_NETWORK, e, h);
      D.event = T || null, r(D), h = null;
    }, h.ontimeout = function() {
      let T = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const U = s.transitional || gt;
      s.timeoutErrorMessage && (T = s.timeoutErrorMessage), r(new b(
        T,
        U.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        e,
        h
      )), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && l.forEach(i.toJSON(), function(T, U) {
      h.setRequestHeader(U, T);
    }), l.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), a && a !== "json" && (h.responseType = s.responseType), c && ([g, d] = pe(c, !0), h.addEventListener("progress", g)), f && h.upload && ([p, R] = pe(f), h.upload.addEventListener("progress", p), h.upload.addEventListener("loadend", R)), (s.cancelToken || s.signal) && (u = (O) => {
      h && (r(!O || O.type ? new Z(null, e, h) : O), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const A = tr(s.url);
    if (A && v.protocols.indexOf(A) === -1) {
      r(new b("Unsupported protocol " + A + ":", b.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(o || null);
  });
}, ur = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(c) {
      if (!s) {
        s = !0, a();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof b ? u : new Z(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new b(`timeout ${t} of ms exceeded`, b.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: f } = r;
    return f.unsubscribe = () => l.asap(a), f;
  }
}, dr = function* (e, t) {
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
    yield* dr(n, t);
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
}, Ze = (e, t, n, r) => {
  const s = fr(e, t);
  let o = 0, i, a = (f) => {
    i || (i = !0, r && r(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: c, value: u } = await s.next();
        if (c) {
          a(), f.close();
          return;
        }
        let p = u.byteLength;
        if (n) {
          let g = o += p;
          n(g);
        }
        f.enqueue(new Uint8Array(u));
      } catch (c) {
        throw a(c), c;
      }
    },
    cancel(f) {
      return a(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Qe = 64 * 1024, { isFunction: ce } = l, hr = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(l.global), {
  ReadableStream: Ye,
  TextEncoder: et
} = l.global, tt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, mr = (e) => {
  e = l.merge.call({
    skipUndefined: !0
  }, hr, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? ce(t) : typeof fetch == "function", o = ce(n), i = ce(r);
  if (!s)
    return !1;
  const a = s && ce(Ye), f = s && (typeof et == "function" ? /* @__PURE__ */ ((d) => (y) => d.encode(y))(new et()) : async (d) => new Uint8Array(await new n(d).arrayBuffer())), c = o && a && tt(() => {
    let d = !1;
    const y = new n(v.origin, {
      body: new Ye(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !y;
  }), u = i && a && tt(() => l.isReadableStream(new r("").body)), p = {
    stream: u && ((d) => d.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !p[d] && (p[d] = (y, h) => {
      let E = y && y[d];
      if (E)
        return E.call(y);
      throw new b(`Response type '${d}' is not supported`, b.ERR_NOT_SUPPORT, h);
    });
  });
  const g = async (d) => {
    if (d == null)
      return 0;
    if (l.isBlob(d))
      return d.size;
    if (l.isSpecCompliantForm(d))
      return (await new n(v.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (l.isArrayBufferView(d) || l.isArrayBuffer(d))
      return d.byteLength;
    if (l.isURLSearchParams(d) && (d = d + ""), l.isString(d))
      return (await f(d)).byteLength;
  }, R = async (d, y) => {
    const h = l.toFiniteNumber(d.getContentLength());
    return h ?? g(y);
  };
  return async (d) => {
    let {
      url: y,
      method: h,
      data: E,
      signal: A,
      cancelToken: O,
      timeout: T,
      onDownloadProgress: U,
      onUploadProgress: D,
      responseType: C,
      headers: Q,
      withCredentials: W = "same-origin",
      fetchOptions: ie
    } = St(d), _ = t || fetch;
    C = C ? (C + "").toLowerCase() : "text";
    let m = ur([A, O && O.toAbortSignal()], T), w = null;
    const B = m && m.unsubscribe && (() => {
      m.unsubscribe();
    });
    let ae;
    try {
      if (D && c && h !== "get" && h !== "head" && (ae = await R(Q, E)) !== 0) {
        let q = new n(y, {
          method: "POST",
          body: E,
          duplex: "half"
        }), K;
        if (l.isFormData(E) && (K = q.headers.get("content-type")) && Q.setContentType(K), q.body) {
          const [xe, le] = Ke(
            ae,
            pe(Xe(D))
          );
          E = Ze(q.body, Qe, xe, le);
        }
      }
      l.isString(W) || (W = W ? "include" : "omit");
      const I = o && "credentials" in n.prototype, je = {
        ...ie,
        signal: m,
        method: h.toUpperCase(),
        headers: Q.normalize().toJSON(),
        body: E,
        duplex: "half",
        credentials: I ? W : void 0
      };
      w = o && new n(y, je);
      let M = await (o ? _(w, ie) : _(y, je));
      const De = u && (C === "stream" || C === "response");
      if (u && (U || De && B)) {
        const q = {};
        ["status", "statusText", "headers"].forEach((Ie) => {
          q[Ie] = M[Ie];
        });
        const K = l.toFiniteNumber(M.headers.get("content-length")), [xe, le] = U && Ke(
          K,
          pe(Xe(U), !0)
        ) || [];
        M = new r(
          Ze(M.body, Qe, xe, () => {
            le && le(), B && B();
          }),
          q
        );
      }
      C = C || "text";
      let Ft = await p[l.findKey(p, C) || "text"](M, d);
      return !De && B && B(), await new Promise((q, K) => {
        _t(q, K, {
          data: Ft,
          headers: F.from(M.headers),
          status: M.status,
          statusText: M.statusText,
          config: d,
          request: w
        });
      });
    } catch (I) {
      throw B && B(), I && I.name === "TypeError" && /Load failed|fetch/i.test(I.message) ? Object.assign(
        new b("Network Error", b.ERR_NETWORK, d, w),
        {
          cause: I.cause || I
        }
      ) : b.from(I, I && I.code, d, w);
    }
  };
}, yr = /* @__PURE__ */ new Map(), Rt = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, o = [
    r,
    s,
    n
  ];
  let i = o.length, a = i, f, c, u = yr;
  for (; a--; )
    f = o[a], c = u.get(f), c === void 0 && u.set(f, c = a ? /* @__PURE__ */ new Map() : mr(t)), u = c;
  return c;
};
Rt();
const Be = {
  http: Ln,
  xhr: cr,
  fetch: {
    get: Rt
  }
};
l.forEach(Be, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nt = (e) => `- ${e}`, br = (e) => l.isFunction(e) || e === null || e === !1;
function gr(e, t) {
  e = l.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const o = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let a;
    if (s = r, !br(r) && (s = Be[(a = String(r)).toLowerCase()], s === void 0))
      throw new b(`Unknown adapter '${a}'`);
    if (s && (l.isFunction(s) || (s = s.get(t))))
      break;
    o[a || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(o).map(
      ([f, c]) => `adapter ${f} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? i.length > 1 ? `since :
` + i.map(nt).join(`
`) : " " + nt(i[0]) : "as no adapter specified";
    throw new b(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Ot = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: gr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Be
};
function Oe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Z(null, e);
}
function rt(e) {
  return Oe(e), e.headers = F.from(e.headers), e.data = Re.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ot.getAdapter(e.adapter || oe.adapter, e)(e).then(function(r) {
    return Oe(e), r.data = Re.call(
      e,
      e.transformResponse,
      r
    ), r.headers = F.from(r.headers), r;
  }, function(r) {
    return xt(r) || (Oe(e), r && r.response && (r.response.data = Re.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = F.from(r.response.headers))), Promise.reject(r);
  });
}
const kt = "1.13.2", we = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  we[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const st = {};
we.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + kt + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new b(
        s(i, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return n && !st[i] && (st[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
we.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function wr(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const a = e[o], f = a === void 0 || i(a, o, e);
      if (f !== !0)
        throw new b("option " + o + " must be " + f, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new b("Unknown option " + o, b.ERR_BAD_OPTION);
  }
}
const fe = {
  assertOptions: wr,
  validators: we
}, z = fe.validators;
let J = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ve(),
      response: new Ve()
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
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = V(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && fe.assertOptions(r, {
      silentJSONParsing: z.transitional(z.boolean),
      forcedJSONParsing: z.transitional(z.boolean),
      clarifyTimeoutError: z.transitional(z.boolean)
    }, !1), s != null && (l.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : fe.assertOptions(s, {
      encode: z.function,
      serialize: z.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), fe.assertOptions(n, {
      baseUrl: z.spelling("baseURL"),
      withXsrfToken: z.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && l.merge(
      o.common,
      o[n.method]
    );
    o && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete o[d];
      }
    ), n.headers = F.concat(i, o);
    const a = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (f = f && y.synchronous, a.unshift(y.fulfilled, y.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(y) {
      c.push(y.fulfilled, y.rejected);
    });
    let u, p = 0, g;
    if (!f) {
      const d = [rt.bind(this), void 0];
      for (d.unshift(...a), d.push(...c), g = d.length, u = Promise.resolve(n); p < g; )
        u = u.then(d[p++], d[p++]);
      return u;
    }
    g = a.length;
    let R = n;
    for (; p < g; ) {
      const d = a[p++], y = a[p++];
      try {
        R = d(R);
      } catch (h) {
        y.call(this, h);
        break;
      }
    }
    try {
      u = rt.call(this, R);
    } catch (d) {
      return Promise.reject(d);
    }
    for (p = 0, g = c.length; p < g; )
      u = u.then(c[p++], c[p++]);
    return u;
  }
  getUri(t) {
    t = V(this.defaults, t);
    const n = Et(t.baseURL, t.url, t.allowAbsoluteUrls);
    return bt(n, t.params, t.paramsSerializer);
  }
};
l.forEach(["delete", "get", "head", "options"], function(t) {
  J.prototype[t] = function(n, r) {
    return this.request(V(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, a) {
      return this.request(V(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  J.prototype[t] = n(), J.prototype[t + "Form"] = n(!0);
});
let xr = class Tt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, a) {
      r.reason || (r.reason = new Z(o, i, a), n(r.reason));
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
      token: new Tt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function _r(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Er(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const Ce = {
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
Object.entries(Ce).forEach(([e, t]) => {
  Ce[t] = e;
});
function vt(e) {
  const t = new J(e), n = ot(J.prototype.request, t);
  return l.extend(n, J.prototype, t, { allOwnKeys: !0 }), l.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return vt(V(e, s));
  }, n;
}
const S = vt(oe);
S.Axios = J;
S.CanceledError = Z;
S.CancelToken = xr;
S.isCancel = xt;
S.VERSION = kt;
S.toFormData = ge;
S.AxiosError = b;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = _r;
S.isAxiosError = Er;
S.mergeConfig = V;
S.AxiosHeaders = F;
S.formToJSON = (e) => wt(l.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = Ot.getAdapter;
S.HttpStatusCode = Ce;
S.default = S;
const {
  Axios: is,
  AxiosError: as,
  CanceledError: ls,
  isCancel: cs,
  CancelToken: us,
  VERSION: ds,
  all: fs,
  Cancel: ps,
  isAxiosError: hs,
  spread: ms,
  toFormData: ys,
  AxiosHeaders: bs,
  HttpStatusCode: gs,
  formToJSON: ws,
  getAdapter: xs,
  mergeConfig: _s
} = S, Ne = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), At = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), Ct = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, n = document.getElementById(e.el_id);
      if (!n)
        throw new Error("[el_id] is invalid");
      ((r) => {
        const s = (o) => {
          ((i) => {
            const a = i.getAttribute("data-ce");
            if (!a)
              return;
            const f = JSON.parse(a).filter((c) => c?.k.startsWith("t-"));
            if (f.length != 0)
              for (const c of f) {
                const u = c.k, p = c.v.split(" ");
                if (u == `t-${t}-class`)
                  for (const g of p)
                    i.classList.add(g);
                else
                  for (const g of p)
                    i.classList.remove(g);
              }
          })(o);
        };
        for (const o of r.getElementsByTagName("*"))
          s(o);
        s(r);
      })(n);
    } catch (t) {
      const n = `err: [theme] ${t}`;
      throw console.log(n), n;
    }
  }
});
function Pe(e, t = 1e3) {
  let n = {
    cnt: 0
  };
  return new Promise((r) => {
    const s = () => {
      console.log(`[setInterval] is running.. [count=${n.cnt}]`);
      try {
        e() && (clearInterval(o), r());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      n.cnt += 1;
    }, o = setInterval(() => {
      s();
    }, t);
    s();
  });
}
let Sr = class {
  listeners = {};
  on = (e, t) => ((this.listeners[e] ||= []).push(t), () => this.off(e, t));
  off = (e, t) => {
    this.listeners[e] = this.listeners[e]?.filter((n) => n !== t);
  };
  /** Sequential execution (await each listener) */
  emit = async (e, ...t) => {
    for (const n of this.listeners[e] ?? [])
      await n(...t);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (e, ...t) => {
    await Promise.all(
      (this.listeners[e] ?? []).map((n) => n(...t))
    );
  };
  //Error-safe emit
  emitSafe = async (e, ...t) => {
    for (const n of this.listeners[e] ?? [])
      try {
        await n(...t);
      } catch (r) {
        this.listeners.error?.forEach(
          (s) => s(r)
        );
      }
  };
};
const he = () => new Sr();
class Nt {
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
let k = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [n, r] of t.entries()) {
        const s = r, o = `${s.name}:${e.run_from}`, i = `${e.run_from}_src`;
        let a = s[i];
        const f = `${e.run_from}_src`;
        let c = e?.lazy_lib?.[f] || null;
        if (c && (c = c.replace("{*}", `${s.name}`)), console.log(`_lazy_src: ${c}`), console.log(`_src: ${a}`), k.lib.l.hasOwnProperty(`${o}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(a) && a.includes("/") == !1 && k.lib.inbuilt_lib.indexOf(`${s.name}`) === -1)
            if (c)
              a = c;
            else
              throw `[lib-name=${s.name},lib-src=${a}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (a.startsWith("./") || a.startsWith("../")) {
            const u = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${a}`
            );
            k.lib.l[`${o}`] = {
              lib: u,
              src: a
            };
          }
          if (a.startsWith("http://") || a.startsWith("https://")) {
            const u = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${a}`
            );
            k.lib.l[`${o}`] = {
              lib: u,
              src: a
            };
          }
        }
      }
      console.log(await k.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const n = `${e.name}:${e.run_from}`;
      return k.lib.l.hasOwnProperty(`${n}`) == !1 && await k.lib.set({
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
      }), t = k.lib.l[`${n}`], t;
    },
    get_all: async (e) => k.lib.l
  },
  path: {
    set: (e) => {
      let t = "", n = "";
      const r = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (n = "/dist"), r.indexOf(e.type) !== -1)
        for (const [s, o] of r.entries()) {
          let i = s == 0 ? "" : "/";
          if (t += `${i}${o}`, o == e.type)
            return `${t}${n}${e.name}`;
        }
      else
        for (const [s, o] of r.entries()) {
          let i = s == 0 ? "" : "/";
          if (t += `${i}${o}`, o == "src")
            return `${t}${n}${e.name}`;
        }
      return `${t}${n}${e.name}`;
    }
  }
};
const Pt = he(), Lt = he(), Rr = Pt.on, Or = Pt.emit, kr = Lt.emit;
Lt.on;
const Tr = async (e) => {
  const t = await At();
  return await k.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--renderer [set]"), n.return = n?.return || {}, n.return.r = n?.return?.r || "full";
      const r = new Nt();
      r.start();
      let s = n.data?.value?.l || n.data.l, o = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return n.return.r == "full" ? o.r = "" : o.r = [], await (async () => {
        for (const i of s) {
          const a = await await k.lib.get({ name: i.type, run_from: "renderer", lazy_lib: e.lazy_lib }), f = await (await a.lib.index({
            f: {
              name: (c) => t.f.name({ id: i.id, name: c }),
              get_lib: async (c) => await await k.lib.get({ name: c.name, run_from: c.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (c) => await (await Ct()).set(c),
              path: (c) => k.path.set({ src: a.src, type: i.type, name: c }),
              //set..
              uuid: () => Ne().set(),
              wait_until: Pe
            }
          })).set(
            {
              data: {
                curr: i
              }
            }
            /*_$cb*/
          );
          n?.return?.r == "full" ? o.r += f?.r || "" : o.r.push(f?.r || ""), o.style += f?.style || "", o.head += f?.head || "";
        }
      })(), r.stop(), o.benchmark = r.result(), o;
    }
  };
}, vr = async (e) => {
  const t = await At();
  return await k.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--hydrator [set]");
      const r = new Nt();
      r.start();
      let s = {
        r: "",
        style: ""
      }, o = {
        style_id: `${Ne().set()}_stl`
      }, i = n.data?.value?.l || n.data.l;
      const a = async () => {
        for (const f of i) {
          const c = await await k.lib.get({ name: f.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), u = c.lib, p = he(), g = p.on, R = await (await u.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (d) => t.f.name({ id: f.id, name: d }),
              get_lib: async (d) => await await k.lib.get({ name: d.name, run_from: d.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (d) => await (await Ct()).set(d),
              path: (d) => k.path.set({ src: c.src, type: f.type, name: d }),
              //set..
              uuid: () => Ne().set(),
              wait_until: Pe,
              //set..
              call: kr,
              listen: g,
              //set..
              new_emitter: () => he()
            }
          })).set(
            {
              data: {
                curr: f
              }
            }
            /*_$cb*/
          );
          Rr("msg", async (d) => {
            try {
              if (Object.keys(d.where || {}).length == 0) {
                await p.emit("msg", d);
                return;
              }
            } catch {
            }
            try {
              if (f?.[d.where?.key || ""] == d.where?.value) {
                await p.emit("msg", d);
                return;
              }
            } catch {
            }
          }), s.style += R.style;
        }
      };
      await Pe(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await a();
      try {
        ((f) => {
          const c = document.getElementById(`${o.style_id}`);
          c && c.remove();
          const u = document.createElement("style");
          u.id = `${o.style_id}`, u.innerHTML = `${s.style}`, f.appendChild(u);
        })(document.head);
      } catch (f) {
        console.log(`${f}, Failed to set style..`);
      }
      return r.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: r.result()
      };
    }
  };
}, Ar = ["innerHTML"], Cr = /* @__PURE__ */ Le({
  __name: "ContentEngine",
  props: {
    ce_file: {}
  },
  setup(e, { expose: t }) {
    const n = $({
      ce_file: e.ce_file
      //route?.meta?.ce_file,
    });
    t({
      ce_call: Or
    });
    const r = $(null), s = $(null);
    let o = "";
    return (async () => {
      try {
        if (typeof n.value.ce_file == "string") {
          const g = await (await fetch(n.value.ce_file)).json();
          r.value = g;
        } else
          r.value = n.value.ce_file;
      } catch (p) {
        console.log(p);
        return;
      }
      let i = {
        l: [
          {
            id: "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
            type: "text",
            data: {
              data: "Loading.."
            }
          }
        ]
      }, a = {
        lib: [],
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"
        }
      };
      i = r.value.data, a.lazy_lib = r.value.config.lazy_lib;
      const f = await Tr(a), c = await vr(a);
      await (async () => {
        const p = await f.set({
          data: i
        });
        s.value = p.r, o = p.style;
        const g = document.createElement("style");
        document.head.appendChild(g), g.innerHTML = o, setTimeout(async () => {
          await c.set({
            data: i
          });
        }, 10);
      })();
    })(), (i, a) => s.value ? (N(), P("div", {
      key: 0,
      innerHTML: s.value
    }, null, 8, Ar)) : te("", !0);
  }
}), Nr = { class: "bg-gray-50 dark:bg-[#0b1120] min-h-screen pb-20 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-blue-100 selection:text-blue-900" }, Pr = { class: "sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-800/50 transition-all duration-300" }, Lr = { class: "max-w-[1440px] mx-auto px-4 py-3 md:px-8 md:py-4 flex gap-4 items-center" }, Fr = {
  class: "flex-1 relative group",
  role: "search"
}, Ur = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, $r = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, Br = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-[1440px] mx-auto px-4 md:px-8 my-8"
}, jr = {
  key: 1,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 max-w-[1440px] mx-auto px-4 md:px-8 my-8 list-none"
}, Dr = ["onClick"], Ir = { class: "p-2 md:p-2.5 pb-0" }, zr = { class: "aspect-[4/5] relative bg-[#f4f6f8] dark:bg-slate-800 rounded-xl overflow-hidden" }, Mr = ["src", "alt"], qr = {
  key: 0,
  class: "absolute bottom-2 left-2 bg-red-500 text-white text-[10px] md:text-xs px-2 py-0.5 rounded-md font-bold shadow-sm"
}, Hr = { class: "p-3 md:p-4 flex flex-col flex-1 gap-1" }, Jr = { class: "flex items-baseline gap-2 mb-1" }, Vr = { class: "text-lg md:text-xl font-black text-slate-900 dark:text-white leading-none" }, Wr = {
  key: 0,
  class: "text-xs text-slate-400 line-through decoration-slate-400/50"
}, Kr = { class: "text-[11px] font-bold text-slate-400 uppercase tracking-wider" }, Xr = { class: "text-[13px] leading-snug text-slate-700 dark:text-slate-300 font-medium line-clamp-2 min-h-[2.5em]" }, Gr = ["onClick"], Zr = {
  key: 2,
  class: "flex flex-col items-center justify-center py-20 px-4"
}, Qr = {
  key: 0,
  class: "flex gap-2"
}, Yr = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=view_product", es = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", ke = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500", ts = /* @__PURE__ */ Le({
  __name: "productsearch",
  setup(e) {
    const t = Vt(), n = $(""), r = $([]), s = $(!1), o = $(!0), i = $(!1), a = $(1), f = $(!0), c = $(null);
    let u = null;
    const p = $(null), g = $({
      cart_popup: {
        ce_file: {
          config: {
            lazy_lib: {
              renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
              hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
              editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
            }
          },
          data: {
            l: [
              {
                id: "3e1bc78c-cart_popup",
                type: "cart_popup",
                slug: "cart_popup",
                data: {
                  data: "",
                  theme: "light",
                  env: "prod"
                  //dev, prod
                }
              }
            ]
          }
        }
      }
    }), R = () => {
      const _ = localStorage.getItem("theme");
      _ ? s.value = _ === "dark" : s.value = window.matchMedia("(prefers-color-scheme: dark)").matches, y();
    }, d = () => {
      s.value = !s.value, y(), localStorage.setItem("theme", s.value ? "dark" : "light");
    }, y = () => {
      s.value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, h = async () => {
      o.value = !0, r.value = [], a.value = 1, f.value = !0, await A(), o.value = !1;
    }, E = () => {
      n.value = "", document.getElementById("site-search")?.focus(), h();
    }, A = async () => {
      try {
        const _ = n.value.trim() === "" ? "fashion" : n.value.toLowerCase(), m = await S.post(
          Yr,
          { slug: _, collection: "products" },
          { headers: { Authorization: `Bearer ${es}` } }
        );
        if (m.data.success && m.data.data.length > 0) {
          await new Promise((B) => setTimeout(B, 500));
          const w = m.data.data;
          r.value.push(...w), r.value.length >= 40 && (f.value = !1);
        } else
          f.value = !1;
      } catch (_) {
        console.error(_), f.value = !1;
      }
    }, O = () => {
      u = new IntersectionObserver(async (_) => {
        _[0].isIntersecting && f.value && !o.value && !i.value && (i.value = !0, a.value++, await A(), i.value = !1);
      }, {
        rootMargin: "200px"
      }), c.value && u.observe(c.value);
    }, T = (_) => {
      try {
        const w = JSON.parse(_.metadata);
        if (w.color?.[0]?.image?.[0]?.url && !w.color[0].image[0].url.includes("example"))
          return w.color[0].image[0].url;
      } catch {
      }
      const m = _.title ? _.title.toLowerCase() : "";
      return m.includes("dress") ? "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500" : m.includes("shirt") || m.includes("top") ? "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" : m.includes("shoe") || m.includes("sneaker") ? "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" : m.includes("bag") ? "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" : ke;
    }, U = (_) => {
      const m = _.target;
      m.src !== ke && (m.src = ke);
    }, D = (_) => {
      const m = _.variant_prices[0], w = _.variant_mrp[0];
      return w > m ? Math.round((w - m) / w * 100) : 0;
    }, C = (_) => new Intl.NumberFormat("ru-RU").format(_), Q = (_) => {
      t.push({ path: `/product/${_}` });
    }, W = (_) => {
      p.value.ce_call("msg", {
        type: "product:open",
        custom: {
          product_id: _.document.id
        },
        _p: {},
        _$p: {}
      });
    }, ie = (_) => {
      const m = _.currentTarget;
      m.classList.toggle("text-red-500"), m.classList.toggle("bg-red-50");
    };
    return $t(() => {
      R(), h().then(() => {
        setTimeout(() => O(), 100);
      });
    }), Bt(() => {
      u && u.disconnect();
    }), (_, m) => (N(), P(Ee, null, [
      x("div", Nr, [
        x("header", Pr, [
          x("div", Lr, [
            x("div", Fr, [
              m[2] || (m[2] = x("svg", {
                class: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                x("circle", {
                  cx: "11",
                  cy: "11",
                  r: "8"
                }),
                x("line", {
                  x1: "21",
                  y1: "21",
                  x2: "16.65",
                  y2: "16.65"
                })
              ], -1)),
              Dt(x("input", {
                id: "site-search",
                "onUpdate:modelValue": m[0] || (m[0] = (w) => n.value = w),
                onKeyup: zt(h, ["enter"]),
                type: "text",
                placeholder: "Search premium brands, styles...",
                class: "w-full h-11 md:h-12 pl-12 pr-10 bg-gray-100 dark:bg-slate-800 border-2 border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 rounded-2xl text-[15px] outline-none transition-all duration-200 placeholder:text-slate-400 dark:text-white shadow-sm"
              }, null, 544), [
                [It, n.value]
              ]),
              n.value ? (N(), P("button", {
                key: 0,
                class: "absolute right-3 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-slate-700 text-slate-500 hover:text-red-500 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors",
                onClick: E
              }, "✕")) : te("", !0)
            ]),
            x("button", {
              class: "hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 active:scale-95 transition-all",
              onClick: h
            }, " SEARCH "),
            x("button", {
              onClick: d,
              class: "p-3 rounded-2xl bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors active:scale-95"
            }, [
              s.value ? (N(), P("svg", Ur, [...m[3] || (m[3] = [
                _e('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', 9)
              ])])) : (N(), P("svg", $r, [...m[4] || (m[4] = [
                x("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
              ])]))
            ])
          ])
        ]),
        o.value ? (N(), P("div", Br, [
          (N(), P(Ee, null, ze(10, (w) => x("div", {
            key: w,
            class: "bg-white dark:bg-[#1e293b] rounded-2xl p-3 shadow-sm border border-gray-100 dark:border-slate-800"
          }, [...m[5] || (m[5] = [
            _e('<div class="aspect-[4/5] bg-gray-200 dark:bg-slate-700 rounded-xl relative overflow-hidden mb-3"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div><div class="space-y-2"><div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/3"></div><div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full"></div><div class="h-8 bg-gray-200 dark:bg-slate-700 rounded-lg mt-2"></div></div>', 2)
          ])])), 64))
        ])) : r.value.length > 0 ? (N(), P("ul", jr, [
          (N(!0), P(Ee, null, ze(r.value, (w, B) => (N(), P("li", {
            key: w.document.id + B,
            class: "group bg-white dark:bg-[#1e293b] rounded-2xl flex flex-col relative cursor-pointer border border-transparent hover:border-blue-100 dark:hover:border-slate-600 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] dark:shadow-none dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300",
            onClick: (ae) => Q(w.document.slug)
          }, [
            x("div", Ir, [
              x("div", zr, [
                x("img", {
                  src: T(w.document),
                  loading: "lazy",
                  alt: w.document.title,
                  onError: U,
                  class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply dark:mix-blend-normal"
                }, null, 40, Mr),
                D(w.document) > 0 ? (N(), P("span", qr, " -" + Y(D(w.document)) + "% ", 1)) : te("", !0),
                x("button", {
                  class: "absolute top-2 right-2 w-8 h-8 rounded-full bg-white/70 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-white transition-all scale-0 group-hover:scale-100",
                  onClick: Me(ie, ["stop"])
                }, [...m[6] || (m[6] = [
                  x("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [
                    x("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
                  ], -1)
                ])])
              ])
            ]),
            x("div", Hr, [
              x("div", Jr, [
                x("span", Vr, Y(C(w.document.variant_prices[0])) + " ₽ ", 1),
                w.document.variant_mrp[0] > w.document.variant_prices[0] ? (N(), P("span", Wr, Y(C(w.document.variant_mrp[0])), 1)) : te("", !0)
              ]),
              m[8] || (m[8] = _e('<div class="flex items-center gap-2 mb-1.5"><span class="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-green-500"></span> Ozon Card </span><div class="flex items-center gap-1 text-[10px] text-slate-400"><span class="text-amber-400">★</span> 4.9 (128) </div></div>', 1)),
              x("div", Kr, Y(w.document.brand), 1),
              x("h3", Xr, Y(w.document.title), 1),
              x("button", {
                class: "mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group/btn",
                onClick: Me((ae) => W(w), ["stop"])
              }, [...m[7] || (m[7] = [
                x("span", null, "Add to Cart", -1),
                x("svg", {
                  class: "w-4 h-4 transition-transform group-hover/btn:translate-x-1",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  x("path", { d: "M5 12h14M12 5l7 7-7 7" })
                ], -1)
              ])], 8, Gr)
            ])
          ], 8, Dr))), 128))
        ])) : (N(), P("div", Zr, [
          m[9] || (m[9] = x("div", { class: "w-20 h-20 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-4" }, "🔍", -1)),
          m[10] || (m[10] = x("h3", { class: "text-xl font-bold text-slate-900 dark:text-white mb-2" }, "No results found", -1)),
          m[11] || (m[11] = x("p", { class: "text-slate-500 mb-6 text-center max-w-md" }, "We couldn't find anything matching your search. Try checking for typos or use broader keywords.", -1)),
          x("button", {
            class: "bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors",
            onClick: m[1] || (m[1] = (w) => {
              n.value = "puma", h();
            })
          }, "Clear Filters")
        ])),
        x("div", {
          ref_key: "sentinel",
          ref: c,
          class: "h-20 flex justify-center items-center w-full"
        }, [
          i.value ? (N(), P("div", Qr, [...m[12] || (m[12] = [
            x("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce" }, null, -1),
            x("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]" }, null, -1),
            x("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]" }, null, -1)
          ])])) : te("", !0)
        ], 512)
      ]),
      jt(Cr, Mt({
        ref_key: "cartPopupRef",
        ref: p
      }, {
        // _p:_p,
        //__p:_$p,
        ce_file: g.value.cart_popup.ce_file
      }), null, 16)
    ], 64));
  }
}), ns = /* @__PURE__ */ Le({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    return (t, n) => (N(), qt(ts, {
      __internal: {
        _p: e._p,
        _$p: e._$p,
        _$cb: e._$cb
      }
    }, null, 8, ["__internal"]));
  }
}), Es = async (e) => ({
  set: async (t, n) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const s = Ht(ns, {
      _p: e,
      _$p: t,
      _$cb: n
    }), o = e.f.name("vue-root"), i = {
      r: `<div id="${o}" style="width:100%; height:100%;"></div>`,
      style: "",
      evt: {
        change: () => {
          n?.change({ _$p: t });
        }
      }
    };
    return setTimeout(() => {
      const a = document.getElementById(o);
      a ? s.mount(a) : console.error(`Hydrator Error: Element #${o} not found.`);
    }, 0), i;
  }
});
export {
  Es as hydrator,
  Es as index
};
