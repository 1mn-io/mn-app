import { d as Ft, r as B, w as ut, o as bs, n as ft, a as v, c as g, b as n, e as u, f as Ee, g as re, F as W, h as J, t as C, i as z, j as Ce, v as pt, k as ht, l as ms, m as He, p as K, q as xs, s as vs, u as gs } from "./runtime-dom.esm-bundler-BDCqoxJL.js";
function Bt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ys } = Object.prototype, { getPrototypeOf: tt } = Object, { iterator: ze, toStringTag: Pt } = Symbol, Me = /* @__PURE__ */ ((e) => (t) => {
  const s = ys.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ne = (e) => (e = e.toLowerCase(), (t) => Me(t) === e), De = (e) => (t) => typeof t === e, { isArray: we } = Array, ye = De("undefined");
function Re(e) {
  return e !== null && !ye(e) && e.constructor !== null && !ye(e.constructor) && Z(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const $t = ne("ArrayBuffer");
function ws(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && $t(e.buffer), t;
}
const _s = De("string"), Z = De("function"), Lt = De("number"), Oe = (e) => e !== null && typeof e == "object", ks = (e) => e === !0 || e === !1, Pe = (e) => {
  if (Me(e) !== "object")
    return !1;
  const t = tt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Pt in e) && !(ze in e);
}, Es = (e) => {
  if (!Oe(e) || Re(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Cs = ne("Date"), Ss = ne("File"), Rs = (e) => !!(e && typeof e.uri < "u"), Os = (e) => e && typeof e.getParts < "u", Ts = ne("Blob"), As = ne("FileList"), Ns = (e) => Oe(e) && Z(e.pipe);
function Fs() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const bt = Fs(), mt = typeof bt.FormData < "u" ? bt.FormData : void 0, Bs = (e) => {
  let t;
  return e && (mt && e instanceof mt || Z(e.append) && ((t = Me(e)) === "formdata" || // detect form-data instance
  t === "object" && Z(e.toString) && e.toString() === "[object FormData]"));
}, Ps = ne("URLSearchParams"), [$s, Ls, js, Is] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(ne), zs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Te(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), we(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    if (Re(e))
      return;
    const o = s ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let d;
    for (r = 0; r < i; r++)
      d = o[r], t.call(null, e[d], d, e);
  }
}
function jt(e, t) {
  if (Re(e))
    return null;
  t = t.toLowerCase();
  const s = Object.keys(e);
  let r = s.length, a;
  for (; r-- > 0; )
    if (a = s[r], t === a.toLowerCase())
      return a;
  return null;
}
const be = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, It = (e) => !ye(e) && e !== be;
function Xe() {
  const { caseless: e, skipUndefined: t } = It(this) && this || {}, s = {}, r = (a, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const i = e && jt(s, o) || o;
    Pe(s[i]) && Pe(a) ? s[i] = Xe(s[i], a) : Pe(a) ? s[i] = Xe({}, a) : we(a) ? s[i] = a.slice() : (!t || !ye(a)) && (s[i] = a);
  };
  for (let a = 0, o = arguments.length; a < o; a++)
    arguments[a] && Te(arguments[a], r);
  return s;
}
const Ms = (e, t, s, { allOwnKeys: r } = {}) => (Te(
  t,
  (a, o) => {
    s && Z(a) ? Object.defineProperty(e, o, {
      value: Bt(a, s),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, o, {
      value: a,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), Ds = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Us = (e, t, s, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, qs = (e, t, s, r) => {
  let a, o, i;
  const d = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      i = a[o], (!r || r(i, e, t)) && !d[i] && (t[i] = e[i], d[i] = !0);
    e = s !== !1 && tt(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, Hs = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const r = e.indexOf(t, s);
  return r !== -1 && r === s;
}, Vs = (e) => {
  if (!e) return null;
  if (we(e)) return e;
  let t = e.length;
  if (!Lt(t)) return null;
  const s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, Ws = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && tt(Uint8Array)), Js = (e, t) => {
  const r = (e && e[ze]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const o = a.value;
    t.call(e, o[0], o[1]);
  }
}, Ks = (e, t) => {
  let s;
  const r = [];
  for (; (s = e.exec(t)) !== null; )
    r.push(s);
  return r;
}, Xs = ne("HTMLFormElement"), Gs = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, r, a) {
  return r.toUpperCase() + a;
}), xt = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), Zs = ne("RegExp"), zt = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), r = {};
  Te(s, (a, o) => {
    let i;
    (i = t(a, o, e)) !== !1 && (r[o] = i || a);
  }), Object.defineProperties(e, r);
}, Qs = (e) => {
  zt(e, (t, s) => {
    if (Z(e) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const r = e[s];
    if (Z(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, Ys = (e, t) => {
  const s = {}, r = (a) => {
    a.forEach((o) => {
      s[o] = !0;
    });
  };
  return we(e) ? r(e) : r(String(e).split(t)), s;
}, er = () => {
}, tr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function sr(e) {
  return !!(e && Z(e.append) && e[Pt] === "FormData" && e[ze]);
}
const rr = (e) => {
  const t = new Array(10), s = (r, a) => {
    if (Oe(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Re(r))
        return r;
      if (!("toJSON" in r)) {
        t[a] = r;
        const o = we(r) ? [] : {};
        return Te(r, (i, d) => {
          const x = s(i, a + 1);
          !ye(x) && (o[d] = x);
        }), t[a] = void 0, o;
      }
    }
    return r;
  };
  return s(e, 0);
}, nr = ne("AsyncFunction"), ar = (e) => e && (Oe(e) || Z(e)) && Z(e.then) && Z(e.catch), Mt = ((e, t) => e ? setImmediate : t ? ((s, r) => (be.addEventListener(
  "message",
  ({ source: a, data: o }) => {
    a === be && o === s && r.length && r.shift()();
  },
  !1
), (a) => {
  r.push(a), be.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(typeof setImmediate == "function", Z(be.postMessage)), or = typeof queueMicrotask < "u" ? queueMicrotask.bind(be) : typeof process < "u" && process.nextTick || Mt, lr = (e) => e != null && Z(e[ze]), f = {
  isArray: we,
  isArrayBuffer: $t,
  isBuffer: Re,
  isFormData: Bs,
  isArrayBufferView: ws,
  isString: _s,
  isNumber: Lt,
  isBoolean: ks,
  isObject: Oe,
  isPlainObject: Pe,
  isEmptyObject: Es,
  isReadableStream: $s,
  isRequest: Ls,
  isResponse: js,
  isHeaders: Is,
  isUndefined: ye,
  isDate: Cs,
  isFile: Ss,
  isReactNativeBlob: Rs,
  isReactNative: Os,
  isBlob: Ts,
  isRegExp: Zs,
  isFunction: Z,
  isStream: Ns,
  isURLSearchParams: Ps,
  isTypedArray: Ws,
  isFileList: As,
  forEach: Te,
  merge: Xe,
  extend: Ms,
  trim: zs,
  stripBOM: Ds,
  inherits: Us,
  toFlatObject: qs,
  kindOf: Me,
  kindOfTest: ne,
  endsWith: Hs,
  toArray: Vs,
  forEachEntry: Js,
  matchAll: Ks,
  isHTMLForm: Xs,
  hasOwnProperty: xt,
  hasOwnProp: xt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: zt,
  freezeMethods: Qs,
  toObjectSet: Ys,
  toCamelCase: Gs,
  noop: er,
  toFiniteNumber: tr,
  findKey: jt,
  global: be,
  isContextDefined: It,
  isSpecCompliantForm: sr,
  toJSONObject: rr,
  isAsyncFn: nr,
  isThenable: ar,
  setImmediate: Mt,
  asap: or,
  isIterable: lr
};
let S = class Dt extends Error {
  static from(t, s, r, a, o, i) {
    const d = new Dt(t.message, s || t.code, r, a, o);
    return d.cause = t, d.name = t.name, t.status != null && d.status == null && (d.status = t.status), i && Object.assign(d, i), d;
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
  constructor(t, s, r, a, o) {
    super(t), Object.defineProperty(this, "message", {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, s && (this.code = s), r && (this.config = r), a && (this.request = a), o && (this.response = o, this.status = o.status);
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
      config: f.toJSONObject(this.config),
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
const ir = null;
function Ge(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function Ut(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ve(e, t, s) {
  return e ? e.concat(t).map(function(a, o) {
    return a = Ut(a), !s && o ? "[" + a + "]" : a;
  }).join(s ? "." : "") : t;
}
function dr(e) {
  return f.isArray(e) && !e.some(Ge);
}
const cr = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ue(e, t, s) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), s = f.toFlatObject(
    s,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(E, w) {
      return !f.isUndefined(w[E]);
    }
  );
  const r = s.metaTokens, a = s.visitor || b, o = s.dots, i = s.indexes, x = (s.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
  if (!f.isFunction(a))
    throw new TypeError("visitor must be a function");
  function h(m) {
    if (m === null) return "";
    if (f.isDate(m))
      return m.toISOString();
    if (f.isBoolean(m))
      return m.toString();
    if (!x && f.isBlob(m))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(m) || f.isTypedArray(m) ? x && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function b(m, E, w) {
    let P = m;
    if (f.isReactNative(t) && f.isReactNativeBlob(m))
      return t.append(Ve(w, E, o), h(m)), !1;
    if (m && !w && typeof m == "object") {
      if (f.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), m = JSON.stringify(m);
      else if (f.isArray(m) && dr(m) || (f.isFileList(m) || f.endsWith(E, "[]")) && (P = f.toArray(m)))
        return E = Ut(E), P.forEach(function(O, F) {
          !(f.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ve([E], F, o) : i === null ? E : E + "[]",
            h(O)
          );
        }), !1;
    }
    return Ge(m) ? !0 : (t.append(Ve(w, E, o), h(m)), !1);
  }
  const _ = [], R = Object.assign(cr, {
    defaultVisitor: b,
    convertValue: h,
    isVisitable: Ge
  });
  function A(m, E) {
    if (!f.isUndefined(m)) {
      if (_.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      _.push(m), f.forEach(m, function(P, L) {
        (!(f.isUndefined(P) || P === null) && a.call(t, P, f.isString(L) ? L.trim() : L, E, R)) === !0 && A(P, E ? E.concat(L) : [L]);
      }), _.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return A(e), t;
}
function vt(e) {
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
function st(e, t) {
  this._pairs = [], e && Ue(e, this, t);
}
const qt = st.prototype;
qt.append = function(t, s) {
  this._pairs.push([t, s]);
};
qt.toString = function(t) {
  const s = t ? function(r) {
    return t.call(this, r, vt);
  } : vt;
  return this._pairs.map(function(a) {
    return s(a[0]) + "=" + s(a[1]);
  }, "").join("&");
};
function ur(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ht(e, t, s) {
  if (!t)
    return e;
  const r = s && s.encode || ur, a = f.isFunction(s) ? {
    serialize: s
  } : s, o = a && a.serialize;
  let i;
  if (o ? i = o(t, a) : i = f.isURLSearchParams(t) ? t.toString() : new st(t, a).toString(r), i) {
    const d = e.indexOf("#");
    d !== -1 && (e = e.slice(0, d)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class gt {
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
  use(t, s, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: s,
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
    f.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const rt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, fr = typeof URLSearchParams < "u" ? URLSearchParams : st, pr = typeof FormData < "u" ? FormData : null, hr = typeof Blob < "u" ? Blob : null, br = {
  isBrowser: !0,
  classes: {
    URLSearchParams: fr,
    FormData: pr,
    Blob: hr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, nt = typeof window < "u" && typeof document < "u", Ze = typeof navigator == "object" && navigator || void 0, mr = nt && (!Ze || ["ReactNative", "NativeScript", "NS"].indexOf(Ze.product) < 0), xr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", vr = nt && window.location.href || "http://localhost", gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: nt,
  hasStandardBrowserEnv: mr,
  hasStandardBrowserWebWorkerEnv: xr,
  navigator: Ze,
  origin: vr
}, Symbol.toStringTag, { value: "Module" })), q = {
  ...gr,
  ...br
};
function yr(e, t) {
  return Ue(e, new q.classes.URLSearchParams(), {
    visitor: function(s, r, a, o) {
      return q.isNode && f.isBuffer(s) ? (this.append(r, s.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function wr(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function _r(e) {
  const t = {}, s = Object.keys(e);
  let r;
  const a = s.length;
  let o;
  for (r = 0; r < a; r++)
    o = s[r], t[o] = e[o];
  return t;
}
function Vt(e) {
  function t(s, r, a, o) {
    let i = s[o++];
    if (i === "__proto__") return !0;
    const d = Number.isFinite(+i), x = o >= s.length;
    return i = !i && f.isArray(a) ? a.length : i, x ? (f.hasOwnProp(a, i) ? a[i] = [a[i], r] : a[i] = r, !d) : ((!a[i] || !f.isObject(a[i])) && (a[i] = []), t(s, r, a[i], o) && f.isArray(a[i]) && (a[i] = _r(a[i])), !d);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const s = {};
    return f.forEachEntry(e, (r, a) => {
      t(wr(r), a, s, 0);
    }), s;
  }
  return null;
}
function kr(e, t, s) {
  if (f.isString(e))
    try {
      return (t || JSON.parse)(e), f.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (s || JSON.stringify)(e);
}
const Ae = {
  transitional: rt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, s) {
      const r = s.getContentType() || "", a = r.indexOf("application/json") > -1, o = f.isObject(t);
      if (o && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
        return a ? JSON.stringify(Vt(t)) : t;
      if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t) || f.isReadableStream(t))
        return t;
      if (f.isArrayBufferView(t))
        return t.buffer;
      if (f.isURLSearchParams(t))
        return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let d;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return yr(t, this.formSerializer).toString();
        if ((d = f.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const x = this.env && this.env.FormData;
          return Ue(
            d ? { "files[]": t } : t,
            x && new x(),
            this.formSerializer
          );
        }
      }
      return o || a ? (s.setContentType("application/json", !1), kr(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const s = this.transitional || Ae.transitional, r = s && s.forcedJSONParsing, a = this.responseType === "json";
      if (f.isResponse(t) || f.isReadableStream(t))
        return t;
      if (t && f.isString(t) && (r && !this.responseType || a)) {
        const i = !(s && s.silentJSONParsing) && a;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (d) {
          if (i)
            throw d.name === "SyntaxError" ? S.from(d, S.ERR_BAD_RESPONSE, this, null, this.response) : d;
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
    FormData: q.classes.FormData,
    Blob: q.classes.Blob
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
f.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ae.headers[e] = {};
});
const Er = f.toObjectSet([
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
]), Cr = (e) => {
  const t = {};
  let s, r, a;
  return e && e.split(`
`).forEach(function(i) {
    a = i.indexOf(":"), s = i.substring(0, a).trim().toLowerCase(), r = i.substring(a + 1).trim(), !(!s || t[s] && Er[s]) && (s === "set-cookie" ? t[s] ? t[s].push(r) : t[s] = [r] : t[s] = t[s] ? t[s] + ", " + r : r);
  }), t;
}, yt = /* @__PURE__ */ Symbol("internals");
function Se(e) {
  return e && String(e).trim().toLowerCase();
}
function $e(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map($e) : String(e);
}
function Sr(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = s.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Rr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function We(e, t, s, r, a) {
  if (f.isFunction(r))
    return r.call(this, t, s);
  if (a && (t = s), !!f.isString(t)) {
    if (f.isString(r))
      return t.indexOf(r) !== -1;
    if (f.isRegExp(r))
      return r.test(t);
  }
}
function Or(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, r) => s.toUpperCase() + r);
}
function Tr(e, t) {
  const s = f.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + s, {
      value: function(a, o, i) {
        return this[r].call(this, t, a, o, i);
      },
      configurable: !0
    });
  });
}
let Q = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, s, r) {
    const a = this;
    function o(d, x, h) {
      const b = Se(x);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const _ = f.findKey(a, b);
      (!_ || a[_] === void 0 || h === !0 || h === void 0 && a[_] !== !1) && (a[_ || x] = $e(d));
    }
    const i = (d, x) => f.forEach(d, (h, b) => o(h, b, x));
    if (f.isPlainObject(t) || t instanceof this.constructor)
      i(t, s);
    else if (f.isString(t) && (t = t.trim()) && !Rr(t))
      i(Cr(t), s);
    else if (f.isObject(t) && f.isIterable(t)) {
      let d = {}, x, h;
      for (const b of t) {
        if (!f.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        d[h = b[0]] = (x = d[h]) ? f.isArray(x) ? [...x, b[1]] : [x, b[1]] : b[1];
      }
      i(d, s);
    } else
      t != null && o(s, t, r);
    return this;
  }
  get(t, s) {
    if (t = Se(t), t) {
      const r = f.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!s)
          return a;
        if (s === !0)
          return Sr(a);
        if (f.isFunction(s))
          return s.call(this, a, r);
        if (f.isRegExp(s))
          return s.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, s) {
    if (t = Se(t), t) {
      const r = f.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!s || We(this, this[r], r, s)));
    }
    return !1;
  }
  delete(t, s) {
    const r = this;
    let a = !1;
    function o(i) {
      if (i = Se(i), i) {
        const d = f.findKey(r, i);
        d && (!s || We(r, r[d], d, s)) && (delete r[d], a = !0);
      }
    }
    return f.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const s = Object.keys(this);
    let r = s.length, a = !1;
    for (; r--; ) {
      const o = s[r];
      (!t || We(this, this[o], o, t, !0)) && (delete this[o], a = !0);
    }
    return a;
  }
  normalize(t) {
    const s = this, r = {};
    return f.forEach(this, (a, o) => {
      const i = f.findKey(r, o);
      if (i) {
        s[i] = $e(a), delete s[o];
        return;
      }
      const d = t ? Or(o) : String(o).trim();
      d !== o && delete s[o], s[d] = $e(a), r[d] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const s = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (r, a) => {
      r != null && r !== !1 && (s[a] = t && f.isArray(r) ? r.join(", ") : r);
    }), s;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, s]) => t + ": " + s).join(`
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
  static concat(t, ...s) {
    const r = new this(t);
    return s.forEach((a) => r.set(a)), r;
  }
  static accessor(t) {
    const r = (this[yt] = this[yt] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function o(i) {
      const d = Se(i);
      r[d] || (Tr(a, i), r[d] = !0);
    }
    return f.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Q.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
f.reduceDescriptors(Q.prototype, ({ value: e }, t) => {
  let s = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[s] = r;
    }
  };
});
f.freezeMethods(Q);
function Je(e, t) {
  const s = this || Ae, r = t || s, a = Q.from(r.headers);
  let o = r.data;
  return f.forEach(e, function(d) {
    o = d.call(s, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function Wt(e) {
  return !!(e && e.__CANCEL__);
}
let Ne = class extends S {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, s, r) {
    super(t ?? "canceled", S.ERR_CANCELED, s, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Jt(e, t, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status) ? e(s) : t(
    new S(
      "Request failed with status code " + s.status,
      [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    )
  );
}
function Ar(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Nr(e, t) {
  e = e || 10;
  const s = new Array(e), r = new Array(e);
  let a = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(x) {
    const h = Date.now(), b = r[o];
    i || (i = h), s[a] = x, r[a] = h;
    let _ = o, R = 0;
    for (; _ !== a; )
      R += s[_++], _ = _ % e;
    if (a = (a + 1) % e, a === o && (o = (o + 1) % e), h - i < t)
      return;
    const A = b && h - b;
    return A ? Math.round(R * 1e3 / A) : void 0;
  };
}
function Fr(e, t) {
  let s = 0, r = 1e3 / t, a, o;
  const i = (h, b = Date.now()) => {
    s = b, a = null, o && (clearTimeout(o), o = null), e(...h);
  };
  return [(...h) => {
    const b = Date.now(), _ = b - s;
    _ >= r ? i(h, b) : (a = h, o || (o = setTimeout(() => {
      o = null, i(a);
    }, r - _)));
  }, () => a && i(a)];
}
const je = (e, t, s = 3) => {
  let r = 0;
  const a = Nr(50, 250);
  return Fr((o) => {
    const i = o.loaded, d = o.lengthComputable ? o.total : void 0, x = i - r, h = a(x), b = i <= d;
    r = i;
    const _ = {
      loaded: i,
      total: d,
      progress: d ? i / d : void 0,
      bytes: x,
      rate: h || void 0,
      estimated: h && d && b ? (d - i) / h : void 0,
      event: o,
      lengthComputable: d != null,
      [t ? "download" : "upload"]: !0
    };
    e(_);
  }, s);
}, wt = (e, t) => {
  const s = e != null;
  return [
    (r) => t[0]({
      lengthComputable: s,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, _t = (e) => (...t) => f.asap(() => e(...t)), Br = q.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (s) => (s = new URL(s, q.origin), e.protocol === s.protocol && e.host === s.host && (t || e.port === s.port)))(
  new URL(q.origin),
  q.navigator && /(msie|trident)/i.test(q.navigator.userAgent)
) : () => !0, Pr = q.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, s, r, a, o, i) {
      if (typeof document > "u") return;
      const d = [`${e}=${encodeURIComponent(t)}`];
      f.isNumber(s) && d.push(`expires=${new Date(s).toUTCString()}`), f.isString(r) && d.push(`path=${r}`), f.isString(a) && d.push(`domain=${a}`), o === !0 && d.push("secure"), f.isString(i) && d.push(`SameSite=${i}`), document.cookie = d.join("; ");
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
function $r(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Lr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Kt(e, t, s) {
  let r = !$r(t);
  return e && (r || s == !1) ? Lr(e, t) : t;
}
const kt = (e) => e instanceof Q ? { ...e } : e;
function xe(e, t) {
  t = t || {};
  const s = {};
  function r(h, b, _, R) {
    return f.isPlainObject(h) && f.isPlainObject(b) ? f.merge.call({ caseless: R }, h, b) : f.isPlainObject(b) ? f.merge({}, b) : f.isArray(b) ? b.slice() : b;
  }
  function a(h, b, _, R) {
    if (f.isUndefined(b)) {
      if (!f.isUndefined(h))
        return r(void 0, h, _, R);
    } else return r(h, b, _, R);
  }
  function o(h, b) {
    if (!f.isUndefined(b))
      return r(void 0, b);
  }
  function i(h, b) {
    if (f.isUndefined(b)) {
      if (!f.isUndefined(h))
        return r(void 0, h);
    } else return r(void 0, b);
  }
  function d(h, b, _) {
    if (_ in t)
      return r(h, b);
    if (_ in e)
      return r(void 0, h);
  }
  const x = {
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
    validateStatus: d,
    headers: (h, b, _) => a(kt(h), kt(b), _, !0)
  };
  return f.forEach(Object.keys({ ...e, ...t }), function(b) {
    if (b === "__proto__" || b === "constructor" || b === "prototype") return;
    const _ = f.hasOwnProp(x, b) ? x[b] : a, R = _(e[b], t[b], b);
    f.isUndefined(R) && _ !== d || (s[b] = R);
  }), s;
}
const Xt = (e) => {
  const t = xe({}, e);
  let { data: s, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: o, headers: i, auth: d } = t;
  if (t.headers = i = Q.from(i), t.url = Ht(
    Kt(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), d && i.set(
    "Authorization",
    "Basic " + btoa(
      (d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : "")
    )
  ), f.isFormData(s)) {
    if (q.hasStandardBrowserEnv || q.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (f.isFunction(s.getHeaders)) {
      const x = s.getHeaders(), h = ["content-type", "content-length"];
      Object.entries(x).forEach(([b, _]) => {
        h.includes(b.toLowerCase()) && i.set(b, _);
      });
    }
  }
  if (q.hasStandardBrowserEnv && (r && f.isFunction(r) && (r = r(t)), r || r !== !1 && Br(t.url))) {
    const x = a && o && Pr.read(o);
    x && i.set(a, x);
  }
  return t;
}, jr = typeof XMLHttpRequest < "u", Ir = jr && function(e) {
  return new Promise(function(s, r) {
    const a = Xt(e);
    let o = a.data;
    const i = Q.from(a.headers).normalize();
    let { responseType: d, onUploadProgress: x, onDownloadProgress: h } = a, b, _, R, A, m;
    function E() {
      A && A(), m && m(), a.cancelToken && a.cancelToken.unsubscribe(b), a.signal && a.signal.removeEventListener("abort", b);
    }
    let w = new XMLHttpRequest();
    w.open(a.method.toUpperCase(), a.url, !0), w.timeout = a.timeout;
    function P() {
      if (!w)
        return;
      const O = Q.from(
        "getAllResponseHeaders" in w && w.getAllResponseHeaders()
      ), D = {
        data: !d || d === "text" || d === "json" ? w.responseText : w.response,
        status: w.status,
        statusText: w.statusText,
        headers: O,
        config: e,
        request: w
      };
      Jt(
        function(U) {
          s(U), E();
        },
        function(U) {
          r(U), E();
        },
        D
      ), w = null;
    }
    "onloadend" in w ? w.onloadend = P : w.onreadystatechange = function() {
      !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(P);
    }, w.onabort = function() {
      w && (r(new S("Request aborted", S.ECONNABORTED, e, w)), w = null);
    }, w.onerror = function(F) {
      const D = F && F.message ? F.message : "Network Error", X = new S(D, S.ERR_NETWORK, e, w);
      X.event = F || null, r(X), w = null;
    }, w.ontimeout = function() {
      let F = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const D = a.transitional || rt;
      a.timeoutErrorMessage && (F = a.timeoutErrorMessage), r(
        new S(
          F,
          D.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
          e,
          w
        )
      ), w = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in w && f.forEach(i.toJSON(), function(F, D) {
      w.setRequestHeader(D, F);
    }), f.isUndefined(a.withCredentials) || (w.withCredentials = !!a.withCredentials), d && d !== "json" && (w.responseType = a.responseType), h && ([R, m] = je(h, !0), w.addEventListener("progress", R)), x && w.upload && ([_, A] = je(x), w.upload.addEventListener("progress", _), w.upload.addEventListener("loadend", A)), (a.cancelToken || a.signal) && (b = (O) => {
      w && (r(!O || O.type ? new Ne(null, e, w) : O), w.abort(), w = null);
    }, a.cancelToken && a.cancelToken.subscribe(b), a.signal && (a.signal.aborted ? b() : a.signal.addEventListener("abort", b)));
    const L = Ar(a.url);
    if (L && q.protocols.indexOf(L) === -1) {
      r(
        new S(
          "Unsupported protocol " + L + ":",
          S.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    w.send(o || null);
  });
}, zr = (e, t) => {
  const { length: s } = e = e ? e.filter(Boolean) : [];
  if (t || s) {
    let r = new AbortController(), a;
    const o = function(h) {
      if (!a) {
        a = !0, d();
        const b = h instanceof Error ? h : this.reason;
        r.abort(
          b instanceof S ? b : new Ne(b instanceof Error ? b.message : b)
        );
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new S(`timeout of ${t}ms exceeded`, S.ETIMEDOUT));
    }, t);
    const d = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((h) => {
        h.unsubscribe ? h.unsubscribe(o) : h.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((h) => h.addEventListener("abort", o));
    const { signal: x } = r;
    return x.unsubscribe = () => f.asap(d), x;
  }
}, Mr = function* (e, t) {
  let s = e.byteLength;
  if (s < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < s; )
    a = r + t, yield e.slice(r, a), r = a;
}, Dr = async function* (e, t) {
  for await (const s of Ur(e))
    yield* Mr(s, t);
}, Ur = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: s, value: r } = await t.read();
      if (s)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Et = (e, t, s, r) => {
  const a = Dr(e, t);
  let o = 0, i, d = (x) => {
    i || (i = !0, r && r(x));
  };
  return new ReadableStream(
    {
      async pull(x) {
        try {
          const { done: h, value: b } = await a.next();
          if (h) {
            d(), x.close();
            return;
          }
          let _ = b.byteLength;
          if (s) {
            let R = o += _;
            s(R);
          }
          x.enqueue(new Uint8Array(b));
        } catch (h) {
          throw d(h), h;
        }
      },
      cancel(x) {
        return d(x), a.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, Ct = 64 * 1024, { isFunction: Be } = f, qr = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(f.global), { ReadableStream: St, TextEncoder: Rt } = f.global, Ot = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Hr = (e) => {
  e = f.merge.call(
    {
      skipUndefined: !0
    },
    qr,
    e
  );
  const { fetch: t, Request: s, Response: r } = e, a = t ? Be(t) : typeof fetch == "function", o = Be(s), i = Be(r);
  if (!a)
    return !1;
  const d = a && Be(St), x = a && (typeof Rt == "function" ? /* @__PURE__ */ ((m) => (E) => m.encode(E))(new Rt()) : async (m) => new Uint8Array(await new s(m).arrayBuffer())), h = o && d && Ot(() => {
    let m = !1;
    const E = new s(q.origin, {
      body: new St(),
      method: "POST",
      get duplex() {
        return m = !0, "half";
      }
    }).headers.has("Content-Type");
    return m && !E;
  }), b = i && d && Ot(() => f.isReadableStream(new r("").body)), _ = {
    stream: b && ((m) => m.body)
  };
  a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((m) => {
    !_[m] && (_[m] = (E, w) => {
      let P = E && E[m];
      if (P)
        return P.call(E);
      throw new S(
        `Response type '${m}' is not supported`,
        S.ERR_NOT_SUPPORT,
        w
      );
    });
  });
  const R = async (m) => {
    if (m == null)
      return 0;
    if (f.isBlob(m))
      return m.size;
    if (f.isSpecCompliantForm(m))
      return (await new s(q.origin, {
        method: "POST",
        body: m
      }).arrayBuffer()).byteLength;
    if (f.isArrayBufferView(m) || f.isArrayBuffer(m))
      return m.byteLength;
    if (f.isURLSearchParams(m) && (m = m + ""), f.isString(m))
      return (await x(m)).byteLength;
  }, A = async (m, E) => {
    const w = f.toFiniteNumber(m.getContentLength());
    return w ?? R(E);
  };
  return async (m) => {
    let {
      url: E,
      method: w,
      data: P,
      signal: L,
      cancelToken: O,
      timeout: F,
      onDownloadProgress: D,
      onUploadProgress: X,
      responseType: U,
      headers: ce,
      withCredentials: se = "same-origin",
      fetchOptions: c
    } = Xt(m), ue = t || fetch;
    U = U ? (U + "").toLowerCase() : "text";
    let Y = zr(
      [L, O && O.toAbortSignal()],
      F
    ), ae = null;
    const H = Y && Y.unsubscribe && (() => {
      Y.unsubscribe();
    });
    let fe;
    try {
      if (X && h && w !== "get" && w !== "head" && (fe = await A(ce, P)) !== 0) {
        let oe = new s(E, {
          method: "POST",
          body: P,
          duplex: "half"
        }), V;
        if (f.isFormData(P) && (V = oe.headers.get("content-type")) && ce.setContentType(V), oe.body) {
          const [$, le] = wt(
            fe,
            je(_t(X))
          );
          P = Et(oe.body, Ct, $, le);
        }
      }
      f.isString(se) || (se = se ? "include" : "omit");
      const j = o && "credentials" in s.prototype, G = {
        ...c,
        signal: Y,
        method: w.toUpperCase(),
        headers: ce.normalize().toJSON(),
        body: P,
        duplex: "half",
        credentials: j ? se : void 0
      };
      ae = o && new s(E, G);
      let I = await (o ? ue(ae, c) : ue(E, G));
      const _e = b && (U === "stream" || U === "response");
      if (b && (D || _e && H)) {
        const oe = {};
        ["status", "statusText", "headers"].forEach((ke) => {
          oe[ke] = I[ke];
        });
        const V = f.toFiniteNumber(I.headers.get("content-length")), [$, le] = D && wt(
          V,
          je(_t(D), !0)
        ) || [];
        I = new r(
          Et(I.body, Ct, $, () => {
            le && le(), H && H();
          }),
          oe
        );
      }
      U = U || "text";
      let ve = await _[f.findKey(_, U) || "text"](
        I,
        m
      );
      return !_e && H && H(), await new Promise((oe, V) => {
        Jt(oe, V, {
          data: ve,
          headers: Q.from(I.headers),
          status: I.status,
          statusText: I.statusText,
          config: m,
          request: ae
        });
      });
    } catch (j) {
      throw H && H(), j && j.name === "TypeError" && /Load failed|fetch/i.test(j.message) ? Object.assign(
        new S(
          "Network Error",
          S.ERR_NETWORK,
          m,
          ae,
          j && j.response
        ),
        {
          cause: j.cause || j
        }
      ) : S.from(j, j && j.code, m, ae, j && j.response);
    }
  };
}, Vr = /* @__PURE__ */ new Map(), Gt = (e) => {
  let t = e && e.env || {};
  const { fetch: s, Request: r, Response: a } = t, o = [r, a, s];
  let i = o.length, d = i, x, h, b = Vr;
  for (; d--; )
    x = o[d], h = b.get(x), h === void 0 && b.set(x, h = d ? /* @__PURE__ */ new Map() : Hr(t)), b = h;
  return h;
};
Gt();
const at = {
  http: ir,
  xhr: Ir,
  fetch: {
    get: Gt
  }
};
f.forEach(at, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Tt = (e) => `- ${e}`, Wr = (e) => f.isFunction(e) || e === null || e === !1;
function Jr(e, t) {
  e = f.isArray(e) ? e : [e];
  const { length: s } = e;
  let r, a;
  const o = {};
  for (let i = 0; i < s; i++) {
    r = e[i];
    let d;
    if (a = r, !Wr(r) && (a = at[(d = String(r)).toLowerCase()], a === void 0))
      throw new S(`Unknown adapter '${d}'`);
    if (a && (f.isFunction(a) || (a = a.get(t))))
      break;
    o[d || "#" + i] = a;
  }
  if (!a) {
    const i = Object.entries(o).map(
      ([x, h]) => `adapter ${x} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let d = s ? i.length > 1 ? `since :
` + i.map(Tt).join(`
`) : " " + Tt(i[0]) : "as no adapter specified";
    throw new S(
      "There is no suitable adapter to dispatch the request " + d,
      "ERR_NOT_SUPPORT"
    );
  }
  return a;
}
const Zt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Jr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: at
};
function Ke(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ne(null, e);
}
function At(e) {
  return Ke(e), e.headers = Q.from(e.headers), e.data = Je.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Zt.getAdapter(e.adapter || Ae.adapter, e)(e).then(
    function(r) {
      return Ke(e), r.data = Je.call(e, e.transformResponse, r), r.headers = Q.from(r.headers), r;
    },
    function(r) {
      return Wt(r) || (Ke(e), r && r.response && (r.response.data = Je.call(
        e,
        e.transformResponse,
        r.response
      ), r.response.headers = Q.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const Qt = "1.13.6", qe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  qe[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Nt = {};
qe.transitional = function(t, s, r) {
  function a(o, i) {
    return "[Axios v" + Qt + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, d) => {
    if (t === !1)
      throw new S(
        a(i, " has been removed" + (s ? " in " + s : "")),
        S.ERR_DEPRECATED
      );
    return s && !Nt[i] && (Nt[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(o, i, d) : !0;
  };
};
qe.spelling = function(t) {
  return (s, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Kr(e, t, s) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const o = r[a], i = t[o];
    if (i) {
      const d = e[o], x = d === void 0 || i(d, o, e);
      if (x !== !0)
        throw new S(
          "option " + o + " must be " + x,
          S.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (s !== !0)
      throw new S("Unknown option " + o, S.ERR_BAD_OPTION);
  }
}
const Le = {
  assertOptions: Kr,
  validators: qe
}, te = Le.validators;
let me = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new gt(),
      response: new gt()
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
  async request(t, s) {
    try {
      return await this._request(t, s);
    } catch (r) {
      if (r instanceof Error) {
        let a = {};
        Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error();
        const o = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, s) {
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = xe(this.defaults, s);
    const { transitional: r, paramsSerializer: a, headers: o } = s;
    r !== void 0 && Le.assertOptions(
      r,
      {
        silentJSONParsing: te.transitional(te.boolean),
        forcedJSONParsing: te.transitional(te.boolean),
        clarifyTimeoutError: te.transitional(te.boolean),
        legacyInterceptorReqResOrdering: te.transitional(te.boolean)
      },
      !1
    ), a != null && (f.isFunction(a) ? s.paramsSerializer = {
      serialize: a
    } : Le.assertOptions(
      a,
      {
        encode: te.function,
        serialize: te.function
      },
      !0
    )), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), Le.assertOptions(
      s,
      {
        baseUrl: te.spelling("baseURL"),
        withXsrfToken: te.spelling("withXSRFToken")
      },
      !0
    ), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let i = o && f.merge(o.common, o[s.method]);
    o && f.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (m) => {
      delete o[m];
    }), s.headers = Q.concat(i, o);
    const d = [];
    let x = !0;
    this.interceptors.request.forEach(function(E) {
      if (typeof E.runWhen == "function" && E.runWhen(s) === !1)
        return;
      x = x && E.synchronous;
      const w = s.transitional || rt;
      w && w.legacyInterceptorReqResOrdering ? d.unshift(E.fulfilled, E.rejected) : d.push(E.fulfilled, E.rejected);
    });
    const h = [];
    this.interceptors.response.forEach(function(E) {
      h.push(E.fulfilled, E.rejected);
    });
    let b, _ = 0, R;
    if (!x) {
      const m = [At.bind(this), void 0];
      for (m.unshift(...d), m.push(...h), R = m.length, b = Promise.resolve(s); _ < R; )
        b = b.then(m[_++], m[_++]);
      return b;
    }
    R = d.length;
    let A = s;
    for (; _ < R; ) {
      const m = d[_++], E = d[_++];
      try {
        A = m(A);
      } catch (w) {
        E.call(this, w);
        break;
      }
    }
    try {
      b = At.call(this, A);
    } catch (m) {
      return Promise.reject(m);
    }
    for (_ = 0, R = h.length; _ < R; )
      b = b.then(h[_++], h[_++]);
    return b;
  }
  getUri(t) {
    t = xe(this.defaults, t);
    const s = Kt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Ht(s, t.params, t.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(t) {
  me.prototype[t] = function(s, r) {
    return this.request(
      xe(r || {}, {
        method: t,
        url: s,
        data: (r || {}).data
      })
    );
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function s(r) {
    return function(o, i, d) {
      return this.request(
        xe(d || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: i
        })
      );
    };
  }
  me.prototype[t] = s(), me.prototype[t + "Form"] = s(!0);
});
let Xr = class Yt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function(o) {
      s = o;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let o;
      const i = new Promise((d) => {
        r.subscribe(d), o = d;
      }).then(a);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, d) {
      r.reason || (r.reason = new Ne(o, i, d), s(r.reason));
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
    const s = this._listeners.indexOf(t);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), s = (r) => {
      t.abort(r);
    };
    return this.subscribe(s), t.signal.unsubscribe = () => this.unsubscribe(s), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Yt(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
function Gr(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function Zr(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const Qe = {
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
Object.entries(Qe).forEach(([e, t]) => {
  Qe[t] = e;
});
function es(e) {
  const t = new me(e), s = Bt(me.prototype.request, t);
  return f.extend(s, me.prototype, t, { allOwnKeys: !0 }), f.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(a) {
    return es(xe(e, a));
  }, s;
}
const T = es(Ae);
T.Axios = me;
T.CanceledError = Ne;
T.CancelToken = Xr;
T.isCancel = Wt;
T.VERSION = Qt;
T.toFormData = Ue;
T.AxiosError = S;
T.Cancel = T.CanceledError;
T.all = function(t) {
  return Promise.all(t);
};
T.spread = Gr;
T.isAxiosError = Zr;
T.mergeConfig = xe;
T.AxiosHeaders = Q;
T.formToJSON = (e) => Vt(f.isHTMLForm(e) ? new FormData(e) : e);
T.getAdapter = Zt.getAdapter;
T.HttpStatusCode = Qe;
T.default = T;
const {
  Axios: No,
  AxiosError: Fo,
  CanceledError: Bo,
  isCancel: Po,
  CancelToken: $o,
  VERSION: Lo,
  all: jo,
  Cancel: Io,
  isAxiosError: zo,
  spread: Mo,
  toFormData: Do,
  AxiosHeaders: Uo,
  HttpStatusCode: qo,
  formToJSON: Ho,
  getAdapter: Vo,
  mergeConfig: Wo
} = T, Ye = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), ts = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), ss = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, s = document.getElementById(e.el_id);
      if (!s)
        throw new Error("[el_id] is invalid");
      ((r) => {
        const a = (o) => {
          ((i) => {
            const d = i.getAttribute("data-ce");
            if (!d)
              return;
            const x = JSON.parse(d).filter((h) => h?.k.startsWith("t-"));
            if (x.length != 0)
              for (const h of x) {
                const b = h.k, _ = h.v.split(" ");
                if (b == `t-${t}-class`)
                  for (const R of _)
                    i.classList.add(R);
                else
                  for (const R of _)
                    i.classList.remove(R);
              }
          })(o);
        };
        for (const o of r.getElementsByTagName("*"))
          a(o);
        a(r);
      })(s);
    } catch (t) {
      const s = `err: [theme] ${t}`;
      throw console.log(s), s;
    }
  }
});
function et(e, t = 1e3) {
  let s = {
    cnt: 0
  };
  return new Promise((r) => {
    const a = () => {
      console.log(`[setInterval] is running.. [count=${s.cnt}]`);
      try {
        e() && (clearInterval(o), r());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      s.cnt += 1;
    }, o = setInterval(() => {
      a();
    }, t);
    a();
  });
}
let Qr = class {
  listeners = {};
  on = (e, t) => ((this.listeners[e] ||= []).push(t), () => this.off(e, t));
  off = (e, t) => {
    this.listeners[e] = this.listeners[e]?.filter((s) => s !== t);
  };
  /** Sequential execution (await each listener) */
  emit = async (e, ...t) => {
    for (const s of this.listeners[e] ?? [])
      await s(...t);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (e, ...t) => {
    await Promise.all(
      (this.listeners[e] ?? []).map((s) => s(...t))
    );
  };
  //Error-safe emit
  emitSafe = async (e, ...t) => {
    for (const s of this.listeners[e] ?? [])
      try {
        await s(...t);
      } catch (r) {
        this.listeners.error?.forEach(
          (a) => a(r)
        );
      }
  };
};
const Ie = () => new Qr();
class rs {
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
let M = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [s, r] of t.entries()) {
        const a = r, o = `${a.name}:${e.run_from}`, i = `${e.run_from}_src`;
        let d = a[i];
        const x = `${e.run_from}_src`;
        let h = e?.lazy_lib?.[x] || null;
        if (h && (h = h.replace("{*}", `${a.name}`)), console.log(`_lazy_src: ${h}`), console.log(`_src: ${d}`), M.lib.l.hasOwnProperty(`${o}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(d) && d.includes("/") == !1 && M.lib.inbuilt_lib.indexOf(`${a.name}`) === -1)
            if (h)
              d = h;
            else
              throw `[lib-name=${a.name},lib-src=${d}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (d.startsWith("./") || d.startsWith("../")) {
            const b = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${d}`
            );
            M.lib.l[`${o}`] = {
              lib: b,
              src: d
            };
          }
          if (d.startsWith("http://") || d.startsWith("https://")) {
            const b = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${d}`
            );
            M.lib.l[`${o}`] = {
              lib: b,
              src: d
            };
          }
        }
      }
      console.log(await M.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const s = `${e.name}:${e.run_from}`;
      return M.lib.l.hasOwnProperty(`${s}`) == !1 && await M.lib.set({
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
      }), t = M.lib.l[`${s}`], t;
    },
    get_all: async (e) => M.lib.l
  },
  path: {
    set: (e) => {
      let t = "", s = "";
      const r = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (s = "/dist"), r.indexOf(e.type) !== -1)
        for (const [a, o] of r.entries()) {
          let i = a == 0 ? "" : "/";
          if (t += `${i}${o}`, o == e.type)
            return `${t}${s}${e.name}`;
        }
      else
        for (const [a, o] of r.entries()) {
          let i = a == 0 ? "" : "/";
          if (t += `${i}${o}`, o == "src")
            return `${t}${s}${e.name}`;
        }
      return `${t}${s}${e.name}`;
    }
  }
};
const ns = Ie(), as = Ie(), Yr = ns.on;
ns.emit;
const en = as.emit;
as.on;
const tn = async (e) => {
  const t = await ts();
  return await M.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (s) => {
      console.log("--renderer [set]"), s.return = s?.return || {}, s.return.r = s?.return?.r || "full";
      const r = new rs();
      r.start();
      let a = s.data?.value?.l || s.data.l, o = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return s.return.r == "full" ? o.r = "" : o.r = [], await (async () => {
        for (const i of a) {
          const d = await await M.lib.get({ name: i.type, run_from: "renderer", lazy_lib: e.lazy_lib }), x = await (await d.lib.index({
            f: {
              name: (h) => t.f.name({ id: i.id, name: h }),
              get_lib: async (h) => await await M.lib.get({ name: h.name, run_from: h.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (h) => await (await ss()).set(h),
              path: (h) => M.path.set({ src: d.src, type: i.type, name: h }),
              //set..
              uuid: () => Ye().set(),
              wait_until: et
            }
          })).set(
            {
              data: {
                curr: i
              }
            }
            /*_$cb*/
          );
          s?.return?.r == "full" ? o.r += x?.r || "" : o.r.push(x?.r || ""), o.style += x?.style || "", o.head += x?.head || "";
        }
      })(), r.stop(), o.benchmark = r.result(), o;
    }
  };
}, sn = async (e) => {
  const t = await ts();
  return await M.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (s) => {
      console.log("--hydrator [set]");
      const r = new rs();
      r.start();
      let a = {
        r: "",
        style: ""
      }, o = {
        style_id: `${Ye().set()}_stl`
      }, i = s.data?.value?.l || s.data.l;
      const d = async () => {
        for (const x of i) {
          const h = await await M.lib.get({ name: x.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), b = h.lib, _ = Ie(), R = _.on, A = await (await b.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (m) => t.f.name({ id: x.id, name: m }),
              get_lib: async (m) => await await M.lib.get({ name: m.name, run_from: m.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (m) => await (await ss()).set(m),
              path: (m) => M.path.set({ src: h.src, type: x.type, name: m }),
              //set..
              uuid: () => Ye().set(),
              wait_until: et,
              //set..
              call: en,
              listen: R,
              //set..
              new_emitter: () => Ie()
            }
          })).set(
            {
              data: {
                curr: x
              }
            }
            /*_$cb*/
          );
          Yr("msg", async (m) => {
            try {
              if (Object.keys(m.where || {}).length == 0) {
                await _.emit("msg", m);
                return;
              }
            } catch {
            }
            try {
              if (x?.[m.where?.key || ""] == m.where?.value) {
                await _.emit("msg", m);
                return;
              }
            } catch {
            }
          }), a.style += A.style;
        }
      };
      await et(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await d();
      try {
        ((x) => {
          const h = document.getElementById(`${o.style_id}`);
          h && h.remove();
          const b = document.createElement("style");
          b.id = `${o.style_id}`, b.innerHTML = `${a.style}`, x.appendChild(b);
        })(document.head);
      } catch (x) {
        console.log(`${x}, Failed to set style..`);
      }
      return r.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: r.result()
      };
    }
  };
}, rn = ["id"], nn = { class: "flex gap-2 items-center" }, an = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  class: "text-amber-400 fill-amber-400/20"
}, on = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, ln = {
  key: 0,
  class: "max-w-[1440px] mx-auto px-4 py-6 md:px-8"
}, dn = { class: "grid grid-cols-1 lg:!grid-cols-[1fr_380px] gap-12" }, cn = { class: "space-y-4" }, un = {
  key: 1,
  class: "max-w-[1440px] mx-auto md:px-8 md:py-8"
}, fn = { class: "!hidden md:!flex text-sm mb-8 items-center gap-2 justify-between" }, pn = { class: "hover:text-blue-500 transition-colors cursor-pointer capitalize" }, hn = { class: "relative w-4 h-4 overflow-hidden" }, bn = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  class: "animate-[spin_3s_linear_infinite]"
}, mn = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, xn = { class: "text-xs font-semibold tracking-wide" }, vn = { class: "!hidden md:!block mb-10" }, gn = { class: "flex gap-2 mb-4" }, yn = {
  key: 0,
  class: "px-2.5 py-1 rounded-md bg-rose-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm shadow-rose-500/30"
}, wn = { class: "flex items-center text-amber-500 gap-1.5" }, _n = { class: "flex" }, kn = {
  key: 0,
  class: "tracking-wide"
}, En = { class: "font-mono" }, Cn = {
  key: 0,
  class: "flex flex-wrap gap-2 mt-4"
}, Sn = { class: "grid grid-cols-1 lg:!grid-cols-[1fr_400px] gap-0 lg:!gap-16 items-start" }, Rn = { class: "w-full" }, On = { class: "md:!hidden px-4 pt-2 mb-6" }, Tn = { class: "flex gap-2 mb-3" }, An = {
  key: 0,
  class: "px-2 py-0.5 rounded bg-rose-500 text-white text-[10px] font-bold shadow-md shadow-rose-500/20"
}, Nn = { class: "flex items-center text-amber-500 text-sm" }, Fn = { class: "ml-2 font-semibold" }, Bn = { class: "text-xs opacity-60 ml-1 text-current" }, Pn = {
  key: 0,
  class: "flex flex-wrap gap-2 mt-3 no-scrollbar overflow-x-auto"
}, $n = { class: "grid grid-cols-1 lg:!grid-cols-[550px_1fr] gap-10 mb-12" }, Ln = { class: "relative group" }, jn = { class: "!hidden md:!flex gap-4 h-[600px]" }, In = { class: "flex flex-col gap-3 w-[80px] overflow-y-auto no-scrollbar py-1" }, zn = ["onMouseover"], Mn = ["src"], Dn = ["src"], Un = { class: "absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity" }, qn = ["fill"], Hn = ["src"], Vn = { class: "px-4 lg:px-0 flex flex-col gap-8" }, Wn = { class: "flex items-baseline gap-3 mb-2" }, Jn = { class: "text-3xl font-extrabold text-rose-500 tracking-tight" }, Kn = {
  key: 0,
  class: "text-base text-slate-400 line-through decoration-slate-400/50"
}, Xn = { key: 0 }, Gn = { class: "flex flex-wrap gap-3" }, Zn = ["onClick"], Qn = ["src"], Yn = {
  key: 2,
  class: "absolute inset-0 bg-black/20 flex items-center justify-center z-10 backdrop-blur-[1px]"
}, ea = { key: 1 }, ta = { class: "flex justify-between items-center mb-3" }, sa = { class: "flex flex-wrap gap-2.5" }, ra = ["onClick"], na = { class: "space-y-3 mb-5" }, aa = { class: "flex gap-2" }, oa = ["disabled"], la = {
  key: 0,
  class: "animate-spin h-4 w-4 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ia = { key: 1 }, da = {
  key: 0,
  class: "text-xs text-rose-500 mt-1 font-medium"
}, ca = { class: "flex gap-4 text-sm" }, ua = { class: "flex items-center gap-2 mt-2" }, fa = ["innerHTML"], pa = {
  id: "characteristics",
  class: "scroll-mt-32"
}, ha = ["onClick"], ba = { class: "flex justify-between items-center mb-8" }, ma = {
  key: 0,
  class: "grid gap-6 md:grid-cols-2"
}, xa = {
  key: 1,
  class: "grid gap-6 md:grid-cols-2"
}, va = { class: "flex justify-between items-start mb-4" }, ga = { class: "flex items-center gap-3" }, ya = { class: "!hidden lg:!block w-[380px]" }, wa = { class: "flex items-start justify-between mb-6" }, _a = { class: "flex items-baseline gap-2.5" }, ka = { class: "text-[32px] font-extrabold leading-none text-rose-500 tracking-tight" }, Ea = {
  key: 0,
  class: "text-base text-slate-400 line-through decoration-slate-400/50"
}, Ca = { class: "flex gap-2" }, Sa = ["disabled"], Ra = {
  key: 0,
  class: "animate-spin h-4 w-4 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Oa = { key: 1 }, Ta = {
  key: 0,
  class: "text-xs text-rose-500 mt-1 font-medium"
}, Aa = { class: "flex gap-4 text-sm" }, Na = { class: "flex items-center gap-2 mt-2" }, Fa = { class: "space-y-3" }, Ba = ["disabled"], Pa = { class: "flex flex-col items-center justify-center" }, $a = ["disabled"], La = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ja = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5"
}, Ia = ["disabled"], za = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Ma = { key: 1 }, Da = ["disabled"], Ua = ["innerHTML"], qa = {
  key: 1,
  class: "flex gap-4 animate-pulse overflow-hidden px-4"
}, Ha = { class: "flex flex-col min-w-[80px]" }, Va = {
  key: 0,
  class: "text-xs text-slate-400 line-through mt-0.5"
}, Wa = ["disabled"], Ja = ["disabled"], Ka = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Xa = {
  key: 1,
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5"
}, Ga = ["disabled"], Za = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Qa = { key: 1 }, Ya = { class: "w-full max-w-3xl bg-white dark:bg-slate-900 rounded-t-[32px] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh] animate-[slideUp_0.3s_ease-out]" }, eo = { class: "px-6 pt-2 md:pt-6 pb-0 border-b border-gray-100 dark:border-slate-800" }, to = { class: "flex justify-between items-center mb-6" }, so = { class: "flex space-x-6" }, ro = { class: "overflow-y-auto p-4 md:p-8 flex-1 custom-widget-scroll" }, no = { class: "animate-[fadeIn_0.3s_ease-out]" }, ao = {
  key: 0,
  class: "flex justify-center p-4"
}, oo = ["src"], lo = { key: 1 }, io = { class: "flex justify-end mb-2" }, co = { class: "overflow-x-auto no-scrollbar pb-2" }, uo = { class: "w-full text-sm text-center border-collapse min-w-[500px]" }, fo = { class: "animate-[fadeIn_0.3s_ease-out] pb-4 md:pb-0" }, po = { class: "grid md:grid-cols-[200px_1fr] gap-8 md:gap-14 items-center" }, ho = { class: "w-full flex justify-center py-4" }, bo = {
  viewBox: "0 0 200 250",
  class: "w-full max-w-[160px] h-auto",
  fill: "none",
  stroke: "currentColor"
}, mo = ["stroke"], xo = ["stroke"], vo = { class: "space-y-6" }, go = { class: "relative pl-10" }, yo = { class: "relative pl-10" }, wo = { class: "relative pl-10" }, _o = "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/product_dir?typ=view_product", ko = /* @__PURE__ */ Ft({
  __name: "ProductPage",
  props: {
    _$p: {},
    _p: {},
    _$cb: {}
  },
  setup(e) {
    const t = e, s = {
      Default: [
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800",
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
        "https://images.unsplash.com/photo-1521334884684-d80222895322?w=800",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800"
      ]
    }, r = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], a = B(t._$p?.data?.curr?.data?.theme || "light"), o = B({
      id: "",
      brand: "",
      title: "",
      category: [],
      field_name: [],
      field_value: [],
      metadata: "{}",
      variant: [],
      variant_prices: [],
      variant_mrp: [],
      size: [],
      hashtags: []
    }), i = B(!0), d = B(""), x = B(""), h = B(""), b = B(0), _ = B(!1), R = B("chart"), A = B(!1), m = B(!1), E = B(""), w = B(""), P = B(t._$p?.data?.curr?.data?.deliver_to_country_code || "IN"), L = B(!1), O = B(null), F = B(""), D = async () => {
      if (!w.value) {
        F.value = "Please enter a PIN/ZIP code.";
        return;
      }
      L.value = !0, F.value = "", O.value = null;
      try {
        const y = await T.post(
          "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/order_management",
          {
            operation: "get_expected_delivery_date",
            postalcode: w.value.trim(),
            // 👇 UPDATE THIS LINE: Grab the country code from your product data
            // (Change 'origin_country' to whatever exact property name your backend uses)
            product_country_code: Y.value.country,
            deliver_to_country_code: P.value
          },
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${se.trim()}`
            }
          }
        );
        y?.data?.success ? O.value = y.data : F.value = "Could not verify delivery to this location.";
      } catch (y) {
        console.error("Failed to fetch delivery date:", y), F.value = "Error checking delivery. Please try again.";
      } finally {
        L.value = !1;
      }
    }, X = B([]), U = B(!1), ce = B([
      { question: "Payment Methods", answer: "We accept Visa, MasterCard, Mir cards, and SBP. You can also pay upon receipt.", isOpen: !1 },
      { question: "Delivery Options", answer: "Courier delivery to your door or pickup points. Free delivery for orders over 2000₽.", isOpen: !1 },
      { question: "Return Policy", answer: "You can return items within 14 days of receipt. Items must be unused and in original packaging.", isOpen: !1 },
      { question: "Warranty Information", answer: "All products come with a 6-month warranty covering manufacturing defects.", isOpen: !1 },
      { question: "Sizing Guide", answer: "Please refer to our size chart for accurate measurements to ensure the best fit.", isOpen: !1 }
    ]), se = localStorage.getItem("token") || "", c = K(() => a.value === "dark"), ue = K(() => t._p?.f?.name ? t._p.f.name("pd-root") : "pd-root"), Y = K(() => {
      if (!o.value.metadata) return {};
      try {
        return JSON.parse(o.value.metadata);
      } catch {
        return {};
      }
    }), ae = K(() => Y.value.color ? Y.value.color.map((y) => {
      let l = y.image?.[0]?.url ? y.image[0].url : null;
      return l && l.includes("example.com") && (l = null), { id: y.id, name: y.name, url: l };
    }) : []), H = K(() => {
      const y = x.value, l = Y.value.color?.find((p) => p.name === y);
      if (l && l.image && l.image.length > 0) {
        const p = l.image.filter((k) => k.url && !k.url.includes("example.com")).map((k) => k.url);
        if (p.length) return p;
      }
      return s.Default;
    }), fe = K(() => {
      const y = o.value.size;
      return !y || !Array.isArray(y) || y.length === 0 ? [] : [...new Set(y.map((p) => String(p).trim()))].filter(Boolean).sort((p, k) => {
        const N = r.indexOf(p.toUpperCase()), ee = r.indexOf(k.toUpperCase());
        if (N !== -1 && ee !== -1) return N - ee;
        if (N !== -1) return -1;
        if (ee !== -1) return 1;
        const pe = parseFloat(p), he = parseFloat(k);
        return !isNaN(pe) && !isNaN(he) ? pe - he : p.localeCompare(k, void 0, { numeric: !0 });
      });
    }), j = K(() => {
      const y = Y.value.size_info?.representation?.url || Y.value.size_info?.chart?.url || null;
      return y && !y.includes("example.com") ? y : null;
    }), G = K(() => o.value.variant_prices?.[0] || 0), I = K(() => o.value.variant_mrp?.[0] || 0), _e = K(() => Math.floor(G.value * 0.95)), ve = K(() => I.value > G.value ? Math.round((I.value - G.value) / I.value * 100) : 0), oe = K(() => {
      const y = o.value.field_name?.indexOf("Product Details");
      return y !== -1 && o.value.field_value?.[y] ? o.value.field_value[y] : "";
    }), V = B(0), $ = B(!1), le = K(() => {
      const y = Y.value.variant || o.value.variant;
      return y && y.length > 0 ? y.find((p) => {
        const k = h.value ? p.size_id === h.value : !0, N = x.value ? p.color_id === x.value : !0;
        return k && N;
      })?.id || y[0].id : null;
    }), ke = () => {
      const y = le.value;
      if (y) {
        const p = JSON.parse(localStorage.getItem("cart_items") || "[]").find((k) => k.product_id === o.value.id && k.variant_id === y);
        V.value = p ? p.quantity : 0;
      }
    };
    ut([x, h], () => {
      ke();
    });
    const ge = async (y) => {
      if (!o.value.id) return;
      const l = le.value;
      if (!l) return console.log("Please select a valid variant.");
      $.value = !0;
      const p = Math.max(0, V.value + y);
      if (!se) {
        let N = JSON.parse(localStorage.getItem("cart_items") || "[]"), ee = N.findIndex((pe) => pe.product_id === o.value.id && pe.variant_id === l);
        ee > -1 ? p === 0 ? N.splice(ee, 1) : N[ee].quantity = p : p > 0 && N.push({
          // Add New
          product_id: o.value.id,
          variant_id: l,
          quantity: p,
          title: o.value.title,
          price: G.value,
          image: H.value[0],
          color: x.value,
          size: h.value
        }), console.log("Guest Cart Updated:", N), localStorage.setItem("cart_items", JSON.stringify(N)), console.log("Cart updated successfully! locally"), V.value = p, setTimeout(() => {
          $.value = !1;
        }, 300);
      } else
        try {
          y > 0 && await T.post("https://fastapi.dryutil.1mn.io/client-public/api/i/ona/order_management", {
            operation: "add_to_cart",
            user_id: "user_1",
            // Replace with dynamic user ID later
            product_id: o.value.id,
            variant_id: l,
            quantity: y
            // Sending '1' tells the backend to increment the existing quantity
          }, {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${se.trim()}`
            }
          }), V.value = p, console.log(`Cart updated: Product ${o.value.id}, Variant ${l}, New Qty: ${p}`), console.log("Cart updated successfully!");
        } catch (N) {
          console.error("Cart API Error:", N), console.log("Failed to update cart. Please try again.");
        } finally {
          $.value = !1;
        }
      y > 0 && t._$cb?.add && t._$cb.add({ $d: t._$p?.data?.curr?.data || {}, el: document.getElementById(ue.value) });
    }, os = async () => {
      if (!o.value.id) return;
      const y = le.value;
      if (!y) return console.log("Please select a valid variant.");
      if ($.value = !0, !se) {
        const p = {
          product_id: o.value.id,
          variant_id: y,
          quantity: 1,
          // Strictly locked to 1 for Buy Now
          title: o.value.title,
          price: G.value,
          image: H.value[0],
          color: x.value,
          size: h.value
        };
        localStorage.setItem("buy_now_item", JSON.stringify([p])), console.log("Buy Now Item Saved locally:", p), console.log("Current Buy Now Item in Storage:", JSON.parse(localStorage.getItem("buy_now_item") || "[]"));
      } else
        try {
          const p = await T.post("https://fastapi.dryutil.1mn.io/client-public/api/i/ona/order_management", {
            operation: "add_to_cart",
            user_id: "user_1",
            // Update this dynamically later if needed
            product_id: o.value.id,
            variant_id: y,
            quantity: 1,
            buy_now: !0
            // Flags it as a direct buy now action for the backend
          }, {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${se.trim()}`
            }
          });
          console.log("Buy Now API Response:", p.data), console.log("Buy Now item added to cart. Redirecting to Buy Now...");
        } catch (p) {
          return console.error("Buy Now API Error:", p), $.value = !1, console.log("Failed to process Buy Now. Please try again.");
        }
      $.value = !1, location.href = t._$p?.data.curr.data.event.onClickBuyNow, console.log("Redirecting to buy-now page...");
    }, Fe = K(() => o.value.field_name ? o.value.field_name.map((y, l) => ({
      name: y,
      value: o.value.field_value[l]?.replace(/<[^>]*>/g, " ").trim()
    })).filter((y) => y.name !== "Product Details" && y.value) : []), ls = K(() => A.value ? Fe.value : Fe.value.slice(0, 5)), ie = (y) => new Intl.NumberFormat("ru-RU").format(y), ot = () => {
      const y = a.value === "dark" ? "light" : "dark";
      a.value = y, t._p?.f?.set_theme && t._p.f.set_theme({ name: y, el_id: ue.value }), t._$cb && t._$p?.data?.curr?.data && (t._$p.data.curr.data.theme = y, t._$cb.change && t._$cb.change({ _$p: t._$p }));
    }, lt = () => {
      console.log("Back requested");
    }, is = () => navigator.share?.({ title: o.value.title, url: window.location.href }).catch(console.error), ds = () => m.value = !m.value, it = (y) => {
      x.value = y.name, d.value = H.value[0];
    }, cs = (y) => {
      ce.value[y].isOpen = !ce.value[y].isOpen;
    }, us = () => document.getElementById("characteristics")?.scrollIntoView({ behavior: "smooth" }), fs = (y) => {
      const l = y.target;
      b.value = Math.round(l.scrollLeft / l.clientWidth);
    }, de = B({
      average_rating: 0,
      total_reviews: 0
    }), ps = async (y) => {
      U.value = !0;
      try {
        const l = await T.post(
          "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/order_management",
          {
            operation: "get_product_reviews",
            product_id: y,
            page: 1,
            per_page: 10
          },
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json"
              // Authorization: `Bearer ${TOKEN.trim()}`
            }
          }
        );
        if (console.log("Raw Backend Response:", l.data), l?.data?.success) {
          const p = l.data.analytics || {};
          de.value = {
            average_rating: Number(p.average_rating ?? 0),
            total_reviews: Number(p.total_reviews ?? 0)
          }, X.value = (l.data.reviews || []).map((k) => ({
            name: k.user_name || k.reviewer_name || k.name || k.user || "Customer",
            date: k.created_at ? new Date(k.created_at).toLocaleDateString() : "Recent",
            text: k.review_text || k.text || k.comment || "",
            rating: Number(k.rating ?? 5),
            color: [
              "#005bff",
              "#f91155",
              "#00c853",
              "#ff6d00",
              "#d500f9",
              "#00bcd4"
            ][Math.floor(Math.random() * 6)]
          })), console.log("Fetched Reviews:", X.value.length);
        }
      } catch (l) {
        console.error("Failed to fetch reviews:", l), X.value = [], de.value = { average_rating: 3.6, total_reviews: 50 };
      } finally {
        U.value = !1;
      }
    }, dt = async () => {
      i.value = !0;
      const l = { slug: (() => {
        let p = "";
        try {
          const N = new URL(location.href).pathname.split("/");
          p = N[N.length - 1];
        } catch {
        }
        return p;
      })(), collection: `products_${t._$p?.data.curr.data.lang_code}` };
      try {
        const p = await T.post(_o, l, {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${se.trim()}` }
        });
        if (p.data.success && p.data.data.length)
          o.value = { ...o.value, ...p.data.data[0].document }, console.log("Product data fetched successfully:", o);
        else
          throw new Error("No data found");
      } catch (p) {
        console.warn("API Error, using fallback data:", p);
      } finally {
        ae.value.length && it(ae.value[0]), fe.value.length && (h.value = fe.value[0]), d.value = H.value[0], i.value = !1, ke();
      }
    };
    bs(async () => {
      await dt(), o.value.id && await ps(o.value.id), await ft();
      const y = document.getElementById(ue.value);
      y && a.value && t._p?.f?.set_theme && t._p.f.set_theme({ name: a.value, el_id: y.id });
      const l = t._$p?.data?.curr?.data?.product_list_widget;
      let p = l ? JSON.parse(JSON.stringify(l)) : null;
      const k = { l: p ? [p] : [] }, N = {
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
        }
      };
      try {
        const ee = await tn(N), pe = await sn(N), he = await ee.set({
          data: k,
          _p: t._p,
          _$p: t._$p
        });
        if (E.value = he.r || he.html || "", he.style) {
          const ct = document.createElement("style");
          ct.innerHTML = he.style, document.head.appendChild(ct);
        }
        await ft(), setTimeout(async () => {
          await pe.set({
            data: k,
            _p: t._p,
            _$p: t._$p
          });
        }, 200);
      } catch (ee) {
        console.error("Widget render failed:", ee);
      }
    }), ut(() => t._$p?.data?.curr?.id, dt);
    const hs = (y) => {
      if (Math.abs(y.deltaX) > 0) return;
      const p = y.currentTarget.querySelector('.overflow-x-auto, [class*="overflow-x"]');
      if (p) {
        const k = p.scrollLeft === 0, N = p.scrollLeft + p.clientWidth >= p.scrollWidth - 1;
        y.deltaY > 0 && !N ? (y.preventDefault(), p.scrollBy({ left: 300, behavior: "smooth" })) : y.deltaY < 0 && !k && (y.preventDefault(), p.scrollBy({ left: -300, behavior: "smooth" }));
      }
    };
    return (y, l) => (v(), g("div", {
      id: ue.value,
      class: u(["font-sans min-h-screen pb-[100px] md:pb-0 antialiased transition-colors duration-300 ease-in-out selection:bg-rose-500 selection:text-white", c.value ? "bg-[#0f172a] text-slate-200" : "bg-[#F9FAFB] text-slate-900"])
    }, [
      n("nav", {
        class: u(["sticky top-0 z-50 backdrop-blur-xl flex justify-between items-center px-4 py-3 shadow-sm md:!hidden border-b transition-colors duration-300", c.value ? "bg-[#0f172a]/80 border-slate-800" : "bg-white/80 border-slate-200/60"])
      }, [
        n("button", {
          class: u(["p-2 -ml-2 transition-all duration-200 rounded-full active:scale-90", c.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
          onClick: lt
        }, [...l[14] || (l[14] = [
          n("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            n("path", { d: "M15 18l-6-6 6-6" })
          ], -1)
        ])], 2),
        n("div", nn, [
          n("button", {
            class: u(["p-2 transition-all duration-200 rounded-full active:scale-90", c.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
            onClick: ot
          }, [
            c.value ? (v(), g("svg", an, [...l[15] || (l[15] = [
              Ee('<circle cx="12" cy="12" r="5" data-v-8ba20f11></circle><line x1="12" y1="1" x2="12" y2="3" data-v-8ba20f11></line><line x1="12" y1="21" x2="12" y2="23" data-v-8ba20f11></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-8ba20f11></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-8ba20f11></line><line x1="1" y1="12" x2="3" y2="12" data-v-8ba20f11></line><line x1="21" y1="12" x2="23" y2="12" data-v-8ba20f11></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-8ba20f11></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-8ba20f11></line>', 9)
            ])])) : (v(), g("svg", on, [...l[16] || (l[16] = [
              n("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
            ])]))
          ], 2),
          n("button", {
            class: u(["p-2 transition-all duration-200 rounded-full active:scale-90", c.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
            onClick: is
          }, [...l[17] || (l[17] = [
            Ee('<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8ba20f11><circle cx="18" cy="5" r="3" data-v-8ba20f11></circle><circle cx="6" cy="12" r="3" data-v-8ba20f11></circle><circle cx="18" cy="19" r="3" data-v-8ba20f11></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-v-8ba20f11></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-v-8ba20f11></line></svg>', 1)
          ])], 2)
        ])
      ], 2),
      i.value ? (v(), g("div", ln, [
        n("div", {
          class: u(["!hidden md:!block h-5 w-64 rounded mb-8 animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
        }, null, 2),
        n("div", dn, [
          n("div", null, [
            n("div", {
              class: u(["block md:!hidden h-[400px] w-full rounded-2xl mb-6 animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
            }, null, 2),
            n("div", {
              class: u(["!hidden md:!block h-[600px] w-full rounded-3xl mb-8 animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
            }, null, 2),
            n("div", cn, [
              n("div", {
                class: u(["h-8 w-3/4 rounded-lg animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
              }, null, 2),
              n("div", {
                class: u(["h-6 w-1/2 rounded-lg animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
              }, null, 2)
            ])
          ]),
          n("div", {
            class: u(["!hidden lg:!block h-[500px] rounded-3xl animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
          }, null, 2)
        ])
      ])) : o.value && o.value.id ? (v(), g("div", un, [
        n("nav", fn, [
          n("div", {
            class: u(["flex items-center gap-2", c.value ? "text-slate-400" : "text-slate-500"])
          }, [
            n("span", {
              class: "hover:text-blue-500 transition-colors cursor-pointer",
              onClick: lt
            }, "Home"),
            l[19] || (l[19] = re()),
            l[20] || (l[20] = n("span", { class: "opacity-30" }, "/", -1)),
            (v(!0), g(W, null, J(o.value.category, (p, k) => (v(), g("span", {
              key: k,
              class: "flex items-center gap-2"
            }, [
              n("span", pn, C(p), 1),
              l[18] || (l[18] = n("span", { class: "opacity-30" }, "/", -1))
            ]))), 128)),
            n("span", {
              class: u(["font-medium truncate max-w-[200px]", c.value ? "text-slate-200" : "text-slate-900"])
            }, C(o.value.title), 3)
          ], 2),
          n("button", {
            class: u(["group flex items-center gap-2 px-4 py-2 rounded-full transition-all border shadow-sm hover:shadow-md active:scale-95", c.value ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"]),
            onClick: ot
          }, [
            n("div", hn, [
              c.value ? (v(), g("svg", bn, [...l[21] || (l[21] = [
                Ee('<circle cx="12" cy="12" r="5" data-v-8ba20f11></circle><line x1="12" y1="1" x2="12" y2="3" data-v-8ba20f11></line><line x1="12" y1="21" x2="12" y2="23" data-v-8ba20f11></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-8ba20f11></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-8ba20f11></line><line x1="1" y1="12" x2="3" y2="12" data-v-8ba20f11></line><line x1="21" y1="12" x2="23" y2="12" data-v-8ba20f11></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-8ba20f11></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-8ba20f11></line>', 9)
              ])])) : (v(), g("svg", mn, [...l[22] || (l[22] = [
                n("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
              ])]))
            ]),
            n("span", xn, C(c.value ? "Dark Mode" : "Light Mode"), 1)
          ], 2)
        ]),
        n("header", vn, [
          n("div", gn, [
            n("span", {
              class: u(["px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border shadow-sm", c.value ? "bg-amber-900/30 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-700 border-amber-100"])
            }, "Bestseller", 2),
            ve.value > 0 ? (v(), g("span", yn, "-" + C(ve.value) + "% Sale", 1)) : z("", !0)
          ]),
          n("h1", {
            class: u(["text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4 tracking-tight", c.value ? "text-white" : "text-slate-900"])
          }, C(o.value.title), 3),
          n("div", {
            class: u(["flex items-center gap-4 text-sm font-medium", c.value ? "text-slate-400" : "text-slate-500"])
          }, [
            n("div", wn, [
              n("span", _n, [
                (v(), g(W, null, J(5, (p) => n("svg", {
                  key: p,
                  class: u(["w-4 h-4", p <= Math.round(de.value.average_rating) ? "fill-current" : "fill-gray-300"]),
                  viewBox: "0 0 20 20"
                }, [...l[23] || (l[23] = [
                  n("path", { d: `M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 \r
          0 1.371 1.24.588 1.81l-2.8 \r
          2.034a1 1 0 00-.364 1.118l1.07 \r
          3.292c.3.921-.755 1.688-1.54 \r
          1.118l-2.8-2.034a1 1 0 \r
          00-1.175 0l-2.8 \r
          2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 \r
          1 0 00-.364-1.118L2.98 \r
          8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 \r
          1 0 00.951-.69l1.07-3.292z` }, null, -1)
                ])], 2)), 64))
              ]),
              n("span", {
                class: u(["font-bold ml-1", c.value ? "text-white" : "text-slate-900"])
              }, C(de.value.average_rating.toFixed(1)), 3),
              n("a", {
                href: "#reviews",
                class: u(["ml-2 border-b border-dotted hover:text-blue-500 hover:border-blue-500 transition-colors", c.value ? "border-slate-600" : "border-slate-400"])
              }, C(de.value.total_reviews) + " reviews ", 3)
            ]),
            l[25] || (l[25] = n("span", { class: "opacity-30 text-xl font-light" }, "|", -1)),
            o.value.id ? (v(), g("span", kn, [
              l[24] || (l[24] = re(" Product: ", -1)),
              n("span", En, C(o.value.id), 1)
            ])) : z("", !0)
          ], 2),
          o.value.hashtags && o.value.hashtags.length ? (v(), g("div", Cn, [
            (v(!0), g(W, null, J(o.value.hashtags, (p, k) => (v(), g("span", {
              key: k,
              class: u(["px-3 py-1 text-xs font-semibold rounded-full border transition-all cursor-pointer hover:shadow-sm", c.value ? "bg-slate-800 text-blue-400 border-slate-700 hover:border-blue-500/50" : "bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100"])
            }, C(p), 3))), 128))
          ])) : z("", !0)
        ]),
        n("div", Sn, [
          n("div", Rn, [
            n("div", On, [
              n("div", Tn, [
                n("span", {
                  class: u(["px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border", c.value ? "bg-amber-900/30 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-700 border-amber-100"])
                }, "Bestseller", 2),
                ve.value > 0 ? (v(), g("span", An, "-" + C(ve.value) + "%", 1)) : z("", !0)
              ]),
              n("h1", {
                class: u(["text-[26px] font-bold leading-[1.2] mb-3 tracking-tight", c.value ? "text-white" : "text-slate-900"])
              }, C(o.value.title), 3),
              n("div", Nn, [
                (v(), g(W, null, J(5, (p) => n("svg", {
                  key: p,
                  class: u(["w-3.5 h-3.5", p <= Math.round(de.value.average_rating) ? "fill-current" : "fill-gray-300"]),
                  viewBox: "0 0 20 20"
                }, [...l[26] || (l[26] = [
                  n("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
                ])], 2)), 64)),
                n("span", Fn, C(de.value.average_rating.toFixed(1)), 1),
                n("span", Bn, " (" + C(de.value.total_reviews) + " reviews) ", 1)
              ]),
              o.value.hashtags && o.value.hashtags.length ? (v(), g("div", Pn, [
                (v(!0), g(W, null, J(o.value.hashtags, (p, k) => (v(), g("span", {
                  key: k,
                  class: u(["px-2.5 py-1 text-[11px] font-semibold rounded-full border whitespace-nowrap", c.value ? "bg-slate-800 text-blue-400 border-slate-700" : "bg-blue-50 text-blue-600 border-blue-100"])
                }, C(p), 3))), 128))
              ])) : z("", !0)
            ]),
            n("div", $n, [
              n("div", Ln, [
                n("div", jn, [
                  n("div", In, [
                    (v(!0), g(W, null, J(H.value, (p, k) => (v(), g("div", {
                      key: k,
                      class: u(["w-[80px] h-[100px] rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 relative border", [
                        c.value ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100",
                        d.value === p ? "ring-2 ring-blue-500 ring-offset-2 " + (c.value ? "ring-offset-slate-900" : "ring-offset-white") : "hover:opacity-80 opacity-70 hover:opacity-100"
                      ]]),
                      onMouseover: (N) => d.value = p
                    }, [
                      n("img", {
                        src: p,
                        class: "w-full h-full object-cover"
                      }, null, 8, Mn)
                    ], 42, zn))), 128))
                  ]),
                  n("div", {
                    class: u(["flex-1 rounded-[32px] flex items-center justify-center overflow-hidden cursor-zoom-in relative shadow-sm border", c.value ? "bg-slate-800/50 border-slate-700" : "bg-white border-slate-100"])
                  }, [
                    n("img", {
                      src: d.value,
                      class: "max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-110"
                    }, null, 8, Dn),
                    n("div", Un, [
                      n("button", {
                        class: "p-2 rounded-full bg-white/90 shadow-md text-slate-700 hover:text-blue-600 dark:bg-slate-800/90 dark:text-slate-200",
                        onClick: ds
                      }, [
                        (v(), g("svg", {
                          fill: m.value ? "currentColor" : "none",
                          class: u(m.value ? "text-rose-500" : ""),
                          width: "20",
                          height: "20",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [...l[27] || (l[27] = [
                          n("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          }, null, -1)
                        ])], 10, qn))
                      ])
                    ])
                  ], 2)
                ]),
                n("div", {
                  class: u(["md:!hidden relative w-full pb-6 transition-colors duration-300", c.value ? "bg-[#0f172a]" : "bg-[#F9FAFB]"])
                }, [
                  n("div", {
                    class: "flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full h-[100vw] max-h-[500px]",
                    onScroll: fs
                  }, [
                    (v(!0), g(W, null, J(H.value, (p, k) => (v(), g("div", {
                      class: "min-w-full snap-center flex items-center justify-center p-6",
                      key: k
                    }, [
                      n("img", {
                        src: p,
                        class: "max-w-full max-h-full object-contain drop-shadow-xl"
                      }, null, 8, Hn)
                    ]))), 128))
                  ], 32),
                  n("div", {
                    class: u(["absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md z-10 border", c.value ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"])
                  }, [
                    (v(!0), g(W, null, J(H.value, (p, k) => (v(), g("span", {
                      key: k,
                      class: u(["h-1.5 rounded-full transition-all duration-300 shadow-sm", b.value === k ? c.value ? "bg-white w-4" : "bg-slate-800 w-4" : c.value ? "bg-white/30 w-1.5" : "bg-slate-800/30 w-1.5"])
                    }, null, 2))), 128))
                  ], 2)
                ], 2)
              ]),
              n("div", Vn, [
                n("div", {
                  class: u(["md:!hidden pb-6 border-b", c.value ? "border-slate-800" : "border-slate-200"])
                }, [
                  n("div", Wn, [
                    n("span", Jn, C(ie(G.value)) + " ₽", 1),
                    I.value > G.value ? (v(), g("span", Kn, C(ie(I.value)) + " ₽", 1)) : z("", !0)
                  ]),
                  n("div", {
                    class: u(["inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg border shadow-sm", c.value ? "bg-emerald-900/20 text-emerald-400 border-emerald-900/30" : "bg-emerald-50 text-emerald-700 border-emerald-100"])
                  }, [
                    n("span", null, C(ie(_e.value)) + " ₽", 1),
                    l[28] || (l[28] = re(" with MN Card ", -1))
                  ], 2)
                ], 2),
                ae.value.length ? (v(), g("div", Xn, [
                  n("div", {
                    class: u(["text-sm font-medium mb-3 flex items-center gap-2", c.value ? "text-slate-400" : "text-slate-500"])
                  }, [
                    l[29] || (l[29] = n("span", null, "Color:", -1)),
                    n("span", {
                      class: u(["font-bold text-base", c.value ? "text-white" : "text-slate-900"])
                    }, C(x.value), 3)
                  ], 2),
                  n("div", Gn, [
                    (v(!0), g(W, null, J(ae.value, (p) => (v(), g("div", {
                      key: p.id,
                      class: u(["relative w-[72px] h-[90px] rounded-xl cursor-pointer overflow-hidden transition-all duration-200 group border", [
                        c.value ? "border-slate-700" : "border-slate-200",
                        x.value === p.name ? "ring-2 ring-blue-500 ring-offset-2 " + (c.value ? "ring-offset-slate-900" : "ring-offset-white") : "hover:opacity-80"
                      ]]),
                      onClick: (k) => it(p)
                    }, [
                      p.url ? (v(), g("img", {
                        key: 0,
                        src: p.url,
                        class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      }, null, 8, Qn)) : (v(), g("span", {
                        key: 1,
                        class: u(["flex w-full h-full items-center justify-center p-1 text-center text-xs leading-tight font-medium", c.value ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"])
                      }, C(p.name), 3)),
                      x.value === p.name ? (v(), g("div", Yn, [...l[30] || (l[30] = [
                        n("div", { class: "bg-blue-600 rounded-full p-1 shadow-lg animate-[slideUp_0.2s_ease-out]" }, [
                          n("svg", {
                            class: "w-3.5 h-3.5 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "3.5"
                          }, [
                            n("path", { d: "M5 13l4 4L19 7" })
                          ])
                        ], -1)
                      ])])) : z("", !0)
                    ], 10, Zn))), 128))
                  ])
                ])) : z("", !0),
                fe.value.length ? (v(), g("div", ea, [
                  n("div", ta, [
                    n("span", {
                      class: u(["text-sm font-medium flex items-center gap-2", c.value ? "text-slate-400" : "text-slate-500"])
                    }, [
                      l[31] || (l[31] = n("span", null, "Size:", -1)),
                      n("span", {
                        class: u(["font-bold text-base", c.value ? "text-white" : "text-slate-900"])
                      }, C(h.value), 3)
                    ], 2),
                    j.value ? (v(), g("button", {
                      key: 0,
                      class: u(["text-xs font-bold flex items-center gap-1.5 transition hover:opacity-70 px-2 py-1 rounded-md", c.value ? "text-blue-400 bg-blue-400/10" : "text-blue-600 bg-blue-50"]),
                      onClick: l[0] || (l[0] = (p) => _.value = !0)
                    }, [...l[32] || (l[32] = [
                      n("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        n("path", { d: "M19.5 12h-15M19.5 12l-4-4m4 4l-4 4" })
                      ], -1),
                      re(" Size Chart ", -1)
                    ])], 2)) : z("", !0)
                  ]),
                  n("div", sa, [
                    (v(!0), g(W, null, J(fe.value, (p) => (v(), g("button", {
                      key: p,
                      class: u(["h-12 min-w-[3.5rem] px-4 rounded-xl text-sm font-semibold transition-all duration-200 border relative overflow-hidden", [
                        h.value === p ? c.value ? "bg-slate-800 border-blue-500 text-blue-400 ring-1 ring-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]" : "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200" : c.value ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-500" : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      ]]),
                      onClick: (k) => h.value = p
                    }, C(p), 11, ra))), 128))
                  ])
                ])) : z("", !0),
                n("div", {
                  class: u(["!hidden lg:!block p-6 rounded-2xl border transition-colors duration-300", c.value ? "bg-slate-800/40 border-slate-700" : "bg-slate-50/50 border-slate-200/60"])
                }, [
                  n("h3", {
                    class: u(["text-xs font-bold mb-4 uppercase tracking-wider opacity-60", c.value ? "text-white" : "text-slate-900"])
                  }, "Key Features", 2),
                  n("ul", na, [
                    (v(!0), g(W, null, J(Fe.value.slice(0, 5), (p, k) => (v(), g("li", {
                      key: k,
                      class: u(["text-sm flex justify-between items-start border-b pb-2 last:border-0 border-dashed", c.value ? "border-slate-700/50" : "border-slate-200"])
                    }, [
                      n("span", {
                        class: u(c.value ? "text-slate-400" : "text-slate-500")
                      }, C(p.name), 3),
                      n("span", {
                        class: u(["font-medium text-right max-w-[60%]", c.value ? "text-slate-200" : "text-slate-900"])
                      }, C(p.value), 3)
                    ], 2))), 128))
                  ]),
                  n("button", {
                    class: u(["text-sm font-bold flex items-center gap-1 transition hover:opacity-70 group", c.value ? "text-blue-400" : "text-blue-600"]),
                    onClick: us
                  }, [...l[33] || (l[33] = [
                    re(" View all characteristics ", -1),
                    n("svg", {
                      class: "group-hover:translate-x-1 transition-transform",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      n("path", { d: "M6 9l6 6 6-6" })
                    ], -1)
                  ])], 2)
                ], 2),
                n("div", {
                  class: u(["lg:!hidden space-y-4 pt-4 border-t", c.value ? "border-slate-700" : "border-slate-100"])
                }, [
                  n("div", {
                    class: u(["font-bold text-sm", c.value ? "text-slate-200" : "text-slate-900"])
                  }, "Check Delivery Availability", 2),
                  n("div", aa, [
                    Ce(n("input", {
                      "onUpdate:modelValue": l[1] || (l[1] = (p) => w.value = p),
                      type: "text",
                      placeholder: "Enter PIN/ZIP code",
                      onKeyup: ht(D, ["enter"]),
                      class: u(["flex-1 px-3 py-2 text-sm rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all", c.value ? "bg-slate-800 border-slate-700 text-white placeholder-slate-500" : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"])
                    }, null, 34), [
                      [pt, w.value]
                    ]),
                    n("button", {
                      onClick: D,
                      disabled: L.value,
                      class: "px-4 py-2 bg-slate-900 text-white dark:bg-slate-700 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center min-w-[70px]"
                    }, [
                      L.value ? (v(), g("svg", la, [...l[34] || (l[34] = [
                        n("circle", {
                          class: "opacity-25",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          "stroke-width": "4"
                        }, null, -1),
                        n("path", {
                          class: "opacity-75",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }, null, -1)
                      ])])) : (v(), g("span", ia, "Check"))
                    ], 8, oa)
                  ]),
                  F.value ? (v(), g("div", da, C(F.value), 1)) : z("", !0),
                  O.value ? (v(), g("div", {
                    key: 1,
                    class: u(["mt-4 p-4 rounded-2xl border animate-[fadeIn_0.3s_ease-out]", c.value ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-100"])
                  }, [
                    n("div", ca, [
                      l[36] || (l[36] = n("div", { class: "text-2xl mt-1" }, "🚚", -1)),
                      n("div", null, [
                        n("div", {
                          class: u(["font-bold mb-1", c.value ? "text-green-400" : "text-green-600"])
                        }, C(O.value.expected_delivery.text), 3),
                        n("div", {
                          class: u(["text-xs mb-2 leading-relaxed", c.value ? "text-slate-300" : "text-slate-600"])
                        }, [
                          l[35] || (l[35] = n("span", { class: "font-semibold opacity-70" }, "To:", -1)),
                          re(" " + C(O.value.details.validated_location), 1)
                        ], 2),
                        n("div", ua, [
                          n("div", {
                            class: u(["text-[10px] font-bold uppercase tracking-wider px-2 py-1 inline-flex items-center gap-1 rounded border", c.value ? "bg-slate-800 text-slate-300 border-slate-600" : "bg-white text-slate-600 border-slate-200"])
                          }, C(O.value.details.delivery_type === "international" ? "✈️ Int." : "🏠 Dom."), 3),
                          n("div", {
                            class: u(["text-[10px] font-bold uppercase tracking-wider px-2 py-1 inline-flex items-center gap-1 rounded border", c.value ? "bg-slate-800 text-slate-300 border-slate-600" : "bg-white text-slate-600 border-slate-200"])
                          }, " ⏱️ " + C(O.value.details.delivery_days) + " Days ", 3)
                        ])
                      ])
                    ])
                  ], 2)) : z("", !0)
                ], 2)
              ])
            ]),
            n("div", {
              class: u(["px-4 lg:px-0 mt-16 pt-10 border-t", c.value ? "border-slate-800" : "border-slate-200"])
            }, [
              n("h2", {
                class: u(["text-2xl font-bold mb-6 tracking-tight", c.value ? "text-white" : "text-slate-900"])
              }, "Description", 2),
              n("div", {
                class: u(["prose max-w-3xl leading-relaxed mb-12 text-[1.05rem]", c.value ? "prose-invert text-slate-300" : "prose-slate text-slate-600"]),
                innerHTML: oe.value
              }, null, 10, fa),
              n("div", pa, [
                n("h3", {
                  class: u(["text-2xl font-bold mb-6 tracking-tight", c.value ? "text-white" : "text-slate-900"])
                }, "All Characteristics", 2),
                n("div", {
                  class: u(["rounded-2xl border overflow-hidden", c.value ? "border-slate-800" : "border-slate-200"])
                }, [
                  (v(!0), g(W, null, J(ls.value, (p, k) => (v(), g("div", {
                    class: u(["flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:px-6 transition-colors", [
                      k % 2 === 0 ? c.value ? "bg-slate-800/30" : "bg-slate-50" : c.value ? "bg-transparent" : "bg-white"
                    ]]),
                    key: k
                  }, [
                    n("span", {
                      class: u(["text-sm mb-1 sm:mb-0 font-medium opacity-80", c.value ? "text-slate-400" : "text-slate-500"])
                    }, C(p.name), 3),
                    n("span", {
                      class: u(["font-semibold text-sm sm:text-right", c.value ? "text-slate-200" : "text-slate-900"])
                    }, C(p.value), 3)
                  ], 2))), 128))
                ], 2),
                Fe.value.length > 5 ? (v(), g("button", {
                  key: 0,
                  class: u(["mt-6 flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-xl border font-bold text-sm transition-all hover:shadow-md active:scale-[0.98]", c.value ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"]),
                  onClick: l[2] || (l[2] = (p) => A.value = !A.value)
                }, [
                  re(C(A.value ? "Hide characteristics" : "Show all characteristics") + " ", 1),
                  (v(), g("svg", {
                    class: u([{ "rotate-180": A.value }, "transition-transform duration-300 ml-2"]),
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [...l[37] || (l[37] = [
                    n("path", { d: "M6 9l6 6 6-6" }, null, -1)
                  ])], 2))
                ], 2)) : z("", !0)
              ])
            ], 2),
            n("div", {
              class: u(["px-4 lg:px-0 mt-16 pt-10 border-t", c.value ? "border-slate-800" : "border-slate-200"])
            }, [
              n("h2", {
                class: u(["text-2xl font-bold mb-6 tracking-tight", c.value ? "text-white" : "text-slate-900"])
              }, "Questions and Answers", 2),
              n("div", {
                class: u(["rounded-2xl border overflow-hidden divide-y", c.value ? "border-slate-800 divide-slate-800" : "border-slate-200 divide-slate-100"])
              }, [
                (v(!0), g(W, null, J(ce.value, (p, k) => (v(), g("div", { key: k }, [
                  n("button", {
                    class: u(["w-full py-5 px-6 flex justify-between items-center cursor-pointer group text-left transition-colors", c.value ? "bg-[#0f172a] hover:bg-slate-800" : "bg-white hover:bg-slate-50"]),
                    onClick: (N) => cs(k)
                  }, [
                    n("span", {
                      class: u(["font-semibold text-base transition-colors group-hover:text-blue-500", c.value ? "text-slate-200" : "text-slate-900"])
                    }, C(p.question), 3),
                    n("div", {
                      class: u(["p-1 rounded-full border transition-all", [
                        p.isOpen ? "rotate-180 bg-blue-500 text-white border-blue-500" : c.value ? "border-slate-700 text-slate-500" : "border-slate-200 text-slate-400"
                      ]])
                    }, [...l[38] || (l[38] = [
                      n("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        n("path", { d: "M6 9l6 6 6-6" })
                      ], -1)
                    ])], 2)
                  ], 10, ha),
                  Ce(n("div", {
                    class: u(["px-6 pb-6 pt-2 text-[15px] leading-relaxed animate-[fadeIn_0.2s_ease-out]", c.value ? "bg-[#0f172a] text-slate-400" : "bg-white text-slate-600"])
                  }, [
                    n("p", null, C(p.answer), 1)
                  ], 2), [
                    [He, p.isOpen]
                  ])
                ]))), 128))
              ], 2)
            ], 2),
            n("div", {
              class: u(["px-4 lg:px-0 mt-16 mb-24 pt-10 border-t", c.value ? "border-slate-800" : "border-slate-200"]),
              id: "reviews"
            }, [
              n("div", ba, [
                n("h2", {
                  class: u(["text-2xl font-bold flex items-center gap-3", c.value ? "text-white" : "text-slate-900"])
                }, [
                  l[39] || (l[39] = re(" Reviews ", -1)),
                  n("span", {
                    class: u(["text-sm font-bold px-3 py-1 rounded-full", c.value ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"])
                  }, C(X.value.length), 3)
                ], 2)
              ]),
              U.value ? (v(), g("div", ma, [
                (v(), g(W, null, J(2, (p) => n("div", {
                  key: p,
                  class: u(["h-[150px] rounded-2xl animate-shimmer", c.value ? "bg-slate-800" : "bg-slate-100"])
                }, null, 2)), 64))
              ])) : X.value.length > 0 ? (v(), g("div", xa, [
                (v(!0), g(W, null, J(X.value, (p, k) => (v(), g("div", {
                  class: u(["p-6 rounded-2xl border transition-all hover:shadow-lg duration-300", c.value ? "bg-slate-800/30 border-slate-700 hover:bg-slate-800" : "bg-white border-slate-100 shadow-sm hover:shadow-md"]),
                  key: k
                }, [
                  n("div", va, [
                    n("div", ga, [
                      n("div", {
                        class: "w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm shadow-md",
                        style: xs(`background:${p.color}`)
                      }, C(p.name ? p.name[0] : "U"), 5),
                      n("div", null, [
                        n("div", {
                          class: u(["font-bold text-sm", c.value ? "text-white" : "text-slate-900"])
                        }, C(p.name), 3),
                        l[40] || (l[40] = n("div", { class: "text-amber-500 text-xs tracking-wide flex" }, "★★★★★", -1))
                      ])
                    ]),
                    n("span", {
                      class: u(["text-xs font-medium opacity-60", c.value ? "text-slate-400" : "text-slate-500"])
                    }, C(p.date), 3)
                  ]),
                  n("div", {
                    class: u(["text-[15px] leading-relaxed mb-4", c.value ? "text-slate-300" : "text-slate-600"])
                  }, C(p.text), 3),
                  n("div", {
                    class: u(["inline-block text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border", c.value ? "bg-slate-800 text-slate-400 border-slate-700" : "bg-slate-50 text-slate-500 border-slate-100"])
                  }, " Var: " + C(x.value) + " • Size: " + C(h.value || "M"), 3)
                ], 2))), 128))
              ])) : (v(), g("div", {
                key: 2,
                class: u(["flex flex-col items-center justify-center py-12 px-4 rounded-3xl border-2 border-dashed", c.value ? "border-slate-800 bg-slate-800/20" : "border-slate-200 bg-slate-50"])
              }, [
                l[41] || (l[41] = n("span", { class: "text-4xl mb-4" }, "💬", -1)),
                n("h4", {
                  class: u(["font-bold text-lg mb-1", c.value ? "text-white" : "text-slate-900"])
                }, "No reviews yet", 2),
                n("p", {
                  class: u(["text-sm text-center max-w-sm mb-6", c.value ? "text-slate-400" : "text-slate-500"]),
                  style: { display: "none" }
                }, "Be the first to share your thoughts and help others make a decision!", 2),
                n("button", {
                  class: u(["px-6 py-2.5 rounded-xl font-bold text-sm transition-all", c.value ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-white border text-slate-900 shadow-sm hover:bg-slate-50"]),
                  style: { display: "none" }
                }, " Write a Review ", 2)
              ], 2))
            ], 2)
          ]),
          n("div", ya, [
            n("div", {
              class: u(["sticky top-24 p-6 rounded-[32px] border transition-colors duration-300", c.value ? "bg-[#151e32] border-slate-700 ring-1 ring-white/5 shadow-2xl shadow-black/20" : "bg-white border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"])
            }, [
              n("div", wa, [
                n("div", null, [
                  n("div", _a, [
                    n("div", ka, C(ie(G.value)) + " ₽", 1),
                    I.value > G.value ? (v(), g("span", Ea, C(ie(I.value)) + " ₽", 1)) : z("", !0)
                  ]),
                  n("div", {
                    class: u(["mt-3 inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg border", c.value ? "bg-emerald-900/20 text-emerald-400 border-emerald-900/30" : "bg-emerald-50 text-emerald-700 border-emerald-100"])
                  }, [
                    l[42] || (l[42] = n("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 24 24",
                      fill: "currentColor"
                    }, [
                      n("path", {
                        d: "M2 7h20v10H2z",
                        opacity: "0.3"
                      }),
                      n("path", { d: "M17 12h2" }),
                      n("path", { d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zm2 0v10h16V7H4z" })
                    ], -1)),
                    n("span", null, C(ie(_e.value)) + " ₽ with MN Card", 1)
                  ], 2)
                ])
              ]),
              n("div", {
                class: u(["space-y-4 mb-8 pt-6 border-t", c.value ? "border-slate-700" : "border-slate-100"])
              }, [
                n("div", {
                  class: u(["font-bold text-sm", c.value ? "text-slate-200" : "text-slate-900"])
                }, "Check Delivery Availability", 2),
                n("div", Ca, [
                  Ce(n("input", {
                    "onUpdate:modelValue": l[3] || (l[3] = (p) => w.value = p),
                    type: "text",
                    placeholder: "Enter PIN/ZIP code",
                    onKeyup: ht(D, ["enter"]),
                    class: u(["flex-1 px-3 py-2 text-sm rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all", c.value ? "bg-slate-800 border-slate-700 text-white placeholder-slate-500" : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"])
                  }, null, 34), [
                    [pt, w.value]
                  ]),
                  n("button", {
                    onClick: D,
                    disabled: L.value,
                    class: "px-4 py-2 bg-slate-900 text-white dark:bg-slate-700 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center min-w-[70px]"
                  }, [
                    L.value ? (v(), g("svg", Ra, [...l[43] || (l[43] = [
                      n("circle", {
                        class: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        "stroke-width": "4"
                      }, null, -1),
                      n("path", {
                        class: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      }, null, -1)
                    ])])) : (v(), g("span", Oa, "Check"))
                  ], 8, Sa)
                ]),
                F.value ? (v(), g("div", Ta, C(F.value), 1)) : z("", !0),
                O.value ? (v(), g("div", {
                  key: 1,
                  class: u(["mt-4 p-4 rounded-2xl border animate-[fadeIn_0.3s_ease-out]", c.value ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-100"])
                }, [
                  n("div", Aa, [
                    l[45] || (l[45] = n("div", { class: "text-2xl mt-1" }, "🚚", -1)),
                    n("div", null, [
                      n("div", {
                        class: u(["font-bold mb-1", c.value ? "text-green-400" : "text-green-600"])
                      }, C(O.value.expected_delivery.text), 3),
                      n("div", {
                        class: u(["text-xs mb-2 leading-relaxed", c.value ? "text-slate-300" : "text-slate-600"])
                      }, [
                        l[44] || (l[44] = n("span", { class: "font-semibold opacity-70" }, "To:", -1)),
                        re(" " + C(O.value.details.validated_location), 1)
                      ], 2),
                      n("div", Na, [
                        n("div", {
                          class: u(["text-[10px] font-bold uppercase tracking-wider px-2 py-1 inline-flex items-center gap-1 rounded border", c.value ? "bg-slate-800 text-slate-300 border-slate-600" : "bg-white text-slate-600 border-slate-200"])
                        }, C(O.value.details.delivery_type === "international" ? "✈️ Int." : "🏠 Dom."), 3),
                        n("div", {
                          class: u(["text-[10px] font-bold uppercase tracking-wider px-2 py-1 inline-flex items-center gap-1 rounded border", c.value ? "bg-slate-800 text-slate-300 border-slate-600" : "bg-white text-slate-600 border-slate-200"])
                        }, " ⏱️ " + C(O.value.details.delivery_days) + " Days ", 3)
                      ])
                    ])
                  ])
                ], 2)) : z("", !0)
              ], 2),
              n("div", Fa, [
                V.value > 0 ? (v(), g("div", {
                  key: 0,
                  class: u(["w-full h-[56px] flex items-center justify-between rounded-2xl px-2 border transition-all", c.value ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"])
                }, [
                  n("button", {
                    onClick: l[4] || (l[4] = (p) => ge(-1)),
                    disabled: $.value,
                    class: u(["w-12 h-12 flex items-center justify-center rounded-xl transition-all active:scale-95 disabled:opacity-50", c.value ? "bg-slate-700 text-white hover:bg-slate-600" : "bg-white text-slate-800 shadow-sm hover:bg-slate-50"])
                  }, [...l[46] || (l[46] = [
                    n("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2.5"
                    }, [
                      n("line", {
                        x1: "5",
                        y1: "12",
                        x2: "19",
                        y2: "12"
                      })
                    ], -1)
                  ])], 10, Ba),
                  n("div", Pa, [
                    n("span", {
                      class: u(["font-bold text-lg leading-none", c.value ? "text-white" : "text-slate-900"])
                    }, C(V.value), 3),
                    n("span", {
                      class: u(["text-[10px] font-semibold uppercase tracking-wider opacity-60", c.value ? "text-slate-300" : "text-slate-500"])
                    }, "In Cart", 2)
                  ]),
                  n("button", {
                    onClick: l[5] || (l[5] = (p) => ge(1)),
                    disabled: $.value,
                    class: u(["w-12 h-12 flex items-center justify-center rounded-xl text-white shadow-sm transition-all active:scale-95 disabled:opacity-50", (c.value, "bg-blue-600 hover:bg-blue-500")])
                  }, [
                    $.value ? (v(), g("svg", La, [...l[47] || (l[47] = [
                      n("circle", {
                        class: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        "stroke-width": "4"
                      }, null, -1),
                      n("path", {
                        class: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      }, null, -1)
                    ])])) : (v(), g("svg", ja, [...l[48] || (l[48] = [
                      n("line", {
                        x1: "12",
                        y1: "5",
                        x2: "12",
                        y2: "19"
                      }, null, -1),
                      n("line", {
                        x1: "5",
                        y1: "12",
                        x2: "19",
                        y2: "12"
                      }, null, -1)
                    ])]))
                  ], 10, $a)
                ], 2)) : (v(), g("button", {
                  key: 1,
                  class: "w-full h-[56px] bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-[0.98] flex items-center justify-center gap-2 text-[15px]",
                  onClick: l[6] || (l[6] = (p) => ge(1)),
                  disabled: $.value
                }, [
                  $.value ? (v(), g("svg", za, [...l[49] || (l[49] = [
                    n("circle", {
                      class: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      "stroke-width": "4"
                    }, null, -1),
                    n("path", {
                      class: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    }, null, -1)
                  ])])) : (v(), g("span", Ma, "Add to Cart"))
                ], 8, Ia)),
                n("button", {
                  onClick: os,
                  disabled: $.value,
                  class: u(["w-full h-[56px] font-bold rounded-2xl transition-all duration-300 border active:scale-[0.98] cursor-pointer disabled:opacity-50", c.value ? "bg-transparent hover:bg-slate-800 text-white border-slate-600 hover:border-slate-500" : "bg-white hover:bg-slate-50 text-slate-900 border-slate-200 hover:border-slate-300"])
                }, " Buy Now ", 10, Da)
              ]),
              n("div", {
                class: u(["mt-8 pt-6 border-t flex items-center gap-3", c.value ? "border-slate-700" : "border-slate-100"])
              }, [
                n("div", {
                  class: u(["w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-md text-lg", c.value ? "bg-slate-700" : "bg-slate-900"])
                }, C(o.value.brand ? o.value.brand[0] : "B"), 3),
                n("div", null, [
                  n("div", {
                    class: u(["font-bold text-sm mb-0.5", c.value ? "text-white" : "text-slate-900"])
                  }, C(o.value.brand), 3),
                  n("div", {
                    class: u(["text-xs flex items-center gap-1", c.value ? "text-slate-400" : "text-slate-500"])
                  }, [...l[50] || (l[50] = [
                    n("span", { class: "text-amber-500" }, "★★★★★", -1),
                    re(" 4.9 • Official Seller ", -1)
                  ])], 2)
                ])
              ], 2)
            ], 2)
          ])
        ]),
        n("div", {
          class: u(["mt-2 pt-1 border-t px-4 lg:px-0", c.value ? "border-slate-800" : "border-slate-200"])
        }, [
          n("div", {
            class: "mt-12 w-full min-h-[250px] custom-widget-scroll",
            onWheel: hs
          }, [
            E.value ? (v(), g("div", {
              key: 0,
              innerHTML: E.value
            }, null, 8, Ua)) : (v(), g("div", qa, [
              n("div", {
                class: u(["w-[200px] h-[300px] rounded-2xl shrink-0", c.value ? "bg-slate-800" : "bg-slate-100"])
              }, null, 2),
              n("div", {
                class: u(["w-[200px] h-[300px] rounded-2xl shrink-0", c.value ? "bg-slate-800" : "bg-slate-100"])
              }, null, 2),
              n("div", {
                class: u(["w-[200px] h-[300px] rounded-2xl shrink-0 hidden md:block", c.value ? "bg-slate-800" : "bg-slate-100"])
              }, null, 2)
            ]))
          ], 32)
        ], 2),
        n("div", {
          class: u(["fixed bottom-0 left-0 right-0 backdrop-blur-xl border-t p-4 pb-[max(16px,env(safe-area-inset-bottom))] flex items-center justify-between gap-4 z-50 md:!hidden shadow-[0_-4px_30px_rgba(0,0,0,0.1)] transition-transform duration-300", c.value ? "bg-[#0f172a]/90 border-slate-800" : "bg-white/90 border-slate-200"])
        }, [
          n("div", Ha, [
            n("span", {
              class: u(["text-xl font-extrabold leading-none tracking-tight", c.value ? "text-white" : "text-slate-900"])
            }, C(ie(G.value)) + " ₽", 3),
            I.value > G.value ? (v(), g("span", Va, C(ie(I.value)), 1)) : z("", !0)
          ]),
          V.value > 0 ? (v(), g("div", {
            key: 0,
            class: u(["flex-1 h-12 flex items-center justify-between rounded-xl px-1 border", c.value ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"])
          }, [
            n("button", {
              onClick: l[7] || (l[7] = (p) => ge(-1)),
              disabled: $.value,
              class: u(["w-10 h-10 flex items-center justify-center rounded-lg disabled:opacity-50", c.value ? "bg-slate-700 text-white" : "bg-white text-slate-800 shadow-sm"])
            }, [...l[51] || (l[51] = [
              n("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5"
              }, [
                n("line", {
                  x1: "5",
                  y1: "12",
                  x2: "19",
                  y2: "12"
                })
              ], -1)
            ])], 10, Wa),
            n("span", {
              class: u(["font-bold text-[15px]", c.value ? "text-white" : "text-slate-900"])
            }, C(V.value) + " in Cart", 3),
            n("button", {
              onClick: l[8] || (l[8] = (p) => ge(1)),
              disabled: $.value,
              class: "w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm disabled:opacity-50"
            }, [
              $.value ? (v(), g("svg", Ka, [...l[52] || (l[52] = [
                n("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }, null, -1),
                n("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }, null, -1)
              ])])) : (v(), g("svg", Xa, [...l[53] || (l[53] = [
                n("line", {
                  x1: "12",
                  y1: "5",
                  x2: "12",
                  y2: "19"
                }, null, -1),
                n("line", {
                  x1: "5",
                  y1: "12",
                  x2: "19",
                  y2: "12"
                }, null, -1)
              ])]))
            ], 8, Ja)
          ], 2)) : (v(), g("button", {
            key: 1,
            class: "flex-1 h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base shadow-lg shadow-blue-500/40 active:scale-95 transition-all flex justify-center items-center gap-2 disabled:opacity-50",
            onClick: l[9] || (l[9] = (p) => ge(1)),
            disabled: $.value
          }, [
            $.value ? (v(), g("svg", Za, [...l[54] || (l[54] = [
              n("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }, null, -1),
              n("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }, null, -1)
            ])])) : (v(), g("span", Qa, "Add to Cart"))
          ], 8, Ga))
        ], 2)
      ])) : (v(), g("div", {
        key: 2,
        class: u(["min-h-[60vh] flex flex-col items-center justify-center font-medium opacity-60", c.value ? "text-slate-400" : "text-slate-500"])
      }, [
        n("div", {
          class: u(["p-4 rounded-full mb-4", c.value ? "bg-slate-800" : "bg-slate-100"])
        }, [...l[55] || (l[55] = [
          Ee('<svg class="w-12 h-12 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-8ba20f11><circle cx="12" cy="12" r="10" data-v-8ba20f11></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2" data-v-8ba20f11></path><line x1="9" y1="9" x2="9.01" y2="9" data-v-8ba20f11></line><line x1="15" y1="9" x2="15.01" y2="9" data-v-8ba20f11></line></svg>', 1)
        ])], 2),
        l[56] || (l[56] = n("span", { class: "text-lg" }, "Product Not Found", -1))
      ], 2)),
      _.value ? (v(), g("div", {
        key: 3,
        class: "fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 p-0 sm:p-4 md:p-6",
        onClick: l[13] || (l[13] = ms((p) => _.value = !1, ["self"]))
      }, [
        n("div", Ya, [
          l[76] || (l[76] = n("div", { class: "w-full flex justify-center pt-4 pb-1 md:hidden" }, [
            n("div", { class: "w-12 h-1.5 bg-gray-300 dark:bg-slate-700 rounded-full" })
          ], -1)),
          n("div", eo, [
            n("div", to, [
              n("h2", {
                class: u(["text-xl font-bold", c.value ? "text-white" : "text-gray-900"])
              }, "Size Guide", 2),
              n("button", {
                onClick: l[10] || (l[10] = (p) => _.value = !1),
                class: "p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-gray-200 rounded-full transition-colors"
              }, [...l[57] || (l[57] = [
                n("svg", {
                  class: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  n("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])])
            ]),
            n("div", so, [
              n("button", {
                onClick: l[11] || (l[11] = (p) => R.value = "chart"),
                class: u(["pb-3 text-sm font-bold tracking-wide uppercase border-b-2 transition-colors", R.value === "chart" ? "border-[#FF3E6C] text-[#FF3E6C]" : "border-transparent text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white"])
              }, " Size Chart ", 2),
              n("button", {
                onClick: l[12] || (l[12] = (p) => R.value = "measure"),
                class: u(["pb-3 text-sm font-bold tracking-wide uppercase border-b-2 transition-colors", R.value === "measure" ? "border-[#FF3E6C] text-[#FF3E6C]" : "border-transparent text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white"])
              }, " How to Measure ", 2)
            ])
          ]),
          n("div", ro, [
            Ce(n("div", no, [
              j.value ? (v(), g("div", ao, [
                n("img", {
                  src: j.value,
                  class: "max-w-full h-auto object-contain mix-blend-multiply dark:mix-blend-normal"
                }, null, 8, oo)
              ])) : (v(), g("div", lo, [
                n("div", io, [
                  n("span", {
                    class: u(["text-xs font-medium", c.value ? "text-slate-400" : "text-gray-500"])
                  }, [...l[58] || (l[58] = [
                    re(" Measurements in ", -1),
                    n("span", { class: "font-semibold text-[#FF3E6C]" }, "Inches", -1)
                  ])], 2)
                ]),
                n("div", co, [
                  n("table", uo, [
                    n("thead", null, [
                      n("tr", {
                        class: u(c.value ? "border-b border-slate-700" : "border-b-2 border-gray-100")
                      }, [
                        n("th", {
                          class: u(["py-4 px-4 font-medium text-xs text-left", c.value ? "text-slate-400" : "text-gray-500"])
                        }, "SIZE", 2),
                        n("th", {
                          class: u(["py-4 px-4 font-medium text-xs", c.value ? "text-slate-400" : "text-gray-500"])
                        }, "CHEST", 2),
                        n("th", {
                          class: u(["py-4 px-4 font-medium text-xs", c.value ? "text-slate-400" : "text-gray-500"])
                        }, "LENGTH", 2),
                        n("th", {
                          class: u(["py-4 px-4 font-medium text-xs", c.value ? "text-slate-400" : "text-gray-500"])
                        }, "SHOULDER", 2)
                      ], 2)
                    ]),
                    n("tbody", {
                      class: u(c.value ? "text-slate-300" : "text-gray-700")
                    }, [
                      n("tr", {
                        class: u(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        n("td", {
                          class: u(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "S", 2),
                        l[59] || (l[59] = n("td", { class: "py-4 px-4" }, "38.0", -1)),
                        l[60] || (l[60] = n("td", { class: "py-4 px-4" }, "27.0", -1)),
                        l[61] || (l[61] = n("td", { class: "py-4 px-4" }, "16.0", -1))
                      ], 2),
                      n("tr", {
                        class: u(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        n("td", {
                          class: u(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "M", 2),
                        l[62] || (l[62] = n("td", { class: "py-4 px-4" }, "40.0", -1)),
                        l[63] || (l[63] = n("td", { class: "py-4 px-4" }, "27.5", -1)),
                        l[64] || (l[64] = n("td", { class: "py-4 px-4" }, "16.5", -1))
                      ], 2),
                      n("tr", {
                        class: u(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        n("td", {
                          class: u(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "L", 2),
                        l[65] || (l[65] = n("td", { class: "py-4 px-4" }, "42.0", -1)),
                        l[66] || (l[66] = n("td", { class: "py-4 px-4" }, "28.0", -1)),
                        l[67] || (l[67] = n("td", { class: "py-4 px-4" }, "17.0", -1))
                      ], 2),
                      n("tr", {
                        class: u(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        n("td", {
                          class: u(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "XL", 2),
                        l[68] || (l[68] = n("td", { class: "py-4 px-4" }, "44.0", -1)),
                        l[69] || (l[69] = n("td", { class: "py-4 px-4" }, "28.5", -1)),
                        l[70] || (l[70] = n("td", { class: "py-4 px-4" }, "17.5", -1))
                      ], 2),
                      n("tr", {
                        class: u(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        n("td", {
                          class: u(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "XXL", 2),
                        l[71] || (l[71] = n("td", { class: "py-4 px-4" }, "46.0", -1)),
                        l[72] || (l[72] = n("td", { class: "py-4 px-4" }, "29.0", -1)),
                        l[73] || (l[73] = n("td", { class: "py-4 px-4" }, "18.0", -1))
                      ], 2)
                    ], 2)
                  ])
                ]),
                n("div", {
                  class: u(["mt-6 text-xs font-normal opacity-70 text-left md:text-center pb-4 md:pb-0", c.value ? "text-slate-400" : "text-gray-500"])
                }, " * Garment measurements may vary by ±0.5 inches depending on style and fit. ", 2)
              ]))
            ], 512), [
              [He, R.value === "chart"]
            ]),
            Ce(n("div", fo, [
              n("div", po, [
                n("div", ho, [
                  (v(), g("svg", bo, [
                    n("path", {
                      d: "M40,50 L80,20 L120,20 L160,50 L180,100 L140,120 L130,90 L130,230 L70,230 L70,90 L60,120 L20,100 Z",
                      stroke: c.value ? "#475569" : "#e2e8f0",
                      "stroke-width": "2",
                      "stroke-linejoin": "round"
                    }, null, 8, mo),
                    n("path", {
                      d: "M80,20 C80,20 100,40 120,20",
                      stroke: c.value ? "#475569" : "#e2e8f0",
                      "stroke-width": "2",
                      "stroke-linecap": "round"
                    }, null, 8, xo),
                    l[74] || (l[74] = Ee('<line x1="60" y1="95" x2="140" y2="95" stroke="#FF3E6C" stroke-width="1.5" stroke-dasharray="4 4" data-v-8ba20f11></line><circle cx="60" cy="95" r="2.5" fill="#FF3E6C" stroke="none" data-v-8ba20f11></circle><circle cx="140" cy="95" r="2.5" fill="#FF3E6C" stroke="none" data-v-8ba20f11></circle><rect x="92" y="87" width="16" height="16" rx="8" fill="#FF3E6C" stroke="none" data-v-8ba20f11></rect><text x="100" y="99" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" stroke="none" data-v-8ba20f11>1</text><line x1="90" y1="35" x2="90" y2="230" stroke="#FF3E6C" stroke-width="1.5" stroke-dasharray="4 4" data-v-8ba20f11></line><circle cx="90" cy="35" r="2.5" fill="#FF3E6C" stroke="none" data-v-8ba20f11></circle><circle cx="90" cy="230" r="2.5" fill="#FF3E6C" stroke="none" data-v-8ba20f11></circle><rect x="82" y="125" width="16" height="16" rx="8" fill="#FF3E6C" stroke="none" data-v-8ba20f11></rect><text x="90" y="137" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" stroke="none" data-v-8ba20f11>2</text><line x1="45" y1="45" x2="155" y2="45" stroke="#FF3E6C" stroke-width="1.5" stroke-dasharray="4 4" data-v-8ba20f11></line><circle cx="45" cy="45" r="2.5" fill="#FF3E6C" stroke="none" data-v-8ba20f11></circle><circle cx="155" cy="45" r="2.5" fill="#FF3E6C" stroke="none" data-v-8ba20f11></circle><rect x="92" y="37" width="16" height="16" rx="8" fill="#FF3E6C" stroke="none" data-v-8ba20f11></rect><text x="100" y="49" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" stroke="none" data-v-8ba20f11>3</text>', 15))
                  ]))
                ]),
                n("div", vo, [
                  n("div", go, [
                    l[75] || (l[75] = n("span", { class: "absolute left-0 top-0.5 flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-semibold bg-[#FF3E6C] text-white" }, "1", -1)),
                    n("h4", {
                      class: u(["font-semibold text-sm mb-1", c.value ? "text-white" : "text-black"])
                    }, "Chest", 2),
                    n("p", {
                      class: u(["text-sm leading-relaxed", c.value ? "text-slate-400" : "text-gray-600"])
                    }, "Measure around the fullest part of your chest, keeping the measuring tape horizontal and comfortably loose.", 2)
                  ]),
                  n("div", yo, [
                    n("span", {
                      class: u(["absolute left-0 top-0.5 flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-semibold", c.value ? "bg-slate-800 text-slate-300" : "bg-gray-100 text-gray-600"])
                    }, "2", 2),
                    n("h4", {
                      class: u(["font-semibold text-sm mb-1", c.value ? "text-white" : "text-black"])
                    }, "Front Length", 2),
                    n("p", {
                      class: u(["text-sm leading-relaxed", c.value ? "text-slate-400" : "text-gray-600"])
                    }, "Measure from the highest point of the shoulder (where the collar meets the shoulder) straight down to the hemline.", 2)
                  ]),
                  n("div", wo, [
                    n("span", {
                      class: u(["absolute left-0 top-0.5 flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-semibold", c.value ? "bg-slate-800 text-slate-300" : "bg-gray-100 text-gray-600"])
                    }, "3", 2),
                    n("h4", {
                      class: u(["font-semibold text-sm mb-1", c.value ? "text-white" : "text-black"])
                    }, "Shoulder", 2),
                    n("p", {
                      class: u(["text-sm leading-relaxed", c.value ? "text-slate-400" : "text-gray-600"])
                    }, "Measure straight across the back from the edge of one shoulder seam to the edge of the other shoulder seam.", 2)
                  ])
                ])
              ])
            ], 512), [
              [He, R.value === "measure"]
            ])
          ])
        ])
      ])) : z("", !0)
    ], 10, rn));
  }
}), Eo = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, a] of t)
    s[r] = a;
  return s;
}, Co = /* @__PURE__ */ Eo(ko, [["__scopeId", "data-v-8ba20f11"]]), So = /* @__PURE__ */ Ft({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    const t = e;
    return t._$p?.data.curr.data.lang_code || (t._$p.data.curr.data.lang_code = "en"), (s, r) => (v(), vs(Co, {
      _p: e._p,
      _$p: e._$p,
      _$cb: e._$cb
    }, null, 8, ["_p", "_$p", "_$cb"]));
  }
}), Jo = async (e) => ({
  set: async (t, s) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const a = gs(So, {
      _p: e,
      _$p: t,
      _$cb: s
    }), o = e.f.name("vue-root"), i = {
      r: `<div id="${o}" style="width:100%; height:100%;"></div>`,
      style: "",
      evt: {
        change: () => {
          s?.change({ _$p: t });
        }
      }
    };
    return setTimeout(() => {
      const d = document.getElementById(o);
      d ? a.mount(d) : console.warn(`[Hydrator] Target element #${o} not found.`);
    }, 0), i;
  }
});
export {
  Jo as hydrator,
  Jo as index
};
