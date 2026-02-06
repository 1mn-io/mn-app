import { i as Bt, d as Le, r as U, c as C, a as G, o as T, b as Ut, e as jt, f as w, g as Dt, w as It, v as Mt, h as zt, j as Se, F as Re, k as Me, m as ot, t as re, l as ze, n as qt, p as Ht } from "./runtime-dom.esm-bundler-DZd8NbRC.js";
const Jt = /* @__PURE__ */ Symbol("");
function Vt() {
  return Bt(Jt);
}
function it(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Wt } = Object.prototype, { getPrototypeOf: Be } = Object, { iterator: be, toStringTag: at } = Symbol, ge = /* @__PURE__ */ ((e) => (t) => {
  const n = Wt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), j = (e) => (e = e.toLowerCase(), (t) => ge(t) === e), we = (e) => (t) => typeof t === e, { isArray: Z } = Array, Q = we("undefined");
function oe(e) {
  return e !== null && !Q(e) && e.constructor !== null && !Q(e.constructor) && F(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const lt = j("ArrayBuffer");
function Kt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && lt(e.buffer), t;
}
const Xt = we("string"), F = we("function"), ct = we("number"), ie = (e) => e !== null && typeof e == "object", Gt = (e) => e === !0 || e === !1, fe = (e) => {
  if (ge(e) !== "object")
    return !1;
  const t = Be(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(at in e) && !(be in e);
}, Qt = (e) => {
  if (!ie(e) || oe(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Zt = j("Date"), Yt = j("File"), en = j("Blob"), tn = j("FileList"), nn = (e) => ie(e) && F(e.pipe), rn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || F(e.append) && ((t = ge(e)) === "formdata" || // detect form-data instance
  t === "object" && F(e.toString) && e.toString() === "[object FormData]"));
}, sn = j("URLSearchParams"), [on, an, ln, cn] = ["ReadableStream", "Request", "Response", "Headers"].map(j), un = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ae(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Z(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (oe(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function ut(e, t) {
  if (oe(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const H = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, dt = (e) => !Q(e) && e !== H;
function Ae() {
  const { caseless: e, skipUndefined: t } = dt(this) && this || {}, n = {}, r = (s, o) => {
    const i = e && ut(n, o) || o;
    fe(n[i]) && fe(s) ? n[i] = Ae(n[i], s) : fe(s) ? n[i] = Ae({}, s) : Z(s) ? n[i] = s.slice() : (!t || !Q(s)) && (n[i] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && ae(arguments[s], r);
  return n;
}
const dn = (e, t, n, { allOwnKeys: r } = {}) => (ae(t, (s, o) => {
  n && F(s) ? e[o] = it(s, n) : e[o] = s;
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
    e = n !== !1 && Be(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, mn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, yn = (e) => {
  if (!e) return null;
  if (Z(e)) return e;
  let t = e.length;
  if (!ct(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, bn = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Be(Uint8Array)), gn = (e, t) => {
  const r = (e && e[be]).call(e);
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
), qe = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), En = j("RegExp"), ft = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ae(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Sn = (e) => {
  ft(e, (t, n) => {
    if (F(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (F(r)) {
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
  return Z(e) ? r(e) : r(String(e).split(t)), n;
}, kn = () => {
}, vn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function On(e) {
  return !!(e && F(e.append) && e[at] === "FormData" && e[be]);
}
const Tn = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (ie(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (oe(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Z(r) ? [] : {};
        return ae(r, (i, a) => {
          const f = n(i, s + 1);
          !Q(f) && (o[a] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, An = j("AsyncFunction"), Cn = (e) => e && (ie(e) || F(e)) && F(e.then) && F(e.catch), pt = ((e, t) => e ? setImmediate : t ? ((n, r) => (H.addEventListener("message", ({ source: s, data: o }) => {
  s === H && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), H.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  F(H.postMessage)
), Nn = typeof queueMicrotask < "u" ? queueMicrotask.bind(H) : typeof process < "u" && process.nextTick || pt, Pn = (e) => e != null && F(e[be]), l = {
  isArray: Z,
  isArrayBuffer: lt,
  isBuffer: oe,
  isFormData: rn,
  isArrayBufferView: Kt,
  isString: Xt,
  isNumber: ct,
  isBoolean: Gt,
  isObject: ie,
  isPlainObject: fe,
  isEmptyObject: Qt,
  isReadableStream: on,
  isRequest: an,
  isResponse: ln,
  isHeaders: cn,
  isUndefined: Q,
  isDate: Zt,
  isFile: Yt,
  isBlob: en,
  isRegExp: En,
  isFunction: F,
  isStream: nn,
  isURLSearchParams: sn,
  isTypedArray: bn,
  isFileList: tn,
  forEach: ae,
  merge: Ae,
  extend: dn,
  trim: un,
  stripBOM: fn,
  inherits: pn,
  toFlatObject: hn,
  kindOf: ge,
  kindOfTest: j,
  endsWith: mn,
  toArray: yn,
  forEachEntry: gn,
  matchAll: wn,
  isHTMLForm: xn,
  hasOwnProperty: qe,
  hasOwnProp: qe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ft,
  freezeMethods: Sn,
  toObjectSet: Rn,
  toCamelCase: _n,
  noop: kn,
  toFiniteNumber: vn,
  findKey: ut,
  global: H,
  isContextDefined: dt,
  isSpecCompliantForm: On,
  toJSONObject: Tn,
  isAsyncFn: An,
  isThenable: Cn,
  setImmediate: pt,
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
const ht = b.prototype, mt = {};
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
  mt[e] = { value: e };
});
Object.defineProperties(b, mt);
Object.defineProperty(ht, "isAxiosError", { value: !0 });
b.from = (e, t, n, r, s, o) => {
  const i = Object.create(ht);
  l.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (c) => c !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", f = t == null && e ? e.code : t;
  return b.call(i, a, f, n, r, s), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", o && Object.assign(i, o), i;
};
const $n = null;
function Ce(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function yt(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function He(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = yt(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Fn(e) {
  return l.isArray(e) && !e.some(Ce);
}
const Ln = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function xe(e, t, n) {
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
        return y = yt(y), E.forEach(function(S, v) {
          !(l.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? He([y], v, o) : i === null ? y : y + "[]",
            c(S)
          );
        }), !1;
    }
    return Ce(d) ? !0 : (t.append(He(h, y, o), c(d)), !1);
  }
  const p = [], g = Object.assign(Ln, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Ce
  });
  function k(d, y) {
    if (!l.isUndefined(d)) {
      if (p.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      p.push(d), l.forEach(d, function(E, N) {
        (!(l.isUndefined(E) || E === null) && s.call(
          t,
          E,
          l.isString(N) ? N.trim() : N,
          y,
          g
        )) === !0 && k(E, y ? y.concat(N) : [N]);
      }), p.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return k(e), t;
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
  this._pairs = [], e && xe(e, this, t);
}
const bt = Ue.prototype;
bt.append = function(t, n) {
  this._pairs.push([t, n]);
};
bt.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Je);
  } : Je;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Bn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function gt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Bn;
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
const wt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Un = typeof URLSearchParams < "u" ? URLSearchParams : Ue, jn = typeof FormData < "u" ? FormData : null, Dn = typeof Blob < "u" ? Blob : null, In = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Un,
    FormData: jn,
    Blob: Dn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, je = typeof window < "u" && typeof document < "u", Ne = typeof navigator == "object" && navigator || void 0, Mn = je && (!Ne || ["ReactNative", "NativeScript", "NS"].indexOf(Ne.product) < 0), zn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", qn = je && window.location.href || "http://localhost", Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: je,
  hasStandardBrowserEnv: Mn,
  hasStandardBrowserWebWorkerEnv: zn,
  navigator: Ne,
  origin: qn
}, Symbol.toStringTag, { value: "Module" })), A = {
  ...Hn,
  ...In
};
function Jn(e, t) {
  return xe(e, new A.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return A.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
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
function xt(e) {
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
const le = {
  transitional: wt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = l.isObject(t);
    if (o && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return s ? JSON.stringify(xt(t)) : t;
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
        return xe(
          a ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Kn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || le.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
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
  le.headers[e] = {};
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
function se(e) {
  return e && String(e).trim().toLowerCase();
}
function pe(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(pe) : String(e);
}
function Qn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Zn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ke(e, t, n, r, s) {
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
let L = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, f, c) {
      const u = se(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = l.findKey(s, u);
      (!p || s[p] === void 0 || c === !0 || c === void 0 && s[p] !== !1) && (s[p || f] = pe(a));
    }
    const i = (a, f) => l.forEach(a, (c, u) => o(c, u, f));
    if (l.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (l.isString(t) && (t = t.trim()) && !Zn(t))
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
    if (t = se(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Qn(s);
        if (l.isFunction(n))
          return n.call(this, s, r);
        if (l.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = se(t), t) {
      const r = l.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ke(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = se(i), i) {
        const a = l.findKey(r, i);
        a && (!n || ke(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return l.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ke(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return l.forEach(this, (s, o) => {
      const i = l.findKey(r, o);
      if (i) {
        n[i] = pe(s), delete n[o];
        return;
      }
      const a = t ? Yn(o) : String(o).trim();
      a !== o && delete n[o], n[a] = pe(s), r[a] = !0;
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
      const a = se(i);
      r[a] || (er(s, i), r[a] = !0);
    }
    return l.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
L.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.reduceDescriptors(L.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
l.freezeMethods(L);
function ve(e, t) {
  const n = this || le, r = t || n, s = L.from(r.headers);
  let o = r.data;
  return l.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function _t(e) {
  return !!(e && e.__CANCEL__);
}
function Y(e, t, n) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n), this.name = "CanceledError";
}
l.inherits(Y, b, {
  __CANCEL__: !0
});
function Et(e, t, n) {
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
    const k = u && c - u;
    return k ? Math.round(g * 1e3 / k) : void 0;
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
const me = (e, t, n = 3) => {
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
}, Xe = (e) => (...t) => l.asap(() => e(...t)), sr = A.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, A.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(A.origin),
  A.navigator && /(msie|trident)/i.test(A.navigator.userAgent)
) : () => !0, or = A.hasStandardBrowserEnv ? (
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
function St(e, t, n) {
  let r = !ir(t);
  return e && (r || n == !1) ? ar(e, t) : t;
}
const Ge = (e) => e instanceof L ? { ...e } : e;
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
const Rt = (e) => {
  const t = V({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = t;
  if (t.headers = i = L.from(i), t.url = gt(St(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), l.isFormData(n)) {
    if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (l.isFunction(n.getHeaders)) {
      const f = n.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(f).forEach(([u, p]) => {
        c.includes(u.toLowerCase()) && i.set(u, p);
      });
    }
  }
  if (A.hasStandardBrowserEnv && (r && l.isFunction(r) && (r = r(t)), r || r !== !1 && sr(t.url))) {
    const f = s && o && or.read(o);
    f && i.set(s, f);
  }
  return t;
}, lr = typeof XMLHttpRequest < "u", cr = lr && function(e) {
  return new Promise(function(n, r) {
    const s = Rt(e);
    let o = s.data;
    const i = L.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: f, onDownloadProgress: c } = s, u, p, g, k, d;
    function y() {
      k && k(), d && d(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function E() {
      if (!h)
        return;
      const S = L.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), B = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: S,
        config: e,
        request: h
      };
      Et(function(P) {
        n(P), y();
      }, function(P) {
        r(P), y();
      }, B), h = null;
    }
    "onloadend" in h ? h.onloadend = E : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, h.onabort = function() {
      h && (r(new b("Request aborted", b.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(v) {
      const B = v && v.message ? v.message : "Network Error", D = new b(B, b.ERR_NETWORK, e, h);
      D.event = v || null, r(D), h = null;
    }, h.ontimeout = function() {
      let v = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const B = s.transitional || wt;
      s.timeoutErrorMessage && (v = s.timeoutErrorMessage), r(new b(
        v,
        B.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        e,
        h
      )), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && l.forEach(i.toJSON(), function(v, B) {
      h.setRequestHeader(B, v);
    }), l.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), a && a !== "json" && (h.responseType = s.responseType), c && ([g, d] = me(c, !0), h.addEventListener("progress", g)), f && h.upload && ([p, k] = me(f), h.upload.addEventListener("progress", p), h.upload.addEventListener("loadend", k)), (s.cancelToken || s.signal) && (u = (S) => {
      h && (r(!S || S.type ? new Y(null, e, h) : S), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const N = tr(s.url);
    if (N && A.protocols.indexOf(N) === -1) {
      r(new b("Unsupported protocol " + N + ":", b.ERR_BAD_REQUEST, e));
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
        r.abort(u instanceof b ? u : new Y(u instanceof Error ? u.message : u));
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
}, Qe = (e, t, n, r) => {
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
}, Ze = 64 * 1024, { isFunction: de } = l, hr = (({ Request: e, Response: t }) => ({
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
  const { fetch: t, Request: n, Response: r } = e, s = t ? de(t) : typeof fetch == "function", o = de(n), i = de(r);
  if (!s)
    return !1;
  const a = s && de(Ye), f = s && (typeof et == "function" ? /* @__PURE__ */ ((d) => (y) => d.encode(y))(new et()) : async (d) => new Uint8Array(await new n(d).arrayBuffer())), c = o && a && tt(() => {
    let d = !1;
    const y = new n(A.origin, {
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
      return (await new n(A.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (l.isArrayBufferView(d) || l.isArrayBuffer(d))
      return d.byteLength;
    if (l.isURLSearchParams(d) && (d = d + ""), l.isString(d))
      return (await f(d)).byteLength;
  }, k = async (d, y) => {
    const h = l.toFiniteNumber(d.getContentLength());
    return h ?? g(y);
  };
  return async (d) => {
    let {
      url: y,
      method: h,
      data: E,
      signal: N,
      cancelToken: S,
      timeout: v,
      onDownloadProgress: B,
      onUploadProgress: D,
      responseType: P,
      headers: ee,
      withCredentials: W = "same-origin",
      fetchOptions: te
    } = Rt(d), ne = t || fetch;
    P = P ? (P + "").toLowerCase() : "text";
    let K = ur([N, S && S.toAbortSignal()], v), q = null;
    const M = K && K.unsubscribe && (() => {
      K.unsubscribe();
    });
    let _;
    try {
      if (D && c && h !== "get" && h !== "head" && (_ = await k(ee, E)) !== 0) {
        let z = new n(y, {
          method: "POST",
          body: E,
          duplex: "half"
        }), X;
        if (l.isFormData(E) && (X = z.headers.get("content-type")) && ee.setContentType(X), z.body) {
          const [Ee, ue] = Ke(
            _,
            me(Xe(D))
          );
          E = Qe(z.body, Ze, Ee, ue);
        }
      }
      l.isString(W) || (W = W ? "include" : "omit");
      const m = o && "credentials" in n.prototype, x = {
        ...te,
        signal: K,
        method: h.toUpperCase(),
        headers: ee.normalize().toJSON(),
        body: E,
        duplex: "half",
        credentials: m ? W : void 0
      };
      q = o && new n(y, x);
      let $ = await (o ? ne(q, te) : ne(y, x));
      const ce = u && (P === "stream" || P === "response");
      if (u && (B || ce && M)) {
        const z = {};
        ["status", "statusText", "headers"].forEach((Ie) => {
          z[Ie] = $[Ie];
        });
        const X = l.toFiniteNumber($.headers.get("content-length")), [Ee, ue] = B && Ke(
          X,
          me(Xe(B), !0)
        ) || [];
        $ = new r(
          Qe($.body, Ze, Ee, () => {
            ue && ue(), M && M();
          }),
          z
        );
      }
      P = P || "text";
      let Lt = await p[l.findKey(p, P) || "text"]($, d);
      return !ce && M && M(), await new Promise((z, X) => {
        Et(z, X, {
          data: Lt,
          headers: L.from($.headers),
          status: $.status,
          statusText: $.statusText,
          config: d,
          request: q
        });
      });
    } catch (m) {
      throw M && M(), m && m.name === "TypeError" && /Load failed|fetch/i.test(m.message) ? Object.assign(
        new b("Network Error", b.ERR_NETWORK, d, q),
        {
          cause: m.cause || m
        }
      ) : b.from(m, m && m.code, d, q);
    }
  };
}, yr = /* @__PURE__ */ new Map(), kt = (e) => {
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
kt();
const De = {
  http: $n,
  xhr: cr,
  fetch: {
    get: kt
  }
};
l.forEach(De, (e, t) => {
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
    if (s = r, !br(r) && (s = De[(a = String(r)).toLowerCase()], s === void 0))
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
const vt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: gr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: De
};
function Oe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Y(null, e);
}
function rt(e) {
  return Oe(e), e.headers = L.from(e.headers), e.data = ve.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), vt.getAdapter(e.adapter || le.adapter, e)(e).then(function(r) {
    return Oe(e), r.data = ve.call(
      e,
      e.transformResponse,
      r
    ), r.headers = L.from(r.headers), r;
  }, function(r) {
    return _t(r) || (Oe(e), r && r.response && (r.response.data = ve.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = L.from(r.response.headers))), Promise.reject(r);
  });
}
const Ot = "1.13.2", _e = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  _e[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const st = {};
_e.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Ot + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
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
_e.spelling = function(t) {
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
const he = {
  assertOptions: wr,
  validators: _e
}, I = he.validators;
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
    r !== void 0 && he.assertOptions(r, {
      silentJSONParsing: I.transitional(I.boolean),
      forcedJSONParsing: I.transitional(I.boolean),
      clarifyTimeoutError: I.transitional(I.boolean)
    }, !1), s != null && (l.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : he.assertOptions(s, {
      encode: I.function,
      serialize: I.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), he.assertOptions(n, {
      baseUrl: I.spelling("baseURL"),
      withXsrfToken: I.spelling("withXSRFToken")
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
    ), n.headers = L.concat(i, o);
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
    let k = n;
    for (; p < g; ) {
      const d = a[p++], y = a[p++];
      try {
        k = d(k);
      } catch (h) {
        y.call(this, h);
        break;
      }
    }
    try {
      u = rt.call(this, k);
    } catch (d) {
      return Promise.reject(d);
    }
    for (p = 0, g = c.length; p < g; )
      u = u.then(c[p++], c[p++]);
    return u;
  }
  getUri(t) {
    t = V(this.defaults, t);
    const n = St(t.baseURL, t.url, t.allowAbsoluteUrls);
    return gt(n, t.params, t.paramsSerializer);
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
      r.reason || (r.reason = new Y(o, i, a), n(r.reason));
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
function At(e) {
  const t = new J(e), n = it(J.prototype.request, t);
  return l.extend(n, J.prototype, t, { allOwnKeys: !0 }), l.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return At(V(e, s));
  }, n;
}
const R = At(le);
R.Axios = J;
R.CanceledError = Y;
R.CancelToken = xr;
R.isCancel = _t;
R.VERSION = Ot;
R.toFormData = xe;
R.AxiosError = b;
R.Cancel = R.CanceledError;
R.all = function(t) {
  return Promise.all(t);
};
R.spread = _r;
R.isAxiosError = Er;
R.mergeConfig = V;
R.AxiosHeaders = L;
R.formToJSON = (e) => xt(l.isHTMLForm(e) ? new FormData(e) : e);
R.getAdapter = vt.getAdapter;
R.HttpStatusCode = Pe;
R.default = R;
const {
  Axios: ls,
  AxiosError: cs,
  CanceledError: us,
  isCancel: ds,
  CancelToken: fs,
  VERSION: ps,
  all: hs,
  Cancel: ms,
  isAxiosError: ys,
  spread: bs,
  toFormData: gs,
  AxiosHeaders: ws,
  HttpStatusCode: xs,
  formToJSON: _s,
  getAdapter: Es,
  mergeConfig: Ss
} = R, $e = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), Ct = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), Nt = async () => ({
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
function Fe(e, t = 1e3) {
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
const ye = () => new Sr();
class Pt {
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
let O = {
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
        if (c && (c = c.replace("{*}", `${s.name}`)), console.log(`_lazy_src: ${c}`), console.log(`_src: ${a}`), O.lib.l.hasOwnProperty(`${o}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(a) && a.includes("/") == !1 && O.lib.inbuilt_lib.indexOf(`${s.name}`) === -1)
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
            O.lib.l[`${o}`] = {
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
            O.lib.l[`${o}`] = {
              lib: u,
              src: a
            };
          }
        }
      }
      console.log(await O.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const n = `${e.name}:${e.run_from}`;
      return O.lib.l.hasOwnProperty(`${n}`) == !1 && await O.lib.set({
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
      }), t = O.lib.l[`${n}`], t;
    },
    get_all: async (e) => O.lib.l
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
const $t = ye(), Ft = ye(), Rr = $t.on, kr = $t.emit, vr = Ft.emit;
Ft.on;
const Or = async (e) => {
  const t = await Ct();
  return await O.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--renderer [set]"), n.return = n?.return || {}, n.return.r = n?.return?.r || "full";
      const r = new Pt();
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
          const a = await await O.lib.get({ name: i.type, run_from: "renderer", lazy_lib: e.lazy_lib }), f = await (await a.lib.index({
            f: {
              name: (c) => t.f.name({ id: i.id, name: c }),
              get_lib: async (c) => await await O.lib.get({ name: c.name, run_from: c.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (c) => await (await Nt()).set(c),
              path: (c) => O.path.set({ src: a.src, type: i.type, name: c }),
              //set..
              uuid: () => $e().set(),
              wait_until: Fe
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
}, Tr = async (e) => {
  const t = await Ct();
  return await O.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--hydrator [set]");
      const r = new Pt();
      r.start();
      let s = {
        r: "",
        style: ""
      }, o = {
        style_id: `${$e().set()}_stl`
      }, i = n.data?.value?.l || n.data.l;
      const a = async () => {
        for (const f of i) {
          const c = await await O.lib.get({ name: f.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), u = c.lib, p = ye(), g = p.on, k = await (await u.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (d) => t.f.name({ id: f.id, name: d }),
              get_lib: async (d) => await await O.lib.get({ name: d.name, run_from: d.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (d) => await (await Nt()).set(d),
              path: (d) => O.path.set({ src: c.src, type: f.type, name: d }),
              //set..
              uuid: () => $e().set(),
              wait_until: Fe,
              //set..
              call: vr,
              listen: g,
              //set..
              new_emitter: () => ye()
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
          }), s.style += k.style;
        }
      };
      await Fe(
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
    const n = U({
      ce_file: e.ce_file
      //route?.meta?.ce_file,
    });
    t({
      ce_call: kr
    });
    const r = U(null), s = U(null);
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
      const f = await Or(a), c = await Tr(a);
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
    })(), (i, a) => s.value ? (T(), C("div", {
      key: 0,
      innerHTML: s.value
    }, null, 8, Ar)) : G("", !0);
  }
});
function Nr(e, t) {
  return t.split(".").reduce((n, r) => n?.[r], e);
}
function Pr(e, t) {
  const { open: n, close: r } = t, s = [];
  let o = 0;
  for (; o < e.length; ) {
    const i = e.indexOf(n, o);
    if (i === -1) {
      s.push({ type: "text", value: e.slice(o) });
      break;
    }
    i > o && s.push({ type: "text", value: e.slice(o, i) });
    const a = e.indexOf(r, i + n.length);
    if (a === -1)
      throw new Error(`Unclosed template placeholder starting at ${i}`);
    const f = e.slice(i + n.length, a).trim(), [c, u] = f.split("=");
    s.push({ type: "param", value: c, defaultValue: u }), o = a + r.length;
  }
  return s;
}
function $r(e, t, n) {
  const r = /* @__PURE__ */ new Set(), s = e.map((o) => {
    if (o.type === "text") return o.value;
    const i = Nr(t, o.value);
    if (r.add(o.value.split(".")[0]), i === void 0 || i === "") {
      if (o.defaultValue !== void 0) return o.defaultValue;
      if (n.strict) throw new Error(`Missing param: ${o.value}`);
      return "";
    }
    return n.encode ? encodeURIComponent(String(i)) : String(i);
  }).join("");
  if (n.strict) {
    for (const o of Object.keys(t))
      if (!r.has(o))
        throw new Error(`Unused param provided: ${o}`);
  }
  return s;
}
function Fr(e, t) {
  const n = {
    open: t?.open,
    close: t?.close,
    encode: t?.encode ?? !1,
    strict: t?.strict ?? !1
  }, r = Pr(e, n);
  return (s) => $r(r, s, n);
}
const Lr = { class: "bg-gray-50 dark:bg-[#0b1120] min-h-screen pb-20 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-blue-100 selection:text-blue-900" }, Br = {
  key: 0,
  class: "sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-800/50 transition-all duration-300"
}, Ur = { class: "max-w-[1440px] mx-auto px-4 py-3 md:px-8 md:py-4 flex gap-4 items-center" }, jr = {
  class: "flex-1 relative group",
  role: "search"
}, Dr = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, Ir = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, Mr = {
  key: 1,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-[1440px] mx-auto px-4 md:px-8 my-8"
}, zr = {
  key: 2,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 max-w-[1440px] mx-auto px-4 md:px-8 my-8 list-none"
}, qr = ["onClick"], Hr = { class: "p-2 md:p-2.5 pb-0" }, Jr = { class: "aspect-[4/5] relative bg-[#f4f6f8] dark:bg-slate-800 rounded-xl overflow-hidden" }, Vr = ["src", "alt"], Wr = {
  key: 0,
  class: "absolute bottom-2 left-2 bg-red-500 text-white text-[10px] md:text-xs px-2 py-0.5 rounded-md font-bold shadow-sm"
}, Kr = { class: "p-3 md:p-4 flex flex-col flex-1 gap-1" }, Xr = { class: "flex items-baseline gap-2 mb-1" }, Gr = { class: "text-lg md:text-xl font-black text-slate-900 dark:text-white leading-none" }, Qr = {
  key: 0,
  class: "text-xs text-slate-400 line-through decoration-slate-400/50"
}, Zr = { class: "text-[11px] font-bold text-slate-400 uppercase tracking-wider" }, Yr = { class: "text-[13px] leading-snug text-slate-700 dark:text-slate-300 font-medium line-clamp-2 min-h-[2.5em]" }, es = ["onClick"], ts = {
  key: 3,
  class: "flex flex-col items-center justify-center py-20 px-4"
}, ns = {
  key: 0,
  class: "flex gap-2"
}, Te = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500", rs = /* @__PURE__ */ Le({
  __name: "productsearch",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const t = Vt(), n = U("Ni"), r = U([]), s = U(!1), o = U(!0), i = U(!1), a = U(1), f = U(!0), c = U(null);
    let u = null;
    const g = Fr(e.__p.data.curr.data.api.token, { open: "<", close: ">" })({
      localStorage: {
        token: localStorage.getItem("token") || ""
      }
    }).replace("Bearer ", ""), k = e.__p.data.curr.data.api.url, d = g, y = U(null), h = U({
      cart_popup: {
        ce_file: e.__p.data.curr.data.cart_popup.ce_file
      }
    }), E = () => {
      const _ = localStorage.getItem("theme");
      _ ? s.value = _ === "dark" : s.value = window.matchMedia("(prefers-color-scheme: dark)").matches, S();
    }, N = () => {
      s.value = !s.value, S(), localStorage.setItem("theme", s.value ? "dark" : "light");
    }, S = () => {
      s.value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, v = async () => {
      o.value = !0, r.value = [], a.value = 1, f.value = !0, await D(), o.value = !1;
    }, B = () => {
      n.value = "", document.getElementById("site-search")?.focus(), v();
    }, D = async () => {
      try {
        const _ = n.value.trim(), m = await R.post(
          k,
          /*{ 
            slug: effectiveQuery, 
            collection: "products" 
          }*/
          {
            q: _,
            //"Ni",//"Nike shirts",
            page: a.value,
            //1,
            per_page: 20
          },
          { headers: { Authorization: `Bearer ${d}` } }
        );
        if (m.data.success && m.data.data.products.length > 0) {
          await new Promise(($) => setTimeout($, 500));
          const x = m.data.data.products;
          for (const $ of x)
            r.value.push({
              document: $
            });
        } else
          f.value = !1;
      } catch (_) {
        console.error(_), f.value = !1;
      }
    }, P = () => {
      u = new IntersectionObserver(async (_) => {
        _[0].isIntersecting && f.value && !o.value && !i.value && (i.value = !0, a.value++, await D(), i.value = !1);
      }, {
        rootMargin: "200px"
      }), c.value && u.observe(c.value);
    }, ee = (_) => {
      try {
        const x = JSON.parse(_.metadata);
        if (x.color?.[0]?.image?.[0]?.url && !x.color[0].image[0].url.includes("example"))
          return x.color[0].image[0].url;
      } catch {
      }
      const m = _.title ? _.title.toLowerCase() : "";
      return m.includes("dress") ? "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500" : m.includes("shirt") || m.includes("top") ? "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" : m.includes("shoe") || m.includes("sneaker") ? "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" : m.includes("bag") ? "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" : Te;
    }, W = (_) => {
      const m = _.target;
      m.src !== Te && (m.src = Te);
    }, te = (_) => {
      const m = _.variant_prices[0], x = _.variant_mrp[0];
      return x > m ? Math.round((x - m) / x * 100) : 0;
    }, ne = (_) => new Intl.NumberFormat("ru-RU").format(_), K = (_) => {
      t.push({ path: `/product/${_}` });
    }, q = (_) => {
      y.value.ce_call("msg", {
        type: "product:open",
        custom: {
          product_id: _.document.slug
          // _v.document.id, 
        },
        _p: {},
        _$p: {}
      });
    }, M = (_) => {
      const m = _.currentTarget;
      m.classList.toggle("text-red-500"), m.classList.toggle("bg-red-50");
    };
    return Ut(() => {
      E(), v().then(() => {
        setTimeout(() => P(), 100);
      });
    }), jt(() => {
      u && u.disconnect();
    }), (_, m) => (T(), C(Re, null, [
      w("div", Lr, [
        e.__p.data.curr.data.mode == "normal" ? (T(), C("header", Br, [
          w("div", Ur, [
            w("div", jr, [
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
              It(w("input", {
                id: "site-search",
                "onUpdate:modelValue": m[0] || (m[0] = (x) => n.value = x),
                onKeyup: zt(v, ["enter"]),
                type: "text",
                placeholder: "Search premium brands, styles...",
                class: "w-full h-11 md:h-12 pl-12 pr-10 bg-gray-100 dark:bg-slate-800 border-2 border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 rounded-2xl text-[15px] outline-none transition-all duration-200 placeholder:text-slate-400 dark:text-white shadow-sm"
              }, null, 544), [
                [Mt, n.value]
              ]),
              n.value ? (T(), C("button", {
                key: 0,
                class: "absolute right-3 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-slate-700 text-slate-500 hover:text-red-500 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors",
                onClick: B
              }, "✕")) : G("", !0)
            ]),
            w("button", {
              class: "hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 active:scale-95 transition-all",
              onClick: v
            }, " SEARCH "),
            w("button", {
              onClick: N,
              class: "p-3 rounded-2xl bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors active:scale-95"
            }, [
              s.value ? (T(), C("svg", Dr, [...m[3] || (m[3] = [
                Se('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', 9)
              ])])) : (T(), C("svg", Ir, [...m[4] || (m[4] = [
                w("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
              ])]))
            ])
          ])
        ])) : G("", !0),
        o.value ? (T(), C("div", Mr, [
          (T(), C(Re, null, Me(10, (x) => w("div", {
            key: x,
            class: "bg-white dark:bg-[#1e293b] rounded-2xl p-3 shadow-sm border border-gray-100 dark:border-slate-800"
          }, [...m[5] || (m[5] = [
            Se('<div class="aspect-[4/5] bg-gray-200 dark:bg-slate-700 rounded-xl relative overflow-hidden mb-3"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div><div class="space-y-2"><div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/3"></div><div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full"></div><div class="h-8 bg-gray-200 dark:bg-slate-700 rounded-lg mt-2"></div></div>', 2)
          ])])), 64))
        ])) : r.value.length > 0 ? (T(), C("ul", zr, [
          (T(!0), C(Re, null, Me(r.value, (x, $) => (T(), C("li", {
            key: x.document.id + $,
            class: "group bg-white dark:bg-[#1e293b] rounded-2xl flex flex-col relative cursor-pointer border border-transparent hover:border-blue-100 dark:hover:border-slate-600 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] dark:shadow-none dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300",
            onClick: (ce) => K(x.document.slug)
          }, [
            w("div", Hr, [
              w("div", Jr, [
                w("img", {
                  src: ee(x.document),
                  loading: "lazy",
                  alt: x.document.title,
                  onError: W,
                  class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply dark:mix-blend-normal"
                }, null, 40, Vr),
                te(x.document) > 0 ? (T(), C("span", Wr, " -" + re(te(x.document)) + "% ", 1)) : G("", !0),
                w("button", {
                  class: "absolute top-2 right-2 w-8 h-8 rounded-full bg-white/70 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-white transition-all scale-0 group-hover:scale-100",
                  onClick: ze(M, ["stop"])
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
            w("div", Kr, [
              w("div", Xr, [
                w("span", Gr, re(ne(x.document.variant_prices[0])) + " ₽ ", 1),
                x.document.variant_mrp[0] > x.document.variant_prices[0] ? (T(), C("span", Qr, re(ne(x.document.variant_mrp[0])), 1)) : G("", !0)
              ]),
              m[8] || (m[8] = Se('<div class="flex items-center gap-2 mb-1.5"><span class="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-green-500"></span> Ozon Card </span><div class="flex items-center gap-1 text-[10px] text-slate-400"><span class="text-amber-400">★</span> 4.9 (128) </div></div>', 1)),
              w("div", Zr, re(x.document.brand), 1),
              w("h3", Yr, re(x.document.title), 1),
              w("button", {
                class: "mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group/btn",
                onClick: ze((ce) => q(x), ["stop"])
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
              ])], 8, es)
            ])
          ], 8, qr))), 128))
        ])) : (T(), C("div", ts, [
          m[9] || (m[9] = w("div", { class: "w-20 h-20 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-4" }, "🔍", -1)),
          m[10] || (m[10] = w("h3", { class: "text-xl font-bold text-slate-900 dark:text-white mb-2" }, "No results found", -1)),
          m[11] || (m[11] = w("p", { class: "text-slate-500 mb-6 text-center max-w-md" }, "We couldn't find anything matching your search. Try checking for typos or use broader keywords.", -1)),
          w("button", {
            class: "bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors",
            onClick: m[1] || (m[1] = (x) => {
              n.value = "puma", v();
            })
          }, "Clear Filters")
        ])),
        w("div", {
          ref_key: "sentinel",
          ref: c,
          class: "h-20 flex justify-center items-center w-full"
        }, [
          i.value ? (T(), C("div", ns, [...m[12] || (m[12] = [
            w("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce" }, null, -1),
            w("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]" }, null, -1),
            w("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]" }, null, -1)
          ])])) : G("", !0)
        ], 512)
      ]),
      Dt(Cr, ot({
        ref_key: "cartPopupRef",
        ref: y
      }, {
        // _p:_p,
        //__p:_$p,
        ce_file: h.value.cart_popup.ce_file
      }), null, 16)
    ], 64));
  }
}), ss = /* @__PURE__ */ Le({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    return e._$p.data.curr.data.mode = e._$p.data.curr.data.mode || "normal", (t, n) => (T(), qt(rs, ot({
      __internal: {
        _p: e._p,
        _$p: e._$p,
        _$cb: e._$cb
      }
    }, {
      _p: e._p,
      __p: e._$p
    }), null, 16, ["__internal"]));
  }
}), Rs = async (e) => ({
  set: async (t, n) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const s = Ht(ss, {
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
  Rs as hydrator,
  Rs as index
};
